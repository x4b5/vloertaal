import { RULES_DISCLAIMER } from './regels/disclaimer';

/**
 * The "About Vloertaal" page: short sections in simple English. Translations live in
 * src/i18n/about/<lang>.ts (gloss ids = section id for the title, id + '.b' for the body).
 * Every section also has its text in plain Dutch (about A2: short sentences, everyday words),
 * shown with the page's "NL" toggle.
 */
export interface AboutSection {
  id: string;
  emoji: string;
  /** A cast member drawn in place of the emoji (his head), for the section about him. */
  who?: 'bram';
  title: string;
  body: string;
  /** The same in plain Dutch (the "NL" toggle on the About page). */
  nl: { title: string; body: string };
  /**
   * The work-rules track (Werkregels, src/lib/track.ts) reads `nl`, except where the Dutch text is
   * about learning Dutch: then this one, about the rules of work for people who speak Dutch already.
   */
  nlRules?: { title: string; body: string };
  /** Left out of the work-rules track's About (the section is only about the language course). */
  rules?: false;
}

/**
 * The learner's About (the "Over" tab): only what a learner needs, in their own language (and in
 * plain Dutch with the "NL" toggle). What it is, how it works, Bram, how work goes here (the Dutch
 * course only), their privacy in short, good to know, and where to send a question or a mistake.
 * What is for coaches and employers (the mission, the test version, for whom, the voices, privacy
 * in detail, the facts …) is on their own page, in Dutch: src/content/pro.ts, in the app
 * ("Voor begeleiders en werkgevers", from a button at the bottom of Over) and on
 * vloertaal.nl/voor-begeleiders.
 */
export const aboutSections: AboutSection[] = [
  {
    id: 'a.what', emoji: '🦺', title: 'What is Vloertaal?',
    body: 'Vloertaal helps you learn the Dutch you need at work: in the warehouse, the kitchen, the factory or on the building site. Not only the words on the work floor, but all the language around work: applying for a job, your contract and pay slip, your rights, housing and papers, calling in sick and getting along with colleagues. The lessons are short, so you can practise a few minutes every day. Think of Vloertaal as a small extra for in between. It does not replace a language course or a language coach.',
    nl: {
      title: 'Wat is Vloertaal?',
      body: 'Met Vloertaal leer je het Nederlands dat je nodig hebt op je werk: in het magazijn, in de keuken, in de fabriek of op de bouw. Niet alleen de woorden op de werkvloer. Ook de taal rond je werk: solliciteren, je contract en je loonstrook, je rechten, wonen en papieren, je ziekmelden en omgaan met collega’s. De lessen zijn kort. Zo kun je elke dag een paar minuten oefenen. Zie Vloertaal als een tussendoortje. Het is een extra. Een taalcursus of een taalcoach blijft nodig.',
    },
    nlRules: {
      title: 'Wat is Vloertaal?',
      body: 'Vloertaal legt uit hoe werken in Nederland gaat. Voor mensen die al Nederlands spreken. Je leert de regels van de wet en je contract. En de regels die nergens staan, maar die iedereen kent. Bijvoorbeeld over werk zoeken, je loonstrook, ziek zijn, veiligheid en collega’s. De lessen zijn kort. Zo leer je elke dag een paar minuten. Zie Vloertaal als een tussendoortje. Het is een extra. Advies van je werkgever, een vakbond of het Juridisch Loket blijft nodig.',
    },
  },
  {
    id: 'a.how', emoji: '👂', title: 'How does it work?',
    body: 'You learn Dutch with help in your own language, or in simple English if you chose no help language. You listen, tap, build sentences and practise short conversations with colleagues.',
    nl: {
      title: 'Hoe werkt het?',
      body: 'Je leert Nederlands met hulp in je eigen taal. Koos je geen hulptaal? Dan krijg je hulp in eenvoudig Engels. Je luistert, je tikt, je maakt zinnen en je oefent korte gesprekken met collega’s.',
    },
    nlRules: {
      title: 'Hoe werkt het?',
      body: 'Alles is in gewoon Nederlands. Je leest een kort verhaal over het werk. Dan krijg je de regel. Daarna kies je: wat doe je, en wie vraag je om hulp? Wil je de tekst horen? Tik op de luidspreker. Vragen die moeilijk waren, komen terug bij "Herhaal vandaag".',
    },
  },
  {
    id: 'a.bram', emoji: '👷', who: 'bram', title: 'Who is Bram?',
    body: 'Bram is your colleague in the app. He has worked in warehouses and on building sites for many years, and he likes to help new colleagues. He speaks calmly, and it is okay to make mistakes with him.',
    nl: {
      title: 'Wie is Bram?',
      body: 'Bram is je collega in de app. Hij werkt al veel jaren in magazijnen en op de bouw. Hij helpt graag nieuwe collega’s. Hij praat rustig, en bij hem mag je fouten maken.',
    },
  },
  {
    // The rules track is this, all through: left out there.
    id: 'a.culture', emoji: '🤝', title: 'How it works here', rules: false,
    body: 'Language comes first. But Vloertaal also talks about how things usually go at work in the Netherlands and in Belgium: saying "je" to your boss, asking questions, being on time, and saying it when something bothers you. You find these tips in the lessons and under "Workplace tips".',
    nl: {
      title: 'Zo werkt het hier',
      body: 'Taal komt eerst. Maar Vloertaal vertelt ook hoe het meestal gaat op het werk in Nederland en in België. Bijvoorbeeld: je zegt "je" tegen je baas, je stelt vragen en je bent op tijd. En je zegt het als je iets niet fijn vindt. Deze tips vind je in de lessen en bij "Zo werkt het hier".',
    },
  },
  {
    // The privacy points in short: what is counted, exactly, is on the professionals page
    // (src/content/pro.ts, 'p.privacy'); that it is free is in 'a.mission' (siteSections).
    id: 'a.free', emoji: '🔒', title: 'Your privacy',
    body: 'You do not need an account. Your progress is saved only on this phone or computer. If it is switched on, the app counts anonymously how often lessons are done: no name, no tracking. You can turn this off in Settings. The result of the test and the recording of your voice also stay only on this phone or computer. A coach or teacher sees only what you show yourself, for example the card at “Show how it is going”. Do you turn on “Let the phone listen (trial)”? Then the phone itself recognises your Dutch. Nothing goes to us or to others.',
    nl: {
      title: 'Jouw privacy',
      body: 'Je hebt geen account nodig. Wat je hebt geleerd, staat alleen op deze telefoon of computer. Staat het aan? Dan telt de app zonder naam hoe vaak mensen lessen doen. Niemand volgt je. Je kunt dit uitzetten bij "Instellingen". Ook de uitslag van de toets en de opname van je stem blijven alleen op deze telefoon of computer. Een begeleider ziet alleen wat jij zelf laat zien, bijvoorbeeld de kaart bij “Laat zien hoe het gaat”. Zet je “Laat de telefoon luisteren (proef)” aan? Dan herkent de telefoon zelf je Nederlands. Er gaat niets naar ons of naar anderen.',
    },
  },
  {
    // The general disclaimer for the rights-and-rules tips (date: when the texts were last updated;
    // not "checked": the expert check is still to come, see 'a.beta').
    id: 'a.disclaimer', emoji: '⚖️', title: 'Good to know',
    body: 'The tips in Vloertaal are general information, not legal advice. Rules can change; the texts were last updated in October 2026. For your own situation, ask your employer, a union or the Juridisch Loket.',
    nl: {
      title: 'Goed om te weten',
      body: 'De tips in Vloertaal zijn algemene informatie. Het is geen juridisch advies. Regels kunnen veranderen: de teksten zijn bijgewerkt in oktober 2026. Gaat het om jouw situatie? Vraag je werkgever, een vakbond of het Juridisch Loket.',
    },
    // The track's own disclaimer, word for word (also on the Hulp tab).
    nlRules: { title: 'Goed om te weten', body: RULES_DISCLAIMER.join(' ') },
  },
  {
    // Last: where to send a mistake or a question. The address is a tappable mail link in the
    // body (the About page renders CONTACT_EMAIL as one, in every language and in Dutch).
    id: 'a.contact', emoji: '✉️', title: 'Questions or a mistake?',
    body: 'Did you find a mistake, for example in a translation or in a tip? Or do you have a question? Send an e-mail to hoi@vloertaal.nl. A screenshot helps. In a lesson you can also tap the flag "Melden" at the top: then the e-mail already says where you are.',
    nl: {
      title: 'Vraag of fout?',
      body: 'Zie je een fout, bijvoorbeeld in een vertaling of een tip? Of heb je een vraag? Stuur een mail naar hoi@vloertaal.nl. Een schermafbeelding helpt. In een les kun je ook bovenaan op het vlaggetje Melden tikken: dan staat in de mail al waar je bent.',
    },
    nlRules: {
      title: 'Vraag of fout?',
      body: 'Zie je een fout, bijvoorbeeld in een regel of een vraag? Of heb je een vraag? Stuur een mail naar hoi@vloertaal.nl. Een schermafbeelding helpt. In een les kun je ook bovenaan op het vlaggetje Melden tikken: dan staat in de mail al waar je bent.',
    },
  },
];

/**
 * Translated sections that are not on the learner's About, but on the site: the language pages
 * (vloertaal.nl/pl, /ar …, src/lib/langPages.ts) and the lines below the start page's splash
 * (src/lib/siteLinks.ts). Someone who searches in their own language wants to know that it is
 * free, for whom it is and that it is a test version. The professionals page (src/content/pro.ts)
 * shows their Dutch (and for whom also in the work-rules track: `nlRules`). Translations in
 * src/i18n/about/<lang>.ts, like the About sections.
 */
export const siteSections: AboutSection[] = [
  {
    id: 'a.mission', emoji: '🎯', title: 'Our mission',
    body: 'Vloertaal wants to help a little, so that learning Dutch for work becomes a bit easier: free, easy to use, and with help in your own language. Nobody earns money from Vloertaal: no ads, no subscription, and your data is never sold.',
    nl: {
      title: 'Onze missie',
      body: 'Vloertaal wil helpen, zodat Nederlands leren voor je werk iets makkelijker wordt. Gratis, makkelijk en met hulp in je eigen taal. Niemand verdient geld aan Vloertaal: geen reclame, geen abonnement, en we verkopen je gegevens nooit.',
    },
  },
  {
    // The whole app is a beta (the pilot). "Our address is at the bottom of this page": on every
    // page that shows it (a language page, the professionals page) the contact comes last.
    id: 'a.beta', emoji: '🧪', title: 'A test version',
    body: 'Vloertaal is still a test version (beta). We are testing it with a small group of learners and coaches. Not everything has been checked yet: experts are still checking the translations and the tips about rules. Did you find a mistake? You find our address at the bottom of this page.',
    nl: {
      title: 'Een testversie',
      body: 'Vloertaal is nog een testversie (bèta). We testen de app met een kleine groep leerlingen en begeleiders. Nog niet alles is nagekeken: experts kijken de vertalingen en de tips over regels nog na. Zie je een fout? Ons adres staat onderaan deze pagina.',
    },
  },
  {
    id: 'a.who', emoji: '🌍', title: 'Who is it for?',
    body: 'For everyone who is new to working in the Netherlands or Belgium. Help languages: Arabic, Tigrinya, Persian, Dari, Ukrainian, Turkish, Polish, Romanian, Bulgarian, Spanish, Portuguese, French and German.',
    nl: {
      title: 'Voor wie is het?',
      body: 'Voor iedereen die nieuw is op het werk in Nederland of België. Hulptalen: Arabisch, Tigrinya, Perzisch, Dari, Oekraïens, Turks, Pools, Roemeens, Bulgaars, Spaans, Portugees, Frans en Duits.',
    },
    nlRules: {
      title: 'Voor wie is het?',
      body: 'Voor iedereen die al Nederlands spreekt en in Nederland werkt of werk zoekt. Ben je nieuw op je werk? Of wil je weten wat je rechten zijn? Dan is dit voor jou.',
    },
  },
];

/** A translated section by id: About's or the site's. */
export function aboutSection(id: string): AboutSection {
  const s = aboutSections.find((x) => x.id === id) ?? siteSections.find((x) => x.id === id);
  if (!s) throw new Error(`about: no section ${id}`);
  return s;
}

/** The owner's address: in the 'a.contact' body, written exactly so in every language. */
export const CONTACT_EMAIL = 'hoi@vloertaal.nl';

/**
 * The professionals' page (src/content/pro.ts): its title, also the Dutch name of the button to it
 * at the bottom of About (here, so the About page does not load that page's texts).
 */
export const PRO_TITLE = 'Voor begeleiders en werkgevers';

/**
 * The About page of the work-rules track, in Dutch only: every section of the learner's About that
 * fits the track, with its rules text where the Dutch course's text is about learning Dutch (what,
 * how, disclaimer, contact), the others as they are (Bram, privacy).
 */
export const aboutRules: { id: string; emoji: string; who?: 'bram'; title: string; body: string }[] = aboutSections
  .filter((s) => s.rules !== false)
  .map((s) => ({ id: s.id, emoji: s.emoji, ...(s.who ? { who: s.who } : {}), ...(s.nlRules ?? s.nl) }));

/** The translated ids (title, and body + '.b'): the About sections and the site's. */
export const aboutIds: string[] = [...aboutSections, ...siteSections].flatMap((s) => [s.id, `${s.id}.b`]);
