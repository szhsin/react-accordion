import { forwardRef } from 'react';
import { useAccordionProvider } from '../hooks/useAccordionProvider.js';
import { ControlledAccordion } from './ControlledAccordion.js';
import { jsx } from 'react/jsx-runtime';

const Accordion = /*#__PURE__*/forwardRef(({
  allowMultiple,
  initialEntered,
  mountOnEnter,
  unmountOnExit,
  transition,
  transitionTimeout,
  onStateChange,
  ...rest
}, ref) => {
  const providerValue = useAccordionProvider({
    allowMultiple,
    initialEntered,
    mountOnEnter,
    unmountOnExit,
    transition,
    transitionTimeout,
    onStateChange
  });
  return /*#__PURE__*/jsx(ControlledAccordion, {
    ...rest,
    ref: ref,
    providerValue: providerValue
  });
});
Accordion.displayName = 'Accordion';

export { Accordion };
