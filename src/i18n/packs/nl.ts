import base from '../nl';
import { registerRulesCourse } from '../../content/courses';
import { rulesUnits, sectorRulesUnits } from '../../content/regels';
import { toCourseUnit, toCourseUnits } from '../../content/regels/course';
import { registerRegionRules } from '../../content/regio';
import { zlRegelsUnit } from '../../content/regio/zuid-limburg-regels';
import type { LanguagePack } from './types';

/**
 * The work-rules track in one file, loaded on demand like a help language (src/i18n/index.ts
 * ensureLanguage('nl')): the screens in plain Dutch and the rules course itself, so a learner of
 * the language course downloads none of it. The culture, work, About and learning texts are the
 * Dutch course's translations: this track has none (its own texts are Dutch already).
 */
// The basis units in path order, then the sector units (src/content/sectors.ts puts the
// learner's own one in its place on the path).
registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]));
// The regions' work-rules units (src/content/regio): only in the path of a learner of that region.
registerRegionRules('zl', toCourseUnit(zlRegelsUnit));

const empty = { ui: {}, gloss: {} };
const pack: LanguagePack = { base, culture: empty, work: empty, about: empty, learn: empty, regio: empty, url: import.meta.url };
export default pack;
