import base from '../ti';
import culture from '../culture/ti';
import work from '../work/ti';
import about from '../about/ti';
import learn from '../learn/ti';
import regio from '../regio/ti';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, regio, url: import.meta.url };
export default pack;
