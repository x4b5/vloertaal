import { useEffect, useState } from 'react';
import { fillCount, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { greetedToday, greetingFor, greetingInput, rememberGreeted, type Greeting } from '../lib/greeting';
import type { Progress } from '../lib/progress';
import { HelpText } from './Bi';

/**
 * One calm line from Bram, the mascot, in a small speech bubble: in the help language only
 * (English without one), never a button. `tail` points at Bram: 'start' when he is beside the
 * bubble (the logo in the top bar), 'down' when he stands under it (the result scene).
 */
export function BramSays({ text, tail = 'start', className }: { text: Bilingual; tail?: 'start' | 'down'; className?: string }) {
  return (
    <p className={`bram-say bram-say-${tail} ${className ?? ''}`} dir={text.lang?.dir}>
      {text.help && text.lang
        ? <HelpText className="bram-say-text" text={text.help} lang={text.lang} />
        : <span className="bram-say-text" lang="en">{text.en}</span>}
    </p>
  );
}

/** The text of a home greeting. */
export function greetingText(g: Greeting, lang?: HelpLanguage): Bilingual {
  switch (g.kind) {
    case 'done': return ui('bramDone', lang);
    case 'back': return ui('bramBack', lang);
    case 'due': return fillCount('bramDueN', g.n ?? 0, lang);
    case 'streak': return fillCount('bramDayN', g.n ?? 0, lang);
    default: return ui('bramHello', lang);
  }
}

/**
 * Bram's line on the home screen, beside the logo in the top bar. The first visit of the day is
 * remembered when it is shown, so coming back to the home later that day gives the line for the
 * day's state (words to repeat, the streak) instead of the hello again.
 */
export function HomeGreeting({ progress, due, lang, force }: {
  progress: Progress;
  /** Words still in today's review. */
  due: number;
  lang?: HelpLanguage;
  /** Screenshots and tests: show this line whatever the day. */
  force?: Greeting;
}) {
  const [first] = useState(() => !greetedToday(new Date()));
  useEffect(() => rememberGreeted(new Date()), []);
  const g = force ?? greetingFor(greetingInput(progress, new Date(), due, first));
  return <BramSays text={greetingText(g, lang)} tail="start" className={`bram-greet bram-greet-${g.kind}`} />;
}
