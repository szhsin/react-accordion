import { useRef, useEffect } from 'react';
import { ACCORDION_BTN_ATTR } from '../utils/constants.js';
import { useId as _useId } from './useId.js';
import { useAccordionContext, getItemStates } from './useAccordionContext.js';

var useAccordionItem = function useAccordionItem(_temp) {
  var _buttonProps;

  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered;

  var itemRef = useRef(null);
  var context = useAccordionContext();
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
  var key = itemKey != null ? itemKey : itemRef.current;
  var states = getItemStates(context, key, initialEntered);

  var toggleItem = function toggleItem(toEnter) {
    return toggle(key, toEnter);
  };

  var buttonId = _useId();
  var panelId = _useId();
  var buttonProps = (_buttonProps = {
    id: buttonId
  }, _buttonProps[ACCORDION_BTN_ATTR] = '', _buttonProps['aria-controls'] = panelId, _buttonProps['aria-expanded'] = states.isEnter, _buttonProps.onClick = toggleItem, _buttonProps);
  var panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    itemRef: itemRef,
    states: states,
    buttonProps: buttonProps,
    panelProps: panelProps,
    toggle: toggleItem
  };
};

export { useAccordionItem };
