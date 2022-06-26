import { useTransitionMap } from 'react-transition-state';
import { AccordionContext, TransitionProp, AccordionProviderProps } from '../utils/constants';

const getTransition = (
  transition: TransitionProp | undefined,
  name: 'enter' | 'exit' | 'preEnter' | 'preExit'
): boolean => transition === true || !!(transition && transition[name]);

const AccordionProvider = ({ transition, children, ...rest }: AccordionProviderProps) => {
  const { mountOnEnter, initialEntered } = rest;
  const transitionMap = useTransitionMap<Element>({
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit'),
    ...rest
  });
  return (
    <AccordionContext.Provider value={{ mountOnEnter, initialEntered, ...transitionMap }}>
      {children}
    </AccordionContext.Provider>
  );
};

export { AccordionProvider };
