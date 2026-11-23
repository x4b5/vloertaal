import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de AED": the AED (a machine that helps a heart that stopped). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.aed': placeholder('❤️‍🩹', 'beveiliging'),
} as Record<string, () => JSX.Element>;
