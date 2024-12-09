import {
  useAccordionItem,
  useAccordionItemEffect
} from '@szhsin/react-accordion';
import ChevronDown from '@site/static/img/chevron-down.svg';
import styles from '../accordion/styles.module.css';

const AccordionItem = ({
  header,
  children,
  itemKey,
  initialEntered,
  disabled
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  itemKey?: string | number;
  initialEntered?: boolean;
  disabled?: boolean;
}) => {
  const { itemRef, state, toggle } =
    useAccordionItemEffect<HTMLDivElement>({
      itemKey,
      initialEntered,
      disabled
    });
  const { buttonProps, panelProps } = useAccordionItem({
    state,
    toggle,
    disabled
  });
  const { status, isMounted, isEnter } = state;

  return (
    <div className={styles.item} ref={itemRef}>
      {/* Choose a heading level that is appropriate for the information 
      architecture of your page */}
      {/* highlight-next-line */}
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
        <div
          className={styles.panel}
          style={{
            display: status === 'exited' ? 'none' : undefined
          }}
          {...panelProps}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
