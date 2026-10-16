import { createHash } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { courseUnits, registerRulesCourse } from '../src/content/courses';
import { units } from '../src/content/curriculum';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { THEMES, themeUnitIds } from '../src/content/themes';
import { checkPassword, lessonAllowed, normalizePassword, PASSWORD_HASHES, sampleLessons, unitAllowed } from '../src/lib/access';
import { isUnlocked } from '../src/lib/exercises';
import { blockPlayable, homeLessonState, routeNextLesson } from '../src/lib/route';
import { DAILY_ID } from '../src/lib/spaced';

const sha = (s: string) => createHash('sha256').update(s).digest('hex');

describe('access', () => {
  it('stores hashes of the normalised passwords, not the passwords', () => {
    expect(PASSWORD_HASHES[sha('sneekpeak')]).toBe('preview');
    expect(PASSWORD_HASHES[sha('sneakpeek')]).toBe('preview');
    expect(PASSWORD_HASHES[sha('vlaai-toer')]).toBe('full');
    // The full-version password as it is normalised now (without the hyphen).
    expect(PASSWORD_HASHES[sha(normalizePassword('vlaai-toer'))]).toBe('full');
    // The pilot code (October 2026) is not written in the repository, only its hash.
    const PILOT = '94f3f76d391ed7e22dfd2fa93a9c9c0fbfa125385ca45c1ea7702fb28457979e';
    expect(PASSWORD_HASHES[PILOT]).toBe('full');
    // A second code (15 October 2026), likewise only as a hash: the sneak preview since 16 October.
    const SECOND = 'f439b02cc5e1a2f2e2c089e3998b3b8a1131f0d6b2e0911d4fce946516aac54a';
    expect(PASSWORD_HASHES[SECOND]).toBe('sample');
    expect(Object.keys(PASSWORD_HASHES)).toHaveLength(6);
    // Every other stored hash is reached by some normalised form of a known password.
    const known = ['sneekpeak', 'sneakpeek', 'vlaai-toer'];
    const reached = new Set(known.flatMap((p) => [sha(p), sha(normalizePassword(p))]));
    for (const h of Object.keys(PASSWORD_HASHES).filter((k) => k !== PILOT && k !== SECOND)) expect(reached.has(h), h).toBe(true);
  });

  it('normalises: lower case, no spaces, hyphens or dots, Eastern digits as 0-9', () => {
    expect(normalizePassword('  Vlaai-Toer ')).toBe('vlaaitoer');
    expect(normalizePassword('vlaai toer')).toBe('vlaaitoer');
    expect(normalizePassword('vlaai.toer')).toBe('vlaaitoer');
    expect(normalizePassword('vlaai\u2013toer')).toBe('vlaaitoer'); // a dash a phone keyboard puts in
    expect(normalizePassword('code \u0661\u0662\u0663')).toBe('code123'); // Arabic-Indic
    expect(normalizePassword('code \u06f4\u06f5\u06f6')).toBe('code456'); // Persian
    expect(normalizePassword('\u0660\u0669\u06f0\u06f9')).toBe('0909');
  });

  it('checks typed passwords (any case, with or without separators)', async () => {
    expect(await checkPassword(' SneekPeak ')).toBe('preview');
    expect(await checkPassword('sneak peek')).toBe('preview');
    expect(await checkPassword('Sneak-Peek.')).toBe('preview');
    expect(await checkPassword('vlaai-toer')).toBe('full');
    expect(await checkPassword('vlaaitoer')).toBe('full');
    expect(await checkPassword('Vlaai Toer')).toBe('full');
    expect(await checkPassword('vlaai')).toBeNull();
    expect(await checkPassword('')).toBeNull();
    expect(await checkPassword(' - . ')).toBeNull();
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
