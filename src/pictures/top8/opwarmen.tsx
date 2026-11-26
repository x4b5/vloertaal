import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "opwarmen": to warm up (in a warm place, after working in the cold). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.opwarmen': placeholder('♨️', 'top8'),
} as Record<string, () => JSX.Element>;
