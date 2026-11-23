import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het buurthuis": the community centre (a house for activities in your neighbourhood). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.buurthuis': placeholder('🏬', 'basis'),
} as Record<string, () => JSX.Element>;
