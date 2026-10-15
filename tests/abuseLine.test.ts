import { describe, expect, it } from 'vitest';
import { cultureTips } from '../src/content/culture';
import { ABUSE_LINE, ADVICE_LINE } from '../src/content/work';
import { helpLanguageSources } from '../src/i18n/all';
import { allForms } from '../src/i18n/types';

/**
 * Where the employer or agency may be the problem (exploitation, paying for a job, housing pressure, dismissal),
 * the closing line never says "ask your employer": it names the union, the Juridisch Loket and FairWork.
 */
const ABUSE_TIPS = ['c.warning', 'c.gethelp', 'c.housing', 'c.rights', 'c.newjob'];
const tip = (id: string) => cultureTips.find((t) => t.id === id)!;
/** "employer" in each help language (the old closing line named it). */
const EMPLOYER: Record<string, RegExp> = {
  ar: /صاحب العمل/, ti: /ኣስራሒ/, fa: /کارفرما/, prs: /کارفرما/, uk: /роботодав/i, tr: /işveren/i, pl: /pracodaw/i, ro: /angajator/i, bg: /работодател/i,
};
/** The last two sentences of a body: the closing line. */
const closing = (s: string) => s.split(/(?<=[.。።])\s+/).slice(-2).join(' ');

describe('the closing line of the exploitation and dismissal tips', () => {
  it('does not send the learner to the employer (English)', () => {
    expect(ABUSE_LINE).not.toMatch(/employer/i);
    expect(ABUSE_LINE).toMatch(/FairWork/);
    for (const id of ABUSE_TIPS) {
      const body = tip(id).body;
      expect(body.endsWith(ABUSE_LINE), id).toBe(true);
      expect(body, id).not.toContain(ADVICE_LINE);
      expect(body, id).not.toMatch(/ask your employer/i);
      expect(closing(body), id).not.toMatch(/employer/i);
    }
  });

  it('says the same in every help language, every gender form, with the names kept in Latin', () => {
    for (const src of helpLanguageSources) {
      for (const id of ABUSE_TIPS) {
        const forms = allForms(src.gloss[`${id}.b`]);
        expect(forms.length, `${src.code} ${id}`).toBeGreaterThan(0);
        for (const f of forms) {
          const end = closing(f);
          expect(end, `${src.code} ${id}`).toMatch(/Juridisch Loket/);
          expect(end, `${src.code} ${id}`).toMatch(/FairWork/);
          expect(end, `${src.code} ${id}`).not.toMatch(EMPLOYER[src.code]);
        }
      }
    }
  });

  it('leaves the other tips with the usual closing line', () => {
    for (const id of ['c.payslip', 'c.health', 'c.leave', 'c.illness', 'c.ww', 'c.letters', 'c.insurance', 'c.sick']) {
      expect(tip(id).body.endsWith(ADVICE_LINE), id).toBe(true);
    }
    expect(cultureTips.filter((t) => t.body.includes('FairWork')).map((t) => t.id).sort()).toEqual([...ABUSE_TIPS].sort());
  });
});
