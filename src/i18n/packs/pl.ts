import base from '../pl';
import culture from '../culture/pl';
import work from '../work/pl';
import about from '../about/pl';
import learn from '../learn/pl';
import regio from '../regio/pl';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, regio, url: import.meta.url };
export default pack;
