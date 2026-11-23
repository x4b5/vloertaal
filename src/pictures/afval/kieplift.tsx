import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de kieplift": the bin lift (it lifts the bin and tips it out). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kieplift': placeholder('🏗️', 'afval'),
} as Record<string, () => JSX.Element>;
