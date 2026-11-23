import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "bewusteloos": unconscious (the person does not wake up). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.bewusteloos': placeholder('😵', 'beveiliging'),
} as Record<string, () => JSX.Element>;
