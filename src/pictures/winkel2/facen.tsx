import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "facen": to face up (to pull the products to the front, label forward). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.facen': placeholder('🔝', 'winkel2'),
} as Record<string, () => JSX.Element>;
