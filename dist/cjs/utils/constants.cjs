'use strict';

var React = require('react');

const ACCORDION_BLOCK = 'szh-accordion';
const ACCORDION_PREFIX = 'szh-adn';
const ACCORDION_ATTR = `data-${ACCORDION_PREFIX}`;
const ACCORDION_BTN_ATTR = `data-${ACCORDION_PREFIX}-btn`;
const AccordionContext = /*#__PURE__*/React.createContext({});

exports.ACCORDION_ATTR = ACCORDION_ATTR;
exports.ACCORDION_BLOCK = ACCORDION_BLOCK;
exports.ACCORDION_BTN_ATTR = ACCORDION_BTN_ATTR;
exports.ACCORDION_PREFIX = ACCORDION_PREFIX;
exports.AccordionContext = AccordionContext;
