import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useHeightTransition } from '../hooks/useHeightTransition.js';
import { useMergeRef } from '../hooks/useMergeRef.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var _excluded = ["itemKey", "initialEntered", "className", "header", "headerProps", "buttonProps", "contentProps", "panelProps", "children"];

var getRenderNode = function getRenderNode(nodeOrFunc, props) {
  return typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
};

var AccordionItem = /*#__PURE__*/forwardRef(function (_ref, forwardedRef) {
  var itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered,
      className = _ref.className,
      header = _ref.header,
      headerProps = _ref.headerProps,
      buttonProps = _ref.buttonProps,
      contentProps = _ref.contentProps,
      panelProps = _ref.panelProps,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useAccordionItem = useAccordionItem({
    itemKey: itemKey,
    initialEntered: initialEntered
  }),
      itemRef = _useAccordionItem.itemRef,
      states = _useAccordionItem.states,
      toggle = _useAccordionItem.toggle,
      _buttonProps = _useAccordionItem.buttonProps,
      _panelProps = _useAccordionItem.panelProps;

  var _useHeightTransition = useHeightTransition(states),
      transitionStyle = _useHeightTransition[0],
      _panelRef = _useHeightTransition[1];

  var panelRef = useMergeRef(panelProps == null ? void 0 : panelProps.ref, _panelRef);
  var state = states.state,
      isMounted = states.isMounted,
      isEnter = states.isEnter;
  var modifiers = {
    state: state,
    expanded: isEnter
  };
  var renderProps = {
    states: states,
    toggle: toggle
  };
  return /*#__PURE__*/jsxs("div", _extends({}, rest, {
    ref: useMergeRef(forwardedRef, itemRef),
    className: bem(ACCORDION_BLOCK, 'item', modifiers, className, true),
    children: [/*#__PURE__*/jsx("h3", _extends({}, headerProps, {
      style: _extends({
        margin: 0
      }, headerProps == null ? void 0 : headerProps.style),
      className: bem(ACCORDION_BLOCK, 'header', modifiers, headerProps == null ? void 0 : headerProps.className),
      children: /*#__PURE__*/jsx("button", _extends({}, buttonProps, _buttonProps, {
        type: "button",
        className: bem(ACCORDION_BLOCK, 'btn', modifiers, buttonProps == null ? void 0 : buttonProps.className),
        children: getRenderNode(header, renderProps)
      }))
    })), isMounted && /*#__PURE__*/jsx("div", _extends({}, contentProps, {
      style: _extends({
        display: state === 'exited' ? 'none' : undefined
      }, transitionStyle, contentProps == null ? void 0 : contentProps.style),
      className: bem(ACCORDION_BLOCK, 'content', modifiers, contentProps == null ? void 0 : contentProps.className),
      children: /*#__PURE__*/jsx("div", _extends({}, panelProps, _panelProps, {
        ref: panelRef,
        className: bem(ACCORDION_BLOCK, 'panel', modifiers, panelProps == null ? void 0 : panelProps.className),
        children: getRenderNode(children, renderProps)
      }))
    }))]
  }));
});
AccordionItem.displayName = 'AccordionItem';

export { AccordionItem };
