import { useEffect, useRef, useState } from 'react';
import { learnedItems } from '../content/courses';
import { dutchUi, trackOf, trackOfLang } from '../lib/track';
import { fillCount, ui, said } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { installWay, onInstallChange, promptInstall, type InstallWay } from '../lib/install';
import { BACKUP_MAX_BYTES, backupFile, bestStreak, knownLessons, mergeAddsNothing, mergeBackup, parseBackup, replaceLoses, replaceWithBackup, type Progress } from '../lib/progress';
import { OPEN_TO_ALL } from '../lib/access';
import { REMINDER_TIMES, forgetReminder, googleCalendarUrl, isAndroid, rememberReminder, reminderCancelIcs, reminderEvent, reminderIcs, saveFile } from '../lib/reminder';
import { REMIND_DEFAULT, REMIND_OTHER_TIMES, REMIND_OWN, keepNext, ownTime, type KeepAction, type KeepStep } from '../lib/keep';
import { Bi } from './Bi';
import { NlPair } from './NlPair';
import { Character } from './Characters';
import { AlertIcon, CheckIcon, ChevronIcon, CloseIcon } from './Icons';
import { ChromeHead } from './ChromeBack';
import { LogoMark } from './Logo';
import { useFocusWhenLost } from './useFocusLost';

/** The reminder's line in the help language (none in the work-rules track: its screens are Dutch). */
export function reminderHelp(lang?: HelpLanguage): string | undefined {
  return trackOfLang(lang?.code) === 'taal' ? ui('remindEvent', lang).help : undefined;
}

/**
 * Keeping the habit and the progress, without accounts or servers:
 * - InstallCard: "Zet Vloertaal op je beginscherm" (Android install prompt, or the iPhone steps);
 * - ReminderCard: "Herinner mij elke dag", a daily calendar event (.ics) the phone reminds of;
 * - BackupCard: "Bewaar je voortgang", progress as a .json file to download and put back.
 */

/** A card's head: the Dutch name as a small label, the help language large and English small. */
function CardHead({ nl, text }: { nl: string; text: ReturnType<typeof ui> }) {
  return (
    <div className="keep-head">
      <NlPair nlFirst nl={nl} nlClass="keep-nl" className="keep-gloss" text={text} />
    </div>
  );
}

/* ---- Install ---- */

/** The iPhone share icon: a box with an arrow up. */
function ShareGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden focusable="false">
      <path d="M8 9.5H6.5A1.5 1.5 0 0 0 5 11v8.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V11a1.5 1.5 0 0 0-1.5-1.5H16" fill="none" stroke="#1592db" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 14.5V2.8M8.3 6.3 12 2.6l3.7 3.7" fill="none" stroke="#1592db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** "Zet op beginscherm": a rounded square with a plus. */
function AddGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function useInstallWay(): InstallWay {
  const [way, setWay] = useState<InstallWay>(installWay);
  useEffect(() => {
    return onInstallChange(() => setWay(installWay()));
  }, []);
  return way;
}

export function InstallCard({ lang }: { lang?: HelpLanguage }) {
  const way = useInstallWay();
  const [added, setAdded] = useState(false);
  if (!way && !added) return null;
  return (
    <section className="keep-card install-card" aria-label={said(ui('installTitle', lang))}>
      <span className="keep-icon" aria-hidden><LogoMark size={44} /></span>
      <CardHead nl="Zet Vloertaal op je begin&shy;scherm" text={ui('installTitle', lang)} />
      <p className="keep-hint"><Bi text={ui('installHint', lang)} /></p>
      {added ? (
        <p className="keep-ok"><CheckIcon size={20} /><span lang="nl">Klaar!</span></p>
      ) : way === 'prompt' ? (
        <button type="button" className="btn btn-dark keep-btn" onClick={() => promptInstall().then((ok) => ok && setAdded(true))}>
          <NlPair nlFirst nl="Op beginscherm" className="keep-btn-gloss" text={ui('installAdd', lang)} />
        </button>
      ) : (
        <ol className="ios-steps">
          <li>
            <span className="ios-num" aria-hidden>1</span>
            <span className="ios-pic"><ShareGlyph /></span>
            <NlPair nlFirst nl="Deel" nlClass="ios-nl" className="ios-gloss" text={ui('iosStep1', lang)} />
          </li>
          <li>
            <span className="ios-num" aria-hidden>2</span>
            <span className="ios-pic"><AddGlyph /></span>
            <NlPair nlFirst nl="Zet op begin&shy;scherm" nlClass="ios-nl" className="ios-gloss" text={ui('iosStep2', lang)} />
          </li>
          <li>
            <span className="ios-num" aria-hidden>3</span>
            <span className="ios-pic"><LogoMark size={30} /></span>
            <NlPair nlFirst nl="Klaar" nlClass="ios-nl" className="ios-gloss" text={ui('iosStep3', lang)} />
          </li>
        </ol>
      )}
    </section>
  );
}

/* ---- Reminder ---- */

/** `secondary`: the add button is an outline one, for a screen whose main action is Continue. */
export function ReminderCard({ lang, secondary }: { lang?: HelpLanguage; secondary?: boolean }) {
  // One clear action: "Na het werk" is chosen from the start, so "Zet in mijn agenda" works
  // right away. A chip changes the time; "Andere tijd" opens the phone's own time field.
  const [time, setTime] = useState<string>(REMINDER_TIMES[2].time);
  const [ownOpen, setOwnOpen] = useState(false);
  const [own, setOwn] = useState('');
  const [saved, setSaved] = useState(false);
  const chosen = ownOpen ? own || null : time;
  const add = () => {
    if (!chosen) return;
    addReminder(chosen, lang);
    setSaved(true);
  };
  return (
    <section className="keep-card remind-card" aria-label={said(ui('remindTitle', lang))}>
      <CardHead nl="Herinner mij elke dag" text={ui('remindTitle', lang)} />
      <div className="remind-chips" role="radiogroup" aria-label={said(ui('remindTitle', lang))}>
        {REMINDER_TIMES.map((t) => {
          const on = !ownOpen && time === t.time;
          return (
            <button
              key={t.time}
              type="button"
              role="radio"
              aria-checked={on}
              className={`remind-chip ${on ? 'picked' : ''}`}
              onClick={() => { setTime(t.time); setOwnOpen(false); setSaved(false); }}
            >
              {on && <span className="remind-tick" aria-hidden><CheckIcon size={16} /></span>}
              <span className="remind-time">{t.time}</span>
              <NlPair nlFirst nl={t.nl} nlClass="remind-nl" className="remind-gloss" text={ui(t.key, lang)} />
            </button>
          );
        })}
      </div>
      {ownOpen ? (
        <label className="remind-own picked">
          <span className="remind-own-text">
            <NlPair nlFirst nl="Andere tijd" className="remind-gloss" text={ui('remindOwn', lang)} />
          </span>
          <input
            type="time"
            value={own}
            autoFocus
            onChange={(e) => { setOwn(e.target.value); setSaved(false); }}
          />
        </label>
      ) : (
        <button type="button" className="remind-other" onClick={() => { setOwnOpen(true); setSaved(false); }}>
          <ClockGlyph />
          <span className="remind-own-text">
            <NlPair nlFirst nl="Andere tijd" className="remind-gloss" text={ui('remindOwn', lang)} />
          </span>
        </button>
      )}
      <button type="button" className={`btn ${secondary ? 'btn-line' : 'btn-primary'} keep-btn remind-add`} disabled={!chosen} onClick={add}>
        <CalendarGlyph />
        <span className="remind-add-text">
          <Bi className="keep-btn-gloss" text={ui('remindAdd', lang)} />
          <span lang="nl" className="remind-add-nl">Zet in mijn agenda{chosen ? ` · ${chosen}` : ''}</span>
        </span>
      </button>
      <p className="keep-hint" role="status">
        <Bi text={ui(saved ? remindAddedKey() : 'remindHint', lang)} />
      </p>
    </section>
  );
}

/**
 * "Kies zelf" on the reminder's times page: the phone's own time field, for night and shift
 * work (one tappable: the field). The time is added once it is chosen: on a touch phone when
 * the phone's time picker sets it, with a mouse and keyboard on Enter or on leaving the field.
 */
export function OwnTime({ lang, onTime, card = false, current }: {
  lang?: HelpLanguage;
  onTime: (time: string) => void;
  /** As a choice card (Settings → reminder), next to the max3 time cards. */
  card?: boolean;
  /** The reminder's own time already in the calendar (Settings): shown in the field, with the check. */
  current?: string | null;
}) {
  const input = useRef<HTMLInputElement>(null);
  const done = useRef(false);
  const commit = () => {
    const t = ownTime(input.current?.value ?? '');
    if (!t || done.current) return;
    done.current = true;
    onTime(t);
  };
  useEffect(() => {
    const el = input.current;
    if (!el) return;
    const touch = window.matchMedia?.('(pointer: coarse)').matches;
    // The native change event: on a phone it comes when the picker sets the time.
    const onChange = () => { if (touch) commit(); };
    el.addEventListener('change', onChange);
    return () => el.removeEventListener('change', onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const rtl = lang?.dir === 'rtl';
  const field = (
    <input
      ref={input}
      type="time"
      className="keep3-own-input"
      dir="ltr"
      defaultValue={current ?? undefined}
      aria-label={`${REMIND_OWN.nl} · ${said(ui(REMIND_OWN.key, lang))}`}
      onBlur={commit}
      onKeyDown={(e) => { if (e.key === 'Enter') commit(); }}
    />
  );
  if (card) {
    return (
      <div className="max3-cards set-own-cards" dir={rtl ? 'rtl' : undefined}>
        <div className="max3-card-wrap">
          <label className={`max3-card set-own ${current ? 'picked' : ''}`}>
            <span className="max3-pic" aria-hidden><ClockGlyph /></span>
            <span className="max3-names">
              <NlPair nl={REMIND_OWN.nl} nlClass="max3-nl" className="max3-help" text={ui(REMIND_OWN.key, lang)} />
            </span>
            {field}
          </label>
        </div>
      </div>
    );
  }
  return (
    <label className="keep3-time-btn keep3-own" dir={rtl ? 'rtl' : undefined}>
      <ClockGlyph />
      <span className="keep3-btn-text">
        <NlPair nl={REMIND_OWN.nl} nlClass="keep3-btn-nl" dir="ltr" className="keep3-btn-gloss" text={ui(REMIND_OWN.key, lang)} />
      </span>
      {field}
    </label>
  );
}

export function ClockGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden focusable="false">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12 12.5v5M9.5 15h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* ---- Backup ---- */

/** "1 les", "6 lessen": the Dutch line's count. */
const lessenNl = (n: number) => `${n} ${n === 1 ? 'les' : 'lessen'}`;

export function BackupCard({ progress, lang, onRestore }: {
  progress: Progress;
  lang?: HelpLanguage;
  onRestore: (next: Progress) => void;
}) {
  const file = useRef<HTMLInputElement>(null);
  const [found, setFound] = useState<Partial<Progress> | null>(null);
  /** The second question: the file has fewer lessons than this phone, and Replace was tapped. */
  const [fewer, setFewer] = useState(false);
  const [note, setNote] = useState<'bad' | 'big' | 'back' | 'same' | null>(null);
  // Only lessons the app knows count, here and in the file (src/lib/progress.ts knownLessonId).
  const lessons = knownLessons(progress.completed);
  const theirs = found ? knownLessons(found.completed ?? {}) : 0;
  // Words learned, or in the work-rules track rules learned.
  const rules = trackOf(progress) === 'regels';
  const words = learnedItems(trackOf(progress), progress.completed);
  const today = new Date();
  const stamp = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const download = () => saveFile(`vloertaal-voortgang-${stamp}.json`, 'application/json', backupFile(progress, new Date()));
  const pick = async (f: File | undefined) => {
    if (!f) return;
    const big = f.size >= BACKUP_MAX_BYTES;
    // A file that can't be read (in the cloud and not on the phone, permission gone) is a bad
    // file too; the input is emptied either way, so the same file can be chosen again.
    const text = big ? null : await f.text().catch(() => null);
    const parsed = text === null ? null : parseBackup(text);
    setNote(parsed ? null : big ? 'big' : 'bad');
    setFound(parsed);
    setFewer(false);
    if (file.current) file.current.value = '';
  };
  const close = () => { setFound(null); setFewer(false); };
  // The question takes the focus when it comes (the button tapped is gone), and gives it back to
  // "Zet terug" when it goes: a keyboard or screen-reader user keeps their place.
  const ask = useRef<HTMLDivElement>(null);
  const loadBtn = useRef<HTMLButtonElement>(null);
  const asked = useRef(false);
  useEffect(() => {
    if (found) { asked.current = true; ask.current?.focus({ preventScroll: true }); return; }
    if (asked.current) { asked.current = false; loadBtn.current?.focus({ preventScroll: true }); }
  }, [found, fewer]);
  const apply = (how: 'merge' | 'replace') => {
    if (!found) return;
    // Replacing would lose something here (a lesson the file lacks, a certificate, the record):
    // ask once more, with both numbers.
    if (how === 'replace' && !fewer && replaceLoses(progress, found)) { setFewer(true); return; }
    const next = how === 'merge' ? mergeBackup(progress, found) : replaceWithBackup(progress, found);
    // Added together with nothing new in the file (the same file again): say so, not "it is back".
    const same = how === 'merge' && mergeAddsNothing(progress, next);
    onRestore(next);
    close();
    setNote(same ? 'same' : 'back');
  };
  const dutch = !dutchUi(lang);

  return (
    <section className="keep-card waybill" aria-label={said(ui('backupTitle', lang))}>
      <span className="waybill-tag" lang="nl" aria-hidden>Vrachtbrief</span>
      <CardHead nl="Bewaar je voortgang" text={ui('backupTitle', lang)} />
      <p className="keep-hint"><Bi text={ui('backupHint', lang)} /></p>
      {/* The code is not in the file (and stays out of it): a new phone needs it again. Not while
          the app is open to all (OPEN_TO_ALL): then no phone needs a code. */}
      {!OPEN_TO_ALL && <p className="keep-hint keep-hint-code"><Bi text={ui('backupNewPhone', lang)} /></p>}
      {/* What the file holds, like the lines of a waybill. */}
      <dl className="waybill-lines" lang="nl">
        <div><dt>Lessen</dt><dd>{lessons}</dd></div>
        <div><dt>{rules ? 'Regels' : 'Woorden'}</dt><dd>{words}</dd></div>
        <div><dt>Record</dt><dd>{bestStreak(progress)}</dd></div>
      </dl>
      {found && fewer ? (
        <div className="waybill-ask waybill-fewer" role="alertdialog" aria-label={said(ui('backupFewer', lang))} ref={ask} tabIndex={-1}>
          {dutch && (
            <p lang="nl" dir="ltr" className="waybill-ask-nl">
              Je hebt {lessenNl(lessons)}. Dit bestand heeft {lessenNl(theirs)}.
            </p>
          )}
          <p className="keep-hint"><Bi text={fillCount('backupPhoneN', lessons, lang)} /></p>
          <p className="keep-hint"><Bi text={fillCount('backupFileN', theirs, lang)} /></p>
          <p className="keep-hint"><Bi text={ui('backupFewer', lang)} /></p>
          {/* Add together is the main button; Replace is the small red one under it. */}
          <div className="keep-stack">
            <button type="button" className="btn btn-primary keep-btn" onClick={() => apply('merge')}>
              <NlPair nlFirst nl="Samenvoegen" className="keep-btn-gloss" text={ui('backupMerge', lang)} />
            </button>
            <button type="button" className="btn btn-ghost keep-btn danger keep-btn-small" onClick={() => apply('replace')}>
              <AlertIcon size={20} />
              <span className="keep-btn-text">
                <NlPair nlFirst nl="Toch vervangen" className="keep-btn-gloss" text={ui('backupReplace', lang)} />
              </span>
            </button>
          </div>
          <button type="button" className="keep-link" onClick={close}>
            <NlPair nlFirst nl="Annuleren" className="keep-link-gloss" text={ui('cancel', lang)} />
          </button>
        </div>
      ) : found ? (
        <div className="waybill-ask" role="alertdialog" aria-label={said(ui('backupAsk', lang))} ref={ask} tabIndex={-1}>
          {dutch && (
            <p lang="nl" dir="ltr" className="waybill-ask-nl">
              Gevonden: {lessenNl(theirs)}.{theirs > 0 && ' Samenvoegen of vervangen?'}
            </p>
          )}
          <p className="keep-hint"><Bi text={fillCount('backupFileN', theirs, lang)} /></p>
          {theirs > 0 && <p className="keep-hint"><Bi text={ui('backupAsk', lang)} /></p>}
          <div className="keep-row">
            <button type="button" className="btn btn-primary keep-btn" onClick={() => apply('merge')}>
              <NlPair nlFirst nl="Samenvoegen" className="keep-btn-gloss" text={ui('backupMerge', lang)} />
            </button>
            {/* A file without lessons can only be added: replacing would only wipe this phone. */}
            {theirs > 0 && (
              <button type="button" className="btn btn-ghost keep-btn danger" onClick={() => apply('replace')}>
                <NlPair nlFirst nl="Vervangen" className="keep-btn-gloss" text={ui('backupReplace', lang)} />
              </button>
            )}
          </div>
          <button type="button" className="keep-link" onClick={close}>
            <NlPair nlFirst nl="Annuleren" className="keep-link-gloss" text={ui('cancel', lang)} />
          </button>
        </div>
      ) : (
        <div className="keep-row">
          <button type="button" className="btn btn-dark keep-btn" onClick={download}>
            <NlPair nlFirst nl="Download" className="keep-btn-gloss" text={ui('backupSave', lang)} />
          </button>
          <button type="button" className="btn btn-ghost keep-btn" onClick={() => file.current?.click()} ref={loadBtn}>
            <NlPair nlFirst nl="Zet terug" className="keep-btn-gloss" text={ui('backupLoad', lang)} />
          </button>
          <input
            ref={file}
            type="file"
            accept="application/json,.json,text/plain,.txt"
            hidden
            onChange={(e) => pick(e.target.files?.[0])}
          />
        </div>
      )}
      {/* Always on the page (a live region that appears with its text is often not read). */}
      <div role="status">
        {note && (
          <p className={note === 'back' || note === 'same' ? 'keep-ok' : 'warn keep-note'}>
            {(note === 'back' || note === 'same') && <CheckIcon size={20} />}
            <Bi text={ui(note === 'big' ? 'backupTooBig' : note === 'bad' ? 'backupBad' : note === 'same' ? 'backupNothingNew' : 'backupBack', lang)} />
          </p>
        )}
      </div>
    </section>
  );
}

/* ---- After the first day: the reminder and the home screen, a few calm pages ---- */

const appUrl = () => `${location.origin}${location.pathname}`;

/** Puts the daily reminder in the phone's calendar (a .ics file the phone opens). Always this
 *  phone's one event (reminderEvent): a new time moves it, it never adds a second alarm. On
 *  Android: Google Calendar's own page, filled in (googleCalendarUrl); that event has no UID, so
 *  there a new time is a second event, and Stop's file cannot remove it (docs/nachtronde.md 11). */
export function addReminder(time: string, lang?: HelpLanguage) {
  if (isAndroid()) {
    const zone = (() => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { return undefined; } })();
    window.open(googleCalendarUrl(time, appUrl(), new Date(), trackOfLang(lang?.code), reminderHelp(lang), zone), '_blank', 'noopener');
    rememberReminder(time);
    return;
  }
  saveFile('vloertaal-herinnering.ics', 'text/calendar;charset=utf-8', reminderIcs(time, appUrl(), new Date(), trackOfLang(lang?.code), reminderHelp(lang), reminderEvent()));
  rememberReminder(time);
}

/** The line after "Zet in mijn agenda": "Open the file" for the .ics, and on Android (Google
 *  Calendar's own page, with its Save button) the plain line that the calendar reminds you. */
export const remindAddedKey = (): 'remindAdded' | 'remindHint' => (isAndroid() ? 'remindHint' : 'remindAdded');
/** After Stop: open the cancel file, or on Android delete it in Google Calendar (the app cannot). */
export const remindStoppedKey = (): 'remindStopped' | 'remindStoppedAndroid' => (isAndroid() ? 'remindStoppedAndroid' : 'remindStopped');

/** "Stop de herinnering": a file that cancels that one event (`time`: its last time). */
export function stopReminder(time: string, lang?: HelpLanguage) {
  // Android: the event came from Google Calendar's own page (no UID), so a cancel file cannot
  // remove it; the learner deletes it there (remindStoppedAndroid).
  if (isAndroid()) { forgetReminder(); return; }
  saveFile('vloertaal-herinnering-stop.ics', 'text/calendar;charset=utf-8', reminderCancelIcs(time, appUrl(), new Date(), trackOfLang(lang?.code), reminderHelp(lang), reminderEvent()));
  forgetReminder();
}

/** A tap meant for the page before is ignored for a moment (as on the milestone). */
function useGuard(step: string) {
  const ready = useRef(false);
  useEffect(() => {
    ready.current = false;
    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const t = window.setTimeout(() => { ready.current = true; }, still ? 300 : 500);
    return () => window.clearTimeout(t);
  }, [step]);
  return (fn: () => void) => () => { if (ready.current) fn(); };
}

/** The page title: the Dutch small, the help language large. */
function KeepTitle({ nl, text, lang }: { nl: string; text: ReturnType<typeof ui>; lang?: HelpLanguage }) {
  return (
    <h1 className="keep3-title" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <NlPair nlFirst nl={nl} nlClass="keep3-nl" dir="ltr" className="keep3-gloss" text={text} />
    </h1>
  );
}

/**
 * The reminder and home-screen offer after the first day's milestone (src/lib/keep.ts), one
 * small page at a time, at most 3 choices each:
 *  ask: [Yes, after work · 18:00] [Other time] [No thanks];
 *  times: 07:00 / 12:00 / "Kies zelf" with the phone's time field (a time adds it);
 *  install (only when the phone can): [Add to home screen] [Later];
 *  added: "Open the file to add it" and Continue (when there is no install page).
 */
export function KeepFlow({ lang, onDone }: { lang?: HelpLanguage; onDone: () => void }) {
  const way = useInstallWay();
  const [step, setStep] = useState<KeepStep>('ask');
  const [added, setAdded] = useState<string | null>(null);
  const guard = useGuard(step);
  const rtl = lang?.dir === 'rtl';
  const go = (action: KeepAction) => {
    const next = keepNext(step, action, Boolean(way));
    if (next === 'done') onDone();
    else { setStep(next); window.scrollTo(0, 0); }
  };
  const remind = (time: string, action: KeepAction) => { addReminder(time, lang); setAdded(time); go(action); };
  const [short] = useState(() => typeof window !== 'undefined' && window.innerHeight < 720);
  // Each page comes in the place of the button that was tapped: the focus goes to its title.
  const root = useRef<HTMLDivElement>(null);
  useFocusWhenLost(root, step, 'h1');
  const hero = (mood: 'wave' | 'cheer') => <div className="keep-hero" aria-hidden><Character who="bram" mood={mood} size={short ? 72 : 112} /></div>;

  let body;
  if (step === 'ask') {
    body = (
      <>
        {hero('wave')}
        <KeepTitle nl="Herinner mij elke dag" text={ui('remindAsk', lang)} lang={lang} />
        <p className="keep3-hint"><Bi text={ui('remindHint', lang)} /></p>
        <div className="keep3-actions">
          <button type="button" className="btn btn-primary keep3-btn keep-yes" onClick={guard(() => remind(REMIND_DEFAULT.time, 'yes'))} dir={rtl ? 'rtl' : undefined}>
            <span className="keep3-time" dir="ltr">{REMIND_DEFAULT.time}</span>
            <span className="keep3-btn-text">
              <NlPair nl="Ja, na het werk" nlClass="keep3-btn-nl" dir="ltr" className="keep3-btn-gloss" text={ui('remindYes', lang)} />
            </span>
          </button>
          <button type="button" className="btn btn-ghost keep3-btn keep-other" onClick={guard(() => go('other'))} dir={rtl ? 'rtl' : undefined}>
            <ClockGlyph />
            <span className="keep3-btn-text">
              <NlPair nl="Andere tijd" nlClass="keep3-btn-nl" dir="ltr" className="keep3-btn-gloss" text={ui('remindOwn', lang)} />
            </span>
            <ChevronIcon size={20} />
          </button>
          {/* A card like the other two, with its own icon (not a small text link). */}
          <button type="button" className="btn btn-ghost keep3-btn keep-no" onClick={guard(() => go('no'))} dir={rtl ? 'rtl' : undefined}>
            <CloseIcon size={26} />
            <span className="keep3-btn-text">
              <NlPair nl="Nee, dank je" nlClass="keep3-btn-nl" dir="ltr" className="keep3-btn-gloss" text={ui('remindNo', lang)} />
            </span>
          </button>
        </div>
      </>
    );
  } else if (step === 'times') {
    body = (
      <>
        {/* Back to the question (fixed chrome: not one of the three times). */}
        <ChromeHead lang={lang} onBack={guard(() => { setStep('ask'); window.scrollTo(0, 0); })} />
        <KeepTitle nl="Hoe laat?" text={ui('remindPickTime', lang)} lang={lang} />
        <p className="keep3-hint"><Bi text={ui('remindHint', lang)} /></p>
        <ul className="keep3-times">
          {REMIND_OTHER_TIMES.map((t) => (
            <li key={t.time}>
              <button type="button" className="keep3-time-btn" onClick={guard(() => remind(t.time, 'time'))} dir={rtl ? 'rtl' : undefined}>
                <span className="keep3-time" dir="ltr">{t.time}</span>
                <span className="keep3-btn-text">
                  <NlPair nl={t.nl} nlClass="keep3-btn-nl" dir="ltr" className="keep3-btn-gloss" text={ui(t.key, lang)} />
                </span>
                <CalendarGlyph />
              </button>
            </li>
          ))}
          <li>
            <OwnTime lang={lang} onTime={(time) => remind(time, 'time')} />
          </li>
        </ul>
      </>
    );
  } else if (step === 'install') {
    body = (
      <>
        <div className="keep-hero keep3-logo" aria-hidden><LogoMark size={short ? 64 : 88} /></div>
        {added && <p className="keep-ok keep3-added" role="status"><CheckIcon size={20} /><span dir="ltr">{added}</span><Bi text={ui(remindAddedKey(), lang)} /></p>}
        <KeepTitle nl="Zet Vloertaal op je beginscherm" text={ui('installTitle', lang)} lang={lang} />
        <p className="keep3-hint"><Bi text={ui('installHint', lang)} /></p>
        {way === 'ios' && (
          <ol className="ios-steps keep3-ios">
            <li><span className="ios-num" aria-hidden>1</span><span className="ios-pic"><ShareGlyph /></span><NlPair nlFirst nl="Deel" nlClass="ios-nl" className="ios-gloss" text={ui('iosStep1', lang)} /></li>
            <li><span className="ios-num" aria-hidden>2</span><span className="ios-pic"><AddGlyph /></span><NlPair nlFirst nl="Zet op begin&shy;scherm" nlClass="ios-nl" className="ios-gloss" text={ui('iosStep2', lang)} /></li>
            <li><span className="ios-num" aria-hidden>3</span><span className="ios-pic"><LogoMark size={30} /></span><NlPair nlFirst nl="Klaar" nlClass="ios-nl" className="ios-gloss" text={ui('iosStep3', lang)} /></li>
          </ol>
        )}
        <div className="keep3-actions">
          {way === 'prompt' && (
            <button type="button" className="btn btn-primary keep3-btn keep-install" onClick={guard(() => { void promptInstall().finally(() => go('next')); })} dir={rtl ? 'rtl' : undefined}>
              <AddGlyph />
              <span className="keep3-btn-text">
                <NlPair nl="Op beginscherm" nlClass="keep3-btn-nl" dir="ltr" className="keep3-btn-gloss" text={ui('installAdd', lang)} />
              </span>
            </button>
          )}
          <button type="button" className={`btn ${way === 'prompt' ? 'btn-ghost' : 'btn-primary'} keep3-btn keep-later`} onClick={guard(() => go('next'))}>
            <span className="keep3-btn-text keep3-center">
              {way === 'prompt' ? (
                <>
                  <span className="keep3-btn-nl" lang="nl">Later</span>
                  {lang && !dutchUi(lang) && <Bi className="keep3-btn-gloss" text={ui('certLater', lang)} />}
                </>
              ) : (
                <Bi className="keep3-btn-gloss" text={ui('continue', lang)} />
              )}
            </span>
          </button>
        </div>
      </>
    );
  } else {
    body = (
      <>
        {hero('cheer')}
        <p className="keep-ok keep3-added keep3-added-big" role="status"><CheckIcon size={24} /><span dir="ltr">{added}</span></p>
        <KeepTitle nl="Zet in je agenda" text={ui(remindAddedKey(), lang)} lang={lang} />
        <div className="keep3-actions">
          <button type="button" className="btn btn-primary keep3-btn keep-continue" onClick={guard(() => go('next'))}>
            <span className="keep3-btn-text keep3-center"><Bi className="keep3-btn-gloss" text={ui('continue', lang)} /></span>
          </button>
        </div>
      </>
    );
  }
  return (
    <div className="player milestone-screen keep-screen keep3" ref={root}>
      <div className={`player-body milestone keep3-page keep3-step-${step}`}>{body}</div>
    </div>
  );
}
