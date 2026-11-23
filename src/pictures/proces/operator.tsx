import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de operator": the operator (the person who runs and watches the machines of a plant). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.operator': placeholder('🧑‍🏭', 'proces'),
} as Record<string, () => JSX.Element>;
