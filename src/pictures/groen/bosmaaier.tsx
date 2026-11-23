import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de bosmaaier": the brush cutter (a mower on a long stick). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bosmaaier': placeholder('🪓', 'groen'),
} as Record<string, () => JSX.Element>;
