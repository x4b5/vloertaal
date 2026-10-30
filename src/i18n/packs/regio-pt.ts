import texts from '../regio/pt';
import type { RegionTextPack } from './types';

/** The region texts in one help language, loaded on demand as its own file (src/i18n/index.ts ensureRegionTexts). */
const pack: RegionTextPack = { code: 'pt', texts, url: import.meta.url };
export default pack;
