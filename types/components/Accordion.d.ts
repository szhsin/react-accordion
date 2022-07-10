import { AccordionProviderProps, ElementProps } from '../utils/constants';
interface AccordionProps extends AccordionProviderProps, Omit<ElementProps<HTMLDivElement, string>, 'onChange'> {
}
declare const Accordion: ({ className, allowMultiple, initialEntered, mountOnEnter, unmountOnExit, transition, timeout, onChange, ...rest }: AccordionProps) => JSX.Element;
export { Accordion };
