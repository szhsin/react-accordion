"use strict";
const require_useAccordionProvider = require("../hooks/useAccordionProvider.cjs");
const require_ControlledAccordion = require("./ControlledAccordion.cjs");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/Accordion.tsx
const Accordion = (0, react.forwardRef)(({ allowMultiple, initialEntered, mountOnEnter, unmountOnExit, transition, transitionTimeout, onStateChange, ...rest }, ref) => {
	const providerValue = require_useAccordionProvider.useAccordionProvider({
		allowMultiple,
		initialEntered,
		mountOnEnter,
		unmountOnExit,
		transition,
		transitionTimeout,
		onStateChange
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_ControlledAccordion.ControlledAccordion, {
		...rest,
		ref,
		providerValue
	});
});
Accordion.displayName = "Accordion";
//#endregion
exports.Accordion = Accordion;
