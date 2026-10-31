import { useState } from 'react';
import { CheckResult } from '../components/Check';
import { CoachCardScreen } from '../components/Certificate';
import { LessonPlayer } from '../components/LessonPlayer';
import { AllTopics, TopicPage } from '../components/Route';
import { BottomNav } from '../components/Screens';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { setQuietAudio } from '../lib/audio';
import { findUnit } from '../lib/certificate';
import { checkExercises, checkLesson, recordCheck } from '../lib/instapCheck';
import { emptyProgress, type Progress } from '../lib/progress';
import { saveTopicsOrder } from '../lib/topicsOrder';

/**
 * "Ik ken dit al: korte check" (src/lib/instapCheck.ts), for screenshots and the max-3 counter.
 * A learner whose start test was 5 of 6 in Woorden and 6 of 6 in Luisteren, Eerste werkdag's
 * first lesson done:
 *  - /?shot=instapcheck&state=topic (&cu=u.help, the default): the topic page with the button;
 *  - &state=question&at=N: question N (0–4) of the check of that topic;
 *  - &state=passed | notyet: the end, 5 of 5 (Afvinken / Toch de lessen doen) or 2 of 5 (Verder);
 *  - &state=checked (&cu=u.firstday): the topic page after the check: "via check" and
 *    "Toch de lessen doen" (Eerste werkdag: its first lesson stays open);
 *  - &state=route: "Alle onderwerpen" in the order of the path, Hulp vragen and Slimme hulpmiddelen
 *    ticked off with the check;
 *  - &state=kaart: the coach card with those two topics "via check".
 */
export function InstapCheckShot({ lang, gender, q }: { lang: string | null; gender?: Gender; q: URLSearchParams }) {
  const l = getHelpLanguage(lang as LangCode, gender);
  const state = q.get('state') ?? 'topic';
  const unit = findUnit(q.get('cu') ?? (state === 'checked' ? 'u.firstday' : 'u.help'))!;
  const base: Progress = {
    ...emptyProgress, onboarded: true, helpLang: (lang as LangCode) ?? null, gender, sector: 'none', xp: 40, streak: 1,
    lastDay: '2026-10-30', lessonDay: '2026-10-30', lastLesson: 'l.hello', days: ['2026-10-29', '2026-10-30'],
    completed: { 'l.hello': { best: 1, times: 1 } },
    toets: { v: 1, instap: { day: '2026-10-29', version: 'A', right: { listen: 6, words: 5, sentences: 4 }, of: { listen: 6, words: 6, sentences: 6 } }, start: '2026-10-29', unitsAt: 0 },
  };
  const today = new Date(2026, 9, 30, 12);
  const ticked = [findUnit('u.help')!, findUnit('u.tools')!].reduce((p, u) => recordCheck(p, u, today), base);
  // &state=checked: Eerste werkdag ticked off before its first lesson was done (that one stays open).
  const [progress] = useState<Progress>(() => (state === 'checked' ? recordCheck({ ...base, completed: {} }, unit, today) : state === 'route' || state === 'kaart' ? ticked : base));
  useState(() => { if (state === 'route') saveTopicsOrder('route'); return 0; });
  const quiet = q.get('quiet') === '1';
  setQuietAudio(quiet);
  if (state === 'question') {
    return (
      <LessonPlayer
        lesson={checkLesson(unit)} review={false} lang={l} exercises={checkExercises(unit, 1, quiet)} startAt={Number(q.get('at') ?? 0)}
        quiet={quiet} onQuit={() => {}} onFinish={() => {}}
      />
    );
  }
  if (state === 'passed' || state === 'notyet') {
    return <CheckResult unit={unit} right={state === 'passed' ? 5 : 2} total={5} lang={l} onMark={() => {}} onLessons={() => {}} />;
  }
  if (state === 'route') {
    return (
      <>
        <AllTopics progress={progress} lang={l} onBack={() => {}} onOpen={() => {}} />
        <BottomNav current="route" onTab={() => {}} lang={l} />
      </>
    );
  }
  if (state === 'kaart') {
    try { localStorage.setItem('vloertaal:cert-name', ''); } catch { /* ignore */ }
    return (
      <>
        <CoachCardScreen progress={progress} lang={l} onBack={() => {}} today={today} />
        <BottomNav current="me" onTab={() => {}} lang={l} />
      </>
    );
  }
  return (
    <>
      <TopicPage
        unit={unit} progress={progress} lang={l} onBack={() => {}} onStart={() => {}} onRestart={() => {}} onPocket={() => {}} onCertificate={() => {}}
        onCheck={() => {}} onUndoCheck={() => {}}
      />
      <BottomNav current="route" onTab={() => {}} lang={l} />
    </>
  );
}
