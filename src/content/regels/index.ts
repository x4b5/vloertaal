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
import { buildUnit, careUnit, cleanUnit, factoryUnit, horecaUnit, warehouseUnit } from './units/sector';

/**
 * The Werkregels track (docs/werkregels-curriculum.md), in path order: zoeken → beginnen →
 * afspraken → geld → tijd → ziekte → veiligheid → samenwerken → problemen → uitkering.
 *
 * The Entree additions (docs/entree-aanvulling.md, units 11–17) sit beside the unit they build on,
 * so the first ten keep their order among themselves: afronden after the first day, stage after
 * the contract, rekenen after loon (it uses bruto and netto) and the winkel after tijd; digitaal,
 * meedoen and duurzaam at the end. This order is the course and route order (toCourseUnits).
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
];

/** Short sector units (curriculum, deel 6): 2 lessons each, in the order of src/content/sectors.ts. */
export const sectorRulesUnits: RuleUnit[] = [warehouseUnit, buildUnit, factoryUnit, careUnit, horecaUnit, cleanUnit];
