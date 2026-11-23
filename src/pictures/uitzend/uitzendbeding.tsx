import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het uitzendbeding": the agency clause (your work can stop when the hirer no longer needs you). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.uitzendbeding': placeholder('✂️', 'uitzend'),
} as Record<string, () => JSX.Element>;
