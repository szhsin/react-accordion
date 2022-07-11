import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { AccordionProvider } from './AccordionProvider.js';
import { useAccordion } from '../hooks/useAccordion.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["className", "allowMultiple", "initialEntered", "mountOnEnter", "unmountOnExit", "transition", "transitionTimeout", "onStateChange"];

var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      allowMultiple = _ref.allowMultiple,
      initialEntered = _ref.initialEntered,
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit,
      transition = _ref.transition,
      transitionTimeout = _ref.transitionTimeout,
      onStateChange = _ref.onStateChange,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useAccordion = useAccordion(),
      accordionProps = _useAccordion.accordionProps;

  return /*#__PURE__*/jsx(AccordionProvider, {
    allowMultiple: allowMultiple,
    initialEntered: initialEntered,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    transition: transition,
    transitionTimeout: transitionTimeout,
    onStateChange: onStateChange,
    children: /*#__PURE__*/jsx("div", _extends({}, rest, accordionProps, {
      className: bem(ACCORDION_BLOCK, undefined, undefined, className)
    }))
  });
};

export { Accordion };
