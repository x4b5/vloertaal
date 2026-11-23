import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het grofvuil": the bulky waste (big things, like a sofa). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.grofvuil': placeholder('🛋️', 'afval'),
} as Record<string, () => JSX.Element>;
