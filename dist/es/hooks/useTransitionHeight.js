import { useState, useRef, useCallback, useLayoutEffect } from 'react';

var useTransitionHeight = function useTransitionHeight(state) {
  var _useState = useState(),
      height = _useState[0],
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

        console.log('Observer1', height);
        height && setHeight(height);
      });
      observer.observe(element, {
        box: 'border-box'
      });
      resizeObserver.current = observer;
    }
  }, []);
  useLayoutEffect(function () {
    if (state === 'preEnter') {
      var _elementRef$current;

      var _height = (_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.getBoundingClientRect().height;

      console.log('height', _height);
      setHeight(_height);
    }
  }, [state]);
  return [height, cbRef, elementRef];
};

export { useTransitionHeight };
