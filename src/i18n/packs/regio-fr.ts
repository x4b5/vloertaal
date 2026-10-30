import texts from '../regio/fr';
import type { RegionTextPack } from './types';

/** The region texts in one help language, loaded on demand as its own file (src/i18n/index.ts ensureRegionTexts). */
const pack: RegionTextPack = { code: 'fr', texts, url: import.meta.url };
export default pack;
