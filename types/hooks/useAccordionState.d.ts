import { ItemKey } from '../utils/constants';
declare const useAccordionState: () => {
    getItemState: (key: ItemKey, { initialEntered }?: {
        initialEntered?: boolean | undefined;
    }) => Readonly<{
        status: import("react-transition-state").TransitionStatus;
        isMounted: boolean;
        isEnter: boolean;
        isResolved: boolean;
    }>;
    toggle: (key: ItemKey, toEnter?: boolean | undefined) => void;
    toggleAll: (toEnter?: boolean | undefined) => void;
};
export { useAccordionState };
