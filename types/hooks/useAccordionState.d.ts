import { ItemKey } from '../utils/constants';
declare const useAccordionState: () => {
    getItemState: (key: ItemKey, { initialEntered }?: {
        initialEntered?: boolean;
    }) => Readonly<{
        status: import("react-transition-state").TransitionStatus;
        isMounted: boolean;
        isEnter: boolean;
        isResolved: boolean;
    }>;
    toggle: (key: ItemKey, toEnter?: boolean) => void;
    toggleAll: (toEnter?: boolean) => void;
};
export { useAccordionState };
