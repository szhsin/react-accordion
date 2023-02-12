const bem = (block, element, modifiers) => (className, props) => {
  const blockElement = element ? `${block}__${element}` : block;
  let classString = blockElement;
  modifiers && Object.keys(modifiers).forEach(name => {
    const value = modifiers[name];
    if (value) classString += ` ${blockElement}--${value === true ? name : `${name}-${value}`}`;
  });
  let expandedClassName = typeof className === 'function' ? className(props) : className;
  if (typeof expandedClassName === 'string') {
    expandedClassName = expandedClassName.trim();
    if (expandedClassName) classString += ` ${expandedClassName}`;
  }
  return classString;
};

export { bem };
