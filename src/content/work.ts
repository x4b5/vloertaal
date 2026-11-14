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

// ---- Course order of everything in this file ----

const byId = (id: string) => coreUnits.find((u) => u.id === id)!;

export const workUnits: Unit[] = [
  applyUnit,
  { ...byId('u.contract'), lessons: [...byId('u.contract').lessons, ...contractMore] },
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
];

