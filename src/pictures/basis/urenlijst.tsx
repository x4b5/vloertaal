import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de urenlijst": the list of hours (where you write the hours you worked). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.urenlijst': placeholder('📝', 'basis'),
} as Record<string, () => JSX.Element>;
