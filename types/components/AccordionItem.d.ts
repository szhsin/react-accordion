import { ReactNode, ForwardedRef } from 'react';
import { TransitionState } from 'react-transition-state';
import { ElementProps } from '../utils/constants';
declare type ItemModifiers = {
    readonly state: TransitionState;
    readonly expanded: boolean;
};
interface ItemElementProps<E extends HTMLElement> extends ElementProps<E, ItemModifiers> {
    ref?: ForwardedRef<E>;
}
interface AccordionItemProps extends ElementProps<HTMLDivElement, ItemModifiers> {
    itemKey?: string | number;
    initialEntered?: boolean;
    header?: ReactNode;
    children?: ReactNode;
    headerProps?: ItemElementProps<HTMLHeadingElement>;
    buttonProps?: ItemElementProps<HTMLButtonElement>;
    contentProps?: ItemElementProps<HTMLDivElement>;
    panelProps?: ItemElementProps<HTMLDivElement>;
}
declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { AccordionItem, AccordionItemProps };
