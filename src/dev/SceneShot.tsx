import { useEffect, useState } from 'react';
import { findUnit } from '../lib/certificate';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { TopicPage } from '../components/Route';
import { SceneScreen } from '../components/Scene';
import { emptyProgress, type Progress } from '../lib/progress';
import { loadSceneIndex, sceneUrl, type SceneIndex } from '../lib/scenes';

/**
 * "Luister op de werkvloer" (src/components/Scene.tsx) in a fixed state, for screenshots and the
 * max-3 count. Needs mixes in public/audio-scenes with their scenes.json (none committed: a test
 * mp3 for the screenshots only, docs/geluidsscenes.md).
 * /?shot=scene&state=topic|listen|question&id=<scene id>&at=N&pick=K
 *  - topic (default): the scene's topic page, every lesson done, with its scene rows;
 *  - listen: the first page of the scene (Verder comes once it was played);
 *  - question: question &at= (0-based), &pick=K the answer given (0-based place).
 * Without a mix for &id= the topic page simply has no scene rows.
 */
export function SceneShot({ lang, gender, q }: { lang: string | null; gender?: Gender; q: URLSearchParams }) {
  const l = getHelpLanguage(lang as LangCode, gender);
  const id = q.get('id') ?? 'g.logistiek.heftruck';
  const state = q.get('state') ?? 'topic';
  const [index, setIndex] = useState<SceneIndex | null | undefined>(undefined);
  useEffect(() => { loadSceneIndex().then(setIndex); }, []);
  const unitId = index?.scenes[id]?.unit ?? 'u.warehouse';
  const unit = findUnit(unitId);
  if (state === 'topic' && unit) {
    const completed = Object.fromEntries(unit.lessons.map((x) => [x.id, { best: 1, times: 1 }]));
    const progress: Progress = { ...emptyProgress, onboarded: true, completed };
    return <TopicPage unit={unit} progress={progress} lang={l} onBack={() => {}} onStart={() => {}} onPocket={() => {}} onScene={() => {}} />;
  }
  const url = sceneUrl(index ?? null, id, l?.gender);
  if (!url) return null;
  const at = q.get('at');
  const pick = q.get('pick');
  return (
    <SceneScreen
      id={id} url={url} lang={l} onBack={() => {}} onDone={() => {}}
      start={state === 'question' ? Number(at ?? 0) : 'listen'}
      pickForShot={pick === null ? undefined : Number(pick)}
    />
  );
}
