# Vertaalcontrole

Alle bestanden in `src/i18n/` zijn met AI gemaakt. Zet `reviewed: true` pas als een moedertaalspreker
het hele bestand heeft gecontroleerd. Hieronder de punten waar de vertaler zelf twijfelde.

## Algemeen (alle talen met grammaticaal geslacht)
Zinnen als "Ik ben nieuw", "Ik ben een nieuwe collega", "Ik ben ziek" en "Ik ben te laat" staan in de
mannelijke vorm (Arabisch, Pools, Oekraïens, Roemeens, Bulgaars, Tigrinya). Op termijn: varianten per geslacht.

Beleefde vragen aan een leidinggevende ("Kunt u dat herhalen?", "Wilt u langzaam praten?") gebruiken
de beleefdheidsvorm, net als het Nederlandse "u".

## Tigrinya (`ti.ts`) — hele bestand laten nakijken
Vooral: kas (ግሪንሃውስ), helm (መከላኸሊ ርእሲ), dienst (ፈረቓ ስራሕ), paprika (ፐፐሮኒ), komkommer (ኩኩምበር),
plukken (ምቕራም), krat (ካሸታ), tomaat (ኮሚደረ), wc (ሽቓቕ), doos (ሳጹን), hesje, heftruck (ፎርክሊፍት),
te laat (ደንጒዩ). Bij "zeven uur" (s.shift.1): controleren dat dit als Europese tijd wordt gelezen,
niet als Ethiopische/Eritrese kloktijd.

## Dari (`prs.ts`)
Afghaanse woorden gebruikt (تشکر, بادنجان رومی, داکتر, تشناب, گدام, کراچی, قطی …). Controleren:
krat (صندوق حاصل), pauze (وقت استراحت), stelling (الماری), paprika (مرچ شیرین), rooster (تقسیم اوقات کار),
oogsten (حاصل‌برداری), en of ایمنی overal de beste keus is voor "veiligheid".

## Perzisch (`fa.ts`)
Krat (سبد), hesje (جلیقهٔ ایمنی).

## Arabisch (`ar.ts`)
Pallet (المنصة الخشبية), kas (البيت الزجاجي), krat (صندوق الحصاد).

## Oekraïens, Turks, Pools
"Klaar" als готово / bitti / gotowe; Turks "barkod okuyucu" voor scanner; Pools "wózek" (kar) lijkt op
"wózek widłowy" (heftruck); Turks gebruikt "Hollandaca".

## Roemeens, Bulgaars
Werkwoorden in het Bulgaars in de 1e persoon (er is geen infinitief). Heftruck: motostivuitorul / мотокарът.
Krat: lada / касетката. "Klaar": gata / готов.

## Chatgesprekken (`c.*`, alle talen)
De korte dialogen ("Wil je koffie of thee?" → "Thee, graag.") gebruiken informeel "je", net als in het
Nederlands. "Ben je ziek?" en "Ja, ik draag hem." (de helm) staan in de mannelijke vorm waar de taal dat
vraagt. `inARow` is een sjabloon: `{n}` moet blijven staan (de test controleert dat).

## Werkvloer-tips en unit "Samenwerken" (`src/i18n/culture/*.ts`)
Ook met AI vertaald. De Nederlandse voorbeeldzinnen tussen aanhalingstekens ("je", "Zeg maar je, hoor!",
"trakteren", "Afspraak is afspraak" …) blijven bewust Nederlands. Ook de inhoud zelf graag laten checken
door iemand met NT2- of HR-ervaring (ziekmelden, beschermingsmiddelen, privacy).

- **Alle talen:** "bijna-ongeluk" is meestal omschreven, geen vaste veiligheidsterm (bv. Turks *ramak kala*,
  Roemeens *incident periculos*). Oekraïens en Pools gebruiken mannelijke vormen voor de leerling.
- **Tigrinya:** hele bestand nakijken; vooral bijna-ongeluk (ቁሩብ ተሪፉዎ ዝነበረ ሓደጋ), "dwarszitten" (ዘሸግረካ),
  uitzendbureau (ኤጀንሲ ስራሕ), overwerken, "niet fijn" (ዘየሐጉስ), "beledigd voelen".
- **Dari:** Afghaanse woorden gekozen (گپ زدن، قهر، ناوقت، نان چاشت، تفریح، دفتر کاریابی، وعده …);
  bewust geen خفه شدن (betekent in Iraans Perzisch "hou je mond").
- **Perzisch:** cijfers deels Perzisch (۱۵), tijd 7:00 in Latijnse cijfers.
- **Arabisch / Perzisch / Dari:** bij "je"/"u" en "Afspraak is afspraak" staat een korte uitleg tussen haakjes.
- **Turks:** "kar" vertaald als *araba* (vaag; *el arabası* of *transpalet* kan beter). "Mister Mark" → *Mark Bey*.
- **Pools:** veiligheidsregels als *Zasady BHP*.
- **Roemeens / Bulgaars:** "taart" als *prăjitură* / *торта*; "afspraak" ook als "afspraak bij de dokter" (*programarea*).

## Controle door AI-agents (oktober 2026)

Omdat er nog geen moedertaalsprekers beschikbaar waren, heeft per helptaal een AI-agent alle teksten
nagelopen (~1.400 per taal: app, uitleg, werkvloertips en werk-units). Methode: elke vertaling vergelijken met het
Nederlands, terugvertalen, en letten op betekenis, taalvariant, "u"/"je", eenvoud en duidelijkheid bij
veiligheid, ziekte, loon en rechten. Duidelijke fouten (A = verkeerde betekenis, B = onnatuurlijk, verkeerde
variant of vorm) zijn verbeterd; twijfel is niet aangepast maar staat hieronder als vraag. Een tweede,
onafhankelijke agent heeft alle 297 wijzigingen nagekeken: 296 goed, 1 verbeterd (Roemeens `c.newjob.p`).

**Dit vervangt geen moedertaalspreker.** `reviewed` blijft `false`. Eigen inschatting van de agents:
Roemeens, Turks, Pools, Bulgaars, Oekraïens, Perzisch, Arabisch middel-hoog; Dari middel; Tigrinya middel-laag.
Prioriteit voor een echte controle: **Tigrinya, dan Dari**.

Per taal: wat is verbeterd en welke vragen nog open staan voor een moedertaalspreker.


### `ro` — vertrouwen middel-hoog — 3 A, 27 B, ~15 C

- **A (betekenis):** vakantiegeld was "indemnizația de concediu" (= loon tijdens verlof) → "prima de vacanță"; c.extra.w "eerder van het werk weg" → "van de firma weg voor uitbetaling"; c.time.o2 dubbelzinnig fout antwoord.
- **B (vorm/woordkeus):** u-vorm in 12 zinnen (Dutch "u"), "neerlandeză"→"olandeză", calques (cutia merge, Numele meu este), "20 de zile"-grammatica via labelvorm.
- **Vragen:** meervoud "20 de zile" (code), oproepkracht "lucrătorul la chemare", aproape-accident vs incident periculos, uitkering "ajutorul social", BSN-calque, vakantiegeld bevestigen, Android-instellingsnaam TTS.

### `tr` — vertrouwen middel-hoog — 0 A, 20 B, 17 C

- **B (vorm/woordkeus):** u-vorm in 11 zinnen; sectorCare "Bakım" (=onderhoud) → "Sağlık ve bakım"; s.respect.2 "past me niet" → "vind ik niet oké"; w.vrij "boş" → "izinli"; u.contact; c.illness.p "weer beter"; doos=kutu consistent.
- **Vragen:** klaar "bitti/hazır", scanner "el terminali"?, bijna-ongeluk + "ramak kala", vertrouwenspersoon "güven danışmanı", cliënt "danışan", uitzendbureau consistent, "Aferin!" betuttelend?, "o kadar" toon, "eşkenar dörtgen" te moeilijk, "Pardon!" vs "Kusura bakma!".

### `prs` — vertrouwen middel — 1 A, 44 B, ~12 C

- **A (betekenis):** w.vrij "بی‌کار" (= werkloos) → "رخصت (کار ندارید)".
- **B (vorm/woordkeus):** 16 UI-teksten mengden tu/shoma → shoma; خفه (Iraans "hou je mond") nog in c.respect.q → غمگین; نگه کردن (leest als "kijken") → نگه داشتن (14 keys); "1 می" → "1 ماه می"; رایگان → مفت; stelling رف consistent; "vroeg" وقت → زود.
- **Vragen:** chats met Nederlands "je" staan in beleefde shoma (bewust?), veiligheid ایمنی vs مصئونیت, تفریح کردن = pauze of plezier?, چپ (stil) = چپ (links) verwarrend, iOS-deelknop naam, oproepkracht, vertrouwenspersoon, krat/paprika/rooster uit eerdere lijst.

### `pl` — vertrouwen middel-hoog — 2 A, 29 B, ~20 C

- **A (betekenis):** c.smoking.b "niet roken op het werk" miste "binnen"; c.kitchen.o3 "noten kiezen" → "zelf uit het gerecht halen".
- **B (vorm/woordkeus):** u-vorm (pan/pani) 10 zinnen; kar "wózek" (leek op heftruck) → "wózek ręczny"; klaar "gotowe" → "skończone, gotowe"; doos = karton consistent; uitchecken "wymeldować" (= adres uitschrijven) → "odbić się na wyjściu"; grammatica.
- **Vragen:** meervoud 2–4 (CODE), kar-jargon, bijna-ongeluk BHP-term, iOS-label, "pierścionek" bij man, "bójkę" vs "kłótnię", mannelijke vormen.

### `bg` — vertrouwen middel-hoog — 3 A, 30 B, 12 C

- **A (betekenis):** certEarnedHint las als opdracht "Maak alle lessen af"; c.hygiene.w "baas MAG niet weten" → "hoeft niet te weten"; c.boundaries.q "doe niet zo moeilijk" = "speel niet hard-to-get" (seksuele ondertoon) → "overdrijf niet".
- **B (vorm/woordkeus):** meer zinnen die als opdracht lazen, u-vorm, ongeluk-term consistent, "te laat", "niet oké" ≠ "oneens", overuren "worden betaald".
- **Vragen:** iOS-labels, bijna-ongeluk-term, klaar "готов", doorbetalen, Здравейте/Здравей.

### `uk` — vertrouwen middel-hoog — 2 A, 27 B, ~20 C

- **A (betekenis):** c.time.o2 fout antwoord leek goed; c.warning.w paspoort-zin draaide betekenis om (alsof terugnemen = controle).
- **B (vorm/woordkeus):** ти/ви mix, rechten "kan niet" → "mag niet" (4), "binnenroepen voor werk", DigiD "вхід" (=ingang) → "логін", pallet/beschermingsmiddelen consistent, "doe niet zo moeilijk".
- **Vragen:** meervoud 2–4 (CODE), bijna-ongeluk, iOS-label, loonheffingskorting, referentie-zin, diploma waarderen, klaar.

### `fa` — vertrouwen middel-hoog — 0 A, 47 B, 14 C

- **B (vorm/woordkeus):** UI-instructies mengden tu/shoma → shoma (16); woord/کلمه consistent; ziek بیمار → مریض (ook "ziek?" las als "ziekte?"); helm "op je hoofd zetten"; ongeluk تصادف (= botsing) → حادثه; sieraden جواهر (= alleen kostbare) → زیورآلات; diploma "zelf beoordelen" → "laten beoordelen"; afsluiting "با سلام" fout.
- **Vragen:** korte knoppen nog tu-imperatief, uitkering مستمری (= pensioen in Iran?), oproepkracht, eigen risico, bijna-ongeluk, vertrouwenspersoon, hesje.

### `ar` — vertrouwen middel-hoog — 1 A, 29 B, 22 C

- **A (betekenis):** s.newjob.3 "werk zoeken is gratis" las als "onbetaald werk zoeken" → "kost geen geld".
- **B (vorm/woordkeus):** "op tijd" في الوقت → في الوقت المحدد (consistent); identiteitsbewijs = ook paspoort; brief (post) ≠ bericht (sms); LMRA "op het laatste moment" (klonk als te laat) → "vlak voor de start"; "alleen"-fouten (paspoort, roken, reizen); "zaterdagavond" = vrijdagavond in Arabisch; "doe niet zo moeilijk".
- **Vragen:** u-vorm (يمكنك vs حضرتك), cliënt العميل in zorg, borg vs verzekering التأمين, vrouwelijke vormen, maandnamen Levant/Irak, pallet-woord, oproepkracht/eigen risico/zorgtoeslag/LMRA begrijpelijk?, meervoud vanaf 11 (CODE).

### `ti` — vertrouwen middel-laag — 3 A, 22 B, ~15 C

- **A (betekenis):** drie kloktijden uitgeschreven ("ሰዓት ሸውዓተ") → leesbaar als Ge'ez-tijd (7 = 13:00) → alleen cijfers.
- **B (vorm/woordkeus):** u-vorm 10 zinnen; Amhaars woord sieraden → ስልማት; c.je.w "liefdevol, wil dichterbij" (romantisch bij vrouwelijke leidinggevende) → "teken van vriendelijkheid"; "met liefde" voor "vriendelijk"; paspoort "alleen"; grammatica/typo.
- **Vragen:** werkwoordsvorm እ-/ይ-, dienst ፈረቓ (Amhaars?), identiteitsbewijs woordvolgorde, knikken = ja of nee schudden?, ፍቕራዊ (vriendelijk/liefdevol), ክረምቲ zomer/winter, pesten-woord, boor, helm ካስኮ, ሐ/ሓ spelling, lezen Eritreeërs "7:00" als Europese tijd?

## Blinde terugvertaling (oktober 2026)

Een tweede controle, strenger dan de eerste. Per helptaal twee stappen, door twee verschillende AI-agents:

1. **Blind terugvertalen.** Agent 1 kreeg alleen de vertaalde teksten met hun sleutel (ook alle m/v-vormen),
   zonder Nederlands of Engels. Hij vertaalde alles zo letterlijk mogelijk terug naar het Engels: wat een lezer
   echt begrijpt, met notities bij twijfel, verkeerde variant of moeilijke woorden.
2. **Vergelijken en verbeteren.** Agent 2 legde die terugvertaling naast het Nederlands en Engels. A = verkeerde
   of omgekeerde betekenis, gevaarlijke dubbelzinnigheid (veiligheid, gezondheid, rechten, loon) of verkeerd
   geslacht; B = onduidelijk, onnatuurlijk, verkeerde variant, inconsequent of ontbrekende vrouwelijke vorm.
   Alle A en bijna alle B zijn direct verbeterd in `src/i18n/**`; `tests/i18n.test.ts` slaagt. Twijfel is niet
   aangepast maar staat hieronder als vraag.

De aantallen zijn hoger dan bij de eerste controle: nu is per sleutel en per m/v-vorm geteld (1.585–2.152
teksten per taal), en de blinde terugvertaling laat dubbelzinnigheid zien die je mist als je de bron al kent.
Totaal: **88 A en ~560 B**. `reviewed` blijft `false`.

### Eerst nakijken: veiligheid

Deze vragen gaan over veiligheid en gezondheid. Een verkeerd woord kan hier echt schade doen.

- [ ] **`ti`** `s.kitchen.3`, `c.kitchen.q`, `c.kitchen.s`, `c.kitchen.o3`: "ለውዝ" voor noten: betekent dat alle noten, of alleen pinda's? Belangrijk voor allergie.
- [ ] **`ti`** `s.danger.1`, `c.cleansafe.b`, `c.cleansafe.p`, `c.cleansafe.a.why`: Natte vloer staat nu overal als "ጠሊሉ" / "ዝጠለለ" ("ርሑስ" betekent ook "gelukkig/gezegend", zie ርሑስ መዓልቲ ልደት). Is "መሬት ጠሊሉ እዩ" voor iedereen duidelijk "de vloer is nat (glad)"?
- [ ] **`ti`** `w.damp`: "ትኪ (ጋዝ)" betekent "rook". Wat is het juiste woord voor damp/dampen (bijv. van schoonmaakmiddel)?
- [ ] **`fa`/`prs`** `w.valbeveiliging`, `s.site.2`, `c.site.a`: "کمربند ایمنی/مصئونیت" kon gelezen worden als autogordel. Nu: "کمربند ضد سقوط" (fa) / "کمربند ضد افتادن" (prs), met "هارنس" bij het woord. Klopt dit op de bouwplaats?
- [ ] **`uk`** `c.phone.q`, `w.machine`, `l.line`, `c.line`, `c.understood.s`: "машина": duidelijk als fabrieksmachine, of leest het als "auto"? Beter "верстат" / "обладнання"? (Telefoon bij de machine, lopende band.)

Daarna, omdat het meteen opvalt:

- [ ] **`ar`** `c.texting.p#f`: de vrouwelijke vorm ondertekent met "(اسمك)" ("je naam") in plaats van "Ali".
  Natuurlijk, of liever een vrouwennaam? Zie ook "Nederlandse bron" hieronder.

### Algemeen

- **"Code", niet "wachtwoord".** Het toegangsscherm vraagt om een code. `ui.password`, `ui.unlockHint` en
  `ui.wrongPassword` zeggen nu in alle negen talen "code" (kod, код, کد, الرمز, ኮድ …), net als het Engels in
  `types.ts`. "Wachtwoord" staat nergens meer in `src/`.
- **Meervoud** (Pools, Oekraïens, Arabisch: 2–4, 11+ enz.) was een taak voor de code, niet voor de vertaling.
  Teksten met `{n}` kiezen nu hun vorm via `Intl.PluralRules`. Die nieuwe meervoudsvormen zijn nog niet blind
  teruggekeken: graag meenemen bij de controle door een moedertaalspreker.
- **Slotzin bij uitbuiting.** "Vraag het je werkgever" paste niet bij tips over misbruik door de werkgever.
  Daarvoor komt een aparte slotzin (vakbond, Juridisch Loket, FairWork); de vertalingen volgen het Engels.
- **Nederlandse bron:** "Ali" (man) ondertekent ook berichten van vrouwen (`c.texting.p`, `c.names.p`,
  `s.callin.1`). Lange juridische tips (`c.contract.b`, `c.bsn.b`, `c.housing.b`, `c.rights.b`) zijn zwaar voor
  laaggeletterden. Dat is de inhoud, niet de vertaling.

Per taal: aantallen, de belangrijkste verbeteringen en de open vragen.

### `ro` — 4 A, 36 B — 6 vragen

1641 teksten vergeleken (32 B verbeterd, 4 B als vraag).

**Verbeterd (belangrijkste A):**

- c.interview.b: *sarcină* (= zwangerschap én taak) in een rechtentekst → "o sarcină (dacă aștepți un copil)".
- c.privacy.b (m/f): medicijnregel draaide om ("niet geven als je niet getraind bent én geen toestemming hebt") → "alleen als je getraind bent en het mag".
- c.hygiene.w: *mașini* las als "auto's" (niet rijden of met auto's werken) → *utilaje* (machines); ook in c.phone.\*, c.understood.\*, c.translate.b.
- B: "code" i.p.v. "parola"; #f-vormen toegevoegd (c.names.p, s.rights.2, c.hygiene.\*); uitkering *ajutorul social* (bijstand) → *indemnizația*.

**Vragen voor een moedertaalspreker:**

- [ ] `ui.voiceNone`: Is "(Redare text în vorbire)" de echte menunaam op Android/iOS? Android zegt vaak "Transformarea textului în vorbire".
- [ ] `w.oproepkracht`, `c.contract`, `c.contract.b`: "lucrătorul la chemare" / "munca la chemare" voor oproepkracht: begrijpelijk, of is "la cerere" beter? (Overal hetzelfde gebruikt.)
- [ ] `w.pesten`, `c.respect.a`, `c.respect.b`, `c.respect.a.why`, `c.gossip.b`: Klinkt "hărțuire" / "mă hărțuiește" voor pesten te seksueel? Beter "mă necăjește" of "bullying"?
- [ ] `w.verpleegkundige`, `s.privacy.2`, `c.privacy.a`, `c.privacy.o1`, `c.privacy.b`: "asistenta (medicală)" is vrouwelijk, het Nederlands is neutraal. Is dat goed, of liever "asistentul/asistenta"?
- [ ] `ui.settingsLangMe`: Nieuw: "Limba și profilul tău". Past dat bij een onderdeel met hulptaal en geslacht?
- [ ] `ui.pocketCard`: Nieuw: "Fișă de buzunar" (was "Fițuică" = spiekbriefje). Natuurlijk voor een zakkaart?

### `tr` — 0 A, 38 B — 7 vragen

1585 teksten vergeleken.

**Verbeterd (belangrijkste A):**

- Geen A. Belangrijkste B: *İşte* ("hier is…" / "op het werk") → *İş yerinde* in ~15 teksten.
- LMRA *son dakika* (= "laatste nieuws" / "op het laatste moment") → "vlak voor het werk" (s.site.3, c.site.b).
- *serbest* (kan "gratis" lezen) → "mag altijd" (c.line.w, d.agree.a.why); w.uitkering *sosyal yardım* (bijstand) → *ödenek*.

**Vragen voor een moedertaalspreker:**

- [ ] `w.client`: "danışan (bakım verdiğin kişi)": "danışan" betekent meestal cliënt van een hulpverlener. Is "bakım alan kişi" beter, in de hele zorg-unit?
- [ ] `w.training`, `w.opleiding`: Beide "eğitim": in het Turks niet te onderscheiden. Helpt "kurs/eğitim" tegenover "mesleki eğitim, öğrenim"?
- [ ] `w.vertrouwenspersoon`, `s.boundaries.3`, `c.boundaries.b`, `c.boundaries.w`, `c.respect.b`: "güven danışmanı" (+ uitleg): bestaat er een gangbaardere term, zoals "güven kişisi" of "gizli danışman"?
- [ ] `w.vakantiegeld`, `c.extra`: "tatil parası (yılda bir ödenen yasal ek ücret)": is de nieuwe uitleg natuurlijk? Of "tatil ödeneği"?
- [ ] `s.cleaning.2`: "Koridoru süpüreceğim": betekent "süpürmek" hier duidelijk stofzuigen?
- [ ] `c.contract.b`, `c.bsn.b`, `c.housing.b`: Lange juridische teksten: inhoudelijk goed, maar zwaar voor laaggeletterden. Vereenvoudigen?
- [ ] `ui.dayStreak`: "günlük seri": natuurlijk voor een reeks dagen op rij?

### `prs` — 6 A, ~100 B — 14 vragen

1585 teksten vergeleken (in twee rondes).

**Verbeterd (belangrijkste A):**

- c.leave.a.why: *کی؟* leest in Dari als "wie?" → *چه وقت؟*.
- c.doctor.a.why: dienstdoende arts → *مرکز داکتر خانوادگی* (huisartsenpost), zoals in de dialoog.
- d.speakup.q: "Welk probleem?" → "Is er iets?" (*مشکلی هست؟*); c.speakup.o2: *چپ بمانید* (stil / links) → *خاموش بمانید*.
- ui.unlockHint / ui.wrongPassword: *رمز* (wachtwoord) → *کد*.
- B: hele *.a.why*-blok van Iraans Perzisch naar Afghaans Dari (سؤال→سوال, هلندی→هالندی, نه→نی …); emmer *سطل* → *بالتی*.

**Vragen voor een moedertaalspreker:**

- [ ] `w.prullenbak`, `s.cleaning.3`: "سطل کثافات": natuurlijk in Afghanistan, of is "دبهٔ کثافات" / "کثافت‌دانی" beter (emmer is nu بالتی)?
- [ ] `c.time.p`: "بسِ من ناوقت آمد": is duidelijk dat het om de bus gaat (بس = ook "genoeg"), of beter "موتر بس" / "سرویس"?
- [ ] `c.ask.b`, `c.ask.o2`, `c.understood.o2`: Knikken als "سر خود را به معنای بلی تکان بدهید": natuurlijk of te omslachtig?
- [ ] `c.hygiene.a.why`: "مقررات حفظ‌الصحهٔ غذا": juist register voor "regels voor schoon eten"?
- [ ] `c.gear.a.why`: "بلی، کلاه سرش است": natuurlijk voor "ja, hij heeft hem op"?
- [ ] `c.cleansafe.a.why`: "هوشدار": juiste spelling, of "هوشیاری" / "خبر دادن"?
- [ ] `w.lopendeband`: "خط تولید، بلت انتقال": is "بلت انتقال" het gewone Afghaanse woord voor lopende band?
- [ ] `ui.installAdd`, `ui.iosStep2`: "افزودن به صفحهٔ اصلی" is het Perzische iOS-label. Goed zo voor Dari-sprekers?
- [ ] `ui.iosStep1`: "«اشتراک‌گذاری» (شریک ساختن)": de juiste knopnaam om te noemen?
- [ ] `c.kitchen.p`: "آشپز صاحب": te formeel voor een Nederlandse keuken?
- [ ] `s.respect.3`: "بس کنید، این دیگر از حد گذشت.": natuurlijk voor "Stop, dit is mijn grens"?
- [ ] `w.rust`, `c.health.w`: "استراحت" bewust als rust (niet pauze, dat is nu تفریح). Goed in Dari?
- [ ] `w.oproepkracht`: "کارگر خواستی": wordt deze nieuwe term begrepen?
- [ ] `c.direct.w`, `c.extra.w`, `ui.certPractice`: "نه" is bewust blijven staan waar het "niet" betekent in een tegenstelling ("X، نه Y"). Goed, of overal "نی"?

### `pl` — 3 A, 38 B — 9 vragen

1683 teksten vergeleken.

**Verbeterd (belangrijkste A):**

- c.gethelp.p (m/f): *wykorzystywana* (klinkt als seksueel misbruik) → *wyzyskiwany / wyzyskiwana* (uitbuiting).
- c.respect.a (+ w.pesten): *dokucza* (plagen, klinkt licht) → *nęka* (pesten).
- B: "kod" i.p.v. "hasło" (ook de Engelse bron in `types.ts`); in-/uitchecken OV → "zbliżyć kartę"; *dzień karencji* → "dzień bez wypłaty".

**Vragen voor een moedertaalspreker:**

- [ ] `ui.gateWho`: "opiekun" voor begeleider/coach: goed, of "koordynator" / "trener"?
- [ ] `c.boundaries.a`, `c.boundaries.p`: "Chcę, żebyś przestał." spreekt alleen een man aan. Zo laten, of neutraal: "Chcę, żeby to się skończyło"?
- [ ] `ui.pocketCard`: "Ściągawka": is de bijklank "spiekbriefje" OK?
- [ ] `ui.wordsStrongerN`, `ui.wordsStrongerOne`: De meervoudsvormen zeggen nu "{n} słowo/słowa/słów lepiej utrwalone", maar ui.wordsStrongerOne nog "{n} słowo mocniej". Natuurlijk naast het ▲-getal, en welke formulering moeten beide krijgen?
- [ ] `c.hygiene.a#m`: "zdjąłem pierścionek": is "pierścionek" natuurlijk voor een ring van een man?
- [ ] `w.inklokken`, `w.uitklokken`, `s.clock.1`, `c.clock`: "odbić kartę" voor in-/uitklokken behouden, of ook "zbliżyć kartę" (zoals bij OV)?
- [ ] `s.understand.1`, `c.client`, `c.service.p`: Vormen met "pan/pani": leesbaar voor laaggeletterden?
- [ ] `c.interview.q`: "Opowiedz coś o sobie." is informeel, zoals het Nederlandse "je". OK in een sollicitatiegesprek?
- [ ] `w.klaar`: "skończone, gotowe": alleen onzijdige vormen. Is dat goed?

### `bg` — 1 A, 28 B — 6 vragen

1670 teksten vergeleken.

**Verbeterd (belangrijkste A):**

- c.gossip.b: "iets persoonlijks delen met een collega" (= pesten?) → "persoonlijke dingen over een collega rondvertellen".
- B: "код" i.p.v. "парола"; c.unsafe.b *почти злополуки* (letterlijk Engels) → "gevallen waarin bijna een ongeluk gebeurde"; ui.trialDone las als opdracht.

**Vragen voor een moedertaalspreker:**

- [ ] `c.kitchen.p`: "Шефе, има ли глутен в този сос?": leest "Шефе" als de chef-kok of als de baas? Elders staat "главния готвач".
- [ ] `d.speakup.q`: "Има ли нещо?": natuurlijk voor "Is er iets?", of "Има ли някакъв проблем?"
- [ ] `s.respect.3`: "Стоп, това е моята граница.": is "граница" natuurlijk voor een persoonlijke grens, of te boekentaal?
- [ ] `ui.inReview`: "в проверка": duidelijk als label "vertaling wordt nagekeken"?
- [ ] `c.quality.w`: "…е това, което прави добрият член на екипа.": natuurlijk, of letterlijk uit het Engels?
- [ ] `c.texting.p`, `c.callin.p`: Ali (Latijns) naast Али (Cyrillisch): overal één schrijfwijze?

### `uk` — 6 A, 75 B — 11 vragen

1688 teksten vergeleken.

**Verbeterd (belangrijkste A):**

- c.texting.b: "groet aan het eind" → "sluit af en onderteken".
- c.boundaries.a / .p: alleen mannelijke aanspreekvorm (de dader kan een vrouw zijn) → "ik wil dat dit stopt".
- c.doctor.s: *не спить* ("kan niet slapen"?) → *при тямі* (bij bewustzijn).
- c.rights.s en w.opzegtermijn: beëindiging met wederzijds goedvinden en opzegtermijn voor beide kanten duidelijk gemaakt.
- B: russicismen weg; *відмічатися* → *реєструвати(ся)* (21 teksten); eigen risico = *франшиза*; apostrof ʼ.

**Vragen voor een moedertaalspreker:**

- [ ] `u.apply`, `w.solliciteren`, `s.findwork.1`, `c.certs.o2`: "подаватися на роботу": acceptabel, of "подати заявку / резюме"?
- [ ] `c.boundaries.a`, `c.boundaries.p`: "Я хочу, щоб це припинилося": goede weergave van "Ik wil dat je stopt" zonder geslacht vast te leggen?
- [ ] `w.waarderen`: "подати на офіційну оцінку (диплом)": duidelijker als "визнання диплома"?
- [ ] `w.groet`: "прощальне побажання (в кінці повідомлення)": natuurlijk?
- [ ] `ui.pocketCard`: "Шпаргалка": te informeel, of prima?
- [ ] `w.telaat`: "із запізненням": te boekentaal?
- [ ] `c.hygiene.p`, `c.hygiene.o3`: "приймати ліки": zo laten, of "вживати"?
- [ ] `l.mistakes`, `w.feedback`: "Зауваження", "зворотний звʼязок": goede keus voor feedback?
- [ ] `c.transit.a`: "біля дверей": beter "просто біля дверей"?
- [ ] `c.names.p`, `c.gossip.q`, `c.privacy.q`: Namen buiten Nederlandse citaten nu in het Cyrillisch (Алі, Марк, Янсен). Is dat goed?
- Veiligheid (1): zie "Eerst nakijken" hierboven (`c.phone.q`, `w.machine`, `l.line`, `c.line`, `c.understood.s`).

### `fa` — 15 A, 61 B — 9 vragen

1585 teksten vergeleken.

**Verbeterd (belangrijkste A):**

- *حقوق* (= rechten én salaris) → *حق‌ها* / *حقوق قانونی* in 9 teksten (u.rights, l.rights, u.exploit, c.rights.w, a.what.b …).
- *مستمری* (= pensioen) voor uitkering → *کمک‌هزینه* (w.uitkering, w.uwv, c.ww.w, c.bsn.w).
- c.quality.b / .o2: *رد شود* (doorlaten én afkeuren, dus mogelijk het omgekeerde) → "het foute product niet laten doorgaan".
- B: UI overal beleefd شما; "کد" i.p.v. "رمز"; *آزار* (seksuele intimidatie) → *اذیت* voor pesten.

**Vragen voor een moedertaalspreker:**

- [ ] `ui.whatDoYouDo`, `c.*`, `w.*`, `s.*`: Register: de UI is nu overal beleefd (شما), de lesteksten zijn informeel (تو). Een cultuurkaart heeft dus een شما-kop ("چه کار می‌کنید؟") boven een تو-situatie. Is die splitsing goed?
- [ ] `w.oproepkracht`, `c.contract.b`: "نیروی کار آنکال": duidelijk voor laaggeletterde werkers?
- [ ] `ui.sectorLogistics`: "انبار و لجستیک": past dat op de sectorknop?
- [ ] `c.texting.p`: "با احترام، علی" is formeler dan het Nederlandse "Groet". Beter "ممنون، علی"?
- [ ] `ui.remindEvening`: "شب": duidelijker als "عصر" of "سر شب"?
- [ ] `c.leave.a`: "ژوئیه (جولای)": zijn Gregoriaanse maandnamen duidelijk voor deze lezers?
- [ ] `ui.genderHint`: Perzisch heeft geen geslachtsvormen. Wordt dit scherm voor fa wel getoond, en zo ja: klopt de tekst?
- [ ] `c.understood.q`, `c.understood.a`: "مرتب کن": leest dat als opruimen of als sorteren?
- Veiligheid (1): zie "Eerst nakijken" hierboven (`w.valbeveiliging`, `s.site.2`, `c.site.a`).

### `ar` — 24 A, ~89 B — 8 vragen

2072 teksten vergeleken (79 B verbeterd).

**Verbeterd (belangrijkste A):**

- p.call112, c.danger.a, c.doctor.o2: *اتصل بـ 112* (kan "hij belde 112" zijn) → met klinkertekens *اتَّصِلْ*.
- w.borg, s.housing.2, c.housing.\*: *التأمين* (verzekering) → *مبلغ الضمان* (borg).
- c.ask.b / .o2, c.understood.o2: *هزّ رأسك* (kan nee schudden zijn) → "knik ja".
- w.valbeveiliging: *حزام الأمان* (autogordel) → *حزام الحماية من السقوط*; w.verjaardag: *عيد الميلاد* (Kerstmis) → *يوم الميلاد*.
- c.illness.b: *يوما انتظار* (leest als één wachtdag) → "hoogstens twee wachtdagen"; #f-fouten (c.ww.w, c.texting.p met "Ali").

**Vragen voor een moedertaalspreker:**

- [ ] `c.texting.p#f`: zie "Eerst nakijken" hierboven.
- [ ] `c.findwork.b`: De slotzin "…معلومات عامة. لوضعك أنت: …" leest abrupt, ook in de andere juridische tips. Natuurlijker formuleren?
- [ ] `w.eigenrisico`, `c.insurance.b`: "التحمّل الذاتي": wordt dit begrepen, of is "المبلغ الذي تدفعه أولاً" beter?
- [ ] `c.hygiene.p#f`, `c.hygiene.s#f`, `c.hygiene.b#f`: "نعسانة" (slaperig, vrouw): standaardarabisch heeft liever "نعسى". Wat is duidelijker voor cursisten?
- [ ] `ui.certEarned`, `ui.certEarnedHint`, `ui.trialDone`: "حصلت / أنهيت" kan zonder klinkertekens "ik" of "jij" zijn. Acceptabel in de app?
- [ ] `w.veiligheidsschoenen`: "حذاء السلامة" is enkelvoud. Beter meervoud "أحذية السلامة"?
- [ ] `c.keeplearning.q`: "هل أتكلم معك بالإنجليزية؟": leest dit als aanbod ("Zal ik Engels met je praten?")?
- [ ] `c.client.b`, `c.service.b`: Uitleg bij «je»: "(أنتَ، غير رسمي)". Klinkerteken weghalen zodat het genderneutraal is?

### `ti` — 29 A, 93 B — 21 vragen

2152 teksten vergeleken (~20 B als vraag).

**Verbeterd (belangrijkste A):**

- c.cleansafe.b / .p: *ርሑብ* (breed) → *ርሑስ* (nat): "natte vloer".
- Veiligheidsopdrachten (p.call112, w.pasop, w.stop, s.danger.1, s.gear.1, s.hygiene.1) alleen mannelijk → vormen m / f / x.
- c.ask.\*, c.understood.o2: "hoofd bewegen" (kan nee schudden zijn) → "met je hoofd ja zeggen".
- c.no.p, s.agree.1, d.agree.a: verleden tijd bij weigeren ("ik kon niet") → "ik kan vandaag niet"; s.phone.2 las als "hij zet mijn telefoon uit".
- w.vakantiegeld + c.extra.\*: "pauzegeld" → "extra betaling voor de jaarlijkse vakantie"; c.contract.b: proeftijdregel (6 maanden – 2 jaar) rechtgezet.

**Vragen voor een moedertaalspreker:**

- [ ] `ui.theme`: "መልክዕ": natuurlijk voor de instelling "weergave" (licht/donker)?
- [ ] `ui.themeDark`: "ጸልማት" is een zelfstandig naamwoord ("duisternis"). Beter "ጸሊም" of een ander bijvoeglijk naamwoord?
- [ ] `ui.settingOn`, `ui.settingOff`, `ui.soundOn`, `ui.learnWritingHint`: "ክፉት / ዕጹው" ("open / dicht"): lezen laaggeletterden dit als "aan / uit" bij een schakelaar?
- [ ] `ui.backupLoad`: "ካብ ፋይል መልሶ / መልስዮ": duidelijk als "terugzetten uit bestand"?
- [ ] `ui.genderHint`: Staat in meervoud/beleefd, omdat het scherm komt vóór de keuze man/vrouw. Is dat goed?
- [ ] `w.telaat`: "ምድንጓይ": is er een beter genderneutraal woord voor "te laat"?
- [ ] `w.vakantiegeld`, `c.extra`: "ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ": de natuurlijke term voor vakantiegeld?
- [ ] `s.phone.2`, `s.service.3`, `c.cleansafe.p`: Ik-vormen kloppen en zijn natuurlijk? "ተሌፎነይ ከጥፍኦ እየ", "ነቲ ጣውላ ኣጽርዮ ኣለኹ", "ኣቐምጦ ኣለኹ".
- [ ] `c.ask.b`, `c.ask.o2`, `c.understood.o2`: Knikken als "ብርእስኻ «እወ» ምባል" ("met je hoofd ja zeggen"): natuurlijk? (Oude tekst kon als nee schudden gelezen worden.)
- [ ] `c.respect.b`: "ርእሲ ቁሩብ ምድናን": natuurlijk voor een begroetingsknikje?
- [ ] `c.boundaries.q`, `c.gossip.o2`: "ከምኡ ኣይትተሸገር" / "ከይትሽገር" lezen als "maak je geen zorgen", maar bedoeld is "doe niet zo moeilijk". Betere formulering?
- [ ] `w.slot`: "ቁልፊ" betekent sleutel én slot. Is dat OK voor een fietsslot?
- [ ] `w.intimidatie`: "ምህሳይ፡ ምፍርራሕ": klopt dit voor intimidatie?
- [ ] `c.leave.s`: "ክረምቲ" (regenseizoen) voor zomer(vakantie): is dat goed?
- [ ] `c.direct.b`, `c.service.b`: "ሕያዋይ / ሕያወይቲ" voor vriendelijk (was "ፍቕራዊ" = liefdevol): goed?
- [ ] `c.diploma.b`: "ከም ዝግምገም ክትገብሮ": natuurlijk voor "laten beoordelen"?
- [ ] `c.names.b`: "ሰባት ንብጾት ስራሕን ንሓለፍትን ብተለምዶ ብቀዳማይ ስሞም ይጽውዕዎም": natuurlijk?
- [ ] `ui.bram*`: De nieuwe ui.bram*-teksten (mascotte Bram) zijn na deze controle toegevoegd en nog niet nagekeken.
- Veiligheid (3): zie "Eerst nakijken" hierboven (`s.kitchen.3`, `c.kitchen.q`, `c.kitchen.s`, `c.kitchen.o3`; `s.danger.1`, `c.cleansafe.b`, `c.cleansafe.p`; `w.damp`).
