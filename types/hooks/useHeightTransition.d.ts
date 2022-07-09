import { RefObject, CSSProperties } from 'react';
import { TransitionState } from 'react-transition-state';
declare const useHeightTransition: (state?: TransitionState) => [CSSProperties, (element: Element | null) => void, RefObject<Element>];
export { useHeightTransition };
