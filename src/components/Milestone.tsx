import { useEffect, useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { Burst, StreakHero } from './Celebrate';
import { StreakFlame } from './StreakArt';

/**
 * Day-streak milestone ("Mijlpaal"), shown after the lesson-complete screen on the first
 * lesson of a day: the worker on a podium, the flame with the new streak, one line of praise.
 */
export function Milestone({ streak, lang, onDone }: {
  streak: number;
  lang?: HelpLanguage;
  onDone: () => void;
}) {
  const still = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  // The number ticks up from yesterday's count, like a counter flipping over.
  const [shown, setShown] = useState(still ? streak : streak - 1);
  useEffect(() => {
    if (still) return setShown(streak);
    const t = window.setTimeout(() => setShown(streak), 1000);
    return () => window.clearTimeout(t);
  }, [streak, still]);

  // Enter continues, as on every other screen in the lesson flow.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !(e.target instanceof HTMLButtonElement)) onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  const line = ui(streak > 1 ? 'streakGrew' : 'streakStarted', lang);
  const fill = (t: string) => t.replace('{n}', String(streak));
  const label = ui('dayStreak', lang);

  return (
    <div className="player milestone-screen">
      <main className="player-body milestone">
        <StreakHero lit={shown === streak} />
        <div className={`streak-count ${shown === streak ? 'streak-lit' : ''}`} role="img" aria-label={`${streak} ${label.en}`}>
          <span className="streak-flame-wrap">
            {/* Sparks fly off the flame when the new day is counted. */}
            <svg className="streak-sparks" viewBox="0 0 120 120" aria-hidden focusable="false">
              <Burst x={60} y={60} r={58} color="#ffc800" />
            </svg>
            <StreakFlame />
          </span>
          <span key={shown} className={`streak-num ${shown === streak ? 'streak-num-new' : ''}`} aria-hidden>
            {shown}
          </span>
        </div>
        <h1 className="streak-line">
          <Bi text={{ ...line, en: fill(line.en), help: line.help && fill(line.help) }} />
        </h1>
      </main>
      <footer className="player-foot milestone-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            <button type="button" className="btn btn-blue" onClick={onDone}>
              {ui('continue', lang).en}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
