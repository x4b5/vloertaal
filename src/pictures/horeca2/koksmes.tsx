import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het koksmes": the chef’s knife (a big kitchen knife). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.koksmes': placeholder('🔪', 'horeca2'),
} as Record<string, () => JSX.Element>;
