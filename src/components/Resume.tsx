import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { resumeCount, type LessonSave } from '../lib/resume';
import { Bi } from './Bi';
import { ChevronIcon, RestartIcon } from './Icons';

/**
 * Resume an interrupted lesson, on its bay on the path (see src/lib/resume.ts):
 * - ResumeChip: a small progress ring with "12/18", and "Ga verder" in place of Start;
 * - RestartButton: "Start again" under the card on the home, which drops the save.
 */

/** A small ring, filled as far as the lesson got. */
function ProgressRing({ done, of }: { done: number; of: number }) {
  const r = 9;
  const c = 2 * Math.PI * r;
  const part = of ? Math.min(1, done / of) : 0;
  return (
    <svg className="resume-ring" viewBox="0 0 24 24" width={24} height={24} aria-hidden focusable="false">
      <circle cx="12" cy="12" r={r} fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="3.5" />
      <circle
        cx="12" cy="12" r={r} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
        strokeDasharray={`${c * part} ${c}`} transform="rotate(-90 12 12)"
      />
    </svg>
  );
}

/** What a screen reader hears on the bay: "Ga verder, 12 / 18 · Go on". */
export function resumeLabel(save: LessonSave): string {
  const { done, of } = resumeCount(save);
  return `Ga verder, ${done} / ${of} · ${ui('resumeLesson').en}`;
}

export function ResumeChip({ save, lang }: { save: LessonSave; lang?: HelpLanguage }) {
  const { done, of } = resumeCount(save);
  return (
    <>
      {/* How far the lesson got: a small ring and "12/18". */}
      <span className="resume-meta" dir="ltr">
        <ProgressRing done={done} of={of} />
        <b className="resume-n">{done}/{of}</b>
      </span>
      <span className="bay-start bay-resume">
        <span className="resume-text">
          <span className="resume-nl" lang="nl">Ga verder</span>
          <Bi className="resume-help" text={ui('resumeLesson', lang)} />
        </span>
        <ChevronIcon size={20} />
      </span>
    </>
  );
}

/** "Start again" under the Continue card on the home: a real button with its icon (the third
 *  choice of the resume state); the lesson then starts from the top. */
export function RestartButton({ lang, onRestart }: { lang?: HelpLanguage; onRestart: () => void }) {
  const t = ui('restartLesson', lang);
  return (
    <button
      type="button"
      className="btn bay-restart"
      onClick={onRestart}
      dir={lang?.dir === 'rtl' ? 'rtl' : undefined}
      aria-label={`Opnieuw beginnen · ${t.en}${t.help ? ` (${t.help})` : ''}`}
    >
      <RestartIcon size={22} />
      <span className="bay-restart-text">
        <Bi className="bay-restart-label" text={t} />
        <span className="bay-restart-nl" lang="nl" dir="ltr">Opnieuw beginnen</span>
      </span>
    </button>
  );
}
