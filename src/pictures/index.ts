import { createElement, type CSSProperties, type JSX } from 'react';
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
import units from './units';

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
};

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
  const draw = pictures[id];
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
