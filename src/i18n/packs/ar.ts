import base from '../ar';
import culture from '../culture/ar';
import work from '../work/ar';
import about from '../about/ar';
import learn from '../learn/ar';
import sayings from '../sayings/ar';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, url: import.meta.url };
export default pack;
