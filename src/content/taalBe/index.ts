import type { CultureTip } from '../culture';
import { learnerCountry } from '../country';
import { isMixLesson, mixLesson } from '../review';
import type { Dialogue, Lesson, Unit } from '../types';
import { isTaalBeId, setSamePicture, taalBeId, taalNlId } from './ids';
import { TAAL_BE_INVENTORY } from './inventory';
import { beTaalOn } from './live';
import type { BeLine, BeTaal } from './types';
import { be as firstday } from './units/firstday';
import { be as tools } from './units/tools';
import { be as safety } from './units/safety';
import { be as warehouse } from './units/warehouse';
import { be as data } from './units/data';
import { be as time } from './units/time';
import { be as teamwork } from './units/teamwork';
import { be as contract } from './units/contract';
import { be as papers } from './units/papers';
import { be as pay } from './units/pay';
import { be as house } from './units/house';
import { be as sayings } from './units/sayings';
import { be as rights } from './units/rights';
import { be as leave } from './units/leave';
import { be as exploit } from './units/exploit';
import { be as grow } from './units/grow';
import { be as health } from './units/health';
import { be as money } from './units/money';
import { be as travel } from './units/travel';
import { be as lost } from './units/lost';
import { be as shop } from './units/shop';
import { be as ai } from './units/ai';
import { be as kas } from './units/kas';
import { be as stage } from './units/stage';
import { be as society } from './units/society';
import { be as online } from './units/online';

/**
 * The language track for Belgium (Vlaanderen), docs/taal-belgie.md. Every Dutch unit with a B or C
 * in the inventory (./inventory.ts) has a file in ./units, already imported here. A file whose `be`
 * is undefined is not written yet: a learner in Belgium then plays the Dutch unit, and the lessons
 * and tips that differ say "Dit gaat over Nederland. In België is het anders." So a content agent
 * only writes its own unit files (and their translations in src/i18n/be/units), and removes its
 * units from BE_TAAL_TODO below.
 */

/** Each Belgian file by the id of its Dutch unit. */
const BY_NL: Record<string, BeTaal | undefined> = {
  'u.firstday': firstday, 'u.tools': tools, 'u.safety': safety, 'u.warehouse': warehouse, 'u.data': data,
  'u.time': time, 'u.teamwork': teamwork, 'u.contract': contract, 'u.papers': papers, 'u.pay': pay,
  'u.house': house, 'u.sayings': sayings, 'u.rights': rights, 'u.leave': leave, 'u.exploit': exploit,
  'u.grow': grow, 'u.health': health, 'u.money': money, 'u.travel': travel, 'u.lost': lost, 'u.shop': shop,
  'u.ai': ai, 'u.kas': kas, 'u.stage': stage, 'u.society': society, 'u.online': online,
};

/**
 * The Dutch units with a B or C whose Belgian file is not written yet. It gets shorter: remove a
 * unit here in the same commit that fills its file (tests/taalBe.test.ts checks that this list is
 * exactly right). One block per content agent (docs/taal-belgie.md, "Verdeling"), a blank line
 * between the blocks, so that two agents never change the same lines.
 */
export const BE_TAAL_TODO: readonly string[] = [
  // Agent A: werk zoeken, contract, stage en verder leren
  'u.contract', 'u.stage', 'u.grow',

  // Agent B: loon, papieren, geld en online
  'u.pay', 'u.papers', 'u.money', 'u.data', 'u.ai',

  // Agent C: rechten, verlof en ziekte, werk kwijt, uitbuiting
  'u.rights', 'u.leave', 'u.lost', 'u.exploit',

  // Agent D: gezondheid, reizen, de eerste dagen, samenwerken, winkel en kas (af)
];

/** Every Belgian file written so far. */
export const beTaalFiles: BeTaal[] = Object.values(BY_NL).filter((b): b is BeTaal => b !== undefined);

/** The Belgian file of a Dutch unit, or undefined (not written yet, or an A unit). */
export const beTaalOf = (nlUnitId: string): BeTaal | undefined => BY_NL[taalNlId(nlUnitId)];

/** The ids of the Belgian units written anew (C: "be.u.society"). */
export const beTaalUnitIds: string[] = beTaalFiles.flatMap((b) => (b.unit ? [b.unit.id] : []));

/** Every Belgian tip written so far. */
export const beTaalTips: CultureTip[] = beTaalFiles.flatMap((b) => b.tips ?? []);

for (const b of beTaalFiles) for (const [id, line] of Object.entries(b.lines ?? {})) if (line.picture === 'same') setSamePicture(taalBeId(id), id);

/* ---- On or off ---- */

/** Does this learner play the Belgian language course: in Belgium, with the switch on? */
export const taalBeActive = (): boolean => learnerCountry() === 'be' && beTaalOn();

/* ---- The course ---- */

const patchWord = (lines: Record<string, BeLine>) => <T extends { id: string; nl: string; en: string }>(x: T): T => {
  const line = lines[x.id];
  if (!line) return x;
  const { picture, emoji, alt, nl, en } = line;
  return { ...x, id: taalBeId(x.id), nl, en, ...(emoji ? { emoji } : {}), ...(alt ? { alt } : {}), ...(picture === false ? { picture: false } : {}) };
};

/** A Dutch lesson with the B lines of its unit (the same object when none of its lines changes). */
function patchLesson(l: Lesson, lines: Record<string, BeLine>): Lesson {
  const ids = [...l.words, ...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])].map((x) => x.id);
  if (!ids.some((id) => lines[id])) return l;
  const p = patchWord(lines);
  const dialogues = l.dialogues?.map((d): Dialogue => ({ prompt: p(d.prompt), reply: p(d.reply) }));
  return { ...l, words: l.words.map(p), sentences: l.sentences.map(p), ...(dialogues ? { dialogues } : {}) };
}

/**
 * The Belgian course, from the Dutch one (`nlUnits`, with their mixed reviews): a unit written
 * anew (C) takes the Dutch unit's place, a unit with B lines plays those lines, every other unit
 * is the same object as in the Dutch course. A changed unit gets its mixed review again, from the
 * Belgian course (src/content/review.ts).
 */
export function beTaalCourse(nlUnits: Unit[], files: Record<string, BeTaal | undefined> = BY_NL): Unit[] {
  const changed = new Set<string>();
  const teaching = nlUnits.map((u) => {
    const b = files[u.id];
    if (b?.unit) {
      changed.add(b.unit.id);
      return { ...b.unit, lessons: b.unit.lessons.filter((l) => !isMixLesson(l)) };
    }
    if (!b?.lines) return u;
    const lessons = u.lessons.filter((l) => !isMixLesson(l)).map((l) => patchLesson(l, b.lines!));
    if (lessons.every((l, i) => l === u.lessons[i])) return u;
    changed.add(u.id);
    return { ...u, lessons };
  });
  const mixes = teaching.map((u) => (changed.has(u.id) ? mixLesson(u, teaching) : undefined));
  return teaching.map((u, i) => (mixes[i] ? { ...u, lessons: [...u.lessons, mixes[i]!] } : u));
}

/* ---- The tips ---- */

/** The Belgian tip of a lesson (a Belgian lesson, or a Dutch one with a B tip), if written. */
export const beTipFor = (lessonId: string): CultureTip | undefined => beTaalTips.find((t) => t.lessonId === lessonId);

/* ---- "Dit gaat over Nederland. In België is het anders." ---- */

const lessonInventory = new Map(Object.values(TAAL_BE_INVENTORY).flatMap((u) => Object.entries(u.lessons)));
const unitOfLessonId = new Map(Object.entries(TAAL_BE_INVENTORY).flatMap(([unit, u]) => Object.keys(u.lessons).map((l) => [l, unit] as const)));

/** Has this Dutch unit no Belgian version in the course that plays now (so it is still Dutch there)? */
const stillDutch = (nlUnitId: string): boolean => !taalBeActive() || !BY_NL[nlUnitId];

/**
 * Does a Dutch lesson of the language track get the line "Dit gaat over Nederland. In België is
 * het anders." for this learner: in Belgium, a lesson whose items or tip differ there (B or C in
 * the inventory), while it plays in its Dutch version (the Belgian course is off, or its unit has
 * no Belgian file yet). Also while the switch is off: it only needs the country.
 */
export function lessonNlOnly(lessonId: string): boolean {
  if (learnerCountry() !== 'be' || isTaalBeId(lessonId)) return false;
  const inv = lessonInventory.get(lessonId);
  const unit = unitOfLessonId.get(lessonId);
  return Boolean(inv && unit && (inv.items !== 'A' || (inv.tip !== 'A' && inv.tip !== '-')) && stillDutch(unit));
}

/** Does a Dutch tip get that line (its lesson's tip is B or C, and it plays in its Dutch version)? */
export function tipNlOnly(tip: Pick<CultureTip, 'id' | 'lessonId'>): boolean {
  if (learnerCountry() !== 'be' || isTaalBeId(tip.id)) return false;
  const inv = lessonInventory.get(tip.lessonId);
  const unit = unitOfLessonId.get(tip.lessonId);
  return Boolean(inv && unit && inv.tip !== 'A' && inv.tip !== '-' && stillDutch(unit));
}

/** Does a Dutch unit get that line (a C unit: the whole topic is about the Netherlands)? */
export function unitNlOnly(unitId: string): boolean {
  if (learnerCountry() !== 'be' || isTaalBeId(unitId)) return false;
  return TAAL_BE_INVENTORY[unitId]?.kind === 'C' && stillDutch(unitId);
}

/**
 * The theme "Leven in Nederland" (theme.life) in Belgium: "Leven in België" once the Belgian course
 * plays; with the switch off its name stays, with the line that it is about the Netherlands.
 */
export const lifeThemeHere = (): 'nl' | 'be' | 'nl-marked' => (learnerCountry() !== 'be' ? 'nl' : taalBeActive() ? 'be' : 'nl-marked');

/* ---- Translations ---- */

/** The gloss ids of the Belgian closing lines (src/i18n/be/base.ts; src/lib/tipText.ts swaps them). */
export const BE_CLOSING_IDS = ['be.closing.advice', 'be.closing.abuse', 'be.closing.advice.nl', 'be.closing.advice.nl2', 'be.closing.abuse.nl'] as const;

/** Every id of the Belgian language track that needs a help-language translation (tests/i18n.test.ts). */
export function beTaalIds(): string[] {
  const lessonIds = (l: Lesson) => [
    l.id,
    ...l.words.map((w) => w.id),
    ...l.sentences.map((s) => s.id),
    ...(l.dialogues ?? []).flatMap((d) => [d.prompt.id, d.reply.id]),
  ];
  return [
    'be.theme.life',
    ...BE_CLOSING_IDS,
    ...beTaalFiles.flatMap((b) => [
      ...(b.unit ? [b.unit.id, ...b.unit.lessons.filter((l) => !isMixLesson(l)).flatMap(lessonIds)] : []),
      ...Object.keys(b.lines ?? {}).map(taalBeId),
    ]),
    ...beTaalTips.flatMap((t) => [t.id, `${t.id}.b`, t.phrase.id, t.situation.id, ...t.options.map((o) => o.id), t.why.id]),
  ];
}
