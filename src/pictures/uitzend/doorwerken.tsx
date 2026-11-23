import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "doorwerken": to keep working (at the same place). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.doorwerken': placeholder('▶️', 'uitzend'),
} as Record<string, () => JSX.Element>;
