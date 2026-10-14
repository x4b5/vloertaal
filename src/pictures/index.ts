import { createElement, isValidElement, type CSSProperties, type JSX } from 'react';
import type { CharacterId } from '../components/Characters';
import { Bust } from './kit';
import group1 from './group1';
import group2 from './group2';
import group3 from './group3';
import group4 from './group4';
import group5 from './group5';
import group6 from './group6';
import group7 from './group7';
import group8 from './group8';
import group9 from './group9';
import group10 from './group10';
import group11 from './group11';
import group12 from './group12';
import group13 from './group13';
import group14 from './group14';
import units from './units';
import icons from './icons';

/**
 * Original word pictures (flat vector, in the cast's style; see docs/tekenstijl.md).
 * Each picture is a function returning the inside of a 120 x 120 <svg>; WordPicture wraps it.
 */
export const pictures: Record<string, () => JSX.Element> = {
  ...group1,
  ...group2,
  ...group3,
  ...group4,
  ...group5,
  ...group6,
  ...group7,
  ...group8,
  ...group9,
  ...group10,
  ...group11,
  ...group12,
  ...group13,
  ...group14,
};

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
  const draw = pictures[id] ?? iconPictures[id];
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
