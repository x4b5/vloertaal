import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het logboek": the logbook (a book or an app where you write down everything). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.logboek': placeholder('📓', 'beveiliging'),
} as Record<string, () => JSX.Element>;
