import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de sleutelkluis": the key safe (a small box with a code, with the house key in it). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.sleutelkluis': placeholder('🔐', 'zorg2'),
} as Record<string, () => JSX.Element>;
