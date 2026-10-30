import { useEffect, type RefObject } from 'react';

type Doc = Pick<Document, 'activeElement' | 'body'>;

/** The focus is nowhere: on <body> (the button that had it is gone), or on a button that went disabled. */
export function focusIsLost(doc: Doc = document): boolean {
  const a = doc.activeElement as HTMLElement | null;
  return !a || a === doc.body || a.isConnected === false || (a as HTMLButtonElement).disabled === true;
}

/**
 * When the focus is lost: put it on the first `target` in `box` (a heading gets tabindex -1, so it
 * can take the focus without becoming a Tab stop). Returns the element that got it, or null.
 */
export function refocusIfLost(box: Pick<HTMLElement, 'querySelector'> | null, target: string, doc: Doc = document): HTMLElement | null {
  if (!focusIsLost(doc)) return null;
  const el = box?.querySelector<HTMLElement>(target);
  if (!el) return null;
  if (!el.matches('button, a[href], input, select, textarea') && !el.hasAttribute('tabindex')) el.tabIndex = -1;
  el.focus({ preventScroll: true });
  return el;
}

/**
 * A page that changes in place (a step of its own, not a new screen of App.tsx): when the button
 * that was used is gone, the focus goes to `target` inside `box` (default: the page's heading), so
 * the keyboard and a screen reader go on from there and not from the top of the page (WCAG 2.4.3).
 * A focus that is still somewhere (a field, a button that stayed) is left alone. Runs when `key`
 * changes, a moment later (the new page may draw its buttons one tick after).
 */
export function useFocusWhenLost(box: RefObject<HTMLElement | null>, key: unknown, target = 'h1, h2') {
  useEffect(() => {
    const t = window.setTimeout(() => { refocusIfLost(box.current, target); }, 0);
    return () => window.clearTimeout(t);
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
}
