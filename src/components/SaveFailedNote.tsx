import { useEffect, useState } from 'react';
import { getHelpLanguage, ui } from '../i18n';
import { onSaveFailed, type Progress } from '../lib/progress';
import { Bi } from './Bi';
import { InfoIcon } from './Icons';

/** How long the note stays (it has no button: it never adds a tap to a screen). */
export const SAVE_NOTE_MS = 12000;

/**
 * "Je voortgang is niet bewaard": a short, calm note at the top when saving the progress fails
 * (src/lib/progress.ts saveProgress: a full phone, blocked storage), once per visit, with what to
 * do: make room, or keep a backup (Settings › "Bewaar je voortgang"). It goes by itself. Next to
 * the app on every screen (src/main.tsx); the status region is always there, so a screen reader
 * hears the note.
 */
export function SaveFailedNote() {
  const [failed, setFailed] = useState<Progress | null>(null);
  useEffect(() => {
    const stop = onSaveFailed(setFailed);
    return () => { stop(); };
  }, []);
  useEffect(() => {
    if (!failed) return;
    const t = window.setTimeout(() => setFailed(null), SAVE_NOTE_MS);
    return () => window.clearTimeout(t);
  }, [failed]);
  const lang = failed ? getHelpLanguage(failed.helpLang, failed.gender) : undefined;
  return (
    <div className="save-note-live" role="status">
      {failed && (
        <div className="sound-note save-note">
          <InfoIcon size={20} />
          <Bi text={ui('saveFailed', lang)} />
        </div>
      )}
    </div>
  );
}
