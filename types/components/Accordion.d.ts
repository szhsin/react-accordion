import { AccordionProviderProps, ElementProps } from '../utils/constants';
interface AccordionProps extends AccordionProviderProps, Omit<ElementProps<HTMLDivElement, string>, 'onChange'> {
}
declare const Accordion: ({ className, transition, initialEntered, mountOnEnter, unmountOnExit, singleEnter, timeout, onChange, ...rest }: AccordionProps) => JSX.Element;
export { Accordion };
