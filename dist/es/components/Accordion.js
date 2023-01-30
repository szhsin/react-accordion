import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { useAccordionProvider } from '../hooks/useAccordionProvider.js';
import { ControlledAccordion } from './ControlledAccordion.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["allowMultiple", "initialEntered", "mountOnEnter", "unmountOnExit", "transition", "transitionTimeout", "onStateChange"];
var Accordion = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var allowMultiple = _ref.allowMultiple,
    initialEntered = _ref.initialEntered,
    mountOnEnter = _ref.mountOnEnter,
    unmountOnExit = _ref.unmountOnExit,
    transition = _ref.transition,
    transitionTimeout = _ref.transitionTimeout,
    onStateChange = _ref.onStateChange,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var providerValue = useAccordionProvider({
    allowMultiple: allowMultiple,
    initialEntered: initialEntered,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    transition: transition,
    transitionTimeout: transitionTimeout,
    onStateChange: onStateChange
  });
  return /*#__PURE__*/jsx(ControlledAccordion, _extends({}, rest, {
    ref: ref,
    providerValue: providerValue
  }));
});
Accordion.displayName = 'Accordion';

export { Accordion };
