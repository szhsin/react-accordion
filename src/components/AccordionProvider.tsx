import { ReactNode } from 'react';
import { useTransitionMap } from 'react-transition-state';
import { AccordionContext } from '../utils/constants';

const AccordionProvider = ({ children }: { children?: ReactNode }) => {
  const transitionMap = useTransitionMap<Element>({ singleEnter: true });
  return <AccordionContext.Provider value={transitionMap}>{children}</AccordionContext.Provider>;
};

export { AccordionProvider };
