import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "vacuüm": vacuum-packed (all the air is out). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vacuum': placeholder('🫙', 'voeding'),
} as Record<string, () => JSX.Element>;
