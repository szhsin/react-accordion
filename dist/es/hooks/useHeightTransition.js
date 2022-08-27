import { useState, useRef } from 'react';
import { useLayoutEffect as useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect.js';

var useHeightTransition = function useHeightTransition(_ref) {
  var status = _ref.status,
      isResolved = _ref.isResolved;

  var _useState = useState(),
      height = _useState[0],
      setHeight = _useState[1];

  var elementRef = useRef(null);
  useIsomorphicLayoutEffect(function () {
    status === 'preEnter' || status === 'preExit' ? setHeight(elementRef.current.getBoundingClientRect().height) : status === 'entered' && setHeight(undefined);
  }, [status]);
  var style = {
    height: status === 'preEnter' || status === 'exiting' ? 0 : status === 'entering' || status === 'preExit' ? height : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };
  return [style, elementRef];
};

export { useHeightTransition };
