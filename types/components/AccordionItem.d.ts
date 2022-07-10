import { ReactNode } from 'react';
import { TransitionState } from 'react-transition-state';
import { ElementProps } from '../utils/constants';
declare type ItemModifiers = {
    readonly state: TransitionState;
    readonly expanded: boolean;
};
declare type ItemElementProps<E extends HTMLElement> = ElementProps<E, ItemModifiers>;
interface AccordionItemProps extends ItemElementProps<HTMLDivElement> {
    itemKey?: string | number;
    initialEntered?: boolean;
    header?: ReactNode;
    headerProps?: ItemElementProps<HTMLHeadingElement>;
    buttonProps?: ItemElementProps<HTMLButtonElement>;
    contentProps?: ItemElementProps<HTMLDivElement>;
    panelProps?: ItemElementProps<HTMLDivElement>;
    children?: ReactNode;
}
declare const AccordionItem: ({ itemKey, initialEntered, className, header, headerProps, buttonProps, contentProps, panelProps, children, ...rest }: AccordionItemProps) => JSX.Element;
export { AccordionItem, AccordionItemProps };
