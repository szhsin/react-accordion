var bem = function bem(block, element, modifiers, className, addModifier) {
  var blockElement = element ? block + "__" + element : block;
  var classString = blockElement;
  if (addModifier && modifiers) for (var _i2 = 0, _Object$keys2 = Object.keys(modifiers); _i2 < _Object$keys2.length; _i2++) {
    var name = _Object$keys2[_i2];
    var value = modifiers[name];
    if (value) classString += " " + blockElement + "--" + (value === true ? name : name + "-" + value);
  }
  var expandedClassName = typeof className === 'function' ? className(modifiers) : className;

  if (typeof expandedClassName === 'string') {
    expandedClassName = expandedClassName.trim();
    if (expandedClassName) classString += " " + expandedClassName;
  }

  return classString;
};

export { bem };
