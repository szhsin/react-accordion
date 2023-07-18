import React from 'react';
import { ACCORDION_PREFIX } from '../utils/constants.js';

const {
  useState,
  useEffect,
  useId
} = React;
let current = 0;
const useIdShim = () => {
  const [id, setId] = useState();
  useEffect(() => setId(++current), []);
  return id && `${ACCORDION_PREFIX}-${id}`;
};
const _useId = useId || useIdShim;

export { _useId as useId };
