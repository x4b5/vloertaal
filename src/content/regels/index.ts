import type { RuleUnit } from './types';
import { zoekenUnit } from './units/zoeken';
import { startUnit } from './units/start';
import { contractUnit } from './units/contract';
import { loonUnit } from './units/loon';
import { tijdUnit } from './units/tijd';
import { ziekUnit } from './units/ziek';
import { veiligUnit } from './units/veilig';
import { samenUnit } from './units/samen';
import { rechtenUnit } from './units/rechten';
import { geldUnit } from './units/geld';
import { winkelUnit } from './units/winkel';
import { rekenenUnit } from './units/rekenen';
import { afrondenUnit } from './units/afronden';
import { stageUnit } from './units/stage';
import { digitaalUnit } from './units/digitaal';
import { meedoenUnit } from './units/meedoen';
import { duurzaamUnit } from './units/duurzaam';
import { schrijvenUnit } from './units/schrijven';
import { loopbaanUnit } from './units/loopbaan';
import { buildUnit, careUnit, cleanUnit, factoryUnit, horecaUnit, kasUnit, techniekUnit, warehouseUnit, werkplaatsUnit } from './units/sector';

/**
 * The Werkregels track (docs/werkregels-curriculum.md), in path order: zoeken → beginnen →
 * afspraken → geld → tijd → ziekte → veiligheid → samenwerken → problemen → uitkering.
 *
 * The Entree additions (docs/entree-aanvulling.md, units 11–17) sit beside the unit they build on,
 * so the first ten keep their order among themselves: afronden after the first day, stage after
 * the contract, rekenen after loon (it uses bruto and netto) and the winkel after tijd; digitaal,
 * meedoen and duurzaam at the end. The second Entree round (docs/werkregels-curriculum.md, deel 7)
 * adds schrijven and loopbaan at the end ("Jouw weg" is the last step after Entree). This order is
 * the course and route order (toCourseUnits).
 */
export const rulesUnits: RuleUnit[] = [
  zoekenUnit,
  startUnit,
  afrondenUnit,
  contractUnit,
  stageUnit,
  loonUnit,
  rekenenUnit,
  tijdUnit,
  winkelUnit,
  ziekUnit,
  veiligUnit,
  samenUnit,
  rechtenUnit,
  geldUnit,
  digitaalUnit,
  meedoenUnit,
  duurzaamUnit,
  schrijvenUnit,
  loopbaanUnit,
];

/**
 * Short sector units (curriculum, deel 6): 2 lessons each, in the order of src/content/sectors.ts.
 * Techniek and the garage (curriculum, deel 7) come last: they have no sector card yet
 * (src/content/sectors.ts, SECTOR_UNITS_WITHOUT_CARD).
 */
export const sectorRulesUnits: RuleUnit[] = [warehouseUnit, buildUnit, factoryUnit, careUnit, horecaUnit, cleanUnit, kasUnit, techniekUnit, werkplaatsUnit];
