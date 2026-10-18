# LinkedIn-promo "Past in elk gaatje van je dag" (oktober 2026)

Een 3D-animatie van 30 seconden: een drone vliegt over de polder naar een gele trein, door het raam
naar binnen naar Amina, die Vloertaal speelt. Daarna Jada op een terras, Henk die de link deelt met
nieuwe collega's, en de eindkaart met Bram.

Bram, Amina, Henk en Jada zijn echte 3D-figuren met het gezicht en de kleding uit de app. Bij elk
scherm zoomt de camera over hun schouder in: eerst zie je de figuur, dan kijk je vanachter het hoofd
mee naar de telefoon of laptop.

| Bestand | Wat |
|---|---|
| `vloertaal-promo-4x5.mp4` | 1080 × 1350 (staand, het beste formaat voor de LinkedIn-feed), 30 s, met muziek |
| `vloertaal-promo-1x1.mp4` | 1080 × 1080 (vierkant), 30 s, met muziek |
| `vloertaal-promo-poster.png` | het laatste beeld (eindkaart), voor de voorvertoning |
| `vloertaal-promo-overzicht.png` | 12 beelden uit de film, met tijd |
| `figuren/` | de vier 3D-figuren van voren, schuin, opzij en achteren |
| `bron/` | de broncode om de film opnieuw te maken |

## Tijdlijn

| Tijd | Scène | Tekst in beeld |
|---|---|---|
| 0–9 s | drone → gele trein → door het raam → Amina, les in het Arabisch, "Goed zo!" | Nederlands leren voor je werk. / In de trein. Op je telefoon. |
| 9–15 s | het terras op → achter Jada's krullen → telefoon (gesprek in het Pools) → "Dag 7 op rij" | Op een vrije dag. Een paar minuten per dag. |
| 15–21 s | door de glazen wand de kantine in → achter Henks hoofd → laptop (alle talen) → de link gaat naar nieuwe collega's | Deel het met je nieuwe collega's. |
| 21–30 s | VLOERTAAL in stencil, 3D-Bram loopt in beeld en zwaait, de vinkjes | Gratis · Geen account · Geen reclame · vloertaal.nl |

De scènes wisselen op 9, 15 en 21 seconden, op de tel van de muziek (120 BPM).

## Muziek en rechten

- **Muziek:** gemaakt met ElevenLabs Music (`bron/muziek-m4.mp3`, variant 4 van 4, instrumentaal),
  met een betaald abonnement, dus voor commercieel gebruik.
- **Geluid onder de film:** 100 ms later gezet, zodat de tel op de wissels valt, met een
  luidheid van −14 LUFS (de norm voor sociale media).
- **Figuren:** Bram, Amina, Henk en Jada komen uit de app (`src/components/Characters.tsx`). Hun
  gezicht uit de app staat op een 3D-hoofd; de rest van de figuur is in 3D nagebouwd.
- **Schermen:** echte schermen uit de app.
- **De trein** is in Vloertaal-geel, zonder NS-kleuren of -logo.

## Opnieuw maken

De film is gebouwd met three.js (in Chromium, beeld voor beeld) en ffmpeg:
- `bron/lib/`: het 3D-decor (polder, trein) en de 3D-figuren (`char3d.js`);
- `bron/v3/`: de vier scènes van deze versie (`shot1` tot en met `shot4`) en de scripts om ze te
  renderen en samen te voegen (`renderall.sh`, `assemble3.py`, `finish.sh`);
- `bron/shot1` tot en met `bron/shot4`: de eerdere versie, met platte figuren;
- `bron/render.cjs`: maakt de beelden (`node render.cjs shot1 --sub 8 --from A --to B --out frames/...`);
- `bron/assemble2.py`, `bron/assemble_sq2.py` en `bron/finish.sh`: zetten de beelden en het geluid
  samen. De paden in `finish.sh` wijzen nog naar de werkmap waarin de film is gemaakt; pas ze aan.

Eén beeld met bewegingsonscherpte (8 deelbeelden) kost op een server zonder grafische kaart
ongeveer 5 tot 20 seconden. Reken op een paar uur voor de hele film.
