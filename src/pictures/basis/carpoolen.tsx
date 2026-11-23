import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "carpoolen": to carpool (drive to work together in one car). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.carpoolen': placeholder('🚙', 'basis'),
} as Record<string, () => JSX.Element>;
