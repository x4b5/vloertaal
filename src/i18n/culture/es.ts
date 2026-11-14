import type { CultureTranslation } from './types';

const t: CultureTranslation = {
  ui: {
    cultureBadge: 'Así funciona aquí',
    whatDoYouDo: '¿Qué haces?',
    whatDoYouSay: '¿Qué dices?',
    whatIsRight: '¿Qué es correcto?',
    sayThis: 'Dilo así',
    goodChoice: '¡Buena elección!',
    otherChoice: 'Aquí normalmente se hace de otra forma',
    cultureTips: 'Consejos para el trabajo',
    cultureTipsHint: 'Cómo suelen ser las cosas en un trabajo en los Países Bajos. Toca un consejo para leerlo otra vez.',
  },
  gloss: {
    'c.je': '¿“Je” o “u”?',
    'c.je.b': 'En el trabajo, la mayoría de la gente se dice “je”, muchas veces también al jefe. Si tienes dudas, empieza con “u” y escucha lo que hacen los demás. Aquí decir “je” no es de mala educación.',
    'c.je.p': '¿Puedo decirte “je”?',
    'c.je.s': 'Tu nueva encargada dice: “Zeg maar je, hoor!” ¿Qué quiere decir?',
    'c.je.o1': 'Quiere que le digas “je”.',
    'c.je.o2': 'Te pide que digas algo.', // nagelezen (2e lezing)
    'c.je.o3': 'Quiere que hables con más educación.', // nagelezen (2e lezing)
    'c.je.w': '“Zeg maar je” es algo amable: quiere menos distancia. En muchos trabajos en los Países Bajos es normal decir “je” al encargado.',
    'c.names': 'El nombre de pila y un apretón de manos',
    'c.names.b': 'El primer día, da un apretón de manos corto, mira a la persona y di tu nombre. Los compañeros y los jefes normalmente se llaman por el nombre de pila.',
    'c.names.p': 'Hola, soy Ali. Soy nuevo aquí.',
    'c.names.s': 'Un compañero se acerca a ti: “Hoi, ik ben Mark.” ¿Qué haces?',
    'c.names.o1': 'Le das la mano y dices tu nombre.',
    'c.names.o2': 'Asientes, sonríes y esperas a que te pregunten.', // nagelezen (2e lezing)
    'c.names.o3': 'Le das la mano y lo llamas “meneer” (señor).', // nagelezen (2e lezing)
    'c.names.w': 'Presentarte en pocas palabras con tu nombre es el comienzo normal. Así los compañeros te recuerdan y te invitan a ir con ellos.',
    'c.arrive': 'Tu primer día: adónde ir',
    'c.arrive.b': 'El primer día, ve primero a la recepción o a la entrada principal. Di tu nombre, tu agencia si tienes una, y a quién tienes que ver. Muchas empresas te dan un buddy: a esa persona le puedes preguntar todo.',
    'c.arrive.p': 'Buenos días, soy Ali. Empiezo hoy. ¿Con quién tengo que hablar?',
    'c.arrive.s': 'Son las 6:45 de tu primer día. La puerta está cerrada. Hay un portero automático. ¿Qué haces?',
    'c.arrive.o1': 'Llamas, dices tu nombre y que empiezas hoy.',
    'c.arrive.o2': 'Esperas en la puerta hasta que sale alguien.',
    'c.arrive.o3': 'Das la vuelta al edificio para buscar otra puerta.',
    'c.arrive.w': 'El portero automático está para las visitas y los trabajadores nuevos. Si dices quién eres, pueden llamar a la persona correcta.',
    'c.ask': 'Hacer preguntas es bueno',
    'c.ask.b': 'Hacer una pregunta muestra que quieres hacer bien el trabajo. Decir que sí con la cabeza cuando no entiendes puede llevar a errores o accidentes. Volver a preguntar es totalmente normal.',
    'c.ask.p': 'Perdón, no lo entiendo. ¿Me lo explicas otra vez?',
    'c.ask.s': 'Tu encargado te explica una tarea muy rápido. No lo has entendido. ¿Qué haces?',
    'c.ask.o1': 'Pides que te lo expliquen otra vez.', // nagelezen (2e lezing)
    'c.ask.o2': 'Dices que sí con la cabeza e intentas adivinar.',
    'c.ask.o3': 'Pides perdón por tu neerlandés y empiezas a trabajar.', // nagelezen (2e lezing)
    'c.ask.w': 'Aquí los encargados esperan preguntas. Es mejor preguntar dos veces que cometer un error.', // nieuw, nalezen
    'c.gear': 'Las normas de seguridad son para todos',
    'c.gear.b': 'Las normas sobre cascos, zapatos y guantes no son una sugerencia: todos las cumplen, también el jefe. Tu empresa te tiene que dar gratis el equipo de protección que necesitas. Un equipo que no te queda bien no te protege bien. Así que pide tu talla: “Heb je dit ook in mijn maat?”',
    'c.gear.p': 'Mis guantes están rotos. ¿Dónde consigo unos nuevos?',
    'c.gear.s': 'Tus guantes están rotos. ¿Qué haces?',
    'c.gear.o1': 'Pides guantes nuevos a tu encargado.',
    'c.gear.o2': 'Sigues trabajando sin guantes.',
    'c.gear.o3': 'Compras guantes nuevos con tu dinero sin decir nada.',
    'c.gear.w': 'El equipo de protección es responsabilidad de la empresa. Pedirlo es normal y muestra que te tomas en serio la seguridad.',
    'c.unsafe': 'Dilo cuando no es seguro',
    'c.unsafe.b': 'Si algo es peligroso, dilo enseguida, también a tu jefe. Puedes parar un trabajo que de verdad no es seguro. Avisa de los accidentes y de los casi accidentes, aunque sean pequeños.',
    'c.unsafe.p': '¡Para! Esto no es seguro.',
    'c.unsafe.s': 'Un palé está apilado demasiado alto y casi se cae. Nadie se ha hecho daño. ¿Qué haces?',
    'c.unsafe.o1': 'Avisas a tus compañeros y se lo dices a tu encargado.',
    'c.unsafe.o2': 'No dices nada, porque no ha pasado nada.',
    'c.unsafe.o3': 'Arreglas tú el palé y no se lo dices a nadie.', // nieuw, nalezen
    'c.unsafe.w': 'Un casi accidente es un aviso. Contarlo ayuda a evitar un accidente de verdad. Tu empresa no te puede castigar por avisar.',
    'c.alarm': 'Suena la alarma: para y sal fuera', // nieuw, nalezen
    'c.alarm.b': 'El primer día, pregunta dónde están las salidas de emergencia y el punto de encuentro. Cuando suene la alarma, deja de trabajar enseguida. Deja tus cosas y sal fuera por la ruta de evacuación. Usa la escalera, nunca el ascensor. En el punto de encuentro cuentan quién está fuera, así que quédate allí. Sal también cuando creas que es solo un simulacro.', // nieuw, nalezen
    'c.alarm.p': { m: 'Soy nuevo. ¿Dónde está el punto de encuentro?', f: 'Soy nueva. ¿Dónde está el punto de encuentro?', x: 'Soy nuevo/a. ¿Dónde está el punto de encuentro?' }, // nieuw, nalezen
    'c.alarm.s': 'Suena la alarma de incendio. Casi has terminado un pedido. ¿Qué haces?', // nieuw, nalezen
    'c.alarm.o1': 'Paras enseguida y vas al punto de encuentro.', // nieuw, nalezen
    'c.alarm.o2': 'Primero terminas el pedido, luego sales.', // nieuw, nalezen
    'c.alarm.o3': 'Primero coges el abrigo y el móvil de tu taquilla.', // nieuw, nalezen
    'c.alarm.w': 'El humo se extiende rápido, por eso sales enseguida. Tus cosas pueden esperar. En el punto de encuentro cuentan a todos: así nadie tiene que buscarte dentro.', // nieuw, nalezen
    'c.accident': 'Avisa de cada accidente',
    'c.accident.b': 'Cuéntale cada accidente, también uno pequeño, a tu encargado o al BHV’er (la persona de primeros auxilios de la empresa). ¿Trabajas a través de una agencia? Avisa también a la agencia. En una emergencia, llama primero al 112. La empresa donde pasó el accidente tiene que avisar de un accidente grave a la Nederlandse Arbeidsinspectie (también si trabajas a través de una agencia): cuando alguien muere, queda con lesiones para toda la vida o tiene que quedarse en el hospital. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.accident.p': 'Mi compañero está herido. ¿Dónde está la persona de primeros auxilios?',
    'c.accident.s': 'Te haces daño en la espalda al levantar algo. Tienes miedo de perder tu trabajo. ¿Qué haces?',
    'c.accident.o1': 'Se lo dices a tu encargado el mismo día.', // nagelezen (2e lezing)
    'c.accident.o2': 'No dices nada, para no perder tu trabajo.',
    'c.accident.o3': 'Esperas a ver si el dolor se va solo.',
    'c.accident.w': 'Avisa el mismo día, también si parece poca cosa: el dolor puede empeorar más tarde. Tu empresa no te puede castigar por avisar. ¿Trabajas a través de una agencia? Díselo también a la agencia.', // nagelezen (2e lezing)
    'c.notyet': '¿Todavía no lo has aprendido? Dilo',
    'c.notyet.b': 'La empresa donde trabajas te tiene que explicar cómo hacer tu trabajo de forma segura. No uses una máquina o una carretilla elevadora si nadie te ha enseñado. Decir “Dit heb ik nog niet geleerd” aquí es normal: muestra que trabajas de forma segura.',
    'c.notyet.p': 'Esto todavía no lo he aprendido. ¿Me enseñas cómo se hace?',
    'c.notyet.s': 'Una mañana con mucho trabajo. Tu encargado dice: “Pak jij even de heftruck? Het is makkelijk.” Nunca has conducido una carretilla elevadora. ¿Qué haces?',
    'c.notyet.o1': 'Dices que no lo has aprendido. Pides que te enseñen.',
    'c.notyet.o2': 'Conduces despacio y con cuidado, solo esta vez.',
    'c.notyet.o3': 'Dices “ja” y esperas que salga bien.',
    'c.notyet.w': 'Conducir una carretilla elevadora sin formación es peligroso, para ti y para los demás. Pedir formación u otro trabajo es normal, también cuando hay mucho trabajo.',
    'c.direct': 'Ser directo no es de mala educación',
    'c.direct.b': 'Los compañeros en los Países Bajos muchas veces dicen las cosas de forma muy directa, como “Dat is fout” o “Doe het zo”. Normalmente no lo dicen con mala intención. Tú también puedes hablar de forma directa, siempre que sigas siendo amable.',
    'c.direct.p': 'De acuerdo, ¿entonces cómo se hace?',
    'c.direct.s': 'Un compañero dice: “Nee, dat is fout. Die doos moet daar.” ¿Qué haces?',
    'c.direct.o1': 'Preguntas cómo se hace y mueves la caja.',
    'c.direct.o2': 'Pides perdón muchas veces: tu compañero está enfadado.', // nagelezen (2e lezing)
    'c.direct.o3': 'No dices nada y dejas la caja donde está.',
    'c.direct.w': 'Un comentario directo es sobre el trabajo, no sobre ti. Preguntar “hoe moet het dan?” muestra que quieres aprender.',
    'c.limits': 'Dilo cuando pesa demasiado',
    'c.limits.b': 'Nadie espera que levantes todo sin ayuda. Decir “dit is te zwaar” y pedir ayuda o una herramienta es inteligente, no es debilidad. Protege tu espalda.',
    'c.limits.p': 'Esta caja pesa demasiado. ¿Me ayudas un momento?',
    'c.limits.s': 'Tienes que levantar una caja que pesa demasiado para ti. ¿Qué haces?',
    'c.limits.o1': 'Pides ayuda a un compañero o usas un carro.',
    'c.limits.o2': 'La levantas de todas formas, para que nadie piense que eres débil.',
    'c.limits.o3': 'La dejas ahí y no dices nada.',
    'c.limits.w': 'Pedir ayuda es trabajo en equipo normal. Una espalda lesionada cuesta mucho más que un minuto de ayuda.',
    'c.time': 'A tiempo quiere decir un poco antes',
    'c.time.b': 'Llegar a tiempo es muy importante. Mucha gente llega cinco o diez minutos antes de que empiece el turno. Si vas a llegar tarde, manda un mensaje o llama antes de que empiece tu turno, no después.',
    'c.time.p': 'Perdón, el autobús llega tarde. Llego a las ocho.',
    'c.time.s': 'Tu autobús va con retraso y vas a llegar 15 minutos tarde. ¿Qué haces?',
    'c.time.o1': 'Avisas enseguida a tu encargado.', // nagelezen (2e lezing)
    'c.time.o2': 'Lo explicas cuando llegas.',
    'c.time.o3': 'Hoy no vas a trabajar.',
    'c.time.w': 'Avisar pronto deja que el equipo se organice. Llegar tarde sin avisar se ve mucho peor que el retraso mismo.',
    'c.sick': 'Cómo avisar por enfermedad',
    'c.sick.b': 'Llama tú a tu encargado antes de que empiece tu turno, a no ser que tu empresa tenga otra norma. ¿Trabajas a través de una agencia? Avisa también a la agencia. No tienes que decir qué enfermedad tienes. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'c.sick.p': { m: 'Estoy enfermo. Hoy no puedo ir a trabajar.', f: 'Estoy enferma. Hoy no puedo ir a trabajar.', x: 'Estoy enfermo/a. Hoy no puedo ir a trabajar.' }, // x: nieuw, nalezen
    'c.sick.s': 'Te despiertas con fiebre. Tu turno empieza a las 7:00. ¿Qué haces?',
    'c.sick.o1': 'Llamas a tu encargado antes de las 7:00.', // nagelezen (2e lezing)
    'c.sick.o2': 'Pides a un compañero que se lo diga al jefe más tarde.',
    'c.sick.o3': 'Te quedas en casa y llamas mañana.',
    'c.sick.w': 'En la mayoría de los trabajos en los Países Bajos, la norma es avisar tú personalmente y a tiempo. Tu empresa puede preguntar cuánto tiempo va a durar, pero no qué enfermedad es.',
    'c.speakup': 'Di lo que te molesta',
    'c.speakup.b': 'Aquí es normal y se respeta decir con calma cuando algo te molesta. Habla primero con esa persona, en un momento tranquilo. Usa frases con “ik”: “Ik vind het niet fijn dat ...”. Si no ayuda, habla con tu encargado.',
    'c.speakup.p': 'Hay algo que me molesta. ¿Podemos hablar un momento?',
    'c.speakup.s': 'Un compañero siempre te deja a ti el trabajo pesado. Te molesta. ¿Qué haces?',
    'c.speakup.o1': 'Le dices al compañero lo que te molesta.', // nagelezen (2e lezing)
    'c.speakup.o2': 'Te callas y te enfadas cada vez más.',
    'c.speakup.o3': 'Te quejas de él a todos los demás compañeros.',
    'c.speakup.w': 'Los compañeros en los Países Bajos normalmente prefieren oírlo directamente. Decirlo pronto y con calma mantiene una buena relación.',
    'c.no': '“Afspraak is afspraak”',
    'c.no.b': 'Cuando dices “ja”, la gente cuenta con ello: lo acordado es lo acordado. Por eso está bien decir “nee” o “dat lukt niet” cuando no puedes hacer algo. Dilo a tiempo y, si puedes, ofrece otra opción.',
    'c.no.p': 'No, hoy no puedo. Mañana sí.',
    'c.no.s': 'Tu encargado te pregunta si puedes trabajar más horas el sábado. No puedes. ¿Qué haces?',
    'c.no.o1': 'Dices que no y ofreces otro día.', // nagelezen (2e lezing)
    'c.no.o2': 'Dices que sí y luego no vas.',
    'c.no.o3': 'Dices que sí: a un jefe no se le puede decir que no.', // nagelezen (2e lezing)
    'c.no.w': 'Un “nee” claro se respeta. Decir “ja” y no ir rompe mucho más la confianza.',
    'c.task': 'Di cuándo has terminado, pregunta cuando no está claro',
    'c.task.b': 'En los Países Bajos, un encargado muchas veces da una tarea con pocas palabras. Cuando has terminado, lo dices. Decir “ja” cuando no lo has entendido muchas veces lleva a errores. Volver a preguntar, o pedir que te lo enseñen, aquí es normal y no es de mala educación.',
    'c.task.p': '¡Listo! ¿Qué tengo que hacer ahora?',
    'c.task.s': 'Tu encargado te explica una tarea muy rápido. Solo has entendido la mitad. ¿Qué haces?',
    'c.task.o1': 'Pides que te lo enseñen una vez más.', // nagelezen (2e lezing)
    'c.task.o2': 'Empiezas por la mitad que has entendido.', // nagelezen (2e lezing)
    'c.task.o3': 'Esperas a que lo haga un compañero.',
    'c.task.w': 'Volver a preguntar es normal y lleva un minuto. Arreglar un error lleva mucho más. La mayoría de los encargados prefiere enseñarlo dos veces.',
    'c.clear': 'Di primero lo más importante', // nieuw, nalezen
    'c.clear.b': 'En muchos idiomas es educado contar primero toda la historia, y lo importante al final. En el trabajo aquí es al revés. Primero di qué pasa o qué necesitas. Luego da el motivo. Habla con calma y para después de dos o tres frases, para que la otra persona pueda preguntar algo. También en una entrevista de trabajo: primero la respuesta, luego un ejemplo. Hablar despacio aquí no es de mala educación: ayuda a que te entiendan.',
    'c.clear.p': 'Perdón, lo digo otra vez con calma.', // nieuw, nalezen
    'c.clear.s': 'Llegas 20 minutos tarde. Tu encargado pregunta: “Wat is er?” ¿Qué haces?', // nieuw, nalezen
    'c.clear.o1': 'Primero dices que llegas tarde y que lo sientes. Luego dices por qué.', // nieuw, nalezen
    'c.clear.o2': 'Cuentas todo lo que pasó esta mañana, desde el principio.', // nieuw, nalezen
    'c.clear.o3': 'No dices nada y empiezas a trabajar rápido.', // nieuw, nalezen
    'c.clear.w': 'Tu encargado primero quiere saber qué pasa. El motivo viene después. Corto y tranquilo es claro, y aquí también es educado.', // nieuw, nalezen
    'u.teamwork': 'Trabajar juntos',
    'l.speakup': 'Algo me molesta',
    'w.probleem': 'el problema',
    'w.praten': 'hablar',
    'w.nietfijn': 'no agradable',
    'w.eerlijk': 'justo, sincero',
    'w.boos': 'enfadado, enojado',
    'w.samen': 'juntos',
    's.speakup.1': 'Hay algo que me molesta.',
    's.speakup.2': '¿Podemos hablar un momento?',
    's.speakup.3': 'No me parece justo.',
    'd.speakup.q': '¿Pasa algo?',
    'd.speakup.a': 'Sí, hay algo que me molesta.',
    'l.agree': 'Acuerdos y decir que no',
    'w.afspraak': 'el acuerdo (lo que se ha acordado)',
    'w.lukken': 'salir bien, conseguir',
    'w.oneens': 'no estar de acuerdo',
    'w.zaterdag': 'el sábado',
    'w.overwerken': 'hacer horas extra',
    'w.misschien': 'quizás',
    's.agree.1': 'No, hoy no puedo.',
    's.agree.2': 'No estoy de acuerdo contigo.',
    's.agree.3': 'Lo acordado es lo acordado.',
    'd.agree.q': '¿Puedes hacer horas extra el sábado?',
    'd.agree.a': 'No, no puedo. El domingo sí.',
    'l.task': 'Instrucciones de tu encargado',
    'w.taak': 'la tarea',
    'w.eerst': 'primero',
    'w.daarna': 'después',
    'w.afmaken': 'terminar',
    'w.snel': 'rápido',
    'w.bijna': 'casi',
    's.task.1': '¿Qué tengo que hacer primero?',
    's.task.2': 'He terminado esta tarea.',
    's.task.3': '¿Me lo puede enseñar otra vez?',
    'd.task.q': '¿Has terminado?',
    'd.task.a': 'Casi. Cinco minutos más.',
    'l.clear': 'Corto y claro', // nieuw, nalezen
    'w.kort': 'corto, breve', // nieuw, nalezen
    'w.duidelijk': 'claro', // nieuw, nalezen
    'w.belangrijkste': 'lo más importante', // nieuw, nalezen
    'w.rustig': 'tranquilo, con calma', // nieuw, nalezen
    'w.teveel': 'demasiado', // nieuw, nalezen
    'w.vraag': 'la pregunta', // nieuw, nalezen
    's.clear.1': 'Seré breve: la máquina está rota.', // nieuw, nalezen
    's.clear.2': { m: 'Primero lo más importante: estoy enfermo.', f: 'Primero lo más importante: estoy enferma.', x: 'Primero lo más importante: estoy enfermo/a.' }, // nieuw, nalezen
    's.clear.3': 'Perdón, hablo demasiado rápido y demasiado.', // nieuw, nalezen
    'd.clear.q': '¿Está claro?', // nieuw, nalezen
    'd.clear.a': 'Sí. Tengo una pregunta más.', // nieuw, nalezen
    'l.newcolleague': "Ayudar a un compañero nuevo", // nieuw, nalezen
    'w.welkom': "bienvenido", // nieuw, nalezen
    'w.inwerken': "enseñar el trabajo a un compañero nuevo (en los primeros días)", // nieuw, nalezen
    'w.stap': "el paso (una parte pequeña de una tarea)", // nieuw, nalezen
    'w.nadoen': "imitar (hacer lo que alguien te ha enseñado)", // nieuw, nalezen
    'w.geduld': "la paciencia", // nieuw, nalezen
    'w.kast': "el armario", // nieuw, nalezen
    's.newcolleague.1': "¡Te doy la bienvenida! Hoy te enseño el trabajo.", // nieuw, nalezen
    's.newcolleague.2': "Primero mira. Luego lo haces tú igual.", // nieuw, nalezen
    's.newcolleague.3': "Los guantes están en ese armario.", // nieuw, nalezen
    'd.newcolleague.q': "Lo entiendo, creo.", // nieuw, nalezen
    'd.newcolleague.a': "Bien. A ver, enséñamelo.", // nieuw, nalezen
    'c.newcolleague': "Enséñalo, paso a paso", // nieuw, nalezen
    'c.newcolleague.b': "Lo que te costó a ti en tus primeras semanas también le cuesta a un compañero nuevo. Explica el trabajo en pasos pequeños: primero esto, luego aquello. No hables más rápido ni más alto: enséñalo, y deja que lo haga después de ti. No preguntes “Snap je het?”: mucha gente dice que sí, también cuando no lo entiende. Di mejor “Laat eens zien”, y mira. Dile dónde están las cosas, como el baño, el comedor y los guantes. Ten paciencia (geduld): aprender lleva tiempo, para todos.", // nieuw, nalezen
    'c.newcolleague.p': "¡Muy bien! Ahora el siguiente paso.", // nieuw, nalezen
    'c.newcolleague.s': "Le explicas una tarea a un compañero nuevo. Él dice: “Ja, ja, ik snap het.” ¿Qué haces?", // nieuw, nalezen
    'c.newcolleague.o1': "Dices “Laat eens zien,” y miras cómo lo hace.", // nieuw, nalezen
    'c.newcolleague.o2': "Dices “Goed zo,” y vuelves a tu propio trabajo.", // nieuw, nalezen
    'c.newcolleague.o3': "Lo vuelves a explicar todo, más rápido y más alto.", // nieuw, nalezen
    'c.newcolleague.w': "Mucha gente dice “ja”, también cuando no lo ha entendido. Cuando él lo hace delante de ti, ves si funciona. Eso es más rápido que arreglar un error después.", // nieuw, nalezen
    'u.communicate': 'Comunicarse bien', // nieuw, nalezen
    'l.explain': 'Decir qué pasa', // nieuw, nalezen
    'w.ietsmis': 'algo va mal, pasa algo', // nieuw, nalezen
    'w.stilstaan': 'estar parado, haberse parado (una máquina, una cinta)', // nieuw, nalezen
    'w.lampje': 'la luz (de aviso)', // nieuw, nalezen
    'w.komen': 'venir', // nieuw, nalezen
    'w.nodighebben': 'necesitar', // nieuw, nalezen
    'w.meteen': 'enseguida, ahora mismo', // nieuw, nalezen
    's.explain.1': 'La cinta se ha parado. En la línea dos. ¿Puedes venir?', // nieuw, nalezen
    's.explain.2': 'Hay una luz roja encendida en la máquina.', // nieuw, nalezen
    's.explain.3': 'Es peligroso. ¿Puedes venir enseguida?', // nieuw, nalezen
    'd.explain.q': '¿Qué pasa?', // nieuw, nalezen
    'd.explain.a': 'El escáner no funciona. Necesito uno nuevo.', // nieuw, nalezen
    'l.listen': 'Escuchar bien', // nieuw, nalezen
    'w.uitpraten': 'terminar de hablar (dejar que alguien termine)', // nieuw, nalezen
    'w.onderbreken': 'interrumpir', // nieuw, nalezen
    'w.aankijken': 'mirar (a alguien)', // nieuw, nalezen
    'w.bedoelen': 'querer decir', // nieuw, nalezen
    'w.dus': 'entonces (para comprobar lo que has oído)', // nieuw, nalezen
    'w.doorvragen': 'seguir preguntando (hasta que esté claro)', // nieuw, nalezen
    's.listen.1': 'Entonces, ¿primero contar las cajas y luego empaquetar?', // nieuw, nalezen
    's.listen.2': '¿Qué quieres decir con esa palabra?', // nieuw, nalezen
    's.listen.3': 'Perdón, termina de hablar.', // nieuw, nalezen
    'd.listen.q': 'Mañana ya empiezas a las cuatro.', // nieuw, nalezen
    'd.listen.a': '¿En serio? ¿O era una broma?', // nieuw, nalezen
    'l.calm': 'Mantener la calma', // nieuw, nalezen
    'w.nadenken': 'pensar (en algo)', // nieuw, nalezen
    'w.ademhalen': 'respirar', // nieuw, nalezen
    'w.oplossen': 'resolver, arreglar', // nieuw, nalezen
    'w.druk': 'con mucho trabajo (mucho que hacer)', // nieuw, nalezen
    'w.straks': 'luego (hoy), dentro de un rato', // nieuw, nalezen
    'w.misverstand': 'el malentendido', // nieuw, nalezen
    's.calm.1': 'Quiero arreglarlo con calma.', // nieuw, nalezen
    's.calm.2': '¿Puedo pensarlo un momento?', // nieuw, nalezen
    's.calm.3': '¿Podemos hablar luego?', // nieuw, nalezen
    'd.calm.q': '¿Por qué esto todavía no está hecho?', // nieuw, nalezen
    'd.calm.a': 'Perdón, hay mucho trabajo. ¿Qué va primero?', // nieuw, nalezen
    'l.talkintime': 'Hablarlo a tiempo', // nieuw, nalezen
    'w.gesprek': 'la conversación, la charla', // nieuw, nalezen
    'w.bespreken': 'hablar de algo, comentar', // nieuw, nalezen
    'w.zorgenmaken': 'preocuparse', // nieuw, nalezen
    'w.oplossing': 'la solución', // nieuw, nalezen
    'w.ineens': 'de repente, de golpe', // nieuw, nalezen
    'w.wegblijven': 'no presentarse (no ir al trabajo)', // nieuw, nalezen
    's.talkintime.1': 'Hay algo que me molesta. ¿Tienes un momento?', // nieuw, nalezen
    's.talkintime.2': 'Quiero hablar de algo contigo.', // nieuw, nalezen
    's.talkintime.3': 'Estoy pensando en dejar el trabajo. ¿Podemos hablar primero?', // nieuw, nalezen
    'd.talkintime.q': '¿Tienes un momento? Hay algo que me molesta.', // nieuw, nalezen
    'd.talkintime.a': 'Claro. ¿Qué pasa?', // nieuw, nalezen
    'l.reachable': 'Estar localizable', // nieuw, nalezen
    'w.opnemen': 'contestar (el teléfono), atender', // nieuw, nalezen
    'w.gemisteoproep': 'la llamada perdida', // nieuw, nalezen
    'w.voicemail': 'el buzón de voz', // nieuw, nalezen
    'w.beltegoed': 'el saldo del teléfono (prepago)', // nieuw, nalezen
    'w.bereik': 'la cobertura (del teléfono)', // nieuw, nalezen
    'w.onbekend': 'desconocido (un número desconocido)', // nieuw, nalezen
    's.reachable.1': 'Mi neerlandés todavía no es bueno. ¿Puede hablar despacio?', // nieuw, nalezen
    's.reachable.2': '¿Me lo puede mandar también por mensaje?', // nieuw, nalezen
    's.reachable.3': 'Tengo un número nuevo.', // nieuw, nalezen
    'd.reachable.q': 'Buenos días, le llamamos de planificación.', // nieuw, nalezen
    'd.reachable.a': 'Buenos días. ¿Me ha llamado? Perdón, no pude contestar.', // nieuw, nalezen
    'c.explain': 'Qué pasa, dónde y qué necesitas', // nieuw, nalezen
    'c.explain.b': 'Cuando algo va mal en el trabajo, dilo en tres pasos. Primero qué pasa: “De band staat stil.” Luego dónde: “Bij lijn twee.” Luego qué necesitas: “Kun je komen?” Así la otra persona sabe qué hacer, sin muchas preguntas. ¿No sabes la palabra? Señálalo. ¿Es peligroso? Dilo primero: “Het is gevaarlijk”. ¿Un accidente? Primero busca ayuda (más en la lección “Avisar de un accidente”).', // nieuw, nalezen
    'c.explain.p': '¿Puedes venir a echar un vistazo?', // nieuw, nalezen
    'c.explain.s': 'El escáner de tu puesto deja de funcionar. Llamas a tu jefe de equipo. ¿Qué dices?', // nieuw, nalezen
    'c.explain.o1': '“De scanner is kapot. Bij gang vier. Kun je komen?”', // nieuw, nalezen
    'c.explain.o2': '“Hallo, ik heb een probleem.” Y luego esperas.', // nieuw, nalezen
    'c.explain.o3': '“Sorry, sorry! Het is niet mijn schuld!”', // nieuw, nalezen
    'c.explain.w': 'Ahora tu jefe de equipo sabe qué pasa, dónde, y qué necesitas. Nadie tiene que hacer primero tres preguntas.', // nieuw, nalezen
    'c.listen': 'Primero escucha, luego comprueba', // nieuw, nalezen
    'c.listen.b': 'Deja que la otra persona termine de hablar (uitpraten) antes de contestar. Mira a la persona que te habla: aquí, eso muestra que estás escuchando. En muchos países no se mira al jefe a los ojos. Es una señal de respeto. Aquí, mirarle de vez en cuando es educado. Cuando la otra persona ha terminado, repite lo que has oído: “Dus eerst …, en dan …?”. ¿No sabes bien qué significa una palabra? Pregunta: “Wat bedoel je met …?” Algunos compañeros hacen bromas con la cara seria. ¿Tienes dudas? Pregunta: “Was dat een grapje?”',
    'c.listen.p': 'Espera, quiero entenderlo bien.', // nieuw, nalezen
    'c.listen.s': 'Tu encargada te explica una tarea nueva. Quieres decir algo, pero ella todavía está hablando. ¿Qué haces?', // nieuw, nalezen
    'c.listen.o1': 'Dejas que termine. Luego repites lo que has oído.', // nieuw, nalezen
    'c.listen.o2': 'Empiezas a hablar enseguida, para no olvidarlo.', // nieuw, nalezen
    'c.listen.o3': 'Dices que sí a todo y no preguntas nada.', // nieuw, nalezen
    'c.listen.w': 'Cuando ella ha terminado, conoces toda la tarea. Repetirlo muestra que has escuchado, y ella todavía te puede corregir.', // nieuw, nalezen
    'c.calm': 'Mantén la calma, también cuando es difícil', // nieuw, nalezen
    'c.calm.b': 'Todo el mundo se enfada a veces, también en el trabajo. ¿Alguien se enfada contigo? Primero escucha, y mantén la calma. No tienes que contestar enseguida: “Mag ik even nadenken?”. ¿Te estás enfadando tú? Respira despacio, y di: “Kunnen we straks praten?” Luego habláis, cuando haya calma. ¿Hay mucho trabajo? Pregunta qué hay que hacer primero. Gritar, amenazar o empujar nunca está bien en el trabajo. Di que pare, y avisa a tu encargado (más en las lecciones “Respeto para todos” y “Pasarse de la raya”).', // nieuw, nalezen
    'c.calm.p': 'Creo que es un malentendido.', // nieuw, nalezen
    'c.calm.s': 'Un compañero está enfadado: el palé está en el sitio equivocado. Crees que no fuiste tú. ¿Qué haces?', // nieuw, nalezen
    'c.calm.o1': 'Mantienes la calma, escuchas y luego dices lo que sabes.', // nieuw, nalezen
    'c.calm.o2': 'Te enfadas tú también, y lo dices más alto.', // nieuw, nalezen
    'c.calm.o3': 'Te vas y ya no le hablas.', // nieuw, nalezen
    'c.calm.w': 'Cuando tú mantienes la calma, la otra persona muchas veces también se calma. Así podéis averiguar qué ha pasado, y resolverlo entre los dos.', // nieuw, nalezen
    'c.talkintime': 'Háblalo cuando todavía es pequeño', // nieuw, nalezen
    'c.talkintime.b': 'Un problema pequeño se hace grande si no hablas de él. Entonces de repente te enfadas, o de repente lo dejas. Habla a tiempo: con tu encargado, con un compañero o con una persona de confianza (vertrouwenspersoon), si la hay. Pide un momento: “Heb je even tijd?” Di en pocas palabras cuál es el problema y qué quieres. ¿Estás pensando en dejar el trabajo? Habla primero. Muchas veces hay una solución, como otro turno u otra tarea. Si te vas tú por tu cuenta, puedes perder tu prestación (uitkering), y muchas veces hay un plazo de preaviso (opzegtermijn). Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.', // nieuw, nalezen
    'c.talkintime.p': '¿Podemos buscar una solución en común?', // nieuw, nalezen
    'c.talkintime.s': 'Desde hace semanas tu horario es un problema. Hoy sientes mucha rabia y quieres dejarlo ya mismo. ¿Qué haces?', // nieuw, nalezen
    'c.talkintime.o1': 'Primero pides a tu encargado una conversación.', // nieuw, nalezen
    'c.talkintime.o2': 'Te vas ahora y no vuelves.', // nieuw, nalezen
    'c.talkintime.o3': 'No dices nada y sigues trabajando.', // nieuw, nalezen
    'c.talkintime.w': 'Hablar a tiempo hace que un problema siga siendo pequeño. Muchas veces hay una solución, y así muchas veces conservas tu trabajo y tus ingresos.', // nieuw, nalezen
    'c.reachable': 'Contesta, o devuelve la llamada el mismo día', // nieuw, nalezen
    'c.reachable.b': 'Las agencias y las empresas suelen llamar cuando hay trabajo. Muchas veces el trabajo es para la primera persona que contesta, o que devuelve la llamada. ¿Has perdido una llamada? Devuelve la llamada el mismo día. ¿No tienes el teléfono en el trabajo? Llama en tu pausa. Escucha tu buzón de voz, y ten algo de saldo (beltegoed) en el teléfono. ¿Te cuesta entender por teléfono? Dilo, y pregunta: “Kunt u het ook appen?”. ¿Alguien te pide dinero o códigos? Cuelga (más en la lección “Cuidado con las estafas”). ¿Tienes un número nuevo? Pásalo a tu trabajo, a la agencia y al ayuntamiento (gemeente).', // nieuw, nalezen
    'c.reachable.p': 'Le llamo en mi pausa.', // nieuw, nalezen
    'c.reachable.s': 'En tu pausa ves una llamada perdida de la agencia. ¿Qué haces?', // nieuw, nalezen
    'c.reachable.o1': 'Devuelves la llamada ahora, en tu pausa.', // nieuw, nalezen
    'c.reachable.o2': 'Esperas a que te vuelvan a llamar.', // nieuw, nalezen
    'c.reachable.o3': 'Devuelves la llamada la semana que viene, cuando tienes tiempo libre.', // nieuw, nalezen
    'c.reachable.w': 'Las agencias suelen llamar cuando hay trabajo. Si devuelves la llamada el mismo día, muestras que lo quieres, y quizás te dan el trabajo.', // nieuw, nalezen
    'u.feedback': 'Feedback y reuniones de equipo', // nieuw, nalezen
    'l.getfeedback': 'Recibir feedback', // nieuw, nalezen
    'w.tip': 'el consejo (un consejo corto)', // nieuw, nalezen
    'w.verbeterpunt': 'el punto de mejora (lo que puede ir mejor)', // nieuw, nalezen
    'w.goedbedoeld': 'con buena intención (para ayudarte)', // nieuw, nalezen
    'w.kritiek': 'la crítica (lo que a alguien no le parece bien)', // nieuw, nalezen
    'w.normaal': 'normal', // nieuw, nalezen
    'w.positief': 'positivo (sobre lo que va bien)', // nieuw, nalezen
    's.getfeedback.1': 'Gracias, es bueno saberlo.', // nieuw, nalezen
    's.getfeedback.2': '¿Puedes darme un ejemplo?', // nieuw, nalezen
    's.getfeedback.3': '¿Qué puedo hacer mejor?', // nieuw, nalezen
    'd.getfeedback.q': '¿Te puedo dar un poco de feedback?', // nieuw, nalezen
    'd.getfeedback.a': 'Sí, por favor. Quiero hacerlo bien.', // nieuw, nalezen
    'l.givefeedback': 'Dar feedback', // nieuw, nalezen
    'w.dichtplakken': 'cerrar con cinta', // nieuw, nalezen
    'w.netjes': 'ordenado, bien hecho', // nieuw, nalezen
    'w.scheef': 'torcido, no recto', // nieuw, nalezen
    'w.vriendelijk': 'amable', // nieuw, nalezen
    'w.concreet': 'concreto (con un ejemplo claro)', // nieuw, nalezen
    'w.ondervierogen': 'a solas (solo entre los dos)', // nieuw, nalezen
    's.givefeedback.1': 'Eso lo haces bien.', // nieuw, nalezen
    's.givefeedback.2': '¿Puedes cerrar también las cajas con cinta?', // nieuw, nalezen
    's.givefeedback.3': 'Veo que las cajas están torcidas.', // nieuw, nalezen
    'd.givefeedback.q': '¿Qué te parece mi trabajo?', // nieuw, nalezen
    'd.givefeedback.a': '¡Muy ordenado! Solo que las cajas están torcidas.', // nieuw, nalezen
    'l.meeting': 'Hablar en una reunión de equipo', // nieuw, nalezen
    'w.werkoverleg': 'la reunión de equipo (sobre el trabajo)', // nieuw, nalezen
    'w.beurt': 'el turno (tu momento para hablar)', // nieuw, nalezen
    'w.idee': 'la idea', // nieuw, nalezen
    'w.mening': 'la opinión (lo que piensas de algo)', // nieuw, nalezen
    'w.handopsteken': 'levantar la mano', // nieuw, nalezen
    'w.agenda': 'el orden del día (la lista de puntos de la reunión)', // nieuw, nalezen
    's.meeting.1': '¿Puedo decir algo?', // nieuw, nalezen
    's.meeting.2': 'Tengo una pregunta sobre el horario.', // nieuw, nalezen
    's.meeting.3': 'Tengo una idea.', // nieuw, nalezen
    'd.meeting.q': '¿Alguien tiene alguna pregunta?', // nieuw, nalezen
    'd.meeting.a': 'Sí. ¿Cuándo sale el nuevo horario?', // nieuw, nalezen
    'c.getfeedback': 'El feedback es sobre tu trabajo', // nieuw, nalezen
    'c.getfeedback.b': 'El feedback es lo que alguien dice sobre tu trabajo: lo que va bien, y lo que puede mejorar. Es sobre tu trabajo, no sobre ti. Aquí, en el trabajo, el feedback es normal y es para ayudar. ¿No está claro qué tienes que hacer de otra forma? Pide un ejemplo. Primero escucha, y no te defiendas enseguida. Luego da las gracias, y pruébalo. También puedes pedir feedback tú: “Wat kan ik beter doen?”', // nieuw, nalezen
    'c.getfeedback.p': 'Gracias. ¿Puedes darme un ejemplo?', // nieuw, nalezen
    'c.getfeedback.s': 'Tu encargada mira tu trabajo y dice: “Dit kan beter.” No sabes qué quiere decir. ¿Qué haces?', // nieuw, nalezen
    'c.getfeedback.o1': 'Das las gracias, y pides un ejemplo.', // nieuw, nalezen
    'c.getfeedback.o2': 'Dices que de verdad lo hiciste lo mejor que pudiste.', // nieuw, nalezen
    'c.getfeedback.o3': 'Dices que sí con la cabeza, y lo vuelves a hacer igual.', // nieuw, nalezen
    'c.getfeedback.w': 'El feedback es para ayudarte. Un ejemplo muestra lo que ella quiere. Y un “gracias” muestra que escuchas.', // nieuw, nalezen
    'c.givefeedback': 'Dar feedback: primero lo bueno', // nieuw, nalezen
    'c.givefeedback.b': '¿Quieres decir algo sobre el trabajo de un compañero? Primero di lo que va bien. Luego di con amabilidad y claridad lo que puede mejorar, con un ejemplo. Dilo en un buen momento, a esa persona a solas, no cuando están todos. Di lo que ves, no lo que piensas de la persona: “Ik zie dat ...”. Sé amable: quieres ayudar, no ganar.', // nieuw, nalezen
    'c.givefeedback.p': 'Eso lo haces bien. ¿Puedes cerrar también las cajas con cinta?', // nieuw, nalezen
    'c.givefeedback.s': 'Un compañero nuevo se olvida de cerrar las cajas con cinta. Estáis todos en el comedor. ¿Qué haces?', // nieuw, nalezen
    'c.givefeedback.o1': 'Más tarde, a solas: primero lo que va bien, luego las cajas.', // nieuw, nalezen
    'c.givefeedback.o2': 'Le dices delante de todos que está mal.', // nieuw, nalezen
    'c.givefeedback.o3': 'No dices nada, y cierras tú sus cajas.', // nieuw, nalezen
    'c.givefeedback.w': 'A solas, él puede escuchar sin sentir vergüenza. Si primero dices lo que va bien, él escucha mejor el resto.', // nieuw, nalezen
    'c.meeting': 'Tu voz cuenta en la reunión', // nieuw, nalezen
    'c.meeting.b': 'Muchos equipos tienen una reunión corta sobre el trabajo (het werkoverleg). Allí tu opinión es bienvenida, también si tu neerlandés no es perfecto. Una pregunta también es una buena aportación: quizás otros también quieren saberlo. Espera tu turno, y deja que la otra persona termine. Luego levanta la mano, o di: “Mag ik iets zeggen?”. ¿No te atreves a decirlo delante del grupo? Díselo a tu encargado después de la reunión.', // nieuw, nalezen
    'c.meeting.p': '¿Puedo decir algo? Tengo una idea.', // nieuw, nalezen
    'c.meeting.s': 'En la reunión de equipo, tu encargada explica el nuevo horario. No entiendes cuándo empieza tu turno. ¿Qué haces?', // nieuw, nalezen
    'c.meeting.o1': 'Cuando ella deja de hablar, haces tu pregunta.', // nieuw, nalezen
    'c.meeting.o2': 'No dices nada, para no hacer perder el tiempo.', // nieuw, nalezen
    'c.meeting.o3': 'Lo preguntas enseguida, mientras ella todavía está hablando.', // nieuw, nalezen
    'c.meeting.w': 'Una pregunta es una buena aportación: quizás otros tampoco lo han entendido. Si esperas tu turno, todos lo pueden oír.', // nieuw, nalezen
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': "¿Falta un artículo? Dilo", // nieuw, nalezen
    'c.picking.b': "¿El hueco está vacío, o el artículo no está? No cojas otro artículo que se parece: entonces el cliente recibe lo que no es. Díselo a tu jefe de equipo, o avísalo en el escáner. Mira el número de la pegatina, no solo el color o la foto. Trabajar con exactitud es más importante que trabajar rápido.", // nieuw, nalezen
    'c.picking.p': "Falta este artículo. ¿Qué tengo que hacer?", // nieuw, nalezen
    'c.picking.s': "El hueco está vacío. En el hueco de al lado hay un artículo que es casi igual. ¿Qué haces?", // nieuw, nalezen
    'c.picking.o1': "Avisas de que falta el artículo.", // nieuw, nalezen
    'c.picking.o2': "Coges el otro artículo: parece igual.", // nieuw, nalezen
    'c.picking.o3': "Te saltas el artículo y no dices nada.", // nieuw, nalezen
    'c.picking.w': "Un artículo equivocado vuelve, y eso cuesta más tiempo que preguntar. Si avisas, alguien puede llenar el hueco o cambiar el pedido.", // nieuw, nalezen
    'c.loading': "Nunca detrás de un camión que va marcha atrás", // nieuw, nalezen
    'c.loading.b': "El conductor no puede ver todo lo que hay detrás del camión. Nunca pases por detrás de un camión que va marcha atrás, y no te pongas entre el camión y la puerta. Espera hasta que el camión esté parado y el conductor te haya visto. ¿Falta un palé o está roto cuando descargas? Dilo antes de que el conductor se vaya.", // nieuw, nalezen
    'c.loading.p': "Espera un momento. El camión va marcha atrás.", // nieuw, nalezen
    'c.loading.s': "Un camión va marcha atrás hacia la puerta. Quieres cruzar rápido por detrás. ¿Qué haces?", // nieuw, nalezen
    'c.loading.o1': "Esperas hasta que el camión esté parado.", // nieuw, nalezen
    'c.loading.o2': { m: "Pasas corriendo por detrás: eres lo bastante rápido.", f: "Pasas corriendo por detrás: eres lo bastante rápida.", x: "Pasas corriendo por detrás: corres lo bastante rápido." }, // nieuw, nalezen
    'c.loading.o3': "Pasas por detrás y saludas al conductor con la mano.", // nieuw, nalezen
    'c.loading.w': "Detrás de un camión hay un sitio que el conductor no puede ver. Esperar cuesta un minuto. Un accidente ahí es muy grave.", // nieuw, nalezen
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto': "Comprueba si lo haces bien", // nieuw, nalezen
    'c.howto.b': "¿No sabes bien cómo hay que hacer una tarea? Pregunta cómo, o pide a un compañero que mire tu trabajo un momento. Comprobar es normal aquí, también después de una semana o un mes. Adivinar cuesta más tiempo que preguntar: si hay un error, hay que hacerlo otra vez. “Doe ik het zo goed?” es una pregunta que a los compañeros les gusta oír.", // nieuw, nalezen
    'c.howto.p': "¿Miras un momento si está bien?", // nieuw, nalezen
    'c.howto.s': { m: "Haces una tarea nueva. No estás seguro de hacerla bien. ¿Qué haces?", f: "Haces una tarea nueva. No estás segura de hacerla bien. ¿Qué haces?", x: "Haces una tarea nueva. No estás seguro/a de hacerla bien. ¿Qué haces?" }, // nieuw, nalezen
    'c.howto.o1': "Pides a un compañero que la mire.", // nieuw, nalezen
    'c.howto.o2': "Sigues: a lo mejor está bien.", // nieuw, nalezen
    'c.howto.o3': "Paras y esperas hasta que venga alguien.", // nieuw, nalezen
    'c.howto.w': "Una mirada corta de un compañero ahorra mucho trabajo después. Y aprendes la tarea más rápido.", // nieuw, nalezen
    'c.mayask': "El buen momento para preguntar", // nieuw, nalezen
    'c.mayask.b': "¿Es sobre seguridad, o algo puede salir mal ahora mismo? Pregunta enseguida, también cuando tu compañero está ocupado. ¿No es urgente? Espera hasta que tu compañero haya terminado, y entonces pregunta: “Heb je even tijd?” ¿Tienes muchas preguntas pequeñas? Apúntalas y hazlas todas juntas. A nadie le molesta una pregunta. Un error cuesta más tiempo.", // nieuw, nalezen
    'c.mayask.p': "Perdón por molestar. ¿Tienes un momento?", // nieuw, nalezen
    'c.mayask.s': "Tu compañero está hablando por teléfono. Tienes una pregunta que no es urgente. ¿Qué haces?", // nieuw, nalezen
    'c.mayask.o1': "Esperas hasta que termine la llamada y luego preguntas.", // nieuw, nalezen
    'c.mayask.o2': "Preguntas ahora: una pregunta siempre está bien.", // nieuw, nalezen
    'c.mayask.o3': "No preguntas: tu compañero está ocupado.", // nieuw, nalezen
    'c.mayask.w': "Esperar un momento muestra respeto, y recibes tu respuesta igual. Solo el peligro no puede esperar.", // nieuw, nalezen
    'c.whereis': "¿Te has perdido? Pregunta", // nieuw, nalezen
    'c.whereis.b': "Un lugar de trabajo nuevo es grande, y muchas puertas se parecen. Nadie espera que lo encuentres todo después de un día. ¿No encuentras una sala, una herramienta o a una persona? Pregunta al primer compañero que veas. Muchos compañeros te acompañan o te señalan el camino. ¿Sabes dónde están las salidas? Pregúntalo el primer día: es por tu seguridad.", // nieuw, nalezen
    'c.whereis.p': "Me he perdido. ¿Dónde está el comedor?", // nieuw, nalezen
    'c.whereis.s': "Es tu segundo día. No encuentras el vestuario, y tu turno empieza en cinco minutos. ¿Qué haces?", // nieuw, nalezen
    'c.whereis.o1': "Preguntas al primer compañero que ves.", // nieuw, nalezen
    'c.whereis.o2': "Sigues buscando: volver a preguntar da vergüenza.", // nieuw, nalezen
    'c.whereis.o3': "Empiezas a trabajar con tu propia ropa.", // nieuw, nalezen
    'c.whereis.w': "Preguntar cuesta diez segundos. Si buscas por tu cuenta, puedes llegar tarde. Los compañeros saben que en un sitio nuevo es difícil encontrar el camino.", // nieuw, nalezen
  },
};

export default t;
