import { ReactNode, ForwardedRef } from 'react';
import { TransitionState, TransitionStatus } from 'react-transition-state';
import { ElementProps } from '../utils/constants';
declare type ItemModifiers = {
    readonly status: TransitionStatus;
    readonly expanded: boolean;
};
interface ItemElementProps<E extends HTMLElement> extends ElementProps<E, ItemModifiers> {
    ref?: ForwardedRef<E>;
}
interface RenderProps {
    state: TransitionState;
    toggle: (toEnter?: boolean) => void;
}
declare type NodeOrFunc = ReactNode | ((props: RenderProps) => ReactNode);
interface AccordionItemProps extends ElementProps<HTMLDivElement, ItemModifiers> {
    itemKey?: string | number;
    initialEntered?: boolean;
    header?: NodeOrFunc;
    children?: NodeOrFunc;
    headerProps?: ItemElementProps<HTMLHeadingElement>;
    buttonProps?: ItemElementProps<HTMLButtonElement>;
    contentProps?: ItemElementProps<HTMLDivElement>;
    panelProps?: ItemElementProps<HTMLDivElement>;
}
declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { AccordionItem, AccordionItemProps, ItemModifiers };
