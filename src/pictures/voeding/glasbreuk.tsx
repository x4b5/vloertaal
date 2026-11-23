import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de glasbreuk": the glass breakage (glass that broke). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.glasbreuk': placeholder('🔨', 'voeding'),
} as Record<string, () => JSX.Element>;
