import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de shovel": the wheel loader (a big machine with a bucket in front). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.shovel': placeholder('🚜', 'afval'),
} as Record<string, () => JSX.Element>;
