import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { memo, createElement } from 'react';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { mergeProps } from '../utils/mergeProps.js';
import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useHeightTransition } from '../hooks/useHeightTransition.js';
import { useMergeRef } from '../hooks/useMergeRef.js';
import { withAccordionItem } from './withAccordionItem.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var _excluded = ["forwardedRef", "itemRef", "state", "toggle", "className", "header", "headingTag", "headingProps", "buttonProps", "contentProps", "panelProps", "children"];

var getRenderNode = function getRenderNode(nodeOrFunc, props) {
  return typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
};

var WrappedItem = /*#__PURE__*/memo(function (_ref) {
  var forwardedRef = _ref.forwardedRef,
      itemRef = _ref.itemRef,
      state = _ref.state,
      toggle = _ref.toggle,
      className = _ref.className,
      header = _ref.header,
      headingTag = _ref.headingTag,
      headingProps = _ref.headingProps,
      buttonProps = _ref.buttonProps,
      contentProps = _ref.contentProps,
      panelProps = _ref.panelProps,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var itemState = {
    state: state,
    toggle: toggle
  };

  var _useAccordionItem = useAccordionItem(itemState),
      _buttonProps = _useAccordionItem.buttonProps,
      _panelProps = _useAccordionItem.panelProps;

  var _useHeightTransition = useHeightTransition(state),
      transitionStyle = _useHeightTransition[0],
      _panelRef = _useHeightTransition[1];

  var panelRef = useMergeRef(panelProps && panelProps.ref, _panelRef);
  var status = state.status,
      isMounted = state.isMounted,
      isEnter = state.isEnter;
  var modifiers = {
    status: status,
    expanded: isEnter
  };
  return /*#__PURE__*/jsxs("div", _extends({}, rest, {
    ref: useMergeRef(forwardedRef, itemRef),
    className: bem(ACCORDION_BLOCK, 'item', modifiers, className, true),
    children: [/*#__PURE__*/createElement(headingTag || 'h3', _extends({}, headingProps, {
      style: _extends({
        margin: 0
      }, headingProps && headingProps.style),
      className: bem(ACCORDION_BLOCK, 'item-heading', modifiers, headingProps && headingProps.className)
    }), /*#__PURE__*/jsx("button", _extends({}, mergeProps(_buttonProps, buttonProps), {
      type: "button",
      className: bem(ACCORDION_BLOCK, 'item-btn', modifiers, buttonProps && buttonProps.className),
      children: getRenderNode(header, itemState)
    }))), isMounted && /*#__PURE__*/jsx("div", _extends({}, contentProps, {
      style: _extends({
        display: status === 'exited' ? 'none' : undefined
      }, transitionStyle, contentProps && contentProps.style),
      className: bem(ACCORDION_BLOCK, 'item-content', modifiers, contentProps && contentProps.className),
      children: /*#__PURE__*/jsx("div", _extends({}, mergeProps(_panelProps, panelProps), {
        ref: panelRef,
        className: bem(ACCORDION_BLOCK, 'item-panel', modifiers, panelProps && panelProps.className),
        children: getRenderNode(children, itemState)
      }))
    }))]
  }));
});
WrappedItem.displayName = 'AccordionItem';
var AccordionItem = /*#__PURE__*/withAccordionItem(WrappedItem);

export { AccordionItem };
