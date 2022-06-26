import { ReactNode } from 'react';
import { useTransitionMap } from 'react-transition-state';
import { AccordionContext } from '../utils/constants';

const AccordionProvider = ({ children }: { children?: ReactNode }) => {
  const transitionMap = useTransitionMap<Element>({
    singleEnter: true,
    preEnter: true,
    preExit: true,
    timeout: 300,
    unmountOnExit: true,
    mountOnEnter: true
  });
  return <AccordionContext.Provider value={transitionMap}>{children}</AccordionContext.Provider>;
};

export { AccordionProvider };
