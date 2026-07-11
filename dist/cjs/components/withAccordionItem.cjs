"use strict";
const require_useAccordionItemEffect = require("../hooks/useAccordionItemEffect.cjs");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/withAccordionItem.tsx
const withAccordionItem = (WrappedItem) => {
	const WithAccordionItem = (0, react.forwardRef)(({ itemKey, initialEntered, ...rest }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WrappedItem, {
		forwardedRef: ref,
		...rest,
		...require_useAccordionItemEffect.useAccordionItemEffect({
			itemKey,
			initialEntered,
			disabled: rest.disabled
		})
	}));
	WithAccordionItem.displayName = "WithAccordionItem";
	return WithAccordionItem;
};
//#endregion
exports.withAccordionItem = withAccordionItem;
