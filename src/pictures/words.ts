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
};
export default words;
export const url: string = import.meta.url;
