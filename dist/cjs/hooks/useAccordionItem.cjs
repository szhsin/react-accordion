"use strict";
const require_constants = require("../utils/constants.cjs");
const require_useId = require("./useId.cjs");
//#region src/hooks/useAccordionItem.ts
const useAccordionItem = ({ state, toggle, disabled }) => {
	const buttonId = require_useId.useId();
	const panelId = buttonId && buttonId + "-";
	const buttonProps = {
		id: buttonId,
		"aria-controls": panelId,
		"aria-expanded": state.isEnter,
		onClick: toggle
	};
	disabled ? buttonProps.disabled = true : buttonProps[require_constants.ACCORDION_BTN_ATTR] = "";
	return {
		buttonProps,
		panelProps: {
			id: panelId,
			"aria-labelledby": buttonId,
			role: "region"
		}
	};
};
//#endregion
exports.useAccordionItem = useAccordionItem;
