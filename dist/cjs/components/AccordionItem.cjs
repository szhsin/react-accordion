"use strict";
const require_constants = require("../utils/constants.cjs");
const require_bem = require("../utils/bem.cjs");
const require_mergeProps = require("../utils/mergeProps.cjs");
const require_useAccordionItem = require("../hooks/useAccordionItem.cjs");
const require_useHeightTransition = require("../hooks/useHeightTransition.cjs");
const require_useMergeRef = require("../hooks/useMergeRef.cjs");
const require_withAccordionItem = require("./withAccordionItem.cjs");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/AccordionItem.tsx
const getRenderNode = (nodeOrFunc, props) => typeof nodeOrFunc === "function" ? nodeOrFunc(props) : nodeOrFunc;
const WrappedItem = (0, react.memo)(({ forwardedRef, itemRef, state, toggle, className, disabled, header, headingTag: Heading = "h3", headingProps, buttonProps, contentProps, panelProps, children, ...rest }) => {
	const itemState = {
		state,
		toggle,
		disabled
	};
	const { buttonProps: _buttonProps, panelProps: _panelProps } = require_useAccordionItem.useAccordionItem(itemState);
	const [transitionStyle, _panelRef] = require_useHeightTransition.useHeightTransition(state);
	const panelRef = require_useMergeRef.useMergeRef(panelProps?.ref, _panelRef);
	const { status, isMounted, isEnter } = state;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		...rest,
		ref: require_useMergeRef.useMergeRef(forwardedRef, itemRef),
		className: require_bem.bem(require_constants.ACCORDION_BLOCK, "item", {
			status,
			expanded: isEnter
		})(className, state),
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Heading, {
			...headingProps,
			style: {
				margin: 0,
				...headingProps?.style
			},
			className: require_bem.bem(require_constants.ACCORDION_BLOCK, "item-heading")(headingProps?.className, state),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				...require_mergeProps.mergeProps(_buttonProps, buttonProps),
				type: "button",
				className: require_bem.bem(require_constants.ACCORDION_BLOCK, "item-btn")(buttonProps?.className, state),
				children: getRenderNode(header, itemState)
			})
		}), isMounted && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			...contentProps,
			style: {
				display: status === "exited" ? "none" : void 0,
				...transitionStyle,
				...contentProps?.style
			},
			className: require_bem.bem("szh-accordion", "item-content")(contentProps?.className, state),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				...require_mergeProps.mergeProps(_panelProps, panelProps),
				ref: panelRef,
				className: require_bem.bem("szh-accordion", "item-panel")(panelProps?.className, state),
				children: getRenderNode(children, itemState)
			})
		})]
	});
});
WrappedItem.displayName = "AccordionItem";
const AccordionItem = require_withAccordionItem.withAccordionItem(WrappedItem);
//#endregion
exports.AccordionItem = AccordionItem;
