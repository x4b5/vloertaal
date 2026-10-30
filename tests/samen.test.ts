import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { Samen } from '../src/components/Samen';
import { Result } from '../src/components/Screens';
import { courseUnits } from '../src/content/courses';
import { allLessons, findLesson } from '../src/content/curriculum';
import { proSections } from '../src/content/pro';
import type { Dialogue } from '../src/content/types';
import { getHelpLanguage, helpLanguageSources, LANG_CODES, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { GENDERED_LANGS, uiEn, type LangText } from '../src/i18n/types';
import { hasSamen, samenDialogues, samenNext, samenTurns, type SamenStep } from '../src/lib/samen';

/**
 * "Oefen samen" (src/lib/samen.ts, src/components/Samen.tsx): two people on one phone read a
 * lesson's chats, turn by turn, and can swap roles. No network, no recording, no score.
 */
beforeAll(() => registerPack(nlPack));

const chat: Dialogue = {
  prompt: { id: 'c.t.q', nl: 'Waar is de helm?', en: 'Where is the helmet?' },
  reply: { id: 'c.t.a', nl: 'In de kast.', en: 'In the cupboard.' },
};
const chat2: Dialogue = {
  prompt: { id: 'c.t2.q', nl: 'Heb je pauze?', en: 'Do you have a break?' },
  reply: { id: 'c.t2.a', nl: 'Ja, tot tien uur.', en: 'Yes, until ten.' },
};

describe('the turns of a chat', () => {
  it('a chat gives two turns: the colleague (person 1), then the answer (person 2)', () => {
    const turns = samenTurns([chat]);
    expect(turns.map((t) => [t.line.nl, t.role, t.person])).toEqual([
      ['Waar is de helm?', 'them', 1],
      ['In de kast.', 'me', 2],
    ]);
  });

  it('a lesson with two chats: per chat the question and its answer, in order', () => {
    expect(samenTurns([chat, chat2]).map((t) => t.line.id)).toEqual(['c.t.q', 'c.t.a', 'c.t2.q', 'c.t2.a']);
  });

  it('the turns of a real lesson are its chats', () => {
    const lesson = findLesson('l.hello', 'taal')!.lesson;
    const turns = samenTurns(samenDialogues(lesson));
    expect(turns.map((t) => t.line)).toEqual(lesson.dialogues!.flatMap((d) => [d.prompt, d.reply]));
  });
});

describe('swapping the roles', () => {
  it('the same lines, the other person reads them', () => {
    const before = samenTurns([chat, chat2]);
    const after = samenTurns([chat, chat2], true);
    expect(after.map((t) => t.line)).toEqual(before.map((t) => t.line));
    expect(after.map((t) => t.role)).toEqual(before.map((t) => t.role));
    expect(after.map((t) => t.person)).toEqual(before.map((t) => (t.person === 1 ? 2 : 1)));
    expect(after[0]).toMatchObject({ role: 'them', person: 2 });
  });

  it('the steps: the explanation, every turn, the end (and after a swap again from turn 1)', () => {
    const n = samenTurns([chat, chat2]).length;
    const seen: SamenStep[] = [];
    let s: SamenStep = 'intro';
    while (s !== 'end') { s = samenNext(s, n); seen.push(s); }
    expect(seen).toEqual([0, 1, 2, 3, 'end']);
    expect(samenNext('end', n)).toBe('end');
    expect(samenNext('intro', 0)).toBe('end');
  });
});

describe('every chat can be practised together', () => {
  it('every lesson of the language track has a chat with two turns or more, each with a Dutch line', () => {
    for (const l of allLessons) {
      expect(hasSamen(l), l.id).toBe(true);
      for (const d of samenDialogues(l)) {
        const turns = samenTurns([d]);
        expect(turns.length, l.id).toBeGreaterThanOrEqual(2);
        for (const t of turns) expect(t.line.nl.trim(), `${l.id} ${t.line.id}`).not.toBe('');
      }
    }
  });

  it('no "Oefen samen" in Werkregels (its lessons have steps, no chats) or without a lesson', () => {
    for (const l of courseUnits('regels').flatMap((u) => u.lessons)) expect(hasSamen(l), l.id).toBe(false);
    expect(hasSamen(undefined)).toBe(false);
  });
});

const KEYS = Object.keys(uiEn).filter((k) => k.startsWith('samen')) as (keyof typeof uiEn)[];

describe('the texts of "Oefen samen"', () => {
  it('has its texts', () => {
    expect(KEYS).toEqual(expect.arrayContaining(['samenTitle', 'samenIntro', 'samenHear', 'samenNext', 'samenTranslation', 'samenSwap']));
  });

  for (const lang of helpLanguageSources) {
    it(`${lang.code}: every text is filled in`, () => {
      for (const k of KEYS) expect(lang.ui[k], `${lang.code} ${k}`).toBeTruthy();
    });
  }

  for (const code of GENDERED_LANGS) {
    it(`${code}: every gendered text has an x-form, with the same placeholders`, () => {
      const lang = helpLanguageSources.find((l) => l.code === code)!;
      for (const k of KEYS) {
        const t = lang.ui[k] as LangText;
        if (typeof t === 'string') continue;
        expect(t.x, `${code} ${k}`).toBeTruthy();
        expect((t.x ?? '').includes('{n}'), `${code} ${k}`).toBe(t.m.includes('{n}'));
      }
    });
  }
});

describe('the screens draw, with at most 3 things to tap', () => {
  const dialogues = samenDialogues(findLesson('l.firstday.mix', 'taal')!.lesson);
  const draw = (code: string | null, start: SamenStep, gender?: 'f' | 'm' | 'x') =>
    renderToStaticMarkup(createElement(Samen, { dialogues, lang: code ? getHelpLanguage(code, gender) : undefined, onBack: () => {}, onDone: () => {}, start }));
  const buttons = (html: string) => (html.match(/<button[^>]*>/g) ?? []).filter((b) => !b.includes('chrome-back'));

  for (const code of [...LANG_CODES, null]) {
    it(`in ${code ?? 'English only'}`, () => {
      for (const start of ['intro', 0, 1, 'end'] as SamenStep[]) {
        const html = draw(code, start, 'x');
        expect(buttons(html).length, `${code} ${start}`).toBeLessThanOrEqual(3);
      }
    });
  }

  it('a turn: the Dutch line big with lang="nl", who is talking, the translation in the help language', () => {
    const html = draw('ar', 0, 'f');
    expect(html).toContain('dir="rtl"');
    expect(html).toMatch(/class="samen-line" lang="nl" dir="ltr">[^<]*\S/);
    expect(html).toContain('samen-badge-1');
    expect(html).toMatch(/lang="ar"/);
    expect(html).toContain('aria-pressed="true"');
  });

  it('after the roles are swapped, the first turn is person 2', () => {
    const html = renderToStaticMarkup(createElement(Samen, { dialogues, lang: getHelpLanguage('pl'), onBack: () => {}, onDone: () => {}, start: 0, startSwapped: true }));
    expect(html).toContain('samen-badge-2');
  });

  it('a lesson’s result offers it as a row, never instead of Continue', () => {
    const html = renderToStaticMarkup(createElement(Result, { right: 3, total: 4, newWords: 2, words: 8, lang: getHelpLanguage('pl'), onDone: () => {}, onSamen: () => {} }));
    expect(html).toContain('result-samen');
    expect(html).toContain('result-go');
    const without = renderToStaticMarkup(createElement(Result, { right: 3, total: 4, newWords: 2, words: 8, lang: getHelpLanguage('pl'), onDone: () => {} }));
    expect(without).not.toContain('result-samen');
  });
});

describe('for coaches', () => {
  it('the page for coaches and teachers says how to use it in a group', () => {
    const text = JSON.stringify(proSections);
    expect(text).toContain('Oefen samen');
  });
});
