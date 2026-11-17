/**
 * The speed a learner chose for the Dutch they hear: from as it is (1) to a quarter (the slider's
 * left end). One value for the whole app, kept while the app is open, from card to card ("Hoe zeg
 * je het?", the owner's request of 4 November 2026; and the cards with a Dutch line whose words
 * light up, 17 November 2026). It lived in src/components/KlankCard.tsx; the numbers did not change.
 *
 * Not saved between visits: a learner starts at normal speed again, as before.
 */
export const SPEED_MIN = 0.25;
export const SPEED_STEP = 0.05;

let speed = 1;
const listeners = new Set<() => void>();

/** The chosen speed now. */
export function getSpeakSpeed(): number {
  return speed;
}

/** Choose a speed (held between SPEED_MIN and 1; anything that is no number is ignored). */
export function setSpeakSpeed(next: number): void {
  if (!Number.isFinite(next)) return;
  const held = Math.min(1, Math.max(SPEED_MIN, next));
  if (held === speed) return;
  speed = held;
  listeners.forEach((fn) => fn());
}

/** Told when the speed changes. Returns an unsubscribe. */
export function onSpeakSpeed(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

/** The speed as shown beside the slider: 1×, ¾×, ½×, ¼× (and .6× between). */
export function speedLabel(v: number): string {
  const named: Record<string, string> = { '1': '1×', '0.75': '¾×', '0.5': '½×', '0.25': '¼×' };
  const key = String(Math.round(v * 100) / 100);
  return named[key] ?? `${key.replace(/^0/, '')}×`;
}
