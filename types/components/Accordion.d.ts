/// <reference types="react" />
import { AccordionProviderProps, ElementProps } from '../utils/constants';
interface AccordionProps extends AccordionProviderProps, ElementProps<HTMLDivElement, string> {
}
declare const Accordion: ({ className, allowMultiple, initialEntered, mountOnEnter, unmountOnExit, transition, transitionTimeout, onStateChange, ...rest }: AccordionProps) => JSX.Element;
export { Accordion };
