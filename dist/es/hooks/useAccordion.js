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

var moveFocus = function moveFocus(moveUp, e) {
  var _document = document,
      activeElement = _document.activeElement;
  if (!activeElement || !activeElement.hasAttribute(ACCORDION_BTN_ATTR) || getAccordion(activeElement) !== e.currentTarget) return;
  e.preventDefault();
  var nodes = e.currentTarget.querySelectorAll("[" + ACCORDION_BTN_ATTR + "]");
  var length = nodes.length;

  for (var i = 0; i < length; i++) {
    if (nodes[i] === activeElement) {
      var next = getNextIndex(moveUp, i, length);

      while (getAccordion(nodes[i]) !== getAccordion(nodes[next])) {
        next = getNextIndex(moveUp, next, length);
      }

      nodes[next].focus();
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
