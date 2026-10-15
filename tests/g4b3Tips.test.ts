import { describe, expect, it } from 'vitest';
import { cultureTips, TIP_LEADS } from '../src/content/culture';
import { gloss, helpLanguages } from '../src/i18n/all';
import { fallbackLead, sentences, shortTip, TIP_SENTENCES } from '../src/components/Exercises';

const tip = (id: string) => cultureTips.find((t) => t.id === id)!;
const lessonText = (id: string, code?: string) => {
  const t = tip(id);
  const lang = code ? helpLanguages.find((l) => l.code === code) : undefined;
  return shortTip(gloss(`${t.id}.b`, t.body, lang), TIP_SENTENCES, t.lead, t.phrase.nl);
};

describe('the sentence splitter (G4 b3)', () => {
  it('does not break after an abbreviation followed by a small letter', () => {
    expect(sentences('Na przykład np. w pracy. Dalej.')).toEqual(['Na przykład np. w pracy.', 'Dalej.']);
    expect(sentences('Наприклад, напр. так. Далі.')).toEqual(['Наприклад, напр. так.', 'Далі.']);
    expect(sentences('Zum Beispiel z.B. die Arbeit. Weiter.')).toEqual(['Zum Beispiel z.B. die Arbeit.', 'Weiter.']);
    expect(sentences('Een middel, bv. bleek. Klaar.')).toEqual(['Een middel, bv. bleek.', 'Klaar.']);
    expect(sentences('Pomoc (np. FNV) jest. Dalej.')).toEqual(['Pomoc (np. FNV) jest.', 'Dalej.']);
  });

  it('still splits real sentences, in every script', () => {
    expect(sentences('One. Two! Three? Four.')).toEqual(['One.', 'Two!', 'Three?', 'Four.']);
    expect(sentences('ሓደ። ክልተ፧ ሰለስተ።')).toEqual(['ሓደ።', 'ክልተ፧', 'ሰለስተ።']);
    expect(sentences('سؤال؟ جواب.')).toEqual(['سؤال؟', 'جواب.']);
    expect(sentences('Say it: "Dus ik moet eerst …?" This is normal.')).toEqual(['Say it: "Dus ik moet eerst …?"', 'This is normal.']);
    expect(sentences('(Other rules apply.) Do not sign.')).toEqual(['(Other rules apply.)', 'Do not sign.']);
    // A quoted Dutch phrase inside a sentence does not end it.
    expect(sentences('Put the sign (Pas op, glad!) down. Next.')).toEqual(['Put the sign (Pas op, glad!) down.', 'Next.']);
    expect(sentences('One. …')).toEqual(['One.', '…']);
  });

  it('lines up the help texts of (almost) every tip with the English', () => {
    let off = 0;
    for (const t of cultureTips) {
      const n = sentences(t.body).length;
      for (const lang of helpLanguages) if (sentences(gloss(`${t.id}.b`, t.body, lang).help!).length !== n) off++;
    }
    expect(off).toBeLessThanOrEqual(cultureTips.length * helpLanguages.length * 0.02);
  });
});

describe('the tip in a lesson keeps the sentence the situation and the phrase need', () => {
  it('shows the curated lead in English and in every help language', () => {
    const needs: [string, RegExp, RegExp][] = [
      // [tip, English, a term every help language keeps]
      ['c.gethelp', /112/, /112/],
      ['c.gethelp', /0800-7000/, /0800-7000/],
      ['c.rights', /Do not sign/, /Juridisch Loket/],
      ['c.cleansafe', /wet-floor sign/, /Pas op, glad!/],
      ['c.payslip', /write down the hours/, /./],
      ['c.housing', /Juridisch Loket/, /Juridisch Loket/],
      ['c.understood', /Dus ik moet eerst/, /Dus ik moet eerst/],
      ['c.doctor', /112/, /112/],
      ['c.smalltalk', /Gefeliciteerd/, /Gefeliciteerd/],
    ];
    for (const [id, en, help] of needs) {
      expect(lessonText(id).en, id).toMatch(en);
      for (const lang of helpLanguages) expect(lessonText(id, lang.code).help, `${id} ${lang.code}`).toMatch(help);
    }
  });

  it('every lead points at real sentences, in order, and is short', () => {
    for (const [id, lead] of Object.entries(TIP_LEADS)) {
      const t = tip(id);
      expect(t, id).toBeTruthy();
      expect(t.lead).toEqual(lead);
      const n = sentences(t.body).length;
      expect(lead.every((i, k) => i >= 0 && i < n && (k === 0 || i > lead[k - 1])), id).toBe(true);
      expect(lessonText(id).en.split(/\s+/).length, id).toBeLessThanOrEqual(70);
    }
  });

  it('a tip without a lead still shows its first three sentences', () => {
    const t = cultureTips.find((x) => !x.lead && sentences(x.body).length > 3)!;
    const parts = sentences(t.body);
    expect(lessonText(t.id).en).toBe(`${parts.slice(0, 3).join(' ')} …`);
  });

  it('falls back to the sentences with a number or a key term when the help text does not line up', () => {
    const help = ['Eerste.', 'Iets anders.', 'Nog iets.', 'Bel 112.', 'Juridisch Loket helpt.', 'Einde.'];
    expect(fallbackLead(help, ['Juridisch', 'Loket'])).toEqual([0, 3, 4]);
    expect(fallbackLead(help, [])).toEqual([0, 3, 1].sort());
    // c.ww in Turkish has one sentence fewer: the "quit yourself, no WW" sentence is still shown.
    expect(lessonText('c.ww', 'tr').help).toMatch(/WW alamazsın/);
    expect(lessonText('c.understood', 'ti').help).toMatch(/Dus ik moet eerst/);
  });
});
