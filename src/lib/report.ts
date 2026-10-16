import { CONTACT_EMAIL } from '../content/about';
import type { Access } from './access';
import { type Exercise, isRuleExercise } from './exercises';

/**
 * "Iets melden" for testers: a small flag in the lesson's header that opens a mail to
 * hoi@vloertaal.nl with the place already filled in (lesson, step, the word or sentence, help
 * language, phone, deploy). The tester only writes what they saw (and adds a screenshot).
 *
 * Learners never see it. It is on for:
 *  - the sneak preview ('sample'): that code goes to people who come to look;
 *  - a phone that opened vloertaal.nl/?test once (the mails to experts give that link); ?test=0
 *    switches it off again.
 * It is a tool, not a step of the lesson: like the ✕ it is not one of the three things to tap.
 */

const KEY = 'vloertaal:tester';

/** ?test (or ?test=1) switches tester mode on for this phone, ?test=0 off. Called once at the start. */
export function readTesterParam(search: string): void {
  const v = new URLSearchParams(search).get('test');
  if (v === null) return;
  try {
    if (v === '0') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, '1');
  } catch {
    // Blocked storage: no tester mode (the sneak preview still has it).
  }
}

/** Does this phone show "Iets melden"? */
export function testerMode(access: Access | null | undefined): boolean {
  if (access === 'sample') return true;
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** What a step is about, by id (and the Dutch, so a mail is readable without the source). */
export function exerciseRef(ex: Exercise): string {
  if (isRuleExercise(ex)) return `${ex.kind} ${ex.step.id}`;
  switch (ex.kind) {
    case 'intro':
    case 'meaning':
    case 'dutch':
    case 'listen':
    case 'type':
      return `${ex.kind} ${ex.word.id} (${ex.word.nl})`;
    case 'match':
      return `${ex.kind} ${ex.words.map((w) => w.id).join(', ')}`;
    case 'build':
      return `${ex.kind} ${ex.sentence.id} (${ex.sentence.nl})`;
    case 'chat':
      return `${ex.kind} ${ex.dialogue.prompt.id} (${ex.dialogue.prompt.nl})`;
    case 'tip':
    case 'situation':
      return `${ex.kind} ${ex.tip.id}`;
    case 'saying':
      return `${ex.kind} ${ex.saying.id}`;
    case 'speak':
      return `${ex.kind} ${ex.item.id} (${ex.item.nl})`;
  }
}

/** The phone in a few words: system and browser, from the user agent (nothing that identifies anyone). */
export function deviceLabel(ua: string): string {
  const os = /Android [\d.]+/.exec(ua)?.[0]
    ?? (/iPhone OS ([\d_]+)/.exec(ua) ? `iOS ${/iPhone OS ([\d_]+)/.exec(ua)![1].replace(/_/g, '.')}` : null)
    ?? (/Windows/.test(ua) ? 'Windows' : /Mac OS X/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'onbekend');
  const browser = /SamsungBrowser\/[\d.]+/.exec(ua)?.[0]
    ?? /(?:Edg|EdgA)\/\d+/.exec(ua)?.[0]
    ?? /Firefox\/\d+/.exec(ua)?.[0]
    ?? /(?:Chrome|CriOS)\/\d+/.exec(ua)?.[0]
    ?? (/Safari\//.test(ua) ? 'Safari' : 'onbekend');
  return `${os} · ${browser}`;
}

export interface ReportPlace {
  lessonId: string;
  /** The lesson's title as the tester sees it (help language) and in Dutch. */
  title: string;
  /** 0-based step and the number of steps now (with mistakes queued again). */
  step: number;
  steps: number;
  exercise: Exercise;
  /** Help-language code, or null for English only. */
  lang: string | null | undefined;
  device: string;
  build: string;
}

/** The mailto: link for one place in a lesson. Dutch: the testers write in Dutch. */
export function reportMail(p: ReportPlace): string {
  const subject = `Melding: ${p.title} (stap ${p.step + 1})`;
  const body = [
    'Wat zag je? Een schermfoto helpt.',
    '',
    '',
    '',
    '--- Laat dit staan: zo vinden we de plek ---',
    `Les: ${p.lessonId} · ${p.title}`,
    `Stap: ${p.step + 1} van ${p.steps}`,
    `Oefening: ${exerciseRef(p.exercise)}`,
    `Hulptaal: ${p.lang ?? 'en'}`,
    `Telefoon: ${p.device}`,
    `Versie: ${p.build}`,
  ].join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const HINT_KEY = 'vloertaal:report-hint';

/** The first time on this phone the flag shows: say what it is for (once; then remembered). */
export function firstReportHint(): boolean {
  try {
    if (localStorage.getItem(HINT_KEY)) return false;
    localStorage.setItem(HINT_KEY, '1');
    return true;
  } catch {
    return false;
  }
}
