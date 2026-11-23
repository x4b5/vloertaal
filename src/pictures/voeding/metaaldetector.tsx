import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de metaaldetector": the metal detector. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.metaaldetector': placeholder('🧲', 'voeding'),
} as Record<string, () => JSX.Element>;
