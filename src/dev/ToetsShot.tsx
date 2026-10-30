import { useEffect, useState } from 'react';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { BottomNav, TopBar } from '../components/Screens';
import { Route } from '../components/Route';
import { ToetsOffer, ToetsPage, ToetsPlayer, ToetsResult } from '../components/Toets';
import { setSpeakShotPhase } from '../components/Speaking';
import { emptyProgress, type Progress } from '../lib/progress';
import { keepVoice } from '../lib/toetsVoice';
import type { ToetsRun } from '../lib/toetsState';

/**
 * "Wat ken je al?" in fixed states for screenshots and the max-3 counter (src/dev/ShotHarness.tsx):
 *   /?shot=toets&state=offer         the card on the home (the start); &state=offer-eind the end's
 *   /?shot=toets&state=question&at=0 a question (0–5 listening, 6–11 words, 12–17 sentences; seed 1)
 *   /?shot=toets&state=speak         the speaking task (&phase=review: comparing)
 *   /?shot=toets&state=result-instap the result after the start
 *   /?shot=toets&state=result-eind   the result after the end, then and now (with two short
 *                                    recordings put on this phone, so "Jij toen / Jij nu" shows)
 *   /?shot=toets&state=page          its page under Settings (after the end)
 */
const INSTAP: ToetsRun = { day: '2026-10-02', version: 'A', right: { listen: 2, words: 3, sentences: 1 }, of: { listen: 6, words: 6, sentences: 6 } };
const EIND: ToetsRun = { day: '2026-10-30', version: 'B', right: { listen: 4, words: 5, sentences: 4 }, of: { listen: 6, words: 6, sentences: 6 } };

/** A short silent WAV: a stand-in for a recording (nothing is recorded in a screenshot). */
function silence(): Blob {
  const n = 800;
  const buf = new ArrayBuffer(44 + n);
  const v = new DataView(buf);
  const text = (o: number, s: string) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  text(0, 'RIFF'); v.setUint32(4, 36 + n, true); text(8, 'WAVE'); text(12, 'fmt ');
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, 8000, true);
  v.setUint32(28, 8000, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); text(36, 'data'); v.setUint32(40, n, true);
  for (let i = 0; i < n; i++) v.setUint8(44 + i, 128);
  return new Blob([buf], { type: 'audio/wav' });
}

export function ToetsShot({ lang: code, gender }: { lang: string | null; gender?: Gender }) {
  const q = new URLSearchParams(location.search);
  const state = q.get('state') ?? 'offer';
  const lang = getHelpLanguage(code as LangCode, gender);
  const [ready, setReady] = useState(state !== 'result-eind' && state !== 'page');
  useEffect(() => {
    if (ready) return;
    void Promise.all([keepVoice('instap', silence()), keepVoice('eind', silence())]).then(() => setReady(true));
  }, [ready]);
  const phase = q.get('phase');
  setSpeakShotPhase(state === 'speak' ? (phase === 'review' ? 'review' : 'idle') : undefined);
  if (!ready) return null;
  if (state === 'offer' || state === 'offer-eind') {
    const moment = state === 'offer' ? 'instap' : 'eind';
    const progress: Progress = { ...emptyProgress, onboarded: true, sector: 'none', completed: moment === 'eind' ? { 'l.hello': { best: 1, times: 1 } } : {} };
    return (
      <>
        <TopBar streak={moment === 'eind' ? 4 : 0} done={false} words={moment === 'eind' ? 6 : 0} lang={lang} />
        <Route
          progress={progress} lang={lang} access="full" onStart={() => {}} onPick={() => {}} onAll={() => {}}
          offer={<ToetsOffer moment={moment} lang={lang} onDo={() => {}} onLater={() => {}} />}
        />
        <BottomNav current="route" onTab={() => {}} lang={lang} />
      </>
    );
  }
  if (state === 'question' || state === 'speak') {
    const at = state === 'speak' ? 18 : Number(q.get('at') ?? 0);
    return <ToetsPlayer moment={q.get('moment') === 'eind' ? 'eind' : 'instap'} lang={lang} seed={1} startAt={at} onQuit={() => {}} onDone={() => {}} />;
  }
  if (state === 'result-instap') return <ToetsResult moment="instap" now={INSTAP} lang={lang} onDone={() => {}} />;
  if (state === 'result-eind') return <ToetsResult moment="eind" now={EIND} before={INSTAP} lang={lang} onDone={() => {}} />;
  const progress: Progress = { ...emptyProgress, onboarded: true, toets: { v: 1, instap: INSTAP, eind: EIND, start: INSTAP.day, unitsAt: 0 } };
  return (
    <>
      <ToetsPage progress={progress} lang={lang} onBack={() => {}} onStart={() => {}} />
      <BottomNav current="me" onTab={() => {}} lang={lang} />
    </>
  );
}
