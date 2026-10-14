import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { TEXT_SIZES, type TextSize } from '../lib/textSize';
import { Bi } from './Bi';

const KEYS = { normal: 'textNormal', large: 'textLarge', xl: 'textXl' } as const;

/** Settings: "Text size" as three A's, each bigger than the one before. */
export function TextSizePicker({ current = 'normal', lang, onPick }: { current?: TextSize; lang?: HelpLanguage; onPick: (size: TextSize) => void }) {
  return (
    <>
      <h2 className="settings-sector-title">
        <span lang="nl">Tekstgrootte</span>
        <Bi text={ui('textSize', lang)} />
      </h2>
      <div className="segmented text-size-picker" role="radiogroup" aria-label={ui('textSize').en}>
        {TEXT_SIZES.map((size) => {
          const t = ui(KEYS[size], lang);
          return (
            <button
              key={size}
              type="button"
              role="radio"
              aria-checked={current === size}
              aria-label={`${t.help ? `${t.help} · ` : ''}${t.en}`}
              className={current === size ? 'picked' : ''}
              onClick={() => onPick(size)}
            >
              <span className={`text-size-a text-size-${size}`} aria-hidden>A</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
