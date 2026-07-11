import { ACCORDION_BLOCK } from "../utils/constants.mjs";
import { bem } from "../utils/bem.mjs";
import { mergeProps } from "../utils/mergeProps.mjs";
import { AccordionProvider } from "./AccordionProvider.mjs";
import { useAccordion } from "../hooks/useAccordion.mjs";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/ControlledAccordion.tsx
const ControlledAccordion = forwardRef(({ providerValue, className, ...rest }, ref) => {
	const { accordionProps } = useAccordion();
	return /* @__PURE__ */ jsx(AccordionProvider, {
		value: providerValue,
		children: /* @__PURE__ */ jsx("div", {
			...mergeProps(accordionProps, rest),
			ref,
			className: bem(ACCORDION_BLOCK)(className)
		})
	});
});
ControlledAccordion.displayName = "ControlledAccordion";
//#endregion
export { ControlledAccordion };
