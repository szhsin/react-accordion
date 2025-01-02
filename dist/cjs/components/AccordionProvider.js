'use strict';

var constants = require('../utils/constants.js');
var jsxRuntime = require('react/jsx-runtime');

const AccordionProvider = props => /*#__PURE__*/jsxRuntime.jsx(constants.AccordionContext.Provider, {
  ...props
});

exports.AccordionProvider = AccordionProvider;
