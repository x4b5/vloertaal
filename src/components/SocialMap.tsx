import { WordPicture } from '../pictures';
import { Fragment } from 'react';
import { areaName, categoryGlossId, mapChecked, mapHref, shortUrl, SOCIAL_CATEGORIES, type Region, type SocialMapEntry } from '../content/regio';
import { CONTACT_EMAIL } from '../content/about';
import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { breakable } from '../lib/dutch';
import { certDate } from '../lib/certificate';
import { dutchUi } from '../lib/track';
import { Bi } from './Bi';
import { ChromeBack } from './ChromeBack';
import { CallIcon, ChevronIcon, GlobeIcon, InfoIcon } from './Icons';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';

/**
 * "Sociale kaart" (docs/regio-zuid-limburg.md, section 5): where to go for what in the learner's
 * region, from the Hulp tab of either track, only with a region chosen in Settings. A list screen
 * (the named exception of the tap rule): one list, one kind of row, one tap per row.
 *  - A category is a plain header row inside the list (never a button): its Dutch name, and its
 *    name in the help language under it.
 *  - Every place is one row with one tap: its number (`tel:`) when it has one, else its site
 *    (`https:`). A row with neither has one speaker instead (not counted), as "Wie bel je?" does.
 *  - The rows are Dutch (names, numbers and sites as people see them here), the "when" line too.
 * At the top: the calm disclaimer with the date of the check; at the foot the one mail link.
 */
export function SocialMap({ region, lang, onBack }: { region: Region; lang?: HelpLanguage; onBack: () => void }) {
  const groups = SOCIAL_CATEGORIES
    .map((c) => ({ ...c, rows: region.socialMap.filter((e) => e.category === c.id) }))
    .filter((g) => g.rows.length > 0);
  return (
    <div className="screen social-map" lang="nl">
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1 className="sm-title">
          <NlPair nlFirst nl="Sociale kaart" nlClass="sm-title-nl" text={ui('socialMap', lang)} />
        </h1>
      </div>
      <p className="sm-region"><span aria-hidden><WordPicture id="" emoji="📍" size={20} /></span> {region.nl}</p>
      <section className="rules-disclaimer sm-note" aria-label="Goed om te weten">
        <span className="rules-disclaimer-icon" aria-hidden><InfoIcon size={24} /></span>
        <p>
          <span className="rules-disclaimer-line">
            <NlPair nlFirst nl="Algemene informatie, geen advies. Namen, nummers en sites kunnen veranderen." nlClass="sm-note-nl" text={ui('socialMapNote', lang)} />
          </span>
          <span className="rules-disclaimer-line sm-checked">Gecontroleerd: {certDate(mapChecked(region))}</span>
        </p>
      </section>
      <p className="muted rh-hint"><Bi text={ui('socialMapHint', lang)} /></p>
      <ul className="rh-rows sm-rows" data-list="social-map">
        {groups.map((g) => (
          <Fragment key={g.id}>
            <li className="sm-head" data-category={g.id}>
              <h2 className="sm-head-title">
                {/* `content`: the work-rules track shows the Dutch name only (it has no translation). */}
                <NlPair content nlFirst nl={g.nl} nlClass="sm-head-nl" className="sm-head-help" text={gloss(categoryGlossId(g.id), g.en, lang)} />
              </h2>
            </li>
            {g.rows.map((e) => <MapRow key={e.id} entry={e} region={region} lang={lang} />)}
          </Fragment>
        ))}
      </ul>
      <p className="sm-wrong">
        <NlPair
          content nlFirst nlClass="sm-wrong-nl" text={ui('socialMapWrong', lang)}
          nl={<>Klopt iets niet? Stuur een mail naar <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr">{CONTACT_EMAIL}</a>.</>}
        />
      </p>
    </div>
  );
}

/** What a row shows of its number and site ("14 045 · heerlen.nl"): the one the tap opens in bold. */
function Shown({ e, href }: { e: SocialMapEntry; href?: string }) {
  const tel = Boolean(href?.startsWith('tel:'));
  const parts = [
    e.tel && <span key="t" className={tel ? 'rh-show-link' : undefined}>{e.tel}</span>,
    e.url && <span key="u" className={href && !tel ? 'rh-show-link' : undefined}>{shortUrl(e.url)}</span>,
  ].filter(Boolean);
  if (!parts.length) return null;
  return <span className="rh-show" dir="auto">{parts.flatMap((p, i) => (i ? [' · ', p] : [p]))}</span>;
}

function MapRow({ entry: e, region, lang }: { entry: SocialMapEntry; region: Region; lang?: HelpLanguage }) {
  const href = mapHref(e);
  const where = e.area.includes('all') ? areaName(region, 'all') : e.area.map((a) => areaName(region, a)).join(', ');
  const body = (
    <>
      <span className="rh-emoji rh-pic" aria-hidden><WordPicture id="" emoji={e.emoji} size={36} /></span>
      <span className="rh-text">
        <span className="rh-name">{breakable(e.name)}</span>
        <span className="rh-when">{breakable(e.when)}</span>
        <Shown e={e} href={href} />
        <span className="sm-area">{where}</span>
      </span>
    </>
  );
  if (href) {
    const call = href.startsWith('tel:');
    return (
      <li className="rh-row sm-row">
        <a
          className="rh-card rh-link"
          href={href}
          {...(call ? {} : { target: '_blank', rel: 'noreferrer' })}
          aria-label={`${e.name}: ${call ? `bel ${e.tel}` : `open ${shortUrl(href)}`}. ${e.when} ${where}.`}
        >
          {body}
          <span className="rh-go" aria-hidden>{call ? <CallIcon size={24} /> : <GlobeIcon size={24} />}</span>
        </a>
      </li>
    );
  }
  // No number and no site: one speaker that reads the row (hidden when nothing can say it).
  return (
    <li className="rh-row sm-row">
      <div className="rh-card rh-say">
        {body}
        <span className="rh-go rh-go-say"><SpeakButton text={`${e.name}. ${e.when}`} long needsDevice help={lang} /></span>
      </div>
    </li>
  );
}

/** The one link to the Sociale kaart, below the Hulp tab's own content (both tracks). */
export function SocialMapLink({ region, lang, onOpen }: { region: Region; lang?: HelpLanguage; onOpen: () => void }) {
  return (
    <button type="button" className="hub-card hub-tips social-map-link" onClick={onOpen}>
      <span className="hub-icon" aria-hidden><WordPicture id="" emoji="🗺️" size={34} /></span>
      <span className="hub-text">
        <NlPair content nlFirst nl={<>Sociale kaart <span className="sm-nobr">{region.nl}</span></>} nlClass="hub-nl" text={ui('socialMap', lang)} />
        {/* The work-rules track: a line under it, as "Alle regels" has. */}
        {dutchUi(lang) && <span className="bi">Waar je heen gaat voor wat, in je regio.</span>}
      </span>
      <ChevronIcon size={24} />
    </button>
  );
}
