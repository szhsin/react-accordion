'use strict';

var React = require('react');
var useIsomorphicLayoutEffect = require('../utils/useIsomorphicLayoutEffect.cjs');

const useHeightTransition = ({
  status,
  isResolved
}) => {
  const [height, setHeight] = React.useState();
  const elementRef = React.useRef(null);
  useIsomorphicLayoutEffect.useLayoutEffect(() => {
    (status === 'preEnter' || status === 'preExit') && setHeight(elementRef.current.getBoundingClientRect().height);
  }, [status]);
  const style = {
    height: status === 'preEnter' || status === 'exiting' ? 0 : status === 'entering' || status === 'preExit' ? height : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };
  return [style, elementRef];
};

exports.useHeightTransition = useHeightTransition;
