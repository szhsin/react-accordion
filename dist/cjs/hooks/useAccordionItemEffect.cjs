"use strict";
const require_useAccordionContext = require("./useAccordionContext.cjs");
let react = require("react");
//#region src/hooks/useAccordionItemEffect.ts
const useAccordionItemEffect = ({ itemKey, initialEntered, disabled } = {}) => {
	const itemRef = (0, react.useRef)(null);
	const context = require_useAccordionContext.useAccordionContext();
	const key = itemKey ?? itemRef.current;
	const state = require_useAccordionContext.getItemState(context, key, initialEntered);
	const { setItem, deleteItem, toggle } = context;
	(0, react.useEffect)(() => {
		if (disabled) return;
		const key = itemKey ?? itemRef.current;
		setItem(key, { initialEntered });
		return () => void deleteItem(key);
	}, [
		setItem,
		deleteItem,
		itemKey,
		initialEntered,
		disabled
	]);
	return {
		itemRef,
		state,
		toggle: (0, react.useCallback)((toEnter) => toggle(key, toEnter), [toggle, key])
	};
};
//#endregion
exports.useAccordionItemEffect = useAccordionItemEffect;
