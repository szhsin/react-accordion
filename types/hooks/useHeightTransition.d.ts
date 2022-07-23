import { RefObject, CSSProperties } from 'react';
import { State } from 'react-transition-state';
declare const useHeightTransition: <E extends Element>({ state, isResolved }: State) => readonly [CSSProperties, (element: E | null) => void, RefObject<E>];
export { useHeightTransition };
