import { ACCORDION_ATTR, ACCORDION_BTN_ATTR } from '../utils/constants.js';

var getAccordion = function getAccordion(node) {
  do {
    node = node.parentElement;
  } while (node && !node.hasAttribute(ACCORDION_ATTR));

  return node;
};

var getNextIndex = function getNextIndex(moveUp, current, length) {
  return moveUp ? current > 0 ? current - 1 : length - 1 : (current + 1) % length;
};

var getSiblingNode = function getSiblingNode(moveUp, current, nodes) {
  var length = nodes.length;
  var next = getNextIndex(moveUp, current, length);

  while (getAccordion(nodes[current]) !== getAccordion(nodes[next])) {
    next = getNextIndex(moveUp, next, length);
  }

  return nodes[next];
};

var moveFocus = function moveFocus(moveUp, e) {
  var _document = document,
      activeElement = _document.activeElement;
  if (!activeElement || !activeElement.hasAttribute(ACCORDION_BTN_ATTR) || getAccordion(activeElement) !== e.currentTarget) return;
  e.preventDefault();
  var buttons = e.currentTarget.querySelectorAll("[" + ACCORDION_BTN_ATTR + "]");

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i] === activeElement) {
      getSiblingNode(moveUp, i, buttons).focus();
      break;
    }
  }
};

var useAccordion = function useAccordion() {
  var _accordionProps;

  var accordionProps = (_accordionProps = {}, _accordionProps[ACCORDION_ATTR] = '', _accordionProps.onKeyDown = function onKeyDown(e) {
    return e.key === 'ArrowUp' ? moveFocus(true, e) : e.key === 'ArrowDown' && moveFocus(false, e);
  }, _accordionProps);
  return {
    accordionProps: accordionProps
  };
};

export { useAccordion };
