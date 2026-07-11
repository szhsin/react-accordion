import { ACCORDION_BTN_ATTR } from "../utils/constants.mjs";
import { useId } from "./useId.mjs";
//#region src/hooks/useAccordionItem.ts
const useAccordionItem = ({ state, toggle, disabled }) => {
	const buttonId = useId();
	const panelId = buttonId && buttonId + "-";
	const buttonProps = {
		id: buttonId,
		"aria-controls": panelId,
		"aria-expanded": state.isEnter,
		onClick: toggle
	};
	disabled ? buttonProps.disabled = true : buttonProps[ACCORDION_BTN_ATTR] = "";
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
export { useAccordionItem };
