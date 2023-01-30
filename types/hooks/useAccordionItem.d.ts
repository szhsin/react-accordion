import { HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ItemState } from '../utils/constants';
declare const useAccordionItem: ({ state, toggle, disabled }: ItemState) => {
    buttonProps: ButtonHTMLAttributes<Element>;
    panelProps: HTMLAttributes<Element>;
};
export { useAccordionItem };
