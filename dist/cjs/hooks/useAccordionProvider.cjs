'use strict';

var reactTransitionState = require('react-transition-state');

const getTransition = (transition, name) => transition === true || !!(transition && transition[name]);
const useAccordionProvider = ({
  transition,
  transitionTimeout,
  ...rest
} = {}) => {
  const transitionMap = reactTransitionState.useTransitionMap({
    timeout: transitionTimeout,
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit'),
    ...rest
  });
  return {
    mountOnEnter: !!rest.mountOnEnter,
    initialEntered: !!rest.initialEntered,
    ...transitionMap
  };
};

exports.useAccordionProvider = useAccordionProvider;
