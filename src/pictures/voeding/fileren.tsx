import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "fileren": to fillet (to cut fish or meat into flat pieces). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.fileren': placeholder('🐟', 'voeding'),
} as Record<string, () => JSX.Element>;
