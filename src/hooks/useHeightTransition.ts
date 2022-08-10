import { RefObject, CSSProperties, useState, useRef, useCallback } from 'react';
import { TransitionState } from 'react-transition-state';
import { useLayoutEffect } from '../utils/useIsomorphicLayoutEffect';

const useHeightTransition = <E extends Element>({ status, isResolved }: TransitionState) => {
  const [_height, setHeight] = useState<number>();
  const elementRef = useRef<E | null>(null);
  const resizeObserver = useRef<ResizeObserver>();

  const cbRef = useCallback((element: E | null) => {
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
    status === 'preEnter' && setHeight(elementRef.current?.getBoundingClientRect().height);
  }, [status]);

  const style: CSSProperties = {
    height:
      status === 'preEnter' || status === 'exiting'
        ? 0
        : status === 'entering' || status === 'preExit'
        ? _height
        : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };
  return [style, cbRef, elementRef as RefObject<E>] as const;
};

export { useHeightTransition };
