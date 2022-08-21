import { renderHook } from '@testing-library/react';
import { useId } from '../../hooks/useId';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useId: undefined
}));

test('useId', () => {
  const id1 = renderHook(() => useId());
  const id2 = renderHook(() => useId());
  expect(id1.result.current).toEqual('szh-adn-1');
  expect(id2.result.current).toEqual('szh-adn-2');
  id1.rerender();
  id2.rerender();
  expect(id1.result.current).toEqual('szh-adn-1');
  expect(id2.result.current).toEqual('szh-adn-2');
});
