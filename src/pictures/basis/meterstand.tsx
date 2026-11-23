import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de meterstand": the meter reading (the numbers on the meter for gas, power or water). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.meterstand': placeholder('⏲️', 'basis'),
} as Record<string, () => JSX.Element>;
