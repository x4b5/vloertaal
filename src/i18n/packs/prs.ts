import base from '../prs';
import culture from '../culture/prs';
import work from '../work/prs';
import about from '../about/prs';
import learn from '../learn/prs';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, url: import.meta.url };
export default pack;
