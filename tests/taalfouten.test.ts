import { describe, expect, it } from 'vitest';
import { allLessons } from '../src/content/curriculum';
import ar from '../src/i18n/work/ar';
import pt from '../src/i18n/work/pt';
import tr from '../src/i18n/work/tr';
import { helpLanguageSources } from '../src/i18n/all';
import { GENDERED_LANGS } from '../src/i18n/types';

/** Language mistakes from the evaluation (fase 1, 4 November 2026): the Dutch and some translations. */
const sentence = (id: string) => allLessons.flatMap((l) => l.sentences).find((s) => s.id === id)!;
const forms = (v: unknown): string[] => (typeof v === 'string' ? [v] : Object.values(v as Record<string, string>));

describe('the Dutch says it the way Dutch does', () => {
  it('a boundary is firm, not a polite request (s.boundaries.1)', () => {
    expect(sentence('s.boundaries.1').nl).toBe('Blijf van me af.');
    // Its translations dropped "please" too.
    const please = /proszę|vă rog|моля|будь ласка|من فضلك|በጃኻ|لطفاً|lütfen|por favor|s’il vous plaît|bitte/i;
    for (const src of helpLanguageSources) {
      const v = (src.gloss as Record<string, unknown>)['s.boundaries.1'];
      expect(v, src.code).toBeTruthy();
      for (const f of forms(v)) expect(f, src.code).not.toMatch(please);
    }
  });

  it('“Ik ontbijt”, not “Ik eet een ontbijt” (s.healthy.2)', () => {
    expect(sentence('s.healthy.2').nl).toBe('Ik ontbijt altijd eerst.');
  });
});

describe('translations: checking in, the client, the neutral question', () => {
  it('checking in on the bus is holding your card to the reader, not logging in (s.transit.1 and .2)', () => {
    for (const id of ['s.transit.1', 's.transit.2']) {
      expect(forms(ar.gloss[id]).join(' '), `ar ${id}`).not.toMatch(/تسجّل الدخول|أسجّل الدخول|تسجّل الخروج/);
      expect(forms(tr.gloss[id]).join(' '), `tr ${id}`).not.toMatch(/giriş yap|çıkış yap/i);
      expect(forms(pt.gloss[id]).join(' '), `pt ${id}`).not.toMatch(/check-in|check-out/);
    }
    expect(ar.gloss['s.transit.1']).toBe('أمرّر بطاقتي البنكية عند الصعود.');
    expect(tr.gloss['s.transit.1']).toBe('Banka kartımı okutuyorum.');
    expect(pt.gloss['s.transit.1']).toBe('Valido com o meu cartão bancário.');
  });

  it('a client in care is the person you care for, not a “danışan” (tr w.client)', () => {
    expect(tr.gloss['w.client']).toBe('bakımını yaptığın kişi');
  });

  it('the neutral form of “Wil je een pilletje?” still asks (ar c.healthy.q)', () => {
    const q = ar.gloss['c.healthy.q'] as { m: string; f: string; x: string };
    expect(q.x).toMatch(/^هل /);
    expect(q.x).toContain('رغبة');
    expect(GENDERED_LANGS).toContain('ar');
  });
});
