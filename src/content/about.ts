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
}

export const aboutSections: AboutSection[] = [
  {
    id: 'a.what', emoji: '🦺', title: 'What is Vloertaal?',
    body: 'Vloertaal helps you learn the Dutch you need at work: in the warehouse, the kitchen, the factory or on the building site. Not only the words on the work floor, but all the language around work: applying for a job, your contract and pay slip, your rights, housing and papers, calling in sick and getting along with colleagues. The lessons are short, so you can practise a few minutes every day.',
    nl: {
      title: 'Wat is Vloertaal?',
      body: 'Met Vloertaal leer je het Nederlands dat je nodig hebt op je werk: in het magazijn, in de keuken, in de fabriek of op de bouw. Niet alleen de woorden op de werkvloer. Ook de taal rond je werk: solliciteren, je contract en je loonstrook, je rechten, wonen en papieren, je ziek melden en omgaan met collega’s. De lessen zijn kort. Zo kun je elke dag een paar minuten oefenen.',
    },
  },
  {
    id: 'a.mission', emoji: '🎯', title: 'Our mission',
    body: 'Vloertaal wants to give everyone who works in the Netherlands a fair chance to learn Dutch for work: free, easy to use, and with help in your own language. Nobody earns money from Vloertaal: no ads, no subscription, and your data is never sold.',
    nl: {
      title: 'Onze missie',
      body: 'Vloertaal wil iedereen die in Nederland werkt een eerlijke kans geven om Nederlands te leren voor het werk. Gratis, makkelijk en met hulp in je eigen taal. Niemand verdient geld aan Vloertaal: geen reclame, geen abonnement, en je gegevens worden nooit verkocht.',
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
    id: 'a.how', emoji: '👂', title: 'How does it work?',
    body: 'You learn Dutch through simple English. If you choose a help language, you also see the instructions and words in your own language. You listen, tap, build sentences and practise short conversations with colleagues.',
    nl: {
      title: 'Hoe werkt het?',
      body: 'Je leert Nederlands met eenvoudig Engels. Kies je een hulptaal? Dan zie je de uitleg en de woorden ook in je eigen taal. Je luistert, je tikt, je maakt zinnen en je oefent korte gesprekken met collega’s.',
    },
  },
  {
    id: 'a.culture', emoji: '🤝', title: 'How it works here',
    body: 'Language comes first. But Vloertaal also talks about how things usually go at a Dutch workplace: saying "je" to your boss, asking questions, being on time, and saying it when something bothers you. You find these tips in the lessons and under "Workplace tips".',
    nl: {
      title: 'Zo werkt het hier',
      body: 'Taal komt eerst. Maar Vloertaal vertelt ook hoe het meestal gaat op een Nederlands werk: je zegt "je" tegen je baas, je stelt vragen, je bent op tijd, en je zegt het als iets je dwarszit. Deze tips vind je in de lessen en bij "Zo werkt het hier".',
    },
  },
  {
    id: 'a.who', emoji: '🌍', title: 'Who is it for?',
    body: 'For everyone who is new to working in the Netherlands. Help languages: Arabic, Tigrinya, Persian, Dari, Ukrainian, Turkish, Polish, Romanian and Bulgarian.',
    nl: {
      title: 'Voor wie is het?',
      body: 'Voor iedereen die nieuw is op het werk in Nederland. Hulptalen: Arabisch, Tigrinya, Perzisch, Dari, Oekraïens, Turks, Pools, Roemeens en Bulgaars.',
    },
  },
  {
    // The privacy points only: that it is free (and why) is in 'a.mission'.
    id: 'a.free', emoji: '🔒', title: 'Your privacy',
    body: 'You do not need an account. Your progress is saved only on this phone or computer. If it is switched on, the app counts anonymously how often lessons are done: no name, no tracking. You can turn this off in Settings.',
    nl: {
      title: 'Jouw privacy',
      body: 'Je hebt geen account nodig. Wat je hebt geleerd, staat alleen op deze telefoon of computer. Staat het aan? Dan telt de app zonder naam hoe vaak lessen worden gedaan. Niemand volgt je. Je kunt dit uitzetten bij "Instellingen".',
    },
  },
  {
    // The general disclaimer for the rights-and-rules tips (date: when the texts were last checked).
    id: 'a.disclaimer', emoji: '⚖️', title: 'Good to know',
    body: 'The tips in Vloertaal are general information, not legal advice. Rules can change; the texts were checked in October 2026. For your own situation, ask your employer, a union or the Juridisch Loket.',
    nl: {
      title: 'Goed om te weten',
      body: 'De tips in Vloertaal zijn algemene informatie. Het is geen juridisch advies. Regels kunnen veranderen: de teksten zijn gecontroleerd in oktober 2026. Gaat het om jouw situatie? Vraag je werkgever, een vakbond of het Juridisch Loket.',
    },
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
    body: 'Did you find a mistake, for example in a translation or in a tip? Or do you have a question? Send an e-mail to hoi@vloertaal.nl. A screenshot helps.',
    nl: {
      title: 'Vraag of fout?',
      body: 'Zie je een fout, bijvoorbeeld in een vertaling of een tip? Of heb je een vraag? Stuur een mail naar hoi@vloertaal.nl. Een schermafbeelding helpt.',
    },
  },
];

/** The owner's address: in the 'a.contact' body, written exactly so in every language. */
export const CONTACT_EMAIL = 'hoi@vloertaal.nl';

export const aboutIds: string[] = aboutSections.flatMap((s) => [s.id, `${s.id}.b`]);
