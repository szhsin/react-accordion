import { ReactNode } from 'react';
import { TransitionState } from 'react-transition-state';
import { ACCORDION_BLOCK, ClassNameProp } from '../utils/constants';
import { bem } from '../utils/bem';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useHeightTransition } from '../hooks/useHeightTransition';

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
    panelProps,
    state: { state, isMounted, isEnter }
  } = useAccordionItem<HTMLDivElement>({ itemKey, initialEntered });
  const [height, panelRef] = useHeightTransition(state);

  return (
    <div
      ref={itemRef}
      className={bem(ACCORDION_BLOCK, 'item', { state, expanded: isEnter }, className)}
    >
      <h3 style={{ margin: 0 }}>
        <button type="button" {...buttonProps}>
          {header}
        </button>
      </h3>
      {isMounted && (
        <div
          style={{
            display: state === 'exited' ? 'none' : undefined,
            height,
            transition: 'height .3s ease-in-out',
            overflow: 'hidden'
          }}
        >
          <div ref={panelRef} {...panelProps}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export { AccordionItem };
