import { ReactNode } from 'react';
declare const AccordionItem: ({ itemKey, initialEntered, header, children }: {
    itemKey?: string | number | undefined;
    initialEntered?: boolean | undefined;
    header: ReactNode;
    children?: ReactNode;
}) => JSX.Element;
export { AccordionItem };
