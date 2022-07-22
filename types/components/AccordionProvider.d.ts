import { ReactNode } from 'react';
import { AccordionProviderValue } from '../utils/constants';
declare const AccordionProvider: (props: {
    value: AccordionProviderValue;
    children?: ReactNode;
}) => JSX.Element;
export { AccordionProvider };
