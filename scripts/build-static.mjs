import { cp, mkdir, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
const assets = ['index.html', 'css', 'images'];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const asset of assets) {
  const source = join(root, asset);
  try {
    await stat(source);
  } catch {
    throw new Error(`Required build asset is missing: ${asset}`);
  }
  await cp(source, join(dist, asset), { recursive: true });
}

await writeFile(
  join(dist, 'build-info.json'),
  `${JSON.stringify({ builtAt: new Date().toISOString(), source: 'static-site' }, null, 2)}\n`,
);

console.log(`Built static site into ${dist}`);
