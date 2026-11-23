import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de bon": the order ticket (the order from the waiter to the kitchen). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bon': placeholder('🎫', 'horeca2'),
} as Record<string, () => JSX.Element>;
