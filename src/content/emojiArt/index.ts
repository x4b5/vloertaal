import { batch1 } from './batch1';
import { batch2 } from './batch2';
import { batch3 } from './batch3';

/**
 * The drawings made for the last emoji of the app (31 October 2026, "alleen SVG"): tips, themes,
 * About, the work-rules cards, the Hulp tab and the region's Sociale kaart. Used after the
 * work-rules table and the tips table (src/content/tipIcons.ts emojiIconId), so a choice made
 * there for its own place wins. Keys are without the invisible variation selector (U+FE0F).
 */
export const emojiArt: Readonly<Record<string, string>> = { ...batch3, ...batch2, ...batch1 };
