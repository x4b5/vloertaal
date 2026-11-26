import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de begeleider": the guide (the colleague who helps you in your first weeks). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.begeleider': placeholder('🧑‍🏫', 'top8'),
} as Record<string, () => JSX.Element>;
