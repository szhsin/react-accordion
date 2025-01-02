'use strict';

var React = require('react');
var constants = require('../utils/constants.cjs');
var bem = require('../utils/bem.cjs');
var mergeProps = require('../utils/mergeProps.cjs');
var useAccordionItem = require('../hooks/useAccordionItem.cjs');
var useHeightTransition = require('../hooks/useHeightTransition.cjs');
var useMergeRef = require('../hooks/useMergeRef.cjs');
var withAccordionItem = require('./withAccordionItem.cjs');
var jsxRuntime = require('react/jsx-runtime');

const getRenderNode = (nodeOrFunc, props) => typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
const WrappedItem = /*#__PURE__*/React.memo(({
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
  children,
  ...rest
}) => {
  const itemState = {
    state,
    toggle,
    disabled
  };
  const {
    buttonProps: _buttonProps,
    panelProps: _panelProps
  } = useAccordionItem.useAccordionItem(itemState);
  const [transitionStyle, _panelRef] = useHeightTransition.useHeightTransition(state);
  const panelRef = useMergeRef.useMergeRef(panelProps?.ref, _panelRef);
  const {
    status,
    isMounted,
    isEnter
  } = state;
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    ...rest,
    ref: useMergeRef.useMergeRef(forwardedRef, itemRef),
    className: bem.bem(constants.ACCORDION_BLOCK, 'item', {
      status,
      expanded: isEnter
    })(className, state),
    children: [/*#__PURE__*/jsxRuntime.jsx(Heading, {
      ...headingProps,
      style: {
        margin: 0,
        ...headingProps?.style
      },
      className: bem.bem(constants.ACCORDION_BLOCK, 'item-heading')(headingProps?.className, state),
      children: /*#__PURE__*/jsxRuntime.jsx("button", {
        ...mergeProps.mergeProps(_buttonProps, buttonProps),
        type: "button",
        className: bem.bem(constants.ACCORDION_BLOCK, 'item-btn')(buttonProps?.className, state),
        children: getRenderNode(header, itemState)
      })
    }), isMounted && /*#__PURE__*/jsxRuntime.jsx("div", {
      ...contentProps,
      style: {
        display: status === 'exited' ? 'none' : undefined,
        ...transitionStyle,
        ...contentProps?.style
      },
      className: bem.bem(constants.ACCORDION_BLOCK, 'item-content')(contentProps?.className, state),
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        ...mergeProps.mergeProps(_panelProps, panelProps),
        ref: panelRef,
        className: bem.bem(constants.ACCORDION_BLOCK, 'item-panel')(panelProps?.className, state),
        children: getRenderNode(children, itemState)
      })
    })]
  });
});
WrappedItem.displayName = 'AccordionItem';
const AccordionItem = /*#__PURE__*/withAccordionItem.withAccordionItem(WrappedItem);

exports.AccordionItem = AccordionItem;
