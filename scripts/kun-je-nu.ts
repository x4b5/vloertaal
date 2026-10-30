import { writeFileSync } from 'node:fs';
import { kunJeNuMarkdown } from '../src/lib/kunJeNuDoc';

/** Writes docs/kun-je-nu.md from src/content/kunJeNu.ts (npm run kunjenu). */
writeFileSync(new URL('../docs/kun-je-nu.md', import.meta.url), kunJeNuMarkdown());
console.log('docs/kun-je-nu.md bijgewerkt');
