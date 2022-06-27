import { State } from 'react-transition-state';
declare const useAccordionItem: <K extends Element>({ itemKey, initialEntered: itemInitialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    toggle: (key: import("../utils/constants").ItemKey, toEnter?: boolean | undefined) => void;
    endTransition: (key: import("../utils/constants").ItemKey) => void;
    itemRef: import("react").RefObject<K>;
    state: State;
};
export { useAccordionItem };
