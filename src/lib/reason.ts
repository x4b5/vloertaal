import type { UiKey } from '../i18n/types';
import type { Progress } from './progress';

/**
 * "Waarom leer jij Nederlands?": the learner's own reason (the owner's request, 8 November 2026).
 * In the spirit of motivational interviewing: the app does not tell why Dutch matters, it asks,
 * and later gives the learner's own words back at a moment of doubt (back after a pause). Pictures
 * to tap, no typing (A0). Asked once, on the home after a few lessons, not in the first run (it
 * stays short). On this phone only: not in the backup, gone with "Voortgang wissen".
 */
export const REASONS = [
  { id: 'work', emoji: '👷', nl: 'Mijn werk goed doen', key: 'reasonWork' },
  { id: 'kids', emoji: '👨‍👧', nl: 'Mijn kinderen', key: 'reasonKids' },
  { id: 'colleagues', emoji: '🤝', nl: 'Praten met collega’s', key: 'reasonColleagues' },
  { id: 'arrange', emoji: '✉️', nl: 'Zelf dingen regelen', key: 'reasonArrange' },
  { id: 'job', emoji: '📈', nl: 'Een betere baan', key: 'reasonJob' },
  { id: 'home', emoji: '🏠', nl: 'Me thuis voelen in Nederland', key: 'reasonHome' },
] as const satisfies readonly { id: string; emoji: string; nl: string; key: UiKey }[];

export type ReasonId = (typeof REASONS)[number]['id'];

/** One or two: enough to be one's own, few enough to remember. */
export const MAX_REASONS = 2;
/** Finished lessons before the card comes. */
export const REASON_AFTER = 3;

const KNOWN = new Set<string>(REASONS.map((r) => r.id));

/** The reasons that can be read: known ones, each once, at most MAX_REASONS. */
export function readReasons(v: unknown): ReasonId[] | undefined {
  if (!Array.isArray(v)) return undefined;
  const ids = [...new Set(v.filter((x): x is ReasonId => typeof x === 'string' && KNOWN.has(x)))].slice(0, MAX_REASONS);
  return ids.length ? ids : undefined;
}

type ReasonState = Pick<Progress, 'reasonAsked'>;

/** The card on the home: after REASON_AFTER lessons, until it is answered or put off. */
export function reasonDue(p: ReasonState, lessonsDone: number): boolean {
  return !p.reasonAsked && lessonsDone >= REASON_AFTER;
}

/** The progress after the card: the chosen reasons (none = "Later"); it does not come back. */
export function withReasons<P extends Pick<Progress, 'reasons' | 'reasonAsked'>>(p: P, ids: readonly ReasonId[]): P {
  const reasons = readReasons(ids);
  const { reasons: _old, ...rest } = p;
  return { ...rest, ...(reasons ? { reasons } : {}), reasonAsked: true } as P;
}
