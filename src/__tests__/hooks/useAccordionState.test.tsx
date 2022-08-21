import { screen, fireEvent } from '@testing-library/react';
import { render, getAccordion } from '../utils';
import { useAccordionState } from '../../';

const MyComponent = ({ itemKey }: { itemKey: string }) => {
  const { getItemState, toggle } = useAccordionState();
  return (
    <>
      <div data-testid="item-state">{getItemState(itemKey).status}</div>
      <button data-testid="item-toggle" onClick={() => toggle(itemKey)}>
        Toggle
      </button>
    </>
  );
};

test('useAccordionState', () => {
  render(
    getAccordion({
      item1Props: {
        itemKey: 'item1',
        children: <MyComponent itemKey="item1" />
      }
    })
  );
  expect(screen.getByTestId('item-state')).toHaveTextContent('exited');
  fireEvent.click(screen.getByTestId('item-toggle'));
  expect(screen.getByTestId('item-state')).toHaveTextContent('entered');
});
