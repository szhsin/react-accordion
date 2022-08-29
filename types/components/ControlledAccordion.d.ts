import { ReactNode } from 'react';
import { AccordionProviderValue, ElementProps } from '../utils/constants';
interface ControlledAccordionProps extends ElementProps<HTMLDivElement> {
    providerValue: AccordionProviderValue;
    children?: ReactNode;
}
declare const ControlledAccordion: import("react").ForwardRefExoticComponent<ControlledAccordionProps & import("react").RefAttributes<HTMLDivElement>>;
export { ControlledAccordion, ControlledAccordionProps };
