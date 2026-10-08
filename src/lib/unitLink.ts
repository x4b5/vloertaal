import { units } from '../content/curriculum';

/**
 * Coach links: "?unit=<slug>" (e.g. ?unit=pay) opens the path at that unit, so a coach can send
 * a learner straight to one topic. Every unit can be entered at its first lesson (isUnlocked).
 */
export const unitLink = (unitId: string): string =>
  `${location.origin}${location.pathname}?unit=${encodeURIComponent(unitId.slice(2))}`;

/** The unit a link asks for (its id, e.g. 'u.pay'), or null. */
export function unitFromSearch(search: string): string | null {
  const slug = new URLSearchParams(search).get('unit');
  if (!slug) return null;
  const id = `u.${slug.trim().toLowerCase()}`;
  return units.some((u) => u.id === id) ? id : null;
}

/** Reads the link once and takes it out of the address, so a reload or a shared screen does not repeat it. */
export function takeLinkedUnit(): string | null {
  const id = unitFromSearch(location.search);
  if (location.search.includes('unit=')) {
    const params = new URLSearchParams(location.search);
    params.delete('unit');
    const rest = params.toString();
    history.replaceState(history.state, '', `${location.pathname}${rest ? `?${rest}` : ''}${location.hash}`);
  }
  return id;
}
