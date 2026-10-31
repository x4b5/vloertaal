import { existsSync, readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { getHelpLanguage, ui } from '../src/i18n/all';
import { languageMeta } from '../src/i18n/meta';
import type { HelpLanguage, LangCode } from '../src/i18n/types';
import { HELP_CLIP_KEYS, helpClipList, helpClipsFor } from '../scripts/help-clips-list';
// @ts-expect-error: a plain .mjs script without types
import { helpCredits, helpTodo, withRecorded } from '../scripts/voices/help-todo.mjs';

/**
 * Recorded lines in the help languages (src/lib/helpAudio.ts, public/audio-help): "read aloud" plays
 * the recording first, else the phone's voice for that language, else there is no button. And the
 * list of lines to record (scripts/help-clips-list.ts), the manifest, and what the scripts record.
 */

class FakeUtterance {
  text: string;
  lang = '';
  rate = 1;
  voice: unknown = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) { this.text = text; }
}
const synth = {
  voices: [] as { lang: string; name: string; voiceURI: string }[],
  spoken: [] as FakeUtterance[],
  getVoices() { return this.voices; },
  speak(u: FakeUtterance) { this.spoken.push(u); },
  cancel() {},
  addEventListener() {},
  removeEventListener() {},
};
let failNext = false;
const played: FakeAudio[] = [];
class FakeAudio {
  url: string;
  playbackRate = 1;
  defaultPlaybackRate = 1;
  preservesPitch = true;
  duration = 1;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(url: string) { this.url = url; played.push(this); }
  play() {
    if (failNext) { queueMicrotask(() => this.onerror?.()); return new Promise<void>(() => {}); }
    return Promise.resolve();
  }
  pause() {}
}

let helpAudio: typeof import('../src/lib/helpAudio');
let audio: typeof import('../src/lib/audio');
let HelpSay: typeof import('../src/components/HelpSay').HelpSay;
const ar = () => getHelpLanguage('ar')!;
const ti = () => getHelpLanguage('ti')!;

beforeAll(async () => {
  vi.stubGlobal('window', { speechSynthesis: synth });
  vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  vi.stubGlobal('Audio', FakeAudio);
  helpAudio = await import('../src/lib/helpAudio');
  audio = await import('../src/lib/audio');
  ({ HelpSay } = await import('../src/components/HelpSay'));
});
afterAll(() => vi.unstubAllGlobals());
beforeEach(() => {
  helpAudio.setHelpIndex(null);
  synth.voices = [];
  synth.spoken = [];
  played.length = 0;
  failNext = false;
});

const render = (text: string | undefined, lang: HelpLanguage) => renderToStaticMarkup(createElement(HelpSay, { text, lang }));

describe('the fallback order: recording, then the phone\'s voice, then nothing', () => {
  it('helpSource picks the recording first, the voice second, else null', () => {
    expect(helpAudio.helpSource(true, true)).toBe('clip');
    expect(helpAudio.helpSource(true, false)).toBe('clip');
    expect(helpAudio.helpSource(false, true)).toBe('voice');
    expect(helpAudio.helpSource(false, false)).toBeNull();
  });

  it('no recording and no voice (Tigrinya on most phones): no button at all', () => {
    expect(render(ti().ui.routeTitle, ti())).toBe('');
  });

  it('a voice for the language but no recording: the button, with the phone\'s voice', () => {
    synth.voices = [{ lang: 'ar-SA', name: 'Maged', voiceURI: 'ar' }];
    expect(render(ar().ui.routeTitle, ar())).toContain('data-source="voice"');
  });

  it('a recording: the button, also without any voice on the phone, and it plays the file', () => {
    const text = ti().ui.routeTitle;
    helpAudio.setHelpIndex({ langs: { ti: { routeTitle: text } } });
    expect(render(text, ti())).toContain('data-source="clip"');
    audio.speakHelp(text, 'ti');
    expect(played).toHaveLength(1);
    expect(played[0].url).toMatch(/^\.\/audio-help\/ti\/routeTitle\.mp3\?v=\w+$/);
    // At its own speed: the lessons' slower tempo is for Dutch.
    expect(played[0].playbackRate).toBe(1);
    expect(synth.spoken).toHaveLength(0);
  });

  it('the recording wins over the phone\'s voice', () => {
    synth.voices = [{ lang: 'ar-SA', name: 'Maged', voiceURI: 'ar' }];
    const text = ar().ui.langGuessYes;
    helpAudio.setHelpIndex({ langs: { ar: { langGuessYes: text } } });
    expect(render(text, ar())).toContain('data-source="clip"');
    audio.speakHelp(text, 'ar');
    expect(played).toHaveLength(1);
    expect(synth.spoken).toHaveLength(0);
  });

  it('a recording that does not play: the phone\'s voice says it, when there is one', async () => {
    synth.voices = [{ lang: 'ar-SA', name: 'Maged', voiceURI: 'ar' }];
    const text = ar().ui.langGuessYes;
    helpAudio.setHelpIndex({ langs: { ar: { langGuessYes: text } } });
    failNext = true;
    audio.speakHelp(text, 'ar');
    await new Promise((r) => setTimeout(r, 0));
    expect(synth.spoken.map((u) => u.text)).toEqual([text]);
  });

  it('a recording of an older text is not used (the text changed): back to the voice, or nothing', () => {
    helpAudio.setHelpIndex({ langs: { ti: { routeTitle: 'ቀዳማይ ጽሑፍ' } } });
    expect(helpAudio.helpClipUrl('ti', ti().ui.routeTitle)).toBeUndefined();
    expect(render(ti().ui.routeTitle, ti())).toBe('');
  });

  it('never on the work-rules track (Dutch has its own speaker), and never without a text', () => {
    helpAudio.setHelpIndex({ langs: { ar: { routeTitle: ar().ui.routeTitle } } });
    expect(render(undefined, ar())).toBe('');
  });
});

describe('the list of lines to record (scripts/help-clips-list.ts)', () => {
  const list = helpClipList();

  it('has every help language, and each line once with a file name', () => {
    expect(Object.keys(list).sort()).toEqual(languageMeta.map((l) => l.code).sort());
    for (const [code, clips] of Object.entries(list)) {
      expect(new Set(clips.map((c) => c.id)).size, code).toBe(clips.length);
      expect(new Set(clips.map((c) => c.text)).size, code).toBe(clips.length);
      for (const c of clips) expect(c.id, code).toMatch(/^[A-Za-z]+(\.[fmx])?$/);
    }
  });

  it('holds the very texts the first pages show (so the recording is found by its text)', () => {
    for (const l of languageMeta) {
      const texts = new Set(helpClipsFor(l.code).map((c) => c.text));
      const lang = getHelpLanguage(l.code)!;
      for (const key of ['routeTitle', 'routeLearn', 'routeRules', 'langGuessYes', 'langGuessOther', 'genderTitle', 'genderHint', 'chooseSector', 'sectorHint', 'countryTitle', 'countryHint'] as const) {
        expect(texts.has(ui(key, lang).help!), `${l.code} ${key}`).toBe(true);
      }
      // "Polski?" as the guess page writes it.
      expect(texts.has(`${l.nativeName}${l.dir === 'rtl' ? '؟' : '?'}`), l.code).toBe(true);
    }
  });

  it('has the forms of a woman and a man where a language makes them differ (Arabic "Where do you work?")', () => {
    const arClips = helpClipsFor('ar');
    expect(arClips.find((c) => c.id === 'chooseSector.f')?.text).toBe(getHelpLanguage('ar', 'f')!.ui.chooseSector);
    expect(arClips.find((c) => c.id === 'chooseSector.m')?.text).toBe(getHelpLanguage('ar', 'm')!.ui.chooseSector);
    // Turkish has no gender: one file per line.
    expect(helpClipsFor('tr')).toHaveLength(HELP_CLIP_KEYS.length);
  });

  it('stays short: the questions and short hints, not every text', () => {
    for (const [code, clips] of Object.entries(list)) {
      expect(clips.length, code).toBeLessThanOrEqual(20);
      expect(clips.reduce((n, c) => n + c.text.length, 0), code).toBeLessThan(800);
    }
  });

  it('public/audio-help/clips.json is up to date (npm run help:clips)', () => {
    expect(JSON.parse(readFileSync('public/audio-help/clips.json', 'utf8'))).toEqual(list);
  });
});

describe('the manifest (public/audio-help/manifest.json)', () => {
  const manifest = JSON.parse(readFileSync('public/audio-help/manifest.json', 'utf8')) as { langs: Record<string, Record<string, string>> };
  const list = helpClipList();

  it('names only help languages and lines from the list, each with its file', () => {
    for (const [code, said] of Object.entries(manifest.langs)) {
      expect(Object.keys(list), code).toContain(code);
      const ids = new Set(list[code as LangCode].map((c) => c.id));
      for (const id of Object.keys(said)) {
        expect(ids.has(id), `${code}/${id}`).toBe(true);
        expect(existsSync(`public/audio-help/${code}/${id}.mp3`), `${code}/${id}.mp3`).toBe(true);
      }
    }
  });

  it('is read by text: each text points to its own file', () => {
    helpAudio.setHelpIndex({ langs: { pl: { routeTitle: 'Czego chcesz się uczyć?', langGuessYes: 'Tak' } } });
    expect(helpAudio.helpClipUrl('pl', ' Tak ')).toMatch(/^\.\/audio-help\/pl\/langGuessYes\.mp3\?v=/);
    expect(helpAudio.helpClipUrl('pl', 'Nie')).toBeUndefined();
    expect(helpAudio.helpClipUrl('uk', 'Tak')).toBeUndefined();
    // Another text, another version: a new recording is never an old cached copy.
    const a = helpAudio.helpClipUrl('pl', 'Tak');
    helpAudio.setHelpIndex({ langs: { pl: { langGuessYes: 'Tak!' } } });
    expect(helpAudio.helpClipUrl('pl', 'Tak!')).not.toBe(a);
  });
});

describe('what the recording scripts do (scripts/voices/help-todo.mjs)', () => {
  const clips = { ti: [{ id: 'routeTitle', text: 'A?', page: 'route' }, { id: 'langGuessYes', text: 'B', page: 'raad' }], ar: [{ id: 'routeTitle', text: 'C؟', page: 'route' }] };

  it('records what is missing or says an older text, and nothing that is up to date', () => {
    const files = new Set(['ti/routeTitle', 'ar/routeTitle']);
    const todo = helpTodo(clips, { langs: { ti: { routeTitle: 'A?' }, ar: { routeTitle: 'old' } } }, (l: string, id: string) => files.has(`${l}/${id}`));
    expect(todo.ti.map((c: { id: string; why: string }) => [c.id, c.why])).toEqual([['langGuessYes', 'missing']]);
    expect(todo.ar.map((c: { id: string; why: string }) => [c.id, c.why])).toEqual([['routeTitle', 'outdated']]);
    // One credit per character, about.
    expect(helpCredits(todo)).toBe(1 + 2);
  });

  it('only the languages asked for (LANGS, or not Tigrinya: a native speaker records it)', () => {
    expect(Object.keys(helpTodo(clips, { langs: {} }, () => false, ['ar']))).toEqual(['ar']);
  });

  it('puts a recording in the manifest and keeps the rest', () => {
    const m = withRecorded({ langs: { ar: { routeTitle: 'C؟' } } }, 'ti', [{ id: 'routeTitle', text: 'A?' }]);
    expect(m).toEqual({ langs: { ar: { routeTitle: 'C؟' }, ti: { routeTitle: 'A?' } } });
  });

  it('Tigrinya is never sent to ElevenLabs (no model knows it); every other language has a model', () => {
    const config = JSON.parse(readFileSync('scripts/voices/elevenlabs-help.json', 'utf8'));
    expect(config.langs.ti.human).toBe(true);
    for (const l of languageMeta) if (l.code !== 'ti') expect(config.langs[l.code].model, l.code).toMatch(/^eleven_/);
  });
});
