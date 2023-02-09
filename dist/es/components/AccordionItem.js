import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { memo } from 'react';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { mergeProps } from '../utils/mergeProps.js';
import { useAccordionItem } from '../hooks/useAccordionItem.js';
import { useHeightTransition } from '../hooks/useHeightTransition.js';
import { useMergeRef } from '../hooks/useMergeRef.js';
import { withAccordionItem } from './withAccordionItem.js';
import { jsxs, jsx } from 'react/jsx-runtime';

const _excluded = ["forwardedRef", "itemRef", "state", "toggle", "className", "disabled", "header", "headingTag", "headingProps", "buttonProps", "contentProps", "panelProps", "children"];
const getRenderNode = (nodeOrFunc, props) => typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
const WrappedItem = /*#__PURE__*/memo(_ref => {
  let {
      forwardedRef,
      itemRef,
      state,
      toggle,
      className,
      disabled,
      header,
      headingTag: Heading = 'h3',
      headingProps,
      buttonProps,
      contentProps,
      panelProps,
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  const itemState = {
    state,
    toggle,
    disabled
  };
  const {
    buttonProps: _buttonProps,
    panelProps: _panelProps
  } = useAccordionItem(itemState);
  const [transitionStyle, _panelRef] = useHeightTransition(state);
  const panelRef = useMergeRef(panelProps && panelProps.ref, _panelRef);
  const {
    status,
    isMounted,
    isEnter
  } = state;
  return /*#__PURE__*/jsxs("div", _extends({}, rest, {
    ref: useMergeRef(forwardedRef, itemRef),
    className: bem(ACCORDION_BLOCK, 'item', {
      status,
      expanded: isEnter
    })(className, state),
    children: [/*#__PURE__*/jsx(Heading, _extends({}, headingProps, {
      style: _extends({
        margin: 0
      }, headingProps && headingProps.style),
      className: bem(ACCORDION_BLOCK, 'item-heading')(headingProps && headingProps.className, state),
      children: /*#__PURE__*/jsx("button", _extends({}, mergeProps(_buttonProps, buttonProps), {
        type: "button",
        className: bem(ACCORDION_BLOCK, 'item-btn')(buttonProps && buttonProps.className, state),
        children: getRenderNode(header, itemState)
      }))
    })), isMounted && /*#__PURE__*/jsx("div", _extends({}, contentProps, {
      style: _extends({
        display: status === 'exited' ? 'none' : undefined
      }, transitionStyle, contentProps && contentProps.style),
      className: bem(ACCORDION_BLOCK, 'item-content')(contentProps && contentProps.className, state),
      children: /*#__PURE__*/jsx("div", _extends({}, mergeProps(_panelProps, panelProps), {
        ref: panelRef,
        className: bem(ACCORDION_BLOCK, 'item-panel')(panelProps && panelProps.className, state),
        children: getRenderNode(children, itemState)
      }))
    }))]
  }));
});
WrappedItem.displayName = 'AccordionItem';
const AccordionItem = /*#__PURE__*/withAccordionItem(WrappedItem);

export { AccordionItem };
