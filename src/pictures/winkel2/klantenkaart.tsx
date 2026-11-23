import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de klantenkaart": the customer card (a card to save points). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.klantenkaart': placeholder('🎴', 'winkel2'),
} as Record<string, () => JSX.Element>;
