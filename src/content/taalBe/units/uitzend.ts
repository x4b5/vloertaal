import type { BeTaal } from '../types';

/**
 * The Belgian version of "Werken via een uitzendbureau" (u.uitzend, 23 November 2026): NOT WRITTEN
 * YET. The unit is C in ./inventory.ts: uitzendwerk is regulated otherwise in Belgium (the
 * interimkantoor and de gebruiker, dagcontracten, paritair comité 322, the Uitzendarbeidswet; no
 * phases A, B and C, no inlener, no Dutch minimum-wage rule on deductions, no Juridisch Loket,
 * FairWork or Nederlandse Arbeidsinspectie). Until this file is written, a learner in Belgium plays
 * the Dutch unit, and the unit, its lessons and its tips say "Dit gaat over Nederland. In België is
 * het anders." (src/content/taalBe/index.ts, BE_TAAL_TODO). Writing it: docs/taal-belgie.md, part 2;
 * the facts of the Belgian Werkregels unit contract (src/content/regels/be/units/contract.ts) and the
 * Belgian tip of l.agency (./contract.ts) are the place to start, each with a ⚖️ note and a source.
 */
export const be: BeTaal | undefined = undefined;
