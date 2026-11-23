import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de kerntemperatuur": the core temperature (the temperature inside the food). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kerntemperatuur': placeholder('🔥', 'voeding'),
} as Record<string, () => JSX.Element>;
