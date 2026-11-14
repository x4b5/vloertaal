import type { CultureTranslation } from './types';

const t: CultureTranslation = {
  ui: {
    cultureBadge: 'Jak to tu działa',
    whatDoYouDo: 'Co robisz?',
    whatDoYouSay: 'Co mówisz?',
    whatIsRight: 'Co się zgadza?',
    sayThis: 'Powiedz tak',
    goodChoice: 'Dobry wybór!',
    otherChoice: 'Tutaj zwykle robi się to inaczej',
    cultureTips: 'Wskazówki do pracy',
    cultureTipsHint: 'Jak zwykle wygląda praca w holenderskiej firmie. Dotknij wskazówki, aby przeczytać ją jeszcze raz.',
  },
  gloss: {
    'c.je': '„Je” czy „u”?',
    'c.je.b': 'W pracy większość ludzi mówi do siebie „je”, często także do szefa. Jeśli nie masz pewności, zacznij od „u” i posłuchaj, jak mówią inni. Mówienie „je” nie jest tu niegrzeczne.',
    'c.je.p': 'Czy mogę mówić do ciebie „je”?',
    'c.je.s': 'Twoja nowa kierowniczka mówi: „Zeg maar je, hoor!” Co ma na myśli?',
    'c.je.o1': { m: 'Chce, żebyś mówił do niej „je”.', f: 'Chce, żebyś mówiła do niej „je”.', x: 'Chce, żeby mówiono do niej „je”.' }, // x: nieuw, nalezen // nagelezen AI 31 okt
    'c.je.o2': { m: 'Prosi, żebyś coś powiedział.', f: 'Prosi, żebyś coś powiedziała.', x: 'Prosi cię o kilka słów.' }, // nagelezen (2e lezing) // x: nieuw, nalezen
    'c.je.o3': { m: 'Chce, żebyś mówił grzeczniej.', f: 'Chce, żebyś mówiła grzeczniej.', x: 'Chce, żeby mówiono do niej grzeczniej.' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 31 okt
    'c.je.w': '„Zeg maar je” to coś miłego: chce mniejszego dystansu. W wielu holenderskich firmach mówienie „je” do przełożonego jest normalne.',
    'c.names': 'Imiona i uścisk dłoni',
    'c.names.b': 'Pierwszego dnia krótko uściśnij dłoń, spójrz na tę osobę i powiedz swoje imię. Koledzy i kierownicy zwykle mówią do siebie po imieniu.',
    'c.names.p': 'Cześć, jestem Ali. Jestem tu nowy.',
    'c.names.s': 'Podchodzi do ciebie kolega: „Hoi, ik ben Mark.” Co robisz?',
    'c.names.o1': 'Podajesz rękę i mówisz swoje imię.',
    'c.names.o2': 'Kiwasz głową, uśmiechasz się i czekasz na pytania.', // nagelezen (2e lezing)
    'c.names.o3': 'Podajesz rękę i mówisz do niego „meneer” (proszę pana).', // nagelezen (2e lezing)
    'c.names.w': 'Krótkie przedstawienie się imieniem to normalny początek. Dzięki temu koledzy łatwiej cię zapamiętają i będą cię zapraszać.',
    'c.arrive': 'Pierwszy dzień: dokąd iść',
    'c.arrive.b': 'Pierwszego dnia najpierw idź do recepcji albo do głównego wejścia. Powiedz, jak się nazywasz, z jakiej jesteś agencji (jeśli pracujesz przez agencję) i do kogo masz przyjść. Wiele firm daje ci opiekuna (buddy): możesz go pytać o wszystko.',
    'c.arrive.p': 'Dzień dobry, jestem Ali. Zaczynam dzisiaj. Do kogo mam przyjść?',
    'c.arrive.s': 'Jest 6:45, twój pierwszy dzień. Brama jest zamknięta. Jest domofon. Co robisz?',
    'c.arrive.o1': 'Dzwonisz, mówisz, jak się nazywasz, i że zaczynasz dzisiaj.',
    'c.arrive.o2': 'Czekasz przy bramie, aż ktoś wyjdzie.',
    'c.arrive.o3': 'Obchodzisz budynek, żeby znaleźć inne drzwi.',
    'c.arrive.w': 'Domofon jest dla gości i nowych pracowników. Gdy powiesz, kim jesteś, mogą zawołać właściwą osobę.',
    'c.ask': 'Zadawanie pytań jest dobre',
    'c.ask.b': 'Pytanie pokazuje, że chcesz dobrze wykonać pracę. Kiwanie głową, gdy nie rozumiesz, może prowadzić do błędów albo wypadków. Zapytać jeszcze raz to coś całkiem normalnego.',
    'c.ask.p': 'Przepraszam, nie rozumiem. Wyjaśnisz to jeszcze raz?',
    'c.ask.s': { m: 'Twój przełożony bardzo szybko tłumaczy zadanie. Nie zrozumiałeś. Co robisz?', f: 'Twój przełożony bardzo szybko tłumaczy zadanie. Nie zrozumiałaś. Co robisz?', x: 'Twój przełożony bardzo szybko tłumaczy zadanie. Nie rozumiesz. Co robisz?' }, // x: nieuw, nalezen
    'c.ask.o1': 'Prosisz o ponowne wyjaśnienie.', // nagelezen (2e lezing)
    'c.ask.o2': 'Kiwasz głową i próbujesz zgadnąć.',
    'c.ask.o3': 'Przepraszasz za swój niderlandzki i zaczynasz pracę.', // nagelezen (2e lezing)
    'c.ask.w': 'Tutaj przełożeni oczekują pytań. Lepiej zapytać dwa razy, niż popełnić błąd.', // nieuw, nalezen
    'c.gear': 'Zasady BHP są dla wszystkich',
    'c.gear.b': 'Zasady dotyczące kasków, butów i rękawic to nie sugestia: przestrzegają ich wszyscy, także szef. Pracodawca musi dać ci potrzebny sprzęt ochronny za darmo. Niedopasowany sprzęt słabo chroni. Więc poproś o swój rozmiar: „Heb je dit ook in mijn maat?”',
    'c.gear.p': 'Moje rękawice są zniszczone. Gdzie dostanę nowe?',
    'c.gear.s': 'Twoje rękawice są podarte. Co robisz?',
    'c.gear.o1': 'Prosisz przełożonego o nowe rękawice.',
    'c.gear.o2': 'Pracujesz dalej bez rękawic.',
    'c.gear.o3': 'Po cichu kupujesz nowe rękawice za własne pieniądze.',
    'c.gear.w': 'Sprzęt ochronny to zadanie pracodawcy. Proszenie o niego jest normalne i pokazuje, że poważnie traktujesz bezpieczeństwo.',
    'c.unsafe': 'Powiedz, gdy jest niebezpiecznie',
    'c.unsafe.b': 'Jeśli coś jest niebezpieczne, powiedz to od razu, także szefowi. Możesz przerwać pracę, która jest naprawdę niebezpieczna. Zgłaszaj wypadki i sytuacje, w których prawie doszło do wypadku, nawet drobne.',
    'c.unsafe.p': 'Stop! To nie jest bezpieczne.',
    'c.unsafe.s': 'Paleta jest ułożona za wysoko i prawie się przewraca. Nikomu nic się nie stało. Co robisz?',
    'c.unsafe.o1': 'Ostrzegasz kolegów i mówisz przełożonemu.',
    'c.unsafe.o2': 'Nic nie mówisz, bo nic się nie stało.',
    'c.unsafe.o3': { m: 'Sam poprawiasz paletę i nikomu nie mówisz.', f: 'Sama poprawiasz paletę i nikomu nie mówisz.', x: 'Samodzielnie poprawiasz paletę i nikomu nie mówisz.' }, // nieuw, nalezen
    'c.unsafe.w': 'Sytuacja, w której prawie doszło do wypadku, to ostrzeżenie. Zgłoszenie jej pomaga zapobiec prawdziwemu wypadkowi. Pracodawca nie może cię za to ukarać.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.alarm': 'Alarm: przerwij pracę i wyjdź', // nieuw, nalezen
    'c.alarm.b': 'Pierwszego dnia zapytaj, gdzie są wyjścia ewakuacyjne i miejsce zbiórki. Kiedy włączy się alarm, od razu przerwij pracę. Zostaw swoje rzeczy i wyjdź na zewnątrz drogą ewakuacyjną. Idź schodami, nigdy windą. Na miejscu zbiórki liczą, kto jest na zewnątrz, więc zostań tam. Wychodź też wtedy, gdy myślisz, że to tylko ćwiczenia.', // nieuw, nalezen
    'c.alarm.p': { m: 'Jestem nowy. Gdzie jest miejsce zbiórki?', f: 'Jestem nowa. Gdzie jest miejsce zbiórki?', x: 'Jestem tu nową osobą. Gdzie jest miejsce zbiórki?' }, // nieuw, nalezen
    'c.alarm.s': 'Włącza się alarm pożarowy. Prawie kończysz zamówienie. Co robisz?', // nieuw, nalezen
    'c.alarm.o1': 'Od razu przerywasz i idziesz na miejsce zbiórki.', // nieuw, nalezen
    'c.alarm.o2': 'Najpierw kończysz zamówienie, potem wychodzisz.', // nieuw, nalezen
    'c.alarm.o3': 'Najpierw bierzesz kurtkę i telefon z szafki.', // nieuw, nalezen
    'c.alarm.w': 'Dym szybko się rozprzestrzenia, więc wychodzisz od razu. Twoje rzeczy mogą poczekać. Na miejscu zbiórki liczą wszystkich: wtedy nikt nie musi cię szukać w środku.', // nieuw, nalezen
    'c.accident': 'Zgłaszaj każdy wypadek',
    'c.accident.b': 'O każdym wypadku, nawet drobnym, powiedz przełożonemu albo BHV’er (osobie, która w firmie udziela pierwszej pomocy). Pracujesz przez agencję? Powiadom też agencję. W nagłym przypadku najpierw dzwoń pod 112. Poważny wypadek musi zgłosić do Nederlandse Arbeidsinspectie firma, w której do niego doszło (także jeśli pracujesz przez agencję): gdy ktoś ginie, odnosi trwałe obrażenia albo musi zostać w szpitalu. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.accident.p': 'Mój kolega jest ranny. Gdzie jest osoba od pierwszej pomocy?',
    'c.accident.s': 'Przy podnoszeniu nadwyrężasz sobie plecy. Boisz się, że stracisz pracę. Co robisz?',
    'c.accident.o1': 'Zgłaszasz to przełożonemu tego samego dnia.', // nagelezen (2e lezing)
    'c.accident.o2': 'Nic nie mówisz, żeby nie stracić pracy.',
    'c.accident.o3': 'Czekasz, czy ból sam przejdzie.',
    'c.accident.w': 'Zgłoś to tego samego dnia, nawet jeśli wydaje się drobne: ból może się później nasilić. Pracodawcy nie wolno cię ukarać za to zgłoszenie. Pracujesz przez agencję? Powiedz też agencji.', // nagelezen (2e lezing)
    'c.notyet': 'Nikt cię jeszcze tego nie nauczył? Powiedz to',
    'c.notyet.b': 'Firma, w której pracujesz, musi ci wyjaśnić, jak bezpiecznie wykonywać pracę. Nie używaj maszyny ani wózka widłowego, jeśli nikt cię tego nie nauczył. Powiedzenie „Dit heb ik nog niet geleerd” jest tu normalne: pokazuje, że pracujesz bezpiecznie.',
    'c.notyet.p': { m: 'Jeszcze się tego nie nauczyłem. Możesz mi pokazać, jak to się robi?', f: 'Jeszcze się tego nie nauczyłam. Możesz mi pokazać, jak to się robi?', x: 'Jeszcze się tego nie nauczyłem / nauczyłam. Możesz mi pokazać, jak to się robi?' },
    'c.notyet.s': { m: 'Pracowity poranek. Przełożony mówi: „Pak jij even de heftruck? Het is makkelijk.” Nigdy nie jeździłeś wózkiem widłowym. Co robisz?', f: 'Pracowity poranek. Przełożony mówi: „Pak jij even de heftruck? Het is makkelijk.” Nigdy nie jeździłaś wózkiem widłowym. Co robisz?', x: 'Pracowity poranek. Przełożony mówi: „Pak jij even de heftruck? Het is makkelijk.” Nie masz doświadczenia z wózkiem widłowym. Co robisz?' }, // x: nieuw, nalezen
    'c.notyet.o1': 'Mówisz, że tego nie umiesz. Prosisz o instruktaż.',
    'c.notyet.o2': 'Jedziesz powoli i ostrożnie, tylko ten jeden raz.',
    'c.notyet.o3': 'Mówisz „ja” i masz nadzieję, że się uda.',
    'c.notyet.w': 'Wózek widłowy bez instruktażu jest niebezpieczny, dla ciebie i dla innych. Prośba o instruktaż albo inną pracę jest normalna, także gdy jest dużo pracy.',
    'c.direct': 'Bezpośredniość to nie niegrzeczność',
    'c.direct.b': { m: 'Holenderscy koledzy często mówią bardzo bezpośrednio, np. „Dat is fout” albo „Doe het zo”. Zwykle nie chcą być niegrzeczni. Ty też możesz mówić bezpośrednio, dopóki jesteś uprzejmy.', f: 'Holenderscy koledzy często mówią bardzo bezpośrednio, np. „Dat is fout” albo „Doe het zo”. Zwykle nie chcą być niegrzeczni. Ty też możesz mówić bezpośrednio, dopóki jesteś uprzejma.', x: 'Holenderscy koledzy często mówią bardzo bezpośrednio, np. „Dat is fout” albo „Doe het zo”. Zwykle nie chcą być niegrzeczni. Ty też możesz mówić bezpośrednio, dopóki mówisz uprzejmie.' }, // x: nieuw, nalezen
    'c.direct.p': 'Dobrze, to jak trzeba to zrobić?',
    'c.direct.s': 'Kolega mówi: „Nee, dat is fout. Die doos moet daar.” Co robisz?',
    'c.direct.o1': 'Pytasz, jak trzeba to zrobić, i przestawiasz karton.',
    'c.direct.o2': 'Wiele razy przepraszasz: kolega jest zły.', // nagelezen (2e lezing)
    'c.direct.o3': 'Nic nie mówisz i zostawiasz karton tam, gdzie jest.',
    'c.direct.w': 'Bezpośrednia uwaga dotyczy pracy, nie ciebie. Pytanie „hoe moet het dan?” pokazuje, że chcesz się nauczyć.',
    'c.limits': 'Powiedz, gdy coś jest za ciężkie',
    'c.limits.b': { m: 'Nikt nie oczekuje, że wszystko podniesiesz sam. Powiedzieć „dit is te zwaar” i poprosić o pomoc albo narzędzie to mądre, a nie oznaka słabości. To chroni twoje plecy.', f: 'Nikt nie oczekuje, że wszystko podniesiesz sama. Powiedzieć „dit is te zwaar” i poprosić o pomoc albo narzędzie to mądre, a nie oznaka słabości. To chroni twoje plecy.', x: 'Nikt nie oczekuje, że wszystko podniesiesz bez pomocy. Powiedzieć „dit is te zwaar” i poprosić o pomoc albo narzędzie to mądre, a nie oznaka słabości. To chroni twoje plecy.' }, // x: nieuw, nalezen
    'c.limits.p': 'Ten karton jest za ciężki. Pomożesz mi na chwilę?',
    'c.limits.s': 'Musisz podnieść karton, który jest dla ciebie o wiele za ciężki. Co robisz?',
    'c.limits.o1': 'Prosisz kolegę o pomoc albo bierzesz wózek.',
    'c.limits.o2': { m: 'I tak go podnosisz, żeby nikt nie pomyślał, że jesteś słaby.', f: 'I tak go podnosisz, żeby nikt nie pomyślał, że jesteś słaba.', x: 'I tak go podnosisz, żeby nikt nie pomyślał, że brakuje ci siły.' }, // x: nieuw, nalezen
    'c.limits.o3': 'Zostawiasz go i nic nie mówisz.',
    'c.limits.w': 'Proszenie o pomoc to normalna praca zespołowa. Kontuzja pleców kosztuje dużo więcej niż minuta pomocy.',
    'c.time': 'Na czas znaczy trochę wcześniej',
    'c.time.b': 'Punktualność jest bardzo ważna. Wiele osób przychodzi pięć albo dziesięć minut przed początkiem zmiany. Jeśli się spóźnisz, napisz albo zadzwoń przed początkiem zmiany, a nie potem.',
    'c.time.p': 'Przepraszam, autobus się spóźnia. Będę o ósmej.',
    'c.time.s': 'Twój autobus się spóźnia i spóźnisz się 15 minut. Co robisz?',
    'c.time.o1': 'Od razu mówisz przełożonemu.', // nagelezen (2e lezing)
    'c.time.o2': 'Wyjaśniasz to, gdy przyjdziesz.',
    'c.time.o3': 'Dziś w ogóle nie idziesz do pracy.',
    'c.time.w': 'Wczesna wiadomość pozwala zespołowi wszystko zaplanować. Spóźnienie bez uprzedzenia jest odbierane dużo gorzej niż samo spóźnienie.',
    'c.sick': 'Jak zgłosić chorobę',
    'c.sick.b': { m: 'Zadzwoń sam do przełożonego przed początkiem zmiany, chyba że w twojej firmie jest inna zasada. Pracujesz przez agencję? Powiadom też agencję. Nie musisz mówić, na co chorujesz. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', f: 'Zadzwoń sama do przełożonego przed początkiem zmiany, chyba że w twojej firmie jest inna zasada. Pracujesz przez agencję? Powiadom też agencję. Nie musisz mówić, na co chorujesz. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.', x: 'Zadzwoń osobiście do przełożonego przed początkiem zmiany, chyba że w twojej firmie jest inna zasada. Pracujesz przez agencję? Powiadom też agencję. Nie musisz mówić, na co chorujesz. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.' }, // x: nieuw, nalezen
    'c.sick.p': { m: 'Jestem chory. Nie mogę dziś przyjść do pracy.', f: 'Jestem chora. Nie mogę dziś przyjść do pracy.', x: 'Jestem chory / chora. Nie mogę dziś przyjść do pracy.' }, // x: nieuw, nalezen
    'c.sick.s': 'Budzisz się z gorączką. Twoja zmiana zaczyna się o 7:00. Co robisz?',
    'c.sick.o1': 'Dzwonisz do przełożonego przed 7:00.', // nagelezen (2e lezing)
    'c.sick.o2': 'Prosisz kolegę, żeby później powiedział szefowi.',
    'c.sick.o3': 'Zostajesz w domu i dzwonisz jutro.',
    'c.sick.w': { m: 'W większości holenderskich firm zasada jest taka: chorobę zgłaszasz sam i na czas. Pracodawca może zapytać, jak długo to potrwa, ale nie, na co chorujesz.', f: 'W większości holenderskich firm zasada jest taka: chorobę zgłaszasz sama i na czas. Pracodawca może zapytać, jak długo to potrwa, ale nie, na co chorujesz.', x: 'W większości holenderskich firm zasada jest taka: chorobę zgłaszasz osobiście i na czas. Pracodawca może zapytać, jak długo to potrwa, ale nie, na co chorujesz.' }, // x: nieuw, nalezen
    'c.speakup': 'Powiedz, co ci przeszkadza',
    'c.speakup.b': 'Tutaj spokojne powiedzenie, że coś ci przeszkadza, jest normalne i szanowane. Najpierw porozmawiaj z tą osobą, w spokojnej chwili. Mów zdaniami z „ik”: „Ik vind het niet fijn dat ...”. Jeśli to nie pomoże, porozmawiaj z przełożonym.',
    'c.speakup.p': 'Coś mi przeszkadza. Możemy chwilę porozmawiać?',
    'c.speakup.s': 'Kolega zawsze zostawia ciężką pracę tobie. Przeszkadza ci to. Co robisz?',
    'c.speakup.o1': 'Mówisz koledze, co ci przeszkadza.', // nagelezen (2e lezing)
    'c.speakup.o2': { m: 'Milczysz i jesteś coraz bardziej zły.', f: 'Milczysz i jesteś coraz bardziej zła.', x: 'Milczysz i złościsz się coraz bardziej.' }, // x: nieuw, nalezen
    'c.speakup.o3': 'Skarżysz się na niego wszystkim innym kolegom.',
    'c.speakup.w': 'Holenderscy koledzy zwykle wolą usłyszeć to wprost. Powiedzenie tego wcześnie i spokojnie pomaga utrzymać dobre relacje.',
    'c.no': '„Afspraak is afspraak”',
    'c.no.b': 'Gdy mówisz „ja”, ludzie na to liczą: umowa to umowa. Dlatego można powiedzieć „nee” albo „dat lukt niet”, gdy czegoś nie możesz zrobić. Powiedz to na czas i, jeśli możesz, zaproponuj coś innego.',
    'c.no.p': 'Nie, dziś się nie da. Jutro mogę.',
    'c.no.s': 'Przełożony pyta, czy możesz dodatkowo popracować w sobotę. Nie możesz. Co robisz?',
    'c.no.o1': 'Odmawiasz i proponujesz inny dzień.', // nagelezen (2e lezing)
    'c.no.o2': 'Mówisz „tak”, a potem nie przychodzisz.',
    'c.no.o3': 'Mówisz „tak”: szefowi nie można odmówić.', // nagelezen (2e lezing)
    'c.no.w': 'Jasne „nee” jest szanowane. Powiedzieć „ja” i nie przyjść niszczy zaufanie o wiele bardziej.',
    'c.task': 'Powiedz, gdy skończysz, i pytaj, gdy coś jest niejasne',
    'c.task.b': 'W Holandii przełożony często daje zadanie w kilku słowach. Gdy skończysz, mówisz o tym. Gdy mówisz „ja”, choć nie wszystko rozumiesz, często dochodzi do błędów. Zapytać jeszcze raz albo poprosić, żeby ktoś to pokazał, to tutaj normalne, a nie niegrzeczne.',
    'c.task.p': 'Gotowe! Co mam teraz robić?',
    'c.task.s': { m: 'Przełożony bardzo szybko tłumaczy zadanie. Zrozumiałeś tylko połowę. Co robisz?', f: 'Przełożony bardzo szybko tłumaczy zadanie. Zrozumiałaś tylko połowę. Co robisz?', x: 'Przełożony bardzo szybko tłumaczy zadanie. Rozumiesz tylko połowę. Co robisz?' }, // x: nieuw, nalezen
    'c.task.o1': 'Prosisz, żeby ci to jeszcze raz pokazano.', // nagelezen (2e lezing)
    'c.task.o2': 'Zaczynasz od tej połowy, którą rozumiesz.', // nagelezen (2e lezing)
    'c.task.o3': 'Czekasz, aż zrobi to kolega.',
    'c.task.w': 'Zapytać jeszcze raz to normalne i zajmuje minutę. Poprawienie błędu trwa o wiele dłużej. Większość przełożonych woli pokazać coś dwa razy.',
    'c.clear': 'Najpierw powiedz to, co najważniejsze', // nieuw, nalezen
    'c.clear.b': 'W wielu językach uprzejmie jest najpierw opowiedzieć całą historię, a sedno powiedzieć na końcu. W pracy tutaj jest odwrotnie. Najpierw powiedz, co jest nie tak albo czego potrzebujesz. Potem podaj powód. Mów spokojnie i przerwij po dwóch, trzech zdaniach, żeby druga osoba mogła o coś zapytać. Także na rozmowie o pracę: najpierw odpowiedź, potem przykład. Wolne mówienie nie jest tu niegrzeczne: pomaga ludziom cię zrozumieć.',
    'c.clear.p': 'Przepraszam, powiem to jeszcze raz, spokojnie.', // nieuw, nalezen
    'c.clear.s': 'Spóźniasz się 20 minut. Przełożony pyta: „Wat is er?” Co robisz?', // nieuw, nalezen
    'c.clear.o1': 'Najpierw przepraszasz za spóźnienie. Potem mówisz, dlaczego.', // nieuw, nalezen
    'c.clear.o2': 'Opowiadasz od początku wszystko, co stało się dziś rano.', // nieuw, nalezen
    'c.clear.o3': 'Nic nie mówisz i szybko zaczynasz pracę.', // nieuw, nalezen
    'c.clear.w': 'Przełożony najpierw chce wiedzieć, co się dzieje. Powód dopiero potem. Krótko i spokojnie znaczy jasno, a tutaj też uprzejmie.', // nieuw, nalezen
    'u.teamwork': 'Współpraca', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.speakup': 'Coś mi przeszkadza',
    'w.probleem': 'problem',
    'w.praten': 'rozmawiać',
    'w.nietfijn': 'niemiły, nieprzyjemny',
    'w.eerlijk': 'uczciwy, szczery',
    'w.boos': 'zły (zdenerwowany)',
    'w.samen': 'razem',
    's.speakup.1': 'Coś mi przeszkadza.',
    's.speakup.2': 'Możemy chwilę porozmawiać?',
    's.speakup.3': 'Uważam, że to nie jest uczciwe.',
    'd.speakup.q': 'Coś się stało?',
    'd.speakup.a': 'Tak, coś mi przeszkadza.',
    'l.agree': 'Ustalenia i odmawianie', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.afspraak': 'ustalenie, umowa (to, na co się umówiliście)',
    'w.lukken': 'udawać się, dać radę',
    'w.oneens': 'nie zgadzać się',
    'w.zaterdag': 'sobota',
    'w.overwerken': 'pracować w nadgodzinach',
    'w.misschien': 'może',
    's.agree.1': 'Nie, dziś się nie da.',
    's.agree.2': 'Nie zgadzam się z tobą.',
    's.agree.3': 'Umowa to umowa.',
    'd.agree.q': 'Możesz popracować w nadgodzinach w sobotę?',
    'd.agree.a': 'Nie, nie da się. W niedzielę mogę.',
    'l.task': 'Polecenia od przełożonego',
    'w.taak': 'zadanie',
    'w.eerst': 'najpierw',
    'w.daarna': 'potem, następnie',
    'w.afmaken': 'skończyć, dokończyć',
    'w.snel': 'szybko, szybki',
    'w.bijna': 'prawie',
    's.task.1': 'Co mam zrobić najpierw?',
    's.task.2': { m: 'Skończyłem to zadanie.', f: 'Skończyłam to zadanie.', x: 'To zadanie jest już skończone.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.task.3': 'Czy może mi pan/pani pokazać to jeszcze raz?',
    'd.task.q': { m: 'Skończyłeś?', f: 'Skończyłaś?', x: 'Gotowe?' }, // x: nieuw, nalezen
    'd.task.a': 'Prawie. Jeszcze pięć minut.',
    'l.clear': 'Krótko i jasno', // nieuw, nalezen
    'w.kort': 'krótki, krótko', // nieuw, nalezen
    'w.duidelijk': 'jasny, jasno', // nieuw, nalezen
    'w.belangrijkste': 'to, co najważniejsze', // nieuw, nalezen
    'w.rustig': 'spokojny, spokojnie', // nieuw, nalezen
    'w.teveel': 'za dużo', // nieuw, nalezen
    'w.vraag': 'pytanie', // nieuw, nalezen
    's.clear.1': 'Powiem krótko: maszyna jest zepsuta.', // nieuw, nalezen
    's.clear.2': { m: 'Najpierw najważniejsze: jestem chory.', f: 'Najpierw najważniejsze: jestem chora.', x: 'Najpierw najważniejsze: jestem chory / chora.' }, // nieuw, nalezen
    's.clear.3': 'Przepraszam, mówię za szybko i za dużo.', // nieuw, nalezen
    'd.clear.q': 'Czy to jasne?', // nieuw, nalezen
    'd.clear.a': 'Tak. Mam jeszcze jedno pytanie.', // nieuw, nalezen
    // Vertaalronde 5 november 2026: l.newcolleague en c.newcolleague.
    'l.newcolleague': "Pomoc nowemu koledze", // nieuw, nalezen
    'w.welkom': "witaj, witamy", // nieuw, nalezen
    'w.inwerken': "wdrażać nowego kolegę (pokazywać pracę w pierwszych dniach)", // nieuw, nalezen
    'w.stap': "krok (jedna mała część zadania)", // nieuw, nalezen
    'w.nadoen': "powtarzać za kimś (robić to, co ktoś ci pokazał)", // nieuw, nalezen
    'w.geduld': "cierpliwość", // nieuw, nalezen
    'w.kast': "szafa", // nieuw, nalezen
    's.newcolleague.1': "Witaj! Dziś pokażę ci pracę.", // nieuw, nalezen
    's.newcolleague.2': "Najpierw patrz. Potem zrób to samo.", // nieuw, nalezen
    's.newcolleague.3': "Rękawice leżą w tej szafie.", // nieuw, nalezen
    'd.newcolleague.q': "Chyba rozumiem.", // nieuw, nalezen
    'd.newcolleague.a': "Dobrze. Pokaż mi.", // nieuw, nalezen
    'c.newcolleague': "Pokaż to, krok po kroku", // nieuw, nalezen
    'c.newcolleague.b': "To, co było dla ciebie trudne w pierwszych tygodniach, jest trudne także dla nowego kolegi. Wyjaśniaj pracę małymi krokami: najpierw to, potem tamto. Nie mów szybciej ani głośniej: pokaż to i pozwól mu zrobić to po tobie. Nie pytaj „Snap je het?”: wiele osób mówi „tak”, także kiedy nie rozumie. Zamiast tego powiedz „Laat eens zien” i patrz. Powiedz, gdzie co jest, na przykład toaleta, stołówka i rękawice. Miej cierpliwość (geduld): nauka wymaga czasu, u każdego.", // nieuw, nalezen
    'c.newcolleague.p': "Brawo! Teraz następny krok.", // nieuw, nalezen
    'c.newcolleague.s': "Wyjaśniasz nowemu koledze zadanie. On mówi: „Ja, ja, ik snap het.” Co robisz?", // nieuw, nalezen
    'c.newcolleague.o1': "Mówisz „Laat eens zien” i patrzysz, jak on to robi.", // nieuw, nalezen
    'c.newcolleague.o2': "Mówisz „Goed zo” i wracasz do swojej pracy.", // nieuw, nalezen
    'c.newcolleague.o3': "Wyjaśniasz wszystko jeszcze raz, szybciej i głośniej.", // nieuw, nalezen
    'c.newcolleague.w': "Wiele osób mówi „ja”, także kiedy nie zrozumiało. Kiedy on to pokaże, oboje widzicie, czy to działa. To szybsze niż poprawianie błędu później.", // nieuw, nalezen
    // Vertaalronde 5 november 2026: Goed communiceren (u.communicate).
    'u.communicate': "Dobra komunikacja", // nieuw, nalezen
    'l.explain': "Mówienie, co jest nie tak", // nieuw, nalezen
    'w.ietsmis': "coś jest nie tak", // nieuw, nalezen
    'w.stilstaan': "stać, zatrzymać się (maszyna, taśma)", // nieuw, nalezen
    'w.lampje': "lampka (ostrzegawcza)", // nieuw, nalezen
    'w.komen': "przyjść, przychodzić", // nieuw, nalezen
    'w.nodighebben': "potrzebować", // nieuw, nalezen
    'w.meteen': "od razu, natychmiast", // nieuw, nalezen
    's.explain.1': "Taśma stanęła. Przy linii dwa. Możesz przyjść?", // nieuw, nalezen
    's.explain.2': "Na maszynie świeci się czerwona lampka.", // nieuw, nalezen
    's.explain.3': "To niebezpieczne. Możesz przyjść od razu?", // nieuw, nalezen
    'd.explain.q': "Co jest nie tak?", // nieuw, nalezen
    'd.explain.a': "Skaner nie działa. Potrzebuję nowego.", // nieuw, nalezen
    'l.listen': "Dobre słuchanie", // nieuw, nalezen
    'w.uitpraten': "skończyć mówić (dać komuś dokończyć)", // nieuw, nalezen
    'w.onderbreken': "przerywać (komuś)", // nieuw, nalezen
    'w.aankijken': "patrzeć (na kogoś)", // nieuw, nalezen
    'w.bedoelen': "mieć na myśli", // nieuw, nalezen
    'w.dus': "czyli, więc (żeby sprawdzić, czy dobrze słyszysz)", // nieuw, nalezen
    'w.doorvragen': "dopytywać (aż będzie jasne)", // nieuw, nalezen
    's.listen.1': "Czyli najpierw policzyć kartony, a potem pakować?", // nieuw, nalezen
    's.listen.2': "Co rozumiesz przez to słowo?", // nieuw, nalezen
    's.listen.3': "Przepraszam, dokończ, proszę.", // nieuw, nalezen
    'd.listen.q': "Jutro zaczynasz już o czwartej.", // nieuw, nalezen
    'd.listen.a': "Naprawdę? Czy to był żart?", // nieuw, nalezen
    'l.calm': "Zachowanie spokoju", // nieuw, nalezen
    'w.nadenken': "zastanowić się, pomyśleć (o czymś)", // nieuw, nalezen
    'w.ademhalen': "oddychać", // nieuw, nalezen
    'w.oplossen': "rozwiązać, załatwić", // nieuw, nalezen
    'w.druk': "dużo pracy, duży ruch", // nieuw, nalezen
    'w.straks': "później (dzisiaj), za chwilę", // nieuw, nalezen
    'w.misverstand': "nieporozumienie", // nieuw, nalezen
    's.calm.1': "Chcę to spokojnie rozwiązać.", // nieuw, nalezen
    's.calm.2': "Mogę się chwilę zastanowić?", // nieuw, nalezen
    's.calm.3': "Możemy porozmawiać później?", // nieuw, nalezen
    'd.calm.q': "Dlaczego to jeszcze nie jest gotowe?", // nieuw, nalezen
    'd.calm.a': "Przepraszam, jest bardzo dużo pracy. Co trzeba zrobić najpierw?", // nieuw, nalezen
    'l.talkintime': "Porozmawiaj o tym na czas", // nieuw, nalezen
    'w.gesprek': "rozmowa", // nieuw, nalezen
    'w.bespreken': "omówić, porozmawiać o czymś", // nieuw, nalezen
    'w.zorgenmaken': "martwić się", // nieuw, nalezen
    'w.oplossing': "rozwiązanie", // nieuw, nalezen
    'w.ineens': "nagle, od razu", // nieuw, nalezen
    'w.wegblijven': "nie przychodzić (do pracy)", // nieuw, nalezen
    's.talkintime.1': "Coś mi przeszkadza. Masz chwilę?", // nieuw, nalezen
    's.talkintime.2': "Chcę coś z tobą omówić.", // nieuw, nalezen
    's.talkintime.3': "Myślę o odejściu z pracy. Możemy najpierw porozmawiać?", // nieuw, nalezen
    'd.talkintime.q': "Masz chwilę? Coś mi przeszkadza.", // nieuw, nalezen
    'd.talkintime.a': "Jasne. Co się stało?", // nieuw, nalezen
    'l.reachable': "Bycie pod telefonem", // nieuw, nalezen
    'w.opnemen': "odebrać (telefon)", // nieuw, nalezen
    'w.gemisteoproep': "nieodebrane połączenie", // nieuw, nalezen
    'w.voicemail': "poczta głosowa", // nieuw, nalezen
    'w.beltegoed': "środki na telefonie (na kartę)", // nieuw, nalezen
    'w.bereik': "zasięg (w telefonie)", // nieuw, nalezen
    'w.onbekend': "nieznany (nieznany numer)", // nieuw, nalezen
    's.reachable.1': "Mój niderlandzki nie jest jeszcze dobry. Czy może pan/pani mówić powoli?", // nieuw, nalezen
    's.reachable.2': "Czy może pan/pani wysłać to też w wiadomości?", // nieuw, nalezen
    's.reachable.3': "Mam nowy numer.", // nieuw, nalezen
    'd.reachable.q': "Dzień dobry, tu dział planowania.", // nieuw, nalezen
    'd.reachable.a': "Dzień dobry. Dzwonili państwo do mnie? Przepraszam, nie udało mi się odebrać.", // nieuw, nalezen
    'c.explain': "Co, gdzie, czego potrzebujesz", // nieuw, nalezen
    'c.explain.b': "Kiedy w pracy coś jest nie tak, powiedz to w trzech krokach. Najpierw co jest nie tak: „De band staat stil.” Potem gdzie: „Bij lijn twee.” Potem czego potrzebujesz: „Kun je komen?” Teraz druga osoba wie, co zrobić, bez wielu pytań. Nie znasz słowa? Pokaż to palcem. Jest niebezpiecznie? Powiedz to najpierw: „Het is gevaarlijk.” Wypadek? Najpierw wezwij pomoc (więcej w lekcji „Zgłaszanie wypadku”).", // nieuw, nalezen
    'c.explain.p': "Możesz przyjść i zobaczyć?", // nieuw, nalezen
    'c.explain.s': "Twój skaner przestaje działać. Dzwonisz do kierownika zmiany. Co mówisz?", // nieuw, nalezen
    'c.explain.o1': "„De scanner is kapot. Bij gang vier. Kun je komen?”", // nieuw, nalezen
    'c.explain.o2': "„Hallo, ik heb een probleem.” Potem czekasz.", // nieuw, nalezen
    'c.explain.o3': "„Sorry, sorry! Het is niet mijn schuld!”", // nieuw, nalezen
    'c.explain.w': "Teraz kierownik zmiany wie, co jest nie tak, gdzie to jest i czego potrzebujesz. Nikt nie musi najpierw zadawać trzech pytań.", // nieuw, nalezen
    'c.listen': "Najpierw słuchaj, potem sprawdź", // nieuw, nalezen
    'c.listen.b': "Pozwól drugiej osobie skończyć mówić (uitpraten), zanim odpowiesz. Patrz na osobę, która do ciebie mówi: tutaj to pokazuje, że słuchasz. W wielu krajach nie patrzy się szefowi w oczy. To znak szacunku. Tutaj patrzenie na niego od czasu do czasu jest uprzejme. Kiedy druga osoba skończy, powtórz krótko, co zostało powiedziane: „Dus eerst …, en dan …?” Nie wiesz, co znaczy jakieś słowo? Zapytaj: „Wat bedoel je met …?” Niektórzy koledzy żartują z poważną miną. Nie masz pewności? Zapytaj: „Was dat een grapje?”",
    'c.listen.p': "Zaczekaj, chcę to dobrze zrozumieć.", // nieuw, nalezen
    'c.listen.s': "Twoja przełożona tłumaczy nowe zadanie. Chcesz coś powiedzieć, ale ona jeszcze mówi. Co robisz?", // nieuw, nalezen
    'c.listen.o1': "Pozwalasz jej skończyć. Potem powtarzasz, co powiedziała.", // nieuw, nalezen
    'c.listen.o2': "Od razu zaczynasz mówić, żeby nie zapomnieć.", // nieuw, nalezen
    'c.listen.o3': "Kiwasz głową na wszystko i o nic nie pytasz.", // nieuw, nalezen
    'c.listen.w': "Kiedy ona skończy, znasz całe zadanie. Powtórzenie pokazuje, że słuchasz, a ona może cię jeszcze poprawić.", // nieuw, nalezen
    'c.calm': "Zachowaj spokój, także kiedy jest trudno", // nieuw, nalezen
    'c.calm.b': "Każdy czasem się złości, także w pracy. Ktoś jest na ciebie zły? Najpierw słuchaj i zachowaj spokój. Nie musisz od razu odpowiadać: „Mag ik even nadenken?” Ty też zaczynasz się złościć? Oddychaj powoli i powiedz: „Kunnen we straks praten?” Porozmawiajcie wtedy, kiedy obie strony się uspokoją. Bardzo dużo pracy? Zapytaj, co trzeba zrobić najpierw. Krzyk, groźby albo popychanie nigdy nie są w pracy w porządku. Powiedz stop i powiedz o tym przełożonemu (więcej w lekcjach „Szacunek dla wszystkich” i „Przekraczanie granic”).", // nieuw, nalezen
    'c.calm.p': "Myślę, że to nieporozumienie.", // nieuw, nalezen
    'c.calm.s': "Kolega jest zły: paleta stoi w złym miejscu. Myślisz, że to nie ty. Co robisz?", // nieuw, nalezen
    'c.calm.o1': "Zachowujesz spokój, słuchasz, potem mówisz, co wiesz.", // nieuw, nalezen
    'c.calm.o2': "Też się złościsz i mówisz głośniej.", // nieuw, nalezen
    'c.calm.o3': "Odchodzisz i już z nim nie rozmawiasz.", // nieuw, nalezen
    'c.calm.w': "Kiedy zachowujesz spokój, druga osoba często też się uspokaja. Wtedy możecie sprawdzić, co się stało, i razem to rozwiązać.", // nieuw, nalezen
    'c.talkintime': "Porozmawiaj o tym, póki problem jest mały", // nieuw, nalezen
    'c.talkintime.b': "Mały problem robi się duży, kiedy o nim nie rozmawiasz. Wtedy nagle się złościsz albo nagle rzucasz pracę. Porozmawiaj na czas: z przełożonym, z kolegą albo z vertrouwenspersoon (osobą zaufania, jeśli jest taka w firmie). Poproś o chwilę: „Heb je even tijd?” Powiedz krótko, jaki jest problem i czego chcesz. Myślisz o odejściu z pracy? Najpierw porozmawiaj. Często jest jakieś rozwiązanie, na przykład inna zmiana albo inne zadanie. Jeśli odejdziesz z własnej woli, możesz stracić zasiłek (uitkering), a często obowiązuje też okres wypowiedzenia (opzegtermijn). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.", // nieuw, nalezen
    'c.talkintime.p': "Możemy razem poszukać rozwiązania?", // nieuw, nalezen
    'c.talkintime.s': "Od tygodni twój grafik jest problemem. Dziś się złościsz i chcesz od razu rzucić pracę. Co robisz?", // nieuw, nalezen
    'c.talkintime.o1': "Najpierw prosisz przełożonego o rozmowę.", // nieuw, nalezen
    'c.talkintime.o2': "Wychodzisz teraz i już nie wracasz.", // nieuw, nalezen
    'c.talkintime.o3': "Nic nie mówisz i po prostu pracujesz dalej.", // nieuw, nalezen
    'c.talkintime.w': "Rozmowa na czas sprawia, że problem zostaje mały. Często jest rozwiązanie, a wtedy często zachowujesz pracę i dochód.", // nieuw, nalezen
    'c.reachable': "Odbierz albo oddzwoń tego samego dnia", // nieuw, nalezen
    'c.reachable.b': "Agencje i pracodawcy często dzwonią, kiedy jest praca. Często pracę dostaje pierwsza osoba, która odbierze albo oddzwoni. Masz nieodebrane połączenie? Oddzwoń tego samego dnia. W pracy nie masz telefonu przy sobie? Oddzwoń w przerwie. Odsłuchaj pocztę głosową i miej trochę środków na telefonie (beltegoed). Trudno ci zrozumieć przez telefon? Powiedz to i zapytaj: „Kunt u het ook appen?” Ktoś prosi o pieniądze albo kody? Rozłącz się (więcej w lekcji „Uważaj na oszustów”). Nowy numer? Podaj go w pracy, w agencji i w gminie (gemeente).", // nieuw, nalezen
    'c.reachable.p': "Oddzwonię do pana/pani w przerwie.", // nieuw, nalezen
    'c.reachable.s': "W przerwie widzisz nieodebrane połączenie z agencji. Co robisz?", // nieuw, nalezen
    'c.reachable.o1': "Oddzwaniasz teraz, w przerwie.", // nieuw, nalezen
    'c.reachable.o2': "Czekasz, aż znowu zadzwonią.", // nieuw, nalezen
    'c.reachable.o3': "Oddzwaniasz w przyszłym tygodniu, kiedy masz wolne.", // nieuw, nalezen
    'c.reachable.w': "Agencje często dzwonią, kiedy jest praca. Kiedy oddzwaniasz tego samego dnia, pokazujesz, że ci zależy, i może dostaniesz tę pracę.", // nieuw, nalezen
    // Vertaalronde 5 november 2026: Feedback en overleg (u.feedback).
    'u.feedback': "Feedback i spotkania zespołu", // nieuw, nalezen
    'l.getfeedback': "Przyjmowanie feedbacku", // nieuw, nalezen
    'w.tip': "wskazówka (krótka rada)", // nieuw, nalezen
    'w.verbeterpunt': "rzecz do poprawy (co może być lepsze)", // nieuw, nalezen
    'w.goedbedoeld': "w dobrej intencji (żeby ci pomóc)", // nieuw, nalezen
    'w.kritiek': "krytyka (to, co ktoś uważa za niedobre)", // nieuw, nalezen
    'w.normaal': "normalny, normalnie", // nieuw, nalezen
    'w.positief': "pozytywny (o tym, co idzie dobrze)", // nieuw, nalezen
    's.getfeedback.1': "Dzięki, dobrze to wiedzieć.", // nieuw, nalezen
    's.getfeedback.2': "Możesz podać przykład?", // nieuw, nalezen
    's.getfeedback.3': "Co mogę robić lepiej?", // nieuw, nalezen
    'd.getfeedback.q': "Mogę dać ci trochę feedbacku?", // nieuw, nalezen
    'd.getfeedback.a': "Tak, proszę. Chcę to robić dobrze.", // nieuw, nalezen
    'l.givefeedback': "Dawanie feedbacku", // nieuw, nalezen
    'w.dichtplakken': "zakleić (taśmą)", // nieuw, nalezen
    'w.netjes': "porządny, starannie", // nieuw, nalezen
    'w.scheef': "krzywy, krzywo (nie prosto)", // nieuw, nalezen
    'w.vriendelijk': "miły, uprzejmy", // nieuw, nalezen
    'w.concreet': "konkretny (z jasnym przykładem)", // nieuw, nalezen
    'w.ondervierogen': "w cztery oczy (tylko we dwoje)", // nieuw, nalezen
    's.givefeedback.1': "Dobrze to robisz.", // nieuw, nalezen
    's.givefeedback.2': "Możesz też zakleić kartony?", // nieuw, nalezen
    's.givefeedback.3': "Widzę, że kartony stoją krzywo.", // nieuw, nalezen
    'd.givefeedback.q': "Co myślisz o mojej pracy?", // nieuw, nalezen
    'd.givefeedback.a': "Porządnie! Tylko kartony stoją krzywo.", // nieuw, nalezen
    'l.meeting': "Zabieranie głosu na spotkaniu zespołu", // nieuw, nalezen
    'w.werkoverleg': "spotkanie zespołu (o pracy)", // nieuw, nalezen
    'w.beurt': "kolej (twój moment, żeby mówić)", // nieuw, nalezen
    'w.idee': "pomysł", // nieuw, nalezen
    'w.mening': "zdanie, opinia (co o tym myślisz)", // nieuw, nalezen
    'w.handopsteken': "podnieść rękę", // nieuw, nalezen
    'w.agenda': "porządek spotkania (lista punktów do omówienia)", // nieuw, nalezen
    's.meeting.1': "Mogę coś powiedzieć?", // nieuw, nalezen
    's.meeting.2': "Mam pytanie o grafik.", // nieuw, nalezen
    's.meeting.3': "Mam pomysł.", // nieuw, nalezen
    'd.meeting.q': "Czy ktoś ma jeszcze pytanie?", // nieuw, nalezen
    'd.meeting.a': "Tak. Kiedy będzie nowy grafik?", // nieuw, nalezen
    'c.getfeedback': "Feedback dotyczy twojej pracy", // nieuw, nalezen
    'c.getfeedback.b': "Feedback to to, co ktoś mówi o twojej pracy: co idzie dobrze i co może być lepsze. Dotyczy twojej pracy, a nie ciebie. W pracy tutaj feedback jest normalny i ma pomóc. Nie wiesz, co zrobić inaczej? Poproś o przykład. Najpierw słuchaj i nie broń się od razu. Potem podziękuj i spróbuj. O feedback możesz też poprosić z własnej inicjatywy: „Wat kan ik beter doen?”", // nieuw, nalezen
    'c.getfeedback.p': "Dzięki. Możesz podać przykład?", // nieuw, nalezen
    'c.getfeedback.s': "Twoja przełożona patrzy na twoją pracę i mówi: „Dit kan beter.” Nie wiesz, co ma na myśli. Co robisz?", // nieuw, nalezen
    'c.getfeedback.o1': "Dziękujesz i prosisz o przykład.", // nieuw, nalezen
    'c.getfeedback.o2': { m: "Mówisz, że naprawdę się starałeś.", f: "Mówisz, że naprawdę się starałaś.", x: "Mówisz, że naprawdę robisz wszystko, co możesz." }, // nieuw, nalezen
    'c.getfeedback.o3': "Kiwasz głową i robisz to znowu tak samo.", // nieuw, nalezen
    'c.getfeedback.w': "Feedback ma ci pomóc. Przykład pokazuje, czego ona chce. A „dziękuję” pokazuje, że słuchasz.", // nieuw, nalezen
    'c.givefeedback': "Dawanie feedbacku: najpierw to, co dobre", // nieuw, nalezen
    'c.givefeedback.b': "Chcesz coś powiedzieć o pracy kolegi? Najpierw powiedz, co idzie dobrze. Potem powiedz miło i jasno, co może być lepsze, z jednym przykładem. Powiedz to w dobrym momencie, tej osobie w cztery oczy, nie przy wszystkich. Mów o tym, co widzisz, a nie o tym, co myślisz o tej osobie: „Ik zie dat ...”. Mów życzliwie: chcesz pomóc, a nie wygrać.", // nieuw, nalezen
    'c.givefeedback.p': "Dobrze to robisz. Możesz też zakleić kartony?", // nieuw, nalezen
    'c.givefeedback.s': "Nowy kolega zapomina zaklejać kartony. Wszyscy jesteście w stołówce. Co robisz?", // nieuw, nalezen
    'c.givefeedback.o1': "Później, w cztery oczy: najpierw co idzie dobrze, potem kartony.", // nieuw, nalezen
    'c.givefeedback.o2': "Przy wszystkich mówisz mu, że to źle.", // nieuw, nalezen
    'c.givefeedback.o3': "Nic nie mówisz i zaklejasz jego kartony za niego.", // nieuw, nalezen
    'c.givefeedback.w': "W cztery oczy może słuchać bez wstydu. Kiedy najpierw powiesz, co idzie dobrze, lepiej usłyszy resztę.", // nieuw, nalezen
    'c.meeting': "Twój głos liczy się na spotkaniu", // nieuw, nalezen
    'c.meeting.b': "Wiele zespołów ma krótkie spotkanie o pracy (het werkoverleg). Twoje zdanie jest tam mile widziane, także kiedy twój niderlandzki nie jest idealny. Pytanie to też dobry wkład: może inni też chcą to wiedzieć. Poczekaj na swoją kolej i pozwól drugiej osobie skończyć. Potem podnieś rękę albo powiedz: „Mag ik iets zeggen?” Nie masz odwagi powiedzieć tego przy grupie? Powiedz to przełożonemu po spotkaniu.", // nieuw, nalezen
    'c.meeting.p': "Mogę coś powiedzieć? Mam pomysł.", // nieuw, nalezen
    'c.meeting.s': "Na spotkaniu zespołu przełożona wyjaśnia nowy grafik. Nie rozumiesz, kiedy zaczyna się twoja zmiana. Co robisz?", // nieuw, nalezen
    'c.meeting.o1': "Kiedy ona skończy mówić, zadajesz swoje pytanie.", // nieuw, nalezen
    'c.meeting.o2': "Nic nie mówisz, żeby nie tracić czasu.", // nieuw, nalezen
    'c.meeting.o3': "Pytasz od razu, kiedy ona jeszcze mówi.", // nieuw, nalezen
    'c.meeting.w': "Pytanie to dobry wkład: może inni też tego nie zrozumieli. Kiedy czekasz na swoją kolej, wszyscy mogą je usłyszeć.", // nieuw, nalezen
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': "Brakuje artykułu? Powiedz o tym", // nieuw, nalezen
    'c.picking.b': "Przegródka jest pusta albo artykułu w niej nie ma? Nie bierz innego artykułu, który wygląda tak samo: wtedy klient dostanie nie to, co trzeba. Powiedz o tym kierownikowi zespołu albo zgłoś to w skanerze. Sprawdzaj numer na naklejce, a nie tylko kolor albo obrazek. Dokładna praca jest ważniejsza niż szybka praca.", // nieuw, nalezen
    'c.picking.p': "Tego artykułu brakuje. Co mam zrobić?", // nieuw, nalezen
    'c.picking.s': "Przegródka jest pusta. W przegródce obok leży artykuł, który wygląda prawie tak samo. Co robisz?", // nieuw, nalezen
    'c.picking.o1': "Zgłaszasz, że artykułu brakuje.", // nieuw, nalezen
    'c.picking.o2': "Bierzesz ten drugi artykuł: wygląda tak samo.", // nieuw, nalezen
    'c.picking.o3': "Pomijasz artykuł i nic nie mówisz.", // nieuw, nalezen
    'c.picking.w': "Zły artykuł wraca, a to kosztuje więcej czasu niż pytanie. Kiedy to zgłaszasz, ktoś może uzupełnić przegródkę albo zmienić zamówienie.", // nieuw, nalezen
    'c.loading': "Nigdy za cofającą ciężarówką", // nieuw, nalezen
    'c.loading.b': "Kierowca nie widzi wszystkiego za ciężarówką. Nigdy nie przechodź za ciężarówką, która cofa, i nie stawaj między ciężarówką a drzwiami. Poczekaj, aż ciężarówka się zatrzyma i kierowca cię zobaczy. Przy rozładunku brakuje palety albo jest uszkodzona? Powiedz o tym, zanim kierowca odjedzie.", // nieuw, nalezen
    'c.loading.p': "Poczekaj chwilę. Ciężarówka cofa.", // nieuw, nalezen
    'c.loading.s': "Ciężarówka cofa do drzwi. Chcesz szybko przejść za nią. Co robisz?", // nieuw, nalezen
    'c.loading.o1': "Czekasz, aż ciężarówka się zatrzyma.", // nieuw, nalezen
    'c.loading.o2': { m: "Przebiegasz za nią: jesteś wystarczająco szybki.", f: "Przebiegasz za nią: jesteś wystarczająco szybka.", x: "Przebiegasz za nią: biegasz wystarczająco szybko." }, // nieuw, nalezen
    'c.loading.o3': "Przechodzisz za nią i machasz do kierowcy.", // nieuw, nalezen
    'c.loading.w': "Za ciężarówką jest miejsce, którego kierowca nie widzi. Czekanie kosztuje minutę. Wypadek w tym miejscu jest bardzo poważny.", // nieuw, nalezen
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto': "Sprawdź, czy robisz to dobrze", // nieuw, nalezen
    'c.howto.b': "Nie masz pewności, jak trzeba zrobić zadanie? Zapytaj, jak, albo poproś kolegę, żeby na chwilę spojrzał na twoją pracę. Sprawdzanie jest tu normalne, także po tygodniu albo po miesiącu. Zgadywanie kosztuje więcej czasu niż pytanie: pracę z błędem trzeba zrobić jeszcze raz. „Doe ik het zo goed?” to pytanie, które koledzy lubią słyszeć.", // nieuw, nalezen
    'c.howto.p': "Spojrzysz na chwilę, czy jest dobrze?", // nieuw, nalezen
    'c.howto.s': "Robisz nowe zadanie. Nie masz pewności, czy robisz je dobrze. Co robisz?", // nieuw, nalezen
    'c.howto.o1': "Prosisz kolegę, żeby na to spojrzał.", // nieuw, nalezen
    'c.howto.o2': "Robisz dalej: może jest dobrze.", // nieuw, nalezen
    'c.howto.o3': "Przerywasz i czekasz, aż ktoś przyjdzie.", // nieuw, nalezen
    'c.howto.w': "Jedno krótkie spojrzenie kolegi oszczędza później dużo pracy. I szybciej nauczysz się tego zadania.", // nieuw, nalezen
    'c.mayask': "Dobry moment na pytanie", // nieuw, nalezen
    'c.mayask.b': "Chodzi o bezpieczeństwo albo coś może zaraz pójść źle? Zapytaj od razu, także wtedy, gdy kolega jest zajęty. To nie jest pilne? Poczekaj, aż kolega skończy, i wtedy zapytaj: „Heb je even tijd?” Masz dużo małych pytań? Zapisz je i zadaj wszystkie razem. Pytanie nikogo nie denerwuje. Błąd kosztuje więcej czasu.", // nieuw, nalezen
    'c.mayask.p': "Przepraszam, że przeszkadzam. Masz chwilę?", // nieuw, nalezen
    'c.mayask.s': "Twój kolega rozmawia przez telefon. Masz pytanie, które nie jest pilne. Co robisz?", // nieuw, nalezen
    'c.mayask.o1': "Czekasz, aż rozmowa się skończy, i wtedy pytasz.", // nieuw, nalezen
    'c.mayask.o2': "Pytasz teraz: pytanie jest zawsze dobre.", // nieuw, nalezen
    'c.mayask.o3': "Nie pytasz: kolega jest zajęty.", // nieuw, nalezen
    'c.mayask.w': "Chwila czekania pokazuje szacunek, a odpowiedź i tak dostaniesz. Tylko niebezpieczeństwo nie może czekać.", // nieuw, nalezen
    'c.whereis': { m: "Zgubiłeś się? Po prostu zapytaj", f: "Zgubiłaś się? Po prostu zapytaj", x: "Nie możesz znaleźć drogi? Po prostu zapytaj" }, // nieuw, nalezen
    'c.whereis.b': "Nowe miejsce pracy jest duże, a wiele drzwi wygląda tak samo. Nikt nie oczekuje, że po jednym dniu wszystko znajdziesz. Nie możesz znaleźć pomieszczenia, narzędzia albo osoby? Zapytaj pierwszego kolegę, którego zobaczysz. Wielu kolegów pójdzie z tobą albo wskaże drogę. Wiesz, gdzie są wyjścia? Zapytaj o to pierwszego dnia: to dla twojego bezpieczeństwa.", // nieuw, nalezen
    'c.whereis.p': { m: "Zgubiłem się. Gdzie jest stołówka?", f: "Zgubiłam się. Gdzie jest stołówka?", x: "Nie mogę znaleźć drogi. Gdzie jest stołówka?" }, // nieuw, nalezen
    'c.whereis.s': "To twój drugi dzień. Nie możesz znaleźć szatni, a twoja zmiana zaczyna się za pięć minut. Co robisz?", // nieuw, nalezen
    'c.whereis.o1': "Pytasz pierwszego kolegę, którego widzisz.", // nieuw, nalezen
    'c.whereis.o2': "Szukasz dalej: pytać jeszcze raz to wstyd.", // nieuw, nalezen
    'c.whereis.o3': "Zaczynasz pracę we własnym ubraniu.", // nieuw, nalezen
    'c.whereis.w': "Pytanie zajmuje dziesięć sekund. Gdy szukasz bez pomocy, możesz się spóźnić. Koledzy wiedzą, że w nowym miejscu trudno znaleźć drogę.", // nieuw, nalezen
  },
};

export default t;
