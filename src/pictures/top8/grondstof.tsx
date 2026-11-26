import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de grondstof": the raw material (what you make the product from). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.grondstof': placeholder('🪣', 'top8'),
} as Record<string, () => JSX.Element>;
