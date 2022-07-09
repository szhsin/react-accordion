import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useHeightTransition } from '../hooks/useHeightTransition.js';
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
      panelProps = _useAccordionItem.panelProps,
      _useAccordionItem$sta = _useAccordionItem.state,
      state = _useAccordionItem$sta.state,
      isMounted = _useAccordionItem$sta.isMounted,
      isEnter = _useAccordionItem$sta.isEnter;

  var _useHeightTransition = useHeightTransition(state),
      transitionStyle = _useHeightTransition[0],
      panelRef = _useHeightTransition[1];

  return /*#__PURE__*/jsxs("div", {
    ref: itemRef,
    className: bem(ACCORDION_BLOCK, 'item', {
      state: state,
      expanded: isEnter
    }, className, true),
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
      style: _extends({
        display: state === 'exited' ? 'none' : undefined
      }, transitionStyle),
      children: /*#__PURE__*/jsx("div", _extends({
        ref: panelRef
      }, panelProps, {
        children: children
      }))
    })]
  });
};

export { AccordionItem };
