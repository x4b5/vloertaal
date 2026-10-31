import { Fragment, useState, type ReactNode } from 'react';
import { taalCourseUnits } from '../content/curriculum';
import { rulesCourseUnits } from '../content/rulesCourse';
import { taalNlId } from '../content/taalBe/ids';
import { unitIcons } from '../content/unitIcons';
import type { Unit } from '../content/types';
import { unitLink } from '../lib/unitLink';
import { WordPicture } from '../pictures';
import { CheckIcon } from './Icons';
import { ChromeBack } from './ChromeBack';
import type { HelpLanguage } from '../i18n/types';
import { groupByTheme } from '../content/themes';
import { ThemeHeadRow } from './Themes';
import { COACH_FACTS } from '../content/facts';
import { CONTACT_EMAIL } from '../content/about';
import { PRO_LEAD, PRO_TITLE, proSections, type ProSection } from '../content/pro';
import { KUN_REGELS, KUN_TAAL, kunOnderwerpenNu, type KunOnderwerp } from '../content/kunJeNu';

/**
 * "Voor begeleiders en werkgevers" (Dutch only), its own page from the button at the bottom of
 * About: everything for the professional (src/content/pro.ts, the same texts as
 * vloertaal.nl/voor-begeleiders): the mission, the test version, for whom, the voices and the
 * sources, privacy in detail, the facts with their sources (src/content/facts.ts), how to use it
 * with a group with a link per topic, Entree and mbo, and the contact.
 *
 * The link per topic opens Vloertaal at that topic, to send a learner by WhatsApp or e-mail,
 * grouped by theme under plain header rows (src/content/themes.ts). One kind of row with one tap
 * each (a list, the named exception to "at most three"). Shares with the phone's share sheet, or
 * copies the link. Outside the list one thing to tap: the mail address (the site's other links stay
 * text here). Also straight from the address with #begeleiders (App.tsx), without a language
 * choice or code first.
 */
export function Coaches({ onBack, lang }: { onBack: () => void; /** The learner's help language: the back arrow says Back in it too. */ lang?: HelpLanguage }) {
  const [copied, setCopied] = useState<string | null>(null);
  const share = async (unit: Unit) => {
    // A Belgian unit ("be.u.society") is linked by its Dutch id: the app opens the course of the learner's country.
    const url = unitLink(taalNlId(unit.id));
    try {
      if (navigator.share) {
        // A short Dutch line goes with the link (WhatsApp shows it above the link).
        await navigator.share({ title: `Vloertaal: ${unit.titleNl}`, text: `Oefen dit onderwerp in Vloertaal: ${unit.titleNl}`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(unit.id);
    } catch (e) {
      // The coach closed the share sheet: nothing more to do.
      if ((e as DOMException | undefined)?.name === 'AbortError') return;
      // Sharing or the clipboard did not work: show the link to copy by hand.
      window.prompt('Kopieer deze link:', url);
    }
  };
  const topics = (
    <ul className="coach-links coach-list coach-list-themes">
      {groupByTheme(taalCourseUnits()).map((group) => (
        <Fragment key={group.key}>
          <ThemeHeadRow group={group} dutchOnly />
          {group.units.map((unit) => (
            <li key={unit.id}>
              <WordPicture className="coach-icon" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={32} />
              <span className="coach-title">{unit.titleNl}</span>
              <button type="button" className="coach-share" onClick={() => share(unit)}>
                {copied === unit.id ? <><CheckIcon size={16} /> Gekopieerd</> : 'Deel link'}
              </button>
            </li>
          ))}
        </Fragment>
      ))}
    </ul>
  );
  return (
    <div className="screen coaches" lang="nl" dir="ltr">
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1 tabIndex={-1}>{PRO_TITLE}</h1>
      </div>
      <p className="muted small">{PRO_LEAD}</p>
      {proSections.map((s) => <Section key={s.id} s={s}>{s.extra === 'topics' ? topics : s.extra === 'facts' ? <Facts /> : s.extra === 'kunjenu' ? <KunTabel /> : null}</Section>)}
    </div>
  );
}

/** A section of src/content/pro.ts: its heading, paragraphs and lines, then what the page adds. */
function Section({ s, children }: { s: ProSection; children?: ReactNode }) {
  const id = `pro-${s.id.slice(2)}`;
  // The facts keep their own block (a card), with the heading in it.
  const facts = s.extra === 'facts';
  return (
    <section className={facts ? 'coach-facts' : 'about-section pro-section'} aria-labelledby={id}>
      <h2 id={id} className={facts ? 'coach-facts-title' : undefined}>
        {!facts && <span className="about-emoji" aria-hidden>{s.emoji}</span>}
        <span>{s.title}</span>
      </h2>
      {s.body.map((p) => <p key={p}>{withMail(p)}</p>)}
      {s.lines && (
        <ul className="pro-lines">
          {s.lines.map((l) => <li key={l.lead}><strong>{l.lead}</strong> {withMail(l.text)}</li>)}
        </ul>
      )}
      {children}
    </section>
  );
}

/**
 * "Wat kun je nu?" as a table per track (topic | sentences | fits), each folded in its own
 * <details> (two things to tap: with the mail address, three on this page; the list is the exception).
 */
function KunTabel() {
  // In Belgium the Belgian titles and sentences ("Meedoen in België"), from the course that plays now.
  const sporen: [string, KunOnderwerp[]][] = [['Taal', kunOnderwerpenNu(KUN_TAAL, taalCourseUnits())], ['Werkregels', kunOnderwerpenNu(KUN_REGELS, rulesCourseUnits())]];
  return (
    <>
      {sporen.map(([naam, lijst]) => (
        <details key={naam} className="kun-details">
          <summary>{naam}: {lijst.length} onderwerpen</summary>
          <table className="kun-table">
            <thead>
              <tr><th scope="col">Onderwerp</th><th scope="col">Zinnen</th><th scope="col">Past bij</th></tr>
            </thead>
            <tbody>
              {lijst.flatMap((o) => o.zinnen.map((z, i) => (
                <tr key={z.id} className={i === 0 ? 'kun-first' : undefined}>
                  {i === 0 && <th scope="row" rowSpan={o.zinnen.length}>{o.titel}</th>}
                  <td>{z.nl}</td>
                  <td>{z.niveau} · {z.vaardigheid}</td>
                </tr>
              )))}
            </tbody>
          </table>
        </details>
      ))}
    </>
  );
}

/** The facts with their sources: plain text, nothing to tap. */
function Facts() {
  return (
    <ul className="coach-facts-list">
      {COACH_FACTS.map((f) => (
        <li key={f.source}>
          <span className="coach-fact">{f.text}</span>
          <span className="coach-fact-source">Bron: {f.source}</span>
        </li>
      ))}
    </ul>
  );
}

/** A text with the contact address as a tappable mail link (the page's one thing to tap outside the list). */
function withMail(text: string): ReactNode {
  const parts = text.split(CONTACT_EMAIL);
  if (parts.length < 2) return text;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <a href={`mailto:${CONTACT_EMAIL}`} className="pro-mail">{CONTACT_EMAIL}</a>}
      {part}
    </Fragment>
  ));
}
