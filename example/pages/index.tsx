import type { NextPage } from 'next';
import { forwardRef } from 'react';
import { Accordion, AccordionItem as Item, AccordionItemProps } from '@szhsin/react-accordion';
import styles from '../styles/Home.module.css';

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => (
  <Item
    {...props}
    ref={ref}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
));

AccordionItem.displayName = 'MyAccordionItem';

const Home: NextPage = () => {
  return (
    <div>
      <Accordion mountOnEnter transition transitionTimeout={300}>
        <AccordionItem header="Item 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem header="Item 2">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam
          ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.
          <Accordion allowMultiple>
            <AccordionItem header="Item 2.1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header="Item 2.2">
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales.
              Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi. Quisque eget luctus
              mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim,
              eleifend venenatis lectus vitae, accumsan auctor mi. Quisque eget luctus mi, vehicula
              mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis
              lectus vitae, accumsan auctor mi. Quisque eget luctus mi, vehicula mollis lorem. Proin
              fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
              accumsan auctor mi. Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.
            </AccordionItem>
          </Accordion>
        </AccordionItem>

        <AccordionItem header="Item 3">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate
          purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
      <hr />
    </div>
  );
};

export default Home;
