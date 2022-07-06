import { useRef, useContext, useEffect } from 'react';
import { AccordionContext, ACCORDION_BTN_ATTR } from '../utils/constants.js';

var useAccordionItem = function useAccordionItem(_temp) {
  var _buttonProps;

  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      itemInitialEntered = _ref.initialEntered;

  var itemRef = useRef(null);

  var _useContext = useContext(AccordionContext),
      stateMap = _useContext.stateMap,
      setItem = _useContext.setItem,
      deleteItem = _useContext.deleteItem,
      _toggle = _useContext.toggle,
      _endTransition = _useContext.endTransition,
      mountOnEnter = _useContext.mountOnEnter,
      initialEntered = _useContext.initialEntered;

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
  var key = itemKey != null ? itemKey : itemRef.current;
  return {
    itemRef: itemRef,
    buttonProps: (_buttonProps = {}, _buttonProps[ACCORDION_BTN_ATTR] = '', _buttonProps),
    state: stateMap.get(key) || initialState,
    toggle: function toggle(toEnter) {
      return _toggle(key, toEnter);
    },
    endTransition: function endTransition() {
      return _endTransition(key);
    }
  };
};

export { useAccordionItem };
