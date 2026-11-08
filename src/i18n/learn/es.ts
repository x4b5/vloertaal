import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "No necesitas micrófono. Dilo en voz alta y luego sigue.",
    micRetry: "Prueba otra vez el micrófono",
    micFailed: "El micrófono no funcionó. Dilo en voz alta y luego sigue.",
    micRefused: "La app no puede usar tu micrófono. Puedes activarlo.", // nieuw, nalezen
    micTurnOn: "Activa el micrófono", // nieuw, nalezen
    micStepsIos: "Toca “•••” o “aA” en la barra de direcciones › Ajustes del sitio web › Micrófono › Permitir. O: Ajustes › Apps › Safari › Micrófono. Luego toca el botón de abajo.", // nieuw, nalezen
    micStepsIosOther: "Toca el icono a la izquierda de la dirección web › Permisos › Micrófono › Permitir. O: Ajustes › Apps › {app} › Micrófono. Luego toca el botón de abajo.", // nieuw, nalezen
    micStepsAndroid: "Toca el icono a la izquierda de la dirección web › Permisos › Micrófono › Permitir. Luego toca el botón de abajo.", // nieuw, nalezen
    micStepsAndroidApp: "Mantén pulsado el icono de Vloertaal en tu pantalla de inicio › Información de la app › Permisos › Micrófono › Permitir. Luego toca el botón de abajo.", // nieuw, nalezen
    micStepsDesktop: "Haz clic en el icono a la izquierda de la dirección web › Micrófono › Permitir. Luego haz clic en el botón de abajo.", // nieuw, nalezen
    whichPicture: "¿Qué imagen es?",
    sayAloudInstead: "Mejor dilo en voz alta",
    wordsPractised: "Palabras practicadas",
    reviewComplete: "¡Repaso terminado!",
  },
  gloss: {
    'c.hello.a.why': "A una despedida se responde con una despedida.",
    'c.people.a.why': "La pregunta pide un nombre. Esta respuesta lo da.",
    'c.arrive.a.why': "Te preguntan a qué vienes: esta respuesta dice que eres una persona nueva y que empiezas hoy.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.understand.a.why': "¿No lo entiendes? Pedir que lo repitan es normal.",
    'c.translate.a.why': "La nota todavía no está clara, así que primero se traduce.",
    'c.understood.a.why': "Repetir la tarea con tus palabras sirve para comprobar que el orden está claro.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.keeplearning.a.why': "Pedir que te hablen en neerlandés está bien: practicar ayuda.",
    'c.gear.a.why': "La pregunta es sobre el casco: sí, lo lleva puesto.",
    'c.danger.a.why': "En un accidente, primero se llama al 112.",
    'c.alarm.a.why': "Preguntan si todos han salido: esta respuesta dice quién falta todavía.", // nieuw, nalezen
    'c.accident.a.why': "Te preguntan qué pasó: esta respuesta dice qué pasó y cómo está él.",
    'c.notyet.a.why': "Te dicen que solo lo pruebes: pedir que primero te lo enseñen es la respuesta segura.",
    'c.things.a.why': "La pregunta es “dónde”. Esta respuesta dice un lugar.",
    'c.directions.a.why': "¿Izquierda o derecha? Esta respuesta elige una y dice dónde.",
    'c.shift.a.why': "¿Cuándo empieza el turno? Esta respuesta da el día y la hora.",
    'c.sick.a.why': "Quien está enfermo se queda en casa y avisa.",
    'd.speakup.a.why': "Te preguntan si algo va mal: un sí sincero está bien.",
    'd.agree.a.why': "Se puede decir que no. Proponer otro día ayuda.",
    'd.task.a.why': "Te preguntan si ya está: esta respuesta dice “casi” y cuánto falta.",
    'd.clear.a.why': 'Te preguntan si está claro: primero sí, luego la única pregunta.', // nieuw, nalezen
    'c.cv.a.why': "Una referencia es un jefe anterior que puede hablar de tu trabajo.",
    'c.interview.a.why': "En una entrevista de trabajo, lo que cuenta es la experiencia laboral.",
    'c.findwork.a.why': "La pregunta es qué trabajo. Esta respuesta lo nombra.",
    'c.contract.a.why': "Un sí y una pregunta sobre la hora: es una respuesta clara y con ganas.",
    'c.agency.a.why': "Te preguntan por las horas: sí, y dice cuándo y cómo.",
    'c.bsn.a.why': "La empresa puede pedir ver un documento de identidad, como el pasaporte.",
    'c.housing.a.why': "El dinero que te quitan del sueldo se tiene que acordar por escrito.",
    'c.payslip.a.why': "Si faltan horas en la nómina, hay que decirlo.",
    'c.extra.a.why': "Las horas extra se apuntan, así se pueden comprobar en la nómina.",
    'c.phone.a.why': "Nada de teléfono cerca de las máquinas: los mensajes esperan a la pausa.",
    'c.smoking.a.why': "Las pausas son a horas fijas, no antes.",
    'c.clock.a.why': "No está permitido fichar por otra persona.",
    'c.hygiene.a.why': "Redecilla puesta y joyas fuera: son las normas de higiene para la comida.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.smalltalk.a.why': "La pregunta es sobre el fin de semana: basta con contar una cosa.",
    'c.mistakes.a.why': "A un elogio se responde con un gracias.",
    'c.respect.a.why': "El acoso se tiene que contar, para que alguien pueda ayudar.",
    'c.gossip.a.why': "No meterte en chismes mantiene la confianza en el equipo.",
    'c.boundaries.a.why': "Una broma que hace daño se puede parar, con claridad.",
    'c.health.a.why': "Una pausa protege la salud, por eso se toma.",
    'c.rights.a.why': "Un despido nunca se firma enseguida. Primero, pide consejo.",
    'c.mustmay.a.why': "Voluntario significa que puedes elegir: trabajar el sábado no hace falta.", // nieuw, nalezen
    'c.leave.a.why': "¿Cuándo? Esta respuesta da un mes y cuánto tiempo.",
    'c.illness.a.why': "Los detalles médicos son para el médico de empresa, no para el jefe.",
    'c.warning.a.why': "La empresa puede copiar un pasaporte, pero no quedárselo.",
    'c.gethelp.a.why': "Si dices claramente qué pasa, te pueden ayudar.",
    'c.callin.a.why': "¿Cuándo vuelves? Esta respuesta da un día.",
    'c.texting.a.why': "Una respuesta rápida en la app ayuda a hacer el horario.",
    'c.certs.a.why': "Un no sincero y ganas de aprender: es una buena respuesta.",
    'c.diploma.a.why': "Decir sí a una formación y preguntar quién paga es normal.",
    'c.doctor.a.why': "El servicio de médico de guardia necesita saber quién está enfermo y qué le pasa.",
    'c.insurance.a.why': "El nombre de la aseguradora está en la tarjeta del seguro médico.",
    'c.letters.a.why': "La declaración de la renta se hace antes del 1 de mayo.",
    'c.scams.a.why': "Un banco nunca pide tu PIN. Colgar es lo correcto.",
    'c.bike.a.why': "¿Cómo? Esta respuesta da el medio de transporte y el tiempo.",
    'c.transit.a.why': "No es el tren: esta respuesta dice el autobús.",
    'c.ww.a.why': "La prestación por desempleo (WW) se tiene que pedir enseguida.",
    'c.newjob.a.why': "Con un número de teléfono te pueden volver a llamar.",
    'c.tools.a.why': "¿Dónde? Esta respuesta da el lugar: en la furgoneta.",
    'c.site.a.why': "En un tejado, la protección contra caídas siempre va primero.",
    'c.line.a.why': "¿Cómo va? Esta respuesta dice cómo va y nombra el problema.",
    'c.quality.a.why': "¿Por qué se apartó? Esta respuesta dice el defecto.",
    'c.client.a.why': "Una persona a la que cuidas te pide ayuda: un sí educado, con “u”.",
    'c.privacy.a.why': "Los medicamentos son para personal formado: los da la enfermera.",
    'c.kitchen.a.why': "Una alergia es algo serio: el jefe de cocina tiene que saberlo.",
    'c.service.a.why': "Te piden la cuenta: un sí corto, y vas enseguida.",
    'c.cleaning.a.why': "¿Terminaste? Esta respuesta dice “casi” y cuántos quedan.",
    'c.cleansafe.a.why': "Un suelo mojado resbala: avisar ayuda.",
    'c.shelves.a.why': "Te preguntan dónde: esta respuesta dice el pasillo y ofrece ayuda.",
    'c.checkout.a.why': "Te preguntan si se puede pagar con tarjeta: un sí amable.",
    'c.counting.a.why': "Preguntan cuántas: esta respuesta da el número y lo comprueba cifra por cifra.", // nieuw, nalezen
    'c.hours.a.why': "Te preguntan la hora: esta respuesta da una hora.",
    'c.measures.a.why': "Te preguntan cuánto mide: esta respuesta da una longitud.",
    'c.aihelp.a.why': "Te preguntan quién lo escribió: un sí sincero que dice quién ayudó.",
    'c.aiprivate.a.why': "Te piden poner nombres en un chatbot: esta respuesta dice que no, y por qué.",
    'c.aifake.a.why': "Un número nuevo pide dinero: esta respuesta primero lo comprueba.",
    'c.aiplan.a.why': "Una app hizo el horario: esta respuesta pide hablar con una persona.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Preguntan cuántas filas: esta respuesta da un número, y lo que falta.", // nagelezen (2e lezing)
    'c.greensafe.a.why': "Lo acaban de fumigar: esta respuesta dice “todavía no” y por qué.", // nagelezen (2e lezing)
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Preguntan el apellido: esta respuesta lo da y ofrece deletrearlo.",
    'c.dates.a.why': "Preguntan la fecha: esta respuesta da el día y la fecha.",
    'c.permit.a.why': "Decir que no está bien si das una razón. Ofrecer otro día ayuda.",
    'c.kids.a.why': "Preguntan por qué: esta respuesta da la razón, ha llamado la guardería.",
    'c.body.a.why': "Preguntan dónde duele: esta respuesta dice el sitio y la causa.",
    'c.jobends.a.why': "La casa va con el trabajo: esta respuesta pregunta por el plazo de preaviso.",
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Una palabra no está clara: preguntar antes de empezar es la respuesta correcta.", // nieuw, nalezen
    'c.handover.a.why': "Te preguntan si todo está hecho: esta respuesta dice qué no está hecho, y por qué.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.workshop.a.why': "Te preguntan por qué: esta respuesta da la razón, hay que proteger los ojos.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.power.a.why': "Cambiar una lámpara: esta respuesta pregunta primero si la corriente está cortada.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.garage.a.why': "Te piden cambiar los neumáticos: un sí, y una pregunta sobre dónde están.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.carjob.a.why': "Trabajo extra: el cliente tiene que aceptar primero, así que esta respuesta se lo pregunta al jefe.", // nieuw, nalezen
    'c.placement.a.why': "Te preguntan cuándo: esta respuesta da el día, y el convenio va primero.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.review.a.why': "El comentario no está claro todavía: pedir que te lo enseñen es una buena respuesta.", // nieuw, nalezen
    'c.council.a.why': "Te preguntan por el voto: un sí, y las dos cosas que hay que llevar.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.police.a.why': "La policía pide el documento: enseñarlo y preguntar qué pasa.", // nieuw, nalezen
    'c.login.a.why': "Te preguntan si puedes entrar: esta respuesta dice que no, y por qué.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.phish.a.why': "Te preguntan por el enlace: un sí sincero, y una llamada a informática.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.mychoice.a.why': "Te preguntan por tus puntos fuertes: esta respuesta nombra uno, con un ejemplo.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.nextstep.a.why': "Te preguntan por tu plan: esta respuesta nombra la bbl y lo que significa.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.email.a.why': "Te preguntan si lo has enviado: todavía no, primero se revisa.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.budget.a.why': "Te ofrecen pagar después: un no educado, con la razón.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.healthy.a.why': "Te ofrecen una pastilla: un no educado, con la razón.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'd.newcolleague.a.why': "“Creo” todavía no es seguro: pedir que lo enseñe comprueba que funciona.", // nieuw, nalezen
    'd.explain.a.why': 'Te preguntan qué pasa: esta respuesta dice qué, y qué hace falta.', // nieuw, nalezen
    'd.listen.a.why': 'No sabes si es una broma: preguntar es mejor que adivinar.', // nieuw, nalezen
    'd.calm.a.why': 'Te preguntan por qué no está hecho: un motivo tranquilo, y qué va primero.', // nieuw, nalezen
    'd.talkintime.a.why': 'Alguien pide un momento: un sí, y una pregunta para que lo pueda contar.', // nieuw, nalezen
    'd.reachable.a.why': 'Devuelves una llamada perdida: un saludo, y por qué llamas.', // nieuw, nalezen
    'd.getfeedback.a.why': 'Te ofrecen feedback: un sí, y que quieres hacerlo bien.', // nieuw, nalezen
    'd.givefeedback.a.why': 'Te preguntan por el trabajo: primero lo que está bien, luego lo que puede mejorar.', // nieuw, nalezen
    'd.meeting.a.why': 'Preguntan si hay preguntas: esta respuesta hace una, sobre el horario.', // nieuw, nalezen
    'c.food.a.why': "Te preguntan por qué se limpia la línea: el siguiente producto no lleva frutos secos.", // nieuw, nalezen
    'c.parcel.a.why': "Preguntan si el paquete es suyo: sí, y luego la firma.", // nieuw, nalezen
    'c.road.a.why': "Te piden un reparto más: no, porque primero va la pausa.", // nieuw, nalezen
    'c.backtowork.a.why': "Te preguntan cómo estás: un sí corto, y que te lo tomas con calma.", // nieuw, nalezen
    'c.feelwell.a.why': "Te preguntan cómo estás: un “no muy bien” sincero está bien.", // nieuw, nalezen
  },
};

export default t;
