import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef, memo } from 'react';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { mergeProps } from '../utils/mergeProps.js';
import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useAccordionItemState } from '../hooks/useAccordionItemState.js';
import { useHeightTransition } from '../hooks/useHeightTransition.js';
import { useMergeRef } from '../hooks/useMergeRef.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var _excluded = ["itemKey", "initialEntered"],
    _excluded2 = ["forwardedRef", "itemRef", "state", "toggle", "className", "header", "headingProps", "buttonProps", "contentProps", "panelProps", "children"];

var withAccordionItemState = function withAccordionItemState(WrappedItem) {
  var WithAccordionItemState = /*#__PURE__*/forwardRef(function (_ref, ref) {
    var itemKey = _ref.itemKey,
        initialEntered = _ref.initialEntered,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

    return /*#__PURE__*/jsx(WrappedItem, _extends({
      forwardedRef: ref
    }, rest, useAccordionItemState({
      itemKey: itemKey,
      initialEntered: initialEntered
    })));
  });
  WithAccordionItemState.displayName = 'WithAccordionItemState';
  return WithAccordionItemState;
};

var getRenderNode = function getRenderNode(nodeOrFunc, props) {
  return typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
};

var WrappedItem = /*#__PURE__*/memo(function (_ref2) {
  var forwardedRef = _ref2.forwardedRef,
      itemRef = _ref2.itemRef,
      state = _ref2.state,
      toggle = _ref2.toggle,
      className = _ref2.className,
      header = _ref2.header,
      headingProps = _ref2.headingProps,
      buttonProps = _ref2.buttonProps,
      contentProps = _ref2.contentProps,
      panelProps = _ref2.panelProps,
      children = _ref2.children,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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
    children: [/*#__PURE__*/jsx("h3", _extends({}, headingProps, {
      style: _extends({
        margin: 0
      }, headingProps && headingProps.style),
      className: bem(ACCORDION_BLOCK, 'item-heading', modifiers, headingProps && headingProps.className),
      children: /*#__PURE__*/jsx("button", _extends({}, mergeProps(_buttonProps, buttonProps), {
        type: "button",
        className: bem(ACCORDION_BLOCK, 'item-btn', modifiers, buttonProps && buttonProps.className),
        children: getRenderNode(header, itemState)
      }))
    })), isMounted && /*#__PURE__*/jsx("div", _extends({}, contentProps, {
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
var AccordionItem = /*#__PURE__*/withAccordionItemState(WrappedItem);

export { AccordionItem, withAccordionItemState };
