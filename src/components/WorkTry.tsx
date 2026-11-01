import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { dropAsk } from '../lib/dropAsk';
import { breakable } from '../lib/dutch';
import { learnerVoice } from '../lib/voices';
import type { WorkTryLine } from '../lib/workTry';
import { Bi } from './Bi';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';

/**
 * "Probeer het vandaag op je werk": on the result of a lesson (lib/workTry.ts says when), one
 * sentence of the lesson to say at work today, with what it means and one speaker in the
 * learner's own voice (they will say it). A paper label like "Onthoud" after a rules lesson.
 * Not a button: nothing to tap but the speaker (the max-3 rule leaves speakers out).
 */
export function WorkTry({ line, lang }: { line: WorkTryLine; lang?: HelpLanguage }) {
  // The moment ("Als: …"), so the sentence becomes an if-then plan: a tip's situation in the help
  // language without its closing question ("What do you do?"), or the Werkregels context in Dutch.
  const when = line.when ? gloss(line.when.id, line.when.en, lang) : undefined;
  const moment = line.whenNl
    ? <span className="worktry-when-text" lang="nl">{line.whenNl}</span>
    : when && <Bi className="worktry-when-text" text={{ ...when, en: dropAsk(when.en), ...(when.help ? { help: dropAsk(when.help) } : {}) }} />;
  return (
    <div className="result-remember result-worktry" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <span className="result-remember-label">
        <NlPair nlFirst nl="Probeer het vandaag op je werk" nlClass="worktry-label-nl" text={ui('workTry', lang)} />
      </span>
      {moment && (
        <p className="worktry-when">
          <Kicker text={ui('workTryWhen', lang)} />
          {moment}
        </p>
      )}
      {moment && <Kicker text={ui('workTryThen', lang)} />}
      <p className="result-remember-text" lang="nl" dir="ltr">{breakable(line.nl)}</p>
      {line.en && <Bi className="worktry-gloss" text={gloss(line.id, line.en, lang)} />}
      <SpeakButton text={line.nl} glyph help={lang} voice={learnerVoice(lang?.gender)} />
    </div>
  );
}

/** "Als:" / "Zeg dan:": one small word in the help language (Dutch in Werkregels), no English under it. */
function Kicker({ text }: { text: { en: string; help?: string; lang?: HelpLanguage } }) {
  const help = text.help && text.lang;
  return <span className="worktry-kicker" lang={help ? text.lang!.code : 'en'} dir={help && text.lang!.dir === 'rtl' ? 'rtl' : undefined}>{help ? text.help : text.en}</span>;
}
