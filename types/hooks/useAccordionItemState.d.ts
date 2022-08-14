/// <reference types="react" />
declare const useAccordionItemState: <E extends Element>({ itemKey, initialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    itemRef: import("react").RefObject<E>;
    state: import("react-transition-state").TransitionState;
    toggle: (toEnter?: boolean) => void;
};
export { useAccordionItemState };
