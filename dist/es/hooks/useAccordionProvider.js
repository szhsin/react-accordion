import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useTransitionMap } from 'react-transition-state';

const _excluded = ["transition", "transitionTimeout"];
const getTransition = (transition, name) => transition === true || !!(transition && transition[name]);
const useAccordionProvider = (_ref = {}) => {
  let {
      transition,
      transitionTimeout
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  const transitionMap = useTransitionMap(_extends({
    timeout: transitionTimeout,
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit')
  }, rest));
  return _extends({
    mountOnEnter: !!rest.mountOnEnter,
    initialEntered: !!rest.initialEntered
  }, transitionMap);
};

export { useAccordionProvider };
