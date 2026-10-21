import { describe, expect, it } from 'vitest';
import { sayAs } from '../src/lib/sayAs';
import { sayEuro, sayNumbers, sayTime } from '../src/lib/sayNumbers';

/** The spoken form of times, amounts and sums (docs/entree-aanvulling.md, "De stem"). */
describe('sayNumbers: times', () => {
  it('says a time the way people say it', () => {
    expect(sayNumbers('07:30')).toBe('half acht');
    expect(sayNumbers('Ik begin om 7.30 uur.')).toBe('Ik begin om half acht.');
    expect(sayNumbers('Van 7.30 tot 16.00 uur.')).toBe('Van half acht tot zestien uur.');
    expect(sayNumbers('De klant is thuis tot 12.00 uur.')).toBe('De klant is thuis tot twaalf uur.');
    expect(sayNumbers('tussen 23.00 en 6.00 uur')).toBe('tussen drieëntwintig uur en zes uur');
    expect(sayNumbers('om 16:15')).toBe('om kwart over vier');
    expect(sayNumbers('om 8.45 uur')).toBe('om kwart voor negen');
    expect(sayNumbers('om 11.30 uur')).toBe('om half twaalf');
    expect(sayNumbers('om 12.30 uur')).toBe('om half één');
    expect(sayNumbers('om 7.10 uur')).toBe('om zeven uur 10');
    expect(sayTime(0, 0)).toBe('twaalf uur');
    expect(sayTime(13, 30)).toBe('half twee');
  });

  it('leaves numbers that are not a time alone', () => {
    for (const t of ['12.000 gram', '1.000 euro is veel', 'les 4.1', '0900-8844', '8,5 uur', '7,5 uur', 'in 2026', '24.30', '7.60', '1.2.30']) {
      expect(sayNumbers(t).includes('half') || sayNumbers(t).includes('kwart'), t).toBe(false);
    }
    expect(sayNumbers('8,5 uur')).toBe('8,5 uur');
    expect(sayNumbers('0900-8844')).toBe('0900-8844');
  });
});

describe('sayNumbers: 112', () => {
  it('says the emergency number digit by digit', () => {
    expect(sayNumbers('Bel 112!')).toBe('Bel één één twee!');
    expect(sayNumbers('Ja, bel 112!')).toBe('Ja, bel één één twee!');
    expect(sayNumbers('Bij gevaar bel je 112.')).toBe('Bij gevaar bel je één één twee.');
    expect(sayAs('112 is alleen voor spoed.')).toBe('één één twee is alleen voor spoed.');
  });

  it('leaves other numbers with 112 in them alone', () => {
    for (const t of ['1120 gram', '2112', '112,50', '1.112', '0112-34']) expect(sayNumbers(t), t).toBe(t);
  });
});

describe('sayNumbers: amounts', () => {
  it('says euros and cents', () => {
    expect(sayNumbers('€ 7,50')).toBe('7 euro 50');
    expect(sayNumbers('€7,50')).toBe('7 euro 50');
    expect(sayNumbers('6,60 euro')).toBe('6 euro 60');
    expect(sayNumbers('Totaal: 13,40 euro.')).toBe('Totaal: 13 euro 40.');
    expect(sayNumbers('Dan geef je 1,80 euro terug.')).toBe('Dan geef je 1 euro 80 terug.');
    expect(sayNumbers('0,60 euro')).toBe('60 cent');
    expect(sayNumbers('0,05 euro')).toBe('5 cent');
    expect(sayNumbers('20,00 euro')).toBe('20 euro');
    expect(sayNumbers('€ 20')).toBe('20 euro');
    expect(sayNumbers('1.000 euro bruto')).toBe('1000 euro bruto');
    expect(sayNumbers('2.800 euro')).toBe('2800 euro');
    expect(sayNumbers('15 euro per uur')).toBe('15 euro per uur');
    expect(sayEuro('7', '5')).toBe('7 euro 50');
  });
});

describe('sayNumbers: sums and units', () => {
  it('says the signs of a sum as words', () => {
    expect(sayNumbers('20 × 15 = 300 euro.')).toBe('20 keer 15 is 300 euro.');
    expect(sayNumbers('8 + 6 + 6 + 6 = 26 uur.')).toBe('8 plus 6 plus 6 plus 6 is 26 uur.');
    expect(sayNumbers('16 − 7 = 9')).toBe('16 min 7 is 9');
    expect(sayNumbers('5 × 20 = 100 ml.')).toBe('5 keer 20 is 100 milliliter.');
    expect(sayNumbers('Gebruik 20 ml per liter.')).toBe('Gebruik 20 milliliter per liter.');
    expect(sayNumbers('12 kg en 60 cm')).toBe('12 kilo en 60 centimeter');
  });

  it('leaves plain Dutch alone', () => {
    for (const t of ['Ik ben 18, hoor.', 'Ze werkt 3–5 dagen.', 'Kamer 4 zat op slot.', 'De mail is weg.']) expect(sayNumbers(t)).toBe(t);
  });

  it('is what the phone voice gets (sayAs), together with "app"', () => {
    expect(sayAs('Open de app om 7.30 uur.')).toBe('Open de ep om half acht.');
    expect(sayAs('Je krijgt 6,60 euro terug.')).toBe('Je krijgt 6 euro 60 terug.');
  });
});
