import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
import { ChevronDownIcon } from './Icons';
import { stillMotion } from '../lib/calm';

/**
 * A framed box that scrolls inside, with its own scroll bar that is always there (a phone hides
 * its scroll bar until you scroll, so a long list does not look like it goes on). The owner's
 * request, 2 November 2026: the list of languages as a clear menu with a scroll bar.
 *
 * - The bar shows where you are in the list; drag it, or tap above or below its handle to page.
 * - While there is more below: the rows fade out at the bottom and a round arrow sits on the
 *   bottom edge (it bobs twice on arrival). Tapping it scrolls on; at the end it is gone.
 * - The page itself does not scroll (styles: .scroll-box), so there is one thing that scrolls.
 */
export function ScrollBox({ children, className = '', moreLabel, moreLang = 'en', reveal }: {
  children: ReactNode;
  className?: string;
  /** The arrow's name for a screen reader ("More languages"). */
  moreLabel: string;
  /** The language of that name (English on the first run, before a language is chosen). */
  moreLang?: string;
  /** On opening, scroll so the first element matching this selector is in view (the chosen one). */
  reveal?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState(false);
  const [more, setMore] = useState(false);
  // The handle moves with every scroll: set straight on the box (no re-render per frame).
  const measure = useCallback(() => {
    const el = scroller.current;
    const host = box.current;
    if (!el || !host) return;
    const room = el.scrollHeight - el.clientHeight;
    const scrolls = room > 1;
    host.style.setProperty('--thumb-size', String(scrolls ? el.clientHeight / el.scrollHeight : 1));
    host.style.setProperty('--thumb-at', String(scrolls ? Math.min(1, Math.max(0, el.scrollTop / room)) : 0));
    setBar(scrolls);
    setMore(scrolls && el.scrollTop < room - 8);
  }, []);
  // The chosen row in the middle of the box on opening (Settings: your language is in view).
  useEffect(() => {
    const el = scroller.current;
    const row = reveal ? el?.querySelector<HTMLElement>(reveal) : null;
    if (!el || !row) return;
    el.scrollTop = Math.max(0, row.offsetTop - (el.clientHeight - row.offsetHeight) / 2);
  }, [reveal]);
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    // Fonts and pictures that arrive late change the list's height.
    const seen = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    seen?.observe(el);
    if (el.firstElementChild) seen?.observe(el.firstElementChild);
    return () => { el.removeEventListener('scroll', measure); window.removeEventListener('resize', measure); seen?.disconnect(); };
  }, [measure]);
  const smooth = (): ScrollBehavior => (stillMotion() ? 'auto' : 'smooth');
  const scrollOn = () => {
    const el = scroller.current;
    if (el) el.scrollBy({ top: Math.round(el.clientHeight * 0.7), behavior: smooth() });
  };
  // The bar: drag the handle, or tap the track above or below it to move one box-height.
  const drag = useRef<{ y: number; top: number; perPx: number } | null>(null);
  const onBarDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = scroller.current;
    if (!el) return;
    const track = e.currentTarget.getBoundingClientRect();
    const size = Math.max(32, track.height * (el.clientHeight / el.scrollHeight));
    const handleTop = track.top + (track.height - size) * (el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight));
    if (e.clientY < handleTop || e.clientY > handleTop + size) {
      el.scrollBy({ top: (e.clientY < handleTop ? -1 : 1) * Math.round(el.clientHeight * 0.85), behavior: smooth() });
      return;
    }
    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    drag.current = { y: e.clientY, top: el.scrollTop, perPx: (el.scrollHeight - el.clientHeight) / Math.max(1, track.height - size) };
  };
  const onBarMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = scroller.current;
    if (!d || !el) return;
    el.scrollTop = d.top + (e.clientY - d.y) * d.perPx;
  };
  const onBarUp = () => { drag.current = null; };
  return (
    <div ref={box} className={`scroll-box ${bar ? 'has-bar' : ''} ${more ? 'has-more' : ''} ${className}`}>
      <div ref={scroller} className="scroll-box-list">{children}</div>
      {bar && (
        // For the finger and the mouse; a screen reader moves through the buttons themselves.
        <div className="scroll-box-bar" aria-hidden onPointerDown={onBarDown} onPointerMove={onBarMove} onPointerUp={onBarUp} onPointerCancel={onBarUp}>
          <span className="scroll-box-thumb" />
        </div>
      )}
      {more && (
        <button type="button" className="scroll-box-more" onClick={scrollOn} aria-label={moreLabel} lang={moreLang}>
          <ChevronDownIcon size={24} />
        </button>
      )}
    </div>
  );
}
