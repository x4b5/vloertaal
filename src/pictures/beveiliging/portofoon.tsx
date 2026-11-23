import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de portofoon": the two-way radio, the walkie-talkie. PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.portofoon': placeholder('📻', 'beveiliging'),
} as Record<string, () => JSX.Element>;
