import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de prikthermometer": the probe thermometer (you stick it into the food). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.prikthermometer': placeholder('🌡️', 'voeding'),
} as Record<string, () => JSX.Element>;
