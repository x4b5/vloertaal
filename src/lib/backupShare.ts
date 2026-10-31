import { saveFile } from './reminder';

/**
 * Settings › "Bewaar je voortgang": the backup file goes out in one tap.
 *  - A phone that can share files (navigator.share with files: most Android phones, iPhones):
 *    the phone's own share sheet, so the learner can send it to themself (WhatsApp, e-mail) or
 *    save it in Files. The file is plain text (.txt): Chrome on Android does not share .json
 *    files, and "Zet terug" reads .txt as well as .json (the same content).
 *  - Else: downloaded as .json, as before.
 * Cancelled in the share sheet: nothing happens (no download behind it).
 */

export type BackupOut = 'shared' | 'saved' | 'cancelled';

/** The day in the file's name ("2026-10-31"). */
export function backupStamp(now: Date): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export const backupName = (now: Date, ext: 'json' | 'txt') => `vloertaal-voortgang-${backupStamp(now)}.${ext}`;

/** The file to share, or null when this phone cannot share files. */
export function shareableBackup(content: string, now: Date): File | null {
  try {
    if (typeof navigator === 'undefined' || typeof navigator.share !== 'function' || typeof navigator.canShare !== 'function') return null;
    if (typeof File === 'undefined') return null;
    const file = new File([content], backupName(now, 'txt'), { type: 'text/plain' });
    return navigator.canShare({ files: [file] }) ? file : null;
  } catch {
    return null;
  }
}

/** Can the backup go out through the share sheet here (for the button's words)? */
export function canShareBackup(): boolean {
  return shareableBackup('{}', new Date()) !== null;
}

/** Shares the backup (or downloads it where sharing cannot). Call it from the tap itself. */
export async function sendBackup(content: string, now: Date, download: (name: string, type: string, content: string) => void = saveFile): Promise<BackupOut> {
  const file = shareableBackup(content, now);
  if (file) {
    try {
      await navigator.share({ files: [file], title: 'Vloertaal' });
      return 'shared';
    } catch (e) {
      // The learner closed the share sheet: leave it there.
      if ((e as { name?: string })?.name === 'AbortError') return 'cancelled';
      // Sharing failed (not allowed now, a webview): the download instead.
    }
  }
  download(backupName(now, 'json'), 'application/json', content);
  return 'saved';
}
