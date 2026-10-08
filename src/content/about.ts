/**
 * The "About Vloertaal" page: short sections in simple English. Translations live in
 * src/i18n/about/<lang>.ts (gloss ids = section id for the title, id + '.b' for the body).
 */
export interface AboutSection {
  id: string;
  emoji: string;
  title: string;
  body: string;
}

export const aboutSections: AboutSection[] = [
  {
    id: 'a.what', emoji: '🦺', title: 'What is Vloertaal?',
    body: 'Vloertaal helps you learn the Dutch you need at work: in the warehouse, the kitchen, the factory or on the building site. Not only the words on the work floor, but all the language around work: applying for a job, your contract and pay slip, your rights, housing and papers, calling in sick and getting along with colleagues. The lessons are short, so you can practise a few minutes every day.',
  },
  {
    id: 'a.how', emoji: '👂', title: 'How does it work?',
    body: 'You learn Dutch through simple English. If you choose a help language, you also see the instructions and words in your own language. You listen, tap, build sentences and practise short conversations with colleagues.',
  },
  {
    id: 'a.culture', emoji: '🤝', title: 'How it works here',
    body: 'Language comes first. But Vloertaal also talks about how things usually go at a Dutch workplace: saying "je" to your boss, asking questions, being on time, and saying it when something bothers you. You find these tips in the lessons and under "Workplace tips".',
  },
  {
    id: 'a.who', emoji: '🌍', title: 'Who is it for?',
    body: 'For everyone who is new to working in the Netherlands. Help languages: Arabic, Tigrinya, Persian, Dari, Ukrainian, Turkish, Polish, Romanian and Bulgarian.',
  },
  {
    id: 'a.free', emoji: '🔒', title: 'Free and private',
    body: 'Vloertaal is free and you do not need an account. Your progress is saved only on this phone or computer. We do not track what you do.',
  },
  {
    id: 'a.voices', emoji: '🔊', title: 'The voices',
    body: 'Every character has their own Dutch voice: Bram speaks with the voice of Berend, Henk with Daniel, Amina with Ariël and Jada with Noa. These voices were recorded with ElevenLabs. If a sentence has no recording yet, you hear Piper (free open-source speech software) or the voice of your own phone or computer.',
  },
];

export const aboutIds: string[] = aboutSections.flatMap((s) => [s.id, `${s.id}.b`]);
