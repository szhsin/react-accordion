import { ReactNode } from 'react';
import { useAccordionItem } from '../hooks/useAccordionItem';
import { useTransitionHeight } from '../hooks/useTransitionHeight';

const AccordionItem = ({ header, children }: { header: ReactNode; children?: ReactNode }) => {
  const { itemRef, toggle, state: { state } = {} } = useAccordionItem<HTMLDivElement>();
  const hidden = !state || state === 'exited';
  const [height, panelRef] = useTransitionHeight(state);
  console.log('state', state);

  return (
    <div ref={itemRef}>
      <h3 style={{ margin: 0 }}>
        <button onClick={() => toggle(itemRef.current!)}>{header}</button>
      </h3>
      <div
        role="region"
        className={state}
        style={{
          display: hidden ? 'none' : 'block',
          height:
            state === 'exiting' || state === 'preEnter'
              ? 0
              : state === 'preExit' || state === 'entering'
              ? height
              : undefined,
          transition: 'height .25s ease-in-out',
          overflow: 'hidden'
        }}
      >
        <div ref={panelRef} style={{ padding: '1rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export { AccordionItem };
