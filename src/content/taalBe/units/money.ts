import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Geld en post" (u.money), a B unit (docs/taal-belgie.md). Only l.letters
 * differs (C items, written as B lines): de Belastingdienst → FOD Financiën, terugbetalen →
 * terugkrijgen (after the tax return you often get money back), the chat's "voor 1 mei" →
 * MyMinfin; the tip: FOD Financiën, the eBox, MyMinfin and the voorstel van vereenvoudigde
 * aangifte, the Groeipakket, the OCMW and the CAW, and Wikifin (instead of the Nibud). l.scams and
 * l.budget are the same in both countries. The facts are those of the Belgian work rules
 * (src/content/regels/be/units/geld.ts). Translations: src/i18n/be/units/money.ts. No expert has
 * checked the ⚖️ notes yet.
 */

// ⚖️ check: The federal tax office is FOD Financiën; you do your tax return on MyMinfin
// (Tax-on-web), with itsme or your eID ⚖️ (fin.belgium.be "belastingaangifte"; geld.ts).
// ⚖️ check: Many workers get money back after the tax return: the bedrijfsvoorheffing is an advance,
// often too high when you work only part of the year ⚖️ (FOD Financiën; wikifin.be; geld.ts).
// No recording yet for these lines: the phone reads them until the next recording round.
const lines: BeTaal['lines'] = {
  'w.belastingdienst': { nl: 'FOD Financiën', en: 'the tax office (of the federal government)', picture: false },
  'w.terugbetalen': { nl: 'terugkrijgen', en: 'to get back (money)', picture: false },
  'c.letters.a': { nl: 'Ja, via MyMinfin. Ik krijg geld terug.', en: 'Yes, on MyMinfin. I am getting money back.' },
};

const tips = [
  // ⚖️ check: Letters from FOD Financiën, the gemeente, the RVA or the OCMW often have a date by which
  // you must react ⚖️ (geld.ts, r.be.l.geld.3; fin.belgium.be).
  // ⚖️ check: The eBox is the government's online mailbox; you open it with itsme or your eID ⚖️
  // (myebox.be; belgium.be; geld.ts).
  // ⚖️ check: Tax return via MyMinfin, with itsme or eID; many people get a voorstel van
  // vereenvoudigde aangifte: check it, and change it before the date in the letter if it is not
  // right ⚖️ (fin.belgium.be "belastingaangifte 2026"; wikifin.be; geld.ts).
  // ⚖️ check: FOD Financiën helps for free with filling in the tax return ⚖️ (fin.belgium.be, hulp
  // bij je aangifte; geld.ts).
  // ⚖️ check: The Groeipakket is money for your children from the Flemish government; a payment
  // office (uitbetaler: Fons, Kidslife, Infino, MyFamily, Parentia) pays it ⚖️ (vlaanderen.be "Het
  // Vlaams Groeipakket"; groeipakket.be; geld.ts).
  // ⚖️ check: The OCMW and the CAW help for free with your budget and money problems ⚖️
  // (vlaanderen.be, CAW; ocmw: maatschappelijk werker; geld.ts).
  // ⚖️ check: Wikifin (of the FSMA) has free tips about money and a budget planner ⚖️ (wikifin.be;
  // geld.ts).
  beTip({
    slug: 'letters',
    lessonId: 'l.letters',
    emoji: '📨',
    title: 'Do not ignore letters',
    body:
      'Do not ignore letters from FOD Financiën (tax), the gemeente, the RVA or the OCMW. Many letters also come online, in your eBox. Ask someone you trust to help you read them. ' +
      'You do your tax return (aangifte) on MyMinfin, with itsme or your eID. Often you get a proposal that is already filled in: check it well. FOD Financiën helps you for free. ' +
      'Do you have children? The Groeipakket is money for your children from the Flemish government. Money problems? The OCMW and the CAW help for free. Tips about money: wikifin.be. ' +
      'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).',
    phrase: ['Ik heb een brief gekregen. Kun je me helpen?', 'I got a letter. Can you help me?'],
    situation: 'You get a letter from FOD Financiën. You do not understand it. What do you do?',
    options: [
      'Ask someone you trust to help you read it.',
      'Put it in a drawer and wait.',
      'Throw it away, because it is probably advertising.',
    ],
    why: 'Official letters often have a date by which you must react. If you react in time, problems are usually easier to solve. Maybe you even get money back.',
  }),
];

export const be: BeTaal = { nl: 'u.money', lines, tips };
