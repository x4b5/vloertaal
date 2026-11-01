import { describe, expect, it } from 'vitest';
import { cultureTips } from '../src/content/culture';
import { ADVICE_LINE } from '../src/content/adviceLine';
import { getHelpLanguage } from '../src/i18n/all';
import { languageMeta } from '../src/i18n/meta';
import { splitClosing, tipBody } from '../src/lib/tipText';

// "Werk zichtbaar maken": a tip in a lesson shows its first sentences; its closing line (who can
// help) goes in the ⓘ, so it is never cut off.
describe('splitClosing', () => {
  const withClosing = cultureTips.filter((t) => t.body.endsWith(ADVICE_LINE));

  it('takes the closing line off in English', () => {
    expect(withClosing.length).toBeGreaterThan(5);
    for (const t of withClosing) {
      const { body, closing } = splitClosing(tipBody(t));
      expect(closing?.en, t.id).toBe(ADVICE_LINE);
      expect(body.en.endsWith(ADVICE_LINE), t.id).toBe(false);
      expect(`${body.en} ${closing?.en}`, t.id).toBe(t.body);
    }
  });

  it('finds the same line in every help language', () => {
    for (const l of languageMeta) {
      const lang = getHelpLanguage(l.code)!;
      for (const t of withClosing) {
        const text = tipBody(t, lang);
        const { body, closing } = splitClosing(text, lang);
        expect(closing?.help, `${l.code} ${t.id}`).toBeTruthy();
        expect(`${body.help} ${closing?.help}`, `${l.code} ${t.id}`).toBe(text.help);
      }
    }
  });

  it('leaves a tip without a closing line whole', () => {
    const t = cultureTips.find((x) => !x.body.endsWith(ADVICE_LINE) && !x.body.includes('General information'))!;
    const { body, closing } = splitClosing(tipBody(t));
    expect(closing).toBeUndefined();
    expect(body.en).toBe(t.body);
  });
});
