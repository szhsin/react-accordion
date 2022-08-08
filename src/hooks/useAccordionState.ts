import { ItemKey } from '../utils/constants';
import { useAccordionContext, getItemStates } from './useAccordionContext';

const useAccordionState = () => {
  const context = useAccordionContext();
  return {
    getItemStates: (key: ItemKey, { initialEntered }: { initialEntered?: boolean } = {}) =>
      getItemStates(context, key, initialEntered),
    toggle: context.toggle
  };
};

export { useAccordionState };
