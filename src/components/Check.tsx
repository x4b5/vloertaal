import { useEffect, useRef } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import type { Unit } from '../content/types';
import { unitIcon } from '../content/unitIcons';
import { checkPassed } from '../lib/instapCheck';
import { WordPicture } from '../pictures';
import { Bi } from './Bi';
import { CheckIcon, ChevronIcon } from './Icons';
import { NlPair } from './NlPair';
import { StatCard } from './Screens';

/**
 * The end of "Ik ken dit al: korte check" (src/lib/instapCheck.ts): how many of the 5 were right
 * the first time, and what the learner can do now. No judgement, no "fout" or "gezakt".
 *  - Passed (4 or 5): "Je kent dit al. Wil je dit onderwerp afvinken?", with the plain note that
 *    there is no certificate then, and [Afvinken] [Toch de lessen doen]. Ticking off is the
 *    learner's own choice: nothing is ticked off before Afvinken.
 *  - Not passed: "De lessen helpen je bij dit onderwerp." and [Verder] (back to the topic).
 * Two things to tap at most (max-3).
 */
export function CheckResult({ unit, right, total, lang, onMark, onLessons }: {
  unit: Unit;
  right: number;
  total: number;
  lang?: HelpLanguage;
  /** "Afvinken": the topic is ticked off (only offered when the check was passed). */
  onMark: () => void;
  /** "Toch de lessen doen" (passed) or "Verder" (not passed): back to the topic, nothing ticked off. */
  onLessons: () => void;
}) {
  const passed = checkPassed(right);
  const rtl = lang?.dir === 'rtl';
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => { title.current?.focus({ preventScroll: true }); }, []);
  return (
    <div className="player result-screen check-result">
      <div className="player-body result" dir={rtl ? 'rtl' : undefined}>
        <div className="check-result-sign" aria-hidden>
          <WordPicture className="check-result-pic" id={unitIcon(unit.id)} emoji={unit.emoji} size={72} />
        </div>
        <h1 className="result-title check-result-title" tabIndex={-1} ref={title}>
          {passed
            ? <NlPair nlFirst nl="Je kent dit al. Wil je dit onderwerp afvinken?" nlClass="check-result-nl" text={ui('checkPassed', lang)} />
            : <NlPair nlFirst nl="De lessen helpen je bij dit onderwerp." nlClass="check-result-nl" text={ui('checkNotYet', lang)} />}
        </h1>
        <div className="result-stats check-result-stats" dir={rtl ? 'rtl' : undefined}>
          <StatCard tone="green" label={ui('rightFirstTime', lang)} icon={<CheckIcon size={30} />} value={`${right} / ${total}`} final={`${right} / ${total}`} done />
        </div>
        {passed && (
          <p className="result-line check-result-note">
            <NlPair nlFirst nl="Je krijgt dan nog geen certificaat. Dat krijg je na de lessen." nlClass="result-pair-nl" text={ui('checkNoCert', lang)} />
          </p>
        )}
      </div>
      <footer className="player-foot check-result-foot">
        <div className="foot-inner">
          {passed ? (
            <div className="foot-actions check-result-actions" dir={rtl ? 'rtl' : undefined}>
              <button type="button" className="btn btn-ghost check-lessons" onClick={onLessons} dir={rtl ? 'rtl' : undefined}>
                <NlPair nlFirst nl="Toch de lessen doen" text={ui('checkUndo', lang)} />
              </button>
              <button type="button" className="btn btn-go btn-primary check-mark" onClick={onMark} dir={rtl ? 'rtl' : undefined}>
                <NlPair nlFirst nl="Afvinken" text={ui('checkMark', lang)} />
              </button>
            </div>
          ) : (
            <div className="foot-actions">
              <button type="button" className="btn btn-go btn-primary check-go" onClick={onLessons} dir={rtl ? 'rtl' : undefined}>
                <Bi className="btn-label" text={ui('continue', lang)} />
                <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
              </button>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
