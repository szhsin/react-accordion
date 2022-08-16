import { ReactNode, RefObject, ForwardedRef, MemoExoticComponent } from 'react';
import { TransitionStatus } from 'react-transition-state';
import { ElementProps, ItemState, ItemStateOptions } from '../utils/constants';
declare type ItemModifiers = {
    readonly status: TransitionStatus;
    readonly expanded: boolean;
};
interface ItemElementProps<E extends HTMLElement> extends ElementProps<E, ItemModifiers> {
    ref?: ForwardedRef<E>;
}
declare type NodeOrFunc = ReactNode | ((props: ItemState) => ReactNode);
interface AccordionItemProps extends ItemStateOptions, ElementProps<HTMLDivElement, ItemModifiers> {
    header?: NodeOrFunc;
    children?: NodeOrFunc;
    headingProps?: ItemElementProps<HTMLHeadingElement>;
    buttonProps?: ItemElementProps<HTMLButtonElement>;
    contentProps?: ItemElementProps<HTMLDivElement>;
    panelProps?: ItemElementProps<HTMLDivElement>;
}
interface ItemStateProps<E extends Element, T = E> extends ItemState {
    itemRef: RefObject<E>;
    forwardedRef: ForwardedRef<T>;
}
declare const withAccordionItemState: <P extends ItemStateOptions, E extends Element, T = E>(WrappedItem: MemoExoticComponent<(props: ItemStateProps<E, T>) => JSX.Element>) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<T>>;
declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { withAccordionItemState, AccordionItem, AccordionItemProps, ItemStateProps, ItemModifiers };
