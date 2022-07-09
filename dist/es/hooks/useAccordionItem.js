import { useRef, useContext, useEffect } from 'react';
import { AccordionContext, ACCORDION_BTN_ATTR } from '../utils/constants.js';
import { useId as _useId } from './useId.js';

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
      toggle = _useContext.toggle,
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
  var state = stateMap.get(key) || initialState;

  var toggleItem = function toggleItem(toEnter) {
    return toggle(key, toEnter);
  };

  var buttonId = _useId();
  var panelId = _useId();
  var buttonProps = (_buttonProps = {
    id: buttonId
  }, _buttonProps[ACCORDION_BTN_ATTR] = '', _buttonProps['aria-controls'] = panelId, _buttonProps['aria-expanded'] = state.isEnter, _buttonProps.onClick = toggleItem, _buttonProps);
  var panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    itemRef: itemRef,
    buttonProps: buttonProps,
    panelProps: panelProps,
    state: state,
    toggle: toggleItem,
    endTransition: function endTransition() {
      return _endTransition(key);
    }
  };
};

export { useAccordionItem };
