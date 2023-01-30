import { useAccordionContext, getItemState } from './useAccordionContext.js';

var useAccordionState = function useAccordionState() {
  var context = useAccordionContext();
  return {
    getItemState: function getItemState$1(key, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        initialEntered = _ref.initialEntered;
      return getItemState(context, key, initialEntered);
    },
    toggle: context.toggle
  };
};

export { useAccordionState };
