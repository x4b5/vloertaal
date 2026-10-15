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
import { buildUnit, careUnit, cleanUnit, factoryUnit, horecaUnit, warehouseUnit } from './units/sector';

/**
 * The Werkregels track (docs/werkregels-curriculum.md), in path order: zoeken → beginnen →
 * afspraken → geld → tijd → ziekte → veiligheid → samenwerken → problemen → uitkering.
 */
export const rulesUnits: RuleUnit[] = [
  zoekenUnit,
  startUnit,
  contractUnit,
  loonUnit,
  tijdUnit,
  ziekUnit,
  veiligUnit,
  samenUnit,
  rechtenUnit,
  geldUnit,
];

/** Short sector units (curriculum, deel 6): 2 lessons each, in the order of src/content/sectors.ts. */
export const sectorRulesUnits: RuleUnit[] = [warehouseUnit, buildUnit, factoryUnit, careUnit, horecaUnit, cleanUnit];
