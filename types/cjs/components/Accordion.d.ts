import { AccordionProviderOptions } from '../utils/constants.js';
import { ControlledAccordionProps } from './ControlledAccordion.js';
interface AccordionProps extends AccordionProviderOptions, Omit<ControlledAccordionProps, 'providerValue'> {
}
declare const Accordion: import("react").ForwardRefExoticComponent<AccordionProps & import("react").RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionProps };
