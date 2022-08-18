import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useTransitionMap } from 'react-transition-state';

var _excluded = ["transition", "transitionTimeout"];

var getTransition = function getTransition(transition, name) {
  return transition === true || !!(transition && transition[name]);
};

var useAccordionProvider = function useAccordionProvider(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      transition = _ref.transition,
      transitionTimeout = _ref.transitionTimeout,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var transitionMap = useTransitionMap(_extends({
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
