import { AccordionContext } from '../utils/constants.js';
import { jsx } from 'react/jsx-runtime';

const AccordionProvider = props => /*#__PURE__*/jsx(AccordionContext.Provider, {
  ...props
});

export { AccordionProvider };
