import { RefObject, CSSProperties } from 'react';
import { TransitionState } from 'react-transition-state';
declare const useHeightTransition: <E extends Element>({ status, isResolved }: TransitionState) => readonly [CSSProperties, (element: E | null) => void, RefObject<E>];
export { useHeightTransition };
