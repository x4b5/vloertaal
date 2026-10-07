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
