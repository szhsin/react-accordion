import { ReactNode } from 'react';
import { AccordionProviderValue, ElementProps } from '../utils/constants';
interface ControlledAccordionProps extends ElementProps<HTMLDivElement, string> {
    providerValue: AccordionProviderValue;
    children?: ReactNode;
}
declare const ControlledAccordion: ({ providerValue, className, ...rest }: ControlledAccordionProps) => JSX.Element;
export { ControlledAccordion, ControlledAccordionProps };
