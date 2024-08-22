import { forwardRef } from 'react';
import { useAccordionItemEffect } from '../hooks/useAccordionItemEffect.js';
import { jsx } from 'react/jsx-runtime';

const withAccordionItem = WrappedItem => {
  const WithAccordionItem = /*#__PURE__*/forwardRef(({
    itemKey,
    initialEntered,
    ...rest
  }, ref) => /*#__PURE__*/jsx(WrappedItem, {
    forwardedRef: ref,
    ...rest,
    ...useAccordionItemEffect({
      itemKey,
      initialEntered,
      disabled: rest.disabled
    })
  }));
  WithAccordionItem.displayName = 'WithAccordionItem';
  return WithAccordionItem;
};

export { withAccordionItem };
