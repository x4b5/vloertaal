import type { CultureTip } from './culture';

/**
 * "Uit een ander land?": a few lines for who came to work here from another country, under the
 * tip of the lesson they belong to (the owner, 10 November 2026: these topics were only in
 * Werkregels, in Dutch, while the people who need them most read the tips in their own language).
 * The same facts as the work-rules lessons r.l.ziek.4, r.l.geld.8 and r.l.contract.5. Shown in the
 * lesson's tip and on "Zo werkt het hier"; only for the Dutch tips (not in the Belgian course).
 * ⚖️ check: docs/juridische-check.md, "Uit een ander land".
 */
export const ABROAD: Readonly<Record<string, string>> = {
  // ⚖️ check: going abroad while sick needs the employer's consent, else a wage sanction (BW 7:629 lid 3); Ziektewet: tell UWV first.
  'c.illness': 'Sick and want to go to your home country? Ask your employer or the agency first. Without permission your pay can stop. Give your address there and answer your phone.',
  // ⚖️ check: WW abroad with form U2, at least 4 weeks registered first, usually up to 3 months (Verordening (EG) 883/2004 art. 64).
  'c.ww': 'Looking for work in another EU country? You can sometimes take your WW with you. Ask UWV for form U2 before you leave. Without U2 your WW stops.',
  // ⚖️ check: posting, the A1 form shows which country's social security applies (Verordening (EG) 883/2004 art. 12); the Dutch minimum wage applies (WagwEU).
  'c.agency': 'Did an employer from another country send you here for a while? Then you are posted (gedetacheerd). Ask your employer for your A1 form: it shows where you are insured. Here you still get at least the Dutch minimum wage.',
};

/** A tip's line for who came from another country (its gloss id `<tip>.x`), or none. */
export function abroadLine(tip: Pick<CultureTip, 'id'>): { id: string; en: string } | undefined {
  const en = ABROAD[tip.id];
  return en ? { id: `${tip.id}.x`, en } : undefined;
}

/** Their gloss ids, for the translations' completeness test. */
export const abroadIds: string[] = Object.keys(ABROAD).map((id) => `${id}.x`);
