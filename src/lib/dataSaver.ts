/**
 * The phone's Data Saver (Chrome and Samsung Internet on Android: navigator.connection.saveData;
 * the "Lite mode" of older Chrome too). On, the app fetches nothing ahead in the background: no
 * lesson's sound before it is played (src/lib/lessonClips.ts) and no topic kept on the phone by
 * default (src/lib/offline.ts offlineAuto). Unknown (iOS, Firefox): off. Phase 3, 4 November 2026.
 */
export function dataSaverOn(): boolean {
  try {
    return typeof navigator !== 'undefined' && Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
  } catch {
    return false;
  }
}
