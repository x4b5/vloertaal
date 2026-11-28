import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Solicitar un empleo', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'l.cv': 'Tu currículum y tu carta',
    'w.cv': 'el currículum (CV)',
    'w.motivatie': 'la motivación (por qué quieres el trabajo)',
    'w.ervaring': 'la experiencia',
    'w.opleiding': 'los estudios, la formación',
    'w.vaardigheden': 'las habilidades',
    'w.referentie': 'la referencia (alguien que puede hablar de tu trabajo)',
    's.cv.1': 'Aquí está mi currículum.',
    's.cv.2': 'Tengo experiencia en la construcción.',
    's.cv.3': 'Hablo tres idiomas.',
    'c.cv.q': '¿Tienes una referencia?',
    'c.cv.a': 'Sí, mi jefe anterior.',
    'l.interview': 'La entrevista de trabajo',
    'w.sollicitatiegesprek': 'la entrevista de trabajo',
    'w.begroeten': 'saludar',
    'w.vertellen': 'contar',
    'w.vraagstellen': 'hacer una pregunta',
    'w.salaris': 'el salario',
    'w.functie': 'el puesto, el cargo',
    's.interview.1': 'Tengo una entrevista de trabajo.',
    's.interview.2': 'Todavía estoy aprendiendo neerlandés.',
    's.interview.3': '¿Cuándo voy a saber algo de usted?',
    'c.interview.q': 'Cuéntame algo sobre ti.',
    'c.interview.a': 'Trabajé cinco años en un almacén.',
    'u.contract': 'Trabajo y contratos',
    'l.findwork': 'Buscar trabajo',
    'w.vacature': 'la oferta de empleo, la vacante',
    'w.uitzendbureau': 'la agencia de trabajo temporal',
    'w.solliciteren': 'presentarse a un trabajo, enviar una solicitud',
    'w.contract': 'el contrato',
    'w.tekenen': 'firmar',
    'w.tijdelijk': 'temporal',
    's.findwork.1': 'Quiero presentarme a un trabajo.',
    's.findwork.2': '¿El contrato es temporal o fijo?',
    's.findwork.3': '¿Me puede dar una copia del contrato?',
    'c.findwork.q': '¿Qué tipo de trabajo buscas?',
    'c.findwork.a': 'Busco trabajo en un almacén.',
    'l.contract': 'Tu contrato',
    'w.werkgever': 'la empresa, el empleador',
    'w.uren': 'las horas',
    'w.oproepkracht': 'el trabajador a llamada (trabaja cuando lo llaman)',
    'w.proeftijd': 'el periodo de prueba',
    'w.opzegtermijn': 'el plazo de preaviso',
    'w.cao': 'el convenio colectivo (cao)',
    's.contract.1': '¿Cuántas horas trabajo a la semana?',
    's.contract.2': '¿Cuánto dura el periodo de prueba?',
    's.contract.3': '¿Qué convenio colectivo (cao) se me aplica?',
    'c.contract.q': '¿Puedes venir a trabajar mañana?',
    'c.contract.a': 'Sí, ¿a qué hora tengo que estar allí?',
    'l.agency': 'Trabajar con una agencia',
    'w.uitzendkracht': 'el trabajador temporal (de una agencia)',
    'w.intercedent': 'la persona de contacto en la agencia',
    'w.urenbriefje': 'la hoja de horas',
    'w.opdracht': 'el encargo (el trabajo en una empresa)',
    'w.verlengen': 'prolongar, alargar',
    'w.uitbetalen': 'pagar (el dinero)',
    's.agency.1': 'Trabajo a través de una agencia de trabajo temporal.',
    's.agency.2': '¿Me van a prolongar el encargo?',
    's.agency.3': '¿Cuándo termina mi encargo?',
    'c.agency.q': '¿Has enviado tus horas?',
    'c.agency.a': 'Sí, ayer en la app.',
    'u.papers': 'Vivienda y papeles',
    'l.bsn': 'Tu BSN y tus papeles',
    'w.bsn': 'el número de servicio al ciudadano (BSN)',
    'w.identiteitsbewijs': 'el documento de identidad',
    'w.gemeente': 'el ayuntamiento, el municipio',
    'w.inschrijven': 'inscribirse, registrarse',
    'w.adres': 'la dirección',
    'w.zorgverzekering': 'el seguro médico',
    's.bsn.1': 'Me inscribo en el ayuntamiento.',
    's.bsn.2': 'Mi dirección ha cambiado.',
    's.bsn.3': 'Entro con DigiD.',
    'c.bsn.q': '¿Puedo ver tu documento de identidad?',
    'c.bsn.a': 'Sí, aquí está mi pasaporte.',
    'l.housing': 'La vivienda',
    'w.kamer': 'la habitación',
    'w.huur': 'el alquiler',
    'w.huurcontract': 'el contrato de alquiler',
    'w.borg': 'la fianza, el depósito',
    'w.huisbaas': 'el casero, el dueño de la casa',
    'w.inhouden': 'descontar (de tu sueldo)',
    's.housing.1': '¿Cuánto es el alquiler por semana?',
    's.housing.2': '¿Me devuelven la fianza?',
    's.housing.3': 'Quiero un contrato de alquiler aparte.',
    'c.housing.q': 'El alquiler te lo descontamos del sueldo.',
    'c.housing.a': 'Entonces lo quiero por escrito.',
    'u.pay': 'El sueldo',
    'l.payslip': 'Tu nómina',
    'w.loon': 'el sueldo, el salario',
    'w.bruto': 'bruto (antes de impuestos)',
    'w.netto': 'neto (lo que recibes)',
    'w.loonstrook': 'la nómina (el recibo de sueldo)',
    'w.belasting': 'el impuesto',
    'w.uurloon': 'el sueldo por hora',
    's.payslip.1': '¿Cuál es mi sueldo por hora?',
    's.payslip.2': 'Mi nómina no está bien.',
    's.payslip.3': 'El neto es menos que el bruto.',
    'c.payslip.q': '¿Has recibido tu nómina?',
    'c.payslip.a': 'Sí, pero faltan horas.',
    'l.extra': 'Dinero extra',
    'w.vakantiegeld': 'la paga de vacaciones',
    'w.overuren': 'las horas extra',
    'w.toeslag': 'el plus (dinero extra)',
    'w.minimumloon': 'el salario mínimo',
    'w.bankrekening': 'la cuenta bancaria',
    'w.betalen': 'pagar',
    's.extra.1': '¿Recibo un plus por trabajar de noche?',
    's.extra.2': '¿Se pagan las horas extra?',
    's.extra.3': 'Mi sueldo llega a mi cuenta bancaria.',
    'c.extra.q': '¿Puedes quedarte hoy dos horas más?',
    'c.extra.a': 'Sí, ¿me apuntas las horas extra?',
    'u.house': 'Normas de la empresa',
    'l.phone': 'Tu teléfono en el trabajo',
    'w.telefoon': 'el teléfono',
    'w.appen': 'mandar un mensaje (por app)',
    'w.kluisje': 'la taquilla, el casillero', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.uitzetten': 'apagar',
    'w.prive': 'privado, personal',
    'w.foto': 'la foto',
    's.phone.1': 'Mi teléfono está en mi casillero.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.phone.2': 'Apago mi teléfono.',
    's.phone.3': '¿Puedo hacer una foto aquí?',
    'c.phone.q': 'Nada de teléfono cerca de la máquina, ¿de acuerdo?',
    'c.phone.a': 'De acuerdo, mando los mensajes en la pausa.',
    'l.smoking': 'Fumar',
    'w.roken': 'fumar',
    'w.rookplek': 'la zona de fumadores',
    'w.verboden': 'prohibido',
    'w.buiten': 'fuera',
    'w.esigaret': 'el cigarrillo electrónico (vapeador)',
    'w.brandbaar': 'que se quema fácilmente (inflamable)',
    's.smoking.1': 'Aquí está prohibido fumar.',
    's.smoking.2': '¿Dónde está la zona de fumadores?',
    's.smoking.3': 'Solo fumo fuera, en la pausa.',
    'c.smoking.q': '¿Vienes a fumar?',
    'c.smoking.a': 'No, todavía no tengo pausa.',
    'l.clock': 'Fichar y llegar a tiempo',
    'w.inklokken': 'fichar al entrar, marcar la entrada', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.uitklokken': 'fichar al salir, marcar la salida', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.pasje': 'la tarjeta (de empleado)',
    'w.prikklok': 'el reloj para fichar',
    'w.optijd': 'a tiempo',
    'w.rooster': 'el horario de trabajo',
    's.clock.1': 'Ficho a las seis.',
    's.clock.2': 'Se me ha olvidado la tarjeta.',
    's.clock.3': '¿Dónde está el horario de trabajo?',
    'c.clock.q': '¿Fichas un momento por mí?',
    'c.clock.a': 'No, eso no está permitido.',
    'l.hygiene': 'Alcohol, drogas e higiene',
    'w.alcohol': 'el alcohol',
    'w.medicijn': 'el medicamento',
    'w.handenwassen': 'lavarse las manos',
    'w.werkkleding': 'la ropa de trabajo',
    'w.haarnetje': 'la redecilla para el pelo',
    'w.schoon': 'limpio',
    's.hygiene.1': 'Lávate las manos antes del trabajo.',
    's.hygiene.2': 'El alcohol y las drogas están prohibidos.',
    's.hygiene.3': 'Mi ropa de trabajo está limpia.',
    'c.hygiene.q': '¿Llevas puesta la redecilla?',
    'c.hygiene.a': 'Sí, y me he quitado el anillo.',
    'u.social': 'Llevarse bien',
    'l.smalltalk': 'Charlar y las pausas',
    'w.weekend': 'el fin de semana',
    'w.koffie': 'el café',
    'w.gezellig': 'agradable, a gusto juntos',
    'w.weer': 'el tiempo (el clima)',
    'w.verjaardag': 'el cumpleaños',
    'w.gefeliciteerd': 'felicidades',
    's.smalltalk.1': '¿Qué tal tu fin de semana?',
    's.smalltalk.2': '¿Puedo sentarme con ustedes?',
    's.smalltalk.3': 'Hoy hace buen tiempo.',
    'c.smalltalk.q': '¿Qué hiciste este fin de semana?',
    'c.smalltalk.a': 'Jugué al fútbol con unos amigos.',
    'l.mistakes': 'Comentarios y errores',
    'w.fout': 'el error',
    'w.compliment': 'el elogio, el cumplido',
    'w.feedback': 'el feedback, los comentarios (lo que alguien dice sobre tu trabajo)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitleggen': 'explicar',
    'w.leren': 'aprender',
    'w.verbeteren': 'mejorar, corregir',
    's.mistakes.1': 'Perdón, he cometido un error.',
    's.mistakes.2': '¿Me lo puedes explicar?',
    's.mistakes.3': '¡Gracias por el cumplido!',
    'c.mistakes.q': '¡Muy bien hecho!',
    'c.mistakes.a': 'Gracias, me alegra oírlo.',
    'l.respect': 'Respeto para todos',
    'w.respect': 'el respeto',
    'w.gelijk': 'igual',
    'w.grens': 'el límite',
    'w.neezeggen': 'decir que no',
    'w.pesten': 'acosar, molestar (a alguien)',
    'w.vertrouwenspersoon': 'la persona de confianza (para hablar de problemas en el trabajo)',
    's.respect.1': 'Aquí todos somos iguales.',
    's.respect.2': 'Esto no me parece bien.',
    's.respect.3': 'Para, este es mi límite.',
    'c.respect.q': '¿Qué pasa? Pareces triste.',
    'c.respect.a': 'Un compañero me está acosando.',
    'u.rights': 'Normas y derechos',
    'l.health': 'Trabajo seguro y sano',
    'w.arbowet': 'la ley de salud y seguridad en el trabajo (Arbowet)',
    'w.veilig': 'seguro',
    'w.werktijden': 'el horario de trabajo',
    'w.rust': 'el descanso',
    'w.beschermingsmiddelen': 'el equipo de protección',
    'w.arbeidsinspectie': 'la Inspección de Trabajo',
    's.health.1': 'Tengo derecho a una pausa.',
    's.health.2': 'El trabajo tiene que ser seguro.',
    's.health.3': 'Lo denuncio ante la Inspección de Trabajo.',
    'c.health.q': 'Ahora tienes que hacer una pausa.',
    'c.health.a': 'De acuerdo, me siento un momento.',
    'l.rights': 'Tus derechos',
    'w.recht': 'el derecho',
    'w.discriminatie': 'la discriminación',
    'w.vakbond': 'el sindicato',
    'w.juridischloket': 'la oficina gratuita de ayuda legal (Juridisch Loket)',
    'w.klacht': 'la queja, la reclamación',
    'w.ontslag': 'el despido',
    's.rights.1': 'Quiero presentar una queja.',
    's.rights.2': 'Soy miembro del sindicato.',
    's.rights.3': 'Esto es discriminación.',
    'c.rights.q': 'Firma aquí tu despido.',
    'c.rights.a': 'No, todavía no firmo.',
    'l.mustmay': '¿Tienes que, o puedes elegir?', // nieuw, nalezen // nagelezen AI 22 nov
    'w.moeten': 'tener que, deber', // nieuw, nalezen // nagelezen AI 22 nov
    'w.niethoeven': 'no tener que', // nieuw, nalezen // nagelezen AI 22 nov
    'w.nodig': 'necesario', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrijwillig': 'voluntario, por elección propia', // nieuw, nalezen // nagelezen AI 22 nov
    'w.keuze': 'la elección', // nieuw, nalezen // nagelezen AI 22 nov
    'w.regel': 'la regla, la norma', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.1': '¿Tengo que firmar esto?', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.2': 'No, no tienes que firmar.', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.3': 'Es la norma: el casco es obligatorio.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.q': '¿Tengo que hacer horas extra el sábado?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a': 'No, no hace falta. Es voluntario.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.leave': "Permisos", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': 'Días libres',
    'w.vakantiedagen': 'los días de vacaciones',
    'w.verlof': 'el permiso',
    'w.aanvragen': 'pedir, solicitar',
    'w.feestdag': 'el día festivo',
    'w.vrij': 'libre (sin trabajar)',
    'w.calamiteitenverlof': 'el permiso por emergencia',
    's.leave.1': 'Quiero pedir un permiso.',
    's.leave.2': '¿Tengo libre el día festivo?',
    's.leave.3': 'Tengo una emergencia en casa.',
    'c.leave.q': '¿Cuándo quieres irte de vacaciones?',
    'c.leave.a': 'En julio, tres semanas.',
    'l.illness': 'En casa por enfermedad',
    'w.ziekmelden': 'avisar de que no vas a trabajar por enfermedad',
    'w.betermelden': 'avisar de que ya estás bien',
    'w.bedrijfsarts': 'el médico de empresa',
    'w.ziekte': 'la enfermedad',
    'w.doorbetalen': 'seguir pagando (el sueldo)',
    'w.wachtdag': 'el día de espera (sin sueldo)',
    's.illness.1': { m: 'Llamo para avisar de que estoy enfermo.', f: 'Llamo para avisar de que estoy enferma.', x: 'Llamo para avisar de que me encuentro mal.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.illness.2': 'Tengo una cita con el médico de empresa.',
    's.illness.3': 'Mañana vuelvo a trabajar.',
    'c.illness.q': '¿Qué tienes exactamente?',
    'c.illness.a': 'Eso lo hablo con el médico de empresa.',
    'u.exploit': 'Conoce tus derechos: la explotación',
    'l.warning': 'Señales de alarma',
    'w.uitbuiting': 'la explotación',
    'w.paspoort': 'el pasaporte',
    'w.schuld': 'la deuda',
    'w.dreigen': 'amenazar',
    'w.onderbetaald': 'mal pagado (te pagan demasiado poco)',
    'w.afpakken': 'quitar',
    's.warning.1': 'Mi jefe tiene mi pasaporte.',
    's.warning.2': 'No recibo nómina.',
    's.warning.3': 'Tengo que devolver una deuda.',
    'c.warning.q': 'Dame tu pasaporte.',
    'c.warning.a': 'No, usted solo puede hacer una copia.',
    'l.gethelp': 'Buscar ayuda',
    'w.politie': 'la policía',
    'w.anoniem': 'sin tu nombre (anónimo)',
    'w.melden': 'denunciar, avisar',
    'w.hulp': 'la ayuda',
    'w.gevaar': 'el peligro',
    'w.bang': 'con miedo',
    's.gethelp.1': 'Quiero denunciar algo.',
    's.gethelp.2': '¿Se puede hacer sin dar mi nombre?',
    's.gethelp.3': 'Tengo miedo de mi jefe.',
    'c.gethelp.q': '¿En qué te puedo ayudar?',
    'c.gethelp.a': 'En mi trabajo me tratan mal.',
    'u.contact': 'Llamar y escribir al trabajo',
    'l.callin': 'Llamar al trabajo',
    'w.telefoontje': 'la llamada',
    'w.terugbellen': 'devolver la llamada',
    'w.bereikbaar': 'localizable (por teléfono)',
    'w.reden': 'la razón, el motivo',
    'w.overmorgen': 'pasado mañana',
    'w.inspreken': 'dejar un mensaje de voz',
    's.callin.1': 'Hola, soy Ali.',
    's.callin.2': 'Creo que vuelvo pasado mañana.',
    's.callin.3': '¿Me puede devolver la llamada?',
    'c.callin.q': '¿Cuándo vuelves?',
    'c.callin.a': 'Creo que el lunes.',
    'l.texting': 'Mensajes y la app del horario',
    'w.bericht': 'el mensaje',
    'w.app': 'la app',
    'w.reageren': 'responder, reaccionar',
    'w.ruilen': 'cambiar, intercambiar',
    'w.kijken': 'mirar, revisar',
    'w.groet': 'el saludo (al final de un mensaje)',
    's.texting.1': 'Llego diez minutos tarde.',
    's.texting.2': '¿Alguien quiere cambiarme el turno?',
    's.texting.3': 'Miro la app cada día.',
    'c.texting.q': '¿Puedes hacer un turno extra el sábado?',
    'c.texting.a': 'Sí, respondo enseguida en la app.',
    'u.grow': 'Diplomas y crecer',
    'l.certs': 'Certificados',
    'w.certificaat': 'el certificado',
    'w.cursus': 'el curso',
    'w.examen': 'el examen',
    'w.slagen': 'aprobar (un examen)',
    'w.heftruckcertificaat': 'el certificado de carretilla elevadora',
    'w.halen': 'sacar, conseguir (un certificado)',
    's.certs.1': 'Tengo un certificado de seguridad VCA.',
    's.certs.2': 'Quiero hacer un curso.',
    's.certs.3': '¿La empresa paga el curso?',
    'c.certs.q': '¿Tienes el certificado de carretilla elevadora?',
    'c.certs.a': 'No, pero me gustaría sacarlo.',
    'l.diploma': 'Tu diploma y la formación',
    'w.diploma': 'el diploma',
    'w.waarderen': 'pedir que evalúen (un diploma)', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.training': 'la formación, el curso',
    'w.verplicht': 'obligatorio',
    'w.werktijd': 'el tiempo de trabajo',
    'w.verderkomen': 'avanzar, progresar',
    's.diploma.1': 'Tengo un diploma de mi país.',
    's.diploma.2': '¿Esta formación es obligatoria?',
    's.diploma.3': 'Quiero avanzar en mi trabajo.',
    'c.diploma.q': '¿Quieres hacer una formación?',
    'c.diploma.a': 'Sí, ¡me encantaría! ¿Quién la paga?',
    'u.health': 'La salud',
    'l.doctor': '¿Médico o 112?',
    'w.huisarts': 'el médico de cabecera',
    'w.huisartsenpost': 'el servicio de médico de guardia (tarde, noche y fin de semana)',
    'w.apotheek': 'la farmacia',
    'w.recept': 'la receta',
    'w.spoed': 'urgente',
    'w.ambulance': 'la ambulancia',
    's.doctor.1': 'Quiero una cita con el médico de cabecera.',
    's.doctor.2': '¿Dónde está la farmacia?',
    's.doctor.3': 'Es urgente.',
    'c.doctor.q': 'Médico de guardia, ¿en qué le puedo ayudar?',
    'c.doctor.a': 'Mi hijo tiene mucha fiebre.',
    'l.insurance': 'El seguro médico',
    'w.premie': 'la cuota (el pago de cada mes)',
    'w.eigenrisico': 'la franquicia (los gastos que pagas tú primero)',
    'w.zorgtoeslag': 'la ayuda para el seguro médico',
    'w.verzekeraar': 'la aseguradora',
    'w.permaand': 'al mes',
    'w.vergoeden': 'cubrir, pagar (los gastos)',
    's.insurance.1': 'Pago la cuota cada mes.',
    's.insurance.2': '¿Esto lo cubre el seguro?',
    's.insurance.3': 'Pido la ayuda para el seguro médico.',
    'c.insurance.q': '¿Con qué aseguradora estás?',
    'c.insurance.a': 'Eso está en mi tarjeta del seguro médico.',
    'u.money': 'Dinero y cartas',
    'l.letters': 'Cartas oficiales',
    'w.brief': 'la carta',
    'w.post': 'el correo (las cartas)',
    'w.belastingdienst': 'Hacienda (Belastingdienst)',
    'w.aangifte': 'la declaración de la renta',
    'w.inkomen': 'los ingresos',
    'w.terugbetalen': 'devolver (dinero)',
    's.letters.1': 'No entiendo esta carta.',
    's.letters.2': '¿Me ayudas con esta carta?',
    's.letters.3': 'Mis ingresos han cambiado.',
    'c.letters.q': '¿Ya hiciste la declaración de la renta?',
    'c.letters.a': 'No, la hago antes del 1 de mayo.',
    'l.scams': 'Cuidado con las estafas',
    'w.pincode': 'el PIN',
    'w.link': 'el enlace',
    'w.oplichter': 'el estafador',
    'w.sms': 'el mensaje de texto (SMS)',
    'w.controleren': 'comprobar',
    'w.nep': 'falso',
    's.scams.1': 'Nunca doy mi PIN.',
    's.scams.2': 'No hago clic en el enlace.',
    's.scams.3': 'Este mensaje es falso.',
    'c.scams.q': 'Llamamos del banco. ¿Cuál es su PIN?',
    'c.scams.a': 'No se lo doy. Voy a colgar.',
    'u.travel': 'Ir al trabajo',
    'l.bike': 'En bicicleta',
    'w.fiets': 'la bicicleta',
    'w.fietspad': 'el carril bici',
    'w.licht': 'la luz',
    'w.slot': 'el candado',
    'w.stoplicht': 'el semáforo',
    'w.bel': 'el timbre',
    's.bike.1': 'Voy al trabajo en bicicleta.',
    's.bike.2': '¡Enciende la luz de la bici!', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.bike.3': 'Ponle el candado a tu bicicleta.',
    'c.bike.q': '¿Cómo vas al trabajo?',
    'c.bike.a': 'En bicicleta, veinte minutos.',
    'l.transit': 'Transporte público y gastos de viaje',
    'w.bus': 'el autobús',
    'w.trein': 'el tren',
    'w.inchecken': 'validar al subir (check in)',
    'w.uitchecken': 'validar al bajar (check out)',
    'w.bankpas': 'la tarjeta bancaria',
    'w.reiskosten': 'la compensación por gastos de viaje',
    's.transit.1': 'Valido al subir con mi tarjeta bancaria.',
    's.transit.2': 'No te olvides de validar al bajar.',
    's.transit.3': '¿Dónde está la parada de autobús?',
    'c.transit.q': '¿Vienes en tren?',
    'c.transit.a': 'No, en autobús. Para en la puerta.',
    'u.lost': 'Perder tu trabajo',
    'l.ww': 'La prestación por desempleo',
    'w.uitkering': 'la prestación (dinero del Estado)',
    'w.ww': 'la prestación por desempleo (WW)',
    'w.werkloos': 'en paro, sin trabajo',
    'w.uwv': 'el UWV (la oficina de trabajo y prestaciones)',
    'w.ontslagnemen': 'dejar tu trabajo (renunciar)',
    'w.werkzoekende': 'la persona que busca trabajo',
    's.ww.1': 'Pido la prestación por desempleo (WW) al UWV.',
    's.ww.2': 'Estoy sin trabajo.',
    's.ww.3': 'Mi contrato termina.',
    'c.ww.q': '¿Qué vas a hacer ahora que termina tu contrato?',
    'c.ww.a': 'Voy a pedir enseguida la prestación por desempleo (WW).',
    'l.newjob': 'Buscar un trabajo nuevo',
    'w.baan': 'el empleo, el trabajo',
    'w.zoeken': 'buscar',
    'w.bewaren': 'guardar',
    'w.bijwerken': 'actualizar',
    'w.gratis': 'gratis',
    'w.nooit': 'nunca',
    's.newjob.1': 'Busco un trabajo nuevo.',
    's.newjob.2': 'Guardo mis nóminas.',
    's.newjob.3': 'Buscar trabajo es gratis.',
    'c.newjob.q': '¿Te podemos llamar cuando haya trabajo?',
    'c.newjob.a': 'Sí, por favor. Aquí tiene mi número.',
    'u.build': 'En la obra',
    'l.tools': 'Herramientas y materiales',
    'w.steiger': 'el andamio',
    'w.ladder': 'la escalera de mano',
    'w.boor': 'el taladro',
    'w.hamer': 'el martillo',
    'w.beton': 'el hormigón, el concreto', // nieuw, nalezen // nagelezen AI 28 nov
    'w.kraan': 'la grúa',
    's.tools.1': 'Pásame el martillo un momento.',
    's.tools.2': 'La escalera está apoyada en el andamio.',
    's.tools.3': 'El hormigón todavía está fresco.',
    'c.tools.q': '¿Dónde está el taladro?',
    'c.tools.a': 'En la furgoneta, atrás.',
    'l.site': 'Seguridad en la obra',
    'w.valbeveiliging': 'la protección contra caídas (el arnés)',
    'w.last': 'la carga',
    'w.gat': 'el agujero',
    'w.vallen': 'caer',
    'w.risico': 'el riesgo',
    'w.weigeren': 'negarse',
    's.site.1': '¡Cuidado, carga por encima de tu cabeza!',
    's.site.2': 'Ponte la protección contra caídas.',
    's.site.3': 'Primero hago un control rápido de riesgos (LMRA).',
    'c.site.q': '¿Me ayudas un momento en el tejado?',
    'c.site.a': 'Sí, pero primero mi protección contra caídas.',
    'u.factory': 'En la fábrica',
    'l.line': 'La línea y las máquinas',
    'w.lopendeband': 'la cinta transportadora, la línea',
    'w.machine': 'la máquina',
    'w.storing': 'la avería, el fallo',
    'w.noodstop': 'la parada de emergencia',
    'w.inpakken': 'empaquetar',
    'w.productie': 'la producción',
    's.line.1': 'La cinta se ha parado.',
    's.line.2': 'Hay una avería.',
    's.line.3': 'Empaqueto los productos.',
    'c.line.q': '¿Cómo va en la línea?',
    'c.line.a': 'Bien, pero la máquina va muy lenta.',
    'l.quality': 'La calidad',
    'w.kwaliteit': 'la calidad',
    'w.product': 'el producto',
    'w.afkeuren': 'rechazar',
    'w.beschadigd': 'dañado',
    'w.etiket': 'la etiqueta',
    'w.lijst': 'la lista',
    's.quality.1': 'Este producto está dañado.',
    's.quality.2': 'La etiqueta no está bien.',
    's.quality.3': '¿Tengo que rechazar esto?',
    'c.quality.q': '¿Por qué está esto aparte?',
    'c.quality.a': 'La etiqueta está torcida.',
    'u.care': 'En los cuidados',
    'l.client': 'El cliente y los cuidados del día',
    'w.client': 'el cliente (la persona a la que cuidas)',
    'w.wassen': 'lavar',
    'w.aankleden': 'vestirse, vestir a alguien',
    'w.eten': 'la comida',
    'w.rolstoel': 'la silla de ruedas',
    'w.verpleegkundige': 'el enfermero, la enfermera',
    's.client.1': '¿Ha dormido bien?',
    's.client.2': 'Le ayudo a vestirse.',
    's.client.3': '¿Quiere comer algo más?',
    'c.client.q': '¿Me puede ayudar con el abrigo?',
    'c.client.a': 'Claro, ahora le ayudo.',
    'l.privacy': 'Privacidad y seguridad en los cuidados',
    'w.privacy': 'la privacidad',
    'w.hygiene': 'la higiene',
    'w.doorgeven': 'pasar, comunicar (información)',
    'w.geheim': 'secreto',
    'w.toestemming': 'el permiso',
    'w.gevallen': 'caído',
    's.privacy.1': 'La señora se ha caído.',
    's.privacy.2': 'Se lo comunico a la enfermera.',
    's.privacy.3': 'En casa no hablo de las personas que cuido.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.privacy.q': '¿Le puedes dar las pastillas al señor Jansen?',
    'c.privacy.a': 'No, no me está permitido. Voy a buscar a la enfermera.',
    'u.horeca': 'En la hostelería',
    'l.kitchen': 'En la cocina',
    'w.keuken': 'la cocina',
    'w.snijden': 'cortar',
    'w.pan': 'la sartén, la olla',
    'w.koelcel': 'la cámara frigorífica',
    'w.allergie': 'la alergia',
    'w.datum': 'la fecha',
    's.kitchen.1': 'Pon la carne en la cámara frigorífica.',
    's.kitchen.2': 'Corta la cebolla en trozos pequeños.',
    's.kitchen.3': '¿Esto lleva frutos secos?',
    'c.kitchen.q': 'Un cliente tiene alergia a los frutos secos.',
    'c.kitchen.a': 'Se lo pregunto al jefe de cocina.',
    'l.service': 'Atender a los clientes',
    'w.gast': 'el cliente (en un restaurante u hotel)',
    'w.bestelling': 'el pedido',
    'w.rekening': 'la cuenta',
    'w.menu': 'la carta, el menú',
    'w.afruimen': 'recoger (la mesa)',
    'w.fooi': 'la propina',
    's.service.1': '¿Qué desea tomar?',
    's.service.2': '¿Puedo tomarle el pedido?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.service.3': 'Recojo la mesa.',
    'c.service.q': '¿Nos trae la cuenta?',
    'c.service.a': 'Claro, ya voy.',
    'u.clean': 'La limpieza',
    'l.cleaning': 'Material de limpieza',
    'w.dweil': 'la fregona, el trapeador',
    'w.emmer': 'el cubo, el balde',
    'w.schoonmaakmiddel': 'el producto de limpieza',
    'w.stofzuiger': 'la aspiradora',
    'w.stoffen': 'quitar el polvo',
    'w.prullenbak': 'la papelera, el basurero',
    's.cleaning.1': '¿Dónde está el cubo?',
    's.cleaning.2': 'Voy a pasar la aspiradora en el pasillo.',
    's.cleaning.3': 'Vacía la papelera.',
    'c.cleaning.q': '¿Has terminado con los baños?',
    'c.cleaning.a': 'Casi, quedan dos.',
    'l.cleansafe': 'Limpiar de forma segura',
    'w.glad': 'resbaladizo',
    'w.bordje': 'el cartel',
    'w.mengen': 'mezclar',
    'w.damp': 'los vapores',
    'w.luchten': 'ventilar',
    'w.spoelen': 'enjuagar',
    's.cleansafe.1': '¡Cuidado, resbala!',
    's.cleansafe.2': 'Pon el cartel.',
    's.cleansafe.3': 'Nunca mezcles productos de limpieza.',
    'c.cleansafe.q': '¿Puedo pasar por aquí?',
    'c.cleansafe.a': 'Cuidado, el suelo todavía resbala.',
    'c.cv': 'Un currículum corto', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': 'Aquí un currículum es corto: 1 o 2 páginas. Escribe tus datos de contacto, tu experiencia laboral, tus estudios, tus idiomas y tus habilidades. No hace falta una foto. No tienes que escribir tu religión, tu edad ni tu estado civil. Di la verdad sobre lo que sabes hacer. Pide a alguien que revise tu neerlandés.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': '¿Me lees el currículum? ¿Está bien mi neerlandés?',
    'c.cv.s': 'Trabajaste 3 años en una fábrica en tu país, pero no tienes diploma. ¿Qué pones en tu currículum?',
    'c.cv.o1': 'Escribes el trabajo y lo que hacías allí, con sinceridad.',
    'c.cv.o2': 'No escribes nada, porque no tienes diploma.',
    'c.cv.o3': 'Escribes que tienes un diploma, para quedar mejor.',
    'c.cv.w': 'La experiencia laboral cuenta, también la del extranjero. Decir la verdad es importante: las empresas pueden comprobarlo.',
    'c.interview': 'La entrevista de trabajo',
    'c.interview.b': 'Llega a tiempo: de 5 a 10 minutos antes. Saluda con educación y mira a la persona. Cuenta en pocas palabras lo que sabes hacer. Hacer tú también preguntas es normal y positivo, por ejemplo sobre las horas, el trabajo o la formación. Al final puedes preguntar cuándo vas a saber algo. Está bien decir que todavía estás aprendiendo neerlandés. Una empresa no puede preguntarte por tu religión, un embarazo o tu salud. No tienes que responder: puedes decir con educación que prefieres no responder.',
    'c.interview.p': '¿Puedo preguntar yo también algo? ¿Cuántas horas a la semana es el trabajo?',
    'c.interview.s': 'Al final de la entrevista, la empresa pregunta: “Heb je nog vragen?”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.interview.o1': 'Haces una pregunta sobre las horas o la formación.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Dices que no, porque hacer preguntas no es educado.',
    'c.interview.o3': 'Hablas más de ti, para mostrar que trabajas bien.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'Las preguntas muestran que te interesa el trabajo. Aquí las empresas muchas veces las esperan.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Pide tu contrato por escrito',
    'c.findwork.b': 'Pide siempre un contrato por escrito y una copia para ti. Léelo antes de firmar, o pide ayuda a alguien de confianza. Una agencia de trabajo temporal (uitzendbureau) no te puede pedir dinero por encontrarte un trabajo. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.findwork.p': '¿Puedo leer primero el contrato?',
    'c.findwork.s': 'Una empresa nueva te dice: “Firma aquí ahora. Puedes leerlo después”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.findwork.o1': 'Pides tiempo para leerlo, o una copia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': 'Firmas rápido, para no perder el trabajo.',
    'c.findwork.o3': 'Firmas, y después pides una copia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.w': 'Tu contrato dice cuánto ganas y cuáles son tus derechos. Una buena empresa te da tiempo para leerlo. Puedes preguntar todo lo que no entiendas.',
    'c.contract': 'El periodo de prueba y el trabajo a llamada',
    'c.contract.b': 'El periodo de prueba (proeftijd) tiene que estar por escrito. No está permitido en un contrato de 6 meses o menos. En un contrato más largo, pero de menos de 2 años, es como máximo 1 mes. En un contrato de 2 años o más, o en un contrato fijo, es como máximo 2 meses. ¿Trabajas a llamada (oproepkracht)? Normalmente, tu empresa te tiene que llamar al menos 4 días antes. Si es más tarde, no tienes que ir. Un cao puede acortar esos 4 días, pero no a menos de 1 día. Si te cancelan el trabajo más tarde, aun así te lo pagan. Si te llaman para menos de 3 horas de trabajo, normalmente te pagan 3 horas. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.', // nalezen: feit gelijk getrokken // nagelezen AI 22 nov
    'c.contract.p': '¿Está el periodo de prueba en mi contrato?',
    'c.contract.s': 'Tu contrato es de 3 meses. Dice: “Proeftijd: 1 maand”. ¿Qué haces?',
    'c.contract.o1': 'Preguntas por ello: este periodo de prueba no vale.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.contract.o2': 'Nada. Todos los contratos tienen periodo de prueba.',
    'c.contract.o3': 'Firmas y nunca preguntas, porque el jefe sabe más.',
    'c.contract.w': 'Un periodo de prueba en un contrato de 6 meses o menos no vale. Preguntar con calma es normal. Si la respuesta no es clara, pide consejo al sindicato o al Juridisch Loket.',
    'c.agency': 'Tu agencia es tu empleador',
    'c.agency.b': 'Si trabajas a través de una agencia de trabajo temporal (uitzendbureau), la agencia es tu empleador, no la empresa donde trabajas. Tu contrato y tu sueldo vienen de la agencia, y hay un cao para trabajadores temporales (uitzend-cao). Tienes derecho al mismo sueldo que los trabajadores de la empresa que hacen el mismo trabajo. También recibes la paga de vacaciones (vakantiegeld) y vas sumando días libres. Lleva tu propia lista de las horas que trabajaste, y compruébalas en tu nómina. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.agency.x': '¿Una empresa de otro país te ha enviado aquí por un tiempo? Entonces trabajas aquí en desplazamiento (gedetacheerd). Pide a tu empleador el certificado A1: muestra dónde tienes seguro. Aquí recibes al menos el salario mínimo neerlandés.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'En mi nómina hay muy pocas horas.',
    'c.agency.s': 'Tu nómina dice 32 horas, pero trabajaste 38. ¿Qué haces?',
    'c.agency.o1': 'Enseñas tu lista de horas a la agencia y pides que lo corrijan.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': 'No dices nada, porque son solo 6 horas.',
    'c.agency.o3': 'Pides al jefe de la empresa donde trabajas que te pague las 6 horas.',
    'c.agency.w': 'La agencia te paga, así que la agencia tiene que corregir el error. Tu propia lista de fechas y horas ayuda. Preguntar es tu derecho.',
    'c.bsn': 'Tu BSN: guárdalo bien',
    'c.bsn.b': 'Recibes un BSN (burgerservicenummer) cuando te inscribes en el ayuntamiento (gemeente). ¿Estás aquí solo poco tiempo? Entonces te inscribes en una oficina RNI. Necesitas tu BSN para trabajar, para los impuestos, para el seguro médico y para una cuenta bancaria. Tu empresa necesita tu documento de identidad y tu BSN. No des tu BSN ni una copia de tu documento a cualquiera. Primero pregunta para qué lo necesitan. ¿Te mudas? Registra tu nueva dirección en el ayuntamiento en un plazo de 5 días. DigiD es tu acceso a las páginas web del gobierno: nunca se lo des a otra persona. ¿Vives o trabajas aquí? Entonces normalmente tienes que tener un seguro médico neerlandés (zorgverzekering). Contrátalo pronto. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.bsn.p': '¿Para qué necesita mi BSN?',
    'c.bsn.s': 'Un desconocido te ofrece un trabajo por WhatsApp. Te pide una foto de tu pasaporte y tus datos de DigiD. ¿Qué haces?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o1': 'Nunca das tus datos de DigiD. Compruebas quién es.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': 'Lo envías todo rápido para conseguir el trabajo.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o3': 'Solo envías la foto del pasaporte.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': 'Con tu DigiD o una copia de tu documento, otras personas pueden usar tu nombre, por ejemplo para pedir préstamos o ayudas. Una empresa de verdad necesita tu documento y tu BSN, pero nunca tus datos de DigiD.',
    'c.housing': 'Vivienda de tu empresa',
    'c.housing.b': '¿Tu empresa o tu agencia te busca la vivienda? Entonces el contrato de alquiler tiene que ir aparte de tu contrato de trabajo. Pide un contrato de alquiler por escrito y un comprobante de lo que pagas. El alquiler solo te lo pueden descontar del sueldo si lo acordaste por escrito, y dentro de los límites de la ley: compruébalo en tu nómina. La fianza (borg) es como máximo 2 meses del alquiler básico. Te la devuelven cuando te vas, menos los daños reales. Inscríbete con tu dirección en el ayuntamiento (gemeente). ¿Vivienda insegura, amenazas o gastos injustos? Denúncialo ante el ayuntamiento (meldpunt), y pide consejo gratis al Juridisch Loket o a un servicio de asesoría de vivienda. Para un problema con el precio del alquiler o los gastos de servicios, existe la Huurcommissie. ¿Se termina tu trabajo? Pide consejo antes de dejar tu casa. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.',
    'c.housing.p': '¿Me puede dar un comprobante de que he pagado?',
    'c.housing.s': 'Se termina tu trabajo. La agencia dice: “Mañana tienes que dejar la casa”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.housing.o1': 'Primero pides consejo al Juridisch Loket.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.housing.o2': 'Te vas enseguida y te olvidas de la fianza.',
    'c.housing.o3': 'Te quedas y dejas de responder a la agencia.',
    'c.housing.w': 'Tu contrato de alquiler tiene sus propias normas, aparte de tu trabajo. Un consejo gratis te ayuda a conocer tus derechos, por ejemplo sobre cuándo tienes que irte y sobre tu fianza.',
    'c.payslip': 'Revisa tu nómina',
    'c.payslip.b': 'El bruto es tu sueldo antes de impuestos. El neto es lo que recibes en tu cuenta bancaria: el bruto menos los impuestos y las cotizaciones (loonheffing). Tu empresa te tiene que dar una nómina (loonstrook). Revisa las horas y el sueldo en cada nómina, y apunta las horas que trabajas. ¿Tienes dos trabajos? Usa la deducción fiscal (loonheffingskorting) solo en una empresa. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.payslip.p': 'He trabajado más horas. ¿Lo puedes revisar?',
    'c.payslip.s': 'Tu nómina tiene menos horas de las que trabajaste. ¿Qué haces?',
    'c.payslip.o1': 'Enseñas tus notas y pides a tu encargado que lo revise.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': 'No dices nada, porque no quieres problemas.',
    'c.payslip.o3': 'Esperas un mes: en la próxima nómina estará bien.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': 'Los errores en una nómina pasan. Preguntar es normal y es tu derecho. Tus propias notas de fechas y horas ayudan mucho.',
    'c.extra': 'La paga de vacaciones y el salario mínimo',
    'c.extra.b': 'Recibes una paga de vacaciones (vakantiegeld): como mínimo el 8 % de tu sueldo bruto. La mayoría de las empresas la pagan una vez al año, en mayo o junio. Tu sueldo nunca puede ser más bajo que el salario mínimo legal (minimumloon); para los trabajadores menores de 21 años es más bajo. La cantidad cambia cada año: mírala en rijksoverheid.nl. Un cao muchas veces da un plus por las horas extra o el trabajo de noche. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.extra.p': '¿Cuándo recibo mi paga de vacaciones?',
    'c.extra.s': 'Un compañero dice: “En mayo el jefe te da dinero extra”. ¿Qué es?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.extra.o1': 'Paga de vacaciones: al menos el 8 % de tu sueldo bruto.',
    'c.extra.o2': 'Un regalo, solo para los mejores trabajadores.',
    'c.extra.o3': 'Un 13.º mes: un sueldo mensual extra, para todos.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': 'La paga de vacaciones es tu derecho, no un regalo. La vas sumando con cada hora que trabajas. Si dejas tu trabajo antes, la recibes con tu último sueldo.',
    'c.phone': 'Tu teléfono en el trabajo',
    'c.phone.b': 'En muchos trabajos no se permite el teléfono durante el trabajo, sobre todo cerca de máquinas y carretillas elevadoras, o en la producción de alimentos. Puede ser peligroso o poco higiénico. Usa el teléfono en tu pausa. ¿Esperas una llamada urgente de tu familia? Díselo antes a tu encargado. No hagas fotos ni vídeos en el trabajo sin permiso: piensa en la privacidad de tus compañeros y en los secretos de la empresa. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.phone.p': 'Mi hijo está enfermo. ¿Puedo dejar el teléfono encendido?',
    'c.phone.s': 'Tu madre está en el hospital y puede que llame hoy. En el lugar de trabajo no se permiten teléfonos. ¿Qué haces?',
    'c.phone.o1': 'Se lo dices a tu encargado y preguntas cómo te pueden localizar.',
    'c.phone.o2': 'Llevas el teléfono en el bolsillo y respondes a escondidas en la máquina.',
    'c.phone.o3': 'Te quedas en casa sin decir a nadie por qué.',
    'c.phone.w': 'Los encargados normalmente entienden una emergencia familiar. Si lo saben, pueden buscar una solución segura, por ejemplo una hora fija para mirar tu teléfono.',
    'c.smoking': 'Fumar solo fuera',
    'c.smoking.b': 'En los Países Bajos, la ley prohíbe fumar dentro de un lugar de trabajo. Esto vale también para los cigarrillos electrónicos (vapeadores). Desde 2022, ya no se permiten salas de fumadores dentro de las empresas. Fuma solo fuera, en el lugar que permite tu empresa, y normalmente solo en tu pausa. Las pausas extra para fumar no son un derecho: acuérdalas con tu encargado. Nunca fumes cerca de cosas que se queman fácilmente, como combustible o cajas en un almacén. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.smoking.p': '¿Puedo fumar fuera en mi pausa?',
    'c.smoking.s': 'Hace frío y llueve. Un compañero dice: “Fuma en el almacén, nadie lo ve”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.smoking.o1': 'Dices que no, y fumas fuera en tu pausa.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Fumas rápido en el almacén, solo esta vez.',
    'c.smoking.o3': 'Mejor usas tu vapeador dentro, porque eso sí está permitido.',
    'c.smoking.w': 'Fumar dentro va contra la ley y puede provocar un incendio. Un vapeador dentro tampoco está permitido. Cumplir la norma protege a todos.',
    'c.clock': 'Ficha tú',
    'c.clock.b': 'Ficha tú al entrar y al salir, en el momento en que de verdad empiezas y terminas de trabajar. Nunca fiches por un compañero, y nunca dejes que otra persona use tu tarjeta. Eso cuenta como fraude y puede llevar al despido. ¿Vas a llegar tarde? Llama antes de que empiece tu turno. Comprueba que tus horas fichadas coinciden con tu nómina. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.clock.p': 'Se me olvidó fichar al salir. ¿Lo puedes corregir?',
    'c.clock.s': 'Un compañero te da su tarjeta: “Fíchame tú, llego 20 minutos tarde”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.clock.o1': 'Dices que no, y le dices que llame al encargado.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': 'Lo haces solo una vez, porque es tu amigo.',
    'c.clock.o3': 'Lo fichas y se lo dices al encargado más tarde.',
    'c.clock.w': 'Fichar por otra persona cuenta como fraude, para los dos. Decir que no protege a tu compañero y tu propio trabajo.',
    'c.hygiene': 'Cabeza despejada, manos limpias',
    'c.hygiene.b': 'El alcohol y las drogas en el trabajo, o ir a trabajar después de tomarlos, están prohibidos en casi todas las empresas. Es muy peligroso cerca de máquinas y carretillas elevadoras, y puede llevar al despido. ¿Un medicamento te da sueño o mareos? Díselo a tu encargado, así puedes hacer un trabajo seguro. No tienes que decir qué medicamento es. En la producción de alimentos, las normas de higiene son estrictas: lávate las manos, lleva ropa de trabajo limpia, redecilla si hace falta y nada de joyas. ¿Vómitos o diarrea? Avisa antes de empezar. Mantén ordenado tu lugar de trabajo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.hygiene.p': 'Tomo un medicamento. Me da sueño.',
    'c.hygiene.s': 'Tu médico te da un medicamento que te da sueño. Mañana tienes que conducir una carretilla elevadora. ¿Qué haces?',
    'c.hygiene.o1': 'Se lo dices a tu encargado antes de empezar.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': 'No dices nada y conduces muy despacio.',
    'c.hygiene.o3': 'Dejas de tomar el medicamento sin preguntar a tu médico.',
    'c.hygiene.w': 'Tu encargado no necesita saber qué medicamento es, solo que ahora no puedes conducir ni trabajar con máquinas. Así se protege tu seguridad y la de tus compañeros.',
    'c.smalltalk': 'Charlar en la pausa',
    'c.smalltalk.b': 'Las charlas cortas en la pausa son normales. Te ayudan a sentirte parte del equipo. En la mesa del café o de la comida hay sitio para ti. Temas fáciles son el fin de semana, el tiempo, el deporte y las vacaciones. Las preguntas sobre el sueldo, la religión o la vida privada de alguien muchas veces son demasiado personales al principio. En su cumpleaños, la gente muchas veces trae algo para el equipo (trakteren), como una tarta. ¿Es el cumpleaños de un compañero? Dile “Gefeliciteerd!”.',
    'c.smalltalk.p': '¡Feliz cumpleaños!',
    'c.smalltalk.s': 'En la pausa, tus compañeros se sientan juntos en una mesa. Todavía no los conoces bien. ¿Qué haces?',
    'c.smalltalk.o1': 'Preguntas “Mag ik bij jullie zitten?” y te unes con una charla corta.',
    'c.smalltalk.o2': 'Cada día comes fuera, lejos de los demás, para no molestar.',
    'c.smalltalk.o3': 'Preguntas a cada compañero cuánto gana.',
    'c.smalltalk.w': 'Sentarte en la mesa con ellos está bien visto y te ayuda a conocer al equipo. Una pregunta sencilla como “Hoe was je weekend?” es un buen comienzo.',
    'c.mistakes': 'Los errores son normales',
    'c.mistakes.b': 'Todo el mundo comete errores en el trabajo. Dilo rápido, para que se pueda arreglar: “Sorry, ik heb een fout gemaakt.” Esconder un error se ve mucho peor que el error mismo. Los comentarios son sobre el trabajo, no sobre ti como persona. ¿Te han hecho un cumplido? Simplemente da las gracias. ¿No está claro qué puedes hacer mejor? Pregunta: “Kun je het uitleggen?”',
    'c.mistakes.p': 'Perdón, he cometido un error. ¿Cómo lo puedo arreglar?',
    'c.mistakes.s': 'Pusiste 20 cajas en el palé equivocado. Nadie lo ha visto todavía. ¿Qué haces?',
    'c.mistakes.o1': 'Se lo dices a tu encargado y ayudas a arreglarlo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': 'No dices nada y esperas que nadie se dé cuenta.',
    'c.mistakes.o3': 'Dices que lo hizo un compañero.',
    'c.mistakes.w': 'Un error que se cuenta pronto es fácil de arreglar. Ser honesto crea confianza, y eso cuenta más que no cometer nunca un error.',
    'c.respect': 'Respeto para todos',
    'c.respect.b': 'En el trabajo, todos son iguales y a todos se les trata con respeto, sea cual sea su género, origen, religión u orientación sexual. Tú decides sobre el contacto físico. Dar la mano es lo normal. Pero también puedes saludar de otra forma educada, como con un gesto de la cabeza y una sonrisa. Luego explícalo brevemente. No se aceptan las bromas sobre el origen o la religión de alguien, las amenazas, el acoso (pesten) ni el comportamiento sexual no deseado. Puedes contarlo a tu encargado, o a una persona de confianza (vertrouwenspersoon) si tu empresa tiene una.',
    'c.respect.p': 'Prefiero no dar la mano, pero te saludo con gusto.',
    'c.respect.s': 'Un compañero hace muchas veces bromas sobre tu religión. Le pediste que parara, pero sigue. ¿Qué haces?',
    'c.respect.o1': 'Se lo cuentas a tu encargado o a la vertrouwenspersoon.',
    'c.respect.o2': 'Te ríes con él, para no tener problemas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': 'Tú también haces bromas sobre su origen.',
    'c.respect.w': 'Esas bromas no se aceptan en el trabajo. Contarlo es normal: la empresa tiene que mantener el lugar de trabajo seguro para todos.',
    'c.health': 'Pausas y horas de trabajo',
    'c.health.b': 'La ley protege tu salud. ¿Trabajas más de 5,5 horas? Entonces tienes como mínimo 30 minutos de pausa (pueden ser 2 pausas de 15 minutos). ¿Más de 10 horas? Entonces como mínimo 45 minutos. Un cao puede tener normas de pausas un poco diferentes. Puedes trabajar como máximo 12 horas en un turno y 60 horas en una semana. ¿Tienes menos de 18 años? Entonces el máximo de horas que puedes trabajar es más bajo. Tu empresa te tiene que dar gratis el equipo de protección, como zapatos de seguridad o guantes. ¿Trabajo peligroso o un sueldo demasiado bajo? Puedes denunciarlo ante la Nederlandse Arbeidsinspectie, también sin dar tu nombre. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.health.p': 'Todavía no he tenido pausa.',
    'c.health.s': 'Has trabajado 6 horas sin pausa. Tu encargado te pide que sigas. ¿Qué haces?',
    'c.health.o1': 'Dices que ahora necesitas tu pausa.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o2': 'Sigues, y más tarde haces una pausa más larga.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o3': 'Dejas el trabajo y te vas a casa sin decir nada.',
    'c.health.w': 'Cuando trabajas más de 5,5 horas, la pausa es la ley, no un favor. Descansar también te ayuda a trabajar de forma segura.',
    'c.rights': 'Discriminación y despido',
    'c.rights.b': 'La discriminación en el trabajo está prohibida, por ejemplo por tu origen, tu religión o tu género. Tu empresa no te puede despedir así como así: normalmente necesita el permiso del UWV o de un juez, o tu acuerdo. (En el periodo de prueba o al final de un contrato temporal hay otras normas.) No firmes ningún papel sobre tu despido que no entiendas. ¿Firmaste un acuerdo para terminar tu trabajo (vaststellingsovereenkomst)? Entonces normalmente todavía puedes anularlo por escrito en un plazo de 14 días. Pide ayuda primero. Ve al sindicato (por ejemplo FNV), a una oficina contra la discriminación o al Juridisch Loket. El Juridisch Loket da consejo legal gratis. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.',
    'c.rights.p': 'Primero quiero pedir consejo.',
    'c.rights.s': 'Tu jefe te da un papel: “Firma hoy, así te vas de mutuo acuerdo.” No lo entiendes bien. ¿Qué haces?',
    'c.rights.o1': 'Todavía no firmas. Primero pides consejo.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': 'Lo firmas, porque el jefe dice que está bien.',
    'c.rights.o3': 'Guardas el papel y nunca hablas de ello.',
    'c.rights.w': '¿Hay algo mal en el papel? Entonces puedes perder derechos, por ejemplo a la prestación por desempleo (WW). Pedir tiempo para buscar consejo es normal y está permitido.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay': 'Moet, hoeft niet, mag niet', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.b': 'En neerlandés, lo contrario de “moeten” es “niet hoeven”. “Je moet tekenen” significa: no tienes elección. “Je hoeft niet te tekenen” significa: puedes elegir. “Je mag niet tekenen” significa: está prohibido. Cuidado: en inglés, “must not” significa “mag niet”. En español, “no tienes que” significa “hoeft niet”. ¿Tienes dudas? Pregunta.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.p': '¿Tengo que hacerlo, o puedo elegir?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.s': 'Tu jefe de equipo dice: “Je hoeft zaterdag niet te komen”. ¿Qué quiere decir?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.mustmay.o1': 'No tienes que venir el sábado. Puedes elegir.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o2': 'No puedes venir el sábado: está prohibido.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o3': 'Tienes que venir el sábado.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.w': '“Niet hoeven” significa que no es obligatorio: puedes elegir. “Niet mogen” significaría que está prohibido.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave': 'Vacaciones y permiso por emergencia',
    'c.leave.b': 'Por ley tienes días libres pagados: como mínimo 4 veces los días que trabajas por semana. ¿Trabajas a jornada completa, 5 días a la semana? Entonces como mínimo 20 días al año. Un cao puede dar más. Pide las vacaciones a tiempo y por escrito. ¿Una emergencia de repente, como un accidente o una enfermedad en tu familia? Entonces puedes tener un permiso corto pagado (calamiteitenverlof). Avisa enseguida a tu empresa. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.leave.p': 'Me gustaría pedir vacaciones para julio.',
    'c.leave.s': 'En verano quieres visitar a tu familia en el extranjero durante tres semanas. ¿Qué haces?',
    'c.leave.o1': 'Pides las vacaciones a tu empresa con tiempo, por escrito.',
    'c.leave.o2': 'Simplemente te vas, y se lo dices a tu jefe cuando vuelves.',
    'c.leave.o3': 'Pides a un compañero que se lo diga al jefe el día antes.',
    'c.leave.w': 'Normalmente tu empresa tiene que decir que sí. Solo puede decir que no por un motivo muy importante, y entonces por escrito en un plazo de 2 semanas. Pedirlo pronto te da más posibilidades de un sí.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.illness': 'Tus derechos durante una enfermedad',
    'c.illness.b': 'Durante una enfermedad, tu empresa te tiene que pagar como mínimo el 70 % de tu sueldo, hasta 2 años. Un cao muchas veces da más. Puede haber hasta 2 días de espera (wachtdagen) sin sueldo, pero solo si lo dice tu contrato o tu cao. Tu jefe no te puede preguntar qué enfermedad tienes. De tu salud y tu trabajo hablas con el médico de empresa (bedrijfsarts). Llama a tu empresa cuando ya estés bien (betermelden). El primer año recibes como mínimo el salario mínimo. Un contrato temporal termina en su fecha de fin, también durante una enfermedad. ¿Trabajas a través de una agencia? Si tu contrato tiene una cláusula de agencia (uitzendbeding), puede terminar si tienes una enfermedad. Entonces pregunta al UWV por la Ziektewet, o pregunta a un sindicato. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.illness.x': '¿Estás de baja y quieres ir a tu país? Pregunta primero a tu empleador o a la agencia. Sin permiso, pueden dejar de pagarte el sueldo. Da tu dirección allí y contesta el teléfono.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': 'Ya estoy bien. Mañana vengo a trabajar.',
    'c.illness.s': { m: 'Llevas una semana enfermo. Tu empresa te manda al médico de empresa. ¿Qué haces?', f: 'Llevas una semana enferma. Tu empresa te manda al médico de empresa. ¿Qué haces?', x: 'Llevas una semana de baja. Tu empresa te manda al médico de empresa. ¿Qué haces?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': 'Vas, y hablas sobre tu salud y tu trabajo.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': 'No vas: tienes tu propio médico.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o3': { m: 'Vuelves a trabajar aunque todavía estás enfermo.', f: 'Vuelves a trabajar aunque todavía estás enferma.', x: 'Vuelves a trabajar aunque todavía no te has recuperado.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': 'El médico de empresa te ayuda a volver al trabajo de forma sana. El médico no le cuenta a tu jefe tus datos médicos, solo qué trabajo puedes hacer.',
    'c.warning': 'Señales de explotación',
    'c.warning.b': 'Presta atención a estas señales. Tu empresa se queda con tu pasaporte o tu documento de identidad. Eso no está permitido: tu documento lo guardas tú. La empresa solo puede hacer una copia. Recibes mucho menos sueldo de lo acordado, o no recibes nómina. Tienes que pagar una deuda grande a la empresa o a la agencia. Tienes que trabajar muchísimas horas, sin poder elegir. Alguien te amenaza, o usa tu vivienda para presionarte. Esto no es normal y no está permitido. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.',
    'c.warning.p': 'Quiero que me devuelvan mi pasaporte.',
    'c.warning.s': 'El primer día, la agencia dice: “Nos quedamos con tu pasaporte, por seguridad”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.warning.o1': 'Lo guardas tú. Pueden hacer una copia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': 'Lo das, porque la agencia conoce las normas.',
    'c.warning.o3': 'Lo das, pero antes le haces una foto.',
    'c.warning.w': 'Tu pasaporte es tuyo. Quedarse con él es una forma de controlar a los trabajadores. Una empresa solo necesita una copia para sus archivos.',
    'c.gethelp': 'Dónde encontrar ayuda',
    'c.gethelp.b': '¿Ves señales de explotación, en ti o en otra persona? Busca ayuda. Puedes denunciarlo ante la Nederlandse Arbeidsinspectie, también de forma anónima, o ante la policía. Meld Misdaad Anoniem: 0800-7000. Consejo legal gratis: el Juridisch Loket. ¿En peligro? Llama al 112. Todas las personas que trabajan en los Países Bajos pueden recibir ayuda, también los migrantes. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.',
    'c.gethelp.p': 'Necesito ayuda. Me están explotando.',
    'c.gethelp.s': 'Un amigo trabaja 14 horas al día y casi no le pagan. Tiene miedo de su jefe. ¿Qué puedes hacer?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': 'Le ayudas a contactar con la Arbeidsinspectie o el Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': 'Le dices que eso es normal para los trabajadores nuevos.',
    'c.gethelp.o3': 'Le dices que espere hasta que termine su contrato y luego se vaya.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'Hay ayuda para todas las personas que trabajan en los Países Bajos. También se puede denunciar sin dar nombres.',
    'c.callin': 'Llamar a tu encargado',
    'c.callin.b': 'Cuando llamas a tu encargado, di tu nombre, el motivo y cuándo crees que vuelves. ¿Enfermedad? Solo tienes que decir que no puedes ir por enfermedad, no qué enfermedad tienes. Llama: no mandes solo un mensaje, a no ser que tu empresa diga que un mensaje está bien. ¿No contestan? Deja un mensaje de voz e inténtalo otra vez. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.callin.p': 'Hola, soy Ali. Hoy no puedo ir.',
    'c.callin.s': 'Tu hijo está enfermo y no puedes ir a trabajar. Tu empresa quiere que llames. ¿Qué haces?',
    'c.callin.o1': 'Llamas a tu encargado antes de tu turno.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.callin.o2': 'Mandas un mensaje corto al empezar tu turno.',
    'c.callin.o3': 'Pides a tu vecino que llame por ti.',
    'c.callin.w': 'Una llamada es clara y rápida, y tu encargado puede hacer preguntas. Decir cuándo crees que vuelves le ayuda a organizarse. Di también tu nombre y el motivo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'Mensajes al trabajo: cortos y educados',
    'c.texting.b': 'Escribe mensajes cortos y educados al trabajo. Di quién eres y qué pasa, y termina con un saludo. Por ejemplo: “Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Mira a menudo tu horario (rooster) en la app. Responde a tiempo a las peticiones de turnos. Para cambiar un turno, primero tiene que estar de acuerdo tu encargado o el planificador, así que pregunta: “Mag ik mijn dienst ruilen?” Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.texting.p': 'Hola, Mark, llego 10 minutos tarde. ¡Perdón! Saludos, Ali',
    'c.texting.s': 'Vas a llegar 10 minutos tarde. ¿Qué mensaje a tu encargado es el mejor?',
    'c.texting.o1': '“Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '“Sorry, ik ben er zo!” (sin tu nombre, sin la hora).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting.o3': 'Un mensaje de voz de tres minutos sobre el tráfico.',
    'c.texting.w': 'Un buen mensaje dice quién eres y qué pasa, en pocas palabras. Así tu encargado lo sabe enseguida.',
    'c.certs': 'Los certificados te ayudan',
    'c.certs.b': 'En la construcción, la industria y el trabajo temporal muchas veces necesitas un certificado VCA (seguridad). Para conducir una carretilla elevadora normalmente necesitas un certificado de carretilla (heftruckcertificaat). Pregunta a tu empresa si paga el curso y el examen.',
    'c.certs.p': '¿Puedo hacer aquí un curso VCA?',
    'c.certs.s': 'Para un trabajo piden un certificado VCA. Todavía no lo tienes. ¿Qué haces?',
    'c.certs.o1': 'Pides a la empresa o a la agencia que te ayude a conseguirlo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': 'No te presentas, porque nunca vas a conseguir el trabajo.',
    'c.certs.o3': 'Dices que lo tienes, y esperas que nadie lo compruebe.',
    'c.certs.w': 'Muchas empresas y agencias ayudan con el VCA. Preguntar muestra que quieres aprender.',
    'c.diploma': 'Tu diploma cuenta',
    'c.diploma.b': '¿Tienes un diploma de otro país? Puedes hacerlo valorar en IDW (Internationale Diplomawaardering). Así las empresas pueden ver lo que vale aquí. ¿Tu trabajo exige una formación? Entonces la tiene que pagar tu empresa, y cuenta como tiempo de trabajo. Pregunta a tu encargado por los cursos. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.diploma.p': '¿Hay cursos para mí?',
    'c.diploma.s': 'Tu empresa dice que tienes que hacer una formación de seguridad obligatoria el sábado, sin sueldo. ¿Qué es verdad?',
    'c.diploma.o1': 'La paga la empresa, y es tiempo de trabajo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': 'La formación siempre es en tu tiempo libre.',
    'c.diploma.o3': 'Tienes que pagar tú la formación.',
    'c.diploma.w': 'Si una formación es obligatoria para tu trabajo, la paga la empresa y cuenta como tiempo de trabajo. Si no está claro, pide consejo.',
    'c.doctor': '¿Médico o 112?',
    'c.doctor.b': 'Inscríbete con un médico de cabecera (huisarts) cerca de tu casa. ¿Necesitas atención urgente por la tarde, por la noche o el fin de semana? Llama a la huisartsenpost. Llama al 112 solo en una emergencia: peligro de muerte, incendio o un delito que está pasando ahora. Los medicamentos los recibes en la farmacia (apotheek).', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.doctor.p': 'Quiero inscribirme con el médico de cabecera.',
    'c.doctor.s': 'Es sábado por la noche. Tu hijo tiene mucha fiebre, pero está despierto y respira normal. ¿Qué haces?',
    'c.doctor.o1': 'Llamas a la huisartsenpost.',
    'c.doctor.o2': 'Llamas al 112.',
    'c.doctor.o3': 'Esperas hasta el lunes y no haces nada.',
    'c.doctor.w': 'La huisartsenpost ayuda con la atención urgente fuera del horario de consulta. El 112 es para emergencias: peligro de muerte, incendio o un delito que está pasando ahora.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.insurance': 'El seguro médico',
    'c.insurance.b': 'Si vives o trabajas en los Países Bajos, normalmente es obligatorio tener un seguro médico básico. Pagas una cuota cada mes. Cada año hay una franquicia (eigen risico): los primeros gastos los pagas tú. La cantidad cambia: pregúntala a tu aseguradora. Las visitas al médico de cabecera (huisarts) no cuentan para la franquicia. Con ingresos bajos puedes recibir una ayuda para el seguro médico (zorgtoeslag). Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.insurance.p': 'Necesito un seguro médico. ¿Me puede ayudar?',
    'c.insurance.s': 'Empezaste a trabajar aquí hace dos semanas y todavía no tienes seguro médico. ¿Qué haces?',
    'c.insurance.o1': 'Contratas pronto un seguro médico.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': 'Esperas: el seguro de tu país es suficiente.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': 'Usas la tarjeta del seguro de un amigo.',
    'c.insurance.w': 'Sin seguro, un médico o un hospital puede costar mucho, y te pueden poner una multa. Contratarlo pronto te protege. Tu empresa o tu agencia te puede ayudar.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters': 'No ignores las cartas',
    'c.letters.b': 'No ignores las cartas de la Belastingdienst, del ayuntamiento (gemeente) o del UWV. Pide a alguien de confianza que te ayude a leerlas. La declaración de la renta (aangifte) del año anterior normalmente se tiene que hacer antes del 1 de mayo. Puedes pedir más tiempo. Las ayudas (toeslagen) como la zorgtoeslag y la huurtoeslag dependen de tus ingresos. Si recibes demasiado, lo tienes que devolver, así que mantén actualizados los datos de tus ingresos. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.letters.p': 'He recibido una carta. ¿Me puedes ayudar?',
    'c.letters.s': 'Recibes una carta de la Belastingdienst. No la entiendes. ¿Qué haces?',
    'c.letters.o1': 'Pides a alguien de confianza que te ayude a leerla.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': 'La guardas en un cajón y esperas.',
    'c.letters.o3': 'La tiras, porque seguramente es publicidad.',
    'c.letters.w': 'Las cartas oficiales muchas veces tienen un plazo. Si respondes a tiempo, los problemas normalmente son más fáciles de resolver.',
    'c.scams': 'Cuidado con las estafas',
    'c.scams.b': 'Tu banco nunca te pide tus códigos ni tu PIN por teléfono, SMS o correo electrónico. No hagas clic en enlaces de mensajes que no esperabas. ¿Alguien te presiona para pagar rápido? Para y compruébalo primero. Llama a tu banco al número oficial, por ejemplo el número de tu tarjeta bancaria o de su página web.',
    'c.scams.p': 'Llamo yo al banco.',
    'c.scams.s': 'Recibes un SMS: “Su cuenta bancaria va a ser bloqueada. Haga clic ahora en este enlace”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.scams.o1': 'No haces clic. Llamas a tu banco al número oficial.',
    'c.scams.o2': 'Haces clic rápido, para que no bloqueen tu cuenta.',
    'c.scams.o3': 'Respondes al SMS y preguntas si es verdad.',
    'c.scams.w': 'Los estafadores usan la presión y enlaces falsos. Tu banco nunca te pide tus códigos con un enlace o un mensaje.',
    'c.bike': 'Ir en bicicleta al trabajo',
    'c.bike.b': 'Enciende las luces cuando está oscuro. Ve por el carril bici y respeta los semáforos y las señales. Ponle siempre el candado a tu bicicleta. Está prohibido llevar el teléfono en la mano mientras vas en bicicleta.',
    'c.bike.p': '¿Dónde puedo dejar mi bicicleta?',
    'c.bike.s': 'Es de noche y vas en bicicleta a tu turno de noche. Suena tu teléfono. ¿Qué haces?',
    'c.bike.o1': 'Paras en un lugar seguro antes de responder.',
    'c.bike.o2': 'Respondes con el teléfono en la mano mientras vas en bicicleta.',
    'c.bike.o3': 'Sigues y miras rápido el teléfono.',
    'c.bike.w': 'Llevar el teléfono en la mano en bicicleta está prohibido y es peligroso. Parar primero solo lleva un momento.',
    'c.transit': 'Autobús, tren y gastos de viaje',
    'c.transit.b': 'En la mayoría de los autobuses y trenes puedes pagar con tu tarjeta bancaria (OVpay). Valida al subir Y al bajar con la misma tarjeta, si no, pagas demasiado. La compensación por gastos de viaje (reiskostenvergoeding) no es un derecho por ley: depende de tu empresa o de tu cao. Pregúntalo. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.transit.p': '¿Recibo una compensación por mis gastos de viaje?',
    'c.transit.s': 'Vas al trabajo en autobús cada día. Un compañero recibe dinero para el viaje, tú no. ¿Qué haces?',
    'c.transit.o1': 'Preguntas a tu encargado cuáles son las normas en tu empresa o en tu cao.',
    'c.transit.o2': 'No dices nada, porque seguramente no es para ti.',
    'c.transit.o3': 'Le dices a tu encargado: la ley dice que tú también debes recibirlo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': 'La compensación por gastos de viaje depende de la empresa o del cao. Preguntar es normal y te ayuda a conocer tus derechos.',
    'c.ww': 'La prestación por desempleo (WW)',
    'c.ww.b': '¿Has perdido tu trabajo? Pide la WW al UWV lo antes posible, en un plazo de una semana después de tu primer día sin trabajo. Normalmente tienes que haber trabajado al menos 26 de las últimas 36 semanas. Si dejas tu trabajo por tu cuenta, normalmente no recibes la WW. Inscríbete como persona que busca trabajo en werk.nl. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.ww.x': '¿Buscas trabajo en otro país de la UE? A veces puedes llevarte tu WW. Antes de irte, pide a UWV el formulario U2. Sin U2, dejas de recibir tu WW.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'Quiero pedir la prestación por desempleo. ¿Qué tengo que hacer?',
    'c.ww.s': 'Tu trabajo te enfada y quieres dejarlo hoy. ¿Qué es lo más sensato?',
    'c.ww.o1': 'Primero pides consejo, antes de dejar el trabajo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ww.o2': 'Lo dejas hoy: de todas formas vas a recibir la WW.',
    'c.ww.o3': 'Dejas de ir al trabajo sin decir nada.',
    'c.ww.w': 'Dejar el trabajo te puede costar la prestación. Hablar primero con tu encargado, el sindicato o el Juridisch Loket te puede ayudar a encontrar una salida mejor.',
    'c.newjob': 'Buscar un trabajo nuevo',
    'c.newjob.b': 'Antes de irte, pide una referencia (referentie). Guarda tus nóminas y tu contrato. Actualiza tu currículum. Busca trabajo en agencias de trabajo temporal (uitzendbureaus) y en werk.nl. Nunca pagues dinero para conseguir un trabajo. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.',
    'c.newjob.p': '¿Puedo darle su nombre como referencia?',
    'c.newjob.s': 'Alguien te ofrece un trabajo, pero primero tienes que pagar 300 euros “por el trabajo”. ¿Qué haces?',
    'c.newjob.o1': 'No pagas. Buscas una agencia de verdad.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': 'Pagas, porque un buen trabajo lo vale.',
    'c.newjob.o3': 'Pagas la mitad ahora y el resto después.',
    'c.newjob.w': 'Pedir dinero por un trabajo es una señal de alarma. Una agencia de trabajo temporal no te puede cobrar por encontrarte trabajo. También puedes buscar trabajo en werk.nl.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'La reunión de seguridad (toolbox)',
    'c.tools.b': 'En muchas obras hay cada cierto tiempo una reunión corta sobre seguridad: la reunión toolbox. Allí te hablan de los riesgos y de las normas nuevas. Ve, escucha y pregunta si no entiendes algo. Revisa tus herramientas antes de usarlas. ¿Una herramienta está rota? Díselo a tu encargado.',
    'c.tools.p': 'Este taladro está roto. ¿Hay otro?',
    'c.tools.s': 'Hay una reunión toolbox, pero tu neerlandés todavía no es bueno. ¿Qué haces?',
    'c.tools.o1': 'Vas, y después preguntas a un compañero lo que te perdiste.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': 'No vas, porque de todas formas no lo vas a entender.',
    'c.tools.o3': 'Firmas la lista de asistencia sin ir.',
    'c.tools.w': 'La información de seguridad es para todos. Una app de traducción te puede ayudar a seguir la reunión, si allí se permiten los teléfonos. Preguntar después a un compañero es normal y sirve para comprobar que lo entendiste bien.',
    'c.site': 'Para y comprueba: la LMRA',
    'c.site.b': 'Antes de empezar una tarea, para un momento y piensa: ¿qué puede salir mal aquí? Esto es la LMRA (análisis de riesgos de último minuto). Lleva siempre el casco, y la protección contra caídas cuando trabajas en altura. Nunca te pongas debajo de una carga colgada. ¿El trabajo es de verdad peligroso? Entonces puedes parar, y tienes que decírselo enseguida a tu encargado. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.site.p': 'Todavía no empiezo. Esto no es seguro.',
    'c.site.s': 'Tienes que trabajar en un andamio, pero falta una barandilla. Un compañero dice: “Ten cuidado y ya está”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.site.o1': 'No empiezas, y se lo dices a tu encargado.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': 'Empiezas, pero con mucho cuidado.',
    'c.site.o3': 'Arreglas tú la barandilla con una cuerda.',
    'c.site.w': 'Una caída desde una altura puede causar lesiones muy graves. Puedes parar un trabajo peligroso, y avisar protege a todo el equipo.',
    'c.line': 'Manos fuera de las máquinas en marcha',
    'c.line.b': 'Nunca metas la mano en una máquina en marcha, ni un segundo. Si hay una avería (storing): pulsa la parada de emergencia (noodstop) y llama a tu encargado. El mantenimiento y las reparaciones solo se hacen con la máquina bloqueada (lock-out), y solo por personas formadas. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.line.p': 'Hay una avería. He pulsado la parada de emergencia.',
    'c.line.s': 'Un producto se ha atascado en la máquina. La máquina sigue en marcha. ¿Qué haces?',
    'c.line.o1': 'Pulsas la parada de emergencia y llamas a tu encargado.',
    'c.line.o2': 'Lo sacas rápido con la mano, antes de que se rompa.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': 'Lo dejas y esperas que la máquina lo resuelva.',
    'c.line.w': 'Las máquinas en marcha pueden causar accidentes graves en un segundo. Parar la máquina siempre está permitido y siempre es mejor.',
    'c.quality': 'Calidad: di lo que ves',
    'c.quality.b': '¿Ves un problema en un producto, como un daño o una etiqueta equivocada? Avisa y ponlo aparte. No lo dejes pasar solo para que la línea siga. Encontrar un problema pronto ahorra mucho trabajo y dinero. Tu encargado se va a alegrar de que lo digas.',
    'c.quality.p': 'Creo que algo va mal con estos productos.',
    'c.quality.s': 'Ves que muchos productos tienen una fecha equivocada en la etiqueta. La línea va muy cargada. ¿Qué haces?',
    'c.quality.o1': 'Se lo dices enseguida a tu encargado o a la persona de calidad.',
    'c.quality.o2': 'Los dejas pasar, porque no es tu trabajo.',
    'c.quality.o3': 'Los tiras sin decir nada.',
    'c.quality.w': 'Una etiqueta equivocada puede hacer que todos los productos tengan que volver de las tiendas. Decirlo pronto es lo que hace un buen compañero de equipo.',
    'c.client': 'Respeto por el cliente',
    'c.client.b': 'Llama a la puerta antes de entrar en la habitación de un cliente. Di quién eres, explica lo que vas a hacer y pide permiso. Trata de “u” a los clientes, a no ser que te pidan que les digas “je”. Deja que los clientes hagan lo que pueden hacer por sí mismos.',
    'c.client.p': '¿Puedo entrar? Vengo a ayudarle a lavarse.',
    'c.client.s': 'Tienes que ayudar a una clienta a lavarse. La puerta de su habitación está cerrada. ¿Qué haces?',
    'c.client.o1': 'Llamas, esperas y dices quién eres y a qué vienes.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.client.o2': 'Entras rápido, porque tienes mucho trabajo.',
    'c.client.o3': 'No la lavas, para no molestarla.',
    'c.client.w': 'La habitación es la casa de la clienta. Llamar a la puerta y explicar muestra respeto y hace que el cuidado sea más tranquilo.',
    'c.privacy': 'Privacidad, higiene y medicamentos',
    'c.privacy.b': 'Lo que ves y oyes sobre los clientes se queda en el trabajo. No hables de los clientes fuera del trabajo, y nunca publiques fotos de ellos. Lávate las manos antes y después de cuidar. ¿Notas un cambio en un cliente, como dolor o una caída? Díselo enseguida a la enfermera. Nunca des medicamentos, a no ser que tengas la formación y el permiso para hacerlo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.privacy.p': 'El señor tiene más dolor que ayer.',
    'c.privacy.s': 'Una clienta te pide sus pastillas. No tienes formación para dar medicamentos. ¿Qué haces?',
    'c.privacy.o1': 'Le dices con amabilidad que vas a buscar a la enfermera.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': 'Le das las pastillas, porque ella sabe lo que necesita.',
    'c.privacy.o3': 'Dices que no y te vas.',
    'c.privacy.w': 'Un medicamento equivocado puede ser peligroso. Buscar rápido a la persona correcta ayuda a la clienta y protege a todos.',
    'c.kitchen': 'Seguridad alimentaria',
    'c.kitchen.b': 'Lávate las manos a menudo, también después de ir al baño y después de tocar carne cruda. Mantén frío lo que es frío y caliente lo que es caliente. Pon una etiqueta con la fecha en la comida que guardas. Estas normas se llaman HACCP. Las alergias son algo serio: ¿no sabes bien qué lleva un plato? Pregunta siempre al jefe de cocina. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.kitchen.p': 'Chef, ¿esta salsa lleva gluten?',
    'c.kitchen.s': 'Un cliente pregunta si un plato lleva frutos secos. No lo sabes con seguridad. ¿Qué haces?',
    'c.kitchen.o1': 'Dices que lo vas a comprobar, y preguntas al jefe de cocina.',
    'c.kitchen.o2': 'Dices “no”, para que el cliente esté contento.',
    'c.kitchen.o3': 'Le dices al cliente que quite los frutos secos.',
    'c.kitchen.w': 'Para un cliente con alergia, un pequeño error puede ser muy peligroso. Comprobarlo con el jefe de cocina siempre es lo correcto.',
    'c.service': 'Educación con los clientes',
    'c.service.b': 'Trata de “u” a los clientes, a no ser que te pidan que les digas “je”. Sé amable y mantén la calma, también cuando hay mucho trabajo. ¿No sabes bien la respuesta a una pregunta? Di que lo vas a comprobar. Propinas (fooi): las normas cambian de un sitio a otro. Pregunta cómo se reparten las propinas en tu trabajo.',
    'c.service.p': 'Un momento, enseguida estoy con usted.',
    'c.service.s': 'Hay muchísimo trabajo. Un cliente te llama, pero estás llevando platos a otra mesa. ¿Qué haces?',
    'c.service.o1': 'Miras al cliente y dices: “Een moment, ik kom zo bij u.”',
    'c.service.o2': 'No haces caso al cliente hasta que tienes tiempo.',
    'c.service.o3': 'Dejas los platos en una mesa libre y vas primero al cliente.',
    'c.service.w': 'Una señal corta muestra al cliente que lo has visto. Después puedes terminar tu tarea con calma.',
    'c.cleaning': 'Lee la etiqueta',
    'c.cleaning.b': 'Cada producto de limpieza tiene una etiqueta. Los pictogramas (pequeños dibujos en un rombo rojo) muestran el peligro, por ejemplo para la piel, los ojos o los pulmones. Lee la etiqueta, o pregunta para qué es el producto y cómo se usa. Ponte los guantes que te da tu empresa. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.cleaning.p': '¿Para qué es este producto?',
    'c.cleaning.s': 'Te dan un producto de limpieza nuevo. No puedes leer bien la etiqueta. ¿Qué haces?',
    'c.cleaning.o1': 'Preguntas cómo usarlo de forma segura.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': 'Usas mucho, así funciona mejor.',
    'c.cleaning.o3': 'Lo pruebas sin guantes.',
    'c.cleaning.w': 'El producto equivocado, o demasiado producto, te puede dañar la piel, los ojos o los pulmones. Preguntar lleva un minuto.',
    'c.cleansafe': 'Nunca mezcles productos',
    'c.cleansafe.b': 'Nunca mezcles productos de limpieza, por ejemplo lejía y un limpiador de inodoros. Eso puede producir gases peligrosos. Deja entrar aire fresco. ¿Friegas un suelo? Pon el cartel de suelo mojado (Pas op, glad!), para que nadie resbale. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.cleansafe.p': 'Pongo el cartel. El suelo está mojado.',
    'c.cleansafe.s': 'El baño está muy sucio. Una compañera dice: “Mezcla dos productos, así funciona mejor”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.cleansafe.o1': 'No los mezclas. Usas un solo producto.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleansafe.o2': 'Los mezclas, pero abres una ventana.',
    'c.cleansafe.o3': 'Los mezclas rápido y sales del baño.',
    'c.cleansafe.w': 'Mezclar productos puede producir un gas venenoso, también con la ventana abierta. Un solo producto, bien usado, es suficiente.',
    'u.tools': 'Herramientas inteligentes',
    'l.translate': 'Traducir con tu teléfono',
    'w.vertaalapp': 'la app de traducción',
    'w.vertalen': 'traducir',
    'w.camera': 'la cámara',
    'w.briefje': 'la nota (un papel pequeño)',
    'w.spreken': 'hablar',
    'w.vertaling': 'la traducción',
    's.translate.1': 'Lo traduzco con mi teléfono.',
    's.translate.2': '¿Puedo traducir esto un momento?',
    's.translate.3': '¿Puede hablarle un momento a mi teléfono?',
    'c.translate.q': '¿Qué dice esa nota?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.translate.a': 'Espera un momento, lo traduzco.',
    'l.understood': 'Entender y que te entiendan',
    'w.herhalen': 'repetir',
    'w.opschrijven': 'apuntar, escribir',
    'w.latenzien': 'enseñar, mostrar',
    'w.ondertiteling': 'los subtítulos (lo que se habla, como texto)',
    'w.instructie': 'la instrucción',
    'w.plaatje': 'el dibujo, la imagen',
    's.understood.1': '¿Me lo puede escribir?',
    's.understood.2': '¿Me lo puede enseñar?',
    's.understood.3': '¿Hay instrucciones con dibujos?',
    'c.understood.q': 'Primero recoge, luego empaqueta.',
    'c.understood.a': '¿Entonces primero tengo que recoger?',
    'l.keeplearning': 'Seguir aprendiendo',
    'w.bibliotheek': 'la biblioteca (pública)',
    'w.taalhuis': 'el Taalhuis (ayuda gratis con el neerlandés)',
    'w.oefenen': 'practicar',
    'w.luisteren': 'escuchar',
    'w.elkedag': 'cada día',
    'w.woord': 'la palabra',
    's.keeplearning.1': 'Practico diez minutos cada día.',
    's.keeplearning.2': '¿Qué significa esta palabra?',
    's.keeplearning.3': '¿Hablas neerlandés conmigo?',
    'c.keeplearning.q': '¿Hablo en inglés?',
    'c.keeplearning.a': 'No, mejor en neerlandés. Quiero practicar.',
    'c.translate': 'Apps de traducción: útiles, pero compruébalo',
    'c.translate.b': 'Una app de traducción, como Google Translate, ayuda mucho. Puedes escribir, hablar o usar el modo conversación para hablar con un compañero. Con la cámara puedes traducir carteles, notas e instrucciones. En muchos teléfonos, WhatsApp también puede traducir mensajes. Usa tu teléfono solo donde es seguro y está permitido. Nunca cerca de máquinas ni carretillas elevadoras. Pregunta siempre antes. Las apps se equivocan. Para cosas importantes, como tu contrato, una carta o una instrucción de seguridad, pide también a una persona que te lo explique. No hagas fotos de papeles confidenciales del trabajo sin permiso.',
    'c.translate.p': '¿Puedo usar mi teléfono para traducir?',
    'c.translate.s': 'Tu encargado te da instrucciones de seguridad en neerlandés. Solo entiendes unas pocas palabras. ¿Qué haces?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': 'Pides que te lo expliquen, y preguntas si puedes usar una app.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': 'Dices “ja, ja” y empiezas a trabajar.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': 'Haces una foto y la mandas a tus amigos, para que la traduzcan.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': 'Una app de traducción te ayuda a entender rápido, pero se puede equivocar. Para la seguridad, que una persona te lo explique es la mejor comprobación. Los papeles del trabajo pueden ser confidenciales, así que no los compartas sin permiso.',
    'c.understood': 'Comprueba que lo has entendido',
    'c.understood.b': 'Tu teléfono puede convertir lo que se habla en texto (subtítulos en directo): Transcripción instantánea en Android, Subtítulos en directo en iPhone. Mira qué idiomas acepta tu teléfono. También puedes pedir a alguien que te lo escriba, que te lo enseñe o que hable despacio. Pregunta si hay instrucciones con dibujos, o en tu idioma. Después repite lo que has entendido: “Dus ik moet eerst …?” Aquí esto es normal, y evita errores.',
    'c.understood.p': '¿Entonces primero tengo que contar las cajas?',
    'c.understood.s': 'Una compañera te explica cómo funciona una máquina nueva. Habla rápido y no entiendes algunas palabras. ¿Qué haces?',
    'c.understood.o1': 'Le pides que te lo enseñe o lo escriba, y después lo repites.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': 'Dices que sí con la cabeza y “ja, ja”, para que ella no pierda tiempo.',
    'c.understood.o3': 'Más tarde pruebas la máquina sin ayuda y ves qué pasa.',
    'c.understood.w': 'Enseñarlo, escribirlo y repetirlo son comprobaciones rápidas. Tu compañera te puede corregir antes de que algo salga mal. Aquí esto se ve como cuidadoso, no como lento.',
    'c.keeplearning': 'Sigue aprendiendo, un poco cada día',
    'c.keeplearning.b': 'Unos minutos cada día ayudan más que una hora larga a la semana. Guarda las palabras nuevas del trabajo en una app de notas de tu teléfono. Escucha neerlandés fácil, por ejemplo el NOS Jeugdjournaal (noticias para niños) o un pódcast en neerlandés lento. Muchas bibliotecas públicas tienen un Taalhuis: ayuda gratis con el neerlandés, muchas veces con un taalcafé (un lugar para practicar hablando) o un compañero de idioma (taalmaatje). Los compañeros muchas veces cambian al inglés para ayudarte. Pídeles con amabilidad que hablen neerlandés contigo: a la mayoría le gusta ayudar.',
    'c.keeplearning.p': 'Háblame en neerlandés, así lo aprendo más rápido.',
    'c.keeplearning.s': 'Tus compañeros siempre cambian al inglés cuando hablan contigo. Quieres aprender neerlandés. ¿Qué haces?',
    'c.keeplearning.o1': 'Les das las gracias, y les pides que hablen neerlandés contigo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': 'No dices nada. El neerlandés vendrá solo.',
    'c.keeplearning.o3': 'Tú también respondes en inglés, porque es más educado.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': 'Los compañeros muchas veces cambian al inglés para ser amables. Cuando pides neerlandés, a la mayoría le gusta ayudar. Hablar un poco cada día en el trabajo es una de las formas más rápidas de aprender.',
    'l.gossip': 'Chismes y redes sociales',
    'w.roddelen': 'chismear, criticar a alguien a sus espaldas',
    'w.posten': 'publicar (en internet)',
    'w.groepsapp': 'el grupo de chat',
    'w.socialemedia': 'las redes sociales',
    'w.delen': 'compartir',
    'w.screenshot': 'la captura de pantalla',
    's.gossip.1': 'No critico a mis compañeros a sus espaldas.',
    's.gossip.2': 'No pongo fotos del trabajo en internet.',
    's.gossip.3': 'Prefiero que me lo digas directamente.',
    'c.gossip.q': '¿Has oído lo que hizo Mark?',
    'c.gossip.a': 'No, y prefiero no hablar de él.',
    'l.boundaries': 'Pasarse de la raya',
    'w.aanraken': 'tocar',
    'w.ongewenst': 'no deseado',
    'w.opmerking': 'el comentario',
    'w.intimidatie': 'el acoso, la intimidación',
    'w.getuige': 'el testigo',
    'w.grapje': 'la broma',
    's.boundaries.1': 'No me toques.', // nieuw, nalezen ("Blijf van me af.", 4 nov 2026) // nagelezen AI 28 nov
    's.boundaries.2': 'Ese comentario no me hace gracia.',
    's.boundaries.3': 'Quiero contarle algo a la persona de confianza.',
    'c.boundaries.q': 'No te pongas así, solo era una broma.',
    'c.boundaries.a': 'Para mí no. Quiero que pares.',
    'c.gossip': 'Chismes y redes sociales',
    'c.gossip.b': 'Hablar mal de un compañero a sus espaldas (roddelen) daña la confianza en un equipo. ¿Tienes un problema con alguien? Habla con esa persona, o con tu encargado. En internet valen las mismas normas que en el trabajo. No publiques nada sobre compañeros, clientes o la empresa sin permiso. Eso incluye fotos, vídeos y mensajes. Tu jefe puede ver lo que publicas, y puede quedarse en internet durante años. Muchos equipos tienen un grupo de chat (groepsapp) para el trabajo: úsalo para temas de trabajo, y no compartas capturas de pantalla con otras personas. Compartir cosas privadas de un compañero o burlarse de alguien en internet también es acoso.',
    'c.gossip.p': 'No quiero eso en internet.',
    'c.gossip.s': 'Un compañero te graba cuando resbalas en el suelo mojado. Quiere subir el vídeo a TikTok. ¿Qué haces?',
    'c.gossip.o1': 'Dices “Nee, dat wil ik niet” y le pides que lo borre.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.o2': 'Te ríes y dejas que lo publique, para no causar problemas.',
    'c.gossip.o3': 'Le pides que lo publique sin tu nombre.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': 'Normalmente, nadie puede poner un vídeo tuyo en internet sin tu permiso. Decir que no es normal, y tu empresa tiene que actuar cuando los compañeros se burlan unos de otros en internet. Si lo publica de todas formas, díselo a tu encargado.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': 'Pasarse de la raya',
    'c.boundaries.b': 'Grensoverschrijdend gedrag es un comportamiento que pasa el límite de alguien. Por ejemplo: tocar sin permiso, comentarios o bromas sexuales, mirar fijamente, imágenes no deseadas, amenazas o gritos. No importa si la otra persona “lo dijo en broma”: lo que cuenta es cómo te sientes tú. Si puedes, di claramente que quieres que pare. Apunta lo que pasó, cuándo y quién lo vio. Cuéntalo a tu encargado, a la persona de confianza (vertrouwenspersoon, si hay una) o a Recursos Humanos. Tu empresa te tiene que proteger, y no te pueden castigar por contarlo. ¿Viste que le pasaba a un compañero? Pregúntale si está bien, y ofrécete como testigo.',
    'c.boundaries.p': 'Quiero que pares.',
    'c.boundaries.s': { m: 'Tu jefe de equipo muchas veces te pone la mano en la espalda y te dice que estás “guapo”. Eso te hace sentir mal. Él decide tus turnos. ¿Qué haces?', f: 'Tu jefe de equipo muchas veces te pone la mano en la espalda y te dice que estás “guapa”. Eso te hace sentir mal. Él decide tus turnos. ¿Qué haces?', x: 'Tu jefe de equipo muchas veces te pone la mano en la espalda y te dice que tienes “buena pinta”. Eso te hace sentir mal. Él decide tus turnos. ¿Qué haces?' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.boundaries.o1': 'Apuntas lo que pasa y hablas con la vertrouwenspersoon.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.boundaries.o2': 'No dices nada, porque él decide tus turnos.',
    'c.boundaries.o3': 'Dejas tu trabajo sin decirle a nadie por qué.',
    'c.boundaries.w': 'Esto es un comportamiento no deseado, y no es culpa tuya. Una persona de confianza te escucha de forma confidencial y te ayuda a elegir el siguiente paso. La ley te protege cuando lo cuentas. También puedes hablar con Recursos Humanos.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'u.shop': 'En la tienda',
    'l.shelves': 'Estanterías y existencias',
    'w.schap': 'la estantería (en una tienda)',
    'w.vakkenvullen': 'reponer las estanterías',
    'w.voorraad': 'las existencias',
    'w.houdbaarheidsdatum': 'la fecha de consumo preferente',
    'w.prijskaartje': 'la etiqueta del precio',
    'w.achteraan': 'atrás, al fondo',
    's.shelves.1': 'Pon los productos nuevos atrás.',
    's.shelves.2': 'Este producto está caducado.',
    's.shelves.3': '¿Quedan existencias?',
    'c.shelves.q': '¿Dónde encuentro el arroz?',
    'c.shelves.a': 'En el pasillo cuatro. Le acompaño.',
    'l.checkout': 'En la caja',
    'w.klant': 'el cliente',
    'w.kassa': 'la caja',
    'w.wisselgeld': 'el cambio (el dinero que devuelves)',
    'w.bonnetje': 'el tique, el recibo',
    'w.pinnen': 'pagar con tarjeta',
    'w.contant': 'en efectivo',
    's.checkout.1': '¿Quiere pagar con tarjeta o en efectivo?',
    's.checkout.2': 'Aquí tiene su cambio.',
    's.checkout.3': '¿Me deja ver su documento de identidad, por favor?',
    'c.checkout.q': '¿Puedo pagar aquí con tarjeta?',
    'c.checkout.a': 'Sí, claro, se puede.',
    'u.numbers': 'Horas, dinero y medidas',
    'l.counting': 'Los números', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertien': 'trece (13)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertig': 'treinta (30)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventien': 'diecisiete (17)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventig': 'setenta (70)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zevenenveertig': 'cuarenta y siete (47)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierenzeventig': 'setenta y cuatro (74)', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.1': 'Tengo trece cajas, no treinta.', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.2': 'La ubicación setenta y cuatro está vacía.', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.3': '¿Puede decirlo cifra por cifra?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.q': '¿Cuántas cajas quedan?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.a': 'Setenta. Siete, cero.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.hours': 'Horas y horarios',
    'w.uur': 'la hora',
    'w.minuut': 'el minuto',
    'w.kwartier': 'un cuarto de hora (15 minutos)',
    'w.halfuur': 'media hora (30 minutos)',
    'w.duren': 'durar',
    'w.optellen': 'sumar',
    's.hours.1': 'Empiezo a las siete y media (7:30).',
    's.hours.2': 'Hoy trabajo ocho horas.',
    's.hours.3': 'La pausa dura media hora.',
    'c.hours.q': '¿A qué hora terminas?',
    'c.hours.a': 'A las cuatro y cuarto.',
    'l.measures': 'Dinero y medidas',
    'w.euro': 'el euro',
    'w.cent': 'el céntimo',
    'w.kilo': 'el kilo',
    'w.liter': 'el litro',
    'w.meter': 'el metro',
    'w.tellen': 'contar',
    's.measures.1': 'Cuesta seis euros con cincuenta.',
    's.measures.2': 'Esta caja pesa diez kilos.',
    's.measures.3': 'He contado cuarenta cajas.',
    'c.measures.q': '¿Cuánto mide esa tabla?',
    'c.measures.a': 'Dos metros justos.',
    'c.shelves': 'Lo viejo delante',
    'c.shelves.b': 'Cuando repones las estanterías, mira la fecha de los productos. Pon delante los productos con la fecha más próxima, y los nuevos atrás. Los clientes toman de delante, así salen primero los productos más viejos. ¿Un producto está caducado o dañado? Quítalo de la estantería y pregunta qué hacer con él. Mantén los pasillos libres de cajas y carros. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.shelves.p': '¿Qué hago con los productos caducados?',
    'c.shelves.s': 'Pones leche nueva en la estantería. Delante hay leche con una fecha más próxima. ¿Qué haces?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': 'La leche nueva atrás, la vieja delante.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o2': 'La leche nueva delante, porque está más fresca.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o3': 'Tiras la leche vieja.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'Los clientes toman de delante. Cuando los productos más viejos salen primero, se tira menos comida.',
    'c.checkout': 'Documento de identidad para el alcohol y el tabaco',
    'c.checkout.b': 'No puedes vender alcohol ni tabaco a menores de 18 años: es la ley. ¿No sabes bien qué edad tiene un cliente? Pídele su documento de identidad. Muchas tiendas piden el documento a todas las personas que parecen tener menos de 25 años. ¿Sin documento, o menor de 18? Entonces no lo vendes, y sigues siendo amable. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.checkout.p': 'Sin documento de identidad no puedo vender esto.',
    'c.checkout.s': 'Un chico joven quiere comprar cerveza. Parece tener unos 17 años. Dice que tiene 19, pero no lleva documento. ¿Qué haces?',
    'c.checkout.o1': 'Dices que sin documento no se la puedes vender.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': 'Se la vendes, porque dice que tiene 19.',
    'c.checkout.o3': 'Se la vendes, pero solo una lata.',
    'c.checkout.w': 'Sin documento no puedes saber su edad. Vender alcohol a un menor de 18 va contra la ley, y la tienda puede recibir una multa.',
    'c.counting': 'Vijfentwintig: primero el 5, luego el 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'En neerlandés, del 0 al 12 cada número tiene su propia palabra: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. Del 13 al 19 terminan en -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Las decenas terminan en -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. Del 21 al 99 se dice primero la última cifra: 25 es vijfentwintig, “cinco y veinte”. Así que 47 es zevenenveertig, y 74 es vierenzeventig. Dertien y dertig suenan casi igual: escucha el final. ¿Tienes dudas? Repite las cifras una a una.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': '¿Cuatro, siete? ¿O sea, cuarenta y siete?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'Tu encargado dice: “Ga naar gang zevenenveertig”. ¿Qué pasillo es?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.counting.o1': 'El pasillo 47.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'El pasillo 74.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'El pasillo 40.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '“Zevenenveertig” es “siete y cuarenta”: primero el 7, luego el 40. Así que es el pasillo 47. Muchos recién llegados oyen 74 y van al pasillo equivocado.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': '“Half acht” son las 7:30',
    'c.hours.b': 'En neerlandés, “half” cuenta hacia la hora siguiente: half acht son las 7:30, no las 8:30. Kwart over acht son las 8:15, y kwart voor acht son las 7:45. Revisa tú tus horas: la hora de salida menos la hora de entrada, menos la pausa. La pausa muchas veces no se paga. Apunta tus horas cada día.',
    'c.hours.p': '¿Half acht? ¿Entonces media hora antes de las ocho?',
    'c.hours.s': 'Tu encargado dice: “Morgen begin je om half negen”. ¿A qué hora empiezas mañana?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.hours.o1': 'A las 8:30.',
    'c.hours.o2': 'A las 9:30.',
    'c.hours.o3': 'A las 8:00.',
    'c.hours.w': '“Half negen” quiere decir media hora antes de las nueve: las 8:30. Muchos recién llegados creen que son las 9:30, y llegan una hora tarde.',
    'c.measures': 'Cuenta con cabeza, mide, no adivines',
    'c.measures.b': '¿Muchas cajas que contar? Cuenta las cajas de una capa y el número de capas. Después multiplica: 8 cajas por capa y 5 capas son 40 cajas. Con los productos de limpieza, mide la cantidad que dice la etiqueta. Más no es mejor: te puede dañar la piel y cuesta dinero. ¿Tienes dudas con un número? Cuenta otra vez, o pregunta. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.measures.p': 'Lo he contado dos veces.',
    'c.measures.s': 'Un palé tiene 6 capas. Cada capa tiene 8 cajas. Tu encargado pregunta cuántas cajas hay. ¿Qué dices?',
    'c.measures.o1': '48 cajas.',
    'c.measures.o2': '14 cajas.',
    'c.measures.o3': 'Unas 50, creo.',
    'c.measures.w': '6 capas de 8 cajas son 6 por 8: 48. Contar una capa y multiplicar es rápido, y un número exacto es mejor que adivinar.',
    'u.ai': 'IA y apps inteligentes',
    'l.aihelp': 'La IA como ayuda',
    'w.ai': 'la IA (inteligencia artificial)',
    'w.chatbot': 'el chatbot (una app con la que puedes chatear)',
    'w.antwoord': 'la respuesta',
    'w.meekijken': 'mirarlo junto con alguien',
    'w.kloppen': 'ser correcto, estar bien',
    'w.zeker': 'seguro',
    's.aihelp.1': '¿Me puedes explicar esta carta?',
    's.aihelp.2': '¿Esta respuesta es correcta?',
    's.aihelp.3': '¿Lo puede mirar conmigo un momento?',
    'c.aihelp.q': '¿Lo has escrito tú?',
    'c.aihelp.a': 'Sí, con ayuda de la IA.',
    'l.aiprivate': 'Lo que no compartes',
    'w.persoonlijk': 'personal',
    'w.gegevens': 'los datos (nombre, dirección, número)',
    'w.wachtwoord': 'la contraseña',
    'w.typen': 'escribir (en el teclado)',
    'w.opslaan': 'guardar',
    'w.inloggen': 'iniciar sesión',
    's.aiprivate.1': 'No comparto nombres de clientes.',
    's.aiprivate.2': '¿Puedo usar la IA para mi trabajo?',
    's.aiprivate.3': 'Mi contraseña es secreta.',
    'c.aiprivate.q': 'Pon esto un momento en el chatbot.',
    'c.aiprivate.a': 'Mejor no, tiene nombres de clientes.',
    'l.aifake': '¿Falso o real?',
    'w.echt': 'real, de verdad',
    'w.stem': 'la voz',
    'w.filmpje': 'el vídeo (corto)',
    'w.ophangen': 'colgar (el teléfono)',
    'w.nummer': 'el número (de teléfono)',
    'w.haast': 'la prisa',
    's.aifake.1': '¿Esto es real o falso?',
    's.aifake.2': 'Cuelgo y llamo yo.',
    's.aifake.3': 'No envío dinero.',
    'c.aifake.q': 'Hola, este es mi número nuevo. ¿Me puedes mandar dinero rápido?',
    'c.aifake.a': 'Primero te llamo a tu número antiguo.',
    'l.aiplan': 'Cuando decide una app',
    'w.planning': 'la planificación, el horario',
    'w.mens': 'el ser humano, la persona',
    'w.computer': 'la computadora, el ordenador',
    'w.tempo': 'el ritmo (de trabajo)',
    'w.automatisch': 'automático (funciona solo)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.besluit': 'la decisión',
    's.aiplan.1': '¿Quién ha tomado esta decisión?',
    's.aiplan.2': 'Quiero hablar con una persona.',
    's.aiplan.3': '¿Por qué tengo menos horas en mi horario?',
    'c.aiplan.q': 'La app ha hecho tu horario.',
    'c.aiplan.a': '¿Puedo hablarlo con una persona?',
    'c.aihelp': 'La IA ayuda, una persona comprueba',
    'c.aihelp.b': 'Las apps de IA y los chatbots, como ChatGPT, pueden traducir, explicar una carta o ayudarte a escribir un mensaje. Eso es útil. Pero la IA a veces se equivoca, y aun así suena muy segura. ¿Se trata de tu contrato, tu sueldo, los medicamentos o la seguridad? Entonces comprueba siempre la respuesta con una persona. Por ejemplo tu encargado, Recursos Humanos o el Juridisch Loket.',
    'c.aihelp.p': '¿Esto está bien? ¿Lo puede mirar conmigo un momento?',
    'c.aihelp.s': 'Preguntas a un chatbot por tu contrato. Dice que no recibes paga de vacaciones. ¿Qué haces?',
    'c.aihelp.o1': 'Pides a Recursos Humanos o al Juridisch Loket que lo revisen.', // nalezen: korter goed antwoord // nagelezen AI 22 nov
    'c.aihelp.o2': 'Te lo crees: el chatbot suena muy seguro.',
    'c.aihelp.o3': 'No dices nada y lo olvidas.',
    'c.aihelp.w': 'Un chatbot se puede equivocar sobre normas y contratos. En los Países Bajos casi todos los trabajadores reciben paga de vacaciones. Una persona que conoce las normas lo puede comprobar.',
    'c.aiprivate': 'Piensa antes de escribir',
    'c.aiprivate.b': 'Lo que escribes en un chatbot se puede guardar y lo puede usar la empresa que lo hace. Por eso nunca escribas tu BSN, una contraseña ni tus datos bancarios. No pongas nombres ni fotos de clientes, pacientes o compañeros, ni papeles del trabajo. Muchas empresas tienen normas sobre la IA. Pregunta primero si la puedes usar para tu trabajo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.aiprivate.p': '¿Puedo usar la IA para esto?',
    'c.aiprivate.s': 'Quieres que un chatbot escriba un informe sobre un cliente. El informe tiene el nombre y la dirección del cliente. ¿Qué haces?',
    'c.aiprivate.o1': 'Primero preguntas, y quitas el nombre y la dirección.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': 'Lo pones todo en el chatbot: es más rápido.',
    'c.aiprivate.o3': 'Mandas el informe a un amigo para que lo revise.',
    'c.aiprivate.w': 'Los nombres y las direcciones son datos personales. No pueden ir así como así a otra empresa. Tu empresa sabe qué apps están permitidas.',
    'c.aifake': 'Voces y vídeos falsos',
    'c.aifake.b': 'Con la IA, los delincuentes pueden copiar una voz y hacer fotos y vídeos falsos. Una llamada o un mensaje que suena como tu jefe, tu banco o alguien de tu familia puede ser falso. Ten cuidado cuando hay prisa, dinero y un número nuevo. Cuelga, y llama tú al número que conoces. Un banco de verdad, una empresa o la policía nunca te piden tus códigos.',
    'c.aifake.p': 'Cuelgo y llamo yo.',
    'c.aifake.s': 'Suena tu teléfono. Una voz igual que la de tu jefe dice: “Paga ahora esta factura, es urgente”. ¿Qué haces?', // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.aifake.o1': 'Cuelgas y llamas tú a tu jefe.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aifake.o2': 'Pagas rápido: es tu jefe.',
    'c.aifake.o3': 'Das tu código del banco, para que tu jefe pueda pagar.',
    'c.aifake.w': 'Una voz se puede copiar con la IA. La prisa y el dinero juntos son una señal de alarma. Llamar a un número que conoces es una comprobación rápida y segura.',
    'c.aiplan': '¿Quién ha decidido esto?',
    'c.aiplan.b': 'Cada vez más empresas dejan que una app o una computadora decida cosas. Por ejemplo, hace el horario o cuenta tu ritmo con el escáner. Puedes preguntar qué información se recoge sobre ti. ¿Hay una decisión importante sobre ti, como menos horas, una advertencia o un despido? Pregunta quién lo ha decidido. ¿Una computadora ha tomado sola esa decisión? Entonces puedes pedir que una persona la vuelva a revisar y te la explique. Apunta tus propias horas. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.aiplan.p': '¿Lo puede mirar una persona?',
    'c.aiplan.s': 'La app de planificación te da muchas menos horas el próximo mes. Nadie te dice por qué. ¿Qué haces?',
    'c.aiplan.o1': 'Pides que una persona te lo explique.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.o2': 'Lo aceptas: la app siempre tiene razón.',
    'c.aiplan.o3': 'Le preguntas al chatbot de la app por qué.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': 'Las apps se equivocan, y no lo saben todo de ti. Puedes pedir una explicación, y una persona lo puede volver a mirar.',
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': "En el invernadero", // nagelezen (2e lezing)
    'l.harvest': "Cosechar y clasificar", // nagelezen (2e lezing)
    'w.kas': "el invernadero", // nagelezen (2e lezing)
    'w.gewas': "el cultivo (las plantas que crecen)", // nagelezen (2e lezing)
    'w.rij': "la fila (de plantas)", // nagelezen (2e lezing)
    'w.oogsten': "cosechar", // nagelezen (2e lezing)
    'w.sorteren': "clasificar", // nagelezen (2e lezing)
    'w.krat': "la caja (de plástico)", // nagelezen (2e lezing)
    's.harvest.1': "Trabajo en el invernadero.", // nagelezen (2e lezing)
    's.harvest.2': "¿En qué fila empiezo?", // nagelezen (2e lezing)
    's.harvest.3': "La caja está llena.", // nagelezen (2e lezing)
    'c.harvest.q': "¿Cuántas filas has hecho?", // nagelezen (2e lezing)
    'c.harvest.a': "Cuatro. Me faltan dos.", // nagelezen (2e lezing)
    'l.greensafe': "Seguridad en el invernadero", // nagelezen (2e lezing)
    'w.spuitmiddelen': "los productos fitosanitarios (químicos para las plantas)", // nagelezen (2e lezing)
    'w.bespoten': "fumigado (con productos para las plantas)", // nagelezen (2e lezing)
    'w.plukkar': "el carro de recolección", // nagelezen (2e lezing)
    'w.bukken': "agacharse", // nagelezen (2e lezing)
    'w.drinken': "beber", // nagelezen (2e lezing)
    'w.hitte': "el calor (cuando hace mucho calor)", // nagelezen (2e lezing)
    's.greensafe.1': "¿Han fumigado este invernadero?", // nagelezen (2e lezing)
    's.greensafe.2': "Voy a beber un poco de agua.", // nagelezen (2e lezing)
    's.greensafe.3': "¿Dónde está el carro de recolección?", // nagelezen (2e lezing)
    'c.greensafe.q': "¿Puedo trabajar en el invernadero tres?", // nagelezen (2e lezing)
    'c.greensafe.a': "No, todavía no. Lo acaban de fumigar.", // nagelezen (2e lezing)
    'c.harvest': "El ritmo y el pago por pieza", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': "En un invernadero muchas veces trabajas a un ritmo fijo (tempo). Algunas empresas pagan por caja, por fila o por kilo: es el pago por pieza (stukloon). Aunque cobres por pieza, tienes que ganar al menos el salario mínimo por cada hora que trabajas. Mira la cantidad en rijksoverheid.nl. Apunta cada día tus horas y tus cajas, y compáralas con tu nómina. Trabajar rápido está bien, pero trabajar de forma segura es lo primero. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': "¿Cuántas cajas he hecho hoy?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.s': "Te pagan por caja. Esta semana ganas menos del salario mínimo por hora. ¿Qué haces?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': "Enseñas tu propia lista de horas y cajas.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': "No dices nada y trabajas más rápido.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': "Lo aceptas: con el pago por pieza, eso es normal.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': "Con el pago por pieza también tienes que recibir al menos el salario mínimo por cada hora que trabajaste. Tu propia lista de horas y cajas te ayuda a mostrar lo que hiciste. Si no lo corrigen, pide ayuda.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe': "El calor y los productos fitosanitarios", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': "En un invernadero puede hacer mucho calor, incluso en primavera. Bebe agua a menudo, incluso antes de tener sed, y toma tus pausas en un sitio fresco. ¿Tienes mareos, náuseas o dolor de cabeza? Para y díselo a alguien. A veces fumigan las plantas con productos químicos (spuitmiddelen). Un invernadero que acaban de fumigar muchas veces tiene un cartel en la puerta. No entres hasta que tu encargado diga que vuelve a ser seguro. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': "¿Ya puedo trabajar en este invernadero?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': "Esta mañana fumigaron un invernadero. Hay un cartel en la puerta. Un compañero dice: “Vamos, es solo un momento”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.greensafe.o1': "Te quedas fuera y preguntas cuándo es seguro.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o2': "Entras rápido y aguantas la respiración.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': "Entras, y después te lavas bien las manos.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': "Los productos fitosanitarios pueden dañar tu piel, tus ojos y tus pulmones, también cuando no hueles nada. Después de fumigar hay un tiempo de espera antes de poder entrar otra vez. Tu encargado sabe cuándo termina.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Números y datos",
    'l.details': "Tus datos",
    'w.voornaam': "el nombre (de pila)",
    'w.achternaam': "el apellido",
    'w.spellen': "deletrear (decir las letras una por una)",
    'w.telefoonnummer': "el número de teléfono",
    'w.geboortedatum': "la fecha de nacimiento",
    'w.formulier': "el formulario (un papel o una página para rellenar)",
    's.details.1': "¿Puede deletrearlo?",
    's.details.2': "Doy mi nuevo número de teléfono.",
    's.details.3': "Este formulario es para Hacienda (Belastingdienst).",
    'c.details.q': "¿Cuál es tu apellido?",
    'c.details.a': "Haddad. ¿Lo deletreo?",
    'l.dates': "Días y fechas",
    'w.maandag': "lunes",
    'w.week': "la semana",
    'w.maand': "el mes",
    'w.volgendeweek': "la semana que viene",
    'w.vorigeweek': "la semana pasada",
    'w.totenmet': "hasta … incluido (el último día también cuenta)",
    's.dates.1': "Puedo de lunes a jueves (el jueves también).",
    's.dates.2': "La semana que viene trabajo cuatro días.",
    's.dates.3': "La semana pasada trabajé cuarenta horas.",
    'c.dates.q': "¿Qué fecha es hoy?",
    'c.dates.a': "Es lunes, 3 de junio.",
    'l.permit': "Papeles, integración y tu trabajo", // nagelezen AI 22 nov
    'w.papieren': "los papeles (los documentos)", // nagelezen AI 22 nov
    'w.werkvergunning': "el permiso de trabajo", // nagelezen AI 22 nov
    'w.werknemer': "el trabajador por cuenta ajena (trabajas para una empresa)", // nagelezen AI 22 nov
    'w.zzper': "el autónomo (trabajas por tu cuenta)", // nagelezen AI 22 nov
    'w.inburgering': "la integración cívica (el curso y los exámenes para recién llegados)", // nagelezen AI 22 nov
    'w.taalles': "la clase de idioma", // nagelezen AI 22 nov
    's.permit.1': "¿Puedo trabajar aquí con mis papeles?", // nagelezen AI 22 nov
    's.permit.2': { m: "¿Soy empleado o autónomo?", f: "¿Soy empleada o autónoma?", x: '¿Trabajo por cuenta ajena o por cuenta propia?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.permit.3': "Trabajo cuando me llaman (oproepkracht).", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.q': "¿Puedes trabajar el martes?", // nagelezen AI 22 nov
    'c.permit.a': "No, ese día tengo clase de idioma. El miércoles sí puedo.", // nagelezen AI 22 nov
    'l.kids': "Los hijos y el trabajo", // nagelezen AI 22 nov
    'w.zwanger': "embarazada", // nagelezen AI 22 nov
    'w.kinderopvang': "la guardería", // nagelezen AI 22 nov
    'w.ophalen': "recoger (ir a buscar a alguien)", // nagelezen AI 22 nov
    'w.ziekkind': "un niño enfermo", // nagelezen AI 22 nov
    'w.ouderschapsverlof': "el permiso parental", // nagelezen AI 22 nov
    'w.zorgverlof': "el permiso para cuidar (tiempo libre para cuidar a un familiar enfermo)", // nagelezen AI 22 nov
    's.kids.1': "Mi hijo está enfermo. Tengo que ir a recogerlo.", // nagelezen AI 22 nov
    's.kids.2': "¿Puedo tomar un permiso por emergencia?", // nagelezen AI 22 nov
    's.kids.3': "¿Mi empresa me sigue pagando el sueldo?", // nagelezen AI 22 nov
    'c.kids.q': "¿Por qué te tienes que ir ahora?", // nagelezen AI 22 nov
    'c.kids.a': "Ha llamado la guardería. Mi hijo tiene fiebre.", // nagelezen AI 22 nov
    'l.body': "El cuerpo y el dolor", // nagelezen AI 22 nov
    'w.hoofd': "la cabeza", // nagelezen AI 22 nov
    'w.rug': "la espalda", // nagelezen AI 22 nov
    'w.arm': "el brazo", // nagelezen AI 22 nov
    'w.hand': "la mano", // nagelezen AI 22 nov
    'w.buik': "la barriga, el vientre", // nagelezen AI 22 nov
    'w.oog': "el ojo", // nagelezen AI 22 nov
    's.body.1': "Me duele la mano.", // nagelezen AI 22 nov
    's.body.2': "No me encuentro bien.", // nagelezen AI 22 nov
    's.body.3': "Me he caído sobre el brazo.", // nagelezen AI 22 nov
    'c.body.q': "¿Dónde te duele?", // nagelezen AI 22 nov
    'c.body.a': "En la espalda. He levantado una caja pesada.", // nagelezen AI 22 nov
    'l.jobends': "Cuando termina tu trabajo", // nagelezen AI 22 nov
    'w.eindafrekening': "el finiquito (tu último pago cuando termina un trabajo)", // nagelezen AI 22 nov
    'w.opzeggen': "cancelar, dar de baja (un contrato)", // nagelezen AI 22 nov
    'w.uitschrijven': "darse de baja (quitar tu nombre de una lista)", // nagelezen AI 22 nov
    'w.sleutel': "la llave", // nagelezen AI 22 nov
    'w.verhuizen': "mudarse (a otra casa)", // nagelezen AI 22 nov
    'w.busje': "la furgoneta (un autobús pequeño)", // nagelezen AI 22 nov
    's.jobends.1': "¿Me pagan la paga de vacaciones y los días libres que me quedan?", // nagelezen AI 22 nov
    's.jobends.2': "Pido consejo en el Juridisch Loket.", // nagelezen AI 22 nov
    's.jobends.3': "Contrato un nuevo seguro médico por mi cuenta.", // nagelezen AI 22 nov
    'c.jobends.q': "Tu trabajo termina el viernes. Ese día también tienes que dejar la casa.", // nagelezen AI 22 nov
    'c.jobends.a': "¿Cuál es el plazo de preaviso de mi contrato de alquiler?", // nagelezen AI 22 nov
    'c.details': "Tus datos: dalos bien", // nagelezen AI 22 nov
    'c.details.b': "Al empezar un trabajo, das tus datos. Son tu nombre, tu dirección, tu número de teléfono, tu fecha de nacimiento y tu BSN. Deletrea tu nombre despacio, letra por letra. Después, revisa tu nombre en tu contrato y en tu nómina. Un error en tu nombre o en tu BSN puede dar problemas con tu sueldo o tus impuestos. ¿Tienes una dirección o un teléfono nuevo? Díselo a tu empresa.", // nagelezen AI 22 nov
    'c.details.p': "Te lo deletreo: A, L, I.", // nagelezen AI 22 nov
    'c.details.s': "Por teléfono, la agencia apunta tu apellido. Oyes que lo escriben mal. ¿Qué haces?", // nagelezen AI 22 nov
    'c.details.o1': "Deletreas tu nombre despacio y pides que te lo lean.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': "No dices nada: un error pequeño en tu nombre no importa.", // nagelezen AI 22 nov
    'c.details.o3': "Cuelgas, y esperas que encuentren el error más tarde.", // nagelezen AI 22 nov
    'c.details.w': "Tu nombre tiene que ser igual en tu contrato, tu nómina y tu documento de identidad. Así tu sueldo y tus impuestos salen bien. Deletrear y pedir que lo lean es una comprobación rápida.", // nagelezen AI 22 nov
    'c.dates': "Las fechas: primero el día", // nagelezen AI 22 nov
    'c.dates.b': "En neerlandés, el día va antes del mes: 3-6 es el 3 de junio, no el 6 de marzo. “Tot en met” quiere decir que el último día también cuenta. Los días y los meses se escriben con minúscula: maandag, juni. ¿Tienes dudas con una fecha? Pregunta, y repítela.", // nagelezen AI 22 nov
    'c.dates.p': "¿Quieres decir el 3 de junio?", // nagelezen AI 22 nov
    'c.dates.s': "Tu horario dice: “Vrij: 3-6 tot en met 5-6”. ¿Cuándo tienes libre?", // nagelezen AI 22 nov
    'c.dates.o1': "El 3, el 4 y el 5 de junio.", // nagelezen AI 22 nov
    'c.dates.o2': "Solo el 3 y el 4 de junio.", // nagelezen AI 22 nov
    'c.dates.o3': "Del 6 de marzo al 6 de mayo.", // nagelezen AI 22 nov
    'c.dates.w': "Primero va el día y después el mes: 3-6 es el 3 de junio. “Tot en met” quiere decir que el 5 de junio también cuenta, así que tienes tres días libres.", // nagelezen AI 22 nov
    'c.permit': "Trabajo e integración", // nagelezen AI 22 nov
    'c.permit.b': "¿Tienes que hacer la integración cívica (inburgering)? Díselo a tu empresa, y dile a la gemeente (el ayuntamiento) que trabajas. Pregunta pronto si tus clases de idioma pueden encajar con tu horario. ¿Tienes dudas de si puedes trabajar aquí? Compruébalo antes de empezar, por ejemplo en el IND, el UWV o VluchtelingenWerk. ¿Te piden que te registres como autónomo (zzp’er) para este trabajo? Pide consejo primero. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nagelezen AI 22 nov
    'c.permit.p': "Los martes tengo clase de idioma. ¿Se puede tener en cuenta en mi horario?", // nagelezen AI 22 nov
    'c.permit.s': "Tu clase de idioma es los martes por la mañana. En tu nuevo horario trabajas a esa hora. ¿Qué haces?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': "Pides a tu encargado que cambie el horario.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': "Dejas de ir a la clase: el trabajo es lo primero.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': "Te quedas en casa los martes sin decir nada.", // nagelezen AI 22 nov
    'c.permit.w': "Tu integración también es una obligación. Muchas empresas ayudan cuando lo saben pronto. La gemeente también te puede ayudar a encajar tu plan con tu trabajo.", // nagelezen AI 22 nov
    'c.kids': "Tu hijo está enfermo", // nagelezen AI 22 nov
    'c.kids.b': "¿Tu hijo se pone enfermo de repente? Díselo enseguida a tu empresa. Para las primeras horas o días puedes tomar un permiso por emergencia (calamiteitenverlof), y tu empresa te sigue pagando. ¿Tu hijo necesita cuidados durante más tiempo? Entonces puedes pedir un permiso para cuidar (zorgverlof). ¿Estás embarazada? Tu empresa no te puede despedir por eso. Pregunta a tiempo por el permiso de maternidad y el permiso parental (ouderschapsverlof). Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nagelezen AI 22 nov
    'c.kids.p': "Mi hijo está enfermo. ¿Puedo irme antes hoy?", // nagelezen AI 22 nov
    'c.kids.s': "La guardería (kinderopvang) te llama al trabajo. Tu hijo tiene fiebre y tiene que irse a casa. ¿Qué haces?", // nagelezen AI 22 nov
    'c.kids.o1': "Se lo dices a tu encargado, y pides un permiso por emergencia.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': "Te vas sin decir nada, y lo explicas mañana.", // nagelezen AI 22 nov
    'c.kids.o3': "Te quedas en el trabajo, y dejas que tu hijo espere hasta el final de tu turno.", // nagelezen AI 22 nov
    'c.kids.w': "Un hijo enfermo es una emergencia en casa. Si se lo dices primero a tu encargado, puede organizar el trabajo. El permiso por emergencia es para momentos así.", // nagelezen AI 22 nov
    'c.body': "Di qué pasó y dónde te duele", // nagelezen AI 22 nov
    'c.body.b': "En el médico, di qué pasó y dónde te duele. Por ejemplo: “Ik ben gevallen. Mijn arm doet pijn.” Di también cuánto tiempo hace que te duele. No tienes que adivinar qué tienes: eso lo comprueba el médico. ¿Pasó en el trabajo? Díselo a tu encargado el mismo día.", // nagelezen AI 22 nov
    'c.body.p': "Me he caído. Me duele el brazo.", // nagelezen AI 22 nov
    'c.body.s': "En el trabajo has levantado una caja pesada. Ahora te duele mucho la espalda. Estás en el médico de cabecera (huisarts). ¿Qué dices?", // nagelezen AI 22 nov
    'c.body.o1': "Dónde te duele y qué pasó: levantaste una caja pesada.", // nagelezen AI 22 nov
    'c.body.o2': "Solo que te encuentras mal, nada más.", // nagelezen AI 22 nov
    'c.body.o3': "El nombre de una enfermedad que encontraste en internet.", // nagelezen AI 22 nov
    'c.body.w': "Si dices dónde te duele y qué pasó, el médico te entiende más rápido. El médico comprueba qué es. ¿Pasó en el trabajo? Díselo también a tu encargado.", // nagelezen AI 22 nov
    'c.jobends': "Termina tu trabajo: ¿qué más se acaba?", // nagelezen AI 22 nov
    'c.jobends.b': "Cuando termina tu trabajo, revisa tu finiquito (eindafrekening). Los días libres que no usaste y tu paga de vacaciones normalmente se pagan con él. La vivienda, el seguro médico o una furgoneta de la agencia pueden terminar al mismo tiempo. Contrata a tiempo tu propio seguro médico. Tu contrato de alquiler tiene sus propias normas: pide consejo antes de dejar la casa. ¿Te mudas, o te vas de los Países Bajos? Díselo a la gemeente. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nagelezen AI 22 nov
    'c.jobends.p': "¿Cuándo recibo mi finiquito?", // nagelezen AI 22 nov
    'c.jobends.s': "Tu trabajo termina el viernes. Tu seguro médico va a través de la agencia. ¿Qué haces?", // nagelezen AI 22 nov
    'c.jobends.o1': "Preguntas cuándo termina, y contratas el tuyo a tiempo.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': "Nada: el seguro sigue solo.", // nagelezen AI 22 nov
    'c.jobends.o3': { m: "Esperas hasta que te pongas enfermo, y entonces lo arreglas.", f: "Esperas hasta que te pongas enferma, y entonces lo arreglas.", x: 'Esperas hasta que te enfermes, y entonces lo arreglas.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.w': "El seguro a través de la agencia muchas veces termina cuando termina tu trabajo. Si vives o trabajas en los Países Bajos, normalmente tienes que tener seguro médico. Si lo arreglas a tiempo, no te quedas sin seguro.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "Terminar tu trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workorder': "La orden de trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkbon': "la orden de trabajo (un papel o una app con tu tarea)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lezen': "leer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aantal': "la cantidad (cuántos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.materiaal': "el material (lo que necesitas para el trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klaarleggen': "preparar (dejar listo lo que necesitas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handtekening': "la firma", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.1': "Primero leo la orden de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.2': "¿Está bien esta cantidad?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.3': "Preparo el material.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workorder.q': "¿Sabes lo que tienes que hacer?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workorder.a': "Casi. ¿Qué significa esta palabra de la orden de trabajo?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.handover': "¿Terminado o todavía no?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opruimen': "recoger, ordenar (guardar las cosas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nakijken': "revisar (mirar el trabajo otra vez)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afmelden': "avisar de que terminas (decir que el trabajo está hecho e irte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapot': "roto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opslot': "cerrado con llave", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderheid': "la puerta", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.1': "Recojo mi sitio.", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.2': "¿Puede revisar mi trabajo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.3': "Aviso al encargado de que termino.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.q': "¿Está todo terminado?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.a': "Casi. La habitación cuatro estaba cerrada con llave.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.tech': "En el taller", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workshop': "Herramientas del taller", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschap': "las herramientas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zagen': "serrar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slijpen': "amolar (pulir o cortar metal con una máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vonk': "la chispa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gehoorbescherming': "la protección auditiva (para los oídos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lawaai': "el ruido (mucho sonido fuerte)", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.1': "¿Dónde están las herramientas?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.2': "Cuando amolo, llevo protección auditiva.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.3': "¡Cuidado con las chispas!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.q': "¿Por qué llevas gafas?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.a': "Al serrar, me pueden entrar trocitos en el ojo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.power': "Primero, corta la corriente", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.stroom': "la corriente, la electricidad", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabel': "el cable", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stekker': "el enchufe (la clavija)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderspanning': "con tensión (tiene corriente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningsloos': "sin tensión, seguro (no tiene corriente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektricien': "el electricista", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.1': "¿Todavía hay corriente aquí?", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.2': "Este cable está roto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.3': "Espero hasta que esté sin tensión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.q': "¿Puedes cambiar esa lámpara?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.a': "¿Está cortada la corriente? Si no, espero al electricista.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.garage': "En el taller mecánico", // nieuw, nalezen // nagelezen AI 28 nov
    'l.garage': "Neumáticos, aceite y el elevador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.band': "el neumático", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olie': "el aceite", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accu': "la batería del coche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monteur': "el mecánico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hefbrug': "el elevador (levanta el coche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lek': "pinchado, que pierde (sale aire o agua)", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.1': "El neumático está pinchado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.2': "¿Dónde está el aceite nuevo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.3': "El coche está en el elevador.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.q': "¿Puedes cambiar los neumáticos de este coche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.a': "Sí. ¿Dónde están los neumáticos de invierno?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.carjob': "El cliente decide", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefrit': "la prueba de conducción", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijbewijs': "el carné de conducir, la licencia de conducir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.akkoord': "de acuerdo, vale (dices que sí)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kosten': "los costes (lo que hay que pagar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.repareren': "reparar, arreglar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdeel': "la pieza (de un coche o una máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.1': "¿Está el cliente de acuerdo con los costes?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.2': "Esta pieza está rota.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.3': "¿Puedo hacer una prueba de conducción?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carjob.q': "Los frenos también están mal. ¿Los haces ahora mismo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carjob.a': "Primero se lo pregunto al jefe. El cliente tiene que estar de acuerdo.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.stage': "Hacer prácticas", // nieuw, nalezen // nagelezen AI 28 nov
    'l.placement': "Tus prácticas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stage': "las prácticas (aprendes en una empresa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.praktijkopleider': "el tutor de empresa (te guía en la empresa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagebegeleider': "el tutor de prácticas del centro (te guía desde la escuela)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pok': "el convenio de prácticas (lo firman tú, la escuela y la empresa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.school': "la escuela", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerbedrijf': "la empresa formadora (una empresa donde los estudiantes pueden aprender)", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.1': "Hago las prácticas en un almacén.", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.2': "¿Quién es mi tutor de empresa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.3': "Todavía no he firmado el convenio de prácticas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.q': "¿Cuándo empiezas las prácticas?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.a': "El lunes. Primero firmamos el convenio de prácticas.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.review': "Comentarios sobre tus prácticas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beoordeling': "la evaluación (lo bien que lo haces)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerdoel': "el objetivo de aprendizaje (lo que quieres aprender)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorbeeld': "el ejemplo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portfolio': "el portafolio (una carpeta con tu trabajo y pruebas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cijfer': "la nota", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslag': "el informe (un texto sobre tu trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.1': "¿Qué puedo hacer mejor?", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.2': "¿Me puede dar un ejemplo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.3': "Mi evaluación es la semana que viene.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.q': "Tienes que trabajar más rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.a': "Vale. ¿Me puede enseñar cómo hacerlo más rápido?", // nieuw, nalezen // nagelezen AI 28 nov
    'u.society': "Participar en los Países Bajos", // nieuw, nalezen // nagelezen AI 28 nov
    'l.council': "El ayuntamiento y votar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stemmen': "votar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkiezing': "las elecciones", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gemeenteraad': "el concejo municipal (decide sobre tu ciudad)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parlement': "el parlamento (hace las leyes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempas': "la tarjeta de voto (la tarjeta que necesitas para votar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.burgemeester': "el alcalde, la alcaldesa", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.1': "¿Puedo votar?", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.2': "Mi tarjeta de voto llegó por correo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.3': "El concejo municipal decide sobre mi barrio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.q': "¿Vas a votar el miércoles?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.a': "Sí. Tengo mi tarjeta de voto y mi documento de identidad.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.police': "La policía y tus derechos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agent': "el agente de policía", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boete': "la multa (dinero que pagas como castigo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezwaar': "el recurso (dices por escrito que no estás de acuerdo)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.rechter': "el juez, la jueza", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advocaat': "el abogado, la abogada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wet': "la ley", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.1': "Me han puesto una multa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.2': "Quiero presentar un recurso.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.police.3': "Quiero hablar con un abogado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.police.q': "¿Me enseña su documento de identidad?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.police.a': "Sí, aquí lo tiene. ¿Qué pasa?", // nieuw, nalezen // nagelezen AI 28 nov
    'u.online': "En línea en el trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'l.login': "Iniciar sesión", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitloggen': "cerrar sesión", // nieuw, nalezen // nagelezen AI 28 nov
    'w.account': "la cuenta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherm': "la pantalla", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergrendelen': "bloquear (una pantalla o un teléfono)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebruikersnaam': "el nombre de usuario", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlogcode': "el código de acceso (un código por SMS o en una app)", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.1': "He olvidado mi contraseña.", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.2': "Siempre cierro la sesión.", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.3': "No le doy mi DigiD a nadie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.q': "¿Puedes iniciar sesión?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.a': "No, mi contraseña no funciona.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.phish': "Correos falsos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzender': "el remitente", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klikken': "hacer clic", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijlage': "el archivo adjunto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdacht': "sospechoso", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ictafdeling': "el departamento de informática", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijzigen': "cambiar", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.1': "Este correo es sospechoso.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.2': "No abro el archivo adjunto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.3': "Cambio mi contraseña ahora mismo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phish.q': "¿Has hecho clic en el enlace?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phish.a': "Sí. Llamo al departamento de informática.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mychoice': "Lo que se me da bien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedin': "bueno en (algo), que se te da bien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiezen': "elegir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beroep': "la profesión, el tipo de trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijbaan': "el trabajo a tiempo parcial (un trabajo pequeño mientras estudias)", // nieuw, nalezen // nagelezen AI ronde 3
    'w.nauwkeurig': "cuidadoso y preciso", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meeloopdag': "el día de observación (un día en que acompañas a alguien en su trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.1': "Sé trabajar bien con las manos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.2': "Me gusta trabajar con personas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.3': "¿Puedo acompañarlos un día para ver el trabajo?", // nieuw, nalezen // nagelezen AI 31 okt
    'c.mychoice.q': "¿Qué se te da bien?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mychoice.a': "Se me da bien cuidar de la gente. En casa cuido de mi madre.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nextstep': "Después de Entree", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau2': "el nivel 2 (el siguiente nivel del mbo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startkwalificatie': "la cualificación básica (un título mbo de nivel 2 o superior)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bbl': "la bbl (trabajas en una empresa y vas a la escuela más o menos un día a la semana)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorstromen': "seguir (a un nivel más alto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmelden': "inscribirse (en una escuela o un curso)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendag': "la jornada de puertas abiertas (puedes visitar una escuela)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.1': "Después de Entree quiero ir al nivel 2.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.2': "Quiero trabajar y estudiar a la vez.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.3': "¿Cuándo es la jornada de puertas abiertas?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.q': "¿Qué vas a hacer después de Entree?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.a': "Quiero hacer la bbl. Así trabajo y estudio.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.email': "Escribir al trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mail': "el correo electrónico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderwerp': "el asunto (de un correo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beste': "estimado, querido (al principio de una carta o un correo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beleefd': "educado, amable", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nalezen': "releer (revisar antes de enviar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.versturen': "enviar", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.1': "¿Qué pongo en el asunto?", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.2': "Leo mi correo una vez más.", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.3': "Envío el correo mañana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.email.q': "¿Has enviado el correo sobre tu día libre?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.email.a': "Todavía no. Primero lo vuelvo a leer.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.budget': "Tu dinero cada mes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastelasten': "los gastos fijos (alquiler, seguro, teléfono: cada mes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sparen': "ahorrar (dinero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.abonnement': "la suscripción (la pagas cada mes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterafbetalen': "pagar después (compra ahora, paga después)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedenktijd': "el plazo de desistimiento (tiempo para cambiar de idea)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garantie': "la garantía (tiene que funcionar, o te lo arreglan)", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.1': "Primero pago los gastos fijos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.2': "Ahorro un poco cada mes.", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.3': "Doy de baja esta suscripción.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.q': "¡Compra ese teléfono ahora y paga después!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.a': "No, gracias. Pagar después también es una deuda.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.healthy': "En forma para trabajar", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "dormir", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "el desayuno", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "moverse, estar activo", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "cansado", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "las drogas", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "decaído (triste durante mucho tiempo)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': { m: "Hoy estoy muy cansado.", f: "Hoy estoy muy cansada.", x: "Hoy tengo mucho cansancio." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.healthy.2': "Siempre desayuno primero.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "En la pausa doy un paseo corto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': "¿Quieres una pastilla? Así no te duermes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': "No, gracias. No trabajo bajo los efectos de nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': "Primero lee, luego empieza", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Antes de empezar, lee la orden de trabajo (werkbon) o la tarea en la app. Comprueba la dirección, la tarea y la cantidad de cosas. ¿Algo no está claro? Pregunta antes de empezar, no a mitad. Luego prepara tus herramientas y el material. Así ganas tiempo y cometes menos errores. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "En la orden pone diez cajas. ¿Es correcto?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "Tu orden de trabajo dice: pinta la habitación 3. Tu compañero dice que es la habitación 5. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Preguntas a tu encargado qué habitación es la correcta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "Pintas la habitación 3, porque lo pone la orden de trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "Pintas las dos habitaciones, así no hay duda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "Cuando dos cosas no coinciden, lo compruebas antes de empezar. Una pregunta corta cuesta menos tiempo que hacer el trabajo otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Di lo que está hecho y lo que no", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "Tu trabajo no termina cuando paras. Primero recoge tu sitio y tus herramientas. Luego pide a alguien que revise tu trabajo. Dile a tu encargado lo que está hecho y lo que no. ¿Algo salió mal o algo está roto? Dilo ahora, no mañana. Avisar de que terminas también es parte de tu trabajo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.p': "La habitación cuatro todavía no está terminada. La puerta estaba cerrada con llave.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': "Has limpiado cinco habitaciones. La habitación 4 estaba cerrada con llave. Tu turno termina. ¿Qué haces?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "Le dices a tu encargado: la 4 no está hecha.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "Te vas a casa: la 4 estaba cerrada, no es culpa tuya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o3': "Escribes “todo hecho” en la lista.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "Tu encargado planifica el trabajo. Si sabe que la habitación 4 no está hecha, puede mandar a otra persona. Así ningún cliente encuentra una habitación sucia.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Ojos, oídos y fuego", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Amolar, serrar y taladrar hacen chispas, trocitos y mucho ruido. Lleva gafas de seguridad y protección auditiva, también para un trabajo corto. Cuando hay mucho ruido, tu empresa tiene que darte protección auditiva. Las chispas pueden provocar un incendio. Para soldar, o amolar cerca de cosas que pueden arder, hay normas extra (heet werk): pregunta antes de empezar. Después del trabajo, recoge los trocitos de metal. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "Voy a amolar. ¿Dónde está la protección auditiva?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Tienes que amolar una pieza pequeña de metal. Tardas un minuto. Tus gafas de seguridad están en la otra sala. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Primero vas a por tus gafas, también para un minuto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Amolas con los ojos medio cerrados, es rápido.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Pones la otra mano delante de los ojos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "Una chispa o un trocito de metal en el ojo puede dañarte el ojo para siempre. Eso puede pasar en un segundo. Las gafas de seguridad ayudan, también para un trabajo corto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "La electricidad: nunca a la ligera", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': "Nunca trabajes en algo que tenga corriente (onder spanning). Primero un compañero formado lo deja seguro: corta la corriente y lo comprueba. Solo las personas con la formación adecuada pueden hacerlo. ¿Ves un cable o un enchufe roto? No lo uses y díselo enseguida a tu encargado. ¿No sabes si la corriente está cortada? Entonces da por hecho que hay corriente. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Veo un cable roto. ¿Quién lo puede mirar?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Tienes que colgar una lámpara. Un compañero dice: “La corriente está cortada, creo”. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Pides a un compañero formado que compruebe que no hay corriente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Empiezas, pero te pones guantes gruesos para tocar los cables.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Enciendes y apagas la luz para comprobar que no hay corriente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "“Creo” no basta con la electricidad. Una descarga puede matarte. Un compañero formado comprueba que no hay corriente, y entonces puedes empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "Seguro debajo de un coche", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Nunca te metas debajo de un coche que solo está sobre un gato. El coche tiene que estar firme sobre el elevador o sobre caballetes. El aceite derramado hace que el suelo resbale: límpialo enseguida. El aceite usado, las baterías y los productos de limpieza son residuos peligrosos. Van a un sitio especial, nunca a la basura normal ni al desagüe. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "Hay aceite en el suelo. Lo limpio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Tienes que mirar debajo de un coche que solo está sobre un gato. Un compañero dice: “No pasa nada, hazlo rápido”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "Esperas al elevador o a los caballetes.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "Te metes debajo rápido, con las piernas fuera.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "Pides a tu compañero que sujete el coche.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "Un gato puede resbalar. Un coche pesa mucho, y debajo de él no puedes salir rápido. Los caballetes o un elevador mantienen el coche en su sitio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "¿Trabajo extra? Primero pregunta al cliente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': "¿Encuentras más problemas de los que pone en la orden de trabajo? No los arregles sin más. El cliente tiene que aceptar primero el trabajo extra y los costes. Tu encargado o la recepción llama al cliente. Una prueba de conducción solo con permiso, y solo con un carné de conducir válido. Apunta lo que hiciste y qué piezas usaste. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Veo otro problema. ¿Quién llama al cliente?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Cambias el aceite de un coche. Los frenos también están mal. Tiene que estar listo en una hora. ¿Qué haces?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Se lo dices a tu encargado, para que llame al cliente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o2': "Arreglas también los frenos, por seguridad.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "No dices nada: no están en la orden de trabajo.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "El cliente paga, así que el cliente decide. Sin su visto bueno, el taller no puede hacer trabajo extra sin más. Unos frenos malos son peligrosos, así que es importante avisar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Primero firma, luego empieza", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': { m: "En Entree aprendes mucho en una empresa: son tus prácticas (stage o bpv). Antes de empezar, tú, la escuela y la empresa firman un convenio: el POK. En la empresa te ayuda tu tutor de empresa (praktijkopleider). En la escuela te ayuda tu tutor de prácticas (stagebegeleider). ¿Estás enfermo? Llama a la empresa antes de tu hora de entrada, y avisa también a la escuela. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas.", f: "En Entree aprendes mucho en una empresa: son tus prácticas (stage o bpv). Antes de empezar, tú, la escuela y la empresa firman un convenio: el POK. En la empresa te ayuda tu tutor de empresa (praktijkopleider). En la escuela te ayuda tu tutor de prácticas (stagebegeleider). ¿Estás enferma? Llama a la empresa antes de tu hora de entrada, y avisa también a la escuela. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas.", x: "En Entree aprendes mucho en una empresa: son tus prácticas (stage o bpv). Antes de empezar, tú, la escuela y la empresa firman un convenio: el POK. En la empresa te ayuda tu tutor de empresa (praktijkopleider). En la escuela te ayuda tu tutor de prácticas (stagebegeleider). ¿Te encuentras mal? Llama a la empresa antes de tu hora de entrada, y avisa también a la escuela. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.placement.p': "Solo empiezo cuando el convenio de prácticas esté firmado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': "La empresa te pide que empieces mañana. El POK todavía no está firmado. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Pides a tu tutor de prácticas que arregle antes el POK.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Empiezas mañana y firmas el POK cuando tengas tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Empiezas, pero de momento no se lo dices a la escuela.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "El POK dice qué aprendes y quién te ayuda. Sin un POK firmado, puede que tus prácticas no cuenten para tu título. Por eso lo firmas antes de empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Pide comentarios, y un ejemplo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': "En tus prácticas te dicen qué va bien y qué puede mejorar: son comentarios (feedback). Es normal, y te ayuda a aprender. ¿No lo entiendes? Pide un ejemplo. Pide comentarios tú también, por ejemplo una vez a la semana. ¿Algo va realmente mal en tus prácticas? Primero habla con tu tutor de empresa. ¿No sirve? Entonces ve a tu tutor de prácticas de la escuela.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "¿Qué salió bien y qué puede mejorar?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "Tu tutor de empresa dice: “Tienes que trabajar con más cuidado”. No sabes qué quiere decir. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Pides un ejemplo de lo que tienes que hacer distinto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': { m: "Dices que sí y esperas entenderlo tú solo.", f: "Dices que sí y esperas entenderlo tú sola.", x: "Dices que sí y esperas entenderlo sin ayuda." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.review.o3': "A partir de ahora trabajas mucho más despacio, para que nada salga mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Con un ejemplo sabes qué cambiar. Preguntar demuestra que quieres aprender. A los tutores les gusta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "¿Quién puede votar?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "En los Países Bajos eliges, votando, quién decide. El concejo municipal (gemeenteraad) decide sobre tu ciudad. La Tweede Kamer hace las leyes para todo el país. Con la nacionalidad neerlandesa puedes votar en todas las elecciones, desde los 18 años. Más personas pueden votar para el concejo municipal. La gente de otro país de la UE que vive aquí puede votar. La gente de fuera de la UE puede votar después de 5 años de residencia legal. El ayuntamiento (gemeente) te envía una tarjeta de voto (stempas). Llévala con tu documento de identidad. ¿No sabes si puedes votar? Pregunta en el ayuntamiento.", // nagelezen AI 22 nov
    'c.council.p': "¿Puedo votar para el concejo municipal?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Vienes de Marruecos y vives aquí legalmente desde hace seis años, sin la nacionalidad neerlandesa. ¿Qué es cierto?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "Puedes votar para el concejo municipal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "También puedes votar para la Tweede Kamer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Sin pasaporte neerlandés no puedes votar.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "Después de 5 años de residencia legal puedes votar para el concejo municipal. Para la Tweede Kamer necesitas la nacionalidad neerlandesa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "Tu documento y tus derechos", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': "Desde los 14 años tienes que enseñar tu documento de identidad cuando la policía te lo pida. Así que llévalo siempre encima. ¿Recibiste una carta del ayuntamiento o del UWV, por ejemplo? ¿No estás de acuerdo con la decisión de la carta? Entonces puedes presentar una reclamación por escrito (bezwaar maken). Hazlo antes de la fecha que pone en la carta. La policía y el juez tienen que tratar a todos por igual. ¿Te detienen? Puedes pedir un abogado. El Juridisch Loket da consejos gratis.", // nagelezen AI 22 nov
    'c.police.p': "No estoy de acuerdo con esta decisión. Presento una reclamación.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Recibes una carta del ayuntamiento. No estás de acuerdo con su decisión. La carta dice que tienes seis semanas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Escribes una carta de reclamación, antes de la fecha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Los llamas una vez y esperas a que te devuelvan la llamada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Esperas: después de seis semanas se acaba solo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "La reclamación se hace por escrito, antes de la fecha que pone en la carta. Después de esa fecha, muchas veces es tarde. El Juridisch Loket te puede ayudar a escribirla.", // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.login': "Tu acceso es solo tuyo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "Tu contraseña y tu DigiD son solo para ti. No se los des a nadie, tampoco a tu empresa ni a un compañero. En un ordenador compartido, cierra siempre la sesión cuando termines. ¿Te vas un momento? Bloquea la pantalla. ¿Has olvidado tu contraseña? Pide una nueva al departamento de informática (ICT-afdeling). Las normas de los ordenadores cambian de una empresa a otra: pregunta al departamento de informática cuáles son en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Me voy un momento. Bloqueo la pantalla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "Tu encargado te pide tu DigiD y tu contraseña para arreglar rápido tus papeles. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': "Dices que no, y entras tú mientras te ayuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "Se los das esta vez, porque es tu jefe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Los escribes en un papel, para que los use luego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': "Con tu DigiD, alguien puede ver y cambiar tus impuestos, tus prestaciones y tus papeles de salud. Es solo para ti. Puedes entrar tú y dejar que alguien te ayude.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "¿Prisa y un botón? No hagas clic", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': "Un correo falso (phishing) muchas veces parece real. Quiere que actúes rápido: “¡Tu cuenta se cerrará hoy!” Comprueba el remitente. No hagas clic en un enlace ni abras un archivo adjunto que no esperabas. Ve tú a la web o la app de verdad. ¿Has hecho clic de todos modos? Cambia tu contraseña enseguida, y llama al departamento de informática. No es una vergüenza: cuanto antes lo sepan, mejor. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "He hecho clic en un enlace sospechoso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': "Has hecho clic en un enlace de un correo y has escrito tu contraseña. Luego ves que el correo era falso. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o1': "Cambias tu contraseña y llamas a informática.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Borras el correo, para que nadie más haga clic en él.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Esperas un día para ver si algo sale mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Con tu contraseña, otra persona puede entrar en los sistemas de tu trabajo. Si la cambias rápido y avisas a informática, lo pueden parar a tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Tus puntos fuertes cuentan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': "¿Qué se te da bien? Piensa en el trabajo, la escuela y tu casa. Cuidar de tu familia, un trabajo extra o el voluntariado también cuentan. ¿Qué te gusta y qué no te gusta? ¿No sabes qué trabajo te va? Pide acompañar a alguien en su trabajo durante un día (meeloopdag). Tu tutor de la escuela puede ayudarte a elegir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "Sé tratar bien con la gente. En casa ayudo mucho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': "En la escuela te preguntan: “¿Qué se te da bien?”. Nunca has tenido un trabajo pagado. ¿Qué dices?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "Lo que haces bien en casa, como cuidar de otros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "Que todavía no lo sabes, porque nunca has tenido trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "Que puedes hacer cualquier trabajo, absolutamente todo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "Lo que sabes hacer en casa también cuenta. Cuidar, planificar y ayudar son habilidades que las empresas necesitan. Di lo que hiciste, con un ejemplo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "Después de Entree: nivel 2 o trabajo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Con un título de Entree puedes seguir al nivel 2 del mbo. Un título de nivel 2 o superior es una cualificación básica (startkwalificatie). Te ayuda a encontrar trabajo y a mantenerlo. En la bbl trabajas en una empresa y vas a la escuela más o menos un día a la semana. Para eso necesitas un trabajo o un puesto de formación y trabajo (leerwerkbaan). Ve a una jornada de puertas abiertas y habla con tu tutor de la escuela.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "¿Puedo ir al nivel 2 después de Entree?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Tienes tu título de Entree. Una empresa te ofrece un trabajo sin formación. Tú también quieres seguir aprendiendo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Preguntas a la empresa si es posible un puesto de bbl.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "Aceptas el trabajo y dejas de estudiar para siempre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Te quedas en casa hasta que te llame una escuela.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "Con la bbl trabajas y aprendes a la vez. Ganas dinero y consigues un título de nivel 2. A muchas empresas les gusta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Un correo corto: quién, qué, cuándo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "Un correo al trabajo es corto y educado. Empieza con un saludo, como “Beste Karin,”. Luego di lo que quieres, y cuándo. Termina con un saludo y tu nombre completo. Escribe un asunto corto, como “Vrij op vrijdag”. Lee tu correo otra vez antes de enviarlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Hola, Karin: ¿puedo tener libre el viernes? Saludos, Ali Haddad", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': "Quieres el viernes que viene libre. ¿Qué correo a tu encargado es el mejor?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "“Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "“Vrijdag ben ik er niet.” (sin saludo y sin tu nombre).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Un correo largo sobre tu semana, con la pregunta al final.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "Un buen correo tiene un saludo, una pregunta clara y tu nombre. Así tu encargado puede contestar rápido.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "Primero los gastos fijos", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': "Cuando cobras, primero paga los gastos fijos: el alquiler, el seguro y el teléfono. Intenta ahorrar una cantidad pequeña cada mes, aunque sean 10 euros. Comprar ahora y pagar después también es una deuda. ¿Has comprado algo por internet? Entonces normalmente puedes cambiar de idea en un plazo de 14 días. Guarda el tique: lo necesitas para la garantía.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.p': "Prefiero pagar ahora. Así no tengo deudas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Hoy cobras. Quieres unos zapatos nuevos, y todavía tienes que pagar el alquiler. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Pagas primero el alquiler, y luego ves lo que queda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Compras los zapatos y pagas el alquiler más tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Compras los zapatos con “compra ahora, paga después”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "El alquiler, el seguro y el teléfono vuelven cada mes. Si los pagas primero, sabes cuánto dinero te queda. Así no tienes deudas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Dormir, comer y nada de drogas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': { m: "Trabajas mejor y con más seguridad cuando duermes lo suficiente, también después de un turno de tarde. Desayuna, y bebe agua durante el día. Muévete en la pausa, por ejemplo con un paseo corto. Trabajar bajo los efectos del alcohol o las drogas es peligroso, y la mayoría de las empresas lo prohíben. ¿Te sientes decaído desde hace tiempo, o no puedes dejar de beber o de consumir? Habla con tu médico de cabecera (huisarts). Te puede ayudar, y lo guarda en secreto.", f: "Trabajas mejor y con más seguridad cuando duermes lo suficiente, también después de un turno de tarde. Desayuna, y bebe agua durante el día. Muévete en la pausa, por ejemplo con un paseo corto. Trabajar bajo los efectos del alcohol o las drogas es peligroso, y la mayoría de las empresas lo prohíben. ¿Te sientes decaída desde hace tiempo, o no puedes dejar de beber o de consumir? Habla con tu médico de cabecera (huisarts). Te puede ayudar, y lo guarda en secreto.", x: "Trabajas mejor y con más seguridad cuando duermes lo suficiente, también después de un turno de tarde. Desayuna, y bebe agua durante el día. Muévete en la pausa, por ejemplo con un paseo corto. Trabajar bajo los efectos del alcohol o las drogas es peligroso, y la mayoría de las empresas lo prohíben. ¿Tienes el ánimo bajo desde hace tiempo, o no puedes dejar de beber o de consumir? Habla con tu médico de cabecera (huisarts). Te puede ayudar, y lo guarda en secreto." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.healthy.p': { m: "Me siento decaído desde hace tiempo. ¿Puedo pedir cita?", f: "Me siento decaída desde hace tiempo. ¿Puedo pedir cita?", x: "Tengo el ánimo bajo desde hace tiempo. ¿Puedo pedir cita?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.healthy.s': "Esta noche tienes turno de noche. Un compañero te ofrece una pastilla para no dormirte. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "Dices que no, y duermes unas horas antes del turno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Te tomas media pastilla, eso no es peligroso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Te la tomas, pero no se lo dices a nadie en el trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Las pastillas de un compañero pueden ser drogas. Te pueden hacer daño o hacer que cometas errores en el trabajo. Dormir es la forma segura de estar alerta en el trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.sick': "La enfermedad", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Trabajar con alimentos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mes': "el cuchillo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijhandschoen': "el guante anticorte (un guante contra los cortes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vriescel': "la cámara de congelación (una sala muy fría)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sieraden': "las joyas (un anillo, un reloj, unos pendientes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pleister': "la tirita, la curita (para un corte pequeño)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vlees': "la carne", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.1': "Me quito las joyas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.2': "¿Dónde están los guantes anticorte?", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.3': "En la cámara de congelación llevo un abrigo caliente.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.q': "¿Por qué limpiamos ahora la línea?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.a': "Después viene un producto sin frutos secos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food': "Manos limpias, alimentos seguros", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Trabajar con alimentos tiene normas de higiene estrictas: una redecilla para el pelo, ropa de trabajo limpia, manos lavadas y nada de joyas. Estas normas son iguales para todos. No dicen nada sobre ti: mantienen los alimentos seguros para las personas que los comen. Con un cuchillo, lleva siempre tu guante anticorte. En una sala fría o en una cámara de congelación, ponte la ropa de abrigo que te dan, y entra en calor en tu pausa. ¿Te encuentras mal, o tienes una herida en la mano? Avísalo antes de empezar. Entonces puedes recibir una tirita especial, u otro trabajo durante un tiempo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Tengo un pequeño corte en la mano. ¿Me da una tirita?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "En casa te has hecho un pequeño corte en el dedo. Hoy trabajas con carne. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Se lo dices a tu encargado, y pides una tirita.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "No dices nada: solo es un corte pequeño.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Te pones un guante encima, para que nadie lo vea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Una herida pequeña puede llevar gérmenes a los alimentos. Si lo avisas, puedes recibir una tirita especial u otro trabajo durante un tiempo. Avisarlo es normal: nadie te lo echa en cara.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transporte y reparto", // nieuw, nalezen // nagelezen AI 28 nov
    'l.parcel': "Repartir paquetes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pakket': "el paquete", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestelbus': "la furgoneta de reparto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezorgen': "repartir, entregar (llevar al cliente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inladen': "cargar (meter cosas en la furgoneta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbellen': "llamar al timbre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewijs': "la prueba (algo que muestra lo que pasó)", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.1': "Escaneo cada paquete.", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.2': "El cliente no está en casa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.3': "¿Puede quedarse con un paquete para los vecinos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.q': "¿Este paquete es para mí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.a': "Sí. ¿Puede firmar aquí, por favor?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.road': "Seguridad y trabajo justo en la carretera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijden': "conducir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaar': "pesado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekwagen': "la carretilla de mano (un carrito para cajas pesadas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.route': "la ruta (el camino que haces con el vehículo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loondienst': "por cuenta ajena (trabajas para un jefe y cobras un sueldo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bepalen': "decidir (decir cómo hay que hacerlo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.1': "Este paquete pesa demasiado. Voy a buscar la carretilla.", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.2': "Está resbaladizo. Conduzco despacio.", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.3': "¿Quién decide mi ruta y mis horarios?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.q': "¿Puedes hacer un reparto más hoy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.a': "No, entonces no tengo tiempo para mi pausa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel': "Nadie en casa, o un paquete roto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "¿El cliente no está en casa? Sigue las normas de tu empresa: prueba con los vecinos, o llévate el paquete de vuelta. No lo dejes sin más en la puerta, salvo que el cliente lo haya pedido. ¿Un paquete está roto o mojado? No lo entregues como si no pasara nada. Haz una foto como prueba, y avísalo en el escáner o en la app. Decir la verdad sobre un problema siempre es mejor que esconderlo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Este paquete está roto. Aquí tiene una foto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "El cliente no está en casa, y los vecinos tampoco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "Escaneas “no está en casa”, y te llevas el paquete de vuelta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "Lo escaneas como entregado, y lo dejas en la puerta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Lo escondes detrás del contenedor, para que nadie lo vea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "Un paquete escaneado como entregado tiene que estar de verdad con el cliente. Si escaneas lo que pasó de verdad, el cliente puede recibir el paquete más tarde, y nadie piensa que lo has perdido.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "Seguro en la carretera, y un trabajo justo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Nunca tengas el móvil en la mano mientras conduces: está prohibido. Usa un soporte para el navegador. Haz tus pausas, también en un día con mucho trabajo. ¿Un paquete pesado? Usa la carretilla de mano, o levántalo entre dos. ¿Hielo o nieve? Conduce despacio: llegar tarde es mejor que un accidente. Algunas empresas dicen que trabajas por tu cuenta (zelfstandig). Pero ¿quién decide tus horas, tu ruta y tu ropa? Si la empresa decide todo eso, puede que en realidad trabajes por cuenta ajena (in loondienst). Entonces muchas veces tienes más derechos, como cobrar cuando estás de baja. Más sobre esto en la lección “Papeles, integración y tu trabajo”. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Ahora hago mi pausa. Luego sigo conduciendo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': { m: "La empresa dice que eres autónomo. Pero decide tus horas, tu ruta y tu ropa. ¿Qué haces?", f: "La empresa dice que eres autónoma. Pero decide tus horas, tu ruta y tu ropa. ¿Qué haces?", x: "La empresa dice que trabajas por tu cuenta. Pero decide tus horas, tu ruta y tu ropa. ¿Qué haces?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': { m: "Pides consejo: quizá eres asalariado.", f: "Pides consejo: quizá eres asalariada.", x: "Pides consejo: quizá trabajas por cuenta ajena." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Nada: el contrato dice “autónomo”, así que es así.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Trabajas más horas, para ganar lo mismo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "Lo que cuenta es cómo trabajas de verdad, no solo la palabra del contrato. Si la empresa decide cómo, cuándo y dónde trabajas, muchas veces trabajas por cuenta ajena. Entonces tienes más derechos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "Sentirte bien en el trabajo", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "la presión del trabajo (demasiado trabajo en poco tiempo)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "estar despierto en la cama (no puedes dormir)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "el trabajo por turnos (turnos de mañana, tarde y noche que se alternan)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "la nostalgia (echas de menos tu casa)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "la familia", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "solo (sin nadie)", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Duermo mal por el trabajo por turnos.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': { m: "Es demasiado. No puedo con esto solo.", f: "Es demasiado. No puedo con esto sola.", x: "Es demasiado. No puedo con esto sin ayuda." }, // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "Echo de menos mi casa. Mi familia está lejos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "¿Estás bien?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "No muy bien. Muchas noches no puedo dormir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': "¿Demasiado? No tienes que hacerlo sin ayuda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Todo el mundo se siente a veces cansado, estresado o triste. Demasiado trabajo (werkdruk), dormir mal por los turnos o echar de menos a tu familia pueden hacerlo pesado. No tienes que cargar con ello sin ayuda, y decir “es demasiado” no es ser débil. Habla con alguien de confianza. Por ejemplo tu encargado, el médico de empresa (bedrijfsarts) o tu médico de cabecera (huisarts). O la persona de confianza (vertrouwenspersoon), si tu empresa tiene una. También puedes pedir por tu cuenta una conversación con el médico de empresa. Los médicos no le cuentan a tu jefe lo que les has dicho. ¿Piensas en el suicidio, o te preocupa alguien? Llama al 113 (gratis, de día y de noche), o chatea en 113.nl.", // nagelezen AI 22 nov
    'c.feelwell.p': "No estoy muy bien. ¿Puedo hablar contigo un momento?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': { m: "Desde hace semanas duermes mal y el trabajo es demasiado. Te sientes muy cansado. ¿Qué haces?", f: "Desde hace semanas duermes mal y el trabajo es demasiado. Te sientes muy cansada. ¿Qué haces?", x: "Desde hace semanas duermes mal y el trabajo es demasiado. Sientes mucho cansancio. ¿Qué haces?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "Se lo dices a tu encargado o al médico de empresa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "No dices nada, y trabajas más y más rápido.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Te quedas en casa, y no le dices a nadie por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Decirlo pronto no es ser débil. Entonces se puede buscar una solución entre todos, por ejemplo otros turnos. No tienes que hacerlo sin ayuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Volver al trabajo después de una enfermedad", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "ir aumentando (despacio, paso a paso)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "medias jornadas (trabajas una parte del día)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "el trabajo ligero (no pesado)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "el trabajo pesado", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "recuperarse, ponerse bien otra vez", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "bienvenido de nuevo", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Empiezo con medias jornadas.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Ya puedo hacer trabajo ligero. Trabajo pesado, todavía no.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "El médico de empresa dice: ir aumentando despacio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': { m: "¡Bienvenido de nuevo! ¿Te encuentras mejor?", f: "¡Bienvenida de nuevo! ¿Te encuentras mejor?", x: "¡Qué bien que vuelvas! ¿Te encuentras mejor?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.backtowork.a': "Sí, va mejor. Me lo tomo con calma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Volver paso a paso", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "¿Ya estás bien? Dile a tu empresa que puedes volver a trabajar (betermelden). Después de una enfermedad larga, muchas veces empiezas paso a paso: primero menos horas, o un trabajo más ligero. El médico de empresa (bedrijfsarts) te aconseja sobre lo que puedes hacer. ¿Llevas mucho tiempo de baja? Entonces haces un plan para tu vuelta junto con tu empresa. Así lo dice la ley (Wet verbetering poortwachter). Di claramente lo que puedes hacer, y lo que todavía no. No tienes que contar a tus compañeros qué enfermedad has tenido. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Esto ya lo puedo hacer. Eso todavía no.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': { m: "Has estado enfermo tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico de empresa dijo: por ahora, solo trabajo ligero. ¿Qué haces?", f: "Has estado enferma tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico de empresa dijo: por ahora, solo trabajo ligero. ¿Qué haces?", x: "Has estado de baja tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico de empresa dijo: por ahora, solo trabajo ligero. ¿Qué haces?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Dices con calma que ahora puedes hacer trabajo ligero, y lo que todavía no puedes hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Levantas las cajas de todos modos: no quieres poner problemas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Te vas a casa sin decir nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Tu encargado quiere que vuelvas, y con buena salud. Si dices claramente lo que puedes hacer, puede organizar el trabajo. Hacer demasiado demasiado pronto puede hacer que vuelvas a enfermar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "Medir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolmaat': "la cinta métrica, el metro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpas': "el nivel (muestra si algo está recto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meten': "medir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechtlijn': "recto (no torcido)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plank': "la tabla, el tablón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroef': "el tornillo", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.1': "¿Cuánto mide de largo esta tabla?", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.2': "La pared no está recta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.3': "Lo mido dos veces.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.q': "¿Qué ancho tiene que tener?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.a': "Noventa centímetros. Lo apunto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure': "Mide dos veces, sierra una", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "En una obra, las medidas van muchas veces en milímetros. Así que “novecientos” puede querer decir 90 centímetros. ¿Tienes dudas? Pregunta: “¿Son milímetros o centímetros?” Repite el número, y apúntalo. Mide dos veces antes de serrar o taladrar: una tabla demasiado corta se queda demasiado corta. ¿Te has equivocado? Dilo enseguida. Así el equipo todavía puede arreglarlo, y cuesta menos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "¿Eso es en milímetros o en centímetros?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "Tu compañero te dice una medida en voz alta. No la has oído bien. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Repites el número, y preguntas si es correcto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Sierras la tabla con la medida que crees que has oído.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Esperas a que él venga a mirar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Una medida equivocada cuesta material y tiempo. Repetir el número son dos segundos, y en una obra lo hace todo el mundo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Una obra ordenada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bouwplaats': "la obra", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvoerder': "el jefe de obra (el que manda en la obra)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.keet': "la caseta de obra (para las pausas y las reuniones)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afval': "los residuos, la basura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.container': "el contenedor (un cubo muy grande para los residuos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struikelen': "tropezar (caerte por culpa de algo en el suelo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.1': "Los residuos van al contenedor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.2': "El jefe de obra está en la caseta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.3': "Cuidado, aquí puedes tropezar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.q': "¿Dónde va esta madera?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.a': "En el contenedor que está en la entrada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday': "Una obra ordenada es una obra segura", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "En una obra, recoger es parte del trabajo, para todos. Las tablas sueltas, los cables y los residuos hacen que la gente tropiece y se caiga. Por eso, recoge tu sitio durante el día, no solo al final. Los residuos se separan: la madera, la piedra y el metal van muchas veces en contenedores distintos. ¿No sabes en cuál? Pregunta. ¿Ves un clavo que sobresale, o un agujero sin tapa? Arréglalo si puedes hacerlo de forma segura, o díselo al jefe de obra (de uitvoerder). Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Yo recojo esto. Así nadie tropieza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Hay tablas con clavos en el camino. No son tuyas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Las apartas, o se lo dices al jefe de obra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Pasas por encima: no son tus tablas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Esperas: ya las recogerá otra persona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Todos usan los mismos caminos. Quien ve un peligro, hace algo: eso es lo normal en una obra.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Pasar el turno", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vroegedienst': "el turno de mañana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.latedienst': "el turno de tarde", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtdienst': "el turno de noche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdracht': "el relevo (le cuentas al turno siguiente lo que ha pasado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflossen': "relevar (llega la siguiente persona, y tú puedes irte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teamleider': "el jefe de equipo", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.1': "Esta semana tengo el turno de tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.2': "¿Quién me releva?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.3': "La máquina dos ha tenido una avería.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.q': "¿Ha pasado algo en tu turno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.a': "Sí. La línea ha estado parada media hora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts': "Cuéntaselo al turno siguiente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Una fábrica funciona muchas veces día y noche, por turnos. Al final de tu turno, un compañero ocupa tu sitio. No te vayas sin más: espera hasta que tu compañero esté allí. Cuenta en pocas palabras lo que ha pasado: una avería, un producto que salió mal, algo que no está terminado. Muchas empresas tienen también una lista o una pantalla para esto. Un problema que no cuentas vuelve en el turno siguiente, y entonces nadie sabe por qué. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "La máquina ha tenido una avería. Ahora funciona otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Tu turno ha terminado. Tu compañero llega cinco minutos tarde. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Esperas, y se lo dices al jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Te vas a casa: tu turno ha terminado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Paras la máquina y te vas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Una máquina en marcha no puede quedarse sola. Si esperas y avisas, el trabajo sigue de forma segura, y el jefe de equipo puede resolverlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Di lo que ves", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duizelig': "mareado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.misselijk': "con náuseas (sientes que vas a vomitar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benauwd': "con falta de aire", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koorts': "la fiebre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verward': "confuso (la persona no sabe dónde está)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.anders': "distinto (no como siempre)", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.1': "La señora está mareada.", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.2': "El señor no come hoy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.3': "¿Puedes venir a mirar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.q': "¿Cómo está el señor Jansen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.a': "Está confuso. Ayer no estaba así.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals': "Tú ves al cliente todos los días", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Muchas veces eres la persona que más ve a un cliente. Por eso eres quien nota primero que algo es distinto: come menos, tiene más dolor, está confuso, le falta el aire. No tienes que saber qué es. Di lo que ves, y di cuándo lo viste. Díselo a la enfermera el mismo día, y apúntalo si es tu tarea. ¿Parece grave? No esperes: llama a la enfermera enseguida. Mejor una vez de más que una vez de menos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "La señora no come y está mareada. No es lo normal en ella.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Una clienta está callada hoy y no quiere comer. Normalmente habla mucho. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Le dices a la enfermera lo que ves, hoy mismo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Esperas unos días: quizá se le pasa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Le das una pastilla del armario.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Un cambio pequeño puede ser la primera señal de una enfermedad. Tú no decides qué es: eso lo hace la enfermera. Pero ella solo puede hacer algo si tú se lo dices.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Ayudar a alguien a levantarse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tillift': "la grúa (una máquina que levanta a una persona)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rollator': "el andador con ruedas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bed': "la cama", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstaan': "levantarse, ponerse de pie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaanzitten': "sentarse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorzichtig': "con cuidado, con suavidad", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.1': "Le ayudo a levantarse.", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.2': "¿Quiere sentarse un momento?", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.3': "Primero voy a buscar la grúa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.q': "¿Puedes levantar a la señora de la cama?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.a': { m: "Yo solo no. Voy a buscar la grúa.", f: "Yo sola no. Voy a buscar la grúa.", x: "Sin ayuda no. Voy a buscar la grúa." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer': "Primero lo dices, luego ayudas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Antes de tocar a un cliente, di lo que vas a hacer: “Ik help u nu met opstaan.” Así el cliente no se asusta, y puede ayudar. Deja que el cliente haga lo que todavía puede hacer: así se mantiene fuerte. No levantes a una persona sin ayuda. Usa las ayudas que hay, como la grúa, y trabaja como te han enseñado. ¿Todavía no te lo han enseñado? Pregunta primero. Tu espalda tiene que durar toda una vida de trabajo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Ahora le ayudo a levantarse. ¿Empezamos?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Una clienta quiere levantarse de la cama. Todavía no has aprendido a usar la grúa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Se lo pides a un compañero que sabe usar la grúa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "La levantas tú: no pesa mucho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Pruebas la grúa: no puede ser difícil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Levantar mal a una persona puede hacer daño al cliente y a tu espalda. Pedir ayuda a un compañero son unos minutos. Una caída puede ser cosa de meses.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Fregar los platos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwas': "los platos sucios, fregar los platos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwasser': "el lavavajillas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bord': "el plato", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glas': "el vaso, el vidrio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestek': "los cubiertos (cuchillo, tenedor y cuchara)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdrogen': "secar (con un paño)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.1': "El lavavajillas ha terminado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.2': "Cuidado, se ha roto un vaso.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.3': "Ya no quedan cubiertos limpios.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.q': "¿Quedan vasos limpios?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.a': "Sí, ahora mismo los traigo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes': "Vidrio roto: dilo enseguida", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "En una cocina se rompen vasos. Es normal, y nadie se enfada por eso. Pero dilo enseguida, alto y claro: “Glas!” No recojas los trozos con las manos sin guantes: usa un cepillo. ¿Ha caído vidrio cerca de la comida, o en el hielo? Entonces hay que tirar esa comida o ese hielo, todo. Un trocito de vidrio en un plato de comida es muy peligroso para un cliente. El vidrio va en su propio cubo, no en una bolsa que alguien levanta. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "¡Cuidado, vidrio! Lo recojo ahora mismo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Se rompe un vaso encima del hielo para las bebidas. Hay muchísimo trabajo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Lo dices, y tiras todo el hielo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Sacas los trozos que se ven.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "No dices nada: ahora hay demasiado trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Los trocitos de vidrio no se ven en el hielo. El hielo nuevo cuesta poco. Un cliente con vidrio en la bebida puede hacerse mucho daño.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Cuando hay mucho trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heet': "muy caliente, que quema", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chef': "el chef (el jefe de la cocina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terras': "la terraza (mesas fuera)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tafel': "la mesa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dienblad': "la bandeja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachten': "esperar", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.1': "¡Quema! Paso por detrás de ti.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.2': "La mesa seis está esperando la comida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.3': "Llevo esto a la terraza.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.q': "¿Puedes atender la mesa cuatro?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.a': "Sí, chef. Ya voy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush': "Palabras cortas cuando hay mucho trabajo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Cuando hay mucho trabajo, en una cocina la gente habla con palabras cortas: “Heet!”, “Achter!”, “Tafel zes!” Eso no es mala educación. Es rápido y seguro: todos saben dónde están las ollas calientes y los cuchillos. Grita tú también “Heet!” o “Achter!” cuando pasas por detrás de alguien. ¿Has oído un pedido? Repítelo: “Ja, chef.” Así el chef sabe que lo has oído. ¿Alguien te ha hablado de forma seca con las prisas? Muchas veces eso se acaba después del servicio. ¿Sigue siendo desagradable? Entonces háblalo en un momento tranquilo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "¡Detrás! Llevo una olla caliente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Hay muchísimo trabajo. El chef grita: “Tafel zes, nu!” No dice por favor. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Dices “Ja, chef”, y lo haces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Paras, y le dices que es un maleducado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Lo haces, pero no contestas nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "Con las prisas, hablar corto es normal y no es nada personal. Si lo repites, se ve que lo has oído. Así la cocina sigue rápida y segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Tu ronda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kantoor': "la oficina", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdieping': "la planta, el piso (la primera o la segunda planta de un edificio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gang': "el pasillo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpapier': "el papel higiénico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeep': "el jabón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijvullen': "rellenar, reponer", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.1': "Empiezo por la segunda planta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.2': "Se ha acabado el papel higiénico.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.3': "Relleno el jabón.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.q': "¿Ya has hecho la oficina tres?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.a': "No, todavía hay alguien trabajando.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds': "Limpiar donde la gente trabaja", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Muchas veces limpias mientras otras personas todavía están trabajando. Salúdalas, y pregunta: “Mag ik hier even schoonmaken?” La mayoría dice que sí. ¿Alguien está en una reunión o al teléfono? Entonces vuelve más tarde. No muevas los papeles de un escritorio, y no los leas: limpia alrededor. Tienes un tiempo fijo para tu ronda. ¿El tiempo es demasiado corto para hacerlo bien? No te saltes salas sin decir nada. Dile a tu encargado lo que no has podido hacer, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Buenas tardes. ¿Puedo limpiar aquí un momento?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Hoy tu ronda dura más: una sala estaba muy sucia. Dos oficinas están sin hacer. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Le dices a tu encargado cuáles son, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Te vas a casa, y esperas que nadie lo vea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Las haces muy rápido, sin los suelos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Un cliente que encuentra una oficina sucia se queja. Un encargado que lo sabe puede explicarlo, o darte más tiempo. Decirlo no es fallar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Colores y paños", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doek': "el paño, la bayeta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spons': "la esponja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rood': "rojo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauw': "azul", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geel': "amarillo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groen': "verde", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.1': "El paño rojo es para el inodoro.", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.2': "Coge un paño limpio.", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.3': "¿Qué color uso aquí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.q': "¿Puedo usar este paño para el escritorio?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.a': "No, el rojo es solo para el inodoro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours': "Cada color tiene su sitio", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Muchas empresas de limpieza trabajan con colores. Cada color de paño, esponja y cubo es para un solo sitio. Muchas veces el rojo es para el inodoro, y el azul es para escritorios y mesas. Así, la suciedad del inodoro no llega a un escritorio ni a una cocina. Los colores pueden ser distintos en cada empresa, así que pregunta el primer día. ¿Un paño está sucio, o se ha caído al suelo? Coge uno limpio. Los paños usados van a la bolsa de la ropa sucia, no otra vez al carro. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "¿Qué color es para el inodoro aquí?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Se te han acabado los paños azules. Todavía tienes que limpiar tres escritorios. Solo tienes paños rojos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Primero vas a buscar paños azules nuevos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Usas un paño rojo: limpio es limpio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Usas otra vez un paño azul para los tres.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Un sistema de colores solo funciona si todos lo siguen siempre. Así nadie tiene que preguntarse dónde ha estado un paño.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Ayudar a un cliente", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbieding': "la oferta (más barato durante poco tiempo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.korting': "el descuento (pagas menos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitverkocht': "agotado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.magazijn': "el almacén", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tas': "la bolsa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestellen': "pedir, encargar", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.1': "Lo siento, está agotado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.2': "¿Quiere una bolsa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.3': "Este café está de oferta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.q': "¿Les queda leche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.a': "Voy a mirar en el almacén.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp': "“No lo sé” no es el final", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Un cliente pregunta algo y tú no sabes la respuesta. No pasa nada: nadie lo sabe todo. Pero no digas solo “nee” o “weet ik niet”, y no te vayas. Di: “Ik vraag het even voor u”, y busca a un compañero. ¿Un producto está agotado? Di cuándo vuelve a llegar, o enseña algo parecido. Mira al cliente y salúdalo, también cuando tienes mucho trabajo reponiendo estantes. ¿No has entendido la pregunta? Pide al cliente que la repita, despacio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Eso no lo sé. Voy a preguntarlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Una clienta pregunta por un producto. No conoces la palabra. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Dices: “Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Dices “nee”, y sigues trabajando.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Señalas hacia algún sitio, para que se vaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "A un cliente no le importa que lleves poco tiempo o que todavía estés aprendiendo neerlandés. A un cliente sí le importa que nadie le ayude. Buscar a un compañero es dar un buen servicio.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Momentos difíciles", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsleider': "el gerente de la tienda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiliger': "el vigilante de seguridad", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dief': "el ladrón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stelen': "robar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schreeuwen': "gritar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldterug': "la devolución del dinero", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.1': "Voy a buscar al gerente.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.2': "Por favor, no grite.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.3': "Creo que alguien está robando algo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.q': "¡Quiero que me devuelvan el dinero ahora!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.a': "Lo entiendo. Voy a buscar a mi compañero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble': "Un cliente enfadado o un ladrón: primero tú", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "A veces un cliente se enfada, o ves a alguien robando. Tu seguridad va primero, siempre. Con un cliente enfadado: mantén la calma, no le grites tú también, y busca al gerente. No tienes que resolverlo sin ayuda. ¿Ves a un ladrón? No corras detrás de él, no lo sujetes, y no le cierres el paso en la puerta. Fíjate bien en lo que ves, y díselo enseguida al gerente o al vigilante de seguridad. Las cosas se pueden reponer. Tú no. ¿Después te quedaste con miedo? Háblalo con tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Veo que alguien se mete algo en la bolsa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Un hombre se mete una botella debajo del abrigo y va hacia la salida. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Se lo dices al gerente o al vigilante.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Corres detrás de él y lo agarras del brazo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Te pones delante de la puerta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Un ladrón al que paran puede ponerse violento. El gerente y el vigilante saben qué hacer. Ningún producto vale tanto como para que te hagan daño.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Cuidar la planta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantblad': "la hoja (de una planta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stengel': "el tallo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bloem': "la flor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knippen': "cortar (con tijeras)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomaat': "el tomate", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijp': "maduro (listo para recoger)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.1': "Este tomate todavía no está maduro.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.2': "Corto la hoja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.3': "El tallo está roto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.q': "¿Qué tomates recojo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.a': "Solo los rojos. Los verdes todavía no están maduros.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare': "Manos limpias, plantas sanas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Las plantas también pueden enfermar. Un virus pasa de planta a planta con las manos, los guantes, los cuchillos y la ropa. En un invernadero, una sola planta enferma puede significar que hay que tirar miles de plantas. Por eso hay normas estrictas en la puerta: lávate las manos, lleva la ropa de trabajo de la empresa, y pasa por el baño desinfectante para los zapatos. En muchos invernaderos no puedes traer tus propios tomates, pimientos o pepinos en la comida. ¿Ves una planta que tiene un aspecto raro? No la toques. Dile a tu encargado en qué fila está. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "Hay una planta enferma en la fila doce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Ves una planta con manchas amarillas raras. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "La dejas, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "La arrancas y te la llevas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Cortas las hojas que tienen manchas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Si tocas una planta enferma, el virus va contigo a las plantas siguientes. Tu encargado sabe cómo quitarla de forma segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Trabajar al aire libre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.land': "el campo (donde crecen plantas al aire libre)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regen': "la lluvia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zon': "el sol", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzen': "las botas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regenpak': "el traje de lluvia (una chaqueta y un pantalón contra la lluvia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onweer': "la tormenta (con truenos y rayos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.1': "Llueve. Me pongo el traje de lluvia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.2': "Tengo las botas mojadas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.3': "Hoy el sol pega fuerte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.q': "Viene una tormenta. ¿Qué hacemos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.a': "Paramos y vamos dentro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors': "Sol, lluvia y tormenta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Al aire libre trabajas con todo tipo de tiempo. Con sol: cúbrete la cabeza y la piel, usa crema solar, y bebe agua a menudo. Con lluvia: lleva tu traje de lluvia y tus botas, y ponte ropa seca en la pausa. La humedad y el frío te enferman y te hacen ir más despacio. ¿Hay tormenta? Entonces para y ve dentro, o métete en un coche o en una furgoneta. No debajo de un árbol, ni en campo abierto. ¿Necesitas ropa de lluvia o botas para el trabajo? Pregunta por ellas a tu empresa antes de comprarlas tú.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Va a haber tormenta. ¿Vamos dentro?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Estás en el campo. Oyes truenos cerca. Tu fila está casi terminada. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Paras, y vas dentro o a la furgoneta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Primero terminas rápido la fila.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Esperas debajo del árbol grande.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "El rayo cae en el punto más alto, y en un campo llano ese punto eres tú. La fila puede esperar un cuarto de hora.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "El plano y la medida", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekening': "el plano, el dibujo (muestra cómo tiene que ser la pieza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maat': "la medida", // nieuw, nalezen // nagelezen AI 28 nov
    'w.millimeter': "el milímetro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuifmaat': "el calibre, el pie de rey (mide con mucha precisión)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passen': "encajar, caber", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bout': "el perno, el tornillo grueso", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.1': "¿Cuál es la medida en el plano?", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.2': "Esta pieza no encaja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.3': "Es dos milímetros demasiado grande.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.q': "¿Encaja el perno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.a': "No. Lo mido otra vez.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing': "El plano manda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "En un taller haces lo que dice el plano, no lo que parece más o menos bien. Las medidas van en milímetros, y un milímetro puede ser demasiado. ¿Una pieza no encaja? No uses la fuerza, y no hagas el agujero “solo un poquito” más grande. Mide otra vez, y mira el plano. ¿No puedes leer el plano, o falta una medida? Pregunta antes de empezar. Una pregunta cuesta un minuto. Una pieza mal hecha cuesta material y horas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "No puedo leer esta medida. ¿Puedes mirarla?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Una pieza no encaja: es un milímetro demasiado grande. Con un martillo entraría. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Mides otra vez, y preguntas qué hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "La metes a golpes con el martillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Le quitas un poco con la amoladora, y no dices nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Una pieza que entra a la fuerza puede romperse más tarde, cuando ya la tiene el cliente. Si lo avisas, se puede encontrar la causa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Soldar y trabajar con calor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lassen': "soldar (unir metal con mucho calor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laskap': "la careta de soldar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rook': "el humo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzuiging': "la extracción (se lleva el humo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkoelen': "enfriarse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandwond': "la quemadura (una herida por el calor)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.1': "Me pongo la careta de soldar.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.2': "Enciende la extracción.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.3': "Cuidado, el metal todavía quema.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.q': "¿Ya puedo coger esto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.a': "No, espera. Primero tiene que enfriarse.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld': "El metal caliente parece frío", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Al soldar sale una luz muy fuerte. No la mires sin careta de soldar, tampoco desde lejos: tus ojos se pueden quemar, y solo lo notas horas después. ¿Un compañero está soldando cerca de ti? Mira hacia otro lado, o ponte detrás de la pantalla. El metal recién soldado o amolado parece normal, pero quema mucho. No lo cojas con las manos sin guantes. El humo de soldar es malo para tus pulmones: enciende la extracción. ¿Una quemadura? Enfríala enseguida con agua, por lo menos diez minutos, y avísalo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "¿Esto ya se ha enfriado?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Un compañero está soldando a tu lado. No llevas careta de soldar. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Miras hacia otro lado, y te pones detrás de la pantalla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Miras un momento: así aprendes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Cierras los ojos a medias.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "La luz de soldar te quema los ojos, también de lado y desde lejos. El dolor solo lo notas más tarde, muchas veces por la noche.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Partes del coche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motor': "el motor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motorkap': "el capó (la tapa que cubre el motor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rem': "el freno", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lamp': "la luz, el faro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ruitenwisser': "el limpiaparabrisas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoel': "el asiento, la silla", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.1': "Abre el capó.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.2': "La luz delantera izquierda está rota.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.3': "Los frenos hacen ruido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.q': "¿Qué oyes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.a': "El motor hace un ruido raro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts': "El coche es del cliente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Un coche en el taller no es tuyo: es del cliente. Pon una funda en el asiento y en el volante antes de subir, y dentro trabaja con las manos limpias. Deja el asiento, los espejos y la radio como estaban. ¿Has tenido que mover el asiento? Vuelve a ponerlo en su sitio. No toques las cosas personales que hay en el coche. ¿Has hecho un arañazo o una mancha? Díselo enseguida a tu encargado. Un cliente que lo descubre en casa no vuelve.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "He hecho un arañazo. Lo siento.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Haces un arañazo pequeño en la puerta del coche de un cliente. Nadie lo ha visto. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Se lo dices enseguida a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "No dices nada: es muy pequeño.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Lo frotas con un paño, y esperas que no se note.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Todo el mundo se equivoca alguna vez. Un taller puede arreglar un arañazo, o decírselo al cliente con sinceridad. Un arañazo escondido le cuesta al taller su buen nombre.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Gasolina, gas y corriente", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krik': "el gato (levanta un lado del coche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benzine': "la gasolina", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektrischeauto': "el coche eléctrico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oranje': "naranja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.morsen': "derramar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lap': "el trapo (un paño para el trabajo sucio)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.1': "Huelo a gasolina.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.2': "Se ha derramado aceite. Voy a buscar un trapo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.3': "No toco los cables naranjas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.q': "¿Puedo trabajar en este coche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.a': "Todavía no. Es un coche eléctrico.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe': "Cables naranjas y motores en marcha", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Un coche eléctrico o híbrido tiene una batería de alta tensión. Los cables de esa batería son naranjas. No los toques ni los sueltes: primero un mecánico con una formación especial tiene que dejar el coche seguro. ¿Hay un cartel o un cono junto al coche? Entonces no te acerques. Un motor en marcha en un sitio cerrado produce un gas que no puedes oler ni ver, y puede matar. Por eso: pon la manguera de extracción en el tubo de escape, o abre las puertas. ¿Hueles a gasolina? Nada de chispas y nada de fumar. Díselo enseguida a tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "¿Ya han dejado seguro este coche?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Tienes que cambiar una rueda de un coche eléctrico. Debajo del coche ves un cable naranja suelto. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "No tocas nada, y vas a buscar al mecánico formado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Empujas el cable a su sitio con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Lo empujas a su sitio con un paño seco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "La batería de un coche eléctrico tiene corriente suficiente para matar, también con el coche apagado. Solo alguien con la formación puede tocar estas piezas.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Revisar la furgoneta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schade': "el daño", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deuk': "la abolladura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spiegel': "el espejo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tanken': "repostar (echar combustible a la furgoneta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opladen': "cargar (una furgoneta eléctrica, un móvil)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeren': "aparcar", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.1': "Hay una abolladura en la puerta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.2': "Este daño ya estaba.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.3': "Primero todavía tengo que repostar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.q': "¿Está todo bien con la furgoneta de reparto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.a': "No, el espejo está roto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck': "Mira antes de conducir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Da una vuelta a la furgoneta antes de tu primer reparto. ¿Ves una abolladura, un arañazo o un espejo roto? Haz una foto, y avísalo antes de salir. Así todos saben que el daño ya estaba. ¿Ha pasado algo durante tu reparto? Avísalo el mismo día, también cuando es pequeño. Esconder un daño trae problemas más grandes después. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "La furgoneta de reparto tiene un daño. Aquí tiene una foto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "Por la mañana ves una abolladura nueva en la furgoneta. No la has hecho tú. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Haces una foto, y lo avisas antes de conducir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "No dices nada: la abolladura no es tuya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Esperas a ver si alguien pregunta por ella.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Si lo avisas antes de conducir, nadie puede pensar que lo has hecho tú. Una foto con la hora está clara para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Retrasos en la carretera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.file': "el atasco", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertraging': "el retraso (llegas más tarde de lo previsto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omleiding': "el desvío (otro camino, porque la carretera está cortada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navigatie': "el navegador (la app que muestra el camino)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planner': "el planificador (la persona que hace las rutas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.retour': "la devolución (un paquete que vuelve)", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.1': "Estoy en un atasco.", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.2': "Tengo media hora de retraso.", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.3': "Este paquete vuelve.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.q': "¿Dónde estás ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.a': "En el desvío. Llego diez minutos más tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay': "¿Llegas tarde? Dilo a tiempo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Un atasco o una carretera cortada no es culpa tuya. Pero díselo al planificador en cuanto sepas que vas a llegar tarde. Así el planificador puede avisar a los clientes, o cambiar la ruta. Primero para en un sitio seguro: no llames con el móvil en la mano mientras conduces. Y no conduzcas más rápido para recuperar el tiempo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Estoy en un atasco. Llego media hora más tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Una carretera está cortada. El desvío te cuesta treinta minutos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Se lo dices al planificador en cuanto puedes parar de forma segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Conduces más rápido para recuperar el tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "No dices nada: quizá nadie lo nota.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Si el planificador lo sabe pronto, los clientes se enteran y nadie espera para nada. Conducir más rápido es peligroso, y casi no se gana tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Instrucciones", // nieuw, nalezen // nagelezen AI 28 nov
    'l.putdown': "Ponlo ahí", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zetten': "poner (algo que queda de pie: una caja, un cubo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leggen': "poner, colocar (algo que queda tumbado, plano)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brengen': "llevar, traer (a un lugar o a una persona)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geven': "dar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vasthouden': "sujetar, sostener", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loslaten': "soltar", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.1': "Ponlo ahí.", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.2': "Lleva esto al comedor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.3': "Sujeta esto un momento.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.q': "¿Puedes sujetar esto un momento?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.a': "Sí. ¿Dónde lo tengo que poner?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown': "Di que lo tienes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "¿Llevas algo con un compañero, o un compañero te pasa algo pesado? Di “Ik heb hem” cuando lo tengas bien sujeto. Así tu compañero sabe que puede soltar sin peligro. ¿Quieres soltar tú? Pregunta primero: “Heb je hem?” Y espera la respuesta. Esto es normal en cualquier lugar de trabajo. Así las cosas no caen sobre pies y manos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Lo tengo. Ya puedes soltar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Un compañero te pasa una caja pesada. Todavía no la tienes bien sujeta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Dices “wacht”, y primero la sujetas mejor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "No dices nada: él ya lo verá.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "La agarras rápido, para que él no espere.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Tu compañero suelta cuando cree que ya la tienes. Una sola palabra te da tiempo para sujetarla bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Encendido y apagado, abierto y cerrado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanzetten': "encender", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendoen': "abrir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dichtdoen': "cerrar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukken': "pulsar, apretar (un botón)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaien': "girar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoppen': "parar", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.1': "Cierra la puerta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.2': "Pulsa el botón.", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.3': "¡Para! Apágalo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff.q': "¿Está cerrada la puerta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff.a': "No. La cierro ahora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff': "Stop significa parar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "¿Alguien grita “Stop!”? Para enseguida, también cuando no sabes por qué. Pregunta después. Aquí una palabra corta y fuerte no es enfado: así los compañeros se protegen unos a otros. ¿Ves tú algo peligroso? Grita también “Stop!”, también a alguien que lleva años trabajando aquí. A nadie le parece raro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "¡Para! Espera un momento.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Enciendes una máquina. Un compañero grita “Stop!”. No ves ningún problema. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Paras enseguida, y preguntas por qué después.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Sigues: no ves ningún problema.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Primero preguntas por qué tienes que parar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Tu compañero quizá ve algo que tú no ves. Primero parar, luego hablar: así todos están seguros.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Empujar, tirar, llenar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duwen': "empujar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trekken': "tirar (hacia ti), jalar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vullen': "llenar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leegmaken': "vaciar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoonmaken': "limpiar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vol': "lleno", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.1': "No empujes: tira hacia ti.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.2': "Este está lleno. Vacíalo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.3': "Limpia esto, por favor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.q': "¿Ya está lleno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.a': "Sí. Lo vacío ahora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty': "¿Has terminado? Dilo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "¿Has terminado una tarea? Dilo: “Ik ben klaar.” Y pregunta qué puedes hacer después. Esperar en silencio hasta que alguien te vea puede parecer que no quieres trabajar, también cuando no es verdad. Los compañeros que piden la siguiente tarea reciben muchas veces un trabajo más interesante al cabo de un tiempo. ¿Quieres aprender algo nuevo? Pregúntalo también: “Mag ik dat ook leren?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "He terminado. ¿Qué más puedo hacer?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "Has terminado tu tarea. Tu encargado está ocupado con otra cosa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Dices que has terminado, y preguntas qué viene después.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Esperas hasta que tu encargado te vea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Haces una pausa: tu trabajo está terminado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Un encargado no puede verlo todo. Cuando dices que has terminado, el trabajo sigue, y demuestras que quieres hacer más.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Primero esto, luego eso", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nu': "ahora", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dan': "luego, después", // nieuw, nalezen // nagelezen AI 28 nov
    'w.altijd': "siempre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.genoeg': "suficiente, bastante", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meer': "más", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alles': "todo", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.1': "Primero esto, luego eso.", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.2': "Eso es suficiente.", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.3': "Haz esto siempre así.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.q': "¿Puedes hacer esto ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.a': "Sí. Primero esto, ¿y luego?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order': "¿Muchas tareas a la vez? Pregunta cuál va primero", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "A veces te dan tres tareas en una sola frase. Eso es difícil de recordar, también para quien habla bien neerlandés. Pregunta cuál va primero: “Wat moet ik eerst doen?” También puedes apuntar las tareas, o contarlas con los dedos y repetirlas. ¿Se te ha olvidado una? Vuelve y pregunta. Eso es mejor que adivinar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "Eso es mucho. ¿Qué tengo que hacer primero?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Tu encargado te da tres tareas, muy rápido. Solo recuerdas la primera. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Pides enseguida que te repitan las tareas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Haces la primera, y confías en recordar el resto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "No haces nada: no sabes las tres.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Preguntar enseguida cuesta diez segundos. Más tarde tu encargado quizá ya no está, y entonces esperas o adivinas.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Azulejos, yeso y pintura", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tiletools': "Las herramientas del alicatador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmkam': "la llana dentada (extiende el cemento cola en surcos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.troffel': "la paleta, la cuchara de albañil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelsnijder': "la cortadora de azulejos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nijptang': "las tenazas (para quitar trocitos de un azulejo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mixer': "la batidora (mezcla el cemento cola o el yeso en un cubo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duimstok': "el metro plegable", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.1': "Pásame la llana dentada un momento.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.2': "Corto el azulejo con la cortadora de azulejos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.3': "Mide primero con el metro plegable.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.q': "¿Dónde está la batidora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.a': "Junto al cubo, al lado de la puerta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools': "Limpia tus herramientas antes de que se endurezca el cemento cola", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "El cemento cola y el yeso se endurecen rápido, también en tus herramientas. Así que limpia enseguida la llana dentada, la paleta y la batidora en un cubo de agua, también antes de tu pausa. El cemento cola duro no se quita, y una llana dentada con cemento cola duro hace malos surcos. No tires el agua sucia en un fregadero ni en un desagüe: se atasca. Pregunta dónde se puede echar el agua. La batidora: sujétala con las dos manos, y ponla en marcha despacio. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Estoy limpiando un momento la llana dentada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "Es la hora de tu pausa. Tu llana dentada está llena de cemento cola fresco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "La limpias en agua, y luego haces tu pausa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "La dejas así: la limpias después del trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "La metes en el cubo de cemento cola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "El cemento cola también se endurece durante tu pausa. Una llana dentada limpia hace buenos surcos, y los azulejos se pegan bien. Con cemento cola duro, limpiarla es mucho trabajo, o necesitas una herramienta nueva.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Azulejos, cemento cola y la línea central", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegel': "el azulejo, la baldosa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegellijm': "el cemento cola (el pegamento para azulejos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelkruisje': "la cruceta, el separador (una pequeña cruz entre los azulejos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hartlijn': "la línea central (desde ella empiezas a colocar los azulejos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelplaat': "el tablero de práctica (un tablero para practicar la colocación de azulejos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potlood': "el lápiz", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.1': "El cemento cola todavía está húmedo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.2': "Pon una cruceta entre los azulejos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.3': "Primero traza la línea central con el lápiz.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.q': "¿Por dónde empiezo con los azulejos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.a': "En el medio, en la línea central.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling': "Empieza en la línea central, con poco cemento cola", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Un alicatador no empieza en una esquina. Primero trazas la línea central, con un lápiz y el nivel, y empiezas allí. Así los azulejos cortados de los dos extremos tienen el mismo tamaño. Extiende solo el cemento cola que puedas cubrir con azulejos en poco tiempo. Al cemento cola que espera demasiado se le forma una piel seca, y entonces los azulejos no se pegan bien. Pon una cruceta en cada cruce, para que todas las juntas sean iguales. Comprueba a menudo con el nivel: un azulejo torcido es fácil de arreglar ahora, y difícil de arreglar mañana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "No extiendo demasiado cemento cola a la vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Después de una llamada larga, el cemento cola de la pared tiene una piel seca. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Lo raspas, y extiendes cemento cola nuevo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Aprietas los azulejos encima de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Lo mojas con una esponja, y sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "El cemento cola con una piel seca no sujeta bien un azulejo. Más tarde el azulejo se puede soltar, y entonces hay que hacer el trabajo otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Enlucir paredes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stucspaan': "la llana de acero (una llana plana para alisar el yeso)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplegspaan': "el esparavel (una tabla plana en la que sostienes el yeso)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spackmes': "la espátula (un cuchillo ancho y plano)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rei': "la regla (una barra larga y recta para nivelar el yeso)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sponsspaan': "la llana de esponja, el fratás de esponja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoekprofiel': "el guardavivos, el esquinero (una tira de metal para una esquina recta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.1': "Primero pon el guardavivos en la esquina.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.2': "Alisa la pared con la llana de acero.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.3': "Pasa la regla por la pared.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.q': "¿Ya está seca la pared?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.a': "No, espera un día más.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster': "El yeso necesita tiempo para secarse", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "El yeso nuevo sigue húmedo durante mucho tiempo. Una pared húmeda es más oscura que una seca. El pintor solo puede empezar cuando la pared está seca por todas partes, y eso puede tardar días o semanas. No la seques más rápido con un calefactor: entonces el yeso se puede agrietar. ¿Alguien quiere pintar demasiado pronto? Di que la pared todavía no está seca. Y antes de empezar, tapa el suelo, las ventanas y los enchufes: el yeso es difícil de quitar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "La pared todavía está húmeda. Todavía no se puede pintar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "El pintor quiere empezar mañana. El yeso nuevo todavía tiene manchas oscuras. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Le dices al pintor: la pared todavía no está seca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Esta noche le pones un calefactor delante.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "No dices nada: el pintor ya lo verá.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Las manchas oscuras quieren decir que el yeso todavía está húmedo. La pintura en una pared húmeda se puede despegar, y un calefactor puede hacer grietas. Esperar cuesta menos que hacerlo otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Ladrillos, madera y fijaciones", // nieuw, nalezen // nagelezen AI 28 nov
    'u.machines': "Máquinas y herramientas", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shapes': "Formas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierkant': "el cuadrado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechthoek': "el rectángulo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.driehoek': "el triángulo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cirkel': "el círculo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kubus': "el cubo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balk': "el prisma rectangular (una forma de caja alargada)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.1': "El azulejo es un cuadrado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.2': "Esta habitación es un rectángulo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.3': "Un ladrillo tiene forma de prisma rectangular.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.q': "¿Es un cuadrado?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.a': "No, un rectángulo. Es más largo que ancho.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes': "Comprueba un rectángulo con dos líneas en diagonal", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Una habitación, un suelo o un marco muchas veces es un rectángulo. Pero ¿las esquinas están de verdad rectas? Hay una forma fácil de comprobarlo. Mide de una esquina a la esquina de enfrente. Luego mide entre las otras dos esquinas. ¿Las dos medidas son iguales? Entonces las esquinas están bien. ¿No son iguales? Entonces la forma está un poco torcida, y los azulejos o el suelo no van a encajar bien. Díselo a tu encargado antes de empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Estas dos medidas no son iguales.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Mides un suelo de esquina a esquina, en las dos direcciones. Una medida es más larga. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Se lo dices a tu encargado antes de empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Empiezas en una esquina, ya saldrá bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Vuelves a medir solo un lado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Dos medidas distintas quieren decir que las esquinas no están rectas. Entonces los azulejos o las tablas no encajan. Es mejor saberlo antes de empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Ángulos y formas redondas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoek': "el ángulo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graad': "el grado (°)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geodriehoek': "la escuadra con transportador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boog': "el arco, la curva", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cilinder': "el cilindro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parallellogram': "el paralelogramo", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.1': "Este ángulo es de noventa grados.", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.2': "Mide el ángulo con la escuadra con transportador.", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.3': "El tubo tiene forma de cilindro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.q': "¿Cuántos grados tiene este ángulo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.a': "Cuarenta y cinco. La mitad de un ángulo recto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles': "Comprueba una esquina grande con 3, 4 y 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "En una obra, muchas veces compruebas un ángulo recto: una pared sobre un suelo, la esquina de una habitación. Una esquina pequeña la compruebas con una escuadra o con una escuadra con transportador. Para una esquina grande hay un truco antiguo. Mide 3 metros por un lado y 4 metros por el otro lado, y haz una marca en los dos. ¿Hay exactamente 5 metros de marca a marca? Entonces el ángulo es de 90 grados. Más pequeño también funciona: 30, 40 y 50 centímetros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Este ángulo no está recto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Tienes que comprobar una esquina grande de una pared nueva. Tu escuadra es demasiado pequeña. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Mides 3, 4 y 5 metros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "La miras desde lejos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Usas la escuadra pequeña de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Con 3, 4 y 5 puedes comprobar una esquina grande con exactitud, solo con una cinta métrica. A ojo, una esquina puede parecer bien y estar mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Longitud, superficie y volumen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lengte': "la longitud, el largo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.breedte': "la anchura, el ancho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoogte': "la altura, el alto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppervlakte': "la superficie, el área (el largo por el ancho, en metros cuadrados)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhoud': "el volumen (el largo por el ancho por el alto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.centimeter': "el centímetro", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.1': "La superficie es el largo por el ancho.", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.2': "El volumen es el largo por el ancho por el alto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.3': "Diez milímetros son un centímetro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.q': "¿Cuántos metros cuadrados tiene el suelo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.a': "Cuatro por cinco metros, así que veinte metros cuadrados.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size': "Calcula lo que necesitas, y añade un poco", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "¿Cuántos azulejos, cuánta pintura, cuánta arena? Lo calculas con la superficie o el volumen. Superficie: el largo por el ancho, en metros cuadrados. Volumen: el largo por el ancho por el alto, en metros cúbicos. Mide todo en la misma unidad: todo en metros, o todo en centímetros. Apunta las medidas, no las guardes en la cabeza. Luego añade un poco más, para los trozos cortados y para los errores. ¿Tienes dudas? Pide a un compañero que revise tu cuenta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Apunto las medidas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Has medido el suelo. Tienes que pedir los azulejos hoy. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Calculas la superficie, y añades un poco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Pides justo la superficie, ni un azulejo más.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Lo calculas a ojo: ya has visto el suelo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Siempre cortas algunos azulejos, y algunos se rompen. Con un poco de más, no tienes que parar a mitad y pedir otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Pintar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verf': "la pintura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwast': "la brocha (un pincel ancho)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.penseel': "el pincel (para esquinas y bordes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roerstok': "el palo para remover", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tape': "la cinta de pintor, la cinta de carrocero", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strijkvaatje': "el bote de pintor (un bote pequeño que sujetas mientras pintas)", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.1': "Primero remueve bien la pintura.", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.2': "Tapa el borde con cinta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.3': "Echa un poco de pintura en el bote de pintor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.q': "¿Qué brocha cojo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.a': "La ancha para la pared, el pincel para las esquinas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint': "Remueve bien, y pinta de arriba abajo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "La pintura que ha estado quieta un tiempo está espesa en el fondo de la lata. Así que primero remuévela bien, con un palo, hasta que el color sea igual por todas partes. No pintes desde la lata grande: echa un poco de pintura en el bote de pintor, y vuelve a cerrar la lata. Así la pintura se mantiene bien. Pinta de arriba abajo, así las gotas caen sobre pintura húmeda y todavía las puedes quitar con la brocha. Usa la brocha ancha para la pared y el pincel para las esquinas. Al final, limpia las brochas enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Primero remuevo bien la pintura.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Abres una lata vieja de pintura. Arriba está líquida, en el fondo espesa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Primero la remueves bien, con el palo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Pintas con la pintura líquida de arriba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Añades agua hasta que esté líquida por todas partes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Una parte del color está en el fondo de la lata. Sin remover, la pared queda con manchas y rayas.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Prepararse para pintar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plamuurmes': "la espátula de masilla (para tapar agujeros)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuurpapier': "el papel de lija", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verfkrabber': "el rascador de pintura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoffertje': "el cepillo pequeño (para barrer el polvo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuren': "lijar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afplakken': "tapar con cinta (cubrir un borde con cinta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.1': "Primero rasca la pintura vieja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.2': "Lija la madera hasta que esté lisa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.3': "Barre el polvo con el cepillo pequeño.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.q': "¿Ya puedo pintar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.a': "No, primero lija y tapa el agujero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep': "Un buen trabajo de pintura empieza antes de la pintura", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "La pintura no se pega bien sobre suciedad, polvo o pintura vieja suelta. Así que primero quita la pintura suelta con el rascador. Tapa los agujeros con masilla y la espátula, y deja secar la masilla. Luego líjala hasta que esté lisa. Después de lijar, barre el polvo con el cepillo pequeño, también en los bordes. Por último, tapa con cinta lo que tiene que quedar limpio, como las ventanas y los enchufes. Lijar hace un polvo muy fino: lleva una mascarilla, y pregunta cuál. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Primero lijar, luego pintar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Has lijado la puerta. Todavía tiene polvo. Tu compañero quiere pintar ya. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Primero quitas el polvo, con el cepillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Le dejas pintar: la pintura tapa el polvo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Quitas el polvo con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "La pintura sobre el polvo no se pega bien. Más tarde se cae a trozos, y entonces hay que hacer todo el trabajo otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Albañilería", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speciekuip': "la artesa de mortero", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltroffel': "la paleta de albañil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baksteen': "el ladrillo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cement': "el cemento", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voegijzer': "el llaguero (para alisar las juntas entre los ladrillos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handveger': "el cepillo de mano", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.1': "Todavía hay cemento en la artesa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.2': "Alisa la junta con el llaguero.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.3': "Limpia la pared con el cepillo de mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.q': "¿Cuántos ladrillos te quedan?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.a': "Un palé más. Suficiente para hoy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick': "Mantén limpia la pared mientras trabajas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "El mortero está húmedo cuando pones los ladrillos, y se endurece en pocas horas. Así que trabaja limpio. El mortero que sale de la junta, quítalo enseguida con la paleta. Alisa las juntas con el llaguero cuando el mortero está un poco firme, no cuando todavía está húmedo. Luego pasa el cepillo de mano por la pared. El mortero duro en la cara de un ladrillo es muy difícil de quitar. Al final del día, tapa la parte de arriba de la pared, para que la lluvia no se lleve el mortero.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Estoy alisando las juntas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "Al final del día hay mortero en la cara de los ladrillos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Lo quitas ahora con el cepillo, antes de que se endurezca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Lo dejas: lo limpias la semana que viene.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Lavas la pared con mucha agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "El mortero fresco se quita fácil con un cepillo. El mortero duro se queda en el ladrillo, y entonces la pared no queda bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Una pared recta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltouw': "la cuerda de albañil (una cuerda para una hilada recta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klos': "el taco de esquina (sujeta la cuerda en la esquina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lagenmaatlat': "el escantillón (muestra la altura de cada hilada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.profiel': "la mira, el perfil (un poste recto al final de la pared)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kop': "el tizón (el lado corto de un ladrillo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strek': "la soga (el lado largo de un ladrillo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.1': "Tensa bien la cuerda de albañil.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.2': "La mira tiene que estar recta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.3': "Pon el ladrillo con el lado largo hacia fuera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.q': "¿Qué altura tiene que tener esta hilada?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.a': "Mira el escantillón.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall': "La cuerda mantiene recta la pared", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Un albañil no construye a ojo. Primero se ponen las miras rectas en los dos extremos de la pared. Entre ellas tensas la cuerda de albañil, a la altura de la hilada siguiente. Pon cada ladrillo a lo largo de la cuerda, pero no empujes la cuerda. El escantillón muestra qué altura tiene que tener cada hilada. Comprueba a menudo con el nivel. Un ladrillo torcido es fácil de arreglar mientras el mortero está húmedo, y muy difícil de arreglar mañana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "¿Está tensa la cuerda de albañil?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "La cuerda de albañil está floja y cuelga un poco en el medio. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Primero la tensas, y luego sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Pones los ladrillos debajo de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Pones los ladrillos a ojo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Una cuerda floja cuelga en el medio, así que la hilada también cuelga. Una cuerda tensa da una hilada recta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Trabajar con madera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handzaag': "el serrucho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapzaag': "el serrucho de costilla (una sierra pequeña con el lomo rígido)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtbeitel': "el formón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handschaaf': "el cepillo de carpintero", // nieuw, nalezen // nagelezen AI 28 nov
    'w.timmermanshamer': "el martillo de carpintero", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtenhamer': "el mazo (un martillo de madera)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.1': "Sierra la tabla a medida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.2': "Cepilla el borde hasta que esté liso.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.3': "Golpea el formón con el mazo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.q': "¿Qué sierra necesito?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.a': "El serrucho de costilla, para esta pieza pequeña.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood': "Lo que queda corto no tiene arreglo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "La madera que se corta demasiado corta no se puede volver a alargar. Así que mide dos veces, y traza la línea antes de serrar. Sierra al lado de la línea, por el lado de la pieza que no necesitas. Sujeta bien la madera: en un banco de trabajo o con un sargento, no sobre tu rodilla. Deja que la sierra haga el trabajo, con movimientos largos y tranquilos. Empuja el formón lejos de tu cuerpo y de tu otra mano. Y mantén afilados el formón y el cepillo: una herramienta sin filo resbala más fácil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Lo mido una vez más.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Tienes que serrar una tabla a medida. La mediste una vez, rápido. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Mides otra vez, y luego trazas la línea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "La sierras ya: seguro que está bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "La sierras a ojo, sin línea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Si es demasiado larga, la puedes serrar otra vez; si es demasiado corta, no tiene arreglo. Medir otra vez es un minuto; una tabla nueva cuesta mucho más.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Marcar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelhaak': "la escuadra (muestra un ángulo recto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstekhaak': "la escuadra de inglete (45 grados)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaaihaak': "la falsa escuadra (tú pones el ángulo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruishout': "el gramil (traza una línea a lo largo del borde)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passer': "el compás (para dibujar un círculo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftekenen': "marcar (dibujar por dónde vas a cortar)", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.1': "Marca la línea con la escuadra.", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.2': "Pon la falsa escuadra en el ángulo correcto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.3': "Dibuja un círculo con el compás.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.q': "¿Está recto el ángulo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.a': "Sí, la escuadra encaja justo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square': "Marca desde un borde recto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Antes de serrar o taladrar, marcas dónde. Usa un lápiz con punta: una línea gruesa no es exacta. Elige un borde recto de la madera, y mide todo desde ese borde. Apoya bien la parte gruesa de la escuadra contra ese borde, y traza la línea a lo largo del metal. Dibuja una pequeña cruz en la pieza que no vas a usar. Luego sierras al lado de la línea, por el lado de la cruz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Primero lo marco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Tu lápiz no tiene punta y hace una línea gruesa. Quieres marcar una tabla. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Primero le sacas punta al lápiz, y luego trazas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Trazas la línea de todos modos, está bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "La marcas con la uña.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Una línea gruesa tiene unos milímetros de ancho. Entonces no sabes dónde serrar, y la pieza no queda exacta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Taladros y tornillos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accuboor': "el taladro de batería", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boormachine': "el taladro (con cable)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bitje': "la punta de atornillar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plug': "el taco", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroevendraaier': "el destornillador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spijker': "el clavo", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.1': "Haz un agujero y mete un taco.", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.2': "¿Qué punta va con este tornillo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.3': "Clava el clavo en la madera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.q': "¿Dónde está el taladro de batería?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.a': "En el cargador, ya está casi cargado.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.screw': "Mira antes de taladrar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Antes de taladrar una pared, piensa en lo que hay detrás. Las tuberías y los cables muchas veces van en línea recta hacia arriba, hacia abajo o hacia el lado desde un enchufe o un interruptor. Pregunta dónde están, o compruébalo con un detector. Elige una broca del mismo tamaño que el taco, y haz el agujero un poco más profundo que el taco. Usa la punta correcta para el tornillo: una punta equivocada resbala y estropea la cabeza del tornillo. Lleva gafas de seguridad cuando taladras.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "¿Puedo taladrar aquí?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Tienes que hacer un agujero justo encima de un enchufe. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Primero preguntas por dónde va el cable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Taladras: nunca hay un cable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Taladras despacio, así es seguro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Desde un enchufe, un cable muchas veces sube en línea recta. Taladrar en él es peligroso, y la reparación es mucho trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Fijar cosas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevestigen': "fijar (sujetar algo bien a una pared)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzetten': "apretar (girar hasta que esté firme)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmen': "pegar, encolar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbussleutel': "la llave Allen (llave hexagonal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisschroevendraaier': "el destornillador de estrella (punta en cruz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.platteschroevendraaier': "el destornillador plano", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.1': "Fija la balda a la pared.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.2': "Aprieta el perno con la llave Allen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.3': "Coge el destornillador plano, no el de estrella.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.q': "¿Cómo fijo esta balda?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.a': "Con dos tacos y dos tornillos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix': "Apretado, pero no demasiado", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Un tornillo o un perno tiene que estar apretado, pero no demasiado. Si giras con demasiada fuerza, la rosca se rompe o la madera se raja. Gira hasta que ya no se mueva, y entonces para. En un taladro de batería, primero gira el anillo de los números a un número bajo. Una balda en la pared necesita tacos que vayan con la pared: la piedra necesita tacos distintos de los de una pared fina de placas. La cola necesita tiempo: aprieta las piezas, sujétalas con un sargento, y espera hasta que la cola esté seca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "¿Está bien fijada la balda?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "Has pegado dos piezas de madera. Tu compañero quiere usarlas enseguida. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Dices: primero tiene que secarse la cola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Le dejas usarlas: la cola es rápida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Las sujetas con las manos un minuto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "La cola húmeda todavía no sujeta. Si las usas demasiado pronto, las piezas se vuelven a soltar. Entonces tienes que empezar otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "En la máquina", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedieningspaneel': "el panel de control (los botones y la pantalla de una máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startknop': "el botón de arranque (verde)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hendel': "la palanca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscherming': "la protección (una tapa sobre las piezas que se mueven)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sensor': "el sensor (ve si hay algo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaallamp': "la luz de señal (luces de colores encima de una máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.1': "Pulsa el botón verde de arranque.", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.2': "La luz de señal está en rojo. Hay una avería.", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.3': "Nunca quites la protección.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.q': "¿Por qué se para la máquina todo el rato?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.a': "El sensor no ve bien la caja.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine': "La protección se queda puesta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Las piezas que se mueven en una máquina pueden atrapar una mano, una manga o el pelo en menos de un segundo. Para eso está la protección. Nunca la quites, y nunca metas la mano detrás mientras la máquina está en marcha. ¿Una protección o un sensor no funciona? Entonces la máquina no es segura: párala y díselo a tu jefe de equipo. ¿Algo se ha atascado? Primero para la máquina, y asegúrate de que nadie la puede poner en marcha mientras trabajas. Cómo se hace eso cambia de una empresa a otra: pide que te lo expliquen antes de empezar. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "La protección está rota.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Una caja se ha atascado en la máquina, justo detrás de la protección. La máquina está en marcha. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Primero paras la máquina, y luego pides ayuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Metes la mano rápido y sacas la caja.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Abres la protección con la máquina en marcha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Una máquina en marcha puede atrapar tu mano antes de que puedas reaccionar. Pararla es un momento; una mano herida son meses.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Medir y revisar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegschaal': "la báscula, la balanza", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meetklok': "el reloj comparador (mide diferencias muy pequeñas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loep': "la lupa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monster': "la muestra (un producto que sacas para revisarlo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkeurbak': "la caja de rechazos (para los productos que no están bien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teller': "el contador (cuenta los productos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.1': "Pon el producto en la báscula.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.2': "Este producto está dañado. Va a la caja de rechazos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.3': "Miro la etiqueta con la lupa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.q': "¿Cada cuánto tomo una muestra?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.a': "Una cada hora. Apúntalo en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect': "Apunta lo que revisas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "En una fábrica revisas los productos durante el trabajo: los pesas, los mides o los miras de cerca. Apunta cada revisión en la lista enseguida, con la hora. No más tarde, de memoria. ¿Un producto no está bien? Ponlo en la caja de rechazos y mira bien los siguientes. ¿Hay más productos mal? Entonces algo va mal en la máquina. Díselo enseguida a tu jefe de equipo. Un problema que se encuentra pronto ahorra muchos productos. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Hay más productos mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "La báscula muestra que tres productos seguidos pesan demasiado poco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Se lo dices enseguida a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Los vuelves a poner en la línea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "No dices nada: a veces pasa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Tres productos mal seguidos indican un problema en la máquina. Cuanto antes lo digas, menos productos se pierden.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Embalar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verpakking': "el embalaje, el envase", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krimpfolie': "el film retráctil (plástico que se ajusta con calor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sealmachine': "la selladora (cierra un paquete con calor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulmateriaal': "el material de relleno (cojines de aire o papel en una caja)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afbreekmes': "el cúter", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tapepistool': "la pistola de precinto", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.1': "Pon material de relleno en la caja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.2': "Cierra la caja con la pistola de precinto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.3': "La selladora está muy caliente. ¡Cuidado!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.q': "¿Cuántos productos van en una caja?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.a': "Doce. Lo pone en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing': "Corta hacia fuera, lejos de tu cuerpo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Embalar es un trabajo rápido, y un cúter corta mucho. Corta siempre lejos de tu cuerpo y lejos de tu otra mano. Mete la cuchilla después de cada corte, también cuando dejas el cúter un momento. Rompe con cuidado un trozo sin filo, y tíralo en la caja para cuchillas viejas, no en la papelera normal. La selladora y la pistola de calor para el film retráctil se ponen muy calientes: no toques las partes calientes. Y revisa cada caja: el producto correcto, el número correcto, y la etiqueta recta. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Primero meto la cuchilla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Dejas el cúter un momento en la mesa. La cuchilla todavía está fuera. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Primero metes la cuchilla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Lo dejas así: lo vas a necesitar enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Te lo guardas así en el bolsillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Una cuchilla fuera, en una mesa o en un bolsillo, te puede cortar a ti o a un compañero. Meterla es un segundo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Mantenimiento", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persluchtpistool': "la pistola de aire comprimido", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steeksleutel': "la llave fija", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliekannetje': "la aceitera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeerpistool': "la pistola de engrase", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekbak': "la bandeja de goteo (recoge el aceite que gotea)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.poetsdoek': "el trapo de limpieza", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.1': "Gotea aceite. Pon la bandeja de goteo debajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.2': "Limpia el aceite con un trapo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.3': "Nunca apuntes a nadie con la pistola de aire comprimido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.q': "¿Cuándo engrasamos la máquina?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.a': "Todos los lunes, antes del primer turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep': "Una máquina limpia muestra sus problemas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "El mantenimiento pequeño muchas veces es parte del trabajo: limpiar, echar aceite y engrasar. Hazlo solo cuando la máquina está apagada, y cuando has aprendido cómo. Una máquina limpia es fácil de revisar: ves enseguida una fuga o una pieza suelta. El aceite en el suelo resbala. Pon una bandeja de goteo debajo de una fuga, limpia el suelo, y díselo a tu jefe de equipo. Tira los trapos con aceite en el contenedor especial. Nunca apuntes a una persona con una pistola de aire comprimido, y nunca la uses para limpiar tu ropa o tu piel. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "La máquina pierde aceite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Ves un pequeño charco de aceite debajo de la máquina. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Pones una bandeja de goteo debajo, y avisas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Lo dejas: es solo un poco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Pones un poco de papel encima, y sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Una fuga se hace más grande, y el aceite en el suelo hace que la gente resbale. Si se encuentra pronto, es una reparación pequeña.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Electricidad, tuberías y metal", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wiring': "Conectar hilos y cables", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draad': "el hilo (un hilo dentro de un cable)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stopcontact': "el enchufe (en la pared)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schakelaar': "el interruptor (para la luz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lasklem': "el conector de palanca (une hilos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.striptang': "el pelacables", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabelgoot': "la canaleta (un canal para cables)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.1': "Pela un centímetro del hilo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.2': "Fija los hilos en el conector de palanca.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.3': "Los cables van en la canaleta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.q': "¿Qué hilo va dónde?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.a': "Marrón con marrón, azul con azul.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring': "Los colores dicen para qué sirve un hilo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "En un edificio, los hilos tienen colores fijos. El marrón (a veces negro o gris) lleva la corriente. El azul es el de vuelta. El verde y amarillo es la tierra: protege a las personas, y nunca se usa para otra cosa. Conecta el mismo color con el mismo color. Pela solo lo que cabe en el conector: no puede quedar cobre desnudo fuera. Mete el hilo, y luego tira de él suavemente para comprobar que está fijo. ¿No sabes qué hilo es cuál? Para y pregunta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "¿De qué color es la tierra?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Conectas una lámpara. Un trozo de cobre sale del conector. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Cortas el hilo más corto, y lo vuelves a conectar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Lo dejas así: la lámpara funciona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Le pones un trozo de cinta alrededor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "El cobre desnudo fuera del conector puede tocar algo. Eso puede dar una descarga o un cortocircuito, también meses después.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Medir y trabajar con seguridad", // nieuw, nalezen // nagelezen AI 28 nov
    'w.multimeter': "el multímetro (mide la corriente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningzoeker': "el buscapolos (un destornillador con una lucecita)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterkast': "el cuadro eléctrico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zekering': "el automático, el fusible (corta la corriente cuando algo va mal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hangslot': "el candado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aardedraad': "el cable de tierra (verde y amarillo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.1': "Ha saltado el automático.", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.2': "Pon un candado en el interruptor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.3': "Mide primero con el multímetro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.q': "¿Puedo abrir el cuadro eléctrico?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.a': "No, eso lo hace el electricista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing': "Cortado, bloqueado, medido", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Antes de trabajar con electricidad, sigue tres pasos. Corta: el automático correcto en el cuadro eléctrico, no solo el interruptor de la pared. Bloquea: pon tu propio candado, y guarda la llave contigo, así nadie lo puede volver a conectar. Mide: comprueba con un buscapolos o un multímetro que de verdad no hay corriente. Solo entonces empiezas a trabajar. ¿Un automático salta una y otra vez? No lo sigas subiendo: díselo a tu encargado. Haz trabajos eléctricos solo cuando te han dicho que puedes. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Ya no hay corriente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Has bajado el automático. Un compañero dice: “Empieza ya, está cortado”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.testing.o1': "Lo bloqueas, y primero mides.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Empiezas: tu compañero lo sabe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Tocas el hilo un momento para comprobarlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "A veces el automático bajado no es el correcto, o alguien lo vuelve a subir. Un candado y una medición muestran que de verdad es seguro.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Tuberías y agua", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buis': "el tubo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koppeling': "el racor (une dos tubos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijpsnijder': "el cortatubos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpomptang': "el alicate de pico de loro (alicate ajustable)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiter': "la llave de paso (cierra el agua)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teflontape': "la cinta de teflón (cinta blanca para la rosca de un tubo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.1': "Cierra la llave de paso.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.2': "Corta el tubo con el cortatubos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.3': "Enrolla cinta de teflón en la rosca.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.q': "¿Todavía pierde agua el racor?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.a': "Un poco. Lo aprieto un poco más.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes': "Primero cierra el agua, y ten un cubo listo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Antes de abrir una tubería de agua, cierra la llave de paso. Luego abre un grifo más abajo, para que la tubería se vacíe. Pon un cubo y un trapo debajo del sitio donde trabajas. Corta un tubo de cobre con un cortatubos, no con una sierra: el extremo queda redondo y limpio. Aprieta bien un racor, pero no demasiado. Cuando termines, abre el agua despacio y busca gotas. Una fuga pequeña que dejas así acaba en daños por agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "¿Está cerrada el agua?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Has hecho un racor nuevo. Abres el agua. Cae una gotita cada minuto. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Cierras el agua, y lo aprietas o lo vuelves a hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Lo dejas así: es solo una gota.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Pones un cubo debajo y te vas a casa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Una gota por minuto son muchos litros a la semana. El agua puede estropear el suelo o el techo de abajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Trabajar el metal", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankschroef': "el tornillo de banco (sujeta bien una pieza en el banco de trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vijl': "la lima (para alisar el metal a mano)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ijzerzaag': "la sierra de arco (una sierra para metal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kolomboormachine': "el taladro de columna (un taladro grande sobre un pie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draadtap': "el macho de roscar (hace una rosca en un agujero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.braam': "la rebaba (un borde afilado después de cortar metal)", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.1': "Sujeta el metal en el tornillo de banco.", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.2': "Quita la rebaba con la lima.", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.3': "Mantén las manos lejos de la broca.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.q': "¿Por qué está tan afilado el borde?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.a': "Todavía tiene una rebaba.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork': "Sujétalo en el tornillo, nunca con la mano", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "En el taladro de columna, nunca aguantes una pieza pequeña con la mano. La broca puede atraparla y hacerla girar muy rápido. Sujétala en el tornillo de banco. Recógete el pelo largo, y no lleves guantes con una broca que gira: puede atrapar el guante. Lleva gafas de seguridad. Después de serrar o taladrar, el metal tiene una rebaba: un borde afilado. Quítala con la lima antes de coger la pieza con la mano o de pasarla a otra persona. Quita las virutas de metal con un cepillo, no con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Primero lo sujeto en el tornillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Tienes que hacer un agujero en una pieza pequeña de metal. El tornillo de banco está en otro banco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Vas a buscar el tornillo de banco, y fijas la pieza en él.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "La aguantas fuerte con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Te pones guantes y la aguantas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Una broca puede atrapar una pieza pequeña y hacerla girar. Entonces te golpea la mano. En el tornillo de banco se queda quieta.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Montaje", // nieuw, nalezen // nagelezen AI 28 nov
    'l.assembly': "En la línea de montaje", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkinstructie': "la instrucción de trabajo (una hoja con los pasos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenbak': "la caja de piezas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mal': "la plantilla (sujeta la pieza en el sitio correcto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolbaan': "el transportador de rodillos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.montagetafel': "la mesa de montaje", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetpedaal': "el pedal (un interruptor que pisas con el pie)", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.1': "Lee primero la instrucción de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.2': "La caja de piezas está casi vacía.", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.3': "Pon la pieza en la plantilla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.q': "¿Qué paso toca ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.a': "El paso cuatro. Mira la instrucción de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly': "Sigue los pasos, en el mismo orden", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "En una línea de montaje cada paso tiene su sitio y su orden. La instrucción de trabajo los muestra, muchas veces con dibujos. Haz los pasos siempre en el mismo orden, también cuando crees que sabes una forma más rápida. Otro orden puede dar un producto que parece bueno pero no funciona. ¿Una caja está casi vacía? Dilo a tiempo, para que la línea no se pare. ¿Ves un paso que podría ser mejor? Díselo a tu jefe de equipo: así puede cambiar para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Necesito piezas nuevas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Has encontrado una forma más rápida de hacer el paso tres. La instrucción de trabajo dice otra cosa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Primero preguntas a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "A partir de ahora lo haces a tu manera.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Enseñas tu manera a tus compañeros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "El orden muchas veces tiene una razón que no ves. Si tu manera es mejor, puede cambiar para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Apretar y fijar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroefmachine': "el atornillador eléctrico (cuelga encima de la línea)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.momentsleutel': "la llave dinamométrica (hace clic cuando el perno está bastante apretado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tiewrap': "la brida", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitring': "la arandela", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klinknagel': "el remache", // nieuw, nalezen // nagelezen AI 28 nov
    'w.popnageltang': "la remachadora", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.1': "Aprieta el perno con la llave dinamométrica.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.2': "No olvides la arandela.", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.3': "Une los cables con una brida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.q': "¿Cuánto hay que apretar este perno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.a': "Hasta que la llave dinamométrica haga clic.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening': "El clic es suficiente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Una llave dinamométrica hace clic cuando un perno está lo bastante apretado. Para en el clic: no sigas girando. Demasiado apretado puede romper el perno o la pieza, y demasiado flojo se puede soltar. El atornillador eléctrico funciona igual: se para solo. Pon cada arandela en su sitio: una arandela que falta es difícil de ver más tarde. Cuenta tus pernos. ¿Sobra uno, o te falta uno? Entonces algo va mal: díselo a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Sobra un perno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Tu llave dinamométrica ha hecho clic. El perno todavía te parece un poco flojo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Paras, y preguntas a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Lo giras un poco más con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Usas una llave más larga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "El clic está ajustado a la fuerza correcta. Si te parece mal, puede que haya que revisar la llave. Si sigues girando, el perno se puede romper.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Levantar y mover", // nieuw, nalezen // nagelezen AI 28 nov
    'w.takel': "el polipasto (levanta piezas pesadas con una cadena)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijshaak': "el gancho de elevación", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilhulp': "la ayuda de elevación (sujeta una pieza con ventosas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenkar': "el carro de piezas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaitafel': "la mesa giratoria (giras la pieza, no tu cuerpo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolcontainer': "el carro jaula (una jaula alta con ruedas)", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.1': "No levantes esto sin ayuda. Usa el polipasto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.2': "¿Está bien cerrado el gancho de elevación?", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.3': "Empuja el carro de piezas, no tires de él.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.q': "¿Puedo ponerme debajo del polipasto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.a': "No, nunca debajo de una carga colgada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling': "Deja que el polipasto haga el trabajo pesado", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Las piezas pesadas se levantan con un polipasto o una ayuda de elevación, no con tu espalda. Revisa el gancho antes de levantar: el cierre de seguridad tiene que cerrar. Levanta despacio, y mantén las manos y los pies lejos de la carga. Nunca te pongas ni pases debajo de una carga colgada. Usa la mesa giratoria para girar una pieza: así no tienes que torcer la espalda. Empuja un carro o un carro jaula: ves por dónde vas, y tu espalda trabaja menos. Usa un polipasto solo cuando has aprendido cómo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Uso el polipasto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Una pieza es muy pesada. El polipasto está ocupado diez minutos más. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Esperas al polipasto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': { m: "La levantas tú solo, rápido.", f: "La levantas tú sola, rápido.", x: "La levantas sin ayuda, rápido." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "La arrastras por el suelo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Una pieza pesada puede dañar tu espalda en un segundo. Diez minutos de espera es mejor que meses de dolor.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "La revisión final", // nieuw, nalezen // nagelezen AI 28 nov
    'w.typeplaatje': "la placa de características (una placa pequeña de metal con el tipo y el número)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempel': "el sello", // nieuw, nalezen // nagelezen AI 28 nov
    'w.testbank': "el banco de pruebas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeursticker': "la pegatina de aprobado (una pegatina verde: el producto está bien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kras': "el arañazo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.barst': "la grieta", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.1': "La placa de características está torcida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.2': "Este producto tiene un arañazo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.3': "Sin la pegatina de aprobado no sale.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.q': "¿Está bien este producto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.a': "No, tiene una grieta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck': "Solo los productos buenos llevan la pegatina", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': { m: "La revisión final es la última oportunidad de encontrar un fallo antes de que lo encuentre el cliente. Revisa cada punto de la lista, también cuando hay mucho trabajo. Un arañazo o una grieta pequeña se te escapa fácilmente: mira con buena luz, y desde más de un lado. Pon la pegatina de aprobado o el sello solo cuando todos los puntos están bien. ¿No estás seguro? Pon el producto aparte y pregunta. Un fallo que se encuentra aquí cuesta poco, y un fallo en casa del cliente cuesta mucho. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", f: "La revisión final es la última oportunidad de encontrar un fallo antes de que lo encuentre el cliente. Revisa cada punto de la lista, también cuando hay mucho trabajo. Un arañazo o una grieta pequeña se te escapa fácilmente: mira con buena luz, y desde más de un lado. Pon la pegatina de aprobado o el sello solo cuando todos los puntos están bien. ¿No estás segura? Pon el producto aparte y pregunta. Un fallo que se encuentra aquí cuesta poco, y un fallo en casa del cliente cuesta mucho. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", x: "La revisión final es la última oportunidad de encontrar un fallo antes de que lo encuentre el cliente. Revisa cada punto de la lista, también cuando hay mucho trabajo. Un arañazo o una grieta pequeña se te escapa fácilmente: mira con buena luz, y desde más de un lado. Pon la pegatina de aprobado o el sello solo cuando todos los puntos están bien. ¿Tienes dudas? Pon el producto aparte y pregunta. Un fallo que se encuentra aquí cuesta poco, y un fallo en casa del cliente cuesta mucho. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Este producto va aparte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Hay mucho trabajo en la línea. Ves un pequeño arañazo en un producto, debajo de la etiqueta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Lo pones aparte, y se lo dices a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Le pones la pegatina: es pequeño.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Mueves la etiqueta encima del arañazo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Un arañazo pequeño puede ser señal de un problema en la línea. Esconderlo solo pasa el problema al cliente.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Cultivar, clasificar y el invernadero", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sowing': "Sembrar y esquejes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaad': "las semillas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaaibak': "la bandeja de semillero", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stek': "el esqueje (un trozo de planta que echa raíces nuevas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potgrond': "la tierra para macetas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kweekpot': "la maceta de cultivo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gieter': "la regadera", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.1': "Pon dos semillas en cada hueco.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.2': "Pon el esqueje en la tierra para macetas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.3': "Dale un poco de agua a las plantas jóvenes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.q': "¿A qué profundidad va la semilla?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.a': "Medio centímetro. No más.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing': "Las plantas pequeñas necesitan una mano suave", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Las plantas jóvenes son débiles. Coge un esqueje o una plántula por una hoja, no por el tallo: una hoja vuelve a crecer, un tallo roto no. Aprieta la tierra con suavidad, no con fuerza. Riega despacio, con una lluvia fina, para que el agua no se lleve las semillas. Trabaja con las manos limpias y con bandejas limpias: las plantas jóvenes enferman fácilmente. Escribe la fecha y el tipo de planta en cada bandeja, para que todos sepan lo que hay dentro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "La cojo por la hoja.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Tienes que pasar una plántula pequeña a una maceta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "La coges con cuidado por una hoja.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "La sacas tirando del tallo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "La sacas apretándola con la tierra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Una hoja puede volver a crecer. Un tallo roto no, y entonces la planta muere.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Clasificar y empaquetar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tros': "el racimo (tomates en un mismo tallo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bakje': "la tarrina (una caja pequeña para fruta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sorteermachine': "la máquina clasificadora", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketpistool': "la pistola etiquetadora", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurenkaart': "la carta de colores (muestra lo madura que tiene que estar la fruta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomatenschaar': "las tijeras de cosecha", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.1': "Pon los racimos con cuidado en la caja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.2': "Este tomate está demasiado maduro. Va aparte.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.3': "Mira la carta de colores.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.q': "¿Está este tomate bastante maduro?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.a': "No, todavía está muy verde. Déjalo en la planta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting': "Cada fruta cuenta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "La fruta y la verdura se golpean fácilmente. Déjalas con cuidado, no las dejes caer ni las tires. Hoy no ves el golpe, pero mañana la fruta está blanda y marrón. Mira la carta de colores para saber qué color va dónde. Pon aparte una fruta dañada o podrida: una fruta mala en una tarrina puede estropear las demás. Mantén limpias las tarrinas y las cajas, y nunca las pongas en el suelo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Este está dañado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Estás llenando tarrinas. Un tomate tiene una mancha marrón y blanda. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Lo pones aparte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Lo escondes en el fondo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "Lo empaquetas de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Un tomate podrido hace que los demás se pudran más rápido. El cliente lo encuentra, y devuelve toda la tarrina.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "El invernadero y su clima", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buisrailkar': "el carro sobre raíles (va sobre los tubos de la calefacción)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.druppelaar': "el gotero (da agua gota a gota)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luchtraam': "la ventana cenital (una ventana en el techo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasscherm': "la pantalla del invernadero (una tela bajo el techo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ventilator': "el ventilador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermometer': "el termómetro", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.1': "Lleva el carro sobre raíles hasta el final de la fila.", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.2': "El gotero está suelto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.3': "Hace calor. Las ventanas del techo se están abriendo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.q': "¿Por qué hace tanto calor en el invernadero?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.a': "La pantalla está cerrada, y las ventanas también.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse': "Deja el clima al ordenador", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "En un invernadero un ordenador controla el clima: las ventanas, la pantalla, la calefacción y el agua. No abras una ventana ni cambies un ajuste tú mismo. ¿Ves algo raro, como un gotero que pierde agua o una ventana que no se cierra? Díselo a tu encargado. El carro sobre raíles va sobre los tubos de la calefacción: úsalo solo cuando hayas aprendido cómo. Mantén los pies en la plataforma, y nunca toques los tubos: pueden estar calientes. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Este gotero pierde agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Un gotero está suelto. Cae agua al suelo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Lo vuelves a poner, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Lo dejas: es solo agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Cierras el agua de toda la fila.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Un gotero suelto gasta agua, la planta recibe demasiado poca, y un suelo mojado resbala.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Plagas y trabajar limpio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luis': "el pulgón (un insecto verde pequeño en las plantas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vangplaat': "la trampa adhesiva (una tarjeta amarilla que atrapa insectos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rups': "la oruga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluipwesp': "la avispa parasitoide (una avispa pequeña que mata plagas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schimmel': "el moho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontsmettingsmat': "la alfombra desinfectante (la pisas en la puerta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.1': "Hay pulgones en esta hoja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.2': "Cuelga la trampa adhesiva encima de las plantas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.3': "Pasa por la alfombra desinfectante.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.q': "¿Puedo matar esta avispa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.a': "No, es una avispa parasitoide. Nos ayuda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests': "No lleves enfermedades de fila en fila", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Una enfermedad o una plaga se extiende rápido en un invernadero. La puedes llevar en las manos, en la ropa y en las herramientas. Por eso pasa por la alfombra desinfectante en cada puerta, y lávate las manos cuando vas a otra parte del invernadero. Empieza tu trabajo en las filas sanas, y termina en las filas enfermas. ¿Ves insectos, manchas o moho en una planta? No la toques, pero dile a tu encargado dónde está. Algunos insectos del invernadero son ayudantes: déjalos en paz. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Aquí hay moho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Ves moho gris en unas cuantas plantas de tu fila. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Le dices a tu encargado dónde está.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Quitas las hojas malas y sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "No dices nada: son solo unas cuantas plantas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "El moho se extiende rápido. Tu encargado sabe qué hacer, y por dónde empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Neumáticos, aceite y frenos", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tyres': "Cambiar neumáticos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wielbout': "el tornillo de rueda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagmoersleutel': "la llave de impacto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenspanningsmeter': "el manómetro de neumáticos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenprofiel': "el dibujo del neumático (las ranuras del neumático)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.velg': "la llanta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenwisselaar': "la desmontadora de neumáticos (una máquina para sacar el neumático de la llanta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.1': "Aprieta los tornillos de rueda en cruz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.2': "El dibujo del neumático está demasiado bajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.3': "Mide la presión con el manómetro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.q': "¿Hay que quitar estos neumáticos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.a': "Sí, casi no les queda dibujo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres': "Enrosca a mano, aprieta con la llave dinamométrica", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Una llave de impacto es rápida y muy fuerte. Úsala para quitar los tornillos de rueda, pero no para apretarlos fuerte. Primero enrosca los tornillos a mano. Luego apriétalos en cruz con una llave dinamométrica, a la fuerza indicada para ese coche. Una rueda que no está bien apretada se puede soltar en marcha. Revisa el dibujo y la presión de cada neumático que pase por tus manos. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Primero los enrosco a mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Vuelves a poner una rueda. Un compañero dice: “Usa la llave de impacto, es más rápido”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.tyres.o1': "Los enroscas a mano, y luego usas la llave dinamométrica.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Los aprietas fuerte con la llave de impacto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Los enroscas a mano, y lo dejas así.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Una llave de impacto puede apretar un tornillo demasiado o demasiado poco. Solo la llave dinamométrica da la fuerza correcta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Cambiar el aceite", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliefilter': "el filtro de aceite", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliepeilstok': "la varilla del aceite (muestra cuánto aceite hay)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opvangbak': "el recipiente de vaciado (recoge el aceite usado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trechter': "el embudo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftapplug': "el tapón de vaciado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olievat': "el bidón de aceite", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.1': "Pon el recipiente de vaciado debajo del motor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.2': "Afloja el tapón de vaciado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.3': "Mira la varilla del aceite.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.q': "¿Cuánto aceite hay que echar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.a': "Cuatro litros. Luego mira la varilla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange': "El aceite usado va al bidón, no al desagüe", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "El aceite usado es malo para el agua y la tierra. Un poco de aceite puede ensuciar mucha agua. Por eso recoge todo el aceite usado en el recipiente de vaciado, y échalo en el bidón para aceite usado. Nunca lo eches en un desagüe ni en un fregadero. Los filtros viejos y los trapos con aceite van a su propio contenedor. El aceite caliente puede quemarte la piel: deja que el motor se enfríe un poco primero, y ponte guantes. Limpia enseguida el aceite derramado: el aceite en el suelo resbala. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "¿Dónde va el aceite usado?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "El recipiente de vaciado está lleno de aceite usado. El bidón está al otro lado del taller. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Lo llevas al bidón, con cuidado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Lo echas en el desagüe de fuera.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Lo dejas debajo del coche para más tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "El aceite usado en un desagüe ensucia el agua. Un recipiente lleno debajo de un coche acaba volcado de una patada.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Frenos y luces", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remschijf': "el disco de freno", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remblok': "la pastilla de freno", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koplamp': "el faro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remvloeistof': "el líquido de frenos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remklauw': "la pinza de freno", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlamp': "la luz trasera", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.1': "Las pastillas de freno están gastadas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.2': "Revisa el líquido de frenos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.3': "La luz trasera izquierda no funciona.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.q': "¿Hay que cambiar también el disco de freno?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.a': "Sí, está demasiado fino.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes': "Frenos: revisa dos veces", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Los frenos salvan vidas. Por eso trabaja con calma, y revisa tu trabajo dos veces. Después de poner pastillas o discos nuevos, pisa el pedal del freno unas cuantas veces antes de mover el coche: la primera vez muchas veces se hunde demasiado. El líquido de frenos es malo para tu piel y para la pintura: ponte guantes, y limpia las gotas enseguida. No soples el polvo de los frenos con aire comprimido: límpialo con limpiador de frenos y un trapo. Antes de que salga el coche, revisa todas las luces, también las luces de freno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Piso el pedal del freno unas cuantas veces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Has puesto pastillas de freno nuevas. El coche tiene que salir. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Pisas el pedal del freno unas cuantas veces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Lo sacas conduciendo enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Lo sacas empujando sin revisar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Después de poner pastillas nuevas, el pedal se puede hundir demasiado la primera vez. Entonces el coche no frena.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Leer averías y la orden de trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diagnosecomputer': "la máquina de diagnosis (lee las averías del coche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingslampje': "el testigo (una luz de aviso en el salpicadero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkorder': "la orden de trabajo (lo que hay que hacer en el coche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kentekenplaat': "la matrícula", // nieuw, nalezen // nagelezen AI 28 nov
    'w.autosleutel': "la llave del coche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoelhoes': "la funda del asiento (mantiene limpio el asiento)", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.1': "Conecta la máquina de diagnosis.", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.2': "El testigo está encendido.", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.3': "Pon una funda en el asiento.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.q': "¿Qué hay que hacerle a este coche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.a': "Mira la orden de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis': "Trata el coche como si fuera tuyo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Un cliente te da su coche y su llave. Trata las dos cosas con cuidado. Pon una funda en el asiento y una alfombrilla en el suelo antes de subir. Haz solo lo que pone en la orden de trabajo. ¿Encuentras otra cosa que está mal? Apúntalo y díselo a tu encargado: el cliente decide. Deja la llave en su sitio, con su etiqueta. No uses la radio, el teléfono ni las cosas que hay en el coche. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Esto no está en la orden de trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Cambias el aceite. Un neumático está casi liso. No está en la orden de trabajo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Lo apuntas, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Cambias el neumático enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "No dices nada: no es tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "El cliente decide lo que se hace y se paga. Pero tiene que saber que el neumático es peligroso.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Segar y podar", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mowing': "Cortar el césped", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gras': "la hierba, el césped", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maaien': "segar (cortar la hierba)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grasmaaier': "el cortacésped", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zitmaaier': "el tractor cortacésped (un cortacésped en el que vas sentado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bosmaaier': "la desbrozadora (un cortacésped en un palo largo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gelaatsscherm': "la pantalla facial", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.1': "Primero corta la hierba a lo largo del borde.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.2': "La hierba está demasiado mojada. Cortamos mañana.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.3': "Ponte la pantalla facial.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.q': "¿Puedo coger el tractor cortacésped?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.a': "Sí, pero primero quita las piedras.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing': "Las piedras vuelan lejos", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.b': "Un cortacésped o una desbrozadora puede lanzar una piedra muy lejos y muy fuerte. Por eso primero recorre el césped a pie, y quita piedras, cristales y ramas. Ponte la pantalla facial o gafas de seguridad, protección auditiva y zapatos de seguridad. Mantén a las demás personas muy lejos. ¿Alguien se acerca? Para la máquina. Nunca metas la mano debajo de un cortacésped mientras el motor está en marcha: apágalo, y espera hasta que la cuchilla esté parada. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.p': "¿Puede mantenerse a distancia, por favor?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.s': "Usas la desbrozadora. Un hombre con un perro viene hacia ti. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o1': "Paras la máquina hasta que haya pasado.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.mowing.o2': "Sigues: él te ve.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o3': "Te das la vuelta, y sigues.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.w': "Una piedra de una desbrozadora puede herir gravemente a alguien, también desde lejos.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pruning': "Podar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeien': "podar (cortar ramas de una planta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeischaar': "las tijeras de podar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tak': "la rama", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struik': "el arbusto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boom': "el árbol", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeizaag': "la sierra de podar", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.1': "Poda los arbustos a lo largo del camino.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.2': "Esta rama está muerta. Córtala con la sierra.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.3': "Pon las ramas en un montón.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.q': "¿Qué ramas hay que quitar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.a': "Solo las ramas muertas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning': "Un corte limpio se cura mejor", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.b': "Poda con tijeras afiladas y limpias. Un corte limpio se cura rápido; una rama desgarrada se enferma. Corta justo encima de una yema o de una rama lateral, y no dejes un trozo largo. Primero quita las ramas muertas y rotas. Mantén la otra mano lejos de las cuchillas. Ponte guantes: algunas plantas tienen espinas, o te ponen la piel roja. Limpia las tijeras después del trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.p': "¿Dónde tengo que cortar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.s': "Tus tijeras de podar están desafiladas. Desgarran las ramas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o1': "Pides unas tijeras afiladas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o2': "Tiras más fuerte de la rama.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o3': "Sigues: es solo un arbusto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.w': "Unas tijeras desafiladas desgarran la rama. La planta se enferma, y tú trabajas más.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hedge': "Recortar el seto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heg': "el seto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heggenschaar': "el cortasetos (una máquina que corta un seto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruiwagen': "la carretilla", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hark': "el rastrillo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeiafval': "los restos de poda (ramas y hojas cortadas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeil': "la lona (una lámina grande de plástico)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.1': "Pon la lona debajo del seto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.2': "Corta el seto bien recto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.3': "Llévate los restos de poda con la carretilla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.q': "¿A qué altura tiene que quedar el seto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.a': "Hasta la línea. No más bajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge': "Primero busca nidos", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.b': "En primavera y en verano, los pájaros hacen nidos en los setos y los arbustos. Los nidos que usan los pájaros están protegidos. Por eso mira dentro del seto antes de cortar. ¿Ves un nido con huevos o con pájaros pequeños? No cortes ahí, y díselo a tu encargado. Sujeta el cortasetos con las dos manos. Ponte firme en el suelo o en una buena escalera, nunca en una silla ni en un cubo. Mantén el cable detrás de ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.p': "Aquí hay un nido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.s': "Recortas un seto en mayo. Ves un nido con pájaros pequeños. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o1': "Paras ahí, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o2': "Cortas alrededor con cuidado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o3': "Quitas el nido, y sigues.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.w': "Los nidos que usan los pájaros están protegidos. Tu encargado decide qué pasa con esta parte del seto.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.chainsaw': "La motosierra y el soplador de hojas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kettingzaag': "la motosierra", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stam': "el tronco (de un árbol)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaagbroek': "el pantalón anticorte (detiene la cadena)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladblazer': "el soplador de hojas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladeren': "las hojas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jerrycan': "el bidón (un recipiente para combustible)", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.1': "Ponte el pantalón anticorte.", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.2': "Sopla las hojas a un montón.", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.3': "Echa combustible solo cuando el motor esté frío.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.q': "¿Puedo trabajar con la motosierra?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.a': "Todavía no. Primero haces un curso.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw': "La motosierra, solo con formación", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.b': "La motosierra es una de las herramientas más peligrosas en el trabajo de jardinería. Trabaja con ella solo cuando has hecho un curso, y tu encargado dice que puedes. Ponte siempre el pantalón anticorte, un casco con pantalla facial y protección auditiva, guantes y botas de seguridad. Nunca trabajes con una motosierra sin compañía. Sujétala con las dos manos, y nunca cortes por encima de los hombros. Con un soplador de hojas: nunca soples hacia personas, coches o ventanas abiertas. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.p': "Todavía no he hecho un curso para esto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.s': "Un compañero dice: “Coge la motosierra, es fácil.” Nunca has hecho un curso. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o1': "Dices que todavía no has hecho un curso.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o2': "La pruebas con cuidado, solo una vez.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o3': "La coges, y primero ves un vídeo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.w': "Una motosierra te puede cortar la pierna en un segundo. Sin formación no sabes cómo puede rebotar.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.planting': "Plantar, malas hierbas y la calle", // nieuw, nalezen // nagelezen AI 28 nov
    'l.weeding': "Quitar malas hierbas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruid': "las malas hierbas (plantas que hay que quitar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wieden': "escardar (arrancar las malas hierbas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoffel': "la azada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perk': "el parterre (un trozo de tierra con flores)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruidbrander': "el quemador de malas hierbas (las mata con calor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wortel': "la raíz (de una planta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.1': "Arranca las malas hierbas, con la raíz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.2': "Pasa la azada por el parterre de la entrada.", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.3': "Cuidado: el quemador de malas hierbas está caliente.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.q': "¿Esto es una mala hierba?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.a': "No, es una planta. Déjala.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding': "Malas hierbas: hay que sacar la raíz", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.b': "Una mala hierba vuelve a crecer cuando la raíz se queda en la tierra. Por eso arráncala con la raíz, o pasa la azada justo debajo de la tierra. Trabaja cuando la tierra está un poco mojada: así la raíz sale fácil. No uses sprays contra las malas hierbas, a no ser que hayas aprendido cómo y tu encargado lo diga. Un quemador de malas hierbas está muy caliente: mantenlo lejos de la hierba seca, las hojas, los setos, los coches y los contenedores. Nunca lo dejes en el suelo mientras está encendido. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.p': "¿Esto es una mala hierba o una planta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.s': "Usas el quemador de malas hierbas. Al lado del camino hay un seto seco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o1': "Ahí arrancas las malas hierbas a mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o2': "Quemas rápido, y sigues andando.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o3': "Quemas, y miras atrás una vez.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.w': "Un seto seco se prende fuego rápido. Un fuego cerca de casas o coches es muy peligroso.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.planting': "Plantar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planten': "plantar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schep': "la pala", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantgat': "el hoyo de plantación", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluit': "el cepellón (la tierra alrededor de las raíces)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compost': "el compost", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boompaal': "el tutor (un palo que sujeta un árbol joven)", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.1': "Cava un hoyo de plantación para el árbol.", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.2': "Pon el árbol recto, al lado del tutor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.3': "Dales mucha agua a las plantas nuevas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.q': "¿Dónde va esta planta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.a': "Al fondo del parterre, junto a la pared.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting': "Bajo tierra: cables y tuberías", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.b': "Debajo del césped y de la acera muchas veces hay cables y tuberías: de luz, gas, agua e internet. Por eso cava con cuidado. ¿Ves una cinta de color o una placa de plástico en la tierra, o das con algo duro? Deja de cavar, y díselo a tu encargado. Nunca sigas cavando a la fuerza. Levanta un árbol pesado o un cepellón grande con otra persona, con las rodillas dobladas. Riega una planta nueva el mismo día. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.p': "Estoy dando con algo duro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.s': "Cavas un hoyo de plantación. Tu pala da con una cinta de plástico roja. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o1': "Dejas de cavar, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o2': "Sigues cavando con cuidado, al lado de la cinta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o3': "Sacas la cinta, y sigues.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.w': "Una cinta en la tierra avisa de que hay un cable o una tubería debajo. Una tubería de gas o un cable eléctrico es muy peligroso.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roadside': "Trabajar junto a la carretera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pion': "el cono", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkeer': "el tráfico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoep': "la acera (el camino al lado de la calle)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fietser': "el ciclista", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijlwagen': "el remolque de flecha (un remolque con una flecha grande que avisa a los conductores)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.berm': "el margen de la carretera (la hierba al lado de la carretera)", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.1': "Ponte el chaleco. Trabajamos junto a la carretera.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.2': "Pon los conos detrás de la furgoneta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.3': "Cuidado con los ciclistas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.q': "¿Puedo cruzar ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.a': "No, espera. Viene un camión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside': "Junto a la carretera: que te vean, y quédate detrás de los conos", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.b': "Trabajar junto a la carretera es peligroso: los conductores miran el móvil, o van demasiado rápido. Por eso ponte siempre el chaleco de alta visibilidad, también para un trabajo corto. Pon los conos y las señales antes de empezar, y quítalos al final. Aparca la furgoneta como escudo entre tú y el tráfico. Quédate detrás de los conos. Nunca des un paso atrás sin mirar, y trabaja de cara al tráfico cuando puedas. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.p': "Primero pongo los conos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.s': "Tienes que cortar un arbusto pequeño junto a la carretera. Tardas cinco minutos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o1': "Te pones el chaleco, y pones los conos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o2': "Lo haces rápido, sin los conos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o3': "Pides a un compañero que vigile los coches.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.w': "Un accidente pasa en solo un segundo. Cinco minutos sin conos son cinco minutos sin protección.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.litter': "La basura y el barrio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwerfafval': "la basura tirada (basura en la calle)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grijper': "la pinza recogedora (un palo que agarra la basura)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniszak': "la bolsa de basura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherven': "los cristales rotos (trozos afilados)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhanger': "el remolque", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewoner': "el vecino, la vecina (alguien que vive aquí)", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.1': "Recoge la basura con la pinza recogedora.", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.2': "Cuidado, aquí hay cristales rotos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.3': "Pon las bolsas de basura junto al remolque.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.q': "¿Cuándo van a podar este árbol?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.a': "No lo sé. Pregunte en el ayuntamiento.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter': "Nunca toques una aguja", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.b': "En los parques y los arbustos a veces encuentras una aguja de una jeringuilla. Nunca la cojas con la mano, tampoco con guantes. Usa la pinza recogedora, y mete la aguja en una caja dura o en una botella con tapa, nunca en una bolsa de basura. Díselo a tu encargado. ¿Te has pinchado con una aguja? Lava la herida con mucha agua, y llama a un médico enseguida. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.p': "Aquí hay una aguja.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.s': "Ves una aguja en la hierba, al lado de un banco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o1': "La recoges con la pinza recogedora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o2': "La recoges con los guantes puestos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o3': "La metes en la bolsa de basura.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.w': "Una aguja puede transmitir una enfermedad. Los guantes no paran una aguja, y una caja dura protege a los demás.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.frontdesk': "Recepción, correo y reuniones", // nieuw, nalezen // nagelezen AI 28 nov
    'l.reception': "En la recepción", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balie': "el mostrador de recepción", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoeker': "el visitante, la visitante", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intercom': "el interfono (hablas con alguien que está en la puerta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorverbinden': "pasar una llamada (de teléfono)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toestel': "la extensión (un número de teléfono dentro del edificio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachtruimte': "la sala de espera", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.1': "Buenos días, ¿le puedo ayudar?", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.2': "Le paso la llamada.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.3': "Siéntese en la sala de espera, por favor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.q': "Tengo una cita con la señora Jansen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.a': "Un momento. La llamo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception': "Eres la primera cara que ven", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.b': "En la recepción eres la primera persona que ve un visitante. Levanta la vista, sonríe y saluda, también cuando estás hablando por teléfono. Habla de usted a los visitantes (en neerlandés: “u”). Contesta el teléfono con el nombre de la empresa y tu propio nombre. ¿No sabes la respuesta? Dilo, y busca a alguien que la sepa. Nunca des nombres, números de teléfono ni salas del personal a personas que no conoces.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.p': "Buenos días, ¿en qué le puedo ayudar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.s': "Estás al teléfono. Un visitante llega al mostrador y espera. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o1': "Levantas la vista, y le muestras que vas enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o2': "Terminas la llamada, sin levantar la vista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o3': "Cuelgas el teléfono enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.w': "Un visitante que se siente visto espera tranquilo. Un visitante que no se siente visto se siente mal recibido.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.visitors': "Recibir visitas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoekerspasje': "la tarjeta de visitante", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lift': "el ascensor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garderobe': "el guardarropa (donde cuelgas el abrigo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeerplaats': "la plaza de aparcamiento", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hal': "el vestíbulo (la sala grande de la entrada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiden': "acompañar (ir con alguien a un sitio)", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.1': "¿Puede escribir su nombre aquí?", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.2': "Aquí tiene su tarjeta de visitante.", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.3': "Le acompaño al ascensor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.q': "¿Dónde puedo dejar el abrigo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.a': "En el guardarropa, al lado del ascensor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors': "Cada visitante se registra", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.b': "Cada visitante escribe su nombre en la lista, o se registra en la pantalla, y recibe una tarjeta de visitante. Así sabes quién está en el edificio. Esto es importante cuando hay un incendio: todo el mundo tiene que salir, y alguien revisa la lista. Al final de la visita, el visitante devuelve la tarjeta. No dejes entrar detrás de ti a personas que no conoces: pregunta con amabilidad a quién vienen a ver. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.p': "¿A quién viene a ver?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.s': "Un hombre entra detrás de un compañero. No tiene tarjeta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o1': "Le preguntas con amabilidad a quién viene a ver.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o2': "Le dejas pasar: ha entrado con el personal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o3': "Llamas a la policía enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.w': "En una emergencia, tienes que saber quién está dentro. Y no todo el que entra tiene un motivo para estar ahí.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mailroom': "Correo y paquetes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkamer': "la sala de correo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koerier': "el mensajero (alguien que trae paquetes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postvak': "el casillero (una caja para el correo, una por persona)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.envelop': "el sobre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdeling': "el departamento", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkar': "el carro del correo", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.1': "El mensajero trae un paquete.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.2': "Pon las cartas en el casillero correcto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.3': "Este paquete está dañado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.q': "¿Para quién es este paquete?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.a': "Para Finanzas, en la segunda planta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom': "El correo es privado", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.b': "El correo y los paquetes son privados. Nunca abras una carta ni un paquete de otra persona. Revisa el nombre y el departamento en cada envío, y ponlo en el casillero correcto. Cuando un mensajero trae un paquete, míralo antes de firmar: ¿está dañado? Apúntalo. ¿Un paquete es raro: huele, pierde líquido, o no tiene remitente? No lo abras, y díselo a tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.p': "La caja está mojada y rota.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.s': "Un mensajero trae un paquete. Una esquina está mojada y rota. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o1': "Apuntas el daño antes de firmar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o2': "Firmas, y no se lo dices a nadie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o3': "Lo abres, para ver si está todo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.w': "Después de firmar, parece que el paquete estaba bien. Entonces nadie paga el daño.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.meetingroom': "Preparar una sala de reuniones", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergaderzaal': "la sala de reuniones", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beamer': "el proyector", // nieuw, nalezen // nagelezen AI 28 nov
    'w.whiteboard': "la pizarra blanca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermoskan': "el termo (mantiene el café caliente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kopje': "la taza", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koffieautomaat': "la máquina de café", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.1': "Pon diez sillas alrededor de la mesa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.2': "Prepara café y té.", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.3': "El proyector no funciona.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.q': "¿A qué hora empieza la reunión?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.a': "A las diez. Asegúrate de que todo está listo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom': "Todo listo antes del primer invitado", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.b': "Una sala de reuniones tiene que estar lista antes de que entre la primera persona. Revisa las sillas, la mesa, el proyector y los cables. Pon café, té y agua, con tazas y leche. Lleva las bebidas calientes con cuidado, y nunca por encima de las personas. Después de la reunión, limpia la mesa y llévate todo. Lo que oyes en una sala de reuniones, te lo guardas para ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.p': "La sala está lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.s': "La reunión empieza en cinco minutos. El proyector no funciona. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o1': "Se lo dices enseguida a quien organiza la reunión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o2': "Esperas: quizá nadie lo necesita.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o3': "Dejas una nota en la mesa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.w': "Cinco minutos todavía es tiempo para arreglarlo o buscar otra sala. Más tarde, todos esperan.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.maintenance': "Averías, reparaciones y mudanzas", // nieuw, nalezen // nagelezen AI 28 nov
    'l.faults': "Avisar de una avería", // nieuw, nalezen // nagelezen AI 28 nov
    'w.melding': "el aviso (dices que algo está mal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekkage': "la fuga de agua (sale agua)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verwarming': "la calefacción", // nieuw, nalezen // nagelezen AI 28 nov
    'w.airco': "el aire acondicionado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvoer': "el desagüe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstopt': "atascado (no pasa nada)", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.1': "Aviso de la avería.", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.2': "Hay una fuga de agua en la cocina.", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.3': "El desagüe del váter está atascado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.q': "¿Por qué hace tanto frío aquí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.a': "La calefacción está rota. El técnico viene mañana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults': { m: "Avisa, no lo arregles tú solo", f: "Avisa, no lo arregles tú sola", x: "Avisa, no lo arregles sin ayuda" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.b': "¿Ves algo roto, como una fuga de agua, una lámpara que no funciona o una puerta que no cierra? Avisa, también cuando es pequeño: en el sistema o a tu encargado. Di dónde está, qué ves y desde cuándo. No hagas tú reparaciones de electricidad, gas ni calefacción. ¿Huele a gas? No uses un interruptor ni un teléfono cerca, abre las ventanas, saca a la gente, y pide ayuda desde fuera. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.p': "Quiero avisar de una avería.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.s': "Cae agua del techo en el pasillo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o1': "Avisas, y pones un cubo debajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o2': "Esperas: quizá se para.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o3': "Abres el techo para mirar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.w': "Una fuga pequeña puede causar un daño grande. Un cubo mantiene el suelo seco, para que nadie resbale.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.repairs': "Reparaciones pequeñas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervangen': "cambiar (poner uno nuevo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurklink': "la manilla de la puerta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scharnier': "la bisagra", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschapskist': "la caja de herramientas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rookmelder': "el detector de humo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batterij': "la pila", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.1': "Cambia la lámpara del pasillo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.2': "La manilla de la puerta está suelta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.3': "Coge la escalera de tijera, no una silla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.q': "¿Está pitando el detector de humo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.a': "Sí, la pila está casi gastada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs': "Una escalera de tijera, nunca una silla", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.b': "Para una lámpara o una balda alta, usa una escalera de tijera, nunca una silla, una mesa o una caja. Ponla en un suelo plano, ábrela del todo, y no te subas al último peldaño. Apaga la luz antes de cambiar una lámpara, y deja que una lámpara vieja se enfríe. Haz solo las reparaciones que has aprendido. Cuando termines, vuelve a poner las herramientas en la caja, para que nadie tropiece con ellas. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.p': "Voy a buscar la escalera de tijera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.s': "Una lámpara de la oficina está rota. La escalera de tijera está en otra planta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o1': "Vas a buscar la escalera de tijera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o2': "Te subes a una silla de oficina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o3': "Te subes al escritorio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.w': "Una silla puede rodar o volcarse. Una caída desde una silla te puede hacer mucho daño.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.moving': "Mudar un puesto de trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdoos': "la caja de mudanza", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureau': "el escritorio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureaustoel': "la silla de oficina", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkplek': "el puesto de trabajo (la mesa donde trabaja alguien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamernummer': "el número de sala", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plattegrond': "el plano (un mapa del edificio)", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.1': "Escribe el número de sala en cada caja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.2': "Pon las cajas en la carretilla de mano.", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.3': "Vacía el puesto de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.q': "¿Adónde tiene que ir este escritorio?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.a': "A la sala doce. Mira el plano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving': "Mudanzas: levanta bien, etiqueta todo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.b': "Una mudanza es un trabajo pesado. No llenes demasiado una caja: los libros y las carpetas pesan mucho. Levanta con las rodillas dobladas y la espalda recta, cerca del cuerpo. Usa la carretilla de mano para varias cajas, y levanta un escritorio con otra persona. Escribe el número de sala nuevo en cada caja, silla y ordenador. Primero desenchufa los cables. Nunca pongas cajas en un pasillo ni delante de una salida de emergencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.p': "¿Me ayudas a levantar esto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.s': "Tienes que mover un escritorio pesado. Tu compañero está en la pausa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o1': "Esperas ayuda, y lo levantáis entre los dos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o2': "Lo arrastras por tu cuenta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o3': { m: "Lo levantas tú solo, con mucho cuidado.", f: "Lo levantas tú sola, con mucho cuidado.", x: "Lo levantas sin ayuda, con mucho cuidado." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.w': "Un escritorio pesado te puede dañar la espalda cuando lo levantas sin ayuda. Entre dos es fácil y seguro.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.closing': "Abrir y cerrar el edificio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelbos': "el manojo de llaves", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiten': "cerrar con llave", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ronde': "la ronda (pasar por todas las salas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raam': "la ventana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmcode': "el código de la alarma", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtslot': "el cerrojo de seguridad (la cerradura extra para la noche)", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.1': "Hago la última ronda por el edificio.", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.2': "¿Están cerradas todas las ventanas?", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.3': "Echa el cerrojo de seguridad de la puerta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.q': "¿Queda alguien dentro?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.a': "No, se han ido todos. Voy a cerrar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing': "El código de la alarma es secreto", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.b': "Al final del día haces la última ronda. Comprueba que no queda nadie dentro, que las ventanas están cerradas y las luces apagadas. Las salidas de emergencia se quedan libres. Lleva las llaves contigo, nunca en un cajón. El código de la alarma es secreto: nunca se lo des a nadie, tampoco por teléfono. ¿Salta la alarma? Sigue los pasos de tu empresa. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.p': "No doy el código de la alarma.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.s': "Alguien llama: “Soy de la empresa de alarmas. ¿Cuál es su código?”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.closing.o1': "Dices que no, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o2': "Das el código: suena amable.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o3': "Das solo la mitad del código.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.w': "Una empresa de alarmas de verdad no te pide el código por teléfono. Un ladrón, quizá sí.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.guarding': "Rondas y control de acceso", // nieuw, nalezen // nagelezen AI 28 nov
    'l.patrol': "La ronda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.surveilleren': "patrullar (dar vueltas y vigilar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaklamp': "la linterna", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terrein': "el recinto (el terreno alrededor de un edificio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hek': "la valla, la verja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbraak': "el robo (alguien entra para robar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openstaan': "estar abierto (una puerta o ventana que debería estar cerrada)", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.1': "Hago una ronda cada dos horas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.2': "La verja detrás de la nave está abierta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.3': "Llévate la linterna.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.q': "¿Has visto algo durante tu ronda?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.a': "Sí. Había una ventana abierta junto a la puerta de atrás.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol': { m: "Mira y avisa, no te hagas el héroe", f: "Mira y avisa, no te hagas la heroína", x: "Mira y avisa, no corras riesgos" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.b': "En tu ronda miras: ¿están cerradas las puertas y las ventanas, está entera la valla, hay alguien que no debería estar ahí? Apunta lo que ves, con la hora. ¿Ves algo raro, como una ventana rota o una persona de noche? No entres sin compañía. Llama a la central o a la policía por la radio o por teléfono, y espera en un sitio seguro. Tu propia seguridad va primero. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.p': "Veo a alguien junto a la valla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.s': "De noche ves una puerta forzada. Oyes ruido dentro. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o1': "Te quedas fuera, y pides ayuda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o2': "Entras rápido, y miras.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o3': "Gritas hacia dentro que vas a entrar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.w': "Un ladrón dentro puede ser peligroso. La policía sabe qué hacer; tu trabajo es ver y avisar.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.access': "El control de acceso", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagboom': "la barrera (una barra sobre la carretera que sube)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegangspas': "la tarjeta de acceso (una tarjeta que abre la puerta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.legitimatie': "la identificación (un pasaporte o un documento de identidad)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaihek': "el torniquete (una puerta que gira, para una persona cada vez)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kenteken': "la matrícula (las letras y los números de un coche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegang': "el acceso (puedes entrar)", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.1': "¿Puedo ver su identificación?", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.2': "Su tarjeta no funciona. Voy a hacer una llamada.", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.3': "Abro la barrera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.q': "¿Puedo entrar? Me he olvidado la tarjeta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.a': "Lo siento, sin tarjeta no puede entrar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access': "Sin tarjeta, no se entra", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.b': "En la entrada o en el mostrador controlas quién entra. Todo el mundo necesita una tarjeta, o tiene que estar en la lista. Sé amable, también cuando alguien está enfadado o tiene prisa. No hagas excepciones porque alguien dice que es el jefe: compruébalo. Nunca prestes tu propia tarjeta a nadie, y nunca dejes que alguien entre detrás de ti. Si se pierde una tarjeta, hay que avisar enseguida. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.p': "¿Puedo ver su tarjeta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.s': "Un hombre de traje dice: “Soy el nuevo director. Todavía no tengo tarjeta”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.access.o1': "Lo compruebas, antes de dejarle entrar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o2': "Le dejas entrar: parece importante.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o3': "Le das tu propia tarjeta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.w': "Cualquiera puede decir que es el director. Una comprobación rápida mantiene seguro el edificio, y un director de verdad lo entenderá.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cameras': "Las cámaras y la central", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldkamer': "la central (donde se miran las cámaras y se atienden las llamadas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beeldscherm': "el monitor, la pantalla", // nieuw, nalezen // nagelezen AI 28 nov
    'w.camerabeelden': "las imágenes de las cámaras (lo que ha grabado la cámara)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inzoomen': "hacer zoom (acercar la imagen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewegingsmelder': "el detector de movimiento (ve cuando algo se mueve)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdachte': "el sospechoso, la sospechosa", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.1': "En la cámara tres veo a alguien junto a la valla.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.2': "Hago zoom.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.3': "La central llama a la policía.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.q': "¿Qué ves en la pantalla?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.a': "Un hombre junto a la valla. Envío a un compañero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras': "Las imágenes de las cámaras son privadas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.b': "Las cámaras graban a personas: al personal, a los visitantes y a la gente que pasa. Lo que ves en las pantallas es privado. Mira solo para tu trabajo, y nunca grabes la pantalla con tu móvil. Nunca envíes imágenes a amigos ni las subas a internet. ¿Hay un incidente? Apunta la cámara y la hora, y díselo a tu encargado. Solo tu empresa decide quién recibe las imágenes, por ejemplo la policía. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.p': "No puedo enseñar eso.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.s': "Un compañero te pide que le envíes un vídeo gracioso de las cámaras. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o1': "Dices que no: las imágenes son privadas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o2': "Se lo envías, solo a él.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o3': "Grabas la pantalla con tu móvil.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.w': "Las personas de las imágenes no han dado permiso para compartirlas. Enviarlas te puede costar el trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.report': "La radio y el informe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portofoon': "el walkie-talkie, la radio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapport': "el informe (lo que ha pasado, por escrito)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.incident': "el incidente (algo que ha salido mal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijdstip': "la hora (cuándo pasó algo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.logboek': "el libro de registro (un libro o una app donde lo apuntas todo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oproepen': "llamar (por la radio)", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.1': "Escribo un informe del incidente.", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.2': "¿Qué hora era exactamente?", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.3': "No te oigo bien. Repítelo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.q': "¿Qué hay que poner en el informe?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.a': "Qué ha pasado, dónde y a qué hora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report': "Escríbelo enseguida", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.b': "Escribe un informe justo después de un incidente, mientras todavía lo recuerdas bien. Escribe lo que has visto y oído tú: qué ha pasado, dónde, a qué hora, y quién estaba allí. Escribe hechos, no lo que piensas. Por la radio, habla corto y claro, y espera hasta que la otra persona haya terminado. Di quién eres y dónde estás. Un buen informe ayuda a la policía, a tu empresa y a ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.p': "Lo apunto enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.s': { m: "Después de una noche movida estás muy cansado. Hubo un incidente pequeño. ¿Qué haces?", f: "Después de una noche movida estás muy cansada. Hubo un incidente pequeño. ¿Qué haces?", x: "Después de una noche movida tienes mucho sueño. Hubo un incidente pequeño. ¿Qué haces?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o1': "Escribes el informe antes de irte a casa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o2': "Lo escribes mañana, después de dormir bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o3': "No lo escribes: era pequeño.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.w': "Mañana olvidas detalles. Un informe sin hora o sin lugar no ayuda a nadie.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.incidents': "Emergencias y la tienda", // nieuw, nalezen // nagelezen AI 28 nov
    'l.evacuation': "Incendio y evacuación", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmelder': "el pulsador de alarma de incendio (una caja roja que aprietas cuando hay fuego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandweer': "los bomberos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddeur': "la puerta cortafuegos (para el fuego y el humo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmeldcentrale': "la central de alarma de incendios (muestra dónde está la alarma)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontruimingsplan': "el plan de evacuación (quién hace qué cuando todos tienen que salir)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sirene': "la sirena", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.1': "Hay una alarma de incendio en la nave dos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.2': "Mantén cerradas las puertas cortafuegos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.3': "Espero a los bomberos en la entrada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.q': "¿Están todos fuera?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.a': "No, todavía faltan dos personas de la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation': "Fuego: primero la alarma, luego fuera", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.b': "¿Ves fuego o humo? Aprieta el pulsador de alarma de incendio, o llama al 112. Luego ayuda a la gente a salir por las vías de evacuación, nunca por el ascensor. Cierra las puertas detrás de ti, pero no con llave. Apaga un fuego solo cuando es pequeño y has aprendido cómo. Ve al punto de reunión, y cuenta quién está. Recibe a los bomberos en la entrada, y cuéntales lo que sabes. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.p': "Todo el mundo fuera, al punto de reunión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.s': "Suena la alarma de incendio. Un hombre quiere coger el ascensor. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o1': "Le mandas a las escaleras.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o2': "Le dejas: el ascensor es más rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o3': "Vas con él en el ascensor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.w': "En un incendio, el ascensor se puede parar o llenar de humo. Las escaleras son la salida segura.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.firstaid': "Primeros auxilios y el 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ehbo': "los primeros auxilios", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aed': "el DEA, el desfibrilador (una máquina que ayuda a un corazón que se ha parado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reanimeren': "hacer la RCP (apretar el pecho para salvar una vida)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewusteloos': "inconsciente (la persona no se despierta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ademen': "respirar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmnummer': "el número de emergencias (112)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.1': "Llama al 112. Pide una ambulancia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.2': "Trae el DEA de la recepción.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.3': "No respira. Voy a hacer la RCP.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.q': "¿Dónde está el DEA?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.a': "En la entrada, al lado del ascensor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid': "Llama al 112, empieza la RCP, trae el DEA", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.b': "¿Alguien se cae y no reacciona? Llama al 112 enseguida, o haz que otra persona llame. Mira si la persona respira normal. Si no: empieza la RCP, y haz que alguien traiga el DEA. El DEA habla y te dice qué hacer; no lo puedes hacer mal. Sigue hasta que la ambulancia se haga cargo. ¿Tienes un curso de primeros auxilios? Díselo a tus compañeros, para que sepan a quién llamar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.p': "Llama al 112 y trae el DEA.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.s': "Un hombre se cae en el vestíbulo. No se mueve y no respira. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o1': "Llamas al 112, y empiezas la RCP.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o2': "Esperas a ver si se despierta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o3': "Le levantas, y le sientas en una silla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.w': "Cuando el corazón se para, cada minuto cuenta. La RCP y un DEA pueden salvar una vida antes de que llegue la ambulancia.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shoplifting': "Robos en la tienda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkeldiefstal': "el hurto en tiendas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heterdaad': "en flagrante (lo ves pasar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhouden': "retener a alguien (hasta que llega la policía)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.detectiepoortje': "el arco antirrobo (pita en la puerta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmlabel': "la etiqueta antirrobo (hace pitar el arco)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstoppen': "esconder", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.1': "El arco pita en la salida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.2': "Lo he visto pasar.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.3': "Le retengo hasta que llegue la policía.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.q': "¿Puedo registrar su bolsa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.a': "No. Eso lo hace la policía.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting': "Robos: mira, avisa, nada de fuerza bruta", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.b': "¿Has visto a alguien robar? Mantén la calma, y llama a la policía enseguida. Algunas tiendas dejan que un vigilante retenga a un ladrón hasta que llega la policía; otras dicen: solo mira, avisa y recuerda cómo es la persona. Nunca pegues ni des patadas, y nunca agarres a nadie por el cuello. Nunca registres a una persona, sus bolsillos ni su bolsa: eso es para la policía. Apunta lo que has visto, y guarda las imágenes de las cámaras. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.p': "¿Me acompaña, por favor?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.s': "Has visto a una mujer meter una botella en su bolso. Sale de la tienda. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o1': "La paras con calma, y llamas a la policía.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o2': "Registras su bolso en la puerta, rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o3': "La tiras al suelo con fuerza.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.w': "Registrar a una persona es para la policía, y la fuerza bruta puede hacer daño a alguien y meterte en problemas.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.aggression': "Personas difíciles", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agressie': "la agresividad (una conducta enfadada y violenta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schelden': "insultar a alguien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalmeren': "calmarse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afstand': "la distancia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisverbod': "la prohibición de entrada (ya no puedes entrar aquí)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bodycam': "la cámara corporal (una cámara pequeña en tu uniforme)", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.1': "Cálmese, señor. Quiero ayudarle.", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.2': "Mantén la distancia y la calma.", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.3': "Tiene prohibida la entrada. Tiene que irse ahora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.q': "¿Por qué no puedo entrar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.a': "Tiene prohibida la entrada aquí.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression': "Mantén la calma y la distancia", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.b': "Una persona enfadada se calma antes cuando tú mantienes la calma. Habla despacio y bajo, y habla de usted a la persona (en neerlandés: “u”). Deja un brazo de distancia o más entre vosotros, y ten una salida detrás de ti. No toques a la persona y no le grites. ¿Se pone peligroso? Da un paso atrás, y llama a un compañero o a la policía. Después, apúntalo. Después de un incidente grave, habla de ello con alguien. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.p': "Cálmese. Quiero ayudarle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.s': "Un hombre te grita y se acerca mucho. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o1': "Das un paso atrás, y hablas con calma.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o2': "Le gritas, más fuerte que él.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o3': "Le empujas lejos de ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.w': "Las palabras tranquilas y el espacio bajan la tensión. Gritar o empujar lo empeora.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodhygiene': "Higiene y frío", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hygienelock': "La esclusa de higiene", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hygienesluis': "la esclusa de higiene (la sala donde te limpias antes de entrar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baardnetje': "el cubrebarbas (una redecilla para la barba)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzenwasser': "el lavabotas (cepillos que limpian tus botas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.desinfecteren': "desinfectar (matar los gérmenes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkjas': "la bata de trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bacterie': "el germen, la bacteria", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.1': "Lávate las manos y desinféctalas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.2': "Ponte la redecilla para el pelo y el cubrebarbas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.3': "Pasa por el lavabotas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.q': "¿Puedo dejarme el reloj puesto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.a': "No, hay que quitarse todas las joyas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock': { m: "Entra limpio, cada vez", f: "Entra limpia, cada vez", x: "Higiene al entrar, cada vez" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.b': "En una fábrica de alimentos, tú eres el mayor peligro para la comida: los gérmenes vienen de tus manos, tu pelo y tu ropa. Por eso pasa por la esclusa de higiene cada vez que entras, también después de una pausa o de ir al váter. Redecilla puesta, cubrebarbas si tienes barba, ropa de trabajo limpia, todas las joyas fuera. Lávate las manos con jabón, sécalas y desinféctalas. ¿Te encuentras mal, con diarrea o vómitos? Díselo a tu encargado antes de empezar. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.p': "Tengo diarrea. ¿Puedo trabajar hoy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.s': "Vuelves del váter. Tu compañero dice: “Sáltate la esclusa, hay mucho trabajo”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.hygienelock.o1': "Pasas por la esclusa de todas formas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o2': "Te la saltas, solo esta vez.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o3': "Solo te pones guantes nuevos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.w': "Los gérmenes del váter pueden enfermar a muchos clientes. Unos minutos en la esclusa lo evitan.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.allergens': "Alérgenos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergeen': "el alérgeno (un alimento que pone muy enfermas a algunas personas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.noten': "los frutos secos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinda': "el cacahuete", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gluten': "el gluten (en el trigo, o sea en el pan y los pasteles)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sesam': "el sésamo (semillas pequeñas, por ejemplo en el pan)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisbesmetting': "la contaminación cruzada (algo entra en la comida donde no debe estar)", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.1': "Este producto lleva frutos secos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.2': "Mira en la etiqueta qué alérgenos lleva.", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.3': "Después de los cacahuetes, limpia todo bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.q': "¿Esta tarrina puede ir con las otras?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.a': "No, lleva frutos secos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens': "Basta con una traza", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.b': "Para algunas personas, una cantidad muy pequeña de frutos secos, cacahuete, leche, huevo, gluten o sésamo puede poner su vida en peligro. Por eso la etiqueta tiene que decir exactamente qué lleva un producto. Mantén los alérgenos aparte: sus propias tarrinas, herramientas y colores. Después de un producto con un alérgeno, se limpia la línea antes del producto siguiente. Nunca cambies un ingrediente por otro, tampoco cuando parece igual. ¿Tienes dudas? Pregunta. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.p': "¿Esto lleva frutos secos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.s': "Se han acabado las almendras. Un compañero dice: “Usa avellanas, nadie se va a dar cuenta”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.allergens.o1': "Dices que no, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o2': "Las usas: frutos secos son frutos secos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o3': "Las usas, y no cambias nada en la etiqueta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.w': "La etiqueta tiene que decir lo que lleva. Un fruto seco equivocado puede poner muy enferma a una persona con alergia.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.coldroom': "La cámara frigorífica y el congelador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperatuur': "la temperatura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graden': "los grados (°C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevroren': "congelado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontdooien': "descongelar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelketen': "la cadena de frío (la comida se queda fría todo el camino)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermokleding': "la ropa térmica (ropa de abrigo para el frío)", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.1': "En la cámara de congelación hace dieciocho grados bajo cero.", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.2': "Pon la carne en la cámara frigorífica enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.3': "Apunta la temperatura en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.q': "¿Por qué pita la cámara frigorífica?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.a': "La puerta está abierta. Ciérrala rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom': "Trabajo en frío: abrígate, y mantén el frío", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.b': "La comida tiene que estar fría todo el camino: del camión a la cámara frigorífica y a la tienda. Por eso guarda los productos fríos enseguida, y mantén cerradas las puertas de la cámara frigorífica y del congelador. Revisa la temperatura y apúntala. En el congelador, ponte la ropa térmica, guantes y un gorro, y haz a tiempo una pausa en un sitio caliente. Asegúrate de que siempre puedes abrir la puerta desde dentro. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.p': "Aquí hace demasiado calor. La refrigeración no funciona.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.s': "El termómetro de la cámara frigorífica marca un número mucho más alto de lo normal. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o1': "Se lo dices enseguida a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o2': "Esperas: ya se enfriará otra vez.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o3': "Apuntas el número normal en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.w': "Demasiado calor significa que crecen gérmenes. Tu encargado decide si la comida todavía es segura.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.foreignbody': "Vidrio, metal y plástico en la comida", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metaaldetector': "el detector de metales", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glasbreuk': "la rotura de vidrio (vidrio que se ha roto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.splinter': "la astilla (un trozo pequeño y afilado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vreemdvoorwerp': "el cuerpo extraño (algo en la comida que no debe estar ahí)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervuild': "contaminado (ha entrado algo sucio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegleider': "el jefe de turno", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.1': "El detector de metales pita. Para la línea.", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.2': "Se ha roto un vidrio en la línea dos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.3': "Pon el producto en la caja de rechazos.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.foreignbody.q': "¿Qué hago con este trozo de plástico?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.a': "Enséñaselo al jefe de turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody': "¿Algo en la comida? Para y avisa", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.b': "El vidrio, el metal, el plástico, una tirita o un pelo nunca pueden acabar en la comida. ¿Pita el detector de metales, o encuentras algo raro? Pon el producto aparte, y díselo al jefe de turno. ¿Se ha roto un vidrio? Para la línea cerca de ahí: el jefe de turno decide qué hay que tirar. Usa solo tiritas azules, para que se vean fácil. Nunca lleves vidrio, bolígrafos ni cosas sueltas a la zona de trabajo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.p': "He encontrado algo en el producto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.s': "Se rompe una lámpara de vidrio encima de la línea. Los productos siguen pasando. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o1': "Paras la línea, y llamas al jefe de turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o2': "Quitas el vidrio que ves.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o3': "Sigues: el detector encuentra el vidrio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.w': "Un detector de metales no encuentra el vidrio. Los trozos pequeños que no ves pueden hacer mucho daño a un cliente.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodline': "La línea de producción", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cutting': "Cortar y pesar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitbenen': "deshuesar (sacar los huesos de la carne)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fileren': "filetear (cortar pescado o carne en trozos planos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portie': "la porción", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wegen': "pesar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gewicht': "el peso", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijplank': "la tabla de cortar", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.1': "Pesa cada porción.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.2': "El peso es demasiado bajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.3': "Afila el cuchillo antes de empezar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.q': "¿Cuánto tiene que ir en una tarrina?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.a': "Quinientos gramos. Mira la báscula.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting': "Cuchillo afilado, mano segura", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.b': "Un cuchillo afilado es más seguro que uno sin filo: necesitas menos fuerza, así que resbala menos. Ponte siempre el guante anticorte en la otra mano. Corta hacia fuera, lejos de tu cuerpo. Deja el cuchillo plano sobre la tabla, nunca en un fregadero ni debajo de la carne. No intentes coger un cuchillo que se cae: da un paso atrás. Lleva el cuchillo con la punta hacia abajo, cerca de la pierna. Hasta un corte pequeño hay que taparlo y avisarlo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.p': "Mi cuchillo está desafilado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.s': "El cuchillo se te escapa de la mano y se cae. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o1': "Das un paso atrás, y lo dejas caer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o2': "Lo coges rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o3': "Lo paras con el pie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.w': "Un cuchillo que cae corta hondo cuando lo agarras. En el suelo no puede hacer daño.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.labels': "Envasar y etiquetas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketteren': "etiquetar (poner etiquetas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lotnummer': "el número de lote (un número para un lote de productos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vacuum': "envasado al vacío (sin nada de aire)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaal': "la bandeja (un plato plano para comida)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.printer': "la impresora", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omdoos': "la caja exterior (la caja grande alrededor de los paquetes pequeños)", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.1': "Comprueba que la fecha de la etiqueta está bien.", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.2': "Este paquete no está al vacío. Envásalo otra vez.", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.3': "Apunta el número de lote en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.q': "¿Qué fecha hay que poner?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.a': "Dentro de diez días. Mira la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels': "Una etiqueta equivocada es peligrosa", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.b': "La etiqueta le dice al cliente qué lleva, cuánto pesa y hasta cuándo está bueno. Una fecha o una etiqueta equivocada puede enfermar a la gente, por ejemplo cuando falta un alérgeno. Por eso revisa las primeras etiquetas de cada tanda nueva: el producto, la fecha y el número de lote. ¿Hay algo mal? Para, y díselo a tu encargado. Los productos con una etiqueta equivocada se ponen aparte, nunca se venden. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.p': "La etiqueta no está bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.s': "Ves que la fecha de las etiquetas es una semana demasiado tarde. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o1': "Dejas de envasar, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o2': "Sigues: una semana no importa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o3': "Cambias la fecha con un bolígrafo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.w': "Con una fecha equivocada, la gente puede comer comida que ya no es segura. Mejor parar ahora que retirarla después.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.linecleaning': "Limpiar la línea", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuim': "la espuma", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hogedrukspuit': "la hidrolimpiadora (echa agua a mucha presión)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naspoelen': "aclarar (lavar con agua limpia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.demonteren': "desmontar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.borstel': "el cepillo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restjes': "los restos (trocitos de comida)", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.1': "Primero apaga la máquina.", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.2': "Echa la espuma sobre la cinta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.3': "Luego aclara todo con agua limpia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.q': "¿Ya está limpia la cinta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.a': "Todavía no. Todavía tengo que aclararla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning': "Apaga antes de limpiar", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.b': "Nunca limpies una máquina que está en marcha. Apágala, y asegúrate de que nadie la puede volver a poner en marcha: sigue los pasos de tu empresa. Ponte los guantes, las gafas y las botas adecuados: los productos de limpieza te pueden quemar la piel y los ojos. Nunca mezcles productos. Primero quita los restos, luego echa espuma, frota y aclara. No eches agua sobre cajas eléctricas ni enchufes. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.p': "¿Está apagada la máquina?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.s': "Hay carne atascada en la cinta. La máquina todavía está en marcha. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o1': "Primero la apagas, luego la sacas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o2': "La sacas rápido con la mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o3': "La sacas empujando con un cuchillo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.w': "Una cinta en marcha te puede atrapar la mano en un segundo. Apagarla cuesta solo un momento.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.haccp': "Revisar y apuntar (HACCP)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlepunt': "el punto de control (un paso donde tienes que revisar algo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerntemperatuur': "la temperatura interna (la temperatura dentro de la comida)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikthermometer': "el termómetro de pincho (lo clavas en la comida)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijking': "la desviación (algo no está como debería)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekproef': "el control por muestreo (pruebas unos cuantos productos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwaliteitsdienst': "el departamento de calidad (QA)", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.1': "Mide la temperatura interna con el termómetro de pincho.", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.2': "Apúntalo todo en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.3': "¿Hay algo mal? Avísalo enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.q': "¿Por qué tengo que apuntarlo todo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.a': "Así sabemos que la comida es segura.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp': "HACCP: revisa, apunta, avisa", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.b': "Toda empresa de alimentos trabaja con un plan de seguridad alimentaria (HACCP). Dice en qué pasos tienes que revisar algo, como la temperatura de la cámara frigorífica o la temperatura interna de la carne cocinada. Tú revisas, lo apuntas y firmas. Apunta lo que has medido de verdad, también cuando está mal. Un número malo no es culpa tuya, pero esconderlo es peligroso. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.p': "La temperatura está demasiado alta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.s': "Se te ha olvidado medir a las diez. Tu compañero dice: “Apunta un número bueno y ya está”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.haccp.o1': "Mides ahora, y apuntas la hora real.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o2': "Apuntas un número bueno para las diez.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o3': "Dejas la casilla vacía.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.w': "La lista tiene que mostrar lo que pasó de verdad. Un número inventado esconde un problema que puede enfermar a la gente.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.collection': "Recoger la basura", // nieuw, nalezen // nagelezen AI 28 nov
    'l.binlorry': "El camión de la basura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniswagen': "el camión de la basura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kliko': "el contenedor con ruedas (un cubo de basura con ruedas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kieplift': "el elevador de contenedores (levanta el contenedor y lo vacía)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.treeplank': "el estribo trasero (un escalón en la parte de atrás del camión)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijplaatsing': "la basura de más (bolsas dejadas al lado del contenedor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ophaaldag': "el día de recogida", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.1': "Pon el contenedor con ruedas en el elevador.", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.2': "Hay bolsas al lado del contenedor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.3': "El contenedor con ruedas pesa demasiado. Déjalo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.q': "¿Puedo ir en la parte de atrás?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.a': "No, tú te subes a la cabina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry': "Que te vean, y viaja dentro", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.b': "Ponte la ropa de alta visibilidad en cada ronda. Sube y baja por el lado de la acera, nunca por el lado del tráfico. Viaja en la cabina, no detrás en el camión: eso solo cuando tu empresa lo permite claramente, y nunca cuando va marcha atrás o rápido. Aléjate del elevador mientras se mueve. ¿Un contenedor pesa demasiado, o sale algo de él? Déjalo, y avísalo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.p': "Este contenedor con ruedas pesa demasiado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.s': "La calle siguiente está muy cerca. El conductor dice: “Súbete al estribo de atrás”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.binlorry.o1': "Te subes a la cabina de todas formas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o2': "Te subes al estribo: está cerca.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o3': "Vas andando detrás del camión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.w': "Caerse de un camión en marcha es uno de los mayores peligros de este trabajo. En la cabina no corres peligro.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.reversing': "Marcha atrás con seguridad", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achteruitrijden': "dar marcha atrás (conducir hacia atrás)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dodehoek': "el ángulo muerto (donde el conductor no te ve)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzer': "el señalista (la persona que guía al conductor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogcontact': "el contacto visual", // nieuw, nalezen // nagelezen AI 28 nov
    'w.piepen': "pitar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cabine': "la cabina (donde se sienta el conductor)", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.1': "Nunca te pongas detrás del camión.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.2': "No te veo en el espejo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.3': "Busca el contacto visual con el conductor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.q': "¿Me ayudas a dar marcha atrás?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.a': "Sí, estoy a la izquierda. Mira por el espejo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing': "Nunca detrás de un camión que da marcha atrás", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.b': "Muchos accidentes con camiones de basura pasan cuando van marcha atrás. El conductor no ve justo detrás del camión: es el ángulo muerto. Por eso nunca te pongas ni camines detrás de un camión que puede dar marcha atrás. Guía al conductor desde el lado, donde os podéis ver en el espejo. ¿Se pierde el contacto visual? El conductor para. Acordad señales claras antes de empezar. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.p': "¡Para! Ya no te veo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.s': "El camión da marcha atrás. Vas por detrás de él para coger una bolsa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o1': "Esperas hasta que el camión esté parado.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.reversing.o2': "Pasas rápido: es solo un segundo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o3': "Saludas al conductor con la mano, y pasas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.w': "Un conductor no te puede ver detrás del camión. Un segundo basta para un accidente.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesorting': "Separar la basura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papier': "el papel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plastic': "el plástico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gft': "los residuos orgánicos (fruta, verdura y plantas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restafval': "la basura de resto (lo que no se puede separar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.karton': "el cartón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blik': "la lata", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.1': "El vidrio va al contenedor de vidrio.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.2': "Esto va con la basura de resto.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.3': "Dobla el cartón para que quede plano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.q': "¿Dónde va una caja de pizza?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.a': "Con la basura de resto. Tiene grasa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting': "Separar bien ahorra trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.b': "La basura separada se puede volver a usar: el papel se convierte en papel, el vidrio en vidrio. Pero una sola cosa equivocada puede estropear toda una carga. Por eso mira en el contenedor antes de vaciarlo. ¿Hay algo que no va ahí, como una bolsa de basura de resto en el papel? Déjalo, o sigue las normas de tu empresa. Qué basura va dónde cambia de un municipio a otro: aprende las normas de tu zona. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.p': "Esto no va aquí.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.s': "Un contenedor de papel está lleno de bolsas de basura negras. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o1': "Lo dejas, y lo avisas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o2': "Lo vacías con el papel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o3': "Sacas las bolsas con la mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.w': "La basura en el papel estropea toda la carga. Las bolsas también pueden llevar cosas afiladas o sucias.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesafety': "Cosas afiladas y levantar peso", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijwond': "el corte (una herida de algo afilado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikken': "pinchar (una punta afilada entra en tu piel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naald': "la aguja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherp': "afilado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rugpijn': "el dolor de espalda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tetanusprik': "la vacuna del tétanos (una inyección contra una enfermedad por suciedad en una herida)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.1': "Nunca cojas una bolsa por abajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.2': "Cuidado, hay vidrio en esta bolsa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.3': "Me he pinchado con una aguja.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.q': "Me he cortado. ¿Qué tengo que hacer?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.a': "Lava bien la herida. Y dímelo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety': "Nunca aprietes una bolsa", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.b': "Una bolsa de basura puede llevar vidrio, cuchillos o agujas. Por eso nunca aprietes una bolsa contra tu cuerpo, nunca la estrujes, y nunca la lleves apoyada en la pierna: cógela por arriba, lejos de ti. Ponte los guantes. Levanta con las rodillas dobladas y la espalda recta, y empuja un contenedor, no lo cargues. ¿Algo te ha pinchado o cortado? Lava bien la herida con agua, y díselo a tu encargado el mismo día.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.p': "Me he pinchado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.s': "Una bolsa se rompe. Ves una aguja dentro. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o1': "No la tocas, y lo avisas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o2': "La recoges con los guantes puestos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o3': "La vuelves a meter en la bolsa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.w': "Los guantes no paran una aguja. Una aguja puede transmitir una enfermedad.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.recycling': "El punto limpio", // nieuw, nalezen // nagelezen AI 28 nov
    'l.yard': "En el punto limpio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.milieustraat': "el punto limpio (donde la gente lleva basura grande o especial)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grofvuil': "los voluminosos (cosas grandes, como un sofá)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puin': "los escombros (piedras y ladrillos rotos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.matras': "el colchón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegbrug': "la báscula de camiones (una báscula para coches y camiones)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvalpas': "la tarjeta de residuos (los vecinos la enseñan en la entrada)", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.1': "Los escombros van al contenedor cuatro.", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.2': "¿Puedo ver su tarjeta de residuos?", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.3': "Primero pase con el coche por la báscula.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.q': "¿Dónde va este colchón?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.a': "En el contenedor de voluminosos, al fondo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard': "Ayuda, pero mantén seguro el punto limpio", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.b': "En el punto limpio les dices a los visitantes dónde va su basura, y compruebas que está bien separada. Sé amable: mucha gente viene solo unas pocas veces al año y no conoce las normas. Mantén a los niños y a los visitantes lejos de las máquinas y del borde de los contenedores altos. Levanta las cosas pesadas con otra persona, o deja que el visitante cargue lo suyo. ¿Alguien trae algo que no conoces? Pregunta antes de que entre. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.p': "Esto va al contenedor cuatro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.s': "Un hombre quiere tirar una bolsa llena al contenedor de madera. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o1': "Le preguntas qué hay en la bolsa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o2': "Le dejas: es su basura.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o3': "La tiras tú por él.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.w': "Una sola cosa equivocada puede estropear un contenedor lleno. Una pregunta amable mantiene limpia la basura.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hazardous': "Residuos químicos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chemischafval': "los residuos químicos (basura peligrosa, como pintura y aceite)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spuitbus': "el aerosol, el spray", // nieuw, nalezen // nagelezen AI 28 nov
    'w.asbest': "el amianto (un material peligroso en edificios viejos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekken': "perder líquido, gotear", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gevarensymbool': "el símbolo de peligro (un dibujo que avisa de un peligro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vat': "el bidón, el barril", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.1': "Pon la pintura con los residuos químicos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.2': "Esta botella pierde líquido. Cógela con guantes.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.3': "El amianto tiene que estar bien envuelto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.q': "¿Qué hay en esta botella?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.a': "No lo sé. Ponla aparte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous': "¿No sabes qué es? No lo abras, no lo huelas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.b': "Los residuos químicos, como pintura, aceite, productos de limpieza, pilas y aerosoles, pueden quemar, envenenar o explotar. Busca los símbolos de peligro. Ponte guantes y gafas de seguridad. Nunca abras una botella para oler lo que hay dentro, y nunca mezcles productos. Mantén de pie una botella que pierde líquido, y ponla en una bandeja. El amianto solo puede entrar cuando está bien envuelto: nunca lo rompas, y no lo saques del envoltorio. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.p': "¿Qué hay aquí dentro?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.s': "Una mujer trae una botella sin etiqueta. Huele fuerte. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o1': "La pones aparte, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o2': "La abres, y hueles qué es.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o3': "La echas en el bidón de pintura.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.w': "Los productos desconocidos pueden reaccionar con otros. Tu encargado sabe dónde puede ir sin peligro.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.baler': "La prensa embaladora", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balenpers': "la prensa embaladora (una máquina que prensa la basura en bloques)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baal': "la bala (un bloque prensado de papel o plástico)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persen': "prensar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastlopen': "atascarse", // nieuw, nalezen // nagelezen AI 28 nov
    'w.binddraad': "el alambre para atar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulopening': "la boca de carga (por donde entra la basura)", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.1': "La prensa está atascada. Aprieta la parada de emergencia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.2': "Nunca metas la mano en la prensa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.3': "Ata bien la bala.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.q': "La prensa se atasca. ¿Puedo echar un vistazo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.a': "No. Primero se quita la corriente.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler': "Nunca metas la mano en la prensa", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.b': "Una prensa embaladora aprieta con una fuerza enorme. Úsala solo cuando has aprendido cómo. Nunca metas una mano, un brazo o un pie en la boca de carga, tampoco cuando la máquina parece parada. ¿Se atasca? Aprieta la parada de emergencia, apágala y asegúrate de que nadie la puede encender: sigue los pasos de tu empresa. Solo entonces miras. Nunca te metas dentro de una prensa ni de un contenedor. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.p': "La prensa está atascada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.s': "Un trozo de cartón está atascado en la boca de carga. La máquina está parada. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o1': "La apagas del todo, y luego lo sacas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o2': "Lo sacas rápido con la mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o3': "Lo empujas hacia dentro con el pie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.w': "Una máquina parada se puede volver a poner en marcha. Sin quitar la corriente, tu mano está en peligro.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shovel': "La pala cargadora en el punto limpio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.shovel': "la pala cargadora (una máquina grande con una pala delante)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaailamp': "la luz giratoria (una luz naranja encima de una máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bunker': "el compartimento (un espacio grande de hormigón para un tipo de basura)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.looppad': "el pasillo peatonal (un camino solo para personas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toeteren': "tocar el claxon", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opscheppen': "recoger con la pala", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.1': "Quédate en el pasillo peatonal.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.2': "La pala cargadora va marcha atrás. ¡Cuidado!", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.3': "La luz giratoria está encendida. La máquina se está moviendo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.q': "¿Puedo pasar al lado de la pala cargadora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.a': "Solo si el conductor te ve.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel': "No te pongas en el camino de la pala cargadora", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.b': "Una pala cargadora es grande, y su conductor ve poco a su alrededor, sobre todo detrás. Por eso quédate en los pasillos peatonales, y ponte la ropa de alta visibilidad. Nunca camines detrás de una máquina que se mueve. ¿Quieres pasar? Espera hasta que el conductor te haya visto y te haga una señal. La luz giratoria significa: esta máquina está trabajando. Mantén a los visitantes muy lejos de ella. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.shovel.p': "¿Me has visto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.s': "Tienes que pasar al lado de una pala cargadora que está trabajando. El conductor mira hacia otro lado. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o1': "Esperas hasta que te vea.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.shovel.o2': "Pasas rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o3': "Pasas por detrás de la máquina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.w': "Un conductor que no te ha visto no puede parar por ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.toddlers': "Los niños", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nappies': "Cambiar pañales", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luier': "el pañal", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verschonen': "cambiar (un pañal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.commode': "el cambiador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.billendoekje': "la toallita húmeda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potje': "el orinal", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zindelijk': "que ya no necesita pañal (el niño puede usar el váter)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.1': "Voy a cambiar a Sem.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.2': "Lávate las manos después de cambiar un pañal.", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.3': "Nunca dejes a un niño solo en el cambiador.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.q': "¿Cuándo cambiaste a Noor?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.a': "A las diez. Está en la app.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies': "Una mano sobre el niño", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.b': "Prepáralo todo antes de poner a un niño en el cambiador: un pañal limpio, toallitas y ropa. Luego mantén siempre una mano sobre el niño. Nunca te alejes, tampoco un segundo. Lávate las manos después de cada cambio, y limpia el cambiador. Apunta cuándo has cambiado el pañal, para que lo sepan los padres. ¿Ves una irritación o una herida? Apúntalo, y díselo a un compañero. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.p': "Ahora le estoy cambiando.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.s': "Estás cambiando a un bebé. Se te han olvidado las toallitas; están al otro lado de la sala. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o1': "Te llevas al bebé contigo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o2': "Vas a por ellas rápido: está cerca.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o3': "Dejas al bebé, y pides ayuda en voz alta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.w': "Un bebé se puede caer de un cambiador en un segundo. Nunca dejes a un niño solo ahí arriba.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mealtime': "Comer y beber", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fles': "el biberón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slabbetje': "el babero", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beker': "la taza (con asa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kinderstoel': "la trona", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fruithap': "el puré de fruta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boertje': "el eructo", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.1': "Lávate las manos antes de comer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.2': "Dale el biberón a Lisa a las doce.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.3': "Todos sentados a la mesa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.q': "¿Puede Daan comer una galleta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.a': "No, tiene una alergia. Mira la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime': "Mira la lista antes de dar comida", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.b': "Antes de darle comida o bebida a un niño, mira la lista: algunos niños tienen una alergia, otros no pueden comer ciertas cosas por su salud o por su religión. Lávate las manos y lava las manos de los niños antes de comer. Haz que los niños estén sentados mientras comen y beben; nunca andando ni corriendo. Corta la comida en trozos pequeños para los niños pequeños, por ejemplo las uvas. Nunca le des a un niño algo de casa de otro niño. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.p': "¿Puede comer esto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.s': "Un niño llora porque quiere una galleta. No conoces bien a este niño. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o1': "Primero miras la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o2': "Se la das: es solo una galleta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o3': "Le das media galleta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.w': "Una galleta puede llevar frutos secos, leche o huevo. Para un niño con alergia, eso puede ser muy peligroso.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.naptime': "Dormir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedje': "la cuna (una cama pequeña para un bebé)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapkamer': "el dormitorio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knuffel': "el peluche", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speen': "el chupete", // nieuw, nalezen // nagelezen AI 28 nov
    'w.babyfoon': "el vigilabebés", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapzak': "el saco de dormir para bebé", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.1': "Acuesta al bebé boca arriba.", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.2': "Me asomo a menudo al dormitorio.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.naptime.3': "Aquí tienes tu peluche. Que duermas bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.q': "¿Ya está dormida Mila?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.a': "Sí, desde la una. Ahora vuelvo a mirar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime': "Los bebés duermen boca arriba", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.b': "Un bebé duerme más seguro boca arriba, en un saco de dormir, en su propia cuna. Nada de almohada, ni mantas sueltas, ni juguetes grandes en la cuna. Mantén el cuarto fresco y ventilado. Mira a menudo a los niños que duermen: mira y escucha, también cuando el vigilabebés está encendido. ¿Un padre o una madre te pide que su bebé duerma de otra forma? Primero díselo a tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.p': "Voy a echar un vistazo al dormitorio.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.naptime.s': "Un bebé se ha dormido boca abajo en la cuna. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o1': "Le das la vuelta con cuidado, boca arriba.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o2': "Le dejas dormir: ahora está dormido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o3': "Le pones una almohada al lado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.w': "Boca arriba, un bebé puede respirar libremente. Una almohada le puede tapar la cara.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.playtime': "Jugar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spelen': "jugar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speelgoed': "los juguetes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zandbak': "el arenero", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijbaan': "el tobogán", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puzzel': "el puzle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buitenspelen': "jugar fuera", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.1': "Vamos a jugar fuera. ¡Abrigos puestos!", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.2': "Recoge los juguetes.", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.3': "Un niño cada vez en el tobogán.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.q': "¿Puedo jugar con el puzle?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.a': "Sí, en la mesa. Luego lo recoges.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime': "Juego seguro: mira, cuenta, revisa", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.b': "Los niños aprenden jugando, así que déjales probar cosas. Pero tenlos siempre a la vista, también fuera. Cuenta a los niños cuando salís y cuando volvéis a entrar. Primero revisa el patio: ¿está cerrada la puerta, hay cristales o basura? Los juguetes con piezas pequeñas no son para niños menores de tres años: se pueden atragantar con ellas. Limpia a menudo los juguetes que se meten en la boca. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.p': "¿Estamos todos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.s': "Vuelves a entrar del patio. Cuentas un niño de menos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o1': "Se lo dices a un compañero, y buscas enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o2': "Esperas: el niño ya entrará solo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o3': "Vuelves a contar mañana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.w': "Un niño solo fuera se puede hacer daño o irse. Cada minuto cuenta.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.daycare': "Padres, seguridad y el grupo", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pickup': "Traer y recoger", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouder': "el padre, la madre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscheid': "la despedida", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppas': "el canguro, la canguro (alguien que cuida niños)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftje': "el cuaderno (para notas entre los padres y el personal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderapp': "la app para padres (para fotos y mensajes a los padres)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wennen': "adaptarse (acostumbrarse a un sitio nuevo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.1': "Lo apunto en el cuaderno.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.2': "Dile adiós a papá.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.3': "Pongo una foto en la app para padres.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.q': "¿Quién viene hoy a recoger a Sem?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.a': "Su abuela. Está en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup': "Solo a personas de la lista", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.b': "Entrega a un niño solo a su padre o a su madre, o a alguien de quien te han hablado los padres. ¿No conoces a la persona? Pregunta quién es, mira su identificación, y compruébalo con los padres o con tu encargado. Al recoger, cuéntale al padre o a la madre cómo ha ido el día: comer, dormir, jugar, y cualquier cosa especial. Apunta las cosas importantes en el cuaderno o en la app. Habla de otros niños solo con sus propios padres. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.p': "¿Quién es usted? Voy a llamar a los padres.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.s': "Un hombre que no conoces viene a recoger a Sem. No está en la lista. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o1': "Llamas a los padres antes de que Sem se vaya.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o2': "Dejas ir a Sem: él sabe el nombre.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o3': "Le preguntas a Sem si le conoce.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.w': "Eres responsable del niño hasta que se hace cargo una persona que han elegido los padres.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.childsafety': "Seguridad en el grupo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.traphekje': "la barrera de escalera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerstrip': "el protector de dedos (en una puerta, para que no se atrapen los dedos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslikken': "atragantarse (la comida se va por mal sitio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bult': "el chichón (en la cabeza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaafwond': "el rasguño (la piel está raspada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toezicht': "la vigilancia (miras a los niños)", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.1': "Cierra siempre la barrera de la escalera.", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.2': "Le pongo un poco de hielo en el chichón.", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.3': "Sem se está atragantando. Le ayudo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.q': "¿Se ha caído Bo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.a': "Sí, tiene un chichón. Llamo a su madre.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety': "Mira a tu alrededor con ojos de niño", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.b': "Los niños pequeños se lo meten todo en la boca y se suben a todo. Por eso mantén cerrada la barrera de la escalera, pon los productos de limpieza y las medicinas fuera de su alcance, y mantén las bebidas calientes lejos de los niños. Revisa la sala cada día. ¿Un niño se hace daño? Dale primeros auxilios, consuélale, díselo a los padres, y apúntalo. ¿Es grave? Llama al 112. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.p': "La barrera de la escalera está abierta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.s': "Pones tu café caliente en una mesa baja. Un niño pequeño va hacia allí. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o1': "Pones el café en alto enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o2': "Le dices al niño que no lo toque.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o3': "Te lo bebes rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.w': "Un café caliente puede quemar mucho a un niño pequeño. Fuera de su alcance es el único sitio seguro.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sickchild': "Un niño enfermo y las alergias", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huiduitslag': "la erupción (manchas rojas en la piel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diarree': "la diarrea", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overgeven': "vomitar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergielijst': "la lista de alergias", // nieuw, nalezen // nagelezen AI 28 nov
    'w.adrenalinepen': "la pluma de adrenalina (una pluma con medicina para una alergia fuerte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperaturen': "tomar la temperatura", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.1': "Sem tiene fiebre. Llamo a su padre.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.2': "Mira la lista de alergias antes de comer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.3': "Nunca des una medicina sin permiso.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.q': "¿Cómo está Jip?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.a': "Está muy caliente. Le voy a tomar la temperatura.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild': "Un niño enfermo: avisa, no adivines", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.b': "Fíjate en cómo están los niños. ¿Un niño está caliente, muy cansado, vomita, o tiene una erupción? Tómale la temperatura, díselo a tu compañero, y llama a los padres. Da una medicina solo con permiso por escrito de los padres, y apunta qué has dado y cuándo. Debes saber qué niños tienen una alergia, y dónde está su medicina. Un niño con una reacción alérgica fuerte: ponle la pluma de adrenalina si has aprendido a hacerlo, y llama al 112. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.p': "Su hijo está enfermo. ¿Puede venir a recogerlo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.s': "Una madre dice: “Dale un jarabe para la fiebre a las dos.” No hay formulario. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o1': "Le pides que primero firme el formulario.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o2': "Se lo das: la madre te lo ha pedido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o3': "Le das la mitad, por si acaso.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.w': "Sin permiso por escrito no puedes dar medicinas. El formulario protege al niño y a ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.grouprules': "El grupo y las normas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pedagogischmedewerker': "el educador infantil, la educadora infantil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mentor': "el mentor, la mentora (la persona del equipo que sigue de cerca a un niño)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierogenprincipe': "la regla de los cuatro ojos (otro adulto siempre te puede ver u oír)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.observeren': "observar (mirar con atención, y apuntarlo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.peuter': "el niño pequeño (un niño de dos o tres años)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groep': "el grupo (los niños que están juntos cada día)", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.1': { m: "Soy el mentor de Lisa.", f: "Soy la mentora de Lisa.", x: "Soy la persona de referencia de Lisa." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.grouprules.2': "Un compañero siempre nos puede ver u oír.", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.3': "Me preocupa Daan.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.q': { m: "¿Puedo salir solo con el grupo?", f: "¿Puedo salir sola con el grupo?", x: "¿Puedo salir con el grupo sin nadie más?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.a': "Sí, pero primero díselo a un compañero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules': "Nunca a solas y sin que te vean", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.b': "En una guardería, otro adulto siempre te tiene que poder ver u oír cuando estás con los niños. Eso protege a los niños y a ti. Cada niño tiene un mentor: una persona del equipo que sigue de cerca a ese niño y habla con los padres. ¿Te preocupa cómo está un niño en casa, por ejemplo por moratones o por miedo? No le hagas demasiadas preguntas al niño: díselo a tu encargado, que conoce los pasos. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.p': "Me preocupa este niño.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.s': "Otra vez ves moratones en un niño. El niño está callado. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o1': "Se lo dices a tu encargado el mismo día.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o2': "Le haces muchas preguntas al niño.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o3': "Llamas a los padres y les preguntas por qué.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.w': "Tu encargado conoce los pasos cuando te preocupa un niño. Muchas preguntas pueden asustar al niño.", // nieuw, nalezen // nagelezen AI 28 nov
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Baños, hoteles y máquinas", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sanitary': "Inodoros y lavabos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wastafel': "el lavabo (el lavamanos de un baño o aseo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpot': "la taza del inodoro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletborstel': "la escobilla del inodoro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urinoir': "el urinario", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalk': "la cal (lo blanco que deja el agua en grifos y azulejos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontstopper': "el desatascador (una herramienta para un inodoro o un desagüe atascado)", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.1': "Primero hago los lavabos, luego los inodoros.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.2': "Hay cal en el grifo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.3': "El inodoro de la primera planta está atascado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.q': "¿Están listos los baños?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.a': "Todavía no. Hay un inodoro atascado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary': "De lo limpio a lo sucio", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.b': "En un baño trabajas de lo limpio a lo sucio: primero los espejos y los lavabos, luego los inodoros, y el suelo al final. Así no llevas suciedad del inodoro al lavabo. Usa las bayetas del color para el inodoro, y ponte guantes. Limpia también la escobilla, y déjala secar. ¿Un inodoro está atascado o roto? Pon un cartel en la puerta, y avísalo. Lávate las manos cuando termines, también si llevabas guantes. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.p': "Este inodoro está atascado. Le pongo un cartel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.s': "Has limpiado un inodoro. Ahora toca el lavabo. Todavía tienes la misma bayeta en la mano. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o1': "Coges una bayeta del color para el lavabo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o2': "Usas la misma bayeta: todavía parece limpia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o3': "Primero enjuagas la bayeta en el inodoro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.w': "Los gérmenes del inodoro están en la bayeta, también cuando no los ves. Una bayeta nueva los mantiene lejos de las manos y las caras.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hotelroom': "Habitaciones de hotel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laken': "la sábana (en una cama)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kussensloop': "la funda de almohada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dekbed': "el edredón nórdico", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handdoek': "la toalla", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamerlijst': "la lista de habitaciones (las habitaciones que tienes que hacer hoy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opmaken': "hacer (la cama)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.1': "Hago la cama con sábanas limpias.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.2': "Pon dos toallas limpias en el baño.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.3': "La habitación doce está lista. Voy a la trece.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.q': "¿Cuántas habitaciones te quedan?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.a': "Cuatro más. Luego mi lista está terminada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom': "Llama, di quién eres y espera", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.b': "Antes de entrar en una habitación de hotel, llama a la puerta y di quién eres, por ejemplo “Housekeeping!”. Espera un momento, y vuelve a llamar. ¿Hay un cartel de “Niet storen” en la puerta? Entonces no entres, y apúntalo en tu lista de habitaciones. ¿Está el cliente en la habitación? Pregunta si puedes limpiar ahora, o vuelve más tarde. Las cosas del cliente se quedan donde están. ¿Un cliente se ha olvidado algo? Llévalo a la recepción. Nunca te quedes nada, ni siquiera algo pequeño. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.p': "Buenos días. ¿Puedo limpiar la habitación ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.s': "En una habitación vacía encuentras un móvil debajo de la cama. El cliente ya se ha ido. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o1': "Lo llevas a la recepción.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o2': "Te lo quedas: el cliente ya se ha ido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o3': "Lo dejas debajo de la cama.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.w': "Las cosas perdidas siguen siendo del cliente. La recepción se las puede devolver. Quedárselas es robar, y te puede costar el trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.dosing': "Productos y máquinas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doseren': "dosificar (usar la cantidad correcta de un producto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maatbeker': "el vaso medidor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sprayflacon': "el pulverizador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.concentraat': "el concentrado (un producto fuerte que se mezcla con agua)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.veiligheidsblad': "la ficha de seguridad (dice los peligros de un producto, y qué hacer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schrobzuigmachine': "la fregadora (una máquina que friega el suelo y lo aspira hasta dejarlo seco)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.1': "Pon un tapón en un cubo de agua.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.2': "Lee primero la etiqueta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.3': "La fregadora tiene que ir al cargador.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.q': "Echa un poco más de producto. Así queda más limpio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.a': "No, más no es mejor. Uso el vaso medidor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing': "La dosis correcta, no más", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.b': "Más producto no limpia mejor. Demasiado deja una capa pegajosa, así que el suelo se ensucia antes y puede resbalar. También es peor para tu piel y tus pulmones. Usa el vaso medidor o la bomba dosificadora, y sigue la etiqueta. Primero el agua, luego el producto: así no salpica. Antes de usar la fregadora, comprueba que está cargada, con agua limpia en el depósito. Al final, vacía y enjuaga el depósito del agua sucia. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.p': "¿Cuánto tengo que echar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.s': "El suelo sigue pegajoso. Un compañero dice: “Echa el doble de producto”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.dosing.o1': "Usas la dosis de la etiqueta, y preguntas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o2': "Echas el doble: así queda limpio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o3': "Echas el producto directamente en el suelo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.w': "Un suelo pegajoso muchas veces significa demasiado producto, no demasiado poco. La dosis correcta limpia mejor y es lo más seguro.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.officenight': "Oficinas, temprano o tarde", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toetsenbord': "el teclado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papierbak': "la papelera de papel (para el papel viejo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lichtschakelaar': "el interruptor de la luz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pantry': "el office (la cocina pequeña de una oficina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurmat': "el felpudo (la alfombrilla de la entrada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alleenwerken': "trabajar a solas (no hay nadie más en el edificio)", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.1': "Vacío las papeleras y la papelera de papel.", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.2': "No toco los papeles de la mesa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.3': "Apago la luz cuando termino.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.q': "¿Esta noche trabajas a solas en el edificio?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.a': "Sí. Te mando un mensaje cuando termine.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight': "A solas en el edificio", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.b': "Temprano por la mañana o tarde por la noche, muchas veces limpias una oficina a solas. Debes saber qué hacer si pasa algo: ¿a quién llamas, y dónde está el botiquín? Lleva siempre el móvil encima. Acuerda con tu encargado o con un compañero que mandas un mensaje cuando empiezas y cuando terminas. No dejes entrar a nadie que no conozcas. No toques papeles, pantallas ni teclados más de lo que necesitas para limpiar, y nunca leas lo que hay en ellos. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.officenight.p': "He terminado y ahora me voy a casa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.s': "De noche un hombre llama al cristal de la puerta. Dice que trabaja aquí y que se ha olvidado la llave. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o1': "No abres. Llamas a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o2': "Le dejas entrar: parece simpático.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o3': "Le das tu propia llave.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.w': "Cualquiera puede decir que trabaja allí. Tu encargado lo puede comprobar. Tu seguridad y el edificio van primero.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.cooking': "La cocina y el servicio", // nieuw, nalezen // nagelezen AI 28 nov
    'l.knives': "Cuchillos y cortar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koksmes': "el cuchillo de chef (un cuchillo de cocina grande)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dunschiller': "el pelador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schillen': "pelar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hakken': "picar (cortar muy pequeño)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raspen': "rallar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blokjes': "los dados (trozos pequeños y cuadrados)", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.1': "Corta las zanahorias en dados.", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.2': "No dejes el cuchillo en el fregadero.", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.3': "Pica el perejil fino.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.q': "¿Puedes cortar las cebollas?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.a': "Sí, chef. ¿En aros o en dados?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives': "Un cuchillo es una herramienta, no un juguete", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.b': "Mantén tu cuchillo afilado: un cuchillo sin filo resbala más fácilmente. Corta sobre una tabla que no se mueva: pon un paño mojado debajo. Dobla los dedos hacia dentro, como una garra. Camina con la punta hacia abajo, pegada a la pierna, y di “Mes!” cuando pases junto a alguien. Nunca dejes un cuchillo en un fregadero lleno de agua: alguien lo puede coger sin verlo. ¿Se cae un cuchillo? Échate atrás, no lo cojas. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.p': "¡Cuchillo! Paso detrás de ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.s': "Estás cortando. El cuchillo resbala de la tabla y se cae. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o1': "Te echas atrás, y lo dejas caer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o2': "Lo coges rápido con la mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o3': "Lo paras con el pie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.w': "Un cuchillo que cae te puede hacer un corte profundo en la mano o en el pie. Un cuchillo en el suelo solo hay que lavarlo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.rawcooked': "Crudo, cocinado y alérgenos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rauw': "crudo (no cocinado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaar': "hecho, en su punto (listo para comer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdekken': "tapar (con una tapa o con film)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurcode': "el código de colores (un color de tabla y de cuchillo para cada tipo de alimento)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergenenlijst': "la lista de alérgenos (dice lo que lleva cada plato)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glutenvrij': "sin gluten", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.1': "La carne cruda va abajo en la nevera.", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.2': "¿Ya está hecho el pollo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.3': "Tapa los recipientes en la cámara frigorífica.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.q': "¿Esta salsa es sin gluten?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.a': "No lo sé con seguridad. Miro la lista de alérgenos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked': "Lo crudo y lo listo nunca se tocan", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.b': "La carne, el pescado y los huevos crudos pueden llevar gérmenes. Mantenlos lejos de la comida que está lista para comer. Usa otra tabla y otro cuchillo, o el código de colores de tu cocina, y lávate las manos después de tocar comida cruda. La carne cruda va abajo en la nevera, para que no gotee sobre otra comida. Tapa la comida y ponle la fecha. Con las alergias, una traza puede ser suficiente: usa utensilios limpios. Un restaurante tiene que poder decir a los clientes qué alérgenos lleva un plato: mira la lista de alérgenos. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.p': "¿Qué tabla es para la carne cruda?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.s': "Has cortado pollo crudo. Ahora tienes que cortar tomates para una ensalada. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o1': "Coges una tabla limpia y un cuchillo limpio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o2': "Limpias la tabla con un paño, y sigues.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o3': "Cortas los tomates en la misma tabla.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.w': "Los gérmenes del pollo crudo pasan a los tomates, y una ensalada no se vuelve a cocinar. Una tabla limpia lo evita.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pass': "La zona de fregado y el pase", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pass': "el pase (el mostrador donde los platos esperan al camarero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bon': "la comanda (el pedido del camarero a la cocina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spoelkeuken': "la zona de fregado (donde se lavan los platos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwaskorf': "la cesta del lavavajillas (la cesta que entra en el lavavajillas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorspoelen': "prelavar (enjuagar antes de la máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.warmhoudlamp': "la lámpara de calor (mantiene calientes los platos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.1': "La mesa ocho está en el pase.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.2': "Entran dos comandas nuevas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.3': "Primero prelava los platos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.q': "¿Dónde está la mesa doce?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.a': "Está en el pase. La llevo ahora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass': "El pase: los platos no esperan", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.b': "En el pase, la cocina deja los platos para el camarero. La comida caliente tiene que llegar rápido al cliente, así que un plato no espera mucho en el pase. Mira la comanda: ¿la mesa correcta, los platos correctos, el borde del plato limpio? Entonces llévalo. En la zona de fregado: prelava, pon todo en las cestas, y deja que la máquina haga el resto. No abras la máquina mientras funciona: el vapor quema mucho. Ponte guantes cuando rellenes los productos de la máquina. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.p': "¿De qué mesa es esto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.s': "Hay dos platos en el pase. No sabes para qué mesa son. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o1': "Miras la comanda, o preguntas al jefe de cocina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o2': "Los llevas a una mesa que está esperando.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o3': "Esperas hasta que otra persona los lleve.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.w': "Un plato en la mesa equivocada significa dos mesas esperando y comida fría. Una pregunta corta es más rápida.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.bill': "Los platos y la cuenta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorgerecht': "el entrante (el primer plato)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdgerecht': "el plato principal", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nagerecht': "el postre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reservering': "la reserva (una mesa reservada antes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinapparaat': "el datáfono (la máquina para pagar con tarjeta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.apartbetalen': "pagar por separado (cada persona paga lo suyo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.1': "¿Tiene reserva?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.2': "¿Quieren pagar juntos o por separado?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.3': "¿Les traigo ya el plato principal?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.q': "¿Podemos pagar por separado?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.a': "Sí, claro. Voy a por el datáfono.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill': "Dinero en la mesa: cuéntalo dos veces", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.b': "Cuando un cliente paga, di el importe claramente y deja que el cliente vea el datáfono. Con efectivo, cuenta el dinero cuando lo recibes, y otra vez cuando das el cambio. El dinero va a la caja o a tu cartera de camarero, nunca a tu propio bolsillo. Las propinas (fooi) van donde dice tu empresa, por ejemplo al bote de las propinas. ¿Un cliente se ha ido sin pagar? No corras detrás de él: díselo a tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.p': "Son cuarenta y cinco euros, por favor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.s': "Un cliente te da dinero y dice: “Está justo.” No lo has contado. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o1': "Lo cuentas mientras el cliente está delante.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o2': "Lo guardas, y lo cuentas más tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o3': "Confías en el cliente: le das las gracias.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.w': "Si cuentas más tarde y falta dinero, nadie puede comprobar qué pasó. Contar en la mesa protege al cliente y a ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.carework': "Cuidado personal y atención a domicilio", // nieuw, nalezen // nagelezen AI 28 nov
    'l.washing': "Lavar y vestir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.washandje': "la manopla (un paño pequeño como un guante)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.douchestoel': "la silla de ducha", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandenpoetsen': "lavarse los dientes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kammen': "peinar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scheren': "afeitar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steunkous': "la media de compresión (una media apretada para las piernas)", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.1': "¿El agua está bastante caliente?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.2': "¿Quiere lavarse la cara sin ayuda?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.3': "Ahora le pongo las medias de compresión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.q': "Hoy no me quiero duchar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.a': "Está bien. ¿Le ayudo en el lavabo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing': "Pregunta primero, tapa, y deja elegir", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.b': "Lavar a alguien es algo muy personal. Di lo que vas a hacer, y pregunta primero. Tapa con una toalla las partes del cuerpo que no estás lavando. Cierra la puerta o la cortina. Deja que el cliente elija: la ducha o lavarse en el lavabo, y qué ropa ponerse. Deja que el cliente haga lo que todavía puede hacer, también cuando va más lento. ¿Un cliente dice que no? No le obligues. Inténtalo más tarde, ofrece otra cosa, y díselo a la enfermera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.p': "¿Qué le gustaría ponerse hoy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.s': "Una clienta dice que hoy no quiere que la laven. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o1': "Lo aceptas, y se lo dices a la enfermera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o2': "La lavas de todos modos: está en la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o3': "Te lo saltas, y no dices nada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.w': "Un cliente puede decir que no. Obligar a alguien hace daño a la confianza. La enfermera puede ver por qué, y qué se puede hacer.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.observing': "Observar e informar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapporteren': "informar por escrito (escribir lo que has visto, en el expediente de cuidados)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgdossier': "el expediente de cuidados (todo sobre los cuidados de un cliente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukplek': "la úlcera por presión (una mancha roja por estar mucho tiempo tumbado o sentado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huid': "la piel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plassen': "hacer pis", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vochtlijst': "el registro de líquidos (cuánto bebe un cliente)", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.1': "La señora tiene una mancha roja en el talón.", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.2': "El señor ha bebido poco hoy.", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.3': "Lo escribo en el expediente de cuidados.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.q': "¿Hay algo especial con la señora Jansen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.a': "Sí. Hoy casi no ha hecho pis.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing': "Escribe lo que ves, no lo que piensas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.b': "Lo que escribes en el expediente de cuidados lo lee el siguiente compañero. Escribe hechos: lo que has visto, oído o medido, y cuándo. No “Mevrouw is lastig”, sino “Mevrouw wilde niet eten en duwde het bord weg.” Escríbelo el mismo día, con frases cortas. ¿No sabes bien cómo escribirlo en neerlandés? Díselo a la enfermera, y escribidlo juntos. Mira la piel cuando lavas a alguien: una mancha roja que no se va puede ser el principio de una úlcera por presión. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.p': "Escribo lo que he visto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.s': "Una clienta se enfadó durante el lavado. Tienes que escribirlo en el expediente. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o1': "Escribes lo que dijo e hizo, y cuándo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o2': "Escribes: “Señora difícil, como siempre.”", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o3': "No escribes nada: es normal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.w': "Los hechos ayudan al siguiente compañero y a la enfermera a actuar. Una opinión no dice lo que pasó.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.homecare': "Atención a domicilio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thuiszorg': "la atención a domicilio (cuidados en la propia casa del cliente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelkluis': "la caja de llaves (una cajita con código, con la llave de la casa dentro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgplan': "el plan de cuidados (qué cuidados recibe un cliente, y cómo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijkverpleegkundige': "el enfermero, la enfermera de barrio (del equipo de atención a domicilio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mantelzorger': "el cuidador familiar (un familiar o amigo que cuida al cliente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmknop': "el botón de alarma (lo lleva el cliente, para pedir ayuda)", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.1': "Primero llamo al timbre. Luego cojo la llave.", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.2': "¿Qué pone en el plan de cuidados?", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.3': "Hoy llego un cuarto de hora tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.q': "¿Quién es?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.a': "Buenos días, la atención a domicilio. ¿Puedo pasar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare': "De visita en casa de otra persona", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.b': "En la atención a domicilio trabajas en la propia casa del cliente. Allí estás de visita: llama al timbre y di quién eres, también cuando tienes llave. El código de la caja de llaves es secreto. Nunca lo escribas donde otros lo puedan ver, y cierra siempre otra vez la caja de llaves. Sigue el plan de cuidados: lo que haces está ahí. ¿Algo es diferente, o el cliente no abre la puerta? No te vayas sin más. Llama a tu equipo o a la enfermera de barrio. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.p': "Buenos días, soy de la atención a domicilio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.s': "Llamas al timbre. La clienta no abre. Su coche está allí. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o1': "Llamas a tu equipo, y esperas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o2': "Sigues con el siguiente cliente.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o3': "Llamas al timbre otra vez, y te vas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.w': "Puede que la clienta se haya caído, o esté enferma. Tu equipo sabe qué hacer, y quién tiene llave.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.liftaids': "Ayudas para mover y seguridad", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijlaken': "la sábana deslizante (una sábana lisa para mover a un cliente en la cama)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilband': "el arnés (va debajo del cliente, para la grúa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stalift': "la grúa de bipedestación (ayuda a un cliente a ponerse de pie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkhoogte': "la altura de trabajo (la cama a la altura de tus caderas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedhek': "la barandilla de la cama", // nieuw, nalezen // nagelezen AI 28 nov
    'w.transferplank': "la tabla de transferencia (una tabla para deslizarse de la cama a una silla)", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.1': "Pon la cama a la altura de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.2': "¿Tiene puesto el freno la silla de ruedas?", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.3': "Esto lo hacemos entre dos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.q': "¿Puedes darle la vuelta a la señora sin ayuda?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.a': "Con la sábana deslizante sí. Voy a por ella.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids': "Deja que la ayuda haga el esfuerzo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.b': "Antes de usar una grúa, revísala: ¿está cargada la batería, el arnés es de la talla correcta y no está roto? Pon el freno en la cama y en la silla de ruedas. Sube la cama a la altura de tus caderas, para no agacharte. Explica al cliente cada paso. El plan de cuidados dice qué ayuda necesita un cliente. ¿Una ayuda está rota o falta? No lo hagas de otra manera: avísalo, y pide ayuda a un compañero. ¿No te han enseñado cómo funciona una ayuda? Pregunta antes de empezar. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.p': "El arnés está roto. Voy a por otro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.s': "Quieres usar la grúa. El arnés tiene un pequeño desgarro. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o1': "Coges otro arnés, y avisas del desgarro.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o2': "Lo usas: el desgarro es muy pequeño.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o3': "Haces un nudo en el arnés.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.w': "Un desgarro pequeño se puede hacer más grande con el peso de una persona. Una caída de una grúa puede hacer mucho daño al cliente.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.shopfloor': "Caja, existencias y cierre", // nieuw, nalezen // nagelezen AI 28 nov
    'l.returns': "Devoluciones y la caja", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugbrengen': "devolver (un producto a la tienda)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantenkaart': "la tarjeta de cliente (una tarjeta para acumular puntos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.statiegeld': "el depósito (dinero que te devuelven por una botella o lata vacía)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassalade': "el cajón de la caja (el cajón con el dinero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.streepjescode': "el código de barras", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegoedbon': "el vale (un papel para gastar más tarde en la tienda)", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.1': "¿Acumula puntos con la tarjeta de cliente?", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.2': "El código de barras no funciona.", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.3': "¿Quiere que le devuelva el dinero o prefiere un vale?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.q': "Quiero devolver este jersey.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.a': "Se puede. ¿Todavía tiene el tique?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns': "Devoluciones: sigue las normas de la tienda", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.b': "Cada tienda tiene sus propias normas para las devoluciones: cuántos días, con o sin tique, devolver el dinero o dar un vale. Apréndelas, y síguelas con cada cliente. ¿Tienes dudas? Pregunta a un compañero o al encargado, y no lo decidas por tu cuenta. Al final de tu turno, cuenta el cajón de tu caja, con un compañero si en tu tienda se hace así. Nunca cojas dinero de la caja para ti, ni siquiera prestado un momento. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.p': "Un momento, se lo pregunto al encargado de la tienda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.s': "Una clienta quiere que le devuelvan el dinero de unos zapatos. No tiene tique. No conoces la norma. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o1': "Preguntas al encargado qué hacer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o2': "Le devuelves el dinero: es simpática.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o3': "Dices que no, y la mandas fuera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.w': "El encargado conoce las normas y puede decidir. Así la clienta recibe una respuesta justa, y tú no tienes la culpa.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.facing': "Encarar y los productos fríos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.facen': "encarar (poner los productos delante, con la etiqueta hacia fuera)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afprijzen': "rebajar (poner un precio más bajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelvak': "el estante refrigerado (la estantería fría de una tienda)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diepvries': "el congelador", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitpakken': "desembalar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schapkaartje': "la etiqueta del estante (la etiqueta del precio en el estante)", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.1': "Primero el estante refrigerado, luego lo demás.", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.2': "Pon todo bien hacia delante.", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.3': "Rebaja los productos de hoy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.q': "¿Has terminado con el estante refrigerado?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.a': "Casi. Todavía tengo que encarar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing': "Primero lo frío, y el estante parece lleno", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.b': "Los productos fríos y congelados van primero a la nevera o al congelador, antes que nada. No pueden estar mucho tiempo fuera del frío. Luego lo demás. Encarar significa: poner los productos delante, con la etiqueta hacia el cliente. Así el estante parece lleno y ordenado. Mira la etiqueta del estante: ¿es correcto el precio para este producto? Cuando abras cajas, corta hacia fuera de tu cuerpo, y no muy hondo: puedes dañar el producto. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.p': "Primero los productos fríos, luego lo demás.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.s': "Llegan un palé con leche y un palé con patatas fritas. No hay nadie más. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o1': "Primero pones la leche en la nevera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o2': "Empiezas por las patatas fritas: pesan menos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o3': "Dejas los dos hasta que venga un compañero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.w': "La leche que está mucho tiempo fuera del frío puede poner enfermos a los clientes, y hay que tirarla. Las patatas fritas pueden esperar.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shrink': "Daños y robos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.derving': "la merma (lo que pierde la tienda: productos rotos, viejos o robados)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afschrijven': "dar de baja (registrar un producto como perdido)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsaankoop': "la compra de personal (lo que compras en tu propia tienda)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tassencontrole': "el control de bolsos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassamedewerker': "el cajero, la cajera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelwagen': "el carro de la compra", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.1': "Este tarro está roto. Lo doy de baja.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.2': "Pago mi compra en la caja de un compañero.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.3': "Hay un carro lleno junto a la salida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.q': "¿Puedo mirar un momento en tu bolso?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.a': "Sí, claro. Aquí está mi tique.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink': "Tu propia compra: paga como un cliente", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.b': "Una tienda pierde mucho por productos rotos, productos viejos y robos. Ayuda a que sea poco. ¿Un producto roto o dañado? No lo vuelvas a poner en el estante: dalo de baja como se hace en tu tienda. Tu propia compra: págala en la caja como cualquier cliente, y guarda el tique. En muchas tiendas no puedes pasar tú tu propia compra por caja: lo hace un compañero. Nunca te comas ni te lleves un producto sin pagar, ni siquiera uno pequeño. Algunas tiendas revisan los bolsos: es una norma de la tienda, no una señal de desconfianza hacia ti. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.p': "Primero pago, y guardo el tique.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.s': "Al final de tu turno tienes hambre. Un bocadillo caduca hoy. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o1': "Preguntas al encargado cuál es la norma.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o2': "Te lo comes: de todos modos se tira.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o3': "Te lo llevas a casa en el bolso.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.w': "En muchas tiendas, llevarse un producto sin pagar es robar, también cuando está caducado. Preguntar primero te protege.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shopclose': "Cerrar la tienda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitingstijd': "la hora de cierre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolluik': "la persiana metálica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasverschil': "el descuadre de caja (más o menos dinero en la caja del que debería haber)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluis': "la caja fuerte (una caja fuerte para el dinero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overval': "el atraco (alguien se lleva dinero con amenazas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterdeur': "la puerta de atrás", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.1': "Cerramos dentro de diez minutos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.2': "Contamos la caja entre dos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.3': "¿Está cerrada con llave la puerta de atrás?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.q': "¿Puedo entrar un momento rápido?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.a': "Lo siento, está cerrado. Mañana abrimos a las ocho.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose': "Un atraco: dalo, y ponte a salvo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.b': "A la hora de cierre hay mucho dinero en la caja, así que las tiendas tienen normas: contarlo entre dos, llevar el dinero a la caja fuerte, y antes cerrar con llave la puerta de atrás. ¿Un atraco (overval)? Tu vida vale más que el dinero. Mantén la calma, haz lo que te dicen, y no luches ni corras detrás de ellos. Recuerda lo que puedas: la ropa, la altura, la voz. Cuando se hayan ido: cierra la puerta con llave, llama al 112, y no toques nada. Después, habla de ello con tu encargado o con alguien de confianza. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.p': "Vamos a cerrar. Cierro la puerta con llave.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.s': "Un hombre con un cuchillo quiere el dinero de tu caja. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o1': "Mantienes la calma, y le das el dinero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o2': "Luchas con él: el dinero no es suyo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o3': "Corres al fondo, y te encierras.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.w': "Luchar o correr pone nervioso al atracador y lo hace más peligroso. El dinero se puede reponer. Tú no.", // nieuw, nalezen // nagelezen AI 28 nov
    'u.uitzend': "Trabajar con una agencia de trabajo temporal", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hirer': "La agencia y la empresa usuaria", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlener': "la empresa usuaria (la empresa donde la agencia te manda a trabajar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vestiging': "la oficina (la oficina de la agencia en tu ciudad)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intakegesprek': "la entrevista de entrada (la primera conversación en la agencia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstapplaats': "el punto de recogida (donde te recoge el autobús de la agencia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsregels': "las normas de la empresa (las normas de la empresa usuaria)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekpunt': "la persona de contacto (la persona a la que vas con tus preguntas)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.1': "Mañana trabajas en una empresa usuaria nueva.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.2': "¿Quién es aquí mi persona de contacto?", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.3': "El autobús sale del punto de recogida a las seis.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.q': "¿Puedes empezar mañana en una empresa usuaria nueva?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.a': "Sí. ¿A qué hora tengo que estar allí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer': "Dos empresas: ¿quién hace qué?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.b': "Trabajas a través de una agencia (uitzendbureau), pero haces el trabajo en otra empresa: la empresa usuaria (inlener). La agencia es tu empleador: tu contrato, tu sueldo, tu nómina y tus días libres vienen de la agencia. La empresa usuaria te dice qué hacer en el trabajo, y tiene que hacer que tu trabajo sea seguro, igual que para sus propios trabajadores. Avisa de que estás de baja como dice tu agencia: muchas veces a la agencia y a la empresa usuaria. Guarda en tu móvil el nombre y el teléfono de tu persona de contacto en la agencia. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.p': "¿Quién es mi persona de contacto en la agencia?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.s': "En la empresa usuaria tienes que trabajar con una máquina. Nadie te ha enseñado cómo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o1': "Pides a la empresa usuaria que primero te lo enseñe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o2': "Lo intentas: la responsable es la agencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o3': "Te vas a casa, y no dices nada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.w': "La empresa usuaria te tiene que enseñar a trabajar de forma segura, igual que a sus propios trabajadores. Pedirlo es tu derecho.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.phases': "Tu contrato y las fases", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fase': "la fase (un paso en tu contrato de agencia: A, B o C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzendbeding': "la cláusula de agencia (tu trabajo puede terminar cuando la empresa usuaria ya no te necesita)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflopen': "terminar, vencer (un contrato)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorwerken': "seguir trabajando (en el mismo sitio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastecontract': "el contrato indefinido (un contrato sin fecha de fin)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderbreking': "la interrupción (un tiempo sin trabajo entre dos contratos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.1': "¿En qué fase estoy ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.2': "Mi contrato termina la semana que viene.", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.3': "¿Puedo seguir trabajando aquí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.q': "Tu trabajo en esta empresa termina el viernes.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.phases.a': "Vale. ¿Tiene otro trabajo para mí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases': "Fases A, B y C", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.b': "La mayoría de los trabajadores temporales trabajan con un cao para trabajadores temporales (uitzend-cao). Tiene fases. En la fase A, tu trabajo normalmente puede terminar cuando la empresa usuaria ya no te necesita (uitzendbeding). En la fase B, tienes contratos por un tiempo fijo. En la fase C, tienes un contrato indefinido con la agencia. Cuánto dura cada fase está en tu cao. Pregunta a la agencia en qué fase estás, y guarda todos tus contratos. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.p': "¿Cuánto dura la fase A para mí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.s': "Llevas mucho tiempo trabajando para la misma agencia. Todavía te dan contratos cortos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o1': "Preguntas a la agencia en qué fase estás.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o2': "Nada: el trabajo temporal siempre es corto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o3': "Lo dejas, y buscas otra agencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.w': "Después de bastante tiempo, el cao te da más seguridad. La agencia te puede decir dónde estás, y el sindicato lo puede revisar contigo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.deductions': "El sueldo y los descuentos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhouding': "el descuento (dinero que te quitan del sueldo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastekracht': "el trabajador fijo (un trabajador contratado por la propia empresa usuaria)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervoer': "el transporte (el autobús o la furgoneta al trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftelijk': "por escrito (en papel o en un correo electrónico)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navragen': "comprobar, preguntar (averiguar si algo está bien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brutoloon': "el sueldo bruto (tu sueldo antes de impuestos y descuentos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.1': "¿Qué es este descuento en mi nómina?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.2': "¿Gano lo mismo que los trabajadores fijos?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.3': "Primero quiero verlo en papel.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.q': "Te descontamos del sueldo el coste del autobús.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.a': "¿Eso se puede? Primero lo voy a comprobar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions': "¿Qué te pueden quitar del sueldo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.b': "Tienes derecho como mínimo al mismo sueldo que los trabajadores de la empresa usuaria que hacen el mismo trabajo. El dinero que te quitan del sueldo (inhouding) tiene que estar en tu nómina. Los impuestos y las cotizaciones se descuentan por ley. Aparte de eso, la agencia solo puede descontar dos gastos del salario mínimo: el alquiler de tu vivienda y la prima del seguro de salud, y solo si lo aceptaste por escrito. Otros gastos, como el transporte, la ropa de trabajo, las multas o una comisión por buscarte trabajo, no se pueden descontar del salario mínimo. ¿No entiendes un descuento? Pide a la agencia que te lo explique por escrito. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.p': "¿Para qué es este descuento?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.s': "La agencia te quita dinero del sueldo por el autobús al trabajo. Ganas el salario mínimo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o1': "Lo preguntas: esto no está permitido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o2': "Nada: coges el autobús todos los días.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o3': "Dejas de coger el autobús, y vas andando.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.w': "Del salario mínimo solo se pueden descontar el alquiler y el seguro de salud, y solo con tu sí por escrito. El sindicato o el Juridisch Loket te pueden ayudar.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.agencyhome': "La vivienda y la ayuda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisvesting': "la vivienda (un sitio para vivir, que organiza la agencia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisgenoot': "el compañero de piso (una persona que vive en la misma casa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisregels': "las normas de la casa (las normas de la casa donde vives)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huismeester': "el encargado de la vivienda (la persona que se ocupa de la casa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldpunt': "el punto de denuncia (un sitio donde puedes denunciar un problema)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advies': "el consejo", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.1': "Quiero mi propio contrato de alquiler.", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.2': "Hay moho en el baño.", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.3': "Llamo al sindicato para pedir consejo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.q': "Tienes que dejar la casa el viernes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.a': "Eso es muy poco tiempo. Primero voy a pedir consejo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome': "Tu casa, y dónde pedir ayuda", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.b': "¿La agencia te organiza la vivienda? Entonces recibes un contrato de alquiler propio, por escrito, aparte de tu contrato de trabajo. Guarda una copia. Ahí pone lo que pagas, y cómo y cuándo termina el alquiler. ¿Se termina tu trabajo? Tu casa no siempre termina el mismo día: pide consejo antes de irte. ¿Vivienda insegura o muy llena, amenazas, o un sueldo demasiado bajo? Busca ayuda: el sindicato, el Juridisch Loket (consejo legal gratis), FairWork, o la Nederlandse Arbeidsinspectie, donde también puedes denunciar de forma anónima. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.p': "¿Me puede dar una copia de mi contrato de alquiler?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.s': "Tu trabajo se termina. El encargado de la vivienda dice que tienes que dejar la casa hoy. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o1': "Primero preguntas al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o2': "Te vas hoy, y duermes en casa de un amigo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o3': "Haces la maleta, y duermes en la calle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.w': "Tu contrato de alquiler tiene sus propias normas, aparte de tu trabajo. Un consejo te ayuda a saber cuándo tienes que irte de verdad.", // nieuw, nalezen // nagelezen AI 28 nov
    // The basis units at four lessons (23 November 2026): two new lessons each in Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte, Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online op je werk.
    'l.vacancy': "Leer una oferta de empleo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advertentie': "el anuncio (un texto que ofrece un trabajo o una cosa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eis': "el requisito (lo que tienes que tener o saber hacer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parttime': "a tiempo parcial (menos horas a la semana)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fulltime': "a jornada completa (una semana de trabajo entera)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sollicitatiebrief': "la carta de presentación", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contactpersoon': "la persona de contacto (la persona a la que puedes llamar o escribir)", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.1': "Vi su anuncio en internet.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.2': "¿El trabajo es a tiempo parcial o a jornada completa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.3': "¿Cuáles son los requisitos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.q': "¿Por qué llama?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.a': "Llamo por su oferta de empleo. ¿Sigue abierta?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.result': "Después de la entrevista", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aangenomen': "contratado (te dan el trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijzing': "el rechazo (no te dan el trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbod': "la oferta (te ofrecen el trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefdag': "el día de prueba (un día de trabajo, para probar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabellen': "volver a llamar (para preguntar cómo va)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teleurgesteld': "decepcionado", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.1': { m: "¡Está contratado!", f: "¡Está contratada!", x: "¡El puesto es suyo!" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.result.2': "Me han rechazado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.3': "¿Se paga el día de prueba?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.result.q': "Lo sentimos, elegimos a otra persona.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.a': "Qué pena. ¿Puedo preguntar por qué?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.residence': "Tus papeles de residencia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verblijfsvergunning': "el permiso de residencia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pasfoto': "la foto de carné", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerafdruk': "la huella dactilar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldig': "válido (todavía sirve)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verloopdatum': "la fecha de caducidad (el último día que es válido)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volgnummer': "el número de turno (el papel con tu turno)", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.1': "Mi permiso de residencia es válido un año más.", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.2': "¿Cuál es la fecha de caducidad de tu pasaporte?", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.3': "Tengo una cita en el ayuntamiento.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.q': "Su permiso de residencia está a punto de caducar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.a': "Entonces pido uno nuevo enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.newhome': "Mudarte de casa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brievenbus': "el buzón", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterstand': "la lectura del contador (los números del contador de gas, luz o agua)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naambordje': "la placa con el nombre (tu nombre en la puerta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.woning': "la vivienda (una casa o un piso)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorsturen': "reenviar (mandar a una dirección nueva)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdag': "el día de la mudanza", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.1': "Me mudo la semana que viene.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.2': "Mi nombre no está en el buzón.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.3': "Doy mi nueva dirección.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.q': "¿Dónde vives ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.a': "En una vivienda nueva. Aquí tienes mi nueva dirección.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.payparts': "Qué pone en tu nómina", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pensioen': "la pensión (dinero para cuando seas mayor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.periode': "el periodo (las semanas o el mes de este sueldo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrag': "el importe (de dinero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.totaal': "el total", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkorting': "la abreviatura (una forma corta de una palabra)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsnummer': "el número de empleado (tu número en la empresa)", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.1': "¿Qué significa esta abreviatura?", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.2': "Este importe va a mi pensión.", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.3': "¿De qué periodo es este sueldo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.q': "¿Cuál es tu número de empleado?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.a': "Está arriba, al lado de mi nombre.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.latepay': "Sueldo tarde, que falta o en efectivo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwartwerken': "trabajar en negro (sin contrato, sin impuestos, sin derechos en papel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorschot': "el adelanto (parte de tu sueldo antes del día de pago)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabetaling': "el pago atrasado (dinero que recibes después, para corregir tu sueldo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekort': "lo que falta (el dinero que falta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.betaaldag': "el día de pago", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankafschrift': "el extracto bancario (una lista del dinero que entra y sale)", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.1': "Mi sueldo llega tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.2': "No trabajo en negro.", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.3': "¿Me pueden dar un adelanto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.q': "El dinero que falta lo recibes el mes que viene.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.a': "¿Me lo puedes dar por escrito?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.holiday': "Planear tus vacaciones", // nieuw, nalezen // nagelezen AI 28 nov
    'w.saldo': "el saldo (cuántos días te quedan)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeuren': "aprobar (decir que sí)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verlopen': "caducar (ya no es válido)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zomervakantie': "las vacaciones de verano", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukte': "la temporada alta (mucho trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvraag': "la solicitud (pides algo, muchas veces en un formulario)", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.1': "¿Cuántos días de vacaciones me quedan?", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.2': "Mis vacaciones están aprobadas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.3': "Estoy rellenando el formulario.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.q': "En verano hay mucho trabajo. ¿Puedes irte de vacaciones en mayo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.a': "Prefiero en julio. Entonces mi familia está en casa.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.special': "Días libres especiales", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bruiloft': "la boda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begrafenis': "el entierro, el funeral", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geboorteverlof': "el permiso por nacimiento (para la pareja, cuando nace un bebé)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderverlof': "el permiso especial (por ejemplo para una boda o un funeral)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerstdagen': "la Navidad (los dos días de Navidad)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijvragen': "pedir un día libre", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.1': "Mi hermano se casa. ¿Puedo pedir un día libre?", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.2': "Mi tío ha muerto. El funeral es el viernes.", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.3': "¿Tengo que trabajar en Navidad?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.q': "¡Enhorabuena por tu bebé! ¿Vas a coger el permiso por nacimiento?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.a': "Sí, la primera semana me quedo en casa.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.unwell': "No te encuentras bien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdpijn': "el dolor de cabeza", // nieuw, nalezen // nagelezen AI 28 nov
    'w.griep': "la gripe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkouden': "resfriado (tienes un resfriado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nietlekker': "no muy bien (te sientes un poco mal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naarhuis': "irse a casa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzieken': "quedarte en casa hasta curarte", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.1': "No me encuentro bien.", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.2': { m: "Me duele la cabeza y estoy resfriado.", f: "Me duele la cabeza y estoy resfriada.", x: "Me duele la cabeza y tengo un resfriado." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.3': { m: "Me voy a casa. Estoy enfermo.", f: "Me voy a casa. Estoy enferma.", x: "Me voy a casa. Me encuentro mal." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.unwell.q': { m: "Estás pálido. ¿Estás bien?", f: "Estás pálida. ¿Estás bien?", x: "Tienes mala cara. ¿Estás bien?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.a': "No, no me encuentro bien. ¿Me puedo ir a casa?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.injury': "Cuando el trabajo te hace daño", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsongeval': "el accidente laboral", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzekering': "el seguro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schadevergoeding': "la indemnización (dinero por el daño)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oorzaak': "la causa (por qué pasó)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.letsel': "la lesión (daño en tu cuerpo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verklaring': "la declaración (lo que escribes o dices sobre lo que pasó)", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.1': "He tenido un accidente laboral.", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.2': "¿Cuál fue la causa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.3': "Mi compañero lo vio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.q': "¿Puedes escribir aquí tu declaración?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.a': "Sí. ¿Me das una copia?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debt': "Una deuda con el jefe o la agencia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lening': "el préstamo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lenen': "pedir prestado, prestar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzitten': "estar atrapado (no puedes irte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tussenpersoon': "el intermediario (alguien que te consigue trabajo a cambio de dinero)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rente': "los intereses (dinero de más que pagas por un préstamo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.belofte': "la promesa", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.1': "Tuve que pagar por este trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.2': "Mi deuda sube cada mes.", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.3': "El intermediario tiene mi pasaporte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.q': "Solo te puedes ir cuando hayas pagado tu deuda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.a': "Eso no está permitido. Voy a pedir ayuda.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.inspection': "La inspección y otra ayuda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inspectie': "la inspección (personas que comprueban si el trabajo es justo y seguro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controle': "el control", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slachtoffer': "la víctima", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mensenhandel': "la trata de personas (se usa y se vende a personas para trabajar o para sexo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertrouwen': "confiar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tolk': "el intérprete", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.1': "Mañana viene la inspección.", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.2': "¿Puedo tener un intérprete?", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.3': "No me fío de este hombre.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.q': "¿Quieres hablar con la inspección?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.a': "Sí, pero que no lo oiga mi jefe.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'l.carpool': "Compartir coche y la furgoneta del trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.carpoolen': "compartir coche (ir juntos al trabajo en un solo coche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meerijden': "ir con alguien (en el coche de otra persona)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gordel': "el cinturón de seguridad", // nieuw, nalezen // nagelezen AI 28 nov
    'w.instappen': "subir (a un coche, un autobús o un tren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstappen': "bajar (de un coche, un autobús o un tren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijrijder': "el copiloto (al lado del conductor)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.1': "¿Puedo ir contigo en el coche?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.2': "Ponte el cinturón.", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.3': "Me bajo en la estación.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.q': "¿Quién conduce mañana?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.a': "Conduzco yo. Te recojo a las seis.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.train': "El tren, los retrasos y llegar tarde", // nieuw, nalezen // nagelezen AI 28 nov
    'w.station': "la estación", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perron': "el andén (donde subes al tren)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overstappen': "hacer transbordo (cambiar a otro tren o autobús)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvallen': "cancelarse (el tren no sale)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kaartje': "el billete", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reisplanner': "el planificador de viajes (una app que muestra trenes y autobuses)", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.1': "Mi tren está cancelado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.2': "Tengo que hacer un transbordo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.3': "¿De qué andén sale el tren?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.q': "¿Por qué llegas tan tarde?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.a': "Cancelaron mi tren. Te mandé un mensaje.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.checklist': "Revisa antes de terminar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.checklist': "la lista de control (una lista de cosas que revisar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvinken': "marcar (poner una marca al lado de una tarea)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdoen': "volver a hacer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compleet': "completo (no falta nada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergeten': "olvidar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resultaat': "el resultado", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.1': "Marco todo en la lista de control.", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.2': "¿El pedido está completo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.3': "Tengo que volver a hacer esto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.q': "¿No se te ha olvidado nada?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.a': "Voy a mirar la lista de control una vez más.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.leavesite': "Al salir de tu lugar de trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugzetten': "volver a poner (en su sitio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vegen': "barrer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vloer': "el suelo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitdoen': "apagar (la luz, una máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alslaatste': "el último, la última", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlaten': "dejar (cómo dejas tu sitio)", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.1': "Dejo mi sitio ordenado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.2': "¿Quién se va el último?", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.3': "Apaga la luz y cierra la puerta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.q': { m: "¿Eres el último en irte hoy?", f: "¿Eres la última en irte hoy?", x: "¿Hoy cierras tú?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.a': "Sí. Lo apago todo y cierro la puerta con llave.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.stagedays': "Cada día en tus prácticas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stageplek': "el sitio de prácticas (la empresa donde haces las prácticas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwezig': "ausente (no estás)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwezig': "presente (estás)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagevergoeding': "la ayuda de prácticas (dinero que puedes recibir en tus prácticas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiding': "el acompañamiento (ayuda de tu tutor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerling': "el alumno (en la escuela)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.1': { m: "Mañana falto. Estoy enfermo.", f: "Mañana falto. Estoy enferma.", x: "Mañana falto. Me encuentro mal." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.stagedays.2': "¿Recibo una ayuda de prácticas?", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.3': "En mi sitio de prácticas trabajo cuatro días.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.q': "¿Por qué faltaste ayer?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.a': { m: "Estaba enfermo. Llamé a la escuela y a la empresa.", f: "Estaba enferma. Llamé a la escuela y a la empresa.", x: "Me encontraba mal. Llamé a la escuela y a la empresa." }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.stageend': "El final de tus prácticas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eindgesprek': "la entrevista final (al final de tus prácticas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geslaagd': "aprobado (lo hiciste bastante bien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezakt': "suspendido (esta vez no fue suficiente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herkansing': "la recuperación (una nueva oportunidad)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedanken': "dar las gracias", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trakteren': "invitar (traer algo rico de comer para todos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.1': "Mañana tengo mi entrevista final.", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.2': "He aprobado mis prácticas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.3': "Quiero dar las gracias a todos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.q': "¡Tu último día! ¿Qué vas a hacer ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.a': "Primero sacarme el título. Luego busco trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.neighbours': "Tu barrio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurt': "el barrio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurthuis': "el centro cívico (una casa para actividades en tu barrio)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straat': "la calle", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kennismaken': "conocerse (ver a alguien por primera vez)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overlast': "las molestias (ruido o problemas para otros)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurvrouw': "la vecina (una mujer)", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.1': "Vivo en esta calle desde hace poco.", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.2': "En la biblioteca practico neerlandés.", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.3': "Perdón por las molestias.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.q': "Hola, soy tu nueva vecina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.a': "¡Mucho gusto! Soy Ali.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.join': "La escuela, el deporte y el voluntariado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilliger': "el voluntario (alguien que ayuda sin cobrar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilligerswerk': "el voluntariado", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sportclub': "el club deportivo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderavond': "la reunión de padres (en la escuela)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leraar': "el profesor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.basisschool': "la escuela primaria", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.1': "Mi hijo va a la escuela primaria.", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.2': "Juego al fútbol en un club deportivo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.3': "Los sábados hago voluntariado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.q': "¿Vienes a la reunión de padres?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.a': "Sí. Me gustaría hablar con el profesor.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workphotos': "Fotos y datos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezicht': "la cara", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantgegevens': "los datos de los clientes (nombre, dirección y teléfono de un cliente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onlinezetten': "subir a internet", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wissen': "borrar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werktelefoon': "el móvil del trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestand': "el archivo (en un ordenador)", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.1': "No subo fotos del trabajo a internet.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.2': "Borro la foto enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.3': "Su cara sale en la foto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.q': "¿Te puedo hacer una foto? Para internet.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.a': "No, mejor no. No quiero salir en internet.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.device': "Un móvil y un ordenador seguros", // nieuw, nalezen // nagelezen AI 28 nov
    'w.update': "la actualización (una versión nueva de una app o un programa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.virus': "el virus (un programa que daña tu ordenador)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wifi': "el wifi", // nieuw, nalezen // nagelezen AI 28 nov
    'w.usbstick': "el pendrive, la memoria USB", // nieuw, nalezen // nagelezen AI 28 nov
    'w.installeren': "instalar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openbaar': "público (para todos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.1': "Esta noche instalo la actualización.", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.2': "Este pendrive estaba en el suelo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.3': "¿Este wifi es seguro?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.q': "¿Puedo poner esta app en el móvil del trabajo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.a': "Pregunta primero al departamento de informática.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy': "Llama, o manda un mensaje corto", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.b': "Lee bien el anuncio: las horas, el lugar, y lo que tienes que tener, como un carné de conducir o un certificado. No hace falta que lo tengas todo: si tienes casi todo, inténtalo igualmente. Llama o escribe un mensaje corto: di tu nombre, qué trabajo, y por qué lo quieres. Nunca pagues dinero para conseguir un trabajo, y nunca mandes tus códigos de acceso por un anuncio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.p': "No tengo título, pero sí mucha experiencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.s': "Un anuncio pide 3 años de experiencia. Tú tienes 2 años. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o1': "Te presentas igualmente, y dices lo que sabes hacer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o2': "No te presentas: tienes demasiado poca.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o3': "Escribes 3 años: nadie lo comprueba.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.w': "Un anuncio muchas veces pide más de lo que el trabajo necesita de verdad. La sinceridad sobre lo que sabes hacer funciona mejor que mentir.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result': "Un no no es el final", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.b': "¿No sabes nada después de una semana? Puedes volver a llamar y preguntar con educación. ¿Te han dicho que no? Pregunta qué puedes hacer mejor la próxima vez: muchas empresas te lo dicen. Luego vuelve a intentarlo: la mayoría de la gente recibe primero unos cuantos noes. ¿Te han dicho que sí? Pregunta cuándo empiezas, y pide tu contrato antes de empezar. ¿Te invitan a un día de prueba? Pregunta antes cuánto dura, y si se paga.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.result.p': "¿Qué puedo hacer mejor la próxima vez?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.s': "Después de una entrevista de trabajo, te dicen que no por correo electrónico. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o1': "Preguntas con educación qué puedes hacer mejor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o2': "Contestas que se han equivocado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o3': "Dejas de buscar: no funciona.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.w': "Los comentarios te ayudan en tu próxima entrevista. Una pregunta educada también deja una buena imagen de ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence': "Tus papeles: mira la fecha", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.b': "¿Eres de la UE? Entonces puedes vivir y trabajar aquí con un pasaporte o un DNI válido: no necesitas permiso. ¿Eres de fuera de la UE? Entonces necesitas un permiso de residencia válido. En la tarjeta pone si puedes trabajar. Mira la fecha de caducidad de tus papeles. Pide un permiso nuevo al IND a tiempo: meses antes de la fecha, no en la última semana. Guarda una copia de cada carta. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.p': "Mi permiso caduca pronto. ¿Qué tengo que hacer?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.s': "Tu permiso de residencia caduca dentro de dos meses. Tienes mucho trabajo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o1': "Pides uno nuevo ahora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o2': "Esperas hasta la última semana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o3': "No haces nada: primero el trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.w': "Sin un permiso válido, puede que no te dejen trabajar. Un permiso nuevo tarda, por eso empiezas pronto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome': "¿Dirección nueva? Díselo a todos", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.b': "¿Te mudas? Da pronto tu nueva dirección al ayuntamiento (gemeente): es obligatorio. Díselo también a tu empresa, tu banco, tu seguro y tu médico. Pon tu nombre en el buzón, o las cartas no te llegan. El día de la mudanza, apunta las lecturas de los contadores y hazles fotos. Así solo pagas lo que has gastado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.p': "Me he mudado. Esta es mi nueva dirección.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.s': "Te mudaste hace dos semanas. Tus cartas todavía van a tu dirección antigua. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o1': "Das ahora tu nueva dirección al ayuntamiento (gemeente).", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o2': "Esperas: el correo te encontrará.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o3': "Pides a tu antiguo vecino que te guarde las cartas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.w': "Las cartas importantes, como multas o cartas de Hacienda, tienen fechas. Cuando van a una dirección equivocada, te las puedes perder.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts': "Lee cada línea", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.b': "Tu nómina tiene muchas líneas y palabras cortas. Arriba: tu nombre, tu número de empleado y el periodo. Luego tu sueldo bruto, tus horas y los pagos extra. Luego lo que se descuenta: impuestos y cotizaciones. En muchos trabajos, tú y tu empresa pagáis los dos tu pensión: tu parte la ves en tu nómina. Abajo: tu sueldo neto. ¿No entiendes una línea? Pide a tu empresa que te la explique. Guarda todas tus nóminas. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.p': "¿Qué significa esta línea de mi nómina?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.s': "En tu nómina, va dinero a “pensioen”. No sabes por qué. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o1': "Pides a tu empresa que te lo explique.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o2': "Pides que lo quiten, para tener más dinero ahora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o3': "Lo ignoras: no te vas a quedar tanto tiempo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.w': "El dinero de la pensión se ahorra para ti, para más adelante. Normalmente lo conservas cuando cambias de trabajo. Preguntar te ayuda a saber qué es tuyo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay': "¿Sueldo tarde o en efectivo? Actúa a tiempo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.b': "Tu sueldo tiene que llegar el día que pone tu contrato o tu cao. ¿Llega tarde, o falta dinero? Pregúntalo por escrito, por ejemplo en un correo electrónico. Guarda tus extractos bancarios y tu propia lista de horas. ¿Te pagan en efectivo, sin nómina? Entonces muchas veces es en negro (zwart): tus horas no quedan registradas, y más tarde es difícil demostrar tu trabajo o cobrar una prestación. Pide una nómina. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.p': "Mi sueldo todavía no ha llegado. ¿Cuándo llega?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.s': "Tu jefe dice: “A partir de ahora te pago en efectivo. Sin nómina, es más fácil”. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o1': "Dices que no, y pides una nómina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o2': "Dices que sí: en efectivo es más dinero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o3': "Dices que sí, pero solo este mes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.w': "Sin nómina, tu trabajo no está en papel. Entonces puedes perder derechos, por ejemplo a una prestación cuando te quedas sin trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday': "Tus días libres: úsalos a tiempo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.b': "Mira cuántos días libres te quedan: muchas veces está en tu nómina o en la app. Planea tus vacaciones pronto, y pídelas por escrito. Tus días libres por ley caducan 6 meses después del final del año, a no ser que no los hayas podido coger. Los días extra de tu cao o tu contrato siguen siendo válidos más tiempo, normalmente 5 años. ¿Se termina tu trabajo? Entonces recibes dinero por los días que no cogiste. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.p': "Quiero coger mis días de vacaciones este mismo año.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.s': "Es noviembre. Todavía te quedan 12 días libres de este año. Tu encargado no dice nada. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o1': "Preguntas cuándo los puedes coger.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o2': "No haces nada: no caducan nunca.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o3': "Te olvidas de ellos: ya se han perdido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.w': "Los días libres son para descansar, y pueden caducar. Si preguntas a tiempo, todavía los puedes planear.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special': "Una boda, un funeral, un bebé", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.b': "¿Tu pareja ha tenido un bebé? Entonces tienes 1 semana de permiso por nacimiento pagado, en las primeras 4 semanas. Tu cao muchas veces da un permiso especial (bijzonder verlof) para tu boda, o para un funeral en tu familia. Los días festivos, como Navidad: ninguna ley dice que libras. Tu contrato o tu cao dice si libras, o si cobras un extra. Pide tus días libres a tiempo. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.p': "Mi mujer va a tener un bebé. ¿Cómo pido el permiso por nacimiento?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.s': "Tu padre ha muerto en el extranjero. Quieres ir al funeral. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o1': "Se lo dices a tu empresa, y preguntas qué permiso puedes tener.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o2': "Simplemente te vas, y lo cuentas cuando vuelvas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o3': "No vas: no te quedan días libres.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.w': "Tu empresa entiende que esto es muy importante. Muchos cao dan un permiso especial, y también puedes usar tus días libres.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell': "Enfermar en el trabajo o de vacaciones", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.b': "¿Te encuentras mal en el trabajo? Díselo a tu encargado antes de irte a casa: ese es tu aviso de baja. No te vayas sin más. ¿Has enfermado durante tus vacaciones? Avisa a tu empresa igual que en casa, también desde el extranjero. Entonces los días de enfermedad normalmente no cuentan como días libres. Puede que necesites un justificante de un médico de allí. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.p': "He enfermado durante las vacaciones.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.s': "Estás de vacaciones en tu país. Coges la gripe y te quedas 5 días en la cama. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o1': "Avisas enseguida a tu empresa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o2': "Nada: total, estás de vacaciones.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o3': "Se lo dices a tu empresa cuando vuelvas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.w': "Si avisas a tiempo, los días de enfermedad normalmente no cuentan como días libres. Así puedes usar esos días más adelante.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury': "Un accidente en el trabajo: apúntalo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.b': "¿Te has hecho daño en el trabajo? Apunta qué pasó, cuándo y dónde, y quién lo vio. Haz fotos, y guarda todos los papeles del médico. Pide una copia del informe del accidente. ¿Te hiciste daño porque el trabajo no era seguro? Entonces normalmente tu empresa te tiene que pagar los daños. No tienes que demostrar que fue culpa suya: la empresa tiene que demostrar que hizo lo suficiente por tu seguridad. Pide consejo antes de firmar nada. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.injury.p': "¿Me puede dar una copia del informe?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.s': "Te haces daño en la mano con una máquina sin protección. Más tarde, tu jefe te pide que firmes un papel: “Fue culpa mía”. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o1': "No lo firmas. Primero pides consejo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o2': "Lo firmas, para no tener problemas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o3': "Lo firmas, pero guardas una foto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.w': "Lo que firmas puede contar más adelante, por ejemplo cuando pides una indemnización. Pide primero consejo al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt': "Una deuda que nunca se acaba", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.b': "En los Países Bajos, una agencia no te puede pedir dinero por buscarte trabajo. ¿Tuviste que pedir dinero prestado para el viaje o para el trabajo, y la deuda no para de crecer? ¿Tienes que quedarte hasta pagarla? Eso es una señal de explotación. Una deuda nunca significa que tengas que seguir trabajando: puedes dejarlo. Guarda cada papel y cada mensaje sobre la deuda. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.p': "¿Cuánto me queda por pagar? Lo quiero por escrito.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.s': "La agencia te pagó el billete de autobús. Ahora te quita dinero del sueldo cada semana, y la deuda no baja. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o1': "Pides una lista por escrito, y buscas ayuda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o2': "Trabajas más horas para pagarla antes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o3': "No dices nada: la agencia te ayudó.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.w': "Una deuda que no baja no te deja salir. Con la lista, el sindicato o FairWork pueden comprobar si es justa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection': "La inspección está para ayudarte", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.b': "La Nederlandse Arbeidsinspectie comprueba si el trabajo es seguro y justo: el sueldo, las horas y la explotación. Los inspectores pueden ir a tu trabajo y hablar con los trabajadores. Puedes decirles la verdad: no le dicen a tu jefe quién ha denunciado algo. ¿Necesitas ayuda en tu idioma? Pide un intérprete. FairWork ayuda gratis a las víctimas de explotación, también a personas sin papeles válidos. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.p': "Quiero contar algo, pero sin mi jefe delante.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.s': "Un inspector te pregunta por tus horas. Tu jefe te dijo que dijeras 8 horas. Trabajas 12. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o1': "Le dices la verdad al inspector.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o2': "Dices 8 horas, como dijo tu jefe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o3': "No dices nada, y te vas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.w': "El inspector solo puede ayudar si sabe la verdad. Lo que dices te ayuda a ti, y también a tus compañeros.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool': "En el coche: cinturón puesto, y acordad los gastos", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.b': "Todos en el coche llevan cinturón, también detrás. El conductor necesita un carné de conducir válido, y no debe beber alcohol antes de conducir. ¿Demasiada gente en la furgoneta, o el conductor conduce de forma peligrosa? Dilo, y no subas. ¿Compartes coche con compañeros? Acordad primero cómo pagáis la gasolina. ¿En la furgoneta de la agencia? Pregunta cuánto te cuesta, y pídelo por escrito.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.p': "Hay demasiada gente en la furgoneta. No me subo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.s': "La furgoneta del trabajo tiene 9 asientos. Esta mañana quieren subir 11 personas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o1': "No subes, y llamas a tu encargado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o2': "Te sientas en el suelo, detrás.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o3': "Te aprietas: son solo 20 minutos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.w': "Sin asiento y sin cinturón, un accidente pequeño puede ser muy grave. Tu empresa o tu agencia pueden buscar otra solución.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train': "¿El tren va con retraso? Manda un mensaje enseguida", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.b': "Mira el planificador de viajes antes de salir: los trenes y los autobuses pueden ir con retraso o cancelarse. ¿Tu tren va con retraso? Manda enseguida un mensaje a tu encargado, con la hora a la que vas a llegar. Los días de tormenta o de obras en la vía, coge un tren antes. Después de un retraso largo, muchas veces te devuelven dinero: mira en la web de la compañía de trenes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.p': "Mi tren va con retraso. Llego a las nueve.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.s': "Tu tren está cancelado. El siguiente sale dentro de 30 minutos. Tu turno empieza dentro de 40 minutos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o1': "Mandas ahora un mensaje diciendo que llegas tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o2': "Esperas, y lo explicas cuando llegues.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o3': "Te vas a casa: no es culpa tuya.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.w': "Tu encargado puede organizarse mejor si lo sabe pronto. Un retraso no es culpa tuya, pero avisar es cosa tuya.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist': "Revísalo tú primero", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.b': "Antes de decir “klaar”, revisa tu propio trabajo. Usa la lista de control si hay una, y marca cada paso. Mira tu trabajo como si fueras el cliente. ¿Algo no está bien? Vuelve a hacerlo ahora: es más rápido que después. ¿Tienes dudas? Pide a un compañero que lo mire. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.p': "Ya he terminado. ¿Me lo revisas un momento?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.s': "Has terminado. En la lista de control, hay un paso sin marcar. Crees que lo hiciste. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o1': "Revisas otra vez ese paso, y luego lo marcas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o2': "Lo marcas: seguramente lo hiciste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o3': "Lo dejas sin marcar: nadie lee la lista.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.w': "Una lista de control solo sirve si es verdad. Mirar una vez más lleva un minuto. Un error puede llevar horas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite': "Déjalo como te gustaría encontrarlo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.b': { m: "Al final de tu trabajo, deja tu sitio limpio y seguro. Vuelve a poner las herramientas y los materiales en su sitio, y barre el suelo. Apaga las máquinas y las luces que has usado. ¿Eres el último? Revisa las ventanas y las puertas, y cierra como dice tu empresa. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", f: "Al final de tu trabajo, deja tu sitio limpio y seguro. Vuelve a poner las herramientas y los materiales en su sitio, y barre el suelo. Apaga las máquinas y las luces que has usado. ¿Eres la última? Revisa las ventanas y las puertas, y cierra como dice tu empresa. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", x: "Al final de tu trabajo, deja tu sitio limpio y seguro. Vuelve a poner las herramientas y los materiales en su sitio, y barre el suelo. Apaga las máquinas y las luces que has usado. ¿Ya no queda nadie más? Revisa las ventanas y las puertas, y cierra como dice tu empresa. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.p': { m: "Soy el último. ¿Tengo que cerrar la puerta con llave?", f: "Soy la última. ¿Tengo que cerrar la puerta con llave?", x: "Ya no queda nadie más. ¿Tengo que cerrar la puerta con llave?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.s': { m: "Eres el último en el trabajo. No sabes cómo poner la alarma. ¿Qué haces?", f: "Eres la última en el trabajo. No sabes cómo poner la alarma. ¿Qué haces?", x: "Ya no queda nadie más en el trabajo. No sabes cómo poner la alarma. ¿Qué haces?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o1': "Llamas a tu encargado y le preguntas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o2': "Te vas sin poner la alarma: es tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o3': "Pruebas botones hasta que pite.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.w': "Un edificio sin alarma no es seguro. Tu encargado prefiere una llamada a encontrarse un problema mañana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays': "Estudiante, y compañero de trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.b': "En tus prácticas estás para aprender, pero trabajas como el resto del equipo: puntual, con las normas de la casa, y llamas si no puedes venir por enfermedad. Puedes hacer muchas preguntas: para eso estás allí. Tu trabajo tiene que ayudarte a aprender, no solo limpiar o cargar todo el día. ¿No es así? Habla con tu tutor de prácticas de la escuela. La ayuda de prácticas no siempre se da: pregunta por ella antes de empezar. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.p': "Yo también quiero aprender esto. ¿Puedo mirar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.s': "En tus prácticas solo limpias el comedor, todos los días, desde hace tres semanas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o1': "Lo hablas con tu tutor de prácticas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o2': "Lo haces y no dices nada: eres estudiante.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o3': "Te quedas en casa hasta que te den otro trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.w': "Las prácticas son para aprender tu profesión. Tu tutor puede hablar con la empresa sobre tareas mejores.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend': "Termina bien, y pide una referencia", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.b': "En la entrevista final oyes qué ha ido bien y qué se puede mejorar. Pide ejemplos, y apúntalos para tu próximo trabajo. ¿Ha ido bien? Pregunta si puedes dar su nombre como referencia. En tu último día, da las gracias a tus compañeros: aquí mucha gente trae algo pequeño de comer, como tarta o dulces. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.p': "¿Puedo dar su nombre como referencia?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.s': "Es el último día de tus prácticas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o1': "Das las gracias a tus compañeros, y te despides.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o2': "Te vas sin hacer ruido, sin decir nada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o3': "Pides un regalo a la empresa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.w': "Una buena despedida deja una buena imagen. A lo mejor quieres trabajar allí más adelante, o los necesitas como referencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours': "Saluda a tus vecinos", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.b': "¿Te acabas de mudar a una calle? Saluda a tus vecinos y diles tu nombre. Así es más fácil resolver problemas más adelante. ¿Trabajas de noche, o vives con mucha gente? No hagas ruido tarde por la noche ni de madrugada. Saca la basura el día que toca. En la biblioteca y en el centro cívico muchas veces puedes practicar neerlandés, a veces gratis.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.p': "Hola, soy Ali. Vivo aquí al lado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.s': "Vives con cinco compañeros de trabajo. Un vecino dice que muchas noches hay ruido. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o1': "Pides perdón, y quedáis en no hacer ruido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o2': "Dices que todos trabajáis y necesitáis relajaros.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o3': "No dices nada, y cierras la puerta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.w': "Una buena conversación a tiempo evita problemas más grandes. Los vecinos que te conocen muchas veces son más amables y te ayudan más.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join': "Participa: aprendes neerlandés más rápido", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.b': "Fuera del trabajo, aprendes neerlandés más rápido haciendo cosas con gente: deporte, un club o voluntariado. ¿Tu hijo va a la escuela? Ve a la reunión de padres, también si tu neerlandés no es perfecto: el profesor te quiere conocer. Puedes pedir que te hablen despacio en neerlandés, o usar una app de traducción. El voluntariado también queda bien en tu currículum.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.p': "¿Podría hablar un poco más despacio?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.s': "Te invitan a la reunión de padres. Tu neerlandés todavía no es bueno. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o1': "Vas, y usas un neerlandés sencillo o una app.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o2': "No vas: el profesor no te va a entender.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o3': "Mandas un mensaje corto diciendo que no tienes tiempo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.w': "El profesor quiere hablar de tu hijo, no de tu neerlandés. Si vas, demuestras que te importa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos': "Primero pregunta, luego publica", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.b': "Una foto en el trabajo puede enseñar más de lo que crees: un cliente, un usuario, una pantalla o un papel con nombres. No subas fotos del trabajo a internet sin permiso de tu empresa, y nunca fotos de personas sin su sí. Los datos de los clientes se quedan en el trabajo: no te los mandes a tu móvil ni a tu correo. ¿Has mandado algo por error? Díselo enseguida a tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.p': "Primero voy a pedir permiso.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.s': "Un compañero pone una foto graciosa de un cliente en la app del equipo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o1': "Dices que no está bien, y no la compartes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o2': "La compartes: solo está en la app del equipo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o3': "Le das a me gusta, pero no la compartes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.w': "El cliente no ha dado su sí a esta foto. Las fotos de una app pueden llegar a cualquier sitio, muy rápido. Decirlo con amabilidad protege al cliente y a tu compañero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device': "Actualizaciones sí, pendrives raros no", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.b': "Instala las actualizaciones en tu móvil y tu ordenador: cierran agujeros que usan los hackers. ¿Has encontrado un pendrive? No lo metas en tu ordenador: dáselo al departamento de informática. En un móvil o un ordenador del trabajo, instala solo apps que tu trabajo permite. En un wifi público, no entres en tu banco ni en tu trabajo. Bloquea tu móvil con un código. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.p': "He encontrado un pendrive. ¿Qué hago con él?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.s': "Encuentras un pendrive en el aparcamiento. Pone “Salaris”. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o1': "Se lo das al departamento de informática.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o2': "Lo metes en tu ordenador para ver de quién es.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o3': "Te lo llevas a casa y lo miras allí.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.w': "Un pendrive puede tener un virus, también si parece interesante. El departamento de informática lo puede revisar de forma segura.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" (four lessons) and the VOG lesson of "Werken via een uitzendbureau" (23 November 2026).
    'u.safework': "La seguridad en el trabajo", // nieuw, nalezen // nagelezen AI 28 nov
    'l.vog': "Tu pasado: el VOG", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vog': "el certificado de buena conducta (VOG: un papel del gobierno que dice que tu pasado no es un problema para este trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strafblad': "los antecedentes penales (los delitos por los que un tribunal te ha declarado culpable)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.screening': "la comprobación de antecedentes (una revisión de tu pasado antes de empezar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personenregister': "el registro de cuidado infantil (todas las personas que trabajan en el cuidado de niños tienen que estar en él)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiligerspas': "la tarjeta de vigilante de seguridad (la tarjeta que necesitas para trabajar como vigilante)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verleden': "el pasado", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.1': "En los cuidados casi siempre piden un VOG.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.2': "Tengo un VOG y estoy en el registro de cuidado infantil.", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.3': "Recibo mi tarjeta de vigilante después de la comprobación.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.q': "La agencia pide un VOG. ¿Ya lo tienes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.a': "No. Todavía espero el correo de Justis.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.safetysigns': "Las señales de seguridad", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verbodsbord': "la señal de prohibición (un círculo rojo con una raya que lo cruza: no puedes hacer esto)", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.gebodsbord': "la señal de obligación (un círculo azul con un dibujo blanco: tienes que hacer esto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingsbord': "la señal de advertencia (un triángulo amarillo con borde negro: cuidado, peligro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reddingsbord': "la señal de salvamento (un rectángulo verde: el camino de salida, o los primeros auxilios)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandbord': "la señal de equipos contra incendios (un cuadrado rojo: aquí hay un extintor o una manguera contra incendios)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pictogram': "el pictograma (un dibujo sencillo que dice algo sin palabras)", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.1': "Una señal redonda roja significa: eso no está permitido.", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.2': "Una señal azul dice lo que tienes que hacer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.3': "Sigue las señales verdes hasta la salida de emergencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.q': "¿Qué significa esta señal amarilla?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.a': "Cuidado, peligro. Es una señal de advertencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.substances': "Las sustancias peligrosas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stofmasker': "la mascarilla contra el polvo (te tapa la nariz y la boca)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.giftig': "tóxico, venenoso", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijtend': "corrosivo (te quema la piel o se come el metal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drinkfles': "la botella de bebida", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opbergen': "guardar (en su propio sitio, por ejemplo un armario que se cierra con llave)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dop': "el tapón (de una botella o de una lata)", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.1': "Mira primero el símbolo de peligro en la etiqueta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.2': "Nunca lo eches en una botella de bebida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.3': "Aquí tienes que llevar mascarilla contra el polvo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.q': "¿Este producto es tóxico?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.a': "Eso viene en la ficha de seguridad. Lo voy a mirar.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'l.firefight': "El fuego", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddriehoek': "el triángulo del fuego (el fuego necesita combustible, aire y calor; quita uno y el fuego se apaga)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zuurstof': "el oxígeno (está en el aire; el fuego lo necesita)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blussen': "apagar (un fuego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blusdeken': "la manta ignífuga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openvuur': "el fuego abierto (una llama, por ejemplo de un mechero o de un quemador de gas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandslang': "la manguera contra incendios (en un carrete en la pared)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.1': "Nunca eches agua sobre aceite que arde.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.2': "Solo un fuego pequeño lo apagas tú.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.3': "Pon la manta ignífuga sobre la sartén.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.q': "¡Hay fuego en la papelera!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.a': "Es pequeño. Voy a por el extintor.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.permitwork': "Permisos, espacios confinados e izado de cargas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkvergunningveilig': "el permiso de seguridad (un papel de seguridad para trabajos peligrosos: qué, dónde y qué peligros; no son tus papeles de residencia o de trabajo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beslotenruimte': "el espacio confinado (un tanque, un foso o una alcantarilla: pequeño, con poco aire fresco)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gasmeting': "la medición de gases (mides el aire antes de entrar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mangatwacht': "el vigilante de entrada (la persona que se queda fuera en la abertura, mantiene el contacto y da la alarma)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaalgever': "el señalista (la persona que hace señales con las manos al gruista)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijsen': "izar (una carga con la grúa)", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.1': "Sin permiso de seguridad no empezamos.", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.2': "Primero una medición de gases, y solo entonces al espacio confinado.", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.3': "Mira al señalista: izar, bajar, parar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.q': "¿Quién se queda fuera junto al tanque?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.a': { m: "Yo. Soy el vigilante de entrada.", f: "Yo. Soy la vigilante de entrada.", x: "Yo. Me toca vigilar la entrada." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog': "El VOG: una revisión de tu pasado", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.b': "Para algunos trabajos, la agencia o la empresa te pide un VOG (Verklaring Omtrent het Gedrag). Es un papel del gobierno: dice que tu pasado no es un problema para este trabajo. En los cuidados, el cuidado infantil y la seguridad casi siempre lo necesitas. Normalmente la empresa empieza la solicitud por internet. Recibes un correo de Justis, y la terminas con DigiD y pagas. Pregunta primero quién paga: muchas veces la empresa te lo devuelve. Para los voluntarios que trabajan con niños o con personas vulnerables, muchas veces es gratis. ¿Tienes antecedentes? Eso no siempre significa que no te den el VOG: Justis mira lo que importa para este trabajo. ¿Tienes dudas? Pregunta al Juridisch Loket. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.vog.p': "¿Tengo que pagar yo el VOG?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.s': "Tu nuevo trabajo en una residencia pide un VOG. Hace años tuviste un problema con la policía. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o1': "Lo pides, y preguntas al Juridisch Loket si te preocupa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o2': "No lo pides: nunca te lo van a dar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o3': "Dices que no tienes tiempo, y buscas otro trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.w': "Justis solo mira lo que importa para el trabajo. Mucha gente con algo en su pasado consigue igualmente un VOG. Un consejo ayuda si tienes dudas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns': "¿Qué es el VCA?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.b': "El VCA es un certificado de seguridad. Muchas empresas lo piden, también a través de una agencia, por ejemplo en la construcción y la industria. La mayoría de los trabajadores hace el B-VCA (VCA Basis); un encargado hace el VOL-VCA. Haces un curso, y un examen tipo test en un centro de examen reconocido. Muchas veces puedes hacer el examen en varios idiomas, por ejemplo en inglés o en polaco: pregunta al centro de examen. El diploma vale 10 años. Muchas veces paga la empresa o la agencia: pregunta antes de pagar tú. Una agencia no te puede quitar cualquier gasto del sueldo (mira el tema sobre el trabajo por agencia). En estas lecciones aprendes algunas palabras que encuentras en el trabajo seguro y en el VCA. Para el VCA haces un curso y un examen. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.p': "¿Quién paga el curso VCA?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.s': "Una agencia dice: “Necesitas el VCA. Pagas tú el curso, o te lo quitamos del sueldo”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.safetysigns.o1': "Preguntas quién paga, y pides que te lo den por escrito.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o2': "Pagas enseguida, para conseguir el trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o3': "No dices nada, y firmas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.w': "Muchas veces la empresa o la agencia paga el VCA. Si tienes que pagar algo, quieres saberlo antes, por escrito.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances': "Lee la etiqueta, y luego trabaja", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.b': "Un producto peligroso tiene en la etiqueta un rombo rojo con un dibujo negro dentro: el símbolo de peligro. El dibujo muestra el peligro, por ejemplo fuego, veneno o un producto que te quema la piel. La etiqueta y la ficha de seguridad (veiligheidsblad) dicen cómo trabajar con él de forma segura, y qué hacer si algo sale mal. Ponte lo que dicen: guantes, gafas de seguridad o una mascarilla. Cierra el tapón, y guarda el producto en su propio sitio. Nunca lo eches en una botella de bebida: alguien se lo puede beber. No comas, no bebas ni fumes mientras trabajas con él, y lávate las manos después. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.p': "¿Dónde está la ficha de seguridad de este producto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.s': "Un compañero echa un producto de limpieza en una botella de agua vacía, para llevárselo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o1': "Dices que es peligroso: alguien se lo puede beber.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o2': "Nada: es su propia botella.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o3': "Pones una pegatina pequeña en la botella.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.w': "En una botella de bebida, un producto parece agua o limonada. Alguien se lo puede beber sin querer. Un producto se queda en su propio envase, con la etiqueta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight': "¿Fuego pequeño o fuego grande?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.b': "El fuego necesita tres cosas: combustible, aire y calor. Esto es el triángulo del fuego. Quita una, y el fuego se apaga. Una manta ignífuga quita el aire. El agua quita el calor, pero nunca uses agua sobre aceite o grasa que arde, ni sobre aparatos eléctricos. Mira el extintor: pone para qué sirve. La espuma y el polvo sirven para muchos fuegos; el CO2 es bueno para fuegos eléctricos. Mantén las chispas y el fuego abierto lejos de productos que arden fácilmente. Apaga tú solamente un fuego pequeño, y solo cuando sea seguro. ¿Es más grande? Sal, cierra la puerta detrás de ti, y da la alarma. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.p': "¿Dónde está la manta ignífuga?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.s': "En el comedor, se prende el aceite de una sartén. Las llamas todavía son pequeñas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o1': "Pones la manta ignífuga sobre la sartén.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o2': "Le echas un vaso de agua.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o3': "Sacas la sartén fuera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.w': "El agua sobre aceite que arde hace una gran bola de fuego. La manta quita el aire, y el fuego se apaga. Apaga el fuego de la cocina si puedes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork': "Trabajo peligroso: primero el permiso", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.b': "Para trabajos peligrosos, como soldar cerca de cosas que arden, o trabajar en un tanque o un foso, la empresa muchas veces usa un permiso de seguridad (werkvergunning). Es un papel de seguridad, no son tus papeles de residencia o de trabajo. Dice qué haces, dónde, qué peligros hay y qué hacer contra ellos. Léelo, y empieza solo cuando esté firmado. En un espacio confinado puede haber demasiado poco aire o un gas peligroso: primero una medición de gases, y un vigilante de entrada se queda fuera. ¿Alguien tiene problemas dentro? Da la alarma: nunca entres sin protección. Con una grúa, una sola persona hace las señales: el señalista. Nunca te pongas debajo de una carga colgada. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.p': "¿Ya está firmado el permiso de seguridad?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.s': "Tu compañero dentro de un tanque no contesta. Tú vigilas la entrada. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o1': "Das la alarma, y te quedas fuera.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o2': "Entras rápido para ayudarle.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o3': "Esperas unos minutos, y luego miras.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.w': "El gas que le ha hecho daño a tu compañero también te puede hacer daño a ti. Muchas víctimas en tanques eran personas que querían ayudar. Después de la alarma, llega ayuda con protección.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie", the fourth own unit of Productie (23 November 2026).
    'u.process': "Operador en la industria de procesos", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantround': "La ronda y la sala de control", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlekamer': "la sala de control (donde los operadores vigilan toda la fábrica en pantallas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.operator': "el operador (la persona que maneja y vigila las máquinas de una fábrica)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukmeter': "el manómetro (un indicador redondo con una aguja)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau': "el nivel (lo lleno que está un tanque o un silo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snelheid': "la velocidad (lo rápido que va una línea o una máquina)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmmelding': "el aviso de alarma (un aviso en la pantalla de que algo va mal)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.1': "Estoy haciendo mi ronda.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.2': "La presión está demasiado alta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.3': "Apunto el valor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.q': "¿Por qué hay una alarma en la pantalla?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.a': "El nivel del tanque dos está demasiado alto.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantfault': "Una avería", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilstand': "la parada (la línea se para, y no se fabrica nada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstarten': "arrancar, poner en marcha (una máquina o una línea, paso a paso)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilzetten': "parar (parar una máquina de la forma correcta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.technischedienst': "el departamento de mantenimiento (el TD: reparan las máquinas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhoudsmonteur': "el técnico de mantenimiento", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resetten': "resetear, rearmar (quitar una avería en la pantalla o en el panel)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.1': "Cuando hay una avería, llamo al jefe de turno.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.2': "Nunca metas la mano en una máquina en marcha.", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.3': "El departamento de mantenimiento está de camino.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.q': "¿Puedo volver a arrancar la línea?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.a': "No, espera. El candado del mecánico todavía está puesto.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shiftwork': "Turnos y noches", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploeg': "el equipo de turno (el grupo que trabaja los mismos turnos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegwissel': "el cambio de turno (un equipo se va a casa, el siguiente empieza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volcontinu': "las 24 horas, en continuo (la fábrica funciona día y noche, todos los días de la semana)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdagslapen': "dormir de día (después de un turno de noche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.broodtrommel': "la fiambrera, la tartera", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflosser': "el sustituto (el compañero que ocupa tu puesto)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.1': "Nuestra fábrica funciona las 24 horas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.2': "Apúntalo en el libro de registro para el siguiente equipo de turno.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.3': "Llego a tiempo al relevo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.q': "¿Qué pasó anoche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.a': "La bomba tres se paró. Está en el libro de registro.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.heatdust': "Calor, vapor y polvo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeltoven': "el horno de fusión (un horno muy caliente que funde vidrio o metal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoom': "el vapor (agua muy caliente en forma de gas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoomleiding': "la tubería de vapor (está caliente, también cuando no ves vapor)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hittekleding': "la ropa de protección contra el calor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwartsstof': "el polvo de cuarzo (polvo muy fino de arcilla, arena o piedra; te daña los pulmones)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.explosiegevaar': "el peligro de explosión (el polvo o el vapor en el aire pueden explotar; una señal amarilla con EX)", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.1': "Bebe agua a menudo cerca del horno de fusión.", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.2': "El polvo de cuarzo no se ve. Ponte la mascarilla contra el polvo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.3': "Aquí hay peligro de explosión: nada de chispas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.q': "¿Puedo entrar con el teléfono en esta zona?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.a': "No. Aquí hay peligro de explosión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround': "Haz tu ronda y apúntalo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.b': "Una fábrica que funciona día y noche necesita ojos y oídos. En tu ronda miras, escuchas y hueles: un ruido nuevo, una fuga o un olor raro pueden ser la primera señal de un problema. Lees los indicadores: la temperatura, la presión, la velocidad y el nivel. Apunta cada valor enseguida, con la hora, en la lista o en el sistema. No más tarde, de memoria. ¿Un valor está demasiado alto o demasiado bajo? Avisa enseguida a la sala de control o a tu jefe de turno. Una alarma en la pantalla nunca es \"solo una alarma\": no la apagues antes de saber por qué ha saltado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.p': "La temperatura está demasiado alta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.s': "En tu ronda, la presión está un poco demasiado alta. Tu turno casi se acaba. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o1': "Avisas enseguida a la sala de control.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o2': "Lo apuntas, y no se lo dices a nadie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o3': "Lo dejas para el siguiente turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.w': "En una fábrica, un cambio pequeño puede crecer rápido. Si la sala de control lo sabe pronto, puede actuar antes de que algo salga mal.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault': "Parar, bloquear y luego reparar", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.b': "Cuando hay una avería, la línea se para, y todos quieren que vuelva a funcionar rápido. Pero justo entonces pasan muchos accidentes. Nunca metas la mano en una máquina en marcha, tampoco \"solo un momento\". Llama a tu jefe de turno o al departamento de mantenimiento. Antes de que alguien trabaje en la máquina, se para y se bloquea, para que nadie la pueda poner en marcha. Muchas veces, cada persona que trabaja en ella pone su propio candado. Solo vuelve a arrancar cuando no quede ningún candado y tu jefe de turno diga que es seguro. Arranca paso a paso, como lo aprendiste. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.p': "Todavía hay un candado puesto.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.s': "Un producto se ha atascado en la máquina. La máquina sigue en marcha. Un compañero dice: “Sácalo rápido”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.plantfault.o1': "No metes la mano: llamas al jefe de turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o2': "Lo sacas rápido con la mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o3': "Lo empujas fuera con un palo mientras está en marcha.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.w': "Una máquina que sigue en marcha se puede mover en cualquier momento. Una máquina parada y bloqueada no te puede hacer daño.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork': "Noches: dormir, comer, llegar a tiempo", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.b': "Muchas fábricas funcionan día y noche, todos los días de la semana. Vas alternando turnos de mañana, de tarde y de noche, muchas veces en tres o cinco equipos de turno. Después de un turno de noche, duerme en una habitación oscura y tranquila, y dile a tu familia cuándo duermes. Come a horas fijas, y lleva tu propia comida: por la noche el comedor muchas veces está cerrado. Llega a tiempo al relevo: tu compañero te está esperando, y la fábrica no se puede quedar sola. Para los turnos de noche hay normas extra, en la ley y muchas veces en el cao, por ejemplo sobre el descanso después de tus noches. Pregunta cuáles son las normas en tu trabajo. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.p': "¿Cuáles son las normas para los turnos de noche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.s': { m: "Después de cuatro noches, tu jefe de turno te pide trabajar una noche más. Estás muy cansado. ¿Qué haces?", f: "Después de cuatro noches, tu jefe de turno te pide trabajar una noche más. Estás muy cansada. ¿Qué haces?", x: "Después de cuatro noches, tu jefe de turno te pide trabajar una noche más. Tienes mucho cansancio. ¿Qué haces?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o1': { m: "Dices que estás muy cansado, y preguntas por las normas.", f: "Dices que estás muy cansada, y preguntas por las normas.", x: "Dices que tienes mucho cansancio, y preguntas por las normas." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o2': "Dices que sí, y bebes mucho café.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o3': "Dices que sí, y duermes un poco en tu pausa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.w': "Las personas cansadas cometen más errores, y en una fábrica un error puede ser peligroso. Hay normas sobre el descanso después de los turnos de noche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust': "Calor, polvo y chispas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.b': "Cerca de un horno de fusión, un horno de cocción o de vapor hace mucho calor. Bebe agua a menudo, también antes de tener sed. Ponte la ropa de protección contra el calor, y no toques tuberías ni piezas sin guantes: el vapor y el metal caliente queman, también cuando no los ves. ¿Te mareas o te encuentras mal? Para, ve a un sitio fresco y avisa a alguien. El polvo de arcilla, arena o piedra puede contener polvo de cuarzo (kwartsstof). No lo ves, pero te daña los pulmones. Usa la extracción, ponte la mascarilla contra el polvo, y nunca soples el polvo con aire comprimido. En algunas zonas, el polvo o el vapor pueden explotar: lo indica una señal amarilla con EX. Allí: nada de chispas, nada de fuego, y muchas veces nada de teléfono normal. Pregunta qué está permitido en cada zona. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.p': "No me encuentro bien. Voy a un sitio fresco.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.s': "Hay polvo fino de arcilla en tu máquina. Un compañero dice: “Sóplalo con la pistola de aire”. ¿Qué haces?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.heatdust.o1': "Lo limpias en húmedo, o con el aspirador.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o2': "Lo soplas: es más rápido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o3': "Lo dejas para el siguiente turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.w': "Al soplar, el polvo sube, al aire y a tus pulmones. Un trapo húmedo o un aspirador mantienen el polvo abajo.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (debts, taxes, discrimination, the union, kiln, mixing lab, first weeks, order picking) (26 November 2026).
    'l.discrimination': "Discriminación e intimidación", // nieuw, nalezen // nagelezen AI 28 nov
    'w.andersbehandelen': "tratar de forma diferente (peor que a los demás)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkomst': "el origen (el país o el grupo de donde vienes tú o viene tu familia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geloof': "la religión, la fe", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitschelden': "insultar (decirle palabras feas a alguien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedreigen': "amenazar (decir que vas a hacer daño a alguien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geweld': "la violencia", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.1': "Me tratan de forma diferente por mi religión.", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.2': { m: "Me está amenazando. No me siento seguro.", f: "Me está amenazando. No me siento segura.", x: "Me está amenazando. No me siento a salvo." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.3': "Puedo decir que no, también a mi jefe.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.q': "¿Estás bien? Te insultan todo el rato.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.a': "No, no estoy bien. Voy a denunciarlo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.union': "El sindicato y el comité de empresa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lidworden': "afiliarse, hacerse miembro", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contributie': "la cuota (la pagas cada mes)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opkomenvoor': "defender (defender los intereses de alguien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhandelen': "negociar (hablar hasta que las dos partes están de acuerdo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loonsverhoging': "la subida de sueldo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ondernemingsraad': "el comité de empresa (el OR: compañeros elegidos para hablar con el director)", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.1': "Me afilio al sindicato.", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.2': "El sindicato negocia el cao.", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.3': "¿Quién está en el comité de empresa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.q': "¿Por qué eres miembro del sindicato?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.a': "Me defienden cuando hay un problema.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debthelp': "Deudas y ayuda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herinnering': "el recordatorio de pago (una carta: todavía no has pagado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmaning': "el último aviso de pago (paga antes de una fecha, o puede haber costes extra)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.betalingsregeling': "el plan de pagos (pagas una deuda en partes pequeñas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurwaarder': "el agente judicial (un funcionario que cobra una deuda, muchas veces después de que un juez lo ha decidido)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuldhulp': "la ayuda con las deudas (ayuda gratis con tus deudas, del ayuntamiento)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterstand': "los atrasos (dinero que ya tendrías que haber pagado)", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.1': "He recibido un último aviso de pago.", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.2': "¿Puedo pagar a plazos?", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.3': "Quiero ayuda con mis deudas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.q': "Usted todavía no ha pagado la factura.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.a': "Es cierto. ¿Puedo tener un plan de pagos?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.taxes': "Impuestos y ayudas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jaaropgave': "el certificado anual (un papel de tu empresa con tu sueldo de todo el año)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauweenvelop': "el sobre azul (en él llegan las cartas de la Belastingdienst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teruggave': "la devolución (dinero de impuestos que te devuelven)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstel': "la prórroga (puedes hacerlo más tarde)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huurtoeslag': "la ayuda para el alquiler (dinero del Estado para ayudarte a pagar el alquiler)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.belastingtelefoon': "la línea de teléfono gratuita de la Belastingdienst", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.1': "Necesito mi certificado anual para la declaración de la renta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.2': "Ahora gano más. Lo comunico enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.3': "La Belastingdienst me devuelve dinero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.q': "Hay un sobre azul para ti.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.a': "Gracias. Lo abro enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.kiln': "Horno, vidrio y cerámica", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pers': "la prensa (una máquina que aprieta arcilla o polvo para darle forma)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glazuur': "el esmalte (una capa brillante, como de vidrio, sobre un azulejo o una taza)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tunneloven': "el horno túnel (un horno largo; los productos pasan despacio por dentro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherf': "el trozo roto (un pedazo afilado de vidrio o de azulejo roto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gloeiend': "al rojo vivo (tan caliente que brilla de color rojo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.armbeschermer': "el protector de brazo (una manga que protege el brazo de los cortes)", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.1': "Los azulejos pasan despacio por el horno túnel.", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.2': "Este azulejo tiene una grieta. Hay que rechazarlo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.3': "Ponte los protectores de brazo cerca del vidrio.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.q': "¿Puedo recoger los trozos rotos con la mano?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.a': "No. Usa el cepillo y el recogedor.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mixlab': "La sala de mezclas y el laboratorio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batch': "el lote (una cantidad que se hace de una vez, con una receta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwegen': "pesar (pesar exactamente lo que dice la receta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mengvat': "el tanque de mezcla (un tanque grande con un mezclador dentro)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.labjas': "la bata de laboratorio", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laboratorium': "el laboratorio (el lab: aquí analizan el producto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grondstof': "la materia prima (con lo que se hace el producto)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.1': "Pesa las materias primas con exactitud.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.2': "Tomo una muestra para el laboratorio.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.3': "¿Qué lote es este? Mira la etiqueta.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.q': "¿Han aprobado el lote?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.a': "Todavía no. El laboratorio está analizando la muestra.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination': "¿Te tratan injustamente? No es culpa tuya", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.b': "Hay discriminación cuando te tratan de forma diferente o peor por quién eres: tu origen, tu color de piel, tu religión, tu género, tu edad, una discapacidad o a quién amas. La intimidación es, por ejemplo, tocarte sin que tú quieras, hacerte comentarios sexuales, amenazarte o insultarte. Las dos cosas están prohibidas en el trabajo, y nunca es culpa tuya. Puedes decir que no, también a tu jefe. Apunta qué pasó, cuándo y quién lo vio. Habla con tu encargado, o con la vertrouwenspersoon si tu empresa tiene una. Fuera de tu trabajo, la oficina contra la discriminación de tu municipio te ayuda gratis (discriminatie.nl). El College voor de Rechten van de Mens puede dar un dictamen, también gratis. ¿Violencia o una amenaza? Ve a la policía. En peligro: llama al 112. Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.p': "Quiero informar de algo. ¿Puedo hablar con usted en confianza?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.s': "Un compañero te insulta muchas veces por el lugar de donde vienes. Los demás se ríen. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o1': "Lo apuntas, y se lo cuentas a alguien de confianza.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o2': "No dices nada: es parte del trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o3': "Dejas el trabajo, y no le dices a nadie por qué.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.w': "Insultar a alguien por su origen es discriminación, y está prohibido. Si lo apuntas y hablas de ello, alguien te puede ayudar a que pare.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union': "Juntos, más fuertes", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.b': "Un sindicato (vakbond), por ejemplo FNV o CNV, defiende a los trabajadores. Hace acuerdos con las empresas sobre el sueldo y el trabajo: el cao. Muchos cao valen para todos en un sector, también si no eres miembro. Los miembros pagan una cuota (contributie) cada mes, y reciben consejo y ayuda, por ejemplo con un problema de sueldo o de despido. Hazte miembro a tiempo: muchas veces el sindicato solo ayuda con un problema que empieza después de afiliarte. Afiliarte es tu propia decisión, y tu empresa no te puede castigar por ello. Una empresa con 50 trabajadores o más tiene que tener un comité de empresa (ondernemingsraad, OR): compañeros elegidos por los trabajadores. El OR habla con el director sobre, por ejemplo, el horario de trabajo y la seguridad. Una empresa más pequeña puede tener una representación del personal (personeelsvertegenwoordiging). ¿Tienes preguntas? Pregunta a un compañero del OR. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.p': "Tengo una pregunta sobre los nuevos horarios. ¿Puede hacer algo el OR con eso?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.s': "Tu empresa quiere poner muchos más turnos de tarde. Muchos compañeros no están contentos. ¿Qué puedes hacer?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o1': "Le preguntas a un compañero del OR.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o2': "Dejas de venir por la tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o3': "No dices nada: no se puede cambiar nada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.w': "El OR tiene voz en las normas sobre el horario de trabajo. Puede hablar de ellas con el director, para todos los trabajadores juntos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp': "Abre todas las cartas, y pide ayuda pronto", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.b': "¿No pagaste una factura a tiempo? Entonces primero recibes un recordatorio (herinnering), y más tarde un último aviso (aanmaning). Antes de que una empresa te pueda cobrar costes extra por esto, te tiene que dar 14 días para pagar. Así que abre todas las cartas, también cuando te dan miedo. ¿No puedes pagarlo todo de una vez? Llama o escribe, y pide un plan de pagos (betalingsregeling). Un deurwaarder (agente judicial) es un funcionario que cobra deudas, muchas veces después de que un juez lo ha decidido. Puede, por ejemplo, quedarse con una parte de tu sueldo, pero siempre te tiene que dejar lo suficiente para vivir. ¿Tienes deudas? Pide ayuda pronto, cuando todavía son pequeñas. El ayuntamiento (gemeente) da ayuda gratis con las deudas (schuldhulp). En geldfit.nl puedes hacer un test gratis y encontrar ayuda cerca de ti. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.p': "No puedo pagarlo todo de una vez. ¿Puedo pagar a plazos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.s': "Recibes un último aviso de pago por la factura del teléfono. Este mes no tienes el dinero. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o1': "Llamas a la empresa, y pides un plan de pagos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o2': "Guardas la carta, y esperas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o3': "Pides dinero rápido con “compra ahora, paga después”.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.w': "Si lo dices a tiempo, muchas veces la empresa puede acordar contigo pagos pequeños. Una carta que guardas no desaparece: los costes solo crecen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes': "Tu declaración de la renta y tus ayudas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.b': "La declaración de la renta (aangifte) del año anterior se tiene que hacer antes del 1 de mayo. ¿Has recibido una carta que te pide hacerla? Entonces tienes que hacerla. A veces te devuelven dinero. Necesitas el certificado anual (jaaropgave) de tu empresa. ¿No tienes tiempo? Puedes pedir una prórroga (uitstel). Las ayudas (toeslagen), como la zorgtoeslag y la huurtoeslag, son un adelanto: dependen de lo que vas a ganar este año. ¿Ganas más, o cambia otra cosa? Comunícalo enseguida en Mijn toeslagen. Si no lo haces, más tarde puede que tengas que devolver mucho dinero. ¿Tienes que devolver dinero? Puedes pedir un plan de pagos. Ayuda gratis: la BelastingTelefoon, una oficina de la Belastingdienst (pide cita antes) o la biblioteca. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.p': "Mis ingresos han cambiado. ¿Cómo lo comunico?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.s': "Empiezas un trabajo nuevo y ganas más cada mes. Recibes huurtoeslag. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o1': "Comunicas tus nuevos ingresos en Mijn toeslagen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o2': "Esperas a que la Belastingdienst te pregunte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o3': "Dejas de pagar el alquiler.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.w': "Tu ayuda depende de lo que ganas. Si comunicas el cambio a tiempo, recibes la cantidad correcta, y más tarde no tienes que devolver mucho dinero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln': "Afilado, caliente y pesado", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.b': "En una fábrica de azulejos o de vidrio, los productos se prensan para darles forma, reciben un esmalte y pasan despacio por un horno largo. Después del horno se tienen que enfriar: no los toques mientras están calientes, o lleva guantes resistentes al calor. El vidrio y los azulejos rotos son muy afilados. Lleva guantes anticorte, protectores de brazo y gafas de seguridad. Nunca intentes coger una placa de vidrio que se cae: échate atrás. Recoge los trozos rotos con el cepillo y el recogedor, nunca con las manos, y tíralos al contenedor correcto. El esmalte y el polvo pueden contener sustancias nocivas: lávate las manos antes de comer o beber. En la prensa, nunca metas la mano mientras está en marcha. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.p': "¡Cuidado, trozos rotos! Voy a por el cepillo y el recogedor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.s': "Una placa de vidrio se sale del bastidor y empieza a caer. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o1': "Te echas atrás, y la dejas caer.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o2': "La coges con las manos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o3': "La paras con la pierna.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.w': "Una placa que cae puede cortar muy hondo, también a través de los guantes. Una placa rota solo cuesta dinero.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab': "Sigue la receta exactamente", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.b': "En una sala de mezclas haces un lote siguiendo una receta: qué materias primas, cuánto y en qué orden. Pésalo todo con exactitud, y apunta lo que has añadido, con el número de lote. ¿Tienes dudas? Pregunta, no adivines. Antes de usar un bidón o un saco, lee la etiqueta: qué contiene, el número de lote y los símbolos de peligro. Nunca metas en un bidón o en un saco algo que no tiene que ir ahí. Para una muestra, usa una cuchara limpia y un bote limpio, y ponle una etiqueta enseguida. El polvo y el vapor pueden ser nocivos: usa la extracción, y lleva lo que haga falta, como una bata de laboratorio, gafas, guantes o una mascarilla. En la industria alimentaria también llevas redecilla y te lavas las manos a menudo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.p': { m: "No estoy seguro. ¿Cuánto hay que echar?", f: "No estoy segura. ¿Cuánto hay que echar?", x: "No lo sé con seguridad. ¿Cuánto hay que echar?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.s': "La receta dice 25 kilos. Por error echas 26 kilos, y ya están en el tanque de mezcla. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o1': "Se lo dices a tu jefe de turno, y lo apuntas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o2': "No dices nada: un kilo no es mucho.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o3': "Sacas un poco con la mano.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.w': "Una cantidad equivocada puede estropear todo el lote. Si el jefe de turno lo sabe a tiempo, el laboratorio puede revisarlo antes de que el lote siga adelante.", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (performance review, forms, voicemail, the dentist) (27 November 2026).
    'l.forms': "Rellenar un formulario", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invullen': "rellenar (un formulario)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vakje': "la casilla (un cuadrado pequeño en un formulario)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aankruisen': "marcar (poner una cruz en una casilla)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verplichtveld': "el campo obligatorio (tienes que rellenarlo; muchas veces lleva un *)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postcode': "el código postal (un código corto de tu calle o tu ciudad, parte de tu dirección)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdletters': "las mayúsculas (A, B, C)", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.1': "Escribe tu nombre en mayúsculas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.2': "Marca la casilla correcta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.3': "¿Me puede ayudar con este formulario?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.q': "¿Ya has rellenado el formulario?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.a': "Casi. ¿Dónde va mi firma?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.voicemail': "El buzón de voz y devolver la llamada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.piep': "el pitido (el sonido corto; después dices tu mensaje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beluisteren': "escuchar (un mensaje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boodschap': "el mensaje (lo que dices en el buzón de voz de alguien)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.noemen': "decir, nombrar (tu nombre, tu número)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zosnelmogelijk': "lo antes posible", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opnieuw': "otra vez (una vez más)", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.1': "Soy Ali Haddad. Llamo por mi horario de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.2': "Escucho mi buzón de voz cada día.", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.3': "Vuelvo a llamar más tarde.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.q': "Deje su nombre y su número después del pitido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.a': "Soy Ali. ¿Me puede devolver la llamada lo antes posible?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.dentist': "El dentista", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandarts': "el dentista", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiespijn': "el dolor de muelas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaatje': "la caries (un agujero pequeño en un diente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulling': "el empaste (el dentista cierra el agujero de un diente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebit': "la dentadura (todos tus dientes juntos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvullendeverzekering': "el seguro complementario (lo puedes elegir además del seguro médico básico)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.1': "Tengo dolor de muelas desde hace dos días.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.2': "Tengo una caries. Me van a poner un empaste.", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.3': "¿Cuánto cuesta un empaste?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.q': "¿Cuándo fuiste al dentista por última vez?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.a': "Hace un año. Me gustaría una revisión.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms': "Un formulario: escribe claro, y protege tu BSN", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.b': "Un formulario muchas veces pide tu nombre, tu fecha de nacimiento, tu dirección y tu código postal. Escribe claro, muchas veces en mayúsculas. Un campo con una estrella (*) es obligatorio: tienes que rellenarlo. Marca la casilla correcta. ¿No entiendes una pregunta? Pide ayuda antes de firmar. Nunca firmes lo que no entiendes. Tu BSN: solo algunas organizaciones te lo pueden pedir, como tu empresa, el ayuntamiento (gemeente), la Belastingdienst, tu aseguradora, tu médico y tu banco. Una tienda o un club deportivo no pueden. Nunca des tu BSN a un desconocido, ni en una app ni por teléfono. ¿Tienes dudas? Pregunta para qué lo necesitan. Muchas bibliotecas ayudan gratis con los formularios, muchas veces en una hora de atención sin cita. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.p': "¿Es obligatorio poner mi BSN aquí?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.s': "Te apuntas a un club deportivo. El formulario pide tu BSN. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o1': "Lo dejas vacío, y preguntas para qué lo necesitan.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o2': "Lo rellenas: cualquier formulario lo puede pedir.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o3': "En su lugar, das tus datos de DigiD.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.w': "Un club deportivo no puede usar tu BSN. Solo algunas organizaciones pueden, como tu empresa, el ayuntamiento (gemeente) y tu aseguradora. Si preguntas para qué lo necesitan, proteges tu número.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail': "Un mensaje: quién, por qué, tu número", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.b': "¿No contestan? Deja un mensaje corto (boodschap) después del pitido (piep). Di tu nombre, por qué llamas y tu número de teléfono. Habla despacio, y di tu número dos veces. ¿Tienes una llamada perdida? Primero escucha tu buzón de voz, y luego devuelve la llamada lo antes posible. ¿No entiendes un mensaje? Escúchalo otra vez, o pide a un compañero que lo escuche contigo. Configura tu buzón de voz, y escúchalo cada día. ¿Avisas de que no vas a trabajar por enfermedad? En muchas empresas un mensaje no es suficiente: vuelve a llamar hasta que hables con alguien. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.p': "¿Puedo dejar un mensaje?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.s': "Vas a llegar tarde, y llamas a tu encargada. Oyes su buzón de voz. ¿Qué dices después del pitido?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o1': "Tu nombre, por qué llamas y tu número.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o2': "Solo “Bel me terug”, y cuelgas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o3': "Nada: cuelgas, y esperas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.w': "Con tu nombre, el motivo y tu número, tu encargada sabe lo que pasa, y te puede devolver la llamada enseguida.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist': "El dentista: una revisión, y pregunta el precio", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.b': "Inscríbete con un dentista (tandarts) cerca de tu casa, y ve a revisión (controle) con regularidad, muchas veces una vez al año. ¿Dolor de muelas? Llama a tu dentista y di que te duele mucho: así muchas veces te dan cita pronto. Por la noche o el fin de semana, llama a tu propio dentista: el mensaje del teléfono te dice qué dentista atiende ahora. Para los adultos, el seguro médico básico paga muy poco en el dentista: normalmente no paga la revisión ni un empaste. Puedes elegir un seguro complementario (aanvullende verzekering) para el dentista: mira lo que paga. Para los menores de 18 años, el seguro básico paga la mayor parte del cuidado dental. Pregunta cuánto cuesta un tratamiento antes de que empiece. Para un tratamiento grande, el dentista te tiene que dar antes el precio por escrito. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.p': "Me duele mucho. ¿Puedo ir todavía hoy?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.s': "Es sábado por la noche. Tienes mucho dolor de muelas, y un analgésico no ayuda. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o1': "Llamas a tu dentista: el mensaje dice quién atiende ahora.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o2': "Llamas al 112: es una emergencia.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o3': "Esperas hasta el lunes, y tomas más analgésicos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.w': "Fuera del horario de consulta, un dentista de guardia ayuda con el dolor urgente. El 112 es solo para una emergencia, como un peligro de muerte.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
