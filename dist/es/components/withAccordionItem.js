import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { forwardRef } from 'react';
import { useAccordionItemEffect } from '../hooks/useAccordionItemEffect.js';
import { jsx } from 'react/jsx-runtime';

const _excluded = ["itemKey", "initialEntered"];
const withAccordionItem = WrappedItem => {
  const WithAccordionItem = /*#__PURE__*/forwardRef((_ref, ref) => {
    let {
        itemKey,
        initialEntered
      } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);
    return /*#__PURE__*/jsx(WrappedItem, _extends({
      forwardedRef: ref
    }, rest, useAccordionItemEffect({
      itemKey,
      initialEntered,
      disabled: rest.disabled
    })));
  });
  WithAccordionItem.displayName = 'WithAccordionItem';
  return WithAccordionItem;
};

export { withAccordionItem };
