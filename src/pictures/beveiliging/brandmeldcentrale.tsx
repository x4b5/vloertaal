import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de brandmeldcentrale": the fire alarm panel (it shows where the alarm is). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.brandmeldcentrale': placeholder('🎛️', 'beveiliging'),
} as Record<string, () => JSX.Element>;
