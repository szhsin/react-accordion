'use strict';

var React = require('react');
var useAccordionContext = require('./useAccordionContext.cjs');

const useAccordionItemEffect = ({
  itemKey,
  initialEntered,
  disabled
} = {}) => {
  const itemRef = React.useRef(null);
  const context = useAccordionContext.useAccordionContext();
  const key = itemKey != null ? itemKey : itemRef.current;
  const state = useAccordionContext.getItemState(context, key, initialEntered);
  const {
    setItem,
    deleteItem,
    toggle
  } = context;
  React.useEffect(() => {
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
    toggle: React.useCallback(toEnter => toggle(key, toEnter), [toggle, key])
  };
};

exports.useAccordionItemEffect = useAccordionItemEffect;
