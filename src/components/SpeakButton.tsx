import { speak } from '../lib/audio';

export function SpeakButton({ text, size = 'md', slow = false, label, lang = 'nl', glyph = false }: {
  text: string;
  /** Plain blue speaker icon (as inside a speech bubble) instead of a filled button. */
  glyph?: boolean;
  size?: 'md' | 'lg';
  slow?: boolean;
  label?: string;
  /** Spoken language: Dutch by default, English for an English cue. */
  lang?: 'nl' | 'en';
}) {
  return (
    <button
      type="button"
      className={glyph ? 'speak-glyph' : `speak speak-${size} ${slow ? 'speak-slow' : ''}`}
      onClick={() => speak(text, slow, lang)}
      aria-label={label ?? `Play: ${text}`}
    >
      {glyph ? <SpeakerIcon /> : slow ? '🐢' : '🔊'}
    </button>
  );
}

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden focusable="false">
      <path d="M4 12.5a2 2 0 0 1 2-2h4l7-5.6c.9-.7 2-.1 2 1V25.1c0 1.1-1.1 1.7-2 1l-7-5.6H6a2 2 0 0 1-2-2z" fill="currentColor" />
      <path d="M22.5 11.5a6 6 0 0 1 0 9M25.5 8a10.5 10.5 0 0 1 0 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
