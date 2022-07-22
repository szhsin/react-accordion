import { AccordionProviderOptions } from '../utils/constants';
import { useAccordionProvider } from '../hooks/useAccordionProvider';
import { ControlledAccordion, ControlledAccordionProps } from './ControlledAccordion';

interface AccordionProps
  extends AccordionProviderOptions,
    Omit<ControlledAccordionProps, 'providerValue'> {}

const Accordion = ({
  allowMultiple,
  initialEntered,
  mountOnEnter,
  unmountOnExit,
  transition,
  transitionTimeout,
  onStateChange,
  ...rest
}: AccordionProps) => {
  const providerValue = useAccordionProvider({
    allowMultiple,
    initialEntered,
    mountOnEnter,
    unmountOnExit,
    transition,
    transitionTimeout,
    onStateChange
  });
  return <ControlledAccordion {...rest} providerValue={providerValue} />;
};

export { Accordion };
