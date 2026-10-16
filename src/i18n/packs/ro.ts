import base from '../ro';
import culture from '../culture/ro';
import work from '../work/ro';
import about from '../about/ro';
import learn from '../learn/ro';
import sayings from '../sayings/ro';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, url: import.meta.url };
export default pack;
