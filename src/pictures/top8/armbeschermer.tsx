import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de armbeschermer": the arm guard (a sleeve that protects your arm against cuts). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.armbeschermer': placeholder('🦾', 'top8'),
} as Record<string, () => JSX.Element>;
