import type { Bilingual } from '../i18n';

/** English text with the help-language version underneath (right-to-left aware). */
export function Bi({ text, className }: { text: Bilingual; className?: string }) {
  return (
    <span className={`bi ${className ?? ''}`}>
      <span className="bi-en">{text.en}</span>
      {text.help && text.lang && (
        <span className="bi-help" lang={text.lang.code} dir={text.lang.dir}>
          {text.help}
        </span>
      )}
    </span>
  );
}
