import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Sich bewerben',
    'l.cv': 'Dein Lebenslauf und dein Anschreiben',
    'w.cv': 'der Lebenslauf',
    'w.motivatie': 'die Motivation (warum du die Stelle willst)',
    'w.ervaring': 'die Erfahrung',
    'w.opleiding': 'die Ausbildung',
    'w.vaardigheden': 'die Fähigkeiten',
    'w.referentie': 'die Referenz (jemand, der über deine Arbeit erzählen kann)',
    's.cv.1': 'Hier ist mein Lebenslauf.',
    's.cv.2': 'Ich habe Erfahrung auf dem Bau.',
    's.cv.3': 'Ich spreche drei Sprachen.',
    'c.cv.q': 'Hast du eine Referenz?',
    'c.cv.a': 'Ja, meinen früheren Chef.',
    'l.interview': 'Das Vorstellungsgespräch',
    'w.sollicitatiegesprek': 'das Vorstellungsgespräch',
    'w.begroeten': 'begrüßen',
    'w.vertellen': 'erzählen',
    'w.vraagstellen': 'eine Frage stellen',
    'w.salaris': 'das Gehalt',
    'w.functie': 'die Stelle, die Position',
    's.interview.1': 'Ich habe ein Vorstellungsgespräch.',
    's.interview.2': 'Ich lerne noch Niederländisch.',
    's.interview.3': 'Wann höre ich von Ihnen?',
    'c.interview.q': 'Erzähl mal etwas über dich.',
    'c.interview.a': 'Ich habe fünf Jahre in einem Lager gearbeitet.',
    'u.contract': 'Arbeit und Verträge',
    'l.findwork': 'Arbeit finden',
    'w.vacature': 'die offene Stelle',
    'w.uitzendbureau': 'die Zeitarbeitsfirma',
    'w.solliciteren': 'sich bewerben',
    'w.contract': 'der Vertrag',
    'w.tekenen': 'unterschreiben',
    'w.tijdelijk': 'befristet, vorübergehend',
    's.findwork.1': 'Ich möchte mich bewerben.',
    's.findwork.2': 'Ist der Vertrag befristet oder unbefristet?',
    's.findwork.3': 'Darf ich eine Kopie vom Vertrag haben?',
    'c.findwork.q': 'Was für eine Arbeit suchst du?',
    'c.findwork.a': 'Ich suche Arbeit in einem Lager.',
    'l.contract': 'Dein Vertrag',
    'w.werkgever': 'der Arbeitgeber',
    'w.uren': 'die Stunden',
    'w.oproepkracht': 'die Abrufkraft (du arbeitest, wenn man dich ruft)',
    'w.proeftijd': 'die Probezeit',
    'w.opzegtermijn': 'die Kündigungsfrist',
    'w.cao': 'der Tarifvertrag',
    's.contract.1': 'Wie viele Stunden arbeite ich pro Woche?',
    's.contract.2': 'Wie lange ist die Probezeit?',
    's.contract.3': 'Welcher Tarifvertrag gilt für mich?',
    'c.contract.q': 'Kannst du morgen zur Arbeit kommen?',
    'c.contract.a': 'Ja, um wie viel Uhr muss ich da sein?',
    'l.agency': 'Über eine Zeitarbeitsfirma arbeiten',
    'w.uitzendkracht': 'die Zeitarbeitskraft',
    'w.intercedent': 'die Ansprechperson bei der Zeitarbeitsfirma',
    'w.urenbriefje': 'der Stundenzettel',
    'w.opdracht': 'der Einsatz (die Arbeit bei einer Firma)',
    'w.verlengen': 'verlängern',
    'w.uitbetalen': 'auszahlen',
    's.agency.1': 'Ich arbeite über eine Zeitarbeitsfirma.',
    's.agency.2': 'Wird mein Einsatz verlängert?',
    's.agency.3': 'Wann endet mein Einsatz?',
    'c.agency.q': 'Hast du deine Stunden gemeldet?',
    'c.agency.a': 'Ja, gestern in der App.',
    'u.papers': 'Wohnen und Papiere',
    'l.bsn': 'Deine BSN und deine Papiere',
    'w.bsn': 'die Bürgerservicenummer (BSN)',
    'w.identiteitsbewijs': 'der Ausweis',
    'w.gemeente': 'die Gemeinde, das Rathaus',
    'w.inschrijven': 'sich anmelden',
    'w.adres': 'die Adresse',
    'w.zorgverzekering': 'die Krankenversicherung',
    's.bsn.1': 'Ich melde mich bei der Gemeinde an.',
    's.bsn.2': 'Meine Adresse hat sich geändert.',
    's.bsn.3': 'Ich logge mich mit DigiD ein.',
    'c.bsn.q': 'Darf ich deinen Ausweis sehen?',
    'c.bsn.a': 'Ja, hier ist mein Pass.',
    'l.housing': 'Wohnen',
    'w.kamer': 'das Zimmer',
    'w.huur': 'die Miete',
    'w.huurcontract': 'der Mietvertrag',
    'w.borg': 'die Kaution',
    'w.huisbaas': 'der Vermieter',
    'w.inhouden': 'abziehen (vom Lohn)',
    's.housing.1': 'Wie hoch ist die Miete pro Woche?',
    's.housing.2': 'Bekomme ich die Kaution zurück?',
    's.housing.3': 'Ich möchte einen eigenen Mietvertrag.',
    'c.housing.q': 'Die Miete ziehen wir von deinem Lohn ab.',
    'c.housing.a': 'Dann möchte ich das schriftlich.',
    'u.pay': 'Lohn',
    'l.payslip': 'Deine Lohnabrechnung',
    'w.loon': 'der Lohn',
    'w.bruto': 'brutto (vor den Steuern)',
    'w.netto': 'netto (was du bekommst)',
    'w.loonstrook': 'die Lohnabrechnung',
    'w.belasting': 'die Steuer',
    'w.uurloon': 'der Stundenlohn',
    's.payslip.1': 'Wie hoch ist mein Stundenlohn?',
    's.payslip.2': 'Meine Lohnabrechnung stimmt nicht.',
    's.payslip.3': 'Netto ist weniger als brutto.',
    'c.payslip.q': 'Hast du deine Lohnabrechnung bekommen?',
    'c.payslip.a': 'Ja, aber es fehlen Stunden.',
    'l.extra': 'Extra Geld',
    'w.vakantiegeld': 'das Urlaubsgeld',
    'w.overuren': 'die Überstunden',
    'w.toeslag': 'der Zuschlag',
    'w.minimumloon': 'der Mindestlohn',
    'w.bankrekening': 'das Bankkonto',
    'w.betalen': 'bezahlen',
    's.extra.1': 'Bekomme ich einen Zuschlag für Nachtarbeit?',
    's.extra.2': 'Werden die Überstunden bezahlt?',
    's.extra.3': 'Mein Lohn kommt auf mein Bankkonto.',
    'c.extra.q': 'Kannst du heute zwei Stunden länger bleiben?',
    'c.extra.a': 'Ja, schreibst du die Überstunden auf?',
    'u.house': 'Hausregeln',
    'l.phone': 'Dein Handy bei der Arbeit',
    'w.telefoon': 'das Handy, das Telefon',
    'w.appen': 'eine Nachricht schicken (per App)',
    'w.kluisje': 'der Spind',
    'w.uitzetten': 'ausschalten',
    'w.prive': 'privat',
    'w.foto': 'das Foto',
    's.phone.1': 'Mein Handy liegt in meinem Spind.',
    's.phone.2': 'Ich schalte mein Handy aus.',
    's.phone.3': 'Darf ich hier ein Foto machen?',
    'c.phone.q': 'Kein Handy an der Maschine, okay?',
    'c.phone.a': 'Okay, ich schreibe in der Pause.',
    'l.smoking': 'Rauchen',
    'w.roken': 'rauchen',
    'w.rookplek': 'der Raucherbereich',
    'w.verboden': 'verboten',
    'w.buiten': 'draußen',
    'w.esigaret': 'die E-Zigarette',
    'w.brandbaar': 'brennbar (brennt leicht)',
    's.smoking.1': 'Rauchen ist hier verboten.',
    's.smoking.2': 'Wo ist der Raucherbereich?',
    's.smoking.3': 'Ich rauche nur draußen in der Pause.',
    'c.smoking.q': 'Kommst du mit eine rauchen?',
    'c.smoking.a': 'Nein, ich habe noch keine Pause.',
    'l.clock': 'Einstempeln und pünktlich sein',
    'w.inklokken': 'einstempeln',
    'w.uitklokken': 'ausstempeln',
    'w.pasje': 'die Karte (Mitarbeiterkarte)',
    'w.prikklok': 'die Stempeluhr',
    'w.optijd': 'pünktlich',
    'w.rooster': 'der Dienstplan',
    's.clock.1': 'Ich stemple um sechs Uhr ein.',
    's.clock.2': 'Ich habe meine Karte vergessen.',
    's.clock.3': 'Wo hängt der Dienstplan?',
    'c.clock.q': 'Stempelst du kurz für mich ein?',
    'c.clock.a': 'Nein, das ist nicht erlaubt.',
    'l.hygiene': 'Alkohol, Drogen und Hygiene',
    'w.alcohol': 'der Alkohol',
    'w.medicijn': 'das Medikament',
    'w.handenwassen': 'Hände waschen',
    'w.werkkleding': 'die Arbeitskleidung',
    'w.haarnetje': 'das Haarnetz',
    'w.schoon': 'sauber',
    's.hygiene.1': 'Wasch dir vor der Arbeit die Hände.',
    's.hygiene.2': 'Alkohol und Drogen sind verboten.',
    's.hygiene.3': 'Meine Arbeitskleidung ist sauber.',
    'c.hygiene.q': 'Hast du dein Haarnetz auf?',
    'c.hygiene.a': 'Ja, und ich habe meinen Ring abgenommen.',
    'u.social': 'Miteinander auskommen',
    'l.smalltalk': 'Smalltalk und Pausen',
    'w.weekend': 'das Wochenende',
    'w.koffie': 'der Kaffee',
    'w.gezellig': 'gemütlich, schön zusammen',
    'w.weer': 'das Wetter',
    'w.verjaardag': 'der Geburtstag',
    'w.gefeliciteerd': 'herzlichen Glückwunsch',
    's.smalltalk.1': 'Wie war dein Wochenende?',
    's.smalltalk.2': 'Darf ich mich zu euch setzen?',
    's.smalltalk.3': 'Heute ist schönes Wetter.',
    'c.smalltalk.q': 'Was hast du am Wochenende gemacht?',
    'c.smalltalk.a': 'Ich habe mit Freunden Fußball gespielt.',
    'l.mistakes': 'Feedback und Fehler',
    'w.fout': 'der Fehler',
    'w.compliment': 'das Kompliment',
    'w.feedback': "das Feedback (was jemand über deine Arbeit sagt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitleggen': 'erklären',
    'w.leren': 'lernen',
    'w.verbeteren': 'verbessern, korrigieren',
    's.mistakes.1': 'Entschuldigung, ich habe einen Fehler gemacht.',
    's.mistakes.2': 'Kannst du es erklären?',
    's.mistakes.3': 'Danke für das Kompliment!',
    'c.mistakes.q': 'Gut gemacht!',
    'c.mistakes.a': 'Danke, das ist schön zu hören.',
    'l.respect': 'Respekt für alle',
    'w.respect': 'der Respekt',
    'w.gelijk': 'gleich, gleichberechtigt',
    'w.grens': 'die Grenze',
    'w.neezeggen': 'nein sagen',
    'w.pesten': 'mobben',
    'w.vertrouwenspersoon': 'die Vertrauensperson',
    's.respect.1': 'Hier sind alle gleich.',
    's.respect.2': 'Das finde ich nicht okay.',
    's.respect.3': 'Stopp, hier ist meine Grenze.',
    'c.respect.q': 'Was ist los? Du siehst traurig aus.',
    'c.respect.a': 'Ein Kollege mobbt mich.',
    'u.rights': 'Regeln und Rechte',
    'l.health': 'Sicher und gesund arbeiten',
    'w.arbowet': 'das Arbeitsschutzgesetz',
    'w.veilig': 'sicher',
    'w.werktijden': 'die Arbeitszeiten',
    'w.rust': 'die Ruhe, die Erholung',
    'w.beschermingsmiddelen': 'die Schutzausrüstung',
    'w.arbeidsinspectie': 'die Arbeitsinspektion (Arbeidsinspectie)',
    's.health.1': 'Ich habe ein Recht auf Pause.',
    's.health.2': 'Arbeit muss sicher sein.',
    's.health.3': 'Ich melde es bei der Arbeidsinspectie.',
    'c.health.q': 'Du musst jetzt Pause machen.',
    'c.health.a': 'Okay, ich setze mich kurz hin.',
    'l.rights': 'Deine Rechte',
    'w.recht': 'das Recht',
    'w.discriminatie': 'die Diskriminierung',
    'w.vakbond': 'die Gewerkschaft',
    'w.juridischloket': 'das Juridisch Loket (kostenlose Rechtsberatung)',
    'w.klacht': 'die Beschwerde',
    'w.ontslag': 'die Kündigung',
    's.rights.1': 'Ich möchte mich beschweren.',
    's.rights.2': 'Ich bin Mitglied der Gewerkschaft.',
    's.rights.3': 'Das ist Diskriminierung.',
    'c.rights.q': 'Unterschreib hier für deine Kündigung.',
    'c.rights.a': 'Nein, ich unterschreibe noch nicht.',
    'l.mustmay': 'Musst du, oder darfst du wählen?', // nieuw, nalezen // nagelezen AI 22 nov
    'w.moeten': 'müssen', // nieuw, nalezen // nagelezen AI 22 nov
    'w.niethoeven': 'nicht müssen', // nieuw, nalezen // nagelezen AI 22 nov
    'w.nodig': 'nötig, notwendig', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrijwillig': 'freiwillig', // nieuw, nalezen // nagelezen AI 22 nov
    'w.keuze': 'die Wahl', // nieuw, nalezen // nagelezen AI 22 nov
    'w.regel': 'die Regel', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.1': 'Muss ich das unterschreiben?', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.2': 'Nein, du musst nicht unterschreiben.', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.3': 'Das ist die Regel: Ein Helm ist Pflicht.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.q': 'Muss ich am Samstag Überstunden machen?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a': 'Nein, das ist nicht nötig. Es ist freiwillig.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.leave': "Urlaub", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': 'Freie Tage',
    'w.vakantiedagen': 'die Urlaubstage',
    'w.verlof': 'der Urlaub, die Freistellung',
    'w.aanvragen': 'beantragen',
    'w.feestdag': 'der Feiertag',
    'w.vrij': 'frei (nicht arbeiten)',
    'w.calamiteitenverlof': 'der Sonderurlaub für Notfälle',
    's.leave.1': 'Ich möchte Urlaub beantragen.',
    's.leave.2': 'Habe ich am Feiertag frei?',
    's.leave.3': 'Ich habe zu Hause einen Notfall.',
    'c.leave.q': 'Wann willst du in Urlaub fahren?',
    'c.leave.a': 'Im Juli, drei Wochen.',
    'l.illness': 'Krank zu Hause',
    'w.ziekmelden': 'sich krankmelden',
    'w.betermelden': 'sich gesund melden',
    'w.bedrijfsarts': 'der Betriebsarzt / die Betriebsärztin',
    'w.ziekte': 'die Krankheit',
    'w.doorbetalen': 'weiterbezahlen',
    'w.wachtdag': 'der Karenztag (ohne Lohn)',
    's.illness.1': 'Ich melde mich krank.',
    's.illness.2': 'Ich habe einen Termin beim Betriebsarzt.',
    's.illness.3': 'Morgen komme ich wieder zur Arbeit.',
    'c.illness.q': 'Was hast du genau?',
    'c.illness.a': 'Das bespreche ich mit dem Betriebsarzt.',
    'u.exploit': 'Kenne deine Rechte: Ausbeutung',
    'l.warning': 'Warnzeichen',
    'w.uitbuiting': 'die Ausbeutung',
    'w.paspoort': 'der Pass',
    'w.schuld': 'die Schulden',
    'w.dreigen': 'drohen',
    'w.onderbetaald': 'unterbezahlt',
    'w.afpakken': 'wegnehmen',
    's.warning.1': 'Mein Chef hat meinen Pass.',
    's.warning.2': 'Ich bekomme keine Lohnabrechnung.',
    's.warning.3': 'Ich muss Schulden zurückzahlen.',
    'c.warning.q': 'Gib mir ruhig deinen Pass.',
    'c.warning.a': 'Nein, Sie dürfen nur eine Kopie machen.',
    'l.gethelp': 'Hilfe holen',
    'w.politie': 'die Polizei',
    'w.anoniem': 'ohne deinen Namen (anonym)',
    'w.melden': 'melden',
    'w.hulp': 'die Hilfe',
    'w.gevaar': 'die Gefahr',
    'w.bang': 'ängstlich, Angst haben',
    's.gethelp.1': 'Ich möchte etwas melden.',
    's.gethelp.2': 'Geht das anonym?',
    's.gethelp.3': 'Ich habe Angst vor meinem Chef.',
    'c.gethelp.q': 'Wobei kann ich dir helfen?',
    'c.gethelp.a': 'Ich werde bei der Arbeit schlecht behandelt.',
    'u.contact': 'Telefonieren und Schreiben mit der Arbeit',
    'l.callin': 'Anrufen',
    'w.telefoontje': 'der Anruf',
    'w.terugbellen': 'zurückrufen',
    'w.bereikbaar': 'erreichbar (per Telefon)',
    'w.reden': 'der Grund',
    'w.overmorgen': 'übermorgen',
    'w.inspreken': 'auf die Mailbox sprechen',
    's.callin.1': 'Hallo, hier ist Ali.',
    's.callin.2': 'Ich glaube, ich komme übermorgen wieder.',
    's.callin.3': 'Können Sie mich zurückrufen?',
    'c.callin.q': 'Wann bist du wieder da?',
    'c.callin.a': 'Ich glaube, am Montag.',
    'l.texting': 'Nachrichten und die Dienstplan-App',
    'w.bericht': 'die Nachricht',
    'w.app': 'die App',
    'w.reageren': 'antworten, reagieren',
    'w.ruilen': 'tauschen',
    'w.kijken': 'schauen, nachsehen',
    'w.groet': 'der Gruß (am Ende einer Nachricht)',
    's.texting.1': 'Ich komme zehn Minuten zu spät.',
    's.texting.2': 'Will jemand mit mir die Schicht tauschen?',
    's.texting.3': 'Ich schaue jeden Tag in die App.',
    'c.texting.q': 'Kannst du am Samstag eine Extraschicht machen?',
    'c.texting.a': 'Ja, ich antworte gleich in der App.',
    'u.grow': 'Abschlüsse und Weiterkommen',
    'l.certs': 'Zertifikate',
    'w.certificaat': 'das Zertifikat',
    'w.cursus': 'der Kurs',
    'w.examen': 'die Prüfung',
    'w.slagen': 'bestehen (eine Prüfung)',
    'w.heftruckcertificaat': 'der Staplerschein',
    'w.halen': 'machen, bekommen (ein Zertifikat)',
    's.certs.1': 'Ich habe ein VCA-Sicherheitszertifikat.',
    's.certs.2': 'Ich möchte einen Kurs machen.',
    's.certs.3': 'Bezahlt der Arbeitgeber den Kurs?',
    'c.certs.q': 'Hast du einen Staplerschein?',
    'c.certs.a': 'Nein, aber ich würde ihn gern machen.',
    'l.diploma': 'Dein Abschluss und deine Weiterbildung', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.diploma': 'das Diplom, der Abschluss',
    'w.waarderen': '(einen Abschluss) bewerten lassen',
    'w.training': 'die Schulung',
    'w.verplicht': 'Pflicht, vorgeschrieben',
    'w.werktijd': 'die Arbeitszeit',
    'w.verderkomen': 'weiterkommen',
    's.diploma.1': 'Ich habe einen Abschluss aus meinem Land.',
    's.diploma.2': 'Ist diese Schulung Pflicht?',
    's.diploma.3': 'Ich möchte in meiner Arbeit weiterkommen.',
    'c.diploma.q': 'Möchtest du eine Ausbildung machen?',
    'c.diploma.a': 'Ja, gern! Wer bezahlt das?',
    'u.health': 'Gesundheit',
    'l.doctor': 'Arzt oder 112?',
    'w.huisarts': 'der Hausarzt / die Hausärztin',
    'w.huisartsenpost': 'der Hausarzt-Notdienst (abends, nachts und am Wochenende)',
    'w.apotheek': 'die Apotheke',
    'w.recept': 'das Rezept',
    'w.spoed': 'dringend',
    'w.ambulance': 'der Krankenwagen',
    's.doctor.1': 'Ich möchte einen Termin beim Hausarzt.',
    's.doctor.2': 'Wo ist die Apotheke?',
    's.doctor.3': 'Es ist dringend.',
    'c.doctor.q': 'Hausarzt-Notdienst, was kann ich für Sie tun?',
    'c.doctor.a': 'Mein Sohn hat hohes Fieber.',
    'l.insurance': 'Krankenversicherung',
    'w.premie': 'der Beitrag (monatliche Zahlung)',
    'w.eigenrisico': 'die Selbstbeteiligung (Kosten, die du zuerst selbst zahlst)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'w.zorgtoeslag': 'der Zuschuss zur Krankenversicherung (zorgtoeslag)',
    'w.verzekeraar': 'die Versicherung (die Firma)',
    'w.permaand': 'pro Monat',
    'w.vergoeden': 'erstatten, Kosten übernehmen',
    's.insurance.1': 'Ich zahle jeden Monat einen Beitrag.',
    's.insurance.2': 'Wird das erstattet?',
    's.insurance.3': 'Ich beantrage zorgtoeslag.',
    'c.insurance.q': 'Bei welcher Versicherung bist du?',
    'c.insurance.a': 'Das steht auf meiner Versichertenkarte.',
    'u.money': 'Geld und Post',
    'l.letters': 'Offizielle Briefe',
    'w.brief': 'der Brief',
    'w.post': 'die Post',
    'w.belastingdienst': 'das Finanzamt (Belastingdienst)',
    'w.aangifte': 'die Steuererklärung',
    'w.inkomen': 'das Einkommen',
    'w.terugbetalen': 'zurückzahlen',
    's.letters.1': 'Ich verstehe diesen Brief nicht.',
    's.letters.2': 'Hilfst du mir mit diesem Brief?',
    's.letters.3': 'Mein Einkommen hat sich geändert.',
    'c.letters.q': 'Hast du deine Steuererklärung schon gemacht?',
    'c.letters.a': 'Nein, ich mache sie vor dem 1. Mai.',
    'l.scams': 'Vorsicht vor Betrug',
    'w.pincode': 'die PIN',
    'w.link': 'der Link',
    'w.oplichter': 'der Betrüger',
    'w.sms': 'die SMS',
    'w.controleren': 'prüfen, kontrollieren',
    'w.nep': 'gefälscht, fake',
    's.scams.1': 'Ich gebe meine PIN nie weiter.',
    's.scams.2': 'Ich klicke nicht auf den Link.',
    's.scams.3': 'Diese Nachricht ist gefälscht.',
    'c.scams.q': 'Hier ist die Bank. Wie ist Ihre PIN?',
    'c.scams.a': 'Die gebe ich nicht. Ich lege auf.',
    'u.travel': 'Zur Arbeit kommen',
    'l.bike': 'Mit dem Fahrrad',
    'w.fiets': 'das Fahrrad',
    'w.fietspad': 'der Radweg',
    'w.licht': 'das Licht',
    'w.slot': 'das Schloss',
    'w.stoplicht': 'die Ampel',
    'w.bel': 'die Klingel',
    's.bike.1': 'Ich fahre mit dem Fahrrad zur Arbeit.',
    's.bike.2': 'Mach dein Licht an!',
    's.bike.3': 'Schließ dein Fahrrad ab.',
    'c.bike.q': 'Wie kommst du zur Arbeit?',
    'c.bike.a': 'Mit dem Fahrrad, zwanzig Minuten.',
    'l.transit': 'Bus, Bahn und Fahrtkosten',
    'w.bus': 'der Bus',
    'w.trein': 'der Zug',
    'w.inchecken': 'einchecken',
    'w.uitchecken': 'auschecken',
    'w.bankpas': 'die Bankkarte',
    'w.reiskosten': 'die Fahrtkostenerstattung',
    's.transit.1': 'Ich checke mit meiner Bankkarte ein.',
    's.transit.2': 'Vergiss nicht auszuchecken.',
    's.transit.3': 'Wo ist die Bushaltestelle?',
    'c.transit.q': 'Kommst du mit dem Zug?',
    'c.transit.a': 'Nein, mit dem Bus. Der hält direkt vor der Tür.',
    'u.lost': 'Arbeit verloren',
    'l.ww': 'Arbeitslosengeld',
    'w.uitkering': 'die Sozialleistung (Geld vom Staat)',
    'w.ww': 'das Arbeitslosengeld (WW)',
    'w.werkloos': 'arbeitslos',
    'w.uwv': 'das UWV (das Amt für Arbeit und Sozialleistungen)',
    'w.ontslagnemen': 'kündigen (selbst)',
    'w.werkzoekende': 'der / die Arbeitssuchende',
    's.ww.1': 'Ich beantrage beim UWV Arbeitslosengeld.',
    's.ww.2': 'Ich bin arbeitslos.',
    's.ww.3': 'Mein Vertrag endet.',
    'c.ww.q': 'Was machst du jetzt, wo dein Vertrag endet?',
    'c.ww.a': 'Ich beantrage sofort Arbeitslosengeld.',
    'l.newjob': 'Neue Arbeit suchen',
    'w.baan': 'die Stelle, der Job',
    'w.zoeken': 'suchen',
    'w.bewaren': 'aufbewahren',
    'w.bijwerken': 'aktualisieren',
    'w.gratis': 'kostenlos',
    'w.nooit': 'nie',
    's.newjob.1': 'Ich suche eine neue Stelle.',
    's.newjob.2': 'Ich bewahre meine Lohnabrechnungen auf.',
    's.newjob.3': 'Arbeit suchen ist kostenlos.',
    'c.newjob.q': 'Dürfen wir dich anrufen, wenn es Arbeit gibt?',
    'c.newjob.a': 'Ja, gern. Hier ist meine Nummer.',
    'u.build': 'Auf der Baustelle',
    'l.tools': 'Werkzeug und Material',
    'w.steiger': 'das Gerüst',
    'w.ladder': 'die Leiter',
    'w.boor': 'die Bohrmaschine',
    'w.hamer': 'der Hammer',
    'w.beton': 'der Beton',
    'w.kraan': 'der Kran',
    's.tools.1': 'Gib mir mal kurz den Hammer.',
    's.tools.2': 'Die Leiter steht am Gerüst.',
    's.tools.3': 'Der Beton ist noch nass.',
    'c.tools.q': 'Wo ist die Bohrmaschine?',
    'c.tools.a': 'Im Transporter, hinten.',
    'l.site': 'Sicherheit auf der Baustelle',
    'w.valbeveiliging': 'die Absturzsicherung (der Gurt)',
    'w.last': 'die Last',
    'w.gat': 'das Loch',
    'w.vallen': 'fallen, stürzen',
    'w.risico': 'das Risiko',
    'w.weigeren': 'verweigern, ablehnen',
    's.site.1': 'Vorsicht, Last über deinem Kopf!',
    's.site.2': 'Trag deine Absturzsicherung.',
    's.site.3': 'Zuerst mache ich eine kurze Risikoprüfung (LMRA).',
    'c.site.q': 'Kannst du kurz auf dem Dach helfen?',
    'c.site.a': 'Ja, aber zuerst meine Absturzsicherung.',
    'u.factory': 'In der Fabrik',
    'l.line': 'Das Band und die Maschinen',
    'w.lopendeband': 'das Fließband, das Band',
    'w.machine': 'die Maschine',
    'w.storing': 'die Störung',
    'w.noodstop': 'der Notaus, der Not-Halt',
    'w.inpakken': 'einpacken, verpacken',
    'w.productie': 'die Produktion',
    's.line.1': 'Das Band steht still.',
    's.line.2': 'Es gibt eine Störung.',
    's.line.3': 'Ich verpacke die Produkte.',
    'c.line.q': 'Wie läuft es am Band?',
    'c.line.a': 'Gut, aber die Maschine ist sehr langsam.',
    'l.quality': 'Qualität',
    'w.kwaliteit': 'die Qualität',
    'w.product': 'das Produkt',
    'w.afkeuren': 'aussortieren, ablehnen',
    'w.beschadigd': 'beschädigt',
    'w.etiket': 'das Etikett',
    'w.lijst': 'die Liste',
    's.quality.1': 'Dieses Produkt ist beschädigt.',
    's.quality.2': 'Das Etikett stimmt nicht.',
    's.quality.3': 'Muss ich das aussortieren?',
    'c.quality.q': 'Warum liegt das separat?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.quality.a': 'Das Etikett sitzt schief.',
    'u.care': 'In der Pflege',
    'l.client': 'Der Klient und die tägliche Pflege',
    'w.client': 'der Klient / die Klientin (die Person, die du pflegst)',
    'w.wassen': 'waschen',
    'w.aankleden': 'anziehen (sich oder jemanden)',
    'w.eten': 'das Essen',
    'w.rolstoel': 'der Rollstuhl',
    'w.verpleegkundige': 'die Pflegefachkraft, der Krankenpfleger / die Krankenschwester',
    's.client.1': 'Haben Sie gut geschlafen?',
    's.client.2': 'Ich helfe Ihnen beim Anziehen.',
    's.client.3': 'Möchten Sie noch etwas essen?',
    'c.client.q': 'Können Sie mir mit meiner Jacke helfen?',
    'c.client.a': 'Natürlich, ich helfe Ihnen.',
    'l.privacy': 'Privatsphäre und Sicherheit in der Pflege',
    'w.privacy': 'die Privatsphäre, der Datenschutz',
    'w.hygiene': 'die Hygiene',
    'w.doorgeven': 'weitergeben (Informationen)',
    'w.geheim': 'geheim',
    'w.toestemming': 'die Erlaubnis',
    'w.gevallen': 'gestürzt, hingefallen',
    's.privacy.1': 'Die Frau ist gestürzt.',
    's.privacy.2': 'Ich gebe es an die Pflegefachkraft weiter.',
    's.privacy.3': 'Zu Hause rede ich nicht über Klienten.',
    'c.privacy.q': 'Kannst du Herrn Jansen seine Tabletten geben?',
    'c.privacy.a': 'Nein, das darf ich nicht. Ich hole die Pflegefachkraft.',
    'u.horeca': 'In der Gastronomie',
    'l.kitchen': 'In der Küche',
    'w.keuken': 'die Küche',
    'w.snijden': 'schneiden',
    'w.pan': 'die Pfanne, der Topf',
    'w.koelcel': 'die Kühlzelle (begehbarer Kühlraum)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.allergie': 'die Allergie',
    'w.datum': 'das Datum',
    's.kitchen.1': 'Stell das Fleisch in die Kühlzelle.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.kitchen.2': 'Schneide die Zwiebeln klein.',
    's.kitchen.3': 'Sind hier Nüsse drin?',
    'c.kitchen.q': 'Ein Gast hat eine Nussallergie.',
    'c.kitchen.a': 'Ich frage den Küchenchef.',
    'l.service': 'Gäste bedienen',
    'w.gast': 'der Gast',
    'w.bestelling': 'die Bestellung',
    'w.rekening': 'die Rechnung',
    'w.menu': 'die Speisekarte',
    'w.afruimen': 'abräumen (den Tisch)',
    'w.fooi': 'das Trinkgeld',
    's.service.1': 'Was möchten Sie trinken?',
    's.service.2': 'Darf ich die Bestellung aufnehmen?',
    's.service.3': 'Ich räume den Tisch ab.',
    'c.service.q': 'Können wir die Rechnung haben?',
    'c.service.a': 'Natürlich, ich komme.',
    'u.clean': 'Reinigung',
    'l.cleaning': 'Putzmittel und Geräte',
    'w.dweil': 'der Wischmopp',
    'w.emmer': 'der Eimer',
    'w.schoonmaakmiddel': 'das Reinigungsmittel',
    'w.stofzuiger': 'der Staubsauger',
    'w.stoffen': 'Staub wischen',
    'w.prullenbak': 'der Mülleimer',
    's.cleaning.1': 'Wo steht der Eimer?',
    's.cleaning.2': 'Ich sauge jetzt den Flur.',
    's.cleaning.3': 'Leer den Mülleimer.',
    'c.cleaning.q': 'Bist du mit den Toiletten fertig?',
    'c.cleaning.a': 'Fast, noch zwei.',
    'l.cleansafe': 'Sicher putzen',
    'w.glad': 'rutschig, glatt',
    'w.bordje': 'das Schild',
    'w.mengen': 'mischen',
    'w.damp': 'die Dämpfe',
    'w.luchten': 'lüften',
    'w.spoelen': 'spülen, abspülen',
    's.cleansafe.1': 'Vorsicht, rutschig!',
    's.cleansafe.2': 'Stell das Schild hin.',
    's.cleansafe.3': 'Misch nie Reinigungsmittel.',
    'c.cleansafe.q': 'Darf ich hier langgehen?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.cleansafe.a': 'Vorsicht, der Boden ist noch rutschig.',
    'c.cv': 'Ein kurzer Lebenslauf', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': 'Ein Lebenslauf ist hier kurz: 1 oder 2 Seiten. Schreib deine Kontaktdaten, Berufserfahrung, Ausbildung, Sprachen und Fähigkeiten auf. Ein Foto ist nicht nötig. Religion, Alter oder Familienstand musst du nicht angeben. Sei ehrlich darüber, was du kannst. Bitte jemanden, dein Niederländisch zu prüfen.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': 'Liest du meinen Lebenslauf? Ist mein Niederländisch richtig?',
    'c.cv.s': 'Du hast 3 Jahre in einer Fabrik in deinem Heimatland gearbeitet, aber du hast keinen Abschluss. Was schreibst du in deinen Lebenslauf?',
    'c.cv.o1': 'Schreib die Arbeit auf und was du dort gemacht hast, ehrlich.',
    'c.cv.o2': 'Schreib nichts, weil du keinen Abschluss hast.',
    'c.cv.o3': 'Schreib, dass du einen Abschluss hast, damit du besser aussiehst.',
    'c.cv.w': 'Berufserfahrung zählt, auch aus dem Ausland. Ehrlichkeit ist wichtig: Arbeitgeber können es prüfen.',
    'c.interview': 'Das Vorstellungsgespräch',
    'c.interview.b': 'Komm pünktlich: 5 bis 10 Minuten früher. Grüß höflich und schau die Person an. Erzähl kurz, was du kannst. Selbst Fragen stellen ist normal und gut, zum Beispiel zu den Stunden, der Arbeit oder Schulungen. Am Ende darfst du fragen, wann du etwas hörst. Du kannst ruhig sagen, dass du noch Niederländisch lernst. Ein Arbeitgeber darf nicht nach deiner Religion, einer Schwangerschaft oder deiner Gesundheit fragen. Du musst nicht antworten: Du darfst höflich sagen, dass du lieber nicht antwortest.',
    'c.interview.p': 'Darf ich auch etwas fragen? Wie viele Stunden pro Woche ist die Arbeit?',
    'c.interview.s': 'Am Ende des Gesprächs fragt der Arbeitgeber: „Heb je nog vragen?“ Was machst du?',
    'c.interview.o1': 'Stell eine Frage zu den Stunden oder zu Schulungen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Sag nein, weil Fragen stellen nicht höflich ist.',
    'c.interview.o3': 'Erzähl mehr über dich, um zu zeigen, dass du gut arbeitest.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'Fragen zeigen, dass du dich für die Stelle interessierst. Arbeitgeber hier erwarten sie oft.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Hol dir deinen Vertrag auf Papier',
    'c.findwork.b': 'Frag immer nach einem schriftlichen Vertrag und einer Kopie für dich. Lies ihn, bevor du unterschreibst, oder bitte jemanden, dem du vertraust, um Hilfe. Eine Zeitarbeitsfirma (uitzendbureau) darf kein Geld von dir verlangen, um dir Arbeit zu vermitteln. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.findwork.p': 'Darf ich den Vertrag zuerst lesen?',
    'c.findwork.s': 'Ein neuer Arbeitgeber sagt: „Unterschreib jetzt hier. Lesen kannst du später.“ Was machst du?',
    'c.findwork.o1': 'Bitte um Zeit zum Lesen oder um eine Kopie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': 'Unterschreib schnell, damit du die Stelle nicht verlierst.',
    'c.findwork.o3': 'Unterschreib und bitte danach um eine Kopie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.w': 'In deinem Vertrag steht, was du verdienst und welche Rechte du hast. Ein guter Arbeitgeber gibt dir Zeit, ihn zu lesen. Du darfst nach allem fragen, was du nicht verstehst.',
    'c.contract': 'Probezeit und Arbeit auf Abruf',
    'c.contract.b': 'Eine Probezeit (proeftijd) muss schriftlich vereinbart sein. In einem Vertrag von 6 Monaten oder kürzer ist sie nicht erlaubt. In einem längeren Vertrag unter 2 Jahren ist sie höchstens 1 Monat. In einem Vertrag von 2 Jahren oder länger, oder in einem unbefristeten, ist sie höchstens 2 Monate. Arbeitest du auf Abruf (oproepkracht)? Dein Arbeitgeber muss dir meistens mindestens 4 Tage vorher sagen, wann du arbeiten sollst. Wenn es später ist, musst du nicht kommen. Ein Tarifvertrag (cao) kann diese 4 Tage kürzer machen, aber nicht kürzer als 1 Tag. Wenn sie deine Arbeit später absagen, bekommst du trotzdem deinen Lohn. Wenn sie dich für weniger als 3 Stunden zur Arbeit rufen, bekommst du meistens 3 Stunden bezahlt. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.contract.p': 'Steht die Probezeit in meinem Vertrag?',
    'c.contract.s': 'Dein Vertrag geht 3 Monate. Darin steht: „Proeftijd: 1 maand“. Was machst du?',
    'c.contract.o1': 'Frag nach: Diese Probezeit zählt nicht.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.contract.o2': 'Nichts. Jeder Vertrag hat eine Probezeit.',
    'c.contract.o3': 'Unterschreib und frag nie, der Chef weiß es am besten.',
    'c.contract.w': 'Eine Probezeit in einem Vertrag von 6 Monaten oder kürzer gilt nicht. Ruhig nachfragen ist normal. Wenn die Antwort nicht klar ist, hol dir Rat bei der Gewerkschaft oder beim Juridisch Loket.',
    'c.agency': 'Deine Zeitarbeitsfirma ist dein Arbeitgeber',
    'c.agency.b': 'Wenn du über eine Zeitarbeitsfirma (uitzendbureau) arbeitest, ist die Zeitarbeitsfirma dein Arbeitgeber, nicht die Firma, in der du arbeitest. Dein Vertrag und dein Lohn kommen von der Zeitarbeitsfirma, und es gibt einen Tarifvertrag für Zeitarbeitskräfte (uitzend-cao). Du hast ein Recht auf denselben Lohn wie die Mitarbeiter der Firma, die dieselbe Arbeit machen. Du bekommst auch Urlaubsgeld (vakantiegeld) und sammelst freie Tage an. Führ deine eigene Liste mit den Stunden, die du gearbeitet hast, und prüfe sie auf deiner Lohnabrechnung. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.agency.x': 'Hat dich ein Arbeitgeber aus einem anderen Land für eine Zeit hierher geschickt? Dann bist du entsandt (gedetacheerd). Frag deinen Arbeitgeber nach deiner A1-Bescheinigung: Sie zeigt, wo du versichert bist. Hier bekommst du trotzdem mindestens den niederländischen Mindestlohn.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'Auf meiner Lohnabrechnung stehen zu wenige Stunden.',
    'c.agency.s': 'Auf deiner Lohnabrechnung stehen 32 Stunden, aber du hast 38 gearbeitet. Was machst du?',
    'c.agency.o1': 'Zeig der Zeitarbeitsfirma deine Stundenliste und bitte um Korrektur.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': 'Sag nichts, es sind ja nur 6 Stunden.',
    'c.agency.o3': 'Bitte den Chef in der Firma, in der du arbeitest, die 6 Stunden zu bezahlen.',
    'c.agency.w': 'Die Zeitarbeitsfirma bezahlt dich, also muss die Zeitarbeitsfirma den Fehler korrigieren. Deine eigene Liste mit Daten und Stunden hilft. Danach zu fragen ist dein Recht.',
    'c.bsn': 'Deine BSN: Pass gut darauf auf',
    'c.bsn.b': 'Du bekommst eine BSN (burgerservicenummer), wenn du dich bei der Gemeinde (gemeente) anmeldest. Nur kurz hier? Dann meldest du dich an einem RNI-Schalter an. Du brauchst deine BSN für die Arbeit, für Steuern, für die Krankenversicherung und für ein Bankkonto. Dein Arbeitgeber braucht deinen Ausweis und deine BSN. Gib deine BSN oder eine Kopie deines Ausweises nicht einfach jedem. Frag zuerst, warum sie sie brauchen. Du ziehst um? Melde deine neue Adresse innerhalb von 5 Tagen bei der Gemeinde. DigiD ist dein Login für Websites der Behörden: Gib es nie an jemand anderen. Wohnst oder arbeitest du hier? Dann musst du meistens eine niederländische Krankenversicherung (zorgverzekering) haben. Kümmere dich schnell darum. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.bsn.p': 'Warum brauchen Sie meine BSN?',
    'c.bsn.s': 'Ein Fremder bietet dir über WhatsApp eine Arbeit an. Er will ein Foto von deinem Pass und deine DigiD-Zugangsdaten. Was machst du?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o1': 'Gib nie deine DigiD-Zugangsdaten. Prüfe, wer er ist.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': 'Schick schnell alles, um die Arbeit zu bekommen.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o3': 'Schick nur das Foto vom Pass.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': 'Mit deinem DigiD oder einer Kopie deines Ausweises können andere Leute deinen Namen benutzen, zum Beispiel für Kredite oder Sozialleistungen. Ein echter Arbeitgeber braucht deinen Ausweis und deine BSN, aber nie deine DigiD-Zugangsdaten.',
    'c.housing': 'Wohnen über deinen Arbeitgeber',
    'c.housing.b': 'Kümmert sich dein Arbeitgeber oder deine Zeitarbeitsfirma um deine Wohnung? Dann muss der Mietvertrag getrennt von deinem Arbeitsvertrag sein. Frag nach einem schriftlichen Mietvertrag und einem Nachweis, was du bezahlst. Miete darf nur von deinem Lohn abgezogen werden, wenn du schriftlich zugestimmt hast, und nur innerhalb der gesetzlichen Grenzen: Prüfe es auf deiner Lohnabrechnung. Eine Kaution (borg) ist höchstens 2 Monate Kaltmiete. Du bekommst sie zurück, wenn du ausziehst, minus echte Schäden. Melde dich mit deiner Adresse bei der Gemeinde an. Unsichere Wohnung, Drohungen oder unfaire Kosten? Melde es der Gemeinde (meldpunt) und hol dir kostenlose Beratung beim Juridisch Loket oder bei einer Wohnberatung. Bei Problemen mit der Miethöhe oder den Nebenkosten gibt es die Huurcommissie. Deine Arbeit endet? Hol dir Rat, bevor du aus deiner Wohnung ausziehst. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.',
    'c.housing.p': 'Darf ich einen Nachweis haben, dass ich bezahlt habe?',
    'c.housing.s': 'Deine Arbeit endet. Die Zeitarbeitsfirma sagt: „Du musst morgen aus dem Haus.“ Was machst du?',
    'c.housing.o1': 'Hol dir zuerst Rat beim Juridisch Loket.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.housing.o2': 'Zieh sofort aus und vergiss deine Kaution.',
    'c.housing.o3': 'Bleib und antworte der Zeitarbeitsfirma nicht mehr.',
    'c.housing.w': 'Dein Mietvertrag hat eigene Regeln, getrennt von deiner Arbeit. Kostenlose Beratung hilft dir, deine Rechte zu kennen, zum Beispiel wann du ausziehen musst und was mit deiner Kaution ist.',
    'c.payslip': 'Prüfe deine Lohnabrechnung',
    'c.payslip.b': 'Brutto ist dein Lohn vor den Steuern. Netto ist das, was auf dein Bankkonto kommt: brutto minus Steuern und Beiträge (loonheffing). Dein Arbeitgeber muss dir eine Lohnabrechnung (loonstrook) geben. Prüfe auf jeder Lohnabrechnung die Stunden und den Lohn, und schreib die Stunden auf, die du arbeitest. Hast du zwei Jobs? Nutze die Steuerermäßigung (loonheffingskorting) nur bei einem Arbeitgeber. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.payslip.p': 'Ich habe mehr Stunden gearbeitet. Kannst du das prüfen?',
    'c.payslip.s': 'Auf deiner Lohnabrechnung stehen weniger Stunden, als du gearbeitet hast. Was machst du?',
    'c.payslip.o1': 'Zeig deine Notizen und bitte deinen Vorgesetzten, es zu prüfen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': 'Sag nichts, weil du keine Probleme willst.',
    'c.payslip.o3': 'Warte einen Monat: Auf der nächsten Lohnabrechnung stimmt es dann.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': 'Fehler auf einer Lohnabrechnung passieren. Danach zu fragen ist normal und dein Recht. Deine eigenen Notizen mit Daten und Stunden helfen sehr.',
    'c.extra': 'Urlaubsgeld und Mindestlohn',
    'c.extra.b': 'Du bekommst Urlaubsgeld (vakantiegeld): mindestens 8 % von deinem Bruttolohn. Die meisten Arbeitgeber zahlen es einmal im Jahr, im Mai oder Juni. Dein Lohn darf nie niedriger sein als der gesetzliche Mindestlohn (minimumloon); für Arbeitnehmer unter 21 ist er niedriger. Der Betrag ändert sich jedes Jahr: Schau auf rijksoverheid.nl nach. Ein Tarifvertrag (cao) gibt oft extra Geld für Überstunden oder Nachtarbeit. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.extra.p': 'Wann bekomme ich mein Urlaubsgeld?',
    'c.extra.s': 'Ein Kollege sagt: „Im Mai bekommst du extra Geld vom Chef.“ Was ist das?',
    'c.extra.o1': 'Urlaubsgeld: mindestens 8 % von deinem Bruttolohn.',
    'c.extra.o2': 'Ein Geschenk, nur für die besten Mitarbeiter.',
    'c.extra.o3': 'Ein 13. Monatsgehalt: ein zusätzlicher Monatslohn für alle.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': 'Urlaubsgeld ist dein Recht, kein Geschenk. Du sammelst es mit jeder Stunde an, die du arbeitest. Wenn du früher aufhörst, bekommst du es mit deinem letzten Lohn.',
    'c.phone': 'Dein Handy bei der Arbeit',
    'c.phone.b': 'An vielen Arbeitsplätzen sind Handys während der Arbeit nicht erlaubt, vor allem an Maschinen und Gabelstaplern oder in der Lebensmittelproduktion. Es kann unsicher oder unhygienisch sein. Benutz dein Handy in der Pause. Wartest du auf einen dringenden Anruf von deiner Familie? Sag es zuerst deinem Vorgesetzten. Mach bei der Arbeit keine Fotos oder Videos ohne Erlaubnis: Denk an die Privatsphäre der Kollegen und an Firmengeheimnisse. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.phone.p': 'Mein Kind ist krank. Darf mein Handy anbleiben?',
    'c.phone.s': 'Deine Mutter ist im Krankenhaus und ruft vielleicht heute an. Handys sind in der Halle nicht erlaubt. Was machst du?',
    'c.phone.o1': 'Sag es deinem Vorgesetzten und frag, wie man dich erreichen kann.',
    'c.phone.o2': 'Lass dein Handy in der Tasche und geh heimlich an der Maschine ran.',
    'c.phone.o3': 'Bleib zu Hause, ohne jemandem zu sagen, warum.',
    'c.phone.w': 'Vorgesetzte haben meistens Verständnis für einen Notfall in der Familie. Wenn sie es wissen, können sie eine sichere Lösung finden, zum Beispiel eine feste Zeit, in der du auf dein Handy schauen kannst.',
    'c.smoking': 'Rauchen nur draußen',
    'c.smoking.b': 'In den Niederlanden ist Rauchen in Innenräumen am Arbeitsplatz gesetzlich verboten. Das gilt auch für E-Zigaretten (Vapes). Seit 2022 sind Raucherräume in Firmen nicht mehr erlaubt. Rauch nur draußen, an dem Platz, den dein Arbeitgeber erlaubt, und meistens nur in deiner Pause. Extra Raucherpausen sind kein Recht: Sprich sie mit deinem Vorgesetzten ab. Rauch nie in der Nähe von Dingen, die leicht brennen, wie Treibstoff oder Kartons im Lager. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.', // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.smoking.p': 'Darf ich in meiner Pause draußen rauchen?',
    'c.smoking.s': 'Es ist kalt und es regnet. Ein Kollege sagt: „Rauch doch im Lagerraum, da sieht es keiner.“ Was machst du?',
    'c.smoking.o1': 'Sag nein und rauch in deiner Pause draußen.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Rauch schnell im Lagerraum, nur dieses eine Mal.',
    'c.smoking.o3': 'Nimm stattdessen drinnen deine Vape, das ist ja erlaubt.',
    'c.smoking.w': 'Rauchen in Gebäuden ist gegen das Gesetz und kann ein Feuer auslösen. Eine Vape drinnen ist auch nicht erlaubt. Wer sich an die Regel hält, schützt alle.',
    'c.clock': 'Stempel selbst ein',
    'c.clock.b': 'Stempel selbst ein und aus, genau dann, wenn du wirklich anfängst und aufhörst zu arbeiten. Stempel nie für einen Kollegen ein oder aus, und lass nie jemand anderen deine Karte benutzen. Das gilt als Betrug und kann zur Kündigung führen. Kommst du zu spät? Ruf an, bevor deine Schicht anfängt. Prüfe, ob deine gestempelten Stunden zu deiner Lohnabrechnung passen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.clock.p': 'Ich habe vergessen auszustempeln. Kannst du das korrigieren?',
    'c.clock.s': 'Ein Kollege gibt dir seine Karte: „Stempel mich ein, ich komme 20 Minuten später.“ Was machst du?',
    'c.clock.o1': 'Sag nein und sag ihm, er soll den Vorgesetzten anrufen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': 'Mach es nur einmal, er ist ja dein Freund.',
    'c.clock.o3': 'Stempel ihn ein und sag es später dem Vorgesetzten.',
    'c.clock.w': 'Für jemand anderen stempeln gilt als Betrug, für euch beide. Nein sagen schützt deinen Kollegen und deine eigene Arbeit.',
    'c.hygiene': 'Klarer Kopf, saubere Hände',
    'c.hygiene.b': 'Alkohol und Drogen bei der Arbeit, oder zur Arbeit kommen, nachdem man sie genommen hat, sind in fast allen Firmen verboten. An Maschinen und Gabelstaplern ist das sehr gefährlich, und es kann zur Kündigung führen. Macht dich ein Medikament müde oder schwindlig? Sag es deinem Vorgesetzten, damit du sicher arbeiten kannst. Welches Medikament, musst du nicht sagen. In der Lebensmittelproduktion sind die Hygieneregeln streng: Wasch dir die Hände, trag saubere Arbeitskleidung, wenn nötig ein Haarnetz, und keinen Schmuck. Erbrechen oder Durchfall? Melde es, bevor du anfängst. Halte deinen Arbeitsplatz ordentlich. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.hygiene.p': 'Ich nehme ein Medikament. Davon werde ich müde.',
    'c.hygiene.s': 'Dein Arzt gibt dir ein Medikament, das müde macht. Morgen musst du Gabelstapler fahren. Was machst du?',
    'c.hygiene.o1': 'Sag es deinem Vorgesetzten, bevor du anfängst.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': 'Sag nichts und fahr sehr langsam.',
    'c.hygiene.o3': 'Hör auf, das Medikament zu nehmen, ohne deinen Arzt zu fragen.',
    'c.hygiene.w': 'Dein Vorgesetzter muss nicht wissen, welches Medikament, nur dass du jetzt nicht fahren oder an Maschinen arbeiten kannst. So bleiben du und deine Kollegen sicher.',
    'c.smalltalk': 'Smalltalk in der Pause',
    'c.smalltalk.b': 'Kurze Gespräche in der Pause sind normal. Sie helfen dir, dich als Teil des Teams zu fühlen. Du bist am Kaffee- oder Mittagstisch willkommen. Einfache Themen sind das Wochenende, das Wetter, Sport und Urlaub. Fragen nach Lohn, Religion oder dem Privatleben sind am Anfang oft zu persönlich. An ihrem Geburtstag bringen viele Leute etwas für das Team mit (trakteren), zum Beispiel Kuchen. Hat ein Kollege Geburtstag? Sag „Gefeliciteerd!“.',
    'c.smalltalk.p': 'Herzlichen Glückwunsch zum Geburtstag!',
    'c.smalltalk.s': 'In der Pause sitzen deine Kollegen zusammen an einem Tisch. Du kennst sie noch nicht gut. Was machst du?',
    'c.smalltalk.o1': 'Frag „Mag ik bij jullie zitten?“ und unterhalte dich kurz mit ihnen.',
    'c.smalltalk.o2': 'Iss jeden Tag allein draußen, damit du sie nicht störst.',
    'c.smalltalk.o3': 'Frag jeden Kollegen, wie viel er verdient.',
    'c.smalltalk.w': 'Es ist willkommen, wenn du dich dazusetzt, und es hilft dir, das Team kennenzulernen. Eine einfache Frage wie „Hoe was je weekend?“ ist ein guter Anfang.',
    'c.mistakes': 'Fehler sind normal',
    'c.mistakes.b': 'Jeder macht bei der Arbeit Fehler. Sag es schnell, damit man es beheben kann: „Sorry, ik heb een fout gemaakt.“ Einen Fehler verstecken gilt als viel schlimmer als der Fehler selbst. Beim Feedback geht es um die Arbeit, nicht um dich als Person. Hast du ein Kompliment bekommen? Sag einfach danke. Nicht klar, was du besser machen sollst? Frag: „Kun je het uitleggen?“',
    'c.mistakes.p': 'Entschuldigung, ich habe einen Fehler gemacht. Wie kann ich das beheben?',
    'c.mistakes.s': 'Du hast 20 Kartons auf die falsche Palette gestellt. Noch hat es niemand gesehen. Was machst du?',
    'c.mistakes.o1': 'Sag es deinem Vorgesetzten und hilf, es zu beheben.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': 'Sag nichts und hoffe, dass es niemand merkt.',
    'c.mistakes.o3': 'Sag, dass ein Kollege es war.',
    'c.mistakes.w': 'Ein Fehler, den man früh sagt, ist leicht zu beheben. Ehrlichkeit schafft Vertrauen, und das zählt mehr, als nie einen Fehler zu machen.',
    'c.respect': 'Respekt für alle',
    'c.respect.b': 'Bei der Arbeit sind alle gleich, und alle werden mit Respekt behandelt, egal welches Geschlecht, welche Herkunft, welche Religion oder welche sexuelle Orientierung sie haben. Über Körperkontakt entscheidest du selbst. Händeschütteln ist üblich. Aber du darfst auch auf andere höfliche Art grüßen, zum Beispiel mit einem Nicken und einem Lächeln. Dann erklär es kurz. Witze über Herkunft oder Religion, Drohungen, Mobbing (pesten) und unerwünschtes sexuelles Verhalten werden nicht akzeptiert. Du kannst es deinem Vorgesetzten melden oder einer Vertrauensperson (vertrouwenspersoon), wenn deine Firma eine hat.',
    'c.respect.p': 'Ich gebe lieber nicht die Hand, aber ich grüße dich gern.',
    'c.respect.s': 'Ein Kollege macht oft Witze über deine Religion. Du hast ihn gebeten aufzuhören, aber er macht weiter. Was machst du?',
    'c.respect.o1': 'Sag es deinem Vorgesetzten oder der vertrouwenspersoon.',
    'c.respect.o2': 'Lach mit ihm mit, damit es keinen Ärger gibt.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': 'Mach zur Antwort Witze über seine Herkunft.',
    'c.respect.w': 'Solche Witze werden bei der Arbeit nicht akzeptiert. Es zu melden ist normal: Die Firma muss den Arbeitsplatz für alle sicher halten.',
    'c.health': 'Pausen und Arbeitszeiten',
    'c.health.b': 'Das Gesetz schützt deine Gesundheit. Arbeitest du mehr als 5,5 Stunden? Dann bekommst du mindestens 30 Minuten Pause (das dürfen 2-mal 15 Minuten sein). Mehr als 10 Stunden? Dann mindestens 45 Minuten. Ein Tarifvertrag (cao) kann etwas andere Pausenregeln haben. Du darfst höchstens 12 Stunden in einer Schicht und 60 Stunden in einer Woche arbeiten. Unter 18? Dann darfst du weniger Stunden arbeiten. Dein Arbeitgeber muss dir Schutzausrüstung, zum Beispiel Sicherheitsschuhe oder Handschuhe, kostenlos geben. Unsichere Arbeit oder zu wenig Lohn? Du kannst es der Nederlandse Arbeidsinspectie melden, auch ohne deinen Namen zu nennen. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.p': 'Ich hatte noch keine Pause.',
    'c.health.s': 'Du hast 6 Stunden ohne Pause gearbeitet. Dein Vorgesetzter bittet dich weiterzumachen. Was machst du?',
    'c.health.o1': 'Sag, dass du jetzt deine Pause brauchst.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o2': 'Mach weiter und mach später eine längere Pause.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o3': 'Hör auf zu arbeiten und geh ohne ein Wort nach Hause.',
    'c.health.w': 'Wenn du mehr als 5,5 Stunden arbeitest, ist eine Pause Gesetz, kein Gefallen. Erholung hilft dir auch, sicher zu arbeiten.',
    'c.rights': 'Diskriminierung und Kündigung',
    'c.rights.b': 'Diskriminierung bei der Arbeit ist verboten, zum Beispiel wegen deiner Herkunft, Religion oder deines Geschlechts. Dein Arbeitgeber kann dich nicht einfach entlassen: Normalerweise braucht er die Erlaubnis vom UWV oder von einem Richter, oder deine Zustimmung. (In der Probezeit oder am Ende eines befristeten Vertrags gelten andere Regeln.) Unterschreib kein Papier über deine Kündigung, das du nicht verstehst. Hast du eine Vereinbarung zum Ende deiner Arbeit unterschrieben (vaststellingsovereenkomst)? Dann kannst du sie meistens noch innerhalb von 14 Tagen schriftlich widerrufen. Hol dir zuerst Hilfe. Geh zur Gewerkschaft (zum Beispiel FNV), zu einer Antidiskriminierungsstelle oder zum Juridisch Loket. Das Juridisch Loket gibt kostenlose Rechtsberatung. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.',
    'c.rights.p': 'Ich möchte mich zuerst beraten lassen.',
    'c.rights.s': 'Dein Chef gibt dir ein Papier: „Unterschreib heute, dann gehst du im gegenseitigen Einvernehmen.“ Du verstehst es nicht gut. Was machst du?',
    'c.rights.o1': 'Unterschreib noch nicht. Lass dich zuerst beraten.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': 'Unterschreib, der Chef sagt ja, es ist in Ordnung.',
    'c.rights.o3': 'Leg das Papier weg und sprich nie darüber.',
    'c.rights.w': 'Steht darin etwas Falsches? Dann kannst du Rechte verlieren, zum Beispiel auf Arbeitslosengeld (WW). Um Zeit für eine Beratung zu bitten ist normal und erlaubt.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay': 'Moet, hoeft niet, mag niet', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.b': 'Auf Niederländisch ist das Gegenteil von „moeten“ „niet hoeven“. „Je moet tekenen“ heißt: Du hast keine Wahl. „Je hoeft niet te tekenen“ heißt: Du darfst wählen. „Je mag niet tekenen“ heißt: Es ist verboten. Achtung: Auf Englisch heißt „must not“ „mag niet“. Auf Deutsch heißt „muss nicht“ „hoeft niet“. Nicht sicher? Frag nach.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.p': 'Muss ich, oder habe ich die Wahl?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.s': 'Dein Teamleiter sagt: „Je hoeft zaterdag niet te komen.“ Was meint er?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o1': 'Du musst am Samstag nicht kommen. Du darfst wählen.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o2': 'Du darfst am Samstag nicht kommen.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o3': 'Du musst am Samstag kommen.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.w': '„Niet hoeven“ heißt: Es ist keine Pflicht, du darfst wählen. „Niet mogen“ würde heißen: Es ist verboten.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave': 'Urlaub und Sonderurlaub für Notfälle',
    'c.leave.b': 'Nach dem Gesetz bekommst du bezahlte freie Tage: mindestens 4-mal so viele Tage, wie du pro Woche arbeitest. Vollzeit, 5 Tage pro Woche? Dann mindestens 20 Tage im Jahr. Ein Tarifvertrag (cao) kann mehr geben. Beantrage Urlaub rechtzeitig und schriftlich. Ein plötzlicher Notfall, zum Beispiel ein Unfall oder eine Krankheit in deiner Familie? Dann kannst du kurzen bezahlten Sonderurlaub bekommen (calamiteitenverlof). Sag es sofort deinem Arbeitgeber. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.leave.p': 'Ich möchte gern Urlaub für Juli beantragen.',
    'c.leave.s': 'Du willst im Sommer drei Wochen deine Familie im Ausland besuchen. Was machst du?',
    'c.leave.o1': 'Beantrage früh und schriftlich Urlaub bei deinem Arbeitgeber.',
    'c.leave.o2': 'Fahr einfach und sag es deinem Chef, wenn du zurück bist.',
    'c.leave.o3': 'Bitte einen Kollegen, es dem Chef am Tag vorher zu sagen.',
    'c.leave.w': 'Dein Arbeitgeber muss meistens Ja sagen. Er darf nur aus einem sehr wichtigen Grund Nein sagen, und dann schriftlich innerhalb von 2 Wochen. Wer früh fragt, hat die besten Chancen auf ein Ja.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.illness': 'Deine Rechte, wenn du krank bist',
    'c.illness.b': 'Wenn du krank bist, muss dein Arbeitgeber mindestens 70 % deines Lohns zahlen, bis zu 2 Jahre lang. Ein Tarifvertrag (cao) gibt oft mehr. Es kann bis zu 2 Karenztage (wachtdagen) ohne Lohn geben, aber nur, wenn das in deinem Vertrag oder im Tarifvertrag steht. Dein Chef darf nicht fragen, welche Krankheit du hast. Über deine Gesundheit und deine Arbeit sprichst du mit dem Betriebsarzt (bedrijfsarts). Ruf deinen Arbeitgeber an, wenn du wieder gesund bist (betermelden). Im ersten Jahr bekommst du mindestens den Mindestlohn. Ein befristeter Vertrag endet am Enddatum, auch wenn du krank bist. Arbeitest du über eine Zeitarbeitsfirma? Wenn dein Vertrag eine Zeitarbeitsklausel (uitzendbeding) hat, kann er enden, wenn du krank wirst. Frag dann beim UWV nach der Ziektewet, oder frag bei einer Gewerkschaft. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.illness.x': 'Du bist krank und willst in dein Heimatland? Frag zuerst deinen Arbeitgeber oder die Zeitarbeitsfirma. Ohne Erlaubnis kann dein Lohn gestoppt werden. Gib dort deine Adresse an und geh ans Telefon.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': 'Ich bin wieder gesund. Ich komme morgen zur Arbeit.',
    'c.illness.s': 'Du bist eine Woche krank. Dein Arbeitgeber schickt dich zum Betriebsarzt. Was machst du?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': 'Geh hin und sprich über deine Gesundheit und Arbeit.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': 'Geh nicht hin, du hast deinen eigenen Arzt.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o3': 'Geh krank wieder arbeiten.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': 'Der Betriebsarzt hilft dir, gesund wieder an die Arbeit zu kommen. Der Arzt sagt deinem Chef keine medizinischen Details, nur welche Arbeit du machen kannst.',
    'c.warning': 'Zeichen von Ausbeutung',
    'c.warning.b': 'Achte auf diese Zeichen. Dein Arbeitgeber behält deinen Pass oder Ausweis. Das ist nicht erlaubt: Du behältst deinen Ausweis selbst. Ein Arbeitgeber darf nur eine Kopie machen. Du bekommst viel weniger Lohn als abgemacht, oder keine Lohnabrechnung. Du musst hohe Schulden beim Arbeitgeber oder bei der Zeitarbeitsfirma abbezahlen. Du musst extrem lange arbeiten, ohne Wahl. Jemand bedroht dich oder setzt dich mit deiner Wohnung unter Druck. Das ist nicht normal und nicht erlaubt. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.',
    'c.warning.p': 'Ich will meinen Pass zurück.',
    'c.warning.s': 'An deinem ersten Tag sagt die Zeitarbeitsfirma: „Wir behalten deinen Pass, zur Sicherheit.“ Was machst du?',
    'c.warning.o1': 'Behalte ihn selbst. Sie dürfen eine Kopie machen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': 'Gib ihn ab, die Zeitarbeitsfirma kennt ja die Regeln.',
    'c.warning.o3': 'Gib ihn ab, aber mach vorher ein Foto davon.',
    'c.warning.w': 'Dein Pass gehört dir. Ihn zu behalten ist eine Art, Arbeiter zu kontrollieren. Ein Arbeitgeber braucht nur eine Kopie für die Akten.',
    'c.gethelp': 'Wo du Hilfe bekommst',
    'c.gethelp.b': 'Siehst du Zeichen von Ausbeutung, bei dir oder bei jemand anderem? Hol dir Hilfe. Du kannst es der Nederlandse Arbeidsinspectie melden, auch anonym, oder der Polizei. Meld Misdaad Anoniem: 0800-7000. Kostenlose Rechtsberatung: das Juridisch Loket. In Gefahr? Ruf 112 an. Jeder, der in den Niederlanden arbeitet, kann Hilfe bekommen, auch Migranten. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.',
    'c.gethelp.p': 'Ich brauche Hilfe. Ich werde ausgebeutet.',
    'c.gethelp.s': 'Ein Freund arbeitet 14 Stunden am Tag für fast keinen Lohn. Er hat Angst vor seinem Chef. Was kannst du tun?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': 'Hilf ihm, Kontakt mit der Arbeidsinspectie oder dem Juridisch Loket aufzunehmen.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': 'Sag ihm, das ist für neue Arbeiter normal.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o3': 'Sag ihm, er soll warten, bis sein Vertrag endet, und dann gehen.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'Hilfe gibt es für alle, die in den Niederlanden arbeiten. Eine Meldung geht auch ohne Namen.',
    'c.callin': 'Deinen Vorgesetzten anrufen',
    'c.callin.b': 'Wenn du deinen Vorgesetzten anrufst, sag deinen Namen, den Grund und wann du wahrscheinlich wiederkommst. Krank? Du musst nur sagen, dass du krank bist, nicht welche Krankheit du hast. Ruf an: Schick nicht nur eine Nachricht, außer deine Firma sagt, dass eine Nachricht reicht. Keine Antwort? Sprich auf die Mailbox und versuch es noch einmal. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.callin.p': 'Hallo, hier ist Ali. Ich kann heute nicht kommen.',
    'c.callin.s': 'Dein Kind ist krank, und du kannst nicht zur Arbeit kommen. Deine Firma will, dass du anrufst. Was machst du?',
    'c.callin.o1': 'Ruf vor deiner Schicht deinen Vorgesetzten an.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.callin.o2': 'Schick zu Beginn deiner Schicht eine kurze Nachricht.',
    'c.callin.o3': 'Bitte deinen Nachbarn, für dich anzurufen.',
    'c.callin.w': 'Ein Anruf ist klar und schnell, und dein Vorgesetzter kann Fragen stellen. Wenn du sagst, wann du wahrscheinlich zurück bist, hilft das bei der Planung. Sag auch deinen Namen und den Grund.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'Nachrichten an die Arbeit: kurz und höflich',
    'c.texting.b': 'Halte Nachrichten an die Arbeit kurz und höflich. Sag, wer du bist und was los ist, und schließ mit einem Gruß. Zum Beispiel: „Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali“. Schau oft in die App auf deinen Dienstplan (rooster). Antworte rechtzeitig auf Anfragen für Schichten. Um eine Schicht zu tauschen, muss zuerst dein Vorgesetzter oder der Planer zustimmen, also frag: „Mag ik mijn dienst ruilen?“ Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.texting.p': 'Hallo Mark, ich komme 10 Minuten zu spät. Entschuldigung! Gruß, Ali',
    'c.texting.s': 'Du kommst 10 Minuten zu spät. Welche Nachricht an deinen Vorgesetzten ist am besten?',
    'c.texting.o1': '„Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali“',
    'c.texting.o2': '„Sorry, ik ben er zo!“ (ohne deinen Namen, ohne Uhrzeit).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting.o3': 'Eine Sprachnachricht von drei Minuten über den Verkehr.',
    'c.texting.w': 'Eine gute Nachricht sagt in wenigen Worten, wer du bist und was los ist. Dann weiß dein Vorgesetzter es sofort.',
    'c.certs': 'Zertifikate helfen dir',
    'c.certs.b': 'Auf dem Bau, in der Industrie und in der Zeitarbeit brauchst du oft ein VCA-Zertifikat (Sicherheit). Um Gabelstapler zu fahren, brauchst du meistens einen Staplerschein (heftruckcertificaat). Frag deinen Arbeitgeber, ob er den Kurs und die Prüfung bezahlt.',
    'c.certs.p': 'Kann ich hier einen VCA-Kurs machen?',
    'c.certs.s': 'Für eine Stelle braucht man ein VCA-Zertifikat. Du hast es noch nicht. Was machst du?',
    'c.certs.o1': 'Bitte den Arbeitgeber oder die Zeitarbeitsfirma um Hilfe.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': 'Bewirb dich nicht, du bekommst die Stelle ja sowieso nie.',
    'c.certs.o3': 'Sag, dass du es hast, und hoffe, dass es niemand prüft.',
    'c.certs.w': 'Viele Arbeitgeber und Zeitarbeitsfirmen helfen beim VCA. Wenn du fragst, zeigst du, dass du lernen willst.',
    'c.diploma': 'Dein Abschluss zählt',
    'c.diploma.b': 'Hast du einen Abschluss aus einem anderen Land? Du kannst ihn bei IDW (Internationale Diplomawaardering) bewerten lassen. Dann sehen Arbeitgeber, was er hier wert ist. Ist eine Schulung für deine Arbeit Pflicht? Dann muss dein Arbeitgeber sie bezahlen, und sie zählt als Arbeitszeit. Frag deinen Vorgesetzten nach Kursen. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.diploma.p': 'Gibt es Kurse für mich?',
    'c.diploma.s': 'Dein Arbeitgeber sagt, du musst am Samstag eine Pflicht-Sicherheitsschulung machen, ohne Lohn. Was stimmt?',
    'c.diploma.o1': 'Der Arbeitgeber bezahlt sie, und sie ist Arbeitszeit.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': 'Schulungen sind immer in deiner eigenen Freizeit.',
    'c.diploma.o3': 'Du musst die Schulung selbst bezahlen.',
    'c.diploma.w': 'Wenn eine Schulung für deine Arbeit Pflicht ist, zahlt der Arbeitgeber, und sie zählt als Arbeitszeit. Wenn es nicht klar ist, lass dich beraten.',
    'c.doctor': 'Arzt oder 112?',
    'c.doctor.b': 'Melde dich bei einem Hausarzt (huisarts) in der Nähe deiner Wohnung an. Brauchst du abends, nachts oder am Wochenende dringend Hilfe? Ruf die huisartsenpost an. Ruf 112 nur im Notfall an: Lebensgefahr, Feuer oder eine Straftat, die gerade passiert. Medikamente bekommst du in der Apotheke (apotheek).',
    'c.doctor.p': 'Ich möchte mich beim Hausarzt anmelden.',
    'c.doctor.s': 'Es ist Samstagnacht. Dein Kind hat hohes Fieber, aber es ist wach und atmet normal. Was machst du?',
    'c.doctor.o1': 'Ruf die huisartsenpost an.',
    'c.doctor.o2': 'Ruf 112 an.',
    'c.doctor.o3': 'Warte bis Montag und tu nichts.',
    'c.doctor.w': 'Die huisartsenpost hilft bei dringenden Fällen außerhalb der Sprechzeiten. 112 ist für Notfälle: Lebensgefahr, Feuer oder eine Straftat, die gerade passiert.',
    'c.insurance': 'Krankenversicherung',
    'c.insurance.b': 'Wenn du in den Niederlanden wohnst oder arbeitest, ist eine Grundversicherung für Gesundheit meistens Pflicht. Du zahlst jeden Monat einen Beitrag (premie). Jedes Jahr gibt es einen Eigenanteil (eigen risico): Die ersten Kosten zahlst du selbst. Der Betrag ändert sich: Frag bei deiner Versicherung nach. Besuche beim Hausarzt (huisarts) zählen nicht für den Eigenanteil. Mit wenig Einkommen bekommst du vielleicht einen Zuschuss (zorgtoeslag). Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.insurance.p': 'Ich brauche eine Krankenversicherung. Können Sie mir helfen?',
    'c.insurance.s': 'Du arbeitest seit zwei Wochen hier und hast noch keine Krankenversicherung. Was machst du?',
    'c.insurance.o1': 'Kümmere dich schnell um eine Krankenversicherung.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': 'Warte: Deine Versicherung von zu Hause reicht.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': 'Benutz die Versichertenkarte von einem Freund.',
    'c.insurance.w': 'Ohne Versicherung kann ein Arzt oder ein Krankenhaus viel kosten, und du kannst eine Strafe bekommen. Wenn du dich schnell darum kümmerst, schützt du dich. Dein Arbeitgeber oder deine Zeitarbeitsfirma kann dir helfen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters': 'Ignorier keine Briefe',
    'c.letters.b': 'Ignorier keine Briefe vom Belastingdienst, von der gemeente oder vom UWV. Bitte jemanden, dem du vertraust, dir beim Lesen zu helfen. Die Steuererklärung (aangifte) für das letzte Jahr muss meistens vor dem 1. Mai gemacht sein. Du kannst um mehr Zeit bitten. Zuschüsse (toeslagen) wie zorgtoeslag und huurtoeslag hängen von deinem Einkommen ab. Wenn du zu viel bekommst, musst du es zurückzahlen. Halte deine Angaben zum Einkommen also aktuell. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.letters.p': 'Ich habe einen Brief bekommen. Kannst du mir helfen?',
    'c.letters.s': 'Du bekommst einen Brief vom Belastingdienst. Du verstehst ihn nicht. Was machst du?',
    'c.letters.o1': 'Bitte jemanden, dem du vertraust, dir beim Lesen zu helfen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': 'Leg ihn in eine Schublade und warte.',
    'c.letters.o3': 'Wirf ihn weg, das ist wahrscheinlich Werbung.',
    'c.letters.w': 'Offizielle Briefe haben oft eine Frist. Wenn du rechtzeitig reagierst, sind Probleme meistens leichter zu lösen.',
    'c.scams': 'Vorsicht vor Betrug',
    'c.scams.b': 'Deine Bank fragt nie per Telefon, SMS oder E-Mail nach deinen Codes oder deiner PIN. Klick nicht auf Links in Nachrichten, die du nicht erwartet hast. Jemand drängt dich, schnell zu zahlen? Stopp und prüfe zuerst. Ruf deine Bank unter der offiziellen Nummer an, zum Beispiel der Nummer auf deiner Bankkarte oder auf ihrer Website.',
    'c.scams.p': 'Ich rufe die Bank selbst zurück.',
    'c.scams.s': 'Du bekommst eine SMS: „Dein Bankkonto wird gesperrt. Klick jetzt auf diesen Link.“ Was machst du?',
    'c.scams.o1': 'Klick nicht. Ruf deine Bank unter der offiziellen Nummer an.',
    'c.scams.o2': 'Klick schnell, damit dein Konto nicht gesperrt wird.',
    'c.scams.o3': 'Antworte auf die SMS und frag, ob sie echt ist.',
    'c.scams.w': 'Betrüger machen Druck und benutzen falsche Links. Deine Bank fragt nie über einen Link oder eine Nachricht nach deinen Codes.',
    'c.bike': 'Mit dem Fahrrad zur Arbeit',
    'c.bike.b': 'Mach dein Licht an, wenn es dunkel ist. Fahr auf dem Radweg und halte dich an Ampeln und Schilder. Schließ dein Fahrrad immer ab. Das Handy in der Hand halten beim Radfahren ist verboten.',
    'c.bike.p': 'Wo kann ich mein Fahrrad abstellen?',
    'c.bike.s': 'Es ist dunkel, und du fährst mit dem Fahrrad zur Nachtschicht. Dein Handy klingelt. Was machst du?',
    'c.bike.o1': 'Halt an einer sicheren Stelle an, bevor du rangehst.',
    'c.bike.o2': 'Geh ran, mit dem Handy in der Hand beim Fahren.',
    'c.bike.o3': 'Fahr weiter und schau kurz aufs Handy.',
    'c.bike.w': 'Ein Handy in der Hand beim Radfahren ist verboten und gefährlich. Zuerst anhalten dauert nur einen Moment.',
    'c.transit': 'Bus, Bahn und Fahrtkosten',
    'c.transit.b': 'In den meisten Bussen und Zügen kannst du mit deiner Bankkarte zahlen (OVpay). Check mit derselben Karte ein UND aus, sonst zahlst du zu viel. Eine Fahrtkostenerstattung (reiskostenvergoeding) ist kein gesetzliches Recht: Das hängt von deinem Arbeitgeber oder vom Tarifvertrag (cao) ab. Frag danach. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.transit.p': 'Bekomme ich Geld für meine Fahrtkosten?',
    'c.transit.s': 'Du fährst jeden Tag mit dem Bus zur Arbeit. Ein Kollege bekommt Fahrgeld, du nicht. Was machst du?',
    'c.transit.o1': 'Frag deinen Vorgesetzten nach den Regeln von Firma oder Tarifvertrag.',
    'c.transit.o2': 'Sag nichts, das ist wahrscheinlich nicht für dich.',
    'c.transit.o3': 'Sag deinem Vorgesetzten: Laut Gesetz musst du es auch bekommen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': 'Fahrtkostenerstattung hängt vom Arbeitgeber oder vom Tarifvertrag ab. Danach zu fragen ist normal und hilft dir, deine Rechte zu kennen.',
    'c.ww': 'Arbeitslosengeld (WW)',
    'c.ww.b': 'Arbeit verloren? Beantrage so schnell wie möglich WW beim UWV, innerhalb einer Woche nach deinem ersten Tag ohne Arbeit. Meistens musst du mindestens 26 der letzten 36 Wochen gearbeitet haben. Wenn du selbst kündigst, bekommst du meistens kein WW. Melde dich auf werk.nl als arbeitssuchend. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.ww.x': 'Du suchst Arbeit in einem anderen EU-Land? Manchmal kannst du dein WW mitnehmen. Beantrage vor der Abreise beim UWV das Formular U2. Ohne U2 endet dein WW.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'Ich möchte Arbeitslosengeld beantragen. Was muss ich tun?',
    'c.ww.s': 'Du bist wütend wegen deiner Arbeit und willst heute kündigen. Was ist klug?',
    'c.ww.o1': 'Lass dich zuerst beraten, bevor du kündigst.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ww.o2': 'Kündige heute: Du bekommst WW sowieso.',
    'c.ww.o3': 'Komm einfach nicht mehr zur Arbeit, ohne etwas zu sagen.',
    'c.ww.w': 'Eine Kündigung kann dich dein Arbeitslosengeld kosten. Wenn du zuerst mit deinem Vorgesetzten, der Gewerkschaft oder dem Juridisch Loket sprichst, findest du vielleicht einen besseren Weg.',
    'c.newjob': 'Neue Arbeit suchen',
    'c.newjob.b': 'Bevor du gehst, bitte um eine Referenz (referentie). Bewahre deine Lohnabrechnungen und deinen Vertrag auf. Aktualisiere deinen Lebenslauf. Such Arbeit bei Zeitarbeitsfirmen (uitzendbureaus) und auf werk.nl. Zahl nie Geld, um eine Arbeit zu bekommen. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.',
    'c.newjob.p': 'Darf ich Sie als Referenz angeben?',
    'c.newjob.s': 'Jemand bietet dir eine Arbeit an, aber zuerst musst du 300 Euro „für die Stelle“ zahlen. Was machst du?',
    'c.newjob.o1': 'Zahl nicht. Such eine echte Zeitarbeitsfirma.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': 'Zahl, eine gute Stelle ist das wert.',
    'c.newjob.o3': 'Zahl jetzt die Hälfte und den Rest später.',
    'c.newjob.w': 'Geld für eine Stelle zu verlangen ist ein Warnzeichen. Eine Zeitarbeitsfirma darf dir kein Geld dafür berechnen, dass sie Arbeit für dich findet. Du kannst auch auf werk.nl nach Arbeit suchen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'Das Toolbox-Meeting',
    'c.tools.b': 'Auf vielen Baustellen gibt es regelmäßig ein kurzes Sicherheitstreffen: das Toolbox-Meeting. Dort hörst du von Risiken und neuen Regeln. Geh hin, hör zu und stell Fragen, wenn du etwas nicht verstehst. Prüfe dein Werkzeug, bevor du es benutzt. Ist ein Werkzeug kaputt? Sag es deinem Vorgesetzten.',
    'c.tools.p': 'Diese Bohrmaschine ist kaputt. Gibt es eine andere?',
    'c.tools.s': 'Es gibt ein Toolbox-Meeting, aber dein Niederländisch ist noch nicht gut. Was machst du?',
    'c.tools.o1': 'Geh hin, und frag danach einen Kollegen, was du verpasst hast.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': 'Geh nicht hin, du verstehst es ja sowieso nicht.',
    'c.tools.o3': 'Unterschreib die Anwesenheitsliste, ohne hinzugehen.',
    'c.tools.w': 'Sicherheitsinformationen sind für alle. Eine Übersetzungs-App kann dir helfen, dem Meeting zu folgen, wenn Handys dort erlaubt sind. Danach einen Kollegen zu fragen ist normal und prüft, ob du es richtig verstanden hast.',
    'c.site': 'Stopp und prüfe: LMRA',
    'c.site.b': 'Bevor du mit einer Arbeit anfängst, halte kurz an und prüfe: Was kann hier schiefgehen? Das ist die LMRA (Last-Minute-Risikoanalyse). Trag immer deinen Helm, und eine Absturzsicherung, wenn du in der Höhe arbeitest. Stell dich nie unter eine hängende Last. Ist die Arbeit wirklich gefährlich? Dann darfst du aufhören, und du musst es sofort deinem Vorgesetzten sagen. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.site.p': 'Ich fange noch nicht an. Das ist nicht sicher.',
    'c.site.s': 'Du musst auf einem Gerüst arbeiten, aber ein Geländer fehlt. Ein Kollege sagt: „Pass einfach auf.“ Was machst du?',
    'c.site.o1': 'Fang nicht an, und sag es deinem Vorgesetzten.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': 'Fang an, aber pass sehr gut auf.',
    'c.site.o3': 'Repariere das Geländer selbst mit einem Seil.',
    'c.site.w': 'Ein Sturz aus der Höhe kann sehr schwere Verletzungen verursachen. Gefährliche Arbeit darfst du stoppen, und eine Meldung schützt das ganze Team.',
    'c.line': 'Hände weg von laufenden Maschinen',
    'c.line.b': 'Greif nie in eine laufende Maschine, nicht einmal für eine Sekunde. Bei einer Störung (storing): Drück den Notaus (noodstop) und ruf deinen Vorgesetzten. Wartung und Reparaturen machen nur geschulte Leute, und nur, wenn die Maschine gesichert ist (Lock-out). Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.line.p': 'Es gibt eine Störung. Ich habe den Notaus gedrückt.',
    'c.line.s': 'Ein Produkt steckt in der Maschine fest. Die Maschine läuft noch. Was machst du?',
    'c.line.o1': 'Drück den Notaus und ruf deinen Vorgesetzten.',
    'c.line.o2': 'Zieh es schnell mit der Hand heraus, bevor es kaputtgeht.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': 'Lass es und hoffe, dass die Maschine es selbst löst.',
    'c.line.w': 'Laufende Maschinen können in einer Sekunde schwere Unfälle verursachen. Die Maschine anhalten ist immer erlaubt und immer besser.',
    'c.quality': 'Qualität: Sag, was du siehst',
    'c.quality.b': 'Siehst du ein Problem mit einem Produkt, zum Beispiel einen Schaden oder ein falsches Etikett? Melde es und leg es zur Seite. Lass es nicht durch, nur damit das Band weiterläuft. Ein Problem früh finden spart viel Arbeit und Geld. Dein Vorgesetzter ist froh, dass du es gesagt hast.',
    'c.quality.p': 'Ich glaube, mit diesen Produkten stimmt etwas nicht.',
    'c.quality.s': 'Du siehst, dass viele Produkte ein falsches Datum auf dem Etikett haben. Am Band ist sehr viel los. Was machst du?',
    'c.quality.o1': 'Sag es sofort deinem Vorgesetzten oder der Person für Qualität.',
    'c.quality.o2': 'Lass sie durch, das ist ja nicht deine Aufgabe.',
    'c.quality.o3': 'Wirf sie heimlich weg.',
    'c.quality.w': 'Ein falsches Etikett kann bedeuten, dass alle Produkte aus den Geschäften zurückkommen müssen. Es früh zu sagen ist das, was ein gutes Teammitglied tut.',
    'c.client': 'Respekt für den Klienten',
    'c.client.b': 'Klopf an, bevor du in das Zimmer eines Klienten gehst. Sag, wer du bist, erklär, was du machen wirst, und frag um Erlaubnis. Sag „u“ zu Klienten, außer sie bitten dich, „je“ zu sagen. Lass Klienten das machen, was sie selbst können.',
    'c.client.p': 'Darf ich hereinkommen? Ich helfe Ihnen beim Waschen.',
    'c.client.s': 'Du musst einer Klientin beim Waschen helfen. Die Tür ihres Zimmers ist zu. Was machst du?',
    'c.client.o1': 'Klopf an, warte und sag, wer du bist und warum.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.client.o2': 'Geh schnell hinein, du hast ja viel zu tun.',
    'c.client.o3': 'Lass das Waschen aus, damit du sie nicht störst.',
    'c.client.w': 'Das Zimmer ist das Zuhause der Klientin. Anklopfen und erklären zeigt Respekt und macht die Pflege ruhiger.',
    'c.privacy': 'Privatsphäre, Hygiene und Medikamente',
    'c.privacy.b': 'Was du über Klienten siehst und hörst, bleibt bei der Arbeit. Sprich außerhalb der Arbeit nicht über Klienten und poste nie Fotos von ihnen. Reinige deine Hände vor und nach der Pflege. Merkst du eine Veränderung bei einem Klienten, zum Beispiel Schmerzen oder einen Sturz? Sag es sofort der Pflegefachkraft. Gib nie Medikamente, außer du bist dafür geschult und darfst es. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.privacy.p': 'Der Herr hat mehr Schmerzen als gestern.',
    'c.privacy.s': 'Eine Klientin bittet dich um ihre Tabletten. Du bist nicht geschult, Medikamente zu geben. Was machst du?',
    'c.privacy.o1': 'Sag freundlich, dass du die Pflegefachkraft holst.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': 'Gib ihr die Tabletten, sie weiß ja, was sie braucht.',
    'c.privacy.o3': 'Sag nein und geh weg.',
    'c.privacy.w': 'Falsche Medikamente können gefährlich sein. Schnell die richtige Person zu holen hilft der Klientin und schützt alle.',
    'c.kitchen': 'Lebensmittelsicherheit',
    'c.kitchen.b': 'Wasch dir oft die Hände, auch nach der Toilette und nachdem du rohes Fleisch angefasst hast. Halte kaltes Essen kalt und warmes Essen heiß. Kleb ein Etikett mit dem Datum auf Essen, das du aufbewahrst. Diese Regeln heißen HACCP. Allergien sind ernst: Nicht sicher, was in einem Gericht ist? Frag immer den Küchenchef. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.kitchen.p': 'Chef, ist in dieser Soße Gluten?',
    'c.kitchen.s': 'Ein Gast fragt, ob in einem Gericht Nüsse sind. Du bist nicht sicher. Was machst du?',
    'c.kitchen.o1': 'Sag, dass du nachfragst, und frag den Küchenchef.',
    'c.kitchen.o2': 'Sag „nein“, damit der Gast zufrieden ist.',
    'c.kitchen.o3': 'Sag dem Gast, er soll die Nüsse heraussuchen.',
    'c.kitchen.w': 'Für einen Gast mit Allergie kann ein kleiner Fehler sehr gefährlich sein. Beim Küchenchef nachfragen ist immer richtig.',
    'c.service': 'Höflich zu Gästen',
    'c.service.b': 'Sag „u“ zu Gästen, außer sie bitten dich, „je“ zu sagen. Sei freundlich und ruhig, auch wenn viel los ist. Nicht sicher bei einer Frage? Sag, dass du nachfragst. Trinkgeld (fooi): Die Regeln sind überall anders. Frag, wie das Trinkgeld bei dir geteilt wird.',
    'c.service.p': 'Einen Moment, ich bin gleich bei Ihnen.',
    'c.service.s': 'Es ist sehr viel los. Ein Gast ruft dich, aber du trägst Teller zu einem anderen Tisch. Was machst du?',
    'c.service.o1': 'Schau den Gast an und sag: „Een moment, ik kom zo bij u.“',
    'c.service.o2': 'Beachte den Gast nicht, bis du Zeit hast.',
    'c.service.o3': 'Stell die Teller auf einen freien Tisch und geh zuerst zum Gast.',
    'c.service.w': 'Ein kurzes Zeichen zeigt dem Gast, dass du ihn gesehen hast. Dann kannst du deine Aufgabe in Ruhe fertig machen.',
    'c.cleaning': 'Lies das Etikett',
    'c.cleaning.b': 'Jedes Reinigungsmittel hat ein Etikett. Gefahrensymbole (kleine Bilder in einer roten Raute) zeigen die Gefahr, zum Beispiel für deine Haut, Augen oder Lunge. Lies das Etikett oder frag, wofür das Mittel ist und wie man es benutzt. Trag die Handschuhe, die dein Arbeitgeber dir gibt. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.cleaning.p': 'Wofür ist dieses Mittel?',
    'c.cleaning.s': 'Du bekommst ein neues Reinigungsmittel. Du kannst das Etikett nicht gut lesen. Was machst du?',
    'c.cleaning.o1': 'Frag, wie du es sicher benutzt.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': 'Nimm viel davon, dann wirkt es besser.',
    'c.cleaning.o3': 'Probier es einfach ohne Handschuhe.',
    'c.cleaning.w': 'Das falsche Mittel, oder zu viel davon, kann deine Haut, Augen oder Lunge verletzen. Fragen dauert eine Minute.',
    'c.cleansafe': 'Misch nie Mittel',
    'c.cleansafe.b': 'Misch nie Reinigungsmittel, zum Beispiel Bleiche und einen WC-Reiniger. Dabei können gefährliche Gase entstehen. Lass frische Luft herein. Du wischst einen Boden? Stell das Schild für nasse Böden auf (Pas op, glad!), damit niemand ausrutscht. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.cleansafe.p': 'Ich stelle das Schild hin. Der Boden ist nass.',
    'c.cleansafe.s': 'Die Toilette ist sehr schmutzig. Eine Kollegin sagt: „Misch zwei Mittel, dann wirkt es besser.“ Was machst du?',
    'c.cleansafe.o1': 'Misch sie nicht. Nimm ein Mittel.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleansafe.o2': 'Misch sie, aber mach ein Fenster auf.',
    'c.cleansafe.o3': 'Misch sie schnell und geh aus dem Raum.',
    'c.cleansafe.w': 'Gemischte Mittel können giftiges Gas machen, auch bei offenem Fenster. Ein Mittel, richtig benutzt, reicht.',
    'u.tools': 'Schlaue Hilfsmittel',
    'l.translate': 'Mit dem Handy übersetzen',
    'w.vertaalapp': 'die Übersetzungs-App',
    'w.vertalen': 'übersetzen',
    'w.camera': 'die Kamera',
    'w.briefje': 'der Zettel',
    'w.spreken': 'sprechen',
    'w.vertaling': 'die Übersetzung',
    's.translate.1': 'Ich übersetze es mit meinem Handy.',
    's.translate.2': 'Darf ich das kurz übersetzen?',
    's.translate.3': 'Würden Sie kurz in mein Handy sprechen?',
    'c.translate.q': 'Was steht auf dem Zettel?',
    'c.translate.a': 'Moment, ich übersetze es.',
    'l.understood': 'Verstehen und verstanden werden',
    'w.herhalen': 'wiederholen',
    'w.opschrijven': 'aufschreiben',
    'w.latenzien': 'zeigen',
    'w.ondertiteling': 'die Untertitel (Sprache als Text)',
    'w.instructie': 'die Anleitung, die Anweisung',
    'w.plaatje': 'das Bild',
    's.understood.1': 'Würden Sie es aufschreiben?',
    's.understood.2': 'Können Sie es zeigen?',
    's.understood.3': 'Gibt es eine Anleitung mit Bildern?',
    'c.understood.q': 'Erst aufräumen, dann einpacken.',
    'c.understood.a': 'Ich muss also zuerst aufräumen?',
    'l.keeplearning': 'Weiterlernen',
    'w.bibliotheek': 'die Bibliothek (Stadtbücherei)',
    'w.taalhuis': 'das Taalhuis (kostenlose Hilfe beim Niederländisch)',
    'w.oefenen': 'üben',
    'w.luisteren': 'zuhören',
    'w.elkedag': 'jeden Tag',
    'w.woord': 'das Wort',
    's.keeplearning.1': 'Ich übe jeden Tag zehn Minuten.',
    's.keeplearning.2': 'Was bedeutet dieses Wort?',
    's.keeplearning.3': 'Sprichst du Niederländisch mit mir?',
    'c.keeplearning.q': 'Soll ich Englisch sprechen?',
    'c.keeplearning.a': 'Nein, lieber Niederländisch. Ich will üben.',
    'c.translate': 'Übersetzungs-Apps: schlau, aber prüfe',
    'c.translate.b': 'Eine Übersetzungs-App wie Google Übersetzer hilft sehr. Du kannst tippen, sprechen oder den Gesprächsmodus benutzen, um mit einem Kollegen zu reden. Mit der Kamera kannst du Schilder, Zettel und Anleitungen übersetzen. Auf vielen Handys kann auch WhatsApp Nachrichten übersetzen. Benutz dein Handy nur da, wo es sicher und erlaubt ist. Nie an Maschinen oder Gabelstaplern. Frag immer zuerst. Apps machen Fehler. Bei wichtigen Dingen, wie deinem Vertrag, einem Brief oder einer Sicherheitsanweisung, bitte auch einen Menschen, es dir zu erklären. Mach keine Fotos von vertraulichen Arbeitspapieren ohne Erlaubnis.',
    'c.translate.p': 'Darf ich mein Handy zum Übersetzen benutzen?',
    'c.translate.s': 'Dein Vorgesetzter gibt dir Sicherheitsanweisungen auf Niederländisch. Du verstehst nur ein paar Wörter. Was machst du?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': 'Bitte um eine Erklärung und frag, ob eine App okay ist.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': 'Sag „ja, ja“ und fang an zu arbeiten.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': 'Mach ein Foto und schick es deinen Freunden zum Übersetzen.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': 'Eine Übersetzungs-App hilft dir, schnell zu verstehen, aber sie kann Fehler machen. Bei Sicherheit ist eine Erklärung von einem Menschen die beste Kontrolle. Arbeitspapiere können vertraulich sein, also teile sie nicht ohne Erlaubnis.',
    'c.understood': 'Prüfe, ob du es verstanden hast',
    'c.understood.b': 'Dein Handy kann Sprache in Text verwandeln (Live-Untertitel): Live Transcribe auf Android, Live-Untertitel auf dem iPhone. Prüfe, welche Sprachen dein Handy kann. Du kannst auch jemanden bitten, es aufzuschreiben, es zu zeigen oder langsam zu sprechen. Frag, ob es eine Anleitung mit Bildern gibt, oder in deiner Sprache. Sag dann zurück, was du verstanden hast: „Dus ik moet eerst …?“ Das ist hier normal, und es verhindert Fehler.',
    'c.understood.p': 'Ich muss also zuerst die Kartons zählen?',
    'c.understood.s': 'Eine Kollegin erklärt, wie eine neue Maschine funktioniert. Sie spricht schnell, und du verpasst ein paar Wörter. Was machst du?',
    'c.understood.o1': 'Bitte sie, es zu zeigen oder aufzuschreiben, und wiederhole es.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': 'Nick und sag „ja, ja“, damit sie keine Zeit verliert.',
    'c.understood.o3': 'Probier die Maschine später allein aus und schau, was passiert.',
    'c.understood.w': 'Zeigen, aufschreiben und zurücksagen sind schnelle Kontrollen. Deine Kollegin kann dich korrigieren, bevor etwas schiefgeht. Hier gilt das als sorgfältig, nicht als langsam.',
    'c.keeplearning': 'Lern weiter, jeden Tag ein bisschen',
    'c.keeplearning.b': 'Jeden Tag ein paar Minuten hilft mehr als eine lange Stunde pro Woche. Speichere neue Wörter von der Arbeit in einer Notiz-App auf deinem Handy. Hör einfaches Niederländisch, zum Beispiel das NOS Jeugdjournaal (Nachrichten für Kinder) oder einen Podcast in langsamem Niederländisch. Viele Bibliotheken haben ein Taalhuis: kostenlose Hilfe beim Niederländisch, oft mit einem taalcafé (ein Ort, um Sprechen zu üben) oder einem Sprachpartner (taalmaatje). Kollegen wechseln oft ins Englische, um dir zu helfen. Bitte sie freundlich, Niederländisch mit dir zu sprechen: Die meisten helfen gern.',
    'c.keeplearning.p': 'Sprich ruhig Niederländisch mit mir, dann lerne ich es schneller.',
    'c.keeplearning.s': 'Deine Kollegen wechseln immer ins Englische, wenn sie mit dir reden. Du willst Niederländisch lernen. Was machst du?',
    'c.keeplearning.o1': 'Bedank dich und bitte sie, Niederländisch mit dir zu sprechen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': 'Sag nichts. Das Niederländisch kommt von selbst.',
    'c.keeplearning.o3': 'Antworte auch auf Englisch, weil das höflicher ist.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': 'Kollegen wechseln oft ins Englische, um nett zu sein. Wenn du um Niederländisch bittest, helfen die meisten gern. Jeden Tag ein bisschen bei der Arbeit sprechen ist einer der schnellsten Wege zu lernen.',
    'l.gossip': 'Lästern und soziale Medien',
    'w.roddelen': 'lästern, tratschen',
    'w.posten': 'posten (online)',
    'w.groepsapp': 'der Gruppenchat',
    'w.socialemedia': 'die sozialen Medien',
    'w.delen': 'teilen',
    'w.screenshot': 'der Screenshot',
    's.gossip.1': 'Ich lästere nicht über Kollegen.',
    's.gossip.2': 'Ich stelle keine Fotos von der Arbeit online.',
    's.gossip.3': 'Sag es mir lieber direkt.',
    'c.gossip.q': 'Hast du gehört, was Mark gemacht hat?',
    'c.gossip.a': 'Nein, und ich rede lieber nicht über ihn.',
    'l.boundaries': 'Grenzen überschreiten',
    'w.aanraken': 'berühren, anfassen',
    'w.ongewenst': 'unerwünscht',
    'w.opmerking': 'die Bemerkung',
    'w.intimidatie': 'die Belästigung, die Einschüchterung',
    'w.getuige': 'der Zeuge / die Zeugin',
    'w.grapje': 'der Witz, der Spaß',
    's.boundaries.1': 'Fass mich nicht an.', // nieuw, nalezen ("Blijf van me af.", 4 nov 2026) // nagelezen AI 28 nov
    's.boundaries.2': 'Diese Bemerkung finde ich nicht lustig.',
    's.boundaries.3': 'Ich möchte der Vertrauensperson etwas melden.',
    'c.boundaries.q': 'Stell dich nicht so an, das war doch nur ein Witz.',
    'c.boundaries.a': 'Für mich nicht. Ich will, dass du aufhörst.',
    'c.gossip': 'Lästern und soziale Medien',
    'c.gossip.b': 'Hinter dem Rücken eines Kollegen reden (roddelen) schadet dem Vertrauen im Team. Hast du ein Problem mit jemandem? Sprich mit dieser Person oder mit deinem Vorgesetzten. Online gelten dieselben Regeln wie bei der Arbeit. Poste nichts über Kollegen, Klienten oder die Firma ohne Erlaubnis. Das gilt auch für Fotos, Videos und Nachrichten. Dein Chef kann sehen, was du postest, und es kann jahrelang online bleiben. Viele Teams haben einen Gruppenchat (groepsapp) für die Arbeit: Bleib dort bei der Arbeit und teile keine Screenshots davon mit anderen. Private Dinge eines Kollegen teilen oder jemanden online lächerlich machen ist auch Mobbing.',
    'c.gossip.p': 'Das will ich nicht online haben.',
    'c.gossip.s': 'Ein Kollege filmt dich, als du auf dem nassen Boden ausrutschst. Er will das Video auf TikTok stellen. Was machst du?',
    'c.gossip.o1': 'Sag „Nee, dat wil ik niet“ und bitte ihn, es zu löschen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.o2': 'Lach und lass ihn posten, damit du nicht schwierig bist.',
    'c.gossip.o3': 'Bitte ihn, es ohne deinen Namen zu posten.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': 'Meistens darf niemand ohne deine Erlaubnis ein Video von dir online stellen. Nein sagen ist normal, und dein Arbeitgeber muss handeln, wenn Kollegen sich online übereinander lustig machen. Wenn er es trotzdem postet, sag es deinem Vorgesetzten.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': 'Grenzen überschreiten',
    'c.boundaries.b': 'Grensoverschrijdend gedrag ist Verhalten, das die Grenze von jemandem überschreitet. Zum Beispiel: unerwünschtes Anfassen, sexuelle Bemerkungen oder Witze, Anstarren, unerwünschte Bilder, Drohungen oder Anschreien. Es ist egal, ob die andere Person es „als Witz gemeint“ hat: Es zählt, wie es sich für dich anfühlt. Wenn du kannst, sag klar, dass es aufhören soll. Schreib auf, was passiert ist, wann und wer es gesehen hat. Sag es deinem Vorgesetzten, der Vertrauensperson (vertrouwenspersoon, wenn es eine gibt) oder der Personalabteilung (HR). Dein Arbeitgeber muss dich schützen, und du darfst nicht bestraft werden, weil du es meldest. Hast du gesehen, dass es einem Kollegen passiert? Frag, ob alles okay ist, und biete an, Zeuge zu sein.',
    'c.boundaries.p': 'Ich will, dass du aufhörst.',
    'c.boundaries.s': 'Dein Teamleiter legt oft seine Hand auf deinen Rücken und sagt, du siehst „hübsch“ aus. Dabei fühlst du dich unwohl. Er bestimmt deine Schichten. Was machst du?',
    'c.boundaries.o1': 'Schreib alles auf und sag es der vertrouwenspersoon.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.boundaries.o2': 'Sag nichts, er bestimmt ja deine Schichten.',
    'c.boundaries.o3': 'Kündige, ohne jemandem zu sagen, warum.',
    'c.boundaries.w': 'Das ist unerwünschtes Verhalten, und es ist nicht deine Schuld. Eine Vertrauensperson hört dir vertraulich zu und hilft dir, den nächsten Schritt zu wählen. Du bist geschützt, wenn du es meldest. Du kannst auch mit der Personalabteilung sprechen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'u.shop': 'Im Geschäft',
    'l.shelves': 'Regale und Bestand',
    'w.schap': 'das Regal (im Geschäft)',
    'w.vakkenvullen': 'Regale auffüllen',
    'w.voorraad': 'der Bestand, der Vorrat',
    'w.houdbaarheidsdatum': 'das Mindesthaltbarkeitsdatum',
    'w.prijskaartje': 'das Preisschild',
    'w.achteraan': 'hinten',
    's.shelves.1': 'Stell die neuen Produkte nach hinten.',
    's.shelves.2': 'Dieses Produkt ist abgelaufen.',
    's.shelves.3': 'Ist noch etwas auf Lager?',
    'c.shelves.q': 'Wo finde ich den Reis?',
    'c.shelves.a': 'In Gang vier. Ich gehe kurz mit Ihnen hin.',
    'l.checkout': 'An der Kasse',
    'w.klant': 'der Kunde / die Kundin',
    'w.kassa': 'die Kasse',
    'w.wisselgeld': 'das Wechselgeld',
    'w.bonnetje': 'der Kassenbon',
    'w.pinnen': 'mit Karte zahlen',
    'w.contant': 'bar',
    's.checkout.1': 'Möchten Sie mit Karte oder bar zahlen?',
    's.checkout.2': 'Hier ist Ihr Wechselgeld.',
    's.checkout.3': 'Darf ich bitte kurz Ihren Ausweis sehen?',
    'c.checkout.q': 'Kann ich hier mit Karte zahlen?',
    'c.checkout.a': 'Ja, klar, das geht.',
    'u.numbers': 'Rechnen: Zeit, Geld und Maße',
    'l.counting': 'Zahlen', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertien': 'dreizehn (13)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertig': 'dreißig (30)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventien': 'siebzehn (17)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventig': 'siebzig (70)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zevenenveertig': 'siebenundvierzig (47)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierenzeventig': 'vierundsiebzig (74)', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.1': 'Ich habe dreizehn Kartons, nicht dreißig.', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.2': 'Lagerplatz vierundsiebzig ist leer.', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.3': 'Können Sie es Ziffer für Ziffer sagen?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.q': 'Wie viele Kartons sind noch übrig?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.a': 'Siebzig. Sieben, null.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.hours': 'Stunden und Uhrzeiten',
    'w.uur': 'die Stunde, Uhr',
    'w.minuut': 'die Minute',
    'w.kwartier': 'die Viertelstunde (15 Minuten)',
    'w.halfuur': 'eine halbe Stunde (30 Minuten)',
    'w.duren': 'dauern',
    'w.optellen': 'zusammenzählen',
    's.hours.1': 'Ich fange um halb acht (7:30) an.',
    's.hours.2': 'Ich arbeite heute acht Stunden.',
    's.hours.3': 'Die Pause dauert eine halbe Stunde.',
    'c.hours.q': 'Um wie viel Uhr bist du fertig?',
    'c.hours.a': 'Um Viertel nach vier.',
    'l.measures': 'Geld und Maße',
    'w.euro': 'der Euro',
    'w.cent': 'der Cent',
    'w.kilo': 'das Kilo',
    'w.liter': 'der Liter',
    'w.meter': 'der Meter',
    'w.tellen': 'zählen',
    's.measures.1': 'Es kostet sechs Euro fünfzig.',
    's.measures.2': 'Dieser Karton wiegt zehn Kilo.',
    's.measures.3': 'Ich habe vierzig Kartons gezählt.',
    'c.measures.q': 'Wie lang ist das Brett?',
    'c.measures.a': 'Genau zwei Meter.',
    'c.shelves': 'Alt nach vorne',
    'c.shelves.b': 'Wenn du Regale auffüllst, schau auf das Datum der Produkte. Stell die Produkte mit dem frühesten Datum nach vorne und die neuen nach hinten. Kunden nehmen von vorne, so gehen die alten Produkte zuerst weg. Ist ein Produkt abgelaufen oder beschädigt? Nimm es aus dem Regal und frag, was du damit machen sollst. Halte die Gänge frei von Kartons und Wagen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.shelves.p': 'Was mache ich mit abgelaufenen Produkten?',
    'c.shelves.s': 'Du stellst neue Milch ins Regal. Vorne steht Milch mit einem früheren Datum. Was machst du?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': 'Neue Milch nach hinten, alte Milch nach vorne.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o2': 'Neue Milch nach vorne, sie ist frischer.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o3': 'Wirf die alte Milch weg.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'Kunden nehmen von vorne. Wenn die alten Produkte zuerst weggehen, wird weniger Essen weggeworfen.',
    'c.checkout': 'Ausweis für Alkohol und Tabak',
    'c.checkout.b': 'Du darfst an niemanden unter 18 Alkohol oder Tabak verkaufen: Das ist Gesetz. Nicht sicher, wie alt ein Kunde ist? Frag nach dem Ausweis. Viele Geschäfte fragen jeden nach dem Ausweis, der jünger als 25 aussieht. Kein Ausweis, oder unter 18? Dann verkaufst du es nicht, und du bleibst höflich. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.checkout.p': 'Ohne Ausweis darf ich das nicht verkaufen.',
    'c.checkout.s': 'Ein junger Mann will Bier kaufen. Er sieht aus wie 17. Er sagt, er ist 19, aber er hat keinen Ausweis dabei. Was machst du?',
    'c.checkout.o1': 'Sag, ohne Ausweis geht es nicht.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': 'Verkauf es, er sagt ja, er ist 19.',
    'c.checkout.o3': 'Verkauf es, aber nur eine Dose.',
    'c.checkout.w': 'Ohne Ausweis kannst du sein Alter nicht wissen. Alkohol an jemanden unter 18 zu verkaufen ist gegen das Gesetz, und das Geschäft kann eine Strafe bekommen.',
    'c.counting': 'Vijfentwintig: erst die 5, dann die 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'Auf Niederländisch hat jede Zahl von 0 bis 12 ein eigenes Wort: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. Die Zahlen von 13 bis 19 enden auf -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Die Zehner enden auf -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. Von 21 bis 99 sagt man zuerst die letzte Ziffer, wie im Deutschen: 25 ist vijfentwintig, „fünfundzwanzig“. Also ist 47 zevenenveertig, und 74 ist vierenzeventig. Dertien und dertig klingen fast gleich: Hör auf das Ende. Nicht sicher? Sag die Ziffern einzeln zurück.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': 'Vier, sieben? Also siebenundvierzig?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'Dein Vorgesetzter sagt: „Ga naar gang zevenenveertig.“ Welcher Gang ist es?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': 'Gang 47.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'Gang 74.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'Gang 40.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '„Zevenenveertig“ heißt „sieben und vierzig“: erst die 7, dann die 40. Also ist es Gang 47. Viele Neue hören 74 und gehen in den falschen Gang.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': 'Half acht ist 7:30 Uhr',
    'c.hours.b': 'Im Niederländischen zählt „half“ zur nächsten Stunde: half acht ist 7:30 Uhr, nicht 8:30 Uhr. Das ist wie „halb acht“ im Deutschen. Kwart over acht ist 8:15 Uhr, und kwart voor acht ist 7:45 Uhr. Prüfe deine Stunden selbst: die Endzeit minus die Anfangszeit, minus die Pause. Eine Pause ist oft nicht bezahlt. Schreib jeden Tag deine Stunden auf.',
    'c.hours.p': 'Half acht? Also eine halbe Stunde vor acht?',
    'c.hours.s': 'Dein Vorgesetzter sagt: „Morgen begin je om half negen.“ Um wie viel Uhr fängst du morgen an?',
    'c.hours.o1': 'Um 8:30 Uhr.',
    'c.hours.o2': 'Um 9:30 Uhr.',
    'c.hours.o3': 'Um 8:00 Uhr.',
    'c.hours.w': '„Half negen“ bedeutet eine halbe Stunde vor neun: 8:30 Uhr. Viele Neuankömmlinge denken, es ist 9:30 Uhr, und kommen eine Stunde zu spät.',
    'c.measures': 'Schlau zählen, messen, nicht raten',
    'c.measures.b': 'Viele Kartons zu zählen? Zähl die Kartons in einer Lage und die Zahl der Lagen. Dann multipliziere: 8 Kartons in einer Lage und 5 Lagen sind 40 Kartons. Bei Reinigungsmitteln miss die Menge ab, die auf dem Etikett steht. Mehr ist nicht besser: Es kann deine Haut verletzen und kostet Geld. Nicht sicher bei einer Zahl? Zähl noch einmal oder frag. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.measures.p': 'Ich habe es zweimal gezählt.',
    'c.measures.s': 'Eine Palette hat 6 Lagen. Jede Lage hat 8 Kartons. Dein Vorgesetzter fragt, wie viele Kartons es sind. Was sagst du?',
    'c.measures.o1': '48 Kartons.',
    'c.measures.o2': '14 Kartons.',
    'c.measures.o3': 'Ungefähr 50, glaube ich.',
    'c.measures.w': '6 Lagen mit 8 Kartons sind 6 mal 8: 48. Eine Lage zählen und multiplizieren geht schnell, und eine echte Zahl ist besser als eine Schätzung.',
    'u.ai': 'KI und schlaue Apps',
    'l.aihelp': 'KI als Helfer',
    'w.ai': 'die KI (künstliche Intelligenz)',
    'w.chatbot': 'der Chatbot (eine App, mit der du chatten kannst)',
    'w.antwoord': 'die Antwort',
    'w.meekijken': 'mit draufschauen, zusammen ansehen',
    'w.kloppen': 'stimmen, richtig sein',
    'w.zeker': 'sicher',
    's.aihelp.1': 'Kannst du diesen Brief erklären?',
    's.aihelp.2': 'Stimmt diese Antwort?',
    's.aihelp.3': 'Können Sie kurz mit draufschauen?',
    'c.aihelp.q': 'Hast du das selbst geschrieben?',
    'c.aihelp.a': 'Ja, mit Hilfe von KI.',
    'l.aiprivate': 'Was du nicht teilst',
    'w.persoonlijk': 'persönlich',
    'w.gegevens': 'die Daten, die Angaben (Name, Adresse, Nummer)',
    'w.wachtwoord': 'das Passwort',
    'w.typen': 'tippen, eingeben',
    'w.opslaan': 'speichern',
    'w.inloggen': 'sich einloggen',
    's.aiprivate.1': 'Ich teile keine Namen von Kunden.',
    's.aiprivate.2': 'Darf ich KI für meine Arbeit benutzen?',
    's.aiprivate.3': 'Mein Passwort ist geheim.',
    'c.aiprivate.q': 'Gib das mal kurz in den Chatbot ein.',
    'c.aiprivate.a': 'Lieber nicht, da stehen Namen von Kunden drin.',
    'l.aifake': 'Fake oder echt?',
    'w.echt': 'echt',
    'w.stem': 'die Stimme',
    'w.filmpje': 'das (kurze) Video',
    'w.ophangen': 'auflegen (Telefon)',
    'w.nummer': 'die (Telefon-)Nummer',
    'w.haast': 'die Eile',
    's.aifake.1': 'Ist das echt oder gefälscht?',
    's.aifake.2': 'Ich lege auf und rufe selbst zurück.',
    's.aifake.3': 'Ich schicke kein Geld.',
    'c.aifake.q': 'Hallo, das ist meine neue Nummer. Kannst du schnell Geld schicken?',
    'c.aifake.a': 'Ich rufe dich zuerst unter deiner alten Nummer an.',
    'l.aiplan': 'Wenn eine App entscheidet',
    'w.planning': 'die Planung, der Plan',
    'w.mens': 'der Mensch',
    'w.computer': 'der Computer',
    'w.tempo': 'das (Arbeits-)Tempo',
    'w.automatisch': 'automatisch, von selbst',
    'w.besluit': 'die Entscheidung',
    's.aiplan.1': 'Wer hat diese Entscheidung getroffen?',
    's.aiplan.2': 'Ich möchte mit einem Menschen sprechen.',
    's.aiplan.3': 'Warum habe ich weniger Stunden in meinem Dienstplan?',
    'c.aiplan.q': 'Die App hat deinen Dienstplan gemacht.',
    'c.aiplan.a': 'Kann ich mit einem Menschen darüber sprechen?',
    'c.aihelp': 'KI hilft, ein Mensch prüft',
    'c.aihelp.b': 'KI-Apps und Chatbots wie ChatGPT können übersetzen, einen Brief erklären oder dir helfen, eine Nachricht zu schreiben. Das ist nützlich. Aber KI macht manchmal Fehler und klingt trotzdem sehr sicher. Geht es um deinen Vertrag, deinen Lohn, Medikamente oder Sicherheit? Dann prüfe die Antwort immer mit einem Menschen. Zum Beispiel mit deinem Vorgesetzten, der Personalabteilung (HR) oder dem Juridisch Loket.',
    'c.aihelp.p': 'Stimmt das? Können Sie kurz mit draufschauen?',
    'c.aihelp.s': 'Du fragst einen Chatbot zu deinem Vertrag. Er sagt, du bekommst kein Urlaubsgeld. Was machst du?',
    'c.aihelp.o1': 'Bitte HR oder das Juridisch Loket, es zu prüfen.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aihelp.o2': 'Glaub es: Der Chatbot klingt sehr sicher.',
    'c.aihelp.o3': 'Sag nichts und vergiss es.',
    'c.aihelp.w': 'Ein Chatbot kann sich bei Regeln und Verträgen irren. In den Niederlanden bekommt fast jeder Arbeitnehmer Urlaubsgeld. Ein Mensch, der die Regeln kennt, kann es prüfen.',
    'c.aiprivate': 'Denk nach, bevor du tippst',
    'c.aiprivate.b': 'Was du in einen Chatbot eingibst, kann von der Firma, die ihn macht, gespeichert und benutzt werden. Gib also nie deine BSN, ein Passwort oder deine Bankdaten ein. Gib keine Namen oder Fotos von Kunden, Patienten oder Kollegen ein, und keine Papiere von der Arbeit. Viele Arbeitgeber haben Regeln für KI. Frag zuerst, ob du sie für deine Arbeit benutzen darfst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.',
    'c.aiprivate.p': 'Darf ich dafür KI benutzen?',
    'c.aiprivate.s': 'Du willst, dass ein Chatbot einen Bericht über einen Kunden schreibt. Im Bericht stehen der Name und die Adresse des Kunden. Was machst du?',
    'c.aiprivate.o1': 'Frag zuerst und lass den Namen und die Adresse weg.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': 'Gib alles in den Chatbot ein: Das geht schneller.',
    'c.aiprivate.o3': 'Schick den Bericht an einen Freund, damit er ihn prüft.',
    'c.aiprivate.w': 'Namen und Adressen sind persönliche Daten. Sie dürfen nicht einfach an eine andere Firma gehen. Dein Arbeitgeber weiß, welche Apps erlaubt sind.',
    'c.aifake': 'Gefälschte Stimmen und Videos',
    'c.aifake.b': 'Mit KI können Kriminelle eine Stimme kopieren und gefälschte Fotos und Videos machen. Ein Anruf oder eine Nachricht, die wie dein Chef, deine Bank oder jemand aus deiner Familie klingt, kann gefälscht sein. Sei vorsichtig, wenn es eilig ist, um Geld geht und eine neue Nummer dabei ist. Leg auf und ruf selbst unter der Nummer zurück, die du kennst. Eine echte Bank, ein echter Arbeitgeber oder die Polizei fragt nie nach deinen Codes.',
    'c.aifake.p': 'Ich lege auf und rufe selbst zurück.',
    'c.aifake.s': 'Dein Handy klingelt. Eine Stimme, die genau wie dein Chef klingt, sagt: „Bezahl diese Rechnung jetzt, es ist dringend.“ Was machst du?',
    'c.aifake.o1': 'Leg auf und ruf deinen Chef selbst an.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aifake.o2': 'Bezahl schnell: Es ist ja dein Chef.',
    'c.aifake.o3': 'Gib deinen Bankcode, damit dein Chef es bezahlen kann.',
    'c.aifake.w': 'Eine Stimme kann man mit KI kopieren. Eile und Geld zusammen sind ein Warnzeichen. Unter einer Nummer zurückrufen, die du kennst, ist eine schnelle und sichere Kontrolle.',
    'c.aiplan': 'Wer hat das entschieden?',
    'c.aiplan.b': 'Immer mehr Firmen lassen eine App oder einen Computer Dinge entscheiden. Zum Beispiel macht er den Dienstplan oder misst dein Tempo mit dem Scanner. Du darfst fragen, welche Informationen über dich gesammelt werden. Gibt es eine große Entscheidung über dich, zum Beispiel weniger Stunden, eine Abmahnung oder eine Kündigung? Frag, wer das entschieden hat. Hat ein Computer so eine Entscheidung allein getroffen? Dann darfst du einen Menschen bitten, sie noch einmal zu prüfen und zu erklären. Schreib deine eigenen Stunden auf. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'c.aiplan.p': 'Kann sich ein Mensch das kurz ansehen?',
    'c.aiplan.s': 'Die Planungs-App gibt dir nächsten Monat viel weniger Stunden. Niemand sagt dir, warum. Was machst du?',
    'c.aiplan.o1': 'Bitte einen Menschen, es zu erklären.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.o2': 'Akzeptier es: Die App hat immer recht.',
    'c.aiplan.o3': 'Frag den Chatbot in der App, warum.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': 'Apps machen Fehler, und sie wissen nicht alles über dich. Du darfst um eine Erklärung bitten, und ein Mensch kann es sich noch einmal ansehen.',
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': "Im Gewächshaus", // nagelezen (2e lezing)
    'l.harvest': "Ernten und sortieren", // nagelezen (2e lezing)
    'w.kas': "das Gewächshaus", // nagelezen (2e lezing)
    'w.gewas': "die Kultur (die Pflanzen, die wachsen)", // nagelezen (2e lezing)
    'w.rij': "die Reihe (von Pflanzen)", // nagelezen (2e lezing)
    'w.oogsten': "ernten", // nagelezen (2e lezing)
    'w.sorteren': "sortieren", // nagelezen (2e lezing)
    'w.krat': "die Kiste", // nagelezen (2e lezing)
    's.harvest.1': "Ich arbeite im Gewächshaus.", // nagelezen (2e lezing)
    's.harvest.2': "In welcher Reihe fange ich an?", // nagelezen (2e lezing)
    's.harvest.3': "Die Kiste ist voll.", // nagelezen (2e lezing)
    'c.harvest.q': "Wie viele Reihen hast du geschafft?", // nagelezen (2e lezing)
    'c.harvest.a': "Vier. Noch zwei.", // nagelezen (2e lezing)
    'l.greensafe': "Sicher im Gewächshaus", // nagelezen (2e lezing)
    'w.spuitmiddelen': "die Spritzmittel (Chemikalien für Pflanzen)", // nagelezen (2e lezing)
    'w.bespoten': "gespritzt (mit Spritzmitteln)", // nagelezen (2e lezing)
    'w.plukkar': "der Erntewagen", // nagelezen (2e lezing)
    'w.bukken': "sich bücken", // nagelezen (2e lezing)
    'w.drinken': "trinken", // nagelezen (2e lezing)
    'w.hitte': "die Hitze (wenn es sehr heiß ist)", // nagelezen (2e lezing)
    's.greensafe.1': "Ist dieses Gewächshaus gespritzt worden?", // nagelezen (2e lezing)
    's.greensafe.2': "Ich trinke kurz etwas Wasser.", // nagelezen (2e lezing)
    's.greensafe.3': "Wo steht der Erntewagen?", // nagelezen (2e lezing)
    'c.greensafe.q': "Darf ich in Gewächshaus drei arbeiten?", // nagelezen (2e lezing)
    'c.greensafe.a': "Nein, noch nicht. Es wurde gerade gespritzt.", // nagelezen (2e lezing)
    'c.harvest': "Tempo und Stücklohn", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': "Im Gewächshaus arbeitest du oft in einem festen Tempo. Manche Arbeitgeber zahlen pro Kiste, pro Reihe oder pro Kilo: Stücklohn (stukloon). Auch mit Stücklohn musst du für jede Stunde, die du arbeitest, mindestens den Mindestlohn verdienen. Schau den Betrag auf rijksoverheid.nl nach. Schreib jeden Tag deine Stunden und deine Kisten auf und vergleiche sie mit deiner Lohnabrechnung. Schnell arbeiten ist gut, aber sicher arbeiten geht vor. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': "Wie viele Kisten habe ich heute geschafft?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.s': "Du wirst pro Kiste bezahlt. Diese Woche verdienst du pro Stunde weniger als den Mindestlohn. Was machst du?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': "Zeig deine eigene Liste mit Stunden und Kisten.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': "Sag nichts und arbeite schneller.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': "Akzeptiere es: Mit Stücklohn ist das normal.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': "Auch mit Stücklohn musst du für jede gearbeitete Stunde mindestens den Mindestlohn bekommen. Deine eigene Liste mit Stunden und Kisten hilft dir zu zeigen, was du gemacht hast. Wird es nicht korrigiert, hol dir Hilfe.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe': "Hitze und Spritzmittel", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': "Im Gewächshaus kann es sehr heiß werden, auch im Frühling. Trink oft Wasser, auch bevor du Durst hast, und mach deine Pausen an einem kühlen Ort. Ist dir schwindelig oder übel, oder hast du Kopfschmerzen? Hör auf und sag es jemandem. Pflanzen werden manchmal mit Chemikalien gespritzt (spuitmiddelen). An einem Gewächshaus, das gerade gespritzt wurde, hängt oft ein Schild an der Tür. Geh erst wieder hinein, wenn dein Vorgesetzter sagt, dass es sicher ist. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': "Darf ich schon in diesem Gewächshaus arbeiten?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': "Ein Gewächshaus wurde heute Morgen gespritzt. An der Tür hängt ein Schild. Ein Kollege sagt: „Komm schon, es ist nur kurz.“ Was machst du?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o1': "Bleib draußen und frag, wann es sicher ist.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o2': "Geh schnell hinein und halte die Luft an.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': "Geh hinein und wasch dir danach gut die Hände.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': "Spritzmittel können deiner Haut, deinen Augen und deiner Lunge schaden, auch wenn du nichts riechst. Nach dem Spritzen gibt es eine Wartezeit, bevor man wieder hineindarf. Dein Vorgesetzter weiß, wann sie vorbei ist.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Zahlen und Angaben",
    'l.details': "Deine Angaben",
    'w.voornaam': "der Vorname",
    'w.achternaam': "der Nachname, der Familienname",
    'w.spellen': "buchstabieren (die Buchstaben einzeln sagen)",
    'w.telefoonnummer': "die Telefonnummer",
    'w.geboortedatum': "das Geburtsdatum",
    'w.formulier': "das Formular (ein Papier oder eine Seite zum Ausfüllen)",
    's.details.1': "Können Sie das buchstabieren?",
    's.details.2': "Ich teile meine neue Telefonnummer mit.",
    's.details.3': "Dieses Formular ist für das Finanzamt (Belastingdienst).",
    'c.details.q': "Wie ist dein Nachname?",
    'c.details.a': "Haddad. Soll ich ihn buchstabieren?",
    'l.dates': "Tage und Daten",
    'w.maandag': "Montag",
    'w.week': "die Woche",
    'w.maand': "der Monat",
    'w.volgendeweek': "nächste Woche",
    'w.vorigeweek': "letzte Woche",
    'w.totenmet': "bis einschließlich (der letzte Tag zählt mit)",
    's.dates.1': "Ich kann Montag bis einschließlich Donnerstag.",
    's.dates.2': "Nächste Woche arbeite ich vier Tage.",
    's.dates.3': "Letzte Woche habe ich vierzig Stunden gearbeitet.",
    'c.dates.q': "Welches Datum ist heute?",
    'c.dates.a': "Heute ist Montag, der 3. Juni.",
    'l.permit': "Papiere, Integration und dein Job", // nagelezen AI 22 nov
    'w.papieren': "die Papiere (Dokumente)", // nagelezen AI 22 nov
    'w.werkvergunning': "die Arbeitserlaubnis", // nagelezen AI 22 nov
    'w.werknemer': "der Arbeitnehmer (du arbeitest für einen Arbeitgeber)", // nagelezen AI 22 nov
    'w.zzper': "der Selbstständige (du arbeitest für dich selbst)", // nagelezen AI 22 nov
    'w.inburgering': "die Integration (der Kurs und die Prüfungen für Neuankömmlinge)", // nagelezen AI 22 nov
    'w.taalles': "der Sprachkurs, die Sprachstunde", // nagelezen AI 22 nov
    's.permit.1': "Darf ich mit meinen Papieren hier arbeiten?", // nagelezen AI 22 nov
    's.permit.2': "Bin ich Arbeitnehmer oder selbstständig?", // nagelezen AI 22 nov
    's.permit.3': "Ich arbeite auf Abruf.", // nagelezen AI 22 nov
    'c.permit.q': "Kannst du am Dienstag arbeiten?", // nagelezen AI 22 nov
    'c.permit.a': "Nein, da habe ich Sprachkurs. Mittwoch geht.", // nagelezen AI 22 nov
    'l.kids': "Kinder und Arbeit", // nagelezen AI 22 nov
    'w.zwanger': "schwanger", // nagelezen AI 22 nov
    'w.kinderopvang': "die Kinderbetreuung, die Kita", // nagelezen AI 22 nov
    'w.ophalen': "abholen (jemanden holen)", // nagelezen AI 22 nov
    'w.ziekkind': "ein krankes Kind", // nagelezen AI 22 nov
    'w.ouderschapsverlof': "die Elternzeit", // nagelezen AI 22 nov
    'w.zorgverlof': "der Pflegeurlaub (freie Zeit, um ein krankes Familienmitglied zu pflegen)", // nagelezen AI 22 nov
    's.kids.1': "Mein Kind ist krank. Ich muss es abholen.", // nagelezen AI 22 nov
    's.kids.2': "Darf ich Sonderurlaub für einen Notfall nehmen?", // nagelezen AI 22 nov
    's.kids.3': "Zahlt mein Arbeitgeber meinen Lohn weiter?", // nagelezen AI 22 nov
    'c.kids.q': "Warum musst du jetzt weg?", // nagelezen AI 22 nov
    'c.kids.a': "Die Kita hat angerufen. Mein Sohn hat Fieber.", // nagelezen AI 22 nov
    'l.body': "Körper und Schmerzen", // nagelezen AI 22 nov
    'w.hoofd': "der Kopf", // nagelezen AI 22 nov
    'w.rug': "der Rücken", // nagelezen AI 22 nov
    'w.arm': "der Arm", // nagelezen AI 22 nov
    'w.hand': "die Hand", // nagelezen AI 22 nov
    'w.buik': "der Bauch", // nagelezen AI 22 nov
    'w.oog': "das Auge", // nagelezen AI 22 nov
    's.body.1': "Ich habe Schmerzen in der Hand.", // nagelezen AI 22 nov
    's.body.2': "Ich fühle mich nicht gut.", // nagelezen AI 22 nov
    's.body.3': "Ich bin auf den Arm gefallen.", // nagelezen AI 22 nov
    'c.body.q': "Wo tut es weh?", // nagelezen AI 22 nov
    'c.body.a': "Im Rücken. Ich habe einen schweren Karton gehoben.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'l.jobends': "Wenn dein Job endet", // nagelezen AI 22 nov
    'w.eindafrekening': "die Schlussabrechnung (dein letzter Lohn, wenn ein Job endet)", // nagelezen AI 22 nov
    'w.opzeggen': "kündigen (einen Vertrag), absagen", // nagelezen AI 22 nov
    'w.uitschrijven': "abmelden (deinen Namen von einer Liste nehmen)", // nagelezen AI 22 nov
    'w.sleutel': "der Schlüssel", // nagelezen AI 22 nov
    'w.verhuizen': "umziehen (in eine andere Wohnung)", // nagelezen AI 22 nov
    'w.busje': "der Kleinbus", // nagelezen AI 22 nov
    's.jobends.1': "Bekomme ich mein Urlaubsgeld und meine freien Tage ausgezahlt?", // nagelezen AI 22 nov
    's.jobends.2': "Ich hole mir Rat beim Juridisch Loket.", // nagelezen AI 22 nov
    's.jobends.3': "Ich schließe selbst eine neue Krankenversicherung ab.", // nagelezen AI 22 nov
    'c.jobends.q': "Deine Arbeit endet am Freitag. Dann musst du auch aus der Wohnung raus.", // nagelezen AI 22 nov
    'c.jobends.a': "Wie lang ist die Kündigungsfrist von meinem Mietvertrag?", // nagelezen AI 22 nov
    'c.details': "Deine Angaben: Gib sie richtig an", // nagelezen AI 22 nov
    'c.details.b': "Am Anfang eines Jobs gibst du deine Angaben. Das sind dein Name, deine Adresse, deine Telefonnummer, dein Geburtsdatum und deine BSN. Buchstabiere deinen Namen langsam, Buchstabe für Buchstabe. Prüfe danach deinen Namen auf deinem Vertrag und auf deiner Lohnabrechnung. Ein Fehler in deinem Namen oder deiner BSN kann Probleme mit deinem Lohn oder deinen Steuern machen. Neue Adresse oder Telefonnummer? Sag es deinem Arbeitgeber.", // nagelezen AI 22 nov
    'c.details.p': "Ich buchstabiere es kurz: A, L, I.", // nagelezen AI 22 nov
    'c.details.s': "Am Telefon schreibt die Zeitarbeitsfirma deinen Nachnamen auf. Du hörst, dass sie ihn falsch schreiben. Was machst du?", // nagelezen AI 22 nov
    'c.details.o1': "Buchstabiere langsam und bitte sie, den Namen vorzulesen.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': "Sag nichts: Ein kleiner Fehler im Namen ist egal.", // nagelezen AI 22 nov
    'c.details.o3': "Leg auf und hoffe, dass sie den Fehler später finden.", // nagelezen AI 22 nov
    'c.details.w': "Dein Name muss auf deinem Vertrag, deiner Lohnabrechnung und deinem Ausweis gleich sein. Dann stimmen dein Lohn und deine Steuern. Buchstabieren und vorlesen lassen ist eine schnelle Kontrolle.", // nagelezen AI 22 nov
    'c.dates': "Daten: Der Tag kommt zuerst", // nagelezen AI 22 nov
    'c.dates.b': "Im Niederländischen kommt der Tag vor dem Monat: 3-6 ist der 3. Juni, nicht der 6. März. „Tot en met“ heißt, dass der letzte Tag mitzählt. Tage und Monate schreibt man klein: maandag, juni. Bei einem Datum nicht sicher? Frag nach und sag es noch einmal.", // nagelezen AI 22 nov
    'c.dates.p': "Meinst du den 3. Juni?", // nagelezen AI 22 nov
    'c.dates.s': "In deinem Dienstplan steht: „Vrij: 3-6 tot en met 5-6“. Wann hast du frei?", // nagelezen AI 22 nov
    'c.dates.o1': "Am 3., 4. und 5. Juni.", // nagelezen AI 22 nov
    'c.dates.o2': "Nur am 3. und 4. Juni.", // nagelezen AI 22 nov
    'c.dates.o3': "Vom 6. März bis zum 6. Mai.", // nagelezen AI 22 nov
    'c.dates.w': "Zuerst kommt der Tag, dann der Monat: 3-6 ist der 3. Juni. „Tot en met“ heißt, dass der 5. Juni mitzählt. Du hast also drei Tage frei.", // nagelezen AI 22 nov
    'c.permit': "Arbeit und Integration", // nagelezen AI 22 nov
    'c.permit.b': "Musst du den Integrationskurs (inburgering) machen? Sag es deinem Arbeitgeber, und sag der gemeente (der Gemeinde), dass du arbeitest. Frag früh, ob deine Sprachkurse zu deinem Dienstplan passen können. Nicht sicher, ob du hier arbeiten darfst? Prüfe es, bevor du anfängst, zum Beispiel beim IND, beim UWV oder bei VluchtelingenWerk. Sollst du dich für diesen Job als Selbstständiger (zzp’er) anmelden? Hol dir zuerst Rat. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.p': "Ich habe dienstags Sprachkurs. Kann mein Dienstplan darauf Rücksicht nehmen?", // nagelezen AI 22 nov
    'c.permit.s': "Dein Sprachkurs ist dienstagmorgens. Laut deinem neuen Dienstplan arbeitest du dann. Was machst du?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': "Bitte deinen Vorgesetzten, den Dienstplan zu ändern.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': "Lass den Kurs ausfallen: Die Arbeit geht vor.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': "Bleib dienstags zu Hause und sag nichts.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.w': "Deine Integration ist auch eine Pflicht. Viele Arbeitgeber helfen, wenn sie es früh wissen. Die gemeente kann dir auch helfen, deinen Plan mit deiner Arbeit zu verbinden.", // nagelezen AI 22 nov
    'c.kids': "Dein Kind ist krank", // nagelezen AI 22 nov
    'c.kids.b': "Ist dein Kind plötzlich krank? Sag es sofort deinem Arbeitgeber. Für die ersten Stunden oder Tage kannst du Sonderurlaub für Notfälle nehmen (calamiteitenverlof), und dein Arbeitgeber zahlt dich weiter. Braucht dein Kind länger Pflege? Dann kannst du Pflegeurlaub (zorgverlof) beantragen. Schwanger? Deshalb darf dein Arbeitgeber dir nicht kündigen. Frag rechtzeitig nach dem Mutterschutz und der Elternzeit (ouderschapsverlof). Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nagelezen AI 22 nov
    'c.kids.p': "Mein Kind ist krank. Kann ich heute früher gehen?", // nagelezen AI 22 nov
    'c.kids.s': "Die Kita (kinderopvang) ruft dich bei der Arbeit an. Dein Kind hat Fieber und muss nach Hause. Was machst du?", // nagelezen AI 22 nov
    'c.kids.o1': "Sag es deinem Vorgesetzten und bitte um Sonderurlaub.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': "Geh ohne ein Wort und erklär es morgen.", // nagelezen AI 22 nov
    'c.kids.o3': "Bleib bei der Arbeit und lass dein Kind warten, bis deine Schicht vorbei ist.", // nagelezen AI 22 nov
    'c.kids.w': "Ein krankes Kind ist ein Notfall zu Hause. Wenn du es zuerst deinem Vorgesetzten sagst, kann er die Arbeit planen. Sonderurlaub für Notfälle ist für solche Momente da.", // nagelezen AI 22 nov
    'c.body': "Sag, was passiert ist und wo es wehtut", // nagelezen AI 22 nov
    'c.body.b': "Sag beim Arzt, was passiert ist und wo es wehtut. Zum Beispiel: „Ik ben gevallen. Mijn arm doet pijn.“ Sag auch, wie lange du die Schmerzen schon hast. Du musst nicht raten, was du hast: Das prüft der Arzt. Ist es bei der Arbeit passiert? Sag es deinem Vorgesetzten noch am selben Tag.", // nagelezen AI 22 nov
    'c.body.p': "Ich bin gefallen. Mein Arm tut weh.", // nagelezen AI 22 nov
    'c.body.s': "Du hast bei der Arbeit eine schwere Kiste gehoben. Jetzt tut dein Rücken sehr weh. Du bist beim Hausarzt (huisarts). Was sagst du?", // nagelezen AI 22 nov
    'c.body.o1': "Wo es wehtut und was passiert ist: Du hast eine schwere Kiste gehoben.", // nagelezen AI 22 nov
    'c.body.o2': "Nur, dass es dir schlecht geht, mehr nicht.", // nagelezen AI 22 nov
    'c.body.o3': "Den Namen einer Krankheit, die du im Internet gefunden hast.", // nagelezen AI 22 nov
    'c.body.w': "Wenn du sagst, wo es wehtut und was passiert ist, versteht dich der Arzt schneller. Der Arzt prüft, was es ist. Ist es bei der Arbeit passiert? Sag es auch deinem Vorgesetzten.", // nagelezen AI 22 nov
    'c.jobends': "Dein Job endet: Was hört noch auf?", // nagelezen AI 22 nov
    'c.jobends.b': "Wenn dein Job endet, prüfe deine Schlussabrechnung (eindafrekening). Freie Tage, die du nicht genommen hast, und dein Urlaubsgeld werden meistens damit ausgezahlt. Wohnung, Krankenversicherung oder ein Kleinbus über die Zeitarbeitsfirma können gleichzeitig enden. Schließ rechtzeitig selbst eine Krankenversicherung ab. Dein Mietvertrag hat eigene Regeln: Hol dir Rat, bevor du aus der Wohnung ausziehst. Ziehst du um oder verlässt du die Niederlande? Sag es der gemeente. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nagelezen AI 22 nov
    'c.jobends.p': "Wann bekomme ich meine Schlussabrechnung?", // nagelezen AI 22 nov
    'c.jobends.s': "Dein Job endet am Freitag. Deine Krankenversicherung läuft über die Zeitarbeitsfirma. Was machst du?", // nagelezen AI 22 nov
    'c.jobends.o1': "Frag, wann sie endet, und versichere dich rechtzeitig selbst.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': "Nichts: Die Versicherung läuft von selbst weiter.", // nagelezen AI 22 nov
    'c.jobends.o3': "Warte, bis du krank wirst, und kümmere dich dann darum.", // nagelezen AI 22 nov
    'c.jobends.w': "Eine Versicherung über die Zeitarbeitsfirma endet oft, wenn dein Job endet. Wenn du in den Niederlanden wohnst oder arbeitest, musst du meistens eine Krankenversicherung haben. Wenn du dich rechtzeitig kümmerst, bleibst du versichert.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "Deine Arbeit abschließen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workorder': "Der Arbeitsauftrag", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkbon': "der Arbeitsauftrag (ein Zettel oder eine App mit deiner Aufgabe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lezen': "lesen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aantal': "die Anzahl (wie viele)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.materiaal': "das Material (was du für die Arbeit brauchst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klaarleggen': "bereitlegen (hinlegen, was du brauchst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handtekening': "die Unterschrift", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.1': "Ich lese zuerst den Arbeitsauftrag.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.2': "Stimmt diese Anzahl?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.3': "Ich lege das Material bereit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workorder.q': "Weißt du, was du tun musst?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workorder.a': "Fast. Was bedeutet dieses Wort auf dem Arbeitsauftrag?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.handover': "Fertig, oder noch nicht?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opruimen': "aufräumen (Dinge wegräumen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nakijken': "nachsehen, prüfen (die Arbeit noch einmal anschauen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afmelden': "sich abmelden (sagen, dass die Arbeit fertig ist, und gehen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapot': "kaputt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opslot': "abgeschlossen (mit dem Schlüssel zu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderheid': "die Tür", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.1': "Ich räume meinen Platz auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.2': "Können Sie meine Arbeit kurz prüfen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.3': "Ich melde mich beim Vorgesetzten ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.q': "Ist alles fertig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.a': "Fast. Zimmer vier war abgeschlossen.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.tech': "In der Werkstatt", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workshop': "Werkzeug in der Werkstatt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschap': "das Werkzeug", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zagen': "sägen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slijpen': "schleifen (Metall mit einer Maschine glätten oder schneiden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vonk': "der Funke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gehoorbescherming': "der Gehörschutz (für deine Ohren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lawaai': "der Lärm (sehr laute Geräusche)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.workshop.1': "Wo liegt das Werkzeug?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.2': "Beim Schleifen trage ich Gehörschutz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.3': "Vorsicht vor den Funken!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.q': "Warum trägst du eine Brille?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.a': "Beim Sägen können mir kleine Stücke ins Auge kommen.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'l.power': "Zuerst den Strom aus", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stroom': "der Strom, die Elektrizität", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabel': "das Kabel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stekker': "der Stecker", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderspanning': "unter Spannung (es ist Strom drauf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningsloos': "spannungsfrei, sicher (es ist kein Strom drauf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektricien': "der Elektriker / die Elektrikerin", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.1': "Ist hier noch Strom drauf?", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.2': "Dieses Kabel ist kaputt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.3': "Ich warte, bis es spannungsfrei ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.q': "Kannst du die Lampe da austauschen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.a': "Ist der Strom aus? Wenn nicht, warte ich auf den Elektriker.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.garage': "In der Autowerkstatt", // nieuw, nalezen // nagelezen AI 28 nov
    'l.garage': "Reifen, Öl und die Hebebühne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.band': "der Reifen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olie': "das Öl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accu': "die Autobatterie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monteur': "der Mechaniker / die Mechanikerin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hefbrug': "die Hebebühne (sie hebt das Auto hoch)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lek': "platt, undicht (Luft oder Wasser kommt raus)", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.1': "Der Reifen ist platt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.2': "Wo steht das neue Öl?", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.3': "Das Auto steht auf der Hebebühne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.q': "Kannst du die Reifen an diesem Auto wechseln?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.a': "Ja. Wo liegen die Winterreifen?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.carjob': "Der Kunde entscheidet", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefrit': "die Probefahrt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijbewijs': "der Führerschein", // nieuw, nalezen // nagelezen AI 28 nov
    'w.akkoord': "einverstanden, okay (du sagst Ja dazu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kosten': "die Kosten (was du bezahlen musst)", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.repareren': "reparieren", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdeel': "das Teil (von einem Auto oder einer Maschine)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.1': "Ist der Kunde mit den Kosten einverstanden?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.2': "Dieses Teil ist kaputt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.3': "Darf ich eine Probefahrt machen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carjob.q': "Die Bremsen sind auch schlecht. Machst du die gleich mit?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carjob.a': "Zuerst frage ich meinen Chef. Der Kunde muss einverstanden sein.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.stage': "Ein Praktikum machen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.placement': "Dein Praktikum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stage': "das Praktikum (du lernst in einem Betrieb)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.praktijkopleider': "der Ausbilder im Betrieb (er begleitet dich im Betrieb)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagebegeleider': "der Praktikumsbetreuer / die Praktikumsbetreuerin der Schule (begleitet dich von der Schule aus)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.pok': "der Praktikumsvertrag (du, die Schule und der Betrieb unterschreiben ihn)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.school': "die Schule", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerbedrijf': "der Ausbildungsbetrieb (ein Betrieb, in dem Schüler lernen dürfen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.1': "Ich mache mein Praktikum in einem Lager.", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.2': "Wer ist mein Ausbilder im Betrieb?", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.3': "Ich habe den Praktikumsvertrag noch nicht unterschrieben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.q': "Wann fängst du mit deinem Praktikum an?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.a': "Am Montag. Zuerst unterschreiben wir den Praktikumsvertrag.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.review': "Feedback im Praktikum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beoordeling': "die Beurteilung (wie gut du es machst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerdoel': "das Lernziel (was du lernen willst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorbeeld': "das Beispiel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portfolio': "das Portfolio (eine Mappe mit deiner Arbeit und Nachweisen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cijfer': "die Note", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslag': "der Bericht (ein Text über deine Arbeit)", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.1': "Was kann ich besser machen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.2': "Können Sie mir ein Beispiel geben?", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.3': "Meine Beurteilung ist nächste Woche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.q': "Du musst schneller arbeiten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.a': "Okay. Können Sie mir zeigen, wie es schneller geht?", // nieuw, nalezen // nagelezen AI 28 nov
    'u.society': "Mitmachen in den Niederlanden", // nieuw, nalezen // nagelezen AI 28 nov
    'l.council': "Die Gemeinde und Wählen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stemmen': "wählen (seine Stimme abgeben)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkiezing': "die Wahl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gemeenteraad': "der Gemeinderat (er entscheidet über deinen Ort)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parlement': "das Parlament (es macht die Gesetze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempas': "die Wahlkarte (die Karte, die du zum Wählen brauchst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.burgemeester': "der Bürgermeister / die Bürgermeisterin", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.1': "Darf ich wählen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.2': "Meine Wahlkarte kam mit der Post.", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.3': "Der Gemeinderat entscheidet über mein Viertel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.q': "Gehst du am Mittwoch wählen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.a': "Ja. Ich habe meine Wahlkarte und meinen Ausweis.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.police': "Polizei und deine Rechte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agent': "der Polizist / die Polizistin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boete': "das Bußgeld, die Geldstrafe (Geld, das du als Strafe zahlen musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezwaar': "der Widerspruch (du sagst schriftlich, dass du nicht einverstanden bist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechter': "der Richter / die Richterin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advocaat': "der Anwalt / die Anwältin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wet': "das Gesetz", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.1': "Ich habe ein Bußgeld bekommen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.2': "Ich will Widerspruch einlegen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.3': "Ich will mit einem Anwalt sprechen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.police.q': "Darf ich Ihren Ausweis sehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.police.a': "Ja, hier ist er. Was ist los?", // nieuw, nalezen // nagelezen AI 28 nov
    'u.online': "Online bei der Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    'l.login': "Einloggen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitloggen': "sich ausloggen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.account': "das Konto, der Account", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherm': "der Bildschirm", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergrendelen': "sperren (einen Bildschirm oder ein Handy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebruikersnaam': "der Benutzername", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlogcode': "der Anmeldecode (ein Code per SMS oder in einer App)", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.1': "Ich habe mein Passwort vergessen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.2': "Ich logge mich immer aus.", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.3': "Meine DigiD gebe ich niemandem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.q': "Kannst du dich einloggen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.a': "Nein, mein Passwort funktioniert nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.phish': "Gefälschte E-Mails", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzender': "der Absender", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klikken': "klicken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijlage': "der Anhang", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdacht': "verdächtig", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ictafdeling': "die IT-Abteilung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijzigen': "ändern", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.1': "Diese E-Mail ist verdächtig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.2': "Ich öffne den Anhang nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.3': "Ich ändere mein Passwort sofort.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phish.q': "Hast du auf den Link geklickt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phish.a': "Ja. Ich rufe die IT-Abteilung an.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mychoice': "Was ich gut kann", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedin': "gut in (etwas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiezen': "wählen, aussuchen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beroep': "der Beruf, die Art von Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijbaan': "der Nebenjob (eine kleine Arbeit neben der Schule)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nauwkeurig': "sorgfältig und genau", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meeloopdag': "der Schnuppertag (ein Tag, an dem du jemanden bei der Arbeit begleitest)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.1': "Ich kann gut mit den Händen arbeiten.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.2': "Ich arbeite gern mit Menschen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.3': "Darf ich einen Tag mitlaufen, um die Arbeit zu sehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mychoice.q': "Was kannst du gut?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mychoice.a': "Ich kann mich gut um Menschen kümmern. Zu Hause kümmere ich mich um meine Mutter.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nextstep': "Nach Entree", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau2': "Niveau 2 (die nächste Stufe im mbo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startkwalificatie': "die Grundqualifikation (ein mbo-Abschluss auf Niveau 2 oder höher)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bbl': "die bbl (du arbeitest in einem Betrieb und gehst etwa einen Tag pro Woche zur Schule)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorstromen': "weitermachen (auf eine höhere Stufe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmelden': "sich anmelden (bei einer Schule oder für einen Kurs)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendag': "der Tag der offenen Tür (du kannst eine Schule besuchen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.1': "Nach Entree will ich auf Niveau 2.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.2': "Ich will gleichzeitig arbeiten und lernen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.3': "Wann ist der Tag der offenen Tür?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.q': "Was machst du nach Entree?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.a': "Ich will die bbl machen. Dann arbeite ich und lerne.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.email': "An die Arbeit schreiben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mail': "die E-Mail", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderwerp': "der Betreff (einer E-Mail)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beste': "liebe/r, sehr geehrte/r (am Anfang eines Briefs oder einer E-Mail)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beleefd': "höflich", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nalezen': "noch einmal lesen (prüfen, bevor du es schickst)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.versturen': "verschicken, senden", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.1': "Was schreibe ich in den Betreff?", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.2': "Ich lese meine E-Mail noch einmal durch.", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.3': "Ich schicke die E-Mail morgen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.email.q': "Hast du die E-Mail wegen deines freien Tages geschickt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.email.a': "Noch nicht. Ich lese sie erst noch einmal durch.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.budget': "Dein Geld jeden Monat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastelasten': "die Fixkosten (Miete, Versicherung, Handy: jeden Monat)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sparen': "sparen (Geld)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.abonnement': "das Abo (du zahlst jeden Monat dafür)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterafbetalen': "später bezahlen (jetzt kaufen, später zahlen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedenktijd': "die Widerrufsfrist (Zeit, um es dir anders zu überlegen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garantie': "die Garantie (es muss funktionieren, sonst wird es repariert)", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.1': "Zuerst bezahle ich die Fixkosten.", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.2': "Ich spare jeden Monat ein bisschen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.3': "Ich kündige dieses Abo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.q': "Kauf das Handy jetzt und zahl später!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.a': "Nein, danke. Später zahlen heißt auch Schulden machen.", // nieuw, nalezen // nagelezen AI 31 okt
    'l.healthy': "Fit für die Arbeit", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "schlafen", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "das Frühstück", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "sich bewegen, aktiv sein", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "müde", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "die Drogen", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "niedergeschlagen (lange traurig)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': "Ich bin heute sehr müde.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.2': "Ich frühstücke immer zuerst.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "In der Pause gehe ich kurz spazieren.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': "Willst du eine Pille? Dann bleibst du wach.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': "Nein, danke. Ich arbeite nicht unter dem Einfluss von Drogen oder Alkohol.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.workorder': "Erst lesen, dann anfangen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Bevor du anfängst, lies den Arbeitsauftrag (werkbon) oder die Aufgabe in der App. Prüfe die Adresse, die Aufgabe und die Anzahl der Dinge. Ist etwas unklar? Frag, bevor du anfängst, nicht mittendrin. Dann leg dein Werkzeug und das Material bereit. Das spart Zeit, und du machst weniger Fehler. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "Auf dem Arbeitsauftrag stehen zehn Kartons. Stimmt das?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "Auf deinem Arbeitsauftrag steht: Zimmer 3 streichen. Dein Kollege sagt, es ist Zimmer 5. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Du fragst deinen Vorgesetzten, welches Zimmer richtig ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "Du streichst Zimmer 3, weil es auf dem Arbeitsauftrag steht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "Du streichst beide Zimmer, dann bist du sicher.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "Wenn zwei Dinge nicht zusammenpassen, prüfst du das, bevor du anfängst. Eine kurze Frage kostet weniger Zeit, als die Arbeit noch einmal zu machen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Sag, was fertig ist und was nicht", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "Deine Arbeit ist nicht fertig, wenn du aufhörst. Räum zuerst deinen Platz und dein Werkzeug auf. Dann bitte jemanden, deine Arbeit zu prüfen. Sag deinem Vorgesetzten, was fertig ist und was nicht. Ist etwas schiefgegangen, oder ist etwas kaputt? Sag es jetzt, nicht morgen. Dich abzumelden gehört zu deiner Arbeit. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.p': "Zimmer vier ist noch nicht fertig. Die Tür war abgeschlossen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': "Du hast fünf Zimmer geputzt. Zimmer 4 war abgeschlossen. Deine Schicht ist zu Ende. Was machst du?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "Du sagst deinem Vorgesetzten: Zimmer 4 ist nicht fertig.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "Du gehst nach Hause: Zimmer 4 war zu, nicht deine Schuld.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o3': "Du schreibst „alles fertig“ auf die Liste.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "Dein Vorgesetzter plant die Arbeit. Wenn er weiß, dass Zimmer 4 nicht fertig ist, kann er jemand anderen schicken. Dann findet kein Kunde ein schmutziges Zimmer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Augen, Ohren und Feuer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Schleifen, Sägen und Bohren machen Funken, kleine Stücke und viel Lärm. Trag eine Schutzbrille und Gehörschutz, auch bei einer kurzen Arbeit. Wenn es sehr laut ist, muss dein Arbeitgeber dir Gehörschutz geben. Funken können einen Brand auslösen. Beim Schweißen oder Schleifen in der Nähe von Dingen, die brennen können, gibt es extra Regeln (heet werk): Frag, bevor du anfängst. Räum nach der Arbeit die Metallstücke weg. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "Ich will schleifen. Wo ist der Gehörschutz?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Du musst ein kleines Stück Metall schleifen. Es dauert eine Minute. Deine Schutzbrille liegt im anderen Raum. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Du holst zuerst deine Brille, auch für eine Minute.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Du schleifst mit halb geschlossenen Augen, es geht ja schnell.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Du hältst deine andere Hand vor die Augen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "Ein Funke oder ein Stück Metall im Auge kann dein Auge für immer schädigen. Das kann in einer Sekunde passieren. Eine Schutzbrille hilft, auch bei einer kurzen Arbeit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "Strom: nie einfach so", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': "Arbeite nie an etwas, das unter Spannung steht (onder spanning). Zuerst macht ein ausgebildeter Kollege es sicher: Er schaltet den Strom ab und prüft es. Nur Leute mit der richtigen Ausbildung dürfen das. Siehst du ein kaputtes Kabel oder einen kaputten Stecker? Benutz es nicht, und sag es sofort deinem Vorgesetzten. Nicht sicher, ob der Strom aus ist? Dann ist er an. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Ich sehe ein kaputtes Kabel. Wer kann sich das ansehen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Du sollst eine Lampe aufhängen. Ein Kollege sagt: „Der Strom ist aus, glaube ich.“ Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Du bittest einen ausgebildeten Kollegen zu prüfen, ob der Strom aus ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Du fängst an, trägst aber dicke Handschuhe, wenn du die Drähte anfasst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Du schaltest das Licht an und aus, um zu prüfen, ob der Strom aus ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "„Ich glaube“ reicht bei Strom nicht. Ein Stromschlag kann dich töten. Ein ausgebildeter Kollege prüft, dass kein Strom drauf ist, und dann kannst du anfangen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "Sicher unter dem Auto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Geh nie unter ein Auto, das nur auf einem Wagenheber steht. Das Auto muss fest auf der Hebebühne oder auf Unterstellböcken stehen. Ausgelaufenes Öl macht den Boden rutschig: Wisch es sofort auf. Altöl, Batterien und Putzmittel sind gefährlicher Abfall. Sie kommen an einen besonderen Ort, nie in den normalen Müll oder in den Abfluss. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "Da ist Öl auf dem Boden. Ich wische es auf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Du musst unter ein Auto schauen, das nur auf einem Wagenheber steht. Ein Kollege sagt: „Passt schon, mach schnell.“ Was machst du?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "Du wartest auf die Hebebühne oder auf Böcke.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "Du gehst schnell drunter, die Beine draußen.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "Du bittest den Kollegen, das Auto zu halten.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "Ein Wagenheber kann wegrutschen. Ein Auto ist sehr schwer, und darunter kommst du nicht schnell weg. Böcke oder eine Hebebühne halten das Auto an seinem Platz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "Mehr Arbeit? Frag zuerst den Kunden", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': "Findest du mehr Probleme, als auf dem Arbeitsauftrag stehen? Repariere sie nicht einfach. Der Kunde muss der Extraarbeit und den Kosten zuerst zustimmen. Dein Vorgesetzter oder die Annahme ruft den Kunden an. Eine Probefahrt gibt es nur mit Erlaubnis und nur mit einem gültigen Führerschein. Schreib auf, was du gemacht hast und welche Teile du benutzt hast. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Ich sehe noch ein Problem. Wer ruft den Kunden an?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Du machst bei einem Auto einen Ölwechsel. Auch die Bremsen sind schlecht. Es muss in einer Stunde fertig sein. Was machst du?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Du sagst es deinem Vorgesetzten, damit er den Kunden anruft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o2': "Du reparierst auch die Bremsen, zur Sicherheit.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "Du sagst nichts, sie stehen nicht auf dem Auftrag.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "Der Kunde zahlt, also entscheidet der Kunde. Ohne sein Okay darf die Werkstatt nicht einfach mehr Arbeit machen. Schlechte Bremsen sind gefährlich, darum ist es wichtig, es zu sagen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Erst unterschreiben, dann anfangen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': "In Entree lernst du viel in einem Betrieb: Das ist dein Praktikum (stage oder bpv). Bevor du anfängst, unterschreiben du, die Schule und der Betrieb einen Vertrag: den POK. Im Betrieb hilft dir dein Ausbilder (praktijkopleider). In der Schule hilft dir deine Praktikumsbetreuung (stagebegeleider). Krank? Ruf vor deinem Arbeitsbeginn im Betrieb an, und sag auch der Schule Bescheid. Die Regeln sind an jeder Schule anders: Frag deine Praktikumsbetreuung.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Ich fange erst an, wenn der Praktikumsvertrag unterschrieben ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': "Der Betrieb will, dass du morgen anfängst. Der POK ist noch nicht unterschrieben. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Du bittest deine Praktikumsbetreuung, zuerst den POK zu klären.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Du fängst morgen an und unterschreibst den POK, wenn du Zeit hast.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Du fängst an, sagst der Schule aber vorerst nichts.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "Im POK steht, was du lernst und wer dir hilft. Ohne unterschriebenen POK zählt dein Praktikum vielleicht nicht für dein Diplom. Darum unterschreibst du ihn, bevor du anfängst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Frag nach Feedback und nach einem Beispiel", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': "Im Praktikum sagen dir Leute, was gut läuft und was besser geht: Feedback. Das ist normal, und es hilft dir beim Lernen. Du verstehst es nicht? Frag nach einem Beispiel. Frag auch selbst nach Feedback, zum Beispiel einmal pro Woche. Läuft im Praktikum wirklich etwas schief? Sprich zuerst mit deinem Ausbilder im Betrieb. Hilft das nicht? Dann geh zu deiner Praktikumsbetreuung in der Schule.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "Was lief gut, und was geht besser?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "Dein Ausbilder sagt: „Du musst sorgfältiger arbeiten.“ Du weißt nicht, was er meint. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Du fragst nach einem Beispiel, was du anders machen sollst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': "Du sagst Ja und hoffst, dass du es selbst herausfindest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o3': "Du arbeitest ab jetzt viel langsamer, damit nichts schiefgeht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Mit einem Beispiel weißt du, was du ändern sollst. Fragen zeigt, dass du lernen willst. Das finden Ausbilder gut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "Wer darf wählen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "In den Niederlanden bestimmst du durch Wählen, wer entscheidet. Der Gemeinderat (gemeenteraad) entscheidet über deinen Ort. Die Tweede Kamer macht die Gesetze für das ganze Land. Mit der niederländischen Staatsangehörigkeit darfst du bei allen Wahlen wählen, ab 18. Für den Gemeinderat dürfen mehr Menschen wählen. Menschen aus einem anderen EU-Land, die hier wohnen, dürfen wählen. Menschen von außerhalb der EU dürfen nach 5 Jahren legalem Aufenthalt wählen. Die Gemeinde (gemeente) schickt dir eine Wahlkarte (stempas). Bring sie mit deinem Ausweis mit. Nicht sicher, ob du wählen darfst? Frag die Gemeinde.", // nagelezen AI 22 nov
    'c.council.p': "Darf ich für den Gemeinderat wählen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Du kommst aus Marokko und wohnst seit sechs Jahren legal hier, ohne niederländische Staatsangehörigkeit. Was stimmt?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "Du darfst für den Gemeinderat wählen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "Du darfst auch für die Tweede Kamer wählen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Ohne niederländischen Pass darfst du nicht wählen.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "Nach 5 Jahren legalem Aufenthalt darfst du für den Gemeinderat wählen. Für die Tweede Kamer brauchst du die niederländische Staatsangehörigkeit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "Dein Ausweis und deine Rechte", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': "Ab 14 musst du deinen Ausweis zeigen, wenn die Polizei danach fragt. Trag ihn also immer bei dir. Hast du einen Brief bekommen, zum Beispiel von der Gemeinde oder vom UWV? Bist du mit der Entscheidung darin nicht einverstanden? Dann kannst du schriftlich Widerspruch einlegen (bezwaar maken). Mach das vor dem Datum im Brief. Die Polizei und das Gericht müssen alle gleich behandeln. Festgenommen? Du darfst einen Anwalt verlangen. Das Juridisch Loket berät dich kostenlos.", // nagelezen AI 22 nov
    'c.police.p': "Ich bin mit dieser Entscheidung nicht einverstanden. Ich lege Widerspruch ein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Du bekommst einen Brief von der Gemeinde. Du bist mit ihrer Entscheidung nicht einverstanden. Im Brief steht, dass du sechs Wochen Zeit hast. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Du schreibst einen Widerspruch, vor dem Datum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Du rufst dort einmal an und wartest, bis sie dich zurückrufen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Du wartest: Nach sechs Wochen ist es von selbst vorbei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "Widerspruch legst du schriftlich ein, vor dem Datum im Brief. Nach diesem Datum ist es oft zu spät. Das Juridisch Loket kann dir beim Schreiben helfen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login': "Dein Login gehört nur dir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "Dein Passwort und deine DigiD sind nur für dich. Gib sie niemandem, auch nicht deinem Arbeitgeber oder einem Kollegen. An einem gemeinsamen Computer logg dich immer aus, wenn du fertig bist. Gehst du kurz weg? Sperr deinen Bildschirm. Passwort vergessen? Frag die IT-Abteilung (ICT-afdeling) nach einem neuen. Die Regeln für Computer sind in jeder Firma anders: Frag die IT-Abteilung, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Ich gehe kurz weg. Ich sperre meinen Bildschirm.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "Dein Vorgesetzter fragt nach deiner DigiD und deinem Passwort, um deine Papiere schnell zu erledigen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': "Du sagst Nein und loggst dich selbst ein, während er hilft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "Du gibst sie ihm dieses eine Mal, weil er dein Chef ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Du schreibst sie auf einen Zettel, damit er sie später nutzt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': "Mit deiner DigiD kann jemand deine Steuern, Leistungen und Gesundheitsdaten sehen und ändern. Sie ist nur für dich. Du kannst dich selbst einloggen und dir dabei helfen lassen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "Eile und ein Knopf? Nicht klicken", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': "Eine gefälschte E-Mail (phishing) sieht oft echt aus. Sie will, dass du schnell handelst: „Ihr Konto wird heute geschlossen!“ Prüf den Absender. Klick auf keinen Link und öffne keinen Anhang, den du nicht erwartet hast. Geh selbst auf die echte Website oder in die echte App. Doch geklickt? Ändere sofort dein Passwort, und ruf die IT-Abteilung an. Das ist keine Schande: Je früher sie es wissen, desto besser. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "Ich habe auf einen verdächtigen Link geklickt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': "Du hast auf einen Link in einer E-Mail geklickt und dein Passwort eingegeben. Dann siehst du, dass die E-Mail gefälscht war. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o1': "Du änderst dein Passwort und rufst die IT-Abteilung an.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Du löschst die E-Mail, damit niemand sonst darauf klickt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Du wartest einen Tag, ob etwas schiefgeht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Mit deinem Passwort kann jemand anderes in die Systeme deiner Arbeit kommen. Wenn du es schnell änderst und der IT-Abteilung Bescheid sagst, können sie es rechtzeitig stoppen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Deine Stärken zählen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': "Was kannst du gut? Denk an Arbeit, Schule und zu Hause. Familie versorgen, ein Nebenjob oder ein Ehrenamt zählen auch. Was magst du, und was magst du nicht? Du weißt nicht, welche Arbeit zu dir passt? Frag, ob du einen Tag bei jemandem mitlaufen darfst (meeloopdag). Deine Betreuung in der Schule kann dir beim Aussuchen helfen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "Ich kann gut mit Menschen umgehen. Zu Hause helfe ich viel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': "In der Schule fragt man dich: „Was kannst du gut?“ Du hattest noch nie eine bezahlte Arbeit. Was sagst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "Was du zu Hause gut machst, zum Beispiel andere versorgen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "Dass du es noch nicht weißt, weil du nie einen Job hattest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "Dass du jede Arbeit kannst, wirklich alles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "Fähigkeiten von zu Hause zählen auch. Versorgen, planen und helfen sind Fähigkeiten, die Arbeitgeber brauchen. Sag, was du gemacht hast, mit einem Beispiel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "Nach Entree: Niveau 2 oder Arbeit", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Mit einem Entree-Diplom darfst du auf Niveau 2 im mbo weitermachen. Ein Abschluss auf Niveau 2 oder höher ist eine Grundqualifikation (startkwalificatie). Sie hilft dir, Arbeit zu finden und zu behalten. In der bbl arbeitest du in einem Betrieb und gehst etwa einen Tag pro Woche zur Schule. Dafür brauchst du eine Stelle oder einen Lern- und Arbeitsplatz (leerwerkbaan). Geh zu einem Tag der offenen Tür, und sprich mit deiner Betreuung in der Schule.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "Kann ich nach Entree auf Niveau 2?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Du hast dein Entree-Diplom. Eine Firma bietet dir eine Arbeit ohne Ausbildung an. Du willst aber auch weiter lernen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Du fragst die Firma, ob ein bbl-Platz möglich ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "Du nimmst die Arbeit und hörst für immer mit dem Lernen auf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Du bleibst zu Hause, bis eine Schule dich anruft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "In der bbl arbeitest und lernst du gleichzeitig. Du verdienst Geld, und du bekommst ein Diplom auf Niveau 2. Viele Firmen finden das gut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Eine kurze E-Mail: wer, was, wann", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "Eine E-Mail an die Arbeit ist kurz und höflich. Fang mit einer Anrede an, zum Beispiel „Beste Karin,“. Dann schreib, was du willst und wann. Hör mit einem Gruß und deinem vollen Namen auf. Schreib einen kurzen Betreff, zum Beispiel „Vrij op vrijdag“. Lies deine E-Mail noch einmal, bevor du sie schickst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Liebe Karin, darf ich am Freitag freihaben? Viele Grüße, Ali Haddad", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': "Du willst nächsten Freitag frei haben. Welche E-Mail an deinen Vorgesetzten ist am besten?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "„Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad“", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "„Vrijdag ben ik er niet.“ (ohne Anrede und ohne deinen Namen).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Eine lange E-Mail über deine Woche, mit der Frage am Ende.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "Eine gute E-Mail hat eine Anrede, eine klare Frage und deinen Namen. Dann kann dein Vorgesetzter schnell antworten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "Zuerst die Fixkosten", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': "Wenn du deinen Lohn bekommst, bezahl zuerst die Fixkosten: Miete, Versicherung und dein Handy. Versuch, jeden Monat einen kleinen Betrag zu sparen, auch nur 10 Euro. Jetzt kaufen, später zahlen heißt auch Schulden machen. Hast du etwas online gekauft? Dann kannst du es dir meistens innerhalb von 14 Tagen anders überlegen. Heb den Kassenbon auf: Du brauchst ihn für die Garantie.", // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.budget.p': "Ich zahle lieber jetzt. Dann habe ich keine Schulden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Heute bekommst du deinen Lohn. Du willst neue Schuhe, und deine Miete ist noch nicht bezahlt. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Du zahlst zuerst die Miete, dann schaust du, was übrig ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Du kaufst die Schuhe und zahlst die Miete später.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Du kaufst die Schuhe mit „jetzt kaufen, später zahlen“.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "Miete, Versicherung und dein Handy kommen jeden Monat wieder. Wenn du die zuerst zahlst, weißt du, wie viel Geld übrig ist. Dann machst du keine Schulden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Schlaf, Essen und keine Drogen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': "Du arbeitest besser und sicherer, wenn du genug schläfst, auch nach einer Spätschicht. Iss ein Frühstück, und trink über den Tag Wasser. Beweg dich in der Pause, zum Beispiel mit einem kurzen Spaziergang. Unter Einfluss von Alkohol oder Drogen zu arbeiten ist gefährlich, und die meisten Arbeitgeber verbieten es. Fühlst du dich schon lange niedergeschlagen, oder kannst du nicht aufhören, Alkohol zu trinken oder Drogen zu nehmen? Sprich mit deinem Hausarzt (huisarts). Er kann helfen, und er behält es für sich.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.p': "Ich fühle mich schon lange niedergeschlagen. Kann ich einen Termin machen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': "Heute Nacht hast du Nachtschicht. Ein Kollege bietet dir eine Pille an, damit du wach bleibst. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "Du sagst Nein und schläfst vor der Schicht ein paar Stunden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Du nimmst eine halbe Pille, das ist nicht gefährlich.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Du nimmst sie, sagst bei der Arbeit aber niemandem etwas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Pillen von einem Kollegen können Drogen sein. Sie können dich krank machen oder dazu bringen, dass du bei der Arbeit Fehler machst. Schlaf ist der sichere Weg, wach zu bleiben.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.sick': "Krankheit", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Arbeiten mit Lebensmitteln", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mes': "das Messer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijhandschoen': "der Schnittschutzhandschuh (ein Handschuh gegen Schnitte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vriescel': "der Tiefkühlraum (ein sehr kalter Raum)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sieraden': "der Schmuck (ein Ring, eine Uhr, Ohrringe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pleister': "das Pflaster (für einen kleinen Schnitt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vlees': "das Fleisch", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.1': "Ich lege meinen Schmuck ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.2': "Wo sind die Schnittschutzhandschuhe?", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.3': "Im Tiefkühlraum trage ich eine warme Jacke.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.q': "Warum putzen wir jetzt die Linie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.a': "Als Nächstes kommt ein Produkt ohne Nüsse.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food': "Saubere Hände, sichere Lebensmittel", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Bei der Arbeit mit Lebensmitteln gelten strenge Hygieneregeln: ein Haarnetz, saubere Arbeitskleidung, gewaschene Hände und kein Schmuck. Diese Regeln sind für alle gleich. Sie sagen nichts über dich: Sie halten die Lebensmittel sicher für die Menschen, die sie essen. Trag bei der Arbeit mit einem Messer immer deinen Schnittschutzhandschuh. Zieh in einem kalten Raum oder einem Tiefkühlraum die warme Kleidung an, die du bekommst, und wärm dich in der Pause auf. Bist du krank, oder hast du eine Wunde an der Hand? Melde es, bevor du anfängst. Dann bekommst du ein spezielles Pflaster oder für eine Weile andere Arbeit. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Ich habe einen kleinen Schnitt an der Hand. Kann ich ein Pflaster haben?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "Du hast dich zu Hause ein bisschen in den Finger geschnitten. Heute arbeitest du mit Fleisch. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Du sagst es deinem Vorgesetzten und fragst nach einem Pflaster.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Du sagst nichts: Es ist nur ein kleiner Schnitt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Du ziehst einen Handschuh darüber, damit es keiner sieht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Eine kleine Wunde kann Keime in die Lebensmittel bringen. Wenn du es meldest, bekommst du ein spezielles Pflaster oder für eine Weile andere Arbeit. Es zu melden ist normal: Niemand macht dir einen Vorwurf.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transport und Zustellung", // nieuw, nalezen // nagelezen AI 28 nov
    'l.parcel': "Pakete zustellen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pakket': "das Paket", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestelbus': "der Lieferwagen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezorgen': "zustellen (zum Kunden bringen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inladen': "einladen (Sachen in den Wagen packen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbellen': "klingeln (an der Haustür)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewijs': "der Beweis (etwas, das zeigt, was passiert ist)", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.1': "Ich scanne jedes Paket.", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.2': "Der Kunde ist nicht zu Hause.", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.3': "Würden Sie ein Paket für die Nachbarn annehmen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.q': "Ist dieses Paket für mich?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.a': "Ja. Würden Sie bitte hier unterschreiben?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.road': "Sicher und fair unterwegs", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijden': "fahren", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaar': "schwer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekwagen': "die Sackkarre (ein Wagen für schwere Kisten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.route': "die Route (der Weg, den du fährst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loondienst': "angestellt (du arbeitest für einen Chef und bekommst Lohn)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bepalen': "bestimmen (sagen, wie es gemacht werden muss)", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.1': "Dieses Paket ist zu schwer. Ich hole die Sackkarre.", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.2': "Es ist glatt. Ich fahre langsam.", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.3': "Wer bestimmt meine Route und meine Zeiten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.q': "Kannst du heute noch eine Tour fahren?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.a': "Nein, dann habe ich keine Zeit für meine Pause.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel': "Nicht zu Hause, oder ein kaputtes Paket", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "Ist der Kunde nicht zu Hause? Halte dich an die Regeln deiner Firma: Versuch es bei den Nachbarn, oder nimm das Paket wieder mit. Stell es nicht einfach vor die Tür, außer der Kunde hat darum gebeten. Ist ein Paket kaputt oder nass? Stell es nicht zu, als wäre nichts. Mach ein Foto als Beweis und melde es im Scanner oder in der App. Ehrlich über ein Problem zu sein, ist immer besser, als es zu verstecken. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Dieses Paket ist kaputt. Hier ist ein Foto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "Der Kunde ist nicht zu Hause, und die Nachbarn auch nicht. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "Du scannst „nicht zu Hause“ und nimmst das Paket wieder mit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "Du scannst es als zugestellt und lässt es vor der Tür.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Du versteckst es hinter der Mülltonne, damit es keiner sieht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "Ein Paket, das als zugestellt gescannt ist, muss wirklich beim Kunden sein. Wenn du scannst, was wirklich passiert ist, kann der Kunde das Paket später bekommen, und niemand denkt, dass du es verloren hast.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "Sicher unterwegs, und faire Arbeit", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Halte nie dein Handy in der Hand, während du fährst: Das ist verboten. Benutze eine Halterung für das Navi. Mach deine Pausen, auch an einem vollen Tag. Ein schweres Paket? Nimm die Sackkarre, oder heb es zu zweit. Eis oder Schnee? Fahr langsam: Zu spät kommen ist besser als ein Unfall. Manche Firmen sagen, du arbeitest selbstständig (zelfstandig). Aber wer bestimmt deine Arbeitszeiten, deine Route und deine Kleidung? Wenn die Firma das alles bestimmt, bist du vielleicht doch angestellt (in loondienst). Dann hast du oft mehr Rechte, zum Beispiel Lohn, wenn du krank bist. Mehr dazu in der Lektion „Papiere, Integration und dein Job“. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Ich mache jetzt meine Pause. Dann fahre ich weiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': "Die Firma sagt, du bist selbstständig. Aber sie bestimmt deine Arbeitszeiten, deine Route und deine Kleidung. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': "Du holst dir Rat: Vielleicht bist du angestellt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Nichts: Im Vertrag steht „selbstständig“, also ist es so.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Du arbeitest mehr Stunden, damit du gleich viel verdienst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "Es zählt, wie du wirklich arbeitest, nicht nur das Wort im Vertrag. Wenn die Firma bestimmt, wie, wann und wo du arbeitest, bist du oft angestellt. Dann hast du mehr Rechte.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "Sich bei der Arbeit wohlfühlen", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "der Arbeitsdruck (zu viel Arbeit in zu wenig Zeit)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "wach liegen (du kannst nicht schlafen)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "die Schichtarbeit (Früh-, Spät- und Nachtschicht im Wechsel)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "das Heimweh (du vermisst dein Zuhause)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "die Familie", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "allein", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Ich schlafe schlecht wegen der Schichtarbeit.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': "Es ist zu viel. Ich schaffe es nicht allein.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "Ich habe Heimweh. Meine Familie ist weit weg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "Geht es dir gut?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "Nicht so gut. Ich liege oft wach.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': "Zu viel? Du musst das nicht allein schaffen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Jeder ist manchmal müde, gestresst oder traurig. Zu viel Arbeit (werkdruk), schlechter Schlaf durch Schichtarbeit oder Sehnsucht nach deiner Familie können es schwer machen. Du musst das nicht allein tragen, und zu sagen „es ist zu viel“ ist keine Schwäche. Sprich mit jemandem, dem du vertraust. Zum Beispiel mit deinem Vorgesetzten, dem Betriebsarzt (bedrijfsarts) oder deinem Hausarzt (huisarts). Oder mit der Vertrauensperson (vertrouwenspersoon), wenn deine Firma eine hat. Du kannst auch selbst um ein Gespräch mit dem Betriebsarzt bitten. Ärzte erzählen deinem Chef nicht, was du gesagt hast. Denkst du an Suizid, oder machst du dir Sorgen um jemanden? Ruf 113 an (kostenlos, Tag und Nacht), oder chatte auf 113.nl.", // nagelezen AI 22 nov
    'c.feelwell.p': "Mir geht es nicht so gut. Kann ich kurz mit dir reden?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': "Seit Wochen schläfst du schlecht, und die Arbeit ist zu viel. Du bist sehr müde. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "Du sagst es deinem Vorgesetzten oder dem Betriebsarzt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "Du sagst nichts und arbeitest härter und schneller.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Du bleibst zu Hause und sagst niemandem, warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Es früh zu sagen ist keine Schwäche. Dann könnt ihr zusammen einen Ausweg suchen, zum Beispiel andere Schichten. Du musst das nicht allein schaffen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Nach einer Krankheit zurück zur Arbeit", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "langsam steigern (Schritt für Schritt)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "halbe Tage (du arbeitest nur einen Teil des Tages)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "leichte Arbeit (nicht schwer)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "schwere Arbeit", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "sich erholen, wieder gesund werden", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "willkommen zurück", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Ich fange mit halben Tagen an.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Leichte Arbeit kann ich schon. Schwere Arbeit noch nicht.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "Der Betriebsarzt sagt: langsam steigern.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': "Willkommen zurück! Geht es dir besser?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Ja, es geht besser. Ich mache langsam.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Schritt für Schritt zurück", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "Bist du wieder gesund? Sag deinem Arbeitgeber, dass du wieder arbeiten kannst (betermelden). Nach einer längeren Krankheit fängst du oft Schritt für Schritt an: zuerst weniger Stunden oder leichtere Arbeit. Der Betriebsarzt (bedrijfsarts) berät dich, was du machen kannst. Länger krank? Dann machen du und dein Arbeitgeber zusammen einen Plan für deine Rückkehr. So steht es im Gesetz (Wet verbetering poortwachter). Sag deutlich, was du kannst und was noch nicht. Du musst Kollegen nicht sagen, welche Krankheit du hattest. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Das kann ich schon. Das kann ich noch nicht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': "Du warst drei Wochen krank. An deinem ersten Tag zurück bittet dich dein Vorgesetzter, schwere Kisten zu heben. Der Betriebsarzt hat gesagt: vorerst nur leichte Arbeit. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Du sagst ruhig, dass du jetzt leichte Arbeit machen kannst und was du noch nicht kannst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Du hebst die Kisten trotzdem: Du willst keine Umstände machen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Du gehst ohne ein Wort nach Hause.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Dein Vorgesetzter will dich zurück, und zwar gesund. Wenn du deutlich sagst, was du kannst, kann er die Arbeit planen. Zu viel zu früh kann dich wieder krank machen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "Messen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolmaat': "das Maßband", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpas': "die Wasserwaage (sie zeigt, ob etwas gerade ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meten': "messen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechtlijn': "gerade (nicht schief)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plank': "das Brett", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroef': "die Schraube", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.1': "Wie lang ist dieses Brett?", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.2': "Die Wand ist nicht gerade.", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.3': "Ich messe es zweimal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.q': "Wie breit muss es sein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.a': "Neunzig Zentimeter. Ich schreibe es auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure': "Zweimal messen, einmal sägen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Auf einer Baustelle sind Maße oft in Millimetern. „Neunhundert“ kann also 90 Zentimeter heißen. Nicht sicher? Frag: „Sind das Millimeter oder Zentimeter?“ Wiederhol die Zahl, und schreib sie auf. Miss zweimal, bevor du sägst oder bohrst: Ein Brett, das zu kurz ist, bleibt zu kurz. Hast du einen Fehler gemacht? Sag es sofort. Dann kann das Team es noch in Ordnung bringen, und es kostet weniger.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "Ist das in Millimetern oder in Zentimetern?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "Dein Kollege ruft dir ein Maß zu. Du hast es nicht gut gehört. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Wiederhol die Zahl, und frag, ob sie stimmt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Säg das Brett so, wie du es wohl gehört hast.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Warte, bis er selbst kommt und nachsieht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Ein falsches Maß kostet Material und Zeit. Die Zahl zu wiederholen dauert zwei Sekunden, und auf einer Baustelle machen das alle.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Eine ordentliche Baustelle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bouwplaats': "die Baustelle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvoerder': "der Bauleiter (der Chef auf der Baustelle)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.keet': "der Bauwagen (für Pausen und Besprechungen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afval': "der Abfall, der Müll", // nieuw, nalezen // nagelezen AI 28 nov
    'w.container': "der Container (eine sehr große Tonne für Abfall)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struikelen': "stolpern (über etwas fallen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.1': "Der Abfall kommt in den Container.", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.2': "Der Bauleiter ist im Bauwagen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.3': "Vorsicht, hier kannst du stolpern.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.q': "Wo muss dieses Holz hin?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.a': "In den Container am Eingang.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday': "Eine ordentliche Baustelle ist eine sichere Baustelle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Auf einer Baustelle gehört Aufräumen zur Arbeit, für alle. Über lose Bretter, Kabel und Abfall stolpern und fallen Menschen. Räum also deinen Platz schon während des Tages auf, nicht erst am Ende. Abfall wird getrennt: Holz, Stein und Metall kommen oft in verschiedene Container. Nicht sicher, in welchen? Frag. Siehst du einen Nagel, der heraussteht, oder ein Loch ohne Abdeckung? Bring es in Ordnung, wenn du das sicher machen kannst, oder sag es dem Bauleiter (de uitvoerder). Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Ich räume das weg. Dann stolpert niemand.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Auf dem Weg liegen Bretter mit Nägeln. Es sind nicht deine. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Leg sie zur Seite, oder sag es dem Bauleiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Steig darüber: Es sind nicht deine Bretter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Warte: Jemand anders räumt sie weg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Alle benutzen dieselben Wege. Wer eine Gefahr sieht, tut etwas dagegen: Das ist auf einer Baustelle normal.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Deine Schicht übergeben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vroegedienst': "die Frühschicht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.latedienst': "die Spätschicht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtdienst': "die Nachtschicht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdracht': "die Übergabe (du sagst der nächsten Schicht, was passiert ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflossen': "ablösen (die nächste Person kommt, und du kannst gehen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teamleider': "der Teamleiter", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.1': "Ich habe diese Woche Spätschicht.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.2': "Wer löst mich ab?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.3': "Maschine zwei hatte eine Störung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.q': "Ist in deiner Schicht etwas passiert?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.a': "Ja. Die Linie stand eine halbe Stunde still.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts': "Sag es der nächsten Schicht", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Eine Fabrik läuft oft Tag und Nacht, in Schichten. Am Ende deiner Schicht übernimmt ein Kollege deinen Platz. Geh nicht einfach weg: Warte, bis dein Kollege da ist. Sag in ein paar Worten, was passiert ist: eine Störung, ein Produkt, das nicht in Ordnung war, etwas, das nicht fertig ist. Viele Firmen haben dafür auch eine Liste oder einen Bildschirm. Ein Problem, das du nicht weitergibst, kommt in der nächsten Schicht wieder, und dann weiß niemand, warum. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "Die Maschine hatte eine Störung. Jetzt läuft sie wieder.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Deine Schicht ist vorbei. Dein Kollege kommt fünf Minuten zu spät. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Warte, und sag es dem Teamleiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Geh nach Hause: Deine Schicht ist vorbei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Stopp die Maschine und geh.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Eine laufende Maschine darf nicht allein bleiben. Wenn du wartest und es meldest, geht die Arbeit sicher weiter, und der Teamleiter kann es lösen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Sag, was du siehst", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duizelig': "schwindlig", // nieuw, nalezen // nagelezen AI 28 nov
    'w.misselijk': "übel (du fühlst, dass du dich übergeben musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benauwd': "kurzatmig (du bekommst schlecht Luft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koorts': "das Fieber", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verward': "verwirrt (die Person weiß nicht, wo sie ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.anders': "anders (nicht wie normal)", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.1': "Der Dame ist schwindlig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.2': "Der Herr isst heute nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.3': "Kannst du mal kommen und schauen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.q': "Wie geht es Herrn Jansen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.a': "Er ist verwirrt. Das ist anders als gestern.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals': "Du siehst den Klienten jeden Tag", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Oft bist du die Person, die einen Klienten am meisten sieht. Du merkst also als Erste oder Erster, wenn etwas anders ist: weniger essen, mehr Schmerzen, verwirrt, kurzatmig. Du musst nicht wissen, was es ist. Sag, was du siehst, und sag, wann du es gesehen hast. Sag es der Pflegefachkraft noch am selben Tag, und schreib es auf, wenn das deine Aufgabe ist. Sieht es ernst aus? Warte nicht: Ruf sofort die Pflegefachkraft. Lieber einmal zu viel als einmal zu wenig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "Die Dame isst nicht und ihr ist schwindlig. Das ist anders als normal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Eine Klientin ist heute still und will nicht essen. Normalerweise redet sie viel. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Sag der Pflegefachkraft, was du siehst, noch heute.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Warte ein paar Tage: Vielleicht geht es vorbei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Gib ihr eine Tablette aus dem Schrank.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Eine kleine Veränderung kann das erste Zeichen einer Krankheit sein. Du entscheidest nicht, was es ist: Das macht die Pflegefachkraft. Aber sie kann nur etwas tun, wenn du es ihr sagst.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Jemandem beim Aufstehen helfen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tillift': "der Lifter (ein Gerät, das einen Menschen hebt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rollator': "der Rollator (eine Gehhilfe mit Rädern)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bed': "das Bett", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstaan': "aufstehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaanzitten': "sich hinsetzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorzichtig': "vorsichtig, sanft", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.1': "Ich helfe Ihnen beim Aufstehen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.2': "Möchten Sie sich kurz hinsetzen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.3': "Zuerst hole ich den Lifter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.q': "Kannst du die Dame aus dem Bett heben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.a': "Nicht allein. Ich hole den Lifter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer': "Erst sagen, dann helfen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Bevor du einen Klienten anfasst, sag, was du machst: „Ik help u nu met opstaan.“ Dann erschrickt der Klient nicht und kann mithelfen. Lass den Klienten machen, was er noch selbst kann: Das hält ihn stark. Heb einen Menschen nicht allein. Benutz die Hilfsmittel, die da sind, wie den Lifter, und arbeite so, wie man es dir gezeigt hat. Noch nicht gezeigt? Frag zuerst. Dein Rücken muss ein ganzes Arbeitsleben halten. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Ich helfe Ihnen jetzt beim Aufstehen. Sind Sie bereit?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Eine Klientin will aus dem Bett. Du hast noch nicht gelernt, den Lifter zu benutzen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Frag einen Kollegen, der den Lifter kennt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "Heb sie selbst: Sie ist nicht schwer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Probier den Lifter aus: So schwer kann es nicht sein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Wer einen Menschen falsch hebt, kann dem Klienten und dem eigenen Rücken wehtun. Einen Kollegen zu fragen dauert ein paar Minuten. Ein Sturz kann Monate dauern.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Abwaschen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwas': "der Abwasch, das schmutzige Geschirr", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwasser': "die Spülmaschine", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bord': "der Teller", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glas': "das Glas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestek': "das Besteck (Messer, Gabel und Löffel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdrogen': "abtrocknen (mit einem Tuch)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.1': "Die Spülmaschine ist fertig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.2': "Vorsicht, ein Glas ist kaputtgegangen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.3': "Es gibt kein sauberes Besteck mehr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.q': "Gibt es noch saubere Gläser?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.a': "Ja, ich bringe sie sofort.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes': "Glas kaputt: sofort sagen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "In einer Küche geht Glas kaputt. Das ist normal, und niemand ist deshalb böse. Aber sag es sofort, laut und deutlich: „Glas!“ Heb die Scherben nicht mit bloßen Händen auf: Nimm einen Handfeger. Ist Glas in die Nähe von Essen gefallen, oder ins Eis? Dann muss dieses Essen oder dieses Eis weg, und zwar alles. Ein kleines Stück Glas im Essen ist für einen Gast sehr gefährlich. Glas kommt in eine eigene Tonne, nicht in einen Sack, den jemand hochhebt. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Vorsicht, Glas! Ich räume es sofort weg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Ein Glas geht über dem Eis für die Getränke kaputt. Es ist sehr viel los. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Sag es, und wirf das ganze Eis weg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Nimm die Scherben heraus, die du siehst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Sag nichts: Es ist jetzt zu viel los.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Kleine Glasstücke im Eis kannst du nicht sehen. Neues Eis kostet wenig. Ein Gast mit Glas im Getränk kann sich schwer verletzen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Wenn viel los ist", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heet': "heiß", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chef': "der Küchenchef (der Chef in der Küche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terras': "die Terrasse (Tische draußen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tafel': "der Tisch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dienblad': "das Tablett", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachten': "warten", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.1': "Heiß! Ich gehe hinter dir vorbei.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.2': "Tisch sechs wartet auf das Essen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.3': "Ich bringe das auf die Terrasse.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.q': "Kannst du Tisch vier machen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.a': "Ja, Chef. Ich komme.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush': "Kurze Worte, wenn viel los ist", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Wenn viel los ist, reden die Leute in einer Küche in kurzen Worten: „Heet!“, „Achter!“, „Tafel zes!“ Das ist nicht unhöflich. Es ist schnell und sicher: Alle wissen, wo die heißen Pfannen und die Messer sind. Ruf selbst „Heet!“ oder „Achter!“, wenn du hinter jemandem vorbeigehst. Hast du einen Auftrag gehört? Wiederhol ihn: „Ja, chef.“ Dann weiß der Chef, dass du es gehört hast. War jemand im Stress kurz angebunden zu dir? Oft ist das vorbei, wenn es wieder ruhig ist. Bleibt es unangenehm? Dann sprich darüber in einem ruhigen Moment.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "Hinter dir! Ich habe eine heiße Pfanne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Es ist sehr viel los. Der Chef ruft: „Tafel zes, nu!“ Er sagt nicht bitte. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Sag „Ja, chef“, und mach es.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Bleib stehen, und sag, dass er unhöflich ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Mach es, aber sag nichts zurück.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "Im Stress ist kurz normal und nicht persönlich gemeint. Wenn du es wiederholst, zeigst du, dass du es gehört hast. So bleibt die Küche schnell und sicher.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Deine Runde", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kantoor': "das Büro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdieping': "das Stockwerk, die Etage (der erste oder zweite Stock in einem Gebäude)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gang': "der Flur, der Gang", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpapier': "das Toilettenpapier", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeep': "die Seife", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijvullen': "nachfüllen, auffüllen", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.1': "Ich fange im zweiten Stock an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.2': "Das Toilettenpapier ist alle.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.3': "Ich fülle die Seife nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.q': "Hast du Büro drei schon gemacht?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.a': "Nein, da arbeitet noch jemand.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds': "Putzen, wo Menschen arbeiten", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Oft putzt du, während andere Leute noch arbeiten. Grüß sie, und frag: „Mag ik hier even schoonmaken?“ Die meisten sagen Ja. Ist jemand in einer Besprechung oder am Telefon? Dann komm später wieder. Verschieb keine Papiere auf einem Schreibtisch, und lies sie nicht: Putz um sie herum. Du hast eine feste Zeit für deine Runde. Ist die Zeit zu kurz, um es gut zu machen? Lass nicht still und heimlich Räume aus. Sag deinem Vorgesetzten, was du nicht geschafft hast, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Guten Tag. Darf ich hier kurz putzen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Deine Runde dauert heute länger: Ein Raum war sehr schmutzig. Zwei Büros sind nicht fertig. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Sag deinem Vorgesetzten, welche zwei, und warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Geh nach Hause, und hoff, dass es niemand sieht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Mach sie ganz schnell, ohne die Böden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Ein Kunde, der ein schmutziges Büro findet, beschwert sich. Ein Vorgesetzter, der es weiß, kann es erklären oder dir mehr Zeit geben. Es zu sagen ist kein Versagen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Farben und Tücher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doek': "das Tuch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spons': "der Schwamm", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rood': "rot", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauw': "blau", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geel': "gelb", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groen': "grün", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.1': "Das rote Tuch ist für die Toilette.", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.2': "Nimm ein sauberes Tuch.", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.3': "Welche Farbe nehme ich hier?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.q': "Darf ich dieses Tuch für den Schreibtisch nehmen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.a': "Nein, das rote ist nur für die Toilette.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours': "Jede Farbe hat ihren Platz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Viele Reinigungsfirmen arbeiten mit Farben. Jede Farbe von Tuch, Schwamm und Eimer ist für einen Ort. Oft ist Rot für die Toilette, und Blau ist für Schreibtische und Tische. So kommt Schmutz von der Toilette nicht auf einen Schreibtisch oder in eine Küche. Die Farben können in jeder Firma anders sein, frag also an deinem ersten Tag. Ist ein Tuch schmutzig, oder ist es auf den Boden gefallen? Nimm ein sauberes. Benutzte Tücher kommen in den Wäschesack, nicht zurück auf den Wagen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Welche Farbe ist hier für die Toilette?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Deine blauen Tücher sind alle. Du musst noch drei Schreibtische putzen. Du hast nur rote Tücher. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Hol zuerst neue blaue Tücher.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Nimm ein rotes Tuch: Sauber ist sauber.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Nimm ein blaues Tuch noch einmal für alle drei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Ein Farbsystem funktioniert nur, wenn sich alle immer daran halten. Dann muss sich niemand fragen, wo ein Tuch schon war.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Einem Kunden helfen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbieding': "das Angebot (für kurze Zeit billiger)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.korting': "der Rabatt (du zahlst weniger)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitverkocht': "ausverkauft", // nieuw, nalezen // nagelezen AI 28 nov
    'w.magazijn': "das Lager", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tas': "die Tasche, die Tüte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestellen': "bestellen", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.1': "Tut mir leid, das ist ausverkauft.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.2': "Möchten Sie eine Tüte dazu?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.3': "Dieser Kaffee ist im Angebot.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.q': "Haben Sie noch Milch?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.a': "Ich schaue für Sie im Lager nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp': "„Ich weiß es nicht“ ist nicht das Ende", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Ein Kunde fragt etwas, und du weißt die Antwort nicht. Das ist in Ordnung: Niemand weiß alles. Aber sag nicht nur „nee“ oder „weet ik niet“, und geh nicht weg. Sag: „Ik vraag het even voor u“, und hol einen Kollegen. Ist ein Produkt ausverkauft? Sag, wann es wieder kommt, oder zeig etwas Ähnliches. Schau den Kunden an und grüß ihn, auch wenn du gerade Regale einräumst. Hast du die Frage nicht verstanden? Bitte den Kunden, es noch einmal zu sagen, langsam.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Das weiß ich nicht. Ich frage für Sie nach.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Eine Kundin fragt nach einem Produkt. Du kennst das Wort nicht. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Sag: „Ik vraag het even voor u.“", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Sag „nee“, und arbeite weiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Zeig irgendwohin, damit sie weggeht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Einen Kunden stört es nicht, dass du neu bist oder noch Niederländisch lernst. Einen Kunden stört es, wenn er keine Hilfe bekommt. Einen Kollegen zu holen ist guter Service.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Schwierige Momente", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsleider': "der Filialleiter (der Chef im Geschäft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiliger': "der Wachmann, der Sicherheitsdienst", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dief': "der Dieb", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stelen': "stehlen, klauen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schreeuwen': "schreien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldterug': "Geld zurück", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.1': "Ich hole den Filialleiter.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.2': "Bitte schreien Sie nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.3': "Ich glaube, da stiehlt jemand etwas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.q': "Ich will jetzt mein Geld zurück!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.a': "Ich verstehe. Ich hole meinen Kollegen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble': "Ein wütender Kunde oder ein Dieb: Du gehst vor", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Manchmal wird ein Kunde wütend, oder du siehst, dass jemand stiehlt. Deine Sicherheit geht vor, immer. Bei einem wütenden Kunden: Bleib ruhig, schrei nicht zurück, und hol den Filialleiter. Du musst es nicht allein lösen. Siehst du einen Dieb? Lauf ihm nicht nach, halt ihn nicht fest, und stell dich nicht in die Tür. Schau gut hin, was du siehst, und sag es sofort dem Filialleiter oder dem Wachmann. Sachen kann man ersetzen. Dich nicht. Hast du danach einen Schreck gehabt? Sprich darüber mit deinem Vorgesetzten. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Ich sehe, dass jemand etwas in seine Tasche steckt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Ein Mann steckt eine Flasche unter seine Jacke und geht zum Ausgang. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Sag es dem Filialleiter oder dem Wachmann.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Lauf ihm nach und halt ihn am Arm fest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Stell dich vor die Tür.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Ein Dieb, den man aufhält, kann gewalttätig werden. Der Filialleiter und der Wachmann wissen, was zu tun ist. Kein Produkt ist es wert, dass du verletzt wirst.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Die Pflanze pflegen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantblad': "das Blatt (von einer Pflanze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stengel': "der Stängel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bloem': "die Blume, die Blüte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knippen': "schneiden (mit einer Schere)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomaat': "die Tomate", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijp': "reif (fertig zum Pflücken)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.1': "Diese Tomate ist noch nicht reif.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.2': "Ich schneide das Blatt weg.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.3': "Der Stängel ist gebrochen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.q': "Welche Tomaten pflücke ich?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.a': "Nur die roten. Die grünen sind noch nicht reif.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare': "Saubere Hände, gesunde Pflanzen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Auch Pflanzen können krank werden. Ein Virus geht von Pflanze zu Pflanze, über Hände, Handschuhe, Messer und Kleidung. In einem Gewächshaus kann eine kranke Pflanze heißen, dass Tausende Pflanzen weg müssen. Darum gibt es an der Tür strenge Regeln: Wasch dir die Hände, trag die Arbeitskleidung der Firma, und geh durch das Fußbad. In vielen Gewächshäusern sind eigene Tomaten, Paprika oder Gurken in deinem Pausenessen verboten. Siehst du eine Pflanze, die komisch aussieht? Fass sie nicht an. Sag deinem Vorgesetzten, in welcher Reihe sie steht. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "In Reihe zwölf steht eine kranke Pflanze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Du siehst eine Pflanze mit komischen gelben Flecken. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "Lass sie stehen, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "Zieh sie heraus und nimm sie mit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Schneid die Blätter mit Flecken ab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Wenn du eine kranke Pflanze anfasst, geht das Virus mit dir zu den nächsten Pflanzen. Dein Vorgesetzter weiß, wie man sie sicher wegbringt.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Draußen arbeiten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.land': "das Feld (wo Pflanzen draußen wachsen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regen': "der Regen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zon': "die Sonne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzen': "die Stiefel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regenpak': "der Regenanzug (Jacke und Hose gegen Regen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onweer': "das Gewitter", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.1': "Es regnet. Ich ziehe meinen Regenanzug an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.2': "Meine Stiefel sind nass.", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.3': "Die Sonne ist heute stark.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.q': "Es kommt ein Gewitter. Was machen wir?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.a': "Wir hören auf und gehen rein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors': "Sonne, Regen und Gewitter", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Draußen arbeitest du bei jedem Wetter. In der Sonne: Bedeck deinen Kopf und deine Haut, nimm Sonnencreme, und trink oft Wasser. Im Regen: Trag deinen Regenanzug und Stiefel, und zieh in der Pause trockene Kleidung an. Nass und kalt macht dich krank und langsam. Gibt es ein Gewitter? Dann hör auf und geh rein, oder in ein Auto oder einen Transporter. Nicht unter einen Baum, und nicht auf ein offenes Feld. Brauchst du Regenkleidung oder Stiefel für die Arbeit? Frag deinen Arbeitgeber danach, bevor du sie selbst kaufst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Es gibt gleich ein Gewitter. Sollen wir reingehen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Du bist auf dem Feld. Du hörst Donner in der Nähe. Deine Reihe ist fast fertig. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Hör auf, und geh rein oder in den Transporter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Mach zuerst schnell die Reihe fertig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Warte unter dem großen Baum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "Der Blitz schlägt in den höchsten Punkt ein, und auf einem flachen Feld bist du das. Die Reihe kann eine Viertelstunde warten.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "Die Zeichnung und das Maß", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekening': "die Zeichnung (sie zeigt, wie das Teil sein muss)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maat': "das Maß, die Größe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.millimeter': "der Millimeter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuifmaat': "der Messschieber (er misst sehr genau)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passen': "passen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bout': "der Bolzen, die dicke Schraube", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.1': "Welches Maß steht auf der Zeichnung?", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.2': "Dieses Teil passt nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.3': "Es ist zwei Millimeter zu groß.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.q': "Passt der Bolzen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.a': "Nein. Ich messe es noch einmal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing': "Die Zeichnung bestimmt", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "In einer Werkstatt machst du, was auf der Zeichnung steht, nicht, was ungefähr richtig aussieht. Die Maße sind in Millimetern, und ein Millimeter kann schon zu viel sein. Passt ein Teil nicht? Benutz keine Gewalt, und mach das Loch nicht „nur ein bisschen“ größer. Miss noch einmal, und schau auf die Zeichnung. Kannst du die Zeichnung nicht lesen, oder fehlt ein Maß? Frag, bevor du anfängst. Eine Frage kostet eine Minute. Ein falsches Teil kostet Material und Stunden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Ich kann dieses Maß nicht lesen. Kannst du mal schauen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Ein Teil passt nicht: Es ist einen Millimeter zu groß. Mit einem Hammer würde es hineingehen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Miss noch einmal, und frag, was du tun sollst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "Schlag es mit dem Hammer hinein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Schleif ein bisschen ab, und sag nichts.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Ein Teil, das nur mit Gewalt hineingeht, kann später kaputtgehen, beim Kunden. Wenn du es meldest, kann man die Ursache finden.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Schweißen und heiße Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lassen': "schweißen (Metall mit großer Hitze verbinden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laskap': "der Schweißhelm", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rook': "der Rauch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzuiging': "die Absaugung (sie zieht den Rauch weg)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkoelen': "abkühlen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandwond': "die Brandwunde (eine Wunde durch Hitze)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.1': "Ich setze meinen Schweißhelm auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.2': "Schalt die Absaugung ein.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.3': "Vorsicht, das Metall ist noch heiß.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.q': "Darf ich das schon anfassen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.a': "Nein, warte. Es muss erst abkühlen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld': "Heißes Metall sieht kalt aus", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Schweißen macht sehr helles Licht. Schau nicht ohne Schweißhelm hinein, auch nicht aus der Entfernung: Deine Augen können verbrennen, und du spürst es erst Stunden später. Schweißt ein Kollege in deiner Nähe? Schau weg, oder stell dich hinter die Schutzwand. Metall, das gerade geschweißt oder geschliffen wurde, sieht normal aus, aber es ist sehr heiß. Fass es nicht mit bloßen Händen an. Schweißrauch ist schlecht für deine Lunge: Schalt die Absaugung ein. Eine Brandwunde? Kühl sie sofort mit Wasser, mindestens zehn Minuten lang, und melde es. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "Ist das schon abgekühlt?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Ein Kollege schweißt neben dir. Du hast keinen Schweißhelm auf. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Schau weg, und stell dich hinter die Schutzwand.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Schau kurz zu: Davon kannst du lernen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Mach die Augen halb zu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "Das Licht beim Schweißen verbrennt deine Augen, auch von der Seite und aus der Entfernung. Den Schmerz spürst du erst später, oft in der Nacht.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Teile des Autos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motor': "der Motor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motorkap': "die Motorhaube (die Klappe über dem Motor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rem': "die Bremse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lamp': "die Lampe, das Licht (am Auto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ruitenwisser': "der Scheibenwischer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoel': "der Sitz, der Stuhl", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.1': "Mach die Motorhaube auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.2': "Die Lampe vorne links ist kaputt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.3': "Die Bremsen machen Geräusche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.q': "Was hörst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.a': "Der Motor macht ein komisches Geräusch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts': "Das Auto gehört dem Kunden", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Ein Auto in der Werkstatt gehört nicht dir: Es gehört dem Kunden. Leg einen Schutzbezug auf den Sitz und auf das Lenkrad, bevor du einsteigst, und arbeite innen mit sauberen Händen. Lass den Sitz, die Spiegel und das Radio so, wie sie waren. Musstest du den Sitz verstellen? Stell ihn zurück. Fass keine persönlichen Sachen im Auto an. Hast du einen Kratzer oder einen Fleck gemacht? Sag es sofort deinem Vorgesetzten. Ein Kunde, der es zu Hause entdeckt, kommt nicht wieder.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "Ich habe einen Kratzer gemacht. Es tut mir leid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Du machst einen kleinen Kratzer in die Autotür eines Kunden. Niemand hat es gesehen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Sag es sofort deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Sag nichts: Er ist sehr klein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Reib ihn mit einem Tuch weg, und hoff das Beste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Jeder macht mal einen Fehler. Eine Werkstatt kann einen Kratzer reparieren oder es dem Kunden ehrlich sagen. Ein versteckter Kratzer kostet die Werkstatt ihren guten Namen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Benzin, Gas und Strom", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krik': "der Wagenheber (er hebt eine Seite des Autos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benzine': "das Benzin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektrischeauto': "das Elektroauto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oranje': "orange", // nieuw, nalezen // nagelezen AI 28 nov
    'w.morsen': "verschütten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lap': "der Lappen (ein Tuch für schmutzige Arbeit)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.1': "Ich rieche Benzin.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.2': "Hier ist Öl verschüttet. Ich hole einen Lappen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.3': "Die orangen Kabel fasse ich nicht an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.q': "Darf ich an diesem Auto arbeiten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.a': "Noch nicht. Es ist ein Elektroauto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe': "Orange Kabel und laufende Motoren", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Ein Elektroauto oder ein Hybridauto hat eine Batterie mit sehr starkem Strom. Die Kabel dafür sind orange. Fass sie nicht an und mach sie nicht los: Ein Mechaniker mit einer speziellen Ausbildung muss das Auto zuerst sicher machen. Steht ein Schild oder ein Kegel am Auto? Dann bleib weg. Ein Motor, der drinnen läuft, macht ein Gas, das du nicht riechen oder sehen kannst, und es kann töten. Also: Schließ den Abgasschlauch an, oder mach die Tore auf. Riechst du Benzin? Keine Funken und nicht rauchen. Sag es sofort deinem Vorgesetzten. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Ist dieses Auto schon sicher gemacht?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Du sollst an einem Elektroauto ein Rad wechseln. Unter dem Auto siehst du ein loses oranges Kabel. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Fass nichts an, und hol den ausgebildeten Mechaniker.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Schieb das Kabel mit der Hand zurück.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Schieb es mit einem trockenen Tuch zurück.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "Die Batterie eines Elektroautos hat genug Strom, um zu töten, auch wenn das Auto aus ist. Nur wer die Ausbildung hat, darf diese Teile anfassen.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Den Lieferwagen prüfen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schade': "der Schaden", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deuk': "die Delle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spiegel': "der Spiegel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tanken': "tanken (Kraftstoff in den Lieferwagen füllen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opladen': "aufladen (einen Elektro-Lieferwagen, ein Handy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeren': "parken", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.1': "In der Tür ist eine Delle.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.2': "Dieser Schaden war schon da.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.3': "Ich muss erst noch tanken.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.q': "Ist mit dem Lieferwagen alles in Ordnung?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.a': "Nein, der Spiegel ist kaputt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck': "Erst schauen, dann fahren", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Geh vor deiner ersten Tour einmal um den Lieferwagen herum. Siehst du eine Delle, einen Kratzer oder einen kaputten Spiegel? Mach ein Foto und melde es, bevor du losfährst. Dann wissen alle, dass der Schaden schon da war. Ist auf deiner Tour etwas passiert? Melde es am selben Tag, auch wenn es klein ist. Einen Schaden zu verstecken, macht später größere Probleme. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "Am Lieferwagen ist ein Schaden. Hier ist ein Foto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "Am Morgen siehst du eine neue Delle im Lieferwagen. Du hast sie nicht gemacht. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Du machst ein Foto und meldest es, bevor du fährst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Du sagst nichts: Es ist nicht deine Delle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Du wartest ab, ob jemand danach fragt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Wenn du es meldest, bevor du fährst, kann niemand denken, dass du es warst. Ein Foto mit der Uhrzeit ist für alle klar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Verspätungen unterwegs", // nieuw, nalezen // nagelezen AI 28 nov
    'w.file': "der Stau", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertraging': "die Verspätung (du bist später als geplant)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omleiding': "die Umleitung (ein anderer Weg, weil die Straße gesperrt ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navigatie': "das Navi (die App, die den Weg zeigt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planner': "der Planer / die Planerin (die Person, die die Routen macht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.retour': "die Retoure (ein Paket, das zurückgeht)", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.1': "Ich stehe im Stau.", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.2': "Ich habe eine halbe Stunde Verspätung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.3': "Dieses Paket geht als Retoure zurück.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.q': "Wo bist du jetzt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.a': "Bei der Umleitung. Ich komme zehn Minuten später.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay': "Zu spät? Sag rechtzeitig Bescheid", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Ein Stau oder eine gesperrte Straße ist nicht deine Schuld. Aber sag dem Planer Bescheid, sobald du weißt, dass du später kommst. Dann kann der Planer den Kunden Bescheid sagen oder die Route ändern. Halte zuerst an einem sicheren Ort an: Telefoniere nicht mit dem Handy in der Hand, während du fährst. Und fahr nicht schneller, um die Zeit wieder aufzuholen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Ich stehe im Stau. Ich komme eine halbe Stunde später.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Eine Straße ist gesperrt. Die Umleitung kostet dich dreißig Minuten. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Du sagst dem Planer Bescheid, sobald du sicher anhalten kannst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Du fährst schneller, um die Zeit aufzuholen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Du sagst nichts: Vielleicht merkt es niemand.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Wenn der Planer es früh weiß, erfahren es die Kunden, und niemand wartet umsonst. Schneller fahren ist gefährlich, und es bringt fast keine Zeit.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Anweisungen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.putdown': "Stell es da hin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zetten': "stellen (etwas, das steht: ein Karton, ein Eimer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leggen': "legen (etwas, das flach liegt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brengen': "bringen (an einen Ort oder zu einer Person)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geven': "geben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vasthouden': "festhalten, halten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loslaten': "loslassen", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.1': "Stell es da hin.", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.2': "Bring das in die Kantine.", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.3': "Halt das mal kurz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.q': "Kannst du das kurz halten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.a': "Ja. Wo soll ich es hinstellen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown': "Sag, dass du es hast", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Tragt ihr etwas zusammen, oder gibt dir ein Kollege etwas Schweres? Sag „Ik heb hem“, wenn du es gut hältst. Dann weiß dein Kollege, dass er sicher loslassen kann. Willst du selbst loslassen? Frag zuerst: „Heb je hem?“ Und warte auf die Antwort. Das ist an jedem Arbeitsplatz normal. So fällt nichts auf Füße und Hände.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Ich habe es. Du kannst loslassen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Ein Kollege gibt dir einen schweren Karton. Du hältst ihn noch nicht gut. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Du sagst „wacht“ und hältst ihn zuerst besser.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Du sagst nichts: Er sieht es schon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "Du nimmst ihn schnell, damit er nicht wartet.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Dein Kollege lässt los, wenn er denkt, dass du ihn hast. Ein Wort gibt dir die Zeit, ihn gut zu halten.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "An und aus, auf und zu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanzetten': "einschalten, anmachen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendoen': "aufmachen, öffnen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dichtdoen': "zumachen, schließen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukken': "drücken (einen Knopf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaien': "drehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoppen': "stoppen, aufhören", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.1': "Mach die Tür zu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.2': "Drück auf den Knopf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.3': "Stopp! Mach es aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff.q': "Ist die Tür zu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff.a': "Nein. Ich mache sie jetzt zu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff': "Stopp heißt Stopp", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Ruft jemand „Stop!“? Hör sofort auf, auch wenn du nicht weißt, warum. Frag danach. Ein kurzes, lautes Wort ist hier kein Ärger: So schützen sich Kollegen gegenseitig. Siehst du selbst etwas Gefährliches? Ruf auch „Stop!“, auch zu jemandem, der schon seit Jahren hier arbeitet. Niemand findet das komisch.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Stopp! Warte kurz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Du schaltest eine Maschine ein. Ein Kollege ruft „Stop!“. Du siehst kein Problem. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Du hörst sofort auf und fragst danach, warum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Du machst weiter: Du siehst kein Problem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Du fragst zuerst, warum du aufhören sollst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Dein Kollege sieht vielleicht etwas, das du nicht siehst. Erst stoppen, dann reden: So bleiben alle sicher.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Schieben, ziehen, füllen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duwen': "schieben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trekken': "ziehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vullen': "füllen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leegmaken': "leeren, leer machen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoonmaken': "sauber machen, putzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vol': "voll", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.1': "Nicht schieben, sondern ziehen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.2': "Der hier ist voll. Mach ihn leer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.3': "Mach das mal kurz sauber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.q': "Ist er schon voll?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.a': "Ja. Ich mache ihn leer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty': "Fertig? Sag es", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "Bist du mit einer Aufgabe fertig? Sag es: „Ik ben klaar.“ Und frag, was du als Nächstes tun kannst. Still warten, bis dich jemand sieht, kann so aussehen, als ob du nicht arbeiten willst, auch wenn das nicht stimmt. Kollegen, die nach der nächsten Aufgabe fragen, bekommen nach einer Weile oft interessantere Arbeit. Willst du etwas Neues lernen? Frag auch das: „Mag ik dat ook leren?“", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "Ich bin fertig. Was kann ich noch machen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "Du bist mit deiner Aufgabe fertig. Dein Vorgesetzter ist mit etwas anderem beschäftigt. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Du sagst, dass du fertig bist, und fragst, was als Nächstes kommt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Du wartest, bis dein Vorgesetzter dich sieht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Du machst Pause: Deine Arbeit ist fertig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Ein Vorgesetzter kann nicht alles sehen. Wenn du sagst, dass du fertig bist, geht die Arbeit weiter, und du zeigst, dass du mehr machen willst.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Erst das hier, dann das da", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nu': "jetzt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dan': "dann", // nieuw, nalezen // nagelezen AI 28 nov
    'w.altijd': "immer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.genoeg': "genug", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meer': "mehr", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alles': "alles", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.1': "Erst das hier, dann das da.", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.2': "Das ist genug.", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.3': "Mach das immer so.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.q': "Kannst du das jetzt machen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.a': "Ja. Erst das, und dann?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order': "Viele Aufgaben auf einmal? Frag, was zuerst kommt", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "Manchmal bekommst du drei Aufgaben in einem Satz. Das ist schwer zu merken, auch für Leute, die gut Niederländisch sprechen. Frag, welche zuerst kommt: „Wat moet ik eerst doen?“ Du darfst die Aufgaben auch aufschreiben, oder sie an den Fingern abzählen und noch einmal sagen. Hast du eine vergessen? Geh zurück und frag. Das ist besser als raten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "Das ist viel. Was soll ich zuerst machen?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Dein Vorgesetzter gibt dir drei Aufgaben, sehr schnell. Du merkst dir nur die erste. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Du bittest sofort darum, die Aufgaben noch einmal zu hören.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Du machst die erste und hoffst, dass dir der Rest wieder einfällt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Du machst nichts: Du weißt nicht alle drei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Sofort fragen kostet zehn Sekunden. Später ist dein Vorgesetzter vielleicht weg, und dann wartest du oder rätst.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Fliesen, Putz und Farbe", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tiletools': "Das Werkzeug zum Fliesenlegen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmkam': "die Zahnkelle (verteilt den Fliesenkleber in Rillen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.troffel': "die Kelle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelsnijder': "der Fliesenschneider", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nijptang': "die Beißzange (um kleine Stücke von einer Fliese abzuzwicken)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mixer': "das Rührgerät (rührt Kleber oder Putz im Eimer an)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duimstok': "der Zollstock", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.1': "Gib mir mal kurz die Zahnkelle.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.2': "Ich schneide die Fliese mit dem Fliesenschneider.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.3': "Miss zuerst mit dem Zollstock.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.q': "Wo ist das Rührgerät?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.a': "Beim Eimer, neben der Tür.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools': "Mach dein Werkzeug sauber, bevor der Kleber hart ist", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "Fliesenkleber und Putz werden schnell hart, auch an deinem Werkzeug. Mach die Zahnkelle, die Kelle und das Rührgerät also sofort in einem Eimer Wasser sauber, auch vor deiner Pause. Harter Kleber geht nicht mehr ab, und eine Zahnkelle mit hartem Kleber macht schlechte Rillen. Kipp das schmutzige Wasser nicht in ein Waschbecken oder einen Abfluss: Die verstopfen. Frag, wohin das Wasser darf. Das Rührgerät: Halt es mit zwei Händen, und lass es langsam anlaufen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Ich mache kurz die Zahnkelle sauber.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "Es ist Zeit für deine Pause. Deine Zahnkelle ist voll mit nassem Kleber. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "Wasch sie in Wasser ab, dann mach Pause.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "Lass sie liegen: Du machst sie nach der Arbeit sauber.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "Steck sie in den Eimer mit Kleber.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "Fliesenkleber wird auch in deiner Pause hart. Eine saubere Zahnkelle macht gute Rillen, und die Fliesen halten gut. Harter Kleber daran ist viel Arbeit, oder ein neues Werkzeug.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Fliesen, Kleber und die Mittellinie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegel': "die Fliese", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegellijm': "der Fliesenkleber", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelkruisje': "das Fugenkreuz (ein kleines Kreuz zwischen den Fliesen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hartlijn': "die Mittellinie (dort fängst du mit den Fliesen an)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelplaat': "die Übungsplatte (eine Platte, auf der du das Fliesenlegen übst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potlood': "der Bleistift", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.1': "Der Fliesenkleber ist noch nass.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.2': "Setz ein Fugenkreuz zwischen die Fliesen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.3': "Zeichne zuerst die Mittellinie mit dem Bleistift.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.q': "Wo fange ich mit den Fliesen an?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.a': "In der Mitte, auf der Mittellinie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling': "Fang an der Mittellinie an, mit wenig Kleber", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Beim Fliesenlegen fängt man nicht in einer Ecke an. Du zeichnest zuerst die Mittellinie, mit einem Bleistift und der Wasserwaage, und fängst dort an. Dann sind die geschnittenen Fliesen an beiden Enden gleich groß. Trag nur so viel Kleber auf, wie du in kurzer Zeit mit Fliesen belegen kannst. Kleber, der zu lange steht, bekommt eine trockene Haut, und dann halten die Fliesen nicht gut. Setz an jede Kreuzung ein Fugenkreuz, so werden alle Fugen gleich. Prüf oft mit der Wasserwaage: Eine schiefe Fliese ist jetzt leicht zu richten, und morgen schwer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Ich trage nicht zu viel Kleber auf einmal auf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Nach einem langen Telefongespräch hat der Kleber an der Wand eine trockene Haut. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Kratz ihn ab, und trag frischen Kleber auf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Drück die Fliesen trotzdem hinein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Mach ihn mit einem Schwamm nass, und mach weiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "Kleber mit einer trockenen Haut hält eine Fliese nicht gut. Später kann sich die Fliese lösen, und dann muss die Arbeit noch einmal gemacht werden.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Verputzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stucspaan': "die Glättkelle (eine flache Kelle aus Stahl, um den Putz glatt zu machen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplegspaan': "das Putzbrett (ein flaches Brett, auf dem du den Putz hältst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spackmes': "der Spachtel (ein breites, flaches Messer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rei': "die Richtlatte (eine lange, gerade Latte, um den Putz gerade abzuziehen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sponsspaan': "das Schwammbrett", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoekprofiel': "das Eckprofil (ein Streifen aus Metall für eine gerade Ecke)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.1': "Setz zuerst das Eckprofil auf die Ecke.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.2': "Mach die Wand mit der Glättkelle glatt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.3': "Zieh die Richtlatte über die Wand.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.q': "Ist die Wand schon trocken?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.a': "Nein, warte noch einen Tag.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster': "Putz braucht Zeit zum Trocknen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "Frischer Putz bleibt lange nass. Eine nasse Wand ist dunkler als eine trockene. Der Maler kann erst anfangen, wenn die Wand überall trocken ist, und das kann Tage oder Wochen dauern. Trockne sie nicht schneller mit einem Heizgerät: Dann kann der Putz reißen. Will jemand zu früh streichen? Sag, dass die Wand noch nicht trocken ist. Und bevor du anfängst, deck den Boden, die Fenster und die Steckdosen ab: Putz geht schwer wieder ab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "Die Wand ist noch nass. Du kannst noch nicht streichen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "Der Maler will morgen anfangen. Der neue Putz hat noch dunkle Flecken. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Sag dem Maler: Die Wand ist noch nicht trocken.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Stell heute Abend ein Heizgerät davor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Sag nichts: Der Maler sieht es schon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Dunkle Flecken heißen, dass der Putz noch nass ist. Farbe auf einer nassen Wand kann abgehen, und ein Heizgerät kann Risse machen. Warten kostet weniger, als alles noch einmal zu machen.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Mauern, Holz und Befestigen", // nieuw, nalezen // nagelezen AI 28 nov
    'u.machines': "Maschinen und Werkzeug", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shapes': "Formen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierkant': "das Quadrat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechthoek': "das Rechteck", // nieuw, nalezen // nagelezen AI 28 nov
    'w.driehoek': "das Dreieck", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cirkel': "der Kreis", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kubus': "der Würfel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balk': "der Quader (eine lange Kastenform)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.1': "Die Fliese ist ein Quadrat.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.2': "Dieser Raum ist ein Rechteck.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.3': "Ein Ziegelstein hat die Form eines Quaders.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.q': "Ist es ein Quadrat?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.a': "Nein, ein Rechteck. Es ist länger als breit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes': "Prüf ein Rechteck mit zwei Linien über Kreuz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Ein Raum, ein Boden oder ein Rahmen ist oft ein Rechteck. Aber sind die Ecken wirklich rechtwinklig? Das kannst du leicht prüfen. Miss von einer Ecke bis zur Ecke gegenüber. Dann miss zwischen den anderen zwei Ecken. Sind die zwei Längen gleich? Dann stimmen die Ecken. Nicht gleich? Dann ist die Form ein bisschen schief, und Fliesen oder ein Boden passen nicht gut. Sag es deinem Vorgesetzten, bevor du anfängst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Diese zwei Maße sind nicht gleich.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Du misst einen Boden von Ecke zu Ecke, in beide Richtungen. Ein Maß ist länger. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Sag es deinem Vorgesetzten, bevor du anfängst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Fang in einer Ecke an, das geht schon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Miss nur eine Seite noch einmal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Zwei verschiedene Längen heißen, dass die Ecken nicht rechtwinklig sind. Dann passen Fliesen oder Bretter nicht. Es ist besser, das zu wissen, bevor du anfängst.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Winkel und runde Formen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoek': "der Winkel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graad': "das Grad (°)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geodriehoek': "das Geodreieck (ein Dreieck mit Winkelmesser)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boog': "der Bogen, die Kurve", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cilinder': "der Zylinder", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parallellogram': "das Parallelogramm", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.1': "Dieser Winkel ist neunzig Grad.", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.2': "Miss den Winkel mit dem Geodreieck.", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.3': "Das Rohr hat die Form eines Zylinders.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.q': "Wie viel Grad hat dieser Winkel?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.a': "Fünfundvierzig. Die Hälfte von einem rechten Winkel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles': "Prüf eine große Ecke mit 3, 4 und 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Auf einer Baustelle prüfst du oft einen rechten Winkel: eine Wand auf einem Boden, eine Ecke von einem Raum. Eine kleine Ecke prüfst du mit einem Anschlagwinkel oder einem Geodreieck. Für eine große Ecke gibt es einen alten Trick. Miss 3 Meter an einer Seite und 4 Meter an der anderen Seite, und mach an beiden Stellen einen Strich. Sind es von Strich zu Strich genau 5 Meter? Dann ist der Winkel 90 Grad. Kleiner geht es auch: 30, 40 und 50 Zentimeter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Dieser Winkel ist nicht rechtwinklig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Du musst eine große Ecke von einer neuen Wand prüfen. Dein Winkel ist viel zu klein. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Miss 3, 4 und 5 Meter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Schau es dir von weitem an.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Nimm trotzdem den kleinen Winkel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Mit 3, 4 und 5 kannst du eine große Ecke genau prüfen, nur mit einem Maßband. Mit dem Auge kann eine Ecke gerade aussehen und trotzdem falsch sein.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Länge, Fläche und Volumen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lengte': "die Länge", // nieuw, nalezen // nagelezen AI 28 nov
    'w.breedte': "die Breite", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoogte': "die Höhe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppervlakte': "die Fläche (Länge mal Breite, in Quadratmetern)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhoud': "das Volumen, der Inhalt (Länge mal Breite mal Höhe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.centimeter': "der Zentimeter", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.1': "Die Fläche ist die Länge mal die Breite.", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.2': "Das Volumen ist Länge mal Breite mal Höhe.", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.3': "Zehn Millimeter sind ein Zentimeter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.q': "Wie viele Quadratmeter hat der Boden?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.a': "Vier mal fünf Meter, also zwanzig Quadratmeter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size': "Rechne aus, was du brauchst, und nimm ein bisschen mehr", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Wie viele Fliesen, wie viel Farbe, wie viel Sand? Das rechnest du mit der Fläche oder dem Volumen aus. Fläche: die Länge mal die Breite, in Quadratmetern. Volumen: die Länge mal die Breite mal die Höhe, in Kubikmetern. Miss alles in derselben Einheit: alles in Metern, oder alles in Zentimetern. Schreib die Maße auf, behalte sie nicht nur im Kopf. Nimm dann ein bisschen mehr, für die geschnittenen Stücke und für Fehler. Nicht sicher? Bitte einen Kollegen, deine Rechnung zu prüfen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Ich schreibe die Maße auf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Du hast den Boden gemessen. Du musst heute die Fliesen bestellen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Rechne die Fläche aus, und nimm ein bisschen mehr.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Bestell genau die Fläche, keine Fliese mehr.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Schätz es: Du hast den Boden ja gesehen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Du schneidest immer ein paar Fliesen, und ein paar gehen kaputt. Mit ein bisschen mehr musst du nicht in der Mitte aufhören und noch einmal bestellen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Streichen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verf': "die Farbe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwast': "der Malerpinsel (ein breiter Pinsel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.penseel': "der kleine Pinsel (für Ecken und Kanten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roerstok': "der Rührstab", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tape': "das Abdeckband, das Kreppband", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strijkvaatje': "der kleine Farbeimer (ein kleiner Eimer, den du beim Streichen in der Hand hältst)", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.1': "Rühr die Farbe zuerst gut um.", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.2': "Kleb die Kante mit Abdeckband ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.3': "Tu ein bisschen Farbe in den kleinen Farbeimer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.q': "Welchen Pinsel nehme ich?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.a': "Den breiten für die Wand, den kleinen Pinsel für die Ecken.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint': "Gut umrühren, und von oben nach unten streichen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "Farbe, die eine Weile gestanden hat, ist unten in der Dose dick. Rühr sie also zuerst gut um, mit einem Rührstab, bis die Farbe überall gleich ist. Streich nicht aus der großen Dose: Tu ein bisschen Farbe in den kleinen Farbeimer, und mach die Dose wieder zu. Dann bleibt die Farbe gut. Streich von oben nach unten, so landen Tropfen auf nasser Farbe, und du kannst sie noch wegstreichen. Nimm den breiten Pinsel für die Wand und den kleinen Pinsel für die Ecken. Mach die Pinsel am Ende sofort sauber.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Ich rühre die Farbe zuerst gut um.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Du machst eine alte Dose Farbe auf. Oben ist sie dünn, unten dick. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Rühr sie zuerst gut um, mit dem Rührstab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Streich mit der dünnen Farbe oben.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Gib Wasser dazu, bis sie überall dünn ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Ein Teil der Farbe liegt unten in der Dose. Ohne Umrühren bekommt die Wand Flecken und Streifen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Das Streichen vorbereiten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plamuurmes': "das Spachtelmesser (um Löcher zu füllen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuurpapier': "das Schleifpapier", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verfkrabber': "der Farbschaber", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoffertje': "der kleine Handfeger (um Staub wegzufegen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuren': "schleifen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afplakken': "abkleben (eine Kante mit Klebeband abdecken)", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.1': "Kratz zuerst die alte Farbe ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.2': "Schleif das Holz glatt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.3': "Feg den Staub mit dem kleinen Handfeger weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.q': "Darf ich schon streichen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.a': "Nein, zuerst schleifen und das Loch zumachen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep': "Gute Malerarbeit fängt vor der Farbe an", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "Farbe hält nicht gut auf Schmutz, Staub oder loser alter Farbe. Kratz also zuerst die lose Farbe mit dem Farbschaber ab. Füll Löcher mit Spachtelmasse und dem Spachtelmesser, und lass die Spachtelmasse trocknen. Dann schleif sie glatt. Feg nach dem Schleifen den Staub mit dem kleinen Handfeger weg, auch von den Kanten. Kleb zum Schluss ab, was sauber bleiben muss, zum Beispiel Fenster und Steckdosen. Schleifen macht feinen Staub: Trag eine Staubmaske, und frag, welche. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Zuerst schleifen, dann streichen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Du hast die Tür geschliffen. Es ist noch Staub darauf. Dein Kollege will jetzt streichen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Feg zuerst den Staub ab, mit dem Handfeger.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Lass ihn streichen: Die Farbe deckt den Staub zu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Wisch den Staub mit der Hand ab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "Farbe auf Staub hält nicht gut. Später blättert sie ab, und dann muss die ganze Arbeit noch einmal gemacht werden.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Mauern", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speciekuip': "die Mörtelwanne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltroffel': "die Maurerkelle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baksteen': "der Ziegelstein", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cement': "der Zement", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voegijzer': "das Fugeisen (um die Fugen zwischen den Steinen glatt zu machen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handveger': "der Handfeger", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.1': "In der Mörtelwanne ist noch Zement.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.2': "Mach die Fuge mit dem Fugeisen glatt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.3': "Feg die Mauer mit dem Handfeger sauber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.q': "Wie viele Ziegelsteine hast du noch?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.a': "Noch eine Palette. Genug für heute.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick': "Halt die Mauer sauber, während du arbeitest", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "Mörtel ist nass, wenn du die Steine legst, und in ein paar Stunden wird er hart. Arbeite also sauber. Kratz den Mörtel, der aus der Fuge kommt, sofort mit der Kelle ab. Mach die Fugen mit dem Fugeisen glatt, wenn der Mörtel ein bisschen fest ist, nicht wenn er noch nass ist. Dann feg die Mauer mit dem Handfeger ab. Harter Mörtel vorne auf einem Stein geht sehr schwer wieder ab. Deck am Ende des Tages die Mauer oben ab, damit der Regen den Mörtel nicht auswäscht.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Ich mache die Fugen glatt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "Am Ende des Tages ist Mörtel vorne auf den Steinen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Feg ihn jetzt ab, bevor er hart ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Lass ihn: Du machst es nächste Woche sauber.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Wasch die Mauer mit viel Wasser.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "Frischer Mörtel geht mit einem Handfeger leicht ab. Harter Mörtel bleibt auf dem Stein, und dann sieht die Mauer nicht gut aus.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Eine gerade Mauer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltouw': "die Maurerschnur (eine Schnur für eine gerade Reihe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klos': "der Schnurhalter (hält die Schnur an der Ecke)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lagenmaatlat': "die Schichtlatte (zeigt die Höhe jeder Reihe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.profiel': "die Mauerlehre (ein gerader Pfosten am Ende der Mauer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kop': "die Kopfseite (das kurze Ende eines Steins)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strek': "die Läuferseite (die lange Seite eines Steins)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.1': "Spann die Maurerschnur straff.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.2': "Die Mauerlehre muss gerade stehen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.3': "Leg den Stein mit der langen Seite nach außen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.q': "Wie hoch muss diese Reihe sein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.a': "Schau auf die Schichtlatte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall': "Die Schnur hält die Mauer gerade", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Ein Maurer baut nicht nach Augenmaß. Zuerst stehen die Mauerlehren gerade an beiden Enden der Mauer. Dazwischen spannst du die Maurerschnur straff, auf der Höhe der nächsten Reihe. Leg jeden Stein an der Schnur entlang, aber drück die Schnur nicht weg. Die Schichtlatte zeigt, wie hoch jede Reihe sein muss. Prüf oft mit der Wasserwaage. Ein schiefer Stein ist leicht zu richten, solange der Mörtel nass ist, und morgen sehr schwer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "Ist die Maurerschnur straff?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "Die Maurerschnur ist locker und hängt in der Mitte ein bisschen durch. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Spann sie zuerst straff, dann mach weiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Leg die Steine trotzdem darunter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Leg die Steine nach Augenmaß.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Eine lockere Schnur hängt in der Mitte durch, also hängt die Reihe auch durch. Eine straffe Schnur gibt eine gerade Reihe.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Mit Holz arbeiten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handzaag': "die Handsäge", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapzaag': "die Rückensäge (eine kleine Säge mit festem Rücken)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtbeitel': "der Stechbeitel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handschaaf': "der Hobel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.timmermanshamer': "der Zimmermannshammer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtenhamer': "der Holzhammer (ein Hammer aus Holz)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.1': "Säg das Brett auf Maß.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.2': "Hobel die Kante glatt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.3': "Schlag mit dem Holzhammer auf den Beitel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.q': "Welche Säge brauche ich?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.a': "Die Rückensäge, für dieses kleine Stück.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood': "Zu kurz lässt sich nicht reparieren", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "Holz, das zu kurz gesägt ist, wird nicht wieder lang. Miss also zweimal, und zeichne die Linie, bevor du sägst. Säg neben der Linie, auf der Seite von dem Stück, das du nicht brauchst. Halt das Holz still: auf einer Werkbank oder mit einer Zwinge, nicht auf deinem Knie. Lass die Säge die Arbeit machen, mit langen, ruhigen Zügen. Drück einen Beitel von deinem Körper und deiner anderen Hand weg. Und halt den Beitel und den Hobel scharf: Ein stumpfes Werkzeug rutscht leichter ab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Ich messe es noch einmal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Du musst ein Brett auf Maß sägen. Du hast es einmal schnell gemessen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Miss noch einmal, dann zeichne die Linie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "Säg es jetzt: Es stimmt wahrscheinlich.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "Säg es nach Augenmaß, ohne Linie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Zu lang kannst du noch einmal sägen, zu kurz kannst du nicht reparieren. Noch einmal messen dauert eine Minute, ein neues Brett viel länger.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Anzeichnen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelhaak': "der Anschlagwinkel (zeigt einen rechten Winkel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstekhaak': "der Gehrungswinkel (45 Grad)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaaihaak': "die Schmiege (den Winkel stellst du selbst ein)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruishout': "das Streichmaß (zeichnet eine Linie an der Kante entlang)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passer': "der Zirkel (zeichnet einen Kreis)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftekenen': "anzeichnen (zeichnen, wo du schneidest)", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.1': "Zeichne die Linie mit dem Anschlagwinkel an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.2': "Stell die Schmiege auf den richtigen Winkel ein.", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.3': "Zeichne einen Kreis mit dem Zirkel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.q': "Ist der Winkel rechtwinklig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.a': "Ja, der Anschlagwinkel passt genau.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square': "Zeichne von einer geraden Kante aus an", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Bevor du sägst oder bohrst, zeichnest du an, wo. Nimm einen spitzen Bleistift: Eine dicke Linie ist nicht genau. Such dir eine gerade Kante vom Holz aus, und miss alles von dieser Kante aus. Drück den dicken Teil vom Anschlagwinkel fest dagegen, und zeichne die Linie am Stahl entlang. Zeichne ein kleines Kreuz auf das Stück, das du nicht brauchst. Dann sägst du neben der Linie, auf der Seite vom Kreuz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Ich zeichne es zuerst an.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Dein Bleistift ist stumpf und macht eine dicke Linie. Du willst ein Brett anzeichnen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Spitz zuerst den Bleistift, dann zeichne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Zeichne die Linie trotzdem, das geht schon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Zeichne es mit deinem Fingernagel an.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Eine dicke Linie ist ein paar Millimeter breit. Dann weißt du nicht, wo du sägen sollst, und das Stück ist nicht genau.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Bohrer und Schrauben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accuboor': "der Akkuschrauber (eine Bohrmaschine mit Akku)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boormachine': "die Bohrmaschine (mit Kabel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bitje': "der Bit (der Aufsatz für die Schraube)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plug': "der Dübel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroevendraaier': "der Schraubenzieher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spijker': "der Nagel", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.1': "Bohr ein Loch und steck einen Dübel hinein.", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.2': "Welcher Bit passt zu dieser Schraube?", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.3': "Schlag den Nagel ins Holz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.q': "Wo ist der Akkuschrauber?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.a': "Am Ladegerät, er ist fast voll.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw': "Schau, bevor du bohrst", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Bevor du in eine Wand bohrst, denk daran, was dahinter ist. Rohre und Kabel laufen oft gerade nach oben, nach unten oder zur Seite von einer Steckdose oder einem Schalter. Frag, wo sie sind, oder prüf es mit einem Suchgerät. Nimm einen Bohrer, der so dick ist wie der Dübel, und bohr das Loch ein bisschen tiefer als der Dübel. Nimm den richtigen Bit für die Schraube: Ein falscher Bit rutscht ab und macht den Kopf der Schraube kaputt. Trag beim Bohren eine Schutzbrille.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Darf ich hier bohren?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Du musst direkt über einer Steckdose ein Loch bohren. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Frag zuerst, wo das Kabel läuft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Bohr: Da ist nie ein Kabel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Bohr langsam, dann ist es sicher.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Von einer Steckdose läuft oft ein Kabel gerade nach oben. Hineinbohren ist gefährlich, und die Reparatur ist viel Arbeit.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Dinge befestigen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevestigen': "befestigen (etwas fest an einer Wand anbringen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzetten': "festdrehen (drehen, bis es fest ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmen': "kleben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbussleutel': "der Inbusschlüssel (Sechskantschlüssel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisschroevendraaier': "der Kreuzschraubenzieher (mit Kreuzspitze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.platteschroevendraaier': "der flache Schraubenzieher, der Schlitzschraubenzieher", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.1': "Befestige das Regalbrett an der Wand.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.2': "Dreh den Bolzen mit dem Inbusschlüssel fest.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.3': "Nimm den flachen Schraubenzieher, nicht den Kreuzschraubenzieher.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.q': "Wie befestige ich dieses Regalbrett?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.a': "Mit zwei Dübeln und zwei Schrauben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix': "Fest, aber nicht zu fest", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Eine Schraube oder ein Bolzen muss fest sein, aber nicht zu fest. Drehst du zu stark, geht das Gewinde kaputt oder das Holz reißt. Dreh, bis es sich nicht mehr bewegt, dann hör auf. Beim Akkuschrauber: Dreh zuerst den Ring mit den Zahlen auf eine niedrige Zahl. Ein Regalbrett an der Wand braucht Dübel, die zur Wand passen: Stein braucht andere Dübel als eine dünne Wand aus Platten. Kleber braucht Zeit: Drück die Teile zusammen, halt sie mit einer Zwinge fest, und warte, bis der Kleber trocken ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "Ist das Regalbrett gut befestigt?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "Du hast zwei Stücke Holz geklebt. Dein Kollege will es sofort benutzen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Sag: Der Kleber muss zuerst trocknen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Lass es ihn benutzen: Kleber trocknet schnell.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Halt es eine Minute in deinen Händen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "Nasser Kleber hält noch nicht. Benutzt du es zu früh, gehen die Teile wieder auseinander. Dann musst du noch einmal anfangen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "An der Maschine", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedieningspaneel': "das Bedienfeld (die Knöpfe und der Bildschirm einer Maschine)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startknop': "der Startknopf (grün)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hendel': "der Hebel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscherming': "die Schutzabdeckung (eine Abdeckung über den Teilen, die sich bewegen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sensor': "der Sensor (er sieht, ob etwas da ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaallamp': "die Signalleuchte (farbige Lampen oben auf einer Maschine)", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.1': "Drück den grünen Startknopf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.2': "Die Signalleuchte ist rot. Es gibt eine Störung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.3': "Nimm die Schutzabdeckung nie weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.q': "Warum hält die Maschine immer wieder an?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.a': "Der Sensor sieht den Karton nicht gut.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine': "Die Schutzabdeckung bleibt dran", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Die Teile einer Maschine, die sich bewegen, können in weniger als einer Sekunde eine Hand, einen Ärmel oder Haare hineinziehen. Dafür ist die Schutzabdeckung da. Nimm sie nie weg, und greif nie dahinter, während die Maschine läuft. Funktioniert eine Schutzabdeckung oder ein Sensor nicht? Dann ist die Maschine nicht sicher: Halt sie an und sag es deinem Teamleiter. Steckt etwas fest? Halt zuerst die Maschine an, und sorg dafür, dass niemand sie starten kann, während du arbeitest. Wie das geht, ist in jeder Firma anders: Lass es dir erklären, bevor du anfängst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "Die Schutzabdeckung ist kaputt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Ein Karton steckt in der Maschine fest, direkt hinter der Schutzabdeckung. Die Maschine läuft. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Halt zuerst die Maschine an, dann hol Hilfe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Greif schnell hinein und zieh den Karton heraus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Mach die Schutzabdeckung auf, während die Maschine läuft.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Eine laufende Maschine kann deine Hand hineinziehen, bevor du reagieren kannst. Anhalten dauert einen Moment, eine verletzte Hand Monate.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Messen und prüfen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegschaal': "die Waage", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meetklok': "die Messuhr (misst sehr kleine Unterschiede)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loep': "die Lupe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monster': "die Probe (ein Produkt, das du zum Prüfen herausnimmst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkeurbak': "die Ausschusskiste (für Produkte, die nicht gut sind)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teller': "der Zähler (er zählt die Produkte)", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.1': "Leg das Produkt auf die Waage.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.2': "Dieses Produkt ist beschädigt. Es kommt in die Ausschusskiste.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.3': "Ich schaue mir das Etikett mit der Lupe an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.q': "Wie oft nehme ich eine Probe?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.a': "Jede Stunde eine. Schreib es auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect': "Schreib auf, was du prüfst", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "In einer Fabrik prüfst du die Produkte während der Arbeit: Du wiegst sie, du misst sie, oder du schaust sie dir genau an. Schreib jede Prüfung sofort auf die Liste, mit der Uhrzeit. Nicht später, aus dem Kopf. Ist ein Produkt nicht in Ordnung? Leg es in die Ausschusskiste und schau dir die nächsten genau an. Sind mehr Produkte falsch? Dann stimmt etwas mit der Maschine nicht. Sag es sofort deinem Teamleiter. Ein Problem, das früh gefunden wird, spart viele Produkte. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Mehr Produkte sind falsch.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "Die Waage zeigt, dass drei Produkte hintereinander zu leicht sind. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Sag es sofort deinem Teamleiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Leg sie zurück aufs Band.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Sag nichts: Das passiert halt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Drei falsche Produkte hintereinander zeigen ein Problem in der Maschine. Je schneller du es sagst, desto weniger Produkte gehen verloren.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Verpacken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verpakking': "die Verpackung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krimpfolie': "die Schrumpffolie (Plastikfolie, die durch Wärme straff wird)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sealmachine': "die Siegelmaschine (schließt eine Packung mit Wärme)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulmateriaal': "das Füllmaterial (Luftpolster oder Papier in einem Karton)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afbreekmes': "das Cuttermesser (mit Klingen zum Abbrechen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tapepistool': "der Klebebandabroller (Handabroller)", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.1': "Tu Füllmaterial in den Karton.", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.2': "Mach den Karton mit dem Klebebandabroller zu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.3': "Die Siegelmaschine ist heiß. Vorsicht!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.q': "Wie viele Produkte kommen in einen Karton?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.a': "Zwölf. Das steht auf der Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing': "Schneide von deinem Körper weg", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Verpacken ist schnelle Arbeit, und ein Cuttermesser ist sehr scharf. Schneide immer von deinem Körper weg und von deiner anderen Hand weg. Schieb die Klinge nach jedem Schnitt zurück, auch wenn du das Messer kurz hinlegst. Brich ein stumpfes Stück vorsichtig ab, und wirf es in die Box für alte Klingen, nicht in den normalen Mülleimer. Die Siegelmaschine und der Heißluftföhn für Schrumpffolie werden sehr heiß: Fass die heißen Teile nicht an. Und prüf jeden Karton: das richtige Produkt, die richtige Anzahl, und das Etikett gerade. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Ich schiebe zuerst das Messer zurück.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Du legst das Cuttermesser kurz auf den Tisch. Die Klinge ist noch draußen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Schieb zuerst die Klinge zurück.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Lass es so: Du brauchst es gleich wieder.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Steck es so in deine Tasche.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Eine offene Klinge auf einem Tisch oder in einer Tasche kann dich oder einen Kollegen schneiden. Sie zurückzuschieben dauert eine Sekunde.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Wartung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persluchtpistool': "die Druckluftpistole", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steeksleutel': "der Maulschlüssel, der Gabelschlüssel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliekannetje': "die Ölkanne", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeerpistool': "die Fettpresse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekbak': "die Auffangwanne (fängt Öl auf, das ausläuft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.poetsdoek': "der Putzlappen", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.1': "Da läuft Öl aus. Stell die Auffangwanne darunter.", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.2': "Wisch das Öl mit einem Putzlappen weg.", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.3': "Richte die Druckluftpistole nie auf jemanden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.q': "Wann schmieren wir die Maschine?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.a': "Jeden Montag, vor der ersten Schicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep': "Eine saubere Maschine zeigt ihre Probleme", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "Kleine Wartung gehört oft zur Arbeit: abwischen, ölen und schmieren. Mach das nur, wenn die Maschine aus ist, und wenn du gelernt hast, wie es geht. Eine saubere Maschine ist leicht zu prüfen: Du siehst ein Leck oder ein loses Teil sofort. Öl auf dem Boden ist rutschig. Stell eine Auffangwanne unter ein Leck, wisch den Boden, und sag es deinem Teamleiter. Wirf ölige Lappen in den speziellen Mülleimer. Richte eine Druckluftpistole nie auf einen Menschen, und mach nie deine Kleidung oder deine Haut damit sauber. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "Die Maschine verliert Öl.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Du siehst eine kleine Öllache unter der Maschine. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Stell eine Auffangwanne darunter, und melde es.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Lass es: Es ist nur ein bisschen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Leg etwas Papier darauf, und mach weiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Ein Leck wird größer, und auf Öl am Boden rutschen Menschen aus. Früh gefunden, ist es eine kleine Reparatur.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Elektrik, Rohre und Metall", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wiring': "Verkabeln", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draad': "der Draht (ein Draht in einem Kabel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stopcontact': "die Steckdose (in der Wand)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schakelaar': "der Schalter (für das Licht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lasklem': "die Hebelklemme (sie verbindet Drähte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.striptang': "die Abisolierzange", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabelgoot': "der Kabelkanal (eine Rinne für Kabel)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.1': "Isolier den Draht einen Zentimeter ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.2': "Mach die Drähte in der Hebelklemme fest.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.3': "Die Kabel kommen in den Kabelkanal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.q': "Welcher Draht kommt wohin?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.a': "Braun zu Braun, Blau zu Blau.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring': "Farben zeigen, was ein Draht macht", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "In einem Gebäude haben die Drähte feste Farben. Braun (manchmal Schwarz oder Grau) bringt den Strom. Blau führt zurück. Grün-Gelb ist die Erde: Sie schützt Menschen, und sie wird nie für etwas anderes benutzt. Schließ die gleiche Farbe an die gleiche Farbe an. Isolier nur so viel ab, wie in die Klemme passt: Es darf kein blankes Kupfer herausschauen. Steck den Draht hinein, dann zieh leicht daran, um zu prüfen, ob er fest ist. Nicht sicher, welcher Draht welcher ist? Hör auf und frag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "Welche Farbe hat die Erde?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Du schließt eine Lampe an. Ein Stück Kupfer schaut aus der Klemme heraus. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Schneid es kürzer, und schließ es neu an.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Lass es so: Die Lampe funktioniert.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Wickel ein Stück Klebeband darum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "Blankes Kupfer außerhalb der Klemme kann etwas berühren. Das kann einen Stromschlag oder einen Kurzschluss geben, auch noch Monate später.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Messen und sicher arbeiten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.multimeter': "das Multimeter (es misst Strom)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningzoeker': "der Spannungsprüfer (ein Schraubenzieher mit einer kleinen Lampe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterkast': "der Sicherungskasten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zekering': "die Sicherung (sie schaltet den Strom ab, wenn etwas nicht stimmt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hangslot': "das Vorhängeschloss", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aardedraad': "der Schutzleiter, der Erdungsdraht (grün-gelb)", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.1': "Die Sicherung ist rausgeflogen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.2': "Häng ein Vorhängeschloss an den Schalter.", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.3': "Miss zuerst mit dem Multimeter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.q': "Darf ich den Sicherungskasten aufmachen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.a': "Nein, das macht der Elektriker.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing': "Aus, abgeschlossen, gemessen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Bevor du an der Elektrik arbeitest, mach drei Schritte. Schalt ab: die richtige Sicherung im Sicherungskasten, nicht nur den Schalter an der Wand. Schließ ab: Häng dein eigenes Vorhängeschloss daran und behalt den Schlüssel bei dir, damit niemand wieder einschalten kann. Miss: Prüf mit einem Spannungsprüfer oder einem Multimeter, dass wirklich kein Strom drauf ist. Erst dann fängst du an. Fliegt eine Sicherung immer wieder raus? Schalt sie nicht immer wieder ein: Sag es deinem Vorgesetzten. Mach Elektroarbeiten nur, wenn man dir gesagt hat, dass du das darfst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Da ist kein Strom mehr drauf.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Du hast die Sicherung ausgeschaltet. Ein Kollege sagt: „Fang jetzt an, es ist aus.“ Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Schließ ab, und miss zuerst.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Fang an: Dein Kollege weiß es.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Fass kurz den Draht an, um es zu prüfen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Manchmal ist die falsche Sicherung aus, oder jemand schaltet sie wieder ein. Ein Schloss und eine Messung zeigen, dass es wirklich sicher ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Rohre und Wasser", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buis': "das Rohr", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koppeling': "das Fitting, die Verschraubung (es verbindet zwei Rohre)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijpsnijder': "der Rohrabschneider", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpomptang': "die Wasserpumpenzange", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiter': "das Absperrventil (es stellt das Wasser ab)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teflontape': "das Teflonband (weißes Band für das Gewinde eines Rohrs)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.1': "Dreh das Absperrventil zu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.2': "Schneide das Rohr mit dem Rohrabschneider.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.3': "Wickel Teflonband um das Gewinde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.q': "Ist das Fitting noch undicht?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.a': "Ein bisschen. Ich ziehe es noch etwas fester an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes': "Zuerst das Wasser ab, und ein Eimer bereit", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Bevor du eine Wasserleitung öffnest, dreh das Absperrventil zu. Dann öffne einen Wasserhahn weiter unten, damit das Rohr leer läuft. Stell einen Eimer und einen Lappen unter die Stelle, an der du arbeitest. Schneide ein Kupferrohr mit einem Rohrabschneider, nicht mit einer Säge: Das Ende bleibt rund und sauber. Zieh ein Fitting fest an, aber nicht zu fest. Wenn du fertig bist, dreh das Wasser langsam auf und such nach Tropfen. Ein kleines Leck, das du lässt, wird zu einem Wasserschaden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "Ist das Wasser abgedreht?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Du hast ein neues Fitting angebracht. Du drehst das Wasser auf. Jede Minute fällt ein kleiner Tropfen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Dreh das Wasser zu, und zieh es fester an oder mach es neu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Lass es: Es ist nur ein Tropfen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Stell einen Eimer darunter und geh nach Hause.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Ein Tropfen pro Minute sind viele Liter pro Woche. Das Wasser kann den Boden oder die Decke darunter beschädigen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Metall bearbeiten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankschroef': "der Schraubstock (er hält ein Teil auf der Werkbank fest)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vijl': "die Feile (um Metall mit der Hand glatt zu machen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ijzerzaag': "die Metallsäge (eine Säge für Metall)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kolomboormachine': "die Säulenbohrmaschine (eine große Bohrmaschine auf einem Ständer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draadtap': "der Gewindebohrer (er schneidet ein Gewinde in ein Loch)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.braam': "der Grat (eine scharfe Kante nach dem Schneiden von Metall)", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.1': "Spann das Metall in den Schraubstock.", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.2': "Feil den Grat ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.3': "Halt deine Hände vom Bohrer weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.q': "Warum ist die Kante so scharf?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.a': "Da ist noch ein Grat dran.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork': "Einspannen, nie festhalten", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "Halt an der Säulenbohrmaschine nie ein kleines Teil in der Hand. Der Bohrer kann es packen und sehr schnell herumdrehen. Spann es in den Schraubstock. Binde lange Haare zurück, und trag keine Handschuhe an einem laufenden Bohrer: Er kann einen Handschuh hineinziehen. Trag eine Schutzbrille. Nach dem Sägen oder Bohren hat Metall einen Grat: eine scharfe Kante. Feil ihn ab, bevor du das Teil in die Hand nimmst oder weitergibst. Feg Metallspäne mit einer Bürste weg, nicht mit der Hand.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Ich spanne es zuerst ein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Du musst ein Loch in ein kleines Stück Metall bohren. Der Schraubstock ist an einer anderen Werkbank. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Hol den Schraubstock, und spann das Stück ein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "Halt es mit der Hand gut fest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Zieh Handschuhe an und halt es fest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Ein Bohrer kann ein kleines Teil packen und herumschleudern. Dann trifft es deine Hand. Im Schraubstock bleibt es still liegen.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Montage", // nieuw, nalezen // nagelezen AI 28 nov
    'l.assembly': "Am Montageband", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkinstructie': "die Arbeitsanweisung (ein Blatt mit den Schritten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenbak': "die Teilekiste", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mal': "die Vorrichtung (sie hält das Teil an der richtigen Stelle)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolbaan': "die Rollenbahn", // nieuw, nalezen // nagelezen AI 28 nov
    'w.montagetafel': "der Montagetisch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetpedaal': "das Fußpedal (ein Schalter, den du mit dem Fuß drückst)", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.1': "Lies zuerst die Arbeitsanweisung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.2': "Die Teilekiste ist fast leer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.3': "Leg das Teil in die Vorrichtung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.q': "Welcher Schritt kommt jetzt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.a': "Schritt vier. Schau in die Arbeitsanweisung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly': "Halte dich an die Schritte, immer in der gleichen Reihenfolge", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "Am Montageband hat jeder Schritt seinen Platz und seine Reihenfolge. Die Arbeitsanweisung zeigt sie, oft mit Bildern. Mach die Schritte jedes Mal in der gleichen Reihenfolge, auch wenn du glaubst, dass es schneller geht. Eine andere Reihenfolge kann ein Produkt ergeben, das gut aussieht, aber nicht funktioniert. Ist eine Kiste fast leer? Sag es rechtzeitig, damit das Band nicht stehen bleibt. Siehst du einen Schritt, der besser sein könnte? Sag es deinem Teamleiter: Dann kann es für alle geändert werden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Ich brauche neue Teile.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Du hast einen schnelleren Weg für Schritt drei gefunden. In der Arbeitsanweisung steht etwas anderes. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Frag zuerst deinen Teamleiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "Mach es ab jetzt auf deine Art.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Bring deinen Kollegen deine Art bei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "Die Reihenfolge hat oft einen Grund, den du nicht siehst. Wenn deine Art besser ist, kann sie für alle geändert werden.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Verschrauben und befestigen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroefmachine': "der Elektroschrauber (er hängt über dem Band)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.momentsleutel': "der Drehmomentschlüssel (er klickt, wenn der Bolzen fest genug ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tiewrap': "der Kabelbinder", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitring': "die Unterlegscheibe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klinknagel': "die Niete", // nieuw, nalezen // nagelezen AI 28 nov
    'w.popnageltang': "die Nietzange", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.1': "Zieh den Bolzen mit dem Drehmomentschlüssel fest.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.2': "Vergiss die Unterlegscheibe nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.3': "Binde die Kabel mit einem Kabelbinder zusammen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.q': "Wie fest muss dieser Bolzen sein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.a': "Bis der Drehmomentschlüssel klickt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening': "Der Klick reicht", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Ein Drehmomentschlüssel klickt, wenn ein Bolzen fest genug ist. Hör beim Klick auf: Dreh nicht weiter. Zu fest kann den Bolzen oder das Teil kaputt machen, und zu locker kann sich lösen. Der Elektroschrauber funktioniert genauso: Er hört von selbst auf. Leg jede Unterlegscheibe an ihren Platz: Eine fehlende Scheibe sieht man später kaum. Zähl deine Bolzen. Ist einer übrig, oder brauchst du noch einen? Dann stimmt etwas nicht: Sag es deinem Teamleiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Ein Bolzen ist übrig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Dein Drehmomentschlüssel hat geklickt. Der Bolzen fühlt sich für dich noch etwas locker an. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Hör auf, und frag deinen Teamleiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Dreh ihn mit der Hand noch etwas weiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Nimm einen längeren Schlüssel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "Der Klick ist auf die richtige Kraft eingestellt. Wenn es sich falsch anfühlt, muss der Schlüssel vielleicht geprüft werden. Weiterdrehen kann den Bolzen kaputt machen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Heben und bewegen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.takel': "der Kettenzug (er hebt schwere Teile mit einer Kette)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijshaak': "der Lasthaken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilhulp': "die Hebehilfe (sie hält ein Teil mit Saugkraft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenkar': "der Teilewagen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaitafel': "der Drehtisch (du drehst das Teil, nicht dich selbst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolcontainer': "der Rollcontainer (ein hoher Gitterwagen auf Rädern)", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.1': "Heb das nicht allein. Nimm den Kettenzug.", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.2': "Ist der Lasthaken richtig zu?", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.3': "Schieb den Teilewagen, zieh ihn nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.q': "Darf ich unter dem Kettenzug stehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.a': "Nein, nie unter einer hängenden Last.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling': "Lass den Kettenzug die schwere Arbeit machen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Schwere Teile hebt man mit einem Kettenzug oder einer Hebehilfe, nicht mit deinem Rücken. Prüf den Haken, bevor du hebst: Die Sicherung muss schließen. Heb langsam, und halt deine Hände und Füße von der Last weg. Steh oder geh nie unter einer hängenden Last. Nimm den Drehtisch, um ein Teil zu drehen: Dann musst du deinen Rücken nicht verdrehen. Schieb einen Wagen oder einen Rollcontainer: Du siehst, wohin du gehst, und dein Rücken hat weniger Arbeit. Benutz einen Kettenzug nur, wenn du gelernt hast, wie es geht. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Ich nehme den Kettenzug.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Ein Teil ist sehr schwer. Der Kettenzug ist noch zehn Minuten besetzt. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Warte auf den Kettenzug.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': "Heb es allein, schnell.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "Zieh es über den Boden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Ein schweres Teil kann deinem Rücken in einer Sekunde schaden. Zehn Minuten warten ist besser als monatelange Schmerzen.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "Die Endkontrolle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.typeplaatje': "das Typenschild (ein kleines Metallschild mit dem Typ und der Nummer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempel': "der Stempel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.testbank': "der Prüfstand", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeursticker': "der OK-Aufkleber (ein grüner Aufkleber: Das Produkt ist gut)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kras': "der Kratzer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.barst': "der Riss", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.1': "Das Typenschild sitzt schief.", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.2': "Auf diesem Produkt ist ein Kratzer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.3': "Ohne OK-Aufkleber geht es nicht raus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.q': "Ist dieses Produkt in Ordnung?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.a': "Nein, da ist ein Riss drin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck': "Nur gute Produkte bekommen den Aufkleber", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "Die Endkontrolle ist die letzte Chance, einen Fehler zu finden, bevor der Kunde ihn findet. Prüf jeden Punkt auf der Liste, auch wenn viel los ist. Einen kleinen Kratzer oder Riss übersieht man leicht: Schau bei gutem Licht, und von mehr als einer Seite. Mach den OK-Aufkleber oder den Stempel nur drauf, wenn jeder Punkt in Ordnung ist. Nicht sicher? Leg das Produkt zur Seite und frag. Ein Fehler, der hier gefunden wird, kostet wenig, und ein Fehler beim Kunden kostet viel. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Dieses Produkt kommt zur Seite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Am Band ist viel los. Du siehst einen kleinen Kratzer auf einem Produkt, unter dem Etikett. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Leg es zur Seite, und sag es deinem Teamleiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Kleb den Aufkleber drauf: Der Kratzer ist klein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Schieb das Etikett über den Kratzer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Ein kleiner Kratzer kann ein Zeichen für ein Problem am Band sein. Wer ihn versteckt, schiebt das Problem nur zum Kunden.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Anbauen, sortieren und das Gewächshaus", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sowing': "Säen und Stecklinge", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaad': "die Samen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaaibak': "die Anzuchtschale", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stek': "der Steckling (ein Stück Pflanze, das neue Wurzeln bildet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potgrond': "die Blumenerde", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kweekpot': "der Anzuchttopf", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gieter': "die Gießkanne", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.1': "Leg zwei Samen in jedes Fach.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.2': "Steck den Steckling in die Blumenerde.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.3': "Gib den jungen Pflanzen ein bisschen Wasser.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.q': "Wie tief muss der Samen rein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.a': "Einen halben Zentimeter. Nicht tiefer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing': "Kleine Pflanzen brauchen eine sanfte Hand", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Junge Pflanzen sind empfindlich. Halte einen Steckling oder einen Keimling an einem Blatt, nicht am Stängel: Ein Blatt wächst nach, ein gebrochener Stängel nicht. Drück die Erde sanft an, nicht fest. Gieß langsam, mit einem feinen Strahl, damit die Samen nicht weggespült werden. Arbeite mit sauberen Händen und sauberen Schalen: Junge Pflanzen werden schnell krank. Schreib das Datum und die Pflanzensorte auf jede Schale, damit jeder weiß, was drin ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Ich halte ihn am Blatt fest.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Du sollst einen kleinen Keimling in einen Topf setzen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Halt ihn vorsichtig an einem Blatt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Zieh ihn am Stängel heraus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Drück ihn mit der Erde heraus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Ein Blatt kann nachwachsen. Ein gebrochener Stängel nicht, und dann stirbt die Pflanze.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Sortieren und verpacken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tros': "die Rispe (mehrere Tomaten an einem Stiel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bakje': "die Schale (eine kleine Packung für Obst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sorteermachine': "die Sortiermaschine", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketpistool': "die Etikettierpistole", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurenkaart': "die Farbkarte (sie zeigt, wie reif das Obst sein muss)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomatenschaar': "die Ernteschere", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.1': "Leg die Rispen vorsichtig in die Kiste.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.2': "Diese Tomate ist zu reif. Sie kommt zur Seite.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.3': "Schau auf die Farbkarte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.q': "Ist diese Tomate reif genug?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.a': "Nein, noch zu grün. Lass sie hängen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting': "Jede Frucht zählt", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "Obst und Gemüse bekommen schnell Druckstellen. Leg sie hin, lass sie nicht fallen und wirf sie nicht. Heute siehst du die Druckstelle nicht, aber morgen ist die Frucht weich und braun. Schau auf die Farbkarte, damit du weißt, welche Farbe wohin kommt. Leg beschädigtes oder faules Obst zur Seite: Eine schlechte Frucht in einer Schale kann die anderen verderben. Halte die Schalen und Kisten sauber, und stell sie nie auf den Boden.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Diese ist beschädigt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Du packst Schalen. Eine Tomate hat eine weiche braune Stelle. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Leg sie zur Seite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Versteck sie ganz unten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "Pack sie trotzdem ein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Eine faule Tomate lässt die anderen schneller faulen. Der Kunde findet sie, und die ganze Schale kommt zurück.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "Das Gewächshaus und sein Klima", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buisrailkar': "der Rohrschienenwagen (er fährt auf den Heizungsrohren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.druppelaar': "der Tropfer (er gibt Wasser Tropfen für Tropfen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luchtraam': "die Lüftungsklappe (ein Fenster im Dach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasscherm': "der Energieschirm (ein Tuch unter dem Dach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ventilator': "der Ventilator", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermometer': "das Thermometer", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.1': "Fahr den Rohrschienenwagen bis zum Ende der Reihe.", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.2': "Der Tropfer ist lose.", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.3': "Es ist warm. Die Lüftungsklappen gehen auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.q': "Warum ist es so warm im Gewächshaus?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.a': "Der Schirm ist zu, und die Klappen auch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse': "Überlass das Klima dem Computer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "Im Gewächshaus regelt ein Computer das Klima: die Lüftungsklappen, den Schirm, die Heizung und das Wasser. Mach keine Klappe selbst auf und ändere keine Einstellung. Siehst du etwas Komisches, zum Beispiel einen Tropfer, der leckt, oder eine Klappe, die nicht zugeht? Sag es deinem Vorgesetzten. Der Rohrschienenwagen fährt auf den Heizungsrohren: Benutz ihn nur, wenn du gelernt hast, wie das geht. Bleib mit den Füßen auf der Plattform, und fass die Rohre nie an: Sie können heiß sein. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Dieser Tropfer leckt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Ein Tropfer ist lose. Wasser läuft auf den Boden. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Steck ihn wieder fest, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Lass es: Es ist nur Wasser.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Dreh das Wasser für die ganze Reihe ab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Ein loser Tropfer verschwendet Wasser, die Pflanze bekommt zu wenig, und ein nasser Boden ist rutschig.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Schädlinge und sauberes Arbeiten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luis': "die Blattlaus (ein kleines grünes Insekt auf Pflanzen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vangplaat': "die Gelbtafel (eine gelbe Karte, an der Insekten kleben bleiben)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rups': "die Raupe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluipwesp': "die Schlupfwespe (eine kleine Wespe, die Schädlinge tötet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schimmel': "der Schimmel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontsmettingsmat': "die Desinfektionsmatte (du trittst an der Tür darauf)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.1': "Auf diesem Blatt sind Blattläuse.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.2': "Häng die Gelbtafel über die Pflanzen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.3': "Geh über die Desinfektionsmatte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.q': "Darf ich diese Wespe totmachen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.a': "Nein, das ist eine Schlupfwespe. Die hilft uns.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests': "Trag keine Krankheiten von Reihe zu Reihe", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Eine Krankheit oder ein Schädling breitet sich im Gewächshaus schnell aus. Du kannst sie an deinen Händen, deiner Kleidung und deinem Werkzeug mitnehmen. Geh also an jeder Tür über die Desinfektionsmatte, und wasch dir die Hände, wenn du in einen anderen Teil des Gewächshauses gehst. Fang deine Arbeit in den gesunden Reihen an, und hör in den kranken Reihen auf. Siehst du Insekten, Flecken oder Schimmel an einer Pflanze? Fass sie nicht an, aber sag deinem Vorgesetzten, wo sie ist. Manche Insekten im Gewächshaus sind Helfer: Lass sie in Ruhe. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Hier ist Schimmel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Du siehst grauen Schimmel an ein paar Pflanzen in deiner Reihe. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Sag deinem Vorgesetzten, wo er ist.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Zupf die schlechten Blätter ab und mach weiter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Sag nichts: Es sind nur ein paar Pflanzen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "Schimmel breitet sich schnell aus. Dein Vorgesetzter weiß, was zu tun ist und wo man anfängt.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Reifen, Öl und Bremsen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tyres': "Reifen wechseln", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wielbout': "die Radschraube", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagmoersleutel': "der Schlagschrauber", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenspanningsmeter': "der Reifendruckprüfer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenprofiel': "das Reifenprofil (die Rillen im Reifen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.velg': "die Felge", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenwisselaar': "die Reifenmontiermaschine (eine Maschine, die den Reifen von der Felge nimmt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.1': "Zieh die Radschrauben über Kreuz fest.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.2': "Das Reifenprofil ist zu niedrig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.3': "Miss den Druck mit dem Reifendruckprüfer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.q': "Müssen diese Reifen runter?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.a': "Ja, das Profil ist fast weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres': "Von Hand eindrehen, mit dem Drehmomentschlüssel festziehen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Ein Schlagschrauber ist schnell und sehr stark. Nimm ihn, um Radschrauben zu lösen, aber nicht, um sie fest anzuziehen. Dreh die Schrauben zuerst von Hand ein. Dann zieh sie über Kreuz mit einem Drehmomentschlüssel fest, mit der Kraft für dieses Auto. Ein Rad, das nicht fest ist, kann sich beim Fahren lösen. Prüf das Profil und den Druck von jedem Reifen, den du in die Hand nimmst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Ich drehe sie zuerst von Hand ein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Du machst ein Rad wieder dran. Ein Kollege sagt: „Nimm den Schlagschrauber, das geht schneller.“ Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Dreh sie von Hand ein, dann nimm den Drehmomentschlüssel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Zieh sie mit dem Schlagschrauber fest an.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Dreh sie von Hand ein, und lass es so.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Ein Schlagschrauber kann eine Schraube zu fest oder nicht fest genug anziehen. Nur der Drehmomentschlüssel gibt die richtige Kraft.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Ölwechsel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliefilter': "der Ölfilter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliepeilstok': "der Ölmessstab (er zeigt, wie viel Öl drin ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opvangbak': "die Auffangwanne (sie fängt das alte Öl auf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trechter': "der Trichter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftapplug': "die Ölablassschraube", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olievat': "das Ölfass", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.1': "Stell die Auffangwanne unter den Motor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.2': "Dreh die Ölablassschraube heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.3': "Schau auf den Ölmessstab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.q': "Wie viel Öl muss rein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.a': "Vier Liter. Schau danach auf den Messstab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange': "Altöl kommt ins Fass, nicht in den Abfluss", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "Altöl ist schlecht für Wasser und Boden. Ein bisschen Öl kann viel Wasser verschmutzen. Fang also das ganze Altöl in der Auffangwanne auf, und gieß es in das Fass für Altöl. Gieß es nie in einen Abfluss oder ein Waschbecken. Alte Filter und ölige Lappen kommen in ihren eigenen Behälter. Heißes Öl kann deine Haut verbrennen: Lass den Motor zuerst etwas abkühlen, und trag Handschuhe. Wisch verschüttetes Öl sofort auf: Öl auf dem Boden ist rutschig. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Wohin kommt das Altöl?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "Die Auffangwanne ist voll mit Altöl. Das Fass steht am anderen Ende der Werkstatt. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Trag sie vorsichtig zum Fass.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Gieß sie draußen in den Abfluss.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Lass sie für später unter dem Auto stehen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "Altöl im Abfluss verschmutzt das Wasser. Eine volle Wanne unter einem Auto wird leicht umgetreten.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Bremsen und Licht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remschijf': "die Bremsscheibe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remblok': "der Bremsbelag", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koplamp': "der Scheinwerfer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remvloeistof': "die Bremsflüssigkeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remklauw': "der Bremssattel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlamp': "das Rücklicht", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.1': "Die Bremsbeläge sind abgenutzt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.2': "Prüf die Bremsflüssigkeit.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.3': "Das linke Rücklicht geht nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.q': "Muss die Bremsscheibe auch neu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.a': "Ja, sie ist zu dünn.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes': "Bremsen: zweimal prüfen", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Bremsen halten Menschen am Leben. Arbeite also ruhig, und prüf deine Arbeit zweimal. Tritt nach neuen Belägen oder Scheiben ein paar Mal auf das Bremspedal, bevor das Auto fährt: Beim ersten Treten geht das Pedal oft zu tief. Bremsflüssigkeit ist schlecht für deine Haut und für den Lack: Trag Handschuhe, und wisch Tropfen sofort weg. Blas Bremsstaub nicht mit Druckluft weg: Mach ihn mit Bremsenreiniger und einem Lappen sauber. Bevor das Auto rausfährt, prüf jedes Licht, auch die Bremslichter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Ich trete ein paar Mal auf das Bremspedal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Du hast neue Bremsbeläge eingebaut. Das Auto muss nach draußen. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Tritt ein paar Mal auf das Bremspedal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Fahr es sofort raus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Schieb es raus, ohne zu prüfen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Nach neuen Belägen kann das Pedal beim ersten Mal zu tief gehen. Dann hält das Auto nicht an.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Fehler auslesen und der Arbeitsauftrag", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diagnosecomputer': "das Diagnosegerät (es liest die Fehler des Autos aus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingslampje': "die Warnleuchte (am Armaturenbrett)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkorder': "der Arbeitsauftrag (was am Auto gemacht werden muss)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kentekenplaat': "das Nummernschild", // nieuw, nalezen // nagelezen AI 28 nov
    'w.autosleutel': "der Autoschlüssel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoelhoes': "der Sitzbezug (er hält den Sitz sauber)", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.1': "Schließ das Diagnosegerät an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.2': "Die Warnleuchte ist an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.3': "Leg einen Sitzbezug auf den Sitz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.q': "Was muss an diesem Auto gemacht werden?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.a': "Schau auf den Arbeitsauftrag.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis': "Behandle das Auto, als wäre es dein eigenes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Ein Kunde gibt dir sein Auto und seinen Schlüssel. Geh mit beidem sorgfältig um. Leg einen Sitzbezug auf den Sitz und eine Matte auf den Boden, bevor du einsteigst. Mach nur, was auf dem Arbeitsauftrag steht. Findest du noch etwas anderes, das nicht stimmt? Schreib es auf und sag es deinem Vorgesetzten: Der Kunde entscheidet. Leg den Schlüssel an seinen Platz, mit seinem Anhänger. Benutz nicht das Radio, das Telefon oder die Sachen im Auto. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Das steht nicht auf dem Arbeitsauftrag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Du machst einen Ölwechsel. Ein Reifen ist fast abgefahren. Das steht nicht auf dem Arbeitsauftrag. Was machst du?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Schreib es auf, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Wechsle den Reifen sofort.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Sag nichts: Das ist nicht deine Aufgabe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "Der Kunde entscheidet, was gemacht und bezahlt wird. Aber er muss wissen, dass der Reifen gefährlich ist.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Mähen und Schneiden", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mowing': "Rasen mähen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gras': "das Gras, der Rasen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maaien': "mähen (Gras schneiden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grasmaaier': "der Rasenmäher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zitmaaier': "der Aufsitzmäher (ein Mäher, auf dem du sitzt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bosmaaier': "die Motorsense (ein Mäher an einem langen Stiel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gelaatsscherm': "der Gesichtsschutz, das Visier", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.1': "Mäh zuerst das Gras am Rand.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.2': "Das Gras ist zu nass. Wir mähen morgen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.3': "Setz deinen Gesichtsschutz auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.q': "Darf ich den Aufsitzmäher nehmen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.a': "Ja, aber räum zuerst die Steine weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing': "Steine fliegen weit", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.b': "Ein Mäher oder eine Motorsense kann einen Stein sehr weit und sehr hart wegschleudern. Geh also zuerst über das Gras, und räum Steine, Glas und Äste weg. Trag deinen Gesichtsschutz oder eine Schutzbrille, Gehörschutz und Sicherheitsschuhe. Halte andere Leute weit weg. Kommt jemand näher? Halt die Maschine an. Steck nie deine Hand unter einen Mäher, während der Motor läuft: Mach ihn aus, und warte, bis das Messer stillsteht. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.p': "Würden Sie bitte Abstand halten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.s': "Du arbeitest mit der Motorsense. Ein Mann mit einem Hund kommt auf dich zu. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o1': "Halt die Maschine an, bis er vorbei ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o2': "Mach weiter: Er sieht dich ja.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o3': "Dreh dich von ihm weg, und mach weiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.w': "Ein Stein aus einer Motorsense kann jemanden schwer verletzen, auch aus großer Entfernung.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pruning': "Schneiden von Sträuchern", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeien': "schneiden, zurückschneiden (Äste von einer Pflanze abschneiden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeischaar': "die Gartenschere, die Astschere", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tak': "der Ast, der Zweig", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struik': "der Strauch, der Busch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boom': "der Baum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeizaag': "die Astsäge", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.1': "Schneid die Sträucher am Weg zurück.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.2': "Dieser Ast ist tot. Säg ihn ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.3': "Leg die Äste auf einen Haufen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.q': "Welche Äste müssen ab?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.a': "Nur die toten Äste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning': "Ein glatter Schnitt heilt am besten", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.b': "Schneide mit einer scharfen, sauberen Schere. Ein glatter Schnitt heilt schnell; ein abgerissener Ast wird krank. Schneide kurz über einer Knospe oder einem Seitenast, und lass kein langes Stück stehen. Schneide zuerst die toten und abgebrochenen Äste ab. Halte deine andere Hand weg von den Klingen. Trag Handschuhe: Manche Pflanzen haben Dornen oder machen deine Haut rot. Mach die Schere nach der Arbeit sauber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.p': "Wo muss ich schneiden?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.s': "Deine Gartenschere ist stumpf. Sie reißt die Äste ab. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o1': "Frag nach einer scharfen Schere.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o2': "Zieh fester am Ast.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o3': "Mach weiter: Es ist ja nur ein Strauch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.w': "Eine stumpfe Schere reißt den Ast ab. Die Pflanze wird krank, und du musst dich mehr anstrengen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hedge': "Die Hecke schneiden", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heg': "die Hecke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heggenschaar': "die Heckenschere (eine Maschine, die eine Hecke schneidet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruiwagen': "die Schubkarre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hark': "der Rechen, die Harke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeiafval': "der Grünschnitt (abgeschnittene Äste und Blätter)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeil': "die Plane (ein großes Tuch aus Plastik)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.1': "Leg die Plane unter die Hecke.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.2': "Schneid die Hecke schön gerade.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.3': "Bring den Grünschnitt mit der Schubkarre weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.q': "Wie hoch muss die Hecke bleiben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.a': "Bis zur Schnur. Nicht tiefer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge': "Schau zuerst nach Nestern", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.b': "Im Frühling und Sommer bauen Vögel Nester in Hecken und Sträuchern. Nester, die Vögel benutzen, sind geschützt. Schau also in die Hecke, bevor du schneidest. Siehst du ein Nest mit Eiern oder jungen Vögeln? Schneide dort nicht, und sag es deinem Vorgesetzten. Halt die Heckenschere mit beiden Händen. Steh fest auf dem Boden oder auf einer guten Leiter, nie auf einem Stuhl oder einem Eimer. Halte das Kabel hinter dir.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.p': "Hier ist ein Nest.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.s': "Du schneidest im Mai eine Hecke. Du siehst ein Nest mit jungen Vögeln. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o1': "Hör dort auf, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o2': "Schneide vorsichtig drumherum.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o3': "Nimm das Nest heraus, und mach weiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.w': "Nester, die Vögel benutzen, sind geschützt. Dein Vorgesetzter entscheidet, was mit diesem Teil der Hecke passiert.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.chainsaw': "Die Kettensäge und der Laubbläser", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kettingzaag': "die Kettensäge, die Motorsäge", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stam': "der Stamm (eines Baumes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaagbroek': "die Schnittschutzhose (sie stoppt die Kette)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladblazer': "der Laubbläser", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladeren': "die Blätter, das Laub", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jerrycan': "der Kanister (für Benzin)", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.1': "Zieh deine Schnittschutzhose an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.2': "Blas die Blätter auf einen Haufen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.3': "Tank nur, wenn der Motor kalt ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.q': "Darf ich mit der Kettensäge arbeiten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.a': "Noch nicht. Zuerst machst du einen Kurs.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw': "Kettensäge nur mit Ausbildung", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.b': "Eine Kettensäge ist eines der gefährlichsten Werkzeuge in der Grünpflege. Arbeite nur damit, wenn du einen Kurs gemacht hast und dein Vorgesetzter sagt, dass du darfst. Trag immer eine Schnittschutzhose, einen Helm mit Gesichtsschutz und Gehörschutz, Handschuhe und Sicherheitsstiefel. Arbeite nie allein mit einer Kettensäge. Halt sie mit beiden Händen, und säg nie über deinen Schultern. Beim Laubbläser: Blas nie in Richtung von Menschen, Autos oder offenen Fenstern. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.p': "Ich habe dafür noch keinen Kurs gemacht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.s': "Ein Kollege sagt: „Nimm die Kettensäge, das ist einfach.“ Du hast nie einen Kurs gemacht. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o1': "Sag, dass du noch keinen Kurs gemacht hast.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o2': "Probier es vorsichtig, nur einmal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o3': "Nimm sie, und schau dir zuerst ein Video an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.w': "Eine Kettensäge kann dein Bein in einer Sekunde aufschneiden. Ohne Ausbildung weißt du nicht, wie sie zurückschlagen kann.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.planting': "Pflanzen, Unkraut und die Straße", // nieuw, nalezen // nagelezen AI 28 nov
    'l.weeding': "Unkraut jäten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruid': "das Unkraut (Pflanzen, die weg müssen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wieden': "jäten (Unkraut herausziehen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoffel': "die Hacke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perk': "das Beet, das Blumenbeet", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruidbrander': "der Unkrautbrenner (er tötet Unkraut mit Hitze)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wortel': "die Wurzel (einer Pflanze)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.1': "Zieh das Unkraut heraus, mit der Wurzel.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.2': "Hack das Beet am Eingang.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.3': "Vorsicht: Der Unkrautbrenner ist heiß.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.q': "Ist das Unkraut?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.a': "Nein, das ist eine Pflanze. Lass sie stehen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding': "Unkraut: Die Wurzel muss raus", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.b': "Unkraut wächst wieder, wenn die Wurzel im Boden bleibt. Zieh es also mit der Wurzel heraus, oder hack knapp unter der Erde. Arbeite, wenn die Erde ein bisschen nass ist: Dann kommt die Wurzel leicht heraus. Benutz keine Sprühmittel gegen Unkraut, außer du hast gelernt, wie das geht, und dein Vorgesetzter sagt es. Ein Unkrautbrenner ist sehr heiß: Halt ihn weg von trockenem Gras, Blättern, Hecken, Autos und Mülltonnen. Leg ihn nie hin, während er brennt. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.p': "Ist das Unkraut oder eine Pflanze?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.s': "Du arbeitest mit dem Unkrautbrenner. Neben dem Weg steht eine trockene Hecke. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o1': "Zieh das Unkraut dort mit der Hand heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o2': "Brenn schnell, und geh weiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o3': "Brenn, und schau einmal zurück.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.w': "Eine trockene Hecke fängt schnell Feuer. Ein Feuer in der Nähe von Häusern oder Autos ist sehr gefährlich.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.planting': "Pflanzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planten': "pflanzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schep': "die Schaufel, der Spaten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantgat': "das Pflanzloch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluit': "der Wurzelballen (die Erde um die Wurzeln)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compost': "der Kompost", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boompaal': "der Baumpfahl (ein Pfahl, der einen jungen Baum hält)", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.1': "Grab ein Pflanzloch für den Baum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.2': "Stell den Baum gerade, neben den Pfahl.", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.3': "Gib den neuen Pflanzen viel Wasser.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.q': "Wohin kommt diese Pflanze?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.a': "Hinten ins Beet, an der Mauer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting': "Unter der Erde: Kabel und Leitungen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.b': "Unter dem Gras und dem Pflaster liegen oft Kabel und Leitungen: für Strom, Gas, Wasser und Internet. Grab also vorsichtig. Siehst du ein farbiges Band oder eine Platte aus Plastik in der Erde, oder stößt du auf etwas Hartes? Hör auf zu graben, und sag es deinem Vorgesetzten. Grab nie mit Gewalt weiter. Heb einen schweren Baum oder einen großen Wurzelballen zu zweit, mit gebeugten Knien. Gib einer neuen Pflanze noch am selben Tag Wasser. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.p': "Ich stoße auf etwas Hartes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.s': "Du gräbst ein Pflanzloch. Deine Schaufel trifft ein rotes Band aus Plastik. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o1': "Hör auf zu graben, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o2': "Grab vorsichtig weiter, neben dem Band.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o3': "Zieh das Band heraus, und mach weiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.w': "Ein Band in der Erde warnt, dass darunter ein Kabel oder eine Leitung liegt. Eine Gasleitung oder ein Stromkabel ist sehr gefährlich.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roadside': "Arbeiten an der Straße", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pion': "der Leitkegel, das Hütchen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkeer': "der Verkehr", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoep': "der Gehweg (der Weg neben der Straße)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fietser': "der Radfahrer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijlwagen': "der Warnanhänger (ein Anhänger mit einem großen Pfeil, der Autofahrer warnt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.berm': "der Grünstreifen, der Straßenrand (das Gras neben der Straße)", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.1': "Zieh deine Weste an. Wir arbeiten an der Straße.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.2': "Stell die Hütchen hinter den Lieferwagen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.3': "Pass auf die Radfahrer auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.q': "Kann ich jetzt rübergehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.a': "Nein, warte. Da kommt ein Lkw.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside': "An der Straße: Sei sichtbar, bleib hinter den Hütchen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.b': "Arbeit an der Straße ist gefährlich: Autofahrer schauen auf ihr Handy oder fahren zu schnell. Trag also immer deine Warnweste, auch bei einer kurzen Arbeit. Stell die Hütchen und die Schilder auf, bevor du anfängst, und räum sie als Letztes weg. Park den Lieferwagen als Schutz zwischen dir und dem Verkehr. Bleib hinter den Hütchen. Geh nie rückwärts, ohne zu schauen, und arbeite mit dem Gesicht zum Verkehr, wenn das geht. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.p': "Zuerst stelle ich die Hütchen auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.s': "Du musst einen kleinen Strauch an der Straße schneiden. Das dauert fünf Minuten. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o1': "Zieh die Weste an, und stell die Hütchen auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o2': "Mach es schnell, ohne die Hütchen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o3': "Bitte einen Kollegen, auf die Autos zu achten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.w': "Ein Unfall dauert nur eine Sekunde. Fünf Minuten ohne Hütchen sind fünf Minuten ohne Schutz.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.litter': "Müll und das Wohnviertel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwerfafval': "der Müll auf der Straße (Abfall, der herumliegt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grijper': "die Greifzange (ein Stock, der Müll greift)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniszak': "der Müllsack", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherven': "die Scherben (scharfe Stücke Glas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhanger': "der Anhänger", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewoner': "der Anwohner (jemand, der hier wohnt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.1': "Heb den Müll mit der Greifzange auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.2': "Vorsicht, hier liegen Scherben.", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.3': "Stell die Müllsäcke an den Anhänger.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.q': "Wann wird dieser Baum geschnitten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.a': "Das weiß ich nicht. Fragen Sie bei der Gemeinde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter': "Fass nie eine Nadel an", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.b': "In Parks und Büschen findest du manchmal eine Nadel von einer Spritze. Heb sie nie mit der Hand auf, auch nicht mit Handschuhen. Nimm die Greifzange, und steck die Nadel in eine harte Dose oder Flasche mit Deckel, nie in einen Müllsack. Sag es deinem Vorgesetzten. Hast du dich an einer Nadel gestochen? Wasch die Wunde mit viel Wasser, und ruf sofort einen Arzt an. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.p': "Hier liegt eine Nadel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.s': "Du siehst eine Nadel im Gras, neben einer Bank. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o1': "Heb sie mit der Greifzange auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o2': "Heb sie mit Handschuhen auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o3': "Steck sie in den Müllsack.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.w': "Eine Nadel kann eine Krankheit übertragen. Handschuhe halten eine Nadel nicht auf, und eine harte Dose schützt die anderen.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.frontdesk': "Empfang, Post und Besprechungen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.reception': "Am Empfang", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balie': "der Empfang, der Schalter, die Theke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoeker': "der Besucher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intercom': "die Gegensprechanlage (du sprichst mit jemandem an der Tür)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorverbinden': "durchstellen, verbinden (einen Anruf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toestel': "die Durchwahl (eine Telefonnummer im Gebäude)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachtruimte': "der Wartebereich", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.1': "Guten Morgen, kann ich Ihnen helfen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.2': "Ich stelle Sie durch.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.3': "Bitte nehmen Sie im Wartebereich Platz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.q': "Ich habe einen Termin mit Frau Jansen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.a': "Einen Moment. Ich rufe sie kurz an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception': "Du bist das erste Gesicht", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.b': "Am Empfang bist du die erste Person, die ein Besucher trifft. Schau auf, lächle und grüß, auch wenn du gerade telefonierst. Sag „u“ zu Besuchern. Melde dich am Telefon mit dem Namen der Firma und deinem eigenen Namen. Weißt du die Antwort nicht? Sag das, und such jemanden, der es weiß. Gib nie Namen, Telefonnummern oder Räume von Mitarbeitern an Leute, die du nicht kennst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.p': "Guten Morgen, wie kann ich Ihnen helfen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.s': "Du telefonierst. Ein Besucher kommt zum Empfang und wartet. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o1': "Schau auf, und zeig, dass du gleich kommst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o2': "Telefonier zu Ende, ohne aufzuschauen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o3': "Leg sofort auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.w': "Ein Besucher, der gesehen wird, wartet ruhig. Ein Besucher, der nicht gesehen wird, fühlt sich nicht willkommen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.visitors': "Besucher empfangen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoekerspasje': "der Besucherausweis", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lift': "der Aufzug", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garderobe': "die Garderobe (wo du deine Jacke aufhängst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeerplaats': "der Parkplatz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hal': "die Halle, die Eingangshalle (der große Raum am Eingang)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiden': "begleiten (mit jemandem irgendwohin gehen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.1': "Würden Sie hier Ihren Namen schreiben?", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.2': "Hier ist Ihr Besucherausweis.", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.3': "Ich bringe Sie zum Aufzug.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.q': "Wo kann ich meine Jacke lassen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.a': "In der Garderobe, neben dem Aufzug.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors': "Jeder Besucher meldet sich an", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.b': "Jeder Besucher schreibt seinen Namen auf die Liste oder meldet sich am Bildschirm an, und bekommt einen Besucherausweis. Dann weißt du, wer im Gebäude ist. Das ist wichtig, wenn es brennt: Alle müssen raus, und jemand prüft die Liste. Am Ende des Besuchs gibt der Besucher den Ausweis zurück. Lass keine Leute hinter dir herein, die du nicht kennst: Frag freundlich, zu wem sie wollen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.p': "Zu wem möchten Sie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.s': "Ein Mann kommt hinter einem Kollegen herein. Er hat keinen Ausweis. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o1': "Frag ihn freundlich, zu wem er will.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o2': "Lass ihn gehen: Er ist mit einem Mitarbeiter gekommen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o3': "Ruf sofort die Polizei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.w': "In einem Notfall musst du wissen, wer drinnen ist. Und nicht jeder, der hereinkommt, hat einen Grund, dort zu sein.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mailroom': "Post und Pakete", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkamer': "die Poststelle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koerier': "der Kurier (jemand, der Pakete bringt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postvak': "das Postfach (ein Fach für Post, eins pro Person)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.envelop': "der Briefumschlag", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdeling': "die Abteilung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkar': "der Postwagen", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.1': "Der Kurier bringt ein Paket.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.2': "Leg die Briefe in das richtige Postfach.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.3': "Dieses Paket ist beschädigt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.q': "Für wen ist dieses Paket?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.a': "Für die Finanzabteilung, im zweiten Stock.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom': "Post ist privat", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.b': "Post und Pakete sind privat. Mach nie einen Brief oder ein Paket für jemand anderen auf. Prüf auf jedem Stück den Namen und die Abteilung, und leg es in das richtige Postfach. Wenn ein Kurier ein Paket bringt, schau es an, bevor du unterschreibst: Ist es beschädigt? Schreib das auf. Ist ein Paket komisch: Es riecht, es leckt, oder es hat keinen Absender? Mach es nicht auf, und sag es deinem Vorgesetzten. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.p': "Der Karton ist nass und kaputt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.s': "Ein Kurier bringt ein Paket. Eine Ecke ist nass und aufgerissen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o1': "Schreib den Schaden auf, bevor du unterschreibst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o2': "Unterschreib, und sag es niemandem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o3': "Mach es auf, um zu sehen, ob alles drin ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.w': "Nach deiner Unterschrift sieht es so aus, als wäre das Paket in Ordnung gewesen. Dann bezahlt niemand den Schaden.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.meetingroom': "Einen Besprechungsraum vorbereiten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergaderzaal': "der Besprechungsraum, der Sitzungssaal", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beamer': "der Beamer, der Projektor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.whiteboard': "das Whiteboard", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermoskan': "die Thermoskanne (sie hält Kaffee heiß)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kopje': "die Tasse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koffieautomaat': "der Kaffeeautomat", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.1': "Stell zehn Stühle um den Tisch.", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.2': "Mach Kaffee und Tee fertig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.3': "Der Beamer funktioniert nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.q': "Um wie viel Uhr fängt die Besprechung an?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.a': "Um zehn. Sorg dafür, dass alles bereit ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom': "Fertig vor dem ersten Gast", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.b': "Ein Besprechungsraum muss fertig sein, bevor die erste Person hereinkommt. Prüf die Stühle, den Tisch, den Beamer und die Kabel. Stell Kaffee, Tee und Wasser hin, mit Tassen und Milch. Trag heiße Getränke vorsichtig, und nie über Menschen hinweg. Mach nach der Besprechung den Tisch sauber, und räum alles weg. Was du in einem Besprechungsraum hörst, behältst du für dich.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.p': "Der Raum ist fertig.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.s': "Die Besprechung fängt in fünf Minuten an. Der Beamer funktioniert nicht. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o1': "Sag es sofort der Person, die die Besprechung organisiert.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o2': "Warte: Vielleicht braucht ihn niemand.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o3': "Leg einen Zettel auf den Tisch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.w': "Fünf Minuten sind noch genug Zeit, um es zu reparieren oder einen anderen Raum zu finden. Später warten alle.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.maintenance': "Störungen, Reparaturen und Umzüge", // nieuw, nalezen // nagelezen AI 28 nov
    'l.faults': "Eine Störung melden", // nieuw, nalezen // nagelezen AI 28 nov
    'w.melding': "die Meldung (du sagst, dass etwas nicht stimmt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekkage': "das Leck, der Wasserschaden (Wasser kommt heraus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verwarming': "die Heizung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.airco': "die Klimaanlage", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvoer': "der Abfluss", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstopt': "verstopft (nichts geht mehr durch)", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.1': "Ich melde die Störung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.2': "In der Küche ist ein Leck.", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.3': "Der Abfluss der Toilette ist verstopft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.q': "Warum ist es hier so kalt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.a': "Die Heizung ist kaputt. Der Techniker kommt morgen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults': "Melde es, repariere es nicht allein", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.b': "Siehst du etwas Kaputtes, zum Beispiel ein Leck, eine Lampe, die nicht brennt, oder eine Tür, die nicht zugeht? Melde es, auch wenn es klein ist: im System oder bei deinem Vorgesetzten. Sag, wo es ist, was du siehst und seit wann. Repariere Strom, Gas oder Heizung nicht selbst. Riechst du Gas? Benutz keinen Schalter und kein Telefon in der Nähe, mach die Fenster auf, bring die Leute nach draußen, und ruf draußen um Hilfe. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.p': "Ich möchte eine Störung melden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.s': "Im Flur tropft Wasser von der Decke. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o1': "Melde es, und stell einen Eimer darunter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o2': "Warte: Vielleicht hört es von selbst auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o3': "Mach die Decke auf, um nachzuschauen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.w': "Ein kleines Leck kann zu einem großen Schaden werden. Ein Eimer hält den Boden trocken, damit niemand ausrutscht.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.repairs': "Kleine Reparaturen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervangen': "austauschen, ersetzen (ein neues Teil einsetzen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurklink': "die Türklinke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scharnier': "das Scharnier", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschapskist': "der Werkzeugkasten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rookmelder': "der Rauchmelder", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batterij': "die Batterie", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.1': "Wechsle die Lampe im Flur aus.", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.2': "Die Türklinke ist locker.", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.3': "Nimm die Trittleiter, keinen Stuhl.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.q': "Piept der Rauchmelder?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.a': "Ja, die Batterie ist fast leer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs': "Eine Trittleiter, nie ein Stuhl", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.b': "Für eine Lampe oder ein hohes Regal nimm eine Trittleiter, nie einen Stuhl, einen Tisch oder eine Kiste. Stell sie auf einen ebenen Boden, mach sie ganz auf, und stell dich nicht auf die oberste Stufe. Mach das Licht aus, bevor du eine Lampe wechselst, und lass eine alte Lampe abkühlen. Mach nur die Reparaturen, die du gelernt hast. Leg dein Werkzeug zurück in den Werkzeugkasten, wenn du fertig bist, damit niemand darüber stolpert. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.p': "Ich hole die Trittleiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.s': "Eine Lampe im Büro ist kaputt. Die Trittleiter ist in einem anderen Stockwerk. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o1': "Hol die Trittleiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o2': "Stell dich auf einen Bürostuhl.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o3': "Stell dich auf den Schreibtisch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.w': "Ein Stuhl kann wegrollen oder umkippen. Ein Sturz von einem Stuhl kann dich schwer verletzen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.moving': "Einen Arbeitsplatz umziehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdoos': "der Umzugskarton", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureau': "der Schreibtisch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureaustoel': "der Bürostuhl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkplek': "der Arbeitsplatz (der Schreibtisch, an dem jemand arbeitet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamernummer': "die Raumnummer, die Zimmernummer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plattegrond': "der Grundriss, der Lageplan (eine Karte des Gebäudes)", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.1': "Schreib die Raumnummer auf jeden Karton.", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.2': "Stell die Kartons auf die Sackkarre.", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.3': "Räum den Arbeitsplatz leer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.q': "Wohin muss dieser Schreibtisch?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.a': "In Raum zwölf. Schau auf den Grundriss.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving': "Umzug: klug heben, alles beschriften", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.b': "Ein Umzug ist schwere Arbeit. Füll einen Karton nicht zu voll: Bücher und Ordner sind schwer. Heb mit gebeugten Knien und geradem Rücken, nah am Körper. Nimm für mehrere Kartons die Sackkarre, und heb einen Schreibtisch zu zweit. Schreib die neue Raumnummer auf jeden Karton, jeden Stuhl und jeden Computer. Zieh zuerst die Kabel heraus. Stell nie Kartons in einen Flur oder vor einen Notausgang.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.p': "Kannst du mir helfen, das zu heben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.s': "Du musst einen schweren Schreibtisch umstellen. Dein Kollege macht gerade Pause. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o1': "Warte auf Hilfe, und heb ihn zu zweit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o2': "Zieh ihn allein über den Boden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o3': "Heb ihn allein, sehr vorsichtig.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.w': "Ein schwerer Schreibtisch kann deinem Rücken schaden, wenn du ihn allein hebst. Zu zweit ist es leicht und sicher.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.closing': "Das Gebäude auf- und abschließen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelbos': "der Schlüsselbund", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiten': "abschließen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ronde': "der Rundgang (du gehst an jedem Raum vorbei)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raam': "das Fenster", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmcode': "der Alarmcode", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtslot': "das Nachtschloss (das extra Schloss für die Nacht)", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.1': "Ich mache den letzten Rundgang durch das Gebäude.", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.2': "Sind alle Fenster zu?", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.3': "Schließ die Tür mit dem Nachtschloss ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.q': "Ist noch jemand drinnen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.a': "Nein, alle sind gegangen. Ich schließe ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing': "Der Alarmcode ist geheim", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.b': "Am Ende des Tages machst du den letzten Rundgang. Prüf, dass niemand mehr drinnen ist, dass die Fenster zu sind und die Lichter aus. Die Notausgänge bleiben frei. Behalte die Schlüssel bei dir, nie in einer Schublade. Der Alarmcode ist geheim: Gib ihn nie jemandem, auch nicht am Telefon. Geht der Alarm los? Folge den Schritten deiner Firma. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.p': "Den Alarmcode gebe ich nicht weiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.s': "Jemand ruft an: „Ich bin von der Alarmfirma. Wie ist Ihr Code?“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o1': "Sag Nein, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o2': "Gib den Code: Er klingt nett.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o3': "Gib nur die Hälfte des Codes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.w': "Eine echte Alarmfirma fragt nicht am Telefon nach deinem Code. Ein Dieb vielleicht schon.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.guarding': "Rundgänge und Zugang", // nieuw, nalezen // nagelezen AI 28 nov
    'l.patrol': "Der Rundgang", // nieuw, nalezen // nagelezen AI 28 nov
    'w.surveilleren': "patrouillieren, Streife gehen (herumgehen und aufpassen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaklamp': "die Taschenlampe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terrein': "das Gelände (das Land um ein Gebäude)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hek': "der Zaun, das Tor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbraak': "der Einbruch (jemand dringt ein, um zu stehlen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openstaan': "offen stehen (eine Tür oder ein Fenster, das zu sein sollte)", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.1': "Ich mache alle zwei Stunden einen Rundgang.", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.2': "Das Tor hinter der Halle steht offen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.3': "Nimm deine Taschenlampe mit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.q': "Hast du bei deinem Rundgang etwas gesehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.a': "Ja. Ein Fenster an der Hintertür stand offen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol': "Schau und melde, spiel nicht den Helden", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.b': "Auf deinem Rundgang schaust du: Sind Türen und Fenster zu, ist der Zaun ganz, ist jemand da, der nicht da sein sollte? Schreib auf, was du siehst, mit der Uhrzeit. Siehst du etwas Komisches, zum Beispiel ein kaputtes Fenster oder eine Person in der Nacht? Geh nicht allein hinein. Ruf über Funk oder Telefon die Leitstelle oder die Polizei, und warte an einem sicheren Ort. Deine eigene Sicherheit kommt zuerst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.p': "Ich sehe jemanden am Zaun.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.s': "In der Nacht siehst du eine Tür, die aufgebrochen ist. Drinnen hörst du Geräusche. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o1': "Bleib draußen, und ruf Hilfe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o2': "Geh schnell hinein, und schau nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o3': "Ruf hinein, dass du kommst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.w': "Ein Dieb drinnen kann gefährlich sein. Die Polizei weiß, was zu tun ist; deine Aufgabe ist sehen und melden.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.access': "Zugangskontrolle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagboom': "die Schranke (eine Stange über der Straße, die hochgeht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegangspas': "die Zugangskarte (eine Karte, die die Tür öffnet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.legitimatie': "der Ausweis (ein Pass oder ein Personalausweis)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaihek': "das Drehkreuz (ein Tor, das sich dreht, für eine Person auf einmal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kenteken': "das Kennzeichen (die Buchstaben und Zahlen eines Autos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegang': "der Zugang (du darfst hinein)", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.1': "Darf ich Ihren Ausweis sehen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.2': "Ihre Karte funktioniert nicht. Ich rufe kurz an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.3': "Ich mache die Schranke auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.q': "Darf ich rein? Ich habe meine Karte vergessen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.a': "Tut mir leid, ohne Karte dürfen Sie nicht hinein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access': "Kein Ausweis, kein Zutritt", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.b': "Am Tor oder am Empfang prüfst du, wer hereinkommt. Jeder braucht einen Ausweis oder muss auf der Liste stehen. Sei freundlich, auch wenn jemand wütend ist oder es eilig hat. Mach keine Ausnahme, weil jemand sagt, er sei der Chef: Prüf es nach. Leih deinen eigenen Ausweis nie jemandem, und lass nie jemanden hinter dir hereingehen. Ein verlorener Ausweis muss sofort gemeldet werden. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.p': "Darf ich Ihre Karte sehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.s': "Ein Mann im Anzug sagt: „Ich bin der neue Direktor. Ich habe noch keinen Ausweis.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o1': "Prüf es nach, bevor du ihn hereinlässt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o2': "Lass ihn herein: Er sieht wichtig aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o3': "Gib ihm deinen eigenen Ausweis.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.w': "Jeder kann sagen, dass er der Direktor ist. Eine kurze Prüfung hält das Gebäude sicher, und ein echter Direktor versteht das.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cameras': "Kameras und die Leitstelle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldkamer': "die Leitstelle, die Zentrale (wo Leute die Kameras beobachten und Anrufe annehmen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beeldscherm': "der Monitor, der Bildschirm", // nieuw, nalezen // nagelezen AI 28 nov
    'w.camerabeelden': "die Kamerabilder, die Aufnahmen (was die Kamera gefilmt hat)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inzoomen': "heranzoomen, hineinzoomen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewegingsmelder': "der Bewegungsmelder (er merkt, wenn sich etwas bewegt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdachte': "der Verdächtige", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.1': "Auf Kamera drei sehe ich jemanden am Zaun.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.2': "Ich zoome heran.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.3': "Die Leitstelle ruft die Polizei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.q': "Was siehst du auf dem Bildschirm?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.a': "Einen Mann am Zaun. Ich schicke einen Kollegen hin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras': "Kamerabilder sind privat", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.b': "Kameras filmen Menschen: Mitarbeiter, Besucher und Leute, die vorbeigehen. Was du auf den Bildschirmen siehst, ist privat. Schau nur für deine Arbeit hin, und filme den Bildschirm nie mit deinem Handy. Schick nie Aufnahmen an Freunde, und stell sie nie online. Gibt es einen Vorfall? Schreib die Kamera und die Uhrzeit auf, und sag es deinem Vorgesetzten. Nur deine Firma entscheidet, wer die Aufnahmen bekommt, zum Beispiel die Polizei. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.p': "Das darf ich nicht zeigen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.s': "Ein Kollege bittet dich, ihm ein lustiges Video von den Kameras zu schicken. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o1': "Sag Nein: Die Aufnahmen sind privat.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o2': "Schick es, nur an ihn.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o3': "Filme den Bildschirm mit deinem Handy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.w': "Die Menschen auf den Aufnahmen haben nicht zugestimmt, dass sie geteilt werden. Wenn du sie verschickst, kann dich das deine Stelle kosten.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.report': "Das Funkgerät und der Bericht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portofoon': "das Funkgerät, das Walkie-Talkie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapport': "der Bericht (was passiert ist, aufgeschrieben)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.incident': "der Vorfall (etwas, das schiefgegangen ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijdstip': "der Zeitpunkt, die Uhrzeit (wann etwas passiert ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.logboek': "das Logbuch, das Wachbuch (ein Buch oder eine App, in dem du alles aufschreibst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oproepen': "rufen, anfunken (über Funk)", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.1': "Ich schreibe einen Bericht über den Vorfall.", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.2': "Wie spät war es genau?", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.3': "Ich verstehe dich schlecht. Sag es noch einmal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.q': "Was muss in den Bericht?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.a': "Was passiert ist, wo und um wie viel Uhr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report': "Schreib es sofort auf", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.b': "Schreib einen Bericht direkt nach einem Vorfall, solange du dich noch gut erinnerst. Schreib, was du selbst gesehen und gehört hast: was passiert ist, wo, um wie viel Uhr und wer da war. Schreib Tatsachen, nicht, was du denkst. Sprich über Funk kurz und klar, und warte, bis der andere fertig ist. Sag, wer du bist und wo du bist. Ein guter Bericht hilft der Polizei, deiner Firma und dir.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.p': "Ich schreibe es sofort auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.s': "Nach einer anstrengenden Nacht bist du sehr müde. Es gab einen kleinen Vorfall. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o1': "Schreib den Bericht, bevor du nach Hause gehst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o2': "Schreib ihn morgen, wenn du gut geschlafen hast.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o3': "Lass es: Es war ja nur klein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.w': "Morgen vergisst du Einzelheiten. Ein Bericht ohne Uhrzeit oder Ort hilft niemandem.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.incidents': "Notfälle und der Laden", // nieuw, nalezen // nagelezen AI 28 nov
    'l.evacuation': "Feuer und Räumung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmelder': "der Feuermelder, der Druckknopfmelder (ein roter Kasten, den du drückst, wenn es brennt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandweer': "die Feuerwehr", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddeur': "die Brandschutztür (sie hält Feuer und Rauch auf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmeldcentrale': "die Brandmeldezentrale (sie zeigt, wo der Alarm ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontruimingsplan': "der Räumungsplan (wer was macht, wenn alle raus müssen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sirene': "die Sirene", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.1': "In Halle zwei ist Feueralarm.", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.2': "Halte die Brandschutztüren geschlossen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.3': "Ich warte am Eingang auf die Feuerwehr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.q': "Sind alle draußen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.a': "Nein, zwei Leute von der Liste fehlen noch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation': "Feuer: zuerst Alarm, dann raus", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.b': "Siehst du Feuer oder Rauch? Drück den Feuermelder, oder ruf 112 an. Hilf dann den Leuten über die Fluchtwege nach draußen, nie mit dem Aufzug. Mach die Türen hinter dir zu, aber schließ sie nicht ab. Lösch ein Feuer nur, wenn es klein ist und du gelernt hast, wie das geht. Geh zum Sammelplatz, und zähl, wer da ist. Warte am Eingang auf die Feuerwehr, und sag ihr, was du weißt. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.p': "Alle nach draußen, zum Sammelplatz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.s': "Der Feueralarm geht los. Ein Mann will den Aufzug nehmen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o1': "Schick ihn zur Treppe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o2': "Lass ihn: Der Aufzug ist schneller.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o3': "Fahr mit ihm im Aufzug.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.w': "Bei einem Brand kann der Aufzug stecken bleiben oder sich mit Rauch füllen. Die Treppe ist der sichere Weg nach draußen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.firstaid': "Erste Hilfe und 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ehbo': "die Erste Hilfe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aed': "der AED, der Defibrillator (ein Gerät, das einem Herz hilft, das stehen geblieben ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reanimeren': "wiederbeleben (auf die Brust drücken, um ein Leben zu retten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewusteloos': "bewusstlos (die Person wacht nicht auf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ademen': "atmen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmnummer': "die Notrufnummer (112)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.1': "Ruf 112 an. Frag nach einem Krankenwagen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.2': "Hol den AED vom Empfang.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.3': "Er atmet nicht. Ich fange mit der Wiederbelebung an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.q': "Wo ist der AED?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.a': "Am Eingang, neben dem Aufzug.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid': "Ruf 112, fang mit der Wiederbelebung an, hol den AED", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.b': "Jemand fällt um und reagiert nicht? Ruf sofort 112 an, oder lass jemand anderen anrufen. Prüf, ob die Person normal atmet. Wenn nicht: Fang mit der Wiederbelebung an, und lass jemanden den AED holen. Der AED spricht und sagt dir, was du tun musst; du kannst nichts falsch machen. Mach weiter, bis der Rettungsdienst übernimmt. Hast du einen Erste-Hilfe-Kurs? Sag es deinen Kollegen, damit sie wissen, wen sie rufen können.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.p': "Ruf 112 an und hol den AED.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.s': "Ein Mann fällt in der Halle hin. Er bewegt sich nicht und atmet nicht. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o1': "Ruf 112 an, und fang mit der Wiederbelebung an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o2': "Warte ab, ob er aufwacht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o3': "Heb ihn hoch, und setz ihn auf einen Stuhl.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.w': "Wenn das Herz stehen bleibt, zählt jede Minute. Wiederbelebung und ein AED können ein Leben retten, bevor der Krankenwagen kommt.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shoplifting': "Ladendiebstahl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkeldiefstal': "der Ladendiebstahl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heterdaad': "auf frischer Tat (du siehst, wie es passiert)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhouden': "festhalten (jemanden, bis die Polizei kommt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.detectiepoortje': "die Diebstahlsicherung, das Sicherungstor (es piept an der Tür)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmlabel': "das Sicherungsetikett (es lässt das Tor piepen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstoppen': "verstecken", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.1': "Das Tor am Ausgang piept.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.2': "Ich habe gesehen, wie es passiert ist.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.3': "Ich halte ihn fest, bis die Polizei kommt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.q': "Darf ich seine Tasche durchsuchen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.a': "Nein. Das macht die Polizei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting': "Ladendiebstahl: beobachten, melden, keine grobe Gewalt", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.b': "Hast du gesehen, dass jemand stiehlt? Bleib ruhig, und ruf sofort die Polizei. Manche Läden lassen einen Wachmann einen Dieb festhalten, bis die Polizei kommt; andere sagen: nur beobachten, melden und dir merken, wie die Person aussieht. Schlag und tritt nie, und halt nie jemanden am Hals fest. Durchsuch nie eine Person, ihre Hosentaschen oder ihre Tasche: Das macht die Polizei. Schreib auf, was du gesehen hast, und sichere die Kamerabilder. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.p': "Würden Sie bitte mitkommen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.s': "Du hast gesehen, wie eine Frau eine Flasche in ihre Tasche gesteckt hat. Sie geht hinaus. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o1': "Halt sie ruhig an, und ruf die Polizei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o2': "Durchsuch schnell ihre Tasche an der Tür.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o3': "Stoß sie hart zu Boden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.w': "Eine Person durchsuchen darf nur die Polizei, und grobe Gewalt kann jemanden verletzen und dich in Schwierigkeiten bringen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.aggression': "Schwierige Menschen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agressie': "die Aggression (wütendes, gewalttätiges Verhalten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schelden': "jemanden beschimpfen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalmeren': "(sich) beruhigen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afstand': "der Abstand", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisverbod': "das Hausverbot (du darfst hier nicht mehr hinein)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bodycam': "die Bodycam (eine kleine Kamera an deiner Uniform)", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.1': "Beruhigen Sie sich bitte. Ich will Ihnen helfen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.2': "Halte Abstand und bleib ruhig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.3': "Sie haben Hausverbot. Sie müssen jetzt gehen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.q': "Warum darf ich nicht hinein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.a': "Sie haben hier Hausverbot.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression': "Bleib ruhig, halte Abstand", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.b': "Ein wütender Mensch beruhigt sich schneller, wenn du ruhig bleibst. Sprich langsam und leise, und sag „u“ zu der Person. Halte eine Armlänge Abstand oder mehr, und halte hinter dir einen Weg nach draußen frei. Fass die Person nicht an, und schrei nicht zurück. Wird es gefährlich? Geh einen Schritt zurück, und ruf einen Kollegen oder die Polizei. Schreib es danach auf. Sprich nach einem schlimmen Vorfall mit jemandem darüber. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.p': "Beruhigen Sie sich. Ich will Ihnen helfen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.s': "Ein Mann schreit dich an und kommt dir sehr nahe. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o1': "Geh einen Schritt zurück, und sprich ruhig.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o2': "Schrei zurück, lauter als er.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o3': "Stoß ihn von dir weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.w': "Ruhige Worte und Abstand nehmen die Hitze heraus. Schreien oder Stoßen macht es schlimmer.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodhygiene': "Hygiene und Kälte", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hygienelock': "Die Hygieneschleuse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hygienesluis': "die Hygieneschleuse (der Raum, in dem du dich sauber machst, bevor du hineingehst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baardnetje': "der Bartschutz, das Bartnetz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzenwasser': "die Stiefelwaschanlage (Bürsten, die deine Stiefel sauber machen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.desinfecteren': "desinfizieren (Keime töten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkjas': "der Arbeitskittel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bacterie': "der Keim, die Bakterie", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.1': "Wasch deine Hände und desinfiziere sie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.2': "Setz dein Haarnetz und deinen Bartschutz auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.3': "Geh durch die Stiefelwaschanlage.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.q': "Darf ich meine Uhr anbehalten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.a': "Nein, aller Schmuck kommt ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock': "Sauber hinein, jedes Mal", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.b': "In einer Lebensmittelfabrik bist du die größte Gefahr für das Essen: Keime kommen von deinen Händen, Haaren und Kleidern. Geh also jedes Mal durch die Hygieneschleuse, wenn du hineingehst, auch nach einer Pause oder der Toilette. Haarnetz auf, Bartschutz, wenn du einen Bart hast, saubere Arbeitskleidung, aller Schmuck ab. Wasch deine Hände mit Seife, trockne sie ab und desinfiziere sie. Bist du krank, mit Durchfall oder Erbrechen? Sag es deinem Vorgesetzten, bevor du anfängst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.p': "Ich habe Durchfall. Darf ich heute arbeiten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.s': "Du kommst von der Toilette zurück. Dein Kollege sagt: „Lass die Schleuse weg, wir haben viel zu tun.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o1': "Geh trotzdem durch die Schleuse.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o2': "Lass sie weg, nur dieses eine Mal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o3': "Zieh nur neue Handschuhe an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.w': "Keime von der Toilette können viele Kunden krank machen. Ein paar Minuten in der Schleuse verhindern das.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.allergens': "Allergene", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergeen': "das Allergen (Essen, das manche Menschen sehr krank macht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.noten': "die Nüsse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinda': "die Erdnuss", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gluten': "das Gluten (in Weizen, also in Brot und Kuchen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sesam': "der Sesam (kleine Samen, zum Beispiel auf Brot)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisbesmetting': "die Kreuzkontamination (etwas kommt in Essen, wo es nicht hingehört)", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.1': "Dieses Produkt enthält Nüsse.", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.2': "Schau auf dem Etikett, welche Allergene drin sind.", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.3': "Mach nach den Erdnüssen alles gut sauber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.q': "Darf dieser Behälter zu den anderen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.a': "Nein, da sind Nüsse drin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens': "Eine Spur reicht schon", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.b': "Für manche Menschen kann schon ein winziges bisschen Nuss, Erdnuss, Milch, Ei, Gluten oder Sesam lebensgefährlich sein. Deshalb muss auf dem Etikett genau stehen, was in einem Produkt ist. Halte Allergene getrennt: eigene Behälter, eigenes Werkzeug und eigene Farben. Nach einem Produkt mit einem Allergen wird die Linie sauber gemacht, bevor das nächste Produkt kommt. Tausch nie eine Zutat aus, auch nicht, wenn sie gleich aussieht. Bist du unsicher? Frag nach. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.p': "Sind da Nüsse drin?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.s': "Die Mandeln sind alle. Ein Kollege sagt: „Nimm Haselnüsse, das merkt keiner.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o1': "Sag Nein, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o2': "Nimm sie: Nüsse sind Nüsse.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o3': "Nimm sie, und ändere nichts am Etikett.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.w': "Auf dem Etikett muss stehen, was drin ist. Eine falsche Nuss kann jemanden mit einer Allergie sehr krank machen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.coldroom': "Der Kühlraum und der Tiefkühlraum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperatuur': "die Temperatur", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graden': "die Grad (°C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevroren': "gefroren", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontdooien': "auftauen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelketen': "die Kühlkette (das Essen bleibt den ganzen Weg kalt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermokleding': "die Kälteschutzkleidung (warme Kleidung für die Kälte)", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.1': "Im Tiefkühlraum sind es minus achtzehn Grad.", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.2': "Bring das Fleisch sofort in den Kühlraum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.3': "Schreib die Temperatur auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.q': "Warum piept der Kühlraum?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.a': "Die Tür ist offen. Mach sie schnell zu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom': "Arbeit in der Kälte: zieh dich warm an, halte es kalt", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.b': "Essen muss den ganzen Weg kalt bleiben: vom Lkw in den Kühlraum bis in den Laden. Räum kalte Produkte also sofort ein, und halte die Türen vom Kühlraum und vom Tiefkühlraum geschlossen. Prüf die Temperatur, und schreib sie auf. Trag im Tiefkühlraum deine Kälteschutzkleidung, Handschuhe und eine Mütze, und mach rechtzeitig eine warme Pause. Sorg dafür, dass du die Tür immer von innen öffnen kannst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.p': "Hier ist es zu warm. Die Kühlung funktioniert nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.s': "Das Thermometer vom Kühlraum zeigt eine viel höhere Zahl als normal. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o1': "Sag es sofort deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o2': "Warte: Es kühlt schon wieder ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o3': "Schreib die normale Zahl auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.w': "Zu warm bedeutet, dass Keime wachsen. Dein Vorgesetzter entscheidet, ob das Essen noch sicher ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.foreignbody': "Glas, Metall und Plastik im Essen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metaaldetector': "der Metalldetektor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glasbreuk': "der Glasbruch (Glas, das kaputtgegangen ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.splinter': "der Splitter (ein kleines scharfes Stück)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vreemdvoorwerp': "der Fremdkörper (etwas im Essen, das nicht hineingehört)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervuild': "verunreinigt (etwas Schmutziges ist hineingekommen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegleider': "der Schichtleiter", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.1': "Der Metalldetektor piept. Halt die Linie an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.2': "An Linie zwei ist Glas kaputtgegangen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.3': "Leg das Produkt in die Ausschusskiste.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.foreignbody.q': "Was mache ich mit diesem Stück Plastik?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.a': "Zeig es dem Schichtleiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody': "Etwas im Essen? Anhalten und melden", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.b': "Glas, Metall, Plastik, ein Pflaster oder ein Haar dürfen nie ins Essen kommen. Piept der Metalldetektor, oder findest du etwas Komisches? Leg das Produkt zur Seite, und sag es dem Schichtleiter. Ist Glas kaputtgegangen? Halt die Linie in der Nähe an: Der Schichtleiter entscheidet, was weggeworfen werden muss. Benutz nur blaue Pflaster, damit man sie leicht sieht. Nimm nie Glas, Stifte oder lose Sachen mit in die Produktion. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.p': "Ich habe etwas im Produkt gefunden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.s': "Über der Linie geht eine Lampe aus Glas kaputt. Die Produkte laufen weiter. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o1': "Halt die Linie an, und ruf den Schichtleiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o2': "Sammle das Glas heraus, das du sehen kannst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o3': "Mach weiter: Der Detektor findet Glas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.w': "Ein Metalldetektor findet kein Glas. Kleine Stücke, die du nicht sehen kannst, können einen Kunden schwer verletzen.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodline': "Die Produktionslinie", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cutting': "Schneiden und wiegen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitbenen': "ausbeinen, entbeinen (die Knochen aus dem Fleisch schneiden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fileren': "filetieren (Fisch oder Fleisch in flache Stücke schneiden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portie': "die Portion", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wegen': "wiegen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gewicht': "das Gewicht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijplank': "das Schneidebrett", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.1': "Wieg jede Portion.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.2': "Das Gewicht ist zu niedrig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.3': "Schärf dein Messer, bevor du anfängst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.q': "Wie viel muss in einen Behälter?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.a': "Fünfhundert Gramm. Schau auf die Waage.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting': "Scharfes Messer, sichere Hand", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.b': "Ein scharfes Messer ist sicherer als ein stumpfes: Du brauchst weniger Kraft, also rutscht es weniger ab. Trag immer deinen Schnittschutzhandschuh an der anderen Hand. Schneide von deinem Körper weg. Leg ein Messer flach auf das Brett, nie in ein Spülbecken oder unter Fleisch. Versuch nicht, ein fallendes Messer zu fangen: Geh einen Schritt zurück. Trag ein Messer mit der Spitze nach unten, nah an deinem Bein. Auch ein kleiner Schnitt muss abgedeckt und gemeldet werden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.p': "Mein Messer ist stumpf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.s': "Dein Messer rutscht dir aus der Hand und fällt. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o1': "Geh einen Schritt zurück, und lass es fallen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o2': "Fang es schnell auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o3': "Halt es mit deinem Fuß auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.w': "Ein fallendes Messer schneidet tief, wenn du danach greifst. Auf dem Boden kann es nichts anrichten.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.labels': "Verpacken und Etiketten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketteren': "etikettieren (Etiketten aufkleben)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lotnummer': "die Chargennummer (eine Nummer für eine Menge Produkte, die zusammen gemacht wurden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vacuum': "vakuumverpackt (die ganze Luft ist raus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaal': "die Schale (ein flaches Gefäß für Essen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.printer': "der Drucker", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omdoos': "der Umkarton (der große Karton um die kleinen Packungen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.1': "Prüf, ob das Datum auf dem Etikett stimmt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.2': "Diese Packung ist nicht vakuumverpackt. Pack sie noch einmal ein.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.labels.3': "Schreib die Chargennummer auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.q': "Welches Datum muss drauf?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.a': "In zehn Tagen. Schau auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels': "Ein falsches Etikett ist gefährlich", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.b': "Das Etikett sagt dem Kunden, was drin ist, wie viel es wiegt und bis wann es gut ist. Ein falsches Datum oder ein falsches Etikett kann Menschen krank machen, zum Beispiel wenn ein Allergen fehlt. Prüf also bei jedem neuen Durchlauf die ersten Etiketten: das Produkt, das Datum und die Chargennummer. Stimmt etwas nicht? Hör auf, und sag es deinem Vorgesetzten. Produkte mit einem falschen Etikett kommen zur Seite und werden nie verkauft. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.p': "Das Etikett stimmt nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.s': "Du siehst, dass das Datum auf den Etiketten eine Woche zu spät ist. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o1': "Hör auf zu verpacken, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o2': "Mach weiter: Eine Woche ist egal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o3': "Ändere das Datum mit einem Stift.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.w': "Ein falsches Datum kann dazu führen, dass Menschen Essen essen, das nicht mehr sicher ist. Besser jetzt aufhören, als es später zurückrufen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.linecleaning': "Die Linie reinigen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuim': "der Schaum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hogedrukspuit': "der Hochdruckreiniger", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naspoelen': "nachspülen, abspülen (mit sauberem Wasser abwaschen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.demonteren': "auseinanderbauen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.borstel': "die Bürste", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restjes': "die Reste (kleine Stücke Essen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.1': "Mach zuerst die Maschine aus.", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.2': "Sprüh den Schaum auf das Band.", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.3': "Spül dann alles mit sauberem Wasser ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.q': "Ist das Band schon sauber?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.a': "Noch nicht. Ich muss es noch abspülen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning': "Strom aus, bevor du reinigst", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.b': "Reinige nie eine Maschine, die läuft. Mach sie aus, und sorg dafür, dass niemand sie wieder starten kann: Folge den Schritten deiner Firma. Trag die richtigen Handschuhe, die Brille und Stiefel: Reinigungsmittel können deine Haut und deine Augen verätzen. Misch nie Mittel. Nimm zuerst die Reste weg, dann einschäumen, schrubben und abspülen. Sprüh kein Wasser auf Stromkästen oder Stecker. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.p': "Ist die Maschine aus?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.s': "Im Band steckt ein Stück Fleisch fest. Die Maschine läuft noch. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o1': "Mach sie zuerst aus, dann hol es heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o2': "Zieh es schnell mit der Hand heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o3': "Schieb es mit einem Messer heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.w': "Ein laufendes Band kann deine Hand in einer Sekunde hineinziehen. Ausmachen dauert nur einen Moment.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.haccp': "Prüfen und aufschreiben (HACCP)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlepunt': "der Kontrollpunkt (ein Schritt, an dem du etwas prüfen musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerntemperatuur': "die Kerntemperatur (die Temperatur innen im Essen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikthermometer': "das Einstichthermometer (du steckst es in das Essen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijking': "die Abweichung (etwas ist nicht so, wie es sein soll)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekproef': "die Stichprobe (du prüfst ein paar Produkte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwaliteitsdienst': "die Qualitätssicherung (QS)", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.1': "Miss die Kerntemperatur mit dem Einstichthermometer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.2': "Schreib alles auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.3': "Stimmt etwas nicht? Melde es sofort.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.q': "Warum muss ich alles aufschreiben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.a': "So wissen wir, dass das Essen sicher ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp': "HACCP: prüfen, aufschreiben, melden", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.b': "Jede Lebensmittelfirma arbeitet mit einem Plan für Lebensmittelsicherheit (HACCP). Darin steht, bei welchen Schritten du etwas prüfen musst, zum Beispiel die Temperatur vom Kühlraum oder die Kerntemperatur von gekochtem Fleisch. Du prüfst, du schreibst es auf, und du unterschreibst. Schreib auf, was du wirklich gemessen hast, auch wenn es falsch ist. Eine falsche Zahl ist nicht deine Schuld, aber sie zu verstecken ist gefährlich. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.p': "Die Temperatur ist zu hoch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.s': "Du hast vergessen, um zehn Uhr zu messen. Dein Kollege sagt: „Schreib einfach eine gute Zahl auf.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o1': "Miss jetzt, und schreib die echte Uhrzeit auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o2': "Schreib eine gute Zahl für zehn Uhr auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o3': "Lass die Zeile leer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.w': "Die Liste muss zeigen, was wirklich passiert ist. Eine erfundene Zahl versteckt ein Problem, das Menschen krank machen kann.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.collection': "Müll abholen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.binlorry': "Das Müllauto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniswagen': "das Müllauto, der Müllwagen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kliko': "die Mülltonne (eine Tonne auf Rädern)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kieplift': "die Schüttung, der Tonnenlifter (er hebt die Tonne hoch und kippt sie aus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.treeplank': "das Trittbrett (eine Stufe hinten am Müllauto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijplaatsing': "der Beistellmüll (Säcke, die neben die Tonne gestellt wurden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ophaaldag': "der Abholtag", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.1': "Stell die Mülltonne auf die Schüttung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.2': "Neben dem Container stehen Säcke.", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.3': "Die Mülltonne ist zu schwer. Lass sie stehen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.q': "Darf ich hinten mitfahren?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.a': "Nein, du steigst in die Kabine.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry': "Sei sichtbar, und fahr drinnen mit", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.b': "Trag bei jeder Tour deine Warnkleidung. Steig auf der Seite vom Gehweg ein und aus, nie auf der Seite vom Verkehr. Fahr in der Kabine mit, nicht hinten auf dem Müllauto: nur wenn deine Firma es klar erlaubt, und nie, wenn es rückwärtsfährt oder schnell fährt. Halte dich von der Schüttung fern, während sie sich bewegt. Ist eine Tonne zu schwer, oder steht etwas heraus? Lass sie stehen, und melde es. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.p': "Diese Mülltonne ist zu schwer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.s': "Die nächste Straße ist ganz nah. Der Fahrer sagt: „Stell dich hinten aufs Trittbrett.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o1': "Steig trotzdem in die Kabine.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o2': "Stell dich aufs Trittbrett: Es ist ja nah.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o3': "Geh hinter dem Müllauto her.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.w': "Von einem fahrenden Müllauto zu fallen ist eine der größten Gefahren bei dieser Arbeit. In der Kabine bist du sicher.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.reversing': "Sicher rückwärtsfahren", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achteruitrijden': "rückwärtsfahren", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dodehoek': "der tote Winkel (wo der Fahrer dich nicht sehen kann)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzer': "der Einweiser (die Person, die den Fahrer lotst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogcontact': "der Blickkontakt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.piepen': "piepen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cabine': "die Kabine, das Führerhaus (wo der Fahrer sitzt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.1': "Steh nie hinter dem Müllauto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.2': "Ich sehe dich nicht im Spiegel.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.3': "Halte Blickkontakt mit dem Fahrer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.q': "Kannst du mir beim Rückwärtsfahren helfen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.a': "Ja, ich stehe links. Schau in deinen Spiegel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing': "Nie hinter einem Müllauto, das rückwärtsfährt", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.b': "Viele Unfälle mit Müllautos passieren, wenn sie rückwärtsfahren. Der Fahrer kann direkt hinter dem Müllauto nichts sehen: der tote Winkel. Steh oder geh also nie hinter einem Müllauto, das rückwärtsfahren könnte. Weis den Fahrer von der Seite ein, wo ihr euch im Spiegel sehen könnt. Kein Blickkontakt mehr? Der Fahrer hält an. Mach vor dem Start klare Zeichen mit dem Fahrer aus. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.p': "Stopp! Ich sehe dich nicht mehr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.s': "Das Müllauto fährt rückwärts. Du gehst dahinter, um einen Sack zu holen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o1': "Warte, bis das Müllauto steht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o2': "Geh schnell: Es ist ja nur eine Sekunde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o3': "Wink dem Fahrer zu, und geh.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.w': "Hinter dem Müllauto kann der Fahrer dich nicht sehen. Eine Sekunde reicht für einen Unfall.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesorting': "Müll trennen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papier': "das Papier", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plastic': "das Plastik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gft': "der Biomüll (Obst, Gemüse und Pflanzen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restafval': "der Restmüll (was man nicht trennen kann)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.karton': "der Karton, die Pappe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blik': "die Dose, die Büchse", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.1': "Das Glas kommt in den Glascontainer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.2': "Das gehört zum Restmüll.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.3': "Falte den Karton flach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.q': "Wohin kommt ein Pizzakarton?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.a': "Zum Restmüll. Da ist Fett dran.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting': "Gut trennen spart Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.b': "Getrennter Müll kann wieder benutzt werden: Aus Papier wird Papier, aus Glas wird Glas. Aber eine falsche Sache kann eine ganze Ladung verderben. Schau also in die Tonne, bevor du sie leerst. Ist etwas drin, das nicht hineingehört, zum Beispiel ein Sack Restmüll im Papier? Lass sie stehen, oder folge den Regeln deiner Firma. Welcher Müll wohin kommt, ist in jeder Stadt anders: Lern die Regeln in deiner Gegend. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.p': "Das gehört hier nicht hinein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.s': "Eine Papiertonne ist voll mit schwarzen Müllsäcken. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o1': "Lass sie stehen, und melde es.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o2': "Leer sie ins Papier.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o3': "Hol die Säcke mit der Hand heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.w': "Müll im Papier verdirbt die ganze Ladung. In den Säcken können auch scharfe oder schmutzige Sachen sein.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesafety': "Scharfe Sachen und Heben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijwond': "die Schnittwunde (eine Wunde von etwas Scharfem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikken': "stechen (eine scharfe Spitze geht in deine Haut)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naald': "die Nadel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherp': "scharf", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rugpijn': "die Rückenschmerzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tetanusprik': "die Tetanusspritze (eine Spritze gegen eine Krankheit von Schmutz in einer Wunde)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.1': "Halt einen Sack nie von unten.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.2': "Vorsicht, in diesem Sack ist Glas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.3': "Ich habe mich an einer Nadel gestochen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.q': "Ich habe mich geschnitten. Was muss ich tun?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.a': "Wasch die Wunde gut aus. Und sag es mir.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety': "Drück nie einen Sack zusammen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.b': "In einem Müllsack können Glas, Messer oder Nadeln sein. Drück einen Sack also nie an deinen Körper, quetsch ihn nie zusammen, und trag ihn nie an deinem Bein: Halt ihn oben fest, weg von dir. Trag deine Handschuhe. Heb mit gebeugten Knien und geradem Rücken, und schieb eine Tonne, statt sie zu tragen. Hast du dich gestochen oder geschnitten? Wasch die Wunde gut mit Wasser aus, und sag es deinem Vorgesetzten noch am selben Tag.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.p': "Ich habe mich gestochen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.s': "Ein Sack reißt. Du siehst eine Nadel darin. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o1': "Fass sie nicht an, und melde es.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o2': "Heb sie mit Handschuhen auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o3': "Schieb sie zurück in den Sack.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.w': "Handschuhe halten eine Nadel nicht auf. Eine Nadel kann eine Krankheit übertragen.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.recycling': "Der Wertstoffhof", // nieuw, nalezen // nagelezen AI 28 nov
    'l.yard': "Auf dem Wertstoffhof", // nieuw, nalezen // nagelezen AI 28 nov
    'w.milieustraat': "der Wertstoffhof (wohin Leute großen oder besonderen Müll bringen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grofvuil': "der Sperrmüll (große Sachen, zum Beispiel ein Sofa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puin': "der Bauschutt (kaputte Steine und Ziegel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.matras': "die Matratze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegbrug': "die Fahrzeugwaage (eine Waage für Autos und Lkws)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvalpas': "die Müllkarte (Anwohner zeigen sie am Tor)", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.1': "Der Bauschutt kommt in Container vier.", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.2': "Darf ich Ihre Müllkarte sehen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.3': "Fahren Sie zuerst über die Waage.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.q': "Wohin kommt diese Matratze?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.a': "In den Container für Sperrmüll, ganz hinten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard': "Hilf, aber halte den Hof sicher", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.b': "Auf dem Wertstoffhof sagst du Besuchern, wohin ihr Müll kommt, und du prüfst, ob er gut getrennt ist. Sei freundlich: Viele Leute kommen nur ein paar Mal im Jahr und kennen die Regeln nicht. Halte Kinder und Besucher weg von Maschinen und vom Rand von hohen Containern. Heb schwere Sachen zu zweit, oder lass den Besucher seine Sachen selbst tragen. Bringt jemand etwas, das du nicht kennst? Frag nach, bevor es hineinkommt. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.p': "Das kommt in Container vier.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.s': "Ein Mann will einen vollen Sack in den Holzcontainer werfen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o1': "Frag, was in dem Sack ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o2': "Lass ihn: Es ist sein Müll.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o3': "Wirf ihn für ihn hinein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.w': "Eine falsche Sache kann einen vollen Container verderben. Eine freundliche Frage hält den Müll sauber.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hazardous': "Sondermüll", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chemischafval': "der Sondermüll (gefährlicher Müll, zum Beispiel Farbe und Öl)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spuitbus': "die Spraydose", // nieuw, nalezen // nagelezen AI 28 nov
    'w.asbest': "der Asbest (ein gefährliches Material in alten Gebäuden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekken': "lecken, auslaufen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gevarensymbool': "das Gefahrensymbol (ein Bild, das vor Gefahr warnt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vat': "das Fass", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.1': "Stell die Farbe zum Sondermüll.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.2': "Diese Flasche läuft aus. Heb sie mit Handschuhen auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.3': "Asbest muss gut verpackt sein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.q': "Was ist in dieser Flasche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.a': "Das weiß ich nicht. Stell sie zur Seite.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous': "Unbekannt? Nicht aufmachen, nicht riechen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.b': "Sondermüll, zum Beispiel Farbe, Öl, Reinigungsmittel, Batterien und Spraydosen, kann brennen, vergiften oder explodieren. Achte auf die Gefahrensymbole. Trag Handschuhe und eine Schutzbrille. Mach nie eine Flasche auf, um zu riechen, was drin ist, und misch nie Mittel. Halte eine Flasche, die ausläuft, aufrecht, und stell sie in eine Wanne. Asbest darf nur hinein, wenn er gut verpackt ist: Brich ihn nie, und nimm ihn nicht aus der Verpackung. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.p': "Was ist hier drin?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.s': "Eine Frau bringt eine Flasche ohne Etikett. Sie riecht stark. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o1': "Stell sie getrennt hin, und sag es deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o2': "Mach sie auf, und riech, was es ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o3': "Gieß es in das Farbfass.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.w': "Unbekannte Mittel können mit anderen reagieren. Dein Vorgesetzter weiß, wohin es sicher kann.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.baler': "Die Ballenpresse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balenpers': "die Ballenpresse (eine Maschine, die Müll zu Blöcken presst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baal': "der Ballen (ein gepresster Block aus Papier oder Plastik)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persen': "pressen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastlopen': "sich festfahren, klemmen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.binddraad': "der Bindedraht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulopening': "die Einfüllöffnung (wo der Müll hineinkommt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.1': "Die Presse klemmt. Drück den Notaus.", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.2': "Steck nie deine Hand in die Presse.", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.3': "Bind den Ballen gut ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.q': "Die Presse klemmt. Darf ich nachschauen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.a': "Nein. Zuerst wird der Strom abgeschaltet.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.baler': "Greif nie in die Ballenpresse", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.b': "Eine Ballenpresse presst mit einer riesigen Kraft. Benutz sie nur, wenn du gelernt hast, wie das geht. Steck nie eine Hand, einen Arm oder einen Fuß in die Einfüllöffnung, auch nicht, wenn die Maschine still aussieht. Klemmt sie? Drück den Notaus, schalte sie aus, und sorg dafür, dass niemand sie einschalten kann: Folge den Schritten deiner Firma. Erst dann schaust du nach. Kletter nie in eine Ballenpresse oder einen Container. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.p': "Die Presse klemmt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.s': "Ein Stück Karton steckt in der Öffnung fest. Die Maschine steht still. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o1': "Schalte sie ganz aus, dann hol es heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o2': "Zieh es schnell mit der Hand heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o3': "Drück es mit dem Fuß hinein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.w': "Eine Maschine, die stillsteht, kann wieder anlaufen. Ohne dass der Strom aus ist, ist deine Hand in Gefahr.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shovel': "Der Radlader auf dem Hof", // nieuw, nalezen // nagelezen AI 28 nov
    'w.shovel': "der Radlader (eine große Maschine mit einer Schaufel vorne)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaailamp': "die Rundumleuchte (ein oranges Licht oben auf einer Maschine)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bunker': "die Box (ein großer Platz aus Beton für eine Sorte Müll)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.looppad': "der Fußweg (ein Weg nur für Menschen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toeteren': "hupen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opscheppen': "aufschaufeln, aufnehmen", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.1': "Bleib auf dem Fußweg.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.2': "Der Radlader fährt rückwärts. Vorsicht!", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.3': "Die Rundumleuchte ist an. Die Maschine fährt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.q': "Darf ich am Radlader vorbeigehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.a': "Nur wenn der Fahrer dich sieht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel': "Geh dem Radlader aus dem Weg", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.b': "Ein Radlader ist groß, und sein Fahrer sieht wenig um ihn herum, vor allem hinten. Bleib also auf den Fußwegen, und trag deine Warnkleidung. Geh nie hinter einer Maschine, die fährt. Willst du vorbei? Warte, bis der Fahrer dich gesehen hat und ein Zeichen gibt. Die Rundumleuchte bedeutet: Diese Maschine arbeitet. Halte Besucher weit weg davon. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.p': "Hast du mich gesehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.s': "Du musst an einem Radlader vorbei, der arbeitet. Der Fahrer schaut in die andere Richtung. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o1': "Warte, bis er dich sieht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o2': "Geh schnell vorbei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o3': "Geh hinter der Maschine vorbei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.w': "Ein Fahrer, der dich nicht gesehen hat, kann für dich nicht anhalten.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.toddlers': "Die Kinder", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nappies': "Wickeln", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luier': "die Windel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verschonen': "wickeln, frisch machen (eine Windel wechseln)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.commode': "der Wickeltisch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.billendoekje': "das Feuchttuch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potje': "das Töpfchen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zindelijk': "sauber, trocken (das Kind kann auf die Toilette gehen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.1': "Ich wickle Sem jetzt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.2': "Wasch dir nach dem Wickeln die Hände.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.3': "Lass ein Kind nie allein auf dem Wickeltisch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.q': "Wann hast du Noor gewickelt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.a': "Um zehn. Es steht in der App.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies': "Eine Hand am Kind", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.b': "Leg alles bereit, bevor du ein Kind auf den Wickeltisch legst: eine saubere Windel, Feuchttücher und Kleidung. Dann behalte die ganze Zeit eine Hand am Kind. Geh nie weg, auch nicht für eine Sekunde. Wasch dir nach jedem Wickeln die Hände, und mach den Tisch sauber. Schreib auf, wann du die Windel gewechselt hast, damit die Eltern es wissen. Siehst du einen Ausschlag oder eine Wunde? Schreib es auf, und sag es einem Kollegen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.p': "Ich wickle ihn gerade.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.s': "Du wickelst ein Baby. Du hast die Feuchttücher vergessen; sie liegen auf der anderen Seite des Raums. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o1': "Nimm das Baby mit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o2': "Hol sie schnell: Es ist ja nah.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o3': "Lass das Baby liegen, und ruf jemanden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.w': "Ein Baby kann in einer Sekunde vom Wickeltisch rollen. Lass ein Kind dort oben nie allein.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mealtime': "Essen und Trinken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fles': "die Flasche, das Fläschchen (für ein Baby)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slabbetje': "das Lätzchen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beker': "der Becher (mit Henkel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kinderstoel': "der Kinderstuhl, der Hochstuhl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fruithap': "der Obstbrei", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boertje': "das Bäuerchen", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.1': "Wasch dir vor dem Essen die Hände.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.2': "Gib Lisa um zwölf ihre Flasche.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.3': "Alle setzen sich an den Tisch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.q': "Darf Daan einen Keks haben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.a': "Nein, er hat eine Allergie. Schau auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime': "Schau auf die Liste, bevor du Essen gibst", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.b': "Bevor du einem Kind Essen oder Trinken gibst, schau auf die Liste: Manche Kinder haben eine Allergie, andere dürfen bestimmtes Essen nicht essen, wegen ihrer Gesundheit oder ihres Glaubens. Wasch deine Hände und die Hände der Kinder vor dem Essen. Lass Kinder sitzen, während sie essen und trinken, nie gehen oder rennen. Schneide das Essen für kleine Kinder klein, zum Beispiel Weintrauben in Stücke. Gib einem Kind nie etwas, das ein anderes Kind von zu Hause mitgebracht hat. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.mealtime.p': "Darf er das essen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.s': "Ein Kind weint, weil es einen Keks will. Du kennst dieses Kind nicht gut. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o1': "Schau zuerst auf die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o2': "Gib ihn: Es ist ja nur ein Keks.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o3': "Gib ihm einen halben Keks.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.w': "In einem Keks können Nüsse, Milch oder Ei sein. Für ein Kind mit einer Allergie kann das sehr gefährlich sein.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.naptime': "Schlafen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedje': "das Kinderbett, das Babybett (ein kleines Bett für ein Baby)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapkamer': "das Schlafzimmer, der Schlafraum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knuffel': "das Kuscheltier", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speen': "der Schnuller", // nieuw, nalezen // nagelezen AI 28 nov
    'w.babyfoon': "das Babyfon", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapzak': "der Schlafsack (für ein Baby)", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.1': "Leg das Baby auf den Rücken.", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.2': "Ich schaue oft in den Schlafraum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.3': "Hier ist dein Kuscheltier. Schlaf gut.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.q': "Schläft Mila schon?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.a': "Ja, seit ein Uhr. Ich schaue gleich noch einmal nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime': "Babys schlafen auf dem Rücken", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.b': "Ein Baby schläft am sichersten auf dem Rücken, in einem Schlafsack, in seinem eigenen Bett. Kein Kissen, keine lose Decke und keine großen Kuscheltiere im Bett. Halte den Raum kühl und frisch. Schau oft nach schlafenden Kindern: hinschauen und hinhören, auch wenn das Babyfon an ist. Bittet dich ein Elternteil, sein Baby anders schlafen zu lassen? Sag es zuerst deinem Vorgesetzten. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.p': "Ich schaue mal in den Schlafraum.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.s': "Ein Baby ist im Bett auf dem Bauch eingeschlafen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o1': "Dreh es vorsichtig auf den Rücken.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o2': "Lass es schlafen: Es schläft ja jetzt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o3': "Leg ein Kissen daneben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.w': "Auf dem Rücken kann ein Baby frei atmen. Ein Kissen kann sein Gesicht bedecken.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.playtime': "Spielen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spelen': "spielen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speelgoed': "das Spielzeug", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zandbak': "der Sandkasten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijbaan': "die Rutsche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puzzel': "das Puzzle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buitenspelen': "draußen spielen", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.1': "Wir gehen draußen spielen. Jacken an!", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.2': "Räum das Spielzeug auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.3': "Immer nur ein Kind auf der Rutsche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.q': "Darf ich mit dem Puzzle spielen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.a': "Ja, am Tisch. Danach räumst du es auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime': "Sicher spielen: schauen, zählen, prüfen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.b': "Kinder lernen beim Spielen, also lass sie Dinge ausprobieren. Aber behalte sie immer im Blick, auch draußen. Zähl die Kinder, wenn ihr hinausgeht und wenn ihr wieder hereinkommt. Prüf zuerst den Spielplatz: Ist das Tor zu, liegen da Glas oder Müll? Spielzeug mit kleinen Teilen ist nicht für Kinder unter drei: Sie können daran ersticken. Mach Spielzeug, das in den Mund kommt, oft sauber. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.p': "Sind alle da?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.s': "Du kommst vom Spielplatz wieder herein. Du zählst ein Kind zu wenig. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o1': "Sag es einem Kollegen, und such sofort.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o2': "Warte: Das Kind kommt schon von allein herein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o3': "Zähl morgen noch einmal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.w': "Ein Kind allein draußen kann sich verletzen oder weglaufen. Jede Minute zählt.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.daycare': "Eltern, Sicherheit und die Gruppe", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pickup': "Bringen und Abholen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouder': "der Elternteil (Vater oder Mutter)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscheid': "der Abschied", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppas': "der Babysitter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftje': "das Heft (für Notizen zwischen Eltern und Mitarbeitern)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderapp': "die Eltern-App (für Fotos und Nachrichten an die Eltern)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wennen': "sich eingewöhnen (sich an einen neuen Ort gewöhnen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.1': "Ich schreibe es ins Heft.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.2': "Sag Papa tschüss.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.3': "Ich stelle ein Foto in die Eltern-App.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.q': "Wer holt Sem heute ab?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.a': "Seine Oma. Sie steht auf der Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup': "Nur an Leute auf der Liste", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.b': "Gib ein Kind nur einem Elternteil mit, oder jemandem, von dem die Eltern dir erzählt haben. Kennst du die Person nicht? Frag, wer sie ist, schau dir ihren Ausweis an, und frag bei den Eltern oder deinem Vorgesetzten nach. Erzähl beim Abholen dem Elternteil, wie der Tag war: Essen, Schlafen, Spielen und alles Besondere. Schreib wichtige Dinge ins Heft oder in die App. Sprich über andere Kinder nur mit ihren eigenen Eltern. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.p': "Wer sind Sie? Ich rufe die Eltern an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.s': "Ein Mann, den du nicht kennst, will Sem abholen. Er steht nicht auf der Liste. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o1': "Ruf die Eltern an, bevor Sem geht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o2': "Lass Sem gehen: Er kennt den Namen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o3': "Frag Sem, ob er ihn kennt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.w': "Du bist für das Kind verantwortlich, bis eine Person, die die Eltern ausgesucht haben, es übernimmt.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.childsafety': "Sicherheit in der Gruppe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.traphekje': "das Treppenschutzgitter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerstrip': "der Fingerklemmschutz (an einer Tür, damit Finger nicht eingeklemmt werden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslikken': "sich verschlucken (Essen kommt in den falschen Hals)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bult': "die Beule (am Kopf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaafwond': "die Schürfwunde (die Haut ist aufgeschürft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toezicht': "die Aufsicht (du passt auf die Kinder auf)", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.1': "Mach das Treppenschutzgitter immer zu.", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.2': "Ich lege etwas Eis auf die Beule.", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.3': "Sem verschluckt sich. Ich helfe ihm.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.q': "Ist Bo hingefallen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.a': "Ja, sie hat eine Beule. Ich rufe ihre Mutter an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety': "Schau dich mit den Augen eines Kindes um", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.b': "Kleine Kinder stecken alles in den Mund und klettern auf alles. Halte also das Treppenschutzgitter zu, stell Putzmittel und Medikamente außer Reichweite, und halte heiße Getränke von Kindern fern. Prüf den Raum jeden Tag. Verletzt sich ein Kind? Leiste Erste Hilfe, tröste das Kind, sag es den Eltern, und schreib es auf. Ist es schlimm? Ruf 112 an. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.p': "Das Treppenschutzgitter ist offen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.s': "Du stellst deinen heißen Kaffee auf einen niedrigen Tisch. Ein Kleinkind läuft darauf zu. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o1': "Stell den Kaffee sofort nach oben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o2': "Sag dem Kleinkind, dass es ihn nicht anfassen darf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o3': "Trink ihn schnell aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.w': "Heißer Kaffee kann ein kleines Kind schwer verbrennen. Außer Reichweite ist der einzige sichere Ort.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sickchild': "Ein krankes Kind und Allergien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huiduitslag': "der Hautausschlag (rote Flecken auf der Haut)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diarree': "der Durchfall", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overgeven': "sich übergeben, erbrechen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergielijst': "die Allergieliste", // nieuw, nalezen // nagelezen AI 28 nov
    'w.adrenalinepen': "der Adrenalin-Pen (ein Medikament-Stift bei einer starken Allergie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperaturen': "Fieber messen", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.1': "Sem hat Fieber. Ich rufe seinen Vater an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.2': "Schau vor dem Essen auf die Allergieliste.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.3': "Gib nie ein Medikament ohne Erlaubnis.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.q': "Wie geht es Jip?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.a': "Er ist sehr warm. Ich messe gleich Fieber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild': "Ein krankes Kind: sagen, nicht raten", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.b': "Achte darauf, wie es den Kindern geht. Ist ein Kind heiß, sehr müde, erbricht es, oder hat es einen Ausschlag? Miss Fieber, sag es deinem Kollegen, und ruf die Eltern an. Gib ein Medikament nur mit schriftlicher Erlaubnis der Eltern, und schreib auf, was du gegeben hast und wann. Merk dir, welche Kinder eine Allergie haben und wo ihr Medikament ist. Ein Kind mit einer starken allergischen Reaktion: Gib den Adrenalin-Pen, wenn du das gelernt hast, und ruf 112 an. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.sickchild.p': "Ihr Kind ist krank. Können Sie es abholen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.s': "Eine Mutter sagt: „Gib ihm um zwei einen Fiebersaft.“ Es gibt kein Formular. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o1': "Bitte sie, zuerst das Formular zu unterschreiben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o2': "Gib ihn: Die Mutter hat darum gebeten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o3': "Gib die Hälfte, zur Sicherheit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.w': "Ohne schriftliche Erlaubnis darfst du kein Medikament geben. Das Formular schützt das Kind und dich.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.grouprules': "Die Gruppe und die Regeln", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pedagogischmedewerker': "die pädagogische Fachkraft, die Erzieherin oder der Erzieher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mentor': "die Bezugsperson (die Fachkraft, die ein Kind genau begleitet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierogenprincipe': "das Vier-Augen-Prinzip (ein anderer Erwachsener kann dich immer sehen oder hören)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.observeren': "beobachten (genau hinschauen und es aufschreiben)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.peuter': "das Kleinkind (ein Kind von zwei oder drei Jahren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groep': "die Gruppe (die Kinder, die jeden Tag zusammen sind)", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.1': "Ich bin die Bezugsperson von Lisa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.2': "Ein Kollege kann uns immer sehen oder hören.", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.3': "Ich mache mir Sorgen um Daan.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.q': "Darf ich allein mit der Gruppe nach draußen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.a': "Ja, aber sag es zuerst einem Kollegen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules': "Nie allein, ohne dass dich jemand sieht", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.b': "In der Kinderbetreuung muss dich immer ein anderer Erwachsener sehen oder hören können, wenn du bei den Kindern bist. Das schützt die Kinder und dich. Jedes Kind hat eine Bezugsperson: eine Fachkraft, die dieses Kind genau begleitet und mit den Eltern spricht. Machst du dir Sorgen um ein Kind wegen zu Hause, zum Beispiel wegen blauer Flecken oder Angst? Stell dem Kind nicht zu viele Fragen: Sag es deinem Vorgesetzten, der die Schritte kennt. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.p': "Ich mache mir Sorgen um dieses Kind.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.s': "Du siehst wieder blaue Flecken an einem Kind. Das Kind ist still. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o1': "Sag es noch am selben Tag deinem Vorgesetzten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o2': "Stell dem Kind viele Fragen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o3': "Ruf die Eltern an, und frag, warum.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.w': "Dein Vorgesetzter kennt die Schritte bei Sorgen um ein Kind. Viele Fragen können dem Kind Angst machen.", // nieuw, nalezen // nagelezen AI 28 nov
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Toiletten, Hotelzimmer und Maschinen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sanitary': "Toiletten und Waschbecken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wastafel': "das Waschbecken (das Becken im Bad oder in der Toilette)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpot': "die Toilettenschüssel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletborstel': "die Toilettenbürste", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urinoir': "das Urinal", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalk': "der Kalk (weiße Reste vom Wasser auf Wasserhähnen und Fliesen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontstopper': "der Pömpel (ein Werkzeug für eine verstopfte Toilette oder einen Abfluss)", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.1': "Ich mache zuerst die Waschbecken, dann die Toiletten.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.2': "Auf dem Wasserhahn ist Kalk.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.3': "Die Toilette im ersten Stock ist verstopft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.q': "Sind die Toiletten fertig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.a': "Noch nicht. Eine Toilette ist verstopft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary': "Von sauber nach schmutzig", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.b': "In einem Waschraum arbeitest du von sauber nach schmutzig: zuerst die Spiegel und die Waschbecken, dann die Toiletten und zuletzt den Boden. So bringst du keinen Schmutz von der Toilette zum Waschbecken. Nimm die Tücher mit der Farbe für die Toilette, und trag Handschuhe. Mach auch die Toilettenbürste sauber, und lass sie trocknen. Ist eine Toilette verstopft oder kaputt? Häng ein Schild an die Tür, und melde es. Wasch dir die Hände, wenn du fertig bist, auch wenn du Handschuhe getragen hast. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.p': "Diese Toilette ist verstopft. Ich hänge ein Schild daran.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.s': "Du hast eine Toilette geputzt. Jetzt kommt das Waschbecken. Du hast noch dasselbe Tuch in der Hand. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o1': "Nimm ein Tuch mit der Farbe für das Waschbecken.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o2': "Nimm dasselbe Tuch: Es sieht noch sauber aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o3': "Spül das Tuch zuerst in der Toilette aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.w': "Keime von der Toilette sind auf dem Tuch, auch wenn du sie nicht siehst. Ein neues Tuch hält sie von Händen und Gesichtern fern.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hotelroom': "Hotelzimmer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laken': "das Laken (auf einem Bett)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kussensloop': "der Kissenbezug", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dekbed': "die Bettdecke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handdoek': "das Handtuch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamerlijst': "die Zimmerliste (die Zimmer, die du heute machen musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opmaken': "machen (ein Bett)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.1': "Ich mache das Bett mit sauberen Laken.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.2': "Leg zwei saubere Handtücher ins Bad.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.3': "Zimmer zwölf ist fertig. Ich gehe zu dreizehn.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.q': "Wie viele Zimmer hast du noch?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.a': "Noch vier. Dann ist meine Liste fertig.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom': "Klopfen, sagen, wer du bist, und warten", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.b': "Bevor du in ein Hotelzimmer gehst, klopf an und sag, wer du bist, zum Beispiel „Housekeeping!“. Warte einen Moment, und klopf noch einmal. Hängt ein Schild „Niet storen“ an der Tür? Dann geh nicht hinein, und schreib es auf deine Zimmerliste. Ist der Gast im Zimmer? Frag, ob du jetzt putzen darfst, oder komm später wieder. Die Sachen des Gastes bleiben, wo sie sind. Hat ein Gast etwas vergessen? Bring es zur Rezeption. Behalte nie etwas für dich, auch nichts Kleines. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.p': "Guten Morgen. Darf ich das Zimmer jetzt putzen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.s': "In einem leeren Zimmer findest du ein Handy unter dem Bett. Der Gast ist abgereist. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o1': "Bring es zur Rezeption.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o2': "Behalte es: Der Gast ist weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o3': "Lass es unter dem Bett liegen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.w': "Verlorene Sachen gehören immer noch dem Gast. Die Rezeption kann sie zurückgeben. Sie zu behalten ist Diebstahl und kann dich deine Arbeit kosten.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.dosing': "Mittel und Maschinen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doseren': "dosieren (die richtige Menge von einem Mittel nehmen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maatbeker': "der Messbecher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sprayflacon': "die Sprühflasche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.concentraat': "das Konzentrat (ein starkes Mittel, das du mit Wasser mischst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.veiligheidsblad': "das Sicherheitsdatenblatt (darauf stehen die Gefahren eines Mittels und was du tun musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schrobzuigmachine': "der Scheuersaugautomat (eine Maschine, die den Boden schrubbt und trocken saugt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.1': "Gib eine Verschlusskappe in einen Eimer Wasser.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.2': "Lies zuerst das Etikett.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.3': "Der Scheuersaugautomat muss ans Ladegerät.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.q': "Tu ein bisschen mehr Mittel hinein. Dann wird es sauberer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.a': "Nein, mehr ist nicht besser. Ich nehme den Messbecher.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing': "Die richtige Menge, nicht mehr", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.b': "Mehr Mittel putzt nicht besser. Zu viel lässt eine klebrige Schicht zurück, so wird ein Boden schneller schmutzig und kann rutschig werden. Es ist auch schlechter für deine Haut und deine Lunge. Nimm den Messbecher oder die Dosierpumpe, und halte dich an das Etikett. Zuerst das Wasser, dann das Mittel: So spritzt es nicht. Bevor du den Scheuersaugautomaten benutzt, prüfe, ob er geladen ist und sauberes Wasser im Tank hat. Am Ende leerst du den Tank mit dem schmutzigen Wasser und spülst ihn aus. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.p': "Wie viel muss ich hineintun?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.s': "Der Boden bleibt klebrig. Ein Kollege sagt: „Nimm doppelt so viel Mittel.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o1': "Nimm die Menge vom Etikett, und frag nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o2': "Nimm doppelt so viel: Dann wird es sauber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o3': "Gieß das Mittel direkt auf den Boden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.w': "Ein klebriger Boden bedeutet oft zu viel Mittel, nicht zu wenig. Die richtige Menge putzt am besten und ist am sichersten.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.officenight': "Büros, früh oder spät", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toetsenbord': "die Tastatur", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papierbak': "der Papierkorb (für Altpapier)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lichtschakelaar': "der Lichtschalter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pantry': "die Teeküche (die kleine Küche in einem Büro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurmat': "die Fußmatte (die Matte am Eingang)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alleenwerken': "allein arbeiten (niemand sonst ist im Gebäude)", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.1': "Ich leere die Mülleimer und den Papierkorb.", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.2': "Ich fasse die Papiere auf dem Schreibtisch nicht an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.3': "Ich mache das Licht aus, wenn ich fertig bin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.q': "Arbeitest du heute Abend allein im Gebäude?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.a': "Ja. Ich schicke dir eine Nachricht, wenn ich fertig bin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight': "Allein im Gebäude", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.b': "Früh am Morgen oder spät am Abend putzt du ein Büro oft allein. Du musst wissen, was zu tun ist, wenn etwas passiert: Wen rufst du an, und wo ist der Erste-Hilfe-Kasten? Hab dein Handy immer bei dir. Vereinbare mit deinem Vorgesetzten oder einem Kollegen, dass du eine Nachricht schickst, wenn du anfängst und wenn du fertig bist. Lass niemanden herein, den du nicht kennst. Fass Papiere, Bildschirme oder Tastaturen nicht mehr an, als du zum Putzen brauchst, und lies nie, was darauf steht. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.officenight.p': "Ich bin fertig und gehe jetzt nach Hause.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.s': "In der Nacht klopft ein Mann an die Glastür. Er sagt, er arbeitet hier und hat seinen Schlüssel vergessen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o1': "Mach nicht auf. Ruf deinen Vorgesetzten an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o2': "Lass ihn herein: Er sieht nett aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o3': "Gib ihm deinen eigenen Schlüssel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.w': "Jeder kann sagen, dass er dort arbeitet. Dein Vorgesetzter kann es prüfen. Deine Sicherheit und das Gebäude kommen zuerst.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.cooking': "Die Küche und der Service", // nieuw, nalezen // nagelezen AI 28 nov
    'l.knives': "Messer und Schneiden", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koksmes': "das Kochmesser (ein großes Küchenmesser)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dunschiller': "der Sparschäler", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schillen': "schälen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hakken': "hacken (sehr klein schneiden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raspen': "reiben, raspeln", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blokjes': "die Würfel (kleine viereckige Stücke)", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.1': "Schneide die Karotten in Würfel.", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.2': "Leg das Messer nicht ins Spülbecken.", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.3': "Hack die Petersilie fein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.q': "Kannst du die Zwiebeln schneiden?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.a': "Ja, Chef. In Ringe oder in Würfel?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives': "Ein Messer ist ein Werkzeug, kein Spielzeug", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.b': "Halte dein Messer scharf: Ein stumpfes Messer rutscht leichter ab. Schneide auf einem Brett, das sich nicht bewegt: Leg ein nasses Tuch darunter. Krümm deine Finger nach innen, wie eine Kralle. Geh mit der Spitze nach unten, nah an deinem Bein, und sag „Mes!“ wenn du an jemandem vorbeigehst. Leg nie ein Messer in ein Spülbecken voll Wasser: Jemand kann hineingreifen, ohne es zu sehen. Fällt ein Messer? Geh einen Schritt zurück, fang es nicht auf. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.p': "Messer! Ich gehe hinter dir vorbei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.s': "Du schneidest. Dein Messer rutscht vom Brett und fällt. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o1': "Geh einen Schritt zurück, und lass es fallen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o2': "Fang es schnell mit der Hand auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o3': "Halte es mit dem Fuß auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.w': "Ein fallendes Messer kann tief in deine Hand oder deinen Fuß schneiden. Ein Messer auf dem Boden muss nur gespült werden.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.rawcooked': "Roh, gar und Allergene", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rauw': "roh (nicht gekocht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaar': "gar, durch (fertig zum Essen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdekken': "abdecken (mit einem Deckel oder Folie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurcode': "der Farbcode (eine Farbe von Brett und Messer für jede Art von Essen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergenenlijst': "die Allergenliste (darauf steht, was in jedem Gericht ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glutenvrij': "glutenfrei (ohne Gluten)", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.1': "Rohes Fleisch kommt unten in den Kühlschrank.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.2': "Ist das Hähnchen schon gar?", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.3': "Deck die Behälter in der Kühlzelle ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.q': "Ist diese Soße glutenfrei?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.a': "Das weiß ich nicht sicher. Ich schaue auf die Allergenliste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked': "Roh und fertig berühren sich nie", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.b': "Rohes Fleisch, roher Fisch und rohe Eier können Keime haben. Halte sie fern von Essen, das fertig zum Essen ist. Nimm ein eigenes Brett und Messer, oder den Farbcode deiner Küche, und wasch dir die Hände, nachdem du rohes Essen angefasst hast. Rohes Fleisch kommt unten in den Kühlschrank, damit nichts auf anderes Essen tropft. Deck Essen ab und schreib ein Datum darauf. Bei Allergien kann eine kleine Spur genug sein: Nimm sauberes Werkzeug. Ein Restaurant muss den Gästen sagen können, welche Allergene in einem Gericht sind: Schau auf die Allergenliste. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.p': "Welches Brett ist für rohes Fleisch?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.s': "Du hast rohes Hähnchen geschnitten. Jetzt musst du Tomaten für einen Salat schneiden. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o1': "Nimm ein sauberes Brett und ein sauberes Messer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o2': "Wisch das Brett mit einem Tuch ab, und mach weiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o3': "Schneide die Tomaten auf demselben Brett.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.w': "Keime vom rohen Hähnchen kommen auf die Tomaten, und ein Salat wird nicht noch einmal gekocht. Ein sauberes Brett verhindert das.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pass': "Die Spülküche und der Pass", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pass': "der Pass (die Theke, wo die Teller auf den Kellner warten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bon': "der Bon (die Bestellung vom Kellner an die Küche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spoelkeuken': "die Spülküche (wo abgewaschen wird)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwaskorf': "der Spülkorb (der Korb, der in die Spülmaschine kommt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorspoelen': "vorspülen (vor der Maschine abspülen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.warmhoudlamp': "die Wärmelampe (sie hält die Teller warm)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.1': "Tisch acht steht auf dem Pass.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.2': "Es kommen zwei neue Bons herein.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.3': "Spül die Teller zuerst vor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.q': "Wo bleibt Tisch zwölf?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.a': "Es steht auf dem Pass. Ich bringe es jetzt.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.pass': "Der Pass: Teller warten nicht", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.b': "Auf den Pass stellt die Küche die Teller für den Kellner. Warmes Essen muss schnell zum Gast, also wartet ein Teller nicht lange auf dem Pass. Prüf den Bon: der richtige Tisch, die richtigen Gerichte, ein sauberer Tellerrand? Dann nimm ihn. In der Spülküche: vorspülen, alles in die Körbe stellen und die Maschine den Rest machen lassen. Öffne die Maschine nicht, während sie läuft: Der Dampf ist sehr heiß. Trag Handschuhe, wenn du die Mittel der Maschine nachfüllst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.p': "Welcher Tisch ist das?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.s': "Auf dem Pass stehen zwei Teller. Du weißt nicht, für welchen Tisch sie sind. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o1': "Schau auf den Bon, oder frag den Koch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o2': "Bring sie zu einem Tisch, der wartet.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o3': "Warte, bis jemand anders sie nimmt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.w': "Ein Teller am falschen Tisch bedeutet zwei wartende Gäste und kaltes Essen. Eine kurze Frage geht schneller.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.bill': "Gänge und die Rechnung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorgerecht': "die Vorspeise (der erste Gang)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdgerecht': "das Hauptgericht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nagerecht': "der Nachtisch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reservering': "die Reservierung (ein vorher bestellter Tisch)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinapparaat': "das Kartenterminal", // nieuw, nalezen // nagelezen AI 28 nov
    'w.apartbetalen': "getrennt zahlen (jede Person zahlt für sich)", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.1': "Haben Sie reserviert?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.2': "Möchten Sie zusammen oder getrennt zahlen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.3': "Soll ich das Hauptgericht jetzt bringen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.q': "Dürfen wir getrennt zahlen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.a': "Ja, gern. Ich hole das Kartenterminal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill': "Geld am Tisch: zweimal zählen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.b': "Wenn ein Gast bezahlt, sag den Betrag deutlich und lass den Gast das Kartenterminal sehen. Bei Bargeld zählst du das Geld, wenn du es bekommst, und noch einmal, wenn du das Wechselgeld gibst. Das Geld kommt in die Kasse oder in deine Kellnerbörse, nie in deine eigene Tasche. Trinkgeld (fooi) kommt dahin, wo deine Firma es sagt, zum Beispiel in die Trinkgelddose. Ist ein Gast gegangen, ohne zu bezahlen? Lauf ihm nicht nach: Sag es deinem Chef. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.p': "Das macht fünfundvierzig Euro, bitte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.s': "Ein Gast gibt dir Geld und sagt: „Es stimmt so.“ Du hast es nicht gezählt. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o1': "Zähl es, während der Gast noch da ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o2': "Steck es ein, und zähl es später.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o3': "Vertrau dem Gast: Sag danke.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.w': "Wenn du später zählst und Geld fehlt, kann niemand prüfen, was passiert ist. Zählen am Tisch schützt den Gast und dich.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.carework': "Körperpflege und häusliche Pflege", // nieuw, nalezen // nagelezen AI 28 nov
    'l.washing': "Waschen und Anziehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.washandje': "der Waschlappen (ein kleines Tuch wie ein Handschuh)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.douchestoel': "der Duschstuhl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandenpoetsen': "Zähne putzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kammen': "kämmen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scheren': "rasieren", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steunkous': "der Stützstrumpf (ein enger Strumpf für die Beine)", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.1': "Ist das Wasser warm genug?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.2': "Möchten Sie Ihr Gesicht selbst waschen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.3': "Ich ziehe Ihnen jetzt Ihre Stützstrümpfe an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.q': "Ich will heute nicht duschen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.a': "Das ist in Ordnung. Soll ich Ihnen am Waschbecken helfen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing': "Zuerst fragen, zudecken und wählen lassen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.b': "Jemanden zu waschen ist sehr persönlich. Sag, was du machen wirst, und frag zuerst. Deck die Teile des Körpers, die du gerade nicht wäschst, mit einem Handtuch zu. Mach die Tür oder den Vorhang zu. Lass den Klienten wählen: die Dusche oder Waschen am Waschbecken, und welche Kleidung er anzieht. Lass den Klienten machen, was er noch selbst kann, auch wenn es langsamer geht. Sagt ein Klient nein? Zwing ihn nicht. Versuch es später noch einmal, biete etwas anderes an, und sag es der Pflegefachkraft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.p': "Was möchten Sie heute anziehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.s': "Eine Klientin sagt, dass sie heute nicht gewaschen werden will. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o1': "Akzeptiere es, und sag es der Pflegefachkraft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o2': "Wasch sie trotzdem: Es steht auf der Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o3': "Lass es aus, und sag nichts.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.w': "Eine Klientin darf nein sagen. Pflege mit Zwang schadet dem Vertrauen. Die Pflegefachkraft kann schauen, warum, und was man tun kann.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.observing': "Beobachten und berichten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapporteren': "berichten (aufschreiben, was du gesehen hast, in der Pflegeakte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgdossier': "die Pflegeakte (alles über die Pflege von einem Klienten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukplek': "die Druckstelle (eine rote Stelle vom langen Liegen oder Sitzen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huid': "die Haut", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plassen': "pinkeln", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vochtlijst': "die Trinkliste (wie viel ein Klient trinkt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.1': "Die Frau hat eine rote Stelle an der Ferse.", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.2': "Der Herr hat heute wenig getrunken.", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.3': "Ich schreibe es in die Pflegeakte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.q': "Gibt es etwas Besonderes bei Frau Jansen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.a': "Ja. Sie hat heute fast nicht gepinkelt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing': "Schreib, was du siehst, nicht was du denkst", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.b': "Was du in die Pflegeakte schreibst, liest der nächste Kollege. Schreib Fakten: was du gesehen, gehört oder gemessen hast, und wann. Nicht „Mevrouw is lastig“, sondern „Mevrouw wilde niet eten en duwde het bord weg.“ Schreib es am selben Tag, in kurzen Sätzen. Weißt du nicht sicher, wie du es auf Niederländisch schreibst? Sag es der Pflegefachkraft, und schreibt es zusammen. Schau dir die Haut an, wenn du jemanden wäschst: Eine rote Stelle, die nicht weggeht, kann der Anfang einer Druckstelle sein. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.p': "Ich schreibe auf, was ich gesehen habe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.s': "Eine Klientin war beim Waschen wütend. Du musst es in die Akte schreiben. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o1': "Schreib, was sie gesagt und getan hat, und wann.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o2': "Schreib: „Schwierige Frau, wie immer.“", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o3': "Schreib nichts: Das ist normal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.w': "Fakten helfen dem nächsten Kollegen und der Pflegefachkraft zu handeln. Eine Meinung sagt nicht, was passiert ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.homecare': "Häusliche Pflege", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thuiszorg': "die häusliche Pflege (Pflege in der eigenen Wohnung des Klienten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelkluis': "der Schlüsseltresor (eine kleine Box mit Code, in der der Hausschlüssel liegt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgplan': "der Pflegeplan (welche Pflege ein Klient bekommt, und wie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijkverpleegkundige': "die Gemeindepflegekraft (die Pflegefachkraft vom Team der häuslichen Pflege)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mantelzorger': "der pflegende Angehörige (ein Verwandter oder Freund, der sich um den Klienten kümmert)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmknop': "der Notrufknopf (der Klient trägt ihn, um Hilfe zu rufen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.1': "Zuerst klingle ich. Dann nehme ich den Schlüssel.", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.2': "Was steht im Pflegeplan?", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.3': "Ich komme heute eine Viertelstunde später.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.q': "Wer ist da?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.a': "Guten Morgen, hier ist die häusliche Pflege. Darf ich hereinkommen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare': "Gast in der Wohnung eines anderen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.b': "In der häuslichen Pflege arbeitest du in der eigenen Wohnung des Klienten. Du bist dort Gast: Klingle und sag, wer du bist, auch wenn du einen Schlüssel hast. Der Code vom Schlüsseltresor ist geheim. Schreib ihn nie dahin, wo andere ihn sehen können, und mach den Schlüsseltresor immer wieder zu. Halte dich an den Pflegeplan: Darin steht, was du machst. Ist etwas anders, oder macht der Klient die Tür nicht auf? Geh nicht einfach weg. Ruf dein Team oder die Gemeindepflegekraft an. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.p': "Guten Morgen, ich bin von der häuslichen Pflege.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.s': "Du klingelst. Die Klientin macht nicht auf. Ihr Auto steht da. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o1': "Ruf dein Team an, und warte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o2': "Geh weiter zur nächsten Klientin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o3': "Klingel noch einmal, und geh dann.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.homecare.w': "Die Klientin ist vielleicht gestürzt oder krank. Dein Team weiß, was zu tun ist, und wer einen Schlüssel hat.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.liftaids': "Hebehilfen und Sicherheit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijlaken': "das Gleittuch (ein glattes Tuch, um einen Klienten im Bett zu bewegen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilband': "das Hebetuch (es kommt unter den Klienten, für den Lifter)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stalift': "der Aufstehlifter (er hilft einem Klienten beim Aufstehen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkhoogte': "die Arbeitshöhe (das Bett auf der Höhe deiner Hüften)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedhek': "das Bettgitter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.transferplank': "das Rutschbrett (ein Brett, um vom Bett auf einen Stuhl zu rutschen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.1': "Stell das Bett auf Arbeitshöhe.", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.2': "Ist die Bremse am Rollstuhl an?", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.3': "Das machen wir zu zweit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.q': "Kannst du die Frau allein umdrehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.a': "Mit dem Gleittuch geht das. Ich hole es.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids': "Lass das Hilfsmittel heben", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.b': "Bevor du einen Lifter benutzt, prüf ihn: Ist der Akku geladen, hat das Hebetuch die richtige Größe und ist es nicht gerissen? Mach die Bremsen am Bett und am Rollstuhl fest. Bring das Bett auf die Höhe deiner Hüften, damit du dich nicht bückst. Sag dem Klienten jeden Schritt. Im Pflegeplan steht, welches Hilfsmittel ein Klient braucht. Ist ein Hilfsmittel kaputt oder fehlt es? Arbeite nicht ohne: Melde es, und bitte einen Kollegen um Hilfe. Hat dir niemand gezeigt, wie ein Hilfsmittel funktioniert? Frag, bevor du anfängst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.p': "Das Hebetuch ist kaputt. Ich hole ein anderes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.s': "Du willst den Lifter benutzen. Das Hebetuch hat einen kleinen Riss. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o1': "Nimm ein anderes Hebetuch, und melde den Riss.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o2': "Benutz es: Der Riss ist sehr klein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o3': "Mach einen Knoten in das Hebetuch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.w': "Ein kleiner Riss kann unter dem Gewicht eines Menschen größer werden. Ein Sturz aus einem Lifter kann den Klienten schwer verletzen.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.shopfloor': "Kasse, Lager und Schließen", // nieuw, nalezen // nagelezen AI 28 nov
    'l.returns': "Rückgaben und die Kasse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugbrengen': "zurückbringen (ein Produkt ins Geschäft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantenkaart': "die Kundenkarte (eine Karte zum Punktesammeln)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.statiegeld': "das Pfand (Geld zurück für eine leere Flasche oder Dose)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassalade': "die Kassenschublade (die Schublade mit dem Geld)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.streepjescode': "der Strichcode", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegoedbon': "der Gutschein (ein Papier, um später im Geschäft zu bezahlen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.1': "Sammeln Sie Punkte mit der Kundenkarte?", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.2': "Der Strichcode funktioniert nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.3': "Möchten Sie das Geld zurück oder einen Gutschein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.q': "Ich möchte diesen Pullover zurückbringen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.a': "Das geht. Haben Sie den Kassenbon noch?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns': "Rückgaben: Halte dich an die Regeln des Geschäfts", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.b': "Jedes Geschäft hat eigene Regeln für Rückgaben: wie viele Tage, mit oder ohne Kassenbon, Geld zurück oder ein Gutschein. Lern sie, und halte dich bei jedem Kunden daran. Nicht sicher? Frag einen Kollegen oder den Filialleiter, und entscheide nicht allein. Am Ende deiner Schicht zählst du deine Kassenschublade, mit einem Kollegen, wenn dein Geschäft es so macht. Nimm nie Geld aus der Kasse für dich, auch nicht, um es kurz zu leihen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.p': "Ich frage kurz den Filialleiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.s': "Eine Kundin will Geld zurück für Schuhe. Sie hat keinen Kassenbon. Du kennst die Regel nicht. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o1': "Frag den Filialleiter, was du tun sollst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o2': "Gib das Geld zurück: Sie ist nett.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o3': "Sag nein, und schick sie weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.w': "Der Filialleiter kennt die Regeln und kann entscheiden. Dann bekommt die Kundin eine faire Antwort, und du bist nicht schuld.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.facing': "Facing und die Kühlware", // nieuw, nalezen // nagelezen AI 28 nov
    'w.facen': "vorziehen, facen (die Produkte nach vorne ziehen, Etikett nach vorne)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afprijzen': "herabsetzen (einen niedrigeren Preis geben)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelvak': "das Kühlregal (das kalte Regal im Geschäft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diepvries': "die Tiefkühltruhe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitpakken': "auspacken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schapkaartje': "das Preisschild (die Preiskarte am Regal)", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.1': "Zuerst das Kühlregal, dann der Rest.", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.2': "Stell alles ordentlich nach vorne.", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.3': "Setz die Produkte von heute im Preis herab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.q': "Bist du mit dem Kühlregal fertig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.a': "Fast. Ich muss noch vorziehen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing': "Kalt zuerst, und das Regal sieht voll aus", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.b': "Kühlware und Tiefkühlware kommen zuerst ins Kühlregal oder in die Tiefkühltruhe, vor allem anderen. Sie dürfen nicht lange warm stehen. Dann der Rest. Facing heißt: Die Produkte nach vorne ziehen, mit dem Etikett zum Kunden. Dann sieht das Regal voll und ordentlich aus. Prüf das Preisschild: Stimmt der Preis für dieses Produkt? Wenn du Kartons öffnest, schneide von deinem Körper weg, und nicht zu tief: Du kannst das Produkt beschädigen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.p': "Zuerst die Kühlware, dann der Rest.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.s': "Eine Palette mit Milch und eine Palette mit Chips kommen an. Du bist allein. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o1': "Stell zuerst die Milch in die Kühlung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o2': "Fang mit den Chips an: Die sind leichter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o3': "Lass beide stehen, bis ein Kollege kommt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.w': "Milch, die zu lange warm steht, kann Kunden krank machen und muss weggeworfen werden. Chips können warten.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shrink': "Schaden und Diebstahl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.derving': "der Schwund (was das Geschäft verliert: kaputte, alte oder gestohlene Produkte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afschrijven': "abschreiben (ein Produkt als Verlust eintragen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsaankoop': "der Personalkauf (was du in deinem eigenen Geschäft kaufst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tassencontrole': "die Taschenkontrolle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassamedewerker': "der Kassierer, die Kassiererin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelwagen': "der Einkaufswagen", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.1': "Dieses Glas ist kaputt. Ich schreibe es ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.2': "Ich bezahle meine Einkäufe bei einem Kollegen an der Kasse.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.3': "Am Ausgang steht ein voller Einkaufswagen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.q': "Darf ich kurz in deine Tasche schauen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.a': "Ja, klar. Hier ist mein Kassenbon.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink': "Deine eigenen Einkäufe: Bezahl wie ein Kunde", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.b': "Ein Geschäft verliert viel durch kaputte Produkte, alte Produkte und Diebstahl. Hilf mit, das klein zu halten. Ein kaputtes oder beschädigtes Produkt? Stell es nicht zurück: Schreib es ab, so wie dein Geschäft es macht. Deine eigenen Einkäufe: Bezahl an der Kasse wie jeder Kunde, und behalte den Kassenbon. In vielen Geschäften darfst du deine eigenen Einkäufe nicht selbst kassieren: Ein Kollege macht das. Iss oder nimm nie ein Produkt, ohne zu bezahlen, auch kein kleines. Manche Geschäfte kontrollieren Taschen: Das ist eine Regel des Geschäfts, kein Zeichen von Misstrauen gegen dich. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.p': "Ich bezahle zuerst, und ich behalte den Kassenbon.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.s': "Am Ende deiner Schicht hast du Hunger. Ein Brötchen ist heute abgelaufen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o1': "Frag den Filialleiter, was die Regel ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o2': "Iss es: Es wird sowieso weggeworfen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o3': "Nimm es in deiner Tasche mit nach Hause.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.w': "In vielen Geschäften ist es Diebstahl, ein Produkt zu nehmen, ohne zu bezahlen, auch wenn es alt ist. Wenn du zuerst fragst, bist du auf der sicheren Seite.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shopclose': "Das Geschäft schließen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitingstijd': "die Ladenschlusszeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolluik': "der Rollladen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasverschil': "die Kassendifferenz (mehr oder weniger Geld in der Kasse, als da sein sollte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluis': "der Tresor (ein starker Kasten für Geld)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overval': "der Überfall (jemand nimmt Geld mit Drohungen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterdeur': "die Hintertür", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.1': "Wir schließen in zehn Minuten.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.2': "Wir zählen die Kasse zu zweit.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.3': "Ist die Hintertür abgeschlossen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.q': "Darf ich noch schnell hinein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.a': "Tut mir leid, wir haben geschlossen. Morgen öffnen wir um acht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose': "Ein Überfall: Gib es her, und bleib sicher", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.b': "Zur Ladenschlusszeit ist viel Geld in der Kasse, deshalb haben Geschäfte Regeln: zu zweit zählen, das Geld in den Tresor bringen und zuerst die Hintertür abschließen. Ein Überfall (overval)? Dein Leben ist mehr wert als das Geld. Bleib ruhig, tu, was sie sagen, und kämpf nicht und lauf ihnen nicht nach. Merk dir, was du kannst: Kleidung, Größe, Stimme. Wenn sie weg sind: Schließ die Tür ab, ruf 112 an und fass nichts an. Sprich danach mit deinem Chef oder mit jemandem, dem du vertraust. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.p': "Wir schließen. Ich schließe die Tür ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.s': "Ein Mann mit einem Messer will das Geld aus deiner Kasse. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o1': "Bleib ruhig, und gib ihm das Geld.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o2': "Kämpf mit ihm: Das Geld gehört nicht ihm.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o3': "Lauf nach hinten, und schließ dich ein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.w': "Kämpfen oder Weglaufen macht einen Räuber nervös und gefährlicher. Geld kann man ersetzen. Dich nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.uitzend': "Arbeit über eine Zeitarbeitsfirma", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hirer': "Die Zeitarbeitsfirma und der Entleiher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlener': "der Entleiher (die Firma, in die dich die Zeitarbeitsfirma zum Arbeiten schickt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vestiging': "die Filiale (das Büro der Zeitarbeitsfirma in deinem Ort)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intakegesprek': "das Aufnahmegespräch (das erste Gespräch bei der Zeitarbeitsfirma)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstapplaats': "der Abholpunkt (wo der Bus der Zeitarbeitsfirma dich abholt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsregels': "die Firmenregeln (die Regeln des Entleihers)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekpunt': "die Ansprechperson (die Person, zu der du mit Fragen gehst)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.1': "Morgen arbeitest du bei einem neuen Entleiher.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.2': "Wer ist hier meine Ansprechperson?", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.3': "Der Bus fährt um sechs am Abholpunkt ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.q': "Kannst du morgen bei einem neuen Entleiher anfangen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.a': "Ja. Um wie viel Uhr muss ich da sein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer': "Zwei Firmen: Wer macht was?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.b': "Du arbeitest über eine Zeitarbeitsfirma (uitzendbureau), aber du machst die Arbeit in einer anderen Firma: beim Entleiher (inlener). Die Zeitarbeitsfirma ist dein Arbeitgeber: Dein Vertrag, dein Lohn, deine Lohnabrechnung und deine freien Tage kommen von der Zeitarbeitsfirma. Der Entleiher sagt dir, was du bei der Arbeit tun sollst, und muss für sichere Arbeit sorgen, genau wie bei seinen eigenen Mitarbeitern. Melde dich krank, so wie deine Zeitarbeitsfirma es sagt: oft bei der Zeitarbeitsfirma und beim Entleiher. Speichere den Namen und die Telefonnummer deiner Ansprechperson bei der Zeitarbeitsfirma in deinem Handy. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.p': "Wer ist meine Ansprechperson bei der Zeitarbeitsfirma?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.s': "Beim Entleiher musst du mit einer Maschine arbeiten. Niemand hat dir gezeigt, wie. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o1': "Bitte den Entleiher, es dir zuerst zu zeigen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o2': "Probier es: Die Zeitarbeitsfirma ist verantwortlich.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o3': "Geh nach Hause, und sag nichts.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.w': "Der Entleiher muss dir zeigen, wie du sicher arbeitest, genau wie seinen eigenen Mitarbeitern. Danach zu fragen ist dein Recht.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.phases': "Dein Vertrag und die Phasen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fase': "die Phase (ein Schritt in deinem Zeitarbeitsvertrag: A, B oder C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzendbeding': "die Zeitarbeitsklausel (deine Arbeit kann enden, wenn der Entleiher dich nicht mehr braucht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflopen': "enden, auslaufen (ein Vertrag)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorwerken': "weiterarbeiten (am selben Ort)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastecontract': "der unbefristete Vertrag (ein Vertrag ohne Enddatum)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderbreking': "die Unterbrechung (eine Zeit ohne Arbeit zwischen zwei Verträgen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.1': "In welcher Phase bin ich jetzt?", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.2': "Mein Vertrag läuft nächste Woche aus.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.3': "Kann ich hier weiterarbeiten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.q': "Dein Einsatz endet am Freitag.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.a': "Okay. Haben Sie andere Arbeit für mich?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases': "Phase A, B und C", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.b': "Die meisten Zeitarbeitskräfte arbeiten unter einem Tarifvertrag für Zeitarbeit (uitzend-cao). Er hat Phasen. In Phase A kann deine Arbeit meistens enden, wenn der Entleiher dich nicht mehr braucht (uitzendbeding). In Phase B bekommst du befristete Verträge. In Phase C bekommst du einen unbefristeten Vertrag mit der Zeitarbeitsfirma. Wie lange jede Phase dauert, steht in deinem Tarifvertrag. Frag die Zeitarbeitsfirma, in welcher Phase du bist, und heb alle deine Verträge auf. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.p': "Wie lange dauert Phase A bei mir?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.s': "Du hast lange für dieselbe Zeitarbeitsfirma gearbeitet. Du bekommst immer noch kurze Verträge. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o1': "Frag die Zeitarbeitsfirma, in welcher Phase du bist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o2': "Nichts: Zeitarbeit ist immer kurz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o3': "Hör auf, und such eine andere Zeitarbeitsfirma.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.w': "Nach genug Zeit gibt dir der Tarifvertrag mehr Sicherheit. Die Zeitarbeitsfirma kann dir sagen, wo du stehst, und die Gewerkschaft kann es mit dir prüfen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.deductions': "Lohn und Abzüge", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhouding': "der Abzug (Geld, das von deinem Lohn abgezogen wird)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastekracht': "die Stammkraft (ein Mitarbeiter, der beim Entleiher selbst angestellt ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervoer': "der Transport (der Bus oder Kleinbus zur Arbeit)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftelijk': "schriftlich (auf Papier oder in einer E-Mail)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navragen': "nachfragen (herausfinden, ob etwas stimmt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brutoloon': "der Bruttolohn (dein Lohn vor Steuern und Abzügen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.1': "Was ist dieser Abzug auf meiner Lohnabrechnung?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.2': "Verdiene ich dasselbe wie die Stammkräfte?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.3': "Das will ich zuerst auf Papier sehen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.q': "Die Kosten für den Bus ziehen wir von deinem Lohn ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.a': "Ist das erlaubt? Das frage ich zuerst nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions': "Was darf von deinem Lohn abgehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.b': "Du hast ein Recht auf mindestens denselben Lohn wie Mitarbeiter des Entleihers, die dieselbe Arbeit machen. Geld, das von deinem Lohn abgezogen wird (inhouding), muss auf deiner Lohnabrechnung stehen. Steuern und Beiträge gehen nach dem Gesetz ab. Außer diesen darf die Zeitarbeitsfirma vom Mindestlohn nur zwei Kosten abziehen: die Miete für deine Wohnung und den Beitrag für die Krankenversicherung, und nur, wenn du schriftlich zugestimmt hast. Andere Kosten, wie Transport, Arbeitskleidung, Bußgelder oder eine Gebühr für die Vermittlung eines Jobs, dürfen nicht vom Mindestlohn abgezogen werden. Verstehst du einen Abzug nicht? Bitte die Zeitarbeitsfirma, ihn schriftlich zu erklären. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.p': "Wofür ist dieser Abzug?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.s': "Die Zeitarbeitsfirma zieht dir Geld vom Lohn ab für den Bus zur Arbeit. Du verdienst den Mindestlohn. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o1': "Frag nach: Das ist nicht erlaubt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o2': "Nichts: Du fährst ja jeden Tag mit dem Bus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o3': "Fahr nicht mehr mit dem Bus, und geh zu Fuß.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.w': "Vom Mindestlohn dürfen nur Miete und Krankenversicherung abgehen, und nur mit deinem schriftlichen Ja. Die Gewerkschaft oder das Juridisch Loket kann dir helfen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.agencyhome': "Wohnen und Hilfe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisvesting': "die Unterkunft (ein Ort zum Wohnen, den die Zeitarbeitsfirma organisiert)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisgenoot': "der Mitbewohner (eine Person, die im selben Haus wohnt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisregels': "die Hausregeln (die Regeln des Hauses, in dem du wohnst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huismeester': "der Hausmeister (die Person, die sich um das Haus kümmert)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldpunt': "die Meldestelle (ein Ort, wo du ein Problem melden kannst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advies': "der Rat, die Beratung", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.1': "Ich will einen eigenen Mietvertrag.", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.2': "Im Bad ist Schimmel.", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.3': "Ich rufe die Gewerkschaft an, um Rat zu bekommen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.q': "Du musst am Freitag aus der Wohnung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.a': "Das ist sehr kurz. Ich hole mir zuerst Rat.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome': "Deine Wohnung, und wo du Hilfe bekommst", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.b': "Organisiert die Zeitarbeitsfirma deine Wohnung? Dann bekommst du einen eigenen Mietvertrag, schriftlich, getrennt von deinem Arbeitsvertrag. Heb eine Kopie auf. Darin steht, was du bezahlst, und wie und wann die Miete endet. Deine Arbeit endet? Deine Wohnung endet nicht immer am selben Tag: Hol dir Rat, bevor du ausziehst. Unsichere oder sehr volle Wohnung, Drohungen oder zu wenig Lohn? Hol dir Hilfe: die Gewerkschaft, das Juridisch Loket (kostenlose Rechtsberatung), FairWork oder die Nederlandse Arbeidsinspectie, wo du auch anonym melden kannst. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.p': "Darf ich eine Kopie von meinem Mietvertrag haben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.s': "Deine Arbeit endet. Der Hausmeister sagt, du musst heute aus dem Haus. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o1': "Frag zuerst die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o2': "Zieh heute aus, und schlaf bei einem Freund.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o3': "Pack deine Tasche, und schlaf draußen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.w': "Dein Mietvertrag hat eigene Regeln, getrennt von deiner Arbeit. Ein Rat hilft dir zu wissen, wann du wirklich ausziehen musst.", // nieuw, nalezen // nagelezen AI 28 nov
    // The basis units at four lessons (23 November 2026): two new lessons each in Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte, Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online op je werk.
    'l.vacancy': "Eine Stellenanzeige lesen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advertentie': "die Anzeige (ein Text, der eine Arbeit oder eine Sache anbietet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eis': "die Anforderung (was du haben oder können musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parttime': "Teilzeit (weniger Stunden pro Woche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fulltime': "Vollzeit (eine ganze Arbeitswoche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sollicitatiebrief': "das Bewerbungsschreiben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contactpersoon': "die Kontaktperson (die Person, die du anrufen oder der du schreiben kannst)", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.1': "Ich habe Ihre Anzeige im Internet gesehen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.2': "Ist die Stelle in Teilzeit oder Vollzeit?", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.3': "Was sind die Anforderungen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.q': "Warum rufen Sie an?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.a': "Ich rufe wegen Ihrer offenen Stelle an. Ist sie noch frei?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.result': "Nach dem Vorstellungsgespräch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aangenomen': "eingestellt (du hast die Stelle bekommen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijzing': "die Absage (du hast die Stelle nicht bekommen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbod': "das Angebot (sie bieten dir die Stelle an)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefdag': "der Probetag (ein Tag Arbeit, zum Ausprobieren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabellen': "nachfragen, noch einmal anrufen (fragen, wie es aussieht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teleurgesteld': "enttäuscht", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.1': "Sie sind eingestellt!", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.2': "Ich habe eine Absage bekommen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.3': "Wird der Probetag bezahlt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.q': "Leider haben wir uns für jemand anderen entschieden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.a': "Schade. Darf ich fragen, warum?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.residence': "Deine Aufenthaltspapiere", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verblijfsvergunning': "die Aufenthaltserlaubnis", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pasfoto': "das Passfoto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerafdruk': "der Fingerabdruck", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldig': "gültig (man kann es noch benutzen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verloopdatum': "das Ablaufdatum (der letzte Tag, an dem es gültig ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volgnummer': "die Wartenummer (der Zettel mit deiner Nummer, wann du dran bist)", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.1': "Meine Aufenthaltserlaubnis ist noch ein Jahr gültig.", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.2': "Was ist das Ablaufdatum von deinem Pass?", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.3': "Ich habe einen Termin bei der Gemeinde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.q': "Ihre Aufenthaltserlaubnis ist fast abgelaufen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.a': "Dann beantrage ich sofort eine neue.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.newhome': "Umziehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brievenbus': "der Briefkasten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterstand': "der Zählerstand (die Zahlen auf dem Zähler für Gas, Strom oder Wasser)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naambordje': "das Namensschild (dein Name an der Tür)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.woning': "die Wohnung (ein Haus oder eine Wohnung)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorsturen': "nachsenden (an eine neue Adresse weiterschicken)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdag': "der Umzugstag", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.1': "Ich ziehe nächste Woche um.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.2': "Mein Name steht nicht auf dem Briefkasten.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.3': "Ich gebe meine neue Adresse durch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.q': "Wo wohnst du jetzt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.a': "In einer neuen Wohnung. Hier ist meine neue Adresse.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.payparts': "Was auf deiner Lohnabrechnung steht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pensioen': "die Rente (Geld für später, wenn du alt bist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.periode': "der Zeitraum (die Wochen oder der Monat dieses Lohns)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrag': "der Betrag (Geld)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.totaal': "die Summe, insgesamt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkorting': "die Abkürzung (eine kurze Form von einem Wort)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsnummer': "die Personalnummer (deine Nummer in der Firma)", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.1': "Was bedeutet diese Abkürzung?", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.2': "Dieser Betrag geht in meine Rente.", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.3': "Für welchen Zeitraum ist dieser Lohn?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.q': "Was ist deine Personalnummer?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.a': "Sie steht oben, neben meinem Namen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.latepay': "Lohn zu spät, fehlt oder bar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwartwerken': "schwarzarbeiten (kein Vertrag, keine Steuer, keine Rechte auf Papier)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorschot': "der Vorschuss (ein Teil vom Lohn vor dem Zahltag)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabetaling': "die Nachzahlung (Geld, das du später bekommst, um deinen Lohn zu korrigieren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekort': "der Fehlbetrag (Geld, das fehlt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.betaaldag': "der Zahltag", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankafschrift': "der Kontoauszug (eine Liste mit dem Geld, das rein- und rausgeht)", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.1': "Mein Lohn ist zu spät.", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.2': "Ich arbeite nicht schwarz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.3': "Kann ich einen Vorschuss bekommen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.q': "Das fehlende Geld bekommst du nächsten Monat.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.a': "Kann ich das schriftlich haben?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.holiday': "Deinen Urlaub planen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.saldo': "das Guthaben (wie viele Tage du noch hast)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeuren': "genehmigen (Ja dazu sagen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verlopen': "verfallen, ablaufen (es ist nicht mehr gültig)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zomervakantie': "der Sommerurlaub, die Sommerferien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukte': "die Hochsaison, viel Betrieb (viel Arbeit)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvraag': "der Antrag (du bittest um etwas, oft mit einem Formular)", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.1': "Wie viele Urlaubstage habe ich noch?", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.2': "Mein Urlaub ist genehmigt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.3': "Ich fülle das Formular aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.q': "Im Sommer ist viel los. Kannst du im Mai in Urlaub gehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.a': "Lieber im Juli. Dann ist meine Familie zu Hause.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.special': "Besondere freie Tage", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bruiloft': "die Hochzeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begrafenis': "die Beerdigung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geboorteverlof': "der Geburtsurlaub (für den Partner, wenn ein Baby geboren wird)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderverlof': "der Sonderurlaub (zum Beispiel für eine Hochzeit oder eine Beerdigung)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerstdagen': "Weihnachten (die zwei Weihnachtstage)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijvragen': "um einen freien Tag bitten", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.1': "Mein Bruder heiratet. Kann ich um einen freien Tag bitten?", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.2': "Mein Onkel ist gestorben. Die Beerdigung ist am Freitag.", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.3': "Muss ich an Weihnachten arbeiten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.q': "Herzlichen Glückwunsch zu deinem Baby! Nimmst du Geburtsurlaub?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.a': "Ja, die erste Woche bin ich zu Hause.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.unwell': "Dir geht es nicht gut", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdpijn': "die Kopfschmerzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.griep': "die Grippe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkouden': "erkältet", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nietlekker': "nicht gut (du fühlst dich ein bisschen krank)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naarhuis': "nach Hause gehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzieken': "zu Hause bleiben, bis du wieder gesund bist", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.1': "Ich fühle mich nicht gut.", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.2': "Ich habe Kopfschmerzen und ich bin erkältet.", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.3': "Ich gehe nach Hause. Ich bin krank.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.q': "Du siehst blass aus. Geht es dir gut?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.a': "Nein, ich fühle mich nicht gut. Darf ich nach Hause gehen?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.injury': "Verletzt durch die Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsongeval': "der Arbeitsunfall", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzekering': "die Versicherung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schadevergoeding': "der Schadenersatz (Geld für den Schaden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oorzaak': "die Ursache (warum es passiert ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.letsel': "die Verletzung (ein Schaden an deinem Körper)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verklaring': "die Erklärung, die Aussage (was du über das Geschehene schreibst oder sagst)", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.1': "Ich hatte einen Arbeitsunfall.", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.2': "Was war die Ursache?", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.3': "Mein Kollege hat es gesehen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.q': "Schreibst du hier deine Aussage auf?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.a': "Ja. Darf ich eine Kopie haben?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debt': "Schulden beim Chef oder bei der Zeitarbeitsfirma", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.lening': "der Kredit, das Darlehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lenen': "leihen, sich etwas leihen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzitten': "festsitzen (du kannst nicht weg)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tussenpersoon': "der Vermittler (jemand, der gegen Geld Arbeit besorgt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rente': "die Zinsen (extra Geld, das du für einen Kredit bezahlst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.belofte': "das Versprechen", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.1': "Ich musste für diese Arbeit bezahlen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.2': "Meine Schulden werden jeden Monat höher.", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.3': "Der Vermittler hat meinen Pass.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.q': "Du darfst erst gehen, wenn deine Schulden bezahlt sind.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.a': "Das ist nicht erlaubt. Ich hole mir Hilfe.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.inspection': "Die Inspektion und andere Hilfe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inspectie': "die Inspektion (Leute, die prüfen, ob die Arbeit fair und sicher ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controle': "die Kontrolle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slachtoffer': "das Opfer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mensenhandel': "der Menschenhandel (Menschen werden für Arbeit oder Sex benutzt und verkauft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertrouwen': "vertrauen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tolk': "der Dolmetscher / die Dolmetscherin", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.1': "Morgen kommt die Inspektion.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.2': "Darf ich einen Dolmetscher haben?", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.3': "Ich vertraue diesem Mann nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.q': "Willst du mit der Inspektion sprechen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.a': "Ja, aber mein Chef darf es nicht hören.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.carpool': "Fahrgemeinschaft und Firmenbus", // nieuw, nalezen // nagelezen AI 28 nov
    'w.carpoolen': "eine Fahrgemeinschaft bilden (zusammen in einem Auto zur Arbeit fahren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meerijden': "mitfahren (im Auto von jemand anderem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gordel': "der Sicherheitsgurt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.instappen': "einsteigen (in ein Auto, einen Bus oder einen Zug)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstappen': "aussteigen (aus einem Auto, einem Bus oder einem Zug)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijrijder': "der Beifahrer (neben dem Fahrer)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.1': "Darf ich bei dir mitfahren?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.2': "Schnall dich an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.3': "Ich steige am Bahnhof aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.q': "Wer fährt morgen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.a': "Ich fahre. Um sechs hole ich dich ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.train': "Zug, Verspätung und zu spät kommen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.station': "der Bahnhof", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perron': "der Bahnsteig (wo du in den Zug steigst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overstappen': "umsteigen (in einen anderen Zug oder Bus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvallen': "ausfallen (der Zug fährt nicht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kaartje': "die Fahrkarte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reisplanner': "die Reiseauskunft (eine App, die Züge und Busse zeigt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.1': "Mein Zug fällt aus.", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.2': "Ich muss einmal umsteigen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.3': "Von welchem Bahnsteig fährt der Zug?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.q': "Warum kommst du so spät?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.a': "Mein Zug ist ausgefallen. Ich habe dir eine Nachricht geschickt.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.checklist': "Prüfen, bevor du fertig bist", // nieuw, nalezen // nagelezen AI 28 nov
    'w.checklist': "die Checkliste (eine Liste mit Dingen, die du prüfen musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvinken': "abhaken (einen Haken hinter eine Aufgabe setzen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdoen': "noch einmal machen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compleet': "vollständig (es fehlt nichts)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergeten': "vergessen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resultaat': "das Ergebnis", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.1': "Ich hake alles auf der Checkliste ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.2': "Ist die Bestellung vollständig?", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.3': "Das muss ich noch einmal machen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.q': "Hast du nichts vergessen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.a': "Ich schaue noch einmal auf die Checkliste.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.leavesite': "Deinen Arbeitsplatz verlassen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugzetten': "zurückstellen (an seinen Platz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vegen': "fegen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vloer': "der Boden", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitdoen': "ausschalten (das Licht, eine Maschine)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alslaatste': "als Letzter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlaten': "hinterlassen (wie du deinen Platz verlässt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.1': "Ich hinterlasse meinen Platz ordentlich.", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.2': "Wer geht als Letzter?", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.3': "Mach das Licht aus und die Tür zu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.q': "Gehst du heute als Letzter?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.a': "Ja. Ich schalte alles aus und schließe die Tür ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.stagedays': "Jeden Tag im Praktikum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stageplek': "der Praktikumsplatz (die Firma, in der du dein Praktikum machst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwezig': "abwesend (nicht da)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwezig': "anwesend (da)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagevergoeding': "die Praktikumsvergütung (Geld, das du im Praktikum bekommen kannst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiding': "die Betreuung (Hilfe von deinem Betreuer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerling': "der Schüler / die Schülerin (in der Schule)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.1': "Ich bin morgen abwesend. Ich bin krank.", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.2': "Bekomme ich eine Praktikumsvergütung?", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.3': "An meinem Praktikumsplatz arbeite ich vier Tage.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.q': "Warum warst du gestern nicht da?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.a': "Ich war krank. Ich habe die Schule und die Firma angerufen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.stageend': "Das Ende von deinem Praktikum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eindgesprek': "das Abschlussgespräch (am Ende von deinem Praktikum)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geslaagd': "bestanden (du hast es gut genug gemacht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezakt': "durchgefallen (diesmal nicht gut genug)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herkansing': "die Wiederholungsprüfung (eine neue Chance)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedanken': "sich bedanken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trakteren': "einen ausgeben (etwas Leckeres zum Essen für alle mitbringen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.1': "Morgen habe ich mein Abschlussgespräch.", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.2': "Ich habe mein Praktikum bestanden.", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.3': "Ich möchte mich bei allen bedanken.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.q': "Dein letzter Tag! Was machst du jetzt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.a': "Zuerst mein Diplom holen. Dann suche ich Arbeit.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.neighbours': "Deine Nachbarschaft", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurt': "die Nachbarschaft, das Viertel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurthuis': "das Nachbarschaftszentrum (ein Haus für Aktivitäten in deinem Viertel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straat': "die Straße", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kennismaken': "sich kennenlernen (jemanden zum ersten Mal treffen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overlast': "die Belästigung, die Störung (Lärm oder Ärger für andere)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurvrouw': "die Nachbarin (eine Frau)", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.1': "Ich wohne seit kurzem in dieser Straße.", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.2': "In der Bibliothek übe ich Niederländisch.", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.3': "Entschuldigung für die Störung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.q': "Hallo, ich bin deine neue Nachbarin.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.a': "Schön, dich kennenzulernen! Ich bin Ali.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.join': "Schule, Sport und Ehrenamt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilliger': "der Freiwillige / die Freiwillige (jemand, der ohne Bezahlung hilft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilligerswerk': "die ehrenamtliche Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sportclub': "der Sportverein", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderavond': "der Elternabend (in der Schule)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leraar': "der Lehrer / die Lehrerin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.basisschool': "die Grundschule", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.1': "Mein Sohn geht in die Grundschule.", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.2': "Ich spiele Fußball in einem Sportverein.", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.3': "Am Samstag mache ich ehrenamtliche Arbeit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.q': "Kommst du zum Elternabend?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.a': "Ja. Ich möchte gern mit dem Lehrer sprechen.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workphotos': "Fotos und Daten", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezicht': "das Gesicht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantgegevens': "die Kundendaten (Name, Adresse, Telefon von einem Kunden)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onlinezetten': "online stellen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wissen': "löschen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werktelefoon': "das Diensthandy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestand': "die Datei (auf einem Computer)", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.1': "Ich stelle keine Fotos von der Arbeit online.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.2': "Ich lösche das Foto sofort.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.3': "Sein Gesicht ist auf dem Foto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.q': "Darf ich ein Foto von dir machen? Für das Internet.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.a': "Nein, lieber nicht. Ich will nicht online sein.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.device': "Ein sicheres Handy und ein sicherer Computer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.update': "das Update (eine neue Version von einer App oder einem Programm)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.virus': "der Virus (ein Programm, das deinem Computer schadet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wifi': "das WLAN", // nieuw, nalezen // nagelezen AI 28 nov
    'w.usbstick': "der USB-Stick", // nieuw, nalezen // nagelezen AI 28 nov
    'w.installeren': "installieren", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openbaar': "öffentlich (für alle)", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.1': "Ich installiere das Update heute Abend.", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.2': "Dieser USB-Stick lag auf dem Boden.", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.3': "Ist dieses WLAN sicher?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.q': "Darf ich diese App auf das Diensthandy laden?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.a': "Frag zuerst die IT-Abteilung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy': "Ruf an, oder schick eine kurze Nachricht", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.b': "Lies die Anzeige gut: die Stunden, den Ort, und was du haben musst, wie einen Führerschein oder ein Zertifikat. Du musst nicht alles haben: Wenn du das meiste hast, versuch es trotzdem. Ruf an oder schreib eine kurze Nachricht: Sag deinen Namen, welche Stelle, und warum du sie willst. Bezahl nie Geld, um eine Arbeit zu bekommen, und schick nie deine Login-Codes für eine Anzeige.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.p': "Ich habe kein Diplom, aber ich habe viel Erfahrung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.s': "Eine Anzeige verlangt 3 Jahre Erfahrung. Du hast 2 Jahre. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o1': "Bewirb dich trotzdem, und sag, was du kannst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o2': "Bewirb dich nicht: Du hast zu wenig.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o3': "Schreib 3 Jahre: Niemand prüft das.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.w': "Eine Anzeige verlangt oft mehr, als die Arbeit wirklich braucht. Ehrlich sagen, was du kannst, funktioniert besser als lügen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result': "Ein Nein ist nicht das Ende", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.b': "Nach einer Woche nichts gehört? Du darfst anrufen und höflich nachfragen. Eine Absage bekommen? Frag, was du nächstes Mal besser machen kannst: Viele Arbeitgeber sagen es dir. Dann versuch es noch einmal: Die meisten Menschen bekommen zuerst ein paar Absagen. Eine Zusage bekommen? Frag, wann du anfängst, und frag nach deinem Vertrag, bevor du beginnst. Zu einem Probetag eingeladen? Frag vorher, wie lange er dauert und ob er bezahlt wird.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.p': "Was kann ich nächstes Mal besser machen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.s': "Nach einem Vorstellungsgespräch bekommst du eine Absage per E-Mail. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o1': "Frag höflich, was du besser machen kannst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o2': "Schreib zurück, dass sie einen Fehler gemacht haben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o3': "Hör auf, dich zu bewerben: Es klappt nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.w': "Eine Rückmeldung hilft dir im nächsten Gespräch. Eine höfliche Frage hinterlässt auch einen guten Eindruck von dir.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence': "Deine Papiere: Prüf das Datum", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.b': "Aus der EU? Dann darfst du hier mit einem gültigen Pass oder Ausweis wohnen und arbeiten: Du brauchst keine Erlaubnis. Von außerhalb der EU? Dann brauchst du eine gültige Aufenthaltserlaubnis. Auf der Karte steht, ob du arbeiten darfst. Prüf das Ablaufdatum deiner Papiere. Beantrage rechtzeitig eine neue Erlaubnis beim IND: Monate vor dem Datum, nicht in der letzten Woche. Heb eine Kopie von jedem Brief auf. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.p': "Meine Erlaubnis läuft bald ab. Was muss ich tun?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.s': "Deine Aufenthaltserlaubnis läuft in zwei Monaten ab. Du hast bei der Arbeit sehr viel zu tun. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o1': "Beantrage jetzt eine neue.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o2': "Warte bis zur letzten Woche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o3': "Mach nichts: Die Arbeit geht vor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.w': "Ohne gültige Erlaubnis darfst du vielleicht nicht arbeiten. Eine neue Erlaubnis braucht Zeit, darum fängst du früh an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome': "Neue Adresse? Sag es allen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.b': "Du ziehst um? Sag der gemeente schnell deine neue Adresse: Das musst du tun. Sag es auch deinem Arbeitgeber, deiner Bank, deiner Versicherung und deinem Arzt. Schreib deinen Namen auf den Briefkasten, sonst kommen Briefe nicht bei dir an. Schreib am Umzugstag die Zählerstände auf und mach Fotos davon. Dann bezahlst du nur, was du verbraucht hast.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.p': "Ich bin umgezogen. Das ist meine neue Adresse.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.s': "Du bist vor zwei Wochen umgezogen. Deine Briefe gehen noch an deine alte Adresse. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o1': "Gib der gemeente jetzt deine neue Adresse.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o2': "Warte: Die Post findet dich schon.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o3': "Bitte deinen alten Nachbarn, deine Briefe aufzuheben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.w': "Wichtige Briefe, wie Bußgelder oder Steuerbriefe, haben Fristen. Wenn sie an die falsche Adresse gehen, kannst du sie verpassen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts': "Lies jede Zeile", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.b': "Deine Lohnabrechnung hat viele Zeilen und kurze Wörter. Oben: dein Name, deine Personalnummer und der Zeitraum. Dann dein Bruttolohn, deine Stunden und eventuelle Zuschläge. Dann, was abgeht: Steuern und Beiträge. In vielen Jobs bezahlen du und dein Arbeitgeber beide für deine Rente: Deinen Teil siehst du auf deiner Lohnabrechnung. Unten: dein Nettolohn. Du verstehst eine Zeile nicht? Bitte deinen Arbeitgeber, sie zu erklären. Heb alle deine Lohnabrechnungen auf. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.p': "Was bedeutet diese Zeile auf meiner Lohnabrechnung?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.s': "Auf deiner Lohnabrechnung geht Geld an „pensioen“. Du weißt nicht, warum. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o1': "Bitte deinen Arbeitgeber, es zu erklären.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o2': "Bitte darum, es zu stoppen, damit du jetzt mehr Geld bekommst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o3': "Ignorier es: So lange bleibst du nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.w': "Das Rentengeld wird für dich gespart, für später. Meistens behältst du es, wenn du die Stelle wechselst. Fragen hilft dir zu wissen, was dir gehört.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay': "Lohn zu spät oder bar? Handle rechtzeitig", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.b': "Dein Lohn muss an dem Tag kommen, der in deinem Vertrag oder Tarifvertrag steht. Ist er zu spät, oder fehlt Geld? Frag schriftlich danach, zum Beispiel in einer E-Mail. Heb deine Kontoauszüge und deine eigene Stundenliste auf. Bar bezahlt, ohne Lohnabrechnung? Dann ist es oft Schwarzarbeit (zwart): Deine Stunden sind nicht gemeldet, und später ist es schwer, deine Arbeit zu beweisen oder eine Sozialleistung zu bekommen. Verlang eine Lohnabrechnung. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.p': "Mein Lohn ist noch nicht da. Wann kommt er?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.s': "Dein Chef sagt: „Ab jetzt bezahle ich dich bar. Keine Lohnabrechnung, das ist einfacher.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o1': "Sag Nein, und verlang eine Lohnabrechnung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o2': "Sag Ja: Bar ist mehr Geld.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o3': "Sag Ja, aber nur diesen Monat.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.w': "Ohne Lohnabrechnung steht deine Arbeit nicht auf Papier. Dann kannst du Rechte verlieren, zum Beispiel auf eine Sozialleistung, wenn du deine Arbeit verlierst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday': "Deine freien Tage: Nimm sie rechtzeitig", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.b': "Prüf, wie viele Urlaubstage du noch hast: Oft steht es auf deiner Lohnabrechnung oder in der App. Plan deinen Urlaub früh, und frag schriftlich. Deine gesetzlichen Urlaubstage verfallen 6 Monate nach dem Ende des Jahres, außer du konntest sie nicht nehmen. Zusätzliche Tage aus deinem Tarifvertrag oder Vertrag bleiben länger gültig, meistens 5 Jahre. Endet deine Arbeit? Dann bekommst du Geld für die Tage, die du nicht genommen hast. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.p': "Ich will meine Urlaubstage noch dieses Jahr nehmen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.s': "Es ist November. Du hast noch 12 Urlaubstage von diesem Jahr. Dein Vorgesetzter sagt nichts dazu. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o1': "Frag, wann du sie nehmen kannst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o2': "Nichts: Sie bleiben für immer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o3': "Vergiss sie: Sie sind jetzt weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.w': "Freie Tage sind zum Ausruhen, und sie können verfallen. Wenn du rechtzeitig fragst, kannst du sie noch planen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special': "Eine Hochzeit, eine Beerdigung, ein Baby", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.b': "Ist dein Baby geboren, und bist du der Partner? Dann bekommst du 1 Woche bezahlten Geburtsurlaub, in den ersten 4 Wochen. Dein Tarifvertrag gibt oft Sonderurlaub (bijzonder verlof) für deine Hochzeit oder für eine Beerdigung in deiner Familie. Feiertage, wie Weihnachten: Kein Gesetz sagt, dass du frei hast. Dein Vertrag oder Tarifvertrag sagt, ob du frei hast oder ob du mehr Lohn bekommst. Bitte rechtzeitig um deine freien Tage. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.p': "Meine Frau bekommt ein Baby. Wie beantrage ich Geburtsurlaub?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.s': "Dein Vater ist im Ausland gestorben. Du willst zur Beerdigung. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o1': "Sag es deinem Arbeitgeber, und frag, welchen Urlaub du bekommen kannst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o2': "Fahr einfach, und sag es, wenn du zurück bist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o3': "Fahr nicht: Du hast keine freien Tage mehr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.w': "Dein Arbeitgeber versteht, dass das sehr wichtig ist. Viele Tarifverträge geben Sonderurlaub, und du kannst auch deine Urlaubstage nehmen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell': "Krank bei der Arbeit, oder im Urlaub", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.b': "Fühlst du dich bei der Arbeit krank? Sag es deinem Vorgesetzten, bevor du nach Hause gehst: Das ist deine Krankmeldung. Geh nicht einfach weg. Bist du im Urlaub krank geworden? Melde es deinem Arbeitgeber genauso wie zu Hause, auch aus dem Ausland. Dann zählen die Krankheitstage meistens nicht als Urlaubstage. Vielleicht brauchst du eine Bescheinigung von einem Arzt dort. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.p': "Ich bin im Urlaub krank geworden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.s': "Du bist im Urlaub in deinem Heimatland. Du bekommst die Grippe und liegst 5 Tage im Bett. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o1': "Melde es sofort deinem Arbeitgeber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o2': "Nichts: Du hast sowieso Urlaub.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o3': "Sag es deinem Arbeitgeber, wenn du zurück bist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.w': "Wenn du es rechtzeitig meldest, zählen die Krankheitstage meistens nicht als Urlaubstage. Dann kannst du diese Tage später noch nehmen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury': "Bei der Arbeit verletzt: Schreib es auf", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.b': "Wurdest du bei der Arbeit verletzt? Schreib auf, was passiert ist, wann und wo, und wer es gesehen hat. Mach Fotos, und heb alle Papiere vom Arzt auf. Bitte um eine Kopie vom Unfallbericht. Wurdest du verletzt, weil die Arbeit nicht sicher war? Dann muss dein Arbeitgeber meistens deinen Schaden bezahlen. Du musst nicht beweisen, dass es seine Schuld war: Der Arbeitgeber muss zeigen, dass er genug für deine Sicherheit getan hat. Hol dir Rat, bevor du etwas unterschreibst. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.p': "Darf ich eine Kopie vom Bericht haben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.s': "Du verletzt dich an einer Maschine ohne Schutz an der Hand. Später bittet dich dein Chef, ein Papier zu unterschreiben: „Es war meine eigene Schuld.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o1': "Unterschreib es nicht. Hol dir zuerst Rat.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o2': "Unterschreib es, dann gibt es keine Probleme.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o3': "Unterschreib es, aber mach ein Foto davon.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.w': "Was du unterschreibst, kann später zählen, zum Beispiel wenn du Schadenersatz verlangst. Hol dir zuerst Rat bei der Gewerkschaft oder beim Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt': "Schulden, die nie enden", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.b': "In den Niederlanden darf eine Zeitarbeitsfirma kein Geld von dir verlangen, um dir eine Arbeit zu vermitteln. Musstest du Geld für die Reise oder für die Arbeit leihen, und werden die Schulden immer größer? Musst du bleiben, bis sie bezahlt sind? Das ist ein Zeichen von Ausbeutung. Schulden bedeuten nie, dass du weiterarbeiten musst: Du darfst aufhören. Heb jedes Papier und jede Nachricht über die Schulden auf. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.debt.p': "Wie viel muss ich noch bezahlen? Ich will es schriftlich.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.s': "Die Zeitarbeitsfirma hat deine Busfahrkarte bezahlt. Jetzt zieht sie jede Woche Geld von deinem Lohn ab, und die Schulden werden nicht kleiner. Was machst du?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.debt.o1': "Verlang eine Liste auf Papier, und hol dir Hilfe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o2': "Arbeite mehr Stunden, um schneller zu bezahlen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o3': "Sag nichts: Die Zeitarbeitsfirma hat dir geholfen.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.debt.w': "Schulden, die nicht kleiner werden, halten dich fest. Mit der Liste können die Gewerkschaft oder FairWork prüfen, ob es fair ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection': "Die Inspektion ist für dich da", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.b': "Die Nederlandse Arbeidsinspectie prüft, ob die Arbeit sicher und fair ist: Lohn, Stunden und Ausbeutung. Inspektoren dürfen zu deiner Arbeit kommen und mit den Arbeitern sprechen. Du darfst ihnen die Wahrheit sagen: Sie sagen deinem Chef nicht, wer etwas gemeldet hat. Brauchst du Hilfe in deiner eigenen Sprache? Bitte um einen Dolmetscher. FairWork hilft Opfern von Ausbeutung kostenlos, auch Menschen ohne gültige Papiere. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.p': "Ich will etwas erzählen, aber ohne meinen Chef dabei.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.s': "Ein Inspektor fragt nach deinen Stunden. Dein Chef hat gesagt, du sollst 8 Stunden sagen. Du arbeitest 12. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o1': "Sag dem Inspektor die Wahrheit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o2': "Sag 8 Stunden, wie dein Chef gesagt hat.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o3': "Sag nichts, und geh weg.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.w': "Der Inspektor kann nur helfen, wenn er die Wahrheit kennt. Was du sagst, hilft dir, und deinen Kollegen auch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool': "Im Auto: Gurt an, und Kosten absprechen", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.b': "Alle im Auto tragen einen Sicherheitsgurt, auch hinten. Der Fahrer braucht einen gültigen Führerschein und sollte vor dem Fahren keinen Alkohol trinken. Zu viele Leute im Bus, oder fährt der Fahrer gefährlich? Sag es, und steig nicht ein. Fahrgemeinschaft mit Kollegen? Sprecht zuerst ab, wie ihr die Benzinkosten teilt. Im Firmenbus der Zeitarbeitsfirma? Frag, was es dich kostet, und lass es dir schriftlich geben.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.carpool.p': "Es sind zu viele Leute im Bus. Ich steige nicht ein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.s': "Der Firmenbus hat 9 Sitze. Heute Morgen wollen 11 Leute einsteigen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o1': "Steig nicht ein, und ruf deinen Vorgesetzten an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o2': "Setz dich hinten auf den Boden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o3': "Quetsch dich rein: Es sind nur 20 Minuten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.w': "Ohne Sitz und Gurt kann ein kleiner Unfall sehr schlimm sein. Dein Arbeitgeber oder die Zeitarbeitsfirma kann eine andere Lösung finden.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.train': "Zug zu spät? Schick sofort eine Nachricht", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.b': "Schau in die Reiseauskunft, bevor du losgehst: Züge und Busse können zu spät sein oder ausfallen. Ist dein Zug zu spät? Schick deinem Vorgesetzten sofort eine Nachricht, mit der Uhrzeit, wann du ankommst. An Tagen mit Sturm oder Bauarbeiten an der Strecke nimm einen früheren Zug. Nach einer langen Verspätung kannst du oft Geld zurückbekommen: Schau auf der Website der Bahngesellschaft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.p': "Mein Zug hat Verspätung. Ich bin um neun Uhr da.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.s': "Dein Zug fällt aus. Der nächste fährt in 30 Minuten. Deine Schicht beginnt in 40 Minuten. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o1': "Schick jetzt eine Nachricht, dass du zu spät kommst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o2': "Warte, und erklär es, wenn du da bist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o3': "Geh nach Hause: Es ist nicht deine Schuld.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.w': "Dein Vorgesetzter kann besser planen, wenn er es früh weiß. Eine Verspätung ist nicht deine Schuld, aber es zu melden ist deine Aufgabe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist': "Prüf es zuerst selbst", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.b': "Bevor du „klaar“ sagst, prüf deine eigene Arbeit. Benutz die Checkliste, wenn es eine gibt, und hak jeden Schritt ab. Schau dir deine Arbeit an, als wärst du der Kunde. Ist etwas nicht gut? Mach es jetzt noch einmal: Das geht schneller als später. Nicht sicher? Bitte einen Kollegen, es anzuschauen. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.p': "Ich bin fertig. Schaust du es kurz nach?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.s': "Du bist fertig. Auf der Checkliste ist ein Schritt nicht abgehakt. Du glaubst, du hast ihn gemacht. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o1': "Prüf diesen Schritt noch einmal, und hak ihn dann ab.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o2': "Hak ihn ab: Du hast ihn wahrscheinlich gemacht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o3': "Lass ihn offen: Niemand liest die Liste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.w': "Eine Checkliste hilft nur, wenn sie stimmt. Noch einmal schauen dauert eine Minute. Ein Fehler kann Stunden kosten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite': "Hinterlass es so, wie du es vorfinden willst", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.b': "Hinterlass am Ende deiner Arbeit deinen Platz sauber und sicher. Stell Werkzeuge und Material zurück, und feg den Boden. Schalte die Maschinen und Lichter aus, die du benutzt hast. Bist du der Letzte? Prüf die Fenster und Türen, und schließ ab, so wie deine Firma es sagt. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.p': "Ich bin der Letzte. Muss ich die Tür abschließen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.s': "Du bist der Letzte bei der Arbeit. Du weißt nicht, wie man die Alarmanlage einschaltet. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o1': "Ruf deinen Vorgesetzten an und frag.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o2': "Geh ohne Alarmanlage: Es ist spät.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o3': "Drück Knöpfe, bis es piept.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.w': "Ein Gebäude ohne Alarmanlage ist nicht sicher. Dein Vorgesetzter bekommt lieber einen Anruf, als morgen ein Problem zu finden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays': "Ein Schüler, und ein Kollege", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.b': "Im Praktikum bist du da, um zu lernen, aber du arbeitest wie ein Kollege: pünktlich, nach den Hausregeln, und du rufst an, wenn du krank bist. Du darfst viele Fragen stellen: Dafür bist du da. Deine Arbeit sollte dir beim Lernen helfen, nicht nur den ganzen Tag putzen oder tragen. Ist das nicht so? Sprich mit deinem Praktikumsbetreuer in der Schule. Eine Praktikumsvergütung gibt es nicht immer: Frag danach, bevor du anfängst. Die Regeln sind in jeder Schule anders: Frag deinen Praktikumsbetreuer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.p': "Ich will das auch lernen. Darf ich zuschauen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.s': "Im Praktikum putzt du nur die Kantine, jeden Tag, drei Wochen lang. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o1': "Sprich mit deinem Praktikumsbetreuer darüber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o2': "Mach es und sag nichts: Du bist Schüler.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o3': "Bleib zu Hause, bis sie dir andere Arbeit geben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.w': "Ein Praktikum ist zum Lernen von deinem Beruf. Dein Betreuer kann mit der Firma über bessere Aufgaben sprechen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend': "Gut aufhören, und um eine Referenz bitten", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.b': "Im Abschlussgespräch hörst du, was gut gelaufen ist und was besser sein kann. Frag nach Beispielen, und schreib sie für deine nächste Arbeit auf. Ist es gut gelaufen? Frag, ob du ihren Namen als Referenz angeben darfst. Bedank dich an deinem letzten Tag bei deinen Kollegen: Viele Leute hier bringen eine Kleinigkeit zum Essen mit, wie Kuchen oder Süßigkeiten. Die Regeln sind in jeder Schule anders: Frag deinen Praktikumsbetreuer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.p': "Darf ich Sie als Referenz angeben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.s': "Es ist der letzte Tag von deinem Praktikum. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o1': "Bedank dich bei deinen Kollegen, und verabschiede dich.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o2': "Geh leise weg, ohne etwas zu sagen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o3': "Bitte die Firma um ein Geschenk.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.w': "Ein guter Abschied hinterlässt einen guten Eindruck. Vielleicht willst du später dort arbeiten, oder du brauchst sie als Referenz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours': "Grüß deine Nachbarn", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.b': "Neu in einer Straße? Grüß deine Nachbarn und sag ihnen deinen Namen. Dann lassen sich Probleme später leichter lösen. Arbeitest du nachts, oder wohnst du mit vielen Leuten zusammen? Sei spät am Abend und in der Nacht leise. Stell deinen Müll am richtigen Tag raus. In der Bibliothek und im Nachbarschaftszentrum kannst du oft Niederländisch üben, manchmal kostenlos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.p': "Hallo, ich bin Ali. Ich wohne nebenan.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.s': "Du wohnst mit fünf Kollegen zusammen. Eine Nachbarin sagt, dass es nachts oft laut ist. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o1': "Entschuldige dich, und versprich, leise zu sein.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o2': "Sag, dass ihr alle arbeitet und euch entspannen müsst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o3': "Sag nichts, und mach die Tür zu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.w': "Ein gutes Gespräch früh verhindert größere Probleme. Nachbarn, die dich kennen, sind oft freundlicher und hilfsbereiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join': "Mach mit: Du lernst schneller Niederländisch", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.b': "Außerhalb der Arbeit lernst du Niederländisch am schnellsten, wenn du Dinge mit Menschen machst: Sport, ein Verein oder ehrenamtliche Arbeit. Dein Kind geht zur Schule? Geh zum Elternabend, auch wenn dein Niederländisch nicht perfekt ist: Der Lehrer will dich kennenlernen. Du darfst um langsames Niederländisch bitten oder eine Übersetzungs-App benutzen. Ehrenamtliche Arbeit sieht auch gut in deinem Lebenslauf aus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.p': "Würden Sie etwas langsamer sprechen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.s': "Du bist zum Elternabend eingeladen. Dein Niederländisch ist noch nicht gut. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o1': "Geh hin, und sprich einfaches Niederländisch oder benutz eine App.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o2': "Geh nicht hin: Der Lehrer versteht dich nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o3': "Schick eine kurze Nachricht, dass du keine Zeit hast.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.w': "Der Lehrer will über dein Kind sprechen, nicht über dein Niederländisch. Wenn du kommst, zeigst du, dass es dir wichtig ist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos': "Zuerst fragen, dann posten", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.b': "Ein Foto bei der Arbeit kann mehr zeigen, als du denkst: einen Kunden, einen Klienten, einen Bildschirm oder ein Papier mit Namen. Stell keine Fotos von der Arbeit ohne Erlaubnis von deinem Arbeitgeber online, und nie Fotos von Menschen ohne ihr Ja. Kundendaten bleiben bei der Arbeit: Schick sie nicht an dein eigenes Handy oder deine eigene E-Mail. Aus Versehen etwas geschickt? Sag es sofort deinem Vorgesetzten. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.p': "Ich frage zuerst um Erlaubnis.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.s': "Ein Kollege stellt ein lustiges Foto von einem Kunden in die Team-App. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o1': "Sag, dass das nicht okay ist, und teil es nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o2': "Teil es: Es ist nur in der Team-App.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o3': "Like es, aber teil es nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.w': "Der Kunde hat zu diesem Foto nicht Ja gesagt. Fotos in einer App können schnell überallhin gehen. Wenn du es freundlich sagst, schützt du den Kunden und deinen Kollegen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device': "Updates ja, fremde Sticks nein", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.b': "Installier die Updates auf deinem Handy und Computer: Sie schließen Lücken, die Hacker benutzen. Einen USB-Stick gefunden? Steck ihn nicht in deinen Computer: Gib ihn der IT-Abteilung. Auf einem Diensthandy oder Dienstcomputer installier nur Apps, die deine Arbeit erlaubt. Im öffentlichen WLAN logg dich nicht bei deiner Bank oder deiner Arbeit ein. Sperr dein Handy mit einem Code. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.p': "Ich habe einen USB-Stick gefunden. Was soll ich damit machen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.s': "Du findest einen USB-Stick auf dem Parkplatz. Darauf steht „Salaris“. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o1': "Gib ihn der IT-Abteilung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o2': "Steck ihn in deinen Computer, um zu sehen, wem er gehört.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o3': "Nimm ihn mit nach Hause und schau ihn dort an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.w': "Auf einem Stick kann ein Virus sein, auch wenn er interessant aussieht. Die IT-Abteilung kann ihn sicher prüfen.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" (four lessons) and the VOG lesson of "Werken via een uitzendbureau" (23 November 2026).
    'u.safework': "Sicherheit bei der Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    'l.vog': "Deine Vergangenheit: das VOG", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vog': "das Führungszeugnis (VOG: ein Papier vom Staat, das sagt, dass deine Vergangenheit für diese Arbeit kein Problem ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strafblad': "das Vorstrafenregister (die Straftaten, für die ein Gericht dich verurteilt hat)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.screening': "die Überprüfung (eine Prüfung deiner Vergangenheit, bevor du anfängst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personenregister': "das Register für die Kinderbetreuung (alle, die in der Kinderbetreuung arbeiten, müssen darin stehen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiligerspas': "der Ausweis für Sicherheitskräfte (die Karte, die du brauchst, um als Wachmann zu arbeiten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verleden': "die Vergangenheit", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.1': "In der Pflege fragen sie fast immer nach einem VOG.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.2': "Ich habe ein VOG und ich stehe im Register für die Kinderbetreuung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.3': "Ich bekomme meinen Ausweis für Sicherheitskräfte nach der Überprüfung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.q': "Die Zeitarbeitsfirma fragt nach einem VOG. Hast du schon eins?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.a': "Nein. Ich warte noch auf die E-Mail von Justis.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.safetysigns': "Sicherheitsschilder", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verbodsbord': "das Verbotsschild (ein roter Kreis mit einem Strich: Das darfst du nicht tun)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebodsbord': "das Gebotsschild (ein blauer Kreis mit einem weißen Bild: Das musst du tun)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingsbord': "das Warnschild (ein gelbes Dreieck mit einem schwarzen Rand: Vorsicht, Gefahr)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reddingsbord': "das Rettungszeichen (ein grünes Rechteck: der Weg nach draußen, oder Erste Hilfe)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandbord': "das Brandschutzzeichen (ein rotes Quadrat: Hier ist ein Feuerlöscher oder ein Löschschlauch)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pictogram': "das Piktogramm (ein einfaches Bild, das etwas ohne Worte sagt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.1': "Ein rotes rundes Schild bedeutet: Das ist verboten.", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.2': "Ein blaues Schild sagt, was du tun musst.", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.3': "Folge den grünen Schildern zum Notausgang.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.q': "Was bedeutet dieses gelbe Schild?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.a': "Vorsicht, Gefahr. Es ist ein Warnschild.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.substances': "Gefährliche Stoffe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stofmasker': "die Staubmaske (sie bedeckt deine Nase und deinen Mund)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.giftig': "giftig", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijtend': "ätzend (es verbrennt deine Haut oder frisst sich in Metall)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drinkfles': "die Trinkflasche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opbergen': "wegräumen (an seinen eigenen Platz, zum Beispiel in einen Schrank, der abschließt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dop': "der Deckel, der Verschluss (von einer Flasche oder einem Kanister)", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.1': "Schau zuerst auf das Gefahrensymbol auf dem Etikett.", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.2': "Gieß es nie in eine Trinkflasche.", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.3': "Hier musst du eine Staubmaske tragen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.q': "Ist dieses Mittel giftig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.a': "Das steht auf dem Sicherheitsdatenblatt. Ich schaue nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.firefight': "Feuer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddriehoek': "das Branddreieck (Feuer braucht Brennstoff, Luft und Hitze; nimm eins weg, und das Feuer geht aus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zuurstof': "der Sauerstoff (in der Luft; Feuer braucht ihn)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blussen': "löschen (ein Feuer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blusdeken': "die Löschdecke", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openvuur': "offenes Feuer (eine Flamme, zum Beispiel von einem Feuerzeug oder einem Gasbrenner)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandslang': "der Löschschlauch (auf einer Rolle in der Wand)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.1': "Wirf nie Wasser auf brennendes Öl.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.2': "Nur ein kleines Feuer löschst du selbst.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.3': "Leg die Löschdecke über die Pfanne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.q': "Im Mülleimer brennt es!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.a': "Es ist klein. Ich hole den Feuerlöscher.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.permitwork': "Erlaubnisschein, enge Räume und Heben", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkvergunningveilig': "der Erlaubnisschein (ein Sicherheitspapier für gefährliche Arbeit: was, wo und welche Gefahren; nicht deine Aufenthalts- oder Arbeitspapiere)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beslotenruimte': "der enge Raum (ein Tank, eine Grube oder ein Abwasserkanal: klein, mit wenig frischer Luft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gasmeting': "die Gasmessung (du misst die Luft, bevor du hineingehst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mangatwacht': "der Sicherungsposten (die Person, die draußen an der Öffnung bleibt, Kontakt hält und Alarm schlägt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaalgever': "der Einweiser (die Person, die dem Kranführer Handzeichen gibt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijsen': "heben (eine Last mit einem Kran)", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.1': "Ohne Erlaubnisschein fangen wir nicht an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.2': "Zuerst eine Gasmessung, erst dann in den engen Raum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.3': "Schau auf den Einweiser: heben, senken, stopp.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.q': "Wer bleibt draußen am Tank?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.a': "Ich. Ich bin der Sicherungsposten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog': "Das VOG: eine Prüfung deiner Vergangenheit", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.b': "Für manche Stellen fragt die Zeitarbeitsfirma oder der Arbeitgeber nach einem VOG (Verklaring Omtrent het Gedrag). Das ist ein Papier vom Staat: Es sagt, dass deine Vergangenheit für diese Arbeit kein Problem ist. In der Pflege, in der Kinderbetreuung und im Sicherheitsdienst brauchst du fast immer eins. Meistens startet der Arbeitgeber den Antrag online. Du bekommst eine E-Mail von Justis, und du schließt den Antrag mit DigiD ab und bezahlst. Frag zuerst, wer bezahlt: Oft zahlt der Arbeitgeber es dir zurück. Für Ehrenamtliche, die mit Kindern oder schutzbedürftigen Menschen arbeiten, ist es oft kostenlos. Hast du Vorstrafen? Das heißt nicht immer, dass du kein VOG bekommst: Justis schaut, was für diese Arbeit wichtig ist. Nicht sicher? Frag das Juridisch Loket. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.p': "Muss ich das VOG selbst bezahlen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.s': "Deine neue Stelle in einem Pflegeheim fragt nach einem VOG. Vor Jahren hattest du ein Problem mit der Polizei. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o1': "Beantrage es, und frag das Juridisch Loket, wenn du dir Sorgen machst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o2': "Beantrage es nicht: Du bekommst es sowieso nie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o3': "Sag, dass du keine Zeit hast, und such andere Arbeit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.w': "Justis schaut nur, was für die Arbeit wichtig ist. Viele Menschen mit etwas in ihrer Vergangenheit bekommen trotzdem ein VOG. Eine Beratung hilft, wenn du nicht sicher bist.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns': "Was ist VCA?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.b': "VCA ist ein Sicherheitszertifikat. Viele Firmen, auch über eine Zeitarbeitsfirma, fragen danach, zum Beispiel auf dem Bau und in der Industrie. Die meisten Arbeiter machen B-VCA (VCA Basis); ein Vorarbeiter oder Vorgesetzter macht VOL-VCA. Du machst einen Kurs und eine Prüfung mit Multiple-Choice-Fragen bei einem anerkannten Prüfungszentrum. Die Prüfung kannst du oft in mehreren Sprachen machen, zum Beispiel auf Englisch oder Polnisch: Frag das Prüfungszentrum. Das Diplom ist 10 Jahre gültig. Oft bezahlt der Arbeitgeber oder die Zeitarbeitsfirma: Frag, bevor du selbst bezahlst. Eine Zeitarbeitsfirma darf nicht einfach beliebige Kosten von deinem Lohn abziehen (siehe das Thema über Zeitarbeit). In diesen Lektionen lernst du einige Wörter, die dir bei sicherer Arbeit und beim VCA begegnen. Für VCA machst du einen Kurs und eine Prüfung. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.p': "Wer bezahlt den VCA-Kurs?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.s': "Eine Zeitarbeitsfirma sagt: „Du brauchst VCA. Du bezahlst den Kurs, oder wir ziehen ihn von deinem Lohn ab.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o1': "Frag, wer bezahlt, und lass es dir schriftlich geben.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o2': "Bezahl sofort, damit du die Stelle bekommst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o3': "Sag nichts, und unterschreib.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.w': "Oft bezahlt der Arbeitgeber oder die Zeitarbeitsfirma das VCA. Wenn du etwas bezahlen musst, willst du das vorher wissen, auf Papier.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances': "Erst das Etikett lesen, dann arbeiten", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.b': "Ein gefährliches Mittel hat auf dem Etikett eine rote Raute mit einem schwarzen Bild darin: das Gefahrensymbol. Das Bild zeigt die Gefahr, zum Beispiel Feuer, Gift oder ein Mittel, das deine Haut verätzt. Das Etikett und das Sicherheitsdatenblatt (veiligheidsblad) sagen, wie du sicher damit arbeitest und was du tun musst, wenn etwas schiefgeht. Trag, was dort steht: Handschuhe, eine Schutzbrille oder eine Maske. Mach den Deckel zu, und räum das Mittel an seinen eigenen Platz. Gieß es nie in eine Trinkflasche: Jemand kann es trinken. Iss, trink und rauch nicht, während du damit arbeitest, und wasch dir danach die Hände. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.p': "Wo ist das Sicherheitsdatenblatt für dieses Mittel?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.s': "Ein Kollege gießt ein Reinigungsmittel in eine leere Wasserflasche, um es mitzunehmen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o1': "Sag, dass das gefährlich ist: Jemand kann es trinken.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o2': "Nichts: Es ist seine eigene Flasche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o3': "Kleb einen kleinen Aufkleber auf die Flasche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.w': "In einer Trinkflasche sieht ein Mittel aus wie Wasser oder Limonade. Jemand kann es aus Versehen trinken. Ein Mittel bleibt in seiner eigenen Verpackung, mit dem Etikett.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight': "Kleines Feuer oder großes Feuer?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.b': "Feuer braucht drei Dinge: Brennstoff, Luft und Hitze. Das ist das Branddreieck. Nimm eins weg, und das Feuer geht aus. Eine Löschdecke nimmt die Luft weg. Wasser nimmt die Hitze weg, aber benutz nie Wasser bei brennendem Öl oder Fett oder bei elektrischen Geräten. Schau auf den Feuerlöscher: Darauf steht, wofür er ist. Schaum und Pulver wirken bei vielen Bränden; CO2 ist gut bei elektrischen Bränden. Halte Funken und offenes Feuer von Mitteln fern, die leicht brennen. Lösch nur ein kleines Feuer selbst, und nur, wenn es sicher ist. Ist es größer? Geh raus, mach die Tür hinter dir zu, und schlag Alarm. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.p': "Wo hängt die Löschdecke?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.s': "In der Kantine fängt Öl in einer Pfanne Feuer. Die Flammen sind noch klein. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o1': "Leg die Löschdecke über die Pfanne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o2': "Wirf ein Glas Wasser darauf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o3': "Trag die Pfanne nach draußen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.w': "Wasser auf brennendem Öl macht einen großen Feuerball. Die Decke nimmt die Luft weg, und das Feuer geht aus. Schalte die Hitze aus, wenn du kannst.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork': "Gefährliche Arbeit: zuerst der Erlaubnisschein", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.b': "Für gefährliche Arbeit, wie Schweißen in der Nähe von Dingen, die brennen, oder Arbeit in einem Tank oder einer Grube, benutzt die Firma oft einen Erlaubnisschein (werkvergunning). Das ist ein Sicherheitspapier, nicht deine Aufenthalts- oder Arbeitspapiere. Darauf steht, was du machst, wo, welche Gefahren es gibt und was du dagegen tust. Lies ihn, und fang erst an, wenn er unterschrieben ist. In einem engen Raum kann zu wenig Luft oder ein gefährliches Gas sein: zuerst eine Gasmessung, und ein Sicherungsposten bleibt draußen. Ist drinnen jemand in Not? Schlag Alarm: Geh nie ohne Schutz hinein. Bei einem Kran gibt eine Person die Zeichen: der Einweiser. Stell dich nie unter eine hängende Last. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.p': "Ist der Erlaubnisschein schon unterschrieben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.s': "Dein Kollege in einem Tank antwortet nicht. Du bist der Sicherungsposten. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o1': "Schlag Alarm, und bleib draußen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o2': "Kletter schnell hinein, um ihm zu helfen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o3': "Warte ein paar Minuten, dann schau nach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.w': "Das Gas, das deinem Kollegen geschadet hat, kann auch dir schaden. Viele Opfer in Tanks waren Helfer. Nach dem Alarm kommt Hilfe mit Schutz.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie", the fourth own unit of Productie (23 November 2026).
    'u.process': "Operator in der Prozessindustrie", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantround': "Der Rundgang und die Leitwarte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlekamer': "die Leitwarte, der Kontrollraum (wo Operatoren die ganze Anlage auf Bildschirmen beobachten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.operator': "der Operator, der Anlagenfahrer (die Person, die die Maschinen einer Anlage bedient und überwacht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukmeter': "das Manometer, der Druckmesser (ein rundes Messgerät mit einem Zeiger)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau': "der Füllstand (wie voll ein Tank oder ein Silo ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snelheid': "die Geschwindigkeit (wie schnell eine Linie oder eine Maschine läuft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmmelding': "die Alarmmeldung (eine Warnung auf dem Bildschirm, dass etwas nicht stimmt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.1': "Ich mache meinen Rundgang.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.2': "Der Druck ist zu hoch.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.3': "Ich schreibe den Wert auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.q': "Warum ist ein Alarm auf dem Bildschirm?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.a': "Der Füllstand in Tank zwei ist zu hoch.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantfault': "Eine Störung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilstand': "der Stillstand (die Linie hält an, und es wird nichts hergestellt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstarten': "anfahren, hochfahren (eine Maschine oder eine Linie, Schritt für Schritt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilzetten': "abschalten, herunterfahren (eine Maschine auf die richtige Art anhalten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.technischedienst': "die Instandhaltung, der technische Dienst (die TD: Sie reparieren die Maschinen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhoudsmonteur': "der Instandhaltungsmechaniker / die Instandhaltungsmechanikerin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resetten': "zurücksetzen, quittieren (eine Störung auf dem Bildschirm oder am Bedienfeld löschen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.1': "Bei einer Störung rufe ich den Schichtleiter an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.2': "Greif nie in eine laufende Maschine.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.3': "Die Instandhaltung ist unterwegs.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.q': "Darf ich die Linie wieder anfahren?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.a': "Nein, warte. Das Schloss des Mechanikers ist noch dran.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shiftwork': "Schichten und Nächte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploeg': "die Schichtgruppe, die Schicht (die Gruppe, die dieselben Schichten arbeitet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegwissel': "der Schichtwechsel (eine Gruppe geht nach Hause, die nächste fängt an)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volcontinu': "rund um die Uhr, vollkontinuierlich (die Anlage läuft Tag und Nacht, an jedem Tag der Woche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdagslapen': "tagsüber schlafen (nach einer Nachtschicht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.broodtrommel': "die Brotdose", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflosser': "die Ablösung (der Kollege, der deinen Platz übernimmt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.1': "Unsere Fabrik läuft rund um die Uhr.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.2': "Schreib es ins Logbuch für die nächste Schichtgruppe.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.3': "Ich bin pünktlich zur Übergabe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.q': "Was ist heute Nacht passiert?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.a': "Pumpe drei ist ausgefallen. Es steht im Logbuch.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.heatdust': "Hitze, Dampf und Staub", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeltoven': "der Schmelzofen (ein sehr heißer Ofen, der Glas oder Metall schmilzt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoom': "der Dampf (sehr heißer Wasserdampf)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoomleiding': "die Dampfleitung (sie ist heiß, auch wenn du keinen Dampf siehst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hittekleding': "die Hitzeschutzkleidung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwartsstof': "der Quarzstaub (sehr feiner Staub aus Ton, Sand oder Stein; er schädigt deine Lunge)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.explosiegevaar': "die Explosionsgefahr (Staub oder Dampf in der Luft kann explodieren; ein gelbes Schild mit EX)", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.1': "Trink oft Wasser am Schmelzofen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.2': "Quarzstaub siehst du nicht. Setz deine Staubmaske auf.", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.3': "Hier gibt es Explosionsgefahr: keine Funken.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.q': "Darf mein Handy mit in diese Zone?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.a': "Nein. Hier gibt es Explosionsgefahr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround': "Mach deinen Rundgang, schreib es auf", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.b': "Eine Anlage, die Tag und Nacht läuft, braucht Augen und Ohren. Auf deinem Rundgang schaust, hörst und riechst du: Ein neues Geräusch, ein Leck oder ein komischer Geruch kann das erste Zeichen für ein Problem sein. Du liest die Messgeräte ab: die Temperatur, den Druck, die Geschwindigkeit und den Füllstand. Schreib jeden Wert sofort auf, mit der Uhrzeit, auf die Liste oder ins System. Nicht später, aus dem Gedächtnis. Ist ein Wert zu hoch oder zu niedrig? Sag es sofort der Leitwarte oder deinem Schichtleiter. Ein Alarm auf dem Bildschirm ist nie „nur ein Alarm“: Schalte ihn nicht aus, bevor du weißt, warum er gekommen ist. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.p': "Die Temperatur ist zu hoch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.s': "Auf deinem Rundgang ist der Druck ein bisschen zu hoch. Deine Schicht ist fast vorbei. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o1': "Sag es sofort der Leitwarte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o2': "Schreib es auf, und sag es niemandem.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o3': "Lass es für die nächste Schicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.w': "In einer Anlage kann eine kleine Änderung schnell größer werden. Wenn die Leitwarte es früh weiß, kann sie handeln, bevor etwas schiefgeht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault': "Anhalten, abschließen, dann reparieren", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.b': "Bei einer Störung steht die Linie still, und alle wollen, dass sie schnell wieder läuft. Aber genau dann passieren viele Unfälle. Greif nie in eine laufende Maschine, auch nicht „nur kurz“. Ruf deinen Schichtleiter oder die Instandhaltung. Bevor jemand an der Maschine arbeitet, wird sie angehalten und abgeschlossen, damit niemand sie starten kann. Oft hängt jeder, der daran arbeitet, sein eigenes Schloss daran. Fahr erst wieder an, wenn jedes Schloss ab ist und dein Schichtleiter sagt, dass es sicher ist. Fahr Schritt für Schritt an, so wie du es gelernt hast. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.p': "Da ist noch ein Schloss dran.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.s': "Ein Produkt steckt in der Maschine fest. Die Maschine läuft noch. Ein Kollege sagt: „Zieh es schnell raus.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o1': "Greif nicht hinein: Ruf den Schichtleiter.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o2': "Zieh es schnell mit der Hand heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o3': "Drück es mit einem Stock heraus, während sie läuft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.w': "Eine Maschine, die noch läuft, kann sich jeden Moment bewegen. Eine Maschine, die angehalten und abgeschlossen ist, kann dich nicht verletzen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork': "Nachts: schlafen, essen, pünktlich sein", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.b': "Viele Fabriken laufen Tag und Nacht, an jedem Tag der Woche. Du arbeitest abwechselnd Früh-, Spät- und Nachtschichten, oft in drei oder fünf Schichtgruppen. Schlaf nach einer Nachtschicht in einem dunklen und ruhigen Zimmer, und sag deiner Familie, wann du schläfst. Iss zu festen Zeiten, und nimm dein eigenes Essen mit: Nachts ist die Kantine oft zu. Sei pünktlich zur Übergabe: Dein Kollege wartet, und die Anlage darf nicht allein gelassen werden. Für Nachtschichten gibt es extra Regeln, im Gesetz und oft im Tarifvertrag (cao), zum Beispiel über die Ruhe nach deinen Nächten. Frag, welche Regeln bei dir gelten. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.p': "Welche Regeln gelten für Nachtschichten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.s': "Nach vier Nächten bittet dich dein Schichtleiter, noch eine Nacht zu arbeiten. Du bist sehr müde. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o1': "Sag, dass du sehr müde bist, und frag nach den Regeln.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o2': "Sag ja, und trink viel Kaffee.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o3': "Sag ja, und schlaf ein bisschen in deiner Pause.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.w': "Müde Menschen machen mehr Fehler, und in einer Fabrik kann ein Fehler gefährlich sein. Es gibt Regeln für die Ruhe nach Nachtschichten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust': "Hitze, Staub und Funken", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.b': "In der Nähe eines Schmelzofens, eines Brennofens oder von Dampf ist es sehr heiß. Trink oft Wasser, auch bevor du Durst hast. Trag die Hitzeschutzkleidung, und fass keine Leitungen oder Teile ohne Handschuhe an: Dampf und heißes Metall verbrennen dich, auch wenn du sie nicht siehst. Ist dir schwindlig oder übel? Hör auf, geh an einen kühlen Ort, und sag es jemandem. Staub aus Ton, Sand oder Stein kann Quarzstaub (kwartsstof) enthalten. Du siehst ihn nicht, aber er schädigt deine Lunge. Benutz die Absaugung, trag deine Staubmaske, und blas Staub nie mit Druckluft weg. In manchen Zonen kann Staub oder Dampf explodieren: Ein gelbes Schild mit EX zeigt das. Dort gilt: keine Funken, kein Feuer, und oft kein normales Handy. Frag, was in jeder Zone erlaubt ist. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.p': "Mir geht es nicht gut. Ich gehe an einen kühlen Ort.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.s': "Auf deiner Maschine liegt feiner Tonstaub. Ein Kollege sagt: „Blas ihn mit der Luftpistole weg.“ Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o1': "Mach es nass sauber, oder mit dem Staubsauger.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o2': "Blas es weg: Das geht schneller.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o3': "Lass es für die nächste Schicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.w': "Beim Blasen fliegt der Staub hoch, in die Luft und in deine Lunge. Ein nasses Tuch oder ein Staubsauger hält den Staub unten.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (debts, taxes, discrimination, the union, kiln, mixing lab, first weeks, order picking) (26 November 2026).
    'l.discrimination': "Diskriminierung und Einschüchterung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.andersbehandelen': "anders behandeln (schlechter als andere)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkomst': "die Herkunft (das Land oder die Gruppe, aus der du oder deine Familie kommen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geloof': "die Religion, der Glaube", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitschelden': "beschimpfen (hässliche Wörter zu jemandem sagen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedreigen': "bedrohen (sagen, dass du jemandem wehtun wirst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geweld': "die Gewalt", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.1': "Ich werde wegen meiner Religion anders behandelt.", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.2': "Er bedroht mich. Ich fühle mich nicht sicher.", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.3': "Ich darf Nein sagen, auch zu meinem Chef.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.q': "Geht es dir gut? Sie beschimpfen dich ständig.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.a': "Nein, es geht mir nicht gut. Ich melde es.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.union': "Die Gewerkschaft und der Betriebsrat", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lidworden': "beitreten, Mitglied werden", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contributie': "der Mitgliedsbeitrag (du zahlst ihn jeden Monat)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opkomenvoor': "sich einsetzen für (die Interessen von jemandem verteidigen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhandelen': "verhandeln (reden, bis beide Seiten einverstanden sind)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loonsverhoging': "die Lohnerhöhung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ondernemingsraad': "der Betriebsrat (der OR: gewählte Kollegen, die mit dem Direktor sprechen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.1': "Ich werde Mitglied der Gewerkschaft.", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.2': "Die Gewerkschaft verhandelt über den Tarifvertrag (cao).", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.3': "Wer ist im Betriebsrat?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.q': "Warum bist du Mitglied der Gewerkschaft?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.a': "Sie setzen sich für mich ein, wenn es ein Problem gibt.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debthelp': "Schulden und Hilfe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herinnering': "die Zahlungserinnerung (ein Brief: Du hast noch nicht bezahlt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmaning': "die Mahnung (zahl vor einem Datum, sonst können Extrakosten kommen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.betalingsregeling': "die Ratenzahlung (du zahlst eine Schuld in kleinen Teilen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurwaarder': "der Gerichtsvollzieher (ein Beamter, der eine Schuld eintreibt, oft nachdem ein Richter entschieden hat)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuldhulp': "die Schuldnerberatung (kostenlose Hilfe bei deinen Schulden, von der Gemeinde)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterstand': "der Zahlungsrückstand (Geld, das du schon hättest zahlen müssen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.1': "Ich habe eine Mahnung bekommen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.2': "Kann ich in Raten zahlen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.3': "Ich möchte Hilfe bei meinen Schulden.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.q': "Sie haben die Rechnung noch nicht bezahlt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.a': "Das stimmt. Kann ich eine Ratenzahlung bekommen?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.taxes': "Steuern und Zuschüsse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jaaropgave': "die Jahreslohnbescheinigung (ein Papier von deinem Arbeitgeber mit deinem Lohn vom ganzen Jahr)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauweenvelop': "der blaue Umschlag (darin kommen Briefe vom Belastingdienst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teruggave': "die Rückzahlung (Steuergeld, das du zurückbekommst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstel': "der Aufschub (du darfst es später machen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huurtoeslag': "der Mietzuschuss (Geld vom Staat, das dir hilft, die Miete zu zahlen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.belastingtelefoon': "die kostenlose Telefonnummer vom Belastingdienst", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.1': "Ich brauche meine Jahreslohnbescheinigung für die Steuererklärung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.2': "Ich verdiene jetzt mehr. Das melde ich sofort.", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.3': "Ich bekomme Geld vom Belastingdienst zurück.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.q': "Hier liegt ein blauer Umschlag für dich.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.a': "Danke. Ich mache ihn sofort auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.kiln': "Brennofen, Glas und Keramik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pers': "die Presse (eine Maschine, die Ton oder Pulver in eine Form presst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glazuur': "die Glasur (eine glänzende, glasartige Schicht auf einer Fliese oder einer Tasse)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tunneloven': "der Tunnelofen (ein langer Ofen; die Produkte fahren langsam hindurch)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherf': "die Scherbe (ein scharfes Stück von kaputtem Glas oder einer kaputten Fliese)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gloeiend': "glühend heiß (so heiß, dass es rot leuchtet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.armbeschermer': "der Armschutz (ein Ärmel, der deinen Arm vor Schnitten schützt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.1': "Die Fliesen fahren langsam durch den Tunnelofen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.2': "In dieser Fliese ist ein Riss. Das ist Ausschuss.", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.3': "Trag deinen Armschutz beim Glas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.q': "Darf ich die Scherben mit der Hand aufheben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.a': "Nein. Nimm Handfeger und Kehrblech.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mixlab': "Die Mischhalle und das Labor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batch': "die Charge (eine Menge, die auf einmal nach einem Rezept hergestellt wird)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwegen': "abwiegen (genau so viel wiegen, wie das Rezept sagt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mengvat': "der Mischbehälter (ein großer Behälter mit einem Rührwerk darin)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.labjas': "der Laborkittel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laboratorium': "das Laboratorium (das Labor: Hier wird das Produkt getestet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grondstof': "der Rohstoff (woraus du das Produkt machst)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.1': "Wieg die Rohstoffe genau ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.2': "Ich nehme eine Probe für das Labor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.3': "Welche Charge ist das? Schau auf das Etikett.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.q': "Ist die Charge freigegeben?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.a': "Noch nicht. Das Labor testet die Probe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination': "Unfair behandelt? Es ist nicht deine Schuld", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.b': "Diskriminierung bedeutet, dass du anders oder schlechter behandelt wirst, weil du bist, wer du bist: wegen deiner Herkunft, Hautfarbe, Religion, deines Geschlechts, Alters, einer Behinderung oder wen du liebst. Zu Einschüchterung gehören zum Beispiel unerwünschte Berührungen, sexuelle Bemerkungen, Drohungen oder Beschimpfungen. Beides ist bei der Arbeit nicht erlaubt, und es ist nie deine Schuld. Du darfst Nein sagen, auch zu deinem Chef. Schreib auf, was passiert ist, wann, und wer es gesehen hat. Sprich mit deinem Vorgesetzten oder mit der Vertrauensperson (vertrouwenspersoon), wenn deine Firma eine hat. Außerhalb deiner Arbeit hilft die Antidiskriminierungsstelle in deinem Ort kostenlos (discriminatie.nl). Das College voor de Rechten van de Mens kann ein Urteil geben, auch kostenlos. Gewalt oder eine Drohung? Geh zur Polizei. In Gefahr: Ruf 112 an. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.p': "Ich möchte etwas melden. Kann ich vertraulich mit Ihnen sprechen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.s': "Ein Kollege beschimpft dich oft wegen deiner Herkunft. Andere lachen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o1': "Schreib es auf, und erzähl es jemandem, dem du vertraust.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o2': "Sag nichts: Das gehört zur Arbeit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o3': "Kündige, und sag niemandem, warum.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.w': "Beschimpfungen wegen deiner Herkunft sind Diskriminierung, und das ist nicht erlaubt. Wenn du es aufschreibst und darüber sprichst, kann dir jemand helfen, dass es aufhört.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union': "Zusammen seid ihr stärker", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.b': "Eine Gewerkschaft (vakbond), zum Beispiel FNV oder CNV, setzt sich für Arbeitnehmer ein. Sie macht mit Arbeitgebern Vereinbarungen über Lohn und Arbeit: den Tarifvertrag (cao). Viele Tarifverträge gelten für alle in einer Branche, auch wenn du kein Mitglied bist. Mitglieder zahlen jeden Monat einen Beitrag (contributie) und bekommen Beratung und Hilfe, zum Beispiel bei einem Problem mit dem Lohn oder einer Kündigung. Tritt rechtzeitig bei: Oft hilft die Gewerkschaft nur bei einem Problem, das nach deinem Beitritt anfängt. Ob du beitrittst, entscheidest du selbst, und dein Arbeitgeber darf dich dafür nicht bestrafen. Eine Firma mit 50 oder mehr Arbeitnehmern muss einen Betriebsrat haben (ondernemingsraad, OR): Kollegen, die von den Arbeitnehmern gewählt werden. Der OR spricht mit dem Direktor zum Beispiel über Arbeitszeiten und Sicherheit. Eine kleinere Firma kann eine Personalvertretung haben (personeelsvertegenwoordiging). Fragen? Frag einen Kollegen im OR. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.p': "Ich habe eine Frage zu den neuen Dienstplänen. Kann der OR etwas damit machen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.s': "Deine Firma plant viel mehr Spätschichten. Viele Kollegen sind unzufrieden. Was kannst du tun?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o1': "Frag einen Kollegen im OR danach.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o2': "Komm abends nicht mehr.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o3': "Sag nichts: Es kann sich nichts ändern.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.w': "Der OR redet bei Regeln über Arbeitszeiten mit. Er kann mit dem Direktor darüber sprechen, für alle Arbeitnehmer zusammen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp': "Mach jeden Brief auf, und hol dir früh Hilfe", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.b': "Hast du eine Rechnung nicht rechtzeitig bezahlt? Dann bekommst du zuerst eine Zahlungserinnerung (herinnering) und später eine Mahnung (aanmaning). Bevor eine Firma dir dafür Extrakosten berechnen darf, muss sie dir 14 Tage Zeit zum Zahlen geben. Mach also jeden Brief auf, auch wenn du Angst davor hast. Kannst du nicht alles auf einmal zahlen? Ruf an oder schreib, und bitte um eine Ratenzahlung (betalingsregeling). Ein deurwaarder (Gerichtsvollzieher) ist ein Beamter, der Schulden eintreibt, oft nachdem ein Richter entschieden hat. Er kann zum Beispiel einen Teil deines Lohns nehmen, aber er muss dir immer genug zum Leben lassen. Schulden? Hol dir früh Hilfe, wenn sie noch klein sind. Die gemeente gibt kostenlose Schuldnerberatung (schuldhulp). Auf geldfit.nl kannst du einen kostenlosen Test machen und Hilfe in deiner Nähe finden. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.p': "Ich kann nicht alles auf einmal bezahlen. Kann ich in Raten zahlen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.s': "Du bekommst eine Mahnung für deine Handyrechnung. Diesen Monat hast du das Geld nicht. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o1': "Ruf die Firma an, und bitte um eine Ratenzahlung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o2': "Leg den Brief weg, und warte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o3': "Leih schnell Geld mit „jetzt kaufen, später zahlen“.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.w': "Wenn du es rechtzeitig sagst, kann die Firma oft kleine Zahlungen mit dir vereinbaren. Ein Brief, den du weglegst, geht nicht weg: Die Kosten werden nur höher.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes': "Deine Steuererklärung und deine Zuschüsse", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.b': "Die Steuererklärung (aangifte) für das letzte Jahr muss vor dem 1.Mai gemacht sein. Hast du einen Brief bekommen, in dem du darum gebeten wirst? Dann musst du sie machen. Manchmal bekommst du Geld zurück. Du brauchst die Jahreslohnbescheinigung (jaaropgave) von deinem Arbeitgeber. Keine Zeit? Du kannst um mehr Zeit bitten (uitstel). Zuschüsse (toeslagen) wie zorgtoeslag und huurtoeslag sind ein Vorschuss: Sie hängen davon ab, was du dieses Jahr verdienen wirst. Verdienst du mehr, oder ändert sich etwas anderes? Melde es sofort in Mijn toeslagen. Wenn du das nicht machst, musst du später vielleicht viel zurückzahlen. Musst du zurückzahlen? Du kannst um eine Ratenzahlung bitten. Kostenlose Hilfe: die BelastingTelefoon, ein Büro vom Belastingdienst (mach zuerst einen Termin) oder die Bibliothek. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.p': "Mein Einkommen hat sich geändert. Wie melde ich das?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.s': "Du bekommst einen neuen Job und verdienst jeden Monat mehr. Du bekommst huurtoeslag. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o1': "Melde dein neues Einkommen in Mijn toeslagen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o2': "Warte, bis der Belastingdienst fragt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o3': "Hör auf, deine Miete zu zahlen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.w': "Dein Zuschuss hängt davon ab, was du verdienst. Wenn du die Änderung rechtzeitig meldest, bekommst du den richtigen Betrag, und du musst später nicht viel zurückzahlen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln': "Scharf, heiß und schwer", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.b': "In einer Fliesen- oder Glasfabrik werden die Produkte in eine Form gepresst, bekommen eine Glasur und fahren langsam durch einen langen Ofen. Nach dem Ofen müssen sie abkühlen: Fass sie nicht an, solange sie heiß sind, oder trag hitzebeständige Handschuhe. Glas und kaputte Fliesen sind sehr scharf. Trag schnittfeste Handschuhe, Armschutz und eine Schutzbrille. Fang nie eine fallende Glasplatte auf: Geh zurück. Heb Scherben mit Handfeger und Kehrblech auf, nie mit den Händen, und wirf sie in den richtigen Behälter. Glasur und Staub können schädliche Stoffe enthalten: Wasch dir die Hände, bevor du isst oder trinkst. Greif an der Presse nie hinein, solange sie läuft. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.p': "Vorsicht, Scherben! Ich hole Handfeger und Kehrblech.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.s': "Eine Glasplatte rutscht aus dem Gestell und fängt an zu fallen. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o1': "Geh zurück, und lass sie fallen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o2': "Fang sie mit den Händen auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o3': "Halte sie mit deinem Bein auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.w': "Eine fallende Platte kann sehr tief schneiden, auch durch Handschuhe. Eine kaputte Platte kostet nur Geld.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab': "Halte dich genau an das Rezept", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.b': "In einer Mischhalle machst du eine Charge nach einem Rezept: welche Rohstoffe, wie viel und in welcher Reihenfolge. Wieg alles genau ab, und schreib auf, was du hinzugefügt hast, mit der Chargennummer. Nicht sicher? Frag, rate nicht. Bevor du ein Fass oder einen Sack benutzt, lies das Etikett: was darin ist, die Chargennummer und die Gefahrenzeichen. Tu nie etwas in ein Fass oder einen Sack, das nicht hineingehört. Nimm für eine Probe eine saubere Schaufel und einen sauberen Becher, und kleb sofort ein Etikett darauf. Pulver und Dampf können schädlich sein: Benutz die Absaugung, und trag, was nötig ist, wie einen Laborkittel, eine Schutzbrille, Handschuhe oder eine Maske. Bei Lebensmitteln trägst du auch ein Haarnetz und wäschst dir oft die Hände. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.p': "Ich bin nicht sicher. Wie viel muss hinein?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.s': "Im Rezept stehen 25 Kilo. Aus Versehen gibst du 26 Kilo hinein, und es ist schon im Mischbehälter. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o1': "Sag es deinem Schichtleiter, und schreib es auf.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o2': "Sag nichts: Ein Kilo ist nicht viel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o3': "Nimm etwas mit der Hand heraus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.w': "Eine falsche Menge kann die ganze Charge verderben. Wenn der Schichtleiter es rechtzeitig weiß, kann das Labor es prüfen, bevor die Charge weitergeht.", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (performance review, forms, voicemail, the dentist) (27 November 2026).
    'l.forms': "Ein Formular ausfüllen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invullen': "ausfüllen (ein Formular)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vakje': "das Kästchen (ein kleines Viereck auf einem Formular)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aankruisen': "ankreuzen (ein Kreuz in ein Kästchen machen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verplichtveld': "das Pflichtfeld (du musst es ausfüllen; oft mit einem * markiert)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postcode': "die Postleitzahl (ein kurzer Code für deine Straße oder deinen Ort, Teil deiner Adresse)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdletters': "die Großbuchstaben (A, B, C)", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.1': "Schreib deinen Namen in Großbuchstaben.", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.2': "Kreuz das richtige Kästchen an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.3': "Können Sie mir bei diesem Formular helfen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.q': "Hast du das Formular schon ausgefüllt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.a': "Fast. Wo kommt meine Unterschrift hin?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.voicemail': "Mailbox und zurückrufen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.piep': "der Piepton (der kurze Ton; danach sprichst du deine Nachricht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beluisteren': "abhören (eine Nachricht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boodschap': "die Nachricht (was du auf die Mailbox von jemandem sprichst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.noemen': "nennen, sagen (deinen Namen, deine Nummer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zosnelmogelijk': "so schnell wie möglich", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opnieuw': "noch einmal (ein weiteres Mal)", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.1': "Hier ist Ali Haddad. Ich rufe wegen meines Dienstplans an.", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.2': "Ich höre meine Mailbox jeden Tag ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.3': "Ich rufe später noch einmal an.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.q': "Sprechen Sie nach dem Piepton Ihren Namen und Ihre Nummer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.a': "Hier ist Ali. Würden Sie mich so schnell wie möglich zurückrufen?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.dentist': "Der Zahnarzt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandarts': "der Zahnarzt / die Zahnärztin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiespijn': "die Zahnschmerzen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaatje': "das Loch im Zahn (Karies: ein kleines Loch in einem Zahn)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulling': "die Füllung (der Zahnarzt schließt das Loch in einem Zahn)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebit': "das Gebiss (alle deine Zähne zusammen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvullendeverzekering': "die Zusatzversicherung (du kannst sie zusätzlich zur Grundversicherung für Gesundheit wählen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.1': "Ich habe seit zwei Tagen Zahnschmerzen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.2': "Ich habe ein Loch im Zahn. Ich bekomme eine Füllung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.3': "Was kostet eine Füllung?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.q': "Wann warst du zuletzt beim Zahnarzt?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.a': "Vor einem Jahr. Ich möchte gern eine Kontrolle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms': "Ein Formular: Schreib deutlich, und pass auf deine BSN auf", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.forms.b': "Ein Formular fragt oft nach deinem Namen, Geburtsdatum, deiner Adresse und Postleitzahl. Schreib deutlich, oft in Großbuchstaben. Ein Feld mit einem Stern (*) ist ein Pflichtfeld: Du musst es ausfüllen. Kreuz das richtige Kästchen an. Verstehst du eine Frage nicht? Bitte um Hilfe, bevor du unterschreibst. Unterschreib nie etwas, das du nicht verstehst. Deine BSN: Nur manche Stellen dürfen danach fragen, zum Beispiel dein Arbeitgeber, die gemeente, der Belastingdienst, deine Krankenversicherung, dein Arzt und deine Bank. Ein Geschäft oder ein Sportverein darf das nicht. Gib deine BSN nie einem Fremden, in einer App oder am Telefon. Nicht sicher? Frag, warum sie sie brauchen. Viele Bibliotheken helfen kostenlos bei Formularen, oft in einer offenen Sprechstunde. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.p': "Ist meine BSN hier Pflicht?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.s': "Du meldest dich in einem Sportverein an. Das Formular fragt nach deiner BSN. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o1': "Lass es leer, und frag, warum sie sie brauchen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o2': "Füll es aus: Jedes Formular darf danach fragen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o3': "Gib stattdessen deine DigiD-Zugangsdaten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.w': "Ein Sportverein darf deine BSN nicht benutzen. Nur manche Stellen dürfen das, zum Beispiel dein Arbeitgeber, die gemeente und deine Krankenversicherung. Wenn du fragst, warum, schützt du deine Nummer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail': "Eine Nachricht: wer, warum, deine Nummer", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.b': "Keine Antwort? Sprich nach dem Piepton (piep) eine kurze Nachricht (boodschap) auf. Sag deinen Namen, warum du anrufst, und deine Telefonnummer. Sprich langsam, und sag deine Nummer zweimal. Einen Anruf verpasst? Hör zuerst deine Mailbox ab, und ruf dann so schnell wie möglich zurück. Verstehst du eine Nachricht nicht? Hör sie noch einmal ab, oder bitte einen Kollegen, mit dir zuzuhören. Richte deine Mailbox ein, und hör sie jeden Tag ab. Du meldest dich krank? In vielen Firmen reicht eine Nachricht nicht: Ruf noch einmal an, bis du mit jemandem sprichst. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.p': "Darf ich eine Nachricht hinterlassen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.s': "Du kommst zu spät, und du rufst deine Vorgesetzte an. Du hörst ihre Mailbox. Was sagst du nach dem Piepton?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o1': "Deinen Namen, warum du anrufst, und deine Nummer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o2': "Nur „Bel me terug“, und auflegen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o3': "Nichts: Du legst auf und wartest.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.w': "Mit deinem Namen, dem Grund und deiner Nummer weiß deine Vorgesetzte, was los ist, und kann dich sofort zurückrufen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist': "Der Zahnarzt: eine Kontrolle, und frag nach dem Preis", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.b': "Melde dich bei einem Zahnarzt (tandarts) in der Nähe deiner Wohnung an, und geh regelmäßig zur Kontrolle (controle), oft einmal im Jahr. Zahnschmerzen? Ruf deinen Zahnarzt an und sag, dass es sehr weh tut: Dann bekommst du oft schnell einen Termin. Nachts oder am Wochenende ruf deinen eigenen Zahnarzt an: Die Ansage am Telefon sagt dir, welcher Zahnarzt jetzt hilft. Für Erwachsene zahlt die Grundversicherung für Gesundheit sehr wenig beim Zahnarzt: meistens nicht die Kontrolle oder eine Füllung. Du kannst eine Zusatzversicherung (aanvullende verzekering) für den Zahnarzt wählen: Prüfe, was sie bezahlt. Für Kinder unter 18 zahlt die Grundversicherung die meiste Zahnbehandlung. Frag, was eine Behandlung kostet, bevor sie anfängt. Bei einer großen Behandlung muss dir der Zahnarzt den Preis zuerst auf Papier geben. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.p': "Ich habe starke Schmerzen. Kann ich heute noch kommen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.s': "Es ist Samstagabend. Du hast starke Zahnschmerzen, und eine Schmerztablette hilft nicht. Was machst du?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o1': "Ruf deinen Zahnarzt an: Die Ansage sagt, wer jetzt hilft.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o2': "Ruf 112 an: Es ist ein Notfall.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o3': "Warte bis Montag, und nimm mehr Schmerztabletten.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.w': "Außerhalb der Sprechzeiten hilft ein Zahnarzt im Notdienst bei dringenden Schmerzen. 112 ist nur für einen Notfall, zum Beispiel bei Lebensgefahr.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
