import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het allergeen": the allergen (food that makes some people very ill). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.allergeen': placeholder('⚠️', 'voeding'),
} as Record<string, () => JSX.Element>;
