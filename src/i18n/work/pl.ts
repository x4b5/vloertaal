import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Ubieganie się o pracę', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'l.cv': 'Twoje CV i list',
    'w.cv': 'CV',
    'w.motivatie': 'motywacja (dlaczego chcesz tę pracę)',
    'w.ervaring': 'doświadczenie',
    'w.opleiding': 'wykształcenie, szkolenie',
    'w.vaardigheden': 'umiejętności',
    'w.referentie': 'referencje (ktoś, kto może opowiedzieć o twojej pracy)',
    's.cv.1': 'Oto moje CV.',
    's.cv.2': 'Mam doświadczenie w budownictwie.',
    's.cv.3': 'Mówię w trzech językach.',
    'c.cv.q': 'Masz referencje?',
    'c.cv.a': 'Tak, od mojego poprzedniego szefa.',
    'l.interview': 'Rozmowa o pracę',
    'w.sollicitatiegesprek': 'rozmowa o pracę',
    'w.begroeten': 'witać się, przywitać',
    'w.vertellen': 'opowiadać',
    'w.vraagstellen': 'zadać pytanie',
    'w.salaris': 'pensja',
    'w.functie': 'stanowisko, praca',
    's.interview.1': 'Mam rozmowę o pracę.',
    's.interview.2': 'Wciąż uczę się niderlandzkiego.',
    's.interview.3': 'Kiedy dostanę od Państwa odpowiedź?',
    'c.interview.q': 'Opowiedz coś o sobie.',
    'c.interview.a': { m: 'Przez pięć lat pracowałem w magazynie.', f: 'Przez pięć lat pracowałam w magazynie.', x: 'Mam pięć lat doświadczenia w magazynie.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'u.contract': 'Praca i umowy',
    'l.findwork': 'Szukanie pracy',
    'w.vacature': 'oferta pracy, wakat',
    'w.uitzendbureau': 'agencja pracy',
    'w.solliciteren': 'starać się o pracę, aplikować',
    'w.contract': 'umowa',
    'w.tekenen': 'podpisać',
    'w.tijdelijk': 'tymczasowy, na czas określony',
    's.findwork.1': 'Chcę się starać o pracę.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.findwork.2': 'Umowa jest na czas określony czy na stałe?',
    's.findwork.3': 'Czy mogę dostać kopię umowy?',
    'c.findwork.q': 'Jakiej pracy szukasz?',
    'c.findwork.a': 'Szukam pracy w magazynie.',
    'l.contract': 'Twoja umowa',
    'w.werkgever': 'pracodawca',
    'w.uren': 'godziny',
    'w.oproepkracht': 'pracownik na wezwanie',
    'w.proeftijd': 'okres próbny',
    'w.opzegtermijn': 'okres wypowiedzenia',
    'w.cao': 'układ zbiorowy (cao)',
    's.contract.1': 'Ile godzin tygodniowo pracuję?',
    's.contract.2': 'Jak długo trwa okres próbny?',
    's.contract.3': 'Który układ zbiorowy (cao) mnie dotyczy?',
    'c.contract.q': 'Możesz jutro przyjść do pracy?',
    'c.contract.a': 'Tak, o której mam być?',
    'l.agency': 'Praca przez agencję',
    'w.uitzendkracht': 'pracownik tymczasowy (z agencji pracy)',
    'w.intercedent': 'osoba kontaktowa w agencji pracy',
    'w.urenbriefje': 'karta godzin pracy',
    'w.opdracht': 'projekt (praca w danej firmie)',
    'w.verlengen': 'przedłużyć',
    'w.uitbetalen': 'wypłacić',
    's.agency.1': 'Pracuję przez agencję pracy.',
    's.agency.2': 'Czy mój projekt zostanie przedłużony?',
    's.agency.3': 'Kiedy kończy się mój projekt?',
    'c.agency.q': { m: 'Zgłosiłeś swoje godziny?', f: 'Zgłosiłaś swoje godziny?', x: 'Twoje godziny są już zgłoszone?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.a': 'Tak, wczoraj w aplikacji.',
    'u.papers': 'Mieszkanie i dokumenty',
    'l.bsn': 'Twój BSN i dokumenty',
    'w.bsn': 'numer obywatelski (BSN)',
    'w.identiteitsbewijs': 'dokument tożsamości',
    'w.gemeente': 'urząd gminy, gmina',
    'w.inschrijven': 'zameldować się, zarejestrować się',
    'w.adres': 'adres',
    'w.zorgverzekering': 'ubezpieczenie zdrowotne',
    's.bsn.1': 'Melduję się w urzędzie gminy.',
    's.bsn.2': 'Zmienił się mój adres.',
    's.bsn.3': 'Loguję się przez DigiD.',
    'c.bsn.q': 'Mogę zobaczyć twój dokument tożsamości?',
    'c.bsn.a': 'Tak, oto mój paszport.',
    'l.housing': 'Mieszkanie',
    'w.kamer': 'pokój',
    'w.huur': 'czynsz',
    'w.huurcontract': 'umowa najmu',
    'w.borg': 'kaucja',
    'w.huisbaas': 'właściciel mieszkania',
    'w.inhouden': 'potrącać (z wypłaty)',
    's.housing.1': 'Ile wynosi czynsz za tydzień?',
    's.housing.2': 'Czy dostanę z powrotem kaucję?',
    's.housing.3': 'Chcę osobną umowę najmu.',
    'c.housing.q': 'Czynsz potrącamy z twojej wypłaty.',
    'c.housing.a': 'W takim razie chcę to na piśmie.',
    'u.pay': 'Wynagrodzenie',
    'l.payslip': 'Twój pasek wypłaty',
    'w.loon': 'wynagrodzenie, płaca',
    'w.bruto': 'brutto (przed podatkiem)',
    'w.netto': 'netto (to, co dostajesz)',
    'w.loonstrook': 'pasek wypłaty',
    'w.belasting': 'podatek',
    'w.uurloon': 'stawka godzinowa',
    's.payslip.1': 'Ile wynosi moja stawka godzinowa?',
    's.payslip.2': 'Mój pasek wypłaty się nie zgadza.',
    's.payslip.3': 'Netto to mniej niż brutto.',
    'c.payslip.q': { m: 'Dostałeś pasek wypłaty?', f: 'Dostałaś pasek wypłaty?', x: 'Masz już pasek wypłaty?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.a': 'Tak, ale brakuje kilku godzin.',
    'l.extra': 'Dodatkowe pieniądze',
    'w.vakantiegeld': 'dodatek urlopowy',
    'w.overuren': 'nadgodziny',
    'w.toeslag': 'dodatek (do pensji)',
    'w.minimumloon': 'płaca minimalna',
    'w.bankrekening': 'konto bankowe',
    'w.betalen': 'płacić',
    's.extra.1': 'Czy dostaję dodatek za pracę w nocy?',
    's.extra.2': 'Czy nadgodziny są płatne?',
    's.extra.3': 'Moja wypłata wpływa na moje konto bankowe.',
    'c.extra.q': 'Możesz dziś zostać dwie godziny dłużej?',
    'c.extra.a': 'Tak, zapiszesz mi nadgodziny?',
    'u.house': 'Zasady w firmie',
    'l.phone': 'Twój telefon w pracy',
    'w.telefoon': 'telefon',
    'w.appen': 'pisać wiadomość (w aplikacji)',
    'w.kluisje': 'szafka',
    'w.uitzetten': 'wyłączyć',
    'w.prive': 'prywatny',
    'w.foto': 'zdjęcie',
    's.phone.1': 'Mój telefon jest w szafce.',
    's.phone.2': 'Wyłączam telefon.',
    's.phone.3': 'Czy mogę tu zrobić zdjęcie?',
    'c.phone.q': 'Bez telefonu przy maszynie, dobrze?',
    'c.phone.a': 'Dobrze, wiadomości napiszę w przerwie.',
    'l.smoking': 'Palenie',
    'w.roken': 'palić',
    'w.rookplek': 'miejsce dla palących',
    'w.verboden': 'zabroniony, nie wolno',
    'w.buiten': 'na zewnątrz',
    'w.esigaret': 'e-papieros',
    'w.brandbaar': 'łatwopalny',
    's.smoking.1': 'Tu nie wolno palić.',
    's.smoking.2': 'Gdzie jest miejsce dla palących?',
    's.smoking.3': 'Palę tylko na zewnątrz, w przerwie.',
    'c.smoking.q': 'Idziesz zapalić?',
    'c.smoking.a': 'Nie, nie mam jeszcze przerwy.',
    'l.clock': 'Odbijanie karty i punktualność',
    'w.inklokken': 'odbić kartę na wejściu',
    'w.uitklokken': 'odbić kartę na wyjściu',
    'w.pasje': 'karta (pracownicza)',
    'w.prikklok': 'czytnik kart, zegar do odbijania',
    'w.optijd': 'na czas',
    'w.rooster': 'grafik pracy',
    's.clock.1': 'Odbijam kartę o szóstej.',
    's.clock.2': { m: 'Zapomniałem karty.', f: 'Zapomniałam karty.', x: 'Karta została mi w domu.' }, // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    's.clock.3': 'Gdzie jest grafik pracy?',
    'c.clock.q': 'Odbijesz za mnie kartę?',
    'c.clock.a': 'Nie, tak nie wolno.',
    'l.hygiene': 'Alkohol, narkotyki i higiena',
    'w.alcohol': 'alkohol',
    'w.medicijn': 'lek',
    'w.handenwassen': 'myć ręce',
    'w.werkkleding': 'ubranie robocze',
    'w.haarnetje': 'siateczka na włosy',
    'w.schoon': 'czysty',
    's.hygiene.1': 'Umyj ręce przed pracą.',
    's.hygiene.2': 'Alkohol i narkotyki są zabronione.',
    's.hygiene.3': 'Moje ubranie robocze jest czyste.',
    'c.hygiene.q': 'Masz na sobie siateczkę na włosy?',
    'c.hygiene.a': { m: 'Tak, i zdjąłem pierścionek.', f: 'Tak, i zdjęłam pierścionek.', x: 'Tak, i pierścionek już zdjęty.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'u.social': 'Dobre relacje',
    'l.smalltalk': 'Pogawędki i przerwy',
    'w.weekend': 'weekend',
    'w.koffie': 'kawa',
    'w.gezellig': 'miło, przytulnie (razem)',
    'w.weer': 'pogoda',
    'w.verjaardag': 'urodziny',
    'w.gefeliciteerd': 'gratulacje, wszystkiego najlepszego',
    's.smalltalk.1': 'Jak minął ci weekend?',
    's.smalltalk.2': 'Mogę się do was przysiąść?',
    's.smalltalk.3': 'Dziś jest ładna pogoda.',
    'c.smalltalk.q': { m: 'Co robiłeś w weekend?', f: 'Co robiłaś w weekend?', x: 'Jak ci minął weekend?' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.smalltalk.a': { m: 'Grałem w piłkę z przyjaciółmi.', f: 'Grałam w piłkę z przyjaciółmi.', x: 'Na grze w piłkę z przyjaciółmi.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'l.mistakes': 'Uwagi i błędy',
    'w.fout': 'błąd',
    'w.compliment': 'komplement, pochwała',
    'w.feedback': "feedback, informacja zwrotna (to, co ktoś mówi o twojej pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitleggen': 'wyjaśniać',
    'w.leren': 'uczyć się',
    'w.verbeteren': 'poprawiać, ulepszać',
    's.mistakes.1': { m: 'Przepraszam, popełniłem błąd.', f: 'Przepraszam, popełniłam błąd.', x: 'Przepraszam, to mój błąd.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    's.mistakes.2': 'Możesz to wyjaśnić?',
    's.mistakes.3': 'Dziękuję za komplement!',
    'c.mistakes.q': 'Dobra robota!',
    'c.mistakes.a': 'Dziękuję, miło to słyszeć.',
    'l.respect': 'Szacunek dla wszystkich',
    'w.respect': 'szacunek',
    'w.gelijk': 'równy',
    'w.grens': 'granica',
    'w.neezeggen': 'powiedzieć „nie”',
    'w.pesten': 'nękać, gnębić',
    'w.vertrouwenspersoon': 'osoba zaufania (w firmie)',
    's.respect.1': 'Tutaj wszyscy są równi.',
    's.respect.2': 'Nie zgadzam się na to.',
    's.respect.3': 'Stop, to moja granica.',
    'c.respect.q': { m: 'Co się stało? Wyglądasz na smutnego.', f: 'Co się stało? Wyglądasz na smutną.', x: 'Co się stało? Coś cię smuci?' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.respect.a': 'Kolega mnie nęka.',
    'u.rights': 'Zasady i prawa',
    'l.health': 'Bezpieczna i zdrowa praca',
    'w.arbowet': 'ustawa o BHP',
    'w.veilig': 'bezpieczny',
    'w.werktijden': 'godziny pracy',
    'w.rust': 'odpoczynek',
    'w.beschermingsmiddelen': 'środki ochrony',
    'w.arbeidsinspectie': 'Inspekcja Pracy',
    's.health.1': 'Mam prawo do przerwy.',
    's.health.2': 'Praca musi być bezpieczna.',
    's.health.3': 'Zgłaszam to do Inspekcji Pracy.',
    'c.health.q': 'Musisz teraz zrobić przerwę.',
    'c.health.a': 'Dobrze, chwilę usiądę.',
    'l.rights': 'Twoje prawa',
    'w.recht': 'prawo (do czegoś)',
    'w.discriminatie': 'dyskryminacja',
    'w.vakbond': 'związek zawodowy',
    'w.juridischloket': 'darmowa pomoc prawna',
    'w.klacht': 'skarga',
    'w.ontslag': 'zwolnienie (z pracy)',
    's.rights.1': 'Chcę złożyć skargę.',
    's.rights.2': 'Jestem członkiem związku zawodowego.',
    's.rights.3': 'To jest dyskryminacja.',
    'c.rights.q': 'Podpisz tutaj swoje zwolnienie.',
    'c.rights.a': 'Nie, jeszcze tego nie podpiszę.',
    'l.mustmay': 'Musisz czy możesz wybrać?',
    'w.moeten': 'musieć',
    'w.niethoeven': 'nie musieć',
    'w.nodig': 'potrzebny, konieczny',
    'w.vrijwillig': 'dobrowolny, z wyboru',
    'w.keuze': 'wybór',
    'w.regel': 'zasada, reguła',
    's.mustmay.1': 'Czy muszę to podpisać?',
    's.mustmay.2': 'Nie, nie musisz podpisywać.',
    's.mustmay.3': 'Taka jest zasada: kask jest obowiązkowy.',
    'c.mustmay.q': 'Czy muszę pracować w nadgodzinach w sobotę?',
    'c.mustmay.a': 'Nie, to nie jest potrzebne. To dobrowolne.',
    'u.leave': "Urlop", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': 'Dni wolne',
    'w.vakantiedagen': 'dni urlopu',
    'w.verlof': 'urlop',
    'w.aanvragen': 'prosić o coś, składać wniosek',
    'w.feestdag': 'święto',
    'w.vrij': 'wolny (bez pracy)',
    'w.calamiteitenverlof': 'urlop w nagłej sytuacji',
    's.leave.1': 'Chcę poprosić o urlop.',
    's.leave.2': 'Czy w święto mam wolne?',
    's.leave.3': 'Mam nagłą sytuację w domu.',
    'c.leave.q': 'Kiedy chcesz jechać na urlop?',
    'c.leave.a': 'W lipcu, na trzy tygodnie.',
    'l.illness': { m: 'Chory w domu', f: 'Chora w domu', x: 'W domu z powodu choroby' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.ziekmelden': 'zgłosić chorobę',
    'w.betermelden': 'zgłosić powrót do zdrowia',
    'w.bedrijfsarts': 'lekarz zakładowy',
    'w.ziekte': 'choroba',
    'w.doorbetalen': 'dalej płacić',
    'w.wachtdag': 'dzień bez wypłaty (na początku choroby)',
    's.illness.1': { m: 'Zgłaszam, że jestem chory.', f: 'Zgłaszam, że jestem chora.', x: 'Zgłaszam chorobę.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.illness.2': 'Mam wizytę u lekarza zakładowego.',
    's.illness.3': 'Jutro wracam do pracy.',
    'c.illness.q': 'Co dokładnie ci jest?',
    'c.illness.a': 'Porozmawiam o tym z lekarzem zakładowym.',
    'u.exploit': 'Znaj swoje prawa: wyzysk',
    'l.warning': 'Sygnały ostrzegawcze',
    'w.uitbuiting': 'wyzysk',
    'w.paspoort': 'paszport',
    'w.schuld': 'dług',
    'w.dreigen': 'grozić',
    'w.onderbetaald': 'za mało opłacany',
    'w.afpakken': 'zabrać',
    's.warning.1': 'Mój szef ma mój paszport.',
    's.warning.2': 'Nie dostaję paska wypłaty.',
    's.warning.3': 'Muszę spłacić dług.',
    'c.warning.q': 'Po prostu daj mi swój paszport.',
    'c.warning.a': 'Nie, może pan/pani zrobić tylko kopię.',
    'l.gethelp': 'Szukanie pomocy',
    'w.politie': 'policja',
    'w.anoniem': 'bez podawania nazwiska (anonimowo)',
    'w.melden': 'zgłaszać',
    'w.hulp': 'pomoc',
    'w.gevaar': 'niebezpieczeństwo',
    'w.bang': 'przestraszony, boję się',
    's.gethelp.1': 'Chcę coś zgłosić.',
    's.gethelp.2': 'Czy mogę to zrobić bez podawania nazwiska?',
    's.gethelp.3': 'Boję się mojego szefa.',
    'c.gethelp.q': 'Jak mogę ci pomóc?',
    'c.gethelp.a': 'W pracy źle mnie traktują.',
    'u.contact': 'Telefony i wiadomości do pracy',
    'l.callin': 'Dzwonienie do pracy',
    'w.telefoontje': 'telefon, rozmowa telefoniczna',
    'w.terugbellen': 'oddzwonić',
    'w.bereikbaar': 'osiągalny (pod telefonem)',
    'w.reden': 'powód',
    'w.overmorgen': 'pojutrze',
    'w.inspreken': 'nagrać wiadomość głosową',
    's.callin.1': 'Dzień dobry, mówi Ali.',
    's.callin.2': 'Myślę, że wrócę pojutrze.',
    's.callin.3': 'Czy może pan/pani do mnie oddzwonić?',
    'c.callin.q': 'Kiedy wrócisz?',
    'c.callin.a': 'Myślę, że w poniedziałek.',
    'l.texting': 'Wiadomości i aplikacja z grafikiem',
    'w.bericht': 'wiadomość',
    'w.app': 'aplikacja',
    'w.reageren': 'odpowiadać, reagować',
    'w.ruilen': 'zamienić się',
    'w.kijken': 'patrzeć, sprawdzać',
    'w.groet': 'pozdrowienie (na końcu wiadomości)',
    's.texting.1': 'Spóźnię się dziesięć minut.',
    's.texting.2': 'Czy ktoś chce się ze mną zamienić zmianami?',
    's.texting.3': 'Codziennie sprawdzam aplikację.',
    'c.texting.q': 'Możesz wziąć dodatkową zmianę w sobotę?',
    'c.texting.a': 'Tak, zaraz odpowiem w aplikacji.',
    'u.grow': 'Dyplomy i rozwój',
    'l.certs': 'Certyfikaty',
    'w.certificaat': 'certyfikat',
    'w.cursus': 'kurs',
    'w.examen': 'egzamin',
    'w.slagen': 'zdać (egzamin)',
    'w.heftruckcertificaat': 'uprawnienia na wózek widłowy',
    'w.halen': 'zdobyć (certyfikat)',
    's.certs.1': 'Mam certyfikat bezpieczeństwa VCA.',
    's.certs.2': 'Chcę zrobić kurs.',
    's.certs.3': 'Czy pracodawca płaci za kurs?',
    'c.certs.q': 'Masz uprawnienia na wózek widłowy?',
    'c.certs.a': 'Nie, ale chętnie je zdobędę.',
    'l.diploma': 'Twój dyplom i szkolenia',
    'w.diploma': 'dyplom',
    'w.waarderen': 'dać dyplom do oceny',
    'w.training': 'szkolenie',
    'w.verplicht': 'obowiązkowy',
    'w.werktijd': 'czas pracy',
    'w.verderkomen': 'awansować, rozwijać się',
    's.diploma.1': 'Mam dyplom z mojego kraju.',
    's.diploma.2': 'Czy to szkolenie jest obowiązkowe?',
    's.diploma.3': 'Chcę się rozwijać w pracy.',
    'c.diploma.q': 'Chcesz zrobić szkolenie?',
    'c.diploma.a': 'Tak, chętnie! Kto za to płaci?',
    'u.health': 'Zdrowie',
    'l.doctor': 'Lekarz czy 112?',
    'w.huisarts': 'lekarz rodzinny',
    'w.huisartsenpost': 'dyżur lekarski wieczorem, w nocy i w weekend',
    'w.apotheek': 'apteka',
    'w.recept': 'recepta',
    'w.spoed': 'pilne',
    'w.ambulance': 'karetka',
    's.doctor.1': 'Chcę się umówić do lekarza rodzinnego.',
    's.doctor.2': 'Gdzie jest apteka?',
    's.doctor.3': 'To pilne.',
    'c.doctor.q': 'Dyżur lekarski, w czym mogę pomóc?',
    'c.doctor.a': 'Mój syn ma wysoką gorączkę.',
    'l.insurance': 'Ubezpieczenie zdrowotne',
    'w.premie': 'składka (płacona co miesiąc)',
    'w.eigenrisico': { m: 'udział własny (koszty, które najpierw płacisz sam)', f: 'udział własny (koszty, które najpierw płacisz sama)', x: 'udział własny (koszty, które najpierw płacisz z własnej kieszeni)' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.zorgtoeslag': 'dopłata do ubezpieczenia zdrowotnego',
    'w.verzekeraar': 'ubezpieczyciel',
    'w.permaand': 'miesięcznie',
    'w.vergoeden': 'pokrywać (zwracać) koszty',
    's.insurance.1': 'Co miesiąc płacę składkę.',
    's.insurance.2': 'Czy to jest refundowane?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.insurance.3': 'Składam wniosek o zorgtoeslag.',
    'c.insurance.q': { m: 'Gdzie jesteś ubezpieczony?', f: 'Gdzie jesteś ubezpieczona?', x: 'Gdzie masz ubezpieczenie?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.a': 'To jest na mojej karcie ubezpieczenia.',
    'u.money': 'Pieniądze i listy',
    'l.letters': 'Oficjalne listy',
    'w.brief': 'list',
    'w.post': 'poczta',
    'w.belastingdienst': 'urząd skarbowy',
    'w.aangifte': 'zeznanie podatkowe',
    'w.inkomen': 'dochód',
    'w.terugbetalen': 'zwrócić, oddać pieniądze',
    's.letters.1': 'Nie rozumiem tego listu.',
    's.letters.2': 'Pomożesz mi z tym listem?',
    's.letters.3': 'Zmienił się mój dochód.',
    'c.letters.q': { m: 'Złożyłeś już zeznanie podatkowe?', f: 'Złożyłaś już zeznanie podatkowe?', x: 'Zeznanie podatkowe już złożone?' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.letters.a': 'Nie, zrobię to przed 1 maja.',
    'l.scams': 'Uważaj na oszustów',
    'w.pincode': 'PIN',
    'w.link': 'link',
    'w.oplichter': 'oszust',
    'w.sms': 'SMS',
    'w.controleren': 'sprawdzać',
    'w.nep': 'fałszywy',
    's.scams.1': 'Nigdy nie podaję PIN-u.',
    's.scams.2': 'Nie klikam w link.',
    's.scams.3': 'Ta wiadomość jest fałszywa.',
    'c.scams.q': 'Tu bank. Jaki jest pana/pani PIN?',
    'c.scams.a': 'Nie podam go. Rozłączam się.',
    'u.travel': 'Dojazd do pracy',
    'l.bike': 'Rowerem',
    'w.fiets': 'rower',
    'w.fietspad': 'ścieżka rowerowa',
    'w.licht': 'światło',
    'w.slot': 'zamek, zapięcie',
    'w.stoplicht': 'sygnalizacja świetlna',
    'w.bel': 'dzwonek',
    's.bike.1': 'Jeżdżę do pracy rowerem.',
    's.bike.2': 'Włącz światło!',
    's.bike.3': 'Zapnij rower.',
    'c.bike.q': 'Jak dojeżdżasz do pracy?',
    'c.bike.a': 'Rowerem, dwadzieścia minut.',
    'l.transit': 'Komunikacja i koszty dojazdu',
    'w.bus': 'autobus',
    'w.trein': 'pociąg',
    'w.inchecken': 'zbliżyć kartę przy wejściu (check-in)',
    'w.uitchecken': 'zbliżyć kartę przy wyjściu (check-out)',
    'w.bankpas': 'karta bankowa',
    'w.reiskosten': 'zwrot kosztów dojazdu',
    's.transit.1': 'Przy wejściu zbliżam kartę bankową do czytnika.',
    's.transit.2': 'Nie zapomnij zbliżyć karty przy wyjściu (check-out).',
    's.transit.3': 'Gdzie jest przystanek autobusowy?',
    'c.transit.q': 'Przyjedziesz pociągiem?',
    'c.transit.a': 'Nie, autobusem. Zatrzymuje się pod drzwiami.',
    'u.lost': 'Utrata pracy',
    'l.ww': 'Zasiłek dla bezrobotnych',
    'w.uitkering': 'zasiłek (pieniądze od państwa)',
    'w.ww': 'zasiłek dla bezrobotnych',
    'w.werkloos': 'bezrobotny',
    'w.uwv': 'UWV (urząd pracy i zasiłków)',
    'w.ontslagnemen': 'zwolnić się z pracy',
    'w.werkzoekende': 'osoba szukająca pracy',
    's.ww.1': 'Składam w UWV wniosek o zasiłek dla bezrobotnych.',
    's.ww.2': { m: 'Jestem bezrobotny.', f: 'Jestem bezrobotna.', x: 'Nie mam pracy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.ww.3': 'Moja umowa się kończy.',
    'c.ww.q': 'Co zrobisz teraz, gdy kończy się twoja umowa?',
    'c.ww.a': 'Od razu złożę wniosek o zasiłek dla bezrobotnych.',
    'l.newjob': 'Szukanie nowej pracy',
    'w.baan': 'praca, posada',
    'w.zoeken': 'szukać',
    'w.bewaren': 'zachować, przechowywać',
    'w.bijwerken': 'zaktualizować',
    'w.gratis': 'za darmo',
    'w.nooit': 'nigdy',
    's.newjob.1': 'Szukam nowej pracy.',
    's.newjob.2': 'Zachowuję moje paski wypłaty.',
    's.newjob.3': 'Szukanie pracy jest darmowe.',
    'c.newjob.q': 'Możemy do ciebie zadzwonić, gdy będzie praca?',
    'c.newjob.a': 'Tak, proszę. Oto mój numer.',
    'u.build': 'Na budowie',
    'l.tools': 'Narzędzia i materiały',
    'w.steiger': 'rusztowanie',
    'w.ladder': 'drabina',
    'w.boor': 'wiertarka',
    'w.hamer': 'młotek',
    'w.beton': 'beton',
    'w.kraan': 'dźwig',
    's.tools.1': 'Podaj mi na chwilę młotek.',
    's.tools.2': 'Drabina stoi przy rusztowaniu.',
    's.tools.3': 'Beton jest jeszcze mokry.',
    'c.tools.q': 'Gdzie jest wiertarka?',
    'c.tools.a': 'W busie, z tyłu.',
    'l.site': 'Bezpieczeństwo na budowie',
    'w.valbeveiliging': 'zabezpieczenie przed upadkiem (szelki)',
    'w.last': 'ładunek',
    'w.gat': 'dziura, otwór',
    'w.vallen': 'spaść, upaść',
    'w.risico': 'ryzyko',
    'w.weigeren': 'odmówić',
    's.site.1': 'Uwaga, ładunek nad głową!',
    's.site.2': 'Załóż zabezpieczenie przed upadkiem.',
    's.site.3': 'Najpierw robię szybką ocenę ryzyka.',
    'c.site.q': 'Możesz na chwilę pomóc na dachu?',
    'c.site.a': 'Tak, ale najpierw moje szelki.',
    'u.factory': 'W fabryce',
    'l.line': 'Linia i maszyny',
    'w.lopendeband': 'taśma, linia produkcyjna',
    'w.machine': 'maszyna',
    'w.storing': 'awaria, usterka',
    'w.noodstop': 'wyłącznik awaryjny',
    'w.inpakken': 'pakować',
    'w.productie': 'produkcja',
    's.line.1': 'Linia stanęła.',
    's.line.2': 'Jest awaria.',
    's.line.3': 'Pakuję produkty.',
    'c.line.q': 'Jak idzie na linii?',
    'c.line.a': 'Dobrze, ale maszyna jest bardzo wolna.',
    'l.quality': 'Jakość',
    'w.kwaliteit': 'jakość',
    'w.product': 'produkt',
    'w.afkeuren': 'odrzucić (wadliwy produkt)',
    'w.beschadigd': 'uszkodzony',
    'w.etiket': 'etykieta',
    'w.lijst': 'lista',
    's.quality.1': 'Ten produkt jest uszkodzony.',
    's.quality.2': 'Etykieta się nie zgadza.',
    's.quality.3': 'Czy mam to odrzucić?',
    'c.quality.q': 'Dlaczego to jest odłożone?',
    'c.quality.a': 'Etykieta jest krzywo naklejona.',
    'u.care': 'W opiece',
    'l.client': 'Podopieczny i codzienna opieka',
    'w.client': 'podopieczny (osoba, którą się opiekujesz)',
    'w.wassen': 'myć',
    'w.aankleden': 'ubierać się, ubrać kogoś',
    'w.eten': 'jedzenie',
    'w.rolstoel': 'wózek inwalidzki',
    'w.verpleegkundige': 'pielęgniarka, pielęgniarz',
    's.client.1': 'Dobrze się panu/pani spało?',
    's.client.2': 'Pomogę panu/pani się ubrać.',
    's.client.3': 'Zje pan/pani jeszcze coś?',
    'c.client.q': 'Może mi pan/pani pomóc z płaszczem?',
    'c.client.a': 'Oczywiście, pomogę panu/pani.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'l.privacy': 'Prywatność i bezpieczeństwo w opiece',
    'w.privacy': 'prywatność',
    'w.hygiene': 'higiena',
    'w.doorgeven': 'przekazać (informację)',
    'w.geheim': 'tajny, w tajemnicy',
    'w.toestemming': 'zgoda',
    'w.gevallen': 'upadł, upadła',
    's.privacy.1': 'Ta pani upadła.',
    's.privacy.2': 'Przekażę to pielęgniarce.',
    's.privacy.3': 'W domu nie rozmawiam o podopiecznych.',
    'c.privacy.q': 'Możesz dać panu Jansenowi jego tabletki?',
    'c.privacy.a': 'Nie, nie wolno mi. Zawołam pielęgniarkę.',
    'u.horeca': 'W gastronomii',
    'l.kitchen': 'W kuchni',
    'w.keuken': 'kuchnia',
    'w.snijden': 'kroić',
    'w.pan': 'garnek, patelnia',
    'w.koelcel': 'chłodnia',
    'w.allergie': 'alergia',
    'w.datum': 'data',
    's.kitchen.1': 'Włóż mięso do chłodni.',
    's.kitchen.2': 'Pokrój cebulę drobno.',
    's.kitchen.3': 'Czy są w tym orzechy?',
    'c.kitchen.q': 'Gość ma alergię na orzechy.',
    'c.kitchen.a': 'Zapytam szefa kuchni.',
    'l.service': 'Obsługa gości',
    'w.gast': 'gość',
    'w.bestelling': 'zamówienie',
    'w.rekening': 'rachunek',
    'w.menu': 'menu, karta',
    'w.afruimen': 'sprzątać (ze stołu)',
    'w.fooi': 'napiwek',
    's.service.1': 'Co podać do picia?',
    's.service.2': 'Czy mogę przyjąć zamówienie?',
    's.service.3': 'Sprzątam ze stołu.',
    'c.service.q': 'Możemy prosić o rachunek?',
    'c.service.a': 'Oczywiście, już idę.',
    'u.clean': 'Sprzątanie',
    'l.cleaning': 'Środki do sprzątania',
    'w.dweil': 'mop, ścierka do podłogi',
    'w.emmer': 'wiadro',
    'w.schoonmaakmiddel': 'środek czyszczący',
    'w.stofzuiger': 'odkurzacz',
    'w.stoffen': 'ścierać kurze',
    'w.prullenbak': 'kosz na śmieci',
    's.cleaning.1': 'Gdzie jest wiadro?',
    's.cleaning.2': 'Idę odkurzyć korytarz.',
    's.cleaning.3': 'Opróżnij kosz.',
    'c.cleaning.q': { m: 'Skończyłeś już toalety?', f: 'Skończyłaś już toalety?', x: 'Toalety już gotowe?' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.cleaning.a': 'Prawie, jeszcze dwie.',
    'l.cleansafe': 'Bezpieczne sprzątanie',
    'w.glad': 'śliski',
    'w.bordje': 'tabliczka',
    'w.mengen': 'mieszać',
    'w.damp': 'opary',
    'w.luchten': 'wietrzyć',
    'w.spoelen': 'płukać',
    's.cleansafe.1': 'Uwaga, ślisko!',
    's.cleansafe.2': 'Postaw tabliczkę.',
    's.cleansafe.3': 'Nigdy nie mieszaj środków czyszczących.',
    'c.cleansafe.q': 'Mogę tu przejść?',
    'c.cleansafe.a': 'Uważaj, podłoga jest jeszcze śliska.',
    'c.cv': 'Krótkie CV', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': 'Tutaj CV jest krótkie: 1 albo 2 strony. Napisz dane kontaktowe, doświadczenie zawodowe, wykształcenie, języki i umiejętności. Zdjęcie nie jest potrzebne. Nie musisz pisać o religii, wieku ani stanie cywilnym. Pisz uczciwie o tym, co umiesz. Poproś kogoś, żeby sprawdził twój niderlandzki.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': 'Przeczytasz moje CV? Czy mój niderlandzki jest poprawny?',
    'c.cv.s': { m: 'Przez 3 lata pracowałeś w fabryce w swoim kraju, ale nie masz dyplomu. Co wpisujesz do CV?', f: 'Przez 3 lata pracowałaś w fabryce w swoim kraju, ale nie masz dyplomu. Co wpisujesz do CV?', x: 'Masz za sobą 3 lata pracy w fabryce w swoim kraju, ale nie masz dyplomu. Co wpisujesz do CV?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.o1': { m: 'Uczciwie wpisujesz tę pracę i to, co tam robiłeś.', f: 'Uczciwie wpisujesz tę pracę i to, co tam robiłaś.', x: 'Uczciwie wpisujesz tę pracę i swoje zadania.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.o2': 'Nic nie wpisujesz, bo nie masz dyplomu.',
    'c.cv.o3': 'Piszesz, że masz dyplom, żeby lepiej wypaść.',
    'c.cv.w': 'Doświadczenie zawodowe się liczy, także z zagranicy. Uczciwość jest ważna: pracodawcy mogą to sprawdzić.',
    'c.interview': 'Rozmowa o pracę',
    'c.interview.b': 'Przyjdź na czas: 5 do 10 minut wcześniej. Grzecznie się przywitaj i patrz na tę osobę. Krótko powiedz, co umiesz. Zadawanie własnych pytań jest normalne i dobrze widziane, np. o godziny, pracę albo szkolenia. Na koniec możesz zapytać, kiedy dostaniesz odpowiedź. Możesz spokojnie powiedzieć, że wciąż uczysz się niderlandzkiego. Pracodawca nie może pytać o twoją religię, ciążę ani zdrowie. Nie musisz odpowiadać: możesz grzecznie powiedzieć, że wolisz nie odpowiadać.',
    'c.interview.p': 'Czy ja też mogę o coś zapytać? Na ile godzin tygodniowo jest ta praca?',
    'c.interview.s': 'Na koniec rozmowy pracodawca pyta: „Heb je nog vragen?” Co robisz?',
    'c.interview.o1': 'Zadajesz pytanie o godziny albo szkolenia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Mówisz „nie”, bo zadawanie pytań jest niegrzeczne.',
    'c.interview.o3': 'Mówisz więcej o sobie, żeby pokazać, że dobrze pracujesz.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'Pytania pokazują, że interesuje cię ta praca. Tutaj pracodawcy często ich oczekują.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Poproś o umowę na piśmie', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.findwork.b': 'Zawsze proś o umowę na piśmie i kopię dla siebie. Przeczytaj ją, zanim podpiszesz, albo poproś o pomoc kogoś, komu ufasz. Agencja pracy (uitzendbureau) nie może brać od ciebie pieniędzy za znalezienie pracy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.findwork.p': 'Mogę najpierw przeczytać umowę?',
    'c.findwork.s': 'Nowy pracodawca mówi: „Podpisz tu teraz. Przeczytasz później.” Co robisz?',
    'c.findwork.o1': 'Prosisz o czas na przeczytanie albo o kopię.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': 'Szybko podpisujesz, żeby nie stracić pracy.',
    'c.findwork.o3': 'Podpisujesz, a potem prosisz o kopię.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.w': 'W umowie jest napisane, ile zarabiasz i jakie masz prawa. Dobry pracodawca daje ci czas na przeczytanie. Możesz pytać o wszystko, czego nie rozumiesz.',
    'c.contract': 'Okres próbny i praca na wezwanie',
    'c.contract.b': 'Okres próbny (proeftijd) musi być zapisany na piśmie. Nie jest dozwolony w umowie na 6 miesięcy albo krócej. W dłuższej umowie, ale krótszej niż 2 lata, trwa najwyżej 1 miesiąc. W umowie na 2 lata albo dłużej, albo na stałe, trwa najwyżej 2 miesiące. Pracujesz na wezwanie (oproepkracht)? Pracodawca zwykle musi wezwać cię co najmniej 4 dni wcześniej. Jeśli wezwie cię później, nie musisz przychodzić. Cao może skrócić te 4 dni, ale nie do mniej niż 1 dnia. Jeśli odwołają twoją pracę później niż w tym terminie, i tak dostajesz zapłatę. Jeśli wezwą cię na mniej niż 3 godziny pracy, zwykle dostajesz zapłatę za 3 godziny. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', // nalezen: feit gelijk getrokken // nagelezen AI 22 nov
    'c.contract.p': 'Czy w mojej umowie jest okres próbny?',
    'c.contract.s': 'Twoja umowa jest na 3 miesiące. Jest w niej napisane: „Proeftijd: 1 maand”. Co robisz?',
    'c.contract.o1': 'Pytasz o to: ten okres próbny się nie liczy.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.contract.o2': 'Nic. Każda umowa ma okres próbny.',
    'c.contract.o3': 'Podpisujesz i nigdy nie pytasz, bo szef wie najlepiej.',
    'c.contract.w': 'Okres próbny w umowie na 6 miesięcy albo krócej nie obowiązuje. Spokojne pytanie jest normalne. Jeśli odpowiedź nie jest jasna, poproś o radę związek zawodowy albo Juridisch Loket.',
    'c.agency': 'Agencja jest twoim pracodawcą',
    'c.agency.b': 'Jeśli pracujesz przez agencję pracy (uitzendbureau), twoim pracodawcą jest agencja, a nie firma, w której pracujesz. Umowę i wynagrodzenie dostajesz od agencji, a dla pracowników tymczasowych jest układ zbiorowy (uitzend-cao). Masz prawo do takiego samego wynagrodzenia jak pracownicy tej firmy, którzy wykonują tę samą pracę. Dostajesz też dodatek urlopowy (vakantiegeld) i zbierasz dni urlopu. Prowadź własną listę przepracowanych godzin i sprawdzaj je na pasku wypłaty. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.agency.x': 'Pracodawca z innego kraju wysłał cię tu na jakiś czas? Wtedy jesteś pracownikiem delegowanym (gedetacheerd). Poproś pracodawcę o zaświadczenie A1: pokazuje, gdzie masz ubezpieczenie. Tutaj i tak dostajesz co najmniej holenderską płacę minimalną.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'Na moim pasku wypłaty jest za mało godzin.',
    'c.agency.s': { m: 'Na pasku wypłaty są 32 godziny, a przepracowałeś 38. Co robisz?', f: 'Na pasku wypłaty są 32 godziny, a przepracowałaś 38. Co robisz?', x: 'Na pasku wypłaty są 32 godziny, a w rzeczywistości było 38. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.o1': 'Pokazujesz agencji swoją listę godzin i prosisz o poprawkę.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': 'Nic nie mówisz, bo to tylko 6 godzin.',
    'c.agency.o3': 'Prosisz szefa w firmie, w której pracujesz, żeby zapłacił za te 6 godzin.',
    'c.agency.w': 'Płaci ci agencja, więc to agencja musi poprawić błąd. Twoja własna lista dat i godzin pomaga. Pytanie o to jest twoim prawem.',
    'c.bsn': 'Twój BSN: chroń go',
    'c.bsn.b': 'BSN (burgerservicenummer) dostajesz, gdy zameldujesz się w gminie (gemeente). Jesteś tu tylko na krótko? Wtedy rejestrujesz się w punkcie RNI. BSN jest potrzebny do pracy, podatków, ubezpieczenia zdrowotnego i konta bankowego. Pracodawca potrzebuje twojego dokumentu tożsamości i BSN. Nie dawaj BSN ani kopii dokumentu byle komu. Najpierw zapytaj, do czego są im potrzebne. Przeprowadzasz się? Zgłoś nowy adres w gemeente w ciągu 5 dni. DigiD to twój login do stron urzędowych: nigdy nie dawaj go nikomu. Mieszkasz albo pracujesz tutaj? Wtedy zwykle musisz mieć holenderskie ubezpieczenie zdrowotne (zorgverzekering). Załatw je szybko. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.bsn.p': 'Dlaczego potrzebuje pan/pani mojego BSN?',
    'c.bsn.s': 'Nieznajomy proponuje ci pracę na WhatsAppie. Prosi o zdjęcie paszportu i login DigiD. Co robisz?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o1': 'Nigdy nie podajesz loginu DigiD. Sprawdzasz, kto to.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': 'Szybko wysyłasz wszystko, żeby dostać pracę.',
    'c.bsn.o3': 'Wysyłasz tylko zdjęcie paszportu.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': 'Z twoim DigiD albo kopią dokumentu inni mogą użyć twojego nazwiska, np. do pożyczek albo zasiłków. Prawdziwy pracodawca potrzebuje twojego dokumentu i BSN, ale nigdy loginu DigiD.',
    'c.housing': 'Mieszkanie od pracodawcy',
    'c.housing.b': { m: 'Pracodawca albo agencja załatwia ci mieszkanie? Wtedy umowa najmu musi być osobno od umowy o pracę. Poproś o umowę najmu na piśmie i potwierdzenie tego, co płacisz. Czynsz można potrącać z wypłaty tylko wtedy, gdy zgodziłeś się na to na piśmie, i tylko w granicach prawa: sprawdź to na pasku wypłaty. Kaucja (borg) to najwyżej 2 miesiące czynszu podstawowego. Dostajesz ją z powrotem, gdy się wyprowadzasz, minus prawdziwe szkody. Zamelduj się pod swoim adresem w gemeente. Niebezpieczne mieszkanie, groźby albo niesprawiedliwe koszty? Zgłoś to w gemeente (meldpunt) i poproś o darmową radę w Juridisch Loket albo w poradni mieszkaniowej. Z problemem z wysokością czynszu albo opłat za usługi możesz zwrócić się do Huurcommissie. Kończy ci się praca? Poproś o radę, zanim wyprowadzisz się z mieszkania. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', f: 'Pracodawca albo agencja załatwia ci mieszkanie? Wtedy umowa najmu musi być osobno od umowy o pracę. Poproś o umowę najmu na piśmie i potwierdzenie tego, co płacisz. Czynsz można potrącać z wypłaty tylko wtedy, gdy zgodziłaś się na to na piśmie, i tylko w granicach prawa: sprawdź to na pasku wypłaty. Kaucja (borg) to najwyżej 2 miesiące czynszu podstawowego. Dostajesz ją z powrotem, gdy się wyprowadzasz, minus prawdziwe szkody. Zamelduj się pod swoim adresem w gemeente. Niebezpieczne mieszkanie, groźby albo niesprawiedliwe koszty? Zgłoś to w gemeente (meldpunt) i poproś o darmową radę w Juridisch Loket albo w poradni mieszkaniowej. Z problemem z wysokością czynszu albo opłat za usługi możesz zwrócić się do Huurcommissie. Kończy ci się praca? Poproś o radę, zanim wyprowadzisz się z mieszkania. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', x: 'Pracodawca albo agencja załatwia ci mieszkanie? Wtedy umowa najmu musi być osobno od umowy o pracę. Poproś o umowę najmu na piśmie i potwierdzenie tego, co płacisz. Czynsz można potrącać z wypłaty tylko wtedy, gdy jest na to twoja pisemna zgoda, i tylko w granicach prawa: sprawdź to na pasku wypłaty. Kaucja (borg) to najwyżej 2 miesiące czynszu podstawowego. Dostajesz ją z powrotem, gdy się wyprowadzasz, minus prawdziwe szkody. Zamelduj się pod swoim adresem w gemeente. Niebezpieczne mieszkanie, groźby albo niesprawiedliwe koszty? Zgłoś to w gemeente (meldpunt) i poproś o darmową radę w Juridisch Loket albo w poradni mieszkaniowej. Z problemem z wysokością czynszu albo opłat za usługi możesz zwrócić się do Huurcommissie. Kończy ci się praca? Poproś o radę, zanim wyprowadzisz się z mieszkania. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.p': { m: 'Mogę dostać potwierdzenie, że zapłaciłem?', f: 'Mogę dostać potwierdzenie, że zapłaciłam?', x: 'Mogę dostać potwierdzenie zapłaty?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.s': 'Kończy ci się praca. Agencja mówi: „Jutro musisz opuścić mieszkanie.” Co robisz?',
    'c.housing.o1': 'Najpierw prosisz o radę w Juridisch Loket.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.housing.o2': 'Od razu się wyprowadzasz i zapominasz o kaucji.',
    'c.housing.o3': 'Zostajesz i przestajesz odpowiadać agencji.',
    'c.housing.w': 'Umowa najmu ma własne zasady, osobno od pracy. Darmowa porada pomoże ci poznać swoje prawa, np. kiedy musisz się wyprowadzić i co z kaucją.',
    'c.payslip': 'Sprawdzaj pasek wypłaty',
    'c.payslip.b': { m: 'Bruto to twoje wynagrodzenie przed podatkiem. Netto to to, co dostajesz na konto: bruto minus podatek i składki (loonheffing). Pracodawca musi dawać ci pasek wypłaty (loonstrook). Sprawdzaj godziny i wynagrodzenie na każdym pasku i zapisuj godziny, które przepracowałeś. Masz dwie prace? Korzystaj z ulgi podatkowej (loonheffingskorting) tylko u jednego pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Bruto to twoje wynagrodzenie przed podatkiem. Netto to to, co dostajesz na konto: bruto minus podatek i składki (loonheffing). Pracodawca musi dawać ci pasek wypłaty (loonstrook). Sprawdzaj godziny i wynagrodzenie na każdym pasku i zapisuj godziny, które przepracowałaś. Masz dwie prace? Korzystaj z ulgi podatkowej (loonheffingskorting) tylko u jednego pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'Bruto to twoje wynagrodzenie przed podatkiem. Netto to to, co dostajesz na konto: bruto minus podatek i składki (loonheffing). Pracodawca musi dawać ci pasek wypłaty (loonstrook). Sprawdzaj godziny i wynagrodzenie na każdym pasku i zapisuj swoje przepracowane godziny. Masz dwie prace? Korzystaj z ulgi podatkowej (loonheffingskorting) tylko u jednego pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.p': { m: 'Przepracowałem więcej godzin. Możesz to sprawdzić?', f: 'Przepracowałam więcej godzin. Możesz to sprawdzić?', x: 'Mam więcej przepracowanych godzin. Możesz to sprawdzić?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.s': { m: 'Na pasku wypłaty jest mniej godzin, niż przepracowałeś. Co robisz?', f: 'Na pasku wypłaty jest mniej godzin, niż przepracowałaś. Co robisz?', x: 'Na pasku wypłaty jest mniej godzin, niż było w rzeczywistości. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.o1': 'Pokazujesz swoje notatki i prosisz przełożonego o sprawdzenie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': 'Nic nie mówisz, bo nie chcesz problemów.',
    'c.payslip.o3': 'Czekasz miesiąc: na następnym pasku wypłaty będzie dobrze.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': 'Błędy na pasku wypłaty się zdarzają. Pytanie o nie jest normalne i to twoje prawo. Własne notatki z datami i godzinami bardzo pomagają.',
    'c.extra': 'Dodatek urlopowy i płaca minimalna',
    'c.extra.b': 'Dostajesz dodatek urlopowy (vakantiegeld): co najmniej 8% twojego wynagrodzenia brutto. Większość pracodawców wypłaca go raz w roku, w maju albo czerwcu. Twoje wynagrodzenie nigdy nie może być niższe niż ustawowa płaca minimalna (minimumloon); dla pracowników poniżej 21 lat jest ona niższa. Kwota zmienia się co roku: sprawdź ją na rijksoverheid.nl. Cao często daje dodatek za nadgodziny albo pracę w nocy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.extra.p': 'Kiedy dostanę dodatek urlopowy?',
    'c.extra.s': 'Kolega mówi: „W maju dostaniesz od szefa dodatkowe pieniądze.” Co to jest?',
    'c.extra.o1': 'Dodatek urlopowy: co najmniej 8% twojego wynagrodzenia brutto.',
    'c.extra.o2': 'Prezent tylko dla najlepszych pracowników.',
    'c.extra.o3': 'Trzynastka: jedna dodatkowa pensja miesięczna, dla wszystkich.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': 'Dodatek urlopowy to twoje prawo, nie prezent. Zbierasz go z każdą przepracowaną godziną. Jeśli odejdziesz z pracy wcześniej, dostaniesz go z ostatnią wypłatą.',
    'c.phone': 'Twój telefon w pracy',
    'c.phone.b': 'W wielu miejscach pracy nie wolno używać telefonu w czasie pracy, zwłaszcza przy maszynach i wózkach widłowych albo przy produkcji żywności. To może być niebezpieczne albo niehigieniczne. Używaj telefonu w przerwie. Czekasz na pilny telefon od rodziny? Najpierw powiedz przełożonemu. Nie rób w pracy zdjęć ani filmów bez zgody: pamiętaj o prywatności kolegów i tajemnicach firmy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.phone.p': 'Moje dziecko jest chore. Czy mogę mieć włączony telefon?',
    'c.phone.s': 'Twoja mama jest w szpitalu i może dziś zadzwonić. Na hali nie wolno używać telefonów. Co robisz?',
    'c.phone.o1': 'Mówisz przełożonemu i pytasz, jak można się z tobą skontaktować.',
    'c.phone.o2': 'Trzymasz telefon w kieszeni i po cichu odbierasz przy maszynie.',
    'c.phone.o3': 'Zostajesz w domu i nikomu nie mówisz dlaczego.',
    'c.phone.w': 'Przełożeni zwykle rozumieją nagłe sprawy rodzinne. Gdy wiedzą, mogą znaleźć bezpieczne rozwiązanie, np. stałą porę na sprawdzenie telefonu.',
    'c.smoking': 'Palenie tylko na zewnątrz',
    'c.smoking.b': 'W Holandii palenie wewnątrz miejsca pracy jest zabronione przez prawo. Dotyczy to też e-papierosów. Od 2022 roku palarnie w firmach nie są już dozwolone. Pal tylko na zewnątrz, w miejscu, na które pozwala pracodawca, i zwykle tylko w przerwie. Dodatkowe przerwy na papierosa to nie twoje prawo: ustal je z przełożonym. Nigdy nie pal przy rzeczach, które łatwo się palą, np. przy paliwie albo kartonach w magazynie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.smoking.p': 'Mogę zapalić na zewnątrz w przerwie?',
    'c.smoking.s': 'Jest zimno i pada deszcz. Kolega mówi: „Zapal w magazynku, nikt nie zobaczy.” Co robisz?',
    'c.smoking.o1': 'Odmawiasz i palisz na zewnątrz, w przerwie.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Szybko palisz w magazynku, tylko ten jeden raz.',
    'c.smoking.o3': 'Zamiast tego używasz e-papierosa w środku, bo to wolno.',
    'c.smoking.w': 'Palenie w środku jest niezgodne z prawem i może wywołać pożar. E-papierosa w środku też nie wolno używać. Przestrzeganie zasad chroni wszystkich.',
    'c.clock': { m: 'Odbijaj kartę sam', f: 'Odbijaj kartę sama', x: 'Odbijaj własną kartę' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.b': { m: 'Odbijaj kartę sam, na wejściu i wyjściu, w chwili, gdy naprawdę zaczynasz i kończysz pracę. Nigdy nie odbijaj karty za kolegę i nigdy nie pozwól nikomu używać twojej karty. To jest oszustwo i może skończyć się zwolnieniem. Spóźnisz się? Zadzwoń przed początkiem zmiany. Sprawdzaj, czy godziny z karty zgadzają się z paskiem wypłaty. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'Odbijaj kartę sama, na wejściu i wyjściu, w chwili, gdy naprawdę zaczynasz i kończysz pracę. Nigdy nie odbijaj karty za kolegę i nigdy nie pozwól nikomu używać twojej karty. To jest oszustwo i może skończyć się zwolnieniem. Spóźnisz się? Zadzwoń przed początkiem zmiany. Sprawdzaj, czy godziny z karty zgadzają się z paskiem wypłaty. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'Odbijaj własną kartę, na wejściu i wyjściu, w chwili, gdy naprawdę zaczynasz i kończysz pracę. Nigdy nie odbijaj karty za kolegę i nigdy nie pozwól nikomu używać twojej karty. To jest oszustwo i może skończyć się zwolnieniem. Spóźnisz się? Zadzwoń przed początkiem zmiany. Sprawdzaj, czy godziny z karty zgadzają się z paskiem wypłaty. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.p': { m: 'Zapomniałem odbić kartę na wyjściu. Możesz to poprawić?', f: 'Zapomniałam odbić kartę na wyjściu. Możesz to poprawić?', x: 'Zapomniało mi się odbić kartę na wyjściu. Możesz to poprawić?' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.clock.s': 'Kolega daje ci swoją kartę: „Odbij za mnie kartę, spóźnię się 20 minut.” Co robisz?',
    'c.clock.o1': 'Odmawiasz i mówisz mu, żeby zadzwonił do przełożonego.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': 'Robisz to ten jeden raz, bo to twój przyjaciel.',
    'c.clock.o3': 'Odbijasz jego kartę i mówisz przełożonemu później.',
    'c.clock.w': 'Odbijanie karty za kogoś to oszustwo, dla was obu. Odmowa chroni kolegę i twoją własną pracę.',
    'c.hygiene': 'Trzeźwa głowa, czyste ręce',
    'c.hygiene.b': { m: 'Alkohol i narkotyki w pracy albo przychodzenie do pracy po ich użyciu są zabronione prawie we wszystkich firmach. To bardzo niebezpieczne przy maszynach i wózkach widłowych i może skończyć się zwolnieniem. Lek powoduje u ciebie senność albo zawroty głowy? Powiedz przełożonemu, żebyś mógł robić bezpieczną pracę. Nie musisz mówić, jaki to lek. Przy produkcji żywności zasady higieny są surowe: myj ręce, noś czyste ubranie robocze, w razie potrzeby siateczkę na włosy, i żadnej biżuterii. Wymioty albo biegunka? Zgłoś to, zanim zaczniesz pracę. Utrzymuj porządek w miejscu pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'Alkohol i narkotyki w pracy albo przychodzenie do pracy po ich użyciu są zabronione prawie we wszystkich firmach. To bardzo niebezpieczne przy maszynach i wózkach widłowych i może skończyć się zwolnieniem. Lek powoduje u ciebie senność albo zawroty głowy? Powiedz przełożonemu, żebyś mogła robić bezpieczną pracę. Nie musisz mówić, jaki to lek. Przy produkcji żywności zasady higieny są surowe: myj ręce, noś czyste ubranie robocze, w razie potrzeby siateczkę na włosy, i żadnej biżuterii. Wymioty albo biegunka? Zgłoś to, zanim zaczniesz pracę. Utrzymuj porządek w miejscu pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'Alkohol i narkotyki w pracy albo przychodzenie do pracy po ich użyciu są zabronione prawie we wszystkich firmach. To bardzo niebezpieczne przy maszynach i wózkach widłowych i może skończyć się zwolnieniem. Lek powoduje u ciebie senność albo zawroty głowy? Powiedz przełożonemu, żeby dostać bezpieczną pracę. Nie musisz mówić, jaki to lek. Przy produkcji żywności zasady higieny są surowe: myj ręce, noś czyste ubranie robocze, w razie potrzeby siateczkę na włosy, i żadnej biżuterii. Wymioty albo biegunka? Zgłoś to, zanim zaczniesz pracę. Utrzymuj porządek w miejscu pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.p': { m: 'Biorę lek. Po nim jestem śpiący.', f: 'Biorę lek. Po nim jestem śpiąca.', x: 'Biorę lek. Po nim chce mi się spać.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.s': { m: 'Lekarz daje ci lek, po którym jesteś śpiący. Jutro musisz jeździć wózkiem widłowym. Co robisz?', f: 'Lekarz daje ci lek, po którym jesteś śpiąca. Jutro musisz jeździć wózkiem widłowym. Co robisz?', x: 'Lekarz daje ci lek, po którym chce ci się spać. Jutro musisz jeździć wózkiem widłowym. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o1': 'Mówisz przełożonemu, zanim zaczniesz.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': 'Nic nie mówisz i jeździsz bardzo wolno.',
    'c.hygiene.o3': 'Przestajesz brać lek, nie pytając lekarza.',
    'c.hygiene.w': 'Przełożony nie musi wiedzieć, jaki to lek, tylko że teraz nie możesz jeździć ani pracować przy maszynach. To chroni ciebie i kolegów.',
    'c.smalltalk': 'Pogawędka w przerwie',
    'c.smalltalk.b': { m: 'Krótkie rozmowy w przerwie są normalne. Pomagają ci poczuć się częścią zespołu. Jesteś mile widziany przy stole na kawę albo lunch. Łatwe tematy to weekend, pogoda, sport i wakacje. Pytania o pensję, religię albo czyjeś życie prywatne są na początku często zbyt osobiste. W swoje urodziny ludzie często przynoszą coś dla zespołu (trakteren), np. ciasto. Kolega ma urodziny? Powiedz „Gefeliciteerd!”.', f: 'Krótkie rozmowy w przerwie są normalne. Pomagają ci poczuć się częścią zespołu. Jesteś mile widziana przy stole na kawę albo lunch. Łatwe tematy to weekend, pogoda, sport i wakacje. Pytania o pensję, religię albo czyjeś życie prywatne są na początku często zbyt osobiste. W swoje urodziny ludzie często przynoszą coś dla zespołu (trakteren), np. ciasto. Kolega ma urodziny? Powiedz „Gefeliciteerd!”.', x: 'Krótkie rozmowy w przerwie są normalne. Pomagają ci poczuć się częścią zespołu. Możesz śmiało dosiąść się do stołu na kawę albo lunch. Łatwe tematy to weekend, pogoda, sport i wakacje. Pytania o pensję, religię albo czyjeś życie prywatne są na początku często zbyt osobiste. W swoje urodziny ludzie często przynoszą coś dla zespołu (trakteren), np. ciasto. Kolega ma urodziny? Powiedz „Gefeliciteerd!”.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.p': 'Wszystkiego najlepszego z okazji urodzin!',
    'c.smalltalk.s': 'W przerwie koledzy siedzą razem przy stole. Jeszcze ich dobrze nie znasz. Co robisz?',
    'c.smalltalk.o1': 'Pytasz „Mag ik bij jullie zitten?” i dołączasz do krótkiej rozmowy.',
    'c.smalltalk.o2': { m: 'Codziennie jesz sam na zewnątrz, żeby im nie przeszkadzać.', f: 'Codziennie jesz sama na zewnątrz, żeby im nie przeszkadzać.', x: 'Codziennie jesz na zewnątrz w samotności, żeby im nie przeszkadzać.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.o3': 'Pytasz każdego kolegę, ile zarabia.',
    'c.smalltalk.w': 'Dosiąść się do stołu to coś mile widzianego i pomaga poznać zespół. Proste pytanie, np. „Hoe was je weekend?”, to dobry początek.',
    'c.mistakes': 'Błędy są normalne',
    'c.mistakes.b': { m: 'Każdy popełnia błędy w pracy. Powiedz o tym szybko, żeby można było to naprawić: „Sorry, ik heb een fout gemaakt.” Ukrywanie błędu jest odbierane dużo gorzej niż sam błąd. Uwagi dotyczą pracy, nie ciebie jako osoby. Dostałeś komplement? Po prostu podziękuj. Nie wiesz, co poprawić? Zapytaj: „Kun je het uitleggen?”', f: 'Każdy popełnia błędy w pracy. Powiedz o tym szybko, żeby można było to naprawić: „Sorry, ik heb een fout gemaakt.” Ukrywanie błędu jest odbierane dużo gorzej niż sam błąd. Uwagi dotyczą pracy, nie ciebie jako osoby. Dostałaś komplement? Po prostu podziękuj. Nie wiesz, co poprawić? Zapytaj: „Kun je het uitleggen?”', x: 'Każdy popełnia błędy w pracy. Powiedz o tym szybko, żeby można było to naprawić: „Sorry, ik heb een fout gemaakt.” Ukrywanie błędu jest odbierane dużo gorzej niż sam błąd. Uwagi dotyczą pracy, nie ciebie jako osoby. Ktoś cię chwali? Po prostu podziękuj. Nie wiesz, co poprawić? Zapytaj: „Kun je het uitleggen?”' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.p': { m: 'Przepraszam, popełniłem błąd. Jak mogę to naprawić?', f: 'Przepraszam, popełniłam błąd. Jak mogę to naprawić?', x: 'Przepraszam, to mój błąd. Jak mogę to naprawić?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.s': { m: 'Postawiłeś 20 kartonów na złej palecie. Nikt jeszcze tego nie widział. Co robisz?', f: 'Postawiłaś 20 kartonów na złej palecie. Nikt jeszcze tego nie widział. Co robisz?', x: 'Przez pomyłkę stawiasz 20 kartonów na złej palecie. Nikt jeszcze tego nie widział. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.o1': 'Mówisz przełożonemu i pomagasz to naprawić.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': 'Nic nie mówisz i masz nadzieję, że nikt nie zauważy.',
    'c.mistakes.o3': 'Mówisz, że zrobił to kolega.',
    'c.mistakes.w': 'Błąd zgłoszony wcześnie łatwo naprawić. Uczciwość buduje zaufanie, a to liczy się bardziej niż to, że nigdy nie popełniasz błędów.',
    'c.respect': 'Szacunek dla wszystkich',
    'c.respect.b': 'W pracy wszyscy są równi i wszystkich traktuje się z szacunkiem, bez względu na płeć, pochodzenie, religię czy orientację seksualną. To ty decydujesz o kontakcie fizycznym. Uścisk dłoni jest zwyczajny. Ale możesz też przywitać się w inny grzeczny sposób, na przykład skinieniem głowy i uśmiechem. Potem krótko to wyjaśnij. Żarty z czyjegoś pochodzenia albo religii, groźby, nękanie (pesten) i niechciane zachowania seksualne są nie do przyjęcia. Możesz to zgłosić przełożonemu albo osobie zaufania (vertrouwenspersoon), jeśli jest taka w twojej firmie.',
    'c.respect.p': 'Wolę nie podawać ręki, ale chętnie się z tobą przywitam.',
    'c.respect.s': { m: 'Kolega często żartuje z twojej religii. Prosiłeś, żeby przestał, ale on robi to dalej. Co robisz?', f: 'Kolega często żartuje z twojej religii. Prosiłaś, żeby przestał, ale on robi to dalej. Co robisz?', x: 'Kolega często żartuje z twojej religii. Prosisz, żeby przestał, ale on robi to dalej. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o1': 'Mówisz o tym przełożonemu albo vertrouwenspersoon.',
    'c.respect.o2': 'Śmiejesz się razem z nim, żeby nie było kłopotów.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': 'W odpowiedzi żartujesz z jego pochodzenia.',
    'c.respect.w': 'Takie żarty są w pracy nie do przyjęcia. Zgłoszenie tego jest normalne: firma musi dbać, żeby miejsce pracy było bezpieczne dla wszystkich.',
    'c.health': 'Przerwy i godziny pracy',
    'c.health.b': 'Prawo chroni twoje zdrowie. Pracujesz dłużej niż 5,5 godziny? Wtedy masz co najmniej 30 minut przerwy (może być 2 razy po 15 minut). Dłużej niż 10 godzin? Wtedy co najmniej 45 minut. Cao może mieć trochę inne zasady dotyczące przerw. Możesz pracować najwyżej 12 godzin na jednej zmianie i 60 godzin w tygodniu. Masz mniej niż 18 lat? Wtedy limity godzin pracy są dla ciebie niższe. Pracodawca musi dać ci za darmo środki ochrony, np. obuwie ochronne albo rękawice. Niebezpieczna praca albo za niska zapłata? Możesz to zgłosić do Nederlandse Arbeidsinspectie, także bez podawania nazwiska. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.health.p': { m: 'Nie miałem jeszcze przerwy.', f: 'Nie miałam jeszcze przerwy.', x: 'Wciąż czekam na przerwę.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.health.s': { m: 'Pracujesz od 6 godzin bez przerwy. Przełożony prosi, żebyś pracował dalej. Co robisz?', f: 'Pracujesz od 6 godzin bez przerwy. Przełożony prosi, żebyś pracowała dalej. Co robisz?', x: 'Pracujesz od 6 godzin bez przerwy. Przełożony prosi cię o dalszą pracę. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.health.o1': 'Mówisz, że teraz potrzebujesz przerwy.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o2': 'Pracujesz dalej, a później robisz dłuższą przerwę.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o3': 'Bez słowa wychodzisz z pracy do domu.',
    'c.health.w': 'Gdy pracujesz dłużej niż 5,5 godziny, przerwa wynika z prawa, to nie jest przysługa. Odpoczynek pomaga też pracować bezpiecznie.',
    'c.rights': 'Dyskryminacja i zwolnienie',
    'c.rights.b': { m: 'Dyskryminacja w pracy jest zabroniona, np. z powodu pochodzenia, religii albo płci. Pracodawca nie może tak po prostu cię zwolnić: zwykle potrzebuje zgody UWV albo sądu, albo twojej zgody. (W okresie próbnym albo na koniec umowy na czas określony obowiązują inne zasady.) Nie podpisuj papieru o zwolnieniu, którego nie rozumiesz. Podpisałeś porozumienie o zakończeniu pracy (vaststellingsovereenkomst)? Wtedy zwykle możesz je jeszcze odwołać na piśmie w ciągu 14 dni. Najpierw poproś o pomoc. Idź do związku zawodowego (np. FNV), do punktu pomocy w sprawie dyskryminacji albo do Juridisch Loket. Juridisch Loket daje darmową poradę prawną. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', f: 'Dyskryminacja w pracy jest zabroniona, np. z powodu pochodzenia, religii albo płci. Pracodawca nie może tak po prostu cię zwolnić: zwykle potrzebuje zgody UWV albo sądu, albo twojej zgody. (W okresie próbnym albo na koniec umowy na czas określony obowiązują inne zasady.) Nie podpisuj papieru o zwolnieniu, którego nie rozumiesz. Podpisałaś porozumienie o zakończeniu pracy (vaststellingsovereenkomst)? Wtedy zwykle możesz je jeszcze odwołać na piśmie w ciągu 14 dni. Najpierw poproś o pomoc. Idź do związku zawodowego (np. FNV), do punktu pomocy w sprawie dyskryminacji albo do Juridisch Loket. Juridisch Loket daje darmową poradę prawną. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', x: 'Dyskryminacja w pracy jest zabroniona, np. z powodu pochodzenia, religii albo płci. Pracodawca nie może tak po prostu cię zwolnić: zwykle potrzebuje zgody UWV albo sądu, albo twojej zgody. (W okresie próbnym albo na koniec umowy na czas określony obowiązują inne zasady.) Nie podpisuj papieru o zwolnieniu, którego nie rozumiesz. Porozumienie o zakończeniu pracy (vaststellingsovereenkomst) jest już podpisane? Wtedy zwykle możesz je jeszcze odwołać na piśmie w ciągu 14 dni. Najpierw poproś o pomoc. Idź do związku zawodowego (np. FNV), do punktu pomocy w sprawie dyskryminacji albo do Juridisch Loket. Juridisch Loket daje darmową poradę prawną. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.' },
    'c.rights.p': 'Najpierw chcę poprosić o radę.',
    'c.rights.s': 'Szef daje ci papier: „Podpisz dzisiaj, wtedy odejdziesz za porozumieniem.” Nie rozumiesz go dobrze. Co robisz?',
    'c.rights.o1': 'Jeszcze nie podpisujesz. Najpierw szukasz porady.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': 'Podpisujesz, bo szef mówi, że wszystko w porządku.',
    'c.rights.o3': 'Odkładasz papier i nigdy o nim nie rozmawiasz.',
    'c.rights.w': 'Coś jest w nim nie tak? Wtedy możesz stracić prawa, np. do zasiłku dla bezrobotnych (WW). Prośba o czas na poradę jest normalna i dozwolona.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.mustmay': 'Moet, hoeft niet, mag niet',
    'c.mustmay.b': 'Po niderlandzku przeciwieństwem „moeten” jest „niet hoeven”. „Je moet tekenen” znaczy: nie masz wyboru. „Je hoeft niet te tekenen” znaczy: możesz wybrać. „Je mag niet tekenen” znaczy: to jest zabronione. Uwaga: po angielsku „must not” znaczy „mag niet”. Po polsku „nie musisz” znaczy „hoeft niet”. Masz wątpliwości? Zapytaj.',
    'c.mustmay.p': 'Czy to obowiązkowe, czy mam wybór?',
    'c.mustmay.s': 'Twój kierownik zespołu mówi: „Je hoeft zaterdag niet te komen.” Co on ma na myśli?',
    'c.mustmay.o1': 'Nie musisz przychodzić w sobotę. Możesz wybrać.',
    'c.mustmay.o2': 'Nie wolno ci przychodzić w sobotę.',
    'c.mustmay.o3': 'Musisz przyjść w sobotę.',
    'c.mustmay.w': '„Niet hoeven” znaczy, że to nie jest obowiązkowe: możesz wybrać. „Niet mogen” znaczyłoby, że to jest zabronione.',
    'c.leave': 'Urlop i urlop w nagłej sytuacji',
    'c.leave.b': 'Z mocy prawa masz płatne dni wolne: co najmniej 4 razy tyle dni, ile pracujesz w tygodniu. Pełny etat, 5 dni w tygodniu? Wtedy co najmniej 20 dni w roku. Cao może dawać więcej. Proś o urlop na czas i na piśmie. Nagła sytuacja, np. wypadek albo choroba w rodzinie? Wtedy możesz dostać krótki płatny urlop (calamiteitenverlof). Od razu powiedz pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.leave.p': { m: 'Chciałbym poprosić o urlop w lipcu.', f: 'Chciałabym poprosić o urlop w lipcu.', x: 'Czy mogę prosić o urlop w lipcu?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.s': 'Latem chcesz na trzy tygodnie odwiedzić rodzinę za granicą. Co robisz?',
    'c.leave.o1': 'Wcześnie prosisz pracodawcę o urlop, na piśmie.',
    'c.leave.o2': 'Po prostu jedziesz i mówisz szefowi, gdy wrócisz.',
    'c.leave.o3': 'Prosisz kolegę, żeby dzień wcześniej powiedział szefowi.',
    'c.leave.w': 'Pracodawca zwykle musi się zgodzić. Może odmówić tylko z bardzo ważnego powodu, i wtedy na piśmie w ciągu 2 tygodni. Wczesna prośba daje największą szansę na „tak”.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.illness': { m: 'Twoje prawa, gdy jesteś chory', f: 'Twoje prawa, gdy jesteś chora', x: 'Twoje prawa w czasie choroby' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.b': { m: 'Gdy jesteś chory, pracodawca musi płacić co najmniej 70% twojego wynagrodzenia, maksymalnie przez 2 lata. Cao często daje więcej. Mogą być maksymalnie 2 dni bez wypłaty na początku choroby (wachtdagen), ale tylko jeśli tak jest w umowie albo w cao. Szef nie może pytać, na co chorujesz. O zdrowiu i pracy rozmawiasz z lekarzem zakładowym (bedrijfsarts). Zadzwoń do pracodawcy, gdy wyzdrowiejesz (betermelden). W pierwszym roku dostajesz co najmniej płacę minimalną. Umowa na czas określony kończy się w dniu jej końca, także gdy jesteś chory. Pracujesz przez agencję? Jeśli w twojej umowie jest klauzula agencyjna (uitzendbeding), umowa może się skończyć, gdy zachorujesz. Wtedy zapytaj UWV o Ziektewet albo zapytaj związek zawodowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Gdy jesteś chora, pracodawca musi płacić co najmniej 70% twojego wynagrodzenia, maksymalnie przez 2 lata. Cao często daje więcej. Mogą być maksymalnie 2 dni bez wypłaty na początku choroby (wachtdagen), ale tylko jeśli tak jest w umowie albo w cao. Szef nie może pytać, na co chorujesz. O zdrowiu i pracy rozmawiasz z lekarzem zakładowym (bedrijfsarts). Zadzwoń do pracodawcy, gdy wyzdrowiejesz (betermelden). W pierwszym roku dostajesz co najmniej płacę minimalną. Umowa na czas określony kończy się w dniu jej końca, także gdy jesteś chora. Pracujesz przez agencję? Jeśli w twojej umowie jest klauzula agencyjna (uitzendbeding), umowa może się skończyć, gdy zachorujesz. Wtedy zapytaj UWV o Ziektewet albo zapytaj związek zawodowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'W czasie choroby pracodawca musi płacić co najmniej 70% twojego wynagrodzenia, maksymalnie przez 2 lata. Cao często daje więcej. Mogą być maksymalnie 2 dni bez wypłaty na początku choroby (wachtdagen), ale tylko jeśli tak jest w umowie albo w cao. Szef nie może pytać, na co chorujesz. O zdrowiu i pracy rozmawiasz z lekarzem zakładowym (bedrijfsarts). Zadzwoń do pracodawcy, gdy wyzdrowiejesz (betermelden). W pierwszym roku dostajesz co najmniej płacę minimalną. Umowa na czas określony kończy się w dniu jej końca, także w czasie choroby. Pracujesz przez agencję? Jeśli w twojej umowie jest klauzula agencyjna (uitzendbeding), umowa może się skończyć, gdy zachorujesz. Wtedy zapytaj UWV o Ziektewet albo zapytaj związek zawodowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' },
    'c.illness.x': 'Chorujesz i chcesz pojechać do swojego kraju? Najpierw zapytaj pracodawcę albo agencję. Bez zgody wypłata może zostać wstrzymana. Podaj adres, pod którym tam będziesz, i odbieraj telefon.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': { m: 'Już jestem zdrowy. Jutro przyjdę do pracy.', f: 'Już jestem zdrowa. Jutro przyjdę do pracy.', x: 'Już czuję się dobrze. Jutro przyjdę do pracy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.s': { m: 'Jesteś chory od tygodnia. Pracodawca wysyła cię do lekarza zakładowego. Co robisz?', f: 'Jesteś chora od tygodnia. Pracodawca wysyła cię do lekarza zakładowego. Co robisz?', x: 'Od tygodnia chorujesz. Pracodawca wysyła cię do lekarza zakładowego. Co robisz?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': 'Idziesz i rozmawiasz o zdrowiu i pracy.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': 'Nie idziesz: masz swojego lekarza.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o3': { m: 'Wracasz do pracy, choć wciąż jesteś chory.', f: 'Wracasz do pracy, choć wciąż jesteś chora.', x: 'Wracasz do pracy, choć wciąż chorujesz.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': 'Lekarz zakładowy pomaga ci wrócić do pracy w zdrowy sposób. Nie mówi szefowi o twoich sprawach medycznych, tylko jaką pracę możesz wykonywać.',
    'c.warning': 'Oznaki wyzysku',
    'c.warning.b': { m: 'Uważaj na te sygnały. Pracodawca zatrzymuje twój paszport albo dowód. Tak nie wolno: swój dokument trzymasz sam. Pracodawca może zrobić tylko kopię. Dostajesz dużo mniej pieniędzy, niż ustalono, albo nie dostajesz paska wypłaty. Musisz spłacać duży dług wobec pracodawcy albo agencji. Musisz pracować bardzo długo, bez wyboru. Ktoś ci grozi albo używa twojego mieszkania, żeby wywierać na ciebie presję. To nie jest normalne i jest niedozwolone. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', f: 'Uważaj na te sygnały. Pracodawca zatrzymuje twój paszport albo dowód. Tak nie wolno: swój dokument trzymasz sama. Pracodawca może zrobić tylko kopię. Dostajesz dużo mniej pieniędzy, niż ustalono, albo nie dostajesz paska wypłaty. Musisz spłacać duży dług wobec pracodawcy albo agencji. Musisz pracować bardzo długo, bez wyboru. Ktoś ci grozi albo używa twojego mieszkania, żeby wywierać na ciebie presję. To nie jest normalne i jest niedozwolone. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', x: 'Uważaj na te sygnały. Pracodawca zatrzymuje twój paszport albo dowód. Tak nie wolno: swój dokument trzymasz u siebie. Pracodawca może zrobić tylko kopię. Dostajesz dużo mniej pieniędzy, niż ustalono, albo nie dostajesz paska wypłaty. Musisz spłacać duży dług wobec pracodawcy albo agencji. Musisz pracować bardzo długo, bez wyboru. Ktoś ci grozi albo używa twojego mieszkania, żeby wywierać na ciebie presję. To nie jest normalne i jest niedozwolone. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.' },
    'c.warning.p': 'Chcę dostać z powrotem mój paszport.',
    'c.warning.s': 'Pierwszego dnia agencja mówi: „Zatrzymamy twój paszport, dla bezpieczeństwa.” Co robisz?',
    'c.warning.o1': 'Zatrzymujesz go u siebie. Mogą zrobić kopię.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': 'Oddajesz go, bo agencja zna zasady.',
    'c.warning.o3': 'Oddajesz go, ale najpierw robisz zdjęcie paszportu.',
    'c.warning.w': 'Twój paszport należy do ciebie. Zatrzymywanie go to sposób, żeby kontrolować pracowników. Pracodawca potrzebuje tylko kopii do dokumentów.',
    'c.gethelp': 'Gdzie szukać pomocy',
    'c.gethelp.b': 'Widzisz oznaki wyzysku, u siebie albo u kogoś innego? Poszukaj pomocy. Możesz to zgłosić do Nederlandse Arbeidsinspectie, także anonimowo, albo na policję. Meld Misdaad Anoniem: 0800-7000. Darmowa porada prawna: Juridisch Loket. Jesteś w niebezpieczeństwie? Dzwoń pod 112. Każdy, kto pracuje w Holandii, może dostać pomoc, także migranci. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.',
    'c.gethelp.p': { m: 'Potrzebuję pomocy. Jestem wyzyskiwany.', f: 'Potrzebuję pomocy. Jestem wyzyskiwana.', x: 'Potrzebuję pomocy. Wyzyskują mnie.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.s': 'Twój przyjaciel pracuje 14 godzin dziennie prawie za darmo. Boi się szefa. Co możesz zrobić?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': 'Pomagasz mu skontaktować się z Arbeidsinspectie albo Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': 'Mówisz mu, że to normalne dla nowych pracowników.',
    'c.gethelp.o3': 'Mówisz mu, żeby poczekał do końca umowy, a potem odszedł.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'Pomoc jest dla każdego, kto pracuje w Holandii. Zgłoszenie można też zrobić bez podawania nazwisk.',
    'c.callin': 'Telefon do przełożonego',
    'c.callin.b': { m: 'Gdy dzwonisz do przełożonego, powiedz swoje imię, powód i kiedy myślisz, że wrócisz. Jesteś chory? Musisz tylko powiedzieć, że jesteś chory, a nie na co chorujesz. Dzwoń: nie wysyłaj tylko SMS-a, chyba że twoja firma mówi, że SMS wystarczy. Nikt nie odbiera? Nagraj wiadomość głosową i spróbuj jeszcze raz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'Gdy dzwonisz do przełożonego, powiedz swoje imię, powód i kiedy myślisz, że wrócisz. Jesteś chora? Musisz tylko powiedzieć, że jesteś chora, a nie na co chorujesz. Dzwoń: nie wysyłaj tylko SMS-a, chyba że twoja firma mówi, że SMS wystarczy. Nikt nie odbiera? Nagraj wiadomość głosową i spróbuj jeszcze raz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'Gdy dzwonisz do przełożonego, powiedz swoje imię, powód i kiedy myślisz, że wrócisz. Chorujesz? Musisz tylko powiedzieć, że chorujesz, a nie na co chorujesz. Dzwoń: nie wysyłaj tylko SMS-a, chyba że twoja firma mówi, że SMS wystarczy. Nikt nie odbiera? Nagraj wiadomość głosową i spróbuj jeszcze raz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.p': 'Dzień dobry, mówi Ali. Dziś nie mogę przyjść.',
    'c.callin.s': { m: 'Twoje dziecko jest chore i nie możesz przyjść do pracy. Twoja firma chce, żebyś zadzwonił. Co robisz?', f: 'Twoje dziecko jest chore i nie możesz przyjść do pracy. Twoja firma chce, żebyś zadzwoniła. Co robisz?', x: 'Twoje dziecko jest chore i nie możesz przyjść do pracy. Twoja firma oczekuje od ciebie telefonu. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.o1': 'Dzwonisz do przełożonego przed zmianą.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.callin.o2': 'Wysyłasz krótkiego SMS-a na początku zmiany.',
    'c.callin.o3': 'Prosisz sąsiada, żeby zadzwonił za ciebie.',
    'c.callin.w': 'Rozmowa telefoniczna jest jasna i szybka, a przełożony może zadać pytania. Gdy powiesz, kiedy pewnie wrócisz, łatwiej mu planować. Powiedz też swoje imię i powód.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'Wiadomości do pracy: krótko i grzecznie',
    'c.texting.b': 'Wiadomości do pracy pisz krótko i grzecznie. Napisz, kim jesteś i co się dzieje, a na końcu dodaj pozdrowienie. Na przykład: „Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Często sprawdzaj grafik (rooster) w aplikacji. Na prośby o wzięcie zmiany odpowiadaj na czas. Żeby zamienić się zmianą, najpierw musi się zgodzić przełożony albo planista, więc zapytaj: „Mag ik mijn dienst ruilen?” Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.texting.p': 'Cześć Mark, spóźnię się 10 minut. Przepraszam! Pozdrawiam, Ali',
    'c.texting.s': 'Spóźnisz się 10 minut. Która wiadomość do przełożonego jest najlepsza?',
    'c.texting.o1': '„Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '„Sorry, ik ben er zo!” (bez imienia, bez godziny).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting.o3': 'Trzyminutowa wiadomość głosowa o korkach.',
    'c.texting.w': 'Dobra wiadomość mówi w kilku słowach, kim jesteś i co się dzieje. Wtedy przełożony od razu wie, o co chodzi.',
    'c.certs': 'Certyfikaty ci pomagają',
    'c.certs.b': 'W budownictwie, przemyśle i pracy przez agencję często potrzebny jest certyfikat VCA (bezpieczeństwo). Żeby jeździć wózkiem widłowym, zwykle potrzebujesz uprawnień na wózek widłowy (heftruckcertificaat). Zapytaj pracodawcę, czy płaci za kurs i egzamin.',
    'c.certs.p': 'Czy mogę tu zrobić kurs VCA?',
    'c.certs.s': 'W ofercie pracy wymagają certyfikatu VCA. Jeszcze go nie masz. Co robisz?',
    'c.certs.o1': 'Prosisz pracodawcę albo agencję, żeby pomogli ci go zdobyć.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': 'Nie starasz się o tę pracę, bo i tak jej nie dostaniesz.',
    'c.certs.o3': 'Mówisz, że go masz, i liczysz, że nikt nie sprawdzi.',
    'c.certs.w': 'Wielu pracodawców i agencji pomaga zdobyć VCA. Pytanie pokazuje, że chcesz się uczyć.',
    'c.diploma': 'Twój dyplom się liczy',
    'c.diploma.b': 'Masz dyplom z innego kraju? Możesz dać go do oceny w IDW (Internationale Diplomawaardering). Wtedy pracodawcy widzą, ile jest wart tutaj. Szkolenie jest obowiązkowe w twojej pracy? Wtedy pracodawca musi za nie zapłacić i liczy się ono jako czas pracy. Zapytaj przełożonego o kursy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.diploma.p': 'Czy są dla mnie jakieś kursy?',
    'c.diploma.s': 'Pracodawca mówi, że musisz zrobić obowiązkowe szkolenie BHP w sobotę, bez zapłaty. Co jest prawdą?',
    'c.diploma.o1': 'Płaci za nie pracodawca i jest to czas pracy.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': 'Szkolenia są zawsze w twoim wolnym czasie.',
    'c.diploma.o3': { m: 'Za szkolenie musisz zapłacić sam.', f: 'Za szkolenie musisz zapłacić sama.', x: 'Za szkolenie musisz zapłacić z własnej kieszeni.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.w': 'Jeśli szkolenie jest obowiązkowe w twojej pracy, płaci pracodawca i liczy się ono jako czas pracy. Jeśli to nie jest jasne, poproś o radę.',
    'c.doctor': 'Lekarz czy 112?',
    'c.doctor.b': 'Zapisz się do lekarza rodzinnego (huisarts) blisko domu. Potrzebujesz pilnej pomocy wieczorem, w nocy albo w weekend? Zadzwoń do huisartsenpost. Pod 112 dzwoń tylko w nagłych przypadkach: zagrożenie życia, pożar albo przestępstwo, które dzieje się teraz. Leki dostaniesz w aptece (apotheek).',
    'c.doctor.p': 'Chcę się zapisać do lekarza rodzinnego.',
    'c.doctor.s': 'Jest sobota w nocy. Twoje dziecko ma wysoką gorączkę, ale jest przytomne i normalnie oddycha. Co robisz?',
    'c.doctor.o1': 'Dzwonisz do huisartsenpost.',
    'c.doctor.o2': 'Dzwonisz pod 112.',
    'c.doctor.o3': 'Czekasz do poniedziałku i nic nie robisz.',
    'c.doctor.w': 'Huisartsenpost pomaga w pilnych sprawach poza godzinami pracy przychodni. 112 jest na nagłe przypadki: zagrożenie życia, pożar albo przestępstwo, które dzieje się teraz.',
    'c.insurance': 'Ubezpieczenie zdrowotne',
    'c.insurance.b': { m: 'Gdy mieszkasz albo pracujesz w Holandii, podstawowe ubezpieczenie zdrowotne jest zwykle obowiązkowe. Co miesiąc płacisz składkę. Co roku jest udział własny (eigen risico): pierwsze koszty płacisz sam. Kwota się zmienia: sprawdź ją u ubezpieczyciela. Wizyty u lekarza rodzinnego (huisarts) nie wliczają się do udziału własnego. Przy niskich dochodach możesz dostać dopłatę do ubezpieczenia (zorgtoeslag). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Gdy mieszkasz albo pracujesz w Holandii, podstawowe ubezpieczenie zdrowotne jest zwykle obowiązkowe. Co miesiąc płacisz składkę. Co roku jest udział własny (eigen risico): pierwsze koszty płacisz sama. Kwota się zmienia: sprawdź ją u ubezpieczyciela. Wizyty u lekarza rodzinnego (huisarts) nie wliczają się do udziału własnego. Przy niskich dochodach możesz dostać dopłatę do ubezpieczenia (zorgtoeslag). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'Gdy mieszkasz albo pracujesz w Holandii, podstawowe ubezpieczenie zdrowotne jest zwykle obowiązkowe. Co miesiąc płacisz składkę. Co roku jest udział własny (eigen risico): pierwsze koszty płacisz z własnej kieszeni. Kwota się zmienia: sprawdź ją u ubezpieczyciela. Wizyty u lekarza rodzinnego (huisarts) nie wliczają się do udziału własnego. Przy niskich dochodach możesz dostać dopłatę do ubezpieczenia (zorgtoeslag). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.p': 'Potrzebuję ubezpieczenia zdrowotnego. Czy może mi pan/pani pomóc?',
    'c.insurance.s': { m: 'Zacząłeś tu pracować dwa tygodnie temu i nie masz jeszcze ubezpieczenia zdrowotnego. Co robisz?', f: 'Zaczęłaś tu pracować dwa tygodnie temu i nie masz jeszcze ubezpieczenia zdrowotnego. Co robisz?', x: 'Pracujesz tu od dwóch tygodni i nie masz jeszcze ubezpieczenia zdrowotnego. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.o1': 'Szybko załatwiasz ubezpieczenie zdrowotne.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': 'Czekasz: ubezpieczenie z twojego kraju wystarczy.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': 'Używasz karty ubezpieczenia kolegi.',
    'c.insurance.w': 'Bez ubezpieczenia lekarz albo szpital może dużo kosztować, a możesz też dostać karę. Szybkie załatwienie ubezpieczenia cię chroni. Pracodawca albo agencja mogą ci pomóc.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters': 'Nie ignoruj listów',
    'c.letters.b': 'Nie ignoruj listów z Belastingdienst, gemeente ani UWV. Poproś kogoś, komu ufasz, żeby pomógł ci je przeczytać. Zeznanie podatkowe (aangifte) za poprzedni rok trzeba zwykle złożyć przed 1 maja. Możesz poprosić o więcej czasu. Dopłaty (toeslagen), np. zorgtoeslag i huurtoeslag, zależą od twoich dochodów. Jeśli dostaniesz za dużo, musisz to oddać, więc aktualizuj dane o dochodach. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.letters.p': { m: 'Dostałem list. Pomożesz mi?', f: 'Dostałam list. Pomożesz mi?', x: 'Przyszedł do mnie list. Pomożesz mi?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.s': 'Dostajesz list z Belastingdienst. Nie rozumiesz go. Co robisz?',
    'c.letters.o1': 'Prosisz kogoś, komu ufasz, żeby pomógł ci to przeczytać.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': 'Wkładasz go do szuflady i czekasz.',
    'c.letters.o3': 'Wyrzucasz go, bo to pewnie reklama.',
    'c.letters.w': 'Oficjalne listy często mają termin. Jeśli zareagujesz na czas, problemy zwykle łatwiej rozwiązać.',
    'c.scams': 'Uważaj na oszustów',
    'c.scams.b': { m: 'Twój bank nigdy nie prosi o kody ani PIN przez telefon, SMS czy e-mail. Nie klikaj w linki w wiadomościach, których się nie spodziewałeś. Ktoś naciska, żebyś szybko zapłacił? Zatrzymaj się i najpierw sprawdź. Zadzwoń do banku na oficjalny numer, np. ten z karty bankowej albo ze strony banku.', f: 'Twój bank nigdy nie prosi o kody ani PIN przez telefon, SMS czy e-mail. Nie klikaj w linki w wiadomościach, których się nie spodziewałaś. Ktoś naciska, żebyś szybko zapłaciła? Zatrzymaj się i najpierw sprawdź. Zadzwoń do banku na oficjalny numer, np. ten z karty bankowej albo ze strony banku.', x: 'Twój bank nigdy nie prosi o kody ani PIN przez telefon, SMS czy e-mail. Nie klikaj w linki w nieoczekiwanych wiadomościach. Ktoś naciska na szybką płatność? Zatrzymaj się i najpierw sprawdź. Zadzwoń do banku na oficjalny numer, np. ten z karty bankowej albo ze strony banku.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.p': { m: 'Sam oddzwonię do banku.', f: 'Sama oddzwonię do banku.', x: 'Oddzwonię do banku na własną rękę.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.scams.s': 'Dostajesz SMS-a: „Twoje konto zostanie zablokowane. Kliknij teraz w ten link.” Co robisz?',
    'c.scams.o1': 'Nie klikasz. Dzwonisz do banku na oficjalny numer.',
    'c.scams.o2': 'Szybko klikasz, żeby konto nie zostało zablokowane.',
    'c.scams.o3': 'Odpisujesz na SMS-a i pytasz, czy to prawda.',
    'c.scams.w': 'Oszuści wywierają presję i używają fałszywych linków. Twój bank nigdy nie prosi o kody przez link ani wiadomość.',
    'c.bike': 'Rowerem do pracy',
    'c.bike.b': 'Gdy jest ciemno, włącz światła. Jedź ścieżką rowerową i przestrzegaj świateł i znaków. Zawsze zapinaj rower. Trzymanie telefonu w ręce podczas jazdy rowerem jest zabronione.',
    'c.bike.p': 'Gdzie mogę zostawić rower?',
    'c.bike.s': 'Jest ciemno, jedziesz rowerem na nocną zmianę. Dzwoni twój telefon. Co robisz?',
    'c.bike.o1': 'Zatrzymujesz się w bezpiecznym miejscu, zanim odbierzesz.',
    'c.bike.o2': 'Odbierasz z telefonem w ręce podczas jazdy.',
    'c.bike.o3': 'Jedziesz dalej i szybko zerkasz na telefon.',
    'c.bike.w': 'Telefon w ręce podczas jazdy rowerem jest zabroniony i niebezpieczny. Zatrzymanie się zajmuje tylko chwilę.',
    'c.transit': 'Autobus, pociąg i koszty dojazdu',
    'c.transit.b': 'W większości autobusów i pociągów możesz płacić kartą bankową (OVpay). Zbliż tę samą kartę do czytnika przy wejściu I przy wyjściu, inaczej zapłacisz za dużo. Zwrot kosztów dojazdu (reiskostenvergoeding) to nie jest prawo ustawowe: zależy od pracodawcy albo od cao. Zapytaj o to. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.transit.p': 'Czy dostanę pieniądze za dojazd?',
    'c.transit.s': 'Codziennie jeździsz do pracy autobusem. Kolega dostaje pieniądze za dojazd, a ty nie. Co robisz?',
    'c.transit.o1': 'Pytasz przełożonego o zasady firmy albo cao.',
    'c.transit.o2': 'Nic nie mówisz, bo to pewnie nie dla ciebie.',
    'c.transit.o3': 'Mówisz przełożonemu: według prawa tobie też się należą.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': 'Zwrot kosztów dojazdu zależy od pracodawcy albo od cao. Pytanie o to jest normalne i pomaga ci poznać swoje prawa.',
    'c.ww': 'Zasiłek dla bezrobotnych (WW)',
    'c.ww.b': { m: 'Straciłeś pracę? Złóż wniosek o WW w UWV jak najszybciej, w ciągu tygodnia od pierwszego dnia bez pracy. Zwykle musisz przepracować co najmniej 26 z ostatnich 36 tygodni. Jeśli sam zwolnisz się z pracy, zwykle nie dostaniesz WW. Zarejestruj się jako osoba szukająca pracy na werk.nl. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Straciłaś pracę? Złóż wniosek o WW w UWV jak najszybciej, w ciągu tygodnia od pierwszego dnia bez pracy. Zwykle musisz przepracować co najmniej 26 z ostatnich 36 tygodni. Jeśli sama zwolnisz się z pracy, zwykle nie dostaniesz WW. Zarejestruj się jako osoba szukająca pracy na werk.nl. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'Nie masz już pracy? Złóż wniosek o WW w UWV jak najszybciej, w ciągu tygodnia od pierwszego dnia bez pracy. Zwykle musisz przepracować co najmniej 26 z ostatnich 36 tygodni. Jeśli zwolnisz się z własnej woli, zwykle nie dostaniesz WW. Zarejestruj się jako osoba szukająca pracy na werk.nl. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.x': 'Szukasz pracy w innym kraju UE? Czasem możesz zabrać WW ze sobą. Przed wyjazdem poproś UWV o formularz U2. Bez U2 twoje WW się kończy.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'Chcę złożyć wniosek o zasiłek dla bezrobotnych. Co muszę zrobić?',
    'c.ww.s': { m: 'Jesteś zły na swoją pracę i chcesz się dziś zwolnić. Co jest mądre?', f: 'Jesteś zła na swoją pracę i chcesz się dziś zwolnić. Co jest mądre?', x: 'Twoja praca cię złości i chcesz się dziś zwolnić. Co jest mądre?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.o1': 'Najpierw prosisz o radę, zanim odejdziesz z pracy.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ww.o2': 'Zwalniasz się dzisiaj: WW i tak dostaniesz.',
    'c.ww.o3': 'Przestajesz przychodzić do pracy i nic nie mówisz.',
    'c.ww.w': 'Zwolnienie się może cię kosztować zasiłek. Rozmowa z przełożonym, związkiem zawodowym albo Juridisch Loket może pomóc znaleźć lepsze wyjście.',
    'c.newjob': 'Szukanie nowej pracy',
    'c.newjob.b': 'Zanim odejdziesz, poproś o referencje (referentie). Zachowaj paski wypłaty i umowę. Zaktualizuj CV. Szukaj pracy w agencjach pracy (uitzendbureaus) i na werk.nl. Nigdy nie płać za to, żeby dostać pracę. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.',
    'c.newjob.p': 'Czy mogę podać pana/panią jako osobę do referencji?',
    'c.newjob.s': 'Ktoś proponuje ci pracę, ale najpierw musisz zapłacić 300 euro „za pracę”. Co robisz?',
    'c.newjob.o1': 'Nie płacisz. Szukasz prawdziwej agencji.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': 'Płacisz, bo dobra praca jest tego warta.',
    'c.newjob.o3': 'Płacisz połowę teraz, a resztę później.',
    'c.newjob.w': 'Żądanie pieniędzy za pracę to sygnał ostrzegawczy. Agencja pracy nie może brać od ciebie pieniędzy za znalezienie pracy. Możesz też szukać pracy na werk.nl.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'Spotkanie toolbox',
    'c.tools.b': 'Na wielu budowach regularnie odbywa się krótkie spotkanie o bezpieczeństwie: spotkanie toolbox. Dowiadujesz się na nim o zagrożeniach i nowych zasadach. Idź na nie, słuchaj i pytaj, jeśli czegoś nie rozumiesz. Sprawdzaj narzędzia, zanim ich użyjesz. Narzędzie jest zepsute? Powiedz przełożonemu.',
    'c.tools.p': 'Ta wiertarka jest zepsuta. Jest jakaś inna?',
    'c.tools.s': 'Jest spotkanie toolbox, ale twój niderlandzki nie jest jeszcze dobry. Co robisz?',
    'c.tools.o1': 'Idziesz, a potem pytasz kolegę o to, co ci umknęło.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': 'Nie idziesz, bo i tak nic nie zrozumiesz.',
    'c.tools.o3': 'Podpisujesz listę obecności, ale nie idziesz.',
    'c.tools.w': { m: 'Informacje o bezpieczeństwie są dla wszystkich. Aplikacja do tłumaczenia może pomóc ci śledzić spotkanie, jeśli wolno tam używać telefonów. Pytanie kolegi po spotkaniu jest normalne i pozwala sprawdzić, czy dobrze zrozumiałeś.', f: 'Informacje o bezpieczeństwie są dla wszystkich. Aplikacja do tłumaczenia może pomóc ci śledzić spotkanie, jeśli wolno tam używać telefonów. Pytanie kolegi po spotkaniu jest normalne i pozwala sprawdzić, czy dobrze zrozumiałaś.', x: 'Informacje o bezpieczeństwie są dla wszystkich. Aplikacja do tłumaczenia może pomóc ci śledzić spotkanie, jeśli wolno tam używać telefonów. Pytanie kolegi po spotkaniu jest normalne i pozwala sprawdzić, czy dobrze rozumiesz.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.site': 'Zatrzymaj się i sprawdź: LMRA',
    'c.site.b': 'Zanim zaczniesz zadanie, zatrzymaj się na chwilę i sprawdź: co może tu pójść źle? To jest LMRA (ocena ryzyka w ostatniej minucie). Zawsze noś kask, a przy pracy na wysokości zabezpieczenie przed upadkiem. Nigdy nie stój pod wiszącym ładunkiem. Praca jest naprawdę niebezpieczna? Wtedy możesz przerwać, a przełożonemu musisz od razu o tym powiedzieć. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.site.p': 'Jeszcze nie zaczynam. To nie jest bezpieczne.',
    'c.site.s': 'Masz pracować na rusztowaniu, ale brakuje barierki. Kolega mówi: „Po prostu uważaj.” Co robisz?',
    'c.site.o1': 'Nie zaczynasz i mówisz o tym przełożonemu.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': 'Zaczynasz, ale bardzo uważasz.',
    'c.site.o3': { m: 'Sam naprawiasz barierkę kawałkiem liny.', f: 'Sama naprawiasz barierkę kawałkiem liny.', x: 'Samodzielnie naprawiasz barierkę kawałkiem liny.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.site.w': 'Upadek z wysokości może spowodować bardzo ciężkie obrażenia. Możesz przerwać niebezpieczną pracę, a zgłoszenie tego chroni cały zespół.',
    'c.line': 'Ręce z dala od pracujących maszyn',
    'c.line.b': 'Nigdy nie wkładaj rąk do pracującej maszyny, nawet na sekundę. Przy awarii (storing): naciśnij wyłącznik awaryjny (noodstop) i zawołaj przełożonego. Konserwacja i naprawy odbywają się tylko wtedy, gdy maszyna jest zablokowana (lock-out), i tylko przez przeszkolone osoby. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.line.p': { m: 'Jest awaria. Nacisnąłem wyłącznik awaryjny.', f: 'Jest awaria. Nacisnęłam wyłącznik awaryjny.', x: 'Jest awaria. Wyłącznik awaryjny jest wciśnięty.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.line.s': 'Produkt utknął w maszynie. Maszyna wciąż pracuje. Co robisz?',
    'c.line.o1': 'Naciskasz wyłącznik awaryjny i wołasz przełożonego.',
    'c.line.o2': 'Szybko wyciągasz go ręką, zanim się zepsuje.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': 'Zostawiasz to i liczysz, że maszyna sama to naprawi.',
    'c.line.w': 'Pracujące maszyny mogą w sekundę spowodować ciężki wypadek. Zatrzymanie maszyny jest zawsze dozwolone i zawsze lepsze.',
    'c.quality': 'Jakość: mów, co widzisz',
    'c.quality.b': { m: 'Widzisz problem z produktem, np. uszkodzenie albo złą etykietę? Zgłoś to i odłóż produkt na bok. Nie przepuszczaj go tylko po to, żeby linia dalej szła. Wczesne wykrycie problemu oszczędza dużo pracy i pieniędzy. Przełożony będzie zadowolony, że o tym powiedziałeś.', f: 'Widzisz problem z produktem, np. uszkodzenie albo złą etykietę? Zgłoś to i odłóż produkt na bok. Nie przepuszczaj go tylko po to, żeby linia dalej szła. Wczesne wykrycie problemu oszczędza dużo pracy i pieniędzy. Przełożony będzie zadowolony, że o tym powiedziałaś.', x: 'Widzisz problem z produktem, np. uszkodzenie albo złą etykietę? Zgłoś to i odłóż produkt na bok. Nie przepuszczaj go tylko po to, żeby linia dalej szła. Wczesne wykrycie problemu oszczędza dużo pracy i pieniędzy. Przełożony będzie zadowolony z twojego zgłoszenia.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.p': 'Myślę, że coś jest nie tak z tymi produktami.',
    'c.quality.s': 'Widzisz, że wiele produktów ma złą datę na etykiecie. Na linii jest bardzo dużo pracy. Co robisz?',
    'c.quality.o1': 'Od razu mówisz przełożonemu albo osobie od jakości.',
    'c.quality.o2': 'Przepuszczasz je, bo to nie twoje zadanie.',
    'c.quality.o3': 'Po cichu je wyrzucasz.',
    'c.quality.w': 'Zła etykieta może oznaczać, że wszystkie produkty muszą wrócić ze sklepów. Powiedzieć o tym wcześnie to postawa dobrego członka zespołu.',
    'c.client': 'Szacunek dla podopiecznego',
    'c.client.b': { m: 'Zapukaj, zanim wejdziesz do pokoju podopiecznego. Powiedz, kim jesteś, wyjaśnij, co zamierzasz zrobić, i poproś o zgodę. Do podopiecznych mów „u”, chyba że poproszą, żebyś mówił „je”. Pozwól podopiecznym robić to, co potrafią zrobić sami.', f: 'Zapukaj, zanim wejdziesz do pokoju podopiecznego. Powiedz, kim jesteś, wyjaśnij, co zamierzasz zrobić, i poproś o zgodę. Do podopiecznych mów „u”, chyba że poproszą, żebyś mówiła „je”. Pozwól podopiecznym robić to, co potrafią zrobić sami.', x: 'Zapukaj, zanim wejdziesz do pokoju podopiecznego. Powiedz, kim jesteś, wyjaśnij, co zamierzasz zrobić, i poproś o zgodę. Do podopiecznych mów „u”, chyba że poproszą o „je”. Pozwól podopiecznym robić to, co potrafią zrobić sami.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.client.p': { m: 'Czy mogę wejść? Przyszedłem pomóc panu/pani się umyć.', f: 'Czy mogę wejść? Przyszłam pomóc panu/pani się umyć.', x: 'Czy mogę wejść? Jestem tu, żeby pomóc panu/pani się umyć.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.client.s': 'Masz pomóc podopiecznej się umyć. Drzwi do jej pokoju są zamknięte. Co robisz?',
    'c.client.o1': 'Pukasz, czekasz i mówisz, kim jesteś i po co.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.client.o2': 'Szybko wchodzisz, bo masz dużo pracy.',
    'c.client.o3': 'Pomijasz mycie, żeby jej nie przeszkadzać.',
    'c.client.w': 'Pokój to dom podopiecznego. Pukanie i wyjaśnianie pokazuje szacunek i sprawia, że opieka przebiega spokojniej.',
    'c.privacy': 'Prywatność, higiena i leki',
    'c.privacy.b': { m: 'To, co widzisz i słyszysz o podopiecznych, zostaje w pracy. Nie rozmawiaj o podopiecznych poza pracą i nigdy nie publikuj ich zdjęć. Myj ręce przed opieką i po niej. Zauważasz zmianę u podopiecznego, np. ból albo upadek? Od razu powiedz pielęgniarce. Nigdy nie podawaj leków, chyba że jesteś przeszkolony i masz na to pozwolenie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'To, co widzisz i słyszysz o podopiecznych, zostaje w pracy. Nie rozmawiaj o podopiecznych poza pracą i nigdy nie publikuj ich zdjęć. Myj ręce przed opieką i po niej. Zauważasz zmianę u podopiecznego, np. ból albo upadek? Od razu powiedz pielęgniarce. Nigdy nie podawaj leków, chyba że jesteś przeszkolona i masz na to pozwolenie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'To, co widzisz i słyszysz o podopiecznych, zostaje w pracy. Nie rozmawiaj o podopiecznych poza pracą i nigdy nie publikuj ich zdjęć. Myj ręce przed opieką i po niej. Zauważasz zmianę u podopiecznego, np. ból albo upadek? Od razu powiedz pielęgniarce. Nigdy nie podawaj leków, chyba że masz do tego szkolenie i pozwolenie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.p': 'Ten pan ma większy ból niż wczoraj.',
    'c.privacy.s': { m: 'Podopieczna prosi cię o swoje tabletki. Nie jesteś przeszkolony do podawania leków. Co robisz?', f: 'Podopieczna prosi cię o swoje tabletki. Nie jesteś przeszkolona do podawania leków. Co robisz?', x: 'Podopieczna prosi cię o swoje tabletki. Nie masz szkolenia do podawania leków. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o1': 'Miło mówisz, że zawołasz pielęgniarkę.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': 'Dajesz tabletki, bo ona wie, czego potrzebuje.',
    'c.privacy.o3': 'Odmawiasz i odchodzisz.',
    'c.privacy.w': 'Zły lek może być niebezpieczny. Szybkie zawołanie właściwej osoby pomaga podopiecznemu i chroni wszystkich.',
    'c.kitchen': 'Bezpieczeństwo żywności',
    'c.kitchen.b': 'Często myj ręce, także po toalecie i po dotykaniu surowego mięsa. Zimne jedzenie trzymaj w zimnie, a ciepłe w cieple. Na przechowywanym jedzeniu przyklej etykietę z datą. Te zasady to HACCP. Alergie to poważna sprawa: nie wiesz, co jest w daniu? Zawsze zapytaj szefa kuchni. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.kitchen.p': 'Szefie, czy w tym sosie jest gluten?',
    'c.kitchen.s': 'Gość pyta, czy w daniu są orzechy. Nie masz pewności. Co robisz?',
    'c.kitchen.o1': 'Mówisz, że sprawdzisz, i pytasz szefa kuchni.',
    'c.kitchen.o2': 'Mówisz „nie”, żeby gość był zadowolony.',
    'c.kitchen.o3': 'Mówisz gościowi, żeby sam wyjął orzechy z dania.',
    'c.kitchen.w': 'Dla gościa z alergią mały błąd może być bardzo niebezpieczny. Sprawdzenie u szefa kuchni jest zawsze dobrym wyborem.',
    'c.service': 'Uprzejmie wobec gości',
    'c.service.b': { m: 'Do gości mów „u”, chyba że poproszą, żebyś mówił „je”. Bądź miły i spokojny, także gdy jest dużo pracy. Nie wiesz, jak odpowiedzieć na pytanie? Powiedz, że sprawdzisz. Napiwki (fooi): zasady są różne w różnych miejscach. Zapytaj, jak dzieli się napiwki u ciebie w pracy.', f: 'Do gości mów „u”, chyba że poproszą, żebyś mówiła „je”. Bądź miła i spokojna, także gdy jest dużo pracy. Nie wiesz, jak odpowiedzieć na pytanie? Powiedz, że sprawdzisz. Napiwki (fooi): zasady są różne w różnych miejscach. Zapytaj, jak dzieli się napiwki u ciebie w pracy.', x: 'Do gości mów „u”, chyba że poproszą o „je”. Zachowaj uprzejmość i spokój, także gdy jest dużo pracy. Nie wiesz, jak odpowiedzieć na pytanie? Powiedz, że sprawdzisz. Napiwki (fooi): zasady są różne w różnych miejscach. Zapytaj, jak dzieli się napiwki u ciebie w pracy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.service.p': 'Chwileczkę, zaraz do pana/pani podejdę.',
    'c.service.s': 'Jest bardzo dużo ludzi. Gość cię woła, ale niesiesz talerze do innego stolika. Co robisz?',
    'c.service.o1': 'Patrzysz na gościa i mówisz: „Een moment, ik kom zo bij u.”',
    'c.service.o2': 'Ignorujesz gościa, dopóki nie masz czasu.',
    'c.service.o3': 'Odstawiasz talerze na wolny stolik i najpierw idziesz do gościa.',
    'c.service.w': 'Krótki znak pokazuje gościowi, że go widzisz. Potem możesz spokojnie dokończyć zadanie.',
    'c.cleaning': 'Czytaj etykietę',
    'c.cleaning.b': 'Każdy środek czyszczący ma etykietę. Piktogramy (małe obrazki w czerwonym rombie) pokazują zagrożenie, np. dla skóry, oczu albo płuc. Przeczytaj etykietę albo zapytaj, do czego jest ten środek i jak go używać. Noś rękawice, które daje ci pracodawca. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.cleaning.p': 'Do czego jest ten środek?',
    'c.cleaning.s': 'Dostajesz nowy środek czyszczący. Nie możesz dobrze przeczytać etykiety. Co robisz?',
    'c.cleaning.o1': 'Pytasz, jak go bezpiecznie używać.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': 'Używasz go dużo, wtedy lepiej działa.',
    'c.cleaning.o3': 'Po prostu próbujesz bez rękawic.',
    'c.cleaning.w': 'Zły środek albo za dużo środka może uszkodzić skórę, oczy albo płuca. Pytanie zajmuje minutę.',
    'c.cleansafe': 'Nigdy nie mieszaj środków',
    'c.cleansafe.b': 'Nigdy nie mieszaj środków czyszczących, np. wybielacza i środka do toalet. Mogą powstać niebezpieczne gazy. Wietrz pomieszczenie. Myjesz podłogę? Postaw tabliczkę o mokrej podłodze (Pas op, glad!), żeby nikt się nie poślizgnął. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.cleansafe.p': 'Stawiam tabliczkę. Podłoga jest mokra.',
    'c.cleansafe.s': 'Toaleta jest bardzo brudna. Kolega mówi: „Zmieszaj dwa środki, wtedy lepiej działa.” Co robisz?',
    'c.cleansafe.o1': 'Nie mieszasz ich. Używasz jednego środka.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleansafe.o2': 'Mieszasz je, ale otwierasz okno.',
    'c.cleansafe.o3': 'Szybko je mieszasz i wychodzisz z pomieszczenia.',
    'c.cleansafe.w': 'Mieszanie środków może wytworzyć trujący gaz, nawet przy otwartym oknie. Jeden środek, dobrze użyty, wystarczy.',
    'u.tools': 'Sprytne narzędzia',
    'l.translate': 'Tłumacz telefonem',
    'w.vertaalapp': 'aplikacja do tłumaczenia',
    'w.vertalen': 'tłumaczyć',
    'w.camera': 'aparat (kamera)',
    'w.briefje': 'karteczka (mały papier)',
    'w.spreken': 'mówić',
    'w.vertaling': 'tłumaczenie',
    's.translate.1': 'Tłumaczę to telefonem.',
    's.translate.2': 'Mogę to szybko przetłumaczyć?',
    's.translate.3': 'Czy może pan/pani przez chwilę mówić do mojego telefonu?',
    'c.translate.q': 'Co jest napisane na tej karteczce?',
    'c.translate.a': 'Chwileczkę, przetłumaczę to.',
    'l.understood': 'Rozumieć i być rozumianym',
    'w.herhalen': 'powtarzać',
    'w.opschrijven': 'zapisać',
    'w.latenzien': 'pokazać',
    'w.ondertiteling': 'napisy (mowa jako tekst)',
    'w.instructie': 'instrukcja',
    'w.plaatje': 'obrazek',
    's.understood.1': 'Czy może mi pan/pani to zapisać?',
    's.understood.2': 'Czy może mi pan/pani to pokazać?',
    's.understood.3': 'Jest instrukcja z obrazkami?',
    'c.understood.q': 'Najpierw posprzątaj, potem pakuj.',
    'c.understood.a': 'Czyli najpierw muszę posprzątać?',
    'l.keeplearning': 'Ucz się dalej',
    'w.bibliotheek': 'biblioteka (publiczna)',
    'w.taalhuis': 'Taalhuis (bezpłatna pomoc w nauce niderlandzkiego)',
    'w.oefenen': 'ćwiczyć',
    'w.luisteren': 'słuchać',
    'w.elkedag': 'codziennie',
    'w.woord': 'słowo',
    's.keeplearning.1': 'Codziennie ćwiczę dziesięć minut.',
    's.keeplearning.2': 'Co znaczy to słowo?',
    's.keeplearning.3': 'Porozmawiasz ze mną po niderlandzku?',
    'c.keeplearning.q': 'Mam mówić po angielsku?',
    'c.keeplearning.a': 'Nie, po niderlandzku, proszę. Chcę ćwiczyć.',
    'c.translate': 'Aplikacje do tłumaczenia: sprytne, ale sprawdzaj',
    'c.translate.b': 'Aplikacja do tłumaczenia, na przykład Google Translate, bardzo pomaga. Możesz pisać, mówić albo użyć trybu rozmowy, żeby porozmawiać z kolegą. Aparatem możesz tłumaczyć znaki, karteczki i instrukcje. Na wielu telefonach WhatsApp też może tłumaczyć wiadomości. Używaj telefonu tylko tam, gdzie jest to bezpieczne i dozwolone. Nigdy przy maszynach ani wózkach widłowych. Zawsze najpierw zapytaj. Aplikacje robią błędy. W ważnych sprawach, takich jak twoja umowa, list albo instrukcja bezpieczeństwa, poproś też człowieka, żeby ci to wyjaśnił. Nie rób zdjęć poufnych dokumentów z pracy bez zgody.',
    'c.translate.p': 'Mogę użyć telefonu, żeby przetłumaczyć?',
    'c.translate.s': 'Przełożony daje ci instrukcje bezpieczeństwa po niderlandzku. Rozumiesz tylko kilka słów. Co robisz?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': 'Prosisz o wyjaśnienie i pytasz, czy możesz użyć aplikacji.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': 'Mówisz „ja, ja” i zaczynasz pracę.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': 'Robisz zdjęcie i wysyłasz je znajomym, żeby to przetłumaczyli.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': 'Aplikacja do tłumaczenia pomaga ci szybko zrozumieć, ale może się pomylić. W sprawach bezpieczeństwa najlepiej sprawdzić to z wyjaśnieniem od człowieka. Dokumenty z pracy mogą być poufne, więc nie udostępniaj ich bez zgody.',
    'c.understood': { m: 'Sprawdź, czy dobrze zrozumiałeś', f: 'Sprawdź, czy dobrze zrozumiałaś', x: 'Sprawdź, czy dobrze rozumiesz' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.b': { m: 'Twój telefon może zamieniać mowę na tekst (napisy na żywo): Live Transcribe na Androidzie, Live Captions na iPhonie. Sprawdź, jakie języki obsługuje twój telefon. Możesz też poprosić kogoś, żeby to zapisał, pokazał albo mówił wolno. Zapytaj, czy jest instrukcja z obrazkami albo w twoim języku. Potem powtórz, co zrozumiałeś: „Dus ik moet eerst …?” Tutaj to normalne i zapobiega błędom.', f: 'Twój telefon może zamieniać mowę na tekst (napisy na żywo): Live Transcribe na Androidzie, Live Captions na iPhonie. Sprawdź, jakie języki obsługuje twój telefon. Możesz też poprosić kogoś, żeby to zapisał, pokazał albo mówił wolno. Zapytaj, czy jest instrukcja z obrazkami albo w twoim języku. Potem powtórz, co zrozumiałaś: „Dus ik moet eerst …?” Tutaj to normalne i zapobiega błędom.', x: 'Twój telefon może zamieniać mowę na tekst (napisy na żywo): Live Transcribe na Androidzie, Live Captions na iPhonie. Sprawdź, jakie języki obsługuje twój telefon. Możesz też poprosić kogoś, żeby to zapisał, pokazał albo mówił wolno. Zapytaj, czy jest instrukcja z obrazkami albo w twoim języku. Potem powtórz, co rozumiesz: „Dus ik moet eerst …?” Tutaj to normalne i zapobiega błędom.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.p': 'Czyli najpierw muszę policzyć kartony?',
    'c.understood.s': 'Koleżanka wyjaśnia, jak działa nowa maszyna. Mówi szybko i nie łapiesz niektórych słów. Co robisz?',
    'c.understood.o1': 'Prosisz, żeby to pokazała albo zapisała, a potem to powtarzasz.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': 'Kiwasz głową i mówisz „ja, ja”, żeby nie traciła czasu.',
    'c.understood.o3': { m: 'Później sam próbujesz obsłużyć maszynę i patrzysz, co się stanie.', f: 'Później sama próbujesz obsłużyć maszynę i patrzysz, co się stanie.', x: 'Później samodzielnie próbujesz obsłużyć maszynę i patrzysz, co się stanie.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.w': 'Pokazanie, zapisanie i powtórzenie to szybkie sposoby sprawdzenia. Koleżanka może cię poprawić, zanim coś pójdzie źle. Tutaj uważa się to za ostrożność, a nie za powolność.',
    'c.keeplearning': 'Ucz się dalej, trochę każdego dnia',
    'c.keeplearning.b': 'Kilka minut codziennie pomaga bardziej niż jedna długa godzina w tygodniu. Zapisuj nowe słowa z pracy w aplikacji do notatek w telefonie. Słuchaj łatwego niderlandzkiego, na przykład NOS Jeugdjournaal (wiadomości dla dzieci) albo podcastu w wolnym niderlandzkim. W wielu bibliotekach publicznych jest Taalhuis: bezpłatna pomoc w nauce niderlandzkiego, często z taalcafé (miejscem do ćwiczenia mówienia) albo z partnerem do nauki języka (taalmaatje). Koledzy często przechodzą na angielski, żeby ci pomóc. Poproś ich uprzejmie, żeby mówili z tobą po niderlandzku: większość ludzi chętnie pomaga.',
    'c.keeplearning.p': 'Mów do mnie po prostu po niderlandzku, to szybciej się nauczę.',
    'c.keeplearning.s': 'Koledzy zawsze przechodzą na angielski, kiedy z tobą rozmawiają. Chcesz nauczyć się niderlandzkiego. Co robisz?',
    'c.keeplearning.o1': 'Dziękujesz im i prosisz, żeby mówili z tobą po niderlandzku.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': 'Nic nie mówisz. Niderlandzki przyjdzie sam.',
    'c.keeplearning.o3': 'Też odpowiadasz po angielsku, bo tak jest grzeczniej.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': 'Koledzy często przechodzą na angielski, żeby być mili. Kiedy prosisz o niderlandzki, większość chętnie pomaga. Mówienie trochę każdego dnia w pracy to jeden z najszybszych sposobów nauki.',
    'l.gossip': "Plotki i media społecznościowe",
    'w.roddelen': "plotkować",
    'w.posten': "publikować (w internecie)",
    'w.groepsapp': "czat grupowy",
    'w.socialemedia': "media społecznościowe",
    'w.delen': "udostępniać, dzielić się",
    'w.screenshot': "zrzut ekranu",
    's.gossip.1': "Nie plotkuję o kolegach z pracy.",
    's.gossip.2': "Nie wrzucam do internetu zdjęć z pracy.",
    's.gossip.3': "Lepiej powiedz mi to wprost.",
    'c.gossip.q': { m: 'Słyszałeś, co zrobił Mark?', f: 'Słyszałaś, co zrobił Mark?', x: 'Wiesz, co zrobił Mark?' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.gossip.a': "Nie, i wolę o nim nie rozmawiać.",
    'l.boundaries': "Przekraczanie granic",
    'w.aanraken': "dotykać",
    'w.ongewenst': "niechciany",
    'w.opmerking': "uwaga, komentarz",
    'w.intimidatie': "molestowanie, zastraszanie",
    'w.getuige': "świadek",
    'w.grapje': "żart",
    's.boundaries.1': "Nie dotykaj mnie.", // nieuw, nalezen ("Blijf van me af.", 4 nov 2026) // nagelezen AI 28 nov
    's.boundaries.2': "Ta uwaga nie jest dla mnie śmieszna.",
    's.boundaries.3': "Chcę coś zgłosić osobie zaufania.",
    'c.boundaries.q': "Nie rób problemów, to był tylko żart.",
    'c.boundaries.a': "Nie dla mnie. Chcę, żebyś przestał.",
    'c.gossip': "Plotki i media społecznościowe",
    'c.gossip.b': "Mówienie o koledze za jego plecami (roddelen) niszczy zaufanie w zespole. Masz z kimś problem? Porozmawiaj z tą osobą albo z przełożonym. W internecie obowiązują te same zasady co w pracy. Nie publikuj niczego o kolegach, klientach czy firmie bez zgody. Dotyczy to także zdjęć, filmów i wiadomości. Twój szef może zobaczyć, co publikujesz, a to może zostać w internecie na lata. Wiele zespołów ma czat grupowy (groepsapp) do spraw pracy: pisz tam tylko o pracy i nie pokazuj innym zrzutów ekranu z tego czatu. Udostępnianie prywatnych spraw kolegi albo wyśmiewanie kogoś w internecie to też nękanie.",
    'c.gossip.p': "Nie chcę, żeby to było w internecie.",
    'c.gossip.s': { m: 'Kolega nagrywa cię, kiedy poślizgnąłeś się na mokrej podłodze. Chce wrzucić film na TikTok. Co robisz?', f: 'Kolega nagrywa cię, kiedy poślizgnęłaś się na mokrej podłodze. Chce wrzucić film na TikTok. Co robisz?', x: 'Kolega nagrywa, jak ślizgasz się na mokrej podłodze. Chce wrzucić film na TikTok. Co robisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.o1': 'Mówisz „Nee, dat wil ik niet” i prosisz, żeby to usunął.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.o2': "Śmiejesz się i pozwalasz mu to opublikować, żeby nie robić problemów.",
    'c.gossip.o3': 'Prosisz go, żeby to opublikował bez twojego imienia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': 'Zwykle nikt nie może wrzucić filmu z tobą do internetu bez twojej zgody. Odmowa jest normalna, a pracodawca musi zareagować, gdy koledzy wyśmiewają się z siebie nawzajem w internecie. Jeśli i tak to opublikuje, powiedz o tym przełożonemu.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': "Przekraczanie granic",
    'c.boundaries.b': { m: 'Grensoverschrijdend gedrag to zachowanie, które przekracza czyjeś granice. Na przykład: niechciany dotyk, seksualne uwagi lub żarty, gapienie się, niechciane zdjęcia, groźby albo krzyk. Nie ma znaczenia, czy druga osoba „chciała tylko zażartować”: liczy się to, jak ty to odczuwasz. Jeśli możesz, powiedz wyraźnie, że chcesz, żeby to się skończyło. Zapisz, co się stało, kiedy i kto to widział. Powiedz o tym przełożonemu, osobie zaufania (vertrouwenspersoon, jeśli jest) albo w HR. Pracodawca musi cię chronić i nie możesz zostać ukarany za zgłoszenie. Widziałeś, że spotkało to kolegę? Zapytaj, czy wszystko w porządku, i zaproponuj, że będziesz świadkiem.', f: 'Grensoverschrijdend gedrag to zachowanie, które przekracza czyjeś granice. Na przykład: niechciany dotyk, seksualne uwagi lub żarty, gapienie się, niechciane zdjęcia, groźby albo krzyk. Nie ma znaczenia, czy druga osoba „chciała tylko zażartować”: liczy się to, jak ty to odczuwasz. Jeśli możesz, powiedz wyraźnie, że chcesz, żeby to się skończyło. Zapisz, co się stało, kiedy i kto to widział. Powiedz o tym przełożonemu, osobie zaufania (vertrouwenspersoon, jeśli jest) albo w HR. Pracodawca musi cię chronić i nie możesz zostać ukarana za zgłoszenie. Widziałaś, że spotkało to kolegę? Zapytaj, czy wszystko w porządku, i zaproponuj, że będziesz świadkiem.', x: 'Grensoverschrijdend gedrag to zachowanie, które przekracza czyjeś granice. Na przykład: niechciany dotyk, seksualne uwagi lub żarty, gapienie się, niechciane zdjęcia, groźby albo krzyk. Nie ma znaczenia, czy druga osoba „chciała tylko zażartować”: liczy się to, jak ty to odczuwasz. Jeśli możesz, powiedz wyraźnie, że chcesz, żeby to się skończyło. Zapisz, co się stało, kiedy i kto to widział. Powiedz o tym przełożonemu, osobie zaufania (vertrouwenspersoon, jeśli jest) albo w HR. Pracodawca musi cię chronić i nie wolno cię karać za zgłoszenie. Spotkało to kolegę na twoich oczach? Zapytaj, czy wszystko w porządku, i zaproponuj, że będziesz świadkiem.' },
    'c.boundaries.p': "Chcę, żebyś przestał.",
    'c.boundaries.s': "Twój kierownik zmiany często kładzie ci rękę na plecach i mówi, że wyglądasz „ładnie”. Czujesz się z tym niekomfortowo. To on decyduje o twoich zmianach. Co robisz?",
    'c.boundaries.o1': 'Zapisujesz, co się dzieje, i mówisz o tym vertrouwenspersoon.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.boundaries.o2': "Nic nie mówisz, bo to on decyduje o twoich zmianach.",
    'c.boundaries.o3': "Odchodzisz z pracy i nikomu nie mówisz dlaczego.",
    'c.boundaries.w': { m: 'To jest niechciane zachowanie i to nie twoja wina. Osoba zaufania słucha cię poufnie i pomaga wybrać kolejny krok. Jesteś chroniony, kiedy to zgłaszasz. Możesz też porozmawiać z HR.', f: 'To jest niechciane zachowanie i to nie twoja wina. Osoba zaufania słucha cię poufnie i pomaga wybrać kolejny krok. Jesteś chroniona, kiedy to zgłaszasz. Możesz też porozmawiać z HR.', x: 'To jest niechciane zachowanie i to nie twoja wina. Osoba zaufania słucha cię poufnie i pomaga wybrać kolejny krok. Masz ochronę, kiedy to zgłaszasz. Możesz też porozmawiać z HR.' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'u.shop': 'W sklepie',
    'l.shelves': 'Półki i zapas towaru',
    'w.schap': 'półka (w sklepie)',
    'w.vakkenvullen': 'wykładać towar na półki',
    'w.voorraad': 'zapas, towar na stanie',
    'w.houdbaarheidsdatum': 'data ważności (najlepiej spożyć przed)',
    'w.prijskaartje': 'cenówka',
    'w.achteraan': 'z tyłu',
    's.shelves.1': 'Nowe produkty ustaw z tyłu.',
    's.shelves.2': 'Ten produkt jest przeterminowany.',
    's.shelves.3': 'Jest jeszcze coś na stanie?',
    'c.shelves.q': 'Gdzie znajdę ryż?',
    'c.shelves.a': 'W alejce numer cztery. Zaprowadzę pana/panią.',
    'l.checkout': 'Przy kasie',
    'w.klant': 'klient',
    'w.kassa': 'kasa',
    'w.wisselgeld': 'reszta (pieniądze, które wydajesz)',
    'w.bonnetje': 'paragon',
    'w.pinnen': 'płacić kartą',
    'w.contant': 'gotówką',
    's.checkout.1': 'Płaci pan/pani kartą czy gotówką?',
    's.checkout.2': 'Proszę, oto reszta.',
    's.checkout.3': 'Czy mogę prosić o dowód osobisty?',
    'c.checkout.q': 'Mogę tu zapłacić kartą?',
    'c.checkout.a': 'Tak, oczywiście, można.',
    'u.numbers': 'Czas, pieniądze i miary',
    'l.counting': 'Liczby', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertien': 'trzynaście (13)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertig': 'trzydzieści (30)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventien': 'siedemnaście (17)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventig': 'siedemdziesiąt (70)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zevenenveertig': 'czterdzieści siedem (47)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierenzeventig': 'siedemdziesiąt cztery (74)', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.1': 'Mam trzynaście kartonów, nie trzydzieści.', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.2': 'Lokalizacja siedemdziesiąt cztery jest pusta.', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.3': 'Czy może pan/pani powiedzieć to cyfra po cyfrze?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.q': 'Ile kartonów jeszcze zostało?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.a': 'Siedemdziesiąt. Siedem, zero.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.hours': 'Godziny i czas',
    'w.uur': 'godzina',
    'w.minuut': 'minuta',
    'w.kwartier': 'kwadrans (15 minut)',
    'w.halfuur': 'pół godziny (30 minut)',
    'w.duren': 'trwać',
    'w.optellen': 'dodawać, sumować',
    's.hours.1': 'Zaczynam o wpół do ósmej (7:30).',
    's.hours.2': 'Dzisiaj pracuję osiem godzin.',
    's.hours.3': 'Przerwa trwa pół godziny.',
    'c.hours.q': 'O której kończysz?',
    'c.hours.a': 'Kwadrans po czwartej.',
    'l.measures': 'Pieniądze i miary',
    'w.euro': 'euro',
    'w.cent': 'cent',
    'w.kilo': 'kilogram, kilo',
    'w.liter': 'litr',
    'w.meter': 'metr',
    'w.tellen': 'liczyć',
    's.measures.1': 'To kosztuje sześć euro pięćdziesiąt.',
    's.measures.2': 'Ten karton waży dziesięć kilo.',
    's.measures.3': { m: 'Policzyłem czterdzieści kartonów.', f: 'Policzyłam czterdzieści kartonów.', x: 'Wychodzi mi czterdzieści kartonów.' }, // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.measures.q': 'Jak długa jest ta deska?',
    'c.measures.a': 'Dokładnie dwa metry.',
    'c.shelves': 'Starsze do przodu',
    'c.shelves.b': 'Kiedy wykładasz towar, patrz na datę na produktach. Produkty z najbliższą datą ustaw z przodu, a nowe z tyłu. Klienci biorą z przodu, więc starsze produkty schodzą pierwsze. Produkt jest przeterminowany albo uszkodzony? Zdejmij go z półki i zapytaj, co z nim zrobić. Nie zostawiaj w alejkach kartonów ani wózków. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.shelves.p': 'Co mam zrobić z przeterminowanymi produktami?',
    'c.shelves.s': 'Wykładasz nowe mleko na półkę. Z przodu stoi mleko z bliższą datą. Co robisz?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': 'Nowe mleko z tyłu, starsze z przodu.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o2': 'Nowe mleko z przodu, bo jest świeższe.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o3': 'Wyrzucasz starsze mleko.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'Klienci biorą z przodu. Kiedy starsze produkty schodzą pierwsze, mniej jedzenia trafia do kosza.',
    'c.checkout': 'Dowód przy alkoholu i tytoniu',
    'c.checkout.b': 'Nie wolno sprzedawać alkoholu ani tytoniu osobom poniżej 18 lat: tak mówi prawo. Nie wiesz, ile lat ma klient? Poproś o dowód. Wiele sklepów prosi o dowód każdego, kto wygląda na mniej niż 25 lat. Nie ma dowodu albo ma mniej niż 18 lat? Wtedy nie sprzedajesz i zachowujesz się uprzejmie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.checkout.p': 'Bez dowodu nie mogę tego sprzedać.',
    'c.checkout.s': 'Młody mężczyzna chce kupić piwo. Wygląda na jakieś 17 lat. Mówi, że ma 19, ale nie ma przy sobie dowodu. Co robisz?',
    'c.checkout.o1': 'Mówisz, że bez dowodu nie możesz sprzedać.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': 'Sprzedajesz, bo mówi, że ma 19 lat.',
    'c.checkout.o3': 'Sprzedajesz, ale tylko jedną puszkę.',
    'c.checkout.w': 'Bez dowodu nie możesz znać jego wieku. Sprzedaż alkoholu osobie poniżej 18 lat jest niezgodna z prawem, a sklep może dostać karę.',
    'c.counting': 'Vijfentwintig: najpierw 5, potem 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'Po niderlandzku liczby od 0 do 12 mają własne słowa: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. Liczby od 13 do 19 kończą się na -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Dziesiątki kończą się na -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. Od 21 do 99 najpierw mówi się ostatnią cyfrę: 25 to vijfentwintig, „pięć i dwadzieścia”. Czyli 47 to zevenenveertig, a 74 to vierenzeventig. Dertien i dertig brzmią prawie tak samo: słuchaj końcówki. Masz wątpliwości? Powtórz cyfry po kolei.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': 'Cztery, siedem? Czyli czterdzieści siedem?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'Przełożony mówi: „Ga naar gang zevenenveertig.” Która to alejka?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': 'Alejka 47.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'Alejka 74.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'Alejka 40.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '„Zevenenveertig” to „siedem i czterdzieści”: najpierw 7, potem 40. Czyli to alejka 47. Wielu nowych pracowników słyszy 74 i idzie do złej alejki.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': '„Half acht” to 7:30',
    'c.hours.b': 'Po niderlandzku „half” liczy się do następnej godziny: half acht to 7:30, a nie 8:30. Kwart over acht to 8:15, a kwart voor acht to 7:45. Sprawdzaj swoje godziny: godzina końca minus godzina początku, minus przerwa. Przerwa często jest niepłatna. Codziennie zapisuj swoje godziny.',
    'c.hours.p': '„Half acht”? Czyli pół godziny przed ósmą?',
    'c.hours.s': 'Przełożony mówi: „Morgen begin je om half negen.” O której jutro zaczynasz?',
    'c.hours.o1': 'O 8:30.',
    'c.hours.o2': 'O 9:30.',
    'c.hours.o3': 'O 8:00.',
    'c.hours.w': '„Half negen” to pół godziny przed dziewiątą, jak polskie „wpół do dziewiątej”: 8:30. Wielu nowych pracowników myśli, że to 9:30, i przychodzi godzinę za późno.',
    'c.measures': 'Licz sprytnie, odmierzaj, nie zgaduj',
    'c.measures.b': 'Masz policzyć dużo kartonów? Policz kartony w jednej warstwie i liczbę warstw. Potem pomnóż: 8 kartonów w warstwie i 5 warstw to 40 kartonów. Środki czystości odmierzaj tak, jak podaje etykieta. Więcej nie znaczy lepiej: to może uszkodzić skórę i kosztuje pieniądze. Masz wątpliwości co do liczby? Policz jeszcze raz albo zapytaj. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.measures.p': { m: 'Policzyłem to dwa razy.', f: 'Policzyłam to dwa razy.', x: 'To jest policzone dwa razy.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.s': 'Paleta ma 6 warstw. W każdej warstwie jest 8 kartonów. Przełożony pyta, ile jest kartonów. Co mówisz?',
    'c.measures.o1': '48 kartonów.',
    'c.measures.o2': '14 kartonów.',
    'c.measures.o3': 'Chyba około 50.',
    'c.measures.w': '6 warstw po 8 kartonów to 6 razy 8: 48. Policzenie jednej warstwy i pomnożenie jest szybkie, a prawdziwa liczba jest lepsza niż zgadywanie.',
    'u.ai': 'Sprytne aplikacje i AI',
    'l.aihelp': 'AI jako pomocnik',
    'w.ai': 'AI, sztuczna inteligencja',
    'w.chatbot': 'chatbot (aplikacja, z którą można pisać)',
    'w.antwoord': 'odpowiedź',
    'w.meekijken': 'popatrzeć razem z kimś, sprawdzić razem',
    'w.kloppen': 'zgadzać się, być prawdą',
    'w.zeker': 'pewny, na pewno',
    's.aihelp.1': 'Możesz wyjaśnić ten list?',
    's.aihelp.2': 'Czy ta odpowiedź się zgadza?',
    's.aihelp.3': 'Czy może pan/pani na to ze mną zerknąć?',
    'c.aihelp.q': { m: 'Sam to napisałeś?', f: 'Sama to napisałaś?', x: 'To twój własny tekst?' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.aihelp.a': 'Tak, z pomocą AI.',
    'l.aiprivate': 'Czego nie udostępniasz',
    'w.persoonlijk': 'osobisty, prywatny',
    'w.gegevens': 'dane (imię, adres, numer)',
    'w.wachtwoord': 'hasło',
    'w.typen': 'pisać (na klawiaturze)',
    'w.opslaan': 'zapisać, przechowywać',
    'w.inloggen': 'zalogować się',
    's.aiprivate.1': 'Nie udostępniam nazwisk klientów.',
    's.aiprivate.2': 'Czy mogę używać AI w pracy?',
    's.aiprivate.3': 'Moje hasło jest tajne.',
    'c.aiprivate.q': 'Wrzuć to do chatbota.',
    'c.aiprivate.a': 'Wolę nie, są tam nazwiska klientów.',
    'l.aifake': 'Fałszywe czy prawdziwe?',
    'w.echt': 'prawdziwy',
    'w.stem': 'głos',
    'w.filmpje': 'filmik, krótkie wideo',
    'w.ophangen': 'rozłączyć się (odłożyć słuchawkę)',
    'w.nummer': 'numer (telefonu)',
    'w.haast': 'pośpiech',
    's.aifake.1': 'Czy to jest prawdziwe, czy fałszywe?',
    's.aifake.2': { m: 'Rozłączam się i sam oddzwaniam.', f: 'Rozłączam się i sama oddzwaniam.', x: 'Rozłączam się i to ja oddzwaniam.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.aifake.3': 'Nie wysyłam pieniędzy.',
    'c.aifake.q': 'Cześć, to mój nowy numer. Możesz szybko przesłać pieniądze?',
    'c.aifake.a': 'Najpierw zadzwonię do ciebie na stary numer.',
    'l.aiplan': 'Kiedy decyduje aplikacja',
    'w.planning': 'planowanie, grafik',
    'w.mens': 'człowiek, osoba',
    'w.computer': 'komputer',
    'w.tempo': 'tempo (pracy)',
    'w.automatisch': 'automatycznie, sam z siebie',
    'w.besluit': 'decyzja',
    's.aiplan.1': 'Kto podjął tę decyzję?',
    's.aiplan.2': 'Chcę porozmawiać z człowiekiem.',
    's.aiplan.3': 'Dlaczego mam mniej godzin w grafiku?',
    'c.aiplan.q': 'Aplikacja zrobiła ci grafik.',
    'c.aiplan.a': 'Czy mogę o tym porozmawiać z człowiekiem?',
    'c.aihelp': 'AI pomaga, człowiek sprawdza',
    'c.aihelp.b': 'Aplikacje AI i chatboty, takie jak ChatGPT, potrafią tłumaczyć, wyjaśnić list albo pomóc napisać wiadomość. To przydatne. Ale AI czasem się myli, a mimo to brzmi bardzo pewnie. Chodzi o umowę, wynagrodzenie, leki czy bezpieczeństwo? Wtedy zawsze sprawdź odpowiedź z człowiekiem. Na przykład z przełożonym, z działem kadr (HR) albo w Juridisch Loket.',
    'c.aihelp.p': 'Czy to się zgadza? Może pan/pani ze mną na to zerknąć?',
    'c.aihelp.s': 'Pytasz chatbota o swoją umowę. Odpowiada, że nie dostajesz dodatku urlopowego (vakantiegeld). Co robisz?',
    'c.aihelp.o1': 'Prosisz HR albo Juridisch Loket o sprawdzenie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aihelp.o2': 'Wierzysz mu: chatbot brzmi bardzo pewnie.',
    'c.aihelp.o3': 'Nic nie mówisz i o tym zapominasz.',
    'c.aihelp.w': 'Chatbot może się mylić co do przepisów i umów. W Holandii prawie każdy pracownik dostaje dodatek urlopowy. Człowiek, który zna przepisy, może to sprawdzić.',
    'c.aiprivate': 'Pomyśl, zanim coś wpiszesz',
    'c.aiprivate.b': 'To, co wpisujesz do chatbota, może zostać zapisane i wykorzystane przez firmę, która go zrobiła. Dlatego nigdy nie wpisuj swojego BSN, hasła ani danych bankowych. Nie wpisuj nazwisk ani zdjęć klientów, pacjentów czy kolegów, ani dokumentów z pracy. Wielu pracodawców ma zasady dotyczące AI. Najpierw zapytaj, czy możesz go używać w pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.aiprivate.p': 'Czy mogę do tego użyć AI?',
    'c.aiprivate.s': 'Chcesz, żeby chatbot napisał raport o kliencie. W raporcie jest nazwisko i adres klienta. Co robisz?',
    'c.aiprivate.o1': 'Najpierw pytasz i pomijasz nazwisko i adres.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': 'Wpisujesz wszystko do chatbota: tak jest szybciej.',
    'c.aiprivate.o3': 'Wysyłasz raport znajomemu, żeby go sprawdził.',
    'c.aiprivate.w': 'Nazwisko i adres to dane osobowe. Nie mogą tak po prostu trafić do innej firmy. Pracodawca wie, z jakich aplikacji wolno korzystać.',
    'c.aifake': 'Fałszywe głosy i filmy',
    'c.aifake.b': 'Dzięki AI przestępcy potrafią podrobić głos i zrobić fałszywe zdjęcia i filmy. Telefon albo wiadomość, które brzmią jak twój szef, twój bank albo ktoś z rodziny, mogą być fałszywe. Uważaj, gdy jest pośpiech, chodzi o pieniądze i pojawia się nowy numer. Rozłącz się i oddzwoń na numer, który znasz. Prawdziwy bank, pracodawca ani policja nigdy nie proszą o twoje kody.',
    'c.aifake.p': { m: 'Rozłączam się i sam oddzwaniam.', f: 'Rozłączam się i sama oddzwaniam.', x: 'Rozłączam się i oddzwaniam na własną rękę.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.aifake.s': 'Dzwoni twój telefon. Głos, który brzmi dokładnie jak twój szef, mówi: „Zapłać ten rachunek teraz, to pilne.” Co robisz?',
    'c.aifake.o1': 'Rozłączasz się i oddzwaniasz do szefa.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aifake.o2': 'Szybko płacisz: to przecież szef.',
    'c.aifake.o3': 'Podajesz swój kod do banku, żeby szef mógł zapłacić.',
    'c.aifake.w': 'Głos można podrobić za pomocą AI. Pośpiech i pieniądze razem to sygnał ostrzegawczy. Oddzwonienie na znany numer to szybkie i bezpieczne sprawdzenie.',
    'c.aiplan': 'Kto o tym zdecydował?',
    'c.aiplan.b': 'Coraz więcej firm pozwala aplikacji albo komputerowi podejmować decyzje. Na przykład układa grafik albo mierzy twoje tempo skanerem. Możesz zapytać, jakie informacje o tobie są zbierane. Zapada ważna decyzja w twojej sprawie, na przykład mniej godzin, upomnienie albo zwolnienie? Zapytaj, kto o tym zdecydował. Czy komputer sam podjął tę decyzję? Wtedy możesz poprosić, żeby człowiek jeszcze raz to sprawdził i wyjaśnił. Zapisuj swoje godziny. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.aiplan.p': 'Czy człowiek może na to zerknąć?',
    'c.aiplan.s': 'Aplikacja do grafiku daje ci w przyszłym miesiącu dużo mniej godzin. Nikt nie mówi dlaczego. Co robisz?',
    'c.aiplan.o1': 'Prosisz, żeby człowiek to wyjaśnił.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.o2': 'Akceptujesz to: aplikacja zawsze ma rację.',
    'c.aiplan.o3': 'Pytasz chatbota w aplikacji, dlaczego.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': 'Aplikacje się mylą i nie wiedzą o tobie wszystkiego. Możesz poprosić o wyjaśnienie, a człowiek może to jeszcze raz sprawdzić.',
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': "W szklarni", // nagelezen (2e lezing)
    'l.harvest': "Zbiór i sortowanie", // nagelezen (2e lezing)
    'w.kas': "szklarnia", // nagelezen (2e lezing)
    'w.gewas': "uprawa (rośliny, które rosną)", // nagelezen (2e lezing)
    'w.rij': "rząd (roślin)", // nagelezen (2e lezing)
    'w.oogsten': "zbierać (plony)", // nagelezen (2e lezing)
    'w.sorteren': "sortować", // nagelezen (2e lezing)
    'w.krat': "skrzynka", // nagelezen (2e lezing)
    's.harvest.1': "Pracuję w szklarni.", // nagelezen (2e lezing)
    's.harvest.2': "W którym rzędzie zaczynam?", // nagelezen (2e lezing)
    's.harvest.3': "Skrzynka jest pełna.", // nagelezen (2e lezing)
    'c.harvest.q': { m: "Ile rzędów już zrobiłeś?", f: "Ile rzędów już zrobiłaś?", x: 'Ile rzędów już masz?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.harvest.a': "Cztery. Zostały jeszcze dwa.", // nagelezen (2e lezing)
    'l.greensafe': "Bezpiecznie w szklarni", // nagelezen (2e lezing)
    'w.spuitmiddelen': "środki ochrony roślin (chemikalia do oprysków)", // nagelezen (2e lezing)
    'w.bespoten': "opryskany (środkami ochrony roślin)", // nagelezen (2e lezing)
    'w.plukkar': "wózek do zbioru", // nagelezen (2e lezing)
    'w.bukken': "schylać się", // nagelezen (2e lezing)
    'w.drinken': "pić", // nagelezen (2e lezing)
    'w.hitte': "upał (kiedy jest bardzo gorąco)", // nagelezen (2e lezing)
    's.greensafe.1': "Czy ta szklarnia była opryskana?", // nagelezen (2e lezing)
    's.greensafe.2': "Idę się napić wody.", // nagelezen (2e lezing)
    's.greensafe.3': "Gdzie stoi wózek do zbioru?", // nagelezen (2e lezing)
    'c.greensafe.q': "Mogę pracować w szklarni numer trzy?", // nagelezen (2e lezing)
    'c.greensafe.a': "Nie, jeszcze nie. Dopiero co była opryskana.", // nagelezen (2e lezing)
    'c.harvest': "Tempo i akord", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': "W szklarni często pracujesz w stałym tempie (tempo). Niektórzy pracodawcy płacą za skrzynkę, za rząd albo za kilogram: to praca na akord (stukloon). Nawet przy akordzie musisz zarobić co najmniej płacę minimalną za każdą przepracowaną godzinę. Sprawdź kwotę na rijksoverheid.nl. Codziennie zapisuj swoje godziny i skrzynki i porównuj je z paskiem wypłaty. Szybka praca jest dobra, ale bezpieczeństwo jest najważniejsze. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': { m: "Ile skrzynek dzisiaj zrobiłem?", f: "Ile skrzynek dzisiaj zrobiłam?", x: 'Ile skrzynek mam dzisiaj?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.s': "Płacą ci za skrzynkę. W tym tygodniu zarabiasz mniej niż płaca minimalna za godzinę. Co robisz?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': "Pokazujesz swoją listę godzin i skrzynek.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': "Nic nie mówisz i pracujesz szybciej.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': "Akceptujesz to: przy akordzie to normalne.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': { m: "Przy akordzie i tak musisz dostać co najmniej płacę minimalną za każdą przepracowaną godzinę. Twoja lista godzin i skrzynek pomaga pokazać, co zrobiłeś. Jeśli tego nie poprawią, poproś o pomoc.", f: "Przy akordzie i tak musisz dostać co najmniej płacę minimalną za każdą przepracowaną godzinę. Twoja lista godzin i skrzynek pomaga pokazać, co zrobiłaś. Jeśli tego nie poprawią, poproś o pomoc.", x: 'Przy akordzie i tak musisz dostać co najmniej płacę minimalną za każdą przepracowaną godzinę. Twoja lista godzin i skrzynek pomaga pokazać twoją pracę. Jeśli tego nie poprawią, poproś o pomoc.' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe': "Upał i opryski", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': "W szklarni może być bardzo gorąco, także wiosną. Często pij wodę, także zanim poczujesz pragnienie, i rób przerwy w chłodnym miejscu. Kręci ci się w głowie, jest ci niedobrze albo boli cię głowa? Przerwij pracę i powiedz komuś. Rośliny są czasem opryskiwane chemikaliami (spuitmiddelen). Na drzwiach szklarni, która dopiero co była opryskana, często wisi tabliczka. Nie wchodź, dopóki przełożony nie powie, że znowu jest bezpiecznie. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': "Czy mogę już pracować w tej szklarni?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': "Dziś rano opryskano szklarnię. Na drzwiach wisi tabliczka. Kolega mówi: „No chodź, to tylko na chwilę.” Co robisz?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o1': "Zostajesz na zewnątrz i pytasz, kiedy będzie bezpiecznie.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o2': "Szybko wchodzisz i wstrzymujesz oddech.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': "Wchodzisz, a potem dobrze myjesz ręce.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': "Środki ochrony roślin mogą szkodzić skórze, oczom i płucom, także kiedy nie czujesz żadnego zapachu. Po oprysku jest czas oczekiwania, zanim można znowu wejść. Przełożony wie, kiedy się kończy.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Liczby i dane",
    'l.details': "Twoje dane",
    'w.voornaam': "imię",
    'w.achternaam': "nazwisko",
    'w.spellen': "przeliterować (powiedzieć litery po kolei)",
    'w.telefoonnummer': "numer telefonu",
    'w.geboortedatum': "data urodzenia",
    'w.formulier': "formularz (kartka albo strona do wypełnienia)",
    's.details.1': "Czy mogę prosić o przeliterowanie?",
    's.details.2': "Podaję mój nowy numer telefonu.",
    's.details.3': "Ten formularz jest dla urzędu skarbowego (Belastingdienst).",
    'c.details.q': "Jak masz na nazwisko?",
    'c.details.a': "Haddad. Mam przeliterować?",
    'l.dates': "Dni i daty",
    'w.maandag': "poniedziałek",
    'w.week': "tydzień",
    'w.maand': "miesiąc",
    'w.volgendeweek': "w przyszłym tygodniu",
    'w.vorigeweek': "w zeszłym tygodniu",
    'w.totenmet': "do … włącznie (ostatni dzień też się liczy)",
    's.dates.1': "Mogę od poniedziałku do czwartku włącznie.",
    's.dates.2': "W przyszłym tygodniu pracuję cztery dni.",
    's.dates.3': { m: "W zeszłym tygodniu pracowałem czterdzieści godzin.", f: "W zeszłym tygodniu pracowałam czterdzieści godzin.", x: 'W zeszłym tygodniu wyszło mi czterdzieści godzin pracy.' }, // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.dates.q': "Jaka jest dzisiaj data?",
    'c.dates.a': "Jest poniedziałek, trzeci czerwca.",
    'l.permit': "Dokumenty, integracja i twoja praca", // nagelezen AI 22 nov
    'w.papieren': "dokumenty, papiery", // nagelezen AI 22 nov
    'w.werkvergunning': "pozwolenie na pracę", // nagelezen AI 22 nov
    'w.werknemer': "pracownik (pracujesz dla pracodawcy)", // nagelezen AI 22 nov
    'w.zzper': "samozatrudniony (pracujesz na własny rachunek)", // nagelezen AI 22 nov
    'w.inburgering': "integracja obywatelska (kurs i egzaminy dla nowo przybyłych)", // nagelezen AI 22 nov
    'w.taalles': "lekcja języka", // nagelezen AI 22 nov
    's.permit.1': "Czy mogę tu pracować z moimi dokumentami?", // nagelezen AI 22 nov
    's.permit.2': { m: "Jestem pracownikiem czy samozatrudnionym?", f: "Jestem pracownicą czy samozatrudnioną?", x: 'Pracuję na etacie czy na własny rachunek?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.permit.3': "Pracuję na wezwanie.", // nagelezen AI 22 nov
    'c.permit.q': "Możesz pracować we wtorek?", // nagelezen AI 22 nov
    'c.permit.a': "Nie, wtedy mam lekcję języka. W środę mogę.", // nagelezen AI 22 nov
    'l.kids': "Dzieci i praca", // nagelezen AI 22 nov
    'w.zwanger': "w ciąży", // nagelezen AI 22 nov
    'w.kinderopvang': "opieka nad dziećmi, żłobek", // nagelezen AI 22 nov
    'w.ophalen': "odebrać (pójść po kogoś)", // nagelezen AI 22 nov
    'w.ziekkind': "chore dziecko", // nagelezen AI 22 nov
    'w.ouderschapsverlof': "urlop rodzicielski", // nagelezen AI 22 nov
    'w.zorgverlof': "urlop opiekuńczy (wolne, żeby opiekować się chorym członkiem rodziny)", // nagelezen AI 22 nov
    's.kids.1': "Moje dziecko jest chore. Muszę je odebrać.", // nagelezen AI 22 nov
    's.kids.2': "Czy mogę wziąć urlop w nagłej sytuacji?", // nagelezen AI 22 nov
    's.kids.3': "Czy pracodawca dalej płaci mi wynagrodzenie?", // nagelezen AI 22 nov
    'c.kids.q': "Dlaczego musisz teraz wyjść?", // nagelezen AI 22 nov
    'c.kids.a': "Dzwonili ze żłobka. Mój syn ma gorączkę.", // nagelezen AI 22 nov
    'l.body': "Ciało i ból", // nagelezen AI 22 nov
    'w.hoofd': "głowa", // nagelezen AI 22 nov
    'w.rug': "plecy", // nagelezen AI 22 nov
    'w.arm': "ręka (ramię)", // nagelezen AI 22 nov
    'w.hand': "dłoń", // nagelezen AI 22 nov
    'w.buik': "brzuch", // nagelezen AI 22 nov
    'w.oog': "oko", // nagelezen AI 22 nov
    's.body.1': "Boli mnie dłoń.", // nagelezen AI 22 nov
    's.body.2': "Źle się czuję.", // nagelezen AI 22 nov
    's.body.3': { m: "Upadłem na rękę.", f: "Upadłam na rękę.", x: 'Zdarzył mi się upadek na rękę.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.body.q': "Gdzie cię boli?", // nagelezen AI 22 nov
    'c.body.a': { m: "W plecach. Podniosłem ciężki karton.", f: "W plecach. Podniosłam ciężki karton.", x: 'W plecach. Od podnoszenia ciężkiego kartonu.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'l.jobends': "Kiedy kończy się twoja praca", // nagelezen AI 22 nov
    'w.eindafrekening': "rozliczenie końcowe (ostatnia wypłata, kiedy kończy się praca)", // nagelezen AI 22 nov
    'w.opzeggen': "wypowiedzieć (umowę), zrezygnować", // nagelezen AI 22 nov
    'w.uitschrijven': "wymeldować się (skreślić swoje nazwisko z listy)", // nagelezen AI 22 nov
    'w.sleutel': "klucz", // nagelezen AI 22 nov
    'w.verhuizen': "przeprowadzić się", // nagelezen AI 22 nov
    'w.busje': "bus (mały autobus)", // nagelezen AI 22 nov
    's.jobends.1': "Czy dostanę wypłatę dodatku urlopowego i niewykorzystanych dni wolnych?", // nagelezen AI 22 nov
    's.jobends.2': "Proszę o radę w Juridisch Loket.", // nagelezen AI 22 nov
    's.jobends.3': { m: "Sam załatwiam sobie nowe ubezpieczenie zdrowotne.", f: "Sama załatwiam sobie nowe ubezpieczenie zdrowotne.", x: 'Samodzielnie załatwiam sobie nowe ubezpieczenie zdrowotne.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.q': "Twoja praca kończy się w piątek. Wtedy musisz też wyprowadzić się z mieszkania.", // nagelezen AI 22 nov
    'c.jobends.a': "Jaki jest okres wypowiedzenia mojej umowy najmu?", // nagelezen AI 22 nov
    'c.details': "Twoje dane: podawaj je dobrze", // nagelezen AI 22 nov
    'c.details.b': "Na początku pracy podajesz swoje dane. To imię i nazwisko, adres, numer telefonu, data urodzenia i BSN. Przeliteruj swoje nazwisko powoli, litera po literze. Potem sprawdź swoje nazwisko w umowie i na pasku wypłaty. Błąd w nazwisku albo w BSN może sprawić problemy z wypłatą albo z podatkiem. Nowy adres albo numer telefonu? Powiedz pracodawcy.", // nagelezen AI 22 nov
    'c.details.p': "Przeliteruję: A, L, I.", // nagelezen AI 22 nov
    'c.details.s': "Przez telefon agencja zapisuje twoje nazwisko. Słyszysz, że zapisują je źle. Co robisz?", // nagelezen AI 22 nov
    'c.details.o1': "Powoli literujesz nazwisko i prosisz, żeby ci je przeczytali na głos.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': "Nic nie mówisz: mały błąd w nazwisku nie ma znaczenia.", // nagelezen AI 22 nov
    'c.details.o3': "Rozłączasz się i masz nadzieję, że później znajdą błąd.", // nagelezen AI 22 nov
    'c.details.w': "Twoje nazwisko musi być takie samo w umowie, na pasku wypłaty i w dowodzie tożsamości. Wtedy wypłata i podatek są dobrze rozliczone. Przeliterowanie i przeczytanie na głos to szybka kontrola.", // nagelezen AI 22 nov
    'c.dates': "Daty: najpierw dzień", // nagelezen AI 22 nov
    'c.dates.b': "Po niderlandzku dzień jest przed miesiącem: 3-6 to 3 czerwca, nie 6 marca. „Tot en met” znaczy, że ostatni dzień też się liczy. Dni i miesiące pisze się małą literą: maandag, juni. Nie znasz dokładnie daty? Zapytaj i powtórz ją.", // nagelezen AI 22 nov
    'c.dates.p': "Chodzi ci o 3 czerwca?", // nagelezen AI 22 nov
    'c.dates.s': "W twoim grafiku jest napisane: „Vrij: 3-6 tot en met 5-6”. Kiedy masz wolne?", // nagelezen AI 22 nov
    'c.dates.o1': "3, 4 i 5 czerwca.", // nagelezen AI 22 nov
    'c.dates.o2': "Tylko 3 i 4 czerwca.", // nagelezen AI 22 nov
    'c.dates.o3': "Od 6 marca do 6 maja.", // nagelezen AI 22 nov
    'c.dates.w': "Najpierw jest dzień, potem miesiąc: 3-6 to 3 czerwca. „Tot en met” znaczy, że 5 czerwca też się liczy, więc masz trzy dni wolnego.", // nagelezen AI 22 nov
    'c.permit': "Praca i integracja", // nagelezen AI 22 nov
    'c.permit.b': "Musisz przejść integrację obywatelską (inburgering)? Powiedz o tym pracodawcy i powiedz gminie (gemeente), że pracujesz. Wcześnie zapytaj, czy lekcje języka da się dopasować do twojego grafiku. Nie wiesz, czy możesz tu pracować? Sprawdź to, zanim zaczniesz, na przykład w IND, UWV albo VluchtelingenWerk. Każą ci zarejestrować się jako osoba samozatrudniona (zzp’er) do tej pracy? Najpierw poproś o radę. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.p': "We wtorek mam lekcję języka. Czy grafik może to uwzględnić?", // nagelezen AI 22 nov
    'c.permit.s': "Twoja lekcja języka jest we wtorek rano. Według nowego grafiku wtedy pracujesz. Co robisz?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': "Prosisz przełożonego o zmianę grafiku.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': "Opuszczasz lekcję: praca jest najważniejsza.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': "We wtorki zostajesz w domu i nic nie mówisz.", // nagelezen AI 22 nov
    'c.permit.w': "Integracja to też twój obowiązek. Wielu pracodawców pomaga, kiedy wcześnie o tym wiedzą. Gmina (gemeente) też może pomóc dopasować twój plan do pracy.", // nagelezen AI 22 nov
    'c.kids': "Twoje dziecko jest chore", // nagelezen AI 22 nov
    'c.kids.b': "Twoje dziecko nagle zachorowało? Od razu powiedz pracodawcy. Na pierwsze godziny albo dni możesz wziąć urlop w nagłej sytuacji (calamiteitenverlof), a pracodawca dalej ci płaci. Dziecko potrzebuje opieki dłużej? Wtedy możesz poprosić o urlop opiekuńczy (zorgverlof). Jesteś w ciąży? Pracodawca nie może cię z tego powodu zwolnić. Zapytaj na czas o urlop macierzyński i urlop rodzicielski (ouderschapsverlof). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nagelezen AI 22 nov
    'c.kids.p': "Moje dziecko jest chore. Czy mogę dziś wyjść wcześniej?", // nagelezen AI 22 nov
    'c.kids.s': "Żłobek (kinderopvang) dzwoni do ciebie do pracy. Twoje dziecko ma gorączkę i musi wrócić do domu. Co robisz?", // nagelezen AI 22 nov
    'c.kids.o1': "Mówisz przełożonemu i prosisz o urlop w nagłej sytuacji.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': "Wychodzisz bez słowa i wyjaśniasz to jutro.", // nagelezen AI 22 nov
    'c.kids.o3': "Zostajesz w pracy, a dziecko czeka do końca twojej zmiany.", // nagelezen AI 22 nov
    'c.kids.w': "Chore dziecko to nagła sytuacja w domu. Kiedy najpierw powiesz przełożonemu, może on zaplanować pracę. Urlop w nagłej sytuacji jest właśnie na takie chwile.", // nagelezen AI 22 nov
    'c.body': "Powiedz, co się stało i gdzie boli", // nagelezen AI 22 nov
    'c.body.b': "U lekarza powiedz, co się stało i gdzie boli. Na przykład: „Ik ben gevallen. Mijn arm doet pijn.” Powiedz też, od jak dawna cię boli. Nie musisz zgadywać, co ci jest: to sprawdzi lekarz. Stało się to w pracy? Powiedz przełożonemu tego samego dnia.", // nagelezen AI 22 nov
    'c.body.p': { m: "Upadłem. Boli mnie ręka.", f: "Upadłam. Boli mnie ręka.", x: 'Zdarzył mi się upadek. Boli mnie ręka.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.body.s': { m: "W pracy podniosłeś ciężkie pudło. Teraz bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?", f: "W pracy podniosłaś ciężkie pudło. Teraz bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?", x: 'W pracy trzeba było podnieść ciężkie pudło. Teraz bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.body.o1': { m: "Gdzie boli i co się stało: podniosłeś ciężkie pudło.", f: "Gdzie boli i co się stało: podniosłaś ciężkie pudło.", x: 'Gdzie boli i co się stało: podnoszenie ciężkiego pudła.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.body.o2': "Tylko że źle się czujesz, nic więcej.", // nagelezen AI 22 nov
    'c.body.o3': { m: "Nazwę choroby, którą znalazłeś w internecie.", f: "Nazwę choroby, którą znalazłaś w internecie.", x: 'Nazwę choroby znalezioną w internecie.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.body.w': "Kiedy mówisz, gdzie boli i co się stało, lekarz szybciej cię rozumie. Lekarz sprawdza, co to jest. Stało się to w pracy? Powiedz też przełożonemu.", // nagelezen AI 22 nov
    'c.jobends': "Kończy się praca: co jeszcze się kończy?", // nagelezen AI 22 nov
    'c.jobends.b': "Kiedy kończy się twoja praca, sprawdź rozliczenie końcowe (eindafrekening). Niewykorzystane dni wolne i dodatek urlopowy są zwykle wypłacane razem z nim. Mieszkanie, ubezpieczenie zdrowotne albo bus z agencji mogą skończyć się w tym samym czasie. Na czas załatw sobie własne ubezpieczenie zdrowotne. Umowa najmu ma swoje zasady: poproś o radę, zanim wyprowadzisz się z mieszkania. Przeprowadzasz się albo wyjeżdżasz z Holandii? Powiedz gminie (gemeente). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nagelezen AI 22 nov
    'c.jobends.p': "Kiedy dostanę rozliczenie końcowe?", // nagelezen AI 22 nov
    'c.jobends.s': "Twoja praca kończy się w piątek. Twoje ubezpieczenie zdrowotne jest przez agencję. Co robisz?", // nagelezen AI 22 nov
    'c.jobends.o1': "Pytasz, kiedy się kończy, i w porę załatwiasz własne.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': "Nic: ubezpieczenie trwa samo dalej.", // nagelezen AI 22 nov
    'c.jobends.o3': "Czekasz, aż zachorujesz, i wtedy to załatwiasz.", // nagelezen AI 22 nov
    'c.jobends.w': "Ubezpieczenie przez agencję często kończy się razem z pracą. Kiedy mieszkasz albo pracujesz w Holandii, zwykle musisz mieć ubezpieczenie zdrowotne. Jeśli załatwisz to na czas, nie zostaniesz bez ubezpieczenia.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "Kończenie pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workorder': "Zlecenie pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkbon': "zlecenie pracy (kartka albo aplikacja z twoim zadaniem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lezen': "czytać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aantal': "liczba (ile)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.materiaal': "materiały (to, czego potrzebujesz do pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klaarleggen': "przygotować (położyć to, czego potrzebujesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handtekening': "podpis", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.1': "Najpierw czytam zlecenie pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.2': "Czy ta liczba się zgadza?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.3': "Przygotowuję materiały.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workorder.q': "Wiesz, co masz zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workorder.a': "Prawie. Co znaczy to słowo w zleceniu?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.handover': "Gotowe czy jeszcze nie?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opruimen': "sprzątać, odkładać rzeczy na miejsce", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nakijken': "sprawdzić (jeszcze raz obejrzeć pracę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afmelden': "zgłosić koniec pracy (powiedzieć, że praca jest skończona, i wyjść)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapot': "zepsuty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opslot': "zamknięty na klucz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderheid': "drzwi", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.1': "Sprzątam swoje miejsce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.2': "Czy może pan/pani sprawdzić moją pracę?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.handover.3': "Zgłaszam przełożonemu koniec pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.q': "Wszystko gotowe?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.a': "Prawie. Pokój numer cztery był zamknięty na klucz.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.tech': "W warsztacie", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workshop': "Narzędzia w warsztacie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschap': "narzędzia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zagen': "piłować", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slijpen': "szlifować (wygładzać albo ciąć metal maszyną)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vonk': "iskra", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gehoorbescherming': "ochronniki słuchu (na uszy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lawaai': "hałas (dużo głośnego dźwięku)", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.1': "Gdzie są narzędzia?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.2': "Przy szlifowaniu noszę ochronniki słuchu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.3': "Uwaga na iskry!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.q': "Dlaczego nosisz okulary?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.a': "Przy piłowaniu kawałki mogą wpaść mi do oka.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.power': "Najpierw wyłącz prąd", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stroom': "prąd, elektryczność", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabel': "kabel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stekker': "wtyczka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderspanning': "pod napięciem (jest na tym prąd)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningsloos': "bez napięcia, bezpieczny (nie ma na tym prądu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektricien': "elektryk", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.1': "Czy tu jeszcze jest prąd?", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.2': "Ten kabel jest zepsuty.", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.3': "Czekam, aż nie będzie napięcia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.q': "Możesz wymienić tę lampę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.a': "Czy prąd jest wyłączony? Jeśli nie, poczekam na elektryka.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.garage': "W warsztacie samochodowym", // nieuw, nalezen // nagelezen AI 28 nov
    'l.garage': "Opony, olej i podnośnik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.band': "opona", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olie': "olej", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accu': "akumulator (w samochodzie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monteur': "mechanik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hefbrug': "podnośnik samochodowy (podnosi auto do góry)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lek': "przebity, cieknący (ucieka powietrze albo woda)", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.1': "Opona jest przebita.", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.2': "Gdzie stoi nowy olej?", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.3': "Samochód stoi na podnośniku.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.q': "Możesz zmienić opony w tym samochodzie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.a': "Tak. Gdzie leżą opony zimowe?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.carjob': "Klient decyduje", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefrit': "jazda próbna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijbewijs': "prawo jazdy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.akkoord': "zgoda, w porządku (mówisz na to „tak”)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kosten': "koszty (to, co trzeba zapłacić)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.repareren': "naprawiać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdeel': "część (samochodu albo maszyny)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.1': "Czy klient zgadza się na koszty?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.2': "Ta część jest zepsuta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.3': "Czy mogę zrobić jazdę próbną?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carjob.q': "Hamulce też są w złym stanie. Zrobisz je od razu?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.carjob.a': "Najpierw zapytam szefa. Klient musi się zgodzić.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.stage': "Praktyka zawodowa", // nieuw, nalezen // nagelezen AI 28 nov
    'l.placement': "Twoja praktyka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stage': "praktyka zawodowa (uczysz się w firmie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.praktijkopleider': "opiekun praktyki w firmie (prowadzi cię w firmie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagebegeleider': "opiekun praktyki ze szkoły (prowadzi cię ze szkoły)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pok': "umowa o praktykę (podpisujesz ją ty, szkoła i firma)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.school': "szkoła", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerbedrijf': "firma szkoląca (firma, w której uczniowie mogą się uczyć)", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.1': "Mam praktykę w magazynie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.2': "Kto jest moim opiekunem praktyki w firmie?", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.3': { m: "Jeszcze nie podpisałem umowy o praktykę.", f: "Jeszcze nie podpisałam umowy o praktykę.", x: "Moja umowa o praktykę nie jest jeszcze podpisana." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.q': "Kiedy zaczynasz praktykę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.a': "W poniedziałek. Najpierw podpisujemy umowę o praktykę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.review': "Informacja zwrotna na praktyce", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beoordeling': "ocena (jak dobrze to robisz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerdoel': "cel nauki (czego chcesz się nauczyć)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorbeeld': "przykład", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portfolio': "portfolio (teczka z twoją pracą i dowodami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cijfer': "ocena, stopień", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslag': "sprawozdanie (tekst o twojej pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.1': "Co mogę robić lepiej?", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.2': "Czy może pan/pani podać przykład?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.review.3': "Moja ocena jest w przyszłym tygodniu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.q': "Musisz pracować szybciej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.a': "Dobrze. Czy może pan/pani pokazać, jak zrobić to szybciej?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'u.society': "Udział w życiu Holandii", // nieuw, nalezen // nagelezen AI 28 nov
    'l.council': "Gmina i głosowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stemmen': "głosować", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkiezing': "wybory", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gemeenteraad': "rada gminy (decyduje o twojej miejscowości)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parlement': "parlament (tworzy prawo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempas': "karta uprawniająca do głosowania (potrzebna, żeby głosować)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.burgemeester': "burmistrz", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.1': "Czy mogę głosować?", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.2': "Moja karta uprawniająca do głosowania przyszła pocztą.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.council.3': "Rada gminy decyduje o mojej okolicy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.q': "Idziesz w środę głosować?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.a': "Tak. Mam kartę uprawniającą do głosowania i dowód tożsamości.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'l.police': "Policja i twoje prawa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agent': "policjant", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boete': "mandat, kara (pieniądze, które musisz zapłacić za karę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezwaar': "sprzeciw (piszesz, że się nie zgadzasz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechter': "sędzia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advocaat': "adwokat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wet': "prawo, ustawa", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.1': { m: "Dostałem mandat.", f: "Dostałam mandat.", x: "Mam mandat." }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.police.2': "Chcę złożyć sprzeciw.", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.3': "Chcę porozmawiać z adwokatem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.police.q': "Czy mogę zobaczyć pana/pani dokument tożsamości?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.police.a': "Tak, proszę. Co się dzieje?", // nieuw, nalezen // nagelezen AI 28 nov
    'u.online': "Online w pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'l.login': "Logowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitloggen': "wylogować się", // nieuw, nalezen // nagelezen AI 28 nov
    'w.account': "konto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherm': "ekran", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergrendelen': "zablokować (ekran albo telefon)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebruikersnaam': "nazwa użytkownika", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlogcode': "kod logowania (kod z SMS-a albo z aplikacji)", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.1': "Nie pamiętam hasła.", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.2': "Zawsze się wylogowuję.", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.3': "Nikomu nie daję mojego DigiD.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.q': "Możesz się zalogować?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.a': "Nie, moje hasło nie działa.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.phish': "Fałszywe maile", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzender': "nadawca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klikken': "kliknąć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijlage': "załącznik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdacht': "podejrzany", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ictafdeling': "dział IT", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijzigen': "zmienić", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.1': "Ten mail jest podejrzany.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.2': "Nie otwieram załącznika.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.3': "Od razu zmieniam hasło.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phish.q': { m: "Kliknąłeś w link?", f: "Kliknęłaś w link?", x: "Czy link został kliknięty?" }, // nieuw, nalezen // nagelezen AI 31 okt
    'c.phish.a': "Tak. Dzwonię do działu IT.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mychoice': "Co mi dobrze wychodzi", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.goedin': "dobry w (czymś)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiezen': "wybierać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beroep': "zawód, rodzaj pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijbaan': "praca dorywcza (dorywcza praca w czasie nauki)", // nieuw, nalezen // nagelezen AI ronde 3
    'w.nauwkeurig': "dokładny i staranny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meeloopdag': "dzień obserwacji (dzień, w którym towarzyszysz komuś w pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.1': "Umiem dobrze pracować rękami.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.2': "Lubię pracować z ludźmi.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.3': "Czy mogę przez jeden dzień wam towarzyszyć, żeby zobaczyć pracę?", // nieuw, nalezen // nagelezen AI 31 okt
    'c.mychoice.q': { m: "W czym jesteś dobry?", f: "W czym jesteś dobra?", x: "Co ci dobrze wychodzi?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mychoice.a': "Umiem dobrze opiekować się ludźmi. W domu opiekuję się mamą.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nextstep': "Po Entree", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau2': "poziom 2 (następny poziom mbo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startkwalificatie': "kwalifikacja podstawowa (dyplom mbo na poziomie 2 albo wyższym)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bbl': "bbl (pracujesz w firmie i chodzisz do szkoły mniej więcej jeden dzień w tygodniu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorstromen': "iść dalej (na wyższy poziom)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmelden': "zapisać się (do szkoły albo na kurs)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendag': "dzień otwarty (możesz odwiedzić szkołę)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.1': "Po Entree chcę iść na poziom 2.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.2': "Chcę jednocześnie pracować i się uczyć.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.3': "Kiedy jest dzień otwarty?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.q': "Co będziesz robić po Entree?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.a': "Chcę iść do bbl. Wtedy pracuję i się uczę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.email': "Pisanie do pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mail': "mail, e-mail", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderwerp': "temat (maila)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beste': "szanowny, drogi (na początku listu albo maila)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beleefd': "uprzejmy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nalezen': "przeczytać jeszcze raz (sprawdzić przed wysłaniem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.versturen': "wysłać", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.1': "Co wpisuję w temacie?", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.2': "Czytam mojego maila jeszcze raz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.3': "Wyślę maila jutro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.email.q': { m: "Wysłałeś maila o wolnym dniu?", f: "Wysłałaś maila o wolnym dniu?", x: "Mail o wolnym dniu już poszedł?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.email.a': "Jeszcze nie. Najpierw go jeszcze raz czytam.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.budget': "Twoje pieniądze co miesiąc", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastelasten': "stałe opłaty (czynsz, ubezpieczenie, telefon: co miesiąc)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sparen': "oszczędzać (pieniądze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.abonnement': "abonament (płacisz za niego co miesiąc)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterafbetalen': "zapłacić później (kup teraz, zapłać później)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedenktijd': "czas do namysłu (czas, żeby zmienić zdanie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garantie': "gwarancja (musi działać, inaczej to naprawią)", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.1': "Najpierw płacę stałe opłaty.", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.2': "Co miesiąc trochę oszczędzam.", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.3': "Rezygnuję z tego abonamentu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.q': "Kup ten telefon teraz i zapłać później!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.a': "Nie, dziękuję. Płacenie później to też dług.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.healthy': "W formie do pracy", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "spać", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "śniadanie", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "ruszać się, być aktywnym", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "zmęczony", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "narkotyki", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "przygnębiony (długo smutny)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': { m: "Jestem dziś bardzo zmęczony.", f: "Jestem dziś bardzo zmęczona.", x: "Mam dziś bardzo mało sił." }, // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.2': "Zawsze najpierw jem śniadanie.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "W przerwie idę na krótki spacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': "Chcesz tabletkę? Wtedy nie zaśniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': "Nie, dziękuję. Nie pracuję pod wpływem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': "Najpierw przeczytaj, potem zacznij", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Zanim zaczniesz, przeczytaj zlecenie pracy (werkbon) albo zadanie w aplikacji. Sprawdź adres, zadanie i liczbę rzeczy. Coś jest niejasne? Zapytaj, zanim zaczniesz, a nie w połowie. Potem przygotuj narzędzia i materiały. To oszczędza czas i robisz mniej błędów. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "W zleceniu jest dziesięć kartonów. Czy to się zgadza?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "W zleceniu jest napisane: pomaluj pokój 3. Kolega mówi, że to pokój 5. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Pytasz przełożonego, który pokój jest dobry.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "Malujesz pokój 3, bo tak jest w zleceniu pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "Malujesz oba pokoje, wtedy masz pewność.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "Kiedy dwie rzeczy się nie zgadzają, sprawdzasz to przed rozpoczęciem. Krótkie pytanie zajmuje mniej czasu niż robienie pracy od nowa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Powiedz, co jest gotowe, a co nie", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "Praca nie jest skończona, kiedy przestajesz. Najpierw posprzątaj swoje miejsce i narzędzia. Potem poproś kogoś, żeby sprawdził twoją pracę. Powiedz przełożonemu, co jest gotowe, a co nie. Coś poszło źle albo coś jest zepsute? Powiedz to teraz, nie jutro. Zgłoszenie końca pracy to też część twojej pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.p': "Pokój numer cztery nie jest jeszcze gotowy. Drzwi były zamknięte na klucz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': { m: "Posprzątałeś pięć pokoi. Pokój 4 był zamknięty. Kończy się twoja zmiana. Co robisz?", f: "Posprzątałaś pięć pokoi. Pokój 4 był zamknięty. Kończy się twoja zmiana. Co robisz?", x: "Pięć pokoi jest posprzątanych. Pokój 4 był zamknięty. Kończy się twoja zmiana. Co robisz?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "Mówisz przełożonemu, że pokój 4 nie jest gotowy.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "Idziesz do domu: pokój 4 był zamknięty, to nie twoja wina.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o3': "Piszesz na liście „wszystko gotowe”.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "Przełożony planuje pracę. Kiedy wie, że pokój 4 nie jest gotowy, może wysłać kogoś innego. Wtedy żaden klient nie zastanie brudnego pokoju.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Oczy, uszy i ogień", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Szlifowanie, piłowanie i wiercenie dają iskry, małe kawałki i dużo hałasu. Noś okulary ochronne i ochronniki słuchu, także przy krótkiej pracy. Kiedy jest bardzo głośno, pracodawca musi dać ci ochronniki słuchu. Iskry mogą wywołać pożar. Przy spawaniu albo szlifowaniu obok rzeczy, które mogą się palić, są dodatkowe zasady (heet werk): zapytaj, zanim zaczniesz. Po pracy posprzątaj kawałki metalu. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "Będę szlifować. Gdzie są ochronniki słuchu?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Musisz zeszlifować jeden mały kawałek metalu. To zajmie minutę. Twoje okulary ochronne są w innym pomieszczeniu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Najpierw idziesz po okulary, nawet jeśli to tylko minuta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Szlifujesz z przymrużonymi oczami, to szybko.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Trzymasz drugą rękę przed oczami.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "Iskra albo kawałek metalu w oku może uszkodzić oko na zawsze. To może się stać w jednej sekundzie. Okulary ochronne pomagają, także przy krótkiej pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "Prąd: nigdy tak po prostu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': "Nigdy nie pracuj przy czymś, co jest pod napięciem (onder spanning). Najpierw przeszkolony kolega to zabezpiecza: wyłącza prąd i to sprawdza. Tylko osoby z odpowiednim przeszkoleniem mogą to robić. Widzisz zepsuty kabel albo wtyczkę? Nie używaj ich i od razu powiedz przełożonemu. Nie wiesz, czy prąd jest wyłączony? To znaczy, że jest włączony. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Widzę zepsuty kabel. Kto może na to spojrzeć?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Musisz powiesić lampę. Kolega mówi: „Prąd jest wyłączony, chyba”. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Prosisz przeszkolonego kolegę, żeby sprawdził, czy prąd jest wyłączony.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Zaczynasz, ale zakładasz grube rękawice, kiedy dotykasz przewodów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Włączasz i wyłączasz światło, żeby sprawdzić, czy prąd jest wyłączony.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "„Chyba” to za mało przy prądzie. Porażenie prądem może zabić. Przeszkolony kolega sprawdza, czy nie ma prądu, i wtedy możesz zacząć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "Bezpiecznie pod samochodem", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Nigdy nie wchodź pod samochód, który stoi tylko na lewarku. Samochód musi stać stabilnie na podnośniku albo na podporach. Przez rozlany olej podłoga robi się śliska: od razu go sprzątnij. Stary olej, akumulatory i środki czyszczące to niebezpieczne odpady. Idą w specjalne miejsce, nigdy do zwykłego kosza ani do kanalizacji. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "Na podłodze jest olej. Sprzątam go.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Musisz zajrzeć pod samochód stojący tylko na lewarku. Kolega mówi: „Nic się nie stanie, rób szybko”. Co robisz?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "Czekasz na podnośnik albo na podpory.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "Szybko wchodzisz pod spód, nogi na zewnątrz.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "Prosisz kolegę, żeby trzymał auto.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "Lewarek może się ześlizgnąć. Samochód jest bardzo ciężki, a spod niego nie uciekniesz szybko. Podpory albo podnośnik trzymają samochód na miejscu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "Dodatkowa praca? Najpierw zapytaj klienta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': { m: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłeś i jakich części użyłeś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", f: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłaś i jakich części użyłaś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", x: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz wykonaną pracę i użyte części. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.carjob.p': "Widzę jeszcze jeden problem. Kto dzwoni do klienta?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Wymieniasz olej w samochodzie. Hamulce też są w złym stanie. Ma być gotowy za godzinę. Co robisz?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Mówisz przełożonemu, żeby zadzwonił do klienta.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o2': "Naprawiasz też hamulce, dla bezpieczeństwa.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "Nic nie mówisz: nie ma ich w zleceniu.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "Klient płaci, więc klient decyduje. Bez jego zgody warsztat nie może tak po prostu robić dodatkowej pracy. Hamulce w złym stanie są niebezpieczne, więc trzeba o nich powiedzieć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Najpierw podpisz, potem zacznij", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': "W Entree dużo uczysz się w firmie: to twoja praktyka (stage albo bpv). Zanim zaczniesz, ty, szkoła i firma podpisujecie umowę: POK. W firmie pomaga ci opiekun praktyki (praktijkopleider). W szkole pomaga ci opiekun praktyki ze szkoły (stagebegeleider). Chorujesz? Zadzwoń do firmy przed godziną rozpoczęcia i powiedz też szkole. Zasady są różne w każdej szkole: zapytaj opiekuna praktyki ze szkoły.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Zaczynam dopiero, kiedy umowa o praktykę jest podpisana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': { m: "Firma prosi, żebyś zaczął jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?", f: "Firma prosi, żebyś zaczęła jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?", x: "Firma prosi o rozpoczęcie jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.placement.o1': "Prosisz opiekuna ze szkoły, żeby najpierw załatwił POK.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Zaczynasz jutro, a POK podpisujesz, kiedy będziesz mieć czas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Zaczynasz, ale na razie nic nie mówisz szkole.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "W POK jest napisane, czego się uczysz i kto ci pomaga. Bez podpisanej POK twoja praktyka może się nie liczyć do dyplomu. Dlatego podpisujesz ją, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Proś o informację zwrotną i o przykład", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': { m: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Sam też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole.", f: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Sama też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole.", x: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Z własnej inicjatywy też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.review.p': "Co poszło dobrze, a co może być lepiej?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "Opiekun praktyki mówi: „Musisz pracować staranniej”. Nie wiesz, o co mu chodzi. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Prosisz o przykład, co masz robić inaczej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': { m: "Mówisz „tak” i masz nadzieję, że sam zrozumiesz.", f: "Mówisz „tak” i masz nadzieję, że sama zrozumiesz.", x: "Mówisz „tak” i masz nadzieję, że zrozumiesz bez pomocy." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.review.o3': "Od teraz pracujesz dużo wolniej, żeby nic nie poszło źle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Z przykładem wiesz, co zmienić. Pytanie pokazuje, że chcesz się uczyć. Opiekunowie to lubią.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "Kto może głosować?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "W Holandii przez głosowanie wybierasz, kto decyduje. Rada gminy (gemeenteraad) decyduje o twojej miejscowości. Tweede Kamer tworzy prawo dla całego kraju. Z obywatelstwem holenderskim możesz głosować we wszystkich wyborach, od 18 lat. Na radę gminy może głosować więcej osób. Ludzie z innego kraju UE, którzy tu mieszkają, mogą głosować. Ludzie spoza UE mogą głosować po 5 latach legalnego pobytu. Gmina wysyła ci kartę do głosowania (stempas). Zabierz ją z dokumentem tożsamości. Nie wiesz, czy możesz głosować? Zapytaj w gminie.", // nagelezen AI 22 nov
    'c.council.p': "Czy mogę głosować na radę gminy?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Pochodzisz z Maroka i od sześciu lat legalnie tu mieszkasz, bez obywatelstwa holenderskiego. Co jest prawdą?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "Możesz głosować na radę gminy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "Możesz głosować też do Tweede Kamer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Bez holenderskiego paszportu nie możesz głosować.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "Po 5 latach legalnego pobytu możesz głosować na radę gminy. Do Tweede Kamer potrzebujesz obywatelstwa holenderskiego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "Twój dokument i twoje prawa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': "Od 14 lat musisz pokazać dokument tożsamości, kiedy prosi o to policja. Dlatego zawsze miej go przy sobie. Przyszedł do ciebie list, na przykład z gminy albo z UWV? Nie zgadzasz się z decyzją w tym liście? Wtedy możesz na piśmie złożyć sprzeciw (bezwaar maken). Zrób to przed datą z listu. Policja i sędzia muszą traktować wszystkich jednakowo. Policja cię zatrzymała? Możesz poprosić o adwokata. Juridisch Loket daje darmowe porady.", // nagelezen AI 22 nov
    'c.police.p': "Nie zgadzam się z tą decyzją. Składam sprzeciw.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Dostajesz list z gminy. Nie zgadzasz się z ich decyzją. W liście jest napisane, że masz sześć tygodni. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Piszesz list ze sprzeciwem, przed tą datą.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Dzwonisz do nich raz i czekasz, aż do ciebie oddzwonią.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Czekasz: po sześciu tygodniach samo się skończy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "Sprzeciw składasz na piśmie, przed datą z listu. Po tej dacie często jest za późno. Juridisch Loket może pomóc ci go napisać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login': "Twoje logowanie jest tylko twoje", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "Twoje hasło i twoje DigiD są tylko dla ciebie. Nie dawaj ich nikomu, także pracodawcy ani koledze. Na wspólnym komputerze zawsze się wyloguj, kiedy skończysz. Odchodzisz na chwilę? Zablokuj ekran. Nie pamiętasz hasła? Poproś dział IT (ICT-afdeling) o nowe. Zasady korzystania z komputerów są różne w każdej firmie: zapytaj dział IT, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Odchodzę na chwilę. Blokuję ekran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "Przełożony prosi o twoje DigiD i hasło, żeby szybko załatwić twoje papiery. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': { m: "Odmawiasz i logujesz się sam, a on pomaga.", f: "Odmawiasz i logujesz się sama, a on pomaga.", x: "Odmawiasz i logujesz się samodzielnie, a on pomaga." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.login.o2': "Dajesz je ten jeden raz, bo to twój szef.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Piszesz je na kartce, żeby mógł ich użyć później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': { m: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sam i pozwolić komuś pomóc.", f: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sama i pozwolić komuś pomóc.", x: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się samodzielnie i pozwolić komuś pomóc." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.phish': "Pośpiech i przycisk? Nie klikaj", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': { m: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działał szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Sam wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknąłeś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działała szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Sama wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknęłaś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce szybkiej reakcji: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Samodzielnie wejdź na prawdziwą stronę albo do aplikacji. Link już kliknięty? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.phish.p': { m: "Kliknąłem w podejrzany link.", f: "Kliknęłam w podejrzany link.", x: "Zdarzyło mi się kliknąć w podejrzany link." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.phish.s': { m: "Kliknąłeś w link w mailu i wpisałeś hasło. Potem widzisz, że mail był fałszywy. Co robisz?", f: "Kliknęłaś w link w mailu i wpisałaś hasło. Potem widzisz, że mail był fałszywy. Co robisz?", x: "Zdarzyło ci się kliknąć w link w mailu i wpisać hasło. Potem widzisz, że mail był fałszywy. Co robisz?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.phish.o1': "Zmieniasz hasło i dzwonisz do działu IT.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Usuwasz maila, żeby nikt inny w niego nie kliknął.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Czekasz dzień, żeby zobaczyć, czy coś pójdzie źle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Z twoim hasłem ktoś inny może wejść do systemów twojej pracy. Kiedy szybko je zmienisz i powiesz działowi IT, mogą to w porę zatrzymać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Twoje mocne strony się liczą", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': { m: "W czym jesteś dobry? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać.", f: "W czym jesteś dobra? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać.", x: "Co ci dobrze wychodzi? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.mychoice.p': "Umiem dobrze dogadywać się z ludźmi. W domu dużo pomagam.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': { m: "W szkole pytają: „W czym jesteś dobry?”. Nigdy nie miałeś płatnej pracy. Co mówisz?", f: "W szkole pytają: „W czym jesteś dobra?”. Nigdy nie miałaś płatnej pracy. Co mówisz?", x: "W szkole pytają: „Co ci dobrze wychodzi?”. Nie masz doświadczenia w płatnej pracy. Co mówisz?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.mychoice.o1': "Co dobrze robisz w domu, na przykład opiekę nad innymi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': { m: "Że jeszcze nie wiesz, bo nigdy nie miałeś pracy.", f: "Że jeszcze nie wiesz, bo nigdy nie miałaś pracy.", x: "Że jeszcze nie wiesz, bo nie masz doświadczenia w pracy." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.mychoice.o3': "Że umiesz robić każdą pracę, wszystko.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "Umiejętności z domu też się liczą. Opieka, planowanie i pomaganie to umiejętności, których potrzebują pracodawcy. Powiedz, co robisz, z przykładem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "Po Entree: poziom 2 albo praca", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Z dyplomem Entree możesz iść dalej na poziom 2 mbo. Dyplom na poziomie 2 albo wyższym to kwalifikacja podstawowa (startkwalificatie). Pomaga znaleźć pracę i ją utrzymać. W bbl pracujesz w firmie i chodzisz do szkoły mniej więcej jeden dzień w tygodniu. Do tego potrzebujesz pracy albo miejsca do nauki i pracy (leerwerkbaan). Idź na dzień otwarty i porozmawiaj z opiekunem w szkole.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "Czy po Entree mogę iść na poziom 2?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Masz dyplom Entree. Firma proponuje ci pracę bez nauki. Ty też chcesz dalej się uczyć. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Pytasz firmę, czy możliwe jest miejsce w bbl.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "Bierzesz pracę i na zawsze przestajesz się uczyć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Zostajesz w domu, aż zadzwoni jakaś szkoła.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "W bbl jednocześnie pracujesz i się uczysz. Zarabiasz pieniądze i dostajesz dyplom poziomu 2. Wiele firm to lubi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Krótki mail: kto, co, kiedy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "Mail do pracy jest krótki i uprzejmy. Zacznij od powitania, na przykład „Beste Karin,”. Potem napisz, czego chcesz i kiedy. Zakończ pozdrowieniem i swoim imieniem i nazwiskiem. Napisz krótki temat, na przykład „Vrij op vrijdag”. Przeczytaj maila jeszcze raz, zanim go wyślesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Droga Karin, czy mogę mieć wolny piątek? Pozdrawiam, Ali Haddad", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': "Chcesz mieć wolny przyszły piątek. Który mail do przełożonego jest najlepszy?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "„Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "„Vrijdag ben ik er niet.” (bez powitania i bez imienia).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Długi mail o twoim tygodniu, z pytaniem na końcu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "Dobry mail ma powitanie, jedno jasne pytanie i twoje imię. Wtedy przełożony może szybko odpowiedzieć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "Najpierw stałe opłaty", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': { m: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Kupiłeś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji.", f: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Kupiłaś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji.", x: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Zakup przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.budget.p': "Wolę zapłacić teraz. Wtedy nie mam długu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Dziś dostajesz wypłatę. Chcesz nowe buty, a czynsz nie jest jeszcze zapłacony. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Najpierw płacisz czynsz, potem patrzysz, co zostało.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Kupujesz buty, a czynsz płacisz później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Kupujesz buty z opcją „kup teraz, zapłać później”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "Czynsz, ubezpieczenie i telefon wracają co miesiąc. Kiedy płacisz je najpierw, wiesz, ile pieniędzy zostało. Wtedy nie masz długów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Sen, jedzenie i żadnych narkotyków", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': { m: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiony albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy.", f: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiona albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy.", x: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna dokucza ci przygnębienie albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.healthy.p': { m: "Od dawna czuję się przygnębiony. Czy mogę się umówić na wizytę?", f: "Od dawna czuję się przygnębiona. Czy mogę się umówić na wizytę?", x: "Od dawna dokucza mi przygnębienie. Czy mogę się umówić na wizytę?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.healthy.s': { m: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnął. Co robisz?", f: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnęła. Co robisz?", x: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, która ma nie dać ci zasnąć. Co robisz?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.healthy.o1': "Odmawiasz i śpisz kilka godzin przed zmianą.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Bierzesz pół tabletki, to nie jest niebezpieczne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Bierzesz ją, ale nikomu w pracy nie mówisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Tabletki od kolegi mogą być narkotykami. Mogą zaszkodzić twojemu zdrowiu albo sprawić, że popełnisz błędy w pracy. Wyspanie się to bezpieczny sposób, żeby nie zasypiać w pracy.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    // Vertaalronde 5 november 2026: u.sick (l.backtowork), l.feelwell, l.food, u.delivery (l.parcel, l.road).
    'u.sick': "Choroba", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Powrót do pracy po chorobie", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "stopniowo zwiększać (powoli, krok po kroku)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "praca po pół dnia (pracujesz tylko część dnia)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "lekka praca (nie ciężka)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "ciężka praca", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "wracać do zdrowia, wyzdrowieć", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "witaj z powrotem", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Na początek pracuję po pół dnia.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Mogę już wykonywać lekką pracę. Ciężkiej jeszcze nie.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "Lekarz zakładowy mówi: zwiększaj obciążenie powoli.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': "Witaj z powrotem! Czujesz się lepiej?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Tak, jest już lepiej. Na razie robię wszystko powoli.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Wracasz krok po kroku", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "Czujesz się lepiej? Powiedz pracodawcy, że znowu możesz pracować (betermelden). Po dłuższej chorobie często zaczynasz krok po kroku: najpierw mniej godzin albo lżejsza praca. Lekarz zakładowy (bedrijfsarts) doradza, co możesz robić. Chorujesz dłuższy czas? Wtedy ty i pracodawca razem robicie plan twojego powrotu. Tak mówi prawo (Wet verbetering poortwachter). Mów jasno, co możesz robić, a czego jeszcze nie. Nie musisz mówić kolegom, jaka to była choroba. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "To już mogę robić. Tego jeszcze nie mogę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': { m: "Byłeś chory przez trzy tygodnie. Pierwszego dnia po powrocie przełożony prosi cię o podnoszenie ciężkich pudeł. Lekarz zakładowy powiedział: na razie tylko lekka praca. Co robisz?", f: "Byłaś chora przez trzy tygodnie. Pierwszego dnia po powrocie przełożony prosi cię o podnoszenie ciężkich pudeł. Lekarz zakładowy powiedział: na razie tylko lekka praca. Co robisz?", x: "Twoja choroba trwała trzy tygodnie. Pierwszego dnia po powrocie przełożony prosi cię o podnoszenie ciężkich pudeł. Lekarz zakładowy powiedział: na razie tylko lekka praca. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Spokojnie mówisz, że teraz możesz wykonywać lekką pracę, i czego jeszcze nie możesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "I tak podnosisz pudła: nie chcesz robić problemów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Idziesz do domu bez słowa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Przełożony chce mieć cię z powrotem, i to w zdrowiu. Kiedy jasno mówisz, co możesz robić, może zaplanować pracę. Zbyt duży wysiłek zbyt wcześnie może sprawić, że znowu zachorujesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "Dobre samopoczucie w pracy", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "presja w pracy (za dużo pracy w za krótkim czasie)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "leżeć bez snu (nie możesz zasnąć)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "praca zmianowa (na zmianę ranne, popołudniowe i nocne zmiany)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "tęsknota za domem (tęsknisz za domem)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "rodzina", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "sam, samotnie", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Źle śpię przez pracę zmianową.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': "To za dużo. Nie dam sobie rady w pojedynkę.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "Tęsknię za domem. Moja rodzina jest daleko.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "Wszystko u ciebie w porządku?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "Nie bardzo. Często nie mogę zasnąć w nocy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': "Za dużo? Nie musisz radzić sobie w pojedynkę", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Każdy czasem czuje się zmęczony, zestresowany albo smutny. Za dużo pracy (werkdruk), zły sen przez pracę zmianową albo tęsknota za rodziną mogą sprawić, że jest ciężko. Nie musisz dźwigać tego w pojedynkę, a powiedzieć „to za dużo” to nie słabość. Porozmawiaj z kimś, komu ufasz. Na przykład z przełożonym, z lekarzem zakładowym (bedrijfsarts) albo ze swoim lekarzem rodzinnym (huisarts). Albo z osobą zaufania (vertrouwenspersoon), jeśli jest w twojej firmie. Możesz też z własnej inicjatywy poprosić o rozmowę z lekarzem zakładowym. Lekarze nie przekazują szefowi tego, co im mówisz. Myślisz o samobójstwie albo martwisz się o kogoś? Zadzwoń pod 113 (bezpłatnie, w dzień i w nocy) albo napisz na czacie na 113.nl.", // nagelezen AI 22 nov
    'c.feelwell.p': "Nie czuję się najlepiej. Czy mogę chwilę z tobą porozmawiać?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': { m: "Od tygodni źle śpisz, a pracy jest za dużo. Czujesz się bardzo zmęczony. Co robisz?", f: "Od tygodni źle śpisz, a pracy jest za dużo. Czujesz się bardzo zmęczona. Co robisz?", x: "Od tygodni źle śpisz, a pracy jest za dużo. Bardzo brakuje ci sił. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "Mówisz o tym przełożonemu albo lekarzowi zakładowemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "Nic nie mówisz i pracujesz ciężej i szybciej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Zostajesz w domu i nikomu nie mówisz dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Powiedzieć o tym wcześnie to nie słabość. Wtedy razem możecie szukać wyjścia, na przykład innych zmian. Nie musisz radzić sobie z tym w pojedynkę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Praca z żywnością", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mes': "nóż", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijhandschoen': "rękawica antyprzecięciowa (chroni przed przecięciem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vriescel': "mroźnia (bardzo zimne pomieszczenie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sieraden': "biżuteria (pierścionek, zegarek, kolczyki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pleister': "plaster (na małe skaleczenie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vlees': "mięso", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.1': "Zdejmuję biżuterię.", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.2': "Gdzie są rękawice antyprzecięciowe?", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.3': "W mroźni noszę ciepłą kurtkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.q': "Dlaczego teraz czyścimy linię?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.a': "Następny będzie produkt bez orzechów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food': "Czyste ręce, bezpieczna żywność", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Przy pracy z żywnością obowiązują surowe zasady higieny: siateczka na włosy, czyste ubranie robocze, umyte ręce i żadnej biżuterii. Te zasady są takie same dla wszystkich. Nie mówią nic o tobie: chronią żywność dla ludzi, którzy ją jedzą. Przy pracy z nożem zawsze noś rękawicę antyprzecięciową. W chłodni albo w mroźni noś ciepłe ubranie, które dostajesz, i rozgrzewaj się w przerwie. Chorujesz albo masz ranę na ręce? Zgłoś to, zanim zaczniesz pracę. Wtedy możesz dostać specjalny plaster albo na jakiś czas inną pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Mam małe skaleczenie na ręce. Czy mogę dostać plaster?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': { m: "W domu lekko zaciąłeś się w palec. Dziś pracujesz z mięsem. Co robisz?", f: "W domu lekko zacięłaś się w palec. Dziś pracujesz z mięsem. Co robisz?", x: "Masz na palcu małe skaleczenie z domu. Dziś pracujesz z mięsem. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Mówisz przełożonemu i prosisz o plaster.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Nic nie mówisz: to tylko małe skaleczenie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Zakładasz na to rękawicę, żeby nikt nie zobaczył.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Mała rana może wnieść zarazki do żywności. Kiedy to zgłaszasz, możesz dostać specjalny plaster albo na jakiś czas inną pracę. Zgłoszenie to normalna rzecz: nikt nie będzie cię za to winić.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transport i dostawy", // nieuw, nalezen // nagelezen AI 28 nov
    'l.parcel': "Doręczanie paczek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pakket': "paczka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestelbus': "samochód dostawczy (bus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezorgen': "doręczać (zanieść do klienta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inladen': "załadować (włożyć rzeczy do busa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbellen': "zadzwonić do drzwi", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewijs': "dowód (coś, co pokazuje, co się stało)", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.1': "Skanuję każdą paczkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.2': "Klienta nie ma w domu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.3': "Czy może pan/pani przyjąć paczkę dla sąsiadów?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.q': "Czy ta paczka jest dla mnie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.a': "Tak. Proszę tu podpisać.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.road': "Bezpiecznie i uczciwie na drodze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijden': "jeździć, prowadzić (samochód)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaar': "ciężki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekwagen': "wózek ręczny (dwukołowy wózek na ciężkie paczki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.route': "trasa (droga, którą jedziesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loondienst': "na etacie (pracujesz dla szefa i dostajesz pensję)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bepalen': "decydować (mówić, jak trzeba to zrobić)", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.1': "Ta paczka jest za ciężka. Biorę wózek.", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.2': "Jest ślisko. Jadę powoli.", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.3': "Kto decyduje o mojej trasie i moich godzinach?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.q': "Możesz dziś zrobić jeszcze jeden kurs?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.a': "Nie, wtedy nie będę mieć czasu na przerwę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel': "Nikogo nie ma w domu albo paczka jest uszkodzona", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "Klienta nie ma w domu? Postępuj według zasad swojej firmy: spróbuj u sąsiadów albo zabierz paczkę z powrotem. Nie zostawiaj jej po prostu pod drzwiami, chyba że klient o to prosił. Paczka jest uszkodzona albo mokra? Nie doręczaj jej tak, jakby wszystko było w porządku. Zrób zdjęcie jako dowód i zgłoś to w skanerze albo w aplikacji. Uczciwość w sprawie problemu jest zawsze lepsza niż ukrywanie go. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Ta paczka jest uszkodzona. Oto zdjęcie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "Klienta nie ma w domu, sąsiadów też nie. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "Skanujesz „nie ma w domu” i zabierasz paczkę z powrotem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "Skanujesz ją jako doręczoną i zostawiasz pod drzwiami.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Chowasz ją za kosz na śmieci, żeby nikt jej nie zobaczył.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "Paczka zeskanowana jako doręczona musi naprawdę być u klienta. Kiedy skanujesz to, co naprawdę się stało, klient może dostać paczkę później i nikt nie pomyśli, że zaginęła przez ciebie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "Bezpiecznie na drodze i uczciwa praca", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Nigdy nie trzymaj telefonu w ręce, kiedy prowadzisz: to zabronione. Do nawigacji używaj uchwytu. Rób przerwy, także w pracowity dzień. Ciężka paczka? Użyj wózka ręcznego albo podnieście ją we dwoje. Lód albo śnieg? Jedź powoli: lepiej się spóźnić niż mieć wypadek. Niektóre firmy mówią, że pracujesz na własny rachunek (zelfstandig). Ale kto decyduje o twoich godzinach, trasie i ubraniu? Jeśli firma decyduje o tym wszystkim, możesz jednak pracować na etacie (in loondienst). Wtedy często masz więcej praw, na przykład pensję w czasie choroby. Więcej o tym w lekcji „Dokumenty, integracja i twoja praca”. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Teraz robię przerwę. Potem jadę dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': "Firma mówi, że pracujesz na własny rachunek. Ale to ona decyduje o twoich godzinach, trasie i ubraniu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': "Pytasz o radę: może pracujesz w rzeczywistości na etacie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Nic nie robisz: w umowie jest „na własny rachunek”, więc tak jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Pracujesz więcej godzin, żeby zarobić tyle samo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "Liczy się to, jak naprawdę pracujesz, a nie tylko słowo w umowie. Jeśli firma decyduje, jak, kiedy i gdzie pracujesz, często pracujesz na etacie. Wtedy masz więcej praw.", // nieuw, nalezen // nagelezen AI 22 nov
    // Vertaalronde 14 november 2026: zeventien sectorlessen (bouw, productie, zorg, horeca, schoonmaak, winkel, groen, metaal, garage).
    'l.measure': "Mierzenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolmaat': "miarka zwijana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpas': "poziomica (pokazuje, czy coś jest równo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meten': "mierzyć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechtlijn': "prosty (nie krzywy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plank': "deska", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroef': "wkręt", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.1': "Jak długa jest ta deska?", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.2': "Ściana nie jest prosta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.3': "Mierzę to dwa razy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.q': "Jak szerokie to ma być?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.a': "Dziewięćdziesiąt centymetrów. Zapisuję to.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure': "Dwa razy mierz, raz tnij", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Na budowie wymiary są często w milimetrach. Dlatego „dziewięćset” może znaczyć 90 centymetrów. Nie masz pewności? Zapytaj: „To milimetry czy centymetry?” Powtórz liczbę na głos i ją zapisz. Zmierz dwa razy, zanim zaczniesz ciąć albo wiercić: za krótka deska zostaje za krótka. Zdarzył ci się błąd? Powiedz to od razu. Wtedy zespół może to jeszcze naprawić i kosztuje to mniej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "To jest w milimetrach czy w centymetrach?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': { m: "Kolega podaje wymiar. Nie usłyszałeś go dobrze. Co robisz?", f: "Kolega podaje wymiar. Nie usłyszałaś go dobrze. Co robisz?", x: "Kolega podaje wymiar. Nie było go dobrze słychać. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Powtarzasz liczbę i pytasz, czy się zgadza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Tniesz deskę według tego, co ci się wydaje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Czekasz, aż sam przyjdzie zobaczyć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Zły wymiar kosztuje materiał i czas. Powtórzenie liczby trwa dwie sekundy i na budowie robi to każdy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Porządek na budowie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bouwplaats': "budowa, plac budowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvoerder': "kierownik budowy (szef na budowie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.keet': "barak na budowie (na przerwy i zebrania)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afval': "odpady, śmieci", // nieuw, nalezen // nagelezen AI 28 nov
    'w.container': "kontener (bardzo duży pojemnik na odpady)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struikelen': "potknąć się (zahaczyć o coś nogą i upaść)", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.1': "Odpady idą do kontenera.", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.2': "Kierownik budowy jest w baraku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.3': "Uwaga, tu można się potknąć.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.q': "Gdzie ma trafić to drewno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.a': "Do kontenera przy wejściu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday': "Porządek na budowie to bezpieczna budowa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Na budowie sprzątanie jest częścią pracy, dla każdego. Przez luźne deski, kable i odpady ludzie potykają się i upadają. Dlatego sprzątaj swoje miejsce w ciągu dnia, nie tylko na koniec. Odpady się sortuje: drewno, gruz i metal często idą do różnych kontenerów. Nie wiesz, do którego? Zapytaj. Widzisz wystający gwóźdź albo dziurę bez przykrycia? Napraw to, jeśli możesz to zrobić bezpiecznie, albo powiedz kierownikowi budowy (de uitvoerder). Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Posprzątam to. Wtedy nikt się nie potknie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Na przejściu leżą deski z gwoździami. Nie są twoje. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Odsuwasz je na bok albo mówisz kierownikowi budowy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Przechodzisz nad nimi: to nie twoje deski.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Czekasz: ktoś inny je sprzątnie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Wszyscy chodzą tymi samymi przejściami. Kto widzi zagrożenie, coś z nim robi: na budowie to normalne.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Przekazanie zmiany", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vroegedienst': "zmiana poranna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.latedienst': "zmiana popołudniowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtdienst': "zmiana nocna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdracht': "przekazanie zmiany (mówisz następnej zmianie, co się działo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflossen': "zmienić kogoś (przychodzi następna osoba, a ty możesz iść)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teamleider': "kierownik zespołu", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.1': "W tym tygodniu mam zmianę popołudniową.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.2': "Kto mnie zmienia?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.3': "Maszyna numer dwa miała awarię.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.q': "Czy na twojej zmianie coś się stało?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.a': "Tak. Linia stała przez pół godziny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts': "Powiedz następnej zmianie", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Fabryka często pracuje dzień i noc, na zmiany. Na koniec twojej zmiany kolega przejmuje twoje miejsce. Nie wychodź tak po prostu: poczekaj, aż kolega przyjdzie. Powiedz w kilku słowach, co się działo: awaria, zły produkt, coś, co nie jest skończone. Wiele firm ma do tego także listę albo ekran. Problem, którego nie przekażesz, wraca na następnej zmianie i wtedy nikt nie wie dlaczego. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "Maszyna miała awarię. Teraz znowu działa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Twoja zmiana się skończyła. Kolega spóźnia się pięć minut. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Czekasz i mówisz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Idziesz do domu: twoja zmiana się skończyła.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Zatrzymujesz maszynę i wychodzisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Pracująca maszyna nie może zostać sama. Kiedy czekasz i to zgłaszasz, praca idzie dalej bezpiecznie, a kierownik zespołu może to rozwiązać.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Powiedz, co widzisz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duizelig': "kręci się w głowie (zawroty głowy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.misselijk': "niedobrze (czujesz, że zaraz zwymiotujesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benauwd': "duszno, brak tchu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koorts': "gorączka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verward': "zdezorientowany (osoba nie wie, gdzie jest)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.anders': "inaczej (nie tak jak zwykle)", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.1': "Pani ma zawroty głowy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.2': "Pan dzisiaj nie je.", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.3': "Możesz przyjść i zobaczyć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.q': "Jak się czuje pan Jansen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.a': "Jest zdezorientowany. To inaczej niż wczoraj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals': "Widzisz podopiecznego codziennie", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Często to właśnie ty spędzasz z podopiecznym najwięcej czasu. Dlatego to ty najwcześniej zauważasz, że coś jest inaczej: mniej je, bardziej go boli, jest zdezorientowany, ma duszności. Nie musisz wiedzieć, co to jest. Powiedz, co widzisz, i powiedz, kiedy to było. Powiedz o tym pielęgniarce tego samego dnia i zapisz to, jeśli to twoje zadanie. Wygląda to poważnie? Nie czekaj: od razu zawołaj pielęgniarkę. Lepiej o jeden raz za dużo niż o jeden raz za mało.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "Pani nie je i ma zawroty głowy. Zwykle tak nie jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Podopieczna jest dziś cicha i nie chce jeść. Zwykle dużo mówi. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Jeszcze dziś mówisz pielęgniarce, co widzisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Czekasz kilka dni: może to minie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Dajesz jej tabletkę z szafki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Mała zmiana może być pierwszym znakiem choroby. To nie ty decydujesz, co to jest: robi to pielęgniarka. Ale ona może coś zrobić tylko wtedy, gdy jej o tym powiesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Pomoc przy wstawaniu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tillift': "podnośnik (maszyna, która podnosi człowieka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rollator': "balkonik na kółkach, rollator", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bed': "łóżko", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstaan': "wstawać, wstać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaanzitten': "usiąść", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorzichtig': "ostrożnie, delikatnie", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.1': "Pomogę panu/pani wstać.", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.2': "Chce pan/pani na chwilę usiąść?", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.3': "Najpierw przyniosę podnośnik.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.q': "Możesz podnieść panią z łóżka?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.a': "Nie w pojedynkę. Przyniosę podnośnik.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer': "Najpierw powiedz, potem pomóż", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Zanim dotkniesz podopiecznego, powiedz, co zamierzasz zrobić: „Ik help u nu met opstaan.” Wtedy podopieczny się nie przestraszy i może pomagać. Pozwól podopiecznemu robić to, co jeszcze potrafi: dzięki temu zachowuje siły. Nie podnoś człowieka w pojedynkę. Używaj sprzętu, który jest na miejscu, na przykład podnośnika, i pracuj tak, jak ci pokazano. Nikt ci jeszcze nie pokazał? Najpierw zapytaj. Twoje plecy muszą wytrzymać całe życie zawodowe. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Teraz pomogę panu/pani wstać. Możemy zaczynać?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Podopieczna chce wstać z łóżka. Nie umiesz jeszcze obsługiwać podnośnika. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Prosisz kolegę, który zna podnośnik.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "Podnosisz ją w pojedynkę: nie jest ciężka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Próbujesz użyć podnośnika: to nie może być trudne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Złe podnoszenie człowieka może zrobić krzywdę podopiecznemu i twoim plecom. Poproszenie kolegi zajmuje kilka minut. Upadek może kosztować miesiące.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Zmywanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwas': "zmywanie, brudne naczynia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwasser': "zmywarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bord': "talerz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glas': "szklanka, szkło", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestek': "sztućce (nóż, widelec i łyżka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdrogen': "wycierać do sucha (ścierką)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.1': "Zmywarka skończyła.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.2': "Uwaga, stłukła się szklanka.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.3': "Nie ma już czystych sztućców.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.q': "Są jeszcze czyste szklanki?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.a': "Tak, zaraz je przyniosę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes': "Stłuczone szkło: powiedz od razu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "W kuchni szkło się tłucze. To normalne i nikt się o to nie gniewa. Ale powiedz to od razu, głośno i wyraźnie: „Glas!” Nie zbieraj kawałków gołymi rękami: użyj zmiotki. Szkło spadło blisko jedzenia albo do lodu? Wtedy to jedzenie albo ten lód trzeba wyrzucić, w całości. Mały kawałek szkła w posiłku jest bardzo niebezpieczny dla gościa. Szkło idzie do osobnego pojemnika, a nie do worka, który ktoś potem podnosi. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Uwaga, szkło! Zaraz to sprzątnę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Szklanka tłucze się nad lodem do napojów. Jest bardzo duży ruch. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Mówisz o tym i wyrzucasz cały lód.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Wyjmujesz kawałki, które widać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Nic nie mówisz: teraz jest za duży ruch.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Małych kawałków szkła w lodzie nie widać. Nowy lód kosztuje mało. Gość ze szkłem w napoju może się poważnie zranić.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Kiedy jest duży ruch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heet': "gorący, gorąco", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chef': "szef kuchni (kieruje kuchnią)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terras': "taras, ogródek (stoliki na zewnątrz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tafel': "stół, stolik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dienblad': "taca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachten': "czekać", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.1': "Gorące! Przechodzę za tobą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.2': "Stolik numer sześć czeka na jedzenie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.3': "Zanoszę to na taras.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.q': "Możesz obsłużyć stolik numer cztery?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.a': "Tak, szefie. Już idę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush': "Krótkie słowa, kiedy jest duży ruch", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Kiedy jest duży ruch, ludzie w kuchni mówią krótkimi słowami: „Heet!”, „Achter!”, „Tafel zes!” To nie jest niegrzeczne. Tak jest szybko i bezpiecznie: każdy wie, gdzie są gorące garnki i noże. Ty też wołaj „Heet!” albo „Achter!”, kiedy przechodzisz za kimś. Słyszysz polecenie? Powtórz je: „Ja, chef.” Wtedy szef kuchni wie, że to do ciebie dotarło. Ktoś był dla ciebie szorstki w tym pośpiechu? Często mija to, kiedy ruch się kończy. Dalej jest nieprzyjemnie? Wtedy porozmawiaj o tym w spokojnej chwili.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "Z tyłu! Mam gorący garnek.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Jest bardzo duży ruch. Szef kuchni woła: „Tafel zes, nu!” Nie mówi proszę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Mówisz „Ja, chef” i to robisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Przerywasz pracę i mówisz, że jest niegrzeczny.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Robisz to, ale nic nie odpowiadasz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "W pośpiechu krótkie słowa są normalne i nie są przeciwko tobie. Powtórzenie pokazuje, że polecenie do ciebie dotarło. Dzięki temu kuchnia pracuje szybko i bezpiecznie.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Twoja runda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kantoor': "biuro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdieping': "piętro (1. albo 2. piętro budynku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gang': "korytarz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpapier': "papier toaletowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeep': "mydło", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijvullen': "uzupełniać, dolewać", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.1': "Zaczynam na drugim piętrze.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.2': "Papier toaletowy się skończył.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.3': "Uzupełniam mydło.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.q': "Biuro numer trzy już zrobione?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.a': "Nie, ktoś tam jeszcze pracuje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds': "Sprzątanie tam, gdzie ludzie pracują", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Często sprzątasz, kiedy inni ludzie jeszcze pracują. Przywitaj się i zapytaj: „Mag ik hier even schoonmaken?” Większość ludzi się zgadza. Ktoś ma zebranie albo rozmawia przez telefon? Wtedy wróć później. Nie przesuwaj papierów na biurku i ich nie czytaj: sprzątaj dookoła nich. Na swoją rundę masz ustalony czas. Czasu jest za mało, żeby zrobić to dobrze? Nie pomijaj pomieszczeń po cichu. Powiedz przełożonemu, czego nie udało ci się zrobić i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Dzień dobry. Czy mogę tu chwilę posprzątać?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Twoja runda trwa dziś dłużej: jedno pomieszczenie było bardzo brudne. Dwa biura nie są zrobione. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Mówisz przełożonemu, które dwa i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Idziesz do domu i liczysz, że nikt nie zauważy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Robisz je bardzo szybko, bez podłóg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Klient, który zastaje brudne biuro, składa skargę. Przełożony, który o tym wie, może to wyjaśnić albo dać ci więcej czasu. Powiedzieć o tym to nie porażka.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Kolory i ściereczki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doek': "ściereczka, ścierka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spons': "gąbka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rood': "czerwony", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauw': "niebieski", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geel': "żółty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groen': "zielony", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.1': "Czerwona ściereczka jest do toalety.", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.2': "Weź czystą ściereczkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.3': "Jakiego koloru tu używam?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.q': "Mogę użyć tej ściereczki do biurka?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.a': "Nie, czerwona jest tylko do toalety.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours': "Każdy kolor ma swoje miejsce", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Wiele firm sprzątających pracuje z kolorami. Każdy kolor ściereczki, gąbki i wiadra jest do jednego miejsca. Często czerwony jest do toalety, a niebieski do biurek i stołów. Dzięki temu brud z toalety nie trafia na biurko ani do kuchni. Kolory mogą być inne w każdej firmie, więc zapytaj pierwszego dnia. Ściereczka jest brudna albo spadła na podłogę? Weź czystą. Zużyte ściereczki idą do worka na pranie, a nie z powrotem na wózek. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Który kolor jest tu do toalety?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Niebieskie ściereczki ci się skończyły. Musisz jeszcze wyczyścić trzy biurka. Masz tylko czerwone ściereczki. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Najpierw idziesz po nowe niebieskie ściereczki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Używasz czerwonej ściereczki: czyste to czyste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Używasz jednej niebieskiej ściereczki jeszcze raz do wszystkich trzech.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "System kolorów działa tylko wtedy, gdy wszyscy zawsze się go trzymają. Wtedy nikt nie musi się zastanawiać, gdzie ściereczka już była.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Pomoc klientowi", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbieding': "promocja (taniej przez krótki czas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.korting': "zniżka, rabat (płacisz mniej)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitverkocht': "wyprzedane", // nieuw, nalezen // nagelezen AI 28 nov
    'w.magazijn': "magazyn, zaplecze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tas': "torba", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestellen': "zamawiać", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.1': "Przepraszam, to jest wyprzedane.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.2': "Czy chce pan/pani do tego torbę?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.3': "Ta kawa jest w promocji.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.q': "Czy jest jeszcze mleko?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.a': "Sprawdzę dla pana/pani w magazynie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp': "„Nie wiem” to nie koniec", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Klient o coś pyta, a ty nie znasz odpowiedzi. Nic nie szkodzi: nikt nie wie wszystkiego. Ale nie mów tylko „nee” albo „weet ik niet” i nie odchodź. Powiedz: „Ik vraag het even voor u” i zawołaj kolegę. Produkt jest wyprzedany? Powiedz, kiedy znowu będzie, albo pokaż coś podobnego. Patrz na klienta i przywitaj się, także wtedy, gdy właśnie wykładasz towar na półki. Nie rozumiesz pytania? Poproś klienta, żeby powtórzył je powoli.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Tego nie wiem. Zapytam dla pana/pani.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Klientka pyta o produkt. Nie znasz tego słowa. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Mówisz: „Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Mówisz „nee” i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Pokazujesz gdzieś ręką, żeby sobie poszła.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Klientowi nie przeszkadza, że jesteś tu od niedawna albo dopiero uczysz się niderlandzkiego. Klientowi przeszkadza, kiedy nie dostaje pomocy. Zawołanie kolegi to dobra obsługa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Trudne chwile", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsleider': "kierownik sklepu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiliger': "ochroniarz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dief': "złodziej", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stelen': "kraść", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schreeuwen': "krzyczeć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldterug': "zwrot pieniędzy", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.1': "Zawołam kierownika sklepu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.2': "Proszę nie krzyczeć.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.3': "Myślę, że ktoś coś kradnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.q': "Chcę teraz dostać zwrot pieniędzy!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.a': "Rozumiem. Zawołam kolegę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble': "Zdenerwowany klient albo złodziej: ty jesteś na pierwszym miejscu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Czasem klient się denerwuje albo widzisz, że ktoś kradnie. Twoje bezpieczeństwo jest najważniejsze, zawsze. Przy zdenerwowanym kliencie: zachowaj spokój, nie krzycz na niego i zawołaj kierownika sklepu. Nie musisz tego rozwiązywać w pojedynkę. Widzisz złodzieja? Nie biegnij za nim, nie zatrzymuj go siłą i nie zasłaniaj drzwi. Dobrze zapamiętaj, co widzisz, i od razu powiedz kierownikowi albo ochroniarzowi. Rzeczy można zastąpić. Ciebie nie. Czujesz potem strach? Porozmawiaj o tym z przełożonym. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Widzę, że ktoś wkłada coś do swojej torby.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Mężczyzna wkłada butelkę pod kurtkę i idzie do wyjścia. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Mówisz kierownikowi albo ochroniarzowi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Biegniesz za nim i łapiesz go za rękę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Stajesz przed drzwiami.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Zatrzymany złodziej może stać się agresywny. Kierownik i ochroniarz wiedzą, co robić. Żaden produkt nie jest wart tego, żeby stała ci się krzywda.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Dbanie o roślinę", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantblad': "liść", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stengel': "łodyga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bloem': "kwiat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knippen': "ciąć (nożyczkami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomaat': "pomidor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijp': "dojrzały (gotowy do zbioru)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.1': "Ten pomidor nie jest jeszcze dojrzały.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.2': "Odcinam liść.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.3': "Łodyga jest złamana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.q': "Które pomidory zbieram?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.a': "Tylko czerwone. Zielone nie są jeszcze dojrzałe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare': "Czyste ręce, zdrowe rośliny", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Rośliny też mogą chorować. Wirus przechodzi z rośliny na roślinę na rękach, rękawicach, nożach i ubraniu. W szklarni jedna chora roślina może oznaczać, że trzeba wyrzucić tysiące roślin. Dlatego przy wejściu są surowe zasady: umyj ręce, noś ubranie robocze firmy i przejdź przez wanienkę do dezynfekcji butów. W wielu szklarniach nie wolno mieć w swoim jedzeniu własnych pomidorów, papryki ani ogórków. Widzisz roślinę, która dziwnie wygląda? Nie dotykaj jej. Powiedz przełożonemu, w którym to rzędzie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "W rzędzie dwunastym jest chora roślina.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Widzisz roślinę z dziwnymi żółtymi plamami. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "Zostawiasz ją i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "Wyrywasz ją i zabierasz ze sobą.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Odcinasz liście z plamami.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Kiedy dotykasz chorej rośliny, wirus idzie z tobą do następnych roślin. Twój przełożony wie, jak ją bezpiecznie usunąć.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Praca na zewnątrz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.land': "pole (gdzie rośliny rosną na zewnątrz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regen': "deszcz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zon': "słońce", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzen': "kalosze, wysokie buty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regenpak': "ubranie przeciwdeszczowe (kurtka i spodnie na deszcz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onweer': "burza", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.1': "Pada deszcz. Zakładam ubranie przeciwdeszczowe.", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.2': "Moje kalosze są mokre.", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.3': "Słońce dziś mocno grzeje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.q': "Idzie burza. Co robimy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.a': "Przerywamy pracę i idziemy do środka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors': "Słońce, deszcz i burza", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Na zewnątrz pracujesz przy każdej pogodzie. W słońcu: zakryj głowę i skórę, używaj kremu z filtrem i często pij wodę. W deszczu: noś ubranie przeciwdeszczowe i kalosze, a w przerwie załóż suche ubranie. Od wilgoci i zimna chorujesz i pracujesz wolniej. Słychać grzmoty? Wtedy przerwij pracę i idź do środka albo do samochodu lub busa. Nie pod drzewo i nie na otwarte pole. Potrzebujesz do pracy ubrania na deszcz albo kaloszy? Zapytaj o nie pracodawcę, zanim kupisz je za swoje pieniądze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Będzie burza. Idziemy do środka?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Jesteś na polu. Słyszysz grzmot blisko. Twój rząd jest prawie skończony. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Przerywasz pracę i idziesz do środka albo do busa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Najpierw szybko kończysz rząd.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Czekasz pod dużym drzewem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "Piorun uderza w najwyższy punkt, a na płaskim polu to jesteś ty. Rząd może poczekać kwadrans.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "Rysunek i wymiar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekening': "rysunek (pokazuje, jaka ma być część)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maat': "wymiar, rozmiar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.millimeter': "milimetr", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuifmaat': "suwmiarka (mierzy bardzo dokładnie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passen': "pasować", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bout': "śruba", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.1': "Jaki jest wymiar na rysunku?", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.2': "Ta część nie pasuje.", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.3': "Jest o dwa milimetry za duża.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.q': "Czy śruba pasuje?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.a': "Nie. Zmierzę to jeszcze raz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing': "Decyduje rysunek", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "W warsztacie robisz to, co jest na rysunku, a nie to, co wygląda mniej więcej dobrze. Wymiary są w milimetrach i jeden milimetr może być za dużo. Część nie pasuje? Nie używaj siły i nie powiększaj otworu „tylko trochę”. Zmierz jeszcze raz i spójrz na rysunek. Nie umiesz odczytać rysunku albo brakuje wymiaru? Zapytaj, zanim zaczniesz. Pytanie kosztuje minutę. Zła część kosztuje materiał i godziny pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Nie mogę odczytać tego wymiaru. Możesz spojrzeć?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Część nie pasuje: jest o jeden milimetr za duża. Młotkiem dałoby się ją wbić. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Mierzysz jeszcze raz i pytasz, co robić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "Wbijasz ją młotkiem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Zeszlifowujesz kawałek i nic nie mówisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Część, która wchodzi na siłę, może później pęknąć, u klienta. Kiedy to zgłaszasz, można znaleźć przyczynę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Spawanie i praca na gorąco", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lassen': "spawać (łączyć metal bardzo wysoką temperaturą)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laskap': "maska spawalnicza", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rook': "dym", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzuiging': "wyciąg (zabiera dym)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkoelen': "stygnąć, ostygnąć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandwond': "oparzenie (rana od gorąca)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.1': "Zakładam maskę spawalniczą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.2': "Włącz wyciąg.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.3': "Uwaga, metal jest jeszcze gorący.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.q': "Mogę to już wziąć do ręki?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.a': "Nie, poczekaj. To musi najpierw ostygnąć.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld': "Gorący metal wygląda na zimny", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Spawanie daje bardzo jasne światło. Nie patrz w nie bez maski spawalniczej, także z daleka: możesz poparzyć oczy, a czujesz to dopiero po kilku godzinach. Kolega spawa blisko ciebie? Odwróć wzrok albo stań za osłoną. Metal zaraz po spawaniu albo szlifowaniu wygląda normalnie, ale jest bardzo gorący. Nie bierz go gołymi rękami. Dym spawalniczy szkodzi płucom: włącz wyciąg. Oparzenie? Od razu chłodź je wodą, co najmniej dziesięć minut, i zgłoś to. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "Czy to już ostygło?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Kolega spawa obok ciebie. Nie masz na sobie maski spawalniczej. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Odwracasz wzrok i stajesz za osłoną.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Patrzysz przez chwilę: można się czegoś nauczyć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Przymykasz oczy do połowy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "Światło spawania parzy oczy, także z boku i z daleka. Ból czujesz dopiero później, często w nocy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Części samochodu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motor': "silnik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motorkap': "maska (pokrywa nad silnikiem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rem': "hamulec", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lamp': "światło, lampa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ruitenwisser': "wycieraczka (szyby)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoel': "fotel, krzesło", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.1': "Otwórz maskę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.2': "Lewe przednie światło jest zepsute.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.3': "Hamulce hałasują.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.q': "Co słyszysz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.a': "Silnik wydaje dziwny dźwięk.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts': "Samochód należy do klienta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Samochód w warsztacie nie jest twój: należy do klienta. Zanim wsiądziesz, załóż pokrowiec na fotel i na kierownicę, a w środku pracuj czystymi rękami. Zostaw fotel, lusterka i radio tak, jak były. Trzeba było przesunąć fotel? Ustaw go z powrotem. Nie dotykaj rzeczy osobistych w samochodzie. Zdarzyła ci się rysa albo plama? Od razu powiedz przełożonemu. Klient, który znajdzie to w domu, już nie wróci.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': { m: "Zrobiłem rysę. Przepraszam.", f: "Zrobiłam rysę. Przepraszam.", x: "To przeze mnie ta rysa. Przepraszam." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Robisz małą rysę na drzwiach samochodu klienta. Nikt tego nie widział. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Od razu mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Nic nie mówisz: jest bardzo mała.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Wycierasz ją szmatką i masz nadzieję, że zniknie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Każdemu zdarza się czasem błąd. Warsztat może naprawić rysę albo uczciwie powiedzieć o niej klientowi. Ukryta rysa kosztuje warsztat dobre imię.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Benzyna, gaz i prąd", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krik': "lewarek (podnosi jedną stronę samochodu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benzine': "benzyna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektrischeauto': "samochód elektryczny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oranje': "pomarańczowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.morsen': "rozlać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lap': "szmata (ścierka do brudnej pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.1': "Czuję benzynę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.2': "Rozlał się olej. Idę po szmatę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.3': "Nie dotykam pomarańczowych kabli.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.q': "Mogę pracować przy tym samochodzie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.a': "Jeszcze nie. To samochód elektryczny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe': "Pomarańczowe kable i pracujące silniki", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Samochód elektryczny albo hybrydowy ma akumulator o bardzo wysokim napięciu. Kable do niego są pomarańczowe. Nie dotykaj ich i ich nie odłączaj: najpierw mechanik ze specjalnym przeszkoleniem musi zabezpieczyć samochód. Przy samochodzie stoi tabliczka albo pachołek? Wtedy trzymaj się z daleka. Silnik, który pracuje w zamkniętym pomieszczeniu, wytwarza gaz, którego nie czuć i nie widać, a który może zabić. Dlatego: załóż wąż do odciągu spalin albo otwórz drzwi warsztatu. Czujesz benzynę? Żadnych iskier i żadnego palenia. Od razu powiedz przełożonemu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Czy ten samochód jest już zabezpieczony?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Musisz wymienić koło w samochodzie elektrycznym. Pod samochodem widzisz luźny pomarańczowy kabel. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Niczego nie dotykasz i wołasz przeszkolonego mechanika.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Wpychasz kabel z powrotem ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Wpychasz go z powrotem suchą szmatką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "Akumulator samochodu elektrycznego ma dość prądu, żeby zabić, także gdy samochód jest wyłączony. Tych części może dotykać tylko osoba po przeszkoleniu.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Sprawdzanie busa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schade': "uszkodzenie, szkoda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deuk': "wgniecenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spiegel': "lusterko, lustro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tanken': "tankować (wlać paliwo do busa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opladen': "ładować (elektrycznego busa, telefon)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeren': "parkować", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.1': "Na drzwiach jest wgniecenie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.2': "To uszkodzenie już było.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.3': "Muszę jeszcze najpierw zatankować.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.q': "Czy z busem wszystko w porządku?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.a': "Nie, lusterko jest zepsute.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck': "Obejrzyj, zanim pojedziesz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Obejdź busa dookoła przed pierwszym kursem. Widzisz wgniecenie, rysę albo zepsute lusterko? Zrób zdjęcie i zgłoś to, zanim odjedziesz. Wtedy wszyscy wiedzą, że to uszkodzenie już było. Coś się stało w czasie kursu? Zgłoś to tego samego dnia, także wtedy, gdy to drobiazg. Ukrywanie uszkodzeń daje później większe problemy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "Na busie jest uszkodzenie. Oto zdjęcie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': { m: "Rano widzisz na busie nowe wgniecenie. Nie ty je zrobiłeś. Co robisz?", f: "Rano widzisz na busie nowe wgniecenie. Nie ty je zrobiłaś. Co robisz?", x: "Rano widzisz na busie nowe wgniecenie. To nie przez ciebie. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Robisz zdjęcie i zgłaszasz to, zanim pojedziesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Nic nie mówisz: to nie twoje wgniecenie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Czekasz, czy ktoś o to zapyta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': { m: "Kiedy zgłaszasz to, zanim pojedziesz, nikt nie pomyśli, że to ty to zrobiłeś. Zdjęcie z godziną jest jasne dla wszystkich.", f: "Kiedy zgłaszasz to, zanim pojedziesz, nikt nie pomyśli, że to ty to zrobiłaś. Zdjęcie z godziną jest jasne dla wszystkich.", x: "Kiedy zgłaszasz to, zanim pojedziesz, nikt nie pomyśli, że to przez ciebie. Zdjęcie z godziną jest jasne dla wszystkich." }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Opóźnienia na drodze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.file': "korek (na drodze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertraging': "opóźnienie (jesteś później, niż było w planie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omleiding': "objazd (inna droga, bo droga jest zamknięta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navigatie': "nawigacja (aplikacja, która pokazuje drogę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planner': "planista (osoba, która układa trasy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.retour': "zwrot (paczka, która wraca)", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.1': "Stoję w korku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.2': "Mam pół godziny opóźnienia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.3': "Ta paczka idzie do zwrotu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.q': "Gdzie teraz jesteś?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.a': "Przy objeździe. Będę dziesięć minut później.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay': "Spóźnisz się? Powiedz na czas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Korek albo zamknięta droga to nie twoja wina. Ale powiedz planiście, gdy tylko wiesz, że się spóźnisz. Wtedy planista może powiadomić klientów albo zmienić trasę. Najpierw zatrzymaj się w bezpiecznym miejscu: nie dzwoń z telefonem w ręce, kiedy prowadzisz. I nie jedź szybciej, żeby nadrobić czas. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Stoję w korku. Będę pół godziny później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Droga jest zamknięta. Objazd zabiera ci trzydzieści minut. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Mówisz planiście, gdy tylko możesz bezpiecznie się zatrzymać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Jedziesz szybciej, żeby nadrobić czas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Nic nie mówisz: może nikt nie zauważy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Kiedy planista wie o tym wcześnie, klienci się dowiadują i nikt nie czeka na próżno. Szybsza jazda jest niebezpieczna i prawie nie daje czasu.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Polecenia", // nieuw, nalezen // nagelezen AI 28 nov
    'l.putdown': "Postaw to tam", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zetten': "stawiać (coś, co stoi: karton, wiadro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leggen': "kłaść (coś, co leży płasko)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brengen': "przynosić, zanosić (w jakieś miejsce albo do kogoś)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geven': "dawać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vasthouden': "trzymać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loslaten': "puszczać", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.1': "Postaw to tam.", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.2': "Zanieś to do stołówki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.3': "Potrzymaj to przez chwilę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.q': "Możesz to przez chwilę potrzymać?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.a': "Tak. Gdzie mam to postawić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown': "Powiedz, że trzymasz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Niesiecie coś razem albo kolega podaje ci coś ciężkiego? Powiedz „Ik heb hem”, kiedy dobrze to trzymasz. Wtedy kolega wie, że może bezpiecznie puścić. A jeśli to ty chcesz puścić? Najpierw zapytaj: „Heb je hem?” I poczekaj na odpowiedź. To normalne w każdym miejscu pracy. Dzięki temu nic nie spada na stopy i ręce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Trzymam. Możesz puścić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Kolega podaje ci ciężki karton. Jeszcze nie trzymasz go dobrze. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Mówisz „wacht” i najpierw chwytasz lepiej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Nic nie mówisz: on to zobaczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "Bierzesz szybko, żeby nie czekał.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Kolega puszcza, kiedy myśli, że już trzymasz. Jedno słowo daje ci czas, żeby dobrze chwycić.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Włączone i wyłączone, otwarte i zamknięte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanzetten': "włączyć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendoen': "otwierać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dichtdoen': "zamykać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukken': "naciskać (przycisk)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaien': "kręcić, obracać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoppen': "zatrzymać (się), przestać", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.1': "Zamknij drzwi.", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.2': "Naciśnij przycisk.", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.3': "Stop! Wyłącz to.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff.q': "Czy drzwi są zamknięte?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff.a': "Nie. Teraz je zamykam.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff': "Stop znaczy stop", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Ktoś woła „Stop!”? Zatrzymaj się od razu, także wtedy, gdy nie wiesz dlaczego. Zapytaj potem. Krótkie, głośne słowo to tutaj nie złość: tak koledzy dbają o siebie nawzajem. A jeśli to ty widzisz coś niebezpiecznego? Też zawołaj „Stop!”, także do kogoś, kto pracuje tu od lat. Nikogo to nie dziwi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Stop! Poczekaj chwilę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Włączasz maszynę. Kolega woła „Stop!”. Nie widzisz problemu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Zatrzymujesz się od razu, a potem pytasz dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Robisz dalej: nie widzisz problemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Najpierw pytasz, dlaczego masz się zatrzymać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Kolega może widzieć coś, czego ty nie widzisz. Najpierw się zatrzymaj, potem rozmawiaj: tak wszyscy są bezpieczni.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Pchaj, ciągnij, napełniaj", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duwen': "pchać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trekken': "ciągnąć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vullen': "napełniać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leegmaken': "opróżniać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoonmaken': "czyścić, sprzątać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vol': "pełny", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.1': "Nie pchaj, tylko ciągnij.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.2': "Ten jest pełny. Opróżnij go.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.3': "Wyczyść to, proszę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.q': "Jest już pełny?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.a': "Tak. Opróżniam go.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty': "Gotowe? Powiedz to", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': { m: "Skończyłeś zadanie? Powiedz to: „Ik ben klaar.” I zapytaj, co możesz robić dalej. Kiedy cicho czekasz, aż ktoś cię zobaczy, może to wyglądać tak, że nie chcesz pracować, także wtedy, gdy to nieprawda. Koledzy, którzy pytają o następne zadanie, po jakimś czasie często dostają ciekawszą pracę. Chcesz nauczyć się czegoś nowego? Zapytaj też o to: „Mag ik dat ook leren?”", f: "Skończyłaś zadanie? Powiedz to: „Ik ben klaar.” I zapytaj, co możesz robić dalej. Kiedy cicho czekasz, aż ktoś cię zobaczy, może to wyglądać tak, że nie chcesz pracować, także wtedy, gdy to nieprawda. Koledzy, którzy pytają o następne zadanie, po jakimś czasie często dostają ciekawszą pracę. Chcesz nauczyć się czegoś nowego? Zapytaj też o to: „Mag ik dat ook leren?”", x: "Zadanie gotowe? Powiedz to: „Ik ben klaar.” I zapytaj, co możesz robić dalej. Kiedy cicho czekasz, aż ktoś cię zobaczy, może to wyglądać tak, że nie chcesz pracować, także wtedy, gdy to nieprawda. Koledzy, którzy pytają o następne zadanie, po jakimś czasie często dostają ciekawszą pracę. Chcesz nauczyć się czegoś nowego? Zapytaj też o to: „Mag ik dat ook leren?”" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': { m: "Skończyłem. Co jeszcze mogę zrobić?", f: "Skończyłam. Co jeszcze mogę zrobić?", x: "Gotowe. Co jeszcze mogę zrobić?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': { m: "Skończyłeś swoje zadanie. Przełożony jest zajęty czymś innym. Co robisz?", f: "Skończyłaś swoje zadanie. Przełożony jest zajęty czymś innym. Co robisz?", x: "Twoje zadanie jest gotowe. Przełożony jest zajęty czymś innym. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': { m: "Mówisz, że skończyłeś, i pytasz, co dalej.", f: "Mówisz, że skończyłaś, i pytasz, co dalej.", x: "Mówisz, że wszystko gotowe, i pytasz, co dalej." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Czekasz, aż przełożony cię zobaczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Robisz sobie przerwę: twoja praca jest skończona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': { m: "Przełożony nie może widzieć wszystkiego. Kiedy mówisz, że skończyłeś, praca idzie dalej, a ty pokazujesz, że chcesz robić więcej.", f: "Przełożony nie może widzieć wszystkiego. Kiedy mówisz, że skończyłaś, praca idzie dalej, a ty pokazujesz, że chcesz robić więcej.", x: "Przełożony nie może widzieć wszystkiego. Kiedy mówisz, że wszystko gotowe, praca idzie dalej, a ty pokazujesz, że chcesz robić więcej." }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Najpierw to, potem tamto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nu': "teraz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dan': "potem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.altijd': "zawsze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.genoeg': "dość, wystarczy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meer': "więcej", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alles': "wszystko", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.1': "Najpierw to, potem tamto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.2': "To wystarczy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.3': "Zawsze rób to tak.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.q': "Możesz to teraz zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.a': "Tak. Najpierw to, a potem?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order': "Dużo zadań naraz? Zapytaj, co najpierw", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': { m: "Czasem dostajesz trzy zadania w jednym zdaniu. Trudno to zapamiętać, także ludziom, którzy dobrze mówią po niderlandzku. Zapytaj, które jest pierwsze: „Wat moet ik eerst doen?” Możesz też zapisać zadania albo policzyć je na palcach i powtórzyć. Zapomniałeś o jednym? Wróć i zapytaj. To lepsze niż zgadywanie.", f: "Czasem dostajesz trzy zadania w jednym zdaniu. Trudno to zapamiętać, także ludziom, którzy dobrze mówią po niderlandzku. Zapytaj, które jest pierwsze: „Wat moet ik eerst doen?” Możesz też zapisać zadania albo policzyć je na palcach i powtórzyć. Zapomniałaś o jednym? Wróć i zapytaj. To lepsze niż zgadywanie.", x: "Czasem dostajesz trzy zadania w jednym zdaniu. Trudno to zapamiętać, także ludziom, którzy dobrze mówią po niderlandzku. Zapytaj, które jest pierwsze: „Wat moet ik eerst doen?” Możesz też zapisać zadania albo policzyć je na palcach i powtórzyć. Nie pamiętasz jednego? Wróć i zapytaj. To lepsze niż zgadywanie." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "To dużo. Co mam zrobić najpierw?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Przełożony daje ci trzy zadania, bardzo szybko. Pamiętasz tylko pierwsze. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Od razu prosisz o powtórzenie zadań.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Robisz pierwsze i masz nadzieję, że przypomnisz sobie resztę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Nic nie robisz: nie znasz wszystkich trzech.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Pytanie od razu zajmuje dziesięć sekund. Później przełożonego może już nie być, a wtedy czekasz albo zgadujesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Płytki, tynk i farba", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tiletools': "Narzędzia glazurnika", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmkam': "paca zębata (rozprowadza klej do płytek w równe rowki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.troffel': "kielnia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelsnijder': "przecinarka do płytek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nijptang': "szczypce do płytek (do odłamywania małych kawałków płytki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mixer': "mieszadło (miesza klej albo tynk w wiadrze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duimstok': "metrówka, miarka składana", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.1': "Podaj mi na chwilę pacę zębatą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.2': "Tnę płytkę przecinarką do płytek.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.3': "Najpierw zmierz metrówką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.q': "Gdzie jest mieszadło?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.a': "Przy wiadrze, obok drzwi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools': "Umyj narzędzia, zanim klej stwardnieje", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "Klej do płytek i tynk szybko twardnieją, także na narzędziach. Dlatego od razu myj pacę zębatą, kielnię i mieszadło w wiadrze z wodą, także przed przerwą. Twardy klej nie schodzi, a paca zębata z twardym klejem robi złe rowki. Nie wylewaj brudnej wody do zlewu ani do odpływu: zatka się. Zapytaj, gdzie można wylać wodę. Mieszadło trzymaj obiema rękami i włączaj je powoli. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Szybko umyję pacę zębatą.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "Jest czas na przerwę. Twoja paca zębata jest pełna mokrego kleju. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "Myjesz ją w wodzie i idziesz na przerwę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "Zostawiasz ją: umyjesz ją po pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "Wkładasz ją do wiadra z klejem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "Klej do płytek twardnieje też w czasie przerwy. Czysta paca zębata robi dobre rowki i płytki dobrze się trzymają. Twardy klej na niej to dużo pracy albo nowe narzędzie.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Płytki, klej i linia środkowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegel': "płytka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegellijm': "klej do płytek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelkruisje': "krzyżyk dystansowy (mały krzyżyk między płytkami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hartlijn': "linia środkowa, oś (od niej zaczyna się układać płytki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelplaat': "płyta do ćwiczeń (płyta, na której ćwiczy się układanie płytek)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potlood': "ołówek", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.1': "Klej do płytek jest jeszcze mokry.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.2': "Włóż krzyżyk między płytki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.3': "Najpierw narysuj ołówkiem linię środkową.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.q': "Gdzie zaczynam układać płytki?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.a': "Pośrodku, na linii środkowej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling': "Zacznij od linii środkowej, z małą ilością kleju", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Glazurnik nie zaczyna w rogu. Najpierw rysujesz linię środkową, ołówkiem i poziomicą, i tam zaczynasz. Wtedy docinane płytki na obu końcach mają taki sam rozmiar. Nakładaj tylko tyle kleju, ile zdążysz szybko przykryć płytkami. Na kleju, który stoi za długo, robi się sucha skórka i wtedy płytki słabo się trzymają. Na każdym skrzyżowaniu włóż krzyżyk, żeby wszystkie fugi były takie same. Często sprawdzaj poziomicą: krzywą płytkę łatwo poprawić teraz, a trudno jutro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Nie nakładam za dużo kleju naraz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Po długiej rozmowie przez telefon klej na ścianie ma suchą skórkę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Zdrapujesz go i nakładasz świeży klej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "I tak wciskasz w niego płytki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Zwilżasz go gąbką i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "Klej z suchą skórką słabo trzyma płytkę. Później płytka może odpaść i wtedy trzeba zrobić pracę jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Tynkowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stucspaan': "paca tynkarska (płaska stalowa paca do wygładzania tynku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplegspaan': "deska tynkarska (płaska deska, na której trzymasz tynk)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spackmes': "szpachla (szeroki, płaski nóż)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rei': "łata tynkarska (długa prosta listwa do wyrównywania tynku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sponsspaan': "paca z gąbką", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoekprofiel': "narożnik tynkarski (metalowa listwa, żeby róg był prosty)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.1': "Najpierw załóż narożnik na róg.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.2': "Wygładź ścianę pacą tynkarską.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.3': "Przeciągnij łatę po ścianie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.q': "Czy ściana jest już sucha?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.a': "Nie, poczekaj jeszcze jeden dzień.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster': "Tynk potrzebuje czasu, żeby wyschnąć", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "Świeży tynk długo jest mokry. Mokra ściana jest ciemniejsza niż sucha. Malarz może zacząć dopiero wtedy, gdy ściana jest wszędzie sucha, a to może trwać dni albo tygodnie. Nie susz jej szybciej nagrzewnicą: wtedy tynk może popękać. Ktoś chce malować za wcześnie? Powiedz, że ściana nie jest jeszcze sucha. A zanim zaczniesz, przykryj podłogę, okna i gniazdka: tynk trudno usunąć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "Ściana jest jeszcze mokra. Nie możesz jeszcze malować.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "Malarz chce zacząć jutro. Nowy tynk ma jeszcze ciemne plamy. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Mówisz malarzowi: ściana nie jest jeszcze sucha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Na noc stawiasz przed nią nagrzewnicę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Nic nie mówisz: malarz sam to zobaczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Ciemne plamy znaczą, że tynk jest jeszcze mokry. Farba na mokrej ścianie może odpaść, a nagrzewnica może zrobić pęknięcia. Czekanie kosztuje mniej niż robienie wszystkiego jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Murowanie, drewno i mocowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'u.machines': "Maszyny i narzędzia", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shapes': "Kształty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierkant': "kwadrat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechthoek': "prostokąt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.driehoek': "trójkąt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cirkel': "koło, okrąg", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kubus': "sześcian", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balk': "prostopadłościan (długi kształt jak pudełko)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.1': "Płytka jest kwadratem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.2': "Ten pokój jest prostokątem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.3': "Cegła ma kształt prostopadłościanu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.q': "Czy to kwadrat?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.a': "Nie, prostokąt. Jest dłuższy niż szeroki.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.shapes': "Sprawdź prostokąt dwiema liniami na ukos", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Pokój, podłoga albo rama to często prostokąt. Ale czy rogi są naprawdę proste? Jest łatwy sposób, żeby to sprawdzić. Zmierz od jednego rogu do rogu naprzeciwko. Potem zmierz między dwoma pozostałymi rogami. Czy obie długości są takie same? To rogi są dobre. Nie są takie same? To kształt jest trochę krzywy i płytki albo podłoga nie będą dobrze pasować. Powiedz przełożonemu, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Te dwa wymiary nie są takie same.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Mierzysz podłogę od rogu do rogu, w obie strony. Jeden wymiar jest dłuższy. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Mówisz przełożonemu, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Zaczynasz w rogu, będzie dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Mierzysz jeszcze raz tylko jeden bok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Dwie różne długości znaczą, że rogi nie są proste. Wtedy płytki albo deski nie pasują. Lepiej wiedzieć to, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Kąty i okrągłe kształty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoek': "kąt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graad': "stopień (°)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geodriehoek': "ekierka z kątomierzem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boog': "łuk", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cilinder': "walec", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parallellogram': "równoległobok", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.1': "Ten kąt ma dziewięćdziesiąt stopni.", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.2': "Zmierz kąt ekierką.", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.3': "Rura ma kształt walca.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.q': "Ile stopni ma ten kąt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.a': "Czterdzieści pięć. Połowa kąta prostego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles': "Sprawdź duży róg liczbami 3, 4 i 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Na budowie często sprawdzasz kąt prosty: ściana na podłodze, róg pokoju. Mały róg sprawdzasz kątownikiem albo ekierką. Na duży róg jest stary sposób. Zmierz 3 metry wzdłuż jednego boku i 4 metry wzdłuż drugiego boku, i zrób znak w obu miejscach. Czy od znaku do znaku jest dokładnie 5 metrów? To kąt ma 90 stopni. Mniejsze liczby też działają: 30, 40 i 50 centymetrów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Ten kąt nie jest prosty.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Musisz sprawdzić duży róg nowej ściany. Twój kątownik jest o wiele za mały. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Mierzysz 3, 4 i 5 metrów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Patrzysz na to z daleka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "I tak używasz małego kątownika.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Liczbami 3, 4 i 5 możesz dokładnie sprawdzić duży róg, tylko miarą zwijaną. Na oko róg może wyglądać dobrze, a i tak być krzywy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Długość, powierzchnia i objętość", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lengte': "długość", // nieuw, nalezen // nagelezen AI 28 nov
    'w.breedte': "szerokość", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoogte': "wysokość", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppervlakte': "powierzchnia (długość razy szerokość, w metrach kwadratowych)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhoud': "objętość (długość razy szerokość razy wysokość)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.centimeter': "centymetr", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.1': "Powierzchnia to długość razy szerokość.", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.2': "Objętość to długość razy szerokość razy wysokość.", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.3': "Dziesięć milimetrów to jeden centymetr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.q': "Ile metrów kwadratowych ma podłoga?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.a': "Cztery na pięć metrów, czyli dwadzieścia metrów kwadratowych.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size': "Policz, ile potrzebujesz, i dodaj trochę", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Ile płytek, ile farby, ile piasku? Liczysz to z powierzchni albo objętości. Powierzchnia: długość razy szerokość, w metrach kwadratowych. Objętość: długość razy szerokość razy wysokość, w metrach sześciennych. Mierz wszystko w tej samej jednostce: wszystko w metrach albo wszystko w centymetrach. Zapisz wymiary, nie trzymaj ich w głowie. Potem dodaj trochę więcej, na docinane kawałki i na błędy. Nie masz pewności? Poproś kolegę, żeby sprawdził twoje obliczenie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Zapisuję wymiary.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': { m: "Zmierzyłeś podłogę. Dziś musisz zamówić płytki. Co robisz?", f: "Zmierzyłaś podłogę. Dziś musisz zamówić płytki. Co robisz?", x: "Podłoga jest już zmierzona. Dziś musisz zamówić płytki. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Liczysz powierzchnię i dodajesz trochę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Zamawiasz dokładnie powierzchnię, ani jednej płytki więcej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Zgadujesz: przecież znasz tę podłogę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Zawsze docinasz kilka płytek, a kilka się łamie. Z małym zapasem nie musisz przerywać w połowie i zamawiać jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Malowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verf': "farba", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwast': "pędzel (szeroki pędzel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.penseel': "mały pędzelek (do rogów i krawędzi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roerstok': "mieszadełko, patyk do mieszania", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tape': "taśma malarska", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strijkvaatje': "kubełek malarski (mały pojemnik, który trzymasz w ręce przy malowaniu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.1': "Najpierw dobrze wymieszaj farbę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.2': "Oklej krawędź taśmą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.3': "Nalej trochę farby do kubełka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.q': "Który pędzel mam wziąć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.a': "Szeroki do ściany, mały pędzelek do rogów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint': "Dobrze wymieszaj i maluj od góry do dołu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "Farba, która długo stała, jest gęsta na dnie puszki. Dlatego najpierw dobrze ją wymieszaj mieszadełkiem, aż kolor będzie wszędzie taki sam. Nie maluj z dużej puszki: nalej trochę farby do kubełka i znowu zamknij puszkę. Wtedy farba zostaje dobra. Maluj od góry do dołu, żeby zacieki spadały na mokrą farbę i żeby można je było jeszcze rozprowadzić pędzlem. Szerokiego pędzla używaj do ściany, a małego pędzelka do rogów. Na koniec od razu umyj pędzle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Najpierw dobrze mieszam farbę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Otwierasz starą puszkę farby. Na górze farba jest rzadka, na dnie gęsta. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Najpierw dobrze ją mieszasz mieszadełkiem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Malujesz rzadką farbą z góry.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Dolewasz wody, aż będzie wszędzie rzadka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Część koloru jest na dnie puszki. Bez mieszania na ścianie będą plamy i pasy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Przygotowanie do malowania", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plamuurmes': "szpachelka (do wypełniania dziur)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuurpapier': "papier ścierny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verfkrabber': "skrobak do farby", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoffertje': "miotełka (mała szczotka do zmiatania kurzu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuren': "szlifować (papierem ściernym)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afplakken': "okleić (zakryć krawędź taśmą)", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.1': "Najpierw zeskrob starą farbę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.2': "Wyszlifuj drewno na gładko.", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.3': "Zmieć kurz miotełką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.q': "Mogę już malować?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.a': "Nie, najpierw szlifowanie i zaszpachlowanie dziury.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep': "Dobre malowanie zaczyna się przed farbą", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "Farba słabo trzyma się na brudzie, kurzu albo luźnej starej farbie. Dlatego najpierw zeskrob luźną farbę skrobakiem. Dziury wypełnij szpachlówką i szpachelką, i poczekaj, aż szpachlówka wyschnie. Potem wyszlifuj to na gładko. Po szlifowaniu zmieć kurz miotełką, także z krawędzi. Na końcu oklej to, co musi zostać czyste, na przykład okna i gniazdka. Przy szlifowaniu jest drobny pył: noś maskę przeciwpyłową i zapytaj, jaką. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Najpierw szlifowanie, potem malowanie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': { m: "Zeszlifowałeś drzwi. Jest na nich jeszcze kurz. Kolega chce teraz malować. Co robisz?", f: "Zeszlifowałaś drzwi. Jest na nich jeszcze kurz. Kolega chce teraz malować. Co robisz?", x: "Drzwi są już zeszlifowane. Jest na nich jeszcze kurz. Kolega chce teraz malować. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Najpierw zmiatasz kurz miotełką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Pozwalasz mu malować: farba przykryje kurz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Ścierasz kurz ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "Farba na kurzu słabo się trzyma. Później odpada płatami i wtedy trzeba zrobić całą pracę jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Murowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speciekuip': "kastra na zaprawę", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltroffel': "kielnia murarska", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baksteen': "cegła", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cement': "cement", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voegijzer': "fugówka (do wygładzania spoin między cegłami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handveger': "zmiotka, szczotka ręczna", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.1': "W kastrze jest jeszcze cement.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.2': "Wygładź spoinę fugówką.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.3': "Zmieć mur do czysta zmiotką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.q': "Ile cegieł ci jeszcze zostało?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.a': "Jeszcze jedna paleta. Wystarczy na dziś.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick': "Utrzymuj mur w czystości podczas pracy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "Zaprawa jest mokra, kiedy układasz cegły, i twardnieje w kilka godzin. Dlatego pracuj czysto. Zaprawę, która wychodzi ze spoiny, od razu zeskrob kielnią. Spoiny wygładzaj fugówką, kiedy zaprawa jest trochę sztywna, a nie wtedy, gdy jest jeszcze mokra. Potem zmieć mur zmiotką. Twardą zaprawę z przodu cegły bardzo trudno usunąć. Na koniec dnia przykryj górę muru, żeby deszcz nie wypłukał zaprawy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Wygładzam spoiny.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "Na koniec dnia z przodu cegieł jest zaprawa. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Zmiatasz ją teraz, zanim stwardnieje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Zostawiasz ją: wyczyścisz to w przyszłym tygodniu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Myjesz mur dużą ilością wody.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "Świeża zaprawa łatwo schodzi szczotką. Twarda zaprawa zostaje na cegle i wtedy mur nie wygląda dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Prosty mur", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltouw': "sznurek murarski (sznurek do prostej warstwy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klos': "uchwyt do sznurka (trzyma sznurek na rogu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lagenmaatlat': "łata z podziałką warstw (pokazuje wysokość każdej warstwy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.profiel': "profil narożny, kierownica (prosty słupek na końcu muru)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kop': "główka (krótki koniec cegły)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strek': "wozówka (długi bok cegły)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.1': "Naciągnij mocno sznurek murarski.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.2': "Profil narożny musi stać prosto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.3': "Połóż cegłę długim bokiem na zewnątrz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.q': "Jak wysoka musi być ta warstwa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.a': "Popatrz na łatę z podziałką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall': "Sznurek trzyma mur w linii prostej", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Murarz nie muruje na oko. Najpierw na obu końcach muru stoją prosto profile narożne. Między nimi mocno naciągasz sznurek murarski, na wysokości następnej warstwy. Każdą cegłę układaj wzdłuż sznurka, ale nie odpychaj sznurka. Łata z podziałką pokazuje, jak wysoka musi być każda warstwa. Często sprawdzaj poziomicą. Krzywą cegłę łatwo poprawić, kiedy zaprawa jest mokra, a bardzo trudno jutro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "Czy sznurek jest mocno naciągnięty?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "Sznurek murarski jest luźny i trochę zwisa pośrodku. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Najpierw mocno go naciągasz, potem pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "I tak układasz cegły pod nim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Układasz cegły na oko.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Luźny sznurek zwisa pośrodku, więc warstwa też zwisa. Mocno naciągnięty sznurek daje prostą warstwę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Praca z drewnem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handzaag': "piła ręczna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapzaag': "piła grzbietnica (mała piła ze sztywnym grzbietem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtbeitel': "dłuto do drewna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handschaaf': "strug ręczny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.timmermanshamer': "młotek ciesielski", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtenhamer': "pobijak (drewniany młotek)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.1': "Przytnij deskę na wymiar.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.2': "Zestrugaj krawędź na gładko.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.3': "Uderzaj pobijakiem w dłuto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.q': "Jakiej piły potrzebuję?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.a': "Grzbietnicy, do tego małego kawałka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood': "Za krótkiego już nie naprawisz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "Drewna, które jest ucięte za krótko, nie da się znowu przedłużyć. Dlatego mierz dwa razy i narysuj linię, zanim zaczniesz piłować. Piłuj obok linii, po stronie kawałka, którego nie potrzebujesz. Trzymaj drewno nieruchomo: na stole warsztatowym albo ściskiem, a nie na kolanie. Niech piła robi pracę, długimi, spokojnymi ruchami. Dłuto pchaj od siebie i od drugiej ręki. I dbaj o to, żeby dłuto i strug były ostre: tępe narzędzie łatwiej się ześlizguje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Zmierzę to jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': { m: "Musisz przyciąć deskę na wymiar. Zmierzyłeś ją raz, szybko. Co robisz?", f: "Musisz przyciąć deskę na wymiar. Zmierzyłaś ją raz, szybko. Co robisz?", x: "Musisz przyciąć deskę na wymiar. Jest zmierzona tylko raz, szybko. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Mierzysz jeszcze raz, potem rysujesz linię.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "Piłujesz teraz: pewnie jest dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "Piłujesz na oko, bez linii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Za długi kawałek możesz jeszcze raz przyciąć, za krótkiego nie naprawisz. Ponowne mierzenie to minuta; nowa deska to dużo więcej.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Trasowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelhaak': "kątownik (pokazuje kąt prosty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstekhaak': "kątownik do ukosów (45 stopni)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaaihaak': "kątownik nastawny (sam ustawiasz kąt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruishout': "znacznik stolarski (rysuje linię wzdłuż krawędzi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passer': "cyrkiel (rysuje koło)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftekenen': "trasować, zaznaczać (narysować, gdzie będziesz ciąć)", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.1': "Zaznacz linię kątownikiem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.2': "Ustaw kątownik nastawny na dobry kąt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.3': "Narysuj koło cyrklem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.q': "Czy kąt jest prosty?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.a': "Tak, kątownik pasuje dokładnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square': "Zaznaczaj od jednej prostej krawędzi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Zanim zaczniesz piłować albo wiercić, zaznaczasz gdzie. Używaj ostrego ołówka: gruba linia nie jest dokładna. Wybierz jedną prostą krawędź drewna i wszystko mierz od tej krawędzi. Grubą część kątownika mocno do niej przyciśnij i rysuj linię wzdłuż stali. Narysuj mały krzyżyk na kawałku, którego nie użyjesz. Potem piłujesz obok linii, po stronie krzyżyka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Najpierw to zaznaczę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Twój ołówek jest tępy i robi grubą linię. Chcesz zaznaczyć coś na desce. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Najpierw ostrzysz ołówek, potem rysujesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "I tak rysujesz linię, jest dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Zaznaczasz to paznokciem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Gruba linia ma kilka milimetrów szerokości. Wtedy nie wiesz, gdzie piłować, i kawałek nie jest dokładny.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Wiertarki i wkręty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accuboor': "wiertarko-wkrętarka akumulatorowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boormachine': "wiertarka (z kablem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bitje': "bit, końcówka do wkrętarki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plug': "kołek rozporowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroevendraaier': "śrubokręt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spijker': "gwóźdź", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.1': "Wywierć dziurę i włóż do niej kołek.", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.2': "Który bit pasuje do tego wkrętu?", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.3': "Wbij gwóźdź w drewno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.q': "Gdzie jest wkrętarka?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.a': "Na ładowarce, jest prawie naładowana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw': "Popatrz, zanim zaczniesz wiercić", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Zanim zaczniesz wiercić w ścianie, pomyśl, co jest za nią. Rury i kable często idą prosto w górę, w dół albo w bok od gniazdka albo włącznika. Zapytaj, gdzie są, albo sprawdź wykrywaczem. Wybierz wiertło tej samej wielkości co kołek i wywierć dziurę trochę głębszą niż kołek. Używaj dobrego bitu do wkrętu: zły bit się ześlizguje i niszczy łeb wkrętu. Przy wierceniu noś okulary ochronne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Mogę tu wiercić?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Musisz wywiercić dziurę tuż nad gniazdkiem. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Najpierw pytasz, gdzie idzie kabel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Wiercisz: tam nigdy nie ma kabla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Wiercisz powoli, wtedy jest bezpiecznie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Kabel często idzie prosto w górę od gniazdka. Wiercenie w kabel jest niebezpieczne, a naprawa to dużo pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Mocowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevestigen': "mocować, przymocować (mocno przymocować coś do ściany)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzetten': "dokręcić (kręcić, aż będzie mocno)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmen': "kleić", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbussleutel': "klucz imbusowy (klucz sześciokątny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisschroevendraaier': "śrubokręt krzyżakowy (końcówka w krzyżyk)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.platteschroevendraaier': "śrubokręt płaski", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.1': "Przymocuj półkę do ściany.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.2': "Dokręć śrubę kluczem imbusowym.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.3': "Weź śrubokręt płaski, nie krzyżakowy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.q': "Jak mam przymocować tę półkę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.a': "Dwoma kołkami i dwoma wkrętami.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix': "Mocno, ale nie za mocno", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Wkręt albo śruba musi być mocno dokręcona, ale nie za mocno. Kręcisz za mocno, a gwint się niszczy albo drewno pęka. Kręć, aż się już nie rusza, i wtedy przestań. Na wkrętarce najpierw przekręć pierścień z liczbami na małą liczbę. Półka na ścianie potrzebuje kołków, które pasują do ściany: do kamienia potrzebne są inne kołki niż do cienkiej ścianki z płyty. Klej potrzebuje czasu: dociśnij części do siebie, przytrzymaj je ściskiem i poczekaj, aż klej wyschnie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "Czy półka jest dobrze przymocowana?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': { m: "Skleiłeś dwa kawałki drewna. Kolega chce od razu tego używać. Co robisz?", f: "Skleiłaś dwa kawałki drewna. Kolega chce od razu tego używać. Co robisz?", x: "Dwa kawałki drewna są świeżo sklejone. Kolega chce od razu tego używać. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Mówisz: klej musi najpierw wyschnąć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Pozwalasz mu tego używać: klej jest szybki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Trzymasz to w rękach przez minutę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "Mokry klej jeszcze nie trzyma. Użyjesz tego za wcześnie, a części znowu się rozejdą. Wtedy musisz zaczynać od nowa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "Przy maszynie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedieningspaneel': "panel sterowania (przyciski i ekran maszyny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startknop': "przycisk start (zielony)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hendel': "dźwignia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscherming': "osłona maszyny (osłona na ruchomych częściach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sensor': "czujnik (widzi, czy coś tam jest)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaallamp': "lampa sygnalizacyjna (kolorowe lampki na górze maszyny)", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.1': "Naciśnij zielony przycisk start.", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.2': "Lampa sygnalizacyjna jest czerwona. Jest awaria.", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.3': "Nigdy nie zdejmuj osłony maszyny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.q': "Dlaczego maszyna ciągle się zatrzymuje?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.a': "Czujnik nie widzi dobrze kartonu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine': "Osłona zostaje na miejscu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Ruchome części maszyny mogą w niecałą sekundę wciągnąć rękę, rękaw albo włosy. Po to jest osłona. Nigdy jej nie zdejmuj i nigdy nie sięgaj za nią, kiedy maszyna pracuje. Osłona albo czujnik nie działa? Wtedy maszyna nie jest bezpieczna: zatrzymaj ją i powiedz kierownikowi zespołu. Coś się zablokowało? Najpierw zatrzymaj maszynę i dopilnuj, żeby nikt nie mógł jej włączyć, kiedy pracujesz. Jak to się robi, jest różne w każdej firmie: poproś o wyjaśnienie, zanim zaczniesz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "Osłona maszyny jest zepsuta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Karton utknął w maszynie, tuż za osłoną. Maszyna pracuje. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Najpierw zatrzymujesz maszynę, potem wołasz pomoc.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Szybko sięgasz ręką i wyciągasz karton.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Otwierasz osłonę, kiedy maszyna pracuje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Pracująca maszyna może wciągnąć twoją rękę, zanim zdążysz zareagować. Zatrzymanie jej to chwila; zraniona ręka to miesiące.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Mierzenie i sprawdzanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegschaal': "waga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meetklok': "czujnik zegarowy (mierzy bardzo małe różnice)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loep': "lupa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monster': "próbka (jeden produkt, który bierzesz do sprawdzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkeurbak': "pojemnik na braki (na produkty, które nie są dobre)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teller': "licznik (liczy produkty)", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.1': "Połóż produkt na wadze.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.2': "Ten produkt jest uszkodzony. Idzie do pojemnika na braki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.3': "Patrzę na etykietę przez lupę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.q': "Jak często mam brać próbkę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.a': "Jedną co godzinę. Zapisz to na liście.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect': "Zapisuj, co sprawdzasz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "W fabryce sprawdzasz produkty w czasie pracy: ważysz je, mierzysz je albo dokładnie je oglądasz. Każde sprawdzenie od razu zapisz na liście, z godziną. Nie później, z pamięci. Jeden produkt nie jest dobry? Włóż go do pojemnika na braki i dokładnie obejrzyj następne. Więcej produktów jest złych? Wtedy coś jest nie tak z maszyną. Od razu powiedz kierownikowi zespołu. Problem, który wcześnie się znajdzie, ratuje dużo produktów. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Więcej produktów jest złych.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "Waga pokazuje, że trzy produkty po kolei są za lekkie. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Od razu mówisz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Kładziesz je z powrotem na linię.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Nic nie mówisz: tak się zdarza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Trzy złe produkty po kolei wskazują na problem w maszynie. Im szybciej powiesz, tym mniej produktów się zmarnuje.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Pakowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verpakking': "opakowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krimpfolie': "folia termokurczliwa (folia, która od ciepła mocno się obkurcza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sealmachine': "zgrzewarka (zamyka opakowanie ciepłem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulmateriaal': "wypełniacz (poduszki powietrzne albo papier w kartonie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afbreekmes': "nożyk z łamanym ostrzem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tapepistool': "podajnik do taśmy (pistolet do taśmy)", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.1': "Włóż wypełniacz do kartonu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.2': "Zamknij karton podajnikiem do taśmy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.3': "Zgrzewarka jest gorąca. Uwaga!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.q': "Ile produktów idzie do jednego kartonu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.a': "Dwanaście. Tak jest napisane na liście.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing': "Tnij od siebie", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Pakowanie to szybka praca, a nożyk z łamanym ostrzem jest bardzo ostry. Zawsze tnij od siebie i od drugiej ręki. Po każdym cięciu chowaj ostrze, także wtedy, gdy odkładasz nożyk na chwilę. Tępy kawałek ostrza odłamuj ostrożnie i wyrzucaj go do pojemnika na stare ostrza, a nie do zwykłego kosza. Zgrzewarka i opalarka do folii termokurczliwej robią się bardzo gorące: nie dotykaj gorących części. I sprawdzaj każdy karton: dobry produkt, dobra liczba i prosto naklejona etykieta. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Najpierw chowam ostrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Na chwilę kładziesz nożyk na stole. Ostrze jest jeszcze wysunięte. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Najpierw chowasz ostrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Zostawiasz go: zaraz znowu będzie ci potrzebny.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Wkładasz go tak do kieszeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Wysunięte ostrze na stole albo w kieszeni może skaleczyć ciebie albo kolegę. Schowanie go trwa sekundę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Konserwacja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persluchtpistool': "pistolet na sprężone powietrze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steeksleutel': "klucz płaski", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliekannetje': "oliwiarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeerpistool': "smarownica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekbak': "taca na olej (łapie cieknący olej)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.poetsdoek': "czyściwo, szmata do czyszczenia", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.1': "Cieknie olej. Podstaw pod to tacę na olej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.2': "Wytrzyj olej szmatą do czyszczenia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.3': "Nigdy nie kieruj pistoletu na sprężone powietrze na nikogo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.q': "Kiedy smarujemy maszynę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.a': "W każdy poniedziałek, przed pierwszą zmianą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep': "Czysta maszyna pokazuje swoje problemy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "Mała konserwacja to często część pracy: wycieranie, oliwienie i smarowanie. Rób to tylko wtedy, gdy maszyna jest wyłączona, i gdy wiesz, jak to robić. Czystą maszynę łatwo sprawdzić: od razu widzisz wyciek albo luźną część. Olej na podłodze jest śliski. Podstaw tacę pod wyciek, wytrzyj podłogę i powiedz kierownikowi zespołu. Zaolejone szmaty wyrzucaj do specjalnego pojemnika. Nigdy nie kieruj pistoletu na sprężone powietrze na człowieka i nigdy nie czyść nim ubrania ani skóry. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "Z maszyny cieknie olej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Widzisz małą kałużę oleju pod maszyną. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Podstawiasz tacę na olej i zgłaszasz to.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Zostawiasz to: to tylko trochę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Kładziesz na to trochę papieru i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Wyciek robi się coraz większy, a na oleju na podłodze ludzie się ślizgają. Jeśli znajdziesz go wcześnie, naprawa jest mała.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Elektryka, rury i metal", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wiring': "Podłączanie przewodów", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draad': "przewód (jeden przewód w kablu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stopcontact': "gniazdko (w ścianie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schakelaar': "włącznik (do światła)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lasklem': "szybkozłączka (łączy przewody)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.striptang': "ściągacz izolacji", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabelgoot': "korytko kablowe (kanał na kable)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.1': "Zdejmij z przewodu jeden centymetr izolacji.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.2': "Zamocuj przewody w szybkozłączce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.3': "Kable idą do korytka kablowego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.q': "Który przewód idzie gdzie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.a': "Brązowy do brązowego, niebieski do niebieskiego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring': "Kolory mówią, do czego jest przewód", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "W budynku przewody mają stałe kolory. Brązowy (czasem czarny albo szary) doprowadza prąd. Niebieski prowadzi go z powrotem. Żółto-zielony to uziemienie: chroni ludzi i nigdy nie używa się go do niczego innego. Łącz ten sam kolor z tym samym kolorem. Zdejmuj tylko tyle izolacji, ile wchodzi do złączki: goła miedź nie może wystawać. Wciśnij przewód, a potem lekko za niego pociągnij, żeby sprawdzić, czy dobrze siedzi. Nie wiesz, który przewód jest który? Przerwij pracę i zapytaj.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "Jaki kolor ma uziemienie?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Podłączasz lampę. Ze złączki wystaje kawałek miedzi. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Skracasz go i podłączasz jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Zostawiasz tak: lampa działa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Owijasz go kawałkiem taśmy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "Goła miedź poza złączką może czegoś dotknąć. To może spowodować porażenie prądem albo zwarcie, także po kilku miesiącach.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Bezpieczne mierzenie i praca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.multimeter': "multimetr (mierzy prąd)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningzoeker': "próbnik napięcia (śrubokręt z małą lampką)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterkast': "skrzynka z bezpiecznikami", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zekering': "bezpiecznik (wyłącza prąd, kiedy coś jest nie tak)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hangslot': "kłódka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aardedraad': "przewód uziemiający (żółto-zielony)", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.1': "Bezpiecznik się wyłączył.", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.2': "Załóż kłódkę na wyłącznik.", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.3': "Najpierw zmierz multimetrem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.q': "Czy mogę otworzyć skrzynkę z bezpiecznikami?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.a': "Nie, to robi elektryk.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing': "Wyłączone, zablokowane, zmierzone", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Zanim zaczniesz pracę przy elektryce, zrób trzy kroki. Wyłącz: właściwy bezpiecznik w skrzynce z bezpiecznikami, nie tylko włącznik na ścianie. Zablokuj: załóż na niego swoją kłódkę i trzymaj klucz przy sobie, żeby nikt nie mógł znowu włączyć prądu. Zmierz: sprawdź próbnikiem napięcia albo multimetrem, że naprawdę nie ma prądu. Dopiero wtedy zaczynasz. Bezpiecznik ciągle się wyłącza? Nie włączaj go raz za razem: powiedz przełożonemu. Pracuj przy elektryce tylko wtedy, gdy ktoś ci na to pozwolił. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Nie ma już na tym prądu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': { m: "Wyłączyłeś bezpiecznik. Kolega mówi: „Zaczynaj, jest wyłączony.” Co robisz?", f: "Wyłączyłaś bezpiecznik. Kolega mówi: „Zaczynaj, jest wyłączony.” Co robisz?", x: "Bezpiecznik jest wyłączony. Kolega mówi: „Zaczynaj, jest wyłączony.” Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Zakładasz kłódkę i najpierw mierzysz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Zaczynasz: kolega to wie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Szybko dotykasz przewodu, żeby sprawdzić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Czasem wyłączony jest zły bezpiecznik albo ktoś go znowu włącza. Kłódka i pomiar pokazują, że jest naprawdę bezpiecznie.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Rury i woda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buis': "rura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koppeling': "złączka (łączy dwie rury)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijpsnijder': "obcinak do rur", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpomptang': "szczypce nastawne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiter': "zawór odcinający (zamyka wodę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teflontape': "taśma teflonowa (biała taśma na gwint rury)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.1': "Zakręć zawór odcinający.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.2': "Utnij rurę obcinakiem do rur.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.3': "Owiń gwint taśmą teflonową.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.q': "Czy złączka jeszcze cieknie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.a': "Trochę. Dokręcę ją jeszcze mocniej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes': "Najpierw zakręć wodę i przygotuj wiadro", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Zanim otworzysz rurę z wodą, zakręć zawór odcinający. Potem odkręć kran niżej, żeby rura się opróżniła. Pod miejscem, w którym pracujesz, postaw wiadro i połóż szmatę. Rurę miedzianą tnij obcinakiem do rur, nie piłą: koniec zostaje okrągły i czysty. Dokręcaj złączkę mocno, ale nie za mocno. Kiedy skończysz, powoli odkręć wodę i szukaj kropli. Z małego wycieku, który zostawisz, robią się szkody od wody.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "Czy woda jest zakręcona?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': { m: "Założyłeś nową złączkę. Odkręcasz wodę. Co minutę spada jedna mała kropla. Co robisz?", f: "Założyłaś nową złączkę. Odkręcasz wodę. Co minutę spada jedna mała kropla. Co robisz?", x: "Nowa złączka jest założona. Odkręcasz wodę. Co minutę spada jedna mała kropla. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Zakręcasz wodę i dokręcasz złączkę albo robisz ją od nowa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Zostawiasz tak: to tylko jedna kropla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Podstawiasz wiadro i idziesz do domu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Jedna kropla na minutę to wiele litrów na tydzień. Woda może zniszczyć podłogę albo sufit piętro niżej.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Obróbka metalu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankschroef': "imadło (mocno trzyma część na stole warsztatowym)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vijl': "pilnik (do ręcznego wygładzania metalu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ijzerzaag': "piłka do metalu (piła do cięcia metalu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kolomboormachine': "wiertarka kolumnowa (duża wiertarka na stojaku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draadtap': "gwintownik (nacina gwint w otworze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.braam': "zadzior (ostra krawędź po cięciu metalu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.1': "Zamocuj metal w imadle.", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.2': "Spiłuj zadzior.", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.3': "Trzymaj ręce z dala od wiertła.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.q': "Dlaczego krawędź jest taka ostra?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.a': "Jest na niej jeszcze zadzior.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork': "Zamocuj, nigdy nie trzymaj w ręce", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "Przy wiertarce kolumnowej nigdy nie trzymaj małej części w ręce. Wiertło może ją złapać i bardzo szybko nią obrócić. Zamocuj ją w imadle. Zwiąż długie włosy i nie noś rękawic przy obracającym się wiertle: może wciągnąć rękawicę. Noś okulary ochronne. Po piłowaniu albo wierceniu metal ma zadzior: ostrą krawędź. Spiłuj go, zanim weźmiesz część do ręki albo komuś ją podasz. Wióry metalowe zmiataj szczotką, nie ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Najpierw to zamocuję.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Musisz wywiercić otwór w małym kawałku metalu. Imadło jest na innym stole. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Przynosisz imadło i mocujesz w nim kawałek.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "Mocno trzymasz go ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Zakładasz rękawice i trzymasz go.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Wiertło może złapać małą część i nią zakręcić. Wtedy uderza ona w twoją rękę. W imadle się nie rusza.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Montaż", // nieuw, nalezen // nagelezen AI 28 nov
    'l.assembly': "Na linii montażowej", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkinstructie': "instrukcja stanowiskowa (kartka z krokami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenbak': "pojemnik na części", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mal': "przyrząd montażowy (trzyma część we właściwym miejscu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolbaan': "przenośnik rolkowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.montagetafel': "stół montażowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetpedaal': "pedał nożny (przełącznik, który naciskasz stopą)", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.1': "Najpierw przeczytaj instrukcję stanowiskową.", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.2': "Pojemnik na części jest prawie pusty.", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.3': "Włóż część do przyrządu montażowego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.q': "Który krok jest teraz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.a': "Krok czwarty. Popatrz do instrukcji stanowiskowej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly': "Rób kroki zawsze w tej samej kolejności", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "Na linii montażowej każdy krok ma swoje miejsce i swoją kolejność. Pokazuje je instrukcja stanowiskowa, często ze zdjęciami. Rób kroki za każdym razem w tej samej kolejności, także wtedy, gdy myślisz, że znasz szybszy sposób. Inna kolejność może dać produkt, który dobrze wygląda, ale nie działa. Pojemnik jest prawie pusty? Powiedz to na czas, żeby linia nie stanęła. Widzisz krok, który można zrobić lepiej? Powiedz kierownikowi zespołu: wtedy można to zmienić dla wszystkich.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Potrzebuję nowych części.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': { m: "Znalazłeś szybszy sposób na krok trzeci. W instrukcji stanowiskowej jest napisane coś innego. Co robisz?", f: "Znalazłaś szybszy sposób na krok trzeci. W instrukcji stanowiskowej jest napisane coś innego. Co robisz?", x: "Znasz szybszy sposób na krok trzeci. W instrukcji stanowiskowej jest napisane coś innego. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Najpierw pytasz kierownika zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "Od teraz robisz to po swojemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Uczysz kolegów swojego sposobu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "Kolejność często ma powód, którego nie widzisz. Jeśli twój sposób jest lepszy, można go wprowadzić dla wszystkich.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Skręcanie i łączenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroefmachine': "wkrętarka (wisi nad linią)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.momentsleutel': "klucz dynamometryczny (klika, kiedy śruba jest dokręcona wystarczająco mocno)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tiewrap': "opaska zaciskowa (do kabli)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitring': "podkładka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klinknagel': "nit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.popnageltang': "nitownica", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.1': "Dokręć śrubę kluczem dynamometrycznym.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.2': "Nie zapomnij o podkładce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.3': "Zwiąż kable opaską zaciskową.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.q': "Jak mocno trzeba dokręcić tę śrubę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.a': "Aż klucz dynamometryczny kliknie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening': "Kliknięcie wystarczy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Klucz dynamometryczny klika, kiedy śruba jest dokręcona wystarczająco mocno. Przy kliknięciu przestań: nie kręć dalej. Za mocno dokręcona śruba może pęknąć albo zniszczyć część, a za luźna może odpaść. Wkrętarka działa tak samo: sama się zatrzymuje. Wkładaj każdą podkładkę na swoje miejsce: brakującą podkładkę później trudno zobaczyć. Licz swoje śruby. Jedna zostaje albo brakuje ci jednej? Wtedy coś jest nie tak: powiedz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Została jedna śruba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Twój klucz dynamometryczny kliknął. Śruba wydaje ci się jeszcze trochę luźna. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Przerywasz i pytasz kierownika zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Dokręcasz ją jeszcze trochę ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Bierzesz dłuższy klucz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "Kliknięcie jest ustawione na właściwą siłę. Jeśli coś wydaje się nie tak, może trzeba sprawdzić klucz. Dalsze kręcenie może złamać śrubę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Podnoszenie i przenoszenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.takel': "wciągnik (podnosi ciężkie części na łańcuchu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijshaak': "hak do podnoszenia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilhulp': "podnośnik podciśnieniowy (trzyma część przyssawką)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenkar': "wózek na części", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaitafel': "stół obrotowy (obracasz część, a nie siebie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolcontainer': "wózek klatkowy (wysoka klatka na kółkach)", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.1': "Nie podnoś tego w pojedynkę. Użyj wciągnika.", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.2': "Czy hak jest dobrze zamknięty?", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.3': "Pchaj wózek na części, nie ciągnij go.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.q': "Czy mogę stać pod wciągnikiem?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.a': "Nie, nigdy pod wiszącym ładunkiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling': "Niech ciężką pracę robi wciągnik", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Ciężkie części podnosi się wciągnikiem albo innym urządzeniem do podnoszenia, a nie plecami. Zanim zaczniesz podnosić, sprawdź hak: zapadka musi się zamykać. Podnoś powoli i trzymaj ręce i stopy z dala od ładunku. Nigdy nie stój i nie chodź pod wiszącym ładunkiem. Do obracania części używaj stołu obrotowego: wtedy nie musisz skręcać pleców. Wózek albo wózek klatkowy pchaj: widzisz, gdzie idziesz, a plecy mają mniej pracy. Używaj wciągnika tylko wtedy, gdy wiesz, jak to robić. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Używam wciągnika.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Część jest bardzo ciężka. Wciągnik jest zajęty jeszcze przez dziesięć minut. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Czekasz na wciągnik.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': "Szybko podnosisz ją w pojedynkę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "Ciągniesz ją po podłodze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Ciężka część może w jedną sekundę uszkodzić ci plecy. Dziesięć minut czekania jest lepsze niż miesiące bólu.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "Kontrola końcowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.typeplaatje': "tabliczka znamionowa (mała metalowa tabliczka z typem i numerem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempel': "pieczątka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.testbank': "stanowisko testowe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeursticker': "naklejka OK (zielona naklejka: produkt jest dobry)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kras': "rysa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.barst': "pęknięcie", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.1': "Tabliczka znamionowa jest krzywo przymocowana.", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.2': "Na tym produkcie jest rysa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.3': "Bez naklejki OK to nie wychodzi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.q': "Czy ten produkt jest dobry?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.a': "Nie, jest w nim pęknięcie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck': "Naklejkę dostają tylko dobre produkty", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "Kontrola końcowa to ostatnia szansa, żeby znaleźć błąd, zanim znajdzie go klient. Sprawdź każdy punkt na liście, także wtedy, gdy jest dużo pracy. Małą rysę albo pęknięcie łatwo przeoczyć: patrz przy dobrym świetle i z więcej niż jednej strony. Naklejkę OK albo pieczątkę daj dopiero wtedy, gdy każdy punkt jest dobry. Masz wątpliwości? Odłóż produkt na bok i zapytaj. Błąd znaleziony tutaj kosztuje mało, a błąd u klienta kosztuje dużo. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Ten produkt idzie na bok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Na linii jest dużo pracy. Widzisz małą rysę na produkcie, pod etykietą. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Odkładasz go na bok i mówisz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Naklejasz naklejkę: rysa jest mała.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Przesuwasz etykietę na rysę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Mała rysa może być znakiem problemu na linii. Ukrycie jej tylko przenosi problem do klienta.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Uprawa, sortowanie i szklarnia", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sowing': "Siew i sadzonki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaad': "nasiona", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaaibak': "taca do wysiewu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stek': "sadzonka (kawałek rośliny, który wypuszcza nowe korzenie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potgrond': "ziemia doniczkowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kweekpot': "doniczka do uprawy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gieter': "konewka", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.1': "Włóż dwa nasiona do każdej komórki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.2': "Włóż sadzonkę do ziemi doniczkowej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.3': "Daj młodym roślinom trochę wody.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.q': "Jak głęboko ma iść nasiono?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.a': "Pół centymetra. Nie głębiej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing': "Małe rośliny potrzebują delikatnej ręki", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Młode rośliny są słabe. Sadzonkę albo siewkę trzymaj za liść, nie za łodygę: liść odrośnie, złamana łodyga nie. Dociskaj ziemię delikatnie, nie mocno. Podlewaj powoli, drobnym strumieniem, żeby nie wypłukać nasion. Pracuj czystymi rękami i z czystymi tacami: młode rośliny łatwo chorują. Na każdej tacy napisz datę i rodzaj rośliny, żeby każdy wiedział, co w niej jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Trzymam ją za liść.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Musisz przesadzić małą siewkę do doniczki. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Delikatnie trzymasz ją za liść.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Wyciągasz ją za łodygę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Wyciskasz ją razem z ziemią.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Liść może odrosnąć. Złamana łodyga nie, i wtedy roślina umiera.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Sortowanie i pakowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tros': "kiść (pomidory na jednej łodyżce)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bakje': "pojemnik (małe pudełko na owoce)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sorteermachine': "sortownica, maszyna do sortowania", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketpistool': "metkownica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurenkaart': "wzornik kolorów (pokazuje, jak dojrzały ma być owoc)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomatenschaar': "nożyczki do zbioru", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.1': "Ostrożnie włóż kiście do skrzynki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.2': "Ten pomidor jest za dojrzały. Idzie na bok.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.3': "Spójrz na wzornik kolorów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.q': "Czy ten pomidor jest wystarczająco dojrzały?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.a': "Nie, jeszcze za zielony. Zostaw go na roślinie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting': "Liczy się każdy owoc", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "Owoce i warzywa łatwo się obijają. Odkładaj je, nie upuszczaj ich i nie rzucaj. Dziś nie widzisz obicia, ale jutro owoc jest miękki i brązowy. Patrz na wzornik kolorów, żeby wiedzieć, który kolor idzie gdzie. Uszkodzony albo zgniły owoc odłóż na bok: jeden zły owoc w pojemniku może zepsuć pozostałe. Utrzymuj pojemniki i skrzynki w czystości i nigdy nie stawiaj ich na podłodze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Ten jest uszkodzony.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Pakujesz pojemniki. Jeden pomidor ma miękką brązową plamę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Odkładasz go na bok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Chowasz go na dnie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "I tak go pakujesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Zgniły pomidor sprawia, że inne gniją szybciej. Klient go znajduje i cały pojemnik wraca.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "Szklarnia i jej klimat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buisrailkar': "wózek na rurach (jeździ po rurach grzewczych)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.druppelaar': "kroplownik (daje wodę kropla po kropli)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luchtraam': "wietrznik dachowy (okno w dachu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasscherm': "ekran szklarniowy (tkanina pod dachem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ventilator': "wentylator", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermometer': "termometr", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.1': "Przejedź wózkiem na rurach do końca rzędu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.2': "Kroplownik jest luźny.", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.3': "Jest ciepło. Wietrzniki się otwierają.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.q': "Dlaczego w szklarni jest tak ciepło?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.a': "Ekran jest zamknięty, wietrzniki też.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse': "Klimat zostaw komputerowi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "W szklarni klimat ustawia komputer: wietrzniki, ekran, ogrzewanie i wodę. Nie otwieraj wietrznika i nie zmieniaj ustawień na własną rękę. Widzisz coś dziwnego, na przykład kroplownik, który cieknie, albo wietrznik, który się nie zamyka? Powiedz przełożonemu. Wózek na rurach jeździ po rurach grzewczych: używaj go tylko wtedy, gdy wiesz, jak to robić. Trzymaj stopy na platformie i nigdy nie dotykaj rur: mogą być gorące. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Ten kroplownik cieknie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Kroplownik jest luźny. Woda leci na podłogę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Wkładasz go z powrotem i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Zostawiasz to: to tylko woda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Zakręcasz wodę dla całego rzędu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Luźny kroplownik marnuje wodę, roślina dostaje jej za mało, a mokra podłoga jest śliska.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Szkodniki i czysta praca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luis': "mszyca (mały zielony owad na roślinach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vangplaat': "tablica lepowa (żółta karta, która łapie owady)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rups': "gąsienica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluipwesp': "osa pasożytnicza (mała osa, która zabija szkodniki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schimmel': "pleśń", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontsmettingsmat': "mata dezynfekcyjna (stajesz na niej przy drzwiach)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.1': "Na tym liściu są mszyce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.2': "Powieś tablicę lepową nad roślinami.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.3': "Przejdź po macie dezynfekcyjnej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.q': "Mogę zabić tę osę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.a': "Nie, to osa pasożytnicza. Ona nam pomaga.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests': "Nie przenoś chorób z rzędu do rzędu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Choroba albo szkodnik szybko się rozprzestrzenia w szklarni. Możesz go przenieść na rękach, ubraniu i narzędziach. Dlatego przy każdych drzwiach przechodź po macie dezynfekcyjnej i myj ręce, kiedy idziesz do innej części szklarni. Zaczynaj pracę w zdrowych rzędach, a kończ w chorych. Widzisz na roślinie owady, plamy albo pleśń? Nie dotykaj jej, ale powiedz przełożonemu, gdzie to jest. Niektóre owady w szklarni są pomocnikami: zostaw je w spokoju. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Tu jest pleśń.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Widzisz szarą pleśń na kilku roślinach w swoim rzędzie. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Mówisz przełożonemu, gdzie to jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Obrywasz złe liście i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Nic nie mówisz: to tylko kilka roślin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "Pleśń szybko się rozprzestrzenia. Przełożony wie, co robić i od czego zacząć.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Opony, olej i hamulce", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tyres': "Wymiana opon", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wielbout': "śruba koła", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagmoersleutel': "klucz udarowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenspanningsmeter': "manometr do opon", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenprofiel': "bieżnik opony (rowki w oponie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.velg': "felga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenwisselaar': "montażownica do opon (maszyna do zdejmowania opony z felgi)", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.1': "Dokręć śruby koła na krzyż.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.2': "Bieżnik opony jest za niski.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.3': "Zmierz ciśnienie manometrem do opon.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.q': "Te opony trzeba zdjąć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.a': "Tak, bieżnika prawie już nie ma.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres': "Wkręć ręką, dokręć kluczem dynamometrycznym", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Klucz udarowy jest szybki i bardzo mocny. Używaj go do odkręcania śrub koła, ale nie do mocnego dokręcania. Najpierw wkręć śruby ręką. Potem dokręć je na krzyż kluczem dynamometrycznym, z siłą podaną dla tego samochodu. Koło, które nie jest dobrze dokręcone, może odpaść w czasie jazdy. Sprawdź bieżnik i ciśnienie każdej opony, którą bierzesz do ręki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Najpierw wkręcam je ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Zakładasz koło z powrotem. Kolega mówi: „Użyj klucza udarowego, tak jest szybciej.” Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Wkręcasz je ręką, potem używasz klucza dynamometrycznego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Mocno dokręcasz je kluczem udarowym.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Wkręcasz je ręką i tak zostawiasz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Klucz udarowy może dokręcić śrubę za mocno albo za słabo. Tylko klucz dynamometryczny daje właściwą siłę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Wymiana oleju", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliefilter': "filtr oleju", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliepeilstok': "bagnet oleju (pokazuje, ile jest oleju)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opvangbak': "wanna na olej (łapie stary olej)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trechter': "lejek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftapplug': "korek spustowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olievat': "beczka na olej", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.1': "Postaw wannę na olej pod silnikiem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.2': "Odkręć korek spustowy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.3': "Spójrz na bagnet oleju.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.q': "Ile oleju trzeba wlać?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.a': "Cztery litry. Potem spójrz na bagnet.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange': "Stary olej do beczki, nie do kanalizacji", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "Stary olej szkodzi wodzie i glebie. Trochę oleju może zabrudzić dużo wody. Dlatego zbierz cały stary olej do wanny na olej i przelej go do beczki na stary olej. Nigdy nie wylewaj go do kanalizacji ani do zlewu. Stare filtry i zaolejone szmaty idą do osobnego pojemnika. Gorący olej może poparzyć skórę: najpierw pozwól silnikowi trochę ostygnąć i noś rękawice. Rozlany olej od razu sprzątnij: olej na podłodze jest śliski. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Gdzie idzie stary olej?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "Wanna na olej jest pełna starego oleju. Beczka stoi na drugim końcu warsztatu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Ostrożnie zanosisz ją do beczki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Wylewasz olej do kanalizacji na zewnątrz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Zostawiasz ją pod samochodem na później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "Stary olej w kanalizacji brudzi wodę. Pełną wannę pod samochodem ktoś przewróci nogą.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Hamulce i światła", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remschijf': "tarcza hamulcowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remblok': "klocek hamulcowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koplamp': "reflektor (przednie światło)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remvloeistof': "płyn hamulcowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remklauw': "zacisk hamulcowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlamp': "tylne światło", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.1': "Klocki hamulcowe są zużyte.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.2': "Sprawdź płyn hamulcowy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.3': "Lewe tylne światło nie działa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.q': "Tarczę hamulcową też trzeba wymienić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.a': "Tak, jest za cienka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes': "Hamulce: sprawdź dwa razy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Hamulce ratują ludziom życie. Dlatego pracuj spokojnie i sprawdzaj swoją pracę dwa razy. Po nowych klockach albo tarczach naciśnij kilka razy pedał hamulca, zanim samochód ruszy: pierwsze naciśnięcie często idzie za głęboko. Płyn hamulcowy szkodzi skórze i lakierowi: noś rękawice i od razu wycieraj krople. Nie wydmuchuj pyłu z hamulców sprężonym powietrzem: czyść go zmywaczem do hamulców i szmatką. Zanim samochód wyjedzie, sprawdź każde światło, także światła hamowania.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Kilka razy naciskam pedał hamulca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': { m: "Założyłeś nowe klocki hamulcowe. Samochód musi wyjechać na zewnątrz. Co robisz?", f: "Założyłaś nowe klocki hamulcowe. Samochód musi wyjechać na zewnątrz. Co robisz?", x: "Nowe klocki hamulcowe są już założone. Samochód musi wyjechać na zewnątrz. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Kilka razy naciskasz pedał hamulca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Od razu wyjeżdżasz nim na zewnątrz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Wypychasz go bez sprawdzania.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Po nowych klockach pedał za pierwszym razem może wejść za głęboko. Wtedy samochód się nie zatrzyma.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Odczyt błędów i zlecenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diagnosecomputer': "tester diagnostyczny (odczytuje błędy samochodu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingslampje': "kontrolka ostrzegawcza (na desce rozdzielczej)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkorder': "zlecenie (co trzeba zrobić przy samochodzie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kentekenplaat': "tablica rejestracyjna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.autosleutel': "kluczyk do samochodu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoelhoes': "pokrowiec na fotel (chroni fotel przed brudem)", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.1': "Podłącz tester diagnostyczny.", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.2': "Kontrolka ostrzegawcza się świeci.", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.3': "Połóż pokrowiec na fotelu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.q': "Co trzeba zrobić przy tym samochodzie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.a': "Spójrz na zlecenie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis': "Traktuj samochód jak swój", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Klient daje ci swój samochód i swój kluczyk. Dbaj o jedno i drugie. Zanim wsiądziesz, załóż pokrowiec na fotel i połóż matę na podłodze. Rób tylko to, co jest w zleceniu. Znajdujesz coś innego, co jest nie tak? Zapisz to i powiedz przełożonemu: decyduje klient. Trzymaj kluczyk na jego miejscu, z jego etykietą. Nie używaj radia, telefonu ani rzeczy w samochodzie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Tego nie ma w zleceniu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Wymieniasz olej. Jedna opona jest prawie łysa. Nie ma tego w zleceniu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Zapisujesz to i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Od razu wymieniasz oponę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Nic nie mówisz: to nie twoja praca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "Klient decyduje, co się robi i za co płaci. Ale musi wiedzieć, że opona jest niebezpieczna.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Koszenie i przycinanie", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mowing': "Koszenie trawy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gras': "trawa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maaien': "kosić (ścinać trawę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grasmaaier': "kosiarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zitmaaier': "kosiarka samojezdna (kosiarka, na której siedzisz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bosmaaier': "kosa spalinowa (kosiarka na długim drążku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gelaatsscherm': "osłona twarzy", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.1': "Najpierw skoś trawę wzdłuż krawędzi.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.2': "Trawa jest za mokra. Skosimy jutro.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.3': "Załóż osłonę twarzy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.q': "Mogę wziąć kosiarkę samojezdną?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.a': "Tak, ale najpierw zbierz kamienie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing': "Kamienie lecą daleko", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.b': "Kosiarka albo kosa spalinowa może wyrzucić kamień bardzo daleko i bardzo mocno. Dlatego najpierw przejdź po trawie i zbierz kamienie, szkło i gałęzie. Noś osłonę twarzy albo okulary ochronne, ochronniki słuchu i obuwie ochronne. Trzymaj innych ludzi daleko od siebie. Ktoś podchodzi blisko? Zatrzymaj maszynę. Nigdy nie wkładaj ręki pod kosiarkę, kiedy silnik pracuje: wyłącz go i poczekaj, aż nóż przestanie się kręcić. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.p': "Proszę zachować odstęp.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.s': "Pracujesz kosą spalinową. W twoją stronę idzie mężczyzna z psem. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o1': "Zatrzymujesz maszynę, aż on przejdzie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o2': "Pracujesz dalej: on cię widzi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o3': "Odwracasz się od niego i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.w': "Kamień z kosy spalinowej może mocno kogoś zranić, także z daleka.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pruning': "Przycinanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeien': "przycinać (obcinać gałęzie rośliny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeischaar': "sekator", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tak': "gałąź", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struik': "krzew, krzak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boom': "drzewo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeizaag': "piłka do gałęzi", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.1': "Przytnij krzaki wzdłuż ścieżki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.2': "Ta gałąź jest martwa. Odetnij ją piłą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.3': "Połóż gałęzie na kupkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.q': "Które gałęzie trzeba obciąć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.a': "Tylko martwe gałęzie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning': "Czyste cięcie goi się najlepiej", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.b': "Przycinaj ostrym, czystym sekatorem. Czyste cięcie szybko się goi, a poszarpana gałąź choruje. Tnij tuż nad pąkiem albo boczną gałęzią i nie zostawiaj długiego kawałka. Najpierw obetnij martwe i złamane gałęzie. Trzymaj drugą rękę z dala od ostrzy. Noś rękawice: niektóre rośliny mają kolce albo powodują zaczerwienienie skóry. Po pracy wyczyść sekator.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.p': "Gdzie mam ciąć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.s': "Twój sekator jest tępy. Szarpie gałęzie. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o1': "Prosisz o ostry sekator.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o2': "Mocniej ciągniesz za gałąź.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o3': "Pracujesz dalej: to tylko krzak.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.w': "Tępy sekator szarpie gałąź. Roślina choruje, a ty musisz się bardziej męczyć.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hedge': "Strzyżenie żywopłotu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heg': "żywopłot", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heggenschaar': "nożyce do żywopłotu (maszyna, która tnie żywopłot)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruiwagen': "taczka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hark': "grabie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeiafval': "odpady zielone (ścięte gałęzie i liście)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeil': "plandeka (duża plastikowa płachta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.1': "Połóż plandekę pod żywopłotem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.2': "Przytnij żywopłot ładnie i prosto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.3': "Wywieź odpady zielone taczką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.q': "Jak wysoki ma zostać żywopłot?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.a': "Do linki. Nie niżej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge': "Najpierw szukaj gniazd", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.b': "Wiosną i latem ptaki robią gniazda w żywopłotach i krzakach. Gniazda, których ptaki używają, są chronione. Dlatego zanim zaczniesz ciąć, zajrzyj do żywopłotu. Widzisz gniazdo z jajkami albo młodymi ptakami? Nie tnij w tym miejscu i powiedz przełożonemu. Trzymaj nożyce do żywopłotu obiema rękami. Stój pewnie na ziemi albo na dobrej drabinie, nigdy na krześle ani na wiadrze. Trzymaj kabel za sobą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.p': "Tu jest gniazdo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.s': "W maju przycinasz żywopłot. Widzisz gniazdo z młodymi ptakami. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o1': "Przerywasz w tym miejscu i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o2': "Ostrożnie tniesz dookoła gniazda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o3': "Wyjmujesz gniazdo i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.w': "Gniazda, których ptaki używają, są chronione. Przełożony decyduje, co się stanie z tą częścią żywopłotu.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.chainsaw': "Piła łańcuchowa i dmuchawa do liści", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kettingzaag': "piła łańcuchowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stam': "pień (drzewa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaagbroek': "spodnie ochronne do piły (zatrzymują łańcuch)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladblazer': "dmuchawa do liści", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladeren': "liście", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jerrycan': "kanister (na paliwo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.1': "Załóż spodnie ochronne do piły.", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.2': "Zdmuchnij liście na kupkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.3': "Tankuj tylko wtedy, gdy silnik jest zimny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.q': "Mogę pracować piłą łańcuchową?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.a': "Jeszcze nie. Najpierw przejdziesz kurs.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw': "Piła łańcuchowa tylko po szkoleniu", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.b': "Piła łańcuchowa to jedno z najbardziej niebezpiecznych narzędzi w pracy na terenach zielonych. Pracuj nią tylko po kursie i wtedy, gdy przełożony ci pozwoli. Zawsze noś spodnie ochronne do piły, kask z osłoną twarzy i ochronnikami słuchu, rękawice i buty ochronne. Nigdy nie pracuj piłą łańcuchową w pojedynkę. Trzymaj ją obiema rękami i nigdy nie tnij powyżej ramion. Przy dmuchawie do liści: nigdy nie dmuchaj w stronę ludzi, samochodów ani otwartych okien. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.p': { m: "Nie miałem jeszcze kursu do tego.", f: "Nie miałam jeszcze kursu do tego.", x: "Nie mam jeszcze za sobą kursu do tego." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.s': { m: "Kolega mówi: „Weź piłę łańcuchową, to łatwe.” Nigdy nie miałeś kursu. Co robisz?", f: "Kolega mówi: „Weź piłę łańcuchową, to łatwe.” Nigdy nie miałaś kursu. Co robisz?", x: "Kolega mówi: „Weź piłę łańcuchową, to łatwe.” Nie masz za sobą żadnego kursu. Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o1': "Mówisz, że jeszcze nie masz kursu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o2': "Ostrożnie próbujesz, tylko raz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o3': "Bierzesz ją i najpierw oglądasz filmik.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.w': "Piła łańcuchowa może w sekundę przeciąć ci nogę. Bez szkolenia nie wiesz, jak może odbić.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.planting': "Sadzenie, chwasty i ulica", // nieuw, nalezen // nagelezen AI 28 nov
    'l.weeding': "Pielenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruid': "chwasty (rośliny, które trzeba usunąć)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wieden': "pielić (wyrywać chwasty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoffel': "motyka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perk': "rabata (grządka z kwiatami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruidbrander': "wypalacz chwastów (zabija chwasty gorącem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wortel': "korzeń (rośliny)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.1': "Wyrywaj chwasty razem z korzeniem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.2': "Przekop motyką rabatę przy wejściu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.3': "Uwaga: wypalacz chwastów jest gorący.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.q': "Czy to chwast?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.a': "Nie, to roślina. Zostaw ją.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding': "Chwasty: korzeń musi zniknąć", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.b': "Chwast odrasta, kiedy korzeń zostaje w ziemi. Dlatego wyrywaj go razem z korzeniem albo podcinaj motyką tuż pod ziemią. Pracuj, kiedy ziemia jest trochę mokra: wtedy korzeń łatwo wychodzi. Nie używaj oprysków na chwasty, chyba że cię tego nauczono i przełożony tak mówi. Wypalacz chwastów jest bardzo gorący: trzymaj go z dala od suchej trawy, liści, żywopłotów, samochodów i koszy na śmieci. Nigdy nie odkładaj go, kiedy się pali. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.p': "To chwast czy roślina?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.s': "Używasz wypalacza chwastów. Obok ścieżki rośnie suchy żywopłot. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o1': "W tym miejscu wyrywasz chwasty ręką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o2': "Szybko wypalasz i idziesz dalej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o3': "Wypalasz i raz się oglądasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.w': "Suchy żywopłot szybko się zapala. Pożar blisko domów albo samochodów jest bardzo niebezpieczny.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.planting': "Sadzenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planten': "sadzić", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schep': "łopata, szpadel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantgat': "dołek do sadzenia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluit': "bryła korzeniowa (ziemia wokół korzeni)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compost': "kompost", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boompaal': "palik do drzewa (słup, który podtrzymuje młode drzewo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.1': "Wykop dołek do sadzenia drzewa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.2': "Postaw drzewo prosto, obok palika.", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.3': "Daj nowym roślinom dużo wody.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.q': "Gdzie ma iść ta roślina?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.a': "Z tyłu rabaty, przy murze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting': "Pod ziemią: kable i rury", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.b': "Pod trawą i chodnikiem często są kable i rury: do prądu, gazu, wody i internetu. Dlatego kop ostrożnie. Widzisz w ziemi kolorową taśmę albo plastikową płytę albo trafiasz na coś twardego? Przestań kopać i powiedz przełożonemu. Nigdy nie kop dalej na siłę. Ciężkie drzewo albo dużą bryłę korzeniową podnoś razem z kimś, na ugiętych kolanach. Daj nowej roślinie wodę tego samego dnia. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.p': "Trafiam na coś twardego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.s': "Kopiesz dołek do sadzenia. Twoja łopata trafia na czerwoną plastikową taśmę. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o1': "Przestajesz kopać i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o2': "Ostrożnie kopiesz dalej, obok taśmy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o3': "Wyciągasz taśmę i kopiesz dalej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.w': "Taśma w ziemi ostrzega, że pod nią jest kabel albo rura. Rura z gazem albo kabel z prądem jest bardzo niebezpieczny.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roadside': "Praca przy drodze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pion': "pachołek drogowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkeer': "ruch drogowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoep': "chodnik (ścieżka obok jezdni)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fietser': "rowerzysta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijlwagen': "przyczepa ze strzałką (przyczepa z dużą strzałką, która ostrzega kierowców)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.berm': "pobocze (trawa obok drogi)", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.1': "Załóż kamizelkę. Pracujemy przy drodze.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.2': "Postaw pachołki za busem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.3': "Uważaj na rowerzystów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.q': "Mogę teraz przejść?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.a': "Nie, czekaj. Jedzie ciężarówka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside': "Przy drodze: bądź widoczny, zostań za pachołkami", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.b': "Praca przy drodze jest niebezpieczna: kierowcy patrzą w telefon albo jadą za szybko. Dlatego zawsze noś kamizelkę odblaskową, także przy krótkiej pracy. Ustaw pachołki i znaki, zanim zaczniesz, a zbierz je na samym końcu. Zaparkuj busa jako osłonę między sobą a ruchem. Zostań za pachołkami. Nigdy nie cofaj się bez patrzenia i jeśli możesz, pracuj twarzą do ruchu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.p': "Najpierw ustawiam pachołki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.s': "Musisz przyciąć jeden mały krzak przy drodze. To zajmie pięć minut. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o1': "Zakładasz kamizelkę i ustawiasz pachołki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o2': "Robisz to szybko, bez pachołków.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o3': "Prosisz kolegę, żeby pilnował samochodów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.w': "Wypadek trwa tylko sekundę. Pięć minut bez pachołków to pięć minut bez ochrony.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.litter': "Śmieci i okolica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwerfafval': "śmieci (odpadki na ulicy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grijper': "chwytak do śmieci (kij, który łapie śmieci)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniszak': "worek na śmieci", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherven': "potłuczone szkło (ostre kawałki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhanger': "przyczepa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewoner': "mieszkaniec (ktoś, kto tu mieszka)", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.1': "Zbieraj śmieci chwytakiem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.2': "Uwaga, tu jest potłuczone szkło.", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.3': "Postaw worki na śmieci przy przyczepie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.q': "Kiedy będzie przycięte to drzewo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.a': "Nie wiem. Proszę zapytać w gminie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter': "Nigdy nie dotykaj igły", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.b': "W parkach i krzakach czasem znajdziesz igłę od strzykawki. Nigdy nie podnoś jej ręką, także w rękawicach. Użyj chwytaka i włóż igłę do twardego pudełka albo butelki z zakrętką, nigdy do worka na śmieci. Powiedz przełożonemu. Igła cię ukłuła? Umyj ranę dużą ilością wody i od razu zadzwoń do lekarza. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.p': "Tu leży igła.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.s': "Widzisz igłę w trawie obok ławki. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o1': "Podnosisz ją chwytakiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o2': "Podnosisz ją w rękawicach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o3': "Wkładasz ją do worka na śmieci.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.w': "Igła może przenosić chorobę. Rękawice nie zatrzymują igły, a twarde pudełko chroni innych.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.frontdesk': "Recepcja, poczta i spotkania", // nieuw, nalezen // nagelezen AI 28 nov
    'l.reception': "Na recepcji", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balie': "recepcja, lada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoeker': "gość, odwiedzający", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intercom': "domofon (rozmawiasz z kimś przy drzwiach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorverbinden': "przełączyć (rozmowę telefoniczną)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toestel': "numer wewnętrzny (numer telefonu w budynku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachtruimte': "poczekalnia", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.1': "Dzień dobry, czy mogę w czymś pomóc?", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.2': "Już przełączam.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.3': "Proszę usiąść w poczekalni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.q': "Mam spotkanie z panią Jansen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.a': "Chwileczkę. Zadzwonię do niej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception': "Jesteś pierwszą twarzą firmy", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.b': "Na recepcji jesteś pierwszą osobą, którą spotyka gość. Podnieś wzrok, uśmiechnij się i przywitaj, także wtedy, gdy rozmawiasz przez telefon. Do gości mów „u” (grzecznie, jak „pan” albo „pani”). Odbieraj telefon, podając nazwę firmy i swoje imię. Nie znasz odpowiedzi? Powiedz to i znajdź kogoś, kto ją zna. Nigdy nie podawaj nieznajomym nazwisk, numerów telefonów ani pokojów pracowników.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.p': "Dzień dobry, w czym mogę pomóc?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.s': "Rozmawiasz przez telefon. Do recepcji podchodzi gość i czeka. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o1': "Podnosisz wzrok i pokazujesz, że zaraz podejdziesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o2': "Kończysz rozmowę, nie podnosząc wzroku.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o3': "Od razu odkładasz słuchawkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.w': "Gość, którego ktoś zauważył, czeka spokojnie. Gość, którego nikt nie zauważa, czuje się niemile widziany.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.visitors': "Przyjmowanie gości", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoekerspasje': "przepustka dla gościa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lift': "winda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garderobe': "szatnia (gdzie wieszasz kurtkę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeerplaats': "miejsce parkingowe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hal': "hol (duże pomieszczenie przy wejściu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiden': "zaprowadzić kogoś (iść razem z nim)", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.1': "Proszę tu wpisać swoje nazwisko.", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.2': "Oto przepustka dla gościa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.3': "Zaprowadzę do windy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.q': "Gdzie mogę zostawić kurtkę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.a': "W szatni, obok windy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors': "Każdy gość się wpisuje", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.b': "Każdy gość wpisuje swoje nazwisko na listę albo rejestruje się na ekranie i dostaje przepustkę dla gościa. Wtedy wiesz, kto jest w budynku. To ważne, kiedy jest pożar: wszyscy muszą wyjść, a ktoś sprawdza listę. Na koniec wizyty gość oddaje przepustkę. Nie wpuszczaj za sobą ludzi, których nie znasz: grzecznie zapytaj, do kogo przyszli. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.p': "Do kogo pan/pani przychodzi?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.visitors.s': "Za kolegą wchodzi jakiś mężczyzna. Nie ma przepustki. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o1': "Grzecznie pytasz go, do kogo przyszedł.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o2': "Puszczasz go: wszedł z pracownikiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o3': "Od razu dzwonisz na policję.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.w': "W nagłej sytuacji musisz wiedzieć, kto jest w środku. I nie każdy, kto wchodzi, ma powód, żeby tam być.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mailroom': "Poczta i paczki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkamer': "punkt pocztowy (pomieszczenie na pocztę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koerier': "kurier (ktoś, kto przynosi paczki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postvak': "przegródka na pocztę (jedna na osobę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.envelop': "koperta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdeling': "dział", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkar': "wózek na pocztę", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.1': "Kurier przynosi paczkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.2': "Włóż listy do właściwej przegródki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.3': "Ta paczka jest uszkodzona.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.q': "Dla kogo jest ta paczka?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.a': "Dla działu finansów, na drugim piętrze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom': "Poczta jest prywatna", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.b': "Poczta i paczki są prywatne. Nigdy nie otwieraj listu ani paczki dla kogoś innego. Na każdej przesyłce sprawdź nazwisko i dział i włóż ją do właściwej przegródki. Kiedy kurier przynosi paczkę, obejrzyj ją, zanim podpiszesz: czy jest uszkodzona? Zapisz to. Paczka jest dziwna: śmierdzi, cieknie albo nie ma nadawcy? Nie otwieraj jej i powiedz przełożonemu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.p': "Karton jest mokry i rozerwany.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.s': "Kurier przynosi paczkę. Jeden róg jest mokry i rozerwany. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o1': "Zapisujesz uszkodzenie, zanim podpiszesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o2': "Podpisujesz i nikomu nic nie mówisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o3': "Otwierasz ją, żeby zobaczyć, czy wszystko jest.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.w': "Po twoim podpisie wygląda tak, jakby paczka była w porządku. Wtedy nikt nie zapłaci za szkodę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.meetingroom': "Przygotowanie sali spotkań", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergaderzaal': "sala spotkań", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beamer': "projektor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.whiteboard': "tablica suchościeralna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermoskan': "dzbanek termiczny (utrzymuje gorącą kawę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kopje': "filiżanka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koffieautomaat': "ekspres do kawy", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.1': "Postaw dziesięć krzeseł wokół stołu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.2': "Przygotuj kawę i herbatę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.3': "Projektor nie działa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.q': "O której zaczyna się spotkanie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.a': "O dziesiątej. Dopilnuj, żeby wszystko było gotowe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom': "Gotowe przed pierwszym gościem", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.b': "Sala spotkań musi być gotowa, zanim wejdzie pierwsza osoba. Sprawdź krzesła, stół, projektor i kable. Postaw kawę, herbatę i wodę, z filiżankami i mlekiem. Noś gorące napoje ostrożnie i nigdy nad ludźmi. Po spotkaniu wyczyść stół i wszystko zabierz z powrotem. To, co słyszysz w sali spotkań, zachowujesz dla siebie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.p': "Sala jest gotowa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.s': "Spotkanie zaczyna się za pięć minut. Projektor nie działa. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o1': "Od razu mówisz organizatorowi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o2': "Czekasz: może nikt go nie potrzebuje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o3': "Zostawiasz kartkę na stole.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.w': "Pięć minut to jeszcze czas, żeby to naprawić albo znaleźć inną salę. Później wszyscy czekają.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.maintenance': "Usterki, naprawy i przeprowadzki", // nieuw, nalezen // nagelezen AI 28 nov
    'l.faults': "Zgłaszanie usterki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.melding': "zgłoszenie (mówisz, że coś jest nie tak)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekkage': "przeciek (wycieka woda)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verwarming': "ogrzewanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.airco': "klimatyzacja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvoer': "odpływ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstopt': "zatkany (nic nie przechodzi)", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.1': "Zgłaszam usterkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.2': "W kuchni jest przeciek.", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.3': "Odpływ toalety jest zatkany.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.q': "Dlaczego jest tu tak zimno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.a': "Ogrzewanie jest zepsute. Technik przyjdzie jutro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults': "Zgłoś, nie naprawiaj na własną rękę", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.b': "Widzisz coś zepsutego, na przykład przeciek, lampę, która nie świeci, albo drzwi, które się nie zamykają? Zgłoś to, także jeśli to coś małego: w systemie albo przełożonemu. Powiedz, gdzie to jest, co widzisz i od kiedy. Nie naprawiaj samodzielnie instalacji elektrycznej, gazowej ani ogrzewania. Czujesz gaz? Nie używaj w pobliżu przełącznika ani telefonu, otwórz okna, wyprowadź ludzi i wezwij pomoc na zewnątrz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.p': "Chcę zgłosić usterkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.s': "Na korytarzu z sufitu kapie woda. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o1': "Zgłaszasz to i podstawiasz wiadro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o2': "Czekasz: może samo przestanie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o3': "Otwierasz sufit, żeby zobaczyć.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.w': "Mały przeciek może zrobić dużą szkodę. Wiadro utrzymuje podłogę suchą, więc nikt się nie poślizgnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.repairs': "Drobne naprawy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervangen': "wymienić (włożyć nowy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurklink': "klamka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scharnier': "zawias", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschapskist': "skrzynka na narzędzia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rookmelder': "czujnik dymu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batterij': "bateria", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.1': "Wymień lampę na korytarzu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.2': "Klamka jest luźna.", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.3': "Weź drabinkę, nie krzesło.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.q': "Czy czujnik dymu piszczy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.a': "Tak, bateria jest prawie pusta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs': "Drabinka, nigdy krzesło", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.b': "Do lampy albo wysokiej półki używaj drabinki, nigdy krzesła, stołu ani pudełka. Postaw ją na równej podłodze, otwórz ją do końca i nie stawaj na najwyższym stopniu. Zanim wymienisz lampę, wyłącz światło i poczekaj, aż stara lampa ostygnie. Rób tylko te naprawy, których cię nauczono. Kiedy skończysz, odłóż narzędzia do skrzynki, żeby nikt się o nie nie potknął. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.p': "Przyniosę drabinkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.s': "W biurze zepsuła się lampa. Drabinka jest na innym piętrze. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o1': "Przynosisz drabinkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o2': "Stajesz na krześle biurowym.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o3': "Stajesz na biurku.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.w': "Krzesło może odjechać albo się przewrócić. Upadek z krzesła może cię mocno zranić.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.moving': "Przeprowadzka stanowiska pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdoos': "karton do przeprowadzki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureau': "biurko", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureaustoel': "krzesło biurowe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkplek': "stanowisko pracy (biurko, przy którym ktoś pracuje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamernummer': "numer pokoju", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plattegrond': "plan budynku (mapa budynku)", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.1': "Napisz numer pokoju na każdym kartonie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.2': "Połóż kartony na wózku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.3': "Opróżnij stanowisko pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.q': "Gdzie ma iść to biurko?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.a': "Do pokoju dwanaście. Spójrz na plan budynku.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving': "Przeprowadzka: podnoś mądrze, wszystko opisz", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.b': "Przeprowadzka to ciężka praca. Nie pakuj kartonu za pełno: książki i segregatory są ciężkie. Podnoś na ugiętych kolanach, z prostymi plecami, blisko ciała. Do większej liczby kartonów używaj wózka, a biurko podnoście razem. Napisz nowy numer pokoju na każdym kartonie, krześle i komputerze. Najpierw odłącz kable. Nigdy nie stawiaj kartonów na korytarzu ani przed wyjściem ewakuacyjnym.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.p': "Pomożesz mi to podnieść?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.s': "Musisz przenieść ciężkie biurko. Twój kolega ma przerwę. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o1': "Czekasz na pomoc i podnosicie je razem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o2': "Ciągniesz je w pojedynkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o3': "Podnosisz je w pojedynkę, bardzo ostrożnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.w': "Ciężkie biurko może uszkodzić ci plecy, kiedy podnosisz je w pojedynkę. Razem jest łatwo i bezpiecznie.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.closing': "Otwieranie i zamykanie budynku", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelbos': "pęk kluczy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiten': "zamykać na klucz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ronde': "obchód (przejście obok każdego pomieszczenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raam': "okno", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmcode': "kod alarmu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtslot': "zamek nocny (dodatkowy zamek na noc)", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.1': "Robię ostatni obchód budynku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.2': "Czy wszystkie okna są zamknięte?", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.3': "Zamknij drzwi na zamek nocny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.q': "Czy ktoś jest jeszcze w środku?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.a': "Nie, wszyscy już wyszli. Zamykam.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing': "Kod alarmu jest tajny", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.b': "Na koniec dnia robisz ostatni obchód. Sprawdź, czy nikt nie został w środku, czy okna są zamknięte i światła zgaszone. Wyjścia ewakuacyjne zostają wolne. Trzymaj klucze przy sobie, nigdy w szufladzie. Kod alarmu jest tajny: nigdy nikomu go nie podawaj, także przez telefon. Włącza się alarm? Postępuj według kroków twojej firmy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.p': "Nie podaję kodu alarmu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.s': "Ktoś dzwoni: „Jestem z firmy alarmowej. Jaki jest wasz kod?” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o1': "Odmawiasz i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o2': "Podajesz kod: brzmi miło.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o3': "Podajesz tylko połowę kodu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.w': "Prawdziwa firma alarmowa nie pyta o kod przez telefon. Złodziej może zapytać.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.guarding': "Obchody i kontrola wejścia", // nieuw, nalezen // nagelezen AI 28 nov
    'l.patrol': "Obchód", // nieuw, nalezen // nagelezen AI 28 nov
    'w.surveilleren': "patrolować (chodzić dookoła i obserwować)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaklamp': "latarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terrein': "teren (ziemia wokół budynku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hek': "ogrodzenie, brama", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbraak': "włamanie (ktoś wchodzi, żeby ukraść)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openstaan': "być otwartym (drzwi albo okno, które powinny być zamknięte)", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.1': "Robię obchód co dwie godziny.", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.2': "Brama za halą jest otwarta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.3': "Weź ze sobą latarkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.q': { m: "Widziałeś coś podczas obchodu?", f: "Widziałaś coś podczas obchodu?", x: "Coś zwróciło twoją uwagę podczas obchodu?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.a': "Tak. Przy tylnych drzwiach było otwarte okno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol': "Patrz i zgłaszaj, nie bądź bohaterem", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.b': "Na obchodzie patrzysz: czy drzwi i okna są zamknięte, czy ogrodzenie jest całe, czy jest ktoś, kogo nie powinno tu być? Zapisz, co widzisz, z godziną. Widzisz coś dziwnego, na przykład wybite okno albo osobę w nocy? Nie wchodź do środka w pojedynkę. Wezwij centrum monitoringu albo policję przez krótkofalówkę albo telefon i czekaj w bezpiecznym miejscu. Twoje własne bezpieczeństwo jest najważniejsze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.p': "Widzę kogoś przy ogrodzeniu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.s': "W nocy widzisz wyważone drzwi. W środku słyszysz hałas. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o1': "Zostajesz na zewnątrz i wzywasz pomoc.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o2': "Szybko wchodzisz i patrzysz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o3': "Krzyczysz do środka, że idziesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.w': "Złodziej w środku może być niebezpieczny. Policja wie, co robić, a twoje zadanie to widzieć i zgłaszać.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.access': "Kontrola wejścia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagboom': "szlaban (drążek w poprzek drogi, który się podnosi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegangspas': "karta dostępu (karta, która otwiera drzwi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.legitimatie': "dokument tożsamości (paszport albo dowód osobisty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaihek': "bramka obrotowa (dla jednej osoby naraz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kenteken': "numer rejestracyjny (litery i cyfry samochodu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegang': "wstęp, dostęp (możesz wejść)", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.1': "Poproszę o dokument tożsamości.", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.2': "Ta karta nie działa. Zadzwonię.", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.3': "Otworzę szlaban.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.q': "Mogę wejść? Karta została mi w domu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.a': "Przykro mi, bez karty nie można wejść.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access': "Bez karty nie ma wejścia", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.b': "Przy bramie albo przy recepcji sprawdzasz, kto wchodzi. Każdy potrzebuje karty albo musi być na liście. Zachowuj się uprzejmie, także kiedy ktoś jest zły albo się spieszy. Nie rób wyjątków, bo ktoś mówi, że jest szefem: sprawdź to. Nigdy nikomu nie pożyczaj swojej karty i nigdy nie pozwól nikomu wejść za tobą. Zgubioną kartę trzeba od razu zgłosić. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.p': "Poproszę o kartę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.s': "Mężczyzna w garniturze mówi: „Jestem nowym dyrektorem. Nie mam jeszcze karty.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o1': "Sprawdzasz to, zanim go wpuścisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o2': "Wpuszczasz go: wygląda na ważnego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o3': "Dajesz mu swoją kartę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.w': "Każdy może powiedzieć, że jest dyrektorem. Szybkie sprawdzenie chroni budynek, a prawdziwy dyrektor to zrozumie.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cameras': "Kamery i centrum monitoringu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldkamer': "centrum monitoringu (tu ludzie patrzą na kamery i odbierają zgłoszenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beeldscherm': "monitor, ekran", // nieuw, nalezen // nagelezen AI 28 nov
    'w.camerabeelden': "nagrania z kamer (to, co nagrała kamera)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inzoomen': "przybliżyć obraz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewegingsmelder': "czujnik ruchu (widzi, kiedy coś się rusza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdachte': "podejrzany", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.1': "Na kamerze trzy widzę kogoś przy ogrodzeniu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.2': "Przybliżę obraz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.3': "Centrum monitoringu dzwoni na policję.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.q': "Co widzisz na ekranie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.a': "Mężczyznę przy ogrodzeniu. Wysyłam kolegę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras': "Nagrania z kamer są prywatne", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.b': "Kamery nagrywają ludzi: pracowników, gości i przechodniów. To, co widzisz na ekranach, jest prywatne. Patrz tylko w celach służbowych i nigdy nie nagrywaj ekranu telefonem. Nigdy nie wysyłaj nagrań znajomym i nie wrzucaj ich do internetu. Jest jakiś incydent? Zapisz kamerę i godzinę i powiedz przełożonemu. Tylko twoja firma decyduje, kto dostaje nagrania, na przykład policja. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.p': "Nie wolno mi tego pokazywać.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.s': "Kolega prosi cię o śmieszny filmik z kamer. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o1': "Odmawiasz: nagrania są prywatne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o2': "Wysyłasz go, tylko jemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o3': "Nagrywasz ekran telefonem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.w': "Ludzie na nagraniu nie zgodzili się, żeby je udostępniać. Wysłanie go może cię kosztować pracę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.report': "Krótkofalówka i raport", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portofoon': "krótkofalówka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapport': "raport (to, co się stało, zapisane)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.incident': "incydent (coś, co poszło źle)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijdstip': "godzina, moment (kiedy coś się stało)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.logboek': "dziennik (zeszyt albo aplikacja, gdzie wszystko zapisujesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oproepen': "wywołać (przez krótkofalówkę)", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.1': "Piszę raport z incydentu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.2': "Która to była dokładnie godzina?", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.3': "Słabo cię słyszę. Powtórz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.q': "Co musi być w raporcie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.a': "Co się stało, gdzie i o której godzinie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report': "Zapisz to od razu", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.b': { m: "Napisz raport zaraz po incydencie, póki dobrze wszystko pamiętasz. Pisz, co sam widziałeś i słyszałeś: co się stało, gdzie, o której godzinie i kto tam był. Pisz fakty, a nie to, co myślisz. Przez krótkofalówkę mów krótko i wyraźnie i czekaj, aż druga osoba skończy. Powiedz, kim jesteś i gdzie jesteś. Dobry raport pomaga policji, twojej firmie i tobie.", f: "Napisz raport zaraz po incydencie, póki dobrze wszystko pamiętasz. Pisz, co sama widziałaś i słyszałaś: co się stało, gdzie, o której godzinie i kto tam był. Pisz fakty, a nie to, co myślisz. Przez krótkofalówkę mów krótko i wyraźnie i czekaj, aż druga osoba skończy. Powiedz, kim jesteś i gdzie jesteś. Dobry raport pomaga policji, twojej firmie i tobie.", x: "Napisz raport zaraz po incydencie, póki dobrze wszystko pamiętasz. Pisz to, co widziały twoje oczy i słyszały twoje uszy: co się stało, gdzie, o której godzinie i kto tam był. Pisz fakty, a nie to, co myślisz. Przez krótkofalówkę mów krótko i wyraźnie i czekaj, aż druga osoba skończy. Powiedz, kim jesteś i gdzie jesteś. Dobry raport pomaga policji, twojej firmie i tobie." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.p': "Zaraz to zapiszę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.s': { m: "Po pracowitej nocy jesteś bardzo zmęczony. Był jeden mały incydent. Co robisz?", f: "Po pracowitej nocy jesteś bardzo zmęczona. Był jeden mały incydent. Co robisz?", x: "Po pracowitej nocy czujesz ogromne zmęczenie. Był jeden mały incydent. Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o1': "Piszesz raport, zanim pójdziesz do domu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o2': "Piszesz go jutro, po dobrym śnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o3': "Pomijasz go: to było nic wielkiego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.w': "Jutro zapomnisz szczegóły. Raport bez godziny albo miejsca nikomu nie pomaga.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.incidents': "Nagłe sytuacje i sklep", // nieuw, nalezen // nagelezen AI 28 nov
    'l.evacuation': "Pożar i ewakuacja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmelder': "przycisk alarmu pożarowego (czerwona skrzynka, którą naciskasz, kiedy jest pożar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandweer': "straż pożarna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddeur': "drzwi przeciwpożarowe (zatrzymują ogień i dym)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmeldcentrale': "centrala alarmu pożarowego (pokazuje, gdzie jest alarm)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontruimingsplan': "plan ewakuacji (kto co robi, kiedy wszyscy muszą wyjść)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sirene': "syrena", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.1': "W hali drugiej jest alarm pożarowy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.2': "Trzymaj drzwi przeciwpożarowe zamknięte.", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.3': "Czekam na straż pożarną przy wejściu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.q': "Czy wszyscy są na zewnątrz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.a': "Nie, brakuje jeszcze dwóch osób z listy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation': "Pożar: najpierw alarm, potem na zewnątrz", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.b': "Widzisz ogień albo dym? Naciśnij przycisk alarmu pożarowego albo zadzwoń pod 112. Potem pomóż ludziom wyjść drogami ewakuacyjnymi, nigdy windą. Zamykaj za sobą drzwi, ale nie na klucz. Gaś pożar tylko wtedy, gdy jest mały i umiesz to robić. Idź na miejsce zbiórki i policz, kto tam jest. Wyjdź do straży pożarnej przy wejściu i powiedz, co wiesz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.p': "Wszyscy na zewnątrz, na miejsce zbiórki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.s': "Włącza się alarm pożarowy. Jakiś mężczyzna chce jechać windą. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o1': "Wysyłasz go na schody.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o2': "Pozwalasz mu: winda jest szybsza.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o3': "Jedziesz z nim windą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.w': "Podczas pożaru winda może stanąć albo wypełnić się dymem. Schody to bezpieczna droga na zewnątrz.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.firstaid': "Pierwsza pomoc i 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ehbo': "pierwsza pomoc", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aed': "AED (urządzenie, które pomaga sercu, które się zatrzymało)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reanimeren': "prowadzić resuscytację (uciskać klatkę piersiową, żeby uratować życie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewusteloos': "nieprzytomny (osoba się nie budzi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ademen': "oddychać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmnummer': "numer alarmowy (112)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.1': "Zadzwoń pod 112. Poproś o karetkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.2': "Przynieś AED z recepcji.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.3': "On nie oddycha. Zaczynam resuscytację.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.q': "Gdzie jest AED?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.a': "Przy wejściu, obok windy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid': "Zadzwoń pod 112, zacznij resuscytację, przynieś AED", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.b': "Ktoś upada i nie reaguje? Od razu zadzwoń pod 112 albo poproś kogoś, żeby zadzwonił. Sprawdź, czy ta osoba normalnie oddycha. Jeśli nie: zacznij resuscytację i poproś kogoś, żeby przyniósł AED. AED mówi i wyjaśnia ci, co robić, więc nie możesz zrobić nic źle. Nie przerywaj, aż przejmie karetka. Masz kurs pierwszej pomocy? Powiedz o tym kolegom, żeby wiedzieli, kogo wołać.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.p': "Zadzwoń pod 112 i przynieś AED.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.s': "W holu upada mężczyzna. Nie rusza się i nie oddycha. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o1': "Dzwonisz pod 112 i zaczynasz resuscytację.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o2': "Czekasz, czy się obudzi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o3': "Podnosisz go i sadzasz na krześle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.w': "Kiedy serce staje, liczy się każda minuta. Resuscytacja i AED mogą uratować życie, zanim przyjedzie karetka.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shoplifting': "Kradzież w sklepie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkeldiefstal': "kradzież w sklepie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heterdaad': "na gorącym uczynku (widzisz, jak to się dzieje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhouden': "zatrzymać kogoś (do przyjazdu policji)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.detectiepoortje': "bramka antykradzieżowa (piszczy przy drzwiach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmlabel': "zabezpieczenie antykradzieżowe (przez nie bramka piszczy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstoppen': "chować, ukrywać", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.1': "Bramka przy wyjściu piszczy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.2': { m: "Widziałem, jak to się stało.", f: "Widziałam, jak to się stało.", x: "To stało się na moich oczach." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.3': "Zatrzymuję go do przyjazdu policji.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.q': "Mogę przeszukać jego torbę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.a': "Nie. To robi policja.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting': "Kradzież w sklepie: obserwuj, zgłaszaj, bez przemocy", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.b': "Ktoś na twoich oczach coś ukradł? Zachowaj spokój i od razu zadzwoń na policję. Niektóre sklepy pozwalają ochroniarzowi zatrzymać złodzieja do przyjazdu policji, a inne mówią: tylko obserwuj, zgłoś i zapamiętaj, jak ta osoba wygląda. Nigdy nie bij i nie kop i nigdy nie trzymaj nikogo za szyję. Nigdy nie przeszukuj osoby, jej kieszeni ani torby: to zadanie policji. Zapisz swoje obserwacje i zachowaj nagrania z kamer. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.p': "Proszę pójść ze mną.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.s': "Widzisz, jak kobieta wkłada butelkę do torby. Wychodzi ze sklepu. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o1': "Spokojnie ją zatrzymujesz i dzwonisz na policję.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o2': "Szybko przeszukujesz jej torbę przy drzwiach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o3': "Mocno popychasz ją na ziemię.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.w': "Przeszukiwanie osoby to zadanie policji, a przemoc może kogoś zranić i narobić ci kłopotów.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.aggression': "Trudni ludzie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agressie': "agresja (złe, gwałtowne zachowanie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schelden': "wyzywać kogoś, przeklinać na kogoś", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalmeren': "uspokoić się", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afstand': "odstęp, odległość", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisverbod': "zakaz wstępu (nie możesz już tu wchodzić)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bodycam': "kamera nasobna (mała kamera na mundurze)", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.1': "Proszę się uspokoić. Chcę panu pomóc.", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.2': "Zachowaj odstęp i spokój.", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.3': "Ma pan zakaz wstępu. Musi pan teraz wyjść.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.q': "Dlaczego nie mogę wejść?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.a': "Ma pan tutaj zakaz wstępu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression': "Zachowaj spokój, zachowaj odstęp", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.b': { m: "Zła osoba szybciej się uspokaja, kiedy ty jesteś spokojny. Mów powoli i cicho i zwracaj się do tej osoby przez „u”. Trzymaj odstęp na długość ręki albo więcej i miej za sobą drogę wyjścia. Nie dotykaj tej osoby i nie odkrzykuj. Robi się niebezpiecznie? Cofnij się i zawołaj kolegę albo policję. Potem to zapisz. Po złym incydencie porozmawiaj o tym z kimś. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Zła osoba szybciej się uspokaja, kiedy ty jesteś spokojna. Mów powoli i cicho i zwracaj się do tej osoby przez „u”. Trzymaj odstęp na długość ręki albo więcej i miej za sobą drogę wyjścia. Nie dotykaj tej osoby i nie odkrzykuj. Robi się niebezpiecznie? Cofnij się i zawołaj kolegę albo policję. Potem to zapisz. Po złym incydencie porozmawiaj o tym z kimś. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Zła osoba szybciej się uspokaja, kiedy ty zachowujesz spokój. Mów powoli i cicho i zwracaj się do tej osoby przez „u”. Trzymaj odstęp na długość ręki albo więcej i miej za sobą drogę wyjścia. Nie dotykaj tej osoby i nie odkrzykuj. Robi się niebezpiecznie? Cofnij się i zawołaj kolegę albo policję. Potem to zapisz. Po złym incydencie porozmawiaj o tym z kimś. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.p': "Proszę się uspokoić. Chcę pomóc.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.s': "Mężczyzna krzyczy na ciebie i podchodzi bardzo blisko. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o1': "Cofasz się i mówisz spokojnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o2': "Odkrzykujesz, głośniej niż on.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o3': "Odpychasz go od siebie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.w': "Spokojne słowa i przestrzeń studzą emocje. Krzyk albo popychanie tylko pogarszają sprawę.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodhygiene': "Higiena i chłód", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hygienelock': "Śluza higieniczna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hygienesluis': "śluza higieniczna (pomieszczenie, w którym się myjesz, zanim wejdziesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baardnetje': "siatka na brodę", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzenwasser': "myjka do butów (szczotki, które czyszczą buty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.desinfecteren': "dezynfekować (zabijać zarazki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkjas': "fartuch roboczy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bacterie': "zarazek, bakteria", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.1': "Umyj ręce i zdezynfekuj je.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.2': "Załóż siateczkę na włosy i siatkę na brodę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.3': "Przejdź przez myjkę do butów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.q': "Mogę zostać w zegarku?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.a': "Nie, cała biżuteria musi być zdjęta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock': "Za każdym razem czysto na wejściu", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.b': { m: "W fabryce żywności to ty jesteś największym zagrożeniem dla jedzenia: zarazki są na twoich rękach, włosach i ubraniu. Dlatego przechodź przez śluzę higieniczną za każdym razem, kiedy wchodzisz, także po przerwie albo po toalecie. Siateczka na włosy, siatka na brodę, jeśli masz brodę, czyste ubranie robocze, cała biżuteria zdjęta. Umyj ręce mydłem, wytrzyj je i zdezynfekuj. Jesteś chory, masz biegunkę albo wymiotujesz? Powiedz przełożonemu, zanim zaczniesz pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "W fabryce żywności to ty jesteś największym zagrożeniem dla jedzenia: zarazki są na twoich rękach, włosach i ubraniu. Dlatego przechodź przez śluzę higieniczną za każdym razem, kiedy wchodzisz, także po przerwie albo po toalecie. Siateczka na włosy, siatka na brodę, jeśli masz brodę, czyste ubranie robocze, cała biżuteria zdjęta. Umyj ręce mydłem, wytrzyj je i zdezynfekuj. Jesteś chora, masz biegunkę albo wymiotujesz? Powiedz przełożonemu, zanim zaczniesz pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "W fabryce żywności to ty jesteś największym zagrożeniem dla jedzenia: zarazki są na twoich rękach, włosach i ubraniu. Dlatego przechodź przez śluzę higieniczną za każdym razem, kiedy wchodzisz, także po przerwie albo po toalecie. Siateczka na włosy, siatka na brodę, jeśli masz brodę, czyste ubranie robocze, cała biżuteria zdjęta. Umyj ręce mydłem, wytrzyj je i zdezynfekuj. Chorujesz, masz biegunkę albo wymiotujesz? Powiedz przełożonemu, zanim zaczniesz pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.p': "Mam biegunkę. Czy mogę dziś pracować?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.s': "Wracasz z toalety. Kolega mówi: „Pomiń śluzę, mamy dużo pracy.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o1': "I tak przechodzisz przez śluzę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o2': "Pomijasz ją, tylko ten jeden raz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o3': "Zakładasz tylko nowe rękawice.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.w': "Zarazki z toalety mogą sprawić, że zachoruje wielu klientów. Kilka minut w śluzie temu zapobiega.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.allergens': "Alergeny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergeen': "alergen (jedzenie, po którym niektórzy ludzie bardzo chorują)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.noten': "orzechy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinda': "orzeszek ziemny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gluten': "gluten (w pszenicy, więc w chlebie i cieście)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sesam': "sezam (małe nasiona, na przykład na chlebie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisbesmetting': "zanieczyszczenie krzyżowe (coś trafia do jedzenia, gdzie nie powinno go być)", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.1': "Ten produkt zawiera orzechy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.2': "Zobacz na etykiecie, jakie alergeny są w środku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.3': "Po orzeszkach ziemnych dobrze wszystko wyczyść.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.q': "Czy ten pojemnik może iść razem z innymi?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.a': "Nie, są w nim orzechy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens': "Wystarczy śladowa ilość", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.b': "Dla niektórych ludzi odrobina orzechów, orzeszków ziemnych, mleka, jajka, glutenu albo sezamu może być groźna dla życia. Dlatego na etykiecie musi być dokładnie napisane, co jest w produkcie. Trzymaj alergeny osobno: własne pojemniki, narzędzia i kolory. Po produkcie z alergenem linię się czyści, zanim przyjdzie następny produkt. Nigdy nie zamieniaj składnika, także jeśli wygląda tak samo. Masz wątpliwości? Pytaj. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.p': "Czy są w tym orzechy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.s': "Skończyły się migdały. Kolega mówi: „Użyj orzechów laskowych, nikt nie zauważy.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o1': "Odmawiasz i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o2': "Używasz ich: orzechy to orzechy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o3': "Używasz ich i nic nie zmieniasz na etykiecie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.w': "Etykieta musi mówić, co jest w środku. Zły orzech może sprawić, że osoba z alergią bardzo zachoruje.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.coldroom': "Chłodnia i mroźnia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperatuur': "temperatura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graden': "stopnie (°C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevroren': "zamrożony", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontdooien': "rozmrażać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelketen': "łańcuch chłodniczy (jedzenie jest cały czas zimne)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermokleding': "odzież termiczna (ciepłe ubranie na zimno)", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.1': "W mroźni jest minus osiemnaście stopni.", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.2': "Od razu włóż mięso do chłodni.", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.3': "Zapisz temperaturę na liście.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.q': "Dlaczego chłodnia piszczy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.a': "Drzwi są otwarte. Szybko je zamknij.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom': "Praca w zimnie: ubierz się ciepło, jedzenie trzymaj w zimnie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.b': "Jedzenie musi być zimne przez całą drogę: z ciężarówki do chłodni i do sklepu. Dlatego od razu odkładaj zimne produkty na miejsce i trzymaj drzwi chłodni i mroźni zamknięte. Sprawdzaj temperaturę i ją zapisuj. W mroźni noś odzież termiczną, rękawice i czapkę i na czas rób przerwę w cieple. Upewnij się, że zawsze możesz otworzyć drzwi od środka. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.p': "Tu jest za ciepło. Chłodzenie nie działa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.s': "Termometr chłodni pokazuje dużo wyższą liczbę niż zwykle. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o1': "Od razu mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o2': "Czekasz: znowu się ochłodzi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o3': "Wpisujesz na listę normalną liczbę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.w': "Za ciepło oznacza, że rosną zarazki. Przełożony decyduje, czy jedzenie jest jeszcze bezpieczne.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.foreignbody': "Szkło, metal i plastik w jedzeniu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metaaldetector': "wykrywacz metalu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glasbreuk': "stłuczka szkła (szkło, które się rozbiło)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.splinter': "odłamek (mały ostry kawałek)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vreemdvoorwerp': "ciało obce (coś w jedzeniu, czego tam nie powinno być)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervuild': "zanieczyszczony (dostało się coś brudnego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegleider': "kierownik zmiany", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.1': "Wykrywacz metalu piszczy. Zatrzymaj linię.", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.2': "Przy linii drugiej stłukło się szkło.", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.3': "Wrzuć produkt do pojemnika na braki.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.foreignbody.q': "Co mam zrobić z tym kawałkiem plastiku?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.a': "Pokaż go kierownikowi zmiany.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody': "Coś w jedzeniu? Zatrzymaj i zgłoś", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.b': "Szkło, metal, plastik, plaster albo włos nigdy nie mogą trafić do jedzenia. Wykrywacz metalu piszczy albo znajdujesz coś dziwnego? Odłóż produkt na bok i powiedz kierownikowi zmiany. Stłukło się szkło? Zatrzymaj linię w pobliżu: kierownik zmiany decyduje, co trzeba wyrzucić. Używaj tylko niebieskich plastrów, żeby łatwo je było zobaczyć. Nigdy nie zabieraj na halę produkcyjną szkła, długopisów ani luźnych rzeczy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.p': { m: "Znalazłem coś w produkcie.", f: "Znalazłam coś w produkcie.", x: "W produkcie coś jest." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.s': "Nad linią pęka szklana lampa. Produkty jadą dalej. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o1': "Zatrzymujesz linię i wołasz kierownika zmiany.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o2': "Wybierasz szkło, które widzisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o3': "Pracujesz dalej: wykrywacz znajdzie szkło.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.w': "Wykrywacz metalu nie znajduje szkła. Małe kawałki, których nie widać, mogą mocno zranić klienta.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodline': "Linia produkcyjna", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cutting': "Krojenie i ważenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitbenen': "odkostniać (wycinać kości z mięsa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fileren': "filetować (kroić rybę albo mięso na płaskie kawałki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portie': "porcja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wegen': "ważyć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gewicht': "waga, ciężar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijplank': "deska do krojenia", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.1': "Zważ każdą porcję.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.2': "Waga jest za niska.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.3': "Naostrz nóż, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.q': "Ile ma iść do pojemnika?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.a': "Pięćset gramów. Patrz na wagę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting': "Ostry nóż, bezpieczna ręka", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.b': "Ostry nóż jest bezpieczniejszy niż tępy: potrzebujesz mniej siły, więc mniej się ześlizguje. Zawsze noś rękawicę antyprzecięciową na drugiej ręce. Tnij od siebie. Odkładaj nóż płasko na deskę, nigdy do zlewu ani pod mięso. Nie próbuj łapać spadającego noża: cofnij się. Noś nóż ostrzem w dół, blisko nogi. Nawet małe skaleczenie trzeba zakleić i zgłosić.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.p': "Mój nóż jest tępy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.s': "Nóż wyślizguje ci się z ręki i spada. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o1': "Cofasz się i pozwalasz mu spaść.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o2': "Szybko go łapiesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o3': "Zatrzymujesz go stopą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.w': "Spadający nóż tnie głęboko, kiedy go łapiesz. Na podłodze nie zrobi nikomu krzywdy.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.labels': "Pakowanie i etykiety", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketteren': "etykietować (naklejać etykiety)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lotnummer': "numer partii (jeden numer dla jednej partii produktów)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vacuum': "pakowany próżniowo (całe powietrze jest usunięte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaal': "tacka (płaskie naczynie na jedzenie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.printer': "drukarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omdoos': "karton zbiorczy (duży karton wokół małych opakowań)", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.1': "Sprawdź, czy data na etykiecie jest dobra.", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.2': "To opakowanie nie jest zapakowane próżniowo. Zapakuj je jeszcze raz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.3': "Zapisz numer partii na liście.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.q': "Jaka data ma być na etykiecie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.a': "Za dziesięć dni. Spójrz na listę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels': "Zła etykieta jest niebezpieczna", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.b': "Etykieta mówi klientowi, co jest w środku, ile to waży i do kiedy jest dobre. Zła data albo zła etykieta może sprawić, że ludzie zachorują, na przykład kiedy brakuje alergenu. Dlatego przy każdej nowej serii sprawdź pierwsze etykiety: produkt, datę i numer partii. Coś jest nie tak? Przerwij pracę i powiedz przełożonemu. Produkty ze złą etykietą odkłada się na bok, nigdy się ich nie sprzedaje. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.p': "Etykieta jest zła.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.s': "Widzisz, że data na etykietach jest o tydzień za późna. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o1': "Przestajesz pakować i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o2': "Pracujesz dalej: tydzień nie ma znaczenia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o3': "Poprawiasz datę długopisem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.w': "Zła data może sprawić, że ludzie zjedzą jedzenie, które nie jest już bezpieczne. Lepiej zatrzymać się teraz, niż później wycofywać produkty.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.linecleaning': "Mycie linii", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuim': "piana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hogedrukspuit': "myjka ciśnieniowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naspoelen': "spłukać (zmyć czystą wodą)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.demonteren': "rozebrać (na części)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.borstel': "szczotka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restjes': "resztki (małe kawałki jedzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.1': "Najpierw wyłącz maszynę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.2': "Nanieś pianę na taśmę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.3': "Potem spłucz wszystko czystą wodą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.q': "Czy taśma jest już czysta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.a': "Jeszcze nie. Muszę ją jeszcze spłukać.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning': "Przed myciem wyłącz zasilanie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.b': "Nigdy nie myj maszyny, która pracuje. Wyłącz ją i dopilnuj, żeby nikt nie mógł jej znowu włączyć: postępuj według kroków twojej firmy. Noś właściwe rękawice, okulary i buty: środki czyszczące mogą poparzyć skórę i oczy. Nigdy nie mieszaj środków. Najpierw usuń resztki, potem nanieś pianę, szoruj i spłucz. Nie pryskaj wodą na skrzynki elektryczne ani na wtyczki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.p': "Czy maszyna jest wyłączona?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.s': "W taśmie utknął kawałek mięsa. Maszyna jeszcze pracuje. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o1': "Najpierw ją wyłączasz, potem go wyjmujesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o2': "Szybko wyciągasz go ręką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o3': "Wypychasz go nożem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.w': "Pracująca taśma może w sekundę wciągnąć rękę. Wyłączenie zajmuje tylko chwilę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.haccp': "Sprawdzanie i zapisywanie (HACCP)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlepunt': "punkt kontrolny (krok, w którym musisz coś sprawdzić)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerntemperatuur': "temperatura wewnętrzna (temperatura w środku jedzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikthermometer': "termometr szpilkowy (wbijasz go w jedzenie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijking': "odchylenie (coś nie jest tak, jak powinno)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekproef': "kontrola wyrywkowa (sprawdzasz kilka produktów)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwaliteitsdienst': "dział jakości (QA)", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.1': "Zmierz temperaturę wewnętrzną termometrem szpilkowym.", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.2': "Zapisz wszystko na liście.", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.3': "Coś jest nie tak? Od razu to zgłoś.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.q': "Dlaczego muszę wszystko zapisywać?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.a': "Dzięki temu wiemy, że jedzenie jest bezpieczne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp': "HACCP: sprawdź, zapisz, zgłoś", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.b': { m: "Każda firma spożywcza pracuje z planem bezpieczeństwa żywności (HACCP). Jest w nim napisane, na których etapach musisz coś sprawdzić, na przykład temperaturę w chłodni albo temperaturę wewnętrzną ugotowanego mięsa. Sprawdzasz, zapisujesz i podpisujesz. Zapisuj to, co naprawdę zmierzyłeś, także jeśli wynik jest zły. Zły wynik to nie twoja wina, ale ukrywanie go jest niebezpieczne. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Każda firma spożywcza pracuje z planem bezpieczeństwa żywności (HACCP). Jest w nim napisane, na których etapach musisz coś sprawdzić, na przykład temperaturę w chłodni albo temperaturę wewnętrzną ugotowanego mięsa. Sprawdzasz, zapisujesz i podpisujesz. Zapisuj to, co naprawdę zmierzyłaś, także jeśli wynik jest zły. Zły wynik to nie twoja wina, ale ukrywanie go jest niebezpieczne. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Każda firma spożywcza pracuje z planem bezpieczeństwa żywności (HACCP). Jest w nim napisane, na których etapach musisz coś sprawdzić, na przykład temperaturę w chłodni albo temperaturę wewnętrzną ugotowanego mięsa. Sprawdzasz, zapisujesz i podpisujesz. Zapisuj prawdziwy wynik pomiaru, także jeśli jest zły. Zły wynik to nie twoja wina, ale ukrywanie go jest niebezpieczne. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.p': "Temperatura jest za wysoka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.s': { m: "Zapomniałeś zrobić pomiar o dziesiątej. Kolega mówi: „Po prostu wpisz dobrą liczbę.” Co robisz?", f: "Zapomniałaś zrobić pomiar o dziesiątej. Kolega mówi: „Po prostu wpisz dobrą liczbę.” Co robisz?", x: "Pomiar o dziesiątej ci umknął. Kolega mówi: „Po prostu wpisz dobrą liczbę.” Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o1': "Mierzysz teraz i wpisujesz prawdziwą godzinę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o2': "Wpisujesz dobrą liczbę na dziesiątą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o3': "Zostawiasz pustą rubrykę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.w': "Lista musi pokazywać, co naprawdę się stało. Wymyślona liczba ukrywa problem, przez który ludzie mogą zachorować.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.collection': "Odbiór odpadów", // nieuw, nalezen // nagelezen AI 28 nov
    'l.binlorry': "Śmieciarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniswagen': "śmieciarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kliko': "pojemnik na kółkach (kosz na śmieci na kółkach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kieplift': "podnośnik do pojemników (podnosi pojemnik i go opróżnia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.treeplank': "stopień z tyłu (stopień na tyle śmieciarki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijplaatsing': "śmieci obok pojemnika (worki zostawione obok kosza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ophaaldag': "dzień odbioru", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.1': "Postaw pojemnik na podnośniku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.2': "Obok kontenera stoją worki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.3': "Ten pojemnik jest za ciężki. Zostaw go.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.q': "Mogę jechać z tyłu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.a': "Nie, wsiadasz do kabiny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry': { m: "Bądź widoczny i jedź w kabinie", f: "Bądź widoczna i jedź w kabinie", x: "Zadbaj o widoczność i jedź w kabinie" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.binlorry.b': "Na każdej trasie noś odzież odblaskową. Wsiadaj i wysiadaj od strony chodnika, nigdy od strony ruchu. Jedź w kabinie, a nie na tyle śmieciarki: na tyle możesz jechać tylko wtedy, gdy twoja firma wyraźnie na to pozwala, i nigdy, kiedy cofa albo jedzie szybko. Trzymaj się z dala od podnośnika, kiedy się rusza. Pojemnik jest za ciężki albo coś z niego wystaje? Zostaw go i zgłoś to. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.binlorry.p': "Ten pojemnik jest za ciężki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.s': "Następna ulica jest bardzo blisko. Kierowca mówi: „Stań na stopniu z tyłu.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o1': "Mimo to wsiadasz do kabiny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o2': "Stajesz na stopniu: to blisko.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o3': "Idziesz za śmieciarką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.w': { m: "Upadek z jadącej śmieciarki to jedno z największych zagrożeń w tej pracy. W kabinie jesteś bezpieczny.", f: "Upadek z jadącej śmieciarki to jedno z największych zagrożeń w tej pracy. W kabinie jesteś bezpieczna.", x: "Upadek z jadącej śmieciarki to jedno z największych zagrożeń w tej pracy. W kabinie nic ci nie grozi." }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.reversing': "Bezpieczne cofanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achteruitrijden': "cofać (jechać do tyłu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dodehoek': "martwe pole (miejsce, gdzie kierowca cię nie widzi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzer': "osoba kierująca (osoba, która pokazuje kierowcy drogę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogcontact': "kontakt wzrokowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.piepen': "piszczeć, pikać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cabine': "kabina (gdzie siedzi kierowca)", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.1': "Nigdy nie stój za śmieciarką.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.2': "Nie widzę cię w lusterku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.3': "Złap kontakt wzrokowy z kierowcą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.q': "Pomożesz mi cofnąć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.a': "Tak, stoję po lewej. Patrz w lusterko.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing': "Nigdy za cofającą śmieciarką", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.b': "Wiele wypadków ze śmieciarkami zdarza się, kiedy jadą do tyłu. Kierowca nie widzi tego, co jest tuż za śmieciarką: to martwe pole. Dlatego nigdy nie stój i nie chodź za śmieciarką, która może cofać. Kieruj kierowcą z boku, tam, gdzie widzicie się w lusterku. Nie ma kontaktu wzrokowego? Kierowca się zatrzymuje. Zanim zaczniecie, ustalcie jasne znaki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.p': "Stój! Już cię nie widzę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.s': "Śmieciarka cofa. Idziesz za nią, żeby wziąć worek. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o1': "Czekasz, aż śmieciarka stanie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o2': "Idziesz szybko: to tylko sekunda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o3': "Machasz do kierowcy i idziesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.w': "Kierowca nie widzi cię za śmieciarką. Jedna sekunda wystarczy na wypadek.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesorting': "Sortowanie odpadów", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papier': "papier", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plastic': "plastik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gft': "odpady bio (owoce, warzywa i rośliny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restafval': "odpady zmieszane (to, czego nie da się posortować)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.karton': "karton, tektura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blik': "puszka", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.1': "Szkło idzie do pojemnika na szkło.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.2': "To należy do odpadów zmieszanych.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.3': "Złóż karton na płasko.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.q': "Gdzie idzie pudełko po pizzy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.a': "Do odpadów zmieszanych. Jest na nim tłuszcz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting': "Dobre sortowanie oszczędza pracę", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.b': "Posortowane odpady można znowu wykorzystać: z papieru robi się papier, ze szkła szkło. Ale jedna zła rzecz może zepsuć cały ładunek. Dlatego zajrzyj do pojemnika, zanim go opróżnisz. Jest tam coś, co nie pasuje, na przykład worek z odpadami zmieszanymi w papierze? Zostaw go albo postępuj według zasad twojej firmy. To, jakie odpady gdzie idą, jest różne w każdej gminie: naucz się zasad w swojej okolicy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.p': "To tu nie pasuje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.s': "Pojemnik na papier jest pełen czarnych worków na śmieci. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o1': "Zostawiasz go i zgłaszasz to.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o2': "Opróżniasz go do papieru.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o3': "Wyjmujesz worki ręką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.w': "Śmieci w papierze psują cały ładunek. W workach mogą też być ostre albo brudne rzeczy.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesafety': "Ostre rzeczy i podnoszenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijwond': "rana cięta (rana od czegoś ostrego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikken': "ukłuć (ostry koniec wchodzi w skórę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naald': "igła", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherp': "ostry", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rugpijn': "ból pleców", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tetanusprik': "szczepionka przeciw tężcowi (zastrzyk przeciw chorobie od brudu w ranie)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.1': "Nigdy nie trzymaj worka od spodu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.2': "Uwaga, w tym worku jest szkło.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.3': { m: "Ukłułem się igłą.", f: "Ukłułam się igłą.", x: "Igła mnie ukłuła." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.q': "Mam skaleczenie. Co mam zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.a': "Dobrze umyj ranę. I powiedz mi o tym.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety': "Nigdy nie ściskaj worka", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.b': "W worku na śmieci może być szkło, noże albo igły. Dlatego nigdy nie przyciskaj worka do ciała, nigdy go nie ściskaj i nigdy nie noś go przy nodze: trzymaj go za górę, z dala od siebie. Noś rękawice. Podnoś na ugiętych kolanach, z prostymi plecami, a pojemnik pchaj, nie noś go. Coś cię ukłuło albo skaleczyło? Dobrze umyj ranę wodą i powiedz przełożonemu tego samego dnia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.p': { m: "Ukłułem się.", f: "Ukłułam się.", x: "Coś mnie ukłuło." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.s': "Worek się rozrywa. Widzisz w nim igłę. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o1': "Nie dotykasz jej i zgłaszasz to.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o2': "Podnosisz ją w rękawicach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o3': "Wpychasz ją z powrotem do worka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.w': "Rękawice nie zatrzymują igły. Igła może przenosić chorobę.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.recycling': "Punkt zbiórki odpadów", // nieuw, nalezen // nagelezen AI 28 nov
    'l.yard': "W punkcie zbiórki odpadów", // nieuw, nalezen // nagelezen AI 28 nov
    'w.milieustraat': "punkt zbiórki odpadów, PSZOK (tu ludzie przywożą duże albo specjalne odpady)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grofvuil': "odpady wielkogabarytowe (duże rzeczy, na przykład kanapa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puin': "gruz (połamane kamienie i cegły)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.matras': "materac", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegbrug': "waga samochodowa (waga dla samochodów i ciężarówek)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvalpas': "karta na odpady (mieszkańcy pokazują ją przy wjeździe)", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.1': "Gruz idzie do kontenera numer cztery.", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.2': "Poproszę o kartę na odpady.", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.3': "Najpierw proszę wjechać na wagę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.q': "Gdzie idzie ten materac?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.a': "Do kontenera na odpady wielkogabarytowe, z tyłu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard': "Pomagaj, ale dbaj o bezpieczeństwo na placu", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.b': { m: "W punkcie zbiórki odpadów mówisz gościom, gdzie idą ich odpady, i sprawdzasz, czy są dobrze posortowane. Bądź miły: wiele osób przyjeżdża tylko kilka razy w roku i nie zna zasad. Trzymaj dzieci i gości z dala od maszyn i od krawędzi wysokich kontenerów. Ciężkie rzeczy podnoście razem albo niech gość sam niesie swoje rzeczy. Ktoś przywozi coś, czego nie znasz? Zapytaj, zanim to wyląduje w kontenerze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "W punkcie zbiórki odpadów mówisz gościom, gdzie idą ich odpady, i sprawdzasz, czy są dobrze posortowane. Bądź miła: wiele osób przyjeżdża tylko kilka razy w roku i nie zna zasad. Trzymaj dzieci i gości z dala od maszyn i od krawędzi wysokich kontenerów. Ciężkie rzeczy podnoście razem albo niech gość sam niesie swoje rzeczy. Ktoś przywozi coś, czego nie znasz? Zapytaj, zanim to wyląduje w kontenerze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "W punkcie zbiórki odpadów mówisz gościom, gdzie idą ich odpady, i sprawdzasz, czy są dobrze posortowane. Zachowuj się życzliwie: wiele osób przyjeżdża tylko kilka razy w roku i nie zna zasad. Trzymaj dzieci i gości z dala od maszyn i od krawędzi wysokich kontenerów. Ciężkie rzeczy podnoście razem albo niech gość sam niesie swoje rzeczy. Ktoś przywozi coś, czego nie znasz? Zapytaj, zanim to wyląduje w kontenerze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.p': "To idzie do kontenera numer cztery.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.s': "Mężczyzna chce wrzucić pełny worek do kontenera na drewno. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o1': "Pytasz, co jest w worku.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o2': "Pozwalasz mu: to jego odpady.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o3': "Wrzucasz go za niego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.w': "Jedna zła rzecz może zepsuć pełny kontener. Miłe pytanie sprawia, że odpady zostają czyste.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hazardous': "Odpady niebezpieczne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chemischafval': "odpady niebezpieczne (groźne odpady, na przykład farba i olej)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spuitbus': "puszka z aerozolem, spray", // nieuw, nalezen // nagelezen AI 28 nov
    'w.asbest': "azbest (niebezpieczny materiał w starych budynkach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekken': "przeciekać, cieknąć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gevarensymbool': "symbol zagrożenia (obrazek, który ostrzega przed niebezpieczeństwem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vat': "beczka", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.1': "Postaw farbę przy odpadach niebezpiecznych.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.2': "Ta butelka cieknie. Podnieś ją w rękawicach.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.3': "Azbest musi być dobrze zapakowany.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.q': "Co jest w tej butelce?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.a': "Nie wiem. Odstaw ją na bok.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous': "Nieznane? Nie otwieraj, nie wąchaj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.b': "Odpady niebezpieczne, takie jak farba, olej, środki czyszczące, baterie i spraye, mogą się zapalić, zatruć albo wybuchnąć. Szukaj symboli zagrożenia. Noś rękawice i okulary ochronne. Nigdy nie otwieraj butelki, żeby powąchać, co jest w środku, i nigdy nie mieszaj środków. Cieknącą butelkę trzymaj pionowo i postaw ją w tacce. Azbest można przyjąć tylko wtedy, gdy jest dobrze zapakowany: nigdy go nie łam i nie wyjmuj go z opakowania. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.p': "Co tu jest w środku?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.s': "Kobieta przynosi butelkę bez etykiety. Mocno śmierdzi. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o1': "Odstawiasz ją osobno i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o2': "Otwierasz ją i wąchasz, co to jest.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o3': "Wlewasz to do beczki na farbę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.w': "Nieznane środki mogą reagować z innymi. Przełożony wie, gdzie można to bezpiecznie odstawić.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.baler': "Prasa belująca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balenpers': "prasa belująca (maszyna, która prasuje odpady w bloki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baal': "bela (sprasowany blok papieru albo plastiku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persen': "prasować, zgniatać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastlopen': "zablokować się, zaciąć się", // nieuw, nalezen // nagelezen AI 28 nov
    'w.binddraad': "drut do wiązania bel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulopening': "otwór wsadowy (tędy wchodzą odpady)", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.1': "Prasa się zablokowała. Naciśnij wyłącznik awaryjny.", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.2': "Nigdy nie wkładaj ręki do prasy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.3': "Dobrze zwiąż belę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.q': "Prasa się zacina. Mogę zajrzeć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.a': "Nie. Najpierw trzeba odłączyć zasilanie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler': "Nigdy nie sięgaj do prasy", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.b': "Prasa belująca prasuje z ogromną siłą. Używaj jej tylko wtedy, gdy umiesz ją obsługiwać. Nigdy nie wkładaj ręki, ramienia ani stopy do otworu wsadowego, także wtedy, gdy maszyna wygląda na zatrzymaną. Zablokowała się? Naciśnij wyłącznik awaryjny, wyłącz ją i dopilnuj, żeby nikt nie mógł jej włączyć: postępuj według kroków twojej firmy. Dopiero wtedy zajrzyj. Nigdy nie wchodź do prasy belującej ani do kontenera. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.p': "Prasa się zablokowała.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.s': "W otworze utknął kawałek kartonu. Maszyna stoi. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o1': "Wyłączasz ją całkowicie, potem go wyjmujesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o2': "Szybko wyciągasz go ręką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o3': "Wpychasz go stopą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.w': "Maszyna, która stoi, może znowu ruszyć. Bez odłączenia zasilania twoja ręka jest w niebezpieczeństwie.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shovel': "Ładowarka na placu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.shovel': "ładowarka kołowa (duża maszyna z łyżką z przodu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaailamp': "lampa ostrzegawcza (pomarańczowe światło na dachu maszyny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bunker': "boks (duże betonowe miejsce na jeden rodzaj odpadów)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.looppad': "ścieżka dla pieszych (droga tylko dla ludzi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toeteren': "trąbić", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opscheppen': "nabierać (łyżką albo łopatą)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.1': "Zostań na ścieżce dla pieszych.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.2': "Ładowarka cofa. Uwaga!", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.3': "Lampa ostrzegawcza się świeci. Maszyna jedzie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.q': "Mogę przejść obok ładowarki?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.a': "Tylko jeśli kierowca cię widzi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel': "Nie wchodź ładowarce w drogę", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.b': "Ładowarka kołowa jest duża, a kierowca widzi mało wokół niej, szczególnie z tyłu. Dlatego zostań na ścieżkach dla pieszych i noś odzież odblaskową. Nigdy nie chodź za maszyną, która jedzie. Chcesz przejść? Poczekaj, aż kierowca cię zobaczy i da znak. Lampa ostrzegawcza oznacza: ta maszyna pracuje. Trzymaj gości daleko od niej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.p': "Widzisz mnie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.s': "Musisz przejść obok pracującej ładowarki. Kierowca patrzy w drugą stronę. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o1': "Czekasz, aż cię zobaczy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o2': "Szybko przechodzisz obok.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o3': "Przechodzisz za maszyną.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.w': "Kierowca, który cię nie zauważył, nie może się dla ciebie zatrzymać.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.toddlers': "Dzieci", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nappies': "Przewijanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luier': "pieluszka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verschonen': "przewijać (zmieniać pieluszkę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.commode': "przewijak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.billendoekje': "chusteczka nawilżana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potje': "nocnik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zindelijk': "bez pieluszki (dziecko umie korzystać z toalety)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.1': "Idę przewinąć Sema.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.2': "Po przewinięciu umyj ręce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.3': "Nigdy nie zostawiaj dziecka samego na przewijaku.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.q': { m: "Kiedy przewinąłeś Noor?", f: "Kiedy przewinęłaś Noor?", x: "O której Noor miała zmienianą pieluszkę?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.a': "O dziesiątej. Jest to w aplikacji.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies': "Jedna ręka na dziecku", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.b': "Przygotuj wszystko, zanim położysz dziecko na przewijaku: czystą pieluszkę, chusteczki i ubranie. Potem cały czas trzymaj jedną rękę na dziecku. Nigdy nie odchodź, nawet na sekundę. Po każdym przewijaniu umyj ręce i wyczyść przewijak. Zapisz, kiedy zmieniasz pieluszkę, żeby rodzice wiedzieli. Widzisz wysypkę albo ranę? Zapisz to i powiedz koledze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.p': "Właśnie go przewijam.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.s': { m: "Przewijasz niemowlę. Zapomniałeś chusteczek, są po drugiej stronie pokoju. Co robisz?", f: "Przewijasz niemowlę. Zapomniałaś chusteczek, są po drugiej stronie pokoju. Co robisz?", x: "Przewijasz niemowlę. Chusteczki zostały po drugiej stronie pokoju. Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o1': "Bierzesz niemowlę ze sobą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o2': "Szybko po nie idziesz: to blisko.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o3': "Zostawiasz niemowlę i wołasz kogoś.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.w': "Niemowlę może w sekundę spaść z przewijaka. Nigdy nie zostawiaj tam dziecka samego.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mealtime': "Jedzenie i picie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fles': "butelka (dla niemowlęcia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slabbetje': "śliniak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beker': "kubek (z uchem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kinderstoel': "krzesełko do karmienia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fruithap': "przecier owocowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boertje': "odbijanie (powietrza po jedzeniu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.1': "Przed jedzeniem umyj ręce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.2': "Daj Lisie butelkę o dwunastej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.3': "Wszyscy siadają do stołu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.q': "Czy Daan może dostać ciasteczko?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.a': "Nie, ma alergię. Spójrz na listę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime': "Zanim dasz jedzenie, sprawdź listę", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.b': "Zanim dasz dziecku jedzenie albo picie, sprawdź listę: niektóre dzieci mają alergię, a inne nie mogą jeść pewnych rzeczy ze względu na zdrowie albo wiarę. Przed jedzeniem umyj ręce sobie i dzieciom. Niech dzieci siedzą, kiedy jedzą i piją, nigdy nie chodzą ani nie biegają. Dla małych dzieci krój jedzenie na małe kawałki, na przykład winogrona. Nigdy nie dawaj dziecku niczego, co inne dziecko przyniosło z domu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.p': "Czy on może to jeść?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.s': "Dziecko płacze, bo chce ciasteczko. Nie znasz dobrze tego dziecka. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o1': "Najpierw sprawdzasz listę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o2': "Dajesz je: to tylko ciasteczko.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o3': "Dajesz pół ciasteczka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.w': "W ciasteczku mogą być orzechy, mleko albo jajko. Dla dziecka z alergią może to być bardzo niebezpieczne.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.naptime': "Spanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedje': "łóżeczko (małe łóżko dla niemowlęcia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapkamer': "sypialnia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knuffel': "przytulanka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speen': "smoczek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.babyfoon': "elektroniczna niania", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapzak': "śpiworek (dla niemowlęcia)", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.1': "Połóż niemowlę na plecach.", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.2': "Często zaglądam do sypialni.", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.3': "Masz swoją przytulankę. Śpij dobrze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.q': "Czy Mila już śpi?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.a': "Tak, od pierwszej. Zaraz znowu zajrzę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime': "Niemowlęta śpią na plecach", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.b': "Niemowlę śpi najbezpieczniej na plecach, w śpiworku, we własnym łóżeczku. Żadnej poduszki, żadnego luźnego kocyka i żadnych dużych zabawek w łóżeczku. Utrzymuj w pokoju chłód i świeże powietrze. Często sprawdzaj śpiące dzieci: patrz i słuchaj, także kiedy elektroniczna niania jest włączona. Rodzic prosi, żeby jego dziecko spało inaczej? Najpierw powiedz przełożonemu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.p': "Pójdę zajrzeć do sypialni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.s': "Niemowlę zasnęło w łóżeczku na brzuszku. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o1': "Delikatnie obracasz je na plecy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o2': "Pozwalasz mu spać: przecież już śpi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o3': "Kładziesz obok niego poduszkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.w': "Na plecach niemowlę może swobodnie oddychać. Poduszka może zakryć mu twarz.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.playtime': "Zabawa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spelen': "bawić się", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speelgoed': "zabawki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zandbak': "piaskownica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijbaan': "zjeżdżalnia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puzzel': "puzzle, układanka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buitenspelen': "bawić się na dworze", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.1': "Idziemy bawić się na dwór. Zakładamy kurtki!", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.2': "Posprzątaj zabawki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.3': "Na zjeżdżalni jedno dziecko naraz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.q': "Mogę się bawić układanką?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.a': "Tak, przy stole. Potem ją sprzątasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime': "Bezpieczna zabawa: patrz, licz, sprawdzaj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.b': "Dzieci uczą się przez zabawę, więc pozwól im próbować różnych rzeczy. Ale zawsze miej je na oku, także na dworze. Policz dzieci, kiedy wychodzicie i kiedy wracacie do środka. Najpierw sprawdź plac zabaw: czy brama jest zamknięta, czy jest tam szkło albo śmieci? Zabawki z małymi częściami nie są dla dzieci poniżej trzech lat: mogą się nimi zakrztusić. Często myj zabawki, które dzieci biorą do buzi. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.p': "Czy wszyscy są?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.s': "Wracasz z placu zabaw do środka. Liczysz dzieci i jednego brakuje. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o1': "Mówisz koledze i od razu szukasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o2': "Czekasz: dziecko samo przyjdzie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o3': "Liczysz jeszcze raz jutro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.w': "Dziecko samo na dworze może zrobić sobie krzywdę albo odejść. Liczy się każda minuta.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.daycare': "Rodzice, bezpieczeństwo i grupa", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pickup': "Przyprowadzanie i odbieranie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouder': "rodzic", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscheid': "pożegnanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppas': "opiekunka, niania", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftje': "zeszyt (na notatki między rodzicami a opiekunami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderapp': "aplikacja dla rodziców (na zdjęcia i wiadomości do rodziców)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wennen': "przyzwyczajać się (do nowego miejsca)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.1': "Zapiszę to w zeszycie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.2': "Powiedz tacie pa pa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.3': "Wrzucam zdjęcie do aplikacji dla rodziców.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.q': "Kto dziś odbiera Sema?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.a': "Jego babcia. Jest na liście.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup': "Tylko osobom z listy", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.b': "Oddawaj dziecko tylko rodzicowi albo komuś, o kim rodzice ci powiedzieli. Nie znasz tej osoby? Zapytaj, kim jest, sprawdź jej dokument tożsamości i upewnij się u rodziców albo u przełożonego. Przy odbiorze powiedz rodzicowi, jak minął dzień: jedzenie, spanie, zabawa i wszystko, co było szczególne. Ważne rzeczy zapisz w zeszycie albo w aplikacji. O innych dzieciach rozmawiaj tylko z ich własnymi rodzicami. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.p': "Przepraszam, z kim rozmawiam? Zadzwonię do rodziców.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.s': "Po Sema przychodzi mężczyzna, którego nie znasz. Nie ma go na liście. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o1': "Dzwonisz do rodziców, zanim Sem wyjdzie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o2': "Puszczasz Sema: ten mężczyzna zna jego imię.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.pickup.o3': "Pytasz Sema, czy go zna.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.w': "Odpowiadasz za dziecko, dopóki nie przejmie go osoba wybrana przez rodziców.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.childsafety': "Bezpieczeństwo w grupie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.traphekje': "bramka na schody", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerstrip': "osłona na palce (na drzwiach, żeby palce się nie przytrzasnęły)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslikken': "zakrztusić się (jedzenie wpada do złej dziurki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bult': "guz (na głowie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaafwond': "otarcie (zdarta skóra)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toezicht': "nadzór (pilnujesz dzieci)", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.1': "Zawsze zamykaj bramkę na schody.", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.2': "Przykładam trochę lodu do guza.", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.3': "Sem się krztusi. Pomagam mu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.q': "Czy Bo się przewróciła?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.a': "Tak, ma guza. Dzwonię do jej mamy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety': "Rozejrzyj się oczami dziecka", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.b': "Małe dzieci wkładają wszystko do buzi i na wszystko się wspinają. Dlatego trzymaj bramkę na schody zamkniętą, odkładaj środki czystości i leki poza zasięg dzieci i trzymaj gorące napoje z dala od nich. Codziennie sprawdzaj pomieszczenie. Dziecko zrobiło sobie krzywdę? Udziel pierwszej pomocy, pociesz dziecko, powiedz rodzicom i zapisz to. Czy to coś poważnego? Zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.p': "Bramka na schody jest otwarta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.s': "Stawiasz gorącą kawę na niskim stoliku. Podchodzi do niej maluch. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o1': "Od razu stawiasz kawę wysoko.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o2': "Mówisz maluchowi, żeby jej nie dotykał.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o3': "Szybko ją wypijasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.w': "Gorąca kawa może mocno poparzyć małe dziecko. Poza zasięgiem dzieci to jedyne bezpieczne miejsce.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sickchild': "Chore dziecko i alergie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huiduitslag': "wysypka (czerwone plamy na skórze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diarree': "biegunka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overgeven': "wymiotować", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergielijst': "lista alergii", // nieuw, nalezen // nagelezen AI 28 nov
    'w.adrenalinepen': "autostrzykawka z adrenaliną (lek w strzykawce na silną alergię)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperaturen': "mierzyć temperaturę", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.1': "Sem ma gorączkę. Dzwonię do jego taty.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.2': "Przed jedzeniem spójrz na listę alergii.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.3': "Nigdy nie dawaj leku bez zgody.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.q': "Jak się czuje Jip?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.a': "Jest bardzo ciepły. Zmierzę mu temperaturę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild': "Chore dziecko: mów, nie zgaduj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.b': { m: "Obserwuj, jak czują się dzieci. Dziecko jest gorące, bardzo zmęczone, wymiotuje albo ma wysypkę? Zmierz mu temperaturę, powiedz koledze i zadzwoń do rodziców. Lek dawaj tylko z pisemną zgodą rodziców i zapisz, co dałeś i kiedy. Wiedz, które dzieci mają alergię i gdzie są ich leki. Dziecko z silną reakcją alergiczną: użyj autostrzykawki z adrenaliną, jeśli cię tego nauczono, i zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Obserwuj, jak czują się dzieci. Dziecko jest gorące, bardzo zmęczone, wymiotuje albo ma wysypkę? Zmierz mu temperaturę, powiedz koledze i zadzwoń do rodziców. Lek dawaj tylko z pisemną zgodą rodziców i zapisz, co dałaś i kiedy. Wiedz, które dzieci mają alergię i gdzie są ich leki. Dziecko z silną reakcją alergiczną: użyj autostrzykawki z adrenaliną, jeśli cię tego nauczono, i zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Obserwuj, jak czują się dzieci. Dziecko jest gorące, bardzo zmęczone, wymiotuje albo ma wysypkę? Zmierz mu temperaturę, powiedz koledze i zadzwoń do rodziców. Lek dawaj tylko z pisemną zgodą rodziców i zapisz, jaki lek i o której godzinie dziecko dostało. Wiedz, które dzieci mają alergię i gdzie są ich leki. Dziecko z silną reakcją alergiczną: użyj autostrzykawki z adrenaliną, jeśli cię tego nauczono, i zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.p': "Państwa dziecko jest chore. Czy mogą Państwo po nie przyjechać?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.s': "Mama mówi: „Daj mu syrop na gorączkę o drugiej.” Nie ma formularza. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o1': "Prosisz ją, żeby najpierw podpisała formularz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o2': "Dajesz go: mama prosiła.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o3': "Dajesz połowę, dla bezpieczeństwa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.w': "Bez pisemnej zgody nie wolno ci dawać leków. Formularz chroni dziecko i ciebie.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.grouprules': "Grupa i zasady", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pedagogischmedewerker': "opiekun / opiekunka dzieci (w żłobku albo przedszkolu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mentor': "mentor (opiekun, który z bliska śledzi rozwój jednego dziecka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierogenprincipe': "zasada czworga oczu (inny dorosły zawsze może cię widzieć albo słyszeć)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.observeren': "obserwować (uważnie patrzeć i to zapisywać)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.peuter': "maluch (dziecko w wieku dwóch albo trzech lat)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groep': "grupa (dzieci, które codziennie są razem)", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.1': { m: "Jestem mentorem Lisy.", f: "Jestem mentorką Lisy.", x: "Pełnię rolę mentora Lisy." }, // nieuw, nalezen // nagelezen AI 28 nov // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    's.grouprules.2': "Kolega zawsze może nas widzieć albo słyszeć.", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.3': "Martwię się o Daana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.q': "Mogę wyjść z grupą na dwór w pojedynkę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.a': "Tak, ale najpierw powiedz koledze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules': { m: "Nigdy sam poza zasięgiem wzroku", f: "Nigdy sama poza zasięgiem wzroku", x: "Nigdy w pojedynkę poza zasięgiem wzroku" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.b': "W opiece nad dziećmi inny dorosły musi zawsze móc cię widzieć albo słyszeć, kiedy jesteś z dziećmi. To chroni dzieci i ciebie. Każde dziecko ma mentora: jednego opiekuna, który z bliska śledzi rozwój tego dziecka i rozmawia z rodzicami. Martwisz się, co dzieje się z dzieckiem w domu, na przykład z powodu siniaków albo strachu? Nie wypytuj za bardzo dziecka: powiedz przełożonemu, który zna kolejne kroki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.p': "Martwię się o to dziecko.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.s': "Znowu widzisz siniaki u dziecka. Dziecko jest ciche. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o1': "Mówisz przełożonemu tego samego dnia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o2': "Zadajesz dziecku dużo pytań.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o3': "Dzwonisz do rodziców i pytasz dlaczego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.w': "Przełożony zna kroki, kiedy martwisz się o dziecko. Dużo pytań może przestraszyć dziecko.", // nieuw, nalezen // nagelezen AI 28 nov
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Toalety, hotel i maszyny", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sanitary': "Toalety i umywalki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wastafel': "umywalka (zlew w łazience albo toalecie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpot': "muszla klozetowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletborstel': "szczotka do toalety", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urinoir': "pisuar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalk': "kamień (biały osad z wody na kranach i płytkach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontstopper': "przepychacz (narzędzie do zatkanej toalety albo odpływu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.1': "Najpierw robię umywalki, potem toalety.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.2': "Na kranie jest kamień.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.3': "Toaleta na pierwszym piętrze jest zatkana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.q': "Toalety są gotowe?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.a': "Jeszcze nie. Jedna toaleta jest zatkana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary': "Od czystego do brudnego", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.b': "W łazience pracujesz od czystego do brudnego: najpierw lustra i umywalki, potem toalety, a podłoga na końcu. Wtedy nie przenosisz brudu z toalety na umywalkę. Używaj ściereczek w kolorze dla toalet i noś rękawice. Umyj też szczotkę do toalety i pozwól jej wyschnąć. Toaleta jest zatkana albo zepsuta? Powieś kartkę na drzwiach i zgłoś to. Po skończonej pracy umyj ręce, także po pracy w rękawicach. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.p': "Ta toaleta jest zatkana. Wieszam na niej kartkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.s': { m: "Umyłeś toaletę. Teraz umywalka. Nadal trzymasz tę samą ściereczkę. Co robisz?", f: "Umyłaś toaletę. Teraz umywalka. Nadal trzymasz tę samą ściereczkę. Co robisz?", x: "Toaleta jest już umyta. Teraz umywalka. Nadal trzymasz tę samą ściereczkę. Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o1': "Bierzesz ściereczkę w kolorze dla umywalek.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o2': "Używasz tej samej ściereczki: wygląda jeszcze czysto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o3': "Najpierw płuczesz ściereczkę w toalecie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.w': "Na ściereczce są zarazki z toalety, także jeśli ich nie widać. Nowa ściereczka trzyma je z dala od rąk i twarzy.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hotelroom': "Pokoje hotelowe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laken': "prześcieradło (na łóżku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kussensloop': "poszewka na poduszkę", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dekbed': "kołdra", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handdoek': "ręcznik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamerlijst': "lista pokoi (pokoje, które musisz dziś zrobić)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opmaken': "słać (łóżko)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.1': "Ścielę łóżko czystą pościelą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.2': "Połóż dwa czyste ręczniki w łazience.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.3': "Pokój dwanaście jest gotowy. Idę do trzynastki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.q': "Ile pokoi ci jeszcze zostało?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.a': "Jeszcze cztery. Wtedy moja lista jest gotowa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom': "Zapukaj, powiedz, kim jesteś, i czekaj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.b': "Zanim wejdziesz do pokoju hotelowego, zapukaj i powiedz, kim jesteś, na przykład „Housekeeping!”. Chwilę poczekaj i zapukaj jeszcze raz. Na drzwiach wisi kartka „Niet storen”? Wtedy nie wchodź i zapisz to na liście pokoi. Gość jest w pokoju? Zapytaj, czy możesz teraz posprzątać, albo przyjdź później. Rzeczy gościa zostają tam, gdzie są. Gość czegoś zapomniał? Zanieś to do recepcji. Nigdy nic nie zatrzymuj dla siebie, nawet drobiazgu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.p': "Dzień dobry. Czy mogę teraz posprzątać pokój?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.s': "W pustym pokoju znajdujesz telefon pod łóżkiem. Gość już wyjechał. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o1': "Zanosisz go do recepcji.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o2': "Zatrzymujesz go: gościa już nie ma.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o3': "Zostawiasz go pod łóżkiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.w': "Zgubione rzeczy dalej należą do gościa. Recepcja może je oddać. Zatrzymanie ich to kradzież i możesz za to stracić pracę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.dosing': "Środki i maszyny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doseren': "dozować (używać właściwej ilości środka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maatbeker': "miarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sprayflacon': "butelka ze spryskiwaczem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.concentraat': "koncentrat (mocny środek, który mieszasz z wodą)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.veiligheidsblad': "karta charakterystyki (mówi o zagrożeniach środka i co robić)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schrobzuigmachine': "szorowarka (maszyna, która szoruje podłogę i zbiera wodę do sucha)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.1': "Wlej jedną nakrętkę do wiadra wody.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.2': "Najpierw przeczytaj etykietę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.3': "Szorowarka musi iść do ładowarki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.q': "Wlej trochę więcej środka. Wtedy będzie czyściej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.a': "Nie, więcej nie znaczy lepiej. Używam miarki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing': "Właściwa dawka, nie więcej", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.b': "Więcej środka nie czyści lepiej. Za dużo zostawia lepką warstwę, więc podłoga szybciej się brudzi i może być śliska. To jest też gorsze dla twojej skóry i płuc. Używaj miarki albo pompki dozującej i rób tak, jak jest na etykiecie. Najpierw woda, potem środek: wtedy nie pryska. Zanim użyjesz szorowarki, sprawdź, czy jest naładowana i ma czystą wodę w zbiorniku. Na końcu opróżnij i wypłucz zbiornik z brudną wodą. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.p': "Ile mam tego wlać?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.s': "Podłoga dalej się klei. Kolega mówi: „Daj podwójnie środka.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o1': "Używasz dawki z etykiety i pytasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o2': "Dajesz podwójnie: wtedy będzie czysto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o3': "Wylewasz środek prosto na podłogę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.w': "Lepka podłoga często oznacza za dużo środka, a nie za mało. Właściwa dawka czyści najlepiej i jest najbezpieczniejsza.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.officenight': "Biura, wcześnie albo późno", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toetsenbord': "klawiatura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papierbak': "pojemnik na papier (na stary papier)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lichtschakelaar': "włącznik światła", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pantry': "aneks kuchenny (mała kuchnia w biurze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurmat': "wycieraczka (mata przy wejściu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alleenwerken': "pracować w pojedynkę (nikogo innego nie ma w budynku)", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.1': "Opróżniam kosze i pojemnik na papier.", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.2': "Nie dotykam papierów na biurku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.3': "Gaszę światło, kiedy skończę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.q': "Pracujesz dziś wieczorem w budynku w pojedynkę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.a': "Tak. Wyślę ci wiadomość, kiedy skończę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight': "W pojedynkę w budynku", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.b': "Wcześnie rano albo późno wieczorem często sprzątasz biuro w pojedynkę. Wiedz, co robić, jeśli coś się stanie: do kogo dzwonisz i gdzie jest apteczka? Miej telefon przy sobie. Umów się z przełożonym albo kolegą, że wysyłasz wiadomość, kiedy zaczynasz i kiedy kończysz. Nie wpuszczaj nikogo, kogo nie znasz. Nie dotykaj papierów, ekranów ani klawiatur bardziej, niż trzeba do sprzątania, i nigdy nie czytaj, co na nich jest. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.p': { m: "Skończyłem i idę już do domu.", f: "Skończyłam i idę już do domu.", x: "Wszystko zrobione, idę już do domu." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.s': "W nocy jakiś mężczyzna puka w szklane drzwi. Mówi, że tu pracuje i zapomniał klucza. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o1': "Nie otwierasz. Dzwonisz do przełożonego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o2': "Wpuszczasz go: wygląda sympatycznie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o3': "Dajesz mu swój klucz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.w': "Każdy może powiedzieć, że tam pracuje. Przełożony może to sprawdzić. Twoje bezpieczeństwo i budynek są najważniejsze.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.cooking': "Kuchnia i obsługa sali", // nieuw, nalezen // nagelezen AI 28 nov
    'l.knives': "Noże i krojenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koksmes': "nóż szefa kuchni (duży nóż kuchenny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dunschiller': "obieraczka do warzyw", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schillen': "obierać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hakken': "siekać (kroić bardzo drobno)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raspen': "trzeć na tarce", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blokjes': "kostka (małe kwadratowe kawałki)", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.1': "Pokrój marchewki w kostkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.2': "Nie wkładaj noża do zlewu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.3': "Posiekaj drobno pietruszkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.q': "Możesz pokroić cebulę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.a': "Tak, szefie. W krążki czy w kostkę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives': "Nóż to narzędzie, nie zabawka", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.b': "Dbaj, żeby nóż był ostry: tępy nóż łatwiej się ześlizguje. Krój na desce, która się nie rusza: podłóż pod nią mokrą ściereczkę. Podwiń palce do środka, jak pazur. Chodź z ostrzem w dół, blisko nogi, i mów „Mes!” kiedy kogoś mijasz. Nigdy nie wkładaj noża do zlewu pełnego wody: ktoś może go chwycić, nie widząc go. Nóż spada? Cofnij się, nie łap go. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.p': "Nóż! Idę za tobą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.s': "Kroisz. Nóż zsuwa ci się z deski i spada. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o1': "Cofasz się i pozwalasz mu spaść.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o2': "Szybko łapiesz go ręką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o3': "Zatrzymujesz go stopą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.w': "Spadający nóż może głęboko przeciąć rękę albo stopę. Nóż na podłodze trzeba tylko umyć.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.rawcooked': "Surowe, ugotowane i alergeny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rauw': "surowy (nieugotowany)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaar': "ugotowany, gotowy (do jedzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdekken': "przykryć (pokrywką albo folią)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurcode': "kod kolorów (jeden kolor deski i noża dla każdego rodzaju jedzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergenenlijst': "lista alergenów (mówi, co jest w każdym daniu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glutenvrij': "bezglutenowy (bez glutenu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.1': "Surowe mięso idzie na dół lodówki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.2': "Kurczak jest już gotowy?", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.3': "Przykryj pojemniki w chłodni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.q': "Ten sos jest bezglutenowy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.a': "Nie wiem na pewno. Sprawdzę na liście alergenów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked': "Surowe i gotowe nigdy się nie stykają", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.b': "Surowe mięso, ryby i jajka mogą mieć zarazki. Trzymaj je z dala od jedzenia, które jest gotowe do zjedzenia. Używaj osobnej deski i noża albo kodu kolorów twojej kuchni i myj ręce, kiedy dotkniesz surowego jedzenia. Surowe mięso idzie na dół lodówki, żeby nic nie kapało na inne jedzenie. Przykrywaj jedzenie i zapisuj na nim datę. Przy alergii może wystarczyć ślad: używaj czystych narzędzi. Restauracja musi umieć powiedzieć gościom, jakie alergeny są w daniu: sprawdź listę alergenów. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.p': "Która deska jest do surowego mięsa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.s': "Kroisz surowego kurczaka. Potem musisz pokroić pomidory do sałatki. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o1': "Bierzesz czystą deskę i czysty nóż.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o2': "Przecierasz deskę ściereczką i kroisz dalej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o3': "Kroisz pomidory na tej samej desce.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.w': "Zarazki z surowego kurczaka przechodzą na pomidory, a sałatki już się nie gotuje. Czysta deska temu zapobiega.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pass': "Zmywalnia i wydawka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pass': "wydawka (lada, na której talerze czekają na kelnera)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bon': "bon (zamówienie od kelnera do kuchni)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spoelkeuken': "zmywalnia (miejsce, gdzie się zmywa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwaskorf': "kosz do zmywarki (kosz, który wkłada się do zmywarki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorspoelen': "wstępnie opłukać (opłukać przed maszyną)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.warmhoudlamp': "lampa grzewcza (utrzymuje talerze w cieple)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.1': "Stolik osiem jest na wydawce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.2': "Wchodzą dwa nowe bony.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.3': "Najpierw opłucz talerze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.q': "Gdzie jest stolik dwanaście?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.a': "Jest na wydawce. Już go niosę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass': "Wydawka: talerze nie czekają", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.b': "Na wydawkę kuchnia stawia talerze dla kelnera. Gorące jedzenie musi szybko trafić do gościa, więc talerz nie czeka długo na wydawce. Sprawdź bon: właściwy stolik, właściwe dania, czysty brzeg talerza? Wtedy go weź. W zmywalni: opłucz, włóż wszystko do koszy, a resztę zrobi maszyna. Nie otwieraj maszyny, kiedy pracuje: para jest bardzo gorąca. Zakładaj rękawice, kiedy uzupełniasz środki do maszyny. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.p': "Który to stolik?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.s': "Na wydawce stoją dwa talerze. Nie wiesz, do którego stolika. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o1': "Patrzysz na bon albo pytasz szefa kuchni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o2': "Zanosisz je do stolika, który czeka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o3': "Czekasz, aż ktoś inny je weźmie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.w': "Talerz przy złym stoliku to dwóch czekających gości i zimne jedzenie. Jedno krótkie pytanie jest szybsze.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.bill': "Dania i rachunek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorgerecht': "przystawka (pierwsze danie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdgerecht': "danie główne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nagerecht': "deser", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reservering': "rezerwacja (stolik zarezerwowany wcześniej)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinapparaat': "terminal płatniczy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.apartbetalen': "płacić osobno (każdy płaci za siebie)", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.1': "Czy mają Państwo rezerwację?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.2': "Płacą Państwo razem czy osobno?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.3': "Czy mam teraz podać danie główne?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.q': "Możemy zapłacić osobno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.a': "Tak, oczywiście. Przyniosę terminal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill': "Pieniądze przy stoliku: licz dwa razy", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.b': "Kiedy gość płaci, wyraźnie powiedz kwotę i pozwól gościowi widzieć terminal. Przy gotówce przelicz pieniądze, kiedy je dostajesz, i jeszcze raz, kiedy wydajesz resztę. Pieniądze idą do kasy albo do twojego portfela kelnerskiego, nigdy do twojej kieszeni. Napiwki (fooi) idą tam, gdzie mówi firma, na przykład do słoika na napiwki. Gość wyszedł bez płacenia? Nie biegnij za nim: powiedz kierownikowi. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.p': "Razem czterdzieści pięć euro, proszę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.s': { m: "Gość daje ci pieniądze i mówi: „Wszystko się zgadza.” Nie przeliczyłeś ich. Co robisz?", f: "Gość daje ci pieniądze i mówi: „Wszystko się zgadza.” Nie przeliczyłaś ich. Co robisz?", x: "Gość daje ci pieniądze i mówi: „Wszystko się zgadza.” Pieniądze nie są przeliczone. Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o1': "Przeliczasz je, kiedy gość jeszcze jest.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o2': "Chowasz je i przeliczasz później.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o3': "Ufasz gościowi: mówisz dziękuję.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.w': "Jeśli liczysz później i brakuje pieniędzy, nikt nie może sprawdzić, co się stało. Liczenie przy stoliku chroni gościa i ciebie.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.carework': "Pielęgnacja i opieka domowa", // nieuw, nalezen // nagelezen AI 28 nov
    'l.washing': "Mycie i ubieranie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.washandje': "myjka (mała ściereczka jak rękawiczka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.douchestoel': "krzesło pod prysznic", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandenpoetsen': "myć zęby", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kammen': "czesać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scheren': "golić", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steunkous': "pończocha uciskowa (ciasna pończocha na nogi)", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.1': "Czy woda jest wystarczająco ciepła?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.2': "Chce pan/pani umyć twarz samodzielnie?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.3': "Teraz zakładam panu/pani pończochy uciskowe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.q': "Dziś nie chcę brać prysznica.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.a': "Dobrze. Pomóc panu/pani przy umywalce?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing': "Najpierw zapytaj, przykryj i daj wybór", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.b': "Mycie kogoś to coś bardzo osobistego. Mów, co zaraz zrobisz, i najpierw zapytaj. Przykryj ręcznikiem części ciała, których nie myjesz. Zamknij drzwi albo zasłonę. Pozwól podopiecznemu wybrać: prysznic czy mycie przy umywalce i w co się ubrać. Pozwól podopiecznemu robić to, co jeszcze umie, także jeśli trwa to dłużej. Podopieczny mówi nie? Nie zmuszaj go. Spróbuj później, zaproponuj coś innego i powiedz pielęgniarce.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.p': "W co chce się pan/pani dziś ubrać?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.s': "Podopieczna mówi, że dziś nie chce być myta. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o1': "Akceptujesz to i mówisz pielęgniarce.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o2': "I tak ją myjesz: to jest na liście.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o3': "Pomijasz to i nic nie mówisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.w': "Podopieczny może powiedzieć nie. Zmuszanie do opieki niszczy zaufanie. Pielęgniarka może sprawdzić, dlaczego tak jest i co można zrobić.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.observing': "Obserwowanie i raportowanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapporteren': "raportować (zapisać w dokumentacji to, co widzisz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgdossier': "dokumentacja opieki (wszystko o opiece nad jednym podopiecznym)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukplek': "odleżyna (czerwone miejsce od długiego leżenia albo siedzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huid': "skóra", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plassen': "siusiać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vochtlijst': "karta płynów (ile pije podopieczny)", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.1': "Pani ma czerwone miejsce na pięcie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.2': "Pan dziś mało pił.", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.3': "Zapisuję to w dokumentacji opieki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.q': "Czy z panią Jansen dzieje się coś szczególnego?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.observing.a': "Tak. Prawie dziś nie siusiała.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing': "Pisz, co widzisz, a nie, co myślisz", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.b': "To, co piszesz w dokumentacji, czyta następny kolega. Pisz fakty: co widzisz, słyszysz albo mierzysz, i kiedy. Nie „Mevrouw is lastig”, tylko „Mevrouw wilde niet eten en duwde het bord weg.” Pisz to tego samego dnia, krótkimi zdaniami. Nie wiesz, jak to napisać po niderlandzku? Powiedz pielęgniarce i napiszcie to razem. Patrz na skórę, kiedy kogoś myjesz: czerwone miejsce, które nie znika, może być początkiem odleżyny. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.p': { m: "Zapisuję, co widziałem.", f: "Zapisuję, co widziałam.", x: "Zapisuję swoje obserwacje." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.s': "Podopieczna była zła podczas mycia. Musisz to zapisać w dokumentacji. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o1': "Zapisujesz, co powiedziała i zrobiła, i kiedy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o2': "Piszesz: „Trudna pani, jak zawsze.”", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o3': "Nic nie piszesz: to normalne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.w': "Fakty pomagają następnemu koledze i pielęgniarce działać. Opinia nie mówi, co się stało.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.homecare': "Opieka domowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thuiszorg': "opieka domowa (opieka w domu podopiecznego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelkluis': "sejf na klucz (mała skrzynka z kodem, w której jest klucz do domu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgplan': "plan opieki (jaką opiekę dostaje podopieczny i jak)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijkverpleegkundige': "pielęgniarka środowiskowa (pielęgniarka zespołu opieki domowej)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mantelzorger': "opiekun nieformalny (członek rodziny albo przyjaciel, który opiekuje się podopiecznym)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmknop': "przycisk alarmowy (podopieczny go nosi, żeby wezwać pomoc)", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.1': "Najpierw dzwonię do drzwi. Potem biorę klucz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.2': "Co jest w planie opieki?", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.3': "Dziś spóźnię się kwadrans.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.q': "Kto tam?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.a': "Dzień dobry, opieka domowa. Mogę wejść?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare': "Gość w czyimś domu", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.b': "W opiece domowej pracujesz w domu podopiecznego. Jesteś tam gościem: zadzwoń do drzwi i powiedz, kim jesteś, także jeśli masz klucz. Kod do sejfu na klucz jest tajny. Nigdy nie zapisuj go tam, gdzie inni mogą go zobaczyć, i zawsze z powrotem zamykaj sejf. Trzymaj się planu opieki: tam jest, co robisz. Coś jest inaczej albo podopieczny nie otwiera drzwi? Nie odchodź po prostu. Zadzwoń do swojego zespołu albo do pielęgniarki środowiskowej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.p': "Dzień dobry, jestem z opieki domowej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.s': "Dzwonisz do drzwi. Podopieczna nie otwiera. Jej samochód stoi przed domem. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o1': "Dzwonisz do zespołu i czekasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o2': "Jedziesz do następnego podopiecznego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o3': "Dzwonisz jeszcze raz, potem odchodzisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.w': "Podopieczna mogła upaść albo zachorować. Twój zespół wie, co robić i kto ma klucz.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.liftaids': "Sprzęt do podnoszenia i bezpieczeństwo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijlaken': "mata ślizgowa (śliskie prześcieradło do przesuwania podopiecznego w łóżku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilband': "nosidło (idzie pod podopiecznego, do podnośnika)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stalift': "podnośnik do pionizacji (pomaga podopiecznemu wstać)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkhoogte': "wysokość robocza (łóżko na wysokości twoich bioder)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedhek': "barierka łóżka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.transferplank': "deska transferowa (deska do przesunięcia się z łóżka na krzesło)", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.1': "Ustaw łóżko na wysokość roboczą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.2': "Czy wózek jest na hamulcu?", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.3': "Robimy to we dwoje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.q': "Możesz w pojedynkę obrócić tę panią?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.a': "Z matą ślizgową dam radę. Już ją biorę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids': "Niech sprzęt podnosi za ciebie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.b': "Zanim użyjesz podnośnika, sprawdź go: czy akumulator jest naładowany, czy nosidło ma dobry rozmiar i nie jest rozdarte? Zaciągnij hamulce łóżka i wózka. Ustaw łóżko na wysokości bioder, żeby się nie schylać. Mów podopiecznemu o każdym kroku. W planie opieki jest napisane, jakiego sprzętu potrzebuje podopieczny. Sprzęt jest zepsuty albo go brakuje? Nie kombinuj bez niego: zgłoś to i poproś kolegę o pomoc. Nikt ci nie pokazał, jak działa sprzęt? Zapytaj, zanim zaczniesz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.p': "Nosidło jest zepsute. Wezmę inne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.s': "Chcesz użyć podnośnika. Nosidło ma małe rozdarcie. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o1': "Bierzesz inne nosidło i zgłaszasz rozdarcie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o2': "Używasz go: rozdarcie jest bardzo małe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o3': "Zawiązujesz supeł na nosidle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.w': "Małe rozdarcie może się powiększyć pod ciężarem człowieka. Upadek z podnośnika może ciężko zranić podopiecznego.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.shopfloor': "Kasa, towar i zamykanie", // nieuw, nalezen // nagelezen AI 28 nov
    'l.returns': "Zwroty i kasa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugbrengen': "oddać, zwrócić (produkt do sklepu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantenkaart': "karta klienta (karta do zbierania punktów)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.statiegeld': "kaucja (pieniądze z powrotem za pustą butelkę albo puszkę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassalade': "szuflada kasy (szuflada z pieniędzmi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.streepjescode': "kod kreskowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegoedbon': "bon zwrotny (kartka, za którą możesz później kupić coś w sklepie)", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.1': "Zbiera pan/pani punkty na kartę klienta?", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.2': "Kod kreskowy nie działa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.3': "Woli pan/pani zwrot pieniędzy czy bon zwrotny?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.q': "Chcę oddać ten sweter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.a': "Można. Ma pan/pani jeszcze paragon?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns': "Zwroty: trzymaj się zasad sklepu", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.b': "Każdy sklep ma własne zasady zwrotów: ile dni, z paragonem czy bez, zwrot pieniędzy czy bon zwrotny. Naucz się ich i stosuj je przy każdym kliencie. Nie wiesz na pewno? Zapytaj kolegę albo kierownika i nie decyduj w pojedynkę. Na koniec zmiany przelicz szufladę kasy, z kolegą, jeśli tak się robi w twoim sklepie. Nigdy nie bierz pieniędzy z kasy dla siebie, nawet żeby na chwilę pożyczyć. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.p': "Zapytam tylko kierownika sklepu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.s': "Klientka chce zwrotu pieniędzy za buty. Nie ma paragonu. Nie znasz zasady. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o1': "Pytasz kierownika, co zrobić.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o2': "Oddajesz pieniądze: jest miła.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o3': "Mówisz nie i ją odsyłasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.w': "Kierownik zna zasady i może zdecydować. Wtedy klientka dostaje uczciwą odpowiedź, a nikt nie może cię obwiniać.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.facing': "Wykładanie towaru i produkty chłodzone", // nieuw, nalezen // nagelezen AI 28 nov
    'w.facen': "frontować (wysuwać produkty do przodu, etykietą do klienta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afprijzen': "przeceniać (dawać niższą cenę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelvak': "regał chłodniczy (zimna półka w sklepie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diepvries': "zamrażarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitpakken': "rozpakowywać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schapkaartje': "etykieta cenowa (kartka z ceną na półce)", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.1': "Najpierw regał chłodniczy, potem reszta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.2': "Wysuń wszystko ładnie do przodu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.3': "Przeceń dzisiejsze produkty.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.q': { m: "Skończyłeś z regałem chłodniczym?", f: "Skończyłaś z regałem chłodniczym?", x: "Regał chłodniczy już zrobiony?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.a': "Prawie. Muszę jeszcze frontować.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing': "Najpierw zimne, a półka wygląda na pełną", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.b': "Produkty chłodzone i mrożone najpierw idą do lodówki albo zamrażarki, przed wszystkim innym. Nie mogą długo stać w cieple. Potem reszta. Frontowanie znaczy: wysuwasz produkty do przodu, etykietą do klienta. Wtedy półka wygląda na pełną i uporządkowaną. Sprawdź etykietę cenową: czy cena zgadza się z tym produktem? Kiedy otwierasz kartony, tnij od siebie i nie za głęboko: możesz uszkodzić produkt. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.p': "Najpierw produkty chłodzone, potem reszta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.s': "Przychodzi paleta z mlekiem i paleta z chipsami. Nie ma nikogo poza tobą. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o1': "Najpierw wstawiasz mleko do lodówki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o2': "Zaczynasz od chipsów: są lżejsze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o3': "Zostawiasz obie, aż przyjdzie kolega.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.w': "Mleko, które za długo stoi w cieple, może zaszkodzić klientom i trzeba je wyrzucić. Chipsy mogą poczekać.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shrink': "Straty i kradzież", // nieuw, nalezen // nagelezen AI 28 nov
    'w.derving': "straty (to, co sklep traci: zepsute, stare albo skradzione produkty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afschrijven': "spisać na straty (zarejestrować produkt jako stracony)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsaankoop': "zakup pracowniczy (to, co kupujesz we własnym sklepie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tassencontrole': "kontrola toreb", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassamedewerker': "kasjer, kasjerka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelwagen': "wózek sklepowy", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.1': "Ten słoik jest stłuczony. Spisuję go na straty.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.2': "Za swoje zakupy płacę u kolegi przy kasie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.3': "Przy wyjściu stoi pełny wózek.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.q': "Mogę zajrzeć do twojej torby?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.a': "Tak, jasne. Tu jest mój paragon.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink': "Własne zakupy: płać jak klient", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.b': "Sklep dużo traci przez zepsute produkty, stare produkty i kradzieże. Pomagaj, żeby te straty były małe. Zepsuty albo uszkodzony produkt? Nie odkładaj go z powrotem: spisz go na straty tak, jak robi się to w twoim sklepie. Własne zakupy: płać przy kasie jak każdy klient i zachowaj paragon. W wielu sklepach nie wolno ci nabijać własnych zakupów: robi to kolega. Nigdy nie jedz ani nie bierz produktu bez płacenia, nawet małego. Niektóre sklepy sprawdzają torby: to zasada sklepu, a nie znak, że ci nie ufają. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.p': "Najpierw płacę i zachowuję paragon.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.s': "Na koniec zmiany chce ci się jeść. Kanapce dziś kończy się data. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o1': "Pytasz kierownika, jaka jest zasada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o2': "Zjadasz ją: i tak pójdzie do kosza.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o3': "Zabierasz ją w torbie do domu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.w': "W wielu sklepach wzięcie produktu bez płacenia to kradzież, także jeśli jest stary. Pytanie najpierw chroni ciebie.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shopclose': "Zamykanie sklepu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitingstijd': "godzina zamknięcia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolluik': "roleta antywłamaniowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasverschil': "różnica w kasie (więcej albo mniej pieniędzy w kasie, niż powinno być)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluis': "sejf (mocna skrzynka na pieniądze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overval': "napad (ktoś zabiera pieniądze, grożąc)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterdeur': "tylne drzwi", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.1': "Zamykamy za dziesięć minut.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.2': "Liczymy kasę we dwoje.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.3': "Czy tylne drzwi są zamknięte na klucz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.q': "Mogę jeszcze szybko wejść?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.a': "Przepraszam, jest już zamknięte. Jutro otwieramy o ósmej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose': "Napad: oddaj i dbaj o siebie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.b': "O godzinie zamknięcia w kasie jest dużo pieniędzy, więc sklepy mają zasady: licz je we dwoje, zanieś pieniądze do sejfu i najpierw zamknij tylne drzwi. Napad (overval)? Twoje życie jest warte więcej niż pieniądze. Zachowaj spokój, rób, co mówią, i nie walcz ani nie biegnij za nimi. Zapamiętaj, co możesz: ubranie, wzrost, głos. Kiedy odejdą: zamknij drzwi, zadzwoń pod 112 i niczego nie dotykaj. Potem porozmawiaj o tym z kierownikiem albo z kimś, komu ufasz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.p': "Zamykamy. Zamykam drzwi na klucz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.s': "Mężczyzna z nożem chce pieniądze z twojej kasy. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o1': "Zachowujesz spokój i dajesz mu pieniądze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o2': "Walczysz z nim: to nie jego pieniądze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o3': "Biegniesz na zaplecze i zamykasz się tam.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.w': "Walka albo ucieczka sprawiają, że napastnik jest nerwowy i bardziej niebezpieczny. Pieniądze można odzyskać. Ciebie nie.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.uitzend': "Praca przez agencję pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hirer': "Agencja i firma użytkownik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlener': "firma użytkownik (firma, do której agencja wysyła cię do pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vestiging': "oddział (biuro agencji w twoim mieście)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intakegesprek': "rozmowa wstępna (pierwsza rozmowa w agencji)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstapplaats': "miejsce zbiórki (gdzie zabiera cię bus agencji)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsregels': "regulamin firmy (zasady firmy użytkownika)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekpunt': "osoba kontaktowa (osoba, do której idziesz z pytaniami)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.1': "Jutro pracujesz w nowej firmie użytkowniku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.2': "Kto jest tu moją osobą kontaktową?", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.3': "Bus odjeżdża z miejsca zbiórki o szóstej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.q': "Możesz jutro zacząć w nowej firmie użytkowniku?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.a': "Tak. O której mam tam być?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer': "Dwie firmy: kto co robi?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.b': "Pracujesz przez agencję pracy (uitzendbureau), ale pracę wykonujesz w innej firmie: w firmie użytkowniku (inlener). Agencja jest twoim pracodawcą: umowę, wynagrodzenie, pasek wypłaty i dni wolne masz od agencji. Firma użytkownik mówi ci, co robić na hali, i musi dbać o bezpieczeństwo twojej pracy, tak samo jak swoich pracowników. Zgłaszaj chorobę tak, jak mówi agencja: często do agencji i do firmy użytkownika. Zapisz w telefonie imię i numer telefonu swojej osoby kontaktowej w agencji. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.p': "Kto jest moją osobą kontaktową w agencji?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.s': "W firmie użytkowniku musisz pracować na maszynie. Nikt ci nie pokazał jak. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o1': "Prosisz firmę użytkownika, żeby najpierw ci pokazała.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o2': "Próbujesz: odpowiada agencja.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o3': "Idziesz do domu i nic nie mówisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.w': "Firma użytkownik musi ci pokazać, jak bezpiecznie pracować, tak samo jak swoim pracownikom. Masz prawo o to prosić.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.phases': "Twoja umowa i fazy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fase': "faza (etap w twojej umowie z agencją: A, B albo C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzendbeding': "klauzula agencyjna (twoja praca może się skończyć, kiedy firma użytkownik już cię nie potrzebuje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflopen': "kończyć się, wygasać (umowa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorwerken': "dalej pracować (w tym samym miejscu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastecontract': "umowa na stałe (umowa bez daty końca)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderbreking': "przerwa (czas bez pracy między dwiema umowami)", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.1': "W której fazie teraz jestem?", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.2': "Moja umowa kończy się w przyszłym tygodniu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.3': "Mogę tu dalej pracować?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.q': "Twoje zlecenie kończy się w piątek.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.a': "Dobrze. Macie dla mnie inną pracę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases': "Fazy A, B i C", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.b': "Większość pracowników agencyjnych pracuje według układu zbiorowego dla pracowników tymczasowych (uitzend-cao). Ma on fazy. W fazie A twoja praca zwykle może się skończyć, kiedy firma użytkownik już cię nie potrzebuje (uitzendbeding). W fazie B dostajesz umowy na czas określony. W fazie C dostajesz umowę na stałe z agencją. Jak długo trwa każda faza, jest w twoim cao. Zapytaj agencję, w której fazie jesteś, i zachowuj wszystkie swoje umowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.p': "Jak długo trwa u mnie faza A?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.s': "Od dawna pracujesz dla tej samej agencji. Dalej dostajesz krótkie umowy. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o1': "Pytasz agencję, w której fazie jesteś.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o2': "Nic: praca z agencji jest zawsze krótka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o3': "Rezygnujesz i szukasz innej agencji.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.w': "Po wystarczająco długim czasie cao daje ci większe bezpieczeństwo. Agencja może ci powiedzieć, gdzie jesteś, a związek zawodowy może to z tobą sprawdzić.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.deductions': "Wynagrodzenie i potrącenia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhouding': "potrącenie (pieniądze odjęte od twojego wynagrodzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastekracht': "pracownik stały (pracownik zatrudniony przez samą firmę użytkownika)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervoer': "transport (bus albo van do pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftelijk': "na piśmie (na papierze albo w e-mailu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navragen': "dopytać, sprawdzić (dowiedzieć się, czy coś się zgadza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brutoloon': "wynagrodzenie brutto (twoje wynagrodzenie przed podatkiem i potrąceniami)", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.1': "Co to za potrącenie na moim pasku wypłaty?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.2': "Czy zarabiam tyle samo co pracownicy stali?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.3': "Najpierw chcę to zobaczyć na papierze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.q': "Koszty busa potrącamy ci z wynagrodzenia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.a': "Czy to dozwolone? Najpierw to sprawdzę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions': "Co można potrącić z wynagrodzenia?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.b': "Masz prawo co najmniej do takiego samego wynagrodzenia jak pracownicy firmy użytkownika, którzy wykonują tę samą pracę. Pieniądze, które są potrącane z twojego wynagrodzenia (inhouding), muszą być na pasku wypłaty. Podatek i składki są potrącane z mocy prawa. Poza nimi agencja może potrącić z płacy minimalnej tylko dwa koszty: czynsz za mieszkanie i składkę na ubezpieczenie zdrowotne, i tylko za twoją pisemną zgodą. Inne koszty, takie jak transport, ubranie robocze, kary albo opłata za znalezienie ci pracy, nie mogą być potrącane z płacy minimalnej. Nie rozumiesz potrącenia? Poproś agencję, żeby wyjaśniła je na piśmie. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.p': "Za co jest to potrącenie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.s': "Agencja potrąca ci z wynagrodzenia pieniądze za bus do pracy. Zarabiasz płacę minimalną. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o1': "Pytasz o to: to jest niedozwolone.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o2': "Nic: przecież codziennie jeździsz busem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o3': "Przestajesz jeździć busem i chodzisz pieszo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.w': "Z płacy minimalnej można potrącić tylko czynsz i ubezpieczenie zdrowotne, i tylko za twoją pisemną zgodą. Związek zawodowy albo Juridisch Loket może ci pomóc.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.agencyhome': "Mieszkanie i pomoc", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisvesting': "zakwaterowanie (mieszkanie załatwione przez agencję)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisgenoot': "współlokator (osoba, która mieszka w tym samym domu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisregels': "regulamin domu (zasady domu, w którym mieszkasz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huismeester': "opiekun mieszkania (osoba, która dba o dom)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldpunt': "punkt zgłoszeń (miejsce, gdzie możesz zgłosić problem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advies': "rada, porada", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.1': "Chcę mieć własną umowę najmu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.2': "W łazience jest pleśń.", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.3': "Dzwonię do związku zawodowego po radę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.q': "W piątek musisz wyprowadzić się z mieszkania.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.a': "To bardzo krótko. Najpierw poproszę o radę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome': "Twoje mieszkanie i gdzie szukać pomocy", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.b': "Agencja załatwia ci mieszkanie? Wtedy dostajesz własną umowę najmu, na piśmie, osobno od umowy o pracę. Zachowaj kopię. Jest w niej, ile płacisz oraz jak i kiedy kończy się najem. Kończy ci się praca? Mieszkanie nie zawsze kończy się tego samego dnia: poproś o radę, zanim się wyprowadzisz. Niebezpieczne albo przepełnione mieszkanie, groźby albo za niskie wynagrodzenie? Poszukaj pomocy: związek zawodowy, Juridisch Loket (darmowa porada prawna), FairWork albo Nederlandse Arbeidsinspectie, gdzie możesz też zgłosić sprawę anonimowo. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.p': "Mogę dostać kopię mojej umowy najmu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.s': "Kończy ci się praca. Opiekun mieszkania mówi, że musisz dziś wyprowadzić się z domu. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o1': "Najpierw pytasz związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o2': "Wyprowadzasz się dziś i śpisz u znajomego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o3': "Pakujesz torbę i śpisz na dworze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.w': "Twoja umowa najmu ma własne zasady, osobno od pracy. Rada pomaga ci wiedzieć, kiedy naprawdę musisz się wyprowadzić.", // nieuw, nalezen // nagelezen AI 28 nov
    // The basis units at four lessons (23 November 2026): two new lessons each in Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte, Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online op je werk.
    'l.vacancy': "Czytanie ogłoszenia o pracę", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advertentie': "ogłoszenie (tekst, który oferuje pracę albo jakąś rzecz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eis': "wymaganie (co musisz mieć albo umieć)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parttime': "na część etatu (mniej godzin w tygodniu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fulltime': "na pełny etat (cały tydzień pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sollicitatiebrief': "list motywacyjny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contactpersoon': "osoba kontaktowa (osoba, do której możesz zadzwonić albo napisać)", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.1': { m: "Widziałem Państwa ogłoszenie w internecie.", f: "Widziałam Państwa ogłoszenie w internecie.", x: "Państwa ogłoszenie w internecie wpadło mi w oko." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.2': "Czy to praca na część etatu, czy na pełny etat?", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.3': "Jakie są wymagania?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.q': "Słucham, w jakiej sprawie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.a': "Dzwonię w sprawie Państwa oferty pracy. Czy jest jeszcze aktualna?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.result': "Po rozmowie o pracę", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aangenomen': "przyjęty (dostajesz tę pracę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijzing': "odmowa (nie dostajesz tej pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbod': "oferta (proponują ci tę pracę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefdag': "dzień próbny (jeden dzień pracy na próbę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabellen': "zadzwonić ponownie (zapytać, jak wygląda sprawa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teleurgesteld': "rozczarowany", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.1': { m: "Został pan przyjęty!", f: "Została pani przyjęta!", x: "Przyjmujemy pana / panią do pracy!" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.result.2': { m: "Dostałem odmowę.", f: "Dostałam odmowę.", x: "Przyszła do mnie odmowa." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.result.3': "Czy dzień próbny jest płatny?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.q': "Niestety wybieramy kogoś innego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.a': "Szkoda. Mogę zapytać dlaczego?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.residence': "Twoje dokumenty pobytowe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verblijfsvergunning': "zezwolenie na pobyt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pasfoto': "zdjęcie do dokumentów", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerafdruk': "odcisk palca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldig': "ważny (można go jeszcze używać)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verloopdatum': "data ważności (ostatni dzień, kiedy dokument jest ważny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volgnummer': "numerek (karteczka z twoją kolejnością w kolejce)", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.1': "Moje zezwolenie na pobyt jest ważne jeszcze rok.", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.2': "Jaka jest data ważności twojego paszportu?", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.3': "Mam umówioną wizytę w urzędzie gminy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.q': "Twoje zezwolenie na pobyt prawie straciło ważność.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.a': "To od razu złożę wniosek o nowe.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.newhome': "Przeprowadzka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brievenbus': "skrzynka na listy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterstand': "stan licznika (liczby na liczniku gazu, prądu albo wody)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naambordje': "tabliczka z nazwiskiem (twoje nazwisko przy drzwiach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.woning': "mieszkanie, dom (miejsce do mieszkania)", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.doorsturen': "przekazać dalej (wysłać na nowy adres)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdag': "dzień przeprowadzki", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.1': "W przyszłym tygodniu się przeprowadzam.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.2': "Mojego nazwiska nie ma na skrzynce na listy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.3': "Podaję mój nowy adres.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.q': "Gdzie teraz mieszkasz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.a': "W nowym mieszkaniu. Oto mój nowy adres.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.payparts': "Co jest na pasku wypłaty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pensioen': "emerytura (pieniądze na starość)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.periode': "okres (tygodnie albo miesiąc tej wypłaty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrag': "kwota (pieniędzy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.totaal': "suma", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkorting': "skrót (krótka forma słowa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsnummer': "numer pracownika (twój numer w firmie)", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.1': "Co znaczy ten skrót?", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.2': "Ta kwota idzie na moją emeryturę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.3': "Za jaki okres jest ta wypłata?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.q': "Jaki jest twój numer pracownika?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.a': "Jest na górze, obok mojego nazwiska.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.latepay': "Wypłata spóźniona, brakująca albo w gotówce", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwartwerken': "pracować na czarno (bez umowy, bez podatku, bez praw na papierze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorschot': "zaliczka (część wypłaty przed dniem wypłaty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabetaling': "wyrównanie (pieniądze, które dostajesz później, żeby poprawić wypłatę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekort': "brak, niedobór (pieniądze, których brakuje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.betaaldag': "dzień wypłaty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankafschrift': "wyciąg z banku (lista pieniędzy, które wpływają i wypływają)", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.1': "Moja wypłata się spóźnia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.2': "Nie pracuję na czarno.", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.3': "Mogę dostać zaliczkę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.q': "Brakujące pieniądze dostaniesz w przyszłym miesiącu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.a': "Mogę to dostać na piśmie?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.holiday': "Planowanie urlopu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.saldo': "saldo (ile dni jeszcze ci zostało)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeuren': "zatwierdzić (powiedzieć na to tak)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verlopen': "wygasnąć (już nie jest ważne)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zomervakantie': "wakacje letnie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukte': "gorący okres (dużo pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvraag': "wniosek (prosisz o coś, często na formularzu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.1': "Ile dni urlopu jeszcze mi zostało?", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.2': "Mój urlop jest zatwierdzony.", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.3': "Wypełniam formularz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.q': "Latem jest dużo pracy. Możesz pojechać na urlop w maju?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.a': "Wolę w lipcu. Wtedy moja rodzina jest w domu.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.special': "Specjalne dni wolne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bruiloft': "ślub, wesele", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begrafenis': "pogrzeb", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geboorteverlof': "urlop z powodu narodzin dziecka (dla partnera, kiedy rodzi się dziecko)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderverlof': "urlop okolicznościowy (na przykład na ślub albo pogrzeb)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerstdagen': "Boże Narodzenie (dwa dni świąt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijvragen': "poprosić o dzień wolny", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.1': "Mój brat się żeni. Mogę poprosić o dzień wolny?", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.2': "Mój wujek zmarł. Pogrzeb jest w piątek.", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.3': "Czy muszę pracować w święta Bożego Narodzenia?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.q': "Gratulacje z okazji dziecka! Bierzesz urlop z powodu narodzin dziecka?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.a': "Tak, pierwszy tydzień jestem w domu.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.unwell': "Złe samopoczucie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdpijn': "ból głowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.griep': "grypa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkouden': "przeziębiony (masz przeziębienie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nietlekker': "nie najlepiej (trochę źle się czujesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naarhuis': "iść do domu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzieken': "zostać w domu, aż wyzdrowiejesz", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.1': "Źle się czuję.", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.2': { m: "Boli mnie głowa i jestem przeziębiony.", f: "Boli mnie głowa i jestem przeziębiona.", x: "Boli mnie głowa i mam przeziębienie." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.3': { m: "Idę do domu. Jestem chory.", f: "Idę do domu. Jestem chora.", x: "Idę do domu. Choruję." }, // nieuw, nalezen // nagelezen AI 28 nov // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.unwell.q': { m: "Jesteś blady. Wszystko w porządku?", f: "Jesteś blada. Wszystko w porządku?", x: "Masz bladą twarz. Wszystko w porządku?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.a': "Nie, źle się czuję. Mogę iść do domu?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.injury': "Obrażenia w pracy", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.bedrijfsongeval': "wypadek przy pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzekering': "ubezpieczenie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schadevergoeding': "odszkodowanie (pieniądze za szkodę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oorzaak': "przyczyna (dlaczego to się stało)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.letsel': "obrażenia (szkoda dla twojego ciała)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verklaring': "oświadczenie (to, co piszesz albo mówisz o tym, co się stało)", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.1': { m: "Miałem wypadek przy pracy.", f: "Miałam wypadek przy pracy.", x: "Zdarzył mi się wypadek przy pracy." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.2': "Co było przyczyną?", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.3': "Mój kolega to widział.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.q': "Zapiszesz tutaj swoje oświadczenie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.a': "Tak. Mogę dostać kopię?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debt': "Dług u szefa albo agencji", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lening': "pożyczka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lenen': "pożyczać (od kogoś albo komuś)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzitten': "być w pułapce (nie możesz odejść)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tussenpersoon': "pośrednik (ktoś, kto za pieniądze załatwia pracę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rente': "odsetki (dodatkowe pieniądze, które płacisz od pożyczki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.belofte': "obietnica", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.1': { m: "Musiałem zapłacić za tę pracę.", f: "Musiałam zapłacić za tę pracę.", x: "Kazano mi zapłacić za tę pracę." }, // nieuw, nalezen // nagelezen AI 28 nov // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    's.debt.2': "Mój dług rośnie co miesiąc.", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.3': "Pośrednik ma mój paszport.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.q': "Możesz odejść dopiero wtedy, kiedy spłacisz dług.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.a': "Tak nie wolno. Proszę o pomoc.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.inspection': "Inspekcja i inna pomoc", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inspectie': "inspekcja (ludzie, którzy sprawdzają, czy praca jest uczciwa i bezpieczna)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controle': "kontrola", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slachtoffer': "ofiara", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mensenhandel': "handel ludźmi (ludzi wykorzystuje się i sprzedaje do pracy albo do seksu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertrouwen': "ufać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tolk': "tłumacz (ustny)", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.1': "Jutro przychodzi inspekcja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.2': "Czy mogę dostać tłumacza?", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.3': "Nie ufam temu mężczyźnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.q': "Chcesz porozmawiać z inspekcją?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.a': "Tak, ale mój szef nie może tego słyszeć.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.carpool': "Wspólne dojazdy i bus do pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.carpoolen': "jeździć wspólnie (jechać razem do pracy jednym samochodem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meerijden': "jechać z kimś (w cudzym samochodzie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gordel': "pas bezpieczeństwa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.instappen': "wsiadać (do samochodu, autobusu albo pociągu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstappen': "wysiadać (z samochodu, autobusu albo pociągu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijrijder': "pasażer (obok kierowcy)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.1': "Mogę pojechać z tobą?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.2': "Zapnij pas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.3': "Wysiadam przy dworcu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.q': "Kto jutro prowadzi?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.a': "Ja prowadzę. O szóstej po ciebie przyjadę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.train': "Pociąg, opóźnienia i spóźnienie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.station': "dworzec", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perron': "peron (miejsce, gdzie wsiadasz do pociągu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overstappen': "przesiadać się (do innego pociągu albo autobusu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvallen': "zostać odwołanym (pociąg nie jedzie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kaartje': "bilet", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reisplanner': "planer podróży (aplikacja, która pokazuje pociągi i autobusy)", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.1': "Mój pociąg jest odwołany.", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.2': "Muszę się raz przesiąść.", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.3': "Z którego peronu odjeżdża pociąg?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.q': "Dlaczego tak późno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.a': { m: "Mój pociąg został odwołany. Wysłałem ci wiadomość.", f: "Mój pociąg został odwołany. Wysłałam ci wiadomość.", x: "Mój pociąg został odwołany. Masz ode mnie wiadomość." }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.checklist': "Sprawdź, zanim skończysz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.checklist': "lista kontrolna (lista rzeczy do sprawdzenia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvinken': "odhaczyć (postawić znaczek przy zadaniu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdoen': "zrobić jeszcze raz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compleet': "kompletny (niczego nie brakuje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergeten': "zapomnieć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resultaat': "wynik", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.1': "Odhaczam wszystko na liście kontrolnej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.2': "Czy zamówienie jest kompletne?", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.3': "Muszę to zrobić jeszcze raz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.q': { m: "Niczego nie zapomniałeś?", f: "Niczego nie zapomniałaś?", x: "Na pewno wszystko jest?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.a': "Jeszcze raz spojrzę na listę kontrolną.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.leavesite': "Wychodzenie z miejsca pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugzetten': "odłożyć na miejsce (tam, gdzie było)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vegen': "zamiatać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vloer': "podłoga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitdoen': "wyłączyć (światło, maszynę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alslaatste': "jako ostatni (ostatnia osoba)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlaten': "zostawić (w jakim stanie zostawiasz swoje miejsce)", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.1': "Zostawiam swoje miejsce w porządku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.2': "Kto wychodzi ostatni?", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.3': "Zgaś światło i zamknij drzwi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.q': { m: "Wychodzisz dziś ostatni?", f: "Wychodzisz dziś ostatnia?", x: "Czy to ty dziś wychodzisz na końcu?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.a': "Tak. Wyłączam wszystko i zamykam drzwi na klucz.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.stagedays': "Codziennie na praktyce", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stageplek': "miejsce praktyki (firma, w której masz praktykę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwezig': "nieobecny (nie ma cię)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwezig': "obecny (jesteś na miejscu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagevergoeding': "wynagrodzenie za praktykę (pieniądze, które możesz dostać na praktyce)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiding': "opieka (pomoc od twojego opiekuna)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerling': "uczeń (w szkole)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.1': { m: "Jutro mnie nie będzie. Jestem chory.", f: "Jutro mnie nie będzie. Jestem chora.", x: "Jutro mnie nie będzie. Choruję." }, // nieuw, nalezen // nagelezen AI 28 nov // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    's.stagedays.2': "Czy dostanę wynagrodzenie za praktykę?", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.3': "Na mojej praktyce pracuję cztery dni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.q': "Dlaczego wczoraj cię nie było?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.a': { m: "Byłem chory. Zadzwoniłem do szkoły i do firmy.", f: "Byłam chora. Zadzwoniłam do szkoły i do firmy.", x: "Z powodu choroby. Szkoła i firma dostały ode mnie telefon." }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.stageend': "Koniec praktyki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eindgesprek': "rozmowa końcowa (na koniec praktyki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geslaagd': "zaliczone (poszło ci wystarczająco dobrze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezakt': "niezaliczone (tym razem nie dość dobrze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herkansing': "poprawka (nowa szansa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedanken': "podziękować", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trakteren': "poczęstować (przynieść coś dobrego do jedzenia dla wszystkich)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.1': "Jutro mam rozmowę końcową.", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.2': { m: "Zaliczyłem praktykę.", f: "Zaliczyłam praktykę.", x: "Moja praktyka jest zaliczona." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.3': "Chcę wszystkim podziękować.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.q': "Twój ostatni dzień! Co teraz będziesz robić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.a': "Najpierw zdobędę dyplom. Potem poszukam pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.neighbours': "Twoja okolica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurt': "okolica, sąsiedztwo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurthuis': "dom sąsiedzki (dom z zajęciami w twojej okolicy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straat': "ulica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kennismaken': "poznać się (spotkać kogoś pierwszy raz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overlast': "uciążliwość (hałas albo kłopot dla innych)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurvrouw': "sąsiadka (kobieta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.1': "Od niedawna mieszkam na tej ulicy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.2': "W bibliotece ćwiczę niderlandzki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.3': "Przepraszam za kłopot.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.q': "Dzień dobry, jestem twoją nową sąsiadką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.a': "Miło mi cię poznać! Jestem Ali.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.join': "Szkoła, sport i wolontariat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilliger': "wolontariusz (ktoś, kto pomaga bez zapłaty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilligerswerk': "wolontariat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sportclub': "klub sportowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderavond': "zebranie dla rodziców (w szkole)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leraar': "nauczyciel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.basisschool': "szkoła podstawowa", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.1': "Mój syn chodzi do szkoły podstawowej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.2': "Gram w piłkę nożną w klubie sportowym.", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.3': "W soboty zajmuję się wolontariatem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.q': "Przyjdziesz na zebranie dla rodziców?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.a': "Tak. Chcę porozmawiać z nauczycielem.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workphotos': "Zdjęcia i dane", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezicht': "twarz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantgegevens': "dane klienta (imię i nazwisko, adres, telefon klienta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onlinezetten': "wrzucić do internetu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wissen': "usunąć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werktelefoon': "telefon służbowy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestand': "plik (na komputerze)", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.1': "Nie wrzucam do internetu zdjęć z pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.2': "Od razu usuwam zdjęcie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.3': "Na zdjęciu jest jego twarz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.q': "Mogę zrobić ci zdjęcie? Do internetu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.a': "Nie, wolę nie. Nie chcę być w internecie.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.device': "Bezpieczny telefon i komputer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.update': "aktualizacja (nowa wersja aplikacji albo programu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.virus': "wirus (program, który szkodzi twojemu komputerowi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wifi': "wi-fi", // nieuw, nalezen // nagelezen AI 28 nov
    'w.usbstick': "pendrive", // nieuw, nalezen // nagelezen AI 28 nov
    'w.installeren': "zainstalować", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openbaar': "publiczny (dla wszystkich)", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.1': "Dziś wieczorem instaluję aktualizację.", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.2': "Ten pendrive leżał na podłodze.", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.3': "Czy to wi-fi jest bezpieczne?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.q': "Mogę zainstalować tę aplikację na telefonie służbowym?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.a': "Najpierw zapytaj dział IT.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy': "Zadzwoń albo wyślij krótką wiadomość", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.b': "Przeczytaj dokładnie ogłoszenie: godziny, miejsce i to, co musisz mieć, na przykład prawo jazdy albo certyfikat. Nie musisz mieć wszystkiego: jeśli masz większość, i tak spróbuj. Zadzwoń albo napisz krótką wiadomość: podaj swoje imię, o jaką pracę chodzi i dlaczego jej chcesz. Nigdy nie płać pieniędzy za to, żeby dostać pracę, i nigdy nie wysyłaj swoich danych logowania w odpowiedzi na ogłoszenie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.p': "Nie mam dyplomu, ale mam duże doświadczenie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.s': "Ogłoszenie wymaga 3 lat doświadczenia. Ty masz 2 lata. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o1': "I tak się zgłoś i powiedz, co umiesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o2': "Nie zgłaszaj się: masz za mało.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o3': "Napisz 3 lata: nikt tego nie sprawdza.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.w': "Ogłoszenie często wymaga więcej, niż praca naprawdę potrzebuje. Uczciwość co do tego, co umiesz, działa lepiej niż kłamstwo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result': "Odmowa to nie koniec", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.b': "Po tygodniu nadal brak odpowiedzi? Możesz zadzwonić ponownie i grzecznie zapytać. Odpowiedź brzmi nie? Zapytaj, co możesz następnym razem zrobić lepiej: wielu pracodawców to mówi. Potem spróbuj znowu: większość ludzi najpierw dostaje kilka odmów. Odpowiedź brzmi tak? Zapytaj, kiedy zaczynasz, i poproś o umowę, zanim zaczniesz. Zaproszenie na dzień próbny? Zapytaj wcześniej, jak długo trwa i czy jest płatny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.p': "Co mogę następnym razem zrobić lepiej?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.s': "Po rozmowie o pracę dostajesz odmowę e-mailem. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o1': "Grzecznie zapytaj, co możesz zrobić lepiej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o2': "Odpisz, że popełnili błąd.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o3': "Przestań szukać pracy: to nie działa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.w': "Informacja zwrotna pomaga ci na następnej rozmowie. Grzeczne pytanie zostawia też o tobie dobre wrażenie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence': "Twoje dokumenty: sprawdź datę", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.b': "Jesteś z UE? Wtedy możesz tu mieszkać i pracować z ważnym paszportem albo dowodem osobistym: nie potrzebujesz zezwolenia. Jesteś spoza UE? Wtedy potrzebujesz ważnego zezwolenia na pobyt. Na karcie jest napisane, czy możesz pracować. Sprawdź datę ważności swoich dokumentów. Złóż wniosek o nowe zezwolenie w IND na czas: kilka miesięcy przed tą datą, nie w ostatnim tygodniu. Zachowaj kopię każdego listu. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.p': "Moje zezwolenie niedługo wygasa. Co muszę zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.s': "Twoje zezwolenie na pobyt wygasa za dwa miesiące. W pracy masz bardzo dużo zajęć. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o1': "Złóż teraz wniosek o nowe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o2': "Poczekaj do ostatniego tygodnia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o3': "Nic nie rób: praca jest najważniejsza.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.w': "Bez ważnego zezwolenia możesz nie mieć prawa do pracy. Nowe zezwolenie wymaga czasu, więc zaczynasz wcześnie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome': "Nowy adres? Powiedz wszystkim", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.b': "Przeprowadzasz się? Szybko podaj gemeente swój nowy adres: musisz to zrobić. Powiedz też pracodawcy, bankowi, ubezpieczycielowi i lekarzowi. Umieść swoje nazwisko na skrzynce na listy, inaczej listy do ciebie nie dojdą. W dniu przeprowadzki zapisz stany liczników i zrób im zdjęcia. Wtedy płacisz tylko za swoje zużycie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.p': { m: "Przeprowadziłem się. To mój nowy adres.", f: "Przeprowadziłam się. To mój nowy adres.", x: "Mam nowe mieszkanie. To mój nowy adres." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.s': "Od twojej przeprowadzki minęły dwa tygodnie. Twoje listy dalej przychodzą na stary adres. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o1': "Podaj teraz gemeente swój nowy adres.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o2': "Poczekaj: poczta cię znajdzie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o3': "Poproś dawnego sąsiada, żeby trzymał twoje listy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.w': "Ważne listy, na przykład mandaty albo listy z urzędu skarbowego, mają terminy. Kiedy idą na zły adres, możesz je przegapić.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts': "Przeczytaj każdą linijkę", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.b': "Na pasku wypłaty jest dużo linijek i krótkich słów. Na górze: twoje imię i nazwisko, numer pracownika i okres. Potem twoje wynagrodzenie brutto, twoje godziny i ewentualne dodatki. Potem to, co jest potrącane: podatek i składki. W wielu pracach ty i pracodawca razem płacicie na twoją emeryturę: swoją część widzisz na pasku wypłaty. Na dole: twoje wynagrodzenie netto. Nie rozumiesz jakiejś linijki? Poproś pracodawcę, żeby ją wyjaśnił. Zachowuj wszystkie paski wypłaty. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.p': "Co znaczy ta linijka na moim pasku wypłaty?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.s': "Na twoim pasku wypłaty pieniądze idą na „pensioen”. Nie wiesz dlaczego. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o1': "Poproś pracodawcę, żeby to wyjaśnił.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o2': "Poproś, żeby to zatrzymać i mieć teraz więcej pieniędzy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o3': "Nie przejmuj się: i tak nie zostaniesz tu tak długo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.w': "Pieniądze na emeryturę są odkładane dla ciebie, na później. Zwykle zachowujesz je, kiedy zmieniasz pracę. Pytanie pomaga ci wiedzieć, co jest twoje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay': "Wypłata spóźniona albo w gotówce? Działaj na czas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.b': "Wypłata musi przyjść w dniu, który jest w twojej umowie albo w cao. Spóźnia się albo brakuje pieniędzy? Zapytaj o to na piśmie, na przykład w e-mailu. Zachowuj wyciągi z banku i własną listę godzin. Płacą ci gotówką, bez paska wypłaty? Wtedy to często praca na czarno (zwart): twoje godziny nie są zarejestrowane, a później trudno udowodnić twoją pracę albo dostać zasiłek. Poproś o pasek wypłaty. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.p': "Moja wypłata jeszcze nie przyszła. Kiedy przyjdzie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.s': "Szef mówi: „Od teraz płacę ci gotówką. Bez paska wypłaty, tak jest prościej.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o1': "Powiedz nie i poproś o pasek wypłaty.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o2': "Powiedz tak: gotówka to więcej pieniędzy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o3': "Powiedz tak, ale tylko w tym miesiącu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.w': "Bez paska wypłaty twojej pracy nie ma na papierze. Wtedy możesz stracić prawa, na przykład do zasiłku, kiedy stracisz pracę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday': "Twoje dni wolne: wykorzystaj je na czas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.b': "Sprawdź, ile dni urlopu jeszcze ci zostało: często jest to na pasku wypłaty albo w aplikacji. Zaplanuj urlop wcześnie i poproś o niego na piśmie. Twoje ustawowe dni urlopu wygasają 6 miesięcy po końcu roku, chyba że nie dało się ich wykorzystać. Dodatkowe dni z cao albo z umowy są ważne dłużej, zwykle 5 lat. Kończy ci się praca? Wtedy dostajesz pieniądze za niewykorzystane dni. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.p': "Chcę jeszcze w tym roku wykorzystać swoje dni urlopu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.s': "Jest listopad. Zostało ci jeszcze 12 dni urlopu z tego roku. Twój przełożony nic o tym nie mówi. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o1': "Zapytaj, kiedy możesz je wykorzystać.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o2': "Nic nie rób: zostają na zawsze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o3': "Zapomnij o nich: już przepadły.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.w': "Dni wolne są na odpoczynek i mogą wygasnąć. Kiedy pytasz na czas, możesz je jeszcze zaplanować.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special': "Ślub, pogrzeb, dziecko", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.b': "Urodziło się twoje dziecko, a ty jesteś partnerem albo partnerką matki? Wtedy dostajesz 1 tydzień płatnego urlopu z powodu narodzin dziecka, w ciągu pierwszych 4 tygodni. Cao często daje urlop okolicznościowy (bijzonder verlof) na twój ślub albo na pogrzeb w twojej rodzinie. Święta, na przykład Boże Narodzenie: żadna ustawa nie mówi, że masz wolne. Twoja umowa albo cao mówi, czy masz wolne, czy dostajesz dodatek do wypłaty. Proś o dni wolne na czas. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.p': "Moja żona będzie miała dziecko. Jak złożyć wniosek o urlop z powodu narodzin dziecka?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.s': "Twój ojciec zmarł za granicą. Chcesz pojechać na pogrzeb. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o1': "Powiedz pracodawcy i zapytaj, jaki urlop możesz dostać.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o2': "Po prostu jedź i powiedz im, kiedy wrócisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o3': "Nie jedź: nie masz już dni wolnych.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.w': "Pracodawca rozumie, że to bardzo ważne. Wiele cao daje urlop okolicznościowy, a możesz też wykorzystać swoje dni urlopu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell': "Choroba w pracy albo na urlopie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.b': "Źle się czujesz w pracy? Powiedz przełożonemu, zanim pójdziesz do domu: to jest twoje zgłoszenie choroby. Nie wychodź tak po prostu. Choroba w czasie urlopu? Zgłoś ją pracodawcy tak samo jak w domu, także z zagranicy. Wtedy dni choroby zwykle nie liczą się jako dni urlopu. Może być potrzebne zaświadczenie od tamtejszego lekarza. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.p': { m: "Zachorowałem na urlopie.", f: "Zachorowałam na urlopie.", x: "Na urlopie złapała mnie choroba." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.s': "Jesteś na urlopie w swoim kraju. Masz grypę i przez 5 dni leżysz w łóżku. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o1': "Od razu zgłoś to pracodawcy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o2': "Nic: przecież i tak masz urlop.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o3': "Powiedz pracodawcy, kiedy wrócisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.w': "Kiedy zgłosisz to na czas, dni choroby zwykle nie liczą się jako dni urlopu. Wtedy możesz wykorzystać te dni później.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury': "Wypadek w pracy: zapisz to", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.b': "Coś ci się stało w pracy? Zapisz, co się stało, kiedy i gdzie, i kto to widział. Zrób zdjęcia i zachowaj wszystkie papiery od lekarza. Poproś o kopię raportu z wypadku. Coś ci się stało, bo praca nie była bezpieczna? Wtedy pracodawca zwykle musi zapłacić za twoją szkodę. Nie musisz udowadniać, że to jego wina: to pracodawca musi pokazać, że zrobił wystarczająco dużo dla twojego bezpieczeństwa. Poproś o radę, zanim cokolwiek podpiszesz. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.p': "Mogę dostać kopię raportu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.s': "Ranisz sobie rękę przy maszynie bez osłony. Później szef prosi cię o podpis pod papierem: „To była moja własna wina.” Co robisz?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.injury.o1': "Nie podpisuj. Najpierw poproś o radę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o2': "Podpisz, żeby nie było problemów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o3': "Podpisz, ale zachowaj zdjęcie tego papieru.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.w': "To, co podpiszesz, może się później liczyć, na przykład kiedy poprosisz o odszkodowanie. Najpierw poproś o radę związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt': "Dług, który nigdy się nie kończy", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.b': "W Holandii agencja nie może brać od ciebie pieniędzy za znalezienie ci pracy. Trzeba było pożyczyć pieniądze na podróż albo na pracę, a dług ciągle rośnie? Musisz zostać, dopóki go nie spłacisz? To oznaka wyzysku. Dług nigdy nie oznacza, że musisz dalej pracować: możesz przestać. Zachowaj każdy papier i każdą wiadomość o długu. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.p': "Ile jeszcze muszę zapłacić? Chcę to mieć na piśmie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.s': "Agencja zapłaciła za twój bilet na autobus. Teraz co tydzień potrąca ci pieniądze z wypłaty, a dług się nie zmniejsza. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o1': "Poproś o listę na piśmie i poszukaj pomocy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o2': "Pracuj więcej godzin, żeby szybciej spłacić.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o3': "Nic nie mów: agencja ci pomogła.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.w': "Dług, który się nie zmniejsza, trzyma cię w pułapce. Z tą listą związek zawodowy albo FairWork mogą sprawdzić, czy to uczciwe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection': "Inspekcja jest dla ciebie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.b': "Nederlandse Arbeidsinspectie sprawdza, czy praca jest bezpieczna i uczciwa: wynagrodzenie, godziny i wyzysk. Inspektorzy mogą przyjść do twojej pracy i rozmawiać z pracownikami. Możesz powiedzieć im prawdę: nie mówią twojemu szefowi, kto coś zgłosił. Potrzebujesz pomocy w swoim języku? Poproś o tłumacza. FairWork pomaga ofiarom wyzysku za darmo, także ludziom bez ważnych dokumentów. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.p': "Chcę coś powiedzieć, ale bez mojego szefa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.s': "Inspektor pyta o twoje godziny. Szef kazał ci mówić, że 8 godzin. Pracujesz 12. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o1': "Powiedz inspektorowi prawdę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o2': "Powiedz, że 8 godzin, tak jak kazał szef.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o3': "Nic nie mów i odejdź.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.w': "Inspektor może pomóc tylko wtedy, kiedy zna prawdę. To, co mówisz, pomaga tobie, a także twoim kolegom.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool': "W samochodzie: zapnij pas i ustal koszty", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.b': "Każdy w samochodzie zapina pas, także z tyłu. Kierowca musi mieć ważne prawo jazdy i nie powinien pić alkoholu przed jazdą. Za dużo ludzi w busie albo kierowca jeździ niebezpiecznie? Powiedz to i nie wsiadaj. Jeździsz wspólnie z kolegami? Najpierw ustalcie, jak dzielicie koszty paliwa. Jeździsz busem agencji? Zapytaj, ile cię to kosztuje, i poproś o to na piśmie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.p': "W busie jest za dużo ludzi. Nie wsiadam.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.s': "Bus do pracy ma 9 miejsc. Dziś rano chce do niego wsiąść 11 osób. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o1': "Nie wsiadaj i zadzwoń do przełożonego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o2': "Usiądź na podłodze z tyłu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o3': "Wciśnij się: to tylko 20 minut.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.w': "Bez miejsca i pasa nawet mały wypadek może być bardzo poważny. Pracodawca albo agencja może znaleźć inne rozwiązanie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train': "Pociąg się spóźnia? Od razu wyślij wiadomość", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.b': "Przed wyjściem sprawdź planer podróży: pociągi i autobusy mogą się spóźniać albo być odwołane. Twój pociąg się spóźnia? Od razu wyślij przełożonemu wiadomość z godziną, o której dojedziesz. W dni z burzą albo z pracami na torach jedź wcześniejszym pociągiem. Po dużym opóźnieniu często możesz odzyskać pieniądze: zajrzyj na stronę przewoźnika kolejowego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.p': "Mój pociąg ma opóźnienie. Będę o dziewiątej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.s': "Twój pociąg jest odwołany. Następny jedzie za 30 minut. Twoja zmiana zaczyna się za 40 minut. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o1': "Wyślij teraz wiadomość, że się spóźnisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o2': "Poczekaj i wyjaśnij to na miejscu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o3': "Wróć do domu: to nie twoja wina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.w': "Przełożony może lepiej planować, kiedy wie wcześnie. Opóźnienie to nie twoja wina, ale powiedzenie o nim to twoje zadanie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist': "Najpierw sprawdź samodzielnie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.b': "Zanim powiesz „klaar”, sprawdź swoją pracę. Użyj listy kontrolnej, jeśli jest, i odhaczaj każdy krok. Spójrz na swoją pracę oczami klienta. Coś jest nie tak? Zrób to jeszcze raz teraz: to szybsze niż później. Masz wątpliwości? Poproś kolegę, żeby spojrzał. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.p': "Gotowe. Możesz to szybko sprawdzić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.s': "Twoja praca jest gotowa. Na liście kontrolnej jeden krok nie jest odhaczony. Wydaje ci się, że ten krok jest zrobiony. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o1': "Sprawdź ten krok jeszcze raz, a potem go odhacz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o2': "Odhacz go: pewnie jest zrobiony.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o3': "Zostaw go: nikt nie czyta tej listy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.w': "Lista kontrolna pomaga tylko wtedy, kiedy jest prawdziwa. Jeszcze jedno spojrzenie zajmuje minutę. Błąd może zająć godziny.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite': "Zostaw tak, jak chcesz to zastać", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.b': "Na koniec pracy zostaw swoje miejsce czyste i bezpieczne. Odłóż narzędzia i materiały na miejsce i zamieć podłogę. Wyłącz maszyny i światła, które były ci potrzebne. Wychodzisz na końcu? Sprawdź okna i drzwi i zamknij wszystko tak, jak każe twoja firma. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.p': "Jestem ostatnią osobą. Mam zamknąć drzwi na klucz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.s': "Zostajesz w pracy jako ostatnia osoba. Nie wiesz, jak włączyć alarm. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o1': "Zadzwoń do przełożonego i zapytaj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o2': "Wyjdź bez alarmu: jest późno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o3': "Naciskaj przyciski, aż zapiszczy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.w': "Budynek bez alarmu nie jest bezpieczny. Przełożony woli dostać telefon, niż jutro znaleźć problem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays': "Uczeń, a zarazem kolega", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.b': "Na praktyce jesteś po to, żeby się uczyć, ale pracujesz jak kolega: punktualnie, według zasad firmy, i dzwonisz, kiedy chorujesz. Możesz zadawać dużo pytań: po to tam jesteś. Twoja praca powinna pomagać ci się uczyć, a nie być tylko sprzątaniem albo noszeniem przez cały dzień. Tak nie jest? Porozmawiaj z opiekunem praktyki w szkole. Wynagrodzenie za praktykę nie zawsze jest wypłacane: zapytaj o nie, zanim zaczniesz. Zasady są różne w każdej szkole: zapytaj opiekuna praktyki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.p': "Też chcę się tego nauczyć. Mogę popatrzeć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.s': "Na praktyce przez trzy tygodnie codziennie tylko sprzątasz stołówkę. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o1': "Porozmawiaj o tym z opiekunem praktyki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o2': "Rób to i nic nie mów: to przecież tylko praktyka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o3': "Zostań w domu, dopóki nie dadzą ci innej pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.w': "Praktyka jest po to, żeby uczyć się zawodu. Opiekun może porozmawiać z firmą o lepszych zadaniach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend': "Zakończ dobrze i poproś o referencje", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.b': "Na rozmowie końcowej słyszysz, co poszło dobrze, a co może być lepsze. Poproś o przykłady i zapisz je na następną pracę. Poszło dobrze? Zapytaj, czy możesz podawać ich jako osoby do referencji. W ostatnim dniu podziękuj kolegom: wiele osób tutaj przynosi coś małego do jedzenia, na przykład ciasto albo słodycze. Zasady są różne w każdej szkole: zapytaj opiekuna praktyki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.p': "Czy mogę podawać Państwa jako osoby do referencji?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.s': "To ostatni dzień twojej praktyki. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o1': "Podziękuj kolegom i się pożegnaj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o2': "Wyjdź po cichu, nic nie mówiąc.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o3': "Poproś firmę o prezent.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.w': "Dobre pożegnanie zostawia dobre wrażenie. Może później zechcesz tam pracować albo będziesz ich potrzebować do referencji.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours': "Przywitaj się z sąsiadami", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.b': "Od niedawna mieszkasz na nowej ulicy? Przywitaj się z sąsiadami i powiedz, jak masz na imię. Dzięki temu później łatwiej rozwiązać problemy. Pracujesz w nocy albo mieszkasz z wieloma osobami? Późnym wieczorem i w nocy zachowuj ciszę. Wystawiaj śmieci we właściwy dzień. W bibliotece i w domu sąsiedzkim często możesz ćwiczyć niderlandzki, czasem za darmo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.p': "Dzień dobry, jestem Ali. Mieszkam obok.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.s': "Mieszkasz z pięcioma kolegami. Sąsiad mówi, że w nocy często jest głośno. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o1': "Przeproś i umów się, że będzie ciszej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o2': "Powiedz, że wszyscy pracujecie i musicie odpocząć.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o3': "Nic nie mów i zamknij drzwi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.w': "Dobra rozmowa na początku zatrzymuje większe problemy. Sąsiedzi, którzy cię znają, są często milsi i chętniej pomagają.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join': "Działaj z innymi: szybciej nauczysz się niderlandzkiego", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.b': "Poza pracą najszybciej uczysz się niderlandzkiego, kiedy robisz coś z ludźmi: sport, klub albo wolontariat. Twoje dziecko chodzi do szkoły? Idź na zebranie dla rodziców, nawet jeśli twój niderlandzki nie jest idealny: nauczyciel chce cię poznać. Możesz poprosić, żeby mówili wolniej, albo użyć aplikacji do tłumaczenia. Wolontariat dobrze wygląda też w CV.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.p': "Czy można mówić trochę wolniej?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.s': "Dostajesz zaproszenie na zebranie dla rodziców. Twój niderlandzki nie jest jeszcze dobry. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o1': "Idź i używaj prostego niderlandzkiego albo aplikacji.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o2': "Nie idź: nauczyciel cię nie zrozumie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o3': "Wyślij krótką wiadomość, że nie masz czasu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.w': "Nauczyciel chce rozmawiać o twoim dziecku, nie o twoim niderlandzkim. Twoja obecność pokazuje, że ci zależy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos': "Najpierw zapytaj, potem publikuj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.b': "Zdjęcie z pracy może pokazywać więcej, niż myślisz: klienta, podopiecznego, ekran albo papier z nazwiskami. Nie wrzucaj zdjęć z pracy do internetu bez zgody pracodawcy i nigdy nie wrzucaj zdjęć ludzi bez ich zgody. Dane klientów zostają w pracy: nie wysyłaj ich na swój telefon ani na swój e-mail. Coś zostało wysłane przez pomyłkę? Od razu powiedz przełożonemu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.p': "Najpierw zapytam o zgodę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.s': "Kolega wrzuca śmieszne zdjęcie klienta do aplikacji zespołu. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o1': "Powiedz, że to nie w porządku, i nie udostępniaj go.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o2': "Udostępnij je: to tylko w aplikacji zespołu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o3': "Polub je, ale nie udostępniaj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.w': "Klient nie zgodził się na to zdjęcie. Zdjęcia w aplikacji mogą szybko trafić wszędzie. Kiedy powiesz to życzliwie, chronisz klienta i kolegę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device': "Aktualizacje tak, dziwne pendrive’y nie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.b': "Instaluj aktualizacje na telefonie i komputerze: zamykają luki, z których korzystają hakerzy. Znajdujesz pendrive? Nie wkładaj go do komputera: oddaj go do działu IT. Na służbowym telefonie albo komputerze instaluj tylko aplikacje, na które pozwala twoja praca. W publicznym wi-fi nie loguj się do banku ani do systemów w pracy. Zablokuj telefon kodem. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.p': { m: "Znalazłem pendrive. Co mam z nim zrobić?", f: "Znalazłam pendrive. Co mam z nim zrobić?", x: "Mam tu znaleziony pendrive. Co mam z nim zrobić?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.s': "Na parkingu znajdujesz pendrive. Jest na nim napis „Salaris”. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o1': "Oddaj go do działu IT.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o2': "Włóż go do komputera, żeby zobaczyć, czyj jest.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o3': "Zabierz go do domu i tam go obejrzyj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.w': "Na pendrivie może być wirus, nawet kiedy wygląda ciekawie. Dział IT może go bezpiecznie sprawdzić.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" (four lessons) and the VOG lesson of "Werken via een uitzendbureau" (23 November 2026).
    'u.safework': "Bezpieczeństwo w pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'l.vog': "Twoja przeszłość: VOG", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vog': "zaświadczenie o niekaralności (VOG: dokument od państwa, który mówi, że twoja przeszłość nie jest problemem w tej pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strafblad': "kartoteka karna (przestępstwa, za które sąd cię skazał)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.screening': "sprawdzenie przeszłości (kontrola twojej przeszłości, zanim zaczniesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personenregister': "rejestr osób w opiece nad dziećmi (każdy, kto pracuje w opiece nad dziećmi, musi w nim być)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiligerspas': "legitymacja pracownika ochrony (karta, której potrzebujesz, żeby pracować w ochronie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verleden': "przeszłość", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.1': "W opiece prawie zawsze proszą o VOG.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.2': "Mam VOG i jestem w rejestrze osób w opiece nad dziećmi.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.3': "Legitymację pracownika ochrony dostanę po sprawdzeniu przeszłości.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.q': "Agencja prosi o VOG. Masz już?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.a': "Nie. Jeszcze czekam na e-mail od Justis.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.safetysigns': "Znaki bezpieczeństwa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verbodsbord': "znak zakazu (czerwone koło z przekreśleniem: tego nie wolno robić)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebodsbord': "znak nakazu (niebieskie koło z białym obrazkiem: to musisz robić)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingsbord': "znak ostrzegawczy (żółty trójkąt z czarną krawędzią: uwaga, niebezpieczeństwo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reddingsbord': "znak ewakuacyjny (zielony prostokąt: droga wyjścia albo pierwsza pomoc)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandbord': "znak ochrony przeciwpożarowej (czerwony kwadrat: tu jest gaśnica albo wąż pożarniczy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pictogram': "piktogram (prosty obrazek, który mówi coś bez słów)", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.1': "Czerwony okrągły znak oznacza: tego nie wolno.", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.2': "Niebieski znak mówi, co musisz robić.", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.3': "Idź za zielonymi znakami do wyjścia ewakuacyjnego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.q': "Co oznacza ten żółty znak?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.a': "Uwaga, niebezpieczeństwo. To znak ostrzegawczy.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.substances': "Substancje niebezpieczne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stofmasker': "maska przeciwpyłowa (zakrywa nos i usta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.giftig': "toksyczny, trujący", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijtend': "żrący (pali skórę albo niszczy metal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drinkfles': "butelka na napoje", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opbergen': "odkładać na miejsce (na swoje własne miejsce, na przykład do szafki zamykanej na klucz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dop': "zakrętka (butelki albo kanistra)", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.1': "Najpierw spójrz na symbol zagrożenia na etykiecie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.2': "Nigdy nie wlewaj tego do butelki na napoje.", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.3': "Tutaj musisz nosić maskę przeciwpyłową.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.q': "Czy ten środek jest toksyczny?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.a': "To jest w karcie charakterystyki. Sprawdzę to.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.firefight': "Pożar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddriehoek': "trójkąt spalania (ogień potrzebuje paliwa, powietrza i ciepła; zabierz jedno, a ogień zgaśnie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zuurstof': "tlen (jest w powietrzu; ogień go potrzebuje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blussen': "gasić (ogień)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blusdeken': "koc gaśniczy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openvuur': "otwarty ogień (płomień, na przykład z zapalniczki albo palnika gazowego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandslang': "wąż pożarniczy (na zwijadle w ścianie)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.1': "Nigdy nie lej wody na płonący olej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.2': "Samodzielnie gasisz tylko mały pożar.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.3': "Przykryj patelnię kocem gaśniczym.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.q': "Pali się w koszu na śmieci!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.a': "Ogień jest mały. Wezmę gaśnicę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.permitwork': "Pozwolenia, przestrzenie zamknięte i podnoszenie ładunków", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkvergunningveilig': "pozwolenie na pracę niebezpieczną (dokument bezpieczeństwa przy niebezpiecznej pracy: co, gdzie i jakie zagrożenia; to nie są twoje dokumenty pobytowe ani dokumenty do pracy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beslotenruimte': "przestrzeń zamknięta (zbiornik, studzienka albo kanał: mała, z małą ilością świeżego powietrza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gasmeting': "pomiar gazów (mierzysz powietrze, zanim wejdziesz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mangatwacht': "asekurujący przy włazie (osoba, która zostaje na zewnątrz przy otworze, utrzymuje kontakt i podnosi alarm)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaalgever': "sygnalista (osoba, która daje operatorowi dźwigu znaki rękami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijsen': "podnosić (ładunek dźwigiem)", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.1': "Bez pozwolenia na pracę niebezpieczną nie zaczynamy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.2': "Najpierw pomiar gazów, dopiero potem do przestrzeni zamkniętej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.3': "Patrz na sygnalistę: podnieś, opuść, stop.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.q': "Kto zostaje na zewnątrz przy zbiorniku?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.a': "Ja. Asekuruję przy włazie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog': "VOG: sprawdzenie twojej przeszłości", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.b': "Przy niektórych pracach agencja albo pracodawca prosi o VOG (Verklaring Omtrent het Gedrag). To dokument od państwa: mówi, że twoja przeszłość nie jest problemem w tej pracy. W opiece, opiece nad dziećmi i ochronie prawie zawsze go potrzebujesz. Zwykle pracodawca zaczyna wniosek przez internet. Dostajesz e-mail od Justis, kończysz wniosek przez DigiD i płacisz. Najpierw zapytaj, kto płaci: często pracodawca zwraca te pieniądze. Dla wolontariuszy, którzy pracują z dziećmi albo z osobami wymagającymi szczególnej ochrony, często jest za darmo. Masz wpis w kartotece karnej? To nie zawsze oznacza, że nie dostaniesz VOG: Justis patrzy na to, co ma znaczenie w tej pracy. Masz wątpliwości? Zapytaj Juridisch Loket. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.p': "Czy muszę płacić za VOG z własnej kieszeni?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.s': { m: "Twoja nowa praca w domu opieki wymaga VOG. Kilka lat temu miałeś problem z policją. Co robisz?", f: "Twoja nowa praca w domu opieki wymaga VOG. Kilka lat temu miałaś problem z policją. Co robisz?", x: "Twoja nowa praca w domu opieki wymaga VOG. Kilka lat temu był w twoim życiu problem z policją. Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o1': "Złóż wniosek, a jeśli się martwisz, zapytaj Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o2': "Nie składaj wniosku: i tak nigdy go nie dostaniesz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o3': "Powiedz, że nie masz czasu, i szukaj innej pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.w': "Justis patrzy tylko na to, co ma znaczenie w tej pracy. Wiele osób z czymś w przeszłości i tak dostaje VOG. Kiedy masz wątpliwości, rada pomaga.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns': "Co to jest VCA?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.b': "VCA to certyfikat bezpieczeństwa. Wiele firm, także przy pracy przez agencję, wymaga go, na przykład w budownictwie i przemyśle. Większość pracowników robi B-VCA (VCA Basis); przełożony robi VOL-VCA. Robisz kurs i egzamin z pytaniami wielokrotnego wyboru w uznanym centrum egzaminacyjnym. Egzamin często można zdawać w kilku językach, na przykład po angielsku albo po polsku: zapytaj centrum egzaminacyjne. Dyplom jest ważny 10 lat. Często płaci pracodawca albo agencja: zapytaj, zanim zapłacisz z własnej kieszeni. Agencja nie może potrącać z twojej wypłaty dowolnych kosztów (zobacz temat o pracy przez agencję). W tych lekcjach poznajesz kilka słów, które spotkasz przy bezpiecznej pracy i w VCA. Do VCA robisz kurs i egzamin. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.p': "Kto płaci za kurs VCA?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.s': "Agencja mówi: „Potrzebujesz VCA. Zapłać za kurs albo potrącimy to z twojej wypłaty.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o1': "Zapytaj, kto płaci, i poproś o to na piśmie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o2': "Od razu zapłać, żeby dostać pracę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o3': "Nic nie mów i podpisz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.w': "Często za VCA płaci pracodawca albo agencja. Jeśli musisz coś zapłacić, chcesz to wiedzieć wcześniej, na papierze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances': "Przeczytaj etykietę, potem pracuj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.b': "Niebezpieczny środek ma na etykiecie czerwony romb z czarnym obrazkiem w środku: symbol zagrożenia. Obrazek pokazuje zagrożenie, na przykład ogień, truciznę albo środek, który pali skórę. Etykieta i karta charakterystyki (veiligheidsblad) mówią, jak bezpiecznie z nim pracować i co robić, jeśli coś pójdzie źle. Noś to, co tam jest napisane: rękawice, okulary ochronne albo maskę. Zakręć zakrętkę i odłóż środek na jego własne miejsce. Nigdy nie wlewaj go do butelki na napoje: ktoś może go wypić. Nie jedz, nie pij i nie pal, kiedy z nim pracujesz, a potem umyj ręce. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.p': "Gdzie jest karta charakterystyki tego środka?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.s': "Kolega wlewa środek czyszczący do pustej butelki po wodzie, żeby zabrać go ze sobą. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o1': "Powiedz, że to niebezpieczne: ktoś może to wypić.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o2': "Nic: to jego własna butelka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o3': "Naklej na butelkę małą naklejkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.w': "W butelce na napoje środek wygląda jak woda albo lemoniada. Ktoś może go wypić przez pomyłkę. Środek zostaje w swoim opakowaniu, z etykietą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight': "Mały pożar czy duży pożar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.b': "Ogień potrzebuje trzech rzeczy: paliwa, powietrza i ciepła. To jest trójkąt spalania. Zabierz jedną z nich, a ogień zgaśnie. Koc gaśniczy odcina powietrze. Woda zabiera ciepło, ale nigdy nie używaj wody na płonący olej albo tłuszcz ani na urządzenia elektryczne. Spójrz na gaśnicę: jest na niej napisane, do czego służy. Piana i proszek działają na wiele pożarów; CO2 jest dobry na pożary urządzeń elektrycznych. Trzymaj iskry i otwarty ogień z dala od środków, które łatwo się palą. Samodzielnie gaś tylko mały pożar i tylko wtedy, gdy jest to bezpieczne. Jest większy? Wyjdź, zamknij za sobą drzwi i podnieś alarm. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.p': "Gdzie wisi koc gaśniczy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.s': "W stołówce zapala się olej na patelni. Płomienie są jeszcze małe. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o1': "Przykryj patelnię kocem gaśniczym.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o2': "Wylej na to szklankę wody.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o3': "Wynieś patelnię na zewnątrz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.w': "Woda na płonącym oleju robi dużą kulę ognia. Koc odcina powietrze i ogień gaśnie. Jeśli możesz, wyłącz grzanie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork': "Niebezpieczna praca: najpierw pozwolenie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.b': "Przy niebezpiecznej pracy, na przykład przy spawaniu blisko rzeczy, które się palą, albo przy pracy w zbiorniku lub studzience, firma często używa pozwolenia na pracę niebezpieczną (werkvergunning). To dokument bezpieczeństwa, a nie twoje dokumenty pobytowe ani dokumenty do pracy. Jest w nim napisane, co robisz, gdzie, jakie są zagrożenia i co z nimi zrobić. Przeczytaj je i zacznij dopiero wtedy, gdy jest podpisane. W przestrzeni zamkniętej może być za mało powietrza albo niebezpieczny gaz: najpierw pomiar gazów, a asekurujący zostaje na zewnątrz przy włazie. Ktoś w środku ma problem? Podnieś alarm: nigdy nie wchodź bez ochrony. Przy dźwigu znaki daje jedna osoba: sygnalista. Nigdy nie stój pod wiszącym ładunkiem. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.p': "Czy pozwolenie na pracę niebezpieczną jest już podpisane?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.s': "Twój kolega w zbiorniku nie odpowiada. Ty asekurujesz przy włazie. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o1': "Podnieś alarm i zostań na zewnątrz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o2': "Szybko wejdź do środka, żeby mu pomóc.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o3': "Poczekaj kilka minut, potem zajrzyj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.w': "Gaz, który zaszkodził koledze, może zaszkodzić też tobie. Wiele ofiar w zbiornikach to osoby, które weszły, żeby pomóc. Po alarmie przychodzi pomoc ze sprzętem ochronnym.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie", the fourth own unit of Productie (23 November 2026).
    'u.process': "Operator w przemyśle procesowym", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantround': "Obchód i sterownia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlekamer': "sterownia (miejsce, gdzie operatorzy obserwują cały zakład na ekranach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.operator': "operator (osoba, która prowadzi i obserwuje maszyny w zakładzie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukmeter': "manometr (okrągły miernik ze wskazówką)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau': "poziom (jak pełny jest zbiornik albo silos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snelheid': "prędkość (jak szybko pracuje linia albo maszyna)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmmelding': "komunikat alarmowy (ostrzeżenie na ekranie, że coś jest nie tak)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.1': "Robię obchód.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.2': "Ciśnienie jest za wysokie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.3': "Zapisuję wartość.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.q': "Dlaczego na ekranie jest alarm?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.a': "Poziom w zbiorniku numer dwa jest za wysoki.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantfault': "Awaria", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilstand': "postój (linia stoi i nic się nie produkuje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstarten': "uruchamiać (maszynę albo linię, krok po kroku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilzetten': "zatrzymywać (wyłączać maszynę we właściwy sposób)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.technischedienst': "dział utrzymania ruchu (TD: naprawiają maszyny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhoudsmonteur': "mechanik utrzymania ruchu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resetten': "resetować (kasować usterkę na ekranie albo na panelu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.1': "Przy awarii dzwonię do kierownika zmiany.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.2': "Nigdy nie sięgaj do pracującej maszyny.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.3': "Dział utrzymania ruchu już idzie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.q': "Czy mogę znowu uruchomić linię?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.a': "Nie, czekaj. Kłódka mechanika jest jeszcze założona.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shiftwork': "Zmiany i noce", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploeg': "brygada (grupa, która pracuje na tych samych zmianach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegwissel': "zmiana brygad (jedna brygada idzie do domu, następna zaczyna)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volcontinu': "w ruchu ciągłym (zakład pracuje dzień i noc, każdego dnia tygodnia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdagslapen': "spać w dzień (po nocnej zmianie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.broodtrommel': "pudełko na kanapki", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflosser': "zmiennik (kolega, który przejmuje twoje miejsce)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.1': "Nasz zakład pracuje w ruchu ciągłym.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.2': "Zapisz to w dzienniku dla następnej brygady.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.3': "Przychodzę na czas na przekazanie zmiany.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.q': "Co się stało w nocy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.a': "Pompa numer trzy stanęła. To jest w dzienniku.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.heatdust': "Gorąco, para i pył", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeltoven': "piec do topienia (bardzo gorący piec, który topi szkło albo metal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoom': "para (bardzo gorąca para wodna)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoomleiding': "rura parowa (jest gorąca, także kiedy nie widzisz pary)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hittekleding': "odzież chroniąca przed gorącem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwartsstof': "pył kwarcowy (bardzo drobny pył z gliny, piasku albo kamienia; niszczy płuca)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.explosiegevaar': "zagrożenie wybuchem (pył albo opary w powietrzu mogą wybuchnąć; żółty znak z EX)", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.1': "Przy piecu do topienia często pij wodę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.2': "Pyłu kwarcowego nie widać. Załóż maskę przeciwpyłową.", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.3': "Tu jest zagrożenie wybuchem: żadnych iskier.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.q': "Czy mogę wnieść telefon do tej strefy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.a': "Nie. Tu jest zagrożenie wybuchem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround': "Zrób obchód i zapisuj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.b': "Zakład, który pracuje dzień i noc, potrzebuje oczu i uszu. Na obchodzie patrzysz, słuchasz i wąchasz: nowy hałas, wyciek albo dziwny zapach może być pierwszym znakiem problemu. Odczytujesz mierniki: temperaturę, ciśnienie, prędkość i poziom. Każdą wartość zapisz od razu, z godziną, na liście albo w systemie. Nie później, z pamięci. Wartość jest za wysoka albo za niska? Od razu powiedz sterowni albo kierownikowi zmiany. Alarm na ekranie nigdy nie jest „tylko alarmem”: nie wyłączaj go, zanim nie wiesz, dlaczego się włączył. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.p': "Temperatura jest za wysoka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.s': "Na obchodzie ciśnienie jest trochę za wysokie. Twoja zmiana zaraz się kończy. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o1': "Od razu powiedz sterowni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o2': "Zapisz to i nikomu nie mów.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o3': "Zostaw to następnej zmianie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.w': "W zakładzie mała zmiana może szybko urosnąć. Kiedy sterownia wie o tym wcześnie, może zareagować, zanim coś pójdzie źle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault': "Zatrzymaj, zablokuj, potem naprawiaj", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.b': "Przy awarii linia stoi i wszyscy chcą, żeby szybko znowu ruszyła. Ale właśnie wtedy dzieje się wiele wypadków. Nigdy nie sięgaj do pracującej maszyny, także nie „tylko na chwilę”. Zadzwoń do kierownika zmiany albo do działu utrzymania ruchu. Zanim ktoś zacznie pracować przy maszynie, jest ona zatrzymana i zablokowana, żeby nikt nie mógł jej włączyć. Często każdy, kto przy niej pracuje, zakłada na nią własną kłódkę. Uruchamiaj ją znowu dopiero wtedy, gdy wszystkie kłódki są zdjęte, a kierownik zmiany mówi, że jest bezpiecznie. Uruchamiaj krok po kroku, tak jak cię nauczono. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.p': "Jeszcze jest na tym kłódka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.s': "Produkt utknął w maszynie. Maszyna dalej pracuje. Kolega mówi: „Szybko go wyciągnij.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o1': "Nie sięgaj do środka: zadzwoń do kierownika zmiany.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o2': "Szybko wyciągnij go ręką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o3': "Wypchnij go kijem, kiedy maszyna pracuje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.w': "Maszyna, która dalej pracuje, może się ruszyć w każdej chwili. Maszyna zatrzymana i zablokowana nie może cię zranić.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork': "Noce: śpij, jedz, bądź na czas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.b': "Wiele zakładów pracuje dzień i noc, każdego dnia tygodnia. Pracujesz kolejno na zmianach porannych, popołudniowych i nocnych, często w systemie trzech albo pięciu brygad. Po nocnej zmianie śpij w ciemnym i cichym pokoju i powiedz rodzinie, kiedy śpisz. Jedz o stałych porach i bierz własne jedzenie: w nocy stołówka jest często zamknięta. Bądź na czas na przekazanie zmiany: kolega na ciebie czeka, a zakładu nie wolno zostawić bez obsługi. Przy nocnych zmianach są dodatkowe zasady, w prawie i często w układzie zbiorowym (cao), na przykład o odpoczynku po nocach. Zapytaj, jakie zasady obowiązują u ciebie w pracy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.p': "Jakie są zasady dla nocnych zmian?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.s': { m: "Po czterech nocach kierownik zmiany prosi cię o jeszcze jedną nocną zmianę. Jesteś bardzo zmęczony. Co robisz?", f: "Po czterech nocach kierownik zmiany prosi cię o jeszcze jedną nocną zmianę. Jesteś bardzo zmęczona. Co robisz?", x: "Po czterech nocach kierownik zmiany prosi cię o jeszcze jedną nocną zmianę. Czujesz ogromne zmęczenie. Co robisz?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o1': { m: "Powiedz, że jesteś bardzo zmęczony, i zapytaj o zasady.", f: "Powiedz, że jesteś bardzo zmęczona, i zapytaj o zasady.", x: "Powiedz, że czujesz ogromne zmęczenie, i zapytaj o zasady." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o2': "Zgódź się i pij dużo kawy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o3': "Zgódź się i prześpij się trochę na przerwie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.w': "Zmęczeni ludzie robią więcej błędów, a w zakładzie błąd może być niebezpieczny. Są zasady dotyczące odpoczynku po nocnych zmianach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust': "Gorąco, pył i iskry", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.b': "Przy piecu do topienia, piecu do wypalania albo przy parze jest bardzo gorąco. Często pij wodę, także zanim poczujesz pragnienie. Noś odzież chroniącą przed gorącem i nie dotykaj rur ani części bez rękawic: para i gorący metal parzą, także kiedy ich nie widzisz. Kręci ci się w głowie albo jest ci niedobrze? Przerwij pracę, idź w chłodne miejsce i powiedz komuś. Pył z gliny, piasku albo kamienia może zawierać pył kwarcowy (kwartsstof). Nie widzisz go, ale niszczy płuca. Używaj wyciągu, noś maskę przeciwpyłową i nigdy nie zdmuchuj pyłu sprężonym powietrzem. W niektórych strefach pył albo opary mogą wybuchnąć: pokazuje to żółty znak z EX. Tam: żadnych iskier, żadnego ognia i często żadnego zwykłego telefonu. Zapytaj, co wolno w każdej strefie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.p': "Źle się czuję. Idę w chłodne miejsce.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.s': "Na twojej maszynie leży drobny pył z gliny. Kolega mówi: „Zdmuchnij to pistoletem na sprężone powietrze.” Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o1': "Wyczyść to na mokro albo odkurzaczem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o2': "Zdmuchnij to: tak jest szybciej.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o3': "Zostaw to następnej zmianie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.w': "Dmuchanie podrywa pył do góry, w powietrze i do twoich płuc. Mokra ściereczka albo odkurzacz nie pozwala pyłowi się unieść.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (debts, taxes, discrimination, the union, kiln, mixing lab, first weeks, order picking) (26 November 2026).
    'l.discrimination': "Dyskryminacja i zastraszanie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.andersbehandelen': "traktować inaczej (gorzej niż innych)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkomst': "pochodzenie (kraj albo grupa, z której pochodzisz ty albo twoja rodzina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geloof': "religia, wiara", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitschelden': "wyzywać (mówić komuś brzydkie słowa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedreigen': "grozić (mówić, że zrobisz komuś krzywdę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geweld': "przemoc", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.1': "Traktują mnie inaczej z powodu mojej wiary.", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.2': "On mi grozi. Nie czuję się bezpiecznie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.3': "Mogę powiedzieć nie, także mojemu szefowi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.q': "Wszystko w porządku? Ciągle cię wyzywają.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.a': "Nie, nie jest w porządku. Zgłoszę to.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.union': "Związek zawodowy i rada pracowników", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lidworden': "wstąpić, zostać członkiem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contributie': "składka członkowska (płacisz ją co miesiąc)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opkomenvoor': "stawać w obronie (bronić czyichś interesów)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhandelen': "negocjować (rozmawiać, aż obie strony się zgodzą)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loonsverhoging': "podwyżka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ondernemingsraad': "rada pracowników (OR: koledzy wybrani do rozmów z dyrektorem)", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.1': "Wstępuję do związku zawodowego.", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.2': "Związek zawodowy negocjuje w sprawie układu zbiorowego (cao).", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.3': "Kto jest w radzie pracowników?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.q': "Dlaczego należysz do związku zawodowego?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.a': "Stają w mojej obronie, kiedy jest problem.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debthelp': "Długi i pomoc", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herinnering': "przypomnienie (list: rachunek nie jest jeszcze zapłacony)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmaning': "ostateczne wezwanie do zapłaty (zapłać przed określoną datą, bo mogą dojść dodatkowe koszty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.betalingsregeling': "plan spłaty (spłacasz dług małymi częściami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurwaarder': "komornik (urzędnik, który ściąga dług, często po decyzji sędziego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuldhulp': "pomoc dla zadłużonych (darmowa pomoc z długami, od gminy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterstand': "zaległość (pieniądze, które trzeba było już zapłacić)", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.1': { m: "Dostałem ostateczne wezwanie do zapłaty.", f: "Dostałam ostateczne wezwanie do zapłaty.", x: "Przyszło do mnie ostateczne wezwanie do zapłaty." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.2': "Czy mogę zapłacić w ratach?", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.3': "Chcę dostać pomoc z moimi długami.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.q': { m: "Nie zapłacił pan jeszcze rachunku.", f: "Nie zapłaciła pani jeszcze rachunku.", x: "Rachunek nie jest jeszcze zapłacony." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.a': "Zgadza się. Czy mogę dostać plan spłaty?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.taxes': "Podatki i dopłaty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jaaropgave': "roczne zestawienie (dokument od pracodawcy z twoim wynagrodzeniem za cały rok)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauweenvelop': "niebieska koperta (przychodzą w niej listy od Belastingdienst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teruggave': "zwrot (pieniądze z podatku, które dostajesz z powrotem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstel': "odroczenie (możesz to zrobić później)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huurtoeslag': "dopłata do czynszu (pieniądze od państwa, które pomagają zapłacić czynsz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.belastingtelefoon': "darmowa infolinia Belastingdienst", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.1': "Potrzebuję rocznego zestawienia do zeznania podatkowego.", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.2': "Teraz zarabiam więcej. Zgłaszam to od razu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.3': "Dostaję zwrot pieniędzy od Belastingdienst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.q': "Jest dla ciebie niebieska koperta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.a': "Dziękuję. Od razu ją otworzę.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.kiln': "Piec, szkło i ceramika", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pers': "prasa (maszyna, która prasuje glinę albo proszek w kształt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glazuur': "szkliwo (błyszcząca, szklista warstwa na płytce albo kubku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tunneloven': "piec tunelowy (długi piec; produkty powoli przez niego przejeżdżają)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherf': "odłamek (ostry kawałek potłuczonego szkła albo płytki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gloeiend': "rozżarzony (tak gorący, że świeci na czerwono)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.armbeschermer': "rękaw ochronny (chroni rękę przed przecięciem)", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.1': "Płytki powoli przejeżdżają przez piec tunelowy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.2': "Na tej płytce jest pęknięcie. To jest brak.", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.3': "Przy szkle noś rękawy ochronne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.q': "Czy mogę zbierać odłamki ręką?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.a': "Nie. Użyj zmiotki i szufelki.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mixlab': "Hala mieszania i laboratorium", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batch': "partia (jedna ilość, robiona naraz według jednej receptury)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwegen': "odważać (ważyć dokładnie tyle, ile podaje receptura)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mengvat': "zbiornik do mieszania (duży zbiornik z mieszadłem w środku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.labjas': "fartuch laboratoryjny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laboratorium': "laboratorium (lab: tu sprawdza się produkt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grondstof': "surowiec (to, z czego robi się produkt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.1': "Dokładnie odważ surowce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.2': "Biorę próbkę dla laboratorium.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.3': "Jaka to partia? Spójrz na etykietę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.q': "Czy partia jest zatwierdzona?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.a': "Jeszcze nie. Laboratorium bada próbkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination': "Niesprawiedliwe traktowanie? To nie twoja wina", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.b': "Dyskryminacja jest wtedy, gdy ktoś traktuje cię inaczej albo gorzej z powodu tego, kim jesteś: z powodu pochodzenia, koloru skóry, religii, płci, wieku, niepełnosprawności albo tego, kogo kochasz. Zastraszanie (intimidatie) to na przykład niechciany dotyk, seksualne uwagi, groźby albo wyzywanie cię. Jedno i drugie jest w pracy zabronione i to nigdy nie jest twoja wina. Możesz powiedzieć nie, także swojemu szefowi. Zapisz, co się stało, kiedy i kto to widział. Porozmawiaj z przełożonym albo z osobą zaufania (vertrouwenspersoon), jeśli jest taka w twojej firmie. Poza pracą za darmo pomaga punkt antydyskryminacyjny w twojej gminie (discriminatie.nl). College voor de Rechten van de Mens może wydać ocenę, także za darmo. Przemoc albo groźba? Idź na policję. W niebezpieczeństwie dzwoń pod 112. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.p': "Chcę coś zgłosić. Czy mogę porozmawiać z panem/panią w zaufaniu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.s': "Kolega często cię wyzywa z powodu tego, skąd pochodzisz. Inni się śmieją. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o1': "Zapisz to i powiedz komuś, komu ufasz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o2': "Nic nie mów: to część pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o3': "Odejdź z pracy i nikomu nie mów dlaczego.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.w': "Wyzywanie z powodu pochodzenia to dyskryminacja i jest zabronione. Kiedy to zapiszesz i o tym porozmawiasz, ktoś może pomóc ci to zatrzymać.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union': "Razem jesteście silniejsi", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.b': "Związek zawodowy (vakbond), na przykład FNV albo CNV, broni interesów pracowników. Zawiera z pracodawcami umowy o płacy i pracy: układ zbiorowy (cao). Wiele układów zbiorowych obowiązuje wszystkich w danej branży, także gdy nie należysz do związku. Członkowie płacą co miesiąc składkę (contributie) i dostają porady i pomoc, na przykład przy problemie z wynagrodzeniem albo zwolnieniem. Wstąp na czas: często związek pomaga tylko przy problemie, który zaczął się po twoim wstąpieniu. Wstąpienie to twój własny wybór i pracodawca nie może cię za to ukarać. Firma, która ma 50 albo więcej pracowników, musi mieć radę pracowników (ondernemingsraad, OR): kolegów wybranych przez pracowników. OR rozmawia z dyrektorem na przykład o godzinach pracy i bezpieczeństwie. Mniejsza firma może mieć przedstawicielstwo pracowników (personeelsvertegenwoordiging). Masz pytania? Zapytaj kolegę z OR. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.p': "Mam pytanie o nowe grafiki. Czy OR może coś z tym zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.s': "Twoja firma planuje dużo więcej zmian wieczornych. Wielu kolegów jest niezadowolonych. Co możesz zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o1': "Zapytaj o to kolegę z OR.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o2': "Przestań przychodzić wieczorem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o3': "Nic nie mów: nic się nie zmieni.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.w': "OR ma wpływ na zasady dotyczące godzin pracy. Może o nich rozmawiać z dyrektorem, w imieniu wszystkich pracowników razem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp': "Otwieraj każdy list i wcześnie proś o pomoc", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.b': "Nie udało ci się zapłacić rachunku na czas? Wtedy najpierw dostajesz przypomnienie (herinnering), a potem ostateczne wezwanie do zapłaty (aanmaning). Zanim firma może doliczyć ci za to dodatkowe koszty, musi dać ci 14 dni na zapłatę. Dlatego otwieraj każdy list, także gdy się go boisz. Nie możesz zapłacić wszystkiego naraz? Zadzwoń albo napisz i poproś o plan spłaty (betalingsregeling). Deurwaarder (komornik) to urzędnik, który ściąga długi, często po decyzji sędziego. Może na przykład zabrać część twojego wynagrodzenia, ale zawsze musi zostawić ci tyle, żeby starczyło na życie. Masz długi? Proś o pomoc wcześnie, kiedy są jeszcze małe. Gemeente daje darmową pomoc dla zadłużonych (schuldhulp). Na geldfit.nl możesz zrobić darmowy test i znaleźć pomoc w pobliżu. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.p': "Nie mogę zapłacić wszystkiego naraz. Czy mogę płacić w ratach?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.s': "Dostajesz ostateczne wezwanie do zapłaty rachunku za telefon. W tym miesiącu nie masz pieniędzy. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o1': "Zadzwoń do firmy i poproś o plan spłaty.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o2': "Odłóż list i czekaj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o3': "Szybko pożycz pieniądze przez „kup teraz, zapłać później”.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.w': "Kiedy powiesz o tym na czas, firma często może zgodzić się na małe raty. List, który odłożysz, nie znika: koszty tylko rosną.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes': "Twoje zeznanie podatkowe i twoje dopłaty", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.b': "Zeznanie podatkowe (aangifte) za poprzedni rok trzeba złożyć przed 1 maja. Przyszedł do ciebie list, w którym proszą cię o to? Wtedy musisz je złożyć. Czasem dostajesz zwrot pieniędzy. Potrzebujesz rocznego zestawienia (jaaropgave) od pracodawcy. Nie masz czasu? Możesz poprosić o więcej czasu (uitstel). Dopłaty (toeslagen), takie jak zorgtoeslag i huurtoeslag, to zaliczka: zależą od tego, ile zarobisz w tym roku. Zarabiasz więcej albo zmienia się coś innego? Od razu zgłoś to w Mijn toeslagen. Jeśli tego nie zrobisz, później możesz musieć oddać dużo pieniędzy. Musisz oddać pieniądze? Możesz poprosić o plan spłaty. Darmowa pomoc: BelastingTelefoon, biuro Belastingdienst (najpierw umów wizytę) albo biblioteka. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.p': "Mój dochód się zmienił. Jak mam to zgłosić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.s': "Dostajesz nową pracę i co miesiąc zarabiasz więcej. Dostajesz huurtoeslag. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o1': "Zgłoś nowy dochód w Mijn toeslagen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o2': "Czekaj, aż Belastingdienst zapyta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o3': "Przestań płacić czynsz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.w': "Twoja dopłata zależy od tego, ile zarabiasz. Kiedy zgłosisz zmianę na czas, dostajesz właściwą kwotę i później nie musisz oddawać dużo pieniędzy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln': "Ostre, gorące i ciężkie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.b': "W zakładzie, który robi płytki albo szkło, produkty są prasowane w kształt, dostają szkliwo i powoli przejeżdżają przez długi piec. Po piecu muszą ostygnąć: nie dotykaj ich, kiedy są gorące, albo noś rękawice odporne na gorąco. Szkło i potłuczone płytki są bardzo ostre. Noś rękawice odporne na przecięcie, rękawy ochronne i okulary ochronne. Nigdy nie łap spadającej szklanej płyty: cofnij się. Zbieraj odłamki zmiotką i szufelką, nigdy rękami, i wyrzucaj je do właściwego pojemnika. Szkliwo i pył mogą zawierać szkodliwe substancje: myj ręce, zanim coś zjesz albo wypijesz. Przy prasie nigdy nie sięgaj do środka, kiedy pracuje. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.p': "Uwaga, odłamki! Przyniosę zmiotkę i szufelkę.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.s': "Szklana płyta wysuwa się ze stojaka i zaczyna spadać. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o1': "Cofnij się i pozwól jej spaść.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o2': "Złap ją rękami.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o3': "Zatrzymaj ją nogą.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.w': "Spadająca płyta może przeciąć bardzo głęboko, także przez rękawice. Potłuczona płyta kosztuje tylko pieniądze.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab': "Trzymaj się dokładnie receptury", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.b': "W hali mieszania robisz partię według receptury: jakie surowce, ile i w jakiej kolejności. Wszystko dokładnie odważ i zapisz, co dodajesz, razem z numerem partii. Masz wątpliwości? Pytaj, nie zgaduj. Zanim użyjesz beczki albo worka, przeczytaj etykietę: co jest w środku, numer partii i znaki zagrożenia. Nigdy nie wkładaj do beczki ani do worka niczego, co tam nie należy. Do próbki użyj czystej łopatki i czystego pojemnika i od razu przyklej na nim etykietę. Proszek i opary mogą być szkodliwe: używaj wyciągu i noś to, co jest potrzebne, na przykład fartuch laboratoryjny, gogle, rękawice albo maskę. Przy produkcji żywności nosisz też siateczkę na włosy i często myjesz ręce. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.p': "Nie wiem tego na pewno. Ile ma tego wejść?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.s': "W recepturze jest 25 kilo. Przez pomyłkę wsypujesz 26 kilo i wszystko jest już w zbiorniku do mieszania. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o1': "Powiedz kierownikowi zmiany i zapisz to.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o2': "Nic nie mów: jeden kilogram to niewiele.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o3': "Wyjmij trochę ręką.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.w': "Jedna zła ilość może zepsuć całą partię. Kiedy kierownik zmiany wie o tym na czas, laboratorium może to sprawdzić, zanim partia pójdzie dalej.", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (performance review, forms, voicemail, the dentist) (27 November 2026).
    'l.forms': "Wypełnianie formularza", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invullen': "wypełniać (formularz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vakje': "kratka (mały kwadrat na formularzu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aankruisen': "zaznaczyć krzyżykiem (postawić krzyżyk w kratce)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verplichtveld': "pole obowiązkowe (musisz je wypełnić; często jest oznaczone *)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postcode': "kod pocztowy (krótki kod twojej ulicy albo miejscowości, część adresu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdletters': "wielkie litery (A, B, C)", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.1': "Napisz swoje imię i nazwisko wielkimi literami.", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.2': "Zaznacz właściwą kratkę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.3': "Czy może mi pan/pani pomóc z tym formularzem?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.q': { m: "Wypełniłeś już formularz?", f: "Wypełniłaś już formularz?", x: "Formularz jest już wypełniony?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.a': "Prawie. Gdzie mam się podpisać?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.voicemail': "Poczta głosowa i oddzwanianie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.piep': "sygnał (krótki dźwięk; po nim nagrywasz swoją wiadomość)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beluisteren': "odsłuchać (wiadomość)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boodschap': "wiadomość (to, co mówisz na czyjąś pocztę głosową)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.noemen': "podać, powiedzieć (swoje imię, swój numer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zosnelmogelijk': "jak najszybciej", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opnieuw': "jeszcze raz, ponownie", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.1': "Mówi Ali Haddad. Dzwonię w sprawie mojego grafiku.", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.2': "Codziennie odsłuchuję pocztę głosową.", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.3': "Zadzwonię później jeszcze raz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.q': "Po sygnale proszę podać imię i numer telefonu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.a': "Mówi Ali. Czy może pan/pani oddzwonić do mnie jak najszybciej?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.dentist': "U dentysty", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandarts': "dentysta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiespijn': "ból zęba", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaatje': "ubytek (mała dziura w zębie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulling': "plomba (dentysta zamyka nią dziurę w zębie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebit': "uzębienie (wszystkie twoje zęby razem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvullendeverzekering': "ubezpieczenie dodatkowe (możesz je wybrać oprócz podstawowego ubezpieczenia zdrowotnego)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.1': "Od dwóch dni boli mnie ząb.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.2': "Mam ubytek. Dostanę plombę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.3': "Ile kosztuje plomba?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.q': { m: "Kiedy ostatnio byłeś u dentysty?", f: "Kiedy ostatnio byłaś u dentysty?", x: "Kiedy była twoja ostatnia wizyta u dentysty?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.a': "Rok temu. Chcę umówić się na przegląd.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms': "Formularz: pisz wyraźnie i chroń swój BSN", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.b': "Formularz często pyta o imię i nazwisko, datę urodzenia, adres i kod pocztowy. Pisz wyraźnie, często wielkimi literami. Pole z gwiazdką (*) jest obowiązkowe: musisz je wypełnić. Zaznacz właściwą kratkę. Nie rozumiesz pytania? Poproś o pomoc, zanim podpiszesz. Nigdy nie podpisuj czegoś, czego nie rozumiesz. Twój BSN: mogą o niego pytać tylko niektóre instytucje, na przykład pracodawca, gemeente, Belastingdienst, ubezpieczyciel zdrowotny, twój lekarz i bank. Sklep albo klub sportowy nie może. Nigdy nie podawaj BSN nieznajomemu, w aplikacji ani przez telefon. Nie masz pewności? Zapytaj, do czego jest im potrzebny. Wiele bibliotek pomaga za darmo z formularzami, często w czasie dyżuru bez umawiania się. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.p': "Czy mój BSN jest tu obowiązkowy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.s': "Zapisujesz się do klubu sportowego. W formularzu jest pytanie o twój BSN. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o1': "Zostaw to pole puste i zapytaj, do czego go potrzebują.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o2': "Wypełnij je: każdy formularz może o to pytać.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o3': "Podaj zamiast tego swój login DigiD.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.w': "Klub sportowy nie może używać twojego BSN. Mogą to tylko niektóre instytucje, na przykład pracodawca, gemeente i ubezpieczyciel zdrowotny. Kiedy pytasz dlaczego, chronisz swój numer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail': "Wiadomość: kto, dlaczego, twój numer", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.b': "Nikt nie odbiera? Zostaw krótką wiadomość (boodschap) po sygnale (piep). Powiedz swoje imię, dlaczego dzwonisz, i swój numer telefonu. Mów powoli i podaj numer dwa razy. Masz nieodebrane połączenie? Najpierw odsłuchaj pocztę głosową, potem oddzwoń jak najszybciej. Nie rozumiesz wiadomości? Odsłuchaj ją jeszcze raz albo poproś kolegę, żeby posłuchał razem z tobą. Ustaw pocztę głosową i odsłuchuj ją codziennie. Zgłaszasz chorobę? W wielu firmach wiadomość nie wystarczy: dzwoń jeszcze raz, aż z kimś porozmawiasz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.p': "Czy mogę zostawić wiadomość?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.s': "Spóźnisz się, więc dzwonisz do przełożonej. Słyszysz jej pocztę głosową. Co mówisz po sygnale?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o1': "Swoje imię, dlaczego dzwonisz, i swój numer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o2': "Tylko „Bel me terug” i rozłącz się.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o3': "Nic: rozłącz się i czekaj.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.w': "Kiedy podasz imię, powód i numer, przełożona wie, co się dzieje, i może od razu do ciebie oddzwonić.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist': "Dentysta: przegląd i pytanie o cenę", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.b': "Zapisz się do dentysty (tandarts) blisko domu i regularnie chodź na przegląd (controle), często raz w roku. Boli cię ząb? Zadzwoń do swojego dentysty i powiedz, że bardzo boli: wtedy często szybko dostajesz wizytę. W nocy albo w weekend dzwoń do swojego dentysty: z nagranej wiadomości dowiesz się, który dentysta pomaga teraz. Dorosłym podstawowe ubezpieczenie zdrowotne płaci za bardzo mało u dentysty: zwykle nie za przegląd ani za plombę. Możesz wybrać ubezpieczenie dodatkowe (aanvullende verzekering) na dentystę: sprawdź, za co płaci. Dzieciom poniżej 18 lat podstawowe ubezpieczenie płaci za większość leczenia zębów. Zapytaj, ile kosztuje leczenie, zanim się zacznie. Przy dużym leczeniu dentysta musi najpierw dać ci cenę na piśmie. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.p': "Bardzo mnie boli. Czy mogę przyjść jeszcze dzisiaj?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.s': "Jest sobota wieczorem. Bardzo boli cię ząb, a lek przeciwbólowy nie pomaga. Co robisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o1': "Zadzwoń do swojego dentysty: wiadomość mówi, kto pomaga teraz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o2': "Zadzwoń pod 112: to nagły wypadek.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o3': "Czekaj do poniedziałku i bierz więcej leków przeciwbólowych.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.w': "Poza godzinami pracy przy silnym bólu pomaga dyżurny dentysta. 112 jest tylko na nagłe wypadki, na przykład przy zagrożeniu życia.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
