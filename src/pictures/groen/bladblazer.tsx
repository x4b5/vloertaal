import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de bladblazer": the leaf blower. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bladblazer': placeholder('🌬️', 'groen'),
} as Record<string, () => JSX.Element>;
