import { Character } from './Characters';

/**
 * The first page after the language was picked: Bram waves once and says "Hallo!" (the recorded
 * "hallo" plays on that tap, src/components/Screens.tsx). A picture, not a button; it sits in the
 * free top-end corner of the page, so the question does not move down.
 */
export function Greeting({ rtl = false }: { rtl?: boolean }) {
  // Right to left the back arrow is in the top-right corner, so Bram stands top-left (mirrored).
  return (
    <div className={`onb-greet ${rtl ? 'onb-greet-rtl' : ''}`} dir="ltr" aria-hidden>
      <span className="onb-greet-word" lang="nl">Hallo!</span>
      <Character who="bram" mood="wave" size={60} flip={rtl} />
    </div>
  );
}
