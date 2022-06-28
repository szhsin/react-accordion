import { AccordionProviderProps } from '../utils/constants';
import { AccordionProvider } from './AccordionProvider';

const Accordion = ({ children, ...rest }: AccordionProviderProps) => {
  return (
    <AccordionProvider {...rest}>
      <div className="szh-accordion">{children}</div>
    </AccordionProvider>
  );
};

export { Accordion };
