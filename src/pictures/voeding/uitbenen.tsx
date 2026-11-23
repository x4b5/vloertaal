import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "uitbenen": to bone (to cut the bones out of meat). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.uitbenen': placeholder('🍖', 'voeding'),
} as Record<string, () => JSX.Element>;
