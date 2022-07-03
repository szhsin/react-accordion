import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { AccordionBlock } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { AccordionProvider } from './AccordionProvider.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["className", "children"];

var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/jsx(AccordionProvider, _extends({}, rest, {
    children: /*#__PURE__*/jsx("div", {
      className: bem(AccordionBlock, undefined, undefined, className),
      children: children
    })
  }));
};

export { Accordion };
