import { useEffect, useReducer, useState } from 'react';
import type { Unit } from '../content/types';
import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { onRecordedVoices, preferredVoiceRef } from '../lib/audio';
import {
  currentVoices,
  dismissOfflineError,
  estimateBytes,
  formatBytes,
  offlineState,
  offlineSupported,
  onOfflineChange,
  removeUnitOffline,
  saveUnitOffline,
  voicesKey,
} from '../lib/offline';
import { Bi } from './Bi';
import { CloseIcon } from './Icons';

/**
 * The small row under a unit's header (the home's block, the "Gedaan" shelf and "Alle
 * onderwerpen"): "Save for offline" and the pocket card. Calm: two quiet chips, no colour
 * until something is saved.
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

/** Follows the saved state of a unit (and the voices, which arrive after the app opens). */
function useOfflineUnit(unitId: string) {
  const [, repaint] = useReducer((n: number) => n + 1, 0);
  useEffect(() => {
    const a = onOfflineChange(repaint);
    const b = onRecordedVoices(repaint);
    return () => { a(); b(); };
  }, []);
  const voices = currentVoices(preferredVoiceRef());
  return { voices, state: offlineState(unitId, voicesKey(voices)) };
}

export function OfflineControl({ unit, lang }: { unit: Unit; lang?: HelpLanguage }) {
  const { voices, state } = useOfflineUnit(unit.id);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [confirming, setConfirming] = useState(false);
  const showSave = state.status === 'none' || state.status === 'error' || (state.status === 'saved' && state.stale);
  const vk = voicesKey(voices);
  useEffect(() => {
    if (!showSave || !offlineSupported()) return;
    let live = true;
    estimateBytes(unit, voices).then((b) => live && setEstimate(b)).catch(() => {});
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit.id, showSave, vk]);
  if (!offlineSupported()) return null;
  const label = (key: 'saveOffline' | 'savingOffline' | 'savedOffline') => {
    const t = ui(key, lang);
    return `${t.help ? `${t.help} · ` : ''}${t.en}`;
  };

  if (state.status === 'saving') {
    const pct = Math.round((state.done / Math.max(1, state.total)) * 100);
    return (
      <div className="unit-tool offline-saving" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label={label('savingOffline')}>
        <span className="offline-fill" style={{ width: `${pct}%` }} aria-hidden />
        <DownloadIcon />
        <span className="unit-tool-text">
          <Bi className="unit-tool-label" text={ui('savingOffline', lang)} />
          <b className="unit-tool-size" dir="ltr">{pct}%</b>
        </span>
      </div>
    );
  }
  if (state.status === 'saved' && !state.stale && confirming) {
    // "Remove?" asked in place, no pop-up: Ja removes, Nee keeps (words from the first unit).
    return (
      <div className="unit-tool offline-saved offline-confirm" role="group" aria-label={`${ui('removeOffline').en}?`}>
        <span className="unit-tool-text">
          <Bi className="unit-tool-label" text={{ ...ui('removeOffline', lang), en: `${ui('removeOffline').en}?`, help: ui('removeOffline', lang).help && `${ui('removeOffline', lang).help}?` }} />
        </span>
        <span className="offline-confirm-btns">
          <button type="button" className="offline-yes" onClick={() => { setConfirming(false); removeUnitOffline(unit.id); }} aria-label={`Ja · ${gloss('w.ja', 'yes', lang).help ?? 'yes'}`}>
            <span lang="nl">Ja</span>
          </button>
          <button type="button" className="offline-no" onClick={() => setConfirming(false)} aria-label={`Nee · ${gloss('w.nee', 'no', lang).help ?? 'no'}`} autoFocus>
            <span lang="nl">Nee</span>
          </button>
        </span>
      </div>
    );
  }
  if (state.status === 'saved' && !state.stale) {
    return (
      <div className="unit-tool offline-saved" role="status">
        <span className="offline-done" aria-hidden><DownloadDoneIcon size={20} /></span>
        <span className="unit-tool-text">
          <Bi className="unit-tool-label" text={ui('savedOffline', lang)} />
          <span className="unit-tool-size" dir="ltr">{formatBytes(state.bytes)}</span>
        </span>
        <button
          type="button"
          className="offline-remove"
          onClick={() => setConfirming(true)}
          aria-label={`${ui('removeOffline').en}${ui('removeOffline', lang).help ? ` (${ui('removeOffline', lang).help})` : ''}`}
        >
          <CloseIcon size={18} />
        </button>
      </div>
    );
  }
  return (
    <>
      <button
        type="button"
        className="unit-tool offline-save"
        onClick={() => { dismissOfflineError(unit.id); saveUnitOffline(unit, voices); }}
        aria-label={`${label('saveOffline')}${estimate ? ` · ${formatBytes(estimate)}` : ''}`}
      >
        <DownloadIcon />
        <span className="unit-tool-text">
          <Bi className="unit-tool-label" text={ui('saveOffline', lang)} />
          {estimate !== null && <span className="unit-tool-size" dir="ltr" aria-hidden>≈ {formatBytes(estimate)}</span>}
        </span>
      </button>
      {state.status === 'error' && (
        <p className="offline-error" role="alert">
          <Bi text={ui(state.reason === 'space' ? 'offlineNoSpace' : 'offlineFailed', lang)} />
        </p>
      )}
    </>
  );
}

/** The row under a unit's header: save for offline, and the pocket card (when it can open). */
export function UnitTools({ unit, lang, onPocket }: { unit: Unit; lang?: HelpLanguage; onPocket?: (unitId: string) => void }) {
  const rtl = lang?.dir === 'rtl';
  return (
    <div className="unit-tools" dir={rtl ? 'rtl' : undefined} onClick={(e) => e.stopPropagation()}>
      <OfflineControl unit={unit} lang={lang} />
      {onPocket && (
        <button type="button" className="unit-tool pocket-open" onClick={() => onPocket(unit.id)}>
          <PocketIcon />
          <span className="unit-tool-text"><Bi className="unit-tool-label" text={ui('pocketCard', lang)} /></span>
        </button>
      )}
    </div>
  );
}
