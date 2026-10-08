import { useEffect, useState } from 'react';
import { fillN, ui } from '../i18n';
import type { HelpLanguage, UiKey } from '../i18n/types';
import { STREAK_TIERS, dayKey, emptyProgress, workWeek, type WeekDayState } from '../lib/progress';
import { Bi } from './Bi';
import { Burst, StreakHero } from './Celebrate';
import { Character } from './Characters';
import { FlameIcon, StreakFlame } from './StreakArt';
import { CheckIcon, ChevronIcon, CupIcon } from './Icons';
import { InstallCard, ReminderCard } from './Keep';

/** Enter continues, as on every other screen in the lesson flow. */
function useEnter(onDone: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !(e.target instanceof HTMLButtonElement) && !(e.target instanceof HTMLInputElement)) onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);
}

/** The streak tiers, each with its Dutch stamp and the help-language gloss. */
const TIERS: Record<(typeof STREAK_TIERS)[number], { nl: string; key: UiKey }> = {
  3: { nl: '3 dagen', key: 'tier3' },
  7: { nl: '1 week', key: 'tier7' },
  14: { nl: '2 weken', key: 'tier14' },
  30: { nl: '1 maand', key: 'tier30' },
};

/** Monday to Sunday in Dutch: the fallback, and the small line under every tile. */
const NL_DAYS = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];
/** Locales Intl knows the weekday names of (Dari is written with the Afghan Persian names). */
const INTL_LOCALE: Partial<Record<string, string>> = { prs: 'fa-AF' };

/** Short weekday letters (Monday first) in the help language, or null when Intl can't give them. */
export function weekdayLetters(lang?: HelpLanguage): string[] | null {
  if (!lang || typeof Intl === 'undefined') return null;
  const locale = INTL_LOCALE[lang.code] ?? lang.code;
  try {
    if (!Intl.DateTimeFormat.supportedLocalesOf([locale]).length) return null;
    const f = new Intl.DateTimeFormat(locale, { weekday: 'narrow' });
    // 5 January 2026 is a Monday.
    return Array.from({ length: 7 }, (_, i) => f.format(new Date(2026, 0, 5 + i)));
  } catch {
    return null;
  }
}

/** "Werkweek": seven tiles, Monday to Sunday. Done days get a yellow check stamp, free days are grey. */
export function WeekRow({ days, lang }: {
  days: { key: string; state: WeekDayState; today: boolean }[];
  lang?: HelpLanguage;
}) {
  const letters = weekdayLetters(lang);
  const anyRest = days.some((d) => d.state === 'rest');
  return (
    <section className="week" aria-label={ui('workWeek').en}>
      <div className="week-head">
        <span className="week-nl" lang="nl">Werkweek</span>
        <Bi className="week-gloss" text={ui('workWeek', lang)} />
      </div>
      <ol className="week-row">
        {days.map((d, i) => (
          <li
            key={d.key}
            className={`week-day week-${d.state} ${d.today ? 'week-today' : ''}`}
            aria-label={`${NL_DAYS[i]}${d.state === 'done' ? ' ✓' : d.state === 'rest' ? ` · ${ui('restDay').en}` : ''}`}
          >
            {letters && <span className="week-letter" lang={lang?.code} aria-hidden>{letters[i]}</span>}
            <span className="week-tile" aria-hidden>
              {d.state === 'done' && <span className="week-stamp"><CheckIcon size={20} /></span>}
              {d.state === 'rest' && <CupIcon size={20} />}
            </span>
            <span className="week-nl-day" lang="nl" aria-hidden>{NL_DAYS[i]}</span>
          </li>
        ))}
      </ol>
      {anyRest && (
        <p className="week-legend">
          <span className="week-legend-tile" aria-hidden><CupIcon size={16} /></span>
          <span lang="nl">Vrije dag</span>
          <Bi className="week-gloss" text={ui('restDay', lang)} />
        </p>
      )}
    </section>
  );
}

/**
 * Day-streak milestone ("Mijlpaal"), shown after the lesson-complete screen on the first
 * lesson of a day: the worker on a podium, the flame with the new streak, one line of praise,
 * the work week, a tier stamp at 3, 7, 14 and 30 days, and the record.
 * Day 1 also offers a daily reminder and the home screen; day 3 the home screen again.
 */
export function Milestone({ streak, lang, onDone, days, best, freezes = 0, keep = true }: {
  streak: number;
  lang?: HelpLanguage;
  onDone: () => void;
  /** The work week (from workWeek); when absent, the streak's days back from today. */
  days?: { key: string; state: WeekDayState; today: boolean }[];
  /** The record (best streak); shown once it is above 1. */
  best?: number;
  /** Free days in hand. */
  freezes?: number;
  /** Offer the reminder and home-screen cards on day 1 and 3. */
  keep?: boolean;
}) {
  const still = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  // The number ticks up from yesterday's count, like a counter flipping over.
  const [shown, setShown] = useState(still ? streak : streak - 1);
  useEffect(() => {
    if (still) return setShown(streak);
    const t = window.setTimeout(() => setShown(streak), 1000);
    return () => window.clearTimeout(t);
  }, [streak, still]);
  useEnter(onDone);

  const line = ui(streak > 1 ? 'streakGrew' : 'streakStarted', lang);
  const label = ui('dayStreak', lang);
  const tier = (STREAK_TIERS as readonly number[]).includes(streak) ? TIERS[streak as keyof typeof TIERS] : null;
  // Without the real week (dev screenshots), the streak's days are counted back from today.
  const week = days ?? workWeek({ ...emptyProgress, streak, lastDay: dayKey(new Date()) }, new Date());
  const record = Math.max(best ?? 0, streak);

  return (
    <div className="player milestone-screen">
      <main className="player-body milestone">
        <StreakHero lit={shown === streak} />
        <div className={`streak-count ${shown === streak ? 'streak-lit' : ''}`} role="img" aria-label={`${streak} ${label.en}`}>
          <span className="streak-flame-wrap">
            {/* Sparks fly off the flame when the new day is counted. */}
            <svg className="streak-sparks" viewBox="0 0 120 120" aria-hidden focusable="false">
              <Burst x={60} y={60} r={58} color="#ffc414" />
            </svg>
            <StreakFlame />
          </span>
          <span key={shown} className={`streak-num ${shown === streak ? 'streak-num-new' : ''}`} aria-hidden>
            {shown}
          </span>
          <span className="streak-unit" lang="nl" aria-hidden>{streak === 1 ? 'dag' : 'dagen'}</span>
          {tier && (
            <span className="tier-stamp" lang="nl" aria-hidden>
              <span className="tier-stamp-word">{tier.nl}</span>
            </span>
          )}
        </div>
        {tier && (
          <p className="tier-gloss">
            <span className="sr-only" lang="nl">{tier.nl}: </span>
            <Bi text={ui(tier.key, lang)} />
          </p>
        )}
        <h1 className="streak-line">
          <Bi text={fillN(line, streak)} />
        </h1>
        <WeekRow days={week} lang={lang} />
        {(record > 1 || freezes > 0) && (
          <div className="streak-facts">
            {record > 1 && (
              <p className="streak-fact">
                <span className="fact-tag" lang="nl">Record: {record}</span>
                <Bi className="fact-gloss" text={fillN(ui('recordN', lang), record)} />
              </p>
            )}
            {freezes > 0 && (
              <p className="streak-fact">
                <span className="fact-tag fact-free" lang="nl">
                  {Array.from({ length: freezes }, (_, i) => <CupIcon key={i} size={18} />)}
                  Vrije dag{freezes > 1 ? 'en' : ''}: {freezes}
                </span>
                <Bi className="fact-gloss" text={fillN(ui('freeDaysN', lang), freezes)} />
              </p>
            )}
          </div>
        )}
        {keep && (streak === 1 || streak === 3) && (
          <div className="milestone-keep">
            {streak === 1 && <ReminderCard lang={lang} />}
            <InstallCard lang={lang} />
          </div>
        )}
      </main>
      <footer className="player-foot milestone-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            <button type="button" className="btn btn-go btn-primary" onClick={onDone}>
              {ui('continue', lang).en}
              <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * The streak stopped (more than a day missed, no free day left). Shown once, calmly, on the next
 * open: Bram, the grey flame, "Je reeks is gestopt bij N. Begin vandaag opnieuw." and the record.
 * No confetti and no red: starting again is normal.
 */
export function StreakStopped({ streak, best, lang, onDone }: {
  streak: number;
  best: number;
  lang?: HelpLanguage;
  onDone: () => void;
}) {
  useEnter(onDone);
  return (
    <div className="player milestone-screen streak-stopped">
      <main className="player-body milestone">
        <div className="stopped-hero" aria-hidden>
          <Character who="bram" mood="pleased" size={170} />
          <span className="stopped-flame"><FlameIcon lit={false} size={64} /></span>
        </div>
        <div className="streak-count stopped-count" role="img" aria-label={`${streak} ${ui('dayStreak').en}`}>
          <span className="streak-num" aria-hidden>{streak}</span>
          <span className="streak-unit" lang="nl" aria-hidden>{streak === 1 ? 'dag' : 'dagen'}</span>
        </div>
        <h1 className="streak-line">
          <span className="stopped-nl" lang="nl">Je reeks is gestopt bij {streak}. Begin vandaag opnieuw.</span>
          <Bi text={fillN(ui('streakStopped', lang), streak)} />
        </h1>
        <div className="streak-facts">
          <p className="streak-fact">
            <span className="fact-tag" lang="nl">Record: {best}</span>
            <Bi className="fact-gloss" text={fillN(ui('recordN', lang), best)} />
          </p>
        </div>
      </main>
      <footer className="player-foot milestone-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            <button type="button" className="btn btn-go btn-primary" onClick={onDone}>
              {ui('continue', lang).en}
              <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
