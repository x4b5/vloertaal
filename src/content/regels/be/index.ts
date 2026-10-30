import type { Unit } from '../../types';
import { addKunBe } from '../../kunJeNu';
import { toCourseUnits } from '../course';
import { addRuleAdviceBe, RULES_NL_LESSON_NOTE } from '../disclaimer';
import { rulesUnits, sectorRulesUnits } from '../index';
import type { RuleUnit } from '../types';
import { addZegHetBe } from '../zegHet';
import { beId } from './ids';
import type { BeUnit } from './types';
import { be as zoeken } from './units/zoeken';
import { be as start } from './units/start';
import { be as afronden } from './units/afronden';
import { be as contract } from './units/contract';
import { be as stage } from './units/stage';
import { be as loon } from './units/loon';
import { be as rekenen } from './units/rekenen';
import { be as tijd } from './units/tijd';
import { be as winkel } from './units/winkel';
import { be as ziek } from './units/ziek';
import { be as veilig } from './units/veilig';
import { be as samen } from './units/samen';
import { be as rechten } from './units/rechten';
import { be as geld } from './units/geld';
import { be as digitaal } from './units/digitaal';
import { be as meedoen } from './units/meedoen';
import { be as duurzaam } from './units/duurzaam';
import { be as schrijven } from './units/schrijven';
import { be as loopbaan } from './units/loopbaan';
import { be as warehouse } from './units/sector-warehouse';
import { be as build } from './units/sector-build';
import { be as factory } from './units/sector-factory';
import { be as care } from './units/sector-care';
import { be as horeca } from './units/sector-horeca';
import { be as clean } from './units/sector-clean';
import { be as kas } from './units/sector-kas';
import { be as techniek } from './units/sector-techniek';
import { be as werkplaats } from './units/sector-werkplaats';

/**
 * The Belgian work rules (Vlaanderen), docs/werkregels-belgie.md. Every Dutch unit has a file in
 * ./units with the same name (a sector unit: "sector-<naam>.ts"), already imported here. A file
 * whose `be` is undefined is not written yet: the Belgian course then plays the Dutch unit, with
 * "Deze les gaat nog over Nederland." at the top of each lesson. So a content agent only writes
 * its own unit files, and removes its units from BE_TODO below.
 */

/** Each Belgian unit by the id of its Dutch twin. */
const BY_NL: Record<string, BeUnit | undefined> = {
  'r.zoeken': zoeken, 'r.start': start, 'r.afronden': afronden, 'r.contract': contract, 'r.stage': stage,
  'r.loon': loon, 'r.rekenen': rekenen, 'r.tijd': tijd, 'r.winkel': winkel, 'r.ziek': ziek, 'r.veilig': veilig,
  'r.samen': samen, 'r.rechten': rechten, 'r.geld': geld, 'r.digitaal': digitaal, 'r.meedoen': meedoen,
  'r.duurzaam': duurzaam, 'r.schrijven': schrijven, 'r.loopbaan': loopbaan,
  'r.warehouse': warehouse, 'r.build': build, 'r.factory': factory, 'r.care': care, 'r.horeca': horeca,
  'r.clean': clean, 'r.kas': kas, 'r.techniek': techniek, 'r.werkplaats': werkplaats,
};

/**
 * The Dutch units that have no Belgian version yet. It gets shorter: remove a unit here in the same
 * commit that fills its file (tests/rulesBe.test.ts checks that this list is exactly right).
 * One block per content agent (docs/werkregels-belgie.md, "Verdeling"): a blank line between the
 * blocks, so that two agents never change the same lines.
 */
export const BE_TODO: readonly string[] = [
  // Agent A: werk vinden, beginnen, contract
  'r.zoeken', 'r.start', 'r.afronden', 'r.contract', 'r.stage', 'r.loopbaan',

  // Agent B: tijd, rekenen, geld
  'r.geld',

  // Agent C: ziek, veilig, rechten, samen, sectoren magazijn, fabriek en zorg
  'r.ziek', 'r.veilig', 'r.rechten', 'r.samen', 'r.warehouse', 'r.factory', 'r.care',

  // Agent D: digitaal, meedoen, duurzaam, schrijven, de andere sectoren
  'r.digitaal', 'r.meedoen', 'r.duurzaam', 'r.schrijven', 'r.build', 'r.horeca', 'r.clean', 'r.kas', 'r.techniek', 'r.werkplaats',
];

/** Every Belgian unit written so far. */
export const beUnits: BeUnit[] = Object.values(BY_NL).filter((b): b is BeUnit => b !== undefined);

// The Belgian tables live in the unit files; the shared lookups get them here, once.
for (const b of beUnits) {
  addZegHetBe(b.zegHet);
  addRuleAdviceBe(b.advice);
  if (b.kun) addKunBe(b.unit.id, b.unit.title, b.kun);
}

/** The Belgian version of a Dutch unit, or undefined (still Dutch in Belgium). */
export const beUnitOf = (nlUnitId: string): BeUnit | undefined => BY_NL[nlUnitId];

/** In the Belgian course: the Belgian unit, or the Dutch one where there is none yet. */
const forBe = (u: RuleUnit): RuleUnit => BY_NL[u.id]?.unit ?? u;

/** The path units of the Belgian course, in the Dutch path order (src/content/regels/index.ts). */
export const beRulesUnits: RuleUnit[] = rulesUnits.map(forBe);
/** The sector units of the Belgian course, in the Dutch order. */
export const beSectorRulesUnits: RuleUnit[] = sectorRulesUnits.map(forBe);

/** The path and sector units for a country ('nl' or none: the Dutch ones). */
export function rulesUnitsFor(country?: 'nl' | 'be'): RuleUnit[] {
  return country === 'be' ? [...beRulesUnits, ...beSectorRulesUnits] : [...rulesUnits, ...sectorRulesUnits];
}

/**
 * The Belgian course as the app plays it (registerRulesCourse's second course): a Dutch unit in it
 * (no Belgian one yet) keeps its Dutch ids, and each of its lessons gets the line
 * RULES_NL_LESSON_NOTE at the top (lesson.rule.note).
 */
export function beCourseUnits(): Unit[] {
  return toCourseUnits(rulesUnitsFor('be')).map((u) =>
    u.id.startsWith('r.be.') ? u : { ...u, lessons: u.lessons.map((l) => ({ ...l, rule: l.rule && { ...l.rule, note: RULES_NL_LESSON_NOTE } })) },
  );
}

/** Is the Belgian course complete (no Dutch unit left in it)? */
export const beComplete = (): boolean => BE_TODO.length === 0;

/** The id a Dutch unit has in the Belgian course: its Belgian id once written, else its own. */
export const beCourseId = (nlUnitId: string): string => (BY_NL[nlUnitId] ? beId(nlUnitId) : nlUnitId);
