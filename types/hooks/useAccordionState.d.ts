import { ItemKey } from '../utils/constants';
declare const useAccordionState: () => {
    getItemState: (key: ItemKey, { initialEntered }?: {
        initialEntered?: boolean | undefined;
    }) => import("react-transition-state").TransitionState;
    toggle: (key: ItemKey, toEnter?: boolean | undefined) => void;
};
export { useAccordionState };
