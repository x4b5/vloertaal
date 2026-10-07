import { speak } from '../lib/audio';

export function SpeakButton({ text, size = 'md', slow = false, label }: {
  text: string;
  size?: 'md' | 'lg';
  slow?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      className={`speak speak-${size} ${slow ? 'speak-slow' : ''}`}
      onClick={() => speak(text, slow)}
      aria-label={label ?? `Play: ${text}`}
    >
      {slow ? '🐢' : '🔊'}
    </button>
  );
}
