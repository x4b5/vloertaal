import type { ReactNode } from 'react';
import type { Bilingual } from '../i18n';
import { dutchUi } from '../lib/track';
import { Bi } from './Bi';

/**
 * A Dutch label next to its help line ("Noodzinnen" over "Emergency phrases"). In the Dutch
 * course both show: the Dutch is part of learning the work floor. In the work-rules track the
 * screen is Dutch already, so only one line shows:
 *  - a label of the app (the default): the track's own Dutch text (src/i18n/nl.ts), in the help
 *    line's place and size;
 *  - `content` (a Dutch phrase with its translation under it): the Dutch phrase, without the
 *    translation (which has no Dutch version).
 */
export function NlPair({ nl, text, className, nlClass, nlFirst = false, dir, content = false }: {
  /** The Dutch label as the Dutch course shows it. */
  nl: ReactNode;
  text: Bilingual;
  /** The help line's class (Bi). */
  className?: string;
  /** The Dutch label's class. */
  nlClass?: string;
  /** The Dutch label comes before the help line (else after it). */
  nlFirst?: boolean;
  /** The Dutch label's direction (ltr inside a right-to-left screen). */
  dir?: 'ltr';
  /** The Dutch is the content itself (a phrase to say), the help line only its meaning. */
  content?: boolean;
}) {
  // In a right-to-left screen the Dutch keeps its own direction, so its full stop or question
  // mark stays at its end (".Maak verbinding" otherwise). Isolated inside the label, so a label
  // that is a block keeps the screen's alignment.
  const rtl = !dir && text.lang?.dir === 'rtl';
  const label = <span className={nlClass} lang="nl" dir={dir}>{rtl ? <bdi dir="ltr">{nl}</bdi> : nl}</span>;
  if (dutchUi(text.lang)) return content ? label : <Bi className={className} text={text} />;
  const help = <Bi className={className} text={text} />;
  return nlFirst ? <>{label}{help}</> : <>{help}{label}</>;
}
