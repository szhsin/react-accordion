import { ReactNode, MouseEventHandler } from 'react';
import { TransitionState } from 'react-transition-state';
import { ACCORDION_BLOCK, ClassNameProp } from '../utils/constants';
import { bem } from '../utils/bem';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useTransitionHeight } from '../hooks/useTransitionHeight';

const AccordionItem = ({
  itemKey,
  initialEntered,
  className,
  header,
  children
}: {
  itemKey?: string | number;
  initialEntered?: boolean;
  className?: ClassNameProp<{ state: TransitionState; expanded: boolean }>;
  header: ReactNode;
  children?: ReactNode;
}) => {
  const {
    itemRef,
    buttonProps,
    toggle,
    state: { state, isMounted, isEnter }
  } = useAccordionItem<HTMLDivElement>({ itemKey, initialEntered });
  const [height, panelRef] = useTransitionHeight(state);

  return (
    <div
      ref={itemRef}
      className={bem(ACCORDION_BLOCK, 'item', { state, expanded: isEnter }, className)}
    >
      <h3 style={{ margin: 0 }}>
        <button
          {...buttonProps}
          type="button"
          onClick={toggle as unknown as MouseEventHandler<Element>}
        >
          {header}
        </button>
      </h3>
      {isMounted && (
        <div
          role="region"
          className={state}
          style={{
            display: state === 'exited' ? 'none' : undefined,
            height,
            transition: 'height .3s ease-in-out',
            overflow: 'hidden'
          }}
        >
          <div ref={panelRef} style={{ padding: '1rem' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export { AccordionItem };
