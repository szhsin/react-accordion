import { ReactNode } from 'react';
import { AccordionProvider } from './AccordionProvider';

const Accordion = ({ children }: { children?: ReactNode }) => {
  return (
    <AccordionProvider>
      <div>{children}</div>
    </AccordionProvider>
  );
};

export { Accordion };
