import { ADVICE_LINE } from './adviceLine';
import type { CultureTip, SituationAsk } from './culture';
import type { ChatLine, Dialogue, Lesson, Unit } from './types';
import { sayingsTips, sayingsUnit } from './sayings';

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
/**
 * Closing line of the tips where the employer or agency may itself be the problem (exploitation,
 * housing pressure, dismissal, discrimination): never send the learner back to the employer.
 * FairWork (fairwork.nu) is the Dutch NGO for exploited (migrant) workers.
 */
export const ABUSE_LINE = 'General information. For your situation: ask the union, the Juridisch Loket or FairWork.';
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
        id: 'l.agency',
        title: 'Working through an agency',
        words: [
          { id: 'w.uitzendkracht', nl: 'de uitzendkracht', en: 'the temp worker', emoji: '👷' },
          { id: 'w.intercedent', nl: 'de intercedent', en: 'the agency contact person', emoji: '🧑‍💼' },
          { id: 'w.urenbriefje', nl: 'het urenbriefje', en: 'the timesheet', emoji: '🗒️' },
          { id: 'w.opdracht', nl: 'de opdracht', en: 'the assignment (the job at a company)', emoji: '📋', picture: false },
          { id: 'w.verlengen', nl: 'verlengen', en: 'to extend (make longer)', emoji: '⏩', picture: false },
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
          { id: 'w.ziekmelden', nl: 'ziekmelden', en: 'to call in sick', emoji: '🤒' },
          { id: 'w.betermelden', nl: 'betermelden', en: 'to say you are better', emoji: '🙂' },
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
      { id: 'c.findwork.o1', en: 'Ask for time to read it, or for a copy.', best: true },
      { id: 'c.findwork.o2', en: 'Sign quickly, so you do not lose the job.', best: false },
      { id: 'c.findwork.o3', en: 'Sign, and ask for a copy afterwards.', best: false },
    ],
    why: { id: 'c.findwork.w', en: 'Your contract says what you earn and what your rights are. A good employer gives you time to read it. You may ask about everything you do not understand.' },
  }),
  tip({
    id: 'c.contract',
    lessonId: 'l.contract',
    emoji: '🧪',
    title: 'Trial period and on-call work',
    body: 'A trial period (proeftijd) must be in writing. It is not allowed in a contract of 6 months or shorter. In a longer contract of less than 2 years, it is at most 1 month. In a contract of 2 years or longer, or a permanent one, it is at most 2 months. On-call worker (oproepkracht)? Your employer must usually call you at least 4 days before. If it is later, you do not have to come. A cao can make these 4 days shorter, but not shorter than 1 day. If they cancel your work later than that, you still get paid. If they call you for less than 3 hours of work, you usually get paid for 3 hours.',
    phrase: { id: 'c.contract.p', nl: 'Staat de proeftijd in mijn contract?', en: 'Is the trial period in my contract?' },
    situation: { id: 'c.contract.s', en: 'Your contract is for 3 months. It says: "Proeftijd: 1 maand". What do you do?', nl: 'Proeftijd: 1 maand' },
    options: [
      { id: 'c.contract.o1', en: 'Ask about it: this trial period does not count.', best: true },
      { id: 'c.contract.o2', en: 'Nothing. Every contract has a trial period.', best: false },
      { id: 'c.contract.o3', en: 'Sign and never ask, because the boss knows best.', best: false },
    ],
    why: { id: 'c.contract.w', en: 'A trial period in a contract of 6 months or shorter does not count. Asking calmly is normal. If the answer is not clear, get advice from the union or the Juridisch Loket.' },
  }),
  tip({
    id: 'c.agency',
    lessonId: 'l.agency',
    emoji: '🏢',
    title: 'Your agency is your employer',
    body: 'If you work through a temp agency (uitzendbureau), the agency is your employer, not the company where you work. Your contract and your pay come from the agency, and there is a cao for temp workers (uitzend-cao). You have a right to the same pay as workers of the company who do the same work. You also get holiday pay (vakantiegeld) and you build up days off. Keep your own list of the hours you worked, and check them on your payslip.',
    phrase: { id: 'c.agency.p', nl: 'Op mijn loonstrook staan te weinig uren.', en: 'My payslip shows too few hours.' },
    situation: { id: 'c.agency.s', en: 'Your payslip shows 32 hours, but you worked 38. What do you do?' },
    options: [
      { id: 'c.agency.o1', en: 'Show your own list of hours to the agency and ask to fix it.', best: true },
      { id: 'c.agency.o2', en: 'Say nothing, because it is only 6 hours.', best: false },
      { id: 'c.agency.o3', en: 'Ask the boss at the company where you work to pay the 6 hours.', best: false },
    ],
    why: { id: 'c.agency.w', en: 'The agency pays you, so the agency must correct the mistake. Your own list of dates and hours helps. Asking about it is your right.' },
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
      { id: 'c.bsn.o1', en: 'Never give your DigiD login. Check who he is first.', best: true },
      { id: 'c.bsn.o2', en: 'Send everything quickly, so you get the job.', best: false },
      { id: 'c.bsn.o3', en: 'Send only the passport photo, not your DigiD login.', best: false },
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
      { id: 'c.housing.o1', en: 'Ask the Juridisch Loket for advice first.', best: true },
      { id: 'c.housing.o2', en: 'Leave right away and forget about your deposit.', best: false },
      { id: 'c.housing.o3', en: 'Stay, and stop answering the agency.', best: false },
    ],
    why: { id: 'c.housing.w', en: 'Your rental contract has its own rules, separate from your job. Free advice helps you know your rights, for example about when you must leave and about your deposit.' },
  }, ABUSE_LINE),
  tip({
    id: 'c.payslip',
    lessonId: 'l.payslip',
    emoji: '🧾',
    title: 'Check your payslip',
    body: 'Bruto is your pay before tax. Netto is what you get in your bank account: bruto minus tax and premiums (loonheffing). Your employer must give you a payslip (loonstrook). Check the hours and the pay on every payslip, and write down the hours you work. Do you have two jobs? Use the tax credit (loonheffingskorting) at only one employer.',
    phrase: { id: 'c.payslip.p', nl: 'Ik heb meer uren gewerkt. Kun je het controleren?', en: 'I worked more hours. Can you check it?' },
    situation: { id: 'c.payslip.s', en: 'Your payslip shows fewer hours than you worked. What do you do?' },
    options: [
      { id: 'c.payslip.o1', en: 'Show your notes and ask your supervisor to check it.', best: true },
      { id: 'c.payslip.o2', en: 'Say nothing, because you do not want problems.', best: false },
      { id: 'c.payslip.o3', en: 'Wait one month: it will be right on the next payslip.', best: false },
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
    situation: { id: 'c.extra.s', en: 'A colleague says: "In May you get extra money from the boss." What is it?', ask: 'which' },
    options: [
      { id: 'c.extra.o1', en: 'Holiday pay: at least 8% of your gross wage.', best: true },
      { id: 'c.extra.o2', en: 'A present, only for the best workers.', best: false },
      { id: 'c.extra.o3', en: 'A 13th month: one extra month of pay, for everyone.', best: false },
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
      { id: 'c.health.o1', en: 'Say that you need your break now.', best: true },
      { id: 'c.health.o2', en: 'Keep going, and take a longer break later.', best: false },
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
  }, ABUSE_LINE),
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
    why: { id: 'c.leave.w', en: 'Your employer must usually say yes. They may only say no for a very good reason, and then in writing within 2 weeks. Asking early gives the best chance of a yes.' },
  }),
  tip({
    id: 'c.illness',
    lessonId: 'l.illness',
    emoji: '👩‍⚕️',
    title: 'Your rights when you are sick',
    body: 'When you are sick, your employer must pay at least 70% of your wage, for up to 2 years. A cao often gives more. There can be up to 2 waiting days (wachtdagen) without pay, but only if your contract or cao says so. Your boss may not ask what illness you have: you talk about your health and your work with the company doctor (bedrijfsarts). Call your employer when you are better (betermelden). In the first year you get at least the minimum wage. A temporary contract stops on its end date, also when you are sick. Working through an agency? If your contract has an agency clause (uitzendbeding), it can end when you get sick. Then ask UWV about the Ziektewet, or ask a union.',
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
/** A sentence; `alt`: other word orders that are also right when building it (Sentence.alt). */
type SentenceRow = [nl: string, en: string, alt?: string[]];

const lesson = (slug: string, title: string, words: WordRow[], sentences: SentenceRow[], [q, a]: [Pair, Pair]): Lesson => ({
  id: `l.${slug}`,
  title,
  words: words.map(([id, nl, en, emoji, picture]) => ({ id: `w.${id}`, nl, en, emoji, ...(picture === false ? { picture } : {}) })),
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

/** Closing line: ADVICE_LINE for rights and rules set by law, ABUSE_LINE where the employer may be the problem, HOUSE_LINE for company rules, '' for social norms. */
/** Dutch said aloud in a situation (a speaker plays it in the character's voice). */
const SAID: Record<string, string> = { interview: 'Heb je nog vragen?', hours: 'Morgen begin je om half negen.' };
/** The heading of a situation that does not ask "What do you do?" (see SituationAsk). */
const ASK: Record<string, SituationAsk> = { texting: 'which', diploma: 'which', hours: 'which', measures: 'whatsay', dates: 'which', body: 'whatsay', mychoice: 'whatsay', email: 'which', council: 'which' };

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
      situation: { id: `c.${slug}.s`, en: situation, ...(SAID[slug] ? { nl: SAID[slug] } : {}), ...(ASK[slug] ? { ask: ASK[slug] } : {}) },
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
      'Ask a question about the hours or training.',
      'Say no, because asking questions is not polite.',
      'Talk more about yourself, to show you are a good worker.',
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
      'Say no, and tell him to call the supervisor.',
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
      'Tell your supervisor and help fix it.',
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
    'At work, everyone is equal and everyone is treated with respect, whatever their gender, origin, religion or sexual orientation. You decide about physical contact. A handshake is common, but you may also greet in another polite way, like a nod and a smile, and explain it briefly. Jokes about someone’s origin or religion, threats, bullying (pesten) and unwanted sexual behaviour are not accepted. You can report it to your supervisor, or to a confidential adviser (vertrouwenspersoon) if your company has one.',
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
      'Say "Nee, dat wil ik niet" and ask him to delete it.',
      'Laugh and let him post it, so you are not difficult.',
      'Ask him to post it without your name.',
    ],
    'Nobody may put a video of you online without your permission. Saying no is normal, and your employer must act when colleagues mock each other online. If he posts it anyway, tell your supervisor.',
    NONE,
  ),
  tipFor(
    'boundaries',
    '🛑',
    'Crossing the line',
    'Grensoverschrijdend gedrag is behaviour that crosses someone’s boundary: unwanted touching, sexual remarks or jokes, staring, sending unwanted pictures, threats or shouting. It does not matter if the other person "meant it as a joke": what counts is how it feels to you. If you can, say clearly that you want it to stop. Write down what happened, when, and who saw it. Tell your supervisor, the confidential adviser (vertrouwenspersoon, if there is one) or HR. Your employer must protect you, and you may not be punished for reporting it. Did you see it happen to a colleague? Ask if they are okay, and offer to be a witness.',
    ['Ik wil dat je stopt.', 'I want you to stop.'],
    'Your team leader often puts his hand on your back and says you look "pretty". It makes you feel uncomfortable. He decides your shifts. What do you do?',
    [
      'Write it down and tell the vertrouwenspersoon.',
      'Say nothing, because he decides your shifts.',
      'Quit your job without telling anyone why.',
    ],
    'This is unwanted behaviour, and it is not your fault. A confidential adviser listens in confidence and helps you choose the next step. You are protected when you report it. You can also talk to HR.',
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
    // No picture for "het hoofd", "de rug" and "de buik": no emoji shows them well.
    lesson(
      'body',
      'Body and pain',
      [
        ['hoofd', 'het hoofd', 'the head', '👤', false],
        ['rug', 'de rug', 'the back (of your body)', '🧍', false],
        ['arm', 'de arm', 'the arm', '💪'],
        ['hand', 'de hand', 'the hand', '🖐️'],
        ['buik', 'de buik', 'the belly, the stomach', '😖', false],
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

const laterTips = [
  tipFor(
    'warning',
    '⛓️',
    'Signs of exploitation',
    'Watch out for these signs. Your employer keeps your passport or ID: that is not allowed, you keep your own ID and an employer may only make a copy. You get much less pay than agreed, or no payslip. You must pay off a big debt to the employer or agency. You must work extremely long hours, without a choice. Someone threatens you, or uses your housing to put pressure on you. This is not normal and not allowed.',
    ['Ik wil mijn paspoort terug.', 'I want my passport back.'],
    'On your first day, the agency says: "We keep your passport, for safety." What do you do?',
    [
      'Keep it yourself. They may make a copy.',
      'Give it, because the agency knows the rules.',
      'Give it, but take a photo of it first.',
    ],
    'Your passport is yours. Keeping it is a way to control workers. An employer only needs a copy for the files.',
    ABUSE_LINE,
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
      'Tell him to wait until his contract ends, then look for other work.',
    ],
    'Help is there for everyone who works in the Netherlands. A report can also be made without names.',
    ABUSE_LINE,
  ),
  tipFor(
    'callin',
    '☎️',
    'Calling your supervisor',
    'When you call your supervisor, say your name, the reason, and when you expect to come back. Sick? You only have to say that you are sick, not what illness you have. Call: do not only send a text, unless your company says a text is fine. No answer? Leave a voice message and try again.',
    ['Hallo, met Ali. Ik kan vandaag niet komen.', 'Hello, this is Ali. I cannot come today.'],
    'Your child is sick and you cannot come to work. Your company wants you to call. What do you do?',
    [
      'Call your supervisor before your shift.',
      'Send a short text at the start of your shift.',
      'Ask your neighbour to call for you.',
    ],
    'A call is clear and quick, and your supervisor can ask questions. Saying when you expect to be back helps them plan. Also say your name and the reason.',
    HOUSE_LINE,
  ),
  tipFor(
    'texting',
    '💬',
    'Messages to work: short and polite',
    'Keep messages to work short and polite. Say who you are and what is happening, and end with a greeting. For example: "Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali". Check your roster (rooster) in the app often. Reply to shift requests in time. To swap a shift, your supervisor or the planner must agree first, so ask: "Mag ik mijn dienst ruilen?"',
    ['Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali', 'Hi Mark, I am 10 minutes late. Sorry! Regards, Ali'],
    'You will be 10 minutes late. Which message to your supervisor is best?',
    [
      '"Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali"',
      '"Sorry, ik ben er zo!" (without your name, without the time).',
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
      'Ask the employer or agency to help you get it.',
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
      'The employer pays it, and it is working time.',
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
    'Register with a family doctor (huisarts) near your home. Do you need urgent care in the evening, at night or in the weekend? Call the huisartsenpost. Call 112 only in an emergency: danger to life, fire, or a crime happening now. You get medicines at the pharmacy (apotheek).',
    ['Ik wil me inschrijven bij de huisarts.', 'I want to register with the GP.'],
    'It is Saturday night. Your child has a high fever, but is awake and breathing normally. What do you do?',
    ['Call the huisartsenpost.', 'Call 112.', 'Wait until Monday and do nothing.'],
    'The huisartsenpost helps with urgent care outside office hours. 112 is for emergencies: danger to life, fire, or a crime happening now.',
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
      'Arrange health insurance quickly.',
      'Wait: your insurance from home is enough.',
      'Use the insurance card of a friend.',
    ],
    'Without insurance, a doctor or hospital can cost a lot, and you can get a fine. Arranging it quickly protects you. Your employer or agency can help you.',
    ADVICE_LINE,
  ),
  tipFor(
    'body',
    '🤕',
    'Say what happened and where it hurts',
    'At the doctor, say what happened and where it hurts. For example: "Ik ben gevallen. Mijn arm doet pijn." Also say how long you have had the pain. You do not have to guess what you have: the doctor checks that. Did it happen at work? Tell your supervisor the same day.',
    ['Ik ben gevallen. Mijn arm doet pijn.', 'I fell. My arm hurts.'],
    'You lifted a heavy box at work. Now your back hurts a lot. You are at the family doctor (huisarts). What do you say?',
    [
      'Where it hurts, and what happened: you lifted a heavy box.',
      'Only that you feel bad, nothing more.',
      'The name of an illness you found on the internet.',
    ],
    'When you say where it hurts and what happened, the doctor understands you faster. The doctor checks what it is. Did it happen at work? Tell your supervisor too.',
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
      'Ask someone you trust to help you read it.',
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
      'Ask your supervisor about the company or cao rules.',
      'Say nothing, because it is probably not for you.',
      'Tell your supervisor: the law says you must get it too.',
    ],
    'Travel allowance depends on the employer or the cao. Asking about it is normal and helps you know your rights.',
    ADVICE_LINE,
  ),
  tipFor(
    'ww',
    '🛟',
    'Unemployment benefit (WW)',
    'Lost your job? Apply for WW at UWV as soon as possible, within a week after your first day without work. You usually need to have worked at least 26 of the last 36 weeks. If you quit your job yourself, you usually do not get WW. Register as a job seeker on werk.nl.',
    ['Ik wil WW aanvragen. Wat moet ik doen?', 'I want to apply for unemployment benefit. What must I do?'],
    'You are angry about your work and want to quit today. What is wise?',
    [
      'Get advice first, before you quit.',
      'Quit today: you will get WW anyway.',
      'Stop coming to work without saying anything.',
    ],
    'Quitting can cost you your benefit. Talking first with your supervisor, the union or the Juridisch Loket can help you find a better way.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Days off you did not use and your holiday pay are usually paid out with it ⚖️ (BW 7:641 lid 1 uitbetaling niet-genoten vakantiedagen bij einde dienstverband; WML art. 15-17 vakantiebijslag).
  // ⚖️ check: Housing, health insurance or a van through the agency can stop at the same time ⚖️ (collectieve zorgverzekering via werkgever/bureau eindigt; huurovereenkomst is los van de arbeidsovereenkomst, ABU/NBBU-cao, SNF).
  // ⚖️ check: Living or working in the Netherlands, you usually must have health insurance ⚖️ (Zorgverzekeringswet art. 2).
  // ⚖️ check: Moving, or leaving the Netherlands? Tell the gemeente ⚖️ (Wet BRP art. 2.39 en 2.43: verhuizing en vertrek uit Nederland melden).
  tipFor(
    'jobends',
    '🧳',
    'Your job ends: what else stops?',
    'When your job ends, check your final pay (eindafrekening). Days off you did not use and your holiday pay are usually paid out with it. Housing, health insurance or a van through the agency can stop at the same time. Arrange your own health insurance in time. Your rental contract has its own rules: ask for advice before you leave the house. Moving, or leaving the Netherlands? Tell the gemeente.',
    ['Wanneer krijg ik mijn eindafrekening?', 'When do I get my final pay?'],
    'Your job ends on Friday. Your health insurance goes through the agency. What do you do?',
    [
      'Ask when it stops and arrange your own in time.',
      'Nothing: the insurance goes on by itself.',
      'Wait until you get sick, and arrange it then.',
    ],
    'Insurance through the agency often stops when your job stops. When you live or work in the Netherlands, you usually must have health insurance. Arranging it in time keeps you covered.',
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
      'Do not pay. Look for a real agency.',
      'Pay, because a good job is worth it.',
      'Pay half now and the rest later.',
    ],
    'Asking money for a job is a warning sign. A temp agency may not charge you for finding work. You can also look for work on werk.nl.',
    ABUSE_LINE,
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
      'Go, and ask a colleague afterwards what you missed.',
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
      'Knock, wait, and say who you are and why.',
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
    ['Waar is dit middel voor?', 'What is this product for?'],
    'You get a new cleaning product. You cannot read the label well. What do you do?',
    [
      'Ask how you can use it safely.',
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
      'Do not mix them. Use one product.',
      'Mix them, but open a window.',
      'Mix them quickly and leave the room.',
    ],
    'Mixing products can make poisonous gas, even with a window open. One product, used well, is enough.',
    HOUSE_LINE,
  ),
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
      ['houdbaarheidsdatum', 'de houdbaarheidsdatum', 'the best-before date', '📅', false],
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
]);

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
      ['tellen', 'tellen', 'to count', '🔢', false],
    ],
    [
      ['Het kost zes euro vijftig.', 'It costs six euros fifty.'],
      ['Deze doos weegt tien kilo.', 'This box weighs ten kilos.'],
      ['Ik heb veertig dozen geteld.', 'I counted forty boxes.'],
    ],
    [['Hoe lang is die plank?', 'How long is that plank?'], ['Precies twee meter.', 'Exactly two metres.']],
  ),
]);

const shopNumbersTips = [
  tipFor(
    'shelves',
    '📅',
    'Old to the front',
    'When you stock the shelves, look at the date on the products. Put the products with the soonest date at the front, and the new ones at the back. Customers take from the front, so the old products go first. Is a product past its date, or damaged? Take it off the shelf and ask what to do with it. Keep the aisles free of boxes and carts.',
    ['Wat doe ik met producten over de datum?', 'What do I do with products past their date?'],
    'You are putting new milk on the shelf. At the front there is still milk with a sooner date. What do you do?',
    [
      'Put the new milk at the back, and the old milk at the front.',
      'Put the new milk at the front, because it is fresher.',
      'Throw the old milk away, so the shelf looks nice.',
    ],
    'Customers take from the front. When the old products go first, less food is thrown away.',
    HOUSE_LINE,
  ),
  tipFor(
    'checkout',
    '🪪',
    'ID for alcohol and tobacco',
    'You may not sell alcohol or tobacco to anyone under 18: this is the law. Not sure how old a customer is? Ask for their ID. Many shops ask for ID from everyone who looks younger than 25. No ID, or under 18? Then you do not sell it, and you stay polite.',
    ['Zonder ID mag ik dit niet verkopen.', 'Without ID I may not sell this.'],
    'A young man wants to buy beer. He looks about 17. He says he is 19, but he has no ID with him. What do you do?',
    [
      'Say you cannot sell it without ID.',
      'Sell it, because he says he is 19.',
      'Sell it, but only one can.',
    ],
    'Without ID you cannot know his age. Selling alcohol to someone under 18 is against the law, and the shop can get a fine.',
    HOUSE_LINE,
  ),
  tipFor(
    'hours',
    '🕧',
    'Half acht is 7:30',
    'In Dutch, "half" counts to the next hour: half acht is 7:30, not 8:30. Kwart over acht is 8:15, and kwart voor acht is 7:45. Check your hours yourself: the end time minus the start time, minus the break. A break is often not paid. Write down your hours every day.',
    ['Half acht? Dus een half uur voor acht?', 'Half acht? So half an hour before eight?'],
    'Your supervisor says: "Morgen begin je om half negen." What time do you start tomorrow?',
    ['At 8:30.', 'At 9:30.', 'At 8:00.'],
    '"Half negen" means half an hour before nine: 8:30. Many newcomers think it is 9:30, and come an hour late.',
    NONE,
  ),
  tipFor(
    'measures',
    '🔢',
    'Count smart, measure, do not guess',
    'Many boxes to count? Count the boxes in one layer, and the number of layers. Then multiply: 8 boxes in a layer and 5 layers is 40 boxes. With cleaning products, measure the amount the label says. More is not better: it can hurt your skin and costs money. Not sure about a number? Count again, or ask.',
    ['Ik heb het twee keer geteld.', 'I counted it twice.'],
    'A pallet has 6 layers. Each layer has 8 boxes. Your supervisor asks how many boxes there are. What do you say?',
    ['48 boxes.', '14 boxes.', 'About 50, I think.'],
    '6 layers of 8 boxes is 6 times 8: 48. Counting one layer and multiplying is quick, and a real number is better than a guess.',
    HOUSE_LINE,
  ),
];

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
      ['automatisch', 'automatisch', 'automatic, by itself', '⚙️', false],
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

const aiTips = [
  tipFor(
    'aihelp',
    '🤖',
    'AI helps, a person checks',
    'AI apps and chatbots, like ChatGPT, can translate, explain a letter or help you write a message. That is useful. But AI sometimes makes mistakes, and still sounds very sure. For important things, like your contract, your pay, medicine or safety, always check the answer with a person: your supervisor, HR or the Juridisch Loket.',
    ['Klopt dit? Kunt u even meekijken?', 'Is this right? Could you have a look with me?'],
    'You ask a chatbot about your contract. It says you get no holiday pay. What do you do?',
    [
      'Ask HR or the Juridisch Loket to check it.',
      'Believe it: the chatbot sounds very sure.',
      'Say nothing and forget about it.',
    ],
    'A chatbot can be wrong about rules and contracts. In the Netherlands almost every worker gets holiday pay. A person who knows the rules can check it.',
    NONE,
  ),
  tipFor(
    'aiprivate',
    '🔐',
    'Think before you type',
    'What you type into a chatbot can be saved and used by the company that makes it. So never type your BSN, a password or your bank details. Do not put in names or photos of customers, patients or colleagues, or papers from work. Many employers have rules about AI. Ask first if you may use it for your work.',
    ['Mag ik hier AI voor gebruiken?', 'May I use AI for this?'],
    'You want a chatbot to write a report about a customer. The report has the name and address of the customer. What do you do?',
    [
      'Ask first, and leave the name and address out.',
      'Put everything in the chatbot: it is faster.',
      'Send the report to a friend to check it.',
    ],
    'Names and addresses are personal data. They may not just go to another company. Your employer knows which apps are allowed.',
    HOUSE_LINE,
  ),
  tipFor(
    'aifake',
    '🎭',
    'Fake voices and videos',
    'With AI, criminals can copy a voice and make fake photos and videos. A call or message that sounds like your boss, your bank or someone in your family can be fake. Be careful when there is haste, money and a new number. Hang up, and call back yourself on the number you know. A real bank, employer or the police never asks for your codes.',
    ['Ik hang op en bel zelf terug.', 'I hang up and call back myself.'],
    'Your phone rings. A voice that sounds just like your boss says: "Pay this bill now, it is urgent." What do you do?',
    [
      'Hang up and call your boss back yourself.',
      'Pay quickly: it is your boss.',
      'Give your bank code, so your boss can pay it.',
    ],
    'A voice can be copied with AI. Haste and money together are a warning sign. Calling back on a number you know is a quick and safe check.',
    NONE,
  ),
  tipFor(
    'aiplan',
    '⚖️',
    'Who decided this?',
    'More and more companies let an app or a computer make the roster, count your speed with the scanner, or decide things. You may ask which information about you is collected. Is there a big decision about you, like fewer hours, a warning or dismissal? Ask who decided it. When a computer made such a decision on its own, you may ask a person to look at it again and explain it. Write down your own hours.',
    ['Kan een mens hier even naar kijken?', 'Can a person have a look at this?'],
    'The planning app gives you far fewer hours next month. Nobody tells you why. What do you do?',
    [
      'Ask a person to explain it.',
      'Accept it: the app is always right.',
      'Ask the chatbot in the app why.',
    ],
    'Apps make mistakes, and they do not know everything about you. You may ask for an explanation, and a person can look at it again.',
    ADVICE_LINE,
  ),
];

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
]);

const kasTips = [
  // ⚖️ check: With piece rate you must still earn at least the minimum wage for every hour you
  // work ⚖️ (Wet minimumloon en minimumvakantiebijslag, art. 12 and the rules on piece rate;
  // amounts: rijksoverheid.nl, never in the text).
  tipFor(
    'harvest',
    '⏱️',
    'Tempo and piece rate',
    'In a greenhouse you often work at a set pace (tempo). Some employers pay per crate, per row or per kilo: piece rate (stukloon). Even with piece rate, you must earn at least the minimum wage for every hour you work. Check the amount on rijksoverheid.nl. Write down your hours and your crates every day, and compare them with your payslip. Working fast is good, but working safely comes first.',
    ['Hoeveel kratten heb ik vandaag gedaan?', 'How many crates did I do today?'],
    'You are paid per crate. At the end of the week, your pay is much lower than the minimum wage for the hours you worked. What do you do?',
    [
      'Show your employer your own list of hours and crates.',
      'Say nothing and work faster next week, so you earn more.',
      'Accept it: with piece rate, a low pay is normal.',
    ],
    'With piece rate you must still get at least the minimum wage for every hour you worked. Your own list of hours and crates helps you show what you did. If it is not fixed, ask for help.',
    ABUSE_LINE,
  ),
  // ⚖️ check: After spraying, nobody may go into the greenhouse until the waiting time is over ⚖️
  // (re-entry period on the label, Wet gewasbeschermingsmiddelen en biociden; Arbobesluit,
  // hoofdstuk 4).
  // ⚖️ check: The employer must take measures against heat ⚖️ (Arbobesluit, art. 6.1).
  tipFor(
    'greensafe',
    '🌡️',
    'Heat and sprays',
    'In a greenhouse it can get very hot, also in spring. Drink water often, also before you feel thirsty, and take your breaks in a cool place. Do you feel dizzy or sick, or do you get a headache? Stop and tell someone. Plants are sometimes sprayed with chemicals (spuitmiddelen). A greenhouse that was just sprayed often has a sign at the door. Do not go in until your supervisor says it is safe again.',
    ['Mag ik al in deze kas werken?', 'May I already work in this greenhouse?'],
    'A greenhouse was sprayed this morning. There is a sign on the door. A colleague says: "Come on, it is only for a moment." What do you do?',
    [
      'Stay outside and ask when it is safe.',
      'Go in quickly and hold your breath.',
      'Go in, and wash your hands well afterwards.',
    ],
    'Crop sprays can hurt your skin, eyes and lungs, also when you smell nothing. After spraying there is a waiting time before people may go in again. Your supervisor knows when it is over.',
    ADVICE_LINE,
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
      'Ask if you may use a translation app, and ask for an explanation.',
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
      'Ask her to show it or write it down, and say it back.',
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
      'Thank them, and ask them to speak Dutch with you.',
      'Say nothing. Dutch will come by itself.',
      'Answer in English too, because that is more polite.',
    ],
    'Colleagues often switch to English to be kind. When you ask for Dutch, most of them are happy to help. Speaking a little every day at work is one of the fastest ways to learn.',
    NONE,
  ),
];

// ---- Numbers and details (30 October 2026): a basis unit right before "Time and schedule",
// spliced in by curriculum.ts (A1 core of the Taalprofiel werk: give your details, spell your
// name, days and dates). "het adres" is taught in l.bsn (w.adres). "doorgeven" (w.doorgeven,
// l.privacy), "de Belastingdienst" (w.belastingdienst, l.letters) and "de datum" (w.datum,
// l.kitchen) are already words of other lessons: here they come in a sentence or a chat. ----

export const dataUnit = unit('data', 'Numbers and details', 'Getallen en gegevens', '📇', '#3d7f8c', [
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
      ['maandag', 'maandag', 'Monday', '📅', false],
      ['week', 'de week', 'the week', '🗓️', false],
      ['maand', 'de maand', 'the month', '🌙', false],
      ['volgendeweek', 'volgende week', 'next week', '⏭️', false],
      ['vorigeweek', 'vorige week', 'last week', '⏮️', false],
      ['totenmet', 'tot en met', 'up to and including (the last day counts too)', '↔️', false],
    ],
    [
      ['Ik kan maandag tot en met donderdag.', 'I can work Monday to Thursday (Thursday too).'],
      ['Volgende week werk ik vier dagen.', 'Next week I work four days.', ['Ik werk volgende week vier dagen.']],
      ['Vorige week werkte ik veertig uur.', 'Last week I worked forty hours.', ['Ik werkte vorige week veertig uur.']],
    ],
    [['Welke datum is het vandaag?', 'What is the date today?'], ['Het is maandag drie juni.', 'It is Monday, 3 June.']],
  ),
]);

const dataTips = [
  tipFor(
    'details',
    '🔠',
    'Your details: give them right',
    'At the start of a job, you give your details: your name, address, phone number, date of birth and BSN. Spell your name slowly, letter by letter. Then check your name on your contract and your payslip. A mistake in your name or BSN can give problems with your pay or tax. New address or phone number? Tell your employer.',
    ['Ik spel het even: A, L, I.', 'Let me spell it: A, L, I.'],
    'On the phone, the agency writes down your last name. You hear that they write it wrong. What do you do?',
    [
      'Spell your name slowly and ask them to read it back.',
      'Say nothing: a small mistake in your name does not matter.',
      'Hang up, and hope they find the mistake later.',
    ],
    'Your name must be the same on your contract, your payslip and your ID. Then your pay and your tax go right. Spelling and reading back is a quick check.',
    NONE,
  ),
  tipFor(
    'dates',
    '📅',
    'Dates: the day comes first',
    'In Dutch, the day comes before the month: 3-6 is 3 June, not 6 March. "Tot en met" means that the last day counts too. Days and months start with a small letter: maandag, juni. Not sure about a date? Ask, and say it back.',
    ['Bedoel je drie juni?', 'Do you mean 3 June?'],
    'Your roster says: "Vrij: 3-6 tot en met 5-6". When are you free?',
    ['On 3, 4 and 5 June.', 'On 3 and 4 June only.', 'From 6 March to 6 May.'],
    'The day comes first, then the month: 3-6 is 3 June. "Tot en met" means that 5 June counts too, so you are free for three days.',
    NONE,
  ),
];

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

// ---- Leave and sickness: lesson 3 (30 October 2026) ----
// Children and work. "het calamiteitenverlof" (w.calamiteitenverlof, l.leave) and "doorbetalen"
// (w.doorbetalen, l.illness) are words of the other lessons of this unit: here they come in the
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

const moreTips = [
  // ⚖️ check: Do you have to do the civic integration (inburgering)? ⚖️ (Wet inburgering 2021 art. 3: inburgeringsplicht; de gemeente maakt een persoonlijk plan, art. 14).
  // ⚖️ check: Not sure if you may work here? Check it before you start, for example at the IND, UWV or VluchtelingenWerk ⚖️ (Wet arbeid vreemdelingen art. 2: tewerkstellingsvergunning; EU-burgers vrij).
  tipFor(
    'permit',
    '🧭',
    'Work and integration',
    'Do you have to do the civic integration (inburgering)? Tell your employer, and tell the gemeente that you work. Ask early if your language classes can fit around your roster. Not sure if you may work here? Check it before you start, for example at the IND, UWV or VluchtelingenWerk. Do they ask you to register as self-employed (zzp’er) for this job? Ask for advice first.',
    ['Ik heb op dinsdag taalles. Kan mijn rooster daar rekening mee houden?', 'I have a language class on Tuesday. Can my roster take that into account?'],
    'You start a new job. Your language class is on Tuesday mornings, but your roster has you working on Tuesdays. What do you do?',
    [
      'Tell your supervisor and ask to change the roster.',
      'Skip the language class, because work comes first.',
      'Stay home on Tuesdays without saying anything.',
    ],
    'Your integration is a duty too. Many employers help when they know it early. The gemeente can also help you fit your plan around your work.',
    ADVICE_LINE,
  ),
  // ⚖️ check: For the first hours or days you can take emergency leave (calamiteitenverlof), and your employer keeps paying you ⚖️ (Wazo art. 4:1 en 4:5: calamiteiten- en ander kort verzuimverlof, met behoud van loon).
  // ⚖️ check: Does your child need care for longer? Then you can ask for care leave (zorgverlof) ⚖️ (Wazo art. 5:1: kortdurend zorgverlof).
  // ⚖️ check: Pregnant? Your employer may not fire you because of that ⚖️ (BW 7:670 lid 2: opzegverbod tijdens zwangerschap; AWGB/WGB).
  // ⚖️ check: Ask in time about pregnancy leave and parental leave (ouderschapsverlof) ⚖️ (Wazo art. 3:1 zwangerschaps- en bevallingsverlof; art. 6:1 ouderschapsverlof).
  tipFor(
    'kids',
    '🧒',
    'Your child is sick',
    'Is your child suddenly sick? Tell your employer right away. For the first hours or days you can take emergency leave (calamiteitenverlof), and your employer keeps paying you. Does your child need care for longer? Then you can ask for care leave (zorgverlof). Pregnant? Your employer may not fire you because of that. Ask in time about pregnancy leave and parental leave (ouderschapsverlof).',
    ['Mijn kind is ziek. Kan ik vandaag eerder weg?', 'My child is sick. Can I leave early today?'],
    'The daycare (kinderopvang) calls you at work. Your child has a fever and must go home. What do you do?',
    [
      'Tell your supervisor, and ask for emergency leave.',
      'Leave without a word, and explain it tomorrow.',
      'Stay at work, and let your child wait until your shift ends.',
    ],
    'A sick child is an emergency at home. When you tell your supervisor first, they can plan the work. Emergency leave is for moments like this.',
    ADVICE_LINE,
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
      ['kapot', 'kapot', 'broken', '🪫', false],
      ['opslot', 'op slot', 'locked', '🔐', false],
      ['bijzonderheid', 'de bijzonderheid', 'the special point (something that went differently)', '❗', false],
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
      ['slijpen', 'slijpen', 'to grind (make metal smooth or cut it with a machine)', '⚙️', false],
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
      ['stroom', 'de stroom', 'the power, electricity', '⚡', false],
      ['kabel', 'de kabel', 'the cable', '➰', false],
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
      ['hefbrug', 'de hefbrug', 'the car lift (it lifts the car up)', '🏗️', false],
      ['lek', 'lek', 'flat, leaking (air or water gets out)', '💧', false],
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
      ['onderdeel', 'het onderdeel', 'the part (of a car or machine)', '⚙️', false],
    ],
    [
      ['Is de klant akkoord met de kosten?', 'Does the customer agree to the costs?'],
      ['Dit onderdeel is kapot.', 'This part is broken.'],
      ['Mag ik een proefrit maken?', 'May I take a test drive?'],
    ],
    [['De remmen zijn ook slecht. Doe je die meteen?', 'The brakes are bad too. Will you do them right away?'], ['Eerst bel ik de klant. Hij moet akkoord zijn.', 'First I call the customer. He must agree.']],
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
      ['cijfer', 'het cijfer', 'the mark, the grade', '🔟', false],
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
      ['boete', 'de boete', 'the fine (money you must pay as a punishment)', '💸', false],
      ['bezwaar', 'het bezwaar', 'the objection (you say in writing that you do not agree)', '✋', false],
      ['rechter', 'de rechter', 'the judge', '👩‍⚖️', false],
      ['advocaat', 'de advocaat', 'the lawyer', '💼', false],
      ['wet', 'de wet', 'the law', '📜', false],
    ],
    [
      ['Ik heb een boete gekregen.', 'I got a fine.'],
      ['Ik wil bezwaar maken.', 'I want to object.'],
      ['Mag ik een advocaat?', 'May I have a lawyer?'],
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
      ['uitloggen', 'uitloggen', 'to log out', '🚪', false],
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

/** Lessons added at the end of an existing unit (Entree, 30 October 2026). */
const entreeMore: Record<string, Lesson[]> = {
  'u.grow': [
    lesson(
      'mychoice',
      'What I am good at',
      [
        ['goedin', 'goed in', 'good at', '🌟', false],
        ['kiezen', 'kiezen', 'to choose', '🤔', false],
        ['beroep', 'het beroep', 'the profession, the kind of work', '🧑‍🍳', false],
        ['bijbaan', 'de bijbaan', 'the side job (a small job next to school)', '🛵', false],
        ['nauwkeurig', 'nauwkeurig', 'careful and exact', '🎯', false],
        ['meeloopdag', 'de meeloopdag', 'the job shadow day (a day you join someone at work)', '👣', false],
      ],
      [
        ['Ik ben goed met mijn handen.', 'I am good with my hands.'],
        ['Ik werk graag met mensen.', 'I like working with people.'],
        ['Mag ik een dag meelopen?', 'May I join you for a day, to see the work?'],
      ],
      [['Waar ben je goed in?', 'What are you good at?'], ['Ik ben nauwkeurig. Thuis zorg ik voor mijn moeder.', 'I am careful and exact. At home I care for my mother.']],
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
        ['versturen', 'versturen', 'to send', '📤', false],
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
        ['Ik eet altijd eerst een ontbijt.', 'I always eat breakfast first.'],
        ['In de pauze ga ik even wandelen.', 'In the break I go for a short walk.'],
      ],
      [['Wil je een pilletje? Dan blijf je wakker.', 'Do you want a pill? Then you stay awake.'], ['Nee, dank je. Ik werk niet onder invloed.', 'No, thank you. I do not work under the influence.']],
    ),
  ],
};

const entreeTips = [
  tipFor(
    'workorder',
    '📝',
    'Read first, then start',
    'Before you start, read the work order (werkbon) or the task in the app. Check the address, the task and the number of things. Something is not clear? Ask before you start, not halfway. Then put your tools and materials ready. That saves time, and you make fewer mistakes.',
    ['Er staan tien dozen op de werkbon. Klopt dat?', 'The work order says ten boxes. Is that right?'],
    'Your work order says: paint room 3. Your colleague says it is room 5. What do you do?',
    [
      'Ask your supervisor which room is right.',
      'Paint room 3, because the paper says so.',
      'Paint both rooms, then you are sure.',
    ],
    'When two things do not match, you check before you start. A short question costs less time than doing the work again.',
    HOUSE_LINE,
  ),
  tipFor(
    'handover',
    '✅',
    'Say what is done, and what is not',
    'Your work is not done when you stop. First tidy up your place and your tools. Then ask someone to check your work. Tell your supervisor what is done and what is not done. Did something go wrong, or is something broken? Say it now, not tomorrow. Signing off is part of your work.',
    ['Kamer vier is nog niet klaar. De deur zat op slot.', 'Room four is not done yet. The door was locked.'],
    'You cleaned five rooms. Room 4 was locked, so you could not clean it. Your shift ends. What do you do?',
    [
      'Tell your supervisor that room 4 is not done, and why.',
      'Go home: room 4 was locked, so it is not your fault.',
      'Write "all done" on the list, because you did your best.',
    ],
    'Your supervisor plans the work. When they know that room 4 is not done, they can send someone else. Then no customer finds a dirty room.',
    HOUSE_LINE,
  ),
  // ⚖️ check: When it is very loud, your employer must give you hearing protection ⚖️ (Arbobesluit,
  // hoofdstuk 6 afdeling 4 "Geluid", art. 6.8: gehoorbescherming vanaf 80 dB(A) beschikbaar, vanaf
  // 85 dB(A) dragen; no numbers in the text).
  // ⚖️ check: For welding or grinding near things that can burn there are extra rules ("heet werk")
  // ⚖️ (Arbowet art. 3 and 5: RI&E; in practice a heetwerkvergunning, Verbond van Verzekeraars
  // "Vereisten Heet Werk"; company rules differ).
  tipFor(
    'workshop',
    '🥽',
    'Eyes, ears and fire',
    'Grinding, sawing and drilling make sparks, small bits and a lot of noise. Wear safety glasses and hearing protection, also for a short job. When it is very loud, your employer must give you hearing protection. Sparks can start a fire. For welding, or grinding near things that can burn, there are extra rules (heet werk): ask before you start. After your work, clean up the bits of metal.',
    ['Ik ga slijpen. Waar is de gehoorbescherming?', 'I am going to grind. Where is the hearing protection?'],
    'You must grind one small piece of metal. It takes one minute. Your safety glasses are in the other room. What do you do?',
    [
      'Get your glasses first, also for one minute.',
      'Grind with your eyes half closed, it is quick.',
      'Hold your other hand in front of your eyes.',
    ],
    'A spark or a bit of metal in your eye can hurt your eye for good. That can happen in one second. Safety glasses help, also for a short job.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Only people with the right training may work on electrical installations, and a
  // trained person makes it safe (spanningsloos) first ⚖️ (Arbobesluit art. 3.4; NEN 3140 and
  // NEN-EN 50110: werken door een vakbekwaam of voldoende onderricht persoon, aangewezen door de
  // werkgever).
  tipFor(
    'power',
    '🔌',
    'Electricity: never just like that',
    'Never work on something that has power on it (onder spanning). First a trained colleague makes it safe: they switch off the power and check it. Only people with the right training may do this. Do you see a broken cable or plug? Do not use it, and tell your supervisor right away. Not sure if the power is off? Then it is on.',
    ['Ik zie een kapotte kabel. Wie kan ernaar kijken?', 'I see a broken cable. Who can look at it?'],
    'You must hang a lamp. A colleague says: "The power is off, I think." What do you do?',
    [
      'Ask a trained colleague to check that the power is off.',
      'Start, but touch the wires only with gloves on.',
      'Touch the wire quickly to feel if there is power.',
    ],
    '"I think" is not enough with electricity. A shock can kill you. A trained colleague checks that there is no power, and then you can start.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Old oil, batteries and cleaning products are dangerous waste: collected apart, never
  // in the normal bin or the drain ⚖️ (Wet milieubeheer, hoofdstuk 10: gevaarlijke afvalstoffen;
  // Omgevingswet / Besluit activiteiten leefomgeving for garages; Regeling beheer batterijen en
  // accu's).
  // ⚖️ check: Never under a car that only stands on a jack ⚖️ (a work instruction, not a law:
  // Arbobesluit art. 7.2 on safe work equipment, the RI&E and the branch's work instructions).
  tipFor(
    'garage',
    '🛢️',
    'Safe under a car',
    'Never go under a car that only stands on a jack. The car must stand firmly on the lift or on stands. Spilled oil makes the floor slippery: clean it up right away. Old oil, batteries and cleaning products are dangerous waste. They go to a special place, never in the normal bin or down the drain.',
    ['Er ligt olie op de vloer. Ik ruim het op.', 'There is oil on the floor. I am cleaning it up.'],
    'You need to look under a car. The car stands on a jack only. Your colleague says: "It is fine, just be quick." What do you do?',
    [
      'Wait until the car stands on the lift or on stands.',
      'Go under it quickly, and keep your legs outside.',
      'Go under it, and ask your colleague to hold the car.',
    ],
    'A jack can slip. A car is very heavy, and under it you cannot get away fast. Stands or a lift keep the car in its place.',
    HOUSE_LINE,
  ),
  // ⚖️ check: The customer must agree to extra work and its costs first ⚖️ (BW 7:755: meerwerk;
  // in garages also the BOVAG/Consumentenbond conditions: no extra work without the customer's OK).
  // ⚖️ check: A test drive only with permission and a valid driving licence ⚖️ (Wegenverkeerswet
  // 1994 art. 107: driving without a valid licence is not allowed).
  tipFor(
    'carjob',
    '🧾',
    'Extra work? Ask the customer first',
    'Do you find more problems than the work order says? Do not just fix them. The customer must agree to the extra work and the costs first. Your supervisor or the service desk calls the customer. A test drive is only with permission, and only with a valid driving licence. Write down what you did and which parts you used.',
    ['Ik zie nog een probleem. Wie belt de klant?', 'I see another problem. Who calls the customer?'],
    'You change the oil of a car. You see that the brakes are bad too. The car must be ready in one hour. What do you do?',
    [
      'Tell your supervisor, so that the customer can be called.',
      'Fix the brakes too, the customer will be happy.',
      'Say nothing: the brakes are not on the work order.',
    ],
    'The customer pays, so the customer decides. Without their OK, the garage may not just do extra work. Bad brakes are dangerous, so telling someone matters.',
    ADVICE_LINE,
  ),
  // ⚖️ check: Before the placement starts, the student, the school and the company sign the POK
  // (praktijkovereenkomst) ⚖️ (WEB art. 7.2.8: praktijkovereenkomst between deelnemer, instelling
  // and leerbedrijf; the leerbedrijf is recognised by SBB, WEB art. 7.2.10).
  // ⚖️ check: Without a signed POK, the placement may not count for your diploma ⚖️ (WEB art. 7.2.8).
  // ⚖️ check: Sick: call the company and tell the school too ⚖️ (school rules: the OER and the
  // stagereglement, not a law; they differ per school).
  tipFor(
    'placement',
    '🎒',
    'Sign first, then start',
    'In Entree you learn a lot at a company: your work placement (stage, or bpv). Before you start, you, the school and the company sign an agreement: the POK. At the company, your workplace trainer (praktijkopleider) helps you. At school, your placement coach (stagebegeleider) helps you. Sick? Call the company before your start time, and tell the school too. Rules differ per school: ask your placement coach.',
    ['Ik begin pas als de POK getekend is.', 'I only start when the placement agreement is signed.'],
    'The company asks you to start tomorrow. The POK is not signed yet. What do you do?',
    [
      'Ask your placement coach to arrange the POK first.',
      'Start tomorrow, and sign the POK in a few weeks.',
      'Start, but do not tell the school about it yet.',
    ],
    'The POK says what you learn and who helps you. Without a signed POK, your placement may not count for your diploma. So you sign it before you start.',
    NONE,
  ),
  // ⚖️ check: Is something really wrong: first the workplace trainer, then the placement coach
  // ⚖️ (the school's complaints procedure, WEB art. 7.4.11? to check; SBB can take away a
  // leerbedrijf's recognition).
  tipFor(
    'review',
    '🗣️',
    'Ask for feedback, and for an example',
    'At your placement, people tell you what goes well and what can be better: feedback. That is normal, and it helps you learn. You do not understand it? Ask for an example. Ask for feedback yourself too, for example once a week. Is something really wrong at your placement? First talk to your workplace trainer. Does that not help? Then go to your placement coach at school.',
    ['Wat ging goed, en wat kan beter?', 'What went well, and what can be better?'],
    'Your workplace trainer says: "You must work more carefully." You do not know what they mean. What do you do?',
    [
      'Ask for an example of what you must do differently.',
      'Say yes, and hope that you find out yourself.',
      'Work much slower, so nothing can go wrong.',
    ],
    'With an example, you know what to change. Asking shows that you want to learn. Trainers like that.',
    NONE,
  ),
  tipFor(
    'mychoice',
    '🌟',
    'Your strong points count',
    'What are you good at? Think of work, school and home. Caring for family, a side job or volunteer work count too. What do you like, and what do you not like? Not sure what work fits you? Ask to join someone at work for a day (meeloopdag). Your coach at school can help you choose.',
    ['Ik ben goed met mensen. Ik help thuis veel.', 'I am good with people. I help a lot at home.'],
    'At school they ask: "What are you good at?" You never had a paid job. What do you say?',
    [
      'What you do well at home, like caring for others.',
      'That you cannot say, because you never had a job.',
      'That you can do every kind of work, all of it.',
    ],
    'Skills from home count too. Caring, planning and helping are skills that employers need. Say what you did, with an example.',
    NONE,
  ),
  // ⚖️ check: With an Entree diploma you may go on to level 2 of the mbo ⚖️ (toelatingsrecht na
  // een entreediploma: WEB art. 8.1.1, Wet aanmelddatum en toelatingsrecht mbo, 2017; ask the
  // school about the conditions).
  // ⚖️ check: A diploma at mbo level 2 or higher is a startkwalificatie ⚖️ (Leerplichtwet 1969
  // art. 1: havo, vwo or mbo level 2).
  // ⚖️ check: In the bbl you work at a recognised company and go to school about one day a week;
  // you need a job or a work-and-learn place ⚖️ (WEB art. 7.2.2: bbl with a praktijkovereenkomst
  // and an arbeidsovereenkomst; "one day a week" is usual, not a rule).
  tipFor(
    'nextstep',
    '🎓',
    'After Entree: level 2 or work',
    'With an Entree diploma, you may go on to level 2 of the mbo. A diploma at level 2 or higher is a basic qualification (startkwalificatie). It helps you to find work and to keep it. In the bbl you work at a company and go to school about one day a week. For that you need a job or a work-and-learn place (leerwerkbaan). Go to an open day, and talk to your coach at school.',
    ['Kan ik na Entree naar niveau 2?', 'Can I go to level 2 after Entree?'],
    'You have your Entree diploma. A company offers you a job without training. You also want to keep learning. What do you do?',
    [
      'Ask the company if a bbl place is possible.',
      'Take the job, and stop learning for good.',
      'Stay at home until a school calls you.',
    ],
    'With the bbl, you work and learn at the same time. You earn money, and you get a level 2 diploma. Many companies like this.',
    NONE,
  ),
  tipFor(
    'email',
    '📧',
    'A short e-mail: who, what, when',
    'An e-mail to work is short and polite. Start with a greeting, like "Beste Karin,". Then say what you want, and when. End with a greeting and your full name. Write a short subject, like "Vrij op vrijdag". Read your e-mail again before you send it.',
    ['Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad', 'Dear Karin, may I have Friday off? Regards, Ali Haddad'],
    'You want a day off next Friday. Which e-mail to your supervisor is best?',
    [
      '"Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad"',
      '"Vrijdag ben ik er niet." (without a greeting or your name).',
      'A long e-mail about your week, with the question at the end.',
    ],
    'A good e-mail has a greeting, one clear question and your name. Then your supervisor can answer quickly.',
    NONE,
  ),
  // ⚖️ check: Bought something online? You can usually change your mind within 14 days ⚖️ (BW
  // 6:230o: herroepingsrecht bij koop op afstand, with exceptions, for example food or made to order).
  // ⚖️ check: Keep the receipt for the guarantee ⚖️ (BW 7:17: a product must work as you may expect;
  // BW 7:18 lid 2: in the first year the shop must prove that it was not broken).
  // ⚖️ check: Buy now, pay later is also a debt ⚖️ (achteraf betalen: a form of credit; new EU rules,
  // Richtlijn (EU) 2023/2225 consumentenkrediet, from November 2026).
  tipFor(
    'budget',
    '🐷',
    'Fixed costs first',
    'When you get your pay, first pay the fixed costs: rent, insurance and your phone. Try to save a small amount every month, also 10 euros. Buy now, pay later is also a debt. Did you buy something online? Then you can usually change your mind within 14 days. Keep the receipt: you need it for the guarantee.',
    ['Ik betaal liever nu. Dan heb ik geen schuld.', 'I prefer to pay now. Then I have no debt.'],
    'You get your pay today. You want new shoes, and your rent must still be paid. What do you do?',
    [
      'Pay the rent first, then see what is left.',
      'Buy the shoes, and pay the rent later.',
      'Buy the shoes with buy now, pay later.',
    ],
    'Rent, insurance and your phone come back every month. When you pay those first, you know what money is left. Then you do not get debts.',
    NONE,
  ),
  // ⚖️ check: Working under the influence of alcohol or drugs is dangerous, and most employers
  // forbid it ⚖️ (Arbowet art. 3 and 11: the employer's policy and the worker's duty to work safely;
  // for drivers Wegenverkeerswet art. 8; company rules differ).
  // ⚖️ check: The huisarts keeps it secret ⚖️ (medisch beroepsgeheim, BW 7:457, WGBO).
  tipFor(
    'healthy',
    '😴',
    'Sleep, food and no drugs',
    'You work better and more safely when you sleep enough, also after a late shift. Eat breakfast, and drink water during the day. Move in your break, for example a short walk. Working under the influence of alcohol or drugs is dangerous, and most employers forbid it. Do you feel low for a long time, or can you not stop drinking or using? Talk to your huisarts. They can help, and they keep it secret.',
    ['Ik voel me al lang somber. Kan ik een afspraak maken?', 'I have felt low for a long time. Can I make an appointment?'],
    'You have a night shift tonight. A colleague offers you a pill to stay awake. What do you do?',
    [
      'Say no, and sleep a few hours before your shift.',
      'Take half a pill, that is not dangerous.',
      'Take it, but tell nobody at work about it.',
    ],
    'Pills from a colleague can be drugs. They can make you sick, or make you make mistakes at work. Sleep is the safe way to stay awake.',
    NONE,
  ),
  // ⚖️ check: With Dutch nationality you may vote in every election, from 18 ⚖️ (Grondwet art. 4;
  // Kieswet art. B 1).
  // ⚖️ check: For the gemeenteraad, people from another EU country who live here may vote too, and
  // people from outside the EU after 5 years of legal stay ⚖️ (Kieswet art. B 3; as in r.l.meedoen.1).
  // ⚖️ check: The gemeente sends the stempas by post; bring it with your ID ⚖️ (Kieswet art. J 7 and
  // J 25: stempas and identity document).
  tipFor(
    'council',
    '🗳️',
    'Who may vote?',
    'In the Netherlands you choose who decides, by voting. The gemeenteraad decides about your town. The Tweede Kamer makes the laws for the whole country. With Dutch nationality, you may vote in every election, from 18. For the gemeenteraad, more people may vote: people from another EU country who live here, and people from outside the EU after 5 years of legal stay. The gemeente sends you a voting pass (stempas). Bring it with your ID. Not sure if you may vote? Ask the gemeente.',
    ['Mag ik stemmen voor de gemeenteraad?', 'May I vote for the gemeenteraad?'],
    'You come from Morocco and have lived here legally for six years. You do not have Dutch nationality. There is an election for the gemeenteraad. What is true?',
    [
      'You may vote for the gemeenteraad.',
      'You may vote for the Tweede Kamer too.',
      'You may not vote at all without a Dutch passport.',
    ],
    'After 5 years of legal stay, you may vote for the gemeenteraad. For the Tweede Kamer, you need Dutch nationality.',
    NONE,
  ),
  // ⚖️ check: From 14, you must show your ID when the police ask for it ⚖️ (Wet op de
  // identificatieplicht; Wetboek van Strafrecht art. 447e).
  // ⚖️ check: You can object in writing, before the date in the letter (usually 6 weeks) ⚖️ (Awb
  // art. 6:7). Not for a traffic fine: that has its own route (WAHV, beroep bij de officier van
  // justitie), so the tip speaks of a letter from the gemeente or the UWV.
  // ⚖️ check: The police and the judge must treat everyone equally ⚖️ (Grondwet art. 1).
  // ⚖️ check: Arrested? You may ask for a lawyer ⚖️ (Wetboek van Strafvordering art. 28 and 28a-28e).
  // ⚖️ check: The Juridisch Loket gives free advice ⚖️ (juridischloket.nl).
  tipFor(
    'police',
    '👮',
    'Your ID and your rights',
    'From 14, you must show your ID when the police ask for it. So always carry it with you. Do you get a letter with a decision you do not agree with, for example from the gemeente or the UWV? Then you can object (bezwaar maken) in writing. Do it before the date in the letter. The police and the judge must treat everyone equally. Arrested? You may ask for a lawyer. The Juridisch Loket gives free advice.',
    ['Ik ben het niet eens met dit besluit. Ik maak bezwaar.', 'I do not agree with this decision. I am objecting.'],
    'You get a letter from the gemeente. You do not agree with their decision. The letter says you have six weeks. What do you do?',
    [
      'Write a letter to object, before the date.',
      'Call once, and wait until they call back.',
      'Wait: after six weeks, it stops by itself.',
    ],
    'You object in writing, before the date in the letter. After that date, it is often too late. The Juridisch Loket can help you write it.',
    NONE,
  ),
  // ⚖️ check: Your DigiD is only for you: do not give it to anyone, also not to your employer ⚖️
  // (DigiD-gebruiksvoorwaarden, Logius; someone may help you with a DigiD machtiging instead).
  tipFor(
    'login',
    '🔐',
    'Your login is yours',
    'Your password and your DigiD are only for you. Do not give them to anyone, also not to your employer or a colleague. On a shared computer, always log out when you are done. Going away for a moment? Lock your screen. Forgot your password? Ask the IT department (ICT-afdeling) for a new one.',
    ['Ik ga even weg. Ik vergrendel mijn scherm.', 'I am going away for a moment. I am locking my screen.'],
    'Your supervisor asks for your DigiD and password, to arrange your papers quickly. What do you do?',
    [
      'Say no, and log in yourself while they help.',
      'Give it this one time, because it is your boss.',
      'Write it on a paper, so they can use it later.',
    ],
    'With your DigiD, someone can see and change your tax, benefits and health papers. It is only for you. You can log in yourself and let someone help you.',
    HOUSE_LINE,
  ),
  tipFor(
    'phish',
    '🎣',
    'In a hurry, with a button? Do not click',
    'A fake e-mail (phishing) often looks real. It wants you to act fast: "Your account will be closed today!" Check the sender. Do not click on a link or open an attachment you did not expect. Go to the real website or app yourself. Did you click anyway? Change your password right away, and call the IT department. That is not a shame: the sooner they know, the better.',
    ['Ik heb op een verdachte link geklikt.', 'I clicked on a suspicious link.'],
    'You clicked on a link in an e-mail and typed your password. Then you see that the e-mail was fake. What do you do?',
    [
      'Change your password, and call the IT department.',
      'Delete the e-mail, and hope nothing happens.',
      'Wait a day to see if something goes wrong.',
    ],
    'With your password, someone else can get into the systems of your work. When you change it fast and tell the IT department, they can stop it in time.',
    HOUSE_LINE,
  ),
];

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
];

const lessonOrder = [toolsUnit, dataUnit, ...workUnits].flatMap((u) => u.lessons.map((l) => l.id));

/** One "Zo werkt het hier" tip per lesson of toolsUnit, dataUnit and workUnits, in course order. */
export const workTips: CultureTip[] = [...toolsTips, ...coreTips, ...applyTips, ...houseTips, ...socialTips, ...laterTips, ...sectorTips, ...shopNumbersTips, ...aiTips, ...kasTips, ...sayingsTips, ...dataTips, ...moreTips, ...entreeTips].sort(
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
