import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de orderpicker": the order picker (the worker who collects the orders; also the small truck you stand on to pick up high). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.orderpicker': placeholder('🙋', 'top8'),
} as Record<string, () => JSX.Element>;
