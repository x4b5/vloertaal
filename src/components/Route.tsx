import { type ReactNode, useEffect, useRef, useState } from 'react';
import { Character } from './Characters';
import { unitIcons } from '../content/unitIcons';
import type { Unit } from '../content/types';
import { gloss, ui, uiCount, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { type Access, unitAllowed } from '../lib/access';
import { unitDone } from '../lib/certificate';
import type { DailyCard } from '../lib/spaced';
import type { Progress } from '../lib/progress';
import { blockDoneCount, blockNext, currentBlock, doneBlocks, nextChoices, routeOrder } from '../lib/route';
import { clearSave, loadSaves } from '../lib/resume';
import { hasPicture } from '../lib/wordPicture';
import { WordPicture } from '../pictures';
import { Bi, HelpText } from './Bi';
import { CertBadge } from './Certificate';
import { BackIcon, CheckIcon, ChevronIcon, LockIcon } from './Icons';
import { RestartLink, ResumeChip, resumeLabel } from './Resume';
import { DailyReview } from './Screens';

/**
 * The home ("Route"), one block at a time (src/lib/route.ts):
 *  1. "Herhaal vandaag", only when words are due;
 *  2. the current block: the unit's picture and title, "2 / 4 lessons", and its lessons (only the
 *     next one is the big yellow Start card), with a small "Ander onderwerp kiezen" link;
 *     or, when the block is finished, "Kies je volgende onderwerp" with 3 block cards;
 *  3. "Gedaan": a row of small pictures of the finished units (tap one to practise it again);
 *  4. "Alle onderwerpen": the full list, on its own screen.
 * Tapping a block card makes it the current block and shows it with its Start button, so the
 * learner first sees what the topic is (the picture, the title, its lessons) before a lesson
 * begins, and a wrong tap costs nothing.
 */
export function Route({ progress, lang, access = 'full', daily, onDaily, onStart, onPick, onAll, onUpgrade, onCertificate, arrived, onArrived, focusUnit, onFocused, picking: pickingAtStart = false, openDone: openAtStart = null }: {
  progress: Progress;
  lang?: HelpLanguage;
  access?: Access;
  /** "Herhaal vandaag": shown here only when words are due. */
  daily?: DailyCard | null;
  onDaily?: () => void;
  onStart: (lessonId: string, review: boolean) => void;
  /** Makes this unit the current block (stored in progress.currentUnit). */
  onPick: (unitId: string) => void;
  /** Opens "Alle onderwerpen". */
  onAll: () => void;
  /** Opens the unlock card (preview). */
  onUpgrade?: () => void;
  onCertificate?: (unitId: string) => void;
  /** Back from a finished lesson: the next lesson (or the choice) in view, stamp the done one. */
  arrived?: string | null;
  onArrived?: () => void;
  /** From a coach link: the block to mark for a moment (App made it the current block). */
  focusUnit?: string | null;
  onFocused?: () => void;
  /** Start with the choice open (dev screenshots of "Ander onderwerp kiezen"). */
  picking?: boolean;
  /** Start with this finished unit open on the shelf (dev screenshots). */
  openDone?: string | null;
}) {
  const { sector, completed } = progress;
  const rtl = lang?.dir === 'rtl';
  const block = currentBlock(progress);
  const [picking, setPicking] = useState(pickingAtStart);
  const choosing = !block || picking;
  const brandNew = !Object.keys(completed).length;
  const choices = choosing ? nextChoices(sector, completed, block?.id) : [];
  const done = doneBlocks(sector, completed);
  // A coach link to a finished unit opens it on the shelf (to practise it again).
  const [openDone, setOpenDone] = useState<string | null>(() => (focusUnit && done.some((u) => u.id === focusUnit) ? focusUnit : openAtStart));
  const [marked, setMarked] = useState<string | null>(focusUnit ?? null);
  // The lesson just finished: kept for this visit, for its one-time stamp.
  const [justDone] = useState<string | null>(arrived ?? null);
  const [saves, setSaves] = useState(() => loadSaves());
  const ref = useRef<HTMLDivElement>(null);
  const order = routeOrder(sector);
  const unitIndex = (unit: Unit) => order.findIndex((u) => u.id === unit.id);

  // After a lesson or a coach link: the next step in view (the next lesson, the choice, or the
  // unit opened on the shelf), between the sticky top bar and the bottom bar.
  useEffect(() => {
    if (!focusUnit && !arrived) return;
    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const t = window.setTimeout(() => {
      const top = document.querySelector('.topbar')?.getBoundingClientRect().bottom ?? 0;
      const foot = document.querySelector('.bottom-nav')?.getBoundingClientRect().top ?? window.innerHeight;
      const root = ref.current;
      const target = root?.querySelector<HTMLElement>(openDone ? '.rb-done-panel' : choosing ? '.rb-choose' : '.bay-now') ?? null;
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
    setPicking(false);
    onPick(unit.id);
    window.scrollTo({ top: 0 });
  };

  /** The lessons of a block: done rows (✓), the next lesson as the one big Start card, locked rows. */
  const lessons = (unit: Unit) => {
    const allowed = unitAllowed(unit.id, access);
    const next = allowed ? blockNext(unit, completed) : undefined;
    const u = unitIndex(unit);
    return (
      <ol className="bays rb-lessons">
        {unit.lessons.map((lesson, i) => {
          const record = completed[lesson.id];
          const state = !allowed ? 'locked' : record ? 'done' : lesson.id === next?.id ? 'now' : 'locked';
          const open = state !== 'locked';
          const first = lesson.words.find(hasPicture);
          const title = gloss(lesson.id, lesson.title, lang);
          const saved = open && saves[lesson.id]?.review === Boolean(record) ? saves[lesson.id] : undefined;
          return (
            <li
              key={lesson.id}
              className={`bay bay-${state} ${saved ? 'bay-saved' : ''} ${justDone && state === 'done' && lesson.id === justDone ? 'bay-arrived' : ''} ${justDone && state === 'now' ? 'bay-pop' : ''}`}
            >
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
                  {state === 'now' && !saved && (
                    <span className="bay-start">
                      <Bi className="bay-start-label" text={ui('start', lang)} />
                      <ChevronIcon size={22} />
                    </span>
                  )}
                </span>
                {state === 'done' && !saved && <ChevronIcon size={20} className="bay-chev" />}
                {state === 'locked' && <LockIcon size={18} className="bay-lock" />}
                {state === 'now' && <span className="bay-char" aria-hidden><Character who="bram" mood="idle" size={118} /></span>}
              </button>
              {saved && (
                <RestartLink lang={lang} onRestart={() => {
                  clearSave(lesson.id);
                  setSaves(loadSaves());
                  onStart(lesson.id, Boolean(record));
                }} />
              )}
            </li>
          );
        })}
      </ol>
    );
  };

  const fullOnly = (
    <button type="button" className="full-only-note" onClick={onUpgrade}>
      <LockIcon size={16} />
      <span lang="nl">Volledige versie</span>
      <Bi className="full-only-en" text={ui('fullVersion', lang)} />
      <ChevronIcon size={16} />
    </button>
  );

  return (
    <div className="path route" ref={ref} dir={rtl ? 'rtl' : undefined}>
      {daily?.state === 'due' && <DailyReview card={daily} lang={lang} onDaily={onDaily} />}

      {block && !picking && (
        <section className="rb-current" aria-label={`Unit ${unitIndex(block) + 1}: ${block.title}`}>
          <div id={`unit-${block.id.slice(2)}`} className={`rb-block ${marked === block.id ? 'rb-marked' : ''}`}>
            <WordPicture className="rb-pic" id={unitIcons[block.id] ?? ''} emoji={block.emoji} size={64} />
            <UnitTitle unit={block} lang={lang} heading />
            <BlockProgress unit={block} completed={completed} lang={lang} />
          </div>
          {!unitAllowed(block.id, access) && fullOnly}
          {lessons(block)}
          {/* A brand-new learner gets one block only, no choice yet. */}
          {!brandNew && <button type="button" className="rb-switch" onClick={() => { setPicking(true); setOpenDone(null); }}>
            <Bi text={ui('otherTopic', lang)} />
            <ChevronIcon size={18} />
          </button>}
        </section>
      )}

      {choosing && (
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
                  const now = unit.id === block?.id;
                  const t = unitTitle(unit, lang);
                  return (
                    <li key={unit.id}>
                      <button
                        type="button"
                        className={`rb-choice ${rec ? 'rb-rec' : ''} ${allowed ? '' : 'rb-choice-locked'} ${now ? 'rb-choice-now' : ''}`}
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
                          <LessonCount unit={unit} completed={completed} lang={lang} />
                        </span>
                        {allowed ? <ChevronIcon size={24} className="rb-choice-go" /> : <LockIcon size={20} className="rb-choice-go" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {choices.some((u) => !unitAllowed(u.id, access)) && fullOnly}
            </>
          ) : (
            <p className="rb-all-done">
              <span className="rb-all-done-icon" aria-hidden><CheckIcon size={26} /></span>
              <Bi text={ui('allTopicsDone', lang)} />
            </p>
          )}
        </section>
      )}

      {done.length > 0 && (
        <section className="rb-shelf" aria-labelledby="rb-shelf-title">
          <h2 id="rb-shelf-title" className="rb-shelf-title">
            <span className="sr-only" lang="nl">Gedaan. </span>
            <Bi text={ui('topicsDone', lang)} />
          </h2>
          <div className="rb-chips">
            {done.map((unit) => {
              const t = unitTitle(unit, lang);
              const on = openDone === unit.id;
              return (
                <button
                  key={unit.id}
                  type="button"
                  className={`rb-chip ${on ? 'rb-chip-on' : ''}`}
                  aria-expanded={on}
                  aria-label={`${t.help ? `${t.help} · ` : ''}${unit.title} · ${unit.titleNl} · ${ui('practice').en}`}
                  onClick={() => setOpenDone(on ? null : unit.id)}
                >
                  <WordPicture className="rb-chip-pic" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={40} />
                  <span className="rb-chip-check" aria-hidden><CheckIcon size={14} /></span>
                </button>
              );
            })}
          </div>
          {openDone && done.some((u) => u.id === openDone) && (() => {
            const unit = done.find((u) => u.id === openDone)!;
            return (
              <div className={`rb-done-panel ${marked === unit.id ? 'rb-marked' : ''}`}>
                <div className="rb-done-head">
                  <WordPicture className="rb-done-pic" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={44} />
                  <UnitTitle unit={unit} lang={lang} />
                </div>
                {onCertificate && unitAllowed(unit.id, access) && unitDone(unit, completed) && (
                  <CertBadge lang={lang} onOpen={() => onCertificate(unit.id)} />
                )}
                {lessons(unit)}
              </div>
            );
          })()}
        </section>
      )}

      <button type="button" className="rb-all" onClick={onAll}>
        <span className="sr-only" lang="nl">Alle onderwerpen. </span>
        <Bi text={ui('allTopics', lang)} />
        <ChevronIcon size={18} />
      </button>
    </div>
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
      {help && <span className="rb-sub" lang="en" dir={rtl ? 'ltr' : undefined}>{unit.title}</span>}
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

/**
 * "Alle onderwerpen": every unit as one long path (the path view of before, with "Andere
 * sectoren"), opened from the small link at the foot of the home. A plain screen with a back arrow.
 */
export function AllTopics({ lang, onBack, children }: { lang?: HelpLanguage; onBack: () => void; children: ReactNode }) {
  const rtl = lang?.dir === 'rtl';
  return (
    <div className="rb-all-screen">
      <div className="screen-head rb-all-head" dir={rtl ? 'rtl' : undefined}>
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>
        <h1>
          <span className="rb-all-nl" lang="nl" dir={rtl ? 'ltr' : undefined}>Alle onderwerpen</span>
          <Bi text={ui('allTopics', lang)} />
        </h1>
      </div>
      {children}
    </div>
  );
}
