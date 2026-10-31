import type { CultureTranslation } from '../culture/types';
import { ti as base } from './base';
import { ti as firstday } from './units/firstday';
import { ti as tools } from './units/tools';
import { ti as safety } from './units/safety';
import { ti as warehouse } from './units/warehouse';
import { ti as data } from './units/data';
import { ti as time } from './units/time';
import { ti as teamwork } from './units/teamwork';
import { ti as contract } from './units/contract';
import { ti as papers } from './units/papers';
import { ti as pay } from './units/pay';
import { ti as house } from './units/house';
import { ti as sayings } from './units/sayings';
import { ti as social } from './units/social';
import { ti as rights } from './units/rights';
import { ti as leave } from './units/leave';
import { ti as exploit } from './units/exploit';
import { ti as grow } from './units/grow';
import { ti as health } from './units/health';
import { ti as money } from './units/money';
import { ti as travel } from './units/travel';
import { ti as lost } from './units/lost';
import { ti as shop } from './units/shop';
import { ti as ai } from './units/ai';
import { ti as kas } from './units/kas';
import { ti as stage } from './units/stage';
import { ti as society } from './units/society';
import { ti as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...social, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
