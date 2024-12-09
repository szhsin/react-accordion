export const transformCodeBlock = (source: string) =>
  source.replace(
    "from '../accordion'",
    "from '@szhsin/react-accordion'"
  );
