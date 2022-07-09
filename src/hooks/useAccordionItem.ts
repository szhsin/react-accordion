import { useContext, useEffect, useRef, MouseEventHandler, HTMLAttributes } from 'react';
import { State } from 'react-transition-state';
import { AccordionContext, ACCORDION_BTN_ATTR } from '../utils/constants';
import { useId } from './useId';

const useAccordionItem = <E extends Element>({
  itemKey,
  initialEntered: itemInitialEntered
}: { itemKey?: string | number; initialEntered?: boolean } = {}) => {
  const itemRef = useRef<E>(null);
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

  const buttonId = useId();
  const panelId = useId();
  const buttonProps: HTMLAttributes<Element> = {
    id: buttonId,
    [ACCORDION_BTN_ATTR]: '',
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggleItem as unknown as MouseEventHandler<Element>
  };
  const panelProps: HTMLAttributes<Element> = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };

  return {
    itemRef,
    buttonProps,
    panelProps,
    state,
    toggle: toggleItem,
    endTransition: () => endTransition!(key)
  };
};

export { useAccordionItem };
