import base from '../prs';
import culture from '../culture/prs';
import work from '../work/prs';
import about from '../about/prs';
import learn from '../learn/prs';
import sayings from '../sayings/prs';
import sounds from '../sounds/prs';
import kunJeNu from '../kunjenu/prs';
import type { LanguagePack } from './types';

/** Everything in one help language, loaded on demand as its own file (src/i18n/index.ts ensureLanguage). */
const pack: LanguagePack = { base, culture, work, about, learn, sayings, sounds, kunJeNu, url: import.meta.url };
export default pack;
