import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { useAccordionProvider } from '../hooks/useAccordionProvider.js';
import { ControlledAccordion } from './ControlledAccordion.js';
import { jsx } from 'react/jsx-runtime';

const _excluded = ["allowMultiple", "initialEntered", "mountOnEnter", "unmountOnExit", "transition", "transitionTimeout", "onStateChange"];
const Accordion = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
      allowMultiple,
      initialEntered,
      mountOnEnter,
      unmountOnExit,
      transition,
      transitionTimeout,
      onStateChange
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  const providerValue = useAccordionProvider({
    allowMultiple,
    initialEntered,
    mountOnEnter,
    unmountOnExit,
    transition,
    transitionTimeout,
    onStateChange
  });
  return /*#__PURE__*/jsx(ControlledAccordion, _extends({}, rest, {
    ref: ref,
    providerValue: providerValue
  }));
});
Accordion.displayName = 'Accordion';

export { Accordion };
