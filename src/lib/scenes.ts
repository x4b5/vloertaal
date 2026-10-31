import type { Gender } from '../i18n/types';
import { learnerCharacter } from './voices';

/**
 * "Luister op de werkvloer": which sound scenes (src/content/geluidsscenes.ts, docs/geluidsscenes.md)
 * are mixed and on the server. The mix script writes the list (public/audio-scenes/scenes.json,
 * `npm run scenes:lines -- --manifest`) from the mp3's that are really there. A scene is only offered
 * when its own mix is in it: never the phone's voice, the noise behind the voice is the point. No
 * list (none made yet, offline, or the server answers with the app's page): nothing is offered.
 */

/** One mixed scene: the topic it comes after (its `naUnit`), its Dutch title and its mp3's. */
export interface SceneEntry {
  unit: string;
  titel: string;
  /** File names in public/audio-scenes: "<id>.mp3", or "<id>.thijmen.mp3" and "<id>.ariel.mp3"
   *  for a scene where the learner says something (in the learner's own voice). */
  files: string[];
}

export interface SceneIndex {
  scenes: Record<string, SceneEntry>;
}

export const SCENE_DIR = './audio-scenes';
export const SCENE_INDEX = `${SCENE_DIR}/scenes.json`;

/** The list as it came, checked: anything else (an HTML page, a broken file) is no list. */
export function parseSceneIndex(raw: unknown): SceneIndex | null {
  if (!raw || typeof raw !== 'object' || !('scenes' in raw)) return null;
  const scenes = (raw as { scenes: unknown }).scenes;
  if (!scenes || typeof scenes !== 'object') return null;
  const out: Record<string, SceneEntry> = {};
  for (const [id, e] of Object.entries(scenes as Record<string, unknown>)) {
    if (!e || typeof e !== 'object') continue;
    const { unit, titel, files } = e as Partial<SceneEntry>;
    if (typeof unit !== 'string' || typeof titel !== 'string' || !Array.isArray(files)) continue;
    const own = files.filter((f): f is string => typeof f === 'string' && f.startsWith(`${id}.`) && f.endsWith('.mp3'));
    if (own.length) out[id] = { unit, titel, files: own };
  }
  return { scenes: out };
}

let loading: Promise<SceneIndex | null> | null = null;

/** The list, asked for once per visit (again after a failure). Never rejects. */
export function loadSceneIndex(): Promise<SceneIndex | null> {
  if (typeof fetch !== 'function') return Promise.resolve(null);
  loading ??= fetch(SCENE_INDEX, { cache: 'no-cache' })
    .then((r) => (r.ok ? r.json() : null))
    .then(parseSceneIndex)
    .catch(() => null)
    .then((index) => {
      if (!index) loading = null;
      return index;
    });
  return loading;
}

/** Tests: forget the list. */
export function resetSceneIndex(): void {
  loading = null;
}

/** The learner's own voice in a scene's mix: Thijmen (Bram's) for a man, else Ariël (Amina's),
 *  as learnerVoice in lib/voices.ts. */
export function sceneVoice(gender?: Gender | null): 'thijmen' | 'ariel' {
  return learnerCharacter(gender) === 'bram' ? 'thijmen' : 'ariel';
}

/** The mp3 of this scene for this learner, or undefined when it is not mixed (in their voice). */
export function sceneUrl(index: SceneIndex | null, id: string, gender?: Gender | null): string | undefined {
  const entry = index?.scenes[id];
  if (!entry) return undefined;
  const file = [`${id}.mp3`, `${id}.${sceneVoice(gender)}.mp3`].find((f) => entry.files.includes(f));
  return file ? `${SCENE_DIR}/${file}` : undefined;
}

export interface SceneRow {
  id: string;
  titel: string;
  url: string;
}

/** The scenes after this topic that this learner can hear, in the list's order. */
export function scenesAfter(index: SceneIndex | null, unitId: string, gender?: Gender | null): SceneRow[] {
  if (!index) return [];
  return Object.entries(index.scenes).flatMap(([id, e]) => {
    const url = e.unit === unitId ? sceneUrl(index, id, gender) : undefined;
    return url ? [{ id, titel: e.titel, url }] : [];
  });
}
