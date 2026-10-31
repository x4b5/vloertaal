import { ruleIconId } from './regels/ruleIcons';

/**
 * The drawings for the emoji of the language course's Hulp tab: the "Zo werkt het hier" tips
 * (src/content/culture) and "Wie bel je?". The work-rules table (src/content/regels/ruleIcons.ts)
 * first, then these: tip emoji that are not in the work rules. Same rule as there: only a drawing
 * that shows the same thing; a doubtful one is left out and the emoji stays.
 * Keys are without the invisible variation selector (U+FE0F).
 */
export const tipIcons: Readonly<Record<string, string>> = {
  '👋': 'w.hallo',
  '⚠': 'w.gevaar',
  '📅': 'w.datum',
  '⏰': 'w.optijd',
  '✅': 'w.klaar',
  '🔑': 'w.sleutel',
  '⏲': 'w.werktijd',
  '⏸': 'w.pauze',
  '🦺': 'w.hesje',
  '🧰': 'w.gereedschap',
  '🔌': 'w.stroom',
  '🍽': 'w.eten',
  '☎': 'w.bellen',
  '☣': 'w.gevaarlijk',
  '🎒': 'w.stage',
  '🧑‍⚕': 'w.dokter',
  '👩‍⚕': 'w.verpleegkundige',
  '🤕': 'w.gewond',
  '🛢': 'w.olie',
  '🏅': 'w.certificaat',
  '📜': 'w.diploma',
  '🌟': 'w.compliment',
  '🦹': 'w.oplichter',
};

const bare = (emoji: string): string => emoji.replace(/️/g, '');

/** The drawing's id for an emoji of either track, or '' (then the emoji itself is shown). */
export function emojiIconId(emoji: string): string {
  return ruleIconId(emoji) || tipIcons[bare(emoji)] || '';
}
