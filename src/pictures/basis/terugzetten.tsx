import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "terugzetten": to put back (in its place). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.terugzetten': placeholder('🔙', 'basis'),
} as Record<string, () => JSX.Element>;
