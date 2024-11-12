import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.tsx'],
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  sourcemap: true,
});
