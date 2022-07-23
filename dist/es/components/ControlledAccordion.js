import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { AccordionProvider } from './AccordionProvider.js';
import { useAccordion } from '../hooks/useAccordion.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["providerValue", "className"];
var ControlledAccordion = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var providerValue = _ref.providerValue,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useAccordion = useAccordion(),
      accordionProps = _useAccordion.accordionProps;

  return /*#__PURE__*/jsx(AccordionProvider, {
    value: providerValue,
    children: /*#__PURE__*/jsx("div", _extends({}, rest, accordionProps, {
      ref: ref,
      className: bem(ACCORDION_BLOCK, undefined, undefined, className)
    }))
  });
});

export { ControlledAccordion };
