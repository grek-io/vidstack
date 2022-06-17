import { build } from 'esbuild';
import { commonOptions } from '../../../.scripts/common-build.js';

async function main() {
  await build({
    ...commonOptions({
      entry: ['src/index.ts'],
      node: true,
      requireShim: true,
      external: ['yargs', /@vidstack/, 'typescript'],
    }),
    bundle: true,
    minify: true,
    outdir: 'dist/node',
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
