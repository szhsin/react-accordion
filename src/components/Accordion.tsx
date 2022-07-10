import { ACCORDION_BLOCK, AccordionProviderProps, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { AccordionProvider } from './AccordionProvider';
import { useAccordion } from '../hooks/useAccordion';

interface AccordionProps
  extends AccordionProviderProps,
    Omit<ElementProps<HTMLDivElement, string>, 'onChange'> {}

const Accordion = ({
  className,
  allowMultiple,
  initialEntered,
  mountOnEnter,
  unmountOnExit,
  transition,
  timeout,
  onChange,
  ...rest
}: AccordionProps) => {
  const { accordionProps } = useAccordion();
  return (
    <AccordionProvider
      allowMultiple={allowMultiple}
      initialEntered={initialEntered}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      transition={transition}
      timeout={timeout}
      onChange={onChange}
    >
      <div
        {...rest}
        {...accordionProps}
        className={bem(ACCORDION_BLOCK, undefined, undefined, className)}
      />
    </AccordionProvider>
  );
};

export { Accordion };
