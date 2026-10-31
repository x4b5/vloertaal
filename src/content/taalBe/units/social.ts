import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Omgang met collega's" (u.social), a B unit (docs/taal-belgie.md). The
 * words, sentences and chats are the same in both countries. Only the tips of l.respect and
 * l.boundaries differ: in the Netherlands they send you to the vertrouwenspersoon "if there is
 * one"; in Belgium every employer must also have a preventieadviseur psychosociale aspecten, as
 * Werkregels België says (src/content/regels/be/units/rechten.ts and veilig.ts). The rest of each
 * tip is the Dutch one. Translations: src/i18n/be/units/social.ts. Not yet checked by an expert.
 */

// ⚖️ check: every employer must have a preventieadviseur psychosociale aspecten, in the company or
// through an external service ⚖️ (Welzijnswet 4 augustus 1996, art. 32sexies; regels/be/units/rechten.ts).
// ⚖️ check: a worker can go to the vertrouwenspersoon (if there is one) or to the preventieadviseur
// psychosociale aspecten; both have professional secrecy ⚖️ (codex welzijn op het werk, boek I titel 3;
// werk.belgie.be "de vertrouwenspersoon"; securex.be "beroepsgeheim vertrouwenspersoon"; search
// results, 30-31 October 2026; regels/be/units/rechten.ts and veilig.ts).
// ⚖️ check: "you may not be punished for reporting it" (be.c.boundaries.b, as in the Dutch tip): the
// legal protection against reprisals is for a formal request (verzoek tot formele psychosociale
// interventie), a complaint or a witness ⚖️ (Welzijnswet art. 32tredecies). Is the general sentence
// right for an informal report too? For the expert.
const PREVENTIE =
  'You can also go to the prevention adviser (preventieadviseur psychosociale aspecten): an expert for bullying and violence at work. Every employer must have one.';

const tips = [
  // ⚖️ check: the preventieadviseur psychosociale aspecten, in every company ⚖️ (Welzijnswet art.
  // 32sexies; see the notes above).
  {
    ...beTip({
      slug: 'respect',
      lessonId: 'l.respect',
      emoji: '🫂',
      title: 'Respect for everyone',
      body: `At work, everyone is equal and everyone is treated with respect, whatever their gender, origin, religion or sexual orientation. You decide about physical contact. A handshake is common, but you may also greet in another polite way, like a nod and a smile, and explain it briefly. Jokes about someone’s origin or religion, threats, bullying (pesten) and unwanted sexual behaviour are not accepted. You can report it to your supervisor, or to a confidential adviser (vertrouwenspersoon) if your company has one. ${PREVENTIE}`,
      phrase: ['Ik geef liever geen hand, maar ik groet je graag.', 'I prefer not to shake hands, but I am happy to greet you.'],
      situation: 'A colleague often makes jokes about your religion. You asked him to stop, but he goes on. What do you do?',
      options: [
        'Tell your supervisor or the preventieadviseur.',
        'Laugh along with him, so there is no trouble.',
        'Make jokes about his background back.',
      ],
      why: 'Such jokes are not accepted at work. Reporting it is normal: the company must keep the workplace safe for everyone.',
    }),
  },
  // ⚖️ check: the preventieadviseur psychosociale aspecten, in every company; protection against
  // reprisals ⚖️ (Welzijnswet art. 32sexies and 32tredecies; see the notes above).
  {
    ...beTip({
      slug: 'boundaries',
      lessonId: 'l.boundaries',
      emoji: '🛑',
      title: 'Crossing the line',
      body: `Grensoverschrijdend gedrag is behaviour that crosses someone’s boundary: unwanted touching, sexual remarks or jokes, staring, sending unwanted pictures, threats or shouting. It does not matter if the other person "meant it as a joke": what counts is how it feels to you. If you can, say clearly that you want it to stop. Write down what happened, when, and who saw it. Tell your supervisor, the confidential adviser (vertrouwenspersoon, if there is one) or HR. ${PREVENTIE} Your employer must protect you, and you may not be punished for reporting it. Did you see it happen to a colleague? Ask if they are okay, and offer to be a witness.`,
      phrase: ['Ik wil dat je stopt.', 'I want you to stop.'],
      situation: 'Your team leader often puts his hand on your back and says you look "pretty". It makes you feel uncomfortable. He decides your shifts. What do you do?',
      options: [
        'Write it down and tell the preventieadviseur.',
        'Say nothing, because he decides your shifts.',
        'Quit your job without telling anyone why.',
      ],
      why: 'This is unwanted behaviour, and it is not your fault. The preventieadviseur listens in confidence and helps you choose the next step. You can also talk to a vertrouwenspersoon or HR.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.social', tips };
