import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { noticeGlossId, type DatedNotice } from '../lib/notice';
import { HelpSay } from './HelpSay';
import { InfoIcon } from './Icons';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';
import '../melding.css';

/**
 * "Er is iets veranderd" (src/lib/notice.ts): a calm card at the top of the home, once, in the
 * block's place (like "Wat ken je al?": with "Ander onderwerp" under it, three things to tap). Not a
 * pop-up: nothing covers the page, nothing moves, the focus stays where it is. An icon, the title
 * and the notice's line in Dutch and in the help language (the Dutch with its speaker, the help
 * language's read-aloud as elsewhere), then [Lees meer] ("Wat is er nieuw?") and [Oké].
 */
export function NoticeCard({ notice, lang, onMore, onOk }: { notice: DatedNotice; lang?: HelpLanguage; onMore: () => void; onOk: () => void }) {
  const rtl = lang?.dir === 'rtl';
  const text = gloss(noticeGlossId(notice.id), notice.en, lang);
  return (
    <section className="notice-card" aria-labelledby="notice-title" dir={rtl ? 'rtl' : undefined} data-notice={notice.id}>
      <div className="notice-head">
        <span className="notice-icon" aria-hidden><InfoIcon size={28} /></span>
        <h2 id="notice-title" className="notice-title">
          <NlPair nlFirst nl="Er is iets veranderd" nlClass="notice-nl" className="notice-help" text={ui('noticeTitle', lang)} />
        </h2>
      </div>
      <div className="notice-text">
        <p className="notice-line">
          {/* The Dutch line is the content (in the work-rules track: it alone). */}
          <NlPair nlFirst content dir="ltr" nl={notice.nl} nlClass="notice-text-nl" className="notice-text-help" text={text} />
        </p>
        <span className="notice-say">
          <SpeakButton text={notice.nl} long needsDevice help={lang} />
          <HelpSay text={text.help} lang={lang} />
        </span>
      </div>
      <div className="notice-actions">
        <button type="button" className="btn notice-more" onClick={onMore}>
          <NlPair nlFirst nl="Lees meer" nlClass="notice-btn-nl" text={ui('noticeMore', lang)} />
        </button>
        <button type="button" className="btn btn-primary notice-ok" onClick={onOk}>
          <NlPair nlFirst nl="Oké" nlClass="notice-btn-nl" text={ui('noticeOk', lang)} />
        </button>
      </div>
    </section>
  );
}
