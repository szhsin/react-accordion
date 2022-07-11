import { RefObject, CSSProperties, useState, useRef, useCallback } from 'react';
import { State } from 'react-transition-state';
import { useLayoutEffect } from '../utils/useIsomorphicLayoutEffect';

const useHeightTransition: (
  states: State
) => [CSSProperties, (element: Element | null) => void, RefObject<Element>] = ({
  state,
  isResolved
}) => {
  const [_height, setHeight] = useState<number>();
  const elementRef = useRef<Element | null>(null);
  const resizeObserver = useRef<ResizeObserver>();

  const cbRef = useCallback((element: Element | null) => {
    elementRef.current = element;
    if (typeof ResizeObserver !== 'function') return;
    resizeObserver.current?.disconnect();
    resizeObserver.current = undefined;

    if (element) {
      const observer = new ResizeObserver(() => {
        const { height } = element.getBoundingClientRect();
        height && setHeight(height);
      });
      observer.observe(element, { box: 'border-box' });
      resizeObserver.current = observer;
    }
  }, []);

  useLayoutEffect(() => {
    state === 'preEnter' && setHeight(elementRef.current?.getBoundingClientRect().height);
  }, [state]);

  const height =
    state === 'preEnter' || state === 'exiting'
      ? 0
      : state === 'entering' || state === 'preExit'
      ? _height
      : undefined;

  return [{ height, overflow: isResolved ? undefined : 'hidden' }, cbRef, elementRef];
};

export { useHeightTransition };
