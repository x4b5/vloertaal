import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

/**
 * Writes docs/overzicht.md from src/overzicht/ (npm run overzicht).
 * The lists read the app's own files, and those need Vite's `import.meta.env`: so the module is
 * loaded through Vite (as the tests load it), not by tsx alone.
 */
const root = fileURLToPath(new URL('..', import.meta.url));
const server = await createServer({ root, configFile: false, appType: 'custom', logLevel: 'error', server: { middlewareMode: true, ws: false }, optimizeDeps: { noDiscovery: true } });
try {
  const { overzichtMarkdown } = (await server.ssrLoadModule('/src/overzicht/markdown.ts')) as typeof import('../src/overzicht/markdown');
  writeFileSync(new URL('../docs/overzicht.md', import.meta.url), overzichtMarkdown());
  console.log('docs/overzicht.md bijgewerkt');
} finally {
  await server.close();
}
