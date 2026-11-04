import type { ElevenIndex } from './audio';

/**
 * The recorded-voice index, short. public/audio-el/voices.json (written by
 * scripts/voices/elevenlabs.mjs) lists every clip per voice: four voices with nearly the same
 * lines, 430 kB (107 kB gz), and under a name without a version, so the phone asked the server for
 * it again and again. The build writes a short form next to the app's files instead
 * (assets/voices-<hash>.json, vite.config.ts voicesIndexFile): each line's text once, and per voice
 * only what differs. A new name when a clip changes, the same otherwise, so a phone keeps it like
 * the app's other files. The app (src/lib/audio.ts) unpacks it into the same index as before; the
 * scripts and tests keep reading the long form. The owner's request, 4 November 2026.
 */
export interface PackedVoices {
  /** Marks the short form (the long form has none). */
  packed: 1;
  /** Clip id → its text (the text most voices have for it). */
  said: Record<string, string>;
  /** The take most clips have, and per clip id the takes that differ from it. */
  take: number;
  takes: Record<string, number>;
  voices: PackedVoice[];
}

type Voice = ElevenIndex['voices'][number];

/** One voice: its own fields (key, label …) and how its clips differ from the shared ones. */
export type PackedVoice = Omit<Voice, 'said' | 'takes'> & {
  /** Clip ids of `said` this voice has no recording of. */
  without?: string[];
  /** Its own text, where it differs from `said`. */
  differs?: Record<string, string>;
  /** Its own take, where it differs from `takes`/`take`. */
  ownTakes?: Record<string, number>;
  /** Clip ids that go last, in this order: where two clips say the same text the later one plays
   *  (src/lib/audio.ts), so these keep the voice's own order. */
  last?: string[];
  /** Every clip as recorded: when the short form would play another clip for some text. */
  full?: Record<string, string>;
};

const plainText = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');

/** Which clip plays for a text (and for a text without capitals or closing marks), as src/lib/audio.ts picks it. */
function clipMaps(said: Record<string, string>): string {
  const clips: Record<string, string> = {};
  for (const [id, text] of Object.entries(said)) clips[text.trim()] = id;
  const plain: Record<string, string> = {};
  for (const [text, id] of Object.entries(clips)) plain[plainText(text)] = id;
  const sorted = (o: Record<string, string>) => Object.entries(o).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  return JSON.stringify([sorted(clips), sorted(plain)]);
}

const mostCommon = <T>(values: T[]): T => {
  const n = new Map<T, number>();
  for (const v of values) n.set(v, (n.get(v) ?? 0) + 1);
  return [...n].reduce((a, b) => (b[1] > a[1] ? b : a))[0];
};

/** One voice's clips from the short form, in the order that picks the same clip per text. */
function voiceSaid(p: PackedVoices, v: PackedVoice): Record<string, string> {
  if (v.full) return v.full;
  const without = new Set(v.without ?? []);
  const last = new Set(v.last ?? []);
  const said: Record<string, string> = {};
  const text = (id: string) => v.differs?.[id] ?? p.said[id];
  for (const id of Object.keys(p.said)) if (!without.has(id) && !last.has(id)) said[id] = text(id);
  for (const id of v.last ?? []) said[id] = text(id);
  return said;
}

/** The short form of a long index (the build). Gives the same clip for every text and voice. */
export function packVoices(index: ElevenIndex): PackedVoices {
  const ids: string[] = [];
  const seen = new Set<string>();
  for (const v of index.voices) for (const id of Object.keys(v.said)) if (!seen.has(id)) (seen.add(id), ids.push(id));
  const has = (id: string) => index.voices.filter((v) => id in v.said);
  const takeOf = (v: Voice, id: string) => v.takes?.[id] ?? 1;
  const said = Object.fromEntries(ids.map((id) => [id, mostCommon(has(id).map((v) => v.said[id]))]));
  const take = mostCommon(index.voices.flatMap((v) => Object.keys(v.said).map((id) => takeOf(v, id))));
  const takes: Record<string, number> = {};
  for (const id of ids) {
    const t = mostCommon(has(id).map((v) => takeOf(v, id)));
    if (t !== take) takes[id] = t;
  }
  const p: PackedVoices = { packed: 1, said, take, takes, voices: [] };
  for (const v of index.voices) {
    const { said: own, takes: _ownTakes, ...fields } = v;
    const out: PackedVoice = { ...fields };
    const without = ids.filter((id) => !(id in own));
    if (without.length) out.without = without;
    const differs = Object.fromEntries(Object.entries(own).filter(([id, t]) => t !== said[id]));
    if (Object.keys(differs).length) out.differs = differs;
    const ownTakes = Object.fromEntries(Object.keys(own).filter((id) => takeOf(v, id) !== (takes[id] ?? take)).map((id) => [id, takeOf(v, id)]));
    if (Object.keys(ownTakes).length) out.ownTakes = ownTakes;
    // The clips whose text (or plain text) another clip of this voice shares: their order decides
    // which one plays, so they keep the voice's own order (at the end).
    const byText = new Map<string, number>();
    for (const t of Object.values(own)) for (const k of [`=${t.trim()}`, `~${plainText(t)}`]) byText.set(k, (byText.get(k) ?? 0) + 1);
    const last = Object.keys(own).filter((id) => (byText.get(`=${own[id].trim()}`) ?? 0) > 1 || (byText.get(`~${plainText(own[id])}`) ?? 0) > 1);
    if (last.length) out.last = last;
    if (clipMaps(voiceSaid(p, out)) !== clipMaps(own)) {
      delete out.without;
      delete out.differs;
      delete out.last;
      out.full = own;
    }
    p.voices.push(out);
  }
  return p;
}

/** The index the app works with, from the short form (or the long one as it is: development). */
export function unpackVoices(data: PackedVoices | ElevenIndex): ElevenIndex {
  if (!('packed' in data)) return data;
  return {
    voices: data.voices.map((v) => {
      const { without: _w, differs: _d, ownTakes, last: _l, full: _f, ...fields } = v;
      const said = voiceSaid(data, v);
      const takes = Object.fromEntries(Object.keys(said).map((id) => [id, ownTakes?.[id] ?? data.takes[id] ?? data.take]));
      return { ...fields, said, takes };
    }),
  };
}
