import { useAccordionContext, getItemState } from './useAccordionContext.js';

const useAccordionState = () => {
  const context = useAccordionContext();
  return {
    getItemState: (key, {
      initialEntered
    } = {}) => getItemState(context, key, initialEntered),
    toggle: context.toggle,
    toggleAll: context.toggleAll
  };
};

export { useAccordionState };
