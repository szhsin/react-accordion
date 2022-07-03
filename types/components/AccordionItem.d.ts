import { ReactNode } from 'react';
import { TransitionState } from 'react-transition-state';
import { ClassNameProp } from '../utils/constants';
declare const AccordionItem: ({ itemKey, initialEntered, className, header, children }: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
    className?: ClassNameProp<{
        state: TransitionState;
        expanded: boolean;
    }> | undefined;
    header: ReactNode;
    children?: ReactNode;
}) => JSX.Element;
export { AccordionItem };
