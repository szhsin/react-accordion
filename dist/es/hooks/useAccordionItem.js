import { ACCORDION_BTN_ATTR } from '../utils/constants.js';
import { useId as _useId } from './useId.js';

const useAccordionItem = ({
  state,
  toggle,
  disabled
}) => {
  const buttonId = _useId();
  const panelId = buttonId && buttonId + '-';
  const buttonProps = {
    id: buttonId,
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggle
  };
  disabled ? buttonProps.disabled = true : buttonProps[ACCORDION_BTN_ATTR] = '';
  const panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    buttonProps,
    panelProps
  };
};

export { useAccordionItem };
