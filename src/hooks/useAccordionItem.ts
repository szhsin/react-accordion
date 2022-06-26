import { useContext, useEffect, useRef } from 'react';
import { TransitionItemOptions, State } from 'react-transition-state';
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
  const initialState: State = {
    state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: !!_initialEntered
  };

  return {
    itemRef: ref,
    state: stateMap!.get(ref.current!) || initialState,
    ...(rest as Required<typeof rest>)
  };
};

export { useAccordionItem };
