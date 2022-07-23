import { ReactNode, ForwardedRef, forwardRef } from 'react';
import { TransitionState } from 'react-transition-state';
import { ACCORDION_BLOCK, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useHeightTransition } from '../hooks/useHeightTransition';
import { useMergeRef } from '../hooks/useMergeRef';

type ItemModifiers = {
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
      states,
      buttonProps: _buttonProps,
      panelProps: _panelProps
    } = useAccordionItem<HTMLDivElement>({ itemKey, initialEntered });
    const [transitionStyle, _panelRef] = useHeightTransition<HTMLDivElement>(states);
    const panelRef = useMergeRef(panelProps?.ref, _panelRef);
    const { state, isMounted, isEnter } = states;
    const modifiers: ItemModifiers = { state, expanded: isEnter };

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
            {header}
          </button>
        </h3>
        {isMounted && (
          <div
            {...contentProps}
            style={{
              display: state === 'exited' ? 'none' : undefined,
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
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export { AccordionItem, AccordionItemProps };
