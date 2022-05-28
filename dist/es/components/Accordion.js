import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import { jsxs } from 'react/jsx-runtime';

var _excluded = ["message"];

var Accordion = function Accordion(_ref) {
  var message = _ref.message,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/jsxs("div", _extends({}, rest, {
    children: ["Accordion component ", message]
  }));
};

export { Accordion };
