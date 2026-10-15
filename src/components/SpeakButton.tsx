import { useState } from 'react';
import { said, saidLang, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { canSay, speak, speakLong } from '../lib/audio';
import { useVoices } from './useVoices';
import type { VoiceRef } from '../lib/voices';
import { SlowIcon, SpeakerIcon } from './Icons';

/**
 * One speaker per item. The first tap plays the Dutch at normal speed, the next tap slowly, and
 * so on, alternating. After a normal play a small turtle sits on the button: the next tap is
 * slow. (`slow` makes a button that always plays slowly.)
 */
export function SpeakButton({ text, size = 'md', slow = false, label, hideText = false, help, lang = 'nl', glyph = false, voice, long = false, needsDevice = false, className }: {
  text: string;
  /** Plain blue speaker icon (as inside a speech bubble) instead of a filled button. */
  glyph?: boolean;
  size?: 'md' | 'lg';
  slow?: boolean;
  /** Screen-reader name; default "Play: <text>" with "Play" in the help language. */
  label?: string;
  /** Listening questions: the word is the question, so the name does not give it away. */
  hideText?: boolean;
  /** The learner's help language, for the screen-reader name. */
  help?: HelpLanguage;
  /** Spoken language: Dutch by default, English for an English cue. */
  lang?: 'nl' | 'en';
  /** Who says it (a character's voice); default: the learner's chosen voice. */
  voice?: VoiceRef;
  /** A longer text (a story, a rule): read sentence by sentence (speakLong in lib/audio.ts). */
  long?: boolean;
  /**
   * Hidden when nothing can say it: no recording of this text and no Dutch phone voice (the
   * work-rules track: Dutch is never read by an English voice).
   */
  needsDevice?: boolean;
  className?: string;
}) {
  // Re-checked when the phone's voices or the recorded voices arrive.
  useVoices();
  // Plays of this text (a new text starts at normal speed again).
  const [plays, setPlays] = useState({ text, n: 0 });
  const n = plays.text === text ? plays.n : 0;
  const nextSlow = !slow && n % 2 === 1;
  const play = ui('playAudio', help);
  if (needsDevice && lang === 'nl' && !canSay(text, voice)) return null;
  return (
    <button
      type="button"
      className={`${glyph ? 'speak-glyph' : `speak speak-${size} ${slow ? 'speak-slow' : ''}`} ${nextSlow ? 'speak-next-slow' : ''} ${className ?? ''}`}
      onClick={() => {
        if (long && lang === 'nl') speakLong(text, { slow: slow || nextSlow, voice });
        else speak(text, slow || nextSlow, lang, voice);
        setPlays({ text, n: n + 1 });
      }}
      aria-label={label ?? (hideText ? said(play) : `${said(play)}: ${text}`)}
      lang={label ? undefined : saidLang(play)}
    >
      {glyph ? <SpeakerIcon size={30} /> : slow ? <SlowIcon size={size === 'lg' ? 40 : 28} /> : <SpeakerIcon size={size === 'lg' ? 44 : 28} />}
      {nextSlow && <span className="speak-turtle" aria-hidden><SlowIcon size={size === 'lg' ? 26 : 22} /></span>}
    </button>
  );
}
