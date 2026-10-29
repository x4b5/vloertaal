import { describe, expect, it } from 'vitest';
import { entryOf, newerOnServer, serverVersion } from '../src/lib/appUpdate';

const page = (hash: string) => `<!doctype html><script type="module" crossorigin src="./assets/index-${hash}.js"></script>`;

describe('a new version while the app stays open', () => {
  it('reads the app file a page names', () => {
    expect(entryOf(page('YfSHudfI'))).toBe('assets/index-YfSHudfI.js');
    expect(entryOf('https://vloertaal.nl/assets/index-Ab_9-x.js')).toBe('assets/index-Ab_9-x.js');
    expect(entryOf('<html></html>')).toBeNull();
  });

  it('a different file on the server is a new version; the same, none or an error is not', async () => {
    const running = 'assets/index-old.js';
    expect(await newerOnServer(running, async () => page('new'))).toBe(true);
    expect(await newerOnServer(running, async () => page('old'))).toBe(false);
    expect(await newerOnServer(running, async () => '')).toBe(false);
    expect(await newerOnServer(running, () => Promise.reject(new Error('offline')))).toBe(false);
    expect(await newerOnServer(null, async () => page('new'))).toBe(false);
  });

  it('names the version on the server (to reload into it once)', async () => {
    expect(await serverVersion('assets/index-old.js', async () => page('new'))).toBe('assets/index-new.js');
    expect(await serverVersion('assets/index-old.js', async () => page('old'))).toBeNull();
  });
});
