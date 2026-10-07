/** Dutch text-to-speech through the browser, plus small feedback sounds. */

export function speechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function dutchVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang.toLowerCase() === 'nl-nl') ?? voices.find((v) => v.lang.toLowerCase().startsWith('nl'));
}

export function speak(text: string, slow = false): void {
  if (!speechAvailable()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'nl-NL';
  const voice = dutchVoice();
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
