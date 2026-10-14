import { useState } from 'react';
import { speak } from '../lib/audio';
import type { VoiceRef } from '../lib/voices';
import { SlowIcon, SpeakerIcon } from './Icons';

/**
 * One speaker per item. The first tap plays the Dutch at normal speed, the next tap slowly, and
 * so on, alternating. After a normal play a small turtle sits on the button: the next tap is
 * slow. (`slow` makes a button that always plays slowly.)
 */
export function SpeakButton({ text, size = 'md', slow = false, label, lang = 'nl', glyph = false, voice }: {
  text: string;
  /** Plain blue speaker icon (as inside a speech bubble) instead of a filled button. */
  glyph?: boolean;
  size?: 'md' | 'lg';
  slow?: boolean;
  label?: string;
  /** Spoken language: Dutch by default, English for an English cue. */
  lang?: 'nl' | 'en';
  /** Who says it (a character's voice); default: the learner's chosen voice. */
  voice?: VoiceRef;
}) {
  // Plays of this text (a new text starts at normal speed again).
  const [plays, setPlays] = useState({ text, n: 0 });
  const n = plays.text === text ? plays.n : 0;
  const nextSlow = !slow && n % 2 === 1;
  return (
    <button
      type="button"
      className={`${glyph ? 'speak-glyph' : `speak speak-${size} ${slow ? 'speak-slow' : ''}`} ${nextSlow ? 'speak-next-slow' : ''}`}
      onClick={() => {
        speak(text, slow || nextSlow, lang, voice);
        setPlays({ text, n: n + 1 });
      }}
      aria-label={label ?? `Play: ${text}`}
    >
      {glyph ? <SpeakerIcon size={30} /> : slow ? <SlowIcon size={size === 'lg' ? 40 : 28} /> : <SpeakerIcon size={size === 'lg' ? 44 : 28} />}
      {nextSlow && <span className="speak-turtle" aria-hidden><SlowIcon size={size === 'lg' ? 20 : 16} /></span>}
    </button>
  );
}
