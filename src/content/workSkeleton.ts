// Made by `npm run skeleton` from src/content/work.ts: do not edit (src/content/lessonTexts.ts).

/** A unit of work.ts with its lessons' names and ids, without their texts. */
export interface SkeletonUnit {
  id: string;
  title: string;
  titleNl: string;
  emoji: string;
  color: string;
  lessons: { id: string; title: string; titleId?: string }[];
}

/** doUnit, toolsUnit and dataUnit (the first three), then workUnits, in course order. */
export const workSkeleton: SkeletonUnit[] = [
  { id: "u.do", title: "Instructions", titleNl: "Instructies", emoji: "👉", color: "#b45309", lessons: [
      { id: "l.putdown", title: "Put it there" },
      { id: "l.onoff", title: "On and off, open and closed" },
      { id: "l.fillempty", title: "Push, pull, fill" },
      { id: "l.order", title: "First this, then that" },
  ] },
  { id: "u.tools", title: "Smart tools", titleNl: "Slimme hulpmiddelen", emoji: "📱", color: "#d1495b", lessons: [
      { id: "l.translate", title: "Translate with your phone" },
      { id: "l.understood", title: "Understand and be understood" },
      { id: "l.keeplearning", title: "Keep learning" },
  ] },
  { id: "u.data", title: "Numbers and details", titleNl: "Getallen en gegevens", emoji: "📇", color: "#3d7f8c", lessons: [
      { id: "l.counting", title: "Numbers" },
      { id: "l.details", title: "Your details" },
      { id: "l.dates", title: "Days and dates" },
  ] },
  { id: "u.apply", title: "Applying for a job", titleNl: "Solliciteren", emoji: "📨", color: "#4a6fa5", lessons: [
      { id: "l.cv", title: "Your CV and letter" },
      { id: "l.interview", title: "The job interview" },
      { id: "l.vacancy", title: "Reading a vacancy" },
      { id: "l.result", title: "After the interview" },
  ] },
  { id: "u.contract", title: "Work and contracts", titleNl: "Werk en contract", emoji: "📝", color: "#2f6db5", lessons: [
      { id: "l.findwork", title: "Finding work" },
      { id: "l.contract", title: "Your contract" },
      { id: "l.agency", title: "Working through an agency" },
      { id: "l.permit", title: "Papers, integration and your job" },
  ] },
  { id: "u.uitzend", title: "Temp agency work", titleNl: "Werken via een uitzendbureau", emoji: "🔁", color: "#2e5c9a", lessons: [
      { id: "l.hirer", title: "The agency and the hirer" },
      { id: "l.phases", title: "Your contract and the phases" },
      { id: "l.deductions", title: "Pay and deductions" },
      { id: "l.agencyhome", title: "Housing and help" },
      { id: "l.vog", title: "Your past: the VOG" },
  ] },
  { id: "u.papers", title: "Housing and papers", titleNl: "Wonen en papieren", emoji: "🪪", color: "#a35a2a", lessons: [
      { id: "l.bsn", title: "Your BSN and papers" },
      { id: "l.housing", title: "Housing" },
      { id: "l.residence", title: "Your residence papers" },
      { id: "l.newhome", title: "Moving house" },
  ] },
  { id: "u.pay", title: "Pay", titleNl: "Loon", emoji: "💶", color: "#2c7a7b", lessons: [
      { id: "l.payslip", title: "Your payslip" },
      { id: "l.extra", title: "Extra money" },
      { id: "l.payparts", title: "What is on your payslip" },
      { id: "l.latepay", title: "Late, missing or cash pay" },
  ] },
  { id: "u.house", title: "House rules", titleNl: "Huisregels", emoji: "🏠", color: "#8a6d1f", lessons: [
      { id: "l.phone", title: "Your phone at work" },
      { id: "l.smoking", title: "Smoking" },
      { id: "l.clock", title: "Clocking in and on time" },
      { id: "l.hygiene", title: "Alcohol, drugs and hygiene" },
  ] },
  { id: "u.social", title: "Getting along", titleNl: "Omgang met collega’s", emoji: "☕", color: "#3a7d5c", lessons: [
      { id: "l.smalltalk", title: "Small talk and breaks" },
      { id: "l.mistakes", title: "Feedback and mistakes" },
      { id: "l.respect", title: "Respect for everyone" },
      { id: "l.gossip", title: "Gossip and social media" },
      { id: "l.boundaries", title: "Crossing the line" },
  ] },
  { id: "u.sayings", title: "Sayings and expressions", titleNl: "Uitdrukkingen en gezegden", emoji: "💬", color: "#b5651d", lessons: [
      { id: "l.easy", title: "When work goes well" },
      { id: "l.plain", title: "Saying how it is" },
  ] },
  { id: "u.rights", title: "Rules and rights", titleNl: "Regels en rechten", emoji: "⚖️", color: "#6b4fa0", lessons: [
      { id: "l.health", title: "Safe and healthy work" },
      { id: "l.rights", title: "Your rights" },
      { id: "l.mustmay", title: "Must, or may you choose?" },
  ] },
  { id: "u.leave", title: "Leave", titleNl: "Verlof", emoji: "🌴", color: "#b5487a", lessons: [
      { id: "l.leave", title: "Days off" },
      { id: "l.kids", title: "Children and work" },
      { id: "l.holiday", title: "Planning your holiday" },
      { id: "l.special", title: "Special days off" },
  ] },
  { id: "u.sick", title: "Illness", titleNl: "Ziekte", emoji: "🩹", color: "#2f7f6f", lessons: [
      { id: "l.illness", title: "Sick at home" },
      { id: "l.backtowork", title: "Back to work after illness" },
      { id: "l.unwell", title: "Feeling unwell" },
      { id: "l.injury", title: "Hurt by your work" },
  ] },
  { id: "u.exploit", title: "Know your rights: exploitation", titleNl: "Uitbuiting herkennen", emoji: "🛑", color: "#9b2c2c", lessons: [
      { id: "l.warning", title: "Warning signs" },
      { id: "l.gethelp", title: "Getting help" },
      { id: "l.debt", title: "A debt to the boss or the agency" },
      { id: "l.inspection", title: "The inspection and other help" },
  ] },
  { id: "u.contact", title: "Calling and texting work", titleNl: "Bellen en appen met je werk", emoji: "📞", color: "#3b6e8f", lessons: [
      { id: "l.callin", title: "Calling in" },
      { id: "l.texting", title: "Messages and the roster app" },
      { id: "l.email", title: "Writing to work" },
  ] },
  { id: "u.grow", title: "Diplomas and growing", titleNl: "Diploma’s en verder komen", emoji: "🎓", color: "#5b5ea6", lessons: [
      { id: "l.certs", title: "Certificates" },
      { id: "l.diploma", title: "Your diploma and training" },
      { id: "l.mychoice", title: "What I am good at" },
      { id: "l.nextstep", title: "After Entree" },
  ] },
  { id: "u.health", title: "Health", titleNl: "Gezondheid", emoji: "🩺", color: "#c0392b", lessons: [
      { id: "l.doctor", title: "Doctor or 112?" },
      { id: "l.insurance", title: "Health insurance" },
      { id: "l.body", title: "Body and pain" },
      { id: "l.healthy", title: "Fit for work" },
      { id: "l.feelwell", title: "Feeling good at work" },
  ] },
  { id: "u.money", title: "Money and letters", titleNl: "Geld en post", emoji: "✉️", color: "#7a6a1e", lessons: [
      { id: "l.letters", title: "Official letters" },
      { id: "l.scams", title: "Watch out for scams" },
      { id: "l.budget", title: "Your money each month" },
  ] },
  { id: "u.travel", title: "Getting to work", titleNl: "Naar je werk", emoji: "🚲", color: "#2e7d32", lessons: [
      { id: "l.bike", title: "By bike" },
      { id: "l.transit", title: "Public transport and travel costs" },
      { id: "l.carpool", title: "Carpool and the work van" },
      { id: "l.train", title: "Train, delays and being late" },
  ] },
  { id: "u.lost", title: "Losing your job", titleNl: "Werk kwijt", emoji: "🧭", color: "#555b6e", lessons: [
      { id: "l.ww", title: "Unemployment benefit" },
      { id: "l.jobends", title: "When your job ends" },
      { id: "l.newjob", title: "Looking for new work" },
  ] },
  { id: "u.build", title: "On the building site", titleNl: "Op de bouw", emoji: "🏗️", color: "#d97706", lessons: [
      { id: "l.tools", title: "Tools and materials" },
      { id: "l.site", title: "Safety on site" },
      { id: "l.measure", title: "Measuring" },
      { id: "l.siteday", title: "A tidy building site" },
  ] },
  { id: "u.factory", title: "In the factory", titleNl: "In de productie", emoji: "🏭", color: "#4b5563", lessons: [
      { id: "l.line", title: "The line and machines" },
      { id: "l.quality", title: "Quality" },
      { id: "l.food", title: "Working with food" },
      { id: "l.shifts", title: "Handing over your shift" },
  ] },
  { id: "u.care", title: "In care", titleNl: "In de zorg", emoji: "🧓", color: "#9d4edd", lessons: [
      { id: "l.client", title: "The client and daily care" },
      { id: "l.privacy", title: "Privacy and safety in care" },
      { id: "l.signals", title: "Say what you see" },
      { id: "l.transfer", title: "Helping someone get up" },
  ] },
  { id: "u.horeca", title: "In hospitality", titleNl: "In de horeca", emoji: "🍽️", color: "#b45309", lessons: [
      { id: "l.kitchen", title: "In the kitchen" },
      { id: "l.service", title: "Serving guests" },
      { id: "l.dishes", title: "Washing up" },
      { id: "l.rush", title: "When it is busy" },
  ] },
  { id: "u.clean", title: "Cleaning", titleNl: "Schoonmaken", emoji: "🧽", color: "#0e7490", lessons: [
      { id: "l.cleaning", title: "Cleaning materials" },
      { id: "l.cleansafe", title: "Safe cleaning" },
      { id: "l.rounds", title: "Your round" },
      { id: "l.colours", title: "Colours and cloths" },
  ] },
  { id: "u.shop", title: "In the shop", titleNl: "In de winkel", emoji: "🛒", color: "#2a9d8f", lessons: [
      { id: "l.shelves", title: "Shelves and stock" },
      { id: "l.checkout", title: "At the checkout" },
      { id: "l.shophelp", title: "Helping a customer" },
      { id: "l.shoptrouble", title: "Difficult moments" },
  ] },
  { id: "u.numbers", title: "Time, money and measures", titleNl: "Rekenen: tijd, geld, maten", emoji: "🔢", color: "#6d597a", lessons: [
      { id: "l.hours", title: "Hours and times" },
      { id: "l.measures", title: "Money and measures" },
      { id: "l.shapes", title: "Shapes" },
      { id: "l.angles", title: "Angles and round shapes" },
      { id: "l.size", title: "Length, area and volume" },
  ] },
  { id: "u.ai", title: "AI and smart apps", titleNl: "Slimme apps en AI", emoji: "🤖", color: "#5a4fcf", lessons: [
      { id: "l.aihelp", title: "AI as a helper" },
      { id: "l.aiprivate", title: "What you do not share" },
      { id: "l.aifake", title: "Fake or real?" },
      { id: "l.aiplan", title: "When an app decides" },
  ] },
  { id: "u.kas", title: "In the greenhouse", titleNl: "In de kas", emoji: "🌱", color: "#4d7c0f", lessons: [
      { id: "l.harvest", title: "Harvesting and sorting" },
      { id: "l.greensafe", title: "Safe in the greenhouse" },
      { id: "l.plantcare", title: "Caring for the plant" },
      { id: "l.outdoors", title: "Working outside" },
  ] },
  { id: "u.finish", title: "Finishing your work", titleNl: "Je werk afronden", emoji: "🏁", color: "#8a5a44", lessons: [
      { id: "l.workorder", title: "The work order" },
      { id: "l.handover", title: "Done, or not yet?" },
      { id: "l.checklist", title: "Check before you finish" },
      { id: "l.leavesite", title: "Leaving your workplace" },
  ] },
  { id: "u.tech", title: "In the workshop", titleNl: "In de werkplaats", emoji: "🔩", color: "#52606d", lessons: [
      { id: "l.workshop", title: "Workshop tools" },
      { id: "l.power", title: "Power off first" },
      { id: "l.drawing", title: "The drawing and the measure" },
      { id: "l.weld", title: "Welding and hot work" },
  ] },
  { id: "u.garage", title: "In the garage", titleNl: "In de garage", emoji: "🚗", color: "#1f6f8b", lessons: [
      { id: "l.garage", title: "Tyres, oil and the lift" },
      { id: "l.carjob", title: "The customer decides" },
      { id: "l.carparts", title: "Parts of the car" },
      { id: "l.carsafe", title: "Petrol, gas and power" },
  ] },
  { id: "u.stage", title: "Your work placement", titleNl: "Stage lopen", emoji: "🎒", color: "#7b4fa0", lessons: [
      { id: "l.placement", title: "Your placement" },
      { id: "l.review", title: "Feedback on your placement" },
      { id: "l.stagedays", title: "Every day at your placement" },
      { id: "l.stageend", title: "The end of your placement" },
  ] },
  { id: "u.society", title: "Taking part in the Netherlands", titleNl: "Meedoen in Nederland", emoji: "🏛️", color: "#2b5c8a", lessons: [
      { id: "l.council", title: "The municipality and voting" },
      { id: "l.police", title: "Police and your rights" },
      { id: "l.neighbours", title: "Your neighbourhood" },
      { id: "l.join", title: "School, sports and volunteering" },
  ] },
  { id: "u.online", title: "Online at work", titleNl: "Online op je werk", emoji: "💻", color: "#3d5a80", lessons: [
      { id: "l.login", title: "Logging in" },
      { id: "l.phish", title: "Fake e-mails" },
      { id: "l.workphotos", title: "Photos and data" },
      { id: "l.device", title: "A safe phone and computer" },
  ] },
  { id: "u.delivery", title: "Transport and delivery", titleNl: "Vervoer en bezorging", emoji: "🚚", color: "#9a3412", lessons: [
      { id: "l.parcel", title: "Delivering parcels" },
      { id: "l.road", title: "Safe and fair on the road" },
      { id: "l.vancheck", title: "Checking the van" },
      { id: "l.delay", title: "Delays on the road" },
  ] },
  { id: "u.afbouw", title: "Tiles, plaster and paint", titleNl: "Tegels, stuc en verf", emoji: "🖌️", color: "#0f6e8c", lessons: [
      { id: "l.tiletools", title: "The tiler’s tools" },
      { id: "l.tiling", title: "Tiles, glue and the centre line" },
      { id: "l.plaster", title: "Plastering" },
      { id: "l.paint", title: "Painting" },
      { id: "l.prep", title: "Getting ready to paint" },
  ] },
  { id: "u.ruwbouw", title: "Bricks, wood and fixing", titleNl: "Metselen, hout en vastmaken", emoji: "🧱", color: "#a4452c", lessons: [
      { id: "l.brick", title: "Bricklaying" },
      { id: "l.wall", title: "A straight wall" },
      { id: "l.wood", title: "Working with wood" },
      { id: "l.square", title: "Marking out" },
      { id: "l.screw", title: "Drills and screws" },
      { id: "l.fix", title: "Fixing things" },
  ] },
  { id: "u.machines", title: "Machines and tools", titleNl: "Machines en gereedschap", emoji: "🎛️", color: "#3f6e8c", lessons: [
      { id: "l.atmachine", title: "At the machine" },
      { id: "l.inspect", title: "Measuring and checking" },
      { id: "l.packing", title: "Packing" },
      { id: "l.upkeep", title: "Maintenance" },
  ] },
  { id: "u.install", title: "Electrics, pipes and metal", titleNl: "Elektra, leidingen en metaal", emoji: "⚡", color: "#5b4a9e", lessons: [
      { id: "l.wiring", title: "Wiring" },
      { id: "l.testing", title: "Measuring and working safely" },
      { id: "l.pipes", title: "Pipes and water" },
      { id: "l.metalwork", title: "Working metal" },
  ] },
  { id: "u.montage", title: "Assembly", titleNl: "Assemblage en montage", emoji: "🔧", color: "#2f7d6d", lessons: [
      { id: "l.assembly", title: "At the assembly line" },
      { id: "l.fastening", title: "Fastening" },
      { id: "l.handling", title: "Lifting and moving" },
      { id: "l.finalcheck", title: "The final check" },
  ] },
  { id: "u.kweek", title: "Growing, sorting and the greenhouse", titleNl: "Kweken, sorteren en de kas", emoji: "🌱", color: "#4a7c2a", lessons: [
      { id: "l.sowing", title: "Sowing and cuttings" },
      { id: "l.sorting", title: "Sorting and packing" },
      { id: "l.greenhouse", title: "The greenhouse and its climate" },
      { id: "l.pests", title: "Pests and working clean" },
  ] },
  { id: "u.carservice", title: "Tyres, oil and brakes", titleNl: "Banden, olie en remmen", emoji: "🛞", color: "#8a3b2e", lessons: [
      { id: "l.tyres", title: "Changing tyres" },
      { id: "l.oilchange", title: "Changing the oil" },
      { id: "l.brakes", title: "Brakes and lights" },
      { id: "l.diagnosis", title: "Reading faults and the job card" },
  ] },
  { id: "u.mowing", title: "Mowing and pruning", titleNl: "Maaien en snoeien", emoji: "🌳", color: "#4f7a28", lessons: [
      { id: "l.mowing", title: "Mowing the grass" },
      { id: "l.pruning", title: "Pruning" },
      { id: "l.hedge", title: "Trimming the hedge" },
      { id: "l.chainsaw", title: "The chainsaw and the leaf blower" },
  ] },
  { id: "u.planting", title: "Planting, weeds and the street", titleNl: "Planten, onkruid en de straat", emoji: "🌷", color: "#6a8f2a", lessons: [
      { id: "l.weeding", title: "Weeding" },
      { id: "l.planting", title: "Planting" },
      { id: "l.roadside", title: "Working by the road" },
      { id: "l.litter", title: "Litter and the neighbourhood" },
  ] },
  { id: "u.frontdesk", title: "Reception, post and meetings", titleNl: "Receptie, post en vergaderen", emoji: "🛎️", color: "#3d5a80", lessons: [
      { id: "l.reception", title: "At the front desk" },
      { id: "l.visitors", title: "Receiving visitors" },
      { id: "l.mailroom", title: "Post and parcels" },
      { id: "l.meetingroom", title: "Setting up a meeting room" },
  ] },
  { id: "u.maintenance", title: "Faults, repairs and moving", titleNl: "Storingen, onderhoud en verhuizen", emoji: "🧰", color: "#7a5a2e", lessons: [
      { id: "l.faults", title: "Reporting a fault" },
      { id: "l.repairs", title: "Small repairs" },
      { id: "l.moving", title: "Moving a workplace" },
      { id: "l.closing", title: "Opening and closing the building" },
  ] },
  { id: "u.guarding", title: "Patrols and access", titleNl: "Ronde en toegang", emoji: "🛡️", color: "#2c3e66", lessons: [
      { id: "l.patrol", title: "The round" },
      { id: "l.access", title: "Access control" },
      { id: "l.cameras", title: "Cameras and the control room" },
      { id: "l.report", title: "The radio and the report" },
  ] },
  { id: "u.incidents", title: "Emergencies and the shop", titleNl: "Noodgevallen en de winkel", emoji: "🚨", color: "#8c2f39", lessons: [
      { id: "l.evacuation", title: "Fire and evacuation" },
      { id: "l.firstaid", title: "First aid and 112" },
      { id: "l.shoplifting", title: "Shop theft" },
      { id: "l.aggression", title: "Difficult people" },
  ] },
  { id: "u.foodhygiene", title: "Hygiene and the cold", titleNl: "Hygiëne en kou", emoji: "🧼", color: "#2f7f8a", lessons: [
      { id: "l.hygienelock", title: "The hygiene lock" },
      { id: "l.allergens", title: "Allergens" },
      { id: "l.coldroom", title: "The cold room and the freezer" },
      { id: "l.foreignbody", title: "Glass, metal and plastic in the food" },
  ] },
  { id: "u.foodline", title: "The production line", titleNl: "De productielijn", emoji: "🥩", color: "#a0522d", lessons: [
      { id: "l.cutting", title: "Cutting and weighing" },
      { id: "l.labels", title: "Packing and labels" },
      { id: "l.linecleaning", title: "Cleaning the line" },
      { id: "l.haccp", title: "Checking and writing down (HACCP)" },
  ] },
  { id: "u.collection", title: "Collecting waste", titleNl: "Afval ophalen", emoji: "🚛", color: "#4d6b3c", lessons: [
      { id: "l.binlorry", title: "The bin lorry" },
      { id: "l.reversing", title: "Reversing safely" },
      { id: "l.wastesorting", title: "Sorting waste" },
      { id: "l.wastesafety", title: "Sharp things and lifting" },
  ] },
  { id: "u.recycling", title: "The recycling yard", titleNl: "De milieustraat", emoji: "♻️", color: "#3b7d5c", lessons: [
      { id: "l.yard", title: "At the recycling yard" },
      { id: "l.hazardous", title: "Chemical waste" },
      { id: "l.baler", title: "The baler" },
      { id: "l.shovel", title: "The wheel loader on the yard" },
  ] },
  { id: "u.toddlers", title: "The children", titleNl: "De kinderen", emoji: "🧸", color: "#c0628a", lessons: [
      { id: "l.nappies", title: "Changing nappies" },
      { id: "l.mealtime", title: "Eating and drinking" },
      { id: "l.naptime", title: "Sleeping" },
      { id: "l.playtime", title: "Playing" },
  ] },
  { id: "u.daycare", title: "Parents, safety and the group", titleNl: "Ouders, veiligheid en de groep", emoji: "👪", color: "#7a4f9a", lessons: [
      { id: "l.pickup", title: "Bringing and picking up" },
      { id: "l.childsafety", title: "Safety in the group" },
      { id: "l.sickchild", title: "A sick child and allergies" },
      { id: "l.grouprules", title: "The group and the rules" },
  ] },
  { id: "u.housekeeping", title: "Toilets, hotel rooms and machines", titleNl: "Sanitair, hotel en machines", emoji: "🛁", color: "#16808f", lessons: [
      { id: "l.sanitary", title: "Toilets and washbasins" },
      { id: "l.hotelroom", title: "Hotel rooms" },
      { id: "l.dosing", title: "Products and machines" },
      { id: "l.officenight", title: "Offices, early or late" },
  ] },
  { id: "u.cooking", title: "The kitchen and service", titleNl: "De keuken en de bediening", emoji: "🧑‍🍳", color: "#a55a1c", lessons: [
      { id: "l.knives", title: "Knives and cutting" },
      { id: "l.rawcooked", title: "Raw, cooked and allergens" },
      { id: "l.pass", title: "The dish room and the pass" },
      { id: "l.bill", title: "Courses and the bill" },
  ] },
  { id: "u.carework", title: "Personal care and home care", titleNl: "Verzorgen en thuiszorg", emoji: "🤲", color: "#8e44ad", lessons: [
      { id: "l.washing", title: "Washing and dressing" },
      { id: "l.observing", title: "Observing and reporting" },
      { id: "l.homecare", title: "Home care" },
      { id: "l.liftaids", title: "Lifting aids and safety" },
  ] },
  { id: "u.shopfloor", title: "Till, stock and closing", titleNl: "Kassa, voorraad en sluiten", emoji: "🏪", color: "#1f8a70", lessons: [
      { id: "l.returns", title: "Returns and the till" },
      { id: "l.facing", title: "Facing and the cold products" },
      { id: "l.shrink", title: "Damage and theft" },
      { id: "l.shopclose", title: "Closing the shop" },
  ] },
  { id: "u.safework", title: "Safety at work", titleNl: "Veiligheid op het werk", emoji: "⚠️", color: "#b7791f", lessons: [
      { id: "l.safetysigns", title: "Safety signs" },
      { id: "l.substances", title: "Hazardous substances" },
      { id: "l.firefight", title: "Fire" },
      { id: "l.permitwork", title: "Permits, confined spaces and lifting" },
  ] },
  { id: "u.process", title: "Operator in the process industry", titleNl: "Operator in de procesindustrie", emoji: "🏭", color: "#5b6770", lessons: [
      { id: "l.plantround", title: "The round and the control room" },
      { id: "l.plantfault", title: "A fault" },
      { id: "l.shiftwork", title: "Shifts and nights" },
      { id: "l.heatdust", title: "Heat, steam and dust" },
  ] },
];
