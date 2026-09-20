import { getItemState, useAccordionContext } from "./useAccordionContext.mjs";
//#region src/hooks/useAccordionState.ts
const useAccordionState = () => {
	const context = useAccordionContext();
	return {
		getItemState: (key, { initialEntered } = {}) => getItemState(context, key, initialEntered),
		toggle: context.toggle,
		toggleAll: context.toggleAll
	};
};
//#endregion
export { useAccordionState };
