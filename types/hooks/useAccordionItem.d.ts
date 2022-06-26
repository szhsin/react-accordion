import { TransitionItemOptions } from 'react-transition-state';
declare const useAccordionItem: <K extends Element>({ initialEntered: itemInitialEntered }?: TransitionItemOptions) => {
    toggle: (key: Element, toEnter?: boolean | undefined) => void;
    endTransition: (key: Element) => void;
    itemRef: import("react").RefObject<K>;
    state: import("react-transition-state").State | {
        state: "entered" | "exited" | "unmounted";
    };
};
export { useAccordionItem };
