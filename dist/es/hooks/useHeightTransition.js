import { useState, useRef, useCallback } from 'react';
import { useLayoutEffect as useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect.js';

var useHeightTransition = function useHeightTransition(_ref) {
  var status = _ref.status,
      isResolved = _ref.isResolved;

  var _useState = useState(),
      _height = _useState[0],
      setHeight = _useState[1];

  var elementRef = useRef(null);
  var resizeObserver = useRef();
  var cbRef = useCallback(function (element) {
    var _resizeObserver$curre;

    elementRef.current = element;
    if (typeof ResizeObserver !== 'function') return;
    (_resizeObserver$curre = resizeObserver.current) == null ? void 0 : _resizeObserver$curre.disconnect();
    resizeObserver.current = undefined;

    if (element) {
      var observer = new ResizeObserver(function () {
        var _element$getBoundingC = element.getBoundingClientRect(),
            height = _element$getBoundingC.height;

        height && setHeight(height);
      });
      observer.observe(element, {
        box: 'border-box'
      });
      resizeObserver.current = observer;
    }
  }, []);
  useIsomorphicLayoutEffect(function () {
    var _elementRef$current;

    status === 'preEnter' && setHeight((_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.getBoundingClientRect().height);
  }, [status]);
  var style = {
    height: status === 'preEnter' || status === 'exiting' ? 0 : status === 'entering' || status === 'preExit' ? _height : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };
  return [style, cbRef, elementRef];
};

export { useHeightTransition };
