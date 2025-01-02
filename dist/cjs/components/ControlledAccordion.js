'use strict';

var React = require('react');
var constants = require('../utils/constants.js');
var bem = require('../utils/bem.js');
var mergeProps = require('../utils/mergeProps.js');
var AccordionProvider = require('./AccordionProvider.js');
var useAccordion = require('../hooks/useAccordion.js');
var jsxRuntime = require('react/jsx-runtime');

const ControlledAccordion = /*#__PURE__*/React.forwardRef(({
  providerValue,
  className,
  ...rest
}, ref) => {
  const {
    accordionProps
  } = useAccordion.useAccordion();
  return /*#__PURE__*/jsxRuntime.jsx(AccordionProvider.AccordionProvider, {
    value: providerValue,
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      ...mergeProps.mergeProps(accordionProps, rest),
      ref: ref,
      className: bem.bem(constants.ACCORDION_BLOCK)(className)
    })
  });
});
ControlledAccordion.displayName = 'ControlledAccordion';

exports.ControlledAccordion = ControlledAccordion;
