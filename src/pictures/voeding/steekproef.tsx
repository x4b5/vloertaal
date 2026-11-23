import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de steekproef": the spot check (you test a few products). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.steekproef': placeholder('🎯', 'voeding'),
} as Record<string, () => JSX.Element>;
