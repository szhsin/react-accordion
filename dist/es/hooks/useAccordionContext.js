import { useContext } from 'react';
import { AccordionContext } from '../utils/constants.js';

const getItemState = (providerValue, key, itemInitialEntered) => {
  const {
    stateMap,
    mountOnEnter,
    initialEntered
  } = providerValue;
  const _initialEntered = itemInitialEntered != null ? itemInitialEntered : initialEntered;
  return stateMap.get(key) || {
    status: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: _initialEntered,
    isResolved: true
  };
};
const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !context.stateMap) {
    throw new Error('[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.');
  }
  return context;
};

export { getItemState, useAccordionContext };
