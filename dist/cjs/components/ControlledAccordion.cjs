"use strict";
const require_constants = require("../utils/constants.cjs");
const require_bem = require("../utils/bem.cjs");
const require_mergeProps = require("../utils/mergeProps.cjs");
const require_AccordionProvider = require("./AccordionProvider.cjs");
const require_useAccordion = require("../hooks/useAccordion.cjs");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/ControlledAccordion.tsx
const ControlledAccordion = (0, react.forwardRef)(({ providerValue, className, ...rest }, ref) => {
	const { accordionProps } = require_useAccordion.useAccordion();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_AccordionProvider.AccordionProvider, {
		value: providerValue,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			...require_mergeProps.mergeProps(accordionProps, rest),
			ref,
			className: require_bem.bem(require_constants.ACCORDION_BLOCK)(className)
		})
	});
});
ControlledAccordion.displayName = "ControlledAccordion";
//#endregion
exports.ControlledAccordion = ControlledAccordion;
