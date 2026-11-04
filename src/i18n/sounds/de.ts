import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'Niederländische Laute',
    'l.shortlong': 'a oder aa, ui oder ei',
    'w.kl.man': 'der Mann',
    'w.kl.maan': 'der Mond',
    'w.kl.zak': 'die Tüte, der Sack',
    'w.kl.zaak': 'das Geschäft',
    'w.kl.ui': 'die Zwiebel',
    'w.kl.ei': 'das Ei',
    's.shortlong.1': 'Der Mann schaut den Mond an.',
    's.shortlong.2': 'Tu die Zwiebeln in die Tüte.',
    's.shortlong.3': 'Das Geschäft ist um neun Uhr offen.',
    'c.shortlong.q': 'Möchtest du ein Ei?',
    'c.shortlong.a': 'Nein, danke. Ich habe schon gegessen.',
    'c.shortlong.a.why': 'Jemand bietet ein Ei an: ein höfliches Nein, mit einem Grund.',
    'l.roundsounds': 'uu, oe und eu',
    'w.kl.muur': 'die Wand, die Mauer',
    'w.kl.moer': 'die Mutter (für eine Schraube)',
    'w.kl.buur': 'der Nachbar / die Nachbarin',
    'w.kl.boer': 'der Bauer / die Bäuerin',
    'w.kl.deur': 'die Tür',
    'w.kl.duur': 'teuer',
    's.roundsounds.1': 'Zieh die Mutter gut fest.',
    's.roundsounds.2': 'Mach bitte die Tür zu.',
    's.roundsounds.3': 'Diese Jacke ist zu teuer.',
    'c.roundsounds.q': 'Ist die Tür offen?',
    'c.roundsounds.a': 'Nein, sie ist zu.',
    'c.roundsounds.a.why': 'Gefragt, ob die Tür offen ist: Diese Antwort sagt, dass sie es nicht ist.',
    'l.pbgk': "p oder b, g, k oder h", // nagelezen (2e lezing) (controle/uitdrukkingen-klanken)
    'w.kl.pak': 'der Anzug',
    'w.kl.bak': 'die Kiste, der Behälter',
    'w.kl.goud': 'das Gold',
    'w.kl.koud': 'kalt',
    'w.kl.hoed': 'der Hut',
    'w.kl.goed': 'gut',
    's.pbgk.1': 'Wirf den Müll in den Behälter.',
    's.pbgk.2': 'In der Halle ist es kalt.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.pbgk.3': 'Du machst das gut!',
    'c.pbgk.q': 'Wie geht es dir?',
    'c.pbgk.a': 'Gut, aber mir ist kalt.',
    'c.pbgk.a.why': 'Gefragt, wie es dir geht: eine Antwort, und wie du dich fühlst.',
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'Öffne den Mund, etwas weniger als bei „aa“. Die Zunge geht nach hinten. Sprich es kurz.', // nieuw, nalezen
    'k.uitleg.aa': 'Öffne den Mund weit. Die Lippen sind locker. Die Zunge liegt tief und flach.', // nieuw, nalezen
    'k.uitleg.e': 'Der Mund ist halb offen, mehr als bei „ee“. Die Lippen sind locker. Sprich es kurz.', // nieuw, nalezen
    'k.uitleg.ee': 'Der Mund ist halb offen. Die Lippen sind breit, wie beim Lächeln. Die Zungenspitze berührt die unteren Zähne.', // nieuw, nalezen
    'k.uitleg.i': 'Wie bei „ie“, aber der Mund ist etwas weiter offen und locker. Sprich es kurz.', // nieuw, nalezen
    'k.uitleg.ie': 'Der Mund ist fast zu. Die Lippen sind breit, wie beim Lächeln. Die Zunge ist hoch und vorne.', // nieuw, nalezen
    'k.uitleg.o': 'Der Mund ist offen. Die Lippen sind etwas rund. Die Zunge ist hinten. Sprich es kurz.', // nieuw, nalezen
    'k.uitleg.oo': 'Die Lippen sind rund. Der Mund ist halb offen. Am Ende werden die Lippen kleiner.', // nieuw, nalezen
    'k.uitleg.u': 'Die Lippen sind etwas rund, nicht fest. Die Zunge ist vorne. Sprich es kurz.', // nieuw, nalezen
    'k.uitleg.uu': 'Lippen rund und fest, wie für einen Kuss. Die Zunge vorne, wie bei „ie“.', // nieuw, nalezen
    'k.uitleg.oe': 'Mach die Lippen rund und fest, weit nach vorne. Es bleibt nur ein kleines Loch. Die Zunge bleibt hinten im Mund.', // nieuw, nalezen
    'k.uitleg.eu': 'Der Mund ist halb offen. Die Lippen sind rund, aber nicht fest. Die Zunge vorne, wie bei „ee“.', // nieuw, nalezen
    'k.uitleg.ui': 'Beginne mit halb offenem Mund und runden Lippen. Dann mach die Lippen klein, bis „uu“. Die Lippen bleiben rund.', // nieuw, nalezen
    'k.uitleg.ij': 'Beginne mit halb offenem Mund und breiten Lippen. Dann schließ den Mund fast, bis „ie“.', // nieuw, nalezen
    'k.uitleg.ou': 'Beginne mit offenem Mund. Dann mach die Lippen klein und rund, bis „oe“.', // nieuw, nalezen
  },
};
export default t;
