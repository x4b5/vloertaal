import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de herinnering": the reminder (a letter: you have not paid yet). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.herinnering': placeholder('🔔', 'top8'),
} as Record<string, () => JSX.Element>;
