import { useState, useRef } from 'react';
import { useLayoutEffect as useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect.js';

const useHeightTransition = ({
  status,
  isResolved
}) => {
  const [height, setHeight] = useState();
  const elementRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    (status === 'preEnter' || status === 'preExit') && setHeight(elementRef.current.getBoundingClientRect().height);
  }, [status]);
  const style = {
    height: status === 'preEnter' || status === 'exiting' ? 0 : status === 'entering' || status === 'preExit' ? height : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };
  return [style, elementRef];
};

export { useHeightTransition };
