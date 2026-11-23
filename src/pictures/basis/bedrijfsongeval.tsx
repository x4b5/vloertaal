import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het bedrijfsongeval": the accident at work. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bedrijfsongeval': placeholder('🚧', 'basis'),
} as Record<string, () => JSX.Element>;
