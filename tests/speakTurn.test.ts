import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SpeakExercise } from '../src/components/Speaking';
import { getHelpLanguage } from '../src/i18n/all';
import { allLessons, findLesson } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { hasClip, setRecordedIndex, type ElevenIndex } from '../src/lib/audio';
import { buildLesson, TURN_LONG, type Exercise } from '../src/lib/exercises';
import { dailyLesson } from '../src/lib/spaced';
import index from '../public/audio-el/voices.json';

/**
 * "Wat zeg je?" (stap 2, audit-didactiek punt 1 en 2): in a lesson with a chat, right before it,
 * the learner hears the colleague and says the reply first; then the chat itself.
 */

setRecordedIndex(index as ElevenIndex, null);
/** As the lesson player asks it (LessonPlayer, recordedAtStart): a recording of this line? */
const recorded = (text: string) => hasClip(text, 'piper:ariel');
const all = () => true;

type Speak = Extract<Exercise, { kind: 'speak' }>;
const turnOf = (list: Exercise[]) => list.filter((e): e is Speak => e.kind === 'speak' && Boolean(e.turn));
const ownLessons = allLessons.filter((l) => !l.steps?.length && !isMixLesson(l) && !l.repeat);

describe('"Wat zeg je?" before the chat', () => {
  const hello = findLesson('l.hello')!.lesson;

  it('comes right before the chat of the same dialogue, with its reply to say', () => {
    const list = buildLesson(hello, { review: false, seed: 1, speak: true, recorded: all });
    const [turn] = turnOf(list);
    expect(turn).toBeDefined();
    const at = list.indexOf(turn);
    const chat = list[at + 1];
    expect(chat.kind).toBe('chat');
    if (chat.kind !== 'chat') return;
    expect(chat.reverse).toBeUndefined();
    expect(chat.dialogue).toBe(turn.turn);
    expect(turn.item).toEqual({ id: chat.dialogue.reply.id, nl: chat.dialogue.reply.nl, en: chat.dialogue.reply.en });
    // The usual "say it" stays too: speaking is doubled.
    expect(list.filter((e) => e.kind === 'speak')).toHaveLength(2);
  });

  it('is only there with a recording of both lines of the chat (public/audio-el/voices.json)', () => {
    let some = 0;
    for (const lesson of ownLessons) {
      const list = buildLesson(lesson, { review: false, seed: 3, speak: true, recorded });
      for (const t of turnOf(list)) {
        some++;
        expect(hasClip(t.turn!.prompt.nl, 'piper:daniel'), t.turn!.prompt.id).toBe(true);
        expect(hasClip(t.turn!.reply.nl, 'piper:ariel'), t.turn!.reply.id).toBe(true);
        expect(hasClip(t.turn!.reply.nl, 'piper:thijmen'), t.turn!.reply.id).toBe(true);
      }
    }
    expect(some).toBeGreaterThan(50);
    // No recording of the reply: no turn.
    const noReply = (t: string) => t !== hello.dialogues![0].reply.nl;
    expect(turnOf(buildLesson(hello, { review: false, seed: 1, speak: true, recorded: noReply }))).toHaveLength(0);
  });

  it('is not there without the check, with speaking off, or without sound', () => {
    for (const opts of [{ speak: true }, { speak: false, recorded: all }, { speak: true, quiet: true, recorded: all }]) {
      const list = buildLesson(hello, { review: false, seed: 1, ...opts });
      expect(list.some((e) => e.kind === 'speak' && e.turn)).toBe(false);
    }
  });

  it('is not in "Herhaal vandaag", a topic\'s review, or the shorter lesson after many mistakes', () => {
    const daily = dailyLesson(['w.hallo', 'w.goedemorgen', 'w.ja', 'w.nee', 'w.collega', 'w.baas']);
    expect(turnOf(buildLesson(daily, { review: true, seed: 1, speak: true, recorded: all }))).toHaveLength(0);
    for (const mix of allLessons.filter((l) => !l.steps?.length && (isMixLesson(l) || l.repeat))) {
      expect(turnOf(buildLesson(mix, { review: true, seed: 1, speak: true, recorded: all })), mix.id).toHaveLength(0);
    }
    expect(turnOf(buildLesson(hello, { review: false, seed: 1, speak: true, easy: true, recorded: all }))).toHaveLength(0);
  });

  for (const lesson of ownLessons) {
    it(`${lesson.id}: makes the lesson at most one longer, and takes the place of a less important exercise in a long one`, () => {
      for (const review of [false, true]) {
        for (const seed of [1, 42, 999]) {
          const without = buildLesson(lesson, { review, seed, speak: true });
          const list = buildLesson(lesson, { review, seed, speak: true, recorded: all });
          const turns = turnOf(list);
          expect(turns).toHaveLength(lesson.dialogues?.length ? 1 : 0);
          if (!turns.length) { expect(list).toEqual(without); continue; }
          const rest = list.filter((e) => e !== turns[0]);
          if (without.length >= TURN_LONG) {
            // Same length; one exercise out: the second "what do you hear", else the picture choice.
            expect(list).toHaveLength(without.length);
            const gone = without.filter((e) => !rest.some((r) => JSON.stringify(r) === JSON.stringify(e)));
            expect(gone).toHaveLength(1);
            expect(['listen', 'dutch', 'meaning']).toContain(gone[0].kind);
            if (gone[0].kind === 'dutch') expect(without.some((e) => e.kind === 'chat' && e.reverse)).toBe(true);
            // Everything else the same, in the same order.
            expect(rest).toEqual(without.filter((e) => e !== gone[0]));
          } else {
            expect(list).toHaveLength(without.length + 1);
            expect(rest).toEqual(without);
          }
          expect(list.length).toBeLessThanOrEqual(21);
          // Never two speaking exercises in a row.
          list.forEach((e, i) => { if (e.kind === 'speak') expect(list[i + 1]?.kind).not.toBe('speak'); });
        }
      }
    });
  }
});

describe('"Wat zeg je?" on screen (Speaking.tsx)', () => {
  const dialogue = findLesson('l.hello')!.lesson.dialogues![0];
  const ex: Speak = { kind: 'speak', item: { ...dialogue.reply }, turn: dialogue };
  const render = (phase: 'idle' | 'review' | 'off', lang = getHelpLanguage('pl')) =>
    renderToStaticMarkup(createElement(SpeakExercise, { ex, lang, onAnswer: () => {}, phaseForShot: phase }));

  it('asks "Wat zeg je?" with the colleague\'s line, and keeps the reply hidden until it is said', () => {
    const idle = render('idle');
    expect(idle).toContain('Co mówisz?');
    expect(idle).toContain(dialogue.prompt.nl);
    expect(idle).not.toContain(dialogue.reply.nl);
    expect(idle).toContain('say-mic');
    // Without the microphone ("say it out loud"): "Hoor het antwoord" first, then the reply.
    const off = render('off');
    expect(off).not.toContain(dialogue.reply.nl);
    expect(off).toContain('say-reveal');
    expect(off).toContain('Posłuchaj odpowiedzi');
  });

  it('shows the reply after recording, with "Voorbeeld" next to your own recording', () => {
    const review = render('review');
    expect(review).toContain(dialogue.reply.nl);
    expect(review).toContain('Przykład');
    expect(review).toContain('say-play-me');
    // "You" are the neutral person icon, never a cast member's face; the example has no face.
    expect(review).toContain('ch-me');
    expect(review).toContain('say-face-example');
    expect(review).not.toContain('say-face"><svg class="ch ');
  });
});

describe('"Wat zeg je?" in the lesson player (LessonPlayer)', () => {
  it('is built in with the recordings on this phone, at its place before the chat', async () => {
    const { LessonPlayer } = await import('../src/components/LessonPlayer');
    const hello = findLesson('l.hello')!.lesson;
    const at = buildLesson(hello, { review: false, seed: 1, speak: true, recorded }).findIndex((e) => e.kind === 'speak' && e.turn);
    expect(at).toBeGreaterThan(0);
    const noop = () => {};
    const out = renderToStaticMarkup(createElement(LessonPlayer, { lesson: hello, review: false, lang: getHelpLanguage('pl'), startAt: at, onQuit: noop, onFinish: noop }));
    expect(out).toContain('say-turn');
    expect(out).toContain(hello.dialogues![0].prompt.nl);
  });
});
