import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de bijplaatsing": the extra rubbish (bags left next to the bin). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bijplaatsing': placeholder('🛍️', 'afval'),
} as Record<string, () => JSX.Element>;
