import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

/*
 * Motion, sound and time (WCAG 2.3.1, 2.3.3, 2.2.1, 2.2.2, 1.4.2):
 *  - with prefers-reduced-motion nothing moves: one rule switches every animation off, and what
 *    it lets back in only fades (opacity); nothing flashes more than three times a second;
 *  - a long text that is being read (a Werkregels story starts by itself) can be stopped with its
 *    own speaker, which is then a pressed toggle with a stop sign;
 *  - the note after a sound change sits in a status region that is always there, and stays long
 *    enough to read slowly.
 */

const css = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/** The body of every block that starts at `head` (brace-matched). */
function blocks(src: string, head: RegExp): { at: number; body: string }[] {
  const out: { at: number; body: string }[] = [];
  const re = new RegExp(head.source, 'g');
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    const open = src.indexOf('{', m.index + m[0].length - 1);
    let depth = 0;
    for (let i = open; i < src.length; i++) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}' && --depth === 0) { out.push({ at: m.index, body: src.slice(open + 1, i) }); break; }
    }
  }
  return out;
}

const reduce = blocks(css, /@media \(prefers-reduced-motion: reduce\)\s*\{/);
const keyframes = new Map(blocks(css, /@keyframes ([\w-]+)\s*\{/).map((b) => [/@keyframes ([\w-]+)/.exec(css.slice(b.at))![1], b.body]));
/** The properties a @keyframes block animates. */
const animated = (name: string) => [...(keyframes.get(name) ?? '').matchAll(/([\w-]+)\s*:/g)].map((m) => m[1]);

describe('prefers-reduced-motion', () => {
  it('one rule switches every animation off and keeps transitions to colour and fades', () => {
    const all = reduce.map((b) => b.body).find((b) => /\*,\s*\*::before,\s*\*::after\s*\{/.test(b));
    expect(all).toBeDefined();
    expect(all).toMatch(/animation:\s*none !important/);
    const props = /transition-property:\s*([^;!]+)/.exec(all!)![1].split(',').map((p) => p.trim());
    expect(props).not.toContain('transform');
    expect(props).not.toContain('all');
    for (const p of props) expect(['opacity', 'color', 'background-color', 'border-color', 'fill', 'stroke']).toContain(p);
  });

  it('what it lets back in only fades (no transform, no translate, no scale)', () => {
    const names = reduce.flatMap((b) => [...b.body.matchAll(/animation:\s*([\w-]+)[^;]*!important/g)].map((m) => m[1])).filter((n) => n !== 'none');
    expect(names.length).toBeGreaterThan(0);
    for (const n of names) {
      expect(keyframes.has(n), n).toBe(true);
      expect(animated(n).every((p) => p === 'opacity'), `${n}: ${animated(n).join(', ')}`).toBe(true);
    }
  });

  it('no animation outside it is marked !important (it would win over the reduced-motion rule)', () => {
    let rest = css;
    for (const b of reduce) rest = rest.replace(b.body, '');
    expect(rest).not.toMatch(/animation[\w-]*:[^;}]*!important/);
  });
});

describe('no flashing (2.3.1)', () => {
  it('nothing that changes opacity repeats faster than three times a second', () => {
    for (const m of css.matchAll(/animation:\s*([\w-]+)\s+([\d.]+)(m?s)[^;]*\binfinite\b/g)) {
      const ms = Number(m[2]) * (m[3] === 's' ? 1000 : 1);
      if (animated(m[1]).includes('opacity')) expect(ms, m[1]).toBeGreaterThanOrEqual(1000 / 3);
    }
  });
});

class FakeUtterance {
  text: string;
  lang = '';
  rate = 1;
  voice: unknown = null;
  onstart: (() => void) | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) { this.text = text; }
}
const synth = {
  queue: [] as FakeUtterance[],
  getVoices: () => [{ lang: 'nl-NL', name: 'Xander', voiceURI: 'nl-xander' }],
  speak(u: FakeUtterance) { this.queue.push(u); },
  cancel() { this.queue = []; },
  addEventListener() {},
  removeEventListener() {},
};

let audio: typeof import('../src/lib/audio');
let SpeakButton: typeof import('../src/components/SpeakButton').SpeakButton;
const STORY = 'Bram is te laat. Hij belt zijn chef.';

beforeAll(async () => {
  vi.stubGlobal('window', { speechSynthesis: synth });
  vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  audio = await import('../src/lib/audio');
  ({ SpeakButton } = await import('../src/components/SpeakButton'));
});
afterAll(() => { vi.unstubAllGlobals(); });

describe('a long text read by itself can be stopped (1.4.2)', () => {
  const html = () => renderToStaticMarkup(createElement(SpeakButton, { text: STORY, long: true, glyph: true }));

  it('its speaker is a toggle, not pressed while nothing is said', () => {
    expect(html()).toContain('aria-pressed="false"');
  });

  it('while the story is read the speaker is pressed and shows a stop sign; a stop ends it', () => {
    expect(audio.autoSpeakLong(STORY)).toBe(true);
    expect(audio.isSaying(STORY)).toBe(true);
    const on = html();
    expect(on).toContain('aria-pressed="true"');
    expect(on).toContain('speak-stop');
    expect(on).not.toContain('speak-turtle');
    audio.stopSaying(STORY);
    expect(audio.isSaying(STORY)).toBe(false);
    expect(html()).toContain('aria-pressed="false"');
  });

  it('"Without sound": nothing long starts by itself', () => {
    audio.setQuietAudio(true);
    expect(audio.autoSpeakLong(STORY)).toBe(false);
    expect(audio.isSaying(STORY)).toBe(false);
    audio.setQuietAudio(false);
  });

  it('a short word speaker stays a plain button', () => {
    const out = renderToStaticMarkup(createElement(SpeakButton, { text: 'de helm' }));
    expect(out).not.toContain('aria-pressed');
  });
});

describe('the note after a sound change (2.2.1, 4.1.3)', () => {
  it('lives in a status region that is always in the lesson, and stays at least 8 seconds', async () => {
    const { LessonPlayer, SOUND_NOTE_MS } = await import('../src/components/LessonPlayer');
    const { findLesson } = await import('../src/content/curriculum');
    const { getHelpLanguage } = await import('../src/i18n/all');
    const gear = findLesson('l.gear')!.lesson;
    const [helm, handschoenen, , hesje] = gear.words;
    const out = renderToStaticMarkup(createElement(LessonPlayer, {
      lesson: gear, review: false, lang: getHelpLanguage('pl'), startAt: 0, onQuit: () => {}, onFinish: () => {},
      exercises: [{ kind: 'meaning', word: hesje, options: [handschoenen, helm, hesje] }],
    }));
    expect(out).toContain('<div class="sound-note-live" role="status"></div>');
    expect(SOUND_NOTE_MS).toBeGreaterThanOrEqual(8000);
  }, 60_000);
});
