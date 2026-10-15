import { useEffect, useState } from 'react';
import { courseUnits, ruleCards } from '../content/courses';
import { RULES_DISCLAIMER, ruleAdviceLine } from '../content/regels/disclaimer';
import { HELP_ROWS, helpRowText, type HelpRow } from '../content/regels/help';
import type { Unit } from '../content/types';
import { ui } from '../i18n';
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
import { useVoices } from './useVoices';

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
export function RulesHelp({ lang, onShelf, onBack }: {
  lang?: HelpLanguage;
  /** "Alle regels": the rule cards of finished lessons. */
  onShelf: () => void;
  /** Opened from the first lesson's result (not the tab): a back arrow. */
  onBack?: () => void;
}) {
  return (
    <div className="screen rules-help" lang="nl">
      <div className="screen-head">
        {onBack && <ChromeBack lang={lang} onBack={onBack} />}
        <h1>Hulp</h1>
      </div>
      <RulesDisclaimer />
      <h2 className="rh-title">{ui('phrasebook', lang).help ?? 'Wie bel je?'}</h2>
      <p className="muted rh-hint">{ui('phrasebookHint', lang).help}</p>
      <ul className="rh-rows">
        {HELP_ROWS.map((row) => <HelpRowItem key={row.id} row={row} lang={lang} />)}
      </ul>
      <button type="button" className="hub-card hub-tips rules-shelf-link" onClick={onShelf}>
        <span className="hub-icon" aria-hidden><span className="entry-emoji">📘</span></span>
        <span className="hub-text">
          <span className="hub-nl">{ui('cultureTips', lang).help ?? 'Alle regels'}</span>
          <span className="bi">De regels uit je lessen, om nog eens te lezen.</span>
        </span>
        <ChevronIcon size={24} />
      </button>
    </div>
  );
}

/** RULES_DISCLAIMER as a calm card (not a warning): general information, ask for your situation. */
export function RulesDisclaimer() {
  return (
    <section className="rules-disclaimer" aria-label="Goed om te weten" lang="nl">
      <span className="rules-disclaimer-icon" aria-hidden><InfoIcon size={24} /></span>
      <p>{RULES_DISCLAIMER.map((line) => <span key={line} className="rules-disclaimer-line">{line}</span>)}</p>
    </section>
  );
}

function HelpRowItem({ row, lang }: { row: HelpRow; lang?: HelpLanguage }) {
  const body = (
    <>
      <span className="rh-emoji" aria-hidden>{row.emoji}</span>
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
          aria-label={`${row.name}: ${call ? 'bel' : 'open'} ${row.show}. ${row.when}`}
        >
          {body}
          <span className="rh-go" aria-hidden>{call ? <CallIcon size={24} /> : <GlobeIcon size={24} />}</span>
        </a>
      </li>
    );
  }
  return (
    <li className="rh-row">
      <div className="rh-card rh-say">
        {body}
        <span className="rh-go rh-go-say"><SpeakButton text={helpRowText(row)} long needsDevice help={lang} /></span>
      </div>
    </li>
  );
}

/**
 * "Alle regels": the rule cards of the finished lessons, grouped by topic (course order), built
 * like the Dutch course's "Zo werkt het hier" tips: one list, one tap per rule to open it. An open
 * rule shows its text with one speaker, and under a written rule (law, contract, cao) its quiet
 * "algemene informatie" line. The topic names are headings inside the list, not buttons.
 */
export function RulesShelf({ progress, lang, onBack }: { progress: Progress; lang?: HelpLanguage; onBack: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const groups = shelfGroups(courseUnits('regels'), progress.completed);
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
              <li key={unit.id} className="shelf-unit"><h2 className="shelf-unit-title"><span aria-hidden>{unit.emoji}</span> {unit.title}</h2></li>,
              ...rules.map((r) => {
                const isOpen = open === r.id;
                const advice = r.rule === 'geschreven' ? ruleAdviceLine(r.id) : undefined;
                const text = r.body.join(' ');
                return (
                  <li key={r.id} className={`tips-item ${isOpen ? 'open' : ''}`}>
                    <button type="button" className="tips-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : r.id)}>
                      <span className="tips-emoji" aria-hidden>{r.emoji}</span>
                      <span className="shelf-title">{r.title}</span>
                      <ChevronIcon />
                    </button>
                    {isOpen && (
                      <div className="tips-body shelf-body">
                        <span className={`rule-kind rule-kind-${r.rule}`}>{RULE_KIND_TAG[r.rule]}</span>
                        <div className="rule-body">
                          <SpeakButton text={text} long needsDevice glyph help={lang} />
                          <p>{r.body.map((line, i) => <span key={i} className="rule-line">{line}</span>)}</p>
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
