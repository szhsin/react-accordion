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
      headerProps = _ref.headerProps,
      buttonProps = _ref.buttonProps,
      contentProps = _ref.contentProps,
      panelProps = _ref.panelProps,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem({
    itemKey: itemKey,
    initialEntered: initialEntered
  }),
      itemRef = _useAccordionItem.itemRef,
      _buttonProps = _useAccordionItem.buttonProps,
      _panelProps = _useAccordionItem.panelProps,
      _useAccordionItem$sta = _useAccordionItem.state,
      state = _useAccordionItem$sta.state,
      isMounted = _useAccordionItem$sta.isMounted,
      isEnter = _useAccordionItem$sta.isEnter;

  var _useHeightTransition = useHeightTransition(state),
      transitionStyle = _useHeightTransition[0],
      panelRef = _useHeightTransition[1];

  var modifiers = {
    state: state,
    expanded: isEnter
  };
  return /*#__PURE__*/jsxs("div", {
    ref: itemRef,
    className: bem(ACCORDION_BLOCK, 'item', modifiers, className, true),
    children: [/*#__PURE__*/jsx("h3", _extends({}, headerProps, {
      style: _extends({
        margin: 0
      }, headerProps == null ? void 0 : headerProps.style),
      className: bem(ACCORDION_BLOCK, 'header', modifiers, headerProps == null ? void 0 : headerProps.className),
      children: /*#__PURE__*/jsx("button", _extends({}, buttonProps, _buttonProps, {
        type: "button",
        className: bem(ACCORDION_BLOCK, 'btn', modifiers, buttonProps == null ? void 0 : buttonProps.className),
        children: header
      }))
    })), isMounted && /*#__PURE__*/jsx("div", _extends({}, contentProps, {
      style: _extends({
        display: state === 'exited' ? 'none' : undefined
      }, transitionStyle, contentProps == null ? void 0 : contentProps.style),
      className: bem(ACCORDION_BLOCK, 'content', modifiers, contentProps == null ? void 0 : contentProps.className),
      children: /*#__PURE__*/jsx("div", _extends({}, panelProps, _panelProps, {
        ref: panelRef,
        className: bem(ACCORDION_BLOCK, 'panel', modifiers, panelProps == null ? void 0 : panelProps.className),
        children: children
      }))
    }))]
  });
};

export { AccordionItem };
