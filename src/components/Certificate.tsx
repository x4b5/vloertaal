import { useEffect, useId, useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import type { Unit } from '../content/types';
import { CERT_NOTE, SEAL_RING, certData, certDate, certMeta, earnedCertificates, loadCertName, saveCertName, unitIndex, type CertData } from '../lib/certificate';
import { shareCertificate } from '../lib/certCanvas';
import type { Progress } from '../lib/progress';
import { Bi } from './Bi';
import { Character } from './Characters';
import { BackIcon, CheckIcon, ChevronIcon } from './Icons';
import { LogoMark } from './Logo';

/**
 * A certificate per finished unit ("Oefencertificaat"):
 * - CertificateSheet: the A4 landscape certificate itself (the same layout on screen, in print
 *   and, drawn again on a canvas, as the shared picture: see src/lib/certCanvas.ts);
 * - CertificateScreen: the sheet with the name (asked once), Print / PDF and Share as picture;
 * - CertEarned: the one-time "Certificaat behaald" moment after a unit's last lesson;
 * - CertBadge: the calm chip on a finished unit's sign on the path;
 * - CertificatesCard: "Mijn certificaten" in Settings.
 * The certificate is a Dutch document; around it, the app explains in the help language.
 */

/** A small certificate: a sheet with a rosette. */
export function CertIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg className={`icon ${className ?? ''}`} viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
      <path d="M4 4.5h16v11H13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M4 4.5v11h3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M7.5 8h9M13 11.5h3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9.5" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 17.6 7.2 21.5l2.3-1.2 2.3 1.2-.8-3.9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

/** The round "BEHAALD" stamp, pressed slightly crooked. */
function Seal({ unitNo }: { unitNo: string }) {
  const ring = `seal-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <svg className="cert-seal" viewBox="0 0 120 120" aria-hidden focusable="false">
      <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <path id={ring} d="M60 60m-47 0a47 47 0 1 1 94 0a47 47 0 1 1-94 0" fill="none" />
      <text fontFamily="'Lexend Variable', Lexend, sans-serif" fontWeight={800} fontSize="7.4" letterSpacing="0.9" fill="currentColor">
        <textPath href={`#${ring}`} startOffset="0" textLength={2 * Math.PI * 47 - 2} lengthAdjust="spacing">{SEAL_RING}</textPath>
      </text>
      <path d="M48 38.5l7.5 7.5 15-15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="60" y="70" textAnchor="middle" fontFamily="'Big Shoulders Stencil Display', sans-serif" fontWeight={800} fontSize="21" letterSpacing="0.6" fill="currentColor">BEHAALD</text>
      <text x="60" y="86" textAnchor="middle" fontFamily="'Lexend Variable', Lexend, sans-serif" fontWeight={700} fontSize="8.5" letterSpacing="1.5" fill="currentColor">UNIT {unitNo}</text>
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

/** The certificate: A4 landscape, paper on a kraft border. Sizes follow its width (cqw). */
export function CertificateSheet({ data, className }: { data: CertData; className?: string }) {
  const helpRtl = data.helpDir === 'rtl';
  return (
    <div className={`cert-frame ${className ?? ''}`} lang="nl" role="img" aria-label={`Certificaat Vloertaal: ${data.titleNl}. ${data.name ? `${data.name}. ` : ''}Behaald op ${data.date}. ${CERT_NOTE}.`}>
      <div className="cert" aria-hidden>
        <div className="cert-head">
          <span className="cert-logo"><LogoMark size={120} /></span>
          <span className="cert-brand">
            <span className="cert-kicker">Certificaat · Vloertaal</span>
            <span className="cert-sub">Nederlands voor het werk</span>
          </span>
          <span className="cert-unit">Unit {data.unitNo}</span>
        </div>
        <div className="cert-body">
          {data.name && (
            <p className="cert-to">
              <span className="cert-label">Uitgereikt aan</span>
              <span className="cert-name">{data.name}</span>
            </p>
          )}
          <h2 className="cert-title"><span>{data.titleNl}</span></h2>
          <p className="cert-titles">
            <span lang="en">{data.titleEn}</span>
            {data.titleHelp && (
              <>
                <span className="cert-dot">·</span>
                <span lang={data.helpCode} dir={helpRtl ? 'rtl' : undefined}>{data.titleHelp}</span>
              </>
            )}
          </p>
          <div className="cert-words">
            <span className="cert-label">Kernwoorden</span>
            <ul>{data.phrases.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          <p className="cert-meta">{certMeta(data)}</p>
        </div>
        <div className="cert-foot">
          <p className="cert-date">
            <span className="cert-label">Behaald op</span>
            <span className="cert-date-v">{data.date}</span>
          </p>
          <div className="cert-sign">
            <Signature />
            <span className="cert-rule" />
          </div>
          <Seal unitNo={data.unitNo} />
        </div>
        <p className="cert-note">{CERT_NOTE}</p>
      </div>
    </div>
  );
}

/* ---- Printer and share glyphs ---- */

function PrintGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden focusable="false">
      <path d="M7 9V3.5h10V9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="3" y="9" width="18" height="8.5" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M7 14.5h10v6H7z" fill="currentColor" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

function ShareGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden focusable="false">
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M6.5 16.5l4-4.5 3 3 2-2 2 3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="15.5" cy="8.5" r="1.7" fill="currentColor" />
    </svg>
  );
}

/** "Je naam op het certificaat?": asked the first time; kept on this device only. */
function NameCard({ name, lang, onName, onDone }: {
  name: string;
  lang?: HelpLanguage;
  onName: (name: string) => void;
  onDone: (name: string) => void;
}) {
  const id = useId();
  return (
    <form
      className="keep-card cert-name-card"
      onSubmit={(e) => { e.preventDefault(); onDone(name); }}
    >
      <label className="keep-head" htmlFor={id}>
        <span className="keep-nl" lang="nl">Je naam op het certificaat?</span>
        <Bi className="keep-gloss" text={ui('certNameAsk', lang)} />
      </label>
      <input
        id={id}
        className="cert-name-input"
        type="text"
        value={name}
        maxLength={60}
        autoComplete="name"
        autoCapitalize="words"
        enterKeyHint="done"
        onChange={(e) => onName(e.target.value)}
      />
      <p className="keep-hint"><Bi text={ui('certNameHint', lang)} /></p>
      <div className="keep-row">
        <button type="submit" className="btn btn-dark keep-btn" disabled={!name.trim()}>
          <span lang="nl">Zet erop</span>
          <Bi className="keep-btn-gloss" text={ui('certNameSave', lang)} />
        </button>
        <button type="button" className="btn btn-ghost keep-btn" onClick={() => { onName(''); onDone(''); }}>
          <span lang="nl">Zonder naam</span>
          <Bi className="keep-btn-gloss" text={ui('certNoName', lang)} />
        </button>
      </div>
    </form>
  );
}

/** The certificate of one unit, with the name, Print / PDF and Share as picture. */
export function CertificateScreen({ unit, day, lang, onBack }: {
  unit: Unit;
  /** YYYY-MM-DD it was earned. */
  day: string;
  lang?: HelpLanguage;
  onBack: () => void;
}) {
  const [stored] = useState(loadCertName);
  const [name, setName] = useState(stored ?? '');
  /** The name field shows the first time (never asked), or after "Naam wijzigen". */
  const [asking, setAsking] = useState(stored === null);
  const [note, setNote] = useState<'saved' | null>(null);
  const [busy, setBusy] = useState(false);
  const data = certData(unit, day, name, lang);

  // The tab title becomes the PDF's file name when it is saved from the print dialog.
  useEffect(() => {
    const before = document.title;
    document.title = `Vloertaal certificaat - ${unit.titleNl}`;
    return () => { document.title = before; };
  }, [unit.titleNl]);

  const done = (n: string) => { saveCertName(n); setName(n.trim()); setAsking(false); };
  const share = async () => {
    setBusy(true);
    try {
      const how = await shareCertificate(data, `vloertaal-certificaat-${unit.id.slice(2)}.png`);
      setNote(how === 'saved' ? 'saved' : null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="screen cert-screen">
      <div className="screen-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>
        <h1>
          <span className="cert-screen-nl" lang="nl">Certificaat</span>
          <Bi text={ui('certificate', lang)} />
        </h1>
      </div>
      {asking && <NameCard name={name} lang={lang} onName={setName} onDone={done} />}
      <CertificateSheet data={data} />
      <p className="cert-practice">
        <span lang="nl">{CERT_NOTE}</span>
        <Bi text={ui('certPractice', lang)} />
      </p>
      <div className="cert-actions">
        <button type="button" className="btn btn-dark cert-btn" onClick={() => window.print()}>
          <PrintGlyph />
          <span className="cert-btn-text">
            <span lang="nl">Print of bewaar als pdf</span>
            <Bi className="cert-btn-gloss" text={ui('certPrint', lang)} />
          </span>
        </button>
        <button type="button" className="btn btn-primary cert-btn" onClick={share} disabled={busy}>
          <ShareGlyph />
          <span className="cert-btn-text">
            <span lang="nl">Deel als plaatje</span>
            <Bi className="cert-btn-gloss" text={ui('certShare', lang)} />
          </span>
        </button>
      </div>
      {note === 'saved' && (
        <p className="keep-ok cert-saved" role="status"><CheckIcon size={20} /><Bi text={ui('certSaved', lang)} /></p>
      )}
      {!asking && (
        <button type="button" className="keep-link cert-rename" onClick={() => setAsking(true)}>
          <span lang="nl">Naam wijzigen</span>
          <Bi className="keep-link-gloss" text={ui('certChangeName', lang)} />
        </button>
      )}
    </div>
  );
}

/**
 * "Certificaat behaald": shown once, after the result of a unit's last lesson. The milestone
 * shell (Bram, one line, the footer button), with the certificate preview and Bekijk / Later.
 */
export function CertEarned({ unit, day, lang, onView, onLater }: {
  unit: Unit;
  day: string;
  lang?: HelpLanguage;
  onView: () => void;
  onLater: () => void;
}) {
  const [name] = useState(() => loadCertName() ?? '');
  const data = certData(unit, day, name, lang);
  return (
    <div className="player milestone-screen cert-earned">
      <main className="player-body milestone">
        <div className="cert-earned-hero">
          <span className="cert-earned-bram" aria-hidden><Character who="bram" mood="cheer" size={150} /></span>
          <CertificateSheet data={data} className="cert-preview" />
        </div>
        <h1 className="streak-line cert-earned-line">
          <span className="cert-earned-nl" lang="nl">Certificaat behaald!</span>
          <Bi text={ui('certEarned', lang)} />
        </h1>
        <p className="cert-earned-unit">
          <span lang="nl">{unit.titleNl}</span>
          <Bi className="cert-earned-hint" text={ui('certEarnedHint', lang)} />
        </p>
      </main>
      <footer className="player-foot milestone-foot">
        <div className="foot-inner">
          <div className="foot-actions cert-earned-actions">
            <button type="button" className="btn btn-ghost cert-later" onClick={onLater}>
              <span lang="nl">Later</span>
              {/* "Later" is the same word in English: only the help language is added. */}
              {lang && <Bi className="cert-btn-gloss" text={ui('certLater', lang)} />}
            </button>
            <button type="button" className="btn btn-go btn-primary cert-view" onClick={onView}>
              <span className="cert-btn-text">
                <span lang="nl">Bekijk</span>
                <Bi className="cert-btn-gloss" text={ui('certView', lang)} />
              </span>
              <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** On a finished unit's sign: a calm chip that opens its certificate. */
export function CertBadge({ lang, onOpen }: { lang?: HelpLanguage; onOpen: () => void }) {
  const help = ui('certificate', lang);
  return (
    <button
      type="button"
      className="cert-badge"
      onClick={(e) => { e.stopPropagation(); onOpen(); }}
      aria-label={`Certificaat · ${help.en}${help.help ? ` (${help.help})` : ''}`}
    >
      <CertIcon size={18} />
      <span lang="nl">Certificaat</span>
      <ChevronIcon size={16} />
    </button>
  );
}

/**
 * "Mijn certificaten" in Settings: one row per finished unit, with the date. In Settings (the
 * learner's own page, next to their progress backup) rather than in Hulp, which is kept for
 * help on the job: emergency phrases and workplace tips, quick to scan.
 */
export function CertificatesCard({ progress, lang, onOpen }: {
  progress: Progress;
  lang?: HelpLanguage;
  onOpen: (unitId: string) => void;
}) {
  const earned = earnedCertificates(progress);
  return (
    <section className="keep-card cert-list-card" aria-label={ui('myCertificates').en}>
      <span className="cert-list-icon" aria-hidden><CertIcon size={30} /></span>
      <div className="keep-head">
        <span className="keep-nl" lang="nl">Mijn certificaten</span>
        <Bi className="keep-gloss" text={ui('myCertificates', lang)} />
      </div>
      {earned.length ? (
        <ul className="cert-list">
          {earned.map(({ unit, day }) => (
            <li key={unit.id}>
              <button type="button" className="cert-row" onClick={() => onOpen(unit.id)}>
                <span className="cert-row-no" aria-hidden>{String(unitIndex(unit) + 1).padStart(2, '0')}</span>
                <span className="cert-row-text">
                  <span className="cert-row-nl" lang="nl">{unit.titleNl}</span>
                  {lang?.gloss[unit.id] && <span className="cert-row-help" lang={lang.code} dir={lang.dir}>{lang.gloss[unit.id]}</span>}
                  <span className="cert-row-date" lang="nl">{certDate(day)}</span>
                </span>
                <ChevronIcon size={22} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="keep-hint"><Bi text={ui('certsEmpty', lang)} /></p>
      )}
    </section>
  );
}
