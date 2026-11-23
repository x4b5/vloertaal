import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "maaien": to mow (to cut grass). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.maaien': placeholder('🌾', 'groen'),
} as Record<string, () => JSX.Element>;
