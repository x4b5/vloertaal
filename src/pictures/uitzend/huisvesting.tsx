import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de huisvesting": the housing (a place to live, arranged by the agency). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.huisvesting': placeholder('🏘️', 'uitzend'),
} as Record<string, () => JSX.Element>;
