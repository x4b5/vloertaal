import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het nachtslot": the deadlock (the extra lock for the night). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.nachtslot': placeholder('🌙', 'facilitair'),
} as Record<string, () => JSX.Element>;
