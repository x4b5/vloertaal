import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het gft": the food and garden waste (fruit, vegetables and plants). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.gft': placeholder('🍂', 'afval'),
} as Record<string, () => JSX.Element>;
