import { useSyncExternalStore } from 'react';
import { getSpeakSpeed, onSpeakSpeed, setSpeakSpeed } from '../lib/speakSpeed';

/**
 * The chosen speed of the Dutch (src/lib/speakSpeed.ts) and a way to change it. Every card that
 * uses it shows the same value, also two at once on one screen.
 */
export function useSpeakSpeed(): [number, (v: number) => void] {
  const speed = useSyncExternalStore(onSpeakSpeed, getSpeakSpeed, getSpeakSpeed);
  return [speed, setSpeakSpeed];
}
