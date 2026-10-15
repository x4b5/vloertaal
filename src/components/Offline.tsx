import { useEffect, useId, useReducer } from 'react';
import { findUnit, unitDone } from '../lib/certificate';
import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { type Access, unitAllowed } from '../lib/access';
import { onRecordedVoices, preferredVoiceRef } from '../lib/audio';
import {
  autoOfflinePlan,
  currentVoices,
  dismissOfflineError,
  formatBytes,
  offlineAuto,
  offlineSnapshot,
  offlineState,
  offlineSupported,
  onOfflineChange,
  removeUnitOffline,
  saveUnitOffline,
  keepLanguagesOffline,
  setOfflineAuto,
  voicesKey,
} from '../lib/offline';
import type { Progress } from '../lib/progress';
import { currentBlock } from '../lib/route';
import { Bi } from './Bi';
import { NlPair } from './NlPair';

/**
 * "Keep lessons on this phone" (Settings → This phone): one switch. When it is on, the topic the
 * learner works in is saved on the phone by itself (src/lib/offline.ts: autoOfflinePlan), and
 * finished topics are released again. No per-unit buttons anywhere.
 *  - useAutoOffline: runs in App, saves and releases as the current topic changes;
 *  - useOfflineAuto: the setting, for any switch;
 *  - OfflineSettingCard: the switch with one status line, for Settings.
 */

type IconProps = { size?: number };
const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

/** An arrow down into a tray. */
export const DownloadIcon = ({ size = 22 }: IconProps) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5" {...line} />
    <path d="M4 15.5v3.5h16v-3.5" {...line} />
  </svg>
);

/** A tick in a tray: saved on this phone. */
export const DownloadDoneIcon = ({ size = 22 }: IconProps) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <path d="M7.5 9.5l3 3 6-6.5" {...line} />
    <path d="M4 15.5v3.5h16v-3.5" {...line} />
  </svg>
);

/** A small card with a picture and two lines: the pocket card. */
export const PocketIcon = ({ size = 22 }: IconProps) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <rect x="3" y="5" width="18" height="14" rx="2.5" {...line} />
    <rect x="6.5" y="8.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
    <path d="M13.5 9.5h4M13.5 12.5h3M6.5 16h11" {...line} strokeWidth={2} />
  </svg>
);

/** Repaints on any offline change, and when the recorded voices arrive after the app opens. */
function useOfflineRepaint() {
  const [n, repaint] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    const a = onOfflineChange(repaint);
    const b = onRecordedVoices(repaint);
    return () => { a(); b(); };
  }, []);
  return n;
}

/** The setting "Keep lessons on this phone": [on, set]. */
export function useOfflineAuto(): [boolean, (on: boolean) => void] {
  useOfflineRepaint();
  return [offlineAuto(), (on: boolean) => {
    if (on) for (const id of offlineSnapshot('').busy) dismissOfflineError(id);
    setOfflineAuto(on);
  }];
}

/** The topic kept on the phone now: the current block, when the learner may play it. */
function keptUnit(progress: Progress, access: Access) {
  const block = progress.onboarded && progress.sector !== undefined ? currentBlock(progress) : null;
  return block && unitAllowed(block.id, access) ? block : null;
}

/**
 * Keeps the current topic on the phone while the setting is on (call it once, in App, before any
 * early return). It waits a moment after a change, so the home paints first, and only online.
 */
export function useAutoOffline(progress: Progress, access: Access | null) {
  const tick = useOfflineRepaint();
  const on = offlineAuto();
  const unit = access ? keptUnit(progress, access) : null;
  const voices = currentVoices(preferredVoiceRef());
  const vk = voicesKey(voices);
  const doneKey = Object.keys(progress.completed).length;
  useEffect(() => {
    if (!on || !offlineSupported()) return;
    const t = window.setTimeout(() => {
      if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
      const { saved, busy } = offlineSnapshot(vk);
      const plan = autoOfflinePlan({
        current: unit?.id ?? null,
        saved,
        busy,
        done: (id) => {
          const u = findUnit(id);
          return u ? unitDone(u, progress.completed) : true;
        },
      });
      for (const id of plan.release) void removeUnitOffline(id);
      if (plan.save && unit) void saveUnitOffline(unit, voices);
      // Topics already on the phone: the help languages' files join them (once).
      else if (!busy.length) void keepLanguagesOffline();
    }, 1500);
    return () => window.clearTimeout(t);
    // `tick` repaints after a save or a removal, so a finished save is not started again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, unit?.id, vk, doneKey, tick]);
}

/**
 * The switch for Settings → This phone: "Keep lessons on this phone", one hint line, and while
 * it is on, what is on the phone now (saving 40%, saved · 1.9 MB, or why it did not work).
 * One tappable thing. Hidden where the browser cannot keep files.
 */
export function OfflineSettingCard({ progress, lang, access = 'full' }: { progress: Progress; lang?: HelpLanguage; access?: Access }) {
  const [on, setOn] = useOfflineAuto();
  const label = useId();
  if (!offlineSupported()) return null;
  const unit = keptUnit(progress, access);
  const state = unit ? offlineState(unit.id, voicesKey(currentVoices(preferredVoiceRef()))) : null;
  const title = unit ? gloss(unit.id, unit.title, lang) : null;
  const rtl = lang?.dir === 'rtl';
  return (
    <section className="keep-card offline-card" dir={rtl ? 'rtl' : undefined}>
      <div className="count-row">
        <div className="keep-head" id={label}>
          <NlPair nlFirst nl="Lessen op deze telefoon" nlClass="keep-nl" dir="ltr" className="keep-gloss" text={ui('settingKeepLessons', lang)} />
        </div>
        <button type="button" role="switch" aria-checked={on} aria-labelledby={label} className={`count-switch ${on ? 'on' : ''}`} onClick={() => setOn(!on)}>
          <span className="count-knob" aria-hidden />
          <span className="count-state" lang="nl" aria-hidden>{on ? 'Aan' : 'Uit'}</span>
        </button>
      </div>
      <p className="keep-hint"><Bi text={ui('settingKeepLessonsHint', lang)} /></p>
      {on && state && title && (
        <p className={`offline-status offline-${state.status}`} role="status">
          {state.status === 'error' ? (
            <Bi text={ui(state.reason === 'space' ? 'offlineNoSpace' : 'offlineFailed', lang)} />
          ) : (
            <>
              <span className="offline-status-icon" aria-hidden>{state.status === 'saved' ? <DownloadDoneIcon size={20} /> : <DownloadIcon size={20} />}</span>
              <span className="offline-status-text">
                <Bi className="offline-status-topic" text={title} />
                <span className="offline-status-line">
                  <Bi text={ui(state.status === 'saved' ? 'savedOffline' : 'savingOffline', lang)} />
                  {state.status === 'saved' && <b dir="ltr">{formatBytes(state.bytes)}</b>}
                  {state.status === 'saving' && <b dir="ltr">{Math.round((state.done / Math.max(1, state.total)) * 100)}%</b>}
                </span>
              </span>
            </>
          )}
        </p>
      )}
    </section>
  );
}
