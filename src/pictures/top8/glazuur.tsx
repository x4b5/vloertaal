import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het glazuur": the glaze (a shiny, glassy layer on a tile or a cup). PLACEHOLDER (26 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.glazuur': placeholder('✨', 'top8'),
} as Record<string, () => JSX.Element>;
