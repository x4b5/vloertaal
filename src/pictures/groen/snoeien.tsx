import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "snoeien": to prune (to cut branches off a plant). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.snoeien': placeholder('🌿', 'groen'),
} as Record<string, () => JSX.Element>;
