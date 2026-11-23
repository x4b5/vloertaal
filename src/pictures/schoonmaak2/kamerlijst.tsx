import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de kamerlijst": the room list (the rooms you must do today). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kamerlijst': placeholder('📋', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
