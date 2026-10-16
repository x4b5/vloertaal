import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { Crashed } from '../src/components/Splash';

function Broken(): never {
  throw new Error('broken screen');
}

describe('a drawing error', () => {
  it('shows the splash with "Try again", not a blank screen', () => {
    // Server rendering has no error boundaries: draw the fallback state directly.
    expect(Crashed.getDerivedStateFromError()).toEqual({ failed: true });
    const guard = new Crashed({ children: createElement(Broken) });
    guard.state = { failed: true };
    const html = renderToStaticMarkup(guard.render() as React.ReactElement);
    expect(html).toContain('boot-retry');
    expect(html).toContain('aria-label="Try again"');
  });

  it('draws the app as it is while nothing breaks', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(renderToStaticMarkup(createElement(Crashed, null, createElement('p', null, 'ok')))).toBe('<p>ok</p>');
  });
});
