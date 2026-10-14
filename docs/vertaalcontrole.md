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
