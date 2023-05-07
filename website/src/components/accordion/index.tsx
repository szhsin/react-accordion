import React from 'react';
import * as ReactAccordion from '@szhsin/react-accordion';
import ChevronDown from '@site/static/img/chevron-down.svg';
import styles from './styles.module.css';

const Accordion = (props: ReactAccordion.AccordionProps) => (
  <ReactAccordion.Accordion
    {...props}
    className={styles.accordion}
    transition
    transitionTimeout={250}
  />
);

const ControlledAccordion = (
  props: ReactAccordion.ControlledAccordionProps
) => (
  <ReactAccordion.ControlledAccordion
    {...props}
    className={styles.accordion}
  />
);

const AccordionItem = (props: ReactAccordion.AccordionItemProps) => (
  <ReactAccordion.AccordionItem
    {...props}
    header={(renderProps) => (
      <>
        {typeof props.header === 'function'
          ? props.header(renderProps)
          : props.header}
        <ChevronDown className={styles.chevron} />
      </>
    )}
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        isEnter ? styles.buttonExpanded : styles.button
    }}
    contentProps={{ className: styles.content }}
    panelProps={{ className: styles.panel }}
  />
);

export * from '@szhsin/react-accordion';
export { Accordion, ControlledAccordion, AccordionItem };
