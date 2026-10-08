import { NOT_SURE, sectors, type SectorChoice, type SectorId } from '../content/sectors';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { CareIcon, CheckIcon, ConveyorIcon, CupIcon, ForkliftIcon, HelmetIcon, QuestionIcon, SprayIcon } from './Icons';
import { LogoMark, Wordmark } from './Logo';

const ICONS: Record<SectorId | 'none', typeof ForkliftIcon> = {
  logistics: ForkliftIcon,
  construction: HelmetIcon,
  production: ConveyorIcon,
  care: CareIcon,
  hospitality: CupIcon,
  cleaning: SprayIcon,
  none: QuestionIcon,
};

export function SectorIcon({ id, size = 24 }: { id: SectorChoice; size?: number }) {
  const Icon = ICONS[id];
  return <Icon size={size} />;
}

/**
 * The sector cards: icon, the Dutch name, and under it the help language (big) with the English
 * (small). Same look as the language cards; "Weet ik nog niet" spans the full width at the end.
 */
export function SectorPicker({ current, lang, onPick, compact = false }: {
  /** undefined = nothing chosen yet (first run). */
  current?: SectorChoice;
  lang?: HelpLanguage;
  onPick: (s: SectorChoice) => void;
  /** Smaller cards (Settings). */
  compact?: boolean;
}) {
  const options = [...sectors.map((s) => ({ id: s.id as SectorChoice, nl: s.nl, key: s.key })), { id: 'none' as const, ...NOT_SURE }];
  return (
    <div className={`lang-grid sector-grid ${compact ? 'lang-grid-compact' : ''}`} role="radiogroup" aria-label={ui('chooseSector').en}>
      {options.map((o) => {
        const picked = current === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={picked}
            className={`lang-btn sector-btn ${o.id === 'none' ? 'sector-none' : ''} ${picked ? 'picked' : ''}`}
            onClick={() => onPick(o.id)}
          >
            <span className="sector-icon" aria-hidden><SectorIcon id={o.id} size={compact ? 26 : 30} /></span>
            <span className="lang-names">
              <span className="lang-native" lang="nl">{o.nl}</span>
              <Bi className="sector-names" text={ui(o.key, lang)} />
            </span>
            {picked && <CheckIcon size={20} className="lang-check" />}
          </button>
        );
      })}
    </div>
  );
}

/** First run, right after the password: where do you work? */
export function SectorScreen({ lang, onDone }: { lang?: HelpLanguage; onDone: (s: SectorChoice) => void }) {
  return (
    <div className="screen onboarding sector-screen">
      <div className="hero">
        <h1 className="hero-logo sector-logo"><LogoMark size={40} /><Wordmark /></h1>
      </div>
      <h2 className="onboarding-title sector-title">
        <span className="sector-title-nl" lang="nl">Waar werk je?</span>
        <Bi text={ui('chooseSector', lang)} />
      </h2>
      <p className="sector-hint"><Bi text={ui('sectorHint', lang)} /></p>
      <SectorPicker lang={lang} onPick={onDone} />
    </div>
  );
}
