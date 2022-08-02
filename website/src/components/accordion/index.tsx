import React from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styles from './styles.module.css';

const StyledAccordion = (props) => <Accordion {...props} transition transitionTimeout={200} />;

const StyledAccordionItem = (props) => (
  <AccordionItem
    {...props}
    className={styles.item}
    buttonProps={{
      className: ({ expanded }) => (expanded ? styles.buttonExpanded : styles.button)
    }}
    contentProps={{ className: styles.content }}
    panelProps={{ className: styles.panel }}
  />
);

export { StyledAccordion as Accordion, StyledAccordionItem as AccordionItem };
