import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de baal": the bale (a pressed block of paper or plastic). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.baal': placeholder('🟫', 'afval'),
} as Record<string, () => JSX.Element>;
