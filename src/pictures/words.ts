import type { JSX } from 'react';
import group1 from './group1';
import group2 from './group2';
import group3 from './group3';
import group4 from './group4';
import group5 from './group5';
import group6 from './group6';
import group7 from './group7';
import group8 from './group8';
import group9 from './group9';
import group10 from './group10';
import group11 from './group11';
import group12 from './group12';
import group13 from './group13';
import group14 from './group14';
import group15 from './group15';
import group16 from './group16';
import group17 from './group17';
import group18 from './group18';
import group19 from './group19';
import group20 from './group20';
import group23 from './group23';
import group24 from './group24';
import group25 from './group25';
import group26 from './group26';
import group27 from './group27';
import group30 from './group30';
import group31 from './group31';
import group32 from './group32';
import group33 from './group33';
import group34 from './group34';
import group35 from './group35';
import group36 from './group36';
import groupWelzijn from './groupWelzijn';
import group38 from './group38';
import group37 from './group37';
import group39 from './group39';
import group40 from './group40';
import group41 from './group41';
import group42 from './group42';
import group43 from './group43';
import group44 from './group44';
import group45 from './group45';
import group46 from './group46';
import group47 from './group47';
import group48 from './group48';
import group49 from './group49';
import group50 from './group50';
import group51 from './group51';
import group52 from './group52';
import groupMaken from './groupMaken';
import groupTechniek from './groupTechniek';
import groupMontage from './groupMontage';
import groupAutoservice from './groupAutoservice';
import groupKweek from './groupKweek';
import groupGroen from './groupGroen';
import groupFacilitair from './groupFacilitair';
import groupBeveiliging from './groupBeveiliging';
import groupVoeding from './groupVoeding';
import groupAfval from './groupAfval';
import groupKinderopvang from './groupKinderopvang';
import groupSchoonmaak2 from './groupSchoonmaak2';
import groupHoreca2 from './groupHoreca2';
import groupZorg2 from './groupZorg2';
import groupWinkel2 from './groupWinkel2';
import groupUitzend from './groupUitzend';
import groupBasis from './groupBasis';
import groupVeilig2 from './groupVeilig2';
import group53 from './group53';
import group54 from './group54';
import group55 from './group55';
import group56 from './group56';
import group57 from './group57';
import group58 from './group58';
import group59 from './group59';
import group60 from './group60';
import group61 from './group61';
import group62 from './group62';
import group63 from './group63';
import group64 from './group64';
import group65 from './group65';
import group66 from './group66';

/** Every word picture, keyed by word id (and the sayings' pictures, by saying id "zg.*"): one file, loaded on demand (./index.ts loadPictures). */
const words: Record<string, () => JSX.Element> = {
  ...group1,
  ...group2,
  ...group3,
  ...group4,
  ...group5,
  ...group6,
  ...group7,
  ...group8,
  ...group9,
  ...group10,
  ...group11,
  ...group12,
  ...group13,
  ...group14,
  ...group15,
  ...group16,
  ...group17,
  ...group18,
  ...group19,
  ...group20,
  ...group23,
  ...group24,
  ...group25,
  ...group26,
  ...group27,
  ...group30,
  ...group31,
  ...group32,
  ...group33,
  ...group34,
  ...group35,
  ...group36,
  ...groupWelzijn,
  ...group38,
  ...group37,
  ...group39,
  ...group40,
  // The sector lessons of 14 November 2026: one group per sector.
  ...group41,
  ...group42,
  ...group43,
  ...group44,
  ...group45,
  ...group46,
  ...group47,
  ...group48,
  ...group49,
  // The four logistics lessons of 14 November 2026 (l.picking, l.loading, l.vancheck, l.delay).
  ...group50,
  // The three lessons that bring "Hulp vragen" to four (l.howto, l.mayask, l.whereis).
  ...group51,
  // The basis unit "Instructies" (u.do: l.putdown, l.onoff, l.fillempty; l.order has no pictures).
  ...group52,
  // Making (Productie), "Machines en gereedschap": 24 tool and machine words of 20 November 2026,
  // drawn ahead of their four lessons (u.machines).
  ...groupMaken,
  // Techniek, "Elektra, leidingen en metaal": 24 words of 21 November 2026, drawn ahead of their
  // four lessons.
  ...groupTechniek,
  // Productie, "Assemblage en montage": 24 words of 21 November 2026, drawn ahead of their four
  // lessons.
  ...groupMontage,
  // Garage unit "Banden, olie en remmen": 24 words of 22 November 2026, drawn ahead of their lessons.
  ...groupAutoservice,
  // Tuinbouw unit "Kweken, sorteren en de kas": 24 words of 22 November 2026, drawn ahead of their lessons.
  ...groupKweek,
  // The new sectors Groen and Facilitair: 48 + 48 words of 23 November 2026, PLACEHOLDERS for now
  // (./placeholder.tsx) until they are drawn.
  ...groupGroen,
  ...groupFacilitair,
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang: 4 × 48 words of 23 November
  // 2026, PLACEHOLDERS for now (./placeholder.tsx) until they are drawn.
  ...groupBeveiliging,
  ...groupVoeding,
  ...groupAfval,
  ...groupKinderopvang,
  // The second own units of Schoonmaak, Horeca, Zorg and Winkel and the basis unit "Werken via een
  // uitzendbureau": 5 × 24 words of 23 November 2026, PLACEHOLDERS for now (./placeholder.tsx).
  ...groupSchoonmaak2,
  ...groupHoreca2,
  ...groupZorg2,
  ...groupWinkel2,
  ...groupUitzend,
  // The basis units at four lessons: the 83 drawable words of their 26 new lessons (23 November
  // 2026), PLACEHOLDERS for now (./placeholder.tsx).
  ...groupBasis,
  // "Veiligheid op het werk" (u.safework, 23 November 2026): its 22 drawable words, PLACEHOLDERS for
  // now (./placeholder.tsx).
  ...groupVeilig2,
  // "Tegels, stuc en verf" (u.afbouw, 20 November 2026): l.tiletools, l.tiling and l.plaster.
  ...group53,
  ...group54,
  ...group55,
  // l.paint and l.prep (u.afbouw, 20 November 2026).
  ...group56,
  ...group57,
  // "Metselen, hout en vastmaken" (u.ruwbouw, 20 November 2026): l.brick to l.fix.
  ...group58,
  ...group59,
  ...group60,
  ...group61,
  ...group62,
  ...group63,
  // Rekenen (u.numbers, 20 November 2026): l.shapes, l.angles and l.size.
  ...group64,
  ...group65,
  ...group66,
};
export default words;
export const url: string = import.meta.url;
