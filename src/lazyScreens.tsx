import { Component, lazy, Suspense, type ComponentType, type ReactNode } from 'react';
import { Splash } from './components/Splash';

/**
 * Screens a learner does not need on the first open, each in a file of its own, so the app's
 * main file is smaller on a slow phone connection: Settings, the pocket card, the day-streak
 * milestone with the reminder and home-screen pages and the backup (Milestone, Keep), the
 * coaches' page and the owner's admin page.
 *
 * Calm, never a spinner:
 *  - main.tsx renders the first screen once its file is here (with the help language), so the
 *    splash of index.html stays up meanwhile (needAtStart, from App.tsx);
 *  - a few seconds after the start every screen's file loads in the background (warmScreensLater),
 *    and a screen whose file is here renders at once, without a moment of empty screen;
 *  - before that (a quick tap), the app background shows for a moment, the bottom bar stays.
 *  - Their file did not come (no connection, nothing saved): the splash with "Try again".
 *
 * Offline: the build names these files in index.html (vite.config.ts, lazyScreenLinks), so the
 * service worker keeps them with the app and "Lessen bewaren" saves them (src/lib/offline.ts,
 * shellUrls). Only import() of src/components/ files here: that is how the build finds them.
 */

/** One file of screens: loads once (again after a failure) and remembers what it gave. */
interface Part<M> {
  load: () => Promise<M>;
  loaded: () => M | undefined;
}

function part<M>(importer: () => Promise<M>): Part<M> {
  let mod: M | undefined;
  let pending: Promise<M> | null = null;
  return {
    load: () => (pending ??= importer().then(
      (m) => (mod = m),
      (e: unknown) => { pending = null; throw e; },
    )),
    loaded: () => mod,
  };
}

const settings = part(() => import('./components/Settings'));
const pocket = part(() => import('./components/PocketCard'));
const milestone = part(() => import('./components/Milestone'));
const coaches = part(() => import('./components/Coaches'));
const admin = part(() => import('./components/Admin'));
const PARTS: Part<unknown>[] = [settings, pocket, milestone, coaches, admin];

/** The file of a screen of App (its View name), when it has one of its own. */
const OF_VIEW: Partial<Record<string, Part<unknown>>> = { settings, pocket, coaches, admin, keep: milestone, streak: milestone, stopped: milestone };

/** The app background while a screen's file loads: no spinner, nothing to tap, nothing jumps. */
function Waiting() {
  return <div className="screen-wait" aria-busy="true" style={{ minHeight: '100dvh' }} />;
}

/** A screen's file did not load (offline, not saved): the splash with "Try again" (reloads; also by itself when back online). */
class LoadFailed extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  private reload = () => location.reload();
  componentDidUpdate() {
    if (this.state.failed) window.addEventListener('online', this.reload);
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.reload);
  }
  render() {
    return this.state.failed ? <Splash failed onRetry={this.reload} /> : this.props.children;
  }
}

/** A screen of a file of its own, used as the component itself (same props). */
function screen<M, P extends object>(of: Part<M>, pick: (m: M) => ComponentType<P>, name: string): ComponentType<P> {
  type Loaded = { default: ComponentType<P> };
  const make = () => lazy((): Promise<Loaded> => {
    const m = of.loaded();
    // Already here (loaded in the background): a thenable that answers at once, so React renders
    // the screen in this same pass, without suspending (no fallback, no remount).
    if (m) return { then: (done: (v: Loaded) => void) => done({ default: pick(m) }) } as unknown as Promise<Loaded>;
    return of.load().then(
      (mod) => ({ default: pick(mod) }),
      (e: unknown) => {
        // React keeps a failed lazy component failed: the next try (after "Try again", or the
        // screen opened again) gets a new one.
        Lazy = make();
        throw e;
      },
    );
  });
  let Lazy = make();
  function Screen(props: P) {
    const Shown = Lazy as unknown as ComponentType<P>;
    return (
      <LoadFailed>
        <Suspense fallback={<Waiting />}>
          <Shown {...props} />
        </Suspense>
      </LoadFailed>
    );
  }
  Screen.displayName = name;
  return Screen;
}

export const Settings = screen(settings, (m) => m.Settings, 'Settings');
export const PocketCardScreen = screen(pocket, (m) => m.PocketCardScreen, 'PocketCardScreen');
export const Milestone = screen(milestone, (m) => m.Milestone, 'Milestone');
export const KeepScreen = screen(milestone, (m) => m.KeepScreen, 'KeepScreen');
export const StreakStopped = screen(milestone, (m) => m.StreakStopped, 'StreakStopped');
export const Coaches = screen(coaches, (m) => m.Coaches, 'Coaches');
export const Admin = screen(admin, (m) => m.Admin, 'Admin');

let start: Promise<void> = Promise.resolve();

/**
 * The first screen (App's View names; 'stopped': the "streak stopped" page on the home) needs its
 * file: loading starts now, and startScreens() is done when it is here (or failed: the screen then
 * shows "Try again" itself).
 */
export function needAtStart(...views: string[]): void {
  const parts = [...new Set(views.map((v) => OF_VIEW[v]).filter((p): p is Part<unknown> => Boolean(p)))];
  start = Promise.all(parts.map((p) => p.load().catch(() => {}))).then(() => {});
}

/** Done when the first screen's file is here (main.tsx waits for it, with the help language). */
export function startScreens(): Promise<void> {
  return start;
}

/** Loads every screen's file (once; again after a failure). Never rejects. */
export function warmScreens(): Promise<void> {
  return Promise.all(PARTS.map((p) => p.load().catch(() => {}))).then(() => {});
}

/** After the start, when the phone is idle: every screen's file, so each opens at once. Returns a cancel. */
export function warmScreensLater(delay = 3000): () => void {
  let idle: number | undefined;
  const timer = window.setTimeout(() => {
    if (typeof window.requestIdleCallback === 'function') idle = window.requestIdleCallback(() => { void warmScreens(); }, { timeout: 5000 });
    else void warmScreens();
  }, delay);
  return () => {
    window.clearTimeout(timer);
    if (idle !== undefined) window.cancelIdleCallback?.(idle);
  };
}
