import { said, saidLang, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { DAY_GOAL, dayPoints, levelOf, levelShare } from '../lib/play';
import type { Progress } from '../lib/progress';

/**
 * "Spelmodus" on the home (src/lib/play.ts): the level with its bar to the next one, and today's
 * goal (DAY_GOAL points) filling. Nothing to tap, so it never takes one of the three.
 */
export function PlayStrip({ progress, today, lang }: { progress: Progress; today: string; lang?: HelpLanguage }) {
  const day = Math.min(DAY_GOAL, dayPoints(progress, today));
  const done = day >= DAY_GOAL;
  return (
    <section className="play-strip" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <LevelBar points={progress.playPoints ?? 0} lang={lang} />
      <span className={`level-bar-wrap day-goal ${done ? 'day-goal-done' : ''}`}>
        <span className="level-name" lang={saidLang(ui('playDayGoal', lang))}><span aria-hidden>{done ? '☀ ' : ''}</span>{said(ui(done ? 'playDayGoalDone' : 'playDayGoal', lang))} <span dir="ltr">{day} / {DAY_GOAL}</span></span>
        <span className="level-bar" role="img" aria-label={`${day} / ${DAY_GOAL}`}><span className="level-bar-fill" style={{ transform: `scaleX(${day / DAY_GOAL})` }} /></span>
      </span>
    </section>
  );
}

/** A level's name and the bar to the next one (the home strip and the result). */
export function LevelBar({ points, lang }: { points: number; lang?: HelpLanguage }) {
  const l = levelOf(points);
  const share = levelShare(points);
  return (
    <span className="level-bar-wrap">
      {/* One line, in the help language (or English): "Seviye 2: Öğrenci". */}
      <span className="level-name" lang={saidLang(ui('playLevel', lang))}>{said(ui('playLevel', lang))} {l.n}: {said(ui(l.name.key, lang))}{l.stars > 1 ? ` ${l.stars}` : ''}</span>
      <span className="level-bar" role="img" aria-label={`${Math.round(share * 100)}%`}><span className="level-bar-fill" style={{ transform: `scaleX(${share})` }} /></span>
    </span>
  );
}

