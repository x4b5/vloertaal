import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'Dźwięki niderlandzkie',
    'l.shortlong': 'a czy aa, ui czy ei',
    'w.kl.man': 'mężczyzna',
    'w.kl.maan': 'księżyc',
    'w.kl.zak': 'torba, worek',
    'w.kl.zaak': 'sklep',
    'w.kl.ui': 'cebula',
    'w.kl.ei': 'jajko',
    's.shortlong.1': 'Mężczyzna patrzy na księżyc.',
    's.shortlong.2': 'Włóż cebulę do torby.',
    's.shortlong.3': 'Sklep otwiera się o dziewiątej.',
    'c.shortlong.q': 'Chcesz jajko?',
    'c.shortlong.a': { m: 'Nie, dziękuję. Już jadłem.', f: 'Nie, dziękuję. Już jadłam.', x: 'Nie, dziękuję. Jestem już po jedzeniu.' }, // x: nieuw, nalezen
    'c.shortlong.a.why': 'Ktoś proponuje jajko: grzeczne „nie” z powodem.',
    'l.roundsounds': 'uu, oe i eu',
    'w.kl.muur': 'ściana',
    'w.kl.moer': 'nakrętka (do śruby)',
    'w.kl.buur': 'sąsiad',
    'w.kl.boer': 'rolnik',
    'w.kl.deur': 'drzwi',
    'w.kl.duur': 'drogi',
    's.roundsounds.1': 'Mocno dokręć nakrętkę.',
    's.roundsounds.2': 'Zamknij drzwi, proszę.',
    's.roundsounds.3': 'Ta kurtka jest za droga.',
    'c.roundsounds.q': 'Czy drzwi są otwarte?',
    'c.roundsounds.a': 'Nie, są zamknięte.',
    'c.roundsounds.a.why': 'Pytanie, czy drzwi są otwarte: ta odpowiedź mówi, że nie.',
    'l.pbgk': "p czy b, g, k czy h", // nagelezen (2e lezing) (controle/uitdrukkingen-klanken)
    'w.kl.pak': 'garnitur',
    'w.kl.bak': 'skrzynka, kosz',
    'w.kl.goud': 'złoto',
    'w.kl.koud': 'zimny',
    'w.kl.hoed': 'kapelusz',
    'w.kl.goed': 'dobry, dobrze',
    's.pbgk.1': 'Wyrzuć śmieci do kosza.',
    's.pbgk.2': 'Na korytarzu jest zimno.',
    's.pbgk.3': 'Dobrze ci idzie!',
    'c.pbgk.q': 'Jak się masz?',
    'c.pbgk.a': 'Dobrze, ale jest mi zimno.',
    'c.pbgk.a.why': 'Pytanie, jak się masz: odpowiedź i jak się czujesz.',
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'Otwórz usta, trochę mniej niż przy „aa”. Język cofnij do tyłu. Mów krótko.', // nieuw, nalezen
    'k.uitleg.aa': 'Otwórz szeroko usta. Wargi są rozluźnione. Język leży nisko i płasko.', // nieuw, nalezen
    'k.uitleg.e': 'Usta są półotwarte, bardziej niż przy „ee”. Wargi są rozluźnione. Mów krótko.', // nieuw, nalezen
    'k.uitleg.ee': 'Usta są półotwarte. Wargi szeroko, jak przy uśmiechu. Czubek języka dotyka dolnych zębów.', // nieuw, nalezen
    'k.uitleg.i': 'Jak przy „ie”, ale usta trochę bardziej otwarte i rozluźnione. Mów krótko.', // nieuw, nalezen
    'k.uitleg.ie': 'Usta są prawie zamknięte. Wargi szeroko, jak przy uśmiechu. Język wysoko i z przodu.', // nieuw, nalezen
    'k.uitleg.o': 'Usta są otwarte. Wargi lekko zaokrąglone. Język jest z tyłu. Mów krótko.', // nieuw, nalezen
    'k.uitleg.oo': 'Wargi są okrągłe. Usta półotwarte. Na końcu wargi robią się mniejsze.', // nieuw, nalezen
    'k.uitleg.u': 'Wargi lekko zaokrąglone, nie napięte. Język z przodu. Mów krótko.', // nieuw, nalezen
    'k.uitleg.uu': 'Wargi okrągłe i napięte, jak do pocałunku. Język z przodu, jak przy „i”.', // nieuw, nalezen
    'k.uitleg.oe': 'Zaokrąglij wargi i mocno wysuń je do przodu. Zostaje tylko mały otwór. Język jest cofnięty.', // nieuw, nalezen
    'k.uitleg.eu': 'Usta są półotwarte. Wargi okrągłe, ale nie napięte. Język z przodu, jak przy „ee”.', // nieuw, nalezen
    'k.uitleg.ui': 'Zacznij z półotwartymi ustami i okrągłymi wargami. Potem zmniejsz otwór warg aż do „uu”. Wargi cały czas są okrągłe.', // nieuw, nalezen
    'k.uitleg.ij': 'Zacznij z półotwartymi ustami i szerokimi wargami. Potem prawie zamknij usta, aż do „ie”.', // nieuw, nalezen
    'k.uitleg.ou': 'Zacznij z otwartymi ustami. Potem zrób wargi małe i okrągłe, aż do „oe”.', // nieuw, nalezen
  },
};
export default t;
