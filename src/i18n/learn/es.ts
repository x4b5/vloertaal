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
    'c.arrive.a.why': "Te preguntan a qué vienes: esta respuesta dice que eres una persona nueva y que empiezas hoy.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.understand.a.why': "¿No lo entiendes? Pedir que lo repitan es normal.",
    'c.translate.a.why': "La nota todavía no está clara, así que primero se traduce.",
    'c.understood.a.why': "Repetir la tarea con tus palabras sirve para comprobar qué tienes que hacer primero.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.keeplearning.a.why': "Pedir que te hablen en neerlandés está bien: practicar ayuda.",
    'c.gear.a.why': "La pregunta es sobre el casco: sí, lo lleva puesto.",
    'c.danger.a.why': "En un accidente, primero se llama al 112.",
    'c.alarm.a.why': "Preguntan si todos han salido: esta respuesta dice quién falta todavía.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Te preguntan qué pasó: esta respuesta dice qué pasó y cómo está él.",
    'c.notyet.a.why': "Te dicen que solo lo pruebes: pedir que primero te lo enseñen es la respuesta segura.",
    'c.things.a.why': "La pregunta es “dónde”. Esta respuesta dice un lugar.",
    'c.directions.a.why': "¿Izquierda o derecha? Esta respuesta elige una y dice dónde.",
    'c.shift.a.why': "¿Cuándo empieza el turno? Esta respuesta da el día y la hora.",
    'c.sick.a.why': "Quien está enfermo se queda en casa y avisa.",
    'd.speakup.a.why': "Te preguntan si algo va mal: un sí sincero está bien.",
    'd.agree.a.why': "Se puede decir que no. Proponer otro día ayuda.",
    'd.task.a.why': "Te preguntan si ya está: esta respuesta dice “casi” y cuánto falta.",
    'd.clear.a.why': 'Te preguntan si está claro: primero sí, luego la única pregunta.', // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.hygiene.a.why': "Redecilla puesta y joyas fuera: son las normas de higiene para la comida.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.smalltalk.a.why': "La pregunta es sobre el fin de semana: basta con contar una cosa.",
    'c.mistakes.a.why': "A un elogio se responde con un gracias.",
    'c.respect.a.why': "El acoso se tiene que contar, para que alguien pueda ayudar.",
    'c.gossip.a.why': "No meterte en chismes mantiene la confianza en el equipo.",
    'c.boundaries.a.why': "Una broma que hace daño se puede parar, con claridad.",
    'c.health.a.why': "Una pausa protege la salud, por eso se toma.",
    'c.rights.a.why': "Un despido nunca se firma enseguida. Primero, pide consejo.",
    'c.mustmay.a.why': "Voluntario significa que puedes elegir: trabajar el sábado no hace falta.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.counting.a.why': "Preguntan cuántas: esta respuesta da el número y lo comprueba cifra por cifra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Te preguntan la hora: esta respuesta da una hora.",
    'c.measures.a.why': "Te preguntan cuánto mide: esta respuesta da una longitud.",
    'c.aihelp.a.why': "Te preguntan quién lo escribió: un sí sincero que dice quién ayudó.",
    'c.aiprivate.a.why': "Te piden poner nombres en un chatbot: esta respuesta dice que no, y por qué.",
    'c.aifake.a.why': "Un número nuevo pide dinero: esta respuesta primero lo comprueba.",
    'c.aiplan.a.why': "Una app hizo el horario: esta respuesta pide hablar con una persona.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Preguntan cuántas filas: esta respuesta da un número, y lo que falta.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Lo acaban de fumigar: esta respuesta dice “todavía no” y por qué.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Preguntan el apellido: esta respuesta lo da y ofrece deletrearlo.", // nagelezen AI 22 nov
    'c.dates.a.why': "Preguntan la fecha: esta respuesta da el día y la fecha.", // nagelezen AI 22 nov
    'c.permit.a.why': "Decir que no está bien si das una razón. Ofrecer otro día ayuda.", // nagelezen AI 22 nov
    'c.kids.a.why': "Preguntan por qué: esta respuesta da la razón, ha llamado la guardería.", // nagelezen AI 22 nov
    'c.body.a.why': "Preguntan dónde duele: esta respuesta dice el sitio y la causa.", // nagelezen AI 22 nov
    'c.jobends.a.why': "La casa va con el trabajo: esta respuesta pregunta por el plazo de preaviso.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Una palabra no está clara: preguntar antes de empezar es la respuesta correcta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Te preguntan si todo está hecho: esta respuesta dice qué no está hecho, y por qué.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.workshop.a.why': "Te preguntan por qué: esta respuesta da la razón, hay que proteger los ojos.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.power.a.why': "Cambiar una lámpara: esta respuesta pregunta primero si la corriente está cortada.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.a.why': "Te piden cambiar los neumáticos: un sí, y una pregunta sobre dónde están.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.a.why': "Trabajo extra: el cliente tiene que aceptar primero, así que esta respuesta se lo pregunta al encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Te preguntan cuándo: esta respuesta da el día, y el convenio va primero.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.review.a.why': "El comentario no está claro todavía: pedir que te lo enseñen es una buena respuesta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "Te preguntan por el voto: un sí, y las dos cosas que hay que llevar.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.police.a.why': "La policía pide el documento: enseñarlo y preguntar qué pasa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Te preguntan si puedes entrar: esta respuesta dice que no, y por qué.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.phish.a.why': "Te preguntan por el enlace: un sí sincero, y una llamada a informática.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.mychoice.a.why': "Te preguntan por tus puntos fuertes: esta respuesta nombra uno, con un ejemplo.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.nextstep.a.why': "Te preguntan por tu plan: esta respuesta nombra la bbl y lo que significa.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.email.a.why': "Te preguntan si lo has enviado: todavía no, primero se revisa.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.budget.a.why': "Te ofrecen pagar después: un no educado, con la razón.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.a.why': "Te ofrecen una pastilla: un no educado, con la razón.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'd.newcolleague.a.why': "“Creo” todavía no es seguro: pedir que lo enseñe comprueba que funciona.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.explain.a.why': 'Te preguntan qué pasa: esta respuesta dice qué, y qué hace falta.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': 'No sabes si es una broma: preguntar es mejor que adivinar.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': 'Te preguntan por qué no está hecho: un motivo tranquilo, y qué va primero.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': 'Alguien pide un momento: un sí, y una pregunta para que lo pueda contar.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': 'Devuelves una llamada perdida: un saludo, y por qué llamas.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': 'Te ofrecen feedback: un sí, y que quieres hacerlo bien.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': 'Te preguntan por el trabajo: primero lo que está bien, luego lo que puede mejorar.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': 'Preguntan si hay preguntas: esta respuesta hace una, sobre el horario.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Te preguntan por qué se limpia la línea: el siguiente producto no lleva frutos secos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Preguntan si el paquete es suyo: sí, y luego la firma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Te piden un reparto más: no, porque primero va la pausa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Te preguntan el ancho: un número con su unidad, y lo apuntas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Te preguntan dónde va la madera: un sitio, y dónde está.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Te preguntan qué ha pasado: sí, qué, y cuánto tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Te preguntan cómo está: lo que ves, y que es nuevo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Te piden levantar a una persona: sin ayuda no, primero va la grúa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Te preguntan por vasos limpios: sí, y cuándo llegan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Un pedido del chef: lo repites, y así sabe que lo has oído.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Te preguntan si la oficina está hecha: no, y el motivo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Te preguntan por un paño: no, porque el rojo es para el inodoro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Te preguntan por leche: no dices “no”, vas a mirar en el almacén.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Un cliente enfadado: palabras tranquilas, y viene un compañero.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Te preguntan cuáles recoger: el color dice cuál está maduro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Viene una tormenta: parar e ir dentro es lo seguro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Te preguntan si encaja: no, y mides otra vez antes de usar la fuerza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Te preguntan si pueden cogerlo: todavía no, el metal caliente tiene que enfriarse.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Te preguntan qué oyes: qué pieza, y qué hace.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Te preguntan si pueden empezar: todavía no, porque el coche es eléctrico.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Te preguntan cómo estás: un sí corto, y que te lo tomas con calma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Te preguntan cómo estás: un “no muy bien” sincero está bien.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Te preguntan qué ubicación: el pasillo y el hueco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Te preguntan si el palé está listo: no, y qué le falta todavía.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Te preguntan si la furgoneta está bien: no, y qué está roto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Te preguntan dónde estás: el sitio, y cuánto más tarde llegas.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Te preguntan si sabes cómo: no, todavía no, y lo dices con sinceridad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Te preguntan si tienes una pregunta: sí, y primero preguntas si hay tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Te preguntan si lo encuentras: no, y pides que te lo señalen.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Te piden que sujetes algo: sí, y preguntas dónde ponerlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Te preguntan si la puerta está cerrada: no, y la cierras ahora.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Te preguntan si está lleno: sí, y lo vacías.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Te piden hacerlo ahora: sí, y preguntas qué viene después.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Te preguntan dónde está la batidora: un sitio, y qué hay cerca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Te preguntan por dónde empezar: en el medio, en la línea central.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Te preguntan si la pared está seca: no, y cuánto hay que esperar.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Te preguntan si es un cuadrado: no, un rectángulo, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Te preguntan cuántos grados: el número, y de qué es la mitad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Te preguntan qué tamaño tiene el suelo: la cuenta, y el resultado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Te preguntan qué brocha: la ancha para la pared, la pequeña para las esquinas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Te preguntan si se puede pintar: no, y qué va primero.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Te preguntan cuántos ladrillos quedan: un palé, y que es suficiente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Te preguntan qué altura tiene que tener la hilada: dónde se puede ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Te preguntan qué sierra: el serrucho de costilla, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Te preguntan si el ángulo está recto: sí, y cómo lo sabes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Te preguntan dónde está el taladro: un sitio, y que está casi lleno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Te preguntan cómo fijar la balda: con qué, y cuántos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Te preguntan por qué se para: el sensor, y lo que no ve.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Te preguntan cada cuánto: una vez por hora, y dónde apuntarlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Te preguntan cuántos por caja: el número, y dónde está escrito.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Te preguntan cuándo: el día de la semana, y el momento de ese día.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Te preguntan qué hilo va dónde: el mismo color con el mismo color.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Te preguntan si puedes abrirlo: no, y quién lo hace.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Te preguntan si todavía pierde: un poco, y lo que vas a hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Te preguntan por qué está afilado: todavía tiene una rebaba.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Te preguntan qué paso: el número, y dónde mirar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Te preguntan cuánto apretar: hasta que la llave hace clic.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Te preguntan si se puede estar ahí: no, nunca, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Te preguntan si está bien: no, y qué problema tiene.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Te preguntan a qué profundidad: la profundidad, y no más.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Te preguntan si está maduro: no, todavía verde, y qué hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Te preguntan por qué hace calor: la pantalla y las ventanas están cerradas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Te preguntan si se puede matar: no, y por qué ayuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Te preguntan si hay que quitarlos: sí, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Te preguntan cuánto: los litros, y cómo comprobarlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Te preguntan si hay que cambiarlo: sí, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Te preguntan qué hay que hacer: mirar la orden de trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Te preguntan si se puede coger: sí, y qué hacer primero.", // nieuw, nalezen
    'c.pruning.a.why': "Te preguntan qué ramas: solo las muertas.", // nieuw, nalezen
    'c.hedge.a.why': "Te preguntan a qué altura: hasta la línea, no más bajo.", // nieuw, nalezen
    'c.chainsaw.a.why': "Te preguntan si se puede: todavía no, y qué va primero.", // nieuw, nalezen
    'c.weeding.a.why': "Te preguntan si es una mala hierba: no, y qué hacer con ella.", // nieuw, nalezen
    'c.planting.a.why': "Te preguntan dónde va: el sitio en el parterre.", // nieuw, nalezen
    'c.roadside.a.why': "Te preguntan si se puede cruzar: no, esperar, y por qué.", // nieuw, nalezen
    'c.litter.a.why': "Un vecino pregunta cuándo: no lo sabes, y quién lo sabe.", // nieuw, nalezen
    'c.reception.a.why': "Un visitante tiene una cita: un momento, y llamas.", // nieuw, nalezen
    'c.visitors.a.why': "Te preguntan dónde va el abrigo: el sitio, y dónde está.", // nieuw, nalezen
    'c.mailroom.a.why': "Te preguntan para quién es: el departamento, y la planta.", // nieuw, nalezen
    'c.meetingroom.a.why': "Te preguntan a qué hora: la hora, y qué hay que hacer.", // nieuw, nalezen
    'c.faults.a.why': "Te preguntan por qué hace frío: qué está roto, y cuándo llega ayuda.", // nieuw, nalezen
    'c.repairs.a.why': "Te preguntan si pita: sí, y por qué.", // nieuw, nalezen
    'c.moving.a.why': "Te preguntan adónde va: la sala, y dónde mirar.", // nieuw, nalezen
    'c.closing.a.why': "Te preguntan si queda alguien: no, y qué haces ahora.", // nieuw, nalezen
    'c.patrol.a.why': "Te preguntan si has visto algo: sí, qué, y dónde.", // nieuw, nalezen
    'c.access.a.why': "Te piden entrar sin tarjeta: lo siento, sin tarjeta no.", // nieuw, nalezen
    'c.cameras.a.why': "Te preguntan qué ves: quién, dónde, y qué haces.", // nieuw, nalezen
    'c.report.a.why': "Te preguntan qué va en el informe: qué, dónde y cuándo.", // nieuw, nalezen
    'c.evacuation.a.why': "Te preguntan si están todos fuera: no, y cuántos faltan.", // nieuw, nalezen
    'c.firstaid.a.why': "Te preguntan dónde está el DEA: el sitio, y qué hay al lado.", // nieuw, nalezen
    'c.shoplifting.a.why': "Te preguntan si se puede registrar una bolsa: no, y quién lo hace.", // nieuw, nalezen
    'c.aggression.a.why': "Te preguntan por qué no: el motivo, dicho con calma.", // nieuw, nalezen
    'c.hygienelock.a.why': "Te preguntan por un reloj: no, y la norma que hay detrás.", // nieuw, nalezen
    'c.allergens.a.why': "Te preguntan si puede ir junto: no, y por qué.", // nieuw, nalezen
    'c.coldroom.a.why': "Te preguntan por qué pita: la causa, y qué hacer.", // nieuw, nalezen
    'c.foreignbody.a.why': "Te preguntan qué hacer: a quién enseñárselo.", // nieuw, nalezen
    'c.cutting.a.why': "Te preguntan cuánto: el peso, y dónde mirar.", // nieuw, nalezen
    'c.labels.a.why': "Te preguntan qué fecha: cuándo, y dónde mirar.", // nieuw, nalezen
    'c.linecleaning.a.why': "Te preguntan si está limpia: todavía no, y qué falta.", // nieuw, nalezen
    'c.haccp.a.why': "Te preguntan por qué: para saber que la comida es segura.", // nieuw, nalezen
    'c.binlorry.a.why': "Te preguntan si se puede ir detrás: no, y dónde ir.", // nieuw, nalezen
    'c.reversing.a.why': "Te piden ayuda: sí, dónde estás, y qué hacer.", // nieuw, nalezen
    'c.wastesorting.a.why': "Te preguntan dónde va: el contenedor, y por qué.", // nieuw, nalezen
    'c.wastesafety.a.why': "Te preguntan qué hacer después de un corte: lavarlo, y avisar.", // nieuw, nalezen
    'c.yard.a.why': "Te preguntan dónde va: el contenedor, y dónde está.", // nieuw, nalezen
    'c.hazardous.a.why': "Te preguntan qué hay dentro: no lo sabes, así que va aparte.", // nieuw, nalezen
    'c.baler.a.why': "Te preguntan si se puede mirar: no, y qué va primero.", // nieuw, nalezen
    'c.shovel.a.why': "Te preguntan si se puede pasar: solo cuando el conductor te ve.", // nieuw, nalezen
    'c.nappies.a.why': "Te preguntan cuándo: la hora, y dónde está apuntado.", // nieuw, nalezen
    'c.mealtime.a.why': "Te preguntan si puede comerlo: no, por qué, y dónde mirar.", // nieuw, nalezen
    'c.naptime.a.why': "Te preguntan si duerme: sí, desde cuándo, y que vas a mirar.", // nieuw, nalezen
    'c.playtime.a.why': "Te preguntan si un niño puede jugar: sí, dónde, y qué después.", // nieuw, nalezen
    'c.pickup.a.why': "Te preguntan quién lo recoge: la persona, y que está en la lista.", // nieuw, nalezen
    'c.childsafety.a.why': "Te preguntan si se ha caído: sí, qué tiene, y a quién llamas.", // nieuw, nalezen
    'c.sickchild.a.why': "Te preguntan cómo está: lo que ves, y lo que haces.", // nieuw, nalezen
    'c.grouprules.a.why': "Te preguntan si se puede ir a solas: sí, pero antes avisar a un compañero.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Te preguntan si has terminado: todavía no, y por qué.", // nieuw, nalezen
    'c.hotelroom.a.why': "Te preguntan cuántas quedan: el número, y cuándo terminas.", // nieuw, nalezen
    'c.dosing.a.why': "Te dicen que eches más: no, más no es mejor, y qué usas.", // nieuw, nalezen
    'c.officenight.a.why': "Te preguntan si trabajas a solas: sí, y vas a mandar un mensaje.", // nieuw, nalezen
    'c.knives.a.why': "Te piden que cortes: sí, chef, y una pregunta sobre cómo.", // nieuw, nalezen
    'c.rawcooked.a.why': "Te preguntan si es sin gluten: no lo sabes seguro, así que miras la lista.", // nieuw, nalezen
    'c.pass.a.why': "Te preguntan dónde está la comida: en el pase, y la llevas ahora.", // nieuw, nalezen
    'c.bill.a.why': "Te piden pagar por separado: sí, y vas a por el datáfono.", // nieuw, nalezen
    'c.washing.a.why': "El cliente dice que no: está bien, y ofreces otra cosa.", // nieuw, nalezen
    'c.observing.a.why': "Te preguntan si hay algo especial: sí, y qué exactamente.", // nieuw, nalezen
    'c.homecare.a.why': "Te preguntan quién es: un saludo, quién eres, y si puedes pasar.", // nieuw, nalezen
    'c.liftaids.a.why': "Te piden hacerlo sin ayuda: sí, con la sábana deslizante, y vas a por ella.", // nieuw, nalezen
    'c.returns.a.why': "Te piden devolverlo: sí, y una pregunta sobre el tique.", // nieuw, nalezen
    'c.facing.a.why': "Te preguntan si has terminado: casi, y qué falta todavía.", // nieuw, nalezen
    'c.shrink.a.why': "Te piden mirar en tu bolso: sí, y enseñas el tique.", // nieuw, nalezen
    'c.shopclose.a.why': "Te piden entrar: lo siento, está cerrado, y cuándo se abre otra vez.", // nieuw, nalezen
    'c.hirer.a.why': "Te piden empezar en un sitio nuevo: sí, y una pregunta sobre la hora.", // nieuw, nalezen
    'c.phases.a.why': "Te dicen que el trabajo termina: vale, y pides otro trabajo.", // nieuw, nalezen
    'c.deductions.a.why': "Te hablan de un descuento: preguntas si está permitido, y lo compruebas.", // nieuw, nalezen
    'c.agencyhome.a.why': "Te dicen que te vayas pronto: es poco tiempo, y primero pides consejo.", // nieuw, nalezen
  },
};

export default t;
