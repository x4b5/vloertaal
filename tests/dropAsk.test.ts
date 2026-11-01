import { describe, expect, it } from 'vitest';
import { dropAsk } from '../src/lib/dropAsk';

describe('dropAsk', () => {
  it('drops the asking question at the end', () => {
    expect(dropAsk('A colleague walks up to you: "Hoi, ik ben Mark." What do you do?')).toBe('A colleague walks up to you: "Hoi, ik ben Mark."');
    expect(dropAsk('Your gloves are torn. What do you do?')).toBe('Your gloves are torn.');
    expect(dropAsk('Un collègue vient vers toi : “Hoi, ik ben Mark.” Que fais-tu ?')).toBe('Un collègue vient vers toi : “Hoi, ik ben Mark.”');
    expect(dropAsk('Un compañero se acerca a ti: “Hoi, ik ben Mark.” ¿Qué haces?')).toBe('Un compañero se acerca a ti: “Hoi, ik ben Mark.”');
    expect(dropAsk('زميل يأتي إليك ويقول: «Hoi, ik ben Mark.» ماذا تفعل؟')).toBe('زميل يأتي إليك ويقول: «Hoi, ik ben Mark.»');
    expect(dropAsk('ጓንትኻ ተቐዲዱ። እንታይ ትገብር?')).toBe('ጓንትኻ ተቐዲዱ።');
  });
  it('keeps a question inside the quote', () => {
    expect(dropAsk('The employer asks: "Heb je nog vragen?" What do you do?')).toBe('The employer asks: "Heb je nog vragen?"');
  });
  it('keeps a text that is only a question, or has no question at the end', () => {
    expect(dropAsk('What do you do?')).toBe('What do you do?');
    expect(dropAsk('Your gloves are torn.')).toBe('Your gloves are torn.');
  });
});
