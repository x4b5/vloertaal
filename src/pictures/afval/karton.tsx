import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het karton": the cardboard. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.karton': placeholder('📦', 'afval'),
} as Record<string, () => JSX.Element>;
