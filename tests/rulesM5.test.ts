import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { RulesHelp, RulesShelf, shelfGroups } from '../src/components/RulesHelp';
import { About } from '../src/components/Screens';
import { Settings } from '../src/components/Settings';
import { aboutRules, aboutSections, CONTACT_EMAIL } from '../src/content/about';
import { courseUnits, learnedItems } from '../src/content/courses';
import { RULES_DISCLAIMER } from '../src/content/regels/disclaimer';
import { HELP_ROWS, helpRowText } from '../src/content/regels/help';
import { getHelpLanguage, registerPack, ui } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { uiEn } from '../src/i18n/types';
import { shouldAskGender } from '../src/lib/askGender';
import { earnCertificates } from '../src/lib/certificate';
import { onboardingStep, previousStep, tryLessonId, trialLessonAllowed } from '../src/lib/onboarding';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { REMINDER_TITLE, REMINDER_TITLE_RULES, reminderIcs } from '../src/lib/reminder';
import { currentBlock, routeNextLesson } from '../src/lib/route';
import { settingsRows, type SettingsPage } from '../src/lib/settingsMenu';
import { dailyCard } from '../src/lib/spaced';
import { trackOf } from '../src/lib/track';
import { greetingText } from '../src/components/BramSays';
import { OPEN_TO_ALL } from '../src/lib/access';

// The real rules course (the pack registers it), and the Dutch screens.
beforeAll(() => registerPack(nlPack));

const nl = () => getHelpLanguage('nl')!;
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const english = Object.values(uiEn).filter((s) => s.replace(/\{\w+\}/g, '').trim().length >= 4 && !/^(Start|Code|Stop|Pauze)$/.test(s));
const noEnglish = (markup: string, what = '') => {
  expect(markup, what).not.toContain('lang="en"');
  expect(markup, what).not.toMatch(/class="[^"]*bi-help/);
  for (const s of english) expect(markup, `${what}: ${s}`).not.toContain(`>${s}<`);
};
const rec = { best: 1, times: 1 };
const done = (...ids: string[]) => Object.fromEntries(ids.map((id) => [id, rec]));

/** Every text file of our content and the sources document, to find the numbers in. */
const sourceText = (() => {
  const dir = join(__dirname, '../src/content');
  const files: string[] = [];
  const walk = (d: string) => readdirSync(d, { withFileTypes: true }).forEach((e) => (e.isDirectory() ? walk(join(d, e.name)) : files.push(join(d, e.name))));
  walk(dir);
  return [...files.filter((f) => !f.endsWith('/regels/help.ts')), join(__dirname, '../docs/werkregels-bronnen.md')]
    .map((f) => readFileSync(f, 'utf8')).join('\n');
})();

describe('Hulp in the work-rules track: "Wie bel je?"', () => {
  it('has every place to call, with the numbers the lessons use', () => {
    const byName = Object.fromEntries(HELP_ROWS.map((r) => [r.id, r]));
    expect(byName['h.112'].show).toBe('112');
    expect(byName['h.juridischloket'].show).toContain('0800-8020');
    expect(byName['h.arbeidsinspectie'].show).toBe('0800-5151');
    expect(byName['h.meldmisdaad'].show).toBe('0800-7000');
    expect(byName['h.geldfit'].show).toBe('0800-8115');
    expect(byName['h.politie'].show).toBe('0900-8844');
    expect(byName['h.fairwork'].href).toBe('https://www.fairwork.nu');
    expect(byName['h.uwv'].href).toBe('https://www.uwv.nl');
    // Discriminatie: the site the lessons name, no phone number.
    expect(byName['h.discriminatie'].show).toBe('discriminatie.nl');
    expect(byName['h.discriminatie'].href).toBe('https://www.discriminatie.nl');
    for (const id of ['h.huisartsenpost', 'h.vertrouwenspersoon', 'h.vakbond', 'h.gemeente']) expect(byName[id], id).toBeDefined();
    expect(HELP_ROWS).toHaveLength(13);
    expect(new Set(HELP_ROWS.map((r) => r.id)).size).toBe(HELP_ROWS.length);
  });

  it('shows 112 without a call button, and says that calling it for nothing is punishable', () => {
    const row = HELP_ROWS.find((r) => r.id === 'h.112')!;
    expect(row.href).toBeUndefined();
    expect(row.when).toContain('Voor niks bellen is strafbaar.');
    const m = html(createElement(RulesHelp, { lang: nl(), onShelf: () => {} }));
    expect(m).not.toContain('href="tel:112"');
  });

  it('dials what it shows, and every number is one the content already uses (or marked ⚖️ check)', () => {
    const helpSource = readFileSync(join(__dirname, '../src/content/regels/help.ts'), 'utf8');
    for (const r of HELP_ROWS.filter((x) => x.href?.startsWith('tel:'))) {
      const number = r.show.match(/[\d-]{3,}/)![0];
      expect(r.href, r.id).toBe(`tel:${number.replace(/-/g, '')}`);
      const known = sourceText.includes(number);
      const marked = helpSource.split('\n').some((line) => line.includes(`'${r.show}'`) && line.includes('⚖️ check'));
      expect(known || marked, `${r.id} ${number}`).toBe(true);
    }
    // The ones not in our content are marked for the expert.
    expect(sourceText.includes('0900-8844')).toBe(false);
    expect(helpSource).toMatch(/0900-8844.*⚖️ check/);
  });

  it('has at most one tap per row: a link (tel: or https:), or one speaker', () => {
    for (const r of HELP_ROWS) {
      if (r.href) expect(r.href, r.id).toMatch(/^(tel:\d+|https:\/\/)/);
      expect(r.when.split(/[.!?]\s/).every((s) => s.split(/\s+/).length <= 15), r.id).toBe(true);
    }
    const m = html(createElement(RulesHelp, { lang: nl(), onShelf: () => {} }));
    const rows = m.slice(0, m.indexOf('</ul>')).split('<li class="rh-row">').slice(1);
    expect(rows).toHaveLength(HELP_ROWS.length);
    rows.forEach((row, i) => {
      const links = (row.match(/<a /g) ?? []).length;
      const buttons = (row.match(/<button/g) ?? []).length;
      expect(links + buttons, HELP_ROWS[i].id).toBeLessThanOrEqual(1);
      expect(links, HELP_ROWS[i].id).toBe(HELP_ROWS[i].href ? 1 : 0);
      expect(row).toContain(HELP_ROWS[i].show);
    });
    // Outside the list: only "Alle regels".
    const outside = m.replace(/<ul class="rh-rows">[\s\S]*<\/ul>/, '');
    expect((outside.match(/<button|<a /g) ?? [])).toHaveLength(1);
    expect(outside).toContain('Alle regels');
    expect(helpRowText(HELP_ROWS[1])).toContain('Huisartsenpost');
  });

  it('opens with the disclaimer, in Dutch only', () => {
    const m = html(createElement(RulesHelp, { lang: nl(), onShelf: () => {} }));
    noEnglish(m, 'RulesHelp');
    for (const line of RULES_DISCLAIMER) expect(m).toContain(line);
    expect(m.indexOf(RULES_DISCLAIMER[0])).toBeLessThan(m.indexOf('Wie bel je?'));
    expect(m).toContain('Juridisch Loket');
  });

  it('"Alle regels" shows the rule cards of finished lessons by topic, with the advice line under a written rule', () => {
    const units = courseUnits('regels');
    expect(shelfGroups(units, {})).toEqual([]);
    const first = units[0].lessons[0];
    const groups = shelfGroups(units, done(first.id, units[1].lessons[0].id));
    expect(groups.map((g) => g.unit.id)).toEqual([units[0].id, units[1].id]);
    expect(groups[0].rules.every((r) => first.steps!.includes(r))).toBe(true);
    const m = html(createElement(RulesShelf, { progress: { ...emptyProgress, helpLang: 'nl', completed: done(first.id) }, lang: nl(), onBack: () => {} }));
    noEnglish(m, 'RulesShelf');
    expect(m).toContain(units[0].title);
    expect(m).toContain(groups[0].rules[0].title);
    const empty = html(createElement(RulesShelf, { progress: { ...emptyProgress, helpLang: 'nl' }, lang: nl(), onBack: () => {} }));
    expect(empty).toContain('Maak eerst een les af');
  });
});

describe('Over in the work-rules track', () => {
  it('describes this track: work rules for people who speak Dutch, not learning Dutch', () => {
    const what = aboutRules.find((s) => s.id === 'a.what')!;
    const how = aboutRules.find((s) => s.id === 'a.how')!;
    expect(what.body).toContain('al Nederlands spreken');
    expect(what.body).toMatch(/regels/);
    for (const s of [what, how]) {
      expect(s.body).not.toMatch(/Engels|hulptaal|leer je (het )?Nederlands/i);
    }
    // Nothing in this About is about learning Dutch through English or the help languages.
    for (const s of aboutRules) expect(s.body, s.id).not.toMatch(/Engels|[Hh]ulpta(a|l)l|leren voor het werk/);
    // The others are reused as they are (Bram, privacy, the voices), the culture section is out.
    expect(aboutRules.map((s) => s.id)).toEqual(aboutSections.filter((s) => s.id !== 'a.culture').map((s) => s.id));
    expect(aboutRules.find((s) => s.id === 'a.bram')!.body).toBe(aboutSections.find((s) => s.id === 'a.bram')!.nl.body);
    expect(aboutRules.find((s) => s.id === 'a.disclaimer')!.body).toBe(RULES_DISCLAIMER.join(' '));
    expect(aboutRules.at(-1)!.body).toContain(CONTACT_EMAIL);
  });

  it('renders in Dutch only, without the NL toggle, with the mail link', () => {
    const m = html(createElement(About, { lang: nl() }));
    noEnglish(m, 'About');
    expect(m).not.toContain('class="about-nl"');
    expect(m).toContain(`href="mailto:${CONTACT_EMAIL}"`);
    expect(m).toContain(aboutRules[0].body);
    expect(m).not.toContain('Zo werkt het hier');
    expect(m).not.toContain('Voor begeleiders');
  });
});

describe('Instellingen in the work-rules track', () => {
  const ctx = { helpLang: true, gender: false, preview: false, install: false, offline: true, rules: true };
  const settings = (page?: SettingsPage) => html(createElement(Settings, {
    progress: { ...emptyProgress, onboarded: true, helpLang: 'nl', sector: 'construction' },
    lang: nl(), page, onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
    onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {}, onRestore: () => {},
    onCertificate: () => {},
  }));

  it('has the rows that fit: no English, gender, speaking or writing; voice only with recorded voices', () => {
    expect(settingsRows('me', ctx)).toEqual(['language', 'sector', 'country', 'certificates']);
    expect(settingsRows('lessons', { ...ctx, recorded: true })).toEqual(['sound', 'voice', 'text', 'theme']);
    expect(settingsRows('lessons', { ...ctx, recorded: false })).toEqual(['sound', 'text', 'theme']);
    expect(settingsRows('phone', ctx)).toEqual(['offline', 'reminder', 'backup', 'counting', 'reset']);
    // The language course keeps its voice row, recorded voices or not.
    expect(settingsRows('lessons', { ...ctx, rules: false, recorded: false })).toEqual(['sound', 'voice', 'speaking', 'writing', 'text', 'theme']);
  });

  it('says every label in Dutch, on every page of the track', () => {
    // The language list names each language in itself ("English" in English): checked apart.
    const list = settings('language').replace(/<span class="lang-sample" lang="en">Aa<\/span>|<span class="lang-native" lang="en" dir="ltr">English<\/span>/g, '');
    noEnglish(list, 'language');
    const pages: (SettingsPage | undefined)[] = [undefined, 'me', 'lessons', 'phone', 'sector', 'sector-make', 'sector-care', 'certificates',
      'sound', 'voice', 'text', 'theme', 'offline', 'reminder', 'backup', 'counting', 'reset'];
    for (const page of pages) noEnglish(settings(page), String(page));
    expect(settings('lessons')).toContain('Tekstgrootte');
    expect(settings('me')).toContain('>Taal<');
    expect(settings('phone')).toContain('Herinner mij elke dag');
    expect(settings('counting')).toContain('aria-label="Aan of uit"');
  });
});

describe('the reminder and Bram in the work-rules track', () => {
  const now = new Date(2026, 9, 8, 9, 30);
  it('puts "Bram: tijd voor de werkregels (5 minuten)" in the calendar, 5 minutes long', () => {
    expect(REMINDER_TITLE_RULES).toBe('Bram: tijd voor de werkregels (5 minuten)');
    const ics = reminderIcs('18:00', 'https://vloertaal.nl/', now, 'regels').replace(/\r\n /g, '');
    expect(ics).toContain('SUMMARY:Bram: tijd voor de werkregels (5 minuten)');
    expect(ics).toContain('DTSTART:20261008T180000');
    expect(ics).toContain('DTEND:20261008T180500');
    expect(ics).toContain('hoe het werk in Nederland gaat');
    expect(ics).not.toContain('Nederlands voor je werk');
    // The language course as before.
    const taal = reminderIcs('18:00', 'x', now).replace(/\r\n /g, '');
    expect(taal).toContain(`SUMMARY:${REMINDER_TITLE}`);
    expect(taal).toContain('DTEND:20261008T181000');
  });

  it('has greetings that fit the track', () => {
    expect(greetingText({ kind: 'due', n: 4 }, nl()).help).toBe('Vandaag herhaal je 4 vragen.');
    expect(greetingText({ kind: 'due', n: 1 }, nl()).help).toBe('Vandaag herhaal je 1 vraag.');
    expect(greetingText({ kind: 'intro' }, nl()).help).toBe('Ik ben Bram. Ik help je op weg.');
    expect(greetingText({ kind: 'back' }, nl()).help).toBe('Welkom terug. We gaan verder.');
    expect(greetingText({ kind: 'done' }, nl()).help).toBe('Klaar voor vandaag. Tot morgen.');
    expect(ui('voiceNone', nl()).help).toMatch(/^Je telefoon heeft geen Nederlandse voorleesstem\./);
  });
});

describe('switching between the tracks keeps all progress', () => {
  it('keeps the lessons, cards and certificates of both, and the home shows the right course', () => {
    const rules = courseUnits('regels');
    const firstRulesUnit = rules[0];
    const completed = { ...done(...firstRulesUnit.lessons.map((l) => l.id), rules[1].lessons[0].id), ...done('l.hello') };
    const today = '2026-10-15';
    const start: Progress = earnCertificates({
      ...emptyProgress, onboarded: true, helpLang: 'nl', sector: 'none', completed,
      cards: { [`${rules[1].lessons[0].id}.tf1`]: { box: 1, due: today }, 'w.hallo': { box: 1, due: today } },
    }, new Date(2026, 9, 15));
    // In Settings: Nederlands → Polski (as App's setLang does), and back.
    const toPl: Progress = { ...start, helpLang: 'pl' };
    const back: Progress = { ...toPl, helpLang: 'nl' };
    expect(trackOf(start)).toBe('regels');
    expect(trackOf(toPl)).toBe('taal');
    expect(trackOf(back)).toBe('regels');
    for (const p of [toPl, back]) {
      expect(p.completed).toEqual(start.completed);
      expect(p.cards).toEqual(start.cards);
      expect(p.certs).toEqual(start.certs);
    }
    expect(start.certs?.[firstRulesUnit.id]).toBeDefined();
    // The home: the language course for Polski (its lesson 1.1 done: 1.2 next), the rules course
    // again for Nederlands (the started second unit).
    expect(currentBlock(toPl)?.id).toBe('u.firstday');
    expect(routeNextLesson(toPl)?.id.startsWith('l.')).toBe(true);
    expect(currentBlock(back)?.id).toBe(rules[1].id);
    expect(routeNextLesson(back)?.id).toBe(rules[1].lessons[1].id);
    // A block saved in one track never shows in the other.
    expect(currentBlock({ ...back, currentUnit: 'u.firstday' })?.id).toBe(rules[1].id);
    expect(currentBlock({ ...toPl, currentUnit: rules[1].id })?.id).toBe('u.firstday');
    // The counts and the review follow the track.
    expect(learnedItems('regels', back.completed)).toBeGreaterThan(0);
    expect(learnedItems('taal', toPl.completed)).toBeGreaterThan(0);
    expect(dailyCard(back.cards!, today, undefined, 'regels')).toMatchObject({ state: 'due', due: 1 });
    expect(dailyCard(toPl.cards!, today, undefined, 'taal')).toMatchObject({ state: 'due', due: 1 });
  });
});

describe('the first run in Dutch: language → (no gender) → code → sector → home', () => {
  const p = { ...emptyProgress, onboarded: true, helpLang: 'nl' as const };
  it('skips the gender page both ways', () => {
    expect(shouldAskGender(p)).toBe(false);
    expect(onboardingStep({ ...emptyProgress }, null)).toBe('language');
    expect(onboardingStep(p, null)).toBe('gate');
    expect(previousStep('gate', p)).toBe('language');
    expect(onboardingStep(p, 'full')).toBe('sector');
    expect(previousStep('sector', p)).toBe(OPEN_TO_ALL ? 'language' : 'gate');
    expect(onboardingStep({ ...p, sector: 'none' }, 'full')).toBe('done');
    expect(previousStep('gate', { ...p, sector: 'none' })).toBe('language');
  });

  it('tries the first lesson of the first unit (Werk zoeken 1)', () => {
    expect(courseUnits('regels')[0].id).toBe('r.zoeken');
    expect(tryLessonId('regels')).toBe('r.l.zoeken.1');
    expect(trialLessonAllowed('r.l.zoeken.1', 'regels')).toBe(true);
    expect(trialLessonAllowed('r.l.start.1', 'regels')).toBe(false);
  });

  it('has a code page text that fits the track', () => {
    expect(ui('gateWho', nl()).help).toBe('Je krijgt de code van je werkgever, je coach of je begeleider.');
    expect(ui('appTagline', nl()).help).toBe('Werken in Nederland: zo gaat het');
  });
});

describe('a learner who works in Belgium', () => {
  it('gets the Belgian rows in "Wie bel je?" and keeps 112', async () => {
    const { HELP_ROWS, HELP_ROWS_BE, helpRowsFor } = await import('../src/content/regels/help');
    expect(helpRowsFor()).toBe(HELP_ROWS);
    expect(helpRowsFor('nl')).toBe(HELP_ROWS);
    expect(helpRowsFor('be')).toBe(HELP_ROWS_BE);
    expect(HELP_ROWS_BE[0].id).toBe('h.112');
    // No Dutch-only place among them.
    const text = HELP_ROWS_BE.map((r) => `${r.name} ${r.show}`).join(' ');
    expect(text).not.toMatch(/UWV|Juridisch Loket|FNV|Arbeidsinspectie|Huisartsenpost/);
    expect(new Set(HELP_ROWS_BE.map((r) => r.id)).size).toBe(HELP_ROWS_BE.length);
  });

  it('the Hulp tab says so, in Dutch, above the disclaimer, with the Belgian rows', () => {
    const be = html(createElement(RulesHelp, { lang: nl(), country: 'be', onShelf: () => {} }));
    noEnglish(be, 'RulesHelp be');
    expect(be).toContain('Je werkt in België.');
    expect(be.indexOf('Je werkt in België.')).toBeLessThan(be.indexOf(RULES_DISCLAIMER[0]));
    expect(be).toContain('VDAB');
    expect(be).not.toContain('Juridisch Loket</');
    const nlHelp = html(createElement(RulesHelp, { lang: nl(), onShelf: () => {} }));
    expect(nlHelp).not.toContain('Je werkt in België.');
    // Outside the list still only "Alle regels" (the note is text).
    const outside = be.replace(/<ul class="rh-rows">[\s\S]*<\/ul>/, '');
    expect((outside.match(/<button|<a /g) ?? [])).toHaveLength(1);
  });

  it('keeps a valid country and drops anything else on load', async () => {
    const { isCountry } = await import('../src/lib/progress');
    expect(isCountry('be')).toBe(true);
    expect(isCountry('nl')).toBe(true);
    expect(isCountry('fr')).toBe(false);
  });
});
