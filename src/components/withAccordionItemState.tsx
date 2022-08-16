import { RefObject, ForwardedRef, MemoExoticComponent, forwardRef } from 'react';
import { ItemState, ItemStateOptions } from '../utils/constants';
import { useAccordionItemState } from '../hooks/useAccordionItemState';

interface ItemStateProps<E extends Element, T = E> extends ItemState {
  itemRef: RefObject<E>;
  forwardedRef: ForwardedRef<T>;
}

const withAccordionItemState = <P extends ItemStateOptions, E extends Element, T = E>(
  WrappedItem: MemoExoticComponent<(props: ItemStateProps<E, T>) => JSX.Element>
) => {
  const WithAccordionItemState = forwardRef<T, P>(({ itemKey, initialEntered, ...rest }, ref) => (
    <WrappedItem
      forwardedRef={ref}
      {...rest}
      {...useAccordionItemState<E>({ itemKey, initialEntered })}
    />
  ));

  WithAccordionItemState.displayName = 'WithAccordionItemState';
  return WithAccordionItemState;
};

export { withAccordionItemState, ItemStateProps };
