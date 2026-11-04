import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ComesBack, SituationExercise, TipCard } from '../src/components/Exercises';
import { WhyLine } from '../src/components/LessonPlayer';
import { cultureTips, tipForLesson } from '../src/content/culture';
import { sayingForLesson, sayingQuestion } from '../src/content/sayings';
import { getHelpLanguage, gloss } from '../src/i18n/all';
import type { LangCode } from '../src/i18n/types';

/**
 * Read aloud where there is most to read (the UX evaluation, 4 November 2026): a situation's three
 * answers and the why after it each have the help-language read-aloud (HelpSay) beside them, never
 * inside an answer's tap area (a tap on it reads, it does not answer), one per item, in Polish and
 * Arabic alike, and none when the phone has no voice and there is no recording. The work-rules
 * track: tests/rulesReadAloud.test.ts.
 */

// Which help languages "the phone" has a voice for (Tigrinya: none).
const phone = vi.hoisted(() => ({ help: new Set<string>() }));
vi.mock('../src/lib/audio', async (orig) => ({
  ...(await orig<typeof import('../src/lib/audio')>()),
  helpVoice: (code: string) => (phone.help.has(code) ? ({ lang: code } as unknown as SpeechSynthesisVoice) : null),
}));
// The read-aloud as it is, with the text it would read on it (only here, to check which text).
vi.mock('../src/components/HelpSay', async (orig) => {
  const real = await orig<typeof import('../src/components/HelpSay')>();
  const { cloneElement } = await import('react');
  return { ...real, HelpSay: (p: Parameters<typeof real.HelpSay>[0]) => { const el = real.HelpSay(p); return el ? cloneElement(el, { 'data-text': p.text } as never) : el; } };
});

beforeEach(() => {
  phone.help = new Set(['pl', 'ar']);
});

const html = (el: ReactElement) => renderToStaticMarkup(el);
const decode = (s: string) => s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const lang = (code: LangCode) => getHelpLanguage(code)!;
/** The texts the help-language read-alouds of a page would read, in order. */
const helpTexts = (m: string) => [...m.matchAll(/<button[^>]*class="help-say"[^>]*data-text="([^"]*)"/g)].map((x) => decode(x[1]));
/** A situation with its answers shown (as after "Show the answers", or in the retry round). */
const situation = (tip = tipForLesson('l.speakup')!, code: LangCode = 'pl', locked = false) =>
  html(createElement(ComesBack.Provider, { value: false }, createElement(SituationExercise, { ex: { kind: 'situation', tip, options: tip.options }, lang: lang(code), locked, onAnswer: () => {} })));

describe('a situation ("Wat doe je?") can be heard in the help language, answers and why included', () => {
  for (const code of ['pl', 'ar'] as const) {
    it(`${code}: every answer has its own read-aloud beside its card, with that answer's text`, () => {
      const tip = tipForLesson('l.speakup')!;
      const m = situation(tip, code);
      const answers = tip.options.map((o) => gloss(o.id, o.en, lang(code)).help!);
      // The situation's own, then one per answer, in the order of the cards.
      expect(helpTexts(m).slice(1)).toEqual(answers);
      expect(m.match(/class="choice-wrap/g)).toHaveLength(tip.options.length);
      // Beside the card, never inside it: a tap on it reads, it does not answer.
      for (const card of m.match(/<button[^>]*class="choice [^"]*"[^>]*>.*?<\/button>/g)!) expect(card).not.toContain('help-say');
      for (const wrap of m.split('class="choice-wrap').slice(1)) expect(wrap).toMatch(/^[^>]*>(<button[^>]*class="choice [^"]*"[^>]*>.*?<\/button>)<button type="button" class="help-say"/);
    });
  }

  it('after the answer too (the cards locked), and for the question on a saying', () => {
    expect(helpTexts(situation(tipForLesson('l.speakup')!, 'pl', true))).toHaveLength(4);
    const ask = sayingQuestion(sayingForLesson('l.checkout')!);
    const m = situation(ask, 'pl');
    expect(helpTexts(m).slice(-3)).toEqual(ask.options.map((o) => gloss(o.id, o.en, lang('pl')).help!));
  });

  it('every situation of the course, in Polish and Arabic: one read-aloud per answer card, none twice', () => {
    for (const code of ['pl', 'ar'] as const) {
      for (const tip of cultureTips.filter((t) => t.situation)) {
        const m = situation(tip, code);
        const wraps = m.split('class="choice-wrap').slice(1);
        expect(wraps, tip.id).toHaveLength(tip.options.length);
        for (const w of wraps) expect(w.split('</div>')[0].match(/class="help-say"/g), tip.id).toHaveLength(1);
      }
    }
  });

  it('no voice for the help language and no recording (Tigrinya on most phones): no read-aloud, the cards as before', () => {
    phone.help = new Set();
    const m = situation(tipForLesson('l.speakup')!, 'ti');
    expect(m).not.toContain('class="help-say"');
    expect(m.match(/class="choice-wrap/g)).toHaveLength(3);
  });

  it('the why after the answer has its read-aloud beside it, in its own direction', () => {
    const tip = tipForLesson('l.speakup')!;
    for (const code of ['pl', 'ar'] as const) {
      const why = gloss(tip.why.id, tip.why.en, lang(code));
      const m = html(createElement(WhyLine, { why, lang: lang(code), rtl: code === 'ar' }));
      expect(helpTexts(m)).toEqual([why.help]);
      expect(m).toMatch(/^<div class="help-say-row feedback-why-row"><div class="feedback-meaning feedback-why">.*<\/div><button type="button" class="help-say"/);
    }
    phone.help = new Set();
    expect(html(createElement(WhyLine, { why: gloss(tip.why.id, tip.why.en, lang('ti')), lang: lang('ti'), rtl: false }))).not.toContain('class="help-say"');
  });

  it('the tip ("Zo werkt het hier"): its text and the line about the tips each have one', () => {
    const tip = tipForLesson('l.speakup')!;
    const m = html(createElement(TipCard, { ex: { kind: 'tip', tip, part: 'read' }, lang: lang('pl'), locked: false, onAnswer: () => {} }));
    const texts = helpTexts(m);
    expect(texts).toHaveLength(2);
    expect(texts[1]).toBe(lang('pl').ui.tipsNote);
  });
});
