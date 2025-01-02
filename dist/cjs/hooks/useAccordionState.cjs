'use strict';

var useAccordionContext = require('./useAccordionContext.cjs');

const useAccordionState = () => {
  const context = useAccordionContext.useAccordionContext();
  return {
    getItemState: (key, {
      initialEntered
    } = {}) => useAccordionContext.getItemState(context, key, initialEntered),
    toggle: context.toggle,
    toggleAll: context.toggleAll
  };
};

exports.useAccordionState = useAccordionState;
