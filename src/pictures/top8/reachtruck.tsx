import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de reachtruck": the reach truck (a forklift for very high racks; its forks reach forward). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.reachtruck': placeholder('🏗️', 'top8'),
} as Record<string, () => JSX.Element>;
