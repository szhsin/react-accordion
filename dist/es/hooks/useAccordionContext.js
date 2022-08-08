import { useContext } from 'react';
import { AccordionContext } from '../utils/constants.js';

function getItemStates(providerValue, key, itemInitialEntered) {
  var stateMap = providerValue.stateMap,
      mountOnEnter = providerValue.mountOnEnter,
      initialEntered = providerValue.initialEntered;

  var _initialEntered = itemInitialEntered != null ? itemInitialEntered : initialEntered;

  return stateMap.get(key) || {
    state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: _initialEntered,
    isResolved: true
  };
}

var useAccordionContext = function useAccordionContext() {
  var context = useContext(AccordionContext);

  if (process.env.NODE_ENV !== 'production' && !context.stateMap) {
    throw new Error('[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.');
  }

  return context;
};

export { getItemStates, useAccordionContext };
