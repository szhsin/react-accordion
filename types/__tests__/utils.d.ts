import { Ref, ReactElement } from 'react';
import { render as nonStrictRender, RenderOptions, RenderResult } from '@testing-library/react';
import { AccordionProps, AccordionItemProps } from '../';
export { nonStrictRender };
export declare const render: (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => RenderResult;
export declare const getAccordion: ({ ref, item1Ref, props, item1Props, item2Props }?: {
    ref?: Ref<HTMLDivElement>;
    item1Ref?: Ref<HTMLDivElement>;
    props?: AccordionProps;
    item1Props?: AccordionItemProps;
    item2Props?: AccordionItemProps;
}) => import("react").JSX.Element;
