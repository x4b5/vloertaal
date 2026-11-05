import { useState } from 'react';
import { GeluktDonePage, GeluktLine, GeluktPage } from '../components/GeluktCard';
import { Route } from '../components/Route';
import { RulesPathNote } from '../components/RulesHelp';
import { BottomNav, TopBar } from '../components/Screens';
import { cultureTips } from '../content/culture';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { emptyProgress, type Progress } from '../lib/progress';
import { dutchUi } from '../lib/track';
import { workTryLine } from '../lib/workTry';

/**
 * "Gelukt?" (src/components/GeluktCard.tsx), for screenshots and the max-3 counter:
 * /?shot=gelukt (&lang=pl|ar|nl): the home of a learner who got "Probeer het vandaag op je werk"
 * yesterday, with the line under the next lesson (in the work-rules track it takes the place of
 * "Over deze regels", the last of the three); a tap opens its page, [Ja, gelukt] and [Nog niet]
 * close it (the home as usual, without the line); the back arrow keeps it. &state=page: the page.
 * &daily=due: words due as well (no room: the line waits). The answer is not counted here (no
 * storage is touched). Since 5 November 2026 [Ja, gelukt] leads to the short moment after it
 * (GeluktDonePage: &n=4 sentences so far, 1 the first), and its [Verder] to the home;
 * &state=done opens that moment.
 */
export function GeluktShot({ lang: code, gender }: { lang: string | null; gender?: Gender }) {
  const lang = getHelpLanguage(code as LangCode, gender);
  const q = new URLSearchParams(location.search);
  const [progress] = useState<Progress>(() => ({
    ...emptyProgress, onboarded: true, helpLang: (code as LangCode | 'nl' | null) ?? null, gender, sector: 'none',
    country: 'nl', xp: 20, streak: 1, lastDay: '2026-10-31',
    completed: { [code === 'nl' ? 'r.l.zoeken.1' : 'l.hello']: { best: 1, times: 1 } }, firstDay: '2026-10-01',
  }));
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(q.get('state') === 'page');
  const [done, setDone] = useState(q.get('state') === 'done');
  const n = Number(q.get('n') ?? 4) || 4;
  const lesson = cultureTips.find((t) => workTryLine(t.lessonId))?.lessonId;
  const line = lesson ? workTryLine(lesson) : undefined;
  const daily = q.get('daily') === 'due' ? { state: 'due' as const, due: 6, tomorrow: 0, extra: 0 } : null;
  if (done && line) {
    return (
      <>
        <GeluktDonePage n={n} nl={line.nl} lang={lang} onDone={() => { setDone(false); setOpen(false); setPage(false); }} />
        <BottomNav current="route" onTab={() => {}} lang={lang} />
      </>
    );
  }
  if (page && open && line) {
    return (
      <>
        <GeluktPage line={line} lang={lang} onBack={() => setPage(false)} onAnswer={(worked) => { if (worked) setDone(true); else { setOpen(false); setPage(false); } }} />
        <BottomNav current="route" onTab={() => {}} lang={lang} />
      </>
    );
  }
  return (
    <>
      <TopBar streak={1} done={false} words={6} lang={lang} />
      <Route
        progress={progress} lang={lang} access="full" onStart={() => {}} onPick={() => {}} onAll={() => {}}
        daily={daily} onDaily={() => {}}
        lines={[
          ...(open && line ? [{ id: 'gelukt', node: <GeluktLine line={line} lang={lang} onOpen={() => setPage(true)} /> }] : []),
          ...(dutchUi(lang) ? [{ id: 'rules', node: <RulesPathNote lang={lang} /> }] : []),
        ]}
      />
      <BottomNav current="route" onTab={() => {}} lang={lang} />
    </>
  );
}
