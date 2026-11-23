import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de schrobzuigmachine": the scrubber-dryer (a machine that scrubs the floor and sucks it dry). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.schrobzuigmachine': placeholder('🚜', 'schoonmaak2'),
} as Record<string, () => JSX.Element>;
