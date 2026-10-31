# Max 3: tel de aanklikbare dingen per scherm

Huisregel: op elk scherm kiest de gebruiker uit hooguit 3 aanklikbare dingen.
Telt niet mee: de onderbalk, luidsprekers (max 1 per ding), het kruisje in een les, het
terugpijltje linksboven (`.chrome-back`) en de kleine uitweg "Ik kan nu niet luisteren" (`.skip-sound`,
een tekstlink onder de antwoorden; keuze van de eigenaar, 31 oktober 2026). Lijsten (Alle onderwerpen, Tips, Instellingen-lijsten,
taalkeuze, begeleiders) zijn een uitzondering: één soort rij, één tik per rij.

    npx vite                                   # dev-server op :5173
    node scripts/max3/count.cjs --list         # alle schermen
    node scripts/max3/count.cjs --matrix       # pl@390x844, ar@360x640 donker, nl@360x640 (werkregels)
    node scripts/max3/count.cjs 'lesson:*' --fail-exit

Nodig: Playwright met Chromium.
