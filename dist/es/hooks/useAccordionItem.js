import { ACCORDION_BTN_ATTR } from '../utils/constants.js';
import { useId as _useId } from './useId.js';

var useAccordionItem = function useAccordionItem(_ref) {
  var state = _ref.state,
    toggle = _ref.toggle,
    disabled = _ref.disabled;
  var buttonId = _useId();
  var panelId = buttonId && buttonId + '-';
  var buttonProps = {
    id: buttonId,
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggle
  };
  disabled ? buttonProps.disabled = true : buttonProps[ACCORDION_BTN_ATTR] = '';
  var panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    buttonProps: buttonProps,
    panelProps: panelProps
  };
};

export { useAccordionItem };
