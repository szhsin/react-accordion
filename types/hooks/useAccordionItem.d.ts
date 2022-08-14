import { HTMLAttributes } from 'react';
import { ItemState } from '../utils/constants';
declare const useAccordionItem: ({ state, toggle }: ItemState) => {
    buttonProps: HTMLAttributes<Element>;
    panelProps: HTMLAttributes<Element>;
};
export { useAccordionItem };
