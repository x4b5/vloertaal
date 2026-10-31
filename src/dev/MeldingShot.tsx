import { useState } from 'react';
import { News } from '../components/News';
import { NoticeCard } from '../components/NoticeCard';
import { Route } from '../components/Route';
import { RulesPathNote } from '../components/RulesHelp';
import { BottomNav, TopBar } from '../components/Screens';
import { UPDATES } from '../content/updates';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { noticeFor, seeNotice } from '../lib/notice';
import { emptyProgress, type Progress } from '../lib/progress';
import { EXAMPLE_NOTICE_UPDATE, withExampleNotice } from './noticeExample';

/**
 * "Er is iets veranderd" (src/lib/notice.ts) with the made-up example (./noticeExample.ts), for
 * screenshots and the max-3 counter:
 *  - /?shot=melding (&lang=pl|ar|nl): the home of a learner who started on 1 October, with the
 *    card in the block's place; [Oké] closes it (the home as usual), [Lees meer] opens "Wat is er
 *    nieuw?" with the example at the top (its back arrow: the home, without the card);
 *  - &country=be: a learner in Belgium, the example is for the Netherlands: no card;
 *  - &state=new: a learner who started after the example's day: no card.
 */
export function MeldingShot({ lang: code, gender, q }: { lang: string | null; gender?: Gender; q: URLSearchParams }) {
  const lang = withExampleNotice(getHelpLanguage(code as LangCode, gender));
  const updates = [EXAMPLE_NOTICE_UPDATE, ...UPDATES];
  const [progress, setProgress] = useState<Progress>(() => ({
    ...emptyProgress, onboarded: true, helpLang: (code as LangCode | 'nl' | null) ?? null, gender, sector: 'none',
    country: q.get('country') === 'be' ? 'be' : 'nl', xp: 20, streak: 1, lastDay: '2026-10-29',
    completed: { 'l.hello': { best: 1, times: 1 } },
    firstDay: q.get('state') === 'new' ? '2026-10-31' : '2026-10-01',
  }));
  const [news, setNews] = useState(false);
  // The example's day, so the shot looks the same on any day after it.
  const today = new Date(2026, 9, 31, 12);
  if (news) return <News lang={lang} onBack={() => setNews(false)} updates={updates} />;
  const notice = noticeFor(progress, today, updates);
  return (
    <>
      <TopBar streak={1} done={false} words={6} lang={lang} />
      <Route
        progress={progress} lang={lang} access="full" onStart={() => {}} onPick={() => {}} onAll={() => {}}
        note={<RulesPathNote lang={lang} country={progress.country} />}
        offer={notice ? (
          <NoticeCard
            notice={notice}
            lang={lang}
            onMore={() => { setProgress((p) => seeNotice(p, notice.id, today, updates)); setNews(true); }}
            onOk={() => setProgress((p) => seeNotice(p, notice.id, today, updates))}
          />
        ) : undefined}
      />
      <BottomNav current="route" onTab={() => {}} lang={lang} />
    </>
  );
}
