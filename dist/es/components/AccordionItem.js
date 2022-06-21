import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useTransitionHeight } from '../hooks/useTransitionHeight.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var AccordionItem = function AccordionItem(_ref) {
  var header = _ref.header,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem(),
      itemRef = _useAccordionItem.itemRef,
      toggle = _useAccordionItem.toggle,
      _useAccordionItem$sta = _useAccordionItem.state;

  _useAccordionItem$sta = _useAccordionItem$sta === void 0 ? {} : _useAccordionItem$sta;
  var state = _useAccordionItem$sta.state;
  var hidden = !state || state === 'exited';

  var _useTransitionHeight = useTransitionHeight(state),
      height = _useTransitionHeight[0],
      panelRef = _useTransitionHeight[1];

  console.log('state', state);
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
    }), /*#__PURE__*/jsx("div", {
      role: "region",
      className: state,
      style: {
        display: hidden ? 'none' : 'block',
        height: state === 'exiting' || state === 'preEnter' ? 0 : state === 'preExit' || state === 'entering' ? height : undefined,
        transition: 'height .25s ease-in-out',
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
