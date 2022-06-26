import { TransitionItemOptions } from 'react-transition-state';
declare const useAccordionItem: <K extends Element>({ initialEntered }?: TransitionItemOptions) => {
    toggle: (key: Element, toEnter?: boolean | undefined) => void;
    endTransition: (key: Element) => void;
    mountOnEnter: boolean;
    initialEntered: boolean;
    itemRef: import("react").RefObject<K>;
    state: import("react-transition-state").State | undefined;
};
export { useAccordionItem };
