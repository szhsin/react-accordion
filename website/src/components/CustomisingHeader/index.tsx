import React from 'react';
import { Accordion, AccordionItem } from '../accordion';
import styles from './styles.module.css';

export default function Example() {
  return (
    <Accordion>
      <AccordionItem
        // highlight-start
        header={
          <div>
            <p className={styles.title}>What is Lorem Ipsum?</p>
            <p className={styles.description}>
              Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document.
            </p>
          </div>
        }
        // highlight-end
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>
    </Accordion>
  );
}
