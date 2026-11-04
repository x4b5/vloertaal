import { gloss, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { hasClip, speak } from '../lib/audio';
import { DEVICE, voiceFor, type VoiceRef } from '../lib/voices';
import { WordPicture } from '../pictures';
import { klankHowId, type Klank } from '../content/klankMond';
import { Bi } from './Bi';
import { SlowIcon } from './Icons';
import { Mouth, MouthAnimation, useMouthMotion } from './Mouth';
import { PlayName, SpeakButton } from './SpeakButton';
import { useVoices } from './useVoices';
import '../klank.css';

/**
 * One sound of "Hoe zeg je het?" (src/content/klankMond.ts; the owner's request of 4 November
 * 2026): the letters large, the mouth that shows how to make it, one short explanation, one
 * example word with its picture and speaker, and "Langzaam". In Hulp › Hoe zeg je het?
 * (src/components/KlankScreens.tsx) and at the start of a Klanken lesson (LessonPlayer, `compact`:
 * a smaller mouth, so the card and Continue fit a small phone).
 *
 * Two things to tap and one speaker (max 3): the letters and the mouth are one button (the
 * sound, with the motion), "Langzaam" the same slowly; the word's speaker plays the word, and the
 * mouth moves along with that too.
 */

/** The voice of the card: Bram's (the mouth is drawn in his skin tone). */
export const klankVoice = (): VoiceRef => voiceFor('bram');

/**
 * What the sound button says: the sound on its own when it has a recording ("u", "ui", "ei"),
 * else the example word, which carries the sound (a short vowel always: its letter alone is the
 * letter's name). `device` (dev page only, &tts=1): the phone's own voice says the sound's
 * letters, to hear what it makes of "eu" or "oe".
 */
export function soundText(k: Klank, voice: VoiceRef, device = false): { text: string; voice: VoiceRef } {
  if (device) return { text: k.sound ?? k.letters, voice: DEVICE };
  return { text: k.sound && hasClip(k.sound, voice) ? k.sound : k.word.nl, voice };
}

/** The explanation in the learner's language (the gloss k.uitleg.<id>), with the English, as every text in the app. */
export function klankText(k: Klank, lang?: HelpLanguage): Bilingual {
  return gloss(klankHowId(k.id), k.how, lang);
}

/** The word with the sound's letters marked: m<b>uu</b>r (or its other spelling: p<b>ij</b>n). */
export function MarkedWord({ word, klank }: { word: string; klank: Klank }) {
  const letters = [klank.letters, klank.also].find((l) => l && word.includes(l));
  const i = letters ? word.indexOf(letters) : -1;
  if (!letters || i < 0) return <span lang="nl">{word}</span>;
  return (
    <span lang="nl">
      {word.slice(0, i)}
      <b className="klank-mark">{letters}</b>
      {word.slice(i + letters.length)}
    </span>
  );
}

/** The letters as shown: "ij" with its other spelling small beside it ("ei"). */
export function KlankLetters({ klank, className = 'klank-letters' }: { klank: Klank; className?: string }) {
  return (
    <span className={className} lang="nl" aria-hidden>
      {klank.letters}
      {klank.also && <span className="klank-also"><span className="klank-slash"> / </span>{klank.also}</span>}
    </span>
  );
}

/** For a sound that moves (ui, ij, ou): where it starts and where it ends, small, side by side. Not a button. */
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

export function KlankCard({ klank, lang, deviceSound = false, compact = false }: { klank: Klank; lang?: HelpLanguage; deviceSound?: boolean; compact?: boolean }) {
  useVoices();
  const voice = klankVoice();
  const sound = soundText(klank, voice, deviceSound);
  const motion = useMouthMotion(klank, [sound.text, klank.word.nl]);
  const say = (slow: boolean) => {
    motion.play(slow);
    speak(sound.text, slow, 'nl', sound.voice);
  };
  const rtl = lang?.dir === 'rtl';
  const how = klankText(klank, lang);
  const spoken = klank.also ? `${klank.letters}, ${klank.also}` : klank.letters;
  return (
    <div className={`card klank-card ${compact ? 'klank-compact' : ''} ${motion.playing ? 'klank-playing' : ''}`} dir={rtl ? 'rtl' : undefined}>
      <button type="button" className="klank-play" onClick={() => say(false)}>
        <PlayName text={spoken} help={lang} />
        <KlankLetters klank={klank} />
        <MouthAnimation klank={klank} motion={motion} size={compact ? 136 : 200} />
      </button>
      <GlideSteps klank={klank} size={compact ? 56 : 72} />
      {/* The English alone (no translation yet) keeps its own direction in a right-to-left page. */}
      <p className="klank-how" dir={how.help ? undefined : 'ltr'}><Bi text={how} /></p>
      <div className="klank-word" dir="ltr">
        <WordPicture id={klank.word.id} emoji={klank.word.emoji} size={compact ? 48 : 64} />
        <span className="klank-word-nl"><MarkedWord word={klank.word.nl} klank={klank} /></span>
        <SpeakButton text={klank.word.nl} help={lang} voice={voice} />
      </div>
      <button type="button" className="btn klank-slow" onClick={() => say(true)}>
        <SlowIcon size={26} />
        <Bi text={ui('slow', lang)} />
      </button>
    </div>
  );
}
