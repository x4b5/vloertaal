import type { CultureTranslation } from '../culture/types';
import { tr as base } from './base';
import { tr as firstday } from './units/firstday';
import { tr as tools } from './units/tools';
import { tr as safety } from './units/safety';
import { tr as warehouse } from './units/warehouse';
import { tr as data } from './units/data';
import { tr as time } from './units/time';
import { tr as teamwork } from './units/teamwork';
import { tr as contract } from './units/contract';
import { tr as papers } from './units/papers';
import { tr as pay } from './units/pay';
import { tr as house } from './units/house';
import { tr as sayings } from './units/sayings';
import { tr as social } from './units/social';
import { tr as rights } from './units/rights';
import { tr as leave } from './units/leave';
import { tr as exploit } from './units/exploit';
import { tr as grow } from './units/grow';
import { tr as health } from './units/health';
import { tr as money } from './units/money';
import { tr as travel } from './units/travel';
import { tr as lost } from './units/lost';
import { tr as shop } from './units/shop';
import { tr as ai } from './units/ai';
import { tr as kas } from './units/kas';
import { tr as stage } from './units/stage';
import { tr as society } from './units/society';
import { tr as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...social, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
