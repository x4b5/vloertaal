import { ruleIconId } from './regels/ruleIcons';
import { emojiArt } from './emojiArt';

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
  '🚚': 'w.bestelbus',
  // The sector lessons of 14 November 2026: each tip shows a word of its own lesson.
  '📏': 'w.rolmaat',
  '🛏': 'w.bed',
  '♨': 'w.heet',
  '🟥': 'w.rood',
  '⛈': 'w.onweer',
  '📐': 'w.tekening',
  '🔥': 'w.lassen',
  '💺': 'w.stoel',
  '🟧': 'w.oranje',
  '🤒': 'w.koorts',
  // The logistics lessons of 14 November 2026: the truck you never walk behind (c.loading), and
  // the damage you take a photo of before you drive (c.vancheck).
  '🚛': 'w.vrachtwagen',
  '📸': 'w.schade',
  // "Hulp vragen" at four lessons (14 November 2026): a colleague looks at your work (c.howto:
  // the eyes of "kijken"), the moment your colleague has time (c.mayask: the watch of "de tijd";
  // not ⏱, which the work rules draw as the pay per hour) and the way out (c.whereis).
  '👀': 'w.kijken',
  '🕐': 'w.tijd',
  '🚪': 'w.uitgang',
  // "Instructies" (u.do, 14 November 2026): something goes from hand to hand (c.putdown: "geven";
  // c.onoff's 🛑 is the stop sign of the work rules), "Ik ben klaar" (c.fillempty: the tick of
  // "klaar"; the lesson's own words are push, pull, fill) and which job comes first (c.order: the
  // list of "eerst"; the words of l.order have no picture).
  '🤲': 'w.geven',
  '✔': 'w.klaar',
  '📑': 'w.eerst',
  // "Coming back step by step" (c.backtowork, 5 November 2026): the supervisor's welcome back.
  '🤗': 'w.welkomterug',
  // "Stay calm, also when it is hard" (c.calm, 5 November 2026): a slow breath out (group39).
  '😮‍💨': 'w.ademhalen',
};

const bare = (emoji: string): string => emoji.replace(/️/g, '');

/** The drawing's id for an emoji of either track, or '' (then the emoji itself is shown). */
export function emojiIconId(emoji: string): string {
  return ruleIconId(emoji) || tipIcons[bare(emoji)] || emojiArt[bare(emoji)] || '';
}
