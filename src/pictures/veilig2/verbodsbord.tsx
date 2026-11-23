import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het verbodsbord": the prohibition sign. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.verbodsbord': placeholder('🚫', 'veilig2'),
} as Record<string, () => JSX.Element>;
