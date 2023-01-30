/// <reference types="react" />
import { ItemStateOptions } from '../utils/constants';
declare const useAccordionItemEffect: <E extends Element>({ itemKey, initialEntered, disabled }?: ItemStateOptions) => {
    itemRef: import("react").RefObject<E>;
    state: Readonly<{
        status: import("react-transition-state").TransitionStatus;
        isMounted: boolean;
        isEnter: boolean;
        isResolved: boolean;
    }>;
    toggle: (toEnter?: boolean) => void;
};
export { useAccordionItemEffect };
