import base from '../nl';
import { registerRulesCourse } from '../../content/courses';
import { rulesUnits, sectorRulesUnits } from '../../content/regels';
import { toCourseUnits } from '../../content/regels/course';
import { beCourseUnits } from '../../content/regels/be';
import type { LanguagePack } from './types';

/**
 * The work-rules track in one file, loaded on demand like a help language (src/i18n/index.ts
 * ensureLanguage('nl')): the screens in plain Dutch and the rules course itself, so a learner of
 * the language course downloads none of it. The culture, work, About and learning texts are the
 * Dutch course's translations: this track has none (its own texts are Dutch already).
 */
// The basis units in path order, then the sector units (src/content/sectors.ts puts the
// learner's own one in its place on the path).
// The Belgian course (docs/werkregels-belgie.md) beside it: played for progress.country 'be'
// once it is switched on (src/content/regels/be/live.ts).
registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]), beCourseUnits());
// The regions' work-rules units are not here: they come with the region's own file, only for a
// learner of that region (src/content/regio ensureRegion).

const empty = { ui: {}, gloss: {} };
const pack: LanguagePack = { base, culture: empty, work: empty, about: empty, learn: empty, sayings: empty, sounds: empty, kunJeNu: empty, be: empty, notices: empty, url: import.meta.url };
export default pack;
