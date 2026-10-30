import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Szukanie pracy',
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
    's.findwork.1': 'Chcę się starać o tę pracę.',
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
    'c.agency.q': { m: 'Zgłosiłeś swoje godziny?', f: 'Zgłosiłaś swoje godziny?', x: 'Twoje godziny są już zgłoszone?' }, // x: nieuw, nalezen
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
    'c.payslip.q': { m: 'Dostałeś pasek wypłaty?', f: 'Dostałaś pasek wypłaty?', x: 'Masz już pasek wypłaty?' }, // x: nieuw, nalezen
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
    'c.smalltalk.a': { m: 'Grałem w piłkę z przyjaciółmi.', f: 'Grałam w piłkę z przyjaciółmi.', x: 'Grałem / grałam w piłkę z przyjaciółmi.' }, // x: nieuw, nalezen
    'l.mistakes': 'Uwagi i błędy',
    'w.fout': 'błąd',
    'w.compliment': 'komplement, pochwała',
    'w.feedback': 'informacja zwrotna, uwagi',
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
    'u.leave': 'Urlop i choroba',
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
    'l.illness': { m: 'Chory w domu', f: 'Chora w domu', x: 'W domu z powodu choroby' }, // x: nieuw, nalezen
    'w.ziekmelden': 'zgłosić chorobę',
    'w.betermelden': 'zgłosić powrót do zdrowia',
    'w.bedrijfsarts': 'lekarz zakładowy',
    'w.ziekte': 'choroba',
    'w.doorbetalen': 'dalej płacić',
    'w.wachtdag': 'dzień bez wypłaty (na początku choroby)',
    's.illness.1': { m: 'Zgłaszam, że jestem chory.', f: 'Zgłaszam, że jestem chora.', x: 'Zgłaszam chorobę.' }, // x: nieuw, nalezen
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
    'w.eigenrisico': { m: 'udział własny (koszty, które najpierw płacisz sam)', f: 'udział własny (koszty, które najpierw płacisz sama)', x: 'udział własny (koszty, które najpierw płacisz z własnej kieszeni)' }, // x: nieuw, nalezen
    'w.zorgtoeslag': 'dopłata do ubezpieczenia zdrowotnego',
    'w.verzekeraar': 'ubezpieczyciel',
    'w.permaand': 'miesięcznie',
    'w.vergoeden': 'pokrywać (zwracać) koszty',
    's.insurance.1': 'Co miesiąc płacę składkę.',
    's.insurance.2': 'Czy to jest pokrywane?',
    's.insurance.3': 'Składam wniosek o zorgtoeslag.',
    'c.insurance.q': { m: 'Gdzie jesteś ubezpieczony?', f: 'Gdzie jesteś ubezpieczona?', x: 'Gdzie masz ubezpieczenie?' }, // x: nieuw, nalezen
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
    's.ww.2': { m: 'Jestem bezrobotny.', f: 'Jestem bezrobotna.', x: 'Nie mam pracy.' }, // x: nieuw, nalezen
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
    'c.client.a': 'Oczywiście, pomogę.',
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
    'c.cv': 'Krótkie holenderskie CV',
    'c.cv.b': 'Holenderskie CV jest krótkie: 1 albo 2 strony. Napisz dane kontaktowe, doświadczenie zawodowe, wykształcenie, języki i umiejętności. Zdjęcie nie jest potrzebne. Nie musisz pisać o religii, wieku ani stanie cywilnym. Pisz uczciwie o tym, co umiesz. Poproś kogoś, żeby sprawdził twój niderlandzki.',
    'c.cv.p': 'Przeczytasz moje CV? Czy mój niderlandzki jest poprawny?',
    'c.cv.s': { m: 'Przez 3 lata pracowałeś w fabryce w swoim kraju, ale nie masz dyplomu. Co wpisujesz do CV?', f: 'Przez 3 lata pracowałaś w fabryce w swoim kraju, ale nie masz dyplomu. Co wpisujesz do CV?', x: 'Masz za sobą 3 lata pracy w fabryce w swoim kraju, ale nie masz dyplomu. Co wpisujesz do CV?' }, // x: nieuw, nalezen
    'c.cv.o1': { m: 'Uczciwie wpisujesz tę pracę i to, co tam robiłeś.', f: 'Uczciwie wpisujesz tę pracę i to, co tam robiłaś.', x: 'Uczciwie wpisujesz tę pracę i swoje zadania.' }, // x: nieuw, nalezen
    'c.cv.o2': 'Nic nie wpisujesz, bo nie masz dyplomu.',
    'c.cv.o3': 'Piszesz, że masz dyplom, żeby lepiej wypaść.',
    'c.cv.w': 'Doświadczenie zawodowe się liczy, także z zagranicy. Uczciwość jest ważna: pracodawcy mogą to sprawdzić.',
    'c.interview': 'Rozmowa o pracę',
    'c.interview.b': 'Przyjdź na czas: 5 do 10 minut wcześniej. Grzecznie się przywitaj i patrz na tę osobę. Krótko powiedz, co umiesz. Zadawanie własnych pytań jest normalne i dobrze widziane, np. o godziny, pracę albo szkolenia. Na koniec możesz zapytać, kiedy dostaniesz odpowiedź. Możesz spokojnie powiedzieć, że wciąż uczysz się niderlandzkiego. Pracodawca nie może pytać o twoją religię, ciążę ani zdrowie. Nie musisz odpowiadać: możesz grzecznie powiedzieć, że wolisz nie odpowiadać.',
    'c.interview.p': 'Czy ja też mogę o coś zapytać? Na ile godzin tygodniowo jest ta praca?',
    'c.interview.s': 'Na koniec rozmowy pracodawca pyta: „Heb je nog vragen?” Co robisz?',
    'c.interview.o1': 'Zadajesz pytanie o godziny albo szkolenia.', // nagelezen (2e lezing)
    'c.interview.o2': 'Mówisz „nie”, bo zadawanie pytań jest niegrzeczne.',
    'c.interview.o3': 'Mówisz więcej o sobie, żeby pokazać, że dobrze pracujesz.', // nagelezen (2e lezing)
    'c.interview.w': 'Pytania pokazują, że interesuje cię ta praca. Holenderscy pracodawcy często ich oczekują.',
    'c.findwork': 'Weź umowę na piśmie',
    'c.findwork.b': 'Zawsze proś o umowę na piśmie i kopię dla siebie. Przeczytaj ją, zanim podpiszesz, albo poproś o pomoc kogoś, komu ufasz. Agencja pracy (uitzendbureau) nie może brać od ciebie pieniędzy za znalezienie pracy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.findwork.p': 'Mogę najpierw przeczytać umowę?',
    'c.findwork.s': 'Nowy pracodawca mówi: „Podpisz tu teraz. Przeczytasz później.” Co robisz?',
    'c.findwork.o1': 'Prosisz o czas na przeczytanie albo o kopię.', // nagelezen (2e lezing)
    'c.findwork.o2': 'Szybko podpisujesz, żeby nie stracić pracy.',
    'c.findwork.o3': 'Podpisujesz, a potem prosisz o kopię.', // nagelezen (2e lezing)
    'c.findwork.w': 'W umowie jest napisane, ile zarabiasz i jakie masz prawa. Dobry pracodawca daje ci czas na przeczytanie. Możesz pytać o wszystko, czego nie rozumiesz.',
    'c.contract': 'Okres próbny i praca na wezwanie',
    'c.contract.b': 'Okres próbny (proeftijd) musi być zapisany na piśmie. Nie jest dozwolony w umowie na 6 miesięcy albo krócej. W dłuższej umowie, ale krótszej niż 2 lata, trwa najwyżej 1 miesiąc. W umowie na 2 lata albo dłużej, albo na stałe, trwa najwyżej 2 miesiące. Pracujesz na wezwanie (oproepkracht)? Pracodawca zwykle musi wezwać cię co najmniej 4 dni wcześniej. Jeśli wezwie cię później, nie musisz przychodzić. Cao może skrócić te 4 dni, ale nie do mniej niż 1 dnia. Jeśli odwołają twoją pracę później niż w tym terminie, i tak dostajesz zapłatę. Jeśli wezwą cię na mniej niż 3 godziny pracy, zwykle dostajesz zapłatę za 3 godziny. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', // nalezen: feit gelijk getrokken
    'c.contract.p': 'Czy w mojej umowie jest okres próbny?',
    'c.contract.s': 'Twoja umowa jest na 3 miesiące. Jest w niej napisane: „Proeftijd: 1 maand”. Co robisz?',
    'c.contract.o1': 'Pytasz o to: ten okres próbny się nie liczy.', // nagelezen (2e lezing)
    'c.contract.o2': 'Nic. Każda umowa ma okres próbny.',
    'c.contract.o3': 'Podpisujesz i nigdy nie pytasz, bo szef wie najlepiej.',
    'c.contract.w': 'Okres próbny w umowie na 6 miesięcy albo krócej nie obowiązuje. Spokojne pytanie jest normalne. Jeśli odpowiedź nie jest jasna, poproś o radę związek zawodowy albo Juridisch Loket.',
    'c.agency': 'Agencja jest twoim pracodawcą',
    'c.agency.b': 'Jeśli pracujesz przez agencję pracy (uitzendbureau), twoim pracodawcą jest agencja, a nie firma, w której pracujesz. Umowę i wynagrodzenie dostajesz od agencji, a dla pracowników tymczasowych jest układ zbiorowy (uitzend-cao). Masz prawo do takiego samego wynagrodzenia jak pracownicy tej firmy, którzy wykonują tę samą pracę. Dostajesz też dodatek urlopowy (vakantiegeld) i zbierasz dni urlopu. Prowadź własną listę przepracowanych godzin i sprawdzaj je na pasku wypłaty. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.agency.p': 'Na moim pasku wypłaty jest za mało godzin.',
    'c.agency.s': { m: 'Na pasku wypłaty są 32 godziny, a przepracowałeś 38. Co robisz?', f: 'Na pasku wypłaty są 32 godziny, a przepracowałaś 38. Co robisz?', x: 'Na pasku wypłaty są 32 godziny, a w rzeczywistości było 38. Co robisz?' }, // x: nieuw, nalezen
    'c.agency.o1': 'Pokazujesz agencji swoją listę godzin i prosisz o poprawkę.', // nagelezen (2e lezing)
    'c.agency.o2': 'Nic nie mówisz, bo to tylko 6 godzin.',
    'c.agency.o3': 'Prosisz szefa w firmie, w której pracujesz, żeby zapłacił za te 6 godzin.',
    'c.agency.w': 'Płaci ci agencja, więc to agencja musi poprawić błąd. Twoja własna lista dat i godzin pomaga. Pytanie o to jest twoim prawem.',
    'c.bsn': 'Twój BSN: chroń go',
    'c.bsn.b': 'BSN (burgerservicenummer) dostajesz, gdy zameldujesz się w gminie (gemeente). Jesteś tu tylko na krótko? Wtedy rejestrujesz się w punkcie RNI. BSN jest potrzebny do pracy, podatków, ubezpieczenia zdrowotnego i konta bankowego. Pracodawca potrzebuje twojego dokumentu tożsamości i BSN. Nie dawaj BSN ani kopii dokumentu ludziom, którzy go nie potrzebują: zapytaj, po co im on. Przeprowadzasz się? Zgłoś nowy adres w gemeente w ciągu 5 dni. DigiD to twój login do stron urzędowych: nigdy nie dawaj go nikomu. Mieszkasz albo pracujesz tutaj? Wtedy zwykle musisz mieć holenderskie ubezpieczenie zdrowotne (zorgverzekering). Załatw je szybko. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.bsn.p': 'Dlaczego potrzebuje pan/pani mojego BSN?',
    'c.bsn.s': 'Ktoś, kogo nie znasz, proponuje ci pracę na WhatsAppie. Prosi o zdjęcie paszportu i twój login DigiD. Co robisz?',
    'c.bsn.o1': 'Nigdy nie podajesz loginu DigiD. Najpierw sprawdzasz, kto to.', // nagelezen (2e lezing)
    'c.bsn.o2': 'Szybko wysyłasz wszystko, żeby dostać pracę.',
    'c.bsn.o3': 'Wysyłasz tylko zdjęcie paszportu, ale nie login DigiD.', // nagelezen (2e lezing)
    'c.bsn.w': 'Z twoim DigiD albo kopią dokumentu inni mogą użyć twojego nazwiska, np. do pożyczek albo zasiłków. Prawdziwy pracodawca potrzebuje twojego dokumentu i BSN, ale nigdy loginu DigiD.',
    'c.housing': 'Mieszkanie od pracodawcy',
    'c.housing.b': { m: 'Pracodawca albo agencja załatwia ci mieszkanie? Wtedy umowa najmu musi być osobno od umowy o pracę. Poproś o umowę najmu na piśmie i potwierdzenie tego, co płacisz. Czynsz można potrącać z wypłaty tylko wtedy, gdy zgodziłeś się na to na piśmie, i tylko w granicach prawa: sprawdź to na pasku wypłaty. Kaucja (borg) to najwyżej 2 miesiące czynszu podstawowego. Dostajesz ją z powrotem, gdy się wyprowadzasz, minus prawdziwe szkody. Zamelduj się pod swoim adresem w gemeente. Niebezpieczne mieszkanie, groźby albo niesprawiedliwe koszty? Zgłoś to w gemeente (meldpunt) i poproś o darmową radę w Juridisch Loket albo w poradni mieszkaniowej. Z problemem z wysokością czynszu albo opłat za usługi możesz zwrócić się do Huurcommissie. Kończy ci się praca? Poproś o radę, zanim wyprowadzisz się z mieszkania. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', f: 'Pracodawca albo agencja załatwia ci mieszkanie? Wtedy umowa najmu musi być osobno od umowy o pracę. Poproś o umowę najmu na piśmie i potwierdzenie tego, co płacisz. Czynsz można potrącać z wypłaty tylko wtedy, gdy zgodziłaś się na to na piśmie, i tylko w granicach prawa: sprawdź to na pasku wypłaty. Kaucja (borg) to najwyżej 2 miesiące czynszu podstawowego. Dostajesz ją z powrotem, gdy się wyprowadzasz, minus prawdziwe szkody. Zamelduj się pod swoim adresem w gemeente. Niebezpieczne mieszkanie, groźby albo niesprawiedliwe koszty? Zgłoś to w gemeente (meldpunt) i poproś o darmową radę w Juridisch Loket albo w poradni mieszkaniowej. Z problemem z wysokością czynszu albo opłat za usługi możesz zwrócić się do Huurcommissie. Kończy ci się praca? Poproś o radę, zanim wyprowadzisz się z mieszkania. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', x: 'Pracodawca albo agencja załatwia ci mieszkanie? Wtedy umowa najmu musi być osobno od umowy o pracę. Poproś o umowę najmu na piśmie i potwierdzenie tego, co płacisz. Czynsz można potrącać z wypłaty tylko wtedy, gdy jest na to twoja pisemna zgoda, i tylko w granicach prawa: sprawdź to na pasku wypłaty. Kaucja (borg) to najwyżej 2 miesiące czynszu podstawowego. Dostajesz ją z powrotem, gdy się wyprowadzasz, minus prawdziwe szkody. Zamelduj się pod swoim adresem w gemeente. Niebezpieczne mieszkanie, groźby albo niesprawiedliwe koszty? Zgłoś to w gemeente (meldpunt) i poproś o darmową radę w Juridisch Loket albo w poradni mieszkaniowej. Z problemem z wysokością czynszu albo opłat za usługi możesz zwrócić się do Huurcommissie. Kończy ci się praca? Poproś o radę, zanim wyprowadzisz się z mieszkania. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.' }, // x: nieuw, nalezen
    'c.housing.p': { m: 'Mogę dostać potwierdzenie, że zapłaciłem?', f: 'Mogę dostać potwierdzenie, że zapłaciłam?', x: 'Mogę dostać potwierdzenie zapłaty?' }, // x: nieuw, nalezen
    'c.housing.s': 'Kończy ci się praca. Agencja mówi: „Jutro musisz opuścić mieszkanie.” Co robisz?',
    'c.housing.o1': 'Najpierw prosisz o radę w Juridisch Loket.', // nagelezen (2e lezing)
    'c.housing.o2': 'Od razu się wyprowadzasz i zapominasz o kaucji.',
    'c.housing.o3': 'Zostajesz i przestajesz odpowiadać agencji.',
    'c.housing.w': 'Umowa najmu ma własne zasady, osobno od pracy. Darmowa porada pomoże ci poznać swoje prawa, np. kiedy musisz się wyprowadzić i co z kaucją.',
    'c.payslip': 'Sprawdzaj pasek wypłaty',
    'c.payslip.b': { m: 'Bruto to twoje wynagrodzenie przed podatkiem. Netto to to, co dostajesz na konto: bruto minus podatek i składki (loonheffing). Pracodawca musi dawać ci pasek wypłaty (loonstrook). Sprawdzaj godziny i wynagrodzenie na każdym pasku i zapisuj godziny, które przepracowałeś. Masz dwie prace? Korzystaj z ulgi podatkowej (loonheffingskorting) tylko u jednego pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Bruto to twoje wynagrodzenie przed podatkiem. Netto to to, co dostajesz na konto: bruto minus podatek i składki (loonheffing). Pracodawca musi dawać ci pasek wypłaty (loonstrook). Sprawdzaj godziny i wynagrodzenie na każdym pasku i zapisuj godziny, które przepracowałaś. Masz dwie prace? Korzystaj z ulgi podatkowej (loonheffingskorting) tylko u jednego pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'Bruto to twoje wynagrodzenie przed podatkiem. Netto to to, co dostajesz na konto: bruto minus podatek i składki (loonheffing). Pracodawca musi dawać ci pasek wypłaty (loonstrook). Sprawdzaj godziny i wynagrodzenie na każdym pasku i zapisuj swoje przepracowane godziny. Masz dwie prace? Korzystaj z ulgi podatkowej (loonheffingskorting) tylko u jednego pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // x: nieuw, nalezen
    'c.payslip.p': { m: 'Przepracowałem więcej godzin. Możesz to sprawdzić?', f: 'Przepracowałam więcej godzin. Możesz to sprawdzić?', x: 'Mam więcej przepracowanych godzin. Możesz to sprawdzić?' }, // x: nieuw, nalezen
    'c.payslip.s': { m: 'Na pasku wypłaty jest mniej godzin, niż przepracowałeś. Co robisz?', f: 'Na pasku wypłaty jest mniej godzin, niż przepracowałaś. Co robisz?', x: 'Na pasku wypłaty jest mniej godzin, niż było w rzeczywistości. Co robisz?' }, // x: nieuw, nalezen
    'c.payslip.o1': 'Pokazujesz swoje notatki i prosisz przełożonego o sprawdzenie.', // nagelezen (2e lezing)
    'c.payslip.o2': 'Nic nie mówisz, bo nie chcesz problemów.',
    'c.payslip.o3': 'Czekasz miesiąc: na następnym pasku wypłaty będzie dobrze.', // nagelezen (2e lezing)
    'c.payslip.w': 'Błędy na pasku wypłaty się zdarzają. Pytanie o nie jest normalne i to twoje prawo. Własne notatki z datami i godzinami bardzo pomagają.',
    'c.extra': 'Dodatek urlopowy i płaca minimalna',
    'c.extra.b': 'Dostajesz dodatek urlopowy (vakantiegeld): co najmniej 8% twojego wynagrodzenia brutto. Większość pracodawców wypłaca go raz w roku, w maju albo czerwcu. Twoje wynagrodzenie nigdy nie może być niższe niż ustawowa płaca minimalna (minimumloon); dla pracowników poniżej 21 lat jest ona niższa. Kwota zmienia się co roku: sprawdź ją na rijksoverheid.nl. Cao często daje dodatek za nadgodziny albo pracę w nocy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.extra.p': 'Kiedy dostanę dodatek urlopowy?',
    'c.extra.s': 'Kolega mówi: „W maju dostaniesz od szefa dodatkowe pieniądze.” Co to jest?',
    'c.extra.o1': 'Dodatek urlopowy: co najmniej 8% twojego wynagrodzenia brutto.',
    'c.extra.o2': 'Prezent tylko dla najlepszych pracowników.',
    'c.extra.o3': 'Trzynastka: jedna dodatkowa pensja miesięczna, dla wszystkich.', // nagelezen (2e lezing)
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
    'c.smoking.o1': 'Odmawiasz i palisz na zewnątrz, w miejscu dla palących, w przerwie.',
    'c.smoking.o2': 'Szybko palisz w magazynku, tylko ten jeden raz.',
    'c.smoking.o3': 'Zamiast tego używasz e-papierosa w środku, bo to wolno.',
    'c.smoking.w': 'Palenie w środku jest niezgodne z prawem i może wywołać pożar. E-papierosa w środku też nie wolno używać. Przestrzeganie zasad chroni wszystkich.',
    'c.clock': { m: 'Odbijaj kartę sam', f: 'Odbijaj kartę sama', x: 'Odbijaj własną kartę' }, // x: nieuw, nalezen
    'c.clock.b': { m: 'Odbijaj kartę sam, na wejściu i wyjściu, w chwili, gdy naprawdę zaczynasz i kończysz pracę. Nigdy nie odbijaj karty za kolegę i nigdy nie pozwól nikomu używać twojej karty. To jest oszustwo i może skończyć się zwolnieniem. Spóźnisz się? Zadzwoń przed początkiem zmiany. Sprawdzaj, czy godziny z karty zgadzają się z paskiem wypłaty. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'Odbijaj kartę sama, na wejściu i wyjściu, w chwili, gdy naprawdę zaczynasz i kończysz pracę. Nigdy nie odbijaj karty za kolegę i nigdy nie pozwól nikomu używać twojej karty. To jest oszustwo i może skończyć się zwolnieniem. Spóźnisz się? Zadzwoń przed początkiem zmiany. Sprawdzaj, czy godziny z karty zgadzają się z paskiem wypłaty. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'Odbijaj własną kartę, na wejściu i wyjściu, w chwili, gdy naprawdę zaczynasz i kończysz pracę. Nigdy nie odbijaj karty za kolegę i nigdy nie pozwól nikomu używać twojej karty. To jest oszustwo i może skończyć się zwolnieniem. Spóźnisz się? Zadzwoń przed początkiem zmiany. Sprawdzaj, czy godziny z karty zgadzają się z paskiem wypłaty. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen
    'c.clock.p': { m: 'Zapomniałem odbić kartę na wyjściu. Możesz to poprawić?', f: 'Zapomniałam odbić kartę na wyjściu. Możesz to poprawić?', x: 'Zapomniałem / zapomniałam odbić kartę na wyjściu. Możesz to poprawić?' }, // x: nieuw, nalezen
    'c.clock.s': 'Kolega daje ci swoją kartę: „Odbij za mnie kartę, spóźnię się 20 minut.” Co robisz?',
    'c.clock.o1': 'Odmawiasz i mówisz mu, żeby zadzwonił do przełożonego.', // nagelezen (2e lezing)
    'c.clock.o2': 'Robisz to ten jeden raz, bo to twój przyjaciel.',
    'c.clock.o3': 'Odbijasz jego kartę i mówisz przełożonemu później.',
    'c.clock.w': 'Odbijanie karty za kogoś to oszustwo, dla was obu. Odmowa chroni kolegę i twoją własną pracę.',
    'c.hygiene': 'Trzeźwa głowa, czyste ręce',
    'c.hygiene.b': { m: 'Alkohol i narkotyki w pracy albo przychodzenie do pracy po ich użyciu są zabronione prawie we wszystkich firmach. To bardzo niebezpieczne przy maszynach i wózkach widłowych i może skończyć się zwolnieniem. Lek powoduje u ciebie senność albo zawroty głowy? Powiedz przełożonemu, żebyś mógł robić bezpieczną pracę. Nie musisz mówić, jaki to lek. Przy produkcji żywności zasady higieny są surowe: myj ręce, noś czyste ubranie robocze, w razie potrzeby siateczkę na włosy, i żadnej biżuterii. Wymioty albo biegunka? Zgłoś to, zanim zaczniesz pracę. Utrzymuj porządek w miejscu pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'Alkohol i narkotyki w pracy albo przychodzenie do pracy po ich użyciu są zabronione prawie we wszystkich firmach. To bardzo niebezpieczne przy maszynach i wózkach widłowych i może skończyć się zwolnieniem. Lek powoduje u ciebie senność albo zawroty głowy? Powiedz przełożonemu, żebyś mogła robić bezpieczną pracę. Nie musisz mówić, jaki to lek. Przy produkcji żywności zasady higieny są surowe: myj ręce, noś czyste ubranie robocze, w razie potrzeby siateczkę na włosy, i żadnej biżuterii. Wymioty albo biegunka? Zgłoś to, zanim zaczniesz pracę. Utrzymuj porządek w miejscu pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'Alkohol i narkotyki w pracy albo przychodzenie do pracy po ich użyciu są zabronione prawie we wszystkich firmach. To bardzo niebezpieczne przy maszynach i wózkach widłowych i może skończyć się zwolnieniem. Lek powoduje u ciebie senność albo zawroty głowy? Powiedz przełożonemu, żeby dostać bezpieczną pracę. Nie musisz mówić, jaki to lek. Przy produkcji żywności zasady higieny są surowe: myj ręce, noś czyste ubranie robocze, w razie potrzeby siateczkę na włosy, i żadnej biżuterii. Wymioty albo biegunka? Zgłoś to, zanim zaczniesz pracę. Utrzymuj porządek w miejscu pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen
    'c.hygiene.p': { m: 'Biorę lek. Po nim jestem śpiący.', f: 'Biorę lek. Po nim jestem śpiąca.', x: 'Biorę lek. Po nim chce mi się spać.' }, // x: nieuw, nalezen
    'c.hygiene.s': { m: 'Lekarz daje ci lek, po którym jesteś śpiący. Jutro musisz jeździć wózkiem widłowym. Co robisz?', f: 'Lekarz daje ci lek, po którym jesteś śpiąca. Jutro musisz jeździć wózkiem widłowym. Co robisz?', x: 'Lekarz daje ci lek, po którym chce ci się spać. Jutro musisz jeździć wózkiem widłowym. Co robisz?' }, // x: nieuw, nalezen
    'c.hygiene.o1': { m: 'Mówisz przełożonemu, zanim zaczniesz, żebyś mógł robić bezpieczną pracę.', f: 'Mówisz przełożonemu, zanim zaczniesz, żebyś mogła robić bezpieczną pracę.', x: 'Mówisz przełożonemu, zanim zaczniesz, żeby dostać bezpieczną pracę.' }, // x: nieuw, nalezen
    'c.hygiene.o2': 'Nic nie mówisz i jeździsz bardzo wolno.',
    'c.hygiene.o3': 'Przestajesz brać lek, nie pytając lekarza.',
    'c.hygiene.w': 'Przełożony nie musi wiedzieć, jaki to lek, tylko że teraz nie możesz jeździć ani pracować przy maszynach. To chroni ciebie i kolegów.',
    'c.smalltalk': 'Pogawędka w przerwie',
    'c.smalltalk.b': { m: 'Krótkie rozmowy w przerwie są normalne. Pomagają ci poczuć się częścią zespołu. Jesteś mile widziany przy stole na kawę albo lunch. Łatwe tematy to weekend, pogoda, sport i wakacje. Pytania o pensję, religię albo czyjeś życie prywatne są na początku często zbyt osobiste. W swoje urodziny ludzie często przynoszą coś dla zespołu (trakteren), np. ciasto. Kolega ma urodziny? Powiedz „Gefeliciteerd!”.', f: 'Krótkie rozmowy w przerwie są normalne. Pomagają ci poczuć się częścią zespołu. Jesteś mile widziana przy stole na kawę albo lunch. Łatwe tematy to weekend, pogoda, sport i wakacje. Pytania o pensję, religię albo czyjeś życie prywatne są na początku często zbyt osobiste. W swoje urodziny ludzie często przynoszą coś dla zespołu (trakteren), np. ciasto. Kolega ma urodziny? Powiedz „Gefeliciteerd!”.', x: 'Krótkie rozmowy w przerwie są normalne. Pomagają ci poczuć się częścią zespołu. Możesz śmiało dosiąść się do stołu na kawę albo lunch. Łatwe tematy to weekend, pogoda, sport i wakacje. Pytania o pensję, religię albo czyjeś życie prywatne są na początku często zbyt osobiste. W swoje urodziny ludzie często przynoszą coś dla zespołu (trakteren), np. ciasto. Kolega ma urodziny? Powiedz „Gefeliciteerd!”.' }, // x: nieuw, nalezen
    'c.smalltalk.p': 'Wszystkiego najlepszego z okazji urodzin!',
    'c.smalltalk.s': 'W przerwie koledzy siedzą razem przy stole. Jeszcze ich dobrze nie znasz. Co robisz?',
    'c.smalltalk.o1': 'Pytasz „Mag ik bij jullie zitten?” i dołączasz do krótkiej rozmowy.',
    'c.smalltalk.o2': { m: 'Codziennie jesz sam na zewnątrz, żeby im nie przeszkadzać.', f: 'Codziennie jesz sama na zewnątrz, żeby im nie przeszkadzać.', x: 'Codziennie jesz na zewnątrz w samotności, żeby im nie przeszkadzać.' }, // x: nieuw, nalezen
    'c.smalltalk.o3': 'Pytasz każdego kolegę, ile zarabia.',
    'c.smalltalk.w': 'Dosiąść się do stołu to coś mile widzianego i pomaga poznać zespół. Proste pytanie, np. „Hoe was je weekend?”, to dobry początek.',
    'c.mistakes': 'Błędy są normalne',
    'c.mistakes.b': { m: 'Każdy popełnia błędy w pracy. Powiedz o tym szybko, żeby można było to naprawić: „Sorry, ik heb een fout gemaakt.” Ukrywanie błędu jest odbierane dużo gorzej niż sam błąd. Uwagi dotyczą pracy, nie ciebie jako osoby. Dostałeś komplement? Po prostu podziękuj. Nie wiesz, co poprawić? Zapytaj: „Kun je het uitleggen?”', f: 'Każdy popełnia błędy w pracy. Powiedz o tym szybko, żeby można było to naprawić: „Sorry, ik heb een fout gemaakt.” Ukrywanie błędu jest odbierane dużo gorzej niż sam błąd. Uwagi dotyczą pracy, nie ciebie jako osoby. Dostałaś komplement? Po prostu podziękuj. Nie wiesz, co poprawić? Zapytaj: „Kun je het uitleggen?”', x: 'Każdy popełnia błędy w pracy. Powiedz o tym szybko, żeby można było to naprawić: „Sorry, ik heb een fout gemaakt.” Ukrywanie błędu jest odbierane dużo gorzej niż sam błąd. Uwagi dotyczą pracy, nie ciebie jako osoby. Ktoś cię chwali? Po prostu podziękuj. Nie wiesz, co poprawić? Zapytaj: „Kun je het uitleggen?”' }, // x: nieuw, nalezen
    'c.mistakes.p': { m: 'Przepraszam, popełniłem błąd. Jak mogę to naprawić?', f: 'Przepraszam, popełniłam błąd. Jak mogę to naprawić?', x: 'Przepraszam, to mój błąd. Jak mogę to naprawić?' }, // x: nieuw, nalezen
    'c.mistakes.s': { m: 'Postawiłeś 20 kartonów na złej palecie. Nikt jeszcze tego nie widział. Co robisz?', f: 'Postawiłaś 20 kartonów na złej palecie. Nikt jeszcze tego nie widział. Co robisz?', x: 'Przez pomyłkę stawiasz 20 kartonów na złej palecie. Nikt jeszcze tego nie widział. Co robisz?' }, // x: nieuw, nalezen
    'c.mistakes.o1': 'Mówisz przełożonemu i pomagasz to naprawić.', // nagelezen (2e lezing)
    'c.mistakes.o2': 'Nic nie mówisz i masz nadzieję, że nikt nie zauważy.',
    'c.mistakes.o3': 'Mówisz, że zrobił to kolega.',
    'c.mistakes.w': 'Błąd zgłoszony wcześnie łatwo naprawić. Uczciwość buduje zaufanie, a to liczy się bardziej niż to, że nigdy nie popełniasz błędów.',
    'c.respect': 'Szacunek dla wszystkich',
    'c.respect.b': 'W pracy wszyscy są równi i wszystkich traktuje się z szacunkiem, bez względu na płeć, pochodzenie, religię czy orientację seksualną. To ty decydujesz o kontakcie fizycznym. Uścisk dłoni jest zwyczajny, ale możesz też przywitać się w inny grzeczny sposób, np. skinieniem głowy i uśmiechem, i krótko to wyjaśnić. Żarty z czyjegoś pochodzenia albo religii, groźby, nękanie (pesten) i niechciane zachowania seksualne są nie do przyjęcia. Możesz to zgłosić przełożonemu albo osobie zaufania (vertrouwenspersoon), jeśli jest taka w twojej firmie.',
    'c.respect.p': 'Wolę nie podawać ręki, ale chętnie się z tobą przywitam.',
    'c.respect.s': { m: 'Kolega często żartuje z twojej religii. Prosiłeś, żeby przestał, ale on robi to dalej. Co robisz?', f: 'Kolega często żartuje z twojej religii. Prosiłaś, żeby przestał, ale on robi to dalej. Co robisz?', x: 'Kolega często żartuje z twojej religii. Prosisz, żeby przestał, ale on robi to dalej. Co robisz?' }, // x: nieuw, nalezen
    'c.respect.o1': 'Mówisz o tym przełożonemu albo vertrouwenspersoon.',
    'c.respect.o2': 'Śmiejesz się razem z nim, żeby nie było kłopotów.',
    'c.respect.o3': 'W odpowiedzi żartujesz z jego pochodzenia.',
    'c.respect.w': 'Takie żarty są w pracy nie do przyjęcia. Zgłoszenie tego jest normalne: firma musi dbać, żeby miejsce pracy było bezpieczne dla wszystkich.',
    'c.health': 'Przerwy i godziny pracy',
    'c.health.b': 'Prawo chroni twoje zdrowie. Pracujesz dłużej niż 5,5 godziny? Wtedy masz co najmniej 30 minut przerwy (może być 2 razy po 15 minut). Dłużej niż 10 godzin? Wtedy co najmniej 45 minut. Cao może mieć trochę inne zasady dotyczące przerw. Możesz pracować najwyżej 12 godzin na jednej zmianie i 60 godzin w tygodniu. Pracodawca musi dać ci za darmo środki ochrony, np. obuwie ochronne albo rękawice. Niebezpieczna praca albo za niska zapłata? Możesz to zgłosić do Nederlandse Arbeidsinspectie, także bez podawania nazwiska. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.health.p': { m: 'Nie miałem jeszcze przerwy.', f: 'Nie miałam jeszcze przerwy.', x: 'Wciąż czekam na przerwę.' }, // x: nieuw, nalezen
    'c.health.s': { m: 'Pracujesz od 6 godzin bez przerwy. Przełożony prosi, żebyś pracował dalej. Co robisz?', f: 'Pracujesz od 6 godzin bez przerwy. Przełożony prosi, żebyś pracowała dalej. Co robisz?', x: 'Pracujesz od 6 godzin bez przerwy. Przełożony prosi, żeby pracować dalej. Co robisz?' }, // x: nieuw, nalezen
    'c.health.o1': 'Mówisz, że teraz potrzebujesz przerwy.', // nagelezen (2e lezing)
    'c.health.o2': 'Pracujesz dalej, a później robisz dłuższą przerwę.', // nagelezen (2e lezing)
    'c.health.o3': 'Bez słowa wychodzisz z pracy do domu.',
    'c.health.w': 'Gdy pracujesz dłużej niż 5,5 godziny, przerwa wynika z prawa, to nie jest przysługa. Odpoczynek pomaga też pracować bezpiecznie.',
    'c.rights': 'Dyskryminacja i zwolnienie',
    'c.rights.b': { m: 'Dyskryminacja w pracy jest zabroniona, np. z powodu pochodzenia, religii albo płci. Pracodawca nie może tak po prostu cię zwolnić: zwykle potrzebuje zgody UWV albo sądu, albo twojej zgody. (W okresie próbnym albo na koniec umowy na czas określony obowiązują inne zasady.) Nie podpisuj papieru o zwolnieniu, którego nie rozumiesz. Podpisałeś porozumienie o zakończeniu pracy (vaststellingsovereenkomst)? Wtedy zwykle możesz je jeszcze odwołać na piśmie w ciągu 14 dni. Najpierw poproś o pomoc związek zawodowy (np. FNV), punkt pomocy w sprawie dyskryminacji albo Juridisch Loket (darmowa porada prawna). To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', f: 'Dyskryminacja w pracy jest zabroniona, np. z powodu pochodzenia, religii albo płci. Pracodawca nie może tak po prostu cię zwolnić: zwykle potrzebuje zgody UWV albo sądu, albo twojej zgody. (W okresie próbnym albo na koniec umowy na czas określony obowiązują inne zasady.) Nie podpisuj papieru o zwolnieniu, którego nie rozumiesz. Podpisałaś porozumienie o zakończeniu pracy (vaststellingsovereenkomst)? Wtedy zwykle możesz je jeszcze odwołać na piśmie w ciągu 14 dni. Najpierw poproś o pomoc związek zawodowy (np. FNV), punkt pomocy w sprawie dyskryminacji albo Juridisch Loket (darmowa porada prawna). To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', x: 'Dyskryminacja w pracy jest zabroniona, np. z powodu pochodzenia, religii albo płci. Pracodawca nie może tak po prostu cię zwolnić: zwykle potrzebuje zgody UWV albo sądu, albo twojej zgody. (W okresie próbnym albo na koniec umowy na czas określony obowiązują inne zasady.) Nie podpisuj papieru o zwolnieniu, którego nie rozumiesz. Porozumienie o zakończeniu pracy (vaststellingsovereenkomst) jest już podpisane? Wtedy zwykle możesz je jeszcze odwołać na piśmie w ciągu 14 dni. Najpierw poproś o pomoc związek zawodowy (np. FNV), punkt pomocy w sprawie dyskryminacji albo Juridisch Loket (darmowa porada prawna). To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.' }, // x: nieuw, nalezen
    'c.rights.p': 'Najpierw chcę poprosić o radę.',
    'c.rights.s': 'Szef daje ci papier: „Podpisz dzisiaj, wtedy odejdziesz za porozumieniem.” Nie rozumiesz go dobrze. Co robisz?',
    'c.rights.o1': 'Jeszcze nie podpisujesz. Prosisz o czas i najpierw szukasz porady.',
    'c.rights.o2': 'Podpisujesz, bo szef mówi, że wszystko w porządku.',
    'c.rights.o3': 'Odkładasz papier i nigdy o nim nie rozmawiasz.',
    'c.rights.w': 'Jeśli podpiszesz, możesz stracić prawa, np. do zasiłku dla bezrobotnych (WW). Prośba o czas na poradę jest normalna i dozwolona.',
    'c.leave': 'Urlop i urlop w nagłej sytuacji',
    'c.leave.b': 'Z mocy prawa masz płatne dni wolne: co najmniej 4 razy tyle dni, ile pracujesz w tygodniu. Pełny etat, 5 dni w tygodniu? Wtedy co najmniej 20 dni w roku. Cao może dawać więcej. Proś o urlop na czas i na piśmie. Nagła sytuacja, np. wypadek albo choroba w rodzinie? Wtedy możesz dostać krótki płatny urlop (calamiteitenverlof). Od razu powiedz pracodawcy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.leave.p': { m: 'Chciałbym poprosić o urlop w lipcu.', f: 'Chciałabym poprosić o urlop w lipcu.', x: 'Czy mogę prosić o urlop w lipcu?' }, // x: nieuw, nalezen
    'c.leave.s': 'Latem chcesz na trzy tygodnie odwiedzić rodzinę za granicą. Co robisz?',
    'c.leave.o1': 'Wcześnie prosisz pracodawcę o urlop, na piśmie.',
    'c.leave.o2': 'Po prostu jedziesz i mówisz szefowi, gdy wrócisz.',
    'c.leave.o3': 'Prosisz kolegę, żeby dzień wcześniej powiedział szefowi.',
    'c.leave.w': 'Pracodawca zwykle musi się zgodzić. Może odmówić tylko z bardzo ważnego powodu, i wtedy na piśmie w ciągu 2 tygodni. Wczesna prośba daje największą szansę na „tak”.', // nagelezen (2e lezing)
    'c.illness': { m: 'Twoje prawa, gdy jesteś chory', f: 'Twoje prawa, gdy jesteś chora', x: 'Twoje prawa w czasie choroby' }, // x: nieuw, nalezen
    'c.illness.b': { m: 'Gdy jesteś chory, pracodawca musi płacić co najmniej 70% twojego wynagrodzenia, maksymalnie przez 2 lata. Cao często daje więcej. Mogą być maksymalnie 2 dni bez wypłaty na początku choroby (wachtdagen), ale tylko jeśli tak jest w umowie albo w cao. Szef nie może pytać, na co chorujesz: o zdrowiu i pracy rozmawiasz z lekarzem zakładowym (bedrijfsarts). Zadzwoń do pracodawcy, gdy wyzdrowiejesz (betermelden). W pierwszym roku dostajesz co najmniej płacę minimalną. Umowa na czas określony kończy się w dniu jej końca, także gdy jesteś chory. Pracujesz przez agencję? Jeśli w twojej umowie jest klauzula agencyjna (uitzendbeding), umowa może się skończyć, gdy zachorujesz. Wtedy zapytaj UWV o Ziektewet albo zapytaj związek zawodowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Gdy jesteś chora, pracodawca musi płacić co najmniej 70% twojego wynagrodzenia, maksymalnie przez 2 lata. Cao często daje więcej. Mogą być maksymalnie 2 dni bez wypłaty na początku choroby (wachtdagen), ale tylko jeśli tak jest w umowie albo w cao. Szef nie może pytać, na co chorujesz: o zdrowiu i pracy rozmawiasz z lekarzem zakładowym (bedrijfsarts). Zadzwoń do pracodawcy, gdy wyzdrowiejesz (betermelden). W pierwszym roku dostajesz co najmniej płacę minimalną. Umowa na czas określony kończy się w dniu jej końca, także gdy jesteś chora. Pracujesz przez agencję? Jeśli w twojej umowie jest klauzula agencyjna (uitzendbeding), umowa może się skończyć, gdy zachorujesz. Wtedy zapytaj UWV o Ziektewet albo zapytaj związek zawodowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'W czasie choroby, pracodawca musi płacić co najmniej 70% twojego wynagrodzenia, maksymalnie przez 2 lata. Cao często daje więcej. Mogą być maksymalnie 2 dni bez wypłaty na początku choroby (wachtdagen), ale tylko jeśli tak jest w umowie albo w cao. Szef nie może pytać, na co chorujesz: o zdrowiu i pracy rozmawiasz z lekarzem zakładowym (bedrijfsarts). Zadzwoń do pracodawcy, gdy wyzdrowiejesz (betermelden). W pierwszym roku dostajesz co najmniej płacę minimalną. Umowa na czas określony kończy się w dniu jej końca, także w czasie choroby. Pracujesz przez agencję? Jeśli w twojej umowie jest klauzula agencyjna (uitzendbeding), umowa może się skończyć, gdy zachorujesz. Wtedy zapytaj UWV o Ziektewet albo zapytaj związek zawodowy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // nalezen: feit gelijk getrokken // x: nieuw, nalezen
    'c.illness.p': { m: 'Już jestem zdrowy. Jutro przyjdę do pracy.', f: 'Już jestem zdrowa. Jutro przyjdę do pracy.', x: 'Już czuję się dobrze. Jutro przyjdę do pracy.' }, // x: nieuw, nalezen
    'c.illness.s': { m: 'Jesteś chory od tygodnia. Pracodawca prosi, żebyś poszedł do lekarza zakładowego. Co robisz?', f: 'Jesteś chora od tygodnia. Pracodawca prosi, żebyś poszła do lekarza zakładowego. Co robisz?', x: 'Od tygodnia chorujesz. Pracodawca prosi o wizytę u lekarza zakładowego. Co robisz?' }, // x: nieuw, nalezen
    'c.illness.o1': 'Idziesz i rozmawiasz z lekarzem o zdrowiu i pracy.',
    'c.illness.o2': 'Nie idziesz, bo masz już swojego lekarza.',
    'c.illness.o3': { m: 'Wracasz do pracy, choć wciąż jesteś chory, żeby nie musieć iść.', f: 'Wracasz do pracy, choć wciąż jesteś chora, żeby nie musieć iść.', x: 'Wracasz do pracy, choć wciąż chorujesz, żeby nie musieć iść.' }, // x: nieuw, nalezen
    'c.illness.w': 'Lekarz zakładowy pomaga ci wrócić do pracy w zdrowy sposób. Nie mówi szefowi o twoich sprawach medycznych, tylko jaką pracę możesz wykonywać.',
    'c.warning': 'Oznaki wyzysku',
    'c.warning.b': { m: 'Uważaj na te sygnały. Pracodawca zatrzymuje twój paszport albo dowód: tak nie wolno, swój dokument trzymasz sam, a pracodawca może zrobić tylko kopię. Dostajesz dużo mniej pieniędzy, niż ustalono, albo nie dostajesz paska wypłaty. Musisz spłacać duży dług wobec pracodawcy albo agencji. Musisz pracować bardzo długo, bez wyboru. Ktoś ci grozi albo używa twojego mieszkania, żeby wywierać na ciebie presję. To nie jest normalne i jest niedozwolone. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', f: 'Uważaj na te sygnały. Pracodawca zatrzymuje twój paszport albo dowód: tak nie wolno, swój dokument trzymasz sama, a pracodawca może zrobić tylko kopię. Dostajesz dużo mniej pieniędzy, niż ustalono, albo nie dostajesz paska wypłaty. Musisz spłacać duży dług wobec pracodawcy albo agencji. Musisz pracować bardzo długo, bez wyboru. Ktoś ci grozi albo używa twojego mieszkania, żeby wywierać na ciebie presję. To nie jest normalne i jest niedozwolone. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.', x: 'Uważaj na te sygnały. Pracodawca zatrzymuje twój paszport albo dowód: tak nie wolno, swój dokument trzymasz u siebie, a pracodawca może zrobić tylko kopię. Dostajesz dużo mniej pieniędzy, niż ustalono, albo nie dostajesz paska wypłaty. Musisz spłacać duży dług wobec pracodawcy albo agencji. Musisz pracować bardzo długo, bez wyboru. Ktoś ci grozi albo używa twojego mieszkania, żeby wywierać na ciebie presję. To nie jest normalne i jest niedozwolone. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.' }, // x: nieuw, nalezen
    'c.warning.p': 'Chcę dostać z powrotem mój paszport.',
    'c.warning.s': 'Pierwszego dnia agencja mówi: „Zatrzymamy twój paszport, dla bezpieczeństwa.” Co robisz?',
    'c.warning.o1': 'Zatrzymujesz go u siebie. Mogą zrobić kopię.', // nagelezen (2e lezing)
    'c.warning.o2': 'Oddajesz go, bo agencja zna zasady.',
    'c.warning.o3': 'Oddajesz go, ale najpierw robisz zdjęcie paszportu.',
    'c.warning.w': 'Twój paszport należy do ciebie. Zatrzymywanie go to sposób, żeby kontrolować pracowników. Pracodawca potrzebuje tylko kopii do dokumentów.',
    'c.gethelp': 'Gdzie szukać pomocy',
    'c.gethelp.b': 'Widzisz oznaki wyzysku, u siebie albo u kogoś innego? Poszukaj pomocy. Możesz to zgłosić do Nederlandse Arbeidsinspectie, także anonimowo, albo na policję. Meld Misdaad Anoniem: 0800-7000. Darmowa porada prawna: Juridisch Loket. Jesteś w niebezpieczeństwie? Dzwoń pod 112. Każdy, kto pracuje w Holandii, może dostać pomoc, także migranci. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.',
    'c.gethelp.p': { m: 'Potrzebuję pomocy. Jestem wyzyskiwany.', f: 'Potrzebuję pomocy. Jestem wyzyskiwana.', x: 'Potrzebuję pomocy. Wyzyskują mnie.' }, // x: nieuw, nalezen
    'c.gethelp.s': 'Twój przyjaciel pracuje 14 godzin dziennie, prawie nic nie zarabia i boi się szefa. Co możesz zrobić?',
    'c.gethelp.o1': 'Pomagasz mu skontaktować się z Arbeidsinspectie albo Juridisch Loket, anonimowo, jeśli chce.',
    'c.gethelp.o2': 'Mówisz mu, że to normalne dla nowych pracowników.',
    'c.gethelp.o3': 'Mówisz mu, żeby poczekał do końca umowy, a potem szukał innej pracy.',
    'c.gethelp.w': 'Pomoc jest dla każdego, kto pracuje w Holandii. Zgłoszenie można też zrobić bez podawania nazwisk.',
    'c.callin': 'Telefon do przełożonego',
    'c.callin.b': { m: 'Gdy dzwonisz do przełożonego, powiedz swoje imię, powód i kiedy myślisz, że wrócisz. Jesteś chory? Musisz tylko powiedzieć, że jesteś chory, a nie na co chorujesz. Dzwoń: nie wysyłaj tylko SMS-a, chyba że twoja firma mówi, że SMS wystarczy. Nikt nie odbiera? Nagraj wiadomość głosową i spróbuj jeszcze raz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'Gdy dzwonisz do przełożonego, powiedz swoje imię, powód i kiedy myślisz, że wrócisz. Jesteś chora? Musisz tylko powiedzieć, że jesteś chora, a nie na co chorujesz. Dzwoń: nie wysyłaj tylko SMS-a, chyba że twoja firma mówi, że SMS wystarczy. Nikt nie odbiera? Nagraj wiadomość głosową i spróbuj jeszcze raz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'Gdy dzwonisz do przełożonego, powiedz swoje imię, powód i kiedy myślisz, że wrócisz. Chorujesz? Musisz tylko powiedzieć, że chorujesz, a nie na co chorujesz. Dzwoń: nie wysyłaj tylko SMS-a, chyba że twoja firma mówi, że SMS wystarczy. Nikt nie odbiera? Nagraj wiadomość głosową i spróbuj jeszcze raz. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen
    'c.callin.p': 'Dzień dobry, mówi Ali. Dziś nie mogę przyjść.',
    'c.callin.s': { m: 'Twoje dziecko jest chore i nie możesz przyjść do pracy. Twoja firma chce, żebyś zadzwonił. Co robisz?', f: 'Twoje dziecko jest chore i nie możesz przyjść do pracy. Twoja firma chce, żebyś zadzwoniła. Co robisz?', x: 'Twoje dziecko jest chore i nie możesz przyjść do pracy. Twoja firma oczekuje od ciebie telefonu. Co robisz?' }, // x: nieuw, nalezen
    'c.callin.o1': 'Dzwonisz do przełożonego przed zmianą.', // nagelezen (2e lezing)
    'c.callin.o2': 'Wysyłasz krótkiego SMS-a na początku zmiany.',
    'c.callin.o3': 'Prosisz sąsiada, żeby zadzwonił za ciebie.',
    'c.callin.w': 'Rozmowa telefoniczna jest jasna i szybka, a przełożony może zadać pytania. Gdy powiesz, kiedy pewnie wrócisz, łatwiej mu planować. Powiedz też swoje imię i powód.', // nagelezen (2e lezing)
    'c.texting': 'Wiadomości do pracy: krótko i grzecznie',
    'c.texting.b': 'Wiadomości do pracy pisz krótko i grzecznie. Napisz, kim jesteś i co się dzieje, a na końcu dodaj pozdrowienie. Na przykład: „Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Często sprawdzaj grafik (rooster) w aplikacji. Na prośby o wzięcie zmiany odpowiadaj na czas. Żeby zamienić się zmianą, najpierw musi się zgodzić przełożony albo planista, więc zapytaj: „Mag ik mijn dienst ruilen?” Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.texting.p': 'Cześć Mark, spóźnię się 10 minut. Przepraszam! Pozdrawiam, Ali',
    'c.texting.s': 'Spóźnisz się 10 minut. Która wiadomość do przełożonego jest najlepsza?',
    'c.texting.o1': '„Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '„Sorry, ik ben er zo!” (bez imienia, bez godziny).', // nagelezen (2e lezing)
    'c.texting.o3': 'Trzyminutowa wiadomość głosowa o korkach.',
    'c.texting.w': 'Dobra wiadomość mówi w kilku słowach, kim jesteś i co się dzieje. Wtedy przełożony od razu wie, o co chodzi.',
    'c.certs': 'Certyfikaty ci pomagają',
    'c.certs.b': 'W budownictwie, przemyśle i pracy przez agencję często potrzebny jest certyfikat VCA (bezpieczeństwo). Żeby jeździć wózkiem widłowym, zwykle potrzebujesz uprawnień na wózek widłowy (heftruckcertificaat). Zapytaj pracodawcę, czy płaci za kurs i egzamin.',
    'c.certs.p': 'Czy mogę tu zrobić kurs VCA?',
    'c.certs.s': 'W ofercie pracy wymagają certyfikatu VCA. Jeszcze go nie masz. Co robisz?',
    'c.certs.o1': 'Prosisz pracodawcę albo agencję, żeby pomogli ci go zdobyć.', // nagelezen (2e lezing)
    'c.certs.o2': 'Nie starasz się o tę pracę, bo i tak jej nie dostaniesz.',
    'c.certs.o3': 'Mówisz, że go masz, i liczysz, że nikt nie sprawdzi.',
    'c.certs.w': 'Wielu pracodawców i agencji pomaga zdobyć VCA. Pytanie pokazuje, że chcesz się uczyć.',
    'c.diploma': 'Twój dyplom się liczy',
    'c.diploma.b': 'Masz dyplom z innego kraju? Możesz dać go do oceny w IDW (Internationale Diplomawaardering). Wtedy pracodawcy widzą, ile jest wart tutaj. Szkolenie jest obowiązkowe w twojej pracy? Wtedy pracodawca musi za nie zapłacić i liczy się ono jako czas pracy. Zapytaj przełożonego o kursy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.diploma.p': 'Czy są dla mnie jakieś kursy?',
    'c.diploma.s': 'Pracodawca mówi, że musisz zrobić obowiązkowe szkolenie BHP w sobotę, bez zapłaty. Co jest prawdą?',
    'c.diploma.o1': 'Płaci za nie pracodawca i jest to czas pracy.', // nagelezen (2e lezing)
    'c.diploma.o2': 'Szkolenia są zawsze w twoim wolnym czasie.',
    'c.diploma.o3': { m: 'Za szkolenie musisz zapłacić sam.', f: 'Za szkolenie musisz zapłacić sama.', x: 'Za szkolenie musisz zapłacić z własnej kieszeni.' }, // x: nieuw, nalezen
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
    'c.insurance.b': { m: 'Gdy mieszkasz albo pracujesz w Holandii, podstawowe ubezpieczenie zdrowotne jest zwykle obowiązkowe. Co miesiąc płacisz składkę. Co roku jest udział własny (eigen risico): pierwsze koszty płacisz sam. Kwota się zmienia: sprawdź ją u ubezpieczyciela. Wizyty u lekarza rodzinnego (huisarts) nie wliczają się do udziału własnego. Przy niskich dochodach możesz dostać dopłatę do ubezpieczenia (zorgtoeslag). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Gdy mieszkasz albo pracujesz w Holandii, podstawowe ubezpieczenie zdrowotne jest zwykle obowiązkowe. Co miesiąc płacisz składkę. Co roku jest udział własny (eigen risico): pierwsze koszty płacisz sama. Kwota się zmienia: sprawdź ją u ubezpieczyciela. Wizyty u lekarza rodzinnego (huisarts) nie wliczają się do udziału własnego. Przy niskich dochodach możesz dostać dopłatę do ubezpieczenia (zorgtoeslag). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'Gdy mieszkasz albo pracujesz w Holandii, podstawowe ubezpieczenie zdrowotne jest zwykle obowiązkowe. Co miesiąc płacisz składkę. Co roku jest udział własny (eigen risico): pierwsze koszty płacisz z własnej kieszeni. Kwota się zmienia: sprawdź ją u ubezpieczyciela. Wizyty u lekarza rodzinnego (huisarts) nie wliczają się do udziału własnego. Przy niskich dochodach możesz dostać dopłatę do ubezpieczenia (zorgtoeslag). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // x: nieuw, nalezen
    'c.insurance.p': 'Potrzebuję ubezpieczenia zdrowotnego. Czy może mi pan/pani pomóc?',
    'c.insurance.s': { m: 'Zacząłeś tu pracować dwa tygodnie temu i nie masz jeszcze ubezpieczenia zdrowotnego. Co robisz?', f: 'Zaczęłaś tu pracować dwa tygodnie temu i nie masz jeszcze ubezpieczenia zdrowotnego. Co robisz?', x: 'Pracujesz tu od dwóch tygodni i nie masz jeszcze ubezpieczenia zdrowotnego. Co robisz?' }, // x: nieuw, nalezen
    'c.insurance.o1': 'Szybko załatwiasz ubezpieczenie zdrowotne.', // nagelezen (2e lezing)
    'c.insurance.o2': 'Czekasz: ubezpieczenie z twojego kraju wystarczy.', // nagelezen (2e lezing)
    'c.insurance.o3': 'Używasz karty ubezpieczenia kolegi.',
    'c.insurance.w': 'Bez ubezpieczenia lekarz albo szpital może dużo kosztować, a możesz też dostać karę. Szybkie załatwienie ubezpieczenia cię chroni. Pracodawca albo agencja mogą ci pomóc.', // nagelezen (2e lezing)
    'c.letters': 'Nie ignoruj listów',
    'c.letters.b': 'Nie ignoruj listów z Belastingdienst, gemeente ani UWV. Poproś kogoś, komu ufasz, żeby pomógł ci je przeczytać. Zeznanie podatkowe (aangifte) za poprzedni rok trzeba zwykle złożyć przed 1 maja. Możesz poprosić o więcej czasu. Dopłaty (toeslagen), np. zorgtoeslag i huurtoeslag, zależą od twoich dochodów. Jeśli dostaniesz za dużo, musisz to oddać, więc aktualizuj dane o dochodach. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.letters.p': { m: 'Dostałem list. Pomożesz mi?', f: 'Dostałam list. Pomożesz mi?', x: 'Przyszedł do mnie list. Pomożesz mi?' }, // x: nieuw, nalezen
    'c.letters.s': 'Dostajesz list z Belastingdienst. Nie rozumiesz go. Co robisz?',
    'c.letters.o1': 'Prosisz o pomoc kogoś, komu ufasz.', // nagelezen (2e lezing)
    'c.letters.o2': 'Wkładasz go do szuflady i czekasz.',
    'c.letters.o3': 'Wyrzucasz go, bo to pewnie reklama.',
    'c.letters.w': 'Oficjalne listy często mają termin. Jeśli zareagujesz na czas, problemy zwykle łatwiej rozwiązać.',
    'c.scams': 'Uważaj na oszustów',
    'c.scams.b': { m: 'Twój bank nigdy nie prosi o kody ani PIN przez telefon, SMS czy e-mail. Nie klikaj w linki w wiadomościach, których się nie spodziewałeś. Ktoś naciska, żebyś szybko zapłacił? Zatrzymaj się i najpierw sprawdź. Zadzwoń do banku na oficjalny numer, np. ten z karty bankowej albo ze strony banku.', f: 'Twój bank nigdy nie prosi o kody ani PIN przez telefon, SMS czy e-mail. Nie klikaj w linki w wiadomościach, których się nie spodziewałaś. Ktoś naciska, żebyś szybko zapłaciła? Zatrzymaj się i najpierw sprawdź. Zadzwoń do banku na oficjalny numer, np. ten z karty bankowej albo ze strony banku.', x: 'Twój bank nigdy nie prosi o kody ani PIN przez telefon, SMS czy e-mail. Nie klikaj w linki w nieoczekiwanych wiadomościach. Ktoś naciska na szybką płatność? Zatrzymaj się i najpierw sprawdź. Zadzwoń do banku na oficjalny numer, np. ten z karty bankowej albo ze strony banku.' }, // x: nieuw, nalezen
    'c.scams.p': { m: 'Sam oddzwonię do banku.', f: 'Sama oddzwonię do banku.', x: 'Sam / sama oddzwonię do banku.' }, // x: nieuw, nalezen
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
    'c.transit.o3': 'Mówisz przełożonemu: według prawa tobie też się należą.', // nagelezen (2e lezing)
    'c.transit.w': 'Zwrot kosztów dojazdu zależy od pracodawcy albo od cao. Pytanie o to jest normalne i pomaga ci poznać swoje prawa.',
    'c.ww': 'Zasiłek dla bezrobotnych (WW)',
    'c.ww.b': { m: 'Straciłeś pracę? Złóż wniosek o WW w UWV jak najszybciej, w ciągu tygodnia od pierwszego dnia bez pracy. Zwykle musisz przepracować co najmniej 26 z ostatnich 36 tygodni. Jeśli sam zwolnisz się z pracy, zwykle nie dostaniesz WW. Zarejestruj się jako osoba szukająca pracy na werk.nl. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Straciłaś pracę? Złóż wniosek o WW w UWV jak najszybciej, w ciągu tygodnia od pierwszego dnia bez pracy. Zwykle musisz przepracować co najmniej 26 z ostatnich 36 tygodni. Jeśli sama zwolnisz się z pracy, zwykle nie dostaniesz WW. Zarejestruj się jako osoba szukająca pracy na werk.nl. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'Nie masz już pracy? Złóż wniosek o WW w UWV jak najszybciej, w ciągu tygodnia od pierwszego dnia bez pracy. Zwykle musisz przepracować co najmniej 26 z ostatnich 36 tygodni. Jeśli zwolnisz się z własnej woli, zwykle nie dostaniesz WW. Zarejestruj się jako osoba szukająca pracy na werk.nl. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // x: nieuw, nalezen
    'c.ww.p': 'Chcę złożyć wniosek o zasiłek dla bezrobotnych. Co muszę zrobić?',
    'c.ww.s': { m: 'Jesteś zły na swoją pracę i chcesz się dziś zwolnić. Co jest mądre?', f: 'Jesteś zła na swoją pracę i chcesz się dziś zwolnić. Co jest mądre?', x: 'Twoja praca cię złości i chcesz się dziś zwolnić. Co jest mądre?' }, // x: nieuw, nalezen
    'c.ww.o1': 'Najpierw prosisz o radę, zanim odejdziesz z pracy.', // nagelezen (2e lezing)
    'c.ww.o2': 'Zwalniasz się dzisiaj: WW i tak dostaniesz.',
    'c.ww.o3': 'Przestajesz przychodzić do pracy i nic nie mówisz.',
    'c.ww.w': 'Zwolnienie się może cię kosztować zasiłek. Rozmowa z przełożonym, związkiem zawodowym albo Juridisch Loket może pomóc znaleźć lepsze wyjście.',
    'c.newjob': 'Szukanie nowej pracy',
    'c.newjob.b': 'Zanim odejdziesz, poproś o referencje (referentie). Zachowaj paski wypłaty i umowę. Zaktualizuj CV. Szukaj pracy w agencjach pracy (uitzendbureaus) i na werk.nl. Nigdy nie płać za to, żeby dostać pracę. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.',
    'c.newjob.p': 'Czy mogę podać pana/panią jako osobę do referencji?',
    'c.newjob.s': 'Ktoś proponuje ci pracę, ale najpierw musisz zapłacić 300 euro „za pracę”. Co robisz?',
    'c.newjob.o1': 'Nie płacisz. Szukasz prawdziwej agencji.', // nagelezen (2e lezing)
    'c.newjob.o2': 'Płacisz, bo dobra praca jest tego warta.',
    'c.newjob.o3': 'Płacisz połowę teraz, a resztę później.',
    'c.newjob.w': 'Żądanie pieniędzy za pracę to sygnał ostrzegawczy. Agencja pracy nie może brać od ciebie pieniędzy za znalezienie pracy. Możesz też szukać pracy na werk.nl.', // nagelezen (2e lezing)
    'c.tools': 'Spotkanie toolbox',
    'c.tools.b': 'Na wielu budowach regularnie odbywa się krótkie spotkanie o bezpieczeństwie: spotkanie toolbox. Dowiadujesz się na nim o zagrożeniach i nowych zasadach. Idź na nie, słuchaj i pytaj, jeśli czegoś nie rozumiesz. Sprawdzaj narzędzia, zanim ich użyjesz. Narzędzie jest zepsute? Powiedz przełożonemu.',
    'c.tools.p': 'Ta wiertarka jest zepsuta. Jest jakaś inna?',
    'c.tools.s': 'Jest spotkanie toolbox, ale twój niderlandzki nie jest jeszcze dobry. Co robisz?',
    'c.tools.o1': 'Idziesz, a potem pytasz kolegę o to, co ci umknęło.', // nagelezen (2e lezing)
    'c.tools.o2': 'Nie idziesz, bo i tak nic nie zrozumiesz.',
    'c.tools.o3': 'Podpisujesz listę obecności, ale nie idziesz.',
    'c.tools.w': { m: 'Informacje o bezpieczeństwie są dla wszystkich. Aplikacja do tłumaczenia może pomóc ci śledzić spotkanie, jeśli wolno tam używać telefonów. Pytanie kolegi po spotkaniu jest normalne i pozwala sprawdzić, czy dobrze zrozumiałeś.', f: 'Informacje o bezpieczeństwie są dla wszystkich. Aplikacja do tłumaczenia może pomóc ci śledzić spotkanie, jeśli wolno tam używać telefonów. Pytanie kolegi po spotkaniu jest normalne i pozwala sprawdzić, czy dobrze zrozumiałaś.', x: 'Informacje o bezpieczeństwie są dla wszystkich. Aplikacja do tłumaczenia może pomóc ci śledzić spotkanie, jeśli wolno tam używać telefonów. Pytanie kolegi po spotkaniu jest normalne i pozwala sprawdzić, czy dobrze rozumiesz.' }, // x: nieuw, nalezen
    'c.site': 'Zatrzymaj się i sprawdź: LMRA',
    'c.site.b': 'Zanim zaczniesz zadanie, zatrzymaj się na chwilę i sprawdź: co może tu pójść źle? To jest LMRA (ocena ryzyka w ostatniej minucie). Zawsze noś kask, a przy pracy na wysokości zabezpieczenie przed upadkiem. Nigdy nie stój pod wiszącym ładunkiem. Praca jest naprawdę niebezpieczna? Wtedy możesz przerwać, a przełożonemu musisz od razu o tym powiedzieć. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.site.p': 'Jeszcze nie zaczynam. To nie jest bezpieczne.',
    'c.site.s': 'Masz pracować na rusztowaniu, ale brakuje barierki. Kolega mówi: „Po prostu uważaj.” Co robisz?',
    'c.site.o1': 'Nie zaczynasz. Najpierw zgłaszasz to przełożonemu.',
    'c.site.o2': 'Zaczynasz, ale bardzo uważasz.',
    'c.site.o3': { m: 'Sam naprawiasz barierkę kawałkiem liny.', f: 'Sama naprawiasz barierkę kawałkiem liny.', x: 'Samodzielnie naprawiasz barierkę kawałkiem liny.' }, // x: nieuw, nalezen
    'c.site.w': 'Upadek z wysokości może spowodować bardzo ciężkie obrażenia. Możesz przerwać niebezpieczną pracę, a zgłoszenie tego chroni cały zespół.',
    'c.line': 'Ręce z dala od pracujących maszyn',
    'c.line.b': 'Nigdy nie wkładaj rąk do pracującej maszyny, nawet na sekundę. Przy awarii (storing): naciśnij wyłącznik awaryjny (noodstop) i zawołaj przełożonego. Konserwacja i naprawy odbywają się tylko wtedy, gdy maszyna jest zablokowana (lock-out), i tylko przez przeszkolone osoby. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.line.p': { m: 'Jest awaria. Nacisnąłem wyłącznik awaryjny.', f: 'Jest awaria. Nacisnęłam wyłącznik awaryjny.', x: 'Jest awaria. Wyłącznik awaryjny jest wciśnięty.' }, // x: nieuw, nalezen
    'c.line.s': 'Produkt utknął w maszynie. Maszyna wciąż pracuje. Co robisz?',
    'c.line.o1': 'Naciskasz wyłącznik awaryjny i wołasz przełożonego.',
    'c.line.o2': 'Szybko wyciągasz go ręką.',
    'c.line.o3': 'Zostawiasz to i liczysz, że maszyna sama to naprawi.',
    'c.line.w': 'Pracujące maszyny mogą w sekundę spowodować ciężki wypadek. Zatrzymanie maszyny jest zawsze dozwolone i zawsze lepsze.',
    'c.quality': 'Jakość: mów, co widzisz',
    'c.quality.b': { m: 'Widzisz problem z produktem, np. uszkodzenie albo złą etykietę? Zgłoś to i odłóż produkt na bok. Nie przepuszczaj go tylko po to, żeby linia dalej szła. Wczesne wykrycie problemu oszczędza dużo pracy i pieniędzy. Przełożony będzie zadowolony, że o tym powiedziałeś.', f: 'Widzisz problem z produktem, np. uszkodzenie albo złą etykietę? Zgłoś to i odłóż produkt na bok. Nie przepuszczaj go tylko po to, żeby linia dalej szła. Wczesne wykrycie problemu oszczędza dużo pracy i pieniędzy. Przełożony będzie zadowolony, że o tym powiedziałaś.', x: 'Widzisz problem z produktem, np. uszkodzenie albo złą etykietę? Zgłoś to i odłóż produkt na bok. Nie przepuszczaj go tylko po to, żeby linia dalej szła. Wczesne wykrycie problemu oszczędza dużo pracy i pieniędzy. Przełożony będzie zadowolony z twojego zgłoszenia.' }, // x: nieuw, nalezen
    'c.quality.p': 'Myślę, że coś jest nie tak z tymi produktami.',
    'c.quality.s': 'Widzisz, że wiele produktów ma złą datę na etykiecie. Na linii jest bardzo dużo pracy. Co robisz?',
    'c.quality.o1': 'Od razu mówisz przełożonemu albo osobie od jakości.',
    'c.quality.o2': 'Przepuszczasz je, bo to nie twoje zadanie.',
    'c.quality.o3': 'Po cichu je wyrzucasz.',
    'c.quality.w': 'Zła etykieta może oznaczać, że wszystkie produkty muszą wrócić ze sklepów. Powiedzieć o tym wcześnie to postawa dobrego członka zespołu.',
    'c.client': 'Szacunek dla podopiecznego',
    'c.client.b': { m: 'Zapukaj, zanim wejdziesz do pokoju podopiecznego. Powiedz, kim jesteś, wyjaśnij, co zamierzasz zrobić, i poproś o zgodę. Do podopiecznych mów „u”, chyba że poproszą, żebyś mówił „je”. Pozwól podopiecznym robić to, co potrafią zrobić sami.', f: 'Zapukaj, zanim wejdziesz do pokoju podopiecznego. Powiedz, kim jesteś, wyjaśnij, co zamierzasz zrobić, i poproś o zgodę. Do podopiecznych mów „u”, chyba że poproszą, żebyś mówiła „je”. Pozwól podopiecznym robić to, co potrafią zrobić sami.', x: 'Zapukaj, zanim wejdziesz do pokoju podopiecznego. Powiedz, kim jesteś, wyjaśnij, co zamierzasz zrobić, i poproś o zgodę. Do podopiecznych mów „u”, chyba że poproszą o „je”. Pozwól podopiecznym robić to, co potrafią zrobić sami.' }, // x: nieuw, nalezen
    'c.client.p': { m: 'Czy mogę wejść? Przyszedłem pomóc panu/pani się umyć.', f: 'Czy mogę wejść? Przyszłam pomóc panu/pani się umyć.', x: 'Czy mogę wejść? Jestem tu, żeby pomóc panu/pani się umyć.' }, // x: nieuw, nalezen
    'c.client.s': 'Masz pomóc podopiecznej się umyć. Drzwi do jej pokoju są zamknięte. Co robisz?',
    'c.client.o1': 'Pukasz, czekasz i mówisz, kim jesteś i po co.', // nagelezen (2e lezing)
    'c.client.o2': 'Szybko wchodzisz, bo masz dużo pracy.',
    'c.client.o3': 'Pomijasz mycie, żeby jej nie przeszkadzać.',
    'c.client.w': 'Pokój to dom podopiecznego. Pukanie i wyjaśnianie pokazuje szacunek i sprawia, że opieka przebiega spokojniej.',
    'c.privacy': 'Prywatność, higiena i leki',
    'c.privacy.b': { m: 'To, co widzisz i słyszysz o podopiecznych, zostaje w pracy. Nie rozmawiaj o podopiecznych poza pracą i nigdy nie publikuj ich zdjęć. Myj ręce przed opieką i po niej. Zauważasz zmianę u podopiecznego, np. ból albo upadek? Od razu powiedz pielęgniarce. Nigdy nie podawaj leków, chyba że jesteś przeszkolony i masz na to pozwolenie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', f: 'To, co widzisz i słyszysz o podopiecznych, zostaje w pracy. Nie rozmawiaj o podopiecznych poza pracą i nigdy nie publikuj ich zdjęć. Myj ręce przed opieką i po niej. Zauważasz zmianę u podopiecznego, np. ból albo upadek? Od razu powiedz pielęgniarce. Nigdy nie podawaj leków, chyba że jesteś przeszkolona i masz na to pozwolenie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.', x: 'To, co widzisz i słyszysz o podopiecznych, zostaje w pracy. Nie rozmawiaj o podopiecznych poza pracą i nigdy nie publikuj ich zdjęć. Myj ręce przed opieką i po niej. Zauważasz zmianę u podopiecznego, np. ból albo upadek? Od razu powiedz pielęgniarce. Nigdy nie podawaj leków, chyba że masz do tego szkolenie i pozwolenie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.' }, // x: nieuw, nalezen
    'c.privacy.p': 'Ten pan ma większy ból niż wczoraj.',
    'c.privacy.s': { m: 'Podopieczna prosi cię o swoje tabletki. Nie jesteś przeszkolony do podawania leków. Co robisz?', f: 'Podopieczna prosi cię o swoje tabletki. Nie jesteś przeszkolona do podawania leków. Co robisz?', x: 'Podopieczna prosi cię o swoje tabletki. Nie masz szkolenia do podawania leków. Co robisz?' }, // x: nieuw, nalezen
    'c.privacy.o1': 'Miło mówisz, że zawołasz pielęgniarkę, i od razu to robisz.',
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
    'c.service.b': { m: 'Do gości mów „u”, chyba że poproszą, żebyś mówił „je”. Bądź miły i spokojny, także gdy jest dużo pracy. Nie wiesz, jak odpowiedzieć na pytanie? Powiedz, że sprawdzisz. Napiwki (fooi): zasady są różne w różnych miejscach. Zapytaj, jak dzieli się napiwki u ciebie w pracy.', f: 'Do gości mów „u”, chyba że poproszą, żebyś mówiła „je”. Bądź miła i spokojna, także gdy jest dużo pracy. Nie wiesz, jak odpowiedzieć na pytanie? Powiedz, że sprawdzisz. Napiwki (fooi): zasady są różne w różnych miejscach. Zapytaj, jak dzieli się napiwki u ciebie w pracy.', x: 'Do gości mów „u”, chyba że poproszą o „je”. Zachowaj uprzejmość i spokój, także gdy jest dużo pracy. Nie wiesz, jak odpowiedzieć na pytanie? Powiedz, że sprawdzisz. Napiwki (fooi): zasady są różne w różnych miejscach. Zapytaj, jak dzieli się napiwki u ciebie w pracy.' }, // x: nieuw, nalezen
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
    'c.cleaning.o1': 'Pytasz, jak go bezpiecznie używać.', // nagelezen (2e lezing)
    'c.cleaning.o2': 'Używasz go dużo, wtedy lepiej działa.',
    'c.cleaning.o3': 'Po prostu próbujesz bez rękawic.',
    'c.cleaning.w': 'Zły środek albo za dużo środka może uszkodzić skórę, oczy albo płuca. Pytanie zajmuje minutę.',
    'c.cleansafe': 'Nigdy nie mieszaj środków',
    'c.cleansafe.b': 'Nigdy nie mieszaj środków czyszczących, np. wybielacza i środka do toalet. Mogą powstać niebezpieczne gazy. Wietrz pomieszczenie. Myjesz podłogę? Postaw tabliczkę o mokrej podłodze (Pas op, glad!), żeby nikt się nie poślizgnął. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.cleansafe.p': 'Stawiam tabliczkę. Podłoga jest mokra.',
    'c.cleansafe.s': 'Toaleta jest bardzo brudna. Kolega mówi: „Zmieszaj dwa środki, wtedy lepiej działa.” Co robisz?',
    'c.cleansafe.o1': 'Nie mieszasz ich. Używasz jednego środka.', // nagelezen (2e lezing)
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
    'c.translate.b': 'Aplikacja do tłumaczenia, na przykład Google Translate, bardzo pomaga. Możesz pisać, mówić albo użyć trybu rozmowy, żeby porozmawiać z kolegą. Aparatem możesz tłumaczyć znaki, karteczki i instrukcje. Na wielu telefonach WhatsApp też może tłumaczyć wiadomości. Używaj telefonu tylko tam, gdzie jest to bezpieczne i dozwolone: nie przy maszynach ani wózkach widłowych, i najpierw zapytaj (więcej w lekcji „Twój telefon w pracy”). Aplikacje robią błędy. W ważnych sprawach, takich jak twoja umowa, list albo instrukcja bezpieczeństwa, poproś też człowieka, żeby ci to wyjaśnił. Nie rób zdjęć poufnych dokumentów z pracy bez zgody.',
    'c.translate.p': 'Mogę użyć telefonu, żeby przetłumaczyć?',
    'c.translate.s': 'Przełożony daje ci kartkę z instrukcjami bezpieczeństwa po niderlandzku. Rozumiesz tylko kilka słów. Co robisz?',
    'c.translate.o1': 'Pytasz, czy możesz użyć aplikacji do tłumaczenia, i prosisz o wyjaśnienie.', // nagelezen (2e lezing)
    'c.translate.o2': 'Mówisz „ja, ja” i zaczynasz pracę. Zrozumiesz to później.',
    'c.translate.o3': 'Robisz zdjęcie i wysyłasz je na czat grupowy ze znajomymi, żeby to przetłumaczyli.',
    'c.translate.w': 'Aplikacja do tłumaczenia pomaga ci szybko zrozumieć, ale może się pomylić. W sprawach bezpieczeństwa najlepiej sprawdzić to z wyjaśnieniem od człowieka. Dokumenty z pracy mogą być poufne, więc nie udostępniaj ich bez zgody.',
    'c.understood': { m: 'Sprawdź, czy dobrze zrozumiałeś', f: 'Sprawdź, czy dobrze zrozumiałaś', x: 'Sprawdź, czy dobrze rozumiesz' }, // x: nieuw, nalezen
    'c.understood.b': { m: 'Twój telefon może zamieniać mowę na tekst (napisy na żywo): Live Transcribe na Androidzie, Live Captions na iPhonie. Sprawdź, jakie języki obsługuje twój telefon. Możesz też poprosić kogoś, żeby to zapisał, pokazał albo mówił wolno. Zapytaj, czy jest instrukcja z obrazkami albo w twoim języku. Potem powtórz, co zrozumiałeś: „Dus ik moet eerst …?” Tutaj to normalne i zapobiega błędom.', f: 'Twój telefon może zamieniać mowę na tekst (napisy na żywo): Live Transcribe na Androidzie, Live Captions na iPhonie. Sprawdź, jakie języki obsługuje twój telefon. Możesz też poprosić kogoś, żeby to zapisał, pokazał albo mówił wolno. Zapytaj, czy jest instrukcja z obrazkami albo w twoim języku. Potem powtórz, co zrozumiałaś: „Dus ik moet eerst …?” Tutaj to normalne i zapobiega błędom.', x: 'Twój telefon może zamieniać mowę na tekst (napisy na żywo): Live Transcribe na Androidzie, Live Captions na iPhonie. Sprawdź, jakie języki obsługuje twój telefon. Możesz też poprosić kogoś, żeby to zapisał, pokazał albo mówił wolno. Zapytaj, czy jest instrukcja z obrazkami albo w twoim języku. Potem powtórz, co rozumiesz: „Dus ik moet eerst …?” Tutaj to normalne i zapobiega błędom.' }, // x: nieuw, nalezen
    'c.understood.p': 'Czyli najpierw muszę policzyć kartony?',
    'c.understood.s': 'Koleżanka wyjaśnia, jak działa nowa maszyna. Mówi szybko i nie łapiesz niektórych słów. Co robisz?',
    'c.understood.o1': 'Prosisz, żeby to pokazała albo zapisała, a potem to powtarzasz.', // nagelezen (2e lezing)
    'c.understood.o2': 'Kiwasz głową i mówisz „ja, ja”, żeby nie traciła czasu.',
    'c.understood.o3': { m: 'Później sam próbujesz obsłużyć maszynę i patrzysz, co się stanie.', f: 'Później sama próbujesz obsłużyć maszynę i patrzysz, co się stanie.', x: 'Później samodzielnie próbujesz obsłużyć maszynę i patrzysz, co się stanie.' }, // x: nieuw, nalezen
    'c.understood.w': 'Pokazanie, zapisanie i powtórzenie to szybkie sposoby sprawdzenia. Koleżanka może cię poprawić, zanim coś pójdzie źle. Tutaj uważa się to za ostrożność, a nie za powolność.',
    'c.keeplearning': 'Ucz się dalej, trochę każdego dnia',
    'c.keeplearning.b': 'Kilka minut codziennie pomaga bardziej niż jedna długa godzina w tygodniu. Zapisuj nowe słowa z pracy w aplikacji do notatek w telefonie. Słuchaj łatwego niderlandzkiego, na przykład NOS Jeugdjournaal (wiadomości dla dzieci) albo podcastu w wolnym niderlandzkim. W wielu bibliotekach publicznych jest Taalhuis: bezpłatna pomoc w nauce niderlandzkiego, często z taalcafé (miejscem do ćwiczenia mówienia) albo z partnerem do nauki języka (taalmaatje). Koledzy często przechodzą na angielski, żeby ci pomóc. Poproś ich uprzejmie, żeby mówili z tobą po niderlandzku: większość ludzi chętnie pomaga.',
    'c.keeplearning.p': 'Mów do mnie po prostu po niderlandzku, to szybciej się nauczę.',
    'c.keeplearning.s': 'Koledzy zawsze przechodzą na angielski, kiedy z tobą rozmawiają. Chcesz nauczyć się niderlandzkiego. Co robisz?',
    'c.keeplearning.o1': 'Dziękujesz im i prosisz, żeby mówili z tobą po niderlandzku.', // nagelezen (2e lezing)
    'c.keeplearning.o2': 'Nic nie mówisz. Niderlandzki przyjdzie sam.',
    'c.keeplearning.o3': 'Też odpowiadasz po angielsku, bo tak jest grzeczniej.', // nagelezen (2e lezing)
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
    's.boundaries.1': "Proszę mnie nie dotykać.",
    's.boundaries.2': "Ta uwaga nie jest dla mnie śmieszna.",
    's.boundaries.3': "Chcę coś zgłosić osobie zaufania.",
    'c.boundaries.q': "Nie rób problemów, to był tylko żart.",
    'c.boundaries.a': "Nie dla mnie. Chcę, żebyś przestał.",
    'c.gossip': "Plotki i media społecznościowe",
    'c.gossip.b': "Mówienie o koledze za jego plecami (roddelen) niszczy zaufanie w zespole. Masz z kimś problem? Porozmawiaj z tą osobą albo z przełożonym. W internecie obowiązują te same zasady co w pracy: nie publikuj zdjęć, filmów ani wiadomości o kolegach, klientach czy firmie bez zgody. Twój szef może zobaczyć, co publikujesz, a to może zostać w internecie na lata. Wiele zespołów ma czat grupowy (groepsapp) do spraw pracy: pisz tam tylko o pracy i nie pokazuj innym zrzutów ekranu z tego czatu. Udostępnianie prywatnych spraw kolegi albo wyśmiewanie kogoś w internecie to też nękanie.",
    'c.gossip.p': "Nie chcę, żeby to było w internecie.",
    'c.gossip.s': { m: 'Kolega nagrywa cię, kiedy poślizgnąłeś się na mokrej podłodze. Chce wrzucić film na TikTok. Co robisz?', f: 'Kolega nagrywa cię, kiedy poślizgnęłaś się na mokrej podłodze. Chce wrzucić film na TikTok. Co robisz?', x: 'Kolega nagrywa, jak ślizgasz się na mokrej podłodze. Chce wrzucić film na TikTok. Co robisz?' }, // x: nieuw, nalezen
    'c.gossip.o1': 'Mówisz „Nee, dat wil ik niet” i prosisz, żeby to usunął.', // nagelezen (2e lezing)
    'c.gossip.o2': "Śmiejesz się i pozwalasz mu to opublikować, żeby nie robić problemów.",
    'c.gossip.o3': 'Prosisz go, żeby to opublikował bez twojego imienia.', // nagelezen (2e lezing)
    'c.gossip.w': 'Nikt nie może wrzucić filmu z tobą do internetu bez twojej zgody. Odmowa jest normalna, a pracodawca musi zareagować, gdy koledzy wyśmiewają się z siebie nawzajem w internecie. Jeśli i tak to opublikuje, powiedz o tym przełożonemu.', // nagelezen (2e lezing)
    'c.boundaries': "Przekraczanie granic",
    'c.boundaries.b': { m: 'Grensoverschrijdend gedrag to zachowanie, które przekracza czyjeś granice: niechciany dotyk, seksualne uwagi lub żarty, gapienie się, wysyłanie niechcianych zdjęć, groźby albo krzyk. Nie ma znaczenia, czy druga osoba „chciała tylko zażartować”: liczy się to, jak ty to odczuwasz. Jeśli możesz, powiedz wyraźnie, że chcesz, żeby to się skończyło. Zapisz, co się stało, kiedy i kto to widział. Powiedz o tym przełożonemu, osobie zaufania (vertrouwenspersoon, jeśli jest) albo w HR. Pracodawca musi cię chronić i nie możesz zostać ukarany za zgłoszenie. Widziałeś, że spotkało to kolegę? Zapytaj, czy wszystko w porządku, i zaproponuj, że będziesz świadkiem.', f: 'Grensoverschrijdend gedrag to zachowanie, które przekracza czyjeś granice: niechciany dotyk, seksualne uwagi lub żarty, gapienie się, wysyłanie niechcianych zdjęć, groźby albo krzyk. Nie ma znaczenia, czy druga osoba „chciała tylko zażartować”: liczy się to, jak ty to odczuwasz. Jeśli możesz, powiedz wyraźnie, że chcesz, żeby to się skończyło. Zapisz, co się stało, kiedy i kto to widział. Powiedz o tym przełożonemu, osobie zaufania (vertrouwenspersoon, jeśli jest) albo w HR. Pracodawca musi cię chronić i nie możesz zostać ukarana za zgłoszenie. Widziałaś, że spotkało to kolegę? Zapytaj, czy wszystko w porządku, i zaproponuj, że będziesz świadkiem.', x: 'Grensoverschrijdend gedrag to zachowanie, które przekracza czyjeś granice: niechciany dotyk, seksualne uwagi lub żarty, gapienie się, wysyłanie niechcianych zdjęć, groźby albo krzyk. Nie ma znaczenia, czy druga osoba „chciała tylko zażartować”: liczy się to, jak ty to odczuwasz. Jeśli możesz, powiedz wyraźnie, że chcesz, żeby to się skończyło. Zapisz, co się stało, kiedy i kto to widział. Powiedz o tym przełożonemu, osobie zaufania (vertrouwenspersoon, jeśli jest) albo w HR. Pracodawca musi cię chronić i nie wolno cię karać za zgłoszenie. Spotkało to kolegę na twoich oczach? Zapytaj, czy wszystko w porządku, i zaproponuj, że będziesz świadkiem.' }, // x: nieuw, nalezen
    'c.boundaries.p': "Chcę, żebyś przestał.",
    'c.boundaries.s': "Twój kierownik zmiany często kładzie ci rękę na plecach i mówi, że wyglądasz „ładnie”. Czujesz się z tym niekomfortowo. To on decyduje o twoich zmianach. Co robisz?",
    'c.boundaries.o1': 'Zapisujesz, co się dzieje, i mówisz o tym vertrouwenspersoon.', // nagelezen (2e lezing)
    'c.boundaries.o2': "Nic nie mówisz, bo to on decyduje o twoich zmianach.",
    'c.boundaries.o3': "Odchodzisz z pracy i nikomu nie mówisz dlaczego.",
    'c.boundaries.w': { m: 'To jest niechciane zachowanie i to nie twoja wina. Osoba zaufania słucha cię poufnie i pomaga wybrać kolejny krok. Jesteś chroniony, kiedy to zgłaszasz. Możesz też porozmawiać z HR.', f: 'To jest niechciane zachowanie i to nie twoja wina. Osoba zaufania słucha cię poufnie i pomaga wybrać kolejny krok. Jesteś chroniona, kiedy to zgłaszasz. Możesz też porozmawiać z HR.', x: 'To jest niechciane zachowanie i to nie twoja wina. Osoba zaufania słucha cię poufnie i pomaga wybrać kolejny krok. Masz ochronę, kiedy to zgłaszasz. Możesz też porozmawiać z HR.' }, // nagelezen (2e lezing) // x: nieuw, nalezen
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
    'c.shelves.s': 'Wykładasz nowe mleko na półkę. Z przodu stoi jeszcze mleko z bliższą datą. Co robisz?',
    'c.shelves.o1': 'Nowe mleko stawiasz z tyłu, a starsze z przodu.',
    'c.shelves.o2': 'Nowe mleko stawiasz z przodu, bo jest świeższe.',
    'c.shelves.o3': 'Wyrzucasz starsze mleko, żeby półka ładnie wyglądała.',
    'c.shelves.w': 'Klienci biorą z przodu. Kiedy starsze produkty schodzą pierwsze, mniej jedzenia trafia do kosza.',
    'c.checkout': 'Dowód przy alkoholu i tytoniu',
    'c.checkout.b': 'Nie wolno sprzedawać alkoholu ani tytoniu osobom poniżej 18 lat: tak mówi prawo. Nie wiesz, ile lat ma klient? Poproś o dowód. Wiele sklepów prosi o dowód każdego, kto wygląda na mniej niż 25 lat. Nie ma dowodu albo ma mniej niż 18 lat? Wtedy nie sprzedajesz i zachowujesz się uprzejmie. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.checkout.p': 'Bez dowodu nie mogę tego sprzedać.',
    'c.checkout.s': 'Młody mężczyzna chce kupić piwo. Wygląda na jakieś 17 lat. Mówi, że ma 19, ale nie ma przy sobie dowodu. Co robisz?',
    'c.checkout.o1': 'Mówisz, że bez dowodu nie możesz sprzedać.', // nagelezen (2e lezing)
    'c.checkout.o2': 'Sprzedajesz, bo mówi, że ma 19 lat.',
    'c.checkout.o3': 'Sprzedajesz, ale tylko jedną puszkę.',
    'c.checkout.w': 'Bez dowodu nie możesz znać jego wieku. Sprzedaż alkoholu osobie poniżej 18 lat jest niezgodna z prawem, a sklep może dostać karę.',
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
    'c.measures.p': { m: 'Policzyłem to dwa razy.', f: 'Policzyłam to dwa razy.', x: 'To jest policzone dwa razy.' }, // x: nieuw, nalezen
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
    's.aifake.2': { m: 'Rozłączam się i sam oddzwaniam.', f: 'Rozłączam się i sama oddzwaniam.', x: 'Rozłączam się i sam / sama oddzwaniam.' },
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
    'c.aihelp.b': 'Aplikacje AI i chatboty, takie jak ChatGPT, potrafią tłumaczyć, wyjaśnić list albo pomóc napisać wiadomość. To przydatne. Ale AI czasem się myli, a mimo to brzmi bardzo pewnie. W ważnych sprawach, takich jak umowa, wynagrodzenie, leki czy bezpieczeństwo, zawsze sprawdź odpowiedź z człowiekiem: z przełożonym, z działem kadr (HR) albo w Juridisch Loket.',
    'c.aihelp.p': 'Czy to się zgadza? Może pan/pani ze mną na to zerknąć?',
    'c.aihelp.s': 'Pytasz chatbota o swoją umowę. Odpowiada, że nie dostajesz dodatku urlopowego (vakantiegeld). Co robisz?',
    'c.aihelp.o1': 'Prosisz HR albo Juridisch Loket o sprawdzenie.', // nagelezen (2e lezing)
    'c.aihelp.o2': 'Wierzysz mu: chatbot brzmi bardzo pewnie.',
    'c.aihelp.o3': 'Nic nie mówisz i o tym zapominasz.',
    'c.aihelp.w': 'Chatbot może się mylić co do przepisów i umów. W Holandii prawie każdy pracownik dostaje dodatek urlopowy. Człowiek, który zna przepisy, może to sprawdzić.',
    'c.aiprivate': 'Pomyśl, zanim coś wpiszesz',
    'c.aiprivate.b': 'To, co wpisujesz do chatbota, może zostać zapisane i wykorzystane przez firmę, która go zrobiła. Dlatego nigdy nie wpisuj swojego BSN, hasła ani danych bankowych. Nie wpisuj nazwisk ani zdjęć klientów, pacjentów czy kolegów, ani dokumentów z pracy. Wielu pracodawców ma zasady dotyczące AI. Najpierw zapytaj, czy możesz go używać w pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.',
    'c.aiprivate.p': 'Czy mogę do tego użyć AI?',
    'c.aiprivate.s': 'Chcesz, żeby chatbot napisał raport o kliencie. W raporcie jest nazwisko i adres klienta. Co robisz?',
    'c.aiprivate.o1': 'Najpierw pytasz i pomijasz nazwisko i adres.', // nagelezen (2e lezing)
    'c.aiprivate.o2': 'Wpisujesz wszystko do chatbota: tak jest szybciej.',
    'c.aiprivate.o3': 'Wysyłasz raport znajomemu, żeby go sprawdził.',
    'c.aiprivate.w': 'Nazwisko i adres to dane osobowe. Nie mogą tak po prostu trafić do innej firmy. Pracodawca wie, z jakich aplikacji wolno korzystać.',
    'c.aifake': 'Fałszywe głosy i filmy',
    'c.aifake.b': 'Dzięki AI przestępcy potrafią podrobić głos i zrobić fałszywe zdjęcia i filmy. Telefon albo wiadomość, które brzmią jak twój szef, twój bank albo ktoś z rodziny, mogą być fałszywe. Uważaj, gdy jest pośpiech, chodzi o pieniądze i pojawia się nowy numer. Rozłącz się i oddzwoń na numer, który znasz. Prawdziwy bank, pracodawca ani policja nigdy nie proszą o twoje kody.',
    'c.aifake.p': { m: 'Rozłączam się i sam oddzwaniam.', f: 'Rozłączam się i sama oddzwaniam.', x: 'Rozłączam się i sam / sama oddzwaniam.' }, // x: nieuw, nalezen
    'c.aifake.s': 'Dzwoni twój telefon. Głos, który brzmi dokładnie jak twój szef, mówi: „Zapłać ten rachunek teraz, to pilne.” Co robisz?',
    'c.aifake.o1': 'Rozłączasz się i oddzwaniasz do szefa.', // nagelezen (2e lezing)
    'c.aifake.o2': 'Szybko płacisz: to przecież szef.',
    'c.aifake.o3': 'Podajesz swój kod do banku, żeby szef mógł zapłacić.',
    'c.aifake.w': 'Głos można podrobić za pomocą AI. Pośpiech i pieniądze razem to sygnał ostrzegawczy. Oddzwonienie na znany numer to szybkie i bezpieczne sprawdzenie.',
    'c.aiplan': 'Kto o tym zdecydował?',
    'c.aiplan.b': 'Coraz więcej firm pozwala aplikacji albo komputerowi układać grafik, mierzyć twoje tempo skanerem albo podejmować decyzje. Możesz zapytać, jakie informacje o tobie są zbierane. Zapada ważna decyzja w twojej sprawie, na przykład mniej godzin, upomnienie albo zwolnienie? Zapytaj, kto o tym zdecydował. Jeśli taką decyzję podjął sam komputer, możesz poprosić, żeby człowiek jeszcze raz to sprawdził i wyjaśnił. Zapisuj swoje godziny. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'c.aiplan.p': 'Czy człowiek może na to zerknąć?',
    'c.aiplan.s': 'Aplikacja do grafiku daje ci w przyszłym miesiącu dużo mniej godzin. Nikt nie mówi dlaczego. Co robisz?',
    'c.aiplan.o1': 'Prosisz, żeby człowiek to wyjaśnił.', // nagelezen (2e lezing)
    'c.aiplan.o2': 'Akceptujesz to: aplikacja zawsze ma rację.',
    'c.aiplan.o3': 'Pytasz chatbota w aplikacji, dlaczego.', // nagelezen (2e lezing)
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
    'c.harvest': "Tempo i akord", // nagelezen (2e lezing)
    'c.harvest.b': "W szklarni często pracujesz w stałym tempie (tempo). Niektórzy pracodawcy płacą za skrzynkę, za rząd albo za kilogram: to praca na akord (stukloon). Nawet przy akordzie musisz zarobić co najmniej płacę minimalną za każdą przepracowaną godzinę. Sprawdź kwotę na rijksoverheid.nl. Codziennie zapisuj swoje godziny i skrzynki i porównuj je z paskiem wypłaty. Szybka praca jest dobra, ale bezpieczeństwo jest najważniejsze. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.", // nagelezen (2e lezing)
    'c.harvest.p': { m: "Ile skrzynek dzisiaj zrobiłem?", f: "Ile skrzynek dzisiaj zrobiłam?", x: 'Ile skrzynek mam dzisiaj?' }, // nagelezen (2e lezing) // x: nieuw, nalezen
    'c.harvest.s': { m: "Płacą ci za skrzynkę. Na koniec tygodnia twoja wypłata jest dużo niższa niż płaca minimalna za godziny, które przepracowałeś. Co robisz?", f: "Płacą ci za skrzynkę. Na koniec tygodnia twoja wypłata jest dużo niższa niż płaca minimalna za godziny, które przepracowałaś. Co robisz?", x: 'Płacą ci za skrzynkę. Na koniec tygodnia twoja wypłata jest dużo niższa niż płaca minimalna za twoje przepracowane godziny. Co robisz?' }, // nagelezen (2e lezing) // x: nieuw, nalezen
    'c.harvest.o1': "Pokazujesz pracodawcy swoją listę godzin i skrzynek.", // nagelezen (2e lezing)
    'c.harvest.o2': "Nic nie mówisz i w przyszłym tygodniu pracujesz szybciej, żeby więcej zarobić.", // nagelezen (2e lezing)
    'c.harvest.o3': "Akceptujesz to: przy akordzie niska wypłata jest normalna.", // nagelezen (2e lezing)
    'c.harvest.w': { m: "Przy akordzie i tak musisz dostać co najmniej płacę minimalną za każdą przepracowaną godzinę. Twoja lista godzin i skrzynek pomaga pokazać, co zrobiłeś. Jeśli tego nie poprawią, poproś o pomoc.", f: "Przy akordzie i tak musisz dostać co najmniej płacę minimalną za każdą przepracowaną godzinę. Twoja lista godzin i skrzynek pomaga pokazać, co zrobiłaś. Jeśli tego nie poprawią, poproś o pomoc.", x: 'Przy akordzie i tak musisz dostać co najmniej płacę minimalną za każdą przepracowaną godzinę. Twoja lista godzin i skrzynek pomaga pokazać twoją pracę. Jeśli tego nie poprawią, poproś o pomoc.' }, // nagelezen (2e lezing) // x: nieuw, nalezen
    'c.greensafe': "Upał i opryski", // nagelezen (2e lezing)
    'c.greensafe.b': "W szklarni może być bardzo gorąco, także wiosną. Często pij wodę, także zanim poczujesz pragnienie, i rób przerwy w chłodnym miejscu. Kręci ci się w głowie, jest ci niedobrze albo boli cię głowa? Przerwij pracę i powiedz komuś. Rośliny są czasem opryskiwane chemikaliami (spuitmiddelen). Na drzwiach szklarni, która dopiero co była opryskana, często wisi tabliczka. Nie wchodź, dopóki przełożony nie powie, że znowu jest bezpiecznie. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nagelezen (2e lezing)
    'c.greensafe.p': "Czy mogę już pracować w tej szklarni?", // nagelezen (2e lezing)
    'c.greensafe.s': "Dziś rano opryskano szklarnię. Na drzwiach wisi tabliczka. Kolega mówi: „No chodź, to tylko na chwilę.” Co robisz?", // nagelezen (2e lezing)
    'c.greensafe.o1': "Zostajesz na zewnątrz i pytasz, kiedy można.", // nagelezen (2e lezing)
    'c.greensafe.o2': "Szybko wchodzisz i wstrzymujesz oddech.", // nagelezen (2e lezing)
    'c.greensafe.o3': "Wchodzisz, a potem dobrze myjesz ręce.", // nagelezen (2e lezing)
    'c.greensafe.w': "Środki ochrony roślin mogą szkodzić skórze, oczom i płucom, także kiedy nic nie czujesz. Po oprysku jest czas oczekiwania, zanim można znowu wejść. Przełożony wie, kiedy się kończy.", // nagelezen (2e lezing)
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
    'l.permit': "Dokumenty, integracja i twoja praca",
    'w.papieren': "dokumenty, papiery",
    'w.werkvergunning': "pozwolenie na pracę",
    'w.werknemer': "pracownik (pracujesz dla pracodawcy)",
    'w.zzper': "samozatrudniony (pracujesz na własny rachunek)",
    'w.inburgering': "integracja obywatelska (kurs i egzaminy dla nowo przybyłych)",
    'w.taalles': "lekcja języka",
    's.permit.1': "Czy mogę tu pracować z moimi dokumentami?",
    's.permit.2': { m: "Jestem pracownikiem czy samozatrudnionym?", f: "Jestem pracownicą czy samozatrudnioną?", x: 'Pracuję na etacie czy na własny rachunek?' }, // x: nieuw, nalezen
    's.permit.3': "Pracuję na wezwanie.",
    'c.permit.q': "Możesz pracować we wtorek?",
    'c.permit.a': "Nie, wtedy mam lekcję języka. W środę mogę.",
    'l.kids': "Dzieci i praca",
    'w.zwanger': "w ciąży",
    'w.kinderopvang': "opieka nad dziećmi, żłobek",
    'w.ophalen': "odebrać (pójść po kogoś)",
    'w.ziekkind': "chore dziecko",
    'w.ouderschapsverlof': "urlop rodzicielski",
    'w.zorgverlof': "urlop opiekuńczy (wolne, żeby opiekować się chorym członkiem rodziny)",
    's.kids.1': "Moje dziecko jest chore. Muszę je odebrać.",
    's.kids.2': "Czy mogę wziąć urlop w nagłej sytuacji?",
    's.kids.3': "Czy pracodawca dalej płaci mi wynagrodzenie?",
    'c.kids.q': "Dlaczego musisz teraz wyjść?",
    'c.kids.a': "Dzwonili ze żłobka. Mój syn ma gorączkę.",
    'l.body': "Ciało i ból",
    'w.hoofd': "głowa",
    'w.rug': "plecy",
    'w.arm': "ręka (ramię)",
    'w.hand': "dłoń",
    'w.buik': "brzuch",
    'w.oog': "oko",
    's.body.1': "Boli mnie dłoń.",
    's.body.2': "Źle się czuję.",
    's.body.3': { m: "Upadłem na rękę.", f: "Upadłam na rękę.", x: 'Upadłem / upadłam na rękę.' }, // x: nieuw, nalezen
    'c.body.q': "Gdzie cię boli?",
    'c.body.a': { m: "W plecach. Podniosłem ciężkie pudło.", f: "W plecach. Podniosłam ciężkie pudło.", x: 'W plecach. Od podnoszenia ciężkiego pudła.' }, // x: nieuw, nalezen
    'l.jobends': "Kiedy kończy się twoja praca",
    'w.eindafrekening': "rozliczenie końcowe (ostatnia wypłata, kiedy kończy się praca)",
    'w.opzeggen': "wypowiedzieć (umowę), zrezygnować",
    'w.uitschrijven': "wymeldować się (skreślić swoje nazwisko z listy)",
    'w.sleutel': "klucz",
    'w.verhuizen': "przeprowadzić się",
    'w.busje': "bus (mały autobus)",
    's.jobends.1': "Czy dostanę wypłatę dodatku urlopowego i niewykorzystanych dni wolnych?",
    's.jobends.2': "Proszę o radę w Juridisch Loket.",
    's.jobends.3': { m: "Sam załatwiam sobie nowe ubezpieczenie zdrowotne.", f: "Sama załatwiam sobie nowe ubezpieczenie zdrowotne.", x: 'Samodzielnie załatwiam sobie nowe ubezpieczenie zdrowotne.' }, // x: nieuw, nalezen
    'c.jobends.q': "Twoja praca kończy się w piątek. Wtedy musisz też wyprowadzić się z mieszkania.",
    'c.jobends.a': "Jaki jest okres wypowiedzenia mojej umowy najmu?",
    'c.details': "Twoje dane: podawaj je dobrze",
    'c.details.b': "Na początku pracy podajesz swoje dane: imię i nazwisko, adres, numer telefonu, datę urodzenia i BSN. Przeliteruj swoje nazwisko powoli, litera po literze. Potem sprawdź swoje nazwisko w umowie i na pasku wypłaty. Błąd w nazwisku albo w BSN może sprawić problemy z wypłatą albo z podatkiem. Nowy adres albo numer telefonu? Powiedz pracodawcy.",
    'c.details.p': "Przeliteruję: A, L, I.",
    'c.details.s': "Przez telefon agencja zapisuje twoje nazwisko. Słyszysz, że zapisują je źle. Co robisz?",
    'c.details.o1': "Powoli literujesz nazwisko i prosisz, żeby je przeczytali.", // nagelezen (2e lezing)
    'c.details.o2': "Nic nie mówisz: mały błąd w nazwisku nie ma znaczenia.",
    'c.details.o3': "Rozłączasz się i masz nadzieję, że później znajdą błąd.",
    'c.details.w': "Twoje nazwisko musi być takie samo w umowie, na pasku wypłaty i w dowodzie tożsamości. Wtedy wypłata i podatek są dobrze rozliczone. Przeliterowanie i przeczytanie na głos to szybka kontrola.",
    'c.dates': "Daty: najpierw dzień",
    'c.dates.b': "Po niderlandzku dzień jest przed miesiącem: 3-6 to 3 czerwca, nie 6 marca. „Tot en met” znaczy, że ostatni dzień też się liczy. Dni i miesiące pisze się małą literą: maandag, juni. Nie znasz dokładnie daty? Zapytaj i powtórz ją.",
    'c.dates.p': "Chodzi ci o 3 czerwca?",
    'c.dates.s': "W twoim grafiku jest napisane: „Vrij: 3-6 tot en met 5-6”. Kiedy masz wolne?",
    'c.dates.o1': "3, 4 i 5 czerwca.",
    'c.dates.o2': "Tylko 3 i 4 czerwca.",
    'c.dates.o3': "Od 6 marca do 6 maja.",
    'c.dates.w': "Najpierw jest dzień, potem miesiąc: 3-6 to 3 czerwca. „Tot en met” znaczy, że 5 czerwca też się liczy, więc masz trzy dni wolnego.",
    'c.permit': "Praca i integracja",
    'c.permit.b': "Musisz przejść integrację obywatelską (inburgering)? Powiedz o tym pracodawcy i powiedz gminie (gemeente), że pracujesz. Wcześnie zapytaj, czy lekcje języka da się dopasować do twojego grafiku. Nie wiesz, czy możesz tu pracować? Sprawdź to, zanim zaczniesz, na przykład w IND, UWV albo VluchtelingenWerk. Każą ci zarejestrować się jako samozatrudniony (zzp’er) do tej pracy? Najpierw poproś o radę. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.",
    'c.permit.p': "We wtorek mam lekcję języka. Czy grafik może to uwzględnić?",
    'c.permit.s': "Zaczynasz nową pracę. Twoja lekcja języka jest we wtorki rano, ale według grafiku pracujesz we wtorki. Co robisz?",
    'c.permit.o1': "Mówisz przełożonemu i prosisz o zmianę grafiku.", // nagelezen (2e lezing)
    'c.permit.o2': "Opuszczasz lekcję języka, bo praca jest najważniejsza.",
    'c.permit.o3': "We wtorki zostajesz w domu i nic nie mówisz.",
    'c.permit.w': "Integracja to też twój obowiązek. Wielu pracodawców pomaga, kiedy wcześnie o tym wiedzą. Gmina (gemeente) też może pomóc dopasować twój plan do pracy.",
    'c.kids': "Twoje dziecko jest chore",
    'c.kids.b': "Twoje dziecko nagle zachorowało? Od razu powiedz pracodawcy. Na pierwsze godziny albo dni możesz wziąć urlop w nagłej sytuacji (calamiteitenverlof), a pracodawca dalej ci płaci. Dziecko potrzebuje opieki dłużej? Wtedy możesz poprosić o urlop opiekuńczy (zorgverlof). Jesteś w ciąży? Pracodawca nie może cię z tego powodu zwolnić. Zapytaj na czas o urlop macierzyński i urlop rodzicielski (ouderschapsverlof). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.",
    'c.kids.p': "Moje dziecko jest chore. Czy mogę dziś wyjść wcześniej?",
    'c.kids.s': "Żłobek (kinderopvang) dzwoni do ciebie do pracy. Twoje dziecko ma gorączkę i musi wrócić do domu. Co robisz?",
    'c.kids.o1': "Mówisz przełożonemu i prosisz o urlop w nagłej sytuacji.", // nagelezen (2e lezing)
    'c.kids.o2': "Wychodzisz bez słowa i wyjaśniasz to jutro.",
    'c.kids.o3': "Zostajesz w pracy, a dziecko czeka do końca twojej zmiany.",
    'c.kids.w': "Chore dziecko to nagła sytuacja w domu. Kiedy najpierw powiesz przełożonemu, może on zaplanować pracę. Urlop w nagłej sytuacji jest właśnie na takie chwile.",
    'c.body': "Powiedz, co się stało i gdzie boli",
    'c.body.b': "U lekarza powiedz, co się stało i gdzie boli. Na przykład: „Ik ben gevallen. Mijn arm doet pijn.” Powiedz też, od jak dawna cię boli. Nie musisz zgadywać, co ci jest: to sprawdzi lekarz. Stało się to w pracy? Powiedz przełożonemu tego samego dnia.",
    'c.body.p': { m: "Upadłem. Boli mnie ręka.", f: "Upadłam. Boli mnie ręka.", x: 'Upadłem / upadłam. Boli mnie ręka.' }, // x: nieuw, nalezen
    'c.body.s': { m: "W pracy podniosłeś ciężkie pudło. Teraz bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?", f: "W pracy podniosłaś ciężkie pudło. Teraz bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?", x: 'Po podniesieniu ciężkiego pudła w pracy bardzo bolą cię plecy. Jesteś u lekarza rodzinnego (huisarts). Co mówisz?' }, // x: nieuw, nalezen
    'c.body.o1': { m: "Gdzie boli i co się stało: podniosłeś ciężkie pudło.", f: "Gdzie boli i co się stało: podniosłaś ciężkie pudło.", x: 'Gdzie boli i co się stało: podnoszenie ciężkiego pudła.' }, // x: nieuw, nalezen
    'c.body.o2': "Tylko że źle się czujesz, nic więcej.",
    'c.body.o3': { m: "Nazwę choroby, którą znalazłeś w internecie.", f: "Nazwę choroby, którą znalazłaś w internecie.", x: 'Nazwę choroby znalezioną w internecie.' }, // x: nieuw, nalezen
    'c.body.w': "Kiedy mówisz, gdzie boli i co się stało, lekarz szybciej cię rozumie. Lekarz sprawdza, co to jest. Stało się to w pracy? Powiedz też przełożonemu.",
    'c.jobends': "Kończy się praca: co jeszcze się kończy?",
    'c.jobends.b': "Kiedy kończy się twoja praca, sprawdź rozliczenie końcowe (eindafrekening). Niewykorzystane dni wolne i dodatek urlopowy są zwykle wypłacane razem z nim. Mieszkanie, ubezpieczenie zdrowotne albo bus z agencji mogą skończyć się w tym samym czasie. Na czas załatw sobie własne ubezpieczenie zdrowotne. Umowa najmu ma swoje zasady: poproś o radę, zanim wyprowadzisz się z mieszkania. Przeprowadzasz się albo wyjeżdżasz z Holandii? Powiedz gminie (gemeente). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.",
    'c.jobends.p': "Kiedy dostanę rozliczenie końcowe?",
    'c.jobends.s': "Twoja praca kończy się w piątek. Twoje ubezpieczenie zdrowotne jest przez agencję. Co robisz?",
    'c.jobends.o1': "Pytasz, kiedy się kończy, i w porę załatwiasz własne.", // nagelezen (2e lezing)
    'c.jobends.o2': "Nic: ubezpieczenie trwa samo dalej.",
    'c.jobends.o3': "Czekasz, aż zachorujesz, i wtedy to załatwiasz.",
    'c.jobends.w': "Ubezpieczenie przez agencję często kończy się razem z pracą. Kiedy mieszkasz albo pracujesz w Holandii, zwykle musisz mieć ubezpieczenie zdrowotne. Jeśli załatwisz to na czas, nie zostaniesz bez ubezpieczenia.",
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
    's.handover.2': "Czy może Pan / Pani sprawdzić moją pracę?", // nieuw, nalezen
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
    'c.carjob.q': "Hamulce też są złe. Zrobisz je od razu?", // nieuw, nalezen
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
    's.review.2': "Czy może Pan / Pani podać przykład?", // nieuw, nalezen
    's.review.3': "Moja ocena jest w przyszłym tygodniu.", // nieuw, nalezen
    'c.review.q': "Musisz pracować szybciej.", // nieuw, nalezen
    'c.review.a': "Dobrze. Czy może Pan / Pani pokazać, jak zrobić to szybciej?", // nieuw, nalezen
    'u.society': "Udział w życiu Holandii", // nieuw, nalezen
    'l.council': "Gmina i głosowanie", // nieuw, nalezen
    'w.stemmen': "głosować", // nieuw, nalezen
    'w.verkiezing': "wybory", // nieuw, nalezen
    'w.gemeenteraad': "rada gminy (decyduje o twojej miejscowości)", // nieuw, nalezen
    'w.parlement': "parlament (tworzy prawo)", // nieuw, nalezen
    'w.stempas': "karta do głosowania (potrzebna, żeby głosować)", // nieuw, nalezen
    'w.burgemeester': "burmistrz", // nieuw, nalezen
    's.council.1': "Czy mogę głosować?", // nieuw, nalezen
    's.council.2': "Moja karta do głosowania przyszła pocztą.", // nieuw, nalezen
    's.council.3': "Rada gminy decyduje o mojej okolicy.", // nieuw, nalezen
    'c.council.q': "Idziesz w środę głosować?", // nieuw, nalezen
    'c.council.a': "Tak. Mam kartę do głosowania i dowód tożsamości.", // nieuw, nalezen
    'l.police': "Policja i twoje prawa", // nieuw, nalezen
    'w.agent': "policjant", // nieuw, nalezen
    'w.boete': "mandat, kara (pieniądze, które musisz zapłacić za karę)", // nieuw, nalezen
    'w.bezwaar': "sprzeciw (piszesz, że się nie zgadzasz)", // nieuw, nalezen
    'w.rechter': "sędzia", // nieuw, nalezen
    'w.advocaat': "adwokat", // nieuw, nalezen
    'w.wet': "prawo, ustawa", // nieuw, nalezen
    's.police.1': { m: "Dostałem mandat.", f: "dostałam mandat.", x: "Dostałem / dostałam mandat." }, // nieuw, nalezen
    's.police.2': "Chcę złożyć sprzeciw.", // nieuw, nalezen
    's.police.3': "Chcę porozmawiać z adwokatem.", // nieuw, nalezen
    'c.police.q': "Czy mogę zobaczyć Pana / Pani dokument tożsamości?", // nieuw, nalezen
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
    'c.phish.q': { m: "Kliknąłeś w link?", f: "Kliknęłaś w link?", x: "Był klik w ten link?" }, // nieuw, nalezen
    'c.phish.a': "Tak. Dzwonię do działu IT.", // nieuw, nalezen
    'l.mychoice': "W czym jestem dobry", // nieuw, nalezen
    'w.goedin': "dobry w (czymś)", // nieuw, nalezen
    'w.kiezen': "wybierać", // nieuw, nalezen
    'w.beroep': "zawód, rodzaj pracy", // nieuw, nalezen
    'w.bijbaan': "praca dorywcza (mała praca obok szkoły)", // nieuw, nalezen
    'w.nauwkeurig': "dokładny i staranny", // nieuw, nalezen
    'w.meeloopdag': "dzień obserwacji (dzień, w którym towarzyszysz komuś w pracy)", // nieuw, nalezen
    's.mychoice.1': "Umiem dobrze pracować rękami.", // nieuw, nalezen
    's.mychoice.2': "Lubię pracować z ludźmi.", // nieuw, nalezen
    's.mychoice.3': "Czy mogę przez jeden dzień towarzyszyć, żeby zobaczyć pracę?", // nieuw, nalezen
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
    'l.healthy': "W formie do pracy", // nieuw, nalezen
    'w.slapen': "spać", // nieuw, nalezen
    'w.ontbijt': "śniadanie", // nieuw, nalezen
    'w.bewegen': "ruszać się, być aktywnym", // nieuw, nalezen
    'w.moe': "zmęczony", // nieuw, nalezen
    'w.drugs': "narkotyki", // nieuw, nalezen
    'w.somber': "przygnębiony (długo smutny)", // nieuw, nalezen
    's.healthy.1': { m: "Jestem dziś bardzo zmęczony.", f: "Jestem dziś bardzo zmęczona.", x: "Mam dziś bardzo mało sił." }, // nieuw, nalezen
    's.healthy.2': "Zawsze najpierw jem śniadanie.", // nieuw, nalezen
    's.healthy.3': "W przerwie idę na krótki spacer.", // nieuw, nalezen
    'c.healthy.q': "Chcesz tabletkę? Wtedy nie zaśniesz.", // nieuw, nalezen
    'c.healthy.a': "Nie, dziękuję. Nie pracuję pod wpływem.", // nieuw, nalezen
    'c.workorder': "Najpierw przeczytaj, potem zacznij", // nieuw, nalezen
    'c.workorder.b': "Zanim zaczniesz, przeczytaj zlecenie pracy (werkbon) albo zadanie w aplikacji. Sprawdź adres, zadanie i liczbę rzeczy. Coś jest niejasne? Zapytaj, zanim zaczniesz, a nie w połowie. Potem przygotuj narzędzia i materiały. To oszczędza czas i robisz mniej błędów. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.workorder.p': "W zleceniu jest dziesięć kartonów. Czy to się zgadza?", // nieuw, nalezen
    'c.workorder.s': "W zleceniu jest napisane: pomaluj pokój 3. Kolega mówi, że to pokój 5. Co robisz?", // nieuw, nalezen
    'c.workorder.o1': "Pytasz przełożonego, który pokój jest dobry.", // nieuw, nalezen
    'c.workorder.o2': "Malujesz pokój 3, bo tak jest w zleceniu pracy.", // nieuw, nalezen
    'c.workorder.o3': "Malujesz oba pokoje, wtedy masz pewność.", // nieuw, nalezen
    'c.workorder.w': "Kiedy dwie rzeczy się nie zgadzają, sprawdzasz to przed rozpoczęciem. Krótkie pytanie zajmuje mniej czasu niż robienie pracy od nowa.", // nieuw, nalezen
    'c.handover': "Powiedz, co jest gotowe, a co nie", // nieuw, nalezen
    'c.handover.b': "Praca nie jest skończona, kiedy przestajesz. Najpierw posprzątaj swoje miejsce i narzędzia. Potem poproś kogoś, żeby sprawdził twoją pracę. Powiedz przełożonemu, co jest gotowe, a co nie. Coś poszło źle albo coś jest zepsute? Powiedz to teraz, nie jutro. Zgłoszenie końca pracy to też część twojej pracy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.handover.p': "Pokój numer cztery nie jest jeszcze gotowy. Drzwi były zamknięte na klucz.", // nieuw, nalezen
    'c.handover.s': { m: "Posprzątałeś pięć pokoi. Pokój 4 był zamknięty, więc nie mogłeś go posprzątać. Kończy się twoja zmiana. Co robisz?", f: "Posprzątałaś pięć pokoi. Pokój 4 był zamknięty, więc nie mogłaś go posprzątać. Kończy się twoja zmiana. Co robisz?", x: "Pięć pokoi jest posprzątanych. Pokój 4 był zamknięty, więc nie dało się go posprzątać. Kończy się twoja zmiana. Co robisz?" }, // nieuw, nalezen
    'c.handover.o1': "Mówisz przełożonemu, że pokój 4 nie jest gotowy, i dlaczego.", // nieuw, nalezen
    'c.handover.o2': "Idziesz do domu: pokój 4 był zamknięty, to nie twoja wina.", // nieuw, nalezen
    'c.handover.o3': { m: "Piszesz na liście „wszystko gotowe”, bo się starałeś.", f: "Piszesz na liście „wszystko gotowe”, bo się starałaś.", x: "Piszesz na liście „wszystko gotowe”, bo się starałeś / starałaś." }, // nieuw, nalezen
    'c.handover.w': "Przełożony planuje pracę. Kiedy wie, że pokój 4 nie jest gotowy, może wysłać kogoś innego. Wtedy żaden klient nie zastanie brudnego pokoju.", // nieuw, nalezen
    'c.workshop': "Oczy, uszy i ogień", // nieuw, nalezen
    'c.workshop.b': "Szlifowanie, piłowanie i wiercenie dają iskry, małe kawałki i dużo hałasu. Noś okulary ochronne i ochronniki słuchu, także przy krótkiej pracy. Kiedy jest bardzo głośno, pracodawca musi dać ci ochronniki słuchu. Iskry mogą wywołać pożar. Przy spawaniu albo szlifowaniu obok rzeczy, które mogą się palić, są dodatkowe zasady (heet werk): zapytaj, zanim zaczniesz. Po pracy posprzątaj kawałki metalu. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen
    'c.workshop.p': "Będę szlifować. Gdzie są ochronniki słuchu?", // nieuw, nalezen
    'c.workshop.s': "Musisz zeszlifować jeden mały kawałek metalu. To zajmie minutę. Twoje okulary ochronne są w innym pomieszczeniu. Co robisz?", // nieuw, nalezen
    'c.workshop.o1': "Najpierw idziesz po okulary, także na jedną minutę.", // nieuw, nalezen
    'c.workshop.o2': "Szlifujesz z przymrużonymi oczami, to szybko.", // nieuw, nalezen
    'c.workshop.o3': "Trzymasz drugą rękę przed oczami.", // nieuw, nalezen
    'c.workshop.w': "Iskra albo kawałek metalu w oku może uszkodzić oko na zawsze. To może się stać w jednej sekundzie. Okulary ochronne pomagają, także przy krótkiej pracy.", // nieuw, nalezen
    'c.power': "Prąd: nigdy tak po prostu", // nieuw, nalezen
    'c.power.b': "Nigdy nie pracuj przy czymś, co jest pod napięciem (onder spanning). Najpierw przeszkolony kolega to zabezpiecza: wyłącza prąd i to sprawdza. Tylko osoby z odpowiednim przeszkoleniem mogą to robić. Widzisz zepsuty kabel albo wtyczkę? Nie używaj ich i od razu powiedz przełożonemu. Nie wiesz, czy prąd jest wyłączony? To znaczy, że jest włączony. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen
    'c.power.p': "Widzę zepsuty kabel. Kto może na to spojrzeć?", // nieuw, nalezen
    'c.power.s': "Musisz powiesić lampę. Kolega mówi: „Prąd jest wyłączony, chyba”. Co robisz?", // nieuw, nalezen
    'c.power.o1': "Prosisz przeszkolonego kolegę, żeby sprawdził, czy prąd jest wyłączony.", // nieuw, nalezen
    'c.power.o2': "Zaczynasz, ale zakładasz grube rękawice, kiedy dotykasz przewodów.", // nieuw, nalezen
    'c.power.o3': "Włączasz i wyłączasz światło, żeby sprawdzić, czy prąd jest wyłączony.", // nieuw, nalezen
    'c.power.w': "„Chyba” to za mało przy prądzie. Porażenie może zabić. Przeszkolony kolega sprawdza, że nie ma prądu, i wtedy możesz zacząć.", // nieuw, nalezen
    'c.garage': "Bezpiecznie pod samochodem", // nieuw, nalezen
    'c.garage.b': "Nigdy nie wchodź pod samochód, który stoi tylko na lewarku. Samochód musi stać stabilnie na podnośniku albo na podporach. Rozlany olej robi śliską podłogę: od razu go sprzątnij. Stary olej, akumulatory i środki czyszczące to niebezpieczne odpady. Idą w specjalne miejsce, nigdy do zwykłego kosza ani do kanalizacji. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.garage.p': "Na podłodze jest olej. Sprzątam go.", // nieuw, nalezen
    'c.garage.s': "Musisz zajrzeć pod samochód. Samochód stoi tylko na lewarku. Kolega mówi: „Nic się nie stanie, tylko szybko”. Co robisz?", // nieuw, nalezen
    'c.garage.o1': "Czekasz, aż samochód stanie na podnośniku albo na podporach.", // nieuw, nalezen
    'c.garage.o2': "Szybko wchodzisz pod spód, a nogi trzymasz na zewnątrz.", // nieuw, nalezen
    'c.garage.o3': "Wchodzisz pod spód i prosisz kolegę, żeby trzymał auto.", // nieuw, nalezen
    'c.garage.w': "Lewarek może się ześlizgnąć. Samochód jest bardzo ciężki, a spod niego nie uciekniesz szybko. Podpory albo podnośnik trzymają samochód na miejscu.", // nieuw, nalezen
    'c.carjob': "Dodatkowa praca? Najpierw zapytaj klienta", // nieuw, nalezen
    'c.carjob.b': { m: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłeś i jakich części użyłeś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", f: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłaś i jakich części użyłaś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", x: "Znajdujesz więcej problemów, niż jest w zleceniu? Nie naprawiaj ich tak po prostu. Klient musi najpierw zgodzić się na dodatkową pracę i koszty. Przełożony albo biuro obsługi dzwoni do klienta. Jazda próbna tylko za zgodą i tylko z ważnym prawem jazdy. Zapisz, co zrobiłeś / zrobiłaś i jakich części użyłeś / użyłaś. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket." }, // nieuw, nalezen
    'c.carjob.p': "Widzę jeszcze jeden problem. Kto dzwoni do klienta?", // nieuw, nalezen
    'c.carjob.s': "Wymieniasz olej w samochodzie. Widzisz, że hamulce też są złe. Samochód ma być gotowy za godzinę. Co robisz?", // nieuw, nalezen
    'c.carjob.o1': "Mówisz przełożonemu, żeby mógł zadzwonić do klienta.", // nieuw, nalezen
    'c.carjob.o2': "Naprawiasz też hamulce: klient na pewno chce bezpieczny samochód.", // nieuw, nalezen
    'c.carjob.o3': "Nic nie mówisz: hamulców nie ma w zleceniu.", // nieuw, nalezen
    'c.carjob.w': "Klient płaci, więc klient decyduje. Bez jego zgody warsztat nie może tak po prostu robić dodatkowej pracy. Złe hamulce są niebezpieczne, więc trzeba o nich powiedzieć.", // nieuw, nalezen
    'c.placement': "Najpierw podpisz, potem zacznij", // nieuw, nalezen
    'c.placement.b': "W Entree dużo uczysz się w firmie: to twoja praktyka (stage albo bpv). Zanim zaczniesz, ty, szkoła i firma podpisujecie umowę: POK. W firmie pomaga ci opiekun praktyki (praktijkopleider). W szkole pomaga ci opiekun praktyki ze szkoły (stagebegeleider). Chorujesz? Zadzwoń do firmy przed godziną rozpoczęcia i powiedz też szkole. Zasady są różne w każdej szkole: zapytaj opiekuna praktyki ze szkoły.", // nieuw, nalezen
    'c.placement.p': "Zaczynam dopiero, kiedy umowa o praktykę jest podpisana.", // nieuw, nalezen
    'c.placement.s': { m: "Firma prosi, żebyś zaczął jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?", f: "Firma prosi, żebyś zaczęła jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?", x: "Firma prosi, żebyś zaczął / zaczęła jutro. Umowa o praktykę (POK) nie jest jeszcze podpisana. Co robisz?" }, // nieuw, nalezen
    'c.placement.o1': "Prosisz opiekuna ze szkoły, żeby najpierw załatwił POK.", // nieuw, nalezen
    'c.placement.o2': "Zaczynasz jutro, a POK podpisujesz, kiedy będziesz mieć czas.", // nieuw, nalezen
    'c.placement.o3': "Zaczynasz, ale na razie nic nie mówisz szkole.", // nieuw, nalezen
    'c.placement.w': "W POK jest napisane, czego się uczysz i kto ci pomaga. Bez podpisanej POK twoja praktyka może się nie liczyć do dyplomu. Dlatego podpisujesz ją, zanim zaczniesz.", // nieuw, nalezen
    'c.review': "Proś o informację zwrotną i o przykład", // nieuw, nalezen
    'c.review.b': { m: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Sam też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole.", f: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. sama też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole.", x: "Na praktyce ludzie mówią ci, co idzie dobrze, a co może być lepiej: to informacja zwrotna (feedback). To normalne i pomaga ci się uczyć. Nie rozumiesz? Poproś o przykład. Sam / sama też proś o informację zwrotną, na przykład raz w tygodniu. Na praktyce dzieje się coś naprawdę złego? Najpierw porozmawiaj z opiekunem praktyki w firmie. To nie pomaga? Wtedy idź do opiekuna praktyki w szkole." }, // nieuw, nalezen
    'c.review.p': "Co poszło dobrze, a co może być lepiej?", // nieuw, nalezen
    'c.review.s': "Opiekun praktyki mówi: „Musisz pracować staranniej”. Nie wiesz, o co mu chodzi. Co robisz?", // nieuw, nalezen
    'c.review.o1': "Prosisz o przykład, co masz robić inaczej.", // nieuw, nalezen
    'c.review.o2': { m: "Mówisz „tak” i masz nadzieję, że sam zrozumiesz.", f: "Mówisz „tak” i masz nadzieję, że sama zrozumiesz.", x: "Mówisz „tak” i masz nadzieję, że sam / sama zrozumiesz." }, // nieuw, nalezen
    'c.review.o3': "Od teraz pracujesz dużo wolniej, żeby nic nie poszło źle.", // nieuw, nalezen
    'c.review.w': "Z przykładem wiesz, co zmienić. Pytanie pokazuje, że chcesz się uczyć. Opiekunowie to lubią.", // nieuw, nalezen
    'c.council': "Kto może głosować?", // nieuw, nalezen
    'c.council.b': "W Holandii przez głosowanie wybierasz, kto decyduje. Rada gminy (gemeenteraad) decyduje o twojej miejscowości. Tweede Kamer tworzy prawo dla całego kraju. Z obywatelstwem holenderskim możesz głosować we wszystkich wyborach, od 18 lat. Na radę gminy może głosować więcej osób: ludzie z innego kraju UE, którzy tu mieszkają, i ludzie spoza UE po 5 latach legalnego pobytu. Gmina wysyła ci kartę do głosowania (stempas). Zabierz ją z dokumentem tożsamości. Nie wiesz, czy możesz głosować? Zapytaj w gminie.", // nieuw, nalezen
    'c.council.p': "Czy mogę głosować na radę gminy?", // nieuw, nalezen
    'c.council.s': "Pochodzisz z Maroka i od sześciu lat legalnie tu mieszkasz. Nie masz obywatelstwa holenderskiego. Są wybory do rady gminy. Co jest prawdą?", // nieuw, nalezen
    'c.council.o1': "Możesz głosować na radę gminy.", // nieuw, nalezen
    'c.council.o2': "Możesz głosować też do Tweede Kamer.", // nieuw, nalezen
    'c.council.o3': "Bez holenderskiego paszportu w ogóle nie możesz głosować.", // nieuw, nalezen
    'c.council.w': "Po 5 latach legalnego pobytu możesz głosować na radę gminy. Do Tweede Kamer potrzebujesz obywatelstwa holenderskiego.", // nieuw, nalezen
    'c.police': "Twój dokument i twoje prawa", // nieuw, nalezen
    'c.police.b': "Od 14 lat musisz pokazać dokument tożsamości, kiedy prosi o to policja. Dlatego zawsze miej go przy sobie. Dostajesz list z decyzją, z którą się nie zgadzasz, na przykład z gminy albo z UWV? Wtedy możesz na piśmie złożyć sprzeciw (bezwaar maken). Zrób to przed datą z listu. Policja i sędzia muszą traktować wszystkich jednakowo. Zatrzymanie? Możesz poprosić o adwokata. Juridisch Loket daje darmowe porady.", // nieuw, nalezen
    'c.police.p': "Nie zgadzam się z tą decyzją. Składam sprzeciw.", // nieuw, nalezen
    'c.police.s': "Dostajesz list z gminy. Nie zgadzasz się z ich decyzją. W liście jest napisane, że masz sześć tygodni. Co robisz?", // nieuw, nalezen
    'c.police.o1': "Piszesz list ze sprzeciwem, przed tą datą.", // nieuw, nalezen
    'c.police.o2': "Dzwonisz do nich raz i czekasz, aż do ciebie oddzwonią.", // nieuw, nalezen
    'c.police.o3': "Czekasz: po sześciu tygodniach samo się skończy.", // nieuw, nalezen
    'c.police.w': "Sprzeciw składasz na piśmie, przed datą z listu. Po tej dacie często jest za późno. Juridisch Loket może pomóc ci go napisać.", // nieuw, nalezen
    'c.login': "Twoje logowanie jest tylko twoje", // nieuw, nalezen
    'c.login.b': "Twoje hasło i twoje DigiD są tylko dla ciebie. Nie dawaj ich nikomu, także pracodawcy ani koledze. Na wspólnym komputerze zawsze się wyloguj, kiedy skończysz. Odchodzisz na chwilę? Zablokuj ekran. Nie pamiętasz hasła? Poproś dział IT (ICT-afdeling) o nowe. Zasady korzystania z komputerów są różne w każdej firmie: zapytaj dział IT, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    'c.login.p': "Odchodzę na chwilę. Blokuję ekran.", // nieuw, nalezen
    'c.login.s': "Przełożony prosi o twoje DigiD i hasło, żeby szybko załatwić twoje papiery. Co robisz?", // nieuw, nalezen
    'c.login.o1': { m: "Odmawiasz i logujesz się sam, a on pomaga.", f: "Odmawiasz i logujesz się sama, a on pomaga.", x: "Odmawiasz i logujesz się sam / sama, a on pomaga." }, // nieuw, nalezen
    'c.login.o2': "Dajesz je ten jeden raz, bo to twój szef.", // nieuw, nalezen
    'c.login.o3': "Piszesz je na kartce, żeby mógł ich użyć później.", // nieuw, nalezen
    'c.login.w': { m: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sam i pozwolić komuś pomóc.", f: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sama i pozwolić komuś pomóc.", x: "Z twoim DigiD ktoś może zobaczyć i zmienić twoje sprawy podatkowe, zasiłki i papiery o zdrowiu. Jest tylko dla ciebie. Możesz zalogować się sam / sama i pozwolić komuś pomóc." }, // nieuw, nalezen
    'c.phish': "Pośpiech i przycisk? Nie klikaj", // nieuw, nalezen
    'c.phish.b': { m: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działał szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Sam wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknąłeś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", f: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działała szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. sama wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknęłaś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", x: "Fałszywy mail (phishing) często wygląda prawdziwie. Chce, żebyś działał / działała szybko: „Twoje konto zostanie dziś zamknięte!” Sprawdź nadawcę. Nie klikaj w link i nie otwieraj załącznika, którego się nie spodziewasz. Sam / sama wejdź na prawdziwą stronę albo do aplikacji. Mimo to kliknąłeś / kliknęłaś? Od razu zmień hasło i zadzwoń do działu IT. To nie wstyd: im szybciej wiedzą, tym lepiej. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy." }, // nieuw, nalezen
    'c.phish.p': { m: "Kliknąłem w podejrzany link.", f: "kliknęłam w podejrzany link.", x: "Kliknąłem / kliknęłam w podejrzany link." }, // nieuw, nalezen
    'c.phish.s': { m: "Kliknąłeś w link w mailu i wpisałeś hasło. Potem widzisz, że mail był fałszywy. Co robisz?", f: "kliknęłaś w link w mailu i wpisałaś hasło. Potem widzisz, że mail był fałszywy. Co robisz?", x: "Kliknąłeś / kliknęłaś w link w mailu i wpisałeś / wpisałaś hasło. Potem widzisz, że mail był fałszywy. Co robisz?" }, // nieuw, nalezen
    'c.phish.o1': "Zmieniasz hasło i dzwonisz do działu IT.", // nieuw, nalezen
    'c.phish.o2': "Usuwasz maila, żeby nikt inny w niego nie kliknął.", // nieuw, nalezen
    'c.phish.o3': "Czekasz dzień, żeby zobaczyć, czy coś pójdzie źle.", // nieuw, nalezen
    'c.phish.w': "Z twoim hasłem ktoś inny może wejść do systemów twojej pracy. Kiedy szybko je zmienisz i powiesz działowi IT, mogą to w porę zatrzymać.", // nieuw, nalezen
    'c.mychoice': "Twoje mocne strony się liczą", // nieuw, nalezen
    'c.mychoice.b': { m: "W czym jesteś dobry? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać.", f: "W czym jesteś dobra? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać.", x: "W czym jesteś dobry / dobra? Pomyśl o pracy, szkole i domu. Opieka nad rodziną, praca dorywcza albo wolontariat też się liczą. Co lubisz, a czego nie lubisz? Nie wiesz, jaka praca do ciebie pasuje? Poproś, żeby przez jeden dzień towarzyszyć komuś w pracy (meeloopdag). Opiekun w szkole może ci pomóc wybrać." }, // nieuw, nalezen
    'c.mychoice.p': "Umiem dobrze dogadywać się z ludźmi. W domu dużo pomagam.", // nieuw, nalezen
    'c.mychoice.s': { m: "W szkole pytają: „W czym jesteś dobry?”. Nigdy nie miałeś płatnej pracy. Co mówisz?", f: "W szkole pytają: „W czym jesteś dobra?”. Nigdy nie miałaś płatnej pracy. Co mówisz?", x: "W szkole pytają: „W czym jesteś dobry / dobra?”. Nigdy nie miałeś / miałaś płatnej pracy. Co mówisz?" }, // nieuw, nalezen
    'c.mychoice.o1': "Co dobrze robisz w domu, na przykład opiekę nad innymi.", // nieuw, nalezen
    'c.mychoice.o2': { m: "Że jeszcze nie wiesz, bo nigdy nie miałeś pracy.", f: "Że jeszcze nie wiesz, bo nigdy nie miałaś pracy.", x: "Że jeszcze nie wiesz, bo nigdy nie miałeś / miałaś pracy." }, // nieuw, nalezen
    'c.mychoice.o3': "Że umiesz robić każdą pracę, wszystko.", // nieuw, nalezen
    'c.mychoice.w': "Umiejętności z domu też się liczą. Opieka, planowanie i pomaganie to umiejętności, których potrzebują pracodawcy. Powiedz, co robisz, z przykładem.", // nieuw, nalezen
    'c.nextstep': "Po Entree: poziom 2 albo praca", // nieuw, nalezen
    'c.nextstep.b': "Z dyplomem Entree możesz iść dalej na poziom 2 mbo. Dyplom na poziomie 2 albo wyższym to kwalifikacja podstawowa (startkwalificatie). Pomaga znaleźć pracę i ją utrzymać. W bbl pracujesz w firmie i chodzisz do szkoły mniej więcej jeden dzień w tygodniu. Do tego potrzebujesz pracy albo miejsca do nauki i pracy (leerwerkbaan). Idź na dzień otwarty i porozmawiaj z opiekunem w szkole.", // nieuw, nalezen
    'c.nextstep.p': "Czy po Entree mogę iść na poziom 2?", // nieuw, nalezen
    'c.nextstep.s': "Masz dyplom Entree. Firma proponuje ci pracę bez nauki. Ty też chcesz dalej się uczyć. Co robisz?", // nieuw, nalezen
    'c.nextstep.o1': "Pytasz firmę, czy możliwe jest miejsce w bbl.", // nieuw, nalezen
    'c.nextstep.o2': "Bierzesz pracę i na zawsze przestajesz się uczyć.", // nieuw, nalezen
    'c.nextstep.o3': "Zostajesz w domu, aż zadzwoni jakaś szkoła.", // nieuw, nalezen
    'c.nextstep.w': "W bbl jednocześnie pracujesz i się uczysz. Zarabiasz pieniądze i dostajesz dyplom poziomu 2. Wiele firm to lubi.", // nieuw, nalezen
    'c.email': "Krótki mail: kto, co, kiedy", // nieuw, nalezen
    'c.email.b': "Mail do pracy jest krótki i uprzejmy. Zacznij od powitania, na przykład „Beste Karin,”. Potem napisz, czego chcesz i kiedy. Zakończ pozdrowieniem i swoim imieniem i nazwiskiem. Napisz krótki temat, na przykład „Vrij op vrijdag”. Przeczytaj maila jeszcze raz, zanim go wyślesz.", // nieuw, nalezen
    'c.email.p': "Droga Karin, czy mogę mieć wolny piątek? Pozdrawiam, Ali Haddad", // nieuw, nalezen
    'c.email.s': "Chcesz mieć wolny przyszły piątek. Który mail do przełożonego jest najlepszy?", // nieuw, nalezen
    'c.email.o1': "„Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen
    'c.email.o2': "„Vrijdag ben ik er niet.” (bez powitania i bez imienia).", // nieuw, nalezen
    'c.email.o3': "Długi mail o twoim tygodniu, z pytaniem na końcu.", // nieuw, nalezen
    'c.email.w': "Dobry mail ma powitanie, jedno jasne pytanie i twoje imię. Wtedy przełożony może szybko odpowiedzieć.", // nieuw, nalezen
    'c.budget': "Najpierw stałe opłaty", // nieuw, nalezen
    'c.budget.b': { m: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Kupiłeś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji.", f: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. kupiłaś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji.", x: "Kiedy dostajesz wypłatę, najpierw zapłać stałe opłaty: czynsz, ubezpieczenie i telefon. Spróbuj co miesiąc odłożyć małą kwotę, nawet 10 euro. Kup teraz, zapłać później to też dług. Kupiłeś / kupiłaś coś przez internet? Wtedy zwykle możesz zmienić zdanie w ciągu 14 dni. Zachowaj paragon: potrzebujesz go do gwarancji." }, // nieuw, nalezen
    'c.budget.p': "Wolę zapłacić teraz. Wtedy nie mam długu.", // nieuw, nalezen
    'c.budget.s': "Dziś dostajesz wypłatę. Chcesz nowe buty, a czynsz nie jest jeszcze zapłacony. Co robisz?", // nieuw, nalezen
    'c.budget.o1': "Najpierw płacisz czynsz, potem patrzysz, co zostało.", // nieuw, nalezen
    'c.budget.o2': "Kupujesz buty, a czynsz płacisz później.", // nieuw, nalezen
    'c.budget.o3': "Kupujesz buty z opcją „kup teraz, zapłać później”.", // nieuw, nalezen
    'c.budget.w': "Czynsz, ubezpieczenie i telefon wracają co miesiąc. Kiedy płacisz je najpierw, wiesz, ile pieniędzy zostało. Wtedy nie masz długów.", // nieuw, nalezen
    'c.healthy': "Sen, jedzenie i żadnych narkotyków", // nieuw, nalezen
    'c.healthy.b': { m: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiony albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy.", f: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiona albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy.", x: "Pracujesz lepiej i bezpieczniej, kiedy się wysypiasz, także po późnej zmianie. Jedz śniadanie i pij wodę w ciągu dnia. Ruszaj się w przerwie, na przykład na krótkim spacerze. Praca pod wpływem alkoholu albo narkotyków jest niebezpieczna i większość pracodawców tego zabrania. Od dawna czujesz się przygnębiony / przygnębiona albo nie możesz przestać pić lub brać? Porozmawiaj z lekarzem rodzinnym (huisarts). Lekarz może pomóc i zachowa to w tajemnicy." }, // nieuw, nalezen
    'c.healthy.p': { m: "Od dawna czuję się przygnębiony. Czy mogę się umówić na wizytę?", f: "Od dawna czuję się przygnębiona. Czy mogę się umówić na wizytę?", x: "Od dawna czuję się przygnębiony / przygnębiona. Czy mogę się umówić na wizytę?" }, // nieuw, nalezen
    'c.healthy.s': { m: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnął. Co robisz?", f: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnęła. Co robisz?", x: "Dziś w nocy masz nocną zmianę. Kolega daje ci tabletkę, żebyś nie zasnął / zasnęła. Co robisz?" }, // nieuw, nalezen
    'c.healthy.o1': "Odmawiasz i śpisz kilka godzin przed zmianą.", // nieuw, nalezen
    'c.healthy.o2': "Bierzesz pół tabletki, to nie jest niebezpieczne.", // nieuw, nalezen
    'c.healthy.o3': "Bierzesz ją, ale nikomu w pracy nie mówisz.", // nieuw, nalezen
    'c.healthy.w': "Tabletki od kolegi mogą być narkotykami. Mogą wywołać chorobę albo błędy w pracy. Sen to bezpieczny sposób, żeby nie zasnąć.", // nieuw, nalezen
  },
};

export default t;
