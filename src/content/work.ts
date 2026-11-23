import { ADVICE_LINE } from './adviceLine';
import type { ChatLine, Dialogue, Lesson, Unit } from './types';
import { sayingsUnit } from './sayings';

/**
 * Work and rights in the Netherlands: contracts, papers and housing, pay, house rules, rights,
 * leave and sickness.
 * Still language units first (Dutch words and sentences learners will hear and see); the
 * "Zo werkt het hier" tip of each lesson carries the practical information.
 *
 * Only stable, general facts. No amounts that change every year (like the minimum wage in
 * euros): we say where to check instead. Every tip ends with the same "ask for advice" line
 * (house rules: "ask your supervisor").
 * Also the basis unit "Smart tools" (toolsUnit: translation apps, captions, keep learning),
 * which curriculum.ts places right after "Asking for help".
 * Every id is also a translation key in src/i18n/work/<lang>.ts.
 */

const line = (id: string, nl: string, en: string): ChatLine => ({ id, nl, en });
const chat = (prompt: ChatLine, reply: ChatLine): Dialogue => ({ prompt, reply });

/** Closing line of most tips: this is general information, not advice for one person (src/content/adviceLine.ts). */
export { ADVICE_LINE };

const coreUnits: Unit[] = [
  {
    id: 'u.contract',
    title: 'Work and contracts',
    titleNl: 'Werk en contract',
    emoji: '📝',
    color: '#2f6db5',
    lessons: [
      {
        id: 'l.findwork',
        title: 'Finding work',
        words: [
          { id: 'w.vacature', nl: 'de vacature', en: 'the job opening', emoji: '📢' },
          { id: 'w.uitzendbureau', nl: 'het uitzendbureau', en: 'the temp agency', emoji: '🏢' },
          { id: 'w.solliciteren', nl: 'solliciteren', en: 'to apply for a job', emoji: '🙋' },
          { id: 'w.contract', nl: 'het contract', en: 'the contract', emoji: '📄' },
          { id: 'w.tekenen', nl: 'tekenen', en: 'to sign', emoji: '✍️' },
          { id: 'w.tijdelijk', nl: 'tijdelijk', en: 'temporary', emoji: '⏳', picture: false },
        ],
        sentences: [
          { id: 's.findwork.1', nl: 'Ik wil solliciteren.', en: 'I want to apply for a job.' },
          { id: 's.findwork.2', nl: 'Is het contract tijdelijk of vast?', en: 'Is the contract temporary or permanent?' },
          { id: 's.findwork.3', nl: 'Mag ik een kopie van het contract?', en: 'May I have a copy of the contract?' },
        ],
        dialogues: [
          chat(
            line('c.findwork.q', 'Wat voor werk zoek je?', 'What kind of work are you looking for?'),
            line('c.findwork.a', 'Ik zoek werk in een magazijn.', 'I am looking for work in a warehouse.'),
          ),
        ],
      },
      {
        id: 'l.contract',
        title: 'Your contract',
        words: [
          { id: 'w.werkgever', nl: 'de werkgever', en: 'the employer', emoji: '🏭' },
          { id: 'w.uren', nl: 'de uren', en: 'the hours', emoji: '🕐' },
          { id: 'w.oproepkracht', nl: 'de oproepkracht', en: 'the on-call worker', emoji: '📲' },
          { id: 'w.proeftijd', nl: 'de proeftijd', en: 'the trial period', emoji: '🧪', picture: false },
          { id: 'w.opzegtermijn', nl: 'de opzegtermijn', en: 'the notice period', emoji: '📆', picture: false },
          { id: 'w.cao', nl: 'de cao', en: 'the collective agreement', emoji: '📘', picture: false },
        ],
        sentences: [
          { id: 's.contract.1', nl: 'Hoeveel uur werk ik per week?', en: 'How many hours do I work per week?' },
          { id: 's.contract.2', nl: 'Hoe lang is de proeftijd?', en: 'How long is the trial period?' },
          { id: 's.contract.3', nl: 'Welke cao geldt voor mij?', en: 'Which collective agreement applies to me?' },
        ],
        dialogues: [
          chat(
            line('c.contract.q', 'Kun je morgen komen werken?', 'Can you come to work tomorrow?'),
            line('c.contract.a', 'Ja, hoe laat moet ik er zijn?', 'Yes, what time must I be there?'),
          ),
        ],
      },
      {
        // "het uitzendbureau" (w.uitzendbureau, l.findwork), "de uren" (w.uren, l.contract),
        // "doorgeven" (w.doorgeven, l.privacy) and "de loonstrook" (w.loonstrook, l.payslip) are
        // already words of other lessons: here they come in the sentences, the chat and the tip.
        // "verlengen" has a moving picture on its intro card only (`picture: 'motion'`, the second
        // round, 5 November 2026): the contract's bar on a row of weeks grows past its old end.
        id: 'l.agency',
        title: 'Working through an agency',
        words: [
          { id: 'w.uitzendkracht', nl: 'de uitzendkracht', en: 'the temp worker', emoji: '👷' },
          { id: 'w.intercedent', nl: 'de intercedent', en: 'the agency contact person', emoji: '🧑‍💼' },
          { id: 'w.urenbriefje', nl: 'het urenbriefje', en: 'the timesheet', emoji: '🗒️' },
          { id: 'w.opdracht', nl: 'de opdracht', en: 'the assignment (the job at a company)', emoji: '📋', picture: false },
          { id: 'w.verlengen', nl: 'verlengen', en: 'to extend (make longer)', emoji: '⏩', picture: 'motion' },
          { id: 'w.uitbetalen', nl: 'uitbetalen', en: 'to pay out', emoji: '💰', picture: false },
        ],
        sentences: [
          { id: 's.agency.1', nl: 'Ik werk via een uitzendbureau.', en: 'I work through a temp agency.' },
          { id: 's.agency.2', nl: 'Wordt mijn opdracht verlengd?', en: 'Will my assignment be extended?' },
          { id: 's.agency.3', nl: 'Wanneer stopt mijn opdracht?', en: 'When does my assignment end?' },
        ],
        dialogues: [
          chat(
            line('c.agency.q', 'Heb je je uren doorgegeven?', 'Have you handed in your hours?'),
            line('c.agency.a', 'Ja, gisteren in de app.', 'Yes, yesterday in the app.'),
          ),
        ],
      },
    ],
  },
  {
    id: 'u.papers',
    title: 'Housing and papers',
    titleNl: 'Wonen en papieren',
    emoji: '🪪',
    color: '#a35a2a',
    lessons: [
      {
        id: 'l.bsn',
        title: 'Your BSN and papers',
        words: [
          { id: 'w.bsn', nl: 'het BSN', en: 'the citizen service number', emoji: '🔢', picture: false },
          { id: 'w.identiteitsbewijs', nl: 'het identiteitsbewijs', en: 'the ID document', emoji: '🪪' },
          { id: 'w.gemeente', nl: 'de gemeente', en: 'the town hall, the municipality', emoji: '🏘️' },
          { id: 'w.inschrijven', nl: 'inschrijven', en: 'to register', emoji: '🖊️' },
          { id: 'w.adres', nl: 'het adres', en: 'the address', emoji: '📮' },
          { id: 'w.zorgverzekering', nl: 'de zorgverzekering', en: 'the health insurance', emoji: '🏥', picture: 'hook' },
        ],
        sentences: [
          { id: 's.bsn.1', nl: 'Ik schrijf me in bij de gemeente.', en: 'I register at the town hall.' },
          { id: 's.bsn.2', nl: 'Mijn adres is veranderd.', en: 'My address has changed.' },
          { id: 's.bsn.3', nl: 'Ik log in met DigiD.', en: 'I log in with DigiD.' },
        ],
        dialogues: [
          chat(
            line('c.bsn.q', 'Mag ik je identiteitsbewijs zien?', 'May I see your ID?'),
            line('c.bsn.a', 'Ja, hier is mijn paspoort.', 'Yes, here is my passport.'),
          ),
        ],
      },
      {
        id: 'l.housing',
        title: 'Housing',
        words: [
          { id: 'w.kamer', nl: 'de kamer', en: 'the room', emoji: '🛏️' },
          { id: 'w.huur', nl: 'de huur', en: 'the rent', emoji: '🔑', picture: 'hook' },
          { id: 'w.huurcontract', nl: 'het huurcontract', en: 'the rental contract', emoji: '📑' },
          { id: 'w.borg', nl: 'de borg', en: 'the deposit', emoji: '💰', picture: 'hook' },
          { id: 'w.huisbaas', nl: 'de huisbaas', en: 'the landlord', emoji: '🧑‍💼' },
          { id: 'w.inhouden', nl: 'inhouden', en: 'to take off (from your pay)', emoji: '✂️', picture: false },
        ],
        sentences: [
          { id: 's.housing.1', nl: 'Hoeveel is de huur per week?', en: 'How much is the rent per week?' },
          { id: 's.housing.2', nl: 'Krijg ik de borg terug?', en: 'Do I get the deposit back?' },
          { id: 's.housing.3', nl: 'Ik wil een apart huurcontract.', en: 'I want a separate rental contract.' },
        ],
        dialogues: [
          chat(
            line('c.housing.q', 'De huur houden we in op je loon.', 'We take the rent off your pay.'),
            line('c.housing.a', 'Dan wil ik dat op papier.', 'Then I want that on paper.'),
          ),
        ],
      },
    ],
  },
  {
    id: 'u.pay',
    title: 'Pay',
    titleNl: 'Loon',
    emoji: '💶',
    color: '#2c7a7b',
    lessons: [
      {
        id: 'l.payslip',
        title: 'Your payslip',
        words: [
          { id: 'w.loon', nl: 'het loon', en: 'the pay, the wage', emoji: '💶' },
          { id: 'w.bruto', nl: 'bruto', en: 'gross (before tax)', emoji: '🧾', picture: 'hook' },
          { id: 'w.netto', nl: 'netto', en: 'net (what you get)', emoji: '👛', picture: 'hook' },
          { id: 'w.loonstrook', nl: 'de loonstrook', en: 'the payslip', emoji: '📃' },
          { id: 'w.belasting', nl: 'de belasting', en: 'the tax', emoji: '🏛️', picture: 'hook' },
          { id: 'w.uurloon', nl: 'het uurloon', en: 'the pay per hour', emoji: '⏱️' },
        ],
        sentences: [
          { id: 's.payslip.1', nl: 'Wat is mijn uurloon?', en: 'What is my pay per hour?' },
          { id: 's.payslip.2', nl: 'Mijn loonstrook klopt niet.', en: 'My payslip is not right.' },
          { id: 's.payslip.3', nl: 'Netto is minder dan bruto.', en: 'Net is less than gross.' },
        ],
        dialogues: [
          chat(
            line('c.payslip.q', 'Heb je je loonstrook gekregen?', 'Did you get your payslip?'),
            line('c.payslip.a', 'Ja, maar er missen uren.', 'Yes, but some hours are missing.'),
          ),
        ],
      },
      {
        id: 'l.extra',
        title: 'Extra money',
        words: [
          { id: 'w.vakantiegeld', nl: 'het vakantiegeld', en: 'the holiday pay', emoji: '🏖️' },
          { id: 'w.overuren', nl: 'de overuren', en: 'the overtime hours', emoji: '🕘' },
          { id: 'w.toeslag', nl: 'de toeslag', en: 'the extra pay', emoji: '➕', picture: false },
          { id: 'w.minimumloon', nl: 'het minimumloon', en: 'the minimum wage', emoji: '📏', picture: false },
          { id: 'w.bankrekening', nl: 'de bankrekening', en: 'the bank account', emoji: '🏦' },
          { id: 'w.betalen', nl: 'betalen', en: 'to pay', emoji: '💳' },
        ],
        sentences: [
          { id: 's.extra.1', nl: 'Krijg ik toeslag voor nachtwerk?', en: 'Do I get extra pay for night work?' },
          { id: 's.extra.2', nl: 'Worden de overuren betaald?', en: 'Are the overtime hours paid?' },
          { id: 's.extra.3', nl: 'Mijn loon komt op mijn bankrekening.', en: 'My pay goes into my bank account.' },
        ],
        dialogues: [
          chat(
            line('c.extra.q', 'Kun je vandaag twee uur langer blijven?', 'Can you stay two hours longer today?'),
            line('c.extra.a', 'Ja, schrijf je de overuren op?', 'Yes, will you write down the overtime?'),
          ),
        ],
      },
    ],
  },
  {
    id: 'u.house',
    title: 'House rules',
    titleNl: 'Huisregels',
    emoji: '🏠',
    color: '#8a6d1f',
    lessons: [
      {
        id: 'l.phone',
        title: 'Your phone at work',
        words: [
          { id: 'w.telefoon', nl: 'de telefoon', en: 'the phone', emoji: '📱' },
          { id: 'w.appen', nl: 'appen', en: 'to send a message (app)', emoji: '💬' },
          { id: 'w.kluisje', nl: 'het kluisje', en: 'the locker', emoji: '🔐' },
          { id: 'w.uitzetten', nl: 'uitzetten', en: 'to switch off', emoji: '📴' },
          { id: 'w.prive', nl: 'privé', en: 'private, personal', emoji: '🏠', picture: false },
          { id: 'w.foto', nl: 'de foto', en: 'the photo', emoji: '📷' },
        ],
        sentences: [
          { id: 's.phone.1', nl: 'Mijn telefoon ligt in mijn kluisje.', en: 'My phone is in my locker.' },
          { id: 's.phone.2', nl: 'Ik zet mijn telefoon uit.', en: 'I switch off my phone.' },
          { id: 's.phone.3', nl: 'Mag ik hier een foto maken?', en: 'May I take a photo here?' },
        ],
        dialogues: [
          chat(
            line('c.phone.q', 'Geen telefoon bij de machine, oké?', 'No phone near the machine, okay?'),
            line('c.phone.a', 'Oké, ik app in de pauze.', 'Okay, I will send messages in the break.'),
          ),
        ],
      },
      {
        id: 'l.smoking',
        title: 'Smoking',
        words: [
          { id: 'w.roken', nl: 'roken', en: 'to smoke', emoji: '🚬' },
          { id: 'w.rookplek', nl: 'de rookplek', en: 'the smoking area', emoji: '📍' },
          { id: 'w.verboden', nl: 'verboden', en: 'not allowed, forbidden', emoji: '🚫' },
          { id: 'w.buiten', nl: 'buiten', en: 'outside', emoji: '🌳' },
          { id: 'w.esigaret', nl: 'de e-sigaret', en: 'the e-cigarette (vape)', emoji: '💨' },
          { id: 'w.brandbaar', nl: 'brandbaar', en: 'can burn easily (flammable)', emoji: '🛢️' },
        ],
        sentences: [
          { id: 's.smoking.1', nl: 'Roken is hier verboden.', en: 'Smoking is not allowed here.' },
          { id: 's.smoking.2', nl: 'Waar is de rookplek?', en: 'Where is the smoking area?' },
          { id: 's.smoking.3', nl: 'Ik rook alleen buiten in de pauze.', en: 'I only smoke outside in the break.' },
        ],
        dialogues: [
          chat(
            line('c.smoking.q', 'Ga je mee roken?', 'Are you coming to smoke?'),
            line('c.smoking.a', 'Nee, ik heb nog geen pauze.', 'No, I do not have my break yet.'),
          ),
        ],
      },
    ],
  },
  {
    id: 'u.rights',
    title: 'Rules and rights',
    titleNl: 'Regels en rechten',
    emoji: '⚖️',
    color: '#6b4fa0',
    lessons: [
      {
        id: 'l.health',
        title: 'Safe and healthy work',
        words: [
          { id: 'w.arbowet', nl: 'de Arbowet', en: 'the health and safety law', emoji: '📜', picture: false },
          { id: 'w.veilig', nl: 'veilig', en: 'safe', emoji: '🛡️', picture: false },
          { id: 'w.werktijden', nl: 'de werktijden', en: 'the working hours', emoji: '🕗' },
          { id: 'w.rust', nl: 'de rust', en: 'the rest', emoji: '😌' },
          { id: 'w.beschermingsmiddelen', nl: 'de beschermingsmiddelen', en: 'the protective equipment', emoji: '🦺' },
          { id: 'w.arbeidsinspectie', nl: 'de Arbeidsinspectie', en: 'the Labour Inspectorate', emoji: '🔍', picture: false },
        ],
        sentences: [
          { id: 's.health.1', nl: 'Ik heb recht op pauze.', en: 'I have a right to a break.' },
          { id: 's.health.2', nl: 'Werken moet veilig zijn.', en: 'Work must be safe.' },
          { id: 's.health.3', nl: 'Ik meld het bij de Arbeidsinspectie.', en: 'I report it to the Labour Inspectorate.' },
        ],
        dialogues: [
          chat(
            line('c.health.q', 'Je moet nu pauze nemen.', 'You must take a break now.'),
            line('c.health.a', 'Oké, ik ga even zitten.', 'Okay, I will sit down for a bit.'),
          ),
        ],
      },
      {
        id: 'l.rights',
        title: 'Your rights',
        words: [
          { id: 'w.recht', nl: 'het recht', en: 'the right', emoji: '✅', picture: false },
          { id: 'w.discriminatie', nl: 'de discriminatie', en: 'the discrimination', emoji: '🚫', picture: false },
          { id: 'w.vakbond', nl: 'de vakbond', en: 'the union', emoji: '✊', picture: false },
          { id: 'w.juridischloket', nl: 'het Juridisch Loket', en: 'the free legal help desk', emoji: '⚖️', picture: false },
          { id: 'w.klacht', nl: 'de klacht', en: 'the complaint', emoji: '📣', picture: false },
          { id: 'w.ontslag', nl: 'het ontslag', en: 'the dismissal', emoji: '🚪', picture: false },
        ],
        sentences: [
          { id: 's.rights.1', nl: 'Ik wil een klacht indienen.', en: 'I want to make a complaint.' },
          { id: 's.rights.2', nl: 'Ik ben lid van de vakbond.', en: 'I am a member of the union.' },
          { id: 's.rights.3', nl: 'Dit is discriminatie.', en: 'This is discrimination.' },
        ],
        dialogues: [
          chat(
            line('c.rights.q', 'Teken hier voor je ontslag.', 'Sign here for your dismissal.'),
            line('c.rights.a', 'Nee, ik teken nog niet.', 'No, I am not signing yet.'),
          ),
        ],
      },
      // "Moet het of mag het?" (8 November 2026, the NT2 review): the opposite of "moeten" is "niet
      // hoeven", not "niet moeten" (a classic trap: German "muss nicht", English "must not"). At the
      // end of the unit, so no existing lesson changes place. "mogen", "verboden", "verplicht", "kiezen"
      // and "overwerken" were taught before: the sentences use them, the words here are new.
      {
        id: 'l.mustmay',
        title: 'Must, or may you choose?',
        words: [
          { id: 'w.moeten', nl: 'moeten', en: 'to have to, must', emoji: '🟥', picture: false },
          { id: 'w.niethoeven', nl: 'niet hoeven', en: 'not to have to', emoji: '⬜', picture: false },
          { id: 'w.nodig', nl: 'nodig', en: 'needed, necessary', emoji: '❗', picture: false },
          { id: 'w.vrijwillig', nl: 'vrijwillig', en: 'voluntary, by choice', emoji: '🙋', picture: false },
          { id: 'w.keuze', nl: 'de keuze', en: 'the choice', emoji: '🤔', picture: false },
          { id: 'w.regel', nl: 'de regel', en: 'the rule', emoji: '📜', picture: false },
        ],
        sentences: [
          { id: 's.mustmay.1', nl: 'Moet ik dit tekenen?', en: 'Do I have to sign this?' },
          { id: 's.mustmay.2', nl: 'Nee, je hoeft niet te tekenen.', en: 'No, you do not have to sign.' },
          { id: 's.mustmay.3', nl: 'Dat is de regel: een helm is verplicht.', en: 'That is the rule: a helmet is compulsory.' },
        ],
        dialogues: [
          chat(
            line('c.mustmay.q', 'Moet ik zaterdag overwerken?', 'Do I have to work overtime on Saturday?'),
            line('c.mustmay.a', 'Nee, dat is niet nodig. Het is vrijwillig.', 'No, that is not necessary. It is voluntary.'),
          ),
        ],
      },
    ],
  },
  // "Verlof" and "Ziekte" were one unit, "Verlof en ziekte" (u.leave), until 5 November 2026 (the
  // owner's request: two topics, and a new lesson about coming back after an illness). u.leave keeps
  // its id (progress and certificates stay): Days off and Children and work (leaveMore below).
  // "Sick at home" (l.illness, same id) moved to the new unit u.sick, with "Back to work after
  // illness" (sickMore below). Course order: Ziekte right after Verlof (workUnits).
  {
    id: 'u.leave',
    title: 'Leave',
    titleNl: 'Verlof',
    emoji: '🌴',
    color: '#b5487a',
    lessons: [
      {
        id: 'l.leave',
        title: 'Days off',
        words: [
          { id: 'w.vakantiedagen', nl: 'de vakantiedagen', en: 'the days off (holiday)', emoji: '🏝️' },
          { id: 'w.verlof', nl: 'het verlof', en: 'the leave', emoji: '🌴', picture: 'hook' },
          { id: 'w.aanvragen', nl: 'aanvragen', en: 'to ask for, to apply for', emoji: '📝', picture: false },
          { id: 'w.feestdag', nl: 'de feestdag', en: 'the public holiday', emoji: '🎉', picture: 'hook' },
          { id: 'w.vrij', nl: 'vrij', en: 'free, not working', emoji: '🆓', picture: false },
          { id: 'w.calamiteitenverlof', nl: 'het calamiteitenverlof', en: 'the emergency leave', emoji: '🚨', picture: false },
        ],
        sentences: [
          { id: 's.leave.1', nl: 'Ik wil verlof aanvragen.', en: 'I want to ask for leave.' },
          { id: 's.leave.2', nl: 'Ben ik vrij op de feestdag?', en: 'Am I free on the public holiday?' },
          { id: 's.leave.3', nl: 'Ik heb een noodgeval thuis.', en: 'I have an emergency at home.' },
        ],
        dialogues: [
          chat(
            line('c.leave.q', 'Wanneer wil je op vakantie?', 'When do you want to go on holiday?'),
            line('c.leave.a', 'In juli, drie weken.', 'In July, three weeks.'),
          ),
        ],
      },
    ],
  },
  {
    id: 'u.sick',
    title: 'Illness',
    titleNl: 'Ziekte',
    emoji: '🩹',
    color: '#2f7f6f',
    lessons: [
      {
        id: 'l.illness',
        title: 'Sick at home',
        words: [
          { id: 'w.ziekmelden', nl: 'ziekmelden', en: 'to call in sick', emoji: '🤒' },
          { id: 'w.betermelden', nl: 'betermelden', en: 'to say you are better', emoji: '🙂' },
          { id: 'w.bedrijfsarts', nl: 'de bedrijfsarts', en: 'the company doctor', emoji: '👩‍⚕️' },
          { id: 'w.ziekte', nl: 'de ziekte', en: 'the illness', emoji: '🦠' },
          { id: 'w.doorbetalen', nl: 'doorbetalen', en: 'to keep paying', emoji: '💶', picture: false },
          { id: 'w.wachtdag', nl: 'de wachtdag', en: 'the waiting day (no pay)', emoji: '⏸️', picture: 'hook' },
        ],
        sentences: [
          { id: 's.illness.1', nl: 'Ik meld me ziek.', en: 'I am calling in sick.' },
          { id: 's.illness.2', nl: 'Ik heb een afspraak met de bedrijfsarts.', en: 'I have an appointment with the company doctor.' },
          { id: 's.illness.3', nl: 'Morgen kom ik weer werken.', en: 'Tomorrow I will come back to work.' },
        ],
        dialogues: [
          chat(
            line('c.illness.q', 'Wat heb je precies?', 'What exactly is wrong with you?'),
            line('c.illness.a', 'Dat bespreek ik met de bedrijfsarts.', 'I will talk about that with the company doctor.'),
          ),
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------------------------------
 * More units, written with small helpers: lesson slug "x" gives l.x, s.x.1-3, c.x.q/a and tip c.x
 * (options c.x.o1-3, the first is the best one; shuffled when shown). Word ids are w.<id>.
 * ---------------------------------------------------------------------------------------- */

/** A word row; a fifth `false` marks an abstract word (no picture, see Word.picture). */
/**
 * The fifth field: `false` for an abstract word, `'hook'` for a memory picture, `'motion'` for a
 * moving picture on the intro card only (Word.picture), or the picture's own look (Word.look).
 */
type WordRow = [id: string, nl: string, en: string, emoji: string, picture?: false | 'hook' | 'motion' | { look: string }];
type Pair = [nl: string, en: string];
/** A sentence; `alt`: other word orders that are also right when building it (Sentence.alt). */
type SentenceRow = [nl: string, en: string, alt?: string[]];

const lesson = (slug: string, title: string, words: WordRow[], sentences: SentenceRow[], [q, a]: [Pair, Pair]): Lesson => ({
  id: `l.${slug}`,
  title,
  words: words.map(([id, nl, en, emoji, picture]) => ({ id: `w.${id}`, nl, en, emoji, ...(picture === false || picture === 'hook' || picture === 'motion' ? { picture } : picture ?? {}) })),
  sentences: sentences.map(([nl, en, alt], i) => ({ id: `s.${slug}.${i + 1}`, nl, en, ...(alt ? { alt } : {}) })),
  dialogues: [chat(line(`c.${slug}.q`, ...q), line(`c.${slug}.a`, ...a))],
});

const unit = (slug: string, title: string, titleNl: string, emoji: string, color: string, lessons: Lesson[]): Unit => ({
  id: `u.${slug}`,
  title,
  titleNl,
  emoji,
  color,
  lessons,
});

// ---- Applying for a job (before "Work and contracts") ----

const applyUnit = unit('apply', 'Applying for a job', 'Solliciteren', '📨', '#4a6fa5', [
  lesson(
    'cv',
    'Your CV and letter',
    [
      ['cv', 'het cv', 'the CV', '🗂️'],
      ['motivatie', 'de motivatie', 'the motivation (why you want the job)', '💡', false],
      ['ervaring', 'de ervaring', 'the experience', '🧰', false],
      ['opleiding', 'de opleiding', 'the education, the training', '🎓'],
      ['vaardigheden', 'de vaardigheden', 'the skills', '🤹', false],
      ['referentie', 'de referentie', 'the reference (someone who can tell about your work)', '👍', false],
    ],
    [
      ['Hier is mijn cv.', 'Here is my CV.'],
      ['Ik heb ervaring in de bouw.', 'I have experience in construction.'],
      ['Ik spreek drie talen.', 'I speak three languages.'],
    ],
    [['Heb je een referentie?', 'Do you have a reference?'], ['Ja, mijn vorige baas.', 'Yes, my previous boss.']],
  ),
  lesson(
    'interview',
    'The job interview',
    [
      ['sollicitatiegesprek', 'het sollicitatiegesprek', 'the job interview', '🪑'],
      ['begroeten', 'begroeten', 'to greet', '👋'],
      ['vertellen', 'vertellen', 'to tell', '💬'],
      ['vraagstellen', 'een vraag stellen', 'to ask a question', '🙋'],
      ['salaris', 'het salaris', 'the salary', '💶'],
      ['functie', 'de functie', 'the job, the position', '💼', false],
    ],
    [
      ['Ik heb een sollicitatiegesprek.', 'I have a job interview.'],
      ['Ik leer nog Nederlands.', 'I am still learning Dutch.'],
      ['Wanneer hoor ik iets van u?', 'When will I hear from you?'],
    ],
    [
      ['Vertel eens iets over jezelf.', 'Tell me something about yourself.'],
      ['Ik heb vijf jaar in een magazijn gewerkt.', 'I worked in a warehouse for five years.'],
    ],
  ),
]);

// ---- House rules: lessons 3 and 4 ----

const houseMore: Lesson[] = [
  lesson(
    'clock',
    'Clocking in and on time',
    [
      ['inklokken', 'inklokken', 'to clock in', '🟢'],
      ['uitklokken', 'uitklokken', 'to clock out', '🔴'],
      ['pasje', 'het pasje', 'the (staff) card', '💳'],
      ['prikklok', 'de prikklok', 'the time clock', '⏲️'],
      ['optijd', 'op tijd', 'on time', '⏰'],
      ['rooster', 'het rooster', 'the work schedule', '🗓️'],
    ],
    [
      ['Ik klok in om zes uur.', 'I clock in at six o’clock.'],
      ['Ik ben mijn pasje vergeten.', 'I forgot my card.'],
      ['Waar hangt het rooster?', 'Where is the work schedule?'],
    ],
    [['Wil je even voor mij inklokken?', 'Will you clock in for me?'], ['Nee, dat mag niet.', 'No, that is not allowed.']],
  ),
  lesson(
    'hygiene',
    'Alcohol, drugs and hygiene',
    [
      ['alcohol', 'de alcohol', 'the alcohol', '🍺'],
      ['medicijn', 'het medicijn', 'the medicine', '💊'],
      ['handenwassen', 'handen wassen', 'to wash hands', '🧼'],
      ['werkkleding', 'de werkkleding', 'the work clothes', '👕'],
      ['haarnetje', 'het haarnetje', 'the hairnet', '🧢'],
      ['schoon', 'schoon', 'clean', '✨'],
    ],
    [
      ['Was je handen voor het werk.', 'Wash your hands before work.'],
      ['Alcohol en drugs zijn verboden.', 'Alcohol and drugs are not allowed.'],
      ['Mijn werkkleding is schoon.', 'My work clothes are clean.'],
    ],
    [['Heb je je haarnetje op?', 'Are you wearing your hairnet?'], ['Ja, en ik heb mijn ring afgedaan.', 'Yes, and I took off my ring.']],
  ),
];

// ---- Getting along (after "House rules") ----

const socialUnit = unit('social', 'Getting along', 'Omgang met collega’s', '☕', '#3a7d5c', [
  lesson(
    'smalltalk',
    'Small talk and breaks',
    [
      ['weekend', 'het weekend', 'the weekend', '🛋️', { look: 'kalender/weekend' }],
      ['koffie', 'de koffie', 'the coffee', '☕'],
      ['gezellig', 'gezellig', 'cosy, nice together', '🥰', false],
      ['weer', 'het weer', 'the weather', '🌦️'],
      ['verjaardag', 'de verjaardag', 'the birthday', '🎂'],
      ['gefeliciteerd', 'gefeliciteerd', 'congratulations', '🥳'],
    ],
    [
      ['Hoe was je weekend?', 'How was your weekend?'],
      ['Mag ik bij jullie zitten?', 'May I sit with you?'],
      ['Het is lekker weer vandaag.', 'The weather is nice today.'],
    ],
    [['Wat heb je dit weekend gedaan?', 'What did you do this weekend?'], ['Ik heb gevoetbald met vrienden.', 'I played football with friends.']],
  ),
  lesson(
    'mistakes',
    'Feedback and mistakes',
    [
      ['fout', 'de fout', 'the mistake', '❌'],
      ['compliment', 'het compliment', 'the compliment', '👏'],
      // "de feedback" says on its card what it is (5 November 2026, with "Feedback en overleg",
      // u.feedback, whose tip c.getfeedback explains it further): what someone says about your work.
      ['feedback', 'de feedback', 'the feedback (what someone says about your work)', '🗨️', false],
      ['uitleggen', 'uitleggen', 'to explain', '🧑‍🏫'],
      ['leren', 'leren', 'to learn', '📚'],
      ['verbeteren', 'verbeteren', 'to improve, to correct', '🔧', 'motion'],
    ],
    [
      ['Sorry, ik heb een fout gemaakt.', 'Sorry, I made a mistake.'],
      ['Kun je het uitleggen?', 'Can you explain it?'],
      ['Bedankt voor het compliment!', 'Thank you for the compliment!'],
    ],
    [['Goed gedaan, zeg!', 'Well done!'], ['Dank je, dat is fijn om te horen.', 'Thank you, that is nice to hear.']],
  ),
  lesson(
    'respect',
    'Respect for everyone',
    [
      ['respect', 'het respect', 'the respect', '🤝', false],
      ['gelijk', 'gelijk', 'equal', '🟰', false],
      ['grens', 'de grens', 'the limit, the boundary', '🚧', false],
      ['neezeggen', 'nee zeggen', 'to say no', '🙅'],
      ['pesten', 'pesten', 'to bully', '😣'],
      ['vertrouwenspersoon', 'de vertrouwenspersoon', 'the confidential adviser', '🫂'],
    ],
    [
      ['Iedereen is hier gelijk.', 'Everyone is equal here.'],
      ['Dit vind ik niet oké.', 'I am not okay with this.'],
      ['Stop, dit is mijn grens.', 'Stop, this is my limit.'],
    ],
    [['Wat is er? Je kijkt verdrietig.', 'What is wrong? You look sad.'], ['Een collega pest mij.', 'A colleague is bullying me.']],
  ),
  lesson(
    'gossip',
    'Gossip and social media',
    [
      ['roddelen', 'roddelen', 'to gossip', '🤫'],
      ['posten', 'posten', 'to post (online)', '📤'],
      ['groepsapp', 'de groepsapp', 'the group chat', '💭'],
      ['socialemedia', 'de sociale media', 'social media', '🌐', false],
      ['delen', 'delen', 'to share', '↗️'],
      ['screenshot', 'de screenshot', 'the screenshot', '🖼️'],
    ],
    [
      ['Ik roddel niet over collega’s.', 'I do not gossip about colleagues.'],
      ['Ik zet geen foto’s van het werk online.', 'I do not put photos of work online.'],
      ['Zeg het liever direct tegen mij.', 'I would rather you say it to me directly.'],
    ],
    [['Heb je gehoord wat Mark heeft gedaan?', 'Did you hear what Mark did?'], ['Nee, en ik praat liever niet over hem.', 'No, and I would rather not talk about him.']],
  ),
  lesson(
    'boundaries',
    'Crossing the line',
    [
      ['aanraken', 'aanraken', 'to touch', '✋'],
      ['ongewenst', 'ongewenst', 'unwanted', '🚫', false],
      ['opmerking', 'de opmerking', 'the remark, the comment', '🗯'],
      ['intimidatie', 'de intimidatie', 'the harassment, the intimidation', '😰', false],
      ['getuige', 'de getuige', 'the witness', '👀'],
      ['grapje', 'het grapje', 'the joke', '😜', false],
    ],
    [
      // A boundary is said firmly, not as a polite request ("Raak me niet aan, alstublieft."), the
      // owner's request, 4 November 2026. Its clip is to be recorded again (tests: PENDING_RECORDING).
      ['Blijf van me af.', 'Do not touch me.'],
      ['Die opmerking vind ik niet grappig.', 'I do not find that remark funny.'],
      ['Ik wil iets melden bij de vertrouwenspersoon.', 'I want to report something to the confidential adviser.'],
    ],
    [['Doe niet zo moeilijk, het was maar een grapje.', 'Do not be so difficult, it was only a joke.'], ['Voor mij niet. Ik wil dat je stopt.', 'Not for me. I want you to stop.']],
  ),
]);

// ---- After "Leave" and "Illness": exploitation, calling work, diplomas, health, money, travel, losing your job ----

const laterUnits: Unit[] = [
  unit('exploit', 'Know your rights: exploitation', 'Uitbuiting herkennen', '🛑', '#9b2c2c', [
    lesson(
      'warning',
      'Warning signs',
      [
        ['uitbuiting', 'de uitbuiting', 'the exploitation', '⛓️', false],
        ['paspoort', 'het paspoort', 'the passport', '📕'],
        ['schuld', 'de schuld', 'the debt', '💸', false],
        ['dreigen', 'dreigen', 'to threaten', '🗯️', false],
        ['onderbetaald', 'onderbetaald', 'paid too little', '📉', false],
        ['afpakken', 'afpakken', 'to take away', '🫳'],
      ],
      [
        ['Mijn baas heeft mijn paspoort.', 'My boss has my passport.'],
        ['Ik krijg geen loonstrook.', 'I do not get a payslip.'],
        ['Ik moet een schuld terugbetalen.', 'I must pay back a debt.'],
      ],
      [['Geef je paspoort maar aan mij.', 'Just give your passport to me.'], ['Nee, u mag alleen een kopie maken.', 'No, you may only make a copy.']],
    ),
    lesson(
      'gethelp',
      'Getting help',
      [
        ['politie', 'de politie', 'the police', '🚓'],
        ['anoniem', 'anoniem', 'without your name (anonymous)', '🕶️', false],
        ['melden', 'melden', 'to report', '🔔', false],
        ['hulp', 'de hulp', 'the help', '🆘'],
        ['gevaar', 'het gevaar', 'the danger', '⚠️'],
        ['bang', 'bang', 'afraid', '😨'],
      ],
      [
        ['Ik wil iets melden.', 'I want to report something.'],
        ['Kan dat anoniem?', 'Can I do that without my name?'],
        ['Ik ben bang voor mijn baas.', 'I am afraid of my boss.'],
      ],
      [['Waarmee kan ik je helpen?', 'How can I help you?'], ['Ik word slecht behandeld op mijn werk.', 'I am treated badly at work.']],
    ),
  ]),
  unit('contact', 'Calling and texting work', 'Bellen en appen met je werk', '📞', '#3b6e8f', [
    lesson(
      'callin',
      'Calling in',
      [
        ['telefoontje', 'het telefoontje', 'the phone call', '☎️'],
        ['terugbellen', 'terugbellen', 'to call back', '↩️'],
        ['bereikbaar', 'bereikbaar', 'can be reached (by phone)', '📶', false],
        ['reden', 'de reden', 'the reason', '❔', false],
        ['overmorgen', 'overmorgen', 'the day after tomorrow', '⏩', { look: 'kalender/overmorgen' }],
        ['inspreken', 'inspreken', 'to leave a voice message', '🎙️'],
      ],
      [
        ['Hallo, met Ali.', 'Hello, this is Ali.'],
        ['Ik denk dat ik overmorgen weer kom.', 'I think I will be back the day after tomorrow.'],
        ['Kunt u mij terugbellen?', 'Can you call me back?'],
      ],
      [['Wanneer ben je er weer?', 'When will you be back?'], ['Ik denk maandag.', 'I think on Monday.']],
    ),
    lesson(
      'texting',
      'Messages and the roster app',
      [
        ['bericht', 'het bericht', 'the message', '✉️'],
        ['app', 'de app', 'the app', '📲'],
        ['reageren', 'reageren', 'to reply, to react', '↪️', false],
        ['ruilen', 'ruilen', 'to swap', '🔄', 'motion'],
        ['kijken', 'kijken', 'to look, to check', '👀'],
        ['groet', 'de groet', 'the greeting (at the end of a message)', '💌', false],
      ],
      [
        ['Ik ben tien minuten te laat.', 'I am ten minutes late.'],
        ['Wil iemand mijn dienst ruilen?', 'Does someone want to swap shifts with me?'],
        ['Ik kijk elke dag in de app.', 'I check the app every day.'],
      ],
      [
        ['Kun je zaterdag een extra dienst draaien?', 'Can you do an extra shift on Saturday?'],
        ['Ja, ik reageer meteen in de app.', 'Yes, I will reply in the app right away.'],
      ],
    ),
  ]),
  unit('grow', 'Diplomas and growing', 'Diploma’s en verder komen', '🎓', '#5b5ea6', [
    lesson(
      'certs',
      'Certificates',
      [
        ['certificaat', 'het certificaat', 'the certificate', '🏅'],
        ['cursus', 'de cursus', 'the course', '📖'],
        ['examen', 'het examen', 'the exam', '✏️'],
        ['slagen', 'slagen', 'to pass (an exam)', '✅', false],
        ['heftruckcertificaat', 'het heftruckcertificaat', 'the forklift certificate', '🚜'],
        ['halen', 'halen', 'to get (a certificate)', '🏆', false],
      ],
      [
        ['Ik heb een VCA-certificaat.', 'I have a VCA safety certificate.'],
        ['Ik wil een cursus volgen.', 'I want to take a course.'],
        ['Betaalt de werkgever de cursus?', 'Does the employer pay for the course?'],
      ],
      [['Heb je een heftruckcertificaat?', 'Do you have a forklift certificate?'], ['Nee, maar ik wil het graag halen.', 'No, but I would like to get it.']],
    ),
    lesson(
      'diploma',
      'Your diploma and training',
      [
        ['diploma', 'het diploma', 'the diploma', '📜'],
        ['waarderen', 'laten waarderen', 'to have (a diploma) assessed', '🔎', false],
        ['training', 'de training', 'the training', '🏋️'],
        ['verplicht', 'verplicht', 'required, compulsory', '❗', false],
        ['werktijd', 'de werktijd', 'the working time', '🕰️'],
        ['verderkomen', 'verder komen', 'to get ahead', '📈', false],
      ],
      [
        ['Ik heb een diploma uit mijn land.', 'I have a diploma from my country.'],
        ['Is deze training verplicht?', 'Is this training required?'],
        ['Ik wil verder komen in mijn werk.', 'I want to get ahead in my work.'],
      ],
      [['Wil je een opleiding volgen?', 'Do you want to take a training course?'], ['Ja, graag! Wie betaalt dat?', 'Yes, please! Who pays for it?']],
    ),
  ]),
  unit('health', 'Health', 'Gezondheid', '🩺', '#c0392b', [
    lesson(
      'doctor',
      'Doctor or 112?',
      [
        ['huisarts', 'de huisarts', 'the family doctor (GP)', '🧑‍⚕️'],
        ['huisartsenpost', 'de huisartsenpost', 'the GP service for evening, night and weekend', '🌙'],
        ['apotheek', 'de apotheek', 'the pharmacy', '⚕️'],
        ['recept', 'het recept', 'the prescription', '📋'],
        ['spoed', 'spoed', 'urgent', '⚡', false],
        ['ambulance', 'de ambulance', 'the ambulance', '🚑'],
      ],
      [
        ['Ik wil een afspraak bij de huisarts.', 'I want an appointment with the GP.'],
        ['Waar is de apotheek?', 'Where is the pharmacy?'],
        ['Het heeft spoed.', 'It is urgent.'],
      ],
      [
        ['Huisartsenpost, wat kan ik voor u doen?', 'GP service, what can I do for you?'],
        ['Mijn zoon heeft hoge koorts.', 'My son has a high fever.'],
      ],
    ),
    lesson(
      'insurance',
      'Health insurance',
      [
        ['premie', 'de premie', 'the premium (monthly payment)', '🪙', false],
        ['eigenrisico', 'het eigen risico', 'the own risk (costs you pay first)', '🧮', false],
        ['zorgtoeslag', 'de zorgtoeslag', 'the healthcare allowance', '🤲', false],
        ['verzekeraar', 'de verzekeraar', 'the insurer', '☂️', false],
        ['permaand', 'per maand', 'per month', '📅', false],
        ['vergoeden', 'vergoeden', 'to pay for (cover) costs', '💱', false],
      ],
      [
        ['Ik betaal elke maand premie.', 'I pay a premium every month.'],
        ['Wordt dit vergoed?', 'Is this paid for (covered)?'],
        ['Ik vraag zorgtoeslag aan.', 'I apply for healthcare allowance.'],
      ],
      [['Bij welke verzekeraar zit je?', 'Which insurer are you with?'], ['Dat staat op mijn zorgpas.', 'That is on my health insurance card.']],
    ),
    // Lichaam en klachten (30 October 2026): the body words for calling in sick, an accident and
    // the GP. "de pijn" (w.pijn, l.sick), "tillen" (w.tillen, l.directions) and "de doos" (w.doos,
    // l.things) are already words of other lessons: here they come in the sentences and the chat.
    // "het hoofd", "de rug" and "de buik" are drawn as three cast members holding the sore part,
    // each seen another way (src/pictures/group26.tsx).
    lesson(
      'body',
      'Body and pain',
      [
        ['hoofd', 'het hoofd', 'the head', '👤'],
        ['rug', 'de rug', 'the back (of your body)', '🧍'],
        ['arm', 'de arm', 'the arm', '💪'],
        ['hand', 'de hand', 'the hand', '🖐️'],
        ['buik', 'de buik', 'the belly, the stomach', '😖'],
        ['oog', 'het oog', 'the eye', '👁️'],
      ],
      [
        ['Ik heb pijn in mijn hand.', 'I have pain in my hand.'],
        ['Ik voel me niet goed.', 'I do not feel well.'],
        ['Ik ben op mijn arm gevallen.', 'I fell on my arm.'],
      ],
      [['Waar doet het pijn?', 'Where does it hurt?'], ['In mijn rug. Ik heb een zware doos getild.', 'In my back. I lifted a heavy box.']],
    ),
  ]),
  unit('money', 'Money and letters', 'Geld en post', '✉️', '#7a6a1e', [
    lesson(
      'letters',
      'Official letters',
      [
        ['brief', 'de brief', 'the letter', '📨'],
        ['post', 'de post', 'the mail', '📬'],
        ['belastingdienst', 'de Belastingdienst', 'the Tax Office', '🏛️', false],
        ['aangifte', 'de aangifte', 'the tax return', '🧾', false],
        ['inkomen', 'het inkomen', 'the income', '📊', false],
        ['terugbetalen', 'terugbetalen', 'to pay back', '🔙', false],
      ],
      [
        ['Ik begrijp deze brief niet.', 'I do not understand this letter.'],
        ['Wil je me helpen met deze brief?', 'Will you help me with this letter?'],
        ['Mijn inkomen is veranderd.', 'My income has changed.'],
      ],
      [['Heb je je aangifte al gedaan?', 'Have you done your tax return yet?'], ['Nee, ik doe het voor 1 mei.', 'No, I will do it before 1 May.']],
    ),
    lesson(
      'scams',
      'Watch out for scams',
      [
        ['pincode', 'de pincode', 'the PIN', '#️⃣'],
        ['link', 'de link', 'the link', '🔗'],
        ['oplichter', 'de oplichter', 'the scammer', '🦹'],
        ['sms', 'de sms', 'the text message (SMS)', '📩'],
        ['controleren', 'controleren', 'to check', '✔️', false],
        ['nep', 'nep', 'fake', '🎭', false],
      ],
      [
        ['Ik geef mijn pincode nooit.', 'I never give my PIN.'],
        ['Ik klik niet op de link.', 'I do not click on the link.'],
        ['Dit bericht is nep.', 'This message is fake.'],
      ],
      [['Met de bank. Wat is uw pincode?', 'This is the bank. What is your PIN?'], ['Die geef ik niet. Ik hang op.', 'I will not give it. I am hanging up.']],
    ),
  ]),
  unit('travel', 'Getting to work', 'Naar je werk', '🚲', '#2e7d32', [
    lesson(
      'bike',
      'By bike',
      [
        ['fiets', 'de fiets', 'the bike', '🚲'],
        ['fietspad', 'het fietspad', 'the bike path', '🛣️'],
        ['licht', 'het licht', 'the light', '🔦'],
        ['slot', 'het slot', 'the lock', '🔒'],
        ['stoplicht', 'het stoplicht', 'the traffic light', '🚦'],
        ['bel', 'de bel', 'the bell', '🛎️'],
      ],
      [
        ['Ik fiets naar mijn werk.', 'I cycle to work.'],
        ['Doe je licht aan!', 'Turn on your light!'],
        ['Zet je fiets op slot.', 'Lock your bike.'],
      ],
      [['Hoe kom je naar je werk?', 'How do you get to work?'], ['Met de fiets, twintig minuten.', 'By bike, twenty minutes.']],
    ),
    lesson(
      'transit',
      'Public transport and travel costs',
      [
        ['bus', 'de bus', 'the bus', '🚌'],
        ['trein', 'de trein', 'the train', '🚆'],
        ['inchecken', 'inchecken', 'to check in', '📥'],
        ['uitchecken', 'uitchecken', 'to check out', '📤'],
        ['bankpas', 'de bankpas', 'the bank card', '🏧'],
        ['reiskosten', 'de reiskostenvergoeding', 'the travel allowance', '🎫', false],
      ],
      [
        ['Ik check in met mijn bankpas.', 'I check in with my bank card.'],
        ['Vergeet niet uit te checken.', 'Do not forget to check out.'],
        ['Waar is de bushalte?', 'Where is the bus stop?'],
      ],
      [['Kom je met de trein?', 'Are you coming by train?'], ['Nee, met de bus. Die stopt bij de deur.', 'No, by bus. It stops at the door.']],
    ),
  ]),
  unit('lost', 'Losing your job', 'Werk kwijt', '🧭', '#555b6e', [
    lesson(
      'ww',
      'Unemployment benefit',
      [
        ['uitkering', 'de uitkering', 'the benefit (money from the government)', '💶', false],
        ['ww', 'de WW', 'the unemployment benefit', '🛟', false],
        ['werkloos', 'werkloos', 'unemployed', '😔', false],
        ['uwv', 'het UWV', 'UWV (the office for work and benefits)', '🏢', false],
        ['ontslagnemen', 'ontslag nemen', 'to quit your job', '🚶', false],
        ['werkzoekende', 'de werkzoekende', 'the job seeker', '🔭'],
      ],
      [
        ['Ik vraag WW aan bij het UWV.', 'I apply for unemployment benefit at UWV.'],
        ['Ik ben werkloos.', 'I am unemployed.'],
        ['Mijn contract stopt.', 'My contract ends.'],
      ],
      [
        ['Wat ga je doen nu je contract stopt?', 'What will you do now that your contract ends?'],
        ['Ik vraag meteen WW aan.', 'I will apply for unemployment benefit right away.'],
      ],
    ),
    // Je werk stopt (30 October 2026): what else stops with the job when work, house, insurance
    // and transport come from one agency. "het vakantiegeld" (w.vakantiegeld, l.extra),
    // "uitbetalen" (w.uitbetalen, l.agency), "het Juridisch Loket" (w.juridischloket, l.rights),
    // "de zorgverzekering" (w.zorgverzekering, l.bsn), "de opzegtermijn" (w.opzegtermijn,
    // l.contract) and "het huurcontract" (w.huurcontract, l.housing) are words of other lessons:
    // here they come in the sentences and the chat.
    lesson(
      'jobends',
      'When your job ends',
      [
        ['eindafrekening', 'de eindafrekening', 'the final pay (your last pay when a job ends)', '🧾', false],
        ['opzeggen', 'opzeggen', 'to end (a contract), to cancel', '✂️', false],
        ['uitschrijven', 'uitschrijven', 'to deregister (take your name off a list)', '🗂️', false],
        ['sleutel', 'de sleutel', 'the key', '🗝️'],
        ['verhuizen', 'verhuizen', 'to move (to another home)', '🚚'],
        ['busje', 'het busje', 'the van (a small bus)', '🚐'],
      ],
      [
        ['Krijg ik mijn vakantiegeld en mijn vrije dagen uitbetaald?', 'Do I get my holiday pay and my days off paid out?'],
        ['Ik vraag advies bij het Juridisch Loket.', 'I ask for advice at the Juridisch Loket.'],
        ['Ik regel zelf een nieuwe zorgverzekering.', 'I arrange new health insurance myself.'],
      ],
      [
        ['Je werk stopt vrijdag. Dan moet je ook uit het huis.', 'Your work ends on Friday. Then you must leave the house too.'],
        ['Wat is de opzegtermijn van mijn huurcontract?', 'What is the notice period of my rental contract?'],
      ],
    ),
    lesson(
      'newjob',
      'Looking for new work',
      [
        ['baan', 'de baan', 'the job', '👷', false],
        ['zoeken', 'zoeken', 'to look for', '🔍'],
        ['bewaren', 'bewaren', 'to keep', '🗄️'],
        ['bijwerken', 'bijwerken', 'to update', '🔃', false],
        ['gratis', 'gratis', 'free (no cost)', '🎁'],
        ['nooit', 'nooit', 'never', '⛔', false],
      ],
      [
        ['Ik zoek een nieuwe baan.', 'I am looking for a new job.'],
        ['Ik bewaar mijn loonstroken.', 'I keep my payslips.'],
        ['Werk zoeken is gratis.', 'Looking for work is free.'],
      ],
      [['Kunnen we je bellen als er werk is?', 'Can we call you when there is work?'], ['Ja, graag. Hier is mijn nummer.', 'Yes, please. Here is my number.']],
    ),
  ]),
];

// ---- Sector units (at the end): building site, factory, care, hospitality, cleaning ----

const sectorUnits: Unit[] = [
  unit('build', 'On the building site', 'Op de bouw', '🏗️', '#d97706', [
    lesson(
      'tools',
      'Tools and materials',
      [
        ['steiger', 'de steiger', 'the scaffold', '🏗️'],
        ['ladder', 'de ladder', 'the ladder', '🪜'],
        ['boor', 'de boor', 'the drill', '🔩'],
        ['hamer', 'de hamer', 'the hammer', '🔨'],
        ['beton', 'het beton', 'the concrete', '🧱'],
        ['kraan', 'de kraan', 'the crane', '🪝'],
      ],
      [
        ['Geef me de hamer even.', 'Give me the hammer for a moment.'],
        ['De ladder staat tegen de steiger.', 'The ladder is against the scaffold.'],
        ['Het beton is nog nat.', 'The concrete is still wet.'],
      ],
      [['Waar ligt de boor?', 'Where is the drill?'], ['In de bus, achterin.', 'In the van, in the back.']],
    ),
    lesson(
      'site',
      'Safety on site',
      [
        ['valbeveiliging', 'de valbeveiliging', 'the fall protection (harness)', '🪢'],
        ['last', 'de last', 'the load', '🏋️'],
        ['gat', 'het gat', 'the hole', '🕳️'],
        ['vallen', 'vallen', 'to fall', '⬇️'],
        ['risico', 'het risico', 'the risk', '🎲', false],
        ['weigeren', 'weigeren', 'to refuse', '🙅‍♀️'],
      ],
      [
        ['Pas op, last boven je hoofd!', 'Watch out, load above your head!'],
        ['Draag je valbeveiliging.', 'Wear your fall protection.'],
        ['Ik doe eerst een LMRA.', 'First I do a last-minute risk check.'],
      ],
      [['Kun je even op het dak helpen?', 'Can you help on the roof for a moment?'], ['Ja, maar eerst mijn valbeveiliging.', 'Yes, but first my fall protection.']],
    ),
    // "Measuring" (l.measure, 14 November 2026, the owner's request: every sector unit grows to four lessons).
    lesson(
      'measure',
      'Measuring',
      [
        ['rolmaat', 'de rolmaat', 'the tape measure', '📏'],
        ['waterpas', 'de waterpas', 'the spirit level (it shows if something is straight)', '⚖️'],
        ['meten', 'meten', 'to measure', '📐'],
        ['rechtlijn', 'recht', 'straight (not crooked)', '➖'],
        ['plank', 'de plank', 'the plank, the board', '🪵'],
        ['schroef', 'de schroef', 'the screw', '🪛'],
      ],
      [
        ['Hoe lang is deze plank?', 'How long is this plank?'],
        ['De muur is niet recht.', 'The wall is not straight.'],
        ['Ik meet het twee keer.', 'I measure it twice.'],
      ],
      [['Hoe breed moet het zijn?', 'How wide must it be?'], ['Negentig centimeter. Ik schrijf het op.', 'Ninety centimetres. I am writing it down.']],
    ),
    lesson(
      'siteday',
      'A tidy building site',
      [
        ['bouwplaats', 'de bouwplaats', 'the building site', '🚧'],
        ['uitvoerder', 'de uitvoerder', 'the site manager (the boss on the building site)', '👷'],
        ['keet', 'de keet', 'the site cabin (for breaks and meetings)', '🏠'],
        ['afval', 'het afval', 'the waste, the rubbish', '🗑️'],
        ['container', 'de container', 'the skip (a very big bin for waste)', '🚛'],
        ['struikelen', 'struikelen', 'to trip (fall over something)', '🤸'],
      ],
      [
        ['Het afval gaat in de container.', 'The waste goes in the skip.'],
        ['De uitvoerder is in de keet.', 'The site manager is in the cabin.'],
        ['Pas op, hier kun je struikelen.', 'Careful, you can trip here.'],
      ],
      [['Waar moet dit hout naartoe?', 'Where must this wood go?'], ['In de container bij de ingang.', 'In the skip at the entrance.']],
    ),
  ]),
  unit('factory', 'In the factory', 'In de productie', '🏭', '#4b5563', [
    lesson(
      'line',
      'The line and machines',
      [
        ['lopendeband', 'de lopende band', 'the conveyor belt, the line', '🛤️'],
        ['machine', 'de machine', 'the machine', '⚙️'],
        ['storing', 'de storing', 'the fault, the breakdown', '🔧'],
        ['noodstop', 'de noodstop', 'the emergency stop', '🛑'],
        ['inpakken', 'inpakken', 'to pack', '📦'],
        ['productie', 'de productie', 'the production', '🏭'],
      ],
      [
        ['De band staat stil.', 'The line has stopped.'],
        ['Er is een storing.', 'There is a fault.'],
        ['Ik pak de producten in.', 'I pack the products.'],
      ],
      [['Hoe gaat het aan de band?', 'How is it going on the line?'], ['Goed, maar de machine is erg langzaam.', 'Fine, but the machine is very slow.']],
    ),
    lesson(
      'quality',
      'Quality',
      [
        ['kwaliteit', 'de kwaliteit', 'the quality', '⭐', false],
        ['product', 'het product', 'the product', '🧴'],
        ['afkeuren', 'afkeuren', 'to reject', '👎'],
        ['beschadigd', 'beschadigd', 'damaged', '💔'],
        ['etiket', 'het etiket', 'the label', '🏷️'],
        ['lijst', 'de lijst', 'the list', '📋'],
      ],
      [
        ['Dit product is beschadigd.', 'This product is damaged.'],
        ['Het etiket klopt niet.', 'The label is not right.'],
        ['Moet ik dit afkeuren?', 'Must I reject this?'],
      ],
      [['Waarom ligt dit apart?', 'Why is this put aside?'], ['Het etiket zit scheef.', 'The label is crooked.']],
    ),
    // "Voedselverwerking" (the owner's request, 5 November 2026): working with food, in the
    // factory's own unit, before its mixed review. "het haarnetje", "handen wassen", "de
    // werkkleding" and "schoon" (l.hygiene), "de koelcel", "snijden" and "de allergie"
    // (l.kitchen), "de lopende band" (l.line) and "de hand" (l.body) are already words of other
    // lessons: here they come in the sentences, the chat and the tip. Six new concrete words, each
    // with a drawing (src/pictures/group36.tsx).
    lesson(
      'food',
      'Working with food',
      [
        ['mes', 'het mes', 'the knife', '🔪'],
        ['snijhandschoen', 'de snijhandschoen', 'the cut-resistant glove (a glove against cuts)', '🧤'],
        ['vriescel', 'de vriescel', 'the freezer room (a very cold room)', '🥶'],
        ['sieraden', 'de sieraden', 'the jewellery (a ring, a watch, earrings)', '💍'],
        ['pleister', 'de pleister', 'the plaster (for a small cut)', '🩹'],
        ['vlees', 'het vlees', 'the meat', '🥩'],
      ],
      [
        ['Ik doe mijn sieraden af.', 'I am taking off my jewellery.'],
        ['Waar zijn de snijhandschoenen?', 'Where are the cut-resistant gloves?'],
        ['In de vriescel draag ik een warme jas.', 'In the freezer room I wear a warm coat.', ['Ik draag een warme jas in de vriescel.']],
      ],
      [['Waarom maken we de band nu schoon?', 'Why are we cleaning the line now?'], ['Hierna komt een product zonder noten.', 'Next comes a product without nuts.']],
    ),
    // "Handing over your shift" (l.shifts, 14 November 2026, the owner's request: every sector unit grows to four lessons).
    lesson(
      'shifts',
      'Handing over your shift',
      [
        ['vroegedienst', 'de vroege dienst', 'the early shift', '🌅'],
        ['latedienst', 'de late dienst', 'the late shift', '🌇'],
        ['nachtdienst', 'de nachtdienst', 'the night shift', '🌙'],
        ['overdracht', 'de overdracht', 'the handover (you tell the next shift what happened)', '🤝', false],
        ['aflossen', 'aflossen', 'to take over from (the next person comes, and you can go)', '🔄', false],
        ['teamleider', 'de teamleider', 'the team leader', '🧑‍💼'],
      ],
      [
        ['Ik heb deze week late dienst.', 'I have the late shift this week.'],
        ['Wie lost mij af?', 'Who takes over from me?'],
        ['Machine twee had een storing.', 'Machine two had a fault.'],
      ],
      [['Is er iets gebeurd in jouw dienst?', 'Did anything happen in your shift?'], ['Ja. De band stond een half uur stil.', 'Yes. The line stood still for half an hour.']],
    ),
  ]),
  unit('care', 'In care', 'In de zorg', '🧓', '#9d4edd', [
    lesson(
      'client',
      'The client and daily care',
      [
        ['client', 'de cliënt', 'the client (the person you care for)', '🧓'],
        ['wassen', 'wassen', 'to wash', '🛁'],
        ['aankleden', 'aankleden', 'to get dressed, to dress someone', '👗'],
        ['eten', 'het eten', 'the food', '🍽️'],
        ['rolstoel', 'de rolstoel', 'the wheelchair', '🦽'],
        ['verpleegkundige', 'de verpleegkundige', 'the nurse', '💉'],
      ],
      [
        ['Hebt u goed geslapen?', 'Did you sleep well?'],
        ['Ik help u met aankleden.', 'I will help you get dressed.'],
        ['Wilt u nog wat eten?', 'Would you like something more to eat?'],
      ],
      [['Kunt u mij helpen met mijn jas?', 'Can you help me with my coat?'], ['Natuurlijk, ik help u even.', 'Of course, I will help you.']],
    ),
    lesson(
      'privacy',
      'Privacy and safety in care',
      [
        ['privacy', 'de privacy', 'the privacy', '🤫', false],
        ['hygiene', 'de hygiëne', 'the hygiene', '🫧', false],
        ['doorgeven', 'doorgeven', 'to pass on (information)', '📨', 'motion'],
        ['geheim', 'geheim', 'secret', '🤐', false],
        ['toestemming', 'de toestemming', 'the permission', '👌', false],
        ['gevallen', 'gevallen', 'fallen', '🤕'],
      ],
      [
        ['Mevrouw is gevallen.', 'The lady has fallen.'],
        ['Ik geef het door aan de verpleegkundige.', 'I will pass it on to the nurse.'],
        ['Ik praat thuis niet over cliënten.', 'At home I do not talk about clients.'],
      ],
      [
        ['Kun je meneer Jansen zijn pillen geven?', 'Can you give Mr Jansen his pills?'],
        ['Nee, dat mag ik niet. Ik haal de verpleegkundige.', 'No, I am not allowed to. I will get the nurse.'],
      ],
    ),
    // "Say what you see" (l.signals, 14 November 2026, the owner's request: every sector unit grows to four lessons).
    lesson(
      'signals',
      'Say what you see',
      [
        ['duizelig', 'duizelig', 'dizzy', '😵‍💫'],
        ['misselijk', 'misselijk', 'sick (you feel you must throw up)', '🤢'],
        ['benauwd', 'benauwd', 'short of breath', '😮‍💨'],
        ['koorts', 'de koorts', 'the fever', '🤒'],
        ['verward', 'verward', 'confused (the person does not know where they are)', '😕', false],
        ['anders', 'anders', 'different (not as normal)', '🔀', false],
      ],
      [
        ['Mevrouw is duizelig.', 'The lady is dizzy.'],
        ['Meneer eet vandaag niet.', 'The gentleman is not eating today.'],
        ['Kun je even komen kijken?', 'Can you come and have a look?'],
      ],
      [['Hoe gaat het met meneer Jansen?', 'How is Mr Jansen doing?'], ['Hij is verward. Dat is anders dan gisteren.', 'He is confused. That is different from yesterday.']],
    ),
    lesson(
      'transfer',
      'Helping someone get up',
      [
        ['tillift', 'de tillift', 'the hoist (a machine that lifts a person)', '🏗️'],
        ['rollator', 'de rollator', 'the walking frame with wheels', '🦯'],
        ['bed', 'het bed', 'the bed', '🛏️'],
        ['opstaan', 'opstaan', 'to get up, to stand up', '🧍'],
        ['gaanzitten', 'gaan zitten', 'to sit down', '🪑'],
        ['voorzichtig', 'voorzichtig', 'careful, gentle', '🫶', false],
      ],
      [
        ['Ik help u met opstaan.', 'I will help you get up.'],
        ['Wilt u even gaan zitten?', 'Would you like to sit down for a moment?'],
        ['Ik pak eerst de tillift.', 'First I will get the hoist.'],
      ],
      [['Kun je mevrouw even uit bed tillen?', 'Can you lift the lady out of bed?'], ['Niet alleen. Ik pak de tillift.', 'Not on my own. I will get the hoist.']],
    ),
  ]),
  unit('horeca', 'In hospitality', 'In de horeca', '🍽️', '#b45309', [
    lesson(
      'kitchen',
      'In the kitchen',
      [
        ['keuken', 'de keuken', 'the kitchen', '🍳'],
        ['snijden', 'snijden', 'to cut', '🔪'],
        ['pan', 'de pan', 'the pan', '🥘'],
        ['koelcel', 'de koelcel', 'the cold store (walk-in fridge)', '🧊'],
        ['allergie', 'de allergie', 'the allergy', '🥜', 'hook'],
        ['datum', 'de datum', 'the date', '📆'],
      ],
      [
        ['Zet het vlees in de koelcel.', 'Put the meat in the cold store.'],
        ['Snijd de uien klein.', 'Cut the onions small.'],
        ['Zitten hier noten in?', 'Are there nuts in this?'],
      ],
      [['Een gast heeft een allergie voor noten.', 'A guest has a nut allergy.'], ['Ik vraag het aan de chef.', 'I will ask the chef.']],
    ),
    lesson(
      'service',
      'Serving guests',
      [
        ['gast', 'de gast', 'the guest', '🧑'],
        ['bestelling', 'de bestelling', 'the order', '📝'],
        ['rekening', 'de rekening', 'the bill', '🧾'],
        ['menu', 'het menu', 'the menu', '📋'],
        ['afruimen', 'afruimen', 'to clear (the table)', '🍽️'],
        ['fooi', 'de fooi', 'the tip (extra money from a guest)', '🪙'],
      ],
      [
        ['Wat wilt u drinken?', 'What would you like to drink?'],
        ['Mag ik de bestelling opnemen?', 'May I take your order?'],
        ['Ik ruim de tafel af.', 'I am clearing the table.'],
      ],
      [['Mogen we de rekening?', 'May we have the bill?'], ['Natuurlijk, ik kom eraan.', 'Of course, I am coming.']],
    ),
    // "Washing up" (l.dishes, 14 November 2026, the owner's request: every sector unit grows to four lessons).
    lesson(
      'dishes',
      'Washing up',
      [
        ['afwas', 'de afwas', 'the washing-up, the dishes', '🧽'],
        ['vaatwasser', 'de vaatwasser', 'the dishwasher', '🫧'],
        ['bord', 'het bord', 'the plate', '🍽️'],
        ['glas', 'het glas', 'the glass', '🥛'],
        ['bestek', 'het bestek', 'the cutlery (knife, fork and spoon)', '🍴'],
        ['afdrogen', 'afdrogen', 'to dry (with a cloth)', '🧻'],
      ],
      [
        ['De vaatwasser is klaar.', 'The dishwasher is finished.'],
        ['Pas op, er is een glas gebroken.', 'Careful, a glass has broken.'],
        ['Er is geen schoon bestek meer.', 'There is no clean cutlery left.'],
      ],
      [['Zijn er nog schone glazen?', 'Are there any clean glasses left?'], ['Ja, ik breng ze meteen.', 'Yes, I will bring them right away.']],
    ),
    lesson(
      'rush',
      'When it is busy',
      [
        ['heet', 'heet', 'hot', '♨️'],
        ['chef', 'de chef', 'the chef (the boss of the kitchen)', '👨‍🍳'],
        ['terras', 'het terras', 'the terrace (tables outside)', '⛱️'],
        ['tafel', 'de tafel', 'the table', '🪑'],
        ['dienblad', 'het dienblad', 'the tray', '🍱'],
        ['wachten', 'wachten', 'to wait', '⏳', false],
      ],
      [
        ['Heet! Ik kom achter je langs.', 'Hot! I am passing behind you.'],
        ['Tafel zes wacht op het eten.', 'Table six is waiting for the food.'],
        ['Ik breng dit naar het terras.', 'I am taking this to the terrace.'],
      ],
      [['Kun je tafel vier doen?', 'Can you do table four?'], ['Ja, chef. Ik kom eraan.', 'Yes, chef. I am coming.']],
    ),
  ]),
  unit('clean', 'Cleaning', 'Schoonmaken', '🧽', '#0e7490', [
    lesson(
      'cleaning',
      'Cleaning materials',
      [
        ['dweil', 'de dweil', 'the mop', '🧹'],
        ['emmer', 'de emmer', 'the bucket', '🪣'],
        ['schoonmaakmiddel', 'het schoonmaakmiddel', 'the cleaning product', '🧴'],
        ['stofzuiger', 'de stofzuiger', 'the vacuum cleaner', '🌀'],
        ['stoffen', 'stoffen', 'to dust', '🪶'],
        ['prullenbak', 'de prullenbak', 'the bin', '🗑️'],
      ],
      [
        ['Waar staat de emmer?', 'Where is the bucket?'],
        ['Ik ga de gang stofzuigen.', 'I am going to vacuum the hallway.'],
        ['Leeg de prullenbak.', 'Empty the bin.'],
      ],
      [['Ben je klaar met de wc’s?', 'Are you finished with the toilets?'], ['Bijna, nog twee.', 'Almost, two more.']],
    ),
    lesson(
      'cleansafe',
      'Safe cleaning',
      [
        ['glad', 'glad', 'slippery', '⛸️'],
        ['bordje', 'het bordje', 'the sign', '🪧'],
        ['mengen', 'mengen', 'to mix', '🥣'],
        ['damp', 'de damp', 'the fumes', '😶‍🌫️'],
        ['luchten', 'luchten', 'to let fresh air in', '🪟'],
        ['spoelen', 'spoelen', 'to rinse', '🚿'],
      ],
      [
        ['Pas op, glad!', 'Careful, slippery!'],
        ['Zet het bordje neer.', 'Put the sign down.'],
        ['Meng nooit schoonmaakmiddelen.', 'Never mix cleaning products.'],
      ],
      [['Mag ik hier lopen?', 'May I walk here?'], ['Pas op, de vloer is nog glad.', 'Careful, the floor is still slippery.']],
    ),
    // "Your round" (l.rounds, 14 November 2026, the owner's request: every sector unit grows to four lessons).
    lesson(
      'rounds',
      'Your round',
      [
        ['kantoor', 'het kantoor', 'the office', '🏢'],
        ['verdieping', 'de verdieping', 'the floor (the 1st or 2nd floor of a building)', '🔢'],
        ['gang', 'de gang', 'the hallway, the corridor', '🚪'],
        ['toiletpapier', 'het toiletpapier', 'the toilet paper', '🧻'],
        ['zeep', 'de zeep', 'the soap', '🧼'],
        ['bijvullen', 'bijvullen', 'to refill, to top up', '➕'],
      ],
      [
        ['Ik begin op de tweede verdieping.', 'I start on the second floor.'],
        ['Het toiletpapier is op.', 'The toilet paper has run out.'],
        ['Ik vul de zeep bij.', 'I am refilling the soap.'],
      ],
      [['Heb je kantoor drie al gedaan?', 'Have you done office three yet?'], ['Nee, daar werkt nog iemand.', 'No, someone is still working there.']],
    ),
    lesson(
      'colours',
      'Colours and cloths',
      [
        ['doek', 'de doek', 'the cloth', '🧣'],
        ['spons', 'de spons', 'the sponge', '🧽'],
        ['rood', 'rood', 'red', '🟥'],
        ['blauw', 'blauw', 'blue', '🟦'],
        ['geel', 'geel', 'yellow', '🟨'],
        ['groen', 'groen', 'green', '🟩'],
      ],
      [
        ['De rode doek is voor de wc.', 'The red cloth is for the toilet.'],
        ['Pak een schone doek.', 'Take a clean cloth.'],
        ['Welke kleur gebruik ik hier?', 'Which colour do I use here?'],
      ],
      [['Mag ik deze doek voor het bureau gebruiken?', 'May I use this cloth for the desk?'], ['Nee, de rode is alleen voor de wc.', 'No, the red one is only for the toilet.']],
    ),
  ]),
];

// ---- Tiles, plaster and paint (the owner's request, 20 November 2026) ----
// The second own unit of the sector Bouw (src/content/sectors.ts): the finishing work after the
// building site of "Op de bouw". In the path of a learner who chose Bouw it comes right after "Op
// de bouw"; in every other course it is appended at the very end (workUnits below), so no
// existing course changes. Its lessons stand in their own list, in course order, each with its tip
// in src/content/workTips.ts (afbouwTips).
// Already words of other lessons, used here in a sentence or the chat only: "de emmer"
// (l.cleaning), "de deur" and "de muur" (u.sounds), "snijden" and "wachten". The drawings:
// src/pictures/group53.tsx (l.tiletools), group54.tsx (l.tiling), group55.tsx (l.plaster),
// group56.tsx (l.paint) and group57.tsx (l.prep).

const afbouwLessons: Lesson[] = [
  lesson(
    'tiletools',
    'The tiler’s tools',
    [
      ['lijmkam', 'de lijmkam', 'the notched trowel (spreads tile glue in ridges)', '🪮'],
      ['troffel', 'de troffel', 'the trowel', '🧱'],
      ['tegelsnijder', 'de tegelsnijder', 'the tile cutter', '✂️'],
      ['nijptang', 'de nijptang', 'the pincers (to nip small bits off a tile)', '🗜️'],
      ['mixer', 'de mixer', 'the paddle mixer (stirs glue or plaster in a bucket)', '🌀'],
      ['duimstok', 'de duimstok', 'the folding ruler', '📏'],
    ],
    [
      ['Geef me de lijmkam even.', 'Give me the notched trowel for a moment.', ['Geef me even de lijmkam.']],
      ['Ik snijd de tegel met de tegelsnijder.', 'I cut the tile with the tile cutter.'],
      ['Meet eerst met de duimstok.', 'Measure with the folding ruler first.'],
    ],
    [['Waar is de mixer?', 'Where is the mixer?'], ['Bij de emmer, naast de deur.', 'By the bucket, next to the door.']],
  ),
  lesson(
    'tiling',
    'Tiles, glue and the centre line',
    [
      ['tegel', 'de tegel', 'the tile', '🔲'],
      ['tegellijm', 'de tegellijm', 'the tile glue', '🪣'],
      ['tegelkruisje', 'het tegelkruisje', 'the tile spacer (a small cross between the tiles)', '➕'],
      ['hartlijn', 'de hartlijn', 'the centre line (you start tiling from it)', '↕️'],
      ['tegelplaat', 'de tegelplaat', 'the tiling board (a board to practise setting tiles)', '🟦'],
      ['potlood', 'het potlood', 'the pencil', '✏️'],
    ],
    [
      ['De tegellijm is nog nat.', 'The tile glue is still wet.'],
      ['Zet een tegelkruisje tussen de tegels.', 'Put a tile spacer between the tiles.'],
      ['Teken eerst de hartlijn met het potlood.', 'First draw the centre line with the pencil.'],
    ],
    [['Waar begin ik met de tegels?', 'Where do I start with the tiles?'], ['In het midden, op de hartlijn.', 'In the middle, on the centre line.']],
  ),
  lesson(
    'plaster',
    'Plastering',
    [
      ['stucspaan', 'de stucspaan', 'the plastering trowel (a flat steel float to smooth plaster)', '🔳'],
      ['oplegspaan', 'de oplegspaan', 'the hawk (a flat board you hold the plaster on)', '🟫'],
      ['spackmes', 'het spackmes', 'the filling knife (a wide flat knife)', '🔪'],
      ['rei', 'de rei', 'the straightedge (a long straight bar to level plaster)', '📐'],
      ['sponsspaan', 'de sponsspaan', 'the sponge float', '🧽'],
      ['hoekprofiel', 'het hoekprofiel', 'the corner bead (a metal strip for a straight corner)', '📎'],
    ],
    [
      ['Zet eerst het hoekprofiel op de hoek.', 'First put the corner bead on the corner.'],
      ['Maak de muur glad met de stucspaan.', 'Make the wall smooth with the plastering trowel.'],
      ['Trek de rei over de muur.', 'Pull the straightedge over the wall.'],
    ],
    [['Is de muur al droog?', 'Is the wall dry yet?'], ['Nee, wacht nog een dag.', 'No, wait another day.']],
  ),
  lesson(
    'paint',
    'Painting',
    [
      ['verf', 'de verf', 'the paint', '🎨'],
      ['kwast', 'de kwast', 'the paintbrush (a wide brush)', '🖌️'],
      ['penseel', 'het penseel', 'the small brush (for corners and edges)', '🖍️'],
      ['roerstok', 'de roerstok', 'the stirring stick', '🥢'],
      ['tape', 'de tape', 'the masking tape', '🩹'],
      ['strijkvaatje', 'het strijkvaatje', 'the paint kettle (a small pot you hold while painting)', '🫙'],
    ],
    [
      ['Roer de verf eerst goed om.', 'Stir the paint well first.'],
      ['Plak de rand af met tape.', 'Mask the edge with tape.'],
      ['Doe een beetje verf in het strijkvaatje.', 'Put a little paint in the paint kettle.'],
    ],
    [['Welke kwast pak ik?', 'Which brush do I take?'], ['De brede voor de muur, het penseel voor de hoekjes.', 'The wide one for the wall, the small brush for the corners.']],
  ),
  // "het plamuurmes" and "het spackmes" (l.plaster) are nearly the same tool: the same emoji, so a
  // picture choice never offers the two side by side.
  lesson(
    'prep',
    'Getting ready to paint',
    [
      ['plamuurmes', 'het plamuurmes', 'the putty knife (to fill holes)', '🔪'],
      ['schuurpapier', 'het schuurpapier', 'the sandpaper', '🧻'],
      ['verfkrabber', 'de verfkrabber', 'the paint scraper', '🪒'],
      ['stoffertje', 'het stoffertje', 'the small brush (to sweep dust)', '🧹'],
      ['schuren', 'schuren', 'to sand', '🤚'],
      ['afplakken', 'afplakken', 'to mask off (cover an edge with tape)', '🪟'],
    ],
    [
      ['Krab eerst de oude verf eraf.', 'First scrape off the old paint.'],
      ['Schuur het hout glad.', 'Sand the wood smooth.'],
      ['Veeg het stof weg met het stoffertje.', 'Sweep the dust away with the small brush.'],
    ],
    [['Mag ik al verven?', 'May I paint already?'], ['Nee, eerst schuren en het gat dichtmaken.', 'No, first sand and fill the hole.']],
  ),
];

const afbouwUnit = unit('afbouw', 'Tiles, plaster and paint', 'Tegels, stuc en verf', '🖌️', '#0f6e8c', afbouwLessons);

// ---- Bricks, wood and fixing (the owner's request, 20 November 2026) ----
// The third own unit of the sector Bouw (src/content/sectors.ts): bricklaying, wood and fixing
// things. In the path of a learner who chose Bouw it comes right after "Tegels, stuc en verf"; in
// every other course it is appended at the very end (workUnits below), so no existing course
// changes. The drawings: src/pictures/group58.tsx to group63.tsx. Two screwdrivers (l.screw,
// l.fix) and the hand brushes (de handveger, het stoffertje of l.prep) share an emoji on purpose:
// they look alike, so a picture choice never offers them side by side.

const ruwbouwUnit = unit('ruwbouw', 'Bricks, wood and fixing', 'Metselen, hout en vastmaken', '🧱', '#a4452c', [
  lesson(
    'brick',
    'Bricklaying',
    [
      ['speciekuip', 'de speciekuip', 'the mortar tub', '🛁'],
      ['metseltroffel', 'de metseltroffel', 'the brick trowel', '🥄'],
      ['baksteen', 'de baksteen', 'the brick', '🧱'],
      ['cement', 'het cement', 'the cement', '🪨'],
      ['voegijzer', 'het voegijzer', 'the jointer (to smooth the joints between bricks)', '〰️'],
      ['handveger', 'de handveger', 'the hand brush', '🧹'],
    ],
    [
      ['Er zit nog cement in de speciekuip.', 'There is still cement in the mortar tub.'],
      ['Maak de voeg glad met het voegijzer.', 'Make the joint smooth with the jointer.'],
      ['Veeg de muur schoon met de handveger.', 'Brush the wall clean with the hand brush.'],
    ],
    [['Hoeveel bakstenen heb je nog?', 'How many bricks do you have left?'], ['Nog één pallet. Genoeg voor vandaag.', 'One more pallet. Enough for today.']],
  ),
  lesson(
    'wall',
    'A straight wall',
    [
      ['metseltouw', 'het metseltouw', 'the brick line (a string for a straight row)', '🧵'],
      ['klos', 'de klos', 'the line block (holds the string at the corner)', '🪵'],
      ['lagenmaatlat', 'de lagenmaatlat', 'the gauge rod (shows the height of each row)', '📏'],
      ['profiel', 'het profiel', 'the corner profile (a straight post at the end of the wall)', '🪧'],
      ['kop', 'de kop', 'the header (the short end of a brick)', '◾'],
      ['strek', 'de strek', 'the stretcher (the long side of a brick)', '↔️'],
    ],
    [
      ['Span het metseltouw strak.', 'Pull the brick line tight.'],
      ['Het profiel moet recht staan.', 'The corner profile must stand straight.'],
      ['Leg de steen met de strek naar buiten.', 'Lay the brick with the long side facing out.'],
    ],
    [['Hoe hoog moet deze laag?', 'How high must this row be?'], ['Kijk op de lagenmaatlat.', 'Look at the gauge rod.']],
  ),
  lesson(
    'wood',
    'Working with wood',
    [
      ['handzaag', 'de handzaag', 'the handsaw', '🪚'],
      ['kapzaag', 'de kapzaag', 'the tenon saw (a small saw with a stiff back)', '🗡️'],
      ['houtbeitel', 'de houtbeitel', 'the wood chisel', '🪓'],
      ['handschaaf', 'de handschaaf', 'the hand plane', '🧈'],
      ['timmermanshamer', 'de timmermanshamer', 'the carpenter’s hammer', '🔨'],
      ['houtenhamer', 'de houten hamer', 'the mallet (a wooden hammer)', '🥁'],
    ],
    [
      ['Zaag de plank op maat.', 'Saw the plank to size.'],
      ['Schaaf de rand glad.', 'Plane the edge smooth.'],
      ['Sla met de houten hamer op de beitel.', 'Hit the chisel with the mallet.'],
    ],
    [['Welke zaag moet ik hebben?', 'Which saw do I need?'], ['De kapzaag, voor dit kleine stuk.', 'The tenon saw, for this small piece.']],
  ),
  lesson(
    'square',
    'Marking out',
    [
      ['winkelhaak', 'de winkelhaak', 'the try square (shows a right angle)', '📐'],
      ['verstekhaak', 'de verstekhaak', 'the mitre square (45 degrees)', '↘️'],
      ['zwaaihaak', 'de zwaaihaak', 'the sliding bevel (you set the angle yourself)', '🔄'],
      ['kruishout', 'het kruishout', 'the marking gauge (draws a line along the edge)', '🎚️'],
      ['passer', 'de passer', 'the compasses (draw a circle)', '⭕'],
      ['aftekenen', 'aftekenen', 'to mark out (draw where you will cut)', '✏️'],
    ],
    [
      ['Teken de lijn af met de winkelhaak.', 'Mark the line with the try square.'],
      ['Zet de zwaaihaak op de goede hoek.', 'Set the sliding bevel to the right angle.'],
      ['Teken een cirkel met de passer.', 'Draw a circle with the compasses.'],
    ],
    [['Is de hoek recht?', 'Is the angle square?'], ['Ja, de winkelhaak past precies.', 'Yes, the try square fits exactly.']],
  ),
  lesson(
    'screw',
    'Drills and screws',
    [
      ['accuboor', 'de accuboor', 'the cordless drill', '🔋'],
      ['boormachine', 'de boormachine', 'the power drill (with a cable)', '🔌'],
      ['bitje', 'het bitje', 'the screwdriver bit', '✴️'],
      ['plug', 'de plug', 'the wall plug', '🧷'],
      ['schroevendraaier', 'de schroevendraaier', 'the screwdriver', '🪛'],
      ['spijker', 'de spijker', 'the nail', '📌'],
    ],
    [
      ['Boor een gat en doe er een plug in.', 'Drill a hole and put a wall plug in it.'],
      ['Welk bitje hoort bij deze schroef?', 'Which bit goes with this screw?'],
      ['Sla de spijker in het hout.', 'Hammer the nail into the wood.'],
    ],
    [['Waar is de accuboor?', 'Where is the cordless drill?'], ['Aan de lader, hij is bijna vol.', 'On the charger, it is almost full.']],
  ),
  lesson(
    'fix',
    'Fixing things',
    [
      ['bevestigen', 'bevestigen', 'to fix (attach something firmly to a wall)', '🖼️'],
      ['vastzetten', 'vastzetten', 'to tighten (turn until it is tight)', '🔩'],
      ['lijmen', 'lijmen', 'to glue', '🧴'],
      ['inbussleutel', 'de inbussleutel', 'the Allen key (hex key)', '🗝️'],
      ['kruisschroevendraaier', 'de kruisschroevendraaier', 'the Phillips screwdriver (cross tip)', '🪛'],
      ['platteschroevendraaier', 'de platte schroevendraaier', 'the flat screwdriver', '➖'],
    ],
    [
      ['Bevestig de plank aan de muur.', 'Fix the shelf to the wall.'],
      ['Zet de bout vast met de inbussleutel.', 'Tighten the bolt with the Allen key.'],
      ['Pak de platte schroevendraaier, niet de kruis.', 'Take the flat screwdriver, not the cross one.'],
    ],
    [['Hoe maak ik deze plank vast?', 'How do I fix this shelf?'], ['Met twee pluggen en twee schroeven.', 'With two wall plugs and two screws.']],
  ),
]);

// ---- Machines and tools (the owner's request, 21 November 2026) ----
// The second own unit of the sector Productie (src/content/sectors.ts): working at the machine,
// checking the products, packing and small maintenance. In the path of a learner who chose
// Productie it comes right after "In de productie"; in every other course it is appended at the
// very end (workUnits below), so no existing course changes. Already words of other lessons, used
// here in a sentence or the chat only: "de machine", "de storing", "inpakken", "het product",
// "beschadigd", "het etiket" and "de lijst" (u.factory), "de doos" (l.things), "de dienst"
// (l.shift) and "de olie". The drawings: src/pictures/groupMaken.tsx (one file per word in
// src/pictures/maken). The snap-off knife shares the emoji of "het mes" (l.food) on purpose: they
// look alike, so a picture choice never offers them side by side.

const machinesUnit = unit('machines', 'Machines and tools', 'Machines en gereedschap', '🎛️', '#3f6e8c', [
  lesson(
    'atmachine',
    'At the machine',
    [
      ['bedieningspaneel', 'het bedieningspaneel', 'the control panel (the buttons and screen of a machine)', '🎛️'],
      ['startknop', 'de startknop', 'the start button (green)', '🟢'],
      ['hendel', 'de hendel', 'the lever', '🕹️'],
      ['afscherming', 'de afscherming', 'the machine guard (a cover over the moving parts)', '🛡️'],
      ['sensor', 'de sensor', 'the sensor (it sees if something is there)', '📡'],
      ['signaallamp', 'de signaallamp', 'the signal light (coloured lights on top of a machine)', '🚨'],
    ],
    [
      ['Druk op de groene startknop.', 'Press the green start button.'],
      ['De signaallamp is rood. Er is een storing.', 'The signal light is red. There is a fault.'],
      ['Haal de afscherming nooit weg.', 'Never take the machine guard away.'],
    ],
    [['Waarom stopt de machine steeds?', 'Why does the machine keep stopping?'], ['De sensor ziet de doos niet goed.', 'The sensor does not see the box well.']],
  ),
  lesson(
    'inspect',
    'Measuring and checking',
    [
      ['weegschaal', 'de weegschaal', 'the scales', '⚖️'],
      ['meetklok', 'de meetklok', 'the dial gauge (measures very small differences)', '⏱️'],
      ['loep', 'de loep', 'the magnifying glass', '🔍'],
      ['monster', 'het monster', 'the sample (one product you take out to check)', '🫙'],
      ['afkeurbak', 'de afkeurbak', 'the reject bin (for products that are not good)', '🗑️'],
      ['teller', 'de teller', 'the counter (it counts the products)', '🔢'],
    ],
    [
      ['Leg het product op de weegschaal.', 'Put the product on the scales.'],
      ['Dit product is beschadigd. Het gaat in de afkeurbak.', 'This product is damaged. It goes in the reject bin.'],
      ['Ik kijk met de loep naar het etiket.', 'I look at the label with the magnifying glass.'],
    ],
    [['Hoe vaak neem ik een monster?', 'How often do I take a sample?'], ['Elk uur één. Schrijf het op de lijst.', 'One every hour. Write it on the list.']],
  ),
  lesson(
    'packing',
    'Packing',
    [
      ['verpakking', 'de verpakking', 'the packaging', '🎁'],
      ['krimpfolie', 'de krimpfolie', 'the shrink wrap (plastic film that gets tight with heat)', '🌯'],
      ['sealmachine', 'de sealmachine', 'the sealing machine (closes a pack with heat)', '♨️'],
      ['vulmateriaal', 'het vulmateriaal', 'the filling material (air cushions or paper in a box)', '☁️'],
      ['afbreekmes', 'het afbreekmes', 'the snap-off knife', '🔪'],
      ['tapepistool', 'het tapepistool', 'the tape gun', '🎞️'],
    ],
    [
      ['Doe vulmateriaal in de doos.', 'Put filling material in the box.'],
      ['Sluit de doos met het tapepistool.', 'Close the box with the tape gun.'],
      ['De sealmachine is heet. Pas op!', 'The sealing machine is hot. Watch out!'],
    ],
    [['Hoeveel producten gaan er in een doos?', 'How many products go in a box?'], ['Twaalf. Dat staat op de lijst.', 'Twelve. It says so on the list.']],
  ),
  lesson(
    'upkeep',
    'Maintenance',
    [
      ['persluchtpistool', 'het persluchtpistool', 'the air blow gun', '💨'],
      ['steeksleutel', 'de steeksleutel', 'the open-end spanner', '🔧'],
      ['oliekannetje', 'het oliekannetje', 'the oil can', '🛢️'],
      ['smeerpistool', 'het smeerpistool', 'the grease gun', '🧈'],
      ['lekbak', 'de lekbak', 'the drip tray (it catches leaking oil)', '💧'],
      ['poetsdoek', 'de poetsdoek', 'the cleaning rag', '🧣'],
    ],
    [
      ['Er lekt olie. Zet de lekbak eronder.', 'Oil is leaking. Put the drip tray under it.'],
      ['Veeg de olie weg met een poetsdoek.', 'Wipe the oil away with a cleaning rag.'],
      ['Richt het persluchtpistool nooit op iemand.', 'Never point the air blow gun at someone.'],
    ],
    [['Wanneer smeren we de machine?', 'When do we grease the machine?'], ['Elke maandag, voor de eerste dienst.', 'Every Monday, before the first shift.']],
  ),
]);

// ---- Electrics, pipes and metal (the owner's request, 21 November 2026) ----
// The second own unit of the sector Techniek (src/content/sectors.ts): wiring, measuring and
// working safely on power, pipes and water, and metalwork. In the path of a learner who chose
// Techniek it comes right after "In de werkplaats"; in every other course it is appended at the
// very end (workUnits below), so no existing course changes. Already words of other lessons, used
// here in a sentence or the chat only: "de kabel", "de stroom" and "de elektricien" (l.power),
// "de boor" and "lekken". The drawings: src/pictures/groupTechniek.tsx (one file per word in
// src/pictures/techniek).

const installUnit = unit('install', 'Electrics, pipes and metal', 'Elektra, leidingen en metaal', '⚡', '#5b4a9e', [
  lesson(
    'wiring',
    'Wiring',
    [
      ['draad', 'de draad', 'the wire (one wire, inside a cable)', '🧶'],
      ['stopcontact', 'het stopcontact', 'the socket (in the wall)', '🔌'],
      ['schakelaar', 'de schakelaar', 'the switch (for the light)', '💡'],
      ['lasklem', 'de lasklem', 'the lever connector (joins wires)', '🟧'],
      ['striptang', 'de striptang', 'the wire stripper', '✂️'],
      ['kabelgoot', 'de kabelgoot', 'the cable duct (a channel for cables)', '🗄️'],
    ],
    [
      ['Strip de draad een centimeter.', 'Strip one centimetre off the wire.'],
      ['Zet de draden vast in de lasklem.', 'Fix the wires in the lever connector.'],
      ['De kabels gaan in de kabelgoot.', 'The cables go in the cable duct.'],
    ],
    [['Welke draad gaat waar?', 'Which wire goes where?'], ['Bruin bij bruin, blauw bij blauw.', 'Brown to brown, blue to blue.']],
  ),
  lesson(
    'testing',
    'Measuring and working safely',
    [
      ['multimeter', 'de multimeter', 'the multimeter (it measures power)', '📟'],
      ['spanningzoeker', 'de spanningzoeker', 'the voltage tester (a screwdriver with a small lamp)', '🖊️'],
      ['meterkast', 'de meterkast', 'the fuse box', '🗃️'],
      ['zekering', 'de zekering', 'the circuit breaker (it switches off the power when something is wrong)', '🔘'],
      ['hangslot', 'het hangslot', 'the padlock', '🔒'],
      ['aardedraad', 'de aardedraad', 'the earth wire (green and yellow)', '🟩'],
    ],
    [
      ['De zekering is eruit.', 'The circuit breaker has tripped.'],
      ['Doe een hangslot op de schakelaar.', 'Put a padlock on the switch.'],
      ['Meet eerst met de multimeter.', 'First measure with the multimeter.'],
    ],
    [['Mag ik de meterkast openmaken?', 'May I open the fuse box?'], ['Nee, dat doet de elektricien.', 'No, the electrician does that.']],
  ),
  lesson(
    'pipes',
    'Pipes and water',
    [
      ['buis', 'de buis', 'the pipe', '➖'],
      ['koppeling', 'de koppeling', 'the fitting (it joins two pipes)', '🔗'],
      ['pijpsnijder', 'de pijpsnijder', 'the pipe cutter', '⭕'],
      ['waterpomptang', 'de waterpomptang', 'the slip-joint pliers', '🦀'],
      ['afsluiter', 'de afsluiter', 'the stopcock (it shuts off the water)', '🚰'],
      ['teflontape', 'de teflontape', 'the thread tape (white tape for the thread of a pipe)', '⚪'],
    ],
    [
      ['Draai de afsluiter dicht.', 'Close the stopcock.'],
      ['Snijd de buis met de pijpsnijder.', 'Cut the pipe with the pipe cutter.'],
      ['Wikkel teflontape om de schroefdraad.', 'Wrap thread tape around the thread.'],
    ],
    [['Lekt de koppeling nog?', 'Is the fitting still leaking?'], ['Een beetje. Ik draai hem nog wat vaster.', 'A little. I will tighten it a bit more.']],
  ),
  lesson(
    'metalwork',
    'Working metal',
    [
      ['bankschroef', 'de bankschroef', 'the vice (it holds a part tight on the workbench)', '🗜️'],
      ['vijl', 'de vijl', 'the file (to make metal smooth by hand)', '🪒'],
      ['ijzerzaag', 'de ijzerzaag', 'the hacksaw (a saw for metal)', '🪚'],
      ['kolomboormachine', 'de kolomboormachine', 'the pillar drill (a big drill on a stand)', '🛠️'],
      ['draadtap', 'de draadtap', 'the tap (it cuts a thread in a hole)', '🔩'],
      ['braam', 'de braam', 'the burr (a sharp edge after cutting metal)', '⚠️'],
    ],
    [
      ['Zet het metaal vast in de bankschroef.', 'Clamp the metal in the vice.'],
      ['Vijl de braam eraf.', 'File the burr off.'],
      ['Houd je handen weg van de boor.', 'Keep your hands away from the drill.'],
    ],
    [['Waarom is de rand zo scherp?', 'Why is the edge so sharp?'], ['Er zit nog een braam aan.', 'There is still a burr on it.']],
  ),
]);

// ---- Assembly (the owner's request, 21 November 2026) ----
// The third own unit of the sector Productie (src/content/sectors.ts): assembly work in the
// manufacturing industry: the line, fastening, lifting heavy parts and the final check. In the
// path of a learner who chose Productie it comes right after "Machines en gereedschap"; in every
// other course it is appended at the very end (workUnits below), so no existing course changes.
// Already words of other lessons, used here in a sentence or the chat only: "het onderdeel", "de
// bout", "het product", "de last" and "de lijst". The drawings: src/pictures/groupMontage.tsx (one
// file per word in src/pictures/montage).

const montageUnit = unit('montage', 'Assembly', 'Assemblage en montage', '🔧', '#2f7d6d', [
  lesson(
    'assembly',
    'At the assembly line',
    [
      ['werkinstructie', 'de werkinstructie', 'the work instruction (a sheet with the steps)', '🗒️'],
      ['onderdelenbak', 'de onderdelenbak', 'the parts bin', '🧺'],
      ['mal', 'de mal', 'the jig (it holds the part in the right place)', '⬛'],
      ['rolbaan', 'de rolbaan', 'the roller conveyor', '🛼'],
      ['montagetafel', 'de montagetafel', 'the assembly bench', '🪑'],
      ['voetpedaal', 'het voetpedaal', 'the foot pedal (a switch you press with your foot)', '🦶'],
    ],
    [
      ['Lees eerst de werkinstructie.', 'Read the work instruction first.'],
      ['De onderdelenbak is bijna leeg.', 'The parts bin is almost empty.'],
      ['Leg het onderdeel in de mal.', 'Put the part in the jig.'],
    ],
    [['Welke stap komt nu?', 'Which step comes now?'], ['Stap vier. Kijk op de werkinstructie.', 'Step four. Look at the work instruction.']],
  ),
  lesson(
    'fastening',
    'Fastening',
    [
      ['schroefmachine', 'de schroefmachine', 'the power screwdriver (it hangs above the line)', '🪛'],
      ['momentsleutel', 'de momentsleutel', 'the torque wrench (it clicks when the bolt is tight enough)', '🔧'],
      ['tiewrap', 'de tie-wrap', 'the cable tie', '🎗️'],
      ['sluitring', 'de sluitring', 'the washer', '🍩'],
      ['klinknagel', 'de klinknagel', 'the rivet', '📍'],
      ['popnageltang', 'de popnageltang', 'the rivet gun', '🗜️'],
    ],
    [
      ['Draai de bout vast met de momentsleutel.', 'Tighten the bolt with the torque wrench.'],
      ['Vergeet de sluitring niet.', 'Do not forget the washer.'],
      ['Bind de kabels samen met een tie-wrap.', 'Tie the cables together with a cable tie.'],
    ],
    [['Hoe vast moet deze bout?', 'How tight must this bolt be?'], ['Tot de momentsleutel klikt.', 'Until the torque wrench clicks.']],
  ),
  lesson(
    'handling',
    'Lifting and moving',
    [
      ['takel', 'de takel', 'the hoist (it lifts heavy parts with a chain)', '⛓️'],
      ['hijshaak', 'de hijshaak', 'the lifting hook', '🪝'],
      ['tilhulp', 'de tilhulp', 'the lifting aid (it holds a part with suction)', '🫳'],
      ['onderdelenkar', 'de onderdelenkar', 'the parts trolley', '🛒'],
      ['draaitafel', 'de draaitafel', 'the turntable (you turn the part, not yourself)', '💿'],
      ['rolcontainer', 'de rolcontainer', 'the roll cage (a tall cage on wheels)', '🗳️'],
    ],
    [
      ['Til dit niet alleen. Gebruik de takel.', 'Do not lift this alone. Use the hoist.'],
      ['Is de hijshaak goed dicht?', 'Is the lifting hook closed properly?'],
      ['Duw de onderdelenkar, trek hem niet.', 'Push the parts trolley, do not pull it.'],
    ],
    [['Mag ik onder de takel staan?', 'May I stand under the hoist?'], ['Nee, nooit onder een hangende last.', 'No, never under a hanging load.']],
  ),
  lesson(
    'finalcheck',
    'The final check',
    [
      ['typeplaatje', 'het typeplaatje', 'the rating plate (a small metal plate with the type and number)', '🪪'],
      ['stempel', 'de stempel', 'the stamp', '🔖'],
      ['testbank', 'de testbank', 'the test bench', '🧪'],
      ['goedkeursticker', 'de goedkeursticker', 'the OK sticker (a green sticker: the product is good)', '☑️'],
      ['kras', 'de kras', 'the scratch', '〽️'],
      ['barst', 'de barst', 'the crack', '💥'],
    ],
    [
      ['Het typeplaatje zit scheef.', 'The rating plate is crooked.'],
      ['Er zit een kras op dit product.', 'There is a scratch on this product.'],
      ['Zonder goedkeursticker gaat het niet weg.', 'Without the OK sticker it does not leave.'],
    ],
    [['Is dit product goed?', 'Is this product good?'], ['Nee, er zit een barst in.', 'No, there is a crack in it.']],
  ),
]);

// ---- Growing, sorting and the greenhouse (the owner's request, 22 November 2026) ----
// The second own unit of the sector Tuinbouw (src/content/sectors.ts): sowing and cuttings,
// sorting and packing, the greenhouse and its climate, and pests and working clean. In the path of
// a learner who chose Tuinbouw it comes right after "In de kas"; in every other course it is
// appended at the very end (workUnits below), so no existing course changes. Already words of
// other lessons, used here in a sentence or the chat only: "de krat", "de rij", "het blad", "de
// tomaat" (u.kas) and "beschadigd". The drawings: src/pictures/groupKweek.tsx.

const kweekUnit = unit('kweek', 'Growing, sorting and the greenhouse', 'Kweken, sorteren en de kas', '🌱', '#4a7c2a', [
  lesson(
    'sowing',
    'Sowing and cuttings',
    [
      ['zaad', 'het zaad', 'the seeds', '🫘'],
      ['zaaibak', 'de zaaibak', 'the seed tray', '🌱'],
      ['stek', 'de stek', 'the cutting (a piece of a plant that grows new roots)', '🌿'],
      ['potgrond', 'de potgrond', 'the potting soil', '🟤'],
      ['kweekpot', 'de kweekpot', 'the growing pot', '🪴'],
      ['gieter', 'de gieter', 'the watering can', '🚿'],
    ],
    [
      ['Leg twee zaadjes in elk vakje.', 'Put two seeds in each cell.'],
      ['Zet de stek in de potgrond.', 'Put the cutting in the potting soil.'],
      ['Geef de jonge planten een beetje water.', 'Give the young plants a little water.'],
    ],
    [['Hoe diep moet het zaad?', 'How deep must the seed go?'], ['Een halve centimeter. Niet dieper.', 'Half a centimetre. Not deeper.']],
  ),
  lesson(
    'sorting',
    'Sorting and packing',
    [
      ['tros', 'de tros', 'the truss (a bunch of tomatoes on one stem)', '🍅'],
      ['bakje', 'het bakje', 'the punnet (a small box for fruit)', '🥡'],
      ['sorteermachine', 'de sorteermachine', 'the sorting machine', '🔀'],
      ['etiketpistool', 'het etiketpistool', 'the label gun', '🏷️'],
      ['kleurenkaart', 'de kleurenkaart', 'the colour chart (it shows how ripe the fruit must be)', '🌈'],
      ['tomatenschaar', 'de tomatenschaar', 'the harvest scissors', '✂️'],
    ],
    [
      ['Leg de trossen voorzichtig in de krat.', 'Put the trusses carefully in the crate.'],
      ['Deze tomaat is te rijp. Hij gaat apart.', 'This tomato is too ripe. It goes aside.'],
      ['Kijk op de kleurenkaart.', 'Look at the colour chart.'],
    ],
    [['Is deze tomaat rijp genoeg?', 'Is this tomato ripe enough?'], ['Nee, nog te groen. Laat hem hangen.', 'No, still too green. Leave it on the plant.']],
  ),
  lesson(
    'greenhouse',
    'The greenhouse and its climate',
    [
      ['buisrailkar', 'de buisrailkar', 'the pipe-rail trolley (it rides on the heating pipes)', '🛤️'],
      ['druppelaar', 'de druppelaar', 'the dripper (it gives water drop by drop)', '💧'],
      ['luchtraam', 'het luchtraam', 'the roof vent (a window in the roof)', '🪟'],
      ['kasscherm', 'het kasscherm', 'the greenhouse screen (a cloth under the roof)', '⛱️'],
      ['ventilator', 'de ventilator', 'the fan', '🌀'],
      ['thermometer', 'de thermometer', 'the thermometer', '🌡️'],
    ],
    [
      ['Rijd de buisrailkar naar het eind van de rij.', 'Ride the pipe-rail trolley to the end of the row.'],
      ['De druppelaar zit los.', 'The dripper is loose.'],
      ['Het is warm. De luchtramen gaan open.', 'It is warm. The roof vents are opening.'],
    ],
    [['Waarom is het zo warm in de kas?', 'Why is it so warm in the greenhouse?'], ['Het scherm is dicht, en de ramen ook.', 'The screen is closed, and the vents too.']],
  ),
  lesson(
    'pests',
    'Pests and working clean',
    [
      ['luis', 'de luis', 'the aphid (a small green insect on plants)', '🦗'],
      ['vangplaat', 'de vangplaat', 'the sticky trap (a yellow card that catches insects)', '🟨'],
      ['rups', 'de rups', 'the caterpillar', '🐛'],
      ['sluipwesp', 'de sluipwesp', 'the parasitic wasp (a small wasp that kills pests)', '🐝'],
      ['schimmel', 'de schimmel', 'the mould', '🍄'],
      ['ontsmettingsmat', 'de ontsmettingsmat', 'the disinfection mat (you step on it at the door)', '🧼'],
    ],
    [
      ['Er zitten luizen op dit blad.', 'There are aphids on this leaf.'],
      ['Hang de vangplaat boven de planten.', 'Hang the sticky trap above the plants.'],
      ['Loop over de ontsmettingsmat.', 'Walk over the disinfection mat.'],
    ],
    [['Mag ik deze wesp doodmaken?', 'May I kill this wasp?'], ['Nee, dat is een sluipwesp. Die helpt ons.', 'No, that is a parasitic wasp. It helps us.']],
  ),
]);

// ---- Tyres, oil and brakes (the owner's request, 22 November 2026) ----
// The second own unit of the sector Garage (src/content/sectors.ts): changing tyres, changing the
// oil, brakes and lights, and reading faults with the job card. In the path of a learner who chose
// Garage it comes right after "In de garage"; in every other course it is appended at the very end
// (workUnits below), so no existing course changes. Already words of other lessons, used here in a
// sentence or the chat only: "de band", "de olie", "de motor", "de stoel" (u.garage) and "de rem".
// The drawings: src/pictures/groupAutoservice.tsx.

const carserviceUnit = unit('carservice', 'Tyres, oil and brakes', 'Banden, olie en remmen', '🛞', '#8a3b2e', [
  lesson(
    'tyres',
    'Changing tyres',
    [
      ['wielbout', 'de wielbout', 'the wheel bolt', '🔩'],
      ['slagmoersleutel', 'de slagmoersleutel', 'the impact wrench', '🔧'],
      ['bandenspanningsmeter', 'de bandenspanningsmeter', 'the tyre pressure gauge', '⏲️'],
      ['bandenprofiel', 'het bandenprofiel', 'the tyre tread (the grooves in the tyre)', '〰️'],
      ['velg', 'de velg', 'the wheel rim', '⭕'],
      ['bandenwisselaar', 'de bandenwisselaar', 'the tyre changer (a machine to take a tyre off the rim)', '⚙️'],
    ],
    [
      ['Draai de wielbouten kruislings vast.', 'Tighten the wheel bolts crosswise.'],
      ['Het bandenprofiel is te laag.', 'The tyre tread is too low.'],
      ['Meet de druk met de bandenspanningsmeter.', 'Measure the pressure with the tyre pressure gauge.'],
    ],
    [['Moeten deze banden eraf?', 'Must these tyres come off?'], ['Ja, het profiel is bijna weg.', 'Yes, the tread is almost gone.']],
  ),
  lesson(
    'oilchange',
    'Changing the oil',
    [
      ['oliefilter', 'het oliefilter', 'the oil filter', '🛢️'],
      ['oliepeilstok', 'de oliepeilstok', 'the dipstick (it shows how much oil there is)', '📏'],
      ['opvangbak', 'de opvangbak', 'the drain pan (it catches the old oil)', '🫗'],
      ['trechter', 'de trechter', 'the funnel', '🔻'],
      ['aftapplug', 'de aftapplug', 'the drain plug', '🔩'],
      ['olievat', 'het olievat', 'the oil drum', '🛢️'],
    ],
    [
      ['Zet de opvangbak onder de motor.', 'Put the drain pan under the engine.'],
      ['Draai de aftapplug los.', 'Undo the drain plug.'],
      ['Kijk op de oliepeilstok.', 'Look at the dipstick.'],
    ],
    [['Hoeveel olie moet erin?', 'How much oil must go in?'], ['Vier liter. Kijk daarna op de peilstok.', 'Four litres. Then look at the dipstick.']],
  ),
  lesson(
    'brakes',
    'Brakes and lights',
    [
      ['remschijf', 'de remschijf', 'the brake disc', '⚪'],
      ['remblok', 'het remblok', 'the brake pad', '🟫'],
      ['koplamp', 'de koplamp', 'the headlight', '🔦'],
      ['remvloeistof', 'de remvloeistof', 'the brake fluid', '🧴'],
      ['remklauw', 'de remklauw', 'the brake caliper', '🦞'],
      ['achterlamp', 'de achterlamp', 'the rear light', '🔴'],
    ],
    [
      ['De remblokken zijn versleten.', 'The brake pads are worn.'],
      ['Controleer de remvloeistof.', 'Check the brake fluid.'],
      ['De linker achterlamp doet het niet.', 'The left rear light does not work.'],
    ],
    [['Moet de remschijf ook nieuw?', 'Does the brake disc need replacing too?'], ['Ja, hij is te dun.', 'Yes, it is too thin.']],
  ),
  lesson(
    'diagnosis',
    'Reading faults and the job card',
    [
      ['diagnosecomputer', 'de diagnosecomputer', 'the diagnostic tester (it reads the faults of the car)', '💻'],
      ['waarschuwingslampje', 'het waarschuwingslampje', 'the warning light (on the dashboard)', '🟠'],
      ['werkorder', 'de werkorder', 'the job card (what must be done on the car)', '📋'],
      ['kentekenplaat', 'de kentekenplaat', 'the number plate', '🚘'],
      ['autosleutel', 'de autosleutel', 'the car key', '🗝️'],
      ['stoelhoes', 'de stoelhoes', 'the seat cover (it keeps the seat clean)', '💺'],
    ],
    [
      ['Sluit de diagnosecomputer aan.', 'Connect the diagnostic tester.'],
      ['Het waarschuwingslampje brandt.', 'The warning light is on.'],
      ['Leg een stoelhoes op de stoel.', 'Put a seat cover on the seat.'],
    ],
    [['Wat moet er aan deze auto gebeuren?', 'What must be done on this car?'], ['Kijk op de werkorder.', 'Look at the job card.']],
  ),
]);

// ---- Mowing and pruning, and Planting, weeds and the street (the owner's request, 23 November 2026) ----
// The two own units of the new sector Groen (green-space work: hoveniers, groenvoorziening, the
// plantsoenendienst; src/content/sectors.ts): mowing, pruning, the hedge and the machines; weeding,
// planting, work by the road and litter. In the path of a learner who chose Groen they come in the
// sector slot; in every other course they are appended at the very end (workUnits below), so no
// existing course changes. Already words of other lessons, used here in a sentence or the chat
// only: "het hesje", "de vrachtwagen", "tanken", "de ingang", "de gemeente" and "de motor". The
// drawings (placeholders for now): src/pictures/groupGroen.tsx.

const mowingUnit = unit('mowing', 'Mowing and pruning', 'Maaien en snoeien', '🌳', '#4f7a28', [
  lesson(
    'mowing',
    'Mowing the grass',
    [
      ['gras', 'het gras', 'the grass', '🌱'],
      ['maaien', 'maaien', 'to mow (to cut grass)', '🌾'],
      ['grasmaaier', 'de grasmaaier', 'the lawnmower', '🚜'],
      ['zitmaaier', 'de zitmaaier', 'the ride-on mower (a mower you sit on)', '🏎️'],
      ['bosmaaier', 'de bosmaaier', 'the brush cutter (a mower on a long stick)', '🪓'],
      ['gelaatsscherm', 'het gelaatsscherm', 'the face shield', '🥽'],
    ],
    [
      ['Maai eerst het gras langs de rand.', 'First mow the grass along the edge.'],
      ['Het gras is te nat. We maaien morgen.', 'The grass is too wet. We will mow tomorrow.'],
      ['Zet je gelaatsscherm op.', 'Put on your face shield.'],
    ],
    [['Mag ik de zitmaaier pakken?', 'May I take the ride-on mower?'], ['Ja, maar haal eerst de stenen weg.', 'Yes, but first take the stones away.']],
  ),
  lesson(
    'pruning',
    'Pruning',
    [
      ['snoeien', 'snoeien', 'to prune (to cut branches off a plant)', '🌿'],
      ['snoeischaar', 'de snoeischaar', 'the pruning shears', '✂️'],
      ['tak', 'de tak', 'the branch', '🎋'],
      ['struik', 'de struik', 'the bush, the shrub', '🌳'],
      ['boom', 'de boom', 'the tree', '🌲'],
      ['snoeizaag', 'de snoeizaag', 'the pruning saw', '🪚'],
    ],
    [
      ['Snoei de struiken langs het pad.', 'Prune the bushes along the path.'],
      ['Deze tak is dood. Zaag hem eraf.', 'This branch is dead. Saw it off.'],
      ['Leg de takken op een hoop.', 'Put the branches on a pile.'],
    ],
    [['Welke takken moeten eraf?', 'Which branches must come off?'], ['Alleen de dode takken.', 'Only the dead branches.']],
  ),
  lesson(
    'hedge',
    'Trimming the hedge',
    [
      ['heg', 'de heg', 'the hedge', '🟩'],
      ['heggenschaar', 'de heggenschaar', 'the hedge trimmer (a machine that cuts a hedge)', '⚡'],
      ['kruiwagen', 'de kruiwagen', 'the wheelbarrow', '🛺'],
      ['hark', 'de hark', 'the rake', '🔱'],
      ['snoeiafval', 'het snoeiafval', 'the green waste (cut branches and leaves)', '♻️'],
      ['zeil', 'het zeil', 'the tarp (a big plastic sheet)', '⛺'],
    ],
    [
      ['Leg het zeil onder de heg.', 'Put the tarp under the hedge.'],
      ['Knip de heg mooi recht.', 'Cut the hedge nice and straight.'],
      ['Breng het snoeiafval weg met de kruiwagen.', 'Take the green waste away with the wheelbarrow.'],
    ],
    [['Hoe hoog moet de heg blijven?', 'How high must the hedge stay?'], ['Tot het touw. Niet lager.', 'Up to the line. Not lower.']],
  ),
  lesson(
    'chainsaw',
    'The chainsaw and the leaf blower',
    [
      ['kettingzaag', 'de kettingzaag', 'the chainsaw', '⛓️'],
      ['stam', 'de stam', 'the trunk (of a tree)', '🪵'],
      ['zaagbroek', 'de zaagbroek', 'the chainsaw trousers (they stop the chain)', '👖'],
      ['bladblazer', 'de bladblazer', 'the leaf blower', '🌬️'],
      ['bladeren', 'de bladeren', 'the leaves', '🍂'],
      ['jerrycan', 'de jerrycan', 'the jerrycan (a can for fuel)', '⛽'],
    ],
    [
      ['Trek je zaagbroek aan.', 'Put on your chainsaw trousers.'],
      ['Blaas de bladeren op een hoop.', 'Blow the leaves onto a pile.'],
      ['Tank pas als de motor koud is.', 'Only fill up when the engine is cold.'],
    ],
    [['Mag ik met de kettingzaag werken?', 'May I work with the chainsaw?'], ['Nog niet. Eerst krijg je een cursus.', 'Not yet. First you get a course.']],
  ),
]);

const plantingUnit = unit('planting', 'Planting, weeds and the street', 'Planten, onkruid en de straat', '🌷', '#6a8f2a', [
  lesson(
    'weeding',
    'Weeding',
    [
      ['onkruid', 'het onkruid', 'the weeds (plants that must go)', '🥀'],
      ['wieden', 'wieden', 'to weed (to pull out weeds)', '🤏'],
      ['schoffel', 'de schoffel', 'the hoe', '⛏️'],
      ['perk', 'het perk', 'the flower bed', '🌷'],
      ['onkruidbrander', 'de onkruidbrander', 'the weed burner (it kills weeds with heat)', '🔥'],
      ['wortel', 'de wortel', 'the root (of a plant)', '🫚'],
    ],
    [
      ['Trek het onkruid eruit, met de wortel.', 'Pull the weeds out, with the root.'],
      ['Schoffel het perk bij de ingang.', 'Hoe the flower bed by the entrance.'],
      ['Pas op: de onkruidbrander is heet.', 'Careful: the weed burner is hot.'],
    ],
    [['Is dit onkruid?', 'Is this a weed?'], ['Nee, dat is een plant. Laat hem staan.', 'No, that is a plant. Leave it.']],
  ),
  lesson(
    'planting',
    'Planting',
    [
      ['planten', 'planten', 'to plant', '🪴'],
      ['schep', 'de schep', 'the shovel, the spade', '🪏'],
      ['plantgat', 'het plantgat', 'the planting hole', '🕳️'],
      ['kluit', 'de kluit', 'the root ball (the soil around the roots)', '🥔'],
      ['compost', 'de compost', 'the compost', '🪱'],
      ['boompaal', 'de boompaal', 'the tree stake (a pole that holds a young tree)', '📍'],
    ],
    [
      ['Graaf een plantgat voor de boom.', 'Dig a planting hole for the tree.'],
      ['Zet de boom recht, naast de boompaal.', 'Put the tree straight, next to the stake.'],
      ['Geef de nieuwe planten veel water.', 'Give the new plants a lot of water.'],
    ],
    [['Waar moet deze plant?', 'Where does this plant go?'], ['Achter in het perk, bij de muur.', 'At the back of the flower bed, by the wall.']],
  ),
  lesson(
    'roadside',
    'Working by the road',
    [
      ['pion', 'de pion', 'the traffic cone', '🔶'],
      ['verkeer', 'het verkeer', 'the traffic', '🚦'],
      ['stoep', 'de stoep', 'the pavement (the path next to the road)', '⬜'],
      ['fietser', 'de fietser', 'the cyclist', '🚴'],
      ['pijlwagen', 'de pijlwagen', 'the arrow trailer (a trailer with a big arrow that warns drivers)', '➡️'],
      ['berm', 'de berm', 'the verge (the grass next to the road)', '🛣️'],
    ],
    [
      ['Trek je hesje aan. We werken langs de weg.', 'Put on your vest. We are working by the road.'],
      ['Zet de pionnen achter de bus.', 'Put the cones behind the van.'],
      ['Kijk uit voor de fietsers.', 'Watch out for the cyclists.'],
    ],
    [['Kan ik nu oversteken?', 'Can I cross now?'], ['Nee, wacht. Er komt een vrachtwagen.', 'No, wait. A truck is coming.']],
  ),
  lesson(
    'litter',
    'Litter and the neighbourhood',
    [
      ['zwerfafval', 'het zwerfafval', 'the litter (rubbish on the street)', '🥤'],
      ['grijper', 'de grijper', 'the litter picker (a stick that grabs rubbish)', '🦾'],
      ['vuilniszak', 'de vuilniszak', 'the rubbish bag', '🛍️'],
      ['scherven', 'de scherven', 'the broken glass (sharp pieces)', '💔'],
      ['aanhanger', 'de aanhanger', 'the trailer', '🔗'],
      ['bewoner', 'de bewoner', 'the resident (someone who lives here)', '🏠'],
    ],
    [
      ['Pak het zwerfafval met de grijper.', 'Pick up the litter with the litter picker.'],
      ['Pas op, hier liggen scherven.', 'Careful, there is broken glass here.'],
      ['Zet de vuilniszakken bij de aanhanger.', 'Put the rubbish bags by the trailer.'],
    ],
    [['Wanneer wordt deze boom gesnoeid?', 'When will this tree be pruned?'], ['Dat weet ik niet. Vraag het aan de gemeente.', 'I do not know. Ask the municipality.']],
  ),
]);

// ---- Reception, post and meetings, and Faults, repairs and moving (the owner's request, 23 November 2026) ----
// The two own units of the new sector Facilitair (facility services; src/content/sectors.ts; the
// cleaning work stays the sector Schoonmaak): the front desk, visitors, post and parcels, the meeting
// room and the coffee; reporting faults, small repairs, moving a workplace, and opening and closing
// the building. In the path of a learner who chose Facilitair they come in the sector slot; in
// every other course they are appended at the very end (workUnits below). Already words of other
// lessons, used here in a sentence or the chat only: "de afspraak", "het pakket", "beschadigd",
// "de verdieping", "de koffie", "de tafel", "de stoel", "de storing", "de monteur", "kapot", "de
// lamp", "de gang", "de trap", "de doos", "de steekwagen" and "leegmaken". The drawings
// (placeholders for now): src/pictures/groupFacilitair.tsx.

const frontdeskUnit = unit('frontdesk', 'Reception, post and meetings', 'Receptie, post en vergaderen', '🛎️', '#3d5a80', [
  lesson(
    'reception',
    'At the front desk',
    [
      ['balie', 'de balie', 'the front desk, the counter', '🛎️'],
      ['bezoeker', 'de bezoeker', 'the visitor', '🧍'],
      ['intercom', 'de intercom', 'the intercom (you talk to someone at the door)', '📟'],
      ['doorverbinden', 'doorverbinden', 'to put through (a phone call)', '↔️'],
      ['toestel', 'het toestel', 'the extension (a phone number inside the building)', '☎️'],
      ['wachtruimte', 'de wachtruimte', 'the waiting area', '🛋️'],
    ],
    [
      ['Goedemorgen, kan ik u helpen?', 'Good morning, can I help you?'],
      ['Ik verbind u door.', 'I will put you through.'],
      ['Neemt u even plaats in de wachtruimte.', 'Please take a seat in the waiting area.'],
    ],
    [['Ik heb een afspraak met mevrouw Jansen.', 'I have an appointment with Mrs Jansen.'], ['Een moment. Ik bel haar even.', 'One moment. I will call her.']],
  ),
  lesson(
    'visitors',
    'Receiving visitors',
    [
      ['bezoekerspasje', 'het bezoekerspasje', 'the visitor pass', '📛'],
      ['lift', 'de lift', 'the lift, the elevator', '🛗'],
      ['garderobe', 'de garderobe', 'the cloakroom (where you hang your coat)', '🧣'],
      ['parkeerplaats', 'de parkeerplaats', 'the parking space', '🚙'],
      ['hal', 'de hal', 'the hall (the big room at the entrance)', '🏛️'],
      ['begeleiden', 'begeleiden', 'to take someone somewhere (to walk with them)', '🚶'],
    ],
    [
      ['Wilt u hier uw naam schrijven?', 'Would you write your name here?'],
      ['Hier is uw bezoekerspasje.', 'Here is your visitor pass.'],
      ['Ik breng u naar de lift.', 'I will take you to the lift.'],
    ],
    [['Waar kan ik mijn jas laten?', 'Where can I leave my coat?'], ['In de garderobe, naast de lift.', 'In the cloakroom, next to the lift.']],
  ),
  lesson(
    'mailroom',
    'Post and parcels',
    [
      ['postkamer', 'de postkamer', 'the post room', '📮'],
      ['koerier', 'de koerier', 'the courier (someone who brings parcels)', '🛵'],
      ['postvak', 'het postvak', 'the pigeonhole (a box for post, one per person)', '📫'],
      ['envelop', 'de envelop', 'the envelope', '✉️'],
      ['afdeling', 'de afdeling', 'the department', '🏬'],
      ['postkar', 'de postkar', 'the post trolley', '🛒'],
    ],
    [
      ['De koerier brengt een pakket.', 'The courier brings a parcel.'],
      ['Leg de brieven in het goede postvak.', 'Put the letters in the right pigeonhole.'],
      ['Dit pakket is beschadigd.', 'This parcel is damaged.'],
    ],
    [['Voor wie is dit pakket?', 'Who is this parcel for?'], ['Voor Financiën, op de tweede verdieping.', 'For Finance, on the second floor.']],
  ),
  lesson(
    'meetingroom',
    'Setting up a meeting room',
    [
      ['vergaderzaal', 'de vergaderzaal', 'the meeting room', '🪑'],
      ['beamer', 'de beamer', 'the projector', '📽️'],
      ['whiteboard', 'het whiteboard', 'the whiteboard', '⬜'],
      ['thermoskan', 'de thermoskan', 'the thermos jug (it keeps coffee hot)', '🫖'],
      ['kopje', 'het kopje', 'the cup', '☕'],
      ['koffieautomaat', 'de koffieautomaat', 'the coffee machine', '🎛️'],
    ],
    [
      ['Zet tien stoelen rond de tafel.', 'Put ten chairs around the table.'],
      ['Zet koffie en thee klaar.', 'Get coffee and tea ready.'],
      ['De beamer doet het niet.', 'The projector does not work.'],
    ],
    [['Hoe laat begint de vergadering?', 'What time does the meeting start?'], ['Om tien uur. Zorg dat alles klaarstaat.', 'At ten. Make sure everything is ready.']],
  ),
]);

const maintenanceUnit = unit('maintenance', 'Faults, repairs and moving', 'Storingen, onderhoud en verhuizen', '🧰', '#7a5a2e', [
  lesson(
    'faults',
    'Reporting a fault',
    [
      ['melding', 'de melding', 'the report (you tell that something is wrong)', '📢'],
      ['lekkage', 'de lekkage', 'the leak (water comes out)', '🚿'],
      ['verwarming', 'de verwarming', 'the heating', '♨️'],
      ['airco', 'de airco', 'the air conditioning', '❄️'],
      ['afvoer', 'de afvoer', 'the drain', '🚽'],
      ['verstopt', 'verstopt', 'blocked (nothing goes through)', '🚫'],
    ],
    [
      ['Ik maak een melding van de storing.', 'I am reporting the fault.'],
      ['Er is een lekkage in de keuken.', 'There is a leak in the kitchen.'],
      ['De afvoer van de wc is verstopt.', 'The toilet drain is blocked.'],
    ],
    [['Waarom is het hier zo koud?', 'Why is it so cold here?'], ['De verwarming is kapot. De monteur komt morgen.', 'The heating is broken. The technician comes tomorrow.']],
  ),
  lesson(
    'repairs',
    'Small repairs',
    [
      ['vervangen', 'vervangen', 'to replace (to put a new one in)', '🔄'],
      ['deurklink', 'de deurklink', 'the door handle', '🚪'],
      ['scharnier', 'het scharnier', 'the hinge', '📎'],
      ['gereedschapskist', 'de gereedschapskist', 'the toolbox', '🧰'],
      ['rookmelder', 'de rookmelder', 'the smoke alarm', '🔔'],
      ['batterij', 'de batterij', 'the battery', '🔋'],
    ],
    [
      ['Vervang de lamp in de gang.', 'Replace the lamp in the corridor.'],
      ['De deurklink zit los.', 'The door handle is loose.'],
      ['Pak de trap, niet een stoel.', 'Take the stepladder, not a chair.'],
    ],
    [['Piept de rookmelder?', 'Is the smoke alarm beeping?'], ['Ja, de batterij is bijna leeg.', 'Yes, the battery is almost empty.']],
  ),
  lesson(
    'moving',
    'Moving a workplace',
    [
      ['verhuisdoos', 'de verhuisdoos', 'the moving box', '📦'],
      ['bureau', 'het bureau', 'the desk', '🗄️'],
      ['bureaustoel', 'de bureaustoel', 'the office chair', '💺'],
      ['werkplek', 'de werkplek', 'the workplace (the desk where someone works)', '💻'],
      ['kamernummer', 'het kamernummer', 'the room number', '🔢'],
      ['plattegrond', 'de plattegrond', 'the floor plan (a map of the building)', '🗺️'],
    ],
    [
      ['Schrijf het kamernummer op elke doos.', 'Write the room number on every box.'],
      ['Zet de dozen op de steekwagen.', 'Put the boxes on the hand truck.'],
      ['Maak de werkplek leeg.', 'Clear the workplace.'],
    ],
    [['Waar moet dit bureau naartoe?', 'Where must this desk go?'], ['Naar kamer twaalf. Kijk op de plattegrond.', 'To room twelve. Look at the floor plan.']],
  ),
  lesson(
    'closing',
    'Opening and closing the building',
    [
      ['sleutelbos', 'de sleutelbos', 'the bunch of keys', '🗝️'],
      ['afsluiten', 'afsluiten', 'to lock up', '🔐'],
      ['ronde', 'de ronde', 'the round (a walk past every room)', '🔁'],
      ['raam', 'het raam', 'the window', '🪟'],
      ['alarmcode', 'de alarmcode', 'the alarm code', '🚨'],
      ['nachtslot', 'het nachtslot', 'the deadlock (the extra lock for the night)', '🌙'],
    ],
    [
      ['Ik loop de laatste ronde door het gebouw.', 'I am doing the last round of the building.'],
      ['Zijn alle ramen dicht?', 'Are all the windows closed?'],
      ['Doe de deur op het nachtslot.', 'Put the door on the deadlock.'],
    ],
    [['Is er nog iemand binnen?', 'Is anyone still inside?'], ['Nee, iedereen is weg. Ik sluit af.', 'No, everyone has gone. I am locking up.']],
  ),
]);

// ---- Patrols and access, and Emergencies and the shop (the owner's request, 23 November 2026) ----
// The two own units of the new sector Beveiliging (security guards; src/content/sectors.ts): the
// round, access control, the cameras and the control room, the radio and the report; fire and
// evacuation, first aid and 112, shop theft, and difficult people. In the path of a learner who
// chose Beveiliging they come in the sector slot; in every other course they are appended at the
// very end (workUnits below), so no existing course changes. Already words of other lessons, used
// here in a sentence or the chat only: "de beveiliger", "het pasje", "de camera", "het alarm",
// "verdacht", "melden", "de getuige", "de brand", "ontruimen", "de verzamelplaats", "de
// brandblusser", "de ambulance", "de politie", "de dief", "de tas", "het bewijs", "de aangifte",
// "dreigen", "de ronde", "de EHBO-doos" and "de BHV’er". The drawings (placeholders for now):
// src/pictures/groupBeveiliging.tsx.

const guardingUnit = unit('guarding', 'Patrols and access', 'Ronde en toegang', '🛡️', '#2c3e66', [
  lesson(
    'patrol',
    'The round',
    [
      ['surveilleren', 'surveilleren', 'to patrol (to walk around and watch)', '👮'],
      ['zaklamp', 'de zaklamp', 'the torch, the flashlight', '🔦'],
      ['terrein', 'het terrein', 'the grounds (the land around a building)', '🏞️'],
      ['hek', 'het hek', 'the fence, the gate', '🔒'],
      ['inbraak', 'de inbraak', 'the break-in (someone gets in to steal)', '🥷'],
      ['openstaan', 'openstaan', 'to be open (a door or window that should be closed)', '🚪'],
    ],
    [
      ['Ik loop elke twee uur een ronde.', 'I do a round every two hours.'],
      ['Het hek achter de hal staat open.', 'The gate behind the hall is open.'],
      ['Neem je zaklamp mee.', 'Take your torch with you.'],
    ],
    [['Heb je iets gezien tijdens je ronde?', 'Did you see anything during your round?'], ['Ja. Er stond een raam open bij de achterdeur.', 'Yes. A window was open by the back door.']],
  ),
  lesson(
    'access',
    'Access control',
    [
      ['slagboom', 'de slagboom', 'the barrier (a bar across the road that goes up)', '🚧'],
      ['toegangspas', 'de toegangspas', 'the access card (a card that opens the door)', '💳'],
      ['legitimatie', 'de legitimatie', 'the ID (a passport or an ID card)', '🪪'],
      ['draaihek', 'het draaihek', 'the turnstile (a gate that turns, for one person at a time)', '🔄'],
      ['kenteken', 'het kenteken', 'the registration number (the letters and numbers of a car)', '🚗'],
      ['toegang', 'de toegang', 'the access (you may go in)', '🔑'],
    ],
    [
      ['Mag ik uw legitimatie zien?', 'May I see your ID?'],
      ['Uw pas werkt niet. Ik bel even.', 'Your card does not work. I will make a call.'],
      ['Ik doe de slagboom open.', 'I will open the barrier.'],
      // The VOG round (23 November 2026): a fourth sentence with a new id (s.access.4), so the three
      // translated ones stay valid. ⚖️ check: a guard works only with a beveiligerspas, given after a
      // screening by the police ⚖️ (Wpbr art. 7: toestemming van de korpschef na screening; the same
      // as r.l.beveiliging.1 in src/content/regels/units/sector2.ts). Belgium: the identificatiekaart
      // (src/content/taalBe/units/guarding.ts).
      ['Ik krijg mijn beveiligerspas na de screening.', 'I get my security guard pass after the screening.'],
    ],
    [['Mag ik even naar binnen? Ik ben mijn pas vergeten.', 'May I go in? I forgot my card.'], ['Sorry, zonder pas mag u niet naar binnen.', 'Sorry, without a card you may not go in.']],
  ),
  lesson(
    'cameras',
    'Cameras and the control room',
    [
      ['meldkamer', 'de meldkamer', 'the control room (where people watch the cameras and take calls)', '🖥️'],
      ['beeldscherm', 'het beeldscherm', 'the monitor, the screen', '📺'],
      ['camerabeelden', 'de camerabeelden', 'the camera footage (what the camera has filmed)', '📹'],
      ['inzoomen', 'inzoomen', 'to zoom in', '🔍'],
      ['bewegingsmelder', 'de bewegingsmelder', 'the motion sensor (it sees when something moves)', '📡'],
      ['verdachte', 'de verdachte', 'the suspect', '🕵️'],
    ],
    [
      ['Op camera drie zie ik iemand bij het hek.', 'On camera three I see someone by the fence.'],
      ['Ik zoom even in.', 'I will zoom in.'],
      ['De meldkamer belt de politie.', 'The control room calls the police.'],
    ],
    [['Wat zie je op het scherm?', 'What do you see on the screen?'], ['Een man bij het hek. Ik stuur een collega.', 'A man by the fence. I am sending a colleague.']],
  ),
  lesson(
    'report',
    'The radio and the report',
    [
      ['portofoon', 'de portofoon', 'the two-way radio, the walkie-talkie', '📻'],
      ['rapport', 'het rapport', 'the report (what happened, written down)', '📝'],
      ['incident', 'het incident', 'the incident (something that went wrong)', '⚠️'],
      ['tijdstip', 'het tijdstip', 'the time (when something happened)', '🕒'],
      ['logboek', 'het logboek', 'the logbook (a book or an app where you write down everything)', '📓'],
      ['oproepen', 'oproepen', 'to call (on the radio)', '🗣️'],
    ],
    [
      ['Ik schrijf een rapport van het incident.', 'I am writing a report of the incident.'],
      ['Hoe laat was het precies?', 'What time was it exactly?'],
      ['Ik hoor je niet goed. Herhaal het even.', 'I cannot hear you well. Say it again.'],
    ],
    [['Wat moet er in het rapport?', 'What must go in the report?'], ['Wat er gebeurde, waar en hoe laat.', 'What happened, where and at what time.']],
  ),
]);

const incidentsUnit = unit('incidents', 'Emergencies and the shop', 'Noodgevallen en de winkel', '🚨', '#8c2f39', [
  lesson(
    'evacuation',
    'Fire and evacuation',
    [
      ['brandmelder', 'de brandmelder', 'the fire alarm button (a red box you press when there is a fire)', '🟥'],
      ['brandweer', 'de brandweer', 'the fire brigade', '🚒'],
      ['branddeur', 'de branddeur', 'the fire door (it stops fire and smoke)', '🚪'],
      ['brandmeldcentrale', 'de brandmeldcentrale', 'the fire alarm panel (it shows where the alarm is)', '🎛️'],
      ['ontruimingsplan', 'het ontruimingsplan', 'the evacuation plan (who does what when everyone must go out)', '🗺️'],
      ['sirene', 'de sirene', 'the siren', '🔊'],
    ],
    [
      ['Er is brandalarm in hal twee.', 'There is a fire alarm in hall two.'],
      ['Houd de branddeuren dicht.', 'Keep the fire doors closed.'],
      ['Ik wacht op de brandweer bij de ingang.', 'I am waiting for the fire brigade at the entrance.'],
    ],
    [['Is iedereen buiten?', 'Is everyone outside?'], ['Nee, ik mis nog twee mensen van de lijst.', 'No, two people on the list are still missing.']],
  ),
  lesson(
    'firstaid',
    'First aid and 112',
    [
      ['ehbo', 'de EHBO', 'first aid', '⛑️'],
      ['aed', 'de AED', 'the AED (a machine that helps a heart that stopped)', '❤️‍🩹'],
      ['reanimeren', 'reanimeren', 'to do CPR (to press on the chest to save a life)', '🫀'],
      ['bewusteloos', 'bewusteloos', 'unconscious (the person does not wake up)', '😵'],
      ['ademen', 'ademen', 'to breathe', '😮‍💨'],
      ['alarmnummer', 'het alarmnummer', 'the emergency number (112)', '☎️'],
    ],
    [
      ['Bel 112. Vraag om een ambulance.', 'Call 112. Ask for an ambulance.'],
      ['Haal de AED bij de receptie.', 'Get the AED from the reception.'],
      ['Hij ademt niet. Ik ga reanimeren.', 'He is not breathing. I am going to do CPR.'],
    ],
    [['Waar hangt de AED?', 'Where is the AED?'], ['Bij de ingang, naast de lift.', 'At the entrance, next to the lift.']],
  ),
  lesson(
    'shoplifting',
    'Shop theft',
    [
      ['winkeldiefstal', 'de winkeldiefstal', 'the shoplifting', '🛍️'],
      ['heterdaad', 'op heterdaad', 'in the act (you see it happen)', '👁️'],
      ['aanhouden', 'aanhouden', 'to hold someone (until the police come)', '✋'],
      ['detectiepoortje', 'het detectiepoortje', 'the security gate (it beeps at the door)', '🚥'],
      ['alarmlabel', 'het alarmlabel', 'the security tag (it makes the gate beep)', '🏷️'],
      ['verstoppen', 'verstoppen', 'to hide', '🫣'],
    ],
    [
      ['Het poortje piept bij de uitgang.', 'The gate beeps at the exit.'],
      ['Ik zag het op heterdaad.', 'I saw it happen.'],
      ['Ik houd hem aan tot de politie komt.', 'I am holding him until the police come.'],
    ],
    [['Mag ik zijn tas doorzoeken?', 'May I search his bag?'], ['Nee. Dat doet de politie.', 'No. The police do that.']],
  ),
  lesson(
    'aggression',
    'Difficult people',
    [
      ['agressie', 'de agressie', 'the aggression (angry, violent behaviour)', '😡'],
      ['schelden', 'schelden', 'to swear at someone', '🤬'],
      ['kalmeren', 'kalmeren', 'to calm down', '😌'],
      ['afstand', 'de afstand', 'the distance', '↔️'],
      ['huisverbod', 'het huisverbod', 'the ban (you may not come in here any more)', '⛔'],
      ['bodycam', 'de bodycam', 'the body camera (a small camera on your uniform)', '📷'],
    ],
    [
      ['Rustig, meneer. Ik wil u helpen.', 'Calm down, sir. I want to help you.'],
      ['Houd afstand en blijf kalm.', 'Keep your distance and stay calm.'],
      ['U hebt een huisverbod. U moet nu weggaan.', 'You are banned. You must leave now.'],
    ],
    [['Waarom mag ik niet naar binnen?', 'Why may I not go in?'], ['U hebt hier een huisverbod.', 'You are banned here.']],
  ),
]);

// ---- Hygiene and the cold, and The production line (the owner's request, 23 November 2026) ----
// The two own units of the new sector Voedingsindustrie (food production: meat, fish, bakery and
// food packing; src/content/sectors.ts): the hygiene lock, allergens, the cold room and the
// freezer, glass and metal in the food; cutting and weighing, packing and labels, cleaning the line
// and HACCP in simple words. In the path of a learner who chose Voedingsindustrie they come in the
// sector slot; in every other course they are appended at the very end (workUnits below). Already
// words of other lessons (many of "Werken met voedsel", l.food), used here in a sentence or the
// chat only: "het haarnetje", "de sieraden", "handen wassen", "de koelcel", "de vriescel", "de
// thermometer", "de pleister", "afkeuren", "de afkeurbak", "snijden", "het mes", "de
// snijhandschoen", "slijpen", "de weegschaal", "het etiket", "de houdbaarheidsdatum", "het bakje",
// "de sealmachine", "spoelen", "het schoonmaakmiddel", "aftekenen", "de lijst" and "de kwaliteit".
// The drawings (placeholders for now): src/pictures/groupVoeding.tsx.

const foodhygieneUnit = unit('foodhygiene', 'Hygiene and the cold', 'Hygiëne en kou', '🧼', '#2f7f8a', [
  lesson(
    'hygienelock',
    'The hygiene lock',
    [
      ['hygienesluis', 'de hygiënesluis', 'the hygiene lock (the room where you get clean before you go in)', '🚿'],
      ['baardnetje', 'het baardnetje', 'the beard net', '🧔'],
      ['laarzenwasser', 'de laarzenwasser', 'the boot washer (brushes that clean your boots)', '👢'],
      ['desinfecteren', 'desinfecteren', 'to disinfect (to kill germs)', '🧴'],
      ['werkjas', 'de werkjas', 'the work coat', '🥼'],
      ['bacterie', 'de bacterie', 'the germ, the bacteria', '🦠'],
    ],
    [
      ['Was je handen en desinfecteer ze.', 'Wash your hands and disinfect them.'],
      ['Zet je haarnetje en je baardnetje op.', 'Put on your hair net and your beard net.'],
      ['Loop door de laarzenwasser.', 'Walk through the boot washer.'],
    ],
    [['Mag mijn horloge om?', 'May I keep my watch on?'], ['Nee, alle sieraden gaan af.', 'No, all jewellery comes off.']],
  ),
  lesson(
    'allergens',
    'Allergens',
    [
      ['allergeen', 'het allergeen', 'the allergen (food that makes some people very ill)', '⚠️'],
      ['noten', 'de noten', 'the nuts', '🌰'],
      ['pinda', 'de pinda', 'the peanut', '🥜'],
      ['gluten', 'de gluten', 'the gluten (in wheat, so in bread and cake)', '🌾'],
      ['sesam', 'de sesam', 'the sesame (small seeds, for example on bread)', '🥯'],
      ['kruisbesmetting', 'de kruisbesmetting', 'the cross-contamination (something gets into food where it should not be)', '🔀'],
    ],
    [
      ['Dit product bevat noten.', 'This product contains nuts.'],
      ['Kijk op het etiket welke allergenen erin zitten.', 'Look on the label which allergens are in it.'],
      ['Maak alles goed schoon na de pinda’s.', 'Clean everything well after the peanuts.'],
    ],
    [['Mag dit bakje bij de andere?', 'May this tub go with the others?'], ['Nee, daar zitten noten in.', 'No, there are nuts in it.']],
  ),
  lesson(
    'coldroom',
    'The cold room and the freezer',
    [
      ['temperatuur', 'de temperatuur', 'the temperature', '🌡️'],
      ['graden', 'de graden', 'the degrees (°C)', '🔢'],
      ['bevroren', 'bevroren', 'frozen', '🧊'],
      ['ontdooien', 'ontdooien', 'to thaw, to defrost', '💧'],
      ['koelketen', 'de koelketen', 'the cold chain (food stays cold all the way)', '⛓️'],
      ['thermokleding', 'de thermokleding', 'the thermal clothes (warm clothes for the cold)', '🧥'],
    ],
    [
      ['Het is min achttien graden in de vriescel.', 'It is minus eighteen degrees in the freezer room.'],
      ['Zet het vlees meteen in de koelcel.', 'Put the meat in the cold room at once.'],
      ['Schrijf de temperatuur op de lijst.', 'Write the temperature on the list.'],
    ],
    [['Waarom piept de koelcel?', 'Why is the cold room beeping?'], ['De deur staat open. Doe hem snel dicht.', 'The door is open. Close it quickly.']],
  ),
  lesson(
    'foreignbody',
    'Glass, metal and plastic in the food',
    [
      ['metaaldetector', 'de metaaldetector', 'the metal detector', '🧲'],
      ['glasbreuk', 'de glasbreuk', 'the glass breakage (glass that broke)', '🔨'],
      ['splinter', 'de splinter', 'the splinter (a small sharp piece)', '🪵'],
      ['vreemdvoorwerp', 'het vreemde voorwerp', 'the foreign body (something in the food that does not belong there)', '🔩'],
      ['vervuild', 'vervuild', 'contaminated (something dirty got in)', '🚱'],
      ['ploegleider', 'de ploegleider', 'the shift leader', '🧑‍🏭'],
    ],
    [
      ['De metaaldetector piept. Zet de band stil.', 'The metal detector beeps. Stop the line.'],
      ['Er is glasbreuk bij lijn twee.', 'Glass has broken at line two.'],
      ['Leg het product in de afkeurbak.', 'Put the product in the reject bin.'],
    ],
    [['Wat doe ik met dit stukje plastic?', 'What do I do with this bit of plastic?'], ['Laat het aan de ploegleider zien.', 'Show it to the shift leader.']],
  ),
]);

const foodlineUnit = unit('foodline', 'The production line', 'De productielijn', '🥩', '#a0522d', [
  lesson(
    'cutting',
    'Cutting and weighing',
    [
      ['uitbenen', 'uitbenen', 'to bone (to cut the bones out of meat)', '🍖'],
      ['fileren', 'fileren', 'to fillet (to cut fish or meat into flat pieces)', '🐟'],
      ['portie', 'de portie', 'the portion', '🍱'],
      ['wegen', 'wegen', 'to weigh', '⚖️'],
      ['gewicht', 'het gewicht', 'the weight', '🏋️'],
      ['snijplank', 'de snijplank', 'the cutting board', '🟫'],
    ],
    [
      ['Weeg elke portie.', 'Weigh every portion.'],
      ['Het gewicht is te laag.', 'The weight is too low.'],
      ['Slijp je mes voor je begint.', 'Sharpen your knife before you start.'],
    ],
    [['Hoeveel moet er in een bakje?', 'How much must go in a tub?'], ['Vijfhonderd gram. Kijk op de weegschaal.', 'Five hundred grams. Look at the scales.']],
  ),
  lesson(
    'labels',
    'Packing and labels',
    [
      ['etiketteren', 'etiketteren', 'to label (to put labels on)', '🏷️'],
      ['lotnummer', 'het lotnummer', 'the batch number (one number for one batch of products)', '#️⃣'],
      ['vacuum', 'vacuüm', 'vacuum-packed (all the air is out)', '🫙'],
      ['schaal', 'de schaal', 'the tray (a flat dish for food)', '🍽️'],
      ['printer', 'de printer', 'the printer', '🖨️'],
      ['omdoos', 'de omdoos', 'the outer box (the big box around the small packs)', '📦'],
    ],
    [
      ['Kijk of de datum op het etiket klopt.', 'Check that the date on the label is right.'],
      ['Dit pak is niet vacuüm. Pak het opnieuw in.', 'This pack is not vacuum-packed. Pack it again.'],
      ['Schrijf het lotnummer op de lijst.', 'Write the batch number on the list.'],
    ],
    [['Welke datum moet erop?', 'Which date must go on it?'], ['Over tien dagen. Kijk op de lijst.', 'In ten days. Look at the list.']],
  ),
  lesson(
    'linecleaning',
    'Cleaning the line',
    [
      ['schuim', 'het schuim', 'the foam', '🫧'],
      ['hogedrukspuit', 'de hogedrukspuit', 'the pressure washer', '💦'],
      ['naspoelen', 'naspoelen', 'to rinse (to wash off with clean water)', '🚿'],
      ['demonteren', 'demonteren', 'to take apart', '🔧'],
      ['borstel', 'de borstel', 'the brush', '🪥'],
      ['restjes', 'de restjes', 'the leftovers (small bits of food)', '🍞'],
    ],
    [
      ['Zet eerst de machine uit.', 'First turn the machine off.'],
      ['Spuit het schuim op de band.', 'Spray the foam onto the belt.'],
      ['Spoel daarna alles na met schoon water.', 'Then rinse everything with clean water.'],
    ],
    [['Is de band al schoon?', 'Is the belt clean yet?'], ['Nog niet. Ik moet nog naspoelen.', 'Not yet. I still have to rinse it.']],
  ),
  lesson(
    'haccp',
    'Checking and writing down (HACCP)',
    [
      ['controlepunt', 'het controlepunt', 'the check point (a step where you must check something)', '📍'],
      ['kerntemperatuur', 'de kerntemperatuur', 'the core temperature (the temperature inside the food)', '🔥'],
      ['prikthermometer', 'de prikthermometer', 'the probe thermometer (you stick it into the food)', '🌡️'],
      ['afwijking', 'de afwijking', 'the deviation (something is not as it should be)', '📉'],
      ['steekproef', 'de steekproef', 'the spot check (you test a few products)', '🎯'],
      ['kwaliteitsdienst', 'de kwaliteitsdienst', 'the quality department (QA)', '🧪'],
    ],
    [
      ['Meet de kerntemperatuur met de prikthermometer.', 'Measure the core temperature with the probe thermometer.'],
      ['Schrijf alles op de lijst.', 'Write everything on the list.'],
      ['Is er een afwijking? Meld het meteen.', 'Is something wrong? Report it at once.'],
    ],
    [['Waarom moet ik alles opschrijven?', 'Why must I write everything down?'], ['Zo weten we dat het eten veilig is.', 'That way we know the food is safe.']],
  ),
]);

// ---- Collecting waste, and The recycling yard (the owner's request, 23 November 2026) ----
// The two own units of the new sector Afval en recycling (src/content/sectors.ts): the bin lorry,
// reversing safely, sorting waste, and sharp things and lifting; the recycling yard, chemical
// waste, the baler and the wheel loader. In the path of a learner who chose Afval en recycling
// they come in the sector slot; in every other course they are appended at the very end (workUnits
// below). Already words of other lessons, used here in a sentence or the chat only: "de
// container", "ophalen", "de route", "de spiegel", "het glas", "de accu", "de batterij", "de
// noodstop", "tillen", "de lekbak", "het hesje", "gevaarlijk", "de vuilniszak", "de chauffeur",
// "de verf" and "de handschoenen". The drawings (placeholders for now): src/pictures/groupAfval.tsx.

const collectionUnit = unit('collection', 'Collecting waste', 'Afval ophalen', '🚛', '#4d6b3c', [
  lesson(
    'binlorry',
    'The bin lorry',
    [
      ['vuilniswagen', 'de vuilniswagen', 'the bin lorry, the garbage truck', '🚛'],
      ['kliko', 'de kliko', 'the wheelie bin (a bin on wheels)', '🗑️'],
      ['kieplift', 'de kieplift', 'the bin lift (it lifts the bin and tips it out)', '🏗️'],
      ['treeplank', 'de treeplank', 'the back step (a step at the back of the lorry)', '🪜'],
      ['bijplaatsing', 'de bijplaatsing', 'the extra rubbish (bags left next to the bin)', '🛍️'],
      ['ophaaldag', 'de ophaaldag', 'the collection day', '📅'],
    ],
    [
      ['Zet de kliko aan de kieplift.', 'Put the wheelie bin on the bin lift.'],
      ['Er staan zakken naast de container.', 'There are bags next to the container.'],
      ['De kliko is te zwaar. Laat hem staan.', 'The wheelie bin is too heavy. Leave it.'],
    ],
    [['Mag ik achterop meerijden?', 'May I ride on the back?'], ['Nee, je stapt in de cabine.', 'No, you get into the cab.']],
  ),
  lesson(
    'reversing',
    'Reversing safely',
    [
      ['achteruitrijden', 'achteruitrijden', 'to reverse (to drive backwards)', '🔙'],
      ['dodehoek', 'de dode hoek', 'the blind spot (where the driver cannot see you)', '🙈'],
      ['aanwijzer', 'de aanwijzer', 'the banksman (the person who guides the driver)', '🙋'],
      ['oogcontact', 'het oogcontact', 'the eye contact', '👀'],
      ['piepen', 'piepen', 'to beep', '🔊'],
      ['cabine', 'de cabine', 'the cab (where the driver sits)', '🚚'],
    ],
    [
      ['Ga nooit achter de wagen staan.', 'Never stand behind the lorry.'],
      ['Ik zie je niet in de spiegel.', 'I cannot see you in the mirror.'],
      ['Maak oogcontact met de chauffeur.', 'Make eye contact with the driver.'],
    ],
    [['Kun je mij helpen met achteruitrijden?', 'Can you help me reverse?'], ['Ja, ik sta links. Kijk in je spiegel.', 'Yes, I am on the left. Look in your mirror.']],
  ),
  lesson(
    'wastesorting',
    'Sorting waste',
    [
      ['papier', 'het papier', 'the paper', '📰'],
      ['plastic', 'het plastic', 'the plastic', '🧴'],
      ['gft', 'het gft', 'the food and garden waste (fruit, vegetables and plants)', '🍂'],
      ['restafval', 'het restafval', 'the general waste (what cannot be sorted)', '🚮'],
      ['karton', 'het karton', 'the cardboard', '📦'],
      ['blik', 'het blik', 'the can, the tin', '🥫'],
    ],
    [
      ['Het glas gaat in de glasbak.', 'The glass goes in the bottle bank.'],
      ['Dit hoort bij het restafval.', 'This belongs with the general waste.'],
      ['Vouw het karton plat.', 'Fold the cardboard flat.'],
    ],
    [['Waar moet een pizzadoos heen?', 'Where does a pizza box go?'], ['Bij het restafval. Er zit vet op.', 'With the general waste. There is grease on it.']],
  ),
  lesson(
    'wastesafety',
    'Sharp things and lifting',
    [
      ['snijwond', 'de snijwond', 'the cut (a wound from something sharp)', '🩸'],
      ['prikken', 'prikken', 'to prick (a sharp point goes into your skin)', '📌'],
      ['naald', 'de naald', 'the needle', '📍'],
      ['scherp', 'scherp', 'sharp', '🔪'],
      ['rugpijn', 'de rugpijn', 'the back pain', '🤕'],
      ['tetanusprik', 'de tetanusprik', 'the tetanus jab (an injection against an illness from dirt in a wound)', '💉'],
    ],
    [
      ['Pak een zak nooit van onderen vast.', 'Never hold a bag from below.'],
      ['Pas op, er zit glas in deze zak.', 'Careful, there is glass in this bag.'],
      ['Ik heb me geprikt aan een naald.', 'I pricked myself on a needle.'],
    ],
    [['Ik heb me gesneden. Wat moet ik doen?', 'I have cut myself. What must I do?'], ['Was de wond goed. En zeg het tegen mij.', 'Wash the wound well. And tell me.']],
  ),
]);

const recyclingUnit = unit('recycling', 'The recycling yard', 'De milieustraat', '♻️', '#3b7d5c', [
  lesson(
    'yard',
    'At the recycling yard',
    [
      ['milieustraat', 'de milieustraat', 'the recycling yard (where people bring big or special waste)', '♻️'],
      ['grofvuil', 'het grofvuil', 'the bulky waste (big things, like a sofa)', '🛋️'],
      ['puin', 'het puin', 'the rubble (broken stones and bricks)', '🧱'],
      ['matras', 'de matras', 'the mattress', '🛏️'],
      ['weegbrug', 'de weegbrug', 'the weighbridge (a scale for cars and lorries)', '⚖️'],
      ['afvalpas', 'de afvalpas', 'the waste pass (residents show it at the gate)', '💳'],
    ],
    [
      ['Het puin gaat in container vier.', 'The rubble goes in container four.'],
      ['Mag ik uw afvalpas zien?', 'May I see your waste pass?'],
      ['Rijd eerst over de weegbrug.', 'First drive over the weighbridge.'],
    ],
    [['Waar moet deze matras heen?', 'Where does this mattress go?'], ['In de container voor grofvuil, achteraan.', 'In the container for bulky waste, at the back.']],
  ),
  lesson(
    'hazardous',
    'Chemical waste',
    [
      ['chemischafval', 'het chemisch afval', 'the chemical waste (dangerous waste, like paint and oil)', '☣️'],
      ['spuitbus', 'de spuitbus', 'the spray can', '🧯'],
      ['asbest', 'het asbest', 'the asbestos (a dangerous material in old buildings)', '☠️'],
      ['lekken', 'lekken', 'to leak', '💧'],
      ['gevarensymbool', 'het gevarensymbool', 'the hazard symbol (a picture that warns for danger)', '🔶'],
      ['vat', 'het vat', 'the drum, the barrel', '🛢️'],
    ],
    [
      ['Zet de verf bij het chemisch afval.', 'Put the paint with the chemical waste.'],
      ['Deze fles lekt. Pak hem met handschoenen.', 'This bottle is leaking. Pick it up with gloves.'],
      ['Asbest moet goed ingepakt zijn.', 'Asbestos must be packed well.'],
    ],
    [['Wat zit er in deze fles?', 'What is in this bottle?'], ['Ik weet het niet. Zet hem apart.', 'I do not know. Put it aside.']],
  ),
  lesson(
    'baler',
    'The baler',
    [
      ['balenpers', 'de balenpers', 'the baler (a machine that presses waste into blocks)', '🗜️'],
      ['baal', 'de baal', 'the bale (a pressed block of paper or plastic)', '🟫'],
      ['persen', 'persen', 'to press', '⬇️'],
      ['vastlopen', 'vastlopen', 'to get stuck, to jam', '⛔'],
      ['binddraad', 'het binddraad', 'the baling wire', '➰'],
      ['vulopening', 'de vulopening', 'the loading opening (where the waste goes in)', '⬛'],
    ],
    [
      ['De pers zit vast. Druk op de noodstop.', 'The press is stuck. Push the emergency stop.'],
      ['Steek nooit je hand in de pers.', 'Never put your hand into the press.'],
      ['Bind de baal goed vast.', 'Tie the bale well.'],
    ],
    [['De pers loopt vast. Mag ik even kijken?', 'The press is jamming. May I take a look?'], ['Nee. Eerst gaat de stroom eraf.', 'No. First the power goes off.']],
  ),
  lesson(
    'shovel',
    'The wheel loader on the yard',
    [
      ['shovel', 'de shovel', 'the wheel loader (a big machine with a bucket in front)', '🚜'],
      ['zwaailamp', 'de zwaailamp', 'the flashing light (an orange light on top of a machine)', '🟠'],
      ['bunker', 'de bunker', 'the bay (a big concrete space for one kind of waste)', '🏗️'],
      ['looppad', 'het looppad', 'the walkway (a path only for people)', '🚶'],
      ['toeteren', 'toeteren', 'to sound the horn', '📯'],
      ['opscheppen', 'opscheppen', 'to scoop up', '🪏'],
    ],
    [
      ['Blijf op het looppad.', 'Stay on the walkway.'],
      ['De shovel rijdt achteruit. Pas op!', 'The wheel loader is reversing. Careful!'],
      ['De zwaailamp brandt. De machine rijdt.', 'The flashing light is on. The machine is moving.'],
    ],
    [['Mag ik even langs de shovel lopen?', 'May I walk past the wheel loader?'], ['Alleen als de chauffeur je ziet.', 'Only if the driver sees you.']],
  ),
]);

// ---- The children, and Parents, safety and the group (the owner's request, 23 November 2026) ----
// The two own units of the new sector Kinderopvang (day care and after-school care;
// src/content/sectors.ts): nappies, eating and drinking, sleeping and playing; bringing and picking
// up, safety in the group, a sick child and allergies, and the group and its rules. In the path
// of a learner who chose Kinderopvang they come in the sector slot; in every other course they are
// appended at the very end (workUnits below). Already words of other lessons, used here in a
// sentence or the chat only: "de kinderopvang", "ophalen", "brengen", "halen", "slapen",
// "opruimen", "de overdracht", "de koorts", "de allergie", "het medicijn", "het stopcontact",
// "handen wassen", "de EHBO-doos", "de pleister", "de thermometer" and "de toestemming". The
// drawings (placeholders for now): src/pictures/groupKinderopvang.tsx.

const toddlersUnit = unit('toddlers', 'The children', 'De kinderen', '🧸', '#c0628a', [
  lesson(
    'nappies',
    'Changing nappies',
    [
      ['luier', 'de luier', 'the nappy, the diaper', '🧷'],
      ['verschonen', 'verschonen', 'to change (a nappy)', '🔄'],
      ['commode', 'de commode', 'the changing table', '🚼'],
      ['billendoekje', 'het billendoekje', 'the baby wipe', '🧻'],
      ['potje', 'het potje', 'the potty', '🚽'],
      ['zindelijk', 'zindelijk', 'potty-trained (the child can use the toilet)', '🙌'],
    ],
    [
      ['Ik verschoon Sem even.', 'I am going to change Sem.'],
      ['Was na het verschonen je handen.', 'Wash your hands after changing a nappy.'],
      ['Laat een kind nooit alleen op de commode.', 'Never leave a child alone on the changing table.'],
    ],
    [['Wanneer heb je Noor verschoond?', 'When did you change Noor?'], ['Om tien uur. Het staat in de app.', 'At ten. It is in the app.']],
  ),
  lesson(
    'mealtime',
    'Eating and drinking',
    [
      ['fles', 'de fles', 'the bottle (for a baby)', '🍼'],
      ['slabbetje', 'het slabbetje', 'the bib', '🧣'],
      ['beker', 'de beker', 'the cup (with a handle)', '🥤'],
      ['kinderstoel', 'de kinderstoel', 'the high chair', '🪑'],
      ['fruithap', 'de fruithap', 'the fruit mash', '🍎'],
      ['boertje', 'het boertje', 'the burp', '😮'],
    ],
    [
      ['Was je handen voor het eten.', 'Wash your hands before the meal.'],
      ['Geef Lisa haar fles om twaalf uur.', 'Give Lisa her bottle at twelve.'],
      ['Iedereen zit aan tafel.', 'Everyone sits at the table.'],
    ],
    [['Mag Daan een koekje?', 'May Daan have a biscuit?'], ['Nee, hij heeft een allergie. Kijk op de lijst.', 'No, he has an allergy. Look at the list.']],
  ),
  lesson(
    'naptime',
    'Sleeping',
    [
      ['bedje', 'het bedje', 'the cot (a small bed for a baby)', '🛏️'],
      ['slaapkamer', 'de slaapkamer', 'the bedroom', '🌙'],
      ['knuffel', 'de knuffel', 'the cuddly toy', '🧸'],
      ['speen', 'de speen', 'the dummy, the pacifier', '🍭'],
      ['babyfoon', 'de babyfoon', 'the baby monitor', '🎧'],
      ['slaapzak', 'de slaapzak', 'the baby sleeping bag', '💤'],
    ],
    [
      ['Leg de baby op zijn rug.', 'Lay the baby on its back.'],
      ['Ik kijk vaak even in de slaapkamer.', 'I often look into the bedroom.'],
      ['Hier is je knuffel. Slaap lekker.', 'Here is your cuddly toy. Sleep well.'],
    ],
    [['Slaapt Mila al?', 'Is Mila asleep yet?'], ['Ja, sinds één uur. Ik kijk zo weer even.', 'Yes, since one o’clock. I will look again soon.']],
  ),
  lesson(
    'playtime',
    'Playing',
    [
      ['spelen', 'spelen', 'to play', '⚽'],
      ['speelgoed', 'het speelgoed', 'the toys', '🪀'],
      ['zandbak', 'de zandbak', 'the sandpit', '🏖️'],
      ['glijbaan', 'de glijbaan', 'the slide', '🛝'],
      ['puzzel', 'de puzzel', 'the puzzle', '🧩'],
      ['buitenspelen', 'buitenspelen', 'to play outside', '🌳'],
    ],
    [
      ['We gaan buitenspelen. Jassen aan!', 'We are going to play outside. Coats on!'],
      ['Ruim het speelgoed op.', 'Tidy up the toys.'],
      ['Eén kind tegelijk op de glijbaan.', 'One child at a time on the slide.'],
    ],
    [['Mag ik met de puzzel spelen?', 'May I play with the puzzle?'], ['Ja, aan tafel. Daarna ruim je hem op.', 'Yes, at the table. Then you tidy it up.']],
  ),
]);

const daycareUnit = unit('daycare', 'Parents, safety and the group', 'Ouders, veiligheid en de groep', '👪', '#7a4f9a', [
  lesson(
    'pickup',
    'Bringing and picking up',
    [
      ['ouder', 'de ouder', 'the parent', '👪'],
      ['afscheid', 'het afscheid', 'the goodbye', '🙋'],
      ['oppas', 'de oppas', 'the babysitter', '🧑‍🍼'],
      ['schriftje', 'het schriftje', 'the notebook (for notes between parents and staff)', '📒'],
      ['ouderapp', 'de ouderapp', 'the parent app (for photos and messages to parents)', '📱'],
      ['wennen', 'wennen', 'to settle in (to get used to a new place)', '🌱'],
    ],
    [
      ['Ik schrijf het in het schriftje.', 'I will write it in the notebook.'],
      ['Zeg maar dag tegen papa.', 'Say bye-bye to daddy.'],
      ['Ik zet een foto in de ouderapp.', 'I am putting a photo in the parent app.'],
    ],
    [['Wie haalt Sem vandaag op?', 'Who is picking Sem up today?'], ['Zijn oma. Ze staat op de lijst.', 'His grandma. She is on the list.']],
  ),
  lesson(
    'childsafety',
    'Safety in the group',
    [
      ['traphekje', 'het traphekje', 'the stair gate', '🚧'],
      ['vingerstrip', 'de vingerstrip', 'the finger guard (on a door, so fingers do not get stuck)', '🖐️'],
      ['verslikken', 'zich verslikken', 'to choke (food goes the wrong way)', '😣'],
      ['bult', 'de bult', 'the bump (on the head)', '🤕'],
      ['schaafwond', 'de schaafwond', 'the graze (the skin is scraped)', '🩹'],
      ['toezicht', 'het toezicht', 'the supervision (you watch the children)', '👀'],
    ],
    [
      ['Doe het traphekje altijd dicht.', 'Always close the stair gate.'],
      ['Ik leg wat ijs op de bult.', 'I am putting some ice on the bump.'],
      ['Sem verslikt zich. Ik help hem.', 'Sem is choking. I am helping him.'],
    ],
    [['Is Bo gevallen?', 'Did Bo fall?'], ['Ja, ze heeft een bult. Ik bel haar moeder.', 'Yes, she has a bump. I am calling her mother.']],
  ),
  lesson(
    'sickchild',
    'A sick child and allergies',
    [
      ['huiduitslag', 'de huiduitslag', 'the rash (red spots on the skin)', '🔴'],
      ['diarree', 'de diarree', 'the diarrhoea', '🚾'],
      ['overgeven', 'overgeven', 'to throw up, to vomit', '🤮'],
      ['allergielijst', 'de allergielijst', 'the allergy list', '📋'],
      ['adrenalinepen', 'de adrenalinepen', 'the adrenaline pen (a medicine pen for a strong allergy)', '💉'],
      ['temperaturen', 'temperaturen', 'to take the temperature', '🌡️'],
    ],
    [
      ['Sem heeft koorts. Ik bel zijn vader.', 'Sem has a fever. I am calling his father.'],
      ['Kijk voor het eten op de allergielijst.', 'Look at the allergy list before the meal.'],
      ['Geef nooit een medicijn zonder toestemming.', 'Never give a medicine without permission.'],
    ],
    [['Hoe gaat het met Jip?', 'How is Jip?'], ['Hij is erg warm. Ik ga hem temperaturen.', 'He is very warm. I am going to take his temperature.']],
  ),
  lesson(
    'grouprules',
    'The group and the rules',
    [
      ['pedagogischmedewerker', 'de pedagogisch medewerker', 'the childcare worker', '🧑‍🏫'],
      ['mentor', 'de mentor', 'the mentor (the worker who follows one child closely)', '🤝'],
      ['vierogenprincipe', 'het vierogenprincipe', 'the four-eyes rule (another adult can always see or hear you)', '👁️'],
      ['observeren', 'observeren', 'to observe (to watch carefully, and write it down)', '🔍'],
      ['peuter', 'de peuter', 'the toddler (a child of two or three)', '🧒'],
      ['groep', 'de groep', 'the group (the children who are together every day)', '🧑‍🧒'],
    ],
    [
      ['Ik ben de mentor van Lisa.', 'I am Lisa’s mentor.'],
      ['Een collega kan ons altijd zien of horen.', 'A colleague can always see or hear us.'],
      ['Ik maak me zorgen over Daan.', 'I am worried about Daan.'],
      // The VOG round (23 November 2026): a fourth sentence with a new id (s.grouprules.4). ⚖️ check:
      // in child care you need a VOG and must be in the personenregister kinderopvang before you start
      // ⚖️ (Wet kinderopvang art. 1.48d and 1.50 lid 2; the same as r.l.kinderopvang.1). Belgium: the
      // uittreksel uit het strafregister, model 2 (src/content/taalBe/units/daycare.ts).
      ['Ik heb een VOG en ik sta in het personenregister.', 'I have a VOG and I am in the register for child care.'],
    ],
    [['Mag ik alleen met de groep naar buiten?', 'May I go outside alone with the group?'], ['Ja, maar zeg het eerst tegen een collega.', 'Yes, but tell a colleague first.']],
  ),
]);

// ---- Toilets, hotel rooms and machines (the owner's request, 23 November 2026) ----
// The second own unit of the sector Schoonmaak (src/content/sectors.ts): toilets and washbasins,
// hotel rooms (the bed, the towels, the room list), products and machines (the dose, the label,
// the scrubber-dryer), and offices early or late, alone in the building. In the path of a learner
// who chose Schoonmaak it comes right after "Schoonmaken"; in every other course it is appended at
// the very end (workUnits below), so no existing course changes. Already words of other lessons,
// used here in a sentence or the chat only: "de wc", "verstopt", "de verdieping", "de kraan",
// "het etiket", "de emmer", "de prullenbak", "het bureau" and "het licht". The drawings
// (placeholders for now): src/pictures/groupSchoonmaak2.tsx.

const housekeepingUnit = unit('housekeeping', 'Toilets, hotel rooms and machines', 'Sanitair, hotel en machines', '🛁', '#16808f', [
  lesson(
    'sanitary',
    'Toilets and washbasins',
    [
      ['wastafel', 'de wastafel', 'the washbasin (the sink in a bathroom or toilet)', '🚰'],
      ['toiletpot', 'de toiletpot', 'the toilet bowl', '🚽'],
      ['toiletborstel', 'de toiletborstel', 'the toilet brush', '🪥'],
      ['urinoir', 'het urinoir', 'the urinal', '🚹'],
      ['kalk', 'de kalk', 'the limescale (white stuff from water on taps and tiles)', '⚪'],
      ['ontstopper', 'de ontstopper', 'the plunger (a tool for a blocked toilet or drain)', '🪠'],
    ],
    [
      ['Ik doe eerst de wastafels, dan de toiletten.', 'I do the washbasins first, then the toilets.'],
      ['Er zit kalk op de kraan.', 'There is limescale on the tap.'],
      ['Het toilet op de eerste verdieping is verstopt.', 'The toilet on the first floor is blocked.'],
    ],
    [['Zijn de toiletten klaar?', 'Are the toilets done?'], ['Nog niet. Er is een toilet verstopt.', 'Not yet. One toilet is blocked.']],
  ),
  lesson(
    'hotelroom',
    'Hotel rooms',
    [
      ['laken', 'het laken', 'the sheet (on a bed)', '⬜'],
      ['kussensloop', 'de kussensloop', 'the pillowcase', '☁️'],
      ['dekbed', 'het dekbed', 'the duvet', '🛏️'],
      ['handdoek', 'de handdoek', 'the towel', '🧖'],
      ['kamerlijst', 'de kamerlijst', 'the room list (the rooms you must do today)', '📋'],
      ['opmaken', 'opmaken', 'to make (a bed)', '🛌'],
    ],
    [
      ['Ik maak het bed op met schone lakens.', 'I make the bed with clean sheets.'],
      ['Leg twee schone handdoeken in de badkamer.', 'Put two clean towels in the bathroom.'],
      ['Kamer twaalf is klaar. Ik ga naar dertien.', 'Room twelve is done. I am going to thirteen.'],
    ],
    [['Hoeveel kamers heb je nog?', 'How many rooms do you have left?'], ['Nog vier. Dan is mijn lijst klaar.', 'Four more. Then my list is done.']],
  ),
  lesson(
    'dosing',
    'Products and machines',
    [
      ['doseren', 'doseren', 'to measure out (to use the right amount of a product)', '⚖️'],
      ['maatbeker', 'de maatbeker', 'the measuring cup', '🥄'],
      ['sprayflacon', 'de sprayflacon', 'the spray bottle', '💦'],
      ['concentraat', 'het concentraat', 'the concentrate (a strong product that you mix with water)', '🫙'],
      ['veiligheidsblad', 'het veiligheidsblad', 'the safety data sheet (it says the dangers of a product, and what to do)', '📄'],
      ['schrobzuigmachine', 'de schrobzuigmachine', 'the scrubber-dryer (a machine that scrubs the floor and sucks it dry)', '🚜'],
    ],
    [
      ['Doe één dop in een emmer water.', 'Put one capful in a bucket of water.'],
      ['Lees eerst het etiket.', 'Read the label first.'],
      ['De schrobzuigmachine moet aan de lader.', 'The scrubber-dryer must go on the charger.'],
    ],
    [['Doe er wat meer middel in. Dan wordt het schoner.', 'Put a bit more product in. Then it gets cleaner.'], ['Nee, meer is niet beter. Ik gebruik de maatbeker.', 'No, more is not better. I use the measuring cup.']],
  ),
  lesson(
    'officenight',
    'Offices, early or late',
    [
      ['toetsenbord', 'het toetsenbord', 'the keyboard', '⌨️'],
      ['papierbak', 'de papierbak', 'the paper bin (for old paper)', '📰'],
      ['lichtschakelaar', 'de lichtschakelaar', 'the light switch', '💡'],
      ['pantry', 'de pantry', 'the pantry (the small kitchen in an office)', '🫖'],
      ['deurmat', 'de deurmat', 'the doormat (the mat at the entrance)', '🟫'],
      ['alleenwerken', 'alleen werken', 'to work alone (nobody else is in the building)', '🧍'],
    ],
    [
      ['Ik leeg de prullenbakken en de papierbak.', 'I empty the bins and the paper bin.'],
      ['Ik raak de papieren op het bureau niet aan.', 'I do not touch the papers on the desk.'],
      ['Ik doe het licht uit als ik klaar ben.', 'I switch off the light when I am finished.'],
    ],
    [['Werk je vanavond alleen in het gebouw?', 'Are you working alone in the building tonight?'], ['Ja. Ik stuur je een bericht als ik klaar ben.', 'Yes. I will send you a message when I am done.']],
  ),
]);

// ---- The kitchen and service (the owner's request, 23 November 2026) ----
// The second own unit of the sector Horeca: knives and cutting (the chef's orders), raw and cooked
// food and the allergen list, the dish room and the pass, and the courses and the bill. In the path
// of a learner who chose Horeca it comes right after "In de horeca"; in every other course it is
// appended at the very end. Already words of other lessons, used here in a sentence or the chat
// only: "het mes", "snijden", "de chef", "de koelcel", "de gluten", "het bord", "de tafel", "de
// gast", "de rekening" and "pinnen". The drawings (placeholders for now): src/pictures/groupHoreca2.tsx.

const cookingUnit = unit('cooking', 'The kitchen and service', 'De keuken en de bediening', '🧑‍🍳', '#a55a1c', [
  lesson(
    'knives',
    'Knives and cutting',
    [
      ['koksmes', 'het koksmes', 'the chef’s knife (a big kitchen knife)', '🔪'],
      ['dunschiller', 'de dunschiller', 'the vegetable peeler', '🥕'],
      ['schillen', 'schillen', 'to peel', '🥔'],
      ['hakken', 'hakken', 'to chop (to cut very small)', '🧅'],
      ['raspen', 'raspen', 'to grate', '🧀'],
      ['blokjes', 'de blokjes', 'the cubes (small square pieces)', '🎲'],
    ],
    [
      ['Snijd de wortels in blokjes.', 'Cut the carrots into cubes.'],
      ['Leg het mes niet in de gootsteen.', 'Do not put the knife in the sink.'],
      ['Hak de peterselie fijn.', 'Chop the parsley finely.'],
    ],
    [['Kun je de uien snijden?', 'Can you cut the onions?'], ['Ja, chef. In ringen of in blokjes?', 'Yes, chef. In rings or in cubes?']],
  ),
  lesson(
    'rawcooked',
    'Raw, cooked and allergens',
    [
      ['rauw', 'rauw', 'raw (not cooked)', '🍣'],
      ['gaar', 'gaar', 'cooked, done (ready to eat)', '🍗'],
      ['afdekken', 'afdekken', 'to cover (with a lid or foil)', '🫕'],
      ['kleurcode', 'de kleurcode', 'the colour code (one colour of board and knife for each kind of food)', '🎨'],
      ['allergenenlijst', 'de allergenenlijst', 'the allergen list (it says what is in each dish)', '📑'],
      ['glutenvrij', 'glutenvrij', 'gluten-free (without gluten)', '🌾'],
    ],
    [
      ['Rauw vlees gaat onderin de koelkast.', 'Raw meat goes at the bottom of the fridge.'],
      ['Is de kip al gaar?', 'Is the chicken done yet?'],
      ['Dek de bakken af in de koelcel.', 'Cover the containers in the cold store.'],
    ],
    [['Is deze saus glutenvrij?', 'Is this sauce gluten-free?'], ['Dat weet ik niet zeker. Ik kijk op de allergenenlijst.', 'I am not sure. I will check the allergen list.']],
  ),
  lesson(
    'pass',
    'The dish room and the pass',
    [
      ['pass', 'de pass', 'the pass (the counter where the plates wait for the waiter)', '🔔'],
      ['bon', 'de bon', 'the order ticket (the order from the waiter to the kitchen)', '🎫'],
      ['spoelkeuken', 'de spoelkeuken', 'the dish room (where the washing-up is done)', '🚿'],
      ['vaatwaskorf', 'de vaatwaskorf', 'the dish rack (the basket that goes into the dishwasher)', '🧺'],
      ['voorspoelen', 'voorspoelen', 'to pre-rinse (to rinse before the machine)', '💧'],
      ['warmhoudlamp', 'de warmhoudlamp', 'the heat lamp (it keeps the plates warm)', '🔆'],
    ],
    [
      ['Tafel acht staat op de pass.', 'Table eight is on the pass.'],
      ['Er komen twee nieuwe bonnen binnen.', 'Two new order tickets are coming in.'],
      ['Spoel de borden eerst voor.', 'Pre-rinse the plates first.'],
    ],
    [['Waar blijft tafel twaalf?', 'Where is table twelve?'], ['Het staat op de pass. Ik breng het nu.', 'It is on the pass. I am bringing it now.']],
  ),
  lesson(
    'bill',
    'Courses and the bill',
    [
      ['voorgerecht', 'het voorgerecht', 'the starter (the first course)', '🥗'],
      ['hoofdgerecht', 'het hoofdgerecht', 'the main course', '🍝'],
      ['nagerecht', 'het nagerecht', 'the dessert', '🍰'],
      ['reservering', 'de reservering', 'the reservation (a table booked before)', '📖'],
      ['pinapparaat', 'het pinapparaat', 'the card machine', '💳'],
      ['apartbetalen', 'apart betalen', 'to pay separately (each person pays for himself)', '➗'],
    ],
    [
      ['Heeft u gereserveerd?', 'Do you have a reservation?'],
      ['Wilt u samen of apart betalen?', 'Would you like to pay together or separately?'],
      ['Zal ik het hoofdgerecht nu brengen?', 'Shall I bring the main course now?'],
    ],
    [['Mogen we apart betalen?', 'May we pay separately?'], ['Ja hoor. Ik pak het pinapparaat.', 'Yes, sure. I will get the card machine.']],
  ),
]);

// ---- Personal care and home care (the owner's request, 23 November 2026) ----
// The second own unit of the sector Zorg: washing and dressing (dignity, asking first), observing
// and reporting (facts in the care file), home care (the key safe, the care plan) and lifting aids
// and safety. In the path of a learner who chose Zorg it comes right after "In de zorg"; in every
// other course it is appended at the very end. Already words of other lessons, used here in a
// sentence or the chat only: "wassen", "de cliënt", "de verpleegkundige", "de tillift", "het bed",
// "de rolstoel", "de rem" and "de sleutel". The drawings (placeholders for now):
// src/pictures/groupZorg2.tsx.

const careworkUnit = unit('carework', 'Personal care and home care', 'Verzorgen en thuiszorg', '🤲', '#8e44ad', [
  lesson(
    'washing',
    'Washing and dressing',
    [
      ['washandje', 'het washandje', 'the washcloth (a small cloth like a glove)', '🧤'],
      ['douchestoel', 'de douchestoel', 'the shower chair', '🚿'],
      ['tandenpoetsen', 'tandenpoetsen', 'to brush your teeth', '🪥'],
      ['kammen', 'kammen', 'to comb', '💇'],
      ['scheren', 'scheren', 'to shave', '🪒'],
      ['steunkous', 'de steunkous', 'the support stocking (a tight stocking for the legs)', '🧦'],
    ],
    [
      ['Is het water warm genoeg?', 'Is the water warm enough?'],
      ['Wilt u zelf uw gezicht wassen?', 'Would you like to wash your face yourself?'],
      ['Ik doe nu uw steunkousen aan.', 'I am putting on your support stockings now.'],
    ],
    [['Ik wil vandaag niet douchen.', 'I do not want to shower today.'], ['Dat is goed. Zal ik u aan de wastafel helpen?', 'That is fine. Shall I help you at the washbasin?']],
  ),
  lesson(
    'observing',
    'Observing and reporting',
    [
      ['rapporteren', 'rapporteren', 'to report (to write down what you saw, in the care file)', '🖊️'],
      ['zorgdossier', 'het zorgdossier', 'the care file (everything about the care of one client)', '📓'],
      ['drukplek', 'de drukplek', 'the pressure sore (a red spot from lying or sitting long)', '🔴'],
      ['huid', 'de huid', 'the skin', '✋'],
      ['plassen', 'plassen', 'to pee', '🚻'],
      ['vochtlijst', 'de vochtlijst', 'the fluid chart (how much a client drinks)', '💧'],
    ],
    [
      ['Mevrouw heeft een rode plek op haar hiel.', 'The lady has a red spot on her heel.'],
      ['Meneer heeft vandaag weinig gedronken.', 'The gentleman drank little today.'],
      ['Ik schrijf het in het zorgdossier.', 'I am writing it in the care file.'],
    ],
    [['Is er iets bijzonders met mevrouw Jansen?', 'Is there anything special about Mrs Jansen?'], ['Ja. Ze heeft vandaag bijna niet geplast.', 'Yes. She has hardly peed today.']],
  ),
  lesson(
    'homecare',
    'Home care',
    [
      ['thuiszorg', 'de thuiszorg', 'home care (care in the client’s own home)', '🏠'],
      ['sleutelkluis', 'de sleutelkluis', 'the key safe (a small box with a code, with the house key in it)', '🔐'],
      ['zorgplan', 'het zorgplan', 'the care plan (what care a client gets, and how)', '📋'],
      ['wijkverpleegkundige', 'de wijkverpleegkundige', 'the district nurse (the nurse of the home care team)', '👩‍⚕️'],
      ['mantelzorger', 'de mantelzorger', 'the family carer (a relative or friend who looks after the client)', '🫂'],
      ['alarmknop', 'de alarmknop', 'the alarm button (the client wears it, to call for help)', '🆘'],
    ],
    [
      ['Ik bel eerst aan. Dan pak ik de sleutel.', 'First I ring the bell. Then I take the key.'],
      ['Wat staat er in het zorgplan?', 'What is in the care plan?'],
      ['Ik ben vandaag een kwartier later.', 'I am a quarter of an hour late today.'],
      // The VOG round (23 November 2026): a fourth sentence with a new id (s.homecare.4). ⚖️ check:
      // a care provider asks a new worker with client contact for a VOG ⚖️ (Wkkgz art. 4 lid 1 onder c
      // and the Uitvoeringsbesluit Wkkgz; "bijna altijd" because there are exceptions). Belgium: the
      // uittreksel uit het strafregister (src/content/taalBe/units/carework.ts).
      ['In de zorg vragen ze bijna altijd een VOG.', 'In care work they almost always ask for a VOG (a certificate of conduct).'],
    ],
    [['Wie is daar?', 'Who is there?'], ['Goedemorgen, de thuiszorg. Mag ik binnenkomen?', 'Good morning, it is home care. May I come in?']],
  ),
  lesson(
    'liftaids',
    'Lifting aids and safety',
    [
      ['glijlaken', 'het glijlaken', 'the slide sheet (a smooth sheet to move a client in bed)', '🛷'],
      ['tilband', 'de tilband', 'the sling (it goes under the client, for the hoist)', '🎗️'],
      ['stalift', 'de stalift', 'the standing hoist (it helps a client to stand up)', '🧍'],
      ['werkhoogte', 'de werkhoogte', 'the working height (the bed at the height of your hips)', '📏'],
      ['bedhek', 'het bedhek', 'the bed rail', '🚧'],
      ['transferplank', 'de transferplank', 'the transfer board (a board to slide from the bed to a chair)', '🪵'],
    ],
    [
      ['Zet het bed op werkhoogte.', 'Put the bed at working height.'],
      ['Staat de rolstoel op de rem?', 'Is the brake on the wheelchair?'],
      ['We doen dit met z’n tweeën.', 'We do this with two people.'],
    ],
    [['Kun je mevrouw even alleen omdraaien?', 'Can you turn the lady over on your own?'], ['Met het glijlaken lukt dat. Ik pak het even.', 'With the slide sheet I can. I will get it.']],
  ),
]);

// ---- Till, stock and closing (the owner's request, 23 November 2026) ----
// The second own unit of the sector Winkel: returns and the till, facing and the cold products,
// damage and theft (writing off, your own shopping, the bag check) and closing the shop (counting,
// the safe, a robbery). In the path of a learner who chose Winkel it comes right after "In de
// winkel"; in every other course it is appended at the very end. Already words of other lessons,
// used here in a sentence or the chat only: "het bonnetje", "geld terug", "kapot", "de
// houdbaarheidsdatum", "op slot" and "tellen". The drawings (placeholders for now):
// src/pictures/groupWinkel2.tsx.

const shopfloorUnit = unit('shopfloor', 'Till, stock and closing', 'Kassa, voorraad en sluiten', '🏪', '#1f8a70', [
  lesson(
    'returns',
    'Returns and the till',
    [
      ['terugbrengen', 'terugbrengen', 'to bring back (a product to the shop)', '🔄'],
      ['klantenkaart', 'de klantenkaart', 'the customer card (a card to save points)', '🎴'],
      ['statiegeld', 'het statiegeld', 'the deposit (money back for an empty bottle or can)', '🍾'],
      ['kassalade', 'de kassalade', 'the till drawer (the drawer with the money)', '🗄️'],
      ['streepjescode', 'de streepjescode', 'the barcode', '📟'],
      ['tegoedbon', 'de tegoedbon', 'the credit note (a paper to spend in the shop later)', '🎟️'],
    ],
    [
      ['Spaart u met de klantenkaart?', 'Do you collect points with the customer card?'],
      ['De streepjescode doet het niet.', 'The barcode does not work.'],
      ['Wilt u het geld terug of een tegoedbon?', 'Would you like the money back or a credit note?'],
    ],
    [['Ik wil deze trui terugbrengen.', 'I want to bring this jumper back.'], ['Dat kan. Heeft u het bonnetje nog?', 'That is possible. Do you still have the receipt?']],
  ),
  lesson(
    'facing',
    'Facing and the cold products',
    [
      ['facen', 'facen', 'to face up (to pull the products to the front, label forward)', '🔝'],
      ['afprijzen', 'afprijzen', 'to mark down (to give a lower price)', '🏷️'],
      ['koelvak', 'het koelvak', 'the fridge shelf (the cold shelf in a shop)', '🧊'],
      ['diepvries', 'de diepvries', 'the freezer', '❄️'],
      ['uitpakken', 'uitpakken', 'to unpack', '📦'],
      ['schapkaartje', 'het schapkaartje', 'the shelf label (the price card on the shelf)', '💲'],
    ],
    [
      ['Eerst het koelvak, dan de rest.', 'The fridge shelf first, then the rest.'],
      ['Zet alles netjes naar voren.', 'Put everything neatly to the front.'],
      ['Prijs de producten van vandaag af.', 'Mark down today’s products.'],
    ],
    [['Ben je klaar met het koelvak?', 'Are you done with the fridge shelf?'], ['Bijna. Ik moet nog facen.', 'Almost. I still have to face up.']],
  ),
  lesson(
    'shrink',
    'Damage and theft',
    [
      ['derving', 'de derving', 'the shrink (what the shop loses: broken, old or stolen products)', '📉'],
      ['afschrijven', 'afschrijven', 'to write off (to register a product as lost)', '✍️'],
      ['personeelsaankoop', 'de personeelsaankoop', 'the staff purchase (what you buy in your own shop)', '🧾'],
      ['tassencontrole', 'de tassencontrole', 'the bag check', '👜'],
      ['kassamedewerker', 'de kassamedewerker', 'the cashier', '🧑‍💼'],
      ['winkelwagen', 'de winkelwagen', 'the shopping trolley', '🛒'],
    ],
    [
      ['Deze pot is kapot. Ik schrijf hem af.', 'This jar is broken. I am writing it off.'],
      ['Ik reken mijn boodschappen af bij een collega.', 'I pay for my shopping at a colleague’s till.'],
      ['Er staat een volle winkelwagen bij de uitgang.', 'There is a full trolley by the exit.'],
    ],
    [['Mag ik even in je tas kijken?', 'May I have a look in your bag?'], ['Ja hoor. Hier is mijn bonnetje.', 'Yes, sure. Here is my receipt.']],
  ),
  lesson(
    'shopclose',
    'Closing the shop',
    [
      ['sluitingstijd', 'de sluitingstijd', 'the closing time', '🕘'],
      ['rolluik', 'het rolluik', 'the roller shutter', '🔽'],
      ['kasverschil', 'het kasverschil', 'the cash difference (more or less money in the till than there should be)', '❓'],
      ['kluis', 'de kluis', 'the safe (a strong box for money)', '🏦'],
      ['overval', 'de overval', 'the robbery (someone takes money with threats)', '🦹'],
      ['achterdeur', 'de achterdeur', 'the back door', '🚪'],
    ],
    [
      ['Over tien minuten gaan we dicht.', 'We close in ten minutes.'],
      ['We tellen de kassa met z’n tweeën.', 'We count the till with two people.'],
      ['Is de achterdeur op slot?', 'Is the back door locked?'],
    ],
    [['Mag ik nog even snel naar binnen?', 'May I quickly come in?'], ['Sorry, we zijn gesloten. Morgen zijn we om acht uur open.', 'Sorry, we are closed. Tomorrow we open at eight.']],
  ),
]);

// ---- Temp agency work (the owner's request, 23 November 2026) ----
// A basis unit for everyone (most learners work through an agency), in the theme "Werk vinden",
// right after "Werk en contract" (workUnits below): the agency and the hirer (de inlener), the
// contract and its phases (A, B and C of the uitzend-cao), pay and deductions (the same pay as the
// hirer's own workers; from the minimum wage only rent and health insurance), and housing through
// the agency and where to get help. Its tips state rights: each claim has its ⚖️ note in
// src/content/workTips.ts and a section in docs/juridische-check.md. Belgium: uitzendwerk is
// regulated otherwise there (interimkantoor, PC 322, no phases): the unit is C in
// src/content/taalBe/inventory.ts, NL-only until a Belgian version is written. Already words of
// other lessons, used here in a sentence or the chat only: "het uitzendbureau", "de
// uitzendkracht", "de intercedent", "de opdracht", "het contract", "de loonstrook", "het
// minimumloon", "de huur", "het huurcontract", "de vakbond" and "anoniem". The drawings
// (placeholders for now): src/pictures/groupUitzend.tsx.

const uitzendUnit = unit('uitzend', 'Temp agency work', 'Werken via een uitzendbureau', '🔁', '#2e5c9a', [
  lesson(
    'hirer',
    'The agency and the hirer',
    [
      ['inlener', 'de inlener', 'the hirer (the company where the agency sends you to work)', '🏭'],
      ['vestiging', 'de vestiging', 'the branch (the office of the agency in your town)', '🏢'],
      ['intakegesprek', 'het intakegesprek', 'the intake interview (the first talk at the agency)', '🗣️'],
      ['opstapplaats', 'de opstapplaats', 'the pick-up point (where the agency’s bus picks you up)', '🚏'],
      ['bedrijfsregels', 'de bedrijfsregels', 'the company rules (the rules of the hirer)', '📜'],
      ['aanspreekpunt', 'het aanspreekpunt', 'the contact person (the person you go to with questions)', '☝️'],
    ],
    [
      ['Morgen werk je bij een nieuwe inlener.', 'Tomorrow you work at a new hirer.'],
      ['Wie is hier mijn aanspreekpunt?', 'Who is my contact person here?'],
      ['De bus vertrekt om zes uur bij de opstapplaats.', 'The bus leaves the pick-up point at six.'],
    ],
    [['Kun je morgen bij een nieuwe inlener beginnen?', 'Can you start at a new hirer tomorrow?'], ['Ja. Hoe laat moet ik er zijn?', 'Yes. What time must I be there?']],
  ),
  lesson(
    'phases',
    'Your contract and the phases',
    [
      ['fase', 'de fase', 'the phase (a step in your agency contract: A, B or C)', '🅰️'],
      ['uitzendbeding', 'het uitzendbeding', 'the agency clause (your work can stop when the hirer no longer needs you)', '✂️'],
      ['aflopen', 'aflopen', 'to end, to run out (a contract)', '⌛'],
      ['doorwerken', 'doorwerken', 'to keep working (at the same place)', '▶️'],
      ['vastecontract', 'het vaste contract', 'the permanent contract (a contract without an end date)', '🖊️'],
      ['onderbreking', 'de onderbreking', 'the break (a time without work between two contracts)', '⏸️'],
    ],
    [
      ['In welke fase zit ik nu?', 'Which phase am I in now?'],
      ['Mijn contract loopt volgende week af.', 'My contract ends next week.'],
      ['Kan ik hier blijven doorwerken?', 'Can I keep working here?'],
    ],
    [['Je opdracht stopt vrijdag.', 'Your assignment stops on Friday.'], ['Oké. Heeft u ander werk voor mij?', 'Okay. Do you have other work for me?']],
  ),
  lesson(
    'deductions',
    'Pay and deductions',
    [
      ['inhouding', 'de inhouding', 'the deduction (money taken off your pay)', '➖'],
      ['vastekracht', 'de vaste kracht', 'the permanent worker (a worker employed by the hirer itself)', '🧑‍🏭'],
      ['vervoer', 'het vervoer', 'the transport (the bus or van to work)', '🚐'],
      ['schriftelijk', 'schriftelijk', 'in writing (on paper or in an email)', '📝'],
      ['navragen', 'navragen', 'to check, to ask about (to find out if something is right)', '🔍'],
      ['brutoloon', 'het brutoloon', 'the gross pay (your pay before tax and deductions)', '💰'],
    ],
    [
      ['Wat is deze inhouding op mijn loonstrook?', 'What is this deduction on my payslip?'],
      ['Verdien ik hetzelfde als de vaste krachten?', 'Do I earn the same as the permanent workers?'],
      ['Dat wil ik eerst op papier zien.', 'I want to see that on paper first.'],
    ],
    [['We houden de kosten van de bus in op je loon.', 'We take the cost of the bus off your pay.'], ['Mag dat? Dat vraag ik eerst na.', 'Is that allowed? I will check that first.']],
  ),
  lesson(
    'agencyhome',
    'Housing and help',
    [
      ['huisvesting', 'de huisvesting', 'the housing (a place to live, arranged by the agency)', '🏘️'],
      ['huisgenoot', 'de huisgenoot', 'the housemate (a person who lives in the same house)', '🧑‍🤝‍🧑'],
      ['huisregels', 'de huisregels', 'the house rules (the rules of the house where you live)', '📃'],
      ['huismeester', 'de huismeester', 'the housing manager (the person who looks after the house)', '🧑‍🔧'],
      ['meldpunt', 'het meldpunt', 'the reporting point (a place where you can report a problem)', '📣'],
      ['advies', 'het advies', 'the advice', '💬'],
    ],
    [
      ['Ik wil een eigen huurcontract.', 'I want my own rental contract.'],
      ['Er is schimmel in de badkamer.', 'There is mould in the bathroom.'],
      ['Ik bel de vakbond voor advies.', 'I am calling the union for advice.'],
    ],
    [['Je moet vrijdag uit de woning.', 'You must leave the house on Friday.'], ['Dat is heel kort. Ik vraag eerst advies.', 'That is very short. I will ask for advice first.']],
  ),
  // The VOG (Verklaring Omtrent het Gedrag), 23 November 2026 (the owner's request): a fifth lesson,
  // because the agency or the hirer is where most learners first meet it, and a new lesson keeps every
  // translated text of the unit as it is (five lessons are allowed: u.social, u.health and u.afbouw
  // have five too). Not a safety topic, so not in "Veiligheid op het werk" (u.safework). Care, child
  // care and security work name it again in a sentence of their own (s.homecare.4, s.grouprules.4,
  // s.access.4). "de aanvraag" (l.holiday) comes in a sentence only. Belgium: no VOG (an uittreksel
  // uit het strafregister); the unit is NL-only there (src/content/taalBe/inventory.ts). The tip
  // c.vog has its ⚖️ notes in src/content/workTips.ts and a section in docs/juridische-check.md.
  lesson(
    'vog',
    'Your past: the VOG',
    [
      ['vog', 'de VOG', 'the certificate of conduct (VOG: a paper from the government that says your past is no problem for this job)', '📜'],
      ['strafblad', 'het strafblad', 'the criminal record (the crimes a court has found you guilty of)', '📁', false],
      ['screening', 'de screening', 'the background check (a check of your past before you start)', '🔎', false],
      ['personenregister', 'het personenregister', 'the register for child care (everyone who works in child care must be in it)', '🗂️', false],
      ['beveiligerspas', 'de beveiligerspas', 'the security guard pass (the card you need to work as a guard)', '🪪'],
      ['verleden', 'het verleden', 'the past', '⏮️', false],
    ],
    [
      ['Het uitzendbureau vraagt een VOG.', 'The agency asks for a VOG.'],
      ['Ik maak de aanvraag af met DigiD.', 'I finish the application with DigiD.'],
      ['Wie betaalt de VOG?', 'Who pays for the VOG?'],
    ],
    [['Heb je al een VOG?', 'Do you have a VOG yet?'], ['Nee. Ik wacht nog op de mail van Justis.', 'No. I am still waiting for the e-mail from Justis.']],
  ),
]);

// ---- Safety at work (the owner's request, 23 November 2026) ----
// A basis unit for everyone, in the theme "Veilig werken" next to "Veiligheid" and "Als het misgaat"
// (src/content/themes.ts), appended at the very end of the course (workUnits below) so that no
// existing course changes. It teaches some of the words a learner meets in safe work and on a VCA
// course that the course did not have yet: the safety signs (colour and shape), hazardous
// substances, fire, and the permit to work, the confined space and lifting. It is NOT a VCA course
// and says so (the owner's rule: no promise to pass, no "practise for the exam"): the tip of
// l.safetysigns explains what VCA is and says that these lessons teach words, and that VCA is a
// course and an exam. Already words of other lessons, used here in a sentence or the chat only:
// "de nooduitgang" (l.danger), "het gevarensymbool" (l.hazardous), "het etiket" (l.quality),
// "het veiligheidsblad" (l.dosing), "de olie" (l.carjob), "de brandblusser" (l.alarm) and "de
// prullenbak"; "de tank" and "zakken" in a line only. "de werkvergunning" is a word twice: the
// work permit for foreign workers (w.werkvergunning, l.permit) and here the permit to work for
// dangerous work (w.werkvergunningveilig): its English says it is not your papers. The signs are the
// same all over the EU, so the unit is A in Belgium (src/content/taalBe/inventory.ts). The drawings
// (placeholders for now): src/pictures/groupVeilig2.tsx.

const safeworkUnit = unit('safework', 'Safety at work', 'Veiligheid op het werk', '⚠️', '#b7791f', [
  lesson(
    'safetysigns',
    'Safety signs',
    [
      ['verbodsbord', 'het verbodsbord', 'the prohibition sign (a red circle with a line through it: you may not do this)', '🚫'],
      ['gebodsbord', 'het gebodsbord', 'the mandatory sign (a blue circle with a white picture: you must do this)', '🔵'],
      ['waarschuwingsbord', 'het waarschuwingsbord', 'the warning sign (a yellow triangle with a black edge: watch out, danger)', '⚠️'],
      ['reddingsbord', 'het reddingsbord', 'the safe condition sign (a green rectangle: the way out, or first aid)', '🟩'],
      ['brandbord', 'het brandbord', 'the fire equipment sign (a red square: here is a fire extinguisher or a fire hose)', '🟥'],
      ['pictogram', 'het pictogram', 'the pictogram (a simple picture that says something without words)', '🖼️', false],
    ],
    [
      ['Een rood rond bord betekent: dat mag niet.', 'A red round sign means: that is not allowed.'],
      ['Een blauw bord zegt wat je moet doen.', 'A blue sign says what you must do.'],
      ['Volg de groene borden naar de nooduitgang.', 'Follow the green signs to the emergency exit.'],
    ],
    [['Wat betekent dit gele bord?', 'What does this yellow sign mean?'], ['Pas op, gevaar. Het is een waarschuwingsbord.', 'Watch out, danger. It is a warning sign.']],
  ),
  lesson(
    'substances',
    'Hazardous substances',
    [
      ['stofmasker', 'het stofmasker', 'the dust mask (it covers your nose and mouth)', '😷'],
      ['giftig', 'giftig', 'toxic, poisonous', '💀'],
      ['bijtend', 'bijtend', 'corrosive (it burns your skin or eats into metal)', '🫗'],
      ['drinkfles', 'de drinkfles', 'the drinks bottle', '🥤'],
      ['opbergen', 'opbergen', 'to put away (in its own place, for example a cupboard that locks)', '📦'],
      ['dop', 'de dop', 'the cap (of a bottle or a can)', '🔘'],
    ],
    [
      ['Kijk eerst naar het gevarensymbool op het etiket.', 'First look at the hazard symbol on the label.'],
      ['Giet het nooit in een drinkfles.', 'Never pour it into a drinks bottle.'],
      ['Hier moet je een stofmasker dragen.', 'You must wear a dust mask here.'],
    ],
    [['Is dit middel giftig?', 'Is this product toxic?'], ['Dat staat op het veiligheidsblad. Ik zoek het op.', 'That is on the safety data sheet. I will look it up.']],
  ),
  lesson(
    'firefight',
    'Fire',
    [
      ['branddriehoek', 'de branddriehoek', 'the fire triangle (fire needs fuel, air and heat; take one away and the fire goes out)', '🔺'],
      ['zuurstof', 'de zuurstof', 'the oxygen (in the air; fire needs it)', '🫧', false],
      ['blussen', 'blussen', 'to put out (a fire)', '💦'],
      ['blusdeken', 'de blusdeken', 'the fire blanket', '🧣'],
      ['openvuur', 'open vuur', 'open fire (a flame, for example from a lighter or a gas burner)', '🔥'],
      ['brandslang', 'de brandslang', 'the fire hose (on a reel in the wall)', '🚒'],
    ],
    [
      ['Gooi nooit water op brandende olie.', 'Never throw water on burning oil.'],
      ['Alleen een klein brandje blus je zelf.', 'You only put out a small fire yourself.'],
      ['Leg de blusdeken over de pan.', 'Put the fire blanket over the pan.'],
    ],
    [['Er is brand in de prullenbak!', 'There is a fire in the bin!'], ['Het is klein. Ik pak de brandblusser.', 'It is small. I will get the fire extinguisher.']],
  ),
  lesson(
    'permitwork',
    'Permits, confined spaces and lifting',
    [
      ['werkvergunningveilig', 'de werkvergunning', 'the permit to work (a safety paper for dangerous work: what, where and which dangers; not your residence or work papers)', '📋'],
      ['beslotenruimte', 'de besloten ruimte', 'the confined space (a tank, a pit or a sewer: small, with little fresh air)', '🛢️'],
      ['gasmeting', 'de gasmeting', 'the gas test (you measure the air before you go in)', '📟'],
      ['mangatwacht', 'de mangatwacht', 'the hole watch (the person who stays outside at the opening, keeps contact and raises the alarm)', '🧍'],
      ['signaalgever', 'de signaalgever', 'the banksman (the person who gives the crane driver hand signs)', '🙋'],
      ['hijsen', 'hijsen', 'to lift (a load with a crane)', '🏗️'],
    ],
    [
      ['Zonder werkvergunning beginnen we niet.', 'We do not start without a permit to work.'],
      ['Eerst een gasmeting, dan pas de besloten ruimte in.', 'First a gas test, only then into the confined space.'],
      ['Kijk naar de signaalgever: hijsen, zakken, stop.', 'Watch the banksman: lift, lower, stop.'],
    ],
    [['Wie blijft er buiten bij de tank?', 'Who stays outside at the tank?'], ['Ik. Ik ben de mangatwacht.', 'Me. I am the hole watch.']],
  ),
]);

// ---- In the shop, and Time, money and measures (docs/entree-aanvulling.md, part 5) ----
// Basis units (no sector of their own), after the sector units: the course of every existing
// sector keeps its order, the two units come at the end of it.

const shopUnit = unit('shop', 'In the shop', 'In de winkel', '🛒', '#2a9d8f', [
  lesson(
    'shelves',
    'Shelves and stock',
    [
      ['schap', 'het schap', 'the shelf (in a shop)', '🗃️'],
      ['vakkenvullen', 'vakken vullen', 'to stock the shelves', '🥫'],
      ['voorraad', 'de voorraad', 'the stock', '📦'],
      ['houdbaarheidsdatum', 'de houdbaarheidsdatum', 'the best-before date', '📅'],
      ['prijskaartje', 'het prijskaartje', 'the price tag', '🏷️'],
      ['achteraan', 'achteraan', 'at the back', '🔙', false],
    ],
    [
      ['Zet de nieuwe producten achteraan.', 'Put the new products at the back.'],
      ['Dit product is over de datum.', 'This product is past its date.'],
      ['Is er nog voorraad?', 'Is there any stock left?'],
    ],
    [['Waar vind ik de rijst?', 'Where can I find the rice?'], ['In gang vier. Ik loop even met u mee.', 'In aisle four. I will walk there with you.']],
  ),
  lesson(
    'checkout',
    'At the checkout',
    [
      ['klant', 'de klant', 'the customer', '🛍️'],
      ['kassa', 'de kassa', 'the checkout, the till', '🏪'],
      ['wisselgeld', 'het wisselgeld', 'the change (money you give back)', '🫴'],
      ['bonnetje', 'het bonnetje', 'the receipt', '🧾'],
      ['pinnen', 'pinnen', 'to pay by card', '💳'],
      ['contant', 'contant', 'in cash', '💶'],
    ],
    [
      ['Wilt u pinnen of contant betalen?', 'Would you like to pay by card or in cash?'],
      ['Hier is uw wisselgeld.', 'Here is your change.'],
      ['Mag ik even uw ID zien?', 'May I see your ID, please?'],
    ],
    [['Kan ik hier pinnen?', 'Can I pay by card here?'], ['Ja hoor, dat kan.', 'Yes, sure, you can.']],
  ),
  // "Helping a customer" (l.shophelp, 14 November 2026, the owner's request: every sector unit grows to four lessons).
  lesson(
    'shophelp',
    'Helping a customer',
    [
      ['aanbieding', 'de aanbieding', 'the special offer (cheaper for a short time)', '🔖'],
      ['korting', 'de korting', 'the discount (you pay less)', '💸'],
      ['uitverkocht', 'uitverkocht', 'sold out', '🚫'],
      ['magazijn', 'het magazijn', 'the stockroom, the warehouse', '📦'],
      ['tas', 'de tas', 'the bag', '🛍️'],
      ['bestellen', 'bestellen', 'to order', '📝'],
    ],
    [
      ['Dat is helaas uitverkocht.', 'Sorry, that is sold out.'],
      ['Wilt u er een tas bij?', 'Would you like a bag with it?'],
      ['Deze koffie is in de aanbieding.', 'This coffee is on special offer.'],
    ],
    [['Hebt u nog melk?', 'Do you have any milk left?'], ['Ik kijk even voor u in het magazijn.', 'I will have a look in the stockroom for you.']],
  ),
  lesson(
    'shoptrouble',
    'Difficult moments',
    [
      ['bedrijfsleider', 'de bedrijfsleider', 'the store manager', '🧑‍💼'],
      ['beveiliger', 'de beveiliger', 'the security guard', '💂'],
      ['dief', 'de dief', 'the thief', '🥷'],
      ['stelen', 'stelen', 'to steal', '🫳'],
      ['schreeuwen', 'schreeuwen', 'to shout', '🗣️'],
      ['geldterug', 'geld terug', 'money back', '↩️'],
    ],
    [
      ['Ik haal de bedrijfsleider erbij.', 'I will get the store manager.'],
      ['Wilt u niet schreeuwen, alstublieft?', 'Please do not shout.'],
      ['Ik denk dat iemand iets steelt.', 'I think someone is stealing something.'],
    ],
    [['Ik wil nu mijn geld terug!', 'I want my money back now!'], ['Ik begrijp het. Ik haal even mijn collega.', 'I understand. I will get my colleague.']],
  ),
]);

/**
 * Words that sound alike (Word.pair, as in src/content/sounds.ts): each knows the other, so a
 * choice about one of them ("What do you hear?", the picture choice) always offers the other too.
 */
const withPairs = (l: Lesson, pairs: [string, string][]): Lesson => ({
  ...l,
  words: l.words.map((w) => {
    const p = pairs.find(([a, b]) => `w.${a}` === w.id || `w.${b}` === w.id);
    return p ? { ...w, pair: `w.${p[0]}` === w.id ? `w.${p[1]}` : `w.${p[0]}` } : w;
  }),
});

// "Getallen" (the owner's plan, phase 2, 4 November 2026): numbers were only ever in sentences.
// The six words are three listening pairs that are easy to mix up at work (13/30, 17/70, 47/74);
// the tip gives 0 to 20 and the tens, and the order of "vijfentwintig" (the last digit first).
// Each number is drawn as a label with its digits, as on a rack or a box (src/pictures/group35.tsx):
// at work the learner sees "47" and hears "zevenenveertig". First in the unit: the times and the
// money after it need the numbers.
const countingLesson = withPairs(
  lesson(
    'counting',
    'Numbers',
    [
      ['dertien', 'dertien', 'thirteen (13)', '1️⃣3️⃣'],
      ['dertig', 'dertig', 'thirty (30)', '3️⃣0️⃣'],
      ['zeventien', 'zeventien', 'seventeen (17)', '1️⃣7️⃣'],
      ['zeventig', 'zeventig', 'seventy (70)', '7️⃣0️⃣'],
      ['zevenenveertig', 'zevenenveertig', 'forty-seven (47)', '4️⃣7️⃣'],
      ['vierenzeventig', 'vierenzeventig', 'seventy-four (74)', '7️⃣4️⃣'],
    ],
    [
      ['Ik heb dertien dozen, niet dertig.', 'I have thirteen boxes, not thirty.'],
      ['Locatie vierenzeventig is leeg.', 'Location seventy-four is empty.'],
      ['Kunt u het cijfer voor cijfer zeggen?', 'Can you say it digit by digit?'],
    ],
    [['Hoeveel dozen zijn er nog?', 'How many boxes are left?'], ['Zeventig. Zeven, nul.', 'Seventy. Seven, zero.']],
  ),
  [['dertien', 'dertig'], ['zeventien', 'zeventig'], ['zevenenveertig', 'vierenzeventig']],
);

const numbersUnit = unit('numbers', 'Time, money and measures', 'Rekenen: tijd, geld, maten', '🔢', '#6d597a', [
  lesson(
    'hours',
    'Hours and times',
    [
      ['uur', 'het uur', 'the hour', '🕐'],
      ['minuut', 'de minuut', 'the minute', '⏱️'],
      ['kwartier', 'het kwartier', 'a quarter of an hour (15 minutes)', '🕒'],
      ['halfuur', 'een half uur', 'half an hour (30 minutes)', '🕧'],
      ['duren', 'duren', 'to last, to take (time)', '⏳'],
      ['optellen', 'optellen', 'to add up', '➕'],
    ],
    [
      ['Ik begin om half acht.', 'I start at half past seven (7:30).'],
      ['Ik werk vandaag acht uur.', 'I work eight hours today.'],
      ['De pauze duurt een half uur.', 'The break lasts half an hour.'],
    ],
    [['Hoe laat ben je klaar?', 'What time do you finish?'], ['Om kwart over vier.', 'At a quarter past four.']],
  ),
  lesson(
    'measures',
    'Money and measures',
    [
      ['euro', 'de euro', 'the euro', '💶'],
      ['cent', 'de cent', 'the cent', '🪙'],
      ['kilo', 'de kilo', 'the kilo', '🏋️'],
      ['liter', 'de liter', 'the litre', '🥛'],
      ['meter', 'de meter', 'the metre', '📏'],
      ['tellen', 'tellen', 'to count', '🔢', 'motion'],
    ],
    [
      ['Het kost zes euro vijftig.', 'It costs six euros fifty.'],
      ['Deze doos weegt tien kilo.', 'This box weighs ten kilos.'],
      ['Ik heb veertig dozen geteld.', 'I counted forty boxes.'],
    ],
    [['Hoe lang is die plank?', 'How long is that plank?'], ['Precies twee meter.', 'Exactly two metres.']],
  ),
  // Shapes, angles and sizes (the owner's request, 20 November 2026): three lessons before the
  // mixed review, drawn as the shapes themselves (src/pictures/group64.tsx to group66.tsx). "de
  // meter" (l.measures) and "de centimeter" share an emoji: they look alike (a ruler).
  lesson(
    'shapes',
    'Shapes',
    [
      ['vierkant', 'het vierkant', 'the square', '🟥'],
      ['rechthoek', 'de rechthoek', 'the rectangle', '🟩'],
      ['driehoek', 'de driehoek', 'the triangle', '🔺'],
      ['cirkel', 'de cirkel', 'the circle', '🟠'],
      ['kubus', 'de kubus', 'the cube', '🧊'],
      ['balk', 'de balk', 'the block, the cuboid (a long box shape)', '🟨'],
    ],
    [
      ['De tegel is een vierkant.', 'The tile is a square.'],
      ['Deze kamer is een rechthoek.', 'This room is a rectangle.'],
      ['Een baksteen heeft de vorm van een balk.', 'A brick has the shape of a cuboid.'],
    ],
    [['Is het een vierkant?', 'Is it a square?'], ['Nee, een rechthoek. Hij is langer dan breed.', 'No, a rectangle. It is longer than it is wide.']],
  ),
  lesson(
    'angles',
    'Angles and round shapes',
    [
      ['hoek', 'de hoek', 'the angle', '📐'],
      ['graad', 'de graad', 'the degree (°)', '🌗'],
      ['geodriehoek', 'de geodriehoek', 'the set square with a protractor', '🔻'],
      ['boog', 'de boog', 'the arch, the curve', '🌈'],
      ['cilinder', 'de cilinder', 'the cylinder', '🛢️'],
      ['parallellogram', 'het parallellogram', 'the parallelogram', '🔶'],
    ],
    [
      ['Deze hoek is negentig graden.', 'This angle is ninety degrees.'],
      ['Meet de hoek met de geodriehoek.', 'Measure the angle with the set square.'],
      ['De buis heeft de vorm van een cilinder.', 'The pipe has the shape of a cylinder.'],
    ],
    [['Hoeveel graden is deze hoek?', 'How many degrees is this angle?'], ['Vijfenveertig. De helft van een rechte hoek.', 'Forty-five. Half a right angle.']],
  ),
  lesson(
    'size',
    'Length, area and volume',
    [
      ['lengte', 'de lengte', 'the length', '↔️'],
      ['breedte', 'de breedte', 'the width', '↗️'],
      ['hoogte', 'de hoogte', 'the height', '↕️'],
      ['oppervlakte', 'de oppervlakte', 'the area (length times width, in square metres)', '🏁'],
      ['inhoud', 'de inhoud', 'the volume (length times width times height)', '🫗'],
      ['centimeter', 'de centimeter', 'the centimetre', '📏'],
    ],
    [
      ['De oppervlakte is de lengte keer de breedte.', 'The area is the length times the width.'],
      ['De inhoud is lengte keer breedte keer hoogte.', 'The volume is length times width times height.'],
      ['Tien millimeter is één centimeter.', 'Ten millimetres is one centimetre.'],
    ],
    [['Hoeveel vierkante meter is de vloer?', 'How many square metres is the floor?'], ['Vier bij vijf meter, dus twintig vierkante meter.', 'Four by five metres, so twenty square metres.']],
  ),
]);

// ---- AI and smart apps (19 October 2026) ----
// A basis unit appended after "Rekenen", as "In de winkel" and "Rekenen" were: every existing course
// keeps its order. Full version only (not in the preview).

const aiUnit = unit('ai', 'AI and smart apps', 'Slimme apps en AI', '🤖', '#5a4fcf', [
  lesson(
    'aihelp',
    'AI as a helper',
    [
      ['ai', 'de AI', 'AI (artificial intelligence)', '🤖'],
      ['chatbot', 'de chatbot', 'the chatbot (an app you can chat with)', '📲'],
      ['antwoord', 'het antwoord', 'the answer', '💡'],
      ['meekijken', 'meekijken', 'to look at it together with someone', '🧐'],
      ['kloppen', 'kloppen', 'to be right, to be correct', '✔️', false],
      ['zeker', 'zeker', 'sure, certain', '💯', false],
    ],
    [
      ['Kun je deze brief uitleggen?', 'Can you explain this letter?'],
      ['Klopt dit antwoord?', 'Is this answer right?'],
      ['Kunt u even meekijken?', 'Could you have a look with me?'],
    ],
    [['Heb je dit zelf geschreven?', 'Did you write this yourself?'], ['Ja, met hulp van AI.', 'Yes, with help from AI.']],
  ),
  lesson(
    'aiprivate',
    'What you do not share',
    [
      ['persoonlijk', 'persoonlijk', 'personal', '🙋', false],
      ['gegevens', 'de gegevens', 'the details, the data (name, address, number)', '📇', false],
      ['wachtwoord', 'het wachtwoord', 'the password', '🔐'],
      ['typen', 'typen', 'to type', '⌨️'],
      ['opslaan', 'opslaan', 'to save, to store', '💾'],
      ['inloggen', 'inloggen', 'to log in', '🔓'],
    ],
    [
      ['Ik deel geen namen van klanten.', 'I do not share names of customers.'],
      ['Mag ik AI gebruiken voor mijn werk?', 'May I use AI for my work?', ['Mag ik voor mijn werk AI gebruiken?']],
      ['Mijn wachtwoord is geheim.', 'My password is secret.'],
    ],
    [['Zet dit even in de chatbot.', 'Just put this in the chatbot.'], ['Liever niet, er staan namen van klanten in.', 'I would rather not, it has names of customers in it.']],
  ),
  lesson(
    'aifake',
    'Fake or real?',
    [
      ['echt', 'echt', 'real', '✅', false],
      ['stem', 'de stem', 'the voice', '👄'],
      ['filmpje', 'het filmpje', 'the (short) video', '🎬'],
      ['ophangen', 'ophangen', 'to hang up (the phone)', '📵'],
      ['nummer', 'het nummer', 'the (phone) number', '📇'],
      ['haast', 'de haast', 'the hurry, the rush', '⏰', false],
    ],
    [
      ['Is dit echt of nep?', 'Is this real or fake?'],
      ['Ik hang op en bel zelf terug.', 'I hang up and call back myself.'],
      ['Ik stuur geen geld.', 'I do not send money.'],
    ],
    [
      ['Hoi, dit is mijn nieuwe nummer. Kun je snel geld sturen?', 'Hi, this is my new number. Can you quickly send money?'],
      ['Ik bel je eerst op je oude nummer.', 'First I will call you on your old number.'],
    ],
  ),
  lesson(
    'aiplan',
    'When an app decides',
    [
      ['planning', 'de planning', 'the planning, the schedule', '📊'],
      ['mens', 'de mens', 'the human, the person', '🧑'],
      ['computer', 'de computer', 'the computer', '💻'],
      ['tempo', 'het tempo', 'the (work) speed', '⚡'],
      ['automatisch', 'automatisch', 'automatic, by itself', '⚙️', 'motion'],
      ['besluit', 'het besluit', 'the decision', '⚖️', false],
    ],
    [
      ['Wie heeft dit besluit genomen?', 'Who made this decision?'],
      ['Ik wil met een mens praten.', 'I want to talk to a person.', ['Ik wil praten met een mens.']],
      ['Waarom heb ik minder uren in mijn rooster?', 'Why do I have fewer hours in my schedule?', ['Waarom heb ik in mijn rooster minder uren?']],
    ],
    [['De app heeft je rooster gemaakt.', 'The app made your schedule.'], ['Kan ik er met een mens over praten?', 'Can I talk to a person about it?']],
  ),
]);

// ---- In the greenhouse (sector tuinbouw, 30 October 2026) ----
// A sector unit appended at the very end, so every existing course keeps its order. In the path
// of a learner who chose "Tuinbouw" it sits in the sector slot (src/content/sectors.ts).

const kasUnit = unit('kas', 'In the greenhouse', 'In de kas', '🌱', '#4d7c0f', [
  lesson(
    'harvest',
    'Harvesting and sorting',
    [
      ['kas', 'de kas', 'the greenhouse', '🌿'],
      ['gewas', 'het gewas', 'the crop (the plants that grow)', '🌱'],
      ['rij', 'de rij', 'the row (of plants)', '🌾'],
      ['oogsten', 'oogsten', 'to harvest', '🍅'],
      ['sorteren', 'sorteren', 'to sort', '🔀'],
      ['krat', 'de krat', 'the crate', '🧺'],
    ],
    [
      ['Ik werk in de kas.', 'I work in the greenhouse.'],
      ['In welke rij begin ik?', 'Which row do I start in?'],
      ['De krat is vol.', 'The crate is full.'],
    ],
    [['Hoeveel rijen heb je gedaan?', 'How many rows have you done?'], ['Vier. Nog twee te gaan.', 'Four. Two more to go.']],
  ),
  lesson(
    'greensafe',
    'Safe in the greenhouse',
    [
      ['spuitmiddelen', 'de spuitmiddelen', 'the crop sprays (chemicals for plants)', '🧪'],
      ['bespoten', 'bespoten', 'sprayed (with crop sprays)', '💨'],
      ['plukkar', 'de plukkar', 'the picking trolley', '🛒'],
      ['bukken', 'bukken', 'to bend down', '🙇'],
      ['drinken', 'drinken', 'to drink', '🚰'],
      ['hitte', 'de hitte', 'the heat (when it is very hot)', '🥵'],
    ],
    [
      ['Is deze kas bespoten?', 'Has this greenhouse been sprayed?'],
      ['Ik ga even water drinken.', 'I am going to drink some water.'],
      ['Waar staat de plukkar?', 'Where is the picking trolley?'],
    ],
    [['Mag ik in kas drie werken?', 'May I work in greenhouse three?'], ['Nee, nog niet. Die is net bespoten.', 'No, not yet. It was just sprayed.']],
  ),
  // "Caring for the plant" (l.plantcare, 14 November 2026, the owner's request: every sector unit grows to four lessons).
  lesson(
    'plantcare',
    'Caring for the plant',
    [
      // The id is not 'blad': that is the saying "geen blad voor de mond nemen" (l.plain).
    ['plantblad', 'het blad', 'the leaf', '🍃'],
      ['stengel', 'de stengel', 'the stem', '🌿'],
      ['bloem', 'de bloem', 'the flower', '🌼'],
      ['knippen', 'knippen', 'to cut (with scissors)', '✂️'],
      ['tomaat', 'de tomaat', 'the tomato', '🍅'],
      ['rijp', 'rijp', 'ripe (ready to pick)', '🔴'],
    ],
    [
      ['Deze tomaat is nog niet rijp.', 'This tomato is not ripe yet.'],
      ['Ik knip het blad weg.', 'I am cutting the leaf away.'],
      ['De stengel is gebroken.', 'The stem is broken.'],
    ],
    [['Welke tomaten pluk ik?', 'Which tomatoes do I pick?'], ['Alleen de rode. De groene zijn nog niet rijp.', 'Only the red ones. The green ones are not ripe yet.']],
  ),
  lesson(
    'outdoors',
    'Working outside',
    [
      ['land', 'het land', 'the field (where plants grow outside)', '🌾'],
      ['regen', 'de regen', 'the rain', '🌧️'],
      ['zon', 'de zon', 'the sun', '☀️'],
      ['laarzen', 'de laarzen', 'the boots', '🥾'],
      ['regenpak', 'het regenpak', 'the rain suit (a jacket and trousers against rain)', '🧥'],
      ['onweer', 'het onweer', 'the thunderstorm', '⛈️'],
    ],
    [
      ['Het regent. Ik trek mijn regenpak aan.', 'It is raining. I am putting on my rain suit.'],
      ['Mijn laarzen zijn nat.', 'My boots are wet.'],
      ['De zon is fel vandaag.', 'The sun is strong today.'],
    ],
    [['Er komt onweer. Wat doen we?', 'A thunderstorm is coming. What do we do?'], ['We stoppen en gaan naar binnen.', 'We stop and go inside.']],
  ),
]);

// ---- Instructions (14 November 2026): a basis unit right after "Asking for help", before "Smart
// tools", spliced in by curriculum.ts. The app's own problem starts with "does not understand an
// instruction", and the plain verbs of an instruction (zetten, leggen, duwen, trekken, opendoen,
// stoppen) were a word in no lesson: only nouns per sector. The spoken forms, as a colleague says
// them: "opendoen" and "dichtdoen" (not "openen", "sluiten"), "leegmaken" (not "legen"). The
// sentences have "het", "dit" and "hem" where a later unit names the thing (the box, the machine).
// Already words of other lessons, used here in a sentence or the chat only: "daar", "zo" and "de
// kantine" (earlier lessons), "eerst" (l.task), "uitzetten" (l.phone), "klaar" (l.shift) and "de
// deur" (l.roundsounds).

export const doUnit = unit('do', 'Instructions', 'Instructies', '👉', '#b45309', [
  lesson(
    'putdown',
    'Put it there',
    [
      ['zetten', 'zetten', 'to put (something that stands: a box, a bucket)', '📥'],
      ['leggen', 'leggen', 'to put, to lay (something that lies flat)', '📄'],
      ['brengen', 'brengen', 'to bring, to take (to a place or a person)', '🚶'],
      ['geven', 'geven', 'to give', '🤲'],
      ['vasthouden', 'vasthouden', 'to hold', '✊'],
      ['loslaten', 'loslaten', 'to let go', '🖐️'],
    ],
    [
      ['Zet het daar neer.', 'Put it down there.'],
      ['Breng dit naar de kantine.', 'Take this to the canteen.'],
      ['Hou dit even vast.', 'Hold this for a moment.'],
    ],
    [['Kun je dit even vasthouden?', 'Can you hold this for a moment?'], ['Ja. Waar moet ik het zetten?', 'Yes. Where must I put it?']],
  ),
  lesson(
    'onoff',
    'On and off, open and closed',
    [
      ['aanzetten', 'aanzetten', 'to switch on', '🔛'],
      ['opendoen', 'opendoen', 'to open', '📂'],
      ['dichtdoen', 'dichtdoen', 'to close', '📁'],
      ['drukken', 'drukken', 'to press (a button)', '👇'],
      ['draaien', 'draaien', 'to turn', '🔄'],
      ['stoppen', 'stoppen', 'to stop', '🛑', 'hook'],
    ],
    [
      ['Doe de deur dicht.', 'Close the door.'],
      ['Druk op de knop.', 'Press the button.'],
      ['Stop! Zet het uit.', 'Stop! Switch it off.'],
    ],
    [['Is de deur dicht?', 'Is the door closed?'], ['Nee. Ik doe hem nu dicht.', 'No. I am closing it now.']],
  ),
  lesson(
    'fillempty',
    'Push, pull, fill',
    [
      ['duwen', 'duwen', 'to push', '➡️'],
      ['trekken', 'trekken', 'to pull', '⬅️'],
      ['vullen', 'vullen', 'to fill', '🚰'],
      ['leegmaken', 'leegmaken', 'to empty', '🗑️'],
      ['schoonmaken', 'schoonmaken', 'to clean', '🧽'],
      ['vol', 'vol', 'full', '🪣'],
    ],
    [
      ['Niet duwen, maar trekken.', 'Do not push, pull.'],
      ['Deze is vol. Maak hem leeg.', 'This one is full. Empty it.'],
      ['Maak dit even schoon.', 'Clean this, please.'],
    ],
    [['Is hij al vol?', 'Is it full already?'], ['Ja. Ik maak hem leeg.', 'Yes. I am emptying it.']],
  ),
  lesson(
    'order',
    'First this, then that',
    [
      ['nu', 'nu', 'now', '⏰', false],
      ['dan', 'dan', 'then', '⏩', false],
      ['altijd', 'altijd', 'always', '♾️', false],
      ['genoeg', 'genoeg', 'enough', '👌', false],
      ['meer', 'meer', 'more', '➕', false],
      ['alles', 'alles', 'everything', '💯', false],
    ],
    [
      ['Eerst dit, dan dat.', 'First this, then that.'],
      ['Dat is genoeg.', 'That is enough.'],
      ['Doe dit altijd zo.', 'Always do this like this.'],
    ],
    [['Kun je dit nu doen?', 'Can you do this now?'], ['Ja. Eerst dit, en dan?', 'Yes. First this, and then?']],
  ),
]);

// ---- Smart tools (a basis unit right after "Asking for help", spliced in by curriculum.ts) ----

export const toolsUnit = unit('tools', 'Smart tools', 'Slimme hulpmiddelen', '📱', '#d1495b', [
  lesson(
    'translate',
    'Translate with your phone',
    [
      ['vertaalapp', 'de vertaalapp', 'the translation app', '📱'],
      ['vertalen', 'vertalen', 'to translate', '🔤'],
      ['camera', 'de camera', 'the camera', '📸'],
      ['briefje', 'het briefje', 'the note (a small paper)', '🗒️'],
      ['spreken', 'spreken', 'to speak', '🗣️'],
      ['vertaling', 'de vertaling', 'the translation', '📝'],
    ],
    [
      ['Ik vertaal het met mijn telefoon.', 'I translate it with my phone.'],
      ['Mag ik dit even vertalen?', 'May I quickly translate this?'],
      ['Wilt u even tegen mijn telefoon praten?', 'Could you talk to my phone for a moment?'],
    ],
    [['Wat staat er op dat briefje?', 'What does that note say?'], ['Wacht even, ik vertaal het.', 'Wait a moment, I will translate it.']],
  ),
  lesson(
    'understood',
    'Understand and be understood',
    [
      ['herhalen', 'herhalen', 'to repeat', '🔁'],
      ['opschrijven', 'opschrijven', 'to write down', '✏️'],
      ['latenzien', 'laten zien', 'to show', '👉'],
      ['ondertiteling', 'de ondertiteling', 'the captions (speech as text)', '💬'],
      ['instructie', 'de instructie', 'the instruction', '📋'],
      ['plaatje', 'het plaatje', 'the picture', '🖼️'],
    ],
    [
      ['Wilt u het opschrijven?', 'Will you write it down?'],
      ['Kunt u het laten zien?', 'Can you show it?'],
      ['Is er een instructie met plaatjes?', 'Is there an instruction with pictures?'],
    ],
    [['Eerst opruimen, dan inpakken.', 'First tidy up, then pack.'], ['Dus ik moet eerst opruimen?', 'So I must tidy up first?']],
  ),
  lesson(
    'keeplearning',
    'Keep learning',
    [
      ['bibliotheek', 'de bibliotheek', 'the (public) library', '📚'],
      ['taalhuis', 'het Taalhuis', 'the Taalhuis (free help with Dutch)', '🗨️', false],
      ['oefenen', 'oefenen', 'to practise', '🎯', false],
      ['luisteren', 'luisteren', 'to listen', '👂'],
      ['elkedag', 'elke dag', 'every day', '📆', { look: 'kalender/elkedag' }],
      ['woord', 'het woord', 'the word', '🔡', false],
    ],
    [
      ['Ik oefen elke dag tien minuten.', 'I practise ten minutes every day.'],
      ['Wat betekent dit woord?', 'What does this word mean?'],
      ['Wil je Nederlands met mij praten?', 'Will you speak Dutch with me?'],
    ],
    [['Zal ik Engels praten?', 'Shall I speak English?'], ['Nee, liever Nederlands. Ik wil oefenen.', 'No, Dutch please. I want to practise.']],
  ),
]);

// ---- Numbers and details (30 October 2026): a basis unit right before "Time and schedule",
// spliced in by curriculum.ts (A1 core of the Taalprofiel werk: give your details, spell your
// name, days and dates). "het adres" is taught in l.bsn (w.adres). "doorgeven" (w.doorgeven,
// l.privacy), "de Belastingdienst" (w.belastingdienst, l.letters) and "de datum" (w.datum,
// l.kitchen) are already words of other lessons: here they come in a sentence or a chat. ----

export const dataUnit = unit('data', 'Numbers and details', 'Getallen en gegevens', '📇', '#3d7f8c', [
  // Getallen first: needed from day 1 (locations, amounts, times), so in Starten and not late in
  // the path with Rekenen (4 November 2026).
  countingLesson,
  lesson(
    'details',
    'Your details',
    [
      ['voornaam', 'de voornaam', 'the first name', '🧑'],
      ['achternaam', 'de achternaam', 'the last name, the family name', '👨‍👩‍👧'],
      ['spellen', 'spellen', 'to spell (say the letters one by one)', '🔠'],
      ['telefoonnummer', 'het telefoonnummer', 'the phone number', '📞'],
      ['geboortedatum', 'de geboortedatum', 'the date of birth', '🎂', false],
      ['formulier', 'het formulier', 'the form (a paper or page to fill in)', '📋'],
    ],
    [
      ['Kunt u dat spellen?', 'Can you spell that?'],
      ['Ik geef mijn nieuwe telefoonnummer door.', 'I am passing on my new phone number.'],
      ['Dit formulier is voor de Belastingdienst.', 'This form is for the Tax Office.'],
    ],
    [['Wat is je achternaam?', 'What is your last name?'], ['Haddad. Zal ik het spellen?', 'Haddad. Shall I spell it?']],
  ),
  lesson(
    'dates',
    'Days and dates',
    [
      ['maandag', 'maandag', 'Monday', '📅', { look: 'kalender/maandag' }],
      ['week', 'de week', 'the week', '🗓️', { look: 'kalender/week' }],
      ['maand', 'de maand', 'the month', '🌙', { look: 'kalender/maand' }],
      ['volgendeweek', 'volgende week', 'next week', '⏭️', { look: 'kalender/volgendeweek' }],
      ['vorigeweek', 'vorige week', 'last week', '⏮️', { look: 'kalender/vorigeweek' }],
      ['totenmet', 'tot en met', 'up to and including (the last day counts too)', '↔️', { look: 'kalender/totenmet' }],
    ],
    [
      ['Ik kan maandag tot en met donderdag.', 'I can work Monday to Thursday (Thursday too).'],
      ['Volgende week werk ik vier dagen.', 'Next week I work four days.', ['Ik werk volgende week vier dagen.']],
      ['Vorige week werkte ik veertig uur.', 'Last week I worked forty hours.', ['Ik werkte vorige week veertig uur.']],
    ],
    [['Welke datum is het vandaag?', 'What is the date today?'], ['Het is maandag drie juni.', 'It is Monday, 3 June.']],
  ),
]);

// ---- Work and contracts: lesson 4 (30 October 2026) ----
// Papers, integration and self-employment. "de oproepkracht" (w.oproepkracht, l.contract) and
// "het rooster" (w.rooster, l.clock) are already words of other lessons: here they come in a
// sentence and the tip.

const contractMore: Lesson[] = [
  lesson(
    'permit',
    'Papers, integration and your job',
    [
      ['papieren', 'de papieren', 'the papers (documents)', '📂'],
      ['werkvergunning', 'de werkvergunning', 'the work permit', '📃', false],
      ['werknemer', 'de werknemer', 'the employee (you work for an employer)', '🧑‍🏭'],
      ['zzper', 'de zzp’er', 'the self-employed worker (you work for yourself)', '🧰', false],
      ['inburgering', 'de inburgering', 'the civic integration (the course and exams for newcomers)', '🧭', false],
      ['taalles', 'de taalles', 'the language class', '🧑‍🏫'],
    ],
    [
      ['Mag ik hier werken met mijn papieren?', 'May I work here with my papers?'],
      ['Ben ik werknemer of zzp’er?', 'Am I an employee or self-employed?'],
      ['Ik werk als oproepkracht.', 'I work as an on-call worker.'],
    ],
    [['Kun je dinsdag werken?', 'Can you work on Tuesday?'], ['Nee, dan heb ik taalles. Woensdag kan ik wel.', 'No, then I have a language class. Wednesday is fine.']],
  ),
];

// ---- Leave: lesson 2 (30 October 2026; lesson 3 of "Verlof en ziekte" until 5 November 2026) ----
// Children and work. "het calamiteitenverlof" (w.calamiteitenverlof, l.leave) and "doorbetalen"
// (w.doorbetalen, l.illness, now in "Ziekte") are words of other lessons: here they come in the
// sentences and the tip.

const leaveMore: Lesson[] = [
  lesson(
    'kids',
    'Children and work',
    [
      ['zwanger', 'zwanger', 'pregnant', '🤰'],
      ['kinderopvang', 'de kinderopvang', 'the childcare, the daycare', '🧸'],
      ['ophalen', 'ophalen', 'to pick up (go and get someone)', '🚸'],
      ['ziekkind', 'een ziek kind', 'a sick child', '🧒'],
      ['ouderschapsverlof', 'het ouderschapsverlof', 'the parental leave', '👨‍👧', false],
      ['zorgverlof', 'het zorgverlof', 'the care leave (time off to care for a sick family member)', '🫶', false],
    ],
    [
      ['Mijn kind is ziek. Ik moet het ophalen.', 'My child is sick. I have to pick my child up.'],
      ['Mag ik calamiteitenverlof opnemen?', 'May I take emergency leave?'],
      ['Betaalt mijn werkgever mijn loon door?', 'Does my employer keep paying my wage?'],
    ],
    [['Waarom moet je nu weg?', 'Why do you have to leave now?'], ['De kinderopvang belde. Mijn zoon heeft koorts.', 'The daycare called. My son has a fever.']],
  ),
];

// ---- Illness: lesson 2 (5 November 2026) ----
// Back to work after illness (the owner's request): betermelden, the company doctor, building up
// calmly (fewer hours or lighter work first), saying what you can and cannot do yet, and coming
// back to your colleagues. About coming back well, not about staying home: calm, no guilt.
// "betermelden" and "de bedrijfsarts" (l.illness), "rustig" (l.clear) and "nog niet" (l.notyet)
// are words of other lessons: here they come in the sentences, the chat and the tip. "licht
// werk" and "zwaar werk" are a pair with drawings; "opbouwen" and "halve dagen" have a memory
// picture; "herstellen" has none.

const sickMore: Lesson[] = [
  lesson(
    'backtowork',
    'Back to work after illness',
    [
      ['opbouwen', 'opbouwen', 'to build up (slowly, step by step)', '📈', 'hook'],
      ['halvedagen', 'halve dagen', 'half days (you work part of the day)', '🌗', 'hook'],
      ['lichtwerk', 'licht werk', 'light work (not heavy)', '🪶'],
      ['zwaarwerk', 'zwaar werk', 'heavy work', '🏋️'],
      ['herstellen', 'herstellen', 'to recover, to get well again', '🌱', false],
      ['welkomterug', 'welkom terug', 'welcome back', '🤗'],
    ],
    [
      ['Ik begin met halve dagen.', 'I am starting with half days.'],
      ['Licht werk kan ik al. Zwaar werk nog niet.', 'I can already do light work. Heavy work not yet.'],
      ['De bedrijfsarts zegt: rustig opbouwen.', 'The company doctor says: build up slowly.'],
    ],
    [['Welkom terug! Gaat het weer?', 'Welcome back! Are you feeling better?'], ['Ja, het gaat beter. Ik doe het rustig aan.', 'Yes, it is going better. I am taking it easy.']],
  ),
];

// ---- Entree in the Taal track (30 October 2026): the top 10 gaps of the Entree report ----
// Six new units, appended after "In de kas" at the very end of the course, so every existing
// course keeps its order. Four are basis units, so they come after everything a learner already
// had; "In de werkplaats" (u.tech) and "In de garage" (u.garage) are the own units of the sectors
// Techniek and Garage (src/content/sectors.ts), so they go to "Andere sectoren" for other sectors. Five more lessons go at the end of an existing unit, as
// l.permit, l.kids and l.body did: l.mychoice and l.nextstep (u.grow), l.email (u.contact),
// l.budget (u.money) and l.healthy (u.health).
// Already words of other lessons, used here in a sentence, a chat or a tip only: "de werkbon"
// is new, but "de opdracht" (l.agency), "de taak" (l.task), "tekenen" (l.contract), "melden"
// (l.gethelp), "het wachtwoord" and "inloggen" (l.aiprivate), "de link" (l.scams), "de schuld"
// (l.warning), "opzeggen" (l.jobends), "het identiteitsbewijs" (l.bsn), "het besluit" (l.aiplan)
// and "de veiligheidsbril" (l.gear). "de Tweede Kamer" is only in the tip: as a word or in a
// sentence its "Kamer" would count as a name (lib/exercises.ts courseNames) and give "de kamer"
// (l.housing) a capital, so l.council teaches "het parlement".

const finishUnit = unit('finish', 'Finishing your work', 'Je werk afronden', '🏁', '#8a5a44', [
  lesson(
    'workorder',
    'The work order',
    [
      ['werkbon', 'de werkbon', 'the work order (a paper or app with your task)', '📝'],
      ['lezen', 'lezen', 'to read', '👓'],
      ['aantal', 'het aantal', 'the number (how many)', '#️⃣', false],
      ['materiaal', 'het materiaal', 'the materials (what you need for the work)', '🧱', false],
      ['klaarleggen', 'klaarleggen', 'to put ready (put out what you need)', '🗂️', false],
      ['handtekening', 'de handtekening', 'the signature', '🖋️'],
    ],
    [
      ['Ik lees eerst de werkbon.', 'I read the work order first.'],
      ['Klopt dit aantal?', 'Is this number right?'],
      ['Ik leg het materiaal klaar.', 'I am putting the materials ready.'],
    ],
    [['Weet je wat je moet doen?', 'Do you know what you have to do?'], ['Bijna. Wat betekent dit woord op de werkbon?', 'Almost. What does this word on the work order mean?']],
  ),
  lesson(
    'handover',
    'Done, or not yet?',
    [
      ['opruimen', 'opruimen', 'to tidy up, to put things away', '🧽'],
      ['nakijken', 'nakijken', 'to check (look at the work again)', '🔎', false],
      ['afmelden', 'afmelden', 'to sign off (say that you are done and leave)', '📣', false],
      ['kapot', 'kapot', 'broken', '🪫'],
      ['opslot', 'op slot', 'locked', '🔐'],
      // "de bijzonderheid" (B1) became "de deur", the door of the tip's "De deur zat op slot."; the id stays.
      ['bijzonderheid', 'de deur', 'the door', '🚪'],
    ],
    [
      ['Ik ruim mijn plek op.', 'I am tidying up my place.'],
      ['Kunt u mijn werk even nakijken?', 'Could you check my work?'],
      ['Ik meld me af bij de leidinggevende.', 'I am signing off with the supervisor.'],
    ],
    [['Is alles klaar?', 'Is everything done?'], ['Bijna. Kamer vier zat op slot.', 'Almost. Room four was locked.']],
  ),
]);

const techUnit = unit('tech', 'In the workshop', 'In de werkplaats', '🔩', '#52606d', [
  lesson(
    'workshop',
    'Workshop tools',
    [
      ['gereedschap', 'het gereedschap', 'the tools', '🪛'],
      ['zagen', 'zagen', 'to saw', '🪚'],
      ['slijpen', 'slijpen', 'to grind (make metal smooth or cut it with a machine)', '⚙️'],
      ['vonk', 'de vonk', 'the spark', '🎇'],
      ['gehoorbescherming', 'de gehoorbescherming', 'the hearing protection (for your ears)', '🎧'],
      ['lawaai', 'het lawaai', 'the noise (a lot of loud sound)', '🔊'],
    ],
    [
      ['Waar ligt het gereedschap?', 'Where are the tools?'],
      ['Ik draag gehoorbescherming bij het slijpen.', 'I wear hearing protection when I grind.'],
      ['Pas op voor de vonken!', 'Watch out for the sparks!'],
    ],
    [['Waarom draag je een bril?', 'Why are you wearing glasses?'], ['Bij het zagen kunnen er stukjes in mijn oog komen.', 'When I saw, small bits can get in my eye.']],
  ),
  lesson(
    'power',
    'Power off first',
    [
      ['stroom', 'de stroom', 'the power, electricity', '⚡'],
      ['kabel', 'de kabel', 'the cable', '➰'],
      ['stekker', 'de stekker', 'the plug', '🔌'],
      ['onderspanning', 'onder spanning', 'live (with power on it)', '⚡', false],
      ['spanningsloos', 'spanningsloos', 'dead, safe (with no power on it)', '🚫', false],
      ['elektricien', 'de elektricien', 'the electrician', '🧑‍🔧'],
    ],
    [
      ['Staat hier nog stroom op?', 'Is there still power on this?'],
      ['Deze kabel is kapot.', 'This cable is broken.'],
      ['Ik wacht tot het spanningsloos is.', 'I wait until there is no power on it.'],
    ],
    [['Kun je die lamp even vervangen?', 'Can you replace that lamp?'], ['Is de stroom eraf? Anders wacht ik op de elektricien.', 'Is the power off? If not, I will wait for the electrician.']],
  ),
  // "The drawing and the measure" (l.drawing, 14 November 2026, the owner's request: every sector unit grows to four lessons).
  lesson(
    'drawing',
    'The drawing and the measure',
    [
      ['tekening', 'de tekening', 'the drawing (it shows how the part must be)', '📐'],
      ['maat', 'de maat', 'the measure, the size', '📏'],
      ['millimeter', 'de millimeter', 'the millimetre', '🔬', false],
      ['schuifmaat', 'de schuifmaat', 'the caliper (it measures very exactly)', '🗜️'],
      ['passen', 'passen', 'to fit', '🧩'],
      ['bout', 'de bout', 'the bolt', '🔩'],
    ],
    [
      ['Wat is de maat op de tekening?', 'What is the measure on the drawing?'],
      ['Dit onderdeel past niet.', 'This part does not fit.'],
      ['Het is twee millimeter te groot.', 'It is two millimetres too big.'],
    ],
    [['Past de bout?', 'Does the bolt fit?'], ['Nee. Ik meet het nog een keer.', 'No. I will measure it one more time.']],
  ),
  lesson(
    'weld',
    'Welding and hot work',
    [
      ['lassen', 'lassen', 'to weld (join metal with great heat)', '🔥'],
      ['laskap', 'de laskap', 'the welding helmet', '🥽'],
      ['rook', 'de rook', 'the smoke', '🌫️'],
      ['afzuiging', 'de afzuiging', 'the extraction (it takes the smoke away)', '🌬️'],
      ['afkoelen', 'afkoelen', 'to cool down', '❄️'],
      ['brandwond', 'de brandwond', 'the burn (a wound from heat)', '🩹'],
    ],
    [
      ['Ik zet mijn laskap op.', 'I am putting on my welding helmet.'],
      ['Zet de afzuiging aan.', 'Switch on the extraction.'],
      ['Pas op, het metaal is nog heet.', 'Careful, the metal is still hot.'],
    ],
    [['Mag ik dit al pakken?', 'May I pick this up already?'], ['Nee, wacht. Het moet eerst afkoelen.', 'No, wait. It must cool down first.']],
  ),
]);

const garageUnit = unit('garage', 'In the garage', 'In de garage', '🚗', '#1f6f8b', [
  lesson(
    'garage',
    'Tyres, oil and the lift',
    [
      ['band', 'de band', 'the tyre', '🛞'],
      ['olie', 'de olie', 'the oil', '🫗'],
      ['accu', 'de accu', 'the car battery', '🔋'],
      ['monteur', 'de monteur', 'the mechanic', '👨‍🔧'],
      ['hefbrug', 'de hefbrug', 'the car lift (it lifts the car up)', '🏗️'],
      ['lek', 'lek', 'flat, leaking (air or water gets out)', '💧'],
    ],
    [
      ['De band is lek.', 'The tyre is flat.'],
      ['Waar staat de nieuwe olie?', 'Where is the new oil?'],
      ['De auto staat op de hefbrug.', 'The car is on the lift.'],
    ],
    [['Kun je de banden van deze auto wisselen?', 'Can you change the tyres of this car?'], ['Ja. Waar liggen de winterbanden?', 'Yes. Where are the winter tyres?']],
  ),
  lesson(
    'carjob',
    'The customer decides',
    [
      ['proefrit', 'de proefrit', 'the test drive', '🚗'],
      ['rijbewijs', 'het rijbewijs', 'the driving licence', '🪪'],
      ['akkoord', 'akkoord', 'agreed, OK (you say yes to it)', '👌', false],
      ['kosten', 'de kosten', 'the costs (what you must pay)', '💰', false],
      ['repareren', 'repareren', 'to repair, to fix', '🔧'],
      ['onderdeel', 'het onderdeel', 'the part (of a car or machine)', '⚙️'],
    ],
    [
      ['Is de klant akkoord met de kosten?', 'Does the customer agree to the costs?'],
      ['Dit onderdeel is kapot.', 'This part is broken.'],
      ['Mag ik een proefrit maken?', 'May I take a test drive?'],
    ],
    [['De remmen zijn ook slecht. Doe je die meteen?', 'The brakes are bad too. Will you do them right away?'], ['Eerst vraag ik het aan de chef. De klant moet akkoord zijn.', 'First I ask my supervisor. The customer must agree.']],
  ),
  // "Parts of the car" (l.carparts, 14 November 2026, the owner's request: every sector unit grows to four lessons).
  lesson(
    'carparts',
    'Parts of the car',
    [
      ['motor', 'de motor', 'the engine', '⚙️'],
      ['motorkap', 'de motorkap', 'the bonnet (the cover over the engine)', '🚘'],
      ['rem', 'de rem', 'the brake', '🛑'],
      ['lamp', 'de lamp', 'the light, the lamp', '💡'],
      ['ruitenwisser', 'de ruitenwisser', 'the windscreen wiper', '🌧️'],
      ['stoel', 'de stoel', 'the seat, the chair', '💺'],
    ],
    [
      ['Doe de motorkap open.', 'Open the bonnet.'],
      ['De lamp links voor is kapot.', 'The front left light is broken.'],
      ['De remmen maken lawaai.', 'The brakes are making noise.'],
    ],
    [['Wat hoor je?', 'What do you hear?'], ['De motor maakt een raar geluid.', 'The engine makes a strange sound.']],
  ),
  lesson(
    'carsafe',
    'Petrol, gas and power',
    [
      ['krik', 'de krik', 'the jack (it lifts one side of the car)', '🔧'],
      ['benzine', 'de benzine', 'the petrol', '⛽'],
      ['elektrischeauto', 'de elektrische auto', 'the electric car', '🚙'],
      ['oranje', 'oranje', 'orange', '🟧'],
      ['morsen', 'morsen', 'to spill', '💦'],
      ['lap', 'de lap', 'the rag (a cloth for dirty work)', '🧽'],
    ],
    [
      ['Ik ruik benzine.', 'I smell petrol.'],
      ['Er is olie gemorst. Ik pak een lap.', 'Oil has been spilled. I am getting a rag.'],
      ['De oranje kabels raak ik niet aan.', 'I do not touch the orange cables.'],
    ],
    [['Mag ik aan deze auto werken?', 'May I work on this car?'], ['Nog niet. Het is een elektrische auto.', 'Not yet. It is an electric car.']],
  ),
]);

const stageUnit = unit('stage', 'Your work placement', 'Stage lopen', '🎒', '#7b4fa0', [
  lesson(
    'placement',
    'Your placement',
    [
      ['stage', 'de stage', 'the work placement (you learn at a company)', '🎒'],
      ['praktijkopleider', 'de praktijkopleider', 'the workplace trainer (your guide at the company)', '🧭', false],
      ['stagebegeleider', 'de stagebegeleider', 'the placement coach (your guide from school)', '🧑‍🎓', false],
      ['pok', 'de POK', 'the placement agreement (you, the school and the company sign it)', '📑', false],
      ['school', 'de school', 'the school', '🏫'],
      ['leerbedrijf', 'het leerbedrijf', 'the training company (a company where students may learn)', '🏭', false],
    ],
    [
      ['Ik loop stage in een magazijn.', 'I do my placement in a warehouse.'],
      ['Wie is mijn praktijkopleider?', 'Who is my workplace trainer?'],
      ['Ik heb de POK nog niet getekend.', 'I have not signed the placement agreement yet.'],
    ],
    [['Wanneer begin je met je stage?', 'When do you start your placement?'], ['Maandag. Eerst tekenen we de POK.', 'On Monday. First we sign the placement agreement.']],
  ),
  lesson(
    'review',
    'Feedback on your placement',
    [
      ['beoordeling', 'de beoordeling', 'the assessment (how well you do it)', '📊', false],
      ['leerdoel', 'het leerdoel', 'the learning goal (what you want to learn)', '🎯'],
      ['voorbeeld', 'het voorbeeld', 'the example', '🔍', false],
      ['portfolio', 'het portfolio', 'the portfolio (a folder with your work and proof)', '📁'],
      ['cijfer', 'het cijfer', 'the mark, the grade', '🔟'],
      ['verslag', 'het verslag', 'the report (a text about your work)', '🗞️', false],
    ],
    [
      ['Wat kan ik beter doen?', 'What can I do better?'],
      ['Kunt u een voorbeeld geven?', 'Could you give an example?'],
      ['Mijn beoordeling is volgende week.', 'My assessment is next week.'],
    ],
    [['Je moet sneller werken.', 'You have to work faster.'], ['Oké. Kunt u laten zien hoe het sneller kan?', 'OK. Could you show me how to do it faster?']],
  ),
]);

const societyUnit = unit('society', 'Taking part in the Netherlands', 'Meedoen in Nederland', '🏛️', '#2b5c8a', [
  lesson(
    'council',
    'The municipality and voting',
    [
      ['stemmen', 'stemmen', 'to vote', '🗳️'],
      ['verkiezing', 'de verkiezing', 'the election', '📆', false],
      ['gemeenteraad', 'de gemeenteraad', 'the municipal council (it decides about your town)', '🏘️', false],
      ['parlement', 'het parlement', 'the parliament (it makes the laws)', '🏛️', false],
      ['stempas', 'de stempas', 'the voting pass (the card you need to vote)', '🎫', false],
      ['burgemeester', 'de burgemeester', 'the mayor', '🎖️', false],
    ],
    [
      ['Mag ik stemmen?', 'Am I allowed to vote?'],
      ['Mijn stempas kwam met de post.', 'My voting pass came in the post.'],
      ['De gemeenteraad beslist over mijn buurt.', 'The municipal council decides about my neighbourhood.'],
    ],
    [['Ga je woensdag stemmen?', 'Are you going to vote on Wednesday?'], ['Ja. Ik heb mijn stempas en mijn ID.', 'Yes. I have my voting pass and my ID.']],
  ),
  lesson(
    'police',
    'Police and your rights',
    [
      ['agent', 'de agent', 'the police officer', '👮'],
      ['boete', 'de boete', 'the fine (money you must pay as a punishment)', '💸', 'hook'],
      ['bezwaar', 'het bezwaar', 'the objection (you say in writing that you do not agree)', '✋', false],
      ['rechter', 'de rechter', 'the judge', '👩‍⚖️'],
      ['advocaat', 'de advocaat', 'the lawyer', '💼', false],
      ['wet', 'de wet', 'the law', '📜', false],
    ],
    [
      ['Ik heb een boete gekregen.', 'I got a fine.'],
      ['Ik wil bezwaar maken.', 'I want to object.'],
      ['Ik wil met een advocaat praten.', 'I want to talk to a lawyer.'],
    ],
    [['Mag ik uw identiteitsbewijs zien?', 'May I see your ID?'], ['Ja, hier is het. Wat is er aan de hand?', 'Yes, here it is. What is going on?']],
  ),
]);

// Unit Taal-C of docs/entree-aanvulling.md (part 5), with two words changed: "inloggen" and "het
// wachtwoord" are already words of l.aiprivate (they stay in the sentences and the chat), so
// "de gebruikersnaam" and "de inlogcode" take their place.
const onlineUnit = unit('online', 'Online at work', 'Online op je werk', '💻', '#3d5a80', [
  lesson(
    'login',
    'Logging in',
    [
      ['uitloggen', 'uitloggen', 'to log out', '🚪', 'motion'],
      ['account', 'het account', 'the account', '👤', false],
      ['scherm', 'het scherm', 'the screen', '🖥️'],
      ['vergrendelen', 'vergrendelen', 'to lock (a screen or a phone)', '🔒'],
      ['gebruikersnaam', 'de gebruikersnaam', 'the username', '🔤', false],
      ['inlogcode', 'de inlogcode', 'the login code (a code you get by text or in an app)', '🔢', false],
    ],
    [
      ['Ik ben mijn wachtwoord vergeten.', 'I forgot my password.'],
      ['Ik log altijd uit.', 'I always log out.'],
      ['Mijn DigiD geef ik aan niemand.', 'I give my DigiD to no one.'],
    ],
    [['Kun je inloggen?', 'Can you log in?'], ['Nee, mijn wachtwoord werkt niet.', 'No, my password does not work.']],
  ),
  lesson(
    'phish',
    'Fake e-mails',
    [
      ['afzender', 'de afzender', 'the sender', '👤'],
      ['klikken', 'klikken', 'to click', '🖱️'],
      ['bijlage', 'de bijlage', 'the attachment', '📎'],
      ['verdacht', 'verdacht', 'suspicious', '🤨', false],
      ['ictafdeling', 'de ICT-afdeling', 'the IT department', '🧑‍💻'],
      ['wijzigen', 'wijzigen', 'to change', '✏️', false],
    ],
    [
      ['Deze mail is verdacht.', 'This e-mail is suspicious.'],
      ['Ik open de bijlage niet.', 'I do not open the attachment.'],
      ['Ik wijzig mijn wachtwoord meteen.', 'I am changing my password right away.'],
    ],
    [['Heb je op de link geklikt?', 'Did you click on the link?'], ['Ja. Ik bel de ICT-afdeling.', 'Yes. I am calling the IT department.']],
  ),
]);

/** Lessons added at the end of an existing unit (Entree, 30 October 2026; l.feelwell in u.health, 5 November 2026). */
const entreeMore: Record<string, Lesson[]> = {
  'u.grow': [
    lesson(
      'mychoice',
      'What I am good at',
      [
        ['goedin', 'goed in', 'good at', '🌟', false],
        ['kiezen', 'kiezen', 'to choose', '🤔', 'motion'],
        ['beroep', 'het beroep', 'the profession, the kind of work', '🧑‍🍳', false],
        ['bijbaan', 'de bijbaan', 'the side job (a small job next to school)', '🛵', false],
        ['nauwkeurig', 'nauwkeurig', 'careful and exact', '🎯', false],
        ['meeloopdag', 'de meeloopdag', 'the job shadow day (a day you join someone at work)', '👣', false],
      ],
      [
        ['Ik kan goed met mijn handen werken.', 'I can work well with my hands.'],
        ['Ik werk graag met mensen.', 'I like working with people.'],
        ['Mag ik een dag meelopen?', 'May I join you for a day, to see the work?'],
      ],
      [['Waar ben je goed in?', 'What are you good at?'], ['Ik kan goed voor mensen zorgen. Thuis zorg ik voor mijn moeder.', 'I am good at caring for people. At home I care for my mother.']],
    ),
    lesson(
      'nextstep',
      'After Entree',
      [
        ['niveau2', 'niveau 2', 'level 2 (the next level of the mbo)', '2️⃣', false],
        ['startkwalificatie', 'de startkwalificatie', 'the basic qualification (a diploma at mbo level 2 or higher)', '🎓', false],
        ['bbl', 'de bbl', 'the bbl (you work at a company and go to school about one day a week)', '🔁', false],
        ['doorstromen', 'doorstromen', 'to go on (to a higher level)', '⏩', false],
        ['aanmelden', 'aanmelden', 'to sign up (for a school or a course)', '🖊️', false],
        ['opendag', 'de open dag', 'the open day (you can visit a school)', '🎈', false],
      ],
      [
        ['Na Entree wil ik naar niveau 2.', 'After Entree I want to go to level 2.'],
        ['Ik wil werken en leren tegelijk.', 'I want to work and learn at the same time.'],
        ['Wanneer is de open dag?', 'When is the open day?'],
      ],
      [['Wat ga je doen na Entree?', 'What are you going to do after Entree?'], ['Ik wil de bbl doen. Dan werk ik en leer ik.', 'I want to do the bbl. Then I work and I learn.']],
    ),
  ],
  'u.contact': [
    lesson(
      'email',
      'Writing to work',
      [
        ['mail', 'de mail', 'the e-mail', '📧'],
        ['onderwerp', 'het onderwerp', 'the subject (of an e-mail)', '🏷️', false],
        ['beste', 'beste', 'dear (at the start of a letter or e-mail)', '👋', false],
        ['beleefd', 'beleefd', 'polite', '🎩', false],
        ['nalezen', 'nalezen', 'to read again (to check before you send it)', '🔍', false],
        ['versturen', 'versturen', 'to send', '📤', 'motion'],
      ],
      [
        ['Wat zet ik bij het onderwerp?', 'What do I put as the subject?'],
        ['Ik lees mijn mail nog een keer na.', 'I read my e-mail once more.'],
        ['Ik verstuur de mail morgen.', 'I will send the e-mail tomorrow.'],
      ],
      [['Heb je de mail over je vrije dag gestuurd?', 'Did you send the e-mail about your day off?'], ['Nog niet. Ik lees hem eerst na.', 'Not yet. I am reading it again first.']],
    ),
  ],
  'u.money': [
    lesson(
      'budget',
      'Your money each month',
      [
        ['vastelasten', 'de vaste lasten', 'the fixed costs (rent, insurance, phone: every month)', '🧾', false],
        ['sparen', 'sparen', 'to save (money)', '🐷'],
        ['abonnement', 'het abonnement', 'the subscription (you pay for it every month)', '🔁', false],
        ['achterafbetalen', 'achteraf betalen', 'to pay later (buy now, pay later)', '⏳', false],
        ['bedenktijd', 'de bedenktijd', 'the cooling-off period (time to change your mind)', '🤔', false],
        ['garantie', 'de garantie', 'the guarantee (it must work, or you get it fixed)', '🛡️', false],
      ],
      [
        ['Eerst betaal ik de vaste lasten.', 'First I pay the fixed costs.'],
        ['Ik spaar elke maand een beetje.', 'I save a little every month.'],
        ['Ik zeg dit abonnement op.', 'I am cancelling this subscription.'],
      ],
      [['Koop die telefoon nu en betaal later!', 'Buy that phone now and pay later!'], ['Nee, dank je. Achteraf betalen is ook een schuld.', 'No, thank you. Paying later is also a debt.']],
    ),
  ],
  'u.health': [
    lesson(
      'healthy',
      'Fit for work',
      [
        ['slapen', 'slapen', 'to sleep', '😴'],
        ['ontbijt', 'het ontbijt', 'the breakfast', '🍞'],
        ['bewegen', 'bewegen', 'to move, to be active', '🚶'],
        ['moe', 'moe', 'tired', '🥱'],
        ['drugs', 'de drugs', 'the drugs', '🚷', false],
        ['somber', 'somber', 'low, down (sad for a long time)', '🌫️', false],
      ],
      [
        ['Ik ben erg moe vandaag.', 'I am very tired today.'],
        // "Ik eet een ontbijt" is not how Dutch says it (4 November 2026); not recorded yet either way.
        ['Ik ontbijt altijd eerst.', 'I always have breakfast first.'],
        ['In de pauze ga ik even wandelen.', 'In the break I go for a short walk.'],
      ],
      [['Wil je een pilletje? Dan blijf je wakker.', 'Do you want a pill? Then you stay awake.'], ['Nee, dank je. Ik werk niet onder invloed.', 'No, thank you. I do not work under the influence.']],
    ),
    // "Je goed voelen op het werk" (the owner's request, 5 November 2026): tired, too much work,
    // bad sleep from shift work, homesickness, and who to talk to. In Gezondheid, after "Fit for
    // work" (l.healthy: slapen, moe, somber), not in "Omgang met collega's": it goes on from sleep
    // and the huisarts, and it is about how you feel, not about a colleague. "slapen", "moe" and
    // "somber" (l.healthy), "te veel" (l.clear), "praten" (l.speakup), "de huisarts" (l.doctor),
    // "de bedrijfsarts" (l.illness) and "de vertrouwenspersoon" (l.respect) are already words of
    // other lessons: here they come in the sentences, the chat and the tip. Drawn: "wakker liggen"
    // (Amina awake in bed, a clock at night) and "de familie" (a family under a heart); the other
    // four are feelings or arrangements without one plain scene (picture: false).
    lesson(
      'feelwell',
      'Feeling good at work',
      [
        ['werkdruk', 'de werkdruk', 'the pressure of work (too much work in too little time)', '😮‍💨', false],
        ['wakkerliggen', 'wakker liggen', 'to lie awake (you cannot sleep)', '🛏️'],
        ['ploegendienst', 'de ploegendienst', 'shift work (early, late and night shifts in turn)', '🔄', false],
        ['heimwee', 'het heimwee', 'homesickness (you miss home)', '🧳', false],
        ['familie', 'de familie', 'the family', '👨‍👩‍👧'],
        ['alleen', 'alleen', 'alone', '🧍', false],
      ],
      [
        ['Ik slaap slecht door de ploegendienst.', 'I sleep badly because of the shift work.'],
        ['Het is te veel. Ik red het niet alleen.', 'It is too much. I cannot manage it alone.'],
        ['Ik heb heimwee. Mijn familie is ver weg.', 'I am homesick. My family is far away.'],
      ],
      [['Gaat het wel met je?', 'Are you doing okay?'], ['Niet zo goed. Ik lig vaak wakker.', 'Not so good. I often lie awake.']],
    ),
  ],
};

// ---- Transport and delivery (the owner's request, 5 November 2026) ----
// A sector unit appended at the very end, so every existing course keeps its order. It is the
// second own unit of the sector Logistiek (src/content/sectors.ts): in the path of a learner who
// chose it, it comes right after "In het magazijn"; for the other sectors it waits with the other
// sectors' units. Already words of other lessons, used here in a sentence, the chat or a tip
// only: "de scanner" (l.things), "het adres" (l.bsn), "de klant" (l.checkout), "de handtekening"
// (l.workorder), "tekenen" (l.contract), "de foto" (l.phone), "kapot" (l.handover), "de buur"
// (l.roundsounds, as "de buren"), "tillen" (l.directions), "de pauze" (l.shift), "glad"
// (l.cleansafe), "rustig" (l.clear), "het weer" (l.smalltalk), "de telefoon" (l.phone) and "de
// zzp’er" and "de werknemer" (l.permit). "het busje" (l.jobends) is the van that brings workers;
// here the delivery van is "de bestelbus".

const deliveryUnit = unit('delivery', 'Transport and delivery', 'Vervoer en bezorging', '🚚', '#9a3412', [
  lesson(
    'parcel',
    'Delivering parcels',
    [
      ['pakket', 'het pakket', 'the parcel', '📦'],
      ['bestelbus', 'de bestelbus', 'the delivery van', '🚚'],
      ['bezorgen', 'bezorgen', 'to deliver (bring to the customer)', '📬'],
      ['inladen', 'inladen', 'to load (put things into the van)', '📥'],
      ['aanbellen', 'aanbellen', 'to ring the doorbell', '🔔'],
      ['bewijs', 'het bewijs', 'the proof (something that shows what happened)', '🧾', false],
    ],
    [
      ['Ik scan elk pakket.', 'I scan every parcel.'],
      ['De klant is niet thuis.', 'The customer is not at home.'],
      ['Wilt u een pakket voor de buren aannemen?', 'Would you take in a parcel for the neighbours?'],
    ],
    [['Is dit pakket voor mij?', 'Is this parcel for me?'], ['Ja. Wilt u hier even tekenen?', 'Yes. Would you sign here, please?']],
  ),
  lesson(
    'road',
    'Safe and fair on the road',
    [
      ['rijden', 'rijden', 'to drive', '🛣️'],
      ['zwaar', 'zwaar', 'heavy', '🏋️'],
      ['steekwagen', 'de steekwagen', 'the hand truck (a trolley for heavy boxes)', '🛒'],
      ['route', 'de route', 'the route (the way you drive)', '🗺️'],
      ['loondienst', 'in loondienst', 'employed (you work for a boss and get a wage)', '🧑‍💼', false],
      ['bepalen', 'bepalen', 'to decide (say how it must be done)', '👉', false],
    ],
    [
      ['Dit pakket is te zwaar. Ik pak de steekwagen.', 'This parcel is too heavy. I am getting the hand truck.'],
      ['Het is glad. Ik rij rustig.', 'It is slippery. I am driving slowly.'],
      ['Wie bepaalt mijn route en mijn tijden?', 'Who decides my route and my times?', ['Wie bepaalt mijn tijden en mijn route?']],
    ],
    [['Kun je vandaag nog een rit doen?', 'Can you do one more run today?'], ['Nee, dan heb ik geen tijd voor mijn pauze.', 'No, then I have no time for my break.']],
  ),
  // "Checking the van" and "Delays on the road" (l.vancheck, l.delay, 14 November 2026, the owner's
  // request: the two units of Logistiek grow to four lessons as well). Already words of other
  // lessons, used here in a sentence or the chat only: "de deur", "kapot" (l.handover), "de
  // bestelbus" and "het pakket" (l.parcel).
  lesson(
    'vancheck',
    'Checking the van',
    [
      ['schade', 'de schade', 'the damage', '💥'],
      ['deuk', 'de deuk', 'the dent', '🚗'],
      ['spiegel', 'de spiegel', 'the mirror', '🪞'],
      ['tanken', 'tanken', 'to fill up (put fuel in the van)', '⛽'],
      ['opladen', 'opladen', 'to charge (an electric van, a phone)', '🔌'],
      ['parkeren', 'parkeren', 'to park', '🅿️'],
    ],
    [
      ['Er zit een deuk in de deur.', 'There is a dent in the door.'],
      ['Deze schade was er al.', 'This damage was already there.'],
      ['Ik moet eerst nog tanken.', 'I still have to fill up first.'],
    ],
    [['Is alles goed met de bestelbus?', 'Is everything fine with the van?'], ['Nee, de spiegel is kapot.', 'No, the mirror is broken.']],
  ),
  lesson(
    'delay',
    'Delays on the road',
    [
      ['file', 'de file', 'the traffic jam', '🚗'],
      ['vertraging', 'de vertraging', 'the delay (you are later than planned)', '⏳'],
      ['omleiding', 'de omleiding', 'the diversion (another road, because the road is closed)', '↪️'],
      ['navigatie', 'de navigatie', 'the navigation (the app that shows the way)', '🧭'],
      ['planner', 'de planner', 'the planner (the person who makes the routes)', '🗓️'],
      ['retour', 'het retour', 'the return (a parcel that goes back)', '↩️'],
    ],
    [
      ['Ik sta in de file.', 'I am in a traffic jam.'],
      ['Ik heb een half uur vertraging.', 'I have a delay of half an hour.'],
      ['Dit pakket gaat retour.', 'This parcel goes back.'],
    ],
    [['Waar ben je nu?', 'Where are you now?'], ['Bij de omleiding. Ik ben tien minuten later.', 'At the diversion. I will be ten minutes later.']],
  ),
]);

// ---- The basis units at four lessons (23 November 2026) ----
// The owner's request ("Ga door met de basisonderwerpen naar 4 lessen"): eleven basis units of this
// file had two lessons; each gets two more, at the end of the unit (before its mixed review, which
// picks the new words by itself). "Tijd en rooster" and "Als het misgaat" are in curriculum.ts.
// Words that are already words of other lessons come in a sentence or the chat only: "de loonstrook"
// is avoided in the lines (a Belgian learner says "de loonbrief"). The tips are in workTips.ts; the
// rights in them have a ⚖️ note there and a section in docs/juridische-check.md. Translations follow
// (src/content/translationPending.ts), and so do the drawings (placeholders in src/pictures/basis).

const basisFour: Record<string, Lesson[]> = {
  // Solliciteren: the vacancy, and after the interview. "de vacature" (l.findwork), "het
  // diploma" (l.diploma) and "de ervaring" (l.cv) come in a sentence or the tip only.
  'u.apply': [
    lesson(
      'vacancy',
      'Reading a vacancy',
      [
        ['advertentie', 'de advertentie', 'the ad (a text that offers a job or a thing)', '📰'],
        ['eis', 'de eis', 'the requirement (what you must have or can do)', '📌', false],
        ['parttime', 'parttime', 'part-time (fewer hours a week)', '🌗', false],
        ['fulltime', 'fulltime', 'full-time (a whole working week)', '🌕', false],
        ['sollicitatiebrief', 'de sollicitatiebrief', 'the application letter', '💌'],
        ['contactpersoon', 'de contactpersoon', 'the contact person (the person you can call or write to)', '📇', false],
      ],
      [
        ['Ik zag uw advertentie op internet.', 'I saw your ad on the internet.'],
        ['Is de baan parttime of fulltime?', 'Is the job part-time or full-time?'],
        ['Wat zijn de eisen?', 'What are the requirements?'],
      ],
      [['Waarom belt u?', 'Why are you calling?'], ['Ik bel over uw vacature. Is die nog open?', 'I am calling about your vacancy. Is it still open?']],
    ),
    lesson(
      'result',
      'After the interview',
      [
        ['aangenomen', 'aangenomen', 'hired (you got the job)', '🥳'],
        ['afwijzing', 'de afwijzing', 'the rejection (you did not get the job)', '🙁', false],
        ['aanbod', 'het aanbod', 'the offer (they offer you the job)', '🤲', false],
        ['proefdag', 'de proefdag', 'the trial day (one day of work, to try)', '🧪'],
        ['nabellen', 'nabellen', 'to call back (to ask how it is going)', '📞'],
        ['teleurgesteld', 'teleurgesteld', 'disappointed', '😞'],
      ],
      [
        ['U bent aangenomen!', 'You are hired!'],
        ['Ik heb een afwijzing gekregen.', 'I got a rejection.'],
        ['Is de proefdag betaald?', 'Is the trial day paid?'],
      ],
      [['Helaas, we kiezen voor iemand anders.', 'Unfortunately, we are choosing someone else.'], ['Jammer. Mag ik vragen waarom?', 'Too bad. May I ask why?']],
    ),
  ],
  // Wonen en papieren: residence papers, and moving house. "verlopen" (l.holiday), "verhuizen"
  // (l.jobends), "het adres" (l.bsn), "doorgeven" (l.privacy) and "het paspoort" (l.warning) come in
  // a sentence or the chat only.
  'u.papers': [
    lesson(
      'residence',
      'Your residence papers',
      [
        ['verblijfsvergunning', 'de verblijfsvergunning', 'the residence permit', '📇'],
        ['pasfoto', 'de pasfoto', 'the passport photo', '🖼️'],
        ['vingerafdruk', 'de vingerafdruk', 'the fingerprint', '👆'],
        ['geldig', 'geldig', 'valid (still good to use)', '✔️', false],
        ['verloopdatum', 'de verloopdatum', 'the expiry date (the last day it is valid)', '📆', false],
        ['volgnummer', 'het volgnummer', 'the queue number (the ticket with your turn)', '🎟️'],
      ],
      [
        ['Mijn verblijfsvergunning is nog een jaar geldig.', 'My residence permit is valid for one more year.'],
        ['Wat is de verloopdatum van je paspoort?', 'What is the expiry date of your passport?'],
        ['Ik heb een afspraak bij de gemeente.', 'I have an appointment at the town hall.'],
      ],
      [['Uw verblijfsvergunning is bijna verlopen.', 'Your residence permit has almost expired.'], ['Dan vraag ik meteen een nieuwe aan.', 'Then I will apply for a new one right away.']],
    ),
    lesson(
      'newhome',
      'Moving house',
      [
        ['brievenbus', 'de brievenbus', 'the letterbox', '📪'],
        ['meterstand', 'de meterstand', 'the meter reading (the numbers on the meter for gas, power or water)', '⏲️'],
        ['naambordje', 'het naambordje', 'the name sign (your name at the door)', '🏷️'],
        ['woning', 'de woning', 'the home (a house or a flat)', '🏠'],
        ['doorsturen', 'doorsturen', 'to forward (send on to a new address)', '➡️', false],
        ['verhuisdag', 'de verhuisdag', 'the moving day', '🛻'],
      ],
      [
        ['Ik verhuis volgende week.', 'I am moving next week.'],
        ['Mijn naam staat niet op de brievenbus.', 'My name is not on the letterbox.'],
        ['Ik geef mijn nieuwe adres door.', 'I am passing on my new address.'],
      ],
      [['Waar woon je nu?', 'Where do you live now?'], ['In een nieuwe woning. Hier is mijn nieuwe adres.', 'In a new home. Here is my new address.']],
    ),
  ],
  // Loon: the parts of the payslip, and late, missing or cash pay. "de loonstrook" (l.payslip),
  // "het loon" (l.payslip), "de schuld" (l.warning) and "de bankrekening" (l.extra) come in a
  // sentence, the chat or the tip only.
  'u.pay': [
    lesson(
      'payparts',
      'What is on your payslip',
      [
        ['pensioen', 'het pensioen', 'the pension (money for when you are old)', '👵'],
        ['periode', 'de periode', 'the period (the weeks or the month of this pay)', '🗓️', false],
        ['bedrag', 'het bedrag', 'the amount (of money)', '🔢', false],
        ['totaal', 'het totaal', 'the total', '🧮', false],
        ['afkorting', 'de afkorting', 'the abbreviation (a short form of a word)', '🔤', false],
        ['personeelsnummer', 'het personeelsnummer', 'the staff number (your number at the company)', '#️⃣', false],
      ],
      [
        ['Wat betekent deze afkorting?', 'What does this abbreviation mean?'],
        ['Dit bedrag gaat naar mijn pensioen.', 'This amount goes to my pension.'],
        ['Over welke periode is dit loon?', 'Which period is this pay for?'],
      ],
      [['Wat is je personeelsnummer?', 'What is your staff number?'], ['Dat staat bovenaan, naast mijn naam.', 'It is at the top, next to my name.']],
    ),
    lesson(
      'latepay',
      'Late, missing or cash pay',
      [
        ['zwartwerken', 'zwart werken', 'to work off the books (no contract, no tax, no rights on paper)', '🕶️', false],
        ['voorschot', 'het voorschot', 'the advance (part of your pay before payday)', '💵'],
        ['nabetaling', 'de nabetaling', 'the back pay (money you get later, to correct your pay)', '🔙', false],
        ['tekort', 'het tekort', 'the shortfall (money that is missing)', '🕳️', false],
        ['betaaldag', 'de betaaldag', 'the payday', '🗓️'],
        ['bankafschrift', 'het bankafschrift', 'the bank statement (a list of the money in and out)', '📄'],
      ],
      [
        ['Mijn loon is te laat.', 'My pay is late.'],
        ['Ik werk niet zwart.', 'I do not work off the books.'],
        ['Kan ik een voorschot krijgen?', 'Can I get an advance?'],
      ],
      [['Je krijgt het tekort volgende maand.', 'You will get the missing money next month.'], ['Kan ik dat op papier krijgen?', 'Can I get that on paper?']],
    ),
  ],
  // Verlof: planning your holiday, and special days off. "de vakantiedagen" and "het verlof"
  // (l.leave) and "het formulier" (l.details) come in a sentence or the chat only.
  'u.leave': [
    lesson(
      'holiday',
      'Planning your holiday',
      [
        ['saldo', 'het saldo', 'the balance (how many days you still have)', '⚖️', false],
        ['goedkeuren', 'goedkeuren', 'to approve (to say yes to it)', '✅', false],
        ['verlopen', 'verlopen', 'to expire (it is no longer valid)', '⌛', false],
        ['zomervakantie', 'de zomervakantie', 'the summer holiday', '☀️'],
        ['drukte', 'de drukte', 'the busy time (a lot of work)', '🐝', false],
        ['aanvraag', 'de aanvraag', 'the request (you ask for something, often on a form)', '🗒️', false],
      ],
      [
        ['Hoeveel vakantiedagen heb ik nog?', 'How many days off do I still have?'],
        ['Mijn verlof is goedgekeurd.', 'My leave is approved.'],
        ['Ik vul het formulier in.', 'I am filling in the form.'],
      ],
      [['In de zomer is het druk. Kun je in mei op vakantie?', 'In summer it is busy. Can you go on holiday in May?'], ['Liever in juli. Dan is mijn familie thuis.', 'I would rather go in July. Then my family is at home.']],
    ),
    lesson(
      'special',
      'Special days off',
      [
        ['bruiloft', 'de bruiloft', 'the wedding', '💒'],
        ['begrafenis', 'de begrafenis', 'the funeral', '🕯️'],
        ['geboorteverlof', 'het geboorteverlof', 'the birth leave (for the partner, when a baby is born)', '👶', false],
        ['bijzonderverlof', 'het bijzonder verlof', 'the special leave (for example for a wedding or a funeral)', '📅', false],
        ['kerstdagen', 'de kerstdagen', 'Christmas (the two Christmas days)', '🎄'],
        ['vrijvragen', 'vrij vragen', 'to ask for a day off', '🙋', false],
      ],
      [
        ['Mijn broer gaat trouwen. Kan ik vrij vragen?', 'My brother is getting married. Can I ask for a day off?'],
        ['Mijn oom is overleden. De begrafenis is vrijdag.', 'My uncle has died. The funeral is on Friday.'],
        ['Moet ik werken met de kerstdagen?', 'Do I have to work at Christmas?'],
      ],
      [['Gefeliciteerd met je baby! Neem je geboorteverlof?', 'Congratulations on your baby! Are you taking birth leave?'], ['Ja, de eerste week ben ik thuis.', 'Yes, the first week I am at home.']],
    ),
  ],
  // Ziekte: unwell at work or on holiday, and hurt by your work. "ziek" and "de dokter" (l.sick),
  // "naar huis" (in the chat), "het rapport" (l.report) and "de foto" (l.phone) come in a sentence,
  // the chat or the tip only.
  'u.sick': [
    lesson(
      'unwell',
      'Feeling unwell',
      [
        ['hoofdpijn', 'de hoofdpijn', 'the headache', '😣'],
        ['griep', 'de griep', 'the flu', '🤧'],
        ['verkouden', 'verkouden', 'having a cold', '😷'],
        ['nietlekker', 'niet lekker', 'not well (you feel a bit sick)', '😕', false],
        ['naarhuis', 'naar huis gaan', 'to go home', '🚶‍♀️'],
        ['uitzieken', 'uitzieken', 'to stay home until you are well', '🛏️', false],
      ],
      [
        ['Ik voel me niet lekker.', 'I do not feel well.'],
        ['Ik heb hoofdpijn en ik ben verkouden.', 'I have a headache and I have a cold.'],
        ['Ik ga naar huis. Ik ben ziek.', 'I am going home. I am sick.'],
      ],
      [['Je ziet bleek. Gaat het?', 'You look pale. Are you okay?'], ['Nee, ik voel me niet lekker. Mag ik naar huis?', 'No, I do not feel well. May I go home?']],
    ),
    lesson(
      'injury',
      'Hurt by your work',
      [
        ['bedrijfsongeval', 'het bedrijfsongeval', 'the accident at work', '🚧'],
        ['verzekering', 'de verzekering', 'the insurance', '☂️', false],
        ['schadevergoeding', 'de schadevergoeding', 'the compensation (money for the damage)', '💷', false],
        ['oorzaak', 'de oorzaak', 'the cause (why it happened)', '❓', false],
        ['letsel', 'het letsel', 'the injury (harm to your body)', '🦴', false],
        ['verklaring', 'de verklaring', 'the statement (what you write or say about what happened)', '🖊️', false],
      ],
      [
        ['Ik heb een bedrijfsongeval gehad.', 'I have had an accident at work.'],
        ['Wat was de oorzaak?', 'What was the cause?'],
        ['Mijn collega heeft het gezien.', 'My colleague saw it.'],
      ],
      [['Wil je hier je verklaring opschrijven?', 'Will you write down your statement here?'], ['Ja. Mag ik een kopie?', 'Yes. May I have a copy?']],
    ),
  ],
  // Uitbuiting herkennen: a debt that keeps you stuck, and the inspection. "de schuld" and "het
  // paspoort" (l.warning) and "betalen" (l.extra) come in a sentence or the chat only.
  'u.exploit': [
    lesson(
      'debt',
      'A debt to the boss or the agency',
      [
        ['lening', 'de lening', 'the loan', '🪙', false],
        ['lenen', 'lenen', 'to borrow, to lend', '🤝', false],
        ['vastzitten', 'vastzitten', 'to be stuck (you cannot leave)', '🪤', false],
        ['tussenpersoon', 'de tussenpersoon', 'the middleman (someone who arranges work for money)', '🕴️'],
        ['rente', 'de rente', 'the interest (extra money you pay on a loan)', '📈', false],
        ['belofte', 'de belofte', 'the promise', '🤞', false],
      ],
      [
        ['Ik moest betalen voor deze baan.', 'I had to pay for this job.'],
        ['Mijn schuld wordt elke maand hoger.', 'My debt gets higher every month.'],
        ['De tussenpersoon heeft mijn paspoort.', 'The middleman has my passport.'],
      ],
      [['Je mag pas weg als je schuld betaald is.', 'You may only leave when your debt is paid.'], ['Dat mag niet. Ik vraag hulp.', 'That is not allowed. I am asking for help.']],
    ),
    lesson(
      'inspection',
      'The inspection and other help',
      [
        ['inspectie', 'de inspectie', 'the inspection (people who check if work is fair and safe)', '🕵️'],
        ['controle', 'de controle', 'the check', '☑️', false],
        ['slachtoffer', 'het slachtoffer', 'the victim', '🧎', false],
        ['mensenhandel', 'de mensenhandel', 'human trafficking (people are used and sold for work or sex)', '⛓️', false],
        ['vertrouwen', 'vertrouwen', 'to trust', '🫱', false],
        ['tolk', 'de tolk', 'the interpreter', '🗣️'],
      ],
      [
        ['Morgen komt de inspectie.', 'Tomorrow the inspection is coming.'],
        ['Mag ik een tolk?', 'May I have an interpreter?'],
        ['Ik vertrouw deze man niet.', 'I do not trust this man.'],
      ],
      [['Wil je met de inspectie praten?', 'Do you want to talk to the inspection?'], ['Ja, maar mijn baas mag het niet horen.', 'Yes, but my boss may not hear it.']],
    ),
  ],
  // Naar je werk: carpool and the work van, and the train. "het rijbewijs" (l.carjob), "de
  // vertraging" (l.delay), "het bericht" (l.texting) and "ophalen" (l.kids) come in a sentence,
  // the chat or the tip only.
  'u.travel': [
    lesson(
      'carpool',
      'Carpool and the work van',
      [
        ['carpoolen', 'carpoolen', 'to carpool (drive to work together in one car)', '🚙'],
        ['meerijden', 'meerijden', 'to ride along (in someone else’s car)', '🚘'],
        ['gordel', 'de gordel', 'the seat belt', '🪢'],
        ['instappen', 'instappen', 'to get in (a car, a bus or a train)', '⤴️'],
        ['uitstappen', 'uitstappen', 'to get out (of a car, a bus or a train)', '⤵️'],
        ['bijrijder', 'de bijrijder', 'the passenger (next to the driver)', '🧑‍✈️', false],
      ],
      [
        ['Mag ik met jou meerijden?', 'May I ride along with you?'],
        ['Doe je gordel om.', 'Put on your seat belt.'],
        ['Ik stap uit bij het station.', 'I get out at the station.'],
      ],
      [['Wie rijdt er morgen?', 'Who is driving tomorrow?'], ['Ik rij. Om zes uur haal ik je op.', 'I am driving. At six I will pick you up.']],
    ),
    lesson(
      'train',
      'Train, delays and being late',
      [
        ['station', 'het station', 'the station', '🚉'],
        ['perron', 'het perron', 'the platform (where you get on the train)', '🛤️'],
        ['overstappen', 'overstappen', 'to change (to another train or bus)', '🔁'],
        ['uitvallen', 'uitvallen', 'to be cancelled (the train does not go)', '🚫', false],
        ['kaartje', 'het kaartje', 'the ticket', '🎫'],
        ['reisplanner', 'de reisplanner', 'the journey planner (an app that shows trains and buses)', '🗺️', false],
      ],
      [
        ['Mijn trein valt uit.', 'My train is cancelled.'],
        ['Ik moet één keer overstappen.', 'I have to change once.'],
        ['Van welk perron gaat de trein?', 'From which platform does the train leave?'],
      ],
      [['Waarom ben je zo laat?', 'Why are you so late?'], ['Mijn trein viel uit. Ik heb je een bericht gestuurd.', 'My train was cancelled. I sent you a message.']],
    ),
  ],
  // Je werk afronden: your own check, and leaving your workplace. "nakijken" and "op slot"
  // (l.handover), "netjes" (l.givefeedback), "het licht" (l.bike) and "dichtdoen" (l.onoff) come in a
  // sentence or the chat only.
  'u.finish': [
    lesson(
      'checklist',
      'Check before you finish',
      [
        ['checklist', 'de checklist', 'the checklist (a list of things to check)', '📋'],
        ['afvinken', 'afvinken', 'to tick off (put a tick behind a task)', '✔️'],
        ['overdoen', 'overdoen', 'to do again', '🔂', false],
        ['compleet', 'compleet', 'complete (nothing is missing)', '🧩', false],
        ['vergeten', 'vergeten', 'to forget', '🤦', false],
        ['resultaat', 'het resultaat', 'the result', '🏆', false],
      ],
      [
        ['Ik vink alles af op de checklist.', 'I tick off everything on the checklist.'],
        ['Is de bestelling compleet?', 'Is the order complete?'],
        ['Dit moet ik overdoen.', 'I have to do this again.'],
      ],
      [['Ben je niets vergeten?', 'Have you not forgotten anything?'], ['Ik kijk nog één keer op de checklist.', 'I will look at the checklist one more time.']],
    ),
    lesson(
      'leavesite',
      'Leaving your workplace',
      [
        ['terugzetten', 'terugzetten', 'to put back (in its place)', '🔙'],
        ['vegen', 'vegen', 'to sweep', '🧹'],
        ['vloer', 'de vloer', 'the floor', '🟫'],
        ['uitdoen', 'uitdoen', 'to switch off (the light, a machine)', '💡'],
        ['alslaatste', 'als laatste', 'as the last one', '🔚', false],
        ['achterlaten', 'achterlaten', 'to leave behind (how you leave your place)', '🧳', false],
      ],
      [
        ['Ik laat mijn plek netjes achter.', 'I leave my place tidy.'],
        ['Wie gaat er als laatste weg?', 'Who leaves last?'],
        ['Doe het licht uit en de deur dicht.', 'Switch off the light and close the door.'],
      ],
      [['Ga jij als laatste weg vandaag?', 'Are you the last one to leave today?'], ['Ja. Ik doe alles uit en de deur op slot.', 'Yes. I switch everything off and lock the door.']],
    ),
  ],
  // Stage lopen: every day at your placement, and its end. "de stage" and "de school"
  // (l.placement), "ziek" (l.sick), "halen" (l.certs) and "het diploma" (l.diploma) come in a
  // sentence, the chat or the tip only.
  'u.stage': [
    lesson(
      'stagedays',
      'Every day at your placement',
      [
        ['stageplek', 'de stageplek', 'the placement (the company where you do your placement)', '🏢'],
        ['afwezig', 'afwezig', 'absent (not there)', '🚷', false],
        ['aanwezig', 'aanwezig', 'present (there)', '🙌', false],
        ['stagevergoeding', 'de stagevergoeding', 'the placement allowance (money you may get at your placement)', '💴', false],
        ['begeleiding', 'de begeleiding', 'the guidance (help from your guide)', '🧑‍🏫', false],
        ['leerling', 'de leerling', 'the student (at school)', '✏️'],
      ],
      [
        ['Ik ben morgen afwezig. Ik ben ziek.', 'I am absent tomorrow. I am sick.'],
        ['Krijg ik een stagevergoeding?', 'Do I get a placement allowance?'],
        ['Op mijn stageplek werk ik vier dagen.', 'At my placement I work four days.'],
      ],
      [['Waarom was je gisteren afwezig?', 'Why were you absent yesterday?'], ['Ik was ziek. Ik heb de school en het bedrijf gebeld.', 'I was sick. I called the school and the company.']],
    ),
    lesson(
      'stageend',
      'The end of your placement',
      [
        ['eindgesprek', 'het eindgesprek', 'the final talk (at the end of your placement)', '🗨️'],
        ['geslaagd', 'geslaagd', 'passed (you did it well enough)', '🏅'],
        ['gezakt', 'gezakt', 'failed (not good enough this time)', '📉', false],
        ['herkansing', 'de herkansing', 'the resit (a new chance)', '🎲', false],
        ['bedanken', 'bedanken', 'to thank', '💐'],
        ['trakteren', 'trakteren', 'to treat (bring something nice to eat for everyone)', '🍰'],
      ],
      [
        ['Morgen heb ik mijn eindgesprek.', 'Tomorrow I have my final talk.'],
        ['Ik ben geslaagd voor mijn stage.', 'I passed my placement.'],
        ['Ik wil iedereen bedanken.', 'I want to thank everyone.'],
      ],
      [['Je laatste dag! Wat ga je nu doen?', 'Your last day! What are you going to do now?'], ['Eerst mijn diploma halen. Dan zoek ik werk.', 'First get my diploma. Then I will look for work.']],
    ),
  ],
  // Meedoen in Nederland: your neighbourhood, and school, sports and volunteering. "praten"
  // (l.speakup), "de bibliotheek" (l.keeplearning) and "de school" (l.placement) come in a sentence,
  // the chat or the tip only.
  'u.society': [
    lesson(
      'neighbours',
      'Your neighbourhood',
      [
        ['buurt', 'de buurt', 'the neighbourhood', '🏙️'],
        ['buurthuis', 'het buurthuis', 'the community centre (a house for activities in your neighbourhood)', '🏬'],
        ['straat', 'de straat', 'the street', '🏘️'],
        ['kennismaken', 'kennismaken', 'to get to know (meet someone for the first time)', '🤗', false],
        ['overlast', 'de overlast', 'the nuisance (noise or trouble for others)', '🔊', false],
        ['buurvrouw', 'de buurvrouw', 'the neighbour (a woman)', '👩'],
      ],
      [
        ['Ik woon sinds kort in deze straat.', 'I have lived in this street for a short time.'],
        ['In de bibliotheek oefen ik Nederlands.', 'In the library I practise Dutch.'],
        ['Sorry voor de overlast.', 'Sorry for the nuisance.'],
      ],
      [['Hallo, ik ben je nieuwe buurvrouw.', 'Hello, I am your new neighbour.'], ['Leuk om kennis te maken! Ik ben Ali.', 'Nice to meet you! I am Ali.']],
    ),
    lesson(
      'join',
      'School, sports and volunteering',
      [
        ['vrijwilliger', 'de vrijwilliger', 'the volunteer (someone who helps without pay)', '🙋‍♂️'],
        ['vrijwilligerswerk', 'het vrijwilligerswerk', 'the volunteer work', '🫶', false],
        ['sportclub', 'de sportclub', 'the sports club', '⚽'],
        ['ouderavond', 'de ouderavond', 'the parents’ evening (at school)', '👪'],
        ['leraar', 'de leraar', 'the teacher', '👨‍🏫'],
        ['basisschool', 'de basisschool', 'the primary school', '🖍️'],
      ],
      [
        ['Mijn zoon gaat naar de basisschool.', 'My son goes to primary school.'],
        ['Ik speel voetbal bij een sportclub.', 'I play football at a sports club.'],
        ['Op zaterdag doe ik vrijwilligerswerk.', 'On Saturday I do volunteer work.'],
      ],
      [['Kom je naar de ouderavond?', 'Are you coming to the parents’ evening?'], ['Ja. Ik wil graag met de leraar praten.', 'Yes. I would like to talk to the teacher.']],
    ),
  ],
  // Online op je werk: photos and data, and a safe phone and computer. "de foto" (l.phone), "de
  // privacy" and "de toestemming" (l.privacy), "de camera" (l.translate), "de app" (l.texting) and "de
  // ICT-afdeling" (l.phish) come in a sentence, the chat or the tip only.
  'u.online': [
    lesson(
      'workphotos',
      'Photos and data',
      [
        ['gezicht', 'het gezicht', 'the face', '🧑'],
        ['klantgegevens', 'de klantgegevens', 'the customer details (name, address, phone of a customer)', '🗃️', false],
        ['onlinezetten', 'online zetten', 'to post online', '🌐', false],
        ['wissen', 'wissen', 'to delete', '❎', false],
        ['werktelefoon', 'de werktelefoon', 'the work phone', '📟'],
        ['bestand', 'het bestand', 'the file (on a computer)', '🗄️', false],
      ],
      [
        ['Ik zet geen foto’s van het werk online.', 'I do not post photos of work online.'],
        ['Ik wis de foto meteen.', 'I delete the photo right away.'],
        ['Zijn gezicht staat op de foto.', 'His face is in the photo.'],
      ],
      [['Mag ik een foto van je maken? Voor internet.', 'May I take a photo of you? For the internet.'], ['Nee, liever niet. Ik wil niet online.', 'No, I would rather not. I do not want to be online.']],
    ),
    lesson(
      'device',
      'A safe phone and computer',
      [
        ['update', 'de update', 'the update (a new version of an app or a program)', '⬆️', false],
        ['virus', 'het virus', 'the virus (a program that harms your computer)', '👾'],
        ['wifi', 'de wifi', 'the wifi', '📶'],
        ['usbstick', 'de usb-stick', 'the USB stick', '💾'],
        ['installeren', 'installeren', 'to install', '⬇️', false],
        ['openbaar', 'openbaar', 'public (for everyone)', '🌍', false],
      ],
      [
        ['Ik installeer de update vanavond.', 'I am installing the update tonight.'],
        ['Deze usb-stick lag op de grond.', 'This USB stick was lying on the floor.'],
        ['Is deze wifi veilig?', 'Is this wifi safe?'],
      ],
      [['Mag ik deze app op de werktelefoon zetten?', 'May I put this app on the work phone?'], ['Vraag het eerst aan de ICT-afdeling.', 'Ask the IT department first.']],
    ),
  ],
};

/** A unit with its two lessons of 23 November 2026 at the end (basisFour above), or the unit itself. */
const withFour = (u: Unit): Unit => (basisFour[u.id] ? { ...u, lessons: [...u.lessons, ...basisFour[u.id]] } : u);

// ---- Course order of everything in this file ----

const byId = (id: string) => coreUnits.find((u) => u.id === id)!;

export const workUnits: Unit[] = [
  applyUnit,
  { ...byId('u.contract'), lessons: [...byId('u.contract').lessons, ...contractMore] },
  // "Werken via een uitzendbureau" (23 November 2026, the owner's request): a basis unit right after
  // "Werk en contract", because most learners work through an agency (see "Temp agency work" above).
  uitzendUnit,
  byId('u.papers'),
  byId('u.pay'),
  { ...byId('u.house'), lessons: [...byId('u.house').lessons, ...houseMore] },
  socialUnit,
  // Sayings right after "Omgang met collega's": the later lessons each show one saying after it
  // (src/content/sayings.ts lessonSayings), so it comes before them.
  sayingsUnit,
  byId('u.rights'),
  { ...byId('u.leave'), lessons: [...byId('u.leave').lessons, ...leaveMore] },
  // "Ziekte" right after "Verlof": they were one unit until 5 November 2026 (see u.leave above).
  { ...byId('u.sick'), lessons: [...byId('u.sick').lessons, ...sickMore] },
  // The Entree lessons in existing units (l.mychoice, l.nextstep, l.email, l.budget, l.healthy)
  // come at the end of their unit.
  ...laterUnits.map((u) => (entreeMore[u.id] ? { ...u, lessons: [...u.lessons, ...entreeMore[u.id]] } : u)),
  ...sectorUnits,
  // After the sector units, so no existing course changes (see "In the shop" above).
  shopUnit,
  numbersUnit,
  // After "Rekenen", appended the same way (see "AI and smart apps" above).
  aiUnit,
  // The newest sector unit, at the very end (see "In the greenhouse" above).
  kasUnit,
  // Entree in the Taal track (30 October 2026): basis units appended after everything else, so
  // every existing course keeps its order (see "Entree in the Taal track" above).
  finishUnit,
  techUnit,
  garageUnit,
  stageUnit,
  societyUnit,
  onlineUnit,
  // The newest sector unit (5 November 2026), at the very end (see "Transport and delivery" above).
  deliveryUnit,
  // Bouw's second own unit (20 November 2026), at the very end (see "Tiles, plaster and paint" above).
  afbouwUnit,
  // Bouw's third own unit (20 November 2026), at the very end (see "Bricks, wood and fixing" above).
  ruwbouwUnit,
  // Productie's second own unit (21 November 2026), at the very end (see "Machines and tools" above).
  machinesUnit,
  // Techniek's second own unit (21 November 2026), at the very end (see "Electrics, pipes and metal" above).
  installUnit,
  // Productie's third own unit (21 November 2026), at the very end (see "Assembly" above).
  montageUnit,
  // Tuinbouw's and Garage's second own units (22 November 2026), at the very end (see "Growing,
  // sorting and the greenhouse" and "Tyres, oil and brakes" above).
  kweekUnit,
  carserviceUnit,
  // The own units of the new sectors Groen and Facilitair (23 November 2026), at the very end (see
  // "Mowing and pruning" and "Reception, post and meetings" above).
  mowingUnit,
  plantingUnit,
  frontdeskUnit,
  maintenanceUnit,
  // The own units of the new sectors Beveiliging, Voedingsindustrie, Afval en recycling and
  // Kinderopvang (23 November 2026), at the very end (see "Patrols and access" and the units after it above).
  guardingUnit,
  incidentsUnit,
  foodhygieneUnit,
  foodlineUnit,
  collectionUnit,
  recyclingUnit,
  toddlersUnit,
  daycareUnit,
  // The second own units of Schoonmaak, Horeca, Zorg and Winkel (23 November 2026), at the very end
  // (see "Toilets, hotel rooms and machines" and the units after it above).
  housekeepingUnit,
  cookingUnit,
  careworkUnit,
  shopfloorUnit,
  // "Veiligheid op het werk" (23 November 2026), a basis unit at the very end (see "Safety at work" above).
  safeworkUnit,
  // The basis units at four lessons (23 November 2026): their two new lessons at the end (basisFour above).
].map(withFour);


/** This file's address (saved with the app for offline use, src/content/lessonTexts.ts). */
export const url: string = import.meta.url;
