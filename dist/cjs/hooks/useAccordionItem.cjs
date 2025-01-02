'use strict';

var constants = require('../utils/constants.cjs');
var useId = require('./useId.cjs');

const useAccordionItem = ({
  state,
  toggle,
  disabled
}) => {
  const buttonId = useId.useId();
  const panelId = buttonId && buttonId + '-';
  const buttonProps = {
    id: buttonId,
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggle
  };
  disabled ? buttonProps.disabled = true : buttonProps[constants.ACCORDION_BTN_ATTR] = '';
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

exports.useAccordionItem = useAccordionItem;
