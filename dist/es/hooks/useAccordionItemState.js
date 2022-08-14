import { useRef, useEffect, useCallback } from 'react';
import { useAccordionContext, getItemState } from './useAccordionContext.js';

var useAccordionItemState = function useAccordionItemState(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered;

  var itemRef = useRef(null);
  var context = useAccordionContext();
  var key = itemKey != null ? itemKey : itemRef.current;
  var state = getItemState(context, key, initialEntered);
  var setItem = context.setItem,
      deleteItem = context.deleteItem,
      toggle = context.toggle;
  useEffect(function () {
    var key = itemKey != null ? itemKey : itemRef.current;
    setItem(key, {
      initialEntered: initialEntered
    });
    return function () {
      return void deleteItem(key);
    };
  }, [setItem, deleteItem, itemKey, initialEntered]);
  return {
    itemRef: itemRef,
    state: state,
    toggle: useCallback(function (toEnter) {
      return toggle(key, toEnter);
    }, [toggle, key])
  };
};

export { useAccordionItemState };
