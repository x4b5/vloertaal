import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de technische dienst": the maintenance department (the TD: they repair the machines). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.technischedienst': placeholder('🛠️', 'proces'),
} as Record<string, () => JSX.Element>;
