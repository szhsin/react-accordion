import { createContext, ReactNode } from 'react';
import { TransitionMapResult, TransitionMapOptions } from 'react-transition-state';

export type TransitionProp =
  | boolean
  | {
      enter?: boolean;
      exit?: boolean;
      preEnter?: boolean;
      preExit?: boolean;
    };

export interface AccordionProviderProps
  extends Omit<TransitionMapOptions<Element>, 'enter' | 'exit' | 'preEnter' | 'preExit'> {
  transition?: TransitionProp;
  children?: ReactNode;
}

export const AccordionContext = createContext<
  Partial<TransitionMapResult<Element>> & {
    mountOnEnter?: boolean;
    initialEntered?: boolean;
  }
>({});
