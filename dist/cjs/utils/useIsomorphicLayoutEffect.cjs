"use strict";
let react = require("react");
// src/utils/useIsomorphicLayoutEffect.ts
const useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? react.useLayoutEffect : react.useEffect;
exports.useLayoutEffect = useIsomorphicLayoutEffect;
