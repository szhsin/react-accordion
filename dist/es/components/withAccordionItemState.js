import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { useAccordionItemState } from '../hooks/useAccordionItemState.js';
import { jsx } from 'react/jsx-runtime';

var _excluded = ["itemKey", "initialEntered"];

var withAccordionItemState = function withAccordionItemState(WrappedItem) {
  var WithAccordionItemState = /*#__PURE__*/forwardRef(function (_ref, ref) {
    var itemKey = _ref.itemKey,
        initialEntered = _ref.initialEntered,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

    return /*#__PURE__*/jsx(WrappedItem, _extends({
      forwardedRef: ref
    }, rest, useAccordionItemState({
      itemKey: itemKey,
      initialEntered: initialEntered
    })));
  });
  WithAccordionItemState.displayName = 'WithAccordionItemState';
  return WithAccordionItemState;
};

export { withAccordionItemState };
