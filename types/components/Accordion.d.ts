/// <reference types="react" />
import { AccordionProviderOptions } from '../utils/constants';
import { ControlledAccordionProps } from './ControlledAccordion';
interface AccordionProps extends AccordionProviderOptions, Omit<ControlledAccordionProps, 'providerValue'> {
}
declare const Accordion: import("react").ForwardRefExoticComponent<AccordionProps & import("react").RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionProps };
