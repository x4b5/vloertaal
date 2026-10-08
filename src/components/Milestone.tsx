import { useCallback, useEffect, useState } from 'react';
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
  // "dagen" is already on the board: the first tier says "op rij" (in a row).
  3: { nl: '3 op rij', key: 'tier3' },
  7: { nl: '1 week', key: 'tier7' },
  14: { nl: '2 weken', key: 'tier14' },
  30: { nl: '1 maand', key: 'tier30' },
};

/** Monday to Sunday in Dutch: said in each day's spoken label. */
const NL_DAYS = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];
/** English initials, for English only and help languages Intl has no weekday names for. */
const EN_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
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

/**
 * The work week: seven tiles, Monday to Sunday (right to left in a right-to-left language).
 * Done days get a yellow check stamp, free days are grey. One row of labels: the weekday
 * initials in the help language (English without one); the Dutch day is in the spoken label.
 */
export function WeekRow({ days, lang }: {
  days: { key: string; state: WeekDayState; today: boolean }[];
  lang?: HelpLanguage;
}) {
  const own = weekdayLetters(lang);
  const letters = own ?? EN_DAYS;
  const anyRest = days.some((d) => d.state === 'rest');
  return (
    <section className="week" aria-label={`Werkweek · ${ui('workWeek').en}`}>
      <ol className="week-row" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
        {days.map((d, i) => (
          <li
            key={d.key}
            className={`week-day week-${d.state} ${d.today ? 'week-today' : ''}`}
            aria-label={`${NL_DAYS[i]}${d.state === 'done' ? ' ✓' : d.state === 'rest' ? ` · ${ui('restDay').en}` : ''}`}
          >
            <span className="week-tile" aria-hidden>
              {d.state === 'done' && <span className="week-stamp"><CheckIcon size={20} /></span>}
              {d.state === 'rest' && <CupIcon size={20} />}
            </span>
            <span className="week-letter" lang={own ? lang?.code : 'en'} aria-hidden>{letters[i]}</span>
          </li>
        ))}
      </ol>
      {anyRest && (
        <p className="week-legend">
          <span className="week-legend-tile" aria-hidden><CupIcon size={16} /></span>
          <Bi className="week-gloss" text={ui('restDay', lang)} />
        </p>
      )}
    </section>
  );
}

/** The reminder and home-screen cards are offered once, after the first day's milestone. */
const KEEP_OFFERED = 'vloertaal.keepOffered';
function keepOffered(): boolean {
  try { return localStorage.getItem(KEEP_OFFERED) === '1'; } catch { return false; }
}
function markKeepOffered() {
  try { localStorage.setItem(KEEP_OFFERED, '1'); } catch { /* private mode: offered again next time */ }
}

/** The bilingual Continue at the foot of these screens (it points left in right-to-left text). */
function ContinueButton({ lang, onClick }: { lang?: HelpLanguage; onClick: () => void }) {
  return (
    <footer className="player-foot milestone-foot">
      <div className="foot-inner">
        <div className="foot-actions">
          <button type="button" className="btn btn-go btn-primary" onClick={onClick} dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
            <Bi className="btn-label" text={ui('continue', lang)} />
            <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
          </button>
        </div>
      </div>
    </footer>
  );
}

/**
 * After the first day's milestone, once: "Remind me every day" and "Put Vloertaal on your home
 * screen" on a screen of their own (both also in Settings). Continue skips it.
 */
function KeepScreen({ lang, onDone }: { lang?: HelpLanguage; onDone: () => void }) {
  useEnter(onDone);
  useEffect(() => { markKeepOffered(); window.scrollTo(0, 0); }, []);
  return (
    <div className="player milestone-screen keep-screen">
      <main className="player-body milestone">
        <div className="keep-hero" aria-hidden><Character who="bram" mood="wave" size={120} /></div>
        <div className="milestone-keep">
          <ReminderCard lang={lang} />
          <InstallCard lang={lang} />
        </div>
      </main>
      <ContinueButton lang={lang} onClick={onDone} />
    </div>
  );
}

/**
 * Day-streak milestone ("Mijlpaal"), shown after the lesson-complete screen on the first
 * lesson of a day: the worker on a podium, the flame with the new streak (a tier stamp at 3, 7,
 * 14 and 30 days), one sentence in the help language, the work week and the record.
 * After the very first day, Continue leads once to the reminder and home-screen cards.
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
  /** Offer the reminder and home-screen cards after day 1 (once, on a screen of their own). */
  keep?: boolean;
}) {
  const [step, setStep] = useState<'streak' | 'keep'>('streak');
  const [offer] = useState(() => keep && streak === 1 && !keepOffered());
  const still = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  // The number ticks up from yesterday's count, like a counter flipping over.
  const [shown, setShown] = useState(still ? streak : streak - 1);
  useEffect(() => {
    if (still) return setShown(streak);
    const t = window.setTimeout(() => setShown(streak), 1000);
    return () => window.clearTimeout(t);
  }, [streak, still]);
  const next = useCallback(() => (offer ? setStep('keep') : onDone()), [offer, onDone]);
  useEnter(step === 'streak' ? next : noop);

  const line = ui(streak > 1 ? 'streakGrew' : 'streakStarted', lang);
  const label = ui('dayStreak', lang);
  const tier = (STREAK_TIERS as readonly number[]).includes(streak) ? TIERS[streak as keyof typeof TIERS] : null;
  // Without the real week (dev screenshots), the streak's days are counted back from today.
  const week = days ?? workWeek({ ...emptyProgress, streak, lastDay: dayKey(new Date()) }, new Date());
  const record = Math.max(best ?? 0, streak);

  if (step === 'keep') return <KeepScreen lang={lang} onDone={onDone} />;
  return (
    <div className="player milestone-screen">
      <main className="player-body milestone">
        <StreakHero lit={shown === streak} />
        <div className={`streak-count ${shown === streak ? 'streak-lit' : ''}`} role="img" aria-label={`${streak} ${label.en}${tier ? ` · ${ui(tier.key).en}` : ''}`}>
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
          {/* The tier stamp sits inside the board, over the unit: never over its edge. */}
          <span className="streak-unit-col">
            {tier && (
              <span className="tier-stamp" lang="nl" aria-hidden>
                <span className="tier-stamp-word">{tier.nl}</span>
              </span>
            )}
            <span className="streak-unit" lang="nl" aria-hidden>{streak === 1 ? 'dag' : 'dagen'}</span>
          </span>
        </div>
        <h1 className="streak-line">
          <Bi text={fillN(line, streak)} />
        </h1>
        <WeekRow days={week} lang={lang} />
        {(record > 1 || freezes > 0) && (
          <div className="streak-facts">
            {/* The record and free days: a small icon tag, the help language large. */}
            {record > 1 && (
              <p className="streak-fact">
                <span className="fact-tag" lang="nl" aria-hidden><TrophyGlyph /> {record}</span>
                <Bi className="fact-gloss" text={fillN(ui('recordN', lang), record)} />
              </p>
            )}
            {freezes > 0 && (
              <p className="streak-fact">
                <span className="fact-tag fact-free" aria-hidden>
                  {Array.from({ length: freezes }, (_, i) => <CupIcon key={i} size={18} />)}
                </span>
                <Bi className="fact-gloss" text={fillN(ui('freeDaysN', lang), freezes)} />
              </p>
            )}
          </div>
        )}
      </main>
      <ContinueButton lang={lang} onClick={next} />
    </div>
  );
}

const noop = () => {};

/** A small cup-shaped trophy for the record. */
function TrophyGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false">
      <path d="M7 4h10v5a5 5 0 0 1-10 0z M7 6H4.5a2.5 2.5 0 0 0 2.6 4.2 M17 6h2.5a2.5 2.5 0 0 1-2.6 4.2 M12 14v3.5 M8.5 20h7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
        {/* The help language large, English small (the Dutch sentence is only spoken). */}
        <h1 className="streak-line">
          <span className="sr-only" lang="nl">Je reeks is gestopt bij {streak}. Begin vandaag opnieuw. </span>
          <Bi text={fillN(ui('streakStopped', lang), streak)} />
        </h1>
        <div className="streak-facts">
          <p className="streak-fact">
            <span className="fact-tag" lang="nl" aria-hidden><TrophyGlyph /> {best}</span>
            <Bi className="fact-gloss" text={fillN(ui('recordN', lang), best)} />
          </p>
        </div>
      </main>
      <ContinueButton lang={lang} onClick={onDone} />
    </div>
  );
}
