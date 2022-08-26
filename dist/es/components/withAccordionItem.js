import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { useAccordionItemEffect } from '../hooks/useAccordionItemEffect.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["itemKey", "initialEntered"];

var withAccordionItem = function withAccordionItem(WrappedItem) {
  var WithAccordionItem = /*#__PURE__*/forwardRef(function (_ref, ref) {
    var itemKey = _ref.itemKey,
        initialEntered = _ref.initialEntered,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

    return /*#__PURE__*/jsx(WrappedItem, _extends({
      forwardedRef: ref
    }, rest, useAccordionItemEffect({
      itemKey: itemKey,
      initialEntered: initialEntered
    })));
  });
  WithAccordionItem.displayName = 'WithAccordionItem';
  return WithAccordionItem;
};

export { withAccordionItem };
