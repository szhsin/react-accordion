import { State } from 'react-transition-state';
import { AccordionProviderValue, ItemKey } from '../utils/constants';
declare function getItemStates(providerValue: AccordionProviderValue, key: ItemKey, itemInitialEntered?: boolean): State;
declare const useAccordionContext: () => AccordionProviderValue;
export { useAccordionContext, getItemStates };
