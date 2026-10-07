/** Help-language translations for the workplace-culture tips and the "Working together" unit. */
export interface CultureTranslation {
  /** Keys match the `ui` object in en.json. */
  ui: Record<string, string>;
  /** Keys match the `gloss` object in en.json (ids from src/content/culture.ts). */
  gloss: Record<string, string>;
}
