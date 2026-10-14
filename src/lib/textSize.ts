/**
 * "Text size" (Settings): normal, large, extra large. Set as data-text on <html>; styles.css
 * scales the root font size (all rem type) and the body size (all em type) from it.
 */
export type TextSize = 'normal' | 'large' | 'xl';

export const TEXT_SIZES: TextSize[] = ['normal', 'large', 'xl'];

export function applyTextSize(size: TextSize | undefined): void {
  const root = document.documentElement;
  if (!size || size === 'normal' || !TEXT_SIZES.includes(size)) delete root.dataset.text;
  else root.dataset.text = size;
}
