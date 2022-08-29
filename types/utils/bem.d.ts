import { ClassNameProp, Modifiers } from './constants';
/**
 * Generate className following BEM methodology: http://getbem.com/naming/
 * Modifier value can be one of the types: boolean, string
 */
declare const bem: (block: string, element?: string, modifiers?: Modifiers) => <P>(className?: ClassNameProp<P> | undefined, props?: P | undefined) => string;
export { bem };
