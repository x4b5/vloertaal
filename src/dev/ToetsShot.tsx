import { useEffect, useState } from 'react';
import { getHelpLanguage } from '../i18n';
import type { Gender, HelpLanguage, LangCode } from '../i18n/types';
import type { ToetsMoment } from '../lib/toets';
import { BottomNav, TopBar } from '../components/Screens';
import { Route } from '../components/Route';
import { ToetsHomeLine, ToetsOfferPage, ToetsPage, ToetsPlayer, ToetsResult } from '../components/Toets';
import { setSpeakShotPhase } from '../components/Speaking';
import { emptyProgress, type Progress } from '../lib/progress';
import { keepVoice } from '../lib/toetsVoice';
import type { ToetsRun } from '../lib/toetsState';
import { TOETS_VERSIONS } from '../content/toets';

/**
 * "Wat ken je al?" in fixed states for screenshots and the max-3 counter (src/dev/ShotHarness.tsx):
 *   /?shot=toets&state=offer         the home after the first lesson with the test's line under
 *                                    lesson 1.2 (a tap opens its page); &state=offer-eind the end's;
 *                                    &state=offer-page and offer-eind-page: the page itself
 *   /?shot=toets&state=durf&at=0     "Durf je dit?" (0–4; 0 with the line "Eerst 5 vragen over jou")
 *   /?shot=toets&state=question&at=0 a question (seed 1): 0–4 listening, 5–6 building by ear,
 *                                    7–11 words, 12–13 dictation, 14–18 chats, 19–20 building
 *   /?shot=toets&state=speak         the speaking task (&phase=review: comparing)
 *   /?shot=toets&state=result-instap the result after the start
 *   /?shot=toets&state=result-eind   the result after the end, then and now (with two short
 *                                    recordings put on this phone, so "Jij toen / Jij nu" shows)
 *                                    (&old=1: the start kept from form 1, 18 picks, without
 *                                    "Durf je dit?": the end then shows nothing of it)
 *   /?shot=toets&state=page          its page under Settings (after the end)
 */
const seven = { listen: 7, words: 7, sentences: 7 };
const picks = { listen: 5, words: 5, sentences: 5 };
/** Form 2: known (guessing out) 1, 2 and 0 of 7 at the start; 5, 6 and 2 at the end: Luisteren and
 *  Woorden "Meer dan toen", Zinnen "Ongeveer gelijk" (+2, but within what guessing gives). */
const INSTAP: ToetsRun = { day: '2026-10-02', version: 'A', right: { listen: 2, words: 3, sentences: 1 }, of: seven, form: 2, mc: picks, wrong: { listen: 2, words: 1, sentences: 3 }, idk: { listen: 3, words: 3, sentences: 3 } };
const EIND: ToetsRun = { day: '2026-10-30', version: 'B', right: { listen: 5, words: 6, sentences: 3 }, of: seven, form: 2, mc: picks, wrong: { listen: 0, words: 0, sentences: 2 }, idk: { listen: 2, words: 1, sentences: 2 } };
/** "Durf je dit?" then and now: more where it grew, the same where it did not. */
INSTAP.durf = { understand: 0, boss: 0, help: 1, unsafe: 1, break: 2 };
EIND.durf = { understand: 1, boss: 0, help: 2, unsafe: 2, break: 2 };
/** A start kept from form 1 (18 picks, before November 2026). */
const INSTAP_OLD: ToetsRun = { day: '2026-10-02', version: 'A', right: { listen: 2, words: 3, sentences: 1 }, of: { listen: 6, words: 6, sentences: 6 } };

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

/**
 * The offer: the home after the first lesson (the start; the end: later, with more done) with the
 * line under lesson 1.2; a tap opens its page ([Doe de toets], [Later] and the back arrow), Later
 * and the back arrow go back to the home (Later without the line). `page`: the page itself.
 */
function OfferShot({ moment, page: startOnPage, lang }: { moment: ToetsMoment; page: boolean; lang?: HelpLanguage }) {
  const [page, setPage] = useState(startOnPage);
  const [later, setLater] = useState(false);
  const progress: Progress = { ...emptyProgress, onboarded: true, sector: 'none', completed: moment === 'eind' ? doneIds('l.hello', 'l.people', 'l.arrive', 'l.understand') : { 'l.hello': { best: 1, times: 1 } } };
  if (page) {
    return (
      <>
        <ToetsOfferPage moment={moment} lang={lang} onBack={() => setPage(false)} onDo={() => {}} onLater={() => { setLater(true); setPage(false); }} />
        <BottomNav current="route" onTab={() => {}} lang={lang} />
      </>
    );
  }
  return (
    <>
      <TopBar streak={moment === 'eind' ? 4 : 1} done={moment === 'instap'} words={moment === 'eind' ? 24 : 6} lang={lang} />
      <Route
        progress={progress} lang={lang} access="full" onStart={() => {}} onPick={() => {}} onAll={() => {}}
        lines={later ? [] : [{ id: 'toets', node: <ToetsHomeLine moment={moment} lang={lang} onOpen={() => setPage(true)} /> }]}
      />
      <BottomNav current="route" onTab={() => {}} lang={lang} />
    </>
  );
}

const doneIds = (...ids: string[]) => Object.fromEntries(ids.map((id) => [id, { best: 1, times: 1 }]));

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
  if (state === 'offer' || state === 'offer-eind' || state === 'offer-page' || state === 'offer-eind-page') {
    return <OfferShot moment={state.startsWith('offer-eind') ? 'eind' : 'instap'} page={state.endsWith('-page')} lang={lang} />;
  }
  if (state === 'durf') return <ToetsPlayer moment={q.get('moment') === 'eind' ? 'eind' : 'instap'} lang={lang} seed={1} durfAt={Number(q.get('at') ?? 0)} onQuit={() => {}} onDone={() => {}} />;
  if (state === 'question' || state === 'speak') {
    const at = state === 'speak' ? TOETS_VERSIONS.A.length : Number(q.get('at') ?? 0);
    return <ToetsPlayer moment={q.get('moment') === 'eind' ? 'eind' : 'instap'} lang={lang} seed={1} startAt={at} onQuit={() => {}} onDone={() => {}} />;
  }
  if (state === 'result-instap') return <ToetsResult moment="instap" now={INSTAP} lang={lang} onDone={() => {}} />;
  if (state === 'result-eind') return <ToetsResult moment="eind" now={EIND} before={q.get('old') ? INSTAP_OLD : INSTAP} lang={lang} onDone={() => {}} />;
  const progress: Progress = { ...emptyProgress, onboarded: true, toets: { v: 1, instap: INSTAP, eind: EIND, start: INSTAP.day, unitsAt: 0 } };
  return (
    <>
      <ToetsPage progress={progress} lang={lang} onBack={() => {}} onStart={() => {}} />
      <BottomNav current="me" onTab={() => {}} lang={lang} />
    </>
  );
}
