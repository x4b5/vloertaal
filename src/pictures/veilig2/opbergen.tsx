import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "opbergen": to put away. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.opbergen': placeholder('📦', 'veilig2'),
} as Record<string, () => JSX.Element>;
