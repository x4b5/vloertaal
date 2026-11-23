import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de stalift": the standing hoist (it helps a client to stand up). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.stalift': placeholder('🧍', 'zorg2'),
} as Record<string, () => JSX.Element>;
