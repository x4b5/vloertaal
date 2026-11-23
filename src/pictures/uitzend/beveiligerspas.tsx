import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de beveiligerspas": the security guard pass. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.beveiligerspas': placeholder('🪪', 'uitzend'),
} as Record<string, () => JSX.Element>;
