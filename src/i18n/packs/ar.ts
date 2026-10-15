import base from '../ar';
import culture from '../culture/ar';
import work from '../work/ar';
import about from '../about/ar';
import learn from '../learn/ar';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, url: import.meta.url };
export default pack;
