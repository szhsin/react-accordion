import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { ACCORDION_BLOCK } from '../utils/constants.js';
import { bem } from '../utils/bem.js';
import { mergeProps } from '../utils/mergeProps.js';
import { AccordionProvider } from './AccordionProvider.js';
import { useAccordion } from '../hooks/useAccordion.js';
import { jsx } from 'react/jsx-runtime';

const _excluded = ["providerValue", "className"];
const ControlledAccordion = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
      providerValue,
      className
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  const {
    accordionProps
  } = useAccordion();
  return /*#__PURE__*/jsx(AccordionProvider, {
    value: providerValue,
    children: /*#__PURE__*/jsx("div", _extends({}, mergeProps(accordionProps, rest), {
      ref: ref,
      className: bem(ACCORDION_BLOCK)(className)
    }))
  });
});
ControlledAccordion.displayName = 'ControlledAccordion';

export { ControlledAccordion };
