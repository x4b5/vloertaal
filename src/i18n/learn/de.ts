import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Kein Mikrofon nötig. Sag es laut, dann mach weiter.",
    micRetry: "Mikrofon noch einmal versuchen",
    micFailed: "Das Mikrofon hat nicht funktioniert. Sag es laut, dann mach weiter.",
    micRefused: "Die App darf dein Mikrofon nicht benutzen. Du kannst es einschalten.", // nieuw, nalezen
    micTurnOn: "Mikrofon einschalten", // nieuw, nalezen
    micStepsIos: "Tippe in der Adressleiste auf „•••“ oder „aA“ › Website-Einstellungen › Mikrofon › Erlauben. Oder: Einstellungen › Apps › Safari › Mikrofon. Tippe dann unten auf den Knopf.", // nieuw, nalezen
    micStepsIosOther: "Tippe auf das Symbol links neben der Webadresse › Berechtigungen › Mikrofon › Zulassen. Oder: Einstellungen › Apps › {app} › Mikrofon. Tippe dann unten auf den Knopf.", // nieuw, nalezen
    micStepsAndroid: "Tippe auf das Symbol links neben der Webadresse › Berechtigungen › Mikrofon › Zulassen. Tippe dann unten auf den Knopf.", // nieuw, nalezen
    micStepsAndroidApp: "Halte das Vloertaal-Symbol auf deinem Startbildschirm gedrückt › App-Info › Berechtigungen › Mikrofon › Zulassen. Tippe dann unten auf den Knopf.", // nieuw, nalezen
    micStepsDesktop: "Klicke auf das Symbol links neben der Webadresse › Mikrofon › Zulassen. Klicke dann unten auf den Knopf.", // nieuw, nalezen
    whichPicture: "Welches Bild ist es?",
    sayAloudInstead: "Sag es stattdessen laut",
    wordsPractised: "Geübte Wörter",
    reviewComplete: "Wiederholung geschafft!",
  },
  gloss: {
    'c.hello.a.why': "Auf einen Abschiedsgruß antwortet man mit einem Abschiedsgruß.",
    'c.people.a.why': "Gefragt wird nach einem Namen. Diese Antwort nennt einen.",
    'c.arrive.a.why': "Gefragt, warum man da ist: Diese Antwort sagt, dass man neu ist und heute anfängt.",
    'c.understand.a.why': "Nicht verstanden? Um Wiederholung bitten ist normal.",
    'c.translate.a.why': "Der Zettel ist noch nicht klar, darum wird er zuerst übersetzt.",
    'c.understood.a.why': "Wer die Aufgabe noch einmal sagt, prüft, ob die Reihenfolge klar ist.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.keeplearning.a.why': "Um Niederländisch bitten ist in Ordnung: Üben hilft.",
    'c.gear.a.why': "Gefragt wird nach dem Helm: Ja, er ist auf dem Kopf.",
    'c.danger.a.why': "Bei einem Unfall ruft man zuerst 112 an.",
    'c.alarm.a.why': "Gefragt wird, ob alle draußen sind: Diese Antwort sagt, wer noch fehlt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Gefragt, was passiert ist: Diese Antwort sagt, was passiert ist und wie es ihm geht.",
    'c.notyet.a.why': "Wenn jemand sagt „probier es einfach“, ist die sichere Antwort: erst vormachen lassen.",
    'c.things.a.why': "Die Frage ist „wo“. Diese Antwort nennt einen Ort.",
    'c.directions.a.why': "Links oder rechts? Diese Antwort wählt eins und sagt, wo.",
    'c.shift.a.why': "Wann fängt die Schicht an? Diese Antwort nennt den Tag und die Uhrzeit.",
    'c.sick.a.why': "Wer krank ist, bleibt zu Hause und sagt Bescheid.",
    'd.speakup.a.why': "Gefragt, ob etwas los ist: Ein ehrliches Ja ist gut.",
    'd.agree.a.why': "Nein sagen ist erlaubt. Einen anderen Tag anbieten hilft.",
    'd.task.a.why': "Gefragt, ob es fertig ist: Diese Antwort sagt „fast“ und wie lange noch.",
    'd.clear.a.why': 'Gefragt, ob es klar ist: zuerst ja, dann die eine Frage.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Eine Referenz ist ein früherer Chef, der über die Arbeit erzählen kann.",
    'c.interview.a.why': "Im Vorstellungsgespräch zählt die Berufserfahrung.",
    'c.findwork.a.why': "Die Frage ist, welche Arbeit. Diese Antwort nennt sie.",
    'c.contract.a.why': "Ein Ja und eine Frage nach der Uhrzeit: klar und motiviert.",
    'c.agency.a.why': "Gefragt nach den Stunden: Ja, und dazu wann und wie.",
    'c.bsn.a.why': "Ein Arbeitgeber darf einen Ausweis sehen wollen, zum Beispiel den Pass.",
    'c.housing.a.why': "Geld, das vom Lohn abgezogen wird, muss schriftlich vereinbart sein.",
    'c.payslip.a.why': "Fehlende Stunden auf der Lohnabrechnung muss man melden.",
    'c.extra.a.why': "Überstunden werden aufgeschrieben, damit man sie auf der Lohnabrechnung prüfen kann.",
    'c.phone.a.why': "Kein Handy bei Maschinen: Nachrichten warten bis zur Pause.",
    'c.smoking.a.why': "Pausen sind zu festen Zeiten, nicht vorher.",
    'c.clock.a.why': "Für jemand anderen stempeln ist nicht erlaubt.",
    'c.hygiene.a.why': "Haarnetz auf, Schmuck ab: Hygieneregeln für Lebensmittel.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.smalltalk.a.why': "Gefragt wird nach dem Wochenende: Eine Sache reicht.",
    'c.mistakes.a.why': "Auf ein Kompliment antwortet man mit Danke.",
    'c.respect.a.why': "Mobbing muss man ansprechen, damit jemand helfen kann.",
    'c.gossip.a.why': "Nicht mitlästern erhält das Vertrauen im Team.",
    'c.boundaries.a.why': "Einen Witz, der wehtut, darf man klar stoppen.",
    'c.health.a.why': "Eine Pause schützt die Gesundheit, darum nimmt man sie.",
    'c.rights.a.why': "Eine Kündigung unterschreibt man nie sofort. Zuerst kommt eine Beratung.",
    'c.mustmay.a.why': "Freiwillig heißt: Du darfst wählen. Arbeit am Samstag ist nicht nötig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "Wann? Diese Antwort nennt einen Monat und wie lange.",
    'c.illness.a.why': "Medizinische Details sind für den Betriebsarzt, nicht für den Chef.",
    'c.warning.a.why': "Ein Arbeitgeber darf den Pass kopieren, aber nicht behalten.",
    'c.gethelp.a.why': "Klar sagen, was los ist: Dann können sie helfen.",
    'c.callin.a.why': "Wann zurück? Diese Antwort nennt einen Tag.",
    'c.texting.a.why': "Eine schnelle Antwort in der App hilft bei der Planung.",
    'c.certs.a.why': "Ein ehrliches Nein und Lust zu lernen: eine gute Antwort.",
    'c.diploma.a.why': "Ja zur Ausbildung sagen und fragen, wer zahlt, ist normal.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.doctor.a.why': "Der Hausarzt-Notdienst muss wissen, wer krank ist und was los ist.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.insurance.a.why': "Der Name der Versicherung steht auf der Krankenversicherungskarte.",
    'c.letters.a.why': "Die Steuererklärung muss bis zum 1. Mai gemacht sein.",
    'c.scams.a.why': "Eine Bank fragt nie nach der PIN. Auflegen ist richtig.",
    'c.bike.a.why': "Wie? Diese Antwort nennt das Verkehrsmittel und die Zeit.",
    'c.transit.a.why': "Nicht der Zug: Diese Antwort nennt stattdessen den Bus.",
    'c.ww.a.why': "Arbeitslosengeld (WW) muss man sofort beantragen.",
    'c.newjob.a.why': "Mit einer Telefonnummer können sie zurückrufen.",
    'c.tools.a.why': "Wo? Diese Antwort nennt den Ort: im Transporter.",
    'c.site.a.why': "Auf einem Dach kommt die Absturzsicherung immer zuerst.",
    'c.line.a.why': "Wie läuft es? Diese Antwort sagt, wie, und nennt das Problem.",
    'c.quality.a.why': "Warum zur Seite gelegt? Diese Antwort nennt den Fehler.",
    'c.client.a.why': "Ein Klient bittet um Hilfe: ein höfliches Ja, mit „u“.",
    'c.privacy.a.why': "Medikamente sind für geschultes Personal: Die Pflegefachkraft gibt sie.",
    'c.kitchen.a.why': "Eine Allergie ist ernst: Der Küchenchef muss es wissen.",
    'c.service.a.why': "Gefragt nach der Rechnung: ein kurzes Ja, und schon unterwegs.",
    'c.cleaning.a.why': "Fertig? Diese Antwort sagt „fast“ und wie viele noch übrig sind.",
    'c.cleansafe.a.why': "Ein nasser Boden ist rutschig: Eine Warnung hilft.",
    'c.shelves.a.why': "Gefragt, wo: Diese Antwort nennt den Gang und hilft.",
    'c.checkout.a.why': "Gefragt, ob man mit Karte zahlen kann: ein freundliches Ja.",
    'c.counting.a.why': "Gefragt wird, wie viele: Diese Antwort nennt die Zahl und prüft sie Ziffer für Ziffer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Gefragt nach der Uhrzeit: Diese Antwort nennt eine Uhrzeit.",
    'c.measures.a.why': "Gefragt, wie lang: Diese Antwort nennt eine Länge.",
    'c.aihelp.a.why': "Gefragt, wer es geschrieben hat: ein ehrliches Ja, das die Hilfe nennt.",
    'c.aiprivate.a.why': "Gebeten, Namen in einen Chatbot zu geben: Diese Antwort sagt nein und warum.",
    'c.aifake.a.why': "Eine neue Nummer bittet um Geld: Diese Antwort prüft das zuerst.",
    'c.aiplan.a.why': "Eine App hat den Dienstplan gemacht: Diese Antwort bittet um einen Menschen.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Gefragt ist, wie viele Reihen: Diese Antwort nennt eine Zahl und was noch fehlt.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Gerade gespritzt: Diese Antwort sagt „noch nicht“ und warum.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Gefragt ist der Nachname: Diese Antwort nennt ihn und bietet an, ihn zu buchstabieren.", // nagelezen AI 22 nov
    'c.dates.a.why': "Gefragt ist das Datum: Diese Antwort nennt den Tag und das Datum.", // nagelezen AI 22 nov
    'c.permit.a.why': "Ein Nein ist in Ordnung, wenn du einen Grund nennst. Einen anderen Tag anzubieten, hilft.", // nagelezen AI 22 nov
    'c.kids.a.why': "Gefragt ist warum: Diese Antwort nennt den Grund, die Kita hat angerufen.", // nagelezen AI 22 nov
    'c.body.a.why': "Gefragt ist, wo es wehtut: Diese Antwort nennt die Stelle und die Ursache.", // nagelezen AI 22 nov
    'c.jobends.a.why': "Die Wohnung hängt am Job: Diese Antwort fragt nach der Kündigungsfrist.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Ein Wort ist unklar: Vor dem Anfangen zu fragen ist die richtige Antwort.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Gefragt, ob alles fertig ist: Diese Antwort sagt, was nicht fertig ist, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Gefragt warum: Diese Antwort nennt den Grund, die Augen brauchen Schutz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Arbeit an einer Lampe: Diese Antwort fragt zuerst, ob der Strom aus ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "Bitte um einen Reifenwechsel: ein Ja, und eine Frage, wo die Reifen sind.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Extraarbeit: Der Kunde muss zuerst zustimmen, darum fragt diese Antwort den Chef.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Gefragt wann: Diese Antwort nennt den Tag, und der Vertrag kommt zuerst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Das Feedback ist noch unklar: Um Vorzeigen zu bitten ist eine gute Antwort.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Gefragt nach dem Wählen: ein Ja, und die zwei Dinge zum Mitbringen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "Die Polizei will den Ausweis: zeigen und fragen, was los ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Gefragt, ob das Einloggen klappt: Diese Antwort sagt Nein, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Gefragt nach dem Link: ein ehrliches Ja, und ein Anruf bei der IT-Abteilung.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Gefragt nach Stärken: Diese Antwort nennt eine, mit einem Beispiel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Gefragt nach dem Plan: Diese Antwort nennt die bbl und was sie bedeutet.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Gefragt, ob sie verschickt ist: noch nicht, sie wird erst geprüft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "Später zahlen wird angeboten: ein höfliches Nein, mit dem Grund.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "Eine Pille wird angeboten: ein höfliches Nein, mit dem Grund.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.newcolleague.a.why': "„Glaube ich“ ist noch nicht sicher: Wer bittet, es zu zeigen, prüft, ob es klappt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Gefragt, warum die Linie geputzt wird: Das nächste Produkt hat keine Nüsse.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Gefragt, wie breit: eine Zahl mit der Einheit, und aufgeschrieben.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Gefragt, wo das Holz hinkommt: ein Ort, und wo der ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Gefragt, was passiert ist: Ja, und was, und wie lange.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Gefragt, wie es ihm geht: was du siehst, und dass es neu ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Gebeten, einen Menschen zu heben: nicht allein, zuerst kommt der Lifter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Gefragt nach sauberen Gläsern: Ja, und wann sie kommen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Ein Auftrag vom Chef: wiederholt, damit er weiß, dass du es gehört hast.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Gefragt, ob das Büro fertig ist: Nein, mit dem Grund.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Gefragt nach einem Tuch: Nein, weil Rot für die Toilette ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Gefragt nach Milch: nicht „nein“, sondern im Lager nachschauen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Ein wütender Kunde: ruhige Worte, und ein Kollege kommt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Gefragt, welche du pflückst: Die Farbe zeigt, was reif ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Ein Gewitter kommt: Aufhören und reingehen ist die sichere Wahl.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Gefragt, ob es passt: Nein, und noch einmal messen statt Gewalt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Gefragt, ob du es anfassen darfst: noch nicht, heißes Metall muss erst abkühlen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Gefragt, was du hörst: welches Teil, und was es macht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Gefragt, ob du anfangen darfst: noch nicht, weil das Auto elektrisch ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Gefragt, ob das Paket für sie ist: Ja, und dann die Unterschrift.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Noch eine Tour ist gefragt: Nein, weil die Pause zuerst kommt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Gefragt, wie es dir geht: ein kurzes Ja, und dass du es langsam angehst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Gefragt, wie es dir geht: Ein ehrliches „nicht so gut“ ist in Ordnung.", // nieuw, nalezen // nagelezen AI 22 nov
    // u.communicate en u.feedback (5 november 2026).
    'd.explain.a.why': "Gefragt, was nicht stimmt: Diese Antwort sagt, was los ist und was gebraucht wird.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "Nicht sicher, ob es ein Witz ist: Fragen ist besser als raten.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "Gefragt, warum es nicht fertig ist: ein ruhiger Grund, und was zuerst kommt.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "Jemand bittet um einen Moment: ein Ja, und eine Frage, damit die Person es erzählen kann.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "Rückruf nach einem verpassten Anruf: ein Gruß, und warum du anrufst.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "Feedback angeboten: ein Ja, und dass du es gut machen willst.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "Gefragt nach der Arbeit: zuerst, was gut ist, dann, was besser sein kann.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "Gefragt nach Fragen: Diese Antwort stellt eine, über den Dienstplan.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Gefragt nach dem Lagerplatz: der Gang und das Fach.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Gefragt, ob die Palette fertig ist: nein, und was noch fehlt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Gefragt, ob der Lieferwagen in Ordnung ist: nein, und was kaputt ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Gefragt, wo du bist: der Ort, und wie viel später du kommst.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Gefragt, ob man weiß, wie es geht: Diese Antwort sagt ehrlich nein, noch nicht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Gefragt, ob es eine Frage gibt: Ja, und zuerst die Frage, ob Zeit ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Gefragt, ob man es findet: Nein, und die Bitte, es zu zeigen.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Gebeten, etwas zu halten: Ja, und die Frage, wohin damit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Gefragt, ob die Tür zu ist: Nein, und sie wird jetzt zugemacht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Gefragt, ob er voll ist: Ja, und er wird geleert.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Gebeten, es jetzt zu machen: Ja, und die Frage, was danach kommt.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Gefragt, wo das Rührgerät ist: ein Ort, und was in der Nähe ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Gefragt, wo man anfängt: in der Mitte, auf der Mittellinie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Gefragt, ob die Wand trocken ist: Nein, und wie lange man noch warten muss.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Gefragt, ob es ein Quadrat ist: Nein, ein Rechteck, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Gefragt, wie viel Grad: die Zahl, und wovon es die Hälfte ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Gefragt, wie groß der Boden ist: die Rechnung, und das Ergebnis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Gefragt, welcher Pinsel: breit für die Wand, klein für die Ecken.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Gefragt, ob man streichen darf: Nein, und was zuerst kommt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Gefragt, wie viele Steine noch da sind: eine Palette, und dass es genug ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Gefragt, wie hoch die Reihe sein muss: wo man es sehen kann.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Gefragt, welche Säge: die Rückensäge, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Gefragt, ob der Winkel rechtwinklig ist: Ja, und woran man es sieht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Gefragt, wo der Akkuschrauber ist: ein Ort, und dass er fast voll ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Gefragt, wie man das Regalbrett befestigt: womit, und wie viele.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Gefragt, warum sie anhält: der Sensor, und was er nicht sieht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Gefragt, wie oft: einmal pro Stunde, und wo man es aufschreibt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Gefragt, wie viele pro Karton: die Zahl, und wo sie steht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Gefragt, wann: der Wochentag, und der Moment an diesem Tag.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Gefragt, welcher Draht wohin kommt: die gleiche Farbe an die gleiche Farbe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Gefragt, ob man ihn aufmachen darf: Nein, und wer es macht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Gefragt, ob es noch undicht ist: ein bisschen, und was man dagegen tut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Gefragt, warum sie scharf ist: Es ist noch ein Grat dran.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Gefragt, welcher Schritt: die Nummer, und wo man nachschaut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Gefragt, wie fest: bis der Schlüssel klickt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Gefragt, ob man dort stehen darf: Nein, nie, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Gefragt, ob es in Ordnung ist: Nein, und was damit nicht stimmt.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Gefragt, wie tief: die Tiefe, und nicht tiefer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Gefragt, ob sie reif ist: Nein, zu grün, und was man tun soll.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Gefragt, warum es warm ist: Der Schirm und die Klappen sind zu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Gefragt, ob man sie totmachen darf: Nein, und warum sie hilft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Gefragt, ob sie runter müssen: Ja, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Gefragt, wie viel: die Liter, und wie man es prüft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Gefragt, ob sie neu muss: Ja, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Gefragt, was gemacht werden muss: auf den Arbeitsauftrag schauen.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Gefragt, ob man ihn nehmen darf: Ja, und was man zuerst tun muss.", // nieuw, nalezen
    'c.pruning.a.why': "Gefragt, welche Äste: nur die toten.", // nieuw, nalezen
    'c.hedge.a.why': "Gefragt, wie hoch: bis zur Schnur, nicht tiefer.", // nieuw, nalezen
    'c.chainsaw.a.why': "Gefragt, ob man darf: noch nicht, und was zuerst kommt.", // nieuw, nalezen
    'c.weeding.a.why': "Gefragt, ob es Unkraut ist: Nein, und was man damit macht.", // nieuw, nalezen
    'c.planting.a.why': "Gefragt, wohin sie kommt: der Platz im Beet.", // nieuw, nalezen
    'c.roadside.a.why': "Gefragt, ob man rübergehen kann: Nein, warten, und warum.", // nieuw, nalezen
    'c.litter.a.why': "Ein Anwohner fragt, wann: Du weißt es nicht, aber wer es weiß.", // nieuw, nalezen
    'c.reception.a.why': "Ein Besucher hat einen Termin: einen Moment, du rufst an.", // nieuw, nalezen
    'c.visitors.a.why': "Gefragt, wohin die Jacke kommt: der Ort, und wo er ist.", // nieuw, nalezen
    'c.mailroom.a.why': "Gefragt, für wen es ist: die Abteilung, und der Stock.", // nieuw, nalezen
    'c.meetingroom.a.why': "Gefragt, um wie viel Uhr: die Uhrzeit, und was getan werden muss.", // nieuw, nalezen
    'c.faults.a.why': "Gefragt, warum es kalt ist: was kaputt ist, und wann Hilfe kommt.", // nieuw, nalezen
    'c.repairs.a.why': "Gefragt, ob er piept: Ja, und warum.", // nieuw, nalezen
    'c.moving.a.why': "Gefragt, wohin er kommt: der Raum, und wo man nachschaut.", // nieuw, nalezen
    'c.closing.a.why': "Gefragt, ob noch jemand drinnen ist: Nein, und was du jetzt machst.", // nieuw, nalezen
    'c.patrol.a.why': "Gefragt, ob du etwas gesehen hast: Ja, was, und wo.", // nieuw, nalezen
    'c.access.a.why': "Gebeten, ohne Karte hereinzukommen: Tut mir leid, nicht ohne Karte.", // nieuw, nalezen
    'c.cameras.a.why': "Gefragt, was du siehst: wer, wo, und was du tust.", // nieuw, nalezen
    'c.report.a.why': "Gefragt, was in den Bericht kommt: was, wo und wann.", // nieuw, nalezen
    'c.evacuation.a.why': "Gefragt, ob alle draußen sind: Nein, und wie viele fehlen.", // nieuw, nalezen
    'c.firstaid.a.why': "Gefragt, wo der AED ist: der Ort, und was daneben ist.", // nieuw, nalezen
    'c.shoplifting.a.why': "Gefragt, ob man eine Tasche durchsuchen darf: Nein, und wer das macht.", // nieuw, nalezen
    'c.aggression.a.why': "Gefragt, warum nicht: der Grund, ruhig gesagt.", // nieuw, nalezen
    'c.hygienelock.a.why': "Gefragt nach einer Uhr: Nein, und die Regel dahinter.", // nieuw, nalezen
    'c.allergens.a.why': "Gefragt, ob es zusammen darf: Nein, und warum.", // nieuw, nalezen
    'c.coldroom.a.why': "Gefragt, warum er piept: der Grund, und was man tun muss.", // nieuw, nalezen
    'c.foreignbody.a.why': "Gefragt, was man tun soll: wem man es zeigt.", // nieuw, nalezen
    'c.cutting.a.why': "Gefragt, wie viel: das Gewicht, und wo man nachschaut.", // nieuw, nalezen
    'c.labels.a.why': "Gefragt, welches Datum: wann, und wo man nachschaut.", // nieuw, nalezen
    'c.linecleaning.a.why': "Gefragt, ob es sauber ist: noch nicht, und was noch fehlt.", // nieuw, nalezen
    'c.haccp.a.why': "Gefragt, warum: damit wir wissen, dass das Essen sicher ist.", // nieuw, nalezen
    'c.binlorry.a.why': "Gefragt, ob man hinten mitfahren darf: Nein, und wo man mitfährt.", // nieuw, nalezen
    'c.reversing.a.why': "Um Hilfe gebeten: Ja, wo du stehst, und was der andere tun soll.", // nieuw, nalezen
    'c.wastesorting.a.why': "Gefragt, wohin es kommt: die Tonne, und warum.", // nieuw, nalezen
    'c.wastesafety.a.why': "Gefragt, was man nach einem Schnitt tut: auswaschen, und es sagen.", // nieuw, nalezen
    'c.yard.a.why': "Gefragt, wohin sie kommt: der Container, und wo er ist.", // nieuw, nalezen
    'c.hazardous.a.why': "Gefragt, was drin ist: Du weißt es nicht, also zur Seite damit.", // nieuw, nalezen
    'c.baler.a.why': "Gefragt, ob man nachschauen darf: Nein, und was zuerst kommt.", // nieuw, nalezen
    'c.shovel.a.why': "Gefragt, ob man vorbeigehen darf: nur, wenn der Fahrer dich sieht.", // nieuw, nalezen
    'c.nappies.a.why': "Gefragt, wann: die Uhrzeit, und wo es steht.", // nieuw, nalezen
    'c.mealtime.a.why': "Gefragt, ob er ihn haben darf: Nein, warum, und wo man nachschaut.", // nieuw, nalezen
    'c.naptime.a.why': "Gefragt, ob sie schläft: Ja, seit wann, und dass du nachschaust.", // nieuw, nalezen
    'c.playtime.a.why': "Gefragt, ob ein Kind spielen darf: Ja, wo, und was danach kommt.", // nieuw, nalezen
    'c.pickup.a.why': "Gefragt, wer abholt: die Person, und dass sie auf der Liste steht.", // nieuw, nalezen
    'c.childsafety.a.why': "Gefragt, ob sie hingefallen ist: Ja, was sie hat, und wen du anrufst.", // nieuw, nalezen
    'c.sickchild.a.why': "Gefragt, wie es ihm geht: was du siehst, und was du tust.", // nieuw, nalezen
    'c.grouprules.a.why': "Gefragt, ob man allein gehen darf: Ja, aber zuerst einem Kollegen Bescheid sagen.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Gefragt, ob sie fertig sind: noch nicht, und warum.", // nieuw, nalezen
    'c.hotelroom.a.why': "Gefragt, wie viele noch übrig sind: die Zahl, und wann du fertig bist.", // nieuw, nalezen
    'c.dosing.a.why': "Gesagt, mehr zu nehmen: nein, mehr ist nicht besser, und was du nimmst.", // nieuw, nalezen
    'c.officenight.a.why': "Gefragt, ob du allein arbeitest: ja, und du schickst eine Nachricht.", // nieuw, nalezen
    'c.knives.a.why': "Gebeten zu schneiden: ja, Chef, und eine Frage, wie.", // nieuw, nalezen
    'c.rawcooked.a.why': "Gefragt, ob es glutenfrei ist: nicht sicher, also schaust du auf die Liste.", // nieuw, nalezen
    'c.pass.a.why': "Gefragt, wo das Essen ist: auf dem Pass, und du bringst es jetzt.", // nieuw, nalezen
    'c.bill.a.why': "Gefragt, ob man getrennt zahlen kann: ja, und du holst das Kartenterminal.", // nieuw, nalezen
    'c.washing.a.why': "Der Klient sagt nein: Das ist in Ordnung, und du bietest etwas anderes an.", // nieuw, nalezen
    'c.observing.a.why': "Gefragt, ob es etwas Besonderes gibt: ja, und genau was.", // nieuw, nalezen
    'c.homecare.a.why': "Gefragt, wer da ist: ein Gruß, wer du bist, und darf ich hereinkommen.", // nieuw, nalezen
    'c.liftaids.a.why': "Gefragt, ob man es allein macht: ja, mit dem Gleittuch, und du holst es.", // nieuw, nalezen
    'c.returns.a.why': "Gefragt, ob man es zurückbringen kann: ja, und eine Frage nach dem Kassenbon.", // nieuw, nalezen
    'c.facing.a.why': "Gefragt, ob du fertig bist: fast, und was noch fehlt.", // nieuw, nalezen
    'c.shrink.a.why': "Gefragt, ob man in deine Tasche schauen darf: ja, und du zeigst den Kassenbon.", // nieuw, nalezen
    'c.shopclose.a.why': "Gefragt, ob man hereinkommen darf: Tut mir leid, geschlossen, und wann wieder geöffnet ist.", // nieuw, nalezen
    'c.hirer.a.why': "Gefragt, ob du woanders neu anfängst: ja, und eine Frage nach der Uhrzeit.", // nieuw, nalezen
    'c.phases.a.why': "Gesagt, dass der Einsatz endet: okay, und du fragst nach anderer Arbeit.", // nieuw, nalezen
    'c.deductions.a.why': "Von einem Abzug gehört: Du fragst, ob er erlaubt ist, und prüfst es.", // nieuw, nalezen
    'c.agencyhome.a.why': "Gesagt, bald auszuziehen: Das ist kurz, und du holst dir zuerst Rat.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Gesagt, dass sich der Dienstplan geändert hat: okay, und welcher Tag.", // nieuw, nalezen
    'c.breaks.a.why': "Nach der Mittagspause gefragt: die Uhrzeit, und wie lange.", // nieuw, nalezen
    'c.wound.a.why': "Fast ohnmächtig: ihn liegen lassen, und Hilfe holen.", // nieuw, nalezen
    'c.callhelp.a.why': "Gefragt, ob er reagiert: nein, er reagiert nicht.", // nieuw, nalezen
    'c.vacancy.a.why': "Gefragt, warum du anrufst: die offene Stelle, und ob sie noch frei ist.", // nieuw, nalezen
    'c.result.a.why': "Ein Nein bekommen: eine ruhige Antwort, und du fragst nach dem Grund.", // nieuw, nalezen
    'c.residence.a.why': "Gesagt, dass die Erlaubnis fast abgelaufen ist: Du beantragst sofort eine neue.", // nieuw, nalezen
    'c.newhome.a.why': "Gefragt, wo du wohnst: eine neue Wohnung, und die neue Adresse.", // nieuw, nalezen
    'c.payparts.a.why': "Nach der Personalnummer gefragt: wo sie auf der Lohnabrechnung steht.", // nieuw, nalezen
    'c.latepay.a.why': "Gesagt, dass das Geld später kommt: Du willst das schriftlich.", // nieuw, nalezen
    'c.holiday.a.why': "Gefragt, ob du im Mai gehst: lieber im Juli, und warum.", // nieuw, nalezen
    'c.special.a.why': "Nach dem Geburtsurlaub gefragt: ja, und wann.", // nieuw, nalezen
    'c.unwell.a.why': "Gefragt, ob es dir gut geht: nein, und ob du nach Hause darfst.", // nieuw, nalezen
    'c.injury.a.why': "Um eine Aussage gebeten: ja, und eine Kopie für dich.", // nieuw, nalezen
    'c.debt.a.why': "Gesagt, du sollst bleiben, bis die Schulden bezahlt sind: nicht erlaubt, Hilfe holen.", // nieuw, nalezen
    'c.inspection.a.why': "Gefragt, ob du sprechen willst: ja, aber nicht da, wo der Chef es hört.", // nieuw, nalezen
    'c.carpool.a.why': "Gefragt, wer fährt: du, und wann du abholst.", // nieuw, nalezen
    'c.train.a.why': "Gefragt, warum du zu spät bist: der Zug, und du hast eine Nachricht geschickt.", // nieuw, nalezen
    'c.checklist.a.why': "Gefragt, ob du etwas vergessen hast: noch ein Blick auf die Liste.", // nieuw, nalezen
    'c.leavesite.a.why': "Gefragt, ob du als Letzter gehst: ja, alles aus und die Tür abgeschlossen.", // nieuw, nalezen
    'c.stagedays.a.why': "Gefragt, warum du weg warst: krank, und du hast beide angerufen.", // nieuw, nalezen
    'c.stageend.a.why': "Nach deinen Plänen gefragt: zuerst das Diplom, dann Arbeit.", // nieuw, nalezen
    'c.neighbours.a.why': "Eine neue Nachbarin grüßt: schön, sie kennenzulernen, und dein Name.", // nieuw, nalezen
    'c.join.a.why': "Gefragt, ob du kommst: ja, und du willst mit dem Lehrer sprechen.", // nieuw, nalezen
    'c.workphotos.a.why': "Um ein Foto für das Internet gebeten: ein höfliches Nein.", // nieuw, nalezen
    'c.device.a.why': "Nach einer neuen App gefragt: zuerst die IT-Abteilung fragen.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "Gefragt, was ein Schild bedeutet: Vorsicht, und welches Schild es ist.", // nieuw, nalezen
    'c.substances.a.why': "Gefragt, ob es giftig ist: nicht raten, sondern nachschauen.", // nieuw, nalezen
    'c.firefight.a.why': "Gesagt, dass es brennt: Es ist klein, also den Feuerlöscher holen.", // nieuw, nalezen
    'c.permitwork.a.why': "Gefragt, wer draußen bleibt: man selbst, und die eigene Aufgabe.", // nieuw, nalezen
    'c.vog.a.why': "Nach dem VOG gefragt: noch nicht, und worauf man wartet.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "Nach dem Alarm gefragt: was zu hoch ist, und wo.", // nieuw, nalezen
    'c.plantfault.a.why': "Gefragt, ob man starten darf: nein, es ist noch ein Schloss dran.", // nieuw, nalezen
    'c.shiftwork.a.why': "Gefragt, was passiert ist: die Störung, und wo sie aufgeschrieben ist.", // nieuw, nalezen
    'c.heatdust.a.why': "Nach dem Handy gefragt: nein, wegen der Gefahr hier.", // nieuw, nalezen
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "Gesagt, dass die Rechnung nicht bezahlt ist: ja, und die Bitte um eine Ratenzahlung.", // nieuw, nalezen
    'c.taxes.a.why': "Gesagt, dass ein blauer Umschlag da ist: danke, und sofort aufmachen.", // nieuw, nalezen
    'c.discrimination.a.why': "Gefragt, ob es dir gut geht: nein, und du meldest es.", // nieuw, nalezen
    'c.union.a.why': "Gefragt, warum du Mitglied bist: Sie setzen sich für dich ein.", // nieuw, nalezen
    'c.kiln.a.why': "Nach Scherben mit der Hand gefragt: nein, Handfeger und Kehrblech.", // nieuw, nalezen
    'c.mixlab.a.why': "Gefragt, ob die Charge freigegeben ist: noch nicht, das Labor testet sie.", // nieuw, nalezen
    'c.firstweeks.a.why': "Nach dem Rundgang gefragt: fast alles, und eine Frage.", // nieuw, nalezen
    'c.orderpick.a.why': "Gebeten, den Schubmaststapler zu fahren: nein, keine Schulung dafür.", // nieuw, nalezen
    // four new lessons (27 November 2026).
    'd.appraisal.a.why': "Nach dem Ziel gefragt: eine klare Sache, die man lernen will.", // nieuw, nalezen
    'c.forms.a.why': "Nach dem Formular gefragt: fast fertig, und wo man unterschreibt.", // nieuw, nalezen
    'c.voicemail.a.why': "Um Name und Nummer gebeten: der Name, und die Bitte um Rückruf.", // nieuw, nalezen
    'c.dentist.a.why': "Nach dem letzten Besuch gefragt: wann, und die Bitte um eine Kontrolle.", // nieuw, nalezen
  },
};

export default t;
