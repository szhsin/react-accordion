import React from 'react';
import { Accordion, AccordionItem } from '../accordion';

export default function Example() {
  return (
    <Accordion>
      <AccordionItem
        // Accessing item state by giving a function to the `header` prop
        // highlight-next-line
        header={({ states }) => `Item expanded: ${states.isEnter}`}
      >
        {({ toggle }) => (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>

            {/* `toggle` function is also available from the render prop */}
            {/* highlight-next-line */}
            <button className="btn" onClick={() => toggle(false)}>
              Close item
            </button>
          </>
        )}
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>
    </Accordion>
  );
}
