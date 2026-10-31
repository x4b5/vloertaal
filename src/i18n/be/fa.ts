import type { CultureTranslation } from '../culture/types';
import { fa as base } from './base';
import { fa as firstday } from './units/firstday';
import { fa as tools } from './units/tools';
import { fa as safety } from './units/safety';
import { fa as warehouse } from './units/warehouse';
import { fa as data } from './units/data';
import { fa as time } from './units/time';
import { fa as teamwork } from './units/teamwork';
import { fa as contract } from './units/contract';
import { fa as papers } from './units/papers';
import { fa as pay } from './units/pay';
import { fa as house } from './units/house';
import { fa as sayings } from './units/sayings';
import { fa as rights } from './units/rights';
import { fa as leave } from './units/leave';
import { fa as exploit } from './units/exploit';
import { fa as grow } from './units/grow';
import { fa as health } from './units/health';
import { fa as money } from './units/money';
import { fa as travel } from './units/travel';
import { fa as lost } from './units/lost';
import { fa as shop } from './units/shop';
import { fa as ai } from './units/ai';
import { fa as kas } from './units/kas';
import { fa as stage } from './units/stage';
import { fa as society } from './units/society';
import { fa as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
