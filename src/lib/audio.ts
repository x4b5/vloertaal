/** Dutch text-to-speech through the browser, plus small feedback sounds. */

export function speechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

let preferredVoice: string | null = null;

/** Remember the learner's chosen voice (a voiceURI); null = pick automatically. */
export function setPreferredVoice(uri: string | null): void {
  preferredVoice = uri;
}

/** All Dutch voices on this device, Netherlands voices first, then Belgian (nl-BE). */
export function dutchVoices(): SpeechSynthesisVoice[] {
  if (!speechAvailable()) return [];
  const rank = (v: SpeechSynthesisVoice) => (v.lang.toLowerCase().replace('_', '-') === 'nl-nl' ? 0 : 1);
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('nl'))
    .sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name));
}

function dutchVoice(uri: string | null = preferredVoice): SpeechSynthesisVoice | undefined {
  const voices = dutchVoices();
  return voices.find((v) => v.voiceURI === uri) ?? voices[0];
}

/** Speak text aloud; `voiceURI` overrides the learner's chosen voice (for previews). */
export function speak(text: string, slow = false, lang: 'nl' | 'en' = 'nl', voiceURI?: string): void {
  if (!speechAvailable()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'en' ? 'en-GB' : 'nl-NL';
  const voice = lang === 'en' ? undefined : dutchVoice(voiceURI);
  if (voice) u.voice = voice;
  u.rate = slow ? 0.55 : 0.9;
  synth.speak(u);
}

// Voices load asynchronously in some browsers; touching the list early warms it up.
if (speechAvailable()) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener?.('voiceschanged', () => window.speechSynthesis.getVoices());
}

let ctx: AudioContext | undefined;

function tone(freqs: number[], duration = 0.12): void {
  try {
    ctx ??= new AudioContext();
    const start = ctx.currentTime;
    freqs.forEach((f, i) => {
      const osc = ctx!.createOscillator();
      const gain = ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      const t = start + i * duration;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
      osc.connect(gain).connect(ctx!.destination);
      osc.start(t);
      osc.stop(t + duration);
    });
  } catch {
    // No Web Audio: silently skip the effect.
  }
}

export const sounds = {
  correct: () => tone([660, 880]),
  wrong: () => tone([300, 220], 0.16),
  done: () => tone([523, 659, 784, 1047], 0.13),
};
