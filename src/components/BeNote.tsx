import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';

/**
 * The language track in Belgium (docs/taal-belgie.md), one calm line in the help language, never a
 * button (Max-3: it adds nothing to tap):
 *  - 'nl': "Dit gaat over Nederland. In België is het anders." at a unit, lesson, tip or theme
 *    that differs in Belgium and has no Belgian version yet (src/content/taalBe lessonNlOnly …);
 *  - 'beta': "De Belgische lessen zijn nieuw en nog niet nagekeken door een expert." at the Belgian tips
 *    and on the About page, while the Belgian course is a beta.
 * `inline`: a <span> (inside a button or a heading), else a <p>.
 */
export function BeNote({ lang, kind = 'nl', inline = false, className = '' }: { lang?: HelpLanguage; kind?: 'nl' | 'beta'; inline?: boolean; className?: string }) {
  const text = ui(kind === 'beta' ? 'beTaalBeta' : 'beNlOnly', lang);
  const css = `be-note be-note-${kind} ${className}`;
  return inline ? (
    <span className={css}><Bi text={text} /></span>
  ) : (
    <p className={css} role="note"><Bi text={text} /></p>
  );
}
