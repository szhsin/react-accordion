import { ReactNode } from 'react';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useTransitionHeight } from '../hooks/useTransitionHeight';

const AccordionItem = ({ header, children }: { header: ReactNode; children?: ReactNode }) => {
  const { itemRef, toggle, state: { state } = {} } = useAccordionItem<HTMLDivElement>();
  const [height, panelRef] = useTransitionHeight(state);

  return (
    <div ref={itemRef}>
      <h3 style={{ margin: 0 }}>
        <button onClick={() => toggle(itemRef.current!)}>{header}</button>
      </h3>
      {state && state !== 'unmounted' && (
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
