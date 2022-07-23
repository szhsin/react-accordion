import { ReactNode, forwardRef } from 'react';
import { ACCORDION_BLOCK, AccordionProviderValue, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { AccordionProvider } from './AccordionProvider';
import { useAccordion } from '../hooks/useAccordion';

interface ControlledAccordionProps extends ElementProps<HTMLDivElement, string> {
  providerValue: AccordionProviderValue;
  children?: ReactNode;
}

const ControlledAccordion = forwardRef<HTMLDivElement, ControlledAccordionProps>(
  ({ providerValue, className, ...rest }, ref) => {
    const { accordionProps } = useAccordion();
    return (
      <AccordionProvider value={providerValue}>
        <div
          {...rest}
          {...accordionProps}
          ref={ref}
          className={bem(ACCORDION_BLOCK, undefined, undefined, className)}
        />
      </AccordionProvider>
    );
  }
);

export { ControlledAccordion, ControlledAccordionProps };
