import { tipForLesson } from '../content/culture';
import { findLesson } from '../content/curriculum';
import { LessonPlayer } from '../components/LessonPlayer';
import { About, BottomNav, Onboarding, Path, Phrasebook, Result, Settings, Tips, TopBar, WordsHub } from '../components/Screens';
import { Admin } from '../components/Admin';
import { emptyProgress } from '../lib/progress';
import { Milestone } from '../components/Milestone';
import { CAST, Character, type Mood } from '../components/Characters';
import { getHelpLanguage } from '../i18n';
import type { LangCode } from '../i18n/types';
import { allLessons, allReplies, learnedWords } from '../content/curriculum';
import { buildTiles, type Exercise } from '../lib/exercises';
import { createRng } from '../lib/random';
import { units } from '../content/curriculum';
import { WordPicture, pictures, unitPictures } from '../pictures';
import * as kit from '../pictures/kit';

/**
 * Development-only page that opens one exercise in a fixed state, so screens can be
 * screenshotted reproducibly: /?shot=dutch|meaning|build|chat|result|streak&lang=ar
 * /?shot=pictures shows every word picture (and the unit banner pictures) for review.
 * Options are always in lesson order, so tests know which one is right.
 */
export function ShotHarness({ shot, lang, word }: { shot: string; lang: string | null; word?: string | null }) {
  // Lesson complete: 9 of 11 right the first time, 6 new words (24 in all).
  if (shot === 'result') return <Result right={9} total={11} newWords={6} words={24} lang={getHelpLanguage(lang as LangCode)} onDone={() => {}} />;
  // Day-streak milestone after the very first lesson: streak 1.
  if (shot === 'streak') return <Milestone streak={1} lang={getHelpLanguage(lang as LangCode)} onDone={() => {}} />;
  if (shot === 'pictures') return <PicturesSheet />;
  // Screens outside the lesson flow (phase-3 house-style review).
  if (shot === 'onboarding') return <Onboarding onDone={() => {}} />;
  if (shot === 'phrasebook') return <Phrasebook lang={getHelpLanguage(lang as LangCode)} onBack={() => {}} />;
  if (shot === 'admin') return <Admin onBack={() => {}} />;
  if (shot === 'tips' || shot === 'settings' || shot === 'words') {
    // Half the course done, so several tips are unlocked.
    const done = Object.fromEntries(allLessons.slice(0, 8).map((l) => [l.id, { best: 1, times: 1 }]));
    const progress = { ...emptyProgress, onboarded: true, helpLang: (lang as LangCode) ?? null, completed: done };
    const l = getHelpLanguage(lang as LangCode);
    if (shot === 'words') {
      return (
        <>
          <WordsHub progress={progress} lang={l} onPhrasebook={() => {}} onTips={() => {}} />
          <BottomNav current="words" onTab={() => {}} />
        </>
      );
    }
    return shot === 'tips' ? (
      <Tips progress={progress} lang={l} onBack={() => {}} />
    ) : (
      <>
        <Settings progress={progress} lang={l} onLang={() => {}} onTheme={() => {}} onVoice={() => {}} onReset={() => {}} onAbout={() => {}} />
        <BottomNav current="me" onTab={() => {}} />
      </>
    );
  }
  if (shot === 'about') return <About lang={getHelpLanguage(lang as LangCode)} onBack={() => {}} />;
  // Home screen: first lesson done, second lesson current (as in the house-style concept).
  if (shot === 'path') {
    const progress = { ...emptyProgress, onboarded: true, xp: 120, streak: 7, completed: { 'l.hello': { best: 1, times: 1 } } };
    const l = getHelpLanguage(lang as LangCode);
    return (
      <>
        <TopBar streak={7} words={learnedWords(progress.completed).size} lang={l} onLanguage={() => {}} />
        <Path progress={progress} lang={l} onStart={() => {}} onPhrasebook={() => {}} onAbout={() => {}} />
        <BottomNav current="route" onTab={() => {}} />
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
    <LessonPlayer
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

/** Every word of the course with its picture at 120 px and 48 px, grouped by unit, plus the
 *  unit banner pictures on their colours and the kit's building blocks. Words still without a
 *  picture show their emoji, dimmed. */
function PicturesSheet() {
  const words = units.flatMap((u) => u.lessons.flatMap((l) => l.words));
  const done = words.filter((w) => pictures[w.id]).length;
  return (
    <div className="pics-page">
      <h1>Woordplaatjes</h1>
      <p className="pics-id">{done} / {words.length} drawn</p>
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
                <div key={w.id} className={`pics-cell ${pictures[w.id] ? '' : 'pics-missing'}`}>
                  <div className="pics-row">
                    <WordPicture id={w.id} emoji={w.emoji} size={120} />
                    <WordPicture id={w.id} emoji={w.emoji} size={48} />
                  </div>
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
