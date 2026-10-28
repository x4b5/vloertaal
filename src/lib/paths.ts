/** The addresses of the plain pages that other pages link to (kept apart so the pages do not import each other). */
export const RULES_PATH = '/werkregels/';
export const COACH_PATH = '/voor-begeleiders/';
export const TOPICS_PATH = '/onderwerpen/';

/** The app's link to a topic (src/lib/unitLink.ts): "?unit=pay" for u.pay. */
export const appLink = (unitId: string) => `/?unit=${encodeURIComponent(unitId.slice(2))}`;
