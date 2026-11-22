import { ReactNode } from 'react';
import { AccordionContext, AccordionProviderValue } from '../utils/constants.js';

const AccordionProvider = (props: { value: AccordionProviderValue; children?: ReactNode }) => (
  <AccordionContext.Provider {...props} />
);

export { AccordionProvider };
