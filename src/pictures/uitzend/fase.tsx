import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de fase": the phase (a step in your agency contract: A, B or C). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.fase': placeholder('🅰️', 'uitzend'),
} as Record<string, () => JSX.Element>;
