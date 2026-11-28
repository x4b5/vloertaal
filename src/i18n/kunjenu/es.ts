import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Spanish (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "¿Qué puedes hacer ahora?", // nieuw, nalezen // nagelezen AI 28 nov
    kunNote: "El nivel junto a cada frase es una orientación, no un nivel oficial.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCanDo: "Cuántas frases «Puedo…» tienes de los temas terminados", // nieuw, nalezen // nagelezen AI 28 nov
    kunLuisteren: "escuchar", // nieuw, nalezen // nagelezen AI 28 nov
    kunSpreken: "hablar", // nieuw, nalezen // nagelezen AI 28 nov
    kunLezen: "leer", // nieuw, nalezen // nagelezen AI 28 nov
    kunSchrijven: "escribir", // nieuw, nalezen // nagelezen AI 28 nov
    kunGesprekken: "conversar", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    'kjn.u.firstday.1': "Puedo presentarme a un compañero de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.firstday.2': "Puedo preguntar a quién me tengo que presentar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.1': "Puedo decir que no entiendo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.2': "Puedo pedir que alguien hable más despacio.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.1': "Puedo entender una instrucción corta, como «Zet het neer».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.2': "Puedo decir que he terminado una tarea.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.1': "Puedo pedir que alguien lo escriba o me lo enseñe.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.2': "Puedo repetir una instrucción para comprobar que la he entendido.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.tools.3': "Puedo decir que quiero practicar neerlandés.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.1': "Puedo deletrear mi nombre.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.2': "Puedo decir qué días puedo trabajar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.3': "Puedo entender una fecha cuando la oigo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.1': "Puedo distinguir palabras como man y maan.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.2': "Puedo repetir frases cortas con sonidos difíciles.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.1': "Puedo entender un aviso como «Pas op!».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.2': "Puedo decir que todavía no he aprendido algo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.1': "Puedo preguntar dónde está el extintor.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.2': "Puedo avisar de un accidente.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.1': "Puedo contar qué experiencia tengo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.2': "Puedo hablar de mí en una entrevista de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.1': "Puedo preguntar cuántas horas trabajo a la semana.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.2': "Puedo preguntar si mi contrato es temporal o fijo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.3': "Puedo decir cuándo puedo y cuándo no puedo trabajar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.1': "Puedo decir qué diplomas y certificados tengo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.2': "Puedo decir qué se me da bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.1': "Puedo decir que mi contrato termina.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.2': "Puedo preguntar si voy a recibir mi paga de vacaciones.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.stage.1': "Puedo preguntar quién es mi tutor de empresa.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Puedo pedir comentarios y un ejemplo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.1': "Puedo decir a qué hora empieza mi turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.2': { m: "Puedo decir que estoy enfermo.", f: "Puedo decir que estoy enferma.", x: "Puedo decir que me encuentro mal." }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'kjn.u.pay.1': "Puedo decir que mi nómina no está bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.2': "Puedo leer palabras como bruto y netto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.1': "Puedo pedir días de permiso.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.2': "Puedo decir que mi hijo está enfermo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.1': "Puedo llamar y decir quién soy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.2': "Puedo pedir que alguien me devuelva la llamada.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.3': "Puedo escribir un mensaje corto al trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.1': "Puedo leer normas como «Roken verboden».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.2': "Puedo preguntar dónde se puede fumar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.3': "Puedo decir que algo no está permitido.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.1': "Puedo entender horas como «kwart over vier».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.2': "Puedo decir cuánto cuesta o pesa algo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.3': "Puedo distinguir números como 13 y 30.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'kjn.u.shop.1': "Puedo preguntar a un cliente si quiere pagar con tarjeta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.2': "Puedo indicar a un cliente el camino en la tienda.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.1': "Puedo preguntar si una respuesta es correcta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.2': "Puedo decir que quiero hablar con una persona.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.1': "Puedo preguntar qué significa una palabra de la orden de trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.2': "Puedo decir qué está terminado y qué no.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.1': "Puedo decir que mi contraseña no funciona.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.2': "Puedo reconocer un correo sospechoso.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.1': "Puedo decir que hay algo que me molesta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.2': "Puedo decir que no con calma al trabajo extra.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.3': "Puedo preguntar qué tengo que hacer primero.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.1': 'Puedo explicar qué va mal.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.2': 'Puedo decir lo que he oído.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.3': 'Puedo pedir a tiempo una conversación.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.1': 'Puedo pedir un ejemplo cuando recibo feedback.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.2': 'Puedo decir con amabilidad lo que puede mejorar.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.3': 'Puedo hacer una pregunta en una reunión de equipo.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.1': "Puedo charlar un poco en la pausa.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.2': "Puedo decir que he cometido un error.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.3': "Puedo decir que algo sobrepasa mis límites.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.sayings.1': "Puedo entender algunas expresiones comunes.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.2': "Puedo decir que algo es muy fácil (een eitje).", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.1': "Puedo decir que tengo derecho a una pausa.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.2': "Puedo decir que quiero presentar una queja.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.1': "Puedo decir que mi pasaporte se queda conmigo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.2': "Puedo preguntar si puedo avisar de algo sin dar mi nombre.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.1': "Puedo decir que mi dirección ha cambiado.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.2': "Puedo preguntar cuánto es el alquiler.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.1': "Puedo decir dónde me duele.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.2': "Puedo pedir una cita con el médico de cabecera.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.1': "Puedo decir que no entiendo una carta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.2': "Puedo decir que no a un estafador por teléfono.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.1': "Puedo contar cómo voy al trabajo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.2': "Puedo preguntar dónde está la parada de autobús.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.1': "Puedo preguntar si puedo votar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.2': "Puedo decir que quiero presentar un recurso.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'kjn.u.warehouse.1': "Puedo entender instrucciones cortas en el almacén.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.2': "Puedo decir dónde está algo: a la izquierda o a la derecha.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.1': "Puedo entender un aviso en la obra.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.2': "Puedo pedir herramientas.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.1': "Puedo decir que hay una avería.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.2': "Puedo decir qué le pasa a un producto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.1': "Puedo preguntar a la persona que cuido si puedo ayudarle.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.care.2': "Puedo comunicar algo a la enfermera.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.1': "Puedo preguntar a los clientes qué desean tomar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.2': "Puedo decir que se lo pregunto al jefe de cocina.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.1': "Puedo preguntar dónde están las cosas de limpieza.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.2': "Puedo avisar a alguien de que el suelo resbala.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.1': "Puedo preguntar en qué fila empiezo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.2': "Puedo preguntar si han fumigado un invernadero.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.1': "Puedo preguntar si todavía hay corriente.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.2': "Puedo decir que un cable está roto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.1': "Puedo decir que un neumático está pinchado.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.2': "Puedo decir que primero el cliente tiene que estar de acuerdo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.1': "Puedo avisar de que estoy de baja y de que vuelvo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.2': "Puedo decir lo que todavía no puedo hacer.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.3': "Puedo decir que al principio trabajo medias jornadas.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.3': "Puedo decir que el trabajo se me hace demasiado.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.3': "Puedo avisar de que tengo un pequeño corte.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.1': "Puedo decir que el cliente no está en casa.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.2': "Puedo pedir a los vecinos que se queden con un paquete.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.3': "Puedo preguntar quién decide mi ruta y mis horarios.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.1': "Puedo pedir la llana dentada o la paleta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.2': "Puedo preguntar por dónde empiezo con los azulejos.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.3': "Puedo decir que la pared todavía no está seca.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "Puedo pedir el serrucho o el taladro de batería.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ruwbouw.2': "Puedo preguntar cómo fijo una tabla.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.1': "Puedo decir que la protección de la máquina está rota.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.2': "Puedo preguntar cada cuánto tomo una muestra.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Puedo preguntar si puedo abrir el cuadro eléctrico.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.install.2': "Puedo decir que un racor pierde agua.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Puedo decir que la caja de piezas está casi vacía.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.montage.2': "Puedo preguntar cuánto hay que apretar un perno.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Puedo decir que hay moho en una planta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kweek.2': "Puedo preguntar si un tomate está bastante maduro.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.1': "Puedo decir que el testigo está encendido.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.2': "Puedo preguntar cuánto aceite hay que echar.", // nieuw, nalezen // nagelezen AI 28 nov
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Puedo decir que la hierba está demasiado mojada.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.mowing.2': "Puedo preguntar qué ramas hay que quitar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.1': "Puedo decir que hay cristales rotos.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.2': "Puedo preguntar si puedo cruzar.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.1': "Puedo saludar y ayudar a un visitante.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.2': "Puedo preguntar para quién es un paquete.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.1': "Puedo avisar de una avería.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.2': "Puedo preguntar adónde tiene que ir un escritorio.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.1': "Puedo pedir a alguien que me enseñe su identificación.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.2': "Puedo decir por la radio lo que veo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.1': "Puedo llamar al 112 y decir qué pasa.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.2': "Puedo hablar con calma a un cliente enfadado.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.1': "Puedo decir que en la cámara frigorífica hace demasiado calor.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.2': "Puedo preguntar si lleva frutos secos.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.1': "Puedo decir que la etiqueta no está bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.2': "Puedo preguntar cuánto tiene que ir en una tarrina.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.1': "Puedo ayudar al conductor a dar marcha atrás.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.2': "Puedo decir que un contenedor con ruedas pesa demasiado.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.1': "Puedo decirle a un visitante dónde va su basura.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.2': "Puedo decir que la prensa está atascada.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.1': "Puedo decir que voy a cambiar a un niño.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.2': "Puedo preguntar si un niño ya está dormido.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.1': "Puedo contarle a un padre o una madre cómo ha ido el día.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.2': "Puedo preguntar quién viene a recoger a un niño.", // nieuw, nalezen // nagelezen AI 28 nov
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Puedo preguntar en qué fase estoy.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.uitzend.2': "Puedo preguntar para qué es un descuento en mi sueldo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.1': "Puedo decir que un inodoro está atascado.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.2': "Puedo preguntar cuánto producto va en el cubo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.1': "Puedo preguntar al jefe de cocina cómo cortar algo.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.2': "Puedo preguntar a un cliente si quiere pagar por separado.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.1': "Puedo preguntar a un cliente qué quiere ponerse.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.2': "Puedo contarle a la enfermera lo que he visto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.1': "Puedo pedirle el tique a un cliente.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.2': "Puedo decir que la tienda cierra pronto.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "Puedo reconocer algunas palabras sobre las señales de seguridad y el fuego.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safework.2': "Puedo preguntar si un producto es tóxico.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'kjn.u.process.1': "Puedo decir que la presión está demasiado alta.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.2': "Puedo contar en el relevo lo que ha pasado.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'kjn.u.firstday.3': "Puedo pedir que alguien me lo enseñe otra vez.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.3': "Puedo decir que me tratan de forma diferente.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.3': "Puedo pedir un plan de pagos.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.3': "Puedo decir que no conduzco una carretilla retráctil sin formación.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.3': "Puedo preguntar cuánto hay que echar de una materia prima.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
