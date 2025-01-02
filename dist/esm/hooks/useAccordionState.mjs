import { useAccordionContext, getItemState } from './useAccordionContext.mjs';

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
