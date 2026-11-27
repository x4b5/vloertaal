import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "aankruisen": to tick (to put a cross in a box). PLACEHOLDER (27 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.aankruisen': placeholder('☑️', 'extra4'),
} as Record<string, () => JSX.Element>;
