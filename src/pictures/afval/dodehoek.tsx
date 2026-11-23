import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de dode hoek": the blind spot (where the driver cannot see you). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.dodehoek': placeholder('🙈', 'afval'),
} as Record<string, () => JSX.Element>;
