/**
 * The screens that follow a lesson's result, as one list made once (docs/overzicht.md, "Na de
 * uitslag"). Before 11 November 2026 every screen on the way carried what still had to come
 * (`streakUp`, `cert`, `fromCert`) and worked out the next one itself, in six places of App.tsx.
 *
 * The order is the list's order: "Certificaat behaald" (the lesson finished a topic), then the
 * day-streak milestone (the streak went up). A screen opened from one of them on the way (the
 * emergency phrases or "Oefen samen" from the result; the certificate, the pocket card or "Voor
 * je collega" from "Certificaat behaald") takes that screen's place and passes the rest on.
 * After the last one App.tsx goes home, or to the reminder offer (afterLesson there).
 */
export type AfterStep =
  /** "Certificaat behaald" for this topic. */
  | { name: 'cert-earned'; unit: string }
  /** The day-streak milestone: the streak reached this number with this lesson. */
  | { name: 'streak'; streak: number };

/** What follows the result of a lesson: `cert` the topic it finished, `streakUp` the streak it raised. */
export function afterLessonSteps(done: { cert?: string; streakUp?: number }): AfterStep[] {
  return [
    ...(done.cert ? [{ name: 'cert-earned', unit: done.cert } as const] : []),
    ...(done.streakUp ? [{ name: 'streak', streak: done.streakUp } as const] : []),
  ];
}

/** The next screen and what is left after it, or null: the list is done. */
export function nextAfter(after: readonly AfterStep[] | undefined): { next: AfterStep; rest: AfterStep[] } | null {
  if (!after?.length) return null;
  const [next, ...rest] = after;
  return { next, rest };
}
