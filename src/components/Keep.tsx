import { useEffect, useRef, useState } from 'react';
import { learnedWords } from '../content/curriculum';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { installWay, onInstallChange, promptInstall, type InstallWay } from '../lib/install';
import { backupFile, bestStreak, mergeBackup, parseBackup, replaceWithBackup, type Progress } from '../lib/progress';
import { REMINDER_TIMES, reminderIcs, saveFile } from '../lib/reminder';
import { Bi } from './Bi';
import { CheckIcon } from './Icons';
import { LogoMark } from './Logo';

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
      <span className="keep-nl" lang="nl">{nl}</span>
      <Bi className="keep-gloss" text={text} />
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
    <section className="keep-card install-card" aria-label={ui('installTitle').en}>
      <span className="keep-icon" aria-hidden><LogoMark size={44} /></span>
      <CardHead nl="Zet Vloertaal op je begin&shy;scherm" text={ui('installTitle', lang)} />
      <p className="keep-hint"><Bi text={ui('installHint', lang)} /></p>
      {added ? (
        <p className="keep-ok"><CheckIcon size={20} /><span lang="nl">Klaar!</span></p>
      ) : way === 'prompt' ? (
        <button type="button" className="btn btn-dark keep-btn" onClick={() => promptInstall().then((ok) => ok && setAdded(true))}>
          <span lang="nl">Op beginscherm</span>
          <Bi className="keep-btn-gloss" text={ui('installAdd', lang)} />
        </button>
      ) : (
        <ol className="ios-steps">
          <li>
            <span className="ios-num" aria-hidden>1</span>
            <span className="ios-pic"><ShareGlyph /></span>
            <span className="ios-nl" lang="nl">Deel</span>
            <Bi className="ios-gloss" text={ui('iosStep1', lang)} />
          </li>
          <li>
            <span className="ios-num" aria-hidden>2</span>
            <span className="ios-pic"><AddGlyph /></span>
            <span className="ios-nl" lang="nl">Zet op begin&shy;scherm</span>
            <Bi className="ios-gloss" text={ui('iosStep2', lang)} />
          </li>
          <li>
            <span className="ios-num" aria-hidden>3</span>
            <span className="ios-pic"><LogoMark size={30} /></span>
            <span className="ios-nl" lang="nl">Klaar</span>
            <Bi className="ios-gloss" text={ui('iosStep3', lang)} />
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
    const url = `${location.origin}${location.pathname}`;
    saveFile('vloertaal-herinnering.ics', 'text/calendar;charset=utf-8', reminderIcs(chosen, url, new Date()));
    setSaved(true);
  };
  return (
    <section className="keep-card remind-card" aria-label={ui('remindTitle').en}>
      <CardHead nl="Herinner mij elke dag" text={ui('remindTitle', lang)} />
      <div className="remind-chips" role="radiogroup" aria-label={ui('remindTitle').en}>
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
              <span className="remind-nl" lang="nl">{t.nl}</span>
              <Bi className="remind-gloss" text={ui(t.key, lang)} />
            </button>
          );
        })}
      </div>
      {ownOpen ? (
        <label className="remind-own picked">
          <span className="remind-own-text">
            <span lang="nl">Andere tijd</span>
            <Bi className="remind-gloss" text={ui('remindOwn', lang)} />
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
            <span lang="nl">Andere tijd</span>
            <Bi className="remind-gloss" text={ui('remindOwn', lang)} />
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
        <Bi text={ui(saved ? 'remindAdded' : 'remindHint', lang)} />
      </p>
    </section>
  );
}

function ClockGlyph() {
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

export function BackupCard({ progress, lang, onRestore }: {
  progress: Progress;
  lang?: HelpLanguage;
  onRestore: (next: Progress) => void;
}) {
  const file = useRef<HTMLInputElement>(null);
  const [found, setFound] = useState<Partial<Progress> | null>(null);
  const [note, setNote] = useState<'bad' | 'back' | null>(null);
  const lessons = Object.keys(progress.completed).length;
  const words = learnedWords(progress.completed).size;
  const today = new Date();
  const stamp = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const download = () => saveFile(`vloertaal-voortgang-${stamp}.json`, 'application/json', backupFile(progress, new Date()));
  const pick = async (f: File | undefined) => {
    if (!f) return;
    const parsed = f.size < 2_000_000 ? parseBackup(await f.text()) : null;
    setNote(parsed ? null : 'bad');
    setFound(parsed);
    if (file.current) file.current.value = '';
  };
  const apply = (how: 'merge' | 'replace') => {
    if (!found) return;
    onRestore(how === 'merge' ? mergeBackup(progress, found) : replaceWithBackup(progress, found));
    setFound(null);
    setNote('back');
  };

  return (
    <section className="keep-card waybill" aria-label={ui('backupTitle').en}>
      <span className="waybill-tag" lang="nl" aria-hidden>Vrachtbrief</span>
      <CardHead nl="Bewaar je voortgang" text={ui('backupTitle', lang)} />
      <p className="keep-hint"><Bi text={ui('backupHint', lang)} /></p>
      {/* What the file holds, like the lines of a waybill. */}
      <dl className="waybill-lines" lang="nl">
        <div><dt>Lessen</dt><dd>{lessons}</dd></div>
        <div><dt>Woorden</dt><dd>{words}</dd></div>
        <div><dt>Record</dt><dd>{bestStreak(progress)}</dd></div>
      </dl>
      {found ? (
        <div className="waybill-ask" role="alertdialog" aria-label={ui('backupAsk').en}>
          <p lang="nl" className="waybill-ask-nl">
            Gevonden: {Object.keys(found.completed ?? {}).length} lessen. Samenvoegen of vervangen?
          </p>
          <p className="keep-hint"><Bi text={ui('backupAsk', lang)} /></p>
          <div className="keep-row">
            <button type="button" className="btn btn-dark keep-btn" onClick={() => apply('merge')}>
              <span lang="nl">Samenvoegen</span>
              <Bi className="keep-btn-gloss" text={ui('backupMerge', lang)} />
            </button>
            <button type="button" className="btn btn-ghost keep-btn danger" onClick={() => apply('replace')}>
              <span lang="nl">Vervangen</span>
              <Bi className="keep-btn-gloss" text={ui('backupReplace', lang)} />
            </button>
          </div>
          <button type="button" className="keep-link" onClick={() => setFound(null)}>
            <span lang="nl">Annuleren</span>
            <Bi className="keep-link-gloss" text={ui('cancel', lang)} />
          </button>
        </div>
      ) : (
        <div className="keep-row">
          <button type="button" className="btn btn-dark keep-btn" onClick={download}>
            <span lang="nl">Download</span>
            <Bi className="keep-btn-gloss" text={ui('backupSave', lang)} />
          </button>
          <button type="button" className="btn btn-ghost keep-btn" onClick={() => file.current?.click()}>
            <span lang="nl">Zet terug</span>
            <Bi className="keep-btn-gloss" text={ui('backupLoad', lang)} />
          </button>
          <input
            ref={file}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => pick(e.target.files?.[0])}
          />
        </div>
      )}
      {note && (
        <p className={note === 'bad' ? 'warn keep-note' : 'keep-ok'} role="status">
          {note === 'back' && <CheckIcon size={20} />}
          <Bi text={ui(note === 'bad' ? 'backupBad' : 'backupBack', lang)} />
        </p>
      )}
    </section>
  );
}
