import { AccordionProviderProps } from '../utils/constants';
import { ACCORDION_BLOCK } from '../utils/constants';
import { bem } from '../utils/bem';
import { AccordionProvider } from './AccordionProvider';
import { useAccordion } from '../hooks/useAccordion';

const Accordion = ({
  className,
  children,
  ...rest
}: AccordionProviderProps & { className?: string }) => {
  const { ref, accordionProps } = useAccordion<HTMLDivElement>();
  return (
    <AccordionProvider {...rest}>
      <div
        ref={ref}
        {...accordionProps}
        className={bem(ACCORDION_BLOCK, undefined, undefined, className)}
      >
        {children}
      </div>
    </AccordionProvider>
  );
};

export { Accordion };
