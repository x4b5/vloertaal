import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "volcontinu": around the clock (the plant runs day and night, every day of the week). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.volcontinu': placeholder('🕛', 'proces'),
} as Record<string, () => JSX.Element>;
