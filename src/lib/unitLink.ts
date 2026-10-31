import { units } from '../content/curriculum';
import { trackOfId } from './track';

/**
 * Coach links: "?unit=<slug>" (e.g. ?unit=pay) opens the path at that unit, so a coach can send
 * a learner straight to one topic. Every unit can be entered at its first lesson (isUnlocked).
 * A unit of the work-rules track keeps its whole id (?unit=r.pay), so it never clashes with the
 * Dutch course's "pay".
 */
export const unitLink = (unitId: string): string =>
  `${location.origin}${location.pathname}?unit=${encodeURIComponent(trackOfId(unitId) === 'regels' ? unitId : unitId.slice(2))}`;

/**
 * A rules unit's id as a link gives it. The rules course loads with its own file (after the
 * link is read), so only the form is checked here; a unit that is not there is left alone later.
 */
const RULES_ID = /^r\.(be\.)?[a-z]+$/;

/** Is this a unit a link may name: a unit of the Dutch course, or a well-formed rules unit id. */
const knownUnit = (id: string) => (trackOfId(id) === 'regels' ? RULES_ID.test(id) : units.some((u) => u.id === id));

/** The unit a link asks for (its id, e.g. 'u.pay' or 'r.pay'), or null. */
export function unitFromSearch(search: string): string | null {
  const slug = new URLSearchParams(search).get('unit');
  if (!slug) return null;
  const s = slug.trim().toLowerCase();
  const id = s.startsWith('r.') ? s : `u.${s}`;
  return knownUnit(id) ? id : null;
}

const KEY = 'vloertaal.linkedUnit';

/** Keeps the linked unit on this phone until the path has shown it (the first run may be reloaded). */
export function rememberLinkedUnit(id: string): void {
  try {
    localStorage.setItem(KEY, id);
  } catch {
    // Blocked storage: the link lasts until the page is closed.
  }
}

/** The linked unit kept by rememberLinkedUnit, or null. */
export function rememberedLinkedUnit(): string | null {
  try {
    const id = localStorage.getItem(KEY);
    return id && knownUnit(id) ? id : null;
  } catch {
    return null;
  }
}

/** The path has shown the linked unit (or a locked one was offered): forget it. */
export function forgetLinkedUnit(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // Blocked storage: nothing was kept.
  }
}

/**
 * Reads the link once and takes it out of the address, so a shared screen does not repeat it. The
 * unit is kept in storage until the path has shown it: a reload during the first run (language,
 * password, sector) still lands on it. Without a link in the address: the kept one, if any.
 */
export function takeLinkedUnit(): string | null {
  const id = unitFromSearch(location.search);
  if (location.search.includes('unit=')) {
    const params = new URLSearchParams(location.search);
    params.delete('unit');
    const rest = params.toString();
    history.replaceState(history.state, '', `${location.pathname}${rest ? `?${rest}` : ''}${location.hash}`);
  }
  if (id) {
    rememberLinkedUnit(id);
    return id;
  }
  return rememberedLinkedUnit();
}
