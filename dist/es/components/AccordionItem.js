import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useTransitionHeight } from '../hooks/useTransitionHeight.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var AccordionItem = function AccordionItem(_ref) {
  var initialEntered = _ref.initialEntered,
      header = _ref.header,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem({
    initialEntered: initialEntered
  }),
      itemRef = _useAccordionItem.itemRef,
      toggle = _useAccordionItem.toggle,
      _useAccordionItem$sta = _useAccordionItem.state;

  _useAccordionItem$sta = _useAccordionItem$sta === void 0 ? {} : _useAccordionItem$sta;
  var state = _useAccordionItem$sta.state;

  var _useTransitionHeight = useTransitionHeight(state),
      height = _useTransitionHeight[0],
      panelRef = _useTransitionHeight[1];

  return /*#__PURE__*/jsxs("div", {
    ref: itemRef,
    children: [/*#__PURE__*/jsx("h3", {
      style: {
        margin: 0
      },
      children: /*#__PURE__*/jsx("button", {
        onClick: function onClick() {
          return toggle(itemRef.current);
        },
        children: header
      })
    }), state && state !== 'unmounted' && /*#__PURE__*/jsx("div", {
      role: "region",
      className: state,
      style: {
        display: state === 'exited' ? 'none' : undefined,
        height: height,
        transition: 'height .3s ease-in-out',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/jsx("div", {
        ref: panelRef,
        style: {
          padding: '1rem'
        },
        children: children
      })
    })]
  });
};

export { AccordionItem };
