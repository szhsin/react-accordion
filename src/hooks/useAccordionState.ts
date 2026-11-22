import { ItemKey } from '../utils/constants.js';
import { useAccordionContext, getItemState } from './useAccordionContext.js';

const useAccordionState = () => {
  const context = useAccordionContext();
  return {
    getItemState: (key: ItemKey, { initialEntered }: { initialEntered?: boolean } = {}) =>
      getItemState(context, key, initialEntered),
    toggle: context.toggle,
    toggleAll: context.toggleAll
  };
};

export { useAccordionState };
