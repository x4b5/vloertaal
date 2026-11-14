import { describe, expect, it } from 'vitest';
import { cultureTips } from '../src/content/culture';
import { workTips } from '../src/content/workTips';

/**
 * "What do you do?": not too much text at once (the owner's feedback, 2 November 2026). The
 * situation in at most 2 short sentences, each answer short. A first set of situations is
 * shortened (the longest, and the one from the owner's screenshot); the rest follows and joins
 * this list.
 */
const SHORT = ['c.translate', 'c.harvest', 'c.shelves', 'c.garage', 'c.illness', 'c.carjob', 'c.gethelp', 'c.council', 'c.handover', 'c.bsn', 'c.permit',
  // The new lessons of 4 November 2026 (fire alarm, numbers): short from the start.
  'c.alarm', 'c.counting',
  // Vervoer en bezorging and Voedselverwerking (5 November 2026): short from the start.
  'c.parcel', 'c.road', 'c.food',
  // And those of 5 November 2026 (feeling good at work, helping a new colleague).
  'c.feelwell', 'c.newcolleague',
  // "Feedback en overleg" (5 November 2026): short from the start.
  'c.getfeedback', 'c.givefeedback', 'c.meeting',
  // "Goed communiceren" (u.communicate, 5 November 2026): short from the start.
  'c.explain', 'c.listen', 'c.calm', 'c.talkintime', 'c.reachable',
  // Every sector unit at four lessons (14 November 2026): short from the start.
  'c.measure', 'c.siteday', 'c.shifts', 'c.signals', 'c.transfer', 'c.dishes', 'c.rush', 'c.rounds', 'c.colours', 'c.shophelp', 'c.shoptrouble',
  'c.plantcare', 'c.outdoors', 'c.drawing', 'c.weld', 'c.carparts', 'c.carsafe'];
const SITUATION_MAX = 18; // words, without the question at the end
const ANSWER_MAX = 10;
const SCREEN_MAX = 42; // the situation and its three answers together

const words = (s: string) => s.trim().split(/\s+/).length;
const withoutAsk = (s: string) => s.replace(/\s*(What do you do|What can you do|What do you say|What is true)\?$/, '');

describe('situations are short', () => {
  const tips = [...cultureTips, ...workTips];
  for (const id of SHORT) {
    it(id, () => {
      const t = tips.find((x) => x.id === id);
      expect(t, id).toBeTruthy();
      const sit = words(withoutAsk(t!.situation.en));
      expect(sit, t!.situation.en).toBeLessThanOrEqual(SITUATION_MAX);
      for (const o of t!.options) expect(words(o.en), o.en).toBeLessThanOrEqual(ANSWER_MAX);
      expect(sit + t!.options.reduce((n, o) => n + words(o.en), 0)).toBeLessThanOrEqual(SCREEN_MAX);
    });
  }
});
