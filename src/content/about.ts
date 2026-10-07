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
    body: 'Vloertaal helps you learn the Dutch you need at work: in the warehouse, the kitchen, the factory or on the building site. The lessons are short, so you can practise a few minutes every day.',
  },
  {
    id: 'a.how', emoji: '👂', title: 'How does it work?',
    body: 'You learn Dutch through simple English. If you choose a help language, you also see the instructions and words in your own language. You listen, tap, build sentences and practise short conversations with colleagues.',
  },
  {
    id: 'a.culture', emoji: '🤝', title: 'More than words',
    body: 'Language comes first. But you also learn how things usually go at a Dutch workplace: asking questions, being on time, and saying it when something bothers you.',
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
    body: 'The Dutch voices of the men are made with Piper, free open-source speech software. The women in the app speak with the voice of your own phone or computer.',
  },
];

export const aboutIds: string[] = aboutSections.flatMap((s) => [s.id, `${s.id}.b`]);
