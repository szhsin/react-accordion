import { createContext } from "react";
//#region src/utils/constants.ts
const ACCORDION_BLOCK = "szh-accordion";
const ACCORDION_PREFIX = "szh-adn";
const ACCORDION_ATTR = `data-${ACCORDION_PREFIX}`;
const ACCORDION_BTN_ATTR = `data-${ACCORDION_PREFIX}-btn`;
const AccordionContext = createContext({});
//#endregion
export { ACCORDION_ATTR, ACCORDION_BLOCK, ACCORDION_BTN_ATTR, ACCORDION_PREFIX, AccordionContext };
