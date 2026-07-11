import { renderHook } from '@testing-library/react';
import { useId } from '../../hooks/useId';

vi.mock('react', async () => {
  const originalModule = await vi.importActual<{ default: { useId: unknown } }>('react');
  return {
    ...originalModule,
    default: { ...originalModule.default, useId: undefined }
  };
});

test('useId', () => {
  const id1 = renderHook(() => useId());
  const id2 = renderHook(() => useId());
  expect(id1.result.current).toBe('szh-adn-1');
  expect(id2.result.current).toBe('szh-adn-2');
  id1.rerender();
  id2.rerender();
  expect(id1.result.current).toBe('szh-adn-1');
  expect(id2.result.current).toBe('szh-adn-2');
});
