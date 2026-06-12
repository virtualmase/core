import { readFile } from 'node:fs/promises';
import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = await readFile(join(root, 'index.html'), 'utf8');
const failures = [];

const lineNumberFor = (offset) => html.slice(0, offset).split('\n').length;

const voidElements = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);
const stack = [];
const tagPattern = /<!--[^]*?-->|<![^>]*>|<\/?([a-zA-Z][\w:-]*)(?:\s[^<>]*)?>/g;
let tagMatch;
while ((tagMatch = tagPattern.exec(html)) !== null) {
  const [tag, rawName] = tagMatch;
  if (!rawName) continue;

  const name = rawName.toLowerCase();
  const line = lineNumberFor(tagMatch.index);
  const isClosing = tag.startsWith('</');
  const isSelfClosing = tag.endsWith('/>') || voidElements.has(name);

  if (isClosing) {
    const current = stack.pop();
    if (!current) {
      failures.push(`Unexpected closing </${name}> at line ${line}`);
      continue;
    }
    if (current.name !== name) {
      failures.push(
        `Mismatched closing </${name}> at line ${line}; expected </${current.name}> for <${current.name}> opened at line ${current.line}`,
      );
    }
    continue;
  }

  if (!isSelfClosing) stack.push({ name, line });
}

for (const current of stack.reverse()) {
  failures.push(`Unclosed <${current.name}> opened at line ${current.line}`);
}

const localTargets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(([, target]) => target)
  .filter((target) => !target.startsWith('#'))
  .filter((target) => !/^[a-z][a-z0-9+.-]*:/i.test(target));

for (const target of localTargets) {
  const [path] = target.split('#');
  const [pathname] = path.split('?');
  if (!pathname) continue;

  const resolved = normalize(join(root, pathname));
  if (!resolved.startsWith(root)) {
    failures.push(`${target} escapes the repository root`);
    continue;
  }

  try {
    await readFile(resolved);
  } catch {
    failures.push(`${target} does not exist`);
  }
}

const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(([, id]) => id));
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(([, anchor]) => anchor);
for (const anchor of anchors) {
  if (!ids.has(anchor)) failures.push(`#${anchor} does not match an element id`);
}

if (failures.length > 0) {
  console.error('Static site check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Validated HTML structure, ${localTargets.length} local asset references, and ${anchors.length} in-page anchors.`,
);
