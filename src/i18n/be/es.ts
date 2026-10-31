import type { CultureTranslation } from '../culture/types';
import { es as base } from './base';
import { es as firstday } from './units/firstday';
import { es as tools } from './units/tools';
import { es as safety } from './units/safety';
import { es as warehouse } from './units/warehouse';
import { es as data } from './units/data';
import { es as time } from './units/time';
import { es as teamwork } from './units/teamwork';
import { es as contract } from './units/contract';
import { es as papers } from './units/papers';
import { es as pay } from './units/pay';
import { es as house } from './units/house';
import { es as sayings } from './units/sayings';
import { es as rights } from './units/rights';
import { es as leave } from './units/leave';
import { es as exploit } from './units/exploit';
import { es as grow } from './units/grow';
import { es as health } from './units/health';
import { es as money } from './units/money';
import { es as travel } from './units/travel';
import { es as lost } from './units/lost';
import { es as shop } from './units/shop';
import { es as ai } from './units/ai';
import { es as kas } from './units/kas';
import { es as stage } from './units/stage';
import { es as society } from './units/society';
import { es as online } from './units/online';

/**
 * The Belgian language track in this help language (docs/taal-belgie.md): the shared texts
 * (./base.ts) and every unit's own file (./units). Loaded with the language's pack. A content
 * agent changes only its own unit files, never this one.
 */
const texts: CultureTranslation = { ui: base.ui, gloss: { ...base.gloss, ...firstday, ...tools, ...safety, ...warehouse, ...data, ...time, ...teamwork, ...contract, ...papers, ...pay, ...house, ...sayings, ...rights, ...leave, ...exploit, ...grow, ...health, ...money, ...travel, ...lost, ...shop, ...ai, ...kas, ...stage, ...society, ...online } };
export default texts;
