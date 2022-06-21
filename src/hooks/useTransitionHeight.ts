import { RefObject, useState, useRef, useCallback, useLayoutEffect } from 'react';
import { TransitionState } from 'react-transition-state';

const useTransitionHeight: (
  state?: TransitionState
) => [number | undefined, (element: HTMLElement | null) => void, RefObject<HTMLElement>] = (
  state?: TransitionState
) => {
  const [height, setHeight] = useState<number>();
  const elementRef = useRef<HTMLElement | null>(null);
  const resizeObserver = useRef<ResizeObserver>();

  const cbRef = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
    if (typeof ResizeObserver !== 'function') return;
    resizeObserver.current?.disconnect();
    resizeObserver.current = undefined;

    if (element) {
      const observer = new ResizeObserver(() => {
        const { height } = element.getBoundingClientRect();
        console.log('Observer1', height);
        height && setHeight(height);
      });
      observer.observe(element, { box: 'border-box' });
      resizeObserver.current = observer;
    }
  }, []);

  useLayoutEffect(() => {
    if (state === 'preEnter') {
      const height = elementRef.current?.getBoundingClientRect().height;
      console.log('height', height);
      setHeight(height);
    }
  }, [state]);

  return [height, cbRef, elementRef];
};

export { useTransitionHeight };
