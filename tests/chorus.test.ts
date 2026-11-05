import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SpeakExercise, type ChorusState } from '../src/components/Speaking';
import { getHelpLanguage } from '../src/i18n/all';
import { ui } from '../src/i18n';
import { uiEn } from '../src/i18n/types';
import { uiNl } from '../src/i18n/nl';
import { findLesson } from '../src/content/curriculum';
import { afterSpeak, braveDue, chorusDue, SHY_AFTER, SKIPS_KEEP, speakShy, type SpeakEvent } from '../src/lib/chorus';
import { backupFile, emptyProgress, parseBackup, progressFrom, type Progress } from '../src/lib/progress';
import type { Exercise } from '../src/lib/exercises';
import { PRIVACY } from '../src/lib/privacyPage';

/**
 * "Zeg het samen" and Bram's "Fouten mogen" (src/lib/chorus.ts; the owner's request, 5 November
 * 2026): a safer step before recording for learners who do not dare to speak.
 */

const run = (...events: SpeakEvent[]) => events.reduce<Progress>((p, e) => afterSpeak(p, e), emptyProgress);

describe('when "Zeg het samen" comes (src/lib/chorus.ts)', () => {
  it('comes at the first "Zeg het" ever, with Bram\'s line, and then not at every one', () => {
    expect(chorusDue(emptyProgress)).toBe(true);
    expect(braveDue(emptyProgress)).toBe(true);
    const met = run('met');
    expect(met.speakMet).toBe(true);
    expect(chorusDue(met)).toBe(false);
    expect(braveDue(met)).toBe(false);
    // Bram's line never again, whatever happens next.
    expect(braveDue(run('met', 'skipped', 'skipped', 'recorded', 'met'))).toBe(false);
  });

  it(`comes at every "Zeg het" after ${SHY_AFTER} skips in a row, until the learner records again`, () => {
    expect(speakShy(run('met', 'skipped'))).toBe(false);
    expect(chorusDue(run('met', 'skipped'))).toBe(false);
    const shy = run('met', 'skipped', 'met', 'skipped');
    expect(shy.speakSkips).toBe(2);
    expect(chorusDue(shy)).toBe(true);
    // Recorded once: back to normal (the count is gone, not kept at 0).
    const brave = afterSpeak(shy, 'recorded');
    expect(chorusDue(brave)).toBe(false);
    expect('speakSkips' in brave).toBe(false);
    // In a row: a recording in between starts the count again.
    expect(chorusDue(run('met', 'skipped', 'recorded', 'skipped'))).toBe(false);
  });

  it(`counts skips up to ${SKIPS_KEEP}, and changes nothing when there is nothing to change`, () => {
    const many = run(...Array<SpeakEvent>(20).fill('skipped'));
    expect(many.speakSkips).toBe(SKIPS_KEEP);
    const met = run('met');
    expect(afterSpeak(met, 'met')).toBe(met);
    expect(afterSpeak(met, 'recorded')).toBe(met);
  });
});

describe('on this phone (Progress)', () => {
  it('is read back with the same checks as the rest, and a broken value is left out', () => {
    const p = { ...emptyProgress, speakMet: true as const, speakSkips: 3 };
    expect(progressFrom(JSON.parse(JSON.stringify(p)))).toEqual(p);
    const broken = progressFrom({ ...emptyProgress, speakMet: 'yes', speakSkips: -1 });
    expect(broken.speakMet).toBeUndefined();
    expect(broken.speakSkips).toBeUndefined();
    expect(progressFrom({ ...emptyProgress, speakSkips: 0 }).speakSkips).toBeUndefined();
    expect(progressFrom({ ...emptyProgress, speakSkips: 50.7 }).speakSkips).toBe(SKIPS_KEEP);
  });

  it('is not in the backup (a setting of this phone, like the notices seen)', () => {
    const p = { ...emptyProgress, completed: { 'l.hello': { best: 1, times: 1 } }, speakMet: true as const, speakSkips: 2 };
    const back = parseBackup(backupFile(p, new Date(2026, 10, 5)));
    expect(back).not.toBeNull();
    expect(back).not.toHaveProperty('speakMet');
    expect(back).not.toHaveProperty('speakSkips');
  });

  it('is named in the privacy statement', () => {
    const voice = PRIVACY.find((s) => s.id === 'spraak')!.paras.join(' ');
    expect(voice).toContain('Zeg het samen');
    expect(voice).toContain('overslaat');
  });
});

type Speak = Extract<Exercise, { kind: 'speak' }>;
const hello = findLesson('l.hello')!.lesson;
const sentence: Speak = { kind: 'speak', item: hello.sentences[0] };
const dialogue = hello.dialogues![0];
const turn: Speak = { kind: 'speak', item: { ...dialogue.reply }, turn: dialogue };
const pl = getHelpLanguage('pl');
const render = (ex: Speak, props: { phase?: 'idle' | 'off' | 'review'; together?: boolean; chorus?: ChorusState; brave?: boolean } = {}) =>
  renderToStaticMarkup(createElement(SpeakExercise, {
    ex, lang: pl, onAnswer: () => {}, phaseForShot: props.phase ?? 'idle', together: props.together, chorusForShot: props.chorus, brave: props.brave ?? false,
  }));
/** The buttons that count (the Dutch speaker never does). */
const taps = (html: string) => (html.match(/<button/g) ?? []).length - (html.match(/<button[^>]*class="[^"]*\bspeak\b/g) ?? []).length;

describe('"Zeg het samen" on screen (Speaking.tsx)', () => {
  it('takes the place of the microphone: one big button, "Zeg het liever hardop" stays, nothing more to tap', () => {
    const before = render(sentence);
    const due = render(sentence, { together: true });
    expect(due).toContain('say-chorus');
    expect(due).toContain(ui('sayTogether', pl).help!);
    expect(due).toContain(ui('chorusHint', pl).help!);
    expect(due).not.toMatch(/class="say-mic[ "]/);
    expect(due).toContain('say-aloud-instead');
    expect(taps(due)).toBe(taps(before));
    expect(taps(due)).toBe(2);
  });

  it('cannot be tapped during the 3-2-1 and while the voice says it (it stays yellow, the wave moves)', () => {
    const count = render(sentence, { chorus: 'count' });
    expect(count).toContain('say-chorus-count');
    expect(count).toMatch(/class="btn btn-primary say-chorus is-count"[^>]*aria-disabled="true"/);
    const on = render(sentence, { chorus: 'on' });
    expect(on).toContain('say-wave');
    expect(on).toMatch(/aria-disabled="true"/);
    // The card's speaker is out of the way meanwhile (its place kept).
    expect(on).toContain('say-model-off');
  });

  it('then the microphone comes, with "Nu alleen" over it', () => {
    const done = render(sentence, { chorus: 'done' });
    expect(done).not.toContain('say-chorus');
    expect(done).toMatch(/class="say-mic[ "]/);
    expect(done).toContain(ui('chorusAlone', pl).help!);
    expect(taps(done)).toBe(2);
  });

  it('works without the microphone: in the "say it out loud" step, at most three things to tap', () => {
    const off = render(sentence, { phase: 'off', together: true });
    expect(off).toContain('say-chorus');
    expect(off).toContain('say-off');
    expect(taps(off)).toBeLessThanOrEqual(3);
    // Done there: the usual step, without the button.
    expect(render(sentence, { phase: 'off', chorus: 'done' })).not.toContain('say-chorus');
  });

  it('is not offered when the lesson does not ask for it, nor in "Wat zeg je?" (said from memory there)', () => {
    expect(render(sentence)).not.toContain('say-chorus');
    expect(render(turn, { together: true })).not.toContain('say-chorus');
    expect(render(turn, { together: true, phase: 'off' })).not.toContain('say-chorus');
  });

  it('is gone after recording', () => {
    expect(render(sentence, { phase: 'review', together: true })).not.toContain('say-chorus');
  });
});

describe('Bram, once: "Fouten mogen"', () => {
  it('is a line with his face, no button', () => {
    const with_ = render(sentence, { together: true, brave: true });
    const without = render(sentence, { together: true });
    expect(with_).toContain('say-brave');
    expect(with_).toContain(ui('speakBrave', pl).help!);
    expect(taps(with_)).toBe(taps(without));
    expect(render(turn, { brave: true })).not.toContain('say-brave');
  });

  it('says it in Dutch as the owner asked', () => {
    expect(uiNl.speakBrave).toBe('Fouten mogen. Nederlanders begrijpen je ook met fouten.');
    expect(uiNl.sayTogether).toBe('Zeg het samen');
    expect(uiNl.chorusAlone).toBe('Nu alleen');
  });
});

describe('"Niemand hoort je" at the microphone and in Settings', () => {
  it('says nobody else hears you, and that nothing is sent', () => {
    for (const t of [uiNl.micPrivacy, uiNl.speakingHint]) {
      expect(t).toContain('Niemand anders hoort je');
      expect(t.toLowerCase()).toContain('we sturen niets door');
    }
    expect(uiEn.micPrivacy).toBe('Nobody else hears you. Nothing is sent.');
    // Still true with "Toen en nu": the first recording stays on the phone, and says so.
    expect(uiNl.speakingHint).toContain('blijft op je telefoon');
    expect(render(sentence)).toContain(ui('micPrivacy', pl).help!);
  });
});

describe('in the lesson player (LessonPlayer)', () => {
  it('passes "Zeg het samen" and Bram\'s line on to the lesson\'s "Zeg het"', async () => {
    const { LessonPlayer } = await import('../src/components/LessonPlayer');
    const noop = () => {};
    const base = { lesson: hello, review: false, lang: pl, exercises: [sentence, sentence, sentence] as Exercise[], onQuit: noop, onFinish: noop };
    const on = renderToStaticMarkup(createElement(LessonPlayer, { ...base, speakTogether: true, speakBrave: true, onSpeak: noop }));
    expect(on).toContain('say-chorus');
    expect(on).toContain('say-brave');
    const off = renderToStaticMarkup(createElement(LessonPlayer, { ...base, speakTogether: false, speakBrave: false }));
    expect(off).not.toContain('say-chorus');
    expect(off).not.toContain('say-brave');
  });
});
