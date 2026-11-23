import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { allWords } from '../content/curriculum';
import { TOOLS, toolsFor } from '../lib/play';
import { WordPicture } from '../pictures';
import { Bi } from './Bi';
import { ToolName } from './Screens';

/**
 * "Mijn gereedschapskist" (Settings › Taal en ik; src/lib/play.ts TOOLS): every lesson finished in
 * the game mode put a tool in the box. The tools earned, with their picture, the Dutch word and its
 * gloss; the ones still to come as empty places. Nothing to tap: a list to look at.
 */
export function Toolbox({ lessons, lang }: { lessons: number; lang?: HelpLanguage }) {
  const have = toolsFor(lessons);
  return (
    <div className="toolbox" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <p className="toolbox-count"><span dir="ltr">{have.length} / {TOOLS.length}</span></p>
      {!have.length && <p className="max3-hint"><Bi text={ui('playToolboxEmpty', lang)} /></p>}
      <ul className="toolbox-grid">
        {TOOLS.map((id, i) => (i < have.length ? (
          <li key={id} className="toolbox-tool">
            <WordPicture id={id} emoji={allWords.find((w) => w.id === id)?.emoji ?? '🧰'} size={56} />
            <ToolName id={id} lang={lang} />
          </li>
        ) : (
          <li key={id} className="toolbox-tool toolbox-empty" aria-hidden><span className="toolbox-slot">?</span></li>
        )))}
      </ul>
    </div>
  );
}
