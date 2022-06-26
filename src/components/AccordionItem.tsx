import { ReactNode } from 'react';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useTransitionHeight } from '../hooks/useTransitionHeight';

const AccordionItem = ({
  initialEntered,
  header,
  children
}: {
  initialEntered?: boolean;
  header: ReactNode;
  children?: ReactNode;
}) => {
  const {
    itemRef,
    toggle,
    state: { state, isMounted }
  } = useAccordionItem<HTMLDivElement>({ initialEntered });
  const [height, panelRef] = useTransitionHeight(state);

  return (
    <div ref={itemRef} className="szh-accordion__item">
      <h3 style={{ margin: 0 }}>
        <button onClick={() => toggle(itemRef.current!)}>{header}</button>
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
