import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de smeltoven": the furnace (a very hot oven that melts glass or metal). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.smeltoven': placeholder('🌋', 'proces'),
} as Record<string, () => JSX.Element>;
