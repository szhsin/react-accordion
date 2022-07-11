import { HTMLAttributes } from 'react';
import { State } from 'react-transition-state';
declare const useAccordionItem: <E extends Element>({ itemKey, initialEntered: itemInitialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    itemRef: import("react").RefObject<E>;
    states: State;
    buttonProps: HTMLAttributes<Element>;
    panelProps: HTMLAttributes<Element>;
    toggle: (toEnter?: boolean) => void;
    endTransition: () => void;
};
export { useAccordionItem };
