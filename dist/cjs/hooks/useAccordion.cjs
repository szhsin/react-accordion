"use strict";
const require_constants = require("../utils/constants.cjs");
//#region src/hooks/useAccordion.ts
const getAccordion = (node) => {
	do
		node = node.parentElement;
	while (node && !node.hasAttribute(require_constants.ACCORDION_ATTR));
	return node;
};
const getNextIndex = (moveUp, current, length) => moveUp ? current > 0 ? current - 1 : length - 1 : (current + 1) % length;
const moveFocus = (moveUp, e) => {
	const { activeElement } = document;
	if (!activeElement || !activeElement.hasAttribute(require_constants.ACCORDION_BTN_ATTR) || getAccordion(activeElement) !== e.currentTarget) return;
	const nodes = e.currentTarget.querySelectorAll(`[${require_constants.ACCORDION_BTN_ATTR}]`);
	const { length } = nodes;
	for (let i = 0; i < length; i++) if (nodes[i] === activeElement) {
		let next = getNextIndex(moveUp, i, length);
		while (getAccordion(nodes[i]) !== getAccordion(nodes[next])) next = getNextIndex(moveUp, next, length);
		if (i !== next) {
			e.preventDefault();
			nodes[next].focus();
		}
		break;
	}
};
const useAccordion = () => {
	return { accordionProps: {
		[require_constants.ACCORDION_ATTR]: "",
		onKeyDown: (e) => e.key === "ArrowUp" ? moveFocus(true, e) : e.key === "ArrowDown" && moveFocus(false, e)
	} };
};
//#endregion
exports.useAccordion = useAccordion;
