import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';

var mergeProps = function mergeProps(target, source) {
  if (!source) return target;
  var result = _extends({}, target);
  Object.keys(source).forEach(function (key) {
    var targetProp = target[key];
    var sourceProp = source[key];
    if (typeof sourceProp === 'function' && targetProp) {
      result[key] = function () {
        targetProp.apply(void 0, arguments);
        sourceProp.apply(void 0, arguments);
      };
    } else {
      result[key] = sourceProp;
    }
  });
  return result;
};

export { mergeProps };
