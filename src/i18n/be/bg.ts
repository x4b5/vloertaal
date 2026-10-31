import type { CultureTranslation } from '../culture/types';
import { bg as base } from './base';
import { bg as firstday } from './units/firstday';
import { bg as tools } from './units/tools';
import { bg as safety } from './units/safety';
import { bg as warehouse } from './units/warehouse';
import { bg as data } from './units/data';
import { bg as time } from './units/time';
import { bg as teamwork } from './units/teamwork';
import { bg as contract } from './units/contract';
import { bg as papers } from './units/papers';
import { bg as pay } from './units/pay';
import { bg as house } from './units/house';
import { bg as sayings } from './units/sayings';
import { bg as rights } from './units/rights';
import { bg as leave } from './units/leave';
import { bg as exploit } from './units/exploit';
import { bg as grow } from './units/grow';
import { bg as health } from './units/health';
import { bg as money } from './units/money';
import { bg as travel } from './units/travel';
import { bg as lost } from './units/lost';
import { bg as shop } from './units/shop';
import { bg as ai } from './units/ai';
import { bg as kas } from './units/kas';
import { bg as stage } from './units/stage';
import { bg as society } from './units/society';
import { bg as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
