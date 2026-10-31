import type { CultureTranslation } from '../culture/types';
import { ar as base } from './base';
import { ar as firstday } from './units/firstday';
import { ar as tools } from './units/tools';
import { ar as safety } from './units/safety';
import { ar as warehouse } from './units/warehouse';
import { ar as data } from './units/data';
import { ar as time } from './units/time';
import { ar as teamwork } from './units/teamwork';
import { ar as contract } from './units/contract';
import { ar as papers } from './units/papers';
import { ar as pay } from './units/pay';
import { ar as house } from './units/house';
import { ar as sayings } from './units/sayings';
import { ar as social } from './units/social';
import { ar as rights } from './units/rights';
import { ar as leave } from './units/leave';
import { ar as exploit } from './units/exploit';
import { ar as grow } from './units/grow';
import { ar as health } from './units/health';
import { ar as money } from './units/money';
import { ar as travel } from './units/travel';
import { ar as lost } from './units/lost';
import { ar as shop } from './units/shop';
import { ar as ai } from './units/ai';
import { ar as kas } from './units/kas';
import { ar as stage } from './units/stage';
import { ar as society } from './units/society';
import { ar as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...social, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
