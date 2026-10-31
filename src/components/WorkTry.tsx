import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
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
  return (
    <div className="result-remember result-worktry" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <span className="result-remember-label">
        <NlPair nlFirst nl="Probeer het vandaag op je werk" nlClass="worktry-label-nl" text={ui('workTry', lang)} />
      </span>
      <p className="result-remember-text" lang="nl" dir="ltr">{breakable(line.nl)}</p>
      <Bi className="worktry-gloss" text={gloss(line.id, line.en, lang)} />
      <SpeakButton text={line.nl} glyph help={lang} voice={learnerVoice(lang?.gender)} />
    </div>
  );
}
