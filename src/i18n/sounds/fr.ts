import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'Les sons du néerlandais',
    'l.shortlong': 'a ou aa, ui ou ei',
    'w.kl.man': 'l’homme',
    'w.kl.maan': 'la lune',
    'w.kl.zak': 'le sac',
    'w.kl.zaak': 'le magasin',
    'w.kl.ui': 'l’oignon',
    'w.kl.ei': 'l’œuf',
    's.shortlong.1': 'L’homme regarde la lune.',
    's.shortlong.2': 'Mets les oignons dans le sac.',
    's.shortlong.3': 'Le magasin est ouvert à neuf heures.',
    'c.shortlong.q': 'Tu veux un œuf ?',
    'c.shortlong.a': 'Non merci. J’ai déjà mangé.',
    'c.shortlong.a.why': 'On propose un œuf : un non poli, avec une raison.',
    'l.roundsounds': 'uu, oe et eu',
    'w.kl.muur': 'le mur',
    'w.kl.moer': 'l’écrou (pour un boulon)',
    'w.kl.buur': 'le voisin',
    'w.kl.boer': 'l’agriculteur',
    'w.kl.deur': 'la porte',
    'w.kl.duur': 'cher',
    's.roundsounds.1': 'Serre bien l’écrou.',
    's.roundsounds.2': 'Ferme la porte, s’il te plaît.',
    's.roundsounds.3': 'Ce manteau est trop cher.',
    'c.roundsounds.q': 'La porte est ouverte ?',
    'c.roundsounds.a': 'Non, elle est fermée.',
    'c.roundsounds.a.why': 'On demande si la porte est ouverte : cette réponse dit que non.',
    'l.pbgk': "p ou b, g, k ou h", // nagelezen (2e lezing) (controle/uitdrukkingen-klanken)
    'w.kl.pak': 'le costume',
    'w.kl.bak': 'le bac, la poubelle',
    'w.kl.goud': 'l’or',
    'w.kl.koud': 'froid',
    'w.kl.hoed': 'le chapeau',
    'w.kl.goed': 'bon, bien',
    's.pbgk.1': 'Jette les déchets dans la poubelle.',
    's.pbgk.2': 'Il fait froid dans le hall.',
    's.pbgk.3': 'Tu le fais bien !',
    'c.pbgk.q': 'Comment ça va ?',
    'c.pbgk.a': 'Bien, mais j’ai froid.',
    'c.pbgk.a.why': 'On demande comment tu vas : une réponse, et comment tu te sens.',
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'Ouvre la bouche, un peu moins que pour « aa ». La langue va vers l’arrière. Dis-le court.', // nieuw, nalezen
    'k.uitleg.aa': 'Ouvre grand la bouche. Les lèvres sont détendues. La langue est basse et plate.', // nieuw, nalezen
    'k.uitleg.e': 'La bouche est mi-ouverte, plus que pour « ee ». Les lèvres sont détendues. Dis-le court.', // nieuw, nalezen
    'k.uitleg.ee': 'La bouche est mi-ouverte. Les lèvres sont étirées, comme pour sourire. Le bout de la langue touche les dents du bas.', // nieuw, nalezen
    'k.uitleg.i': 'Comme pour « ie », mais la bouche est un peu plus ouverte et détendue. Dis-le court.', // nieuw, nalezen
    'k.uitleg.ie': 'La bouche est presque fermée. Les lèvres sont étirées, comme pour sourire. La langue est haute et en avant.', // nieuw, nalezen
    'k.uitleg.o': 'La bouche est ouverte. Les lèvres sont un peu rondes. La langue est en arrière. Dis-le court.', // nieuw, nalezen
    'k.uitleg.oo': 'Les lèvres sont rondes. La bouche est mi-ouverte. À la fin, les lèvres deviennent plus petites.', // nieuw, nalezen
    'k.uitleg.u': 'Les lèvres sont un peu rondes, pas serrées. La langue est en avant. Dis-le court.', // nieuw, nalezen
    'k.uitleg.uu': 'Lèvres rondes et serrées, comme pour un bisou. La langue en avant, comme pour « ie ».', // nieuw, nalezen
    'k.uitleg.oe': 'Fais des lèvres rondes et serrées, bien en avant. Il reste juste un petit trou. La langue reste au fond de la bouche.', // nieuw, nalezen
    'k.uitleg.eu': 'La bouche est mi-ouverte. Les lèvres sont rondes, mais pas serrées. La langue en avant, comme pour « ee ».', // nieuw, nalezen
    'k.uitleg.ui': 'Commence la bouche mi-ouverte, les lèvres rondes. Puis rends les lèvres petites, jusqu’à « uu ». Elles restent rondes.', // nieuw, nalezen
    'k.uitleg.ij': 'Commence la bouche mi-ouverte, les lèvres étirées. Puis ferme presque la bouche, jusqu’à « ie ».', // nieuw, nalezen
    'k.uitleg.ou': 'Commence la bouche ouverte. Puis rends les lèvres petites et rondes, jusqu’à « oe ».', // nieuw, nalezen
  },
};
export default t;
