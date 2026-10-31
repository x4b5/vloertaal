import { useEffect, useState } from 'react';
import type { Gender } from '../i18n/types';
import { loadSceneIndex, scenesAfter, type SceneRow } from '../lib/scenes';

/**
 * The sound scenes after this topic that this learner can hear ("Luister op de werkvloer",
 * src/lib/scenes.ts). Empty until the list has come, and when there is none: then nothing changes
 * on the screen. `on` false: the list is not even asked for.
 */
export function useScenesAfter(unitId: string, gender: Gender | null | undefined, on: boolean): SceneRow[] {
  const [rows, setRows] = useState<SceneRow[]>([]);
  useEffect(() => {
    if (!on) { setRows([]); return; }
    let alive = true;
    loadSceneIndex().then((index) => { if (alive) setRows(scenesAfter(index, unitId, gender)); });
    return () => { alive = false; };
  }, [unitId, gender, on]);
  return rows;
}
