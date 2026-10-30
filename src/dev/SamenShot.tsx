import { findLesson } from '../content/curriculum';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { Samen } from '../components/Samen';
import { Result } from '../components/Screens';
import { samenDialogues, type SamenStep } from '../lib/samen';

/**
 * "Oefen samen" (src/components/Samen.tsx) in a fixed state, for screenshots and the max-3 count:
 * /?shot=samen&step=intro|turn|end|result&at=N&swap=1&cu=<lesson id>
 *  - intro (default): the explanation and the roles;
 *  - turn: turn &at= (0-based; default 0) of the lesson's chats, &swap=1 with the roles swapped;
 *  - end: "Wissel de rollen" or "Klaar";
 *  - result: a lesson's result with the row to "Oefen samen".
 * The lesson is &cu= (default l.firstday.mix, the first topic's review: two chats).
 */
export function SamenShot({ lang, gender, q }: { lang: string | null; gender?: Gender; q: URLSearchParams }) {
  const l = getHelpLanguage(lang as LangCode, gender);
  const step = q.get('step') ?? 'intro';
  if (step === 'result') {
    const next = findLesson('l.people')?.lesson;
    return (
      <Result
        right={9} total={11} newWords={6} words={24} lang={l} onDone={() => {}}
        kind="lesson"
        next={next ? { en: next.title, help: l?.gloss[next.id], lang: l, id: next.id } : undefined}
        onSamen={() => {}}
      />
    );
  }
  const lesson = findLesson(q.get('cu') ?? 'l.firstday.mix', 'taal')?.lesson ?? findLesson('l.hello', 'taal')?.lesson;
  const dialogues = samenDialogues(lesson);
  const start: SamenStep = step === 'end' ? 'end' : step === 'turn' ? Number(q.get('at') ?? 0) : 'intro';
  return <Samen dialogues={dialogues} lang={l} onBack={() => {}} onDone={() => {}} start={start} startSwapped={q.get('swap') === '1'} />;
}
