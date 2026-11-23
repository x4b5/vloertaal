import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de lunchpauze": the lunch break. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.lunchpauze': placeholder('🥪', 'basis'),
} as Record<string, () => JSX.Element>;
