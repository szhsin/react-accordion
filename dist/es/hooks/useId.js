import { useId, useState, useEffect } from 'react';
import { ACCORDION_PREFIX } from '../utils/constants.js';

var current = 0;
var useIdShim = function useIdShim() {
  var _useState = useState(),
    id = _useState[0],
    setId = _useState[1];
  useEffect(function () {
    return setId(++current);
  }, []);
  return id && ACCORDION_PREFIX + "-" + id;
};
var _useId = useId || useIdShim;

export { _useId as useId };
