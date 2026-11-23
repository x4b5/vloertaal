import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de tetanusprik": the tetanus jab (an injection against an illness from dirt in a wound). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.tetanusprik': placeholder('💉', 'afval'),
} as Record<string, () => JSX.Element>;
