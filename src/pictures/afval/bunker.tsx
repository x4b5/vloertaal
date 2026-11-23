import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de bunker": the bay (a big concrete space for one kind of waste). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bunker': placeholder('🏗️', 'afval'),
} as Record<string, () => JSX.Element>;
