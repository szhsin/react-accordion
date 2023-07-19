import React, { useState, useEffect } from 'react';
import { ACCORDION_PREFIX } from '../utils/constants';

let current = 0;

const useIdShim = () => {
  const [id, setId] = useState<number>();
  useEffect(() => setId(++current), []);
  return (id && `${ACCORDION_PREFIX}-${id}`) as string | undefined;
};

const useId = React.useId || useIdShim;

export { useId };
