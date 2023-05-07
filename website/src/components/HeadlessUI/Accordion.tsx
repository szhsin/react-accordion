import React from 'react';
import {
  useAccordion,
  useAccordionProvider,
  AccordionProvider
} from '@szhsin/react-accordion';
import styles from '../accordion/styles.module.css';

const Accordion = ({ children }: { children: React.ReactNode }) => {
  const providerValue = useAccordionProvider({
    // Omit these two options if you don't want to implement any transition
    // highlight-start
    transition: true,
    transitionTimeout: 250
    // highlight-end
  });
  const { accordionProps } = useAccordion();

  return (
    <AccordionProvider value={providerValue}>
      <div className={styles.accordion} {...accordionProps}>
        {children}
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
