import { describe, expect, it } from 'vitest';
import { CAO_TAKE, minTake, sayAs } from '../src/lib/sayAs';

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
  it('makes the tile "ben" again (heard as "din", 8 November 2026), and not the sentences with it', () => {
    expect(minTake('ben')).toBe(6);
    expect(minTake('Ben')).toBe(6);
    expect(minTake('Hallo, ik ben nieuw.')).toBe(0);
    expect(minTake('benen')).toBe(0);
  });
});
