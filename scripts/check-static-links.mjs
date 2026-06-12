import { readFile } from 'node:fs/promises';
import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = await readFile(join(root, 'index.html'), 'utf8');
const failures = [];
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
  console.error('Static link check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Validated ${localTargets.length} local asset references and ${anchors.length} in-page anchors.`);
