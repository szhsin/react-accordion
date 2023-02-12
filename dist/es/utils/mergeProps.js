import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';

const mergeProps = (target, source) => {
  if (!source) return target;
  const result = _extends({}, target);
  Object.keys(source).forEach(key => {
    const targetProp = target[key];
    const sourceProp = source[key];
    if (typeof sourceProp === 'function' && targetProp) {
      result[key] = (...e) => {
        targetProp(...e);
        sourceProp(...e);
      };
    } else {
      result[key] = sourceProp;
    }
  });
  return result;
};

export { mergeProps };
