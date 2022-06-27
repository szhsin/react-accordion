import { createContext, ReactNode } from 'react';
import { TransitionMapResult, TransitionMapOptions } from 'react-transition-state';

export type ItemKey = Element | string | number;
export type TransitionProp =
  | boolean
  | {
      enter?: boolean;
      exit?: boolean;
      preEnter?: boolean;
      preExit?: boolean;
    };

export interface AccordionProviderProps
  extends Omit<TransitionMapOptions<ItemKey>, 'enter' | 'exit' | 'preEnter' | 'preExit'> {
  transition?: TransitionProp;
  children?: ReactNode;
}

export const AccordionContext = createContext<
  Partial<TransitionMapResult<ItemKey>> & {
    mountOnEnter?: boolean;
    initialEntered?: boolean;
  }
>({});
