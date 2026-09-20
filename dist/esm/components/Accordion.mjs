import { useAccordionProvider } from "../hooks/useAccordionProvider.mjs";
import { ControlledAccordion } from "./ControlledAccordion.mjs";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/Accordion.tsx
const Accordion = forwardRef(({ allowMultiple, initialEntered, mountOnEnter, unmountOnExit, transition, transitionTimeout, onStateChange, ...rest }, ref) => {
	const providerValue = useAccordionProvider({
		allowMultiple,
		initialEntered,
		mountOnEnter,
		unmountOnExit,
		transition,
		transitionTimeout,
		onStateChange
	});
	return /* @__PURE__ */ jsx(ControlledAccordion, {
		...rest,
		ref,
		providerValue
	});
});
Accordion.displayName = "Accordion";
//#endregion
export { Accordion };
