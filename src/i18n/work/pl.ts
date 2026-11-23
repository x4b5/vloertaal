import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Ubieganie się o pracę', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.interview.a': { m: 'Przez pięć lat pracowałem w magazynie.', f: 'Przez pięć lat pracowałam w magazynie.', x: 'Mam pięć lat doświadczenia w magazynie.' }, // x: nieuw, nalezen
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
    's.clock.2': { m: 'Zapomniałem karty.', f: 'Zapomniałam karty.', x: 'Zapomniałem / zapomniałam karty.' }, // x: nieuw, nalezen
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
    'c.hygiene.a': { m: 'Tak, i zdjąłem pierścionek.', f: 'Tak, i zdjęłam pierścionek.', x: 'Tak, i pierścionek już zdjęty.' }, // x: nieuw, nalezen
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
    'c.smalltalk.q': { m: 'Co robiłeś w weekend?', f: 'Co robiłaś w weekend?', x: 'Jak ci minął weekend?' }, // x: nieuw, nalezen
    'c.smalltalk.a': { m: 'Grałem w piłkę z przyjaciółmi.', f: 'Grałam w piłkę z przyjaciółmi.', x: 'Na grze w piłkę z przyjaciółmi.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.mistakes': 'Uwagi i błędy',
    'w.fout': 'błąd',
    'w.compliment': 'komplement, pochwała',
    'w.feedback': "feedback, informacja zwrotna (to, co ktoś mówi o twojej pracy)", // nieuw, nalezen
    'w.uitleggen': 'wyjaśniać',
    'w.leren': 'uczyć się',
    'w.verbeteren': 'poprawiać, ulepszać',
    's.mistakes.1': { m: 'Przepraszam, popełniłem błąd.', f: 'Przepraszam, popełniłam błąd.', x: 'Przepraszam, to mój błąd.' }, // x: nieuw, nalezen
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
    'c.respect.q': { m: 'Co się stało? Wyglądasz na smutnego.', f: 'Co się stało? Wyglądasz na smutną.', x: 'Co się stało? Coś cię smuci?' }, // x: nieuw, nalezen
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
    'c.letters.q': { m: 'Złożyłeś już zeznanie podatkowe?', f: 'Złożyłaś już zeznanie podatkowe?', x: 'Zeznanie podatkowe już złożone?' }, // x: nieuw, nalezen
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
    'c.client.a': 'Oczywiście, pomogę panu/pani.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.cleaning.q': { m: 'Skończyłeś już toalety?', f: 'Skończyłaś już toalety?', x: 'Toalety już gotowe?' }, // x: nieuw, nalezen
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
    'c.clock.p': { m: 'Zapomniałem odbić kartę na wyjściu. Możesz to poprawić?', f: 'Zapomniałam odbić kartę na wyjściu. Możesz to poprawić?', x: 'Zapomniałem / zapomniałam odbić kartę na wyjściu. Możesz to poprawić?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
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
    'c.scams.p': { m: 'Sam oddzwonię do banku.', f: 'Sama oddzwonię do banku.', x: 'Sam / sama oddzwonię do banku.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
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
    'c.gossip.q': { m: 'Słyszałeś, co zrobił Mark?', f: 'Słyszałaś, co zrobił Mark?', x: 'Wiesz, co zrobił Mark?' }, // x: nieuw, nalezen
    'c.gossip.a': "Nie, i wolę o nim nie rozmawiać.",
    'l.boundaries': "Przekraczanie granic",
    'w.aanraken': "dotykać",
    'w.ongewenst': "niechciany",
    'w.opmerking': "uwaga, komentarz",
    'w.intimidatie': "molestowanie, zastraszanie",
    'w.getuige': "świadek",
    'w.grapje': "żart",
    's.boundaries.1': "Nie dotykaj mnie.", // nieuw, nalezen ("Blijf van me af.", 4 nov 2026)
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
    'l.counting': 'Liczby', // nieuw, nalezen
    'w.dertien': 'trzynaście (13)', // nieuw, nalezen
    'w.dertig': 'trzydzieści (30)', // nieuw, nalezen
    'w.zeventien': 'siedemnaście (17)', // nieuw, nalezen
    'w.zeventig': 'siedemdziesiąt (70)', // nieuw, nalezen
    'w.zevenenveertig': 'czterdzieści siedem (47)', // nieuw, nalezen
    'w.vierenzeventig': 'siedemdziesiąt cztery (74)', // nieuw, nalezen
    's.counting.1': 'Mam trzynaście kartonów, nie trzydzieści.', // nieuw, nalezen
    's.counting.2': 'Lokalizacja siedemdziesiąt cztery jest pusta.', // nieuw, nalezen
    's.counting.3': 'Czy może pan/pani powiedzieć to cyfra po cyfrze?', // nieuw, nalezen
    'c.counting.q': 'Ile kartonów jeszcze zostało?', // nieuw, nalezen
    'c.counting.a': 'Siedemdziesiąt. Siedem, zero.', // nieuw, nalezen
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
    's.measures.3': { m: 'Policzyłem czterdzieści kartonów.', f: 'Policzyłam czterdzieści kartonów.', x: 'Policzyłem / policzyłam czterdzieści kartonów.' }, // x: nieuw, nalezen
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
    'c.aihelp.q': { m: 'Sam to napisałeś?', f: 'Sama to napisałaś?', x: 'To twój własny tekst?' }, // x: nieuw, nalezen
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
    's.aifake.2': { m: 'Rozłączam się i sam oddzwaniam.', f: 'Rozłączam się i sama oddzwaniam.', x: 'Rozłączam się i to ja oddzwaniam.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.aifake.p': { m: 'Rozłączam się i sam oddzwaniam.', f: 'Rozłączam się i sama oddzwaniam.', x: 'Rozłączam się i sam / sama oddzwaniam.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
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
    'c.harvest.q': { m: "Ile rzędów już zrobiłeś?", f: "Ile rzędów już zrobiłaś?", x: 'Ile rzędów już masz?' }, // nagelezen (2e lezing) // x: nieuw, nalezen
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
    's.dates.3': { m: "W zeszłym tygodniu pracowałem czterdzieści godzin.", f: "W zeszłym tygodniu pracowałam czterdzieści godzin.", x: 'W zeszłym tygodniu pracowałem / pracowałam czterdzieści godzin.' }, // x: nieuw, nalezen
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
    's.body.3': { m: "Upadłem na rękę.", f: "Upadłam na rękę.", x: 'Upadłem / upadłam na rękę.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
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
    'c.body.p': { m: "Upadłem. Boli mnie ręka.", f: "Upadłam. Boli mnie ręka.", x: 'Upadłem / upadłam. Boli mnie ręka.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.body.s': { m: "W pracy podniosłeś ciężkie pudło. Teraz bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?", f: "W pracy podniosłaś ciężkie pudło. Teraz bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?", x: 'Po podniesieniu ciężkiego pudła w pracy bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
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
    'u.finish': "Kończenie pracy", // nieuw, nalezen
    'l.workorder': "Zlecenie pracy", // nieuw, nalezen
    'w.werkbon': "zlecenie pracy (kartka albo aplikacja z twoim zadaniem)", // nieuw, nalezen
    'w.lezen': "czytać", // nieuw, nalezen
    'w.aantal': "liczba (ile)", // nieuw, nalezen
    'w.materiaal': "materiały (to, czego potrzebujesz do pracy)", // nieuw, nalezen
    'w.klaarleggen': "przygotować (położyć to, czego potrzebujesz)", // nieuw, nalezen
    'w.handtekening': "podpis", // nieuw, nalezen
    's.workorder.1': "Najpierw czytam zlecenie pracy.", // nieuw, nalezen
    's.workorder.2': "Czy ta liczba się zgadza?", // nieuw, nalezen
    's.workorder.3': "Przygotowuję materiały.", // nieuw, nalezen
    'c.workorder.q': "Wiesz, co masz zrobić?", // nieuw, nalezen
    'c.workorder.a': "Prawie. Co znaczy to słowo w zleceniu?", // nieuw, nalezen
    'l.handover': "Gotowe czy jeszcze nie?", // nieuw, nalezen
    'w.opruimen': "sprzątać, odkładać rzeczy na miejsce", // nieuw, nalezen
    'w.nakijken': "sprawdzić (jeszcze raz obejrzeć pracę)", // nieuw, nalezen
    'w.afmelden': "zgłosić koniec pracy (powiedzieć, że praca jest skończona, i wyjść)", // nieuw, nalezen
    'w.kapot': "zepsuty", // nieuw, nalezen
    'w.opslot': "zamknięty na klucz", // nieuw, nalezen
    'w.bijzonderheid': "drzwi", // nieuw, nalezen
    's.handover.1': "Sprzątam swoje miejsce.", // nieuw, nalezen
    's.handover.2': "Czy może pan/pani sprawdzić moją pracę?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.handover.3': "Zgłaszam przełożonemu koniec pracy.", // nieuw, nalezen
    'c.handover.q': "Wszystko gotowe?", // nieuw, nalezen
    'c.handover.a': "Prawie. Pokój numer cztery był zamknięty na klucz.", // nieuw, nalezen
    'u.tech': "W warsztacie", // nieuw, nalezen
    'l.workshop': "Narzędzia w warsztacie", // nieuw, nalezen
    'w.gereedschap': "narzędzia", // nieuw, nalezen
    'w.zagen': "piłować", // nieuw, nalezen
    'w.slijpen': "szlifować (wygładzać albo ciąć metal maszyną)", // nieuw, nalezen
    'w.vonk': "iskra", // nieuw, nalezen
    'w.gehoorbescherming': "ochronniki słuchu (na uszy)", // nieuw, nalezen
    'w.lawaai': "hałas (dużo głośnego dźwięku)", // nieuw, nalezen
    's.workshop.1': "Gdzie są narzędzia?", // nieuw, nalezen
    's.workshop.2': "Przy szlifowaniu noszę ochronniki słuchu.", // nieuw, nalezen
    's.workshop.3': "Uwaga na iskry!", // nieuw, nalezen
    'c.workshop.q': "Dlaczego nosisz okulary?", // nieuw, nalezen
    'c.workshop.a': "Przy piłowaniu kawałki mogą wpaść mi do oka.", // nieuw, nalezen
    'l.power': "Najpierw wyłącz prąd", // nieuw, nalezen
    'w.stroom': "prąd, elektryczność", // nieuw, nalezen
    'w.kabel': "kabel", // nieuw, nalezen
    'w.stekker': "wtyczka", // nieuw, nalezen
    'w.onderspanning': "pod napięciem (jest na tym prąd)", // nieuw, nalezen
    'w.spanningsloos': "bez napięcia, bezpieczny (nie ma na tym prądu)", // nieuw, nalezen
    'w.elektricien': "elektryk", // nieuw, nalezen
    's.power.1': "Czy tu jeszcze jest prąd?", // nieuw, nalezen
    's.power.2': "Ten kabel jest zepsuty.", // nieuw, nalezen
    's.power.3': "Czekam, aż nie będzie napięcia.", // nieuw, nalezen
    'c.power.q': "Możesz wymienić tę lampę?", // nieuw, nalezen
    'c.power.a': "Czy prąd jest wyłączony? Jeśli nie, poczekam na elektryka.", // nieuw, nalezen
    'u.garage': "W warsztacie samochodowym", // nieuw, nalezen
    'l.garage': "Opony, olej i podnośnik", // nieuw, nalezen
    'w.band': "opona", // nieuw, nalezen
    'w.olie': "olej", // nieuw, nalezen
    'w.accu': "akumulator (w samochodzie)", // nieuw, nalezen
    'w.monteur': "mechanik", // nieuw, nalezen
    'w.hefbrug': "podnośnik samochodowy (podnosi auto do góry)", // nieuw, nalezen
    'w.lek': "przebity, cieknący (ucieka powietrze albo woda)", // nieuw, nalezen
    's.garage.1': "Opona jest przebita.", // nieuw, nalezen
    's.garage.2': "Gdzie stoi nowy olej?", // nieuw, nalezen
    's.garage.3': "Samochód stoi na podnośniku.", // nieuw, nalezen
    'c.garage.q': "Możesz zmienić opony w tym samochodzie?", // nieuw, nalezen
    'c.garage.a': "Tak. Gdzie leżą opony zimowe?", // nieuw, nalezen
    'l.carjob': "Klient decyduje", // nieuw, nalezen
    'w.proefrit': "jazda próbna", // nieuw, nalezen
    'w.rijbewijs': "prawo jazdy", // nieuw, nalezen
    'w.akkoord': "zgoda, w porządku (mówisz na to „tak”)", // nieuw, nalezen
    'w.kosten': "koszty (to, co trzeba zapłacić)", // nieuw, nalezen
    'w.repareren': "naprawiać", // nieuw, nalezen
    'w.onderdeel': "część (samochodu albo maszyny)", // nieuw, nalezen
    's.carjob.1': "Czy klient zgadza się na koszty?", // nieuw, nalezen
    's.carjob.2': "Ta część jest zepsuta.", // nieuw, nalezen
    's.carjob.3': "Czy mogę zrobić jazdę próbną?", // nieuw, nalezen
    'c.carjob.q': "Hamulce też są w złym stanie. Zrobisz je od razu?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.carjob.a': "Najpierw zapytam szefa. Klient musi się zgodzić.", // nieuw, nalezen
    'u.stage': "Praktyka zawodowa", // nieuw, nalezen
    'l.placement': "Twoja praktyka", // nieuw, nalezen
    'w.stage': "praktyka zawodowa (uczysz się w firmie)", // nieuw, nalezen
    'w.praktijkopleider': "opiekun praktyki w firmie (prowadzi cię w firmie)", // nieuw, nalezen
    'w.stagebegeleider': "opiekun praktyki ze szkoły (prowadzi cię ze szkoły)", // nieuw, nalezen
    'w.pok': "umowa o praktykę (podpisujesz ją ty, szkoła i firma)", // nieuw, nalezen
    'w.school': "szkoła", // nieuw, nalezen
    'w.leerbedrijf': "firma szkoląca (firma, w której uczniowie mogą się uczyć)", // nieuw, nalezen
    's.placement.1': "Mam praktykę w magazynie.", // nieuw, nalezen
    's.placement.2': "Kto jest moim opiekunem praktyki w firmie?", // nieuw, nalezen
    's.placement.3': { m: "Jeszcze nie podpisałem umowy o praktykę.", f: "Jeszcze nie podpisałam umowy o praktykę.", x: "Moja umowa o praktykę nie jest jeszcze podpisana." }, // nieuw, nalezen
    'c.placement.q': "Kiedy zaczynasz praktykę?", // nieuw, nalezen
    'c.placement.a': "W poniedziałek. Najpierw podpisujemy umowę o praktykę.", // nieuw, nalezen
    'l.review': "Informacja zwrotna na praktyce", // nieuw, nalezen
    'w.beoordeling': "ocena (jak dobrze to robisz)", // nieuw, nalezen
    'w.leerdoel': "cel nauki (czego chcesz się nauczyć)", // nieuw, nalezen
    'w.voorbeeld': "przykład", // nieuw, nalezen
    'w.portfolio': "portfolio (teczka z twoją pracą i dowodami)", // nieuw, nalezen
    'w.cijfer': "ocena, stopień", // nieuw, nalezen
    'w.verslag': "sprawozdanie (tekst o twojej pracy)", // nieuw, nalezen
    's.review.1': "Co mogę robić lepiej?", // nieuw, nalezen
    's.review.2': "Czy może pan/pani podać przykład?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.review.3': "Moja ocena jest w przyszłym tygodniu.", // nieuw, nalezen
    'c.review.q': "Musisz pracować szybciej.", // nieuw, nalezen
    'c.review.a': "Dobrze. Czy może pan/pani pokazać, jak zrobić to szybciej?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'u.society': "Udział w życiu Holandii", // nieuw, nalezen
    'l.council': "Gmina i głosowanie", // nieuw, nalezen
    'w.stemmen': "głosować", // nieuw, nalezen
    'w.verkiezing': "wybory", // nieuw, nalezen
    'w.gemeenteraad': "rada gminy (decyduje o twojej miejscowości)", // nieuw, nalezen
    'w.parlement': "parlament (tworzy prawo)", // nieuw, nalezen
    'w.stempas': "karta uprawniająca do głosowania (potrzebna, żeby głosować)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.burgemeester': "burmistrz", // nieuw, nalezen
    's.council.1': "Czy mogę głosować?", // nieuw, nalezen
    's.council.2': "Moja karta uprawniająca do głosowania przyszła pocztą.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.council.3': "Rada gminy decyduje o mojej okolicy.", // nieuw, nalezen
    'c.council.q': "Idziesz w środę głosować?", // nieuw, nalezen
    'c.council.a': "Tak. Mam kartę uprawniającą do głosowania i dowód tożsamości.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.police': "Policja i twoje prawa", // nieuw, nalezen
    'w.agent': "policjant", // nieuw, nalezen
    'w.boete': "mandat, kara (pieniądze, które musisz zapłacić za karę)", // nieuw, nalezen
    'w.bezwaar': "sprzeciw (piszesz, że się nie zgadzasz)", // nieuw, nalezen
    'w.rechter': "sędzia", // nieuw, nalezen
    'w.advocaat': "adwokat", // nieuw, nalezen
    'w.wet': "prawo, ustawa", // nieuw, nalezen
    's.police.1': { m: "Dostałem mandat.", f: "Dostałam mandat.", x: "Mam mandat." }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.police.2': "Chcę złożyć sprzeciw.", // nieuw, nalezen
    's.police.3': "Chcę porozmawiać z adwokatem.", // nieuw, nalezen
    'c.police.q': "Czy mogę zobaczyć pana/pani dokument tożsamości?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.police.a': "Tak, proszę. Co się dzieje?", // nieuw, nalezen
    'u.online': "Online w pracy", // nieuw, nalezen
    'l.login': "Logowanie", // nieuw, nalezen
    'w.uitloggen': "wylogować się", // nieuw, nalezen
    'w.account': "konto", // nieuw, nalezen
    'w.scherm': "ekran", // nieuw, nalezen
    'w.vergrendelen': "zablokować (ekran albo telefon)", // nieuw, nalezen
    'w.gebruikersnaam': "nazwa użytkownika", // nieuw, nalezen
    'w.inlogcode': "kod logowania (kod z SMS-a albo z aplikacji)", // nieuw, nalezen
    's.login.1': "Nie pamiętam hasła.", // nieuw, nalezen
    's.login.2': "Zawsze się wylogowuję.", // nieuw, nalezen
    's.login.3': "Nikomu nie daję mojego DigiD.", // nieuw, nalezen
    'c.login.q': "Możesz się zalogować?", // nieuw, nalezen
    'c.login.a': "Nie, moje hasło nie działa.", // nieuw, nalezen
    'l.phish': "Fałszywe maile", // nieuw, nalezen
    'w.afzender': "nadawca", // nieuw, nalezen
    'w.klikken': "kliknąć", // nieuw, nalezen
    'w.bijlage': "załącznik", // nieuw, nalezen
    'w.verdacht': "podejrzany", // nieuw, nalezen
    'w.ictafdeling': "dział IT", // nieuw, nalezen
    'w.wijzigen': "zmienić", // nieuw, nalezen
    's.phish.1': "Ten mail jest podejrzany.", // nieuw, nalezen
    's.phish.2': "Nie otwieram załącznika.", // nieuw, nalezen
    's.phish.3': "Od razu zmieniam hasło.", // nieuw, nalezen
    'c.phish.q': { m: "Kliknąłeś w link?", f: "Kliknęłaś w link?", x: "Czy link został kliknięty?" }, // nieuw, nalezen // nagelezen AI 31 okt
    'c.phish.a': "Tak. Dzwonię do działu IT.", // nieuw, nalezen
    'l.mychoice': "Co mi dobrze wychodzi", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.goedin': "dobry w (czymś)", // nieuw, nalezen
    'w.kiezen': "wybierać", // nieuw, nalezen
    'w.beroep': "zawód, rodzaj pracy", // nieuw, nalezen
    'w.bijbaan': "praca dorywcza (dorywcza praca w czasie nauki)", // nieuw, nalezen // nagelezen AI ronde 3
    'w.nauwkeurig': "dokładny i staranny", // nieuw, nalezen
    'w.meeloopdag': "dzień obserwacji (dzień, w którym towarzyszysz komuś w pracy)", // nieuw, nalezen
    's.mychoice.1': "Umiem dobrze pracować rękami.", // nieuw, nalezen
    's.mychoice.2': "Lubię pracować z ludźmi.", // nieuw, nalezen
    's.mychoice.3': "Czy mogę przez jeden dzień wam towarzyszyć, żeby zobaczyć pracę?", // nieuw, nalezen // nagelezen AI 31 okt
    'c.mychoice.q': { m: "W czym jesteś dobry?", f: "W czym jesteś dobra?", x: "Co ci dobrze wychodzi?" }, // nieuw, nalezen
    'c.mychoice.a': "Umiem dobrze opiekować się ludźmi. W domu opiekuję się mamą.", // nieuw, nalezen
    'l.nextstep': "Po Entree", // nieuw, nalezen
    'w.niveau2': "poziom 2 (następny poziom mbo)", // nieuw, nalezen
    'w.startkwalificatie': "kwalifikacja podstawowa (dyplom mbo na poziomie 2 albo wyższym)", // nieuw, nalezen
    'w.bbl': "bbl (pracujesz w firmie i chodzisz do szkoły mniej więcej jeden dzień w tygodniu)", // nieuw, nalezen
    'w.doorstromen': "iść dalej (na wyższy poziom)", // nieuw, nalezen
    'w.aanmelden': "zapisać się (do szkoły albo na kurs)", // nieuw, nalezen
    'w.opendag': "dzień otwarty (możesz odwiedzić szkołę)", // nieuw, nalezen
    's.nextstep.1': "Po Entree chcę iść na poziom 2.", // nieuw, nalezen
    's.nextstep.2': "Chcę jednocześnie pracować i się uczyć.", // nieuw, nalezen
    's.nextstep.3': "Kiedy jest dzień otwarty?", // nieuw, nalezen
    'c.nextstep.q': "Co będziesz robić po Entree?", // nieuw, nalezen
    'c.nextstep.a': "Chcę iść do bbl. Wtedy pracuję i się uczę.", // nieuw, nalezen
    'l.email': "Pisanie do pracy", // nieuw, nalezen
    'w.mail': "mail, e-mail", // nieuw, nalezen
    'w.onderwerp': "temat (maila)", // nieuw, nalezen
    'w.beste': "szanowny, drogi (na początku listu albo maila)", // nieuw, nalezen
    'w.beleefd': "uprzejmy", // nieuw, nalezen
    'w.nalezen': "przeczytać jeszcze raz (sprawdzić przed wysłaniem)", // nieuw, nalezen
    'w.versturen': "wysłać", // nieuw, nalezen
    's.email.1': "Co wpisuję w temacie?", // nieuw, nalezen
    's.email.2': "Czytam mojego maila jeszcze raz.", // nieuw, nalezen
    's.email.3': "Wyślę maila jutro.", // nieuw, nalezen
    'c.email.q': { m: "Wysłałeś maila o wolnym dniu?", f: "Wysłałaś maila o wolnym dniu?", x: "Mail o wolnym dniu już poszedł?" }, // nieuw, nalezen
    'c.email.a': "Jeszcze nie. Najpierw go jeszcze raz czytam.", // nieuw, nalezen
    'l.budget': "Twoje pieniądze co miesiąc", // nieuw, nalezen
    'w.vastelasten': "stałe opłaty (czynsz, ubezpieczenie, telefon: co miesiąc)", // nieuw, nalezen
    'w.sparen': "oszczędzać (pieniądze)", // nieuw, nalezen
    'w.abonnement': "abonament (płacisz za niego co miesiąc)", // nieuw, nalezen
    'w.achterafbetalen': "zapłacić później (kup teraz, zapłać później)", // nieuw, nalezen
    'w.bedenktijd': "czas do namysłu (czas, żeby zmienić zdanie)", // nieuw, nalezen
    'w.garantie': "gwarancja (musi działać, inaczej to naprawią)", // nieuw, nalezen
    's.budget.1': "Najpierw płacę stałe opłaty.", // nieuw, nalezen
    's.budget.2': "Co miesiąc trochę oszczędzam.", // nieuw, nalezen
    's.budget.3': "Rezygnuję z tego abonamentu.", // nieuw, nalezen
    'c.budget.q': "Kup ten telefon teraz i zapłać później!", // nieuw, nalezen
    'c.budget.a': "Nie, dziękuję. Płacenie później to też dług.", // nieuw, nalezen
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
    'c.carjob.b': { m: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłeś i jakich części użyłeś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", f: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłaś i jakich części użyłaś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", x: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłeś / zrobiłaś i jakich części użyłeś / użyłaś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Widzę jeszcze jeden problem. Kto dzwoni do klienta?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Wymieniasz olej w samochodzie. Hamulce też są w złym stanie. Ma być gotowy za godzinę. Co robisz?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Mówisz przełożonemu, żeby zadzwonił do klienta.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o2': "Naprawiasz też hamulce, dla bezpieczeństwa.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "Nic nie mówisz: nie ma ich w zleceniu.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "Klient płaci, więc klient decyduje. Bez jego zgody warsztat nie może tak po prostu robić dodatkowej pracy. Hamulce w złym stanie są niebezpieczne, więc trzeba o nich powiedzieć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Najpierw podpisz, potem zacznij", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': "W Entree dużo uczysz się w firmie: to twoja praktyka (stage albo bpv). Zanim zaczniesz, ty, szkoła i firma podpisujecie umowę: POK. W firmie pomaga ci opiekun praktyki (praktijkopleider). W szkole pomaga ci opiekun praktyki ze szkoły (stagebegeleider). Chorujesz? Zadzwoń do firmy przed godziną rozpoczęcia i powiedz też szkole. Zasady są różne w każdej szkole: zapytaj opiekuna praktyki ze szkoły.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Zaczynam dopiero, kiedy umowa o praktykę jest podpisana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': { m: "Firma prosi, żebyś zaczął jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?", f: "Firma prosi, żebyś zaczęła jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?", x: "Firma prosi, żebyś zaczął / zaczęła jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Prosisz opiekuna ze szkoły, żeby najpierw załatwił POK.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Zaczynasz jutro, a POK podpisujesz, kiedy będziesz mieć czas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Zaczynasz, ale na razie nic nie mówisz szkole.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "W POK jest napisane, czego się uczysz i kto ci pomaga. Bez podpisanej POK twoja praktyka może się nie liczyć do dyplomu. Dlatego podpisujesz ją, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Proś o informację zwrotną i o przykład", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': { m: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Sam też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole.", f: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Sama też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole.", x: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Sam / sama też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole." }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.review.p': "Co poszło dobrze, a co może być lepiej?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "Opiekun praktyki mówi: „Musisz pracować staranniej”. Nie wiesz, o co mu chodzi. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Prosisz o przykład, co masz robić inaczej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': { m: "Mówisz „tak” i masz nadzieję, że sam zrozumiesz.", f: "Mówisz „tak” i masz nadzieję, że sama zrozumiesz.", x: "Mówisz „tak” i masz nadzieję, że sam / sama zrozumiesz." }, // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.login.o1': { m: "Odmawiasz i logujesz się sam, a on pomaga.", f: "Odmawiasz i logujesz się sama, a on pomaga.", x: "Odmawiasz i logujesz się sam / sama, a on pomaga." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "Dajesz je ten jeden raz, bo to twój szef.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Piszesz je na kartce, żeby mógł ich użyć później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': { m: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sam i pozwolić komuś pomóc.", f: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sama i pozwolić komuś pomóc.", x: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sam / sama i pozwolić komuś pomóc." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "Pośpiech i przycisk? Nie klikaj", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': { m: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działał szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Sam wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknąłeś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działała szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Sama wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknęłaś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działał / działała szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Sam / sama wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknąłeś / kliknęłaś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.phish.p': { m: "Kliknąłem w podejrzany link.", f: "Kliknęłam w podejrzany link.", x: "Kliknąłem / kliknęłam w podejrzany link." }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.phish.s': { m: "Kliknąłeś w link w mailu i wpisałeś hasło. Potem widzisz, że mail był fałszywy. Co robisz?", f: "Kliknęłaś w link w mailu i wpisałaś hasło. Potem widzisz, że mail był fałszywy. Co robisz?", x: "Kliknąłeś / kliknęłaś w link w mailu i wpisałeś / wpisałaś hasło. Potem widzisz, że mail był fałszywy. Co robisz?" }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.phish.o1': "Zmieniasz hasło i dzwonisz do działu IT.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Usuwasz maila, żeby nikt inny w niego nie kliknął.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Czekasz dzień, żeby zobaczyć, czy coś pójdzie źle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Z twoim hasłem ktoś inny może wejść do systemów twojej pracy. Kiedy szybko je zmienisz i powiesz działowi IT, mogą to w porę zatrzymać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Twoje mocne strony się liczą", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': { m: "W czym jesteś dobry? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać.", f: "W czym jesteś dobra? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać.", x: "W czym jesteś dobry / dobra? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "Umiem dobrze dogadywać się z ludźmi. W domu dużo pomagam.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': { m: "W szkole pytają: „W czym jesteś dobry?”. Nigdy nie miałeś płatnej pracy. Co mówisz?", f: "W szkole pytają: „W czym jesteś dobra?”. Nigdy nie miałaś płatnej pracy. Co mówisz?", x: "W szkole pytają: „W czym jesteś dobry / dobra?”. Nigdy nie miałeś / miałaś płatnej pracy. Co mówisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "Co dobrze robisz w domu, na przykład opiekę nad innymi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': { m: "Że jeszcze nie wiesz, bo nigdy nie miałeś pracy.", f: "Że jeszcze nie wiesz, bo nigdy nie miałaś pracy.", x: "Że jeszcze nie wiesz, bo nigdy nie miałeś / miałaś pracy." }, // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.budget.b': { m: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Kupiłeś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji.", f: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Kupiłaś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji.", x: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Kupiłeś / kupiłaś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji." }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.budget.p': "Wolę zapłacić teraz. Wtedy nie mam długu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Dziś dostajesz wypłatę. Chcesz nowe buty, a czynsz nie jest jeszcze zapłacony. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Najpierw płacisz czynsz, potem patrzysz, co zostało.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Kupujesz buty, a czynsz płacisz później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Kupujesz buty z opcją „kup teraz, zapłać później”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "Czynsz, ubezpieczenie i telefon wracają co miesiąc. Kiedy płacisz je najpierw, wiesz, ile pieniędzy zostało. Wtedy nie masz długów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Sen, jedzenie i żadnych narkotyków", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': { m: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiony albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy.", f: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiona albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy.", x: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiony / przygnębiona albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.p': { m: "Od dawna czuję się przygnębiony. Czy mogę się umówić na wizytę?", f: "Od dawna czuję się przygnębiona. Czy mogę się umówić na wizytę?", x: "Od dawna czuję się przygnębiony / przygnębiona. Czy mogę się umówić na wizytę?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': { m: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnął. Co robisz?", f: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnęła. Co robisz?", x: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnął / zasnęła. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
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
    'l.food': "Praca z żywnością", // nieuw, nalezen
    'w.mes': "nóż", // nieuw, nalezen
    'w.snijhandschoen': "rękawica antyprzecięciowa (chroni przed przecięciem)", // nieuw, nalezen
    'w.vriescel': "mroźnia (bardzo zimne pomieszczenie)", // nieuw, nalezen
    'w.sieraden': "biżuteria (pierścionek, zegarek, kolczyki)", // nieuw, nalezen
    'w.pleister': "plaster (na małe skaleczenie)", // nieuw, nalezen
    'w.vlees': "mięso", // nieuw, nalezen
    's.food.1': "Zdejmuję biżuterię.", // nieuw, nalezen
    's.food.2': "Gdzie są rękawice antyprzecięciowe?", // nieuw, nalezen
    's.food.3': "W mroźni noszę ciepłą kurtkę.", // nieuw, nalezen
    'c.food.q': "Dlaczego teraz czyścimy linię?", // nieuw, nalezen
    'c.food.a': "Następny będzie produkt bez orzechów.", // nieuw, nalezen
    'c.food': "Czyste ręce, bezpieczna żywność", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Przy pracy z żywnością obowiązują surowe zasady higieny: siateczka na włosy, czyste ubranie robocze, umyte ręce i żadnej biżuterii. Te zasady są takie same dla wszystkich. Nie mówią nic o tobie: chronią żywność dla ludzi, którzy ją jedzą. Przy pracy z nożem zawsze noś rękawicę antyprzecięciową. W chłodni albo w mroźni noś ciepłe ubranie, które dostajesz, i rozgrzewaj się w przerwie. Chorujesz albo masz ranę na ręce? Zgłoś to, zanim zaczniesz pracę. Wtedy możesz dostać specjalny plaster albo na jakiś czas inną pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Mam małe skaleczenie na ręce. Czy mogę dostać plaster?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': { m: "W domu lekko zaciąłeś się w palec. Dziś pracujesz z mięsem. Co robisz?", f: "W domu lekko zacięłaś się w palec. Dziś pracujesz z mięsem. Co robisz?", x: "Masz na palcu małe skaleczenie z domu. Dziś pracujesz z mięsem. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Mówisz przełożonemu i prosisz o plaster.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Nic nie mówisz: to tylko małe skaleczenie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Zakładasz na to rękawicę, żeby nikt nie zobaczył.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Mała rana może wnieść zarazki do żywności. Kiedy to zgłaszasz, możesz dostać specjalny plaster albo na jakiś czas inną pracę. Zgłoszenie to normalna rzecz: nikt nie będzie cię za to winić.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transport i dostawy", // nieuw, nalezen
    'l.parcel': "Doręczanie paczek", // nieuw, nalezen
    'w.pakket': "paczka", // nieuw, nalezen
    'w.bestelbus': "samochód dostawczy (bus)", // nieuw, nalezen
    'w.bezorgen': "doręczać (zanieść do klienta)", // nieuw, nalezen
    'w.inladen': "załadować (włożyć rzeczy do busa)", // nieuw, nalezen
    'w.aanbellen': "zadzwonić do drzwi", // nieuw, nalezen
    'w.bewijs': "dowód (coś, co pokazuje, co się stało)", // nieuw, nalezen
    's.parcel.1': "Skanuję każdą paczkę.", // nieuw, nalezen
    's.parcel.2': "Klienta nie ma w domu.", // nieuw, nalezen
    's.parcel.3': "Czy może pan/pani przyjąć paczkę dla sąsiadów?", // nieuw, nalezen
    'c.parcel.q': "Czy ta paczka jest dla mnie?", // nieuw, nalezen
    'c.parcel.a': "Tak. Proszę tu podpisać.", // nieuw, nalezen
    'l.road': "Bezpiecznie i uczciwie na drodze", // nieuw, nalezen
    'w.rijden': "jeździć, prowadzić (samochód)", // nieuw, nalezen
    'w.zwaar': "ciężki", // nieuw, nalezen
    'w.steekwagen': "wózek ręczny (dwukołowy wózek na ciężkie paczki)", // nieuw, nalezen
    'w.route': "trasa (droga, którą jedziesz)", // nieuw, nalezen
    'w.loondienst': "na etacie (pracujesz dla szefa i dostajesz pensję)", // nieuw, nalezen
    'w.bepalen': "decydować (mówić, jak trzeba to zrobić)", // nieuw, nalezen
    's.road.1': "Ta paczka jest za ciężka. Biorę wózek.", // nieuw, nalezen
    's.road.2': "Jest ślisko. Jadę powoli.", // nieuw, nalezen
    's.road.3': "Kto decyduje o mojej trasie i moich godzinach?", // nieuw, nalezen
    'c.road.q': "Możesz dziś zrobić jeszcze jeden kurs?", // nieuw, nalezen
    'c.road.a': "Nie, wtedy nie będę mieć czasu na przerwę.", // nieuw, nalezen
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
    'l.measure': "Mierzenie", // nieuw, nalezen
    'w.rolmaat': "miarka zwijana", // nieuw, nalezen
    'w.waterpas': "poziomica (pokazuje, czy coś jest równo)", // nieuw, nalezen
    'w.meten': "mierzyć", // nieuw, nalezen
    'w.rechtlijn': "prosty (nie krzywy)", // nieuw, nalezen
    'w.plank': "deska", // nieuw, nalezen
    'w.schroef': "wkręt", // nieuw, nalezen
    's.measure.1': "Jak długa jest ta deska?", // nieuw, nalezen
    's.measure.2': "Ściana nie jest prosta.", // nieuw, nalezen
    's.measure.3': "Mierzę to dwa razy.", // nieuw, nalezen
    'c.measure.q': "Jak szerokie to ma być?", // nieuw, nalezen
    'c.measure.a': "Dziewięćdziesiąt centymetrów. Zapisuję to.", // nieuw, nalezen
    'c.measure': "Dwa razy mierz, raz tnij", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Na budowie wymiary są często w milimetrach. Dlatego „dziewięćset” może znaczyć 90 centymetrów. Nie masz pewności? Zapytaj: „To milimetry czy centymetry?” Powtórz liczbę na głos i ją zapisz. Zmierz dwa razy, zanim zaczniesz ciąć albo wiercić: za krótka deska zostaje za krótka. Zdarzył ci się błąd? Powiedz to od razu. Wtedy zespół może to jeszcze naprawić i kosztuje to mniej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "To jest w milimetrach czy w centymetrach?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': { m: "Kolega podaje wymiar. Nie usłyszałeś go dobrze. Co robisz?", f: "Kolega podaje wymiar. Nie usłyszałaś go dobrze. Co robisz?", x: "Kolega podaje wymiar. Nie było go dobrze słychać. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Powtarzasz liczbę i pytasz, czy się zgadza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Tniesz deskę według tego, co ci się wydaje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Czekasz, aż sam przyjdzie zobaczyć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Zły wymiar kosztuje materiał i czas. Powtórzenie liczby trwa dwie sekundy i na budowie robi to każdy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Porządek na budowie", // nieuw, nalezen
    'w.bouwplaats': "budowa, plac budowy", // nieuw, nalezen
    'w.uitvoerder': "kierownik budowy (szef na budowie)", // nieuw, nalezen
    'w.keet': "barak na budowie (na przerwy i zebrania)", // nieuw, nalezen
    'w.afval': "odpady, śmieci", // nieuw, nalezen
    'w.container': "kontener (bardzo duży pojemnik na odpady)", // nieuw, nalezen
    'w.struikelen': "potknąć się (zahaczyć o coś nogą i upaść)", // nieuw, nalezen
    's.siteday.1': "Odpady idą do kontenera.", // nieuw, nalezen
    's.siteday.2': "Kierownik budowy jest w baraku.", // nieuw, nalezen
    's.siteday.3': "Uwaga, tu można się potknąć.", // nieuw, nalezen
    'c.siteday.q': "Gdzie ma trafić to drewno?", // nieuw, nalezen
    'c.siteday.a': "Do kontenera przy wejściu.", // nieuw, nalezen
    'c.siteday': "Porządek na budowie to bezpieczna budowa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Na budowie sprzątanie jest częścią pracy, dla każdego. Przez luźne deski, kable i odpady ludzie potykają się i upadają. Dlatego sprzątaj swoje miejsce w ciągu dnia, nie tylko na koniec. Odpady się sortuje: drewno, gruz i metal często idą do różnych kontenerów. Nie wiesz, do którego? Zapytaj. Widzisz wystający gwóźdź albo dziurę bez przykrycia? Napraw to, jeśli możesz to zrobić bezpiecznie, albo powiedz kierownikowi budowy (de uitvoerder). Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Posprzątam to. Wtedy nikt się nie potknie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Na przejściu leżą deski z gwoździami. Nie są twoje. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Odsuwasz je na bok albo mówisz kierownikowi budowy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Przechodzisz nad nimi: to nie twoje deski.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Czekasz: ktoś inny je sprzątnie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Wszyscy chodzą tymi samymi przejściami. Kto widzi zagrożenie, coś z nim robi: na budowie to normalne.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Przekazanie zmiany", // nieuw, nalezen
    'w.vroegedienst': "zmiana poranna", // nieuw, nalezen
    'w.latedienst': "zmiana popołudniowa", // nieuw, nalezen
    'w.nachtdienst': "zmiana nocna", // nieuw, nalezen
    'w.overdracht': "przekazanie zmiany (mówisz następnej zmianie, co się działo)", // nieuw, nalezen
    'w.aflossen': "zmienić kogoś (przychodzi następna osoba, a ty możesz iść)", // nieuw, nalezen
    'w.teamleider': "kierownik zespołu", // nieuw, nalezen
    's.shifts.1': "W tym tygodniu mam zmianę popołudniową.", // nieuw, nalezen
    's.shifts.2': "Kto mnie zmienia?", // nieuw, nalezen
    's.shifts.3': "Maszyna numer dwa miała awarię.", // nieuw, nalezen
    'c.shifts.q': "Czy na twojej zmianie coś się stało?", // nieuw, nalezen
    'c.shifts.a': "Tak. Linia stała przez pół godziny.", // nieuw, nalezen
    'c.shifts': "Powiedz następnej zmianie", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Fabryka często pracuje dzień i noc, na zmiany. Na koniec twojej zmiany kolega przejmuje twoje miejsce. Nie wychodź tak po prostu: poczekaj, aż kolega przyjdzie. Powiedz w kilku słowach, co się działo: awaria, zły produkt, coś, co nie jest skończone. Wiele firm ma do tego także listę albo ekran. Problem, którego nie przekażesz, wraca na następnej zmianie i wtedy nikt nie wie dlaczego. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "Maszyna miała awarię. Teraz znowu działa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Twoja zmiana się skończyła. Kolega spóźnia się pięć minut. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Czekasz i mówisz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Idziesz do domu: twoja zmiana się skończyła.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Zatrzymujesz maszynę i wychodzisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Pracująca maszyna nie może zostać sama. Kiedy czekasz i to zgłaszasz, praca idzie dalej bezpiecznie, a kierownik zespołu może to rozwiązać.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Powiedz, co widzisz", // nieuw, nalezen
    'w.duizelig': "kręci się w głowie (zawroty głowy)", // nieuw, nalezen
    'w.misselijk': "niedobrze (czujesz, że zaraz zwymiotujesz)", // nieuw, nalezen
    'w.benauwd': "duszno, brak tchu", // nieuw, nalezen
    'w.koorts': "gorączka", // nieuw, nalezen
    'w.verward': "zdezorientowany (osoba nie wie, gdzie jest)", // nieuw, nalezen
    'w.anders': "inaczej (nie tak jak zwykle)", // nieuw, nalezen
    's.signals.1': "Pani ma zawroty głowy.", // nieuw, nalezen
    's.signals.2': "Pan dzisiaj nie je.", // nieuw, nalezen
    's.signals.3': "Możesz przyjść i zobaczyć?", // nieuw, nalezen
    'c.signals.q': "Jak się czuje pan Jansen?", // nieuw, nalezen
    'c.signals.a': "Jest zdezorientowany. To inaczej niż wczoraj.", // nieuw, nalezen
    'c.signals': "Widzisz podopiecznego codziennie", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Często to właśnie ty spędzasz z podopiecznym najwięcej czasu. Dlatego to ty najwcześniej zauważasz, że coś jest inaczej: mniej je, bardziej go boli, jest zdezorientowany, ma duszności. Nie musisz wiedzieć, co to jest. Powiedz, co widzisz, i powiedz, kiedy to było. Powiedz o tym pielęgniarce tego samego dnia i zapisz to, jeśli to twoje zadanie. Wygląda to poważnie? Nie czekaj: od razu zawołaj pielęgniarkę. Lepiej o jeden raz za dużo niż o jeden raz za mało.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "Pani nie je i ma zawroty głowy. Zwykle tak nie jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Podopieczna jest dziś cicha i nie chce jeść. Zwykle dużo mówi. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Jeszcze dziś mówisz pielęgniarce, co widzisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Czekasz kilka dni: może to minie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Dajesz jej tabletkę z szafki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Mała zmiana może być pierwszym znakiem choroby. To nie ty decydujesz, co to jest: robi to pielęgniarka. Ale ona może coś zrobić tylko wtedy, gdy jej o tym powiesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Pomoc przy wstawaniu", // nieuw, nalezen
    'w.tillift': "podnośnik (maszyna, która podnosi człowieka)", // nieuw, nalezen
    'w.rollator': "balkonik na kółkach, rollator", // nieuw, nalezen
    'w.bed': "łóżko", // nieuw, nalezen
    'w.opstaan': "wstawać, wstać", // nieuw, nalezen
    'w.gaanzitten': "usiąść", // nieuw, nalezen
    'w.voorzichtig': "ostrożnie, delikatnie", // nieuw, nalezen
    's.transfer.1': "Pomogę panu/pani wstać.", // nieuw, nalezen
    's.transfer.2': "Chce pan/pani na chwilę usiąść?", // nieuw, nalezen
    's.transfer.3': "Najpierw przyniosę podnośnik.", // nieuw, nalezen
    'c.transfer.q': "Możesz podnieść panią z łóżka?", // nieuw, nalezen
    'c.transfer.a': "Nie w pojedynkę. Przyniosę podnośnik.", // nieuw, nalezen
    'c.transfer': "Najpierw powiedz, potem pomóż", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Zanim dotkniesz podopiecznego, powiedz, co zamierzasz zrobić: „Ik help u nu met opstaan.” Wtedy podopieczny się nie przestraszy i może pomagać. Pozwól podopiecznemu robić to, co jeszcze potrafi: dzięki temu zachowuje siły. Nie podnoś człowieka w pojedynkę. Używaj sprzętu, który jest na miejscu, na przykład podnośnika, i pracuj tak, jak ci pokazano. Nikt ci jeszcze nie pokazał? Najpierw zapytaj. Twoje plecy muszą wytrzymać całe życie zawodowe. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Teraz pomogę panu/pani wstać. Możemy zaczynać?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Podopieczna chce wstać z łóżka. Nie umiesz jeszcze obsługiwać podnośnika. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Prosisz kolegę, który zna podnośnik.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "Podnosisz ją w pojedynkę: nie jest ciężka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Próbujesz użyć podnośnika: to nie może być trudne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Złe podnoszenie człowieka może zrobić krzywdę podopiecznemu i twoim plecom. Poproszenie kolegi zajmuje kilka minut. Upadek może kosztować miesiące.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Zmywanie", // nieuw, nalezen
    'w.afwas': "zmywanie, brudne naczynia", // nieuw, nalezen
    'w.vaatwasser': "zmywarka", // nieuw, nalezen
    'w.bord': "talerz", // nieuw, nalezen
    'w.glas': "szklanka, szkło", // nieuw, nalezen
    'w.bestek': "sztućce (nóż, widelec i łyżka)", // nieuw, nalezen
    'w.afdrogen': "wycierać do sucha (ścierką)", // nieuw, nalezen
    's.dishes.1': "Zmywarka skończyła.", // nieuw, nalezen
    's.dishes.2': "Uwaga, stłukła się szklanka.", // nieuw, nalezen
    's.dishes.3': "Nie ma już czystych sztućców.", // nieuw, nalezen
    'c.dishes.q': "Są jeszcze czyste szklanki?", // nieuw, nalezen
    'c.dishes.a': "Tak, zaraz je przyniosę.", // nieuw, nalezen
    'c.dishes': "Stłuczone szkło: powiedz od razu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "W kuchni szkło się tłucze. To normalne i nikt się o to nie gniewa. Ale powiedz to od razu, głośno i wyraźnie: „Glas!” Nie zbieraj kawałków gołymi rękami: użyj zmiotki. Szkło spadło blisko jedzenia albo do lodu? Wtedy to jedzenie albo ten lód trzeba wyrzucić, w całości. Mały kawałek szkła w posiłku jest bardzo niebezpieczny dla gościa. Szkło idzie do osobnego pojemnika, a nie do worka, który ktoś potem podnosi. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Uwaga, szkło! Zaraz to sprzątnę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Szklanka tłucze się nad lodem do napojów. Jest bardzo duży ruch. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Mówisz o tym i wyrzucasz cały lód.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Wyjmujesz kawałki, które widać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Nic nie mówisz: teraz jest za duży ruch.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Małych kawałków szkła w lodzie nie widać. Nowy lód kosztuje mało. Gość ze szkłem w napoju może się poważnie zranić.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Kiedy jest duży ruch", // nieuw, nalezen
    'w.heet': "gorący, gorąco", // nieuw, nalezen
    'w.chef': "szef kuchni (kieruje kuchnią)", // nieuw, nalezen
    'w.terras': "taras, ogródek (stoliki na zewnątrz)", // nieuw, nalezen
    'w.tafel': "stół, stolik", // nieuw, nalezen
    'w.dienblad': "taca", // nieuw, nalezen
    'w.wachten': "czekać", // nieuw, nalezen
    's.rush.1': "Gorące! Przechodzę za tobą.", // nieuw, nalezen
    's.rush.2': "Stolik numer sześć czeka na jedzenie.", // nieuw, nalezen
    's.rush.3': "Zanoszę to na taras.", // nieuw, nalezen
    'c.rush.q': "Możesz obsłużyć stolik numer cztery?", // nieuw, nalezen
    'c.rush.a': "Tak, szefie. Już idę.", // nieuw, nalezen
    'c.rush': "Krótkie słowa, kiedy jest duży ruch", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Kiedy jest duży ruch, ludzie w kuchni mówią krótkimi słowami: „Heet!”, „Achter!”, „Tafel zes!” To nie jest niegrzeczne. Tak jest szybko i bezpiecznie: każdy wie, gdzie są gorące garnki i noże. Ty też wołaj „Heet!” albo „Achter!”, kiedy przechodzisz za kimś. Słyszysz polecenie? Powtórz je: „Ja, chef.” Wtedy szef kuchni wie, że to do ciebie dotarło. Ktoś był dla ciebie szorstki w tym pośpiechu? Często mija to, kiedy ruch się kończy. Dalej jest nieprzyjemnie? Wtedy porozmawiaj o tym w spokojnej chwili.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "Z tyłu! Mam gorący garnek.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Jest bardzo duży ruch. Szef kuchni woła: „Tafel zes, nu!” Nie mówi proszę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Mówisz „Ja, chef” i to robisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Przerywasz pracę i mówisz, że jest niegrzeczny.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Robisz to, ale nic nie odpowiadasz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "W pośpiechu krótkie słowa są normalne i nie są przeciwko tobie. Powtórzenie pokazuje, że polecenie do ciebie dotarło. Dzięki temu kuchnia pracuje szybko i bezpiecznie.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Twoja runda", // nieuw, nalezen
    'w.kantoor': "biuro", // nieuw, nalezen
    'w.verdieping': "piętro (1. albo 2. piętro budynku)", // nieuw, nalezen
    'w.gang': "korytarz", // nieuw, nalezen
    'w.toiletpapier': "papier toaletowy", // nieuw, nalezen
    'w.zeep': "mydło", // nieuw, nalezen
    'w.bijvullen': "uzupełniać, dolewać", // nieuw, nalezen
    's.rounds.1': "Zaczynam na drugim piętrze.", // nieuw, nalezen
    's.rounds.2': "Papier toaletowy się skończył.", // nieuw, nalezen
    's.rounds.3': "Uzupełniam mydło.", // nieuw, nalezen
    'c.rounds.q': "Biuro numer trzy już zrobione?", // nieuw, nalezen
    'c.rounds.a': "Nie, ktoś tam jeszcze pracuje.", // nieuw, nalezen
    'c.rounds': "Sprzątanie tam, gdzie ludzie pracują", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Często sprzątasz, kiedy inni ludzie jeszcze pracują. Przywitaj się i zapytaj: „Mag ik hier even schoonmaken?” Większość ludzi się zgadza. Ktoś ma zebranie albo rozmawia przez telefon? Wtedy wróć później. Nie przesuwaj papierów na biurku i ich nie czytaj: sprzątaj dookoła nich. Na swoją rundę masz ustalony czas. Czasu jest za mało, żeby zrobić to dobrze? Nie pomijaj pomieszczeń po cichu. Powiedz przełożonemu, czego nie udało ci się zrobić i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Dzień dobry. Czy mogę tu chwilę posprzątać?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Twoja runda trwa dziś dłużej: jedno pomieszczenie było bardzo brudne. Dwa biura nie są zrobione. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Mówisz przełożonemu, które dwa i dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Idziesz do domu i liczysz, że nikt nie zauważy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Robisz je bardzo szybko, bez podłóg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Klient, który zastaje brudne biuro, składa skargę. Przełożony, który o tym wie, może to wyjaśnić albo dać ci więcej czasu. Powiedzieć o tym to nie porażka.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Kolory i ściereczki", // nieuw, nalezen
    'w.doek': "ściereczka, ścierka", // nieuw, nalezen
    'w.spons': "gąbka", // nieuw, nalezen
    'w.rood': "czerwony", // nieuw, nalezen
    'w.blauw': "niebieski", // nieuw, nalezen
    'w.geel': "żółty", // nieuw, nalezen
    'w.groen': "zielony", // nieuw, nalezen
    's.colours.1': "Czerwona ściereczka jest do toalety.", // nieuw, nalezen
    's.colours.2': "Weź czystą ściereczkę.", // nieuw, nalezen
    's.colours.3': "Jakiego koloru tu używam?", // nieuw, nalezen
    'c.colours.q': "Mogę użyć tej ściereczki do biurka?", // nieuw, nalezen
    'c.colours.a': "Nie, czerwona jest tylko do toalety.", // nieuw, nalezen
    'c.colours': "Każdy kolor ma swoje miejsce", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Wiele firm sprzątających pracuje z kolorami. Każdy kolor ściereczki, gąbki i wiadra jest do jednego miejsca. Często czerwony jest do toalety, a niebieski do biurek i stołów. Dzięki temu brud z toalety nie trafia na biurko ani do kuchni. Kolory mogą być inne w każdej firmie, więc zapytaj pierwszego dnia. Ściereczka jest brudna albo spadła na podłogę? Weź czystą. Zużyte ściereczki idą do worka na pranie, a nie z powrotem na wózek. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Który kolor jest tu do toalety?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Niebieskie ściereczki ci się skończyły. Musisz jeszcze wyczyścić trzy biurka. Masz tylko czerwone ściereczki. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Najpierw idziesz po nowe niebieskie ściereczki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Używasz czerwonej ściereczki: czyste to czyste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Używasz jednej niebieskiej ściereczki jeszcze raz do wszystkich trzech.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "System kolorów działa tylko wtedy, gdy wszyscy zawsze się go trzymają. Wtedy nikt nie musi się zastanawiać, gdzie ściereczka już była.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Pomoc klientowi", // nieuw, nalezen
    'w.aanbieding': "promocja (taniej przez krótki czas)", // nieuw, nalezen
    'w.korting': "zniżka, rabat (płacisz mniej)", // nieuw, nalezen
    'w.uitverkocht': "wyprzedane", // nieuw, nalezen
    'w.magazijn': "magazyn, zaplecze", // nieuw, nalezen
    'w.tas': "torba", // nieuw, nalezen
    'w.bestellen': "zamawiać", // nieuw, nalezen
    's.shophelp.1': "Przepraszam, to jest wyprzedane.", // nieuw, nalezen
    's.shophelp.2': "Czy chce pan/pani do tego torbę?", // nieuw, nalezen
    's.shophelp.3': "Ta kawa jest w promocji.", // nieuw, nalezen
    'c.shophelp.q': "Czy jest jeszcze mleko?", // nieuw, nalezen
    'c.shophelp.a': "Sprawdzę dla pana/pani w magazynie.", // nieuw, nalezen
    'c.shophelp': "„Nie wiem” to nie koniec", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Klient o coś pyta, a ty nie znasz odpowiedzi. Nic nie szkodzi: nikt nie wie wszystkiego. Ale nie mów tylko „nee” albo „weet ik niet” i nie odchodź. Powiedz: „Ik vraag het even voor u” i zawołaj kolegę. Produkt jest wyprzedany? Powiedz, kiedy znowu będzie, albo pokaż coś podobnego. Patrz na klienta i przywitaj się, także wtedy, gdy właśnie wykładasz towar na półki. Nie rozumiesz pytania? Poproś klienta, żeby powtórzył je powoli.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Tego nie wiem. Zapytam dla pana/pani.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Klientka pyta o produkt. Nie znasz tego słowa. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Mówisz: „Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Mówisz „nee” i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Pokazujesz gdzieś ręką, żeby sobie poszła.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Klientowi nie przeszkadza, że jesteś tu od niedawna albo dopiero uczysz się niderlandzkiego. Klientowi przeszkadza, kiedy nie dostaje pomocy. Zawołanie kolegi to dobra obsługa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Trudne chwile", // nieuw, nalezen
    'w.bedrijfsleider': "kierownik sklepu", // nieuw, nalezen
    'w.beveiliger': "ochroniarz", // nieuw, nalezen
    'w.dief': "złodziej", // nieuw, nalezen
    'w.stelen': "kraść", // nieuw, nalezen
    'w.schreeuwen': "krzyczeć", // nieuw, nalezen
    'w.geldterug': "zwrot pieniędzy", // nieuw, nalezen
    's.shoptrouble.1': "Zawołam kierownika sklepu.", // nieuw, nalezen
    's.shoptrouble.2': "Proszę nie krzyczeć.", // nieuw, nalezen
    's.shoptrouble.3': "Myślę, że ktoś coś kradnie.", // nieuw, nalezen
    'c.shoptrouble.q': "Chcę teraz dostać zwrot pieniędzy!", // nieuw, nalezen
    'c.shoptrouble.a': "Rozumiem. Zawołam kolegę.", // nieuw, nalezen
    'c.shoptrouble': "Zdenerwowany klient albo złodziej: ty jesteś na pierwszym miejscu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Czasem klient się denerwuje albo widzisz, że ktoś kradnie. Twoje bezpieczeństwo jest najważniejsze, zawsze. Przy zdenerwowanym kliencie: zachowaj spokój, nie krzycz na niego i zawołaj kierownika sklepu. Nie musisz tego rozwiązywać w pojedynkę. Widzisz złodzieja? Nie biegnij za nim, nie zatrzymuj go siłą i nie zasłaniaj drzwi. Dobrze zapamiętaj, co widzisz, i od razu powiedz kierownikowi albo ochroniarzowi. Rzeczy można zastąpić. Ciebie nie. Czujesz potem strach? Porozmawiaj o tym z przełożonym. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Widzę, że ktoś wkłada coś do swojej torby.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Mężczyzna wkłada butelkę pod kurtkę i idzie do wyjścia. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Mówisz kierownikowi albo ochroniarzowi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Biegniesz za nim i łapiesz go za rękę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Stajesz przed drzwiami.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Zatrzymany złodziej może stać się agresywny. Kierownik i ochroniarz wiedzą, co robić. Żaden produkt nie jest wart tego, żeby stała ci się krzywda.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Dbanie o roślinę", // nieuw, nalezen
    'w.plantblad': "liść", // nieuw, nalezen
    'w.stengel': "łodyga", // nieuw, nalezen
    'w.bloem': "kwiat", // nieuw, nalezen
    'w.knippen': "ciąć (nożyczkami)", // nieuw, nalezen
    'w.tomaat': "pomidor", // nieuw, nalezen
    'w.rijp': "dojrzały (gotowy do zbioru)", // nieuw, nalezen
    's.plantcare.1': "Ten pomidor nie jest jeszcze dojrzały.", // nieuw, nalezen
    's.plantcare.2': "Odcinam liść.", // nieuw, nalezen
    's.plantcare.3': "Łodyga jest złamana.", // nieuw, nalezen
    'c.plantcare.q': "Które pomidory zbieram?", // nieuw, nalezen
    'c.plantcare.a': "Tylko czerwone. Zielone nie są jeszcze dojrzałe.", // nieuw, nalezen
    'c.plantcare': "Czyste ręce, zdrowe rośliny", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Rośliny też mogą chorować. Wirus przechodzi z rośliny na roślinę na rękach, rękawicach, nożach i ubraniu. W szklarni jedna chora roślina może oznaczać, że trzeba wyrzucić tysiące roślin. Dlatego przy wejściu są surowe zasady: umyj ręce, noś ubranie robocze firmy i przejdź przez wanienkę do dezynfekcji butów. W wielu szklarniach nie wolno mieć w swoim jedzeniu własnych pomidorów, papryki ani ogórków. Widzisz roślinę, która dziwnie wygląda? Nie dotykaj jej. Powiedz przełożonemu, w którym to rzędzie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "W rzędzie dwunastym jest chora roślina.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Widzisz roślinę z dziwnymi żółtymi plamami. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "Zostawiasz ją i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "Wyrywasz ją i zabierasz ze sobą.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Odcinasz liście z plamami.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Kiedy dotykasz chorej rośliny, wirus idzie z tobą do następnych roślin. Twój przełożony wie, jak ją bezpiecznie usunąć.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Praca na zewnątrz", // nieuw, nalezen
    'w.land': "pole (gdzie rośliny rosną na zewnątrz)", // nieuw, nalezen
    'w.regen': "deszcz", // nieuw, nalezen
    'w.zon': "słońce", // nieuw, nalezen
    'w.laarzen': "kalosze, wysokie buty", // nieuw, nalezen
    'w.regenpak': "ubranie przeciwdeszczowe (kurtka i spodnie na deszcz)", // nieuw, nalezen
    'w.onweer': "burza", // nieuw, nalezen
    's.outdoors.1': "Pada deszcz. Zakładam ubranie przeciwdeszczowe.", // nieuw, nalezen
    's.outdoors.2': "Moje kalosze są mokre.", // nieuw, nalezen
    's.outdoors.3': "Słońce dziś mocno grzeje.", // nieuw, nalezen
    'c.outdoors.q': "Idzie burza. Co robimy?", // nieuw, nalezen
    'c.outdoors.a': "Przerywamy pracę i idziemy do środka.", // nieuw, nalezen
    'c.outdoors': "Słońce, deszcz i burza", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Na zewnątrz pracujesz przy każdej pogodzie. W słońcu: zakryj głowę i skórę, używaj kremu z filtrem i często pij wodę. W deszczu: noś ubranie przeciwdeszczowe i kalosze, a w przerwie załóż suche ubranie. Od wilgoci i zimna chorujesz i pracujesz wolniej. Słychać grzmoty? Wtedy przerwij pracę i idź do środka albo do samochodu lub busa. Nie pod drzewo i nie na otwarte pole. Potrzebujesz do pracy ubrania na deszcz albo kaloszy? Zapytaj o nie pracodawcę, zanim kupisz je za swoje pieniądze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Będzie burza. Idziemy do środka?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Jesteś na polu. Słyszysz grzmot blisko. Twój rząd jest prawie skończony. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Przerywasz pracę i idziesz do środka albo do busa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Najpierw szybko kończysz rząd.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Czekasz pod dużym drzewem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "Piorun uderza w najwyższy punkt, a na płaskim polu to jesteś ty. Rząd może poczekać kwadrans.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "Rysunek i wymiar", // nieuw, nalezen
    'w.tekening': "rysunek (pokazuje, jaka ma być część)", // nieuw, nalezen
    'w.maat': "wymiar, rozmiar", // nieuw, nalezen
    'w.millimeter': "milimetr", // nieuw, nalezen
    'w.schuifmaat': "suwmiarka (mierzy bardzo dokładnie)", // nieuw, nalezen
    'w.passen': "pasować", // nieuw, nalezen
    'w.bout': "śruba", // nieuw, nalezen
    's.drawing.1': "Jaki jest wymiar na rysunku?", // nieuw, nalezen
    's.drawing.2': "Ta część nie pasuje.", // nieuw, nalezen
    's.drawing.3': "Jest o dwa milimetry za duża.", // nieuw, nalezen
    'c.drawing.q': "Czy śruba pasuje?", // nieuw, nalezen
    'c.drawing.a': "Nie. Zmierzę to jeszcze raz.", // nieuw, nalezen
    'c.drawing': "Decyduje rysunek", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "W warsztacie robisz to, co jest na rysunku, a nie to, co wygląda mniej więcej dobrze. Wymiary są w milimetrach i jeden milimetr może być za dużo. Część nie pasuje? Nie używaj siły i nie powiększaj otworu „tylko trochę”. Zmierz jeszcze raz i spójrz na rysunek. Nie umiesz odczytać rysunku albo brakuje wymiaru? Zapytaj, zanim zaczniesz. Pytanie kosztuje minutę. Zła część kosztuje materiał i godziny pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Nie mogę odczytać tego wymiaru. Możesz spojrzeć?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Część nie pasuje: jest o jeden milimetr za duża. Młotkiem dałoby się ją wbić. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Mierzysz jeszcze raz i pytasz, co robić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "Wbijasz ją młotkiem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Zeszlifowujesz kawałek i nic nie mówisz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Część, która wchodzi na siłę, może później pęknąć, u klienta. Kiedy to zgłaszasz, można znaleźć przyczynę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Spawanie i praca na gorąco", // nieuw, nalezen
    'w.lassen': "spawać (łączyć metal bardzo wysoką temperaturą)", // nieuw, nalezen
    'w.laskap': "maska spawalnicza", // nieuw, nalezen
    'w.rook': "dym", // nieuw, nalezen
    'w.afzuiging': "wyciąg (zabiera dym)", // nieuw, nalezen
    'w.afkoelen': "stygnąć, ostygnąć", // nieuw, nalezen
    'w.brandwond': "oparzenie (rana od gorąca)", // nieuw, nalezen
    's.weld.1': "Zakładam maskę spawalniczą.", // nieuw, nalezen
    's.weld.2': "Włącz wyciąg.", // nieuw, nalezen
    's.weld.3': "Uwaga, metal jest jeszcze gorący.", // nieuw, nalezen
    'c.weld.q': "Mogę to już wziąć do ręki?", // nieuw, nalezen
    'c.weld.a': "Nie, poczekaj. To musi najpierw ostygnąć.", // nieuw, nalezen
    'c.weld': "Gorący metal wygląda na zimny", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Spawanie daje bardzo jasne światło. Nie patrz w nie bez maski spawalniczej, także z daleka: możesz poparzyć oczy, a czujesz to dopiero po kilku godzinach. Kolega spawa blisko ciebie? Odwróć wzrok albo stań za osłoną. Metal zaraz po spawaniu albo szlifowaniu wygląda normalnie, ale jest bardzo gorący. Nie bierz go gołymi rękami. Dym spawalniczy szkodzi płucom: włącz wyciąg. Oparzenie? Od razu chłodź je wodą, co najmniej dziesięć minut, i zgłoś to. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "Czy to już ostygło?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Kolega spawa obok ciebie. Nie masz na sobie maski spawalniczej. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Odwracasz wzrok i stajesz za osłoną.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Patrzysz przez chwilę: można się czegoś nauczyć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Przymykasz oczy do połowy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "Światło spawania parzy oczy, także z boku i z daleka. Ból czujesz dopiero później, często w nocy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Części samochodu", // nieuw, nalezen
    'w.motor': "silnik", // nieuw, nalezen
    'w.motorkap': "maska (pokrywa nad silnikiem)", // nieuw, nalezen
    'w.rem': "hamulec", // nieuw, nalezen
    'w.lamp': "światło, lampa", // nieuw, nalezen
    'w.ruitenwisser': "wycieraczka (szyby)", // nieuw, nalezen
    'w.stoel': "fotel, krzesło", // nieuw, nalezen
    's.carparts.1': "Otwórz maskę.", // nieuw, nalezen
    's.carparts.2': "Lewe przednie światło jest zepsute.", // nieuw, nalezen
    's.carparts.3': "Hamulce hałasują.", // nieuw, nalezen
    'c.carparts.q': "Co słyszysz?", // nieuw, nalezen
    'c.carparts.a': "Silnik wydaje dziwny dźwięk.", // nieuw, nalezen
    'c.carparts': "Samochód należy do klienta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Samochód w warsztacie nie jest twój: należy do klienta. Zanim wsiądziesz, załóż pokrowiec na fotel i na kierownicę, a w środku pracuj czystymi rękami. Zostaw fotel, lusterka i radio tak, jak były. Trzeba było przesunąć fotel? Ustaw go z powrotem. Nie dotykaj rzeczy osobistych w samochodzie. Zdarzyła ci się rysa albo plama? Od razu powiedz przełożonemu. Klient, który znajdzie to w domu, już nie wróci.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': { m: "Zrobiłem rysę. Przepraszam.", f: "Zrobiłam rysę. Przepraszam.", x: "To przeze mnie ta rysa. Przepraszam." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Robisz małą rysę na drzwiach samochodu klienta. Nikt tego nie widział. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Od razu mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Nic nie mówisz: jest bardzo mała.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Wycierasz ją szmatką i masz nadzieję, że zniknie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Każdemu zdarza się czasem błąd. Warsztat może naprawić rysę albo uczciwie powiedzieć o niej klientowi. Ukryta rysa kosztuje warsztat dobre imię.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Benzyna, gaz i prąd", // nieuw, nalezen
    'w.krik': "lewarek (podnosi jedną stronę samochodu)", // nieuw, nalezen
    'w.benzine': "benzyna", // nieuw, nalezen
    'w.elektrischeauto': "samochód elektryczny", // nieuw, nalezen
    'w.oranje': "pomarańczowy", // nieuw, nalezen
    'w.morsen': "rozlać", // nieuw, nalezen
    'w.lap': "szmata (ścierka do brudnej pracy)", // nieuw, nalezen
    's.carsafe.1': "Czuję benzynę.", // nieuw, nalezen
    's.carsafe.2': "Rozlał się olej. Idę po szmatę.", // nieuw, nalezen
    's.carsafe.3': "Nie dotykam pomarańczowych kabli.", // nieuw, nalezen
    'c.carsafe.q': "Mogę pracować przy tym samochodzie?", // nieuw, nalezen
    'c.carsafe.a': "Jeszcze nie. To samochód elektryczny.", // nieuw, nalezen
    'c.carsafe': "Pomarańczowe kable i pracujące silniki", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Samochód elektryczny albo hybrydowy ma akumulator o bardzo wysokim napięciu. Kable do niego są pomarańczowe. Nie dotykaj ich i ich nie odłączaj: najpierw mechanik ze specjalnym przeszkoleniem musi zabezpieczyć samochód. Przy samochodzie stoi tabliczka albo pachołek? Wtedy trzymaj się z daleka. Silnik, który pracuje w zamkniętym pomieszczeniu, wytwarza gaz, którego nie czuć i nie widać, a który może zabić. Dlatego: załóż wąż do odciągu spalin albo otwórz drzwi warsztatu. Czujesz benzynę? Żadnych iskier i żadnego palenia. Od razu powiedz przełożonemu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Czy ten samochód jest już zabezpieczony?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Musisz wymienić koło w samochodzie elektrycznym. Pod samochodem widzisz luźny pomarańczowy kabel. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Niczego nie dotykasz i wołasz przeszkolonego mechanika.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Wpychasz kabel z powrotem ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Wpychasz go z powrotem suchą szmatką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "Akumulator samochodu elektrycznego ma dość prądu, żeby zabić, także gdy samochód jest wyłączony. Tych części może dotykać tylko osoba po przeszkoleniu.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Sprawdzanie busa", // nieuw, nalezen
    'w.schade': "uszkodzenie, szkoda", // nieuw, nalezen
    'w.deuk': "wgniecenie", // nieuw, nalezen
    'w.spiegel': "lusterko, lustro", // nieuw, nalezen
    'w.tanken': "tankować (wlać paliwo do busa)", // nieuw, nalezen
    'w.opladen': "ładować (elektrycznego busa, telefon)", // nieuw, nalezen
    'w.parkeren': "parkować", // nieuw, nalezen
    's.vancheck.1': "Na drzwiach jest wgniecenie.", // nieuw, nalezen
    's.vancheck.2': "To uszkodzenie już było.", // nieuw, nalezen
    's.vancheck.3': "Muszę jeszcze najpierw zatankować.", // nieuw, nalezen
    'c.vancheck.q': "Czy z busem wszystko w porządku?", // nieuw, nalezen
    'c.vancheck.a': "Nie, lusterko jest zepsute.", // nieuw, nalezen
    'c.vancheck': "Obejrzyj, zanim pojedziesz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Obejdź busa dookoła przed pierwszym kursem. Widzisz wgniecenie, rysę albo zepsute lusterko? Zrób zdjęcie i zgłoś to, zanim odjedziesz. Wtedy wszyscy wiedzą, że to uszkodzenie już było. Coś się stało w czasie kursu? Zgłoś to tego samego dnia, także wtedy, gdy to drobiazg. Ukrywanie uszkodzeń daje później większe problemy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "Na busie jest uszkodzenie. Oto zdjęcie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': { m: "Rano widzisz na busie nowe wgniecenie. Nie ty je zrobiłeś. Co robisz?", f: "Rano widzisz na busie nowe wgniecenie. Nie ty je zrobiłaś. Co robisz?", x: "Rano widzisz na busie nowe wgniecenie. To nie przez ciebie. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Robisz zdjęcie i zgłaszasz to, zanim pojedziesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Nic nie mówisz: to nie twoje wgniecenie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Czekasz, czy ktoś o to zapyta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': { m: "Kiedy zgłaszasz to, zanim pojedziesz, nikt nie pomyśli, że to ty to zrobiłeś. Zdjęcie z godziną jest jasne dla wszystkich.", f: "Kiedy zgłaszasz to, zanim pojedziesz, nikt nie pomyśli, że to ty to zrobiłaś. Zdjęcie z godziną jest jasne dla wszystkich.", x: "Kiedy zgłaszasz to, zanim pojedziesz, nikt nie pomyśli, że to przez ciebie. Zdjęcie z godziną jest jasne dla wszystkich." }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Opóźnienia na drodze", // nieuw, nalezen
    'w.file': "korek (na drodze)", // nieuw, nalezen
    'w.vertraging': "opóźnienie (jesteś później, niż było w planie)", // nieuw, nalezen
    'w.omleiding': "objazd (inna droga, bo droga jest zamknięta)", // nieuw, nalezen
    'w.navigatie': "nawigacja (aplikacja, która pokazuje drogę)", // nieuw, nalezen
    'w.planner': "planista (osoba, która układa trasy)", // nieuw, nalezen
    'w.retour': "zwrot (paczka, która wraca)", // nieuw, nalezen
    's.delay.1': "Stoję w korku.", // nieuw, nalezen
    's.delay.2': "Mam pół godziny opóźnienia.", // nieuw, nalezen
    's.delay.3': "Ta paczka idzie do zwrotu.", // nieuw, nalezen
    'c.delay.q': "Gdzie teraz jesteś?", // nieuw, nalezen
    'c.delay.a': "Przy objeździe. Będę dziesięć minut później.", // nieuw, nalezen
    'c.delay': "Spóźnisz się? Powiedz na czas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Korek albo zamknięta droga to nie twoja wina. Ale powiedz planiście, gdy tylko wiesz, że się spóźnisz. Wtedy planista może powiadomić klientów albo zmienić trasę. Najpierw zatrzymaj się w bezpiecznym miejscu: nie dzwoń z telefonem w ręce, kiedy prowadzisz. I nie jedź szybciej, żeby nadrobić czas. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Stoję w korku. Będę pół godziny później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Droga jest zamknięta. Objazd zabiera ci trzydzieści minut. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Mówisz planiście, gdy tylko możesz bezpiecznie się zatrzymać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Jedziesz szybciej, żeby nadrobić czas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Nic nie mówisz: może nikt nie zauważy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Kiedy planista wie o tym wcześnie, klienci się dowiadują i nikt nie czeka na próżno. Szybsza jazda jest niebezpieczna i prawie nie daje czasu.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Polecenia", // nieuw, nalezen
    'l.putdown': "Postaw to tam", // nieuw, nalezen
    'w.zetten': "stawiać (coś, co stoi: karton, wiadro)", // nieuw, nalezen
    'w.leggen': "kłaść (coś, co leży płasko)", // nieuw, nalezen
    'w.brengen': "przynosić, zanosić (w jakieś miejsce albo do kogoś)", // nieuw, nalezen
    'w.geven': "dawać", // nieuw, nalezen
    'w.vasthouden': "trzymać", // nieuw, nalezen
    'w.loslaten': "puszczać", // nieuw, nalezen
    's.putdown.1': "Postaw to tam.", // nieuw, nalezen
    's.putdown.2': "Zanieś to do stołówki.", // nieuw, nalezen
    's.putdown.3': "Potrzymaj to przez chwilę.", // nieuw, nalezen
    'c.putdown.q': "Możesz to przez chwilę potrzymać?", // nieuw, nalezen
    'c.putdown.a': "Tak. Gdzie mam to postawić?", // nieuw, nalezen
    'c.putdown': "Powiedz, że trzymasz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Niesiecie coś razem albo kolega podaje ci coś ciężkiego? Powiedz „Ik heb hem”, kiedy dobrze to trzymasz. Wtedy kolega wie, że może bezpiecznie puścić. A jeśli to ty chcesz puścić? Najpierw zapytaj: „Heb je hem?” I poczekaj na odpowiedź. To normalne w każdym miejscu pracy. Dzięki temu nic nie spada na stopy i ręce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Trzymam. Możesz puścić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Kolega podaje ci ciężki karton. Jeszcze nie trzymasz go dobrze. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Mówisz „wacht” i najpierw chwytasz lepiej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Nic nie mówisz: on to zobaczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "Bierzesz szybko, żeby nie czekał.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Kolega puszcza, kiedy myśli, że już trzymasz. Jedno słowo daje ci czas, żeby dobrze chwycić.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Włączone i wyłączone, otwarte i zamknięte", // nieuw, nalezen
    'w.aanzetten': "włączyć", // nieuw, nalezen
    'w.opendoen': "otwierać", // nieuw, nalezen
    'w.dichtdoen': "zamykać", // nieuw, nalezen
    'w.drukken': "naciskać (przycisk)", // nieuw, nalezen
    'w.draaien': "kręcić, obracać", // nieuw, nalezen
    'w.stoppen': "zatrzymać (się), przestać", // nieuw, nalezen
    's.onoff.1': "Zamknij drzwi.", // nieuw, nalezen
    's.onoff.2': "Naciśnij przycisk.", // nieuw, nalezen
    's.onoff.3': "Stop! Wyłącz to.", // nieuw, nalezen
    'c.onoff.q': "Czy drzwi są zamknięte?", // nieuw, nalezen
    'c.onoff.a': "Nie. Teraz je zamykam.", // nieuw, nalezen
    'c.onoff': "Stop znaczy stop", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Ktoś woła „Stop!”? Zatrzymaj się od razu, także wtedy, gdy nie wiesz dlaczego. Zapytaj potem. Krótkie, głośne słowo to tutaj nie złość: tak koledzy dbają o siebie nawzajem. A jeśli to ty widzisz coś niebezpiecznego? Też zawołaj „Stop!”, także do kogoś, kto pracuje tu od lat. Nikogo to nie dziwi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Stop! Poczekaj chwilę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Włączasz maszynę. Kolega woła „Stop!”. Nie widzisz problemu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Zatrzymujesz się od razu, a potem pytasz dlaczego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Robisz dalej: nie widzisz problemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Najpierw pytasz, dlaczego masz się zatrzymać.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Kolega może widzieć coś, czego ty nie widzisz. Najpierw się zatrzymaj, potem rozmawiaj: tak wszyscy są bezpieczni.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Pchaj, ciągnij, napełniaj", // nieuw, nalezen
    'w.duwen': "pchać", // nieuw, nalezen
    'w.trekken': "ciągnąć", // nieuw, nalezen
    'w.vullen': "napełniać", // nieuw, nalezen
    'w.leegmaken': "opróżniać", // nieuw, nalezen
    'w.schoonmaken': "czyścić, sprzątać", // nieuw, nalezen
    'w.vol': "pełny", // nieuw, nalezen
    's.fillempty.1': "Nie pchaj, tylko ciągnij.", // nieuw, nalezen
    's.fillempty.2': "Ten jest pełny. Opróżnij go.", // nieuw, nalezen
    's.fillempty.3': "Wyczyść to, proszę.", // nieuw, nalezen
    'c.fillempty.q': "Jest już pełny?", // nieuw, nalezen
    'c.fillempty.a': "Tak. Opróżniam go.", // nieuw, nalezen
    'c.fillempty': "Gotowe? Powiedz to", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': { m: "Skończyłeś zadanie? Powiedz to: „Ik ben klaar.” I zapytaj, co możesz robić dalej. Kiedy cicho czekasz, aż ktoś cię zobaczy, może to wyglądać tak, że nie chcesz pracować, także wtedy, gdy to nieprawda. Koledzy, którzy pytają o następne zadanie, po jakimś czasie często dostają ciekawszą pracę. Chcesz nauczyć się czegoś nowego? Zapytaj też o to: „Mag ik dat ook leren?”", f: "Skończyłaś zadanie? Powiedz to: „Ik ben klaar.” I zapytaj, co możesz robić dalej. Kiedy cicho czekasz, aż ktoś cię zobaczy, może to wyglądać tak, że nie chcesz pracować, także wtedy, gdy to nieprawda. Koledzy, którzy pytają o następne zadanie, po jakimś czasie często dostają ciekawszą pracę. Chcesz nauczyć się czegoś nowego? Zapytaj też o to: „Mag ik dat ook leren?”", x: "Zadanie gotowe? Powiedz to: „Ik ben klaar.” I zapytaj, co możesz robić dalej. Kiedy cicho czekasz, aż ktoś cię zobaczy, może to wyglądać tak, że nie chcesz pracować, także wtedy, gdy to nieprawda. Koledzy, którzy pytają o następne zadanie, po jakimś czasie często dostają ciekawszą pracę. Chcesz nauczyć się czegoś nowego? Zapytaj też o to: „Mag ik dat ook leren?”" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': { m: "Skończyłem. Co jeszcze mogę zrobić?", f: "Skończyłam. Co jeszcze mogę zrobić?", x: "Gotowe. Co jeszcze mogę zrobić?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': { m: "Skończyłeś swoje zadanie. Przełożony jest zajęty czymś innym. Co robisz?", f: "Skończyłaś swoje zadanie. Przełożony jest zajęty czymś innym. Co robisz?", x: "Twoje zadanie jest gotowe. Przełożony jest zajęty czymś innym. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': { m: "Mówisz, że skończyłeś, i pytasz, co dalej.", f: "Mówisz, że skończyłaś, i pytasz, co dalej.", x: "Mówisz, że wszystko gotowe, i pytasz, co dalej." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Czekasz, aż przełożony cię zobaczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Robisz sobie przerwę: twoja praca jest skończona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': { m: "Przełożony nie może widzieć wszystkiego. Kiedy mówisz, że skończyłeś, praca idzie dalej, a ty pokazujesz, że chcesz robić więcej.", f: "Przełożony nie może widzieć wszystkiego. Kiedy mówisz, że skończyłaś, praca idzie dalej, a ty pokazujesz, że chcesz robić więcej.", x: "Przełożony nie może widzieć wszystkiego. Kiedy mówisz, że wszystko gotowe, praca idzie dalej, a ty pokazujesz, że chcesz robić więcej." }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Najpierw to, potem tamto", // nieuw, nalezen
    'w.nu': "teraz", // nieuw, nalezen
    'w.dan': "potem", // nieuw, nalezen
    'w.altijd': "zawsze", // nieuw, nalezen
    'w.genoeg': "dość, wystarczy", // nieuw, nalezen
    'w.meer': "więcej", // nieuw, nalezen
    'w.alles': "wszystko", // nieuw, nalezen
    's.order.1': "Najpierw to, potem tamto.", // nieuw, nalezen
    's.order.2': "To wystarczy.", // nieuw, nalezen
    's.order.3': "Zawsze rób to tak.", // nieuw, nalezen
    'c.order.q': "Możesz to teraz zrobić?", // nieuw, nalezen
    'c.order.a': "Tak. Najpierw to, a potem?", // nieuw, nalezen
    'c.order': "Dużo zadań naraz? Zapytaj, co najpierw", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': { m: "Czasem dostajesz trzy zadania w jednym zdaniu. Trudno to zapamiętać, także ludziom, którzy dobrze mówią po niderlandzku. Zapytaj, które jest pierwsze: „Wat moet ik eerst doen?” Możesz też zapisać zadania albo policzyć je na palcach i powtórzyć. Zapomniałeś o jednym? Wróć i zapytaj. To lepsze niż zgadywanie.", f: "Czasem dostajesz trzy zadania w jednym zdaniu. Trudno to zapamiętać, także ludziom, którzy dobrze mówią po niderlandzku. Zapytaj, które jest pierwsze: „Wat moet ik eerst doen?” Możesz też zapisać zadania albo policzyć je na palcach i powtórzyć. Zapomniałaś o jednym? Wróć i zapytaj. To lepsze niż zgadywanie.", x: "Czasem dostajesz trzy zadania w jednym zdaniu. Trudno to zapamiętać, także ludziom, którzy dobrze mówią po niderlandzku. Zapytaj, które jest pierwsze: „Wat moet ik eerst doen?” Możesz też zapisać zadania albo policzyć je na palcach i powtórzyć. Nie pamiętasz jednego? Wróć i zapytaj. To lepsze niż zgadywanie." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "To dużo. Co mam zrobić najpierw?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Przełożony daje ci trzy zadania, bardzo szybko. Pamiętasz tylko pierwsze. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Od razu prosisz o powtórzenie zadań.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Robisz pierwsze i masz nadzieję, że przypomnisz sobie resztę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Nic nie robisz: nie znasz wszystkich trzech.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Pytanie od razu zajmuje dziesięć sekund. Później przełożonego może już nie być, a wtedy czekasz albo zgadujesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Płytki, tynk i farba", // nieuw, nalezen
    'l.tiletools': "Narzędzia glazurnika", // nieuw, nalezen
    'w.lijmkam': "paca zębata (rozprowadza klej do płytek w równe rowki)", // nieuw, nalezen
    'w.troffel': "kielnia", // nieuw, nalezen
    'w.tegelsnijder': "przecinarka do płytek", // nieuw, nalezen
    'w.nijptang': "szczypce do płytek (do odłamywania małych kawałków płytki)", // nieuw, nalezen
    'w.mixer': "mieszadło (miesza klej albo tynk w wiadrze)", // nieuw, nalezen
    'w.duimstok': "metrówka, miarka składana", // nieuw, nalezen
    's.tiletools.1': "Podaj mi na chwilę pacę zębatą.", // nieuw, nalezen
    's.tiletools.2': "Tnę płytkę przecinarką do płytek.", // nieuw, nalezen
    's.tiletools.3': "Najpierw zmierz metrówką.", // nieuw, nalezen
    'c.tiletools.q': "Gdzie jest mieszadło?", // nieuw, nalezen
    'c.tiletools.a': "Przy wiadrze, obok drzwi.", // nieuw, nalezen
    'c.tiletools': "Umyj narzędzia, zanim klej stwardnieje", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "Klej do płytek i tynk szybko twardnieją, także na narzędziach. Dlatego od razu myj pacę zębatą, kielnię i mieszadło w wiadrze z wodą, także przed przerwą. Twardy klej nie schodzi, a paca zębata z twardym klejem robi złe rowki. Nie wylewaj brudnej wody do zlewu ani do odpływu: zatka się. Zapytaj, gdzie można wylać wodę. Mieszadło trzymaj obiema rękami i włączaj je powoli. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Szybko umyję pacę zębatą.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "Jest czas na przerwę. Twoja paca zębata jest pełna mokrego kleju. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "Myjesz ją w wodzie i idziesz na przerwę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "Zostawiasz ją: umyjesz ją po pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "Wkładasz ją do wiadra z klejem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "Klej do płytek twardnieje też w czasie przerwy. Czysta paca zębata robi dobre rowki i płytki dobrze się trzymają. Twardy klej na niej to dużo pracy albo nowe narzędzie.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Płytki, klej i linia środkowa", // nieuw, nalezen
    'w.tegel': "płytka", // nieuw, nalezen
    'w.tegellijm': "klej do płytek", // nieuw, nalezen
    'w.tegelkruisje': "krzyżyk dystansowy (mały krzyżyk między płytkami)", // nieuw, nalezen
    'w.hartlijn': "linia środkowa, oś (od niej zaczyna się układać płytki)", // nieuw, nalezen
    'w.tegelplaat': "płyta do ćwiczeń (płyta, na której ćwiczy się układanie płytek)", // nieuw, nalezen
    'w.potlood': "ołówek", // nieuw, nalezen
    's.tiling.1': "Klej do płytek jest jeszcze mokry.", // nieuw, nalezen
    's.tiling.2': "Włóż krzyżyk między płytki.", // nieuw, nalezen
    's.tiling.3': "Najpierw narysuj ołówkiem linię środkową.", // nieuw, nalezen
    'c.tiling.q': "Gdzie zaczynam układać płytki?", // nieuw, nalezen
    'c.tiling.a': "Pośrodku, na linii środkowej.", // nieuw, nalezen
    'c.tiling': "Zacznij od linii środkowej, z małą ilością kleju", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Glazurnik nie zaczyna w rogu. Najpierw rysujesz linię środkową, ołówkiem i poziomicą, i tam zaczynasz. Wtedy docinane płytki na obu końcach mają taki sam rozmiar. Nakładaj tylko tyle kleju, ile zdążysz szybko przykryć płytkami. Na kleju, który stoi za długo, robi się sucha skórka i wtedy płytki słabo się trzymają. Na każdym skrzyżowaniu włóż krzyżyk, żeby wszystkie fugi były takie same. Często sprawdzaj poziomicą: krzywą płytkę łatwo poprawić teraz, a trudno jutro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Nie nakładam za dużo kleju naraz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Po długiej rozmowie przez telefon klej na ścianie ma suchą skórkę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Zdrapujesz go i nakładasz świeży klej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "I tak wciskasz w niego płytki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Zwilżasz go gąbką i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "Klej z suchą skórką słabo trzyma płytkę. Później płytka może odpaść i wtedy trzeba zrobić pracę jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Tynkowanie", // nieuw, nalezen
    'w.stucspaan': "paca tynkarska (płaska stalowa paca do wygładzania tynku)", // nieuw, nalezen
    'w.oplegspaan': "deska tynkarska (płaska deska, na której trzymasz tynk)", // nieuw, nalezen
    'w.spackmes': "szpachla (szeroki, płaski nóż)", // nieuw, nalezen
    'w.rei': "łata tynkarska (długa prosta listwa do wyrównywania tynku)", // nieuw, nalezen
    'w.sponsspaan': "paca z gąbką", // nieuw, nalezen
    'w.hoekprofiel': "narożnik tynkarski (metalowa listwa, żeby róg był prosty)", // nieuw, nalezen
    's.plaster.1': "Najpierw załóż narożnik na róg.", // nieuw, nalezen
    's.plaster.2': "Wygładź ścianę pacą tynkarską.", // nieuw, nalezen
    's.plaster.3': "Przeciągnij łatę po ścianie.", // nieuw, nalezen
    'c.plaster.q': "Czy ściana jest już sucha?", // nieuw, nalezen
    'c.plaster.a': "Nie, poczekaj jeszcze jeden dzień.", // nieuw, nalezen
    'c.plaster': "Tynk potrzebuje czasu, żeby wyschnąć", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "Świeży tynk długo jest mokry. Mokra ściana jest ciemniejsza niż sucha. Malarz może zacząć dopiero wtedy, gdy ściana jest wszędzie sucha, a to może trwać dni albo tygodnie. Nie susz jej szybciej nagrzewnicą: wtedy tynk może popękać. Ktoś chce malować za wcześnie? Powiedz, że ściana nie jest jeszcze sucha. A zanim zaczniesz, przykryj podłogę, okna i gniazdka: tynk trudno usunąć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "Ściana jest jeszcze mokra. Nie możesz jeszcze malować.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "Malarz chce zacząć jutro. Nowy tynk ma jeszcze ciemne plamy. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Mówisz malarzowi: ściana nie jest jeszcze sucha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Na noc stawiasz przed nią nagrzewnicę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Nic nie mówisz: malarz sam to zobaczy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Ciemne plamy znaczą, że tynk jest jeszcze mokry. Farba na mokrej ścianie może odpaść, a nagrzewnica może zrobić pęknięcia. Czekanie kosztuje mniej niż robienie wszystkiego jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Murowanie, drewno i mocowanie", // nieuw, nalezen
    'u.machines': "Maszyny i narzędzia", // nieuw, nalezen
    'l.shapes': "Kształty", // nieuw, nalezen
    'w.vierkant': "kwadrat", // nieuw, nalezen
    'w.rechthoek': "prostokąt", // nieuw, nalezen
    'w.driehoek': "trójkąt", // nieuw, nalezen
    'w.cirkel': "koło, okrąg", // nieuw, nalezen
    'w.kubus': "sześcian", // nieuw, nalezen
    'w.balk': "prostopadłościan (długi kształt jak pudełko)", // nieuw, nalezen
    's.shapes.1': "Płytka jest kwadratem.", // nieuw, nalezen
    's.shapes.2': "Ten pokój jest prostokątem.", // nieuw, nalezen
    's.shapes.3': "Cegła ma kształt prostopadłościanu.", // nieuw, nalezen
    'c.shapes.q': "Czy to kwadrat?", // nieuw, nalezen
    'c.shapes.a': "Nie, prostokąt. Jest dłuższy niż szerszy.", // nieuw, nalezen
    'c.shapes': "Sprawdź prostokąt dwiema liniami na ukos", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Pokój, podłoga albo rama to często prostokąt. Ale czy rogi są naprawdę proste? Jest łatwy sposób, żeby to sprawdzić. Zmierz od jednego rogu do rogu naprzeciwko. Potem zmierz między dwoma pozostałymi rogami. Czy obie długości są takie same? To rogi są dobre. Nie są takie same? To kształt jest trochę krzywy i płytki albo podłoga nie będą dobrze pasować. Powiedz przełożonemu, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Te dwa wymiary nie są takie same.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Mierzysz podłogę od rogu do rogu, w obie strony. Jeden wymiar jest dłuższy. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Mówisz przełożonemu, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Zaczynasz w rogu, będzie dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Mierzysz jeszcze raz tylko jeden bok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Dwie różne długości znaczą, że rogi nie są proste. Wtedy płytki albo deski nie pasują. Lepiej wiedzieć to, zanim zaczniesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Kąty i okrągłe kształty", // nieuw, nalezen
    'w.hoek': "kąt", // nieuw, nalezen
    'w.graad': "stopień (°)", // nieuw, nalezen
    'w.geodriehoek': "ekierka z kątomierzem", // nieuw, nalezen
    'w.boog': "łuk", // nieuw, nalezen
    'w.cilinder': "walec", // nieuw, nalezen
    'w.parallellogram': "równoległobok", // nieuw, nalezen
    's.angles.1': "Ten kąt ma dziewięćdziesiąt stopni.", // nieuw, nalezen
    's.angles.2': "Zmierz kąt ekierką.", // nieuw, nalezen
    's.angles.3': "Rura ma kształt walca.", // nieuw, nalezen
    'c.angles.q': "Ile stopni ma ten kąt?", // nieuw, nalezen
    'c.angles.a': "Czterdzieści pięć. Połowa kąta prostego.", // nieuw, nalezen
    'c.angles': "Sprawdź duży róg liczbami 3, 4 i 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Na budowie często sprawdzasz kąt prosty: ściana na podłodze, róg pokoju. Mały róg sprawdzasz kątownikiem albo ekierką. Na duży róg jest stary sposób. Zmierz 3 metry wzdłuż jednego boku i 4 metry wzdłuż drugiego boku, i zrób znak w obu miejscach. Czy od znaku do znaku jest dokładnie 5 metrów? To kąt ma 90 stopni. Mniejsze liczby też działają: 30, 40 i 50 centymetrów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Ten kąt nie jest prosty.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Musisz sprawdzić duży róg nowej ściany. Twój kątownik jest o wiele za mały. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Mierzysz 3, 4 i 5 metrów.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Patrzysz na to z daleka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "I tak używasz małego kątownika.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Liczbami 3, 4 i 5 możesz dokładnie sprawdzić duży róg, tylko miarą zwijaną. Na oko róg może wyglądać dobrze, a i tak być krzywy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Długość, powierzchnia i objętość", // nieuw, nalezen
    'w.lengte': "długość", // nieuw, nalezen
    'w.breedte': "szerokość", // nieuw, nalezen
    'w.hoogte': "wysokość", // nieuw, nalezen
    'w.oppervlakte': "powierzchnia (długość razy szerokość, w metrach kwadratowych)", // nieuw, nalezen
    'w.inhoud': "objętość (długość razy szerokość razy wysokość)", // nieuw, nalezen
    'w.centimeter': "centymetr", // nieuw, nalezen
    's.size.1': "Powierzchnia to długość razy szerokość.", // nieuw, nalezen
    's.size.2': "Objętość to długość razy szerokość razy wysokość.", // nieuw, nalezen
    's.size.3': "Dziesięć milimetrów to jeden centymetr.", // nieuw, nalezen
    'c.size.q': "Ile metrów kwadratowych ma podłoga?", // nieuw, nalezen
    'c.size.a': "Cztery na pięć metrów, czyli dwadzieścia metrów kwadratowych.", // nieuw, nalezen
    'c.size': "Policz, ile potrzebujesz, i dodaj trochę", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Ile płytek, ile farby, ile piasku? Liczysz to z powierzchni albo objętości. Powierzchnia: długość razy szerokość, w metrach kwadratowych. Objętość: długość razy szerokość razy wysokość, w metrach sześciennych. Mierz wszystko w tej samej jednostce: wszystko w metrach albo wszystko w centymetrach. Zapisz wymiary, nie trzymaj ich w głowie. Potem dodaj trochę więcej, na docinane kawałki i na błędy. Nie masz pewności? Poproś kolegę, żeby sprawdził twoje obliczenie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Zapisuję wymiary.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': { m: "Zmierzyłeś podłogę. Dziś musisz zamówić płytki. Co robisz?", f: "Zmierzyłaś podłogę. Dziś musisz zamówić płytki. Co robisz?", x: "Podłoga jest już zmierzona. Dziś musisz zamówić płytki. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Liczysz powierzchnię i dodajesz trochę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Zamawiasz dokładnie powierzchnię, ani jednej płytki więcej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Zgadujesz: przecież znasz tę podłogę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Zawsze docinasz kilka płytek, a kilka się łamie. Z małym zapasem nie musisz przerywać w połowie i zamawiać jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Malowanie", // nieuw, nalezen
    'w.verf': "farba", // nieuw, nalezen
    'w.kwast': "pędzel (szeroki pędzel)", // nieuw, nalezen
    'w.penseel': "mały pędzelek (do rogów i krawędzi)", // nieuw, nalezen
    'w.roerstok': "mieszadełko, patyk do mieszania", // nieuw, nalezen
    'w.tape': "taśma malarska", // nieuw, nalezen
    'w.strijkvaatje': "kubełek malarski (mały pojemnik, który trzymasz w ręce przy malowaniu)", // nieuw, nalezen
    's.paint.1': "Najpierw dobrze wymieszaj farbę.", // nieuw, nalezen
    's.paint.2': "Oklej krawędź taśmą.", // nieuw, nalezen
    's.paint.3': "Nalej trochę farby do kubełka.", // nieuw, nalezen
    'c.paint.q': "Który pędzel mam wziąć?", // nieuw, nalezen
    'c.paint.a': "Szeroki do ściany, mały pędzelek do rogów.", // nieuw, nalezen
    'c.paint': "Dobrze wymieszaj i maluj od góry do dołu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "Farba, która długo stała, jest gęsta na dnie puszki. Dlatego najpierw dobrze ją wymieszaj mieszadełkiem, aż kolor będzie wszędzie taki sam. Nie maluj z dużej puszki: nalej trochę farby do kubełka i znowu zamknij puszkę. Wtedy farba zostaje dobra. Maluj od góry do dołu, żeby zacieki spadały na mokrą farbę i żeby można je było jeszcze rozprowadzić pędzlem. Szerokiego pędzla używaj do ściany, a małego pędzelka do rogów. Na koniec od razu umyj pędzle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Najpierw dobrze mieszam farbę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Otwierasz starą puszkę farby. Na górze farba jest rzadka, na dnie gęsta. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Najpierw dobrze ją mieszasz mieszadełkiem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Malujesz rzadką farbą z góry.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Dolewasz wody, aż będzie wszędzie rzadka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Część koloru jest na dnie puszki. Bez mieszania na ścianie będą plamy i pasy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Przygotowanie do malowania", // nieuw, nalezen
    'w.plamuurmes': "szpachelka (do wypełniania dziur)", // nieuw, nalezen
    'w.schuurpapier': "papier ścierny", // nieuw, nalezen
    'w.verfkrabber': "skrobak do farby", // nieuw, nalezen
    'w.stoffertje': "miotełka (mała szczotka do zmiatania kurzu)", // nieuw, nalezen
    'w.schuren': "szlifować (papierem ściernym)", // nieuw, nalezen
    'w.afplakken': "okleić (zakryć krawędź taśmą)", // nieuw, nalezen
    's.prep.1': "Najpierw zeskrob starą farbę.", // nieuw, nalezen
    's.prep.2': "Wyszlifuj drewno na gładko.", // nieuw, nalezen
    's.prep.3': "Zmieć kurz miotełką.", // nieuw, nalezen
    'c.prep.q': "Mogę już malować?", // nieuw, nalezen
    'c.prep.a': "Nie, najpierw szlifowanie i zaszpachlowanie dziury.", // nieuw, nalezen
    'c.prep': "Dobre malowanie zaczyna się przed farbą", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "Farba słabo trzyma się na brudzie, kurzu albo luźnej starej farbie. Dlatego najpierw zeskrob luźną farbę skrobakiem. Dziury wypełnij szpachlówką i szpachelką, i poczekaj, aż szpachlówka wyschnie. Potem wyszlifuj to na gładko. Po szlifowaniu zmieć kurz miotełką, także z krawędzi. Na końcu oklej to, co musi zostać czyste, na przykład okna i gniazdka. Przy szlifowaniu jest drobny pył: noś maskę przeciwpyłową i zapytaj, jaką. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Najpierw szlifowanie, potem malowanie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': { m: "Zeszlifowałeś drzwi. Jest na nich jeszcze kurz. Kolega chce teraz malować. Co robisz?", f: "Zeszlifowałaś drzwi. Jest na nich jeszcze kurz. Kolega chce teraz malować. Co robisz?", x: "Drzwi są już zeszlifowane. Jest na nich jeszcze kurz. Kolega chce teraz malować. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Najpierw zmiatasz kurz miotełką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Pozwalasz mu malować: farba przykryje kurz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Ścierasz kurz ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "Farba na kurzu słabo się trzyma. Później odpada płatami i wtedy trzeba zrobić całą pracę jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Murowanie", // nieuw, nalezen
    'w.speciekuip': "kastra na zaprawę", // nieuw, nalezen
    'w.metseltroffel': "kielnia murarska", // nieuw, nalezen
    'w.baksteen': "cegła", // nieuw, nalezen
    'w.cement': "cement", // nieuw, nalezen
    'w.voegijzer': "fugówka (do wygładzania spoin między cegłami)", // nieuw, nalezen
    'w.handveger': "zmiotka, szczotka ręczna", // nieuw, nalezen
    's.brick.1': "W kastrze jest jeszcze cement.", // nieuw, nalezen
    's.brick.2': "Wygładź spoinę fugówką.", // nieuw, nalezen
    's.brick.3': "Zmieć mur do czysta zmiotką.", // nieuw, nalezen
    'c.brick.q': "Ile cegieł ci jeszcze zostało?", // nieuw, nalezen
    'c.brick.a': "Jeszcze jedna paleta. Wystarczy na dziś.", // nieuw, nalezen
    'c.brick': "Utrzymuj mur w czystości podczas pracy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "Zaprawa jest mokra, kiedy układasz cegły, i twardnieje w kilka godzin. Dlatego pracuj czysto. Zaprawę, która wychodzi ze spoiny, od razu zeskrob kielnią. Spoiny wygładzaj fugówką, kiedy zaprawa jest trochę sztywna, a nie wtedy, gdy jest jeszcze mokra. Potem zmieć mur zmiotką. Twardą zaprawę z przodu cegły bardzo trudno usunąć. Na koniec dnia przykryj górę muru, żeby deszcz nie wypłukał zaprawy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Wygładzam spoiny.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "Na koniec dnia z przodu cegieł jest zaprawa. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Zmiatasz ją teraz, zanim stwardnieje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Zostawiasz ją: wyczyścisz to w przyszłym tygodniu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Myjesz mur dużą ilością wody.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "Świeża zaprawa łatwo schodzi szczotką. Twarda zaprawa zostaje na cegle i wtedy mur nie wygląda dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Prosty mur", // nieuw, nalezen
    'w.metseltouw': "sznurek murarski (sznurek do prostej warstwy)", // nieuw, nalezen
    'w.klos': "uchwyt do sznurka (trzyma sznurek na rogu)", // nieuw, nalezen
    'w.lagenmaatlat': "łata z podziałką warstw (pokazuje wysokość każdej warstwy)", // nieuw, nalezen
    'w.profiel': "profil narożny, kierownica (prosty słupek na końcu muru)", // nieuw, nalezen
    'w.kop': "główka (krótki koniec cegły)", // nieuw, nalezen
    'w.strek': "wozówka (długi bok cegły)", // nieuw, nalezen
    's.wall.1': "Naciągnij mocno sznurek murarski.", // nieuw, nalezen
    's.wall.2': "Profil narożny musi stać prosto.", // nieuw, nalezen
    's.wall.3': "Połóż cegłę długim bokiem na zewnątrz.", // nieuw, nalezen
    'c.wall.q': "Jak wysoka musi być ta warstwa?", // nieuw, nalezen
    'c.wall.a': "Popatrz na łatę z podziałką.", // nieuw, nalezen
    'c.wall': "Sznurek trzyma mur w linii prostej", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Murarz nie muruje na oko. Najpierw na obu końcach muru stoją prosto profile narożne. Między nimi mocno naciągasz sznurek murarski, na wysokości następnej warstwy. Każdą cegłę układaj wzdłuż sznurka, ale nie odpychaj sznurka. Łata z podziałką pokazuje, jak wysoka musi być każda warstwa. Często sprawdzaj poziomicą. Krzywą cegłę łatwo poprawić, kiedy zaprawa jest mokra, a bardzo trudno jutro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "Czy sznurek jest mocno naciągnięty?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "Sznurek murarski jest luźny i trochę zwisa pośrodku. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Najpierw mocno go naciągasz, potem pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "I tak układasz cegły pod nim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Układasz cegły na oko.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Luźny sznurek zwisa pośrodku, więc warstwa też zwisa. Mocno naciągnięty sznurek daje prostą warstwę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Praca z drewnem", // nieuw, nalezen
    'w.handzaag': "piła ręczna", // nieuw, nalezen
    'w.kapzaag': "piła grzbietnica (mała piła ze sztywnym grzbietem)", // nieuw, nalezen
    'w.houtbeitel': "dłuto do drewna", // nieuw, nalezen
    'w.handschaaf': "strug ręczny", // nieuw, nalezen
    'w.timmermanshamer': "młotek ciesielski", // nieuw, nalezen
    'w.houtenhamer': "pobijak (drewniany młotek)", // nieuw, nalezen
    's.wood.1': "Przytnij deskę na wymiar.", // nieuw, nalezen
    's.wood.2': "Zestrugaj krawędź na gładko.", // nieuw, nalezen
    's.wood.3': "Uderzaj pobijakiem w dłuto.", // nieuw, nalezen
    'c.wood.q': "Jakiej piły potrzebuję?", // nieuw, nalezen
    'c.wood.a': "Grzbietnicy, do tego małego kawałka.", // nieuw, nalezen
    'c.wood': "Za krótkiego już nie naprawisz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "Drewna, które jest ucięte za krótko, nie da się znowu przedłużyć. Dlatego mierz dwa razy i narysuj linię, zanim zaczniesz piłować. Piłuj obok linii, po stronie kawałka, którego nie potrzebujesz. Trzymaj drewno nieruchomo: na stole warsztatowym albo ściskiem, a nie na kolanie. Niech piła robi pracę, długimi, spokojnymi ruchami. Dłuto pchaj od siebie i od drugiej ręki. I dbaj o to, żeby dłuto i strug były ostre: tępe narzędzie łatwiej się ześlizguje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Zmierzę to jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': { m: "Musisz przyciąć deskę na wymiar. Zmierzyłeś ją raz, szybko. Co robisz?", f: "Musisz przyciąć deskę na wymiar. Zmierzyłaś ją raz, szybko. Co robisz?", x: "Musisz przyciąć deskę na wymiar. Jest zmierzona tylko raz, szybko. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Mierzysz jeszcze raz, potem rysujesz linię.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "Piłujesz teraz: pewnie jest dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "Piłujesz na oko, bez linii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Za długi kawałek możesz jeszcze raz przyciąć, za krótkiego nie naprawisz. Ponowne mierzenie to minuta; nowa deska to dużo więcej.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Trasowanie", // nieuw, nalezen
    'w.winkelhaak': "kątownik (pokazuje kąt prosty)", // nieuw, nalezen
    'w.verstekhaak': "kątownik do ukosów (45 stopni)", // nieuw, nalezen
    'w.zwaaihaak': "kątownik nastawny (sam ustawiasz kąt)", // nieuw, nalezen
    'w.kruishout': "znacznik stolarski (rysuje linię wzdłuż krawędzi)", // nieuw, nalezen
    'w.passer': "cyrkiel (rysuje koło)", // nieuw, nalezen
    'w.aftekenen': "trasować, zaznaczać (narysować, gdzie będziesz ciąć)", // nieuw, nalezen
    's.square.1': "Zaznacz linię kątownikiem.", // nieuw, nalezen
    's.square.2': "Ustaw kątownik nastawny na dobry kąt.", // nieuw, nalezen
    's.square.3': "Narysuj koło cyrklem.", // nieuw, nalezen
    'c.square.q': "Czy kąt jest prosty?", // nieuw, nalezen
    'c.square.a': "Tak, kątownik pasuje dokładnie.", // nieuw, nalezen
    'c.square': "Zaznaczaj od jednej prostej krawędzi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Zanim zaczniesz piłować albo wiercić, zaznaczasz gdzie. Używaj ostrego ołówka: gruba linia nie jest dokładna. Wybierz jedną prostą krawędź drewna i wszystko mierz od tej krawędzi. Grubą część kątownika mocno do niej przyciśnij i rysuj linię wzdłuż stali. Narysuj mały krzyżyk na kawałku, którego nie użyjesz. Potem piłujesz obok linii, po stronie krzyżyka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Najpierw to zaznaczę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Twój ołówek jest tępy i robi grubą linię. Chcesz zaznaczyć coś na desce. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Najpierw ostrzysz ołówek, potem rysujesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "I tak rysujesz linię, jest dobrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Zaznaczasz to paznokciem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Gruba linia ma kilka milimetrów szerokości. Wtedy nie wiesz, gdzie piłować, i kawałek nie jest dokładny.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Wiertarki i wkręty", // nieuw, nalezen
    'w.accuboor': "wiertarko-wkrętarka akumulatorowa", // nieuw, nalezen
    'w.boormachine': "wiertarka (z kablem)", // nieuw, nalezen
    'w.bitje': "bit, końcówka do wkrętarki", // nieuw, nalezen
    'w.plug': "kołek rozporowy", // nieuw, nalezen
    'w.schroevendraaier': "śrubokręt", // nieuw, nalezen
    'w.spijker': "gwóźdź", // nieuw, nalezen
    's.screw.1': "Wywierć dziurę i włóż do niej kołek.", // nieuw, nalezen
    's.screw.2': "Który bit pasuje do tego wkrętu?", // nieuw, nalezen
    's.screw.3': "Wbij gwóźdź w drewno.", // nieuw, nalezen
    'c.screw.q': "Gdzie jest wkrętarka?", // nieuw, nalezen
    'c.screw.a': "Na ładowarce, jest prawie naładowana.", // nieuw, nalezen
    'c.screw': "Popatrz, zanim zaczniesz wiercić", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Zanim zaczniesz wiercić w ścianie, pomyśl, co jest za nią. Rury i kable często idą prosto w górę, w dół albo w bok od gniazdka albo włącznika. Zapytaj, gdzie są, albo sprawdź wykrywaczem. Wybierz wiertło tej samej wielkości co kołek i wywierć dziurę trochę głębszą niż kołek. Używaj dobrego bitu do wkrętu: zły bit się ześlizguje i niszczy łeb wkrętu. Przy wierceniu noś okulary ochronne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Mogę tu wiercić?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Musisz wywiercić dziurę tuż nad gniazdkiem. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Najpierw pytasz, gdzie idzie kabel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Wiercisz: tam nigdy nie ma kabla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Wiercisz powoli, wtedy jest bezpiecznie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Kabel często idzie prosto w górę od gniazdka. Wiercenie w kabel jest niebezpieczne, a naprawa to dużo pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Mocowanie", // nieuw, nalezen
    'w.bevestigen': "mocować, przymocować (mocno przymocować coś do ściany)", // nieuw, nalezen
    'w.vastzetten': "dokręcić (kręcić, aż będzie mocno)", // nieuw, nalezen
    'w.lijmen': "kleić", // nieuw, nalezen
    'w.inbussleutel': "klucz imbusowy (klucz sześciokątny)", // nieuw, nalezen
    'w.kruisschroevendraaier': "śrubokręt krzyżakowy (końcówka w krzyżyk)", // nieuw, nalezen
    'w.platteschroevendraaier': "śrubokręt płaski", // nieuw, nalezen
    's.fix.1': "Przymocuj półkę do ściany.", // nieuw, nalezen
    's.fix.2': "Dokręć śrubę kluczem imbusowym.", // nieuw, nalezen
    's.fix.3': "Weź śrubokręt płaski, nie krzyżakowy.", // nieuw, nalezen
    'c.fix.q': "Jak mam przymocować tę półkę?", // nieuw, nalezen
    'c.fix.a': "Dwoma kołkami i dwoma wkrętami.", // nieuw, nalezen
    'c.fix': "Mocno, ale nie za mocno", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Wkręt albo śruba musi być mocno dokręcona, ale nie za mocno. Kręcisz za mocno, a gwint się niszczy albo drewno pęka. Kręć, aż się już nie rusza, i wtedy przestań. Na wkrętarce najpierw przekręć pierścień z liczbami na małą liczbę. Półka na ścianie potrzebuje kołków, które pasują do ściany: do kamienia potrzebne są inne kołki niż do cienkiej ścianki z płyty. Klej potrzebuje czasu: dociśnij części do siebie, przytrzymaj je ściskiem i poczekaj, aż klej wyschnie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "Czy półka jest dobrze przymocowana?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': { m: "Skleiłeś dwa kawałki drewna. Kolega chce od razu tego używać. Co robisz?", f: "Skleiłaś dwa kawałki drewna. Kolega chce od razu tego używać. Co robisz?", x: "Dwa kawałki drewna są świeżo sklejone. Kolega chce od razu tego używać. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Mówisz: klej musi najpierw wyschnąć.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Pozwalasz mu tego używać: klej jest szybki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Trzymasz to w rękach przez minutę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "Mokry klej jeszcze nie trzyma. Użyjesz tego za wcześnie, a części znowu się rozejdą. Wtedy musisz zaczynać od nowa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "Przy maszynie", // nieuw, nalezen
    'w.bedieningspaneel': "panel sterowania (przyciski i ekran maszyny)", // nieuw, nalezen
    'w.startknop': "przycisk start (zielony)", // nieuw, nalezen
    'w.hendel': "dźwignia", // nieuw, nalezen
    'w.afscherming': "osłona maszyny (osłona na ruchomych częściach)", // nieuw, nalezen
    'w.sensor': "czujnik (widzi, czy coś tam jest)", // nieuw, nalezen
    'w.signaallamp': "lampa sygnalizacyjna (kolorowe lampki na górze maszyny)", // nieuw, nalezen
    's.atmachine.1': "Naciśnij zielony przycisk start.", // nieuw, nalezen
    's.atmachine.2': "Lampa sygnalizacyjna jest czerwona. Jest awaria.", // nieuw, nalezen
    's.atmachine.3': "Nigdy nie zdejmuj osłony maszyny.", // nieuw, nalezen
    'c.atmachine.q': "Dlaczego maszyna ciągle się zatrzymuje?", // nieuw, nalezen
    'c.atmachine.a': "Czujnik nie widzi dobrze kartonu.", // nieuw, nalezen
    'c.atmachine': "Osłona zostaje na miejscu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Ruchome części maszyny mogą w niecałą sekundę wciągnąć rękę, rękaw albo włosy. Po to jest osłona. Nigdy jej nie zdejmuj i nigdy nie sięgaj za nią, kiedy maszyna pracuje. Osłona albo czujnik nie działa? Wtedy maszyna nie jest bezpieczna: zatrzymaj ją i powiedz kierownikowi zespołu. Coś się zablokowało? Najpierw zatrzymaj maszynę i dopilnuj, żeby nikt nie mógł jej włączyć, kiedy pracujesz. Jak to się robi, jest różne w każdej firmie: poproś o wyjaśnienie, zanim zaczniesz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "Osłona maszyny jest zepsuta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Karton utknął w maszynie, tuż za osłoną. Maszyna pracuje. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Najpierw zatrzymujesz maszynę, potem wołasz pomoc.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Szybko sięgasz ręką i wyciągasz karton.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Otwierasz osłonę, kiedy maszyna pracuje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Pracująca maszyna może wciągnąć twoją rękę, zanim zdążysz zareagować. Zatrzymanie jej to chwila; zraniona ręka to miesiące.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Mierzenie i sprawdzanie", // nieuw, nalezen
    'w.weegschaal': "waga", // nieuw, nalezen
    'w.meetklok': "czujnik zegarowy (mierzy bardzo małe różnice)", // nieuw, nalezen
    'w.loep': "lupa", // nieuw, nalezen
    'w.monster': "próbka (jeden produkt, który bierzesz do sprawdzenia)", // nieuw, nalezen
    'w.afkeurbak': "pojemnik na braki (na produkty, które nie są dobre)", // nieuw, nalezen
    'w.teller': "licznik (liczy produkty)", // nieuw, nalezen
    's.inspect.1': "Połóż produkt na wadze.", // nieuw, nalezen
    's.inspect.2': "Ten produkt jest uszkodzony. Idzie do pojemnika na braki.", // nieuw, nalezen
    's.inspect.3': "Patrzę na etykietę przez lupę.", // nieuw, nalezen
    'c.inspect.q': "Jak często mam brać próbkę?", // nieuw, nalezen
    'c.inspect.a': "Jedną co godzinę. Zapisz to na liście.", // nieuw, nalezen
    'c.inspect': "Zapisuj, co sprawdzasz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "W fabryce sprawdzasz produkty w czasie pracy: ważysz je, mierzysz je albo dokładnie je oglądasz. Każde sprawdzenie od razu zapisz na liście, z godziną. Nie później, z pamięci. Jeden produkt nie jest dobry? Włóż go do pojemnika na braki i dokładnie obejrzyj następne. Więcej produktów jest złych? Wtedy coś jest nie tak z maszyną. Od razu powiedz kierownikowi zespołu. Problem, który wcześnie się znajdzie, ratuje dużo produktów. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Więcej produktów jest złych.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "Waga pokazuje, że trzy produkty po kolei są za lekkie. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Od razu mówisz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Kładziesz je z powrotem na linię.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Nic nie mówisz: tak się zdarza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Trzy złe produkty po kolei wskazują na problem w maszynie. Im szybciej powiesz, tym mniej produktów się zmarnuje.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Pakowanie", // nieuw, nalezen
    'w.verpakking': "opakowanie", // nieuw, nalezen
    'w.krimpfolie': "folia termokurczliwa (folia, która od ciepła mocno się obkurcza)", // nieuw, nalezen
    'w.sealmachine': "zgrzewarka (zamyka opakowanie ciepłem)", // nieuw, nalezen
    'w.vulmateriaal': "wypełniacz (poduszki powietrzne albo papier w kartonie)", // nieuw, nalezen
    'w.afbreekmes': "nożyk z łamanym ostrzem", // nieuw, nalezen
    'w.tapepistool': "podajnik do taśmy (pistolet do taśmy)", // nieuw, nalezen
    's.packing.1': "Włóż wypełniacz do kartonu.", // nieuw, nalezen
    's.packing.2': "Zamknij karton podajnikiem do taśmy.", // nieuw, nalezen
    's.packing.3': "Zgrzewarka jest gorąca. Uwaga!", // nieuw, nalezen
    'c.packing.q': "Ile produktów idzie do jednego kartonu?", // nieuw, nalezen
    'c.packing.a': "Dwanaście. Tak jest napisane na liście.", // nieuw, nalezen
    'c.packing': "Tnij od siebie", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Pakowanie to szybka praca, a nożyk z łamanym ostrzem jest bardzo ostry. Zawsze tnij od siebie i od drugiej ręki. Po każdym cięciu chowaj ostrze, także wtedy, gdy odkładasz nożyk na chwilę. Tępy kawałek ostrza odłamuj ostrożnie i wyrzucaj go do pojemnika na stare ostrza, a nie do zwykłego kosza. Zgrzewarka i opalarka do folii termokurczliwej robią się bardzo gorące: nie dotykaj gorących części. I sprawdzaj każdy karton: dobry produkt, dobra liczba i prosto naklejona etykieta. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Najpierw chowam ostrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Na chwilę kładziesz nożyk na stole. Ostrze jest jeszcze wysunięte. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Najpierw chowasz ostrze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Zostawiasz go: zaraz znowu będzie ci potrzebny.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Wkładasz go tak do kieszeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Wysunięte ostrze na stole albo w kieszeni może skaleczyć ciebie albo kolegę. Schowanie go trwa sekundę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Konserwacja", // nieuw, nalezen
    'w.persluchtpistool': "pistolet na sprężone powietrze", // nieuw, nalezen
    'w.steeksleutel': "klucz płaski", // nieuw, nalezen
    'w.oliekannetje': "oliwiarka", // nieuw, nalezen
    'w.smeerpistool': "smarownica", // nieuw, nalezen
    'w.lekbak': "taca na olej (łapie cieknący olej)", // nieuw, nalezen
    'w.poetsdoek': "czyściwo, szmata do czyszczenia", // nieuw, nalezen
    's.upkeep.1': "Cieknie olej. Podstaw pod to tacę na olej.", // nieuw, nalezen
    's.upkeep.2': "Wytrzyj olej szmatą do czyszczenia.", // nieuw, nalezen
    's.upkeep.3': "Nigdy nie kieruj pistoletu na sprężone powietrze na nikogo.", // nieuw, nalezen
    'c.upkeep.q': "Kiedy smarujemy maszynę?", // nieuw, nalezen
    'c.upkeep.a': "W każdy poniedziałek, przed pierwszą zmianą.", // nieuw, nalezen
    'c.upkeep': "Czysta maszyna pokazuje swoje problemy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "Mała konserwacja to często część pracy: wycieranie, oliwienie i smarowanie. Rób to tylko wtedy, gdy maszyna jest wyłączona, i gdy wiesz, jak to robić. Czystą maszynę łatwo sprawdzić: od razu widzisz wyciek albo luźną część. Olej na podłodze jest śliski. Podstaw tacę pod wyciek, wytrzyj podłogę i powiedz kierownikowi zespołu. Zaolejone szmaty wyrzucaj do specjalnego pojemnika. Nigdy nie kieruj pistoletu na sprężone powietrze na człowieka i nigdy nie czyść nim ubrania ani skóry. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "Z maszyny cieknie olej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Widzisz małą kałużę oleju pod maszyną. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Podstawiasz tacę na olej i zgłaszasz to.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Zostawiasz to: to tylko trochę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Kładziesz na to trochę papieru i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Wyciek robi się coraz większy, a na oleju na podłodze ludzie się ślizgają. Jeśli znajdziesz go wcześnie, naprawa jest mała.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Elektryka, rury i metal", // nieuw, nalezen
    'l.wiring': "Podłączanie przewodów", // nieuw, nalezen
    'w.draad': "przewód (jeden przewód w kablu)", // nieuw, nalezen
    'w.stopcontact': "gniazdko (w ścianie)", // nieuw, nalezen
    'w.schakelaar': "włącznik (do światła)", // nieuw, nalezen
    'w.lasklem': "szybkozłączka (łączy przewody)", // nieuw, nalezen
    'w.striptang': "ściągacz izolacji", // nieuw, nalezen
    'w.kabelgoot': "korytko kablowe (kanał na kable)", // nieuw, nalezen
    's.wiring.1': "Zdejmij z przewodu jeden centymetr izolacji.", // nieuw, nalezen
    's.wiring.2': "Zamocuj przewody w szybkozłączce.", // nieuw, nalezen
    's.wiring.3': "Kable idą do korytka kablowego.", // nieuw, nalezen
    'c.wiring.q': "Który przewód idzie gdzie?", // nieuw, nalezen
    'c.wiring.a': "Brązowy do brązowego, niebieski do niebieskiego.", // nieuw, nalezen
    'c.wiring': "Kolory mówią, do czego jest przewód", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "W budynku przewody mają stałe kolory. Brązowy (czasem czarny albo szary) doprowadza prąd. Niebieski prowadzi go z powrotem. Żółto-zielony to uziemienie: chroni ludzi i nigdy nie używa się go do niczego innego. Łącz ten sam kolor z tym samym kolorem. Zdejmuj tylko tyle izolacji, ile wchodzi do złączki: goła miedź nie może wystawać. Wciśnij przewód, a potem lekko za niego pociągnij, żeby sprawdzić, czy dobrze siedzi. Nie wiesz, który przewód jest który? Przerwij pracę i zapytaj.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "Jaki kolor ma uziemienie?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Podłączasz lampę. Ze złączki wystaje kawałek miedzi. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Skracasz go i podłączasz jeszcze raz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Zostawiasz tak: lampa działa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Owijasz go kawałkiem taśmy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "Goła miedź poza złączką może czegoś dotknąć. To może spowodować porażenie prądem albo zwarcie, także po kilku miesiącach.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Bezpieczne mierzenie i praca", // nieuw, nalezen
    'w.multimeter': "multimetr (mierzy prąd)", // nieuw, nalezen
    'w.spanningzoeker': "próbnik napięcia (śrubokręt z małą lampką)", // nieuw, nalezen
    'w.meterkast': "skrzynka z bezpiecznikami", // nieuw, nalezen
    'w.zekering': "bezpiecznik (wyłącza prąd, kiedy coś jest nie tak)", // nieuw, nalezen
    'w.hangslot': "kłódka", // nieuw, nalezen
    'w.aardedraad': "przewód uziemiający (żółto-zielony)", // nieuw, nalezen
    's.testing.1': "Bezpiecznik się wyłączył.", // nieuw, nalezen
    's.testing.2': "Załóż kłódkę na wyłącznik.", // nieuw, nalezen
    's.testing.3': "Najpierw zmierz multimetrem.", // nieuw, nalezen
    'c.testing.q': "Czy mogę otworzyć skrzynkę z bezpiecznikami?", // nieuw, nalezen
    'c.testing.a': "Nie, to robi elektryk.", // nieuw, nalezen
    'c.testing': "Wyłączone, zablokowane, zmierzone", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Zanim zaczniesz pracę przy elektryce, zrób trzy kroki. Wyłącz: właściwy bezpiecznik w skrzynce z bezpiecznikami, nie tylko włącznik na ścianie. Zablokuj: załóż na niego swoją kłódkę i trzymaj klucz przy sobie, żeby nikt nie mógł znowu włączyć prądu. Zmierz: sprawdź próbnikiem napięcia albo multimetrem, że naprawdę nie ma prądu. Dopiero wtedy zaczynasz. Bezpiecznik ciągle się wyłącza? Nie włączaj go raz za razem: powiedz przełożonemu. Pracuj przy elektryce tylko wtedy, gdy ktoś ci na to pozwolił. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Nie ma już na tym prądu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': { m: "Wyłączyłeś bezpiecznik. Kolega mówi: „Zaczynaj, jest wyłączony.” Co robisz?", f: "Wyłączyłaś bezpiecznik. Kolega mówi: „Zaczynaj, jest wyłączony.” Co robisz?", x: "Bezpiecznik jest wyłączony. Kolega mówi: „Zaczynaj, jest wyłączony.” Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Zakładasz kłódkę i najpierw mierzysz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Zaczynasz: kolega to wie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Szybko dotykasz przewodu, żeby sprawdzić.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Czasem wyłączony jest zły bezpiecznik albo ktoś go znowu włącza. Kłódka i pomiar pokazują, że jest naprawdę bezpiecznie.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Rury i woda", // nieuw, nalezen
    'w.buis': "rura", // nieuw, nalezen
    'w.koppeling': "złączka (łączy dwie rury)", // nieuw, nalezen
    'w.pijpsnijder': "obcinak do rur", // nieuw, nalezen
    'w.waterpomptang': "szczypce nastawne", // nieuw, nalezen
    'w.afsluiter': "zawór odcinający (zamyka wodę)", // nieuw, nalezen
    'w.teflontape': "taśma teflonowa (biała taśma na gwint rury)", // nieuw, nalezen
    's.pipes.1': "Zakręć zawór odcinający.", // nieuw, nalezen
    's.pipes.2': "Utnij rurę obcinakiem do rur.", // nieuw, nalezen
    's.pipes.3': "Owiń gwint taśmą teflonową.", // nieuw, nalezen
    'c.pipes.q': "Czy złączka jeszcze cieknie?", // nieuw, nalezen
    'c.pipes.a': "Trochę. Dokręcę ją jeszcze mocniej.", // nieuw, nalezen
    'c.pipes': "Najpierw zakręć wodę i przygotuj wiadro", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Zanim otworzysz rurę z wodą, zakręć zawór odcinający. Potem odkręć kran niżej, żeby rura się opróżniła. Pod miejscem, w którym pracujesz, postaw wiadro i połóż szmatę. Rurę miedzianą tnij obcinakiem do rur, nie piłą: koniec zostaje okrągły i czysty. Dokręcaj złączkę mocno, ale nie za mocno. Kiedy skończysz, powoli odkręć wodę i szukaj kropli. Z małego wycieku, który zostawisz, robią się szkody od wody.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "Czy woda jest zakręcona?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': { m: "Założyłeś nową złączkę. Odkręcasz wodę. Co minutę spada jedna mała kropla. Co robisz?", f: "Założyłaś nową złączkę. Odkręcasz wodę. Co minutę spada jedna mała kropla. Co robisz?", x: "Nowa złączka jest założona. Odkręcasz wodę. Co minutę spada jedna mała kropla. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Zakręcasz wodę i dokręcasz złączkę albo robisz ją od nowa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Zostawiasz tak: to tylko jedna kropla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Podstawiasz wiadro i idziesz do domu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Jedna kropla na minutę to wiele litrów na tydzień. Woda może zniszczyć podłogę albo sufit piętro niżej.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Obróbka metalu", // nieuw, nalezen
    'w.bankschroef': "imadło (mocno trzyma część na stole warsztatowym)", // nieuw, nalezen
    'w.vijl': "pilnik (do ręcznego wygładzania metalu)", // nieuw, nalezen
    'w.ijzerzaag': "piłka do metalu (piła do cięcia metalu)", // nieuw, nalezen
    'w.kolomboormachine': "wiertarka kolumnowa (duża wiertarka na stojaku)", // nieuw, nalezen
    'w.draadtap': "gwintownik (nacina gwint w otworze)", // nieuw, nalezen
    'w.braam': "zadzior (ostra krawędź po cięciu metalu)", // nieuw, nalezen
    's.metalwork.1': "Zamocuj metal w imadle.", // nieuw, nalezen
    's.metalwork.2': "Spiłuj zadzior.", // nieuw, nalezen
    's.metalwork.3': "Trzymaj ręce z dala od wiertła.", // nieuw, nalezen
    'c.metalwork.q': "Dlaczego krawędź jest taka ostra?", // nieuw, nalezen
    'c.metalwork.a': "Jest na niej jeszcze zadzior.", // nieuw, nalezen
    'c.metalwork': "Zamocuj, nigdy nie trzymaj w ręce", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "Przy wiertarce kolumnowej nigdy nie trzymaj małej części w ręce. Wiertło może ją złapać i bardzo szybko nią obrócić. Zamocuj ją w imadle. Zwiąż długie włosy i nie noś rękawic przy obracającym się wiertle: może wciągnąć rękawicę. Noś okulary ochronne. Po piłowaniu albo wierceniu metal ma zadzior: ostrą krawędź. Spiłuj go, zanim weźmiesz część do ręki albo komuś ją podasz. Wióry metalowe zmiataj szczotką, nie ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Najpierw to zamocuję.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Musisz wywiercić otwór w małym kawałku metalu. Imadło jest na innym stole. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Przynosisz imadło i mocujesz w nim kawałek.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "Mocno trzymasz go ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Zakładasz rękawice i trzymasz go.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Wiertło może złapać małą część i nią zakręcić. Wtedy uderza ona w twoją rękę. W imadle się nie rusza.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Montaż", // nieuw, nalezen
    'l.assembly': "Na linii montażowej", // nieuw, nalezen
    'w.werkinstructie': "instrukcja stanowiskowa (kartka z krokami)", // nieuw, nalezen
    'w.onderdelenbak': "pojemnik na części", // nieuw, nalezen
    'w.mal': "przyrząd montażowy (trzyma część we właściwym miejscu)", // nieuw, nalezen
    'w.rolbaan': "przenośnik rolkowy", // nieuw, nalezen
    'w.montagetafel': "stół montażowy", // nieuw, nalezen
    'w.voetpedaal': "pedał nożny (przełącznik, który naciskasz stopą)", // nieuw, nalezen
    's.assembly.1': "Najpierw przeczytaj instrukcję stanowiskową.", // nieuw, nalezen
    's.assembly.2': "Pojemnik na części jest prawie pusty.", // nieuw, nalezen
    's.assembly.3': "Włóż część do przyrządu montażowego.", // nieuw, nalezen
    'c.assembly.q': "Który krok jest teraz?", // nieuw, nalezen
    'c.assembly.a': "Krok czwarty. Popatrz do instrukcji stanowiskowej.", // nieuw, nalezen
    'c.assembly': "Rób kroki zawsze w tej samej kolejności", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "Na linii montażowej każdy krok ma swoje miejsce i swoją kolejność. Pokazuje je instrukcja stanowiskowa, często ze zdjęciami. Rób kroki za każdym razem w tej samej kolejności, także wtedy, gdy myślisz, że znasz szybszy sposób. Inna kolejność może dać produkt, który dobrze wygląda, ale nie działa. Pojemnik jest prawie pusty? Powiedz to na czas, żeby linia nie stanęła. Widzisz krok, który można zrobić lepiej? Powiedz kierownikowi zespołu: wtedy można to zmienić dla wszystkich.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Potrzebuję nowych części.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': { m: "Znalazłeś szybszy sposób na krok trzeci. W instrukcji stanowiskowej jest napisane coś innego. Co robisz?", f: "Znalazłaś szybszy sposób na krok trzeci. W instrukcji stanowiskowej jest napisane coś innego. Co robisz?", x: "Znasz szybszy sposób na krok trzeci. W instrukcji stanowiskowej jest napisane coś innego. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Najpierw pytasz kierownika zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "Od teraz robisz to po swojemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Uczysz kolegów swojego sposobu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "Kolejność często ma powód, którego nie widzisz. Jeśli twój sposób jest lepszy, można go wprowadzić dla wszystkich.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Skręcanie i łączenie", // nieuw, nalezen
    'w.schroefmachine': "wkrętarka (wisi nad linią)", // nieuw, nalezen
    'w.momentsleutel': "klucz dynamometryczny (klika, kiedy śruba jest dokręcona wystarczająco mocno)", // nieuw, nalezen
    'w.tiewrap': "opaska zaciskowa (do kabli)", // nieuw, nalezen
    'w.sluitring': "podkładka", // nieuw, nalezen
    'w.klinknagel': "nit", // nieuw, nalezen
    'w.popnageltang': "nitownica", // nieuw, nalezen
    's.fastening.1': "Dokręć śrubę kluczem dynamometrycznym.", // nieuw, nalezen
    's.fastening.2': "Nie zapomnij o podkładce.", // nieuw, nalezen
    's.fastening.3': "Zwiąż kable opaską zaciskową.", // nieuw, nalezen
    'c.fastening.q': "Jak mocno trzeba dokręcić tę śrubę?", // nieuw, nalezen
    'c.fastening.a': "Aż klucz dynamometryczny kliknie.", // nieuw, nalezen
    'c.fastening': "Kliknięcie wystarczy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Klucz dynamometryczny klika, kiedy śruba jest dokręcona wystarczająco mocno. Przy kliknięciu przestań: nie kręć dalej. Za mocno dokręcona śruba może pęknąć albo zniszczyć część, a za luźna może odpaść. Wkrętarka działa tak samo: sama się zatrzymuje. Wkładaj każdą podkładkę na swoje miejsce: brakującą podkładkę później trudno zobaczyć. Licz swoje śruby. Jedna zostaje albo brakuje ci jednej? Wtedy coś jest nie tak: powiedz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Została jedna śruba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Twój klucz dynamometryczny kliknął. Śruba wydaje ci się jeszcze trochę luźna. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Przerywasz i pytasz kierownika zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Dokręcasz ją jeszcze trochę ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Bierzesz dłuższy klucz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "Kliknięcie jest ustawione na właściwą siłę. Jeśli coś wydaje się nie tak, może trzeba sprawdzić klucz. Dalsze kręcenie może złamać śrubę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Podnoszenie i przenoszenie", // nieuw, nalezen
    'w.takel': "wciągnik (podnosi ciężkie części na łańcuchu)", // nieuw, nalezen
    'w.hijshaak': "hak do podnoszenia", // nieuw, nalezen
    'w.tilhulp': "podnośnik podciśnieniowy (trzyma część przyssawką)", // nieuw, nalezen
    'w.onderdelenkar': "wózek na części", // nieuw, nalezen
    'w.draaitafel': "stół obrotowy (obracasz część, a nie siebie)", // nieuw, nalezen
    'w.rolcontainer': "wózek klatkowy (wysoka klatka na kółkach)", // nieuw, nalezen
    's.handling.1': "Nie podnoś tego w pojedynkę. Użyj wciągnika.", // nieuw, nalezen
    's.handling.2': "Czy hak jest dobrze zamknięty?", // nieuw, nalezen
    's.handling.3': "Pchaj wózek na części, nie ciągnij go.", // nieuw, nalezen
    'c.handling.q': "Czy mogę stać pod wciągnikiem?", // nieuw, nalezen
    'c.handling.a': "Nie, nigdy pod wiszącym ładunkiem.", // nieuw, nalezen
    'c.handling': "Niech ciężką pracę robi wciągnik", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Ciężkie części podnosi się wciągnikiem albo innym urządzeniem do podnoszenia, a nie plecami. Zanim zaczniesz podnosić, sprawdź hak: zapadka musi się zamykać. Podnoś powoli i trzymaj ręce i stopy z dala od ładunku. Nigdy nie stój i nie chodź pod wiszącym ładunkiem. Do obracania części używaj stołu obrotowego: wtedy nie musisz skręcać pleców. Wózek albo wózek klatkowy pchaj: widzisz, gdzie idziesz, a plecy mają mniej pracy. Używaj wciągnika tylko wtedy, gdy wiesz, jak to robić. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Używam wciągnika.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Część jest bardzo ciężka. Wciągnik jest zajęty jeszcze przez dziesięć minut. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Czekasz na wciągnik.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': "Szybko podnosisz ją w pojedynkę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "Ciągniesz ją po podłodze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Ciężka część może w jedną sekundę uszkodzić ci plecy. Dziesięć minut czekania jest lepsze niż miesiące bólu.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "Kontrola końcowa", // nieuw, nalezen
    'w.typeplaatje': "tabliczka znamionowa (mała metalowa tabliczka z typem i numerem)", // nieuw, nalezen
    'w.stempel': "pieczątka", // nieuw, nalezen
    'w.testbank': "stanowisko testowe", // nieuw, nalezen
    'w.goedkeursticker': "naklejka OK (zielona naklejka: produkt jest dobry)", // nieuw, nalezen
    'w.kras': "rysa", // nieuw, nalezen
    'w.barst': "pęknięcie", // nieuw, nalezen
    's.finalcheck.1': "Tabliczka znamionowa jest krzywo przymocowana.", // nieuw, nalezen
    's.finalcheck.2': "Na tym produkcie jest rysa.", // nieuw, nalezen
    's.finalcheck.3': "Bez naklejki OK to nie wychodzi.", // nieuw, nalezen
    'c.finalcheck.q': "Czy ten produkt jest dobry?", // nieuw, nalezen
    'c.finalcheck.a': "Nie, jest w nim pęknięcie.", // nieuw, nalezen
    'c.finalcheck': "Naklejkę dostają tylko dobre produkty", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "Kontrola końcowa to ostatnia szansa, żeby znaleźć błąd, zanim znajdzie go klient. Sprawdź każdy punkt na liście, także wtedy, gdy jest dużo pracy. Małą rysę albo pęknięcie łatwo przeoczyć: patrz przy dobrym świetle i z więcej niż jednej strony. Naklejkę OK albo pieczątkę daj dopiero wtedy, gdy każdy punkt jest dobry. Masz wątpliwości? Odłóż produkt na bok i zapytaj. Błąd znaleziony tutaj kosztuje mało, a błąd u klienta kosztuje dużo. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Ten produkt idzie na bok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Na linii jest dużo pracy. Widzisz małą rysę na produkcie, pod etykietą. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Odkładasz go na bok i mówisz kierownikowi zespołu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Naklejasz naklejkę: rysa jest mała.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Przesuwasz etykietę na rysę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Mała rysa może być znakiem problemu na linii. Ukrycie jej tylko przenosi problem do klienta.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Uprawa, sortowanie i szklarnia", // nieuw, nalezen
    'l.sowing': "Siew i sadzonki", // nieuw, nalezen
    'w.zaad': "nasiona", // nieuw, nalezen
    'w.zaaibak': "taca do wysiewu", // nieuw, nalezen
    'w.stek': "sadzonka (kawałek rośliny, który wypuszcza nowe korzenie)", // nieuw, nalezen
    'w.potgrond': "ziemia doniczkowa", // nieuw, nalezen
    'w.kweekpot': "doniczka do uprawy", // nieuw, nalezen
    'w.gieter': "konewka", // nieuw, nalezen
    's.sowing.1': "Włóż dwa nasiona do każdej komórki.", // nieuw, nalezen
    's.sowing.2': "Włóż sadzonkę do ziemi doniczkowej.", // nieuw, nalezen
    's.sowing.3': "Daj młodym roślinom trochę wody.", // nieuw, nalezen
    'c.sowing.q': "Jak głęboko ma iść nasiono?", // nieuw, nalezen
    'c.sowing.a': "Pół centymetra. Nie głębiej.", // nieuw, nalezen
    'c.sowing': "Małe rośliny potrzebują delikatnej ręki", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Młode rośliny są słabe. Sadzonkę albo siewkę trzymaj za liść, nie za łodygę: liść odrośnie, złamana łodyga nie. Dociskaj ziemię delikatnie, nie mocno. Podlewaj powoli, drobnym strumieniem, żeby nie wypłukać nasion. Pracuj czystymi rękami i z czystymi tacami: młode rośliny łatwo chorują. Na każdej tacy napisz datę i rodzaj rośliny, żeby każdy wiedział, co w niej jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Trzymam ją za liść.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Musisz przesadzić małą siewkę do doniczki. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Delikatnie trzymasz ją za liść.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Wyciągasz ją za łodygę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Wyciskasz ją razem z ziemią.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Liść może odrosnąć. Złamana łodyga nie, i wtedy roślina umiera.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Sortowanie i pakowanie", // nieuw, nalezen
    'w.tros': "kiść (pomidory na jednej łodyżce)", // nieuw, nalezen
    'w.bakje': "pojemnik (małe pudełko na owoce)", // nieuw, nalezen
    'w.sorteermachine': "sortownica, maszyna do sortowania", // nieuw, nalezen
    'w.etiketpistool': "metkownica", // nieuw, nalezen
    'w.kleurenkaart': "wzornik kolorów (pokazuje, jak dojrzały ma być owoc)", // nieuw, nalezen
    'w.tomatenschaar': "nożyczki do zbioru", // nieuw, nalezen
    's.sorting.1': "Ostrożnie włóż kiście do skrzynki.", // nieuw, nalezen
    's.sorting.2': "Ten pomidor jest za dojrzały. Idzie na bok.", // nieuw, nalezen
    's.sorting.3': "Spójrz na wzornik kolorów.", // nieuw, nalezen
    'c.sorting.q': "Czy ten pomidor jest wystarczająco dojrzały?", // nieuw, nalezen
    'c.sorting.a': "Nie, jeszcze za zielony. Zostaw go na roślinie.", // nieuw, nalezen
    'c.sorting': "Liczy się każdy owoc", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "Owoce i warzywa łatwo się obijają. Odkładaj je, nie upuszczaj ich i nie rzucaj. Dziś nie widzisz obicia, ale jutro owoc jest miękki i brązowy. Patrz na wzornik kolorów, żeby wiedzieć, który kolor idzie gdzie. Uszkodzony albo zgniły owoc odłóż na bok: jeden zły owoc w pojemniku może zepsuć pozostałe. Utrzymuj pojemniki i skrzynki w czystości i nigdy nie stawiaj ich na podłodze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Ten jest uszkodzony.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Pakujesz pojemniki. Jeden pomidor ma miękką brązową plamę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Odkładasz go na bok.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Chowasz go na dnie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "I tak go pakujesz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Zgniły pomidor sprawia, że inne gniją szybciej. Klient go znajduje i cały pojemnik wraca.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "Szklarnia i jej klimat", // nieuw, nalezen
    'w.buisrailkar': "wózek na rurach (jeździ po rurach grzewczych)", // nieuw, nalezen
    'w.druppelaar': "kroplownik (daje wodę kropla po kropli)", // nieuw, nalezen
    'w.luchtraam': "wietrznik dachowy (okno w dachu)", // nieuw, nalezen
    'w.kasscherm': "ekran szklarniowy (tkanina pod dachem)", // nieuw, nalezen
    'w.ventilator': "wentylator", // nieuw, nalezen
    'w.thermometer': "termometr", // nieuw, nalezen
    's.greenhouse.1': "Przejedź wózkiem na rurach do końca rzędu.", // nieuw, nalezen
    's.greenhouse.2': "Kroplownik jest luźny.", // nieuw, nalezen
    's.greenhouse.3': "Jest ciepło. Wietrzniki się otwierają.", // nieuw, nalezen
    'c.greenhouse.q': "Dlaczego w szklarni jest tak ciepło?", // nieuw, nalezen
    'c.greenhouse.a': "Ekran jest zamknięty, wietrzniki też.", // nieuw, nalezen
    'c.greenhouse': "Klimat zostaw komputerowi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "W szklarni klimat ustawia komputer: wietrzniki, ekran, ogrzewanie i wodę. Nie otwieraj wietrznika i nie zmieniaj ustawień na własną rękę. Widzisz coś dziwnego, na przykład kroplownik, który cieknie, albo wietrznik, który się nie zamyka? Powiedz przełożonemu. Wózek na rurach jeździ po rurach grzewczych: używaj go tylko wtedy, gdy wiesz, jak to robić. Trzymaj stopy na platformie i nigdy nie dotykaj rur: mogą być gorące. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Ten kroplownik cieknie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Kroplownik jest luźny. Woda leci na podłogę. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Wkładasz go z powrotem i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Zostawiasz to: to tylko woda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Zakręcasz wodę dla całego rzędu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Luźny kroplownik marnuje wodę, roślina dostaje jej za mało, a mokra podłoga jest śliska.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Szkodniki i czysta praca", // nieuw, nalezen
    'w.luis': "mszyca (mały zielony owad na roślinach)", // nieuw, nalezen
    'w.vangplaat': "tablica lepowa (żółta karta, która łapie owady)", // nieuw, nalezen
    'w.rups': "gąsienica", // nieuw, nalezen
    'w.sluipwesp': "osa pasożytnicza (mała osa, która zabija szkodniki)", // nieuw, nalezen
    'w.schimmel': "pleśń", // nieuw, nalezen
    'w.ontsmettingsmat': "mata dezynfekcyjna (stajesz na niej przy drzwiach)", // nieuw, nalezen
    's.pests.1': "Na tym liściu są mszyce.", // nieuw, nalezen
    's.pests.2': "Powieś tablicę lepową nad roślinami.", // nieuw, nalezen
    's.pests.3': "Przejdź po macie dezynfekcyjnej.", // nieuw, nalezen
    'c.pests.q': "Mogę zabić tę osę?", // nieuw, nalezen
    'c.pests.a': "Nie, to osa pasożytnicza. Ona nam pomaga.", // nieuw, nalezen
    'c.pests': "Nie przenoś chorób z rzędu do rzędu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Choroba albo szkodnik szybko się rozprzestrzenia w szklarni. Możesz go przenieść na rękach, ubraniu i narzędziach. Dlatego przy każdych drzwiach przechodź po macie dezynfekcyjnej i myj ręce, kiedy idziesz do innej części szklarni. Zaczynaj pracę w zdrowych rzędach, a kończ w chorych. Widzisz na roślinie owady, plamy albo pleśń? Nie dotykaj jej, ale powiedz przełożonemu, gdzie to jest. Niektóre owady w szklarni są pomocnikami: zostaw je w spokoju. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Tu jest pleśń.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Widzisz szarą pleśń na kilku roślinach w swoim rzędzie. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Mówisz przełożonemu, gdzie to jest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Obrywasz złe liście i pracujesz dalej.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Nic nie mówisz: to tylko kilka roślin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "Pleśń szybko się rozprzestrzenia. Przełożony wie, co robić i od czego zacząć.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Opony, olej i hamulce", // nieuw, nalezen
    'l.tyres': "Wymiana opon", // nieuw, nalezen
    'w.wielbout': "śruba koła", // nieuw, nalezen
    'w.slagmoersleutel': "klucz udarowy", // nieuw, nalezen
    'w.bandenspanningsmeter': "manometr do opon", // nieuw, nalezen
    'w.bandenprofiel': "bieżnik opony (rowki w oponie)", // nieuw, nalezen
    'w.velg': "felga", // nieuw, nalezen
    'w.bandenwisselaar': "montażownica do opon (maszyna do zdejmowania opony z felgi)", // nieuw, nalezen
    's.tyres.1': "Dokręć śruby koła na krzyż.", // nieuw, nalezen
    's.tyres.2': "Bieżnik opony jest za niski.", // nieuw, nalezen
    's.tyres.3': "Zmierz ciśnienie manometrem do opon.", // nieuw, nalezen
    'c.tyres.q': "Te opony trzeba zdjąć?", // nieuw, nalezen
    'c.tyres.a': "Tak, bieżnika prawie już nie ma.", // nieuw, nalezen
    'c.tyres': "Wkręć ręką, dokręć kluczem dynamometrycznym", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Klucz udarowy jest szybki i bardzo mocny. Używaj go do odkręcania śrub koła, ale nie do mocnego dokręcania. Najpierw wkręć śruby ręką. Potem dokręć je na krzyż kluczem dynamometrycznym, z siłą podaną dla tego samochodu. Koło, które nie jest dobrze dokręcone, może odpaść w czasie jazdy. Sprawdź bieżnik i ciśnienie każdej opony, którą bierzesz do ręki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Najpierw wkręcam je ręką.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Zakładasz koło z powrotem. Kolega mówi: „Użyj klucza udarowego, tak jest szybciej.” Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Wkręcasz je ręką, potem używasz klucza dynamometrycznego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Mocno dokręcasz je kluczem udarowym.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Wkręcasz je ręką i tak zostawiasz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Klucz udarowy może dokręcić śrubę za mocno albo za słabo. Tylko klucz dynamometryczny daje właściwą siłę.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Wymiana oleju", // nieuw, nalezen
    'w.oliefilter': "filtr oleju", // nieuw, nalezen
    'w.oliepeilstok': "bagnet oleju (pokazuje, ile jest oleju)", // nieuw, nalezen
    'w.opvangbak': "wanna na olej (łapie stary olej)", // nieuw, nalezen
    'w.trechter': "lejek", // nieuw, nalezen
    'w.aftapplug': "korek spustowy", // nieuw, nalezen
    'w.olievat': "beczka na olej", // nieuw, nalezen
    's.oilchange.1': "Postaw wannę na olej pod silnikiem.", // nieuw, nalezen
    's.oilchange.2': "Odkręć korek spustowy.", // nieuw, nalezen
    's.oilchange.3': "Spójrz na bagnet oleju.", // nieuw, nalezen
    'c.oilchange.q': "Ile oleju trzeba wlać?", // nieuw, nalezen
    'c.oilchange.a': "Cztery litry. Potem spójrz na bagnet.", // nieuw, nalezen
    'c.oilchange': "Stary olej do beczki, nie do kanalizacji", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "Stary olej szkodzi wodzie i glebie. Trochę oleju może zabrudzić dużo wody. Dlatego zbierz cały stary olej do wanny na olej i przelej go do beczki na stary olej. Nigdy nie wylewaj go do kanalizacji ani do zlewu. Stare filtry i zaolejone szmaty idą do osobnego pojemnika. Gorący olej może poparzyć skórę: najpierw pozwól silnikowi trochę ostygnąć i noś rękawice. Rozlany olej od razu sprzątnij: olej na podłodze jest śliski. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Gdzie idzie stary olej?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "Wanna na olej jest pełna starego oleju. Beczka stoi na drugim końcu warsztatu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Ostrożnie zanosisz ją do beczki.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Wylewasz olej do kanalizacji na zewnątrz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Zostawiasz ją pod samochodem na później.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "Stary olej w kanalizacji brudzi wodę. Pełną wannę pod samochodem ktoś przewróci nogą.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Hamulce i światła", // nieuw, nalezen
    'w.remschijf': "tarcza hamulcowa", // nieuw, nalezen
    'w.remblok': "klocek hamulcowy", // nieuw, nalezen
    'w.koplamp': "reflektor (przednie światło)", // nieuw, nalezen
    'w.remvloeistof': "płyn hamulcowy", // nieuw, nalezen
    'w.remklauw': "zacisk hamulcowy", // nieuw, nalezen
    'w.achterlamp': "tylne światło", // nieuw, nalezen
    's.brakes.1': "Klocki hamulcowe są zużyte.", // nieuw, nalezen
    's.brakes.2': "Sprawdź płyn hamulcowy.", // nieuw, nalezen
    's.brakes.3': "Lewe tylne światło nie działa.", // nieuw, nalezen
    'c.brakes.q': "Tarczę hamulcową też trzeba wymienić?", // nieuw, nalezen
    'c.brakes.a': "Tak, jest za cienka.", // nieuw, nalezen
    'c.brakes': "Hamulce: sprawdź dwa razy", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Hamulce ratują ludziom życie. Dlatego pracuj spokojnie i sprawdzaj swoją pracę dwa razy. Po nowych klockach albo tarczach naciśnij kilka razy pedał hamulca, zanim samochód ruszy: pierwsze naciśnięcie często idzie za głęboko. Płyn hamulcowy szkodzi skórze i lakierowi: noś rękawice i od razu wycieraj krople. Nie wydmuchuj pyłu z hamulców sprężonym powietrzem: czyść go zmywaczem do hamulców i szmatką. Zanim samochód wyjedzie, sprawdź każde światło, także światła hamowania.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Kilka razy naciskam pedał hamulca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': { m: "Założyłeś nowe klocki hamulcowe. Samochód musi wyjechać na zewnątrz. Co robisz?", f: "Założyłaś nowe klocki hamulcowe. Samochód musi wyjechać na zewnątrz. Co robisz?", x: "Nowe klocki hamulcowe są już założone. Samochód musi wyjechać na zewnątrz. Co robisz?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Kilka razy naciskasz pedał hamulca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Od razu wyjeżdżasz nim na zewnątrz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Wypychasz go bez sprawdzania.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Po nowych klockach pedał za pierwszym razem może wejść za głęboko. Wtedy samochód się nie zatrzyma.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Odczyt błędów i zlecenie", // nieuw, nalezen
    'w.diagnosecomputer': "tester diagnostyczny (odczytuje błędy samochodu)", // nieuw, nalezen
    'w.waarschuwingslampje': "kontrolka ostrzegawcza (na desce rozdzielczej)", // nieuw, nalezen
    'w.werkorder': "zlecenie (co trzeba zrobić przy samochodzie)", // nieuw, nalezen
    'w.kentekenplaat': "tablica rejestracyjna", // nieuw, nalezen
    'w.autosleutel': "kluczyk do samochodu", // nieuw, nalezen
    'w.stoelhoes': "pokrowiec na fotel (chroni fotel przed brudem)", // nieuw, nalezen
    's.diagnosis.1': "Podłącz tester diagnostyczny.", // nieuw, nalezen
    's.diagnosis.2': "Kontrolka ostrzegawcza się świeci.", // nieuw, nalezen
    's.diagnosis.3': "Połóż pokrowiec na fotelu.", // nieuw, nalezen
    'c.diagnosis.q': "Co trzeba zrobić przy tym samochodzie?", // nieuw, nalezen
    'c.diagnosis.a': "Spójrz na zlecenie.", // nieuw, nalezen
    'c.diagnosis': "Traktuj samochód jak swój", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Klient daje ci swój samochód i swój kluczyk. Dbaj o jedno i drugie. Zanim wsiądziesz, załóż pokrowiec na fotel i połóż matę na podłodze. Rób tylko to, co jest w zleceniu. Znajdujesz coś innego, co jest nie tak? Zapisz to i powiedz przełożonemu: decyduje klient. Trzymaj kluczyk na jego miejscu, z jego etykietą. Nie używaj radia, telefonu ani rzeczy w samochodzie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Tego nie ma w zleceniu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Wymieniasz olej. Jedna opona jest prawie łysa. Nie ma tego w zleceniu. Co robisz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Zapisujesz to i mówisz przełożonemu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Od razu wymieniasz oponę.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Nic nie mówisz: to nie twoja praca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "Klient decyduje, co się robi i za co płaci. Ale musi wiedzieć, że opona jest niebezpieczna.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Koszenie i przycinanie", // nieuw, nalezen
    'l.mowing': "Koszenie trawy", // nieuw, nalezen
    'w.gras': "trawa", // nieuw, nalezen
    'w.maaien': "kosić (ścinać trawę)", // nieuw, nalezen
    'w.grasmaaier': "kosiarka", // nieuw, nalezen
    'w.zitmaaier': "kosiarka samojezdna (kosiarka, na której siedzisz)", // nieuw, nalezen
    'w.bosmaaier': "kosa spalinowa (kosiarka na długim drążku)", // nieuw, nalezen
    'w.gelaatsscherm': "osłona twarzy", // nieuw, nalezen
    's.mowing.1': "Najpierw skoś trawę wzdłuż krawędzi.", // nieuw, nalezen
    's.mowing.2': "Trawa jest za mokra. Skosimy jutro.", // nieuw, nalezen
    's.mowing.3': "Załóż osłonę twarzy.", // nieuw, nalezen
    'c.mowing.q': "Mogę wziąć kosiarkę samojezdną?", // nieuw, nalezen
    'c.mowing.a': "Tak, ale najpierw zbierz kamienie.", // nieuw, nalezen
    'c.mowing': "Kamienie lecą daleko", // nieuw, nalezen
    'c.mowing.b': "Kosiarka albo kosa spalinowa może wyrzucić kamień bardzo daleko i bardzo mocno. Dlatego najpierw przejdź po trawie i zbierz kamienie, szkło i gałęzie. Noś osłonę twarzy albo okulary ochronne, ochronniki słuchu i obuwie ochronne. Trzymaj innych ludzi daleko od siebie. Ktoś podchodzi blisko? Zatrzymaj maszynę. Nigdy nie wkładaj ręki pod kosiarkę, kiedy silnik pracuje: wyłącz go i poczekaj, aż nóż przestanie się kręcić. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.mowing.p': "Proszę zachować odstęp.", // nieuw, nalezen
    'c.mowing.s': "Pracujesz kosą spalinową. W twoją stronę idzie mężczyzna z psem. Co robisz?", // nieuw, nalezen
    'c.mowing.o1': "Zatrzymujesz maszynę, aż on przejdzie.", // nieuw, nalezen
    'c.mowing.o2': "Pracujesz dalej: on cię widzi.", // nieuw, nalezen
    'c.mowing.o3': "Odwracasz się od niego i pracujesz dalej.", // nieuw, nalezen
    'c.mowing.w': "Kamień z kosy spalinowej może mocno kogoś zranić, także z daleka.", // nieuw, nalezen
    'l.pruning': "Przycinanie", // nieuw, nalezen
    'w.snoeien': "przycinać (obcinać gałęzie rośliny)", // nieuw, nalezen
    'w.snoeischaar': "sekator", // nieuw, nalezen
    'w.tak': "gałąź", // nieuw, nalezen
    'w.struik': "krzew, krzak", // nieuw, nalezen
    'w.boom': "drzewo", // nieuw, nalezen
    'w.snoeizaag': "piłka do gałęzi", // nieuw, nalezen
    's.pruning.1': "Przytnij krzaki wzdłuż ścieżki.", // nieuw, nalezen
    's.pruning.2': "Ta gałąź jest martwa. Odetnij ją piłą.", // nieuw, nalezen
    's.pruning.3': "Połóż gałęzie na kupkę.", // nieuw, nalezen
    'c.pruning.q': "Które gałęzie trzeba obciąć?", // nieuw, nalezen
    'c.pruning.a': "Tylko martwe gałęzie.", // nieuw, nalezen
    'c.pruning': "Czyste cięcie goi się najlepiej", // nieuw, nalezen
    'c.pruning.b': "Przycinaj ostrym, czystym sekatorem. Czyste cięcie szybko się goi, a poszarpana gałąź choruje. Tnij tuż nad pąkiem albo boczną gałęzią i nie zostawiaj długiego kawałka. Najpierw obetnij martwe i złamane gałęzie. Trzymaj drugą rękę z dala od ostrzy. Noś rękawice: niektóre rośliny mają kolce albo powodują zaczerwienienie skóry. Po pracy wyczyść sekator.", // nieuw, nalezen
    'c.pruning.p': "Gdzie mam ciąć?", // nieuw, nalezen
    'c.pruning.s': "Twój sekator jest tępy. Szarpie gałęzie. Co robisz?", // nieuw, nalezen
    'c.pruning.o1': "Prosisz o ostry sekator.", // nieuw, nalezen
    'c.pruning.o2': "Mocniej ciągniesz za gałąź.", // nieuw, nalezen
    'c.pruning.o3': "Pracujesz dalej: to tylko krzak.", // nieuw, nalezen
    'c.pruning.w': "Tępy sekator szarpie gałąź. Roślina choruje, a ty musisz się bardziej męczyć.", // nieuw, nalezen
    'l.hedge': "Strzyżenie żywopłotu", // nieuw, nalezen
    'w.heg': "żywopłot", // nieuw, nalezen
    'w.heggenschaar': "nożyce do żywopłotu (maszyna, która tnie żywopłot)", // nieuw, nalezen
    'w.kruiwagen': "taczka", // nieuw, nalezen
    'w.hark': "grabie", // nieuw, nalezen
    'w.snoeiafval': "odpady zielone (ścięte gałęzie i liście)", // nieuw, nalezen
    'w.zeil': "plandeka (duża plastikowa płachta)", // nieuw, nalezen
    's.hedge.1': "Połóż plandekę pod żywopłotem.", // nieuw, nalezen
    's.hedge.2': "Przytnij żywopłot ładnie i prosto.", // nieuw, nalezen
    's.hedge.3': "Wywieź odpady zielone taczką.", // nieuw, nalezen
    'c.hedge.q': "Jak wysoki ma zostać żywopłot?", // nieuw, nalezen
    'c.hedge.a': "Do linki. Nie niżej.", // nieuw, nalezen
    'c.hedge': "Najpierw szukaj gniazd", // nieuw, nalezen
    'c.hedge.b': "Wiosną i latem ptaki robią gniazda w żywopłotach i krzakach. Gniazda, których ptaki używają, są chronione. Dlatego zanim zaczniesz ciąć, zajrzyj do żywopłotu. Widzisz gniazdo z jajkami albo młodymi ptakami? Nie tnij w tym miejscu i powiedz przełożonemu. Trzymaj nożyce do żywopłotu obiema rękami. Stój pewnie na ziemi albo na dobrej drabinie, nigdy na krześle ani na wiadrze. Trzymaj kabel za sobą.", // nieuw, nalezen
    'c.hedge.p': "Tu jest gniazdo.", // nieuw, nalezen
    'c.hedge.s': "W maju przycinasz żywopłot. Widzisz gniazdo z młodymi ptakami. Co robisz?", // nieuw, nalezen
    'c.hedge.o1': "Przerywasz w tym miejscu i mówisz przełożonemu.", // nieuw, nalezen
    'c.hedge.o2': "Ostrożnie tniesz dookoła gniazda.", // nieuw, nalezen
    'c.hedge.o3': "Wyjmujesz gniazdo i pracujesz dalej.", // nieuw, nalezen
    'c.hedge.w': "Gniazda, których ptaki używają, są chronione. Przełożony decyduje, co się stanie z tą częścią żywopłotu.", // nieuw, nalezen
    'l.chainsaw': "Piła łańcuchowa i dmuchawa do liści", // nieuw, nalezen
    'w.kettingzaag': "piła łańcuchowa", // nieuw, nalezen
    'w.stam': "pień (drzewa)", // nieuw, nalezen
    'w.zaagbroek': "spodnie ochronne do piły (zatrzymują łańcuch)", // nieuw, nalezen
    'w.bladblazer': "dmuchawa do liści", // nieuw, nalezen
    'w.bladeren': "liście", // nieuw, nalezen
    'w.jerrycan': "kanister (na paliwo)", // nieuw, nalezen
    's.chainsaw.1': "Załóż spodnie ochronne do piły.", // nieuw, nalezen
    's.chainsaw.2': "Zdmuchnij liście na kupkę.", // nieuw, nalezen
    's.chainsaw.3': "Tankuj tylko wtedy, gdy silnik jest zimny.", // nieuw, nalezen
    'c.chainsaw.q': "Mogę pracować piłą łańcuchową?", // nieuw, nalezen
    'c.chainsaw.a': "Jeszcze nie. Najpierw przejdziesz kurs.", // nieuw, nalezen
    'c.chainsaw': "Piła łańcuchowa tylko po szkoleniu", // nieuw, nalezen
    'c.chainsaw.b': "Piła łańcuchowa to jedno z najbardziej niebezpiecznych narzędzi w pracy na terenach zielonych. Pracuj nią tylko po kursie i wtedy, gdy przełożony ci pozwoli. Zawsze noś spodnie ochronne do piły, kask z osłoną twarzy i ochronnikami słuchu, rękawice i buty ochronne. Nigdy nie pracuj piłą łańcuchową w pojedynkę. Trzymaj ją obiema rękami i nigdy nie tnij powyżej ramion. Przy dmuchawie do liści: nigdy nie dmuchaj w stronę ludzi, samochodów ani otwartych okien. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.chainsaw.p': { m: "Nie miałem jeszcze kursu do tego.", f: "Nie miałam jeszcze kursu do tego.", x: "Nie mam jeszcze za sobą kursu do tego." }, // nieuw, nalezen
    'c.chainsaw.s': { m: "Kolega mówi: „Weź piłę łańcuchową, to łatwe.” Nigdy nie miałeś kursu. Co robisz?", f: "Kolega mówi: „Weź piłę łańcuchową, to łatwe.” Nigdy nie miałaś kursu. Co robisz?", x: "Kolega mówi: „Weź piłę łańcuchową, to łatwe.” Nie masz za sobą żadnego kursu. Co robisz?" }, // nieuw, nalezen
    'c.chainsaw.o1': "Mówisz, że jeszcze nie masz kursu.", // nieuw, nalezen
    'c.chainsaw.o2': "Ostrożnie próbujesz, tylko raz.", // nieuw, nalezen
    'c.chainsaw.o3': "Bierzesz ją i najpierw oglądasz filmik.", // nieuw, nalezen
    'c.chainsaw.w': "Piła łańcuchowa może w sekundę przeciąć ci nogę. Bez szkolenia nie wiesz, jak może odbić.", // nieuw, nalezen
    'u.planting': "Sadzenie, chwasty i ulica", // nieuw, nalezen
    'l.weeding': "Pielenie", // nieuw, nalezen
    'w.onkruid': "chwasty (rośliny, które trzeba usunąć)", // nieuw, nalezen
    'w.wieden': "pielić (wyrywać chwasty)", // nieuw, nalezen
    'w.schoffel': "motyka", // nieuw, nalezen
    'w.perk': "rabata (grządka z kwiatami)", // nieuw, nalezen
    'w.onkruidbrander': "wypalacz chwastów (zabija chwasty gorącem)", // nieuw, nalezen
    'w.wortel': "korzeń (rośliny)", // nieuw, nalezen
    's.weeding.1': "Wyrywaj chwasty razem z korzeniem.", // nieuw, nalezen
    's.weeding.2': "Przekop motyką rabatę przy wejściu.", // nieuw, nalezen
    's.weeding.3': "Uwaga: wypalacz chwastów jest gorący.", // nieuw, nalezen
    'c.weeding.q': "Czy to chwast?", // nieuw, nalezen
    'c.weeding.a': "Nie, to roślina. Zostaw ją.", // nieuw, nalezen
    'c.weeding': "Chwasty: korzeń musi zniknąć", // nieuw, nalezen
    'c.weeding.b': "Chwast odrasta, kiedy korzeń zostaje w ziemi. Dlatego wyrywaj go razem z korzeniem albo podcinaj motyką tuż pod ziemią. Pracuj, kiedy ziemia jest trochę mokra: wtedy korzeń łatwo wychodzi. Nie używaj oprysków na chwasty, chyba że cię tego nauczono i przełożony tak mówi. Wypalacz chwastów jest bardzo gorący: trzymaj go z dala od suchej trawy, liści, żywopłotów, samochodów i koszy na śmieci. Nigdy nie odkładaj go, kiedy się pali. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.weeding.p': "To chwast czy roślina?", // nieuw, nalezen
    'c.weeding.s': "Używasz wypalacza chwastów. Obok ścieżki rośnie suchy żywopłot. Co robisz?", // nieuw, nalezen
    'c.weeding.o1': "W tym miejscu wyrywasz chwasty ręką.", // nieuw, nalezen
    'c.weeding.o2': "Szybko wypalasz i idziesz dalej.", // nieuw, nalezen
    'c.weeding.o3': "Wypalasz i raz się oglądasz.", // nieuw, nalezen
    'c.weeding.w': "Suchy żywopłot szybko się zapala. Pożar blisko domów albo samochodów jest bardzo niebezpieczny.", // nieuw, nalezen
    'l.planting': "Sadzenie", // nieuw, nalezen
    'w.planten': "sadzić", // nieuw, nalezen
    'w.schep': "łopata, szpadel", // nieuw, nalezen
    'w.plantgat': "dołek do sadzenia", // nieuw, nalezen
    'w.kluit': "bryła korzeniowa (ziemia wokół korzeni)", // nieuw, nalezen
    'w.compost': "kompost", // nieuw, nalezen
    'w.boompaal': "palik do drzewa (słup, który podtrzymuje młode drzewo)", // nieuw, nalezen
    's.planting.1': "Wykop dołek do sadzenia drzewa.", // nieuw, nalezen
    's.planting.2': "Postaw drzewo prosto, obok palika.", // nieuw, nalezen
    's.planting.3': "Daj nowym roślinom dużo wody.", // nieuw, nalezen
    'c.planting.q': "Gdzie ma iść ta roślina?", // nieuw, nalezen
    'c.planting.a': "Z tyłu rabaty, przy murze.", // nieuw, nalezen
    'c.planting': "Pod ziemią: kable i rury", // nieuw, nalezen
    'c.planting.b': "Pod trawą i chodnikiem często są kable i rury: do prądu, gazu, wody i internetu. Dlatego kop ostrożnie. Widzisz w ziemi kolorową taśmę albo plastikową płytę albo trafiasz na coś twardego? Przestań kopać i powiedz przełożonemu. Nigdy nie kop dalej na siłę. Ciężkie drzewo albo dużą bryłę korzeniową podnoś razem z kimś, na ugiętych kolanach. Daj nowej roślinie wodę tego samego dnia. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.planting.p': "Trafiam na coś twardego.", // nieuw, nalezen
    'c.planting.s': "Kopiesz dołek do sadzenia. Twoja łopata trafia na czerwoną plastikową taśmę. Co robisz?", // nieuw, nalezen
    'c.planting.o1': "Przestajesz kopać i mówisz przełożonemu.", // nieuw, nalezen
    'c.planting.o2': "Ostrożnie kopiesz dalej, obok taśmy.", // nieuw, nalezen
    'c.planting.o3': "Wyciągasz taśmę i kopiesz dalej.", // nieuw, nalezen
    'c.planting.w': "Taśma w ziemi ostrzega, że pod nią jest kabel albo rura. Rura z gazem albo kabel z prądem jest bardzo niebezpieczny.", // nieuw, nalezen
    'l.roadside': "Praca przy drodze", // nieuw, nalezen
    'w.pion': "pachołek drogowy", // nieuw, nalezen
    'w.verkeer': "ruch drogowy", // nieuw, nalezen
    'w.stoep': "chodnik (ścieżka obok jezdni)", // nieuw, nalezen
    'w.fietser': "rowerzysta", // nieuw, nalezen
    'w.pijlwagen': "przyczepa ze strzałką (przyczepa z dużą strzałką, która ostrzega kierowców)", // nieuw, nalezen
    'w.berm': "pobocze (trawa obok drogi)", // nieuw, nalezen
    's.roadside.1': "Załóż kamizelkę. Pracujemy przy drodze.", // nieuw, nalezen
    's.roadside.2': "Postaw pachołki za busem.", // nieuw, nalezen
    's.roadside.3': "Uważaj na rowerzystów.", // nieuw, nalezen
    'c.roadside.q': "Mogę teraz przejść?", // nieuw, nalezen
    'c.roadside.a': "Nie, czekaj. Jedzie ciężarówka.", // nieuw, nalezen
    'c.roadside': "Przy drodze: bądź widoczny, zostań za pachołkami", // nieuw, nalezen
    'c.roadside.b': "Praca przy drodze jest niebezpieczna: kierowcy patrzą w telefon albo jadą za szybko. Dlatego zawsze noś kamizelkę odblaskową, także przy krótkiej pracy. Ustaw pachołki i znaki, zanim zaczniesz, a zbierz je na samym końcu. Zaparkuj busa jako osłonę między sobą a ruchem. Zostań za pachołkami. Nigdy nie cofaj się bez patrzenia i jeśli możesz, pracuj twarzą do ruchu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.roadside.p': "Najpierw ustawiam pachołki.", // nieuw, nalezen
    'c.roadside.s': "Musisz przyciąć jeden mały krzak przy drodze. To zajmie pięć minut. Co robisz?", // nieuw, nalezen
    'c.roadside.o1': "Zakładasz kamizelkę i ustawiasz pachołki.", // nieuw, nalezen
    'c.roadside.o2': "Robisz to szybko, bez pachołków.", // nieuw, nalezen
    'c.roadside.o3': "Prosisz kolegę, żeby pilnował samochodów.", // nieuw, nalezen
    'c.roadside.w': "Wypadek trwa tylko sekundę. Pięć minut bez pachołków to pięć minut bez ochrony.", // nieuw, nalezen
    'l.litter': "Śmieci i okolica", // nieuw, nalezen
    'w.zwerfafval': "śmieci (odpadki na ulicy)", // nieuw, nalezen
    'w.grijper': "chwytak do śmieci (kij, który łapie śmieci)", // nieuw, nalezen
    'w.vuilniszak': "worek na śmieci", // nieuw, nalezen
    'w.scherven': "potłuczone szkło (ostre kawałki)", // nieuw, nalezen
    'w.aanhanger': "przyczepa", // nieuw, nalezen
    'w.bewoner': "mieszkaniec (ktoś, kto tu mieszka)", // nieuw, nalezen
    's.litter.1': "Zbieraj śmieci chwytakiem.", // nieuw, nalezen
    's.litter.2': "Uwaga, tu jest potłuczone szkło.", // nieuw, nalezen
    's.litter.3': "Postaw worki na śmieci przy przyczepie.", // nieuw, nalezen
    'c.litter.q': "Kiedy będzie przycięte to drzewo?", // nieuw, nalezen
    'c.litter.a': "Nie wiem. Proszę zapytać w gminie.", // nieuw, nalezen
    'c.litter': "Nigdy nie dotykaj igły", // nieuw, nalezen
    'c.litter.b': "W parkach i krzakach czasem znajdziesz igłę od strzykawki. Nigdy nie podnoś jej ręką, także w rękawicach. Użyj chwytaka i włóż igłę do twardego pudełka albo butelki z zakrętką, nigdy do worka na śmieci. Powiedz przełożonemu. Igła cię ukłuła? Umyj ranę dużą ilością wody i od razu zadzwoń do lekarza. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.litter.p': "Tu leży igła.", // nieuw, nalezen
    'c.litter.s': "Widzisz igłę w trawie obok ławki. Co robisz?", // nieuw, nalezen
    'c.litter.o1': "Podnosisz ją chwytakiem.", // nieuw, nalezen
    'c.litter.o2': "Podnosisz ją w rękawicach.", // nieuw, nalezen
    'c.litter.o3': "Wkładasz ją do worka na śmieci.", // nieuw, nalezen
    'c.litter.w': "Igła może przenosić chorobę. Rękawice nie zatrzymują igły, a twarde pudełko chroni innych.", // nieuw, nalezen
    'u.frontdesk': "Recepcja, poczta i spotkania", // nieuw, nalezen
    'l.reception': "Na recepcji", // nieuw, nalezen
    'w.balie': "recepcja, lada", // nieuw, nalezen
    'w.bezoeker': "gość, odwiedzający", // nieuw, nalezen
    'w.intercom': "domofon (rozmawiasz z kimś przy drzwiach)", // nieuw, nalezen
    'w.doorverbinden': "przełączyć (rozmowę telefoniczną)", // nieuw, nalezen
    'w.toestel': "numer wewnętrzny (numer telefonu w budynku)", // nieuw, nalezen
    'w.wachtruimte': "poczekalnia", // nieuw, nalezen
    's.reception.1': "Dzień dobry, czy mogę w czymś pomóc?", // nieuw, nalezen
    's.reception.2': "Już przełączam.", // nieuw, nalezen
    's.reception.3': "Proszę usiąść w poczekalni.", // nieuw, nalezen
    'c.reception.q': "Mam spotkanie z panią Jansen.", // nieuw, nalezen
    'c.reception.a': "Chwileczkę. Zadzwonię do niej.", // nieuw, nalezen
    'c.reception': "Jesteś pierwszą twarzą firmy", // nieuw, nalezen
    'c.reception.b': "Na recepcji jesteś pierwszą osobą, którą spotyka gość. Podnieś wzrok, uśmiechnij się i przywitaj, także wtedy, gdy rozmawiasz przez telefon. Do gości mów „u” (grzecznie, jak „pan” albo „pani”). Odbieraj telefon, podając nazwę firmy i swoje imię. Nie znasz odpowiedzi? Powiedz to i znajdź kogoś, kto ją zna. Nigdy nie podawaj nieznajomym nazwisk, numerów telefonów ani pokojów pracowników.", // nieuw, nalezen
    'c.reception.p': "Dzień dobry, w czym mogę pomóc?", // nieuw, nalezen
    'c.reception.s': "Rozmawiasz przez telefon. Do recepcji podchodzi gość i czeka. Co robisz?", // nieuw, nalezen
    'c.reception.o1': "Podnosisz wzrok i pokazujesz, że zaraz podejdziesz.", // nieuw, nalezen
    'c.reception.o2': "Kończysz rozmowę, nie podnosząc wzroku.", // nieuw, nalezen
    'c.reception.o3': "Od razu odkładasz słuchawkę.", // nieuw, nalezen
    'c.reception.w': "Gość, którego ktoś zauważył, czeka spokojnie. Gość, którego nikt nie zauważa, czuje się niemile widziany.", // nieuw, nalezen
    'l.visitors': "Przyjmowanie gości", // nieuw, nalezen
    'w.bezoekerspasje': "przepustka dla gościa", // nieuw, nalezen
    'w.lift': "winda", // nieuw, nalezen
    'w.garderobe': "szatnia (gdzie wieszasz kurtkę)", // nieuw, nalezen
    'w.parkeerplaats': "miejsce parkingowe", // nieuw, nalezen
    'w.hal': "hol (duże pomieszczenie przy wejściu)", // nieuw, nalezen
    'w.begeleiden': "zaprowadzić kogoś (iść razem z nim)", // nieuw, nalezen
    's.visitors.1': "Proszę tu wpisać swoje nazwisko.", // nieuw, nalezen
    's.visitors.2': "Oto przepustka dla gościa.", // nieuw, nalezen
    's.visitors.3': "Zaprowadzę do windy.", // nieuw, nalezen
    'c.visitors.q': "Gdzie mogę zostawić kurtkę?", // nieuw, nalezen
    'c.visitors.a': "W szatni, obok windy.", // nieuw, nalezen
    'c.visitors': "Każdy gość się wpisuje", // nieuw, nalezen
    'c.visitors.b': "Każdy gość wpisuje swoje nazwisko na listę albo rejestruje się na ekranie i dostaje przepustkę dla gościa. Wtedy wiesz, kto jest w budynku. To ważne, kiedy jest pożar: wszyscy muszą wyjść, a ktoś sprawdza listę. Na koniec wizyty gość oddaje przepustkę. Nie wpuszczaj za sobą ludzi, których nie znasz: grzecznie zapytaj, do kogo przyszli. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.visitors.p': "Do kogo jest ta wizyta?", // nieuw, nalezen
    'c.visitors.s': "Za kolegą wchodzi jakiś mężczyzna. Nie ma przepustki. Co robisz?", // nieuw, nalezen
    'c.visitors.o1': "Grzecznie pytasz go, do kogo przyszedł.", // nieuw, nalezen
    'c.visitors.o2': "Puszczasz go: wszedł z pracownikiem.", // nieuw, nalezen
    'c.visitors.o3': "Od razu dzwonisz na policję.", // nieuw, nalezen
    'c.visitors.w': "W nagłej sytuacji musisz wiedzieć, kto jest w środku. I nie każdy, kto wchodzi, ma powód, żeby tam być.", // nieuw, nalezen
    'l.mailroom': "Poczta i paczki", // nieuw, nalezen
    'w.postkamer': "punkt pocztowy (pomieszczenie na pocztę)", // nieuw, nalezen
    'w.koerier': "kurier (ktoś, kto przynosi paczki)", // nieuw, nalezen
    'w.postvak': "przegródka na pocztę (jedna na osobę)", // nieuw, nalezen
    'w.envelop': "koperta", // nieuw, nalezen
    'w.afdeling': "dział", // nieuw, nalezen
    'w.postkar': "wózek na pocztę", // nieuw, nalezen
    's.mailroom.1': "Kurier przynosi paczkę.", // nieuw, nalezen
    's.mailroom.2': "Włóż listy do właściwej przegródki.", // nieuw, nalezen
    's.mailroom.3': "Ta paczka jest uszkodzona.", // nieuw, nalezen
    'c.mailroom.q': "Dla kogo jest ta paczka?", // nieuw, nalezen
    'c.mailroom.a': "Dla działu finansów, na drugim piętrze.", // nieuw, nalezen
    'c.mailroom': "Poczta jest prywatna", // nieuw, nalezen
    'c.mailroom.b': "Poczta i paczki są prywatne. Nigdy nie otwieraj listu ani paczki dla kogoś innego. Na każdej przesyłce sprawdź nazwisko i dział i włóż ją do właściwej przegródki. Kiedy kurier przynosi paczkę, obejrzyj ją, zanim podpiszesz: czy jest uszkodzona? Zapisz to. Paczka jest dziwna: śmierdzi, cieknie albo nie ma nadawcy? Nie otwieraj jej i powiedz przełożonemu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.mailroom.p': "Karton jest mokry i rozerwany.", // nieuw, nalezen
    'c.mailroom.s': "Kurier przynosi paczkę. Jeden róg jest mokry i rozerwany. Co robisz?", // nieuw, nalezen
    'c.mailroom.o1': "Zapisujesz uszkodzenie, zanim podpiszesz.", // nieuw, nalezen
    'c.mailroom.o2': "Podpisujesz i nikomu nic nie mówisz.", // nieuw, nalezen
    'c.mailroom.o3': "Otwierasz ją, żeby zobaczyć, czy wszystko jest.", // nieuw, nalezen
    'c.mailroom.w': "Po twoim podpisie wygląda tak, jakby paczka była w porządku. Wtedy nikt nie zapłaci za szkodę.", // nieuw, nalezen
    'l.meetingroom': "Przygotowanie sali spotkań", // nieuw, nalezen
    'w.vergaderzaal': "sala spotkań", // nieuw, nalezen
    'w.beamer': "projektor", // nieuw, nalezen
    'w.whiteboard': "tablica suchościeralna", // nieuw, nalezen
    'w.thermoskan': "dzbanek termiczny (utrzymuje gorącą kawę)", // nieuw, nalezen
    'w.kopje': "filiżanka", // nieuw, nalezen
    'w.koffieautomaat': "ekspres do kawy", // nieuw, nalezen
    's.meetingroom.1': "Postaw dziesięć krzeseł wokół stołu.", // nieuw, nalezen
    's.meetingroom.2': "Przygotuj kawę i herbatę.", // nieuw, nalezen
    's.meetingroom.3': "Projektor nie działa.", // nieuw, nalezen
    'c.meetingroom.q': "O której zaczyna się spotkanie?", // nieuw, nalezen
    'c.meetingroom.a': "O dziesiątej. Dopilnuj, żeby wszystko było gotowe.", // nieuw, nalezen
    'c.meetingroom': "Gotowe przed pierwszym gościem", // nieuw, nalezen
    'c.meetingroom.b': "Sala spotkań musi być gotowa, zanim wejdzie pierwsza osoba. Sprawdź krzesła, stół, projektor i kable. Postaw kawę, herbatę i wodę, z filiżankami i mlekiem. Noś gorące napoje ostrożnie i nigdy nad ludźmi. Po spotkaniu wyczyść stół i wszystko zabierz z powrotem. To, co słyszysz w sali spotkań, zachowujesz dla siebie.", // nieuw, nalezen
    'c.meetingroom.p': "Sala jest gotowa.", // nieuw, nalezen
    'c.meetingroom.s': "Spotkanie zaczyna się za pięć minut. Projektor nie działa. Co robisz?", // nieuw, nalezen
    'c.meetingroom.o1': "Od razu mówisz organizatorowi.", // nieuw, nalezen
    'c.meetingroom.o2': "Czekasz: może nikt go nie potrzebuje.", // nieuw, nalezen
    'c.meetingroom.o3': "Zostawiasz kartkę na stole.", // nieuw, nalezen
    'c.meetingroom.w': "Pięć minut to jeszcze czas, żeby to naprawić albo znaleźć inną salę. Później wszyscy czekają.", // nieuw, nalezen
    'u.maintenance': "Usterki, naprawy i przeprowadzki", // nieuw, nalezen
    'l.faults': "Zgłaszanie usterki", // nieuw, nalezen
    'w.melding': "zgłoszenie (mówisz, że coś jest nie tak)", // nieuw, nalezen
    'w.lekkage': "przeciek (wycieka woda)", // nieuw, nalezen
    'w.verwarming': "ogrzewanie", // nieuw, nalezen
    'w.airco': "klimatyzacja", // nieuw, nalezen
    'w.afvoer': "odpływ", // nieuw, nalezen
    'w.verstopt': "zatkany (nic nie przechodzi)", // nieuw, nalezen
    's.faults.1': "Zgłaszam usterkę.", // nieuw, nalezen
    's.faults.2': "W kuchni jest przeciek.", // nieuw, nalezen
    's.faults.3': "Odpływ toalety jest zatkany.", // nieuw, nalezen
    'c.faults.q': "Dlaczego jest tu tak zimno?", // nieuw, nalezen
    'c.faults.a': "Ogrzewanie jest zepsute. Technik przyjdzie jutro.", // nieuw, nalezen
    'c.faults': "Zgłoś, nie naprawiaj na własną rękę", // nieuw, nalezen
    'c.faults.b': "Widzisz coś zepsutego, na przykład przeciek, lampę, która nie świeci, albo drzwi, które się nie zamykają? Zgłoś to, także jeśli to coś małego: w systemie albo przełożonemu. Powiedz, gdzie to jest, co widzisz i od kiedy. Nie naprawiaj samodzielnie instalacji elektrycznej, gazowej ani ogrzewania. Czujesz gaz? Nie używaj w pobliżu przełącznika ani telefonu, otwórz okna, wyprowadź ludzi i wezwij pomoc na zewnątrz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.faults.p': "Chcę zgłosić usterkę.", // nieuw, nalezen
    'c.faults.s': "Na korytarzu z sufitu kapie woda. Co robisz?", // nieuw, nalezen
    'c.faults.o1': "Zgłaszasz to i podstawiasz wiadro.", // nieuw, nalezen
    'c.faults.o2': "Czekasz: może samo przestanie.", // nieuw, nalezen
    'c.faults.o3': "Otwierasz sufit, żeby zobaczyć.", // nieuw, nalezen
    'c.faults.w': "Mały przeciek może zrobić dużą szkodę. Wiadro utrzymuje podłogę suchą, więc nikt się nie poślizgnie.", // nieuw, nalezen
    'l.repairs': "Drobne naprawy", // nieuw, nalezen
    'w.vervangen': "wymienić (włożyć nowy)", // nieuw, nalezen
    'w.deurklink': "klamka", // nieuw, nalezen
    'w.scharnier': "zawias", // nieuw, nalezen
    'w.gereedschapskist': "skrzynka na narzędzia", // nieuw, nalezen
    'w.rookmelder': "czujnik dymu", // nieuw, nalezen
    'w.batterij': "bateria", // nieuw, nalezen
    's.repairs.1': "Wymień lampę na korytarzu.", // nieuw, nalezen
    's.repairs.2': "Klamka jest luźna.", // nieuw, nalezen
    's.repairs.3': "Weź drabinkę, nie krzesło.", // nieuw, nalezen
    'c.repairs.q': "Czy czujnik dymu piszczy?", // nieuw, nalezen
    'c.repairs.a': "Tak, bateria jest prawie pusta.", // nieuw, nalezen
    'c.repairs': "Drabinka, nigdy krzesło", // nieuw, nalezen
    'c.repairs.b': "Do lampy albo wysokiej półki używaj drabinki, nigdy krzesła, stołu ani pudełka. Postaw ją na równej podłodze, otwórz ją do końca i nie stawaj na najwyższym stopniu. Zanim wymienisz lampę, wyłącz światło i poczekaj, aż stara lampa ostygnie. Rób tylko te naprawy, których cię nauczono. Kiedy skończysz, odłóż narzędzia do skrzynki, żeby nikt się o nie nie potknął. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.repairs.p': "Przyniosę drabinkę.", // nieuw, nalezen
    'c.repairs.s': "W biurze zepsuła się lampa. Drabinka jest na innym piętrze. Co robisz?", // nieuw, nalezen
    'c.repairs.o1': "Przynosisz drabinkę.", // nieuw, nalezen
    'c.repairs.o2': "Stajesz na krześle biurowym.", // nieuw, nalezen
    'c.repairs.o3': "Stajesz na biurku.", // nieuw, nalezen
    'c.repairs.w': "Krzesło może odjechać albo się przewrócić. Upadek z krzesła może cię mocno zranić.", // nieuw, nalezen
    'l.moving': "Przeprowadzka stanowiska pracy", // nieuw, nalezen
    'w.verhuisdoos': "karton do przeprowadzki", // nieuw, nalezen
    'w.bureau': "biurko", // nieuw, nalezen
    'w.bureaustoel': "krzesło biurowe", // nieuw, nalezen
    'w.werkplek': "stanowisko pracy (biurko, przy którym ktoś pracuje)", // nieuw, nalezen
    'w.kamernummer': "numer pokoju", // nieuw, nalezen
    'w.plattegrond': "plan budynku (mapa budynku)", // nieuw, nalezen
    's.moving.1': "Napisz numer pokoju na każdym kartonie.", // nieuw, nalezen
    's.moving.2': "Połóż kartony na wózku.", // nieuw, nalezen
    's.moving.3': "Opróżnij stanowisko pracy.", // nieuw, nalezen
    'c.moving.q': "Gdzie ma iść to biurko?", // nieuw, nalezen
    'c.moving.a': "Do pokoju dwanaście. Spójrz na plan budynku.", // nieuw, nalezen
    'c.moving': "Przeprowadzka: podnoś mądrze, wszystko opisz", // nieuw, nalezen
    'c.moving.b': "Przeprowadzka to ciężka praca. Nie pakuj kartonu za pełno: książki i segregatory są ciężkie. Podnoś na ugiętych kolanach, z prostymi plecami, blisko ciała. Do większej liczby kartonów używaj wózka, a biurko podnoście razem. Napisz nowy numer pokoju na każdym kartonie, krześle i komputerze. Najpierw odłącz kable. Nigdy nie stawiaj kartonów na korytarzu ani przed wyjściem ewakuacyjnym.", // nieuw, nalezen
    'c.moving.p': "Pomożesz mi to podnieść?", // nieuw, nalezen
    'c.moving.s': "Musisz przenieść ciężkie biurko. Twój kolega ma przerwę. Co robisz?", // nieuw, nalezen
    'c.moving.o1': "Czekasz na pomoc i podnosicie je razem.", // nieuw, nalezen
    'c.moving.o2': "Ciągniesz je w pojedynkę.", // nieuw, nalezen
    'c.moving.o3': "Podnosisz je w pojedynkę, bardzo ostrożnie.", // nieuw, nalezen
    'c.moving.w': "Ciężkie biurko może uszkodzić ci plecy, kiedy podnosisz je w pojedynkę. Razem jest łatwo i bezpiecznie.", // nieuw, nalezen
    'l.closing': "Otwieranie i zamykanie budynku", // nieuw, nalezen
    'w.sleutelbos': "pęk kluczy", // nieuw, nalezen
    'w.afsluiten': "zamykać na klucz", // nieuw, nalezen
    'w.ronde': "obchód (przejście obok każdego pomieszczenia)", // nieuw, nalezen
    'w.raam': "okno", // nieuw, nalezen
    'w.alarmcode': "kod alarmu", // nieuw, nalezen
    'w.nachtslot': "zamek nocny (dodatkowy zamek na noc)", // nieuw, nalezen
    's.closing.1': "Robię ostatni obchód budynku.", // nieuw, nalezen
    's.closing.2': "Czy wszystkie okna są zamknięte?", // nieuw, nalezen
    's.closing.3': "Zamknij drzwi na zamek nocny.", // nieuw, nalezen
    'c.closing.q': "Czy ktoś jest jeszcze w środku?", // nieuw, nalezen
    'c.closing.a': "Nie, wszyscy już wyszli. Zamykam.", // nieuw, nalezen
    'c.closing': "Kod alarmu jest tajny", // nieuw, nalezen
    'c.closing.b': "Na koniec dnia robisz ostatni obchód. Sprawdź, czy nikt nie został w środku, czy okna są zamknięte i światła zgaszone. Wyjścia ewakuacyjne zostają wolne. Trzymaj klucze przy sobie, nigdy w szufladzie. Kod alarmu jest tajny: nigdy nikomu go nie podawaj, także przez telefon. Włącza się alarm? Postępuj według kroków twojej firmy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.closing.p': "Nie podaję kodu alarmu.", // nieuw, nalezen
    'c.closing.s': "Ktoś dzwoni: „Jestem z firmy alarmowej. Jaki jest wasz kod?” Co robisz?", // nieuw, nalezen
    'c.closing.o1': "Odmawiasz i mówisz przełożonemu.", // nieuw, nalezen
    'c.closing.o2': "Podajesz kod: brzmi miło.", // nieuw, nalezen
    'c.closing.o3': "Podajesz tylko połowę kodu.", // nieuw, nalezen
    'c.closing.w': "Prawdziwa firma alarmowa nie pyta o kod przez telefon. Złodziej może zapytać.", // nieuw, nalezen
    'u.guarding': "Obchody i kontrola wejścia", // nieuw, nalezen
    'l.patrol': "Obchód", // nieuw, nalezen
    'w.surveilleren': "patrolować (chodzić dookoła i obserwować)", // nieuw, nalezen
    'w.zaklamp': "latarka", // nieuw, nalezen
    'w.terrein': "teren (ziemia wokół budynku)", // nieuw, nalezen
    'w.hek': "ogrodzenie, brama", // nieuw, nalezen
    'w.inbraak': "włamanie (ktoś wchodzi, żeby ukraść)", // nieuw, nalezen
    'w.openstaan': "być otwartym (drzwi albo okno, które powinny być zamknięte)", // nieuw, nalezen
    's.patrol.1': "Robię obchód co dwie godziny.", // nieuw, nalezen
    's.patrol.2': "Brama za halą jest otwarta.", // nieuw, nalezen
    's.patrol.3': "Weź ze sobą latarkę.", // nieuw, nalezen
    'c.patrol.q': { m: "Widziałeś coś podczas obchodu?", f: "Widziałaś coś podczas obchodu?", x: "Coś zwróciło twoją uwagę podczas obchodu?" }, // nieuw, nalezen
    'c.patrol.a': "Tak. Przy tylnych drzwiach było otwarte okno.", // nieuw, nalezen
    'c.patrol': "Patrz i zgłaszaj, nie bądź bohaterem", // nieuw, nalezen
    'c.patrol.b': "Na obchodzie patrzysz: czy drzwi i okna są zamknięte, czy ogrodzenie jest całe, czy jest ktoś, kogo nie powinno tu być? Zapisz, co widzisz, z godziną. Widzisz coś dziwnego, na przykład wybite okno albo osobę w nocy? Nie wchodź do środka w pojedynkę. Wezwij centrum monitoringu albo policję przez krótkofalówkę albo telefon i czekaj w bezpiecznym miejscu. Twoje własne bezpieczeństwo jest najważniejsze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.patrol.p': "Widzę kogoś przy ogrodzeniu.", // nieuw, nalezen
    'c.patrol.s': "W nocy widzisz wyważone drzwi. W środku słyszysz hałas. Co robisz?", // nieuw, nalezen
    'c.patrol.o1': "Zostajesz na zewnątrz i wzywasz pomoc.", // nieuw, nalezen
    'c.patrol.o2': "Szybko wchodzisz i patrzysz.", // nieuw, nalezen
    'c.patrol.o3': "Krzyczysz do środka, że idziesz.", // nieuw, nalezen
    'c.patrol.w': "Złodziej w środku może być niebezpieczny. Policja wie, co robić, a twoje zadanie to widzieć i zgłaszać.", // nieuw, nalezen
    'l.access': "Kontrola wejścia", // nieuw, nalezen
    'w.slagboom': "szlaban (drążek w poprzek drogi, który się podnosi)", // nieuw, nalezen
    'w.toegangspas': "karta dostępu (karta, która otwiera drzwi)", // nieuw, nalezen
    'w.legitimatie': "dokument tożsamości (paszport albo dowód osobisty)", // nieuw, nalezen
    'w.draaihek': "bramka obrotowa (dla jednej osoby naraz)", // nieuw, nalezen
    'w.kenteken': "numer rejestracyjny (litery i cyfry samochodu)", // nieuw, nalezen
    'w.toegang': "wstęp, dostęp (możesz wejść)", // nieuw, nalezen
    's.access.1': "Poproszę o dokument tożsamości.", // nieuw, nalezen
    's.access.2': "Ta karta nie działa. Zadzwonię.", // nieuw, nalezen
    's.access.3': "Otworzę szlaban.", // nieuw, nalezen
    'c.access.q': "Mogę wejść? Karta została mi w domu.", // nieuw, nalezen
    'c.access.a': "Przykro mi, bez karty nie można wejść.", // nieuw, nalezen
    'c.access': "Bez karty nie ma wejścia", // nieuw, nalezen
    'c.access.b': "Przy bramie albo przy recepcji sprawdzasz, kto wchodzi. Każdy potrzebuje karty albo musi być na liście. Zachowuj się uprzejmie, także kiedy ktoś jest zły albo się spieszy. Nie rób wyjątków, bo ktoś mówi, że jest szefem: sprawdź to. Nigdy nikomu nie pożyczaj swojej karty i nigdy nie pozwól nikomu wejść za tobą. Zgubioną kartę trzeba od razu zgłosić. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.access.p': "Poproszę o kartę.", // nieuw, nalezen
    'c.access.s': "Mężczyzna w garniturze mówi: „Jestem nowym dyrektorem. Nie mam jeszcze karty.” Co robisz?", // nieuw, nalezen
    'c.access.o1': "Sprawdzasz to, zanim go wpuścisz.", // nieuw, nalezen
    'c.access.o2': "Wpuszczasz go: wygląda na ważnego.", // nieuw, nalezen
    'c.access.o3': "Dajesz mu swoją kartę.", // nieuw, nalezen
    'c.access.w': "Każdy może powiedzieć, że jest dyrektorem. Szybkie sprawdzenie chroni budynek, a prawdziwy dyrektor to zrozumie.", // nieuw, nalezen
    'l.cameras': "Kamery i centrum monitoringu", // nieuw, nalezen
    'w.meldkamer': "centrum monitoringu (tu ludzie patrzą na kamery i odbierają zgłoszenia)", // nieuw, nalezen
    'w.beeldscherm': "monitor, ekran", // nieuw, nalezen
    'w.camerabeelden': "nagrania z kamer (to, co nagrała kamera)", // nieuw, nalezen
    'w.inzoomen': "przybliżyć obraz", // nieuw, nalezen
    'w.bewegingsmelder': "czujnik ruchu (widzi, kiedy coś się rusza)", // nieuw, nalezen
    'w.verdachte': "podejrzany", // nieuw, nalezen
    's.cameras.1': "Na kamerze trzy widzę kogoś przy ogrodzeniu.", // nieuw, nalezen
    's.cameras.2': "Przybliżę obraz.", // nieuw, nalezen
    's.cameras.3': "Centrum monitoringu dzwoni na policję.", // nieuw, nalezen
    'c.cameras.q': "Co widzisz na ekranie?", // nieuw, nalezen
    'c.cameras.a': "Mężczyznę przy ogrodzeniu. Wysyłam kolegę.", // nieuw, nalezen
    'c.cameras': "Nagrania z kamer są prywatne", // nieuw, nalezen
    'c.cameras.b': "Kamery nagrywają ludzi: pracowników, gości i przechodniów. To, co widzisz na ekranach, jest prywatne. Patrz tylko w celach służbowych i nigdy nie nagrywaj ekranu telefonem. Nigdy nie wysyłaj nagrań znajomym i nie wrzucaj ich do internetu. Jest jakiś incydent? Zapisz kamerę i godzinę i powiedz przełożonemu. Tylko twoja firma decyduje, kto dostaje nagrania, na przykład policja. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.cameras.p': "Nie wolno mi tego pokazywać.", // nieuw, nalezen
    'c.cameras.s': "Kolega prosi cię o śmieszny filmik z kamer. Co robisz?", // nieuw, nalezen
    'c.cameras.o1': "Odmawiasz: nagrania są prywatne.", // nieuw, nalezen
    'c.cameras.o2': "Wysyłasz go, tylko jemu.", // nieuw, nalezen
    'c.cameras.o3': "Nagrywasz ekran telefonem.", // nieuw, nalezen
    'c.cameras.w': "Ludzie na nagraniu nie zgodzili się, żeby je udostępniać. Wysłanie go może cię kosztować pracę.", // nieuw, nalezen
    'l.report': "Krótkofalówka i raport", // nieuw, nalezen
    'w.portofoon': "krótkofalówka", // nieuw, nalezen
    'w.rapport': "raport (to, co się stało, zapisane)", // nieuw, nalezen
    'w.incident': "incydent (coś, co poszło źle)", // nieuw, nalezen
    'w.tijdstip': "godzina, moment (kiedy coś się stało)", // nieuw, nalezen
    'w.logboek': "dziennik (zeszyt albo aplikacja, gdzie wszystko zapisujesz)", // nieuw, nalezen
    'w.oproepen': "wywołać (przez krótkofalówkę)", // nieuw, nalezen
    's.report.1': "Piszę raport z incydentu.", // nieuw, nalezen
    's.report.2': "Która to była dokładnie godzina?", // nieuw, nalezen
    's.report.3': "Słabo cię słyszę. Powtórz.", // nieuw, nalezen
    'c.report.q': "Co musi być w raporcie?", // nieuw, nalezen
    'c.report.a': "Co się stało, gdzie i o której godzinie.", // nieuw, nalezen
    'c.report': "Zapisz to od razu", // nieuw, nalezen
    'c.report.b': { m: "Napisz raport zaraz po incydencie, póki dobrze wszystko pamiętasz. Pisz, co sam widziałeś i słyszałeś: co się stało, gdzie, o której godzinie i kto tam był. Pisz fakty, a nie to, co myślisz. Przez krótkofalówkę mów krótko i wyraźnie i czekaj, aż druga osoba skończy. Powiedz, kim jesteś i gdzie jesteś. Dobry raport pomaga policji, twojej firmie i tobie.", f: "Napisz raport zaraz po incydencie, póki dobrze wszystko pamiętasz. Pisz, co sama widziałaś i słyszałaś: co się stało, gdzie, o której godzinie i kto tam był. Pisz fakty, a nie to, co myślisz. Przez krótkofalówkę mów krótko i wyraźnie i czekaj, aż druga osoba skończy. Powiedz, kim jesteś i gdzie jesteś. Dobry raport pomaga policji, twojej firmie i tobie.", x: "Napisz raport zaraz po incydencie, póki dobrze wszystko pamiętasz. Pisz to, co widziały twoje oczy i słyszały twoje uszy: co się stało, gdzie, o której godzinie i kto tam był. Pisz fakty, a nie to, co myślisz. Przez krótkofalówkę mów krótko i wyraźnie i czekaj, aż druga osoba skończy. Powiedz, kim jesteś i gdzie jesteś. Dobry raport pomaga policji, twojej firmie i tobie." }, // nieuw, nalezen
    'c.report.p': "Zaraz to zapiszę.", // nieuw, nalezen
    'c.report.s': { m: "Po pracowitej nocy jesteś bardzo zmęczony. Był jeden mały incydent. Co robisz?", f: "Po pracowitej nocy jesteś bardzo zmęczona. Był jeden mały incydent. Co robisz?", x: "Po pracowitej nocy czujesz ogromne zmęczenie. Był jeden mały incydent. Co robisz?" }, // nieuw, nalezen
    'c.report.o1': "Piszesz raport, zanim pójdziesz do domu.", // nieuw, nalezen
    'c.report.o2': "Piszesz go jutro, po dobrym śnie.", // nieuw, nalezen
    'c.report.o3': "Pomijasz go: to było nic wielkiego.", // nieuw, nalezen
    'c.report.w': "Jutro zapomnisz szczegóły. Raport bez godziny albo miejsca nikomu nie pomaga.", // nieuw, nalezen
    'u.incidents': "Nagłe sytuacje i sklep", // nieuw, nalezen
    'l.evacuation': "Pożar i ewakuacja", // nieuw, nalezen
    'w.brandmelder': "przycisk alarmu pożarowego (czerwona skrzynka, którą naciskasz, kiedy jest pożar)", // nieuw, nalezen
    'w.brandweer': "straż pożarna", // nieuw, nalezen
    'w.branddeur': "drzwi przeciwpożarowe (zatrzymują ogień i dym)", // nieuw, nalezen
    'w.brandmeldcentrale': "centrala alarmu pożarowego (pokazuje, gdzie jest alarm)", // nieuw, nalezen
    'w.ontruimingsplan': "plan ewakuacji (kto co robi, kiedy wszyscy muszą wyjść)", // nieuw, nalezen
    'w.sirene': "syrena", // nieuw, nalezen
    's.evacuation.1': "W hali drugiej jest alarm pożarowy.", // nieuw, nalezen
    's.evacuation.2': "Trzymaj drzwi przeciwpożarowe zamknięte.", // nieuw, nalezen
    's.evacuation.3': "Czekam na straż pożarną przy wejściu.", // nieuw, nalezen
    'c.evacuation.q': "Czy wszyscy są na zewnątrz?", // nieuw, nalezen
    'c.evacuation.a': "Nie, brakuje jeszcze dwóch osób z listy.", // nieuw, nalezen
    'c.evacuation': "Pożar: najpierw alarm, potem na zewnątrz", // nieuw, nalezen
    'c.evacuation.b': "Widzisz ogień albo dym? Naciśnij przycisk alarmu pożarowego albo zadzwoń pod 112. Potem pomóż ludziom wyjść drogami ewakuacyjnymi, nigdy windą. Zamykaj za sobą drzwi, ale nie na klucz. Gaś pożar tylko wtedy, gdy jest mały i umiesz to robić. Idź na miejsce zbiórki i policz, kto tam jest. Wyjdź do straży pożarnej przy wejściu i powiedz, co wiesz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.evacuation.p': "Wszyscy na zewnątrz, na miejsce zbiórki.", // nieuw, nalezen
    'c.evacuation.s': "Włącza się alarm pożarowy. Jakiś mężczyzna chce jechać windą. Co robisz?", // nieuw, nalezen
    'c.evacuation.o1': "Wysyłasz go na schody.", // nieuw, nalezen
    'c.evacuation.o2': "Pozwalasz mu: winda jest szybsza.", // nieuw, nalezen
    'c.evacuation.o3': "Jedziesz z nim windą.", // nieuw, nalezen
    'c.evacuation.w': "Podczas pożaru winda może stanąć albo wypełnić się dymem. Schody to bezpieczna droga na zewnątrz.", // nieuw, nalezen
    'l.firstaid': "Pierwsza pomoc i 112", // nieuw, nalezen
    'w.ehbo': "pierwsza pomoc", // nieuw, nalezen
    'w.aed': "AED (urządzenie, które pomaga sercu, które się zatrzymało)", // nieuw, nalezen
    'w.reanimeren': "prowadzić resuscytację (uciskać klatkę piersiową, żeby uratować życie)", // nieuw, nalezen
    'w.bewusteloos': "nieprzytomny (osoba się nie budzi)", // nieuw, nalezen
    'w.ademen': "oddychać", // nieuw, nalezen
    'w.alarmnummer': "numer alarmowy (112)", // nieuw, nalezen
    's.firstaid.1': "Zadzwoń pod 112. Poproś o karetkę.", // nieuw, nalezen
    's.firstaid.2': "Przynieś AED z recepcji.", // nieuw, nalezen
    's.firstaid.3': "On nie oddycha. Zaczynam resuscytację.", // nieuw, nalezen
    'c.firstaid.q': "Gdzie jest AED?", // nieuw, nalezen
    'c.firstaid.a': "Przy wejściu, obok windy.", // nieuw, nalezen
    'c.firstaid': "Zadzwoń pod 112, zacznij resuscytację, przynieś AED", // nieuw, nalezen
    'c.firstaid.b': "Ktoś upada i nie reaguje? Od razu zadzwoń pod 112 albo poproś kogoś, żeby zadzwonił. Sprawdź, czy ta osoba normalnie oddycha. Jeśli nie: zacznij resuscytację i poproś kogoś, żeby przyniósł AED. AED mówi i wyjaśnia ci, co robić, więc nie możesz zrobić nic źle. Nie przerywaj, aż przejmie karetka. Masz kurs pierwszej pomocy? Powiedz o tym kolegom, żeby wiedzieli, kogo wołać.", // nieuw, nalezen
    'c.firstaid.p': "Zadzwoń pod 112 i przynieś AED.", // nieuw, nalezen
    'c.firstaid.s': "W holu upada mężczyzna. Nie rusza się i nie oddycha. Co robisz?", // nieuw, nalezen
    'c.firstaid.o1': "Dzwonisz pod 112 i zaczynasz resuscytację.", // nieuw, nalezen
    'c.firstaid.o2': "Czekasz, czy się obudzi.", // nieuw, nalezen
    'c.firstaid.o3': "Podnosisz go i sadzasz na krześle.", // nieuw, nalezen
    'c.firstaid.w': "Kiedy serce staje, liczy się każda minuta. Resuscytacja i AED mogą uratować życie, zanim przyjedzie karetka.", // nieuw, nalezen
    'l.shoplifting': "Kradzież w sklepie", // nieuw, nalezen
    'w.winkeldiefstal': "kradzież w sklepie", // nieuw, nalezen
    'w.heterdaad': "na gorącym uczynku (widzisz, jak to się dzieje)", // nieuw, nalezen
    'w.aanhouden': "zatrzymać kogoś (do przyjazdu policji)", // nieuw, nalezen
    'w.detectiepoortje': "bramka antykradzieżowa (piszczy przy drzwiach)", // nieuw, nalezen
    'w.alarmlabel': "zabezpieczenie antykradzieżowe (przez nie bramka piszczy)", // nieuw, nalezen
    'w.verstoppen': "chować, ukrywać", // nieuw, nalezen
    's.shoplifting.1': "Bramka przy wyjściu piszczy.", // nieuw, nalezen
    's.shoplifting.2': { m: "Widziałem, jak to się stało.", f: "Widziałam, jak to się stało.", x: "To stało się na moich oczach." }, // nieuw, nalezen
    's.shoplifting.3': "Zatrzymuję go do przyjazdu policji.", // nieuw, nalezen
    'c.shoplifting.q': "Mogę przeszukać jego torbę?", // nieuw, nalezen
    'c.shoplifting.a': "Nie. To robi policja.", // nieuw, nalezen
    'c.shoplifting': "Kradzież w sklepie: obserwuj, zgłaszaj, bez przemocy", // nieuw, nalezen
    'c.shoplifting.b': "Ktoś na twoich oczach coś ukradł? Zachowaj spokój i od razu zadzwoń na policję. Niektóre sklepy pozwalają ochroniarzowi zatrzymać złodzieja do przyjazdu policji, a inne mówią: tylko obserwuj, zgłoś i zapamiętaj, jak ta osoba wygląda. Nigdy nie bij i nie kop i nigdy nie trzymaj nikogo za szyję. Nigdy nie przeszukuj osoby, jej kieszeni ani torby: to zadanie policji. Zapisz swoje obserwacje i zachowaj nagrania z kamer. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.shoplifting.p': "Proszę pójść ze mną.", // nieuw, nalezen
    'c.shoplifting.s': "Widzisz, jak kobieta wkłada butelkę do torby. Wychodzi ze sklepu. Co robisz?", // nieuw, nalezen
    'c.shoplifting.o1': "Spokojnie ją zatrzymujesz i dzwonisz na policję.", // nieuw, nalezen
    'c.shoplifting.o2': "Szybko przeszukujesz jej torbę przy drzwiach.", // nieuw, nalezen
    'c.shoplifting.o3': "Mocno popychasz ją na ziemię.", // nieuw, nalezen
    'c.shoplifting.w': "Przeszukiwanie osoby to zadanie policji, a przemoc może kogoś zranić i narobić ci kłopotów.", // nieuw, nalezen
    'l.aggression': "Trudni ludzie", // nieuw, nalezen
    'w.agressie': "agresja (złe, gwałtowne zachowanie)", // nieuw, nalezen
    'w.schelden': "wyzywać kogoś, przeklinać na kogoś", // nieuw, nalezen
    'w.kalmeren': "uspokoić się", // nieuw, nalezen
    'w.afstand': "odstęp, odległość", // nieuw, nalezen
    'w.huisverbod': "zakaz wstępu (nie możesz już tu wchodzić)", // nieuw, nalezen
    'w.bodycam': "kamera nasobna (mała kamera na mundurze)", // nieuw, nalezen
    's.aggression.1': "Proszę się uspokoić. Chcę panu pomóc.", // nieuw, nalezen
    's.aggression.2': "Zachowaj odstęp i spokój.", // nieuw, nalezen
    's.aggression.3': "Ma pan zakaz wstępu. Musi pan teraz wyjść.", // nieuw, nalezen
    'c.aggression.q': "Dlaczego nie mogę wejść?", // nieuw, nalezen
    'c.aggression.a': "Ma pan tutaj zakaz wstępu.", // nieuw, nalezen
    'c.aggression': "Zachowaj spokój, zachowaj odstęp", // nieuw, nalezen
    'c.aggression.b': { m: "Zła osoba szybciej się uspokaja, kiedy ty jesteś spokojny. Mów powoli i cicho i zwracaj się do tej osoby przez „u”. Trzymaj odstęp na długość ręki albo więcej i miej za sobą drogę wyjścia. Nie dotykaj tej osoby i nie odkrzykuj. Robi się niebezpiecznie? Cofnij się i zawołaj kolegę albo policję. Potem to zapisz. Po złym incydencie porozmawiaj o tym z kimś. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Zła osoba szybciej się uspokaja, kiedy ty jesteś spokojna. Mów powoli i cicho i zwracaj się do tej osoby przez „u”. Trzymaj odstęp na długość ręki albo więcej i miej za sobą drogę wyjścia. Nie dotykaj tej osoby i nie odkrzykuj. Robi się niebezpiecznie? Cofnij się i zawołaj kolegę albo policję. Potem to zapisz. Po złym incydencie porozmawiaj o tym z kimś. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Zła osoba szybciej się uspokaja, kiedy ty zachowujesz spokój. Mów powoli i cicho i zwracaj się do tej osoby przez „u”. Trzymaj odstęp na długość ręki albo więcej i miej za sobą drogę wyjścia. Nie dotykaj tej osoby i nie odkrzykuj. Robi się niebezpiecznie? Cofnij się i zawołaj kolegę albo policję. Potem to zapisz. Po złym incydencie porozmawiaj o tym z kimś. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen
    'c.aggression.p': "Proszę się uspokoić. Chcę pomóc.", // nieuw, nalezen
    'c.aggression.s': "Mężczyzna krzyczy na ciebie i podchodzi bardzo blisko. Co robisz?", // nieuw, nalezen
    'c.aggression.o1': "Cofasz się i mówisz spokojnie.", // nieuw, nalezen
    'c.aggression.o2': "Odkrzykujesz, głośniej niż on.", // nieuw, nalezen
    'c.aggression.o3': "Odpychasz go od siebie.", // nieuw, nalezen
    'c.aggression.w': "Spokojne słowa i przestrzeń studzą emocje. Krzyk albo popychanie tylko pogarszają sprawę.", // nieuw, nalezen
    'u.foodhygiene': "Higiena i chłód", // nieuw, nalezen
    'l.hygienelock': "Śluza higieniczna", // nieuw, nalezen
    'w.hygienesluis': "śluza higieniczna (pomieszczenie, w którym się myjesz, zanim wejdziesz)", // nieuw, nalezen
    'w.baardnetje': "siatka na brodę", // nieuw, nalezen
    'w.laarzenwasser': "myjka do butów (szczotki, które czyszczą buty)", // nieuw, nalezen
    'w.desinfecteren': "dezynfekować (zabijać zarazki)", // nieuw, nalezen
    'w.werkjas': "fartuch roboczy", // nieuw, nalezen
    'w.bacterie': "zarazek, bakteria", // nieuw, nalezen
    's.hygienelock.1': "Umyj ręce i zdezynfekuj je.", // nieuw, nalezen
    's.hygienelock.2': "Załóż siateczkę na włosy i siatkę na brodę.", // nieuw, nalezen
    's.hygienelock.3': "Przejdź przez myjkę do butów.", // nieuw, nalezen
    'c.hygienelock.q': "Mogę zostać w zegarku?", // nieuw, nalezen
    'c.hygienelock.a': "Nie, cała biżuteria musi być zdjęta.", // nieuw, nalezen
    'c.hygienelock': "Za każdym razem czysto na wejściu", // nieuw, nalezen
    'c.hygienelock.b': { m: "W fabryce żywności to ty jesteś największym zagrożeniem dla jedzenia: zarazki są na twoich rękach, włosach i ubraniu. Dlatego przechodź przez śluzę higieniczną za każdym razem, kiedy wchodzisz, także po przerwie albo po toalecie. Siateczka na włosy, siatka na brodę, jeśli masz brodę, czyste ubranie robocze, cała biżuteria zdjęta. Umyj ręce mydłem, wytrzyj je i zdezynfekuj. Jesteś chory, masz biegunkę albo wymiotujesz? Powiedz przełożonemu, zanim zaczniesz pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "W fabryce żywności to ty jesteś największym zagrożeniem dla jedzenia: zarazki są na twoich rękach, włosach i ubraniu. Dlatego przechodź przez śluzę higieniczną za każdym razem, kiedy wchodzisz, także po przerwie albo po toalecie. Siateczka na włosy, siatka na brodę, jeśli masz brodę, czyste ubranie robocze, cała biżuteria zdjęta. Umyj ręce mydłem, wytrzyj je i zdezynfekuj. Jesteś chora, masz biegunkę albo wymiotujesz? Powiedz przełożonemu, zanim zaczniesz pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "W fabryce żywności to ty jesteś największym zagrożeniem dla jedzenia: zarazki są na twoich rękach, włosach i ubraniu. Dlatego przechodź przez śluzę higieniczną za każdym razem, kiedy wchodzisz, także po przerwie albo po toalecie. Siateczka na włosy, siatka na brodę, jeśli masz brodę, czyste ubranie robocze, cała biżuteria zdjęta. Umyj ręce mydłem, wytrzyj je i zdezynfekuj. Chorujesz, masz biegunkę albo wymiotujesz? Powiedz przełożonemu, zanim zaczniesz pracę. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen
    'c.hygienelock.p': "Mam biegunkę. Czy mogę dziś pracować?", // nieuw, nalezen
    'c.hygienelock.s': "Wracasz z toalety. Kolega mówi: „Pomiń śluzę, mamy dużo pracy.” Co robisz?", // nieuw, nalezen
    'c.hygienelock.o1': "I tak przechodzisz przez śluzę.", // nieuw, nalezen
    'c.hygienelock.o2': "Pomijasz ją, tylko ten jeden raz.", // nieuw, nalezen
    'c.hygienelock.o3': "Zakładasz tylko nowe rękawice.", // nieuw, nalezen
    'c.hygienelock.w': "Zarazki z toalety mogą sprawić, że zachoruje wielu klientów. Kilka minut w śluzie temu zapobiega.", // nieuw, nalezen
    'l.allergens': "Alergeny", // nieuw, nalezen
    'w.allergeen': "alergen (jedzenie, po którym niektórzy ludzie bardzo chorują)", // nieuw, nalezen
    'w.noten': "orzechy", // nieuw, nalezen
    'w.pinda': "orzeszek ziemny", // nieuw, nalezen
    'w.gluten': "gluten (w pszenicy, więc w chlebie i cieście)", // nieuw, nalezen
    'w.sesam': "sezam (małe nasiona, na przykład na chlebie)", // nieuw, nalezen
    'w.kruisbesmetting': "zanieczyszczenie krzyżowe (coś trafia do jedzenia, gdzie nie powinno go być)", // nieuw, nalezen
    's.allergens.1': "Ten produkt zawiera orzechy.", // nieuw, nalezen
    's.allergens.2': "Zobacz na etykiecie, jakie alergeny są w środku.", // nieuw, nalezen
    's.allergens.3': "Po orzeszkach ziemnych dobrze wszystko wyczyść.", // nieuw, nalezen
    'c.allergens.q': "Czy ten pojemnik może iść razem z innymi?", // nieuw, nalezen
    'c.allergens.a': "Nie, są w nim orzechy.", // nieuw, nalezen
    'c.allergens': "Wystarczy śladowa ilość", // nieuw, nalezen
    'c.allergens.b': "Dla niektórych ludzi odrobina orzechów, orzeszków ziemnych, mleka, jajka, glutenu albo sezamu może być groźna dla życia. Dlatego na etykiecie musi być dokładnie napisane, co jest w produkcie. Trzymaj alergeny osobno: własne pojemniki, narzędzia i kolory. Po produkcie z alergenem linię się czyści, zanim przyjdzie następny produkt. Nigdy nie zamieniaj składnika, także jeśli wygląda tak samo. Masz wątpliwości? Pytaj. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.allergens.p': "Czy są w tym orzechy?", // nieuw, nalezen
    'c.allergens.s': "Skończyły się migdały. Kolega mówi: „Użyj orzechów laskowych, nikt nie zauważy.” Co robisz?", // nieuw, nalezen
    'c.allergens.o1': "Odmawiasz i mówisz przełożonemu.", // nieuw, nalezen
    'c.allergens.o2': "Używasz ich: orzechy to orzechy.", // nieuw, nalezen
    'c.allergens.o3': "Używasz ich i nic nie zmieniasz na etykiecie.", // nieuw, nalezen
    'c.allergens.w': "Etykieta musi mówić, co jest w środku. Zły orzech może sprawić, że osoba z alergią bardzo zachoruje.", // nieuw, nalezen
    'l.coldroom': "Chłodnia i mroźnia", // nieuw, nalezen
    'w.temperatuur': "temperatura", // nieuw, nalezen
    'w.graden': "stopnie (°C)", // nieuw, nalezen
    'w.bevroren': "zamrożony", // nieuw, nalezen
    'w.ontdooien': "rozmrażać", // nieuw, nalezen
    'w.koelketen': "łańcuch chłodniczy (jedzenie jest cały czas zimne)", // nieuw, nalezen
    'w.thermokleding': "odzież termiczna (ciepłe ubranie na zimno)", // nieuw, nalezen
    's.coldroom.1': "W mroźni jest minus osiemnaście stopni.", // nieuw, nalezen
    's.coldroom.2': "Od razu włóż mięso do chłodni.", // nieuw, nalezen
    's.coldroom.3': "Zapisz temperaturę na liście.", // nieuw, nalezen
    'c.coldroom.q': "Dlaczego chłodnia piszczy?", // nieuw, nalezen
    'c.coldroom.a': "Drzwi są otwarte. Szybko je zamknij.", // nieuw, nalezen
    'c.coldroom': "Praca w zimnie: ubierz się ciepło, jedzenie trzymaj w zimnie", // nieuw, nalezen
    'c.coldroom.b': "Jedzenie musi być zimne przez całą drogę: z ciężarówki do chłodni i do sklepu. Dlatego od razu odkładaj zimne produkty na miejsce i trzymaj drzwi chłodni i mroźni zamknięte. Sprawdzaj temperaturę i ją zapisuj. W mroźni noś odzież termiczną, rękawice i czapkę i na czas rób przerwę w cieple. Upewnij się, że zawsze możesz otworzyć drzwi od środka. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.coldroom.p': "Tu jest za ciepło. Chłodzenie nie działa.", // nieuw, nalezen
    'c.coldroom.s': "Termometr chłodni pokazuje dużo wyższą liczbę niż zwykle. Co robisz?", // nieuw, nalezen
    'c.coldroom.o1': "Od razu mówisz przełożonemu.", // nieuw, nalezen
    'c.coldroom.o2': "Czekasz: znowu się ochłodzi.", // nieuw, nalezen
    'c.coldroom.o3': "Wpisujesz na listę normalną liczbę.", // nieuw, nalezen
    'c.coldroom.w': "Za ciepło oznacza, że rosną zarazki. Przełożony decyduje, czy jedzenie jest jeszcze bezpieczne.", // nieuw, nalezen
    'l.foreignbody': "Szkło, metal i plastik w jedzeniu", // nieuw, nalezen
    'w.metaaldetector': "wykrywacz metalu", // nieuw, nalezen
    'w.glasbreuk': "stłuczka szkła (szkło, które się rozbiło)", // nieuw, nalezen
    'w.splinter': "odłamek (mały ostry kawałek)", // nieuw, nalezen
    'w.vreemdvoorwerp': "ciało obce (coś w jedzeniu, czego tam nie powinno być)", // nieuw, nalezen
    'w.vervuild': "zanieczyszczony (dostało się coś brudnego)", // nieuw, nalezen
    'w.ploegleider': "kierownik zmiany", // nieuw, nalezen
    's.foreignbody.1': "Wykrywacz metalu piszczy. Zatrzymaj linię.", // nieuw, nalezen
    's.foreignbody.2': "Przy linii drugiej stłukło się szkło.", // nieuw, nalezen
    's.foreignbody.3': "Wrzuć produkt do pojemnika na odrzuty.", // nieuw, nalezen
    'c.foreignbody.q': "Co mam zrobić z tym kawałkiem plastiku?", // nieuw, nalezen
    'c.foreignbody.a': "Pokaż go kierownikowi zmiany.", // nieuw, nalezen
    'c.foreignbody': "Coś w jedzeniu? Zatrzymaj i zgłoś", // nieuw, nalezen
    'c.foreignbody.b': "Szkło, metal, plastik, plaster albo włos nigdy nie mogą trafić do jedzenia. Wykrywacz metalu piszczy albo znajdujesz coś dziwnego? Odłóż produkt na bok i powiedz kierownikowi zmiany. Stłukło się szkło? Zatrzymaj linię w pobliżu: kierownik zmiany decyduje, co trzeba wyrzucić. Używaj tylko niebieskich plastrów, żeby łatwo je było zobaczyć. Nigdy nie zabieraj na halę produkcyjną szkła, długopisów ani luźnych rzeczy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.foreignbody.p': { m: "Znalazłem coś w produkcie.", f: "Znalazłam coś w produkcie.", x: "W produkcie coś jest." }, // nieuw, nalezen
    'c.foreignbody.s': "Nad linią pęka szklana lampa. Produkty jadą dalej. Co robisz?", // nieuw, nalezen
    'c.foreignbody.o1': "Zatrzymujesz linię i wołasz kierownika zmiany.", // nieuw, nalezen
    'c.foreignbody.o2': "Wybierasz szkło, które widzisz.", // nieuw, nalezen
    'c.foreignbody.o3': "Pracujesz dalej: wykrywacz znajdzie szkło.", // nieuw, nalezen
    'c.foreignbody.w': "Wykrywacz metalu nie znajduje szkła. Małe kawałki, których nie widać, mogą mocno zranić klienta.", // nieuw, nalezen
    'u.foodline': "Linia produkcyjna", // nieuw, nalezen
    'l.cutting': "Krojenie i ważenie", // nieuw, nalezen
    'w.uitbenen': "odkostniać (wycinać kości z mięsa)", // nieuw, nalezen
    'w.fileren': "filetować (kroić rybę albo mięso na płaskie kawałki)", // nieuw, nalezen
    'w.portie': "porcja", // nieuw, nalezen
    'w.wegen': "ważyć", // nieuw, nalezen
    'w.gewicht': "waga, ciężar", // nieuw, nalezen
    'w.snijplank': "deska do krojenia", // nieuw, nalezen
    's.cutting.1': "Zważ każdą porcję.", // nieuw, nalezen
    's.cutting.2': "Waga jest za niska.", // nieuw, nalezen
    's.cutting.3': "Naostrz nóż, zanim zaczniesz.", // nieuw, nalezen
    'c.cutting.q': "Ile ma iść do pojemnika?", // nieuw, nalezen
    'c.cutting.a': "Pięćset gramów. Patrz na wagę.", // nieuw, nalezen
    'c.cutting': "Ostry nóż, bezpieczna ręka", // nieuw, nalezen
    'c.cutting.b': "Ostry nóż jest bezpieczniejszy niż tępy: potrzebujesz mniej siły, więc mniej się ześlizguje. Zawsze noś rękawicę antyprzecięciową na drugiej ręce. Tnij od siebie. Odkładaj nóż płasko na deskę, nigdy do zlewu ani pod mięso. Nie próbuj łapać spadającego noża: cofnij się. Noś nóż ostrzem w dół, blisko nogi. Nawet małe skaleczenie trzeba zakleić i zgłosić.", // nieuw, nalezen
    'c.cutting.p': "Mój nóż jest tępy.", // nieuw, nalezen
    'c.cutting.s': "Nóż wyślizguje ci się z ręki i spada. Co robisz?", // nieuw, nalezen
    'c.cutting.o1': "Cofasz się i pozwalasz mu spaść.", // nieuw, nalezen
    'c.cutting.o2': "Szybko go łapiesz.", // nieuw, nalezen
    'c.cutting.o3': "Zatrzymujesz go stopą.", // nieuw, nalezen
    'c.cutting.w': "Spadający nóż tnie głęboko, kiedy go łapiesz. Na podłodze nie zrobi nikomu krzywdy.", // nieuw, nalezen
    'l.labels': "Pakowanie i etykiety", // nieuw, nalezen
    'w.etiketteren': "etykietować (naklejać etykiety)", // nieuw, nalezen
    'w.lotnummer': "numer partii (jeden numer dla jednej partii produktów)", // nieuw, nalezen
    'w.vacuum': "pakowany próżniowo (całe powietrze jest usunięte)", // nieuw, nalezen
    'w.schaal': "tacka (płaskie naczynie na jedzenie)", // nieuw, nalezen
    'w.printer': "drukarka", // nieuw, nalezen
    'w.omdoos': "karton zbiorczy (duży karton wokół małych opakowań)", // nieuw, nalezen
    's.labels.1': "Sprawdź, czy data na etykiecie jest dobra.", // nieuw, nalezen
    's.labels.2': "To opakowanie nie jest zapakowane próżniowo. Zapakuj je jeszcze raz.", // nieuw, nalezen
    's.labels.3': "Zapisz numer partii na liście.", // nieuw, nalezen
    'c.labels.q': "Jaka data ma być na etykiecie?", // nieuw, nalezen
    'c.labels.a': "Za dziesięć dni. Spójrz na listę.", // nieuw, nalezen
    'c.labels': "Zła etykieta jest niebezpieczna", // nieuw, nalezen
    'c.labels.b': "Etykieta mówi klientowi, co jest w środku, ile to waży i do kiedy jest dobre. Zła data albo zła etykieta może sprawić, że ludzie zachorują, na przykład kiedy brakuje alergenu. Dlatego przy każdej nowej serii sprawdź pierwsze etykiety: produkt, datę i numer partii. Coś jest nie tak? Przerwij pracę i powiedz przełożonemu. Produkty ze złą etykietą odkłada się na bok, nigdy się ich nie sprzedaje. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.labels.p': "Etykieta jest zła.", // nieuw, nalezen
    'c.labels.s': "Widzisz, że data na etykietach jest o tydzień za późna. Co robisz?", // nieuw, nalezen
    'c.labels.o1': "Przestajesz pakować i mówisz przełożonemu.", // nieuw, nalezen
    'c.labels.o2': "Pracujesz dalej: tydzień nie ma znaczenia.", // nieuw, nalezen
    'c.labels.o3': "Poprawiasz datę długopisem.", // nieuw, nalezen
    'c.labels.w': "Zła data może sprawić, że ludzie zjedzą jedzenie, które nie jest już bezpieczne. Lepiej zatrzymać się teraz, niż później wycofywać produkty.", // nieuw, nalezen
    'l.linecleaning': "Mycie linii", // nieuw, nalezen
    'w.schuim': "piana", // nieuw, nalezen
    'w.hogedrukspuit': "myjka ciśnieniowa", // nieuw, nalezen
    'w.naspoelen': "spłukać (zmyć czystą wodą)", // nieuw, nalezen
    'w.demonteren': "rozebrać (na części)", // nieuw, nalezen
    'w.borstel': "szczotka", // nieuw, nalezen
    'w.restjes': "resztki (małe kawałki jedzenia)", // nieuw, nalezen
    's.linecleaning.1': "Najpierw wyłącz maszynę.", // nieuw, nalezen
    's.linecleaning.2': "Nanieś pianę na taśmę.", // nieuw, nalezen
    's.linecleaning.3': "Potem spłucz wszystko czystą wodą.", // nieuw, nalezen
    'c.linecleaning.q': "Czy taśma jest już czysta?", // nieuw, nalezen
    'c.linecleaning.a': "Jeszcze nie. Muszę ją jeszcze spłukać.", // nieuw, nalezen
    'c.linecleaning': "Przed myciem wyłącz zasilanie", // nieuw, nalezen
    'c.linecleaning.b': "Nigdy nie myj maszyny, która pracuje. Wyłącz ją i dopilnuj, żeby nikt nie mógł jej znowu włączyć: postępuj według kroków twojej firmy. Noś właściwe rękawice, okulary i buty: środki czyszczące mogą poparzyć skórę i oczy. Nigdy nie mieszaj środków. Najpierw usuń resztki, potem nanieś pianę, szoruj i spłucz. Nie pryskaj wodą na skrzynki elektryczne ani na wtyczki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.linecleaning.p': "Czy maszyna jest wyłączona?", // nieuw, nalezen
    'c.linecleaning.s': "W taśmie utknął kawałek mięsa. Maszyna jeszcze pracuje. Co robisz?", // nieuw, nalezen
    'c.linecleaning.o1': "Najpierw ją wyłączasz, potem go wyjmujesz.", // nieuw, nalezen
    'c.linecleaning.o2': "Szybko wyciągasz go ręką.", // nieuw, nalezen
    'c.linecleaning.o3': "Wypychasz go nożem.", // nieuw, nalezen
    'c.linecleaning.w': "Pracująca taśma może w sekundę wciągnąć rękę. Wyłączenie zajmuje tylko chwilę.", // nieuw, nalezen
    'l.haccp': "Sprawdzanie i zapisywanie (HACCP)", // nieuw, nalezen
    'w.controlepunt': "punkt kontrolny (krok, w którym musisz coś sprawdzić)", // nieuw, nalezen
    'w.kerntemperatuur': "temperatura wewnętrzna (temperatura w środku jedzenia)", // nieuw, nalezen
    'w.prikthermometer': "termometr szpilkowy (wbijasz go w jedzenie)", // nieuw, nalezen
    'w.afwijking': "odchylenie (coś nie jest tak, jak powinno)", // nieuw, nalezen
    'w.steekproef': "kontrola wyrywkowa (sprawdzasz kilka produktów)", // nieuw, nalezen
    'w.kwaliteitsdienst': "dział jakości (QA)", // nieuw, nalezen
    's.haccp.1': "Zmierz temperaturę wewnętrzną termometrem szpilkowym.", // nieuw, nalezen
    's.haccp.2': "Zapisz wszystko na liście.", // nieuw, nalezen
    's.haccp.3': "Coś jest nie tak? Od razu to zgłoś.", // nieuw, nalezen
    'c.haccp.q': "Dlaczego muszę wszystko zapisywać?", // nieuw, nalezen
    'c.haccp.a': "Dzięki temu wiemy, że jedzenie jest bezpieczne.", // nieuw, nalezen
    'c.haccp': "HACCP: sprawdź, zapisz, zgłoś", // nieuw, nalezen
    'c.haccp.b': { m: "Każda firma spożywcza pracuje z planem bezpieczeństwa żywności (HACCP). Jest w nim napisane, na których etapach musisz coś sprawdzić, na przykład temperaturę w chłodni albo temperaturę wewnętrzną ugotowanego mięsa. Sprawdzasz, zapisujesz i podpisujesz. Zapisuj to, co naprawdę zmierzyłeś, także jeśli wynik jest zły. Zły wynik to nie twoja wina, ale ukrywanie go jest niebezpieczne. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Każda firma spożywcza pracuje z planem bezpieczeństwa żywności (HACCP). Jest w nim napisane, na których etapach musisz coś sprawdzić, na przykład temperaturę w chłodni albo temperaturę wewnętrzną ugotowanego mięsa. Sprawdzasz, zapisujesz i podpisujesz. Zapisuj to, co naprawdę zmierzyłaś, także jeśli wynik jest zły. Zły wynik to nie twoja wina, ale ukrywanie go jest niebezpieczne. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Każda firma spożywcza pracuje z planem bezpieczeństwa żywności (HACCP). Jest w nim napisane, na których etapach musisz coś sprawdzić, na przykład temperaturę w chłodni albo temperaturę wewnętrzną ugotowanego mięsa. Sprawdzasz, zapisujesz i podpisujesz. Zapisuj prawdziwy wynik pomiaru, także jeśli jest zły. Zły wynik to nie twoja wina, ale ukrywanie go jest niebezpieczne. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen
    'c.haccp.p': "Temperatura jest za wysoka.", // nieuw, nalezen
    'c.haccp.s': { m: "Zapomniałeś zrobić pomiar o dziesiątej. Kolega mówi: „Po prostu wpisz dobrą liczbę.” Co robisz?", f: "Zapomniałaś zrobić pomiar o dziesiątej. Kolega mówi: „Po prostu wpisz dobrą liczbę.” Co robisz?", x: "Pomiar o dziesiątej ci umknął. Kolega mówi: „Po prostu wpisz dobrą liczbę.” Co robisz?" }, // nieuw, nalezen
    'c.haccp.o1': "Mierzysz teraz i wpisujesz prawdziwą godzinę.", // nieuw, nalezen
    'c.haccp.o2': "Wpisujesz dobrą liczbę na dziesiątą.", // nieuw, nalezen
    'c.haccp.o3': "Zostawiasz pustą rubrykę.", // nieuw, nalezen
    'c.haccp.w': "Lista musi pokazywać, co naprawdę się stało. Wymyślona liczba ukrywa problem, przez który ludzie mogą zachorować.", // nieuw, nalezen
    'u.collection': "Odbiór odpadów", // nieuw, nalezen
    'l.binlorry': "Śmieciarka", // nieuw, nalezen
    'w.vuilniswagen': "śmieciarka", // nieuw, nalezen
    'w.kliko': "pojemnik na kółkach (kosz na śmieci na kółkach)", // nieuw, nalezen
    'w.kieplift': "podnośnik do pojemników (podnosi pojemnik i go opróżnia)", // nieuw, nalezen
    'w.treeplank': "stopień z tyłu (stopień na tyle śmieciarki)", // nieuw, nalezen
    'w.bijplaatsing': "śmieci obok pojemnika (worki zostawione obok kosza)", // nieuw, nalezen
    'w.ophaaldag': "dzień odbioru", // nieuw, nalezen
    's.binlorry.1': "Postaw pojemnik na podnośniku.", // nieuw, nalezen
    's.binlorry.2': "Obok kontenera stoją worki.", // nieuw, nalezen
    's.binlorry.3': "Ten pojemnik jest za ciężki. Zostaw go.", // nieuw, nalezen
    'c.binlorry.q': "Mogę jechać z tyłu?", // nieuw, nalezen
    'c.binlorry.a': "Nie, wsiadasz do kabiny.", // nieuw, nalezen
    'c.binlorry': { m: "Bądź widoczny i jedź w środku", f: "Bądź widoczna i jedź w środku", x: "Daj się zobaczyć i jedź w kabinie" }, // nieuw, nalezen
    'c.binlorry.b': "Na każdej trasie noś odzież odblaskową. Wsiadaj i wysiadaj od strony chodnika, nigdy od strony ruchu. Jedź w kabinie, a nie na tyle śmieciarki: tylko wtedy, gdy twoja firma wyraźnie na to pozwala, i nigdy, kiedy cofa albo jedzie szybko. Trzymaj się z dala od podnośnika, kiedy się rusza. Pojemnik jest za ciężki albo coś z niego wystaje? Zostaw go i zgłoś to. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.binlorry.p': "Ten pojemnik jest za ciężki.", // nieuw, nalezen
    'c.binlorry.s': "Następna ulica jest bardzo blisko. Kierowca mówi: „Stań na stopniu z tyłu.” Co robisz?", // nieuw, nalezen
    'c.binlorry.o1': "Mimo to wsiadasz do kabiny.", // nieuw, nalezen
    'c.binlorry.o2': "Stajesz na stopniu: to blisko.", // nieuw, nalezen
    'c.binlorry.o3': "Idziesz za śmieciarką.", // nieuw, nalezen
    'c.binlorry.w': { m: "Upadek z jadącej śmieciarki to jedno z największych zagrożeń w tej pracy. W kabinie jesteś bezpieczny.", f: "Upadek z jadącej śmieciarki to jedno z największych zagrożeń w tej pracy. W kabinie jesteś bezpieczna.", x: "Upadek z jadącej śmieciarki to jedno z największych zagrożeń w tej pracy. W kabinie nic ci nie grozi." }, // nieuw, nalezen
    'l.reversing': "Bezpieczne cofanie", // nieuw, nalezen
    'w.achteruitrijden': "cofać (jechać do tyłu)", // nieuw, nalezen
    'w.dodehoek': "martwe pole (miejsce, gdzie kierowca cię nie widzi)", // nieuw, nalezen
    'w.aanwijzer': "osoba kierująca (osoba, która pokazuje kierowcy drogę)", // nieuw, nalezen
    'w.oogcontact': "kontakt wzrokowy", // nieuw, nalezen
    'w.piepen': "piszczeć, pikać", // nieuw, nalezen
    'w.cabine': "kabina (gdzie siedzi kierowca)", // nieuw, nalezen
    's.reversing.1': "Nigdy nie stój za śmieciarką.", // nieuw, nalezen
    's.reversing.2': "Nie widzę cię w lusterku.", // nieuw, nalezen
    's.reversing.3': "Złap kontakt wzrokowy z kierowcą.", // nieuw, nalezen
    'c.reversing.q': "Pomożesz mi cofnąć?", // nieuw, nalezen
    'c.reversing.a': "Tak, stoję po lewej. Patrz w lusterko.", // nieuw, nalezen
    'c.reversing': "Nigdy za cofającą śmieciarką", // nieuw, nalezen
    'c.reversing.b': "Wiele wypadków ze śmieciarkami zdarza się, kiedy jadą do tyłu. Kierowca nie widzi tego, co jest tuż za śmieciarką: to martwe pole. Dlatego nigdy nie stój i nie chodź za śmieciarką, która może cofać. Kieruj kierowcą z boku, tam, gdzie widzicie się w lusterku. Nie ma kontaktu wzrokowego? Kierowca się zatrzymuje. Zanim zaczniecie, ustalcie jasne znaki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.reversing.p': "Stój! Już cię nie widzę.", // nieuw, nalezen
    'c.reversing.s': "Śmieciarka cofa. Idziesz za nią, żeby wziąć worek. Co robisz?", // nieuw, nalezen
    'c.reversing.o1': "Czekasz, aż śmieciarka stanie.", // nieuw, nalezen
    'c.reversing.o2': "Idziesz szybko: to tylko sekunda.", // nieuw, nalezen
    'c.reversing.o3': "Machasz do kierowcy i idziesz.", // nieuw, nalezen
    'c.reversing.w': "Kierowca nie widzi cię za śmieciarką. Jedna sekunda wystarczy na wypadek.", // nieuw, nalezen
    'l.wastesorting': "Sortowanie odpadów", // nieuw, nalezen
    'w.papier': "papier", // nieuw, nalezen
    'w.plastic': "plastik", // nieuw, nalezen
    'w.gft': "odpady bio (owoce, warzywa i rośliny)", // nieuw, nalezen
    'w.restafval': "odpady zmieszane (to, czego nie da się posortować)", // nieuw, nalezen
    'w.karton': "karton, tektura", // nieuw, nalezen
    'w.blik': "puszka", // nieuw, nalezen
    's.wastesorting.1': "Szkło idzie do pojemnika na szkło.", // nieuw, nalezen
    's.wastesorting.2': "To należy do odpadów zmieszanych.", // nieuw, nalezen
    's.wastesorting.3': "Złóż karton na płasko.", // nieuw, nalezen
    'c.wastesorting.q': "Gdzie idzie pudełko po pizzy?", // nieuw, nalezen
    'c.wastesorting.a': "Do odpadów zmieszanych. Jest na nim tłuszcz.", // nieuw, nalezen
    'c.wastesorting': "Dobre sortowanie oszczędza pracę", // nieuw, nalezen
    'c.wastesorting.b': "Posortowane odpady można znowu wykorzystać: z papieru robi się papier, ze szkła szkło. Ale jedna zła rzecz może zepsuć cały ładunek. Dlatego zajrzyj do pojemnika, zanim go opróżnisz. Jest tam coś, co nie pasuje, na przykład worek z odpadami zmieszanymi w papierze? Zostaw go albo postępuj według zasad twojej firmy. To, jakie odpady gdzie idą, jest różne w każdej gminie: naucz się zasad w swojej okolicy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.wastesorting.p': "To tu nie pasuje.", // nieuw, nalezen
    'c.wastesorting.s': "Pojemnik na papier jest pełen czarnych worków na śmieci. Co robisz?", // nieuw, nalezen
    'c.wastesorting.o1': "Zostawiasz go i zgłaszasz to.", // nieuw, nalezen
    'c.wastesorting.o2': "Opróżniasz go do papieru.", // nieuw, nalezen
    'c.wastesorting.o3': "Wyjmujesz worki ręką.", // nieuw, nalezen
    'c.wastesorting.w': "Śmieci w papierze psują cały ładunek. W workach mogą też być ostre albo brudne rzeczy.", // nieuw, nalezen
    'l.wastesafety': "Ostre rzeczy i podnoszenie", // nieuw, nalezen
    'w.snijwond': "rana cięta (rana od czegoś ostrego)", // nieuw, nalezen
    'w.prikken': "ukłuć (ostry koniec wchodzi w skórę)", // nieuw, nalezen
    'w.naald': "igła", // nieuw, nalezen
    'w.scherp': "ostry", // nieuw, nalezen
    'w.rugpijn': "ból pleców", // nieuw, nalezen
    'w.tetanusprik': "szczepionka przeciw tężcowi (zastrzyk przeciw chorobie od brudu w ranie)", // nieuw, nalezen
    's.wastesafety.1': "Nigdy nie trzymaj worka od spodu.", // nieuw, nalezen
    's.wastesafety.2': "Uwaga, w tym worku jest szkło.", // nieuw, nalezen
    's.wastesafety.3': { m: "Ukłułem się igłą.", f: "Ukłułam się igłą.", x: "Igła mnie ukłuła." }, // nieuw, nalezen
    'c.wastesafety.q': "Mam skaleczenie. Co mam zrobić?", // nieuw, nalezen
    'c.wastesafety.a': "Dobrze umyj ranę. I powiedz mi o tym.", // nieuw, nalezen
    'c.wastesafety': "Nigdy nie ściskaj worka", // nieuw, nalezen
    'c.wastesafety.b': "W worku na śmieci może być szkło, noże albo igły. Dlatego nigdy nie przyciskaj worka do ciała, nigdy go nie ściskaj i nigdy nie noś go przy nodze: trzymaj go za górę, z dala od siebie. Noś rękawice. Podnoś na ugiętych kolanach, z prostymi plecami, a pojemnik pchaj, nie noś go. Coś cię ukłuło albo skaleczyło? Dobrze umyj ranę wodą i powiedz przełożonemu tego samego dnia.", // nieuw, nalezen
    'c.wastesafety.p': { m: "Ukłułem się.", f: "Ukłułam się.", x: "Coś mnie ukłuło." }, // nieuw, nalezen
    'c.wastesafety.s': "Worek się rozrywa. Widzisz w nim igłę. Co robisz?", // nieuw, nalezen
    'c.wastesafety.o1': "Nie dotykasz jej i zgłaszasz to.", // nieuw, nalezen
    'c.wastesafety.o2': "Podnosisz ją w rękawicach.", // nieuw, nalezen
    'c.wastesafety.o3': "Wpychasz ją z powrotem do worka.", // nieuw, nalezen
    'c.wastesafety.w': "Rękawice nie zatrzymują igły. Igła może przenosić chorobę.", // nieuw, nalezen
    'u.recycling': "Punkt zbiórki odpadów", // nieuw, nalezen
    'l.yard': "W punkcie zbiórki odpadów", // nieuw, nalezen
    'w.milieustraat': "punkt zbiórki odpadów, PSZOK (tu ludzie przywożą duże albo specjalne odpady)", // nieuw, nalezen
    'w.grofvuil': "odpady wielkogabarytowe (duże rzeczy, na przykład kanapa)", // nieuw, nalezen
    'w.puin': "gruz (połamane kamienie i cegły)", // nieuw, nalezen
    'w.matras': "materac", // nieuw, nalezen
    'w.weegbrug': "waga samochodowa (waga dla samochodów i ciężarówek)", // nieuw, nalezen
    'w.afvalpas': "karta na odpady (mieszkańcy pokazują ją przy wjeździe)", // nieuw, nalezen
    's.yard.1': "Gruz idzie do kontenera numer cztery.", // nieuw, nalezen
    's.yard.2': "Poproszę o kartę na odpady.", // nieuw, nalezen
    's.yard.3': "Najpierw proszę wjechać na wagę.", // nieuw, nalezen
    'c.yard.q': "Gdzie idzie ten materac?", // nieuw, nalezen
    'c.yard.a': "Do kontenera na odpady wielkogabarytowe, z tyłu.", // nieuw, nalezen
    'c.yard': "Pomagaj, ale dbaj o bezpieczeństwo na placu", // nieuw, nalezen
    'c.yard.b': { m: "W punkcie zbiórki odpadów mówisz gościom, gdzie idą ich odpady, i sprawdzasz, czy są dobrze posortowane. Bądź miły: wiele osób przyjeżdża tylko kilka razy w roku i nie zna zasad. Trzymaj dzieci i gości z dala od maszyn i od krawędzi wysokich kontenerów. Ciężkie rzeczy podnoście razem albo niech gość sam niesie swoje rzeczy. Ktoś przywozi coś, czego nie znasz? Zapytaj, zanim to wyląduje w kontenerze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "W punkcie zbiórki odpadów mówisz gościom, gdzie idą ich odpady, i sprawdzasz, czy są dobrze posortowane. Bądź miła: wiele osób przyjeżdża tylko kilka razy w roku i nie zna zasad. Trzymaj dzieci i gości z dala od maszyn i od krawędzi wysokich kontenerów. Ciężkie rzeczy podnoście razem albo niech gość sam niesie swoje rzeczy. Ktoś przywozi coś, czego nie znasz? Zapytaj, zanim to wyląduje w kontenerze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "W punkcie zbiórki odpadów mówisz gościom, gdzie idą ich odpady, i sprawdzasz, czy są dobrze posortowane. Zachowuj się życzliwie: wiele osób przyjeżdża tylko kilka razy w roku i nie zna zasad. Trzymaj dzieci i gości z dala od maszyn i od krawędzi wysokich kontenerów. Ciężkie rzeczy podnoście razem albo niech gość sam niesie swoje rzeczy. Ktoś przywozi coś, czego nie znasz? Zapytaj, zanim to wyląduje w kontenerze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen
    'c.yard.p': "To idzie do kontenera numer cztery.", // nieuw, nalezen
    'c.yard.s': "Mężczyzna chce wrzucić pełny worek do kontenera na drewno. Co robisz?", // nieuw, nalezen
    'c.yard.o1': "Pytasz, co jest w worku.", // nieuw, nalezen
    'c.yard.o2': "Pozwalasz mu: to jego odpady.", // nieuw, nalezen
    'c.yard.o3': "Wrzucasz go za niego.", // nieuw, nalezen
    'c.yard.w': "Jedna zła rzecz może zepsuć pełny kontener. Miłe pytanie sprawia, że odpady zostają czyste.", // nieuw, nalezen
    'l.hazardous': "Odpady niebezpieczne", // nieuw, nalezen
    'w.chemischafval': "odpady niebezpieczne (groźne odpady, na przykład farba i olej)", // nieuw, nalezen
    'w.spuitbus': "puszka z aerozolem, spray", // nieuw, nalezen
    'w.asbest': "azbest (niebezpieczny materiał w starych budynkach)", // nieuw, nalezen
    'w.lekken': "przeciekać, cieknąć", // nieuw, nalezen
    'w.gevarensymbool': "symbol zagrożenia (obrazek, który ostrzega przed niebezpieczeństwem)", // nieuw, nalezen
    'w.vat': "beczka", // nieuw, nalezen
    's.hazardous.1': "Postaw farbę przy odpadach niebezpiecznych.", // nieuw, nalezen
    's.hazardous.2': "Ta butelka cieknie. Podnieś ją w rękawicach.", // nieuw, nalezen
    's.hazardous.3': "Azbest musi być dobrze zapakowany.", // nieuw, nalezen
    'c.hazardous.q': "Co jest w tej butelce?", // nieuw, nalezen
    'c.hazardous.a': "Nie wiem. Odstaw ją na bok.", // nieuw, nalezen
    'c.hazardous': "Nieznane? Nie otwieraj, nie wąchaj", // nieuw, nalezen
    'c.hazardous.b': "Odpady niebezpieczne, takie jak farba, olej, środki czyszczące, baterie i spraye, mogą się zapalić, zatruć albo wybuchnąć. Szukaj symboli zagrożenia. Noś rękawice i okulary ochronne. Nigdy nie otwieraj butelki, żeby powąchać, co jest w środku, i nigdy nie mieszaj środków. Cieknącą butelkę trzymaj pionowo i postaw ją w tacce. Azbest można przyjąć tylko wtedy, gdy jest dobrze zapakowany: nigdy go nie łam i nie wyjmuj go z opakowania. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.hazardous.p': "Co tu jest w środku?", // nieuw, nalezen
    'c.hazardous.s': "Kobieta przynosi butelkę bez etykiety. Mocno śmierdzi. Co robisz?", // nieuw, nalezen
    'c.hazardous.o1': "Odstawiasz ją osobno i mówisz przełożonemu.", // nieuw, nalezen
    'c.hazardous.o2': "Otwierasz ją i wąchasz, co to jest.", // nieuw, nalezen
    'c.hazardous.o3': "Wlewasz to do beczki na farbę.", // nieuw, nalezen
    'c.hazardous.w': "Nieznane środki mogą reagować z innymi. Przełożony wie, gdzie można to bezpiecznie odstawić.", // nieuw, nalezen
    'l.baler': "Prasa belująca", // nieuw, nalezen
    'w.balenpers': "prasa belująca (maszyna, która prasuje odpady w bloki)", // nieuw, nalezen
    'w.baal': "bela (sprasowany blok papieru albo plastiku)", // nieuw, nalezen
    'w.persen': "prasować, zgniatać", // nieuw, nalezen
    'w.vastlopen': "zablokować się, zaciąć się", // nieuw, nalezen
    'w.binddraad': "drut do wiązania bel", // nieuw, nalezen
    'w.vulopening': "otwór wsadowy (tędy wchodzą odpady)", // nieuw, nalezen
    's.baler.1': "Prasa się zablokowała. Naciśnij wyłącznik awaryjny.", // nieuw, nalezen
    's.baler.2': "Nigdy nie wkładaj ręki do prasy.", // nieuw, nalezen
    's.baler.3': "Dobrze zwiąż belę.", // nieuw, nalezen
    'c.baler.q': "Prasa się zacina. Mogę zajrzeć?", // nieuw, nalezen
    'c.baler.a': "Nie. Najpierw trzeba odłączyć zasilanie.", // nieuw, nalezen
    'c.baler': "Nigdy nie sięgaj do prasy", // nieuw, nalezen
    'c.baler.b': "Prasa belująca prasuje z ogromną siłą. Używaj jej tylko wtedy, gdy umiesz ją obsługiwać. Nigdy nie wkładaj ręki, ramienia ani stopy do otworu wsadowego, także wtedy, gdy maszyna wygląda na zatrzymaną. Zablokowała się? Naciśnij wyłącznik awaryjny, wyłącz ją i dopilnuj, żeby nikt nie mógł jej włączyć: postępuj według kroków twojej firmy. Dopiero wtedy zajrzyj. Nigdy nie wchodź do prasy belującej ani do kontenera. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.baler.p': "Prasa się zablokowała.", // nieuw, nalezen
    'c.baler.s': "W otworze utknął kawałek kartonu. Maszyna stoi. Co robisz?", // nieuw, nalezen
    'c.baler.o1': "Wyłączasz ją całkowicie, potem go wyjmujesz.", // nieuw, nalezen
    'c.baler.o2': "Szybko wyciągasz go ręką.", // nieuw, nalezen
    'c.baler.o3': "Wpychasz go stopą.", // nieuw, nalezen
    'c.baler.w': "Maszyna, która stoi, może znowu ruszyć. Bez odłączenia zasilania twoja ręka jest w niebezpieczeństwie.", // nieuw, nalezen
    'l.shovel': "Ładowarka na placu", // nieuw, nalezen
    'w.shovel': "ładowarka kołowa (duża maszyna z łyżką z przodu)", // nieuw, nalezen
    'w.zwaailamp': "lampa ostrzegawcza (pomarańczowe światło na dachu maszyny)", // nieuw, nalezen
    'w.bunker': "boks (duże betonowe miejsce na jeden rodzaj odpadów)", // nieuw, nalezen
    'w.looppad': "ścieżka dla pieszych (droga tylko dla ludzi)", // nieuw, nalezen
    'w.toeteren': "trąbić", // nieuw, nalezen
    'w.opscheppen': "nabierać (łyżką albo łopatą)", // nieuw, nalezen
    's.shovel.1': "Zostań na ścieżce dla pieszych.", // nieuw, nalezen
    's.shovel.2': "Ładowarka cofa. Uwaga!", // nieuw, nalezen
    's.shovel.3': "Lampa ostrzegawcza się świeci. Maszyna jedzie.", // nieuw, nalezen
    'c.shovel.q': "Mogę przejść obok ładowarki?", // nieuw, nalezen
    'c.shovel.a': "Tylko jeśli kierowca cię widzi.", // nieuw, nalezen
    'c.shovel': "Nie wchodź ładowarce w drogę", // nieuw, nalezen
    'c.shovel.b': "Ładowarka kołowa jest duża, a kierowca widzi mało wokół niej, szczególnie z tyłu. Dlatego zostań na ścieżkach dla pieszych i noś odzież odblaskową. Nigdy nie chodź za maszyną, która jedzie. Chcesz przejść? Poczekaj, aż kierowca cię zobaczy i da znak. Lampa ostrzegawcza oznacza: ta maszyna pracuje. Trzymaj gości daleko od niej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.shovel.p': "Widzisz mnie?", // nieuw, nalezen
    'c.shovel.s': "Musisz przejść obok pracującej ładowarki. Kierowca patrzy w drugą stronę. Co robisz?", // nieuw, nalezen
    'c.shovel.o1': "Czekasz, aż cię zobaczy.", // nieuw, nalezen
    'c.shovel.o2': "Szybko przechodzisz obok.", // nieuw, nalezen
    'c.shovel.o3': "Przechodzisz za maszyną.", // nieuw, nalezen
    'c.shovel.w': "Kierowca, który cię nie zauważył, nie może się dla ciebie zatrzymać.", // nieuw, nalezen
    'u.toddlers': "Dzieci", // nieuw, nalezen
    'l.nappies': "Przewijanie", // nieuw, nalezen
    'w.luier': "pieluszka", // nieuw, nalezen
    'w.verschonen': "przewijać (zmieniać pieluszkę)", // nieuw, nalezen
    'w.commode': "przewijak", // nieuw, nalezen
    'w.billendoekje': "chusteczka nawilżana", // nieuw, nalezen
    'w.potje': "nocnik", // nieuw, nalezen
    'w.zindelijk': "bez pieluszki (dziecko umie korzystać z toalety)", // nieuw, nalezen
    's.nappies.1': "Idę przewinąć Sema.", // nieuw, nalezen
    's.nappies.2': "Po przewinięciu umyj ręce.", // nieuw, nalezen
    's.nappies.3': "Nigdy nie zostawiaj dziecka samego na przewijaku.", // nieuw, nalezen
    'c.nappies.q': { m: "Kiedy przewinąłeś Noor?", f: "Kiedy przewinęłaś Noor?", x: "O której Noor miała zmienianą pieluszkę?" }, // nieuw, nalezen
    'c.nappies.a': "O dziesiątej. Jest to w aplikacji.", // nieuw, nalezen
    'c.nappies': "Jedna ręka na dziecku", // nieuw, nalezen
    'c.nappies.b': "Przygotuj wszystko, zanim położysz dziecko na przewijaku: czystą pieluszkę, chusteczki i ubranie. Potem cały czas trzymaj jedną rękę na dziecku. Nigdy nie odchodź, nawet na sekundę. Po każdym przewijaniu umyj ręce i wyczyść przewijak. Zapisz, kiedy zmieniasz pieluszkę, żeby rodzice wiedzieli. Widzisz wysypkę albo ranę? Zapisz to i powiedz koledze. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.nappies.p': "Właśnie go przewijam.", // nieuw, nalezen
    'c.nappies.s': { m: "Przewijasz niemowlę. Zapomniałeś chusteczek, są po drugiej stronie pokoju. Co robisz?", f: "Przewijasz niemowlę. Zapomniałaś chusteczek, są po drugiej stronie pokoju. Co robisz?", x: "Przewijasz niemowlę. Chusteczki zostały po drugiej stronie pokoju. Co robisz?" }, // nieuw, nalezen
    'c.nappies.o1': "Bierzesz niemowlę ze sobą.", // nieuw, nalezen
    'c.nappies.o2': "Szybko po nie idziesz: to blisko.", // nieuw, nalezen
    'c.nappies.o3': "Zostawiasz niemowlę i wołasz kogoś.", // nieuw, nalezen
    'c.nappies.w': "Niemowlę może w sekundę spaść z przewijaka. Nigdy nie zostawiaj tam dziecka samego.", // nieuw, nalezen
    'l.mealtime': "Jedzenie i picie", // nieuw, nalezen
    'w.fles': "butelka (dla niemowlęcia)", // nieuw, nalezen
    'w.slabbetje': "śliniak", // nieuw, nalezen
    'w.beker': "kubek (z uchem)", // nieuw, nalezen
    'w.kinderstoel': "krzesełko do karmienia", // nieuw, nalezen
    'w.fruithap': "przecier owocowy", // nieuw, nalezen
    'w.boertje': "odbijanie (powietrza po jedzeniu)", // nieuw, nalezen
    's.mealtime.1': "Przed jedzeniem umyj ręce.", // nieuw, nalezen
    's.mealtime.2': "Daj Lisie butelkę o dwunastej.", // nieuw, nalezen
    's.mealtime.3': "Wszyscy siadają do stołu.", // nieuw, nalezen
    'c.mealtime.q': "Czy Daan może dostać ciasteczko?", // nieuw, nalezen
    'c.mealtime.a': "Nie, ma alergię. Spójrz na listę.", // nieuw, nalezen
    'c.mealtime': "Zanim dasz jedzenie, sprawdź listę", // nieuw, nalezen
    'c.mealtime.b': "Zanim dasz dziecku jedzenie albo picie, sprawdź listę: niektóre dzieci mają alergię, a inne nie mogą jeść pewnych rzeczy ze względu na zdrowie albo wiarę. Przed jedzeniem umyj ręce sobie i dzieciom. Niech dzieci siedzą, kiedy jedzą i piją, nigdy nie chodzą ani nie biegają. Dla małych dzieci krój jedzenie na małe kawałki, na przykład winogrona. Nigdy nie dawaj dziecku niczego, co inne dziecko przyniosło z domu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.mealtime.p': "Czy on może to jeść?", // nieuw, nalezen
    'c.mealtime.s': "Dziecko płacze, bo chce ciasteczko. Nie znasz dobrze tego dziecka. Co robisz?", // nieuw, nalezen
    'c.mealtime.o1': "Najpierw sprawdzasz listę.", // nieuw, nalezen
    'c.mealtime.o2': "Dajesz je: to tylko ciasteczko.", // nieuw, nalezen
    'c.mealtime.o3': "Dajesz pół ciasteczka.", // nieuw, nalezen
    'c.mealtime.w': "W ciasteczku mogą być orzechy, mleko albo jajko. Dla dziecka z alergią może to być bardzo niebezpieczne.", // nieuw, nalezen
    'l.naptime': "Spanie", // nieuw, nalezen
    'w.bedje': "łóżeczko (małe łóżko dla niemowlęcia)", // nieuw, nalezen
    'w.slaapkamer': "sypialnia", // nieuw, nalezen
    'w.knuffel': "przytulanka", // nieuw, nalezen
    'w.speen': "smoczek", // nieuw, nalezen
    'w.babyfoon': "elektroniczna niania", // nieuw, nalezen
    'w.slaapzak': "śpiworek (dla niemowlęcia)", // nieuw, nalezen
    's.naptime.1': "Połóż niemowlę na plecach.", // nieuw, nalezen
    's.naptime.2': "Często zaglądam do sypialni.", // nieuw, nalezen
    's.naptime.3': "Masz swoją przytulankę. Śpij dobrze.", // nieuw, nalezen
    'c.naptime.q': "Czy Mila już śpi?", // nieuw, nalezen
    'c.naptime.a': "Tak, od pierwszej. Zaraz znowu zajrzę.", // nieuw, nalezen
    'c.naptime': "Niemowlęta śpią na plecach", // nieuw, nalezen
    'c.naptime.b': "Niemowlę śpi najbezpieczniej na plecach, w śpiworku, we własnym łóżeczku. Żadnej poduszki, żadnego luźnego kocyka i żadnych dużych zabawek w łóżeczku. Utrzymuj w pokoju chłód i świeże powietrze. Często sprawdzaj śpiące dzieci: patrz i słuchaj, także kiedy elektroniczna niania jest włączona. Rodzic prosi, żeby jego dziecko spało inaczej? Najpierw powiedz przełożonemu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.naptime.p': "Pójdę zajrzeć do sypialni.", // nieuw, nalezen
    'c.naptime.s': "Niemowlę zasnęło w łóżeczku na brzuszku. Co robisz?", // nieuw, nalezen
    'c.naptime.o1': "Delikatnie obracasz je na plecy.", // nieuw, nalezen
    'c.naptime.o2': "Pozwalasz mu spać: przecież już śpi.", // nieuw, nalezen
    'c.naptime.o3': "Kładziesz obok niego poduszkę.", // nieuw, nalezen
    'c.naptime.w': "Na plecach niemowlę może swobodnie oddychać. Poduszka może zakryć mu twarz.", // nieuw, nalezen
    'l.playtime': "Zabawa", // nieuw, nalezen
    'w.spelen': "bawić się", // nieuw, nalezen
    'w.speelgoed': "zabawki", // nieuw, nalezen
    'w.zandbak': "piaskownica", // nieuw, nalezen
    'w.glijbaan': "zjeżdżalnia", // nieuw, nalezen
    'w.puzzel': "puzzle, układanka", // nieuw, nalezen
    'w.buitenspelen': "bawić się na dworze", // nieuw, nalezen
    's.playtime.1': "Idziemy bawić się na dwór. Zakładamy kurtki!", // nieuw, nalezen
    's.playtime.2': "Posprzątaj zabawki.", // nieuw, nalezen
    's.playtime.3': "Na zjeżdżalni jedno dziecko naraz.", // nieuw, nalezen
    'c.playtime.q': "Mogę się bawić układanką?", // nieuw, nalezen
    'c.playtime.a': "Tak, przy stole. Potem ją sprzątasz.", // nieuw, nalezen
    'c.playtime': "Bezpieczna zabawa: patrz, licz, sprawdzaj", // nieuw, nalezen
    'c.playtime.b': "Dzieci uczą się przez zabawę, więc pozwól im próbować różnych rzeczy. Ale zawsze miej je na oku, także na dworze. Policz dzieci, kiedy wychodzicie i kiedy wracacie do środka. Najpierw sprawdź plac zabaw: czy brama jest zamknięta, czy jest tam szkło albo śmieci? Zabawki z małymi częściami nie są dla dzieci poniżej trzech lat: mogą się nimi zakrztusić. Często myj zabawki, które dzieci biorą do buzi. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.playtime.p': "Czy wszyscy są?", // nieuw, nalezen
    'c.playtime.s': "Wracasz z placu zabaw do środka. Liczysz dzieci i jednego brakuje. Co robisz?", // nieuw, nalezen
    'c.playtime.o1': "Mówisz koledze i od razu szukasz.", // nieuw, nalezen
    'c.playtime.o2': "Czekasz: dziecko samo przyjdzie.", // nieuw, nalezen
    'c.playtime.o3': "Liczysz jeszcze raz jutro.", // nieuw, nalezen
    'c.playtime.w': "Dziecko samo na dworze może zrobić sobie krzywdę albo odejść. Liczy się każda minuta.", // nieuw, nalezen
    'u.daycare': "Rodzice, bezpieczeństwo i grupa", // nieuw, nalezen
    'l.pickup': "Przyprowadzanie i odbieranie", // nieuw, nalezen
    'w.ouder': "rodzic", // nieuw, nalezen
    'w.afscheid': "pożegnanie", // nieuw, nalezen
    'w.oppas': "opiekunka, niania", // nieuw, nalezen
    'w.schriftje': "zeszyt (na notatki między rodzicami a opiekunami)", // nieuw, nalezen
    'w.ouderapp': "aplikacja dla rodziców (na zdjęcia i wiadomości do rodziców)", // nieuw, nalezen
    'w.wennen': "przyzwyczajać się (do nowego miejsca)", // nieuw, nalezen
    's.pickup.1': "Zapiszę to w zeszycie.", // nieuw, nalezen
    's.pickup.2': "Powiedz tacie pa pa.", // nieuw, nalezen
    's.pickup.3': "Wrzucam zdjęcie do aplikacji dla rodziców.", // nieuw, nalezen
    'c.pickup.q': "Kto dziś odbiera Sema?", // nieuw, nalezen
    'c.pickup.a': "Jego babcia. Jest na liście.", // nieuw, nalezen
    'c.pickup': "Tylko osobom z listy", // nieuw, nalezen
    'c.pickup.b': "Oddawaj dziecko tylko rodzicowi albo komuś, o kim rodzice ci powiedzieli. Nie znasz tej osoby? Zapytaj, kim jest, sprawdź jej dokument tożsamości i upewnij się u rodziców albo u przełożonego. Przy odbiorze powiedz rodzicowi, jak minął dzień: jedzenie, spanie, zabawa i wszystko, co było szczególne. Ważne rzeczy zapisz w zeszycie albo w aplikacji. O innych dzieciach rozmawiaj tylko z ich własnymi rodzicami. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.pickup.p': "Przepraszam, z kim rozmawiam? Zadzwonię do rodziców.", // nieuw, nalezen
    'c.pickup.s': "Po Sema przychodzi mężczyzna, którego nie znasz. Nie ma go na liście. Co robisz?", // nieuw, nalezen
    'c.pickup.o1': "Dzwonisz do rodziców, zanim Sem wyjdzie.", // nieuw, nalezen
    'c.pickup.o2': "Puszczasz Sema: on zna jego imię.", // nieuw, nalezen
    'c.pickup.o3': "Pytasz Sema, czy go zna.", // nieuw, nalezen
    'c.pickup.w': "Odpowiadasz za dziecko, dopóki nie przejmie go osoba wybrana przez rodziców.", // nieuw, nalezen
    'l.childsafety': "Bezpieczeństwo w grupie", // nieuw, nalezen
    'w.traphekje': "bramka na schody", // nieuw, nalezen
    'w.vingerstrip': "osłona na palce (na drzwiach, żeby palce się nie przytrzasnęły)", // nieuw, nalezen
    'w.verslikken': "zakrztusić się (jedzenie wpada do złej dziurki)", // nieuw, nalezen
    'w.bult': "guz (na głowie)", // nieuw, nalezen
    'w.schaafwond': "otarcie (zdarta skóra)", // nieuw, nalezen
    'w.toezicht': "nadzór (pilnujesz dzieci)", // nieuw, nalezen
    's.childsafety.1': "Zawsze zamykaj bramkę na schody.", // nieuw, nalezen
    's.childsafety.2': "Przykładam trochę lodu do guza.", // nieuw, nalezen
    's.childsafety.3': "Sem się krztusi. Pomagam mu.", // nieuw, nalezen
    'c.childsafety.q': "Czy Bo się przewróciła?", // nieuw, nalezen
    'c.childsafety.a': "Tak, ma guza. Dzwonię do jej mamy.", // nieuw, nalezen
    'c.childsafety': "Rozejrzyj się oczami dziecka", // nieuw, nalezen
    'c.childsafety.b': "Małe dzieci wkładają wszystko do buzi i na wszystko się wspinają. Dlatego trzymaj bramkę na schody zamkniętą, odkładaj środki czystości i leki poza zasięg dzieci i trzymaj gorące napoje z dala od nich. Codziennie sprawdzaj pomieszczenie. Dziecko zrobiło sobie krzywdę? Udziel pierwszej pomocy, pociesz dziecko, powiedz rodzicom i zapisz to. Czy to coś poważnego? Zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.childsafety.p': "Bramka na schody jest otwarta.", // nieuw, nalezen
    'c.childsafety.s': "Stawiasz gorącą kawę na niskim stoliku. Podchodzi do niej maluch. Co robisz?", // nieuw, nalezen
    'c.childsafety.o1': "Od razu stawiasz kawę wysoko.", // nieuw, nalezen
    'c.childsafety.o2': "Mówisz maluchowi, żeby jej nie dotykał.", // nieuw, nalezen
    'c.childsafety.o3': "Szybko ją wypijasz.", // nieuw, nalezen
    'c.childsafety.w': "Gorąca kawa może mocno poparzyć małe dziecko. Poza zasięgiem dzieci to jedyne bezpieczne miejsce.", // nieuw, nalezen
    'l.sickchild': "Chore dziecko i alergie", // nieuw, nalezen
    'w.huiduitslag': "wysypka (czerwone plamy na skórze)", // nieuw, nalezen
    'w.diarree': "biegunka", // nieuw, nalezen
    'w.overgeven': "wymiotować", // nieuw, nalezen
    'w.allergielijst': "lista alergii", // nieuw, nalezen
    'w.adrenalinepen': "autostrzykawka z adrenaliną (lek w strzykawce na silną alergię)", // nieuw, nalezen
    'w.temperaturen': "mierzyć temperaturę", // nieuw, nalezen
    's.sickchild.1': "Sem ma gorączkę. Dzwonię do jego taty.", // nieuw, nalezen
    's.sickchild.2': "Przed jedzeniem spójrz na listę alergii.", // nieuw, nalezen
    's.sickchild.3': "Nigdy nie dawaj leku bez zgody.", // nieuw, nalezen
    'c.sickchild.q': "Jak się czuje Jip?", // nieuw, nalezen
    'c.sickchild.a': "Jest bardzo ciepły. Zmierzę mu temperaturę.", // nieuw, nalezen
    'c.sickchild': "Chore dziecko: mów, nie zgaduj", // nieuw, nalezen
    'c.sickchild.b': { m: "Obserwuj, jak czują się dzieci. Dziecko jest gorące, bardzo zmęczone, wymiotuje albo ma wysypkę? Zmierz mu temperaturę, powiedz koledze i zadzwoń do rodziców. Lek dawaj tylko z pisemną zgodą rodziców i zapisz, co dałeś i kiedy. Wiedz, które dzieci mają alergię i gdzie są ich leki. Dziecko z silną reakcją alergiczną: użyj autostrzykawki z adrenaliną, jeśli cię tego nauczono, i zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Obserwuj, jak czują się dzieci. Dziecko jest gorące, bardzo zmęczone, wymiotuje albo ma wysypkę? Zmierz mu temperaturę, powiedz koledze i zadzwoń do rodziców. Lek dawaj tylko z pisemną zgodą rodziców i zapisz, co dałaś i kiedy. Wiedz, które dzieci mają alergię i gdzie są ich leki. Dziecko z silną reakcją alergiczną: użyj autostrzykawki z adrenaliną, jeśli cię tego nauczono, i zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Obserwuj, jak czują się dzieci. Dziecko jest gorące, bardzo zmęczone, wymiotuje albo ma wysypkę? Zmierz mu temperaturę, powiedz koledze i zadzwoń do rodziców. Lek dawaj tylko z pisemną zgodą rodziców i zapisz, jaki lek i o której godzinie dziecko dostało. Wiedz, które dzieci mają alergię i gdzie są ich leki. Dziecko z silną reakcją alergiczną: użyj autostrzykawki z adrenaliną, jeśli cię tego nauczono, i zadzwoń pod 112. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen
    'c.sickchild.p': "Państwa dziecko jest chore. Czy mogą Państwo po nie przyjechać?", // nieuw, nalezen
    'c.sickchild.s': "Mama mówi: „Daj mu syrop na gorączkę o drugiej.” Nie ma formularza. Co robisz?", // nieuw, nalezen
    'c.sickchild.o1': "Prosisz ją, żeby najpierw podpisała formularz.", // nieuw, nalezen
    'c.sickchild.o2': "Dajesz go: mama prosiła.", // nieuw, nalezen
    'c.sickchild.o3': "Dajesz połowę, dla bezpieczeństwa.", // nieuw, nalezen
    'c.sickchild.w': "Bez pisemnej zgody nie wolno ci dawać leków. Formularz chroni dziecko i ciebie.", // nieuw, nalezen
    'l.grouprules': "Grupa i zasady", // nieuw, nalezen
    'w.pedagogischmedewerker': "opiekun / opiekunka dzieci (w żłobku albo przedszkolu)", // nieuw, nalezen
    'w.mentor': "mentor (opiekun, który z bliska śledzi rozwój jednego dziecka)", // nieuw, nalezen
    'w.vierogenprincipe': "zasada czworga oczu (inny dorosły zawsze może cię widzieć albo słyszeć)", // nieuw, nalezen
    'w.observeren': "obserwować (uważnie patrzeć i to zapisywać)", // nieuw, nalezen
    'w.peuter': "maluch (dziecko w wieku dwóch albo trzech lat)", // nieuw, nalezen
    'w.groep': "grupa (dzieci, które codziennie są razem)", // nieuw, nalezen
    's.grouprules.1': { m: "Jestem mentorem Lisy.", f: "Jestem mentorką Lisy.", x: "Jestem mentorem / mentorką Lisy." }, // nieuw, nalezen
    's.grouprules.2': "Kolega zawsze może nas widzieć albo słyszeć.", // nieuw, nalezen
    's.grouprules.3': "Martwię się o Daana.", // nieuw, nalezen
    'c.grouprules.q': "Mogę wyjść z grupą na dwór w pojedynkę?", // nieuw, nalezen
    'c.grouprules.a': "Tak, ale najpierw powiedz koledze.", // nieuw, nalezen
    'c.grouprules': { m: "Nigdy sam poza zasięgiem wzroku", f: "Nigdy sama poza zasięgiem wzroku", x: "Nigdy w pojedynkę poza zasięgiem wzroku" }, // nieuw, nalezen
    'c.grouprules.b': "W opiece nad dziećmi inny dorosły musi zawsze móc cię widzieć albo słyszeć, kiedy jesteś z dziećmi. To chroni dzieci i ciebie. Każde dziecko ma mentora: jednego opiekuna, który z bliska śledzi rozwój tego dziecka i rozmawia z rodzicami. Martwisz się, co dzieje się z dzieckiem w domu, na przykład z powodu siniaków albo strachu? Nie wypytuj za bardzo dziecka: powiedz przełożonemu, który zna kolejne kroki. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.grouprules.p': "Martwię się o to dziecko.", // nieuw, nalezen
    'c.grouprules.s': "Znowu widzisz siniaki u dziecka. Dziecko jest ciche. Co robisz?", // nieuw, nalezen
    'c.grouprules.o1': "Mówisz przełożonemu tego samego dnia.", // nieuw, nalezen
    'c.grouprules.o2': "Zadajesz dziecku dużo pytań.", // nieuw, nalezen
    'c.grouprules.o3': "Dzwonisz do rodziców i pytasz dlaczego.", // nieuw, nalezen
    'c.grouprules.w': "Przełożony zna kroki, kiedy martwisz się o dziecko. Dużo pytań może przestraszyć dziecko.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Toalety, hotel i maszyny", // nieuw, nalezen
    'l.sanitary': "Toalety i umywalki", // nieuw, nalezen
    'w.wastafel': "umywalka (zlew w łazience albo toalecie)", // nieuw, nalezen
    'w.toiletpot': "muszla klozetowa", // nieuw, nalezen
    'w.toiletborstel': "szczotka do toalety", // nieuw, nalezen
    'w.urinoir': "pisuar", // nieuw, nalezen
    'w.kalk': "kamień (biały osad z wody na kranach i płytkach)", // nieuw, nalezen
    'w.ontstopper': "przepychacz (narzędzie do zatkanej toalety albo odpływu)", // nieuw, nalezen
    's.sanitary.1': "Najpierw robię umywalki, potem toalety.", // nieuw, nalezen
    's.sanitary.2': "Na kranie jest kamień.", // nieuw, nalezen
    's.sanitary.3': "Toaleta na pierwszym piętrze jest zatkana.", // nieuw, nalezen
    'c.sanitary.q': "Toalety są gotowe?", // nieuw, nalezen
    'c.sanitary.a': "Jeszcze nie. Jedna toaleta jest zatkana.", // nieuw, nalezen
    'c.sanitary': "Od czystego do brudnego", // nieuw, nalezen
    'c.sanitary.b': "W łazience pracujesz od czystego do brudnego: najpierw lustra i umywalki, potem toalety, a podłoga na końcu. Wtedy nie przenosisz brudu z toalety na umywalkę. Używaj ściereczek w kolorze dla toalet i noś rękawice. Umyj też szczotkę do toalety i pozwól jej wyschnąć. Toaleta jest zatkana albo zepsuta? Powieś kartkę na drzwiach i zgłoś to. Po skończonej pracy umyj ręce, także po pracy w rękawicach. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.sanitary.p': "Ta toaleta jest zatkana. Wieszam na niej kartkę.", // nieuw, nalezen
    'c.sanitary.s': { m: "Umyłeś toaletę. Teraz umywalka. Nadal trzymasz tę samą ściereczkę. Co robisz?", f: "Umyłaś toaletę. Teraz umywalka. Nadal trzymasz tę samą ściereczkę. Co robisz?", x: "Toaleta jest już umyta. Teraz umywalka. Nadal trzymasz tę samą ściereczkę. Co robisz?" }, // nieuw, nalezen
    'c.sanitary.o1': "Bierzesz ściereczkę w kolorze dla umywalek.", // nieuw, nalezen
    'c.sanitary.o2': "Używasz tej samej ściereczki: wygląda jeszcze czysto.", // nieuw, nalezen
    'c.sanitary.o3': "Najpierw płuczesz ściereczkę w toalecie.", // nieuw, nalezen
    'c.sanitary.w': "Na ściereczce są zarazki z toalety, także jeśli ich nie widać. Nowa ściereczka trzyma je z dala od rąk i twarzy.", // nieuw, nalezen
    'l.hotelroom': "Pokoje hotelowe", // nieuw, nalezen
    'w.laken': "prześcieradło (na łóżku)", // nieuw, nalezen
    'w.kussensloop': "poszewka na poduszkę", // nieuw, nalezen
    'w.dekbed': "kołdra", // nieuw, nalezen
    'w.handdoek': "ręcznik", // nieuw, nalezen
    'w.kamerlijst': "lista pokoi (pokoje, które musisz dziś zrobić)", // nieuw, nalezen
    'w.opmaken': "słać (łóżko)", // nieuw, nalezen
    's.hotelroom.1': "Ścielę łóżko czystą pościelą.", // nieuw, nalezen
    's.hotelroom.2': "Połóż dwa czyste ręczniki w łazience.", // nieuw, nalezen
    's.hotelroom.3': "Pokój dwanaście jest gotowy. Idę do trzynastki.", // nieuw, nalezen
    'c.hotelroom.q': "Ile pokoi ci jeszcze zostało?", // nieuw, nalezen
    'c.hotelroom.a': "Jeszcze cztery. Wtedy moja lista jest gotowa.", // nieuw, nalezen
    'c.hotelroom': "Zapukaj, powiedz, kim jesteś, i czekaj", // nieuw, nalezen
    'c.hotelroom.b': "Zanim wejdziesz do pokoju hotelowego, zapukaj i powiedz, kim jesteś, na przykład „Housekeeping!”. Chwilę poczekaj i zapukaj jeszcze raz. Na drzwiach wisi kartka „Niet storen”? Wtedy nie wchodź i zapisz to na liście pokoi. Gość jest w pokoju? Zapytaj, czy możesz teraz posprzątać, albo przyjdź później. Rzeczy gościa zostają tam, gdzie są. Gość czegoś zapomniał? Zanieś to do recepcji. Nigdy nic nie zatrzymuj dla siebie, nawet drobiazgu. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.hotelroom.p': "Dzień dobry. Czy mogę teraz posprzątać pokój?", // nieuw, nalezen
    'c.hotelroom.s': "W pustym pokoju znajdujesz telefon pod łóżkiem. Gość już wyjechał. Co robisz?", // nieuw, nalezen
    'c.hotelroom.o1': "Zanosisz go do recepcji.", // nieuw, nalezen
    'c.hotelroom.o2': "Zatrzymujesz go: gościa już nie ma.", // nieuw, nalezen
    'c.hotelroom.o3': "Zostawiasz go pod łóżkiem.", // nieuw, nalezen
    'c.hotelroom.w': "Zgubione rzeczy dalej należą do gościa. Recepcja może je oddać. Zatrzymanie ich to kradzież i możesz za to stracić pracę.", // nieuw, nalezen
    'l.dosing': "Środki i maszyny", // nieuw, nalezen
    'w.doseren': "dozować (używać właściwej ilości środka)", // nieuw, nalezen
    'w.maatbeker': "miarka", // nieuw, nalezen
    'w.sprayflacon': "butelka ze spryskiwaczem", // nieuw, nalezen
    'w.concentraat': "koncentrat (mocny środek, który mieszasz z wodą)", // nieuw, nalezen
    'w.veiligheidsblad': "karta charakterystyki (mówi o zagrożeniach środka i co robić)", // nieuw, nalezen
    'w.schrobzuigmachine': "szorowarka (maszyna, która szoruje podłogę i zbiera wodę do sucha)", // nieuw, nalezen
    's.dosing.1': "Wlej jedną nakrętkę do wiadra wody.", // nieuw, nalezen
    's.dosing.2': "Najpierw przeczytaj etykietę.", // nieuw, nalezen
    's.dosing.3': "Szorowarka musi iść do ładowarki.", // nieuw, nalezen
    'c.dosing.q': "Wlej trochę więcej środka. Wtedy będzie czyściej.", // nieuw, nalezen
    'c.dosing.a': "Nie, więcej nie znaczy lepiej. Używam miarki.", // nieuw, nalezen
    'c.dosing': "Właściwa dawka, nie więcej", // nieuw, nalezen
    'c.dosing.b': "Więcej środka nie czyści lepiej. Za dużo zostawia lepką warstwę, więc podłoga szybciej się brudzi i może być śliska. To jest też gorsze dla twojej skóry i płuc. Używaj miarki albo pompki dozującej i rób tak, jak jest na etykiecie. Najpierw woda, potem środek: wtedy nie pryska. Zanim użyjesz szorowarki, sprawdź, czy jest naładowana i ma czystą wodę w zbiorniku. Na końcu opróżnij i wypłucz zbiornik z brudną wodą. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.dosing.p': "Ile mam tego wlać?", // nieuw, nalezen
    'c.dosing.s': "Podłoga dalej się klei. Kolega mówi: „Daj podwójnie środka.” Co robisz?", // nieuw, nalezen
    'c.dosing.o1': "Używasz dawki z etykiety i pytasz.", // nieuw, nalezen
    'c.dosing.o2': "Dajesz podwójnie: wtedy będzie czysto.", // nieuw, nalezen
    'c.dosing.o3': "Wylewasz środek prosto na podłogę.", // nieuw, nalezen
    'c.dosing.w': "Lepka podłoga często oznacza za dużo środka, a nie za mało. Właściwa dawka czyści najlepiej i jest najbezpieczniejsza.", // nieuw, nalezen
    'l.officenight': "Biura, wcześnie albo późno", // nieuw, nalezen
    'w.toetsenbord': "klawiatura", // nieuw, nalezen
    'w.papierbak': "pojemnik na papier (na stary papier)", // nieuw, nalezen
    'w.lichtschakelaar': "włącznik światła", // nieuw, nalezen
    'w.pantry': "aneks kuchenny (mała kuchnia w biurze)", // nieuw, nalezen
    'w.deurmat': "wycieraczka (mata przy wejściu)", // nieuw, nalezen
    'w.alleenwerken': "pracować w pojedynkę (nikogo innego nie ma w budynku)", // nieuw, nalezen
    's.officenight.1': "Opróżniam kosze i pojemnik na papier.", // nieuw, nalezen
    's.officenight.2': "Nie dotykam papierów na biurku.", // nieuw, nalezen
    's.officenight.3': "Gaszę światło, kiedy skończę.", // nieuw, nalezen
    'c.officenight.q': "Pracujesz dziś wieczorem w budynku w pojedynkę?", // nieuw, nalezen
    'c.officenight.a': "Tak. Wyślę ci wiadomość, kiedy skończę.", // nieuw, nalezen
    'c.officenight': "W pojedynkę w budynku", // nieuw, nalezen
    'c.officenight.b': "Wcześnie rano albo późno wieczorem często sprzątasz biuro w pojedynkę. Wiedz, co robić, jeśli coś się stanie: do kogo dzwonisz i gdzie jest apteczka? Miej telefon przy sobie. Umów się z przełożonym albo kolegą, że wysyłasz wiadomość, kiedy zaczynasz i kiedy kończysz. Nie wpuszczaj nikogo, kogo nie znasz. Nie dotykaj papierów, ekranów ani klawiatur bardziej, niż trzeba do sprzątania, i nigdy nie czytaj, co na nich jest. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.officenight.p': { m: "Skończyłem i idę już do domu.", f: "Skończyłam i idę już do domu.", x: "Wszystko zrobione, idę już do domu." }, // nieuw, nalezen
    'c.officenight.s': "W nocy jakiś mężczyzna puka w szklane drzwi. Mówi, że tu pracuje i zapomniał klucza. Co robisz?", // nieuw, nalezen
    'c.officenight.o1': "Nie otwierasz. Dzwonisz do przełożonego.", // nieuw, nalezen
    'c.officenight.o2': "Wpuszczasz go: wygląda sympatycznie.", // nieuw, nalezen
    'c.officenight.o3': "Dajesz mu swój klucz.", // nieuw, nalezen
    'c.officenight.w': "Każdy może powiedzieć, że tam pracuje. Przełożony może to sprawdzić. Twoje bezpieczeństwo i budynek są najważniejsze.", // nieuw, nalezen
    'u.cooking': "Kuchnia i obsługa sali", // nieuw, nalezen
    'l.knives': "Noże i krojenie", // nieuw, nalezen
    'w.koksmes': "nóż szefa kuchni (duży nóż kuchenny)", // nieuw, nalezen
    'w.dunschiller': "obieraczka do warzyw", // nieuw, nalezen
    'w.schillen': "obierać", // nieuw, nalezen
    'w.hakken': "siekać (kroić bardzo drobno)", // nieuw, nalezen
    'w.raspen': "trzeć na tarce", // nieuw, nalezen
    'w.blokjes': "kostka (małe kwadratowe kawałki)", // nieuw, nalezen
    's.knives.1': "Pokrój marchewki w kostkę.", // nieuw, nalezen
    's.knives.2': "Nie wkładaj noża do zlewu.", // nieuw, nalezen
    's.knives.3': "Posiekaj drobno pietruszkę.", // nieuw, nalezen
    'c.knives.q': "Możesz pokroić cebulę?", // nieuw, nalezen
    'c.knives.a': "Tak, szefie. W krążki czy w kostkę?", // nieuw, nalezen
    'c.knives': "Nóż to narzędzie, nie zabawka", // nieuw, nalezen
    'c.knives.b': "Dbaj, żeby nóż był ostry: tępy nóż łatwiej się ześlizguje. Krój na desce, która się nie rusza: podłóż pod nią mokrą ściereczkę. Podwiń palce do środka, jak pazur. Chodź z ostrzem w dół, blisko nogi, i mów „Mes!” kiedy kogoś mijasz. Nigdy nie wkładaj noża do zlewu pełnego wody: ktoś może go chwycić, nie widząc go. Nóż spada? Cofnij się, nie łap go. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.knives.p': "Nóż! Idę za tobą.", // nieuw, nalezen
    'c.knives.s': "Kroisz. Nóż zsuwa ci się z deski i spada. Co robisz?", // nieuw, nalezen
    'c.knives.o1': "Cofasz się i pozwalasz mu spaść.", // nieuw, nalezen
    'c.knives.o2': "Szybko łapiesz go ręką.", // nieuw, nalezen
    'c.knives.o3': "Zatrzymujesz go stopą.", // nieuw, nalezen
    'c.knives.w': "Spadający nóż może głęboko przeciąć rękę albo stopę. Nóż na podłodze trzeba tylko umyć.", // nieuw, nalezen
    'l.rawcooked': "Surowe, ugotowane i alergeny", // nieuw, nalezen
    'w.rauw': "surowy (nieugotowany)", // nieuw, nalezen
    'w.gaar': "ugotowany, gotowy (do jedzenia)", // nieuw, nalezen
    'w.afdekken': "przykryć (pokrywką albo folią)", // nieuw, nalezen
    'w.kleurcode': "kod kolorów (jeden kolor deski i noża dla każdego rodzaju jedzenia)", // nieuw, nalezen
    'w.allergenenlijst': "lista alergenów (mówi, co jest w każdym daniu)", // nieuw, nalezen
    'w.glutenvrij': "bezglutenowy (bez glutenu)", // nieuw, nalezen
    's.rawcooked.1': "Surowe mięso idzie na dół lodówki.", // nieuw, nalezen
    's.rawcooked.2': "Kurczak jest już gotowy?", // nieuw, nalezen
    's.rawcooked.3': "Przykryj pojemniki w chłodni.", // nieuw, nalezen
    'c.rawcooked.q': "Ten sos jest bezglutenowy?", // nieuw, nalezen
    'c.rawcooked.a': "Nie wiem na pewno. Sprawdzę na liście alergenów.", // nieuw, nalezen
    'c.rawcooked': "Surowe i gotowe nigdy się nie stykają", // nieuw, nalezen
    'c.rawcooked.b': "Surowe mięso, ryby i jajka mogą mieć zarazki. Trzymaj je z dala od jedzenia, które jest gotowe do zjedzenia. Używaj osobnej deski i noża albo kodu kolorów twojej kuchni i myj ręce, kiedy dotkniesz surowego jedzenia. Surowe mięso idzie na dół lodówki, żeby nic nie kapało na inne jedzenie. Przykrywaj jedzenie i zapisuj na nim datę. Przy alergii może wystarczyć ślad: używaj czystych narzędzi. Restauracja musi umieć powiedzieć gościom, jakie alergeny są w daniu: sprawdź listę alergenów. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.rawcooked.p': "Która deska jest do surowego mięsa?", // nieuw, nalezen
    'c.rawcooked.s': "Kroisz surowego kurczaka. Potem musisz pokroić pomidory do sałatki. Co robisz?", // nieuw, nalezen
    'c.rawcooked.o1': "Bierzesz czystą deskę i czysty nóż.", // nieuw, nalezen
    'c.rawcooked.o2': "Przecierasz deskę ściereczką i kroisz dalej.", // nieuw, nalezen
    'c.rawcooked.o3': "Kroisz pomidory na tej samej desce.", // nieuw, nalezen
    'c.rawcooked.w': "Zarazki z surowego kurczaka przechodzą na pomidory, a sałatki już się nie gotuje. Czysta deska temu zapobiega.", // nieuw, nalezen
    'l.pass': "Zmywalnia i wydawka", // nieuw, nalezen
    'w.pass': "wydawka (lada, na której talerze czekają na kelnera)", // nieuw, nalezen
    'w.bon': "bon (zamówienie od kelnera do kuchni)", // nieuw, nalezen
    'w.spoelkeuken': "zmywalnia (miejsce, gdzie się zmywa)", // nieuw, nalezen
    'w.vaatwaskorf': "kosz do zmywarki (kosz, który wkłada się do zmywarki)", // nieuw, nalezen
    'w.voorspoelen': "wstępnie opłukać (opłukać przed maszyną)", // nieuw, nalezen
    'w.warmhoudlamp': "lampa grzewcza (utrzymuje talerze w cieple)", // nieuw, nalezen
    's.pass.1': "Stolik osiem jest na wydawce.", // nieuw, nalezen
    's.pass.2': "Wchodzą dwa nowe bony.", // nieuw, nalezen
    's.pass.3': "Najpierw opłucz talerze.", // nieuw, nalezen
    'c.pass.q': "Gdzie jest stolik dwanaście?", // nieuw, nalezen
    'c.pass.a': "Jest na wydawce. Już go niosę.", // nieuw, nalezen
    'c.pass': "Wydawka: talerze nie czekają", // nieuw, nalezen
    'c.pass.b': "Na wydawkę kuchnia stawia talerze dla kelnera. Gorące jedzenie musi szybko trafić do gościa, więc talerz nie czeka długo na wydawce. Sprawdź bon: właściwy stolik, właściwe dania, czysty brzeg talerza? Wtedy go weź. W zmywalni: opłucz, włóż wszystko do koszy, a resztę zrobi maszyna. Nie otwieraj maszyny, kiedy pracuje: para jest bardzo gorąca. Zakładaj rękawice, kiedy uzupełniasz środki do maszyny. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.pass.p': "Który to stolik?", // nieuw, nalezen
    'c.pass.s': "Na wydawce stoją dwa talerze. Nie wiesz, do którego stolika. Co robisz?", // nieuw, nalezen
    'c.pass.o1': "Patrzysz na bon albo pytasz szefa kuchni.", // nieuw, nalezen
    'c.pass.o2': "Zanosisz je do stolika, który czeka.", // nieuw, nalezen
    'c.pass.o3': "Czekasz, aż ktoś inny je weźmie.", // nieuw, nalezen
    'c.pass.w': "Talerz przy złym stoliku to dwóch czekających gości i zimne jedzenie. Jedno krótkie pytanie jest szybsze.", // nieuw, nalezen
    'l.bill': "Dania i rachunek", // nieuw, nalezen
    'w.voorgerecht': "przystawka (pierwsze danie)", // nieuw, nalezen
    'w.hoofdgerecht': "danie główne", // nieuw, nalezen
    'w.nagerecht': "deser", // nieuw, nalezen
    'w.reservering': "rezerwacja (stolik zarezerwowany wcześniej)", // nieuw, nalezen
    'w.pinapparaat': "terminal płatniczy", // nieuw, nalezen
    'w.apartbetalen': "płacić osobno (każdy płaci za siebie)", // nieuw, nalezen
    's.bill.1': "Czy mają Państwo rezerwację?", // nieuw, nalezen
    's.bill.2': "Płacą Państwo razem czy osobno?", // nieuw, nalezen
    's.bill.3': "Czy mam teraz podać danie główne?", // nieuw, nalezen
    'c.bill.q': "Możemy zapłacić osobno?", // nieuw, nalezen
    'c.bill.a': "Tak, oczywiście. Przyniosę terminal.", // nieuw, nalezen
    'c.bill': "Pieniądze przy stoliku: licz dwa razy", // nieuw, nalezen
    'c.bill.b': "Kiedy gość płaci, wyraźnie powiedz kwotę i pozwól gościowi widzieć terminal. Przy gotówce przelicz pieniądze, kiedy je dostajesz, i jeszcze raz, kiedy wydajesz resztę. Pieniądze idą do kasy albo do twojego portfela kelnerskiego, nigdy do twojej kieszeni. Napiwki (fooi) idą tam, gdzie mówi firma, na przykład do słoika na napiwki. Gość wyszedł bez płacenia? Nie biegnij za nim: powiedz kierownikowi. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.bill.p': "Razem czterdzieści pięć euro, proszę.", // nieuw, nalezen
    'c.bill.s': { m: "Gość daje ci pieniądze i mówi: „Wszystko się zgadza.” Nie przeliczyłeś ich. Co robisz?", f: "Gość daje ci pieniądze i mówi: „Wszystko się zgadza.” Nie przeliczyłaś ich. Co robisz?", x: "Gość daje ci pieniądze i mówi: „Wszystko się zgadza.” Pieniądze nie są przeliczone. Co robisz?" }, // nieuw, nalezen
    'c.bill.o1': "Przeliczasz je, kiedy gość jeszcze jest.", // nieuw, nalezen
    'c.bill.o2': "Chowasz je i przeliczasz później.", // nieuw, nalezen
    'c.bill.o3': "Ufasz gościowi: mówisz dziękuję.", // nieuw, nalezen
    'c.bill.w': "Jeśli liczysz później i brakuje pieniędzy, nikt nie może sprawdzić, co się stało. Liczenie przy stoliku chroni gościa i ciebie.", // nieuw, nalezen
    'u.carework': "Pielęgnacja i opieka domowa", // nieuw, nalezen
    'l.washing': "Mycie i ubieranie", // nieuw, nalezen
    'w.washandje': "myjka (mała ściereczka jak rękawiczka)", // nieuw, nalezen
    'w.douchestoel': "krzesło pod prysznic", // nieuw, nalezen
    'w.tandenpoetsen': "myć zęby", // nieuw, nalezen
    'w.kammen': "czesać", // nieuw, nalezen
    'w.scheren': "golić", // nieuw, nalezen
    'w.steunkous': "pończocha uciskowa (ciasna pończocha na nogi)", // nieuw, nalezen
    's.washing.1': "Czy woda jest wystarczająco ciepła?", // nieuw, nalezen
    's.washing.2': "Chce pan/pani umyć twarz samodzielnie?", // nieuw, nalezen
    's.washing.3': "Teraz zakładam panu/pani pończochy uciskowe.", // nieuw, nalezen
    'c.washing.q': "Dziś nie chcę brać prysznica.", // nieuw, nalezen
    'c.washing.a': "Dobrze. Pomóc panu/pani przy umywalce?", // nieuw, nalezen
    'c.washing': "Najpierw zapytaj, przykryj i daj wybór", // nieuw, nalezen
    'c.washing.b': "Mycie kogoś to coś bardzo osobistego. Mów, co zaraz zrobisz, i najpierw zapytaj. Przykryj ręcznikiem części ciała, których nie myjesz. Zamknij drzwi albo zasłonę. Pozwól podopiecznemu wybrać: prysznic czy mycie przy umywalce i w co się ubrać. Pozwól podopiecznemu robić to, co jeszcze umie, także jeśli trwa to dłużej. Podopieczny mówi nie? Nie zmuszaj go. Spróbuj później, zaproponuj coś innego i powiedz pielęgniarce.", // nieuw, nalezen
    'c.washing.p': "W co chce się pan/pani dziś ubrać?", // nieuw, nalezen
    'c.washing.s': "Podopieczna mówi, że dziś nie chce być myta. Co robisz?", // nieuw, nalezen
    'c.washing.o1': "Akceptujesz to i mówisz pielęgniarce.", // nieuw, nalezen
    'c.washing.o2': "I tak ją myjesz: to jest na liście.", // nieuw, nalezen
    'c.washing.o3': "Pomijasz to i nic nie mówisz.", // nieuw, nalezen
    'c.washing.w': "Podopieczny może powiedzieć nie. Zmuszanie do opieki niszczy zaufanie. Pielęgniarka może sprawdzić, dlaczego tak jest i co można zrobić.", // nieuw, nalezen
    'l.observing': "Obserwowanie i raportowanie", // nieuw, nalezen
    'w.rapporteren': "raportować (zapisać w dokumentacji to, co widzisz)", // nieuw, nalezen
    'w.zorgdossier': "dokumentacja opieki (wszystko o opiece nad jednym podopiecznym)", // nieuw, nalezen
    'w.drukplek': "odleżyna (czerwone miejsce od długiego leżenia albo siedzenia)", // nieuw, nalezen
    'w.huid': "skóra", // nieuw, nalezen
    'w.plassen': "siusiać", // nieuw, nalezen
    'w.vochtlijst': "karta płynów (ile pije podopieczny)", // nieuw, nalezen
    's.observing.1': "Pani ma czerwone miejsce na pięcie.", // nieuw, nalezen
    's.observing.2': "Pan dziś mało pił.", // nieuw, nalezen
    's.observing.3': "Zapisuję to w dokumentacji opieki.", // nieuw, nalezen
    'c.observing.q': "Czy coś szczególnego z panią Jansen?", // nieuw, nalezen
    'c.observing.a': "Tak. Prawie dziś nie siusiała.", // nieuw, nalezen
    'c.observing': "Pisz, co widzisz, a nie, co myślisz", // nieuw, nalezen
    'c.observing.b': "To, co piszesz w dokumentacji, czyta następny kolega. Pisz fakty: co widzisz, słyszysz albo mierzysz, i kiedy. Nie „Mevrouw is lastig”, tylko „Mevrouw wilde niet eten en duwde het bord weg.” Pisz to tego samego dnia, krótkimi zdaniami. Nie wiesz, jak to napisać po niderlandzku? Powiedz pielęgniarce i napiszcie to razem. Patrz na skórę, kiedy kogoś myjesz: czerwone miejsce, które nie znika, może być początkiem odleżyny. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.observing.p': { m: "Zapisuję, co widziałem.", f: "Zapisuję, co widziałam.", x: "Zapisuję swoje obserwacje." }, // nieuw, nalezen
    'c.observing.s': "Podopieczna była zła podczas mycia. Musisz to zapisać w dokumentacji. Co robisz?", // nieuw, nalezen
    'c.observing.o1': "Zapisujesz, co powiedziała i zrobiła, i kiedy.", // nieuw, nalezen
    'c.observing.o2': "Piszesz: „Trudna pani, jak zawsze.”", // nieuw, nalezen
    'c.observing.o3': "Nic nie piszesz: to normalne.", // nieuw, nalezen
    'c.observing.w': "Fakty pomagają następnemu koledze i pielęgniarce działać. Opinia nie mówi, co się stało.", // nieuw, nalezen
    'l.homecare': "Opieka domowa", // nieuw, nalezen
    'w.thuiszorg': "opieka domowa (opieka w domu podopiecznego)", // nieuw, nalezen
    'w.sleutelkluis': "sejf na klucz (mała skrzynka z kodem, w której jest klucz do domu)", // nieuw, nalezen
    'w.zorgplan': "plan opieki (jaką opiekę dostaje podopieczny i jak)", // nieuw, nalezen
    'w.wijkverpleegkundige': "pielęgniarka środowiskowa (pielęgniarka zespołu opieki domowej)", // nieuw, nalezen
    'w.mantelzorger': "opiekun nieformalny (członek rodziny albo przyjaciel, który opiekuje się podopiecznym)", // nieuw, nalezen
    'w.alarmknop': "przycisk alarmowy (podopieczny go nosi, żeby wezwać pomoc)", // nieuw, nalezen
    's.homecare.1': "Najpierw dzwonię do drzwi. Potem biorę klucz.", // nieuw, nalezen
    's.homecare.2': "Co jest w planie opieki?", // nieuw, nalezen
    's.homecare.3': "Dziś spóźnię się kwadrans.", // nieuw, nalezen
    'c.homecare.q': "Kto tam?", // nieuw, nalezen
    'c.homecare.a': "Dzień dobry, opieka domowa. Mogę wejść?", // nieuw, nalezen
    'c.homecare': "Gość w czyimś domu", // nieuw, nalezen
    'c.homecare.b': "W opiece domowej pracujesz w domu podopiecznego. Jesteś tam gościem: zadzwoń do drzwi i powiedz, kim jesteś, także jeśli masz klucz. Kod do sejfu na klucz jest tajny. Nigdy nie zapisuj go tam, gdzie inni mogą go zobaczyć, i zawsze z powrotem zamykaj sejf. Trzymaj się planu opieki: tam jest, co robisz. Coś jest inaczej albo podopieczny nie otwiera drzwi? Nie odchodź po prostu. Zadzwoń do swojego zespołu albo do pielęgniarki środowiskowej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.homecare.p': "Dzień dobry, jestem z opieki domowej.", // nieuw, nalezen
    'c.homecare.s': "Dzwonisz do drzwi. Podopieczna nie otwiera. Jej samochód stoi przed domem. Co robisz?", // nieuw, nalezen
    'c.homecare.o1': "Dzwonisz do zespołu i czekasz.", // nieuw, nalezen
    'c.homecare.o2': "Jedziesz do następnego podopiecznego.", // nieuw, nalezen
    'c.homecare.o3': "Dzwonisz jeszcze raz, potem odchodzisz.", // nieuw, nalezen
    'c.homecare.w': "Podopieczna mogła upaść albo zachorować. Twój zespół wie, co robić i kto ma klucz.", // nieuw, nalezen
    'l.liftaids': "Sprzęt do podnoszenia i bezpieczeństwo", // nieuw, nalezen
    'w.glijlaken': "mata ślizgowa (śliskie prześcieradło do przesuwania podopiecznego w łóżku)", // nieuw, nalezen
    'w.tilband': "nosidło (idzie pod podopiecznego, do podnośnika)", // nieuw, nalezen
    'w.stalift': "podnośnik do pionizacji (pomaga podopiecznemu wstać)", // nieuw, nalezen
    'w.werkhoogte': "wysokość robocza (łóżko na wysokości twoich bioder)", // nieuw, nalezen
    'w.bedhek': "barierka łóżka", // nieuw, nalezen
    'w.transferplank': "deska transferowa (deska do przesunięcia się z łóżka na krzesło)", // nieuw, nalezen
    's.liftaids.1': "Ustaw łóżko na wysokość roboczą.", // nieuw, nalezen
    's.liftaids.2': "Czy wózek jest na hamulcu?", // nieuw, nalezen
    's.liftaids.3': "Robimy to we dwoje.", // nieuw, nalezen
    'c.liftaids.q': "Możesz w pojedynkę obrócić tę panią?", // nieuw, nalezen
    'c.liftaids.a': "Z matą ślizgową dam radę. Już ją biorę.", // nieuw, nalezen
    'c.liftaids': "Niech sprzęt podnosi za ciebie", // nieuw, nalezen
    'c.liftaids.b': "Zanim użyjesz podnośnika, sprawdź go: czy akumulator jest naładowany, czy nosidło ma dobry rozmiar i nie jest rozdarte? Zaciągnij hamulce łóżka i wózka. Ustaw łóżko na wysokości bioder, żeby się nie schylać. Mów podopiecznemu o każdym kroku. W planie opieki jest napisane, jakiego sprzętu potrzebuje podopieczny. Sprzęt jest zepsuty albo go brakuje? Nie kombinuj bez niego: zgłoś to i poproś kolegę o pomoc. Nikt ci nie pokazał, jak działa sprzęt? Zapytaj, zanim zaczniesz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.liftaids.p': "Nosidło jest zepsute. Wezmę inne.", // nieuw, nalezen
    'c.liftaids.s': "Chcesz użyć podnośnika. Nosidło ma małe rozdarcie. Co robisz?", // nieuw, nalezen
    'c.liftaids.o1': "Bierzesz inne nosidło i zgłaszasz rozdarcie.", // nieuw, nalezen
    'c.liftaids.o2': "Używasz go: rozdarcie jest bardzo małe.", // nieuw, nalezen
    'c.liftaids.o3': "Zawiązujesz supeł na nosidle.", // nieuw, nalezen
    'c.liftaids.w': "Małe rozdarcie może się powiększyć pod ciężarem człowieka. Upadek z podnośnika może ciężko zranić podopiecznego.", // nieuw, nalezen
    'u.shopfloor': "Kasa, towar i zamykanie", // nieuw, nalezen
    'l.returns': "Zwroty i kasa", // nieuw, nalezen
    'w.terugbrengen': "oddać, zwrócić (produkt do sklepu)", // nieuw, nalezen
    'w.klantenkaart': "karta klienta (karta do zbierania punktów)", // nieuw, nalezen
    'w.statiegeld': "kaucja (pieniądze z powrotem za pustą butelkę albo puszkę)", // nieuw, nalezen
    'w.kassalade': "szuflada kasy (szuflada z pieniędzmi)", // nieuw, nalezen
    'w.streepjescode': "kod kreskowy", // nieuw, nalezen
    'w.tegoedbon': "bon zwrotny (kartka, za którą możesz później kupić coś w sklepie)", // nieuw, nalezen
    's.returns.1': "Zbiera pan/pani punkty na kartę klienta?", // nieuw, nalezen
    's.returns.2': "Kod kreskowy nie działa.", // nieuw, nalezen
    's.returns.3': "Woli pan/pani zwrot pieniędzy czy bon zwrotny?", // nieuw, nalezen
    'c.returns.q': "Chcę oddać ten sweter.", // nieuw, nalezen
    'c.returns.a': "Można. Ma pan/pani jeszcze paragon?", // nieuw, nalezen
    'c.returns': "Zwroty: trzymaj się zasad sklepu", // nieuw, nalezen
    'c.returns.b': "Każdy sklep ma własne zasady zwrotów: ile dni, z paragonem czy bez, zwrot pieniędzy czy bon zwrotny. Naucz się ich i stosuj je przy każdym kliencie. Nie wiesz na pewno? Zapytaj kolegę albo kierownika i nie decyduj w pojedynkę. Na koniec zmiany przelicz szufladę kasy, z kolegą, jeśli tak się robi w twoim sklepie. Nigdy nie bierz pieniędzy z kasy dla siebie, nawet żeby na chwilę pożyczyć. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.returns.p': "Zapytam tylko kierownika sklepu.", // nieuw, nalezen
    'c.returns.s': "Klientka chce zwrotu pieniędzy za buty. Nie ma paragonu. Nie znasz zasady. Co robisz?", // nieuw, nalezen
    'c.returns.o1': "Pytasz kierownika, co zrobić.", // nieuw, nalezen
    'c.returns.o2': "Oddajesz pieniądze: jest miła.", // nieuw, nalezen
    'c.returns.o3': "Mówisz nie i ją odsyłasz.", // nieuw, nalezen
    'c.returns.w': "Kierownik zna zasady i może zdecydować. Wtedy klientka dostaje uczciwą odpowiedź, a nikt nie może cię obwiniać.", // nieuw, nalezen
    'l.facing': "Wykładanie towaru i produkty chłodzone", // nieuw, nalezen
    'w.facen': "frontować (wysuwać produkty do przodu, etykietą do klienta)", // nieuw, nalezen
    'w.afprijzen': "przeceniać (dawać niższą cenę)", // nieuw, nalezen
    'w.koelvak': "regał chłodniczy (zimna półka w sklepie)", // nieuw, nalezen
    'w.diepvries': "zamrażarka", // nieuw, nalezen
    'w.uitpakken': "rozpakowywać", // nieuw, nalezen
    'w.schapkaartje': "etykieta cenowa (kartka z ceną na półce)", // nieuw, nalezen
    's.facing.1': "Najpierw regał chłodniczy, potem reszta.", // nieuw, nalezen
    's.facing.2': "Wysuń wszystko ładnie do przodu.", // nieuw, nalezen
    's.facing.3': "Przeceń dzisiejsze produkty.", // nieuw, nalezen
    'c.facing.q': { m: "Skończyłeś z regałem chłodniczym?", f: "Skończyłaś z regałem chłodniczym?", x: "Regał chłodniczy już zrobiony?" }, // nieuw, nalezen
    'c.facing.a': "Prawie. Muszę jeszcze frontować.", // nieuw, nalezen
    'c.facing': "Najpierw zimne, a półka wygląda na pełną", // nieuw, nalezen
    'c.facing.b': "Produkty chłodzone i mrożone najpierw idą do lodówki albo zamrażarki, przed wszystkim innym. Nie mogą długo stać w cieple. Potem reszta. Frontowanie znaczy: wysuwasz produkty do przodu, etykietą do klienta. Wtedy półka wygląda na pełną i uporządkowaną. Sprawdź etykietę cenową: czy cena zgadza się z tym produktem? Kiedy otwierasz kartony, tnij od siebie i nie za głęboko: możesz uszkodzić produkt. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.facing.p': "Najpierw produkty chłodzone, potem reszta.", // nieuw, nalezen
    'c.facing.s': "Przychodzi paleta z mlekiem i paleta z chipsami. Nie ma nikogo poza tobą. Co robisz?", // nieuw, nalezen
    'c.facing.o1': "Najpierw wstawiasz mleko do lodówki.", // nieuw, nalezen
    'c.facing.o2': "Zaczynasz od chipsów: są lżejsze.", // nieuw, nalezen
    'c.facing.o3': "Zostawiasz obie, aż przyjdzie kolega.", // nieuw, nalezen
    'c.facing.w': "Mleko, które za długo stoi w cieple, może zaszkodzić klientom i trzeba je wyrzucić. Chipsy mogą poczekać.", // nieuw, nalezen
    'l.shrink': "Straty i kradzież", // nieuw, nalezen
    'w.derving': "straty (to, co sklep traci: zepsute, stare albo skradzione produkty)", // nieuw, nalezen
    'w.afschrijven': "spisać na straty (zarejestrować produkt jako stracony)", // nieuw, nalezen
    'w.personeelsaankoop': "zakup pracowniczy (to, co kupujesz we własnym sklepie)", // nieuw, nalezen
    'w.tassencontrole': "kontrola toreb", // nieuw, nalezen
    'w.kassamedewerker': "kasjer, kasjerka", // nieuw, nalezen
    'w.winkelwagen': "wózek sklepowy", // nieuw, nalezen
    's.shrink.1': "Ten słoik jest stłuczony. Spisuję go na straty.", // nieuw, nalezen
    's.shrink.2': "Za swoje zakupy płacę u kolegi przy kasie.", // nieuw, nalezen
    's.shrink.3': "Przy wyjściu stoi pełny wózek.", // nieuw, nalezen
    'c.shrink.q': "Mogę zajrzeć do twojej torby?", // nieuw, nalezen
    'c.shrink.a': "Tak, jasne. Tu jest mój paragon.", // nieuw, nalezen
    'c.shrink': "Własne zakupy: płać jak klient", // nieuw, nalezen
    'c.shrink.b': "Sklep dużo traci przez zepsute produkty, stare produkty i kradzieże. Pomagaj, żeby te straty były małe. Zepsuty albo uszkodzony produkt? Nie odkładaj go z powrotem: spisz go na straty tak, jak robi się to w twoim sklepie. Własne zakupy: płać przy kasie jak każdy klient i zachowaj paragon. W wielu sklepach nie wolno ci nabijać własnych zakupów: robi to kolega. Nigdy nie jedz ani nie bierz produktu bez płacenia, nawet małego. Niektóre sklepy sprawdzają torby: to zasada sklepu, a nie znak, że ci nie ufają. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.shrink.p': "Najpierw płacę i zachowuję paragon.", // nieuw, nalezen
    'c.shrink.s': "Na koniec zmiany chce ci się jeść. Kanapce dziś kończy się data. Co robisz?", // nieuw, nalezen
    'c.shrink.o1': "Pytasz kierownika, jaka jest zasada.", // nieuw, nalezen
    'c.shrink.o2': "Zjadasz ją: i tak pójdzie do kosza.", // nieuw, nalezen
    'c.shrink.o3': "Zabierasz ją w torbie do domu.", // nieuw, nalezen
    'c.shrink.w': "W wielu sklepach wzięcie produktu bez płacenia to kradzież, także jeśli jest stary. Pytanie najpierw chroni ciebie.", // nieuw, nalezen
    'l.shopclose': "Zamykanie sklepu", // nieuw, nalezen
    'w.sluitingstijd': "godzina zamknięcia", // nieuw, nalezen
    'w.rolluik': "roleta antywłamaniowa", // nieuw, nalezen
    'w.kasverschil': "różnica w kasie (więcej albo mniej pieniędzy w kasie, niż powinno być)", // nieuw, nalezen
    'w.kluis': "sejf (mocna skrzynka na pieniądze)", // nieuw, nalezen
    'w.overval': "napad (ktoś zabiera pieniądze, grożąc)", // nieuw, nalezen
    'w.achterdeur': "tylne drzwi", // nieuw, nalezen
    's.shopclose.1': "Zamykamy za dziesięć minut.", // nieuw, nalezen
    's.shopclose.2': "Liczymy kasę we dwoje.", // nieuw, nalezen
    's.shopclose.3': "Czy tylne drzwi są zamknięte na klucz?", // nieuw, nalezen
    'c.shopclose.q': "Mogę jeszcze szybko wejść?", // nieuw, nalezen
    'c.shopclose.a': "Przepraszam, jest już zamknięte. Jutro otwieramy o ósmej.", // nieuw, nalezen
    'c.shopclose': "Napad: oddaj i dbaj o siebie", // nieuw, nalezen
    'c.shopclose.b': "O godzinie zamknięcia w kasie jest dużo pieniędzy, więc sklepy mają zasady: licz je we dwoje, zanieś pieniądze do sejfu i najpierw zamknij tylne drzwi. Napad (overval)? Twoje życie jest warte więcej niż pieniądze. Zachowaj spokój, rób, co mówią, i nie walcz ani nie biegnij za nimi. Zapamiętaj, co możesz: ubranie, wzrost, głos. Kiedy odejdą: zamknij drzwi, zadzwoń pod 112 i niczego nie dotykaj. Potem porozmawiaj o tym z kierownikiem albo z kimś, komu ufasz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.shopclose.p': "Zamykamy. Zamykam drzwi na klucz.", // nieuw, nalezen
    'c.shopclose.s': "Mężczyzna z nożem chce pieniądze z twojej kasy. Co robisz?", // nieuw, nalezen
    'c.shopclose.o1': "Zachowujesz spokój i dajesz mu pieniądze.", // nieuw, nalezen
    'c.shopclose.o2': "Walczysz z nim: to nie jego pieniądze.", // nieuw, nalezen
    'c.shopclose.o3': "Biegniesz na zaplecze i zamykasz się tam.", // nieuw, nalezen
    'c.shopclose.w': "Walka albo ucieczka sprawiają, że napastnik jest nerwowy i bardziej niebezpieczny. Pieniądze można odzyskać. Ciebie nie.", // nieuw, nalezen
    'u.uitzend': "Praca przez agencję pracy", // nieuw, nalezen
    'l.hirer': "Agencja i firma użytkownik", // nieuw, nalezen
    'w.inlener': "firma użytkownik (firma, do której agencja wysyła cię do pracy)", // nieuw, nalezen
    'w.vestiging': "oddział (biuro agencji w twoim mieście)", // nieuw, nalezen
    'w.intakegesprek': "rozmowa wstępna (pierwsza rozmowa w agencji)", // nieuw, nalezen
    'w.opstapplaats': "miejsce zbiórki (gdzie zabiera cię bus agencji)", // nieuw, nalezen
    'w.bedrijfsregels': "regulamin firmy (zasady firmy użytkownika)", // nieuw, nalezen
    'w.aanspreekpunt': "osoba kontaktowa (osoba, do której idziesz z pytaniami)", // nieuw, nalezen
    's.hirer.1': "Jutro pracujesz w nowej firmie użytkowniku.", // nieuw, nalezen
    's.hirer.2': "Kto jest tu moją osobą kontaktową?", // nieuw, nalezen
    's.hirer.3': "Bus odjeżdża z miejsca zbiórki o szóstej.", // nieuw, nalezen
    'c.hirer.q': "Możesz jutro zacząć w nowej firmie użytkowniku?", // nieuw, nalezen
    'c.hirer.a': "Tak. O której mam tam być?", // nieuw, nalezen
    'c.hirer': "Dwie firmy: kto co robi?", // nieuw, nalezen
    'c.hirer.b': "Pracujesz przez agencję pracy (uitzendbureau), ale pracę wykonujesz w innej firmie: w firmie użytkowniku (inlener). Agencja jest twoim pracodawcą: umowę, wynagrodzenie, pasek wypłaty i dni wolne masz od agencji. Firma użytkownik mówi ci, co robić na hali, i musi dbać o bezpieczeństwo twojej pracy, tak samo jak swoich pracowników. Zgłaszaj chorobę tak, jak mówi agencja: często do agencji i do firmy użytkownika. Zapisz w telefonie imię i numer telefonu swojej osoby kontaktowej w agencji. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen
    'c.hirer.p': "Kto jest moją osobą kontaktową w agencji?", // nieuw, nalezen
    'c.hirer.s': "W firmie użytkowniku musisz pracować na maszynie. Nikt ci nie pokazał jak. Co robisz?", // nieuw, nalezen
    'c.hirer.o1': "Prosisz firmę użytkownika, żeby najpierw ci pokazała.", // nieuw, nalezen
    'c.hirer.o2': "Próbujesz: odpowiada agencja.", // nieuw, nalezen
    'c.hirer.o3': "Idziesz do domu i nic nie mówisz.", // nieuw, nalezen
    'c.hirer.w': "Firma użytkownik musi ci pokazać, jak bezpiecznie pracować, tak samo jak swoim pracownikom. Masz prawo o to prosić.", // nieuw, nalezen
    'l.phases': "Twoja umowa i fazy", // nieuw, nalezen
    'w.fase': "faza (etap w twojej umowie z agencją: A, B albo C)", // nieuw, nalezen
    'w.uitzendbeding': "klauzula agencyjna (twoja praca może się skończyć, kiedy firma użytkownik już cię nie potrzebuje)", // nieuw, nalezen
    'w.aflopen': "kończyć się, wygasać (umowa)", // nieuw, nalezen
    'w.doorwerken': "dalej pracować (w tym samym miejscu)", // nieuw, nalezen
    'w.vastecontract': "umowa na stałe (umowa bez daty końca)", // nieuw, nalezen
    'w.onderbreking': "przerwa (czas bez pracy między dwiema umowami)", // nieuw, nalezen
    's.phases.1': "W której fazie teraz jestem?", // nieuw, nalezen
    's.phases.2': "Moja umowa kończy się w przyszłym tygodniu.", // nieuw, nalezen
    's.phases.3': "Mogę tu dalej pracować?", // nieuw, nalezen
    'c.phases.q': "Twoje zlecenie kończy się w piątek.", // nieuw, nalezen
    'c.phases.a': "Dobrze. Macie dla mnie inną pracę?", // nieuw, nalezen
    'c.phases': "Fazy A, B i C", // nieuw, nalezen
    'c.phases.b': "Większość pracowników agencyjnych pracuje według układu zbiorowego dla pracowników tymczasowych (uitzend-cao). Ma on fazy. W fazie A twoja praca zwykle może się skończyć, kiedy firma użytkownik już cię nie potrzebuje (uitzendbeding). W fazie B dostajesz umowy na czas określony. W fazie C dostajesz umowę na stałe z agencją. Jak długo trwa każda faza, jest w twoim cao. Zapytaj agencję, w której fazie jesteś, i zachowuj wszystkie swoje umowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen
    'c.phases.p': "Jak długo trwa u mnie faza A?", // nieuw, nalezen
    'c.phases.s': "Od dawna pracujesz dla tej samej agencji. Dalej dostajesz krótkie umowy. Co robisz?", // nieuw, nalezen
    'c.phases.o1': "Pytasz agencję, w której fazie jesteś.", // nieuw, nalezen
    'c.phases.o2': "Nic: praca z agencji jest zawsze krótka.", // nieuw, nalezen
    'c.phases.o3': "Rezygnujesz i szukasz innej agencji.", // nieuw, nalezen
    'c.phases.w': "Po wystarczająco długim czasie cao daje ci większe bezpieczeństwo. Agencja może ci powiedzieć, gdzie jesteś, a związek zawodowy może to z tobą sprawdzić.", // nieuw, nalezen
    'l.deductions': "Wynagrodzenie i potrącenia", // nieuw, nalezen
    'w.inhouding': "potrącenie (pieniądze odjęte od twojego wynagrodzenia)", // nieuw, nalezen
    'w.vastekracht': "pracownik stały (pracownik zatrudniony przez samą firmę użytkownika)", // nieuw, nalezen
    'w.vervoer': "transport (bus albo van do pracy)", // nieuw, nalezen
    'w.schriftelijk': "na piśmie (na papierze albo w e-mailu)", // nieuw, nalezen
    'w.navragen': "dopytać, sprawdzić (dowiedzieć się, czy coś się zgadza)", // nieuw, nalezen
    'w.brutoloon': "wynagrodzenie brutto (twoje wynagrodzenie przed podatkiem i potrąceniami)", // nieuw, nalezen
    's.deductions.1': "Co to za potrącenie na moim pasku wypłaty?", // nieuw, nalezen
    's.deductions.2': "Czy zarabiam tyle samo co pracownicy stali?", // nieuw, nalezen
    's.deductions.3': "Najpierw chcę to zobaczyć na papierze.", // nieuw, nalezen
    'c.deductions.q': "Koszty busa potrącamy ci z wynagrodzenia.", // nieuw, nalezen
    'c.deductions.a': "Czy to dozwolone? Najpierw to sprawdzę.", // nieuw, nalezen
    'c.deductions': "Co można potrącić z wynagrodzenia?", // nieuw, nalezen
    'c.deductions.b': "Masz prawo co najmniej do takiego samego wynagrodzenia jak pracownicy firmy użytkownika, którzy wykonują tę samą pracę. Pieniądze, które są potrącane z twojego wynagrodzenia (inhouding), muszą być na pasku wypłaty. Podatek i składki są potrącane z mocy prawa. Poza nimi agencja może potrącić z płacy minimalnej tylko dwa koszty: czynsz za mieszkanie i składkę na ubezpieczenie zdrowotne, i tylko za twoją pisemną zgodą. Inne koszty, takie jak transport, ubranie robocze, kary albo opłata za znalezienie ci pracy, nie mogą być potrącane z płacy minimalnej. Nie rozumiesz potrącenia? Poproś agencję, żeby wyjaśniła je na piśmie. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen
    'c.deductions.p': "Za co jest to potrącenie?", // nieuw, nalezen
    'c.deductions.s': "Agencja potrąca ci z wynagrodzenia pieniądze za bus do pracy. Zarabiasz płacę minimalną. Co robisz?", // nieuw, nalezen
    'c.deductions.o1': "Pytasz o to: to jest niedozwolone.", // nieuw, nalezen
    'c.deductions.o2': "Nic: przecież codziennie jeździsz busem.", // nieuw, nalezen
    'c.deductions.o3': "Przestajesz jeździć busem i chodzisz pieszo.", // nieuw, nalezen
    'c.deductions.w': "Z płacy minimalnej można potrącić tylko czynsz i ubezpieczenie zdrowotne, i tylko za twoją pisemną zgodą. Związek zawodowy albo Juridisch Loket może ci pomóc.", // nieuw, nalezen
    'l.agencyhome': "Mieszkanie i pomoc", // nieuw, nalezen
    'w.huisvesting': "zakwaterowanie (mieszkanie załatwione przez agencję)", // nieuw, nalezen
    'w.huisgenoot': "współlokator (osoba, która mieszka w tym samym domu)", // nieuw, nalezen
    'w.huisregels': "regulamin domu (zasady domu, w którym mieszkasz)", // nieuw, nalezen
    'w.huismeester': "opiekun mieszkania (osoba, która dba o dom)", // nieuw, nalezen
    'w.meldpunt': "punkt zgłoszeń (miejsce, gdzie możesz zgłosić problem)", // nieuw, nalezen
    'w.advies': "rada, porada", // nieuw, nalezen
    's.agencyhome.1': "Chcę mieć własną umowę najmu.", // nieuw, nalezen
    's.agencyhome.2': "W łazience jest pleśń.", // nieuw, nalezen
    's.agencyhome.3': "Dzwonię do związku zawodowego po radę.", // nieuw, nalezen
    'c.agencyhome.q': "W piątek musisz wyprowadzić się z mieszkania.", // nieuw, nalezen
    'c.agencyhome.a': "To bardzo krótko. Najpierw poproszę o radę.", // nieuw, nalezen
    'c.agencyhome': "Twoje mieszkanie i gdzie szukać pomocy", // nieuw, nalezen
    'c.agencyhome.b': "Agencja załatwia ci mieszkanie? Wtedy dostajesz własną umowę najmu, na piśmie, osobno od umowy o pracę. Zachowaj kopię. Jest w niej, ile płacisz oraz jak i kiedy kończy się najem. Kończy ci się praca? Mieszkanie nie zawsze kończy się tego samego dnia: poproś o radę, zanim się wyprowadzisz. Niebezpieczne albo przepełnione mieszkanie, groźby albo za niskie wynagrodzenie? Poszukaj pomocy: związek zawodowy, Juridisch Loket (darmowa porada prawna), FairWork albo Nederlandse Arbeidsinspectie, gdzie możesz też zgłosić sprawę anonimowo. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nieuw, nalezen
    'c.agencyhome.p': "Mogę dostać kopię mojej umowy najmu?", // nieuw, nalezen
    'c.agencyhome.s': "Kończy ci się praca. Opiekun mieszkania mówi, że musisz dziś wyprowadzić się z domu. Co robisz?", // nieuw, nalezen
    'c.agencyhome.o1': "Najpierw pytasz związek zawodowy albo Juridisch Loket.", // nieuw, nalezen
    'c.agencyhome.o2': "Wyprowadzasz się dziś i śpisz u znajomego.", // nieuw, nalezen
    'c.agencyhome.o3': "Pakujesz torbę i śpisz na dworze.", // nieuw, nalezen
    'c.agencyhome.w': "Twoja umowa najmu ma własne zasady, osobno od pracy. Rada pomaga ci wiedzieć, kiedy naprawdę musisz się wyprowadzić.", // nieuw, nalezen
  },
};

export default t;
