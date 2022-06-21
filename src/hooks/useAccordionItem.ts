import { useContext, useEffect, useRef } from 'react';
import { AccordionContext } from '../utils/constants';

const useAccordionItem = <K extends Element>() => {
  const ref = useRef<K>(null);
  const { stateMap, setItem, deleteItem, ...rest } = useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error(
      `[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.`
    );
  }

  useEffect(() => {
    const item = ref.current!;
    setItem!(item, {
      preEnter: true,
      preExit: true,
      timeout: 250,
      initialEntered: false
    });
    return () => void deleteItem!(item);
  }, [setItem, deleteItem]);

  return { itemRef: ref, state: stateMap!.get(ref.current!), ...(rest as Required<typeof rest>) };
};

export { useAccordionItem };
