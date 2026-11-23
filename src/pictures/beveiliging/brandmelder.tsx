import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de brandmelder": the fire alarm button (a red box you press when there is a fire). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.brandmelder': placeholder('🟥', 'beveiliging'),
} as Record<string, () => JSX.Element>;
