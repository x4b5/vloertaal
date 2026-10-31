import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Slimme apps en AI" (u.ai), a B unit (docs/taal-belgie.md). The words,
 * sentences and chats are the same in both countries; two tips differ:
 *  - l.aihelp: check with a person (the personnel department, the union, the justitiehuis instead
 *    of the Juridisch Loket); every worker builds up holiday pay in Belgium too;
 *  - l.aiprivate: the rijksregisternummer instead of the BSN; the GDPR, the
 *    Gegevensbeschermingsautoriteit (GBA) for privacy and Unia for unfair treatment.
 * l.aifake and l.aiplan stay (l.aiplan: only its closing line, swapped by itself). The facts are
 * those of the Belgian work rules (src/content/regels/be/units/digitaal.ts, meedoen.ts).
 * Translations: src/i18n/be/units/ai.ts. No expert has checked the ⚖️ notes yet.
 */

const tips = [
  // ⚖️ check: AI can explain a letter but makes mistakes; for your contract or pay, check with a
  // person, for example the personnel department or the union ⚖️ (digitaal.ts, r.be.l.digitaal.3).
  // ⚖️ check: In Belgium every worker builds up holiday pay (vakantiegeld) ⚖️ (Gecoördineerde wetten
  // jaarlijkse vakantie 28 juni 1971; loon.ts; vlaanderen.be "vakantie en vakantiegeld").
  // ⚖️ check: A free first legal advice at the justitiehuis ⚖️ (vlaanderen.be/justitiehuizen).
  beTip({
    slug: 'aihelp',
    lessonId: 'l.aihelp',
    emoji: '🤖',
    title: 'AI helps, a person checks',
    body: 'AI apps and chatbots, like ChatGPT, can translate, explain a letter or help you write a message. That is useful. But AI sometimes makes mistakes, and still sounds very sure. For important things, like your contract, your pay, medicine or safety, always check the answer with a person: your supervisor, the personnel department, the union or the justitiehuis (free legal advice).',
    phrase: ['Klopt dit? Kunt u even meekijken?', 'Is this right? Could you have a look with me?'],
    situation: 'You ask a chatbot about your contract. It says you get no holiday pay. What do you do?',
    options: [
      'Ask the personnel department or the union to check.',
      'Believe it: the chatbot sounds very sure.',
      'Say nothing and forget about it.',
    ],
    why: 'A chatbot can be wrong about rules and contracts. In Belgium every worker builds up holiday pay. A person who knows the rules can check it.',
  }),
  // ⚖️ check: Personal data of customers do not go into an outside chatbot without a reason (GDPR,
  // art. 5 and 6); never type your rijksregisternummer, a password or bank details ⚖️
  // (gegevensbeschermingsautoriteit.be; digitaal.ts, r.be.l.digitaal.3.tf1).
  // ⚖️ check: The Gegevensbeschermingsautoriteit (GBA) is the Belgian privacy authority: it answers
  // questions and handles complaints about your personal data ⚖️ (gegevensbeschermingsautoriteit.be;
  // wet 3 december 2017).
  // ⚖️ check: Unia helps for free with discrimination, also when a computer or app treats you
  // unfairly ⚖️ (unia.be; Antidiscriminatiewet 10 mei 2007; meedoen.ts).
  // ⚖️ check: Many employers have rules about AI; with new technology the employer informs the
  // workers ⚖️ (cao nr. 39 nieuwe technologieën, cnt-nar.be, not opened; digitaal.ts).
  beTip({
    slug: 'aiprivate',
    lessonId: 'l.aiprivate',
    emoji: '🔐',
    title: 'Think before you type',
    body: 'What you type into a chatbot can be saved and used by the company that makes it. So never type your rijksregisternummer, a password or your bank details. Do not put in names or photos of customers, patients or colleagues, or papers from work: that is personal data, and the privacy law (GDPR) protects it. Many employers have rules about AI. Ask first if you may use it for your work. A question about your privacy? The privacy authority (GBA) can help. Treated unfairly, also by an app? Unia can help. Rules differ per company: ask your supervisor what the rules are where you work.',
    phrase: ['Mag ik hier AI voor gebruiken?', 'May I use AI for this?'],
    situation: 'You want a chatbot to write a report about a customer. The report has the name and address of the customer. What do you do?',
    options: [
      'Ask first, and leave the name and address out.',
      'Put everything in the chatbot: it is faster.',
      'Send the report to a friend to check it.',
    ],
    why: 'Names and addresses are personal data. They may not just go to another company. Your employer knows which apps are allowed.',
  }),
];

export const be: BeTaal = { nl: 'u.ai', tips };
