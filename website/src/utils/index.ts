export const transformCodeBlock = (source: string) =>
  source
    .replace("import React from 'react';\n", '')
    .replace("from '../accordion'", "from '@szhsin/react-accordion'");
