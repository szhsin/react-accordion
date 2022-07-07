import { MouseEventHandler } from 'react';
import { State } from 'react-transition-state';
declare const useAccordionItem: <K extends Element>({ itemKey, initialEntered: itemInitialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    itemRef: import("react").RefObject<K>;
    buttonProps: {
        [x: string]: string | MouseEventHandler<Element>;
        onClick: MouseEventHandler<Element>;
    };
    state: State;
    toggle: (toEnter?: boolean) => void;
    endTransition: () => void;
};
export { useAccordionItem };
