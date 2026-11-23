import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de controlekamer": the control room (where operators watch the whole plant on screens). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.controlekamer': placeholder('🖥️', 'proces'),
} as Record<string, () => JSX.Element>;
