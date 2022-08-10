import { ReactNode, ForwardedRef, forwardRef } from 'react';
import { TransitionState, TransitionStatus } from 'react-transition-state';
import { ACCORDION_BLOCK, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useHeightTransition } from '../hooks/useHeightTransition';
import { useMergeRef } from '../hooks/useMergeRef';

type ItemModifiers = {
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

type NodeOrFunc = ReactNode | ((props: RenderProps) => ReactNode);

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

const getRenderNode: <P>(
  nodeOrFunc: ReactNode | ((props: P) => ReactNode),
  props: P
) => ReactNode = (nodeOrFunc, props) =>
  typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      itemKey,
      initialEntered,
      className,
      header,
      headerProps,
      buttonProps,
      contentProps,
      panelProps,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const {
      itemRef,
      state,
      toggle,
      buttonProps: _buttonProps,
      panelProps: _panelProps
    } = useAccordionItem<HTMLDivElement>({ itemKey, initialEntered });
    const [transitionStyle, _panelRef] = useHeightTransition<HTMLDivElement>(state);
    const panelRef = useMergeRef(panelProps?.ref, _panelRef);
    const { status, isMounted, isEnter } = state;
    const modifiers: ItemModifiers = { status, expanded: isEnter };
    const renderProps: RenderProps = { state, toggle };

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
            {getRenderNode(header, renderProps)}
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
              {getRenderNode(children, renderProps)}
            </div>
          </div>
        )}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export { AccordionItem, AccordionItemProps };
