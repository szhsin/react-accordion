import { useEffect, useRef, useCallback } from 'react';
import { ItemStateOptions } from '../utils/constants';
import { useAccordionContext, getItemState } from './useAccordionContext';

const useAccordionItemState = <E extends Element>({
  itemKey,
  initialEntered
}: ItemStateOptions = {}) => {
  const itemRef = useRef<E>(null);
  const context = useAccordionContext();
  const key = itemKey ?? itemRef.current!;
  const state = getItemState(context, key, initialEntered);
  const { setItem, deleteItem, toggle } = context;

  useEffect(() => {
    const key = itemKey ?? itemRef.current!;
    setItem(key, { initialEntered });
    return () => void deleteItem(key);
  }, [setItem, deleteItem, itemKey, initialEntered]);

  return {
    itemRef,
    state,
    toggle: useCallback((toEnter?: boolean) => toggle(key, toEnter), [toggle, key])
  };
};

export { useAccordionItemState };
