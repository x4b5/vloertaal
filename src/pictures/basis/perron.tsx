import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het perron": the platform (where you get on the train). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.perron': placeholder('🛤️', 'basis'),
} as Record<string, () => JSX.Element>;
