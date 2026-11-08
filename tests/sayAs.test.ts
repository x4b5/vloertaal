import { describe, expect, it } from 'vitest';
import { ALONE_TAKE, CAO_TAKE, minTake, sayAs } from '../src/lib/sayAs';

describe('sayAs: how a voice is told to pronounce a line', () => {
  it('says "app" like the English word', () => {
    expect(sayAs('de app')).toBe('de ep');
    expect(sayAs('Ik kijk elke dag in de app.')).toBe('Ik kijk elke dag in de ep.');
    expect(sayAs('de vertaalapp')).toBe('de vertaalep');
    expect(sayAs('de groepsapp')).toBe('de groepsep');
    expect(sayAs('Oké, ik app in de pauze.')).toBe('Oké, ik ep in de pauze.');
    expect(sayAs('appen')).toBe('eppen');
    expect(sayAs('Hij stuurt een appje.')).toBe('Hij stuurt een epje.');
    expect(sayAs('Ze appt de chef.')).toBe('Ze ept de chef.');
  });

  it('says "ID" letter by letter', () => {
    expect(sayAs('Mag ik even uw ID zien?')).toBe('Mag ik even uw ie-dee zien?');
    expect(sayAs('Een goed idee')).toBe('Een goed idee');
  });

  it('leaves other words alone', () => {
    for (const t of ['de appel', 'het apparaat', 'kappen', 'stappen', 'trappen', 'de apotheek', 'happen']) expect(sayAs(t)).toBe(t);
  });
});

describe('"cao" letter by letter (the owner, 5 November 2026)', () => {
  it('says cee-aa-oo, also with capitals and in a sentence', () => {
    expect(sayAs('de cao')).toBe('de cee-aa-oo');
    expect(sayAs('Welke cao geldt voor mij?')).toBe('Welke cee-aa-oo geldt voor mij?');
    expect(sayAs('CAO')).toBe('cee-aa-oo');
    expect(sayAs('cacao')).toBe('cacao');
  });
  it('needs take 5: an older recording of a line with cao is not played', () => {
    expect(minTake('Welke cao geldt voor mij?')).toBe(CAO_TAKE);
    expect(minTake('het loon')).toBe(0);
  });
});

describe('a word that reads as an abbreviation when it stands alone (the owner, 8 November 2026)', () => {
  it('says the tile "tot" with an exclamation mark, not "tot." (= "total")', () => {
    expect(sayAs('tot')).toBe('tot!');
    expect(sayAs('Tot')).toBe('tot!');
  });

  it('spells the tiles "wc" and "digid" out', () => {
    expect(sayAs('wc')).toBe('wee-cee');
    expect(sayAs('digid')).toBe('die-gie-dee');
  });

  it('leaves the word alone inside a line', () => {
    expect(sayAs('tot ziens')).toBe('tot ziens');
    expect(sayAs('Ik werk tot vijf uur.')).toBe('Ik werk tot vijf uur.');
  });

  it('asks for a new recording of the tile, not of the line', () => {
    expect(minTake('tot')).toBe(ALONE_TAKE);
    expect(minTake('tot ziens')).toBe(0);
  });

  it('records again the tiles that came out wrong, as they are written', () => {
    for (const t of ['ben', 'heb', 'per', 'trap', 'band']) {
      expect(sayAs(t)).toBe(t);
      expect(minTake(t)).toBe(ALONE_TAKE);
    }
    expect(minTake('Ik ben Ali.')).toBe(0);
  });
});
