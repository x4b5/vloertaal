/**
 * What each translation id is, read from the app's content (docs/nakijken.md): its Dutch and
 * English text, a short place in plain words ("Taal › Werk en contract › tip"), the country it is
 * about (NL, BE or beide), and how urgent it is (rights and safety first).
 */
import { units, beTaalUnits, phrasebookExtras } from '../../src/content/curriculum';
import { cultureTips, type CultureTip } from '../../src/content/culture';
import { aboutSections, siteSections } from '../../src/content/about';
import { chatWhy, chatWhyIds } from '../../src/content/chatWhy';
import { THEMES, themeOf } from '../../src/content/themes';
import { KUN_TAAL } from '../../src/content/kunJeNu';
import { lessonSayings } from '../../src/content/sayings';
import { beTaalFiles, beTaalTips, BE_CLOSING_IDS } from '../../src/content/taalBe';
import { allRegionTips, allRegionUnits, SOCIAL_CATEGORIES, categoryGlossId, registerRegion } from '../../src/content/regio';
import zlPack from '../../src/content/regio/zuid-limburg-pack';
import { uiEn } from '../../src/i18n/types';
import { uiNl } from '../../src/i18n/nl';
import type { Lesson, Unit } from '../../src/content/types';
import { ADVICE_LINE, ABUSE_LINE } from '../../src/content/work';
import { BE_ADVICE_LINE, BE_ABUSE_LINE } from '../../src/lib/tipText';

// The region's own file, as if a learner had chosen it (the app loads it only then).
registerRegion(zlPack);

/** 0: rights and safety, 1: lessons and tips, 2: screen texts, 3: the rest. */
export type Rank = 0 | 1 | 2 | 3;

export interface IdInfo {
  nl: string;
  en: string;
  waar: string;
  land: 'NL' | 'BE' | 'beide';
  rank: Rank;
  /** Course order within a rank. */
  order: number;
}

const URGENT = new Set(['theme.safe', 'theme.rights']);

let built: Map<string, IdInfo> | null = null;

/** Everything known about the translation ids (built once). */
export function idIndex(): Map<string, IdInfo> {
  if (built) return built;
  const map = new Map<string, IdInfo>();
  let order = 0;
  const add = (id: string, info: Omit<IdInfo, 'order' | 'land'> & { land?: IdInfo['land'] }) => {
    if (!map.has(id)) map.set(id, { land: 'beide', ...info, order: order++ });
  };

  // The country: a Belgian id is BE; an id with a Belgian twin ("be.<id>") is NL; the rest is for both.
  const landOf = (id: string, unitId?: string): IdInfo['land'] =>
    id.startsWith('be.') || unitId?.startsWith('be.') ? 'BE' : id.startsWith('rg.') ? 'NL' : 'beide';

  const unitPlace = new Map<string, { unit: Unit; rank: Rank }>();
  const lessonUnit = new Map<string, Unit>();
  const allUnits = [...units, ...beTaalUnits(), ...allRegionUnits('taal')];
  for (const u of allUnits) {
    const theme = themeOf(u.id.replace(/^be\./, ''));
    unitPlace.set(u.id, { unit: u, rank: theme && URGENT.has(theme.id) ? 0 : 1 });
    for (const l of u.lessons) if (!lessonUnit.has(l.id)) lessonUnit.set(l.id, u);
  }
  const rankOf = (u?: Unit): Rank => (u ? (unitPlace.get(u.id)?.rank ?? 1) : 1);
  const taal = (u: Unit | undefined, what: string) => (u ? `Taal › ${u.titleNl} › ${what}` : `Taal › ${what}`);

  const addLesson = (u: Unit, l: Lesson) => {
    const r = rankOf(u);
    add(l.titleId ?? l.id, { nl: '', en: l.title, waar: taal(u, 'titel van een les'), rank: r, land: landOf(l.titleId ?? l.id, u.id) });
    for (const w of l.words) {
      add(w.id, { nl: w.nl, en: w.en, waar: taal(u, 'woord'), rank: r, land: landOf(w.id, u.id) });
      if (w.literal) add(`${w.id}.lit`, { nl: w.nl, en: w.literal, waar: taal(u, 'woord, letterlijk'), rank: r });
    }
    for (const s of l.sentences) add(s.id, { nl: s.nl, en: s.en, waar: taal(u, 'zin'), rank: r, land: landOf(s.id, u.id) });
    for (const d of l.dialogues ?? []) {
      for (const c of [d.prompt, d.reply]) add(c.id, { nl: c.nl, en: c.en, waar: taal(u, 'gesprekje'), rank: r, land: landOf(c.id, u.id) });
      const why = chatWhy(d.reply.id);
      if (why) add(why.id, { nl: '', en: why.en, waar: taal(u, 'gesprekje, waarom dit antwoord'), rank: r, land: landOf(why.id, u.id) });
    }
  };
  for (const u of allUnits) {
    add(u.id, { nl: u.titleNl, en: u.title, waar: taal(u, 'naam van het onderwerp'), rank: rankOf(u), land: landOf(u.id) });
    for (const l of u.lessons) if (!/\.mix$/.test(l.id)) addLesson(u, l);
  }

  // The Belgian lines (B units): a Flemish word or sentence in a Dutch lesson.
  for (const b of beTaalFiles) {
    for (const [nlId, line] of Object.entries(b.lines ?? {})) {
      const u = [...lessonUnit.values()].find((x) => x.lessons.some((l) => [...l.words, ...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])].some((i) => i.id === nlId)));
      add(`be.${nlId}`, { nl: line.nl, en: line.en, waar: taal(u, 'woord of zin (België)'), rank: rankOf(u), land: 'BE' });
    }
    for (const [nlId, title] of Object.entries(b.titles ?? {})) {
      const u = lessonUnit.get(nlId);
      add(`be.${nlId}`, { nl: '', en: title, waar: taal(u, 'titel van een les (België)'), rank: rankOf(u), land: 'BE' });
    }
  }

  // Tips: "Zo werkt het hier".
  const addTip = (t: CultureTip) => {
    const u = lessonUnit.get(t.lessonId);
    // A tip that ends with "General information. For your situation: ask …" is about rights.
    const r: Rank = /General information\./.test(t.body) ? 0 : rankOf(u);
    const land = landOf(t.id, u?.id);
    const where = (what: string) => taal(u, `tip, ${what}`);
    add(t.id, { nl: '', en: t.title, waar: where('titel'), rank: r, land });
    add(`${t.id}.b`, { nl: '', en: t.body, waar: where('tekst'), rank: r, land });
    add(t.phrase.id, { nl: t.phrase.nl, en: t.phrase.en, waar: where('zin om te zeggen'), rank: r, land });
    add(t.situation.id, { nl: t.situation.nl ?? '', en: t.situation.en, waar: where('situatie'), rank: r, land });
    t.options.forEach((o, i) => add(o.id, { nl: '', en: o.en, waar: where(`keuze ${i + 1}${o.best ? ' (de goede)' : ''}`), rank: r, land }));
    add(t.why.id, { nl: '', en: t.why.en, waar: where('waarom'), rank: r, land });
  };
  [...cultureTips, ...beTaalTips, ...allRegionTips()].forEach(addTip);

  // Sayings in later lessons.
  for (const s of lessonSayings) {
    const u = lessonUnit.get(s.lessonId);
    const r = rankOf(u);
    const where = (what: string) => taal(u, `gezegde, ${what}`);
    add(`${s.id}.lit`, { nl: s.nl, en: s.literal, waar: where('letterlijk'), rank: r });
    add(`${s.id}.m`, { nl: s.nl, en: s.meaning, waar: where('betekenis'), rank: r });
    add(`${s.id}.s`, { nl: '', en: s.situation, waar: where('situatie'), rank: r });
    s.options.forEach((o, i) => add(`${s.id}.o${i + 1}`, { nl: '', en: o, waar: where(`keuze ${i + 1}${i === 0 ? ' (de goede)' : ''}`), rank: r }));
    add(`${s.id}.w`, { nl: '', en: s.why, waar: where('waarom'), rank: r });
  }
  for (const id of chatWhyIds) add(id, { nl: '', en: chatWhy(id.replace(/\.why$/, ''))?.en ?? '', waar: 'Taal › gesprekje, waarom dit antwoord', rank: 1 });

  // Screen texts.
  for (const [key, en] of Object.entries(uiEn)) {
    const nl = (uiNl as Record<string, unknown>)[key];
    const flat = (t: unknown): string => (typeof t === 'string' ? t : t && typeof t === 'object' ? flat((t as Record<string, unknown>).other ?? Object.values(t)[0]) : '');
    const land = /Be$/.test(key) ? 'BE' : `${key}Be` in uiEn ? 'NL' : 'beide';
    add(`ui.${key}`, { nl: flat(nl), en: flat(en), waar: `Scherm › ${key}`, rank: 2, land });
  }

  // The rest: the About page, themes, emergency phrases, "Wat kun je nu?", the region's map, closing lines.
  for (const s of [...aboutSections, ...siteSections]) {
    add(s.id, { nl: s.nl.title, en: s.title, waar: `Over › ${s.nl.title} › titel`, rank: 3 });
    add(`${s.id}.b`, { nl: s.nl.body, en: s.body, waar: `Over › ${s.nl.title} › tekst`, rank: 3 });
  }
  for (const t of THEMES) add(t.id, { nl: t.titleNl, en: t.title, waar: 'Thema › naam', rank: 3 });
  add('be.theme.life', { nl: 'Leven in België', en: 'Life in Belgium', waar: 'Thema › naam (België)', rank: 3, land: 'BE' });
  for (const p of phrasebookExtras) add(p.id, { nl: p.nl, en: p.en, waar: 'Noodzinnen', rank: 0 });
  for (const o of KUN_TAAL) {
    for (const z of o.zinnen) add(z.id, { nl: z.nl, en: z.en ?? '', waar: `Wat kun je nu? › ${o.titel}`, rank: 3 });
  }
  for (const c of SOCIAL_CATEGORIES) add(categoryGlossId(c.id), { nl: c.nl, en: c.en, waar: 'Regio Zuid-Limburg › Sociale kaart › soort hulp', rank: 3, land: 'NL' });
  const closing: Record<(typeof BE_CLOSING_IDS)[number], string> = {
    'be.closing.advice': BE_ADVICE_LINE,
    'be.closing.abuse': BE_ABUSE_LINE,
    'be.closing.advice.nl': ADVICE_LINE,
    'be.closing.advice.nl2': ADVICE_LINE,
    'be.closing.abuse.nl': ABUSE_LINE,
  };
  for (const id of BE_CLOSING_IDS) {
    add(id, { nl: '', en: closing[id], waar: `Tips › slotzin ${id.endsWith('.nl') || id.endsWith('.nl2') ? '(Nederland, zoals deze taal hem schrijft)' : '(België)'}`, rank: 0, land: id.includes('.nl') ? 'NL' : 'BE' });
  }

  // An id with a Belgian twin is about the Netherlands.
  for (const [id, info] of map) if (info.land === 'beide' && map.has(`be.${id}`)) info.land = 'NL';
  built = map;
  return map;
}
