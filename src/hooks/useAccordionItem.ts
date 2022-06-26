import { useContext, useEffect, useRef } from 'react';
import { TransitionItemOptions, TransitionState } from 'react-transition-state';
import { AccordionContext } from '../utils/constants';

const useAccordionItem = <K extends Element>({
  initialEntered: itemInitialEntered
}: TransitionItemOptions = {}) => {
  const ref = useRef<K>(null);
  const { stateMap, setItem, deleteItem, mountOnEnter, initialEntered, ...rest } =
    useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error(
      `[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.`
    );
  }

  useEffect(() => {
    const item = ref.current!;
    setItem!(item, { initialEntered: itemInitialEntered });
    return () => void deleteItem!(item);
  }, [setItem, deleteItem, itemInitialEntered]);

  const _initialEntered = itemInitialEntered == null ? initialEntered : itemInitialEntered;
  const initialState: TransitionState = _initialEntered
    ? 'entered'
    : mountOnEnter
    ? 'unmounted'
    : 'exited';

  return {
    itemRef: ref,
    state: stateMap!.get(ref.current!) || { state: initialState },
    ...(rest as Required<typeof rest>)
  };
};

export { useAccordionItem };
