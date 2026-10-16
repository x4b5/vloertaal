/**
 * How "Alle onderwerpen" shows the topics: by theme (the default) or in the order of the path.
 * Kept on this device only (a convenience: a private window simply shows the themes again).
 */
export type TopicsOrder = 'theme' | 'route';

const KEY = 'vloertaal:topicsOrder';

export function loadTopicsOrder(): TopicsOrder {
  try {
    return localStorage.getItem(KEY) === 'route' ? 'route' : 'theme';
  } catch {
    return 'theme';
  }
}

export function saveTopicsOrder(order: TopicsOrder): void {
  try {
    if (order === 'theme') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, order);
  } catch {
    // Private mode: the choice holds for this visit only.
  }
}
