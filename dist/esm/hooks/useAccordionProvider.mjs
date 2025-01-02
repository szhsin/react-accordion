import { useTransitionMap } from 'react-transition-state';

const getTransition = (transition, name) => transition === true || !!(transition && transition[name]);
const useAccordionProvider = ({
  transition,
  transitionTimeout,
  ...rest
} = {}) => {
  const transitionMap = useTransitionMap({
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

export { useAccordionProvider };
