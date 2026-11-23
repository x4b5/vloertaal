import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de warmhoudlamp": the heat lamp (it keeps the plates warm). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.warmhoudlamp': placeholder('🔆', 'horeca2'),
} as Record<string, () => JSX.Element>;
