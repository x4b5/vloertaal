/**
 * "Hoe zeg je het?": how the mouth makes a Dutch sound, drawn as a mouth seen from the front
 * (src/components/Mouth.tsx) on a card per sound (src/components/KlankCard.tsx). A pilot with six
 * vowels on 4 November 2026; the owner approved it ("OK") and asked for the rest the same day:
 * the other long vowels and diphthongs, and the short vowels beside their long ones (man – maan).
 * The cards open each Klanken lesson for the sounds it practises (klankenForLesson, lib/exercises.ts
 * buildLesson) and are all together under Hulp › Hoe zeg je het? (src/components/KlankScreens.tsx).
 *
 * Every sound is one row of data: its letters, one example word with a picture and a recording,
 * the text the voice says for the sound on its own (where it has a recording), the English of its
 * explanation, and the mouth's position(s). The explanation's translations are the gloss
 * `k.uitleg.<id>` in src/i18n/sounds/<lang>.ts (the Dutch in src/i18n/sounds/nl.ts). A new sound
 * is one more row here and one more line in those files.
 *
 * The positions (MouthPose) come from Dutch phonetics (Standard Dutch, Netherlands), in four
 * things a learner can see or feel: how far the jaw opens, whether the lips are spread or
 * rounded (and pushed forward), how tight they are, and what is seen inside (teeth, tongue).
 * They are a little exaggerated on purpose: a schematic face has to show the difference. Only
 * what a front view can show: where the tongue is (front or back) is seen as more or less tongue
 * in the opening. Beside it the card shows the mouth cut through from the side
 * (src/components/MouthSide.tsx, 4 November 2026), for what the front cannot show: how high the
 * tongue is and where (MouthPose.height, .front), its tip and its back. The consonants made in the
 * throat (g, ch) do not have a card of their own yet.
 *
 * Long vowels and diphthongs:
 *  - aa [aː]  open front-central, unrounded: jaw wide open, lips relaxed, the tongue low and flat.
 *  - ee [eː]  close-mid front, spread: jaw half open, lips wide (a smile), upper teeth seen, the
 *             tongue high and forward. Dutch ee glides a little towards [ɪ] at its end ("naglijden").
 *  - ie [i]   close front, spread: jaw nearly closed, lips wide and tight, the upper teeth seen,
 *             the tongue high and forward right behind them.
 *  - oo [oː]  close-mid back, rounded: jaw half open, lips round and a little forward, the tongue
 *             back (not seen). Glides a little towards [u] at its end: the lips get smaller.
 *  - oe [u]   close back, rounded: jaw nearly closed, lips round, tight and far forward, a small
 *             dark opening (the tongue is pulled back).
 *  - uu [y]   close front, rounded: lips as for oe (a little less far forward), the tongue as for
 *             ie, high and forward, so it is seen in the opening. The one difference with oe.
 *  - eu [øː]  close-mid front, rounded: jaw as for ee, lips rounded but not tight, the tongue
 *             forward. Glides a little towards [ʏ] at its end.
 *  - ui [œy]  a diphthong: from open-mid front rounded [œ] (jaw half open, lips loosely round) to
 *             [ʏ]/[y] (jaw closing, lips small and tight). The lips stay round all the way: the
 *             usual mistake is to end on a spread [i] or start on [a] or [ɔ].
 *  - ij/ei [ɛi]  a diphthong: from [ɛ] (jaw half open, lips spread and relaxed) to [i] (jaw nearly
 *             closed, lips spread and tight). The lips stay spread all the way (never round: that
 *             is ui).
 *  - ou/au [ʌu]  a diphthong: from an open, unrounded [ʌ] (jaw open, lips relaxed) to [u] (lips
 *             small, round and forward, as for oe).
 *
 * Short vowels (lax, said short; the card's motion holds them half as long, `short`):
 *  - a [ɑ]    open back: the jaw open, a little less than aa, lips relaxed and a little round,
 *             the tongue back (hardly seen). Against aa: shorter, the tongue further back.
 *  - e [ɛ]    open-mid front: more open than ee, the lips less wide and relaxed.
 *  - i [ɪ]    near-close front: as ie, but a little more open and relaxed.
 *  - o [ɔ]    open-mid back rounded: jaw open, lips a little round (not forward), the tongue back.
 *  - u [ʏ]    near-close front rounded: lips a little round, not tight and hardly forward, the
 *             tongue forward. Against uu: looser and less round; against eu: less round, shorter.
 *
 * The example words avoid an r right after the vowel where it would change the vowel (Dutch ee,
 * eu, oo and ie are lower or longer before r: "weer", "deur", "door", "bier"); for oe and uu the
 * r is fine (they are only long there: "moer", "muur"). The short vowels' words pair with the
 * long ones where the course has such a word (man – maan). Every word and sound text has a
 * recording in all four recorded voices (public/audio-el/voices.json); tests/klankMond.test.ts
 * checks it. The sounds on their own still to be recorded: docs/opnames.md.
 */

/** The ids are the letters, so a URL reads as what it shows: ?shot=klank&k=uu. ij is also ei, ou also au. */
export type KlankId = 'a' | 'aa' | 'e' | 'ee' | 'i' | 'ie' | 'o' | 'oo' | 'u' | 'uu' | 'oe' | 'eu' | 'ui' | 'ij' | 'ou';

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
  /*
   * The side view (src/components/MouthSide.tsx, the owner's request of 4 November 2026: "een
   * doorsnede van de zijkant, zodat je beter kunt zien wat de tong doet"). The front view does not
   * use these.
   */
  /** How high the body of the tongue is: 0 low (aa), 1 high, almost against the palate (ie, oe, uu). */
  height: number;
  /** Where the highest part of the tongue is: 0 at the back (oe, o), 1 at the front (ie, ee). */
  front: number;
  /** The tip of the tongue: 0 resting behind the lower teeth, 1 up against the ridge behind the upper teeth (t, d, n, l). */
  tip: number;
  /** The back of the tongue up against the soft palate (k, g, ng): 0 not, 1 touching. */
  dorsum: number;
  /** The lower lip up against the upper teeth (f, v, w): 0 not, 1 touching. */
  tuck: number;
}

/** The side of a position: the tongue and the lower lip. */
export type SidePose = Pick<MouthPose, 'height' | 'front' | 'tip' | 'dorsum' | 'tuck'>;

/** The tongue at rest: in the middle, its tip behind the lower teeth. */
export const SIDE_REST: SidePose = { height: 0.4, front: 0.5, tip: 0, dorsum: 0, tuck: 0 };

/** The mouth at rest: closed, relaxed. Every motion starts and ends here. */
export const REST: MouthPose = { open: 0, wide: 0.55, round: 0, forward: 0, tense: 0, teeth: 0, lowTeeth: 0, tongue: 0, ...SIDE_REST };

export interface Klank {
  id: KlankId;
  /** How the sound is written. */
  letters: string;
  /** The other spelling of the same sound (ij: ei, ou: au), shown beside the letters. */
  also?: string;
  /** IPA, for whoever checks the positions (not shown to learners). */
  ipa: string;
  /**
   * One example word: its picture id (src/pictures), the word as shown and said, the emoji it
   * stands for, and its sounds one by one (`parts`, see WordPart) for the mouth that says the
   * whole word along with its recording.
   */
  word: { id: string; nl: string; emoji: string; parts: WordPart[] };
  /**
   * The text a voice says for the sound on its own. Used only when it has a recording ("u" is
   * the uu, "ui" the ui, "ei" the ij); else the card says the example word, which carries the
   * sound (src/components/KlankCard.tsx soundText). The phone's voice is not trusted with "eu"
   * or "oe" on its own (it may spell the letters); &tts=1 on the dev page tries it. A short vowel
   * has none: its letter on its own is said as the letter's name ("a" is aa, "u" is uu).
   */
  sound?: string;
  /** A short vowel (a, e, i, o, u): said short, so the mouth holds it half as long. */
  short?: boolean;
  /** The explanation of the mouth, in English (its translations: the gloss `k.uitleg.<id>`). */
  how: string;
  /** The position of the sound, and for a moving sound (`glide`) where it goes. */
  start: MouthPose;
  end?: MouthPose;
  /** 'full': a diphthong, the motion is the sound (ui, ij, ou); 'subtle': the Dutch glide at the end of ee, eu and oo. */
  glide?: 'full' | 'subtle';
}

/** A position: what the front shows, and the side (the tongue at rest where it is not given). */
const pose = (p: Omit<MouthPose, keyof SidePose> & Partial<SidePose>): MouthPose => ({ ...SIDE_REST, ...p });

/** In the order of the overview: each short vowel next to its long one, then the round sounds and the diphthongs. */
export const KLANKEN: Klank[] = [
  {
    id: 'a',
    letters: 'a',
    ipa: 'ɑ',
    word: { id: 'w.kl.man', nl: 'man', emoji: '🧔', parts: ['m', 'a', 'n'] },
    short: true,
    how: 'Open your mouth, a little less than for aa. Your tongue goes back. Say it short.',
    start: pose({ open: 0.82, wide: 0.5, round: 0.5, forward: 0.05, tense: 0.05, teeth: 0.5, lowTeeth: 0.25, tongue: 0.08, height: 0.15, front: 0.15 }),
  },
  {
    id: 'aa',
    letters: 'aa',
    ipa: 'aː',
    word: { id: 'w.kl.maan', nl: 'maan', emoji: '🌙', parts: ['m', 'aa', 'n'] },
    sound: 'aa',
    how: 'Open your mouth wide. Your lips are relaxed. Your tongue lies low and flat.',
    start: pose({ open: 1, wide: 0.6, round: 0.4, forward: 0, tense: 0, teeth: 0.7, lowTeeth: 0.45, tongue: 0.3, height: 0.05, front: 0.55 }),
  },
  {
    id: 'e',
    letters: 'e',
    ipa: 'ɛ',
    word: { id: 'w.helm', nl: 'helm', emoji: '⛑️', parts: ['h', 'e', 'l', 'm'] },
    short: true,
    how: 'Your mouth is half open, more than for ee. Your lips are relaxed. Say it short.',
    start: pose({ open: 0.56, wide: 0.78, round: 0.1, forward: 0, tense: 0.1, teeth: 0.75, lowTeeth: 0.45, tongue: 0.42, height: 0.5, front: 0.85 }),
  },
  {
    id: 'ee',
    letters: 'ee',
    ipa: 'eː (eɪ)',
    word: { id: 'w.nee', nl: 'nee', emoji: '❌', parts: ['n', 'ee'] },
    sound: 'ee',
    how: 'Your mouth is half open. Your lips are wide, as in a smile. The tip of your tongue touches your lower teeth.',
    start: pose({ open: 0.4, wide: 1, round: 0.05, forward: 0, tense: 0.6, teeth: 0.9, lowTeeth: 0.4, tongue: 0.55, height: 0.7, front: 0.9 }),
    end: pose({ open: 0.3, wide: 1, round: 0.05, forward: 0, tense: 0.7, teeth: 0.9, lowTeeth: 0.35, tongue: 0.65, height: 0.8, front: 0.95 }),
    glide: 'subtle',
  },
  {
    id: 'i',
    letters: 'i',
    ipa: 'ɪ',
    word: { id: 'w.links', nl: 'links', emoji: '⬅️', parts: ['l', 'i', 'ŋ', 'k', 's'] },
    short: true,
    how: 'As for ie, but your mouth is a little more open and relaxed. Say it short.',
    start: pose({ open: 0.3, wide: 0.82, round: 0.05, forward: 0, tense: 0.25, teeth: 0.85, lowTeeth: 0.35, tongue: 0.6, height: 0.8, front: 0.85 }),
  },
  {
    id: 'ie',
    letters: 'ie',
    ipa: 'i',
    word: { id: 'w.fiets', nl: 'fiets', emoji: '🚲', parts: ['f', 'ie', 't', 's'] },
    sound: 'ie',
    how: 'Your mouth is almost closed. Your lips are wide, as in a smile. Your tongue is high and forward.',
    start: pose({ open: 0.2, wide: 0.96, round: 0, forward: 0, tense: 0.85, teeth: 0.9, lowTeeth: 0.3, tongue: 0.8, height: 1, front: 1 }),
  },
  {
    id: 'o',
    letters: 'o',
    ipa: 'ɔ',
    word: { id: 'w.stop', nl: 'stop', emoji: '🛑', parts: ['s', 't', 'o', 'p'] },
    short: true,
    how: 'Your mouth is open. Your lips are a little round. Your tongue is at the back. Say it short.',
    start: pose({ open: 0.62, wide: 0.36, round: 0.78, forward: 0.25, tense: 0.1, teeth: 0.4, lowTeeth: 0.15, tongue: 0.08, height: 0.4, front: 0.1 }),
  },
  {
    id: 'oo',
    letters: 'oo',
    ipa: 'oː (oʊ)',
    word: { id: 'w.doos', nl: 'doos', emoji: '📦', parts: ['d', 'oo', 's'] },
    sound: 'oo',
    how: 'Your lips are round. Your mouth is half open. At the end your lips get smaller.',
    start: pose({ open: 0.46, wide: 0.24, round: 0.86, forward: 0.55, tense: 0.3, teeth: 0.2, lowTeeth: 0.05, tongue: 0.05, height: 0.65, front: 0.1 }),
    end: pose({ open: 0.34, wide: 0.12, round: 0.98, forward: 0.7, tense: 0.45, teeth: 0.06, lowTeeth: 0, tongue: 0, height: 0.8, front: 0.05 }),
    glide: 'subtle',
  },
  {
    id: 'u',
    letters: 'u',
    ipa: 'ʏ',
    word: { id: 'w.bus', nl: 'bus', emoji: '🚌', parts: ['b', 'u', 's'] },
    short: true,
    how: 'Your lips are a little round, not tight. Your tongue is forward. Say it short.',
    start: pose({ open: 0.34, wide: 0.38, round: 0.62, forward: 0.2, tense: 0.1, teeth: 0.45, lowTeeth: 0.1, tongue: 0.6, height: 0.75, front: 0.75 }),
  },
  {
    id: 'uu',
    letters: 'uu',
    ipa: 'y',
    word: { id: 'w.kl.muur', nl: 'muur', emoji: '🧱', parts: ['m', 'uu', 'r'] },
    sound: 'u',
    how: 'Lips round and tight, as for a kiss. Your tongue forward, as for ie.',
    start: pose({ open: 0.3, wide: 0.06, round: 1, forward: 0.75, tense: 1, teeth: 0, lowTeeth: 0, tongue: 0.8, height: 1, front: 0.95 }),
  },
  {
    id: 'oe',
    letters: 'oe',
    ipa: 'u',
    word: { id: 'w.kl.moer', nl: 'moer', emoji: '🔩', parts: ['m', 'oe', 'r'] },
    sound: 'oe',
    how: 'Make your lips round and tight, pushed far forward. There is only a small hole. Your tongue stays at the back of your mouth.',
    start: pose({ open: 0.3, wide: 0, round: 1, forward: 1, tense: 1, teeth: 0, lowTeeth: 0, tongue: 0, height: 1, front: 0 }),
  },
  {
    id: 'eu',
    letters: 'eu',
    ipa: 'øː (øʏ)',
    word: { id: 'w.keuken', nl: 'keuken', emoji: '🍳', parts: ['k', 'eu', 'k', 'ə', 'n'] },
    sound: 'eu',
    how: 'Your mouth is half open. Your lips are round, but not tight. Your tongue forward, as for ee.',
    start: pose({ open: 0.42, wide: 0.32, round: 0.8, forward: 0.45, tense: 0.3, teeth: 0.3, lowTeeth: 0.1, tongue: 0.55, height: 0.65, front: 0.85 }),
    end: pose({ open: 0.34, wide: 0.24, round: 0.9, forward: 0.55, tense: 0.45, teeth: 0.15, lowTeeth: 0.05, tongue: 0.62, height: 0.75, front: 0.85 }),
    glide: 'subtle',
  },
  {
    id: 'ui',
    letters: 'ui',
    ipa: 'œy',
    word: { id: 'w.kl.ui', nl: 'ui', emoji: '🧅', parts: ['ui'] },
    sound: 'ui',
    how: 'Start with your mouth half open and round lips. Then make your lips small, to uu. Your lips stay round.',
    start: pose({ open: 0.6, wide: 0.44, round: 0.65, forward: 0.3, tense: 0.1, teeth: 0.45, lowTeeth: 0.2, tongue: 0.45, height: 0.45, front: 0.8 }),
    end: pose({ open: 0.3, wide: 0.12, round: 0.95, forward: 0.7, tense: 0.75, teeth: 0, lowTeeth: 0, tongue: 0.75, height: 0.85, front: 0.9 }),
    glide: 'full',
  },
  {
    id: 'ij',
    letters: 'ij',
    also: 'ei',
    ipa: 'ɛi',
    word: { id: 'w.pijn', nl: 'pijn', emoji: '🤕', parts: ['p', 'ij', 'n'] },
    sound: 'ei',
    how: 'Start with your mouth half open and wide lips. Then almost close your mouth, to ie.',
    start: pose({ open: 0.56, wide: 0.8, round: 0.08, forward: 0, tense: 0.15, teeth: 0.75, lowTeeth: 0.45, tongue: 0.45, height: 0.45, front: 0.85 }),
    end: pose({ open: 0.2, wide: 0.94, round: 0, forward: 0, tense: 0.75, teeth: 0.9, lowTeeth: 0.3, tongue: 0.78, height: 0.95, front: 1 }),
    glide: 'full',
  },
  {
    id: 'ou',
    letters: 'ou',
    also: 'au',
    ipa: 'ʌu',
    word: { id: 'w.kl.koud', nl: 'koud', emoji: '🥶', parts: ['k', 'ou', 'd'] },
    sound: 'ou',
    how: 'Start with your mouth open. Then make your lips small and round, to oe.',
    start: pose({ open: 0.78, wide: 0.56, round: 0.35, forward: 0, tense: 0.05, teeth: 0.55, lowTeeth: 0.3, tongue: 0.15, height: 0.25, front: 0.4 }),
    end: pose({ open: 0.28, wide: 0.04, round: 1, forward: 0.9, tense: 0.85, teeth: 0, lowTeeth: 0, tongue: 0, height: 0.95, front: 0.05 }),
    glide: 'full',
  },
];

/* ---------------------------------------------------------------- the whole word */

/**
 * The mouth says the whole example word, not only its vowel (the owner's request, 4 November
 * 2026: "je ziet niet het hele woord uitgesproken worden, dat is vreemd"): m – uu – r. A word is
 * its sounds one by one (`word.parts`): the vowels are the sounds of the cards (their own
 * position, and the glide of ui, ij, ou, ee, eu, oo), `ə` is the weak e of keuken, `ŋ` the n of
 * links (said as ng), and the consonants are what a front view can show of them:
 *  - m, b, p   the lips closed, pressed together.
 *  - f, v, w   the lower lip up against the upper teeth: a slit with the upper teeth in it.
 *  - s, z      the teeth almost together, the lips a little wide.
 *  - t, d, n, l  a little open, the tip of the tongue up behind the upper teeth (l: a bit more open).
 *  - k, g, ŋ, r, h  made inside (the back of the tongue, the throat): from the front the mouth
 *              keeps much of the vowel next to it (`soft`), a little more closed.
 * Each sound has a length relative to the others (`weight`): a long vowel long, a short one
 * shorter, a stop (p, t, k) quick. The motion stretches them over the word's recording.
 */
export type WordPart = KlankId | 'ə' | 'ŋ' | 'm' | 'b' | 'p' | 'f' | 'v' | 'w' | 's' | 'z' | 't' | 'd' | 'n' | 'l' | 'k' | 'g' | 'r' | 'h';

type Consonant = Exclude<WordPart, KlankId>;

/**
 * `soft`: how much of the vowel beside it the front of the mouth takes (k, g, ŋ, r, h).
 * `tongue: 'vowel'`: the tongue is free (the lips or the throat make the sound: m, b, p, f, v, w,
 * h), so in the side view it is already where the vowel beside it needs it.
 */
const CONSONANTS: Record<Consonant, { pose: MouthPose; weight: number; soft?: number; tongue?: 'vowel' }> = {
  m: { pose: pose({ open: 0, wide: 0.5, round: 0, forward: 0.05, tense: 0.5, teeth: 0, lowTeeth: 0, tongue: 0 }), weight: 1, tongue: 'vowel' },
  b: { pose: pose({ open: 0, wide: 0.5, round: 0, forward: 0.05, tense: 0.6, teeth: 0, lowTeeth: 0, tongue: 0 }), weight: 0.8, tongue: 'vowel' },
  p: { pose: pose({ open: 0, wide: 0.5, round: 0, forward: 0.05, tense: 0.7, teeth: 0, lowTeeth: 0, tongue: 0 }), weight: 0.8, tongue: 'vowel' },
  f: { pose: pose({ open: 0.16, wide: 0.62, round: 0, forward: 0, tense: 0.3, teeth: 1, lowTeeth: 0, tongue: 0, tuck: 1 }), weight: 1.2, tongue: 'vowel' },
  v: { pose: pose({ open: 0.16, wide: 0.62, round: 0, forward: 0, tense: 0.3, teeth: 1, lowTeeth: 0, tongue: 0, tuck: 1 }), weight: 1.1, tongue: 'vowel' },
  w: { pose: pose({ open: 0.18, wide: 0.56, round: 0.1, forward: 0, tense: 0.2, teeth: 1, lowTeeth: 0, tongue: 0, tuck: 0.85 }), weight: 0.9, tongue: 'vowel' },
  s: { pose: pose({ open: 0.16, wide: 0.8, round: 0, forward: 0, tense: 0.45, teeth: 1, lowTeeth: 1, tongue: 0, height: 0.65, front: 0.85, tip: 0.85 }), weight: 1.2 },
  z: { pose: pose({ open: 0.16, wide: 0.78, round: 0, forward: 0, tense: 0.4, teeth: 1, lowTeeth: 1, tongue: 0, height: 0.65, front: 0.85, tip: 0.85 }), weight: 1.1 },
  t: { pose: pose({ open: 0.24, wide: 0.68, round: 0, forward: 0, tense: 0.3, teeth: 0.85, lowTeeth: 0.45, tongue: 0.9, height: 0.5, front: 0.75, tip: 1 }), weight: 0.8 },
  d: { pose: pose({ open: 0.24, wide: 0.66, round: 0, forward: 0, tense: 0.25, teeth: 0.85, lowTeeth: 0.45, tongue: 0.9, height: 0.5, front: 0.75, tip: 1 }), weight: 0.8 },
  n: { pose: pose({ open: 0.24, wide: 0.64, round: 0, forward: 0, tense: 0.2, teeth: 0.8, lowTeeth: 0.4, tongue: 0.9, height: 0.5, front: 0.75, tip: 1 }), weight: 1 },
  l: { pose: pose({ open: 0.32, wide: 0.64, round: 0, forward: 0, tense: 0.15, teeth: 0.8, lowTeeth: 0.4, tongue: 0.95, height: 0.45, front: 0.7, tip: 1 }), weight: 0.9 },
  k: { pose: pose({ open: 0.26, wide: 0.6, round: 0, forward: 0, tense: 0.2, teeth: 0.55, lowTeeth: 0.3, tongue: 0.1, height: 0.5, front: 0.15, dorsum: 1 }), weight: 0.8, soft: 0.5 },
  g: { pose: pose({ open: 0.26, wide: 0.6, round: 0, forward: 0, tense: 0.2, teeth: 0.55, lowTeeth: 0.3, tongue: 0.1, height: 0.5, front: 0.15, dorsum: 1 }), weight: 1, soft: 0.5 },
  ŋ: { pose: pose({ open: 0.26, wide: 0.62, round: 0, forward: 0, tense: 0.15, teeth: 0.6, lowTeeth: 0.3, tongue: 0.15, height: 0.5, front: 0.15, dorsum: 1 }), weight: 0.9, soft: 0.5 },
  r: { pose: pose({ open: 0.3, wide: 0.55, round: 0.1, forward: 0, tense: 0.15, teeth: 0.5, lowTeeth: 0.25, tongue: 0.4, height: 0.5, front: 0.5, tip: 0.35, dorsum: 0.3 }), weight: 0.9, soft: 0.5 },
  h: { pose: pose({ open: 0.4, wide: 0.58, round: 0.1, forward: 0, tense: 0, teeth: 0.5, lowTeeth: 0.25, tongue: 0.2 }), weight: 0.7, soft: 0.75, tongue: 'vowel' },
  /** The weak e (keuken): half open, everything relaxed. */
  ə: { pose: pose({ open: 0.3, wide: 0.56, round: 0.1, forward: 0, tense: 0, teeth: 0.5, lowTeeth: 0.25, tongue: 0.35, height: 0.5, front: 0.5 }), weight: 1 },
};

/** How a part is written: ə is the e, ŋ the n (links); the others are their own letters. */
export const partLetters = (part: WordPart): string => (part === 'ə' ? 'e' : part === 'ŋ' ? 'n' : part);

/** One sound of a word: its position (and where it glides to), and its share of the word's length. */
export interface WordSegment {
  part: WordPart;
  start: MouthPose;
  end?: MouthPose;
  glide?: 'full' | 'subtle';
  weight: number;
}

/** Long vowels, short ones and diphthongs, relative to a consonant (1). */
const VOWEL_WEIGHT = { long: 2.6, short: 1.5, diphthong: 3 };

/** The sounds of a word in order, each with its position: what the mouth says. */
export function wordSegments(k: Klank): WordSegment[] {
  const parts = k.word.parts;
  const vowelAt = (i: number): Klank | undefined => {
    const p = parts[i];
    return p ? KLANKEN.find((v) => v.id === p) : undefined;
  };
  return parts.map((part, i) => {
    const vowel = vowelAt(i);
    if (vowel) {
      const weight = vowel.glide === 'full' ? VOWEL_WEIGHT.diphthong : vowel.short ? VOWEL_WEIGHT.short : VOWEL_WEIGHT.long;
      return { part, start: vowel.start, end: vowel.end, glide: vowel.glide, weight };
    }
    const c = CONSONANTS[part as Consonant];
    // The vowel beside it (the next one, else the one before), as the mouth is next to it.
    const near = vowelAt(i + 1) ?? vowelAt(i - 1);
    const like = near ? (vowelAt(i + 1) ? near.start : endPose(near)) : c.pose;
    // Made inside the mouth: from the front it looks much like that vowel.
    const front = c.soft ? mixPose(c.pose, like, c.soft) : c.pose;
    // The side: the consonant's own tongue (t, k, s ...), or the vowel's where the tongue is free (m, f, h).
    const tongue: SidePose = c.tongue === 'vowel'
      ? { height: like.height, front: like.front, tip: like.tip, dorsum: like.dorsum, tuck: c.pose.tuck }
      : { height: c.pose.height, front: c.pose.front, tip: c.pose.tip, dorsum: c.pose.dorsum, tuck: c.pose.tuck };
    return { part, start: { ...front, ...tongue }, weight: c.weight };
  });
}

/** The translation key of a sound's explanation (src/i18n/sounds/<lang>.ts). */
export const klankHowId = (id: KlankId) => `k.uitleg.${id}`;

/** Every translation key of "Hoe zeg je het?" (for tests/i18n.test.ts). */
export const klankIds = (): string[] => KLANKEN.map((k) => klankHowId(k.id));

/**
 * The sound cards that open a Klanken lesson (src/content/sounds.ts), at most two, so the lesson
 * stays about as long as any other (19 exercises and two cards, where another lesson has 21 and
 * its tip's second page): only the sounds the lesson practises, and only vowels. "a or aa, ui or
 * ei": a and aa (its first two pairs, man – maan and zak – zaak). "uu, oe and eu": uu and oe
 * (muur – moer, buur – boer; eu is in one pair only, and on its card in Hulp). "p or b, g, k or h":
 * none (consonants need a side view). A mixed review, a lesson played again and today's review
 * have none (lib/exercises.ts buildLesson).
 */
export const KLANK_LESSONS: Readonly<Record<string, readonly KlankId[]>> = {
  'l.shortlong': ['a', 'aa'],
  'l.roundsounds': ['uu', 'oe'],
};

export function klankenForLesson(lessonId: string): Klank[] {
  return (KLANK_LESSONS[lessonId] ?? []).map((id) => findKlank(id)!);
}

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
