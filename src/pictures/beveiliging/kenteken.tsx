import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het kenteken": the registration number (the letters and numbers of a car). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kenteken': placeholder('🚗', 'beveiliging'),
} as Record<string, () => JSX.Element>;
