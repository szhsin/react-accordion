import { AccordionProviderProps } from '../utils/constants';
import { AccordionBlock } from '../utils/constants';
import { bem } from '../utils/bem';
import { AccordionProvider } from './AccordionProvider';

const Accordion = ({
  className,
  children,
  ...rest
}: AccordionProviderProps & { className?: string }) => {
  return (
    <AccordionProvider {...rest}>
      <div className={bem(AccordionBlock, undefined, undefined, className)}>{children}</div>
    </AccordionProvider>
  );
};

export { Accordion };
