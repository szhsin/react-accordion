import React from 'react';
import {
  useAccordionItem,
  useAccordionItemState,
  // highlight-next-line
  useHeightTransition
} from '@szhsin/react-accordion';
import ChevronDown from '@site/static/img/chevron-down.svg';
import styles from './styles.module.css';

const AccordionItem = ({
  header,
  children,
  itemKey,
  initialEntered
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  itemKey?: string | number;
  initialEntered?: boolean;
}) => {
  const { itemRef, state, toggle } =
    useAccordionItemState<HTMLDivElement>({ itemKey, initialEntered });
  const { buttonProps, panelProps } = useAccordionItem({
    state,
    toggle
  });

  // highlight-start
  const [transitionStyle, panelRef] =
    useHeightTransition<HTMLDivElement>(state);
  // highlight-end

  const { status, isMounted, isEnter } = state;

  return (
    <div className={styles.item} ref={itemRef}>
      <h3 style={{ margin: 0 }}>
        <button
          className={isEnter ? styles.buttonExpanded : styles.button}
          type="button"
          {...buttonProps}
        >
          {header}
          <ChevronDown className={styles.chevron} />
        </button>
      </h3>
      {isMounted && (
        // Add an extra `div` around the panel `div` for the
        // height transition to work as intended
        // highlight-next-line
        <div
          className={styles.content}
          style={{
            display: status === 'exited' ? 'none' : undefined,
            // highlight-next-line
            ...transitionStyle
          }}
        >
          <div
            className={styles.panel}
            // highlight-next-line
            ref={panelRef}
            {...panelProps}
          >
            {children}
          </div>
          {/* Closing tag of the extra `div` */}
          {/* highlight-next-line */}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
