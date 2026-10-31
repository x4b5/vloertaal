import { readdirSync, readFileSync } from 'node:fs';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { cultureTips, taalTips, tipForLesson, type CultureTip } from '../src/content/culture';
import { allLessons, beOnlyTaalLessons, beTaalUnits, findLesson, playLesson, units } from '../src/content/curriculum';
import { buildLesson } from '../src/lib/exercises';
import { courseUnits, rulesTwinHere } from '../src/content/courses';
import { learnerCountry } from '../src/content/country';
import { setRulesCountry } from '../src/content/rulesCourse';
import { groupByTheme, THEMES, themeOf } from '../src/content/themes';
import { BE_TAAL_TODO, beTaalCourse, beTaalFiles, beTaalIds, beTaalOf, beTaalTips, lessonNlOnly, lifeThemeHere, taalBeActive, tipNlOnly, unitNlOnly } from '../src/content/taalBe';
import { isTaalBeId, pictureIdOf, taalBeId, taalNlId } from '../src/content/taalBe/ids';
import { BE_TAAL_UNITS, TAAL_BE_INVENTORY } from '../src/content/taalBe/inventory';
import { setBeTaal } from '../src/content/taalBe/live';
import type { BeTaal } from '../src/content/taalBe/types';
import { mixLessonId } from '../src/content/review';
import { ABUSE_LINE, ADVICE_LINE } from '../src/content/work';
import { helpRowsFor } from '../src/content/regels/help';
import { workContacts } from '../src/components/Screens';
import { themeText } from '../src/components/Themes';
import { getHelpLanguage, helpLanguages } from '../src/i18n/all';
import { uiEn } from '../src/i18n/types';
import { certData, certSub, earnedCertificates } from '../src/lib/certificate';
import { emptyProgress } from '../src/lib/progress';
import { routeOrder } from '../src/lib/route';
import { dailyLesson, dailyWordIds, dueIds } from '../src/lib/spaced';
import { beClosing, BE_ABUSE_LINE, BE_ADVICE_LINE, tipBody } from '../src/lib/tipText';
import { inCountry, toetsQuestions } from '../src/lib/toets';
import { TOETS_VERSIONS } from '../src/content/toets';
import { KUN_TAAL, kunJeNu } from '../src/content/kunJeNu';

/**
 * The language track in Belgium (docs/taal-belgie.md): the shape and ids of the Belgian files,
 * no Dutch places in Belgian texts (and the other way round), the line "Dit gaat over Nederland.
 * In België is het anders.", the course per country (route, themes, certificates, today's review,
 * the test), the switch, the closing lines, the Hulp tab and BE_TAAL_TODO.
 */

const inCountryBe = (on = true) => {
  setRulesCountry('be');
  setBeTaal(on);
};
afterEach(() => {
  setRulesCountry('nl');
  setBeTaal(null);
});

const lessonsOf = (b: BeTaal) => (b.unit?.lessons ?? []);
const tipTexts = (t: CultureTip) => [t.title, t.body, t.phrase.nl, t.phrase.en, t.situation.en, ...(t.situation.nl ? [t.situation.nl] : []), ...t.options.map((o) => o.en), t.why.en];
const beTexts = (): string[] => [
  ...beTaalFiles.flatMap((b) => [
    ...(b.unit ? [b.unit.title, b.unit.titleNl] : []),
    ...lessonsOf(b).flatMap((l) => [l.title, ...l.words.flatMap((w) => [w.nl, w.en]), ...l.sentences.flatMap((s) => [s.nl, s.en]), ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.prompt.en, d.reply.nl, d.reply.en])]),
    ...Object.values(b.lines ?? {}).flatMap((x) => [x.nl, x.en]),
  ]),
  ...beTaalTips.flatMap(tipTexts),
];
/** The Dutch course's texts, the tips' closing lines left out (the Belgian course swaps them). */
const nlTexts = (): string[] => [
  ...units.flatMap((u) => [u.title, u.titleNl, ...u.lessons.flatMap((l) => [l.title, ...l.words.flatMap((w) => [w.nl, w.en]), ...l.sentences.flatMap((s) => [s.nl, s.en])])]),
  ...cultureTips.flatMap(tipTexts),
];

/** Dutch places and words that never belong in a Belgian text (docs/taal-belgie.md, "Woorden"). */
const NL_ONLY = /\b(UWV|DigiD|BSN|toeslag\w*|zorgtoeslag|huurtoeslag|Juridisch Loket|FairWork|Belastingdienst|Tweede Kamer|stempas|werk\.nl|huisartsenpost|Arbeidsinspectie|Arbowet|zorgverzekering|loonstro(o|k)\w*|uitzendbureau\w*|POK|bbl|Entree|IND|Huurcommissie|OVpay|rijksoverheid\.nl)\b/i;
/** Belgian places and words that never belong in a Dutch text. */
const BE_ONLY = /\b(België|Belgium|Belgian|Vlaanderen|Flanders|itsme|RVA|VDAB|loonbrief|interimkantoor|justitiehuis|Payoke|opkomstplicht|oproepingsbrief|wijkagent|Unia|ziekenfonds|refter)\b/i;

describe('Belgian files: the same shape as the Dutch units', () => {
  it('has the example C unit (Meedoen in België) and the example B unit (Online op je werk)', () => {
    expect(beTaalOf('u.society')?.unit?.id).toBe('be.u.society');
    expect(beTaalOf('u.online')?.lines).toBeDefined();
  });

  it('has one file per B or C unit of the inventory, and none for an A unit', () => {
    const files = readdirSync('src/content/taalBe/units').map((f) => `u.${f.replace(/\.ts$/, '')}`).sort();
    expect(files).toEqual([...BE_TAAL_UNITS].sort());
    for (const id of files) expect(readFileSync(`src/i18n/be/units/${id.slice(2)}.ts`, 'utf8')).toMatch(/export const de: Gloss/);
  });

  it('lists every unit and lesson of the Dutch course in the inventory, once', () => {
    expect(Object.keys(TAAL_BE_INVENTORY).sort()).toEqual(units.map((u) => u.id).sort());
    for (const u of units) {
      const teaching = u.lessons.filter((l) => !l.id.endsWith('.mix')).map((l) => l.id);
      expect(Object.keys(TAAL_BE_INVENTORY[u.id].lessons), u.id).toEqual(teaching);
      for (const id of teaching) {
        const inv = TAAL_BE_INVENTORY[u.id].lessons[id];
        expect(inv.tip === '-', id).toBe(!cultureTips.some((t) => t.lessonId === id));
        if (inv.items !== 'A' || (inv.tip !== 'A' && inv.tip !== '-')) {
          expect(TAAL_BE_INVENTORY[u.id].kind, `${u.id}: ${id} differs`).not.toBe('A');
          expect(inv.why, id).toBeTruthy();
        }
      }
    }
  });

  it('marks every tip with a Dutch place or fact at least B (only the closing line is swapped by itself)', () => {
    for (const t of cultureTips) {
      const inv = Object.values(TAAL_BE_INVENTORY).find((u) => u.lessons[t.lessonId])?.lessons[t.lessonId];
      const body = t.body.replace(ADVICE_LINE, '').replace(ABUSE_LINE, '');
      if (NL_ONLY.test([body, t.situation.en, ...t.options.map((o) => o.en), t.why.en, t.phrase.nl].join(' '))) expect(inv?.tip, t.id).not.toBe('A');
    }
  });

  it('marks every lesson with a Dutch word or sentence (het UWV, de loonstrook …) at least B', () => {
    for (const l of allLessons.filter((x) => !x.id.endsWith('.mix'))) {
      const inv = Object.values(TAAL_BE_INVENTORY).find((u) => u.lessons[l.id])?.lessons[l.id];
      const text = [...l.words.map((w) => w.nl), ...l.sentences.map((s) => s.nl), ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.reply.nl])].join(' ');
      if (NL_ONLY.test(text)) expect(inv?.items, l.id).not.toBe('A');
    }
  });

  it('gives a C unit "be." ids, the Dutch lessons in the same order, and full lessons', () => {
    for (const b of beTaalFiles.filter((x) => x.unit)) {
      const u = b.unit!;
      const nl = units.find((x) => x.id === b.nl)!;
      expect(u.id).toBe(taalBeId(b.nl));
      const nlLessons = nl.lessons.filter((l) => !l.id.endsWith('.mix')).map((l) => l.id);
      expect(u.lessons.slice(0, nlLessons.length).map((l) => taalNlId(l.id))).toEqual(nlLessons);
      for (const l of u.lessons) {
        expect(l.id, l.id).toMatch(/^be\.l\.[a-z]+$/);
        expect(l.words).toHaveLength(6);
        expect(l.sentences).toHaveLength(3);
        expect(l.dialogues?.length, l.id).toBe(1);
        for (const x of [...l.words, ...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])]) expect(isTaalBeId(x.id), x.id).toBe(true);
        expect(beTaalTips.filter((t) => t.lessonId === l.id), l.id).toHaveLength(1);
      }
    }
  });

  it('changes only lines that the Dutch unit has, and only lessons the inventory marks', () => {
    for (const b of beTaalFiles) {
      const nl = units.find((x) => x.id === b.nl)!;
      for (const id of Object.keys(b.lines ?? {})) {
        const lesson = nl.lessons.find((l) => [...l.words, ...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])].some((x) => x.id === id));
        expect(lesson, `${b.nl}: ${id}`).toBeDefined();
        expect(TAAL_BE_INVENTORY[b.nl].lessons[lesson!.id].items, id).not.toBe('A');
      }
    }
  });

  it('covers every B and C of a written unit: its lessons and its tips', () => {
    for (const b of beTaalFiles) {
      for (const [lessonId, inv] of Object.entries(TAAL_BE_INVENTORY[b.nl].lessons)) {
        if (b.unit) continue; // a C unit is new as a whole (checked above)
        const nl = units.find((x) => x.id === b.nl)!.lessons.find((l) => l.id === lessonId)!;
        const lineIds = [...nl.words, ...nl.sentences, ...(nl.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])].map((x) => x.id);
        if (inv.items !== 'A') expect(lineIds.some((id) => b.lines?.[id]), `${lessonId}: no Belgian line`).toBe(true);
        if (inv.tip !== 'A' && inv.tip !== '-') expect(beTaalTips.some((t) => t.lessonId === lessonId), `${lessonId}: no Belgian tip`).toBe(true);
      }
    }
  });

  it('gives every Belgian tip "be." ids, one best option that does not stand out by its length', () => {
    for (const t of beTaalTips) {
      expect(t.id).toMatch(/^be\.c\.[a-z]+$/);
      expect(cultureTips.some((n) => `be.${n.id}` === t.id), t.id).toBe(true);
      for (const id of [t.phrase.id, t.situation.id, ...t.options.map((o) => o.id), t.why.id]) expect(id.startsWith(`${t.id}.`), id).toBe(true);
      expect(t.options.filter((o) => o.best)).toHaveLength(1);
      const best = t.options.find((o) => o.best)!.en.length;
      expect(best, t.id).toBeLessThanOrEqual(1.3 * Math.max(...t.options.filter((o) => !o.best).map((o) => o.en.length)));
      expect(findLesson(t.lessonId), t.lessonId).toBeDefined();
    }
  });

  it('puts a ⚖️ note right above every tip and every lesson of a Belgian file', () => {
    for (const b of beTaalFiles) {
      const file = readFileSync(`src/content/taalBe/units/${b.nl.slice(2)}.ts`, 'utf8');
      const lines = file.split('\n');
      const above = (needle: string) => {
        let at = lines.findIndex((l) => l.includes(needle));
        expect(at, needle).toBeGreaterThan(0);
        const notes: string[] = [];
        for (at--; at >= 0 && /^\s*(\/\/|\{|\.\.\.beTip\(\{|beTip\(\{|beLesson\()/.test(lines[at]); at--) notes.push(lines[at]);
        return notes.join('\n');
      };
      for (const t of b.tips ?? []) expect(above(`slug: '${t.id.slice(5)}'`), t.id).toMatch(/⚖️ check:/);
      for (const l of lessonsOf(b)) expect(above(`'${l.id.slice(5)}',`), l.id).toMatch(/⚖️ check:/);
      if (b.lines) expect(file, b.nl).toMatch(/⚖️ check:[\s\S]*const lines/);
      // Every number in a tip text is in a ⚖️ note of the file.
      const notes = lines.filter((l) => /^\s*\/\//.test(l)).join(' ');
      for (const t of b.tips ?? []) for (const n of [t.body, t.why.en].join(' ').match(/\d+/g) ?? []) expect(notes, `${t.id}: ${n}`).toContain(n);
    }
  });
});

describe('Belgian and Dutch texts stay apart', () => {
  it('has no Dutch places or words in a Belgian text', () => {
    for (const t of beTexts()) expect(t, t).not.toMatch(NL_ONLY);
  });

  it('has no Belgian places or words in a Dutch text', () => {
    for (const t of nlTexts()) expect(t, t).not.toMatch(BE_ONLY);
  });

  it('has no euro sign and no year in a Belgian text', () => {
    for (const t of beTexts()) expect(t, t).not.toMatch(/€|\b20\d\d\b/);
  });
});

describe('"Dit gaat over Nederland. In België is het anders."', () => {
  it('has the line in English and in Dutch, and in every help language', () => {
    expect(uiEn.beNlOnly).toBe('This is about the Netherlands. In Belgium it is different.');
    for (const lang of helpLanguages) {
      expect(lang.ui.beNlOnly?.trim(), lang.code).toBeTruthy();
      expect(lang.ui.beTaalBeta?.trim(), lang.code).toBeTruthy();
      expect(lang.gloss['be.theme.life']?.trim(), lang.code).toBeTruthy();
    }
  });

  it('never shows in the Netherlands', () => {
    setRulesCountry('nl');
    for (const switchOn of [true, false]) {
      setBeTaal(switchOn);
      for (const l of allLessons) expect(lessonNlOnly(l.id), l.id).toBe(false);
      for (const t of cultureTips) expect(tipNlOnly(t), t.id).toBe(false);
      for (const u of units) expect(unitNlOnly(u.id), u.id).toBe(false);
      expect(lifeThemeHere()).toBe('nl');
    }
  });

  it('shows in Belgium at what differs there and has no Belgian version yet, also with the switch off', () => {
    inCountryBe(false);
    expect(taalBeActive()).toBe(false);
    expect(lessonNlOnly('l.payslip')).toBe(true);
    expect(lessonNlOnly('l.council')).toBe(true);
    expect(lessonNlOnly('l.login')).toBe(true);
    expect(lessonNlOnly('l.hello')).toBe(true); // its tip ("je" or "u")
    expect(lessonNlOnly('l.understand')).toBe(false); // A
    expect(unitNlOnly('u.society')).toBe(true);
    expect(unitNlOnly('u.pay')).toBe(false); // B: its lessons say it
    expect(tipNlOnly(tipForLesson('l.payslip')!)).toBe(true);
    expect(tipNlOnly(tipForLesson('l.site')!)).toBe(false); // only its closing line
    expect(lifeThemeHere()).toBe('nl-marked');

    inCountryBe(true);
    expect(lessonNlOnly('l.payslip')).toBe(false); // u.pay: written
    expect(lessonNlOnly('l.login')).toBe(false); // u.online: written
    expect(unitNlOnly('u.society')).toBe(false); // written: Meedoen in België plays
    expect(lessonNlOnly('be.l.council')).toBe(false);
    expect(tipNlOnly(tipForLesson('l.login')!)).toBe(false);
    expect(lifeThemeHere()).toBe('be');
  });

  it('calls the theme "Leven in België" in Belgium, in English and in the help language', () => {
    const life = THEMES.find((t) => t.id === 'theme.life')!;
    const de = getHelpLanguage('de');
    expect(themeText(life, de).en).toBe('Life in the Netherlands');
    inCountryBe(true);
    expect(themeText(life).en).toBe('Life in Belgium');
    expect(themeText(life, de).help).toBe('Leben in Belgien');
    inCountryBe(false);
    expect(themeText(life, de).help).toBe(de?.gloss['theme.life']);
  });
});

describe('the language course per country', () => {
  beforeAll(() => setBeTaal(true));
  afterAll(() => setBeTaal(null));

  it('plays the Belgian course in Belgium: the same units in the same order, the twins in place', () => {
    inCountryBe(true);
    const be = courseUnits('taal');
    expect(be).toBe(beTaalUnits());
    expect(be.map((u) => taalNlId(u.id))).toEqual(units.map((u) => u.id));
    expect(be.find((u) => taalNlId(u.id) === 'u.society')!.id).toBe('be.u.society');
    // An unchanged unit is the very same object.
    expect(be.find((u) => u.id === 'u.help')).toBe(units.find((u) => u.id === 'u.help'));
    // A B line plays with its Belgian id and text.
    const login = be.find((u) => u.id === 'u.online')!.lessons.find((l) => l.id === 'l.login')!;
    expect(login.sentences.map((s) => s.id)).toContain('be.s.login.3');
    expect(login.sentences.find((s) => s.id === 'be.s.login.3')!.nl).toMatch(/itsme/);
    setRulesCountry('nl');
    expect(courseUnits('taal')).toBe(units);
  });

  it('changes nothing with the switch off but the line, in Belgium too', () => {
    inCountryBe(false);
    expect(courseUnits('taal')).toBe(units);
    expect(taalTips()).toBe(cultureTips);
    expect(tipForLesson('l.login')?.id).toBe('c.login');
    expect(routeOrder(undefined, 'taal').map((u) => u.id)).toEqual((setRulesCountry('nl'), routeOrder(undefined, 'taal').map((u) => u.id)));
    inCountryBe(false);
    expect(tipBody(tipForLesson('l.site')!).en.endsWith(ADVICE_LINE)).toBe(true);
    expect(toetsQuestions('A').map((q) => q.part)).toHaveLength(18);
  });

  it('gives every changed unit a mixed review of its own items, with a translated title', () => {
    const be = beTaalUnits();
    const society = be.find((u) => u.id === 'be.u.society')!;
    const mix = society.lessons[society.lessons.length - 1];
    expect(mix.id).toBe(mixLessonId('be.u.society'));
    expect(mix.id).toBe('be.l.society.mix');
    expect(mix.words.length).toBeGreaterThanOrEqual(5);
    for (const lang of helpLanguages) expect(lang.gloss[mix.id]?.trim(), lang.code).toBeTruthy();
  });

  it('keeps the route, the themes and the coach links on the Dutch twin', () => {
    inCountryBe(true);
    const order = routeOrder(undefined, 'taal').map((u) => u.id);
    expect(order).toContain('be.u.society');
    expect(order).not.toContain('u.society');
    expect(themeOf('be.u.society')?.id).toBe('theme.life');
    expect(groupByTheme(courseUnits('taal')).flatMap((g) => g.units).length).toBe(courseUnits('taal').length);
    expect(rulesTwinHere('u.society')).toBe('be.u.society');
    expect(rulesTwinHere('u.pay')).toBe('u.pay');
    setRulesCountry('nl');
    expect(rulesTwinHere('be.u.society')).toBe('u.society');
  });

  it('gives a certificate for the Belgian unit (the language course: "Nederlands voor het werk")', () => {
    inCountryBe(true);
    const society = courseUnits('taal').find((u) => u.id === 'be.u.society')!;
    const completed = Object.fromEntries(society.lessons.map((l) => [l.id, { best: 1, times: 1 }]));
    const earned = earnedCertificates({ ...emptyProgress, completed }, new Date('2026-10-31'), 'taal');
    expect(earned.map((e) => e.unit.id)).toContain('be.u.society');
    expect(certSub(certData(society, '2026-10-31', 'Nadia'))).toBe('Nederlands voor het werk');
    // The Dutch unit's lessons do not earn the Belgian certificate, and the other way round.
    setRulesCountry('nl');
    expect(earnedCertificates({ ...emptyProgress, completed }, new Date('2026-10-31'), 'taal').map((e) => e.unit.id)).not.toContain('u.society');
  });

  it('keeps today\'s review apart per country', () => {
    const cards = { 'w.stemmen': { box: 1, due: '2026-10-01' }, 'be.w.stemmen': { box: 1, due: '2026-10-01' }, 'w.helm': { box: 1, due: '2026-10-01' } };
    inCountryBe(true);
    expect(dueIds(cards, '2026-10-31')).toEqual(expect.arrayContaining(['be.w.stemmen', 'w.helm']));
    expect(dueIds(cards, '2026-10-31')).not.toContain('w.stemmen');
    expect(dailyWordIds(cards, '2026-10-31')).not.toContain('w.stemmen');
    setRulesCountry('nl');
    expect(dueIds(cards, '2026-10-31')).toEqual(expect.arrayContaining(['w.stemmen', 'w.helm']));
    expect(dueIds(cards, '2026-10-31')).not.toContain('be.w.stemmen');
  });

  it('asks the test in the country\'s words: an item with a Belgian line plays it', () => {
    const line = units.find((u) => u.id === 'u.online')!.lessons[0].sentences[2];
    expect(line.id).toBe('s.login.3');
    inCountryBe(true);
    expect(inCountry(line).nl).toMatch(/itsme/);
    setRulesCountry('nl');
    expect(inCountry(line)).toBe(line);
    // The test's items resolve in both countries.
    for (const c of ['nl', 'be'] as const) {
      setRulesCountry(c);
      expect(toetsQuestions('A')).toHaveLength(18);
      expect(toetsQuestions('B')).toHaveLength(18);
    }
  });

  it('shows the Belgian tips in Belgium, the Dutch ones elsewhere', () => {
    inCountryBe(true);
    expect(tipForLesson('l.login')?.id).toBe('be.c.login');
    expect(tipForLesson('be.l.council')?.id).toBe('be.c.council');
    expect(taalTips().map((t) => t.id)).toContain('be.c.login');
    expect(taalTips()).toHaveLength(cultureTips.length);
    setRulesCountry('nl');
    expect(tipForLesson('l.login')?.id).toBe('c.login');
    // A Belgian lesson keeps its own tip, also when the learner switched back.
    expect(tipForLesson('be.l.council')?.id).toBe('be.c.council');
  });

  it('keeps a Belgian word\'s drawing only when it says so', () => {
    expect(pictureIdOf('be.w.stemmen')).toBe('be.w.stemmen');
    const fake: BeTaal = { nl: 'u.firstday', lines: { 'w.kantine': { nl: 'de refter', en: 'the canteen', picture: 'same' } } };
    const course = beTaalCourse(units, { 'u.firstday': fake });
    const arrive = course.find((u) => u.id === 'u.firstday')!.lessons.find((l) => l.id === 'l.arrive')!;
    expect(arrive.words.find((w) => w.id === 'be.w.kantine')?.nl).toBe('de refter');
    expect(course.find((u) => u.id === 'u.help')).toBe(units.find((u) => u.id === 'u.help'));
  });

  it('plays a Belgian lesson and its review like any other: the tip, the words, today\'s review', () => {
    inCountryBe(true);
    for (const l of courseUnits('taal').find((u) => u.id === 'be.u.society')!.lessons) {
      const found = playLesson(l.id, {});
      expect(found?.unit.id, l.id).toBe('be.u.society');
      const ex = buildLesson(found!.lesson, { review: false, seed: 3 });
      expect(ex.length, l.id).toBeGreaterThan(5);
      if (!l.id.endsWith('.mix')) expect(ex.some((e) => e.kind === 'tip' && e.tip.id.startsWith('be.c.')), l.id).toBe(true);
    }
    const daily = dailyLesson(['be.w.stemmen', 'be.w.identiteitskaart', 'w.helm', 'w.pauze'], {}, '2026-10-31');
    expect(daily.words.map((w) => w.id)).toEqual(['be.w.stemmen', 'be.w.identiteitskaart', 'w.helm', 'w.pauze']);
  });

  it('finds every Belgian lesson by id, in either country (a backup keeps them)', () => {
    for (const c of ['nl', 'be'] as const) {
      setRulesCountry(c);
      for (const l of beOnlyTaalLessons()) expect(findLesson(l.id), l.id).toBeDefined();
    }
    expect(learnerCountry()).toBe('be');
  });
});

describe('"Wat kun je nu?" and the test', () => {
  it('gives a Belgian unit its Dutch twin\'s can-do lines', () => {
    expect(kunJeNu('be.u.society')).toEqual(kunJeNu('u.society'));
    expect(kunJeNu('be.u.society').length).toBeGreaterThan(0);
  });

  it('has a Dutch word in one can-do line only (u.pay: de loonstrook), said the Flemish way in Belgium', () => {
    const dutch = KUN_TAAL.filter((o) => o.zinnen.some((z) => NL_ONLY.test(z.nl))).map((o) => o.unit);
    expect(dutch).toEqual(['u.pay']);
    inCountryBe(true);
    for (const o of KUN_TAAL) for (const z of kunJeNu(o.unit)) expect(z.nl, z.id).not.toMatch(NL_ONLY);
    expect(kunJeNu('u.pay')[0]).toMatchObject({ id: 'kjn.u.pay.1', nl: 'Ik kan zeggen dat mijn loonbrief niet klopt.' });
    inCountryBe(false);
    expect(kunJeNu('u.pay')[0].nl).toMatch(/loonstrook/);
  });

  it('knows which items of the test are said otherwise in Belgium (they play their Belgian line once written)', () => {
    const items = [...TOETS_VERSIONS.A, ...TOETS_VERSIONS.B].flatMap((i) => [i.answer, ...i.others]);
    const lines = allLessons.flatMap((l) => [...l.words, ...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])]);
    // The Dutch words of the test that Flanders says otherwise (docs/taal-belgie.md, "De toets").
    const FLEMISH = /\b(loonstro\w*|bedrijfsarts|kantine|uitzendbureau|UWV|DigiD|pinnen)\b/i;
    const differ = [...new Set(items)].filter((id) => FLEMISH.test(lines.find((x) => x.id === id)?.nl ?? '')).sort();
    expect(differ).toEqual(['c.payslip.q', 'w.bedrijfsarts', 'w.kantine']);
  });
});

describe('the closing line of the tips', () => {
  it('swaps "… the Juridisch Loket" for the Belgian line, in English and in every help language', () => {
    for (const [nl, be] of [[ADVICE_LINE, BE_ADVICE_LINE], [ABUSE_LINE, BE_ABUSE_LINE]]) {
      const tips = cultureTips.filter((t) => t.body.endsWith(nl));
      expect(tips.length).toBeGreaterThan(0);
      for (const lang of helpLanguages) {
        for (const t of tips) {
          const help = lang.gloss[`${t.id}.b`];
          const swapped = beClosing(t.body, help, lang);
          expect(swapped.en.endsWith(be), t.id).toBe(true);
          expect(swapped.help, `${lang.code} ${t.id}: its closing line is not the known one`).not.toBe(help);
        }
      }
    }
  });

  it('swaps only in the Belgian course', () => {
    const t = tipForLesson('l.site')!;
    inCountryBe(true);
    expect(tipBody(t).en.endsWith(BE_ADVICE_LINE)).toBe(true);
    setRulesCountry('nl');
    expect(tipBody(t).en.endsWith(ADVICE_LINE)).toBe(true);
  });
});

describe('"Problems at work? Who can help" in Belgium', () => {
  it('shows the Belgian places in Belgium, each with a line in every help language', () => {
    const be = workContacts('be').map((c) => c.id);
    expect(be).toEqual(['h.112', ...['h.be.justitiehuis', 'h.be.payoke', 'h.be.tsw', 'h.be.vakbond'].sort((a, b) => helpRowsFor('be').findIndex((r) => r.id === a) - helpRowsFor('be').findIndex((r) => r.id === b))]);
    expect(workContacts('nl').map((c) => c.id)).toEqual(expect.arrayContaining(['h.juridischloket', 'h.arbeidsinspectie', 'h.fairwork']));
    for (const c of workContacts('be')) for (const lang of helpLanguages) expect(lang.ui[c.when]?.trim(), `${lang.code} ${c.when}`).toBeTruthy();
    for (const c of workContacts('be')) expect(`${c.row.name} ${c.row.when}`, c.id).not.toMatch(NL_ONLY);
  });
});

describe('BE_TAAL_TODO', () => {
  it('lists exactly the B and C units whose Belgian file is not written yet, each once', () => {
    expect(new Set(BE_TAAL_TODO).size).toBe(BE_TAAL_TODO.length);
    expect([...BE_TAAL_TODO].sort()).toEqual(BE_TAAL_UNITS.filter((id) => !beTaalOf(id)).sort());
  });

  it('gets shorter: Meedoen in België and Online op je werk are done', () => {
    expect(BE_TAAL_TODO).not.toContain('u.society');
    expect(BE_TAAL_TODO).not.toContain('u.online');
  });

  it('has a translation for every Belgian id in every help language', () => {
    for (const lang of helpLanguages) for (const id of beTaalIds()) expect(lang.gloss[id]?.trim(), `${lang.code} ${id}`).toBeTruthy();
  });
});

describe('a Belgian lesson title', () => {
  it('l.nextstep is "Learning on after school" in Belgium, translated under be.l.nextstep', async () => {
    const { beTaalCourse } = await import('../src/content/taalBe');
    const { units } = await import('../src/content/curriculum');
    const be = beTaalCourse(units);
    const l = be.flatMap((u) => u.lessons).find((x) => x.id === 'l.nextstep')!;
    expect(l.title).toBe('Learning on after school');
    expect(l.titleId).toBe('be.l.nextstep');
    const nl = units.flatMap((u) => u.lessons).find((x) => x.id === 'l.nextstep')!;
    expect(nl.titleId).toBeUndefined();
  });
});
