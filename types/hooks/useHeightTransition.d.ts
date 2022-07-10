import { RefObject, CSSProperties } from 'react';
import { State } from 'react-transition-state';
declare const useHeightTransition: (states: State) => [CSSProperties, (element: Element | null) => void, RefObject<Element>];
export { useHeightTransition };
