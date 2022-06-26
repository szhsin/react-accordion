import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { AccordionProvider } from './AccordionProvider.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["children"];

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/jsx(AccordionProvider, _extends({}, rest, {
    children: /*#__PURE__*/jsx("div", {
      className: "szh-accordion",
      children: children
    })
  }));
};

export { Accordion };
