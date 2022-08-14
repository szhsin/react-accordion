import { ReactNode, RefObject, ForwardedRef, MemoExoticComponent } from 'react';
import { TransitionStatus } from 'react-transition-state';
import { ElementProps, ItemState } from '../utils/constants';
declare type ItemModifiers = {
    readonly status: TransitionStatus;
    readonly expanded: boolean;
};
interface ItemElementProps<E extends HTMLElement> extends ElementProps<E, ItemModifiers> {
    ref?: ForwardedRef<E>;
}
declare type NodeOrFunc = ReactNode | ((props: ItemState) => ReactNode);
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
interface WrappedItemProps<E> extends ItemState, Omit<AccordionItemProps, 'itemRef' | 'itemKey' | 'initialEntered'> {
    itemRef: RefObject<E>;
    forwardedRef: ForwardedRef<E>;
}
declare const withAccordionItemState: <E extends Element>(WrappedItem: MemoExoticComponent<(props: WrappedItemProps<E>) => JSX.Element>) => import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<E>>;
declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { withAccordionItemState, AccordionItem, AccordionItemProps, WrappedItemProps, ItemModifiers };
