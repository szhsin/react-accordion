import React from 'react';
import { Accordion, AccordionItem } from '../accordion';

export default function Example() {
  return (
    <Accordion>
      <AccordionItem header="Primary item 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Primary item 2" initialEntered>
        <Accordion>
          <AccordionItem header="Secondary item 1" initialEntered>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </AccordionItem>

          <AccordionItem header="Secondary item 2">
            Suspendisse massa risus, pretium id interdum in, dictum sit
            amet ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </AccordionItem>

      <AccordionItem header="Primary item 3">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
  );
}
