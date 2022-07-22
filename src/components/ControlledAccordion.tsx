import { ReactNode } from 'react';
import { ACCORDION_BLOCK, AccordionProviderValue, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { AccordionProvider } from './AccordionProvider';
import { useAccordion } from '../hooks/useAccordion';

interface ControlledAccordionProps extends ElementProps<HTMLDivElement, string> {
  providerValue: AccordionProviderValue;
  children?: ReactNode;
}

const ControlledAccordion = ({ providerValue, className, ...rest }: ControlledAccordionProps) => {
  const { accordionProps } = useAccordion();
  return (
    <AccordionProvider value={providerValue}>
      <div
        {...rest}
        {...accordionProps}
        className={bem(ACCORDION_BLOCK, undefined, undefined, className)}
      />
    </AccordionProvider>
  );
};

export { ControlledAccordion, ControlledAccordionProps };
