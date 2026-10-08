import { useEffect, useRef, useState } from 'react';
import { findLesson, learnedWords } from './content/curriculum';
import { getHelpLanguage } from './i18n';
import type { LangCode } from './i18n/types';
import { setPreferredVoice, setQuietAudio } from './lib/audio';
import { applyTheme } from './lib/theme';
import { Admin } from './components/Admin';
import { LessonPlayer, type LessonResult } from './components/LessonPlayer';
import { About, BottomNav, Onboarding, Path, Phrasebook, Result, Settings, Tips, TopBar, WordsHub, type Tab } from './components/Screens';
import { AllTopics, Route } from './components/Route';
import { Milestone, StreakStopped } from './components/Milestone';
import { Gate } from './components/Gate';
import { SectorScreen } from './components/Sector';
import type { SectorChoice } from './content/sectors';
import { type Access, lessonAllowed, loadAccess, saveAccess, unitAllowed } from './lib/access';
import { blockAfterLesson, routeNextLesson } from './lib/route';
import { takeLinkedUnit } from './lib/unitLink';
import { bestStreak, completeDaily, completeLesson, currentStreak, dayKey, doneToday, emptyProgress, loadProgress, saveProgress, settleStreak, streakWentUp, workWeek } from './lib/progress';
import { DAILY_ID, addLessonWords, applyReview, dailyCard, dailyLesson, dailyWordIds, seedCards, strongerCount } from './lib/spaced';
import { gloss } from './i18n';
import { persistStorage } from './lib/install';
import { CertEarned, CertificateScreen } from './components/Certificate';
import { earnCertificates, findUnit, unitDone, unitJustDone } from './lib/certificate';
import { count, countOpen } from './lib/count';
import { clearSave } from './lib/resume';

type View =
  | { name: 'home' }
  /** ids: the words of today's review (lessonId DAILY_ID), fixed when it starts. */
  | { name: 'lesson'; lessonId: string; review: boolean; ids?: string[] }
  /** streakUp: the day streak reached this number with this lesson, so the milestone follows. */
  | { name: 'result'; right: number; total: number; newWords: number; words: number; streakUp?: number; repeated?: number; stronger?: number; next?: string; cert?: string; skipped?: number }
  /** "Certificaat behaald": once, after the result of a unit's last lesson (then the streak, if it went up). */
  | { name: 'cert-earned'; unit: string; streakUp?: number }
  /** A unit's certificate; streakUp: opened from "Certificaat behaald", the streak milestone still follows. */
  | { name: 'certificate'; unit: string; streakUp?: number }
  | { name: 'streak'; streak: number }
  | { name: 'words' }
  | { name: 'phrasebook' }
  | { name: 'tips' }
  /** upgrade: opened from a locked unit, so the unlock card is scrolled into view. */
  | { name: 'settings'; upgrade?: boolean }
  | { name: 'about' }
  /** "Alle onderwerpen": every unit as one long path (from the link at the foot of the home). */
  | { name: 'all' }
  | { name: 'admin' };

const HOME: View = { name: 'home' };

/** What App keeps in history.state: the screen, and how many screens deep it is (0 = home). */
interface Entry { view: View; depth: number }
const current = (): Entry | null => {
  const st = history.state as Partial<Entry> | null;
  return st && st.view ? (st as Entry) : null;
};
/** After a reload: back on the screen you were on, but a lesson or its result starts over at home. */
const restored = (): View => {
  const v = current()?.view;
  return !v || v.name === 'lesson' || v.name === 'result' || v.name === 'streak' || v.name === 'cert-earned' || v.name === 'admin' ? HOME : v;
};
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
/** A coach link (?unit=pay) asks to open the path at that unit; read once at start. */
const linkedUnit = takeLinkedUnit();

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
  const grant = (a: Access) => { saveAccess(a); setAccess(a); };
  const [view, setView] = useState<View>(() => adminRequested() ? { name: 'admin' } : linkedUnit ? HOME : restored());
  /** The unit to show first on the path (from a coach link), until the path has shown it. */
  const [focusUnit, setFocusUnit] = useState<string | null>(linkedUnit);
  /** Bumped when the system Back button is pressed in a lesson (the lesson asks before quitting). */
  const [lessonBack, setLessonBack] = useState(0);
  const viewRef = useRef(view);
  viewRef.current = view;
  /** Set while the app itself goes back out of a lesson, so that Back is not intercepted. */
  const leaving = useRef(false);

  /*
   * History: home is depth 0. Opening a screen pushes an entry, so the phone's Back button
   * returns to the previous screen instead of leaving the app. Screens that follow each other
   * without a way back (lesson → result → streak) replace their entry, so Back from the result
   * goes home and no junk entries pile up.
   */
  const go = (next: View) => {
    history.pushState({ view: next, depth: (current()?.depth ?? 0) + 1 } satisfies Entry, '');
    setView(next);
  };
  const replace = (next: View) => {
    leaving.current = false;
    history.replaceState({ view: next, depth: current()?.depth ?? 0 } satisfies Entry, '');
    setView(next);
  };
  /** Bottom bar: Route is home; Hulp, Instellingen and Over sit one level above it, so Back from either
   *  returns to Route and switching between them doesn't stack entries. */
  const tab = (t: Tab) => {
    const next: View =
      t === 'words' ? { name: 'words' } : t === 'me' ? { name: 'settings' } : t === 'about' ? { name: 'about' } : HOME;
    if (next.name === viewRef.current.name) return;
    if (t === 'route') back();
    else if (viewRef.current.name === 'home') go(next);
    else replace(next);
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
        // Stay in the lesson (put its entry back) and let it ask "Stop this lesson?".
        const lesson = viewRef.current;
        history.pushState({ view: lesson, depth: (current()?.depth ?? 0) + 1 } satisfies Entry, '');
        setLessonBack((n) => n + 1);
        return;
      }
      leaving.current = false;
      const v = current()?.view ?? HOME;
      // A finished lesson's entry was replaced by its result; never step back into a lesson.
      setView(v.name === 'lesson' || v.name === 'result' || v.name === 'streak' || v.name === 'cert-earned' ? HOME : v);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // The owner's hidden page opens with #beheer in the address.
  useEffect(() => {
    const onHash = () => { if (adminRequested()) setView({ name: 'admin' }); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const lang = getHelpLanguage(progress.helpLang);
  // The page's language is the help language (Dutch without one). The direction is set where the
  // layout is mirrored (the lesson player and the path), so Dutch never inherits right-to-left.
  useEffect(() => {
    document.documentElement.lang = lang?.code ?? 'nl';
    document.documentElement.dir = 'ltr';
  }, [lang]);

  useEffect(() => { saveProgress(progress); }, [progress]);
  // Certificates: units finished before certificates existed (or put back from a backup) get today's date.
  useEffect(() => { setProgress((p) => earnCertificates(p, new Date())); }, [progress.completed]);
  // Anonymous count of app opens: at most once a day, never in development (src/lib/count.ts).
  useEffect(() => {
    if (progress.onboarded) countOpen({ lang: progress.helpLang, sector: progress.sector });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.onboarded]);
  // Learners from before "Herhaal vandaag" get cards for the words they already learned.
  useEffect(() => {
    if (!progress.cards) setProgress((p) => (p.cards ? p : { ...p, cards: seedCards(p.completed, dayKey(new Date())) }));
  }, [progress.cards]);
  useEffect(() => { setPreferredVoice(progress.voice); }, [progress.voice]);
  // Set during render, not in an effect: a child's effect (an exercise that would say its word)
  // runs before the parent's, and must already know that sound is off.
  setQuietAudio(Boolean(progress.quiet));
  const setQuiet = (quiet: boolean) => setProgress((p) => ({ ...p, quiet }));
  useEffect(() => { applyTheme(progress.theme); }, [progress.theme]);
  useEffect(() => { window.scrollTo(0, 0); }, [view.name]);
  // A preview never plays a later unit (e.g. via Back/Forward into an old entry): go home.
  useEffect(() => {
    if (view.name === 'lesson' && access && !lessonAllowed(view.lessonId, access)) replace(HOME);
  });

  // A coach link (?unit=pay) makes that unit the current block on the home, which marks it. In the
  // preview a unit outside the first one opens "Alle onderwerpen" at that unit instead, with its
  // "Volledige versie" note (the home's block stays as it was).
  const linkHandled = useRef(false);
  useEffect(() => {
    if (!focusUnit || linkHandled.current || !access || !progress.onboarded || progress.sector === undefined) return;
    linkHandled.current = true;
    // A finished unit is opened on the home's "Gedaan" shelf instead (the block stays).
    const unit = findUnit(focusUnit);
    if (unit && unitDone(unit, progress.completed)) return;
    if (unitAllowed(focusUnit, access)) setProgress((p) => (p.currentUnit === focusUnit ? p : { ...p, currentUnit: focusUnit }));
    else if (viewRef.current.name === 'home') go({ name: 'all' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusUnit, access, progress.onboarded, progress.sector]);

  const setLang = (code: LangCode | null) => setProgress((p) => ({ ...p, helpLang: code, onboarded: true }));
  const setSector = (sector: SectorChoice) => setProgress((p) => ({ ...p, sector }));

  if (view.name === 'admin') {
    return <Admin onBack={() => { history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '', location.pathname); setView(HOME); }} />;
  }

  // First run: the language comes first (an app to learn Dutch can't start in Dutch), then the
  // door in English plus that language, then the sector. The admin page above stays reachable
  // with #beheer.
  if (!progress.onboarded) return <Onboarding onDone={setLang} />;
  if (!access) {
    return <Gate lang={lang} onAccess={grant} onLanguage={() => setProgress((p) => ({ ...p, onboarded: false }))} />;
  }
  // Asked once (also for learners from before the sector choice); Settings can change it.
  if (progress.sector === undefined) return <SectorScreen lang={lang} onDone={setSector} />;

  switch (view.name) {
    case 'lesson': {
      const daily = view.lessonId === DAILY_ID;
      const found = daily ? { lesson: dailyLesson(view.ids ?? []) } : findLesson(view.lessonId);
      // A preview never plays a later unit, whatever the progress or history says.
      if (!found || !found.lesson.words.length || !lessonAllowed(view.lessonId, access)) return null;
      const finish = ({ accuracy, review, right, total, words: results, skipped }: LessonResult) => {
        const now = new Date();
        const today = dayKey(now);
        const cards = progress.cards ?? {};
        const next = earnCertificates(daily
          ? { ...completeDaily(progress, accuracy, now), cards: applyReview(cards, results, today) }
          : { ...completeLesson(progress, view.lessonId, accuracy, review, now), cards: addLessonWords(cards, found.lesson.words, results, today) }, now);
        // The lesson's unit is the current block while it is unfinished (see src/lib/route.ts).
        if (!daily) next.currentUnit = blockAfterLesson(progress.currentUnit, view.lessonId, next.completed);
        setProgress(next);
        // The unit this lesson finished (its last open lesson): a certificate, shown after the result.
        const unitDone = daily ? undefined : unitJustDone(progress.completed, next.completed, view.lessonId);
        const dims = { lang: progress.helpLang, sector: progress.sector };
        count(daily ? 'review-done' : 'lesson-done', dims);
        if (unitDone) count('unit-done', dims);
        // The first finished lesson: ask the browser to keep this site's storage (the progress).
        if (!daily && !Object.keys(progress.completed).length) persistStorage();
        const streakUp = streakWentUp(progress, next) ? next.streak : undefined;
        const before = learnedWords(progress.completed).size;
        const words = learnedWords(next.completed).size;
        // The next lesson of the current block, for "Volgende:" on the result (none when the block
        // is finished: the home offers the choice of the next one).
        const upNext = daily ? undefined : routeNextLesson(next, access);
        if (!daily) setArrived(view.lessonId);
        replace({
          name: 'result', right, total, newWords: words - before, words, streakUp,
          repeated: daily ? found.lesson.words.length : undefined,
          stronger: daily ? strongerCount(cards, next.cards) : undefined,
          next: upNext?.id,
          cert: unitDone?.id,
          skipped: skipped || undefined,
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
          onQuit={() => { leaving.current = true; back(); }}
          onFinish={finish}
          resumable={!daily}
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
          skipped={view.skipped}
          next={view.next ? nextTitle(view.next, lang) : undefined}
          lang={lang}
          onDone={() => (view.cert ? replace({ name: 'cert-earned', unit: view.cert, streakUp: view.streakUp }) : view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : back())}
        />
      );
    case 'streak':
      return (
        <Milestone
          streak={view.streak}
          lang={lang}
          onDone={back}
          days={workWeek(progress, new Date())}
          best={bestStreak(progress)}
          freezes={progress.freezes ?? 0}
        />
      );
    case 'cert-earned':
    case 'certificate': {
      const unit = findUnit(view.unit);
      if (!unit) return null;
      const day = progress.certs?.[unit.id] ?? dayKey(new Date());
      // After "Certificaat behaald", the day-streak milestone still follows (once per day).
      const onward = () => (view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : back());
      return view.name === 'cert-earned' ? (
        <CertEarned unit={unit} day={day} lang={lang} onView={() => replace({ name: 'certificate', unit: unit.id, streakUp: view.streakUp })} onLater={onward} />
      ) : (
        <CertificateScreen unit={unit} day={day} lang={lang} onBack={onward} />
      );
    }
    case 'all':
      return (
        <>
          <AllTopics lang={lang} onBack={back}>
            <Path
              progress={progress}
              lang={lang}
              onStart={(lessonId, review) => go({ name: 'lesson', lessonId, review })}
              nowLesson={routeNextLesson(progress, access)?.id ?? null}
              arrived={arrived}
              onArrived={() => setArrived(null)}
              onAbout={() => tab('about')}
              access={access}
              onUpgrade={() => go({ name: 'settings', upgrade: true })}
              focusUnit={focusUnit}
              onFocused={() => setFocusUnit(null)}
              onCertificate={(unit) => go({ name: 'certificate', unit })}
            />
          </AllTopics>
          <BottomNav current="route" onTab={tab} lang={lang} />
        </>
      );
    case 'tips':
      return <Tips progress={progress} lang={lang} onBack={back} access={access} />;
    case 'about':
      return (
        <>
          <About lang={lang} />
          <BottomNav current="about" onTab={tab} lang={lang} />
        </>
      );
    case 'phrasebook':
      return <Phrasebook lang={lang} onBack={back} />;
    case 'settings':
      return (
        <>
          <Settings
            progress={progress}
            lang={lang}
            onLang={setLang}
            onSector={setSector}
            onTheme={(theme) => setProgress((p) => ({ ...p, theme }))}
            onVoice={(voice) => setProgress((p) => ({ ...p, voice }))}
            onQuiet={setQuiet}
            onReset={() => {
              // Keep look, voice, sound and sector; only learning progress is wiped (and lessons in progress).
              clearSave();
              setProgress((p) => ({ ...emptyProgress, theme: p.theme, voice: p.voice, quiet: p.quiet, sector: p.sector }));
              back();
            }}
            onAbout={() => tab('about')}
            onRestore={(next) => setProgress(next)}
            access={access}
            onAccess={grant}
            focusUpgrade={view.upgrade}
            onCertificate={(unit) => go({ name: 'certificate', unit })}
          />
          <BottomNav current="me" onTab={tab} lang={lang} />
        </>
      );
    case 'words':
      return (
        <>
          <WordsHub
            lang={lang}
            onTips={() => go({ name: 'tips' })}
          />
          <BottomNav current="words" onTab={tab} lang={lang} />
        </>
      );
    default:
      if (stopped !== null) {
        return <StreakStopped streak={stopped} best={bestStreak(progress)} lang={lang} onDone={() => setStopped(null)} />;
      }
      return (
        <>
          <TopBar
            done={doneToday(progress, new Date())}
            streak={currentStreak(progress, new Date())}
            words={learnedWords(progress.completed).size}
            lang={lang}
            onLanguage={() => tab('me')}
          />
          <Route
            progress={progress}
            lang={lang}
            onStart={(lessonId, review) => go({ name: 'lesson', lessonId, review })}
            onPick={(unit) => setProgress((p) => ({ ...p, currentUnit: unit }))}
            onAll={() => go({ name: 'all' })}
            daily={Object.keys(progress.completed).length || progress.reviewDay ? dailyCard(progress.cards ?? {}, dayKey(new Date()), progress.reviewDay) : null}
            arrived={arrived}
            onArrived={() => setArrived(null)}
            onDaily={() => go({ name: 'lesson', lessonId: DAILY_ID, review: true, ids: dailyWordIds(progress.cards ?? {}, dayKey(new Date())) })}
            access={access}
            onUpgrade={() => go({ name: 'settings', upgrade: true })}
            focusUnit={focusUnit}
            onFocused={() => setFocusUnit(null)}
            onCertificate={(unit) => go({ name: 'certificate', unit })}
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
