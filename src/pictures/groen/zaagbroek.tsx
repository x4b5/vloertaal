import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de zaagbroek": the chainsaw trousers (they stop the chain). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.zaagbroek': placeholder('👖', 'groen'),
} as Record<string, () => JSX.Element>;
