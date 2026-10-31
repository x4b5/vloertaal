import { createElement, isValidElement, useSyncExternalStore, type CSSProperties, type JSX } from 'react';
import type { CharacterId } from '../components/Characters';
import { Bust } from './kit';
import units from './units';
import icons from './icons';
import { pictureIdOf } from '../content/taalBe/ids';

/**
 * Original word pictures (flat vector, in the cast's style; see docs/tekenstijl.md).
 * Each picture is a function returning the inside of a 120 x 120 <svg>; WordPicture wraps it.
 *
 * They are about a third of the app's code, so they come in a file of their own (./words.ts),
 * loaded right after the start (loadPictures, from src/main.tsx) while the learner picks a
 * language. The app waits for them before any screen with pictures (App.tsx), and a picture
 * drawn before then is an empty square of its size, never a different picture.
 */
export let pictures: Record<string, () => JSX.Element> = {};
let picturesUrl: string | undefined;
let loading: Promise<void> | undefined;
const waiting = new Set<() => void>();

export function picturesLoaded(): boolean {
  return picturesUrl !== undefined;
}

/** Loads the word pictures (once; again after a failure). */
export function loadPictures(): Promise<void> {
  if (picturesUrl !== undefined) return Promise.resolve();
  loading ??= import('./words').then(
    (m) => {
      pictures = m.default;
      picturesUrl = m.url;
      waiting.forEach((fn) => fn());
    },
    (e) => {
      loading = undefined;
      throw e;
    },
  );
  return loading;
}

/** The pictures' file, when loaded on this visit (saved with the app for offline use). */
export function loadedPicturesUrl(): string | undefined {
  return picturesUrl && /^https?:/.test(picturesUrl) ? picturesUrl : undefined;
}

const subscribe = (fn: () => void) => {
  waiting.add(fn);
  return () => { waiting.delete(fn); };
};

/** Re-renders when the pictures arrive. */
export function usePicturesLoaded(): boolean {
  return useSyncExternalStore(subscribe, picturesLoaded, picturesLoaded);
}

/** Own unit icons for abstract topics (i.*), next to the word pictures in WordPicture. */
export const iconPictures: Record<string, () => JSX.Element> = icons;

/** Pictures for the coloured unit banners, keyed by unit id. */
export const unitPictures: Record<string, () => JSX.Element> = units;

/**
 * The picture for a word: the SVG when there is one, else the word's emoji (in the app's
 * emoji font). `size` is the width and height in px.
 */
export function WordPicture({ id, emoji, size = 96, className }: {
  id: string;
  emoji: string;
  size?: number;
  className?: string;
}): JSX.Element {
  const ready = usePicturesLoaded();
  // A Belgian word that keeps its Dutch twin's drawing ("de refter": src/content/taalBe/ids.ts).
  const draw = pictures[pictureIdOf(id)] ?? iconPictures[id];
  if (!draw && !ready) {
    // Not here yet: an empty square of the same size (no emoji that would then change).
    return createElement('span', { className: `word-pic word-pic-wait ${className ?? ''}`, 'aria-hidden': true, style: { display: 'inline-block', width: size, height: size } });
  }
  if (!draw) {
    const style: CSSProperties = { fontSize: Math.round(size * 0.8), lineHeight: 1, width: size, height: size };
    return createElement('span', { className: `word-pic word-emoji ${className ?? ''}`, 'aria-hidden': true, style }, emoji);
  }
  return createElement(
    'svg',
    {
      className: `word-pic ${className ?? ''}`,
      viewBox: '0 0 120 120',
      width: size,
      height: size,
      'aria-hidden': true,
      focusable: 'false',
    },
    createElement(draw),
  );
}

/**
 * The cast member a picture shows (the biggest bust in it), or undefined when it shows none.
 * Used so a speaker matches the face in the picture (the speaking exercise's model voice).
 * Reads the picture's element tree only; nothing is rendered.
 */
export function pictureCast(id: string): CharacterId | undefined {
  const draw = pictures[id];
  if (!draw) return undefined;
  let best: { who: CharacterId; scale: number } | undefined;
  const walk = (node: unknown): void => {
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (!isValidElement(node)) return;
    const props = node.props as { who?: CharacterId; scale?: number; children?: unknown };
    if (node.type === Bust && props.who) {
      const scale = props.scale ?? 0.7;
      if (!best || scale > best.scale) best = { who: props.who, scale };
    }
    walk(props.children);
  };
  try {
    walk(draw());
  } catch {
    return undefined; // A picture that needs to render (hooks) to show its people: no match.
  }
  return best?.who;
}
