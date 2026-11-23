import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de gluten": the gluten (in wheat, so in bread and cake). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.gluten': placeholder('🌾', 'voeding'),
} as Record<string, () => JSX.Element>;
