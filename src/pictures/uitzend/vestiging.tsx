import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de vestiging": the branch (the office of the agency in your town). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vestiging': placeholder('🏢', 'uitzend'),
} as Record<string, () => JSX.Element>;
