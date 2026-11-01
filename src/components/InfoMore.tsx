import type { ReactNode } from 'react';
import { InfoIcon } from './Icons';
import { Bi } from './Bi';
import type { Bilingual } from '../i18n';

/**
 * A side matter behind an ⓘ ("Vloertaal rustiger", fase 2; docs/rustiger.md): an explanation,
 * the legal line under tips, the rest of About. Closed it is one quiet line with a label that
 * says what is behind it ("Over deze tips", "Meer uitleg"), never just "Meer"; a tap opens it in
 * place. Native <details>: works with a keyboard and a screen reader, and without script.
 * Never for the task itself, the meaning of a word or feedback: those stay in view.
 */
export function InfoMore({ label, children, className }: { label: Bilingual; children: ReactNode; className?: string }) {
  return (
    <details className={`info-more ${className ?? ''}`}>
      <summary className="info-more-summary">
        <InfoIcon size={18} />
        <Bi text={label} />
      </summary>
      <div className="info-more-body">{children}</div>
    </details>
  );
}
