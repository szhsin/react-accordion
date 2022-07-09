import { ReactNode } from 'react';
import { TransitionState } from 'react-transition-state';
import { ACCORDION_BLOCK, ClassNameProp, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useHeightTransition } from '../hooks/useHeightTransition';

type ItemModifiers = {
  state: TransitionState;
  expanded: boolean;
};

const AccordionItem = ({
  itemKey,
  initialEntered,
  className,
  header,
  headerProps,
  buttonProps,
  contentProps,
  panelProps,
  children
}: {
  itemKey?: string | number;
  initialEntered?: boolean;
  className?: ClassNameProp<ItemModifiers>;
  header: ReactNode;
  headerProps?: ElementProps<HTMLHeadingElement, ItemModifiers>;
  buttonProps?: ElementProps<HTMLButtonElement, ItemModifiers>;
  contentProps?: ElementProps<HTMLDivElement, ItemModifiers>;
  panelProps?: ElementProps<HTMLDivElement, ItemModifiers>;
  children?: ReactNode;
}) => {
  const {
    itemRef,
    buttonProps: _buttonProps,
    panelProps: _panelProps,
    state: { state, isMounted, isEnter }
  } = useAccordionItem<HTMLDivElement>({ itemKey, initialEntered });
  const [transitionStyle, panelRef] = useHeightTransition(state);
  const modifiers: ItemModifiers = { state, expanded: isEnter };

  return (
    <div ref={itemRef} className={bem(ACCORDION_BLOCK, 'item', modifiers, className, true)}>
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
};

export { AccordionItem };
