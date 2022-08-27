import { CSSProperties } from 'react';
import { TransitionState } from 'react-transition-state';
declare const useHeightTransition: <E extends Element>({ status, isResolved }: TransitionState) => readonly [CSSProperties, import("react").RefObject<E>];
export { useHeightTransition };
