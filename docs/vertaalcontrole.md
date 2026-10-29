# Vertaalcontrole

Alle bestanden in `src/i18n/` zijn met AI gemaakt. Zet `reviewed: true` pas als een moedertaalspreker
het hele bestand heeft gecontroleerd. Hieronder de punten waar de vertaler zelf twijfelde.

## Algemeen (alle talen met grammaticaal geslacht)
Zinnen als "Ik ben nieuw", "Ik ben een nieuwe collega", "Ik ben ziek" en "Ik ben te laat" staan in de
mannelijke vorm (Arabisch, Pools, Oekraïens, Roemeens, Bulgaars, Tigrinya). Op termijn: varianten per geslacht.

Beleefde vragen aan een leidinggevende ("Kunt u dat herhalen?", "Kunt u langzamer praten?") gebruiken
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
De korte dialogen ("Wanneer begint je dienst?" → "Morgen om zeven uur.") gebruiken informeel "je", net als in het
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
- [x] ~~`ui.remindEvening`~~: niet meer in de app (weggehaald 29 oktober 2026).
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

## Nieuwe teksten (16 oktober 2026)

Sinds commit `fb98407` (15 oktober, na de blinde terugvertaling) zijn er teksten bijgekomen of veranderd, in alle
negen hulptalen. Ze zijn met AI vertaald en door geen mens nagekeken. In `vertaalcontrole-vloertaal.xlsx` staan ze per
taal direct onder de eerdere vragen, met in kolom "Bron" **"Nieuw sinds 15 okt 2026"**. Volgorde: veiligheid (rood),
"Goed om te weten" en contact, thema-namen en knoppen, dan de lesinhoud. Blauw "vraag" = echte twijfel (hieronder);
groen "nieuw" / "gewijzigd" = gewoon nakijken.

**Wat is er nieuw of veranderd**

- **Knoppen:** 8 thema-namen (`theme.*`), `ui.topicsUnit`, `ui.showDutch`, `ui.lastUpdated`, Bram stelt zich voor
  (`ui.bramIntro`, `ui.bramIntroHello`), de regiokeuze (`ui.region*`) en de Sociale kaart (`ui.socialMap*`).
  Meegenomen: 10 oudere `ui.bram*`-teksten en `ui.buildListen`, `ui.chatWhichQuestion`, `ui.reviewWaiting`; die
  waren nooit nagekeken (niet in de blinde terugvertaling).
- **Over Vloertaal:** nieuw `a.mission`, `a.bram`, `a.disclaimer` ("Goed om te weten") en `a.contact`; `a.free`
  zegt niet meer dat de app gratis is (dat staat nu in `a.mission`).
- **Taal-units** "In de winkel" (`u.shop`) en "Rekenen: tijd, geld, maten" (`u.numbers`): 4 lessen, 24 woorden,
  12 zinnen, 4 gesprekken, 4 werkvloertips, 4 uitlegzinnen (`*.a.why`), 2 herhaallessen.
- **Regio Zuid-Limburg:** unit `rg.zl.u` (2 lessen, 12 woorden, 6 zinnen, 2 gesprekken, 2 tips) en 14 categorieën
  van de Sociale kaart (`rg.cat.*`).
- **Meervoud:** in Pools, Oekraïens, Roemeens, Bulgaars (14–16 knoppen) en Arabisch (11) hebben teksten met `{n}`
  nu echte meervoudsvormen. Elke vorm staat in de xlsx op een eigen regel, met de getallen die bij die vorm horen.
- **Slotzin:** `c.housing.b`, `c.rights.b`, `c.warning.b`, `c.gethelp.b` en `c.newjob.b` eindigen nu met "vakbond,
  Juridisch Loket of FairWork"; `c.sick.b` en `c.insurance.b` kregen de gewone slotzin.
- **Inhoud:** 112 = levensgevaar, brand of een misdrijf dat nu gebeurt (`c.doctor.b`, `c.doctor.w`); overuren "zodat
  je ze op je loonstrook kunt controleren" (`c.extra.a.why`); "als die er is" bij de vertrouwenspersoon
  (`c.boundaries.b`); valbeveiliging (`fa`/`prs`) en natte vloer (`ti`) uit de vragen hierboven.
- **Niet bijgewerkt:** `s.translate.3` is in het Nederlands veranderd ("Kunt u in mijn telefoon spreken?" → "Wilt u
  even tegen mijn telefoon praten?"), maar de vertalingen volgden in alle negen talen nog de oude zin. ✅ aangepast
  16-10, zie hieronder.

**Aantallen per taal** (sleutels; tussen haakjes alle vormen, dus m/v en meervoud apart):

| Taal | Regels | Nieuw | Gewijzigd | Nooit nagekeken | Vragen |
|---|---|---|---|---|---|
| `ar` | 210 (332) | 173 | 23 + 1 bron | 13 | 5 |
| `ti` | 203 (269) | 173 | 16 + 1 bron | 13 | 5 |
| `fa` | 203 | 173 | 16 + 1 bron | 13 | 5 |
| `prs` | 203 | 173 | 16 + 1 bron | 13 | 6 |
| `uk` | 212 (265) | 173 | 26 + 1 bron | 12 | 4 |
| `tr` | 200 | 173 | 13 + 1 bron | 13 | 4 |
| `pl` | 214 (273) | 173 | 28 + 1 bron | 12 | 5 |
| `ro` | 214 (249) | 173 | 28 + 1 bron | 12 | 4 |
| `bg` | 214 (238) | 173 | 29 + 1 bron | 11 | 5 |

"Vragen" telt ook de twee vragen voor alle talen hieronder.

**Voor alle talen**

- [x] `s.translate.3`: opnieuw vertalen (zie hierboven). ✅ aangepast 16-10 (beleefd tegen een onbekende, met
  "even"; ook de Engelse bron in `work/en.json`: "Could you talk to my phone for a moment?"):
  `ar` "لو سمحت، هل يمكنك التحدث إلى هاتفي قليلاً؟" · `ti` "በጃኹም፡ ሓንሳብ ናብ ተሌፎነይ ክትዛረቡ ትኽእሉ ዶ?" ·
  `fa` "می‌شود لطفاً یک لحظه رو به گوشی‌ام صحبت کنید؟" (was تو, nu شما) · `prs` "لطفاً یک لحظه طرف تیلفون من گپ زده
  می‌توانید؟" · `uk` "Чи не могли б ви хвилинку поговорити в мій телефон?" · `tr` "Bir saniye telefonuma konuşur
  musunuz?" · `pl` "Czy może pan/pani przez chwilę mówić do mojego telefonu?" · `ro` "Ați putea să vorbiți puțin în
  telefonul meu?" · `bg` "Бихте ли поговорили за малко в телефона ми?". Geen gesprek of uitlegzin (`learn/*`) verwijst
  naar deze zin (`c.translate.a.why` gaat over het briefje).
- [x] `ui.socialMap`: in alle talen "kaart/map van hulp" (خريطة المساعدة, Mapa pomocy, Карта допомоги, Harta
  ajutorului, Yardım haritası, نقشهٔ کمک, ካርታ ሓገዝ …). Het is een lijst met loketten en telefoonnummers, geen kaart.
  Verwachten mensen een plattegrond? ✅ aangepast 16-10: "waar vind je hulp / hulpadressen" (max. 3 woorden). Engels
  "Social map" → "Where to get help"; Nederlands blijft "Sociale kaart". `ar` "جهات المساعدة" · `ti` "ቦታታት ሓገዝ" ·
  `fa` "نشانی‌های کمک" · `prs` "آدرس‌های کمک" · `uk` "Де знайти допомогу" · `tr` "Yardım adresleri" · `pl` "Gdzie
  szukać pomocy" · `ro` "Unde găsești ajutor" · `bg` "Адреси за помощ". (Het icoon 🗺️ is nog een kaart.)

**Vragen per taal**

- **`ti`**
  - [x] `s.hours.1`, `c.hours.a`, `rg.zl.s.1.2`, `c.hours.p`, `c.hours.w`: kloktijden staan weer in woorden
    ("ሰዓት ሸውዓተን ፍርቅን", "ሰዓት ዓሰርተ"). Eerder zijn uitgeschreven tijden vervangen door cijfers, omdat ze als
    Ge'ez-tijd gelezen kunnen worden (7 = 13:00). Deze unit gaat juist over tijden. Alleen cijfers? ✅ aangepast
    16-10, alleen cijfers: "ኣብ ሰዓት 7:30 እጅምር።", "ኣብ ሰዓት 16:15።", "ሰዓት 10:00 ቆጸራ ኣለኒ።", "…ማለት ቅድሚ ሰዓት 8:00
    ፍርቂ ሰዓት?", "«Half negen» ማለት ቅድሚ ሰዓት 9:00 ፍርቂ ሰዓት፡ 8:30 እዩ። …".
  - [ ] `theme.job`, `theme.rights`, `theme.sector`: vormen m / v / x ("ስራሕካ / ስራሕኪ / ስራሕኩም"). De x-vorm
    (meervoud/beleefd) staat er zolang er geen geslacht gekozen is. Natuurlijk als titel? En de vijf andere
    thema's als werkwoordelijk naamwoord ("ብድሕንነት ምስራሕ", "ብሓባር ምስራሕ")?
  - [ ] `ui.bram*` (12 teksten): toon van Bram (rustig, volwassen, collega).
- **`prs`**
  - [ ] `theme.job`: "وظیفهٔ شما". In Dari is وظیفه een baan, in het Iraans Perzisch "plicht, taak". Natuurlijk
    voor Afghaanse lezers (ook `w.baan`)?
  - [ ] `theme.rights`: "حقوق شما". Het Perzisch (`fa`) vermijdt حقوق omdat het ook "salaris" is; Dari zegt معاش
    voor salaris. Is "حقوق شما" hier duidelijk "je rechten"?
  - [x] `rg.zl.c.2.o2`: "سر خود را تکان بدهید" kan knikken of nee schudden zijn. Elders staat nu "به معنای بلی".
    ✅ aangepast 16-10: "سر خود را به معنای بلی تکان بدهید و فقط حدس بزنید که چه کنید." (zoals `c.ask.o2`)
  - [ ] `c.checkout.o3`: "یک قطی" voor één blikje; قطی is in de cursus ook "doos". Duidelijk?
- **`fa`**
  - [x] `ui.regionTitle`, `ui.regionHint`, `ui.socialMapHint`, `ui.socialMapWrong`: nieuwe knopteksten staan in تو,
    terwijl de rest van de schermen bij de eerste controle شما is geworden (ook `ui.bramIntro`: "همکار شما"). شما maken?
    Staat bij controle op 16-10 al in شما ("کجا زندگی می‌کنید؟", "…کجا بروید…", "…ایمیل بزنید."); niets veranderd.
  - [ ] `theme.rights`: "حق‌های شما" (om حقوق = salaris te vermijden). Natuurlijk als titel?
  - [x] `rg.zl.c.2.o2`: "سر تکان بده": knikken of nee schudden? ✅ aangepast 16-10: "به نشانهٔ تأیید سر تکان بده و
    فقط حدس بزن چه کار کنی." Nog niet gedaan, zelfde twijfel: `c.ask.o2` "سر تکان بده و سعی کن حدس بزنی." (In
    `c.understood.o2` maakt «ja, ja» het duidelijk.)
- **`ar`**
  - [x] `ui.streakGrew`, `ui.recordN`, `ui.tomorrowN`, `ui.wordsStrongerN` (en de `*Unit`-labels): de vorm voor 2
    zet het getal vóór de dualis ("2 يومان", "2 كلمتان"). Dubbel, of goed? Ook 11–99 ("11 يوماً") en 0 ("0 يوم") nakijken.
    ✅ aangepast 16-10: de vorm `two` is nu de dualis zonder cijfer, zoals in standaard-Arabisch en in de CLDR:
    "يومان على التوالي! واصل/واصلي هكذا." · "أفضل نتيجة لك: يومان" · "غداً: كلمتان" · "كلمتان أقوى", en ook
    `ui.wordsLearnedN` "تعلّمت كلمتين" en `ui.streakStopped` "توقفت سلسلتك عند يومين. …". De tests staan dit alleen toe
    voor Arabisch `two` (`tests/plural.test.ts`, `tests/i18n.test.ts`). Niet veranderd: de `*Unit`-labels ("يومان"
    onder een groot cijfer, als bijschrift), 11–99 ("11 يوماً", goed) en 0 ("0 يوم"); laten nakijken.
  - [ ] `s.checkout.1`, `s.checkout.2`, `c.shelves.a`: zinnen tegen een klant ("u") in de mannelijke vorm
    (تريد، تفضّل، معك). Goed voor elke klant, of beleefder/neutraal (حضرتك)?
  - [ ] `rg.zl.s.2.2`: "هل يمكن التكلم بالهولندية؟" is onpersoonlijk ("kan er Nederlands gesproken worden?").
    Duidelijk dat je de collega vraagt Nederlands te praten?
- **`pl`**
  - [ ] `ui.wordsLearnedN`, `ui.wordsStrongerN`, `ui.practiseMistakes`, `ui.skippedN`, `ui.freeDaysN`: nieuwe
    meervoudsvormen ("1 nauczone słowo / 5 nauczonych słów", "został 1 / zostały 2 / zostało 5"). Natuurlijk op
    een knop? (Dit vervangt de vraag over `ui.wordsStrongerOne` hierboven: de meervoudsvorm voor 1 gaat nu voor.)
  - [ ] `rg.zl.w.gemeentehuis`, `rg.zl.s.1.1`, `rg.zl.l.1`, `rg.cat.gemeente`: "urząd gminy" voor de gemeente van
    een stad als Maastricht. Zegt men daar niet "urząd miasta"?
  - [ ] `s.checkout.1`, `c.shelves.a`: "pan/pani" met schuine streep in zinnen tegen een klant. Leesbaar?
- **`uk`**
  - [ ] `ui.streakStopped`, `ui.wordsStrongerN`, `ui.wordsLearnedN`, `ui.recordN`: nieuwe meervoudsvormen met 1, 2,
    5 en 21 nakijken ("зупинилася на 1 дні", "{n} слово закріплено краще").
  - [ ] `rg.zl.c.1.s`, `rg.zl.c.1.o1`, `rg.zl.c.2.b`: "Маастрихт", "Лімбург" in het Cyrillisch, maar "Heerlen" en
    "Zuid-Limburg" in Latijnse letters (`rg.zl.c.1.a`). Overal één manier?
- **`tr`**
  - [x] `rg.zl.c.2.b`: "İşte birçok kişi…": "İşte" kan "hier is…" lezen; bij de eerste controle is dat in ~15
    teksten "İş yerinde" geworden. ✅ aangepast 16-10: "İş yerinde birçok kişi Limburg lehçesiyle konuşur."
  - [ ] `c.checkout.o3`: "bir kutu" voor één blikje bier; "kutu" is in de cursus "doos". Duidelijk?
- **`ro`**
  - [ ] `ui.dayStreak`, `ui.daysUnit`, `ui.lessonsUnit`, `ui.topicsUnit`: vanaf 20 "de" ("de zile la rând",
    "de lecții"). Natuurlijk als label los van het grote getal?
  - [x] `rg.zl.c.2.o2`: "Dai din cap" kan knikken of nee schudden zijn. Beter "Aprobi din cap"? ✅ aangepast 16-10:
    "Aprobi din cap și ghicești ce ai de făcut." Nog niet gedaan, zelfde twijfel: `c.ask.o2` "Dai din cap și încerci să
    ghicești." (In `c.understood.o2` maakt „ja, ja” het duidelijk.)
- **`bg`**
  - [ ] `s.checkout.3`, `c.checkout.p`, `c.checkout.b`: "лична карта" (alleen de identiteitskaart) naast "документ"
    in de titel en de andere teksten. Het Nederlandse "ID" is elk identiteitsbewijs. Overal "документ за самоличност"?
  - [x] `rg.zl.c.2.o2`: "Кимаш" (knikken). In Bulgarije is knikken van oudsher "nee". Duidelijk dat dit "doen alsof
    je het snapt" is? ✅ aangepast 16-10: "Кимаш утвърдително и просто гадаеш какво да правиш." ("je knikt
    instemmend"); de uitleg `rg.zl.c.2.w` eindigt nu met "Тук кимането значи „да, разбрах“." Zo ook in de werkvloertip
    "Vragen stellen is goed": `c.ask.b` "Ако кимаш утвърдително, без да разбираш, …", `c.ask.o2` "Кимаш утвърдително и
    се опитваш да познаеш.", `c.ask.w` + "Тук кимането значи „да“ или „разбрах“." Niet veranderd: `c.understood.o2`
    («ja, ja» maakt het duidelijk) en `c.respect.b` (кимване als groet, geen ja/nee).
  - [ ] `rg.zl.s.1.2`: "Имам час в десет часа": twee keer "час" (afspraak en uur). Natuurlijk?

## Uitdrukkingen en gezegden (`src/i18n/sayings/*.ts`, 16 oktober 2026)

Nieuw, vertaald door AI-agents, nog niet door moedertaalsprekers nagekeken. Zie
[`uitdrukkingen.md`](uitdrukkingen.md) voor de lijst.

- [ ] **"Letterlijk"** (`w.*.lit`, `zg.*.lit`): echt woord voor woord vertaald, niet vervangen door
      een uitdrukking uit de eigen taal. De vreemde letterlijke betekenis is juist de bedoeling.
- [ ] **De betekenis** (`w.*`, `zg.*.m`): klopt die, en is hij eenvoudig genoeg?
- [ ] **De situaties** (`zg.*.s`, `c.easy.s`, `c.plain.s`): de Nederlandse zin staat er letterlijk in,
      tussen aanhalingstekens.
- [ ] **Twijfelpunten van de vertalers:**
  - fa: de uitdrukkingen gebruiken شما (beleefd). De andere fa-uitleg (tips, werk) gebruikt vaak تو. Eén lijn kiezen?
  - prs: `tagSaying` en `u.sayings` gebruiken متل (spreekwoord). Is اصطلاح beter?
  - ar: `tagSaying` is تعبير (uitdrukking), niet مثل (leest zonder klinkertekens ook als "zoals").
  - ti: `w.tandvlees.lit` (tandvlees), `w.pijpenstelen.lit` (ፒፓ), `zg.zeil.lit` (ሸራ, zeil), `zg.pluis.lit` (ልስሉስ, "zacht" voor "pluizig"), `zg.zeil.o3` en `zg.batterij.lit` (ቻርጅ).
  - pl: `w.pijpenstelen.lit` zegt "pijpbuisjes" (cybuch is te zeldzaam).
  - uk, bg, ti, pl, ro: "coach" in `zg.waagt.s` (наставниця, наставничката, ኣሰልጣኒት, doradczyni, consiliera).

## Klanken (`src/i18n/sounds/*.ts`, 16 oktober 2026)

Nieuw, vertaald door een AI-agent, nog niet door moedertaalsprekers nagekeken. Woordparen die één
klank verschillen (man – maan, pak – bak): de twee woorden van een paar moeten een duidelijk andere
vertaling hebben.

- [ ] ti: `w.kl.moer` (ዳዶ, moer van een bout), `w.kl.pak` (ሱፍ, kostuum), `w.kl.hoed` (ባርኔጣ), `w.kl.zak`
      (ከረጺት), en de vrouwelijke gebiedende wijs in `s.shortlong.2` en `s.roundsounds.2`.
- [ ] prs: de zinnen gebruiken de enkelvoudige je-vorm (بگذار), de uitdrukkingen en het werkdeel de
      beleefde vorm (بگذارید). Eén lijn kiezen? En `w.kl.koud`: سرد of خنک?
- [ ] fa, ti, ro: bij `w.kl.maan` staat "(aan de hemel)", zodat het niet als "maand" gelezen wordt.
- [ ] "de hal" (`s.pbgk.2`) is vertaald als gang/corridor.

## Nieuw 16 oktober 2026: "Wie kan helpen" op het Hulp-tabblad (alle talen)

Vijf korte regels in `src/i18n/<taal>.ts`, met AI geschreven: `whoToCall`, `who112`, `whoLegal`,
`whoInspection`, `whoFairwork`. Graag nakijken, vooral Tigrinya en Arabisch (zonder werkwoord in
de man- of vrouwvorm geschreven). Ook nieuw: `stampLater` ("Komt straks terug", het stempel bij een
fout antwoord) en de zin over uitzendwerk en het minimumloon in `c.illness.b`.
Ook nieuw (16 oktober 2026): `c.unsafe.w` eindigt nu met "je werkgever mag je er niet voor straffen"
(was: "je komt niet in de problemen", een belofte die niemand kan doen), en het gesprekje van
`l.shift` (`c.shift.q`, `c.shift.a`, `c.shift.a.why`) gaat over de dienst in plaats van koffie.
En `c.ww.b`: "binnen een week na je eerste dag zonder werk" (was: "na je laatste werkdag"), zoals UWV en Werkregels het zeggen.
En twee foute antwoorden die nu geloofwaardig zijn: `c.direct.o3` ("Niets zeggen en de doos laten staan") en `c.gethelp.o3` ("Zeg dat hij moet wachten tot zijn contract afloopt").
En `a.contact.b` (Over, "Vraag of fout?") heeft een zin erbij: in een les kun je ook bovenaan op het vlaggetje "Melden" tikken, dan staat in de mail al waar je bent. Het woord "Melden" blijft Nederlands (zo staat het op de knop).
En `startFree` (de codepagina, "Geen code? Begin met de eerste lessen"): vervangt `tryLesson` en `trialDone`. Zonder code krijg je nu de sneak preview, de eerste les van elk thema.

## Nieuw 17 oktober 2026: een code vragen, en wat de app telt (alle talen)

- `unlockHint` (de kaart "Volledige versie" bij Instellingen en bij een onderwerp op slot) is herschreven: "Met de code gaan alle lessen open. Nog geen code? Vraag het je docent of coach, of mail ons:". Het mailadres staat eronder. Het oude "alleen het eerste onderwerp is open" klopte niet meer voor de sneak preview.
- `countHint` (Instellingen, "Anoniem meetellen") zegt nu ook dat de app ongeveer telt hoe lang lessen duren.
- Ook 17 oktober: `unlockHint` heeft een zin erbij, "De code is gratis." (de criticus: "Volledige versie" klinkt als iets om te betalen). Nieuw: `codeNotFull`, "Deze code opent niet de volledige versie. Vraag een nieuwe code." (een geldige code die niet alles opent, gaf eerst "Verkeerde code").

## Nieuw 17 oktober 2026: les Een ongeluk melden (alle talen)

Een nieuwe les in Veiligheid (`u.safety`), na "Gevaar!" (`l.danger`). Alles met AI vertaald en nog
niet door een moedertaalspreker gecontroleerd. Nieuwe ids:

- Les en woorden (`src/i18n/<taal>.ts`): `l.accident`, `w.gewond`, `w.bloeden`, `w.ehbodoos`, `w.bhver`,
  `w.ziekenhuis`, `w.gebeuren`; zinnen `s.accident.1` ("Mijn collega is gevallen."), `s.accident.2`
  ("Ik heb me gesneden."), `s.accident.3` ("Ik wil een ongeluk melden."); gesprekje `c.accident.q`
  ("Wat is er gebeurd?"), `c.accident.a` ("Hij is van de ladder gevallen.").
- Uitleg bij het gesprekje (`src/i18n/learn/<taal>.ts`): `c.accident.a.why`.
- Werkvloer-tip (`src/i18n/culture/<taal>.ts`): `c.accident`, `c.accident.b`, `c.accident.p`, `c.accident.s`,
  `c.accident.o1`, `c.accident.o2`, `c.accident.o3`, `c.accident.w`.

Graag nakijken:

- **BHV’er en EHBO** blijven in de tip Nederlands (zo heet het op het werk), met uitleg tussen haakjes.
  Als los woord (`w.bhver`) staat alleen de uitleg ("wie op het werk eerste hulp geeft"). Klopt die
  uitleg, en is hij niet te lang?
- **"Ik heb me gesneden"** (`s.accident.2`): Pools en Oekraïens in de man- en vrouwvorm (met een
  x-vorm "Skaleczyłem / skaleczyłam się"). Perzisch en Dari "خودم را بریده‌ام / خود را بریده‌ام" is
  letterlijk; misschien zegt men eerder "دستم را بریدم" (mijn hand). Tigrinya "ተቖሪጸ".
- **De collega** in `s.accident.1` en `c.accident.a` is een man (het gesprekje zegt "Hij"): overal
  mannelijk vertaald.
- **Dari**: شفاخانه (ziekenhuis), زینه (ladder), قطی کمک‌های اولیه (EHBO-doos), کمک‌رسان اولیه در
  کمپنی (BHV’er). Is dat Afghaans genoeg, en is کمک‌رسان gangbaar?
- **Tigrinya** (hele les): ቀዳማይ ረዲኤት (eerste hulp), ሳጹን ቀዳማይ ረዲኤት (EHBO-doos), ምድማይ (bloeden),
  ምኽሳት (gebeuren), ዝተጎድአ (gewond).
- **Arabisch**: مسؤول الإسعافات الأولية في الشركة voor BHV’er; de tip in man- en vrouwvorm.
- **Turks**: "ilk yardım görevlisi" voor BHV’er; "BHV’er’e" met Nederlandse naam en Turkse uitgang.
- **De juridische feiten** in `c.accident.b` en `c.accident.w` (een ernstig ongeval melden bij de
  Nederlandse Arbeidsinspectie; niet gestraft worden voor melden) laat een deskundige nakijken, zie
  `docs/juridische-check.md` (c.accident). Wordt de Engelse tekst aangepast, dan alle negen talen mee.

## Nieuw 17 oktober 2026: les Werken via een uitzendbureau (alle talen)

Een nieuwe les in Werk en contract (`u.contract`), na "Your contract" (`l.contract`). Alles met AI
vertaald en nog niet door een moedertaalspreker gecontroleerd. Nieuwe ids:

- Les en woorden (`src/i18n/work/<taal>.ts`, Engelse bron in `work/en.json`): `l.agency`,
  `w.uitzendkracht`, `w.intercedent`, `w.urenbriefje`, `w.opdracht`, `w.verlengen`, `w.uitbetalen`;
  zinnen `s.agency.1` ("Ik werk via een uitzendbureau."), `s.agency.2` ("Ik geef mijn uren door."),
  `s.agency.3` ("Wanneer stopt mijn opdracht?"); gesprekje `c.agency.q` ("Heb je je uren
  doorgegeven?"), `c.agency.a` ("Ja, gisteren in de app.").
- Uitleg bij het gesprekje (`src/i18n/learn/<taal>.ts`): `c.agency.a.why`.
- Werkvloer-tip (ook in `src/i18n/work/<taal>.ts`): `c.agency`, `c.agency.b`, `c.agency.p`, `c.agency.s`,
  `c.agency.o1`, `c.agency.o2`, `c.agency.o3`, `c.agency.w`.

Graag nakijken:

- **De opdracht** (de plaatsing bij een bedrijf) is lastig: Pools "zlecenie", Oekraïens
  "направлення", Roemeens "misiunea" (zo heet het in de Roemeense wet), Bulgaars "назначение",
  Arabisch "المهمة", Tigrinya "ዕማም", Perzisch en Dari "مأموریت کاری", Turks "görevlendirme".
  Overal met uitleg tussen haakjes. Begrijpt een uitzendkracht dit, of is "het werk bij dat
  bedrijf" duidelijker?
- **De intercedent** heeft in geen taal een vast woord: overal "de contactpersoon bij het
  uitzendbureau" (Pools "osoba kontaktowa w agencji pracy", Turks "ajanstaki irtibat kişisi",
  Arabisch "مسؤول التواصل في وكالة التوظيف", Perzisch "کارمند رابط در شرکت کاریابی", Dari
  "مسئول تماس در دفتر کاریابی"). In de tip staat "intercedent" tussen haakjes erbij.
- **Het urenbriefje**: Pools "karta godzin pracy", Oekraïens "табель годин", Roemeens "fișa de ore
  (pontajul)", Bulgaars "лист за отработените часове", Turks "çalışma saatleri formu". Gangbaar?
- **Uren doorgeven** (`s.agency.2`, `c.agency.q`): Arabisch "أُرسل ساعات عملي" (sturen; met damma, anders leest het als "stuur!"), Perzisch
  "اعلام می‌کنم", Dari "خبر می‌دهم" (zoals `w.doorgeven`), Tigrinya "እሕብር", Turks "bildiriyorum".
- **Gender**: de vraag `c.agency.q` en de situatie `c.agency.s` ("je hebt 38 uur gewerkt") hebben in
  het Pools en Oekraïens een man- en vrouwvorm, in het Bulgaars alleen de situatie ("си работил /
  работила"); de vraag "Подаде ли часовете си?" is voor beiden gelijk. Arabisch: de tip, de
  situatie en de keuzes in man- en vrouwvorm; de vraag "هل أرسلت ساعاتك؟" zonder klinkertekens
  voor beiden. Tigrinya: titel, vraag, tip, situatie, keuzes en uitleg in man- en vrouwvorm. Roemeens is
  hier overal genderneutraal.
- **"Zeg het zo"** ("Op mijn loonstrook staan te weinig uren.") is in alle talen genderneutraal
  vertaald. Tigrinya "ኣብ ወረቐት ደሞዘይ ዘሎ ሰዓታት ውሑድ እዩ።": natuurlijk genoeg?
- **Uitzend-cao** blijft overal Nederlands tussen haakjes; Pools, Oekraïens, Bulgaars, Arabisch en
  Tigrinya zeggen ervoor "collectieve arbeidsovereenkomst voor uitzendkrachten", Roemeens,
  Perzisch, Dari en Turks "een cao" (zoals in `c.contract.b`).
- **Dari**: کمپنی (bedrijf), ورق معاش (loonstrook), پول رخصتی (vakantiegeld), روزهای رخصتی,
  کنترول کردن, beleefd "شما". Perzisch (Iran) houdt شرکت en "تو". Afghaans genoeg?
- **Tigrinya** (hele les): ኤጀንሲ ስራሕ (uitzendbureau), ትካል (bedrijf), ተራኺቢ ሰብ (contactpersoon),
  ምንዋሕ (verlengen), ምኽፋል (uitbetalen).
- **De juridische feiten** in `c.agency.b` (het uitzendbureau is je werkgever; er is een cao voor
  uitzendkrachten; vakantiegeld en vakantiedagen) laat een deskundige nakijken, zie
  `docs/juridische-check.md` (c.agency). Wordt de Engelse tekst aangepast, dan alle negen talen mee.

## Na de kritische ronde (17 oktober): Een ongeluk melden en Werken via een uitzendbureau (alle talen)

Na een kritische lezing zijn deze teksten veranderd, in het Engels en in alle negen talen (met AI
vertaald, nog niet door een moedertaalspreker gecontroleerd):

- `c.agency.b` heeft een zin erbij, na de cao-zin: "You have a right to the same pay as workers of
  the company who do the same work." (gelijke beloning, zie `docs/juridische-check.md`). De les
  toont nu de zinnen 0, 2 en 4 (`TIP_LEADS`): het uitzendbureau is je werkgever, hetzelfde loon,
  je eigen urenlijst.
- `c.agency.o3` (fout antwoord): "Ask the boss at the company where you work to pay the 6 hours."
  (was: "Stop going to work."). Zo toetst de vraag dat het uitzendbureau betaalt.
- `s.agency.2` is nu "Wordt mijn opdracht verlengd?" (was "Ik geef mijn uren door."), zodat
  "verlengen" in een zin staat. `c.agency.q` in het Engels: "Have you handed in your hours?".
- **De opdracht**: Pools nu "projekt (praca w danej firmie)" ("zlecenie" las als een umowa
  zlecenie, een ander soort contract), ook in `s.agency.2` en `s.agency.3`. Perzisch "کار در یک
  شرکت مشخص (پروژه)" en Dari "کار در یک کمپنی معین (پروژه)" ("مأموریت" klonk als een dienstreis);
  de zinnen zeggen "کارم در این شرکت / کمپنی" (mijn werk bij dit bedrijf). Oekraïens
  "направлення" blijft (geen contractwoord, wel ook "verwijzing" bij de dokter): goed zo?
- `c.agency.q`: Pools "Zgłosiłeś / Zgłosiłaś swoje godziny?", Oekraïens "Ти подав / подала свої
  години?" (doorgeven = opgeven, niet doorsturen).
- `c.accident.b`: na de eerste zin "Working through an agency? Tell the agency too." (zoals in
  `c.sick.b`, dezelfde vertalingen), en de meldplicht zegt nu wie meldt: "The company where the
  accident happened must report a serious accident … (also if you work through an agency)". De
  les toont de zinnen 0 tot en met 3 (leidinggevende of BHV’er, ook het uitzendbureau, 112).
  Roemeens nu "rămâne cu o vătămare permanentă" (was "rămâne rănit pe viață").
- De situatie van `c.accident` is nieuw: rugpijn na het tillen en bang zijn je werk te
  verliezen (`c.accident.s`, `c.accident.o1`–`o3`), en `c.accident.w` zegt "Your employer is not
  allowed to punish you for reporting it". Oekraïens heeft in de situatie een man- en vrouwvorm
  ("пошкодив / пошкодила"), Arabisch en Tigrinya overal; Pools, Bulgaars en Roemeens zijn
  neutraal (tegenwoordige tijd).
- `c.accident.a` is nu "Hij is gevallen. Hij bloedt." (zo staat "bloeden" in de les, en het
  onbekende "ladder" is weg), met een nieuwe uitleg `c.accident.a.why`.
- `w.bhver` (de uitleg bij het woord): "the company emergency helper (first aid, fire,
  evacuation)", in alle talen. Het plaatje blijft 🧑‍🚒: ⛑️ is al de helm (`w.helm`) en 🆘 al
  "help" (`w.help`).
- Tigrinya `w.gebeuren` nu "ምግጣም (ምኽሳት)", zoals "ኣጋጢሙ" in het gesprekje.

Graag nakijken: Tigrinya "ዕማመይ ክናዋሕ ድዩ?" (`s.agency.2`) en "ካብ ህንጻ ምውጻእ" (evacuatie, in
`w.bhver`); Arabisch "أن يدفع لك 6 ساعات" in `c.agency.o3`.

## Nieuw 17 oktober 2026: les Opdrachten van je leidinggevende (alle talen)

Een nieuwe les in Samenwerken (`u.teamwork`), na "Agreements and saying no" (`l.agree`). Alles met
AI vertaald en nog niet door een moedertaalspreker gecontroleerd. Nieuwe ids:

- Les en woorden (`src/i18n/culture/<taal>.ts`, Engelse bron in `culture/en.json`): `l.task`,
  `w.taak`, `w.eerst`, `w.daarna`, `w.afmaken`, `w.snel`, `w.bijna`; zinnen `s.task.1` ("Wat moet
  ik eerst doen?"), `s.task.2` ("Ik ben klaar met deze taak."), `s.task.3` ("Kunt u het nog een
  keer laten zien?"); gesprekje `d.task.q` ("Ben je klaar?"), `d.task.a` ("Bijna. Nog vijf minuten.").
- Uitleg bij het gesprekje (`src/i18n/learn/<taal>.ts`): `d.task.a.why`.
- Werkvloer-tip (ook in `src/i18n/culture/<taal>.ts`): `c.task`, `c.task.b`, `c.task.p`, `c.task.s`,
  `c.task.o1`, `c.task.o2`, `c.task.o3`, `c.task.w`. Geen juridische tip: geen adviesregel, en
  niets voor `docs/juridische-check.md`.

Graag nakijken:

- **De taak** naast **de opdracht** (`w.opdracht`, de plaatsing via het uitzendbureau): in het
  Arabisch "المهمة" en in het Tigrinya "ዕማም" voor allebei; bij de opdracht staat de uitleg tussen
  haakjes, dus ze zijn uit elkaar te houden. Turks "görev, iş", Perzisch en Dari "کار، وظیفه",
  Pools "zadanie", Oekraïens "завдання", Roemeens "sarcina", Bulgaars "задачата".
- **Klaar zijn** (`s.task.2`, `d.task.q`, `c.task.p`): Pools en Oekraïens hebben een man-, vrouw-
  en beide-vorm voor "Ik ben klaar met deze taak." ("Skończyłem / skończyłam", "Я закінчив /
  закінчила") en een man- en vrouwvorm voor de vraag. Bulgaars bewust neutraal met de
  verleden tijd ("Приключих", "Приключи ли?") in plaats van "готов / готова". Roemeens ("Am
  terminat", "Ai terminat?") en Arabisch ("انتهيت", de vraag zonder klinkertekens) zijn voor beiden
  gelijk. Tigrinya: de vraag in man- en vrouwvorm ("ወዲእካ ዲኻ?" / "ወዲእኪ ዲኺ?"), de zin neutraal.
- **Bijna** (`w.bijna`, `d.task.a`): Dari "نزدیک است" (zoals in `c.cleaning.a`), Perzisch "تقریباً".
  Klinkt "نزدیک است. پنج دقیقهٔ دیگر." natuurlijk als antwoord?
- **De tip**: "Saying "ja" when you did not understand" is in het Pools, Oekraïens en Bulgaars
  neutraal omschreven ("choć nie wszystko rozumiesz", "хоча щось незрозуміло", "без да
  разбираш"), om geen man- en vrouwvorm nodig te hebben. Arabisch en Tigrinya: titel, tip,
  situatie en keuzes in man- en vrouwvorm. In de situatie ("je begreep maar de helft") hebben
  Pools, Oekraïens en Bulgaars een man- en vrouwvorm.
- **"Zeg het zo"** ("Klaar! Wat moet ik nu doen?") is overal genderneutraal: Pools/Oekraïens/
  Bulgaars "Gotowe! / Готово!", Arabisch "انتهيت!", Tigrinya "ወዲአ!", Turks "Bitti!", Perzisch
  "تمام شد!", Dari "خلاص شد!". Turks "Sıradaki iş ne?": goed, of liever "Sıradaki görev ne?"?
- **De Nederlandse vraag** in de beste keuze ("Kunt u het nog een keer laten zien?") en "ja" blijven
  overal Nederlands, tussen de aanhalingstekens van elke taal.
- **Dari**: "شما" overal (ook in de vraag "کار شما خلاص شد؟", terwijl het Nederlands "je" zegt),
  تیز (snel), خلاص (klaar), هدایات (instructies). Perzisch (Iran) houdt "تو", تند en تمام.
  Afghaans genoeg?
- **Tigrinya** (hele les): ዕማም (taak), ቅድም (eerst), ድሕሪኡ (daarna), ምውዳእ (afmaken), ቀልጢፉ (snel),
  ዳርጋ (bijna), ተቖጻጻሪ (leidinggevende, zoals in `w.leidinggevende`). "ክልተ ግዜ ከርእዩ ይመርጹ" (in
  `c.task.w`, "laten het liever twee keer zien"): duidelijk?
- **Arabisch** `c.task.w`: "يفضّل معظم المشرفين أن يعرضوا الأمر مرتين" ("het twee keer laten
  zien"); is "يشرحوا" (uitleggen) natuurlijker?

## Nieuw 17 oktober 2026 (avond): na de kritische ronde "eerste week"

- `bramRested` (Bram op het beginscherm): "Gisteren was je vrije dag. Je reeks gaat door." Eerst werd een vrije dag zonder woord gebruikt.
- `remindEvent`: de herinnering in de agenda krijgt achter de Nederlandse titel ook de hulptaal: "Tijd voor je Nederlands (10 minuten)".
- Dari: "code" stond op de codepagina op twee manieren (کد en کود). Nu overal کد, zoals in de oudere teksten.

## 17 oktober 2026: na de NT2-taalcontrole

Een NT2-docent las 20 lessen na: "zeer goed, kort en dicht bij de werkvloer". Verwerkt:
- Spelling: `w.ziekmelden` "ziekmelden" en `w.betermelden` "betermelden" (één woord, Woordenlijst). De opnames blijven: het klinkt hetzelfde, alleen de tekst in `public/audio-el/voices.json` is aangepast.
- Engels nauwkeuriger (de hulptalen zijn daaruit vertaald; kijk of ze mee moeten): `s.understand.2` "Could you speak more slowly?", `s.contract.3` "Which collective agreement applies to me?", `s.findwork.1` "I want to apply for a job.", `w.boven` "up, above", `s.roundsounds.1` "Tighten the nut well."
- `c.task.p` "Klaar! Wat moet ik nu doen?" (was "Wat is de volgende taak?", te schools), in 9 talen.

**Nog te doen zodra er weer opgenomen kan worden** (deze zinnen hebben nu een opname; een nieuwe tekst valt tot dan terug op de telefoonstem):
- `s.boundaries.1` "Raak me niet aan, alstublieft." → "Raak me niet aan." (de rest van de les zegt "je"; een grens zeg je stevig, zonder "alstublieft").
- `c.texting.q/a` "Kun je zaterdag een extra dienst draaien?" → "Ja, ik reageer meteen in de app." past niet als paar. Voorstel: "Zie je de extra dienst in de app?" → "Ja, ik reageer meteen."
- Mogelijke nieuwe zinnen: "Is dit goed zo?", "Hoe zeg je dat in het Nederlands?", "Mag ik even naar de wc?", "Ik weet het niet."

## Nieuw 18 oktober 2026: lessen De eerste dag: je weg vinden en Dit heb ik nog niet geleerd (alle talen)

Twee nieuwe lessen: in Eerste werkdag (`u.firstday`), na "People at work" (`l.people`), en in Veiligheid
(`u.safety`), na "Report an accident" (`l.accident`). Daarnaast een zin erbij in twee bestaande tips.
Alles met AI vertaald en nog niet door een moedertaalspreker gecontroleerd. Nieuwe ids:

- Lessen en woorden (`src/i18n/<taal>.ts`, Engelse bron in `src/content/curriculum.ts`): `l.arrive`,
  `w.ingang`, `w.receptie`, `w.kantine`, `w.kleedkamer`, `w.buddy`, `w.vinden`; zinnen `s.arrive.1`
  ("Bij wie moet ik me melden?"), `s.arrive.2` ("Ik kan de kleedkamer niet vinden."), `s.arrive.3`
  ("Wie is mijn buddy vandaag?"); gesprekje `c.arrive.q` ("Goedemorgen, waarvoor komt u?"),
  `c.arrive.a` ("Ik ben nieuw. Ik begin vandaag."). En `l.notyet`, `w.nogniet`, `w.mogen`,
  `w.proberen`, `w.voordoen`, `w.gevaarlijk`, `w.zeker`; zinnen `s.notyet.1` ("Dit heb ik nog niet
  geleerd."), `s.notyet.2` ("Ik heb nog geen uitleg gehad."), `s.notyet.3` ("Mag ik dit al alleen
  doen?"); gesprekje `c.notyet.q` ("Probeer het maar, het is makkelijk."), `c.notyet.a` ("Kun je het
  eerst voordoen?").
- Uitleg bij de gesprekjes (`src/i18n/learn/<taal>.ts`): `c.arrive.a.why`, `c.notyet.a.why`.
- Werkvloer-tips (`src/i18n/culture/<taal>.ts`, Engelse bron in `culture/en.json`): `c.arrive`, `c.notyet`,
  elk met `.b`, `.p`, `.s`, `.o1`–`.o3` en `.w`. `c.notyet.b` noemt de plicht van de werkgever om
  uit te leggen hoe je veilig werkt (art. 8 Arbowet): zie `docs/juridische-check.md` (c.notyet).
- Gewijzigd: `c.gear.b` (een zin erbij: "Gear that does not fit does not protect you well, so ask for
  your size: "Heeft u dit in mijn maat?"") en `c.texting.b` (`src/i18n/work/<taal>.ts`, een zin voor
  de slotregel: "To swap a shift, your supervisor or the planner must agree first: "Vraag het eerst aan
  je leidinggevende.""). De opgenomen "Zeg het zo"-zinnen van beide tips bleven gelijk.

Graag nakijken:

- **Melden** is hier "je melden" (aankomen, inchecken), niet "iets melden" zoals in `w.melden`
  ("to report", `l.gethelp`). Daarom vertaalt `s.arrive.1` het aankomen: Arabisch "أسجّل حضوري",
  Tigrinya "ክቐርብ", Perzisch en Dari "خود را معرفی کنم", Oekraïens "звернутися", Turks "Geldiğimi kime
  bildirmeliyim?", Pools "zgłosić się", Roemeens "să mă prezint", Bulgaars "да се явя". Duidelijk?
- **De buddy** heeft in geen taal een vast woord: Arabisch "الزميل المرافق", Tigrinya "ሓጋዚ ብጻይ",
  Perzisch en Dari "همراه", Oekraïens "наставник, бадді", Turks "rehber iş arkadaşı", Pools "opiekun,
  buddy", Roemeens "colegul îndrumător", Bulgaars "наставникът". In de tip staat "buddy" tussen haakjes
  erbij. Is "наставник" / "opiekun" (begeleider, mentor) niet te zwaar voor een collega die helpt?
- **De ingang en de poort**: in de situatie is de poort dicht (Arabisch "البوابة", Tigrinya "ኣፍ-ደገ",
  Perzisch "در", Dari "دروازه", Oekraïens "ворота", Pools "brama", Roemeens "poarta", Bulgaars
  "портата", Turks "kapı"). In het Dari is "دروازه" ook een deur, en `w.ingang` "دروازهٔ ورود": klopt
  dat onderscheid? Turks "kapı" is zowel poort als deur.
- **De intercom**: Arabisch "جهاز اتصال داخلي", Tigrinya "ኢንተርኮም", Perzisch "آیفون" (zo heet het in
  Iran), Dari "زنگ با بلندگو (انترکام)", Oekraïens, Pools en Bulgaars "домофон / domofon", Roemeens
  "interfon", Turks "diyafon". Gangbaar?
- **De kantine**: Arabisch "المقصف، مطعم العاملين", Tigrinya "መመገቢ ሰራሕተኛታት (ካንቲን)", Perzisch
  "غذاخوری (سلف)", Dari "طعام‌خانه (کانتین)", Turks "yemekhane", Pools "stołówka", Oekraïens "їдальня",
  Roemeens "cantina", Bulgaars "столът". **De kleedkamer**: Dari "اتاق تبدیل لباس", Perzisch "رختکن".
- **"Waarvoor komt u?"** (`c.arrive.q`, aan de bezoeker) is overal beleefd en genderneutraal: Pools "w
  jakiej sprawie?", Oekraïens "ви з якого питання?", Roemeens "cu ce treabă veniți?" (te los?),
  Bulgaars "по какъв въпрос идвате?", Tigrinya meervoud "መጺእኹም", Arabisch "ما سبب حضورك؟" (zonder
  klinkertekens voor beiden). Het antwoord `c.arrive.a` heeft in het Arabisch, Tigrinya, Oekraïens,
  Pools, Roemeens en Bulgaars een man- en vrouwvorm ("nieuw").
- **De les- en tiptitel van l.notyet** zijn in het Pools, Oekraïens en Bulgaars onpersoonlijk ("Tego
  mnie jeszcze nie nauczono", "Цього мене ще не навчили", "Това още не са ме учили": "dat hebben ze me
  nog niet geleerd"), om geen man- en vrouwvorm nodig te hebben; de zin `s.notyet.1` zelf heeft die wel
  ("nauczyłem / nauczyłam", "навчився / навчилася", "научил / научила"). "Zeg het zo" (`c.notyet.p`):
  Pools met man- en vrouwvorm, Oekraïens en Bulgaars onpersoonlijk. Natuurlijk zo?
- **Alleen** in `s.notyet.3` ("Mag ik dit al alleen doen?") is in het Pools, Oekraïens, Roemeens en
  Bulgaars gegendered ("sam / sama", "самому / самій", "singur / singură", "сам / сама"). "Al" is
  vertaald als "nu / al" (Arabisch "الآن", Turks "artık", Pools "już").
- **Voordoen** (`w.voordoen`, `c.notyet.a`): Arabisch "يُري كيف (يفعله أمامك أولاً)", Turks "yaparak
  göstermek", Perzisch en Dari "عملاً نشان دادن", Pools "pokazywać (robiąc to najpierw samemu)",
  Tigrinya "ብተግባር ምርኣይ". Is het verschil met "laten zien" (`w.latenzien`) duidelijk?
- **Zeker** (`w.zeker`): Roemeens "sigur (de ceva), convins", omdat "sigur" al "veilig" (`w.veilig`)
  is. Arabisch "متأكد، أكيد", Turks "emin".
- **De situatie van c.notyet**: de leidinggevende is in alle talen een man ("Przełożony mówi",
  "Керівник каже", "مشرفك يقول"), en de app laat er nu ook een man bij zien (`speaker: 'm'`). "Je hebt
  nog nooit een heftruck bestuurd" heeft in het Arabisch, Tigrinya, Oekraïens, Pools en Bulgaars een
  man- en vrouwvorm. Pools `c.notyet.o1` zegt "dat je het nog niet kunt" ("jeszcze tego nie umiesz"),
  neutraal.
- **"nog niet geleerd"** en **"ja"** blijven in de tip en de keuzes overal Nederlands, tussen de
  aanhalingstekens van elke taal.
- **c.gear**: "Heeft u dit in mijn maat?" blijft Nederlands. Turks "beden" (kledingmaat; voor schoenen
  zeg je "numara"): goed genoeg? Pools "Niedopasowany sprzęt", Oekraïens "Засоби захисту не твого
  розміру".
- **c.texting**: "de planner" is Arabisch "مسؤول التخطيط", Tigrinya "እቲ መደብ ዘውጽእ ሰብ", Perzisch
  "برنامه‌ریز", Dari "مسئول تقسیم اوقات", Oekraïens "планувальник", Turks "planlamacı", Pools
  "planista", Roemeens "planificatorul", Bulgaars "човекът, който прави графика". In het Arabisch,
  Perzisch en Dari staat de punt van "Vraag het eerst aan je leidinggevende" na het sluitende
  aanhalingsteken, anders telt de app de zin samen met de volgende (de les toont dan andere zinnen).
- **Dari**: "شما" overal, کمپنی, دفتر کاریابی, مصئون, تعمیر (gebouw), "پیدا کرده نمی‌توانم". Perzisch
  (Iran) houdt "تو", شرکت کاریابی, ایمن. Afghaans genoeg?
- **Tigrinya** (beide lessen): ገና (nog niet), ምፍቃድ (mogen), ምፍታን (proberen), ሓደገኛ (gevaarlijk),
  ርግጸኛ (zeker), መእተዊ (ingang), መቐበሊ ኣጋይሽ (receptie), ክፍሊ ምቕያር ክዳን (kleedkamer), ምርካብ (vinden),
  "እዚ ገና ኣይተማሃርክዎን" (dit heb ik nog niet geleerd). Graag de spelling en de vrouwvormen nakijken.

### Bijgewerkt 18 oktober 2026, na een NT2-review van deze twee lessen

Een NT2-docent en een criticus lazen `l.arrive`, `l.notyet` en de tips `c.arrive`, `c.notyet`,
`c.texting` en `c.gear`. Wat er veranderde (alle talen, weer met AI vertaald en nog niet door een
moedertaalspreker gecontroleerd):

- **`c.arrive.q`** is nu "Goedemorgen, waar komt u voor?" (was "waarvoor komt u?"); de vertalingen
  bleven, behalve Roemeens "Bună dimineața, în ce problemă veniți?" (was "cu ce treabă", te los) en
  Tigrinya "ደሓን ሓዲርኩም፡ ብምንታይ ጉዳይ ኢኹም መጺእኹም?" ("voor welke zaak"). **Tigrinya graag door een
  moedertaalspreker laten nakijken.**
- **`w.zeker` is weg** (de les gebruikte het nergens); in de plaats `w.uitleg` "de uitleg" (het woord van
  `s.notyet.2`): Arabisch "الشرح", Tigrinya "መብርሂ", Perzisch en Dari "توضیح", Oekraïens "пояснення", Turks
  "açıklama", Pools "wyjaśnienie", Roemeens "explicația", Bulgaars "обяснението". Klopt het lidwoord
  (Roemeens en Bulgaars bepaald, de rest zonder)?
- **Tigrinya `w.mogen`** is nu "ፍቓድ ምርካብ (ይፍቀደኒ)" ("toestemming krijgen (het is me toegestaan)"; was
  "ምፍቃድ (ይፍቀድ)", dat is "toestaan"). **Graag door een moedertaalspreker laten nakijken.**
- **De intercom**: Arabisch nu "جرس بسمّاعة (إنترفون)" in `c.arrive.s` en, bepaald, "الجرس بالسمّاعة
  (الإنترفون)" in `c.arrive.w` (die bepaalde vorm graag nakijken); Tigrinya "ደወል ምስ መዛረቢ (ኢንተርኮም)";
  Perzisch "آیفون (زنگ در)" (in Iran heet een intercom "آیفون", maar dat lijkt op de telefoon).
- **Arabisch `c.arrive.p`**: "…إلى مَن يجب أن أذهب؟" (was "عند من": bij wie zijn, niet naar wie gaan).
- **Bulgaars `c.arrive.w`** heeft nu een vrouwvorm ("Когато кажеш коя си").
- **Pools** les `l.notyet` "Jeszcze mnie tego nie nauczyli" en tip `c.notyet` "Nikt cię jeszcze tego
  nie nauczył? Powiedz to" (minder stijf dan "nauczono"); **Roemeens** tip `c.notyet` "N-ai învățat
  încă? Spune asta".
- **Dari `c.notyet.a.why`**: "… جواب مصئون این است که بخواهید اول برای شما نشان بدهند." (de lerende vraagt
  het zelf).
- **`c.texting.b`**: de Nederlandse zin is nu die van de lerende zelf: "To swap a shift, your
  supervisor or the planner must agree first, so ask: "Mag ik mijn dienst ruilen?"" (was "Vraag het
  eerst aan je leidinggevende.", onvertaald en zonder duidelijke spreker). Per taal "dus vraag": Arabisch
  "لذلك اسأل / اسألي", Tigrinya "ስለዚ ሕተት / ሕተቲ", Perzisch "پس بپرس", Dari "پس بپرسید", Oekraïens "тож
  запитай", Turks "bu yüzden sor", Pools "więc zapytaj", Roemeens "așa că întreabă", Bulgaars "затова
  питай". De voorbeeldboodschap ("Hoi Mark, … Sorry! Groet, Ali") staat in de les nu op één regel: de
  app knipt een tekst niet meer binnen aanhalingstekens.
- **`c.gear.b`**: "Heb je dit ook in mijn maat?" (was "Heeft u dit in mijn maat?"; op de werkvloer
  zeg je "je").
- **`c.notyet.b`**: "The company where you work must explain …" (was "Your employer": een uitzendkracht
  denkt dan aan het bureau) en de hele zin "Dit heb ik nog niet geleerd" (was alleen "nog niet
  geleerd"). Arabisch "الشركة التي تعمل / تعملين فيها", Tigrinya "እቲ እትሰርሓሉ / እትሰርሕሉ ትካል", Perzisch
  "شرکتی که در آن کار می‌کنی", Dari "کمپنی‌ای که در آن کار می‌کنید", Oekraïens "Фірма, де ти працюєш",
  Turks "Çalıştığın şirket", Pools "Firma, w której pracujesz", Roemeens "Firma la care lucrezi",
  Bulgaars "Фирмата, в която работиш". **Tigrinya-vrouwvorm graag nakijken.**
- **De goede antwoorden zijn korter** (ze waren steeds het langste): `c.arrive.o1` "Ring, say your name
  and that you start today." (het bureau staat al in de tip zelf) en `c.notyet.o1` "Say you have not
  learned it. Ask for instruction."; `c.notyet.o2` is iets langer: "Drive slowly and carefully, just
  this once." In alle talen; in het Tigrinya "ደውል፡ ስምካን ሎሚ ከም እትጅምርን ንገር።", "ከም ዘይተማሃርካዮ ንገር።
  መምርሒ ሕተት።" en "… ቀስ ኢልካን ተጠንቂቕካን ዘውር።", met de vrouwvormen: **graag nakijken.**
- **De zinnen bouwen** accepteert nu ook een tweede goede volgorde: "Wie is vandaag mijn buddy?" naast
  "Wie is mijn buddy vandaag?" en "Ik heb dit nog niet geleerd." naast "Dit heb ik nog niet geleerd."
  (alleen Nederlands, geen vertaling).
- **Geen plaatje meer** bij `w.proberen` (🤞 zegt "hopen dat het goed gaat", het foute antwoord van de
  situatie) en `w.voordoen` (🧑‍🔧 lijkt "monteur").

## Nieuw 19 oktober 2026: onderwerp Slimme apps en AI (alle talen)

Een nieuw onderwerp bij Je baan (`u.ai`, "Slimme apps en AI"), achteraan in de route (na Rekenen),
alleen in de volledige versie. Vier lessen: `l.aihelp` (AI als hulp), `l.aiprivate` (wat je niet
deelt), `l.aifake` (nep of echt) en `l.aiplan` (als een app beslist). Alles met AI vertaald en nog
niet door een moedertaalspreker gecontroleerd.

- Les, woorden, zinnen en gesprekjes (`src/i18n/work/<taal>.ts`, Engelse bron in `work/en.json`):
  `u.ai`, `l.aihelp`, `l.aiprivate`, `l.aifake`, `l.aiplan`; woorden `w.ai`, `w.chatbot`,
  `w.antwoord`, `w.meekijken`, `w.kloppen`, `w.zeker`, `w.persoonlijk`, `w.gegevens`,
  `w.wachtwoord`, `w.typen`, `w.opslaan`, `w.inloggen`, `w.echt`, `w.stem`, `w.filmpje`,
  `w.ophangen`, `w.nummer`, `w.haast`, `w.planning`, `w.mens`, `w.computer`, `w.tempo`,
  `w.automatisch`, `w.besluit`; zinnen `s.aihelp.1-3`, `s.aiprivate.1-3`, `s.aifake.1-3`,
  `s.aiplan.1-3`; gesprekjes `c.aihelp.q/a`, `c.aiprivate.q/a`, `c.aifake.q/a`, `c.aiplan.q/a`.
- Uitleg bij de gesprekjes (`src/i18n/learn/<taal>.ts`): `c.aihelp.a.why`, `c.aiprivate.a.why`,
  `c.aifake.a.why`, `c.aiplan.a.why`.
- Werkvloer-tips (ook in `src/i18n/work/<taal>.ts`): `c.aihelp`, `c.aiprivate` (met de regel "Regels
  verschillen per bedrijf"), `c.aifake`, `c.aiplan` (met de adviesregel; zie ook
  `docs/juridische-check.md`), elk met `.b`, `.p`, `.s`, `.o1-3` en `.w`.

Graag nakijken:

- **"AI"**: Oekraïens en Bulgaars "ШІ" en "ИИ" (de gewone afkorting), Turks "yapay zekâ", Perzisch,
  Dari en Arabisch "هوش مصنوعی" / "الذكاء الاصطناعي", Tigrinya "ሰብ-ሰርሖ ኣእምሮ (AI)" (in de lessen
  verder kort "AI"), Pools en Roemeens "AI". Begrijpt een lerende dit, of liever overal "AI"?
- **De chatbot**: Turks "sohbet robotu", Arabisch "روبوت الدردشة", de rest "chatbot / чат-бот /
  чатбот / چت‌بات / ቻትቦት". Natuurlijk genoeg?
- **Vakantiegeld** (`c.aihelp.s`, `c.aihelp.w`): Pools "dodatek urlopowy", Oekraïens "відпускні",
  Bulgaars "добавка за отпуск", Roemeens "bani de concediu", Turks "tatil parası", Perzisch "پول
  تعطیلات", Dari "پول رخصتی", Arabisch "بدل العطلة", Tigrinya "ገንዘብ ዕረፍቲ"; in de situatie staat
  "(vakantiegeld)" erachter.
- **Man- en vrouwvormen**: Pools, Oekraïens, Bulgaars en Roemeens in "Heb je dit zelf geschreven?"
  (`c.aihelp.q`, "sam/sama", "сам/сама", "singur/singură") en "Ik hang op en bel zelf terug."
  (`s.aifake.2`, `c.aifake.p`; Roemeens neutraal "sun eu înapoi"). Oekraïens `c.aifake.b` "Будь
  обережним / обережною", Roemeens `c.aifake.b` "Fii atent / atentă". Arabisch en Tigrinya: tips,
  situaties, keuzes en de gesprekjes die "je" zeggen in man- en vrouwvorm. Arabisch `c.aiprivate.o3`
  in de vrouwvorm "صديقة" (een vriendin): goed, of liever overal "صديق"?
- **Het oplichtersbericht** (`c.aifake.q`, "Hoi, dit is mijn nieuwe nummer. Kun je snel geld
  sturen?"): bewust zonder "mam", zodat het voor iedereen past. Turks `c.aifake.a` "Önce eski
  numaranı arayacağım." (eerst bel ik je oude nummer); Tigrinya neutraal "ቅድም ናብቲ ናይ ቀደም ቁጽሪ
  እድውል።".
- **Dari**: "شما" overal, ook in de gesprekjes, zoals in de andere lessen. Woorden: تقسیم اوقات
  (rooster), کمپیوتر, سکنر, کود (code), تیلفون. Afghaans genoeg?
- **Tigrinya** (hele onderwerp, **graag door een moedertaalspreker laten nakijken**): ቻትቦት, መሕለፊ ቃል
  (wachtwoord), ስልኪ ምዕጻው (ophangen), መደብ ስራሕ (rooster/planning), ውሳነ (besluit), ኣውቶማቲክ, ስካነር.
- **Juridisch** (`c.aiplan`): "you may ask a person to look at it again and explain it" volgt de AVG
  (art. 22 lid 3 en art. 13–15); in alle talen even voorzichtig vertaald ("mag vragen", niet "heeft
  recht op"). Zie `docs/juridische-check.md`.

## Tweede AI-controle (29 oktober 2026)

Opnieuw zonder moedertaalspreker. Per taal zocht een agent naar **duidelijke** fouten (A = verkeerde betekenis, B = verkeerde vorm, variant of spelling); een tweede, onafhankelijke agent keurde elke wijziging. Twijfel is niet aangepast maar staat hieronder als vraag (in het Engels, zoals de agents ze schreven). `reviewed` blijft `false`.

- **Diep** (elke tekst): Tigrinya en Dari.
- **Licht** (de schermteksten en alle 241 teksten die na de controle van 16 oktober zijn toegevoegd of veranderd): de andere zeven talen.
- **Teruggedraaid vóór het doorvoeren:** 13 voorstellen voor de Over-pagina (`a.*`, Dari en Bulgaars). De agents kregen daar per vergissing de Werkregels-tekst als bron; de huidige vertalingen kloppen met de echte bron.
- **Mechanisch nagelopen** (script, alle talen): placeholders, Arabische ي/ك in Perzisch en Dari, Russische letters in het Oekraïens, Engelse resten, gelijke m/v-vormen, twee gelijke vertalingen in één les. Niets gevonden behalve bewust Nederlandse termen.

### Doorgevoerd (35 wijzigingen, plus `betermelden` als één woord in alle talen)

- **Tigrinya** (2026 teksten gelezen): `c.aifake.q` (m); `c.aiplan.b` (f); `c.aiplan.b` (m); `c.aiprivate.o3` (f); `c.bike.b` (f); `c.bike.b` (m); `c.limits.o2` (f); `c.limits.o2` (m); `c.shift.a`; `codeAccepted`.
  - `c.shift.a`: The clock time is spelled out, so it can be read as Ge'ez/Eritrean time (7 = 13:00). The October fix switched clock times to digits, and this one was missed (s.shift.1 already uses 7:00).
  - `c.limits.o2`: Without ኢኻ the clause has no 'you' and reads 'lest it seem weak to him'; it does not say that people would think the learner is weak.
  - `c.bike.b`: "ዝወር" is not a form of ዘወረ (to ride); the imperative is ዘውር (the same text uses እናዘወርካ).
  - `c.aifake.q`: A letter of the verb ሰደደ (send) is missing: "ክትሰደለይ" should be ክትሰድደለይ, matching the f form ክትሰድድለይ.
  - `c.aiplan.b`: "ንኣፕ ወይ ንኮምፒተር የዳልውዎ" says companies make the roster "for the app/computer"; EN means the app or computer makes it, so ብኣፕ ወይ ብኮምፒተር.
  - `codeAccepted`: ተቐቢሉ is active: 'the code has received (something)'. It does not mean 'was accepted'. NL says 'De code is goed'.
- **Dari** (1842 teksten gelezen): `c.accident.o3`; `c.aiprivate.a.why`; `c.aiprivate.a`; `c.aiprivate.b`; `d.task.a.why`; `w.opslaan`; `w.tandvlees.lit`.
  - `c.accident.o3`: Iranian نه for 'or not'; Dari uses نی (as in the rest of the Dari texts).
  - `d.task.a.why`: Iranian نه in a .why text; the .why block was moved to Dari نی elsewhere.
  - `c.aiprivate.a.why`: Quoted 'no' is Iranian «نه»; Dari 'no' is «نی» (as in d.agree.a.why, c.certs.a.why).
  - `w.tandvlees.lit`: بیخ دندان means the root of the teeth, not the gums (tandvlees); the literal gloss should name the gums.
  - `w.opslaan`: In Dari, نگه کردن reads as 'to look'. The October pass changed it to نگه داشتن in 14 other keys; this one was missed.
  - `c.aiprivate.a`: Here نه is the stand-alone 'no/not' (not the 'X, not Y' contrast left open as a question). In Dari that is نی, as in c.gossip.a and c.boundaries.a.
  - `c.aiprivate.b`: 'Or not' is یا نه in Iranian Persian and یا نی in Dari, as in c.boundaries.b (خوب است یا نی).
- **Arabisch** (690 teksten gelezen): `c.aiprivate.a`; `c.illness.b` (f); `c.illness.b` (m).
  - `c.aiprivate.a`: "أفضّل لا" is a calque of "I'd rather not". In MSA, أفضّل needs a following clause (ألّا أفعل).
  - `c.illness.b`: The quoted Dutch term must stay as in the source: "betermelden", not "beter melden".
- **Perzisch** (691 teksten gelezen): `c.illness.b`; `whoFairwork`; `whoInspection`.
  - `whoInspection`: Screen text uses informal تو; since the October check all UI screens use polite شما (the other who* lines use it too).
  - `whoFairwork`: Screen text uses informal تو; the UI uses polite شما everywhere else.
  - `c.illness.b`: The quoted Dutch term must stay exactly as in the source and in the course word w.betermelden: 'betermelden', not 'beter melden'.
- **Oekraïens** (520 teksten gelezen): `c.illness.b` (f); `c.illness.b` (m); `sectorHint`.
  - `c.illness.b`: The Dutch term in brackets must match the source, which now writes it as one word, 'betermelden' (NT2 review); the Ukrainian still has the old 'beter melden'.
  - `sectorHint`: 'йдуть рано' is a word-for-word copy of 'come early' and reads as 'the lessons leave/happen early (in the day)'; the meaning is that they come near the start of the course.
- **Pools** (560 teksten gelezen): `c.direct.o3`; `c.illness.b` (f); `c.illness.b` (m); `whoFairwork`.
  - `whoFairwork`: "wykorzystywać" can sound like sexual abuse. In October c.gethelp.p was changed to "wyzyskiwany" (exploitation) for this reason, and ui.whoInspection already says "wyzysk". This is a rights text, so the word should be unmistakable and consistent.
  - `c.illness.b`: The Dutch term has to stay as it is in the source: the EN source and the NT2 review write "betermelden" as one word, but the Polish splits it into "beter melden".
  - `c.direct.o3`: The same tip's option o1 and the rest of the app call the box "karton" (made consistent in October). "pudło" here can read as a different object.
- **Roemeens** (400 teksten gelezen): `bramDueOne`; `c.illness.b` (f); `c.illness.b` (m).
  - `c.illness.b`: The quoted Dutch word must stay as in the source: 'betermelden' is one word (the app fixed this spelling deliberately), not 'beter melden'.
  - `bramDueOne`: This is the singular (n = 1) form, but it uses the plural 'Cuvinte'; the 'one' form of bramDueN already has the correct singular.
- **Bulgaars** (520 teksten gelezen): `c.illness.b` (f); `c.illness.b` (m).
  - `c.illness.b`: Quoted Dutch term must stay as in the source: 'betermelden' (one word), not 'beter melden'.

### Nieuwe teksten (alle talen, door twee agents vertaald en gekeurd)

`retry` ("Opnieuw proberen" op het foutscherm, ook in `src/i18n/meta.ts`), `remindStoppedAndroid` ("Haal de herinnering zelf weg in Google Agenda."), `backupNothingNew` ("Niets nieuws: dit stond al op je telefoon."). Graag nakijken, vooral Tigrinya en Arabisch (man- en vrouwvorm).

### Vragen voor een moedertaalspreker

(10 vragen weggelaten: ze vergeleken schermteksten met de Nederlandse Werkregels-teksten of de Werkregels-versie van de Over-pagina, niet met de echte bron.)

**Tigrinya**

- `c.hello.a.why`: Is ንሰናብት ብሰናብት ይምለስ natural for 'a goodbye is answered with a goodbye'? Would ስንብታ or መሰናበቲ be the usual word?
- `c.notyet.a.why`: Does ቅድም ክርአ ምሕታት clearly mean 'asking to be shown first'? Or would ቅድም ከርእዩኻ ምሕታት be clearer?
- `c.arrive.s`: Does ቀዳመይቲ መዓልትኻ ሰዓት 6:45 እዩ read naturally as 'it is 6:45 on your first day'? Or should it be ቀዳመይቲ መዓልትኻ እያ፡ ሰዓት 6:45 እዩ?
- `d.agree.a.why`: EN says 'offering another day'. ካልእ መዓልቲ ምሕባር means 'announcing another day'. Is ምቕራብ better here?
- `w.juridischloket, w.vrij, s.leave.2 (and ~25 other places)`: 'Free' is written ነጻ (Amharic-style) here but ናጻ in other ti texts (e.g. rg.zl.c.1.b, rg.zl.c.2.b). Is ነጻ fine in Eritrean Tigrinya, or should it be ናጻ everywhere for consistency?
- `s.findwork.1`: 'Ik wil solliciteren' is 'ነዚ ስራሕ ክሓትት እደሊ' ('I want to apply for THIS job'). Is the added 'this' OK, or is 'ስራሕ ክሓትት እደሊ' better?
- `s.letters.1`: Spelling 'ኣይተረድኣንን' vs 'ኣይተረደኣንን' (other texts use ኣይተረደኣካን). Which spelling is standard?
- `s.texting.1`: 'Ik ben tien minuten te laat' is 'ዓሰርተ ደቓይቕ ክድንጒ እየ' ('I will be ten minutes late'). Fits a text message, but please confirm it reads naturally.
- `gloss.w.nooit`: "ፈጺሙ (ዋላ ሓንሳብ)": without a negative verb, ፈጺሙ can read as "completely". Is this clear as a gloss for "never", or should it be shown with the negative, e.g. "ፈጺሙ ኣይ… / ዋላ ሓንሳብ ኣይ…"?
- `gloss.w.noodstop`: "ናይ ህጹጽ መጠጠዊ": is መጠጠዊ a real, understood word for a stop button? Alternatives: "ናይ ህጹጽ ግዜ መጠፍኢ" or "መቖጸሪ ህጹጽ".
- `gloss.c.extra.b`: "ደሞዝካ ፈጺሙ ካብ ሕጋዊ ዝተሓተ ደሞዝ ክትሕት የብሉን": ደሞዝ is masculine. Is "ክትሕት" right here, or should it be "ክሕት" (or "ክትሓት")? Same in the f text.
- `gloss.c.clock.b / gloss.c.texting.s`: The f form "ክትድንጊ" sits next to the m form "ክትድንጒ". Is the female form right, or should it be "ክትድንጒዪ"?
- `gloss.c.illness.b`: The m text has "ትረክብ" and the f text has "ትረኽቢ"; everywhere else the file writes ትረኽብ. Is this only a spelling variant, or should it be made the same?
- `gloss.c.phone.p`: "ተሌፎነይ ክውላዕ ይኽእል ዶ?" is meant as "may my phone stay on". Is ክውላዕ natural for a phone (or does it sound like "be lit")? A possible alternative is "ተሌፎነይ ተኸፊቱ ክጸንሕ ይኽእል ዶ?".
- `gloss.c.transit.b`: "ብሓደ ካርድ ኣንክእ" for check in/out with the card (tap): is ኣንክእ a real, clear word? Would ብሓደ ካርድ ተንክፍ / ኣርእይ be better?
- `gloss.c.line.b / c.line.p / c.line.o1`: "ናይ ህጹጽ መጠጠዊ" for emergency stop: is this a known term, or would "ናይ ህጹጽ ደው መበሊ (መጠወቒ)" be clearer?
- `gloss.c.translate.b / c.translate.o1 / c.translate.o3 / c.aihelp.b`: The forms of ተርጐመ are spelled ክትትርጕም, ክትትርጕሞ, ክትርጕምዎ, ክትርጉሙ. Expected: ክትተርጕም, ክትተርጕሞ, ክተርጕምዎ, ክተርጕሙ (imperfect ይተርጕም). Please confirm the spelling.
- `gloss.c.measures / c.measures.b`: "ልክዕ" / "ልክዒ" is used as the imperative "measure!". ልክዕ usually means "exact". Should it be ልከዕ / ልከዒ, or a clearer verb like "ዕቀን"?
- `gloss.c.measures.q`: "እቲ ጣውላ" for "plank": ጣውላ is also used for "table" (e.g. c.service.s). Is it clear as plank/board here?
- `gloss.c.keeplearning.p`: "ምሳይ ሆላንድኛ ጥራይ ተዛረብ" says "speak ONLY Dutch with me". NL "Praat maar Nederlands" means "just go ahead and speak Dutch". Is this OK, or is a softer wording better?

**Dari**

- `c.limits.w`: 'یک کمر زخمی' (injured back): زخمی sounds like an open wound. Would 'کمر آسیب‌دیده' be clearer for a lifting injury?
- `ui.whoLegal, ui.unlockHint, ui.fact14`: These still say 'رایگان' (free); the October pass moved other texts to Afghan 'مفت'. Should they be the same everywhere?
- `s.leave.3`: 'Ik heb een noodgeval thuis' is now 'در خانه یک کار عاجل دارم' (an urgent matter/task at home). Is that strong enough for 'emergency', or is 'در خانه یک حالت عاجل پیش آمده' clearer?
- `w.tandvlees.lit`: Proposed لثه for gums; is the Afghan word بیره (بیرهٔ دندان) more natural for Dari speakers?
- `c.easy.b`: 'Then just ask what it means' is rendered 'پس به آسانی بپرسید' (ask easily). Fine, or better 'پس فقط بپرسید'?
- `rg.cat.uitzend / w.uitzendbureau`: Temp agency is 'دفتر کاریابی' in work texts but 'دفترهای کار موقت' in the regional help category. Pick one term?
- `c.aifake.b, c.aifake.o3`: These two use کود (کودهای شما، کود بانکی) for 'code', but c.scams.b and the UI use کد. کود also means 'fertilizer'. Should they say کد, to be clear and consistent?
- `c.aifake.*, c.aihelp.b, c.aiprivate.b`: The newer AI texts say رئیس / رییس, مانند, هیچ‌گاه and هرگز, while the rest of the file says آمر, مثل and هیچ وقت. Should these be made the same as the rest, in everyday Afghan Dari?
- `s.aiprivate.3`: 'Mijn wachtwoord is geheim' is now رمز من پنهان است ('hidden'). Is محرم / راز clearer for 'secret'?
- `c.diploma.b`: 'You can have it assessed at IDW' is now می‌توانید آن را در IDW ارزیابی کنید, which reads as 'you can assess it yourself'. Is ارزیابی کنانید / بدهید که ارزیابی شود better?
- `c.illness.b`: The Dari text writes '(beter melden)', but the English source has the Dutch term as one word: 'betermelden'. Should it match the source?
- `c.newjob.b, c.newjob.p`: 'Reference' is translated as معرف (a person who vouches for you). Does that fit 'ask for a reference (referentie)' in b, or should it also mention a letter (معرفی‌نامه)?
- `gloss.p.call112`: Uses Latin digits 112 while c.danger.a uses Persian digits ۱۱۲. Should this be the same everywhere?
- `gloss.w.nogniet`: 'هنوز نه' for 'not yet': is 'هنوز نی' more natural in Dari? This belongs to the open نه/نی question.
- `gloss.c.notyet.q`: NL uses informal 'je' ('Probeer het maar'), but Dari uses the polite plural 'امتحانش کنید'. Is that intended, like the other chats?

**Arabisch**

- `ui.tier7, ui.tier30`: "أسبوع متتالٍ" / "شهر متتالٍ" for "1 week / 1 month in a row" reads oddly ("a consecutive week"). Would "أسبوع كامل على التوالي" / "شهر كامل على التوالي" be clearer?
- `c.texting.b#m`: "وانهِ الرسالة بتحية" is missing the hamza (the f form has "وأنهي"). Should it be "وأنهِ"?

**Perzisch**

- `c.aiplan`: Title 'چه کسی این را تصمیم گرفت؟' (also 'بپرس چه کسی آن را تصمیم گرفت' in c.aiplan.b): is 'X را تصمیم گرفتن' natural, or should it be 'چه کسی این تصمیم را گرفت؟' (as in s.aiplan.1)?
- `c.arrive.a.why`: 'سؤال این است که برای چه آمده… تازه‌وارد است' is in the third person ('why he came… he is new'), while EN says 'you'. Clear enough to the learner, or better 'پرسیده‌اند برای چه آمده‌ای: این جواب می‌گوید تازه‌واردی و امروز شروع می‌کنی'?

**Oekraïens**

- `w.gewond, p.hurt, c.accident.p`: 'поранений' (wounded) for 'gewond/hurt' at work: is that natural, or is 'травмований' clearer for a workplace injury?
- `c.direct.o3`: This answer option is in the present tense ('Нічого не кажеш і залишаєш…'). The other tip options use the future ('скажеш', 'зробиш'). Make it consistent?
- `d.task.a, gloss.w.gegevens, c.aiprivate.*, w.computer`: The newer texts use the apostrophe ’ (п’ять, ім’я, комп’ютер). The October check standardised on ʼ. Make them all the same?

**Turks**

- `ui.freeDaysN, ui.restDay, ui.bramRested`: "Serbest gün" is used for a streak rest day. In October w.vrij was changed from "boş" to "izinli" because "serbest" can read as "free of charge". Is "serbest gün" clear here as "a day off from practising", or is "dinlenme günü" / "izin günü" better?
- `c.illness.b`: The Dutch term is written "(beter melden)" with two words, while the English source has "(betermelden)". Both spellings exist in Dutch. Should it match the source exactly?
- `c.aiplan.b`: Scanner is "el tarayıcısıyla" here but "barkod okuyucu" elsewhere in the course (an open question from October). Should one term be used everywhere?

**Pools**

- `gloss.c.unsafe.w`: "Zgłoszenie go pomaga...": "go" points back to "Sytuacja" (feminine) or to "ostrzeżenie". Is it clear, or should it be "Zgłoszenie jej" / "Zgłoszenie takiej sytuacji"?
- `ui.micUnavailable`: "potem idź dalej" for "then go on" (in the app) can read as "walk further". Is "potem przejdź dalej" clearer?
- `ui.certNameHint`: "Możesz zostawić puste." has no noun. Is "Możesz zostawić to pole puste." more natural?
- `gloss.c.agency.b`: "zbierasz dni urlopu" for "build up days off": is it natural, or is "nabywasz prawo do dni urlopu" better?

**Roemeens**

- `gloss.c.aihelp.s / gloss.c.aihelp.w`: Here vakantiegeld is 'bani de concediu', but in October it was changed elsewhere to 'prima de vacanță' (c.agency.b uses that too). Should these two use 'prima de vacanță' as well, so it is the same everywhere?
- `gloss.w.telaat`: 'te laat' (as in 'Sorry, ik ben te laat' = I am late) is glossed 'prea târziu' (too late). Would 'în întârziere' / 'întârziat' be clearer as a gloss?
- `gloss.c.aihelp.w`: This text uses 'Țările de Jos'; the rest of the app says 'Olanda'. Should it be the same?
- `ui.loadFailed`: 'Nu s-a încărcat. Este internet?': is 'Ai internet?' more natural?
- `gloss.d.task.a.why`: 'Întrebat dacă e gata:' sounds like it was copied from the English 'Asked if...'. Would 'Întrebarea e dacă e gata:' match the other .why texts better?
- `about (a.*) dump`: For a.what.b, a.mission.b, a.how.b, a.beta.b and a.disclaimer.b the dump's 'EN' line shows the Dutch work-rules text (nlRules), not the English body. The RO text matches the real English body in src/content/about.ts, so I left it unchanged. The dump tool may need fixing.

**Bulgaars**

- `c.arrive.a.why`: '…Този отговор казва: нов е и започва днес.' says 'he is new' in the third person; EN says 'you are new'. Is that natural here, or should it be rephrased neutrally?
- `s.understand.2`: 'Може ли да говорите бавно?' = 'speak slowly'; NL 'langzamer'. Would 'по-бавно' be more natural?

### Ronde 2 (29 oktober): diep voor de andere zeven talen

Elke tekst van ar, fa, uk, tr, pl, ro en bg (samen ~13.700), drie zoekers per taal. Strenger dan ronde 1: elke wijziging is door **twee** onafhankelijke agents gekeurd (een op betekenis, een op taal), en alleen doorgevoerd als beide het eens waren. Bron voor de Over-pagina nu de goede (de cursustekst); schermteksten alleen tegen het Engels.

**Doorgevoerd (13):**

- **Arabisch** (2132 gelezen): `c.texting.b` (m): The imperative of أنهى (form IV) starts with hamzat al-qat': أنهِ. Without the hamza, 'وانهِ' is a spelling error and reads as a different verb (انتهى/نهى). The f form already has وأنهي.; `c.site.b` (m): 'في آخر لحظة' is a calque of 'last-minute' and reads as 'too late, at the very last moment'; October already changed this for s.site.3 to 'قبل البدء مباشرة' (right before starting).
- **Perzisch** (1899 gelezen): `s.understood.1`: The Dutch uses polite 'u' (Wilt u het opschrijven?), but the Persian uses informal تو. Mirror it with شما, as in s.task.3 and s.aihelp.3.; `s.understood.2`: The Dutch uses polite 'u' (Kunt u het laten zien?), but the Persian uses informal تو. Mirror it with شما.; `w.waarderen`: NL 'laten waarderen' / EN 'to have (a diploma) assessed' means an office (IDW) assesses it. 'ارزیابی کردن' means assessing it yourself, the same error the October check fixed elsewhere; c.diploma.b already says 'به IDW بدهی تا ارزیابی شود'.
- **Turks** (1885 gelezen): `c.shortlong.a.why`: "bir nedenle" means "for some reason" in Turkish, not "with a reason" (the reply gives its reason).
- **Pools** (2132 gelezen): `wordsStrongerOne`: "słowo mocniej" (word more strongly) is a calque that does not make sense in Polish; use the same wording as the plural ui.wordsStrongerN.
- **Roemeens** (1680 gelezen): `w.zeker`: w.veilig (safe) is also glossed 'sigur', so the two words get the same gloss. docs/vertaalcontrole.md records 'sigur (de ceva), convins' as the chosen RO gloss for w.zeker, but the change was never applied.; `s.findwork.1`: NL/EN say only 'I want to apply for a job'; 'acest post' adds 'this (specific) job', which is not in the source.
- **Bulgaars** (1862 gelezen): `c.client.b`: Plain string speaks to the learner with masculine 'кой си' (a woman is 'коя си'); this is care work, where many learners are women. The app gives m/f forms for the same phrase elsewhere (c.arrive.w). 'Представи се' works for both.; `c.texting.b`: Plain string speaks to the learner with masculine 'кой си'. Neutral wording fits both genders.; `c.texting.w`: Plain string speaks to the learner with masculine 'кой си'. 'Кой пише' (who is writing) works for both genders.

**Niet doorgevoerd, de keurders waren het niet eens (8), graag beslissen:**

- Arabisch `c.aiprivate.o3`: voorstel: m and f must say the same thing: the f form turns 'a friend' into 'a female friend' (صديقة); only the learner's verb should change. Oordelen: reject, accept.
- Oekraïens `w.gegevens`: voorstel: Wrong apostrophe character (’ U+2019); the rest of the uk file uses ʼ (U+02BC), standardised in the October check. Oordelen: reject, reject.
- Oekraïens `w.computer`: voorstel: Wrong apostrophe character (’); the file convention is ʼ. Oordelen: reject, reject.
- Oekraïens `c.aiprivate.s`: voorstel: Wrong apostrophe character (’); the file convention is ʼ. Oordelen: reject, reject.
- Oekraïens `c.aiprivate.o1`: voorstel: Wrong apostrophe character (’); the file convention is ʼ. Oordelen: reject, reject.
- Oekraïens `c.aiprivate.w`: voorstel: Wrong apostrophe character (’); the file convention is ʼ. Oordelen: reject, reject.
- Oekraïens `c.aiplan.b`: voorstel: Wrong apostrophe character (’, twice); the file convention is ʼ. Oordelen: reject, reject.
- Oekraïens `c.bsn.b`: voorstel: 'вхід' reads as 'entrance'. In October DigiD 'вхід' was changed to 'логін' everywhere else (c.bsn.o1–o3 and .w say 'логін DigiD'), so this sentence was missed. Oordelen: accept, reject.

**Vragen voor een moedertaalspreker:**

*Arabisch*

- `gloss.c.keeplearning.p`: "تكلّم معي بالهولندية فقط" reads as "speak ONLY Dutch with me". NL "Praat maar Nederlands" means "just go ahead and speak Dutch". A softer wording could be "تكلّم معي بالهولندية، هكذا أتعلّمها أسرع" (or with لا بأس). Is "فقط" OK here?
- `gloss.w.houdbaarheidsdatum / gloss.s.shelves.2 / gloss.c.shelves.*`: "تاريخ انتهاء الصلاحية" means expiry date; EN says best-before date. That is the usual everyday term. Is it fine, or is "يُفضَّل استهلاكه قبل" needed somewhere?
- `gloss.s.boundaries.3`: "أريد أن أبلّغ عن شيء عند الشخص المؤتمن": would "إلى الشخص المؤتمن" or "لدى الشخص المؤتمن" sound more natural than "عند"?
- `gloss.rg.zl.s.2.2`: "Kunt u Nederlands praten?" is now the impersonal "هل يمكن التكلم بالهولندية؟" ("is it possible to speak Dutch?"). Clear and polite enough, or is "هل يمكنك/حضرتك أن تتكلم بالهولندية؟" better?
- `ui.sectorHint`: "دروس عملك تأتي مبكراً" copies 'come early' word for word, and it could be read as 'early in the day'. The meaning is that these lessons come near the start of the course (the same point was fixed in Ukrainian). Would "دروس عملك تأتي في البداية" or "تأتي أولاً" be clearer?
- `c.texting.p#f`: The f form ends with "مع التحية، (اسمك)" instead of "علي" as in NL, EN and the m form. Is this intended, or should both forms keep "علي"?
- `s.understand.2`: "هل يمكنك أن تتكلم ببطء؟" means 'slowly', not 'more slowly' (NL langzamer). Would "بشكل أبطأ" be better, or is ببطء natural enough here?
- `s.findwork.1`: 'Ik wil solliciteren' is 'أريد أن أتقدّم لهذه الوظيفة' ('...for THIS job'). EN is 'apply for a job'. Is 'أريد أن أتقدّم لوظيفة' better, or is 'this job' fine in the lesson?
- `s.pbgk.2`: 'in de hal' is 'في الممر' (corridor). In a warehouse 'hal' is often a large hall. Is 'في القاعة' / 'في الصالة' more accurate, or is الممر fine?

*Perzisch*

- `c.limits.w`: 'کمر آسیب‌دیده خیلی بیشتر از یک دقیقه کمک هزینه دارد': the words 'کمک هزینه' sit side by side and can be read as کمک‌هزینه (allowance/benefit, the term now used for uitkering). Clearer: 'هزینهٔ کمر آسیب‌دیده خیلی بیشتر از یک دقیقه کمک است.'?
- `c.site.b`: 'اینجا چه چیزی ممکن است خراب شود؟' for 'what can go wrong here?': خراب شدن reads as 'break down'. Is 'چه چیزی ممکن است اشتباه پیش برود / چه خطری اینجا هست؟' clearer for a risk check?
- `c.client.o3`: 'شستشو را حذف کن' (delete the washing) for 'Skip the washing': is 'شستشو را انجام نده' more natural?
- `w.nummer`: 'شمارهٔ (تلفن)' has an ezafe left hanging before the bracket. Better 'شماره (تلفن)'?
- `gloss.c.easy.q, gloss.c.easy.p`: NL uses informal 'je' ('Kun je even een handje helpen?', 'Wat bedoel je daarmee?'), but FA uses polite شما ('می‌توانید یک لحظه کمک کنید؟', 'منظورتان از این چیست؟'). Other chat lines mirror je with تو. Should these be 'می‌توانی یک لحظه کمک کنی؟' and 'منظورت از این چیست؟'?
- `gloss.c.phone.p`: 'بچه‌ام بیمار است': in October 'ziek' was standardised from بیمار to مریض (gloss.w.ziek = مریض). Should this be 'بچه‌ام مریض است' for consistency?
- `ui.sectorHint`: 'درس‌های کار شما زود می‌آیند' is a literal 'come early'. Is it clear that these lessons come near the start of the course, or would 'زودتر می‌آیند' / 'اول می‌آیند' be clearer?
- `gloss.p.call112`: Uses Latin digits 'با 112 تماس بگیر!' while gloss.c.danger.a uses Persian digits '۱۱۲'. Make it consistent?
- `s.pbgk.2`: 'in de hal' is translated as 'توی راهرو' (in the corridor). On a work floor 'hal' usually means a hall or shed (سالن). Would 'توی سالن سرد است' be better?
- `c.sick.a.why`: 'بیماری یعنی در خانه ماندن و خبر دادن' reads as 'Illness means…'. Is 'مریض بودن یعنی…' clearer for 'Sick means staying home'?
- `a.how.b`: The FA text leaves out 'or in simple English if you chose no help language' and adds 'you also see instructions and words in Persian'. This seems to be a deliberate change for Persian readers. Is it OK?

*Oekraïens*

- `gloss.c.direct.w`: 'Direct feedback' is 'Пряма порада' (direct advice). The tip is about remarks like 'Dat is fout', and c.mistakes.b uses 'Зауваження' for feedback. Would 'Пряме зауваження' / 'Пряма критика' be clearer?
- `gloss.c.limits.s`: 'much too heavy' is 'значно заважка'. Is that natural, or is 'набагато заважка' / 'занадто важка' better?
- `gloss.c.hygiene.b`: The opening 'Алкоголь і наркотики на роботі, або прийти на роботу після них, заборонено…' mixes nouns and an infinitive as the subject. It can be understood, but would 'Вживати алкоголь і наркотики на роботі або приходити на роботу після них заборонено…' read better?
- `s.pbgk.2`: 'Het is koud in de hal' is translated 'У коридорі холодно' (corridor). In this app 'de hal' is probably the work hall (warehouse/factory hall). Would 'У цеху / на складі холодно' be better?
- `c.gossip.w, c.boundaries.b, c.warning.a`: Rights texts use 'не може / не можуть / можете' for 'may (not)' ('Ніхто не може викладати…', 'тебе не можуть покарати', 'ви можете тільки зробити копію'). Is that clearly 'not allowed', or should it be 'не має права / не мають права / маєте право'?
- `c.boundaries.b`: 'Запитай, чи все з ним гаразд' fixes the colleague as male; EN says 'they'. Would 'чи все гаразд' be better?
- `w.bang`: 'наляканий, боїшся' has only the male adjective form; acceptable for a word gloss?
- `c.shelves.o2`: 'бо воно свіже' for 'because it is fresher': should it be 'свіжіше'?
- `c.gethelp.o3`: This answer option is in the present tense ('Кажеш йому почекати…'), but o1 and o2 use the future ('Допоможеш', 'Скажеш'). Should it be 'Скажеш йому почекати…'? This is the same question as for c.direct.o3.
- `s.transit.2, c.transit.b`: 'зареєструватися на виході' / 'Реєструйся на вході і на виході' for OV check-in and check-out: is this clear, or is 'прикласти картку на виході' more natural?

*Turks*

- `gloss.s.kitchen.3, gloss.c.kitchen.q`: 'noten' / nut allergy is 'kuruyemiş' (which also covers dried fruit and seeds). Is 'kuruyemiş alerjisi' clear for a nut allergy, or is 'fındık/fıstık alerjisi' (or 'sert kabuklu yemiş') more usual?
- `gloss.c.findwork.b`: 'sana iş bulmak için senden para isteyemez' has both 'sana' and 'senden'. It reads a bit heavy. Would 'sana iş bulmak için para isteyemez' be smoother?
- `gloss.c.gear.p`: NL 'kapot' / EN 'broken' is given as 'yırtıldı' (torn). That fits gloves and matches c.gear.s, but is 'yırtıldı' fine as the general phrase, or is 'bozuldu/eskidi' better?
- `s.gossip.3`: "Bunu bana kendin söylemeni tercih ederim" says "yourself" (kendin) for EN "directly" / NL "direct". The point is "to my face, not behind my back". Is "Bunu bana doğrudan söylemeni tercih ederim" clearer?
- `ui.whoToCall, ui.whoFairwork`: These two still start with "İşte" ("İşte sorun mu var?", "İşte sömürülüyorsun"). In October about 15 texts were changed from "İşte" to "İş yerinde" because "İşte" can read as "here is". Change these two the same way for consistency?
- `c.boundaries.b`: "bunu 'şaka olarak' söylemiş olması" says "said it as a joke", but EN "meant it as a joke" also covers touching and staring. Is "şaka olarak yapmış olması" or "şaka amaçlı olması" better?
- `gloss.s.pbgk.2`: "de hal" (warehouse hall) is rendered "Koridor" (corridor). Is "Salon soğuk" or "Depo soğuk" closer?
- `gloss.c.texting.b, gloss.c.texting.w`: "kim olduğunu ve ne olduğunu söyle": can "ne olduğunu" be read as "what you are"? Would "neler olduğunu" / "ne durumda olduğunu" be clearer for "what is happening"?

*Pools*

- `gloss.s.pbgk.2`: "Het is koud in de hal." is translated as "Na korytarzu" (in the corridor). If "hal" here means a work hall (warehouse or factory), "W hali jest zimno." would be the right text. Which meaning does the source intend?
- `gloss.w.opdracht, gloss.s.agency.2, gloss.s.agency.3`: An agency assignment is translated as "projekt". Polish agency workers do use this word, but "zlecenie" (or "praca w firmie") may be clearer to learners with little schooling. Keep "projekt"?
- `gloss.c.hours.b`: "Check your hours yourself" became "Sprawdzaj swoje godziny", so "yourself" is gone. Should "sam/sama" be added (this would need m/f forms), or is the text fine as it is?
- `gloss.c.gossip.s`: "Kolega nagrywa cię, kiedy poślizgnąłeś/poślizgnęłaś się" mixes present and past tense. Would "Kolega nagrał, jak poślizgnąłeś/poślizgnęłaś się na mokrej podłodze" sound more natural?
- `gloss.c.privacy.o1`: "Miło mówisz, że zawołasz pielęgniarkę": is "Uprzejmie mówisz" better for "say kindly"?
- `gloss.c.ww.b`: "Zwykle musisz przepracować co najmniej 26 z ostatnich 36 tygodni" can be read as a future duty ("you must work 26 weeks") instead of a condition ("you must have worked"). Is "musisz mieć przepracowane" clearer?
- `gloss.c.ww.w`: EN says "Talking first with...". The Polish "Rozmowa z przełożonym..." leaves out "first" (najpierw). Should it be added?
- `gloss.c.housing.b`: "umowa najmu musi być osobno od umowy o pracę": is "osobna/oddzielna od umowy o pracę" more natural?
- `gloss.a.how.b`: The Polish text drops "or in simple English if you chose no help language" and says that instructions and words are also shown in Polish. This seems deliberate for Polish readers. Is that OK?
- `gloss.c.findwork`: "Weź umowę na piśmie" for "Get your contract on paper": is "Miej umowę na piśmie" or "Poproś o umowę na piśmie" more natural?

*Roemeens*

- `gloss.c.notyet.b`: 'Nu folosi o mașină sau un motostivuitor': on its own 'mașină' first reads as 'car'. In October, 'mașini' was changed to 'utilaje' in c.hygiene, c.phone and c.understood for this reason, but the word list glosses machine as 'mașina (utilajul)'. Should this be 'un utilaj'?
- `gloss.c.ask.o2`: This is still open from the 16-10 notes: 'Dai din cap și încerci să ghicești.' 'Dai din cap' can mean nodding or shaking your head. Would 'Aprobi din cap' be clearer, as in rg.zl.c.2.o2?
- `ui.bramHard`: EN says 'Good that you practised'. RO says 'E bine că ai fost harnic/harnică' (good that you were hard-working). Would 'E bine că ai exersat.' be closer, and the same for m and f?
- `gloss.c.diploma.b`: 'O poți evalua la IDW' reads as if the learner assesses the diploma themselves. Would 'Poți cere evaluarea ei la IDW' be clearer for 'have it assessed'?
- `gloss.s.pbgk.2`: 'E frig pe hol' turns 'de hal' into a corridor. In a warehouse or factory, 'în hală' may fit better. Which reading is intended?
- `gloss.c.line / gloss.c.line.b`: Here 'mașină/mașinile în funcțiune' is used for machines. In October, 'mașini' was changed to 'utilaje' elsewhere because it can read as 'cars'. Is it clear enough here because of 'în funcțiune', or should this use 'utilaje' too?
- `gloss.c.boundaries.b (f)`: The female form ends with 'oferă-te să fii martor'. Would 'martoră' fit better, since the same text already uses 'pedepsită'?
- `gloss.u.contact`: 'Apeluri și mesaje către muncă' copies 'to work' word for word. Would 'Apeluri și mesaje cu locul de muncă' or '... către șef' sound more natural?
- `gloss.w.houdbaarheidsdatum`: EN says best-before date, but the gloss is 'data de expirare (a se consuma înainte de)'. Is that fine, or is 'a se consuma de preferință înainte de' more exact?

*Bulgaars*

- `gloss.s.pbgk.2`: 'Het is koud in de hal' is translated 'В коридора е студено' (corridor). On the work floor 'de hal' can also mean a warehouse or factory hall ('халето'). Is 'коридора' the meaning intended here, or would 'в халето' fit better?
- `gloss.c.boundaries.b`: 'не може да бъдеш наказан(а), защото си съобщил(а)' stands for 'you may not be punished'. Is 'не може' clearly read as 'they are not allowed to', or would 'нямат право да те накажат' be clearer for a rights text?
- `gloss.c.privacy`: The title 'Privacy' is translated 'Лични данни' (personal data). The text is also about not talking about clients. Would 'Поверителност' fit better?
- `c.limits.s`: 'много тежък за теб' means 'very heavy for you'. EN says 'much too heavy'. Would 'твърде тежък' or 'прекалено тежък' be clearer?
- `c.ask.w / rg.zl.c.2.w`: Bulgarian alone adds 'Тук кимането значи „да“…' (in Bulgaria nodding traditionally means 'no'). This looks deliberate. Please confirm it reads naturally and is not confusing.
- `c.cv.a`: 'Да, от предишния ми шеф.' ('from my previous boss') for 'Ja, mijn vorige baas'. Natural as a reply to 'Имаш ли препоръка?', or should it be 'Да, предишният ми шеф.'?
- `c.illness.p`: 'Вече съм по-добре.' means 'I am feeling better', not quite 'I am well again' (weer beter = recovered). It is clear with the next sentence, but would 'Вече съм добре.' or 'Оздравях.' fit better?
- `c.aihelp.s / c.aihelp.w`: Here vakantiegeld is 'добавка за отпуск', but everywhere else it is 'пари за отпуск' (c.extra, c.agency). Should it be one term everywhere?

### Tweede keuring van ronde 1 (29 oktober)

Ronde 1 had één keurder per taal, en die liet de valse Over-pagina-voorstellen door. Daarom zijn alle
35 wijzigingen uit ronde 1 en de 27 nieuwe teksten opnieuw gekeurd door twee onafhankelijke agents per
taal (betekenis en taal). Alle 35 wijzigingen bleven staan. Drie nieuwe teksten zijn verbeterd:
Tigrinya `retry` "ደጊም ምፍታን" → "ዳግማይ ምፍታን" (ደጊም alleen betekent "voortaan"), Arabisch
`remindStoppedAndroid` (f) zonder losse kasra zoals de rest, Pools `backupNothingNew` "w telefonie"
(zoals elders in de app).
