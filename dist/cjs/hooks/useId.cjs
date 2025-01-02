'use strict';

var React = require('react');
var constants = require('../utils/constants.cjs');

let current = 0;
const useIdShim = () => {
  const [id, setId] = React.useState();
  React.useEffect(() => setId(++current), []);
  return id && `${constants.ACCORDION_PREFIX}-${id}`;
};
const useId = React.useId || useIdShim;

exports.useId = useId;
