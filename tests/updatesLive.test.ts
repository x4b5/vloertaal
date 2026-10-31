import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { ensureUpdates, loadedUpdates } from '../src/content/updatesLive';
import { noticeFor } from '../src/lib/notice';
import { emptyProgress } from '../src/lib/progress';

/**
 * The logbook (src/content/updates.ts) is not in the app's start file (src/content/updatesLive.ts):
 * it loads with import(), for a returning learner while the app starts (src/main.tsx), so the
 * home's notice is there; the screens that show it load it themselves.
 */
describe('the logbook, loaded when needed', () => {
  it('is not there before it loads, and then it is: the notices come from it', async () => {
    expect(loadedUpdates()).toEqual([]);
    // Without the logbook: no notice (never an error).
    expect(noticeFor({ ...emptyProgress, onboarded: true, firstDay: '2020-01-01' }, new Date())).toBeNull();
    await ensureUpdates();
    const { UPDATES } = await import('../src/content/updates');
    expect(loadedUpdates()).toBe(UPDATES);
  });

  it('is imported by no file of the app other than with import() (or for its types)', () => {
    const app = ['src/lib/notice.ts', 'src/components/Screens.tsx', 'src/components/News.tsx', 'src/content/pro.ts', 'src/lib/langPages.ts', 'src/App.tsx', 'src/main.tsx'];
    for (const f of app) expect(readFileSync(f, 'utf8'), f).not.toMatch(/^import (?!type )[^;]*from '(\.\.\/content|\.)\/updates';/m);
    expect(readFileSync('src/main.tsx', 'utf8')).toContain('ensureUpdates()');
  });
});
