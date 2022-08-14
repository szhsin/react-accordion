import { MouseEventHandler, HTMLAttributes } from 'react';
import { ACCORDION_BTN_ATTR, ItemState } from '../utils/constants';
import { useId } from './useId';

const useAccordionItem = ({ state, toggle }: ItemState) => {
  const buttonId = useId();
  const panelId = useId();

  const buttonProps: HTMLAttributes<Element> = {
    id: buttonId,
    [ACCORDION_BTN_ATTR]: '',
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggle as unknown as MouseEventHandler<Element>
  };
  const panelProps: HTMLAttributes<Element> = {
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
