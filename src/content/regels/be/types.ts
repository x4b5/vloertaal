import type { KunRij } from '../../kunJeNu';
import type { RuleAdviceKind } from '../disclaimer';
import type { RuleUnit } from '../types';
import type { ZegHetWrong } from '../zegHet';

/**
 * One Belgian unit (docs/werkregels-belgie.md): everything a content agent writes for it, in one
 * file (src/content/regels/be/units/<the Dutch file's name>.ts). Nothing else needs a change:
 * src/content/regels/be/index.ts already imports every file.
 */
export interface BeUnit {
  /**
   * The unit, the same shape as the Dutch one (src/content/regels/types.ts), with Belgian ids:
   * "r.be.<naam>", lessons "r.be.l.<naam>.<n>", steps "<les>.<sc|ru|tf|wd|wa|mo|ps|ca><n>"
   * (src/content/regels/be/ids.ts). Same lessons and step ids as the Dutch twin where the
   * lesson exists in both; a lesson or step may be left out or added where Belgium differs.
   */
  unit: RuleUnit;
  /** "Wat zeg je?": two wrong sentences for every model step (as zegHetWrong in ../zegHet.ts). */
  zegHet: Record<string, ZegHetWrong>;
  /** The line under every written rule ('geschreven'), by its step id (as ruleAdvice in ../disclaimer.ts). */
  advice: Record<string, RuleAdviceKind>;
  /** "Wat kun je nu?" (src/content/kunJeNu.ts): 2 or 3 lines, level '1F'. Left out: the Dutch unit's lines. */
  kun?: KunRij[];
}
