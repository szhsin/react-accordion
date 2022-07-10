import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { AccordionProvider } from './AccordionProvider.js';
import { useAccordion } from '../hooks/useAccordion.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["className", "transition", "initialEntered", "mountOnEnter", "unmountOnExit", "singleEnter", "timeout", "onChange"];

var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      transition = _ref.transition,
      initialEntered = _ref.initialEntered,
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit,
      singleEnter = _ref.singleEnter,
      timeout = _ref.timeout,
      onChange = _ref.onChange,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useAccordion = useAccordion(),
      accordionProps = _useAccordion.accordionProps;

  return /*#__PURE__*/jsx(AccordionProvider, {
    transition: transition,
    initialEntered: initialEntered,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    singleEnter: singleEnter,
    timeout: timeout,
    onChange: onChange,
    children: /*#__PURE__*/jsx("div", _extends({}, rest, accordionProps, {
      className: bem(ACCORDION_BLOCK, undefined, undefined, className)
    }))
  });
};

export { Accordion };
