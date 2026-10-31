import { useEffect, useRef, useState } from 'react';
import { courseUnits, ruleCards } from '../content/courses';
import { withRegion } from '../content/regio';
import { RULES_BE_NOTE, RULES_COUNTRY, RULES_DISCLAIMER, RULES_DISCLAIMER_BE, RULES_NOTICE, RULES_NOTICE_BE, RULES_PATH_NOTE, RULES_PATH_NOTE_BE, RULES_PATH_NOTE_BE_OWN, RULES_PATH_NOTE_BE_PART, ruleAdviceLine } from '../content/regels/disclaimer';
import { isBeId } from '../content/regels/be/ids';
import { rulesCountry } from '../content/rulesCourse';
import { helpRowsFor, helpRowText, type HelpRow } from '../content/regels/help';
import { ruleIconId } from '../content/regels/ruleIcons';
import { unitIcon } from '../content/unitIcons';
import type { Unit } from '../content/types';
import { said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { speechAvailable } from '../lib/audio';
import { breakable } from '../lib/dutch';
import type { Progress } from '../lib/progress';
import { dutchUi } from '../lib/track';
import { Bi } from './Bi';
import { ChromeBack } from './ChromeBack';
import { CallIcon, ChevronIcon, GlobeIcon, InfoIcon, SpeakerOffIcon } from './Icons';
import { InfoGlyph, RULE_KIND_TAG } from './RuleSteps';
import { SpeakButton } from './SpeakButton';
import { DialectLine } from './Dialect';
import { useVoices } from './useVoices';
import { WordPicture } from '../pictures';

/**
 * The Hulp tab of the work-rules track (it replaces the Noodzinnen phrasebook there), in plain
 * Dutch: the track's disclaimer as a calm card, then "Wie bel je?" (src/content/regels/help.ts),
 * then one link to "Alle regels" (RulesShelf).
 *
 * The list is the named list exception of the tap rule: one kind of row, one tap per row. A row
 * with a number or a site is that link (`tel:` or `https:`); a row without one (the huisartsenpost,
 * your own vertrouwenspersoon) has one speaker instead, which is not counted, and is hidden when
 * nothing can say it. Outside the list: the one link to the shelf.
 */
export function RulesHelp({ lang, country, onShelf, onBack, after }: {
  lang?: HelpLanguage;
  /** Works in Belgium ('be'): a note that the rules are the Netherlands', and the Belgian rows. */
  country?: 'nl' | 'be';
  /** "Alle regels": the rule cards of finished lessons. */
  onShelf: () => void;
  /** One more link below it (the region's Sociale kaart, src/components/SocialMap.tsx). */
  after?: React.ReactNode;
  /** Opened from the first lesson's result (not the tab): a back arrow. */
  onBack?: () => void;
}) {
  // The Belgian course plays (src/content/rulesCourse.ts): its own lines, no "the rules are Dutch" note.
  const beCourse = country === 'be' && rulesCountry() === 'be';
  return (
    <div className="screen rules-help" lang="nl">
      <div className="screen-head">
        {onBack && <ChromeBack lang={lang} onBack={onBack} />}
        <h1>Hulp</h1>
      </div>
      {country === 'be' && !beCourse && (
        <section className="rules-disclaimer rules-be-note" aria-label="Je werkt in België">
          <span className="rules-disclaimer-icon" aria-hidden><InfoIcon size={24} /></span>
          <p>{RULES_BE_NOTE.map((line) => <span key={line} className="rules-disclaimer-line">{line}</span>)}</p>
        </section>
      )}
      <RulesDisclaimer be={beCourse} />
      <h2 className="rh-title">{ui('phrasebook', lang).help ?? 'Wie bel je?'}</h2>
      <p className="muted rh-hint">{ui('phrasebookHint', lang).help}</p>
      <ul className="rh-rows">
        {helpRowsFor(country).map((row) => <HelpRowItem key={row.id} row={row} lang={lang} />)}
      </ul>
      <button type="button" className="hub-card hub-tips rules-shelf-link" onClick={onShelf}>
        <span className="hub-icon" aria-hidden><WordPicture id="" emoji="📘" size={34} /></span>
        <span className="hub-text">
          <span className="hub-nl">{ui('cultureTips', lang).help ?? 'Alle regels'}</span>
          <span className="bi">De regels uit je lessen, om nog eens te lezen.</span>
        </span>
        <ChevronIcon size={24} />
      </button>
      {after}
    </div>
  );
}

/**
 * "Goed om te weten", once: the first time the work-rules track opens (before its path), on a page
 * of its own with one button. It stays readable in the Hulp tab and on Over Vloertaal.
 */
export function RulesNoticeScreen({ country, onDone }: { country?: 'nl' | 'be'; onDone: () => void }) {
  // It comes after a tap on another screen (the language): a screen reader starts at its heading.
  const head = useRef<HTMLHeadingElement>(null);
  useEffect(() => { head.current?.focus({ preventScroll: true }); }, []);
  const beCourse = country === 'be' && rulesCountry() === 'be';
  const notice = beCourse ? RULES_NOTICE_BE : RULES_NOTICE.filter((line) => country !== 'be' || line !== RULES_COUNTRY);
  return (
    <div className="screen onboarding rules-notice" lang="nl">
      <h1 className="onboarding-title" ref={head} tabIndex={-1}>Goed om te weten</h1>
      <section className="rules-disclaimer rules-notice-card" aria-label="Goed om te weten">
        <span className="rules-disclaimer-icon" aria-hidden><InfoIcon size={28} /></span>
        <p>{notice.map((line) => <span key={line} className="rules-disclaimer-line">{line}</span>)}</p>
      </section>
      {country === 'be' && !beCourse && (
        <section className="rules-disclaimer rules-be-note" aria-label="Je werkt in België">
          <span className="rules-disclaimer-icon" aria-hidden><InfoIcon size={24} /></span>
          <p>{RULES_BE_NOTE.map((line) => <span key={line} className="rules-disclaimer-line">{line}</span>)}</p>
        </section>
      )}
      <button type="button" className="btn btn-primary rules-notice-ok" onClick={onDone}>Ik snap het</button>
    </div>
  );
}

/** One quiet line above the work-rules lessons, always there (not a button): whose rules these are. */
export function RulesPathNote({ lang, country }: { lang?: HelpLanguage; country?: 'nl' | 'be' }) {
  if (!dutchUi(lang)) return null;
  return (
    <p className="rules-path-note" lang="nl">
      <InfoIcon size={18} />
      <span>{rulesPathNote(country)}</span>
    </p>
  );
}

/**
 * The line above the path: whose rules these are. In the Belgian course: Belgium's, and while some
 * units are still the Dutch ones (BE_TODO), that it is not all Belgian yet.
 */
export function rulesPathNote(country?: 'nl' | 'be'): string {
  if (country !== 'be') return RULES_PATH_NOTE;
  if (rulesCountry() !== 'be') return RULES_PATH_NOTE_BE;
  return courseUnits('regels').every((u) => isBeId(u.id)) ? RULES_PATH_NOTE_BE_OWN : RULES_PATH_NOTE_BE_PART;
}

/** RULES_DISCLAIMER as a calm card (not a warning): general information, ask for your situation.
 *  `be`: the Belgian course's (RULES_DISCLAIMER_BE). */
export function RulesDisclaimer({ be }: { be?: boolean } = {}) {
  return (
    <section className="rules-disclaimer" aria-label="Goed om te weten" lang="nl">
      <span className="rules-disclaimer-icon" aria-hidden><InfoIcon size={24} /></span>
      <p>{(be ? RULES_DISCLAIMER_BE : RULES_DISCLAIMER).map((line) => <span key={line} className="rules-disclaimer-line">{line}</span>)}</p>
    </section>
  );
}

function HelpRowItem({ row, lang }: { row: HelpRow; lang?: HelpLanguage }) {
  const body = (
    <>
      <span className="rh-emoji rh-pic" aria-hidden><WordPicture id={ruleIconId(row.emoji)} emoji={row.emoji} size={36} /></span>
      <span className="rh-text">
        <span className="rh-name">{breakable(row.name)}</span>
        <span className="rh-when">{breakable(row.when)}</span>
        <span className={`rh-show ${row.href ? 'rh-show-link' : ''}`} dir="auto">{row.show}</span>
      </span>
    </>
  );
  if (row.href) {
    const call = row.href.startsWith('tel:');
    return (
      <li className="rh-row">
        <a
          className="rh-card rh-link"
          href={row.href}
          {...(call ? {} : { target: '_blank', rel: 'noreferrer' })}
          aria-label={`${row.name}: ${call ? 'bel' : 'open'} ${call ? digitsApart(row.show) : row.show}. ${row.when}`}
        >
          {body}
          <span className="rh-go" aria-hidden>{call ? <CallIcon size={24} /> : <GlobeIcon size={24} />}</span>
        </a>
      </li>
    );
  }
  // No number or site: no action at the end (a phone or a globe there means "tap to call or open").
  // Its read-aloud is the small speaker beside the name, as everywhere else.
  return (
    <li className="rh-row">
      <div className="rh-card rh-say">
        <span className="rh-emoji rh-pic" aria-hidden><WordPicture id={ruleIconId(row.emoji)} emoji={row.emoji} size={36} /></span>
        <span className="rh-text">
          {/* The speaker is named after the row ("Afspelen: Vertrouwenspersoon"): its text is right beside it. */}
          <span className="rh-name"><ReadDigits text={row.name}>{breakable(row.name)}</ReadDigits> <SpeakButton text={helpRowText(row)} long needsDevice glyph help={lang} label={`${said(ui('playAudio', lang))}: ${digitsApart(row.name)}`} /></span>
          <span className="rh-when">{breakable(row.when)}</span>
          <span className="rh-show" dir="auto"><ReadDigits text={row.show}>{row.show}</ReadDigits></span>
        </span>
      </div>
    </li>
  );
}

/**
 * A phone number as a screen reader should say it: digit by digit ("0800-8020" is "0 8 0 0, 8 0 2
 * 0", "112" is "1 1 2"), never "achthonderd" or "honderdtwaalf". Only numbers of three or more
 * digits (with dashes or spaces inside); the rest of the text stays as it is.
 */
export function digitsApart(text: string): string {
  return text.replace(/\d+(?:[- ]\d+)*/g, (num) => (num.replace(/\D/g, '').length < 3 ? num : num.split(/[- ]/).map((g) => g.split('').join(' ')).join(', ')));
}

/** Shown as it is; a screen reader hears the number digit by digit (digitsApart). */
function ReadDigits({ text, children }: { text: string; children: React.ReactNode }) {
  const spoken = digitsApart(text);
  if (spoken === text) return <>{children}</>;
  return <><span aria-hidden>{children}</span><span className="sr-only">{spoken}</span></>;
}

/**
 * "Alle regels": the rule cards of the finished lessons, grouped by topic (course order), built
 * like the Dutch course's "Zo werkt het hier" tips: one list, one tap per rule to open it. An open
 * rule shows its text with one speaker, and under a written rule (law, contract, cao) its quiet
 * "algemene informatie" line. The topic names are headings inside the list, not buttons.
 */
export function RulesShelf({ progress, lang, onBack }: { progress: Progress; lang?: HelpLanguage; onBack: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  // With the learner's region's rules unit (src/content/regio), in its place in the path.
  const groups = shelfGroups(withRegion(courseUnits('regels'), progress.region, 'regels'), progress.completed);
  return (
    <div className="screen rules-shelf" lang="nl">
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1>{ui('cultureTips', lang).help ?? 'Alle regels'}</h1>
      </div>
      {groups.length === 0 ? (
        <p className="muted shelf-empty">Maak eerst een les af. Dan staan de regels hier.</p>
      ) : (
        <>
          <p className="muted">{ui('cultureTipsHint', lang).help}</p>
          <ul className="tips-list shelf-list">
            {groups.flatMap(({ unit, rules }) => [
              <li key={unit.id} className="shelf-unit"><h2 className="shelf-unit-title"><WordPicture className="shelf-unit-pic" id={unitIcon(unit.id)} emoji={unit.emoji} size={32} /> {unit.title}</h2></li>,
              ...rules.map((r) => {
                const isOpen = open === r.id;
                const advice = r.rule === 'geschreven' ? ruleAdviceLine(r.id) : undefined;
                const text = r.body.join(' ');
                return (
                  <li key={r.id} className={`tips-item ${isOpen ? 'open' : ''}`}>
                    <button type="button" className="tips-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : r.id)}>
                      <span className="tips-emoji tips-pic" aria-hidden><WordPicture id={ruleIconId(r.emoji)} emoji={r.emoji} size={36} /></span>
                      <span className="shelf-title">{r.title}</span>
                      <ChevronIcon />
                    </button>
                    {isOpen && (
                      <div className="tips-body shelf-body">
                        <span className={`rule-kind rule-kind-${r.rule}`}>{RULE_KIND_TAG[r.rule]}</span>
                        <div className="rule-body">
                          {/* A dialect word card (regio): no speaker, the words marked as Limburgish. */}
                          {!r.dialect && <SpeakButton text={text} long needsDevice glyph help={lang} />}
                          <p>{r.body.map((line, i) => <span key={i} className="rule-line">{r.dialect ? <DialectLine line={line} /> : line}</span>)}</p>
                        </div>
                        {advice && <p className="rule-advice"><InfoGlyph />{advice}</p>}
                      </div>
                    )}
                  </li>
                );
              }),
            ])}
          </ul>
        </>
      )}
    </div>
  );
}

/** The rule cards of finished lessons, per unit, in course order (units without any left out). */
export function shelfGroups(units: Unit[], completed: Record<string, unknown>) {
  return units
    .map((unit) => ({ unit, rules: unit.lessons.filter((l) => completed[l.id]).flatMap(ruleCards) }))
    .filter((g) => g.rules.length > 0);
}

const NOTED_KEY = 'vloertaal:no-voice-noted';
/** Screenshots (src/dev/ShotHarness.tsx, &novoice=1): the line shows whatever this phone has. */
let shotForced = false;
export function forceNoVoiceNoteForShot(on: boolean): void { shotForced = on; }
/** How long the phone gets to list its voices (some browsers only do so after a while). */
const SETTLE_MS = 1200;

/** The phone has neither a speech engine nor a Dutch voice (speakers without a recording are hidden). */
export const noDutchVoice = (dutchVoiceCount: number): boolean => !speechAvailable() || dutchVoiceCount === 0;

/**
 * The work-rules track on a phone without a Dutch voice: a calm line that the speakers are mostly
 * hidden and how to add a voice. On the home it shows once (`once`), on Settings › Geluid every
 * time. Not a button. Never in the language track (its own Settings › Stem says it there).
 */
export function NoVoiceNote({ lang, once = false, force = false }: {
  lang?: HelpLanguage;
  once?: boolean;
  /** Screenshots: show it whatever this phone has. */
  force?: boolean;
}) {
  const { device } = useVoices();
  force = force || shotForced;
  const [settled, setSettled] = useState(force);
  const [seen] = useState(() => once && !force && noted());
  useEffect(() => {
    if (settled) return;
    const t = window.setTimeout(() => setSettled(true), SETTLE_MS);
    return () => window.clearTimeout(t);
  }, [settled]);
  const show = dutchUi(lang) && !seen && settled && (force || noDutchVoice(device.length));
  useEffect(() => { if (show && once) remember(); }, [show, once]);
  if (!show) return null;
  return (
    <p className="no-voice-note" role="status" lang="nl">
      <SpeakerOffIcon size={22} />
      <Bi text={ui('voiceNone', lang)} />
    </p>
  );
}

function noted(): boolean {
  try { return localStorage.getItem(NOTED_KEY) === '1'; } catch { return false; }
}
function remember(): void {
  try { localStorage.setItem(NOTED_KEY, '1'); } catch { /* private mode: shown again next time */ }
}
