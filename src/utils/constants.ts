import { createContext, ReactNode } from 'react';
import { TransitionMapResult, TransitionMapOptions } from 'react-transition-state';

export const ACCORDION_BLOCK = 'szh-accordion';
export const ACCORDION_BTN_ATTR = `data-${ACCORDION_BLOCK}-btn`;
export const ACCORDION_ATTR = `data-${ACCORDION_BLOCK}`;

export type Modifiers = Record<string, boolean | string>;
export type ClassNameProp<M extends Modifiers> = string | ((modifiers: M) => string);
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
