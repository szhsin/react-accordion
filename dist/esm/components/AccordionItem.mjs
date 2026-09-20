import { ACCORDION_BLOCK } from "../utils/constants.mjs";
import { bem } from "../utils/bem.mjs";
import { mergeProps } from "../utils/mergeProps.mjs";
import { useAccordionItem } from "../hooks/useAccordionItem.mjs";
import { useHeightTransition } from "../hooks/useHeightTransition.mjs";
import { useMergeRef } from "../hooks/useMergeRef.mjs";
import { withAccordionItem } from "./withAccordionItem.mjs";
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/AccordionItem.tsx
const getRenderNode = (nodeOrFunc, props) => typeof nodeOrFunc === "function" ? nodeOrFunc(props) : nodeOrFunc;
const WrappedItem = memo(({ forwardedRef, itemRef, state, toggle, className, disabled, header, headingTag: Heading = "h3", headingProps, buttonProps, contentProps, panelProps, children, ...rest }) => {
	const itemState = {
		state,
		toggle,
		disabled
	};
	const { buttonProps: _buttonProps, panelProps: _panelProps } = useAccordionItem(itemState);
	const [transitionStyle, _panelRef] = useHeightTransition(state);
	const panelRef = useMergeRef(panelProps?.ref, _panelRef);
	const { status, isMounted, isEnter } = state;
	return /* @__PURE__ */ jsxs("div", {
		...rest,
		ref: useMergeRef(forwardedRef, itemRef),
		className: bem(ACCORDION_BLOCK, "item", {
			status,
			expanded: isEnter
		})(className, state),
		children: [/* @__PURE__ */ jsx(Heading, {
			...headingProps,
			style: {
				margin: 0,
				...headingProps?.style
			},
			className: bem(ACCORDION_BLOCK, "item-heading")(headingProps?.className, state),
			children: /* @__PURE__ */ jsx("button", {
				...mergeProps(_buttonProps, buttonProps),
				type: "button",
				className: bem(ACCORDION_BLOCK, "item-btn")(buttonProps?.className, state),
				children: getRenderNode(header, itemState)
			})
		}), isMounted && /* @__PURE__ */ jsx("div", {
			...contentProps,
			style: {
				display: status === "exited" ? "none" : void 0,
				...transitionStyle,
				...contentProps?.style
			},
			className: bem("szh-accordion", "item-content")(contentProps?.className, state),
			children: /* @__PURE__ */ jsx("div", {
				...mergeProps(_panelProps, panelProps),
				ref: panelRef,
				className: bem("szh-accordion", "item-panel")(panelProps?.className, state),
				children: getRenderNode(children, itemState)
			})
		})]
	});
});
WrappedItem.displayName = "AccordionItem";
const AccordionItem = withAccordionItem(WrappedItem);
//#endregion
export { AccordionItem };
