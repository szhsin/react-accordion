/// <reference types="react" />
import { State } from 'react-transition-state';
declare const useAccordionItem: <K extends Element>({ itemKey, initialEntered: itemInitialEntered }?: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
}) => {
    itemRef: import("react").RefObject<K>;
    buttonProps: {
        [x: string]: string;
    };
    state: State;
    toggle: (toEnter?: boolean) => void;
    endTransition: () => void;
};
export { useAccordionItem };
