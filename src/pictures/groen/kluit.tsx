import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de kluit": the root ball (the soil around the roots). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.kluit': placeholder('🥔', 'groen'),
} as Record<string, () => JSX.Element>;
