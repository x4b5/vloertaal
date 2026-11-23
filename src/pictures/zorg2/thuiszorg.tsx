import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de thuiszorg": home care (care in the client’s own home). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.thuiszorg': placeholder('🏠', 'zorg2'),
} as Record<string, () => JSX.Element>;
