import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useTransitionMap } from 'react-transition-state';
import { AccordionContext } from '../utils/constants.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["allowMultiple", "transition", "children"];

var getTransition = function getTransition(transition, name) {
  return transition === true || !!(transition && transition[name]);
};

var AccordionProvider = function AccordionProvider(_ref) {
  var allowMultiple = _ref.allowMultiple,
      transition = _ref.transition,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var transitionMap = useTransitionMap(_extends({
    singleEnter: !allowMultiple,
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit')
  }, rest));
  return /*#__PURE__*/jsx(AccordionContext.Provider, {
    value: _extends({
      mountOnEnter: rest.mountOnEnter,
      initialEntered: rest.initialEntered
    }, transitionMap),
    children: children
  });
};

export { AccordionProvider };
