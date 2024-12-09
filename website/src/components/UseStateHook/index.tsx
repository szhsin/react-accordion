import {
  Accordion,
  AccordionItem,
  useAccordionState
} from '../accordion';

const MyItem = () => {
  // highlight-next-line
  const { getItemState, toggle, toggleAll } = useAccordionState();

  return (
    <AccordionItem header="My custom accordion item" initialEntered>
      <p>
        {/* Accessing item state by providing an `itemKey` */}
        {/* highlight-next-line */}
        Next item expanded: {getItemState('next').isEnter.toString()}
      </p>

      <div className="buttons">
        {/* highlight-next-line */}
        <button className="btn" onClick={() => toggle('next')}>
          Toggle next item
        </button>

        {/* highlight-next-line */}
        <button className="btn" onClick={() => toggleAll(false)}>
          Close all items
        </button>
      </div>
    </AccordionItem>
  );
};

export default function Example() {
  return (
    <Accordion allowMultiple>
      {/* highlight-next-line */}
      <MyItem />

      <AccordionItem
        header="What is Lorem Ipsum?"
        // highlight-next-line
        itemKey="next"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
    </Accordion>
  );
}
