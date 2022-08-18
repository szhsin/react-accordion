/// <reference types="react" />
import { ItemStateOptions } from '../utils/constants';
declare const useAccordionItemState: <E extends Element>({ itemKey, initialEntered }?: ItemStateOptions) => {
    itemRef: import("react").RefObject<E>;
    state: Readonly<{
        status: import("react-transition-state").TransitionStatus;
        isMounted: boolean;
        isEnter: boolean;
        isResolved: boolean;
    }>;
    toggle: (toEnter?: boolean) => void;
};
export { useAccordionItemState };
