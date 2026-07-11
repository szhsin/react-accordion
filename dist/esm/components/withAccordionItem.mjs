import { useAccordionItemEffect } from "../hooks/useAccordionItemEffect.mjs";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/withAccordionItem.tsx
const withAccordionItem = (WrappedItem) => {
	const WithAccordionItem = forwardRef(({ itemKey, initialEntered, ...rest }, ref) => /* @__PURE__ */ jsx(WrappedItem, {
		forwardedRef: ref,
		...rest,
		...useAccordionItemEffect({
			itemKey,
			initialEntered,
			disabled: rest.disabled
		})
	}));
	WithAccordionItem.displayName = "WithAccordionItem";
	return WithAccordionItem;
};
//#endregion
export { withAccordionItem };
