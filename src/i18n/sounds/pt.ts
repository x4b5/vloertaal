import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'Sons do neerlandês',
    'l.shortlong': 'a ou aa, ui ou ei',
    'w.kl.man': 'o homem',
    'w.kl.maan': 'a lua',
    'w.kl.zak': 'o saco',
    'w.kl.zaak': 'a loja',
    'w.kl.ui': 'a cebola',
    'w.kl.ei': 'o ovo',
    's.shortlong.1': 'O homem olha para a lua.',
    's.shortlong.2': 'Põe as cebolas no saco.',
    's.shortlong.3': 'A loja abre às nove horas.',
    'c.shortlong.q': 'Queres um ovo?',
    'c.shortlong.a': { m: 'Não, obrigado. Já comi.', f: 'Não, obrigada. Já comi.', x: 'Não, obrigado / obrigada. Já comi.' },
    'c.shortlong.a.why': 'Oferecem um ovo: um não educado, com uma razão.',
    'l.roundsounds': 'uu, oe e eu',
    'w.kl.muur': 'a parede',
    'w.kl.moer': 'a porca (de um parafuso)',
    'w.kl.buur': 'o vizinho',
    'w.kl.boer': 'o agricultor',
    'w.kl.deur': 'a porta',
    'w.kl.duur': 'caro',
    's.roundsounds.1': 'Aperta bem a porca.',
    's.roundsounds.2': 'Fecha a porta, por favor.',
    's.roundsounds.3': 'Esse casaco é caro demais.',
    'c.roundsounds.q': 'A porta está aberta?',
    'c.roundsounds.a': 'Não, está fechada.',
    'c.roundsounds.a.why': 'Perguntam se a porta está aberta: esta resposta diz que não está.',
    'l.pbgk': "p ou b, g, k ou h", // nagelezen (2e lezing) (controle/uitdrukkingen-klanken)
    'w.kl.pak': 'o fato (roupa)',
    'w.kl.bak': 'a caixa, o caixote',
    'w.kl.goud': 'o ouro',
    'w.kl.koud': 'frio',
    'w.kl.hoed': 'o chapéu',
    'w.kl.goed': 'bom, bem',
    's.pbgk.1': 'Deita o lixo no caixote.',
    's.pbgk.2': 'Está frio no pavilhão.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.pbgk.3': 'Estás a fazer bem!',
    'c.pbgk.q': 'Como estás?',
    'c.pbgk.a': 'Bem, mas tenho frio.',
    'c.pbgk.a.why': 'Perguntam como estás: uma resposta, e como te sentes.',
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'Abre a boca, um pouco menos do que para «aa». A língua vai para trás. Diz curto.', // nieuw, nalezen
    'k.uitleg.aa': 'Abre bem a boca. Os lábios estão relaxados. A língua fica baixa e plana.', // nieuw, nalezen
    'k.uitleg.e': 'A boca está meio aberta, mais do que para «ee». Os lábios estão relaxados. Diz curto.', // nieuw, nalezen
    'k.uitleg.ee': 'A boca está meio aberta. Os lábios esticados, como num sorriso. A ponta da língua toca nos dentes de baixo.', // nieuw, nalezen
    'k.uitleg.i': 'Como para «ie», mas com a boca um pouco mais aberta e relaxada. Diz curto.', // nieuw, nalezen
    'k.uitleg.ie': 'A boca está quase fechada. Os lábios esticados, como num sorriso. A língua está alta e à frente.', // nieuw, nalezen
    'k.uitleg.o': 'A boca está aberta. Os lábios estão um pouco redondos. A língua está atrás. Diz curto.', // nieuw, nalezen
    'k.uitleg.oo': 'Os lábios estão redondos. A boca está meio aberta. No fim, os lábios ficam mais pequenos.', // nieuw, nalezen
    'k.uitleg.u': 'Os lábios estão um pouco redondos, não tensos. A língua está à frente. Diz curto.', // nieuw, nalezen
    'k.uitleg.uu': 'Lábios redondos e tensos, como para um beijo. A língua à frente, como para «ie».', // nieuw, nalezen
    'k.uitleg.oe': 'Põe os lábios redondos e tensos, bem para a frente. Fica só um buraco pequeno. A língua fica atrás na boca.', // nieuw, nalezen
    'k.uitleg.eu': 'A boca está meio aberta. Os lábios estão redondos, mas não tensos. A língua à frente, como para «ee».', // nieuw, nalezen
    'k.uitleg.ui': 'Começa com a boca meio aberta e os lábios redondos. Depois faz os lábios pequenos, até «uu». Ficam sempre redondos.', // nieuw, nalezen
    'k.uitleg.ij': 'Começa com a boca meio aberta e os lábios esticados. Depois fecha quase a boca, até «ie».', // nieuw, nalezen
    'k.uitleg.ou': 'Começa com a boca aberta. Depois faz os lábios pequenos e redondos, até «oe».', // nieuw, nalezen
  },
};
export default t;
