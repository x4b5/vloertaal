import type { JSX } from 'react';
import { placeholder } from '../placeholder';

export default {
  // "het volgnummer": the queue number (the ticket with your turn). PLACEHOLDER (23 November 2026): a tinted rounded square with the word's
  // emoji, until an illustrator draws it in the house style (docs/tekenstijl.md).
  'w.volgnummer': placeholder('🎟️', 'basis'),
} as Record<string, () => JSX.Element>;
