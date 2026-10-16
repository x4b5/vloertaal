import { tipForLesson } from '../content/culture';
import { sayingForLesson, sayingQuestion } from '../content/sayings';
import { findLesson } from '../content/curriculum';
import { useState } from 'react';
import { LessonPlayer } from '../components/LessonPlayer';
import { About, BottomNav, Onboarding, Phrasebook, Result, Tips, TopBar, WordsHub } from '../components/Screens';
import { Settings } from '../components/Settings';
import { Coaches } from '../components/Coaches';
import { SETTINGS_PARENT, type SettingsPage } from '../lib/settingsMenu';
import type { SectorGroupId } from '../content/sectors';
import { Admin } from '../components/Admin';
import { Gate } from '../components/Gate';
import { SectorScreen } from '../components/Sector';
import { isSectorId, type SectorChoice } from '../content/sectors';
import type { Access } from '../lib/access';
import { dayKey, emptyProgress, workWeek, type Progress } from '../lib/progress';
import { Milestone, StreakStopped } from '../components/Milestone';
import { dailyCard, dailyRuleLesson, gradedStepIds } from '../lib/spaced';
import { CAST, Character, type Mood } from '../components/Characters';
import { getHelpLanguage } from '../i18n';
import { GenderScreen } from '../components/Gender';
import type { Gender, LangCode } from '../i18n/types';
import { allLessons, allReplies } from '../content/curriculum';
import { buildLesson, buildTiles, buildRuleLesson, forRetry, RULE_KINDS, type Exercise, type RuleExercise, type RuleKind } from '../lib/exercises';
import { setQuietAudio } from '../lib/audio';
import { setSpeakShotPhase } from '../components/Speaking';
import { createRng } from '../lib/random';
import { units } from '../content/curriculum';
import { WordPicture, pictures, unitPictures } from '../pictures';
import * as kit from '../pictures/kit';
import { hasPicture } from '../lib/wordPicture';
import { CertEarned, CertificateScreen } from '../components/Certificate';
import { AllTopics, Route, TopicPage } from '../components/Route';
import { findUnit } from '../lib/certificate';
import { clearSave, makeSave, writeSave } from '../lib/resume';
import { PocketCardScreen } from '../components/PocketCard';
import { showOfflineStateForShot, type OfflineState } from '../lib/offline';
import { OfflineSettingCard } from '../components/Offline';
import type { TextSize } from '../lib/textSize';
import { LogoMark, Wordmark } from '../components/Logo';
import { HomeGreeting } from '../components/BramSays';
import { courseUnits, learnedItems, registerRulesCourse } from '../content/courses';
import { toCourseUnits } from '../content/regels/course';
import { RULES_STUB } from './rulesStub';
import { forceNoVoiceNoteForShot, NoVoiceNote, RulesHelp, RulesShelf } from '../components/RulesHelp';
import { SocialMap, SocialMapLink } from '../components/SocialMap';
import { allRegionUnits, isRegionChoice, regionOf, type RegionChoice } from '../content/regio';

/**
 * Development-only page that opens one exercise in a fixed state, so screens can be
 * screenshotted reproducibly: /?shot=dutch|meaning|build|chat|result|streak&lang=ar
 * /?shot=sector is the sector choice; &sector=construction sets the sector for path/tips/settings.
 * /?shot=pictures shows every word picture (and the unit banner pictures) for review.
 * Options are always in lesson order, so tests know which one is right.
 * &quiet=1 starts in "Without sound" (Settings, any lesson shot). /?shot=lesson&at=12 plays a real
 * built lesson (Safety gear, seed 1; &lesson=l.rights for another) from exercise 12; with &quiet=1
 * it is built without sound.
 */
export function ShotHarness({ shot, lang, word }: { shot: string; lang: string | null; word?: string | null }) {
  const q = new URLSearchParams(location.search);
  // &lang=nl: the work-rules track (main.tsx turns RULES_TRACK on and loads its pack, with the
  // real rules course). &stub=1, or no rules units written yet: the small fixed stub course.
  if (lang === 'nl' && (q.get('stub') === '1' || !courseUnits('regels').length)) registerRulesCourse(toCourseUnits(RULES_STUB));
  // &gender=f|m|x: the help language's texts for a woman, a man, or "rather not say".
  const gp = q.get('gender');
  const gender: Gender | undefined = gp === 'f' || gp === 'm' || gp === 'x' ? gp : undefined;
  // Lesson complete: 9 of 11 right the first time, 6 new words (24 in all), next lesson named.
  // &perfect=1: 11 of 11 (FOUTLOOS); &review=1: after "Herhaal vandaag" (8 words, 5 stronger);
  // &phrases=1: the first lesson's one-time row to the emergency phrases; &waiting=42: words still
  // due after the review (back after a long absence).
  // &lang=nl: after a rules lesson (one new rule, five in all, its "Onthoud" line; &lesson=
  // another lesson); &review=1 after "Herhaal vandaag" of that track (6 questions, 4 stronger).
  if (shot === 'result' && lang === 'nl') {
    const l = getHelpLanguage('nl' as LangCode);
    const review = q.get('review') === '1';
    const all = courseUnits('regels').flatMap((u) => u.lessons);
    const done = all.find((x) => x.id === (q.get('lesson') ?? 'r.l.loon.2')) ?? all[0];
    const next = all[all.indexOf(done) + 1];
    return (
      <Result
        right={review ? 5 : q.get('perfect') === '1' ? 5 : 4} total={review ? 6 : 5} newWords={1} words={5} lang={l} onDone={() => {}}
        repeated={review ? 6 : undefined} stronger={review ? 4 : undefined}
        kind={review ? 'daily' : 'lesson'}
        remember={review ? undefined : done?.rule?.remember}
        next={!review && next ? { en: next.title, lang: l, id: next.id } : undefined}
      />
    );
  }
  if (shot === 'result') {
    const l = getHelpLanguage(lang as LangCode, gender);
    const review = q.get('review') === '1';
    const right = q.get('perfect') === '1' ? 11 : 9;
    const next = findLesson('l.people')?.lesson;
    return (
      <Result
        right={right} total={11} newWords={6} words={24} lang={l} onDone={() => {}}
        repeated={review || q.get('mix') === '1' ? 8 : undefined} stronger={review ? 5 : undefined}
        waiting={Number(q.get('waiting') ?? 0)}
        kind={review ? 'daily' : q.get('mix') === '1' ? 'review' : 'lesson'}
        next={!review && next ? { en: next.title, help: l?.gloss[next.id], lang: l, id: next.id } : undefined}
        onPhrases={q.get('phrases') === '1' ? () => {} : undefined}
      />
    );
  }
  // Day-streak milestone after the very first lesson: streak 1. &n=7 another day; &rest=1 with a
  // free day used yesterday and one in hand; &install=ios|prompt shows that home-screen card.
  if (shot === 'streak') {
    const n = Number(q.get('n') ?? 1);
    const today = new Date();
    const key = (d: number) => dayKey(new Date(today.getFullYear(), today.getMonth(), today.getDate() - d));
    const rest = q.get('rest') === '1';
    const p = { ...emptyProgress, streak: n, lastDay: key(0), rest: rest ? [key(1)] : [] };
    return <Milestone streak={n} lang={getHelpLanguage(lang as LangCode, gender)} onDone={() => {}} days={workWeek(p, today)} best={Number(q.get('best') ?? n)} freezes={rest ? 1 : 0} />;
  }
  // The streak stopped at 12 (record 21), shown once on the next open.
  if (shot === 'stopped') return <StreakStopped streak={12} best={21} lang={getHelpLanguage(lang as LangCode, gender)} onDone={() => {}} />;
  if (shot === 'pictures') return <PicturesSheet />;
  // The app icon in every variant (scripts/icons/make-icons.cjs reads these): /?shot=logo&px=512
  if (shot === 'logo') return <LogoSheet px={Number(q.get('px') ?? 120)} />;
  // The pocket card ("Spiekkaartje") of a unit: /?shot=pocket&cu=u.safety
  if (shot === 'pocket') {
    const unit = findUnit(q.get('cu') ?? (lang === 'nl' ? 'r.loon' : 'u.safety')) ?? units[0];
    return <PocketCardScreen unit={unit} lang={getHelpLanguage(lang as LangCode, gender)} onBack={() => {}} />;
  }
  // "Keep lessons on this phone" (the Settings switch) in a fixed state:
  // /?shot=offline&offline=saving|saved|error|space|off (the current topic is "First day at work").
  if (shot === 'offline') {
    const st = q.get('offline');
    const fixed: OfflineState | null =
      st === 'saving' ? { status: 'saving', done: 97, total: 236 }
      : st === 'saved' ? { status: 'saved', bytes: 2_740_000, stale: false }
      : st === 'error' ? { status: 'error', reason: 'failed' }
      : st === 'space' ? { status: 'error', reason: 'space' }
      : null;
    try { localStorage.setItem('vloertaal:offline-auto', st === 'off' ? '0' : '1'); } catch { /* ignore */ }
    if (fixed) showOfflineStateForShot('u.firstday', fixed);
    const l = getHelpLanguage(lang as LangCode, gender);
    const progress = { ...emptyProgress, onboarded: true, sector: 'none' as SectorChoice, completed: doneIds('l.hello') };
    return (
      <div className="screen">
        <OfflineSettingCard progress={progress} lang={l} />
      </div>
    );
  }
  // Certificates: /?shot=certificate&cu=u.safety&name=Ali%20Hassan (name=ask: asked the first
  // time; name=none: without a name); /?shot=cert-earned is the one-time moment.
  if (shot === 'certificate' || shot === 'cert-earned') {
    const unit = findUnit(q.get('cu') ?? (lang === 'nl' ? 'r.loon' : 'u.firstday')) ?? units[0];
    const name = q.get('name');
    try {
      if (name === 'ask') localStorage.removeItem('vloertaal:cert-name');
      else localStorage.setItem('vloertaal:cert-name', name === 'none' || name === null ? '' : name);
    } catch { /* ignore */ }
    const l = getHelpLanguage(lang as LangCode, gender);
    return shot === 'certificate'
      ? <CertificateScreen unit={unit} day="2026-10-08" lang={l} onBack={() => {}} />
      : <CertEarned unit={unit} day="2026-10-08" lang={l} onView={() => {}} onLater={() => {}} onPocket={() => {}} />;
  }
  const quiet = new URLSearchParams(location.search).get('quiet') === '1';
  // &access=preview shows the path, tips and settings as a preview user sees them.
  const access: Access = new URLSearchParams(location.search).get('access') === 'preview' ? 'preview' : 'full';
  // &sector=construction (or none) sets the learner's sector on the path, tips and settings;
  // &other=open opens the "Andere sectoren" section.
  const sp = new URLSearchParams(location.search).get('sector');
  const sector: SectorChoice | undefined = sp === 'none' || isSectorId(sp) ? sp : undefined;
  // &region=zl: the learner chose Zuid-Limburg in Settings (src/content/regio): its unit in the
  // path and All topics, its Sociale kaart on the Hulp tab. /?shot=socialmap is the map itself.
  const rp = q.get('region');
  const region: RegionChoice | undefined = isRegionChoice(rp) ? rp : undefined;
  if (shot === 'socialmap') {
    const l = getHelpLanguage(lang as LangCode, gender);
    return (
      <>
        <SocialMap region={regionOf(region ?? 'zl')!} lang={l} onBack={() => {}} />
        <BottomNav current="words" onTab={() => {}} lang={l} />
      </>
    );
  }
  // The sector in two steps: /?shot=sector (the kind of work), &group=make|care (its three sectors).
  if (shot === 'sector') {
    const g = q.get('group');
    return <SectorScreen lang={getHelpLanguage(lang as LangCode, gender)} onDone={() => {}} initialGroup={g === 'make' || g === 'care' ? (g as SectorGroupId) : undefined} />;
  }
  // The password page: &try=1 with "Try one lesson first" (TRY_LESSON on), &again=1 back from the
  // sector with the code kept, &greet=1 with Bram's "Hallo, ik ben Bram." (the first page after the language),
  // &trialDone=1 back after the trial lesson.
  if (shot === 'gate') {
    return (
      <Gate
        lang={getHelpLanguage(lang as LangCode, gender)}
        onAccess={() => {}}
        onBack={() => {}}
        onTry={q.get('try') === '1' ? () => {} : undefined}
        accepted={q.get('again') === '1' ? 'preview' : null}
        greet={q.get('greet') === '1'}
        trialDone={q.get('trialDone') === '1'}
      />
    );
  }
  // Screens outside the lesson flow (phase-3 house-style review).
  // The language: /?shot=language is the list (no guess); &guess=pl asks "Polski?" first;
  // &guess=pl&list=1 is the list opened from "Other language" (with Back).
  if (shot === 'onboarding' || shot === 'language') {
    return <Onboarding onDone={() => {}} guess={(q.get('guess') as LangCode | null) ?? null} startWithList={q.get('list') === '1'} />;
  }
  // "Voor begeleiders" (from About): a link per topic.
  if (shot === 'coaches') return <Coaches onBack={() => {}} />;
  // The gender question right after a help language with gender: /?shot=gender&lang=pl
  // (&gender=f shows it picked; Settings has the same cards: /?shot=settings&lang=pl&gender=f).
  if (shot === 'gender') return <GenderShot lang={(lang as LangCode) ?? 'pl'} gender={gender} greet={q.get('greet') === '1'} />;
  if (shot === 'phrasebook') return <Phrasebook lang={getHelpLanguage(lang as LangCode, gender)} onBack={() => {}} />;
  if (shot === 'admin') return <Admin onBack={() => {}} />;
  // &novoice=1 (the work-rules track): the line that this phone has no Dutch voice, on the home
  // and on Settings › Geluid, whatever the browser has.
  forceNoVoiceNoteForShot(q.get('novoice') === '1');
  if (shot === 'tips' || shot === 'settings' || shot === 'words') {
    // Half the course done, so several tips are unlocked (the work-rules track: its first 8
    // lessons, so "Alle regels" has rules of three topics). &done=40: that many lessons instead
    // (certificates of several themes).
    const doneN = Number(q.get('done') ?? 8) || 8;
    const doneLessons = lang === 'nl' ? courseUnits('regels').flatMap((u) => u.lessons).slice(0, doneN) : allLessons.slice(0, doneN);
    const done = Object.fromEntries(doneLessons.map((l) => [l.id, { best: 1, times: 1 }]));
    const progress = { ...emptyProgress, onboarded: true, helpLang: (lang as LangCode) ?? null, sector, region, quiet, completed: done, gender };
    const l = getHelpLanguage(lang as LangCode, gender);
    const zl = regionOf(region);
    const mapLink = zl ? <SocialMapLink region={zl} lang={l} onOpen={() => {}} /> : undefined;
    if (shot === 'words' && lang === 'nl') {
      // The Hulp tab of the work-rules track ("Wie bel je?"); &shelf=1 is "Alle regels".
      if (q.get('shelf') === '1') return <RulesShelf progress={progress} lang={l} onBack={() => {}} />;
      return (
        <>
          <RulesHelp lang={l} onShelf={() => {}} after={mapLink} />
          <BottomNav current="words" onTab={() => {}} lang={l} />
        </>
      );
    }
    if (shot === 'words') {
      return (
        <>
          <WordsHub lang={l} onTips={() => {}} after={mapLink} />
          <BottomNav current="words" onTab={() => {}} lang={l} />
        </>
      );
    }
    return shot === 'tips' ? (
      <Tips progress={progress} lang={l} onBack={() => {}} access={access} />
    ) : (
      <>
        <SettingsShot progress={progress} access={access} />
        <BottomNav current="me" onTab={() => {}} lang={l} />
      </>
    );
  }
  if (shot === 'about') {
    const l = getHelpLanguage(lang as LangCode, gender);
    return (
      <>
        {/* &nl=1: the sections in Dutch (the "NL" toggle on); &nl=0 off, whatever this phone remembers. */}
        <About lang={l} onCoaches={lang === 'nl' ? undefined : () => {}} dutch={q.get('nl') === '1' ? true : q.get('nl') === '0' ? false : undefined} />
        <BottomNav current="about" onTab={() => {}} lang={l} />
      </>
    );
  }
  // The old long path is gone: /?shot=path is the home (&resume=1: its next lesson stopped halfway).
  if (shot === 'path') {
    return <RouteShot shot="route" state="mid" lang={getHelpLanguage(lang as LangCode, gender)} access={access} sector={sector} daily={q.get('daily') === 'due'} resume={q.get('resume')} />;
  }
  // The home, one block at a time: /?shot=route&state=new|mid|finished|shelf|pick|coach|done
  // (see RouteShot); /?shot=all is "Alle onderwerpen". &access=preview, &sector=, &daily=due work too.
  // &askGender=1: a learner from before the gender question, with the one-time card (with &lang=pl).
  // /?shot=topic&cu=u.firstday is a topic page (with &state= as above; &cu= any unit).
  if (shot === 'route' || shot === 'all' || shot === 'topic') {
    return <RouteShot shot={shot} unit={q.get('cu')} resume={q.get('resume')} state={q.get('state') ?? 'mid'} lang={getHelpLanguage(lang as LangCode, gender)} access={access} sector={sector} region={region} daily={q.get('daily') === 'due'} askGender={q.get('askGender') === '1' ? (lang as LangCode) : undefined} />;
  }
  // The whole cast in every mood, big, for judging the drawings.
  if (shot === 'cast') {
    const moods: Mood[] = ['idle', 'happy', 'sad', 'pleased', 'thinking', 'cheer'];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${moods.length}, 1fr)`, gap: 8, padding: 16 }}>
        {CAST.flatMap((who) => moods.map((m) => <Character key={who + m} who={who} mood={m} size={150} />))}
      </div>
    );
  }
  // One step of the work-rules track: /?shot=rule&lang=nl&step=scene|rule|truefalse|whatdo|whoask|
  // model|payslip|card (the default lesson for each kind is in RULE_SHOT; &lesson=r.l.loon.2 another
  // lesson, &id=<step id> one exact step). The step sits at its place in its real lesson. The
  // options are best first (true/false: Waar, Niet waar), so the right one is the 1st card and a
  // wrong one the 2nd (a true/false shot uses a true statement). &retry=1: the step comes back
  // as a mistake at the end.
  if (shot === 'rule') return <RuleShot quiet={quiet} lang={getHelpLanguage((lang ?? 'nl') as LangCode, gender)} q={q} />;
  // "Herhaal vandaag" of the work-rules track: /?shot=daily&lang=nl, the questions of the first
  // two rules units (at most 6, lib/spaced.ts dailyRuleLesson), best option first; &at=2 the third.
  if (shot === 'daily') {
    const ids = courseUnits('regels').slice(0, 2).flatMap((u) => u.lessons.flatMap(gradedStepIds));
    const review = dailyRuleLesson(ids);
    const list = buildLesson(review, { review: true, seed: 1 }).map((e) => bestFirst(e as RuleExercise));
    return (
      <QuietLesson
        quiet={quiet} lesson={review} review lang={getHelpLanguage((lang ?? 'nl') as LangCode, gender)}
        exercises={list} startAt={Number(q.get('at') ?? 0)} onQuit={() => {}} onFinish={() => {}}
      />
    );
  }
  const { lesson } = findLesson('l.gear')!;
  if (shot === 'lesson') {
    // &lesson=l.rights plays another lesson (default Safety gear).
    const picked = findLesson(new URLSearchParams(location.search).get('lesson') ?? '')?.lesson ?? lesson;
    const at = Number(new URLSearchParams(location.search).get('at') ?? 0);
    return (
      <QuietLesson
        quiet={quiet}
        lesson={picked}
        review={false}
        lang={getHelpLanguage(lang as LangCode, gender)}
        exercises={buildLesson(picked, { review: false, seed: 1, quiet, sayings: q.get('sayings') === '1' })}
        startAt={at}
        onQuit={() => {}}
        onFinish={() => {}}
      />
    );
  }
  const [helm, handschoenen, schoenen, hesje] = lesson.words;
  // &word=w.veiligheidsschoenen puts any course word in the spotlight (long-word checks).
  const allWords = units.flatMap((u) => u.lessons.flatMap((l) => l.words));
  const focus = allWords.find((w) => w.id === word);
  const exercises: Record<string, Exercise> = {
    // &text=1: text cards (a review's help language → Dutch; a non-Latin reader gets a speaker per card).
    dutch: { kind: 'dutch', word: helm, options: [hesje, handschoenen, helm], ...(q.get('text') === '1' ? { textOnly: true } : {}) },
    meaning: { kind: 'meaning', word: focus ?? hesje, options: [handschoenen, schoenen, focus ?? hesje] },
    intro: { kind: 'intro', word: focus ?? hesje },
    listen: { kind: 'listen', word: focus ?? schoenen, options: [helm, focus ?? schoenen, hesje] },
    // With options: a non-Latin help language picks the written word (unless writing is on).
    type: { kind: 'type', word: helm, options: [hesje, helm, handschoenen] },
    // Guided matching: three pairs (lib/exercises.ts MATCH_PAIRS).
    match: { kind: 'match', words: [helm, handschoenen, hesje] },
    build: { kind: 'build', sentence: lesson.sentences[0], tiles: buildTiles(lesson.sentences[0], lesson, createRng(3)) },
  };
  // Break-room chat: "Wil je koffie of thee?" → "Thee, graag." (right), "Tot morgen!" (wrong).
  const coffee = findLesson('l.shift')!.lesson.dialogues![0];
  const byeReply = allReplies.find((r) => r.id === 'c.hello.a')!;
  exercises.chat = { kind: 'chat', dialogue: coffee, options: [coffee.reply, byeReply] };
  // Workplace culture: the speak-up tip and its situation (best option listed first);
  // &tip=l.hello another lesson's tip (that one quotes Dutch: "Zeg maar je, hoor!").
  const speakTip = tipForLesson(q.get('tip') ?? 'l.speakup') ?? tipForLesson('l.speakup')!;
  exercises.tip = { kind: 'tip', tip: speakTip };
  exercises.situation = { kind: 'situation', tip: speakTip, options: speakTip.options };
  // A saying in a later lesson (src/content/sayings.ts): /?shot=saying, and its question
  // /?shot=saying-ask; &saying=l.health another lesson's saying (default De klant is koning).
  const saying = sayingForLesson(q.get('saying') ?? 'l.checkout') ?? sayingForLesson('l.checkout')!;
  exercises.saying = { kind: 'saying', saying };
  const sayingAsk = sayingQuestion(saying);
  exercises['saying-ask'] = { kind: 'situation', tip: sayingAsk, options: sayingAsk.options };
  // Speaking practice: /?shot=speak (idle), speak-rec (recording), speak-compare (after recording),
  // speak-off (no microphone); &item=sentence asks a short sentence instead of a word.
  if (shot.startsWith('speak')) {
    const phase = ({ 'speak-rec': 'recording', 'speak-compare': 'review', 'speak-off': 'off' } as const)[shot] ?? 'idle';
    setSpeakShotPhase(phase);
    exercises[shot] = { kind: 'speak', item: q.get('item') === 'sentence' ? lesson.sentences[0] : focus ?? handschoenen };
  }
  const ex = exercises[shot] ?? exercises.dutch;
  // A few intro exercises in front would move the progress bar; pad so it sits at ~40%.
  const pad: Exercise[] = Array.from({ length: 3 }, () => ex);
  // The chat page sits a little further into the lesson (~55%), as in the reference.
  const before: Exercise[] = shot === 'chat' ? [...pad, ...pad, ex] : pad;
  return (
    <QuietLesson
      quiet={quiet}
      lesson={shot === 'chat' ? findLesson('l.shift')!.lesson : lesson}
      review
      lang={getHelpLanguage(lang as LangCode, gender)}
      exercises={[...before, ex, ...pad]}
      startAt={shot === 'retry' ? before.length + pad.length + 2 : before.length}
      // /?shot=retry: the lesson is through and three mistakes come back (the second is on now).
      // They come back in a new form, as in a real lesson (lib/exercises.ts forRetry).
      repeats={shot === 'retry' ? [exercises.meaning, exercises.dutch, exercises.build].map((e, i) => forRetry(e, lesson, i + 1)) : undefined}
      onQuit={() => {}}
      onFinish={() => {}}
    />
  );
}

/** The default real step per kind for /?shot=rule (true/false: a true statement). */
const RULE_SHOT: Record<RuleKind, { lesson: string; id?: string }> = {
  scene: { lesson: 'r.l.ziek.1' },
  rule: { lesson: 'r.l.ziek.1' },
  truefalse: { lesson: 'r.l.ziek.1', id: 'r.l.ziek.1.tf1' },
  whatdo: { lesson: 'r.l.ziek.1' },
  whoask: { lesson: 'r.l.loon.2' },
  model: { lesson: 'r.l.ziek.1' },
  payslip: { lesson: 'r.l.loon.2' },
  // The roster (a sum). Others: &id=r.l.winkel.3.ca1 (kassabon), r.l.afronden.1.ca1 (werkbon).
  card: { lesson: 'r.l.rekenen.1', id: 'r.l.rekenen.1.ca1' },
};

/** Best option first (a fixed order for the screenshot and the max-3 counter). */
function bestFirst(ex: RuleExercise): RuleExercise {
  const sort = <T extends { best: boolean }>(xs: readonly T[]) => [...xs].sort((a, b) => Number(b.best) - Number(a.best));
  switch (ex.kind) {
    case 'whatdo': return { ...ex, step: { ...ex.step, options: sort(ex.step.options) } };
    case 'whoask': return { ...ex, step: { ...ex.step, options: sort(ex.step.options) } };
    case 'payslip': return { ...ex, step: { ...ex.step, options: sort(ex.step.options) } };
    case 'card': return { ...ex, step: { ...ex.step, options: sort(ex.step.options) } };
    default: return ex;
  }
}

function RuleShot({ quiet, lang, q }: { quiet: boolean; lang?: ReturnType<typeof getHelpLanguage>; q: URLSearchParams }) {
  const kindParam = q.get('step');
  const kind: RuleKind = RULE_KINDS.find((k) => k === kindParam) ?? 'whatdo';
  const id = q.get('id') ?? (q.get('lesson') ? null : RULE_SHOT[kind].id ?? null);
  // With the regions' rules units (&lesson=rg.zl.r.l.4: the dialect card is its rule step &id=rg.zl.r.l.4.ru2).
  const all = [...courseUnits('regels'), ...allRegionUnits('regels')].flatMap((u) => u.lessons);
  const lesson = (id ? all.find((l) => l.steps?.some((s) => s.id === id)) : undefined)
    ?? all.find((l) => l.id === (q.get('lesson') ?? RULE_SHOT[kind].lesson) && l.steps?.some((s) => s.kind === kind))
    ?? all.find((l) => l.steps?.some((s) => s.kind === kind))
    ?? all[0];
  const list = buildRuleLesson(lesson, { seed: 1 }).map((e) => bestFirst(e as RuleExercise));
  const at = Math.max(0, list.findIndex((e) => (e as RuleExercise).step.id === id || (!id && e.kind === kind)));
  const retry = q.get('retry') === '1';
  return (
    <QuietLesson
      quiet={quiet}
      lesson={lesson}
      review={false}
      lang={lang}
      exercises={list}
      repeats={retry ? [list[at]] : undefined}
      startAt={retry ? list.length : at}
      onQuit={() => {}}
      onFinish={() => {}}
    />
  );
}

const doneIds = (...ids: string[]) => Object.fromEntries(ids.map((id) => [id, { best: 1, times: 1 }]));
const unitLessons = (...ids: string[]) => ids.flatMap((id) => findUnit(id)?.lessons.map((l) => l.id) ?? []);

/**
 * The home in a fixed state, with a working choice (tapping a suggestion makes it current):
 *  new: nothing done; mid (and pick): the first lesson done; finished: the first unit done (2
 *  suggestions); shelf and done: four units done and the fifth started; coach: a coach link to
 *  "Pay" (marked). shot=all is All topics (a row opens its topic page); shot=topic opens &cu=.
 */
function RouteShot({ shot, state, lang: shotLang, access, sector, region, daily, askGender, unit, resume }: { shot: string; state: string; lang?: ReturnType<typeof getHelpLanguage>; access: Access; sector?: SectorChoice; region?: RegionChoice; daily: boolean; askGender?: LangCode; unit?: string | null; resume?: string | null }) {
  // The work-rules track (&lang=nl): the same states on its own course.
  const rules = shotLang?.code === 'nl';
  const rc = courseUnits('regels');
  const completed = rules ? (
    state === 'new' ? {}
    : state === 'mid' || state === 'pick' || state === 'coach' ? doneIds(rc[0]?.lessons[0]?.id ?? '')
    : state === 'finished' ? doneIds(...unitLessons(rc[0]?.id ?? ''))
    : doneIds(...unitLessons(...rc.slice(0, 2).map((u) => u.id)), rc[2]?.lessons[0]?.id ?? '')
  ) :
    state === 'new' ? {}
    : state === 'mid' || state === 'pick' || state === 'coach' ? doneIds('l.hello')
    : state === 'finished' ? doneIds(...unitLessons('u.firstday'))
    : doneIds(...unitLessons('u.firstday', 'u.help', 'u.tools', 'u.safety'), 'l.things');
  const [progress, setProgress] = useState<Progress>({
    ...emptyProgress, onboarded: true, xp: 120, streak: 7, sector: sector ?? 'none' as SectorChoice, region, completed,
    currentUnit: state === 'coach' ? 'u.pay' : undefined,
    // &askGender=1: the help language is stored, the gender is not. The work-rules track: 'nl'.
    helpLang: askGender ?? (rules ? 'nl' : null),
  });
  const lang = askGender ? getHelpLanguage(askGender, progress.gender) : shotLang;
  // &resume=1: the block's next lesson was stopped halfway ("Continue · 12/18").
  useState(() => (resume ? seedResume(resume, false) : clearSave()));
  const today = dayKey(new Date());
  // &daily=1: the "Herhaal vandaag" card, with the words of "Hello" due (the rules track: the
  // questions of its first lesson).
  const dueItems = rules ? gradedStepIds(rc[0]?.lessons[0] ?? { id: '', title: '', words: [], sentences: [] }) : findLesson('l.hello')!.lesson.words.map((w) => w.id);
  const card = daily ? dailyCard(Object.fromEntries(dueItems.map((id) => [id, { box: 1, due: today }])), today, undefined, rules ? 'regels' : 'taal') : null;
  const words2 = learnedItems(rules ? 'regels' : 'taal', progress.completed);
  const bramParam = new URLSearchParams(location.search).get('bram');
  const bram = (['intro', 'hello', 'back', 'due', 'streak', 'done'] as const).find((k) => k === bramParam);
  const [open, setOpen] = useState<string | null>(shot === 'topic' ? unit ?? (rules ? rc[0]?.id ?? null : 'u.firstday') : null);
  const topic = open ? findUnit(open) : undefined;
  if (topic) {
    return (
      <>
        <TopicPage unit={topic} progress={progress} lang={lang} access={access} onBack={() => setOpen(null)} onStart={() => {}} onRestart={() => {}} onPocket={() => {}} onCertificate={() => {}} onUpgrade={() => {}} />
        <BottomNav current="route" onTab={() => {}} lang={lang} />
      </>
    );
  }
  if (shot === 'all' || shot === 'topic') {
    return (
      <>
        <AllTopics progress={progress} lang={lang} access={access} onBack={() => {}} onOpen={setOpen} />
        <BottomNav current="route" onTab={() => {}} lang={lang} />
      </>
    );
  }
  return (
    <>
      {/* &quiet=1: "Without sound" is on (the small muted speaker in the top bar). */}
      {/* &bram=intro|hello|back|due|streak|done: Bram's line in the top bar (the flame is lit only for done;
          intro is the very first home, so no streak yet: use it with &state=new). */}
      <TopBar streak={bram === 'intro' ? 0 : 7} done={!bram || bram === 'done'} words={words2} lang={lang} quiet={new URLSearchParams(location.search).get('quiet') === '1'}
        greeting={<HomeGreeting progress={progress} due={card?.due ?? 0} lang={lang} force={bram ? { kind: bram, n: bram === 'due' ? 6 : 7 } : undefined} />} />
      <Route
        progress={progress} lang={lang} access={access} daily={card} onDaily={() => {}}
        onStart={() => {}} onRestart={() => {}} onAll={() => {}} onUpgrade={() => {}}
        onPick={(id) => setProgress((p) => ({ ...p, currentUnit: id }))}
        focusUnit={state === 'coach' ? 'u.pay' : null}
        note={<NoVoiceNote lang={lang} />}
      />
      <BottomNav current="route" onTab={() => {}} lang={lang} />
    </>
  );
}

/** The lesson with a working sound toggle, as App gives it (the setting lives in progress there). */
function QuietLesson({ quiet: start, ...props }: Omit<React.ComponentProps<typeof LessonPlayer>, 'quiet' | 'onQuiet'> & { quiet: boolean }) {
  const [quiet, setQuiet] = useState(start);
  setQuietAudio(quiet);
  return <LessonPlayer {...props} quiet={quiet} onQuiet={setQuiet} />;
}

/**
 * Settings that work in place: /?shot=settings is the menu; &page=me|lessons|phone a list, and
 * &page=<setting> one setting's page (see src/lib/settingsMenu.ts). Choices change the page, and
 * an answer goes back to its list, as in the app. &text=large|xl starts at that text size.
 */
function SettingsShot({ progress: start, access }: { progress: Progress; access: Access }) {
  const [page, setPage] = useState<SettingsPage | undefined>(() => (new URLSearchParams(location.search).get('page') as SettingsPage | null) ?? undefined);
  const [progress, setProgress] = useState<Progress>(() => ({ ...start, textSize: (new URLSearchParams(location.search).get('text') as TextSize | null) ?? 'normal' }));
  const set = (patch: Partial<Progress>) => setProgress((p) => ({ ...p, ...patch }));
  const pickSize = (textSize: TextSize) => {
    set({ textSize });
    if (textSize === 'normal') delete document.documentElement.dataset.text;
    else document.documentElement.dataset.text = textSize;
  };
  const up = (n = 1) => setPage((p) => {
    let at: SettingsPage | null | undefined = p;
    for (let i = 0; i < n && at; i++) at = SETTINGS_PARENT[at];
    return at ?? undefined;
  });
  return (
    <Settings
      progress={progress}
      lang={getHelpLanguage(progress.helpLang, progress.gender)}
      page={page}
      onPage={setPage}
      onReturn={up}
      onLang={(helpLang) => set({ helpLang })}
      onGender={(gender) => set({ gender })}
      onSector={(sector) => set({ sector })}
      onRegion={(region) => set({ region })}
      onTheme={(theme) => set({ theme })}
      onTextSize={pickSize}
      onVoice={(voice) => set({ voice })}
      onQuiet={(quiet) => set({ quiet })}
      onReset={() => {}}
      onRestore={() => {}}
      access={access}
      onAccess={() => {}}
      onCertificate={() => {}}
    />
  );
}

/** The onboarding gender step for a help language, with a working choice. */
function GenderShot({ lang, gender, greet }: { lang: LangCode; gender?: Gender; greet?: boolean }) {
  const [picked, setPicked] = useState(gender);
  return <GenderScreen lang={getHelpLanguage(lang, picked)} current={picked} onDone={setPicked} greet={greet} />;
}

/** Every word of the course with its picture at 120 px and 48 px, grouped by unit, plus the
 *  unit banner pictures on their colours and the kit's building blocks. Words still without a
 *  picture show their emoji, dimmed; abstract words (no picture in the course) are greyed and
 *  marked "geen plaatje". */
function PicturesSheet() {
  const words = units.flatMap((u) => u.lessons.flatMap((l) => l.words));
  const done = words.filter((w) => pictures[w.id]).length;
  const abstract = words.filter((w) => !hasPicture(w)).length;
  return (
    <div className="pics-page">
      <h1>Woordplaatjes</h1>
      <p className="pics-id">{done} / {words.length} drawn · {abstract} abstract (geen plaatje: word card only, greyed here)</p>
      <h2>Bouwstenen (kit)</h2>
      <div className="pics-grid">
        {KIT_SAMPLES.map(([name, draw]) => (
          <div key={name} className="pics-cell">
            <div className="pics-row">
              <svg viewBox="0 0 120 120" width={120} height={120} aria-hidden>{draw()}</svg>
              <svg viewBox="0 0 120 120" width={48} height={48} aria-hidden>{draw()}</svg>
            </div>
            <span className="pics-id">{name}</span>
          </div>
        ))}
      </div>
      {units.map((unit) => {
        const banner = unitPictures[unit.id];
        return (
          <section key={unit.id}>
            <div className="pics-unit">
              {[72, 48].map((px) => (
                <div key={px} className="pics-banner" style={{ background: unit.color, width: px + 16, height: px + 16 }}>
                  {banner ? <svg viewBox="0 0 120 120" width={px} height={px} aria-hidden>{banner()}</svg> : <span className="word-emoji">{unit.emoji}</span>}
                </div>
              ))}
              <div>
                <h2 style={{ margin: 0 }}>{unit.title}</h2>
                <span className="pics-id">{unit.id} · {unit.titleNl}</span>
              </div>
            </div>
            <div className="pics-grid">
              {unit.lessons.flatMap((l) => l.words).map((w) => (
                <div key={w.id} className={`pics-cell ${!hasPicture(w) ? 'pics-abstract' : pictures[w.id] ? '' : 'pics-missing'}`}>
                  <div className="pics-row">
                    <WordPicture id={w.id} emoji={w.emoji} size={120} />
                    <WordPicture id={w.id} emoji={w.emoji} size={48} />
                  </div>
                  {!hasPicture(w) && <span className="pics-none" lang="nl">geen plaatje</span>}
                  <span className="pics-nl" lang="nl">{w.nl}</span>
                  <span className="pics-id">{w.id}</span>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

const KIT_SAMPLES: [string, () => React.ReactNode][] = [
  ['Hand open / point', () => (<><kit.Ground cy={108} rx={40} /><kit.Hand pose="open" x={36} y={100} scale={1.05} sleeve={[kit.PAL.blue, kit.PAL.blueShade]} /><kit.Hand pose="point" x={86} y={100} skin={kit.SKIN.jada} sleeve={['#ffc929', '#e0a800']} /></>)],
  ['Hand thumb / fist / hold', () => (<><kit.Hand pose="thumb" x={24} y={96} scale={0.85} skin={kit.SKIN.amina} /><kit.Hand pose="fist" x={60} y={96} scale={0.85} skin={kit.SKIN.henk} /><kit.Hand pose="hold" x={96} y={96} scale={0.85} /></>)],
  ['Box / Box open', () => (<><kit.Ground cy={100} rx={50} /><kit.Box x={8} y={58} w={44} h={38} depth={12} label /><kit.Box x={60} y={58} w={42} h={38} depth={12} open /></>)],
  ['Bubble + Dots / QuestionMark', () => (<><kit.Bubble x={8} y={10} w={70} h={42}><kit.Dots cx={43} cy={31} /></kit.Bubble><kit.Bubble x={46} y={62} w={60} h={40} tail="right"><kit.QuestionMark x={76} y={82} size={28} /></kit.Bubble></>)],
  ['Arrow / CurveArrow', () => (<><kit.Arrow from={[14, 30]} to={[104, 30]} /><kit.CurveArrow from={[20, 100]} to={[100, 90]} bend={30} color={kit.PAL.orange} /></>)],
  ['Sparkle / Motion / ExclaimMark', () => (<><kit.Sparkle x={30} y={30} r={14} /><kit.Sparkle x={58} y={18} r={7} color={kit.PAL.sky} /><kit.Motion x={86} y={70} dir={-90} gap={10} len={12} /><kit.ExclaimMark x={86} y={74} size={34} /><kit.Sparkle x={30} y={84} r={10} color={kit.PAL.ok} /></>)],
  ['Clock / alarm', () => (<><kit.Ground cy={108} rx={44} /><kit.Clock cx={32} cy={70} r={24} hour={3} minute={0} /><kit.Clock cx={86} cy={62} r={22} hour={7} minute={30} bells rim={kit.PAL.red} rimShade={kit.PAL.redShade} /></>)],
  ['Calendar', () => <kit.Calendar />],
  ['Tick / Cross', () => (<><kit.Tick x={34} y={58} r={26} /><kit.Cross x={86} y={58} r={26} /></>)],
  ['Bust bram / amina', () => (<><kit.Bust who="bram" x={34} y={116} scale={0.5} /><kit.Bust who="amina" x={88} y={116} scale={0.5} expr="pleased" flip /></>)],
  ['Bust henk / jada', () => (<><kit.Bust who="henk" x={34} y={116} scale={0.5} /><kit.Bust who="jada" x={88} y={116} scale={0.5} expr="joy" flip /></>)],
];

/** Saved lesson runs for the path shots (see &resume= on the path). */
function seedResume(mode: string | null, certUnit: boolean) {
  clearSave();
  if (!mode) return;
  const put = (id: string, review: boolean, at: number, repeats: number) => {
    const lesson = findLesson(id)?.lesson;
    if (!lesson) return;
    const initial = buildLesson(lesson, { review, seed: 7 });
    const queue = [...initial, ...initial.slice(2, 2 + repeats)];
    const save = makeSave({ lessonId: id, review, quiet: false, seed: 7, initial, queue, index: at, right: 3, total: 5, words: {}, run: 0, misses: 0, now: Date.now() });
    if (save) writeSave(save);
  };
  const next = certUnit ? units[1].lessons[0].id : units[0].lessons[1].id;
  const lesson = findLesson(next)?.lesson;
  if (lesson) {
    const n = buildLesson(lesson, { review: false, seed: 7 }).length;
    put(next, false, Math.min(12, n - 1), Math.max(0, 18 - n));
  }
  if (mode === 'done') put('l.hello', true, 5, 1);
}

/** Every variant of the logo at one size, each in a box the icon script can find by its id. */
function LogoSheet({ px }: { px: number }) {
  const variants = [
    ['full-round', 'full', 'round'], ['full-square', 'full', 'square'], ['full-mask', 'full', 'mask'],
    ['small-round', 'small', 'round'], ['small-square', 'small', 'square'],
  ] as const;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: 16 }}>
      {variants.map(([id, variant, shape]) => (
        <div key={id} id={`icon-${id}`} style={{ width: px, height: px, lineHeight: 0 }}>
          <LogoMark size={px} variant={variant} shape={shape} />
        </div>
      ))}
      <h1 id="logo-wordmark" className="hero-logo"><LogoMark size={52} /><Wordmark /></h1>
      <h1 id="logo-wordmark-big" className="hero-logo"><LogoMark size={88} /><Wordmark /></h1>
    </div>
  );
}
