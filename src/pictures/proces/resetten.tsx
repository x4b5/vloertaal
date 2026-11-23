import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "resetten": to reset (to clear a fault on the screen or the panel). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.resetten': placeholder('🔃', 'proces'),
} as Record<string, () => JSX.Element>;
