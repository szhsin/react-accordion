import { useContext } from 'react';
import { State } from 'react-transition-state';
import { AccordionContext, AccordionProviderValue, ItemKey } from '../utils/constants';

function getItemStates(
  providerValue: AccordionProviderValue,
  key: ItemKey,
  itemInitialEntered?: boolean
): State {
  const { stateMap, mountOnEnter, initialEntered } = providerValue;
  const _initialEntered = itemInitialEntered ?? initialEntered;
  return (
    stateMap.get(key) || {
      state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
      isMounted: !mountOnEnter,
      isEnter: _initialEntered,
      isResolved: true
    }
  );
}

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !context.stateMap) {
    throw new Error(
      '[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.'
    );
  }
  return context as AccordionProviderValue;
};

export { useAccordionContext, getItemStates };
