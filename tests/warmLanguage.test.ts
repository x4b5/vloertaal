import { afterEach, describe, expect, it, vi } from 'vitest';
import { warmLanguageCache, warmUrls } from '../src/lib/offline';

/**
 * Offline after a first visit (src/lib/offline.ts warmLanguageCache): the help language's file
 * loaded before the service worker ran, so it is fetched again through the worker; and so is every
 * file it imports (a chunk the build shares between files, not named in the page). Without those
 * the app stayed on "Niet geladen. Is er internet?" offline.
 */

const O = 'https://vloertaal.nl';

afterEach(() => vi.unstubAllGlobals());

describe('the files kept for offline after the first visit', () => {
  it('are the language, region and pictures files plus every app script of this visit', () => {
    const resources = [
      `${O}/assets/index-AAAA1111.js`,
      `${O}/assets/pl-BBBB2222.js`,
      `${O}/assets/online-CCCC3333.js`, // what pl-*.js imports
      `${O}/assets/index-DDDD4444.css`,
      `${O}/audio-el/voices.json`,
      `${O}/audio-el/thijmen/w.hallo.mp3`,
      'https://vloertaal.goatcounter.com/count.js',
      'not a url',
    ];
    expect(warmUrls([`${O}/assets/pl-BBBB2222.js`, undefined, `${O}/assets/words-EEEE5555.js`], resources, O).sort()).toEqual([
      `${O}/assets/index-AAAA1111.js`,
      `${O}/assets/online-CCCC3333.js`,
      `${O}/assets/pl-BBBB2222.js`,
      `${O}/assets/words-EEEE5555.js`,
    ]);
  });

  it('are fetched through the service worker once it runs, the imported chunk too', () => {
    const fetched: string[] = [];
    vi.stubGlobal('fetch', (u: string) => (fetched.push(u), Promise.resolve(new Response(''))));
    vi.stubGlobal('location', { origin: O });
    vi.stubGlobal('performance', { getEntriesByType: () => [{ name: `${O}/assets/pl-BBBB2222.js` }, { name: `${O}/assets/online-CCCC3333.js` }] });
    vi.stubGlobal('navigator', { serviceWorker: { controller: {} } });
    warmLanguageCache();
    expect(fetched).toEqual(expect.arrayContaining([`${O}/assets/pl-BBBB2222.js`, `${O}/assets/online-CCCC3333.js`]));
    // Without a service worker running: nothing (it would not be kept).
    fetched.length = 0;
    vi.stubGlobal('navigator', { serviceWorker: { controller: null } });
    warmLanguageCache();
    expect(fetched).toEqual([]);
  });
});
