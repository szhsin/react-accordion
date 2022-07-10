import { createContext } from 'react';

var ACCORDION_BLOCK = 'szh-accordion';
var ACCORDION_PREFIX = 'szh-adn';
var ACCORDION_ATTR = "data-" + ACCORDION_PREFIX;
var ACCORDION_BTN_ATTR = "data-" + ACCORDION_PREFIX + "-btn";
var AccordionContext = /*#__PURE__*/createContext({});

export { ACCORDION_ATTR, ACCORDION_BLOCK, ACCORDION_BTN_ATTR, ACCORDION_PREFIX, AccordionContext };
