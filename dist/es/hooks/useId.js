import React, { useState, useEffect } from 'react';
import { ACCORDION_PREFIX } from '../utils/constants.js';

let current = 0;
const useIdShim = () => {
  const [id, setId] = useState();
  useEffect(() => setId(++current), []);
  return id && `${ACCORDION_PREFIX}-${id}`;
};
const useId = React.useId || useIdShim;

export { useId };
