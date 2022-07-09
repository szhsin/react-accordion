import { RefObject } from 'react';
import { TransitionState } from 'react-transition-state';
declare const useHeightTransition: (state?: TransitionState) => [number | undefined, (element: Element | null) => void, RefObject<Element>];
export { useHeightTransition };
