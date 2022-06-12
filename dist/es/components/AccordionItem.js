import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var AccordionItem = function AccordionItem(_ref) {
  var header = _ref.header,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem(),
      itemRef = _useAccordionItem.itemRef,
      toggle = _useAccordionItem.toggle,
      state = _useAccordionItem.state;

  return /*#__PURE__*/jsxs("div", {
    ref: itemRef,
    children: [/*#__PURE__*/jsx("h3", {
      children: /*#__PURE__*/jsx("button", {
        onClick: function onClick() {
          return toggle(itemRef.current);
        },
        children: header
      })
    }), /*#__PURE__*/jsx("div", {
      role: "region",
      className: state == null ? void 0 : state.state,
      style: {
        display: state != null && state.isEnter ? 'block' : 'none'
      },
      children: children
    })]
  });
};

export { AccordionItem };
