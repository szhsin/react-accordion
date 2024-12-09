import {
  ControlledAccordion,
  AccordionItem,
  useAccordionProvider
} from '../accordion';

export default function Example() {
  // highlight-start
  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250
  });
  // Destructuring `toggle` and `toggleAll` from `providerValue`
  const { toggle, toggleAll } = providerValue;
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
          // Open rather than toggling
          // highlight-next-line
          onClick={() => toggle('item-3', true)}
        >
          Open the last item
        </button>
        <button
          className="btn"
          // highlight-next-line
          onClick={() => toggleAll(true)}
        >
          Open all items
        </button>
        <button
          className="btn"
          // highlight-next-line
          onClick={() => toggleAll(false)}
        >
          Close all items
        </button>
        <button
          className="btn"
          // Omitting the boolean parameter means toggling
          // highlight-next-line
          onClick={() => toggleAll()}
        >
          Toggle all items
        </button>
      </div>

      <ControlledAccordion
        // Forward the `providerValue` directly to `ControlledAccordion`
        // highlight-next-line
        providerValue={providerValue}
      >
        <AccordionItem
          header="What is Lorem Ipsum?"
          // Set an explicit `itemKey`
          // highlight-next-line
          itemKey="item-1"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <button
            className="btn"
            // It also works within the `AccordionItem` children
            // highlight-next-line
            onClick={() => toggle('item-3')}
          >
            Toggle the last item
          </button>
        </AccordionItem>

        <AccordionItem header="Where does it come from?">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
          vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
          vitae, accumsan auctor mi.
        </AccordionItem>

        <AccordionItem
          header="Why do we use it?"
          // Set an explicit `itemKey`
          // highlight-next-line
          itemKey="item-3"
        >
          Suspendisse massa risus, pretium id interdum in, dictum sit
          amet ante. Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </ControlledAccordion>
    </div>
  );
}
