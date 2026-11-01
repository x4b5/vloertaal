import { useState } from 'react';
import { GeluktCard } from '../components/GeluktCard';
import { Route } from '../components/Route';
import { BottomNav, TopBar } from '../components/Screens';
import { cultureTips } from '../content/culture';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { emptyProgress, type Progress } from '../lib/progress';
import { workTryLine } from '../lib/workTry';

/**
 * "Gelukt?" (src/components/GeluktCard.tsx), for screenshots and the max-3 counter:
 * /?shot=gelukt (&lang=pl|ar|nl): the home of a learner who got "Probeer het vandaag op je werk"
 * yesterday, with the card in the block's place; [Ja, gelukt] and [Nog niet] close it (the home
 * as usual). The answer is not counted here (no storage is touched).
 */
export function GeluktShot({ lang: code, gender }: { lang: string | null; gender?: Gender }) {
  const lang = getHelpLanguage(code as LangCode, gender);
  const [progress] = useState<Progress>(() => ({
    ...emptyProgress, onboarded: true, helpLang: (code as LangCode | 'nl' | null) ?? null, gender, sector: 'none',
    country: 'nl', xp: 20, streak: 1, lastDay: '2026-10-31',
    completed: { 'l.hello': { best: 1, times: 1 } }, firstDay: '2026-10-01',
  }));
  const [open, setOpen] = useState(true);
  const lesson = cultureTips.find((t) => workTryLine(t.lessonId))?.lessonId;
  const line = lesson ? workTryLine(lesson) : undefined;
  return (
    <>
      <TopBar streak={1} done={false} words={6} lang={lang} />
      <Route
        progress={progress} lang={lang} access="full" onStart={() => {}} onPick={() => {}} onAll={() => {}}
        offer={open && line ? <GeluktCard line={line} lang={lang} onAnswer={() => setOpen(false)} /> : undefined}
      />
      <BottomNav current="route" onTab={() => {}} lang={lang} />
    </>
  );
}
