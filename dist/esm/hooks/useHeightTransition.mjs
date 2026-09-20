import { useLayoutEffect as useIsomorphicLayoutEffect } from "../utils/useIsomorphicLayoutEffect.mjs";
import { useRef, useState } from "react";
//#region src/hooks/useHeightTransition.ts
const useHeightTransition = ({ status, isResolved }) => {
	const [height, setHeight] = useState();
	const elementRef = useRef(null);
	useIsomorphicLayoutEffect(() => {
		(status === "preEnter" || status === "preExit") && setHeight(elementRef.current.getBoundingClientRect().height);
	}, [status]);
	return [{
		height: status === "preEnter" || status === "exiting" ? 0 : status === "entering" || status === "preExit" ? height : void 0,
		overflow: isResolved ? void 0 : "hidden"
	}, elementRef];
};
//#endregion
export { useHeightTransition };
