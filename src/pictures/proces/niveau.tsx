import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het niveau": the level (how full a tank or a silo is). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.niveau': placeholder('📶', 'proces'),
} as Record<string, () => JSX.Element>;
