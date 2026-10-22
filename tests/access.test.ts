import { createHash } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { courseUnits, registerRulesCourse } from '../src/content/courses';
import { units } from '../src/content/curriculum';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { THEMES, themeUnitIds } from '../src/content/themes';
import { accessFromIntro, checkPassword, lessonAllowed, normalizePassword, PASSWORD_HASHES, sampleLessons, unitAllowed } from '../src/lib/access';
import { isUnlocked } from '../src/lib/exercises';
import { blockPlayable, homeLessonState, routeNextLesson } from '../src/lib/route';
import { DAILY_ID } from '../src/lib/spaced';

const sha = (s: string) => createHash('sha256').update(s).digest('hex');

describe('access', () => {
  it('stores only hashes: no code is written in the repository (it is public)', () => {
    const levels = Object.values(PASSWORD_HASHES);
    for (const h of Object.keys(PASSWORD_HASHES)) expect(h).toMatch(/^[0-9a-f]{64}$/);
    // Two first-unit previews, two full codes (pilot, candidates), one sneak preview.
    expect(levels.filter((l) => l === 'preview')).toHaveLength(2);
    expect(levels.filter((l) => l === 'full')).toHaveLength(2);
    // The first full code (in plain text in the history) is retired, in both its forms.
    expect(PASSWORD_HASHES['8b77fc0eab009ca9b4a9d6ccc967c8e8f9afe6656f0ab0bebdd96800389f482a']).toBeUndefined();
    expect(PASSWORD_HASHES['385537df17b00100660dd3b85e9a3a6a50db31b7093fe26f2fedaabd2a17c9d5']).toBeUndefined();
    expect(levels.filter((l) => l === 'sample')).toHaveLength(1);
    // The pilot code (October 2026).
    expect(PASSWORD_HASHES['94f3f76d391ed7e22dfd2fa93a9c9c0fbfa125385ca45c1ea7702fb28457979e']).toBe('full');
    // A second code (15 October 2026): the sneak preview since 16 October.
    expect(PASSWORD_HASHES['f439b02cc5e1a2f2e2c089e3998b3b8a1131f0d6b2e0911d4fce946516aac54a']).toBe('sample');
    // The candidates' code (16 October 2026).
    expect(PASSWORD_HASHES['90a18ecf6549148fe4a16dae942bb664d6a5f5e3b0510401058d98b3f73e1764']).toBe('full');
  });

  it('normalises: lower case, no spaces, hyphens or dots, Eastern digits as 0-9', () => {
    expect(normalizePassword('  Appel-Taart ')).toBe('appeltaart');
    expect(normalizePassword('appel taart')).toBe('appeltaart');
    expect(normalizePassword('appel.taart')).toBe('appeltaart');
    expect(normalizePassword('appel\u2013taart')).toBe('appeltaart'); // a dash a phone keyboard puts in
    expect(normalizePassword('code \u0661\u0662\u0663')).toBe('code123'); // Arabic-Indic
    expect(normalizePassword('code \u06f4\u06f5\u06f6')).toBe('code456'); // Persian
    expect(normalizePassword('\u0660\u0669\u06f0\u06f9')).toBe('0909');
  });

  it('checks typed passwords by hash (any case, with or without separators)', async () => {
    // A made-up code, added for this test only.
    const h = sha('appeltaart12');
    PASSWORD_HASHES[h] = 'full';
    try {
      expect(await checkPassword('appeltaart12')).toBe('full');
      expect(await checkPassword(' Appel-Taart 12.')).toBe('full');
      expect(await checkPassword('appel taart \u0661\u0662')).toBe('full');
      expect(await checkPassword('appeltaart')).toBeNull();
    } finally {
      delete PASSWORD_HASHES[h];
    }
    expect(await checkPassword('appeltaart12')).toBeNull();
    expect(await checkPassword('')).toBeNull();
    expect(await checkPassword(' - . ')).toBeNull();
  });

  it('development codes (tests, the screenshot scripts): one per level, typed in any form', async () => {
    expect(await checkPassword('Test-Code')).toBe('preview');
    expect(await checkPassword('test vol')).toBe('full');
    expect(await checkPassword('TESTPROEF')).toBe('sample');
  });

  it('a preview only opens the first unit, whatever the progress says', () => {
    const [first, second] = units;
    const done = Object.fromEntries(units.flatMap((u) => u.lessons).map((l) => [l.id, {}]));
    expect(first.lessons.every((l) => lessonAllowed(l.id, 'preview'))).toBe(true);
    expect(second.lessons.some((l) => lessonAllowed(l.id, 'preview'))).toBe(false);
    expect(isUnlocked(second.lessons[0].id, done, 'preview')).toBe(false);
    expect(isUnlocked(second.lessons[0].id, done, 'full')).toBe(true);
  });

  describe('the sneak preview (sample)', () => {
    let before: ReturnType<typeof courseUnits>;
    beforeAll(() => {
      before = courseUnits('regels');
      registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]));
    });
    afterAll(() => registerRulesCourse(before));

    it('opens the first lesson of each theme, and in Jouw sector of every sector', () => {
      for (const track of ['taal', 'regels'] as const) {
        const open = sampleLessons(track);
        const order = courseUnits(track);
        for (const theme of THEMES) {
          const ids = new Set(themeUnitIds(theme.id, track));
          const inTheme = order.filter((u) => ids.has(u.id));
          const shown = theme.id === 'theme.sector' ? inTheme : inTheme.slice(0, 1);
          for (const u of shown) expect(open, `${track} ${theme.id} ${u.id}`).toContain(u.lessons[0].id);
          // Never a later lesson of a topic, never another topic of the theme.
          for (const u of inTheme) for (const l of u.lessons.slice(1)) expect(open).not.toContain(l.id);
          if (theme.id !== 'theme.sector') for (const u of inTheme.slice(1)) expect(open).not.toContain(u.lessons[0].id);
        }
        expect(new Set(open).size).toBe(open.length);
        expect(open.length, track).toBeGreaterThan(8);
      }
      // Starten opens the course's very first lesson; the taal track has a handful of themes plus 6 sectors.
      expect(sampleLessons('taal')[0]).toBe(courseUnits('taal')[0].lessons[0].id);
      expect(sampleLessons('taal').length).toBeGreaterThan(8);
      expect(sampleLessons('taal').length).toBeLessThan(20);
    });

    it('locks the rest, whatever the progress says; the daily review stays open', () => {
      const done = Object.fromEntries(units.flatMap((u) => u.lessons).map((l) => [l.id, {}]));
      const [first] = units;
      expect(lessonAllowed(first.lessons[0].id, 'sample')).toBe(true);
      expect(lessonAllowed(first.lessons[1].id, 'sample')).toBe(false);
      expect(isUnlocked(first.lessons[1].id, done, 'sample')).toBe(false);
      expect(isUnlocked(first.lessons[1].id, done, 'full')).toBe(true);
      expect(lessonAllowed(DAILY_ID, 'sample')).toBe(true);
      // A topic with an open lesson can be opened; a topic without one shows its lock.
      expect(unitAllowed(first.id, 'sample')).toBe(true);
      const closed = courseUnits('taal').find((u) => !u.lessons.some((l) => lessonAllowed(l.id, 'sample')));
      expect(closed).toBeDefined();
      expect(unitAllowed(closed!.id, 'sample')).toBe(false);
    });

    it('a topic goes on only while its next lesson is open', () => {
      const [first] = units;
      const started = { [first.lessons[0].id]: {} };
      expect(blockPlayable(first, {}, 'sample')).toBe(true);
      expect(blockPlayable(first, started, 'sample')).toBe(false);
      expect(blockPlayable(first, started, 'full')).toBe(true);
      expect(homeLessonState(first, first.lessons[0].id, {}, 'sample')).toBe('now');
      expect(homeLessonState(first, first.lessons[1].id, started, 'sample')).toBe('later');
      expect(homeLessonState(first, first.lessons[1].id, started, 'full')).toBe('now');
    });

    it('the home path goes from open lesson to open lesson, through all of them, then stops', () => {
      for (const track of ['taal', 'regels'] as const) {
        for (const sector of [undefined, 'logistics', 'care'] as const) {
          const input = { sector, track, completed: {} as Record<string, unknown> };
          let next = routeNextLesson(input, 'sample');
          const played: string[] = [];
          while (next && played.length < 50) {
            expect(lessonAllowed(next.id, 'sample'), next.id).toBe(true);
            played.push(next.id);
            input.completed[next.id] = {};
            next = routeNextLesson(input, 'sample');
          }
          // After the last one the home offers the full version (no Start).
          expect(next).toBeUndefined();
          expect(new Set(played), `${track} ${sector}`).toEqual(new Set(sampleLessons(track)));
        }
      }
    });
  });
});

describe('arriving from the intro page', () => {
  it('gives the sneak preview without the password page', () => {
    expect(accessFromIntro(null, '?intro')).toBe('sample');
    expect(accessFromIntro(null, '?unit=x&intro')).toBe('sample');
  });

  it('keeps a code the phone already has, and does nothing without ?intro', () => {
    expect(accessFromIntro('full', '?intro')).toBe('full');
    expect(accessFromIntro('preview', '?intro')).toBe('preview');
    expect(accessFromIntro(null, '')).toBeNull();
    expect(accessFromIntro(null, '?test')).toBeNull();
  });
});
