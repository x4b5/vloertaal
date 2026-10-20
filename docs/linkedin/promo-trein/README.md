# LinkedIn-promo "Past in elk gaatje van je dag" (oktober 2026)

Een 3D-animatie van 54 seconden, **in één doorlopend shot**, zonder knippen:
- Een drone vliegt over de polder naar een gele trein en gaat door het raam naar binnen, naar Amina, die
  Vloertaal speelt.
- De camera duikt in haar scherm. De app slaat de bladzijde om, en het scherm is nu van Jada.
- De camera trekt terug, over Jada's schouder, het terras op.
- Als drone gaat de camera omhoog en over de stad naar het bedrijf van Henk: door de laaddeur, langs
  de stellingen en door de glazen wand de kantine in.
- Henk deelt de link. De camera duikt in zijn laptop, en daaruit komt de eindkaart met Bram.

Bram, Amina, Henk en Jada zijn echte 3D-figuren met het gezicht en de kleding uit de app. Bij elk
scherm zoomt de camera over hun schouder in: eerst zie je de figuur, dan kijk je vanachter het hoofd
mee naar de telefoon of laptop.

| Bestand | Wat |
|---|---|
| `vloertaal-promo-4x5.mp4` | 1080 × 1350 (staand, het beste formaat voor de LinkedIn-feed), 54 s, met muziek |
| `vloertaal-promo-1x1.mp4` | 1080 × 1080 (vierkant), 54 s, met muziek |
| `vloertaal-promo-poster.png` | het laatste beeld (eindkaart), voor de voorvertoning |
| `vloertaal-promo-overzicht.png` | 12 beelden uit de film, met tijd |
| `figuren/` | de vier 3D-figuren van voren, schuin, opzij en achteren |
| `bron/` | de broncode om de film opnieuw te maken |

## Tijdlijn

| Tijd | Wat je ziet | Tekst in beeld |
|---|---|---|
| 0–16,5 s | drone → gele trein → door het raam → Amina kijkt op en lacht → achter haar hoofd → les in het Arabisch, "Goed zo!" → de camera duikt in haar scherm | Nederlands leren voor je werk. / In de trein. Op je telefoon. |
| 16,5–20 s | de app slaat de bladzijde om: het scherm is van Jada (gesprek in het Pools), haar duim tikt, "Dag 7 op rij" | |
| 20–27 s | over haar schouder en om haar heen terug, het terras op | Op een vrije dag. Een paar minuten per dag. |
| 27–38,5 s | omhoog als drone, over de stad en het bedrijventerrein, door de laaddeur, langs de stellingen, door de glazen wand | |
| 38,5–45,5 s | Henk in de kantine → achter zijn hoofd → laptop → de link gaat naar nieuwe collega's → de camera duikt in het scherm | Deel het met je nieuwe collega's. |
| 45,5–54 s | VLOERTAAL in stencil, 3D-Bram loopt in beeld en zwaait, de vinkjes | Gratis · Geen account · Geen reclame · vloertaal.nl |

Er wordt nergens geknipt. Amina's scherm wordt Jada's scherm terwijl het hele beeld scherm is; de laatste
beelden van Amina en de eerste van Jada zijn pixel voor pixel gelijk. De laptop gaat in 0,3 s over in de eindkaart.

**Versie 7 (oppervlakken en contactschaduw; de video wordt nog gerenderd, de mp4's hierboven zijn nog v6):**
- **Textures:** het decor heeft nu een oppervlak in plaats van een egale kleur. Muren en gevels hebben bakstenen
  met voegen, het terras heeft klinkers, en beton en asfalt hebben korrel en vlekken. Bureaus en tafels hebben
  houtnerf en planken, gras en struiken hebben fijne sprietjes, en de blauwe treinstoelen hebben stof. Alles krijgt
  ook lichte verwering. De kleuren blijven hetzelfde: de structuur maakt een vlak alleen iets lichter of donkerder.
- **Contactschaduw:** waar dingen elkaar raken of dicht bij elkaar staan, wordt het donkerder. Denk aan onder een
  stoel, tussen bank en wand, onder de kin, en in hoeken en naden. Daardoor staan de figuren en de meubels echt
  op de grond in plaats van erboven te zweven.
- **Metaal:** alleen metaal (de rails, chroom en de bistrostoelen) weerspiegelt nu een zachte studioruimte. Echte
  reflecties op alles maakten de render 3× zo traag; zo kost het bijna niets.
- **Resolutie:** het middenstuk en Amina vanaf 9 s zijn weer op 1,5× gerenderd. De drone over de polder en de trein
  (de eerste 9 s) zijn op 1,25× gerenderd. De close-ups van Amina (9 tot 14 s) hebben alle deelbeelden voor de
  bewegingsonscherpte; de rest heeft er 80 % van, zoals in v6. Zo was de film in een nacht klaar.

**Versie 6 (realistischer, met geluid):**
- **Licht en schaduw:** de figuren en het decor hebben echte, ronde schaduw in plaats van platte vlakken, met meer
  zon en minder vlak licht. De figuren houden hun gezicht uit de app.
- **Tijd van de dag:** ochtend in de trein, met licht van het raam; late middag op het terras en boven de stad,
  met warm licht en waas in de verte; warm binnenlicht in de hal en de kantine. De schermen van de app blijven
  neutraal, zodat de kleuren van het merk kloppen.
- **Natuurlijke kleuren:** minder knalgroen gras en een zachtere lucht, en een filmische contrastcurve.
- **Gezichten:** de uitdrukkingen uit de app wisselen. Amina lacht als ze opkijkt, Jada denkt na en juicht bij
  "Dag 7 op rij", en Henk knikt tevreden en lacht als hij de link deelt. De figuranten lachen ook.
- **Foutjes opgelost:** Jada tikt met haar duim op het nummer van het antwoord, dus haar duim bedekt de tekst
  niet meer. De website op Henks laptop staat 1,5× groter. Bij het delen verschijnt een scherp label
  "vloertaal.nl · Link gedeeld".
- **Geluid:** onder de muziek zitten 21 geluidseffecten van ElevenLabs. Je hoort wind, de trein, het terras, een
  belletje bij "Goed zo!", een vrachtwagen die achteruit rijdt, de heftruck en de hal, een melding als de link
  gedeeld wordt, en een stempel en vinkjes op de eindkaart. Stemmen zitten er niet in.
- **Resolutie:** de film is op 1,25× gerenderd in plaats van 1,5×, met iets minder deelbeelden voor de
  bewegingsonscherpte. De echte materialen kostten anders 3× zoveel rekentijd.

**Kwaliteit (v5):**
- **Scherper:** het middenstuk, de eindkaart en Amina vanaf 9 s zijn op 1,5× gerenderd en daarna verkleind.
- **Diepte:** in de close-ups is de achtergrond licht onscherp, zoals bij een echte lens.
- **Grading:** alle beelden kregen dezelfde lichte kleurcorrectie, met wat meer contrast en verzadiging, een zacht
  vignet en fijne korrel.
- **Figuranten (v5b):** medereizigers in de trein, gasten en een ober op het terras, voorbijgangers en fietsers in
  de stad, mensen in een hesje met een helm op het bedrijventerrein, een heftruckchauffeur en een orderpicker in
  de hal, en collega's in de kantine. Ze zijn bewust eenvoudig en hebben geen gezicht uit de app, zodat niemand
  op Amina, Jada, Henk of Bram lijkt.

## Muziek en rechten

- **Muziek:** gemaakt met ElevenLabs Music (`bron/muziek-m4.mp3`, variant 4 van 4, instrumentaal),
  met een betaald abonnement, dus voor commercieel gebruik.
- **Langer gemaakt:** de muziek herhaalt zich na 12 seconden. Twee keer die 12 seconden extra
  (0–24 s, 12–24 s, 12–30 s van het origineel) maakt er 54 seconden van, met de naden op de tel
  (`bron/v5/muziek54.py`).
- **Geluid onder de film:** 100 ms later gezet (zo viel de tel in v4 op de wissels), met een
  luidheid van −14 LUFS (de norm voor sociale media).
- **Figuren:** Bram, Amina, Henk en Jada komen uit de app (`src/components/Characters.tsx`). Hun
  gezicht uit de app staat op een 3D-hoofd; de rest van de figuur is in 3D nagebouwd.
- **Schermen:** echte schermen uit de app.
- **De trein** is in Vloertaal-geel, zonder NS-kleuren of -logo.

## Opnieuw maken

De film is gebouwd met three.js (in Chromium, beeld voor beeld) en ffmpeg:
- `bron/lib/`: het 3D-decor (polder, trein) en de 3D-figuren (`char3d.js`);
- `bron/v5/`: deze versie, het doorlopende shot:
  - `shotA` is Amina (v4 shot 1, met de duik in het scherm);
  - `shotB` is één wereld: het terras (`terrace.js`), de stad en het bedrijventerrein (`town.js`) en de kantine van
    Henk (`canteen.js`);
  - `shotC` is de eindkaart;
  - `render5.cjs` rendert de beelden, met `--dpr 1.5 --q hi` op de hoge kwaliteit;
  - `renderB.sh`, `renderB2.sh` en `renderC.sh` maken de beelden;
  - `assemble5.py` zet de film in elkaar en doet de grading;
  - `fixpl.cjs` heeft in Jada's Poolse scherm "Skończyłeś?" vervangen door de vrouwelijke vorm
    "Skończyłaś?". Dat is ook wat de app een vrouw laat zien.
  - De beelden 0 tot en met 59 van Amina komen uit v4. Beeld 60 tot en met 269 zijn opnieuw gerenderd op 1×, nu met
    medereizigers; vanaf beeld 270 (9 s) op 1,5× met scherptediepte.
  - De figuranten: `bron/lib/extras.js` bouwt ze (zitten, lopen, fietsen); `shotB/extras.js` zet ze op het terras,
    in de stad, op het bedrijventerrein en in de hal en de kantine. De reizigers staan in `shotA/main.js`.
  - `renderX54.sh` rendert alle beelden die door de figuranten veranderd zijn.
  - Versie 6:
    - `bron/lib/real.js` geeft het decor en de figuren echte materialen (ronde schaduw);
    - `char3d.js` wisselt de gezichtsuitdrukkingen uit de app;
    - `renderV6.sh` rendert alles opnieuw;
    - `grade6.py` maakt het licht van de tijd van de dag en de natuurlijke kleuren;
    - `assemble6.py` zet de film in elkaar, met het label uit `chip/`;
    - `bron/v6-geluid/` maakt de geluidseffecten en de mix met de muziek (`build.sh`; de effecten staan in
      `sfx-notes.md`, de originele opnames in `raw/`).
  - Versie 7:
    - `bron/lib/detail.js` maakt één textuur van 1 × 1 m met vier patronen (baksteen, sprietjes/stof,
      beton/asfalt, hout) en legt die in wereldruimte op het decor. Het patroon hangt af van de kleur van het
      oppervlak;
    - `bron/lib/ao.js` is de contactschaduw: een extra pass tekent de normaal en de diepte, en een shader telt
      per pixel hoeveel van de omgeving erboven uitsteekt (ambient occlusion). `kit.js` vermenigvuldigt het beeld
      ermee;
    - `real.js` zet de textures aan (`detail=0` zet ze uit) en geeft metaal een kleine omgeving (`metalenv=0`
      zet die uit); `shotA` en `shotB` nemen `ao=0` tot `1` voor de sterkte van de schaduw;
    - `renderV7.sh` rendert A en B helemaal opnieuw (de instellingen per stuk staan bovenin). Een onderbroken
      render kun je opnieuw starten, want klare blokken worden overgeslagen;
    - `assemble7.py` zet de film in elkaar, met dezelfde grading en dezelfde geluidsmix als v6.
  - In v5b (54 s) speelt `shotB` dezelfde camerabewegingen op een langzamere klok (`WARP`): 29 s in plaats van
    19 s. De meeste extra tijd gaat naar Jada, de vlucht, de hal en Henk. De eindkaart duurt 8,5 s.
- `bron/v4/`: de versie van 42 seconden met wissels: `shot1` tot en met `shot3` spelen de camerabewegingen van v3
  op een langzamere klok, `renderall.sh` maakt de beelden, `assemble4.py` zet de film in elkaar en
  `muziek42.py` maakt de muziek van 42 seconden;
- `bron/v3/`: de vorige versie van 30 seconden (`shot1` tot en met `shot4`; `shot4`, de eindkaart, wordt
  in v4 ongewijzigd gebruikt) met de scripts om ze te renderen en samen te voegen;
- `bron/shot1` tot en met `bron/shot4`: de eerdere versie, met platte figuren;
- `bron/render.cjs`: maakt de beelden (`node render.cjs shot1 --sub 8 --from A --to B --out frames/...`);
- `bron/assemble2.py`, `bron/assemble_sq2.py` en `bron/finish.sh`: zetten de beelden en het geluid
  samen. De paden in `finish.sh` wijzen nog naar de werkmap waarin de film is gemaakt; pas ze aan.

Eén beeld met bewegingsonscherpte (8 deelbeelden) kost op een server zonder grafische kaart
ongeveer 5 tot 20 seconden. Reken op een paar uur voor de hele film.
