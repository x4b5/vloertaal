# Webfilters: vloertaal.nl een categorie geven

*Gemaakt op 10 november 2026.*

## Waarom

Op een werklaptop blokkeerde Microsoft Defender vloertaal.nl met de melding "Deze inhoud is geblokkeerd door uw organisatie". Zo'n filter geeft elke website een categorie. Een strenge beheerder blokkeert sites die nieuw zijn of nog geen categorie hebben ("Uncategorized", "Newly registered"). Vloertaal.nl is jong en staat sinds 2 november 2026 bij statichost.eu, dus het valt daar snel onder.

Begeleiders, docenten en werkgevers werken vaak op zo'n laptop. Krijgt vloertaal.nl een categorie (*Education*), dan kunnen zij de app laten zien en de begeleiderspagina openen.

Een filter kan ook een **oude kopie** van de app laten staan. De browser bewaart de app (`public/sw.js`), maar mag de nieuwe versie niet ophalen. Wie dan een oude versie ziet, bijvoorbeeld nog met het code-scherm van vóór 28 oktober, kijkt waarschijnlijk achter een filter.

## Zo werkt het

1. **Opzoeken.** Typ `vloertaal.nl` in de opzoektool van het filterbedrijf.
2. **Staat er al *Education* of iets dergelijks?** Dan vink je het af; meer hoeft niet.
3. **Staat er "Uncategorized", "Unknown", "Newly registered" of iets dat niet klopt?** Dien dan een verzoek in, met de tekst hieronder.
4. **Noteer** de datum en wat de opzoektool zei, en daarna wat de uitkomst was.

### Wat je invult

- **Categorie:** *Education*. Heet het bij een filter anders, kies dan wat het dichtst bij komt: *Educational Institutions*, *Education/Reference* of *Reference*.
- **E-mail:** hoi@vloertaal.nl, dan krijg je bericht als het is aangepast.
- **Opmerking** (in het Engels, dat lezen ze allemaal):

> Vloertaal (vloertaal.nl) is a free educational web app to learn Dutch for work in the Netherlands and Belgium, with help in 14 languages. No account, no ads, no cookies. Contact: hoi@vloertaal.nl

Geen enkel bedrijf belooft dat het de categorie aanpast. Een duidelijke educatieve site wordt meestal wel snel goedgekeurd. De site helpt daar zelf aan mee: elke pagina vertelt in de gestructureerde gegevens wie erachter zit (`ORG_DATA`, `docs/seo-plan.md`), en de pagina's zeggen duidelijk dat het om leren gaat.

## Checklist

Begin bovenaan: dat zijn de filters die het meest gebruikt worden.

| ✓ | Filterbedrijf | Opzoeken en aanvragen | Doorlooptijd | Datum · stond op · uitkomst |
|---|---|---|---|---|
| ☐ | **Microsoft Defender** | Kan alleen een beheerder van een organisatie die Defender gebruikt. In het Defender-portaal: rapport *Web protection* › het domein › **Dispute category** › voorstel *Education*. Voor de eigen organisatie kan de beheerder vloertaal.nl ook meteen toestaan, met een indicator *Allow* voor het domein. Zie de mail hieronder. | Volgens Microsoft binnen 1 werkdag | |
| ☐ | **Fortinet (FortiGuard)** | [fortiguard.com/webfilter](https://www.fortiguard.com/webfilter), daarna het formulier voor een rating request ([uitleg](https://www.fortiguard.com/faq/wfratingsubmit)) | Meestal binnen 24 uur | |
| ☐ | **Palo Alto Networks** | [urlfiltering.paloaltonetworks.com](https://urlfiltering.paloaltonetworks.com/) › opzoeken › **Request URL Category Change** | Meteen automatisch bekeken | |
| ☐ | **Broadcom / Symantec** | sitereview.symantec.com › **Check Category** › categorie voorstellen ([uitleg](https://knowledge.broadcom.com/external/article/166503)) | 24–48 uur | |
| ☐ | **OpenText BrightCloud** (ook gebruikt door Cisco-filters) | [OpenText change request](https://support.threatintel.opentext.com/tools/change-request.php) | 24–48 uur | |
| ☐ | **Zscaler** | Site Review ([uitleg](https://help.zscaler.com/zia/using-site-review-lookup-urls)) | Wordt een supportverzoek | |
| ☐ | **Cisco Talos** | Talos Reputation Center › support › "Web" ([forum](https://community.cisco.com/t5/web-security/url-categorization-request/td-p/2815658)) | Niet bekend | |
| ☐ | **Trend Micro** | Site Safety Center › opzoeken › **Reclassify Request** ([uitleg](https://helpcenter.trendlife.com/en-us/article/tmka-17854/)) | Niet bekend | |
| ☐ | **Netskope** | URL Lookup › recategorisatie aanvragen ([uitleg](https://docs.netskope.com/en/report-miscategorization)) | Meestal 24–48 uur | |

De adressen en stappen kloppen volgens de bronnen van 10 november 2026. Filterbedrijven verhuizen hun formulieren nogal eens, BrightCloud bijvoorbeeld van brightcloud.com naar OpenText. Werkt een link niet meer? Zoek dan op "<bedrijf> URL category change request".

## Mail aan een beheerder (Microsoft Defender)

Voor wie op het werk dit scherm krijgt. Stuur dit aan je eigen IT-beheer, of geef het aan een begeleider die het aan die van hen stuurt.

> Hoi,
>
> Microsoft Defender blokkeert op mijn laptop vloertaal.nl ("Deze inhoud is geblokkeerd door uw organisatie"). Dat is een gratis educatieve web-app om Nederlands te leren voor werk. Geen account, geen cookies, geen reclame.
>
> Kun je vloertaal.nl toestaan (indicator: domein vloertaal.nl, Allow)? En zou je de categorie bij Microsoft willen aanvechten ("Dispute category", voorstel: Education)? Dan helpt het ook andere organisaties.
>
> Kun je me ook laten weten in welke categorie Defender de site nu heeft gezet?
>
> Dank je wel!

## Bronnen

- [Microsoft: Web content filtering in Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/web-content-filtering): "Uncategorized" bevat nieuw geregistreerde en geparkeerde domeinen. Een categorie aanvechten gaat met *Dispute category* in het rapport *Web protection*.
- [FortiGuard Web Filter Lookup](https://www.fortiguard.com/webfilter) · [FortiGuard: Rating Request](https://www.fortiguard.com/faq/wfratingsubmit)
- [Palo Alto: Test A Site](https://urlfiltering.paloaltonetworks.com/) · [Palo Alto: Request to Change the Category of a URL](https://docs.paloaltonetworks.com/advanced-url-filtering/administration/monitoring/request-to-change-the-category-for-a-url)
- [Broadcom: Submit a request to review the category associated to a web site](https://knowledge.broadcom.com/external/article/166503)
- [OpenText (BrightCloud) Change Request](https://support.threatintel.opentext.com/tools/change-request.php)
- [Zscaler: Using Site Review](https://help.zscaler.com/zia/using-site-review-lookup-urls)
- [Netskope: Report Miscategorization](https://docs.netskope.com/en/report-miscategorization)
- [Trend Micro: reclassification request](https://helpcenter.trendlife.com/en-us/article/tmka-17854/)
