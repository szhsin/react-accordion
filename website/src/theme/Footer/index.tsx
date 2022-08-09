import React from 'react';
import clsx from 'clsx';
import LinkItem from '@theme/Footer/LinkItem';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={clsx('footer footer--dark', styles.footer)}>
      <LinkItem
        item={{
          label: 'GitHub',
          href: 'https://github.com/szhsin/react-accordion'
        }}
      />
      <div className={styles.license}>
        Released under the MIT License.
      </div>
      <div>Copyright © {new Date().getFullYear()} Zheng Song.</div>
    </footer>
  );
}
