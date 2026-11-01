// Shared by scripts/voices/elevenlabs-help.mjs and scripts/voices/help-manifest.mjs (and tested in
// tests/helpAudio.test.ts): which help-language lines still need a recording.
//
//  - clips: public/audio-help/clips.json (npm run help:clips): { <lang>: [{ id, text, page }] }
//  - manifest: public/audio-help/manifest.json: { langs: { <lang>: { <id>: <text> } } }
//  - has(lang, id): whether public/audio-help/<lang>/<id>.mp3 is there
//
// A line is "missing" without an mp3, "outdated" when its mp3 says another (older) text.

/** Per language: the lines to (re)record, each with why. */
export function helpTodo(clips, manifest, has, langs = Object.keys(clips)) {
  const out = {};
  for (const lang of langs) {
    const said = manifest?.langs?.[lang] ?? {};
    out[lang] = (clips[lang] ?? [])
      .map((c) => {
        if (!has(lang, c.id)) return { ...c, why: 'missing' };
        if (said[c.id] !== c.text) return { ...c, why: 'outdated' };
        return null;
      })
      .filter(Boolean);
  }
  return out;
}

/** ElevenLabs bills about one credit per character (eleven_multilingual_v2 and eleven_v3). */
export function helpCredits(todo) {
  return Object.values(todo).reduce((n, list) => n + list.reduce((m, c) => m + c.text.length, 0), 0);
}

/** The manifest with these recordings put in (lang -> [{ id, text }]); keeps the rest, sorted. */
export function withRecorded(manifest, lang, recorded) {
  const langs = { ...(manifest?.langs ?? {}) };
  const said = { ...(langs[lang] ?? {}) };
  for (const { id, text } of recorded) said[id] = text;
  langs[lang] = said;
  const sorted = Object.fromEntries(Object.keys(langs).sort().map((k) => [k, langs[k]]));
  return { langs: sorted };
}
