import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de afvalpas": the waste pass (residents show it at the gate). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.afvalpas': placeholder('💳', 'afval'),
} as Record<string, () => JSX.Element>;
