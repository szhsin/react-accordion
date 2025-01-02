'use strict';

var React = require('react');
var useAccordionItemEffect = require('../hooks/useAccordionItemEffect.cjs');
var jsxRuntime = require('react/jsx-runtime');

const withAccordionItem = WrappedItem => {
  const WithAccordionItem = /*#__PURE__*/React.forwardRef(({
    itemKey,
    initialEntered,
    ...rest
  }, ref) => /*#__PURE__*/jsxRuntime.jsx(WrappedItem, {
    forwardedRef: ref,
    ...rest,
    ...useAccordionItemEffect.useAccordionItemEffect({
      itemKey,
      initialEntered,
      disabled: rest.disabled
    })
  }));
  WithAccordionItem.displayName = 'WithAccordionItem';
  return WithAccordionItem;
};

exports.withAccordionItem = withAccordionItem;
