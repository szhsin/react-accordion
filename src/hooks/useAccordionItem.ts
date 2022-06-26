import { useContext, useEffect, useRef } from 'react';
import { TransitionItemOptions } from 'react-transition-state';
import { AccordionContext } from '../utils/constants';

const useAccordionItem = <K extends Element>({ initialEntered }: TransitionItemOptions = {}) => {
  const ref = useRef<K>(null);
  const { stateMap, setItem, deleteItem, ...rest } = useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error(
      `[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.`
    );
  }

  useEffect(() => {
    const item = ref.current!;
    setItem!(item, { initialEntered });
    return () => void deleteItem!(item);
  }, [setItem, deleteItem, initialEntered]);

  return { itemRef: ref, state: stateMap!.get(ref.current!), ...(rest as Required<typeof rest>) };
};

export { useAccordionItem };
