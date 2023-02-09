import { useRef, useEffect, useCallback } from 'react';
import { useAccordionContext, getItemState } from './useAccordionContext.js';

const useAccordionItemEffect = ({
  itemKey,
  initialEntered,
  disabled
} = {}) => {
  const itemRef = useRef(null);
  const context = useAccordionContext();
  const key = itemKey != null ? itemKey : itemRef.current;
  const state = getItemState(context, key, initialEntered);
  const {
    setItem,
    deleteItem,
    toggle
  } = context;
  useEffect(() => {
    if (disabled) return;
    const key = itemKey != null ? itemKey : itemRef.current;
    setItem(key, {
      initialEntered
    });
    return () => void deleteItem(key);
  }, [setItem, deleteItem, itemKey, initialEntered, disabled]);
  return {
    itemRef,
    state,
    toggle: useCallback(toEnter => toggle(key, toEnter), [toggle, key])
  };
};

export { useAccordionItemEffect };
