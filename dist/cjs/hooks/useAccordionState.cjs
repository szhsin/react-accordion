"use strict";
const require_useAccordionContext = require("./useAccordionContext.cjs");
// src/hooks/useAccordionState.ts
const useAccordionState = () => {
	const context = require_useAccordionContext.useAccordionContext();
	return {
		getItemState: (key, { initialEntered } = {}) => require_useAccordionContext.getItemState(context, key, initialEntered),
		toggle: context.toggle,
		toggleAll: context.toggleAll
	};
};
exports.useAccordionState = useAccordionState;
