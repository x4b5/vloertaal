import { useState } from 'react';
import { BridgeOffer } from '../components/BridgeOffer';
import { Route } from '../components/Route';
import { RulesPathNote } from '../components/RulesHelp';
import { BottomNav, TopBar } from '../components/Screens';
import { mainLessons } from '../content/sectors';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { BRIDGE_SHARE, bridgeDue, seeBridge } from '../lib/bridge';
import { emptyProgress, type Progress } from '../lib/progress';

/**
 * "Wil je ook de werkregels leren?" (src/lib/bridge.ts), for screenshots and the max-3 counter:
 * /?shot=bridge (&lang=pl|ar): the home of a learner with most of the language course done
 * (BRIDGE_SHARE of it), the card in the block's place; [Later] closes it (the home as usual);
 * [Ja, laat zien] in the app opens Settings › "Wat wil je leren?" (here: the home without it).
 */
export function BridgeShot({ lang: code, gender }: { lang: string | null; gender?: Gender }) {
  const lang = getHelpLanguage(code as LangCode, gender);
  const [progress, setProgress] = useState<Progress>(() => {
    const lessons = mainLessons('none', 'taal');
    const done = lessons.slice(0, Math.ceil(lessons.length * BRIDGE_SHARE));
    return {
      ...emptyProgress, onboarded: true, helpLang: (code as LangCode | null) ?? null, gender, sector: 'none', country: 'nl',
      xp: 900, streak: 3, lastDay: '2026-10-31',
      completed: Object.fromEntries(done.map((l) => [l.id, { best: 1, times: 1 }])),
    };
  });
  return (
    <>
      <TopBar streak={3} done={false} words={400} lang={lang} />
      <Route
        progress={progress} lang={lang} access="full" onStart={() => {}} onPick={() => {}} onAll={() => {}}
        lines={lang?.code === 'nl' ? [{ id: 'rules', node: <RulesPathNote lang={lang} country={progress.country} /> }] : undefined}
        offer={bridgeDue(progress) ? (
          <BridgeOffer lang={lang} onGo={() => setProgress(seeBridge)} onLater={() => setProgress(seeBridge)} />
        ) : undefined}
      />
      <BottomNav current="route" onTab={() => {}} lang={lang} />
    </>
  );
}
