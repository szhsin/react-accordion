/// <reference types="react" />
import { ItemStateOptions } from '../utils/constants';
declare const useAccordionItemState: <E extends Element>({ itemKey, initialEntered }?: ItemStateOptions) => {
    itemRef: import("react").RefObject<E>;
    state: import("react-transition-state").TransitionState;
    toggle: (toEnter?: boolean) => void;
};
export { useAccordionItemState };
