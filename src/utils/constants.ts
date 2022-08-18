import { createContext, HTMLAttributes } from 'react';
import {
  TransitionState,
  TransitionMapResult,
  TransitionMapOptions,
  TransitionOptions
} from 'react-transition-state';

export const ACCORDION_BLOCK = 'szh-accordion';
export const ACCORDION_PREFIX = 'szh-adn';
export const ACCORDION_ATTR = `data-${ACCORDION_PREFIX}`;
export const ACCORDION_BTN_ATTR = `data-${ACCORDION_PREFIX}-btn`;

export type Modifiers = {
  readonly [index: string]: boolean | string;
};
export type ClassNameProp<M extends Modifiers> = string | ((modifiers: M) => string);
export interface ElementProps<E extends HTMLElement, M extends Modifiers | string>
  extends Omit<HTMLAttributes<E>, 'className' | 'children'> {
  className?: M extends Modifiers ? ClassNameProp<M> : string;
  'data-testid'?: string | number;
}

export type ItemKey = Element | string | number;
export type TransitionProp =
  | boolean
  | {
      enter?: boolean;
      exit?: boolean;
      preEnter?: boolean;
      preExit?: boolean;
    };

export interface ItemState {
  readonly state: TransitionState;
  readonly toggle: (toEnter?: boolean) => void;
}

export interface ItemStateOptions {
  itemKey?: string | number;
  initialEntered?: boolean;
}

export interface AccordionProviderOptions
  extends Omit<
    TransitionMapOptions<ItemKey>,
    'enter' | 'exit' | 'preEnter' | 'preExit' | 'timeout'
  > {
  transition?: TransitionProp;
  transitionTimeout?: TransitionOptions['timeout'];
}

export interface AccordionProviderValue extends TransitionMapResult<ItemKey> {
  mountOnEnter: boolean;
  initialEntered: boolean;
}

export const AccordionContext = createContext<Partial<AccordionProviderValue>>({});
