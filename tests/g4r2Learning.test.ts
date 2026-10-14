import { describe, expect, it } from 'vitest';
import { allLessons, allWords, teachingLessons } from '../src/content/curriculum';
import { NEAR_SYNONYMS, nearSynonyms } from '../src/content/synonyms';
import { tokenize } from '../src/lib/answers';
import { buildLesson, buildSteps, buildTiles, dutchExercise, forRetry, type Exercise } from '../src/lib/exercises';
import { createRng } from '../src/lib/random';
import { dailyLesson } from '../src/lib/spaced';
import { hasPicture } from '../src/lib/wordPicture';

type Choice = Extract<Exercise, { kind: 'meaning' | 'dutch' | 'listen' | 'type' }>;
const isChoice = (e: Exercise): e is Choice =>
  (e.kind === 'meaning' || e.kind === 'dutch' || e.kind === 'listen' || e.kind === 'type') && Boolean(e.options);

/** A daily review of ten words from lessons 3–7, half of them in box 1 and half in box 3. */
function daily() {
  const words = teachingLessons.slice(2, 7).flatMap((l) => l.words.slice(0, 2)).slice(0, 10);
  const cards = Object.fromEntries(words.map((w, i) => [w.id, { box: i % 2 ? 3 : 1, due: '2026-01-01' }]));
  return { lesson: dailyLesson(words.map((w) => w.id), cards), words };
}

describe('review cards a non-Latin reader can answer', () => {
  const lessons = [daily().lesson, ...allLessons.filter((l) => l.id.endsWith('.mix'))];

  it('never gives a non-Latin reader Latin-only text cards when the word has picture cards', () => {
    for (const lesson of lessons) {
      for (const seed of [1, 2, 3, 4, 5]) {
        for (const ex of buildLesson(lesson, { review: true, seed, nonLatin: true })) {
          if (ex.kind !== 'dutch' || !ex.textOnly) continue;
          // Text cards only where no picture choice can be made (the component then adds a
          // speaker to every card, tested in the browser).
          expect(dutchExercise(ex.word, lesson, createRng(seed)).textOnly, `${lesson.id} ${ex.word.id}`).toBe(true);
        }
      }
    }
  });

  it('without sound a non-Latin reader gets pictures or "what does it mean", never text cards', () => {
    for (const lesson of [...lessons, ...teachingLessons.slice(0, 12)]) {
      for (const seed of [1, 2, 3]) {
        for (const review of [true, false]) {
          for (const ex of buildLesson(lesson, { review, seed, quiet: true, nonLatin: true })) {
            if (ex.kind === 'dutch') expect(ex.textOnly, `${lesson.id} ${ex.word.id}`).toBeFalsy();
            expect(['listen', 'type']).not.toContain(ex.kind);
          }
        }
      }
    }
  });

  it('keeps text cards (help language → Dutch) for Latin readers', () => {
    const { lesson } = daily();
    const dutch = [1, 2, 3].flatMap((seed) => buildLesson(lesson, { review: true, seed }).slice(0, 10)).filter((e) => e.kind === 'dutch');
    expect(dutch.length).toBeGreaterThan(0);
    for (const ex of dutch) expect(ex.kind === 'dutch' && ex.textOnly).toBe(true);
  });

  it('the rest of a normal lesson is the same for Latin readers (nonLatin off by default)', () => {
    for (const lesson of teachingLessons.slice(0, 6)) {
      expect(buildLesson(lesson, { review: false, seed: 9, nonLatin: false })).toEqual(buildLesson(lesson, { review: false, seed: 9 }));
    }
  });
});

describe("today's review stays short", () => {
  it('ten words make 12–14 items: one build, no extra listening or writing at the end', () => {
    const { lesson, words } = daily();
    for (const seed of [1, 2, 3, 4]) {
      for (const speak of [false, true]) {
        const list = buildLesson(lesson, { review: true, seed, speak });
        expect(list.length, `seed ${seed} speak ${speak}`).toBeGreaterThanOrEqual(12);
        expect(list.length, `seed ${seed} speak ${speak}`).toBeLessThanOrEqual(14);
        expect(list.filter((e) => e.kind === 'build')).toHaveLength(1);
        // Every word is asked once, first, in a rotating kind of question.
        const first = list.slice(0, words.length) as Choice[];
        expect(new Set(first.map((e) => e.word.id))).toEqual(new Set(words.map((w) => w.id)));
        expect(new Set(first.map((e) => e.kind)).size).toBeGreaterThanOrEqual(3);
        // After the words: no second listening and no writing question.
        expect(list.slice(words.length).some((e) => e.kind === 'listen' || e.kind === 'type')).toBe(false);
      }
    }
  });

  it('still gives words that were right before the harder questions', () => {
    const { lesson } = daily();
    for (const seed of [1, 2, 3]) {
      for (const ex of buildLesson(lesson, { review: true, seed }).slice(0, 10) as Choice[]) {
        if ((lesson.boxes?.[ex.word.id] ?? 1) >= 2) expect(ex.kind).not.toBe('meaning');
      }
    }
  });
});

describe('a retry can not be solved from memory', () => {
  const lesson = teachingLessons[3];
  const ids = (xs: readonly { id: string }[]) => new Set(xs.map((x) => x.id));
  const answerOf = (ex: Exercise) => (ex.kind === 'chat' ? ex.dialogue.reply.id : (ex as Choice).word.id);

  it('chat, listen, picture and hear-and-pick get at least one new wrong option, deterministically', () => {
    const seen: Record<string, number> = {};
    for (const seed of [1, 2, 3, 4, 5, 6]) {
      for (const ex of buildLesson(lesson, { review: false, seed })) {
        if (!['chat', 'listen', 'dutch', 'type'].includes(ex.kind) || !('options' in ex) || !ex.options) continue;
        const again = forRetry(ex, lesson, seed + 40);
        expect(forRetry(ex, lesson, seed + 40)).toEqual(again);
        const before = ids(ex.options);
        const after = (again as typeof ex).options!;
        expect(after.map((o) => o.id)).toContain(answerOf(ex));
        expect(after).toHaveLength(ex.options.length);
        if (after.some((o) => !before.has(o.id))) seen[ex.kind] = (seen[ex.kind] ?? 0) + 1;
        else seen[`${ex.kind}:same`] = (seen[`${ex.kind}:same`] ?? 0) + 1;
      }
    }
    for (const kind of ['chat', 'listen', 'dutch', 'type']) {
      expect(seen[kind] ?? 0, kind).toBeGreaterThan(0);
      expect(seen[`${kind}:same`] ?? 0, `${kind} kept all its wrong options`).toBe(0);
    }
  });

  it('picture cards come back as picture cards', () => {
    for (const seed of [1, 2, 3, 4]) {
      for (const ex of buildLesson(lesson, { review: false, seed })) {
        if (ex.kind !== 'dutch' || ex.textOnly) continue;
        const again = forRetry(ex, lesson, seed) as typeof ex;
        expect(again.textOnly).toBeFalsy();
        for (const o of again.options) expect(hasPicture(o), o.id).toBe(true);
      }
    }
  });
});

describe('near-synonyms are never wrong options for each other', () => {
  it('every word in the list is a word of the course', () => {
    const nl = new Set(allWords.map((w) => w.nl.toLowerCase()));
    for (const group of NEAR_SYNONYMS) for (const w of group) expect(nl.has(w.toLowerCase()), w).toBe(true);
    expect(nearSynonyms('de baas', 'Leidinggevende')).toBe(true);
    expect(nearSynonyms('de baas', 'de collega')).toBe(false);
  });

  it('no lesson offers a near-synonym as a wrong option', () => {
    const daily1 = daily().lesson;
    for (const lesson of [...allLessons, daily1]) {
      for (const seed of [1, 2, 3]) {
        for (const opts of [{ review: false }, { review: true }, { review: false, quiet: true }, { review: true, nonLatin: true }]) {
          const list = buildLesson(lesson, { ...opts, seed });
          const retries = list.map((e, i) => forRetry(e, lesson, seed + i));
          for (const ex of [...list, ...retries]) {
            if (!isChoice(ex)) continue;
            for (const o of ex.options!) {
              if (o.id === ex.word.id) continue;
              expect(nearSynonyms(o.nl, ex.word.nl), `${lesson.id}: ${ex.word.nl} / ${o.nl}`).toBe(false);
            }
          }
        }
      }
    }
  });

  it('building a sentence never offers a near-synonym of the right word', () => {
    for (const lesson of teachingLessons) {
      for (const sentence of lesson.sentences) {
        const real = tokenize(sentence.nl);
        for (const salt of [0, 1, 2]) {
          buildSteps(sentence.nl, buildTiles(sentence, lesson, createRng(salt + 1)), 3, salt).forEach((step, i) => {
            for (const t of step) if (t !== real[i]) expect(nearSynonyms(t, real[i]), `${sentence.nl}: ${real[i]} / ${t}`).toBe(false);
          });
        }
      }
    }
  });
});
