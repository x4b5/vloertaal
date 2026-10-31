import type { CultureTranslation } from '../culture/types';
import { uk as base } from './base';
import { uk as firstday } from './units/firstday';
import { uk as tools } from './units/tools';
import { uk as safety } from './units/safety';
import { uk as warehouse } from './units/warehouse';
import { uk as data } from './units/data';
import { uk as time } from './units/time';
import { uk as teamwork } from './units/teamwork';
import { uk as contract } from './units/contract';
import { uk as papers } from './units/papers';
import { uk as pay } from './units/pay';
import { uk as house } from './units/house';
import { uk as sayings } from './units/sayings';
import { uk as social } from './units/social';
import { uk as rights } from './units/rights';
import { uk as leave } from './units/leave';
import { uk as exploit } from './units/exploit';
import { uk as grow } from './units/grow';
import { uk as health } from './units/health';
import { uk as money } from './units/money';
import { uk as travel } from './units/travel';
import { uk as lost } from './units/lost';
import { uk as shop } from './units/shop';
import { uk as ai } from './units/ai';
import { uk as kas } from './units/kas';
import { uk as stage } from './units/stage';
import { uk as society } from './units/society';
import { uk as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...social, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
