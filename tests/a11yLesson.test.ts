import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ChatExercise, ListenExercise, SayingCard } from '../src/components/Exercises';
import { announcement, LessonPlayer, LiveParts } from '../src/components/LessonPlayer';
import { Result } from '../src/components/Screens';
import { SpeakButton } from '../src/components/SpeakButton';
import { findLesson } from '../src/content/curriculum';
import { sayingForLesson } from '../src/content/sayings';
import { getHelpLanguage } from '../src/i18n/all';
import type { Exercise } from '../src/lib/exercises';

/*
 * The Taal lesson for a screen reader: the status region that says "Goed zo!" or "Het goede
 * antwoord is: …" is always there, every piece of it (and of a speaker's name) carries its own
 * language, so Dutch is read with a Dutch voice and the help language with its own; a card
 * without a question still has a heading to put the focus on; the result names what comes next.
 */
const pl = getHelpLanguage('pl');
const ar = getHelpLanguage('ar');
const noop = () => {};
const gear = findLesson('l.gear')!.lesson;
const [helm, handschoenen, , hesje] = gear.words;
const meaning: Exercise = { kind: 'meaning', word: hesje, options: [handschoenen, helm, hesje] };
const html = (el: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(el);

describe('the status region after Check', () => {
  it('is always in the lesson, empty until Check', () => {
    const out = html(createElement(LessonPlayer, { lesson: gear, review: false, lang: pl, exercises: [meaning], startAt: 0, onQuit: noop, onFinish: noop }));
    expect(out).toContain('<div class="sr-only" role="status"></div>');
  });

  it('says a right answer in pieces, each in its own language', () => {
    const parts = announcement(meaning, true, pl);
    expect(parts[0]).toEqual({ text: 'Goed zo!', lang: 'nl' });
    expect(parts[1].lang).toBe('pl');
    expect(parts).toContainEqual({ text: `${hesje.nl} =`, lang: 'nl', dir: 'ltr' });
    expect(parts.at(-1)!.lang).toBe('pl');
    // Never one string in the page's Dutch: the Polish never sits in a Dutch piece.
    for (const p of parts.filter((x) => x.lang === 'nl')) expect(p.text).not.toMatch(/[ąęłńśźż]/);
  });

  it('says a wrong answer with the Dutch lead, and an Arabic meaning right to left', () => {
    const parts = announcement(meaning, false, ar);
    expect(parts[0]).toEqual({ text: 'Het goede antwoord is:', lang: 'nl' });
    expect(parts.at(-1)).toMatchObject({ lang: 'ar', dir: 'rtl' });
  });

  it('draws each piece with lang (and dir)', () => {
    const out = html(createElement(LiveParts, { parts: announcement(meaning, false, ar) }));
    expect(out).toContain('<span lang="nl">Het goede antwoord is:</span>');
    expect(out).toMatch(/<span lang="nl" dir="ltr"> het hesje =<\/span>/);
    expect(out).toMatch(/<span lang="ar" dir="rtl"> [^<]+<\/span>/);
  });
});

describe('speakers: "Play" in the help language, the Dutch in Dutch', () => {
  it('the speaker beside each option has no single-language aria-label', () => {
    const ex: Exercise = { kind: 'listen', word: hesje, options: [helm, hesje] };
    const out = html(createElement(ListenExercise, { ex, lang: pl, locked: false, onAnswer: noop } as never));
    const says = out.match(/<button type="button" class="choice-say"[^>]*>.*?<\/button>/g) ?? [];
    expect(says.length).toBe(2);
    for (const b of says) {
      expect(b).not.toContain('aria-label');
      expect(b).toMatch(/<span class="sr-only" lang="pl">[^<]+: <\/span><span class="sr-only" lang="nl">(de helm|het hesje)<\/span>/);
    }
  });

  it('a chat reply\'s speaker too', () => {
    const shift = findLesson('l.shift')!.lesson;
    const d = shift.dialogues![0];
    const ex: Exercise = { kind: 'chat', dialogue: d, options: [d.reply] };
    const out = html(createElement(ChatExercise, { ex, lang: ar, locked: false, onAnswer: noop } as never));
    expect(out).toContain(`<span class="sr-only" lang="nl">${d.reply.nl}</span>`);
  });

  it('the SpeakButton keeps the same name', () => {
    const out = html(createElement(SpeakButton, { text: 'de helm', help: pl }));
    expect(out).toMatch(/<span class="sr-only" lang="pl">[^<]+: <\/span><span class="sr-only" lang="nl">de helm<\/span>/);
  });

  it('the lesson progress bar is named in the help language', () => {
    const out = html(createElement(LessonPlayer, { lesson: gear, review: false, lang: ar, exercises: [meaning], startAt: 0, onQuit: noop, onFinish: noop }));
    expect(out).toMatch(/role="progressbar" aria-label="[^"]+" lang="ar"/);
  });
});

describe('focus and headings', () => {
  it('a saying card has a heading the focus can go to', () => {
    const saying = sayingForLesson('l.checkout')!;
    const out = html(createElement(SayingCard, { ex: { kind: 'saying', saying }, lang: pl, locked: false, onAnswer: noop } as never));
    expect(out).toMatch(/role="heading" aria-level="2" data-prompt="true" tabindex="-1"/);
  });

  it('the result puts the focus on its title and names what comes next', () => {
    const out = html(createElement(Result, {
      right: 9, total: 11, newWords: 6, words: 24, lang: pl, onDone: noop, stronger: 5, repeated: 8, kind: 'daily',
      next: { en: 'People at work', lang: pl, id: 'l.people' },
    }));
    expect(out).toMatch(/<h1 class="result-title" tabindex="-1">/);
    // No aria-label on a <p> (not allowed, and not read): the words are in the line itself.
    expect(out).not.toMatch(/<p [^>]*aria-label/);
    expect(out).toMatch(/class="result-line result-next"[^>]*><span class="sr-only" lang="pl">[^<]+: <\/span>/);
    expect(out).toMatch(/<span class="stronger-n" lang="pl">.*5<\/span>/);
    // The stat cards' names are in the help language.
    expect(out).toMatch(/role="group" aria-label="[^"]+" lang="pl"/);
  });
});
