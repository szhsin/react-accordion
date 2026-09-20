import { useEffect, useLayoutEffect } from "react";
//#region src/utils/useIsomorphicLayoutEffect.ts
const useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
//#endregion
export { useIsomorphicLayoutEffect as useLayoutEffect };
