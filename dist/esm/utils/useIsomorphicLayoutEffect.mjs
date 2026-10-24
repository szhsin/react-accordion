import { useEffect, useLayoutEffect } from "react";
// src/utils/useIsomorphicLayoutEffect.ts
const useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
export { useIsomorphicLayoutEffect as useLayoutEffect };
