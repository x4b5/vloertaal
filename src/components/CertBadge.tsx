import { ui, said } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { ChevronIcon } from './Icons';

/*
 * The certificate's small parts that the path shows (src/components/Route.tsx): in the app's main
 * file, while the certificate itself (src/components/Certificate.tsx) loads when it is opened.
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

/** On a finished unit's sign: a calm chip that opens its certificate. */
export function CertBadge({ lang, onOpen }: { lang?: HelpLanguage; onOpen: () => void }) {
  const help = ui('certificate', lang);
  return (
    <button
      type="button"
      className="cert-badge"
      onClick={(e) => { e.stopPropagation(); onOpen(); }}
      aria-label={`Certificaat · ${said(help)}`}
    >
      <CertIcon size={18} />
      <span lang="nl">Certificaat</span>
      <ChevronIcon size={16} />
    </button>
  );
}
