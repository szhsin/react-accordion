import { AccordionProvider } from './AccordionProvider.js';
import { jsx } from 'react/jsx-runtime';

var Accordion = function Accordion(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/jsx(AccordionProvider, {
    children: /*#__PURE__*/jsx("div", {
      children: children
    })
  });
};

export { Accordion };
