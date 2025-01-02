'use strict';

var React = require('react');
var useAccordionProvider = require('../hooks/useAccordionProvider.cjs');
var ControlledAccordion = require('./ControlledAccordion.cjs');
var jsxRuntime = require('react/jsx-runtime');

const Accordion = /*#__PURE__*/React.forwardRef(({
  allowMultiple,
  initialEntered,
  mountOnEnter,
  unmountOnExit,
  transition,
  transitionTimeout,
  onStateChange,
  ...rest
}, ref) => {
  const providerValue = useAccordionProvider.useAccordionProvider({
    allowMultiple,
    initialEntered,
    mountOnEnter,
    unmountOnExit,
    transition,
    transitionTimeout,
    onStateChange
  });
  return /*#__PURE__*/jsxRuntime.jsx(ControlledAccordion.ControlledAccordion, {
    ...rest,
    ref: ref,
    providerValue: providerValue
  });
});
Accordion.displayName = 'Accordion';

exports.Accordion = Accordion;
