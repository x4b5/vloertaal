import { tipForLesson } from '../content/culture';
import { findLesson } from '../content/curriculum';
import { useState } from 'react';
import { LessonPlayer } from '../components/LessonPlayer';
import { About, BottomNav, Onboarding, Path, Phrasebook, Result, Settings, Tips, TopBar, WordsHub } from '../components/Screens';
import { Admin } from '../components/Admin';
import { Gate } from '../components/Gate';
import { SectorScreen } from '../components/Sector';
import { isSectorId, type SectorChoice } from '../content/sectors';
import type { Access } from '../lib/access';
import { dayKey, emptyProgress, workWeek } from '../lib/progress';
import { Milestone, StreakStopped } from '../components/Milestone';
import { addDays, dailyCard } from '../lib/spaced';
import { CAST, Character, type Mood } from '../components/Characters';
import { getHelpLanguage } from '../i18n';
import type { LangCode } from '../i18n/types';
import { allLessons, allReplies, learnedWords } from '../content/curriculum';
import { buildLesson, buildTiles, type Exercise } from '../lib/exercises';
import { setQuietAudio } from '../lib/audio';
import { createRng } from '../lib/random';
import { units } from '../content/curriculum';
import { WordPicture, pictures, unitPictures } from '../pictures';
import * as kit from '../pictures/kit';
import { hasPicture } from '../lib/wordPicture';
import { CertEarned, CertificateScreen } from '../components/Certificate';
import { findUnit } from '../lib/certificate';

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
  // Lesson complete: 9 of 11 right the first time, 6 new words (24 in all), next lesson named.
  // &perfect=1: 11 of 11 (FOUTLOOS); &review=1: after "Herhaal vandaag" (8 words, 5 stronger).
  if (shot === 'result') {
    const l = getHelpLanguage(lang as LangCode);
    const review = q.get('review') === '1';
    const right = q.get('perfect') === '1' ? 11 : 9;
    const next = findLesson('l.people')?.lesson;
    return (
      <Result
        right={right} total={11} newWords={6} words={24} lang={l} onDone={() => {}}
        repeated={review ? 8 : undefined} stronger={review ? 5 : undefined}
        next={!review && next ? { en: next.title, help: l?.gloss[next.id], lang: l } : undefined}
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
    return <Milestone streak={n} lang={getHelpLanguage(lang as LangCode)} onDone={() => {}} days={workWeek(p, today)} best={Number(q.get('best') ?? n)} freezes={rest ? 1 : 0} />;
  }
  // The streak stopped at 12 (record 21), shown once on the next open.
  if (shot === 'stopped') return <StreakStopped streak={12} best={21} lang={getHelpLanguage(lang as LangCode)} onDone={() => {}} />;
  if (shot === 'pictures') return <PicturesSheet />;
  // Certificates: /?shot=certificate&unit=u.safety&name=Ali%20Hassan (name=ask: asked the first
  // time; name=none: without a name); /?shot=cert-earned is the one-time moment.
  if (shot === 'certificate' || shot === 'cert-earned') {
    const unit = findUnit(q.get('unit') ?? 'u.firstday') ?? units[0];
    const name = q.get('name');
    try {
      if (name === 'ask') localStorage.removeItem('vloertaal:cert-name');
      else localStorage.setItem('vloertaal:cert-name', name === 'none' || name === null ? '' : name);
    } catch { /* ignore */ }
    const l = getHelpLanguage(lang as LangCode);
    return shot === 'certificate'
      ? <CertificateScreen unit={unit} day="2026-10-08" lang={l} onBack={() => {}} />
      : <CertEarned unit={unit} day="2026-10-08" lang={l} onView={() => {}} onLater={() => {}} />;
  }
  const quiet = new URLSearchParams(location.search).get('quiet') === '1';
  // &access=preview shows the path, tips and settings as a preview user sees them.
  const access: Access = new URLSearchParams(location.search).get('access') === 'preview' ? 'preview' : 'full';
  // &sector=construction (or none) sets the learner's sector on the path, tips and settings;
  // &other=open opens the "Andere sectoren" section.
  const sp = new URLSearchParams(location.search).get('sector');
  const sector: SectorChoice | undefined = sp === 'none' || isSectorId(sp) ? sp : undefined;
  if (shot === 'sector') return <SectorScreen lang={getHelpLanguage(lang as LangCode)} onDone={() => {}} />;
  if (shot === 'gate') return <Gate lang={getHelpLanguage(lang as LangCode)} onAccess={() => {}} onLanguage={() => {}} />;
  // Screens outside the lesson flow (phase-3 house-style review).
  if (shot === 'onboarding' || shot === 'language') return <Onboarding onDone={() => {}} />;
  if (shot === 'phrasebook') return <Phrasebook lang={getHelpLanguage(lang as LangCode)} onBack={() => {}} />;
  if (shot === 'admin') return <Admin onBack={() => {}} />;
  if (shot === 'tips' || shot === 'settings' || shot === 'words') {
    // Half the course done, so several tips are unlocked.
    const done = Object.fromEntries(allLessons.slice(0, 8).map((l) => [l.id, { best: 1, times: 1 }]));
    const progress = { ...emptyProgress, onboarded: true, helpLang: (lang as LangCode) ?? null, sector, quiet, completed: done };
    const l = getHelpLanguage(lang as LangCode);
    if (shot === 'words') {
      return (
        <>
          <WordsHub lang={l} onTips={() => {}} />
          <BottomNav current="words" onTab={() => {}} lang={l} />
        </>
      );
    }
    return shot === 'tips' ? (
      <Tips progress={progress} lang={l} onBack={() => {}} access={access} />
    ) : (
      <>
        <SettingsWithSound progress={progress} lang={l} onCertificate={() => {}} onRestore={() => {}} onLang={() => {}} onSector={() => {}} onTheme={() => {}} onVoice={() => {}} onReset={() => {}} onAbout={() => {}} access={access} onAccess={() => {}} />
        <BottomNav current="me" onTab={() => {}} lang={l} />
      </>
    );
  }
  if (shot === 'about') return <About lang={getHelpLanguage(lang as LangCode)} onBack={() => {}} />;
  // Home screen: first lesson done, second lesson current (as in the house-style concept).
  if (shot === 'path') {
    // &cert=1: the whole first unit is done, so its sign carries the certificate chip.
    const firstUnit = q.get('cert') === '1' ? Object.fromEntries(units[0].lessons.map((x) => [x.id, { best: 1, times: 1 }])) : {};
    const progress = { ...emptyProgress, onboarded: true, xp: 120, streak: 7, sector, completed: { 'l.hello': { best: 1, times: 1 }, ...firstUnit } };
    const l = getHelpLanguage(lang as LangCode);
    // &daily=due|done|first shows "Herhaal vandaag" in that state; &lit=1 has today done (lit flame);
    // &arrived=1 plays the "back from a lesson" arrival (scroll, stamp, pop).
    const today = dayKey(new Date());
    const words = findLesson('l.hello')!.lesson.words;
    const dstate = q.get('daily');
    const cards = Object.fromEntries(words.map((w, i) => [w.id, {
      box: dstate === 'done' ? 2 : 1,
      due: dstate === 'due' ? today : dstate === 'done' ? addDays(today, i < 4 ? 1 : 2) : addDays(today, 1),
    }]));
    const daily = dstate ? dailyCard(cards, today, dstate === 'done' ? today : undefined) : null;
    if (daily && dstate === 'done' && q.get('extra') === '1') daily.extra = 6;
    return (
      <>
        <TopBar streak={7} done={q.get('lit') === '1'} words={learnedWords(progress.completed).size} lang={l} onLanguage={() => {}} />
        <Path progress={progress} lang={l} onStart={() => {}} onAbout={() => {}} access={access} onUpgrade={() => {}} openOther={new URLSearchParams(location.search).get('other') === 'open'}
          daily={daily} onDaily={() => {}} arrived={q.get('arrived') === '1' ? 'l.hello' : null} onCertificate={() => {}} />
        <BottomNav current="route" onTab={() => {}} lang={l} />
      </>
    );
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
        lang={getHelpLanguage(lang as LangCode)}
        exercises={buildLesson(picked, { review: false, seed: 1, quiet })}
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
    dutch: { kind: 'dutch', word: helm, options: [hesje, handschoenen, helm] },
    meaning: { kind: 'meaning', word: focus ?? hesje, options: [handschoenen, schoenen, focus ?? hesje] },
    intro: { kind: 'intro', word: focus ?? hesje },
    listen: { kind: 'listen', word: focus ?? schoenen, options: [helm, focus ?? schoenen, hesje] },
    type: { kind: 'type', word: helm },
    match: { kind: 'match', words: [helm, handschoenen, schoenen, hesje] },
    build: { kind: 'build', sentence: lesson.sentences[0], tiles: buildTiles(lesson.sentences[0], lesson, createRng(3)) },
  };
  // Break-room chat: "Wil je koffie of thee?" → "Thee, graag." (right), "Tot morgen!" (wrong).
  const coffee = findLesson('l.shift')!.lesson.dialogues![0];
  const byeReply = allReplies.find((r) => r.id === 'c.hello.a')!;
  exercises.chat = { kind: 'chat', dialogue: coffee, options: [coffee.reply, byeReply] };
  // Workplace culture: the speak-up tip and its situation (best option listed first).
  const speakTip = tipForLesson('l.speakup')!;
  exercises.tip = { kind: 'tip', tip: speakTip };
  exercises.situation = { kind: 'situation', tip: speakTip, options: speakTip.options };
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
      lang={getHelpLanguage(lang as LangCode)}
      exercises={[...before, ex, ...pad]}
      startAt={shot === 'retry' ? before.length + pad.length + 2 : before.length}
      // /?shot=retry: the lesson is through and three mistakes come back (the second is on now).
      repeats={shot === 'retry' ? [exercises.meaning, exercises.dutch, exercises.build] : undefined}
      onQuit={() => {}}
      onFinish={() => {}}
    />
  );
}

/** The lesson with a working sound toggle, as App gives it (the setting lives in progress there). */
function QuietLesson({ quiet: start, ...props }: Omit<React.ComponentProps<typeof LessonPlayer>, 'quiet' | 'onQuiet'> & { quiet: boolean }) {
  const [quiet, setQuiet] = useState(start);
  setQuietAudio(quiet);
  return <LessonPlayer {...props} quiet={quiet} onQuiet={setQuiet} />;
}

/** Settings whose sound choice can be tapped (the screenshot shows the picked option move). */
function SettingsWithSound(props: Omit<React.ComponentProps<typeof Settings>, 'onQuiet'>) {
  const [quiet, setQuiet] = useState(Boolean(props.progress.quiet));
  return <Settings {...props} progress={{ ...props.progress, quiet }} onQuiet={setQuiet} />;
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
