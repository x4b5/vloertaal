import { beforeEach, describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { findKlank } from '../src/content/klankMond';
import { BADGE_TIMES, HARD, hardKlank, klankBadgeDue, markKlankBadgeShown } from '../src/lib/wordKlank';

const store = new Map<string, string>();
beforeEach(() => {
  store.clear();
  (globalThis as { localStorage?: unknown }).localStorage = {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  };
});

describe('the hard sound of a word, for the mouth on its word card (src/lib/wordKlank.ts)', () => {
  it('finds ui, eu, uu, ij/ei, ou/au and oe from the spelling', () => {
    expect(hardKlank('het ziekenhuis')).toBe('ui');
    expect(hardKlank('de keuken')).toBe('eu');
    expect(hardKlank('het uur')).toBe('uu');
    expect(hardKlank('de pijn')).toBe('ij');
    expect(hardKlank('veilig')).toBe('ij');
    expect(hardKlank('koud')).toBe('ou');
    expect(hardKlank('de pauze')).toBe('ou');
    expect(hardKlank('opbouwen')).toBe('ou');
    expect(hardKlank('goed')).toBe('oe');
  });

  it('reads the longest letter group first', () => {
    // m-oei-l-ijk: oe and ij, not the ei of o-ei.
    expect(hardKlank('moeilijk')).toBe('ij');
    expect(hardKlank('de moeite')).toBe('oe');
    // nieuw, eeuw, uw, ooi, aai: no hard sound of a card.
    for (const w of ['nieuw', 'de eeuw', 'uw', 'mooi', 'draaien', 'de helm', 'het hesje', 'de baas']) expect(hardKlank(w), w).toBeUndefined();
  });

  it('knows the loanwords whose spelling says another sound, also in a compound', () => {
    expect(hardKlank('de route')).toBe('oe');
    expect(hardKlank('de vluchtroute')).toBe('oe');
    expect(hardKlank('de douche')).toBe('oe');
    for (const w of ['het bureau', 'niveau 2', 'het account', 'automatisch', 'de e-mail', 'de computer', 'de manager']) expect(hardKlank(w), w).toBeUndefined();
    // The ui of uitzendbureau still counts; the eau does not.
    expect(hardKlank('het uitzendbureau')).toBe('ui');
  });

  it('shows one sound per word, the first in the order of HARD', () => {
    expect(HARD).toEqual(['ui', 'eu', 'uu', 'ij', 'ou', 'oe']);
    expect(hardKlank('de huisarts en de pijn')).toBe('ui');
  });

  it('only names sounds that have a card, and leaves most words of the course without one', () => {
    for (const k of HARD) expect(findKlank(k), k).toBeDefined();
    const words = [...new Map(units.flatMap((u) => u.lessons.flatMap((l) => l.words)).map((w) => [w.id, w])).values()];
    const withSound = words.filter((w) => hardKlank(w.nl));
    expect(withSound.length).toBeGreaterThan(100);
    expect(withSound.length).toBeLessThan(words.length / 2);
  });
});

describe('the mouth on the first word cards of a sound only', () => {
  it('shows it the first three times per sound, each sound on its own', () => {
    expect(BADGE_TIMES).toBe(3);
    for (let i = 0; i < BADGE_TIMES; i++) {
      expect(klankBadgeDue('ui')).toBe(true);
      markKlankBadgeShown('ui');
    }
    expect(klankBadgeDue('ui')).toBe(false);
    expect(klankBadgeDue('ij')).toBe(true);
  });

  it('keeps showing it when the phone cannot remember (it is only a help)', () => {
    (globalThis as { localStorage?: unknown }).localStorage = undefined;
    markKlankBadgeShown('ui');
    expect(klankBadgeDue('ui')).toBe(true);
  });
});
