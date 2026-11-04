import { useEffect } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { findKlank } from '../content/klankMond';
import type { Exercise } from '../lib/exercises';
import type { Answer } from './Exercises';
import { Bi } from './Bi';
import { KlankCard } from './KlankCard';

/**
 * A sound card at the start of a Klanken lesson (lib/exercises.ts klankStepsFor; the owner's
 * request, 4 November 2026): "Hoe zeg je het?" with the card of one sound the lesson practises.
 * Not graded, as a tip's card: it answers itself, so Continue is there at once. The card has the
 * sound, its word's speaker and "Langzaam"; with Continue three things to tap and one speaker.
 */
export function KlankStep({ ex, lang, onAnswer }: { ex: Extract<Exercise, { kind: 'klank' }>; lang?: HelpLanguage; onAnswer: (a: Answer | null) => void }) {
  useEffect(() => { onAnswer({ correct: true }); }, [ex, onAnswer]);
  const klank = findKlank(ex.klank);
  if (!klank) return null;
  return (
    <div className="exercise klank-step">
      <h2 className="prompt"><Bi text={ui('klankTitle', lang)} /></h2>
      <KlankCard klank={klank} lang={lang} compact />
    </div>
  );
}
