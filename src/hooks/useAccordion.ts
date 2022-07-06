import { HTMLAttributes, KeyboardEvent } from 'react';
import { ACCORDION_ATTR, ACCORDION_BTN_ATTR } from '../utils/constants';

const getAccordion = (node: Element) => {
  do {
    node = node.parentElement!;
  } while (node && !node.hasAttribute(ACCORDION_ATTR));
  return node;
};

const getNextIndex = (moveUp: boolean, current: number, length: number) =>
  moveUp ? (current > 0 ? current - 1 : length - 1) : (current + 1) % length;

const getSiblingNode = (moveUp: boolean, current: number, nodes: NodeListOf<HTMLElement>) => {
  const { length } = nodes;
  let next = getNextIndex(moveUp, current, length);
  while (getAccordion(nodes[current]) !== getAccordion(nodes[next]))
    next = getNextIndex(moveUp, next, length);
  return nodes[next];
};

const moveFocus = (moveUp: boolean, e: KeyboardEvent<Element>) => {
  const { activeElement } = document;
  if (
    !activeElement ||
    !activeElement.hasAttribute(ACCORDION_BTN_ATTR) ||
    getAccordion(activeElement) !== e.currentTarget
  )
    return;

  e.preventDefault();

  const buttons = e.currentTarget.querySelectorAll<HTMLElement>(`[${ACCORDION_BTN_ATTR}]`);
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === activeElement) {
      getSiblingNode(moveUp, i, buttons).focus();
      break;
    }
  }
};

const useAccordion = () => {
  const accordionProps: HTMLAttributes<Element> = {
    [ACCORDION_ATTR]: '',
    onKeyDown: (e) =>
      e.key === 'ArrowUp' ? moveFocus(true, e) : e.key === 'ArrowDown' && moveFocus(false, e)
  };
  return {
    accordionProps
  };
};

export { useAccordion };
