import { createContext } from 'react';
import { TransitionMapResult } from 'react-transition-state';

export const AccordionContext = createContext<Partial<TransitionMapResult<Element>>>({});
