import { ACCORDION_BTN_ATTR } from '../utils/constants.js';
import { useId as _useId } from './useId.js';

var useAccordionItem = function useAccordionItem(_ref) {
  var _buttonProps;

  var state = _ref.state,
      toggle = _ref.toggle;
  var buttonId = _useId();
  var panelId = buttonId && buttonId + '-';
  var buttonProps = (_buttonProps = {
    id: buttonId
  }, _buttonProps[ACCORDION_BTN_ATTR] = '', _buttonProps['aria-controls'] = panelId, _buttonProps['aria-expanded'] = state.isEnter, _buttonProps.onClick = toggle, _buttonProps);
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
