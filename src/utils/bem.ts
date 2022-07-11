import { ClassNameProp, Modifiers } from './constants';

/**
 * Generate className following BEM methodology: http://getbem.com/naming/
 * Modifier value can be one of the types: boolean, string
 */
const bem = <M extends Modifiers>(
  block: string,
  element?: string,
  modifiers?: M,
  className?: ClassNameProp<M>,
  addModifier?: boolean
) => {
  const blockElement = element ? `${block}__${element}` : block;

  let classString = blockElement;
  if (addModifier && modifiers)
    for (const name of Object.keys(modifiers)) {
      const value = modifiers[name];
      if (value) classString += ` ${blockElement}--${value === true ? name : `${name}-${value}`}`;
    }

  let expandedClassName = typeof className === 'function' ? className(modifiers!) : className;
  if (typeof expandedClassName === 'string') {
    expandedClassName = expandedClassName.trim();
    if (expandedClassName) classString += ` ${expandedClassName}`;
  }

  return classString;
};

export { bem };
