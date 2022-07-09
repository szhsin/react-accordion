import { ReactNode } from 'react';
import { TransitionState } from 'react-transition-state';
import { ClassNameProp, ElementProps } from '../utils/constants';
declare type ItemModifiers = {
    readonly state: TransitionState;
    readonly expanded: boolean;
};
interface AccordionItemProps {
    itemKey?: string | number;
    initialEntered?: boolean;
    className?: ClassNameProp<ItemModifiers>;
    header?: ReactNode;
    headerProps?: ElementProps<HTMLHeadingElement, ItemModifiers>;
    buttonProps?: ElementProps<HTMLButtonElement, ItemModifiers>;
    contentProps?: ElementProps<HTMLDivElement, ItemModifiers>;
    panelProps?: ElementProps<HTMLDivElement, ItemModifiers>;
    children?: ReactNode;
}
declare const AccordionItem: ({ itemKey, initialEntered, className, header, headerProps, buttonProps, contentProps, panelProps, children }: AccordionItemProps) => JSX.Element;
export { AccordionItem, AccordionItemProps };
