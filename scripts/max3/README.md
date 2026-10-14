# Max 3: tel de aanklikbare dingen per scherm

Huisregel: op elk scherm kiest de gebruiker uit hooguit 3 aanklikbare dingen.
Telt niet mee: de onderbalk, luidsprekers (max 1 per ding), het kruisje in een les en het
terugpijltje linksboven (`.chrome-back`). Lijsten (Alle onderwerpen, Tips, Instellingen-lijsten,
taalkeuze, begeleiders) zijn een uitzondering: één soort rij, één tik per rij.

    npx vite                                   # dev-server op :5173
    node scripts/max3/count.cjs --list         # alle schermen
    node scripts/max3/count.cjs --matrix       # pl@390x844 en ar@360x640 donker
    node scripts/max3/count.cjs 'lesson:*' --fail-exit

Nodig: Playwright met Chromium.
