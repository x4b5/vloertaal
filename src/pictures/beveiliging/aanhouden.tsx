import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "aanhouden": to hold someone (until the police come). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.aanhouden': placeholder('✋', 'beveiliging'),
} as Record<string, () => JSX.Element>;
