import { TransitionState } from 'react-transition-state';
import { AccordionProviderValue, ItemKey } from '../utils/constants';
declare const getItemState: (providerValue: AccordionProviderValue, key: ItemKey, itemInitialEntered?: boolean) => TransitionState;
declare const useAccordionContext: () => AccordionProviderValue;
export { useAccordionContext, getItemState };
