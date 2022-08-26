import { RefObject, ForwardedRef, MemoExoticComponent } from 'react';
import { ItemState, ItemStateOptions } from '../utils/constants';
interface ItemStateProps<E extends Element, T = E> extends ItemState {
    itemRef: RefObject<E>;
    forwardedRef: ForwardedRef<T>;
}
declare const withAccordionItem: <P extends ItemStateOptions, E extends Element, T = E>(WrappedItem: MemoExoticComponent<(props: ItemStateProps<E, T>) => JSX.Element>) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<T>>;
export { withAccordionItem, ItemStateProps };
