import { useEffect, useRef, useState } from 'react';
import type { Update } from '../content/updates';
import { dateLocale, updateDate } from '../content/updateDate';
import { useUpdates } from '../content/updatesLive';
import { langTag, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { dutchUi } from '../lib/track';
import { Bi } from './Bi';
import { ChromeBack } from './ChromeBack';

/** How many dates show before "Meer". */
export const NEWS_FIRST = 3;

/**
 * "Wat is er nieuw?" (from the row at the bottom of Over): first "Binnenkort" (UPCOMING: what we
 * work on now, no dates; one line in the help language says so), then what changed in the app, the
 * list of src/content/updates.ts (also vloertaal.nl/nieuw), newest first, a heading per date (in the
 * page's language) with its points under it. The points are Dutch (lang nl, left to right also in
 * an Arabic page); in the language course one line in the help language says so. Calm: the last
 * NEWS_FIRST dates, then one button "Meer" for the rest (one thing to tap; the back arrow is
 * chrome). Works in both tracks: the work-rules track reads it all in Dutch, without that line.
 */
export function News({ lang, onBack, all: allStart = false, updates: givenUpdates, upcoming: givenUpcoming }: {
  lang?: HelpLanguage;
  onBack: () => void;
  /** Start with every date shown (screenshots, tests). */
  all?: boolean;
  updates?: Update[];
  /** "Binnenkort" (what is coming), above the dates. */
  upcoming?: string[];
}) {
  const [all, setAll] = useState(allStart);
  // The logbook (src/content/updates.ts) loads when it is not here yet (src/content/updatesLive.ts).
  const loaded = useUpdates();
  const updates = givenUpdates ?? loaded?.updates ?? [];
  const upcoming = givenUpcoming ?? loaded?.upcoming ?? [];
  const shown = all ? updates : updates.slice(0, NEWS_FIRST);
  const more = !all && updates.length > NEWS_FIRST;
  const code = lang?.code ?? 'en';
  // After "Meer": the focus goes to the first date that was not there before, so a screen reader
  // reads on from there (the button itself is gone).
  const firstNew = useRef<HTMLHeadingElement>(null);
  const opened = useRef(false);
  useEffect(() => {
    if (all && opened.current) firstNew.current?.focus({ preventScroll: true });
  }, [all]);
  return (
    <div className="screen news" dir={lang?.dir}>
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1 tabIndex={-1}><Bi text={ui('whatsNew', lang)} /></h1>
      </div>
      {/* The work-rules track is all Dutch: no need to say so. */}
      {!dutchUi(lang) && <p className="muted news-dutch"><Bi text={ui('newsInDutch', lang)} /></p>}
      {/* "Binnenkort": what is coming, without dates or promises; left out when there is nothing. */}
      {upcoming.length > 0 && (
        <section className="news-day news-soon" aria-labelledby="news-soon">
          <h2 id="news-soon" lang="nl" dir="ltr">Binnenkort</h2>
          <p className="muted news-soon-hint"><Bi text={ui('upcomingNow', lang)} /></p>
          <ul className="news-items" lang="nl" dir="ltr">
            {upcoming.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}
      {shown.map((u, i) => (
        <section key={u.date} className="news-day" aria-labelledby={`news-${u.date}`}>
          <h2 id={`news-${u.date}`} lang={langTag(code)} tabIndex={i === NEWS_FIRST ? -1 : undefined} ref={i === NEWS_FIRST ? firstNew : undefined}>
            <time dateTime={u.date}>{updateDate(u.date, dateLocale(code))}</time>
          </h2>
          <ul className="news-items" lang="nl" dir="ltr">
            {u.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      ))}
      {more && (
        <button type="button" className="btn news-more" onClick={() => { opened.current = true; setAll(true); }}>
          <Bi text={ui('more', lang)} />
        </button>
      )}
    </div>
  );
}
