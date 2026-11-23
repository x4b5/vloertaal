import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de papierbak": the paper bin (for old paper). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.papierbak': placeholder('📰', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
