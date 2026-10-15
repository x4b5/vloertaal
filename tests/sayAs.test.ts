import { describe, expect, it } from 'vitest';
import { sayAs } from '../src/lib/sayAs';

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

  it('leaves other words alone', () => {
    for (const t of ['de appel', 'het apparaat', 'kappen', 'stappen', 'trappen', 'de apotheek', 'happen']) expect(sayAs(t)).toBe(t);
  });
});
