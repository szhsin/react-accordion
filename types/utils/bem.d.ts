import { ClassNameProp, Modifiers } from './constants';
/**
 * Generate className following BEM methodology: http://getbem.com/naming/
 * Modifier value can be one of the types: boolean, string
 */
declare const bem: <M extends Modifiers>(block: string, element?: string, modifiers?: M | undefined, className?: ClassNameProp<M> | undefined) => string;
export { bem };
