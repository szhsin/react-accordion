import { ReactNode } from 'react';
import { AccordionProviderValue } from '../utils/constants.js';
declare const AccordionProvider: (props: {
    value: AccordionProviderValue;
    children?: ReactNode;
}) => import("react").JSX.Element;
export { AccordionProvider };
