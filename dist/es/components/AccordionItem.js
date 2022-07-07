import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useTransitionHeight } from '../hooks/useTransitionHeight.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var AccordionItem = function AccordionItem(_ref) {
  var itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered,
      className = _ref.className,
      header = _ref.header,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem({
    itemKey: itemKey,
    initialEntered: initialEntered
  }),
      itemRef = _useAccordionItem.itemRef,
      buttonProps = _useAccordionItem.buttonProps,
      _useAccordionItem$sta = _useAccordionItem.state,
      state = _useAccordionItem$sta.state,
      isMounted = _useAccordionItem$sta.isMounted,
      isEnter = _useAccordionItem$sta.isEnter;

  var _useTransitionHeight = useTransitionHeight(state),
      height = _useTransitionHeight[0],
      panelRef = _useTransitionHeight[1];

  return /*#__PURE__*/jsxs("div", {
    ref: itemRef,
    className: bem(ACCORDION_BLOCK, 'item', {
      state: state,
      expanded: isEnter
    }, className),
    children: [/*#__PURE__*/jsx("h3", {
      style: {
        margin: 0
      },
      children: /*#__PURE__*/jsx("button", _extends({
        type: "button"
      }, buttonProps, {
        children: header
      }))
    }), isMounted && /*#__PURE__*/jsx("div", {
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
