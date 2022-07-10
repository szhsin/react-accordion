import { ACCORDION_BLOCK, AccordionProviderProps, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { AccordionProvider } from './AccordionProvider';
import { useAccordion } from '../hooks/useAccordion';

interface AccordionProps
  extends AccordionProviderProps,
    Omit<ElementProps<HTMLDivElement, string>, 'onChange'> {}

const Accordion = ({
  className,
  transition,
  initialEntered,
  mountOnEnter,
  unmountOnExit,
  singleEnter,
  timeout,
  onChange,
  ...rest
}: AccordionProps) => {
  const { accordionProps } = useAccordion();
  return (
    <AccordionProvider
      transition={transition}
      initialEntered={initialEntered}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      singleEnter={singleEnter}
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
