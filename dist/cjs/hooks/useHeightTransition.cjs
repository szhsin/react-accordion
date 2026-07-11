"use strict";
const require_useIsomorphicLayoutEffect = require("../utils/useIsomorphicLayoutEffect.cjs");
let react = require("react");
//#region src/hooks/useHeightTransition.ts
const useHeightTransition = ({ status, isResolved }) => {
	const [height, setHeight] = (0, react.useState)();
	const elementRef = (0, react.useRef)(null);
	require_useIsomorphicLayoutEffect.useLayoutEffect(() => {
		(status === "preEnter" || status === "preExit") && setHeight(elementRef.current.getBoundingClientRect().height);
	}, [status]);
	return [{
		height: status === "preEnter" || status === "exiting" ? 0 : status === "entering" || status === "preExit" ? height : void 0,
		overflow: isResolved ? void 0 : "hidden"
	}, elementRef];
};
//#endregion
exports.useHeightTransition = useHeightTransition;
