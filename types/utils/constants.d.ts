import { HTMLAttributes } from 'react';
import { TransitionState, TransitionMapResult, TransitionMapOptions, TransitionOptions } from 'react-transition-state';
export declare const ACCORDION_BLOCK = "szh-accordion";
export declare const ACCORDION_PREFIX = "szh-adn";
export declare const ACCORDION_ATTR: string;
export declare const ACCORDION_BTN_ATTR: string;
export declare type Modifiers = {
    readonly [index: string]: boolean | string;
};
export declare type ClassNameProp<M extends Modifiers> = string | ((modifiers: M) => string);
export interface ElementProps<E extends HTMLElement, M extends Modifiers | string> extends Omit<HTMLAttributes<E>, 'className' | 'children'> {
    className?: M extends Modifiers ? ClassNameProp<M> : string;
    'data-testid'?: string | number;
}
export declare type ItemKey = Element | string | number;
export declare type TransitionProp = boolean | {
    enter?: boolean;
    exit?: boolean;
    preEnter?: boolean;
    preExit?: boolean;
};
export interface ItemState {
    readonly state: TransitionState;
    readonly toggle: (toEnter?: boolean) => void;
}
export interface AccordionProviderOptions extends Omit<TransitionMapOptions<ItemKey>, 'enter' | 'exit' | 'preEnter' | 'preExit' | 'singleEnter' | 'timeout'> {
    allowMultiple?: boolean;
    transition?: TransitionProp;
    transitionTimeout?: TransitionOptions['timeout'];
}
export interface AccordionProviderValue extends TransitionMapResult<ItemKey> {
    mountOnEnter: boolean;
    initialEntered: boolean;
}
export declare const AccordionContext: import("react").Context<Partial<AccordionProviderValue>>;
