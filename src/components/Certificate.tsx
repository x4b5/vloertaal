import { dutchUi } from '../lib/track';
import { Fragment, useEffect, useId, useMemo, useRef, useState } from 'react';
import { gloss, langTag, ui, said } from '../i18n';
import type { HelpLanguage, UiKey } from '../i18n/types';
import type { SectorChoice } from '../content/sectors';
import type { Unit } from '../content/types';
import { CERT_NOTE, certData, certDate, certListLabel, certMeta, certSub, earnedCertificates, loadCertName, saveCertName, sealRing, type CertData } from '../lib/certificate';
import { certKunFits, certificatePng, fontsReady, shareCertificate } from '../lib/certCanvas';
import { kunJeNu, pastBij, type KunZin } from '../content/kunJeNu';
import type { Progress } from '../lib/progress';
import { KAART_NOTE, kaartAlt, kaartData } from '../lib/kaart';
import { kaartPng, shareKaart } from '../lib/kaartCanvas';
import { Bi } from './Bi';
import { HelpSay } from './HelpSay';
import { NlPair } from './NlPair';
import { Character } from './Characters';
import { CertIcon } from './CertBadge';
import { CheckIcon, ChevronIcon } from './Icons';
import { ChromeBack } from './ChromeBack';
import { LogoMark } from './Logo';
import { PocketIcon } from './Offline';
import { groupByTheme } from '../content/themes';
import { useFocusWhenLost } from './useFocusLost';
import { ThemeHeadRow } from './Themes';

/**
 * A certificate per finished unit ("Oefencertificaat"):
 * - CertificateSheet: the A4 landscape certificate itself (the same layout on screen, in print
 *   and, drawn again on a canvas, as the shared picture: see src/lib/certCanvas.ts);
 * - CertificateScreen: the sheet, one Save / share and Change name (the name asked on its own page);
 * - CertEarned: the one-time "Certificaat behaald" moment after a unit's last lesson;
 * - CertBadge, CertIcon: in src/components/CertBadge.tsx (on the path, in the main file);
 * - CertificatesCard: "Mijn certificaten" in Settings.
 * - CoachCardScreen: "Laat zien hoe het gaat", the coach card (src/lib/kaart.ts), next to them.
 * This file loads when a certificate is first shown (src/lazyScreens.tsx).
 * The certificate is a Dutch document; around it, the app explains in the help language.
 */

/** The round "BEHAALD" stamp, pressed slightly crooked. */
function Seal({ unitNo, ring: ringText }: { unitNo: string; ring: string }) {
  const ring = `seal-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <svg className="cert-seal" viewBox="0 0 120 120" aria-hidden focusable="false">
      <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <path id={ring} d="M60 60m-47 0a47 47 0 1 1 94 0a47 47 0 1 1-94 0" fill="none" />
      <text fontFamily="'Lexend Variable', Lexend, sans-serif" fontWeight={800} fontSize="7.4" letterSpacing="0.9" fill="currentColor">
        <textPath href={`#${ring}`} startOffset="0" textLength={2 * Math.PI * 47 - 2} lengthAdjust="spacing">{ringText}</textPath>
      </text>
      <path d="M48 38.5l7.5 7.5 15-15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="60" y="70" textAnchor="middle" fontFamily="'Big Shoulders Stencil Display', sans-serif" fontWeight={800} fontSize="21" letterSpacing="0.6" fill="currentColor">BEHAALD</text>
      <text x="60" y="86" textAnchor="middle" fontFamily="'Lexend Variable', Lexend, sans-serif" fontWeight={700} fontSize="7" letterSpacing="0.6" fill="currentColor">ONDERWERP {unitNo}</text>
    </svg>
  );
}

/** "Vloertaal" in a ballpoint hand, with a flourish under it. */
function Signature() {
  return (
    <svg className="cert-signature" viewBox="0 0 260 74" aria-hidden focusable="false">
      <text x="14" y="50" transform="skewX(-16)" fontFamily="'Lexend Variable', Lexend, sans-serif" fontWeight={300} fontSize="46" letterSpacing="-1.5" fill="currentColor">Vloertaal</text>
      <path d="M14 62c40-9 110-12 160-6 24 3 46 1 72-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** What a screen reader hears for the certificate (one picture): all it says, in its own order,
 *  with the key words or rules too (the picture hides its text). */
export function certAlt(data: CertData): string {
  const end = (t: string) => (/[.!?]$/.test(t) ? t : `${t}.`);
  const list = data.phrases.length ? `${certListLabel(data)}: ${data.phrases.map(end).join(' ')} ` : '';
  const kun = data.kun?.length ? `Wat kun je nu? ${data.kun.map(end).join(' ')} ` : '';
  return `Certificaat Vloertaal: ${data.titleNl}. ${data.name ? `Uitgereikt aan ${data.name}. ` : ''}${list}${kun}${certMeta(data).replace(/ · /g, ', ')}. Behaald op ${data.date}. ${CERT_NOTE}.`;
}

/** The certificate: A4 landscape, paper on a kraft border. Sizes follow its width (cqw). */
export function CertificateSheet({ data, className }: { data: CertData; className?: string }) {
  const helpRtl = data.helpDir === 'rtl';
  return (
    <div className={`cert-frame ${className ?? ''}`} lang="nl" role="img" aria-label={certAlt(data)}>
      <div className="cert" aria-hidden>
        <div className="cert-head">
          <span className="cert-logo"><LogoMark size={120} /></span>
          <span className="cert-brand">
            <span className="cert-kicker">Certificaat · Vloertaal</span>
            <span className="cert-sub">{certSub(data)}</span>
          </span>
          <span className="cert-unit">Onderwerp {data.unitNo}</span>
        </div>
        <div className="cert-body">
          {data.name && (
            <p className="cert-to">
              <span className="cert-label">Uitgereikt aan</span>
              <span className="cert-name" dir="auto">{data.name}</span>
            </p>
          )}
          <h2 className="cert-title"><span>{data.titleNl}</span></h2>
          {/* The English title · the help language's (none in the work-rules track: the title is Dutch). */}
          {!data.rules && (
            <p className="cert-titles">
              <span lang="en" className={data.titleHelp ? 'en-support' : undefined}>{data.titleEn}</span>
              {data.titleHelp && (
                <>
                  <span className="cert-dot en-support">·</span>
                  <span lang={data.helpCode} dir={helpRtl ? 'rtl' : undefined}>{data.titleHelp}</span>
                </>
              )}
            </p>
          )}
          <div className={`cert-words ${data.rules ? 'cert-words-rules' : ''}`}>
            <span className="cert-label">{certListLabel(data)}</span>
            <ul>{data.phrases.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          {/* "Wat kun je nu?": only when it fits (data.kun, src/lib/certCanvas.ts certKunFits), as in the picture. */}
          {data.kun?.length ? (
            <div className="cert-kun">
              <span className="cert-label">Wat kun je nu?</span>
              <ul>{data.kun.map((k) => <li key={k}>{k}</li>)}</ul>
            </div>
          ) : null}
          <p className="cert-meta">{certMeta(data)}</p>
        </div>
        <div className="cert-foot">
          <p className="cert-date">
            <span className="cert-label">Behaald op</span>
            <span className="cert-date-v"><bdi dir="ltr">{data.date}</bdi></span>
          </p>
          <div className="cert-sign">
            <Signature />
            <span className="cert-rule" />
          </div>
          <Seal unitNo={data.unitNo} ring={sealRing(data)} />
        </div>
        <p className="cert-note">{CERT_NOTE}</p>
      </div>
    </div>
  );
}

/* ---- Printer and share glyphs ---- */

function ShareGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden focusable="false">
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M6.5 16.5l4-4.5 3 3 2-2 2 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="15.5" cy="8.5" r="1.7" fill="currentColor" />
    </svg>
  );
}

/**
 * "Je naam op het certificaat?": a page of its own, asked the first time and after "Change name".
 * Three things: the field, [Done] and [Without name]. Kept on this device only.
 */
function NamePage({ name, lang, onDone, ask = { nl: 'Je naam op het certificaat?', key: 'certNameAsk' } }: {
  name: string;
  lang?: HelpLanguage;
  onDone: (name: string) => void;
  /** The question (the coach card asks for "Je naam op de kaart?"; the name is the same one). */
  ask?: { nl: string; key: UiKey };
}) {
  const id = useId();
  const [value, setValue] = useState(name);
  const rtl = lang?.dir === 'rtl';
  // Comes in the place of the button tapped ("Change name", or the certificate row): the focus goes
  // to the question (not to the field, so no phone keyboard pops up by itself), then Tab to the field.
  const page = useRef<HTMLDivElement>(null);
  useFocusWhenLost(page, 'name', '.cert-name-head');
  return (
    <div className="screen cert-name-page" ref={page}>
      <form className="cert-name-form" onSubmit={(e) => { e.preventDefault(); if (value.trim()) onDone(value); }}>
        <span className="cert-name-icon" aria-hidden><CertIcon size={40} /></span>
        <label className="keep-head cert-name-head" htmlFor={id} dir={rtl ? 'rtl' : undefined}>
          <NlPair nlFirst nl={ask.nl} nlClass="keep-nl" dir="ltr" className="keep-gloss" text={ui(ask.key, lang)} />
        </label>
        <input
          id={id}
          className="cert-name-input"
          type="text"
          value={value}
          maxLength={60}
          autoComplete="name"
          autoCapitalize="words"
          enterKeyHint="done"
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="keep-hint"><Bi text={ui('certNameHint', lang)} /></p>
        <button type="submit" className="btn btn-primary keep-btn cert-name-done" disabled={!value.trim()}>
          <NlPair nlFirst nl="Klaar" className="keep-btn-gloss" text={ui('certNameDone', lang)} />
        </button>
        <button type="button" className="keep-link cert-no-name" onClick={() => onDone('')}>
          <NlPair nlFirst nl="Zonder naam" className="keep-link-gloss" text={ui('certNoName', lang)} />
        </button>
      </form>
    </div>
  );
}

/**
 * The certificate of one unit: Back, one [Save / share] (the phone's share sheet, where it can
 * also be printed; the picture saved as a PNG where files cannot be shared) and
 * [Change name]. The name is asked first, on its own page.
 */
export function CertificateScreen({ unit, day, lang, onBack, sector, region, completed }: {
  unit: Unit;
  /** The lessons done: the certificate counts only those (certData). */
  completed?: Record<string, unknown>;
  /** The learner's sector and region: the unit's number as on their own path. */
  sector?: SectorChoice;
  region?: string;
  /** YYYY-MM-DD it was earned. */
  day: string;
  lang?: HelpLanguage;
  onBack: () => void;
}) {
  const [stored] = useState(loadCertName);
  const [name, setName] = useState(stored ?? '');
  /** The name page shows the first time (never asked), or after "Change name". */
  const [asking, setAsking] = useState(stored === null);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const base = certData(unit, day, name, lang, sector, region, completed);
  // "Wat kun je nu?": all on the screen, under the sheet; on the sheet (and the picture) too when
  // the lines fit, measured once the fonts are in (certKunFits).
  const zinnen = kunJeNu(unit.id);
  const [kunFit, setKunFit] = useState(false);
  const baseKey = JSON.stringify(base);
  useEffect(() => {
    let alive = true;
    const lines = zinnen.map((z) => z.nl);
    fontsReady().then(() => { if (alive) setKunFit(certKunFits(base, lines)); }, () => {});
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseKey]);
  const data: CertData = kunFit ? { ...base, kun: zinnen.map((z) => z.nl) } : base;
  const rtl = lang?.dir === 'rtl';

  // The tab title becomes the PDF's file name when it is saved from the print dialog.
  useEffect(() => {
    const before = document.title;
    document.title = `Vloertaal certificaat - ${unit.titleNl}`;
    return () => { document.title = before; };
  }, [unit.titleNl]);
  useEffect(() => { window.scrollTo(0, 0); }, [asking]);

  // The picture is drawn ahead (a moment after the sheet shows), so a tap shares it at once: a
  // phone refuses the share sheet when the tap was too long ago.
  const key = JSON.stringify(data);
  const png = useRef<{ key: string; blob: Promise<Blob> } | null>(null);
  useEffect(() => {
    if (asking) return;
    const t = window.setTimeout(() => {
      const blob = certificatePng(data);
      blob.catch(() => {});
      png.current = { key, blob };
    }, 300);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, asking]);

  const done = (n: string) => { saveCertName(n); setName(n.trim()); setAsking(false); };
  // Shared where the phone can share files, else (or when sharing fails) saved as a PNG, like the
  // pocket card. Only a picture that could not be drawn at all opens the print dialog.
  const share = async () => {
    if (busy) return;
    setBusy(true);
    setSaved(false);
    try {
      const how = await shareCertificate(data, `vloertaal-certificaat-${unit.id.slice(2)}.png`, png.current?.key === key ? png.current.blob : undefined);
      // Downloaded (no share sheet on this phone or computer): say so, as the pocket card does.
      if (how === 'saved') setSaved(true);
    } catch {
      window.print();
    } finally {
      setBusy(false);
    }
  };

  // Back from the name page (same screen, other page): the focus to the certificate's title.
  const view = useRef<HTMLDivElement>(null);
  useFocusWhenLost(view, asking, 'h1');
  if (asking) return <NamePage name={name} lang={lang} onDone={done} />;
  return (
    <div className="screen cert-screen" ref={view}>
      <div className="screen-head" dir={rtl ? 'rtl' : undefined}>
        <ChromeBack lang={lang} onBack={onBack} />
        <h1>
          <NlPair nlFirst nl="Certificaat" nlClass="cert-screen-nl" text={ui('certificate', lang)} />
        </h1>
      </div>
      <CertificateSheet data={data} />
      <p className="cert-practice">
        <NlPair nlFirst nl={CERT_NOTE} text={ui('certPractice', lang)} />
      </p>
      <div className="cert-actions cert-actions-one">
        <button type="button" className="btn btn-primary cert-btn cert-share" onClick={share} aria-disabled={busy || undefined} dir={rtl ? 'rtl' : undefined}>
          <ShareGlyph />
          <span className="cert-btn-text">
            <NlPair nlFirst nl="Bewaar of deel" className="cert-btn-gloss" text={ui('certSaveShare', lang)} />
          </span>
        </button>
      </div>
      {saved && (
        <p className="keep-ok cert-saved" role="status"><CheckIcon size={20} /><Bi text={ui('certSaved', lang)} /></p>
      )}
      <KunJeNuSection zinnen={zinnen} lang={lang} />
      <button type="button" className="keep-link cert-rename" onClick={() => setAsking(true)}>
        <NlPair nlFirst nl="Naam wijzigen" className="keep-link-gloss" text={ui('certChangeName', lang)} />
      </button>
    </div>
  );
}

/**
 * "Wat kun je nu?" under a certificate: the topic's can-do sentences (src/content/kunJeNu.ts), each
 * in Dutch with its meaning in the help language (the work-rules track: Dutch only) and, small,
 * the level and skill it fits ("past bij A2 · spreken"). Text only, nothing to tap.
 */
function KunJeNuSection({ zinnen, lang }: { zinnen: KunZin[]; lang?: HelpLanguage }) {
  const id = useId();
  if (!zinnen.length) return null;
  const rtl = lang?.dir === 'rtl';
  return (
    <section className="kun-card" dir={rtl ? 'rtl' : undefined} aria-labelledby={id}>
      <h2 id={id} className="kun-head">
        <NlPair nlFirst nl="Wat kun je nu?" nlClass="kun-head-nl" className="kun-head-help" text={ui('kunJeNu', lang)} />
      </h2>
      <ul className="kun-list">
        {zinnen.map((z) => (
          <li key={z.id} className="kun-row">
            <CheckIcon size={20} />
            <span className="kun-text">
              <NlPair nlFirst content nl={z.nl} nlClass="kun-nl" className="kun-help" text={gloss(z.id, z.en ?? z.nl, lang)} />
              <span className="kun-tag" lang="nl" dir="ltr">{pastBij(z)}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="kun-note">
        <NlPair nlFirst nl="Het niveau bij elke zin is een richtlijn, geen officieel niveau." nlClass="kun-note-nl" text={ui('kunNote', lang)} />
      </p>
    </section>
  );
}

/**
 * "Certificaat behaald": shown once, after the result of a unit's last lesson. The milestone
 * shell (Bram, one line, the footer button), with the certificate preview and Bekijk / Later.
 */
export function CertEarned({ unit, day, lang, onView, onLater, onPocket, sector, region, completed }: {
  unit: Unit;
  completed?: Record<string, unknown>;
  sector?: SectorChoice;
  region?: string;
  /** Opens the unit's pocket card, next to the certificate. */
  onPocket?: () => void;
  day: string;
  lang?: HelpLanguage;
  onView: () => void;
  onLater: () => void;
}) {
  const [name] = useState(() => loadCertName() ?? '');
  const data = certData(unit, day, name, lang, sector, region, completed);
  return (
    <div className="player milestone-screen cert-earned">
      <div className="player-body milestone">
        <div className="cert-earned-hero">
          <span className="cert-earned-bram" aria-hidden><Character who="bram" mood="cheer" size={150} /></span>
          <CertificateSheet data={data} className="cert-preview" />
        </div>
        <h1 className="streak-line cert-earned-line">
          <NlPair nlFirst nl="Certificaat behaald!" nlClass="cert-earned-nl" text={ui('certEarned', lang)} />
        </h1>
        <p className="cert-earned-unit">
          <span lang="nl">{unit.titleNl}</span>
          <Bi className="cert-earned-hint" text={ui('certEarnedHint', lang)} />
        </p>
        {onPocket && <PocketLink lang={lang} onOpen={onPocket} />}
      </div>
      <footer className="player-foot milestone-foot">
        <div className="foot-inner">
          <div className="foot-actions cert-earned-actions">
            <button type="button" className="btn btn-ghost cert-later" onClick={onLater}>
              <span lang="nl">Later</span>
              {/* "Later" is the same word in English: only the help language is added. */}
              {lang && !dutchUi(lang) && <Bi className="cert-btn-gloss" text={ui('certLater', lang)} />}
            </button>
            <button type="button" className="btn btn-go btn-primary cert-view" onClick={onView} dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
              <span className="cert-btn-text">
                <NlPair nlFirst nl="Bekijk" className="cert-btn-gloss" text={ui('certView', lang)} />
              </span>
              <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** "Spiekkaartje": the unit's pocket card, offered next to its certificate. */
function PocketLink({ lang, onOpen }: { lang?: HelpLanguage; onOpen: () => void }) {
  return (
    <button type="button" className="unit-tool pocket-open cert-pocket" onClick={onOpen} dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <PocketIcon />
      <span className="unit-tool-text"><Bi className="unit-tool-label" text={ui('pocketCard', lang)} /></span>
      <ChevronIcon size={18} />
    </button>
  );
}

/**
 * "Mijn certificaten" in Settings: one row per finished unit, with the date, grouped by theme
 * (src/content/themes.ts) under a plain header row (not a button). In Settings (the
 * learner's own page, next to their progress backup) rather than in Hulp, which is kept for
 * help on the job: emergency phrases and workplace tips, quick to scan.
 */
export function CertificatesCard({ progress, lang, onOpen }: {
  progress: Progress;
  lang?: HelpLanguage;
  onOpen: (unitId: string) => void;
}) {
  const earned = earnedCertificates(progress);
  const dayOf = new Map(earned.map((e) => [e.unit.id, e.day]));
  return (
    <section className="keep-card cert-list-card" aria-label={said(ui('myCertificates', lang))}>
      <span className="cert-list-icon" aria-hidden><CertIcon size={30} /></span>
      <div className="keep-head">
        <NlPair nlFirst nl="Mijn certificaten" nlClass="keep-nl" className="keep-gloss" text={ui('myCertificates', lang)} />
      </div>
      {earned.length ? (
        <ul className="cert-list cert-list-themes">
          {groupByTheme(earned.map((e) => e.unit)).map((group) => (
            <Fragment key={group.key}>
              <ThemeHeadRow group={group} lang={lang} />
              {group.units.map((unit) => ({ unit, day: dayOf.get(unit.id) ?? '' })).map(({ unit, day }) => (
            <li key={unit.id}>
              <button type="button" className="cert-row" onClick={() => onOpen(unit.id)}>
                <span className="cert-row-text">
                  <span className="cert-row-nl" lang="nl">{unit.titleNl}</span>
                  {lang?.gloss[unit.id] && <span className="cert-row-help" lang={langTag(lang.code)} dir={lang.dir}>{lang.gloss[unit.id]}</span>}
                  <span className="cert-row-date" lang="nl"><bdi dir="ltr">{certDate(day)}</bdi></span>
                </span>
                <ChevronIcon size={22} />
              </button>
            </li>
              ))}
            </Fragment>
          ))}
        </ul>
      ) : (
        <p className="keep-hint"><Bi text={ui('certsEmpty', lang)} /></p>
      )}
    </section>
  );
}

/* ---- "Laat zien hoe het gaat": the coach card ---- */

/** What each line of the coach card means, in the help language (the card itself is Dutch). */
const KAART_LEGEND: { nl: string; key: UiKey; toets?: boolean; kun?: boolean }[] = [
  { nl: 'Onderwerpen af', key: 'coachTopics' },
  { nl: 'Wat kun je nu?', key: 'coachCanDo', kun: true },
  { nl: 'Dagen geoefend', key: 'coachDays' },
  { nl: 'Laatste les', key: 'coachLast' },
  { nl: 'Toets “Wat ken je al?”', key: 'toetsTitle', toets: true },
];

/**
 * "Laat zien hoe het gaat" (Settings › Taal en ik): the coach card ("begeleiderskaart",
 * src/lib/kaart.ts), a picture this phone makes from its own progress, for the learner to show a
 * coach, teacher or employer. Nothing is sent: the learner shows it, or saves or shares the
 * picture themselves. On screen: the picture (large, with all it says as its text alternative),
 * [Bewaar of deel], what each line means in the help language, and [Naam wijzigen] (the same
 * name as on the certificates, asked first when it never was). Two things to tap, and Back.
 */
export function CoachCardScreen({ progress, lang, onBack, today: fixedToday }: {
  progress: Progress;
  lang?: HelpLanguage;
  onBack: () => void;
  /** Today (the screenshot harness fixes it). */
  today?: Date;
}) {
  const [stored] = useState(loadCertName);
  const [name, setName] = useState(stored ?? '');
  const [asking, setAsking] = useState(stored === null);
  const [today] = useState(() => fixedToday ?? new Date());
  const data = useMemo(() => kaartData(progress, name, today), [progress, name, today]);
  const key = JSON.stringify(data);
  const [png, setPng] = useState<{ key: string; blob: Blob; url: string } | null>(null);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const rtl = lang?.dir === 'rtl';

  // The picture is drawn when the screen opens: it is what the screen shows, and a tap on
  // [Bewaar of deel] then shares it at once (a phone refuses the share sheet when the tap was long ago).
  useEffect(() => {
    if (asking) return;
    let alive = true;
    let url: string | null = null;
    setFailed(false);
    kaartPng(data).then((blob) => {
      if (!alive) return;
      url = typeof URL.createObjectURL === 'function' ? URL.createObjectURL(blob) : null;
      if (url) setPng({ key, blob, url });
      else setFailed(true);
    }, () => { if (alive) setFailed(true); });
    return () => {
      alive = false;
      if (url) URL.revokeObjectURL(url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, asking]);
  useEffect(() => { window.scrollTo(0, 0); }, [asking]);

  const done = (n: string) => { saveCertName(n); setName(n.trim()); setAsking(false); };
  const shown = png?.key === key ? png : null;
  const share = async () => {
    if (busy || !shown) return;
    setBusy(true);
    setSaved(false);
    try {
      if ((await shareKaart(shown.blob)) === 'saved') setSaved(true);
    } catch {
      // Nothing more to do: the card stays on screen, to show.
    } finally {
      setBusy(false);
    }
  };

  const view = useRef<HTMLDivElement>(null);
  useFocusWhenLost(view, asking, 'h1');
  if (asking) return <NamePage name={name} lang={lang} onDone={done} ask={{ nl: 'Je naam op de kaart?', key: 'coachNameAsk' }} />;
  const intro = ui('coachCardIntro', lang);
  const alt = kaartAlt(data);
  return (
    <div className="screen cert-screen kaart-screen" ref={view}>
      <div className="screen-head" dir={rtl ? 'rtl' : undefined}>
        <ChromeBack lang={lang} onBack={onBack} />
        <h1>
          <NlPair nlFirst nl="Laat zien hoe het gaat" nlClass="cert-screen-nl" text={ui('coachCard', lang)} />
        </h1>
      </div>
      <p className="kaart-intro" dir={rtl ? 'rtl' : undefined}>
        <NlPair nlFirst nl="Deze kaart laat zien hoe het gaat. Laat hem zien aan je docent, coach of baas. Jij kiest." nlClass="kaart-intro-nl" text={intro} />
        <HelpSay text={intro.help} lang={lang} />
      </p>
      <figure className="kaart-figure">
        {shown ? (
          <img className="kaart-img" src={shown.url} alt={alt} lang="nl" width={1200} />
        ) : failed ? (
          // No picture on this phone (an old browser): the same lines as text.
          <p className="kaart-text" lang="nl" dir="ltr">{alt}</p>
        ) : (
          <div className="kaart-wait" role="img" aria-label={alt} lang="nl" />
        )}
      </figure>
      <div className="cert-actions cert-actions-one">
        <button type="button" className="btn btn-primary cert-btn cert-share kaart-share" onClick={share} aria-disabled={busy || !shown || undefined} dir={rtl ? 'rtl' : undefined}>
          <ShareGlyph />
          <span className="cert-btn-text">
            <NlPair nlFirst nl="Bewaar of deel" className="cert-btn-gloss" text={ui('certSaveShare', lang)} />
          </span>
        </button>
      </div>
      {saved && (
        <p className="keep-ok cert-saved" role="status"><CheckIcon size={20} /><Bi text={ui('certSaved', lang)} /></p>
      )}
      <section className="kaart-legend" dir={rtl ? 'rtl' : undefined} aria-label={said(ui('coachCardWhat', lang))}>
        <p className="kaart-legend-head"><NlPair nlFirst nl="Op de kaart, in het Nederlands:" nlClass="kaart-legend-nl" text={ui('coachCardWhat', lang)} /></p>
        <ul className="kaart-legend-rows">
          {KAART_LEGEND.filter((r) => (!r.toets || data.toets) && (!r.kun || data.kunZinnen > 0)).map((r) => (
            <li key={r.key}>
              {/* The work-rules track: the screen is Dutch, so the line's own explanation only. */}
              {!dutchUi(lang) && <span className="kaart-legend-label" lang="nl" dir="ltr">{r.nl}</span>}
              <Bi className="kaart-legend-help" text={ui(r.key, lang)} />
            </li>
          ))}
        </ul>
        <p className="kaart-keep">
          <NlPair nlFirst nl={KAART_NOTE} nlClass="kaart-keep-nl" text={ui('coachCardKeep', lang)} />
        </p>
      </section>
      <button type="button" className="keep-link cert-rename" onClick={() => setAsking(true)}>
        <NlPair nlFirst nl="Naam wijzigen" className="keep-link-gloss" text={ui('certChangeName', lang)} />
      </button>
    </div>
  );
}
