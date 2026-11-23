import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "meerijden": to ride along (in someone else’s car). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.meerijden': placeholder('🚘', 'basis'),
} as Record<string, () => JSX.Element>;
