import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het schriftje": the notebook (for notes between parents and staff). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.schriftje': placeholder('📒', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
