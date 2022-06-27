import { State } from 'react-transition-state';
declare const useAccordionItem: <K extends Element>({ itemKey, initialEntered: itemInitialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    itemRef: import("react").RefObject<K>;
    state: State;
    toggle: (toEnter?: boolean) => void;
    endTransition: () => void;
};
export { useAccordionItem };
