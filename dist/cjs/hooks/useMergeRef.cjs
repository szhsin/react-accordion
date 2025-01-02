'use strict';

var React = require('react');

function setRef(ref, instance) {
  typeof ref === 'function' ? ref(instance) : ref.current = instance;
}
function useMergeRef(refA, refB) {
  return React.useMemo(() => {
    if (!refA) return refB;
    if (!refB) return refA;
    return instance => {
      setRef(refA, instance);
      setRef(refB, instance);
    };
  }, [refA, refB]);
}

exports.useMergeRef = useMergeRef;
