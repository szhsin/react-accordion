"use strict";
let react = require("react");
//#region src/utils/useIsomorphicLayoutEffect.ts
const useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? react.useLayoutEffect : react.useEffect;
//#endregion
exports.useLayoutEffect = useIsomorphicLayoutEffect;
