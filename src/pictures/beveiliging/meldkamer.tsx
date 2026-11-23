import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "de meldkamer": the control room (where people watch the cameras and take calls). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.meldkamer': placeholder('🖥️', 'beveiliging'),
} as Record<string, () => JSX.Element>;
