/// <reference types="react" />
import { AccordionProviderOptions } from '../utils/constants';
import { ControlledAccordionProps } from './ControlledAccordion';
interface AccordionProps extends AccordionProviderOptions, Omit<ControlledAccordionProps, 'providerValue'> {
}
declare const Accordion: ({ allowMultiple, initialEntered, mountOnEnter, unmountOnExit, transition, transitionTimeout, onStateChange, ...rest }: AccordionProps) => JSX.Element;
export { Accordion };
