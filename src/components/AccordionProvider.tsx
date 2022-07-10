import { useTransitionMap } from 'react-transition-state';
import {
  AccordionContext,
  TransitionProp,
  AccordionProviderProps,
  ItemKey
} from '../utils/constants';

const getTransition = (
  transition: TransitionProp | undefined,
  name: 'enter' | 'exit' | 'preEnter' | 'preExit'
): boolean => transition === true || !!(transition && transition[name]);

const AccordionProvider = ({
  allowMultiple,
  transition,
  children,
  ...rest
}: AccordionProviderProps) => {
  const transitionMap = useTransitionMap<ItemKey>({
    singleEnter: !allowMultiple,
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit'),
    ...rest
  });
  return (
    <AccordionContext.Provider
      value={{
        mountOnEnter: rest.mountOnEnter,
        initialEntered: rest.initialEntered,
        ...transitionMap
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export { AccordionProvider };
