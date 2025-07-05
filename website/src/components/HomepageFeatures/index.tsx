import { type JSX } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const featureList: FeatureItem[] = [
  {
    title: 'Unstyled',
    description: (
      <>
        Providing behaviour and data/state management without enforcing
        any styles. Freely customising for your React app or design
        system.
      </>
    )
  },
  {
    title: 'Headless UI',
    description: (
      <>
        While the components render markup with good default settings,
        the React Hooks give you complete control of render outputs.
      </>
    )
  },
  {
    title: 'WAI-ARIA Compliant',
    description: (
      <>
        Fully accessible and compliant with the{' '}
        <Link to="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">
          Accordion Pattern
        </Link>
        . Supports keyboard navigation.
      </>
    )
  },
  {
    title: 'Animation',
    description: (
      <>
        Supports open and close animation with full state transition
        cycle, thanks to the{' '}
        <Link to="https://github.com/szhsin/react-transition-state">
          react-transition-state
        </Link>{' '}
        library.
      </>
    )
  }
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={styles.feature}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.featureList}>
      {featureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
