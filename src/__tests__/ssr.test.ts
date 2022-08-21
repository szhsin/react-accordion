/**
 * @jest-environment node
 */

import { renderToString } from 'react-dom/server';
import { getAccordion } from './utils';

test('Server rendering', () => {
  expect(renderToString(getAccordion())).toContain('szh-accordion__item--status-exited');
  expect(renderToString(getAccordion({ props: { mountOnEnter: true } }))).toContain(
    'szh-accordion__item--status-unmounted'
  );
  expect(renderToString(getAccordion({ props: { initialEntered: true } }))).toContain(
    'szh-accordion__item--status-entered'
  );
});
