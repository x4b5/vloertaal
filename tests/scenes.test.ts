import { existsSync, readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { findScene, sceneCast, SceneScreen } from '../src/components/Scene';
import { geluidsscenes } from '../src/content/geluidsscenes';
import { getHelpLanguage } from '../src/i18n/all';
import { loadSceneIndex, parseSceneIndex, resetSceneIndex, sceneUrl, sceneVoice, scenesAfter, type SceneIndex } from '../src/lib/scenes';

/**
 * "Luister op de werkvloer" (stap 2, audit-didactiek punt 5): the sound scenes get a screen, but a
 * scene is only offered when its mix is on the server (public/audio-scenes/scenes.json). Never the
 * phone's voice: the noise is the point. Without mixes nothing changes for the learner.
 */

const INDEX: SceneIndex = {
  scenes: {
    // A scene with the learner in it: one mix per learner voice.
    'g.logistiek.heftruck': { unit: 'u.warehouse', titel: 'De heftruck komt eraan', files: ['g.logistiek.heftruck.thijmen.mp3', 'g.logistiek.heftruck.ariel.mp3'] },
    // Without the learner: one mix.
    'g.logistiek.scanner': { unit: 'u.warehouse', titel: 'Waar is de scanner?', files: ['g.logistiek.scanner.mp3'] },
    // Mixed in one voice only.
    'g.logistiek.extra': { unit: 'u.warehouse', titel: 'Een extra dienst', files: ['g.logistiek.extra.ariel.mp3'] },
    'g.bouw.beton': { unit: 'u.build', titel: 'Het beton is nat', files: ['g.bouw.beton.mp3'] },
  },
};

afterEach(() => {
  vi.unstubAllGlobals();
  resetSceneIndex();
});

describe('which scenes can be heard (src/lib/scenes.ts)', () => {
  it('takes the mix in the learner\'s own voice, or the one mix of a scene without the learner', () => {
    expect(sceneVoice('m')).toBe('thijmen');
    expect(sceneVoice('f')).toBe('ariel');
    expect(sceneVoice(null)).toBe('ariel');
    expect(sceneUrl(INDEX, 'g.logistiek.heftruck', 'm')).toBe('./audio-scenes/g.logistiek.heftruck.thijmen.mp3');
    expect(sceneUrl(INDEX, 'g.logistiek.heftruck', 'f')).toBe('./audio-scenes/g.logistiek.heftruck.ariel.mp3');
    expect(sceneUrl(INDEX, 'g.logistiek.scanner', 'm')).toBe('./audio-scenes/g.logistiek.scanner.mp3');
    // Not mixed in a man's voice: not offered to him (never the other voice as "you").
    expect(sceneUrl(INDEX, 'g.logistiek.extra', 'm')).toBeUndefined();
    expect(sceneUrl(INDEX, 'g.logistiek.extra', 'f')).toBe('./audio-scenes/g.logistiek.extra.ariel.mp3');
    expect(sceneUrl(INDEX, 'g.zorg.pillen', 'f')).toBeUndefined();
    expect(sceneUrl(null, 'g.logistiek.scanner', 'f')).toBeUndefined();
  });

  it('lists the scenes after a topic (its naUnit), only those with a mix', () => {
    expect(scenesAfter(INDEX, 'u.warehouse', 'm').map((r) => r.id)).toEqual(['g.logistiek.heftruck', 'g.logistiek.scanner']);
    expect(scenesAfter(INDEX, 'u.warehouse', 'f').map((r) => r.id)).toEqual(['g.logistiek.heftruck', 'g.logistiek.scanner', 'g.logistiek.extra']);
    expect(scenesAfter(INDEX, 'u.build', 'f')).toEqual([{ id: 'g.bouw.beton', titel: 'Het beton is nat', url: './audio-scenes/g.bouw.beton.mp3' }]);
    expect(scenesAfter(INDEX, 'u.firstday', 'f')).toEqual([]);
    expect(scenesAfter(null, 'u.warehouse', 'f')).toEqual([]);
  });

  it('reads only a real list: an HTML page, junk or another scene\'s file is no mix', () => {
    expect(parseSceneIndex(null)).toBeNull();
    expect(parseSceneIndex('<!doctype html>')).toBeNull();
    expect(parseSceneIndex({ scenes: 'x' })).toBeNull();
    expect(parseSceneIndex({ scenes: { 'g.a': { unit: 'u.x', titel: 'A', files: ['g.b.mp3', 'g.a.wav', 3] } } })).toEqual({ scenes: {} });
    expect(parseSceneIndex(INDEX)).toEqual(INDEX);
  });

  it('offers nothing without the list (not made yet, offline, or the app\'s page instead)', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('<!doctype html><html></html>', { status: 200, headers: { 'Content-Type': 'text/html' } })));
    expect(await loadSceneIndex()).toBeNull();
    resetSceneIndex();
    vi.stubGlobal('fetch', vi.fn(async () => new Response('', { status: 404 })));
    expect(await loadSceneIndex()).toBeNull();
    resetSceneIndex();
    vi.stubGlobal('fetch', vi.fn(async () => { throw new TypeError('Failed to fetch'); }));
    expect(await loadSceneIndex()).toBeNull();
  });

  it('reads the list once a visit when it is there', async () => {
    const fetch = vi.fn(async () => new Response(JSON.stringify(INDEX), { status: 200, headers: { 'Content-Type': 'application/json' } }));
    vi.stubGlobal('fetch', fetch);
    expect(await loadSceneIndex()).toEqual(INDEX);
    expect(await loadSceneIndex()).toEqual(INDEX);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch.mock.calls[0]).toEqual(['./audio-scenes/scenes.json', { cache: 'no-cache' }]);
  });

  it('a committed list only names mixes that are there (none are committed yet)', () => {
    const path = 'public/audio-scenes/scenes.json';
    if (!existsSync(path)) return;
    const index = parseSceneIndex(JSON.parse(readFileSync(path, 'utf8')))!;
    for (const [id, e] of Object.entries(index.scenes)) {
      expect(findScene(id), id).toBeDefined();
      expect(e.unit).toBe(findScene(id)!.naUnit);
      for (const f of e.files) expect(existsSync(`public/audio-scenes/${f}`), f).toBe(true);
    }
  });
});

describe('the scene screen (src/components/Scene.tsx)', () => {
  const pl = getHelpLanguage('pl');
  const scene = findScene('g.logistiek.heftruck')!;
  const render = (start: 'listen' | number, pickForShot?: number) =>
    renderToStaticMarkup(createElement(SceneScreen, { id: scene.id, url: './audio-scenes/x.mp3', lang: pl, onBack: () => {}, onDone: () => {}, start, pickForShot }));
  const taps = (html: string) => (html.match(/<button/g) ?? []).length;

  it('shows the colleagues, never the learner, as faces', () => {
    for (const s of geluidsscenes) expect(sceneCast(s), s.id).not.toContain('ik');
    expect(sceneCast(scene)).toEqual(['jada']);
  });

  it('first plays the scene: a speaker and, only once it was played, Verder', () => {
    const html = render('listen');
    expect(html).toContain('Luister op de werkvloer');
    expect(html).toContain(scene.titel);
    expect(html).toContain('scene-play');
    expect(html).not.toContain('scene-next');
    // None of the spoken text is on the screen: it is a listening task.
    for (const b of scene.beurten) expect(html).not.toContain(b.nl);
  });

  it('asks each question with its 3 answers, and after the answer only Verder and the why', () => {
    scene.vragen.forEach((q, i) => {
      const asked = render(i);
      expect(asked).toContain(q.vraag);
      for (const o of q.opties) expect(asked).toContain(o.nl);
      expect((asked.match(/class="choice /g) ?? []).length).toBe(3);
      expect(asked).not.toContain('scene-next');
      const right = q.opties.findIndex((o) => o.goed);
      const answered = render(i, (right + 1) % 3);
      expect(answered).toContain('scene-why is-wrong');
      expect(answered).toContain(q.uitleg.nl);
      expect(answered).toContain('scene-next');
      expect(render(i, right)).toContain('scene-why is-right');
      // Back arrow, the scene's speaker, the question's speaker, 3 answers, Verder: never more.
      expect(taps(answered)).toBeLessThanOrEqual(7);
    });
  });
});

describe('the topic page (Route.tsx TopicPage)', () => {
  it('is as it was until the list of mixes has come: no scene row', async () => {
    const { TopicPage } = await import('../src/components/Route');
    const { findUnit } = await import('../src/lib/certificate');
    const { emptyProgress } = await import('../src/lib/progress');
    const unit = findUnit('u.warehouse')!;
    const completed = Object.fromEntries(unit.lessons.map((l) => [l.id, { best: 1, times: 1 }]));
    const props = { unit, progress: { ...emptyProgress, onboarded: true, completed }, lang: getHelpLanguage('pl'), onBack: () => {}, onStart: () => {} };
    const withScenes = renderToStaticMarkup(createElement(TopicPage, { ...props, onScene: () => {} }));
    const without = renderToStaticMarkup(createElement(TopicPage, props));
    expect(withScenes).not.toContain('bay-scene');
    expect(withScenes).toBe(without);
  });
});

describe('the mix script (scripts/scene-lines.ts)', () => {
  const src = readFileSync('scripts/scene-lines.ts', 'utf8');
  it('ends the mix with the list for the app, made from the mp3\'s that are there', () => {
    expect(src).toContain("'npm run scenes:lines -- --manifest'");
    expect(src).toContain("process.argv.includes('--manifest')");
    expect(src).toContain('scenes.json');
  });
  it('keeps the raw background sounds out of git (only the mixes and the list go in)', () => {
    expect(readFileSync('.gitignore', 'utf8')).toContain('public/audio-scenes/geluid/');
  });
});
