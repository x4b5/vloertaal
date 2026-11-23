import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "naspoelen": to rinse (to wash off with clean water). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.naspoelen': placeholder('🚿', 'voeding'),
} as Record<string, () => JSX.Element>;
