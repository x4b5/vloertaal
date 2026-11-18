import type { HelpLanguage } from '../i18n/types';
import { ui } from '../i18n';
import { SPEED_MIN, SPEED_STEP, speedLabel } from '../lib/speakSpeed';
import { Bi } from './Bi';
import { SlowIcon } from './Icons';
import { useSpeakSpeed } from './useSpeakSpeed';
import '../klank.css';

/**
 * The speed of the Dutch a learner hears: a turtle at the slow end of a slider (¼×) up to as it is
 * (1×). The one of "Hoe zeg je het?" (the owner, 4 November 2026), made reusable (17 November 2026):
 * it sets the app's chosen speed (src/lib/speakSpeed.ts), which every speaker given `speed` plays at.
 * Runs left to right in every language (it is a scale, like the Dutch it slows down).
 */
export function SpeedSlider({ lang }: { lang?: HelpLanguage }) {
  const [speed, setSpeed] = useSpeakSpeed();
  return (
    <label className="klank-slider klank-speed" dir="ltr">
      <span className="sr-only"><Bi text={ui('klankSpeed', lang)} /></span>
      <SlowIcon size={28} />
      <input
        type="range" min={SPEED_MIN} max={1} step={SPEED_STEP} value={speed}
        aria-valuetext={speedLabel(speed)}
        onChange={(e) => setSpeed(Number(e.currentTarget.value))}
      />
      <span className="klank-speed-now" aria-hidden>{speedLabel(speed)}</span>
    </label>
  );
}
