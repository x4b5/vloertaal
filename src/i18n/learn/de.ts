import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Kein Mikrofon nötig. Sag es laut, dann mach weiter.",
    micRetry: "Mikrofon noch einmal versuchen",
    micFailed: "Das Mikrofon hat nicht funktioniert. Sag es laut, dann mach weiter.",
    whichPicture: "Welches Bild ist es?",
    wrongTapsN: "Falsch getippt: {n}",
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
    'c.understood.a.why': "Die Aufgabe noch einmal sagen prüft, ob der Auftrag klar ist.",
    'c.keeplearning.a.why': "Um Niederländisch bitten ist in Ordnung: Üben hilft.",
    'c.gear.a.why': "Gefragt wird nach dem Helm: Ja, er ist auf dem Kopf.",
    'c.danger.a.why': "Bei einem Unfall ruft man zuerst 112 an.",
    'c.accident.a.why': "Gefragt, was passiert ist: Diese Antwort sagt, was passiert ist und wie es ihm geht.",
    'c.notyet.a.why': "Wenn jemand sagt „probier es einfach“, ist die sichere Antwort: erst vormachen lassen.",
    'c.things.a.why': "Die Frage ist „wo“. Diese Antwort nennt einen Ort.",
    'c.directions.a.why': "Links oder rechts? Diese Antwort wählt eins und sagt, wo.",
    'c.shift.a.why': "Wann fängt die Schicht an? Diese Antwort nennt den Tag und die Uhrzeit.",
    'c.sick.a.why': "Wer krank ist, bleibt zu Hause und sagt Bescheid.",
    'd.speakup.a.why': "Gefragt, ob etwas los ist: Ein ehrliches Ja ist gut.",
    'd.agree.a.why': "Nein sagen ist erlaubt. Einen anderen Tag anbieten hilft.",
    'd.task.a.why': "Gefragt, ob es fertig ist: Diese Antwort sagt „fast“ und wie lange noch.",
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
    'c.hygiene.a.why': "Haarnetz auf, Schmuck ab: Regeln für sauberes Essen.",
    'c.smalltalk.a.why': "Gefragt wird nach dem Wochenende: Eine Sache reicht.",
    'c.mistakes.a.why': "Auf ein Kompliment antwortet man mit Danke.",
    'c.respect.a.why': "Mobbing muss man ansprechen, damit jemand helfen kann.",
    'c.gossip.a.why': "Nicht mitlästern erhält das Vertrauen im Team.",
    'c.boundaries.a.why': "Einen Witz, der wehtut, darf man klar stoppen.",
    'c.health.a.why': "Eine Pause schützt die Gesundheit, darum nimmt man sie.",
    'c.rights.a.why': "Eine Kündigung unterschreibt man nie sofort. Zuerst kommt eine Beratung.",
    'c.leave.a.why': "Wann? Diese Antwort nennt einen Monat und wie lange.",
    'c.illness.a.why': "Medizinische Details sind für den Betriebsarzt, nicht für den Chef.",
    'c.warning.a.why': "Ein Arbeitgeber darf den Pass kopieren, aber nicht behalten.",
    'c.gethelp.a.why': "Klar sagen, was los ist: Dann können sie helfen.",
    'c.callin.a.why': "Wann zurück? Diese Antwort nennt einen Tag.",
    'c.texting.a.why': "Eine schnelle Antwort in der App hilft bei der Planung.",
    'c.certs.a.why': "Ein ehrliches Nein und Lust zu lernen: eine gute Antwort.",
    'c.diploma.a.why': "Ja zur Schulung und fragen, wer zahlt, ist normal.",
    'c.doctor.a.why': "Der Hausarztdienst muss wissen, wer krank ist und was los ist.",
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
    'c.hours.a.why': "Gefragt nach der Uhrzeit: Diese Antwort nennt eine Uhrzeit.",
    'c.measures.a.why': "Gefragt, wie lang: Diese Antwort nennt eine Länge.",
    'c.aihelp.a.why': "Gefragt, wer es geschrieben hat: ein ehrliches Ja, das die Hilfe nennt.",
    'c.aiprivate.a.why': "Gebeten, Namen in einen Chatbot zu geben: Diese Antwort sagt nein und warum.",
    'c.aifake.a.why': "Eine neue Nummer bittet um Geld: Diese Antwort prüft das zuerst.",
    'c.aiplan.a.why': "Eine App hat den Dienstplan gemacht: Diese Antwort bittet um einen Menschen.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Gefragt ist, wie viele Reihen: Diese Antwort nennt eine Zahl und was noch fehlt.", // nagelezen (2e lezing)
    'c.greensafe.a.why': "Gerade gespritzt: Diese Antwort sagt „noch nicht“ und warum.", // nagelezen (2e lezing)
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Gefragt ist der Nachname: Diese Antwort nennt ihn und bietet an, ihn zu buchstabieren.",
    'c.dates.a.why': "Gefragt ist das Datum: Diese Antwort nennt den Tag und das Datum.",
    'c.permit.a.why': "Ein Nein ist in Ordnung, wenn du einen Grund nennst. Einen anderen Tag anzubieten, hilft.",
    'c.kids.a.why': "Gefragt ist warum: Diese Antwort nennt den Grund, die Kita hat angerufen.",
    'c.body.a.why': "Gefragt ist, wo es wehtut: Diese Antwort nennt die Stelle und die Ursache.",
    'c.jobends.a.why': "Die Wohnung hängt am Job: Diese Antwort fragt nach der Kündigungsfrist.",
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Ein Wort ist unklar: Vor dem Anfangen zu fragen ist die richtige Antwort.", // nieuw, nalezen
    'c.handover.a.why': "Gefragt, ob alles fertig ist: Diese Antwort sagt, was nicht fertig ist, und warum.", // nieuw, nalezen
    'c.workshop.a.why': "Gefragt warum: Diese Antwort nennt den Grund, die Augen brauchen Schutz.", // nieuw, nalezen
    'c.power.a.why': "Arbeit an einer Lampe: Diese Antwort fragt zuerst, ob der Strom aus ist.", // nieuw, nalezen
    'c.garage.a.why': "Bitte um einen Reifenwechsel: ein Ja, und eine Frage, wo die Reifen sind.", // nieuw, nalezen
    'c.carjob.a.why': "Extraarbeit: Der Kunde muss zuerst zustimmen, darum ruft diese Antwort ihn an.", // nieuw, nalezen
    'c.placement.a.why': "Gefragt wann: Diese Antwort nennt den Tag, und der Vertrag kommt zuerst.", // nieuw, nalezen
    'c.review.a.why': "Das Feedback ist noch unklar: Um Vorzeigen zu bitten ist eine gute Antwort.", // nieuw, nalezen
    'c.council.a.why': "Gefragt nach dem Wählen: ein Ja, und die zwei Dinge zum Mitbringen.", // nieuw, nalezen
    'c.police.a.why': "Die Polizei will den Ausweis: zeigen und fragen, was los ist.", // nieuw, nalezen
    'c.login.a.why': "Gefragt, ob das Einloggen klappt: Diese Antwort sagt Nein, und warum.", // nieuw, nalezen
    'c.phish.a.why': "Gefragt nach dem Link: ein ehrliches Ja, und ein Anruf bei der IT-Abteilung.", // nieuw, nalezen
    'c.mychoice.a.why': "Gefragt nach Stärken: Diese Antwort nennt eine, mit einem Beispiel.", // nieuw, nalezen
    'c.nextstep.a.why': "Gefragt nach dem Plan: Diese Antwort nennt die bbl und was sie bedeutet.", // nieuw, nalezen
    'c.email.a.why': "Gefragt, ob sie verschickt ist: noch nicht, sie wird erst geprüft.", // nieuw, nalezen
    'c.budget.a.why': "Später zahlen wird angeboten: ein höfliches Nein, mit dem Grund.", // nieuw, nalezen
    'c.healthy.a.why': "Eine Pille wird angeboten: ein höfliches Nein, mit dem Grund.", // nieuw, nalezen
  },
};

export default t;
