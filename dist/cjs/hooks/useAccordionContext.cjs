'use strict';

var React = require('react');
var constants = require('../utils/constants.cjs');

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
  const context = React.useContext(constants.AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !context.stateMap) {
    throw new Error('[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.');
  }
  return context;
};

exports.getItemState = getItemState;
exports.useAccordionContext = useAccordionContext;
