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
    id: 'a.mission', emoji: '🎯', title: 'Our mission',
    body: 'Vloertaal wants to help a little, so that learning Dutch for work becomes a bit easier: free, easy to use, and with help in your own language. Nobody earns money from Vloertaal: no ads, no subscription, and your data is never sold.',
    nl: {
      title: 'Onze missie',
      body: 'Vloertaal wil helpen, zodat Nederlands leren voor je werk iets makkelijker wordt. Gratis, makkelijk en met hulp in je eigen taal. Niemand verdient geld aan Vloertaal: geen reclame, geen abonnement, en we verkopen je gegevens nooit.',
    },
    nlRules: {
      title: 'Onze missie',
      body: 'Iedereen die in Nederland werkt, moet weten wat mag en wat moet. En waar je hulp vindt als het misgaat. Vloertaal is gratis en makkelijk. Niemand verdient geld aan Vloertaal: geen reclame, geen abonnement, en we verkopen je gegevens nooit.',
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
    // The whole app is a beta (the pilot): said once, calmly, high on the page. No e-mail address
    // here (it would be one more thing to tap): the contact section at the end has it.
    id: 'a.beta', emoji: '🧪', title: 'A test version',
    body: 'Vloertaal is still a test version (beta). We are testing it with a small group of learners and coaches. Not everything has been checked yet: experts are still checking the translations and the tips about rules. Did you find a mistake? You find our address at the bottom of this page.',
    nl: {
      title: 'Een testversie',
      body: 'Vloertaal is nog een testversie (bèta). We testen de app met een kleine groep leerlingen en begeleiders. Nog niet alles is nagekeken: experts kijken de vertalingen en de tips over regels nog na. Zie je een fout? Ons adres staat onderaan deze pagina.',
    },
    nlRules: {
      title: 'Een testversie',
      body: 'Vloertaal is nog een testversie (bèta). We testen de app met een kleine groep. Nog niet alles is nagekeken: experts kijken de regels nog na. Zie je een fout? Ons adres staat onderaan deze pagina.',
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
    // The rules track is this, all through: left out there.
    id: 'a.culture', emoji: '🤝', title: 'How it works here', rules: false,
    body: 'Language comes first. But Vloertaal also talks about how things usually go at a Dutch workplace: saying "je" to your boss, asking questions, being on time, and saying it when something bothers you. You find these tips in the lessons and under "Workplace tips".',
    nl: {
      title: 'Zo werkt het hier',
      body: 'Taal komt eerst. Maar Vloertaal vertelt ook hoe het meestal gaat op een Nederlands werk. Bijvoorbeeld: je zegt "je" tegen je baas, je stelt vragen en je bent op tijd. En je zegt het als je iets niet fijn vindt. Deze tips vind je in de lessen en bij "Zo werkt het hier".',
    },
  },
  {
    id: 'a.who', emoji: '🌍', title: 'Who is it for?',
    body: 'For everyone who is new to working in the Netherlands. Help languages: Arabic, Tigrinya, Persian, Dari, Ukrainian, Turkish, Polish, Romanian, Bulgarian, Spanish, Portuguese, French and German.',
    nl: {
      title: 'Voor wie is het?',
      body: 'Voor iedereen die nieuw is op het werk in Nederland. Hulptalen: Arabisch, Tigrinya, Perzisch, Dari, Oekraïens, Turks, Pools, Roemeens, Bulgaars, Spaans, Portugees, Frans en Duits.',
    },
    nlRules: {
      title: 'Voor wie is het?',
      body: 'Voor iedereen die al Nederlands spreekt en in Nederland werkt of werk zoekt. Ben je nieuw op je werk? Of wil je weten wat je rechten zijn? Dan is dit voor jou.',
    },
  },
  {
    // The privacy points only: that it is free (and why) is in 'a.mission'.
    id: 'a.free', emoji: '🔒', title: 'Your privacy',
    body: 'You do not need an account. Your progress is saved only on this phone or computer. If it is switched on, the app counts anonymously how often lessons are done: no name, no tracking. You can turn this off in Settings.',
    nl: {
      title: 'Jouw privacy',
      body: 'Je hebt geen account nodig. Wat je hebt geleerd, staat alleen op deze telefoon of computer. Staat het aan? Dan telt de app zonder naam hoe vaak mensen lessen doen. Niemand volgt je. Je kunt dit uitzetten bij "Instellingen".',
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
    id: 'a.voices', emoji: '🔊', title: 'The voices',
    body: 'Every character has their own Dutch voice: Bram speaks with the voice of Thijmen, Henk with Daniel, Amina with Ariël and Jada with Noa. These voices were recorded with ElevenLabs. If a sentence has no recording yet, you hear the voice of your own phone or computer.',
    nl: {
      title: 'De stemmen',
      body: 'Elk personage heeft een eigen Nederlandse stem: Bram praat met de stem van Thijmen, Henk met Daniel, Amina met Ariël en Jada met Noa. Deze stemmen zijn opgenomen met ElevenLabs. Heeft een zin nog geen opname? Dan hoor je de stem van je eigen telefoon of computer.',
    },
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

/** The owner's address: in the 'a.contact' body, written exactly so in every language. */
export const CONTACT_EMAIL = 'hoi@vloertaal.nl';

/**
 * The About page of the work-rules track, in Dutch only: every section that fits the track, with
 * its rules text where the Dutch course's text is about learning Dutch (what, mission, how, who,
 * disclaimer, contact), the others as they are (Bram, privacy, the voices).
 */
export const aboutRules: { id: string; emoji: string; who?: 'bram'; title: string; body: string }[] = aboutSections
  .filter((s) => s.rules !== false)
  .map((s) => ({ id: s.id, emoji: s.emoji, ...(s.who ? { who: s.who } : {}), ...(s.nlRules ?? s.nl) }));

export const aboutIds: string[] = aboutSections.flatMap((s) => [s.id, `${s.id}.b`]);
