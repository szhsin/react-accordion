import React from 'react';
import { Accordion, AccordionItem } from '../accordion';

const items = [
  {
    header: 'What is Lorem Ipsum?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'
  },
  {
    header: 'Where does it come from?',
    content: 'Quisque eget luctus mi, vehicula mollis lorem...'
  },
  {
    header: 'Why do we use it?',
    content: 'Suspendisse massa risus, pretium id interdum in...'
  }
];

/* eslint-disable no-console */

export default function Example() {
  return (
    <Accordion
      // highlight-start
      onStateChange={({ key, current }) => {
        if (current.isResolved)
          console.log(`${key} is expanded: ${current.isEnter}`);
      }}
      // highlight-end
    >
      {items.map(({ header, content }, i) => (
        <AccordionItem
          key={i}
          header={header}
          // Explicitly set `itemKey` prop for each item
          // highlight-next-line
          itemKey={`Item-${i + 1}`}
        >
          {content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
