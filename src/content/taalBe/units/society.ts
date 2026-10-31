import { beLesson, beTip, beUnit } from '../helpers';
import type { BeTaal } from '../types';

/**
 * "Meedoen in België" (be.u.society): the Belgian twin of "Meedoen in Nederland" (u.society), the
 * example C unit of docs/taal-belgie.md. The same two lessons in the same order, each with six
 * words, three sentences, a chat and a "Zo werkt het hier" tip:
 *  - be.l.council: de gemeente (your address, the wijkagent) and voting (the gemeenteraad, the
 *    opkomstplicht, the oproepingsbrief);
 *  - be.l.police: the police and your identity card, objecting (bezwaar maken) and your rights.
 * Translations: src/i18n/be/units/society.ts.
 *
 * Sources: vlaanderen.be could not be opened from this session (31 October 2026, the host is not
 * reachable here); its pages are cited from search results of that day. No expert has checked the
 * ⚖️ notes below yet (the track shows its beta line until one has).
 */

// Words that are written the same as in the Dutch unit ("stemmen", "de gemeenteraad", "de
// burgemeester", "de boete", "het bezwaar", "de advocaat") play their recorded clip: clips are
// found by their text. The other lines are read by the phone until they are recorded
// (docs/taal-belgie.md, "Opnames").
const unit = beUnit('society', 'Taking part in Belgium', 'Meedoen in België', '🏛️', '#2b5c8a', [
  // ⚖️ check: A move is reported at the new gemeente within 8 working days, also within the same
  // gemeente; the wijkagent then checks that you live there (woonstcontrole) ⚖️ (vlaanderen.be,
  // "Aangifte van adreswijziging", from a search result of 31 October 2026; KB 16 juli 1992).
  // ⚖️ check: Elections in Belgium are on a Sunday ⚖️ (Kieswetboek, artikel nakijken; vlaanderen.be
  // "Vlaanderen kiest"). The chat says "zondag" for that reason.
  beLesson(
    'council',
    'The gemeente and voting',
    [
      ['stemmen', 'stemmen', 'to vote', '🗳️'],
      ['gemeentehuis', 'het gemeentehuis', 'the town hall (the gemeente’s building)', '🏢'],
      ['gemeenteraad', 'de gemeenteraad', 'the municipal council (it decides about your town)', '🏘️', false],
      ['burgemeester', 'de burgemeester', 'the mayor', '🎖️', false],
      ['oproepingsbrief', 'de oproepingsbrief', 'the voting letter (it says where and when you vote)', '✉️', false],
      ['opkomstplicht', 'de opkomstplicht', 'the duty to go and vote', '📋', false],
    ],
    [
      ['Ik verhuis. Ik geef mijn nieuwe adres door aan de gemeente.', 'I am moving. I am giving my new address to the gemeente.'],
      ['Mag ik stemmen voor de gemeenteraad?', 'May I vote for the municipal council?'],
      ['Mijn oproepingsbrief kwam met de post.', 'My voting letter came in the post.'],
    ],
    [['Ga je zondag stemmen?', 'Are you going to vote on Sunday?'], ['Ja. Ik heb mijn oproepingsbrief en mijn identiteitskaart.', 'Yes. I have my voting letter and my identity card.']],
  ),
  // ⚖️ check: From 15, you must always carry your identity card and show it when the police ask
  // ⚖️ (vlaanderen.be "Elektronische identiteitskaart (eID)", be.brussels, IBZ omzendbrief 5 juni
  // 2008 over het verplicht dragen van de eID; for foreigners: the verblijfskaart, the same duty).
  beLesson(
    'police',
    'Police, objecting and your rights',
    [
      ['wijkagent', 'de wijkagent', 'the local police officer (of your neighbourhood)', '👮'],
      ['identiteitskaart', 'de identiteitskaart', 'the identity card (eID)', '🪪'],
      ['boete', 'de boete', 'the fine (money you must pay as a punishment)', '💸', false],
      ['bezwaar', 'het bezwaar', 'the objection (you say in writing that you do not agree)', '✋', false],
      ['advocaat', 'de advocaat', 'the lawyer', '💼', false],
      ['recht', 'het recht', 'the right (what the law says you may do or get)', '⚖️', false],
    ],
    [
      ['Ik heb mijn identiteitskaart altijd bij me.', 'I always have my identity card with me.'],
      ['Ik wil bezwaar maken.', 'I want to object.'],
      ['Ik wil eerst met een advocaat praten.', 'I want to talk to a lawyer first.'],
    ],
    [['Mag ik uw identiteitskaart zien?', 'May I see your identity card?'], ['Ja, hier is ze. Wat is er aan de hand?', 'Yes, here it is. What is going on?']],
  ),
]);

const tips = [
  // ⚖️ check: The gemeente keeps your address and gives you your identity card or residence card
  // ⚖️ (vlaanderen.be "Belgische identiteitsdocumenten"; dienst Burgerzaken/Bevolking).
  // ⚖️ check: Moving: tell the new gemeente within 8 working days; the wijkagent then comes by ⚖️
  // (vlaanderen.be "Aangifte van adreswijziging", search result of 31 October 2026).
  // ⚖️ check: The gemeenteraad is elected every 6 years ⚖️ (Lokaal en Provinciaal Kiesdecreet 8
  // juli 2011; last election 13 October 2024).
  // ⚖️ check: People from another EU country, and from outside the EU after 5 years of legal stay,
  // may vote for the gemeenteraad, after they register as a voter at the gemeente ⚖️ (wet 19
  // maart 2004 (non-EU), wet 27 januari 1999 (EU); vlaanderen.be "Stemrecht", search result of
  // 31 October 2026; VRT NWS 21 August 2024).
  // ⚖️ check: In Flanders voting for the gemeenteraad is no longer compulsory, since the local
  // elections of 2024 ⚖️ (Vlaams decreet over de afschaffing van de opkomstplicht, datum nakijken;
  // vlaanderen.be "Stemrecht"; VRT NWS 5 September 2024). In Brussels and Wallonia it still is.
  // ⚖️ check: For the federal, Flemish and European elections, Belgians must go and vote
  // (opkomstplicht) ⚖️ (Grondwet art. 62; Kieswetboek, de sancties: artikel nakijken).
  // ⚖️ check: You get an oproepingsbrief by post: bring it with your identity card ⚖️ (Kieswetboek,
  // artikel nakijken; vlaanderen.be "Vlaanderen kiest").
  beTip({
    slug: 'council',
    lessonId: 'be.l.council',
    emoji: '🗳️',
    title: 'Your gemeente, and who may vote',
    body:
      'The gemeente keeps your address and gives you your identity card. Moving? Tell the gemeente of your new home within 8 working days. Then the wijkagent (local police officer) comes to check that you live there. ' +
      'Every 6 years there is an election for the gemeenteraad. People from another EU country may vote for it, and people from outside the EU after 5 years of legal stay. First you register as a voter at the gemeente. ' +
      'In Flanders you do not have to vote for the gemeenteraad. For the other elections, Belgians must go and vote (opkomstplicht). You get a letter (oproepingsbrief): bring it with your identity card. Not sure? Ask the gemeente.',
    phrase: ['Mag ik stemmen voor de gemeenteraad? Moet ik me eerst inschrijven?', 'May I vote for the gemeenteraad? Do I have to register first?'],
    situation: 'You come from Morocco and have lived in Gent legally for six years. You are not Belgian. There is an election for the gemeenteraad soon. What is true?',
    ask: 'which',
    options: [
      'You may vote, after you register at the gemeente.',
      'You may also vote for the federal parliament.',
      'You may not vote at all without a Belgian passport.',
    ],
    why: 'After 5 years of legal stay, you may vote for the gemeenteraad. You must register as a voter first. For the federal parliament you need Belgian nationality.',
  }),
  // ⚖️ check: From 15, always carry your identity card and show it when the police ask ⚖️
  // (vlaanderen.be "Elektronische identiteitskaart (eID)"; IBZ omzendbrief 5 juni 2008).
  // ⚖️ check: A letter with a decision of the gemeente (for example a GAS-boete) says how and until
  // when you can react in writing (verweer, bezwaar); after that date it is often too late ⚖️ (wet
  // 24 juni 2013 betreffende de gemeentelijke administratieve sancties, art. 25 and 31; the term
  // differs per procedure, so the tip names no number; stad.gent and antwerpen.be GAS pages).
  // ⚖️ check: Everyone is equal before the law; discrimination is forbidden ⚖️ (Grondwet art. 10
  // and 11; Antidiscriminatiewet 10 mei 2007; Unia, unia.be).
  // ⚖️ check: Questioned by the police as a suspect? You may talk to a lawyer first, and have one
  // with you ⚖️ (Salduzwet 13 augustus 2011, Wetboek van strafvordering art. 47bis).
  // ⚖️ check: A first advice from a lawyer is free, for everyone, at a justitiehuis or another
  // place of the Commissie voor Juridische Bijstand (juridische eerstelijnsbijstand) ⚖️
  // (vlaanderen.be "Juridische eerstelijnsbijstand", search result of 31 October 2026; Gerechtelijk
  // Wetboek art. 508/1 and following).
  beTip({
    slug: 'police',
    lessonId: 'be.l.police',
    emoji: '👮',
    title: 'Your identity card and your rights',
    body:
      'From 15, you must always carry your identity card (or residence card), and show it when the police ask. ' +
      'Do you get a letter with a decision you do not agree with, for example a fine from the gemeente? Then you can react in writing (bezwaar maken). The letter says how, and until when. Do it before that date. ' +
      'Everyone is equal before the law. Does the police want to question you? Then you may talk to a lawyer first. A first advice from a lawyer is free, at the justitiehuis. Discrimination? Unia can help.',
    phrase: ['Ik ben het niet eens met deze beslissing. Ik maak bezwaar.', 'I do not agree with this decision. I am objecting.'],
    situation: 'You get a fine from the gemeente in a letter. You think it is not right. The letter gives a date to react. What do you do?',
    options: [
      'React in writing, before the date in the letter.',
      'Call them once, and wait until they call you back.',
      'Wait: after that date, it stops by itself.',
    ],
    why: 'You react in writing, before the date in the letter. After that date, it is often too late. The justitiehuis can give you a free first advice.',
  }),
];

export const be: BeTaal = { nl: 'u.society', unit, tips };
