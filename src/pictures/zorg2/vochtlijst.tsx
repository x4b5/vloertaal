import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de vochtlijst": the fluid chart (how much a client drinks). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.vochtlijst': placeholder('💧', 'zorg2'),
} as Record<string, () => JSX.Element>;
