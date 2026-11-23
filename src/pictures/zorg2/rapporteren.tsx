import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "rapporteren": to report (to write down what you saw, in the care file). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.rapporteren': placeholder('🖊️', 'zorg2'),
} as Record<string, () => JSX.Element>;
