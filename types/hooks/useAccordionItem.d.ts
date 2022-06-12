/// <reference types="react" />
declare const useAccordionItem: <K extends Element>() => {
    toggle: (key: Element, toEnter?: boolean | undefined) => void;
    endTransition: (key: Element) => void;
    itemRef: import("react").RefObject<K>;
    state: import("react-transition-state").State | undefined;
};
export { useAccordionItem };
