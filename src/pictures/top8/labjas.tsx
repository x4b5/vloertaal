import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de labjas": the lab coat. PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.labjas': placeholder('🥼', 'top8'),
} as Record<string, () => JSX.Element>;
