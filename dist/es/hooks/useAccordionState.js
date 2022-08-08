import { useAccordionContext, getItemStates } from './useAccordionContext.js';

var useAccordionState = function useAccordionState() {
  var context = useAccordionContext();
  return {
    getItemStates: function getItemStates$1(key, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          initialEntered = _ref.initialEntered;

      return getItemStates(context, key, initialEntered);
    },
    toggle: context.toggle
  };
};

export { useAccordionState };
