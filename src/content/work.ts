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
 * Also the basis unit "Smart tools" (toolsUnit: translation apps, captions, keep learning),
 * which curriculum.ts places right after "Asking for help".
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
          { id: 'w.tijdelijk', nl: 'tijdelijk', en: 'temporary', emoji: '⏳', picture: false },
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
          { id: 'w.proeftijd', nl: 'de proeftijd', en: 'the trial period', emoji: '🧪', picture: false },
          { id: 'w.opzegtermijn', nl: 'de opzegtermijn', en: 'the notice period', emoji: '📆', picture: false },
          { id: 'w.cao', nl: 'de cao', en: 'the collective agreement', emoji: '📘', picture: false },
        ],
        sentences: [
          { id: 's.contract.1', nl: 'Hoeveel uur werk ik per week?', en: 'How many hours do I work per week?' },
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
          { id: 'w.bsn', nl: 'het BSN', en: 'the citizen service number', emoji: '🔢', picture: false },
          { id: 'w.identiteitsbewijs', nl: 'het identiteitsbewijs', en: 'the ID document', emoji: '🪪' },
          { id: 'w.gemeente', nl: 'de gemeente', en: 'the town hall, the municipality', emoji: '🏘️' },
          { id: 'w.inschrijven', nl: 'inschrijven', en: 'to register', emoji: '🖊️' },
          { id: 'w.adres', nl: 'het adres', en: 'the address', emoji: '📮' },
          { id: 'w.zorgverzekering', nl: 'de zorgverzekering', en: 'the health insurance', emoji: '🏥', picture: false },
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
          { id: 'w.huur', nl: 'de huur', en: 'the rent', emoji: '🔑', picture: false },
          { id: 'w.huurcontract', nl: 'het huurcontract', en: 'the rental contract', emoji: '📑' },
          { id: 'w.borg', nl: 'de borg', en: 'the deposit', emoji: '💰', picture: false },
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
          { id: 'w.bruto', nl: 'bruto', en: 'gross (before tax)', emoji: '🧾', picture: false },
          { id: 'w.netto', nl: 'netto', en: 'net (what you get)', emoji: '👛', picture: false },
          { id: 'w.loonstrook', nl: 'de loonstrook', en: 'the payslip', emoji: '📃' },
          { id: 'w.belasting', nl: 'de belasting', en: 'the tax', emoji: '🏛️', picture: false },
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
          { id: 'w.verlof', nl: 'het verlof', en: 'the leave', emoji: '🌴', picture: false },
          { id: 'w.aanvragen', nl: 'aanvragen', en: 'to ask for, to apply for', emoji: '📝', picture: false },
          { id: 'w.feestdag', nl: 'de feestdag', en: 'the public holiday', emoji: '🎉', picture: false },
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
      {
        id: 'l.illness',
        title: 'Sick at home',
        words: [
          { id: 'w.ziekmelden', nl: 'ziek melden', en: 'to call in sick', emoji: '🤒' },
          { id: 'w.betermelden', nl: 'beter melden', en: 'to say you are better', emoji: '🙂' },
          { id: 'w.bedrijfsarts', nl: 'de bedrijfsarts', en: 'the company doctor', emoji: '👩‍⚕️' },
          { id: 'w.ziekte', nl: 'de ziekte', en: 'the illness', emoji: '🦠' },
          { id: 'w.doorbetalen', nl: 'doorbetalen', en: 'to keep paying', emoji: '💶', picture: false },
          { id: 'w.wachtdag', nl: 'de wachtdag', en: 'the waiting day (no pay)', emoji: '⏸️', picture: false },
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
    body: 'A trial period (proeftijd) must be in writing. It is not allowed in a contract of 6 months or shorter. In a longer contract of less than 2 years, it is at most 1 month. In a contract of 2 years or longer, or a permanent one, it is at most 2 months. On-call worker (oproepkracht)? Your employer must call you at least 4 days before. If it is later, you do not have to come. A cao can make these 4 days shorter, but not shorter than 1 day. If they cancel your work later than that, you still get paid. If they call you for less than 3 hours of work, you usually get paid for 3 hours.',
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
    body: 'Does your employer or agency arrange your housing? Then the rental contract must be separate from your work contract. Ask for a written rental contract and proof of what you pay. Rent may only be taken off your wage if you agreed in writing, and within legal limits: check it on your payslip. A deposit (borg) is at most 2 months of basic rent. You get it back when you leave, minus real damage. Register at your address with the gemeente. Unsafe housing, threats or unfair costs? Report it to the gemeente (meldpunt), and get free advice from the Juridisch Loket or a housing advice service. For a problem with the rent price or service costs, there is the Huurcommissie. Your job ends? Ask for advice before you leave your home.',
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
    body: 'Bruto is your pay before tax. Netto is what you get in your bank account: bruto minus tax and premiums (loonheffing). Your employer must give you a payslip (loonstrook). Check the hours and the pay on every payslip, and write down the hours you work. Do you have two jobs? Use the tax credit (loonheffingskorting) at only one employer.',
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
    body: 'The law protects your health. Do you work more than 5.5 hours? Then you get at least 30 minutes of break (it may be 2 times 15 minutes). More than 10 hours? Then at least 45 minutes. A cao can have slightly different break rules. You may work at most 12 hours in one shift and 60 hours in one week. Your employer must give you protective equipment, like safety shoes or gloves, for free. Unsafe work or too little pay? You can report it to the Nederlandse Arbeidsinspectie, also without giving your name.',
    phrase: { id: 'c.health.p', nl: 'Ik heb nog geen pauze gehad.', en: 'I have not had a break yet.' },
    situation: { id: 'c.health.s', en: 'You have worked 6 hours without a break. Your supervisor asks you to keep going. What do you do?' },
    options: [
      { id: 'c.health.o1', en: 'Say politely that you need your break now.', best: true },
      { id: 'c.health.o2', en: 'Keep working and skip your break every day.', best: false },
      { id: 'c.health.o3', en: 'Leave work and go home without a word.', best: false },
    ],
    why: { id: 'c.health.w', en: 'When you work more than 5.5 hours, a break is the law, not a favour. Rest also helps you work safely.' },
  }),
  tip({
    id: 'c.rights',
    lessonId: 'l.rights',
    emoji: '✊',
    title: 'Discrimination and dismissal',
    body: 'Discrimination at work is forbidden, for example because of your origin, religion or gender. Your employer cannot simply fire you: normally they need permission from UWV or a judge, or your agreement. (In a trial period or at the end of a temporary contract, other rules apply.) Do not sign a paper about your dismissal that you do not understand. Did you sign an agreement to end your job (vaststellingsovereenkomst)? Then you can usually still cancel it in writing within 14 days. Get help first from the union (for example FNV), a discrimination help desk or the Juridisch Loket (free legal advice).',
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
    body: 'When you are sick, your employer must pay at least 70% of your wage, for up to 2 years. A cao often gives more. There can be up to 2 waiting days (wachtdagen) without pay, but only if your contract or cao says so. Your boss may not ask what illness you have: you talk about your health and your work with the company doctor (bedrijfsarts). Call your employer when you are better (beter melden). Working through an agency? The rules can be different: ask your agency.',
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

/* ------------------------------------------------------------------------------------------
 * More units, written with small helpers: lesson slug "x" gives l.x, s.x.1-3, c.x.q/a and tip c.x
 * (options c.x.o1-3, the first is the best one; shuffled when shown). Word ids are w.<id>.
 * ---------------------------------------------------------------------------------------- */

/** A word row; a fifth `false` marks an abstract word (no picture, see Word.picture). */
type WordRow = [id: string, nl: string, en: string, emoji: string, picture?: false];
type Pair = [nl: string, en: string];

const lesson = (slug: string, title: string, words: WordRow[], sentences: Pair[], [q, a]: [Pair, Pair]): Lesson => ({
  id: `l.${slug}`,
  title,
  words: words.map(([id, nl, en, emoji, picture]) => ({ id: `w.${id}`, nl, en, emoji, ...(picture === false ? { picture } : {}) })),
  sentences: sentences.map(([nl, en], i) => ({ id: `s.${slug}.${i + 1}`, nl, en })),
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

/** Closing line: ADVICE_LINE for rights and rules set by law, HOUSE_LINE for company rules, '' for social norms. */
const tipFor = (
  slug: string,
  emoji: string,
  title: string,
  body: string,
  [nl, en]: Pair,
  situation: string,
  options: [best: string, worse: string, worse2: string],
  why: string,
  end: string,
): CultureTip =>
  tip(
    {
      id: `c.${slug}`,
      lessonId: `l.${slug}`,
      emoji,
      title,
      body,
      phrase: { id: `c.${slug}.p`, nl, en },
      situation: { id: `c.${slug}.s`, en: situation },
      options: options.map((o, i) => ({ id: `c.${slug}.o${i + 1}`, en: o, best: i === 0 })),
      why: { id: `c.${slug}.w`, en: why },
    },
    end,
  );

const NONE = '';

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

const applyTips = [
  tipFor(
    'cv',
    '🗂️',
    'A short Dutch CV',
    'A Dutch CV is short: 1 or 2 pages. Write your contact details, work experience, education, languages and skills. A photo is not needed. You do not have to write your religion, age or marital status. Be honest about what you can do. Ask someone to check your Dutch.',
    ['Wil je mijn cv lezen? Klopt mijn Nederlands?', 'Will you read my CV? Is my Dutch correct?'],
    'You worked 3 years in a factory in your home country, but you have no diploma. What do you put on your CV?',
    [
      'Write the work and what you did there, honestly.',
      'Write nothing, because you have no diploma.',
      'Write that you have a diploma, so you look better.',
    ],
    'Work experience counts, also from abroad. Being honest is important: employers may check it.',
    NONE,
  ),
  tipFor(
    'interview',
    '🪑',
    'The job interview',
    'Come on time: 5 to 10 minutes early. Greet politely and look at the person. Tell briefly what you can do. Asking questions yourself is normal and positive, for example about the hours, the work or training. At the end you may ask when you will hear something. It is fine to say that you are still learning Dutch. An employer may not ask about your religion, a pregnancy or your health. You do not have to answer: you may politely say that you prefer not to answer.',
    ['Mag ik ook iets vragen? Hoeveel uur per week is het werk?', 'May I ask something too? How many hours per week is the work?'],
    'At the end of the interview, the employer asks: "Heb je nog vragen?" What do you do?',
    [
      'Ask one or two questions, for example about the hours or training.',
      'Say no, because asking questions is not polite.',
      'Say no, so the interview ends quickly.',
    ],
    'Questions show that you are interested in the job. Dutch employers often expect them.',
    NONE,
  ),
];

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

const houseTips = [
  tipFor(
    'clock',
    '⏲️',
    'Clock in yourself',
    'Clock in and out yourself, at the moment you really start and stop working. Never clock in or out for a colleague, and never let someone else use your card. This counts as fraud and can lead to dismissal. Will you be late? Call before your shift starts. Check that your clocked hours match your payslip.',
    ['Ik ben vergeten uit te klokken. Kun je het aanpassen?', 'I forgot to clock out. Can you correct it?'],
    'A colleague gives you his card: "Clock me in, I will be 20 minutes late." What do you do?',
    [
      'Say no kindly, and tell him to call the supervisor himself.',
      'Do it just once, because he is your friend.',
      'Clock him in and tell the supervisor later.',
    ],
    'Clocking in for someone else counts as fraud, for both of you. Saying no protects your colleague and your own job.',
    HOUSE_LINE,
  ),
  tipFor(
    'hygiene',
    '🧼',
    'Clear head, clean hands',
    'Alcohol and drugs at work, or coming to work after using them, are forbidden in almost all companies. It is very unsafe near machines and forklifts, and it can lead to dismissal. Does a medicine make you sleepy or dizzy? Tell your supervisor, so you can do safe work. You do not have to say which medicine. In food production the hygiene rules are strict: wash your hands, wear clean work clothes, a hairnet if needed, and no jewellery. Vomiting or diarrhoea? Report it before you start. Keep your workplace tidy.',
    ['Ik neem een medicijn. Ik word er slaperig van.', 'I take a medicine. It makes me sleepy.'],
    'Your doctor gives you a medicine that makes you sleepy. Tomorrow you must drive a forklift. What do you do?',
    [
      'Tell your supervisor before you start, so you can do safe work.',
      'Say nothing and drive very slowly.',
      'Stop taking the medicine without asking your doctor.',
    ],
    'Your supervisor does not need to know which medicine, only that you cannot drive or work with machines now. That keeps you and your colleagues safe.',
    HOUSE_LINE,
  ),
];

// ---- Getting along (after "House rules") ----

const socialUnit = unit('social', 'Getting along', 'Omgang met collega’s', '☕', '#3a7d5c', [
  lesson(
    'smalltalk',
    'Small talk and breaks',
    [
      ['weekend', 'het weekend', 'the weekend', '🛋️', false],
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
      ['feedback', 'de feedback', 'the feedback', '🗨️', false],
      ['uitleggen', 'uitleggen', 'to explain', '🧑‍🏫'],
      ['leren', 'leren', 'to learn', '📚'],
      ['verbeteren', 'verbeteren', 'to improve, to correct', '🔧', false],
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
      ['Zeg het liever tegen mij zelf.', 'I would rather you say it to me.'],
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
      ['Raak me niet aan, alstublieft.', 'Please do not touch me.'],
      ['Die opmerking vind ik niet grappig.', 'I do not find that remark funny.'],
      ['Ik wil iets melden bij de vertrouwenspersoon.', 'I want to report something to the confidential adviser.'],
    ],
    [['Doe niet zo moeilijk, het was maar een grapje.', 'Do not be so difficult, it was only a joke.'], ['Voor mij niet. Ik wil dat je stopt.', 'Not for me. I want you to stop.']],
  ),
]);

const socialTips = [
  tipFor(
    'smalltalk',
    '☕',
    'Small talk in the break',
    'Short chats in the break are normal. They help you feel part of the team. You are welcome at the coffee or lunch table. Easy topics are the weekend, the weather, sports and holidays. Questions about salary, religion or someone’s private life are often too personal at first. On their birthday, people often bring a treat for the team (trakteren), like cake. Is it a colleague’s birthday? Say "Gefeliciteerd!".',
    ['Gefeliciteerd met je verjaardag!', 'Happy birthday!'],
    'In the break, your colleagues sit together at a table. You do not know them well yet. What do you do?',
    [
      'Ask "Mag ik bij jullie zitten?" and join with a short chat.',
      'Eat alone outside every day, so you do not disturb them.',
      'Ask each colleague how much they earn.',
    ],
    'Joining the table is welcome and helps you get to know the team. A simple question like "Hoe was je weekend?" is a good start.',
    NONE,
  ),
  tipFor(
    'mistakes',
    '🙈',
    'Mistakes are normal',
    'Everybody makes mistakes at work. Say it quickly, so it can be fixed: "Sorry, ik heb een fout gemaakt." Hiding a mistake is seen as much worse than the mistake itself. Feedback is about the work, not about you as a person. Did you get a compliment? Just say thank you. Not clear what to do better? Ask: "Kun je het uitleggen?"',
    ['Sorry, ik heb een fout gemaakt. Hoe kan ik het oplossen?', 'Sorry, I made a mistake. How can I fix it?'],
    'You put 20 boxes on the wrong pallet. Nobody has seen it yet. What do you do?',
    [
      'Tell your supervisor right away and help to fix it.',
      'Say nothing and hope nobody notices.',
      'Say that a colleague did it.',
    ],
    'A mistake that is told early is easy to fix. Being honest builds trust, and that counts more than never making a mistake.',
    NONE,
  ),
  tipFor(
    'respect',
    '🫂',
    'Respect for everyone',
    'At work, everyone is equal and everyone is treated with respect, whatever their gender, origin, religion or sexual orientation. Your supervisor can be a man or a woman. You decide about physical contact. A handshake is common, but you may also greet in another polite way, like a nod and a smile, and explain it briefly. Jokes about someone’s origin or religion, threats, bullying (pesten) and unwanted sexual behaviour are not accepted. You can report it to your supervisor, or to a confidential adviser (vertrouwenspersoon) if your company has one.',
    ['Ik geef liever geen hand, maar ik groet je graag.', 'I prefer not to shake hands, but I am happy to greet you.'],
    'A colleague often makes jokes about your religion. You asked him to stop, but he goes on. What do you do?',
    [
      'Tell your supervisor or the vertrouwenspersoon.',
      'Laugh along, so there is no trouble.',
      'Make jokes about his background back.',
    ],
    'Such jokes are not accepted at work. Reporting it is normal: the company must keep the workplace safe for everyone.',
    NONE,
  ),
  tipFor(
    'gossip',
    '🤫',
    'Gossip and social media',
    'Talking behind a colleague’s back (roddelen) harms the trust in a team. Do you have a problem with someone? Talk to that person, or to your supervisor. Online, the same rules apply as at work: do not post photos, videos or messages about colleagues, clients or the company without permission. Your boss can see what you post, and it can stay online for years. Many teams have a group chat (groepsapp) for work: keep it about work, and do not share screenshots of it with others. Sharing private things of a colleague or mocking someone online is bullying too.',
    ['Dat wil ik niet online hebben.', 'I do not want that online.'],
    'A colleague films you when you slip on the wet floor. He wants to put the video on TikTok. What do you do?',
    [
      'Say "Nee, dat wil ik niet" and ask him to delete it. If he posts it anyway, tell your supervisor.',
      'Laugh and let him post it, so you are not difficult.',
      'Film him too and post that video yourself.',
    ],
    'Nobody may put a video of you online without your permission. Saying no is normal, and your employer must act when colleagues mock each other online.',
    NONE,
  ),
  tipFor(
    'boundaries',
    '🛑',
    'Crossing the line',
    'Grensoverschrijdend gedrag is behaviour that crosses someone’s boundary: unwanted touching, sexual remarks or jokes, staring, sending unwanted pictures, threats or shouting. It does not matter if the other person "meant it as a joke": what counts is how it feels to you. If you can, say clearly that you want it to stop. Write down what happened, when, and who saw it. Tell your supervisor, the confidential adviser (vertrouwenspersoon) or HR. Your employer must protect you, and you may not be punished for reporting it. Did you see it happen to a colleague? Ask if they are okay, and offer to be a witness.',
    ['Ik wil dat je stopt.', 'I want you to stop.'],
    'Your team leader often puts his hand on your back and says you look "pretty". It makes you feel uncomfortable. He decides your shifts. What do you do?',
    [
      'Write down what happens and talk to the vertrouwenspersoon or HR.',
      'Say nothing, because he decides your shifts.',
      'Quit your job without telling anyone why.',
    ],
    'This is unwanted behaviour, and it is not your fault. A confidential adviser listens in confidence and helps you choose the next step. You are protected when you report it.',
    NONE,
  ),
];

// ---- After "Leave and sickness": exploitation, calling work, diplomas, health, money, travel, losing your job ----

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
        ['overmorgen', 'overmorgen', 'the day after tomorrow', '⏩', false],
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
        ['ruilen', 'ruilen', 'to swap', '🔄', false],
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
      [['Wil je een opleiding volgen?', 'Do you want to do a training?'], ['Ja, graag! Wie betaalt dat?', 'Yes, please! Who pays for it?']],
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
        ['Het is spoed.', 'It is urgent.'],
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
        ['Ik fiets naar mijn werk.', 'I cycle to my work.'],
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

const laterTips = [
  tipFor(
    'warning',
    '⛓️',
    'Signs of exploitation',
    'Watch out for these signs. Your employer keeps your passport or ID: that is not allowed, you keep your own ID and an employer may only make a copy. You get much less pay than agreed, or no payslip. You must pay off a big debt to the employer or agency. You must work extremely long hours, without a choice. Someone threatens you, or uses your housing to put pressure on you. This is not normal and not allowed.',
    ['Ik wil mijn paspoort terug.', 'I want my passport back.'],
    'On your first day, the agency says: "We keep your passport, for safety." What do you do?',
    [
      'Say politely that you keep it yourself. They may make a copy.',
      'Give it, because the agency knows the rules.',
      'Give it, but take a photo of it first.',
    ],
    'Your passport is yours. Keeping it is a way to control workers. An employer only needs a copy for the files.',
    ADVICE_LINE,
  ),
  tipFor(
    'gethelp',
    '🆘',
    'Where to get help',
    'Do you see signs of exploitation, for you or for someone else? Get help. You can report it to the Nederlandse Arbeidsinspectie, also anonymously, or to the police. Meld Misdaad Anoniem: 0800-7000. Free legal advice: the Juridisch Loket. In danger? Call 112. Everyone who works in the Netherlands can get help, also migrants.',
    ['Ik heb hulp nodig. Ik word uitgebuit.', 'I need help. I am being exploited.'],
    'A friend works 14 hours a day, gets almost no pay and is afraid of the boss. What can you do?',
    [
      'Help him contact the Arbeidsinspectie or the Juridisch Loket, anonymously if he wants.',
      'Tell him that this is normal for new workers.',
      'Go to the boss and start a fight.',
    ],
    'Help is there for everyone who works in the Netherlands. A report can also be made without names.',
    ADVICE_LINE,
  ),
  tipFor(
    'callin',
    '☎️',
    'Calling your supervisor',
    'When you call your supervisor, say your name, the reason, and when you expect to come back. Sick? You only have to say that you are sick, not what illness you have. Call: do not only send a text, unless your company says a text is fine. No answer? Leave a voice message and try again.',
    ['Hallo, met Ali. Ik kan vandaag niet komen.', 'Hello, this is Ali. I cannot come today.'],
    'Your child is sick and you cannot come to work. Your company wants you to call. What do you do?',
    [
      'Call your supervisor before your shift: say your name, the reason and when you expect to be back.',
      'Send a short text at the start of your shift.',
      'Ask your neighbour to call for you.',
    ],
    'A call is clear and quick, and your supervisor can ask questions. Saying when you expect to be back helps them plan.',
    HOUSE_LINE,
  ),
  tipFor(
    'texting',
    '💬',
    'Messages to work: short and polite',
    'Keep messages to work short and polite. Say who you are and what is happening, and end with a greeting. For example: "Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali". Check your roster (rooster) in the app often. Reply to shift requests in time.',
    ['Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali', 'Hi Mark, I am 10 minutes late. Sorry! Regards, Ali'],
    'You will be 10 minutes late. Which message to your supervisor is best?',
    [
      '"Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali"',
      '"Laat" (one word, without your name).',
      'A voice message of three minutes about the traffic.',
    ],
    'A good message says who you are and what is happening, in a few words. Then your supervisor knows it right away.',
    HOUSE_LINE,
  ),
  tipFor(
    'certs',
    '🏅',
    'Certificates help you',
    'In construction, industry and temp work you often need a VCA certificate (safety). To drive a forklift you usually need a forklift certificate (heftruckcertificaat). Ask your employer if they pay for the course and the exam.',
    ['Kan ik hier een VCA-cursus doen?', 'Can I do a VCA course here?'],
    'A job asks for a VCA certificate. You do not have it yet. What do you do?',
    [
      'Ask if the employer or agency can arrange the course, or how you can get it.',
      'Do not apply, because you will never get the job.',
      'Say you have it, and hope nobody checks.',
    ],
    'Many employers and agencies help with VCA. Asking shows that you want to learn.',
    NONE,
  ),
  tipFor(
    'diploma',
    '📜',
    'Your diploma counts',
    'Do you have a diploma from another country? You can have it assessed at IDW (Internationale Diplomawaardering). Then employers can see what it is worth here. Is a training required for your job? Then your employer must pay for it, and it counts as working time. Ask your supervisor about courses.',
    ['Zijn er cursussen voor mij?', 'Are there courses for me?'],
    'Your employer says you must do a required safety training on Saturday, without pay. What is true?',
    [
      'Required training is paid by the employer and counts as working time. Ask about it calmly.',
      'Training is always in your own free time.',
      'You must pay for the training yourself.',
    ],
    'If a training is required for your work, the employer pays and it counts as working time. If it is not clear, ask for advice.',
    ADVICE_LINE,
  ),
  tipFor(
    'doctor',
    '🧑‍⚕️',
    'Doctor or 112?',
    'Register with a family doctor (huisarts) near your home. Do you need urgent care in the evening, at night or in the weekend? Call the huisartsenpost. Call 112 only when a life is in danger. You get medicines at the pharmacy (apotheek).',
    ['Ik wil me inschrijven bij de huisarts.', 'I want to register with the GP.'],
    'It is Saturday night. Your child has a high fever, but is awake and breathing normally. What do you do?',
    ['Call the huisartsenpost.', 'Call 112.', 'Wait until Monday and do nothing.'],
    'The huisartsenpost helps with urgent care outside office hours. 112 is for emergencies when a life is in danger.',
    NONE,
  ),
  tipFor(
    'insurance',
    '☂️',
    'Health insurance',
    'When you live or work in the Netherlands, basic health insurance is usually required. You pay a premium every month. Every year there is an own risk (eigen risico): the first costs you pay yourself. The amount changes: check it with your insurer. Visits to the family doctor (huisarts) do not count for the own risk. With a low income you may get healthcare allowance (zorgtoeslag).',
    ['Ik heb een zorgverzekering nodig. Kunt u mij helpen?', 'I need health insurance. Can you help me?'],
    'You started working here two weeks ago and you have no health insurance yet. What do you do?',
    [
      'Arrange it quickly: ask your employer or agency, or contact an insurer.',
      'Wait until you get sick.',
      'Use the insurance card of a friend.',
    ],
    'Without insurance, a doctor or hospital can cost a lot, and you can get a fine. Arranging it quickly protects you.',
    NONE,
  ),
  tipFor(
    'letters',
    '📨',
    'Do not ignore letters',
    'Do not ignore letters from the Belastingdienst, the gemeente or UWV. Ask someone you trust to help you read them. The tax return (aangifte) for last year must usually be done before 1 May. You can ask for more time. Allowances (toeslagen) like zorgtoeslag and huurtoeslag depend on your income. If you get too much, you must pay it back, so keep your income details up to date.',
    ['Ik heb een brief gekregen. Kun je me helpen?', 'I got a letter. Can you help me?'],
    'You get a letter from the Belastingdienst. You do not understand it. What do you do?',
    [
      'Ask someone you trust to help you read it, quickly.',
      'Put it in a drawer and wait.',
      'Throw it away, because it is probably advertising.',
    ],
    'Official letters often have a deadline. If you react in time, problems are usually easier to solve.',
    ADVICE_LINE,
  ),
  tipFor(
    'scams',
    '🦹',
    'Watch out for scams',
    'Your bank never asks for your codes or PIN by phone, SMS or email. Do not click on links in messages you did not expect. Someone pressures you to pay fast? Stop and check first. Call your bank on the official number, for example the number on your bank card or its website.',
    ['Ik bel zelf de bank terug.', 'I will call the bank back myself.'],
    'You get an SMS: "Your bank account will be blocked. Click this link now." What do you do?',
    [
      'Do not click. Call your bank on the official number.',
      'Click quickly, so your account is not blocked.',
      'Reply to the SMS and ask if it is real.',
    ],
    'Scammers use pressure and fake links. Your bank never asks for your codes through a link or a message.',
    NONE,
  ),
  tipFor(
    'bike',
    '🚲',
    'Cycling to work',
    'Turn your lights on when it is dark. Ride on the bike path and follow the traffic lights and signs. Always lock your bike. Holding your phone in your hand while cycling is forbidden.',
    ['Waar kan ik mijn fiets neerzetten?', 'Where can I park my bike?'],
    'It is dark and you cycle to your night shift. Your phone rings. What do you do?',
    [
      'Stop at a safe place before you answer.',
      'Answer with the phone in your hand while cycling.',
      'Ride on, and look at your phone quickly.',
    ],
    'A phone in your hand while cycling is forbidden and dangerous. Stopping first takes only a moment.',
    NONE,
  ),
  tipFor(
    'transit',
    '🎫',
    'Bus, train and travel costs',
    'In most buses and trains you can pay with your bank card (OVpay). Check in AND check out with the same card, or you pay too much. A travel allowance (reiskostenvergoeding) is not a legal right: it depends on your employer or cao. Ask about it.',
    ['Krijg ik een vergoeding voor mijn reiskosten?', 'Do I get money for my travel costs?'],
    'You travel to work by bus every day. A colleague gets travel money, you do not. What do you do?',
    [
      'Ask your supervisor what the rules are in your company or cao.',
      'Say nothing, because it is probably not for you.',
      'Tell all colleagues that the company is unfair.',
    ],
    'Travel allowance depends on the employer or the cao. Asking about it is normal and helps you know your rights.',
    ADVICE_LINE,
  ),
  tipFor(
    'ww',
    '🛟',
    'Unemployment benefit (WW)',
    'Lost your job? Apply for WW at UWV as soon as possible, within a week after your last working day. You usually need to have worked at least 26 of the last 36 weeks. If you quit your job yourself, you usually do not get WW. Register as a job seeker on werk.nl.',
    ['Ik wil WW aanvragen. Wat moet ik doen?', 'I want to apply for unemployment benefit. What must I do?'],
    'You are angry about your work and want to quit today. What is wise?',
    [
      'Get advice first: if you quit yourself, you usually do not get WW.',
      'Quit today: you will get WW anyway.',
      'Stop coming to work without saying anything.',
    ],
    'Quitting can cost you your benefit. Talking first with your supervisor, the union or the Juridisch Loket can help you find a better way.',
    ADVICE_LINE,
  ),
  tipFor(
    'newjob',
    '🔭',
    'Looking for new work',
    'Before you leave, ask for a reference (referentie). Keep your payslips and your contract. Update your CV. Look for work at temp agencies (uitzendbureaus) and on werk.nl. Never pay money to get a job.',
    ['Mag ik u als referentie opgeven?', 'May I give your name as a reference?'],
    'Someone offers you a job, but first you must pay 300 euros "for the job". What do you do?',
    [
      'Do not pay. Look for work through a real agency or werk.nl.',
      'Pay, because a good job is worth it.',
      'Pay half now and the rest later.',
    ],
    'Asking money for a job is a warning sign. A temp agency may not charge you for finding work.',
    NONE,
  ),
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
        ['doorgeven', 'doorgeven', 'to pass on (information)', '📨', false],
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
        ['allergie', 'de allergie', 'the allergy', '🥜', false],
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
  ]),
];

const sectorTips = [
  tipFor(
    'tools',
    '🧰',
    'The toolbox meeting',
    'On many building sites there is a short safety meeting at regular times: the toolbox meeting. You hear about risks and new rules. Go to it, listen, and ask questions if you do not understand. Check your tools before you use them. Is a tool broken? Tell your supervisor.',
    ['Deze boor is kapot. Is er een andere?', 'This drill is broken. Is there another one?'],
    'There is a toolbox meeting, but your Dutch is not good yet. What do you do?',
    [
      'Go, use a translation app if that is allowed, and ask a colleague afterwards what you did not understand.',
      'Skip it, because you will not understand it anyway.',
      'Sign the attendance list without going.',
    ],
    'Safety information is for everyone. A translation app can help you follow the meeting, if phones are allowed there. Asking a colleague afterwards is normal and checks that you understood it right.',
    NONE,
  ),
  tipFor(
    'site',
    '🦺',
    'Stop and check: LMRA',
    'Before you start a job, stop for a moment and check: what can go wrong here? This is the LMRA (last-minute risk analysis). Always wear your helmet, and fall protection when you work high. Never stand under a hanging load. Is the work really dangerous? Then you may stop, and you must tell your supervisor right away.',
    ['Ik begin nog niet. Dit is niet veilig.', 'I am not starting yet. This is not safe.'],
    'You must work on a scaffold, but a railing is missing. A colleague says: "Just be careful." What do you do?',
    [
      'Do not start. Report it to your supervisor first.',
      'Start, but be very careful.',
      'Fix the railing yourself with some rope.',
    ],
    'A fall from height can cause very serious injuries. You may stop dangerous work, and reporting it protects the whole team.',
    ADVICE_LINE,
  ),
  tipFor(
    'line',
    '⚙️',
    'Hands away from running machines',
    'Never reach into a running machine, not even for a second. At a fault (storing): press the emergency stop (noodstop) and call your supervisor. Maintenance and repairs are done only when the machine is locked off (lock-out), and only by trained people.',
    ['Er is een storing. Ik heb op de noodstop gedrukt.', 'There is a fault. I pressed the emergency stop.'],
    'A product is stuck in the machine. The machine is still running. What do you do?',
    [
      'Press the emergency stop and call your supervisor.',
      'Quickly pull it out with your hand.',
      'Leave it and hope the machine fixes it.',
    ],
    'Running machines can cause serious accidents in a second. Stopping the machine is always allowed and always better.',
    HOUSE_LINE,
  ),
  tipFor(
    'quality',
    '⭐',
    'Quality: say what you see',
    'Do you see a problem with a product, like damage or a wrong label? Report it and put it aside. Do not let it pass just to keep the line going. Finding a problem early saves a lot of work and money. Your supervisor will be glad you said it.',
    ['Ik denk dat er iets mis is met deze producten.', 'I think something is wrong with these products.'],
    'You see that many products have a wrong date on the label. The line is very busy. What do you do?',
    [
      'Tell your supervisor or the quality person right away.',
      'Let them pass, because it is not your job.',
      'Throw them away quietly.',
    ],
    'A wrong label can mean that all products must come back from the shops. Saying it early is what a good team member does.',
    NONE,
  ),
  tipFor(
    'client',
    '🧓',
    'Respect for the client',
    'Knock before you go into a client’s room. Say who you are, explain what you are going to do and ask permission. Say "u" to clients, unless they ask you to say "je". Let clients do what they can do themselves.',
    ['Mag ik binnenkomen? Ik kom u helpen met wassen.', 'May I come in? I am here to help you wash.'],
    'You must help a client to wash. The door of her room is closed. What do you do?',
    [
      'Knock, wait, say who you are and explain what you will do.',
      'Walk in quickly, because you are busy.',
      'Skip the washing, so you do not disturb her.',
    ],
    'The room is the client’s home. Knocking and explaining shows respect and makes the care calmer.',
    NONE,
  ),
  tipFor(
    'privacy',
    '🤐',
    'Privacy, hygiene and medicines',
    'What you see and hear about clients stays at work. Do not talk about clients outside work, and never post photos of them. Clean your hands before and after care. Do you notice a change in a client, like pain or a fall? Tell the nurse right away. Never give medicines unless you are trained and allowed to do it.',
    ['Meneer heeft meer pijn dan gisteren.', 'The man has more pain than yesterday.'],
    'A client asks you for her pills. You are not trained to give medicines. What do you do?',
    [
      'Say kindly that you will get the nurse, and do it right away.',
      'Give the pills, because she knows what she needs.',
      'Say no and walk away.',
    ],
    'Wrong medicine can be dangerous. Getting the right person quickly helps the client and keeps everyone safe.',
    HOUSE_LINE,
  ),
  tipFor(
    'kitchen',
    '🧊',
    'Food safety',
    'Wash your hands often, also after the toilet and after touching raw meat. Keep cold food cold and hot food hot. Put a label with the date on food you store. These rules are called HACCP. Allergies are serious: not sure what is in a dish? Always ask the chef.',
    ['Chef, zit er gluten in deze saus?', 'Chef, is there gluten in this sauce?'],
    'A guest asks if a dish has nuts in it. You are not sure. What do you do?',
    [
      'Say you will check, and ask the chef.',
      'Say "no", so the guest is happy.',
      'Tell the guest to pick out the nuts.',
    ],
    'For a guest with an allergy, a small mistake can be very dangerous. Checking with the chef is always right.',
    HOUSE_LINE,
  ),
  tipFor(
    'service',
    '🍽️',
    'Polite with guests',
    'Say "u" to guests, unless they ask you to say "je". Be friendly and calm, also when it is busy. Not sure about a question? Say that you will check. Tips (fooi): the rules differ per place. Ask how tips are shared where you work.',
    ['Een moment, ik kom zo bij u.', 'One moment, I will be with you soon.'],
    'It is very busy. A guest calls you, but you are carrying plates to another table. What do you do?',
    [
      'Look at the guest and say: "Een moment, ik kom zo bij u."',
      'Ignore the guest until you have time.',
      'Put the plates down on a free table and go to the guest first.',
    ],
    'A short sign shows the guest that you saw them. Then you can finish your task calmly.',
    NONE,
  ),
  tipFor(
    'cleaning',
    '🧴',
    'Read the label',
    'Every cleaning product has a label. Pictograms (small pictures in a red diamond) show the danger, for example for your skin, eyes or lungs. Read the label, or ask what the product is for and how to use it. Wear the gloves your employer gives you.',
    ['Waarvoor is dit middel?', 'What is this product for?'],
    'You get a new cleaning product. You cannot read the label well. What do you do?',
    [
      'Ask your supervisor what it is for and how to use it safely.',
      'Use a lot of it, then it works better.',
      'Just try it without gloves.',
    ],
    'The wrong product, or too much of it, can hurt your skin, eyes or lungs. Asking takes one minute.',
    HOUSE_LINE,
  ),
  tipFor(
    'cleansafe',
    '☣️',
    'Never mix products',
    'Never mix cleaning products, for example bleach and a toilet cleaner. This can make dangerous gases. Let fresh air in. Mopping a floor? Put down the wet-floor sign (Pas op, glad!), so nobody slips.',
    ['Ik zet het bordje neer. De vloer is nat.', 'I am putting the sign down. The floor is wet.'],
    'The toilet is very dirty. A colleague says: "Mix two products, then it works better." What do you do?',
    [
      'Do not mix. Use one product, as the label says.',
      'Mix them, but open a window.',
      'Mix them quickly and leave the room.',
    ],
    'Mixing products can make poisonous gas, even with a window open. One product, used well, is enough.',
    HOUSE_LINE,
  ),
];

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
      ['Kunt u in mijn telefoon spreken?', 'Can you speak into my phone?'],
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
      ['bibliotheek', 'de bibliotheek', 'the (public) library', '🏫'],
      ['taalhuis', 'het Taalhuis', 'the Taalhuis (free help with Dutch)', '🗨️', false],
      ['oefenen', 'oefenen', 'to practise', '🎯', false],
      ['luisteren', 'luisteren', 'to listen', '👂'],
      ['elkedag', 'elke dag', 'every day', '📆', false],
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

const toolsTips = [
  tipFor(
    'translate',
    '🌐',
    'Translation apps: smart, but check',
    'A translation app, like Google Translate, helps a lot. You can type, speak, or use conversation mode to talk with a colleague. With the camera you can translate signs, notes and instructions. On many phones, WhatsApp can also translate messages. Use your phone only where it is safe and allowed: not near machines or forklifts, and ask first (more in the lesson "Your phone at work"). Apps make mistakes. For important things, like your contract, a letter or a safety instruction, also ask a person to explain it. Do not take photos of confidential work papers without permission.',
    ['Mag ik mijn telefoon gebruiken om te vertalen?', 'May I use my phone to translate?'],
    'Your supervisor gives you a paper with safety instructions in Dutch. You understand only a few words. What do you do?',
    [
      'Ask if you may translate it with your phone, and ask your supervisor to explain the important parts.',
      'Say "ja, ja" and start working. You will understand it later.',
      'Take a photo and send it to a group chat of friends, so they can translate it.',
    ],
    'A translation app helps you understand quickly, but it can make mistakes. For safety, an explanation from a person is the best check. Work papers can be confidential, so do not share them without permission.',
    NONE,
  ),
  tipFor(
    'understood',
    '💬',
    'Check that you understood',
    'Your phone can turn speech into text (live captions): Live Transcribe on Android, Live Captions on iPhone. Check which languages your phone supports. You can also ask someone to write it down, to show it, or to speak slowly. Ask if there is an instruction with pictures, or in your language. Then say back what you understood: "Dus ik moet eerst …?" This is normal here, and it prevents mistakes.',
    ['Dus ik moet eerst de dozen tellen?', 'So I must count the boxes first?'],
    'A colleague explains how a new machine works. She speaks fast and you miss some words. What do you do?',
    [
      'Ask her to show it or write the steps down, then say back what you understood.',
      'Nod and say "ja, ja", so she does not lose time.',
      'Try the machine alone later and see what happens.',
    ],
    'Showing, writing and saying it back are quick checks. Your colleague can correct you before something goes wrong. Here, this is seen as careful, not as slow.',
    NONE,
  ),
  tipFor(
    'keeplearning',
    '📚',
    'Keep learning, a little every day',
    'A few minutes every day helps more than one long hour a week. Save new words from work in a notes app on your phone. Listen to easy Dutch, for example the NOS Jeugdjournaal (news for children) or a podcast in slow Dutch. Many public libraries have a Taalhuis: free help with Dutch, often with a taalcafé (a place to practise speaking) or a language buddy (taalmaatje). Colleagues often switch to English to help you. Ask them kindly to speak Dutch with you: most people like to help.',
    ['Praat maar Nederlands met mij, dan leer ik het sneller.', 'Just speak Dutch with me, then I learn it faster.'],
    'Your colleagues always switch to English when they talk to you. You want to learn Dutch. What do you do?',
    [
      'Thank them, and ask them kindly to speak Dutch with you, slowly.',
      'Say nothing. Dutch will come by itself.',
      'Stop talking with colleagues until your Dutch is perfect.',
    ],
    'Colleagues often switch to English to be kind. When you ask for Dutch, most of them are happy to help. Speaking a little every day at work is one of the fastest ways to learn.',
    NONE,
  ),
];

// ---- Course order of everything in this file ----

const byId = (id: string) => coreUnits.find((u) => u.id === id)!;

export const workUnits: Unit[] = [
  applyUnit,
  byId('u.contract'),
  byId('u.papers'),
  byId('u.pay'),
  { ...byId('u.house'), lessons: [...byId('u.house').lessons, ...houseMore] },
  socialUnit,
  byId('u.rights'),
  byId('u.leave'),
  ...laterUnits,
  ...sectorUnits,
];

const lessonOrder = [toolsUnit, ...workUnits].flatMap((u) => u.lessons.map((l) => l.id));

/** One "Zo werkt het hier" tip per lesson of toolsUnit and workUnits, in course order. */
export const workTips: CultureTip[] = [...toolsTips, ...coreTips, ...applyTips, ...houseTips, ...socialTips, ...laterTips, ...sectorTips].sort(
  (a, b) => lessonOrder.indexOf(a.lessonId) - lessonOrder.indexOf(b.lessonId),
);

/** Tip ids of this file that need a help-language translation (lesson items are counted with the course). */
export const workIds: string[] = workTips.flatMap((t) => [
  t.id,
  `${t.id}.b`,
  t.phrase.id,
  t.situation.id,
  ...t.options.map((o) => o.id),
  t.why.id,
]);
