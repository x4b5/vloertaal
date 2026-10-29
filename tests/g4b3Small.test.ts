import { describe, expect, it } from 'vitest';
import { allLessons, allWords, units } from '../src/content/curriculum';
import { buildLesson, choicePictures, typable, TYPE_MAX_LETTERS } from '../src/lib/exercises';
import { certData, unitIndex } from '../src/lib/certificate';
import { hasPicture } from '../src/lib/wordPicture';
import { dailyLesson } from '../src/lib/spaced';

describe('G4 b3 smaller items', () => {
  it('types only short words without capitals where the lesson has one', () => {
    expect(typable({ id: 'x', nl: 'de helm', en: '', emoji: '' })).toBe(true);
    expect(typable({ id: 'x', nl: 'het BSN', en: '', emoji: '' })).toBe(false);
    expect(typable({ id: 'x', nl: 'de veiligheidsschoenen', en: '', emoji: '' })).toBe(false);
    // The letter tiles spell letters only: a hyphen would be taught away ("esigaret").
    expect(typable({ id: 'x', nl: 'de e-sigaret', en: '', emoji: '' })).toBe(false);
    let typed = 0;
    let fair = 0;
    for (const lesson of allLessons) {
      for (const review of [false, true]) {
        for (const seed of [1, 2, 3]) {
          for (const e of buildLesson(lesson, { review, seed })) {
            if (e.kind !== 'type') continue;
            typed++;
            if (typable(e.word)) fair++;
            else expect(lesson.words.some(typable), `${lesson.id}: ${e.word.nl}`).toBe(false);
          }
        }
      }
    }
    expect(typed).toBeGreaterThan(100);
    expect(fair).toBe(typed);
    // Today's review too.
    const long = allWords.filter((w) => !typable(w)).slice(0, 6).map((w) => w.id);
    for (const seed of [1, 2, 3, 4]) {
      for (const e of buildLesson(dailyLesson(long), { review: true, seed })) if (e.kind === 'type') expect(typable(e.word)).toBe(true);
    }
    expect(TYPE_MAX_LETTERS).toBe(12);
  });

  it('numbers a certificate as the learner\'s own path does', () => {
    const build = units.find((u) => u.id === 'u.build')!;
    // Construction: "Op de bouw" is the 5th topic on that learner's path.
    expect(unitIndex(build, 'construction')).toBe(4);
    expect(certData(build, '2026-10-15', '', undefined, 'construction').unitNo).toBe('05');
    // Without a sector: the order of the whole course.
    expect(certData(build, '2026-10-15', '').unitNo).toBe(String(units.indexOf(build) + 1).padStart(2, '0'));
    expect(unitIndex(units[0], 'construction')).toBe(0);
  });

  it('a pictureless answer gets no pictured options (no answer by elimination)', () => {
    const abstract = allWords.find((w) => !hasPicture(w))!;
    const pictured = allWords.filter(hasPicture).slice(0, 2);
    expect(choicePictures(abstract, [pictured[0], abstract, pictured[1]])).toEqual([false, false, false]);
    expect(choicePictures(pictured[0], [pictured[0], abstract, pictured[1]])).toEqual([true, false, true]);
    // In l.privacy no "what does it mean" with an abstract answer shows a picture.
    const privacy = allLessons.find((l) => l.id === 'l.privacy')!;
    for (const seed of [1, 2, 3, 4, 5]) {
      for (const e of buildLesson(privacy, { review: false, seed })) {
        if (e.kind === 'meaning' && !hasPicture(e.word)) expect(choicePictures(e.word, e.options).some(Boolean)).toBe(false);
      }
    }
  });
});
