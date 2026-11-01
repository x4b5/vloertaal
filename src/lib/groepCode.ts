/**
 * The short code on the coach card (src/lib/kaart.ts, "Laat zien hoe het gaat"): the card's own
 * numbers in one line, so a coach can copy them into the group overview (vloertaal.nl/groep,
 * src/lib/groepPage.ts) instead of typing four numbers. Only what the card already shows, counted:
 * no name, no date, no help language, no number of the phone. Two learners with the same numbers
 * have the same code.
 *
 *   VT1 O3 D12 V11/18 N15/18
 *   │   │  │   │      └ the end of "Wat ken je al?": right of all questions (when done)
 *   │   │  │   └ the start of "Wat ken je al?" (when done)
 *   │   │  └ days practised in the last 4 weeks
 *   │   └ topics finished
 *   └ the version of this code
 *
 * readGroepCode is also the group page's own reader: that page has no app code, so the function
 * is written to be copied into it as it is (a function declaration, nothing from outside, ES2019).
 */

export interface GroepScore {
  goed: number;
  van: number;
}

export interface GroepCijfers {
  onderwerpen: number;
  dagen: number;
  voor?: GroepScore;
  na?: GroepScore;
}

export const GROEP_CODE_PREFIX = 'VT1';

/** "VT1 O3 D12 V11/18 N15/18"; without the test, "VT1 O3 D12". */
export function groepCode(c: GroepCijfers): string {
  const parts = [GROEP_CODE_PREFIX, `O${c.onderwerpen}`, `D${c.dagen}`];
  if (c.voor) parts.push(`V${c.voor.goed}/${c.voor.van}`);
  if (c.na) parts.push(`N${c.na.goed}/${c.na.van}`);
  return parts.join(' ');
}

/**
 * The numbers of a code, or null when it is not one. Forgiving about what typing or a chat app
 * does to it: lower case, dots or dashes between the parts, a space after a letter, "van" for /,
 * a zero typed for the letter O ("VT1 03" is O3), and text around it (the line of a shared card).
 */
export function readGroepCode(text: string): GroepCijfers | null {
  var s = String(text == null ? '' : text).toUpperCase().replace(/\s+VAN\s+/g, '/').replace(/[\s.,;:_-]+/g, ' ').trim();
  var m = /(?:^|\s)VT\s?[1LI]\s+[O0]\s?(\d{1,3})\s+D\s?(\d{1,2})(?:\s+V\s?(\d{1,3})\s?\/\s?(\d{1,3}))?(?:\s+N\s?(\d{1,3})\s?\/\s?(\d{1,3}))?(?:\s|$)/.exec(s);
  if (!m) return null;
  var out: GroepCijfers = { onderwerpen: Number(m[1]), dagen: Number(m[2]) };
  if (out.dagen > 28) return null;
  if (m[3] !== undefined) {
    var v = { goed: Number(m[3]), van: Number(m[4]) };
    if (v.van < 1 || v.goed > v.van) return null;
    out.voor = v;
  }
  if (m[5] !== undefined) {
    var n = { goed: Number(m[5]), van: Number(m[6]) };
    if (n.van < 1 || n.goed > n.van) return null;
    out.na = n;
  }
  return out;
}
