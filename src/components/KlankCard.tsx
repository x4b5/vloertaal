import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { hasClip, speak } from '../lib/audio';
import { DEVICE, voiceFor, type VoiceRef } from '../lib/voices';
import { WordPicture } from '../pictures';
import type { Klank } from '../content/klankMond';
import { klankText } from '../content/klankTeksten';
import { Bi } from './Bi';
import { SlowIcon } from './Icons';
import { Mouth, MouthAnimation, useMouthMotion } from './Mouth';
import { PlayName, SpeakButton } from './SpeakButton';
import { useVoices } from './useVoices';
import '../klank.css';

/**
 * One sound of "Hoe zeg je het?" (src/content/klankMond.ts; a pilot, the owner's request of
 * 4 November 2026): the letters large, the mouth that shows how to make it, one short
 * explanation, one example word with its picture and speaker, and "Langzaam".
 *
 * Two things to tap and one speaker (max 3): the letters and the mouth are one button (the
 * sound, with the motion), "Langzaam" the same slowly; the word's speaker plays the word, and the
 * mouth moves along with that too.
 */

/** The voice of the card: Bram's (the mouth is drawn in his skin tone). */
export const klankVoice = (): VoiceRef => voiceFor('bram');

/**
 * What the sound button says: the sound on its own when it has a recording ("u", "ui"), else the
 * example word, which carries the sound. `device` (dev page only, &tts=1): the phone's own voice
 * says the sound's letters, to hear what it makes of "eu" or "oe".
 */
export function soundText(k: Klank, voice: VoiceRef, device = false): { text: string; voice: VoiceRef } {
  if (device) return { text: k.sound, voice: DEVICE };
  return { text: hasClip(k.sound, voice) ? k.sound : k.word.nl, voice };
}

/** The word with the sound's letters marked: m<b>uu</b>r. */
export function MarkedWord({ word, letters }: { word: string; letters: string }) {
  const i = word.indexOf(letters);
  if (i < 0) return <span lang="nl">{word}</span>;
  return (
    <span lang="nl">
      {word.slice(0, i)}
      <b className="klank-mark">{letters}</b>
      {word.slice(i + letters.length)}
    </span>
  );
}

/** For a sound that moves (ui): where it starts and where it ends, small, side by side. Not a button. */
export function GlideSteps({ klank, size = 72 }: { klank: Klank; size?: number }) {
  if (klank.glide !== 'full' || !klank.end) return null;
  return (
    <div className="klank-steps" aria-hidden>
      <Mouth pose={klank.start} size={size} />
      <span className="klank-arrow">→</span>
      <Mouth pose={klank.end} size={size} />
    </div>
  );
}

export function KlankCard({ klank, lang, deviceSound = false }: { klank: Klank; lang?: HelpLanguage; deviceSound?: boolean }) {
  useVoices();
  const voice = klankVoice();
  const sound = soundText(klank, voice, deviceSound);
  const motion = useMouthMotion(klank, [sound.text, klank.word.nl]);
  const say = (slow: boolean) => {
    motion.play(slow);
    speak(sound.text, slow, 'nl', sound.voice);
  };
  const rtl = lang?.dir === 'rtl';
  const how = klankText(klank.id, lang);
  return (
    <div className={`card klank-card ${motion.playing ? 'klank-playing' : ''}`} dir={rtl ? 'rtl' : undefined}>
      <button type="button" className="klank-play" onClick={() => say(false)}>
        <PlayName text={klank.letters} help={lang} />
        <span className="klank-letters" lang="nl" aria-hidden>{klank.letters}</span>
        <MouthAnimation klank={klank} motion={motion} size={200} />
      </button>
      <GlideSteps klank={klank} />
      {/* The English alone (no translation yet) keeps its own direction in a right-to-left page. */}
      <p className="klank-how" dir={how.help ? undefined : 'ltr'}><Bi text={how} /></p>
      <div className="klank-word" dir="ltr">
        <WordPicture id={klank.word.id} emoji={klank.word.emoji} size={64} />
        <span className="klank-word-nl"><MarkedWord word={klank.word.nl} letters={klank.letters} /></span>
        <SpeakButton text={klank.word.nl} help={lang} voice={voice} />
      </div>
      <button type="button" className="btn klank-slow" onClick={() => say(true)}>
        <SlowIcon size={26} />
        <Bi text={ui('slow', lang)} />
      </button>
    </div>
  );
}
