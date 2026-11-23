import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de vaatwaskorf": the dish rack (the basket that goes into the dishwasher). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vaatwaskorf': placeholder('🧺', 'horeca2'),
} as Record<string, () => JSX.Element>;
