import { useContext, useEffect, useRef, MouseEventHandler, HTMLAttributes } from 'react';
import { State } from 'react-transition-state';
import { AccordionContext, ACCORDION_BTN_ATTR } from '../utils/constants';

const useAccordionItem = <K extends Element>({
  itemKey,
  initialEntered: itemInitialEntered
}: { itemKey?: string | number; initialEntered?: boolean } = {}) => {
  const itemRef = useRef<K>(null);
  const { stateMap, setItem, deleteItem, toggle, endTransition, mountOnEnter, initialEntered } =
    useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error(
      `[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.`
    );
  }

  useEffect(() => {
    const key = itemKey ?? itemRef.current!;
    setItem!(key, { initialEntered: itemInitialEntered });
    return () => void deleteItem!(key);
  }, [setItem, deleteItem, itemKey, itemInitialEntered]);

  const _initialEntered = itemInitialEntered ?? initialEntered;
  const initialState: State = {
    state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: !!_initialEntered
  };
  const key = itemKey ?? itemRef.current!;
  const state = stateMap!.get(key) || initialState;
  const toggleItem = (toEnter?: boolean) => toggle!(key, toEnter);
  const buttonProps: HTMLAttributes<Element> = {
    [ACCORDION_BTN_ATTR]: '',
    'aria-expanded': state.isEnter,
    onClick: toggleItem as unknown as MouseEventHandler<Element>
  };

  return {
    itemRef,
    buttonProps,
    state,
    toggle: toggleItem,
    endTransition: () => endTransition!(key)
  };
};

export { useAccordionItem };
