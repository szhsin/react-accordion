import { HTMLAttributes } from 'react';
declare const useAccordionItem: <E extends Element>({ itemKey, initialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    itemRef: import("react").RefObject<E>;
    buttonProps: HTMLAttributes<Element>;
    panelProps: HTMLAttributes<Element>;
    state: import("react-transition-state").TransitionState;
    toggle: (toEnter?: boolean) => void;
};
export { useAccordionItem };
