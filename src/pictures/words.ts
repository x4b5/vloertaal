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
import group26 from './group26';

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
  ...group26,
};
export default words;
export const url: string = import.meta.url;
