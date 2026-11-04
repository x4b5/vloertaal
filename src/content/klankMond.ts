/**
 * "Hoe zeg je het?": how the mouth makes a Dutch sound, drawn as a mouth seen from the front
 * (src/components/Mouth.tsx) on a card per sound (src/components/KlankCard.tsx). A pilot with six
 * vowels, not in the path yet: the owner's request, 4 November 2026 ("eerst zien, dan meer").
 *
 * Every sound is one row of data: its letters, one example word with a picture and a recording,
 * the text the voice says for the sound on its own, and the mouth's position(s). A new sound is
 * one more row here, one more explanation in src/content/klankTeksten.ts, and nothing else.
 *
 * The positions (MouthPose) come from Dutch phonetics (Standard Dutch, Netherlands), in four
 * things a learner can see or feel: how far the jaw opens, whether the lips are spread or
 * rounded (and pushed forward), how tight they are, and what is seen inside (teeth, tongue).
 * They are a little exaggerated on purpose: a schematic face has to show the difference.
 *
 *  - aa [aː]  open front-central, unrounded: jaw wide open, lips relaxed, the tongue low and flat.
 *  - ee [eː]  close-mid front, spread: jaw half open, lips wide (a smile), upper teeth seen, the
 *             tongue high and forward. Dutch ee glides a little towards [ɪ] at its end ("naglijden").
 *  - oe [u]   close back, rounded: jaw nearly closed, lips round, tight and far forward, a small
 *             dark opening (the tongue is pulled back).
 *  - uu [y]   close front, rounded: lips as for oe (a little less far forward), the tongue as for
 *             ie, high and forward, so it is seen in the opening. The one difference with oe.
 *  - eu [øː]  close-mid front, rounded: jaw as for ee, lips rounded but not tight, the tongue
 *             forward. Glides a little towards [ʏ] at its end.
 *  - ui [œy]  a diphthong: from open-mid front rounded [œ] (jaw half open, lips loosely round) to
 *             [ʏ]/[y] (jaw closing, lips small and tight). The lips stay round all the way: the
 *             usual mistake is to end on a spread [i] or start on [a] or [ɔ].
 *
 * The example words avoid an r right after the vowel where it would change the vowel (Dutch ee
 * and eu are lower and lose their glide before r: "weer", "deur"); for oe and uu the r is fine
 * (they are only long there: "moer", "muur"). Every word and sound text has a recording in all
 * four recorded voices (public/audio-el/voices.json); tests/klankMond.test.ts checks it.
 */

/** The ids are the letters, so a URL reads as what it shows: ?shot=klank&k=uu. */
export type KlankId = 'aa' | 'ee' | 'oe' | 'uu' | 'eu' | 'ui';

/**
 * One position of the mouth, every value 0–1. The drawing (src/components/Mouth.tsx) turns them
 * into lips, teeth and tongue; values between two positions are a position too (the motion).
 */
export interface MouthPose {
  /** Opening between the lips (and the jaw with it): 0 closed, 1 as wide open as aa. */
  open: number;
  /** Width of the mouth: 0 narrow (round, oe), 1 wide (spread, ee). */
  wide: number;
  /** Lip shape: 0 a flat slit, 1 a round opening. */
  round: number;
  /** Lips pushed forward: fuller, a ring round the opening. */
  forward: number;
  /** Lip tension: 0 slack, 1 tight (a fuller ring on round lips, a crease at the corners of spread ones). */
  tense: number;
  /** How much of the upper and lower front teeth is seen. */
  teeth: number;
  lowTeeth: number;
  /** Tongue seen in the opening: 0 pulled back (not seen), 1 high and forward, right behind the teeth. */
  tongue: number;
}

/** The mouth at rest: closed, relaxed. Every motion starts and ends here. */
export const REST: MouthPose = { open: 0, wide: 0.55, round: 0, forward: 0, tense: 0, teeth: 0, lowTeeth: 0, tongue: 0 };

export interface Klank {
  id: KlankId;
  /** How the sound is written. */
  letters: string;
  /** IPA, for whoever checks the positions (not shown to learners). */
  ipa: string;
  /** One example word: its picture id (src/pictures), the word as shown and said, the emoji it stands for. */
  word: { id: string; nl: string; emoji: string };
  /**
   * The text a voice says for the sound on its own. Used only when it has a recording ("u" is
   * the uu, "ui" is the ui); else the card says the example word, which carries the sound
   * (src/components/KlankCard.tsx soundText). The phone's voice is not trusted with "eu" or
   * "oe" on its own (it may spell the letters); &tts=1 on the dev page tries it.
   */
  sound: string;
  /** The position of the sound, and for a moving sound (`glide`) where it goes. */
  start: MouthPose;
  end?: MouthPose;
  /** 'full': a diphthong, the motion is the sound (ui); 'subtle': the Dutch glide at the end of ee and eu. */
  glide?: 'full' | 'subtle';
}

const pose = (p: MouthPose) => p;

export const KLANKEN: Klank[] = [
  {
    id: 'aa',
    letters: 'aa',
    ipa: 'aː',
    word: { id: 'w.kl.maan', nl: 'maan', emoji: '🌙' },
    sound: 'aa',
    start: pose({ open: 1, wide: 0.6, round: 0.4, forward: 0, tense: 0, teeth: 0.7, lowTeeth: 0.45, tongue: 0.3 }),
  },
  {
    id: 'ee',
    letters: 'ee',
    ipa: 'eː (eɪ)',
    word: { id: 'w.nee', nl: 'nee', emoji: '❌' },
    sound: 'ee',
    start: pose({ open: 0.4, wide: 1, round: 0.05, forward: 0, tense: 0.6, teeth: 0.9, lowTeeth: 0.4, tongue: 0.55 }),
    end: pose({ open: 0.3, wide: 1, round: 0.05, forward: 0, tense: 0.7, teeth: 0.9, lowTeeth: 0.35, tongue: 0.65 }),
    glide: 'subtle',
  },
  {
    id: 'oe',
    letters: 'oe',
    ipa: 'u',
    word: { id: 'w.kl.moer', nl: 'moer', emoji: '🔩' },
    sound: 'oe',
    start: pose({ open: 0.3, wide: 0, round: 1, forward: 1, tense: 1, teeth: 0, lowTeeth: 0, tongue: 0 }),
  },
  {
    id: 'uu',
    letters: 'uu',
    ipa: 'y',
    word: { id: 'w.kl.muur', nl: 'muur', emoji: '🧱' },
    sound: 'u',
    start: pose({ open: 0.3, wide: 0.06, round: 1, forward: 0.75, tense: 1, teeth: 0, lowTeeth: 0, tongue: 0.8 }),
  },
  {
    id: 'eu',
    letters: 'eu',
    ipa: 'øː (øʏ)',
    word: { id: 'w.keuken', nl: 'keuken', emoji: '🍳' },
    sound: 'eu',
    start: pose({ open: 0.42, wide: 0.32, round: 0.8, forward: 0.45, tense: 0.3, teeth: 0.3, lowTeeth: 0.1, tongue: 0.55 }),
    end: pose({ open: 0.34, wide: 0.24, round: 0.9, forward: 0.55, tense: 0.45, teeth: 0.15, lowTeeth: 0.05, tongue: 0.62 }),
    glide: 'subtle',
  },
  {
    id: 'ui',
    letters: 'ui',
    ipa: 'œy',
    word: { id: 'w.kl.ui', nl: 'ui', emoji: '🧅' },
    sound: 'ui',
    start: pose({ open: 0.6, wide: 0.44, round: 0.65, forward: 0.3, tense: 0.1, teeth: 0.45, lowTeeth: 0.2, tongue: 0.45 }),
    end: pose({ open: 0.3, wide: 0.12, round: 0.95, forward: 0.7, tense: 0.75, teeth: 0, lowTeeth: 0, tongue: 0.75 }),
    glide: 'full',
  },
];

export function findKlank(id: string | null | undefined): Klank | undefined {
  return KLANKEN.find((k) => k.id === id);
}

const KEYS = Object.keys(REST) as (keyof MouthPose)[];

/** A position between `a` (t = 0) and `b` (t = 1). */
export function mixPose(a: MouthPose, b: MouthPose, t: number): MouthPose {
  const out = { ...a };
  for (const k of KEYS) out[k] = a[k] + (b[k] - a[k]) * t;
  return out;
}

/** Where a moving sound ends (its start for a sound that holds still). */
export function endPose(k: Klank): MouthPose {
  return k.end ?? k.start;
}
