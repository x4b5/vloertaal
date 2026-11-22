import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Solicitar un empleo', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'w.kluisje': 'la taquilla, el casillero', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.uitzetten': 'apagar',
    'w.prive': 'privado, personal',
    'w.foto': 'la foto',
    's.phone.1': 'Mi teléfono está en mi casillero.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'w.inklokken': 'fichar al entrar, marcar la entrada', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.uitklokken': 'fichar al salir, marcar la salida', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'w.feedback': 'el feedback, los comentarios (lo que alguien dice sobre tu trabajo)', // nieuw, nalezen
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
    's.illness.1': { m: 'Llamo para avisar de que estoy enfermo.', f: 'Llamo para avisar de que estoy enferma.', x: 'Llamo para avisar de que estoy enfermo/a.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
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
    'w.waarderen': 'hacer evaluar (un diploma)', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    's.bike.2': '¡Enciende la luz de la bici!', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'w.beton': 'el hormigón, el concreto', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    's.privacy.3': 'En casa no hablo de las personas que cuido.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    's.service.2': '¿Puedo tomarle el pedido?', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.interview.s': 'Al final de la entrevista, la empresa pregunta: “Heb je nog vragen?” ¿Qué haces?',
    'c.interview.o1': 'Haces una pregunta sobre las horas o la formación.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Dices que no, porque hacer preguntas no es educado.',
    'c.interview.o3': 'Hablas más de ti, para mostrar que trabajas bien.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'Las preguntas muestran que te interesa el trabajo. Aquí las empresas muchas veces las esperan.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Pide tu contrato por escrito',
    'c.findwork.b': 'Pide siempre un contrato por escrito y una copia para ti. Léelo antes de firmar, o pide ayuda a alguien de confianza. Una agencia de trabajo temporal (uitzendbureau) no te puede pedir dinero por encontrarte un trabajo. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.findwork.p': '¿Puedo leer primero el contrato?',
    'c.findwork.s': 'Una empresa nueva te dice: “Firma aquí ahora. Puedes leerlo después.” ¿Qué haces?',
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
    'c.housing.s': 'Se termina tu trabajo. La agencia dice: “Mañana tienes que dejar la casa.” ¿Qué haces?',
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
    'c.extra.s': 'Un compañero dice: “En mayo el jefe te da dinero extra.” ¿Qué es?',
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
    'c.smoking.s': 'Hace frío y llueve. Un compañero dice: “Fuma en el almacén, nadie lo ve.” ¿Qué haces?',
    'c.smoking.o1': 'Dices que no, y fumas fuera en tu pausa.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Fumas rápido en el almacén, solo esta vez.',
    'c.smoking.o3': 'Mejor usas tu vapeador dentro, porque eso sí está permitido.',
    'c.smoking.w': 'Fumar dentro va contra la ley y puede provocar un incendio. Un vapeador dentro tampoco está permitido. Cumplir la norma protege a todos.',
    'c.clock': 'Ficha tú',
    'c.clock.b': 'Ficha tú al entrar y al salir, en el momento en que de verdad empiezas y terminas de trabajar. Nunca fiches por un compañero, y nunca dejes que otra persona use tu tarjeta. Eso cuenta como fraude y puede llevar al despido. ¿Vas a llegar tarde? Llama antes de que empiece tu turno. Comprueba que tus horas fichadas coinciden con tu nómina. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.',
    'c.clock.p': 'Se me olvidó fichar al salir. ¿Lo puedes corregir?',
    'c.clock.s': 'Un compañero te da su tarjeta: “Fíchame tú, llego 20 minutos tarde.” ¿Qué haces?',
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
    'c.mustmay.s': 'Tu jefe de equipo dice: “Je hoeft zaterdag niet te komen.” ¿Qué quiere decir?', // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.warning.s': 'El primer día, la agencia dice: “Nos quedamos con tu pasaporte, por seguridad.” ¿Qué haces?',
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
    'c.scams.s': 'Recibes un SMS: “Su cuenta bancaria va a ser bloqueada. Haga clic ahora en este enlace.” ¿Qué haces?',
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
    'c.site.s': 'Tienes que trabajar en un andamio, pero falta una barandilla. Un compañero dice: “Ten cuidado y ya está.” ¿Qué haces?',
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
    'c.cleansafe.s': 'El baño está muy sucio. Una compañera dice: “Mezcla dos productos, así funciona mejor.” ¿Qué haces?',
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
    'c.translate.q': '¿Qué dice esa nota?', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    's.boundaries.1': 'No me toques.', // nieuw, nalezen ("Blijf van me af.", 4 nov 2026)
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
    'c.boundaries.s': { m: 'Tu jefe de equipo muchas veces te pone la mano en la espalda y te dice que estás “guapo”. Eso te hace sentir mal. Él decide tus turnos. ¿Qué haces?', f: 'Tu jefe de equipo muchas veces te pone la mano en la espalda y te dice que estás “guapa”. Eso te hace sentir mal. Él decide tus turnos. ¿Qué haces?', x: 'Tu jefe de equipo muchas veces te pone la mano en la espalda y te dice que estás “guapo/a”. Eso te hace sentir mal. Él decide tus turnos. ¿Qué haces?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
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
    'l.counting': 'Los números', // nieuw, nalezen
    'w.dertien': 'trece (13)', // nieuw, nalezen
    'w.dertig': 'treinta (30)', // nieuw, nalezen
    'w.zeventien': 'diecisiete (17)', // nieuw, nalezen
    'w.zeventig': 'setenta (70)', // nieuw, nalezen
    'w.zevenenveertig': 'cuarenta y siete (47)', // nieuw, nalezen
    'w.vierenzeventig': 'setenta y cuatro (74)', // nieuw, nalezen
    's.counting.1': 'Tengo trece cajas, no treinta.', // nieuw, nalezen
    's.counting.2': 'La ubicación setenta y cuatro está vacía.', // nieuw, nalezen
    's.counting.3': '¿Puede decirlo cifra por cifra?', // nieuw, nalezen
    'c.counting.q': '¿Cuántas cajas quedan?', // nieuw, nalezen
    'c.counting.a': 'Setenta. Siete, cero.', // nieuw, nalezen
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
    'c.counting.s': 'Tu encargado dice: “Ga naar gang zevenenveertig.” ¿Qué pasillo es?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': 'El pasillo 47.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'El pasillo 74.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'El pasillo 40.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '“Zevenenveertig” es “siete y cuarenta”: primero el 7, luego el 40. Así que es el pasillo 47. Muchos recién llegados oyen 74 y van al pasillo equivocado.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': '“Half acht” son las 7:30',
    'c.hours.b': 'En neerlandés, “half” cuenta hacia la hora siguiente: half acht son las 7:30, no las 8:30. Kwart over acht son las 8:15, y kwart voor acht son las 7:45. Revisa tú tus horas: la hora de salida menos la hora de entrada, menos la pausa. La pausa muchas veces no se paga. Apunta tus horas cada día.',
    'c.hours.p': '¿Half acht? ¿Entonces media hora antes de las ocho?',
    'c.hours.s': 'Tu encargado dice: “Morgen begin je om half negen.” ¿A qué hora empiezas mañana?',
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
    'w.automatisch': 'automático (funciona solo)', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.aifake.s': 'Suena tu teléfono. Una voz igual que la de tu jefe dice: “Paga ahora esta factura, es urgente.” ¿Qué haces?',
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
    'c.greensafe.s': "Esta mañana fumigaron un invernadero. Hay un cartel en la puerta. Un compañero dice: “Vamos, es solo un momento.” ¿Qué haces?", // nagelezen (2e lezing) // nagelezen AI 22 nov
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
    'u.finish': "Terminar tu trabajo", // nieuw, nalezen
    'l.workorder': "La orden de trabajo", // nieuw, nalezen
    'w.werkbon': "la orden de trabajo (un papel o una app con tu tarea)", // nieuw, nalezen
    'w.lezen': "leer", // nieuw, nalezen
    'w.aantal': "la cantidad (cuántos)", // nieuw, nalezen
    'w.materiaal': "el material (lo que necesitas para el trabajo)", // nieuw, nalezen
    'w.klaarleggen': "preparar (dejar listo lo que necesitas)", // nieuw, nalezen
    'w.handtekening': "la firma", // nieuw, nalezen
    's.workorder.1': "Primero leo la orden de trabajo.", // nieuw, nalezen
    's.workorder.2': "¿Está bien esta cantidad?", // nieuw, nalezen
    's.workorder.3': "Preparo el material.", // nieuw, nalezen
    'c.workorder.q': "¿Sabes lo que tienes que hacer?", // nieuw, nalezen
    'c.workorder.a': "Casi. ¿Qué significa esta palabra de la orden de trabajo?", // nieuw, nalezen
    'l.handover': "¿Terminado o todavía no?", // nieuw, nalezen
    'w.opruimen': "recoger, ordenar (guardar las cosas)", // nieuw, nalezen
    'w.nakijken': "revisar (mirar el trabajo otra vez)", // nieuw, nalezen
    'w.afmelden': "avisar de que terminas (decir que el trabajo está hecho e irte)", // nieuw, nalezen
    'w.kapot': "roto", // nieuw, nalezen
    'w.opslot': "cerrado con llave", // nieuw, nalezen
    'w.bijzonderheid': "la puerta", // nieuw, nalezen
    's.handover.1': "Recojo mi sitio.", // nieuw, nalezen
    's.handover.2': "¿Puede revisar mi trabajo?", // nieuw, nalezen
    's.handover.3': "Aviso al encargado de que termino.", // nieuw, nalezen
    'c.handover.q': "¿Está todo terminado?", // nieuw, nalezen
    'c.handover.a': "Casi. La habitación cuatro estaba cerrada con llave.", // nieuw, nalezen
    'u.tech': "En el taller", // nieuw, nalezen
    'l.workshop': "Herramientas del taller", // nieuw, nalezen
    'w.gereedschap': "las herramientas", // nieuw, nalezen
    'w.zagen': "serrar", // nieuw, nalezen
    'w.slijpen': "amolar (pulir o cortar metal con una máquina)", // nieuw, nalezen
    'w.vonk': "la chispa", // nieuw, nalezen
    'w.gehoorbescherming': "la protección auditiva (para los oídos)", // nieuw, nalezen
    'w.lawaai': "el ruido (mucho sonido fuerte)", // nieuw, nalezen
    's.workshop.1': "¿Dónde están las herramientas?", // nieuw, nalezen
    's.workshop.2': "Cuando amolo, llevo protección auditiva.", // nieuw, nalezen
    's.workshop.3': "¡Cuidado con las chispas!", // nieuw, nalezen
    'c.workshop.q': "¿Por qué llevas gafas?", // nieuw, nalezen
    'c.workshop.a': "Al serrar, me pueden entrar trocitos en el ojo.", // nieuw, nalezen
    'l.power': "Primero, corta la corriente", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.stroom': "la corriente, la electricidad", // nieuw, nalezen
    'w.kabel': "el cable", // nieuw, nalezen
    'w.stekker': "el enchufe (la clavija)", // nieuw, nalezen
    'w.onderspanning': "con tensión (tiene corriente)", // nieuw, nalezen
    'w.spanningsloos': "sin tensión, seguro (no tiene corriente)", // nieuw, nalezen
    'w.elektricien': "el electricista", // nieuw, nalezen
    's.power.1': "¿Todavía hay corriente aquí?", // nieuw, nalezen
    's.power.2': "Este cable está roto.", // nieuw, nalezen
    's.power.3': "Espero hasta que esté sin tensión.", // nieuw, nalezen
    'c.power.q': "¿Puedes cambiar esa lámpara?", // nieuw, nalezen
    'c.power.a': "¿Está cortada la corriente? Si no, espero al electricista.", // nieuw, nalezen
    'u.garage': "En el taller mecánico", // nieuw, nalezen
    'l.garage': "Neumáticos, aceite y el elevador", // nieuw, nalezen
    'w.band': "el neumático", // nieuw, nalezen
    'w.olie': "el aceite", // nieuw, nalezen
    'w.accu': "la batería del coche", // nieuw, nalezen
    'w.monteur': "el mecánico", // nieuw, nalezen
    'w.hefbrug': "el elevador (levanta el coche)", // nieuw, nalezen
    'w.lek': "pinchado, que pierde (sale aire o agua)", // nieuw, nalezen
    's.garage.1': "El neumático está pinchado.", // nieuw, nalezen
    's.garage.2': "¿Dónde está el aceite nuevo?", // nieuw, nalezen
    's.garage.3': "El coche está en el elevador.", // nieuw, nalezen
    'c.garage.q': "¿Puedes cambiar los neumáticos de este coche?", // nieuw, nalezen
    'c.garage.a': "Sí. ¿Dónde están los neumáticos de invierno?", // nieuw, nalezen
    'l.carjob': "El cliente decide", // nieuw, nalezen
    'w.proefrit': "la prueba de conducción", // nieuw, nalezen
    'w.rijbewijs': "el carné de conducir, la licencia de conducir", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.akkoord': "de acuerdo, vale (dices que sí)", // nieuw, nalezen
    'w.kosten': "los costes (lo que hay que pagar)", // nieuw, nalezen
    'w.repareren': "reparar, arreglar", // nieuw, nalezen
    'w.onderdeel': "la pieza (de un coche o una máquina)", // nieuw, nalezen
    's.carjob.1': "¿Está el cliente de acuerdo con los costes?", // nieuw, nalezen
    's.carjob.2': "Esta pieza está rota.", // nieuw, nalezen
    's.carjob.3': "¿Puedo hacer una prueba de conducción?", // nieuw, nalezen
    'c.carjob.q': "Los frenos también están mal. ¿Los haces ahora mismo?", // nieuw, nalezen
    'c.carjob.a': "Primero se lo pregunto al jefe. El cliente tiene que estar de acuerdo.", // nieuw, nalezen
    'u.stage': "Hacer prácticas", // nieuw, nalezen
    'l.placement': "Tus prácticas", // nieuw, nalezen
    'w.stage': "las prácticas (aprendes en una empresa)", // nieuw, nalezen
    'w.praktijkopleider': "el tutor de empresa (te guía en la empresa)", // nieuw, nalezen
    'w.stagebegeleider': "el tutor de prácticas del centro (te guía desde la escuela)", // nieuw, nalezen
    'w.pok': "el convenio de prácticas (lo firman tú, la escuela y la empresa)", // nieuw, nalezen
    'w.school': "la escuela", // nieuw, nalezen
    'w.leerbedrijf': "la empresa formadora (una empresa donde los estudiantes pueden aprender)", // nieuw, nalezen
    's.placement.1': "Hago las prácticas en un almacén.", // nieuw, nalezen
    's.placement.2': "¿Quién es mi tutor de empresa?", // nieuw, nalezen
    's.placement.3': "Todavía no he firmado el convenio de prácticas.", // nieuw, nalezen
    'c.placement.q': "¿Cuándo empiezas las prácticas?", // nieuw, nalezen
    'c.placement.a': "El lunes. Primero firmamos el convenio de prácticas.", // nieuw, nalezen
    'l.review': "Comentarios sobre tus prácticas", // nieuw, nalezen
    'w.beoordeling': "la evaluación (lo bien que lo haces)", // nieuw, nalezen
    'w.leerdoel': "el objetivo de aprendizaje (lo que quieres aprender)", // nieuw, nalezen
    'w.voorbeeld': "el ejemplo", // nieuw, nalezen
    'w.portfolio': "el portafolio (una carpeta con tu trabajo y pruebas)", // nieuw, nalezen
    'w.cijfer': "la nota", // nieuw, nalezen
    'w.verslag': "el informe (un texto sobre tu trabajo)", // nieuw, nalezen
    's.review.1': "¿Qué puedo hacer mejor?", // nieuw, nalezen
    's.review.2': "¿Me puede dar un ejemplo?", // nieuw, nalezen
    's.review.3': "Mi evaluación es la semana que viene.", // nieuw, nalezen
    'c.review.q': "Tienes que trabajar más rápido.", // nieuw, nalezen
    'c.review.a': "Vale. ¿Me puede enseñar cómo hacerlo más rápido?", // nieuw, nalezen
    'u.society': "Participar en los Países Bajos", // nieuw, nalezen
    'l.council': "El ayuntamiento y votar", // nieuw, nalezen
    'w.stemmen': "votar", // nieuw, nalezen
    'w.verkiezing': "las elecciones", // nieuw, nalezen
    'w.gemeenteraad': "el concejo municipal (decide sobre tu ciudad)", // nieuw, nalezen
    'w.parlement': "el parlamento (hace las leyes)", // nieuw, nalezen
    'w.stempas': "la tarjeta de voto (la tarjeta que necesitas para votar)", // nieuw, nalezen
    'w.burgemeester': "el alcalde, la alcaldesa", // nieuw, nalezen
    's.council.1': "¿Puedo votar?", // nieuw, nalezen
    's.council.2': "Mi tarjeta de voto llegó por correo.", // nieuw, nalezen
    's.council.3': "El concejo municipal decide sobre mi barrio.", // nieuw, nalezen
    'c.council.q': "¿Vas a votar el miércoles?", // nieuw, nalezen
    'c.council.a': "Sí. Tengo mi tarjeta de voto y mi documento de identidad.", // nieuw, nalezen
    'l.police': "La policía y tus derechos", // nieuw, nalezen
    'w.agent': "el agente de policía", // nieuw, nalezen
    'w.boete': "la multa (dinero que pagas como castigo)", // nieuw, nalezen
    'w.bezwaar': "el recurso (dices por escrito que no estás de acuerdo)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.rechter': "el juez, la jueza", // nieuw, nalezen
    'w.advocaat': "el abogado, la abogada", // nieuw, nalezen
    'w.wet': "la ley", // nieuw, nalezen
    's.police.1': "Me han puesto una multa.", // nieuw, nalezen
    's.police.2': "Quiero presentar un recurso.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.police.3': "Quiero hablar con un abogado.", // nieuw, nalezen
    'c.police.q': "¿Me enseña su documento de identidad?", // nieuw, nalezen
    'c.police.a': "Sí, aquí lo tiene. ¿Qué pasa?", // nieuw, nalezen
    'u.online': "En línea en el trabajo", // nieuw, nalezen
    'l.login': "Iniciar sesión", // nieuw, nalezen
    'w.uitloggen': "cerrar sesión", // nieuw, nalezen
    'w.account': "la cuenta", // nieuw, nalezen
    'w.scherm': "la pantalla", // nieuw, nalezen
    'w.vergrendelen': "bloquear (una pantalla o un teléfono)", // nieuw, nalezen
    'w.gebruikersnaam': "el nombre de usuario", // nieuw, nalezen
    'w.inlogcode': "el código de acceso (un código por SMS o en una app)", // nieuw, nalezen
    's.login.1': "He olvidado mi contraseña.", // nieuw, nalezen
    's.login.2': "Siempre cierro la sesión.", // nieuw, nalezen
    's.login.3': "No le doy mi DigiD a nadie.", // nieuw, nalezen
    'c.login.q': "¿Puedes iniciar sesión?", // nieuw, nalezen
    'c.login.a': "No, mi contraseña no funciona.", // nieuw, nalezen
    'l.phish': "Correos falsos", // nieuw, nalezen
    'w.afzender': "el remitente", // nieuw, nalezen
    'w.klikken': "hacer clic", // nieuw, nalezen
    'w.bijlage': "el archivo adjunto", // nieuw, nalezen
    'w.verdacht': "sospechoso", // nieuw, nalezen
    'w.ictafdeling': "el departamento de informática", // nieuw, nalezen
    'w.wijzigen': "cambiar", // nieuw, nalezen
    's.phish.1': "Este correo es sospechoso.", // nieuw, nalezen
    's.phish.2': "No abro el archivo adjunto.", // nieuw, nalezen
    's.phish.3': "Cambio mi contraseña ahora mismo.", // nieuw, nalezen
    'c.phish.q': "¿Has hecho clic en el enlace?", // nieuw, nalezen
    'c.phish.a': "Sí. Llamo al departamento de informática.", // nieuw, nalezen
    'l.mychoice': "Lo que se me da bien", // nieuw, nalezen
    'w.goedin': "bueno en (algo), que se te da bien", // nieuw, nalezen
    'w.kiezen': "elegir", // nieuw, nalezen
    'w.beroep': "la profesión, el tipo de trabajo", // nieuw, nalezen
    'w.bijbaan': "el trabajo a tiempo parcial (un trabajo pequeño mientras estudias)", // nieuw, nalezen // nagelezen AI ronde 3
    'w.nauwkeurig': "cuidadoso y preciso", // nieuw, nalezen
    'w.meeloopdag': "el día de observación (un día en que acompañas a alguien en su trabajo)", // nieuw, nalezen
    's.mychoice.1': "Sé trabajar bien con las manos.", // nieuw, nalezen
    's.mychoice.2': "Me gusta trabajar con personas.", // nieuw, nalezen
    's.mychoice.3': "¿Puedo acompañarlos un día para ver el trabajo?", // nieuw, nalezen // nagelezen AI 31 okt
    'c.mychoice.q': "¿Qué se te da bien?", // nieuw, nalezen
    'c.mychoice.a': "Se me da bien cuidar de la gente. En casa cuido de mi madre.", // nieuw, nalezen
    'l.nextstep': "Después de Entree", // nieuw, nalezen
    'w.niveau2': "el nivel 2 (el siguiente nivel del mbo)", // nieuw, nalezen
    'w.startkwalificatie': "la cualificación básica (un título mbo de nivel 2 o superior)", // nieuw, nalezen
    'w.bbl': "la bbl (trabajas en una empresa y vas a la escuela más o menos un día a la semana)", // nieuw, nalezen
    'w.doorstromen': "seguir (a un nivel más alto)", // nieuw, nalezen
    'w.aanmelden': "inscribirse (en una escuela o un curso)", // nieuw, nalezen
    'w.opendag': "la jornada de puertas abiertas (puedes visitar una escuela)", // nieuw, nalezen
    's.nextstep.1': "Después de Entree quiero ir al nivel 2.", // nieuw, nalezen
    's.nextstep.2': "Quiero trabajar y estudiar a la vez.", // nieuw, nalezen
    's.nextstep.3': "¿Cuándo es la jornada de puertas abiertas?", // nieuw, nalezen
    'c.nextstep.q': "¿Qué vas a hacer después de Entree?", // nieuw, nalezen
    'c.nextstep.a': "Quiero hacer la bbl. Así trabajo y estudio.", // nieuw, nalezen
    'l.email': "Escribir al trabajo", // nieuw, nalezen
    'w.mail': "el correo electrónico", // nieuw, nalezen
    'w.onderwerp': "el asunto (de un correo)", // nieuw, nalezen
    'w.beste': "estimado, querido (al principio de una carta o un correo)", // nieuw, nalezen
    'w.beleefd': "educado, amable", // nieuw, nalezen
    'w.nalezen': "releer (revisar antes de enviar)", // nieuw, nalezen
    'w.versturen': "enviar", // nieuw, nalezen
    's.email.1': "¿Qué pongo en el asunto?", // nieuw, nalezen
    's.email.2': "Leo mi correo una vez más.", // nieuw, nalezen
    's.email.3': "Envío el correo mañana.", // nieuw, nalezen
    'c.email.q': "¿Has enviado el correo sobre tu día libre?", // nieuw, nalezen
    'c.email.a': "Todavía no. Primero lo vuelvo a leer.", // nieuw, nalezen
    'l.budget': "Tu dinero cada mes", // nieuw, nalezen
    'w.vastelasten': "los gastos fijos (alquiler, seguro, teléfono: cada mes)", // nieuw, nalezen
    'w.sparen': "ahorrar (dinero)", // nieuw, nalezen
    'w.abonnement': "la suscripción (la pagas cada mes)", // nieuw, nalezen
    'w.achterafbetalen': "pagar después (compra ahora, paga después)", // nieuw, nalezen
    'w.bedenktijd': "el plazo de desistimiento (tiempo para cambiar de idea)", // nieuw, nalezen
    'w.garantie': "la garantía (tiene que funcionar, o te lo arreglan)", // nieuw, nalezen
    's.budget.1': "Primero pago los gastos fijos.", // nieuw, nalezen
    's.budget.2': "Ahorro un poco cada mes.", // nieuw, nalezen
    's.budget.3': "Doy de baja esta suscripción.", // nieuw, nalezen
    'c.budget.q': "¡Compra ese teléfono ahora y paga después!", // nieuw, nalezen
    'c.budget.a': "No, gracias. Pagar después también es una deuda.", // nieuw, nalezen
    'l.healthy': "En forma para trabajar", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "dormir", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "el desayuno", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "moverse, estar activo", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "cansado", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "las drogas", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "decaído (triste durante mucho tiempo)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': { m: "Hoy estoy muy cansado.", f: "Hoy estoy muy cansada.", x: "Hoy estoy muy cansado/a." }, // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.placement.b': { m: "En Entree aprendes mucho en una empresa: son tus prácticas (stage o bpv). Antes de empezar, tú, la escuela y la empresa firman un convenio: el POK. En la empresa te ayuda tu tutor de empresa (praktijkopleider). En la escuela te ayuda tu tutor de prácticas (stagebegeleider). ¿Estás enfermo? Llama a la empresa antes de tu hora de entrada, y avisa también a la escuela. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas.", f: "En Entree aprendes mucho en una empresa: son tus prácticas (stage o bpv). Antes de empezar, tú, la escuela y la empresa firman un convenio: el POK. En la empresa te ayuda tu tutor de empresa (praktijkopleider). En la escuela te ayuda tu tutor de prácticas (stagebegeleider). ¿Estás enferma? Llama a la empresa antes de tu hora de entrada, y avisa también a la escuela. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas.", x: "En Entree aprendes mucho en una empresa: son tus prácticas (stage o bpv). Antes de empezar, tú, la escuela y la empresa firman un convenio: el POK. En la empresa te ayuda tu tutor de empresa (praktijkopleider). En la escuela te ayuda tu tutor de prácticas (stagebegeleider). ¿Estás enfermo/a? Llama a la empresa antes de tu hora de entrada, y avisa también a la escuela. Las normas cambian de una escuela a otra: pregunta a tu tutor de prácticas." }, // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.review.o2': { m: "Dices que sí y esperas entenderlo tú solo.", f: "Dices que sí y esperas entenderlo tú sola.", x: "Dices que sí y esperas entenderlo tú solo/a." }, // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.healthy.b': { m: "Trabajas mejor y con más seguridad cuando duermes lo suficiente, también después de un turno de tarde. Desayuna, y bebe agua durante el día. Muévete en la pausa, por ejemplo con un paseo corto. Trabajar bajo los efectos del alcohol o las drogas es peligroso, y la mayoría de las empresas lo prohíben. ¿Te sientes decaído desde hace tiempo, o no puedes dejar de beber o de consumir? Habla con tu médico de cabecera (huisarts). Te puede ayudar, y lo guarda en secreto.", f: "Trabajas mejor y con más seguridad cuando duermes lo suficiente, también después de un turno de tarde. Desayuna, y bebe agua durante el día. Muévete en la pausa, por ejemplo con un paseo corto. Trabajar bajo los efectos del alcohol o las drogas es peligroso, y la mayoría de las empresas lo prohíben. ¿Te sientes decaída desde hace tiempo, o no puedes dejar de beber o de consumir? Habla con tu médico de cabecera (huisarts). Te puede ayudar, y lo guarda en secreto.", x: "Trabajas mejor y con más seguridad cuando duermes lo suficiente, también después de un turno de tarde. Desayuna, y bebe agua durante el día. Muévete en la pausa, por ejemplo con un paseo corto. Trabajar bajo los efectos del alcohol o las drogas es peligroso, y la mayoría de las empresas lo prohíben. ¿Te sientes decaído/a desde hace tiempo, o no puedes dejar de beber o de consumir? Habla con tu médico de cabecera (huisarts). Te puede ayudar, y lo guarda en secreto." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.p': { m: "Me siento decaído desde hace tiempo. ¿Puedo pedir cita?", f: "Me siento decaída desde hace tiempo. ¿Puedo pedir cita?", x: "Me siento decaído/a desde hace tiempo. ¿Puedo pedir cita?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': "Esta noche tienes turno de noche. Un compañero te ofrece una pastilla para no dormirte. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "Dices que no, y duermes unas horas antes del turno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Te tomas media pastilla, eso no es peligroso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Te la tomas, pero no se lo dices a nadie en el trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Las pastillas de un compañero pueden ser drogas. Te pueden hacer daño o hacer que cometas errores en el trabajo. Dormir es la forma segura de estar alerta en el trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.sick': "La enfermedad", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Trabajar con alimentos", // nieuw, nalezen
    'w.mes': "el cuchillo", // nieuw, nalezen
    'w.snijhandschoen': "el guante anticorte (un guante contra los cortes)", // nieuw, nalezen
    'w.vriescel': "la cámara de congelación (una sala muy fría)", // nieuw, nalezen
    'w.sieraden': "las joyas (un anillo, un reloj, unos pendientes)", // nieuw, nalezen
    'w.pleister': "la tirita, la curita (para un corte pequeño)", // nieuw, nalezen
    'w.vlees': "la carne", // nieuw, nalezen
    's.food.1': "Me quito las joyas.", // nieuw, nalezen
    's.food.2': "¿Dónde están los guantes anticorte?", // nieuw, nalezen
    's.food.3': "En la cámara de congelación llevo un abrigo caliente.", // nieuw, nalezen
    'c.food.q': "¿Por qué limpiamos ahora la línea?", // nieuw, nalezen
    'c.food.a': "Después viene un producto sin frutos secos.", // nieuw, nalezen
    'c.food': "Manos limpias, alimentos seguros", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Trabajar con alimentos tiene normas de higiene estrictas: una redecilla para el pelo, ropa de trabajo limpia, manos lavadas y nada de joyas. Estas normas son iguales para todos. No dicen nada sobre ti: mantienen los alimentos seguros para las personas que los comen. Con un cuchillo, lleva siempre tu guante anticorte. En una sala fría o en una cámara de congelación, ponte la ropa de abrigo que te dan, y entra en calor en tu pausa. ¿Te encuentras mal, o tienes una herida en la mano? Avísalo antes de empezar. Entonces puedes recibir una tirita especial, u otro trabajo durante un tiempo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Tengo un pequeño corte en la mano. ¿Me da una tirita?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "En casa te has hecho un pequeño corte en el dedo. Hoy trabajas con carne. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Se lo dices a tu encargado, y pides una tirita.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "No dices nada: solo es un corte pequeño.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Te pones un guante encima, para que nadie lo vea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Una herida pequeña puede llevar gérmenes a los alimentos. Si lo avisas, puedes recibir una tirita especial u otro trabajo durante un tiempo. Avisarlo es normal: nadie te lo echa en cara.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transporte y reparto", // nieuw, nalezen
    'l.parcel': "Repartir paquetes", // nieuw, nalezen
    'w.pakket': "el paquete", // nieuw, nalezen
    'w.bestelbus': "la furgoneta de reparto", // nieuw, nalezen
    'w.bezorgen': "repartir, entregar (llevar al cliente)", // nieuw, nalezen
    'w.inladen': "cargar (meter cosas en la furgoneta)", // nieuw, nalezen
    'w.aanbellen': "llamar al timbre", // nieuw, nalezen
    'w.bewijs': "la prueba (algo que muestra lo que pasó)", // nieuw, nalezen
    's.parcel.1': "Escaneo cada paquete.", // nieuw, nalezen
    's.parcel.2': "El cliente no está en casa.", // nieuw, nalezen
    's.parcel.3': "¿Puede quedarse con un paquete para los vecinos?", // nieuw, nalezen
    'c.parcel.q': "¿Este paquete es para mí?", // nieuw, nalezen
    'c.parcel.a': "Sí. ¿Puede firmar aquí, por favor?", // nieuw, nalezen
    'l.road': "Seguridad y trabajo justo en la carretera", // nieuw, nalezen
    'w.rijden': "conducir", // nieuw, nalezen
    'w.zwaar': "pesado", // nieuw, nalezen
    'w.steekwagen': "la carretilla de mano (un carrito para cajas pesadas)", // nieuw, nalezen
    'w.route': "la ruta (el camino que haces con el vehículo)", // nieuw, nalezen
    'w.loondienst': "por cuenta ajena (trabajas para un jefe y cobras un sueldo)", // nieuw, nalezen
    'w.bepalen': "decidir (decir cómo hay que hacerlo)", // nieuw, nalezen
    's.road.1': "Este paquete pesa demasiado. Voy a buscar la carretilla.", // nieuw, nalezen
    's.road.2': "Está resbaladizo. Conduzco despacio.", // nieuw, nalezen
    's.road.3': "¿Quién decide mi ruta y mis horarios?", // nieuw, nalezen
    'c.road.q': "¿Puedes hacer un reparto más hoy?", // nieuw, nalezen
    'c.road.a': "No, entonces no tengo tiempo para mi pausa.", // nieuw, nalezen
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
    'c.backtowork.q': { m: "¡Bienvenido de nuevo! ¿Te encuentras mejor?", f: "¡Bienvenida de nuevo! ¿Te encuentras mejor?", x: "¡Bienvenido/a de nuevo! ¿Te encuentras mejor?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Sí, va mejor. Me lo tomo con calma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Volver paso a paso", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "¿Ya estás bien? Dile a tu empresa que puedes volver a trabajar (betermelden). Después de una enfermedad larga, muchas veces empiezas paso a paso: primero menos horas, o un trabajo más ligero. El médico de empresa (bedrijfsarts) te aconseja sobre lo que puedes hacer. ¿Llevas mucho tiempo de baja? Entonces haces un plan para tu vuelta junto con tu empresa. Así lo dice la ley (Wet verbetering poortwachter). Di claramente lo que puedes hacer, y lo que todavía no. No tienes que contar a tus compañeros qué enfermedad has tenido. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Esto ya lo puedo hacer. Eso todavía no.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': { m: "Has estado enfermo tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico de empresa dijo: por ahora, solo trabajo ligero. ¿Qué haces?", f: "Has estado enferma tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico de empresa dijo: por ahora, solo trabajo ligero. ¿Qué haces?", x: "Has estado de baja tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico de empresa dijo: por ahora, solo trabajo ligero. ¿Qué haces?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Dices con calma que ahora puedes hacer trabajo ligero, y lo que todavía no puedes hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Levantas las cajas de todos modos: no quieres poner problemas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Te vas a casa sin decir nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Tu encargado quiere que vuelvas, y con buena salud. Si dices claramente lo que puedes hacer, puede organizar el trabajo. Hacer demasiado demasiado pronto puede hacer que vuelvas a enfermar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "Medir", // nieuw, nalezen
    'w.rolmaat': "la cinta métrica, el metro", // nieuw, nalezen
    'w.waterpas': "el nivel (muestra si algo está recto)", // nieuw, nalezen
    'w.meten': "medir", // nieuw, nalezen
    'w.rechtlijn': "recto (no torcido)", // nieuw, nalezen
    'w.plank': "la tabla, el tablón", // nieuw, nalezen
    'w.schroef': "el tornillo", // nieuw, nalezen
    's.measure.1': "¿Cuánto mide de largo esta tabla?", // nieuw, nalezen
    's.measure.2': "La pared no está recta.", // nieuw, nalezen
    's.measure.3': "Lo mido dos veces.", // nieuw, nalezen
    'c.measure.q': "¿Qué ancho tiene que tener?", // nieuw, nalezen
    'c.measure.a': "Noventa centímetros. Lo apunto.", // nieuw, nalezen
    'c.measure': "Mide dos veces, sierra una", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "En una obra, las medidas van muchas veces en milímetros. Así que “novecientos” puede querer decir 90 centímetros. ¿Tienes dudas? Pregunta: “¿Son milímetros o centímetros?” Repite el número, y apúntalo. Mide dos veces antes de serrar o taladrar: una tabla demasiado corta se queda demasiado corta. ¿Te has equivocado? Dilo enseguida. Así el equipo todavía puede arreglarlo, y cuesta menos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "¿Eso es en milímetros o en centímetros?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "Tu compañero te dice una medida en voz alta. No la has oído bien. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Repites el número, y preguntas si es correcto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Sierras la tabla con la medida que crees que has oído.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Esperas a que él venga a mirar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Una medida equivocada cuesta material y tiempo. Repetir el número son dos segundos, y en una obra lo hace todo el mundo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Una obra ordenada", // nieuw, nalezen
    'w.bouwplaats': "la obra", // nieuw, nalezen
    'w.uitvoerder': "el jefe de obra (el que manda en la obra)", // nieuw, nalezen
    'w.keet': "la caseta de obra (para las pausas y las reuniones)", // nieuw, nalezen
    'w.afval': "los residuos, la basura", // nieuw, nalezen
    'w.container': "el contenedor (un cubo muy grande para los residuos)", // nieuw, nalezen
    'w.struikelen': "tropezar (caerte por culpa de algo en el suelo)", // nieuw, nalezen
    's.siteday.1': "Los residuos van al contenedor.", // nieuw, nalezen
    's.siteday.2': "El jefe de obra está en la caseta.", // nieuw, nalezen
    's.siteday.3': "Cuidado, aquí puedes tropezar.", // nieuw, nalezen
    'c.siteday.q': "¿Dónde va esta madera?", // nieuw, nalezen
    'c.siteday.a': "En el contenedor que está en la entrada.", // nieuw, nalezen
    'c.siteday': "Una obra ordenada es una obra segura", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "En una obra, recoger es parte del trabajo, para todos. Las tablas sueltas, los cables y los residuos hacen que la gente tropiece y se caiga. Por eso, recoge tu sitio durante el día, no solo al final. Los residuos se separan: la madera, la piedra y el metal van muchas veces en contenedores distintos. ¿No sabes en cuál? Pregunta. ¿Ves un clavo que sobresale, o un agujero sin tapa? Arréglalo si puedes hacerlo de forma segura, o díselo al jefe de obra (de uitvoerder). Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Yo recojo esto. Así nadie tropieza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Hay tablas con clavos en el camino. No son tuyas. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Las apartas, o se lo dices al jefe de obra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Pasas por encima: no son tus tablas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Esperas: ya las recogerá otra persona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Todos usan los mismos caminos. Quien ve un peligro, hace algo: eso es lo normal en una obra.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Pasar el turno", // nieuw, nalezen
    'w.vroegedienst': "el turno de mañana", // nieuw, nalezen
    'w.latedienst': "el turno de tarde", // nieuw, nalezen
    'w.nachtdienst': "el turno de noche", // nieuw, nalezen
    'w.overdracht': "el relevo (le cuentas al turno siguiente lo que ha pasado)", // nieuw, nalezen
    'w.aflossen': "relevar (llega la siguiente persona, y tú puedes irte)", // nieuw, nalezen
    'w.teamleider': "el jefe de equipo", // nieuw, nalezen
    's.shifts.1': "Esta semana tengo el turno de tarde.", // nieuw, nalezen
    's.shifts.2': "¿Quién me releva?", // nieuw, nalezen
    's.shifts.3': "La máquina dos ha tenido una avería.", // nieuw, nalezen
    'c.shifts.q': "¿Ha pasado algo en tu turno?", // nieuw, nalezen
    'c.shifts.a': "Sí. La línea ha estado parada media hora.", // nieuw, nalezen
    'c.shifts': "Cuéntaselo al turno siguiente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Una fábrica funciona muchas veces día y noche, por turnos. Al final de tu turno, un compañero ocupa tu sitio. No te vayas sin más: espera hasta que tu compañero esté allí. Cuenta en pocas palabras lo que ha pasado: una avería, un producto que salió mal, algo que no está terminado. Muchas empresas tienen también una lista o una pantalla para esto. Un problema que no cuentas vuelve en el turno siguiente, y entonces nadie sabe por qué. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "La máquina ha tenido una avería. Ahora funciona otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Tu turno ha terminado. Tu compañero llega cinco minutos tarde. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Esperas, y se lo dices al jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Te vas a casa: tu turno ha terminado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Paras la máquina y te vas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Una máquina en marcha no puede quedarse sola. Si esperas y avisas, el trabajo sigue de forma segura, y el jefe de equipo puede resolverlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Di lo que ves", // nieuw, nalezen
    'w.duizelig': "mareado", // nieuw, nalezen
    'w.misselijk': "con náuseas (sientes que vas a vomitar)", // nieuw, nalezen
    'w.benauwd': "con falta de aire", // nieuw, nalezen
    'w.koorts': "la fiebre", // nieuw, nalezen
    'w.verward': "confuso (la persona no sabe dónde está)", // nieuw, nalezen
    'w.anders': "distinto (no como siempre)", // nieuw, nalezen
    's.signals.1': "La señora está mareada.", // nieuw, nalezen
    's.signals.2': "El señor no come hoy.", // nieuw, nalezen
    's.signals.3': "¿Puedes venir a mirar?", // nieuw, nalezen
    'c.signals.q': "¿Cómo está el señor Jansen?", // nieuw, nalezen
    'c.signals.a': "Está confuso. Ayer no estaba así.", // nieuw, nalezen
    'c.signals': "Tú ves al cliente todos los días", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Muchas veces eres la persona que más ve a un cliente. Por eso eres quien nota primero que algo es distinto: come menos, tiene más dolor, está confuso, le falta el aire. No tienes que saber qué es. Di lo que ves, y di cuándo lo viste. Díselo a la enfermera el mismo día, y apúntalo si es tu tarea. ¿Parece grave? No esperes: llama a la enfermera enseguida. Mejor una vez de más que una vez de menos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "La señora no come y está mareada. No es lo normal en ella.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Una clienta está callada hoy y no quiere comer. Normalmente habla mucho. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Le dices a la enfermera lo que ves, hoy mismo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Esperas unos días: quizá se le pasa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Le das una pastilla del armario.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Un cambio pequeño puede ser la primera señal de una enfermedad. Tú no decides qué es: eso lo hace la enfermera. Pero ella solo puede hacer algo si tú se lo dices.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Ayudar a alguien a levantarse", // nieuw, nalezen
    'w.tillift': "la grúa (una máquina que levanta a una persona)", // nieuw, nalezen
    'w.rollator': "el andador con ruedas", // nieuw, nalezen
    'w.bed': "la cama", // nieuw, nalezen
    'w.opstaan': "levantarse, ponerse de pie", // nieuw, nalezen
    'w.gaanzitten': "sentarse", // nieuw, nalezen
    'w.voorzichtig': "con cuidado, con suavidad", // nieuw, nalezen
    's.transfer.1': "Le ayudo a levantarse.", // nieuw, nalezen
    's.transfer.2': "¿Quiere sentarse un momento?", // nieuw, nalezen
    's.transfer.3': "Primero voy a buscar la grúa.", // nieuw, nalezen
    'c.transfer.q': "¿Puedes levantar a la señora de la cama?", // nieuw, nalezen
    'c.transfer.a': { m: "Yo solo no. Voy a buscar la grúa.", f: "Yo sola no. Voy a buscar la grúa.", x: "Sin ayuda no. Voy a buscar la grúa." }, // nieuw, nalezen
    'c.transfer': "Primero lo dices, luego ayudas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Antes de tocar a un cliente, di lo que vas a hacer: “Ik help u nu met opstaan.” Así el cliente no se asusta, y puede ayudar. Deja que el cliente haga lo que todavía puede hacer: así se mantiene fuerte. No levantes a una persona sin ayuda. Usa las ayudas que hay, como la grúa, y trabaja como te han enseñado. ¿Todavía no te lo han enseñado? Pregunta primero. Tu espalda tiene que durar toda una vida de trabajo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Ahora le ayudo a levantarse. ¿Empezamos?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Una clienta quiere levantarse de la cama. Todavía no has aprendido a usar la grúa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Se lo pides a un compañero que sabe usar la grúa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "La levantas tú: no pesa mucho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Pruebas la grúa: no puede ser difícil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Levantar mal a una persona puede hacer daño al cliente y a tu espalda. Pedir ayuda a un compañero son unos minutos. Una caída puede ser cosa de meses.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Fregar los platos", // nieuw, nalezen
    'w.afwas': "los platos sucios, fregar los platos", // nieuw, nalezen
    'w.vaatwasser': "el lavavajillas", // nieuw, nalezen
    'w.bord': "el plato", // nieuw, nalezen
    'w.glas': "el vaso, el vidrio", // nieuw, nalezen
    'w.bestek': "los cubiertos (cuchillo, tenedor y cuchara)", // nieuw, nalezen
    'w.afdrogen': "secar (con un paño)", // nieuw, nalezen
    's.dishes.1': "El lavavajillas ha terminado.", // nieuw, nalezen
    's.dishes.2': "Cuidado, se ha roto un vaso.", // nieuw, nalezen
    's.dishes.3': "Ya no quedan cubiertos limpios.", // nieuw, nalezen
    'c.dishes.q': "¿Quedan vasos limpios?", // nieuw, nalezen
    'c.dishes.a': "Sí, ahora mismo los traigo.", // nieuw, nalezen
    'c.dishes': "Vidrio roto: dilo enseguida", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "En una cocina se rompen vasos. Es normal, y nadie se enfada por eso. Pero dilo enseguida, alto y claro: “Glas!” No recojas los trozos con las manos sin guantes: usa un cepillo. ¿Ha caído vidrio cerca de la comida, o en el hielo? Entonces hay que tirar esa comida o ese hielo, todo. Un trocito de vidrio en un plato de comida es muy peligroso para un cliente. El vidrio va en su propio cubo, no en una bolsa que alguien levanta. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "¡Cuidado, vidrio! Lo recojo ahora mismo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Se rompe un vaso encima del hielo para las bebidas. Hay muchísimo trabajo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Lo dices, y tiras todo el hielo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Sacas los trozos que se ven.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "No dices nada: ahora hay demasiado trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Los trocitos de vidrio no se ven en el hielo. El hielo nuevo cuesta poco. Un cliente con vidrio en la bebida puede hacerse mucho daño.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Cuando hay mucho trabajo", // nieuw, nalezen
    'w.heet': "muy caliente, que quema", // nieuw, nalezen
    'w.chef': "el chef (el jefe de la cocina)", // nieuw, nalezen
    'w.terras': "la terraza (mesas fuera)", // nieuw, nalezen
    'w.tafel': "la mesa", // nieuw, nalezen
    'w.dienblad': "la bandeja", // nieuw, nalezen
    'w.wachten': "esperar", // nieuw, nalezen
    's.rush.1': "¡Quema! Paso por detrás de ti.", // nieuw, nalezen
    's.rush.2': "La mesa seis está esperando la comida.", // nieuw, nalezen
    's.rush.3': "Llevo esto a la terraza.", // nieuw, nalezen
    'c.rush.q': "¿Puedes atender la mesa cuatro?", // nieuw, nalezen
    'c.rush.a': "Sí, chef. Ya voy.", // nieuw, nalezen
    'c.rush': "Palabras cortas cuando hay mucho trabajo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Cuando hay mucho trabajo, en una cocina la gente habla con palabras cortas: “Heet!”, “Achter!”, “Tafel zes!” Eso no es mala educación. Es rápido y seguro: todos saben dónde están las ollas calientes y los cuchillos. Grita tú también “Heet!” o “Achter!” cuando pasas por detrás de alguien. ¿Has oído un pedido? Repítelo: “Ja, chef.” Así el chef sabe que lo has oído. ¿Alguien te ha hablado de forma seca con las prisas? Muchas veces eso se acaba después del servicio. ¿Sigue siendo desagradable? Entonces háblalo en un momento tranquilo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "¡Detrás! Llevo una olla caliente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Hay muchísimo trabajo. El chef grita: “Tafel zes, nu!” No dice por favor. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Dices “Ja, chef”, y lo haces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Paras, y le dices que es un maleducado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Lo haces, pero no contestas nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "Con las prisas, hablar corto es normal y no es nada personal. Si lo repites, se ve que lo has oído. Así la cocina sigue rápida y segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Tu ronda", // nieuw, nalezen
    'w.kantoor': "la oficina", // nieuw, nalezen
    'w.verdieping': "la planta, el piso (la primera o la segunda planta de un edificio)", // nieuw, nalezen
    'w.gang': "el pasillo", // nieuw, nalezen
    'w.toiletpapier': "el papel higiénico", // nieuw, nalezen
    'w.zeep': "el jabón", // nieuw, nalezen
    'w.bijvullen': "rellenar, reponer", // nieuw, nalezen
    's.rounds.1': "Empiezo por la segunda planta.", // nieuw, nalezen
    's.rounds.2': "Se ha acabado el papel higiénico.", // nieuw, nalezen
    's.rounds.3': "Relleno el jabón.", // nieuw, nalezen
    'c.rounds.q': "¿Ya has hecho la oficina tres?", // nieuw, nalezen
    'c.rounds.a': "No, todavía hay alguien trabajando.", // nieuw, nalezen
    'c.rounds': "Limpiar donde la gente trabaja", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Muchas veces limpias mientras otras personas todavía están trabajando. Salúdalas, y pregunta: “Mag ik hier even schoonmaken?” La mayoría dice que sí. ¿Alguien está en una reunión o al teléfono? Entonces vuelve más tarde. No muevas los papeles de un escritorio, y no los leas: limpia alrededor. Tienes un tiempo fijo para tu ronda. ¿El tiempo es demasiado corto para hacerlo bien? No te saltes salas sin decir nada. Dile a tu encargado lo que no has podido hacer, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Buenas tardes. ¿Puedo limpiar aquí un momento?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Hoy tu ronda dura más: una sala estaba muy sucia. Dos oficinas están sin hacer. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Le dices a tu encargado cuáles son, y por qué.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Te vas a casa, y esperas que nadie lo vea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Las haces muy rápido, sin los suelos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Un cliente que encuentra una oficina sucia se queja. Un encargado que lo sabe puede explicarlo, o darte más tiempo. Decirlo no es fallar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Colores y paños", // nieuw, nalezen
    'w.doek': "el paño, la bayeta", // nieuw, nalezen
    'w.spons': "la esponja", // nieuw, nalezen
    'w.rood': "rojo", // nieuw, nalezen
    'w.blauw': "azul", // nieuw, nalezen
    'w.geel': "amarillo", // nieuw, nalezen
    'w.groen': "verde", // nieuw, nalezen
    's.colours.1': "El paño rojo es para el inodoro.", // nieuw, nalezen
    's.colours.2': "Coge un paño limpio.", // nieuw, nalezen
    's.colours.3': "¿Qué color uso aquí?", // nieuw, nalezen
    'c.colours.q': "¿Puedo usar este paño para el escritorio?", // nieuw, nalezen
    'c.colours.a': "No, el rojo es solo para el inodoro.", // nieuw, nalezen
    'c.colours': "Cada color tiene su sitio", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Muchas empresas de limpieza trabajan con colores. Cada color de paño, esponja y cubo es para un solo sitio. Muchas veces el rojo es para el inodoro, y el azul es para escritorios y mesas. Así, la suciedad del inodoro no llega a un escritorio ni a una cocina. Los colores pueden ser distintos en cada empresa, así que pregunta el primer día. ¿Un paño está sucio, o se ha caído al suelo? Coge uno limpio. Los paños usados van a la bolsa de la ropa sucia, no otra vez al carro. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "¿Qué color es para el inodoro aquí?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Se te han acabado los paños azules. Todavía tienes que limpiar tres escritorios. Solo tienes paños rojos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Primero vas a buscar paños azules nuevos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Usas un paño rojo: limpio es limpio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Usas otra vez un paño azul para los tres.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Un sistema de colores solo funciona si todos lo siguen siempre. Así nadie tiene que preguntarse dónde ha estado un paño.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Ayudar a un cliente", // nieuw, nalezen
    'w.aanbieding': "la oferta (más barato durante poco tiempo)", // nieuw, nalezen
    'w.korting': "el descuento (pagas menos)", // nieuw, nalezen
    'w.uitverkocht': "agotado", // nieuw, nalezen
    'w.magazijn': "el almacén", // nieuw, nalezen
    'w.tas': "la bolsa", // nieuw, nalezen
    'w.bestellen': "pedir, encargar", // nieuw, nalezen
    's.shophelp.1': "Lo siento, está agotado.", // nieuw, nalezen
    's.shophelp.2': "¿Quiere una bolsa?", // nieuw, nalezen
    's.shophelp.3': "Este café está de oferta.", // nieuw, nalezen
    'c.shophelp.q': "¿Les queda leche?", // nieuw, nalezen
    'c.shophelp.a': "Voy a mirar en el almacén.", // nieuw, nalezen
    'c.shophelp': "“No lo sé” no es el final", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Un cliente pregunta algo y tú no sabes la respuesta. No pasa nada: nadie lo sabe todo. Pero no digas solo “nee” o “weet ik niet”, y no te vayas. Di: “Ik vraag het even voor u”, y busca a un compañero. ¿Un producto está agotado? Di cuándo vuelve a llegar, o enseña algo parecido. Mira al cliente y salúdalo, también cuando tienes mucho trabajo reponiendo estantes. ¿No has entendido la pregunta? Pide al cliente que la repita, despacio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Eso no lo sé. Voy a preguntarlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Una clienta pregunta por un producto. No conoces la palabra. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Dices: “Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Dices “nee”, y sigues trabajando.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Señalas hacia algún sitio, para que se vaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "A un cliente no le importa que lleves poco tiempo o que todavía estés aprendiendo neerlandés. A un cliente sí le importa que nadie le ayude. Buscar a un compañero es dar un buen servicio.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Momentos difíciles", // nieuw, nalezen
    'w.bedrijfsleider': "el gerente de la tienda", // nieuw, nalezen
    'w.beveiliger': "el vigilante de seguridad", // nieuw, nalezen
    'w.dief': "el ladrón", // nieuw, nalezen
    'w.stelen': "robar", // nieuw, nalezen
    'w.schreeuwen': "gritar", // nieuw, nalezen
    'w.geldterug': "la devolución del dinero", // nieuw, nalezen
    's.shoptrouble.1': "Voy a buscar al gerente.", // nieuw, nalezen
    's.shoptrouble.2': "Por favor, no grite.", // nieuw, nalezen
    's.shoptrouble.3': "Creo que alguien está robando algo.", // nieuw, nalezen
    'c.shoptrouble.q': "¡Quiero que me devuelvan el dinero ahora!", // nieuw, nalezen
    'c.shoptrouble.a': "Lo entiendo. Voy a buscar a mi compañero.", // nieuw, nalezen
    'c.shoptrouble': "Un cliente enfadado o un ladrón: primero tú", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "A veces un cliente se enfada, o ves a alguien robando. Tu seguridad va primero, siempre. Con un cliente enfadado: mantén la calma, no le grites tú también, y busca al gerente. No tienes que resolverlo sin ayuda. ¿Ves a un ladrón? No corras detrás de él, no lo sujetes, y no le cierres el paso en la puerta. Fíjate bien en lo que ves, y díselo enseguida al gerente o al vigilante de seguridad. Las cosas se pueden reponer. Tú no. ¿Después te quedaste con miedo? Háblalo con tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Veo que alguien se mete algo en la bolsa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Un hombre se mete una botella debajo del abrigo y va hacia la salida. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Se lo dices al gerente o al vigilante.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Corres detrás de él y lo agarras del brazo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Te pones delante de la puerta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Un ladrón al que paran puede ponerse violento. El gerente y el vigilante saben qué hacer. Ningún producto vale tanto como para que te hagan daño.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Cuidar la planta", // nieuw, nalezen
    'w.plantblad': "la hoja (de una planta)", // nieuw, nalezen
    'w.stengel': "el tallo", // nieuw, nalezen
    'w.bloem': "la flor", // nieuw, nalezen
    'w.knippen': "cortar (con tijeras)", // nieuw, nalezen
    'w.tomaat': "el tomate", // nieuw, nalezen
    'w.rijp': "maduro (listo para recoger)", // nieuw, nalezen
    's.plantcare.1': "Este tomate todavía no está maduro.", // nieuw, nalezen
    's.plantcare.2': "Corto la hoja.", // nieuw, nalezen
    's.plantcare.3': "El tallo está roto.", // nieuw, nalezen
    'c.plantcare.q': "¿Qué tomates recojo?", // nieuw, nalezen
    'c.plantcare.a': "Solo los rojos. Los verdes todavía no están maduros.", // nieuw, nalezen
    'c.plantcare': "Manos limpias, plantas sanas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Las plantas también pueden enfermar. Un virus pasa de planta a planta con las manos, los guantes, los cuchillos y la ropa. En un invernadero, una sola planta enferma puede significar que hay que tirar miles de plantas. Por eso hay normas estrictas en la puerta: lávate las manos, lleva la ropa de trabajo de la empresa, y pasa por el baño desinfectante para los zapatos. En muchos invernaderos no puedes traer tus propios tomates, pimientos o pepinos en la comida. ¿Ves una planta que tiene un aspecto raro? No la toques. Dile a tu encargado en qué fila está. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "Hay una planta enferma en la fila doce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Ves una planta con manchas amarillas raras. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "La dejas, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "La arrancas y te la llevas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Cortas las hojas que tienen manchas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Si tocas una planta enferma, el virus va contigo a las plantas siguientes. Tu encargado sabe cómo quitarla de forma segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Trabajar al aire libre", // nieuw, nalezen
    'w.land': "el campo (donde crecen plantas al aire libre)", // nieuw, nalezen
    'w.regen': "la lluvia", // nieuw, nalezen
    'w.zon': "el sol", // nieuw, nalezen
    'w.laarzen': "las botas", // nieuw, nalezen
    'w.regenpak': "el traje de lluvia (una chaqueta y un pantalón contra la lluvia)", // nieuw, nalezen
    'w.onweer': "la tormenta (con truenos y rayos)", // nieuw, nalezen
    's.outdoors.1': "Llueve. Me pongo el traje de lluvia.", // nieuw, nalezen
    's.outdoors.2': "Tengo las botas mojadas.", // nieuw, nalezen
    's.outdoors.3': "Hoy el sol pega fuerte.", // nieuw, nalezen
    'c.outdoors.q': "Viene una tormenta. ¿Qué hacemos?", // nieuw, nalezen
    'c.outdoors.a': "Paramos y vamos dentro.", // nieuw, nalezen
    'c.outdoors': "Sol, lluvia y tormenta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Al aire libre trabajas con todo tipo de tiempo. Con sol: cúbrete la cabeza y la piel, usa crema solar, y bebe agua a menudo. Con lluvia: lleva tu traje de lluvia y tus botas, y ponte ropa seca en la pausa. La humedad y el frío te enferman y te hacen ir más despacio. ¿Hay tormenta? Entonces para y ve dentro, o métete en un coche o en una furgoneta. No debajo de un árbol, ni en campo abierto. ¿Necesitas ropa de lluvia o botas para el trabajo? Pregunta por ellas a tu empresa antes de comprarlas tú.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Va a haber tormenta. ¿Vamos dentro?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Estás en el campo. Oyes truenos cerca. Tu fila está casi terminada. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Paras, y vas dentro o a la furgoneta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Primero terminas rápido la fila.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Esperas debajo del árbol grande.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "El rayo cae en el punto más alto, y en un campo llano ese punto eres tú. La fila puede esperar un cuarto de hora.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "El plano y la medida", // nieuw, nalezen
    'w.tekening': "el plano, el dibujo (muestra cómo tiene que ser la pieza)", // nieuw, nalezen
    'w.maat': "la medida", // nieuw, nalezen
    'w.millimeter': "el milímetro", // nieuw, nalezen
    'w.schuifmaat': "el calibre, el pie de rey (mide con mucha precisión)", // nieuw, nalezen
    'w.passen': "encajar, caber", // nieuw, nalezen
    'w.bout': "el perno, el tornillo grueso", // nieuw, nalezen
    's.drawing.1': "¿Cuál es la medida en el plano?", // nieuw, nalezen
    's.drawing.2': "Esta pieza no encaja.", // nieuw, nalezen
    's.drawing.3': "Es dos milímetros demasiado grande.", // nieuw, nalezen
    'c.drawing.q': "¿Encaja el perno?", // nieuw, nalezen
    'c.drawing.a': "No. Lo mido otra vez.", // nieuw, nalezen
    'c.drawing': "El plano manda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "En un taller haces lo que dice el plano, no lo que parece más o menos bien. Las medidas van en milímetros, y un milímetro puede ser demasiado. ¿Una pieza no encaja? No uses la fuerza, y no hagas el agujero “solo un poquito” más grande. Mide otra vez, y mira el plano. ¿No puedes leer el plano, o falta una medida? Pregunta antes de empezar. Una pregunta cuesta un minuto. Una pieza mal hecha cuesta material y horas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "No puedo leer esta medida. ¿Puedes mirarla?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Una pieza no encaja: es un milímetro demasiado grande. Con un martillo entraría. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Mides otra vez, y preguntas qué hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "La metes a golpes con el martillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Le quitas un poco con la amoladora, y no dices nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Una pieza que entra a la fuerza puede romperse más tarde, cuando ya la tiene el cliente. Si lo avisas, se puede encontrar la causa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Soldar y trabajar con calor", // nieuw, nalezen
    'w.lassen': "soldar (unir metal con mucho calor)", // nieuw, nalezen
    'w.laskap': "la careta de soldar", // nieuw, nalezen
    'w.rook': "el humo", // nieuw, nalezen
    'w.afzuiging': "la extracción (se lleva el humo)", // nieuw, nalezen
    'w.afkoelen': "enfriarse", // nieuw, nalezen
    'w.brandwond': "la quemadura (una herida por el calor)", // nieuw, nalezen
    's.weld.1': "Me pongo la careta de soldar.", // nieuw, nalezen
    's.weld.2': "Enciende la extracción.", // nieuw, nalezen
    's.weld.3': "Cuidado, el metal todavía quema.", // nieuw, nalezen
    'c.weld.q': "¿Ya puedo coger esto?", // nieuw, nalezen
    'c.weld.a': "No, espera. Primero tiene que enfriarse.", // nieuw, nalezen
    'c.weld': "El metal caliente parece frío", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Al soldar sale una luz muy fuerte. No la mires sin careta de soldar, tampoco desde lejos: tus ojos se pueden quemar, y solo lo notas horas después. ¿Un compañero está soldando cerca de ti? Mira hacia otro lado, o ponte detrás de la pantalla. El metal recién soldado o amolado parece normal, pero quema mucho. No lo cojas con las manos sin guantes. El humo de soldar es malo para tus pulmones: enciende la extracción. ¿Una quemadura? Enfríala enseguida con agua, por lo menos diez minutos, y avísalo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "¿Esto ya se ha enfriado?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Un compañero está soldando a tu lado. No llevas careta de soldar. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Miras hacia otro lado, y te pones detrás de la pantalla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Miras un momento: así aprendes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Cierras los ojos a medias.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "La luz de soldar te quema los ojos, también de lado y desde lejos. El dolor solo lo notas más tarde, muchas veces por la noche.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Partes del coche", // nieuw, nalezen
    'w.motor': "el motor", // nieuw, nalezen
    'w.motorkap': "el capó (la tapa que cubre el motor)", // nieuw, nalezen
    'w.rem': "el freno", // nieuw, nalezen
    'w.lamp': "la luz, el faro", // nieuw, nalezen
    'w.ruitenwisser': "el limpiaparabrisas", // nieuw, nalezen
    'w.stoel': "el asiento, la silla", // nieuw, nalezen
    's.carparts.1': "Abre el capó.", // nieuw, nalezen
    's.carparts.2': "La luz delantera izquierda está rota.", // nieuw, nalezen
    's.carparts.3': "Los frenos hacen ruido.", // nieuw, nalezen
    'c.carparts.q': "¿Qué oyes?", // nieuw, nalezen
    'c.carparts.a': "El motor hace un ruido raro.", // nieuw, nalezen
    'c.carparts': "El coche es del cliente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Un coche en el taller no es tuyo: es del cliente. Pon una funda en el asiento y en el volante antes de subir, y dentro trabaja con las manos limpias. Deja el asiento, los espejos y la radio como estaban. ¿Has tenido que mover el asiento? Vuelve a ponerlo en su sitio. No toques las cosas personales que hay en el coche. ¿Has hecho un arañazo o una mancha? Díselo enseguida a tu encargado. Un cliente que lo descubre en casa no vuelve.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "He hecho un arañazo. Lo siento.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Haces un arañazo pequeño en la puerta del coche de un cliente. Nadie lo ha visto. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Se lo dices enseguida a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "No dices nada: es muy pequeño.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Lo frotas con un paño, y esperas que no se note.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Todo el mundo se equivoca alguna vez. Un taller puede arreglar un arañazo, o decírselo al cliente con sinceridad. Un arañazo escondido le cuesta al taller su buen nombre.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Gasolina, gas y corriente", // nieuw, nalezen
    'w.krik': "el gato (levanta un lado del coche)", // nieuw, nalezen
    'w.benzine': "la gasolina", // nieuw, nalezen
    'w.elektrischeauto': "el coche eléctrico", // nieuw, nalezen
    'w.oranje': "naranja", // nieuw, nalezen
    'w.morsen': "derramar", // nieuw, nalezen
    'w.lap': "el trapo (un paño para el trabajo sucio)", // nieuw, nalezen
    's.carsafe.1': "Huelo a gasolina.", // nieuw, nalezen
    's.carsafe.2': "Se ha derramado aceite. Voy a buscar un trapo.", // nieuw, nalezen
    's.carsafe.3': "No toco los cables naranjas.", // nieuw, nalezen
    'c.carsafe.q': "¿Puedo trabajar en este coche?", // nieuw, nalezen
    'c.carsafe.a': "Todavía no. Es un coche eléctrico.", // nieuw, nalezen
    'c.carsafe': "Cables naranjas y motores en marcha", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Un coche eléctrico o híbrido tiene una batería de alta tensión. Los cables de esa batería son naranjas. No los toques ni los sueltes: primero un mecánico con una formación especial tiene que dejar el coche seguro. ¿Hay un cartel o un cono junto al coche? Entonces no te acerques. Un motor en marcha en un sitio cerrado produce un gas que no puedes oler ni ver, y puede matar. Por eso: pon la manguera de extracción en el tubo de escape, o abre las puertas. ¿Hueles a gasolina? Nada de chispas y nada de fumar. Díselo enseguida a tu encargado. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "¿Ya han dejado seguro este coche?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Tienes que cambiar una rueda de un coche eléctrico. Debajo del coche ves un cable naranja suelto. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "No tocas nada, y vas a buscar al mecánico formado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Empujas el cable a su sitio con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Lo empujas a su sitio con un paño seco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "La batería de un coche eléctrico tiene corriente suficiente para matar, también con el coche apagado. Solo alguien con la formación puede tocar estas piezas.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Revisar la furgoneta", // nieuw, nalezen
    'w.schade': "el daño", // nieuw, nalezen
    'w.deuk': "la abolladura", // nieuw, nalezen
    'w.spiegel': "el espejo", // nieuw, nalezen
    'w.tanken': "repostar (echar combustible a la furgoneta)", // nieuw, nalezen
    'w.opladen': "cargar (una furgoneta eléctrica, un móvil)", // nieuw, nalezen
    'w.parkeren': "aparcar", // nieuw, nalezen
    's.vancheck.1': "Hay una abolladura en la puerta.", // nieuw, nalezen
    's.vancheck.2': "Este daño ya estaba.", // nieuw, nalezen
    's.vancheck.3': "Primero todavía tengo que repostar.", // nieuw, nalezen
    'c.vancheck.q': "¿Está todo bien con la furgoneta de reparto?", // nieuw, nalezen
    'c.vancheck.a': "No, el espejo está roto.", // nieuw, nalezen
    'c.vancheck': "Mira antes de conducir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Da una vuelta a la furgoneta antes de tu primer reparto. ¿Ves una abolladura, un arañazo o un espejo roto? Haz una foto, y avísalo antes de salir. Así todos saben que el daño ya estaba. ¿Ha pasado algo durante tu reparto? Avísalo el mismo día, también cuando es pequeño. Esconder un daño trae problemas más grandes después. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "La furgoneta de reparto tiene un daño. Aquí tiene una foto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "Por la mañana ves una abolladura nueva en la furgoneta. No la has hecho tú. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Haces una foto, y lo avisas antes de conducir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "No dices nada: la abolladura no es tuya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Esperas a ver si alguien pregunta por ella.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Si lo avisas antes de conducir, nadie puede pensar que lo has hecho tú. Una foto con la hora está clara para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Retrasos en la carretera", // nieuw, nalezen
    'w.file': "el atasco", // nieuw, nalezen
    'w.vertraging': "el retraso (llegas más tarde de lo previsto)", // nieuw, nalezen
    'w.omleiding': "el desvío (otro camino, porque la carretera está cortada)", // nieuw, nalezen
    'w.navigatie': "el navegador (la app que muestra el camino)", // nieuw, nalezen
    'w.planner': "el planificador (la persona que hace las rutas)", // nieuw, nalezen
    'w.retour': "la devolución (un paquete que vuelve)", // nieuw, nalezen
    's.delay.1': "Estoy en un atasco.", // nieuw, nalezen
    's.delay.2': "Tengo media hora de retraso.", // nieuw, nalezen
    's.delay.3': "Este paquete vuelve.", // nieuw, nalezen
    'c.delay.q': "¿Dónde estás ahora?", // nieuw, nalezen
    'c.delay.a': "En el desvío. Llego diez minutos más tarde.", // nieuw, nalezen
    'c.delay': "¿Llegas tarde? Dilo a tiempo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Un atasco o una carretera cortada no es culpa tuya. Pero díselo al planificador en cuanto sepas que vas a llegar tarde. Así el planificador puede avisar a los clientes, o cambiar la ruta. Primero para en un sitio seguro: no llames con el móvil en la mano mientras conduces. Y no conduzcas más rápido para recuperar el tiempo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Estoy en un atasco. Llego media hora más tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Una carretera está cortada. El desvío te cuesta treinta minutos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Se lo dices al planificador en cuanto puedes parar de forma segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Conduces más rápido para recuperar el tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "No dices nada: quizá nadie lo nota.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Si el planificador lo sabe pronto, los clientes se enteran y nadie espera para nada. Conducir más rápido es peligroso, y casi no se gana tiempo.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Instrucciones", // nieuw, nalezen
    'l.putdown': "Ponlo ahí", // nieuw, nalezen
    'w.zetten': "poner (algo que queda de pie: una caja, un cubo)", // nieuw, nalezen
    'w.leggen': "poner, colocar (algo que queda tumbado, plano)", // nieuw, nalezen
    'w.brengen': "llevar, traer (a un lugar o a una persona)", // nieuw, nalezen
    'w.geven': "dar", // nieuw, nalezen
    'w.vasthouden': "sujetar, sostener", // nieuw, nalezen
    'w.loslaten': "soltar", // nieuw, nalezen
    's.putdown.1': "Ponlo ahí.", // nieuw, nalezen
    's.putdown.2': "Lleva esto al comedor.", // nieuw, nalezen
    's.putdown.3': "Sujeta esto un momento.", // nieuw, nalezen
    'c.putdown.q': "¿Puedes sujetar esto un momento?", // nieuw, nalezen
    'c.putdown.a': "Sí. ¿Dónde lo tengo que poner?", // nieuw, nalezen
    'c.putdown': "Di que lo tienes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "¿Llevas algo con un compañero, o un compañero te pasa algo pesado? Di “Ik heb hem” cuando lo tengas bien sujeto. Así tu compañero sabe que puede soltar sin peligro. ¿Quieres soltar tú? Pregunta primero: “Heb je hem?” Y espera la respuesta. Esto es normal en cualquier lugar de trabajo. Así las cosas no caen sobre pies y manos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Lo tengo. Ya puedes soltar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Un compañero te pasa una caja pesada. Todavía no la tienes bien sujeta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Dices “wacht”, y primero la sujetas mejor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "No dices nada: él ya lo verá.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "La agarras rápido, para que él no espere.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Tu compañero suelta cuando cree que ya la tienes. Una sola palabra te da tiempo para sujetarla bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Encendido y apagado, abierto y cerrado", // nieuw, nalezen
    'w.aanzetten': "encender", // nieuw, nalezen
    'w.opendoen': "abrir", // nieuw, nalezen
    'w.dichtdoen': "cerrar", // nieuw, nalezen
    'w.drukken': "pulsar, apretar (un botón)", // nieuw, nalezen
    'w.draaien': "girar", // nieuw, nalezen
    'w.stoppen': "parar", // nieuw, nalezen
    's.onoff.1': "Cierra la puerta.", // nieuw, nalezen
    's.onoff.2': "Pulsa el botón.", // nieuw, nalezen
    's.onoff.3': "¡Para! Apágalo.", // nieuw, nalezen
    'c.onoff.q': "¿Está cerrada la puerta?", // nieuw, nalezen
    'c.onoff.a': "No. La cierro ahora.", // nieuw, nalezen
    'c.onoff': "Stop significa parar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "¿Alguien grita “Stop!”? Para enseguida, también cuando no sabes por qué. Pregunta después. Aquí una palabra corta y fuerte no es enfado: así los compañeros se protegen unos a otros. ¿Ves tú algo peligroso? Grita también “Stop!”, también a alguien que lleva años trabajando aquí. A nadie le parece raro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "¡Para! Espera un momento.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Enciendes una máquina. Un compañero grita “Stop!”. No ves ningún problema. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Paras enseguida, y preguntas por qué después.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Sigues: no ves ningún problema.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Primero preguntas por qué tienes que parar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Tu compañero quizá ve algo que tú no ves. Primero parar, luego hablar: así todos están seguros.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Empujar, tirar, llenar", // nieuw, nalezen
    'w.duwen': "empujar", // nieuw, nalezen
    'w.trekken': "tirar (hacia ti), jalar", // nieuw, nalezen
    'w.vullen': "llenar", // nieuw, nalezen
    'w.leegmaken': "vaciar", // nieuw, nalezen
    'w.schoonmaken': "limpiar", // nieuw, nalezen
    'w.vol': "lleno", // nieuw, nalezen
    's.fillempty.1': "No empujes: tira hacia ti.", // nieuw, nalezen
    's.fillempty.2': "Este está lleno. Vacíalo.", // nieuw, nalezen
    's.fillempty.3': "Limpia esto, por favor.", // nieuw, nalezen
    'c.fillempty.q': "¿Ya está lleno?", // nieuw, nalezen
    'c.fillempty.a': "Sí. Lo vacío ahora.", // nieuw, nalezen
    'c.fillempty': "¿Has terminado? Dilo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "¿Has terminado una tarea? Dilo: “Ik ben klaar.” Y pregunta qué puedes hacer después. Esperar en silencio hasta que alguien te vea puede parecer que no quieres trabajar, también cuando no es verdad. Los compañeros que piden la siguiente tarea reciben muchas veces un trabajo más interesante al cabo de un tiempo. ¿Quieres aprender algo nuevo? Pregúntalo también: “Mag ik dat ook leren?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "He terminado. ¿Qué más puedo hacer?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "Has terminado tu tarea. Tu encargado está ocupado con otra cosa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Dices que has terminado, y preguntas qué viene después.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Esperas hasta que tu encargado te vea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Haces una pausa: tu trabajo está terminado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Un encargado no puede verlo todo. Cuando dices que has terminado, el trabajo sigue, y demuestras que quieres hacer más.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Primero esto, luego eso", // nieuw, nalezen
    'w.nu': "ahora", // nieuw, nalezen
    'w.dan': "luego, después", // nieuw, nalezen
    'w.altijd': "siempre", // nieuw, nalezen
    'w.genoeg': "suficiente, bastante", // nieuw, nalezen
    'w.meer': "más", // nieuw, nalezen
    'w.alles': "todo", // nieuw, nalezen
    's.order.1': "Primero esto, luego eso.", // nieuw, nalezen
    's.order.2': "Eso es suficiente.", // nieuw, nalezen
    's.order.3': "Haz esto siempre así.", // nieuw, nalezen
    'c.order.q': "¿Puedes hacer esto ahora?", // nieuw, nalezen
    'c.order.a': "Sí. Primero esto, ¿y luego?", // nieuw, nalezen
    'c.order': "¿Muchas tareas a la vez? Pregunta cuál va primero", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "A veces te dan tres tareas en una sola frase. Eso es difícil de recordar, también para quien habla bien neerlandés. Pregunta cuál va primero: “Wat moet ik eerst doen?” También puedes apuntar las tareas, o contarlas con los dedos y repetirlas. ¿Se te ha olvidado una? Vuelve y pregunta. Eso es mejor que adivinar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "Eso es mucho. ¿Qué tengo que hacer primero?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Tu encargado te da tres tareas, muy rápido. Solo recuerdas la primera. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Pides enseguida que te repitan las tareas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Haces la primera, y confías en recordar el resto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "No haces nada: no sabes las tres.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Preguntar enseguida cuesta diez segundos. Más tarde tu encargado quizá ya no está, y entonces esperas o adivinas.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Azulejos, yeso y pintura", // nieuw, nalezen
    'l.tiletools': "Las herramientas del alicatador", // nieuw, nalezen
    'w.lijmkam': "la llana dentada (extiende el cemento cola en surcos)", // nieuw, nalezen
    'w.troffel': "la paleta, la cuchara de albañil", // nieuw, nalezen
    'w.tegelsnijder': "la cortadora de azulejos", // nieuw, nalezen
    'w.nijptang': "las tenazas (para quitar trocitos de un azulejo)", // nieuw, nalezen
    'w.mixer': "la batidora (mezcla el cemento cola o el yeso en un cubo)", // nieuw, nalezen
    'w.duimstok': "el metro plegable", // nieuw, nalezen
    's.tiletools.1': "Pásame la llana dentada un momento.", // nieuw, nalezen
    's.tiletools.2': "Corto el azulejo con la cortadora de azulejos.", // nieuw, nalezen
    's.tiletools.3': "Mide primero con el metro plegable.", // nieuw, nalezen
    'c.tiletools.q': "¿Dónde está la batidora?", // nieuw, nalezen
    'c.tiletools.a': "Junto al cubo, al lado de la puerta.", // nieuw, nalezen
    'c.tiletools': "Limpia tus herramientas antes de que se endurezca el cemento cola", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "El cemento cola y el yeso se endurecen rápido, también en tus herramientas. Así que limpia enseguida la llana dentada, la paleta y la batidora en un cubo de agua, también antes de tu pausa. El cemento cola duro no se quita, y una llana dentada con cemento cola duro hace malos surcos. No tires el agua sucia en un fregadero ni en un desagüe: se atasca. Pregunta dónde se puede echar el agua. La batidora: sujétala con las dos manos, y ponla en marcha despacio. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Estoy limpiando un momento la llana dentada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "Es la hora de tu pausa. Tu llana dentada está llena de cemento cola fresco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "La limpias en agua, y luego haces tu pausa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "La dejas así: la limpias después del trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "La metes en el cubo de cemento cola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "El cemento cola también se endurece durante tu pausa. Una llana dentada limpia hace buenos surcos, y los azulejos se pegan bien. Con cemento cola duro, limpiarla es mucho trabajo, o necesitas una herramienta nueva.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Azulejos, cemento cola y la línea central", // nieuw, nalezen
    'w.tegel': "el azulejo, la baldosa", // nieuw, nalezen
    'w.tegellijm': "el cemento cola (el pegamento para azulejos)", // nieuw, nalezen
    'w.tegelkruisje': "la cruceta, el separador (una pequeña cruz entre los azulejos)", // nieuw, nalezen
    'w.hartlijn': "la línea central (desde ella empiezas a colocar los azulejos)", // nieuw, nalezen
    'w.tegelplaat': "el tablero de práctica (un tablero para practicar la colocación de azulejos)", // nieuw, nalezen
    'w.potlood': "el lápiz", // nieuw, nalezen
    's.tiling.1': "El cemento cola todavía está húmedo.", // nieuw, nalezen
    's.tiling.2': "Pon una cruceta entre los azulejos.", // nieuw, nalezen
    's.tiling.3': "Primero traza la línea central con el lápiz.", // nieuw, nalezen
    'c.tiling.q': "¿Por dónde empiezo con los azulejos?", // nieuw, nalezen
    'c.tiling.a': "En el medio, en la línea central.", // nieuw, nalezen
    'c.tiling': "Empieza en la línea central, con poco cemento cola", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Un alicatador no empieza en una esquina. Primero trazas la línea central, con un lápiz y el nivel, y empiezas allí. Así los azulejos cortados de los dos extremos tienen el mismo tamaño. Extiende solo el cemento cola que puedas cubrir con azulejos en poco tiempo. Al cemento cola que espera demasiado se le forma una piel seca, y entonces los azulejos no se pegan bien. Pon una cruceta en cada cruce, para que todas las juntas sean iguales. Comprueba a menudo con el nivel: un azulejo torcido es fácil de arreglar ahora, y difícil de arreglar mañana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "No extiendo demasiado cemento cola a la vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Después de una llamada larga, el cemento cola de la pared tiene una piel seca. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Lo raspas, y extiendes cemento cola nuevo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Aprietas los azulejos encima de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Lo mojas con una esponja, y sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "El cemento cola con una piel seca no sujeta bien un azulejo. Más tarde el azulejo se puede soltar, y entonces hay que hacer el trabajo otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Enlucir paredes", // nieuw, nalezen
    'w.stucspaan': "la llana de acero (una llana plana para alisar el yeso)", // nieuw, nalezen
    'w.oplegspaan': "el esparavel (una tabla plana en la que sostienes el yeso)", // nieuw, nalezen
    'w.spackmes': "la espátula (un cuchillo ancho y plano)", // nieuw, nalezen
    'w.rei': "la regla (una barra larga y recta para nivelar el yeso)", // nieuw, nalezen
    'w.sponsspaan': "la llana de esponja, el fratás de esponja", // nieuw, nalezen
    'w.hoekprofiel': "el guardavivos, el esquinero (una tira de metal para una esquina recta)", // nieuw, nalezen
    's.plaster.1': "Primero pon el guardavivos en la esquina.", // nieuw, nalezen
    's.plaster.2': "Alisa la pared con la llana de acero.", // nieuw, nalezen
    's.plaster.3': "Pasa la regla por la pared.", // nieuw, nalezen
    'c.plaster.q': "¿Ya está seca la pared?", // nieuw, nalezen
    'c.plaster.a': "No, espera un día más.", // nieuw, nalezen
    'c.plaster': "El yeso necesita tiempo para secarse", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "El yeso nuevo sigue húmedo durante mucho tiempo. Una pared húmeda es más oscura que una seca. El pintor solo puede empezar cuando la pared está seca por todas partes, y eso puede tardar días o semanas. No la seques más rápido con un calefactor: entonces el yeso se puede agrietar. ¿Alguien quiere pintar demasiado pronto? Di que la pared todavía no está seca. Y antes de empezar, tapa el suelo, las ventanas y los enchufes: el yeso es difícil de quitar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "La pared todavía está húmeda. Todavía no se puede pintar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "El pintor quiere empezar mañana. El yeso nuevo todavía tiene manchas oscuras. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Le dices al pintor: la pared todavía no está seca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Esta noche le pones un calefactor delante.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "No dices nada: el pintor ya lo verá.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Las manchas oscuras quieren decir que el yeso todavía está húmedo. La pintura en una pared húmeda se puede despegar, y un calefactor puede hacer grietas. Esperar cuesta menos que hacerlo otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Ladrillos, madera y fijaciones", // nieuw, nalezen
    'u.machines': "Máquinas y herramientas", // nieuw, nalezen
    'l.shapes': "Formas", // nieuw, nalezen
    'w.vierkant': "el cuadrado", // nieuw, nalezen
    'w.rechthoek': "el rectángulo", // nieuw, nalezen
    'w.driehoek': "el triángulo", // nieuw, nalezen
    'w.cirkel': "el círculo", // nieuw, nalezen
    'w.kubus': "el cubo", // nieuw, nalezen
    'w.balk': "el prisma rectangular (una forma de caja alargada)", // nieuw, nalezen
    's.shapes.1': "El azulejo es un cuadrado.", // nieuw, nalezen
    's.shapes.2': "Esta habitación es un rectángulo.", // nieuw, nalezen
    's.shapes.3': "Un ladrillo tiene forma de prisma rectangular.", // nieuw, nalezen
    'c.shapes.q': "¿Es un cuadrado?", // nieuw, nalezen
    'c.shapes.a': "No, un rectángulo. Es más largo que ancho.", // nieuw, nalezen
    'c.shapes': "Comprueba un rectángulo con dos líneas en diagonal", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Una habitación, un suelo o un marco muchas veces es un rectángulo. Pero ¿las esquinas están de verdad rectas? Hay una forma fácil de comprobarlo. Mide de una esquina a la esquina de enfrente. Luego mide entre las otras dos esquinas. ¿Las dos medidas son iguales? Entonces las esquinas están bien. ¿No son iguales? Entonces la forma está un poco torcida, y los azulejos o el suelo no van a encajar bien. Díselo a tu encargado antes de empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Estas dos medidas no son iguales.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Mides un suelo de esquina a esquina, en las dos direcciones. Una medida es más larga. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Se lo dices a tu encargado antes de empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Empiezas en una esquina, ya saldrá bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Vuelves a medir solo un lado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Dos medidas distintas quieren decir que las esquinas no están rectas. Entonces los azulejos o las tablas no encajan. Es mejor saberlo antes de empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Ángulos y formas redondas", // nieuw, nalezen
    'w.hoek': "el ángulo", // nieuw, nalezen
    'w.graad': "el grado (°)", // nieuw, nalezen
    'w.geodriehoek': "la escuadra con transportador", // nieuw, nalezen
    'w.boog': "el arco, la curva", // nieuw, nalezen
    'w.cilinder': "el cilindro", // nieuw, nalezen
    'w.parallellogram': "el paralelogramo", // nieuw, nalezen
    's.angles.1': "Este ángulo es de noventa grados.", // nieuw, nalezen
    's.angles.2': "Mide el ángulo con la escuadra con transportador.", // nieuw, nalezen
    's.angles.3': "El tubo tiene forma de cilindro.", // nieuw, nalezen
    'c.angles.q': "¿Cuántos grados tiene este ángulo?", // nieuw, nalezen
    'c.angles.a': "Cuarenta y cinco. La mitad de un ángulo recto.", // nieuw, nalezen
    'c.angles': "Comprueba una esquina grande con 3, 4 y 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "En una obra, muchas veces compruebas un ángulo recto: una pared sobre un suelo, la esquina de una habitación. Una esquina pequeña la compruebas con una escuadra o con una escuadra con transportador. Para una esquina grande hay un truco antiguo. Mide 3 metros por un lado y 4 metros por el otro lado, y haz una marca en los dos. ¿Hay exactamente 5 metros de marca a marca? Entonces el ángulo es de 90 grados. Más pequeño también funciona: 30, 40 y 50 centímetros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Este ángulo no está recto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Tienes que comprobar una esquina grande de una pared nueva. Tu escuadra es demasiado pequeña. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Mides 3, 4 y 5 metros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "La miras desde lejos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Usas la escuadra pequeña de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Con 3, 4 y 5 puedes comprobar una esquina grande con exactitud, solo con una cinta métrica. A ojo, una esquina puede parecer bien y estar mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Longitud, superficie y volumen", // nieuw, nalezen
    'w.lengte': "la longitud, el largo", // nieuw, nalezen
    'w.breedte': "la anchura, el ancho", // nieuw, nalezen
    'w.hoogte': "la altura, el alto", // nieuw, nalezen
    'w.oppervlakte': "la superficie, el área (el largo por el ancho, en metros cuadrados)", // nieuw, nalezen
    'w.inhoud': "el volumen (el largo por el ancho por el alto)", // nieuw, nalezen
    'w.centimeter': "el centímetro", // nieuw, nalezen
    's.size.1': "La superficie es el largo por el ancho.", // nieuw, nalezen
    's.size.2': "El volumen es el largo por el ancho por el alto.", // nieuw, nalezen
    's.size.3': "Diez milímetros son un centímetro.", // nieuw, nalezen
    'c.size.q': "¿Cuántos metros cuadrados tiene el suelo?", // nieuw, nalezen
    'c.size.a': "Cuatro por cinco metros, así que veinte metros cuadrados.", // nieuw, nalezen
    'c.size': "Calcula lo que necesitas, y añade un poco", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "¿Cuántos azulejos, cuánta pintura, cuánta arena? Lo calculas con la superficie o el volumen. Superficie: el largo por el ancho, en metros cuadrados. Volumen: el largo por el ancho por el alto, en metros cúbicos. Mide todo en la misma unidad: todo en metros, o todo en centímetros. Apunta las medidas, no las guardes en la cabeza. Luego añade un poco más, para los trozos cortados y para los errores. ¿Tienes dudas? Pide a un compañero que revise tu cuenta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Apunto las medidas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Has medido el suelo. Tienes que pedir los azulejos hoy. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Calculas la superficie, y añades un poco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Pides justo la superficie, ni un azulejo más.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Lo calculas a ojo: ya has visto el suelo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Siempre cortas algunos azulejos, y algunos se rompen. Con un poco de más, no tienes que parar a mitad y pedir otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Pintar", // nieuw, nalezen
    'w.verf': "la pintura", // nieuw, nalezen
    'w.kwast': "la brocha (un pincel ancho)", // nieuw, nalezen
    'w.penseel': "el pincel (para esquinas y bordes)", // nieuw, nalezen
    'w.roerstok': "el palo para remover", // nieuw, nalezen
    'w.tape': "la cinta de pintor, la cinta de carrocero", // nieuw, nalezen
    'w.strijkvaatje': "el bote de pintor (un bote pequeño que sujetas mientras pintas)", // nieuw, nalezen
    's.paint.1': "Primero remueve bien la pintura.", // nieuw, nalezen
    's.paint.2': "Tapa el borde con cinta.", // nieuw, nalezen
    's.paint.3': "Echa un poco de pintura en el bote de pintor.", // nieuw, nalezen
    'c.paint.q': "¿Qué brocha cojo?", // nieuw, nalezen
    'c.paint.a': "La ancha para la pared, el pincel para las esquinas.", // nieuw, nalezen
    'c.paint': "Remueve bien, y pinta de arriba abajo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "La pintura que ha estado quieta un tiempo está espesa en el fondo de la lata. Así que primero remuévela bien, con un palo, hasta que el color sea igual por todas partes. No pintes desde la lata grande: echa un poco de pintura en el bote de pintor, y vuelve a cerrar la lata. Así la pintura se mantiene bien. Pinta de arriba abajo, así las gotas caen sobre pintura húmeda y todavía las puedes quitar con la brocha. Usa la brocha ancha para la pared y el pincel para las esquinas. Al final, limpia las brochas enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Primero remuevo bien la pintura.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Abres una lata vieja de pintura. Arriba está líquida, en el fondo espesa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Primero la remueves bien, con el palo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Pintas con la pintura líquida de arriba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Añades agua hasta que esté líquida por todas partes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Una parte del color está en el fondo de la lata. Sin remover, la pared queda con manchas y rayas.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Prepararse para pintar", // nieuw, nalezen
    'w.plamuurmes': "la espátula de masilla (para tapar agujeros)", // nieuw, nalezen
    'w.schuurpapier': "el papel de lija", // nieuw, nalezen
    'w.verfkrabber': "el rascador de pintura", // nieuw, nalezen
    'w.stoffertje': "el cepillo pequeño (para barrer el polvo)", // nieuw, nalezen
    'w.schuren': "lijar", // nieuw, nalezen
    'w.afplakken': "tapar con cinta (cubrir un borde con cinta)", // nieuw, nalezen
    's.prep.1': "Primero rasca la pintura vieja.", // nieuw, nalezen
    's.prep.2': "Lija la madera hasta que esté lisa.", // nieuw, nalezen
    's.prep.3': "Barre el polvo con el cepillo pequeño.", // nieuw, nalezen
    'c.prep.q': "¿Ya puedo pintar?", // nieuw, nalezen
    'c.prep.a': "No, primero lija y tapa el agujero.", // nieuw, nalezen
    'c.prep': "Un buen trabajo de pintura empieza antes de la pintura", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "La pintura no se pega bien sobre suciedad, polvo o pintura vieja suelta. Así que primero quita la pintura suelta con el rascador. Tapa los agujeros con masilla y la espátula, y deja secar la masilla. Luego líjala hasta que esté lisa. Después de lijar, barre el polvo con el cepillo pequeño, también en los bordes. Por último, tapa con cinta lo que tiene que quedar limpio, como las ventanas y los enchufes. Lijar hace un polvo muy fino: lleva una mascarilla, y pregunta cuál. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Primero lijar, luego pintar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Has lijado la puerta. Todavía tiene polvo. Tu compañero quiere pintar ya. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Primero quitas el polvo, con el cepillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Le dejas pintar: la pintura tapa el polvo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Quitas el polvo con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "La pintura sobre el polvo no se pega bien. Más tarde se cae a trozos, y entonces hay que hacer todo el trabajo otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Albañilería", // nieuw, nalezen
    'w.speciekuip': "la artesa de mortero", // nieuw, nalezen
    'w.metseltroffel': "la paleta de albañil", // nieuw, nalezen
    'w.baksteen': "el ladrillo", // nieuw, nalezen
    'w.cement': "el cemento", // nieuw, nalezen
    'w.voegijzer': "el llaguero (para alisar las juntas entre los ladrillos)", // nieuw, nalezen
    'w.handveger': "el cepillo de mano", // nieuw, nalezen
    's.brick.1': "Todavía hay cemento en la artesa.", // nieuw, nalezen
    's.brick.2': "Alisa la junta con el llaguero.", // nieuw, nalezen
    's.brick.3': "Limpia la pared con el cepillo de mano.", // nieuw, nalezen
    'c.brick.q': "¿Cuántos ladrillos te quedan?", // nieuw, nalezen
    'c.brick.a': "Un palé más. Suficiente para hoy.", // nieuw, nalezen
    'c.brick': "Mantén limpia la pared mientras trabajas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "El mortero está húmedo cuando pones los ladrillos, y se endurece en pocas horas. Así que trabaja limpio. El mortero que sale de la junta, quítalo enseguida con la paleta. Alisa las juntas con el llaguero cuando el mortero está un poco firme, no cuando todavía está húmedo. Luego pasa el cepillo de mano por la pared. El mortero duro en la cara de un ladrillo es muy difícil de quitar. Al final del día, tapa la parte de arriba de la pared, para que la lluvia no se lleve el mortero.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Estoy alisando las juntas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "Al final del día hay mortero en la cara de los ladrillos. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Lo quitas ahora con el cepillo, antes de que se endurezca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Lo dejas: lo limpias la semana que viene.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Lavas la pared con mucha agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "El mortero fresco se quita fácil con un cepillo. El mortero duro se queda en el ladrillo, y entonces la pared no queda bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Una pared recta", // nieuw, nalezen
    'w.metseltouw': "la cuerda de albañil (una cuerda para una hilada recta)", // nieuw, nalezen
    'w.klos': "el taco de esquina (sujeta la cuerda en la esquina)", // nieuw, nalezen
    'w.lagenmaatlat': "el escantillón (muestra la altura de cada hilada)", // nieuw, nalezen
    'w.profiel': "la mira, el perfil (un poste recto al final de la pared)", // nieuw, nalezen
    'w.kop': "el tizón (el lado corto de un ladrillo)", // nieuw, nalezen
    'w.strek': "la soga (el lado largo de un ladrillo)", // nieuw, nalezen
    's.wall.1': "Tensa bien la cuerda de albañil.", // nieuw, nalezen
    's.wall.2': "La mira tiene que estar recta.", // nieuw, nalezen
    's.wall.3': "Pon el ladrillo con el lado largo hacia fuera.", // nieuw, nalezen
    'c.wall.q': "¿Qué altura tiene que tener esta hilada?", // nieuw, nalezen
    'c.wall.a': "Mira el escantillón.", // nieuw, nalezen
    'c.wall': "La cuerda mantiene recta la pared", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Un albañil no construye a ojo. Primero se ponen las miras rectas en los dos extremos de la pared. Entre ellas tensas la cuerda de albañil, a la altura de la hilada siguiente. Pon cada ladrillo a lo largo de la cuerda, pero no empujes la cuerda. El escantillón muestra qué altura tiene que tener cada hilada. Comprueba a menudo con el nivel. Un ladrillo torcido es fácil de arreglar mientras el mortero está húmedo, y muy difícil de arreglar mañana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "¿Está tensa la cuerda de albañil?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "La cuerda de albañil está floja y cuelga un poco en el medio. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Primero la tensas, y luego sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Pones los ladrillos debajo de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Pones los ladrillos a ojo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Una cuerda floja cuelga en el medio, así que la hilada también cuelga. Una cuerda tensa da una hilada recta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Trabajar con madera", // nieuw, nalezen
    'w.handzaag': "el serrucho", // nieuw, nalezen
    'w.kapzaag': "el serrucho de costilla (una sierra pequeña con el lomo rígido)", // nieuw, nalezen
    'w.houtbeitel': "el formón", // nieuw, nalezen
    'w.handschaaf': "el cepillo de carpintero", // nieuw, nalezen
    'w.timmermanshamer': "el martillo de carpintero", // nieuw, nalezen
    'w.houtenhamer': "el mazo (un martillo de madera)", // nieuw, nalezen
    's.wood.1': "Sierra la tabla a medida.", // nieuw, nalezen
    's.wood.2': "Cepilla el borde hasta que esté liso.", // nieuw, nalezen
    's.wood.3': "Golpea el formón con el mazo.", // nieuw, nalezen
    'c.wood.q': "¿Qué sierra necesito?", // nieuw, nalezen
    'c.wood.a': "El serrucho de costilla, para esta pieza pequeña.", // nieuw, nalezen
    'c.wood': "Lo que queda corto no tiene arreglo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "La madera que se corta demasiado corta no se puede volver a alargar. Así que mide dos veces, y traza la línea antes de serrar. Sierra al lado de la línea, por el lado de la pieza que no necesitas. Sujeta bien la madera: en un banco de trabajo o con un sargento, no sobre tu rodilla. Deja que la sierra haga el trabajo, con movimientos largos y tranquilos. Empuja el formón lejos de tu cuerpo y de tu otra mano. Y mantén afilados el formón y el cepillo: una herramienta sin filo resbala más fácil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Lo mido una vez más.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Tienes que serrar una tabla a medida. La mediste una vez, rápido. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Mides otra vez, y luego trazas la línea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "La sierras ya: seguro que está bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "La sierras a ojo, sin línea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Si es demasiado larga, la puedes serrar otra vez; si es demasiado corta, no tiene arreglo. Medir otra vez es un minuto; una tabla nueva cuesta mucho más.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Marcar", // nieuw, nalezen
    'w.winkelhaak': "la escuadra (muestra un ángulo recto)", // nieuw, nalezen
    'w.verstekhaak': "la escuadra de inglete (45 grados)", // nieuw, nalezen
    'w.zwaaihaak': "la falsa escuadra (tú pones el ángulo)", // nieuw, nalezen
    'w.kruishout': "el gramil (traza una línea a lo largo del borde)", // nieuw, nalezen
    'w.passer': "el compás (para dibujar un círculo)", // nieuw, nalezen
    'w.aftekenen': "marcar (dibujar por dónde vas a cortar)", // nieuw, nalezen
    's.square.1': "Marca la línea con la escuadra.", // nieuw, nalezen
    's.square.2': "Pon la falsa escuadra en el ángulo correcto.", // nieuw, nalezen
    's.square.3': "Dibuja un círculo con el compás.", // nieuw, nalezen
    'c.square.q': "¿Está recto el ángulo?", // nieuw, nalezen
    'c.square.a': "Sí, la escuadra encaja justo.", // nieuw, nalezen
    'c.square': "Marca desde un borde recto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Antes de serrar o taladrar, marcas dónde. Usa un lápiz con punta: una línea gruesa no es exacta. Elige un borde recto de la madera, y mide todo desde ese borde. Apoya bien la parte gruesa de la escuadra contra ese borde, y traza la línea a lo largo del metal. Dibuja una pequeña cruz en la pieza que no vas a usar. Luego sierras al lado de la línea, por el lado de la cruz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Primero lo marco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Tu lápiz no tiene punta y hace una línea gruesa. Quieres marcar una tabla. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Primero le sacas punta al lápiz, y luego trazas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Trazas la línea de todos modos, está bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "La marcas con la uña.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Una línea gruesa tiene unos milímetros de ancho. Entonces no sabes dónde serrar, y la pieza no queda exacta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Taladros y tornillos", // nieuw, nalezen
    'w.accuboor': "el taladro de batería", // nieuw, nalezen
    'w.boormachine': "el taladro (con cable)", // nieuw, nalezen
    'w.bitje': "la punta de atornillar", // nieuw, nalezen
    'w.plug': "el taco", // nieuw, nalezen
    'w.schroevendraaier': "el destornillador", // nieuw, nalezen
    'w.spijker': "el clavo", // nieuw, nalezen
    's.screw.1': "Haz un agujero y mete un taco.", // nieuw, nalezen
    's.screw.2': "¿Qué punta va con este tornillo?", // nieuw, nalezen
    's.screw.3': "Clava el clavo en la madera.", // nieuw, nalezen
    'c.screw.q': "¿Dónde está el taladro de batería?", // nieuw, nalezen
    'c.screw.a': "En el cargador, está casi lleno.", // nieuw, nalezen
    'c.screw': "Mira antes de taladrar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Antes de taladrar una pared, piensa en lo que hay detrás. Las tuberías y los cables muchas veces van en línea recta hacia arriba, hacia abajo o hacia el lado desde un enchufe o un interruptor. Pregunta dónde están, o compruébalo con un detector. Elige una broca del mismo tamaño que el taco, y haz el agujero un poco más profundo que el taco. Usa la punta correcta para el tornillo: una punta equivocada resbala y estropea la cabeza del tornillo. Lleva gafas de seguridad cuando taladras.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "¿Puedo taladrar aquí?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Tienes que hacer un agujero justo encima de un enchufe. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Primero preguntas por dónde va el cable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Taladras: nunca hay un cable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Taladras despacio, así es seguro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Desde un enchufe, un cable muchas veces sube en línea recta. Taladrar en él es peligroso, y la reparación es mucho trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Fijar cosas", // nieuw, nalezen
    'w.bevestigen': "fijar (sujetar algo bien a una pared)", // nieuw, nalezen
    'w.vastzetten': "apretar (girar hasta que esté firme)", // nieuw, nalezen
    'w.lijmen': "pegar, encolar", // nieuw, nalezen
    'w.inbussleutel': "la llave Allen (llave hexagonal)", // nieuw, nalezen
    'w.kruisschroevendraaier': "el destornillador de estrella (punta en cruz)", // nieuw, nalezen
    'w.platteschroevendraaier': "el destornillador plano", // nieuw, nalezen
    's.fix.1': "Fija la balda a la pared.", // nieuw, nalezen
    's.fix.2': "Aprieta el perno con la llave Allen.", // nieuw, nalezen
    's.fix.3': "Coge el destornillador plano, no el de estrella.", // nieuw, nalezen
    'c.fix.q': "¿Cómo fijo esta balda?", // nieuw, nalezen
    'c.fix.a': "Con dos tacos y dos tornillos.", // nieuw, nalezen
    'c.fix': "Apretado, pero no demasiado", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Un tornillo o un perno tiene que estar apretado, pero no demasiado. Si giras con demasiada fuerza, la rosca se rompe o la madera se raja. Gira hasta que ya no se mueva, y entonces para. En un taladro de batería, primero gira el anillo de los números a un número bajo. Una balda en la pared necesita tacos que vayan con la pared: la piedra necesita tacos distintos de los de una pared fina de placas. La cola necesita tiempo: aprieta las piezas, sujétalas con un sargento, y espera hasta que la cola esté seca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "¿Está bien fijada la balda?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "Has pegado dos piezas de madera. Tu compañero quiere usarlas enseguida. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Dices: primero tiene que secarse la cola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Le dejas usarlas: la cola es rápida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Las sujetas con las manos un minuto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "La cola húmeda todavía no sujeta. Si las usas demasiado pronto, las piezas se vuelven a soltar. Entonces tienes que empezar otra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "En la máquina", // nieuw, nalezen
    'w.bedieningspaneel': "el panel de control (los botones y la pantalla de una máquina)", // nieuw, nalezen
    'w.startknop': "el botón de arranque (verde)", // nieuw, nalezen
    'w.hendel': "la palanca", // nieuw, nalezen
    'w.afscherming': "la protección (una tapa sobre las piezas que se mueven)", // nieuw, nalezen
    'w.sensor': "el sensor (ve si hay algo)", // nieuw, nalezen
    'w.signaallamp': "la luz de señal (luces de colores encima de una máquina)", // nieuw, nalezen
    's.atmachine.1': "Pulsa el botón verde de arranque.", // nieuw, nalezen
    's.atmachine.2': "La luz de señal está en rojo. Hay una avería.", // nieuw, nalezen
    's.atmachine.3': "Nunca quites la protección.", // nieuw, nalezen
    'c.atmachine.q': "¿Por qué se para la máquina todo el rato?", // nieuw, nalezen
    'c.atmachine.a': "El sensor no ve bien la caja.", // nieuw, nalezen
    'c.atmachine': "La protección se queda puesta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Las piezas que se mueven en una máquina pueden atrapar una mano, una manga o el pelo en menos de un segundo. Para eso está la protección. Nunca la quites, y nunca metas la mano detrás mientras la máquina está en marcha. ¿Una protección o un sensor no funciona? Entonces la máquina no es segura: párala y díselo a tu jefe de equipo. ¿Algo se ha atascado? Primero para la máquina, y asegúrate de que nadie la puede poner en marcha mientras trabajas. Cómo se hace eso cambia de una empresa a otra: pide que te lo expliquen antes de empezar. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "La protección está rota.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Una caja se ha atascado en la máquina, justo detrás de la protección. La máquina está en marcha. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Primero paras la máquina, y luego pides ayuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Metes la mano rápido y sacas la caja.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Abres la protección con la máquina en marcha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Una máquina en marcha puede atrapar tu mano antes de que puedas reaccionar. Pararla es un momento; una mano herida son meses.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Medir y revisar", // nieuw, nalezen
    'w.weegschaal': "la báscula, la balanza", // nieuw, nalezen
    'w.meetklok': "el reloj comparador (mide diferencias muy pequeñas)", // nieuw, nalezen
    'w.loep': "la lupa", // nieuw, nalezen
    'w.monster': "la muestra (un producto que sacas para revisarlo)", // nieuw, nalezen
    'w.afkeurbak': "la caja de rechazos (para los productos que no están bien)", // nieuw, nalezen
    'w.teller': "el contador (cuenta los productos)", // nieuw, nalezen
    's.inspect.1': "Pon el producto en la báscula.", // nieuw, nalezen
    's.inspect.2': "Este producto está dañado. Va a la caja de rechazos.", // nieuw, nalezen
    's.inspect.3': "Miro la etiqueta con la lupa.", // nieuw, nalezen
    'c.inspect.q': "¿Cada cuánto tomo una muestra?", // nieuw, nalezen
    'c.inspect.a': "Una cada hora. Apúntalo en la lista.", // nieuw, nalezen
    'c.inspect': "Apunta lo que revisas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "En una fábrica revisas los productos durante el trabajo: los pesas, los mides o los miras de cerca. Apunta cada revisión en la lista enseguida, con la hora. No más tarde, de memoria. ¿Un producto no está bien? Ponlo en la caja de rechazos y mira bien los siguientes. ¿Hay más productos mal? Entonces algo va mal en la máquina. Díselo enseguida a tu jefe de equipo. Un problema que se encuentra pronto ahorra muchos productos. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Hay más productos mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "La báscula muestra que tres productos seguidos pesan demasiado poco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Se lo dices enseguida a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Los vuelves a poner en la línea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "No dices nada: a veces pasa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Tres productos mal seguidos indican un problema en la máquina. Cuanto antes lo digas, menos productos se pierden.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Embalar", // nieuw, nalezen
    'w.verpakking': "el embalaje, el envase", // nieuw, nalezen
    'w.krimpfolie': "el film retráctil (plástico que se ajusta con calor)", // nieuw, nalezen
    'w.sealmachine': "la selladora (cierra un paquete con calor)", // nieuw, nalezen
    'w.vulmateriaal': "el material de relleno (cojines de aire o papel en una caja)", // nieuw, nalezen
    'w.afbreekmes': "el cúter", // nieuw, nalezen
    'w.tapepistool': "la pistola de precinto", // nieuw, nalezen
    's.packing.1': "Pon material de relleno en la caja.", // nieuw, nalezen
    's.packing.2': "Cierra la caja con la pistola de precinto.", // nieuw, nalezen
    's.packing.3': "La selladora está muy caliente. ¡Cuidado!", // nieuw, nalezen
    'c.packing.q': "¿Cuántos productos van en una caja?", // nieuw, nalezen
    'c.packing.a': "Doce. Lo pone en la lista.", // nieuw, nalezen
    'c.packing': "Corta hacia fuera, lejos de tu cuerpo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Embalar es un trabajo rápido, y un cúter corta mucho. Corta siempre lejos de tu cuerpo y lejos de tu otra mano. Mete la cuchilla después de cada corte, también cuando dejas el cúter un momento. Rompe con cuidado un trozo sin filo, y tíralo en la caja para cuchillas viejas, no en la papelera normal. La selladora y la pistola de calor para el film retráctil se ponen muy calientes: no toques las partes calientes. Y revisa cada caja: el producto correcto, el número correcto, y la etiqueta recta. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Primero meto la cuchilla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Dejas el cúter un momento en la mesa. La cuchilla todavía está fuera. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Primero metes la cuchilla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Lo dejas así: lo vas a necesitar enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Te lo guardas así en el bolsillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Una cuchilla fuera, en una mesa o en un bolsillo, te puede cortar a ti o a un compañero. Meterla es un segundo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Mantenimiento", // nieuw, nalezen
    'w.persluchtpistool': "la pistola de aire comprimido", // nieuw, nalezen
    'w.steeksleutel': "la llave fija", // nieuw, nalezen
    'w.oliekannetje': "la aceitera", // nieuw, nalezen
    'w.smeerpistool': "la pistola de engrase", // nieuw, nalezen
    'w.lekbak': "la bandeja de goteo (recoge el aceite que gotea)", // nieuw, nalezen
    'w.poetsdoek': "el trapo de limpieza", // nieuw, nalezen
    's.upkeep.1': "Gotea aceite. Pon la bandeja de goteo debajo.", // nieuw, nalezen
    's.upkeep.2': "Limpia el aceite con un trapo.", // nieuw, nalezen
    's.upkeep.3': "Nunca apuntes a nadie con la pistola de aire comprimido.", // nieuw, nalezen
    'c.upkeep.q': "¿Cuándo engrasamos la máquina?", // nieuw, nalezen
    'c.upkeep.a': "Todos los lunes, antes del primer turno.", // nieuw, nalezen
    'c.upkeep': "Una máquina limpia muestra sus problemas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "El mantenimiento pequeño muchas veces es parte del trabajo: limpiar, echar aceite y engrasar. Hazlo solo cuando la máquina está apagada, y cuando has aprendido cómo. Una máquina limpia es fácil de revisar: ves enseguida una fuga o una pieza suelta. El aceite en el suelo resbala. Pon una bandeja de goteo debajo de una fuga, limpia el suelo, y díselo a tu jefe de equipo. Tira los trapos con aceite en el contenedor especial. Nunca apuntes a una persona con una pistola de aire comprimido, y nunca la uses para limpiar tu ropa o tu piel. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "La máquina pierde aceite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Ves un pequeño charco de aceite debajo de la máquina. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Pones una bandeja de goteo debajo, y avisas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Lo dejas: es solo un poco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Pones un poco de papel encima, y sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Una fuga se hace más grande, y el aceite en el suelo hace que la gente resbale. Si se encuentra pronto, es una reparación pequeña.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Electricidad, tuberías y metal", // nieuw, nalezen
    'l.wiring': "Conectar hilos y cables", // nieuw, nalezen
    'w.draad': "el hilo (un hilo dentro de un cable)", // nieuw, nalezen
    'w.stopcontact': "el enchufe (en la pared)", // nieuw, nalezen
    'w.schakelaar': "el interruptor (para la luz)", // nieuw, nalezen
    'w.lasklem': "el conector de palanca (une hilos)", // nieuw, nalezen
    'w.striptang': "el pelacables", // nieuw, nalezen
    'w.kabelgoot': "la canaleta (un canal para cables)", // nieuw, nalezen
    's.wiring.1': "Pela un centímetro del hilo.", // nieuw, nalezen
    's.wiring.2': "Fija los hilos en el conector de palanca.", // nieuw, nalezen
    's.wiring.3': "Los cables van en la canaleta.", // nieuw, nalezen
    'c.wiring.q': "¿Qué hilo va dónde?", // nieuw, nalezen
    'c.wiring.a': "Marrón con marrón, azul con azul.", // nieuw, nalezen
    'c.wiring': "Los colores dicen para qué sirve un hilo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "En un edificio, los hilos tienen colores fijos. El marrón (a veces negro o gris) lleva la corriente. El azul es el de vuelta. El verde y amarillo es la tierra: protege a las personas, y nunca se usa para otra cosa. Conecta el mismo color con el mismo color. Pela solo lo que cabe en el conector: no puede quedar cobre desnudo fuera. Mete el hilo, y luego tira de él suavemente para comprobar que está fijo. ¿No sabes qué hilo es cuál? Para y pregunta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "¿De qué color es la tierra?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Conectas una lámpara. Un trozo de cobre sale del conector. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Cortas el hilo más corto, y lo vuelves a conectar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Lo dejas así: la lámpara funciona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Le pones un trozo de cinta alrededor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "El cobre desnudo fuera del conector puede tocar algo. Eso puede dar una descarga o un cortocircuito, también meses después.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Medir y trabajar con seguridad", // nieuw, nalezen
    'w.multimeter': "el multímetro (mide la corriente)", // nieuw, nalezen
    'w.spanningzoeker': "el buscapolos (un destornillador con una lucecita)", // nieuw, nalezen
    'w.meterkast': "el cuadro eléctrico", // nieuw, nalezen
    'w.zekering': "el automático, el fusible (corta la corriente cuando algo va mal)", // nieuw, nalezen
    'w.hangslot': "el candado", // nieuw, nalezen
    'w.aardedraad': "el cable de tierra (verde y amarillo)", // nieuw, nalezen
    's.testing.1': "Ha saltado el automático.", // nieuw, nalezen
    's.testing.2': "Pon un candado en el interruptor.", // nieuw, nalezen
    's.testing.3': "Mide primero con el multímetro.", // nieuw, nalezen
    'c.testing.q': "¿Puedo abrir el cuadro eléctrico?", // nieuw, nalezen
    'c.testing.a': "No, eso lo hace el electricista.", // nieuw, nalezen
    'c.testing': "Cortado, bloqueado, medido", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Antes de trabajar con electricidad, sigue tres pasos. Corta: el automático correcto en el cuadro eléctrico, no solo el interruptor de la pared. Bloquea: pon tu propio candado, y guarda la llave contigo, así nadie lo puede volver a conectar. Mide: comprueba con un buscapolos o un multímetro que de verdad no hay corriente. Solo entonces empiezas a trabajar. ¿Un automático salta una y otra vez? No lo sigas subiendo: díselo a tu encargado. Haz trabajos eléctricos solo cuando te han dicho que puedes. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Ya no hay corriente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Has bajado el automático. Un compañero dice: “Empieza ya, está cortado.” ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Lo bloqueas, y primero mides.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Empiezas: tu compañero lo sabe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Tocas el hilo un momento para comprobarlo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "A veces el automático bajado no es el correcto, o alguien lo vuelve a subir. Un candado y una medición muestran que de verdad es seguro.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Tuberías y agua", // nieuw, nalezen
    'w.buis': "el tubo", // nieuw, nalezen
    'w.koppeling': "el racor (une dos tubos)", // nieuw, nalezen
    'w.pijpsnijder': "el cortatubos", // nieuw, nalezen
    'w.waterpomptang': "el alicate de pico de loro (alicate ajustable)", // nieuw, nalezen
    'w.afsluiter': "la llave de paso (cierra el agua)", // nieuw, nalezen
    'w.teflontape': "la cinta de teflón (cinta blanca para la rosca de un tubo)", // nieuw, nalezen
    's.pipes.1': "Cierra la llave de paso.", // nieuw, nalezen
    's.pipes.2': "Corta el tubo con el cortatubos.", // nieuw, nalezen
    's.pipes.3': "Enrolla cinta de teflón en la rosca.", // nieuw, nalezen
    'c.pipes.q': "¿Todavía pierde agua el racor?", // nieuw, nalezen
    'c.pipes.a': "Un poco. Lo aprieto un poco más.", // nieuw, nalezen
    'c.pipes': "Primero cierra el agua, y ten un cubo listo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Antes de abrir una tubería de agua, cierra la llave de paso. Luego abre un grifo más abajo, para que la tubería se vacíe. Pon un cubo y un trapo debajo del sitio donde trabajas. Corta un tubo de cobre con un cortatubos, no con una sierra: el extremo queda redondo y limpio. Aprieta bien un racor, pero no demasiado. Cuando termines, abre el agua despacio y busca gotas. Una fuga pequeña que dejas así acaba en daños por agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "¿Está cerrada el agua?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Has hecho un racor nuevo. Abres el agua. Cae una gotita cada minuto. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Cierras el agua, y lo aprietas o lo vuelves a hacer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Lo dejas así: es solo una gota.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Pones un cubo debajo y te vas a casa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Una gota por minuto son muchos litros a la semana. El agua puede estropear el suelo o el techo de abajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Trabajar el metal", // nieuw, nalezen
    'w.bankschroef': "el tornillo de banco (sujeta bien una pieza en el banco de trabajo)", // nieuw, nalezen
    'w.vijl': "la lima (para alisar el metal a mano)", // nieuw, nalezen
    'w.ijzerzaag': "la sierra de arco (una sierra para metal)", // nieuw, nalezen
    'w.kolomboormachine': "el taladro de columna (un taladro grande sobre un pie)", // nieuw, nalezen
    'w.draadtap': "el macho de roscar (hace una rosca en un agujero)", // nieuw, nalezen
    'w.braam': "la rebaba (un borde afilado después de cortar metal)", // nieuw, nalezen
    's.metalwork.1': "Sujeta el metal en el tornillo de banco.", // nieuw, nalezen
    's.metalwork.2': "Quita la rebaba con la lima.", // nieuw, nalezen
    's.metalwork.3': "Mantén las manos lejos de la broca.", // nieuw, nalezen
    'c.metalwork.q': "¿Por qué está tan afilado el borde?", // nieuw, nalezen
    'c.metalwork.a': "Todavía tiene una rebaba.", // nieuw, nalezen
    'c.metalwork': "Sujétalo en el tornillo, nunca con la mano", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "En el taladro de columna, nunca aguantes una pieza pequeña con la mano. La broca puede atraparla y hacerla girar muy rápido. Sujétala en el tornillo de banco. Recógete el pelo largo, y no lleves guantes con una broca que gira: puede atrapar el guante. Lleva gafas de seguridad. Después de serrar o taladrar, el metal tiene una rebaba: un borde afilado. Quítala con la lima antes de coger la pieza con la mano o de pasarla a otra persona. Quita las virutas de metal con un cepillo, no con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Primero lo sujeto en el tornillo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Tienes que hacer un agujero en una pieza pequeña de metal. El tornillo de banco está en otro banco. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Vas a buscar el tornillo de banco, y fijas la pieza en él.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "La aguantas fuerte con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Te pones guantes y la aguantas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Una broca puede atrapar una pieza pequeña y hacerla girar. Entonces te golpea la mano. En el tornillo de banco se queda quieta.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Montaje", // nieuw, nalezen
    'l.assembly': "En la línea de montaje", // nieuw, nalezen
    'w.werkinstructie': "la instrucción de trabajo (una hoja con los pasos)", // nieuw, nalezen
    'w.onderdelenbak': "la caja de piezas", // nieuw, nalezen
    'w.mal': "la plantilla (sujeta la pieza en el sitio correcto)", // nieuw, nalezen
    'w.rolbaan': "el transportador de rodillos", // nieuw, nalezen
    'w.montagetafel': "la mesa de montaje", // nieuw, nalezen
    'w.voetpedaal': "el pedal (un interruptor que pisas con el pie)", // nieuw, nalezen
    's.assembly.1': "Lee primero la instrucción de trabajo.", // nieuw, nalezen
    's.assembly.2': "La caja de piezas está casi vacía.", // nieuw, nalezen
    's.assembly.3': "Pon la pieza en la plantilla.", // nieuw, nalezen
    'c.assembly.q': "¿Qué paso toca ahora?", // nieuw, nalezen
    'c.assembly.a': "El paso cuatro. Mira la instrucción de trabajo.", // nieuw, nalezen
    'c.assembly': "Sigue los pasos, en el mismo orden", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "En una línea de montaje cada paso tiene su sitio y su orden. La instrucción de trabajo los muestra, muchas veces con dibujos. Haz los pasos siempre en el mismo orden, también cuando crees que sabes una forma más rápida. Otro orden puede dar un producto que parece bueno pero no funciona. ¿Una caja está casi vacía? Dilo a tiempo, para que la línea no se pare. ¿Ves un paso que podría ser mejor? Díselo a tu jefe de equipo: así puede cambiar para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Necesito piezas nuevas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Has encontrado una forma más rápida de hacer el paso tres. La instrucción de trabajo dice otra cosa. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Primero preguntas a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "A partir de ahora lo haces a tu manera.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Enseñas tu manera a tus compañeros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "El orden muchas veces tiene una razón que no ves. Si tu manera es mejor, puede cambiar para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Apretar y fijar", // nieuw, nalezen
    'w.schroefmachine': "el atornillador eléctrico (cuelga encima de la línea)", // nieuw, nalezen
    'w.momentsleutel': "la llave dinamométrica (hace clic cuando el perno está bastante apretado)", // nieuw, nalezen
    'w.tiewrap': "la brida", // nieuw, nalezen
    'w.sluitring': "la arandela", // nieuw, nalezen
    'w.klinknagel': "el remache", // nieuw, nalezen
    'w.popnageltang': "la remachadora", // nieuw, nalezen
    's.fastening.1': "Aprieta el perno con la llave dinamométrica.", // nieuw, nalezen
    's.fastening.2': "No olvides la arandela.", // nieuw, nalezen
    's.fastening.3': "Une los cables con una brida.", // nieuw, nalezen
    'c.fastening.q': "¿Cuánto hay que apretar este perno?", // nieuw, nalezen
    'c.fastening.a': "Hasta que la llave dinamométrica haga clic.", // nieuw, nalezen
    'c.fastening': "El clic es suficiente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Una llave dinamométrica hace clic cuando un perno está lo bastante apretado. Para en el clic: no sigas girando. Demasiado apretado puede romper el perno o la pieza, y demasiado flojo se puede soltar. El atornillador eléctrico funciona igual: se para solo. Pon cada arandela en su sitio: una arandela que falta es difícil de ver más tarde. Cuenta tus pernos. ¿Sobra uno, o te falta uno? Entonces algo va mal: díselo a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Sobra un perno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Tu llave dinamométrica ha hecho clic. El perno todavía te parece un poco flojo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Paras, y preguntas a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Lo giras un poco más con la mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Usas una llave más larga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "El clic está ajustado a la fuerza correcta. Si te parece mal, puede que haya que revisar la llave. Si sigues girando, el perno se puede romper.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Levantar y mover", // nieuw, nalezen
    'w.takel': "el polipasto (levanta piezas pesadas con una cadena)", // nieuw, nalezen
    'w.hijshaak': "el gancho de elevación", // nieuw, nalezen
    'w.tilhulp': "la ayuda de elevación (sujeta una pieza con ventosas)", // nieuw, nalezen
    'w.onderdelenkar': "el carro de piezas", // nieuw, nalezen
    'w.draaitafel': "la mesa giratoria (giras la pieza, no tu cuerpo)", // nieuw, nalezen
    'w.rolcontainer': "el carro jaula (una jaula alta con ruedas)", // nieuw, nalezen
    's.handling.1': "No levantes esto sin ayuda. Usa el polipasto.", // nieuw, nalezen
    's.handling.2': "¿Está bien cerrado el gancho de elevación?", // nieuw, nalezen
    's.handling.3': "Empuja el carro de piezas, no tires de él.", // nieuw, nalezen
    'c.handling.q': "¿Puedo ponerme debajo del polipasto?", // nieuw, nalezen
    'c.handling.a': "No, nunca debajo de una carga colgada.", // nieuw, nalezen
    'c.handling': "Deja que el polipasto haga el trabajo pesado", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Las piezas pesadas se levantan con un polipasto o una ayuda de elevación, no con tu espalda. Revisa el gancho antes de levantar: el cierre de seguridad tiene que cerrar. Levanta despacio, y mantén las manos y los pies lejos de la carga. Nunca te pongas ni pases debajo de una carga colgada. Usa la mesa giratoria para girar una pieza: así no tienes que torcer la espalda. Empuja un carro o un carro jaula: ves por dónde vas, y tu espalda trabaja menos. Usa un polipasto solo cuando has aprendido cómo. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Uso el polipasto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Una pieza es muy pesada. El polipasto está ocupado diez minutos más. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Esperas al polipasto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': { m: "La levantas tú solo, rápido.", f: "La levantas tú sola, rápido.", x: "La levantas sin ayuda, rápido." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "La arrastras por el suelo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Una pieza pesada puede dañar tu espalda en un segundo. Diez minutos de espera es mejor que meses de dolor.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "La revisión final", // nieuw, nalezen
    'w.typeplaatje': "la placa de características (una placa pequeña de metal con el tipo y el número)", // nieuw, nalezen
    'w.stempel': "el sello", // nieuw, nalezen
    'w.testbank': "el banco de pruebas", // nieuw, nalezen
    'w.goedkeursticker': "la pegatina de aprobado (una pegatina verde: el producto está bien)", // nieuw, nalezen
    'w.kras': "el arañazo", // nieuw, nalezen
    'w.barst': "la grieta", // nieuw, nalezen
    's.finalcheck.1': "La placa de características está torcida.", // nieuw, nalezen
    's.finalcheck.2': "Este producto tiene un arañazo.", // nieuw, nalezen
    's.finalcheck.3': "Sin la pegatina de aprobado no sale.", // nieuw, nalezen
    'c.finalcheck.q': "¿Está bien este producto?", // nieuw, nalezen
    'c.finalcheck.a': "No, tiene una grieta.", // nieuw, nalezen
    'c.finalcheck': "Solo los productos buenos llevan la pegatina", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': { m: "La revisión final es la última oportunidad de encontrar un fallo antes de que lo encuentre el cliente. Revisa cada punto de la lista, también cuando hay mucho trabajo. Un arañazo o una grieta pequeña se te escapa fácilmente: mira con buena luz, y desde más de un lado. Pon la pegatina de aprobado o el sello solo cuando todos los puntos están bien. ¿No estás seguro? Pon el producto aparte y pregunta. Un fallo que se encuentra aquí cuesta poco, y un fallo en casa del cliente cuesta mucho. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", f: "La revisión final es la última oportunidad de encontrar un fallo antes de que lo encuentre el cliente. Revisa cada punto de la lista, también cuando hay mucho trabajo. Un arañazo o una grieta pequeña se te escapa fácilmente: mira con buena luz, y desde más de un lado. Pon la pegatina de aprobado o el sello solo cuando todos los puntos están bien. ¿No estás segura? Pon el producto aparte y pregunta. Un fallo que se encuentra aquí cuesta poco, y un fallo en casa del cliente cuesta mucho. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", x: "La revisión final es la última oportunidad de encontrar un fallo antes de que lo encuentre el cliente. Revisa cada punto de la lista, también cuando hay mucho trabajo. Un arañazo o una grieta pequeña se te escapa fácilmente: mira con buena luz, y desde más de un lado. Pon la pegatina de aprobado o el sello solo cuando todos los puntos están bien. ¿Tienes dudas? Pon el producto aparte y pregunta. Un fallo que se encuentra aquí cuesta poco, y un fallo en casa del cliente cuesta mucho. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Este producto va aparte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Hay mucho trabajo en la línea. Ves un pequeño arañazo en un producto, debajo de la etiqueta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Lo pones aparte, y se lo dices a tu jefe de equipo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Le pones la pegatina: es pequeño.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Mueves la etiqueta encima del arañazo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Un arañazo pequeño puede ser señal de un problema en la línea. Esconderlo solo pasa el problema al cliente.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Cultivar, clasificar y el invernadero", // nieuw, nalezen
    'l.sowing': "Sembrar y esquejes", // nieuw, nalezen
    'w.zaad': "las semillas", // nieuw, nalezen
    'w.zaaibak': "la bandeja de semillero", // nieuw, nalezen
    'w.stek': "el esqueje (un trozo de planta que echa raíces nuevas)", // nieuw, nalezen
    'w.potgrond': "la tierra para macetas", // nieuw, nalezen
    'w.kweekpot': "la maceta de cultivo", // nieuw, nalezen
    'w.gieter': "la regadera", // nieuw, nalezen
    's.sowing.1': "Pon dos semillas en cada hueco.", // nieuw, nalezen
    's.sowing.2': "Pon el esqueje en la tierra para macetas.", // nieuw, nalezen
    's.sowing.3': "Dale un poco de agua a las plantas jóvenes.", // nieuw, nalezen
    'c.sowing.q': "¿A qué profundidad va la semilla?", // nieuw, nalezen
    'c.sowing.a': "Medio centímetro. No más.", // nieuw, nalezen
    'c.sowing': "Las plantas pequeñas necesitan una mano suave", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Las plantas jóvenes son débiles. Coge un esqueje o una plántula por una hoja, no por el tallo: una hoja vuelve a crecer, un tallo roto no. Aprieta la tierra con suavidad, no con fuerza. Riega despacio, con una lluvia fina, para que el agua no se lleve las semillas. Trabaja con las manos limpias y con bandejas limpias: las plantas jóvenes enferman fácilmente. Escribe la fecha y el tipo de planta en cada bandeja, para que todos sepan lo que hay dentro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "La cojo por la hoja.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Tienes que pasar una plántula pequeña a una maceta. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "La coges con cuidado por una hoja.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "La sacas tirando del tallo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "La sacas apretándola con la tierra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Una hoja puede volver a crecer. Un tallo roto no, y entonces la planta muere.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Clasificar y empaquetar", // nieuw, nalezen
    'w.tros': "el racimo (tomates en un mismo tallo)", // nieuw, nalezen
    'w.bakje': "la tarrina (una caja pequeña para fruta)", // nieuw, nalezen
    'w.sorteermachine': "la máquina clasificadora", // nieuw, nalezen
    'w.etiketpistool': "la pistola etiquetadora", // nieuw, nalezen
    'w.kleurenkaart': "la carta de colores (muestra lo madura que tiene que estar la fruta)", // nieuw, nalezen
    'w.tomatenschaar': "las tijeras de cosecha", // nieuw, nalezen
    's.sorting.1': "Pon los racimos con cuidado en la caja.", // nieuw, nalezen
    's.sorting.2': "Este tomate está demasiado maduro. Va aparte.", // nieuw, nalezen
    's.sorting.3': "Mira la carta de colores.", // nieuw, nalezen
    'c.sorting.q': "¿Está este tomate bastante maduro?", // nieuw, nalezen
    'c.sorting.a': "No, todavía está muy verde. Déjalo en la planta.", // nieuw, nalezen
    'c.sorting': "Cada fruta cuenta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "La fruta y la verdura se golpean fácilmente. Déjalas con cuidado, no las dejes caer ni las tires. Hoy no ves el golpe, pero mañana la fruta está blanda y marrón. Mira la carta de colores para saber qué color va dónde. Pon aparte una fruta dañada o podrida: una fruta mala en una tarrina puede estropear las demás. Mantén limpias las tarrinas y las cajas, y nunca las pongas en el suelo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Este está dañado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Estás llenando tarrinas. Un tomate tiene una mancha marrón y blanda. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Lo pones aparte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Lo escondes en el fondo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "Lo empaquetas de todos modos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Un tomate podrido hace que los demás se pudran más rápido. El cliente lo encuentra, y devuelve toda la tarrina.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "El invernadero y su clima", // nieuw, nalezen
    'w.buisrailkar': "el carro sobre raíles (va sobre los tubos de la calefacción)", // nieuw, nalezen
    'w.druppelaar': "el gotero (da agua gota a gota)", // nieuw, nalezen
    'w.luchtraam': "la ventana cenital (una ventana en el techo)", // nieuw, nalezen
    'w.kasscherm': "la pantalla del invernadero (una tela bajo el techo)", // nieuw, nalezen
    'w.ventilator': "el ventilador", // nieuw, nalezen
    'w.thermometer': "el termómetro", // nieuw, nalezen
    's.greenhouse.1': "Lleva el carro sobre raíles hasta el final de la fila.", // nieuw, nalezen
    's.greenhouse.2': "El gotero está suelto.", // nieuw, nalezen
    's.greenhouse.3': "Hace calor. Las ventanas del techo se están abriendo.", // nieuw, nalezen
    'c.greenhouse.q': "¿Por qué hace tanto calor en el invernadero?", // nieuw, nalezen
    'c.greenhouse.a': "La pantalla está cerrada, y las ventanas también.", // nieuw, nalezen
    'c.greenhouse': "Deja el clima al ordenador", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "En un invernadero un ordenador controla el clima: las ventanas, la pantalla, la calefacción y el agua. No abras una ventana ni cambies un ajuste tú mismo. ¿Ves algo raro, como un gotero que pierde agua o una ventana que no se cierra? Díselo a tu encargado. El carro sobre raíles va sobre los tubos de la calefacción: úsalo solo cuando hayas aprendido cómo. Mantén los pies en la plataforma, y nunca toques los tubos: pueden estar calientes. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Este gotero pierde agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Un gotero está suelto. Cae agua al suelo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Lo vuelves a poner, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Lo dejas: es solo agua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Cierras el agua de toda la fila.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Un gotero suelto gasta agua, la planta recibe demasiado poca, y un suelo mojado resbala.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Plagas y trabajar limpio", // nieuw, nalezen
    'w.luis': "el pulgón (un insecto verde pequeño en las plantas)", // nieuw, nalezen
    'w.vangplaat': "la trampa adhesiva (una tarjeta amarilla que atrapa insectos)", // nieuw, nalezen
    'w.rups': "la oruga", // nieuw, nalezen
    'w.sluipwesp': "la avispa parasitoide (una avispa pequeña que mata plagas)", // nieuw, nalezen
    'w.schimmel': "el moho", // nieuw, nalezen
    'w.ontsmettingsmat': "la alfombra desinfectante (la pisas en la puerta)", // nieuw, nalezen
    's.pests.1': "Hay pulgones en esta hoja.", // nieuw, nalezen
    's.pests.2': "Cuelga la trampa adhesiva encima de las plantas.", // nieuw, nalezen
    's.pests.3': "Pasa por la alfombra desinfectante.", // nieuw, nalezen
    'c.pests.q': "¿Puedo matar esta avispa?", // nieuw, nalezen
    'c.pests.a': "No, es una avispa parasitoide. Nos ayuda.", // nieuw, nalezen
    'c.pests': "No lleves enfermedades de fila en fila", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Una enfermedad o una plaga se extiende rápido en un invernadero. La puedes llevar en las manos, en la ropa y en las herramientas. Por eso pasa por la alfombra desinfectante en cada puerta, y lávate las manos cuando vas a otra parte del invernadero. Empieza tu trabajo en las filas sanas, y termina en las filas enfermas. ¿Ves insectos, manchas o moho en una planta? No la toques, pero dile a tu encargado dónde está. Algunos insectos del invernadero son ayudantes: déjalos en paz. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Aquí hay moho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Ves moho gris en unas cuantas plantas de tu fila. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Le dices a tu encargado dónde está.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Quitas las hojas malas y sigues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "No dices nada: son solo unas cuantas plantas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "El moho se extiende rápido. Tu encargado sabe qué hacer, y por dónde empezar.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Neumáticos, aceite y frenos", // nieuw, nalezen
    'l.tyres': "Cambiar neumáticos", // nieuw, nalezen
    'w.wielbout': "el tornillo de rueda", // nieuw, nalezen
    'w.slagmoersleutel': "la llave de impacto", // nieuw, nalezen
    'w.bandenspanningsmeter': "el manómetro de neumáticos", // nieuw, nalezen
    'w.bandenprofiel': "el dibujo del neumático (las ranuras del neumático)", // nieuw, nalezen
    'w.velg': "la llanta", // nieuw, nalezen
    'w.bandenwisselaar': "la desmontadora de neumáticos (una máquina para sacar el neumático de la llanta)", // nieuw, nalezen
    's.tyres.1': "Aprieta los tornillos de rueda en cruz.", // nieuw, nalezen
    's.tyres.2': "El dibujo del neumático está demasiado bajo.", // nieuw, nalezen
    's.tyres.3': "Mide la presión con el manómetro.", // nieuw, nalezen
    'c.tyres.q': "¿Hay que quitar estos neumáticos?", // nieuw, nalezen
    'c.tyres.a': "Sí, casi no les queda dibujo.", // nieuw, nalezen
    'c.tyres': "Enrosca a mano, aprieta con la llave dinamométrica", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Una llave de impacto es rápida y muy fuerte. Úsala para quitar los tornillos de rueda, pero no para apretarlos fuerte. Primero enrosca los tornillos a mano. Luego apriétalos en cruz con una llave dinamométrica, a la fuerza indicada para ese coche. Una rueda que no está bien apretada se puede soltar en marcha. Revisa el dibujo y la presión de cada neumático que pase por tus manos. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Primero los enrosco a mano.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Vuelves a poner una rueda. Un compañero dice: “Usa la llave de impacto, es más rápido.” ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Los enroscas a mano, y luego usas la llave dinamométrica.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Los aprietas fuerte con la llave de impacto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Los enroscas a mano, y lo dejas así.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Una llave de impacto puede apretar un tornillo demasiado o demasiado poco. Solo la llave dinamométrica da la fuerza correcta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Cambiar el aceite", // nieuw, nalezen
    'w.oliefilter': "el filtro de aceite", // nieuw, nalezen
    'w.oliepeilstok': "la varilla del aceite (muestra cuánto aceite hay)", // nieuw, nalezen
    'w.opvangbak': "el recipiente de vaciado (recoge el aceite usado)", // nieuw, nalezen
    'w.trechter': "el embudo", // nieuw, nalezen
    'w.aftapplug': "el tapón de vaciado", // nieuw, nalezen
    'w.olievat': "el bidón de aceite", // nieuw, nalezen
    's.oilchange.1': "Pon el recipiente de vaciado debajo del motor.", // nieuw, nalezen
    's.oilchange.2': "Afloja el tapón de vaciado.", // nieuw, nalezen
    's.oilchange.3': "Mira la varilla del aceite.", // nieuw, nalezen
    'c.oilchange.q': "¿Cuánto aceite hay que echar?", // nieuw, nalezen
    'c.oilchange.a': "Cuatro litros. Luego mira la varilla.", // nieuw, nalezen
    'c.oilchange': "El aceite usado va al bidón, no al desagüe", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "El aceite usado es malo para el agua y la tierra. Un poco de aceite puede ensuciar mucha agua. Por eso recoge todo el aceite usado en el recipiente de vaciado, y échalo en el bidón para aceite usado. Nunca lo eches en un desagüe ni en un fregadero. Los filtros viejos y los trapos con aceite van a su propio contenedor. El aceite caliente puede quemarte la piel: deja que el motor se enfríe un poco primero, y ponte guantes. Limpia enseguida el aceite derramado: el aceite en el suelo resbala. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "¿Dónde va el aceite usado?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "El recipiente de vaciado está lleno de aceite usado. El bidón está al otro lado del taller. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Lo llevas al bidón, con cuidado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Lo echas en el desagüe de fuera.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Lo dejas debajo del coche para más tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "El aceite usado en un desagüe ensucia el agua. Un recipiente lleno debajo de un coche acaba volcado de una patada.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Frenos y luces", // nieuw, nalezen
    'w.remschijf': "el disco de freno", // nieuw, nalezen
    'w.remblok': "la pastilla de freno", // nieuw, nalezen
    'w.koplamp': "el faro", // nieuw, nalezen
    'w.remvloeistof': "el líquido de frenos", // nieuw, nalezen
    'w.remklauw': "la pinza de freno", // nieuw, nalezen
    'w.achterlamp': "la luz trasera", // nieuw, nalezen
    's.brakes.1': "Las pastillas de freno están gastadas.", // nieuw, nalezen
    's.brakes.2': "Revisa el líquido de frenos.", // nieuw, nalezen
    's.brakes.3': "La luz trasera izquierda no funciona.", // nieuw, nalezen
    'c.brakes.q': "¿Hay que cambiar también el disco de freno?", // nieuw, nalezen
    'c.brakes.a': "Sí, está demasiado fino.", // nieuw, nalezen
    'c.brakes': "Frenos: revisa dos veces", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Los frenos salvan vidas. Por eso trabaja con calma, y revisa tu trabajo dos veces. Después de poner pastillas o discos nuevos, pisa el pedal del freno unas cuantas veces antes de mover el coche: la primera vez muchas veces se hunde demasiado. El líquido de frenos es malo para tu piel y para la pintura: ponte guantes, y limpia las gotas enseguida. No soples el polvo de los frenos con aire comprimido: límpialo con limpiador de frenos y un trapo. Antes de que salga el coche, revisa todas las luces, también las luces de freno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Piso el pedal del freno unas cuantas veces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Has puesto pastillas de freno nuevas. El coche tiene que salir. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Pisas el pedal del freno unas cuantas veces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Lo sacas conduciendo enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Lo sacas empujando sin revisar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Después de poner pastillas nuevas, el pedal se puede hundir demasiado la primera vez. Entonces el coche no frena.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Leer averías y la orden de trabajo", // nieuw, nalezen
    'w.diagnosecomputer': "la máquina de diagnosis (lee las averías del coche)", // nieuw, nalezen
    'w.waarschuwingslampje': "el testigo (una luz de aviso en el salpicadero)", // nieuw, nalezen
    'w.werkorder': "la orden de trabajo (lo que hay que hacer en el coche)", // nieuw, nalezen
    'w.kentekenplaat': "la matrícula", // nieuw, nalezen
    'w.autosleutel': "la llave del coche", // nieuw, nalezen
    'w.stoelhoes': "la funda del asiento (mantiene limpio el asiento)", // nieuw, nalezen
    's.diagnosis.1': "Conecta la máquina de diagnosis.", // nieuw, nalezen
    's.diagnosis.2': "El testigo está encendido.", // nieuw, nalezen
    's.diagnosis.3': "Pon una funda en el asiento.", // nieuw, nalezen
    'c.diagnosis.q': "¿Qué hay que hacerle a este coche?", // nieuw, nalezen
    'c.diagnosis.a': "Mira la orden de trabajo.", // nieuw, nalezen
    'c.diagnosis': "Trata el coche como si fuera tuyo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Un cliente te da su coche y su llave. Trata las dos cosas con cuidado. Pon una funda en el asiento y una alfombrilla en el suelo antes de subir. Haz solo lo que pone en la orden de trabajo. ¿Encuentras otra cosa que está mal? Apúntalo y díselo a tu encargado: el cliente decide. Deja la llave en su sitio, con su etiqueta. No uses la radio, el teléfono ni las cosas que hay en el coche. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Esto no está en la orden de trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Cambias el aceite. Un neumático está casi liso. No está en la orden de trabajo. ¿Qué haces?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Lo apuntas, y se lo dices a tu encargado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Cambias el neumático enseguida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "No dices nada: no es tu trabajo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "El cliente decide lo que se hace y se paga. Pero tiene que saber que el neumático es peligroso.", // nieuw, nalezen // nagelezen AI 22 nov
  },
};

export default t;
