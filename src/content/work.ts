import type { CultureTip } from './culture';
import type { ChatLine, Dialogue, Lesson, Unit } from './types';

/**
 * Work and rights in the Netherlands: contracts, papers and housing, pay, house rules, rights,
 * leave and sickness.
 * Still language units first (Dutch words and sentences learners will hear and see); the
 * "Zo werkt het hier" tip of each lesson carries the practical information.
 *
 * Only stable, general facts. No amounts that change every year (like the minimum wage in
 * euros): we say where to check instead. Every tip ends with the same "ask for advice" line
 * (house rules: "ask your supervisor").
 * Every id is also a translation key in src/i18n/work/<lang>.ts.
 */

const line = (id: string, nl: string, en: string): ChatLine => ({ id, nl, en });
const chat = (prompt: ChatLine, reply: ChatLine): Dialogue => ({ prompt, reply });

/** Closing line of every tip: this is general information, not advice for one person. */
export const ADVICE_LINE = 'General information. For your situation: ask your employer, the union or the Juridisch Loket.';
/** Closing line of the house-rules tips: these rules are set per company. */
export const HOUSE_LINE = 'Rules differ per company: ask your supervisor what the rules are where you work.';
const tip = (t: CultureTip, end = ADVICE_LINE): CultureTip => ({ ...t, body: end ? `${t.body} ${end}` : t.body });

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
          { id: 'w.tijdelijk', nl: 'tijdelijk', en: 'temporary', emoji: '⏳' },
        ],
        sentences: [
          { id: 's.findwork.1', nl: 'Ik wil solliciteren.', en: 'I want to apply for the job.' },
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
          { id: 'w.proeftijd', nl: 'de proeftijd', en: 'the trial period', emoji: '🧪' },
          { id: 'w.opzegtermijn', nl: 'de opzegtermijn', en: 'the notice period', emoji: '📆' },
          { id: 'w.cao', nl: 'de cao', en: 'the collective agreement', emoji: '📘' },
        ],
        sentences: [
          { id: 's.contract.1', nl: 'Hoeveel uren werk ik per week?', en: 'How many hours do I work per week?' },
          { id: 's.contract.2', nl: 'Hoe lang is de proeftijd?', en: 'How long is the trial period?' },
          { id: 's.contract.3', nl: 'Welke cao geldt voor mij?', en: 'Which collective agreement is for me?' },
        ],
        dialogues: [
          chat(
            line('c.contract.q', 'Kun je morgen komen werken?', 'Can you come to work tomorrow?'),
            line('c.contract.a', 'Ja, hoe laat moet ik er zijn?', 'Yes, what time must I be there?'),
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
          { id: 'w.bsn', nl: 'het BSN', en: 'the citizen service number', emoji: '🔢' },
          { id: 'w.identiteitsbewijs', nl: 'het identiteitsbewijs', en: 'the ID document', emoji: '🛂' },
          { id: 'w.gemeente', nl: 'de gemeente', en: 'the town hall, the municipality', emoji: '🏘️' },
          { id: 'w.inschrijven', nl: 'inschrijven', en: 'to register', emoji: '🖊️' },
          { id: 'w.adres', nl: 'het adres', en: 'the address', emoji: '📮' },
          { id: 'w.zorgverzekering', nl: 'de zorgverzekering', en: 'the health insurance', emoji: '🏥' },
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
          { id: 'w.huur', nl: 'de huur', en: 'the rent', emoji: '🔑' },
          { id: 'w.huurcontract', nl: 'het huurcontract', en: 'the rental contract', emoji: '📑' },
          { id: 'w.borg', nl: 'de borg', en: 'the deposit', emoji: '💰' },
          { id: 'w.huisbaas', nl: 'de huisbaas', en: 'the landlord', emoji: '🧑‍💼' },
          { id: 'w.inhouden', nl: 'inhouden', en: 'to take off (from your pay)', emoji: '✂️' },
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
          { id: 'w.bruto', nl: 'bruto', en: 'gross (before tax)', emoji: '🧾' },
          { id: 'w.netto', nl: 'netto', en: 'net (what you get)', emoji: '👛' },
          { id: 'w.loonstrook', nl: 'de loonstrook', en: 'the payslip', emoji: '📃' },
          { id: 'w.belasting', nl: 'de belasting', en: 'the tax', emoji: '🏛️' },
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
          { id: 'w.toeslag', nl: 'de toeslag', en: 'the extra pay', emoji: '➕' },
          { id: 'w.minimumloon', nl: 'het minimumloon', en: 'the minimum wage', emoji: '📏' },
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
          { id: 'w.prive', nl: 'privé', en: 'private, personal', emoji: '🏠' },
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
          { id: 'w.verboden', nl: 'verboden', en: 'not allowed, forbidden', emoji: '🚭' },
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
          { id: 'w.arbowet', nl: 'de Arbowet', en: 'the health and safety law', emoji: '📜' },
          { id: 'w.veilig', nl: 'veilig', en: 'safe', emoji: '🛡️' },
          { id: 'w.werktijden', nl: 'de werktijden', en: 'the working hours', emoji: '🕗' },
          { id: 'w.rust', nl: 'de rust', en: 'the rest', emoji: '😌' },
          { id: 'w.beschermingsmiddelen', nl: 'de beschermingsmiddelen', en: 'the protective equipment', emoji: '🦺' },
          { id: 'w.arbeidsinspectie', nl: 'de Arbeidsinspectie', en: 'the Labour Inspectorate', emoji: '🔍' },
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
          { id: 'w.recht', nl: 'het recht', en: 'the right', emoji: '✅' },
          { id: 'w.discriminatie', nl: 'de discriminatie', en: 'the discrimination', emoji: '🚫' },
          { id: 'w.vakbond', nl: 'de vakbond', en: 'the union', emoji: '✊' },
          { id: 'w.juridischloket', nl: 'het Juridisch Loket', en: 'the free legal help desk', emoji: '⚖️' },
          { id: 'w.klacht', nl: 'de klacht', en: 'the complaint', emoji: '📣' },
          { id: 'w.ontslag', nl: 'het ontslag', en: 'the dismissal', emoji: '🚪' },
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
    ],
  },
  {
    id: 'u.leave',
    title: 'Leave and sickness',
    titleNl: 'Verlof en ziekte',
    emoji: '🌴',
    color: '#b5487a',
    lessons: [
      {
        id: 'l.leave',
        title: 'Days off',
        words: [
          { id: 'w.vakantiedagen', nl: 'de vakantiedagen', en: 'the days off (holiday)', emoji: '🏝️' },
          { id: 'w.verlof', nl: 'het verlof', en: 'the leave', emoji: '🌴' },
          { id: 'w.aanvragen', nl: 'aanvragen', en: 'to ask for, to apply for', emoji: '📝' },
          { id: 'w.feestdag', nl: 'de feestdag', en: 'the public holiday', emoji: '🎉' },
          { id: 'w.vrij', nl: 'vrij', en: 'free, not working', emoji: '🆓' },
          { id: 'w.calamiteitenverlof', nl: 'het calamiteitenverlof', en: 'the emergency leave', emoji: '🚨' },
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
      {
        id: 'l.illness',
        title: 'Sick at home',
        words: [
          { id: 'w.ziekmelden', nl: 'ziek melden', en: 'to call in sick', emoji: '🤒' },
          { id: 'w.betermelden', nl: 'beter melden', en: 'to say you are better', emoji: '🙂' },
          { id: 'w.bedrijfsarts', nl: 'de bedrijfsarts', en: 'the company doctor', emoji: '👩‍⚕️' },
          { id: 'w.ziekte', nl: 'de ziekte', en: 'the illness', emoji: '🦠' },
          { id: 'w.doorbetalen', nl: 'doorbetalen', en: 'to keep paying', emoji: '💶' },
          { id: 'w.wachtdag', nl: 'de wachtdag', en: 'the waiting day (no pay)', emoji: '⏸️' },
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

/** One "Zo werkt het hier" tip per lesson above. */
const coreTips: CultureTip[] = [
  tip({
    id: 'c.findwork',
    lessonId: 'l.findwork',
    emoji: '📄',
    title: 'Get your contract on paper',
    body: 'Always ask for a written contract and a copy for yourself. Read it before you sign, or ask someone you trust to help you. A temp agency (uitzendbureau) may not ask you for money to find you a job.',
    phrase: { id: 'c.findwork.p', nl: 'Mag ik het contract eerst lezen?', en: 'May I read the contract first?' },
    situation: { id: 'c.findwork.s', en: 'A new employer says: "Sign here now. You can read it later." What do you do?' },
    options: [
      { id: 'c.findwork.o1', en: 'Ask for time to read it, or for a copy to read at home.', best: true },
      { id: 'c.findwork.o2', en: 'Sign quickly, so you do not lose the job.', best: false },
      { id: 'c.findwork.o3', en: 'Walk away without asking anything.', best: false },
    ],
    why: { id: 'c.findwork.w', en: 'Your contract says what you earn and what your rights are. A good employer gives you time to read it. You may ask about everything you do not understand.' },
  }),
  tip({
    id: 'c.contract',
    lessonId: 'l.contract',
    emoji: '🧪',
    title: 'Trial period and on-call work',
    body: 'A trial period (proeftijd) must be in writing. It is not allowed in a contract of 6 months or shorter. In a contract shorter than 2 years it is at most 1 month. In a contract of 2 years or longer, or a permanent one, it is at most 2 months. On-call worker (oproepkracht)? Your employer must call you at least 4 days before. If it is later, you do not have to come. If they call you for less than 3 hours of work, you get paid for 3 hours.',
    phrase: { id: 'c.contract.p', nl: 'Staat de proeftijd in mijn contract?', en: 'Is the trial period in my contract?' },
    situation: { id: 'c.contract.s', en: 'Your contract is for 3 months. It says: "Proeftijd: 1 maand". What do you do?' },
    options: [
      { id: 'c.contract.o1', en: 'Ask about it calmly: a trial period is not allowed in a contract this short.', best: true },
      { id: 'c.contract.o2', en: 'Nothing. Every contract has a trial period.', best: false },
      { id: 'c.contract.o3', en: 'Sign and never ask, because the boss knows best.', best: false },
    ],
    why: { id: 'c.contract.w', en: 'A trial period in a contract of 6 months or shorter does not count. Asking calmly is normal. If the answer is not clear, get advice from the union or the Juridisch Loket.' },
  }),
  tip({
    id: 'c.bsn',
    lessonId: 'l.bsn',
    emoji: '🔢',
    title: 'Your BSN: keep it safe',
    body: 'You get a BSN (burgerservicenummer) when you register at the municipality (gemeente). Here only for a short time? Then you register at an RNI desk. You need your BSN to work, for tax, for health insurance and for a bank account. Your employer needs your ID and your BSN. Do not give your BSN or a copy of your ID to people who do not need it: ask why they need it. Moving? Register your new address at the gemeente within 5 days. DigiD is your login for government websites: never give it to someone else. Do you live or work here? Then you usually must have Dutch health insurance (zorgverzekering). Arrange it quickly.',
    phrase: { id: 'c.bsn.p', nl: 'Waarom heeft u mijn BSN nodig?', en: 'Why do you need my BSN?' },
    situation: { id: 'c.bsn.s', en: 'Someone you do not know offers you a job on WhatsApp. He asks for a photo of your passport and your DigiD login. What do you do?' },
    options: [
      { id: 'c.bsn.o1', en: 'Never give your DigiD login. Ask who he is and why he needs your ID, and check the company first.', best: true },
      { id: 'c.bsn.o2', en: 'Send everything quickly, so you get the job.', best: false },
      { id: 'c.bsn.o3', en: 'Send only your DigiD login, because that is not a document.', best: false },
    ],
    why: { id: 'c.bsn.w', en: 'With your DigiD or a copy of your ID, other people can use your name, for example for loans or benefits. A real employer needs your ID and BSN, but never your DigiD login.' },
  }),
  tip({
    id: 'c.housing',
    lessonId: 'l.housing',
    emoji: '🔑',
    title: 'Housing from your employer',
    body: 'Does your employer or agency arrange your housing? Then the rental contract must be separate from your work contract. Ask for a written rental contract and proof of what you pay. Rent may only be taken off your wage if you agreed in writing, and within legal limits: check it on your payslip. A deposit (borg) is at most 2 months of basic rent. You get it back when you leave, minus real damage. Register at your address with the gemeente. Unsafe housing, threats or unfair costs? Report it to the gemeente (meldpunt), and get free advice from the Juridisch Loket or a housing advice service. For a fight about the rent, there is the Huurcommissie. Your job ends? Ask for advice before you leave your home.',
    phrase: { id: 'c.housing.p', nl: 'Mag ik een bewijs dat ik betaald heb?', en: 'May I have proof that I paid?' },
    situation: { id: 'c.housing.s', en: 'Your job ends. The agency says: "You must leave the house tomorrow." What do you do?' },
    options: [
      { id: 'c.housing.o1', en: 'Ask for advice quickly, for example at the Juridisch Loket, before you leave.', best: true },
      { id: 'c.housing.o2', en: 'Leave right away and forget about your deposit.', best: false },
      { id: 'c.housing.o3', en: 'Stay, and stop answering the agency.', best: false },
    ],
    why: { id: 'c.housing.w', en: 'Your rental contract has its own rules, separate from your job. Free advice helps you know your rights, for example about when you must leave and about your deposit.' },
  }),
  tip({
    id: 'c.payslip',
    lessonId: 'l.payslip',
    emoji: '🧾',
    title: 'Check your payslip',
    body: 'Bruto is your pay before tax. Netto is what you get in your bank account: bruto minus tax and premiums (loonheffing). Check the hours and the pay on every payslip (loonstrook), and write down the hours you work. Do you have two jobs? Ask for the tax credit (loonheffingskorting) at only one employer.',
    phrase: { id: 'c.payslip.p', nl: 'Ik heb meer uren gewerkt. Kun je het controleren?', en: 'I worked more hours. Can you check it?' },
    situation: { id: 'c.payslip.s', en: 'Your payslip shows fewer hours than you worked. What do you do?' },
    options: [
      { id: 'c.payslip.o1', en: 'Ask your supervisor calmly to check it and show your own notes.', best: true },
      { id: 'c.payslip.o2', en: 'Say nothing, because you do not want problems.', best: false },
      { id: 'c.payslip.o3', en: 'Stay home the next day without telling anyone.', best: false },
    ],
    why: { id: 'c.payslip.w', en: 'Mistakes on a payslip happen. Asking about it is normal and it is your right. Your own notes of dates and hours help a lot.' },
  }),
  tip({
    id: 'c.extra',
    lessonId: 'l.extra',
    emoji: '🏖️',
    title: 'Holiday pay and minimum wage',
    body: 'You get holiday pay (vakantiegeld): at least 8% of your gross wage. Most employers pay it once a year, in May or June. Your pay may never be lower than the legal minimum wage (minimumloon); for workers under 21 it is lower. The amount changes every year: check it on rijksoverheid.nl. A cao often gives extra pay for overtime or night work.',
    phrase: { id: 'c.extra.p', nl: 'Wanneer krijg ik mijn vakantiegeld?', en: 'When do I get my holiday pay?' },
    situation: { id: 'c.extra.s', en: 'A colleague says: "In May you get extra money from the boss." What is it?' },
    options: [
      { id: 'c.extra.o1', en: 'Holiday pay: at least 8% of your gross wage.', best: true },
      { id: 'c.extra.o2', en: 'A present, only for the best workers.', best: false },
      { id: 'c.extra.o3', en: 'A loan that you must pay back later.', best: false },
    ],
    why: { id: 'c.extra.w', en: 'Holiday pay is your right, not a gift. You build it up with every hour you work. If you leave your job earlier, you get it with your last pay.' },
  }),
  tip({
    id: 'c.phone',
    lessonId: 'l.phone',
    emoji: '📵',
    title: 'Your phone at work',
    body: 'Many workplaces do not allow phones during work, especially near machines and forklifts, or in food production. It can be unsafe or not hygienic. Use your phone in your break. Waiting for an urgent call from your family? Tell your supervisor first. Do not take photos or videos at work without permission: think of the privacy of colleagues and company secrets.',
    phrase: { id: 'c.phone.p', nl: 'Mijn kind is ziek. Mag mijn telefoon aanblijven?', en: 'My child is sick. May my phone stay on?' },
    situation: { id: 'c.phone.s', en: 'Your mother is in hospital and may call today. Phones are not allowed on the work floor. What do you do?' },
    options: [
      { id: 'c.phone.o1', en: 'Tell your supervisor and ask how you can be reached.', best: true },
      { id: 'c.phone.o2', en: 'Keep your phone in your pocket and answer quietly at the machine.', best: false },
      { id: 'c.phone.o3', en: 'Stay home without telling anyone why.', best: false },
    ],
    why: { id: 'c.phone.w', en: 'Supervisors usually understand a family emergency. When they know, they can find a safe solution, for example a set time to check your phone.' },
  }, HOUSE_LINE),
  tip({
    id: 'c.smoking',
    lessonId: 'l.smoking',
    emoji: '🚭',
    title: 'Smoking only outside',
    body: 'In the Netherlands, smoking inside a workplace is forbidden by law. This is also true for e-cigarettes (vapes). Since 2022, smoking rooms inside companies are not allowed anymore. Smoke only outside, at the place your employer allows, and usually only in your break. Extra smoke breaks are not a right: agree on them with your supervisor. Never smoke near things that burn easily, like fuel or boxes in a warehouse.',
    phrase: { id: 'c.smoking.p', nl: 'Mag ik in mijn pauze buiten roken?', en: 'May I smoke outside in my break?' },
    situation: { id: 'c.smoking.s', en: 'It is cold and raining. A colleague says: "Just smoke in the storage room, nobody sees it." What do you do?' },
    options: [
      { id: 'c.smoking.o1', en: 'Say no, and smoke outside at the smoking area in your break.', best: true },
      { id: 'c.smoking.o2', en: 'Smoke quickly in the storage room, just this once.', best: false },
      { id: 'c.smoking.o3', en: 'Use your vape inside instead, because that is allowed.', best: false },
    ],
    why: { id: 'c.smoking.w', en: 'Smoking inside is against the law and can start a fire. A vape inside is not allowed either. Following the rule keeps everyone safe.' },
  }, HOUSE_LINE),
  tip({
    id: 'c.health',
    lessonId: 'l.health',
    emoji: '⏸️',
    title: 'Breaks and working hours',
    body: 'The law protects your health. After 5.5 hours of work you get at least 30 minutes of break (it may be 2 times 15 minutes). After 10 hours: at least 45 minutes. You may work at most 12 hours in one shift and 60 hours in one week. Unsafe work or too little pay? You can report it to the Nederlandse Arbeidsinspectie, also without giving your name.',
    phrase: { id: 'c.health.p', nl: 'Ik heb nog geen pauze gehad.', en: 'I have not had a break yet.' },
    situation: { id: 'c.health.s', en: 'You have worked 6 hours without a break. Your supervisor asks you to keep going. What do you do?' },
    options: [
      { id: 'c.health.o1', en: 'Say politely that you need your break now.', best: true },
      { id: 'c.health.o2', en: 'Keep working and skip your break every day.', best: false },
      { id: 'c.health.o3', en: 'Leave work and go home without a word.', best: false },
    ],
    why: { id: 'c.health.w', en: 'A break after 5.5 hours is the law, not a favour. Rest also helps you work safely.' },
  }),
  tip({
    id: 'c.rights',
    lessonId: 'l.rights',
    emoji: '✊',
    title: 'Discrimination and dismissal',
    body: 'Discrimination at work is forbidden, for example because of your origin, religion or gender. Your employer cannot simply fire you: normally they need permission from UWV or a judge, or your agreement. (In a trial period or at the end of a temporary contract, other rules apply.) Do not sign a paper about your dismissal that you do not understand. Get help first from the union (for example FNV), a discrimination help desk or the Juridisch Loket (free legal advice).',
    phrase: { id: 'c.rights.p', nl: 'Ik wil eerst advies vragen.', en: 'I want to ask for advice first.' },
    situation: { id: 'c.rights.s', en: 'Your boss gives you a paper: "Sign today, then you leave by agreement." You do not understand it well. What do you do?' },
    options: [
      { id: 'c.rights.o1', en: 'Do not sign yet. Ask for time and get advice first.', best: true },
      { id: 'c.rights.o2', en: 'Sign it, because the boss says it is fine.', best: false },
      { id: 'c.rights.o3', en: 'Put the paper away and never talk about it.', best: false },
    ],
    why: { id: 'c.rights.w', en: 'If you sign, you can lose rights, for example to unemployment benefit (WW). Asking for time to get advice is normal and allowed.' },
  }),
  tip({
    id: 'c.leave',
    lessonId: 'l.leave',
    emoji: '🏝️',
    title: 'Holidays and emergency leave',
    body: 'By law you get paid days off: at least 4 times the days you work per week. Full-time, 5 days a week? Then at least 20 days a year. A cao can give more. Ask for leave in time, and in writing. A sudden emergency, like an accident or illness in your family? Then you can get short leave with pay (calamiteitenverlof). Tell your employer right away.',
    phrase: { id: 'c.leave.p', nl: 'Ik wil graag verlof aanvragen voor juli.', en: 'I would like to ask for leave for July.' },
    situation: { id: 'c.leave.s', en: 'You want to visit your family abroad for three weeks in summer. What do you do?' },
    options: [
      { id: 'c.leave.o1', en: 'Ask your employer for leave early, in writing.', best: true },
      { id: 'c.leave.o2', en: 'Just go, and tell your boss when you are back.', best: false },
      { id: 'c.leave.o3', en: 'Ask a colleague to tell the boss the day before.', best: false },
    ],
    why: { id: 'c.leave.w', en: 'Your employer plans the work and must agree to the dates. Asking early gives the best chance of a yes.' },
  }),
  tip({
    id: 'c.illness',
    lessonId: 'l.illness',
    emoji: '👩‍⚕️',
    title: 'Your rights when you are sick',
    body: 'When you are sick, your employer must pay at least 70% of your wage. A cao often gives more. There can be up to 2 waiting days (wachtdagen) without pay. Your boss may not ask what illness you have: you talk about your health and your work with the company doctor (bedrijfsarts). Call your employer when you are better (beter melden). Working through an agency? The rules can be different: ask your agency.',
    phrase: { id: 'c.illness.p', nl: 'Ik ben weer beter. Ik kom morgen werken.', en: 'I am better again. I will come to work tomorrow.' },
    situation: { id: 'c.illness.s', en: 'You are sick for a week. Your employer asks you to visit the company doctor. What do you do?' },
    options: [
      { id: 'c.illness.o1', en: 'Go, and talk with the doctor about your health and your work.', best: true },
      { id: 'c.illness.o2', en: 'Do not go, because you already have your own doctor.', best: false },
      { id: 'c.illness.o3', en: 'Go back to work while you are still sick, so you do not have to go.', best: false },
    ],
    why: { id: 'c.illness.w', en: 'The company doctor helps you get back to work in a healthy way. The doctor does not tell your boss your medical details, only what work you can do.' },
  }),
];

