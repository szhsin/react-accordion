import { HTMLAttributes } from 'react';
declare const useAccordionItem: <E extends Element>({ itemKey, initialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    itemRef: import("react").RefObject<E>;
    states: import("react-transition-state").State;
    buttonProps: HTMLAttributes<Element>;
    panelProps: HTMLAttributes<Element>;
    toggle: (toEnter?: boolean) => void;
};
export { useAccordionItem };
