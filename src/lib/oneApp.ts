import { KEYS } from './storageKeys';

/**
 * "Eén app" (docs/sporen.md, fase 1 en 2): the help language apart from what the learner learns.
 * With it on:
 *  - a topic of the language course shows its work-rules twin's lessons ("Zo werkt het hier", in
 *    plain Dutch with a voice), playable without leaving the language course (Route.tsx TopicPage);
 *  - "Herhaal vandaag" brings back rule questions too (src/lib/oneReview.ts);
 *  - the help language is one row in Settings, with "Geen: ik spreek Nederlands" as a choice, not a
 *    separate question "Wat wil je leren?";
 *  - the offer at 80% of the course leads to those lessons instead of a switch of track;
 *  - the coach card says what was said at work and what is still hard;
 *  - a rule card shows its title and "Onthoud" in the help language where it is translated
 *    (src/i18n/regels: Polish, Romanian, Bulgarian), under the Dutch.
 *
 * OFF on vloertaal.nl until the owner turns it on (ONE_APP_LIVE): the pilot runs, and the
 * translated rules wait for the legal check (docs/juridische-check.md). A tester or coach switches it
 * on for one phone with vloertaal.nl/?nieuw=1 (remembered on that phone) and off with ?nieuw=0.
 */
export const ONE_APP_LIVE: boolean = false;

const KEY = KEYS.oneApp;
let forced: boolean | null = null;

/** Tests and screenshots: on, off, or back to the phone's own switch (null). */
export function setOneApp(on: boolean | null): void {
  forced = on;
}

/** ?nieuw=1 switches it on for this phone, ?nieuw=0 off. Called once at the start (main.tsx). */
export function readOneAppParam(search: string): void {
  const v = new URLSearchParams(search).get('nieuw');
  if (v === null) return;
  try {
    localStorage.setItem(KEY, v === '0' ? '0' : '1');
  } catch {
    // Blocked storage: then only ONE_APP_LIVE decides.
  }
}

/** Is "Eén app" on for this phone? */
export function oneAppOn(): boolean {
  if (forced !== null) return forced;
  if (ONE_APP_LIVE) return true;
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}
