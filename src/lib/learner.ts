import type { UiCode } from '../i18n/types';
import { oneAppOn } from './oneApp';
import { type Track, isRules, trackOf } from './track';

/**
 * The learner's "passport": what this learner gets, worked out in one place (docs/overzicht.md,
 * "Wie krijgt wat"). The rule behind it today: the help language decides the course ('nl' is the
 * work rules, src/lib/track.ts), and "Eén app" (src/lib/oneApp.ts) adds the work rules to the
 * language course.
 *
 * A screen asks the passport a question ("does this learner practise speaking?") and does not
 * conclude it from the track itself. So when the rule changes ("Eén app" for everyone, a help
 * language beside the work rules), it changes here, not in every screen. Until 12 November 2026
 * the question "which track?" stood in 48 files; they move here file by file (App.tsx first).
 */
export interface Learner {
  /** The course whose topics, lessons and progress are theirs (the lists and the path are per course). */
  track: Track;
  /** Learns Dutch itself: words, sentences and chats, with a pace, speaking practice, "Oefen samen" and words that stay. */
  learnsDutch: boolean;
  /** Their course is the work rules: stories, rule cards, "wat doe je?". */
  learnsRules: boolean;
  /** Reads the app in Dutch only, without a help language. */
  readsDutch: boolean;
  /** "Zo werkt het hier": the work-rules lessons beside the topics of the language course ("Eén app"). */
  rulesBeside: boolean;
  /** What "Herhaal vandaag" brings back: words, rule questions, or both. */
  review: 'words' | 'rules' | 'both';
  /** The Hulp tab: the emergency phrases and tips, or "Wie bel je?" with the rule cards. */
  help: 'phrases' | 'whoToCall';
}

/**
 * The passport's first question on its own, for code that needs only this one (a moment that is
 * only for the language course: the test, the short check, the offer of the work rules).
 */
export const learnsDutch = (p: { helpLang?: UiCode | null }): boolean => !isRules(p);

/** The passport of the learner with this help language. `oneApp`: "Eén app" on for this phone. */
export function learnerOf(p: { helpLang?: UiCode | null }, oneApp: boolean = oneAppOn()): Learner {
  const track = trackOf(p);
  const learnsRules = !learnsDutch(p);
  const rulesBeside = oneApp && !learnsRules;
  return {
    track,
    learnsDutch: !learnsRules,
    learnsRules,
    readsDutch: learnsRules,
    rulesBeside,
    review: learnsRules ? 'rules' : rulesBeside ? 'both' : 'words',
    help: learnsRules ? 'whoToCall' : 'phrases',
  };
}
