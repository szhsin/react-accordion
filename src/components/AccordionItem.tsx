import { ReactNode, RefObject, ForwardedRef, MemoExoticComponent, forwardRef, memo } from 'react';
import { TransitionStatus } from 'react-transition-state';
import { ACCORDION_BLOCK, ElementProps, ItemState, ItemStateOptions } from '../utils/constants';
import { bem } from '../utils/bem';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useAccordionItemState } from '../hooks/useAccordionItemState';
import { useHeightTransition } from '../hooks/useHeightTransition';
import { useMergeRef } from '../hooks/useMergeRef';

type ItemModifiers = {
  readonly status: TransitionStatus;
  readonly expanded: boolean;
};

interface ItemElementProps<E extends HTMLElement> extends ElementProps<E, ItemModifiers> {
  ref?: ForwardedRef<E>;
}

type NodeOrFunc = ReactNode | ((props: ItemState) => ReactNode);

interface AccordionItemProps extends ItemStateOptions, ElementProps<HTMLDivElement, ItemModifiers> {
  header?: NodeOrFunc;
  children?: NodeOrFunc;
  headerProps?: ItemElementProps<HTMLHeadingElement>;
  buttonProps?: ItemElementProps<HTMLButtonElement>;
  contentProps?: ItemElementProps<HTMLDivElement>;
  panelProps?: ItemElementProps<HTMLDivElement>;
}

interface ItemStateProps<E extends Element, T = E> extends ItemState {
  itemRef: RefObject<E>;
  forwardedRef: ForwardedRef<T>;
}

interface WrappedItemProps<E extends Element>
  extends ItemStateProps<E>,
    Omit<AccordionItemProps, 'itemRef' | 'itemKey' | 'initialEntered'> {}

const withAccordionItemState = <P extends ItemStateOptions, E extends Element, T = E>(
  WrappedItem: MemoExoticComponent<(props: ItemStateProps<E, T>) => JSX.Element>
) => {
  const WithAccordionItemState = forwardRef<T, P>(({ itemKey, initialEntered, ...rest }, ref) => {
    return (
      <WrappedItem
        forwardedRef={ref}
        {...rest}
        {...useAccordionItemState<E>({ itemKey, initialEntered })}
      />
    );
  });

  WithAccordionItemState.displayName = 'WithAccordionItemState';
  return WithAccordionItemState;
};

const getRenderNode: <P>(
  nodeOrFunc: ReactNode | ((props: P) => ReactNode),
  props: P
) => ReactNode = (nodeOrFunc, props) =>
  typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;

const WrappedItem = memo(
  ({
    forwardedRef,
    itemRef,
    state,
    toggle,
    className,
    header,
    headerProps,
    buttonProps,
    contentProps,
    panelProps,
    children,
    ...rest
  }: WrappedItemProps<HTMLDivElement>) => {
    const itemState: ItemState = { state, toggle };
    const { buttonProps: _buttonProps, panelProps: _panelProps } = useAccordionItem(itemState);
    const [transitionStyle, _panelRef] = useHeightTransition<HTMLDivElement>(state);
    const panelRef = useMergeRef(panelProps?.ref, _panelRef);
    const { status, isMounted, isEnter } = state;
    const modifiers: ItemModifiers = { status, expanded: isEnter };

    return (
      <div
        {...rest}
        ref={useMergeRef(forwardedRef, itemRef)}
        className={bem(ACCORDION_BLOCK, 'item', modifiers, className, true)}
      >
        <h3
          {...headerProps}
          style={{ margin: 0, ...headerProps?.style }}
          className={bem(ACCORDION_BLOCK, 'header', modifiers, headerProps?.className)}
        >
          <button
            {...buttonProps}
            {..._buttonProps}
            type="button"
            className={bem(ACCORDION_BLOCK, 'btn', modifiers, buttonProps?.className)}
          >
            {getRenderNode(header, itemState)}
          </button>
        </h3>
        {isMounted && (
          <div
            {...contentProps}
            style={{
              display: status === 'exited' ? 'none' : undefined,
              ...transitionStyle,
              ...contentProps?.style
            }}
            className={bem(ACCORDION_BLOCK, 'content', modifiers, contentProps?.className)}
          >
            <div
              {...panelProps}
              {..._panelProps}
              ref={panelRef}
              className={bem(ACCORDION_BLOCK, 'panel', modifiers, panelProps?.className)}
            >
              {getRenderNode(children, itemState)}
            </div>
          </div>
        )}
      </div>
    );
  }
);

WrappedItem.displayName = 'AccordionItem';
const AccordionItem = withAccordionItemState<AccordionItemProps, HTMLDivElement>(WrappedItem);

export { withAccordionItemState, AccordionItem, AccordionItemProps, ItemStateProps, ItemModifiers };
