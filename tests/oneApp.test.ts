import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { BridgeOffer, BRIDGE_NL_ONE } from '../src/components/BridgeOffer';
import { TopicPage } from '../src/components/Route';
import { LanguagePicker, Result } from '../src/components/Screens';
import { courseUnits } from '../src/content/courses';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { units } from '../src/content/curriculum';
import { rulesTwinOf } from '../src/content/trackTwins';
import { getHelpLanguage, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import bg from '../src/i18n/regelHulp/bg';
import pl from '../src/i18n/regelHulp/pl';
import ro from '../src/i18n/regelHulp/ro';
import { ensureRuleHelp, ruleHelpText } from '../src/i18n/regelHulp';
import { buildLesson } from '../src/lib/exercises';
import { hardWords, kaartData, kaartRows } from '../src/lib/kaart';
import { ONE_APP_LIVE, oneAppOn, setOneApp } from '../src/lib/oneApp';
import { oneDailyCard, oneDailyIds, oneDailyLesson, RULES_IN_REVIEW } from '../src/lib/oneReview';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { settingsRows, type SettingsContext } from '../src/lib/settingsMenu';
import { DAILY_ID, dailyCard } from '../src/lib/spaced';

/**
 * "Eén app" (docs/sporen.md, fase 1 en 2; src/lib/oneApp.ts): the help language apart from what the
 * learner learns. Off on the site until the owner turns it on; ?nieuw=1 on one phone.
 */
beforeAll(() => registerPack(nlPack));
afterEach(() => setOneApp(null));

const html = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el);
const today = '2026-11-10';
const pay = units.find((u) => u.id === 'u.pay')!;

describe('the switch', () => {
  it('is off on the site, and on only for a phone that asks for it', () => {
    expect(ONE_APP_LIVE).toBe(false);
    expect(oneAppOn()).toBe(false);
    setOneApp(true);
    expect(oneAppOn()).toBe(true);
  });
});

describe('fase 1: "Zo werkt het hier" beside a language topic', () => {
  it('finds the work-rules twin: Loon has "Loon en loonstrook"', () => {
    expect(rulesTwinOf('u.pay')?.id).toBe('r.loon');
    expect(rulesTwinOf('u.sounds')).toBeUndefined();
  });

  it('lists the twin\'s lessons under the topic, in Dutch, with the hint in the help language', () => {
    const twin = rulesTwinOf('u.pay')!;
    const lang = getHelpLanguage('pl')!;
    const props = { unit: pay, progress: { ...emptyProgress, onboarded: true, helpLang: 'pl' as const }, lang, onBack: () => {}, onStart: () => {} };
    const page = html(createElement(TopicPage, { ...props, rulesTwin: twin }));
    expect(page).toContain('topic-rules');
    expect(page).toContain('Zo werkt het hier');
    expect(page).toContain(lang.ui.rulesInDutch as string);
    for (const l of twin.lessons) expect(page).toContain(l.title.replace(/&/g, '&amp;').replace(/"/g, '&quot;'));
    // The first opens; the next waits for the one before it, as everywhere.
    const rows = page.split('topic-rules-lessons')[1].match(/<button[^>]*class="bay-card"[^>]*>/g)!;
    expect(rows).toHaveLength(twin.lessons.length);
    expect(rows[0]).not.toContain('disabled');
    expect(rows[1]).toContain('disabled');
    // Without the twin (the switch off) the page is as before.
    expect(html(createElement(TopicPage, props))).not.toContain('topic-rules');
  });

  it('the offer at 80% leads to those lessons, not to a switch of track', () => {
    const card = html(createElement(BridgeOffer, { lang: getHelpLanguage('pl'), onGo: () => {}, onLater: () => {}, one: true }));
    expect(card).toContain(BRIDGE_NL_ONE);
    expect(card).toContain(getHelpLanguage('pl')!.ui.bridgeTextOne as string);
  });
});

describe('fase 1: the help language is one row, with "Geen"', () => {
  const ctx: SettingsContext = { helpLang: false, gender: false, preview: false, install: false, offline: true, rules: true, routes: false };
  it('without the question "Wat wil je leren?", the help language is there in both courses', () => {
    expect(settingsRows('me', ctx)).toContain('language');
    expect(settingsRows('me', ctx)).not.toContain('route');
    expect(settingsRows('me', { ...ctx, rules: false, helpLang: true })[0]).toBe('language');
  });
  it('lists "Geen: ik spreek Nederlands" as the last choice', () => {
    const m = html(createElement(LanguagePicker, { current: 'pl', onPick: () => {}, lang: getHelpLanguage('pl'), none: true }));
    expect(m).toContain('lang-btn-none');
    expect(m).toContain('Geen: ik spreek Nederlands');
    expect(m.indexOf('lang-btn-none')).toBeGreaterThan(m.indexOf('English'));
    expect(html(createElement(LanguagePicker, { current: 'pl', onPick: () => {} }))).not.toContain('lang-btn-none');
  });
});

describe('fase 1: one "Herhaal vandaag"', () => {
  const ruleStep = courseUnits('regels')[0].lessons[0].steps!.find((s) => 'options' in s || s.kind === 'truefalse')!;
  const word = pay.lessons[0].words[0];
  const cards = { [word.id]: { box: 1, due: today }, [ruleStep.id]: { box: 1, due: today } };

  it('brings the rule questions after the words, at most a few', () => {
    const ids = oneDailyIds(cards, today);
    expect(ids).toContain(word.id);
    expect(ids.at(-1)).toBe(ruleStep.id);
    expect(ids.filter((id) => id.startsWith('r.')).length).toBeLessThanOrEqual(RULES_IN_REVIEW);
    // The home's card counts them in.
    expect(oneDailyCard(cards, today)!.due).toBe(dailyCard(cards, today, undefined, 'taal')!.due + 1);
  });

  it('plays words first, then the questions, in one lesson', () => {
    const lesson = oneDailyLesson(oneDailyIds(cards, today), cards, today);
    expect(lesson.id).toBe(DAILY_ID);
    const ex = buildLesson(lesson, { review: true, seed: 1 });
    const firstRule = ex.findIndex((e) => 'step' in e);
    expect(firstRule).toBeGreaterThan(0);
    expect(ex.slice(firstRule).every((e) => 'step' in e)).toBe(true);
    // Only rule questions due: the rules' own review.
    const only = oneDailyLesson([ruleStep.id], {}, today);
    expect(only.words).toHaveLength(0);
    expect(only.steps?.map((s) => s.id)).toEqual([ruleStep.id]);
  });

  it('a day with only rule questions due still shows the card', () => {
    const c = oneDailyCard({ [ruleStep.id]: { box: 1, due: today } }, today);
    expect(c?.state).toBe('due');
    expect(c?.due).toBe(1);
  });
});

describe('fase 1: the coach card says what a coach wants to talk about', () => {
  const p: Progress = {
    ...emptyProgress, onboarded: true, helpLang: 'pl', reviewDay: '2026-11-09',
    completed: { [pay.lessons[0].id]: { best: 1, times: 1 }, 'r.l.loon.1': { best: 1, times: 1 } },
    cards: { [pay.lessons[0].words[0].id]: { box: 1, due: '2026-11-08' }, [pay.lessons[0].words[1].id]: { box: 3, due: '2026-11-20' } },
    gelukt: [{ id: 'a', nl: 'Mag ik jij zeggen?', en: '', day: '2026-11-05' }, { id: 'b', nl: 'Ik ben vandaag ziek.', en: '', day: '2026-11-08' }],
  };
  it('said at work, still hard, and the lessons about work here; only with the switch', () => {
    const d = kaartData(p, '', new Date('2026-11-10T12:00:00'), false, true);
    expect(d.gezegd).toEqual({ n: 2, last: ['Ik ben vandaag ziek.', 'Mag ik jij zeggen?'] });
    expect(d.lastig).toEqual([pay.lessons[0].words[0].nl]);
    expect(d.regels).toBe(1);
    const labels = kaartRows(d).map((r) => r.label);
    expect(labels).toEqual(expect.arrayContaining(['Gezegd op het werk', 'Nog lastig', 'Zo werkt het hier']));
    const off = kaartData(p, '', new Date('2026-11-10T12:00:00'));
    expect(off.gezegd).toBeUndefined();
    expect(kaartRows(off).map((r) => r.label)).not.toContain('Nog lastig');
  });
  it('names no hard words before any review: then every new word is in the first box', () => {
    expect(hardWords({ ...p, reviewDay: undefined })).toEqual([]);
  });
});

describe('fase 2: the key lines of the work rules in Polish, Romanian and Bulgarian', () => {
  const dutch = new Set<string>();
  for (const u of [...rulesUnits, ...sectorRulesUnits]) {
    for (const l of u.lessons) {
      dutch.add(l.remember);
      for (const s of l.steps) if (s.kind === 'rule') dutch.add(s.title);
    }
  }

  it('has every rule title and every "Onthoud" of the Dutch course, and nothing else', () => {
    for (const [code, lines] of [['pl', pl], ['ro', ro], ['bg', bg]] as const) {
      expect(Object.keys(lines).filter((nl) => !dutch.has(nl)), code).toEqual([]);
      expect([...dutch].filter((nl) => !lines[nl]?.trim()), code).toEqual([]);
    }
  });

  it('is read by the Dutch, once its file is here', async () => {
    const nl = [...dutch][0];
    expect(ruleHelpText('pl', nl)).toBeUndefined();
    await ensureRuleHelp('pl');
    expect(ruleHelpText('pl', nl)).toBe(pl[nl]);
    expect(ruleHelpText('ar', nl)).toBeUndefined();
  });

  it('shows the "Onthoud" under the Dutch on the result, only with the switch', async () => {
    await ensureRuleHelp('pl');
    const remember = rulesUnits[0].lessons[0].remember;
    const props = { right: 3, total: 3, newWords: 0, words: 0, lang: getHelpLanguage('pl'), onDone: () => {}, remember };
    expect(html(createElement(Result, props))).not.toContain('result-remember-help');
    setOneApp(true);
    expect(html(createElement(Result, props))).toContain(pl[remember].replace(/"/g, '&quot;'));
  });
});
