import { describe, expect, it } from 'vitest';
import { cultureTips } from '../src/content/culture';
import { gloss, helpLanguages } from '../src/i18n/all';
import { TIP_SENTENCES, sentences, shortTip } from '../src/components/Exercises';

describe('a culture tip in a lesson is short', () => {
  it('shows at most 3 sentences, in English and in every help language', () => {
    let longest = 0;
    for (const tip of cultureTips) {
      for (const lang of [undefined, ...helpLanguages]) {
        const text = shortTip(gloss(`${tip.id}.b`, tip.body, lang));
        for (const t of [text.en, text.help].filter((x): x is string => Boolean(x))) {
          const n = sentences(t).filter((x) => x !== '…').length;
          expect(n, `${tip.id} ${lang?.code ?? 'en'}`).toBeLessThanOrEqual(TIP_SENTENCES);
        }
        longest = Math.max(longest, text.en.split(/\s+/).length);
      }
    }
    // The 146-word tips are now well under half that in a lesson.
    expect(longest).toBeLessThanOrEqual(70);
  });

  it('keeps a short tip whole, and marks a cut one with "…"', () => {
    expect(shortTip({ en: 'One. Two.' }).en).toBe('One. Two.');
    expect(shortTip({ en: 'One. Two. Three. Four.' }).en).toBe('One. Two. Three. …');
    expect(shortTip({ en: 'A. B. C. D.', help: 'ሓደ። ክልተ። ሰለስተ። ኣርባዕተ።' }).help).toBe('ሓደ። ክልተ። ሰለስተ። …');
  });
});
