import { ReactNode, ForwardedRef, memo, createElement } from 'react';
import { TransitionStatus } from 'react-transition-state';
import { ACCORDION_BLOCK, ElementProps, ItemState, ItemStateOptions } from '../utils/constants';
import { bem } from '../utils/bem';
import { mergeProps } from '../utils/mergeProps';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useHeightTransition } from '../hooks/useHeightTransition';
import { useMergeRef } from '../hooks/useMergeRef';
import { withAccordionItem, ItemStateProps } from './withAccordionItem';

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
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headingProps?: ItemElementProps<HTMLHeadingElement>;
  buttonProps?: ItemElementProps<HTMLButtonElement>;
  contentProps?: ItemElementProps<HTMLDivElement>;
  panelProps?: ItemElementProps<HTMLDivElement>;
}

interface WrappedItemProps<E extends Element>
  extends ItemStateProps<E>,
    Omit<AccordionItemProps, 'itemRef' | 'itemKey' | 'initialEntered'> {}

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
    headingTag,
    headingProps,
    buttonProps,
    contentProps,
    panelProps,
    children,
    ...rest
  }: WrappedItemProps<HTMLDivElement>) => {
    const itemState: ItemState = { state, toggle };
    const { buttonProps: _buttonProps, panelProps: _panelProps } = useAccordionItem(itemState);
    const [transitionStyle, _panelRef] = useHeightTransition<HTMLDivElement>(state);
    const panelRef = useMergeRef(panelProps && panelProps.ref, _panelRef);
    const { status, isMounted, isEnter } = state;
    const modifiers: ItemModifiers = { status, expanded: isEnter };

    return (
      <div
        {...rest}
        ref={useMergeRef(forwardedRef, itemRef)}
        className={bem(ACCORDION_BLOCK, 'item', modifiers, className, true)}
      >
        {createElement(
          headingTag || 'h3',
          {
            ...headingProps,
            style: { margin: 0, ...(headingProps && headingProps.style) },
            className: bem(
              ACCORDION_BLOCK,
              'item-heading',
              modifiers,
              headingProps && headingProps.className
            )
          },
          <button
            {...mergeProps(_buttonProps, buttonProps)}
            type="button"
            className={bem(
              ACCORDION_BLOCK,
              'item-btn',
              modifiers,
              buttonProps && buttonProps.className
            )}
          >
            {getRenderNode(header, itemState)}
          </button>
        )}

        {isMounted && (
          <div
            {...contentProps}
            style={{
              display: status === 'exited' ? 'none' : undefined,
              ...transitionStyle,
              ...(contentProps && contentProps.style)
            }}
            className={bem(
              ACCORDION_BLOCK,
              'item-content',
              modifiers,
              contentProps && contentProps.className
            )}
          >
            <div
              {...mergeProps(_panelProps, panelProps)}
              ref={panelRef}
              className={bem(
                ACCORDION_BLOCK,
                'item-panel',
                modifiers,
                panelProps && panelProps.className
              )}
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
const AccordionItem = withAccordionItem<AccordionItemProps, HTMLDivElement>(WrappedItem);

export { AccordionItem, AccordionItemProps, ItemModifiers };
