import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het explosiegevaar": the danger of explosion (dust or vapour in the air can explode; a yellow sign with EX). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.explosiegevaar': placeholder('🧨', 'proces'),
} as Record<string, () => JSX.Element>;
