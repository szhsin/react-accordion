import type { RefObject, ForwardedRef, MemoExoticComponent, JSX } from 'react';
import { forwardRef } from 'react';
import type { ItemState, ItemStateOptions } from '../utils/constants';
import { useAccordionItemEffect } from '../hooks/useAccordionItemEffect';

interface ItemStateProps<E extends Element, T = E> extends ItemState {
  itemRef: RefObject<E | null>;
  forwardedRef: ForwardedRef<T>;
}

const withAccordionItem = <P extends ItemStateOptions, E extends Element, T = E>(
  WrappedItem: MemoExoticComponent<(props: ItemStateProps<E, T>) => JSX.Element>
) => {
  const WithAccordionItem = forwardRef<T, P>(({ itemKey, initialEntered, ...rest }, ref) => (
    <WrappedItem
      forwardedRef={ref}
      {...rest}
      {...useAccordionItemEffect<E>({ itemKey, initialEntered, disabled: rest.disabled })}
    />
  ));

  WithAccordionItem.displayName = 'WithAccordionItem';
  return WithAccordionItem;
};

export { withAccordionItem, ItemStateProps };
