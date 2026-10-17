import { useEffect, useRef, useState } from 'react';
import { findLesson, playLesson } from './content/curriculum';
import { ensureLanguage, getHelpLanguage, isLanguageLoaded } from './i18n';
import { Splash } from './components/Splash';
import { loadPictures, usePicturesLoaded } from './pictures';
import type { UiCode } from './i18n/types';
import { isPlayable, learnedItems } from './content/courses';
import { trackOf } from './lib/track';
import { setDeviceRate, setPreferredVoice, setQuietAudio } from './lib/audio';
import { applyTheme } from './lib/theme';
import { LessonPlayer, type LessonResult } from './components/LessonPlayer';
import { About, BottomNav, Onboarding, Phrasebook, Result, Tips, TopBar, WordsHub, type Tab } from './components/Screens';
import { HomeGreeting } from './components/BramSays';
import { NoVoiceNote, RulesHelp, RulesShelf } from './components/RulesHelp';
import { GenderScreen } from './components/Gender';
import { shouldAskGender } from './lib/askGender';
import { onboardingStep, previousStep, stepIndex, trialLessonAllowed, type OnbStep } from './lib/onboarding';
import type { SettingsPage } from './lib/settingsMenu';
import { AllTopics, Route, TopicPage } from './components/Route';
import { useAutoOffline } from './components/Offline';
// Screens in files of their own (loaded when needed, and in the background after the start).
import { Admin, Coaches, KeepScreen, Milestone, PocketCardScreen, Settings, StreakStopped, needAtStart, warmScreensLater } from './lazyScreens';
import { keepOffered } from './lib/keepOffered';
import { Gate } from './components/Gate';
import { SectorScreen } from './components/Sector';
import type { SectorChoice } from './content/sectors';
import { isMixLesson } from './content/review';
import { type Access, lessonAllowed, loadAccess, saveAccess, unitAllowed } from './lib/access';
import { blockAfterLesson, pickBlock, routeNextLesson } from './lib/route';
import { forgetLinkedUnit, takeLinkedUnit } from './lib/unitLink';
import { bestStreak, completeDaily, completeLesson, currentStreak, dayKey, doneToday, emptyProgress, loadProgress, saveProgress, settleStreak, streakWentUp, workWeek } from './lib/progress';
import { DAILY_ID, addLessonItems, addLessonWords, applyReview, dailyCard, dailyLesson, dailyRuleIds, dailyRuleLesson, dailyWordIds, dueIds, gradedStepIds, seedCards, strongerCount } from './lib/spaced';
import { gloss } from './i18n';
import { keepStorageAgain, persistStorage } from './lib/install';
import { CertEarned, CertificateScreen } from './components/Certificate';
import { SAYINGS_FROM } from './content/sayings';
import { earnCertificates, findUnit, unitDone, unitJustDone } from './lib/certificate';
import { clockMinutes, count, countOpen, pauseClock, quarterOf, resumeClock, startClock } from './lib/count';
import { explainReport, testerMode } from './lib/report';
import { setReloadWhen } from './lib/appUpdate';
import { clearSave } from './lib/resume';
import { applyTextSize } from './lib/textSize';
import { applyEnglish, englishLangFor } from './lib/english';
import { SocialMap, SocialMapLink } from './components/SocialMap';
import { regionOf, type RegionChoice } from './content/regio';
import { ensureRegionFor, regionReady } from './lib/region';

type View =
  | { name: 'home' }
  /** ids: the words of today's review (lessonId DAILY_ID), fixed when it starts. */
  /** fresh: "Start again" (the saved place is kept until the first answer, see LessonPlayer). */
  | { name: 'lesson'; lessonId: string; review: boolean; ids?: string[]; fresh?: boolean }
  /** streakUp: the day streak reached this number with this lesson, so the milestone follows. */
  /** phrases: the first lesson's result, once: a row to the emergency phrases. */
  | { name: 'result'; right: number; total: number; newWords: number; words: number; remember?: string; streakUp?: number; repeated?: number; stronger?: number; waiting?: number; next?: string; cert?: string; skipped?: number; kind?: 'lesson' | 'daily' | 'review'; phrases?: boolean }
  /** "Certificaat behaald": once, after the result of a unit's last lesson (then the streak, if it went up). */
  | { name: 'cert-earned'; unit: string; streakUp?: number }
  /** A unit's certificate; streakUp: opened from "Certificaat behaald", the streak milestone still follows. */
  | { name: 'certificate'; unit: string; streakUp?: number }
  /** A unit's pocket card ("Spiekkaartje"): its five most useful phrases. */
  | { name: 'pocket'; unit: string; streakUp?: number }
  | { name: 'streak'; streak: number }
  /** The reminder and home-screen offer, once, at the end of the first lesson with the code (G4 r5). */
  | { name: 'keep' }
  | { name: 'words' }
  /** The emergency phrases. streakUp / cert: opened from the first lesson's result, so the
   *  certificate or the streak milestone still follows. */
  | { name: 'phrasebook'; streakUp?: number; cert?: string }
  | { name: 'tips' }
  /** The region's "Sociale kaart" (from the Hulp tab, only with a region chosen in Settings). */
  | { name: 'socialmap' }
  /** upgrade: opened from a locked unit, so the unlock card is scrolled into view. */
  /** Settings: the menu, a list or one setting's page. upgrade: opened from a locked topic (the
   *  unlock page). up: how many Settings pages lie between this one and the menu in history. */
  | { name: 'settings'; upgrade?: boolean; page?: SettingsPage; up?: number }
  /** "Voor begeleiders": a link per topic to send (from About). */
  | { name: 'coaches' }
  | { name: 'about' }
  /** "Alle onderwerpen": every unit as one long path (from the link at the foot of the home). */
  | { name: 'all' }
  /** A topic page (from All topics, or a coach link to a finished or locked topic). */
  | { name: 'topic'; unit: string; focus?: boolean }
  | { name: 'admin' };

const HOME: View = { name: 'home' };

/**
 * What App keeps in history.state: the screen, and how many screens deep it is (0 = home). In the
 * first run every page has its own entry: `onb` is its step (src/lib/onboarding.ts stepIndex) and
 * `stack` how many entries lie above the first page (also the language list and the sector's
 * second step, src/lib/onbHistory.ts), so the first run can be unwound when it is done.
 */
interface Entry { view: View; depth: number; onb?: number; stack?: number }
const current = (): Entry | null => {
  const st = history.state as Partial<Entry> | null;
  return st && st.view ? (st as Entry) : null;
};
/** A screen a reload would not bring back: a lesson, its result and what follows it, the admin page. */
const passing = (v: View) => v.name === 'lesson' || v.name === 'result' || v.name === 'streak' || v.name === 'cert-earned' || v.name === 'admin'
  || (v.name === 'phrasebook' && Boolean(v.streakUp || v.cert));
/** After a reload: back on the screen you were on, but a lesson or its result starts over at home. */
const restored = (): View => {
  const v = current()?.view;
  return !v || passing(v) ? HOME : v;
};
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
/** A coach link (?unit=pay) asks to open the path at that unit; read once at start. */
const linkedUnit = takeLinkedUnit();
// The first screen's own file, when it has one (src/lazyScreens.tsx): main.tsx renders once it is here,
// so the splash stays up meanwhile. 'stopped': the streak stopped, its page shows on the home first.
needAtStart(adminRequested() ? 'admin' : coachesRequested() ? 'coaches' : linkedUnit ? 'home' : restored().name, settleStreak(loadProgress(), new Date()).broken ? 'stopped' : '');

/**
 * The saved progress, brought up to date for today: a free day covers one missed day; when the
 * streak stopped, `stopped` holds the lost streak so a calm screen can say so once.
 */
function startProgress() {
  const { progress, broken } = settleStreak(loadProgress(), new Date());
  return { progress, stopped: broken ?? null };
}

export default function App() {
  const [start] = useState(startProgress);
  const [progress, setProgress] = useState(start.progress);
  /** "Je reeks is gestopt bij N": shown once on this open, before the path. */
  const [stopped, setStopped] = useState<number | null>(start.stopped);
  /** The lesson just finished: the path scrolls to the next one and stamps this one in. */
  const [arrived, setArrived] = useState<string | null>(null);
  const [access, setAccess] = useState<Access | null>(loadAccess);
  /** Back to the language from the next page: the list opens (the guess was seen). */
  const [langAgain, setLangAgain] = useState(false);
  /** Back from the sector to the password page: the accepted code is kept (not cleared). */
  const [gateAgain, setGateAgain] = useState(false);
  /** The code typed on the password page (this visit only): back in the field on the way back. */
  const typedCode = useRef('');
  /** The language was just picked: the next page shows Bram waving and introducing himself (once). */
  const [greet, setGreet] = useState(false);
  /** A coach link to a topic outside the preview: the home offers its unlock (this visit). */
  const [lockedLink, setLockedLink] = useState<string | null>(null);
  const grant = (a: Access, typed?: string) => {
    // A code for the full version: counted with the version it replaces (none yet, or the sneak
    // preview), so the owner sees how many ask for a code after looking around.
    if (a === 'full' && access !== 'full') count('unlock', { lang: progress.helpLang, access });
    saveAccess(a);
    setAccess(a);
    setGateAgain(false);
    if (typed !== undefined) typedCode.current = typed;
  };
  const [view, setView] = useState<View>(() => adminRequested() ? { name: 'admin' } : linkedUnit ? HOME : restored());
  /** The unit to show first on the path (from a coach link), until the path has shown it. */
  const [focusUnit, setFocusUnit] = useState<string | null>(linkedUnit);
  /** Bumped when the system Back button is pressed in a lesson (the lesson asks before quitting). */
  const [lessonBack, setLessonBack] = useState(0);
  const viewRef = useRef(view);
  viewRef.current = view;
  // A new version is loaded only at a calm moment: past the first run, on a screen a reload brings back.
  const calmRef = useRef(false);
  /** Set while the app itself goes back out of a lesson, so that Back is not intercepted. */
  const leaving = useRef(false);

  // The first run, one question per page: language, "Woman or man?" (help languages with gender),
  // password, sector (src/lib/onboarding.ts); 'done' is the app itself.
  const step: OnbStep = onboardingStep(progress, access, gateAgain);
  /** One page back in the first run. An accepted code is kept: it is never cleared on the way back. */
  const stepBack = () => {
    const to = previousStep(step, progress);
    if (to === 'language') {
      setLangAgain(true);
      if (access) setGateAgain(true);
      setProgress((p) => ({ ...p, onboarded: false }));
    } else if (to === 'gender') {
      if (access) setGateAgain(true);
      setProgress((p) => ({ ...p, gender: undefined, genderAsked: false }));
    } else if (to === 'gate') {
      setGateAgain(true);
    }
  };
  const onbRef = useRef({ step, back: stepBack });
  onbRef.current = { step, back: stepBack };
  /** A first-run page's back arrow: through the history when the page has its own entry (so the
   *  phone's Back and the arrow stay in step), else straight back. */
  const onbBack = () => {
    const at = current()?.onb ?? 0;
    if (at > 0 && at === stepIndex(step)) history.back();
    else stepBack();
  };

  /*
   * History: home is depth 0. Opening a screen pushes an entry, so the phone's Back button
   * returns to the previous screen instead of leaving the app. Screens that follow each other
   * without a way back (lesson → result → streak) replace their entry, so Back from the result
   * goes home and no junk entries pile up.
   */
  const go = (next: View) => {
    const cur = current();
    // In the first run ("Try one lesson first"), the lesson's entry stays part of that run.
    const onb = cur?.onb === undefined ? {} : { onb: cur.onb, stack: (cur.stack ?? 0) + 1 };
    history.pushState({ view: next, depth: (cur?.depth ?? 0) + 1, ...onb } satisfies Entry, '');
    setView(next);
  };
  const replace = (next: View) => {
    leaving.current = false;
    const cur = current();
    const onb = cur?.onb === undefined ? {} : { onb: cur.onb, stack: cur.stack };
    history.replaceState({ view: next, depth: cur?.depth ?? 0, ...onb } satisfies Entry, '');
    setView(next);
  };
  /**
   * Bottom bar. Route always goes to the home and Settings always to the Settings menu, from any
   * depth. The history is put back to [home] or [home, tab] (Hulp, Instellingen and Over sit one
   * level above the home), so the phone's Back from a tab returns home and never steps back into
   * the pages that were open before.
   */
  const tab = (t: Tab) => {
    const next: View =
      t === 'words' ? { name: 'words' } : t === 'me' ? { name: 'settings' } : t === 'about' ? { name: 'about' } : HOME;
    const now = viewRef.current;
    if (now.name === next.name && !(now.name === 'settings' && (now.page || now.upgrade))) return;
    const depth = current()?.depth ?? 0;
    const land = () => {
      if (next.name === 'home') { replace(HOME); return; }
      // On the home: one entry above it; anywhere else this entry is already one above the home.
      if ((current()?.depth ?? 0) === 0) go(next);
      else replace(next);
    };
    // Deeper than one level above the home: walk the history back to depth 1 (or the home), then land.
    const target = next.name === 'home' ? 0 : 1;
    if (depth > target) {
      const onPop = () => { window.removeEventListener('popstate', onPop); leaving.current = false; land(); };
      window.addEventListener('popstate', onPop);
      leaving.current = true;
      history.go(target - depth);
      return;
    }
    land();
  };
  /** Back to the previous screen (as the Back button would), or home when there is none. */
  const back = () => {
    if ((current()?.depth ?? 0) > 0) history.back();
    else replace(HOME);
  };

  useEffect(() => {
    if (!current() && !adminRequested()) history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '');
    const onPop = () => {
      if (adminRequested()) return; // #beheer: the hashchange handler opens the admin page
      if (viewRef.current.name === 'lesson' && !leaving.current) {
        // Stay in the lesson (put its entry back) and open its pause sheet.
        const lesson = viewRef.current;
        history.pushState({ view: lesson, depth: (current()?.depth ?? 0) + 1 } satisfies Entry, '');
        setLessonBack((n) => n + 1);
        return;
      }
      leaving.current = false;
      // First run: Back goes one page back (as the page's own back arrow does), never out of the app.
      const onb = onbRef.current;
      if (onb.step !== 'done') {
        const target = current()?.onb ?? 0;
        if (target < stepIndex(onb.step)) onb.back();
      }
      const v = current()?.view ?? HOME;
      // A finished lesson's entry was replaced by its result; never step back into a lesson.
      setView(v.name === 'lesson' || v.name === 'result' || v.name === 'streak' || v.name === 'cert-earned' ? HOME : v);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // First run: one history entry per page, so the phone's Back goes one question back (the
  // popstate handler above) instead of leaving the app halfway. When the run is done, the history
  // steps back to its first entry and the home takes that place: Back from the home leaves the app.
  const prevStep = useRef(step);
  useEffect(() => {
    if (adminRequested()) return;
    const was = prevStep.current;
    prevStep.current = step;
    // Bram's "Hallo!" is only on the first page after the language.
    if (was !== step && was !== 'language') setGreet(false);
    const cur = current();
    const at = cur?.onb ?? 0;
    const idx = stepIndex(step);
    if (step === 'done') {
      if (cur?.onb === undefined) return;
      const n = cur.stack ?? 0;
      if (n > 0) {
        leaving.current = true;
        const onPop = () => {
          window.removeEventListener('popstate', onPop);
          leaving.current = false;
          history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '');
        };
        window.addEventListener('popstate', onPop);
        history.go(-n);
      } else {
        history.replaceState({ view: cur.view, depth: cur.depth } satisfies Entry, '');
      }
      return;
    }
    if (idx > at) history.pushState({ view: HOME, depth: 0, onb: idx, stack: (cur?.stack ?? 0) + 1 } satisfies Entry, '');
    else if (idx < at && cur) history.replaceState({ ...cur, onb: idx } satisfies Entry, '');
  }, [step]);

  /** "Voor begeleiders" straight from #begeleiders in the address (a coach's bookmark): no
   *  language choice or code first, it is a Dutch page for the coach. */
  const [coachDirect, setCoachDirect] = useState(coachesRequested);
  // The owner's hidden page opens with #beheer in the address.
  useEffect(() => {
    const onHash = () => {
      if (adminRequested()) setView({ name: 'admin' });
      setCoachDirect(coachesRequested());
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  // The help language's texts load on demand (src/i18n/index.ts). Until they are here the splash
  // shows, so no screen ever renders without its help text; offline without a saved copy: retry.
  const [langTry, setLangTry] = useState(0);
  const [langFailed, setLangFailed] = useState(false);
  const langReady = isLanguageLoaded(progress.helpLang);
  useEffect(() => {
    if (langReady) return;
    let live = true;
    setLangFailed(false);
    ensureLanguage(progress.helpLang).then(
      () => { if (live) setLangTry((n) => n + 1); },
      () => { if (live) setLangFailed(true); },
    );
    return () => { live = false; };
  }, [progress.helpLang, langReady, langTry]);
  // A file that failed to load is not fetched again by the browser in this page: back online (or
  // on the retry button) the page reloads, which is quick and keeps everything.
  useEffect(() => {
    if (!langFailed) return;
    const back = () => location.reload();
    window.addEventListener('online', back);
    return () => window.removeEventListener('online', back);
  }, [langFailed]);
  // The learner's region (src/content/regio): its own file and its texts in the help language load
  // on demand, only while the regions are on (src/lib/region.ts); the texts also while Settings is
  // open (its row "Waar woon je?"). Until they are here the app works without them: the path
  // without the region's unit, the Hulp tab without the map. At start main.tsx waits for them.
  const [, setRegionTry] = useState(0);
  const askingRegion = view.name === 'settings';
  const regionHere = regionReady(progress.region, progress.helpLang, askingRegion);
  useEffect(() => {
    if (regionHere) return;
    let live = true;
    ensureRegionFor(progress.region, progress.helpLang, askingRegion).then(() => { if (live) setRegionTry((n) => n + 1); }, () => {});
    return () => { live = false; };
  }, [progress.region, progress.helpLang, askingRegion, regionHere]);
  // The word pictures (their own file, loading since the start): every screen after the language page has them.
  const picsReady = usePicturesLoaded();
  useEffect(() => {
    if (picsReady || !progress.onboarded) return;
    setLangFailed(false);
    loadPictures().catch(() => setLangFailed(true));
  }, [picsReady, progress.onboarded, langTry]);
  const lang = getHelpLanguage(progress.helpLang, progress.gender);
  // The page's language is the help language (Dutch without one). The direction is set where the
  // layout is mirrored (the lesson player and the path), so Dutch never inherits right-to-left.
  useEffect(() => {
    document.documentElement.lang = lang?.code ?? 'nl';
    document.documentElement.dir = 'ltr';
  }, [lang]);

  useEffect(() => { saveProgress(progress); }, [progress]);
  // Certificates: units finished before certificates existed (or put back from a backup) get today's date.
  useEffect(() => { setProgress((p) => earnCertificates(p, new Date())); }, [progress.completed]);
  // Anonymous count of app opens: at most once a day, never in development or with Do Not
  // Track (src/lib/count.ts). Only once the first run is through (language, password, sector),
  // so a new learner is counted under their sector, not as "sector-unknown".
  const readyToCount = progress.onboarded && Boolean(access) && progress.sector !== undefined;
  useEffect(() => {
    if (readyToCount) countOpen({ lang: progress.helpLang, sector: progress.sector, access });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyToCount]);
  calmRef.current = progress.onboarded && Boolean(access) && !passing(view);
  useEffect(() => { setReloadWhen(() => calmRef.current); }, []);
  // A lesson (or today's review) started: counted per lesson, so started, stopped (onQuit below) and
  // finished show where learners give up.
  // How long the open lesson is on screen (the time the app is out of view does not count): for
  // the band of minutes counted when it is finished.
  const lessonClock = useRef(startClock());
  useEffect(() => {
    const onVis = () => { lessonClock.current = document.visibilityState === 'visible' ? resumeClock(lessonClock.current) : pauseClock(lessonClock.current); };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  const lessonOpen = view.name === 'lesson' ? view.lessonId : null;
  useEffect(() => {
    lessonClock.current = startClock();
    if (lessonOpen) count('lesson-start', { lang: progress.helpLang, sector: progress.sector, lesson: lessonOpen, access });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonOpen]);
  // Learners from before "Herhaal vandaag" get cards for the words they already learned.
  useEffect(() => {
    if (!progress.cards) setProgress((p) => (p.cards ? p : { ...p, cards: seedCards(p.completed, dayKey(new Date())) }));
  }, [progress.cards]);
  useEffect(() => { setPreferredVoice(progress.voice); }, [progress.voice]);
  // Set during render, not in an effect: a child's effect (an exercise that would say its word)
  // runs before the parent's, and must already know that sound is off.
  setQuietAudio(Boolean(progress.quiet));
  // The phone's voice reads at an easier, normal pace in the work-rules track (lib/audio.ts).
  setDeviceRate(trackOf(progress));
  const setQuiet = (quiet: boolean) => setProgress((p) => ({ ...p, quiet }));
  useEffect(() => { applyTheme(progress.theme); }, [progress.theme]);
  useEffect(() => { applyTextSize(progress.textSize); }, [progress.textSize]);
  // Also on `onboarded`: Back to the language page clears the setting (English shows there), and
  // picking the same language again must hide the English again, though helpLang did not change.
  useEffect(() => { applyEnglish(englishLangFor(progress.helpLang, progress.onboarded)); }, [progress.helpLang, progress.onboarded]);
  useEffect(() => { window.scrollTo(0, 0); }, [view.name]);
  // A preview never plays a later unit (e.g. via Back/Forward into an old entry): go home.
  useEffect(() => {
    if (view.name === 'lesson' && access && !lessonAllowed(view.lessonId, access)) replace(HOME);
  });

  // A coach link (?unit=pay) makes that unit the current block on the home, which marks it. In the
  // preview a unit outside the first one opens "Alle onderwerpen" at that unit instead, with its
  // "Volledige versie" note (the home's block stays as it was).
  // The link is kept on the phone (src/lib/unitLink.ts) until the first run is through and the
  // home has shown it, so a reload during the first run still lands on it.
  const linkHandled = useRef(false);
  useEffect(() => {
    if (!focusUnit || linkHandled.current || !access || step !== 'done') return;
    linkHandled.current = true;
    const unit = findUnit(focusUnit);
    // Outside the preview: never land on a locked topic. The home stays on its block (1.1) and
    // offers this topic's unlock.
    if (unit && !unitAllowed(focusUnit, access)) {
      setFocusUnit(null);
      forgetLinkedUnit();
      setLockedLink(unit.id);
      return;
    }
    // A finished topic (to practise again): its topic page.
    if (unit && unitDone(unit, progress.completed)) {
      setFocusUnit(null);
      forgetLinkedUnit();
      if (viewRef.current.name === 'home') go({ name: 'topic', unit: unit.id, focus: true });
      return;
    }
    setProgress((p) => (p.currentUnit === focusUnit ? p : { ...p, ...pickBlock(focusUnit, p.completed) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusUnit, access, step]);
  // The coach's locked topic is offered on the home until a lesson starts.
  useEffect(() => { if (view.name === 'lesson') setLockedLink(null); }, [view.name]);

  const setLang = (code: UiCode | null) => setProgress((p) => ({ ...p, helpLang: code, onboarded: true }));
  /** The learner's track: the Dutch course, or the work-rules track with the screens in Dutch ('nl'). */
  const track = trackOf(progress);
  /** "Try one lesson first": lesson 1.1 (of the learner's track), its result, then the password page again. */
  // "No code?": the sneak preview (the first lesson of each theme), without a code; the code
  // for the full version can still be entered later (Settings, or a locked topic).
  const startFree = () => { typedCode.current = ''; grant('sample'); };
  /** Set when a lesson is finished with the code and the reminder offer was never shown. The
   *  streak-1 milestone offers it on day 1, but a learner who tried lesson 1.1 first already has
   *  that day's streak: for them it comes at the end of the first lesson with the code. */
  const keepDue = useRef(false);
  // Left the screens after a lesson another way (the phone's Back): offered after the next one.
  useEffect(() => { if (['home', 'topic', 'all', 'settings', 'words', 'tips', 'about', 'socialmap'].includes(view.name)) keepDue.current = false; }, [view.name]);
  /** The end of the screens after a lesson (result, certificate, milestone): home, or the offer. */
  const afterLesson = () => {
    if (keepDue.current && !keepOffered()) { keepDue.current = false; replace({ name: 'keep' }); }
    else { keepDue.current = false; back(); }
  };
  const setSector = (sector: SectorChoice) => setProgress((p) => ({ ...p, sector }));
  /** "Waar woon je?" (Settings only): the region's lessons come in or go out of the path. */
  const setRegion = (region: RegionChoice) => setProgress((p) => ({ ...p, region }));
  /** The learner's region (src/content/regio), for its Sociale kaart on the Hulp tab (once its file is here). */
  const region = regionOf(progress.region);
  const mapLink = region ? <SocialMapLink region={region} lang={lang} onOpen={() => go({ name: 'socialmap' })} /> : undefined;

  // "Keep lessons on this phone" (Settings → This phone): the current topic is kept by itself.
  useAutoOffline(progress, access);
  // The other screens' files, a few seconds after the start (each then opens at once, also offline later).
  useEffect(() => {
    const cancel = warmScreensLater();
    return cancel;
  }, []);

  if (coachDirect && view.name !== 'admin') {
    // Back leaves the coaches' page for the app itself (a learner on this phone, or its first run).
    const leave = () => { history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '', location.pathname + location.search); setCoachDirect(false); setView(HOME); };
    return <Coaches onBack={leave} lang={langReady && progress.onboarded ? lang : undefined} />;
  }
  if ((!langReady || (progress.onboarded && !picsReady)) && view.name !== 'admin') return <Splash failed={langFailed} onRetry={() => location.reload()} />;
  if (view.name === 'admin') {
    return <Admin onBack={() => { history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '', location.pathname); setView(HOME); }} />;
  }

  // First run, one question per page: the language (an app to learn Dutch can't start in Dutch),
  // "Woman or man?" (only for a help language with gender, so the password page already uses the
  // right form), the password, then the sector. Every page has a back arrow to the one before
  // (and the phone's Back does the same). The admin page above stays reachable with #beheer.
  if (!progress.onboarded) return <Onboarding onDone={(code) => { setLang(code); setGreet(true); }} startWithList={langAgain} />;
  if (step === 'gender') {
    return (
      <GenderScreen
        lang={lang}
        onDone={(gender) => setProgress((p) => ({ ...p, gender, genderAsked: true }))}
        onBack={onbBack}
        greet={greet}
      />
    );
  }
  if (step === 'gate') {
    return (
      <Gate
        key={gateAgain ? 'again' : 'first'}
        lang={lang}
        onAccess={grant}
        onBack={onbBack}
        accepted={gateAgain && typedCode.current ? access : null}
        code={typedCode.current}
        onFree={gateAgain && access && typedCode.current ? undefined : startFree}
        greet={greet}
      />
    );
  }
  // Two steps of at most three cards; the first step's arrow goes back to the password page.
  if (step === 'sector') return <SectorScreen lang={lang} onDone={setSector} onBack={onbBack} />;
  // A learner from before the gender question (or who switched to a help language with gender
  // later): asked once on its own page on opening the home, without a way back.
  if (view.name === 'home' && shouldAskGender(progress)) {
    return <GenderScreen lang={lang} onDone={(gender) => setProgress((p) => ({ ...p, gender, genderAsked: true }))} />;
  }
  // From here on there is access (a code, or the sneak preview without one).
  const acc: Access = access ?? 'preview';

  switch (view.name) {
    case 'lesson': {
      const daily = view.lessonId === DAILY_ID;
      // Today's review of the learner's track: words (the language course) or questions (the rules course).
      const found = daily
        ? { lesson: track === 'regels' ? dailyRuleLesson(view.ids ?? []) : dailyLesson(view.ids ?? [], progress.cards, dayKey(new Date())) }
        : playLesson(view.lessonId, progress.completed);
      // A preview never plays a later unit, whatever the progress or history says.
      if (!found || !isPlayable(found.lesson) || !lessonAllowed(view.lessonId, acc)) return null;
      const finish = ({ accuracy, review, right, total, words: results, skipped }: LessonResult) => {
        const now = new Date();
        const today = dayKey(now);
        const cards = progress.cards ?? {};
        const next = earnCertificates(daily
          ? { ...completeDaily(progress, accuracy, now), cards: applyReview(cards, results, today) }
          : { ...completeLesson(progress, view.lessonId, accuracy, review, now), cards: found.lesson.steps?.length
            // A rules lesson: its questions get a card (by step id), for "Herhaal vandaag" of that track.
            ? addLessonItems(cards, gradedStepIds(found.lesson), results, today)
            : addLessonWords(cards, found.lesson.words, results, today) }, now);
        // The lesson's unit is the current block while it is unfinished (see src/lib/route.ts).
        if (!daily) next.currentUnit = blockAfterLesson(progress.currentUnit, view.lessonId, next.completed);
        // The very first lesson: its result shows, once, where the emergency phrases are.
        // (A phone that did the old trial lesson before a code shows it after its next lesson.)
        const phrases = !daily && !progress.phrasesShown && Object.keys(progress.completed).every((id) => trialLessonAllowed(id, track));
        if (phrases) next.phrasesShown = true;
        setProgress(next);
        keepDue.current = Boolean(access) && !keepOffered();
        // The unit this lesson finished (its last open lesson): a certificate, shown after the result.
        const unitDone = daily ? undefined : unitJustDone(progress.completed, next.completed, view.lessonId);
        const dims = { lang: progress.helpLang, sector: progress.sector, access };
        const minutes = clockMinutes(lessonClock.current);
        count(daily ? 'review-done' : 'lesson-done', daily ? { ...dims, minutes } : { ...dims, lesson: view.lessonId, minutes });
        if (unitDone) count('unit-done', dims);
        // The first finished lesson: ask the browser to keep this site's storage (the progress).
        if (!daily && !Object.keys(progress.completed).length) persistStorage();
        // Not granted (yet): ask again now and then, so the progress is not cleared with the cache.
        else keepStorageAgain();
        const streakUp = streakWentUp(progress, next) ? next.streak : undefined;
        // Words learned, or in the rules track rules learned (the rule cards of finished lessons).
        const before = learnedItems(track, progress.completed);
        const words = learnedItems(track, next.completed);
        // The next lesson of the current block, for "Volgende:" on the result (none when the block
        // is finished: the home offers the choice of the next one).
        const upNext = daily ? undefined : routeNextLesson(next, acc);
        if (!daily) setArrived(view.lessonId);
        // A review (today's, a mixed review, or a lesson done again) shows the words practised,
        // not "+0 new words", under a review title.
        const reviewing = daily || view.review || isMixLesson(found.lesson) || Boolean(found.lesson.repeat);
        replace({
          name: 'result', right, total, newWords: words - before, words, streakUp,
          kind: daily ? 'daily' : reviewing ? 'review' : 'lesson',
          repeated: daily ? found.lesson.steps?.length ?? found.lesson.words.length : reviewing ? Object.keys(results).length || found.lesson.words.length : undefined,
          stronger: daily ? strongerCount(cards, next.cards) : undefined,
          // Still due after today's review (back after a long absence): they come in the next days.
          waiting: daily ? dueIds(next.cards ?? {}, today, track).length || undefined : undefined,
          next: upNext?.id,
          cert: unitDone?.id,
          skipped: skipped || undefined,
          phrases: phrases || undefined,
          // A rules lesson: its "Onthoud" line under the numbers.
          remember: daily ? undefined : found.lesson.rule?.remember,
        });
      };
      return (
        <LessonPlayer
          key={view.lessonId}
          lesson={found.lesson}
          review={view.review}
          lang={lang}
          backSignal={lessonBack}
          quiet={Boolean(progress.quiet)}
          onQuiet={setQuiet}
          onQuit={({ step, steps }) => {
            count('lesson-quit', { lang: progress.helpLang, sector: progress.sector, lesson: view.lessonId, quarter: quarterOf(step, steps), access });
            leaving.current = true;
            back();
          }}
          onFinish={finish}
          resumable={!daily}
          fresh={Boolean(view.fresh)}
          sector={progress.sector}
          sayings={Boolean(progress.completed[SAYINGS_FROM])}
          report={testerMode(access)}
          reportHint={explainReport(access, track === 'regels')}
        />
      );
    }
    case 'result':
      return (
        <Result
          right={view.right}
          total={view.total}
          newWords={view.newWords}
          words={view.words}
          repeated={view.repeated}
          stronger={view.stronger}
          waiting={view.waiting}
          skipped={view.skipped}
          kind={view.kind}
          remember={view.remember}
          next={view.next ? nextTitle(view.next, lang) : undefined}
          lang={lang}
          onDone={() => (view.cert ? replace({ name: 'cert-earned', unit: view.cert, streakUp: view.streakUp }) : view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : afterLesson())}
          onPhrases={view.phrases ? () => replace({ name: 'phrasebook', streakUp: view.streakUp, cert: view.cert }) : undefined}
        />
      );
    case 'streak':
      return (
        <Milestone
          streak={view.streak}
          lang={lang}
          onDone={afterLesson}
          days={workWeek(progress, new Date())}
          best={bestStreak(progress)}
          freezes={progress.freezes ?? 0}
        />
      );
    case 'keep':
      return <KeepScreen lang={lang} onDone={back} />;
    case 'cert-earned':
    case 'certificate': {
      const unit = findUnit(view.unit);
      if (!unit) return null;
      const day = progress.certs?.[unit.id] ?? dayKey(new Date());
      // After "Certificaat behaald", the day-streak milestone still follows (once per day).
      const onward = () => (view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : afterLesson());
      return view.name === 'cert-earned' ? (
        <CertEarned unit={unit} day={day} lang={lang} sector={progress.sector} onView={() => replace({ name: 'certificate', unit: unit.id, streakUp: view.streakUp })} onLater={onward}
          onPocket={() => replace({ name: 'pocket', unit: unit.id, streakUp: view.streakUp })} />
      ) : (
        <CertificateScreen unit={unit} day={day} lang={lang} sector={progress.sector} onBack={onward} />
      );
    }
    case 'pocket': {
      const unit = findUnit(view.unit);
      // From "Certificaat behaald": the day-streak milestone still follows.
      return unit ? <PocketCardScreen unit={unit} lang={lang} sector={progress.sector} onBack={() => (view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : afterLesson())} /> : null;
    }
    case 'all':
      return (
        <>
          <AllTopics progress={progress} lang={lang} access={acc} onBack={back} onOpen={(unit) => go({ name: 'topic', unit })} />
          <BottomNav current="route" onTab={tab} lang={lang} />
        </>
      );
    case 'topic': {
      const unit = findUnit(view.unit);
      if (!unit) return null;
      return (
        <>
          <TopicPage
            key={unit.id}
            unit={unit}
            progress={progress}
            lang={lang}
            access={acc}
            focus={view.focus}
            onBack={back}
            onStart={(lessonId, review) => go({ name: 'lesson', lessonId, review })}
            onRestart={(lessonId) => go({ name: 'lesson', lessonId, review: false, fresh: true })}
            onPocket={(id) => go({ name: 'pocket', unit: id })}
            onCertificate={(id) => go({ name: 'certificate', unit: id })}
            onUpgrade={() => go({ name: 'settings', upgrade: true })}
          />
          <BottomNav current="route" onTab={tab} lang={lang} />
        </>
      );
    }
    case 'tips':
      // The work-rules track: "Alle regels", the rule cards of its finished lessons.
      return track === 'regels'
        ? <RulesShelf progress={progress} lang={lang} onBack={back} />
        : <Tips progress={progress} lang={lang} onBack={back} access={acc} />;
    case 'about':
      return (
        <>
          {/* The coaches' page lists the language course's topics: not offered in the work-rules track. */}
          <About lang={lang} onCoaches={track === 'regels' ? undefined : () => go({ name: 'coaches' })} />
          <BottomNav current="about" onTab={tab} lang={lang} />
        </>
      );
    case 'coaches':
      return <Coaches onBack={back} lang={lang} />;
    case 'phrasebook': {
      // From the first lesson's result: back goes on to the certificate or the streak milestone.
      const onward = () => (view.cert ? replace({ name: 'cert-earned', unit: view.cert, streakUp: view.streakUp }) : view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : afterLesson());
      // The work-rules track: its Hulp page ("Wie bel je?") instead of the emergency phrases.
      return track === 'regels'
        ? <RulesHelp lang={lang} onBack={onward} onShelf={() => go({ name: 'tips' })} />
        : <Phrasebook lang={lang} onBack={onward} />;
    }
    case 'settings': {
      const up = view.up ?? 0;
      return (
        <>
          <Settings
            progress={progress}
            lang={lang}
            page={view.page ?? (view.upgrade ? 'unlock' : undefined)}
            onPage={(page) => go({ name: 'settings', page, up: up + 1 })}
            onReturn={(steps = 1) => (up >= steps ? history.go(-steps) : back())}
            onLang={setLang}
            onGender={(gender) => setProgress((p) => ({ ...p, gender, genderAsked: true }))}
            onSector={setSector}
            onRegion={setRegion}
            onTheme={(theme) => setProgress((p) => ({ ...p, theme }))}
            onTextSize={(textSize) => setProgress((p) => ({ ...p, textSize }))}
            onVoice={(voice) => setProgress((p) => ({ ...p, voice }))}
            onQuiet={setQuiet}
            onReset={() => {
              // Keep look, voice, sound, sector, region and gender; only learning progress is wiped (and lessons in progress).
              clearSave();
              setProgress((p) => ({ ...emptyProgress, theme: p.theme, voice: p.voice, quiet: p.quiet, sector: p.sector, region: p.region, textSize: p.textSize, gender: p.gender, genderAsked: p.genderAsked }));
            }}
            onRestore={(next) => setProgress(next)}
            access={acc}
            onAccess={grant}
            onCertificate={(unit) => go({ name: 'certificate', unit })}
          />
          <BottomNav current="me" onTab={tab} lang={lang} />
        </>
      );
    }
    case 'words':
      return (
        <>
          {/* The work-rules track: who to call, and "Alle regels" (instead of the emergency phrases). */}
          {track === 'regels'
            ? <RulesHelp lang={lang} onShelf={() => go({ name: 'tips' })} after={mapLink} />
            : <WordsHub lang={lang} onTips={() => go({ name: 'tips' })} after={mapLink} />}
          <BottomNav current="words" onTab={tab} lang={lang} />
        </>
      );
    case 'socialmap':
      // Back from a region switched off meanwhile (or its file not here): the Hulp tab.
      if (!region) return null;
      return (
        <>
          <SocialMap region={region} lang={lang} onBack={back} />
          <BottomNav current="words" onTab={tab} lang={lang} />
        </>
      );
    default:
      if (stopped !== null) {
        return <StreakStopped streak={stopped} best={bestStreak(progress)} lang={lang} onDone={() => setStopped(null)} />;
      }
      const daily = Object.keys(progress.completed).length || progress.reviewDay ? dailyCard(progress.cards ?? {}, dayKey(new Date()), progress.reviewDay, track) : null;
      return (
        <>
          <TopBar
            done={doneToday(progress, new Date())}
            streak={currentStreak(progress, new Date())}
            words={learnedItems(track, progress.completed)}
            lang={lang}
            quiet={Boolean(progress.quiet)}
            greeting={<HomeGreeting progress={progress} due={daily?.state === 'due' ? daily.due : 0} lang={lang} />}
          />
          <Route
            progress={progress}
            lang={lang}
            onStart={(lessonId, review) => go({ name: 'lesson', lessonId, review })}
            onRestart={(lessonId) => go({ name: 'lesson', lessonId, review: false, fresh: true })}
            onPick={(unit) => setProgress((p) => ({ ...p, ...pickBlock(unit, p.completed) }))}
            onAll={() => go({ name: 'all' })}
            daily={daily}
            arrived={arrived}
            onArrived={() => setArrived(null)}
            onDaily={() => go({ name: 'lesson', lessonId: DAILY_ID, review: true, ids: track === 'regels' ? dailyRuleIds(progress.cards ?? {}, dayKey(new Date())) : dailyWordIds(progress.cards ?? {}, dayKey(new Date())) })}
            access={acc}
            onUpgrade={() => go({ name: 'settings', upgrade: true })}
            focusUnit={focusUnit}
            onFocused={() => { setFocusUnit(null); forgetLinkedUnit(); }}
            lockedLink={lockedLink}
            note={<NoVoiceNote lang={lang} once />}
          />
          <BottomNav current="route" onTab={tab} lang={lang} />
        </>
      );
  }
}

function nextTitle(id: string, lang: ReturnType<typeof getHelpLanguage>) {
  const found = findLesson(id);
  return found ? { ...gloss(id, found.lesson.title, lang), id } : undefined;
}

function adminRequested(): boolean {
  return location.hash === '#beheer';
}

/** #begeleiders: the coaches' page, opened directly (see Coaches). */
function coachesRequested(): boolean {
  return typeof location !== 'undefined' && location.hash === '#begeleiders';
}
