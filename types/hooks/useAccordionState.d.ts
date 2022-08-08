import { ItemKey } from '../utils/constants';
declare const useAccordionState: () => {
    getItemStates: (key: ItemKey, { initialEntered }?: {
        initialEntered?: boolean | undefined;
    }) => import("react-transition-state").State;
    toggle: (key: ItemKey, toEnter?: boolean | undefined) => void;
};
export { useAccordionState };
