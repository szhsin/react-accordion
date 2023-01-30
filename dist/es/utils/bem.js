var bem = function bem(block, element, modifiers) {
  return function (className, props) {
    var blockElement = element ? block + "__" + element : block;
    var classString = blockElement;
    modifiers && Object.keys(modifiers).forEach(function (name) {
      var value = modifiers[name];
      if (value) classString += " " + blockElement + "--" + (value === true ? name : name + "-" + value);
    });
    var expandedClassName = typeof className === 'function' ? className(props) : className;
    if (typeof expandedClassName === 'string') {
      expandedClassName = expandedClassName.trim();
      if (expandedClassName) classString += " " + expandedClassName;
    }
    return classString;
  };
};

export { bem };
