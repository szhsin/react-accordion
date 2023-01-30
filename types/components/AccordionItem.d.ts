import { ReactNode, ForwardedRef } from 'react';
import { TransitionState } from 'react-transition-state';
import { ElementProps, ItemState, ItemStateOptions } from '../utils/constants';
interface ItemElementProps<E extends HTMLElement> extends ElementProps<E, TransitionState> {
    ref?: ForwardedRef<E>;
}
type NodeOrFunc = ReactNode | ((props: ItemState) => ReactNode);
interface AccordionItemProps extends ItemStateOptions, ElementProps<HTMLDivElement, TransitionState> {
    header?: NodeOrFunc;
    children?: NodeOrFunc;
    headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    headingProps?: ItemElementProps<HTMLHeadingElement>;
    buttonProps?: ItemElementProps<HTMLButtonElement>;
    contentProps?: ItemElementProps<HTMLDivElement>;
    panelProps?: ItemElementProps<HTMLDivElement>;
}
declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { AccordionItem, AccordionItemProps };
