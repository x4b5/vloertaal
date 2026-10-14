import { useEffect, useRef, useState } from 'react';
import { Character } from './Characters';
import { unitIcons } from '../content/unitIcons';
import { coursePlan } from '../content/sectors';
import type { Unit } from '../content/types';
import { gloss, ui, uiCount, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { type Access, unitAllowed } from '../lib/access';
import { unitDone } from '../lib/certificate';
import { isUnlocked } from '../lib/exercises';
import type { DailyCard } from '../lib/spaced';
import type { Progress } from '../lib/progress';
import { blockDoneCount, blockNext, currentBlock, homeLessonState, homeSuggestions, routeOrder } from '../lib/route';
import { loadSaves } from '../lib/resume';
import { hasPicture } from '../lib/wordPicture';
import { WordPicture } from '../pictures';
import { Bi, HelpText } from './Bi';
import { CertBadge } from './Certificate';
import { CheckIcon, ChevronIcon, CrownIcon, LockIcon } from './Icons';
import { ChromeBack } from './ChromeBack';
import { RestartButton, ResumeChip, resumeLabel } from './Resume';
import { DailyReview } from './Screens';
import { PocketIcon } from './Offline';

/**
 * The home ("Route"): at most 3 things to tap (src/lib/route.ts).
 *  - Working in a block: [Start] on its next lesson and [Other topic], plus [Herhaal vandaag]
 *    when words are due. Done lessons are a calm tick, not a button (practising again lives in
 *    "Herhaal vandaag" and All topics).
 *  - A lesson stopped halfway: [Continue] [Start again] [Other topic]. "Herhaal vandaag" waits
 *    until that lesson is finished or started again (it would be a 4th choice).
 *  - The block finished: 2 suggested next blocks and [Other topic]; with words due, only the
 *    recommended one, [Herhaal vandaag] and [Other topic].
 * Tapping a suggestion makes it the current block and shows it with its Start button, so the
 * learner first sees what the topic is before a lesson begins. "Other topic" opens All topics: a
 * list of every topic, each leading to its topic page (lessons, pocket card, certificate).
 */
export function Route({ progress, lang, access = 'full', daily, onDaily, onStart, onRestart, onPick, onAll, onUpgrade, arrived, onArrived, focusUnit, onFocused }: {
  progress: Progress;
  lang?: HelpLanguage;
  access?: Access;
  /** "Herhaal vandaag": shown here only when words are due. */
  daily?: DailyCard | null;
  onDaily?: () => void;
  onStart: (lessonId: string, review: boolean) => void;
  /** "Start again": the lesson stopped halfway, from the top (its saved place is thrown away). */
  onRestart?: (lessonId: string) => void;
  /** Makes this unit the current block (stored in progress.currentUnit). */
  onPick: (unitId: string) => void;
  /** "Other topic": opens All topics. */
  onAll: () => void;
  /** Opens the unlock card (preview). */
  onUpgrade?: () => void;
  /** Back from a finished lesson: the next lesson (or the choice) in view, stamp the done one. */
  arrived?: string | null;
  onArrived?: () => void;
  /** From a coach link: the block to mark for a moment (App made it the current block). */
  focusUnit?: string | null;
  onFocused?: () => void;
}) {
  const { sector, completed } = progress;
  const rtl = lang?.dir === 'rtl';
  const block = currentBlock(progress);
  const [marked, setMarked] = useState<string | null>(focusUnit ?? null);
  // The lesson just finished: kept for this visit, for its one-time stamp.
  const [justDone] = useState<string | null>(arrived ?? null);
  const [saves] = useState(() => loadSaves());
  // The block's next lesson, when it was stopped halfway: Continue and Start again.
  const resumeId = block?.lessons.find((l) => homeLessonState(block, l.id, completed, access) === 'now' && saves[l.id]?.review === false)?.id;
  // "Herhaal vandaag" counts as one of the three: not next to Continue + Start again, and next
  // to only the recommended topic when the block is finished.
  const dailyDue = daily?.state === 'due' && !resumeId;
  const choices = block ? [] : homeSuggestions(sector, completed).slice(0, dailyDue ? 1 : 2);
  const ref = useRef<HTMLDivElement>(null);
  const order = routeOrder(sector);
  const unitIndex = (unit: Unit) => order.findIndex((u) => u.id === unit.id);

  // After a lesson or a coach link: the next step in view (the next lesson or the choice),
  // between the sticky top bar and the bottom bar.
  useEffect(() => {
    if (!focusUnit && !arrived) return;
    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const t = window.setTimeout(() => {
      const top = document.querySelector('.topbar')?.getBoundingClientRect().bottom ?? 0;
      const foot = document.querySelector('.bottom-nav')?.getBoundingClientRect().top ?? window.innerHeight;
      const target = ref.current?.querySelector<HTMLElement>(block ? '.bay-now' : '.rb-choose') ?? null;
      if (target) {
        const r = target.getBoundingClientRect();
        // Fully in view already: nothing moves. Otherwise its top just under the top bar.
        if (r.top < top + 4 || r.bottom > foot - 8) {
          window.scrollBy({ top: r.top - top - 12, behavior: still ? 'auto' : 'smooth' });
        }
      }
      if (focusUnit) onFocused?.();
      else onArrived?.();
    }, 80);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusUnit, arrived]);
  useEffect(() => {
    if (!marked) return;
    const off = window.setTimeout(() => setMarked(null), 4000);
    return () => window.clearTimeout(off);
  }, [marked]);

  const pick = (unit: Unit) => {
    if (!unitAllowed(unit.id, access)) { onUpgrade?.(); return; }
    onPick(unit.id);
    window.scrollTo({ top: 0 });
  };

  /** The block's lessons: only the next one is a button (the big yellow card); the rest is calm text. */
  const lessons = (unit: Unit) => {
    const u = unitIndex(unit);
    return (
      <ol className="bays rb-lessons">
        {unit.lessons.map((lesson, i) => {
          const state = homeLessonState(unit, lesson.id, completed, access);
          const first = lesson.words.find(hasPicture);
          const title = gloss(lesson.id, lesson.title, lang);
          const saved = state === 'now' && saves[lesson.id]?.review === false ? saves[lesson.id] : undefined;
          const css = state === 'later' ? 'locked' : state;
          const body = (
            <>
              {first && <WordPicture className="bay-pic" id={first.id} emoji={first.emoji} size={48} />}
              <span className="bay-text" dir={rtl ? 'rtl' : undefined}>
                <Bi className="bay-title" text={title} />
                {saved && <ResumeChip save={saved} lang={lang} />}
                {state === 'now' && !saved && (
                  <span className="bay-start">
                    <Bi className="bay-start-label" text={ui('start', lang)} />
                    <ChevronIcon size={22} />
                  </span>
                )}
              </span>
              {state === 'now' && <span className="bay-char" aria-hidden><Character who="bram" mood="idle" size={118} /></span>}
            </>
          );
          const restart = saved && onRestart && lesson.id === resumeId;
          return (
            <li
              key={lesson.id}
              className={`bay bay-${css} ${saved ? 'bay-saved' : ''} ${justDone && state === 'done' && lesson.id === justDone ? 'bay-arrived' : ''} ${justDone && state === 'now' ? 'bay-pop' : ''}`}
            >
              <span className="bay-marker" aria-hidden>{state === 'done' ? <CheckIcon size={18} /> : i + 1}</span>
              {state === 'now' ? (
                <button
                  type="button"
                  className="bay-card"
                  onClick={() => onStart(lesson.id, false)}
                  aria-label={`${u + 1}.${i + 1} ${lesson.title}${title.help ? ` (${title.help})` : ''} · ${saved ? resumeLabel(saved) : ui('start').en}`}
                >
                  {body}
                </button>
              ) : (
                <div className="bay-card bay-still">
                  {body}
                  <span className="sr-only">{state === 'done' ? ` · ${ui('stampDone').en}` : ''}</span>
                </div>
              )}
              {restart && <RestartButton lang={lang} onRestart={() => onRestart(lesson.id)} />}
            </li>
          );
        })}
      </ol>
    );
  };

  return (
    <div className="path route home3" ref={ref} dir={rtl ? 'rtl' : undefined}>
      {dailyDue && daily && <DailyReview card={daily} lang={lang} onDaily={onDaily} />}

      {block && (
        <section className="rb-current" aria-label={`Unit ${unitIndex(block) + 1}: ${block.title}`}>
          <div id={`unit-${block.id.slice(2)}`} className={`rb-block ${marked === block.id ? 'rb-marked' : ''}`}>
            <WordPicture className="rb-pic" id={unitIcons[block.id] ?? ''} emoji={block.emoji} size={64} />
            <UnitTitle unit={block} lang={lang} heading />
            <BlockProgress unit={block} completed={completed} lang={lang} />
          </div>
          {!unitAllowed(block.id, access) && <FullOnly lang={lang} onUpgrade={onUpgrade} />}
          {lessons(block)}
        </section>
      )}

      {!block && (
        <section className="rb-choose" aria-labelledby="rb-choose-title">
          {choices.length > 0 ? (
            <>
              <h2 id="rb-choose-title" className="rb-choose-title">
                <span className="sr-only" lang="nl">Kies je volgende onderwerp. </span>
                <Bi text={ui('chooseNext', lang)} />
              </h2>
              <ul className="rb-choices">
                {choices.map((unit, i) => {
                  const allowed = unitAllowed(unit.id, access);
                  const n = blockDoneCount(unit, completed);
                  const rec = i === 0 && allowed;
                  const t = unitTitle(unit, lang);
                  return (
                    <li key={unit.id}>
                      <button
                        type="button"
                        className={`rb-choice ${rec ? 'rb-rec' : ''} ${allowed ? '' : 'rb-choice-locked'}`}
                        onClick={() => pick(unit)}
                        aria-label={`${t.help ? `${t.help} · ` : ''}${unit.title} · ${unit.titleNl}${rec ? ` · Aanbevolen · ${ui('recommended').en}` : ''} · ${n ? `${n} / ` : ''}${unit.lessons.length} ${uiCount('lessonsUnit', unit.lessons.length).en}${allowed ? '' : ` · ${ui('fullVersion').en}`}`}
                      >
                        <WordPicture className="rb-choice-pic" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={52} />
                        <span className="rb-choice-text" dir={rtl ? 'rtl' : undefined}>
                          {rec && (
                            <span className="rb-rec-chip" aria-hidden>
                              {lang?.ui.recommended ? <HelpText className="rb-rec-word" text={lang.ui.recommended} lang={lang} /> : <span className="rb-rec-word" lang="en">{ui('recommended').en}</span>}
                            </span>
                          )}
                          <Bi className="rb-choice-title" text={t} />
                          {allowed ? <LessonCount unit={unit} completed={completed} lang={lang} /> : <span className="rb-count"><Bi text={ui('fullVersion', lang)} /></span>}
                        </span>
                        {allowed ? <ChevronIcon size={24} className="rb-choice-go" /> : <LockIcon size={20} className="rb-choice-go" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p className="rb-all-done">
              <span className="rb-all-done-icon" aria-hidden><CheckIcon size={26} /></span>
              <Bi text={ui('allTopicsDone', lang)} />
            </p>
          )}
        </section>
      )}

      {/* One link for every other topic: All topics (it replaces "choose another topic"). */}
      <button type="button" className="rb-all rb-other" onClick={onAll}>
        <span className="sr-only" lang="nl">Ander onderwerp. </span>
        <Bi text={ui('otherTopicLink', lang)} />
        <ChevronIcon size={18} />
      </button>
    </div>
  );
}

/** "Volledige versie": a preview learner's way to the unlock card. */
function FullOnly({ lang, onUpgrade }: { lang?: HelpLanguage; onUpgrade?: () => void }) {
  return (
    <button type="button" className="full-only-note" onClick={onUpgrade}>
      <LockIcon size={16} />
      <span lang="nl">Volledige versie</span>
      <Bi className="full-only-en" text={ui('fullVersion', lang)} />
      <ChevronIcon size={16} />
    </button>
  );
}

/** A unit's title as a bilingual pair: the help language with the English small (or the English only). */
function unitTitle(unit: Unit, lang?: HelpLanguage): Bilingual {
  return gloss(unit.id, unit.title, lang);
}

/** The block's title: the help language large, the English and the Dutch small under it. */
function UnitTitle({ unit, lang, heading = false }: { unit: Unit; lang?: HelpLanguage; heading?: boolean }) {
  const help = lang?.gloss[unit.id];
  const rtl = lang?.dir === 'rtl';
  const Tag = heading ? 'h2' : 'h3';
  return (
    <div className="rb-titles" dir={rtl && help ? 'rtl' : undefined}>
      <Tag className="rb-title">
        {help ? <HelpText text={help} lang={lang!} className="rb-main" /> : <span className="rb-main" lang="en">{unit.title}</span>}
      </Tag>
      {help && <span className="rb-sub en-support" lang="en" dir={rtl ? 'ltr' : undefined}>{unit.title}</span>}
      <span className="rb-sub rb-nl" lang="nl" dir={rtl ? 'ltr' : undefined}>{unit.titleNl}</span>
    </div>
  );
}

/** "2 / 4 lessons" with a thin line under the block's title. */
function BlockProgress({ unit, completed, lang }: { unit: Unit; completed: Record<string, unknown>; lang?: HelpLanguage }) {
  const n = blockDoneCount(unit, completed);
  const of = unit.lessons.length;
  return (
    <div className="rb-progress">
      <span className="sr-only">{n} / {of} {uiCount('lessonsUnit', of).en}</span>
      <span className="rb-bar" aria-hidden><span className="rb-bar-fill" style={{ width: `${(n / of) * 100}%` }} /></span>
      <LessonCount unit={unit} completed={completed} lang={lang} showDone />
    </div>
  );
}

/** "3 lessons", or "1 / 3 lessons" once the block is started (the numbers kept left to right). */
function LessonCount({ unit, completed, lang, showDone = false }: { unit: Unit; completed: Record<string, unknown>; lang?: HelpLanguage; showDone?: boolean }) {
  const n = blockDoneCount(unit, completed);
  const of = unit.lessons.length;
  const word = uiCount('lessonsUnit', of, lang);
  const both = showDone || n > 0;
  return (
    <span className="rb-count" aria-hidden>
      <b className="rb-count-n" dir="ltr">{both ? `${n} / ${of}` : of}</b>
      {word.help && lang ? <HelpText className="rb-count-word" text={word.help} lang={lang} /> : <span className="rb-count-word" lang="en">{word.en}</span>}
    </span>
  );
}

/** The plain screen head of All topics and a topic page: a back arrow and the title. */
function ScreenHead({ lang, onBack, nl, text }: { lang?: HelpLanguage; onBack: () => void; nl: string; text: Bilingual }) {
  const rtl = lang?.dir === 'rtl';
  return (
    <div className="screen-head rb-all-head" dir={rtl ? 'rtl' : undefined}>
      <ChromeBack lang={lang} onBack={onBack} />
      <h1>
        <span className="rb-all-nl" lang="nl" dir={rtl ? 'ltr' : undefined}>{nl}</span>
        <Bi text={text} />
      </h1>
    </div>
  );
}

/**
 * "Alle onderwerpen": every topic as one row (the list exception of the max-3 rule: one kind of
 * row, one tap per row, no buttons inside a row). The learner's own course first, then the other
 * sectors under a plain heading. A row opens the topic page.
 */
export function AllTopics({ progress, lang, access = 'full', onBack, onOpen }: {
  progress: Progress;
  lang?: HelpLanguage;
  access?: Access;
  onBack: () => void;
  onOpen: (unitId: string) => void;
}) {
  const { sector, completed } = progress;
  const { main, other } = coursePlan(sector);
  const block = currentBlock(progress);
  const rtl = lang?.dir === 'rtl';
  const row = (unit: Unit, u: number) => {
    const allowed = unitAllowed(unit.id, access);
    const finished = unitDone(unit, completed);
    const n = blockDoneCount(unit, completed);
    const t = unitTitle(unit, lang);
    const now = block?.id === unit.id;
    return (
      <li key={unit.id}>
        <button
          type="button"
          id={`unit-${unit.id.slice(2)}`}
          className={`topic-row ${finished ? 'topic-done' : ''} ${now ? 'topic-now' : ''} ${allowed ? '' : 'topic-locked'}`}
          onClick={() => onOpen(unit.id)}
          aria-label={`${u + 1}. ${t.help ? `${t.help} · ` : ''}${unit.title} · ${unit.titleNl} · ${n} / ${unit.lessons.length} ${uiCount('lessonsUnit', unit.lessons.length).en}${allowed ? '' : ` · ${ui('fullVersion').en}`}`}
        >
          <span className="topic-num" aria-hidden>{String(u + 1).padStart(2, '0')}</span>
          <WordPicture className="topic-pic" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={44} />
          <span className="topic-text" dir={rtl ? 'rtl' : undefined} aria-hidden>
            <Bi className="topic-title" text={t} />
            {allowed && <LessonCount unit={unit} completed={completed} lang={lang} showDone={n > 0} />}
          </span>
          <span className="topic-end" aria-hidden>
            {!allowed ? <LockIcon size={18} /> : finished ? <span className="topic-check"><CheckIcon size={16} /></span> : <ChevronIcon size={20} />}
          </span>
        </button>
      </li>
    );
  };
  return (
    <div className="rb-all-screen topics-screen">
      <ScreenHead lang={lang} onBack={onBack} nl="Alle onderwerpen" text={ui('allTopics', lang)} />
      <div className="topics" dir={rtl ? 'rtl' : undefined}>
        <ul className="topic-list" data-list="topics">{main.map((unit, i) => row(unit, i))}</ul>
        {other.length > 0 && (
          <>
            <h2 className="topic-group">
              <span lang="nl" className="topic-group-nl" dir="ltr">Andere sectoren</span>
              <Bi text={ui('otherSectors', lang)} />
            </h2>
            <ul className="topic-list" data-list="topics">{other.map((unit, i) => row(unit, main.length + i))}</ul>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * A topic page (from All topics): the topic's sign, at most 3 actions (Back, the pocket card,
 * and the certificate once the topic is finished) and its lessons. Done lessons can be practised
 * again here; the next one says Start (or Continue when it was stopped halfway).
 */
export function TopicPage({ unit, progress, lang, access = 'full', onBack, onStart, onPocket, onCertificate, onUpgrade, focus = false }: {
  unit: Unit;
  progress: Progress;
  lang?: HelpLanguage;
  access?: Access;
  onBack: () => void;
  onStart: (lessonId: string, review: boolean) => void;
  onPocket?: (unitId: string) => void;
  onCertificate?: (unitId: string) => void;
  onUpgrade?: () => void;
  /** From a coach link: mark the topic for a moment. */
  focus?: boolean;
}) {
  const { completed, sector } = progress;
  const rtl = lang?.dir === 'rtl';
  const allowed = unitAllowed(unit.id, access);
  const finished = unitDone(unit, completed);
  const next = allowed ? blockNext(unit, completed) : undefined;
  const [saves] = useState(() => loadSaves());
  const [marked, setMarked] = useState(focus);
  useEffect(() => {
    if (!marked) return;
    const off = window.setTimeout(() => setMarked(false), 4000);
    return () => window.clearTimeout(off);
  }, [marked]);
  const u = routeOrder(sector).findIndex((x) => x.id === unit.id);
  return (
    <div className="rb-all-screen topic-screen">
      {/* The head names the topic (Dutch small, the help language large); Back goes to All topics. */}
      <ScreenHead lang={lang} onBack={onBack} nl={unit.titleNl} text={unitTitle(unit, lang)} />
      <div className="path route topic-page" dir={rtl ? 'rtl' : undefined}>
        {/* The topic's sign: its picture and how far the learner is (the name is in the head). */}
        <div className={`rb-block topic-sign ${marked ? 'rb-marked' : ''}`} aria-label={`Unit ${u + 1}: ${unit.title}`} role="group">
          <WordPicture className="rb-pic" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={64} />
          <BlockProgress unit={unit} completed={completed} lang={lang} />
        </div>
        {allowed ? (
          (onPocket || (finished && onCertificate)) && (
            <div className="topic-tools" dir={rtl ? 'rtl' : undefined}>
              {onPocket && (
                <button type="button" className="unit-tool pocket-open" onClick={() => onPocket(unit.id)}>
                  <PocketIcon />
                  <span className="unit-tool-text"><Bi className="unit-tool-label" text={ui('pocketCard', lang)} /></span>
                </button>
              )}
              {finished && onCertificate && <CertBadge lang={lang} onOpen={() => onCertificate(unit.id)} />}
            </div>
          )
        ) : (
          <FullOnly lang={lang} onUpgrade={onUpgrade} />
        )}
        <ol className="bays rb-lessons topic-lessons" data-list="lessons">
          {unit.lessons.map((lesson, i) => {
            const record = completed[lesson.id] as { best?: number } | undefined;
            const open = allowed && isUnlocked(lesson.id, completed, access);
            const state = !open ? 'locked' : record ? 'done' : lesson.id === next?.id ? 'now' : 'open';
            const first = lesson.words.find(hasPicture);
            const title = gloss(lesson.id, lesson.title, lang);
            const saved = open && saves[lesson.id]?.review === Boolean(record) ? saves[lesson.id] : undefined;
            return (
              <li key={lesson.id} className={`bay bay-${state} ${saved ? 'bay-saved' : ''}`}>
                <span className="bay-marker" aria-hidden>{state === 'done' ? <CheckIcon size={18} /> : i + 1}</span>
                <button
                  type="button"
                  className="bay-card"
                  disabled={!open}
                  onClick={() => onStart(lesson.id, Boolean(record))}
                  aria-label={`${u + 1}.${i + 1} ${lesson.title}${title.help ? ` (${title.help})` : ''}${saved ? ` · ${resumeLabel(saved)}` : open ? (record ? ` · ${ui('practice').en}` : ` · ${ui('start').en}`) : ` (${ui('locked').en})`}`}
                >
                  {first && <WordPicture className="bay-pic" id={first.id} emoji={first.emoji} size={48} />}
                  <span className="bay-text" dir={rtl ? 'rtl' : undefined}>
                    <Bi className="bay-title" text={title} />
                    {saved && <ResumeChip save={saved} lang={lang} />}
                    {state === 'done' && !saved && (
                      <span className="bay-again">
                        {record?.best === 1 ? <CrownIcon size={16} /> : <CheckIcon size={16} />}
                        <Bi className="bay-again-label" text={ui('practice', lang)} />
                      </span>
                    )}
                    {state === 'now' && !saved && (
                      <span className="bay-start">
                        <Bi className="bay-start-label" text={ui('start', lang)} />
                        <ChevronIcon size={22} />
                      </span>
                    )}
                  </span>
                  {state === 'open' && !saved && <ChevronIcon size={22} className="bay-chev" />}
                  {state === 'locked' && <LockIcon size={18} className="bay-lock" />}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
