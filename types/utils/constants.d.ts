import { ReactNode } from 'react';
import { TransitionMapResult, TransitionMapOptions } from 'react-transition-state';
export declare type ItemKey = Element | string | number;
export declare type TransitionProp = boolean | {
    enter?: boolean;
    exit?: boolean;
    preEnter?: boolean;
    preExit?: boolean;
};
export interface AccordionProviderProps extends Omit<TransitionMapOptions<ItemKey>, 'enter' | 'exit' | 'preEnter' | 'preExit'> {
    transition?: TransitionProp;
    children?: ReactNode;
}
export declare const AccordionContext: import("react").Context<Partial<TransitionMapResult<ItemKey>> & {
    mountOnEnter?: boolean | undefined;
    initialEntered?: boolean | undefined;
}>;
