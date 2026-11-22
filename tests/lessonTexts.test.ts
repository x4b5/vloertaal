import { describe, expect, it, vi } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { skeletonSource } from '../src/content/workSkeletonSource';

/**
 * The lesson texts of the work, sector and culture units load right after the start
 * (src/content/lessonTexts.ts); the start file holds their skeleton (src/content/workSkeleton.ts).
 */

/** Every file of the app under src/, as a path relative to the repository. */
function appFiles(dir = 'src'): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return p === 'src/dev' ? [] : appFiles(p);
    return /\.(ts|tsx)$/.test(f) && !f.endsWith('.d.ts') ? [p] : [];
  });
}

describe('the lesson texts load apart from the start', () => {
  it('the skeleton is made from work.ts (npm run skeleton after adding or renaming a unit or lesson)', () => {
    expect(readFileSync('src/content/workSkeleton.ts', 'utf8')).toBe(skeletonSource());
  });

  it('no file of the app imports work.ts directly, except the files that load apart from the start', () => {
    // The texts' loader, the Node shortcut for the build and scripts, the skeleton maker (scripts and
    // this test), and the tips' register with its tips (they load apart too, src/lib/tips.ts), and
    // the list of lessons still to translate (read by the site build only).
    const allowed = new Set([
      'src/content/lessonTexts.ts',
      'src/content/lessonTextsNode.ts',
      'src/content/workSkeletonSource.ts',
      'src/content/culture.ts',
      'src/content/workTips.ts',
      'src/content/translationPending.ts',
    ]);
    const importsWork = /from\s+['"](?:\.\.?\/)+(?:content\/)?work['"]|import\(\s*['"](?:\.\.?\/)+(?:content\/)?work['"]\s*\)/;
    const offenders = appFiles().filter((f) => !allowed.has(f) && importsWork.test(readFileSync(f, 'utf8')));
    expect(offenders).toEqual([]);
    // The Node shortcut and the skeleton maker are never part of the app.
    const usesNodeOnly = /lessonTextsNode|workSkeletonSource/;
    expect(appFiles().filter((f) => !allowed.has(f) && usesNodeOnly.test(readFileSync(f, 'utf8')))).toEqual([]);
  });

  it('every file of the app can be read before the texts are there (none reads a lesson\'s words while it loads)', async () => {
    vi.resetModules();
    const texts = await import('../src/content/lessonTexts');
    expect(texts.lessonTextsLoaded()).toBe(false);
    texts.setLessonTextsStrict(true);
    const skip = new Set(['src/main.tsx', 'src/content/lessonTextsNode.ts', 'src/content/workSkeletonSource.ts']);
    const failed: string[] = [];
    for (const f of appFiles().filter((x) => !skip.has(x))) {
      try {
        await import(/* @vite-ignore */ `../${f}`);
      } catch (e) {
        if (String(e).includes('lessonTexts:')) failed.push(`${f}: ${String(e).split('\n')[0]}`);
      }
    }
    expect(failed).toEqual([]);
    expect(texts.lessonTextsLoaded()).toBe(false);
  }, 120000);

  it('the texts arrive with the load, and the lists of all words and chats are filled then', async () => {
    vi.resetModules();
    const texts = await import('../src/content/lessonTexts');
    const { units, allWords, allReplies } = await import('../src/content/curriculum');
    expect(allWords).toHaveLength(0);
    await texts.loadLessonTexts();
    const work = units.find((u) => u.id === 'u.montage')!;
    expect(work.lessons[0].words.map((w) => w.id)).toContain('w.werkinstructie');
    expect(allWords.some((w) => w.id === 'w.werkinstructie')).toBe(true);
    expect(allReplies.length).toBeGreaterThan(100);
    // The mixed review of a skeleton unit is built from the texts once they are here.
    expect(work.lessons[work.lessons.length - 1].words.length).toBe(6);
  });
});
