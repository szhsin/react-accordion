import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useRef, useContext, useEffect } from 'react';
import { AccordionContext } from '../utils/constants.js';

var _excluded = ["stateMap", "setItem", "deleteItem"];

var useAccordionItem = function useAccordionItem() {
  var ref = useRef(null);

  var _useContext = useContext(AccordionContext),
      stateMap = _useContext.stateMap,
      setItem = _useContext.setItem,
      deleteItem = _useContext.deleteItem,
      rest = _objectWithoutPropertiesLoose(_useContext, _excluded);

  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error("[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.");
  }

  useEffect(function () {
    var item = ref.current;
    setItem(item, {
      enter: true,
      exit: true,
      timeout: 500
    });
    return function () {
      return void deleteItem(item);
    };
  }, [setItem, deleteItem]);
  return _extends({
    itemRef: ref,
    state: stateMap.get(ref.current)
  }, rest);
};

export { useAccordionItem };
