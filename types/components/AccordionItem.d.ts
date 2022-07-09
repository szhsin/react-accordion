import { ReactNode } from 'react';
import { TransitionState } from 'react-transition-state';
import { ClassNameProp, ElementProps } from '../utils/constants';
declare type ItemModifiers = {
    state: TransitionState;
    expanded: boolean;
};
declare const AccordionItem: ({ itemKey, initialEntered, className, header, headerProps, buttonProps, contentProps, panelProps, children }: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
    className?: ClassNameProp<ItemModifiers> | undefined;
    header: ReactNode;
    headerProps?: ElementProps<HTMLHeadingElement, ItemModifiers> | undefined;
    buttonProps?: ElementProps<HTMLButtonElement, ItemModifiers> | undefined;
    contentProps?: ElementProps<HTMLDivElement, ItemModifiers> | undefined;
    panelProps?: ElementProps<HTMLDivElement, ItemModifiers> | undefined;
    children?: ReactNode;
}) => JSX.Element;
export { AccordionItem };
