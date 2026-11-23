import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de groep": the group (the children who are together every day). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.groep': placeholder('🧑‍🧒', 'kinderopvang'),
} as Record<string, () => JSX.Element>;
