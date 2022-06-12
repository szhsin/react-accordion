import { ReactNode } from 'react';
import { useAccordionItem } from '../hooks/useAccordionItem';

const AccordionItem = ({ header, children }: { header: ReactNode; children?: ReactNode }) => {
  const { itemRef, toggle, state } = useAccordionItem<HTMLDivElement>();

  return (
    <div ref={itemRef}>
      <h3>
        <button onClick={() => toggle(itemRef.current!)}>{header}</button>
      </h3>
      <div
        role="region"
        className={state?.state}
        style={{ display: state?.isEnter ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

export { AccordionItem };
