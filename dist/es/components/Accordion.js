import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { AccordionProvider } from './AccordionProvider.js';
import { useAccordion } from '../hooks/useAccordion.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["className", "children"];

var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useAccordion = useAccordion(),
      accordionProps = _useAccordion.accordionProps;

  return /*#__PURE__*/jsx(AccordionProvider, _extends({}, rest, {
    children: /*#__PURE__*/jsx("div", _extends({
      className: bem(ACCORDION_BLOCK, undefined, undefined, className)
    }, accordionProps, {
      children: children
    }))
  }));
};

export { Accordion };
