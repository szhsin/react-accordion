import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useRef, useContext, useEffect } from 'react';
import { AccordionContext } from '../utils/constants.js';

var _excluded = ["stateMap", "setItem", "deleteItem", "mountOnEnter", "initialEntered"];

var useAccordionItem = function useAccordionItem(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      itemInitialEntered = _ref.initialEntered;

  var itemRef = useRef(null);

  var _useContext = useContext(AccordionContext),
      stateMap = _useContext.stateMap,
      setItem = _useContext.setItem,
      deleteItem = _useContext.deleteItem,
      mountOnEnter = _useContext.mountOnEnter,
      initialEntered = _useContext.initialEntered,
      rest = _objectWithoutPropertiesLoose(_useContext, _excluded);

  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error("[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.");
  }

  useEffect(function () {
    var key = itemKey != null ? itemKey : itemRef.current;
    setItem(key, {
      initialEntered: itemInitialEntered
    });
    return function () {
      return void deleteItem(key);
    };
  }, [setItem, deleteItem, itemKey, itemInitialEntered]);

  var _initialEntered = itemInitialEntered != null ? itemInitialEntered : initialEntered;

  var initialState = {
    state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: !!_initialEntered
  };
  return _extends({
    itemRef: itemRef,
    state: stateMap.get(itemKey != null ? itemKey : itemRef.current) || initialState
  }, rest);
};

export { useAccordionItem };
