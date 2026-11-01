import { useEffect, useState, type RefObject } from 'react';

/**
 * Showing how, once: the first time a learner meets a kind of exercise whose way of answering is
 * not obvious (building a sentence with tiles, matching pairs, typing with letter tiles), a hand
 * moves to the first right tile and taps it twice, without words. It does not answer: the
 * learner taps. Shown once per kind, on this phone; a tap anywhere ends it.
 *
 * Why: test and task formats are learned conventions, read differently by learners with little
 * schooling than designers expect (Altherr Flores); digital skills are a threshold for them
 * (Lezen & Schrijven). reports/Leerwetenschap en tweede taal.md, voorstel 10.
 *
 * The exercise marks its first right tile with `data-demo` (src/components/Exercises.tsx). With
 * the calm screen or reduced motion the hand stands still on the tile (the global rule stops it).
 */
export type HowKind = 'build' | 'match' | 'type';

const KEY = 'vloertaal:shown-how';
let memory: string[] = [];

function shown(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '[]') as unknown;
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return memory;
  }
}

function markShown(kind: HowKind): void {
  const next = [...new Set([...shown(), kind])];
  memory = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Private mode: once for this visit.
  }
}

/** Has this kind been shown on this phone? */
export const howShown = (kind: HowKind) => shown().includes(kind);

/** How long the hand stays (ms): two taps, then it goes. */
export const SHOW_HOW_MS = 3200;
/** Wait for the exercise to settle (its entrance, the word said) before the hand comes. */
const SHOW_HOW_DELAY = 700;

export function ShowHow({ kind, root }: { kind: HowKind | null; root: RefObject<HTMLElement | null> }) {
  const [at, setAt] = useState<{ x: number; y: number } | null>(null);
  useEffect(() => {
    if (!kind || howShown(kind)) return undefined;
    let alive = true;
    const hide = () => setAt(null);
    const start = window.setTimeout(() => {
      const el = root.current?.querySelector<HTMLElement>('[data-demo]');
      if (!alive || !el) return;
      const r = el.getBoundingClientRect();
      setAt({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      markShown(kind);
      window.addEventListener('pointerdown', hide, { once: true });
    }, SHOW_HOW_DELAY);
    const end = window.setTimeout(hide, SHOW_HOW_DELAY + SHOW_HOW_MS);
    return () => {
      alive = false;
      window.clearTimeout(start);
      window.clearTimeout(end);
      window.removeEventListener('pointerdown', hide);
    };
  }, [kind, root]);
  if (!at) return null;
  return (
    <span className="show-how" style={{ left: at.x, top: at.y }} aria-hidden>
      <span className="show-how-ring" />
      <svg className="show-how-hand" viewBox="0 0 48 56" width="48" height="56" focusable="false">
        {/* A pointing hand, the fingertip at the top left (the spot it taps). */}
        <path
          d="M10 4c2.8 0 5 2.2 5 5v15.5l1.4-.7c2.4-1.2 5.3-.3 6.5 2l.3.6 1.7-.6c2.4-.8 5 .3 6 2.6l.2.5 1.5-.4c2.6-.6 5.2 1 5.8 3.6l2.5 11c1.4 6.3-2.6 12.5-8.9 13.9l-6.4 1.4c-4.4 1-9-.7-11.7-4.3L4.2 39.6c-1.5-2-1.1-4.9.9-6.4 1.6-1.2 3.8-1.2 5.4 0V9c0-2.8-1.3-5 .5-5z"
          fill="#fffaf0" stroke="#26211c" strokeWidth="2.6" strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
