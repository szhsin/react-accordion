import React from 'react';
import {
  ControlledAccordion,
  AccordionItem,
  useAccordionProvider
} from '../accordion';

export default function ControllingState() {
  // highlight-start
  const providerValue = useAccordionProvider({
    transition: true,
    transitionTimeout: 200
  });
  const { toggle } = providerValue;
  // highlight-end

  return (
    <div>
      <div className="buttons">
        <button
          className="btn"
          // Toggle between open and close by omitting the second parameter
          // highlight-next-line
          onClick={() => toggle('item-1')}
        >
          Toogle the first item
        </button>
        <button
          className="btn"
          // highlight-next-line
          onClick={() => toggle('item-3', true)}
        >
          Open the last item
        </button>
      </div>

      <ControlledAccordion
        // highlight-next-line
        providerValue={providerValue}
      >
        <AccordionItem
          header="What is Lorem Ipsum?"
          // highlight-next-line
          itemKey="item-1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem header="Where does it come from?">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
          accumsan auctor mi.
        </AccordionItem>

        <AccordionItem
          header="Why do we use it?"
          // highlight-next-line
          itemKey="item-3"
        >
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </ControlledAccordion>
    </div>
  );
}
