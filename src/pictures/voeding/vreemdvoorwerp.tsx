import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het vreemde voorwerp": the foreign body (something in the food that does not belong there). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vreemdvoorwerp': placeholder('🔩', 'voeding'),
} as Record<string, () => JSX.Element>;
