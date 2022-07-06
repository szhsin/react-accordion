import { useRef, HTMLAttributes } from 'react';
import { ACCORDION_ATTR, ACCORDION_BTN_ATTR } from '../utils/constants';

const getAccordion = (node: HTMLElement) => {
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

const useAccordion = <E extends Element>() => {
  const ref = useRef<E>(null);

  const moveFocus = (moveUp: boolean) => {
    const { activeElement } = document;
    if (!activeElement || !activeElement.hasAttribute(ACCORDION_BTN_ATTR)) return;
    const buttons = ref.current!.querySelectorAll<HTMLElement>(`[${ACCORDION_BTN_ATTR}]`);
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === activeElement) {
        getSiblingNode(moveUp, i, buttons).focus();
        break;
      }
    }
  };

  const accordionProps: HTMLAttributes<Element> = {
    [ACCORDION_ATTR]: '',
    onKeyDown: (e) => {
      if (e.key === 'ArrowUp') {
        moveFocus(true);
      } else if (e.key === 'ArrowDown') {
        moveFocus(false);
      }
      e.stopPropagation();
    }
  };
  return {
    ref,
    accordionProps
  };
};

export { useAccordion };
